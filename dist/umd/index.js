!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i((e="undefined"!=typeof globalThis?globalThis:e||self).Easi={})}(this,(function(e){"use strict";var i=function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")};function s(e,i){for(var s=0;s<i.length;s++){var t=i[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var t=function(e,i,t){return i&&s(e.prototype,i),t&&s(e,t),e};var n=function(e,i,s){return i in e?Object.defineProperty(e,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[i]=s,e},a=function(){function e(){i(this,e),n(this,"SYS_ERROR",{code:100,data:"获取数据异常"}),n(this,"SYS_VERSION_ERROR",{code:100,data:"该Bridge在当前版本不支持，请升级APP"}),n(this,"SYS_CONFIG",{easiAgent:"EasiCustomer/",easiVersion:"1.8.10",easiUserVersion:"1.9.59",easiMalaysiaAgent:"EasiMalaysia/",easiMalaysiaVersion:"4.9.39",easiMalaysiaUserVersion:"4.9.39"}),n(this,"appVersion",null),this.ua=navigator.userAgent,this.isEasi=this.ua.includes(this.SYS_CONFIG.easiAgent),this.isMalaysia=this.ua.includes(this.SYS_CONFIG.easiMalaysiaAgent),this.isAndroid=this.ua.includes("Android")||this.ua.includes("android")||this.ua.includes("Linux"),this.isIos=this.ua.includes("iPhone")||this.ua.includes("iOS"),this.version()}return t(e,[{key:"isIos",value:function(){return this.isIos}},{key:"isAndroid",value:function(){return this.isAndroid}},{key:"isEasi",value:function(){return this.isEasi}},{key:"isMalaysia",value:function(){return this.isMalaysia}},{key:"setupWebViewJavascriptBridge",value:function(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(document.addEventListener("WebViewJavascriptBridgeReady",(function(){e(WebViewJavascriptBridge)}),!1),window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var i=document.createElement("iframe");i.style.display="none",i.src="https://__bridge_loaded__",document.documentElement.appendChild(i),setTimeout((function(){document.documentElement.removeChild(i)}),0)}},{key:"call",value:function(e,i,s){var t=this;this.setupWebViewJavascriptBridge((function(n){i&&"function"==typeof i&&(s=i,i=""),t.lowVersionTips(e,s)&&n.callHandler(e,i,(function(e){"string"==typeof e&&(e=JSON.parse(e)),s&&s(e)}))}))}},{key:"lowVersionTips",value:function(e,i){var s=["easi.location","easi.scan","easi.user"];return(!this.isEasi||s.includes(e)||this.compareVersionEle(this.appVersion,"2.4.0"))&&!(this.isMalaysia&&!s.includes(e)&&!this.compareVersionEle(this.appVersion,"5.4.0"))||i(this.SYS_VERSION_ERROR)}},{key:"callMyApp",value:function(e,i){if(this.isEasi){if(this.compareVersionEle(this.appVersion,this.SYS_CONFIG.easiVersion))return this.call(e,i)}else if(this.isMalaysia&&this.compareVersionEle(this.appVersion,this.SYS_CONFIG.easiMalaysiaVersion))return this.call(e,i);return i(this.SYS_ERROR)}},{key:"version",value:function(){var e=this.ua.split(" ");if(e.length>0){var i=this.isMalaysia?this.SYS_CONFIG.easiMalaysiaAgent:this.SYS_CONFIG.easiAgent;e[0].includes(i)&&(this.appVersion=e[0].replace(i,""))}}},{key:"compareVersionEle",value:function(e,i){if(!e||!i)return!1;for(var s=e.split("."),t=i.split("."),n=s.length>t.length?s.length:t.length,a=0;a<n;a++){if(parseInt(s[a])>parseInt(t[a]))return!0;if(parseInt(s[a])<parseInt(t[a]))return!1}return!0}},{key:"getVersion",value:function(e){return this.appVersion?e({code:0,data:this.appVersion}):e(this.SYS_ERROR)}},{key:"getLocation",value:function(e){if(!this.appVersion)return e(this.SYS_ERROR);this.callMyApp("easi.location",e)}},{key:"scan",value:function(e){if(!this.appVersion)return e(this.SYS_ERROR);this.callMyApp("easi.scan",e)}},{key:"user",value:function(e){if(!this.appVersion)return e(this.SYS_ERROR);this.callMyApp("easi.user",e)}},{key:"wx_share",value:function(e,i,s,t){return this.appVersion?(window.location.href="au.com.easi.customer://share/text?url=".concat(encodeURIComponent(e),"&title=").concat(i,"&text=").concat(s,"&mode=").concat(t,"&channel=1"),!0):callback(this.SYS_ERROR)}},{key:"login",value:function(e){if(!this.appVersion)return e(this.SYS_ERROR);this.callMyApp("easi.login",e)}},{key:"test",value:function(e){return this.call("easi.test",e)}}]),e}();e.Easi=a,Object.defineProperty(e,"__esModule",{value:!0})}));
