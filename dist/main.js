(()=>{"use strict";var n,e,t,r,o,a,i,s,p,c,d,u,l,f,v={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,'*{\n    margin: 0;\n}\n\n/* Section Devider */\n.Devision{\n    display: grid;\n    grid-template-columns: 1fr 4fr 1fr;\n    margin-bottom: 120px;\n}\n\n.icons{\n    margin-right:5px;\n    height: 20px;\n}\n\n.GraySpace{\n    height: 2px;\n    width: 100%;\n    background-color: gray;\n}\n\n/* Navigation Bar */\n\n.NavBar{\n    display: flex;\n    justify-content: space-evenly;\n    background-color: White;\n    /*box-shadow: 0px 7px 12px rgba(0,0,0,0.5);*/\n}\n\n.Title{\n    padding-top: 10px;\n}\n\n.NavBarLinks{\n    display: flex;\n    gap: 80px;\n}\n\n/* Hover Effect for HyperLinks */\n\na {\n    padding-top: 35px;\n    position: relative;\n    font-size: 30px;\n    color: black;\n    font-weight: 600;\n    text-decoration: none;\n    height: 40px;\n}\n\na:before {\n    content: "";\n    position: absolute;\n    bottom: -2px;\n    height: 6px;\n    width: 0;\n    background-color: rgb(10, 107, 49);\n    border-radius: 50px;\n    transition: width 0.2s ease;\n}\n\na:hover:before{\n    width: 100%;\n}\n\n#InitialsImg{\n    height: 100px;\n    width: 100px;\n}\n\n/* Home */\n.Home{\n    display: flex;\n    justify-content: center;\n    gap: 100px;\n    margin-bottom: 120px;\n}\n\n.TextSpace{\n    font-size: 20px;\n    width: 465px;\n}\n\n.p1{\n    font-size: 30px;\n}\n\n.p2{\n    display: flex;\n    gap: 15px;\n    font-size: 60px;\n}\n\n.TypeWriterContainer{\n    display: flex;\n    gap: 4,2px;\n}\n\n.TypeWriterContainer, #element{\n    font-size: 50px;\n    color: rgb(10, 107, 49);\n} \n\n\n.img{\n    height: 300px;\n    width: 250px;\n    border-radius: 20px;\n    transition: transform 250ms ease-in-out;\n    pointer-events: none;\n}\n\n.Trigger{\n    height: 300px;\n    width: 250px;\n    background:rgb(10, 107, 49);\n    border-radius: 20px;\n}\n\n.Trigger:hover .img{\n    transform: translate(-15px, 15px);\n}\n\n/* About Me */\n\n\n\n/* Skills */\n\n/* Projects */\n\n/* Contact */',""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var p=this[s][0];null!=p&&(i[p]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var p=n[s],c=r.base?p[0]+r.base:p[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var l=t(u),f={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var v=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var p=r(n,o),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=p}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function x(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return v[n](t,t.exports,x),t.exports}x.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return x.d(e,{a:e}),e},x.d=(n,e)=>{for(var t in e)x.o(e,t)&&!x.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},x.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),x.nc=void 0,n=x(379),e=x.n(n),t=x(795),r=x.n(t),o=x(569),a=x.n(o),i=x(565),s=x.n(i),p=x(216),c=x.n(p),d=x(589),u=x.n(d),l=x(426),(f={}).styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),e()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals,new Typed("#element",{strings:["Full-Stack developer"],typeSpeed:120,backSpeed:70,loop:!0})})();