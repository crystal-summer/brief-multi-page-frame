(function(e){function n(n){for(var r,i,a=n[0],c=n[1],l=n[2],f=0,p=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(n);while(p.length)p.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={gov:0},u=[];function i(e){return a.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0cf932":"6bba5322","chunk-2d22fd4f":"c596ed90"}[e]+".js"}function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=i(e);var l=new Error;u=function(n){c.onerror=c.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",l.name="ChunkLoadError",l.type=r,l.request=u,t[1](l)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(n)},a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var f=0;f<c.length;f++)n(c[f]);var s=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("9f4d")},"9f4d":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"test-div"}},[t("router-view")],1)},u=[],i=t("2877"),a={},c=Object(i["a"])(a,o,u,!1,null,null,null),l=c.exports,f=t("8c4f"),s=(t("d3b7"),{path:"/login",name:"login",component:function(){return t.e("chunk-2d22fd4f").then(t.bind(null,"ea63"))},meta:{title:"登录"}}),p=s,d={path:"/index",name:"index",component:function(){return t.e("chunk-2d0cf932").then(t.bind(null,"63fe"))},meta:{title:"首页"}},h=d;r["a"].use(f["a"]);var v=[p,h],b=new f["a"]({scrollBehavior:function(){return{y:0}},routes:v}),m=b;r["a"].config.productionTip=!1,new r["a"]({router:m,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=gov.ce1aa59e.js.map