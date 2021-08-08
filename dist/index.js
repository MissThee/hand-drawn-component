/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$5=Symbol();class s$4{constructor(t,s){if(s!==e$5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){return t$2&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const n$5=new Map,o$6=t=>{let o=n$5.get(t);return void 0===o&&n$5.set(t,o=new s$4(t,e$5)),o},r$3=t=>o$6("string"==typeof t?t:t+""),i$4=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,o)=>e+(t=>{if(t instanceof s$4)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[o+1]),t[0]);return o$6(n)},S$2=(e,s)=>{t$2?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style");s.textContent=t.cssText,e.appendChild(s);}));},u$2=t$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$3,e$4,h$3,r$2;const o$5={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$4=(t,i)=>i!==t&&(i==i||t==t),l$3={attribute:!0,type:String,converter:o$5,reflect:!1,hasChanged:n$4};class a$3 extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u();}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e));})),t}static createProperty(t,i=l$3){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const h=this[t];this[i]=e,this.requestUpdate(t,h,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(u$2(i));}else void 0!==i&&s.push(u$2(i));return s}static Πp(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1);}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$2(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0);}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t));}attributeChangedCallback(t,i,s){this.K(t,s);}Πj(t,i,s=l$3){var e,h;const r=this.constructor.Πp(t,s);if(void 0!==r&&!0===s.reflect){const n=(null!==(h=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==h?h:o$5.toAttribute)(i,s.type);this.Πh=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this.Πh=null;}}K(t,i){var s,e,h;const r=this.constructor,n=r.Πm.get(t);if(void 0!==n&&this.Πh!==n){const t=r.getPropertyOptions(n),l=t.converter,a=null!==(h=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==h?h:o$5.fromAttribute;this.Πh=n,this[n]=a(i,t.type),this.Πh=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$4)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq());}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo;}catch(t){Promise.reject(t);}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$();}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s);}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}Π$(){this.L=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return !0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$();}updated(t){}firstUpdated(t){}}a$3.finalized=!0,a$3.elementProperties=new Map,a$3.elementStyles=[],a$3.shadowRootOptions={mode:"open"},null===(e$4=(s$3=globalThis).reactiveElementPlatformSupport)||void 0===e$4||e$4.call(s$3,{ReactiveElement:a$3}),(null!==(h$3=(r$2=globalThis).reactiveElementVersions)&&void 0!==h$3?h$3:r$2.reactiveElementVersions=[]).push("1.0.0-rc.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1,i$3,s$2,e$3;const o$4=globalThis.trustedTypes,l$2=o$4?o$4.createPolicy("lit-html",{createHTML:t=>t}):void 0,n$3=`lit$${(Math.random()+"").slice(9)}$`,h$2="?"+n$3,r$1=`<${h$2}>`,u$1=document,c$1=(t="")=>u$1.createComment(t),d$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v$1=Array.isArray,a$2=t=>{var i;return v$1(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},f$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_$1=/-->/g,m$1=/>/g,p$1=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,$$1=/'/g,g$1=/"/g,y$1=/^(?:script|style|textarea)$/i,b$1=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),T$1=b$1(1),w$1=Symbol.for("lit-noChange"),A$1=Symbol.for("lit-nothing"),P$1=new WeakMap,V$1=(t,i,s)=>{var e,o;const l=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let n=l._$litPart$;if(void 0===n){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;l._$litPart$=n=new C$1(i.insertBefore(c$1(),t),t,void 0,s);}return n.I(t),n},E$1=u$1.createTreeWalker(u$1,129,null,!1),M$1=(t,i)=>{const s=t.length-1,e=[];let o,h=2===i?"<svg>":"",u=f$1;for(let i=0;i<s;i++){const s=t[i];let l,c,d=-1,v=0;for(;v<s.length&&(u.lastIndex=v,c=u.exec(s),null!==c);)v=u.lastIndex,u===f$1?"!--"===c[1]?u=_$1:void 0!==c[1]?u=m$1:void 0!==c[2]?(y$1.test(c[2])&&(o=RegExp("</"+c[2],"g")),u=p$1):void 0!==c[3]&&(u=p$1):u===p$1?">"===c[0]?(u=null!=o?o:f$1,d=-1):void 0===c[1]?d=-2:(d=u.lastIndex-c[2].length,l=c[1],u=void 0===c[3]?p$1:'"'===c[3]?g$1:$$1):u===g$1||u===$$1?u=p$1:u===_$1||u===m$1?u=f$1:(u=p$1,o=void 0);const a=u===p$1&&t[i+1].startsWith("/>")?" ":"";h+=u===f$1?s+r$1:d>=0?(e.push(l),s.slice(0,d)+"$lit$"+s.slice(d)+n$3+a):s+n$3+(-2===d?(e.push(void 0),i):a);}const c=h+(t[s]||"<?>")+(2===i?"</svg>":"");return [void 0!==l$2?l$2.createHTML(c):c,e]};class N$1{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let l=0,r=0;const u=t.length-1,d=this.parts,[v,a]=M$1(t,i);if(this.el=N$1.createElement(v,s),E$1.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(e=E$1.nextNode())&&d.length<u;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(n$3)){const s=a[r++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(n$3),i=/([.?@])?(.*)/.exec(s);d.push({type:1,index:l,name:i[2],strings:t,ctor:"."===i[1]?I$1:"?"===i[1]?L$1:"@"===i[1]?R$1:H$1});}else d.push({type:6,index:l});}for(const i of t)e.removeAttribute(i);}if(y$1.test(e.tagName)){const t=e.textContent.split(n$3),i=t.length-1;if(i>0){e.textContent=o$4?o$4.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],c$1()),E$1.nextNode(),d.push({type:2,index:++l});e.append(t[i],c$1());}}}else if(8===e.nodeType)if(e.data===h$2)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=e.data.indexOf(n$3,t+1));)d.push({type:7,index:l}),t+=n$3.length-1;}l++;}}static createElement(t,i){const s=u$1.createElement("template");return s.innerHTML=t,s}}function S$1(t,i,s=t,e){var o,l,n,h;if(i===w$1)return i;let r=void 0!==e?null===(o=s.Σi)||void 0===o?void 0:o[e]:s.Σo;const u=d$1(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(l=null==r?void 0:r.O)||void 0===l||l.call(r,!1),void 0===u?r=void 0:(r=new u(t),r.T(t,s,e)),void 0!==e?(null!==(n=(h=s).Σi)&&void 0!==n?n:h.Σi=[])[e]=r:s.Σo=r),void 0!==r&&(i=S$1(t,r.S(t,i.values),r,e)),i}class k$1{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i;}u(t){var i;const{el:{content:s},parts:e}=this.D,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:u$1).importNode(s,!0);E$1.currentNode=o;let l=E$1.nextNode(),n=0,h=0,r=e[0];for(;void 0!==r;){if(n===r.index){let i;2===r.type?i=new C$1(l,l.nextSibling,this,t):1===r.type?i=new r.ctor(l,r.name,r.strings,this,t):6===r.type&&(i=new z$1(l,this,t)),this.l.push(i),r=e[++h];}n!==(null==r?void 0:r.index)&&(l=E$1.nextNode(),n++);}return o}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++;}}class C$1{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e;}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t);}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=S$1(this,t,i),d$1(t)?t===A$1||null==t||""===t?(this.H!==A$1&&this.R(),this.H=A$1):t!==this.H&&t!==w$1&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):a$2(t)?this.g(t):this.m(t);}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t));}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(u$1.createTextNode(t)),this.H=t;}_(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=N$1.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===o)this.H.v(s);else {const t=new k$1(o,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t;}}C(t){let i=P$1.get(t.strings);return void 0===i&&P$1.set(t.strings,i=new N$1(t)),i}g(t){v$1(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const o of t)e===i.length?i.push(s=new C$1(this.k(c$1()),this.k(c$1()),this,this.options)):s=i[e],s.I(o),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e);}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i;}}}class H$1{constructor(t,i,s,e,o){this.type=1,this.H=A$1,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(A$1),this.strings=s):this.H=A$1;}get tagName(){return this.element.tagName}I(t,i=this,s,e){const o=this.strings;let l=!1;if(void 0===o)t=S$1(this,t,i,0),l=!d$1(t)||t!==this.H&&t!==w$1,l&&(this.H=t);else {const e=t;let n,h;for(t=o[0],n=0;n<o.length-1;n++)h=S$1(this,e[s+n],i,n),h===w$1&&(h=this.H[n]),l||(l=!d$1(h)||h!==this.H[n]),h===A$1?t=A$1:t!==A$1&&(t+=(null!=h?h:"")+o[n+1]),this.H[n]=h;}l&&!e&&this.W(t);}W(t){t===A$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class I$1 extends H$1{constructor(){super(...arguments),this.type=3;}W(t){this.element[this.name]=t===A$1?void 0:t;}}class L$1 extends H$1{constructor(){super(...arguments),this.type=4;}W(t){t&&t!==A$1?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name);}}class R$1 extends H$1{constructor(){super(...arguments),this.type=5;}I(t,i=this){var s;if((t=null!==(s=S$1(this,t,i,0))&&void 0!==s?s:A$1)===w$1)return;const e=this.H,o=t===A$1&&e!==A$1||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,l=t!==A$1&&(e===A$1||o);o&&this.element.removeEventListener(this.name,this,e),l&&this.element.addEventListener(this.name,this,t),this.H=t;}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t);}}class z$1{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s;}I(t){S$1(this,t);}}null===(i$3=(t$1=globalThis).litHtmlPlatformSupport)||void 0===i$3||i$3.call(t$1,N$1,C$1),(null!==(s$2=(e$3=globalThis).litHtmlVersions)&&void 0!==s$2?s$2:e$3.litHtmlVersions=[]).push("2.0.0-rc.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var i$2,l$1,o$3,s$1,n$2,a$1;(null!==(i$2=(a$1=globalThis).litElementVersions)&&void 0!==i$2?i$2:a$1.litElementVersions=[]).push("3.0.0-rc.2");class h$1 extends a$3{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0;}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const r=this.render();super.update(t),this.Φt=V$1(r,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1);}render(){return w$1}}h$1.finalized=!0,h$1._$litElement$=!0,null===(o$3=(l$1=globalThis).litElementHydrateSupport)||void 0===o$3||o$3.call(l$1,{LitElement:h$1}),null===(n$2=(s$1=globalThis).litElementPlatformSupport)||void 0===n$2||n$2.call(s$1,{LitElement:h$1});

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$1=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$1=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$2(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$1(e,n)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$2=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o$1(o,r){return o$2({descriptor:t=>{const i={get(){var t;return null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(o)},enumerable:!0,configurable:!0};if(r){const r="symbol"==typeof t?Symbol():"__"+t;i.get=function(){var t;return void 0===this[r]&&(this[r]=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(o)),this[r]};}return i}})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$1(e){return o$2({descriptor:r=>({get(){var r;return null===(r=this.renderRoot)||void 0===r?void 0:r.querySelectorAll(e)},enumerable:!0,configurable:!0})})}

function t(t,e,s){if(t&&t.length){const[n,o]=e,a=Math.PI/180*s,r=Math.cos(a),h=Math.sin(a);t.forEach((t=>{const[e,s]=t;t[0]=(e-n)*r-(s-o)*h+n,t[1]=(e-n)*h+(s-o)*r+o;}));}}function e(t){const e=t[0],s=t[1];return Math.sqrt(Math.pow(e[0]-s[0],2)+Math.pow(e[1]-s[1],2))}function s(t,e,s,n){const o=e[1]-t[1],a=t[0]-e[0],r=o*t[0]+a*t[1],h=n[1]-s[1],i=s[0]-n[0],c=h*s[0]+i*s[1],l=o*i-h*a;return l?[(i*r-a*c)/l,(o*c-h*r)/l]:null}function n(t,e,s){const n=t.length;if(n<3)return !1;const h=[Number.MAX_SAFE_INTEGER,s],i=[e,s];let c=0;for(let e=0;e<n;e++){const s=t[e],l=t[(e+1)%n];if(r(s,l,i,h)){if(0===a(s,i,l))return o(s,i,l);c++;}}return c%2==1}function o(t,e,s){return e[0]<=Math.max(t[0],s[0])&&e[0]>=Math.min(t[0],s[0])&&e[1]<=Math.max(t[1],s[1])&&e[1]>=Math.min(t[1],s[1])}function a(t,e,s){const n=(e[1]-t[1])*(s[0]-e[0])-(e[0]-t[0])*(s[1]-e[1]);return 0===n?0:n>0?1:2}function r(t,e,s,n){const r=a(t,e,s),h=a(t,e,n),i=a(s,n,t),c=a(s,n,e);return r!==h&&i!==c||(!(0!==r||!o(t,s,e))||(!(0!==h||!o(t,n,e))||(!(0!==i||!o(s,t,n))||!(0!==c||!o(s,e,n)))))}function h(e,s){const n=[0,0],o=Math.round(s.hachureAngle+90);o&&t(e,n,o);const a=function(t,e){const s=[...t];s[0].join(",")!==s[s.length-1].join(",")&&s.push([s[0][0],s[0][1]]);const n=[];if(s&&s.length>2){let t=e.hachureGap;t<0&&(t=4*e.strokeWidth),t=Math.max(t,.1);const o=[];for(let t=0;t<s.length-1;t++){const e=s[t],n=s[t+1];if(e[1]!==n[1]){const t=Math.min(e[1],n[1]);o.push({ymin:t,ymax:Math.max(e[1],n[1]),x:t===e[1]?e[0]:n[0],islope:(n[0]-e[0])/(n[1]-e[1])});}}if(o.sort(((t,e)=>t.ymin<e.ymin?-1:t.ymin>e.ymin?1:t.x<e.x?-1:t.x>e.x?1:t.ymax===e.ymax?0:(t.ymax-e.ymax)/Math.abs(t.ymax-e.ymax))),!o.length)return n;let a=[],r=o[0].ymin;for(;a.length||o.length;){if(o.length){let t=-1;for(let e=0;e<o.length&&!(o[e].ymin>r);e++)t=e;o.splice(0,t+1).forEach((t=>{a.push({s:r,edge:t});}));}if(a=a.filter((t=>!(t.edge.ymax<=r))),a.sort(((t,e)=>t.edge.x===e.edge.x?0:(t.edge.x-e.edge.x)/Math.abs(t.edge.x-e.edge.x))),a.length>1)for(let t=0;t<a.length;t+=2){const e=t+1;if(e>=a.length)break;const s=a[t].edge,o=a[e].edge;n.push([[Math.round(s.x),r],[Math.round(o.x),r]]);}r+=t,a.forEach((e=>{e.edge.x=e.edge.x+t*e.edge.islope;}));}}return n}(e,s);return o&&(t(e,n,-o),function(e,s,n){const o=[];e.forEach((t=>o.push(...t))),t(o,s,n);}(a,n,-o)),a}class i{constructor(t){this.helper=t;}fillPolygon(t,e){return this._fillPolygon(t,e)}_fillPolygon(t,e,s=!1){let n=h(t,e);if(s){const e=this.connectingLines(t,n);n=n.concat(e);}return {type:"fillSketch",ops:this.renderLines(n,e)}}renderLines(t,e){const s=[];for(const n of t)s.push(...this.helper.doubleLineOps(n[0][0],n[0][1],n[1][0],n[1][1],e));return s}connectingLines(t,s){const n=[];if(s.length>1)for(let o=1;o<s.length;o++){const a=s[o-1];if(e(a)<3)continue;const r=[s[o][0],a[1]];if(e(r)>3){const e=this.splitOnIntersections(t,r);n.push(...e);}}return n}midPointInPolygon(t,e){return n(t,(e[0][0]+e[1][0])/2,(e[0][1]+e[1][1])/2)}splitOnIntersections(t,o){const a=Math.max(5,.1*e(o)),h=[];for(let n=0;n<t.length;n++){const i=t[n],c=t[(n+1)%t.length];if(r(i,c,...o)){const t=s(i,c,o[0],o[1]);if(t){const s=e([t,o[0]]),n=e([t,o[1]]);s>a&&n>a&&h.push({point:t,distance:s});}}}if(h.length>1){const e=h.sort(((t,e)=>t.distance-e.distance)).map((t=>t.point));if(n(t,...o[0])||e.shift(),n(t,...o[1])||e.pop(),e.length<=1)return this.midPointInPolygon(t,o)?[o]:[];const s=[o[0],...e,o[1]],a=[];for(let e=0;e<s.length-1;e+=2){const n=[s[e],s[e+1]];this.midPointInPolygon(t,n)&&a.push(n);}return a}return this.midPointInPolygon(t,o)?[o]:[]}}class c extends i{fillPolygon(t,e){return this._fillPolygon(t,e,!0)}}class l extends i{fillPolygon(t,e){const s=this._fillPolygon(t,e),n=Object.assign({},e,{hachureAngle:e.hachureAngle+90}),o=this._fillPolygon(t,n);return s.ops=s.ops.concat(o.ops),s}}class u{constructor(t){this.helper=t;}fillPolygon(t,e){const s=h(t,e=Object.assign({},e,{curveStepCount:4,hachureAngle:0,roughness:1}));return this.dotsOnLines(s,e)}dotsOnLines(t,s){const n=[];let o=s.hachureGap;o<0&&(o=4*s.strokeWidth),o=Math.max(o,.1);let a=s.fillWeight;a<0&&(a=s.strokeWidth/2);const r=o/4;for(const h of t){const t=e(h),i=t/o,c=Math.ceil(i)-1,l=t-c*o,u=(h[0][0]+h[1][0])/2-o/4,p=Math.min(h[0][1],h[1][1]);for(let t=0;t<c;t++){const e=p+l+t*o,h=this.helper.randOffsetWithRange(u-r,u+r,s),i=this.helper.randOffsetWithRange(e-r,e+r,s),c=this.helper.ellipse(h,i,a,a,s);n.push(...c.ops);}}return {type:"fillSketch",ops:n}}}class p{constructor(t){this.helper=t;}fillPolygon(t,e){const s=h(t,e);return {type:"fillSketch",ops:this.dashedLine(s,e)}}dashedLine(t,s){const n=s.dashOffset<0?s.hachureGap<0?4*s.strokeWidth:s.hachureGap:s.dashOffset,o=s.dashGap<0?s.hachureGap<0?4*s.strokeWidth:s.hachureGap:s.dashGap,a=[];return t.forEach((t=>{const r=e(t),h=Math.floor(r/(n+o)),i=(r+o-h*(n+o))/2;let c=t[0],l=t[1];c[0]>l[0]&&(c=t[1],l=t[0]);const u=Math.atan((l[1]-c[1])/(l[0]-c[0]));for(let t=0;t<h;t++){const e=t*(n+o),r=e+n,h=[c[0]+e*Math.cos(u)+i*Math.cos(u),c[1]+e*Math.sin(u)+i*Math.sin(u)],l=[c[0]+r*Math.cos(u)+i*Math.cos(u),c[1]+r*Math.sin(u)+i*Math.sin(u)];a.push(...this.helper.doubleLineOps(h[0],h[1],l[0],l[1],s));}})),a}}class f{constructor(t){this.helper=t;}fillPolygon(t,e){const s=e.hachureGap<0?4*e.strokeWidth:e.hachureGap,n=e.zigzagOffset<0?s:e.zigzagOffset,o=h(t,e=Object.assign({},e,{hachureGap:s+n}));return {type:"fillSketch",ops:this.zigzagLines(o,n,e)}}zigzagLines(t,s,n){const o=[];return t.forEach((t=>{const a=e(t),r=Math.round(a/(2*s));let h=t[0],i=t[1];h[0]>i[0]&&(h=t[1],i=t[0]);const c=Math.atan((i[1]-h[1])/(i[0]-h[0]));for(let t=0;t<r;t++){const e=2*t*s,a=2*(t+1)*s,r=Math.sqrt(2*Math.pow(s,2)),i=[h[0]+e*Math.cos(c),h[1]+e*Math.sin(c)],l=[h[0]+a*Math.cos(c),h[1]+a*Math.sin(c)],u=[i[0]+r*Math.cos(c+Math.PI/4),i[1]+r*Math.sin(c+Math.PI/4)];o.push(...this.helper.doubleLineOps(i[0],i[1],u[0],u[1],n),...this.helper.doubleLineOps(u[0],u[1],l[0],l[1],n));}})),o}}const d={};class g{constructor(t){this.seed=t;}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}const M={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function k(t,e){return t.type===e}function b(t){const e=[],s=function(t){const e=new Array;for(;""!==t;)if(t.match(/^([ \t\r\n,]+)/))t=t.substr(RegExp.$1.length);else if(t.match(/^([aAcChHlLmMqQsStTvVzZ])/))e[e.length]={type:0,text:RegExp.$1},t=t.substr(RegExp.$1.length);else {if(!t.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return [];e[e.length]={type:1,text:`${parseFloat(RegExp.$1)}`},t=t.substr(RegExp.$1.length);}return e[e.length]={type:2,text:""},e}(t);let n="BOD",o=0,a=s[o];for(;!k(a,2);){let r=0;const h=[];if("BOD"===n){if("M"!==a.text&&"m"!==a.text)return b("M0,0"+t);o++,r=M[a.text],n=a.text;}else k(a,1)?r=M[n]:(o++,r=M[a.text],n=a.text);if(!(o+r<s.length))throw new Error("Path data ended short");for(let t=o;t<o+r;t++){const e=s[t];if(!k(e,1))throw new Error("Param not a number: "+n+","+e.text);h[h.length]=+e.text;}if("number"!=typeof M[n])throw new Error("Bad segment: "+n);{const t={key:n,data:h};e.push(t),o+=r,a=s[o],"M"===n&&(n="L"),"m"===n&&(n="l");}}return e}function y(t){let e=0,s=0,n=0,o=0;const a=[];for(const{key:r,data:h}of t)switch(r){case"M":a.push({key:"M",data:[...h]}),[e,s]=h,[n,o]=h;break;case"m":e+=h[0],s+=h[1],a.push({key:"M",data:[e,s]}),n=e,o=s;break;case"L":a.push({key:"L",data:[...h]}),[e,s]=h;break;case"l":e+=h[0],s+=h[1],a.push({key:"L",data:[e,s]});break;case"C":a.push({key:"C",data:[...h]}),e=h[4],s=h[5];break;case"c":{const t=h.map(((t,n)=>n%2?t+s:t+e));a.push({key:"C",data:t}),e=t[4],s=t[5];break}case"Q":a.push({key:"Q",data:[...h]}),e=h[2],s=h[3];break;case"q":{const t=h.map(((t,n)=>n%2?t+s:t+e));a.push({key:"Q",data:t}),e=t[2],s=t[3];break}case"A":a.push({key:"A",data:[...h]}),e=h[5],s=h[6];break;case"a":e+=h[5],s+=h[6],a.push({key:"A",data:[h[0],h[1],h[2],h[3],h[4],e,s]});break;case"H":a.push({key:"H",data:[...h]}),e=h[0];break;case"h":e+=h[0],a.push({key:"H",data:[e]});break;case"V":a.push({key:"V",data:[...h]}),s=h[0];break;case"v":s+=h[0],a.push({key:"V",data:[s]});break;case"S":a.push({key:"S",data:[...h]}),e=h[2],s=h[3];break;case"s":{const t=h.map(((t,n)=>n%2?t+s:t+e));a.push({key:"S",data:t}),e=t[2],s=t[3];break}case"T":a.push({key:"T",data:[...h]}),e=h[0],s=h[1];break;case"t":e+=h[0],s+=h[1],a.push({key:"T",data:[e,s]});break;case"Z":case"z":a.push({key:"Z",data:[]}),e=n,s=o;}return a}function m(t){const e=[];let s="",n=0,o=0,a=0,r=0,h=0,i=0;for(const{key:c,data:l}of t){switch(c){case"M":e.push({key:"M",data:[...l]}),[n,o]=l,[a,r]=l;break;case"C":e.push({key:"C",data:[...l]}),n=l[4],o=l[5],h=l[2],i=l[3];break;case"L":e.push({key:"L",data:[...l]}),[n,o]=l;break;case"H":n=l[0],e.push({key:"L",data:[n,o]});break;case"V":o=l[0],e.push({key:"L",data:[n,o]});break;case"S":{let t=0,a=0;"C"===s||"S"===s?(t=n+(n-h),a=o+(o-i)):(t=n,a=o),e.push({key:"C",data:[t,a,...l]}),h=l[0],i=l[1],n=l[2],o=l[3];break}case"T":{const[t,a]=l;let r=0,c=0;"Q"===s||"T"===s?(r=n+(n-h),c=o+(o-i)):(r=n,c=o);const u=n+2*(r-n)/3,p=o+2*(c-o)/3,f=t+2*(r-t)/3,d=a+2*(c-a)/3;e.push({key:"C",data:[u,p,f,d,t,a]}),h=r,i=c,n=t,o=a;break}case"Q":{const[t,s,a,r]=l,c=n+2*(t-n)/3,u=o+2*(s-o)/3,p=a+2*(t-a)/3,f=r+2*(s-r)/3;e.push({key:"C",data:[c,u,p,f,a,r]}),h=t,i=s,n=a,o=r;break}case"A":{const t=Math.abs(l[0]),s=Math.abs(l[1]),a=l[2],r=l[3],h=l[4],i=l[5],c=l[6];if(0===t||0===s)e.push({key:"C",data:[n,o,i,c,i,c]}),n=i,o=c;else if(n!==i||o!==c){P(n,o,i,c,t,s,a,r,h).forEach((function(t){e.push({key:"C",data:t});})),n=i,o=c;}break}case"Z":e.push({key:"Z",data:[]}),n=a,o=r;}s=c;}return e}function w(t,e,s){return [t*Math.cos(s)-e*Math.sin(s),t*Math.sin(s)+e*Math.cos(s)]}function P(t,e,s,n,o,a,r,h,i,c){const l=(u=r,Math.PI*u/180);var u;let p=[],f=0,d=0,g=0,M=0;if(c)[f,d,g,M]=c;else {[t,e]=w(t,e,-l),[s,n]=w(s,n,-l);const r=(t-s)/2,c=(e-n)/2;let u=r*r/(o*o)+c*c/(a*a);u>1&&(u=Math.sqrt(u),o*=u,a*=u);const p=o*o,k=a*a,b=p*k-p*c*c-k*r*r,y=p*c*c+k*r*r,m=(h===i?-1:1)*Math.sqrt(Math.abs(b/y));g=m*o*c/a+(t+s)/2,M=m*-a*r/o+(e+n)/2,f=Math.asin(parseFloat(((e-M)/a).toFixed(9))),d=Math.asin(parseFloat(((n-M)/a).toFixed(9))),t<g&&(f=Math.PI-f),s<g&&(d=Math.PI-d),f<0&&(f=2*Math.PI+f),d<0&&(d=2*Math.PI+d),i&&f>d&&(f-=2*Math.PI),!i&&d>f&&(d-=2*Math.PI);}let k=d-f;if(Math.abs(k)>120*Math.PI/180){const t=d,e=s,h=n;d=i&&d>f?f+120*Math.PI/180*1:f+120*Math.PI/180*-1,p=P(s=g+o*Math.cos(d),n=M+a*Math.sin(d),e,h,o,a,r,0,i,[d,t,g,M]);}k=d-f;const b=Math.cos(f),y=Math.sin(f),m=Math.cos(d),x=Math.sin(d),v=Math.tan(k/4),O=4/3*o*v,S=4/3*a*v,L=[t,e],T=[t+O*y,e-S*b],I=[s+O*x,n-S*m],A=[s,n];if(T[0]=2*L[0]-T[0],T[1]=2*L[1]-T[1],c)return [T,I,A].concat(p);{p=[T,I,A].concat(p);const t=[];for(let e=0;e<p.length;e+=3){const s=w(p[e][0],p[e][1],l),n=w(p[e+1][0],p[e+1][1],l),o=w(p[e+2][0],p[e+2][1],l);t.push([s[0],s[1],n[0],n[1],o[0],o[1]]);}return t}}const x={randOffset:function(t,e){return W(t,e)},randOffsetWithRange:function(t,e,s){return E(t,e,s)},ellipse:function(t,e,s,n,o){const a=T(s,n,o);return I(t,e,o,a).opset},doubleLineOps:function(t,e,s,n,o){return z(t,e,s,n,o,!0)}};function v(t,e,s,n,o){return {type:"path",ops:z(t,e,s,n,o)}}function O(t,e,s){const n=(t||[]).length;if(n>2){const o=[];for(let e=0;e<n-1;e++)o.push(...z(t[e][0],t[e][1],t[e+1][0],t[e+1][1],s));return e&&o.push(...z(t[n-1][0],t[n-1][1],t[0][0],t[0][1],s)),{type:"path",ops:o}}return 2===n?v(t[0][0],t[0][1],t[1][0],t[1][1],s):{type:"path",ops:[]}}function S(t,e,s,n,o){return function(t,e){return O(t,!0,e)}([[t,e],[t+s,e],[t+s,e+n],[t,e+n]],o)}function L(t,e){let s=$(t,1*(1+.2*e.roughness),e);if(!e.disableMultiStroke){const n=$(t,1.5*(1+.22*e.roughness),function(t){const e=Object.assign({},t);e.randomizer=void 0,t.seed&&(e.seed=t.seed+1);return e}(e));s=s.concat(n);}return {type:"path",ops:s}}function T(t,e,s){const n=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(e/2,2))/2)),o=Math.max(s.curveStepCount,s.curveStepCount/Math.sqrt(200)*n),a=2*Math.PI/o;let r=Math.abs(t/2),h=Math.abs(e/2);const i=1-s.curveFitting;return r+=W(r*i,s),h+=W(h*i,s),{increment:a,rx:r,ry:h}}function I(t,e,s,n){const[o,a]=q(n.increment,t,e,n.rx,n.ry,1,n.increment*E(.1,E(.4,1,s),s),s);let r=G(o,null,s);if(!s.disableMultiStroke){const[o]=q(n.increment,t,e,n.rx,n.ry,1.5,0,s),a=G(o,null,s);r=r.concat(a);}return {estimatedPoints:a,opset:{type:"path",ops:r}}}function A(t,e,s,n,o,a,r,h,i){const c=t,l=e;let u=Math.abs(s/2),p=Math.abs(n/2);u+=W(.01*u,i),p+=W(.01*p,i);let f=o,d=a;for(;f<0;)f+=2*Math.PI,d+=2*Math.PI;d-f>2*Math.PI&&(f=0,d=2*Math.PI);const g=2*Math.PI/i.curveStepCount,M=Math.min(g/2,(d-f)/2),k=F(M,c,l,u,p,f,d,1,i);if(!i.disableMultiStroke){const t=F(M,c,l,u,p,f,d,1.5,i);k.push(...t);}return r&&(h?k.push(...z(c,l,c+u*Math.cos(f),l+p*Math.sin(f),i),...z(c,l,c+u*Math.cos(d),l+p*Math.sin(d),i)):k.push({op:"lineTo",data:[c,l]},{op:"lineTo",data:[c+u*Math.cos(f),l+p*Math.sin(f)]})),{type:"path",ops:k}}function D(t,e){const s=[];if(t.length){const n=e.maxRandomnessOffset||0,o=t.length;if(o>2){s.push({op:"move",data:[t[0][0]+W(n,e),t[0][1]+W(n,e)]});for(let a=1;a<o;a++)s.push({op:"lineTo",data:[t[a][0]+W(n,e),t[a][1]+W(n,e)]});}}return {type:"fillPath",ops:s}}function _(t,e){return function(t,e){let s=t.fillStyle||"hachure";if(!d[s])switch(s){case"zigzag":d[s]||(d[s]=new c(e));break;case"cross-hatch":d[s]||(d[s]=new l(e));break;case"dots":d[s]||(d[s]=new u(e));break;case"dashed":d[s]||(d[s]=new p(e));break;case"zigzag-line":d[s]||(d[s]=new f(e));break;case"hachure":default:s="hachure",d[s]||(d[s]=new i(e));}return d[s]}(e,x).fillPolygon(t,e)}function C(t){return t.randomizer||(t.randomizer=new g(t.seed||0)),t.randomizer.next()}function E(t,e,s,n=1){return s.roughness*n*(C(s)*(e-t)+t)}function W(t,e,s=1){return E(-t,t,e,s)}function z(t,e,s,n,o,a=!1){const r=a?o.disableMultiStrokeFill:o.disableMultiStroke,h=R(t,e,s,n,o,!0,!1);if(r)return h;const i=R(t,e,s,n,o,!0,!0);return h.concat(i)}function R(t,e,s,n,o,a,r){const h=Math.pow(t-s,2)+Math.pow(e-n,2),i=Math.sqrt(h);let c=1;c=i<200?1:i>500?.4:-.0016668*i+1.233334;let l=o.maxRandomnessOffset||0;l*l*100>h&&(l=i/10);const u=l/2,p=.2+.2*C(o);let f=o.bowing*o.maxRandomnessOffset*(n-e)/200,d=o.bowing*o.maxRandomnessOffset*(t-s)/200;f=W(f,o,c),d=W(d,o,c);const g=[],M=()=>W(u,o,c),k=()=>W(l,o,c),b=o.preserveVertices;return a&&(r?g.push({op:"move",data:[t+(b?0:M()),e+(b?0:M())]}):g.push({op:"move",data:[t+(b?0:W(l,o,c)),e+(b?0:W(l,o,c))]})),r?g.push({op:"bcurveTo",data:[f+t+(s-t)*p+M(),d+e+(n-e)*p+M(),f+t+2*(s-t)*p+M(),d+e+2*(n-e)*p+M(),s+(b?0:M()),n+(b?0:M())]}):g.push({op:"bcurveTo",data:[f+t+(s-t)*p+k(),d+e+(n-e)*p+k(),f+t+2*(s-t)*p+k(),d+e+2*(n-e)*p+k(),s+(b?0:k()),n+(b?0:k())]}),g}function $(t,e,s){const n=[];n.push([t[0][0]+W(e,s),t[0][1]+W(e,s)]),n.push([t[0][0]+W(e,s),t[0][1]+W(e,s)]);for(let o=1;o<t.length;o++)n.push([t[o][0]+W(e,s),t[o][1]+W(e,s)]),o===t.length-1&&n.push([t[o][0]+W(e,s),t[o][1]+W(e,s)]);return G(n,null,s)}function G(t,e,s){const n=t.length,o=[];if(n>3){const a=[],r=1-s.curveTightness;o.push({op:"move",data:[t[1][0],t[1][1]]});for(let e=1;e+2<n;e++){const s=t[e];a[0]=[s[0],s[1]],a[1]=[s[0]+(r*t[e+1][0]-r*t[e-1][0])/6,s[1]+(r*t[e+1][1]-r*t[e-1][1])/6],a[2]=[t[e+1][0]+(r*t[e][0]-r*t[e+2][0])/6,t[e+1][1]+(r*t[e][1]-r*t[e+2][1])/6],a[3]=[t[e+1][0],t[e+1][1]],o.push({op:"bcurveTo",data:[a[1][0],a[1][1],a[2][0],a[2][1],a[3][0],a[3][1]]});}if(e&&2===e.length){const t=s.maxRandomnessOffset;o.push({op:"lineTo",data:[e[0]+W(t,s),e[1]+W(t,s)]});}}else 3===n?(o.push({op:"move",data:[t[1][0],t[1][1]]}),o.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===n&&o.push(...z(t[0][0],t[0][1],t[1][0],t[1][1],s));return o}function q(t,e,s,n,o,a,r,h){const i=[],c=[],l=W(.5,h)-Math.PI/2;c.push([W(a,h)+e+.9*n*Math.cos(l-t),W(a,h)+s+.9*o*Math.sin(l-t)]);for(let r=l;r<2*Math.PI+l-.01;r+=t){const t=[W(a,h)+e+n*Math.cos(r),W(a,h)+s+o*Math.sin(r)];i.push(t),c.push(t);}return c.push([W(a,h)+e+n*Math.cos(l+2*Math.PI+.5*r),W(a,h)+s+o*Math.sin(l+2*Math.PI+.5*r)]),c.push([W(a,h)+e+.98*n*Math.cos(l+r),W(a,h)+s+.98*o*Math.sin(l+r)]),c.push([W(a,h)+e+.9*n*Math.cos(l+.5*r),W(a,h)+s+.9*o*Math.sin(l+.5*r)]),[c,i]}function F(t,e,s,n,o,a,r,h,i){const c=a+W(.1,i),l=[];l.push([W(h,i)+e+.9*n*Math.cos(c-t),W(h,i)+s+.9*o*Math.sin(c-t)]);for(let a=c;a<=r;a+=t)l.push([W(h,i)+e+n*Math.cos(a),W(h,i)+s+o*Math.sin(a)]);return l.push([e+n*Math.cos(r),s+o*Math.sin(r)]),l.push([e+n*Math.cos(r),s+o*Math.sin(r)]),G(l,null,i)}function V(t,e,s,n,o,a,r,h){const i=[],c=[h.maxRandomnessOffset||1,(h.maxRandomnessOffset||1)+.3];let l=[0,0];const u=h.disableMultiStroke?1:2,p=h.preserveVertices;for(let f=0;f<u;f++)0===f?i.push({op:"move",data:[r[0],r[1]]}):i.push({op:"move",data:[r[0]+(p?0:W(c[0],h)),r[1]+(p?0:W(c[0],h))]}),l=p?[o,a]:[o+W(c[f],h),a+W(c[f],h)],i.push({op:"bcurveTo",data:[t+W(c[f],h),e+W(c[f],h),s+W(c[f],h),n+W(c[f],h),l[0],l[1]]});return i}function j(t){return [...t]}function N(t,e){return Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)}function Z(t,e,s){const n=N(e,s);if(0===n)return N(t,e);let o=((t[0]-e[0])*(s[0]-e[0])+(t[1]-e[1])*(s[1]-e[1]))/n;return o=Math.max(0,Math.min(1,o)),N(t,Q(e,s,o))}function Q(t,e,s){return [t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]}function H(t,e,s,n){const o=n||[];if(function(t,e){const s=t[e+0],n=t[e+1],o=t[e+2],a=t[e+3];let r=3*n[0]-2*s[0]-a[0];r*=r;let h=3*n[1]-2*s[1]-a[1];h*=h;let i=3*o[0]-2*a[0]-s[0];i*=i;let c=3*o[1]-2*a[1]-s[1];return c*=c,r<i&&(r=i),h<c&&(h=c),r+h}(t,e)<s){const s=t[e+0];if(o.length){(a=o[o.length-1],r=s,Math.sqrt(N(a,r)))>1&&o.push(s);}else o.push(s);o.push(t[e+3]);}else {const n=.5,a=t[e+0],r=t[e+1],h=t[e+2],i=t[e+3],c=Q(a,r,n),l=Q(r,h,n),u=Q(h,i,n),p=Q(c,l,n),f=Q(l,u,n),d=Q(p,f,n);H([a,c,p,d],0,s,o),H([d,f,u,i],0,s,o);}var a,r;return o}function B(t,e){return X(t,0,t.length,e)}function X(t,e,s,n,o){const a=o||[],r=t[e],h=t[s-1];let i=0,c=1;for(let n=e+1;n<s-1;++n){const e=Z(t[n],r,h);e>i&&(i=e,c=n);}return Math.sqrt(i)>n?(X(t,e,c+1,n,a),X(t,c,s,n,a)):(a.length||a.push(r),a.push(h)),a}function J(t,e=.15,s){const n=[],o=(t.length-1)/3;for(let s=0;s<o;s++){H(t,3*s,e,n);}return s&&s>0?X(n,0,n.length,s):n}const K="none";class U{constructor(t){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1},this.config=t||{},this.config.options&&(this.defaultOptions=this._o(this.config.options));}static newSeed(){return Math.floor(Math.random()*2**31)}_o(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}_d(t,e,s){return {shape:t,sets:e||[],options:s||this.defaultOptions}}line(t,e,s,n,o){const a=this._o(o);return this._d("line",[v(t,e,s,n,a)],a)}rectangle(t,e,s,n,o){const a=this._o(o),r=[],h=S(t,e,s,n,a);if(a.fill){const o=[[t,e],[t+s,e],[t+s,e+n],[t,e+n]];"solid"===a.fillStyle?r.push(D(o,a)):r.push(_(o,a));}return a.stroke!==K&&r.push(h),this._d("rectangle",r,a)}ellipse(t,e,s,n,o){const a=this._o(o),r=[],h=T(s,n,a),i=I(t,e,a,h);if(a.fill)if("solid"===a.fillStyle){const s=I(t,e,a,h).opset;s.type="fillPath",r.push(s);}else r.push(_(i.estimatedPoints,a));return a.stroke!==K&&r.push(i.opset),this._d("ellipse",r,a)}circle(t,e,s,n){const o=this.ellipse(t,e,s,s,n);return o.shape="circle",o}linearPath(t,e){const s=this._o(e);return this._d("linearPath",[O(t,!1,s)],s)}arc(t,e,s,n,o,a,r=!1,h){const i=this._o(h),c=[],l=A(t,e,s,n,o,a,r,!0,i);if(r&&i.fill)if("solid"===i.fillStyle){const r=A(t,e,s,n,o,a,!0,!1,i);r.type="fillPath",c.push(r);}else c.push(function(t,e,s,n,o,a,r){const h=t,i=e;let c=Math.abs(s/2),l=Math.abs(n/2);c+=W(.01*c,r),l+=W(.01*l,r);let u=o,p=a;for(;u<0;)u+=2*Math.PI,p+=2*Math.PI;p-u>2*Math.PI&&(u=0,p=2*Math.PI);const f=(p-u)/r.curveStepCount,d=[];for(let t=u;t<=p;t+=f)d.push([h+c*Math.cos(t),i+l*Math.sin(t)]);return d.push([h+c*Math.cos(p),i+l*Math.sin(p)]),d.push([h,i]),_(d,r)}(t,e,s,n,o,a,i));return i.stroke!==K&&c.push(l),this._d("arc",c,i)}curve(t,e){const s=this._o(e),n=[],o=L(t,s);if(s.fill&&s.fill!==K&&t.length>=3){const e=J(function(t,e=0){const s=t.length;if(s<3)throw new Error("A curve must have at least three points.");const n=[];if(3===s)n.push(j(t[0]),j(t[1]),j(t[2]),j(t[2]));else {const s=[];s.push(t[0],t[0]);for(let e=1;e<t.length;e++)s.push(t[e]),e===t.length-1&&s.push(t[e]);const o=[],a=1-e;n.push(j(s[0]));for(let t=1;t+2<s.length;t++){const e=s[t];o[0]=[e[0],e[1]],o[1]=[e[0]+(a*s[t+1][0]-a*s[t-1][0])/6,e[1]+(a*s[t+1][1]-a*s[t-1][1])/6],o[2]=[s[t+1][0]+(a*s[t][0]-a*s[t+2][0])/6,s[t+1][1]+(a*s[t][1]-a*s[t+2][1])/6],o[3]=[s[t+1][0],s[t+1][1]],n.push(o[1],o[2],o[3]);}}return n}(t),10,(1+s.roughness)/2);"solid"===s.fillStyle?n.push(D(e,s)):n.push(_(e,s));}return s.stroke!==K&&n.push(o),this._d("curve",n,s)}polygon(t,e){const s=this._o(e),n=[],o=O(t,!0,s);return s.fill&&("solid"===s.fillStyle?n.push(D(t,s)):n.push(_(t,s))),s.stroke!==K&&n.push(o),this._d("polygon",n,s)}path(t,e){const s=this._o(e),n=[];if(!t)return this._d("path",n,s);t=(t||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const o=s.fill&&"transparent"!==s.fill&&s.fill!==K,a=s.stroke!==K,r=!!(s.simplification&&s.simplification<1),h=function(t,e,s){const n=m(y(b(t))),o=[];let a=[],r=[0,0],h=[];const i=()=>{h.length>=4&&a.push(...J(h,e)),h=[];},c=()=>{i(),a.length&&(o.push(a),a=[]);};for(const{key:t,data:e}of n)switch(t){case"M":c(),r=[e[0],e[1]],a.push(r);break;case"L":i(),a.push([e[0],e[1]]);break;case"C":if(!h.length){const t=a.length?a[a.length-1]:r;h.push([t[0],t[1]]);}h.push([e[0],e[1]]),h.push([e[2],e[3]]),h.push([e[4],e[5]]);break;case"Z":i(),a.push([r[0],r[1]]);}if(c(),!s)return o;const l=[];for(const t of o){const e=B(t,s);e.length&&l.push(e);}return l}(t,1,r?4-4*s.simplification:(1+s.roughness)/2);if(o)if(s.combineNestedSvgPaths){const t=[];h.forEach((e=>t.push(...e))),"solid"===s.fillStyle?n.push(D(t,s)):n.push(_(t,s));}else h.forEach((t=>{"solid"===s.fillStyle?n.push(D(t,s)):n.push(_(t,s));}));return a&&(r?h.forEach((t=>{n.push(O(t,!1,s));})):n.push(function(t,e){const s=m(y(b(t))),n=[];let o=[0,0],a=[0,0];for(const{key:t,data:r}of s)switch(t){case"M":{const t=1*(e.maxRandomnessOffset||0),s=e.preserveVertices;n.push({op:"move",data:r.map((n=>n+(s?0:W(t,e))))}),a=[r[0],r[1]],o=[r[0],r[1]];break}case"L":n.push(...z(a[0],a[1],r[0],r[1],e)),a=[r[0],r[1]];break;case"C":{const[t,s,o,h,i,c]=r;n.push(...V(t,s,o,h,i,c,a,e)),a=[i,c];break}case"Z":n.push(...z(a[0],a[1],o[0],o[1],e)),a=[o[0],o[1]];}return {type:"path",ops:n}}(t,s))),this._d("path",n,s)}opsToPath(t,e){let s="";for(const n of t.ops){const t="number"==typeof e&&e>=0?n.data.map((t=>+t.toFixed(e))):n.data;switch(n.op){case"move":s+=`M${t[0]} ${t[1]} `;break;case"bcurveTo":s+=`C${t[0]} ${t[1]}, ${t[2]} ${t[3]}, ${t[4]} ${t[5]} `;break;case"lineTo":s+=`L${t[0]} ${t[1]} `;}}return s.trim()}toPaths(t){const e=t.sets||[],s=t.options||this.defaultOptions,n=[];for(const t of e){let e=null;switch(t.type){case"path":e={d:this.opsToPath(t),stroke:s.stroke,strokeWidth:s.strokeWidth,fill:K};break;case"fillPath":e={d:this.opsToPath(t),stroke:K,strokeWidth:0,fill:s.fill||K};break;case"fillSketch":e=this.fillSketch(t,s);}e&&n.push(e);}return n}fillSketch(t,e){let s=e.fillWeight;return s<0&&(s=e.strokeWidth/2),{d:this.opsToPath(t),stroke:e.fill||K,strokeWidth:s,fill:K}}}class Y{constructor(t,e){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.gen=new U(e);}draw(t){const e=t.sets||[],s=t.options||this.getDefaultOptions(),n=this.ctx;for(const o of e)switch(o.type){case"path":n.save(),n.strokeStyle="none"===s.stroke?"transparent":s.stroke,n.lineWidth=s.strokeWidth,s.strokeLineDash&&n.setLineDash(s.strokeLineDash),s.strokeLineDashOffset&&(n.lineDashOffset=s.strokeLineDashOffset),this._drawToContext(n,o),n.restore();break;case"fillPath":n.save(),n.fillStyle=s.fill||"";const e="curve"===t.shape||"polygon"===t.shape?"evenodd":"nonzero";this._drawToContext(n,o,e),n.restore();break;case"fillSketch":this.fillSketch(n,o,s);}}fillSketch(t,e,s){let n=s.fillWeight;n<0&&(n=s.strokeWidth/2),t.save(),s.fillLineDash&&t.setLineDash(s.fillLineDash),s.fillLineDashOffset&&(t.lineDashOffset=s.fillLineDashOffset),t.strokeStyle=s.fill||"",t.lineWidth=n,this._drawToContext(t,e),t.restore();}_drawToContext(t,e,s="nonzero"){t.beginPath();for(const s of e.ops){const e=s.data;switch(s.op){case"move":t.moveTo(e[0],e[1]);break;case"bcurveTo":t.bezierCurveTo(e[0],e[1],e[2],e[3],e[4],e[5]);break;case"lineTo":t.lineTo(e[0],e[1]);}}"fillPath"===e.type?t.fill(s):t.stroke();}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(t,e,s,n,o){const a=this.gen.line(t,e,s,n,o);return this.draw(a),a}rectangle(t,e,s,n,o){const a=this.gen.rectangle(t,e,s,n,o);return this.draw(a),a}ellipse(t,e,s,n,o){const a=this.gen.ellipse(t,e,s,n,o);return this.draw(a),a}circle(t,e,s,n){const o=this.gen.circle(t,e,s,n);return this.draw(o),o}linearPath(t,e){const s=this.gen.linearPath(t,e);return this.draw(s),s}polygon(t,e){const s=this.gen.polygon(t,e);return this.draw(s),s}arc(t,e,s,n,o,a,r=!1,h){const i=this.gen.arc(t,e,s,n,o,a,r,h);return this.draw(i),i}curve(t,e){const s=this.gen.curve(t,e);return this.draw(s),s}path(t,e){const s=this.gen.path(t,e);return this.draw(s),s}}const tt="http://www.w3.org/2000/svg";class et{constructor(t,e){this.svg=t,this.gen=new U(e);}draw(t){const e=t.sets||[],s=t.options||this.getDefaultOptions(),n=this.svg.ownerDocument||window.document,o=n.createElementNS(tt,"g"),a=t.options.fixedDecimalPlaceDigits;for(const r of e){let e=null;switch(r.type){case"path":e=n.createElementNS(tt,"path"),e.setAttribute("d",this.opsToPath(r,a)),e.setAttribute("stroke",s.stroke),e.setAttribute("stroke-width",s.strokeWidth+""),e.setAttribute("fill","none"),s.strokeLineDash&&e.setAttribute("stroke-dasharray",s.strokeLineDash.join(" ").trim()),s.strokeLineDashOffset&&e.setAttribute("stroke-dashoffset",`${s.strokeLineDashOffset}`);break;case"fillPath":e=n.createElementNS(tt,"path"),e.setAttribute("d",this.opsToPath(r,a)),e.setAttribute("stroke","none"),e.setAttribute("stroke-width","0"),e.setAttribute("fill",s.fill||""),"curve"!==t.shape&&"polygon"!==t.shape||e.setAttribute("fill-rule","evenodd");break;case"fillSketch":e=this.fillSketch(n,r,s);}e&&o.appendChild(e);}return o}fillSketch(t,e,s){let n=s.fillWeight;n<0&&(n=s.strokeWidth/2);const o=t.createElementNS(tt,"path");return o.setAttribute("d",this.opsToPath(e,s.fixedDecimalPlaceDigits)),o.setAttribute("stroke",s.fill||""),o.setAttribute("stroke-width",n+""),o.setAttribute("fill","none"),s.fillLineDash&&o.setAttribute("stroke-dasharray",s.fillLineDash.join(" ").trim()),s.fillLineDashOffset&&o.setAttribute("stroke-dashoffset",`${s.fillLineDashOffset}`),o}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(t,e){return this.gen.opsToPath(t,e)}line(t,e,s,n,o){const a=this.gen.line(t,e,s,n,o);return this.draw(a)}rectangle(t,e,s,n,o){const a=this.gen.rectangle(t,e,s,n,o);return this.draw(a)}ellipse(t,e,s,n,o){const a=this.gen.ellipse(t,e,s,n,o);return this.draw(a)}circle(t,e,s,n){const o=this.gen.circle(t,e,s,n);return this.draw(o)}linearPath(t,e){const s=this.gen.linearPath(t,e);return this.draw(s)}polygon(t,e){const s=this.gen.polygon(t,e);return this.draw(s)}arc(t,e,s,n,o,a,r=!1,h){const i=this.gen.arc(t,e,s,n,o,a,r,h);return this.draw(i)}curve(t,e){const s=this.gen.curve(t,e);return this.draw(s)}path(t,e){const s=this.gen.path(t,e);return this.draw(s)}}var st={canvas:(t,e)=>new Y(t,e),svg:(t,e)=>new et(t,e),generator:t=>new U(t),newSeed:()=>U.newSeed()};

var __defProp$g = Object.defineProperty;
var __getOwnPropDesc$g = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$g(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
var __decorateClass$g = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$g(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$g(target, key, result);
  return result;
};
var RenderType;
(function(RenderType2) {
  RenderType2["CANVAS"] = "canvas";
  RenderType2["SVG"] = "svg";
})(RenderType || (RenderType = {}));
var AnimationType;
(function(AnimationType2) {
  AnimationType2["ACTIVE"] = "active";
  AnimationType2["ALWAYS"] = "always";
  AnimationType2["NONE"] = "none";
})(AnimationType || (AnimationType = {}));
class HandDrawnBase extends h$1 {
  constructor() {
    super();
    this.renderType = RenderType.SVG;
    this.animationType = AnimationType.ALWAYS;
    this.isFocus = false;
    this.isMouseIn = false;
    this._roughOps = {};
    this.seed = Math.floor(Math.random() * 2 ** 31);
    this.animationIntervalTime = 200;
    this.roughObjArray = [];
    this.drawInterval = null;
    this.resizeTimeout = null;
    this.resizePreTimestamp = 0;
    this.roughPadding = 2;
    this.resizeHandler = this.resizeHandlerTmp.bind(this);
    this.roughOpsOrigin = {};
    this.roughOpsDefault = {
      bowing: 0.5,
      roughness: 0.8,
      stroke: "#363636",
      strokeWidth: 1,
      fillStyle: "zigzag",
      fillWeight: 0.3,
      hachureGap: 4
    };
    this.fontLoadListener();
  }
  get roughOps() {
    return this._roughOps;
  }
  set roughOps(value) {
    const oldValue = this._roughOps;
    this.roughOpsOrigin = __spreadValues$6(__spreadValues$6({}, this.roughOpsDefault), value);
    this._roughOps = JSON.parse(JSON.stringify(this.roughOpsOrigin)) || {};
    this.requestUpdate("roughOps", oldValue);
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.roughInit();
  }
  updated(_changedProperties) {
    super.updated(_changedProperties);
    this.updateAnimationState();
    setTimeout(() => {
      this.roughRender();
    }, 0);
  }
  connectedCallback() {
    this.roughOps = this.roughOps || {};
    super.connectedCallback();
    window.addEventListener("resize", this.resizeHandler);
    this.addEventListener("mouseenter", this.mouseInHandler);
    this.addEventListener("focus", this.focusHandler);
    this.addEventListener("mouseleave", this.mouseOutHandler);
    this.addEventListener("blur", this.blurHandler);
  }
  disconnectedCallback() {
    super.connectedCallback();
    window.removeEventListener("resize", this.resizeHandler);
    this.removeEventListener("mouseenter", this.mouseInHandler);
    this.removeEventListener("focus", this.focusHandler);
    this.removeEventListener("mouseleave", this.mouseOutHandler);
    this.removeEventListener("blur", this.blurHandler);
  }
  fontLoadListener() {
    document.fonts.ready.then(() => {
      this.roughRender();
    });
  }
  resizeHandlerTmp() {
    const now = Date.now();
    if (now - this.resizePreTimestamp > this.animationIntervalTime) {
      this.roughRender();
      this.resizePreTimestamp = now;
    }
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = null;
    }
    this.resizeTimeout = setTimeout(() => {
      this.roughRender();
    }, this.animationIntervalTime);
  }
  mouseInHandler() {
    this.isMouseIn = true;
    this.updateAnimationState();
  }
  mouseOutHandler() {
    this.isMouseIn = false;
    this.updateAnimationState();
  }
  focusHandler() {
    if (!this.isFocus) {
      this.roughOps.stroke = "#000";
      if (this.roughOps.strokeWidth !== void 0) {
        this.roughOps.strokeWidth = (this.roughOpsOrigin.strokeWidth || 0) + 1;
      }
      this.isFocus = true;
      this.updateAnimationState();
    }
  }
  blurHandler() {
    if (this.isFocus) {
      this.isFocus = false;
      this.roughOps.stroke = this.roughOpsOrigin.stroke;
      if (this.roughOps.strokeWidth !== void 0) {
        this.roughOps.strokeWidth = this.roughOpsOrigin.strokeWidth;
      }
      this.roughRender(true);
      this.updateAnimationState();
    }
  }
  updateAnimationState() {
    if (this.animationType === AnimationType.ALWAYS) {
      this.roughOps.seed = 0;
      this.performAnimation(true);
    } else if (this.animationType === AnimationType.ACTIVE) {
      this.roughOps.seed = 0;
      this.performAnimation(this.isFocus || this.isMouseIn);
    } else if (this.animationType === AnimationType.NONE) {
      this.performAnimation(false);
      if (this.roughOps.seed !== this.seed) {
        this.roughOps.seed = this.seed;
        this.roughRender(true);
      } else {
        this.roughRender(this.isFocus || this.isMouseIn);
      }
    }
  }
  performAnimation(isStart = true) {
    if (isStart) {
      if (!this.drawInterval) {
        this.drawInterval = setInterval(() => {
          this.roughRender(true);
        }, this.animationIntervalTime);
      }
    } else {
      if (this.drawInterval) {
        clearInterval(this.drawInterval);
        this.drawInterval = null;
      }
    }
  }
  roughInit() {
    if (this.roughParentElArray && this.roughParentElArray.length > 0) {
      for (let roughParentEl of this.roughParentElArray) {
        switch (this.renderType) {
          case RenderType.CANVAS: {
            const roughDrawEl = document.createElement("canvas");
            roughDrawEl.classList.add("rough-context");
            roughParentEl.append(roughDrawEl);
            const roughDrawInstance = st.canvas(roughDrawEl);
            this.roughObjArray.push({
              roughFirstRendered: false,
              roughParentEl,
              roughEl: roughDrawEl,
              roughInstance: roughDrawInstance,
              roughParentElSizePre: {
                width: roughParentEl.clientWidth || roughParentEl.getBoundingClientRect().width,
                height: roughParentEl.clientHeight || roughParentEl.getBoundingClientRect().height
              }
            });
            break;
          }
          case RenderType.SVG: {
            const roughDrawEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            roughDrawEl.classList.add("rough-context");
            roughParentEl.append(roughDrawEl);
            const roughDrawInstance = st.svg(roughDrawEl);
            this.roughObjArray.push({
              roughFirstRendered: false,
              roughParentEl,
              roughEl: roughDrawEl,
              roughInstance: roughDrawInstance,
              roughParentElSizePre: {
                width: roughParentEl.clientWidth || roughParentEl.getBoundingClientRect().width,
                height: roughParentEl.clientHeight || roughParentEl.getBoundingClientRect().height
              }
            });
            break;
          }
        }
      }
    }
  }
  roughRender(isForce = false) {
    for (let roughObj of this.roughObjArray) {
      const size = {
        width: roughObj.roughParentEl.clientWidth,
        height: roughObj.roughParentEl.clientHeight
      };
      if (isForce || !roughObj.roughFirstRendered || size.width !== roughObj.roughParentElSizePre.width || size.height !== roughObj.roughParentElSizePre.height) {
        this.roughSizeOne(roughObj);
        this.roughDrawOne(roughObj);
        roughObj.roughFirstRendered = true;
      }
      roughObj.roughParentElSizePre.width = size.width;
      roughObj.roughParentElSizePre.height = size.height;
    }
  }
  roughSizeOne(roughObj) {
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    roughObj.roughEl.style.width = size.width + "px";
    roughObj.roughEl.style.height = size.height + "px";
    roughObj.roughEl.setAttribute("width", String(size.width));
    roughObj.roughEl.setAttribute("height", String(size.height));
  }
  roughDrawOne(roughObj, roughOps) {
    var _a;
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    if (roughObj.roughEl instanceof HTMLCanvasElement) {
      (_a = roughObj.roughEl.getContext("2d")) == null ? void 0 : _a.clearRect(0, 0, this.clientWidth, this.clientHeight);
    }
    const nodeArray = [];
    nodeArray.push(roughObj.roughInstance.rectangle(this.roughPadding, this.roughPadding, size.width - this.roughPadding * 2, size.height - this.roughPadding * 2, roughOps || this.roughOps));
    if (roughObj.roughEl instanceof SVGSVGElement) {
      roughObj.roughEl.innerHTML = "";
      for (let node of nodeArray) {
        roughObj.roughEl.appendChild(node);
      }
    }
  }
  static get styles() {
    return i$4`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
      }

      ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
      }

      ::-webkit-scrollbar-track {
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: #999;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #999;
      }

      ::-webkit-scrollbar-thumb:active {
        background: #999;
      }

      ::-webkit-scrollbar-thumb:window-inactive {
        background: #999;
      }

      :host {
        display: inline-block;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        position: relative;

      }

      .slot {
        font: inherit;
      }

      .rough {
        position: relative;
      }

      .rough > .rough-context {
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
      }
    `;
  }
}
__decorateClass$g([
  e$1(".rough")
], HandDrawnBase.prototype, "roughParentElArray", 2);
__decorateClass$g([
  e$2()
], HandDrawnBase.prototype, "renderType", 2);
__decorateClass$g([
  e$2()
], HandDrawnBase.prototype, "animationType", 2);
__decorateClass$g([
  e$2({ state: true })
], HandDrawnBase.prototype, "isFocus", 2);
__decorateClass$g([
  e$2({ state: true })
], HandDrawnBase.prototype, "isMouseIn", 2);
__decorateClass$g([
  e$2({ type: Object })
], HandDrawnBase.prototype, "roughOps", 1);

var __defProp$f = Object.defineProperty;
var __getOwnPropDesc$f = Object.getOwnPropertyDescriptor;
var __decorateClass$f = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$f(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$f(target, key, result);
  return result;
};
let HandDrawnButton = class extends HandDrawnBase {
  constructor() {
    super(...arguments);
    this.disabled = false;
  }
  updateAnimationState() {
    if (!this.disabled) {
      super.updateAnimationState();
    }
  }
  render() {
    return T$1`
        <div class="rough button-wrapper" ?disabled="${this.disabled}">
            <label class="button-label" ?disabled="${this.disabled}">
                <input type="button" class="button" ?disabled="${this.disabled}"/>
                <slot class="slot" @slotchange="${this.roughRender}"></slot>
            </label>
        </div>
    `;
  }
  static get styles() {
    return [
      super.styles,
      i$4`
        .rough-context {
          background-color: white;
        }

        .button {
          opacity: 0;
          position: absolute
        }

        .button-label {
          position: relative;
          display: block;
          cursor: pointer;
          padding: 10px 12px;
        }

        .button-label[disabled] {
          cursor: not-allowed;
        }

        .button-wrapper {
          font: inherit;
          overflow: hidden;
          position: relative;
          border: none;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-align: center;
          outline: none;
          width: 100%;
          height: 100%;
        }

        .button-wrapper:active {
          transform: scale(0.95)
        }

        .button-wrapper[disabled] {
          opacity: 0.5;
          background: rgba(0, 0, 0, 0.08);
          cursor: not-allowed;
        }

        .button-wrapper[disabled]:active {
          transform: scale(1)
        }
      `
    ];
  }
};
__decorateClass$f([
  e$2({ type: Boolean, reflect: true })
], HandDrawnButton.prototype, "disabled", 2);
HandDrawnButton = __decorateClass$f([
  n$1("hand-drawn-button")
], HandDrawnButton);

var __defProp$e = Object.defineProperty;
var __defProps$5 = Object.defineProperties;
var __getOwnPropDesc$e = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
var __decorateClass$e = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$e(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$e(target, key, result);
  return result;
};
var HandDrawnIconType;
(function(HandDrawnIconType2) {
  HandDrawnIconType2["LOADING"] = "loading";
  HandDrawnIconType2["CROSS"] = "cross";
  HandDrawnIconType2["TICK"] = "tick";
})(HandDrawnIconType || (HandDrawnIconType = {}));
let HandDrawnIcon = class extends HandDrawnBase {
  constructor() {
    super(...arguments);
    this.roughOpsDefault = {
      roughness: 0.5
    };
  }
  firstUpdated(_changedProperties) {
    var _a;
    switch (this.type) {
      case HandDrawnIconType.LOADING:
        (_a = this.icon) == null ? void 0 : _a.classList.add("rotate");
        break;
      case HandDrawnIconType.CROSS:
      case HandDrawnIconType.TICK:
        break;
    }
    super.firstUpdated(_changedProperties);
  }
  roughDrawOne(roughObj) {
    var _a;
    if (roughObj.roughEl instanceof HTMLCanvasElement) {
      (_a = roughObj.roughEl.getContext("2d")) == null ? void 0 : _a.clearRect(0, 0, this.clientWidth, this.clientHeight);
    }
    let nodeArray;
    switch (this.type) {
      case HandDrawnIconType.LOADING:
        nodeArray = this.iconLoading(roughObj);
        break;
      case HandDrawnIconType.CROSS:
        nodeArray = this.iconCross(roughObj);
        break;
      case HandDrawnIconType.TICK:
        nodeArray = this.iconTick(roughObj);
        break;
    }
    if (roughObj.roughEl instanceof SVGSVGElement) {
      roughObj.roughEl.innerHTML = "";
      for (let node of nodeArray || []) {
        roughObj.roughEl.appendChild(node);
      }
    }
  }
  iconCross(roughObj) {
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    const nodeArray = [];
    const arcObj = {
      x1: 0,
      y1: 0,
      x2: size.width,
      y2: size.height,
      x3: size.width / 10,
      y3: size.height / 10 * 9,
      x4: size.width / 10 * 9,
      y4: size.height / 10,
      roughOps: __spreadProps$5(__spreadValues$5({}, this.roughOps), {
        strokeWidth: this.roughOps.strokeWidth === void 0 ? 2 : this.roughOps.strokeWidth
      })
    };
    nodeArray.push(roughObj.roughInstance.line(arcObj.x1, arcObj.y1, arcObj.x2, arcObj.y2, arcObj.roughOps));
    nodeArray.push(roughObj.roughInstance.line(arcObj.x3, arcObj.y3, arcObj.x4, arcObj.y4, arcObj.roughOps));
    return nodeArray;
  }
  iconTick(roughObj) {
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    const nodeArray = [];
    const arcObj = {
      x1: size.width / 10 / 2,
      y1: size.height / 10 * 4,
      x2: size.width / 10 * 4,
      y2: size.height / 10 * 9,
      x3: size.width / 10 * 9.5,
      y3: 0,
      roughOps: __spreadProps$5(__spreadValues$5({}, this.roughOps), {
        strokeWidth: this.roughOps.strokeWidth === void 0 ? 2 : this.roughOps.strokeWidth
      })
    };
    nodeArray.push(roughObj.roughInstance.line(arcObj.x1, arcObj.y1, arcObj.x2, arcObj.y2, arcObj.roughOps));
    nodeArray.push(roughObj.roughInstance.line(arcObj.x2, arcObj.y2, arcObj.x3, arcObj.y3, arcObj.roughOps));
    return nodeArray;
  }
  iconLoading(roughObj) {
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    const nodeArray = [];
    const max = 9;
    for (let i = 1; i <= max - 1; i++) {
      let piece = i % 4;
      const arcObj = {
        x: size.width / 2,
        y: size.height / 2,
        width: size.width / max * i,
        height: size.height / max * i,
        start: Math.PI / 2 * piece,
        stop: Math.PI / 2 * (piece + 1),
        closed: false,
        roughOps: this.roughOps
      };
      switch (piece) {
        case 1:
          arcObj.y = arcObj.y - size.height / max * piece / 2;
          break;
        case 2:
          arcObj.y = arcObj.y - size.height / max * (piece - 1) / 2;
          arcObj.x = arcObj.x + size.width / max * (piece - 1) / 2;
          break;
        case 3:
          arcObj.x = arcObj.x + size.width / max * (piece - 2) / 2;
          break;
      }
      nodeArray.push(roughObj.roughInstance.arc(arcObj.x, arcObj.y, arcObj.width, arcObj.height, arcObj.start, arcObj.stop, arcObj.closed, arcObj.roughOps));
    }
    return nodeArray;
  }
  render() {
    return T$1`
        <div id="icon" class="icon rough"></div>
    `;
  }
  static get styles() {
    return [
      super.styles,
      i$4`
        :host {
          position: relative;
          width: 1em;
          height: 1em;
          overflow: hidden;
          vertical-align: -10%;
          line-height: 1em;
        }

        .rough > .rough-context {
          z-index: 0;
        }

        .icon {
          display: inline-block;
          overflow: hidden;
          position: relative;
          border: none;
          background: none;
          height: 100%;
          width: 100%;
        }

        .rotate {
          animation: rotate 2.5s linear infinite;
          -webkit-animation: rotate 2.5s linear infinite;
        }

        @-webkit-keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
      `
    ];
  }
};
__decorateClass$e([
  o$1("#icon")
], HandDrawnIcon.prototype, "icon", 2);
__decorateClass$e([
  e$2({ type: String })
], HandDrawnIcon.prototype, "type", 2);
HandDrawnIcon = __decorateClass$e([
  n$1("hand-drawn-icon")
], HandDrawnIcon);

var __defProp$d = Object.defineProperty;
var __getOwnPropDesc$d = Object.getOwnPropertyDescriptor;
var __decorateClass$d = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$d(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$d(target, key, result);
  return result;
};
let HandDrawnPad = class extends HandDrawnBase {
  constructor() {
    super(...arguments);
    this.bodyStyle = "";
    this.noBorder = false;
    this.realTimeResize = false;
    this.textareaResizeInterval = null;
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
  }
  updated(_changedProperties) {
    super.updated(_changedProperties);
    if (this.animationType === AnimationType.ACTIVE) {
      this.animationType = AnimationType.NONE;
    }
    this.updateAnimationState();
  }
  render() {
    return T$1`
        <div class="pad ${this.noBorder ? "" : "rough"}">
            <div class="pad-content">
                <slot @slotchange="${this.roughRender}"></slot>
            </div>
        </div>
    `;
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.textareaResizeInterval) {
      clearInterval(this.textareaResizeInterval);
      this.textareaResizeInterval = null;
    }
    if (this.realTimeResize) {
      this.textareaResizeInterval = setInterval(() => {
        this.resizeHandler();
      }, this.animationIntervalTime);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.textareaResizeInterval) {
      clearInterval(this.textareaResizeInterval);
      this.textareaResizeInterval = null;
    }
  }
  static get styles() {
    return [
      super.styles,
      i$4`
        .pad {
          padding: 3px;
          background: none;
          overflow: hidden; 
          border: none;
          outline: none;
          position: inherit;
          top: inherit;
          bottom: inherit;
          left: inherit;
          right: inherit;
        }

        .pad-content {
          position: relative;
          overflow: auto;
          height: 100%;
          z-index: 1000;
        }
      `
    ];
  }
};
__decorateClass$d([
  e$2()
], HandDrawnPad.prototype, "bodyStyle", 2);
__decorateClass$d([
  e$2({ type: Boolean })
], HandDrawnPad.prototype, "noBorder", 2);
__decorateClass$d([
  e$2({ type: Boolean })
], HandDrawnPad.prototype, "realTimeResize", 2);
HandDrawnPad = __decorateClass$d([
  n$1("hand-drawn-pad")
], HandDrawnPad);

var __defProp$c = Object.defineProperty;
var __getOwnPropDesc$c = Object.getOwnPropertyDescriptor;
var __decorateClass$c = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$c(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$c(target, key, result);
  return result;
};
let HandDrawnInput = class extends HandDrawnBase {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.autocomplete = "";
    this.autofocus = false;
    this.placeholder = "";
    this.required = false;
    this.readonly = false;
    this.type = "text";
    this.value = "";
  }
  updateAnimationState() {
    if (!this.disabled) {
      super.updateAnimationState();
    }
  }
  render() {
    return T$1`
        <div class="rough input-wrapper">
            <input class="input"
                   autocomplete="${this.autocomplete}"
                   ?autofocus="${this.autofocus}"
                   ?disabled="${this.disabled}"
                   max="${this.max}"
                   maxlength="${this.maxlength}"
                   min="${this.min}"
                   name="${this.name}"
                   placeholder="${this.placeholder}"
                   ?required="${this.required}"
                   ?readonly="${this.readonly}"
                   type="${this.type}"
                   .value="${this.value}"
                   @input="${this.inputHandler}"
                   @change="${this.changeHandler}"
            />
        </div>
    `;
  }
  inputHandler(e) {
    var _a;
    this.value = ((_a = this.inputEl) == null ? void 0 : _a.value) || null;
    this.emitEvent(e);
  }
  changeHandler(e) {
    var _a;
    this.value = ((_a = this.inputEl) == null ? void 0 : _a.value) || null;
    this.emitEvent(e);
  }
  emitEvent(event) {
    this.dispatchEvent(new CustomEvent(event.type, {
      composed: true,
      bubbles: true,
      detail: event
    }));
  }
  static get styles() {
    return [
      super.styles,
      i$4`
        .input-wrapper {
          overflow: hidden;
          padding: 10px;
        }

        .input {
          font: inherit;
          overflow: hidden;
          border: none;
          background: none;
          outline: none;
          width: 100%;
        }

        .input[disabled] {
          opacity: 0.5;
          background: rgba(0, 0, 0, 0.08);
          cursor: not-allowed;
        }
      `
    ];
  }
};
__decorateClass$c([
  e$2({ type: Boolean, reflect: true })
], HandDrawnInput.prototype, "disabled", 2);
__decorateClass$c([
  e$2({ type: String })
], HandDrawnInput.prototype, "autocomplete", 2);
__decorateClass$c([
  e$2({ type: Boolean })
], HandDrawnInput.prototype, "autofocus", 2);
__decorateClass$c([
  e$2({ type: Number })
], HandDrawnInput.prototype, "max", 2);
__decorateClass$c([
  e$2({ type: Number })
], HandDrawnInput.prototype, "maxlength", 2);
__decorateClass$c([
  e$2({ type: Number })
], HandDrawnInput.prototype, "min", 2);
__decorateClass$c([
  e$2({ type: String })
], HandDrawnInput.prototype, "name", 2);
__decorateClass$c([
  e$2({ type: String })
], HandDrawnInput.prototype, "placeholder", 2);
__decorateClass$c([
  e$2({ type: Boolean })
], HandDrawnInput.prototype, "required", 2);
__decorateClass$c([
  e$2({ type: Boolean })
], HandDrawnInput.prototype, "readonly", 2);
__decorateClass$c([
  e$2({ type: String })
], HandDrawnInput.prototype, "type", 2);
__decorateClass$c([
  e$2({ type: String })
], HandDrawnInput.prototype, "value", 2);
__decorateClass$c([
  o$1("input")
], HandDrawnInput.prototype, "inputEl", 2);
HandDrawnInput = __decorateClass$c([
  n$1("hand-drawn-input")
], HandDrawnInput);

var __defProp$b = Object.defineProperty;
var __getOwnPropDesc$b = Object.getOwnPropertyDescriptor;
var __decorateClass$b = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$b(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$b(target, key, result);
  return result;
};
let HandDrawnTextarea = class extends HandDrawnBase {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.value = "";
    this.autofocus = false;
    this.autoHeight = false;
    this.placeholder = "";
    this.required = false;
    this.readonly = false;
    this.resize = "both";
    this.row = 3;
    this.isMouseDowningInThis = false;
    this.textareaResizeHandler = this.textareaResizeHandlerTmp.bind(this);
  }
  updateAnimationState() {
    if (!this.disabled) {
      super.updateAnimationState();
    }
  }
  render() {
    return T$1`
        <div class="rough textarea-wrapper" ?disabled="${this.disabled}">
            <textarea class="textarea"
                      style="resize:${this.disabled || this.autoHeight ? "none !important" : this.resize}"
                      ?autofocus="${this.autofocus}"
                      ?disabled="${this.disabled}"
                      maxlength="${this.maxlength}"
                      name="${this.name}"
                      placeholder="${this.placeholder}"
                      ?readonly="${this.readonly}"
                      ?required="${this.required}"
                      row="${this.row}"
                      .value="${this.value}"
                      @input="${this.inputHandler}"
                      @change="${this.changeHandler}"
            />
        </div>
    `;
  }
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("mouseup", this.textareaResizeHandler);
    this.addEventListener("mousedown", this.mouseDownHandler);
    window.addEventListener("touchend", this.textareaResizeHandler);
    this.addEventListener("touchstart", this.mouseDownHandler);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("mouseup", this.textareaResizeHandler);
    this.removeEventListener("mousedown", this.mouseDownHandler);
    window.removeEventListener("touchend", this.textareaResizeHandler);
    this.removeEventListener("touchstart", this.mouseDownHandler);
  }
  mouseDownHandler() {
    this.isMouseDowningInThis = true;
  }
  textareaResizeHandlerTmp() {
    if (!this.disabled) {
      if (this.isMouseDowningInThis) {
        this.roughRender(true);
      }
    }
    this.isMouseDowningInThis = false;
  }
  inputHandler(e) {
    var _a;
    this.value = ((_a = this.textareaEl) == null ? void 0 : _a.value) || null;
    this.setAutoHeight();
    this.emitEvent(e);
  }
  changeHandler(e) {
    var _a;
    this.value = ((_a = this.textareaEl) == null ? void 0 : _a.value) || null;
    this.emitEvent(e);
  }
  setAutoHeight() {
    if (this.autoHeight) {
      if (this.textareaEl) {
        this.textareaEl.style.height = "auto";
        this.textareaEl.scrollTop = 0;
        this.textareaEl.style.height = this.textareaEl.scrollHeight + "px";
        this.roughRender();
      }
    }
  }
  emitEvent(event) {
    this.dispatchEvent(new CustomEvent(event.type, {
      composed: true,
      bubbles: true,
      detail: event
    }));
  }
  static get styles() {
    return [
      super.styles,
      i$4`
        .textarea-wrapper {
          overflow: hidden;
          padding: 10px;
        }

        .textarea-wrapper[disabled] {
          opacity: 0.5;
          background: rgba(0, 0, 0, 0.08);
          cursor: not-allowed;
        }

        .textarea {
          font: inherit;
          word-break: break-all;
          word-wrap: break-word;
          border: none;
          background: none;
          outline: none;
          width: 100%;
          height: 100%;
        }

        .textarea[disabled] {
          cursor: not-allowed;
        }
      `
    ];
  }
};
__decorateClass$b([
  e$2({ type: Boolean, reflect: true })
], HandDrawnTextarea.prototype, "disabled", 2);
__decorateClass$b([
  e$2({ type: String })
], HandDrawnTextarea.prototype, "value", 2);
__decorateClass$b([
  e$2({ type: Boolean })
], HandDrawnTextarea.prototype, "autofocus", 2);
__decorateClass$b([
  e$2({ type: Boolean })
], HandDrawnTextarea.prototype, "autoHeight", 2);
__decorateClass$b([
  e$2({ type: String })
], HandDrawnTextarea.prototype, "placeholder", 2);
__decorateClass$b([
  e$2({ type: Number })
], HandDrawnTextarea.prototype, "maxlength", 2);
__decorateClass$b([
  e$2({ type: String })
], HandDrawnTextarea.prototype, "name", 2);
__decorateClass$b([
  e$2({ type: Boolean })
], HandDrawnTextarea.prototype, "required", 2);
__decorateClass$b([
  e$2({ type: Boolean })
], HandDrawnTextarea.prototype, "readonly", 2);
__decorateClass$b([
  e$2({ type: String })
], HandDrawnTextarea.prototype, "resize", 2);
__decorateClass$b([
  e$2({ type: Number })
], HandDrawnTextarea.prototype, "row", 2);
__decorateClass$b([
  o$1("textarea")
], HandDrawnTextarea.prototype, "textareaEl", 2);
HandDrawnTextarea = __decorateClass$b([
  n$1("hand-drawn-textarea")
], HandDrawnTextarea);

var __defProp$a = Object.defineProperty;
var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
var __decorateClass$a = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$a(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$a(target, key, result);
  return result;
};
let HandDrawnCheckbox = class extends HandDrawnBase {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.checked = false;
    this.value = null;
  }
  render() {
    return T$1`
            <label class="checkbox" ?disabled="${this.disabled}">
                <input class="checkbox-input" @change="${this.checkSwitchHandler}" type="checkbox" ?disabled="${this.disabled}" .checked="${this.checked}" value="${this.value}">
                <div class="checkbox-wrapper rough">
                    <div id="tick" style=${this.checked ? "display:inline-block" : "display:none"} class="checkbox-tick rough"></div>
                </div><!--
             --><slot class="slot" @slotchange="${this.roughRender}"></slot>
            </label>
        `;
  }
  checkSwitchHandler() {
    this.checked = this.input.checked;
    this.dispatchEvent(new CustomEvent("change", {
      composed: true,
      bubbles: true,
      detail: {
        value: this.value,
        checked: this.checked
      }
    }));
  }
  updateAnimationState() {
    if (!this.disabled) {
      super.updateAnimationState();
    }
  }
  roughDrawOne(roughObj) {
    var _a;
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    if (roughObj.roughParentEl.id === "tick") {
      if (roughObj.roughEl instanceof HTMLCanvasElement) {
        (_a = roughObj.roughEl.getContext("2d")) == null ? void 0 : _a.clearRect(0, 0, this.clientWidth, this.clientHeight);
      }
      const nodeArray = [];
      nodeArray.push(roughObj.roughInstance.line(size.width / 5, size.height / 3, size.width / 5 * 2, size.height / 5 * 4, this.roughOps));
      nodeArray.push(roughObj.roughInstance.line(size.width / 5 * 2, size.height / 5 * 4, size.width, 0, this.roughOps));
      if (roughObj.roughEl instanceof SVGSVGElement) {
        roughObj.roughEl.innerHTML = "";
        for (let node of nodeArray) {
          roughObj.roughEl.appendChild(node);
        }
      }
    } else {
      super.roughDrawOne(roughObj);
    }
  }
  static get styles() {
    return [
      super.styles,
      i$4`
              .slot {
                display: inline-block;
                vertical-align: middle;
              }

              .checkbox {
                overflow: hidden;
                position: relative;
                border: none;
                background: none;
                cursor: pointer;
                outline: none;
                height: 100%;
              }

              .checkbox-input {
                width: 0;
                height: 0;
                opacity: 0;
                position: absolute;
              }

              .checkbox-wrapper {
                display: inline-block;
                overflow: hidden;
                position: relative;
                border: none;
                background: none;
                outline: none;
                width: 1em;
                height: 1em;
                line-height: 1em;
                vertical-align: middle;
              }

              .checkbox-tick {
                height: 100%;
                width: 100%;
                position: relative;
              }

              .checkbox[disabled] {
                opacity: 0.5;
                cursor: not-allowed;
              }
            `
    ];
  }
};
__decorateClass$a([
  e$2({ type: Boolean, reflect: true })
], HandDrawnCheckbox.prototype, "disabled", 2);
__decorateClass$a([
  e$2({ type: Boolean })
], HandDrawnCheckbox.prototype, "checked", 2);
__decorateClass$a([
  e$2({ type: String })
], HandDrawnCheckbox.prototype, "value", 2);
__decorateClass$a([
  o$1("input")
], HandDrawnCheckbox.prototype, "input", 2);
HandDrawnCheckbox = __decorateClass$a([
  n$1("hand-drawn-checkbox")
], HandDrawnCheckbox);

var __defProp$9 = Object.defineProperty;
var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
var __decorateClass$9 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$9(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$9(target, key, result);
  return result;
};
let HandDrawnCheckboxGroup = class extends HandDrawnBase {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.checkedValues = [];
  }
  render() {
    return T$1`
        <slot id="slot" .class="slot"></slot>
    `;
  }
  firstUpdated(_changedProperties) {
    var _a;
    super.firstUpdated(_changedProperties);
    const els = (((_a = this.slotEl) == null ? void 0 : _a.assignedNodes()) || []).filter((e) => e.tagName === "HAND-DRAWN-CHECKBOX");
    els.forEach((checkboxEl) => {
      checkboxEl.disabled = this.disabled || checkboxEl.disabled;
      checkboxEl.checked = this.checkedValues.indexOf(checkboxEl.value) >= 0;
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("change", this.change);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("change", this.change);
  }
  change() {
    var _a;
    const els = ((_a = this.slotEl) == null ? void 0 : _a.assignedNodes()) || [];
    this.checkedValues = els.filter((el) => el.tagName === "HAND-DRAWN-CHECKBOX" && el.checked).map((el) => el.value);
  }
  static get styles() {
    return [
      super.styles,
      i$4`
        ::slotted(*) {
          margin: 0 1em 0 0
        }
      `
    ];
  }
};
__decorateClass$9([
  e$2({ type: Boolean, reflect: true })
], HandDrawnCheckboxGroup.prototype, "disabled", 2);
__decorateClass$9([
  o$1("slot")
], HandDrawnCheckboxGroup.prototype, "slotEl", 2);
__decorateClass$9([
  e$2({ type: Array })
], HandDrawnCheckboxGroup.prototype, "checkedValues", 2);
HandDrawnCheckboxGroup = __decorateClass$9([
  n$1("hand-drawn-checkbox-group")
], HandDrawnCheckboxGroup);

var __defProp$8 = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
var __decorateClass$8 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$8(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$8(target, key, result);
  return result;
};
let HandDrawnRadio = class extends HandDrawnBase {
  constructor() {
    super();
    this.disabled = false;
    this.checked = false;
    this.value = null;
    this.attachShadow({ mode: "open" });
  }
  render() {
    return T$1`
            <label class="radio" ?disabled="${this.disabled}">
                <!-- note: using type="checkbox" to focus on unchecked node by Tab   -->
                <input class="radio-input" @change="${this.checkSwitchHandler}" type="checkbox" ?disabled="${this.disabled}" .checked="${this.checked}" value="${this.value}">
                <div id="dotWrapper" class="radio-wrapper rough">
                    <div id="dot" style=${this.checked ? "display:inline-block" : "display:none"} class="radio-dot rough"></div>
                </div><!--
             --><slot class="slot" @slotchange="${this.roughRender}"></slot>
            </label>
        `;
  }
  createRenderRoot() {
    return super.createRenderRoot();
  }
  checkSwitchHandler() {
    this.checked = true;
    this.dispatchEvent(new CustomEvent("change", {
      composed: true,
      bubbles: true,
      detail: {
        value: this.value,
        checked: this.checked
      }
    }));
  }
  updateAnimationState() {
    if (!this.disabled) {
      super.updateAnimationState();
    }
  }
  roughDrawOne(roughObj) {
    var _a, _b;
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    if (roughObj.roughParentEl.id === "dot") {
      if (roughObj.roughEl instanceof HTMLCanvasElement) {
        (_a = roughObj.roughEl.getContext("2d")) == null ? void 0 : _a.clearRect(0, 0, this.clientWidth, this.clientHeight);
      }
      const nodeArray = [];
      nodeArray.push(roughObj.roughInstance.circle(size.width / 2, size.height / 2, (size.width - this.roughPadding * 1.5) / 2, __spreadProps$4(__spreadValues$4({}, this.roughOps), {
        roughness: (this.roughOps.roughness || 0) / 3,
        bowing: (this.roughOps.bowing || 0) / 3,
        fill: this.roughOps.stroke,
        strokeWidth: this.roughOpsOrigin.strokeWidth,
        fillStyle: "solid"
      })));
      if (roughObj.roughEl instanceof SVGSVGElement) {
        roughObj.roughEl.innerHTML = "";
        for (let node of nodeArray) {
          roughObj.roughEl.appendChild(node);
        }
      }
    } else if (roughObj.roughParentEl.id === "dotWrapper") {
      if (roughObj.roughEl instanceof HTMLCanvasElement) {
        (_b = roughObj.roughEl.getContext("2d")) == null ? void 0 : _b.clearRect(0, 0, this.clientWidth, this.clientHeight);
      }
      const nodeArray = [];
      nodeArray.push(roughObj.roughInstance.circle(size.width / 2, size.height / 2, size.width - this.roughPadding * 1.2, __spreadProps$4(__spreadValues$4({}, this.roughOps), {
        roughness: (this.roughOps.roughness || 0) * 2 / 3,
        bowing: (this.roughOps.bowing || 0) * 2 / 3
      })));
      if (roughObj.roughEl instanceof SVGSVGElement) {
        roughObj.roughEl.innerHTML = "";
        for (let node of nodeArray) {
          roughObj.roughEl.appendChild(node);
        }
      }
    } else {
      super.roughDrawOne(roughObj);
    }
  }
  static get styles() {
    return [
      super.styles,
      i$4`
              .slot {
                display: inline-block;
                vertical-align: middle;
              }

              .radio {
                overflow: hidden;
                position: relative;
                border: none;
                background: none;
                cursor: pointer;
                outline: none;
                height: 100%;
              }

              .radio-input {
                width: 0;
                height: 0;
                opacity: 0;
                position: absolute;
              }

              .radio-wrapper {
                display: inline-block;
                overflow: hidden;
                position: relative;
                border: none;
                background: none;
                outline: none;
                width: 1em;
                height: 1em;
                line-height: 1em;
                vertical-align: middle;
              }

              .radio-dot {
                height: 100%;
                width: 100%;
                position: relative;
              }

              .radio[disabled] {
                opacity: 0.5;
                cursor: not-allowed;
              }
            `
    ];
  }
};
__decorateClass$8([
  e$2({ type: Boolean, reflect: true })
], HandDrawnRadio.prototype, "disabled", 2);
__decorateClass$8([
  e$2({ type: Boolean })
], HandDrawnRadio.prototype, "checked", 2);
__decorateClass$8([
  e$2({ type: String })
], HandDrawnRadio.prototype, "value", 2);
HandDrawnRadio = __decorateClass$8([
  n$1("hand-drawn-radio")
], HandDrawnRadio);

var __defProp$7 = Object.defineProperty;
var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
var __decorateClass$7 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$7(target, key, result);
  return result;
};
let HandDrawnRadioGroup = class extends HandDrawnBase {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.checkedValue = null;
  }
  render() {
    return T$1`
        <slot id="slot" .class="slot"></slot>
    `;
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.setSubRadioState();
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("change", this.change);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("change", this.change);
  }
  change(e) {
    if (e instanceof CustomEvent) {
      this.checkedValue = e.detail.value;
    }
    this.setSubRadioState();
    this.requestUpdate();
  }
  setSubRadioState() {
    var _a;
    const els = (((_a = this.slotEl) == null ? void 0 : _a.assignedNodes()) || []).filter((e) => e.tagName === "HAND-DRAWN-RADIO");
    els.forEach((radioEl) => {
      radioEl.disabled = this.disabled || radioEl.disabled;
      radioEl.checked = this.checkedValue === radioEl.value;
    });
  }
  static get styles() {
    return [
      super.styles,
      i$4`
        ::slotted(*) {
          margin: 0 1em 0 0
        }
      `
    ];
  }
};
__decorateClass$7([
  e$2({ type: Boolean, reflect: true })
], HandDrawnRadioGroup.prototype, "disabled", 2);
__decorateClass$7([
  o$1("slot")
], HandDrawnRadioGroup.prototype, "slotEl", 2);
__decorateClass$7([
  e$2({ type: String })
], HandDrawnRadioGroup.prototype, "checkedValue", 2);
HandDrawnRadioGroup = __decorateClass$7([
  n$1("hand-drawn-radio-group")
], HandDrawnRadioGroup);

var __defProp$6 = Object.defineProperty;
var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
var __decorateClass$6 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$6(target, key, result);
  return result;
};
let HandDrawnDialog = class extends HandDrawnBase {
  constructor() {
    super(...arguments);
    this.visible = false;
    this.appendToBody = false;
    this.closeOnClickMask = false;
    this.keyDownHandler = this.keyDownHandlerTmp.bind(this);
    this.isAppendToBodyDone = false;
  }
  render() {
    if (this.visible) {
      return T$1`
          <div class="dialog-mask" @click="${this.maskClickHandler}"></div>
          <div class="dialog">
              <div class="dialog-close" @click="${this.closeClickHandler}">
                  <hand-drawn-icon class="dialog-close-icon" renderType="${this.renderType}" roughOps="${this.roughOps}" animationType="${this.animationType}" type="cross">
              </div>
              <hand-drawn-pad renderType="${this.renderType}" roughOps="${this.roughOps}" animationType="${this.animationType}" class="dialog-pad" realTimeResize>
                  <slot class="slot" @slotchange="${this.roughRender}"></slot>
              </hand-drawn-pad>
          </div>
      `;
    } else {
      return T$1``;
    }
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    if (this.appendToBody) {
      document.body.insertBefore(this, document.body.childNodes[0]);
      this.isAppendToBodyDone = true;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("keydown", this.keyDownHandler);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("keydown", this.keyDownHandler);
    this.visible = false;
    if (this.appendToBody && this.isAppendToBodyDone && this && this.parentNode) {
      this.parentNode.removeChild(this);
    }
  }
  keyDownHandlerTmp(e) {
    if (e.code === "Escape") {
      this.visible = false;
    }
  }
  closeClickHandler() {
    this.visible = false;
  }
  maskClickHandler() {
    if (this.closeOnClickMask) {
      this.visible = false;
    }
  }
  static get styles() {
    return [
      super.styles,
      i$4`
        :host {
          position: absolute;
        }

        .dialog-mask {
          position: fixed;
          background-color: rgba(255, 255, 255, 0.75);
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10000;
        }

        .dialog {
          position: fixed;
          top: 15%;
          left: 50%;
          width: 65%;
          min-width: 300px;
          height: 60%;
          overflow: visible;
          background-color: white;
          transform: translate(-50%, 0);
          box-shadow: 2px 2px 10px #999999;
          z-index: 10001;
        }

        .dialog-pad {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          overflow: auto;
        }

        .dialog-close {
          display: inline-block;
          position: absolute;
          top: 0;
          right: -20px;
          z-index: 10002;
          cursor: pointer;
        }

        .dialog-close-icon {
          pointer-events: none;
        }
      `
    ];
  }
};
__decorateClass$6([
  e$2({ type: Boolean })
], HandDrawnDialog.prototype, "visible", 2);
__decorateClass$6([
  e$2({ type: Boolean })
], HandDrawnDialog.prototype, "appendToBody", 2);
__decorateClass$6([
  e$2({ type: Boolean })
], HandDrawnDialog.prototype, "closeOnClickMask", 2);
HandDrawnDialog = __decorateClass$6([
  n$1("hand-drawn-dialog")
], HandDrawnDialog);

var __defProp$5 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$5(target, key, result);
  return result;
};
let HandDrawnSwitch = class extends HandDrawnBase {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.checked = false;
    this.leftBgFill = "";
    this.rightBgFill = "";
    this.leftToggleFill = "";
    this.rightToggleFill = "";
  }
  render() {
    return T$1`
        <slot name="left" class="slot" @slotchange="${this.roughRender}" @click="${this.leftClickHandler}"></slot><!--
     --><label class="switch" ?disabled="${this.disabled}"><!--
         --><input class="switch-input" @change="${this.checkSwitchHandler}" type="checkbox" ?disabled="${this.disabled}" .checked="${this.checked}"><!--
         --><div id="switchWrapper" class="switch-wrapper rough ${this.checked ? "switch-wrapper--active" : ""}">
                <div id="switchToggle" class="switch-toggle rough ${this.checked ? "switch-toggle--active" : ""}"></div>
            </div><!--
     --></label><!--
     --><slot name="right" class="slot" @slotchange="${this.roughRender}" @click="${this.rightClickHandler}"></slot>
    `;
  }
  leftClickHandler() {
    this.checked = false;
  }
  rightClickHandler() {
    this.checked = true;
  }
  checkSwitchHandler() {
    this.checked = this.input.checked;
    this.dispatchEvent(new CustomEvent("change", {
      composed: true,
      bubbles: true,
      detail: {
        checked: this.checked
      }
    }));
  }
  updateAnimationState() {
    if (!this.disabled) {
      super.updateAnimationState();
    }
  }
  roughDrawOne(roughObj) {
    var _a, _b;
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    if (roughObj.roughParentEl.id === "switchWrapper") {
      if (roughObj.roughEl instanceof HTMLCanvasElement) {
        (_a = roughObj.roughEl.getContext("2d")) == null ? void 0 : _a.clearRect(0, 0, this.clientWidth, this.clientHeight);
      }
      const nodeArray = [];
      nodeArray.push(roughObj.roughInstance.rectangle(this.roughPadding, this.roughPadding, size.width - this.roughPadding * 2, size.height - this.roughPadding * 2, __spreadProps$3(__spreadValues$3({ fill: this.checked ? this.rightBgFill : this.leftBgFill }, this.roughOps), { strokeWidth: 1, stroke: "transparent" })));
      nodeArray.push(roughObj.roughInstance.line(size.height / 5 * 2 + this.roughPadding, this.roughPadding, size.width - (size.height / 5 * 2 + this.roughPadding), this.roughPadding, __spreadProps$3(__spreadValues$3({}, this.roughOps), { strokeWidth: 1 })));
      nodeArray.push(roughObj.roughInstance.line(size.height / 5 * 2 + this.roughPadding, size.height - this.roughPadding, size.width - (size.height / 5 * 2 + this.roughPadding), size.height - this.roughPadding, __spreadProps$3(__spreadValues$3({}, this.roughOps), { strokeWidth: 1 })));
      nodeArray.push(roughObj.roughInstance.arc(size.height / 5 * 2 + this.roughPadding, size.height / 2, size.height / 5 * 4 - this.roughPadding * 2, size.height / 5 * 4, Math.PI / 2, Math.PI / 2 * 3, false, __spreadProps$3(__spreadValues$3({}, this.roughOps), { strokeWidth: 1 })));
      nodeArray.push(roughObj.roughInstance.arc(size.width - (size.height / 5 * 2 + this.roughPadding), size.height / 2, size.height / 5 * 4, size.height - this.roughPadding * 2, Math.PI / 2 * 3, Math.PI / 2 * 5, false, __spreadProps$3(__spreadValues$3({}, this.roughOps), { strokeWidth: 1 })));
      if (roughObj.roughEl instanceof SVGSVGElement) {
        roughObj.roughEl.innerHTML = "";
        for (let node of nodeArray) {
          roughObj.roughEl.appendChild(node);
        }
      }
    } else if (roughObj.roughParentEl.id === "switchToggle") {
      if (roughObj.roughEl instanceof HTMLCanvasElement) {
        (_b = roughObj.roughEl.getContext("2d")) == null ? void 0 : _b.clearRect(0, 0, this.clientWidth, this.clientHeight);
      }
      const nodeArray = [];
      nodeArray.push(roughObj.roughInstance.circle(size.height / 5 * 2 + this.roughPadding, size.height / 2, size.height - this.roughPadding * 2, __spreadValues$3({ fill: (this.checked ? this.rightToggleFill : this.leftToggleFill) || this.roughOps.stroke, fillStyle: "zigzag" }, this.roughOps)));
      if (roughObj.roughEl instanceof SVGSVGElement) {
        roughObj.roughEl.innerHTML = "";
        for (let node of nodeArray) {
          roughObj.roughEl.appendChild(node);
        }
      }
    } else {
      super.roughDrawOne(roughObj);
    }
  }
  static get styles() {
    return [
      super.styles,
      i$4`
        .slot {
          cursor: pointer;
          display: inline-block;
          vertical-align: middle;
        }

        .switch {
          overflow: hidden;
          position: relative;
          border: none;
          background: none;
          cursor: pointer;
          outline: none;
          height: 100%;
        }

        .switch-slot {
          cursor: pointer;
        }

        .switch-input {
          width: 0;
          height: 0;
          opacity: 0;
          position: absolute;
        }

        .switch-wrapper {
          display: inline-block;
          border-radius: 1.5em;
          overflow: hidden;
          position: relative;
          border: none;
          background: none;
          outline: none;
          vertical-align: middle;
          width: 3.5em;
          height: 1.5em;
        }

        .switch-toggle {
          height: 1.5em;
          width: 1.5em;
          position: absolute;
          top: 0;
          left: 0;
          transition: left 0.2s ease-out;
        }

        .switch-toggle .rough-context {
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          z-index: 0;
        }

        .switch-toggle--active {
          left: 2em;
        }

        .switch[disabled] {
          opacity: 0.5;
          background: rgba(0, 0, 0, 0.03);
          cursor: not-allowed;
        }
      `
    ];
  }
};
__decorateClass$5([
  e$2({ type: Boolean, reflect: true })
], HandDrawnSwitch.prototype, "disabled", 2);
__decorateClass$5([
  e$2({ type: Boolean })
], HandDrawnSwitch.prototype, "checked", 2);
__decorateClass$5([
  e$2({ type: String })
], HandDrawnSwitch.prototype, "leftBgFill", 2);
__decorateClass$5([
  e$2({ type: String })
], HandDrawnSwitch.prototype, "rightBgFill", 2);
__decorateClass$5([
  e$2({ type: String })
], HandDrawnSwitch.prototype, "leftToggleFill", 2);
__decorateClass$5([
  e$2({ type: String })
], HandDrawnSwitch.prototype, "rightToggleFill", 2);
__decorateClass$5([
  o$1("input")
], HandDrawnSwitch.prototype, "input", 2);
HandDrawnSwitch = __decorateClass$5([
  n$1("hand-drawn-switch")
], HandDrawnSwitch);

var __defProp$4 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$4(target, key, result);
  return result;
};
let HandDrawnAnchor = class extends HandDrawnBase {
  constructor() {
    super(...arguments);
    this.href = "";
    this.target = "";
    this.type = "";
    this.lineColor = "";
  }
  render() {
    return T$1`
        <a href="${this.href}" target="${this.target}" type="${this.type}">
            <div class="rough"></div>
            <slot class="slot" @slotchange="${this.roughRender}"></slot>
        </a>
    `;
  }
  roughDrawOne(roughObj) {
    var _a;
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    if (roughObj.roughEl instanceof HTMLCanvasElement) {
      (_a = roughObj.roughEl.getContext("2d")) == null ? void 0 : _a.clearRect(0, 0, this.clientWidth, this.clientHeight);
    }
    const nodeArray = [];
    nodeArray.push(roughObj.roughInstance.line(0, size.height - this.roughPadding, size.width, size.height - this.roughPadding, __spreadProps$2(__spreadValues$2({}, this.roughOps), { stroke: this.lineColor || this.roughOps.stroke })));
    if (roughObj.roughEl instanceof SVGSVGElement) {
      roughObj.roughEl.innerHTML = "";
      for (let node of nodeArray) {
        roughObj.roughEl.appendChild(node);
      }
    }
  }
  static get styles() {
    return [
      super.styles,
      i$4`
        :host {
          display: inline;
          position: relative;
        }

        .rough {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .slot {
          font-size: 1em;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `
    ];
  }
};
__decorateClass$4([
  e$2({ type: String })
], HandDrawnAnchor.prototype, "href", 2);
__decorateClass$4([
  e$2({ type: String })
], HandDrawnAnchor.prototype, "target", 2);
__decorateClass$4([
  e$2({ type: String })
], HandDrawnAnchor.prototype, "type", 2);
__decorateClass$4([
  e$2({ type: String })
], HandDrawnAnchor.prototype, "lineColor", 2);
HandDrawnAnchor = __decorateClass$4([
  n$1("hand-drawn-anchor")
], HandDrawnAnchor);

var __defProp$3 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$3(target, key, result);
  return result;
};
let HandDrawnProgress = class extends HandDrawnBase {
  constructor() {
    super();
    this.value = 0;
    this.isShowPercent = false;
    this.completeColor = "";
    this.roughOpsDefault = {
      bowing: 0.5,
      roughness: 0.8,
      stroke: "#363636",
      strokeWidth: 1,
      fillStyle: "zigzag",
      fillWeight: 0.3,
      hachureGap: 3
    };
    this.isComplete = this.value === 100;
  }
  render() {
    return T$1`
        <div id="progressWrapper" class="rough progress-wrapper">
            <div id="progressBar" class="rough progress-bar"></div>
            <div class="progress-bar-mask" style="width: ${100 - (this.value || 0)}%"></div>
            ${this.isShowPercent ? T$1`
                        <div class="progress-percent">${this.value || 0}%</div>
                    ` : ""}
        </div>
    `;
  }
  updated(_changedProperties) {
    super.updated(_changedProperties);
    if (this.isComplete && this.value !== 100 || !this.isComplete && this.value === 100) {
      this.isComplete = this.value === 100;
      this.roughRender(true);
    }
  }
  roughDrawOne(roughObj) {
    if (roughObj.roughParentEl.id === "progressBar") {
      const roughOpsTmp = __spreadProps$1(__spreadValues$1({ fill: this.roughOps.stroke }, this.roughOps), { stroke: "transparent" });
      if (this.value === 100) {
        roughOpsTmp.fill = this.completeColor;
      }
      super.roughDrawOne(roughObj, roughOpsTmp);
    } else if (roughObj.roughParentEl.id === "progressWrapper") {
      super.roughDrawOne(roughObj, __spreadProps$1(__spreadValues$1({}, this.roughOps), { fill: "" }));
    } else {
      super.roughDrawOne(roughObj);
    }
  }
  static get styles() {
    return [
      super.styles,
      i$4`
        :host {
          width: 100%;
          height: 1.2em;
        }

        .progress-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
          height: 100%;
        }

        .progress-wrapper .rough-context {
          //background-color: white;
          z-index: 1;
        }

        .progress-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }

        .progress-bar .rough-context {
          background-color: white;
        }

        .progress-bar-mask {
          transition: width 0.2s ease-out;
          position: absolute;
          background-color: white;
          top: 0;
          right: 0;
          height: 100%;
          z-index: 0;
        }

        .progress-percent {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
          vertical-align: middle;
          line-height: 1.2em;
          font-size: 1em;

        }
      `
    ];
  }
};
__decorateClass$3([
  e$2({ type: Number })
], HandDrawnProgress.prototype, "value", 2);
__decorateClass$3([
  e$2({ type: Boolean })
], HandDrawnProgress.prototype, "isShowPercent", 2);
__decorateClass$3([
  e$2({ type: String })
], HandDrawnProgress.prototype, "completeColor", 2);
HandDrawnProgress = __decorateClass$3([
  n$1("hand-drawn-progress")
], HandDrawnProgress);

var __defProp$2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$2(target, key, result);
  return result;
};
let HandDrawnSlider = class extends HandDrawnBase {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.isVertical = false;
    this.max = 100;
    this.min = 0;
    this.value = 0;
    this.step = 1;
    this.isMouseDown = false;
    this.mouseUpHandler = this.mouseUpHandlerTmp.bind(this);
    this.slideHandler = this.slideHandlerTmp.bind(this);
  }
  updateAnimationState() {
    if (!this.disabled) {
      super.updateAnimationState();
    }
  }
  render() {
    return T$1`
        <label class="slider-wrapper ${this.isVertical ? "slider-wrapper--vertical" : "slider-wrapper--horizontal"}" ?disabled="${this.disabled}">
            <input type="range" style="opacity: 0;position: absolute;z-index: -1;width: 0;height: 0">
            <div id="sliderLine" class="slider-line ${this.isVertical ? "slider-line--vertical" : "slider-line--horizontal"} rough">
                <div id="sliderButton"
                     class="slider-button ${this.isVertical ? "slider-button--vertical" : "slider-button--horizontal"} rough"
                     style="${this.isVertical ? "bottom" : "left"}:${this.value}% "
                >
                    <div
                            class="slider-value ${this.isVertical ? "slider-value--vertical" : "slider-value--horizontal"}"
                            style="display: ${this.isFocus || this.isMouseDown || this.isMouseIn ? "inherit" : "none"}"
                    >${this.value}
                    </div>
                </div>
            </div>
        </label>
    `;
  }
  willUpdate(_changedProperties) {
    this.max = Math.max(this.max, this.min);
    super.willUpdate(_changedProperties);
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("mousedown", this.mouseDownHandler);
    window.addEventListener("mousemove", this.slideHandler);
    window.addEventListener("mouseup", this.mouseUpHandler);
    this.addEventListener("touchstart", this.mouseDownHandler);
    window.addEventListener("touchmove", this.slideHandler, { passive: false });
    window.addEventListener("touchend", this.mouseUpHandler);
    this.addEventListener("keydown", this.keyDownHandler);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("mousedown", this.mouseDownHandler);
    window.removeEventListener("mousemove", this.slideHandler);
    window.removeEventListener("mouseup", this.mouseUpHandler);
    this.removeEventListener("touchstart", this.mouseDownHandler);
    window.removeEventListener("touchmove", this.slideHandler);
    window.removeEventListener("touchend", this.mouseUpHandler);
    this.removeEventListener("keydown", this.keyDownHandler);
  }
  mouseInHandler() {
    super.mouseInHandler();
    this.requestUpdate();
  }
  mouseOutHandler() {
    super.mouseOutHandler();
    this.requestUpdate();
  }
  focusHandler() {
    super.focusHandler();
    this.requestUpdate();
  }
  blurHandler() {
    super.blurHandler();
    this.requestUpdate();
  }
  keyDownHandler(e) {
    let nextValue = this.value;
    if (this.isVertical) {
      switch (e.code) {
        case "ArrowUp":
          nextValue += this.step || 1;
          break;
        case "ArrowDown":
          nextValue = (Math.ceil(nextValue / this.step) - 1) * this.step;
          break;
      }
    } else {
      switch (e.code) {
        case "ArrowRight":
          nextValue += this.step || 1;
          break;
        case "ArrowLeft":
          nextValue = (Math.ceil(nextValue / this.step) - 1) * this.step;
          break;
      }
    }
    nextValue = Math.max(this.min, nextValue);
    nextValue = Math.min(this.max, nextValue);
    this.value = nextValue;
  }
  mouseDownHandler(e) {
    this.isMouseDown = true;
    this.value = this.getNextValueByPoint(e);
  }
  mouseUpHandlerTmp() {
    this.isMouseDown = false;
    this.requestUpdate();
  }
  slideHandlerTmp(e) {
    if (this.isMouseDown) {
      this.value = this.getNextValueByPoint(e);
      if (e.stopPropagation) {
        e.stopPropagation();
      } else {
        e.cancelBubble = true;
      }
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
    }
  }
  getNextValueByPoint(e) {
    let point;
    if (e instanceof MouseEvent) {
      point = {
        x: e.clientX,
        y: e.clientY
      };
    } else if (e instanceof TouchEvent) {
      point = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    } else {
      console.error("unknown event", e);
      return this.value;
    }
    let nextValue;
    if (this.isVertical) {
      if (this.clientHeight * (this.max - this.min) === 0) {
        nextValue = this.min;
      } else {
        const componentBottomInPage = this.getBoundingClientRect().top;
        nextValue = (this.clientHeight - point.y + componentBottomInPage) / this.clientHeight * (this.max - this.min);
      }
    } else {
      if (this.clientWidth * (this.max - this.min) === 0) {
        nextValue = this.min;
      } else {
        const componentLeftInPage = this.getBoundingClientRect().left;
        nextValue = (point.x - componentLeftInPage) / this.clientWidth * (this.max - this.min);
      }
    }
    if (this.step) {
      nextValue = Math.round(nextValue / this.step) * this.step;
    }
    nextValue = Math.max(this.min, nextValue);
    nextValue = Math.min(this.max, nextValue);
    return nextValue;
  }
  roughDrawOne(roughObj) {
    var _a;
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    if (roughObj.roughParentEl.id === "sliderLine") {
      super.roughDrawOne(roughObj, __spreadProps(__spreadValues({}, this.roughOps), {
        fill: this.roughOps.stroke,
        strokeWidth: this.roughOpsOrigin.strokeWidth,
        fillStyle: "zigzag"
      }));
    } else if (roughObj.roughParentEl.id === "sliderButton") {
      if (roughObj.roughEl instanceof HTMLCanvasElement) {
        (_a = roughObj.roughEl.getContext("2d")) == null ? void 0 : _a.clearRect(0, 0, this.clientWidth, this.clientHeight);
      }
      const nodeArray = [];
      nodeArray.push(roughObj.roughInstance.circle(size.width / 2, size.height / 2, size.width - this.roughPadding, __spreadProps(__spreadValues({}, this.roughOps), {
        roughness: (this.roughOps.roughness || 0) * 2 / 3,
        bowing: (this.roughOps.bowing || 0) * 2 / 3
      })));
      if (roughObj.roughEl instanceof SVGSVGElement) {
        roughObj.roughEl.innerHTML = "";
        for (let node of nodeArray) {
          roughObj.roughEl.appendChild(node);
        }
      }
    } else {
      super.roughDrawOne(roughObj);
    }
  }
  static get styles() {
    return [
      super.styles,
      i$4`
        :host {
          position: relative;
          min-height: 1em;
          display: block;
          width: 100%;
          height: 100%;
        }

        .rough-context {
          background-color: white;
        }

        .slider-wrapper {
          position: absolute;
          font: inherit;
          border: none;
          cursor: pointer;
          text-align: center;
          outline: none;
        }

        .slider-wrapper--horizontal {
          padding: 0.2em 0;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
        }

        .slider-wrapper--vertical {
          padding: 0 0.2em;
          left: 50%;
          top: 0;
          bottom: 0;
          transform: translateX(-50%);
        }

        .slider-wrapper[disabled] {
          opacity: 0.5;
          background: rgba(0, 0, 0, 0.08);
          cursor: not-allowed;
        }

        .slider-line {
          position: relative;
        }

        .slider-line--horizontal {
          min-height: 8px;
          height: 0.4em;
        }

        .slider-line--vertical {
          min-width: 8px;
          width: 0.4em;
          height: 100%;
        }

        .slider-button {
          height: 1em;
          width: 1em;
          position: absolute;
        }

        .slider-button--horizontal {
          transform: translate(-50%, -50%);
          top: 50%;
          left: 0;
        }

        .slider-button--vertical {
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 50%);
        }

        .slider-value {
          pointer-events: none;
          display: inline-block;
          //background-color: white;
          //border-radius: 1em;
          position: absolute;
          user-select: none;
        }

        .slider-value--horizontal {
          top: -1.2em;
          left: 50%;
          transform: translateX(-50%);
        }

        .slider-value--vertical {
          left: -0.2em;
          top: 50%;
          transform: translate(-100%, -50%);
        }

      `
    ];
  }
};
__decorateClass$2([
  e$2({ type: Boolean, reflect: true })
], HandDrawnSlider.prototype, "disabled", 2);
__decorateClass$2([
  e$2({ type: Boolean, reflect: true })
], HandDrawnSlider.prototype, "isVertical", 2);
__decorateClass$2([
  e$2({ type: Number })
], HandDrawnSlider.prototype, "max", 2);
__decorateClass$2([
  e$2({ type: Number })
], HandDrawnSlider.prototype, "min", 2);
__decorateClass$2([
  e$2({ type: Number })
], HandDrawnSlider.prototype, "value", 2);
__decorateClass$2([
  e$2({ type: Number })
], HandDrawnSlider.prototype, "step", 2);
HandDrawnSlider = __decorateClass$2([
  n$1("hand-drawn-slider")
], HandDrawnSlider);

var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
let HandDrawnSelector = class extends HandDrawnBase {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.placeholder = null;
    this.selectedValue = null;
    this.selectedColor = "deepskyblue";
    this.selectedName = null;
    this.isShowItemList = false;
    this.focusItem = null;
    this.focusItemIndex = 0;
    this.itemLength = 0;
  }
  render() {
    var _a;
    return T$1`
            <div class="selector-wrapper" ?disabled="${this.disabled}">
                <div class="rough selector-text" ?disabled="${this.disabled}" @click="${this.showItemListHandler}">
                    <div style="overflow: hidden">
                        <span style="${((_a = this.selectedName) == null ? void 0 : _a.length) ? "display:none" : "color:#ccc"}">${this.placeholder}</span>
                        <span>${this.selectedName}</span>
                    </div>
                </div>
                <div id="dot" class="selector-dot rough"></div>
                <div id="itemList" class="rough selector-list" style="${this.isShowItemList ? "" : "display:none"}">
                    <div class="selector-list-scroll">
                        <slot id="slot" .class="slot"></slot>
                    </div>
                </div>
            </div>
        `;
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.setItemState();
  }
  updated(_changedProperties) {
    super.updated(_changedProperties);
    this.setAttribute("tabindex", this.disabled ? "" : "0");
  }
  roughDrawOne(roughObj) {
    var _a;
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    if (roughObj.roughParentEl.id === "dot") {
      if (roughObj.roughEl instanceof HTMLCanvasElement) {
        (_a = roughObj.roughEl.getContext("2d")) == null ? void 0 : _a.clearRect(0, 0, this.clientWidth, this.clientHeight);
      }
      const nodeArray = [];
      nodeArray.push(roughObj.roughInstance.line(0, 0, size.width, 0));
      nodeArray.push(roughObj.roughInstance.line(size.width, 0, size.width / 2, size.height));
      nodeArray.push(roughObj.roughInstance.line(size.width / 2, size.height, 0, 0));
      if (roughObj.roughEl instanceof SVGSVGElement) {
        roughObj.roughEl.innerHTML = "";
        for (let node of nodeArray) {
          roughObj.roughEl.appendChild(node);
        }
      }
    } else {
      super.roughDrawOne(roughObj);
    }
  }
  showItemListHandler() {
    if (this.disabled) {
      return;
    }
    if (this.itemLength >= 0) {
      if (!this.isShowItemList || this.focusItemIndex === null) {
        this.focusItemIndex = 0;
      }
    }
    this.setItemState();
    this.isShowItemList = true;
  }
  closeItemListHandler() {
    this.isShowItemList = false;
  }
  keyDownHandler(e) {
    switch (e.code) {
      case "Enter":
      case "Space":
        if (this.isShowItemList) {
          if (this.focusItem) {
            this.selectedValue = this.focusItem.value;
            this.selectedName = this.focusItem.name;
          }
          this.closeItemListHandler();
        } else {
          this.showItemListHandler();
        }
        e.stopPropagation();
        e.preventDefault();
        break;
      case "Escape":
        this.isShowItemList = false;
        e.stopPropagation();
        e.preventDefault();
        break;
      case "ArrowUp":
        this.focusItemIndex = Math.max(0, this.focusItemIndex - 1);
        this.showItemListHandler();
        this.setItemState();
        e.stopPropagation();
        e.preventDefault();
        break;
      case "ArrowDown":
        this.focusItemIndex = Math.min(this.itemLength - 1, this.focusItemIndex + 1);
        this.showItemListHandler();
        this.setItemState();
        e.stopPropagation();
        e.preventDefault();
        break;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("change", this.change);
    this.addEventListener("blur", this.closeItemListHandler);
    this.addEventListener("focus", this.showItemListHandler);
    this.addEventListener("keydown", this.keyDownHandler, { passive: false });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("change", this.change);
    this.removeEventListener("blur", this.closeItemListHandler);
    this.removeEventListener("focus", this.showItemListHandler);
    this.removeEventListener("keydown", this.keyDownHandler);
  }
  change(e) {
    if (e instanceof CustomEvent) {
      this.selectedValue = e.detail.value;
      this.selectedName = e.detail.name;
      this.closeItemListHandler();
    }
  }
  setItemState() {
    var _a;
    const els = (((_a = this.slotEl) == null ? void 0 : _a.assignedNodes()) || []).filter((e) => e.tagName === "HAND-DRAWN-ITEM");
    this.selectedName = this.selectedValue;
    this.itemLength = els.length;
    els.forEach((itemEl, index) => {
      itemEl.disabled = this.disabled || itemEl.disabled;
      itemEl.isHover = index === this.focusItemIndex;
      if (itemEl.isHover) {
        this.focusItem = { value: itemEl.value, name: itemEl.name };
      }
      itemEl.checked = this.selectedValue === itemEl.value;
      if (itemEl.checked) {
        this.selectedName = itemEl.name;
      }
    });
  }
  static get styles() {
    return [
      super.styles,
      i$4`
              :host {
                width: 100%;
                outline: none;
              }

              .rough-context {
                background-color: white;
              }

              .selector-text {
                cursor: pointer;
                position: relative;
                overflow: hidden;
                display: block;
                padding: 0 24px 0 0.8em;
                width: 100%;
                height: 2em;
                line-height: 2em;
              }

              .selector-list {
                position: absolute;
                top: 2em;
                margin: 0;
                overflow: hidden;
                padding: 0.5em 0.8em;
                z-index: 100;
                display: block;
                width: 100%;
              }

              .selector-list-scroll {
                overflow: auto;
              }

              .selector-wrapper {
                font: inherit;
                position: relative;
                border: none;
                letter-spacing: 1.25px;
                overflow: visible;
                text-align: left;
                outline: none;
                width: 100%;
                height: 2em;
              }

              .selector-wrapper[disabled] {
                opacity: 0.5;
                background: rgba(0, 0, 0, 0.08);
                cursor: not-allowed;
              }

              .selector-dot {
                transform: translateY(-50%);
                display: inline-block;
                height: 8px;
                width: 8px;
                position: absolute;
                top: 50%;
                right: 10px;
              }
            `
    ];
  }
};
__decorateClass$1([
  e$2({ type: Boolean, reflect: true })
], HandDrawnSelector.prototype, "disabled", 2);
__decorateClass$1([
  o$1("slot")
], HandDrawnSelector.prototype, "slotEl", 2);
__decorateClass$1([
  o$1("#itemList")
], HandDrawnSelector.prototype, "itemListEl", 2);
__decorateClass$1([
  e$2({ type: String })
], HandDrawnSelector.prototype, "placeholder", 2);
__decorateClass$1([
  e$2({ type: String })
], HandDrawnSelector.prototype, "selectedValue", 2);
__decorateClass$1([
  e$2({ type: String })
], HandDrawnSelector.prototype, "selectedColor", 2);
__decorateClass$1([
  e$2({ type: String, state: true })
], HandDrawnSelector.prototype, "selectedName", 2);
__decorateClass$1([
  e$2({ type: String, state: true })
], HandDrawnSelector.prototype, "isShowItemList", 2);
HandDrawnSelector = __decorateClass$1([
  n$1("hand-drawn-selector")
], HandDrawnSelector);

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let HandDrawnItem = class extends HandDrawnBase {
  constructor() {
    super();
    this.disabled = false;
    this.checked = false;
    this.value = null;
    this.name = null;
    this.selectedColor = "deepskyblue";
    this.isHover = false;
    this.isMouseDown = false;
    this.itemMouseUpHandler = this.itemMouseUpHandlerTmp.bind(this);
    this.attachShadow({ mode: "open" });
  }
  render() {
    return T$1`
            <div
                    class="rough item"
                    style="${this.checked ? "color:" + this.selectedColor : "inherit"};${this.isHover ? "font-weight:bold" : "normal"}"
                    @mousedown="${this.itemMouseDownHandler}"
                    ?disabled="${this.disabled}"
            >${this.name}
            </div>
        `;
  }
  createRenderRoot() {
    return super.createRenderRoot();
  }
  itemMouseDownHandler(event) {
    if (this.disabled) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.isMouseDown = true;
  }
  itemMouseUpHandlerTmp(event) {
    if (this.disabled) {
      return;
    }
    if (this.isMouseDown) {
      event.stopPropagation();
      this.checked = true;
      this.dispatchEvent(new CustomEvent("change", {
        composed: true,
        bubbles: true,
        detail: {
          value: this.value,
          name: this.name,
          checked: this.checked
        }
      }));
    }
    this.isMouseDown = false;
  }
  updateAnimationState() {
    if (!this.disabled) {
      super.updateAnimationState();
    }
  }
  hoverHandler() {
    this.isHover = true;
  }
  leaveHandler() {
    this.isHover = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("mouseover", this.hoverHandler);
    this.addEventListener("mouseleave", this.leaveHandler);
    window.addEventListener("mouseup", this.itemMouseUpHandler);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("mouseover", this.hoverHandler);
    this.removeEventListener("mouseleave", this.leaveHandler);
    window.removeEventListener("mouseup", this.itemMouseUpHandler);
  }
  static get styles() {
    return [
      super.styles,
      i$4`
              :host {
                display: block;
              }

              .item {
                word-break:keep-all;
                white-space:nowrap;
                padding: 0.2em 0;
                position: relative;
                border: none;
                background: none;
                cursor: pointer;
                outline: none;
              }

              .item-input:focus {
                font-weight: bold;
              }

              .item[disabled] {
                opacity: 0.5;
                cursor: not-allowed;
              }
            `
    ];
  }
};
__decorateClass([
  e$2({ type: Boolean, reflect: true })
], HandDrawnItem.prototype, "disabled", 2);
__decorateClass([
  e$2({ type: Boolean })
], HandDrawnItem.prototype, "checked", 2);
__decorateClass([
  e$2({ type: String })
], HandDrawnItem.prototype, "value", 2);
__decorateClass([
  e$2({ type: String })
], HandDrawnItem.prototype, "name", 2);
__decorateClass([
  e$2({ type: String })
], HandDrawnItem.prototype, "selectedColor", 2);
__decorateClass([
  e$2({ type: Boolean, state: true })
], HandDrawnItem.prototype, "isHover", 2);
HandDrawnItem = __decorateClass([
  n$1("hand-drawn-item")
], HandDrawnItem);

window.onload = function() {
  const loading = document.getElementById("loading");
  const loadingText = document.getElementById("loadingText");
  const content = document.getElementById("content");
  content.style.transition = "opacity 1.2s ease-out";
  content.style.opacity = "0";
  loadingText.style.transformOrigin = "50% 50%";
  loadingText.style.transition = "all 1s ease-out";
  Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    }),
    document.fonts.ready
  ]).then(() => {
    loadingText.innerText = "^_^";
    loadingText.style.opacity = "0";
    loadingText.style.transform = "scale(2)";
    setTimeout(() => {
      content.style.opacity = "1";
      setTimeout(() => {
        loading.style.display = "none";
      }, 1e3);
    }, 1e3);
  });
};
