import{b as M,u as G}from"./index.812f81a0.js";class R{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.push(e),this.onSubscribe(),()=>{this.listeners=this.listeners.filter(n=>n!==e),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}const x=typeof window=="undefined"||"Deno"in window;function ie(){}function re(t,e){return typeof t=="function"?t(e):t}function I(t){return typeof t=="number"&&t>=0&&t!==1/0}function oe(t,e){return Math.max(t+(e||0)-Date.now(),0)}function ue(t,e,n){return g(t)?typeof e=="function"?{...n,queryKey:t,queryFn:e}:{...e,queryKey:t}:t}function ae(t,e,n){return g(t)?[{...e,queryKey:t},n]:[t||{},e]}function le(t,e){const{type:n="all",exact:s,fetchStatus:i,predicate:o,queryKey:l,stale:h}=t;if(g(l)){if(s){if(e.queryHash!==B(l,e.options))return!1}else if(!A(e.queryKey,l))return!1}if(n!=="all"){const f=e.isActive();if(n==="active"&&!f||n==="inactive"&&f)return!1}return!(typeof h=="boolean"&&e.isStale()!==h||typeof i!="undefined"&&i!==e.state.fetchStatus||o&&!o(e))}function ce(t,e){const{exact:n,fetching:s,predicate:i,mutationKey:o}=t;if(g(o)){if(!e.options.mutationKey)return!1;if(n){if(j(e.options.mutationKey)!==j(o))return!1}else if(!A(e.options.mutationKey,o))return!1}return!(typeof s=="boolean"&&e.state.status==="loading"!==s||i&&!i(e))}function B(t,e){return((e==null?void 0:e.queryKeyHashFn)||j)(t)}function j(t){return JSON.stringify(t,(e,n)=>S(n)?Object.keys(n).sort().reduce((s,i)=>(s[i]=n[i],s),{}):n)}function A(t,e){return T(t,e)}function T(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!T(t[n],e[n])):!1}function K(t,e){if(t===e)return t;const n=C(t)&&C(e);if(n||S(t)&&S(e)){const s=n?t.length:Object.keys(t).length,i=n?e:Object.keys(e),o=i.length,l=n?[]:{};let h=0;for(let f=0;f<o;f++){const y=n?f:i[f];l[y]=K(t[y],e[y]),l[y]===t[y]&&h++}return s===o&&h===s?t:l}return e}function fe(t,e){if(t&&!e||e&&!t)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0}function C(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function S(t){if(!P(t))return!1;const e=t.constructor;if(typeof e=="undefined")return!0;const n=e.prototype;return!(!P(n)||!n.hasOwnProperty("isPrototypeOf"))}function P(t){return Object.prototype.toString.call(t)==="[object Object]"}function g(t){return Array.isArray(t)}function D(t){return new Promise(e=>{setTimeout(e,t)})}function L(t){D(0).then(t)}function he(){if(typeof AbortController=="function")return new AbortController}function de(t,e,n){return n.isDataEqual!=null&&n.isDataEqual(t,e)?t:typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?K(t,e):e}class V extends R{constructor(){super(),this.setup=e=>{if(!x&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(s=>{typeof s=="boolean"?this.setFocused(s):this.onFocus()})}setFocused(e){this.focused=e,e&&this.onFocus()}onFocus(){this.listeners.forEach(e=>{e()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document=="undefined"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const H=new V;class Y extends R{constructor(){super(),this.setup=e=>{if(!x&&window.addEventListener){const n=()=>e();return window.addEventListener("online",n,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var n;this.setup=e,(n=this.cleanup)==null||n.call(this),this.cleanup=e(s=>{typeof s=="boolean"?this.setOnline(s):this.onOnline()})}setOnline(e){this.online=e,e&&this.onOnline()}onOnline(){this.listeners.forEach(e=>{e()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator=="undefined"||typeof navigator.onLine=="undefined"?!0:navigator.onLine}}const U=new Y;function J(t){return Math.min(1e3*2**t,3e4)}function q(t){return(t!=null?t:"online")==="online"?U.isOnline():!0}class N{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}}function ye(t){return t instanceof N}function z(t){let e=!1,n=0,s=!1,i,o,l;const h=new Promise((u,c)=>{o=u,l=c}),f=u=>{s||(b(new N(u)),t.abort==null||t.abort())},y=()=>{e=!0},r=()=>{e=!1},d=()=>!H.isFocused()||t.networkMode!=="always"&&!U.isOnline(),E=u=>{s||(s=!0,t.onSuccess==null||t.onSuccess(u),i==null||i(),o(u))},b=u=>{s||(s=!0,t.onError==null||t.onError(u),i==null||i(),l(u))},m=()=>new Promise(u=>{i=c=>{if(s||!d())return u(c)},t.onPause==null||t.onPause()}).then(()=>{i=void 0,s||t.onContinue==null||t.onContinue()}),v=()=>{if(s)return;let u;try{u=t.fn()}catch(c){u=Promise.reject(c)}Promise.resolve(u).then(E).catch(c=>{var w,a;if(s)return;const p=(w=t.retry)!=null?w:3,O=(a=t.retryDelay)!=null?a:J,k=typeof O=="function"?O(n,c):O,Q=p===!0||typeof p=="number"&&n<p||typeof p=="function"&&p(n,c);if(e||!Q){b(c);return}n++,t.onFail==null||t.onFail(n,c),D(k).then(()=>{if(d())return m()}).then(()=>{e?b(c):v()})})};return q(t.networkMode)?v():m().then(v),{promise:h,cancel:f,continue:()=>{i==null||i()},cancelRetry:y,continueRetry:r}}const W=console;function X(){let t=[],e=0,n=r=>{r()},s=r=>{r()};const i=r=>{let d;e++;try{d=r()}finally{e--,e||h()}return d},o=r=>{e?t.push(r):L(()=>{n(r)})},l=r=>(...d)=>{o(()=>{r(...d)})},h=()=>{const r=t;t=[],r.length&&L(()=>{s(()=>{r.forEach(d=>{n(d)})})})};return{batch:i,batchCalls:l,schedule:o,setNotifyFunction:r=>{n=r},setBatchNotifyFunction:r=>{s=r}}}const Z=X();class _{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),I(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,e!=null?e:x?1/0:5*60*1e3)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class pe extends _{constructor(e){super(),this.options={...e.defaultOptions,...e.options},this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||W,this.observers=[],this.state=e.state||$(),this.updateCacheTime(this.options.cacheTime),this.scheduleGc()}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.indexOf(e)===-1&&(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(n=>n!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()}async execute(){const e=()=>{var a;return this.retryer=z({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(p,O)=>{this.dispatch({type:"failed",failureCount:p,error:O})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(a=this.options.retry)!=null?a:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var s,i,o,l,h,f;if(!n){var y,r,d,E;this.dispatch({type:"loading",variables:this.options.variables}),await((y=(r=this.mutationCache.config).onMutate)==null?void 0:y.call(r,this.state.variables,this));const p=await((d=(E=this.options).onMutate)==null?void 0:d.call(E,this.state.variables));p!==this.state.context&&this.dispatch({type:"loading",context:p,variables:this.state.variables})}const a=await e();return await((s=(i=this.mutationCache.config).onSuccess)==null?void 0:s.call(i,a,this.state.variables,this.state.context,this)),await((o=(l=this.options).onSuccess)==null?void 0:o.call(l,a,this.state.variables,this.state.context)),await((h=(f=this.options).onSettled)==null?void 0:h.call(f,a,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:a}),a}catch(a){try{var b,m,v,u,c,w;throw await((b=(m=this.mutationCache.config).onError)==null?void 0:b.call(m,a,this.state.variables,this.state.context,this)),await((v=(u=this.options).onError)==null?void 0:v.call(u,a,this.state.variables,this.state.context)),await((c=(w=this.options).onSettled)==null?void 0:c.call(w,void 0,a,this.state.variables,this.state.context)),a}finally{this.dispatch({type:"error",error:a})}}}dispatch(e){const n=s=>{switch(e.type){case"failed":return{...s,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"loading":return{...s,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!q(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...s,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:e.error,failureCount:s.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...s,...e.state}}};this.state=n(this.state),Z.batch(()=>{this.observers.forEach(s=>{s.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function $(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}const ee="VUE_QUERY_CLIENT";function be(t){const e=t?":"+t:"";return""+ee+e}function ve(t){return Array.isArray(t)}function me(t){return Array.isArray(t)}function we(t,e){Object.keys(t).forEach(n=>{t[n]=e[n]})}function F(t,e){if(e){const n=e(t);if(n!==void 0||M(t))return n}if(Array.isArray(t))return t.map(n=>F(n,e));if(typeof t=="object"&&ne(t)){const n=Object.entries(t).map(([s,i])=>[s,F(i,e)]);return Object.fromEntries(n)}return t}function te(t){return F(t,e=>{if(M(e))return te(G(e))})}function ne(t){if(Object.prototype.toString.call(t)!=="[object Object]")return!1;const e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}export{we as A,me as B,pe as M,_ as R,R as S,Z as a,q as b,z as c,W as d,ce as e,H as f,he as g,B as h,ye as i,ue as j,re as k,j as l,le as m,ie as n,U as o,ae as p,A as q,de as r,te as s,oe as t,ve as u,be as v,fe as w,x,I as y,$ as z};
