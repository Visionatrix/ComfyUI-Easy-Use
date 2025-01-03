var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s;function a(e){return null==e||""===e||Array.isArray(e)&&0===e.length||!(e instanceof Date)&&"object"==typeof e&&0===Object.keys(e).length}function o(e){return!!(e&&e.constructor&&e.call&&e.apply)}function i(e){return!a(e)}function l(e,t=!0){return e instanceof Object&&e.constructor===Object&&(t||0!==Object.keys(e).length)}function c(e,...t){return o(e)?e(...t):e}function u(e,t=!0){return"string"==typeof e&&(t||""!==e)}function d(e){return u(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function m(e,t="",r={}){const s=d(t).split("."),n=s.shift();return n?l(e)?m(c(e[Object.keys(e).find((e=>d(e)===n))||""],r),s.join("."),r):void 0:c(e,r)}function h(e,t=!0){return Array.isArray(e)&&(t||0!==e.length)}function p(e,t){if(t){const r=t.test(e);return t.lastIndex=0,r}return!1}function f(...e){const a=(e={},o={})=>{const i=((e,a)=>{for(var o in a||(a={}))r.call(a,o)&&n(e,o,a[o]);if(t)for(var o of t(a))s.call(a,o)&&n(e,o,a[o]);return e})({},e);return Object.keys(o).forEach((t=>{l(o[t])&&t in e&&l(e[t])?i[t]=a(e[t],o[t]):i[t]=o[t]})),i};return e.reduce(((e,t,r)=>0===r?t:a(e,t)),{})}function g(e){return e?e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":"):e}function y(e){return u(e,!1)?e[0].toUpperCase()+e.slice(1):e}function v(e){return u(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,((e,t)=>0===t?e:"-"+e.toLowerCase())).toLowerCase():e}function S(e){return u(e)?e.replace(/[A-Z]/g,((e,t)=>0===t?e:"."+e.toLowerCase())).toLowerCase():e}function b(){const e=new Map;return{on(t,r){let s=e.get(t);return s?s.push(r):s=[r],e.set(t,s),this},off(t,r){let s=e.get(t);return s&&s.splice(s.indexOf(r)>>>0,1),this},emit(t,r){let s=e.get(t);s&&s.slice().map((e=>{e(r)}))},clear(){e.clear()}}}var $=Object.defineProperty,k=Object.defineProperties,w=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,j=(e,t)=>{for(var r in t||(t={}))N.call(t,r)&&C(e,r,t[r]);if(L)for(var r of L(t))O.call(t,r)&&C(e,r,t[r]);return e},x=(e,t)=>k(e,w(t)),_=(e,t)=>{var r={};for(var s in e)N.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&L)for(var s of L(e))t.indexOf(s)<0&&O.call(e,s)&&(r[s]=e[s]);return r},P=b();function T(e,t){h(e)?e.push(...t||[]):l(e)&&Object.assign(e,t)}function E(e="",t=""){return function(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}(`${u(e,!1)&&u(t,!1)?`${e}-`:e}${t}`)}function A(e="",t=""){return`--${E(e,t)}`}function V(e,t="",r="",s=[],n){if(u(e)){const t=/{([^}]*)}/g,a=e.trim();if(function(e=""){return((e.match(/{/g)||[]).length+(e.match(/}/g)||[]).length)%2!=0}(a))return;if(p(a,t)){const e=a.replaceAll(t,(e=>{const t=e.replace(/{|}/g,"").split(".").filter((e=>!s.some((t=>p(e,t)))));return`var(${A(r,v(t.join("-")))}${i(n)?`, ${n}`:""})`})),o=/(\d+\s+[\+\-\*\/]\s+\d+)/g,l=/var\([^)]+\)/g;return p(e.replace(l,"0"),o)?`calc(${e})`:e}return a}if(function(e){return i(e)&&!isNaN(e)}(e))return e}function R(e,t){return e?`${e}{${t}}`:""}var M=(...e)=>D(W.getTheme(),...e),D=(e={},t,r,s)=>{if(t){const{variable:n,options:o}=W.defaults||{},{prefix:i,transform:l}=(null==e?void 0:e.options)||o||{},c=p(t,/{([^}]*)}/g)?t:`{${t}}`;return"value"===s||a(s)&&"strict"===l?W.getTokenValue(t):V(c,void 0,i,[n.excludedKeyRegex],r)}return""};function F(e,t={}){const r=W.defaults.variable,{prefix:s=r.prefix,selector:n=r.selector,excludedKeyRegex:a=r.excludedKeyRegex}=t,o=(e,t="")=>Object.entries(e).reduce(((e,[r,n])=>{const i=p(r,a)?E(t):E(t,v(r)),c=function(e){return l(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}(n);if(l(c)){const{variables:t,tokens:r}=o(c,i);T(e.tokens,r),T(e.variables,t)}else e.tokens.push((s?i.replace(`${s}-`,""):i).replaceAll("-",".")),function(e,t,r){u(t,!1)&&e.push(`${t}:${r};`)}(e.variables,A(i),V(c,i,s,[a]));return e}),{variables:[],tokens:[]}),{variables:i,tokens:c}=o(e,s);return{value:i,tokens:c,declarations:i.join(""),css:R(n,i.join(""))}}var H={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve:e=>({type:"custom",selector:e,matched:!0})}},resolve(e){const t=Object.keys(this.rules).filter((e=>"custom"!==e)).map((e=>this.rules[e]));return[e].flat().map((e=>{var r;return null!=(r=t.map((t=>t.resolve(e))).find((e=>e.matched)))?r:this.rules.custom.resolve(e)}))}},_toVariables:(e,t)=>F(e,{prefix:null==t?void 0:t.prefix}),getCommon({name:e="",theme:t={},params:r,set:s,defaults:n}){var a,o,l,u,d,m,h;const{preset:p,options:f}=t;let g,y,v,S,b,$,k;if(i(p)&&"strict"!==f.transform){const{primitive:t,semantic:r,extend:w}=p,L=r||{},{colorScheme:N}=L,O=_(L,["colorScheme"]),C=w||{},{colorScheme:j}=C,x=_(C,["colorScheme"]),P=N||{},{dark:T}=P,E=_(P,["dark"]),A=j||{},{dark:V}=A,R=_(A,["dark"]),D=i(t)?this._toVariables({primitive:t},f):{},F=i(O)?this._toVariables({semantic:O},f):{},H=i(E)?this._toVariables({light:E},f):{},W=i(T)?this._toVariables({dark:T},f):{},z=i(x)?this._toVariables({semantic:x},f):{},B=i(R)?this._toVariables({light:R},f):{},I=i(V)?this._toVariables({dark:V},f):{},[K,Z]=[null!=(a=D.declarations)?a:"",D.tokens],[q,X]=[null!=(o=F.declarations)?o:"",F.tokens||[]],[Y,U]=[null!=(l=H.declarations)?l:"",H.tokens||[]],[G,J]=[null!=(u=W.declarations)?u:"",W.tokens||[]],[Q,ee]=[null!=(d=z.declarations)?d:"",z.tokens||[]],[te,re]=[null!=(m=B.declarations)?m:"",B.tokens||[]],[se,ne]=[null!=(h=I.declarations)?h:"",I.tokens||[]];g=this.transformCSS(e,K,"light","variable",f,s,n),y=Z;v=`${this.transformCSS(e,`${q}${Y}`,"light","variable",f,s,n)}${this.transformCSS(e,`${G}`,"dark","variable",f,s,n)}`,S=[...new Set([...X,...U,...J])];b=`${this.transformCSS(e,`${Q}${te}color-scheme:light`,"light","variable",f,s,n)}${this.transformCSS(e,`${se}color-scheme:dark`,"dark","variable",f,s,n)}`,$=[...new Set([...ee,...re,...ne])],k=c(p.css,{dt:M})}return{primitive:{css:g,tokens:y},semantic:{css:v,tokens:S},global:{css:b,tokens:$},style:k}},getPreset({name:e="",preset:t={},options:r,params:s,set:n,defaults:a,selector:o}){var l,u,d;let m,h,p;if(i(t)&&"strict"!==r.transform){const s=e.replace("-directive",""),f=t,{colorScheme:g,extend:y,css:v}=f,S=_(f,["colorScheme","extend","css"]),b=y||{},{colorScheme:$}=b,k=_(b,["colorScheme"]),w=g||{},{dark:L}=w,N=_(w,["dark"]),O=$||{},{dark:C}=O,x=_(O,["dark"]),P=i(S)?this._toVariables({[s]:j(j({},S),k)},r):{},T=i(N)?this._toVariables({[s]:j(j({},N),x)},r):{},E=i(L)?this._toVariables({[s]:j(j({},L),C)},r):{},[A,V]=[null!=(l=P.declarations)?l:"",P.tokens||[]],[R,D]=[null!=(u=T.declarations)?u:"",T.tokens||[]],[F,H]=[null!=(d=E.declarations)?d:"",E.tokens||[]];m=`${this.transformCSS(s,`${A}${R}`,"light","variable",r,n,a,o)}${this.transformCSS(s,F,"dark","variable",r,n,a,o)}`,h=[...new Set([...V,...D,...H])],p=c(v,{dt:M})}return{css:m,tokens:h,style:p}},getPresetC({name:e="",theme:t={},params:r,set:s,defaults:n}){var a;const{preset:o,options:i}=t,l=null==(a=null==o?void 0:o.components)?void 0:a[e];return this.getPreset({name:e,preset:l,options:i,params:r,set:s,defaults:n})},getPresetD({name:e="",theme:t={},params:r,set:s,defaults:n}){var a;const o=e.replace("-directive",""),{preset:i,options:l}=t,c=null==(a=null==i?void 0:i.directives)?void 0:a[o];return this.getPreset({name:o,preset:c,options:l,params:r,set:s,defaults:n})},applyDarkColorScheme:e=>!("none"===e.darkModeSelector||!1===e.darkModeSelector),getColorSchemeOption(e,t){var r;return this.applyDarkColorScheme(e)?this.regex.resolve(!0===e.darkModeSelector?t.options.darkModeSelector:null!=(r=e.darkModeSelector)?r:t.options.darkModeSelector):[]},getLayerOrder(e,t={},r,s){const{cssLayer:n}=t;if(n){return`@layer ${c(n.order||"primeui",r)}`}return""},getCommonStyleSheet({name:e="",theme:t={},params:r,props:s={},set:n,defaults:a}){const o=this.getCommon({name:e,theme:t,params:r,set:n,defaults:a}),i=Object.entries(s).reduce(((e,[t,r])=>e.push(`${t}="${r}"`)&&e),[]).join(" ");return Object.entries(o||{}).reduce(((e,[t,r])=>{if(null==r?void 0:r.css){const s=g(null==r?void 0:r.css),n=`${t}-variables`;e.push(`<style type="text/css" data-primevue-style-id="${n}" ${i}>${s}</style>`)}return e}),[]).join("")},getStyleSheet({name:e="",theme:t={},params:r,props:s={},set:n,defaults:a}){var o;const i={name:e,theme:t,params:r,set:n,defaults:a},l=null==(o=e.includes("-directive")?this.getPresetD(i):this.getPresetC(i))?void 0:o.css,c=Object.entries(s).reduce(((e,[t,r])=>e.push(`${t}="${r}"`)&&e),[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${g(l)}</style>`:""},createTokens(e={},t,r="",s="",n={}){return Object.entries(e).forEach((([e,o])=>{const i=p(e,t.variable.excludedKeyRegex)?r:r?`${r}.${S(e)}`:S(e),c=s?`${s}.${e}`:e;l(o)?this.createTokens(o,t,i,c,n):(n[i]||(n[i]={paths:[],computed(e,t={}){var r,s;return 1===this.paths.length?null==(r=this.paths[0])?void 0:r.computed(this.paths[0].scheme,t.binding):e&&"none"!==e?null==(s=this.paths.find((t=>t.scheme===e)))?void 0:s.computed(e,t.binding):this.paths.map((e=>e.computed(e.scheme,t[e.scheme])))}}),n[i].paths.push({path:c,value:o,scheme:c.includes("colorScheme.light")?"light":c.includes("colorScheme.dark")?"dark":"none",computed(e,t={}){const r=/{([^}]*)}/g;let s=o;if(t.name=this.path,t.binding||(t.binding={}),p(o,r)){const a=o.trim().replaceAll(r,(r=>{var s;const a=r.replace(/{|}/g,""),o=null==(s=n[a])?void 0:s.computed(e,t);return h(o)&&2===o.length?`light-dark(${o[0].value},${o[1].value})`:null==o?void 0:o.value})),i=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,l=/var\([^)]+\)/g;s=p(a.replace(l,"0"),i)?`calc(${a})`:a}return a(t.binding)&&delete t.binding,{colorScheme:e,path:this.path,paths:t,value:s.includes("undefined")?void 0:s}}}))})),n},getTokenValue(e,t,r){var s;const n=t.split(".").filter((e=>!p(e.toLowerCase(),r.variable.excludedKeyRegex))).join(".");const a=t.includes("colorScheme.light")?"light":t.includes("colorScheme.dark")?"dark":void 0,o=[null==(s=e[n])?void 0:s.computed(a)].flat().filter((e=>e));return 1===o.length?o[0].value:o.reduce(((e={},t)=>{const r=t,{colorScheme:s}=r,n=_(r,["colorScheme"]);return e[s]=n,e}),void 0)},getSelectorRule:(e,t,r,s)=>"class"===r||"attr"===r?R(i(t)?`${e}${t},${e} ${t}`:e,s):R(e,i(t)?R(t,s):s),transformCSS(e,t,r,s,n={},a,o,u){if(i(t)){const{cssLayer:d}=n;if("style"!==s){const e=this.getColorSchemeOption(n,o);t="dark"===r?e.reduce(((e,{type:r,selector:s})=>(i(s)&&(e+=s.includes("[CSS]")?s.replace("[CSS]",t):this.getSelectorRule(s,u,r,t)),e)),""):R(null!=u?u:":root",t)}if(d){const r={name:"primeui",order:"primeui"};l(d)&&(r.name=c(d.name,{name:e,type:s})),i(r.name)&&(t=R(`@layer ${r.name}`,t),null==a||a.layerNames(r.name))}return t}return""}},W={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){const{theme:t}=e;t&&(this._theme=x(j({},t),{options:j(j({},this.defaults.options),t.options)}),this._tokens=H.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return(null==(e=this.theme)?void 0:e.preset)||{}},get options(){var e;return(null==(e=this.theme)?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),P.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=x(j({},this.theme),{preset:e}),this._tokens=H.createTokens(e,this.defaults),this.clearLoadedStyleNames(),P.emit("preset:change",e),P.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=x(j({},this.theme),{options:e}),this.clearLoadedStyleNames(),P.emit("options:change",e),P.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return H.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",t){return H.getCommon({name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",t){const r={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return H.getPresetC(r)},getDirective(e="",t){const r={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return H.getPresetD(r)},getCustomPreset(e="",t,r,s){const n={name:e,preset:t,options:this.options,selector:r,params:s,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return H.getPreset(n)},getLayerOrderCSS(e=""){return H.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",t,r="style",s){return H.transformCSS(e,t,s,r,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",t,r={}){return H.getCommonStyleSheet({name:e,theme:this.theme,params:t,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,t,r={}){return H.getStyleSheet({name:e,theme:this.theme,params:t,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:t}){this._loadingStyles.size&&(this._loadingStyles.delete(t),P.emit(`theme:${t}:load`,e),!this._loadingStyles.size&&P.emit("theme:load"))}};function z(e,t){return!!e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function B(e,t){if(e&&t){const r=t=>{z(e,t)||(e.classList?e.classList.add(t):e.className+=" "+t)};[t].flat().filter(Boolean).forEach((e=>e.split(" ").forEach(r)))}}function I(e,t){if(e&&t){const r=t=>{e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")};[t].flat().filter(Boolean).forEach((e=>e.split(" ").forEach(r)))}}function K(){let e=window,t=document,r=t.documentElement,s=t.getElementsByTagName("body")[0];return{width:e.innerWidth||r.clientWidth||s.clientWidth,height:e.innerHeight||r.clientHeight||s.clientHeight}}function Z(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}function q(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function X(e,t){if(e instanceof HTMLElement){return e.offsetWidth}return 0}function Y(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function U(e,t={}){if(Y(e)){const r=(t,s)=>{var n,a;const o=(null==(n=null==e?void 0:e.$attrs)?void 0:n[t])?[null==(a=null==e?void 0:e.$attrs)?void 0:a[t]]:[];return[s].flat().reduce(((e,s)=>{if(null!=s){const n=typeof s;if("string"===n||"number"===n)e.push(s);else if("object"===n){const n=Array.isArray(s)?r(t,s):Object.entries(s).map((([e,r])=>"style"!==t||!r&&0!==r?r?e:void 0:`${e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${r}`));e=n.length?e.concat(n.filter((e=>!!e))):e}}return e}),o)};Object.entries(t).forEach((([t,s])=>{if(null!=s){const n=t.match(/^on(.+)/);n?e.addEventListener(n[1].toLowerCase(),s):"p-bind"===t||"pBind"===t?U(e,s):(s="class"===t?[...new Set(r("class",s))].join(" ").trim():"style"===t?r("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[t]=s),e.setAttribute(t,s))}}))}}function G(e,t={},...r){if(e){const s=document.createElement(e);return U(s,t),s.append(...r),s}}function J(e,t){if(e){e.style.opacity="0";let r=+new Date,s="0",n=function(){s=""+(+e.style.opacity+((new Date).getTime()-r)/t),e.style.opacity=s,r=+new Date,+s<1&&(window.requestAnimationFrame&&requestAnimationFrame(n)||setTimeout(n,16))};n()}}function Q(e,t){return Y(e)?e.matches(t)?e:e.querySelector(t):null}function ee(e,t){if(Y(e)){const r=e.getAttribute(t);return isNaN(r)?"true"===r||"false"===r?"true"===r:r:+r}}function te(e){if(e){let t=e.offsetHeight,r=getComputedStyle(e);return t-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),t}return 0}function re(e){if(e){let t=e.parentNode;return t&&t instanceof ShadowRoot&&t.host&&(t=t.host),t}return null}function se(e){if(e){let t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function ne(e,t){if(e){return e.offsetHeight}return 0}function ae(e,t=[]){const r=re(e);return null===r?t:ae(r,t.concat([r]))}function oe(e){let t=[];if(e){let r=ae(e);const s=/(auto|scroll)/,n=e=>{try{let t=window.getComputedStyle(e,null);return s.test(t.getPropertyValue("overflow"))||s.test(t.getPropertyValue("overflowX"))||s.test(t.getPropertyValue("overflowY"))}catch(t){return!1}};for(let e of r){let r=1===e.nodeType&&e.dataset.scrollselectors;if(r){let s=r.split(",");for(let r of s){let s=Q(e,r);s&&n(s)&&t.push(s)}}9!==e.nodeType&&n(e)&&t.push(e)}}return t}function ie(e){return!(null==e||!e.nodeName||!re(e))}function le(e){if(e){let t=e.offsetWidth,r=getComputedStyle(e);return t-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),t}return 0}function ce(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}function ue(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function de(e,t="",r){Y(e)&&null!=r&&e.setAttribute(t,r)}var me={};function he(e="pui_id_"){return me.hasOwnProperty(e)||(me[e]=0),me[e]++,`${e}${me[e]}`}var pe=function(){let e=[];const t=(t,r,s=0)=>[...e].reverse().find((e=>!0))||{key:t,value:s},r=e=>e&&parseInt(e.style.zIndex,10)||0;return{get:r,set:(r,s,n)=>{s&&(s.style.zIndex=String(((r,s,n=999)=>{const a=t(r,s,n),o=a.value+(a.key===r?0:n)+1;return e.push({key:r,value:o}),o})(r,!0,n)))},clear:t=>{var s;t&&(s=r(t),e=e.filter((e=>e.value!==s)),t.style.zIndex="")},getCurrent:e=>(e=>t(e).value)(e)}}();export{X as A,ne as B,se as C,B as D,b as E,ee as F,J as G,ue as H,Z as I,q as J,K,z as L,pe as Z,de as a,ce as b,i as c,W as d,M as e,Q as f,o as g,P as h,ie as i,m as j,u as k,h as l,g as m,a as n,l as o,y as p,oe as q,c as r,U as s,d as t,he as u,f as v,G as w,I as x,te as y,le as z};