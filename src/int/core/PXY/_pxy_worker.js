"use strict";
/* Porxy Service worker */
const PXY_TAG = '/PXY/';
const WRK_VER = '1.0';
var FETCH_OPT = {
    credentials: 'include', 
    redirect: 'follow',
    mode: 'cors',
    // referrerPolicy: 'unsafe-url', 
    referrer: '',
    // cache: 'default',
    headers: {'gw_wrk_ver': WRK_VER}
};

var _proxies = {};


self.addEventListener('fetch', e => {
    const resp = doRequest(e).catch(e => new Response(null, {status: 502, statusText: 'Bad Gateway'}));
    e.respondWith(resp);
});

async function doRequest(e){
    var url = e.request.url;
    console.log(url, e);
    
    var from = e.request.referrer;
    FETCH_OPT.referrer = from;

    var pxyUrl;
    if (e.resultingClientId){//an new window, site etc
        pxyUrl = new ProxyUrl(url);
        if (pxyUrl.isValid()){
            console.log("proxy,", url);
            _proxies[e.resultingClientId] = pxyUrl;
        }else{
            console.log("no possible, proxy,", url);
        }
        return fetch(e.request, FETCH_OPT);
    }

    pxyUrl = _proxies[e.clientId];

    if (pxyUrl){//load it first
        var newUrl = pxyUrl.updateUrl(url);
        console.log('pxy load, ', url, newUrl);
        return fetch(newUrl, FETCH_OPT);
    }

    pxyUrl = new ProxyUrl(url);
    if (!from || pxyUrl.isValid){
        console.log('proxy url, ', url);
        return fetch(url, FETCH_OPT);
    }else{
        console.log('proxy ref url, ', from);
        pxyUrl = new ProxyUrl(from);
        return fetch(pxyUrl.updateUrl(url), FETCH_OPT);
    }


    // if (clientId){
    //     __setSiteRef(from, clientId)
    //     return fetch(pxyUrl, FETCH_OPT);
    // }else{//opened in an new window
    //     return getRedirResp(pxyUrl);
    // }
}

function __setSiteRef(from, clientId){
    if (clientId && !_proxies[clientId]){
        _proxies[clientId] = from;
        console.log("Set ref url: " + from + " for " + clientId);
    }
}

// function __fetch(req, opt){
//     const newReq = new Request(req, opt);
//     return fetch(newReq);
// }

/**
rewriteUrl('http://127.0.0.1/a.js', 'http://127.0.0.1/PXY/serverId');
rewriteUrl('http://127.0.0.1/a.js', 'http://127.0.0.1/PXY/serverId/');
rewriteUrl('http://127.0.0.1/a.js', 'http://127.0.0.1/PXY/serverId/a.html');

rewriteUrl('http://127.0.0.1/a.js', 'http://127.0.0.1/PXY/https/remotespark.com/443');
rewriteUrl('http://127.0.0.1/a.js', 'http://127.0.0.1/PXY/https/remotespark.com/443/');
rewriteUrl('http://127.0.0.1/a.js', 'http://127.0.0.1/PXY/https/remotespark.com/443/a.html');


rewriteUrl('http://www.myhost.com/a.js', 'http://127.0.0.1/PXY/serverId/a.html');
rewriteUrl('http://www.myhost.com/a.js', 'http://127.0.0.1/PXY/https/remotespark.com/443/a.html');
*/
function rewriteUrl(req, ref){
    req = new URL(req);
    ref = new URL(ref);
    var path = ref.pathname;
    if (!path.startsWith(PXY_TAG) || req.pathname.startsWith('/_pxy_')){
        return req;
    }

    var start = PXY_TAG.length;
    var pos = path.indexOf('/', start);
    
    var isScheme = true;

    if (pos == -1 || pos == path.length - 1){//must be server id or resource like /PXY/_pxy_.js
        isScheme = false;
        if (pos == -1){
            pos = path.length;
        }
    }

    var svrOrScheme = path.substring(start, pos);
    var hostname;
    var port;
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

    //req: http://www.remotespark.com/a.js, ref: http://127.0.0.1/serverId/
    //We don't know the server id of remotepsark.com in this case
    var sameOrigin = req.hostname == ref.hostname;
    if (!sameOrigin){
        isScheme = true;
        svrOrScheme = req.protocol.substring(0, req.protocol.length - 1);
        hostname = req.hostname;
        port = req.port || (req.protocol == 'https:' ? 443 : 80);
    }

    var newOrigin = ref.origin + PXY_TAG + svrOrScheme;
    if (isScheme){
        newOrigin += '/' + hostname + '/' + port;
    }

    return newOrigin + req.pathname + req.search;
}

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

function getRedirResp(url){
    const status = 302;//FOUND
    const statusText = "Found";
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Location': url
    };
    return new Response(null, {status, statusText, headers});
}

function getErrResp(status, statusText){
    return new Response(null, {status, statusText});
}

/**
 * 
 * @param {*} ref referrer URL object
 * @param {*} url requst URL object
 * @param {*} clientId 
 */
function parseReferrer(ref, url, clientId){
    var svr = null;
    if (clientId){
        svr = _proxies[clientId];
        if (svr){
            return svr;
        }
    }




    return svr;
}

/**
 * 
 * @param {*} referrer, the refeere url
 * @param {*} index index of "/PXY/"
 * @param {*} url  the request url 
 * @returns taget can be a server id (/PXY/ServerID/), or full adreee like /PXY/https/host/port/
 */
function getProxyUrl(referrer, index, url, clientId){
    var refURL = new URL(referrer);
    var reqURL = new URL(url);

    if (reqURL.pathname.startsWith('/_pxy_')){//proxy resource
        return url;
    }
    

    var wwwAdr = refURL.origin; 
    if (refURL.hostname != reqURL.hostname){//
        return wwwAdr + PXY_TAG
        + reqURL.protocol.substring(0, reqURL.protocol.length - 1)
        + '/' + reqURL.hostname + '/' + (reqURL.port || (reqURL.protocol = 'https:' ? 443 : 80))
        + reqURL.pathname + reqURL.search;
    }

    var start = index + PXY_TAG.length;
    var pos = referrer.indexOf('/', start);

    if (pos == -1){//must be server id or resource
        pos = referrer.indexOf('?', start);
        if (pos == -1){
            pos = referrer.length;
        }
        return wwwAdr + referrer.substring(index, pos) + reqURL.pathname + reqURL.search;
    }

    var svrOrScheme = referrer.substring(start, pos);
    var isScheme = 'http' == svrOrScheme || 'https' == svrOrScheme;
    if (!isScheme){
        return wwwAdr + PXY_TAG + svrOrScheme  + reqURL.pathname + reqURL.search;
    }

    //double check
    //host part
    start = pos + 1;
    pos = referrer.indexOf('/', start);
    if (pos == -1){//no host
        return wwwAdr + PXY_TAG + svrOrScheme  + reqURL.pathname + reqURL.search;
    }
    //port part
    start = pos + 1;
    pos = referrer.indexOf('/', start);
    if (pos == 1){
        pos = referrer.indexOf('?', start);
        if (pos == -1){
            pos = referrer.length;
        }
    }

    var sPort = referrer.substring(start, pos);
    var f = parseFloat(sPort);
    if (isNaN(f) || !Number.isInteger(f)){//is server
        return wwwAdr + PXY_TAG + svrOrScheme + reqURL.pathname + reqURL.search;
    }

    //really http/https
    return wwwAdr + referrer.substring(index, pos) + reqURL.pathname + reqURL.search;

}


function newResponse(status, statusText, body, headers) {
    if (!status){
        status = 200;
    }

    if (!headers){
        headers = {}
    }
    headers['access-control-allow-origin'] = '*'
    return new Response(body, {status, statusText, headers})
  }
  