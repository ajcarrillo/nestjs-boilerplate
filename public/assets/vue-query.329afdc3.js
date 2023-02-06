import{r as X,f as Y}from"./index.09c0efc9.js";import{R as W,d as H,r as z,n as C,t as J,g as Z,c as ee,a as p,i as w,b as te,S as N,h as j,p as O,m as E,M as re,e as $,f as K,o as I,j as U,k as se,l as M,q as x,s as n,u as v,v as ie}from"./utils.esm.3895f0a6.js";class ne extends W{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||H,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||ae(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(e,t){const r=z(this.state.data,e,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:t==null?void 0:t.updatedAt,manual:t==null?void 0:t.manual}),r}setState(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})}cancel(e){var t;const r=this.promise;return(t=this.retryer)==null||t.cancel(e),r?r.then(C).catch(C):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>e.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!J(this.state.dataUpdatedAt,e)}onFocus(){var e;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t&&t.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}onOnline(){var e;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t&&t.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}addObserver(e){this.observers.indexOf(e)===-1&&(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.indexOf(e)!==-1&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,t){var r,s;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&t!=null&&t.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var i;return(i=this.retryer)==null||i.continueRetry(),this.promise}}if(e&&this.setOptions(e),!this.options.queryFn){const h=this.observers.find(y=>y.options.queryFn);h&&this.setOptions(h.options)}Array.isArray(this.options.queryKey);const u=Z(),o={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},c=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>{if(u)return this.abortSignalConsumed=!0,u.signal}})};c(o);const m=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(o)):Promise.reject("Missing queryFn"),Q={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:m};if(c(Q),(r=this.options.behavior)==null||r.onFetch(Q),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((s=Q.fetchOptions)==null?void 0:s.meta)){var F;this.dispatch({type:"fetch",meta:(F=Q.fetchOptions)==null?void 0:F.meta})}const d=h=>{if(w(h)&&h.silent||this.dispatch({type:"error",error:h}),!w(h)){var y,q;(y=(q=this.cache.config).onError)==null||y.call(q,h,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=ee({fn:Q.fetchFn,abort:u==null?void 0:u.abort.bind(u),onSuccess:h=>{var y,q;if(typeof h=="undefined"){d(new Error("undefined"));return}this.setData(h),(y=(q=this.cache.config).onSuccess)==null||y.call(q,h,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:d,onFail:(h,y)=>{this.dispatch({type:"failed",failureCount:h,error:y})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:Q.options.retry,retryDelay:Q.options.retryDelay,networkMode:Q.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){const t=r=>{var s,i;switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(s=e.meta)!=null?s:null,fetchStatus:te(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(i=e.dataUpdatedAt)!=null?i:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const u=e.error;return w(u)&&u.revert&&this.revertState?{...this.revertState}:{...r,error:u,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:u,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=t(this.state),p.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}function ae(a){const e=typeof a.initialData=="function"?a.initialData():a.initialData,t=typeof e!="undefined",r=t?typeof a.initialDataUpdatedAt=="function"?a.initialDataUpdatedAt():a.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:t?r!=null?r:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:t?"success":"loading",fetchStatus:"idle"}}class k extends N{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,t,r){var s;const i=t.queryKey,u=(s=t.queryHash)!=null?s:j(i,t);let o=this.get(u);return o||(o=new ne({cache:this,logger:e.getLogger(),queryKey:i,queryHash:u,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(o)),o}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){const t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter(r=>r!==e),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){p.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,t){const[r]=O(e,t);return typeof r.exact=="undefined"&&(r.exact=!0),this.queries.find(s=>E(r,s))}findAll(e,t){const[r]=O(e,t);return Object.keys(r).length>0?this.queries.filter(s=>E(r,s)):this.queries}notify(e){p.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){p.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){p.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class B extends N{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,t,r){const s=new re({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:r,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0});return this.add(s),s}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){p.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return typeof e.exact=="undefined"&&(e.exact=!0),this.mutations.find(t=>$(e,t))}findAll(e){return this.mutations.filter(t=>$(e,t))}notify(e){p.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){const e=this.mutations.filter(t=>t.state.isPaused);return p.batch(()=>e.reduce((t,r)=>t.then(()=>r.continue().catch(C)),Promise.resolve()))}}function ue(){return{onFetch:a=>{a.fetchFn=()=>{var e,t,r,s,i,u;const o=(e=a.fetchOptions)==null||(t=e.meta)==null?void 0:t.refetchPage,c=(r=a.fetchOptions)==null||(s=r.meta)==null?void 0:s.fetchMore,m=c==null?void 0:c.pageParam,Q=(c==null?void 0:c.direction)==="forward",F=(c==null?void 0:c.direction)==="backward",d=((i=a.state.data)==null?void 0:i.pages)||[],h=((u=a.state.data)==null?void 0:u.pageParams)||[];let y=h,q=!1;const G=l=>{Object.defineProperty(l,"signal",{enumerable:!0,get:()=>{var g;if((g=a.signal)!=null&&g.aborted)q=!0;else{var f;(f=a.signal)==null||f.addEventListener("abort",()=>{q=!0})}return a.signal}})},L=a.options.queryFn||(()=>Promise.reject("Missing queryFn")),A=(l,g,f,b)=>(y=b?[g,...y]:[...y,g],b?[f,...l]:[...l,f]),D=(l,g,f,b)=>{if(q)return Promise.reject("Cancelled");if(typeof f=="undefined"&&!g&&l.length)return Promise.resolve(l);const _={queryKey:a.queryKey,pageParam:f,meta:a.options.meta};G(_);const S=L(_);return Promise.resolve(S).then(V=>A(l,f,V,b))};let P;if(!d.length)P=D([]);else if(Q){const l=typeof m!="undefined",g=l?m:T(a.options,d);P=D(d,l,g)}else if(F){const l=typeof m!="undefined",g=l?m:oe(a.options,d);P=D(d,l,g,!0)}else{y=[];const l=typeof a.options.getNextPageParam=="undefined";P=(o&&d[0]?o(d[0],0,d):!0)?D([],l,h[0]):Promise.resolve(A([],h[0],d[0]));for(let f=1;f<d.length;f++)P=P.then(b=>{if(o&&d[f]?o(d[f],f,d):!0){const S=l?h[f]:T(a.options,b);return D(b,l,S)}return Promise.resolve(A(b,h[f],d[f]))})}return P.then(l=>({pages:l,pageParams:y}))}}}}function T(a,e){return a.getNextPageParam==null?void 0:a.getNextPageParam(e[e.length-1],e)}function oe(a,e){return a.getPreviousPageParam==null?void 0:a.getPreviousPageParam(e[0],e)}class he{constructor(e={}){this.queryCache=e.queryCache||new k,this.mutationCache=e.mutationCache||new B,this.logger=e.logger||H,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=K.subscribe(()=>{K.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=I.subscribe(()=>{I.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,t;this.mountCount--,this.mountCount===0&&((e=this.unsubscribeFocus)==null||e.call(this),this.unsubscribeFocus=void 0,(t=this.unsubscribeOnline)==null||t.call(this),this.unsubscribeOnline=void 0)}isFetching(e,t){const[r]=O(e,t);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,t){var r;return(r=this.queryCache.find(e,t))==null?void 0:r.state.data}ensureQueryData(e,t,r){const s=U(e,t,r),i=this.getQueryData(s.queryKey);return i?Promise.resolve(i):this.fetchQuery(s)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:t,state:r})=>{const s=r.data;return[t,s]})}setQueryData(e,t,r){const s=this.queryCache.find(e),i=s==null?void 0:s.state.data,u=se(t,i);if(typeof u=="undefined")return;const o=U(e),c=this.defaultQueryOptions(o);return this.queryCache.build(this,c).setData(u,{...r,manual:!0})}setQueriesData(e,t,r){return p.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:s})=>[s,this.setQueryData(s,t,r)]))}getQueryState(e,t){var r;return(r=this.queryCache.find(e,t))==null?void 0:r.state}removeQueries(e,t){const[r]=O(e,t),s=this.queryCache;p.batch(()=>{s.findAll(r).forEach(i=>{s.remove(i)})})}resetQueries(e,t,r){const[s,i]=O(e,t,r),u=this.queryCache,o={type:"active",...s};return p.batch(()=>(u.findAll(s).forEach(c=>{c.reset()}),this.refetchQueries(o,i)))}cancelQueries(e,t,r){const[s,i={}]=O(e,t,r);typeof i.revert=="undefined"&&(i.revert=!0);const u=p.batch(()=>this.queryCache.findAll(s).map(o=>o.cancel(i)));return Promise.all(u).then(C).catch(C)}invalidateQueries(e,t,r){const[s,i]=O(e,t,r);return p.batch(()=>{var u,o;if(this.queryCache.findAll(s).forEach(m=>{m.invalidate()}),s.refetchType==="none")return Promise.resolve();const c={...s,type:(u=(o=s.refetchType)!=null?o:s.type)!=null?u:"active"};return this.refetchQueries(c,i)})}refetchQueries(e,t,r){const[s,i]=O(e,t,r),u=p.batch(()=>this.queryCache.findAll(s).filter(c=>!c.isDisabled()).map(c=>{var m;return c.fetch(void 0,{...i,cancelRefetch:(m=i==null?void 0:i.cancelRefetch)!=null?m:!0,meta:{refetchPage:s.refetchPage}})}));let o=Promise.all(u).then(C);return i!=null&&i.throwOnError||(o=o.catch(C)),o}fetchQuery(e,t,r){const s=U(e,t,r),i=this.defaultQueryOptions(s);typeof i.retry=="undefined"&&(i.retry=!1);const u=this.queryCache.build(this,i);return u.isStaleByTime(i.staleTime)?u.fetch(i):Promise.resolve(u.state.data)}prefetchQuery(e,t,r){return this.fetchQuery(e,t,r).then(C).catch(C)}fetchInfiniteQuery(e,t,r){const s=U(e,t,r);return s.behavior=ue(),this.fetchQuery(s)}prefetchInfiniteQuery(e,t,r){return this.fetchInfiniteQuery(e,t,r).then(C).catch(C)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,t){const r=this.queryDefaults.find(s=>M(e)===M(s.queryKey));r?r.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})}getQueryDefaults(e){if(!e)return;const t=this.queryDefaults.find(r=>x(e,r.queryKey));return t==null?void 0:t.defaultOptions}setMutationDefaults(e,t){const r=this.mutationDefaults.find(s=>M(e)===M(s.mutationKey));r?r.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})}getMutationDefaults(e){if(!e)return;const t=this.mutationDefaults.find(r=>x(e,r.mutationKey));return t==null?void 0:t.defaultOptions}defaultQueryOptions(e){if(e!=null&&e._defaulted)return e;const t={...this.defaultOptions.queries,...this.getQueryDefaults(e==null?void 0:e.queryKey),...e,_defaulted:!0};return!t.queryHash&&t.queryKey&&(t.queryHash=j(t.queryKey,t)),typeof t.refetchOnReconnect=="undefined"&&(t.refetchOnReconnect=t.networkMode!=="always"),typeof t.useErrorBoundary=="undefined"&&(t.useErrorBoundary=!!t.suspense),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(e==null?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}class le extends k{find(e,t){const r=n(e),s=n(t);return super.find(r,s)}findAll(e,t){const r=n(e),s=n(t);return v(r)?super.findAll(r,s):super.findAll(r)}}class ce extends B{find(e){return super.find(n(e))}findAll(e){return super.findAll(n(e))}}class R extends he{constructor(e={}){const t=n(e),r={logger:n(t.logger),defaultOptions:n(t.defaultOptions),queryCache:t.queryCache||new le,mutationCache:t.mutationCache||new ce};super(r),this.isRestoring=X(!1)}isFetching(e,t){const r=n(e),s=n(t);return v(r)?super.isFetching(r,s):super.isFetching(r)}isMutating(e){return super.isMutating(n(e))}getQueryData(e,t){return super.getQueryData(n(e),n(t))}getQueriesData(e){const t=n(e);return v(t)?super.getQueriesData(t):super.getQueriesData(t)}setQueryData(e,t,r){return super.setQueryData(n(e),t,n(r))}setQueriesData(e,t,r){const s=n(e),i=n(r);return v(s)?super.setQueriesData(s,t,i):super.setQueriesData(s,t,i)}getQueryState(e,t){return super.getQueryState(n(e),n(t))}removeQueries(e,t){const r=n(e);return v(r)?super.removeQueries(r,n(t)):super.removeQueries(r)}resetQueries(e,t,r){const s=n(e),i=n(t);return v(s)?super.resetQueries(s,i,n(r)):super.resetQueries(s,i)}cancelQueries(e,t,r){const s=n(e),i=n(t);return v(s)?super.cancelQueries(s,i,n(r)):super.cancelQueries(s,i)}invalidateQueries(e,t,r){const s=n(e),i=n(t);return v(s)?super.invalidateQueries(s,i,n(r)):super.invalidateQueries(s,i)}refetchQueries(e,t,r){const s=n(e),i=n(t);return v(s)?super.refetchQueries(s,i,n(r)):super.refetchQueries(s,i)}fetchQuery(e,t,r){const s=n(e),i=n(t);return v(s)?super.fetchQuery(s,i,n(r)):super.fetchQuery(s)}prefetchQuery(e,t,r){return super.prefetchQuery(n(e),n(t),n(r))}fetchInfiniteQuery(e,t,r){const s=n(e),i=n(t);return v(s)?super.fetchInfiniteQuery(s,i,n(r)):super.fetchInfiniteQuery(s)}prefetchInfiniteQuery(e,t,r){return super.prefetchInfiniteQuery(n(e),n(t),n(r))}setDefaultOptions(e){super.setDefaultOptions(n(e))}setQueryDefaults(e,t){super.setQueryDefaults(n(e),n(t))}getQueryDefaults(e){return super.getQueryDefaults(n(e))}setMutationDefaults(e,t){super.setMutationDefaults(n(e),n(t))}getMutationDefaults(e){return super.getMutationDefaults(n(e))}}const fe={install:(a,e={})=>{const t=ie(e.queryClientKey);let r;if("queryClient"in e&&e.queryClient)r=e.queryClient;else if(e.contextSharing&&typeof window!="undefined")if(window.__VUE_QUERY_CONTEXT__)r=window.__VUE_QUERY_CONTEXT__;else{const u="queryClientConfig"in e?e.queryClientConfig:void 0;r=new R(u),window.__VUE_QUERY_CONTEXT__=r}else{const u="queryClientConfig"in e?e.queryClientConfig:void 0;r=new R(u)}r.mount();let s=()=>{};if(e.clientPersister){r.isRestoring.value=!0;const[u,o]=e.clientPersister(r);s=u,o.then(()=>{r.isRestoring.value=!1})}const i=()=>{r.unmount(),s()};if(a.onUnmount)a.onUnmount(i);else{const u=a.unmount;a.unmount=function(){i(),u()}}a.provide(t,r)}};var me=Y(({app:a})=>{const e=new R({defaultOptions:{queries:{}}});fe.install(a,{queryClient:e})});export{me as default};
