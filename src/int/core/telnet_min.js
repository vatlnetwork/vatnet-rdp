var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.checkStringArgs=function(g,l,p){if(null==g)throw new TypeError("The 'this' value for String.prototype."+p+" must not be null or undefined");if(l instanceof RegExp)throw new TypeError("First argument to String.prototype."+p+" must not be a regular expression");return g+""};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(g,l,p){if(g==Array.prototype||g==Object.prototype)return g;g[l]=p.value;return g};
$jscomp.getGlobal=function(g){g=["object"==typeof globalThis&&globalThis,g,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var l=0;l<g.length;++l){var p=g[l];if(p&&p.Math==Math)return p}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};
$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(g,l){var p=$jscomp.propertyToPolyfillSymbol[l];if(null==p)return g[l];p=g[p];return void 0!==p?p:g[l]};$jscomp.polyfill=function(g,l,p,D){l&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(g,l,p,D):$jscomp.polyfillUnisolated(g,l,p,D))};
$jscomp.polyfillUnisolated=function(g,l,p,D){p=$jscomp.global;g=g.split(".");for(D=0;D<g.length-1;D++){var L=g[D];if(!(L in p))return;p=p[L]}g=g[g.length-1];D=p[g];l=l(D);l!=D&&null!=l&&$jscomp.defineProperty(p,g,{configurable:!0,writable:!0,value:l})};
$jscomp.polyfillIsolated=function(g,l,p,D){var L=g.split(".");g=1===L.length;D=L[0];D=!g&&D in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var da=0;da<L.length-1;da++){var Z=L[da];if(!(Z in D))return;D=D[Z]}L=L[L.length-1];p=$jscomp.IS_SYMBOL_NATIVE&&"es6"===p?D[L]:null;l=l(p);null!=l&&(g?$jscomp.defineProperty($jscomp.polyfills,L,{configurable:!0,writable:!0,value:l}):l!==p&&($jscomp.propertyToPolyfillSymbol[L]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(L):$jscomp.POLYFILL_PREFIX+
L,L=$jscomp.propertyToPolyfillSymbol[L],$jscomp.defineProperty(D,L,{configurable:!0,writable:!0,value:l})))};$jscomp.polyfill("String.prototype.startsWith",function(g){return g?g:function(l,p){var D=$jscomp.checkStringArgs(this,l,"startsWith");l+="";var L=D.length,da=l.length;p=Math.max(0,Math.min(p|0,D.length));for(var Z=0;Z<da&&p<L;)if(D[p++]!=l[Z++])return!1;return Z>=da}},"es6","es3");var svManager={getInstance:function(){var g=window.$telnet;return g&&g.running&&g.running()?g:null}};
function connvertServer(g){var l={};l.id=g.id;l.server=g.id;l.displayName=g.displayName||g.id;if(g=g.vnc)for(var p in g)l[p]=g[p];return l}
svGlobal.TELNET=function(g,l,p){function D(b){h.loadbalanceToken||(G.randomAppId&&(b=hi5.tool.uuid()),h.loadbalanceToken=G.loadbalanceTokenName?G.loadbalanceTokenName+"="+b:"")}function L(b,a){var c=[],d=null,e=new hi5.graphic.Rectangle(0,0,0,0),E="Uint8ClampedArray"in window;this.width=b;this.height=a;var f=!1,H=this;this.pause=function(m){f=m};this.release=function(){c=d=H=null};this.isPaused=function(){return f};this.setContext=function(m){m!=d&&(d||!m||m.createImageData(1,1).data.buffer||(E=!1),
d=m)};this.getContext=function(){return d};this.resize=function(m,r){for(var u=0;u<r;u++)c[u]=new Uint32Array(m);H.width=b=m;H.height=a=r};H.resize(b,a);this.getBuffer=function(){return c};this.setRGB=function(m,r,u){c[r][m]=u|4278190080};this.getRGB=function(m,r){return c[r][m]};this.setRGBs=function(m,r,u,x,I,A,K){u=m+u;x=r+x;for(var B=c,F,O=r;O<x;O++,A+=K){var ea=A;F=B[O];for(r=m;r<u;r++)F[r]=I[ea++]}};this.moveArea=function(m,r,u,x,I,A){if(0<A){I=m+I;A=r+A;var K=c,B;for(B=x-1;0<=B;B--){var F=
K[A+B];var O=K[r+B];for(x=0;x<u;x++)F[I+x]=O[m+x]}}else if(0>A)for(I=m+I,A=r+A,K=c,F=0;F<x;F++){O=K[A+F];var ea=K[r+F];for(B=0;B<u;B++)O[I+B]=ea[m+B]}else if(0<I)for(I=m+I,A=r+A,K=c,--u;0<=u;u--)for(F=I+u,O=m+u,B=0;B<x;B++)K[A+B][F]=K[r+B][O];else for(I=m+I,A=r+A,K=c,B=0;B<u;B++)for(O=I+B,ea=m+B,F=0;F<x;F++)K[A+F][O]=K[r+F][ea]};this.getRGBs=function(m,r,u,x){var I=_Uint32Array(u*x);I[0]=0;var A=c;u=m+u;x=r+x;for(var K=0,B=r;B<x;B++)for(r=m;r<u;r++)I[K++]=A[B][r];return I};this.repaint=function(m,
r,u,x){if(d){0>m&&(u+=m,m=0);0>r&&(x+=r,r=0);m+u>b&&(u=b-m);r+x>a&&(x=a-r);var I=d.createImageData(u,x),A=I.data;u=m+u;x=r+x;var K=0,B=c;if(E){A=new Uint32Array(A.buffer);for(var F,O=r;O<x;O++)for(F=m;F<u;F++)A[K++]=B[O][F]}else for(O=r;O<x;O++)for(F=m;F<u;F++){var ea=B[O][F];var za=K<<2;A[za]=ea&255;A[za+1]=ea>>8&255;A[za+2]=ea>>16&255;A[za+3]=255;K++}d.putImageData(I,m,r)}};this.postPaint=function(m,r,u,x){0<e.width?e.union(m,r,u,x):(e.x=m,e.y=r,e.width=u,e.height=x)};this.commitPaint=function(){0<
e.width&&(this.repaint(e.x,e.y,e.width,e.height),e.width=0)};this.fillRect=function(m,r,u,x,I){var A=c;u=m+u;x=r+x;for(var K=r;K<x;K++)for(r=m;r<u;r++)A[K][r]=I}}function da(b,a){aa?aa.resize(b,a):aa=new L(b,a);return aa}function Z(){var b=g.indexOf("://"),a=g.substring(b+3);b=a.indexOf("/");0<b&&(a=a.substring(0,b));return location.protocol+"//"+a}function jb(b){return Aa?hi5.browser.httpGet(Z()+"/CLIP?s="+Aa+"&t="+(new Date).getTime(),!1):""}function va(b){return"on"==b||"true"==b||1==b}function Ta(){return q.displayName||
q.server||q.symlink||q.id||"undefined"}function Ua(b,a,c){this.need=b;this.handler=a;this.repeat=c||1}function kb(){if(!Q){Va();if(Fa)w=Fa;else{var b=h.getRuntimeURL(!0);w=h.oncreatewebsocket?h.oncreatewebsocket(b):new WebSocket(b,"telnet");w.binaryType="arraybuffer"}W.ws=w;svGlobal.logger.info(g);w.onopen=lb;void 0!=q.recording&&"on"==q.recording&&mb(q);w.onmessage=function(a){a=a.data;if("string"!=typeof a){var c=new Uint8Array(a);null!=ba&&ba.add(new RecordingObj(c,0,a.byteLength));ra.set(c,0,
a.byteLength);ra.handle()}else{var d=parseInt(a.substring(0,2),16);c=a.substring(2);switch(d){case 0:a=h.getRuntimeURL(!1);a=a.substring(a.indexOf("?")+1);w.send("00"+a);break;case 15:JSON.parse(c);if(h){if(h.onready)h.onready();if(h.onloggedin)h.onloggedin()}break;case 26:a=JSON.parse(c);if(a.name){svGlobal.logger.info("msg="+c);if(h.onerror)h.onerror(a);c=__svi18n.errorCode["S"+a.name]||"";c+=a.message||a.msg;h.showMessage(c)}else 0<svGlobal.log&&console.erro("No error code for message:"+c);break;
case 27:0!=G.drawLicense&&(J.drawLicense(c),Ga(q.fontSize));break;case 56:a=JSON.parse(c);Aa=a.session;D(a.appId);a.server||(a.server=Ta());if(c=hi5.$("joinSelect"))c.value=a.joinMode;if(c=hi5.$("requestControl"))c.disabled=a.hasControl;c=nb("jointelnet.html")+"?id="+a.numericId;c=h.modifyURL(c);var e=a.webAddress;e&&0<e.length&&(d=e.indexOf("://"),e=e.substring(d+3),d=e.indexOf("/"),0<d&&(e=e.substring(0,d)),e.toLowerCase()!=location.host.toLowerCase()&&(c+="&gateway="+e));a.joinLink=c;h.sessionInfo.appInfo=
a;a.ver&&a.ver!=svGlobal.version&&svGlobal.logger.warn("Client:"+svGlobal.version+" server:"+a.ver);if(h.onsessionstart)h.onsessionstart(h.sessionInfo);break;case 59:a=hi5.Base64.dec(c,0);Ha=a[3]<<24|a[2]<<16|a[1]<<8|a[0];Ha&64&&h.showMessage(__svi18n.info.recording);J.setFeature(Ha);break;case 61:a=JSON.parse(c);switch(a.type){case 0:q.fontSize=parseInt(a.fontSize);l=a.width;p=a.height;Va();J.setAutoScale(!0);Ba(l+N,p+N);a.server&&(h.server=a.server,c=Ta(),h.setTitle&&(document.title=c));Wa=a.length;
if(h.onopened)h.onopened(a);break;case 1:a=a.duration;if(h.onprogress)h.onprogress(a,Wa);break;case 2:2==a.status?Q=!0:(c=0==a.status,aa.pause(c),a.warn&&h.showMessage(c?__svi18n.info.sessionPaused:__svi18n.info.sessionResumed))}break;case 62:ob(c);break;default:svGlobal.logger.warn("@TODO:"+a+"\n")}}};w.onclose=Ca;w.onerror=pb;Ba(l+N,p+N)}}function mb(b){ba=new RecordingManager;ba.setHeader({name:"rec",width:b.width,height:b.height,color:b.fontSize,namesuffix:".telnetv",filetag:"TELV",duration:0})}
function qb(b,a){var c=0,d=!1;this.width=b;this.interval=a;var e=0;this.start=function(){d||(d=!0,c=setInterval(function(){if(J&&Q){var E=J.getThumbnail(b);E&&E.length!=e&&(w.send("8E7"+E),e=E.length)}},a))};this.stop=function(){clearInterval(c)}}function rb(b,a){!Y||Y.width==b&&Y.interval==a||(Y.stop(),Y=null);Y||(Y=new qb(b,a));Y.start()}function ob(b){var a=parseInt(b.substring(0,1),16),c=b.substring(1);b=!1;var d=h.sessionInfo.appInfo;switch(a){case 1:var e=JSON.parse(c);h.onsessionjoin&&(b=h.onsessionjoin(e));
if(b)break;h.showMessage(__svi18n.info.joinsession.applyArgs([e.numericId,e.__ip,e.name]));break;case 2:e=JSON.parse(c);h.onsessionexit&&(b=h.onsessionexit(e));if(b)break;h.showMessage(__svi18n.info.exitsession.applyArgs([e.numericId,e.__ip,e.name]));break;case 3:e=JSON.parse(c);d.joinMode!=e.mode&&(d.joinMode=e.mode,a=hi5.$("joinSelect"))&&(a.value=e.mode);if(d.hasControl)break;J.setReadOnly(!1);if(a=hi5.$("requestControl"))a.disabled=!0;h.ongivecontrol&&(b=h.ongivecontrol());if(b)break;h.showMessage(__svi18n.info.givecontrol);
break;case 4:J.setReadOnly(!0);d.hasControl=!1;if(a=hi5.$("requestControl"))a.disabled=!1;h.ontakebackcontrol&&(b=h.ontakebackcontrol());if(b)break;h.showMessage(__svi18n.info.nocontrol);break;case 5:e=JSON.parse(c);h.onrequirecontrol&&(b=h.onrequirecontrol(e));if(b)break;b=__svi18n.info.title.applyArgs([e.name,e.numericId,e.__ip]);h.showMessage({title:b,msg:__svi18n.info.recontrol,cbYes:function(){h.giveControl(e.numericId);this.destroy()},cbNo:function(){h.refuseControl(e.numericId);this.destroy()}});
break;case 6:J.setTouchRemoting(!0);break;case 7:e=JSON.parse(c);e.cols&&e.rows&&(b=z*e.cols+2*N,a=n*e.rows+2*N,aa=da(b,a),Ba(b,a));break;case 8:e=JSON.parse(c);if(h.onrequestcredential&&h.onrequestcredential(e))break;J.requestCredential(e);break;case 9:e=JSON.parse(c);0<e.interval&&0<e.width?rb(e.width,e.interval):Y&&(Y.stop(),Y=null);break;case 11:e=JSON.parse(c),h.onrequirejoin&&(b=h.onrequirejoin(e)),b||(b=__svi18n.info.title.applyArgs([e.name,e.numericId,e.__ip]),h.showMessage({title:b,msg:__svi18n.info.reqjoin,
cbYes:function(){h.allowJoin(e.numericId,!0);this.destroy()},cbNo:function(){h.allowJoin(e.numericId,!1);this.destroy()}}))}}function nb(b){var a=G.page&&G.page.join||"";if(a.startsWith("http://")||a.startsWith("https://"))return a;if(a.startsWith("/"))return location.origin+a;var c=location.href,d=c.lastIndexOf("/");if(a)return c.substring(0,d+1)+a;a=Z();c.toLowerCase().startsWith(a.toLowerCase())&&(a=c.substring(0,d));return a+"/"+b}function lb(b){svGlobal.logger.info("opened...");Q=!0;w.send("87"+
navigator.userAgent);if(h.onopen)h.onopen()}function pb(b){svGlobal.logger.warn(b)}function Ca(b){svGlobal.logger.warn("closed ...");fa&&(fa.style.display="none");Ia=Q=!1;if(h)if(h.onclose)h.onclose();else if(hi5.appcfg&&hi5.appcfg.returnUrl){window.location.href=hi5.appcfg.returnUrl;return}try{null!=ba&&(ba.exit(),ba=null),J&&J.close(),ka&&ka.visible()&&(ka.dismiss(),ka=null)}catch(a){}ra&&(ra.release(),ra=null);ha=k=null;w&&(w.onopen=null,w.onmessage=null,w.onclose=null,w=w.onerror=null);h=J=W=
null;window&&window.$telnet&&(window.$telnet=null);null!=ba&&(ba.exit(),ba=null)}function Ga(b,a){a||(a=X);k.font=b+"px "+a;z=k.measureText("X").width;pa=parseInt(p/n);S=parseInt(l/z);Ja(parseInt(p/n))}function Ja(b,a){a&&(ia=a);b&&(ca=b,Da=(ca-1)*n+C);Xa=1==ia&&ca==Math.floor(p/n)}function Ba(b,a){var c=b-N,d=a-N,e=Math.floor(d/n),E=Math.floor(c/z),f=null;Q&&(f=k.getImageData(0,0,Math.min(E*z+N,S*z+N),Math.min(e*n+N,pa*n+N)));l=c;p=d;J.setSize(b,a);Ga(q.fontSize);Ka();f&&k.putImageData(f,0,0);pa=
e;S=E;Ja(Math.floor(p/n))}function Va(){fa||(Ka(),v=y,t=C,10>q.fontSize&&(q.fontSize=10),12>=q.fontSize?(n=q.fontSize+6,wa=2):13<=q.fontSize&&18>q.fontSize?(n=q.fontSize+8,wa=2):19<=q.fontSize&&25>q.fontSize?(n=q.fontSize+12,wa=3):25<=q.fontSize&&(n=q.fontSize+16,wa=4),Ga(q.fontSize),fa=document.getElementById("cursorID"),fa.style.display="block",fa.style.width=z+"px",fa.style.height=n+"px",Ia=!0)}function Ka(){k.fillStyle=R;k.fillRect(0,0,ha.width,ha.height);k.fillStyle=T}function Ya(b,a){var c=
a.getPosition(),d="",e=a.getEnd(),E=a.getData();switch(b>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:d+=String.fromCharCode(b);break;case 12:case 13:if(c<e)d+=String.fromCharCode((b&31)<<6|E[c++]&63);else return a.needMore=!0,d;break;case 14:if(1<e-c)d+=String.fromCharCode((b&15)<<12|(E[c++]&63)<<6|(E[c++]&63)<<0);else return a.needMore=!0,d}a.setPosition(c);return d}function Za(b,a){if(0!=M||La[b])""!=ja&&Ma(ja),sb(b);else if(Na){var c=U[b]||"";ja=""!=c?ja+c:ja+Ya(b,a)}else ja+=Ya(b,
a)}function Oa(b){for(;;){var a=b.getByte();if(255==a&&(a=b.getByte(),240==a))break}}function sa(b,a,c){w.send("D5"+b+"\t"+a+"\t"+(1==c?1:0));251==b?Pa(a):252==b?Pa(a):253==b?Qa(a):254==b&&Qa(a)}function Pa(b){return 39>=b&&0<=b&&tb[b-0]}function Qa(b){return 39>=b&&0<=b&&ub[b-0]}function sb(b){switch(b){case 0:case 24:return M=0,!1;case 26:return M=0,!1;case 5:return!1;case 7:return!1;case 8:return v-=z,v<y&&(v=y),P(),!1;case 9:var a=(v-y)/z/8;a=parseInt(1*a)+1;v=8*a*z+y;v>=S*z&&(v=y,t+=n,ta("\n"));
P();return!1;case 13:return v=y,t>C+(ca-1)*n&&(t=C+(ca-1)*n),P(),!1;case 10:case 11:case 12:return $a(),!1;case 15:return!1;case 14:return!1;case 17:case 19:return!1;case 27:return la="",M=27,!1;default:if(128<=b&&159>=b)return!1}switch(M){case 0:return!0;case 27:if("\\"==b)return!1;if(32<=b&&47>=b)return la+=String.fromCharCode(b),!1;if(32<=b&&126>=b||160<=b){null==la&&(la="");switch(b){case 48:"("==la&&(Na=!0);break;case 65:t-=n;P();break;case 66:"("==la&&(Na=!1);break;case "C":v+=z;P();break;case 68:""==
la&&ab(1);P();break;case 72:v=y;t+=n;break;case 77:""==la&&bb(1);break;case "P":M=0;M=144;break;case "Y":M=161;break;case "c":M=0;break;case 91:ma="";M=0;M=155;break;case 93:M=0;M=157;break;case "^":M=0,M=158}27==M&&(M=0);return!1}return!0;case 155:if(48<=b&&63>=b||32<=b&&47>=b)return ma+=String.fromCharCode(b),!1;if(32<=b&&126>=b||160<=b){a=null;null==ma&&(ma="");""!=ma&&(a=ma.split(";"));switch(b){case 65:b=null!=a&&1<=a.length?parseInt(a[0]):1;t-=b*n;t<C&&(t=C);P();break;case 66:b=null!=a&&1<=
a.length?parseInt(a[0]):1;var c=t;t+=b*n;b=(t-c)/n;ta("\n",0==b?1:b);P();break;case 67:a=null!=a&&1<=a.length?parseInt(a[0]):1;v+=a*z;P();break;case 68:a=null!=a&&1<=a.length?parseInt(a[0]):1;v-=a*z;v<y&&(v=y);P();break;case 69:b=null!=a&&1<=a.length?parseInt(a[0]):1;c=t;t+=b*n;b=(t-c)/n;ta("\n",0==b?1:b);v=y;P();break;case 70:b=null!=a&&1<=a.length?parseInt(a[0]):1;t-=b*n;t<C&&(t=C);v=y;P();break;case 72:case 102:null!=a?(1<=a.length&&(b=parseInt(a[0]),c=t,t=C+(b-1)*n,b=(t-c)/n,ta("\n",0==b?1:b)),
2<=a.length&&(a=parseInt(a[1])-1,v=y+a*z)):""==ma&&(v=y,t=C);break;case 73:a=1<=a.length?parseInt(a[0]):1;v=y+8*a*z;break;case 74:null!=a&&1<=a.length?(a=parseInt(a[0]),1==a?(k.fillStyle=R,k.fillRect(y,C,S*z,t-chart_height-C),k.fillRect(y,t,t-y,chart_height),k.fillStyle=T):2==a&&(Ka(),v=y,t=C)):(k.fillStyle=R,k.fillRect(v,t,S*z-v+y,pa*n-t+C),k.fillStyle=T);break;case 75:null!=a&&1<=a.length?(a=parseInt(a[0]),1==a?Ra(y,v):2==a&&Ra(y,l+N),P()):Ra(v,l+N);break;case 76:null!=a&&1<=a.length&&(b=parseInt(a[0]),
bb(b),P());break;case 77:null!=a&&1<=a.length&&(b=parseInt(a[0]),ab(b),P());break;case 80:a=null!=a&&1<=a.length?parseInt(a[0]):1;a=k.getImageData(v+a*z,t,l+N-v-a*z,n);k.fillStyle=R;k.fillRect(v,t,l+N-v,n);k.putImageData(a,v,t);k.fillStyle=T;P();break;case 88:a=null!=a&&1<=a.length?parseInt(a[0]):1;k.fillStyle=R;k.fillRect(v,t,a*z,n);k.fillStyle=T;break;case 109:if(null==a||0==a.length)k.font="normal "+q.fontSize+"px "+X,T=q.fgColor||V[7],R=q.bgColor||V[0];else{b=a.length;for(var d=0;d<b;d++)switch(c=
1*a[d],c){case 0:k.font="normal "+q.fontSize+"px "+X;R=V[0];T=V[7];break;case 1:k.font="bold "+q.fontSize+"px "+X;break;case 4:break;case 5:k.font="italic "+q.fontSize+"px "+X;break;case 7:k.font="normal "+q.fontSize+"px "+X;R=V[7];T=V[0];break;case 22:k.font="normal "+q.fontSize+"px "+X;R=V[0];T=V[7];break;case 24:break;case 25:k.font="italic "+q.fontSize+"px "+X;break;case 27:k.font="normal "+q.fontSize+"px "+X;R=V[7];T=V[0];break;default:30<=a[d]&&39>=a[d]?T=V[a[d]-30+1]:40<=a[d]&&49>=a[d]&&(R=
V[a[d]-40+1])}}break;case 114:null!=a&&2<=a.length&&(b=parseInt(a[0]),a=parseInt(a[1]),Ja(a,b))}M=0;return!1}return!0;case 144:case 157:case 158:case 159:return 48<=b&&63>=b||32<=b&&47>=b?!1:32<=b&&126>=b||160<=b?(M=160,!1):!0;case 160:return 32<=b&&126>=b||160<=b?!1:!0;case 161:return M=162,!1;case 162:return M=0,!1;default:return M=0,!1}}function Ra(b,a){k.fillStyle=R;k.fillRect(b,t,a-b,n);k.fillStyle=T}function bb(b){var a=k.getImageData(y,C+(ia-1)*n,S*z,(ca-ia-b+1)*n);k.fillStyle=R;k.fillRect(y,
C+(ia-1)*n,S*z,n*b);k.putImageData(a,y,C+(ia+b-1)*n);k.fillStyle=T}function ab(b){var a=k.getImageData(y,(ia+b-1)*n+C,S*z,(ca-ia-b+1)*n);k.fillStyle=R;k.fillRect(y,(ca-b)*n+C,S*z,b*n);k.putImageData(a,y,(ia-1)*n+C);k.fillStyle=T}function $a(){t+=n;ta("\n");P();cb()}function cb(){v>=S*z&&(v=y,t+=n);if(t>Da){for(;t>Da;)t-=n;P();if(Xa){var b=ha.height-(C+n);k.drawImage(ha,0,C+n,ha.width,b,0,C,ha.width,b);k.fillStyle=R;k.fillRect(0,Da,ha.width,n)}else b=k.getImageData(y,C+n,S*z,(ca-1)*n),k.fillStyle=
R,k.fillRect(y,C,S*z,ca*n),k.putImageData(b,y,C);k.fillStyle=T}}function Ma(b){var a=b.length,c=((v-y)/z|0)+a-S;0<c?(a-=c,db(b.substring(0,a),a),cb(),Ma(b.substring(a))):(db(b,a),"--More--"==b.trim()&&$a())}function db(b,a){t+n>p&&(t=(pa-1)*n+C);k.fillStyle=R;k.fillRect(v,t,z*a,n);k.fillStyle=T;k.fillText(b,v,t+n-3*wa);v+=k.measureText(b).width;ta(b);P();ja=""}function P(){fa.style.top=t+"px";fa.style.left=v+"px"}function eb(b){if(Q&&xa)return(b=b.getData("text/plain"))?(b=b.replace(/\r\n/g,"\n"),
ua(b),!0):!1}function fb(){ka&&na&&!ka.visible()&&(na.value=qa,ka.show(),J&&J.setIgnorePaste(!1),setTimeout(function(){na.scrollTop=na.scrollHeight;na.disabled=!1},10))}function ta(b,a){if(ka){if(a)for(var c=0;c<a;c++)qa+=b;else qa+=b;1E5<qa.length&&(qa=qa.substring(4E4))}}function ua(b){if(b){var a=b.length+1,c=new Uint8Array(a);c[0]=147;for(var d=1;d<a;d++)c[d]=b.charCodeAt(d-1);w.send(c.buffer)}}function vb(b,a){b&&"text/plain"==a?eb(b):h.showMessage("Please use Ctrl+V or browser's Edit menu")}
sessionStorage&&sessionStorage.clear();var q=hi5.tool.queryToObj(g.substring(g.indexOf("?")+1)),xa=va(q.mapClipboard),na=xa?document.getElementById("copytextarea"):null;na&&(na.value="");var ka=na?new hi5.Lightbox(document.getElementById("copydialog")):null,qa="";this.displayMsg=!0;this.reconnectTimes=0;this.setTitle=this.openLink=!0;this.mode=0;var Fa="object"==typeof g?g:null,gb="object"==typeof g||0<g.indexOf("/PLAY?");gb?(this.mode=1,Fa&&(g=""),g+="&touchpad=on"):0<g.indexOf("/JOIN?")&&(this.mode=
2,this.reconnectOnResize=!1);hi5.appcfg||(hi5.appcfg={img:{},toolbar:{fadable:!0},displayMsg:!0});var G=hi5.appcfg;this.sessionInfo={major:0,minor:0,width:0,height:0,bpp:0,bigEndian:!0,trueColor:!0};var Aa="",J=null,Q=!1,Ia=!1,Ha=0,N=5,ba=null;window.$telnet=this;G.copyDialog=!0;for(var U=[],oa=0;127>oa;oa++)U[oa]=String.fromCharCode(oa);U[106]="+";U[107]="+";U[108]="+";U[109]="+";U[110]="+";U[113]="_";U[116]="+";U[117]="+";U[118]="+";U[119]="+";U[120]="|";(function(){for(var b={128:199,129:252,130:233,
131:226,132:228,133:224,134:229,135:231,136:234,137:235,138:232,139:239,140:238,141:236,142:196,143:197,144:201,145:230,146:198,147:244,148:246,149:242,150:251,151:249,152:255,153:214,154:220,155:162,156:163,157:165,158:8359,159:402,160:225,161:237,162:243,163:250,164:241,165:209,166:170,167:186,168:191,169:8976,170:172,171:189,172:188,173:161,174:171,175:187,176:9617,177:9618,178:9619,179:9474,180:9508,181:9569,182:9570,183:9558,184:9557,185:9571,186:9553,187:9559,188:9565,189:9564,190:9563,191:9488,
192:9492,193:9524,194:9516,195:9500,196:9472,197:9532,198:9566,199:9567,200:9562,201:9556,202:9577,203:9574,204:9568,205:9552,206:9580,207:9575,208:9576,209:9572,210:9573,211:9561,212:9560,213:9554,214:9555,215:9579,216:9578,217:9496,218:9484,219:9608,220:9604,221:9612,222:9616,223:9600,224:945,225:223,226:915,227:960,228:931,229:963,230:181,231:964,232:934,233:920,234:937,235:948,236:8734,237:966,238:949,239:8745,240:8801,241:177,242:8805,243:8804,244:8992,245:8993,246:247,247:8776,248:176,249:8729,
250:183,251:8730,252:8319,253:178,254:9632,255:160},a=128;256>a;a++)U[a]=String.fromCharCode(b[a])})();var ub=[!0,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],tb=[!0,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1],La=Array(256),hb=[0,5,7,8,9,10,11,12,13,14,15,17,19,24,26,27,127,132,133,136,141,142,143,144,146,155,156,157,158,159];for(oa=0;256>oa;oa++)La[oa]=
!1;for(var Sa=0;Sa<hb.length;Sa++)La[hb[Sa]]=!0;var ra=new function(b){var a=0,c=0,d=new Uint8Array(b),e=this,E=new Ua(0,null,0);this.needMore=!1;this.release=function(){e=d=E=null};this.getHandler=function(){return E};this.getData=function(){return d};this.getPosition=function(){return a};this.setPosition=function(f){a=f};this.getEnd=function(){return c};this.set=function(f,H,m){d=f;a=H;c=m};this.handle=function(){E.handler(e,E)};this.setHandler=function(f){f&&1>f.need&&svGlobal.logger.warn("need < 1");
(E=f)&&c-a>=f.need&&f.handler(e,f)};this.getByte=function(){return d[a++]};this.peekByte=function(){return d[a]};this.getBE32=function(){return d[a++]<<24|d[a++]<<16|d[a++]<<8|d[a++]};this.getBE16=function(){return d[a++]<<8|d[a++]};this.skip=function(f){a+=f};this.skipBack=function(f){a-=f};this.getBytes=function(f,H){if(H)for(var m=0;m<f;m++)H[m]=d[a++];else return H=a,a+=f,d.subarray(H,a)};this.copyToByteArray=function(f,H,m,r){hi5.Arrays.arraycopy(d,m,f,H,r)}}(4194304);this.setLinks=function(b){};
this.running=function(){return Q};this.getHistory=function(){return qa};this.mapCmdToCtrl=!0;var h=this,w=null;l||(l=window.innerWidth);l-=N;q.width=l;g+="&width="+l;p||(p=window.innerHeight);p-=N;q.height=p;g+="&height="+p;q.fontSize?q.fontSize=parseInt(q.fontSize,10):(q.fontSize=13,g+="&fontSize=13");this.server=q.server;this.port=q.port?parseInt(q.port,10):23;this.loadbalanceToken="";G.loadbalanceTokenName&&q[G.loadbalanceTokenName]&&D(q[G.loadbalanceTokenName]);this.modifyURL=function(b){h.loadbalanceToken&&
(b+="&"+h.loadbalanceToken);return b};var V="black red green yellow blue magenta cyan white gray violet".split(" "),aa=da(l,p),k=aa.getContext(),ha,W=new function(){this.ws=null;this.setJoinMode=h.setJoinMode;this.requestControl=h.requestControl;this.writeKeyComb=h.writeKeyComb;this.localLockFlags=0;this.checkLockFlags=!0;this.getAppMode=function(){return h.mode};this.send=function(a){"891"!=a&&Q&&this.ws.send(a)};this.sendInput=function(a){h.writeRawInput(a);if(h.onactivity)h.onactivity(a)};var b=
null;this.getAppInfo=function(){return h.sessionInfo.appInfo};this.onresize=function(a){if(a=a.target.svSurface){a=a.getFreeSpace();var c=a.width,d=a.height;hi5.browser.isTouch||hi5.browser.isOpera||!Q||(b&&(clearTimeout(b),b=null),b=setTimeout(function(){Ba(c,d);w.send("D9"+S+"\t"+pa)},200))}};this.onorientationchange=function(a){};this.getClipData=jb;this.onfocus=function(a){};this.fileCallback=[];this.getShareFiles=function(a,c){loggedin&&(this.ws.send("3A5"+a),this.fileCallback.push(c))};this.notifyFiles=
function(a){for(var c=this.fileCallback,d=0,e=c.length;d<e;d++)c[d](a)};this.getFile=function(a){window.open(h.getFileUrl(a))};this.removeFile=function(a){uploadMgr&&uploadMgr.fileService.remove(a)};this.getFileLink=function(a){return Z()+"/DOWNLOAD?s="+Aa+"&f="+a};this.getGateway=function(){return g};this.reconnect=function(a,c,d){};this.sendKeyboardSyncFlags=function(a){return Q?(this.remoteLockFlags=this.localLockFlags=a,!0):!1}};void 0!=G.displayMsg?this.displayMsg=G.displayMsg:G.displayMsg=this.displayMsg;
void 0!=G.reconnectTimes&&(this.reconnectTimes=G.reconnectTimes);void 0!=G.openLink&&(this.openLink=G.openLink);void 0!=G.setTitle&&(this.setTitle=G.setTitle);"boolean"==typeof G.useWSS&&(g=(G.useWSS?"wss":"ws")+g.substring(g.indexOf("://")));this.getURL=function(){return g};this.getRuntimeURL=function(b){var a=hi5.tool.replaceQuery(g,"pwd","x");a+="&binary=on";var c=window.opener;if(c){var d=null;try{d=c.__sparkUser}catch(e){}d&&(c=d.account,d=d.session,c&&(a+="&account="+c),d&&(a+="&session="+d))}a+=
"&pasteCap="+(hi5.browser.isChrome&&hi5.browser.isDesktop?3:0);b&&0==h.mode&&G.wsPost&&(a=g.substring(0,g.indexOf("?"))+"?_METHOD=post");a=h.modifyURL(a);(b=hi5.browser.cookie.get("__SV_TOKEN_A"))&&(a+="&__SV_TOKEN_A="+encodeURIComponent(b));return a};this.setJoinMode=function(b){Q&&w.send("8E1"+b)};this.refuseControl=function(b){Q&&w.send("8E3"+b)};this.giveControl=function(b){Q&&w.send("8E4"+b)};this.requestControl=function(){Q&&w.send("8E2")};this.play=function(){w.send("F3")};this.pause=function(){w.send("F2")};
this.scan=function(b){w.send("F4"+(b?"1":"0"))};this.seek=function(b){J&&Q&&(w.send("F4"+(b?"1":"0")+"\t"+(b/J.getScale().x|0)),aa.pause(!0))};this.allowJoin=function(b,a){w.send("8EA"+b+"\t"+(a?1:0))};var Y=null,Wa=0;this.run=function(){kb()};this.hide=function(){J&&("block"==document.getElementById("cursorID").style.display&&(document.getElementById("cursorID").style.display="none"),J.hide())};this.showMessage=function(b,a){h.displayMsg&&b&&(J?J.showMessage(b,a):("string"==typeof b&&(b={msg:b,timeout:a||
0}),hi5.notifications.notify(b)))};this.close=function(){if(w&&Q)try{w.send("85"),w.close()}catch(b){}else Ca()};hi5.browser.isChromeApp?chrome.runtime.onSuspend.addListener(Ca):window.addEventListener("unload",Ca,!1);var ib=!1,fa=null,y=N=5,C=5,v=0,t=0,X=q.fontFamily||q.fontName||"Courier New";0<X.indexOf(" ")&&(X='"'+X+'"');var T=q.fgColor||V[7],R=q.bgColor||V[0],M=0,ma="",la="",z=0,n=18,wa=0,ja="",Na=!1,pa=0,S=0,ia=1,ca=24,Da=0,Xa=!0,wb=new Ua(1024,function(b){var a=!0;for(b.needMore=!1;a;){var c=
b.getByte();if(0>c)break;if(255==c)a:{var d=b,e=d.getByte();switch(e){case 255:Za(e,d);break;case 254:case 253:case 252:case 251:c=d.getByte();d=e;253!=d||Pa(c)?251!=d||Qa(c)?254==d?sa(252,c,!1):252==d?sa(254,c,!1):253==d?(sa(251,c,!1),31==c?w.send("D9"+S+"\t"+pa):12==c&&w.send("D7")):251==d&&sa(253,c,!1):sa(254,c,!0):sa(252,c,!0);break;case 250:c=d.getByte();switch(c){case 24:c=d.getByte();Oa(d);if(1!=c)break;w.send("DA");break;case 32:c=d.getByte();Oa(d);if(1!=c)break;w.send("DC");break;default:Oa(d)}break;
default:break a}ib||(ib=!0,w.send("D0"))}else Za(c,b);b.getPosition()>=b.getEnd()&&(""!=ja&&Ma(ja),a=!1)}});ra.setHandler(wb);var ya=document.getElementById("svHistory");xa?ya&&(ya.onclick=fb):ya&&ya.parentNode.removeChild(ya);this.showHistory=fb;this.addSurface=function(b){J=b;gb&&b.setPlayerMode();aa.setContext(J.context);k=aa.getContext();ha=k.canvas;b.setAutoScale(0<h.mode);b.setSize(l+N,p+N);b.setController(W);b.setFastCopy(va(q.fastCopy));b.setTouchpad(va(q.touchpad));b.setClipboard(va(q.mapClipboard));
var a=void 0!=q.cmdToCtrl?va(q.cmdToCtrl):void 0!=G.cmdToCtrl?G.cmdToCtrl:h.mapCmdToCtrl;b.run(99997,!1,!0,a);xa&&(b.onclipdata=eb)};this.writeText=ua;this.writeScancode=function(b,a){ua(Ea.process(b,a,0))};var xb={" ":57,space:57,pageup:201,pagedown:209,end:207,home:199,left:203,up:200,right:205,down:208,printscreen:183,insert:210,del:211,"delete":211,altgr:184,windows:219,windowsright:220,context:221,esc:1,backspace:14,tab:15,enter:28,meta:29,command:29,ctrl:29,shift:42,alt:56,capslock:58,f1:59,
f2:60,f3:61,f4:62,f5:63,f6:64,f7:65,f8:66,f9:67,f10:68,f11:87,f12:88,numlock:69,scrolllock:70,add:78};this.writeKeyComb=function(b){b=b.split("+");var a=b.length;if(0!=a)for(var c=null,d=0;d<a;d++){var e=b[d];""==e&&""==c&&(e="Add");if(""!=e){c=e;var E=xb[c.toLowerCase()];E?h.writeScancode(!0,E):console.log("Invalid key:"+c)}c=e}};this.writeRawInput=function(b){if(Ia){var a=parseInt(b.substring(0,2),16);b=b.substring(2).split("\t");switch(a){case 128:2==b[2]&&xa&&J.processClipReq("text/plain",vb);
return;case 129:return;case 130:return;case 131:return;case 132:a=parseInt(b[1]);b=0==b[0];ua(Ea.process(b,a,0));return;case 139:a=parseInt(b[1]);b=0==b[0];ua(Ea.process(b,a,1));return;case 134:ua(Ea.process(!0,b[0],3));return}svGlobal.logger.warn("Unknowncode: "+b[1]+" type:"+a)}};var Ea=new function(b,a,c){var d=!1,e=!1,E=!1;this.process=function(f,H,m){if(3==m)return H;if(0==m){switch(H){case 29:case 157:return d=f,"";case 56:case 184:return e=f,"";case 42:case 54:return E=f,""}if(f){switch(H){case 28:f=
"\r\n";break;case 200:f="\u001b[A";break;case 208:f="\u001b[B";break;case 205:f="\u001b[C";break;case 203:f="\u001b[D";break;case 59:f="\u001bOP";break;case 60:f="\u001bOQ";break;case 61:f="\u001bOR";break;case 62:f="\u001bOS";break;case 63:f="\u001b[15~";break;case 64:f="\u001b[17~";break;case 65:f="\u001b[18~";break;case 66:f="\u001b[19~";break;case 67:f="\u001b[20~";break;case 68:f="\u001b[21~";break;case 87:f="\u001b[23~";break;case 88:f="\u001b[24~";break;case 15:f="\t";break;case 209:f="\u001b[6~";
break;case 201:f="\u001b[5~";break;case 199:f="\u001b[H";break;case 207:f="\u001b[F";break;case 14:f=E?"\b":"\u007f";break;case 211:f="\u001b[3~";break;case 197:f="\u00ff\u00f3";break;case 210:f="\u001b[2~";break;case 1:f="\u001b";break;case 55:f="*";break;case 71:f=W.localLockFlags&2?"7":"\u001b[H";break;case 72:f=W.localLockFlags&2?"8":"\u001b[A";break;case 73:f=W.localLockFlags&2?"9":"\u001b[5~";break;case 74:f="-";break;case 75:f=W.localLockFlags&2?"4":"\u001b[D";break;case 76:f="5";break;case 77:f=
W.localLockFlags&2?"6":"\u001b[C";break;case 78:f="+";break;case 79:f=W.localLockFlags&2?"1":"\u001b[F";break;case 80:f=W.localLockFlags&2?"2":"\u001b[B";break;case 81:f=W.localLockFlags&2?"3":"\u001b[6~";break;case 82:f=W.localLockFlags&2?"0":"\u001b[2~";break;case 83:f=W.localLockFlags&2?".":"\u001b[3~";break;case 156:f="\r\n";break;case 181:f="/";break;default:return console.log("Invalid code:"+H),""}e&&(f="\u001b"+f);return f}return""}if(1==m&&d){if(64<H&&91>H)return String.fromCharCode(H-64);
switch(H){case 54:return"\u001e";case 219:return"\u001b";case 220:return"\u001c";case 221:return"\u001d";case 32:return"\x00";case 192:return"\u001e";case 191:return"\u001f";default:return console.log("Invalid key code:"+H),""}}if(e)return"\u001b"+String.fromCharCode(H).toLowerCase()}}};