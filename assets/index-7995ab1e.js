(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function dr(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function hr(e){if(x(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=X(r)?Pi(r):hr(r);if(s)for(const o in s)t[o]=s[o]}return t}else{if(X(e))return e;if(Y(e))return e}}const Oi=/;(?![^(]*\))/g,xi=/:([^]+)/,Mi=/\/\*.*?\*\//gs;function Pi(e){const t={};return e.replace(Mi,"").split(Oi).forEach(n=>{if(n){const r=n.split(xi);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function pr(e){let t="";if(X(e))t=e;else if(x(e))for(let n=0;n<e.length;n++){const r=pr(e[n]);r&&(t+=r+" ")}else if(Y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Bi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ni=dr(Bi);function Gs(e){return!!e||e===""}const K={},ht=[],ye=()=>{},$i=()=>!1,Ri=/^on[^a-z]/,Qt=e=>Ri.test(e),gr=e=>e.startsWith("onUpdate:"),te=Object.assign,mr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ki=Object.prototype.hasOwnProperty,N=(e,t)=>ki.call(e,t),x=Array.isArray,Tt=e=>en(e)==="[object Map]",Fi=e=>en(e)==="[object Set]",M=e=>typeof e=="function",X=e=>typeof e=="string",br=e=>typeof e=="symbol",Y=e=>e!==null&&typeof e=="object",Xs=e=>Y(e)&&M(e.then)&&M(e.catch),Li=Object.prototype.toString,en=e=>Li.call(e),ji=e=>en(e).slice(8,-1),Hi=e=>en(e)==="[object Object]",yr=e=>X(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Vt=dr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ki=/-(\w)/g,mt=tn(e=>e.replace(Ki,(t,n)=>n?n.toUpperCase():"")),Ui=/\B([A-Z])/g,yt=tn(e=>e.replace(Ui,"-$1").toLowerCase()),Zs=tn(e=>e.charAt(0).toUpperCase()+e.slice(1)),mn=tn(e=>e?`on${Zs(e)}`:""),Jt=(e,t)=>!Object.is(e,t),bn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Yt=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Vi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let es;const Wi=()=>es||(es=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let he;class zi{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=he,!t&&he&&(this.index=(he.scopes||(he.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=he;try{return he=this,t()}finally{he=n}}}on(){he=this}off(){he=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function qi(e,t=he){t&&t.active&&t.effects.push(e)}function Ji(){return he}const _r=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Qs=e=>(e.w&Ke)>0,eo=e=>(e.n&Ke)>0,Yi=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ke},Gi=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];Qs(s)&&!eo(s)?s.delete(e):t[n++]=s,s.w&=~Ke,s.n&=~Ke}t.length=n}},Hn=new WeakMap;let Ct=0,Ke=1;const Kn=30;let ge;const tt=Symbol(""),Un=Symbol("");class wr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,qi(this,r)}run(){if(!this.active)return this.fn();let t=ge,n=Re;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ge,ge=this,Re=!0,Ke=1<<++Ct,Ct<=Kn?Yi(this):ts(this),this.fn()}finally{Ct<=Kn&&Gi(this),Ke=1<<--Ct,ge=this.parent,Re=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ge===this?this.deferStop=!0:this.active&&(ts(this),this.onStop&&this.onStop(),this.active=!1)}}function ts(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Re=!0;const to=[];function _t(){to.push(Re),Re=!1}function wt(){const e=to.pop();Re=e===void 0?!0:e}function ie(e,t,n){if(Re&&ge){let r=Hn.get(e);r||Hn.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=_r()),no(s)}}function no(e,t){let n=!1;Ct<=Kn?eo(e)||(e.n|=Ke,n=!Qs(e)):n=!e.has(ge),n&&(e.add(ge),ge.deps.push(e))}function Me(e,t,n,r,s,o){const i=Hn.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&x(e)){const c=Number(r);i.forEach((u,d)=>{(d==="length"||d>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":x(e)?yr(n)&&a.push(i.get("length")):(a.push(i.get(tt)),Tt(e)&&a.push(i.get(Un)));break;case"delete":x(e)||(a.push(i.get(tt)),Tt(e)&&a.push(i.get(Un)));break;case"set":Tt(e)&&a.push(i.get(tt));break}if(a.length===1)a[0]&&Vn(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Vn(_r(c))}}function Vn(e,t){const n=x(e)?e:[...e];for(const r of n)r.computed&&ns(r);for(const r of n)r.computed||ns(r)}function ns(e,t){(e!==ge||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Xi=dr("__proto__,__v_isRef,__isVue"),ro=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(br)),Zi=Er(),Qi=Er(!1,!0),ea=Er(!0),rs=ta();function ta(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=R(this);for(let o=0,i=this.length;o<i;o++)ie(r,"get",o+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(R)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){_t();const r=R(this)[t].apply(this,n);return wt(),r}}),e}function na(e){const t=R(this);return ie(t,"has",e),t.hasOwnProperty(e)}function Er(e=!1,t=!1){return function(r,s,o){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&o===(e?t?ya:co:t?ao:io).get(r))return r;const i=x(r);if(!e){if(i&&N(rs,s))return Reflect.get(rs,s,o);if(s==="hasOwnProperty")return na}const a=Reflect.get(r,s,o);return(br(s)?ro.has(s):Xi(s))||(e||ie(r,"get",s),t)?a:se(a)?i&&yr(s)?a:a.value:Y(a)?e?lo(a):Cr(a):a}}const ra=so(),sa=so(!0);function so(e=!1){return function(n,r,s,o){let i=n[r];if(Dt(i)&&se(i)&&!se(s))return!1;if(!e&&(!Wn(s)&&!Dt(s)&&(i=R(i),s=R(s)),!x(n)&&se(i)&&!se(s)))return i.value=s,!0;const a=x(n)&&yr(r)?Number(r)<n.length:N(n,r),c=Reflect.set(n,r,s,o);return n===R(o)&&(a?Jt(s,i)&&Me(n,"set",r,s):Me(n,"add",r,s)),c}}function oa(e,t){const n=N(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Me(e,"delete",t,void 0),r}function ia(e,t){const n=Reflect.has(e,t);return(!br(t)||!ro.has(t))&&ie(e,"has",t),n}function aa(e){return ie(e,"iterate",x(e)?"length":tt),Reflect.ownKeys(e)}const oo={get:Zi,set:ra,deleteProperty:oa,has:ia,ownKeys:aa},ca={get:ea,set(e,t){return!0},deleteProperty(e,t){return!0}},la=te({},oo,{get:Qi,set:sa}),Ir=e=>e,nn=e=>Reflect.getPrototypeOf(e);function Ft(e,t,n=!1,r=!1){e=e.__v_raw;const s=R(e),o=R(t);n||(t!==o&&ie(s,"get",t),ie(s,"get",o));const{has:i}=nn(s),a=r?Ir:n?Sr:Ar;if(i.call(s,t))return a(e.get(t));if(i.call(s,o))return a(e.get(o));e!==s&&e.get(t)}function Lt(e,t=!1){const n=this.__v_raw,r=R(n),s=R(e);return t||(e!==s&&ie(r,"has",e),ie(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function jt(e,t=!1){return e=e.__v_raw,!t&&ie(R(e),"iterate",tt),Reflect.get(e,"size",e)}function ss(e){e=R(e);const t=R(this);return nn(t).has.call(t,e)||(t.add(e),Me(t,"add",e,e)),this}function os(e,t){t=R(t);const n=R(this),{has:r,get:s}=nn(n);let o=r.call(n,e);o||(e=R(e),o=r.call(n,e));const i=s.call(n,e);return n.set(e,t),o?Jt(t,i)&&Me(n,"set",e,t):Me(n,"add",e,t),this}function is(e){const t=R(this),{has:n,get:r}=nn(t);let s=n.call(t,e);s||(e=R(e),s=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return s&&Me(t,"delete",e,void 0),o}function as(){const e=R(this),t=e.size!==0,n=e.clear();return t&&Me(e,"clear",void 0,void 0),n}function Ht(e,t){return function(r,s){const o=this,i=o.__v_raw,a=R(i),c=t?Ir:e?Sr:Ar;return!e&&ie(a,"iterate",tt),i.forEach((u,d)=>r.call(s,c(u),c(d),o))}}function Kt(e,t,n){return function(...r){const s=this.__v_raw,o=R(s),i=Tt(o),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=s[e](...r),d=n?Ir:t?Sr:Ar;return!t&&ie(o,"iterate",c?Un:tt),{next(){const{value:_,done:E}=u.next();return E?{value:_,done:E}:{value:a?[d(_[0]),d(_[1])]:d(_),done:E}},[Symbol.iterator](){return this}}}}function Ne(e){return function(...t){return e==="delete"?!1:this}}function fa(){const e={get(o){return Ft(this,o)},get size(){return jt(this)},has:Lt,add:ss,set:os,delete:is,clear:as,forEach:Ht(!1,!1)},t={get(o){return Ft(this,o,!1,!0)},get size(){return jt(this)},has:Lt,add:ss,set:os,delete:is,clear:as,forEach:Ht(!1,!0)},n={get(o){return Ft(this,o,!0)},get size(){return jt(this,!0)},has(o){return Lt.call(this,o,!0)},add:Ne("add"),set:Ne("set"),delete:Ne("delete"),clear:Ne("clear"),forEach:Ht(!0,!1)},r={get(o){return Ft(this,o,!0,!0)},get size(){return jt(this,!0)},has(o){return Lt.call(this,o,!0)},add:Ne("add"),set:Ne("set"),delete:Ne("delete"),clear:Ne("clear"),forEach:Ht(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Kt(o,!1,!1),n[o]=Kt(o,!0,!1),t[o]=Kt(o,!1,!0),r[o]=Kt(o,!0,!0)}),[e,n,t,r]}const[ua,da,ha,pa]=fa();function vr(e,t){const n=t?e?pa:ha:e?da:ua;return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(N(n,s)&&s in r?n:r,s,o)}const ga={get:vr(!1,!1)},ma={get:vr(!1,!0)},ba={get:vr(!0,!1)},io=new WeakMap,ao=new WeakMap,co=new WeakMap,ya=new WeakMap;function _a(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wa(e){return e.__v_skip||!Object.isExtensible(e)?0:_a(ji(e))}function Cr(e){return Dt(e)?e:Tr(e,!1,oo,ga,io)}function Ea(e){return Tr(e,!1,la,ma,ao)}function lo(e){return Tr(e,!0,ca,ba,co)}function Tr(e,t,n,r,s){if(!Y(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const i=wa(e);if(i===0)return e;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function pt(e){return Dt(e)?pt(e.__v_raw):!!(e&&e.__v_isReactive)}function Dt(e){return!!(e&&e.__v_isReadonly)}function Wn(e){return!!(e&&e.__v_isShallow)}function fo(e){return pt(e)||Dt(e)}function R(e){const t=e&&e.__v_raw;return t?R(t):e}function uo(e){return Yt(e,"__v_skip",!0),e}const Ar=e=>Y(e)?Cr(e):e,Sr=e=>Y(e)?lo(e):e;function Ia(e){Re&&ge&&(e=R(e),no(e.dep||(e.dep=_r())))}function va(e,t){e=R(e);const n=e.dep;n&&Vn(n)}function se(e){return!!(e&&e.__v_isRef===!0)}function Ca(e){return se(e)?e.value:e}const Ta={get:(e,t,n)=>Ca(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return se(s)&&!se(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function ho(e){return pt(e)?e:new Proxy(e,Ta)}var po;class Aa{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[po]=!1,this._dirty=!0,this.effect=new wr(t,()=>{this._dirty||(this._dirty=!0,va(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=R(this);return Ia(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}po="__v_isReadonly";function Sa(e,t,n=!1){let r,s;const o=M(e);return o?(r=e,s=ye):(r=e.get,s=e.set),new Aa(r,s,o||!s,n)}function ke(e,t,n,r){let s;try{s=r?e(...r):e()}catch(o){rn(o,t,n)}return s}function ue(e,t,n,r){if(M(e)){const o=ke(e,t,n,r);return o&&Xs(o)&&o.catch(i=>{rn(i,t,n)}),o}const s=[];for(let o=0;o<e.length;o++)s.push(ue(e[o],t,n,r));return s}function rn(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,a=n;for(;o;){const u=o.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,i,a)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){ke(c,null,10,[e,i,a]);return}}Da(e,n,s,r)}function Da(e,t,n,r=!0){console.error(e)}let Ot=!1,zn=!1;const Q=[];let Ce=0;const gt=[];let Se=null,Xe=0;const go=Promise.resolve();let Dr=null;function Oa(e){const t=Dr||go;return e?t.then(this?e.bind(this):e):t}function xa(e){let t=Ce+1,n=Q.length;for(;t<n;){const r=t+n>>>1;xt(Q[r])<e?t=r+1:n=r}return t}function Or(e){(!Q.length||!Q.includes(e,Ot&&e.allowRecurse?Ce+1:Ce))&&(e.id==null?Q.push(e):Q.splice(xa(e.id),0,e),mo())}function mo(){!Ot&&!zn&&(zn=!0,Dr=go.then(yo))}function Ma(e){const t=Q.indexOf(e);t>Ce&&Q.splice(t,1)}function Pa(e){x(e)?gt.push(...e):(!Se||!Se.includes(e,e.allowRecurse?Xe+1:Xe))&&gt.push(e),mo()}function cs(e,t=Ot?Ce+1:0){for(;t<Q.length;t++){const n=Q[t];n&&n.pre&&(Q.splice(t,1),t--,n())}}function bo(e){if(gt.length){const t=[...new Set(gt)];if(gt.length=0,Se){Se.push(...t);return}for(Se=t,Se.sort((n,r)=>xt(n)-xt(r)),Xe=0;Xe<Se.length;Xe++)Se[Xe]();Se=null,Xe=0}}const xt=e=>e.id==null?1/0:e.id,Ba=(e,t)=>{const n=xt(e)-xt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function yo(e){zn=!1,Ot=!0,Q.sort(Ba);const t=ye;try{for(Ce=0;Ce<Q.length;Ce++){const n=Q[Ce];n&&n.active!==!1&&ke(n,null,14)}}finally{Ce=0,Q.length=0,bo(),Ot=!1,Dr=null,(Q.length||gt.length)&&yo()}}function Na(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let s=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in r){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:_,trim:E}=r[d]||K;E&&(s=n.map(A=>X(A)?A.trim():A)),_&&(s=n.map(Vi))}let a,c=r[a=mn(t)]||r[a=mn(mt(t))];!c&&o&&(c=r[a=mn(yt(t))]),c&&ue(c,e,6,s);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ue(u,e,6,s)}}function _o(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!M(e)){const c=u=>{const d=_o(u,t,!0);d&&(a=!0,te(i,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!a?(Y(e)&&r.set(e,null),null):(x(o)?o.forEach(c=>i[c]=null):te(i,o),Y(e)&&r.set(e,i),i)}function sn(e,t){return!e||!Qt(t)?!1:(t=t.slice(2).replace(/Once$/,""),N(e,t[0].toLowerCase()+t.slice(1))||N(e,yt(t))||N(e,t))}let me=null,wo=null;function Gt(e){const t=me;return me=e,wo=e&&e.type.__scopeId||null,t}function $a(e,t=me,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&bs(-1);const o=Gt(t);let i;try{i=e(...s)}finally{Gt(o),r._d&&bs(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function yn(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[i],slots:a,attrs:c,emit:u,render:d,renderCache:_,data:E,setupState:A,ctx:$,inheritAttrs:S}=e;let z,F;const le=Gt(e);try{if(n.shapeFlag&4){const U=s||r;z=ve(d.call(U,U,_,o,A,E,$)),F=c}else{const U=t;z=ve(U.length>1?U(o,{attrs:c,slots:a,emit:u}):U(o,null)),F=t.props?c:Ra(c)}}catch(U){St.length=0,rn(U,e,1),z=nt(Oe)}let O=z;if(F&&S!==!1){const U=Object.keys(F),{shapeFlag:Z}=O;U.length&&Z&7&&(i&&U.some(gr)&&(F=ka(F,i)),O=Ue(O,F))}return n.dirs&&(O=Ue(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),z=O,Gt(le),z}const Ra=e=>{let t;for(const n in e)(n==="class"||n==="style"||Qt(n))&&((t||(t={}))[n]=e[n]);return t},ka=(e,t)=>{const n={};for(const r in e)(!gr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Fa(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ls(r,i,u):!!i;if(c&8){const d=t.dynamicProps;for(let _=0;_<d.length;_++){const E=d[_];if(i[E]!==r[E]&&!sn(u,E))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?ls(r,i,u):!0:!!i;return!1}function ls(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==e[o]&&!sn(n,o))return!0}return!1}function La({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ja=e=>e.__isSuspense;function Ha(e,t){t&&t.pendingBranch?x(e)?t.effects.push(...e):t.effects.push(e):Pa(e)}function Ka(e,t){if(J){let n=J.provides;const r=J.parent&&J.parent.provides;r===n&&(n=J.provides=Object.create(r)),n[e]=t}}function Wt(e,t,n=!1){const r=J||me;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&M(t)?t.call(r.proxy):t}}const Ut={};function _n(e,t,n){return Eo(e,t,n)}function Eo(e,t,{immediate:n,deep:r,flush:s,onTrack:o,onTrigger:i}=K){const a=Ji()===(J==null?void 0:J.scope)?J:null;let c,u=!1,d=!1;if(se(e)?(c=()=>e.value,u=Wn(e)):pt(e)?(c=()=>e,r=!0):x(e)?(d=!0,u=e.some(O=>pt(O)||Wn(O)),c=()=>e.map(O=>{if(se(O))return O.value;if(pt(O))return dt(O);if(M(O))return ke(O,a,2)})):M(e)?t?c=()=>ke(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return _&&_(),ue(e,a,3,[E])}:c=ye,t&&r){const O=c;c=()=>dt(O())}let _,E=O=>{_=F.onStop=()=>{ke(O,a,4)}},A;if(Pt)if(E=ye,t?n&&ue(t,a,3,[c(),d?[]:void 0,E]):c(),s==="sync"){const O=Hc();A=O.__watcherHandles||(O.__watcherHandles=[])}else return ye;let $=d?new Array(e.length).fill(Ut):Ut;const S=()=>{if(F.active)if(t){const O=F.run();(r||u||(d?O.some((U,Z)=>Jt(U,$[Z])):Jt(O,$)))&&(_&&_(),ue(t,a,3,[O,$===Ut?void 0:d&&$[0]===Ut?[]:$,E]),$=O)}else F.run()};S.allowRecurse=!!t;let z;s==="sync"?z=S:s==="post"?z=()=>oe(S,a&&a.suspense):(S.pre=!0,a&&(S.id=a.uid),z=()=>Or(S));const F=new wr(c,z);t?n?S():$=F.run():s==="post"?oe(F.run.bind(F),a&&a.suspense):F.run();const le=()=>{F.stop(),a&&a.scope&&mr(a.scope.effects,F)};return A&&A.push(le),le}function Ua(e,t,n){const r=this.proxy,s=X(e)?e.includes(".")?Io(r,e):()=>r[e]:e.bind(r,r);let o;M(t)?o=t:(o=t.handler,n=t);const i=J;bt(this);const a=Eo(s,o.bind(r),n);return i?bt(i):rt(),a}function Io(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function dt(e,t){if(!Y(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),se(e))dt(e.value,t);else if(x(e))for(let n=0;n<e.length;n++)dt(e[n],t);else if(Fi(e)||Tt(e))e.forEach(n=>{dt(n,t)});else if(Hi(e))for(const n in e)dt(e[n],t);return e}function Va(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ao(()=>{e.isMounted=!0}),So(()=>{e.isUnmounting=!0}),e}const fe=[Function,Array],Wa={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:fe,onEnter:fe,onAfterEnter:fe,onEnterCancelled:fe,onBeforeLeave:fe,onLeave:fe,onAfterLeave:fe,onLeaveCancelled:fe,onBeforeAppear:fe,onAppear:fe,onAfterAppear:fe,onAppearCancelled:fe},setup(e,{slots:t}){const n=Bc(),r=Va();let s;return()=>{const o=t.default&&Co(t.default(),!0);if(!o||!o.length)return;let i=o[0];if(o.length>1){for(const S of o)if(S.type!==Oe){i=S;break}}const a=R(e),{mode:c}=a;if(r.isLeaving)return wn(i);const u=fs(i);if(!u)return wn(i);const d=qn(u,a,r,n);Jn(u,d);const _=n.subTree,E=_&&fs(_);let A=!1;const{getTransitionKey:$}=u.type;if($){const S=$();s===void 0?s=S:S!==s&&(s=S,A=!0)}if(E&&E.type!==Oe&&(!Ze(u,E)||A)){const S=qn(E,a,r,n);if(Jn(E,S),c==="out-in")return r.isLeaving=!0,S.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},wn(i);c==="in-out"&&u.type!==Oe&&(S.delayLeave=(z,F,le)=>{const O=vo(r,E);O[String(E.key)]=E,z._leaveCb=()=>{F(),z._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=le})}return i}}},za=Wa;function vo(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function qn(e,t,n,r){const{appear:s,mode:o,persisted:i=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:_,onLeave:E,onAfterLeave:A,onLeaveCancelled:$,onBeforeAppear:S,onAppear:z,onAfterAppear:F,onAppearCancelled:le}=t,O=String(e.key),U=vo(n,e),Z=(P,G)=>{P&&ue(P,r,9,G)},lt=(P,G)=>{const V=G[1];Z(P,G),x(P)?P.every(ae=>ae.length<=1)&&V():P.length<=1&&V()},Be={mode:o,persisted:i,beforeEnter(P){let G=a;if(!n.isMounted)if(s)G=S||a;else return;P._leaveCb&&P._leaveCb(!0);const V=U[O];V&&Ze(e,V)&&V.el._leaveCb&&V.el._leaveCb(),Z(G,[P])},enter(P){let G=c,V=u,ae=d;if(!n.isMounted)if(s)G=z||c,V=F||u,ae=le||d;else return;let _e=!1;const Te=P._enterCb=It=>{_e||(_e=!0,It?Z(ae,[P]):Z(V,[P]),Be.delayedLeave&&Be.delayedLeave(),P._enterCb=void 0)};G?lt(G,[P,Te]):Te()},leave(P,G){const V=String(e.key);if(P._enterCb&&P._enterCb(!0),n.isUnmounting)return G();Z(_,[P]);let ae=!1;const _e=P._leaveCb=Te=>{ae||(ae=!0,G(),Te?Z($,[P]):Z(A,[P]),P._leaveCb=void 0,U[V]===e&&delete U[V])};U[V]=e,E?lt(E,[P,_e]):_e()},clone(P){return qn(P,t,n,r)}};return Be}function wn(e){if(on(e))return e=Ue(e),e.children=null,e}function fs(e){return on(e)?e.children?e.children[0]:void 0:e}function Jn(e,t){e.shapeFlag&6&&e.component?Jn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Co(e,t=!1,n){let r=[],s=0;for(let o=0;o<e.length;o++){let i=e[o];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===pe?(i.patchFlag&128&&s++,r=r.concat(Co(i.children,t,a))):(t||i.type!==Oe)&&r.push(a!=null?Ue(i,{key:a}):i)}if(s>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}const zt=e=>!!e.type.__asyncLoader,on=e=>e.type.__isKeepAlive;function qa(e,t){To(e,"a",t)}function Ja(e,t){To(e,"da",t)}function To(e,t,n=J){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(an(t,r,n),n){let s=n.parent;for(;s&&s.parent;)on(s.parent.vnode)&&Ya(r,t,n,s),s=s.parent}}function Ya(e,t,n,r){const s=an(t,e,r,!0);Do(()=>{mr(r[t],s)},n)}function an(e,t,n=J,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;_t(),bt(n);const a=ue(t,n,e,i);return rt(),wt(),a});return r?s.unshift(o):s.push(o),o}}const Pe=e=>(t,n=J)=>(!Pt||e==="sp")&&an(e,(...r)=>t(...r),n),Ga=Pe("bm"),Ao=Pe("m"),Xa=Pe("bu"),Za=Pe("u"),So=Pe("bum"),Do=Pe("um"),Qa=Pe("sp"),ec=Pe("rtg"),tc=Pe("rtc");function nc(e,t=J){an("ec",e,t)}function qe(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let c=a.dir[r];c&&(_t(),ue(c,n,8,[e.el,a,e,t]),wt())}}const rc=Symbol(),Yn=e=>e?Fo(e)?Br(e)||e.proxy:Yn(e.parent):null,At=te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Yn(e.parent),$root:e=>Yn(e.root),$emit:e=>e.emit,$options:e=>xr(e),$forceUpdate:e=>e.f||(e.f=()=>Or(e.update)),$nextTick:e=>e.n||(e.n=Oa.bind(e.proxy)),$watch:e=>Ua.bind(e)}),En=(e,t)=>e!==K&&!e.__isScriptSetup&&N(e,t),sc={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:c}=e;let u;if(t[0]!=="$"){const A=i[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(En(r,t))return i[t]=1,r[t];if(s!==K&&N(s,t))return i[t]=2,s[t];if((u=e.propsOptions[0])&&N(u,t))return i[t]=3,o[t];if(n!==K&&N(n,t))return i[t]=4,n[t];Gn&&(i[t]=0)}}const d=At[t];let _,E;if(d)return t==="$attrs"&&ie(e,"get",t),d(e);if((_=a.__cssModules)&&(_=_[t]))return _;if(n!==K&&N(n,t))return i[t]=4,n[t];if(E=c.config.globalProperties,N(E,t))return E[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return En(s,t)?(s[t]=n,!0):r!==K&&N(r,t)?(r[t]=n,!0):N(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},i){let a;return!!n[i]||e!==K&&N(e,i)||En(t,i)||(a=o[0])&&N(a,i)||N(r,i)||N(At,i)||N(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:N(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Gn=!0;function oc(e){const t=xr(e),n=e.proxy,r=e.ctx;Gn=!1,t.beforeCreate&&us(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:c,inject:u,created:d,beforeMount:_,mounted:E,beforeUpdate:A,updated:$,activated:S,deactivated:z,beforeDestroy:F,beforeUnmount:le,destroyed:O,unmounted:U,render:Z,renderTracked:lt,renderTriggered:Be,errorCaptured:P,serverPrefetch:G,expose:V,inheritAttrs:ae,components:_e,directives:Te,filters:It}=t;if(u&&ic(u,r,null,e.appContext.config.unwrapInjectedRef),i)for(const W in i){const L=i[W];M(L)&&(r[W]=L.bind(n))}if(s){const W=s.call(n,n);Y(W)&&(e.data=Cr(W))}if(Gn=!0,o)for(const W in o){const L=o[W],We=M(L)?L.bind(n,n):M(L.get)?L.get.bind(n,n):ye,Rt=!M(L)&&M(L.set)?L.set.bind(n):ye,ze=Lc({get:We,set:Rt});Object.defineProperty(r,W,{enumerable:!0,configurable:!0,get:()=>ze.value,set:we=>ze.value=we})}if(a)for(const W in a)Oo(a[W],r,n,W);if(c){const W=M(c)?c.call(n):c;Reflect.ownKeys(W).forEach(L=>{Ka(L,W[L])})}d&&us(d,e,"c");function ne(W,L){x(L)?L.forEach(We=>W(We.bind(n))):L&&W(L.bind(n))}if(ne(Ga,_),ne(Ao,E),ne(Xa,A),ne(Za,$),ne(qa,S),ne(Ja,z),ne(nc,P),ne(tc,lt),ne(ec,Be),ne(So,le),ne(Do,U),ne(Qa,G),x(V))if(V.length){const W=e.exposed||(e.exposed={});V.forEach(L=>{Object.defineProperty(W,L,{get:()=>n[L],set:We=>n[L]=We})})}else e.exposed||(e.exposed={});Z&&e.render===ye&&(e.render=Z),ae!=null&&(e.inheritAttrs=ae),_e&&(e.components=_e),Te&&(e.directives=Te)}function ic(e,t,n=ye,r=!1){x(e)&&(e=Xn(e));for(const s in e){const o=e[s];let i;Y(o)?"default"in o?i=Wt(o.from||s,o.default,!0):i=Wt(o.from||s):i=Wt(o),se(i)&&r?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[s]=i}}function us(e,t,n){ue(x(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Oo(e,t,n,r){const s=r.includes(".")?Io(n,r):()=>n[r];if(X(e)){const o=t[e];M(o)&&_n(s,o)}else if(M(e))_n(s,e.bind(n));else if(Y(e))if(x(e))e.forEach(o=>Oo(o,t,n,r));else{const o=M(e.handler)?e.handler.bind(n):t[e.handler];M(o)&&_n(s,o,e)}}function xr(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(u=>Xt(c,u,i,!0)),Xt(c,t,i)),Y(t)&&o.set(t,c),c}function Xt(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&Xt(e,o,n,!0),s&&s.forEach(i=>Xt(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=ac[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const ac={data:ds,props:Ye,emits:Ye,methods:Ye,computed:Ye,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:Ye,directives:Ye,watch:lc,provide:ds,inject:cc};function ds(e,t){return t?e?function(){return te(M(e)?e.call(this,this):e,M(t)?t.call(this,this):t)}:t:e}function cc(e,t){return Ye(Xn(e),Xn(t))}function Xn(e){if(x(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function re(e,t){return e?[...new Set([].concat(e,t))]:t}function Ye(e,t){return e?te(te(Object.create(null),e),t):t}function lc(e,t){if(!e)return t;if(!t)return e;const n=te(Object.create(null),e);for(const r in t)n[r]=re(e[r],t[r]);return n}function fc(e,t,n,r=!1){const s={},o={};Yt(o,ln,1),e.propsDefaults=Object.create(null),xo(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:Ea(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function uc(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=R(s),[c]=e.propsOptions;let u=!1;if((r||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let _=0;_<d.length;_++){let E=d[_];if(sn(e.emitsOptions,E))continue;const A=t[E];if(c)if(N(o,E))A!==o[E]&&(o[E]=A,u=!0);else{const $=mt(E);s[$]=Zn(c,a,$,A,e,!1)}else A!==o[E]&&(o[E]=A,u=!0)}}}else{xo(e,t,s,o)&&(u=!0);let d;for(const _ in a)(!t||!N(t,_)&&((d=yt(_))===_||!N(t,d)))&&(c?n&&(n[_]!==void 0||n[d]!==void 0)&&(s[_]=Zn(c,a,_,void 0,e,!0)):delete s[_]);if(o!==a)for(const _ in o)(!t||!N(t,_))&&(delete o[_],u=!0)}u&&Me(e,"set","$attrs")}function xo(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(Vt(c))continue;const u=t[c];let d;s&&N(s,d=mt(c))?!o||!o.includes(d)?n[d]=u:(a||(a={}))[d]=u:sn(e.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,i=!0)}if(o){const c=R(n),u=a||K;for(let d=0;d<o.length;d++){const _=o[d];n[_]=Zn(s,c,_,u[_],e,!N(u,_))}}return i}function Zn(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=N(i,"default");if(a&&r===void 0){const c=i.default;if(i.type!==Function&&M(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(bt(s),r=u[n]=c.call(null,t),rt())}else r=c}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===yt(n))&&(r=!0))}return r}function Mo(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let c=!1;if(!M(e)){const d=_=>{c=!0;const[E,A]=Mo(_,t,!0);te(i,E),A&&a.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!c)return Y(e)&&r.set(e,ht),ht;if(x(o))for(let d=0;d<o.length;d++){const _=mt(o[d]);hs(_)&&(i[_]=K)}else if(o)for(const d in o){const _=mt(d);if(hs(_)){const E=o[d],A=i[_]=x(E)||M(E)?{type:E}:Object.assign({},E);if(A){const $=ms(Boolean,A.type),S=ms(String,A.type);A[0]=$>-1,A[1]=S<0||$<S,($>-1||N(A,"default"))&&a.push(_)}}}const u=[i,a];return Y(e)&&r.set(e,u),u}function hs(e){return e[0]!=="$"}function ps(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function gs(e,t){return ps(e)===ps(t)}function ms(e,t){return x(t)?t.findIndex(n=>gs(n,e)):M(t)&&gs(t,e)?0:-1}const Po=e=>e[0]==="_"||e==="$stable",Mr=e=>x(e)?e.map(ve):[ve(e)],dc=(e,t,n)=>{if(t._n)return t;const r=$a((...s)=>Mr(t(...s)),n);return r._c=!1,r},Bo=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Po(s))continue;const o=e[s];if(M(o))t[s]=dc(s,o,r);else if(o!=null){const i=Mr(o);t[s]=()=>i}}},No=(e,t)=>{const n=Mr(t);e.slots.default=()=>n},hc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=R(t),Yt(t,"_",n)):Bo(t,e.slots={})}else e.slots={},t&&No(e,t);Yt(e.slots,ln,1)},pc=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=K;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:(te(s,t),!n&&a===1&&delete s._):(o=!t.$stable,Bo(t,s)),i=t}else t&&(No(e,t),i={default:1});if(o)for(const a in s)!Po(a)&&!(a in i)&&delete s[a]};function $o(){return{app:null,config:{isNativeTag:$i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gc=0;function mc(e,t){return function(r,s=null){M(r)||(r=Object.assign({},r)),s!=null&&!Y(s)&&(s=null);const o=$o(),i=new Set;let a=!1;const c=o.app={_uid:gc++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:Kc,get config(){return o.config},set config(u){},use(u,...d){return i.has(u)||(u&&M(u.install)?(i.add(u),u.install(c,...d)):M(u)&&(i.add(u),u(c,...d))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,d){return d?(o.components[u]=d,c):o.components[u]},directive(u,d){return d?(o.directives[u]=d,c):o.directives[u]},mount(u,d,_){if(!a){const E=nt(r,s);return E.appContext=o,d&&t?t(E,u):e(E,u,_),a=!0,c._container=u,u.__vue_app__=c,Br(E.component)||E.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return o.provides[u]=d,c}};return c}}function Qn(e,t,n,r,s=!1){if(x(e)){e.forEach((E,A)=>Qn(E,t&&(x(t)?t[A]:t),n,r,s));return}if(zt(r)&&!s)return;const o=r.shapeFlag&4?Br(r.component)||r.component.proxy:r.el,i=s?null:o,{i:a,r:c}=e,u=t&&t.r,d=a.refs===K?a.refs={}:a.refs,_=a.setupState;if(u!=null&&u!==c&&(X(u)?(d[u]=null,N(_,u)&&(_[u]=null)):se(u)&&(u.value=null)),M(c))ke(c,a,12,[i,d]);else{const E=X(c),A=se(c);if(E||A){const $=()=>{if(e.f){const S=E?N(_,c)?_[c]:d[c]:c.value;s?x(S)&&mr(S,o):x(S)?S.includes(o)||S.push(o):E?(d[c]=[o],N(_,c)&&(_[c]=d[c])):(c.value=[o],e.k&&(d[e.k]=c.value))}else E?(d[c]=i,N(_,c)&&(_[c]=i)):A&&(c.value=i,e.k&&(d[e.k]=i))};i?($.id=-1,oe($,n)):$()}}}const oe=Ha;function bc(e){return yc(e)}function yc(e,t){const n=Wi();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:c,setText:u,setElementText:d,parentNode:_,nextSibling:E,setScopeId:A=ye,insertStaticContent:$}=e,S=(l,f,h,g=null,p=null,y=null,I=!1,b=null,w=!!f.dynamicChildren)=>{if(l===f)return;l&&!Ze(l,f)&&(g=kt(l),we(l,p,y,!0),l=null),f.patchFlag===-2&&(w=!1,f.dynamicChildren=null);const{type:m,ref:C,shapeFlag:v}=f;switch(m){case cn:z(l,f,h,g);break;case Oe:F(l,f,h,g);break;case In:l==null&&le(f,h,g,I);break;case pe:_e(l,f,h,g,p,y,I,b,w);break;default:v&1?Z(l,f,h,g,p,y,I,b,w):v&6?Te(l,f,h,g,p,y,I,b,w):(v&64||v&128)&&m.process(l,f,h,g,p,y,I,b,w,ft)}C!=null&&p&&Qn(C,l&&l.ref,y,f||l,!f)},z=(l,f,h,g)=>{if(l==null)r(f.el=a(f.children),h,g);else{const p=f.el=l.el;f.children!==l.children&&u(p,f.children)}},F=(l,f,h,g)=>{l==null?r(f.el=c(f.children||""),h,g):f.el=l.el},le=(l,f,h,g)=>{[l.el,l.anchor]=$(l.children,f,h,g,l.el,l.anchor)},O=({el:l,anchor:f},h,g)=>{let p;for(;l&&l!==f;)p=E(l),r(l,h,g),l=p;r(f,h,g)},U=({el:l,anchor:f})=>{let h;for(;l&&l!==f;)h=E(l),s(l),l=h;s(f)},Z=(l,f,h,g,p,y,I,b,w)=>{I=I||f.type==="svg",l==null?lt(f,h,g,p,y,I,b,w):G(l,f,p,y,I,b,w)},lt=(l,f,h,g,p,y,I,b)=>{let w,m;const{type:C,props:v,shapeFlag:T,transition:D,dirs:B}=l;if(w=l.el=i(l.type,y,v&&v.is,v),T&8?d(w,l.children):T&16&&P(l.children,w,null,g,p,y&&C!=="foreignObject",I,b),B&&qe(l,null,g,"created"),Be(w,l,l.scopeId,I,g),v){for(const k in v)k!=="value"&&!Vt(k)&&o(w,k,null,v[k],y,l.children,g,p,Ae);"value"in v&&o(w,"value",null,v.value),(m=v.onVnodeBeforeMount)&&Ie(m,g,l)}B&&qe(l,null,g,"beforeMount");const j=(!p||p&&!p.pendingBranch)&&D&&!D.persisted;j&&D.beforeEnter(w),r(w,f,h),((m=v&&v.onVnodeMounted)||j||B)&&oe(()=>{m&&Ie(m,g,l),j&&D.enter(w),B&&qe(l,null,g,"mounted")},p)},Be=(l,f,h,g,p)=>{if(h&&A(l,h),g)for(let y=0;y<g.length;y++)A(l,g[y]);if(p){let y=p.subTree;if(f===y){const I=p.vnode;Be(l,I,I.scopeId,I.slotScopeIds,p.parent)}}},P=(l,f,h,g,p,y,I,b,w=0)=>{for(let m=w;m<l.length;m++){const C=l[m]=b?$e(l[m]):ve(l[m]);S(null,C,f,h,g,p,y,I,b)}},G=(l,f,h,g,p,y,I)=>{const b=f.el=l.el;let{patchFlag:w,dynamicChildren:m,dirs:C}=f;w|=l.patchFlag&16;const v=l.props||K,T=f.props||K;let D;h&&Je(h,!1),(D=T.onVnodeBeforeUpdate)&&Ie(D,h,f,l),C&&qe(f,l,h,"beforeUpdate"),h&&Je(h,!0);const B=p&&f.type!=="foreignObject";if(m?V(l.dynamicChildren,m,b,h,g,B,y):I||L(l,f,b,null,h,g,B,y,!1),w>0){if(w&16)ae(b,f,v,T,h,g,p);else if(w&2&&v.class!==T.class&&o(b,"class",null,T.class,p),w&4&&o(b,"style",v.style,T.style,p),w&8){const j=f.dynamicProps;for(let k=0;k<j.length;k++){const q=j[k],de=v[q],ut=T[q];(ut!==de||q==="value")&&o(b,q,de,ut,p,l.children,h,g,Ae)}}w&1&&l.children!==f.children&&d(b,f.children)}else!I&&m==null&&ae(b,f,v,T,h,g,p);((D=T.onVnodeUpdated)||C)&&oe(()=>{D&&Ie(D,h,f,l),C&&qe(f,l,h,"updated")},g)},V=(l,f,h,g,p,y,I)=>{for(let b=0;b<f.length;b++){const w=l[b],m=f[b],C=w.el&&(w.type===pe||!Ze(w,m)||w.shapeFlag&70)?_(w.el):h;S(w,m,C,null,g,p,y,I,!0)}},ae=(l,f,h,g,p,y,I)=>{if(h!==g){if(h!==K)for(const b in h)!Vt(b)&&!(b in g)&&o(l,b,h[b],null,I,f.children,p,y,Ae);for(const b in g){if(Vt(b))continue;const w=g[b],m=h[b];w!==m&&b!=="value"&&o(l,b,m,w,I,f.children,p,y,Ae)}"value"in g&&o(l,"value",h.value,g.value)}},_e=(l,f,h,g,p,y,I,b,w)=>{const m=f.el=l?l.el:a(""),C=f.anchor=l?l.anchor:a("");let{patchFlag:v,dynamicChildren:T,slotScopeIds:D}=f;D&&(b=b?b.concat(D):D),l==null?(r(m,h,g),r(C,h,g),P(f.children,h,C,p,y,I,b,w)):v>0&&v&64&&T&&l.dynamicChildren?(V(l.dynamicChildren,T,h,p,y,I,b),(f.key!=null||p&&f===p.subTree)&&Ro(l,f,!0)):L(l,f,h,C,p,y,I,b,w)},Te=(l,f,h,g,p,y,I,b,w)=>{f.slotScopeIds=b,l==null?f.shapeFlag&512?p.ctx.activate(f,h,g,I,w):It(f,h,g,p,y,I,w):Jr(l,f,w)},It=(l,f,h,g,p,y,I)=>{const b=l.component=Pc(l,g,p);if(on(l)&&(b.ctx.renderer=ft),Nc(b),b.asyncDep){if(p&&p.registerDep(b,ne),!l.el){const w=b.subTree=nt(Oe);F(null,w,f,h)}return}ne(b,l,f,h,p,y,I)},Jr=(l,f,h)=>{const g=f.component=l.component;if(Fa(l,f,h))if(g.asyncDep&&!g.asyncResolved){W(g,f,h);return}else g.next=f,Ma(g.update),g.update();else f.el=l.el,g.vnode=f},ne=(l,f,h,g,p,y,I)=>{const b=()=>{if(l.isMounted){let{next:C,bu:v,u:T,parent:D,vnode:B}=l,j=C,k;Je(l,!1),C?(C.el=B.el,W(l,C,I)):C=B,v&&bn(v),(k=C.props&&C.props.onVnodeBeforeUpdate)&&Ie(k,D,C,B),Je(l,!0);const q=yn(l),de=l.subTree;l.subTree=q,S(de,q,_(de.el),kt(de),l,p,y),C.el=q.el,j===null&&La(l,q.el),T&&oe(T,p),(k=C.props&&C.props.onVnodeUpdated)&&oe(()=>Ie(k,D,C,B),p)}else{let C;const{el:v,props:T}=f,{bm:D,m:B,parent:j}=l,k=zt(f);if(Je(l,!1),D&&bn(D),!k&&(C=T&&T.onVnodeBeforeMount)&&Ie(C,j,f),Je(l,!0),v&&gn){const q=()=>{l.subTree=yn(l),gn(v,l.subTree,l,p,null)};k?f.type.__asyncLoader().then(()=>!l.isUnmounted&&q()):q()}else{const q=l.subTree=yn(l);S(null,q,h,g,l,p,y),f.el=q.el}if(B&&oe(B,p),!k&&(C=T&&T.onVnodeMounted)){const q=f;oe(()=>Ie(C,j,q),p)}(f.shapeFlag&256||j&&zt(j.vnode)&&j.vnode.shapeFlag&256)&&l.a&&oe(l.a,p),l.isMounted=!0,f=h=g=null}},w=l.effect=new wr(b,()=>Or(m),l.scope),m=l.update=()=>w.run();m.id=l.uid,Je(l,!0),m()},W=(l,f,h)=>{f.component=l;const g=l.vnode.props;l.vnode=f,l.next=null,uc(l,f.props,g,h),pc(l,f.children,h),_t(),cs(),wt()},L=(l,f,h,g,p,y,I,b,w=!1)=>{const m=l&&l.children,C=l?l.shapeFlag:0,v=f.children,{patchFlag:T,shapeFlag:D}=f;if(T>0){if(T&128){Rt(m,v,h,g,p,y,I,b,w);return}else if(T&256){We(m,v,h,g,p,y,I,b,w);return}}D&8?(C&16&&Ae(m,p,y),v!==m&&d(h,v)):C&16?D&16?Rt(m,v,h,g,p,y,I,b,w):Ae(m,p,y,!0):(C&8&&d(h,""),D&16&&P(v,h,g,p,y,I,b,w))},We=(l,f,h,g,p,y,I,b,w)=>{l=l||ht,f=f||ht;const m=l.length,C=f.length,v=Math.min(m,C);let T;for(T=0;T<v;T++){const D=f[T]=w?$e(f[T]):ve(f[T]);S(l[T],D,h,null,p,y,I,b,w)}m>C?Ae(l,p,y,!0,!1,v):P(f,h,g,p,y,I,b,w,v)},Rt=(l,f,h,g,p,y,I,b,w)=>{let m=0;const C=f.length;let v=l.length-1,T=C-1;for(;m<=v&&m<=T;){const D=l[m],B=f[m]=w?$e(f[m]):ve(f[m]);if(Ze(D,B))S(D,B,h,null,p,y,I,b,w);else break;m++}for(;m<=v&&m<=T;){const D=l[v],B=f[T]=w?$e(f[T]):ve(f[T]);if(Ze(D,B))S(D,B,h,null,p,y,I,b,w);else break;v--,T--}if(m>v){if(m<=T){const D=T+1,B=D<C?f[D].el:g;for(;m<=T;)S(null,f[m]=w?$e(f[m]):ve(f[m]),h,B,p,y,I,b,w),m++}}else if(m>T)for(;m<=v;)we(l[m],p,y,!0),m++;else{const D=m,B=m,j=new Map;for(m=B;m<=T;m++){const ce=f[m]=w?$e(f[m]):ve(f[m]);ce.key!=null&&j.set(ce.key,m)}let k,q=0;const de=T-B+1;let ut=!1,Xr=0;const vt=new Array(de);for(m=0;m<de;m++)vt[m]=0;for(m=D;m<=v;m++){const ce=l[m];if(q>=de){we(ce,p,y,!0);continue}let Ee;if(ce.key!=null)Ee=j.get(ce.key);else for(k=B;k<=T;k++)if(vt[k-B]===0&&Ze(ce,f[k])){Ee=k;break}Ee===void 0?we(ce,p,y,!0):(vt[Ee-B]=m+1,Ee>=Xr?Xr=Ee:ut=!0,S(ce,f[Ee],h,null,p,y,I,b,w),q++)}const Zr=ut?_c(vt):ht;for(k=Zr.length-1,m=de-1;m>=0;m--){const ce=B+m,Ee=f[ce],Qr=ce+1<C?f[ce+1].el:g;vt[m]===0?S(null,Ee,h,Qr,p,y,I,b,w):ut&&(k<0||m!==Zr[k]?ze(Ee,h,Qr,2):k--)}}},ze=(l,f,h,g,p=null)=>{const{el:y,type:I,transition:b,children:w,shapeFlag:m}=l;if(m&6){ze(l.component.subTree,f,h,g);return}if(m&128){l.suspense.move(f,h,g);return}if(m&64){I.move(l,f,h,ft);return}if(I===pe){r(y,f,h);for(let v=0;v<w.length;v++)ze(w[v],f,h,g);r(l.anchor,f,h);return}if(I===In){O(l,f,h);return}if(g!==2&&m&1&&b)if(g===0)b.beforeEnter(y),r(y,f,h),oe(()=>b.enter(y),p);else{const{leave:v,delayLeave:T,afterLeave:D}=b,B=()=>r(y,f,h),j=()=>{v(y,()=>{B(),D&&D()})};T?T(y,B,j):j()}else r(y,f,h)},we=(l,f,h,g=!1,p=!1)=>{const{type:y,props:I,ref:b,children:w,dynamicChildren:m,shapeFlag:C,patchFlag:v,dirs:T}=l;if(b!=null&&Qn(b,null,h,l,!0),C&256){f.ctx.deactivate(l);return}const D=C&1&&T,B=!zt(l);let j;if(B&&(j=I&&I.onVnodeBeforeUnmount)&&Ie(j,f,l),C&6)Di(l.component,h,g);else{if(C&128){l.suspense.unmount(h,g);return}D&&qe(l,null,f,"beforeUnmount"),C&64?l.type.remove(l,f,h,p,ft,g):m&&(y!==pe||v>0&&v&64)?Ae(m,f,h,!1,!0):(y===pe&&v&384||!p&&C&16)&&Ae(w,f,h),g&&Yr(l)}(B&&(j=I&&I.onVnodeUnmounted)||D)&&oe(()=>{j&&Ie(j,f,l),D&&qe(l,null,f,"unmounted")},h)},Yr=l=>{const{type:f,el:h,anchor:g,transition:p}=l;if(f===pe){Si(h,g);return}if(f===In){U(l);return}const y=()=>{s(h),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(l.shapeFlag&1&&p&&!p.persisted){const{leave:I,delayLeave:b}=p,w=()=>I(h,y);b?b(l.el,y,w):w()}else y()},Si=(l,f)=>{let h;for(;l!==f;)h=E(l),s(l),l=h;s(f)},Di=(l,f,h)=>{const{bum:g,scope:p,update:y,subTree:I,um:b}=l;g&&bn(g),p.stop(),y&&(y.active=!1,we(I,l,f,h)),b&&oe(b,f),oe(()=>{l.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Ae=(l,f,h,g=!1,p=!1,y=0)=>{for(let I=y;I<l.length;I++)we(l[I],f,h,g,p)},kt=l=>l.shapeFlag&6?kt(l.component.subTree):l.shapeFlag&128?l.suspense.next():E(l.anchor||l.el),Gr=(l,f,h)=>{l==null?f._vnode&&we(f._vnode,null,null,!0):S(f._vnode||null,l,f,null,null,null,h),cs(),bo(),f._vnode=l},ft={p:S,um:we,m:ze,r:Yr,mt:It,mc:P,pc:L,pbc:V,n:kt,o:e};let pn,gn;return t&&([pn,gn]=t(ft)),{render:Gr,hydrate:pn,createApp:mc(Gr,pn)}}function Je({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ro(e,t,n=!1){const r=e.children,s=t.children;if(x(r)&&x(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=$e(s[o]),a.el=i.el),n||Ro(i,a)),a.type===cn&&(a.el=i.el)}}function _c(e){const t=e.slice(),n=[0];let r,s,o,i,a;const c=e.length;for(r=0;r<c;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<u?o=a+1:i=a;u<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}const wc=e=>e.__isTeleport,pe=Symbol(void 0),cn=Symbol(void 0),Oe=Symbol(void 0),In=Symbol(void 0),St=[];let be=null;function Ec(e=!1){St.push(be=e?null:[])}function Ic(){St.pop(),be=St[St.length-1]||null}let Mt=1;function bs(e){Mt+=e}function vc(e){return e.dynamicChildren=Mt>0?be||ht:null,Ic(),Mt>0&&be&&be.push(e),e}function Cc(e,t,n,r,s,o){return vc(fn(e,t,n,r,s,o,!0))}function Tc(e){return e?e.__v_isVNode===!0:!1}function Ze(e,t){return e.type===t.type&&e.key===t.key}const ln="__vInternal",ko=({key:e})=>e??null,qt=({ref:e,ref_key:t,ref_for:n})=>e!=null?X(e)||se(e)||M(e)?{i:me,r:e,k:t,f:!!n}:e:null;function fn(e,t=null,n=null,r=0,s=null,o=e===pe?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ko(t),ref:t&&qt(t),scopeId:wo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:me};return a?(Pr(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=X(n)?8:16),Mt>0&&!i&&be&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&be.push(c),c}const nt=Ac;function Ac(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===rc)&&(e=Oe),Tc(e)){const a=Ue(e,t,!0);return n&&Pr(a,n),Mt>0&&!o&&be&&(a.shapeFlag&6?be[be.indexOf(e)]=a:be.push(a)),a.patchFlag|=-2,a}if(Fc(e)&&(e=e.__vccOpts),t){t=Sc(t);let{class:a,style:c}=t;a&&!X(a)&&(t.class=pr(a)),Y(c)&&(fo(c)&&!x(c)&&(c=te({},c)),t.style=hr(c))}const i=X(e)?1:ja(e)?128:wc(e)?64:Y(e)?4:M(e)?2:0;return fn(e,t,n,r,s,i,o,!0)}function Sc(e){return e?fo(e)||ln in e?te({},e):e:null}function Ue(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:i}=e,a=t?Oc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&ko(a),ref:t&&t.ref?n&&s?x(s)?s.concat(qt(t)):[s,qt(t)]:qt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ue(e.ssContent),ssFallback:e.ssFallback&&Ue(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Dc(e=" ",t=0){return nt(cn,null,e,t)}function ve(e){return e==null||typeof e=="boolean"?nt(Oe):x(e)?nt(pe,null,e.slice()):typeof e=="object"?$e(e):nt(cn,null,String(e))}function $e(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ue(e)}function Pr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(x(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Pr(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(ln in t)?t._ctx=me:s===3&&me&&(me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else M(t)?(t={default:t,_ctx:me},n=32):(t=String(t),r&64?(n=16,t=[Dc(t)]):n=8);e.children=t,e.shapeFlag|=n}function Oc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=pr([t.class,r.class]));else if(s==="style")t.style=hr([t.style,r.style]);else if(Qt(s)){const o=t[s],i=r[s];i&&o!==i&&!(x(o)&&o.includes(i))&&(t[s]=o?[].concat(o,i):i)}else s!==""&&(t[s]=r[s])}return t}function Ie(e,t,n,r=null){ue(e,t,7,[n,r])}const xc=$o();let Mc=0;function Pc(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||xc,o={uid:Mc++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new zi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mo(r,s),emitsOptions:_o(r,s),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Na.bind(null,o),e.ce&&e.ce(o),o}let J=null;const Bc=()=>J||me,bt=e=>{J=e,e.scope.on()},rt=()=>{J&&J.scope.off(),J=null};function Fo(e){return e.vnode.shapeFlag&4}let Pt=!1;function Nc(e,t=!1){Pt=t;const{props:n,children:r}=e.vnode,s=Fo(e);fc(e,n,s,t),hc(e,r);const o=s?$c(e,t):void 0;return Pt=!1,o}function $c(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=uo(new Proxy(e.ctx,sc));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?kc(e):null;bt(e),_t();const o=ke(r,e,0,[e.props,s]);if(wt(),rt(),Xs(o)){if(o.then(rt,rt),t)return o.then(i=>{ys(e,i,t)}).catch(i=>{rn(i,e,0)});e.asyncDep=o}else ys(e,o,t)}else Lo(e,t)}function ys(e,t,n){M(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Y(t)&&(e.setupState=ho(t)),Lo(e,n)}let _s;function Lo(e,t,n){const r=e.type;if(!e.render){if(!t&&_s&&!r.render){const s=r.template||xr(e).template;if(s){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,u=te(te({isCustomElement:o,delimiters:a},i),c);r.render=_s(s,u)}}e.render=r.render||ye}bt(e),_t(),oc(e),wt(),rt()}function Rc(e){return new Proxy(e.attrs,{get(t,n){return ie(e,"get","$attrs"),t[n]}})}function kc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Rc(e))},slots:e.slots,emit:e.emit,expose:t}}function Br(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ho(uo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in At)return At[n](e)},has(t,n){return n in t||n in At}}))}function Fc(e){return M(e)&&"__vccOpts"in e}const Lc=(e,t)=>Sa(e,t,Pt),jc=Symbol(""),Hc=()=>Wt(jc),Kc="3.2.47",Uc="http://www.w3.org/2000/svg",Qe=typeof document<"u"?document:null,ws=Qe&&Qe.createElement("template"),Vc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?Qe.createElementNS(Uc,e):Qe.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Qe.createTextNode(e),createComment:e=>Qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{ws.innerHTML=r?`<svg>${e}</svg>`:e;const a=ws.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Wc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function zc(e,t,n){const r=e.style,s=X(n);if(n&&!s){if(t&&!X(t))for(const o in t)n[o]==null&&er(r,o,"");for(const o in n)er(r,o,n[o])}else{const o=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=o)}}const Es=/\s*!important$/;function er(e,t,n){if(x(n))n.forEach(r=>er(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=qc(e,t);Es.test(n)?e.setProperty(yt(r),n.replace(Es,""),"important"):e[r]=n}}const Is=["Webkit","Moz","ms"],vn={};function qc(e,t){const n=vn[t];if(n)return n;let r=mt(t);if(r!=="filter"&&r in e)return vn[t]=r;r=Zs(r);for(let s=0;s<Is.length;s++){const o=Is[s]+r;if(o in e)return vn[t]=o}return t}const vs="http://www.w3.org/1999/xlink";function Jc(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(vs,t.slice(6,t.length)):e.setAttributeNS(vs,t,n);else{const o=Ni(t);n==null||o&&!Gs(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function Yc(e,t,n,r,s,o,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,s,o),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Gs(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function Gc(e,t,n,r){e.addEventListener(t,n,r)}function Xc(e,t,n,r){e.removeEventListener(t,n,r)}function Zc(e,t,n,r,s=null){const o=e._vei||(e._vei={}),i=o[t];if(r&&i)i.value=r;else{const[a,c]=Qc(t);if(r){const u=o[t]=nl(r,s);Gc(e,a,u,c)}else i&&(Xc(e,a,i,c),o[t]=void 0)}}const Cs=/(?:Once|Passive|Capture)$/;function Qc(e){let t;if(Cs.test(e)){t={};let r;for(;r=e.match(Cs);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):yt(e.slice(2)),t]}let Cn=0;const el=Promise.resolve(),tl=()=>Cn||(el.then(()=>Cn=0),Cn=Date.now());function nl(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ue(rl(r,n.value),t,5,[r])};return n.value=e,n.attached=tl(),n}function rl(e,t){if(x(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Ts=/^on[a-z]/,sl=(e,t,n,r,s=!1,o,i,a,c)=>{t==="class"?Wc(e,r,s):t==="style"?zc(e,n,r):Qt(t)?gr(t)||Zc(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ol(e,t,r,s))?Yc(e,t,r,o,i,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Jc(e,t,r,s))};function ol(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ts.test(t)&&M(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ts.test(t)&&X(n)?!1:t in e}const il={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};za.props;const al=te({patchProp:sl},Vc);let As;function cl(){return As||(As=bc(al))}const ll=(...e)=>{const t=cl().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=fl(r);if(!s)return;const o=t._component;!M(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function fl(e){return X(e)?document.querySelector(e):e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},ul=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],i=e[n++],a=e[n++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return t.join("")},Ho={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],i=s+1<e.length,a=i?e[s+1]:0,c=s+2<e.length,u=c?e[s+2]:0,d=o>>2,_=(o&3)<<4|a>>4;let E=(a&15)<<2|u>>6,A=u&63;c||(A=64,i||(E=64)),r.push(n[d],n[_],n[E],n[A])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(jo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ul(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const _=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||a==null||u==null||_==null)throw new dl;const E=o<<2|a>>4;if(r.push(E),u!==64){const A=a<<4&240|u>>2;if(r.push(A),_!==64){const $=u<<6&192|_;r.push($)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class dl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hl=function(e){const t=jo(e);return Ho.encodeByteArray(t,!0)},Ko=function(e){return hl(e).replace(/\./g,"")},pl=function(e){try{return Ho.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=()=>gl().__FIREBASE_DEFAULTS__,bl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},yl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&pl(e[1]);return t&&JSON.parse(t)},_l=()=>{try{return ml()||bl()||yl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},wl=()=>{var e;return(e=_l())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function Uo(){try{return typeof indexedDB=="object"}catch{return!1}}function Vo(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Il(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="FirebaseError";class Et extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=vl,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,un.prototype.create)}}class un{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],i=o?Cl(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new Et(s,a,r)}}function Cl(e,t){return e.replace(Tl,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Tl=/\{\$([^}]+)}/g;function tr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],i=t[s];if(Ss(o)&&Ss(i)){if(!tr(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ss(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(e){return e&&e._delegate?e._delegate:e}class Ve{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new El;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Dl(t))try{this.getOrInitializeService({instanceIdentifier:Ge})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ge){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ge){return this.instances.has(t)}getOptions(t=Ge){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&t(i,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sl(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ge){return this.component?this.component.multipleInstances?t:Ge:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sl(e){return e===Ge?void 0:e}function Dl(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Al(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(H||(H={}));const xl={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Ml=H.INFO,Pl={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Bl=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Pl[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Nl{constructor(t){this.name=t,this._logLevel=Ml,this._logHandler=Bl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?xl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}}const $l=(e,t)=>t.some(n=>e instanceof n);let Ds,Os;function Rl(){return Ds||(Ds=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kl(){return Os||(Os=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wo=new WeakMap,nr=new WeakMap,zo=new WeakMap,Tn=new WeakMap,$r=new WeakMap;function Fl(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(Fe(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&Wo.set(n,e)}).catch(()=>{}),$r.set(t,e),t}function Ll(e){if(nr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});nr.set(e,t)}let rr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return nr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||zo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fe(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function jl(e){rr=e(rr)}function Hl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(An(this),t,...n);return zo.set(r,t.sort?t.sort():[t]),Fe(r)}:kl().includes(e)?function(...t){return e.apply(An(this),t),Fe(Wo.get(this))}:function(...t){return Fe(e.apply(An(this),t))}}function Kl(e){return typeof e=="function"?Hl(e):(e instanceof IDBTransaction&&Ll(e),$l(e,Rl())?new Proxy(e,rr):e)}function Fe(e){if(e instanceof IDBRequest)return Fl(e);if(Tn.has(e))return Tn.get(e);const t=Kl(e);return t!==e&&(Tn.set(e,t),$r.set(t,e)),t}const An=e=>$r.get(e);function Ul(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=Fe(i);return r&&i.addEventListener("upgradeneeded",c=>{r(Fe(i.result),c.oldVersion,c.newVersion,Fe(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Vl=["get","getKey","getAll","getAllKeys","count"],Wl=["put","add","delete","clear"],Sn=new Map;function xs(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Sn.get(t))return Sn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Wl.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Vl.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Sn.set(t,o),o}jl(e=>({...e,get:(t,n,r)=>xs(t,n)||e.get(t,n,r),has:(t,n)=>!!xs(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ql(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ql(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const sr="@firebase/app",Ms="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new Nl("@firebase/app"),Jl="@firebase/app-compat",Yl="@firebase/analytics-compat",Gl="@firebase/analytics",Xl="@firebase/app-check-compat",Zl="@firebase/app-check",Ql="@firebase/auth",ef="@firebase/auth-compat",tf="@firebase/database",nf="@firebase/database-compat",rf="@firebase/functions",sf="@firebase/functions-compat",of="@firebase/installations",af="@firebase/installations-compat",cf="@firebase/messaging",lf="@firebase/messaging-compat",ff="@firebase/performance",uf="@firebase/performance-compat",df="@firebase/remote-config",hf="@firebase/remote-config-compat",pf="@firebase/storage",gf="@firebase/storage-compat",mf="@firebase/firestore",bf="@firebase/firestore-compat",yf="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="[DEFAULT]",_f={[sr]:"fire-core",[Jl]:"fire-core-compat",[Gl]:"fire-analytics",[Yl]:"fire-analytics-compat",[Zl]:"fire-app-check",[Xl]:"fire-app-check-compat",[Ql]:"fire-auth",[ef]:"fire-auth-compat",[tf]:"fire-rtdb",[nf]:"fire-rtdb-compat",[rf]:"fire-fn",[sf]:"fire-fn-compat",[of]:"fire-iid",[af]:"fire-iid-compat",[cf]:"fire-fcm",[lf]:"fire-fcm-compat",[ff]:"fire-perf",[uf]:"fire-perf-compat",[df]:"fire-rc",[hf]:"fire-rc-compat",[pf]:"fire-gcs",[gf]:"fire-gcs-compat",[mf]:"fire-fst",[bf]:"fire-fst-compat","fire-js":"fire-js",[yf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new Map,ir=new Map;function wf(e,t){try{e.container.addComponent(t)}catch(n){st.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ot(e){const t=e.name;if(ir.has(t))return st.debug(`There were multiple attempts to register component ${t}.`),!1;ir.set(t,e);for(const n of Bt.values())wf(n,e);return!0}function Rr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Le=new un("app","Firebase",Ef);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Le.create("app-deleted",{appName:this._name})}}function qo(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:or,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Le.create("bad-app-name",{appName:String(s)});if(n||(n=wl()),!n)throw Le.create("no-options");const o=Bt.get(s);if(o){if(tr(n,o.options)&&tr(r,o.config))return o;throw Le.create("duplicate-app",{appName:s})}const i=new Ol(s);for(const c of ir.values())i.addComponent(c);const a=new If(n,r,i);return Bt.set(s,a),a}function vf(e=or){const t=Bt.get(e);if(!t&&e===or)return qo();if(!t)throw Le.create("no-app",{appName:e});return t}function Cf(){return Array.from(Bt.values())}function je(e,t,n){var r;let s=(r=_f[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${t}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),st.warn(a.join(" "));return}ot(new Ve(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="firebase-heartbeat-database",Af=1,Nt="firebase-heartbeat-store";let Dn=null;function Jo(){return Dn||(Dn=Ul(Tf,Af,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Nt)}}}).catch(e=>{throw Le.create("idb-open",{originalErrorMessage:e.message})})),Dn}async function Sf(e){try{return(await Jo()).transaction(Nt).objectStore(Nt).get(Yo(e))}catch(t){if(t instanceof Et)st.warn(t.message);else{const n=Le.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});st.warn(n.message)}}}async function Ps(e,t){try{const r=(await Jo()).transaction(Nt,"readwrite");return await r.objectStore(Nt).put(t,Yo(e)),r.done}catch(n){if(n instanceof Et)st.warn(n.message);else{const r=Le.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});st.warn(r.message)}}}function Yo(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=1024,Of=30*24*60*60*1e3;class xf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bs();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=Of}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bs(),{heartbeatsToSend:n,unsentEntries:r}=Mf(this._heartbeatsCache.heartbeats),s=Ko(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Bs(){return new Date().toISOString().substring(0,10)}function Mf(e,t=Df){const n=[];let r=e.slice();for(const s of e){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),Ns(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ns(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uo()?Vo().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ps(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ps(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ns(e){return Ko(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(e){ot(new Ve("platform-logger",t=>new zl(t),"PRIVATE")),ot(new Ve("heartbeat",t=>new xf(t),"PRIVATE")),je(sr,Ms,e),je(sr,Ms,"esm2017"),je("fire-js","")}Bf("");const Nf=(e,t)=>t.some(n=>e instanceof n);let $s,Rs;function $f(){return $s||($s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rf(){return Rs||(Rs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Go=new WeakMap,ar=new WeakMap,Xo=new WeakMap,On=new WeakMap,kr=new WeakMap;function kf(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(He(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&Go.set(n,e)}).catch(()=>{}),kr.set(t,e),t}function Ff(e){if(ar.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});ar.set(e,t)}let cr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ar.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Xo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return He(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Lf(e){cr=e(cr)}function jf(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(xn(this),t,...n);return Xo.set(r,t.sort?t.sort():[t]),He(r)}:Rf().includes(e)?function(...t){return e.apply(xn(this),t),He(Go.get(this))}:function(...t){return He(e.apply(xn(this),t))}}function Hf(e){return typeof e=="function"?jf(e):(e instanceof IDBTransaction&&Ff(e),Nf(e,$f())?new Proxy(e,cr):e)}function He(e){if(e instanceof IDBRequest)return kf(e);if(On.has(e))return On.get(e);const t=Hf(e);return t!==e&&(On.set(e,t),kr.set(t,e)),t}const xn=e=>kr.get(e);function Kf(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=He(i);return r&&i.addEventListener("upgradeneeded",c=>{r(He(i.result),c.oldVersion,c.newVersion,He(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Uf=["get","getKey","getAll","getAllKeys","count"],Vf=["put","add","delete","clear"],Mn=new Map;function ks(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Mn.get(t))return Mn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Vf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Uf.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Mn.set(t,o),o}Lf(e=>({...e,get:(t,n,r)=>ks(t,n)||e.get(t,n,r),has:(t,n)=>!!ks(t,n)||e.has(t,n)}));const Zo="@firebase/installations",Fr="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=1e4,ei=`w:${Fr}`,ti="FIS_v2",Wf="https://firebaseinstallations.googleapis.com/v1",zf=60*60*1e3,qf="installations",Jf="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},it=new un(qf,Jf,Yf);function ni(e){return e instanceof Et&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri({projectId:e}){return`${Wf}/projects/${e}/installations`}function si(e){return{token:e.token,requestStatus:2,expiresIn:Xf(e.expiresIn),creationTime:Date.now()}}async function oi(e,t){const r=(await t.json()).error;return it.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ii({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Gf(e,{refreshToken:t}){const n=ii(e);return n.append("Authorization",Zf(t)),n}async function ai(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Xf(e){return Number(e.replace("s","000"))}function Zf(e){return`${ti} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qf({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=ri(e),s=ii(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const i={fid:n,authVersion:ti,appId:e.appId,sdkVersion:ei},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await ai(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:si(u.authToken)}}else throw await oi("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=/^[cdef][\w-]{21}$/,lr="";function nu(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=ru(e);return tu.test(n)?n:lr}catch{return lr}}function ru(e){return eu(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new Map;function fi(e,t){const n=dn(e);ui(n,t),su(n,t)}function ui(e,t){const n=li.get(e);if(n)for(const r of n)r(t)}function su(e,t){const n=ou();n&&n.postMessage({key:e,fid:t}),iu()}let et=null;function ou(){return!et&&"BroadcastChannel"in self&&(et=new BroadcastChannel("[Firebase] FID Change"),et.onmessage=e=>{ui(e.data.key,e.data.fid)}),et}function iu(){li.size===0&&et&&(et.close(),et=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="firebase-installations-database",cu=1,at="firebase-installations-store";let Pn=null;function Lr(){return Pn||(Pn=Kf(au,cu,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(at)}}})),Pn}async function Zt(e,t){const n=dn(e),s=(await Lr()).transaction(at,"readwrite"),o=s.objectStore(at),i=await o.get(n);return await o.put(t,n),await s.done,(!i||i.fid!==t.fid)&&fi(e,t.fid),t}async function di(e){const t=dn(e),r=(await Lr()).transaction(at,"readwrite");await r.objectStore(at).delete(t),await r.done}async function hn(e,t){const n=dn(e),s=(await Lr()).transaction(at,"readwrite"),o=s.objectStore(at),i=await o.get(n),a=t(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&fi(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(e){let t;const n=await hn(e.appConfig,r=>{const s=lu(r),o=fu(e,s);return t=o.registrationPromise,o.installationEntry});return n.fid===lr?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function lu(e){const t=e||{fid:nu(),registrationStatus:0};return hi(t)}function fu(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(it.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=uu(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:du(e)}:{installationEntry:t}}async function uu(e,t){try{const n=await Qf(e,t);return Zt(e.appConfig,n)}catch(n){throw ni(n)&&n.customData.serverCode===409?await di(e.appConfig):await Zt(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function du(e){let t=await Fs(e.appConfig);for(;t.registrationStatus===1;)await ci(100),t=await Fs(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await jr(e);return r||n}return t}function Fs(e){return hn(e,t=>{if(!t)throw it.create("installation-not-found");return hi(t)})}function hi(e){return hu(e)?{fid:e.fid,registrationStatus:0}:e}function hu(e){return e.registrationStatus===1&&e.registrationTime+Qo<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pu({appConfig:e,heartbeatServiceProvider:t},n){const r=gu(e,n),s=Gf(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const i={installation:{sdkVersion:ei,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await ai(()=>fetch(r,a));if(c.ok){const u=await c.json();return si(u)}else throw await oi("Generate Auth Token",c)}function gu(e,{fid:t}){return`${ri(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(e,t=!1){let n;const r=await hn(e.appConfig,o=>{if(!pi(o))throw it.create("not-registered");const i=o.authToken;if(!t&&yu(i))return o;if(i.requestStatus===1)return n=mu(e,t),o;{if(!navigator.onLine)throw it.create("app-offline");const a=wu(o);return n=bu(e,a),a}});return n?await n:r.authToken}async function mu(e,t){let n=await Ls(e.appConfig);for(;n.authToken.requestStatus===1;)await ci(100),n=await Ls(e.appConfig);const r=n.authToken;return r.requestStatus===0?Hr(e,t):r}function Ls(e){return hn(e,t=>{if(!pi(t))throw it.create("not-registered");const n=t.authToken;return Eu(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function bu(e,t){try{const n=await pu(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Zt(e.appConfig,r),n}catch(n){if(ni(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await di(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Zt(e.appConfig,r)}throw n}}function pi(e){return e!==void 0&&e.registrationStatus===2}function yu(e){return e.requestStatus===2&&!_u(e)}function _u(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+zf}function wu(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Eu(e){return e.requestStatus===1&&e.requestTime+Qo<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iu(e){const t=e,{installationEntry:n,registrationPromise:r}=await jr(t);return r?r.catch(console.error):Hr(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vu(e,t=!1){const n=e;return await Cu(n),(await Hr(n,t)).token}async function Cu(e){const{registrationPromise:t}=await jr(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(e){if(!e||!e.options)throw Bn("App Configuration");if(!e.name)throw Bn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Bn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Bn(e){return it.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi="installations",Au="installations-internal",Su=e=>{const t=e.getProvider("app").getImmediate(),n=Tu(t),r=Rr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Du=e=>{const t=e.getProvider("app").getImmediate(),n=Rr(t,gi).getImmediate();return{getId:()=>Iu(n),getToken:s=>vu(n,s)}};function Ou(){ot(new Ve(gi,Su,"PUBLIC")),ot(new Ve(Au,Du,"PRIVATE"))}Ou();je(Zo,Fr);je(Zo,Fr,"esm2017");const xu=(e,t)=>t.some(n=>e instanceof n);let js,Hs;function Mu(){return js||(js=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pu(){return Hs||(Hs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mi=new WeakMap,fr=new WeakMap,bi=new WeakMap,Nn=new WeakMap,Kr=new WeakMap;function Bu(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(xe(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&mi.set(n,e)}).catch(()=>{}),Kr.set(t,e),t}function Nu(e){if(fr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});fr.set(e,t)}let ur={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return fr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||bi.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xe(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function $u(e){ur=e(ur)}function Ru(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call($n(this),t,...n);return bi.set(r,t.sort?t.sort():[t]),xe(r)}:Pu().includes(e)?function(...t){return e.apply($n(this),t),xe(mi.get(this))}:function(...t){return xe(e.apply($n(this),t))}}function ku(e){return typeof e=="function"?Ru(e):(e instanceof IDBTransaction&&Nu(e),xu(e,Mu())?new Proxy(e,ur):e)}function xe(e){if(e instanceof IDBRequest)return Bu(e);if(Nn.has(e))return Nn.get(e);const t=ku(e);return t!==e&&(Nn.set(e,t),Kr.set(t,e)),t}const $n=e=>Kr.get(e);function yi(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=xe(i);return r&&i.addEventListener("upgradeneeded",c=>{r(xe(i.result),c.oldVersion,c.newVersion,xe(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}function Rn(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),xe(n).then(()=>{})}const Fu=["get","getKey","getAll","getAllKeys","count"],Lu=["put","add","delete","clear"],kn=new Map;function Ks(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(kn.get(t))return kn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Lu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Fu.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return kn.set(t,o),o}$u(e=>({...e,get:(t,n,r)=>Ks(t,n)||e.get(t,n,r),has:(t,n)=>!!Ks(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="/firebase-messaging-sw.js",Hu="/firebase-cloud-messaging-push-scope",_i="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ku="https://fcmregistrations.googleapis.com/v1",wi="google.c.a.c_id",Uu="google.c.a.c_l",Vu="google.c.a.ts",Wu="google.c.a.e";var Us;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Us||(Us={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var $t;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})($t||($t={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function zu(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="fcm_token_details_db",qu=5,Vs="fcm_token_object_Store";async function Ju(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(Fn))return null;let t=null;return(await yi(Fn,qu,{upgrade:async(r,s,o,i)=>{var a;if(s<2||!r.objectStoreNames.contains(Vs))return;const c=i.objectStore(Vs),u=await c.index("fcmSenderId").get(e);if(await c.clear(),!!u){if(s===2){const d=u;if(!d.auth||!d.p256dh||!d.endpoint)return;t={token:d.fcmToken,createTime:(a=d.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:De(d.vapidKey)}}}else if(s===3){const d=u;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:De(d.auth),p256dh:De(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:De(d.vapidKey)}}}else if(s===4){const d=u;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:De(d.auth),p256dh:De(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:De(d.vapidKey)}}}}}})).close(),await Rn(Fn),await Rn("fcm_vapid_details_db"),await Rn("undefined"),Yu(t)?t:null}function Yu(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="firebase-messaging-database",Xu=1,ct="firebase-messaging-store";let Ln=null;function Ur(){return Ln||(Ln=yi(Gu,Xu,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ct)}}})),Ln}async function Ei(e){const t=Wr(e),r=await(await Ur()).transaction(ct).objectStore(ct).get(t);if(r)return r;{const s=await Ju(e.appConfig.senderId);if(s)return await Vr(e,s),s}}async function Vr(e,t){const n=Wr(e),s=(await Ur()).transaction(ct,"readwrite");return await s.objectStore(ct).put(t,n),await s.done,t}async function Zu(e){const t=Wr(e),r=(await Ur()).transaction(ct,"readwrite");await r.objectStore(ct).delete(t),await r.done}function Wr({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ee=new un("messaging","Messaging",Qu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ed(e,t){const n=await qr(e),r=vi(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(zr(e.appConfig),s)).json()}catch(i){throw ee.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw ee.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw ee.create("token-subscribe-no-token");return o.token}async function td(e,t){const n=await qr(e),r=vi(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${zr(e.appConfig)}/${t.token}`,s)).json()}catch(i){throw ee.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw ee.create("token-update-failed",{errorInfo:i})}if(!o.token)throw ee.create("token-update-no-token");return o.token}async function Ii(e,t){const r={method:"DELETE",headers:await qr(e)};try{const o=await(await fetch(`${zr(e.appConfig)}/${t}`,r)).json();if(o.error){const i=o.error.message;throw ee.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw ee.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function zr({projectId:e}){return`${Ku}/projects/${e}/registrations`}async function qr({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function vi({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==_i&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd=7*24*60*60*1e3;async function rd(e){const t=await id(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:De(t.getKey("auth")),p256dh:De(t.getKey("p256dh"))},r=await Ei(e.firebaseDependencies);if(r){if(ad(r.subscriptionOptions,n))return Date.now()>=r.createTime+nd?od(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Ii(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Ws(e.firebaseDependencies,n)}else return Ws(e.firebaseDependencies,n)}async function sd(e){const t=await Ei(e.firebaseDependencies);t&&(await Ii(e.firebaseDependencies,t.token),await Zu(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function od(e,t){try{const n=await td(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Vr(e.firebaseDependencies,r),n}catch(n){throw await sd(e),n}}async function Ws(e,t){const r={token:await ed(e,t),createTime:Date.now(),subscriptionOptions:t};return await Vr(e,r),r.token}async function id(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:zu(t)})}function ad(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&s&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return cd(t,e),ld(t,e),fd(t,e),t}function cd(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const o=t.notification.icon;o&&(e.notification.icon=o)}function ld(e,t){t.data&&(e.data=t.data)}function fd(e,t){var n,r,s,o,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const a=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=t.notification)===null||o===void 0?void 0:o.click_action;a&&(e.fcmOptions.link=a);const c=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(e){return typeof e=="object"&&!!e&&wi in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ci("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Ci("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Ci(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(e){if(!e||!e.options)throw jn("App Configuration Object");if(!e.name)throw jn("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw jn(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function jn(e){return ee.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=dd(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pd(e){try{e.swRegistration=await navigator.serviceWorker.register(ju,{scope:Hu}),e.swRegistration.update().catch(()=>{})}catch(t){throw ee.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gd(e,t){if(!t&&!e.swRegistration&&await pd(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw ee.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function md(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=_i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(e,t){if(!navigator)throw ee.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ee.create("permission-blocked");return await md(e,t==null?void 0:t.vapidKey),await gd(e,t==null?void 0:t.serviceWorkerRegistration),rd(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bd(e,t,n){const r=yd(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[wi],message_name:n[Uu],message_time:n[Vu],message_device_time:Math.floor(Date.now()/1e3)})}function yd(e){switch(e){case $t.NOTIFICATION_CLICKED:return"notification_open";case $t.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _d(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===$t.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(zs(n)):e.onMessageHandler.next(zs(n)));const r=n.data;ud(r)&&r[Wu]==="1"&&await bd(e,n.messageType,r)}const qs="@firebase/messaging",Js="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=e=>{const t=new hd(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>_d(t,n)),t},Ed=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Ti(t,r)}};function Id(){ot(new Ve("messaging",wd,"PUBLIC")),ot(new Ve("messaging-internal",Ed,"PRIVATE")),je(qs,Js),je(qs,Js,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vd(){try{await Vo()}catch{return!1}return typeof window<"u"&&Uo()&&Il()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(e,t){if(!navigator)throw ee.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(e=vf()){return vd().then(t=>{if(!t)throw ee.create("unsupported-browser")},t=>{throw ee.create("indexed-db-unsupported")}),Rr(Nr(e),"messaging").getImmediate()}async function Td(e,t){return e=Nr(e),Ti(e,t)}function Ad(e,t){return e=Nr(e),Cd(e,t)}Id();var Sd="firebase",Dd="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je(Sd,Dd,"app");const Od={apiKey:"AIzaSyCfiuDJWzZwKQjlfjFauvxiVYPv704T8go",authDomain:"notification-b41b2.firebaseapp.com",projectId:"notification-b41b2",storageBucket:"notification-b41b2.appspot.com",messagingSenderId:"928672791444",appId:"1:928672791444:web:65c086e7623fba3f692d81"},Ys=Cf(),xd=Ys.length?Ys[0]:qo(Od),Md=Ai(xd),Pd=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Bd={name:"AgoraUIKit",mounted(){const e=Ai();Ad(e,t=>{console.log("message on client:",t.notification)})},methods:{async requestPermission(){const e=await Td(Md,{vapidKey:"BO5ycO5hSTgRDXEV88qY4QpELMzxq8jaeZ_oZgissL14LzICVhwAUYif5hjtdi4Ce3xxZzk2Ya6tysB9Kr5qrog"});console.log(e||"permission")}}},Nd=fn("div",null,"Notification Test App",-1);function $d(e,t,n,r,s,o){return Ec(),Cc(pe,null,[Nd,fn("button",{onClick:t[0]||(t[0]=(...i)=>o.requestPermission&&o.requestPermission(...i))},"Notification")],64)}const Rd=Pd(Bd,[["render",$d]]);ll(Rd).mount("#app");
