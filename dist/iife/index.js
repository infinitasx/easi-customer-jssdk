var Easi=function(i){"use strict";var e=function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")};function s(i,e){for(var s=0;s<e.length;s++){var t=e[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(i,t.key,t)}}var t=function(i,e,t){return e&&s(i.prototype,e),t&&s(i,t),i};var a=function(i,e,s){return e in i?Object.defineProperty(i,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[e]=s,i},n=function(){function i(){e(this,i),a(this,"SYS_ERROR",{code:100,data:"获取数据异常"}),a(this,"SYS_VERSION_ERROR",{code:100,data:"该Bridge在当前版本不支持，请升级APP"}),a(this,"PARAMES_ERROR",{code:100,data:"参数错误"}),a(this,"SYS_CONFIG",{easiAgent:"EasiCustomer/",easiVersion:"1.8.10",easiUserVersion:"1.9.59",easiMalaysiaAgent:"EasiMalaysia/",easiMalaysiaVersion:"4.9.39",easiMalaysiaUserVersion:"4.9.39"}),a(this,"appVersion",null),this.ua=navigator.userAgent,this.isEasi=this.ua.includes(this.SYS_CONFIG.easiAgent),this.isMalaysia=this.ua.includes(this.SYS_CONFIG.easiMalaysiaAgent),this.isAndroid=this.ua.includes("Android")||this.ua.includes("android")||this.ua.includes("Linux"),this.isIos=this.ua.includes("iPhone")||this.ua.includes("iOS"),this.version()}return t(i,[{key:"isIos",value:function(){return this.isIos}},{key:"isAndroid",value:function(){return this.isAndroid}},{key:"isEasi",value:function(){return this.isEasi}},{key:"isMalaysia",value:function(){return this.isMalaysia}},{key:"setupWebViewJavascriptBridge",value:function(i){if(window.WebViewJavascriptBridge)return i(WebViewJavascriptBridge);if(document.addEventListener("WebViewJavascriptBridgeReady",(function(){i(WebViewJavascriptBridge)}),!1),window.WVJBCallbacks)return window.WVJBCallbacks.push(i);window.WVJBCallbacks=[i];var e=document.createElement("iframe");e.style.display="none",e.src="https://__bridge_loaded__",document.documentElement.appendChild(e),setTimeout((function(){document.documentElement.removeChild(e)}),0)}},{key:"call",value:function(i,e,s){var t=this;this.setupWebViewJavascriptBridge((function(a){t.lowVersionTips(i,e)&&a.callHandler(i,s,(function(i){"string"==typeof i&&(i=JSON.parse(i)),e&&e(i)}))}))}},{key:"lowVersionTips",value:function(i,e){var s=["easi.location","easi.scan","easi.user"];return(!this.isEasi||s.includes(i)||this.compareVersionEle(this.appVersion,this.isAndroid?"2.5.0":"2.4.0"))&&!(this.isMalaysia&&!s.includes(i)&&!this.compareVersionEle(this.appVersion,this.isAndroid?"5.5.0":"5.4.0"))||e(this.SYS_VERSION_ERROR)}},{key:"callMyApp",value:function(i,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(this.isEasi){if(this.compareVersionEle(this.appVersion,this.SYS_CONFIG.easiVersion))return this.call(i,e,s)}else if(this.isMalaysia&&this.compareVersionEle(this.appVersion,this.SYS_CONFIG.easiMalaysiaVersion))return this.call(i,e),s;return e(this.SYS_ERROR)}},{key:"version",value:function(){var i=this.ua.split(" ");if(i.length>0){var e=this.isMalaysia?this.SYS_CONFIG.easiMalaysiaAgent:this.SYS_CONFIG.easiAgent;i[0].includes(e)&&(this.appVersion=i[0].replace(e,""))}}},{key:"compareVersionEle",value:function(i,e){if(!i||!e)return!1;for(var s=i.split("."),t=e.split("."),a=s.length>t.length?s.length:t.length,n=0;n<a;n++){if(parseInt(s[n])>parseInt(t[n]))return!0;if(parseInt(s[n])<parseInt(t[n]))return!1}return!0}},{key:"getVersion",value:function(i){return this.appVersion?i({code:0,data:this.appVersion}):i(this.SYS_ERROR)}},{key:"getLocation",value:function(i){if(!this.appVersion)return i(this.SYS_ERROR);this.callMyApp("easi.location",i)}},{key:"scan",value:function(i){if(!this.appVersion)return i(this.SYS_ERROR);this.callMyApp("easi.scan",i)}},{key:"user",value:function(i){if(!this.appVersion)return i(this.SYS_ERROR);this.callMyApp("easi.user",i)}},{key:"wx_share",value:function(i,e,s,t){return window.location.href="au.com.easi.customer://share/text?url=".concat(encodeURIComponent(i),"&title=").concat(e,"&text=").concat(s,"&mode=").concat(t,"&channel=1"),!0}},{key:"login",value:function(i){if(!this.appVersion)return i(this.SYS_ERROR);this.callMyApp("easi.login",i)}},{key:"addCart",value:function(i,e){if(!this.appVersion)return i(this.SYS_ERROR);this.callMyApp("easi.login",i)}},{key:"addCart",value:function(i,e){var s=e.itemId,t=e.openDetails,a=void 0===t||t;return this.appVersion?s?(s&&"string"==typeof s&&(s=Number(s)),void this.callMyApp("easi.addCart",i,{itemId:s,openDetails:a})):i(this.PARAMES_ERROR):i(this.SYS_ERROR)}},{key:"showCart",value:function(i,e){var s=e.show,t=void 0!==s&&s;if(!this.appVersion)return i(this.SYS_ERROR);this.callMyApp("easi.showCart",i,{show:t})}},{key:"test",value:function(i){return this.call("easi.test",i)}}]),i}();return i.Easi=n,Object.defineProperty(i,"__esModule",{value:!0}),i}({});
