(()=>{"use strict";var n,e,t,r,o,i,a,s,c,p,l,d,g,u,h={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,'*{\n    margin: 0;\n}\n\nhtml{\n    scroll-behavior: smooth;\n    scroll-padding: 135px;\n}\n\n/* Section Devider */\n.Devision{\n    display: grid;\n    grid-template-columns: 0.7fr 4fr 0.7fr;\n    margin: 20px;\n}\n\n.icons{\n    margin-right:5px;\n    height: 20px;\n}\n\n.GraySpace{\n    height: 2px;\n    width: 100%;\n    background-color: gray;\n}\n\n/* Navigation Bar */\n\n.NavBar{\n    position: absolute;\n    display: flex;\n    justify-content: space-evenly;\n    background-color: White;\n    opacity: 90%;\n\n    position: sticky;\n    top: 0.1px;\n}\n\n.Title{\n    padding-top: 10px;\n}\n\n.NavBarLinks{\n    display: flex;\n    gap: 80px;\n}\n\n/* Hover Effect for HyperLinks */\n\n.HyperLink {\n    padding-top: 35px;\n    position: relative;\n    font-size: 30px;\n    color: black;\n    font-weight: 600;\n    text-decoration: none;\n    height: 40px;\n}\n\n.HyperLinkDark {\n    padding-top: 35px;\n    position: relative;\n    font-size: 30px;\n    color: white;\n    font-weight: 600;\n    text-decoration: none;\n    height: 40px;\n}\n\n.HyperLink:before {\n    content: "";\n    position: absolute;\n    bottom: -2px;\n    height: 6px;\n    width: 0;\n    background-color: rgb(13, 129, 59);\n    border-radius: 50px;\n    transition: width 0.2s ease;\n}\n\n.HyperLinkDark:before {\n    content: "";\n    position: absolute;\n    bottom: -2px;\n    height: 6px;\n    width: 0;\n    background-color: rgb(197, 95, 18);\n    border-radius: 50px;\n    transition: width 0.2s ease;\n}\n\na:hover:before{\n    width: 100%;\n}\n\n#InitialsImg{\n    padding: 10px;\n    height: 80px;\n    width: 80px;\n}\n\n/* Home */\n.Home{\n    display: flex;\n    justify-content: center;\n    gap: 100px;\n    margin: 160px 0px 160px 0px;\n}\n\n.TextSpace{\n    font-size: 20px;\n    width: 465px;\n}\n\n.p1{\n    font-size: 30px;\n}\n\n.p2{\n    display: flex;\n    gap: 15px;\n    font-size: 60px;\n}\n\n.TypeWriterContainer{\n    display: flex;\n    gap: 4,2px;\n}\n\n.TypeWriterContainer, #element{\n    font-size: 50px;\n    color: rgb(13, 129, 59);\n} \n\n\n.img{\n    height: 300px;\n    width: 245px;\n    border-radius: 20px;\n    transition: transform 250ms ease-in-out;\n    pointer-events: none;\n}\n\n.Trigger{\n    height: 300px;\n    width: 240px;\n    border-radius: 20px;\n    background:rgb(13, 129, 59);\n}\n\n.Trigger:hover .img{\n    transform: translate(-15px, 15px);\n}\n\n/*puts everything clean in center no matter wich screen size you would have at that time*/\n\n.App{\n    display: grid;\n    grid-template-columns: 1fr 4fr 1fr;\n}\n\n.Devide2{\n    margin-left:7.5px;\n    height: 2px;\n    width: 98.4%;\n    background-color: rgb(83, 82, 82);\n    margin-top:80px;\n    margin-bottom: 20px;\n}\n\n.Devide3{\n    margin-left:7.5px;\n    height: 2px;\n    width: 98.4%;\n    background-color: rgb(83, 82, 82);\n    margin-top:20px;\n    margin-bottom: 20px;\n}\n\n\n.Devide2Dark{\n    margin-left:7.5px;\n    height: 2px;\n    width: 98.4%;\n    background-color: snow;\n    margin-top:20px;\n    margin-bottom: 20px;\n}\n\n/* About Me */\n.AboutText{\n    margin-top: 60px;\n    margin-bottom: 60px;\n    width: 750px;\n    font-size: 30px;\n}\n\n/* Skills */\n\n.AnotherTxt{\n    font-size: 50px;\n    text-align: center;\n    padding: 20px;\n}\n\n.CenterSkills{\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n}\n\n.SkillsIcons{\n    margin: 50px 0px 100px 0px;\n\n}\n\n.SkillFlex{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    background-color: white;\n    border-radius: 25px;\n}\n\n.SkillImage{\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    margin: 70px;\n    width: 60px;\n    height: 5px;\n    transition: transform .2s;\n}\n.SkillImage:hover{\n    cursor:pointer;\n\n    transform:scale(1.5);\n}\n\n.SkillTxt{\n    margin-top: 10px;\n}\n\n.emptydiv{\n    height: 100px;\n}\n/* Projects */\n\n.MainContainer{\n    margin-top: 50px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.ProjectImages{\n    width: 260px;\n    height: 220px;\n    border-radius: 7px;\n    transition: transform .2s;\n}\n\n\n.ProjectImages:hover{\n    transform:scale(1.1);\n}\n\n.ProjectText{\n    font-size: 50px;\n    color: white;\n}\n\n.ProjectDescription{\n    border: 5px dashed rgb(197, 95, 18);\n    padding: 10px;\n    font-size: 20px;\n    color: white;\n    width: 420px;\n    height: 130px;\n}\n.ProjectButtons{\n    display: flex;\n    gap: 20px;\n}\n\nbutton{\n    font-size: 20px;\n    border: 1px solid rgb(197, 95, 18);\n    background-color: rgb(197, 95, 18);\n    margin-top: 20px;\n    color: snow;\n    border-radius: 20px;\n    height: 40px;\n    width: 100px;\n    cursor: pointer;\n}\n\n/* Contact */\n\n.Content{\n    display: flex;\n    margin-top:40px;\n}\n\n.ContactText{\n    margin-top: 10px;\n    margin-bottom: 10px;\n    font-size: 30px;\n    color: white;\n    width: 600px;\n}\n\ninput{\n    margin: 10px;\n    border: 1px solid white;\n    background-color:rgb(30, 30, 30);\n    height: 25px;\n    width: 400px;\n    padding: 10px;\n    color: white;\n}\n.Message{\n}\n\ninput::placeholder{\n    color:white;\n    opacity: 70%;\n}\n\ninput:hover{\n    background-color: rgb(48, 48, 48);\n}\n\n.SendBtn{\n    margin: 10px;\n}\n\n.github{\n    cursor: pointer;\n    margin: 10px;\n}\n',""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],p=r.base?c[0]+r.base:c[0],l=i[p]||0,d="".concat(p," ").concat(l);i[p]=l+1;var g=t(d),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==g)e[g].references++,e[g].updater(u);else{var h=o(u,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),p=0;p<i.length;p++){var l=t(i[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},x={};function f(n){var e=x[n];if(void 0!==e)return e.exports;var t=x[n]={id:n,exports:{}};return h[n](t,t.exports,f),t.exports}f.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return f.d(e,{a:e}),e},f.d=(n,e)=>{for(var t in e)f.o(e,t)&&!f.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},f.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),f.nc=void 0,n=f(379),e=f.n(n),t=f(795),r=f.n(t),o=f(569),i=f.n(o),a=f(565),s=f.n(a),c=f(216),p=f.n(c),l=f(589),d=f.n(l),g=f(426),(u={}).styleTagTransform=d(),u.setAttributes=s(),u.insert=i().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=p(),e()(g.Z,u),g.Z&&g.Z.locals&&g.Z.locals,new Typed("#element",{strings:["Front-End developer"],typeSpeed:120,backSpeed:70,loop:!0}),window.addEventListener("scroll",(function(){let n=document.querySelector(".NavBar");const e=document.querySelector(".NavBarLinks"),t=document.querySelector(".Title");let r=document.querySelector(".Tools"),o=document.querySelector(".AnotherTxt"),i=document.querySelector(".twoSkills");var a=window.scrollY;console.log(a),a>1e3?(document.body.style="background-color:rgb(30, 30, 30); -webkit-transition: background-color 200ms linear;",n.style="background-color:rgb(30, 30, 30); -webkit-transition: background-color 200ms linear;",t.innerHTML='<img id="InitialsImg" src="Black-White.png">',e.innerHTML='\n        <a class="HyperLinkDark" href="#About"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="30 0 448 512"><style>svg{fill:#ffffff}</style><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>About</a>\n        <a class="HyperLinkDark" href="#Skills"><svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"/></svg>Skills</a>\n        <a class="HyperLinkDark" href="#Projects"><svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>Projects</a>\n        <a class="HyperLinkDark" href="#Contact"><svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>Contact</a>\n        ',o.style="color:white;",i.style="color:white;",r.style="color:rgb(197, 95, 18);"):(document.body.style="background-color: white; -webkit-transition: background-color 200ms linear;",n.style="background-color: white; -webkit-transition: background-color 200ms linear;",t.innerHTML='<img id="InitialsImg" src="White-Black.png">',e.innerHTML='\n            <a class="HyperLink" href="#About"><svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>About</a>\n            <a class="HyperLink" href="#Skills"><svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"/></svg>Skills</a>\n            <a class="HyperLink" href="#Projects"><svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>Projects</a>\n            <a class="HyperLink" href="#Contact"><svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>Contact</a>\n        ',o.style="color:rgb(30, 30, 30);",i.style="color:rgb(30, 30, 30);",r.style="color:rgb(13, 129, 59);")}))})();