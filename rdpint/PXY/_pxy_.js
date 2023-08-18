const PXY_TAG = '/PXY/';
async function registerProxyWorker(){
    if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register(
            '/PXY/_pxy_worker.js'
          );
        } catch (e) {
          console.error('Registration failed with ', e);
        }
    }

    function _replace(attr, pxyURL){
      const el = document.querySelectorAll('[' + attr + ']');
      for (var i = 0, len = el.length; i < len; i++){
        var item = el[i];
        console.log(attr + '--', item[attr], item);
        item[attr] = pxyURL.updateUrl(item[attr]);
      }
    }

    const pxyURL = new ProxyUrl(location.href);
    
    if (pxyURL.isValid()){
      window.addEventListener('DOMContentLoaded', function(e){
        _replace('src', pxyURL);
        _replace('href', pxyURL);
      });
    }
}
registerProxyWorker();

function ProxyUrl(path){
  var scheme = '',
  hostname = '',
  port = 443,
  valid = true,
  origin = '';

  this.isValid = function(){
      return valid;
  };

  var start = path.indexOf(PXY_TAG, 8);
  if (start == -1){
      valid = false;
      return;
  }

  origin = path.substring(0, start);

  start += PXY_TAG.length;
  
  var isScheme = true;
  var pos = path.indexOf('/', start);
  if (pos == -1){
      pos = path.indexOf('?', start);
  }

  if (pos == -1 || pos == path.length - 1){//must be server id or resource like /PXY/_pxy_.js
      isScheme = false;
      if (pos == -1){
          pos = path.length;
      }
  }

  var svrOrScheme = path.substring(start, pos);
  // var hostname;
  // var port;
  if (isScheme){//second check
      isScheme = 'http' == svrOrScheme || 'https' == svrOrScheme;
      if (isScheme){//third check it has the host/port part
          start = pos + 1;
          pos = path.indexOf('/', start);
          if (pos == -1){//no host part
              isScheme = false;
          }else{//port part
              hostname = path.substring(start, pos);
              start = pos + 1;
              pos = path.indexOf('/', start);
              if (pos == -1){
                  pos = path.length;
              }
              var sPort = path.substring(start, pos);
              port = parseFloat(sPort);
              if (isNaN(port) || !Number.isInteger(port)){//is server
                  isScheme = false;
              }
          }
      }
  }

  scheme = isScheme ? svrOrScheme : '', 
  hostname = isScheme ? hostname : svrOrScheme, 

  this.updateUrl = function(url){
      var old = new URL(url);
      var path = old.pathname;
      var hasTag = path.startsWith(PXY_TAG);
      var result = origin + PXY_TAG;
      if (!hasTag){
          if (origin == old.origin){
              result += (isScheme ? scheme + '/' + hostname + '/' + port : hostname);
          }else{
              var p = old.protocol;
              p = p.substring(0, p.length - 1);
              result += p + '/' + old.hostname + '/' + (old.port || (p == 'https' ? 443 : 80));
          }
          result += old.pathname + old.search;
          return result;
      }
      
      //The old url could be part of full url because of link like "../a.html"
      if (isScheme){
          if (path.startsWith(PXY_TAG + scheme + '/' + hostname + '/' + port)){
              return url;//no change
          }else { 
              var s = PXY_TAG + scheme + '/' + hostname + '/';
              if (path.startsWith(s)){//../../a.html
                  return old.origin + s + port + path.substring(s.length - 1) + old.search;
              }else{
                  s = PXY_TAG + scheme + '/';
                  if (path.startsWith(s)){//../..//a.html
                      return old.origin + s + hostname + '/' + port + path.substring(s.length - 1) + old.search;
                  }else{
                      //s = PXY_TAG
                      if (path.startsWith(PXY_TAG)){//../../..//a.html
                          return old.origin + PXY_TAG + '/' + scheme + '/' + hostname + '/' + port + path.substring(PXY_TAG.length - 1) + old.search;
                      }//else goes to !hasTag
                  }
              }
          }
      }else{
          if (!path.startsWith(PXY_TAG + hostname)){
              return result + hostname + path.substring(PXY_TAG.length - 1) + path.search;
          }else{
              return url;//no need to change
          }
      }
  };
}


function mutCallback(mutList){
  mutList.forEach(function(mutation) {
    switch(mutation.type) {
      case "attributes":
        switch(mutation.attributeName) {
          case "src":
            // userStatusChanged(mutation.target.username, mutation.target.status);
            console.log('src...', mutation.oldValue, mutation);
            break;
          case "href":
            // usernameChanged(mutation.oldValue, mutation.target.username);
            console.log('href...', mutation.oldValue, mutation);
            break;
        }
        break;
    }
  });
}

var mutObserver = new MutationObserver(mutCallback);
var root = document.documentElement || document.body;
console.log(root);
mutObserver.observe(root, {
  attributeFilter: ['src', 'href'],
  attributeOldValue: true,
  childList: true,
  subtree: true,
});