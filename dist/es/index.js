var e="EasiCustomer/",n="EasiMalaysia/",i=function(e,n,i){switch(n.complete&&n.complete({errMsg:"".concat(i,":complete")}),e.code){case 0:n.success&&n.success({errMsg:"".concat(i,":ok"),result:null==e?void 0:e.data});break;case 1:n.cancel&&n.cancel({errMsg:"".concat(i,":cancel")});break;default:n.fail&&n.fail({errMsg:"".concat(i,":fail")})}},a=function(e,n,i,a){!function(e){if(window.WebViewJavascriptBridge)return e(window.WebViewJavascriptBridge);if(document.addEventListener("WebViewJavascriptBridgeReady",(function(){e(window.WebViewJavascriptBridge)}),!1),window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var n=document.createElement("iframe");n.style.display="none",n.src="https://__bridge_loaded__",document.documentElement.appendChild(n),setTimeout((function(){document.documentElement.removeChild(n)}),0)}((function(t){t.callHandler("easi.".concat(e),n,(function(n){"string"==typeof n&&(n=JSON.parse(n)),i(n,a,e)}))}))},t={state:0,data:{}};const c={config:function(e){e.debug&&console.log("debug:".concat(JSON.stringify(e))),a("login",{},(function(n){if(-1===n.code)return t.data=e,t.fail&&t.fail();t.state=1,t.completes&&t.completes()}),e)},checkJsApi:function(){},ready:function(e){0!==t.state?e&&e():t.completes=e},error:function(e){-1===t.state?e&&e(t.data):t.fail=e},test:function(e){a("login",{},i,e)},getEnv:function(){var i=navigator.userAgent,a=i.includes(e),t=i.includes(n),c=i.includes("Android")||i.includes("android")||i.includes("Linux"),s=i.includes("iPhone")||i.includes("iOS");return{ua:i,isEasi:a,isMalaysia:t,isAndroid:c,isIos:s,version:function(i){var a=i.ua.split(" ");if(a.length>0){var t=i.isMalaysia?n:e;if(a[0].includes(t))return a[0].replace(t,"")}return null}({ua:i,isMalaysia:t})}}};export default c;
