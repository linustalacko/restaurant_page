(()=>{"use strict";var e={650:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(81),i=t.n(o),r=t(645),d=t.n(r)()(i());d.push([e.id,"body {\n    overflow: hidden;\n    background-color: whitesmoke;\n}\n\n#content {\n    display: flex;\n    justify-content: center;\n    margin-top: 25px;\n}\n\n#eightydiv {\n    background-color: rgb(245, 207, 84);\n    border: transparent;\n    width: 80%;\n    padding-bottom: 10%;\n    border-radius: 25px;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n}\n\n#title {\n    width: 60%;\n    text-align: center;\n    padding: 25px 0 35px 0;\n    font-size: 40px;\n\n}",""]);const a=d},254:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(81),i=t.n(o),r=t(645),d=t.n(r)()(i());d.push([e.id,"*{\n    margin: 0;\n}\n\nheader {\n    background-color: blanchedalmond;\n}\n\n#initial {\n    display: flex;\n    justify-content: center;\n    padding: 20px 20px 0 ;\n}\n\n#initial > button {\n    width: 100px;\n    height: 70px;\n    margin: 10px;\n    font-size: 15px;\n    background-color: cornflowerblue;\n    border-radius: 10px;\n    border: transparent;\n    transition: 0.4s;\n    color: white;\n}\n\n#initial > button:hover {\n    background-color: rgb(38, 102, 221);\n    cursor: pointer;\n}",""]);const a=d},348:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(81),i=t.n(o),r=t(645),d=t.n(r)()(i());d.push([e.id,"body {\n    overflow: hidden;\n    background-color: whitesmoke;\n}\n\n#content {\n    display: flex;\n    justify-content: center;\n    margin-top: 25px;\n}\n\n#eightydiv {\n    background-color: rgb(245, 207, 84);\n    border: transparent;\n    width: 80%;\n    padding-bottom: 10%;\n    border-radius: 25px;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n}\n\n#title {\n    width: 60%;\n    text-align: center;\n    padding: 25px 0 35px 0;\n    font-size: 40px;\n\n}\n\n#secnd {\n    width: 40%;\n    text-align: center;\n    padding: 20px;\n    border: 6px solid rgb(192, 147, 0);\n    font-size: 20px;\n    clip-path: polygon( 0 21%, 11% 0, 89% 0, 100% 21%, 100% 79%, 89% 100%, 11% 100%, 0 79%);\n}\n\n#third {\n    width: 20%;\n    text-align: center;\n    padding: 20px;\n    border: 6px solid rgb(192, 147, 0);\n    font-size: 15px;\n    font-weight: 900;\n    margin-top: 40px;\n    clip-path: polygon( 0 21%, 11% 0, 89% 0, 100% 21%, 100% 79%, 89% 100%, 11% 100%, 0 79%);\n}\n\n\n\n",""]);const a=d},83:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(81),i=t.n(o),r=t(645),d=t.n(r)()(i());d.push([e.id,"#content {\n    display: flex;\n    justify-content: center;\n    margin-top: 25px;\n}\n\n#eightydiv {\n    background-color: rgb(245, 207, 84);\n    border: transparent;\n    width: 80%;\n    padding-bottom: 10%;\n    border-radius: 25px;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n}\n\n#title_div {\n    width: 60%;\n    text-align: center;\n    padding: 25px 0 35px 0;\n    font-size: 40px;\n\n}\n\n#cookies_div {\n    text-align: center;\n    padding-top: 50px;\n}\n\n#cookies_div > h4 {\n    font-size: 27px;\n    padding-bottom: 10px;\n}\n\n#cookies_div > p {\n    font-size: 20px;\n}",""]);const a=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(d[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&d[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},d=[],a=0;a<e.length;a++){var c=e[a],l=o.base?c[0]+o.base:c[0],s=r[l]||0,u="".concat(l," ").concat(s);r[l]=s+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=i(m,o);o.byIndex=a,n.splice(a,0,{identifier:u,updater:f,references:1})}d.push(u)}return d}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var d=0;d<r.length;d++){var a=t(r[d]);n[a].references--}for(var c=o(e,i),l=0;l<r.length;l++){var s=t(r[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),i=t.n(o),r=t(569),d=t.n(r),a=t(565),c=t.n(a),l=t(216),s=t.n(l),u=t(589),p=t.n(u),m=t(254),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=d().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=s(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=t(348),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=s(),n()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals,function(){const e=document.querySelector("header"),n=document.createElement("div");n.id="initial";const t=["Home","Menu","Contact"];!function(){for(let e=0;e<3;e++){let o=document.createElement("button");o.id=t[e],o.innerHTML=t[e],n.appendChild(o)}}(),e.appendChild(n)}();var y=t(83),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=d().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=s(),n()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;var b=t(650),x={};function E(){const e=document.getElementById("content"),n=document.createElement("div");n.id="eightydiv",function(){let e=document.createElement("div");e.id="title_div";let t=document.createElement("h2");t.id="title-text",t.innerText="Ziggy's Cookies",e.appendChild(t),n.appendChild(e)}(),function(){let e=document.createElement("div");e.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14951977.760307666!2d-19.277083357112335!3d-23.804897908218756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b10c91d2619%3A0xe4710f5b2b64dc6e!2z0L4uINCh0LIuINCV0LvQtdC90Ys!5e0!3m2!1sru!2sua!4v1655885634241!5m2!1sru!2sua" width="100%" height="100%" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>';let t=document.createElement("h2");t.innerHTML="Yes! We are in the middle of nowhere!",e.appendChild(t),n.appendChild(e)}(),e.appendChild(n),document.getElementById("Contact").disabled=!0,document.getElementById("Contact").disabled=!1}x.styleTagTransform=p(),x.setAttributes=c(),x.insert=d().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=s(),n()(b.Z,x),b.Z&&b.Z.locals&&b.Z.locals,E(),document.getElementById("Contact").addEventListener("click",(()=>{document.getElementById("content").innerHTML="",E()})),document.getElementById("Menu").addEventListener("click",(()=>{document.getElementById("content").innerHTML="",function(){const e=document.getElementById("content"),n=document.createElement("div");n.id="eightydiv",function(){let e=document.createElement("div");e.id="title_div";let t=document.createElement("h2");t.id="title-text",t.innerText="Ziggy's Cookies",e.appendChild(t),n.appendChild(e)}(),function(){let e=document.createElement("div");e.id="cookies_div";let t=document.createElement("h4");t.innerHTML="Cookies";let o=document.createElement("p");o.innerHTML="These are the best cookies on the market made exclusively by Zig!",e.appendChild(t),e.appendChild(o),n.appendChild(e)}(),e.appendChild(n),document.getElementById("Menu").disabled=!0,document.getElementById("Home").disabled=!1}()})),document.getElementById("Home").addEventListener("click",(()=>{document.getElementById("content").innerHTML="",function(){const e=document.getElementById("content"),n=document.createElement("div");n.id="eightydiv";const t=["title","secnd","third"];!function(){for(let e=0;e<3;e++){let o=document.createElement("div");o.id=t[e],n.appendChild(o)}}(),e.appendChild(n),document.querySelector("body").appendChild(e)}(),document.getElementById("Home").disabled=!0,document.getElementById("Menu").disabled=!1,function(){let e=document.createElement("h2");e.id="title-text",e.innerText="Ziggy's Cookies",document.getElementById("title").appendChild(e)}(),function(){let e=document.createElement("p");e.id="first",e.innerHTML="Ziggy's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.",document.getElementById("secnd").appendChild(e)}(),function(){const e=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];for(let n=0;n<e.length;n++){let t=document.createElement("p");t.id=e[n],console.log(e[n]),t.innerHTML=e[n]+": 8am - 8pm",document.getElementById("third").appendChild(t)}}()}))})()})();