/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$5=Symbol(),n$6=new Map;class s$4{constructor(t,n){if(this._$cssResult$=!0,n!==e$5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$6.get(this.cssText);return t$2&&void 0===e&&(n$6.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$5=t=>new s$4("string"==typeof t?t:t+"",e$5),r$3=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$4(o,e$5)},i$4=(e,n)=>{t$2?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$2=t$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$5(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$3;const e$4=window.trustedTypes,r$2=e$4?e$4.emptyScript:"",h$2=window.reactiveElementPolyfillSupport,o$4={toAttribute(t,i){switch(i){case Boolean:t=t?r$2:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$5=(t,i)=>i!==t&&(i==i||t==t),l$3={attribute:!0,type:String,converter:o$4,reflect:!1,hasChanged:n$5};class a$2 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=l$3){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$2(i));}else void 0!==i&&s.push(S$2(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$4(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$3){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$4.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$4.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$5)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a$2.finalized=!0,a$2.elementProperties=new Map,a$2.elementStyles=[],a$2.shadowRootOptions={mode:"open"},null==h$2||h$2({ReactiveElement:a$2}),(null!==(s$3=globalThis.reactiveElementVersions)&&void 0!==s$3?s$3:globalThis.reactiveElementVersions=[]).push("1.3.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;const i$3=globalThis.trustedTypes,s$2=i$3?i$3.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$3=`lit$${(Math.random()+"").slice(9)}$`,o$3="?"+e$3,n$4=`<${o$3}>`,l$2=document,h$1=(t="")=>l$2.createComment(t),r$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d$1=Array.isArray,u$1=t=>{var i;return d$1(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$1=/-->/g,a$1=/>/g,f$1=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_$1=/'/g,m$1=/"/g,g$1=/^(?:script|style|textarea|title)$/i,p$1=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$$1=p$1(1),b$1=Symbol.for("lit-noChange"),w$1=Symbol.for("lit-nothing"),T$1=new WeakMap,x$1=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N$1(i.insertBefore(h$1(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A$1=l$2.createTreeWalker(l$2,129,null,!1),C$1=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c$1;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c$1?"!--"===u[1]?d=v$1:void 0!==u[1]?d=a$1:void 0!==u[2]?(g$1.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f$1):void 0!==u[3]&&(d=f$1):d===f$1?">"===u[0]?(d=null!=h?h:c$1,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f$1:'"'===u[3]?m$1:_$1):d===m$1||d===_$1?d=f$1:d===v$1||d===a$1?d=c$1:(d=f$1,h=void 0);const y=d===f$1&&t[i+1].startsWith("/>")?" ":"";r+=d===c$1?s+n$4:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e$3+y):s+e$3+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$2?s$2.createHTML(u):u,l]};class E$1{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C$1(t,s);if(this.el=E$1.createElement(v,n),A$1.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A$1.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$3)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$3),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M$1:"?"===i[1]?H$1:"@"===i[1]?I$1:S$1});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g$1.test(l.tagName)){const t=l.textContent.split(e$3),s=t.length-1;if(s>0){l.textContent=i$3?i$3.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h$1()),A$1.nextNode(),c.push({type:2,index:++r});l.append(t[s],h$1());}}}else if(8===l.nodeType)if(l.data===o$3)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$3,t+1));)c.push({type:7,index:r}),t+=e$3.length-1;}r++;}}static createElement(t,i){const s=l$2.createElement("template");return s.innerHTML=t,s}}function P$1(t,i,s=t,e){var o,n,l,h;if(i===b$1)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r$1(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P$1(t,d._$AS(t,i.values),d,e)),i}class V$1{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$2).importNode(s,!0);A$1.currentNode=o;let n=A$1.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N$1(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L$1(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A$1.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N$1{constructor(t,i,s,e){var o;this.type=2,this._$AH=w$1,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P$1(this,t,i),r$1(t)?t===w$1||null==t||""===t?(this._$AH!==w$1&&this._$AR(),this._$AH=w$1):t!==this._$AH&&t!==b$1&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u$1(t)?this.S(t):this.$(t);}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t));}$(t){this._$AH!==w$1&&r$1(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$2.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E$1.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V$1(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T$1.get(t.strings);return void 0===i&&T$1.set(t.strings,i=new E$1(t)),i}S(t){d$1(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N$1(this.M(h$1()),this.M(h$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S$1{constructor(t,i,s,e,o){this.type=1,this._$AH=w$1,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w$1;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P$1(this,t,i,0),n=!r$1(t)||t!==this._$AH&&t!==b$1,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P$1(this,e[s+l],i,l),h===b$1&&(h=this._$AH[l]),n||(n=!r$1(h)||h!==this._$AH[l]),h===w$1?t=w$1:t!==w$1&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M$1 extends S$1{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w$1?void 0:t;}}const k$1=i$3?i$3.emptyScript:"";class H$1 extends S$1{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w$1?this.element.setAttribute(this.name,k$1):this.element.removeAttribute(this.name);}}class I$1 extends S$1{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P$1(this,t,i,0))&&void 0!==s?s:w$1)===b$1)return;const e=this._$AH,o=t===w$1&&e!==w$1||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w$1&&(e===w$1||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L$1{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P$1(this,t);}}const z$1=window.litHtmlPolyfillSupport;null==z$1||z$1(E$1,N$1),(null!==(t$1=globalThis.litHtmlVersions)&&void 0!==t$1?t$1:globalThis.litHtmlVersions=[]).push("2.2.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$1,o$2;class s$1 extends a$2{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x$1(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b$1}}s$1.finalized=!0,s$1._$litElement$=!0,null===(l$1=globalThis.litElementHydrateSupport)||void 0===l$1||l$1.call(globalThis,{LitElement:s$1});const n$3=globalThis.litElementPolyfillSupport;null==n$3||n$3({LitElement:s$1});(null!==(o$2=globalThis.litElementVersions)&&void 0!==o$2?o$2:globalThis.litElementVersions=[]).push("3.2.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$2=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$2=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$2(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$2(e,n)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$1=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$1(i,n){return o$1({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$1(e){return o$1({descriptor:r=>({get(){var r,o;return null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelectorAll(e))&&void 0!==o?o:[]},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$1;null!=(null===(n$1=window.HTMLSlotElement)||void 0===n$1?void 0:n$1.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

function t(t,e,s){if(t&&t.length){const[n,a]=e,o=Math.PI/180*s,h=Math.cos(o),r=Math.sin(o);t.forEach((t=>{const[e,s]=t;t[0]=(e-n)*h-(s-a)*r+n,t[1]=(e-n)*r+(s-a)*h+a;}));}}function e(t){const e=t[0],s=t[1];return Math.sqrt(Math.pow(e[0]-s[0],2)+Math.pow(e[1]-s[1],2))}function s(e,s){const n=s.hachureAngle+90;let a=s.hachureGap;a<0&&(a=4*s.strokeWidth),a=Math.max(a,.1);const o=[0,0];if(n)for(const s of e)t(s,o,n);const h=function(t,e){const s=[];for(const e of t){const t=[...e];t[0].join(",")!==t[t.length-1].join(",")&&t.push([t[0][0],t[0][1]]),t.length>2&&s.push(t);}const n=[];e=Math.max(e,.1);const a=[];for(const t of s)for(let e=0;e<t.length-1;e++){const s=t[e],n=t[e+1];if(s[1]!==n[1]){const t=Math.min(s[1],n[1]);a.push({ymin:t,ymax:Math.max(s[1],n[1]),x:t===s[1]?s[0]:n[0],islope:(n[0]-s[0])/(n[1]-s[1])});}}if(a.sort(((t,e)=>t.ymin<e.ymin?-1:t.ymin>e.ymin?1:t.x<e.x?-1:t.x>e.x?1:t.ymax===e.ymax?0:(t.ymax-e.ymax)/Math.abs(t.ymax-e.ymax))),!a.length)return n;let o=[],h=a[0].ymin;for(;o.length||a.length;){if(a.length){let t=-1;for(let e=0;e<a.length&&!(a[e].ymin>h);e++)t=e;a.splice(0,t+1).forEach((t=>{o.push({s:h,edge:t});}));}if(o=o.filter((t=>!(t.edge.ymax<=h))),o.sort(((t,e)=>t.edge.x===e.edge.x?0:(t.edge.x-e.edge.x)/Math.abs(t.edge.x-e.edge.x))),o.length>1)for(let t=0;t<o.length;t+=2){const e=t+1;if(e>=o.length)break;const s=o[t].edge,a=o[e].edge;n.push([[Math.round(s.x),h],[Math.round(a.x),h]]);}h+=e,o.forEach((t=>{t.edge.x=t.edge.x+e*t.edge.islope;}));}return n}(e,a);if(n){for(const s of e)t(s,o,-n);!function(e,s,n){const a=[];e.forEach((t=>a.push(...t))),t(a,s,n);}(h,o,-n);}return h}class n{constructor(t){this.helper=t;}fillPolygons(t,e){return this._fillPolygons(t,e)}_fillPolygons(t,e){const n=s(t,e);return {type:"fillSketch",ops:this.renderLines(n,e)}}renderLines(t,e){const s=[];for(const n of t)s.push(...this.helper.doubleLineOps(n[0][0],n[0][1],n[1][0],n[1][1],e));return s}}class a extends n{fillPolygons(t,n){let a=n.hachureGap;a<0&&(a=4*n.strokeWidth),a=Math.max(a,.1);const o=s(t,Object.assign({},n,{hachureGap:a})),h=Math.PI/180*n.hachureAngle,r=[],i=.5*a*Math.cos(h),c=.5*a*Math.sin(h);for(const[t,s]of o)e([t,s])&&r.push([[t[0]-i,t[1]+c],[...s]],[[t[0]+i,t[1]-c],[...s]]);return {type:"fillSketch",ops:this.renderLines(r,n)}}}class o extends n{fillPolygons(t,e){const s=this._fillPolygons(t,e),n=Object.assign({},e,{hachureAngle:e.hachureAngle+90}),a=this._fillPolygons(t,n);return s.ops=s.ops.concat(a.ops),s}}class h{constructor(t){this.helper=t;}fillPolygons(t,e){const n=s(t,e=Object.assign({},e,{hachureAngle:0}));return this.dotsOnLines(n,e)}dotsOnLines(t,s){const n=[];let a=s.hachureGap;a<0&&(a=4*s.strokeWidth),a=Math.max(a,.1);let o=s.fillWeight;o<0&&(o=s.strokeWidth/2);const h=a/4;for(const r of t){const t=e(r),i=t/a,c=Math.ceil(i)-1,l=t-c*a,u=(r[0][0]+r[1][0])/2-a/4,p=Math.min(r[0][1],r[1][1]);for(let t=0;t<c;t++){const e=p+l+t*a,r=u-h+2*Math.random()*h,i=e-h+2*Math.random()*h,c=this.helper.ellipse(r,i,o,o,s);n.push(...c.ops);}}return {type:"fillSketch",ops:n}}}class r{constructor(t){this.helper=t;}fillPolygons(t,e){const n=s(t,e);return {type:"fillSketch",ops:this.dashedLine(n,e)}}dashedLine(t,s){const n=s.dashOffset<0?s.hachureGap<0?4*s.strokeWidth:s.hachureGap:s.dashOffset,a=s.dashGap<0?s.hachureGap<0?4*s.strokeWidth:s.hachureGap:s.dashGap,o=[];return t.forEach((t=>{const h=e(t),r=Math.floor(h/(n+a)),i=(h+a-r*(n+a))/2;let c=t[0],l=t[1];c[0]>l[0]&&(c=t[1],l=t[0]);const u=Math.atan((l[1]-c[1])/(l[0]-c[0]));for(let t=0;t<r;t++){const e=t*(n+a),h=e+n,r=[c[0]+e*Math.cos(u)+i*Math.cos(u),c[1]+e*Math.sin(u)+i*Math.sin(u)],l=[c[0]+h*Math.cos(u)+i*Math.cos(u),c[1]+h*Math.sin(u)+i*Math.sin(u)];o.push(...this.helper.doubleLineOps(r[0],r[1],l[0],l[1],s));}})),o}}class i{constructor(t){this.helper=t;}fillPolygons(t,e){const n=e.hachureGap<0?4*e.strokeWidth:e.hachureGap,a=e.zigzagOffset<0?n:e.zigzagOffset,o=s(t,e=Object.assign({},e,{hachureGap:n+a}));return {type:"fillSketch",ops:this.zigzagLines(o,a,e)}}zigzagLines(t,s,n){const a=[];return t.forEach((t=>{const o=e(t),h=Math.round(o/(2*s));let r=t[0],i=t[1];r[0]>i[0]&&(r=t[1],i=t[0]);const c=Math.atan((i[1]-r[1])/(i[0]-r[0]));for(let t=0;t<h;t++){const e=2*t*s,o=2*(t+1)*s,h=Math.sqrt(2*Math.pow(s,2)),i=[r[0]+e*Math.cos(c),r[1]+e*Math.sin(c)],l=[r[0]+o*Math.cos(c),r[1]+o*Math.sin(c)],u=[i[0]+h*Math.cos(c+Math.PI/4),i[1]+h*Math.sin(c+Math.PI/4)];a.push(...this.helper.doubleLineOps(i[0],i[1],u[0],u[1],n),...this.helper.doubleLineOps(u[0],u[1],l[0],l[1],n));}})),a}}const c={};class l{constructor(t){this.seed=t;}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}const u={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function p(t,e){return t.type===e}function f(t){const e=[],s=function(t){const e=new Array;for(;""!==t;)if(t.match(/^([ \t\r\n,]+)/))t=t.substr(RegExp.$1.length);else if(t.match(/^([aAcChHlLmMqQsStTvVzZ])/))e[e.length]={type:0,text:RegExp.$1},t=t.substr(RegExp.$1.length);else {if(!t.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return [];e[e.length]={type:1,text:`${parseFloat(RegExp.$1)}`},t=t.substr(RegExp.$1.length);}return e[e.length]={type:2,text:""},e}(t);let n="BOD",a=0,o=s[a];for(;!p(o,2);){let h=0;const r=[];if("BOD"===n){if("M"!==o.text&&"m"!==o.text)return f("M0,0"+t);a++,h=u[o.text],n=o.text;}else p(o,1)?h=u[n]:(a++,h=u[o.text],n=o.text);if(!(a+h<s.length))throw new Error("Path data ended short");for(let t=a;t<a+h;t++){const e=s[t];if(!p(e,1))throw new Error("Param not a number: "+n+","+e.text);r[r.length]=+e.text;}if("number"!=typeof u[n])throw new Error("Bad segment: "+n);{const t={key:n,data:r};e.push(t),a+=h,o=s[a],"M"===n&&(n="L"),"m"===n&&(n="l");}}return e}function d(t){let e=0,s=0,n=0,a=0;const o=[];for(const{key:h,data:r}of t)switch(h){case"M":o.push({key:"M",data:[...r]}),[e,s]=r,[n,a]=r;break;case"m":e+=r[0],s+=r[1],o.push({key:"M",data:[e,s]}),n=e,a=s;break;case"L":o.push({key:"L",data:[...r]}),[e,s]=r;break;case"l":e+=r[0],s+=r[1],o.push({key:"L",data:[e,s]});break;case"C":o.push({key:"C",data:[...r]}),e=r[4],s=r[5];break;case"c":{const t=r.map(((t,n)=>n%2?t+s:t+e));o.push({key:"C",data:t}),e=t[4],s=t[5];break}case"Q":o.push({key:"Q",data:[...r]}),e=r[2],s=r[3];break;case"q":{const t=r.map(((t,n)=>n%2?t+s:t+e));o.push({key:"Q",data:t}),e=t[2],s=t[3];break}case"A":o.push({key:"A",data:[...r]}),e=r[5],s=r[6];break;case"a":e+=r[5],s+=r[6],o.push({key:"A",data:[r[0],r[1],r[2],r[3],r[4],e,s]});break;case"H":o.push({key:"H",data:[...r]}),e=r[0];break;case"h":e+=r[0],o.push({key:"H",data:[e]});break;case"V":o.push({key:"V",data:[...r]}),s=r[0];break;case"v":s+=r[0],o.push({key:"V",data:[s]});break;case"S":o.push({key:"S",data:[...r]}),e=r[2],s=r[3];break;case"s":{const t=r.map(((t,n)=>n%2?t+s:t+e));o.push({key:"S",data:t}),e=t[2],s=t[3];break}case"T":o.push({key:"T",data:[...r]}),e=r[0],s=r[1];break;case"t":e+=r[0],s+=r[1],o.push({key:"T",data:[e,s]});break;case"Z":case"z":o.push({key:"Z",data:[]}),e=n,s=a;}return o}function g(t){const e=[];let s="",n=0,a=0,o=0,h=0,r=0,i=0;for(const{key:c,data:l}of t){switch(c){case"M":e.push({key:"M",data:[...l]}),[n,a]=l,[o,h]=l;break;case"C":e.push({key:"C",data:[...l]}),n=l[4],a=l[5],r=l[2],i=l[3];break;case"L":e.push({key:"L",data:[...l]}),[n,a]=l;break;case"H":n=l[0],e.push({key:"L",data:[n,a]});break;case"V":a=l[0],e.push({key:"L",data:[n,a]});break;case"S":{let t=0,o=0;"C"===s||"S"===s?(t=n+(n-r),o=a+(a-i)):(t=n,o=a),e.push({key:"C",data:[t,o,...l]}),r=l[0],i=l[1],n=l[2],a=l[3];break}case"T":{const[t,o]=l;let h=0,c=0;"Q"===s||"T"===s?(h=n+(n-r),c=a+(a-i)):(h=n,c=a);const u=n+2*(h-n)/3,p=a+2*(c-a)/3,f=t+2*(h-t)/3,d=o+2*(c-o)/3;e.push({key:"C",data:[u,p,f,d,t,o]}),r=h,i=c,n=t,a=o;break}case"Q":{const[t,s,o,h]=l,c=n+2*(t-n)/3,u=a+2*(s-a)/3,p=o+2*(t-o)/3,f=h+2*(s-h)/3;e.push({key:"C",data:[c,u,p,f,o,h]}),r=t,i=s,n=o,a=h;break}case"A":{const t=Math.abs(l[0]),s=Math.abs(l[1]),o=l[2],h=l[3],r=l[4],i=l[5],c=l[6];if(0===t||0===s)e.push({key:"C",data:[n,a,i,c,i,c]}),n=i,a=c;else if(n!==i||a!==c){k(n,a,i,c,t,s,o,h,r).forEach((function(t){e.push({key:"C",data:t});})),n=i,a=c;}break}case"Z":e.push({key:"Z",data:[]}),n=o,a=h;}s=c;}return e}function M(t,e,s){return [t*Math.cos(s)-e*Math.sin(s),t*Math.sin(s)+e*Math.cos(s)]}function k(t,e,s,n,a,o,h,r,i,c){const l=(u=h,Math.PI*u/180);var u;let p=[],f=0,d=0,g=0,b=0;if(c)[f,d,g,b]=c;else {[t,e]=M(t,e,-l),[s,n]=M(s,n,-l);const h=(t-s)/2,c=(e-n)/2;let u=h*h/(a*a)+c*c/(o*o);u>1&&(u=Math.sqrt(u),a*=u,o*=u);const p=a*a,k=o*o,y=p*k-p*c*c-k*h*h,m=p*c*c+k*h*h,w=(r===i?-1:1)*Math.sqrt(Math.abs(y/m));g=w*a*c/o+(t+s)/2,b=w*-o*h/a+(e+n)/2,f=Math.asin(parseFloat(((e-b)/o).toFixed(9))),d=Math.asin(parseFloat(((n-b)/o).toFixed(9))),t<g&&(f=Math.PI-f),s<g&&(d=Math.PI-d),f<0&&(f=2*Math.PI+f),d<0&&(d=2*Math.PI+d),i&&f>d&&(f-=2*Math.PI),!i&&d>f&&(d-=2*Math.PI);}let y=d-f;if(Math.abs(y)>120*Math.PI/180){const t=d,e=s,r=n;d=i&&d>f?f+120*Math.PI/180*1:f+120*Math.PI/180*-1,p=k(s=g+a*Math.cos(d),n=b+o*Math.sin(d),e,r,a,o,h,0,i,[d,t,g,b]);}y=d-f;const m=Math.cos(f),w=Math.sin(f),x=Math.cos(d),P=Math.sin(d),v=Math.tan(y/4),O=4/3*a*v,S=4/3*o*v,L=[t,e],T=[t+O*w,e-S*m],D=[s+O*P,n-S*x],A=[s,n];if(T[0]=2*L[0]-T[0],T[1]=2*L[1]-T[1],c)return [T,D,A].concat(p);{p=[T,D,A].concat(p);const t=[];for(let e=0;e<p.length;e+=3){const s=M(p[e][0],p[e][1],l),n=M(p[e+1][0],p[e+1][1],l),a=M(p[e+2][0],p[e+2][1],l);t.push([s[0],s[1],n[0],n[1],a[0],a[1]]);}return t}}const b={randOffset:function(t,e){return A(t,e)},randOffsetWithRange:function(t,e,s){return D(t,e,s)},ellipse:function(t,e,s,n,a){const o=P(s,n,a);return v(t,e,a,o).opset},doubleLineOps:function(t,e,s,n,a){return I(t,e,s,n,a,!0)}};function y(t,e,s,n,a){return {type:"path",ops:I(t,e,s,n,a)}}function m(t,e,s){const n=(t||[]).length;if(n>2){const a=[];for(let e=0;e<n-1;e++)a.push(...I(t[e][0],t[e][1],t[e+1][0],t[e+1][1],s));return e&&a.push(...I(t[n-1][0],t[n-1][1],t[0][0],t[0][1],s)),{type:"path",ops:a}}return 2===n?y(t[0][0],t[0][1],t[1][0],t[1][1],s):{type:"path",ops:[]}}function w(t,e,s,n,a){return function(t,e){return m(t,!0,e)}([[t,e],[t+s,e],[t+s,e+n],[t,e+n]],a)}function x(t,e){let s=_(t,1*(1+.2*e.roughness),e);if(!e.disableMultiStroke){const n=_(t,1.5*(1+.22*e.roughness),function(t){const e=Object.assign({},t);e.randomizer=void 0,t.seed&&(e.seed=t.seed+1);return e}(e));s=s.concat(n);}return {type:"path",ops:s}}function P(t,e,s){const n=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(e/2,2))/2)),a=Math.ceil(Math.max(s.curveStepCount,s.curveStepCount/Math.sqrt(200)*n)),o=2*Math.PI/a;let h=Math.abs(t/2),r=Math.abs(e/2);const i=1-s.curveFitting;return h+=A(h*i,s),r+=A(r*i,s),{increment:o,rx:h,ry:r}}function v(t,e,s,n){const[a,o]=z(n.increment,t,e,n.rx,n.ry,1,n.increment*D(.1,D(.4,1,s),s),s);let h=W(a,null,s);if(!s.disableMultiStroke&&0!==s.roughness){const[a]=z(n.increment,t,e,n.rx,n.ry,1.5,0,s),o=W(a,null,s);h=h.concat(o);}return {estimatedPoints:o,opset:{type:"path",ops:h}}}function O(t,e,s,n,a,o,h,r,i){const c=t,l=e;let u=Math.abs(s/2),p=Math.abs(n/2);u+=A(.01*u,i),p+=A(.01*p,i);let f=a,d=o;for(;f<0;)f+=2*Math.PI,d+=2*Math.PI;d-f>2*Math.PI&&(f=0,d=2*Math.PI);const g=2*Math.PI/i.curveStepCount,M=Math.min(g/2,(d-f)/2),k=E(M,c,l,u,p,f,d,1,i);if(!i.disableMultiStroke){const t=E(M,c,l,u,p,f,d,1.5,i);k.push(...t);}return h&&(r?k.push(...I(c,l,c+u*Math.cos(f),l+p*Math.sin(f),i),...I(c,l,c+u*Math.cos(d),l+p*Math.sin(d),i)):k.push({op:"lineTo",data:[c,l]},{op:"lineTo",data:[c+u*Math.cos(f),l+p*Math.sin(f)]})),{type:"path",ops:k}}function S(t,e){const s=[];for(const n of t)if(n.length){const t=e.maxRandomnessOffset||0,a=n.length;if(a>2){s.push({op:"move",data:[n[0][0]+A(t,e),n[0][1]+A(t,e)]});for(let o=1;o<a;o++)s.push({op:"lineTo",data:[n[o][0]+A(t,e),n[o][1]+A(t,e)]});}}return {type:"fillPath",ops:s}}function L(t,e){return function(t,e){let s=t.fillStyle||"hachure";if(!c[s])switch(s){case"zigzag":c[s]||(c[s]=new a(e));break;case"cross-hatch":c[s]||(c[s]=new o(e));break;case"dots":c[s]||(c[s]=new h(e));break;case"dashed":c[s]||(c[s]=new r(e));break;case"zigzag-line":c[s]||(c[s]=new i(e));break;case"hachure":default:s="hachure",c[s]||(c[s]=new n(e));}return c[s]}(e,b).fillPolygons(t,e)}function T(t){return t.randomizer||(t.randomizer=new l(t.seed||0)),t.randomizer.next()}function D(t,e,s,n=1){return s.roughness*n*(T(s)*(e-t)+t)}function A(t,e,s=1){return D(-t,t,e,s)}function I(t,e,s,n,a,o=!1){const h=o?a.disableMultiStrokeFill:a.disableMultiStroke,r=C(t,e,s,n,a,!0,!1);if(h)return r;const i=C(t,e,s,n,a,!0,!0);return r.concat(i)}function C(t,e,s,n,a,o,h){const r=Math.pow(t-s,2)+Math.pow(e-n,2),i=Math.sqrt(r);let c=1;c=i<200?1:i>500?.4:-.0016668*i+1.233334;let l=a.maxRandomnessOffset||0;l*l*100>r&&(l=i/10);const u=l/2,p=.2+.2*T(a);let f=a.bowing*a.maxRandomnessOffset*(n-e)/200,d=a.bowing*a.maxRandomnessOffset*(t-s)/200;f=A(f,a,c),d=A(d,a,c);const g=[],M=()=>A(u,a,c),k=()=>A(l,a,c),b=a.preserveVertices;return o&&(h?g.push({op:"move",data:[t+(b?0:M()),e+(b?0:M())]}):g.push({op:"move",data:[t+(b?0:A(l,a,c)),e+(b?0:A(l,a,c))]})),h?g.push({op:"bcurveTo",data:[f+t+(s-t)*p+M(),d+e+(n-e)*p+M(),f+t+2*(s-t)*p+M(),d+e+2*(n-e)*p+M(),s+(b?0:M()),n+(b?0:M())]}):g.push({op:"bcurveTo",data:[f+t+(s-t)*p+k(),d+e+(n-e)*p+k(),f+t+2*(s-t)*p+k(),d+e+2*(n-e)*p+k(),s+(b?0:k()),n+(b?0:k())]}),g}function _(t,e,s){const n=[];n.push([t[0][0]+A(e,s),t[0][1]+A(e,s)]),n.push([t[0][0]+A(e,s),t[0][1]+A(e,s)]);for(let a=1;a<t.length;a++)n.push([t[a][0]+A(e,s),t[a][1]+A(e,s)]),a===t.length-1&&n.push([t[a][0]+A(e,s),t[a][1]+A(e,s)]);return W(n,null,s)}function W(t,e,s){const n=t.length,a=[];if(n>3){const o=[],h=1-s.curveTightness;a.push({op:"move",data:[t[1][0],t[1][1]]});for(let e=1;e+2<n;e++){const s=t[e];o[0]=[s[0],s[1]],o[1]=[s[0]+(h*t[e+1][0]-h*t[e-1][0])/6,s[1]+(h*t[e+1][1]-h*t[e-1][1])/6],o[2]=[t[e+1][0]+(h*t[e][0]-h*t[e+2][0])/6,t[e+1][1]+(h*t[e][1]-h*t[e+2][1])/6],o[3]=[t[e+1][0],t[e+1][1]],a.push({op:"bcurveTo",data:[o[1][0],o[1][1],o[2][0],o[2][1],o[3][0],o[3][1]]});}if(e&&2===e.length){const t=s.maxRandomnessOffset;a.push({op:"lineTo",data:[e[0]+A(t,s),e[1]+A(t,s)]});}}else 3===n?(a.push({op:"move",data:[t[1][0],t[1][1]]}),a.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===n&&a.push(...I(t[0][0],t[0][1],t[1][0],t[1][1],s));return a}function z(t,e,s,n,a,o,h,r){const i=[],c=[];if(0===r.roughness){t/=4,c.push([e+n*Math.cos(-t),s+a*Math.sin(-t)]);for(let o=0;o<=2*Math.PI;o+=t){const t=[e+n*Math.cos(o),s+a*Math.sin(o)];i.push(t),c.push(t);}c.push([e+n*Math.cos(0),s+a*Math.sin(0)]),c.push([e+n*Math.cos(t),s+a*Math.sin(t)]);}else {const l=A(.5,r)-Math.PI/2;c.push([A(o,r)+e+.9*n*Math.cos(l-t),A(o,r)+s+.9*a*Math.sin(l-t)]);const u=2*Math.PI+l-.01;for(let h=l;h<u;h+=t){const t=[A(o,r)+e+n*Math.cos(h),A(o,r)+s+a*Math.sin(h)];i.push(t),c.push(t);}c.push([A(o,r)+e+n*Math.cos(l+2*Math.PI+.5*h),A(o,r)+s+a*Math.sin(l+2*Math.PI+.5*h)]),c.push([A(o,r)+e+.98*n*Math.cos(l+h),A(o,r)+s+.98*a*Math.sin(l+h)]),c.push([A(o,r)+e+.9*n*Math.cos(l+.5*h),A(o,r)+s+.9*a*Math.sin(l+.5*h)]);}return [c,i]}function E(t,e,s,n,a,o,h,r,i){const c=o+A(.1,i),l=[];l.push([A(r,i)+e+.9*n*Math.cos(c-t),A(r,i)+s+.9*a*Math.sin(c-t)]);for(let o=c;o<=h;o+=t)l.push([A(r,i)+e+n*Math.cos(o),A(r,i)+s+a*Math.sin(o)]);return l.push([e+n*Math.cos(h),s+a*Math.sin(h)]),l.push([e+n*Math.cos(h),s+a*Math.sin(h)]),W(l,null,i)}function $(t,e,s,n,a,o,h,r){const i=[],c=[r.maxRandomnessOffset||1,(r.maxRandomnessOffset||1)+.3];let l=[0,0];const u=r.disableMultiStroke?1:2,p=r.preserveVertices;for(let f=0;f<u;f++)0===f?i.push({op:"move",data:[h[0],h[1]]}):i.push({op:"move",data:[h[0]+(p?0:A(c[0],r)),h[1]+(p?0:A(c[0],r))]}),l=p?[a,o]:[a+A(c[f],r),o+A(c[f],r)],i.push({op:"bcurveTo",data:[t+A(c[f],r),e+A(c[f],r),s+A(c[f],r),n+A(c[f],r),l[0],l[1]]});return i}function G(t){return [...t]}function R(t,e){return Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)}function q(t,e,s){const n=R(e,s);if(0===n)return R(t,e);let a=((t[0]-e[0])*(s[0]-e[0])+(t[1]-e[1])*(s[1]-e[1]))/n;return a=Math.max(0,Math.min(1,a)),R(t,j(e,s,a))}function j(t,e,s){return [t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]}function F(t,e,s,n){const a=n||[];if(function(t,e){const s=t[e+0],n=t[e+1],a=t[e+2],o=t[e+3];let h=3*n[0]-2*s[0]-o[0];h*=h;let r=3*n[1]-2*s[1]-o[1];r*=r;let i=3*a[0]-2*o[0]-s[0];i*=i;let c=3*a[1]-2*o[1]-s[1];return c*=c,h<i&&(h=i),r<c&&(r=c),h+r}(t,e)<s){const s=t[e+0];if(a.length){(o=a[a.length-1],h=s,Math.sqrt(R(o,h)))>1&&a.push(s);}else a.push(s);a.push(t[e+3]);}else {const n=.5,o=t[e+0],h=t[e+1],r=t[e+2],i=t[e+3],c=j(o,h,n),l=j(h,r,n),u=j(r,i,n),p=j(c,l,n),f=j(l,u,n),d=j(p,f,n);F([o,c,p,d],0,s,a),F([d,f,u,i],0,s,a);}var o,h;return a}function V(t,e){return Z(t,0,t.length,e)}function Z(t,e,s,n,a){const o=a||[],h=t[e],r=t[s-1];let i=0,c=1;for(let n=e+1;n<s-1;++n){const e=q(t[n],h,r);e>i&&(i=e,c=n);}return Math.sqrt(i)>n?(Z(t,e,c+1,n,o),Z(t,c,s,n,o)):(o.length||o.push(h),o.push(r)),o}function Q(t,e=.15,s){const n=[],a=(t.length-1)/3;for(let s=0;s<a;s++){F(t,3*s,e,n);}return s&&s>0?Z(n,0,n.length,s):n}const H="none";class N{constructor(t){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1},this.config=t||{},this.config.options&&(this.defaultOptions=this._o(this.config.options));}static newSeed(){return Math.floor(Math.random()*2**31)}_o(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}_d(t,e,s){return {shape:t,sets:e||[],options:s||this.defaultOptions}}line(t,e,s,n,a){const o=this._o(a);return this._d("line",[y(t,e,s,n,o)],o)}rectangle(t,e,s,n,a){const o=this._o(a),h=[],r=w(t,e,s,n,o);if(o.fill){const a=[[t,e],[t+s,e],[t+s,e+n],[t,e+n]];"solid"===o.fillStyle?h.push(S([a],o)):h.push(L([a],o));}return o.stroke!==H&&h.push(r),this._d("rectangle",h,o)}ellipse(t,e,s,n,a){const o=this._o(a),h=[],r=P(s,n,o),i=v(t,e,o,r);if(o.fill)if("solid"===o.fillStyle){const s=v(t,e,o,r).opset;s.type="fillPath",h.push(s);}else h.push(L([i.estimatedPoints],o));return o.stroke!==H&&h.push(i.opset),this._d("ellipse",h,o)}circle(t,e,s,n){const a=this.ellipse(t,e,s,s,n);return a.shape="circle",a}linearPath(t,e){const s=this._o(e);return this._d("linearPath",[m(t,!1,s)],s)}arc(t,e,s,n,a,o,h=!1,r){const i=this._o(r),c=[],l=O(t,e,s,n,a,o,h,!0,i);if(h&&i.fill)if("solid"===i.fillStyle){const h=Object.assign({},i);h.disableMultiStroke=!0;const r=O(t,e,s,n,a,o,!0,!1,h);r.type="fillPath",c.push(r);}else c.push(function(t,e,s,n,a,o,h){const r=t,i=e;let c=Math.abs(s/2),l=Math.abs(n/2);c+=A(.01*c,h),l+=A(.01*l,h);let u=a,p=o;for(;u<0;)u+=2*Math.PI,p+=2*Math.PI;p-u>2*Math.PI&&(u=0,p=2*Math.PI);const f=(p-u)/h.curveStepCount,d=[];for(let t=u;t<=p;t+=f)d.push([r+c*Math.cos(t),i+l*Math.sin(t)]);return d.push([r+c*Math.cos(p),i+l*Math.sin(p)]),d.push([r,i]),L([d],h)}(t,e,s,n,a,o,i));return i.stroke!==H&&c.push(l),this._d("arc",c,i)}curve(t,e){const s=this._o(e),n=[],a=x(t,s);if(s.fill&&s.fill!==H&&t.length>=3){const e=Q(function(t,e=0){const s=t.length;if(s<3)throw new Error("A curve must have at least three points.");const n=[];if(3===s)n.push(G(t[0]),G(t[1]),G(t[2]),G(t[2]));else {const s=[];s.push(t[0],t[0]);for(let e=1;e<t.length;e++)s.push(t[e]),e===t.length-1&&s.push(t[e]);const a=[],o=1-e;n.push(G(s[0]));for(let t=1;t+2<s.length;t++){const e=s[t];a[0]=[e[0],e[1]],a[1]=[e[0]+(o*s[t+1][0]-o*s[t-1][0])/6,e[1]+(o*s[t+1][1]-o*s[t-1][1])/6],a[2]=[s[t+1][0]+(o*s[t][0]-o*s[t+2][0])/6,s[t+1][1]+(o*s[t][1]-o*s[t+2][1])/6],a[3]=[s[t+1][0],s[t+1][1]],n.push(a[1],a[2],a[3]);}}return n}(t),10,(1+s.roughness)/2);"solid"===s.fillStyle?n.push(S([e],s)):n.push(L([e],s));}return s.stroke!==H&&n.push(a),this._d("curve",n,s)}polygon(t,e){const s=this._o(e),n=[],a=m(t,!0,s);return s.fill&&("solid"===s.fillStyle?n.push(S([t],s)):n.push(L([t],s))),s.stroke!==H&&n.push(a),this._d("polygon",n,s)}path(t,e){const s=this._o(e),n=[];if(!t)return this._d("path",n,s);t=(t||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const a=s.fill&&"transparent"!==s.fill&&s.fill!==H,o=s.stroke!==H,h=!!(s.simplification&&s.simplification<1),r=function(t,e,s){const n=g(d(f(t))),a=[];let o=[],h=[0,0],r=[];const i=()=>{r.length>=4&&o.push(...Q(r,e)),r=[];},c=()=>{i(),o.length&&(a.push(o),o=[]);};for(const{key:t,data:e}of n)switch(t){case"M":c(),h=[e[0],e[1]],o.push(h);break;case"L":i(),o.push([e[0],e[1]]);break;case"C":if(!r.length){const t=o.length?o[o.length-1]:h;r.push([t[0],t[1]]);}r.push([e[0],e[1]]),r.push([e[2],e[3]]),r.push([e[4],e[5]]);break;case"Z":i(),o.push([h[0],h[1]]);}if(c(),!s)return a;const l=[];for(const t of a){const e=V(t,s);e.length&&l.push(e);}return l}(t,1,h?4-4*s.simplification:(1+s.roughness)/2);return a&&("solid"===s.fillStyle?n.push(S(r,s)):n.push(L(r,s))),o&&(h?r.forEach((t=>{n.push(m(t,!1,s));})):n.push(function(t,e){const s=g(d(f(t))),n=[];let a=[0,0],o=[0,0];for(const{key:t,data:h}of s)switch(t){case"M":{const t=1*(e.maxRandomnessOffset||0),s=e.preserveVertices;n.push({op:"move",data:h.map((n=>n+(s?0:A(t,e))))}),o=[h[0],h[1]],a=[h[0],h[1]];break}case"L":n.push(...I(o[0],o[1],h[0],h[1],e)),o=[h[0],h[1]];break;case"C":{const[t,s,a,r,i,c]=h;n.push(...$(t,s,a,r,i,c,o,e)),o=[i,c];break}case"Z":n.push(...I(o[0],o[1],a[0],a[1],e)),o=[a[0],a[1]];}return {type:"path",ops:n}}(t,s))),this._d("path",n,s)}opsToPath(t,e){let s="";for(const n of t.ops){const t="number"==typeof e&&e>=0?n.data.map((t=>+t.toFixed(e))):n.data;switch(n.op){case"move":s+=`M${t[0]} ${t[1]} `;break;case"bcurveTo":s+=`C${t[0]} ${t[1]}, ${t[2]} ${t[3]}, ${t[4]} ${t[5]} `;break;case"lineTo":s+=`L${t[0]} ${t[1]} `;}}return s.trim()}toPaths(t){const e=t.sets||[],s=t.options||this.defaultOptions,n=[];for(const t of e){let e=null;switch(t.type){case"path":e={d:this.opsToPath(t),stroke:s.stroke,strokeWidth:s.strokeWidth,fill:H};break;case"fillPath":e={d:this.opsToPath(t),stroke:H,strokeWidth:0,fill:s.fill||H};break;case"fillSketch":e=this.fillSketch(t,s);}e&&n.push(e);}return n}fillSketch(t,e){let s=e.fillWeight;return s<0&&(s=e.strokeWidth/2),{d:this.opsToPath(t),stroke:e.fill||H,strokeWidth:s,fill:H}}}class B{constructor(t,e){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.gen=new N(e);}draw(t){const e=t.sets||[],s=t.options||this.getDefaultOptions(),n=this.ctx,a=t.options.fixedDecimalPlaceDigits;for(const o of e)switch(o.type){case"path":n.save(),n.strokeStyle="none"===s.stroke?"transparent":s.stroke,n.lineWidth=s.strokeWidth,s.strokeLineDash&&n.setLineDash(s.strokeLineDash),s.strokeLineDashOffset&&(n.lineDashOffset=s.strokeLineDashOffset),this._drawToContext(n,o,a),n.restore();break;case"fillPath":{n.save(),n.fillStyle=s.fill||"";const e="curve"===t.shape||"polygon"===t.shape||"path"===t.shape?"evenodd":"nonzero";this._drawToContext(n,o,a,e),n.restore();break}case"fillSketch":this.fillSketch(n,o,s);}}fillSketch(t,e,s){let n=s.fillWeight;n<0&&(n=s.strokeWidth/2),t.save(),s.fillLineDash&&t.setLineDash(s.fillLineDash),s.fillLineDashOffset&&(t.lineDashOffset=s.fillLineDashOffset),t.strokeStyle=s.fill||"",t.lineWidth=n,this._drawToContext(t,e,s.fixedDecimalPlaceDigits),t.restore();}_drawToContext(t,e,s,n="nonzero"){t.beginPath();for(const n of e.ops){const e="number"==typeof s&&s>=0?n.data.map((t=>+t.toFixed(s))):n.data;switch(n.op){case"move":t.moveTo(e[0],e[1]);break;case"bcurveTo":t.bezierCurveTo(e[0],e[1],e[2],e[3],e[4],e[5]);break;case"lineTo":t.lineTo(e[0],e[1]);}}"fillPath"===e.type?t.fill(n):t.stroke();}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(t,e,s,n,a){const o=this.gen.line(t,e,s,n,a);return this.draw(o),o}rectangle(t,e,s,n,a){const o=this.gen.rectangle(t,e,s,n,a);return this.draw(o),o}ellipse(t,e,s,n,a){const o=this.gen.ellipse(t,e,s,n,a);return this.draw(o),o}circle(t,e,s,n){const a=this.gen.circle(t,e,s,n);return this.draw(a),a}linearPath(t,e){const s=this.gen.linearPath(t,e);return this.draw(s),s}polygon(t,e){const s=this.gen.polygon(t,e);return this.draw(s),s}arc(t,e,s,n,a,o,h=!1,r){const i=this.gen.arc(t,e,s,n,a,o,h,r);return this.draw(i),i}curve(t,e){const s=this.gen.curve(t,e);return this.draw(s),s}path(t,e){const s=this.gen.path(t,e);return this.draw(s),s}}const J="http://www.w3.org/2000/svg";class K{constructor(t,e){this.svg=t,this.gen=new N(e);}draw(t){const e=t.sets||[],s=t.options||this.getDefaultOptions(),n=this.svg.ownerDocument||window.document,a=n.createElementNS(J,"g"),o=t.options.fixedDecimalPlaceDigits;for(const h of e){let e=null;switch(h.type){case"path":e=n.createElementNS(J,"path"),e.setAttribute("d",this.opsToPath(h,o)),e.setAttribute("stroke",s.stroke),e.setAttribute("stroke-width",s.strokeWidth+""),e.setAttribute("fill","none"),s.strokeLineDash&&e.setAttribute("stroke-dasharray",s.strokeLineDash.join(" ").trim()),s.strokeLineDashOffset&&e.setAttribute("stroke-dashoffset",`${s.strokeLineDashOffset}`);break;case"fillPath":e=n.createElementNS(J,"path"),e.setAttribute("d",this.opsToPath(h,o)),e.setAttribute("stroke","none"),e.setAttribute("stroke-width","0"),e.setAttribute("fill",s.fill||""),"curve"!==t.shape&&"polygon"!==t.shape||e.setAttribute("fill-rule","evenodd");break;case"fillSketch":e=this.fillSketch(n,h,s);}e&&a.appendChild(e);}return a}fillSketch(t,e,s){let n=s.fillWeight;n<0&&(n=s.strokeWidth/2);const a=t.createElementNS(J,"path");return a.setAttribute("d",this.opsToPath(e,s.fixedDecimalPlaceDigits)),a.setAttribute("stroke",s.fill||""),a.setAttribute("stroke-width",n+""),a.setAttribute("fill","none"),s.fillLineDash&&a.setAttribute("stroke-dasharray",s.fillLineDash.join(" ").trim()),s.fillLineDashOffset&&a.setAttribute("stroke-dashoffset",`${s.fillLineDashOffset}`),a}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(t,e){return this.gen.opsToPath(t,e)}line(t,e,s,n,a){const o=this.gen.line(t,e,s,n,a);return this.draw(o)}rectangle(t,e,s,n,a){const o=this.gen.rectangle(t,e,s,n,a);return this.draw(o)}ellipse(t,e,s,n,a){const o=this.gen.ellipse(t,e,s,n,a);return this.draw(o)}circle(t,e,s,n){const a=this.gen.circle(t,e,s,n);return this.draw(a)}linearPath(t,e){const s=this.gen.linearPath(t,e);return this.draw(s)}polygon(t,e){const s=this.gen.polygon(t,e);return this.draw(s)}arc(t,e,s,n,a,o,h=!1,r){const i=this.gen.arc(t,e,s,n,a,o,h,r);return this.draw(i)}curve(t,e){const s=this.gen.curve(t,e);return this.draw(s)}path(t,e){const s=this.gen.path(t,e);return this.draw(s)}}var U={canvas:(t,e)=>new B(t,e),svg:(t,e)=>new K(t,e),generator:t=>new N(t),newSeed:()=>N.newSeed()};

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
var AnimationType = /* @__PURE__ */ ((AnimationType2) => {
  AnimationType2["ACTIVE"] = "active";
  AnimationType2["ALWAYS"] = "always";
  AnimationType2["NONE"] = "none";
  return AnimationType2;
})(AnimationType || {});
class HandDrawnBase extends s$1 {
  constructor() {
    super();
    this.renderType = "svg" /* SVG */;
    this.animationType = "always" /* ALWAYS */;
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
    if (this.animationType === "always" /* ALWAYS */) {
      this.roughOps.seed = 0;
      this.performAnimation(true);
    } else if (this.animationType === "active" /* ACTIVE */) {
      this.roughOps.seed = 0;
      this.performAnimation(this.isFocus || this.isMouseIn);
    } else if (this.animationType === "none" /* NONE */) {
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
          case "canvas" /* CANVAS */: {
            const roughDrawEl = document.createElement("canvas");
            roughDrawEl.classList.add("rough-context");
            roughParentEl.append(roughDrawEl);
            const roughDrawInstance = U.canvas(roughDrawEl);
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
          case "svg" /* SVG */: {
            const roughDrawEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            roughDrawEl.classList.add("rough-context");
            roughParentEl.append(roughDrawEl);
            const roughDrawInstance = U.svg(roughDrawEl);
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
    return r$3`
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
    return $$1`
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
      r$3`
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
  n$2("hand-drawn-button")
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
      case "loading" /* LOADING */:
        (_a = this.icon) == null ? void 0 : _a.classList.add("rotate");
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
      case "loading" /* LOADING */:
        nodeArray = this.iconLoading(roughObj);
        break;
      case "cross" /* CROSS */:
        nodeArray = this.iconCross(roughObj);
        break;
      case "tick" /* TICK */:
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
    return $$1`
        <div id="icon" class="icon rough"></div>
    `;
  }
  static get styles() {
    return [
      super.styles,
      r$3`
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
  i$1("#icon")
], HandDrawnIcon.prototype, "icon", 2);
__decorateClass$e([
  e$2({ type: String })
], HandDrawnIcon.prototype, "type", 2);
HandDrawnIcon = __decorateClass$e([
  n$2("hand-drawn-icon")
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
    return $$1`
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
      r$3`
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
  n$2("hand-drawn-pad")
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
    return $$1`
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
      r$3`
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
  i$1("input")
], HandDrawnInput.prototype, "inputEl", 2);
HandDrawnInput = __decorateClass$c([
  n$2("hand-drawn-input")
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
    return $$1`
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
      r$3`
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
  i$1("textarea")
], HandDrawnTextarea.prototype, "textareaEl", 2);
HandDrawnTextarea = __decorateClass$b([
  n$2("hand-drawn-textarea")
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
    return $$1`
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
      r$3`
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
  i$1("input")
], HandDrawnCheckbox.prototype, "input", 2);
HandDrawnCheckbox = __decorateClass$a([
  n$2("hand-drawn-checkbox")
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
    return $$1`
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
      r$3`
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
  i$1("slot")
], HandDrawnCheckboxGroup.prototype, "slotEl", 2);
__decorateClass$9([
  e$2({ type: Array })
], HandDrawnCheckboxGroup.prototype, "checkedValues", 2);
HandDrawnCheckboxGroup = __decorateClass$9([
  n$2("hand-drawn-checkbox-group")
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
    return $$1`
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
      r$3`
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
  n$2("hand-drawn-radio")
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
    return $$1`
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
      r$3`
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
  i$1("slot")
], HandDrawnRadioGroup.prototype, "slotEl", 2);
__decorateClass$7([
  e$2({ type: String })
], HandDrawnRadioGroup.prototype, "checkedValue", 2);
HandDrawnRadioGroup = __decorateClass$7([
  n$2("hand-drawn-radio-group")
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
      return $$1`
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
      return $$1``;
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
      r$3`
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
  n$2("hand-drawn-dialog")
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
    return $$1`
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
      r$3`
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
  i$1("input")
], HandDrawnSwitch.prototype, "input", 2);
HandDrawnSwitch = __decorateClass$5([
  n$2("hand-drawn-switch")
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
    return $$1`
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
      r$3`
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
  n$2("hand-drawn-anchor")
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
    return $$1`
        <div id="progressWrapper" class="rough progress-wrapper">
            <div id="progressBar" class="rough progress-bar"></div>
            <div class="progress-bar-mask" style="width: ${100 - (this.value || 0)}%"></div>
            ${this.isShowPercent ? $$1`
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
      r$3`
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
  n$2("hand-drawn-progress")
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
    return $$1`
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
      r$3`
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
  n$2("hand-drawn-slider")
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
    this.focusItemIndex = -1;
    this.itemLength = 0;
  }
  render() {
    var _a;
    return $$1`
            <div class="selector-wrapper" ?disabled="${this.disabled}">
                <div class="rough selector-text" ?disabled="${this.disabled}" @click="${this.showItemListHandler}">
                    <div style="overflow: hidden">
                        <span style="${((_a = this.selectedName) == null ? void 0 : _a.length) ? "display:none" : "color:#ccc"}">${this.placeholder}</span>
                        <span>${this.selectedName}</span>
                    </div>
                </div>
                <div id="dot" class="selector-dot rough"></div>
                <div class="rough selector-list" style="${this.isShowItemList ? "" : "display:none"}">
                    <div id="itemListScroll" class="selector-list-scroll">
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
      if (!this.isShowItemList) {
        this.focusItemIndex = -1;
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
            this.closeItemListHandler();
          }
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
        this.showItemListHandler();
        this.focusItemIndex = Math.max(0, this.focusItemIndex - 1);
        this.setItemState();
        e.stopPropagation();
        e.preventDefault();
        break;
      case "ArrowDown":
        this.showItemListHandler();
        this.focusItemIndex = Math.min(this.itemLength - 1, this.focusItemIndex + 1);
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
    this.focusItem = null;
    els.forEach((itemEl, index) => {
      itemEl.disabled = this.disabled || itemEl.disabled;
      itemEl.isHover = index === this.focusItemIndex;
      if (itemEl.isHover) {
        this.focusItem = { value: itemEl.value, name: itemEl.name };
        if (this.itemListScrollEl) {
          this.itemListScrollEl.scrollTop = itemEl.offsetTop;
        }
      }
      itemEl.checked = this.selectedValue === itemEl.value;
      if (itemEl.checked) {
        this.selectedName = itemEl.name;
      }
      if (!itemEl.selectedColor) {
        itemEl.selectedColor = this.selectedColor;
      }
    });
  }
  static get styles() {
    return [
      super.styles,
      r$3`
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
                padding: 0 2px 2px 0;
                margin: 0;
                overflow: hidden;
                z-index: 100;
                display: block;
                width: 100%;
              }

              .selector-list-scroll {
                position: relative;
                padding: 0.5em 0.8em;
                max-height: 12em;
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
  i$1("slot")
], HandDrawnSelector.prototype, "slotEl", 2);
__decorateClass$1([
  i$1("#itemListScroll")
], HandDrawnSelector.prototype, "itemListScrollEl", 2);
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
  n$2("hand-drawn-selector")
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
    this.selectedColor = null;
    this.isHover = false;
    this.isMouseDown = false;
    this.itemMouseUpHandler = this.itemMouseUpHandlerTmp.bind(this);
    this.attachShadow({ mode: "open" });
  }
  render() {
    return $$1`
            <div
                    class="item"
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
      r$3`
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
  n$2("hand-drawn-item")
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
