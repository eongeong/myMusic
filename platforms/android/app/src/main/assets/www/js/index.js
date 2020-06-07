!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!x[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--y&&0===g&&j()}(e,n),t&&t(e,n)};var n,r=!0,o="46998624ffd4ad737de0",i=1e4,c={},l=[],a=[];function d(e){var t=O[e];if(!t)return R;var r=function(r){return t.hot.active?(O[r]?-1===O[r].parents.indexOf(e)&&O[r].parents.push(e):(l=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),l=[]),R(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return R[e]},set:function(t){R[e]=t}}};for(var i in R)Object.prototype.hasOwnProperty.call(R,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===f&&p("prepare"),g++,R.e(e).then(t,(function(e){throw t(),e}));function t(){g--,"prepare"===f&&(b[e]||C(e),0===g&&0===y&&j())}},r.t=function(e,t){return 1&t&&(e=r(e)),R.t(e,-2&t)},r}function s(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:k,apply:_,status:function(e){if(!e)return f;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:c[e]};return n=void 0,t}var u=[],f="idle";function p(e){f=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var m,h,v,y=0,g=0,b={},E={},x={};function w(e){return+e+""===e?+e:e}function k(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(t=i,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=R.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return p("idle"),null;E={},b={},x=e.c,v=e.h,p("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));h={};return C(0),"prepare"===f&&0===g&&0===y&&j(),t}));var t}function C(e){x[e]?(E[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=R.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function j(){p("ready");var e=m;if(m=null,e)if(r)Promise.resolve().then((function(){return _(r)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(w(n));e.resolve(t)}}function _(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,i,a,d;function s(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=O[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var l=0;l<a.parents.length;l++){var d=a.parents[l],s=O[d];if(s){if(s.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([d]),moduleId:i,parentId:d};-1===t.indexOf(d)&&(s.hot._acceptedDependencies[i]?(n[d]||(n[d]=[]),u(n[d],[i])):(delete n[d],t.push(d),r.push({chain:c.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},y=[],g={},b=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var E in h)if(Object.prototype.hasOwnProperty.call(h,E)){var k;d=w(E);var C=!1,j=!1,_=!1,A="";switch((k=h[E]?s(d):{type:"disposed",moduleId:E}).chain&&(A="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(C=new Error("Aborted because of self decline: "+k.moduleId+A));break;case"declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(C=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+A));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(k),t.ignoreUnaccepted||(C=new Error("Aborted because "+d+" is not accepted"+A));break;case"accepted":t.onAccepted&&t.onAccepted(k),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(k),_=!0;break;default:throw new Error("Unexception type "+k.type)}if(C)return p("abort"),Promise.reject(C);if(j)for(d in g[d]=h[d],u(y,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,d)&&(m[d]||(m[d]=[]),u(m[d],k.outdatedDependencies[d]));_&&(u(y,[k.moduleId]),g[d]=b)}var N,D=[];for(r=0;r<y.length;r++)d=y[r],O[d]&&O[d].hot._selfAccepted&&g[d]!==b&&D.push({module:d,errorHandler:O[d].hot._selfAccepted});p("dispose"),Object.keys(x).forEach((function(e){!1===x[e]&&function(e){delete installedChunks[e]}(e)}));for(var S,V,H=y.slice();H.length>0;)if(d=H.pop(),a=O[d]){var P={},I=a.hot._disposeHandlers;for(i=0;i<I.length;i++)(n=I[i])(P);for(c[d]=P,a.hot.active=!1,delete O[d],delete m[d],i=0;i<a.children.length;i++){var M=O[a.children[i]];M&&((N=M.parents.indexOf(d))>=0&&M.parents.splice(N,1))}}for(d in m)if(Object.prototype.hasOwnProperty.call(m,d)&&(a=O[d]))for(V=m[d],i=0;i<V.length;i++)S=V[i],(N=a.children.indexOf(S))>=0&&a.children.splice(N,1);for(d in p("apply"),o=v,g)Object.prototype.hasOwnProperty.call(g,d)&&(e[d]=g[d]);var T=null;for(d in m)if(Object.prototype.hasOwnProperty.call(m,d)&&(a=O[d])){V=m[d];var L=[];for(r=0;r<V.length;r++)if(S=V[r],n=a.hot._acceptedDependencies[S]){if(-1!==L.indexOf(n))continue;L.push(n)}for(r=0;r<L.length;r++){n=L[r];try{n(V)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:d,dependencyId:V[r],error:e}),t.ignoreErrored||T||(T=e)}}}for(r=0;r<D.length;r++){var q=D[r];d=q.module,l=[d];try{R(d)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:n,originalError:e}),t.ignoreErrored||T||(T=n),T||(T=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:d,error:e}),t.ignoreErrored||T||(T=e)}}return T?(p("fail"),Promise.reject(T)):(p("idle"),new Promise((function(e){e(y)})))}var O={};function R(t){if(O[t])return O[t].exports;var n=O[t]={i:t,l:!1,exports:{},hot:s(t),parents:(a=l,l=[],a),children:[]};return e[t].call(n.exports,n,n.exports,d(t)),n.l=!0,n.exports}R.m=e,R.c=O,R.d=function(e,t,n){R.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},R.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},R.t=function(e,t){if(1&t&&(e=R(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(R.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)R.d(n,r,function(t){return e[t]}.bind(null,r));return n},R.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return R.d(t,"a",t),t},R.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},R.p="",R.h=function(){return o},d(1)(R.s=1)}([function(module,exports,__webpack_require__){var factory;factory=function(){"use strict";const dev={tree:[],commands:{},createTree:void 0,enumerableTree:void 0,getSuperiorElement:void 0,getSuperiorNode:void 0,updateSuperiorVRElement:void 0,isNull:void 0,parseHump:void 0,parseStyleObject:void 0};dev.commands.she=function(e,t){"function"==typeof t&&!1===t(e.element)&&(e.element.removeAttribute("she"),dev.updateSuperiorVRElement(dev.getSuperiorElement(e)))},dev.commands["she-content"]=function(e,t){if(Array.isArray(t)){e.element.textContent="",e.children=[];let n=!1;const r=document.createDocumentFragment(),o=function(e,t){let r=0;for(;!dev.isNull(t[r]);){const i=t[r],c=document.createElement(i[0]);if(!dev.isNull(i[1]))for(const e in i[1]){const t=dev.parseHump(e);!1===n&&-1!==t.indexOf("she")&&(n=!0),c.setAttribute(t,i[1][e])}dev.isNull(i[2])||("string"==typeof i[2][0]?c.textContent=i[2][0]:o(c,i[2])),e.appendChild(c),r++}};o(r,t),e.element.appendChild(r),n&&dev.updateSuperiorVRElement(dev.getSuperiorElement(e))}else"function"!=typeof t&&(dev.isNull(t)?e.element.textContent="":e.element.textContent=t,e.children=[])},dev.commands["she-attribute"]=function(e,t){if(null!==t&&"object"==typeof t&&!Array.isArray(t)){let n=!1;for(const r in t){const o=dev.parseHump(r);switch(!1===n&&-1!==o.indexOf("she")&&(n=!0),t[r]){case!0:e.element[o]=!0;break;case!1:e.element[o]=!1,e.element.removeAttribute(o);break;default:e.element.setAttribute(o,t[r])}}n&&dev.updateSuperiorVRElement(dev.getSuperiorElement(e))}},dev.commands["she-change"]=function(e,t){if(Array.isArray(t)){const n=e.element;let r=n.getAttribute("style");if(dev.isNull(r))n.setAttribute("style",dev.parseStyleObject(t[0])),n.setAttribute("change-index",0);else{let e=0;n.hasAttribute("change-index")&&(e=parseInt(n.getAttribute("change-index")));const o=t.length;for(;e<o;){if(dev.parseStyleObject(t[e])===r)return++e===o&&(e=0),n.setAttribute("style",dev.parseStyleObject(t[e])),void n.setAttribute("change-index",e);e++}n.setAttribute("style",dev.parseStyleObject(t[0])),n.setAttribute("change-index",0)}}},dev.commands["she-for"]=function(VRElement,value,name){if(null!==value&&"object"==typeof value){const superiorElement=dev.getSuperiorElement(VRElement);if(null!==superiorElement){const VRElementElement=VRElement.element,VRElementElementParentNode=VRElementElement.parentNode,fragment=document.createDocumentFragment(),forCookie=VRElementElement.getAttribute("she-for").replace(new RegExp("\\s+","g"),"").split(";"),forCookie_1=dev.parseHump(forCookie[1]),forCookie_2=dev.parseHump(forCookie[2]);for(;null!==VRElementElement.nextElementSibling&&VRElementElement.nextElementSibling.hasAttribute("she-for")&&-1!==VRElementElement.nextElementSibling.getAttribute("she-for").indexOf(name);)VRElementElementParentNode.removeChild(VRElementElement.nextElementSibling);for(const e in value){const t=VRElementElement.cloneNode(!0);t.setAttribute(forCookie_1,JSON.stringify(value[e])),t.setAttribute(forCookie_2,e),fragment.appendChild(t)}VRElementElementParentNode.replaceChild(fragment,VRElementElement),dev.updateSuperiorVRElement(superiorElement);const superiorNode=dev.getSuperiorNode(superiorElement),getData=function(e,t){if(e.hasAttribute(t))return t===forCookie_1?JSON.parse(e.getAttribute(forCookie_1)):e.getAttribute(forCookie_2);{let n=e.parentNode;for(;"BODY"!==n.nodeName;){if(n.hasAttribute("she-for"))return t===forCookie_1?JSON.parse(n.getAttribute(forCookie_1)):n.getAttribute(forCookie_2);n=n.parentNode}}};dev.enumerableTree(superiorNode,(function(VRElement){const VRElementElement=VRElement.element,VRElementNames=VRElement.names,VRElementCommands=VRElement.commands,VRElementNamesLength=VRElementNames.length;let i=0;for(;i<VRElementNamesLength;){const temporaryName=VRElementNames[i],command=VRElementCommands[i];if(-1!==dev.parseHump(temporaryName).search(new RegExp(["^",forCookie_1,"$|^",forCookie_1,"[\\.\\[]|\\{(.+?):",forCookie_1,"(.*?)\\}"].join("")))){const item=getData(VRElementElement,forCookie_1);if(!dev.isNull(item))if(-1===temporaryName.indexOf("{"))dev.commands[command](VRElement,eval(temporaryName.replace(forCookie[1],"item")),temporaryName);else{const temporaryArray=temporaryName.replace(forCookie[1],"item").replace(new RegExp("\\{|\\}|\\s+","g"),"").split(","),temporaryArrayLength=temporaryArray.length,value={};let j=0;for(;j<temporaryArrayLength;){const keyvalue=temporaryArray[j].split(":");value[keyvalue[0]]=eval(keyvalue[1]),j++}dev.commands[command](VRElement,value,temporaryName)}}temporaryName===forCookie_2&&dev.commands[command](VRElement,getData(VRElementElement,forCookie_2),temporaryName),i++}}))}}},dev.createTree=function(e,t){let n=0;const r=e.length;for(;n<r;){let r,o,i=!1;const c=e[n],l=dev.commands;for(const e in l)if(c.hasAttribute(e)){if(!i){t.push({names:[],element:c,commands:[],children:[]});const e=t[t.length-1];r=e.names,o=e.commands,c.children.length>0&&dev.createTree(c.children,e.children),i=!0}r.push(c.getAttribute(e).replace(new RegExp("\\s+","g"),"").split(";")[0]),o.push(e)}!i&&c.children.length>0&&dev.createTree(c.children,t),n++}},dev.enumerableTree=function(e,t){const n=function(e){let r=0;const o=e.length;for(;r<o;){if(!1===t(e[r]))return;e[r].children.length>0&&n(e[r].children),r++}};n(e)},dev.getSuperiorElement=function(e){let t=e.element.parentNode;if(null!==t){const e=dev.commands;for(;"BODY"!==t.nodeName;){for(const n in e)if(t.hasAttribute(n))return t;t=t.parentNode}return t}return null},dev.getSuperiorNode=function(e){if(e===document.body)return dev.tree;{let t;return dev.enumerableTree(dev.tree,(function(n){if(n.element===e)return t=n.children,!1})),t}},dev.updateSuperiorVRElement=function(e){e===document.body?(dev.tree=[],dev.createTree(document.body.children,dev.tree)):dev.enumerableTree(dev.tree,(function(t){if(t.element===e)return t.children=[],dev.createTree(t.element.children,t.children),!1}))},dev.isNull=function(e){switch(e){case void 0:case null:return!0;default:return!1}},dev.parseHump=function(e){return e.replace(new RegExp("\\s+","g"),"").replace(new RegExp("[A-Z]","g"),(function(e){return["-",e.toLowerCase()].join("")}))},dev.parseStyleObject=function(e){const t=[];for(const n in e)t.push(dev.parseHump(n)),t.push(":"),t.push(e[n]),t.push(";");return t.join("")};const she=function(e){const t=e.trim().split(new RegExp("\\s+")),n=t[t.length-1];return function(e){let r=0;const o=function(e,i,c){let l=0;const a=i.length;for(;l<a;){const a=i[l];if(n===t[r]){let e=0;const t=a.names,r=a.commands,o=t.length;for(;e<o;)n===t[e]&&dev.commands[r[e]](a,c,n),e++}if(a.children.length>0){let n=0;const i=a.names,l=i.length;for(;n<l;){if(e===i[n]){r++;break}n++}for(o(t[r],a.children,c),n=0;n<l;){if(e===i[n]){r--;break}n++}}l++}};return o(t[r],dev.tree,e),she}};return she.style=function(e){let t=0;const n=[],r=e.length;for(;t<r;)n.push(e[t][0]),n.push("{"),n.push(dev.parseStyleObject(e[t][1])),n.push("}"),t++;const o=n.join("");t=0;const i=document.head,c=i.children,l=c.length;for(;t<l;){if("STYLE"===c[t].nodeName){const e=c[t],n=e.textContent,r=o.replace(new RegExp(":(.+?);|\\.|\\[|\\]|\\{|\\}|\\*|\\+|\\||\\(|\\)|\\?|\\^|\\$|\\\\","g"),(function(e){switch(e){case".":return"\\.";case"[":return"\\[";case"]":return"\\]";case"{":return"\\{";case"}":return"\\}";case"*":return"\\*";case"+":return"\\+";case"|":return"\\|";case"(":return"\\(";case")":return"\\)";case"?":return"\\?";case"^":return"\\^";case"$":return"\\$";case"\\":return"\\\\";default:return":(.+?);"}}));return void(-1===n.search(new RegExp(r))?e.textContent=[n,o].join(""):e.textContent=n.replace(new RegExp(r),o))}t++}const a=document.createElement("style");a.textContent=o,i.appendChild(a)},dev.createTree(document.body.children,dev.tree),she},module.exports=factory()},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);var i=[["*",{boxSizing:"border-box",margin:"0",padding:"0"}],["a",{textDecoration:"none"}],["input",{border:"none",outline:"none",backgroundColor:"transparent"}],["button",{border:"none",outline:"none",backgroundColor:"transparent"}],["[oneline]",{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}]];var c=[[".frw",{display:"flex",flexDirection:"row",flexWrap:"wrap"}],[".frs",{display:"flex",flexDirection:"row",alignItems:"flex-start"}],[".frc",{display:"flex",flexDirection:"row",alignItems:"center"}],[".fre",{display:"flex",flexDirection:"row",alignItems:"flex-end"}],[".fcs",{display:"flex",flexDirection:"column",alignItems:"flex-start"}],[".fcc",{display:"flex",flexDirection:"column",alignItems:"center"}],[".fce",{display:"flex",flexDirection:"column",alignItems:"flex-end"}],[".jc",{justifyContent:"center"}],[".jb",{justifyContent:"space-between"}],[".ja",{justifyContent:"space-around"}],[".js",{justifyContent:"flex-start"}],[".je",{justifyContent:"flex-end"}]],l=function(){o()("container")([["div",{class:"clickMe",sheChange:"clickMeChange",she:"clickMe"},["点我"]],["div",{sheFor:"items;item;i",sheAttribute:"{ style:item.css }"},[["p",{sheContent:"item.text"}],["p",{sheFor:"item.arr;ite;i",sheContent:"ite"}]]]])("clickMe")(e=>(e.onclick=function(){o()("clickMeChange")([{backgroundColor:"orange "},{backgroundColor:"yellow"},{backgroundColor:"green"},{backgroundColor:"red"}])},!1))("items")([{css:"background-color:red;",text:"一",arr:[1,2,3]},{css:"background-color:orange;",text:"二",arr:[1,2,3]},{css:"background-color:green;",text:"三",arr:[1,2,3]}]),o.a.style([[".clickMe",{width:"100px",height:"50px",backgroundColor:"red"}]])};o()("index")([["div",{sheContent:"container"}]]),l(),window.onhashchange=function(){switch(location.hash){case"#/":l()}},o.a.style(i),o.a.style(c)}]);