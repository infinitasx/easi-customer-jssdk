!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i((e="undefined"!=typeof globalThis?globalThis:e||self).Easi={})}(this,(function(e){"use strict";function i(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function n(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}var t=function(){function e(){!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"SYS_ERROR",{code:100,data:""}),n(this,"SYS_CONFIG",{easiAgent:"EasiCustomer/",easiVersion:"1.8.10",easiUserVersion:"1.9.59",easiMalaysiaAgent:"EasiMalaysia/",easiMalaysiaVersion:"4.9.39",easiMalaysiaUserVersion:"4.9.39"})}var t,a,s;return t=e,(a=[{key:"setupWebViewJavascriptBridge",value:function(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(document.addEventListener("WebViewJavascriptBridgeReady",(function(){e(WebViewJavascriptBridge)}),!1),window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var i=document.createElement("iframe");i.style.display="none",i.src="https://__bridge_loaded__",document.documentElement.appendChild(i),setTimeout((function(){document.documentElement.removeChild(i)}),0)}},{key:"call",value:function(e,i,n){this.setupWebViewJavascriptBridge((function(t){i&&"function"==typeof i&&(n=i,i=""),t.callHandler(e,i,(function(e){"string"==typeof e&&(e=JSON.parse(e)),n&&n(e)}))}))}},{key:"version",value:function(){var e="",i=navigator.userAgent.split(" ");if(i.length>0){var n=this.isMalaysia()?this.SYS_CONFIG.easiMalaysiaAgent:this.SYS_CONFIG.easiAgent,t=i[0].indexOf(n);-1!=t&&(e=i[0].substring(t+n.length))}return e}},{key:"isEasi",value:function(){var e=!1,i=navigator.userAgent.split(" ");return i.length>0&&-1!=i[0].indexOf(this.SYS_CONFIG.easiAgent)&&(e=!0),e}},{key:"isMalaysia",value:function(){var e=!1,i=navigator.userAgent.split(" ");return i.length>0&&-1!=i[0].indexOf(this.SYS_CONFIG.easiMalaysiaAgent)&&(e=!0),e}},{key:"compareVersionEle",value:function(e,i){if(!e||!i)return!1;for(var n=e.split("."),t=i.split("."),a=0;a<n.length;a++){if(parseInt(n[a])>parseInt(t[a]))return!0;if(parseInt(n[a])<parseInt(t[a]))return!1}return!1}},{key:"isAndroid",value:function(){var e=navigator.userAgent;return e.indexOf("Android")>-1||e.indexOf("android")>-1||e.indexOf("Linux")>-1}},{key:"isIos",value:function(){var e=navigator.userAgent;return e.indexOf("iPhone")>-1||e.indexOf("iOS")>-1}},{key:"getVersion",value:function(e){var i=this.version();return e(i?{code:0,data:i}:this.SYS_ERROR)}},{key:"getLocation",value:function(e){var i=this.version();if(!i)return e(this.SYS_ERROR);if(this.isEasi()){if(this.compareVersionEle(i,this.SYS_CONFIG.easiVersion))return this.call("easi.location",e)}else if(this.isMalaysia()&&this.compareVersionEle(i,this.SYS_CONFIG.easiMalaysiaVersion))return this.call("easi.location",e);return e(this.SYS_ERROR)}},{key:"scan",value:function(e){var i=this.version();if(!i)return e(this.SYS_ERROR);if(this.isEasi()){if(this.compareVersionEle(i,this.SYS_CONFIG.easiVersion))return this.call("easi.scan",e)}else if(this.isMalaysia()&&this.compareVersionEle(i,this.SYS_CONFIG.easiMalaysiaVersion))return this.call("easi.scan",e);return e(this.SYS_ERROR)}},{key:"user",value:function(e){var i=this.version();if(!i)return e(this.SYS_ERROR);if(this.isEasi()){if(this.compareVersionEle(i,this.SYS_CONFIG.easiUserVersion))return this.call("easi.user",e)}else if(this.isMalaysia()&&this.compareVersionEle(i,this.SYS_CONFIG.easiMalaysiaUserVersion))return this.call("easi.user",e);return e(this.SYS_ERROR)}},{key:"wx_share",value:function(e,i,n,t){return!!this.version()&&(window.location.href="au.com.easi.customer://share/text?url="+encodeURIComponent(e)+"&title="+i+"&text="+n+"&mode="+t+"&channel=1",!0)}}])&&i(t.prototype,a),s&&i(t,s),e}();e.Easi=t,Object.defineProperty(e,"__esModule",{value:!0})}));
