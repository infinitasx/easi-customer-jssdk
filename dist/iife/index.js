var Easi=function(e){"use strict";function i(e,i){for(var a=0;a<i.length;a++){var n=i[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,i,a){return i in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a,e}var n=function(){function e(){!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"SYS_ERROR",{code:100,data:""}),a(this,"SYS_CONFIG",{easiAgent:"EasiCustomer/",easiVersion:"1.8.10",easiUserVersion:"1.9.59",easiMalaysiaAgent:"EasiMalaysia/",easiMalaysiaVersion:"4.9.39",easiMalaysiaUserVersion:"4.9.39"})}var n,s,t;return n=e,(s=[{key:"setupWebViewJavascriptBridge",value:function(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(document.addEventListener("WebViewJavascriptBridgeReady",(function(){e(WebViewJavascriptBridge)}),!1),window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var i=document.createElement("iframe");i.style.display="none",i.src="https://__bridge_loaded__",document.documentElement.appendChild(i),setTimeout((function(){document.documentElement.removeChild(i)}),0)}},{key:"call",value:function(e,i,a){this.setupWebViewJavascriptBridge((function(n){i&&"function"==typeof i&&(a=i,i=""),n.callHandler(e,i,(function(e){"string"==typeof e&&(e=JSON.parse(e)),a&&a(e)}))}))}},{key:"version",value:function(){var e="",i=navigator.userAgent.split(" ");if(i.length>0){var a=this.isMalaysia()?this.SYS_CONFIG.easiMalaysiaAgent:this.SYS_CONFIG.easiAgent,n=i[0].indexOf(a);-1!=n&&(e=i[0].substring(n+a.length))}return e}},{key:"isEasi",value:function(){var e=!1,i=navigator.userAgent.split(" ");return i.length>0&&-1!=i[0].indexOf(this.SYS_CONFIG.easiAgent)&&(e=!0),e}},{key:"isMalaysia",value:function(){var e=!1,i=navigator.userAgent.split(" ");return i.length>0&&-1!=i[0].indexOf(this.SYS_CONFIG.easiMalaysiaAgent)&&(e=!0),e}},{key:"compareVersionEle",value:function(e,i){if(!e||!i)return!1;for(var a=e.split("."),n=i.split("."),s=0;s<a.length;s++){if(parseInt(a[s])>parseInt(n[s]))return!0;if(parseInt(a[s])<parseInt(n[s]))return!1}return!1}},{key:"isAndroid",value:function(){var e=navigator.userAgent;return e.indexOf("Android")>-1||e.indexOf("android")>-1||e.indexOf("Linux")>-1}},{key:"isIos",value:function(){var e=navigator.userAgent;return e.indexOf("iPhone")>-1||e.indexOf("iOS")>-1}},{key:"getVersion",value:function(e){var i=this.version();return e(i?{code:0,data:i}:this.SYS_ERROR)}},{key:"getLocation",value:function(e){var i=this.version();if(!i)return e(this.SYS_ERROR);if(this.isEasi()){if(this.compareVersionEle(i,this.SYS_CONFIG.easiVersion))return easi.call("easi.location",e)}else if(this.isMalaysia()&&this.compareVersionEle(i,this.SYS_CONFIG.easiMalaysiaVersion))return easi.call("easi.location",e);return e(this.SYS_ERROR)}},{key:"scan",value:function(e){var i=this.version();if(!i)return e(this.SYS_ERROR);if(this.isEasi()){if(this.compareVersionEle(i,this.SYS_CONFIG.easiVersion))return easi.call("easi.scan",e)}else if(this.isMalaysia()&&this.compareVersionEle(i,this.SYS_CONFIG.easiMalaysiaVersion))return easi.call("easi.scan",e);return e(this.SYS_ERROR)}},{key:"user",value:function(e){var i=this.version();if(!i)return e(this.SYS_ERROR);if(this.isEasi()){if(this.compareVersionEle(i,this.SYS_CONFIG.easiUserVersion))return easi.call("easi.user",e)}else if(this.isMalaysia()&&this.compareVersionEle(i,this.SYS_CONFIG.easiMalaysiaUserVersion))return easi.call("easi.user",e);return e(this.SYS_ERROR)}},{key:"wx_share",value:function(e,i,a,n){return!!this.version()&&(window.location.href="au.com.easi.customer://share/text?url="+encodeURIComponent(e)+"&title="+i+"&text="+a+"&mode="+n+"&channel=1",!0)}}])&&i(n.prototype,s),t&&i(n,t),e}();return e.Easi=n,Object.defineProperty(e,"__esModule",{value:!0}),e}({});
