import{u as $e,b as rt,e as st,d as ct,a as qt,c as Et,f as nt,g as _t}from"./layout.a470fe7f.js";import{J as Bt,r as F,c as y,w as ge,a8 as Ht,U as Lt,E as Tt,D as Rt,z as dt,O as J,h as C,g as ft,v as vt,a9 as Pt,aX as Dt,aa as De,_ as Nt,aY as Ae,ar as $t,a3 as me,a1 as Kt,a5 as Se,N as jt}from"./index.14e8ebb5.js";import{b as Qt,Q as Ut}from"./QChip.c477ed29.js";import{a as Wt,b as Xt,Q as Yt}from"./QItemLabel.7fed4ad0.js";import{s as ot,Q as Jt}from"./format.d9f81dde.js";let _e=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const r=document.createElement("div");Object.assign(r.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(r),e.scrollLeft=-1e3,_e=e.scrollLeft>=0,e.remove()}const $=1e3,Gt=["start","center","end","start-force","center-force","end-force"],mt=Array.prototype.filter,Zt=window.getComputedStyle(document.body).overflowAnchor===void 0?Bt:function(e,r){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const s=e.children||[];mt.call(s,M=>M.dataset&&M.dataset.qVsAnchor!==void 0).forEach(M=>{delete M.dataset.qVsAnchor});const p=s[r];p&&p.dataset&&(p.dataset.qVsAnchor="")}))};function he(e,r){return e+r}function Ne(e,r,s,p,M,a,q,w){const g=e===window?document.scrollingElement||document.documentElement:e,E=M===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-q-w,scrollMaxSize:0,offsetStart:-q,offsetEnd:-w};if(M===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=g.scrollLeft,c.scrollViewSize+=g.clientWidth),c.scrollMaxSize=g.scrollWidth,a===!0&&(c.scrollStart=(_e===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=g.scrollTop,c.scrollViewSize+=g.clientHeight),c.scrollMaxSize=g.scrollHeight),s!==null)for(let b=s.previousElementSibling;b!==null;b=b.previousElementSibling)b.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=b[E]);if(p!==null)for(let b=p.nextElementSibling;b!==null;b=b.nextElementSibling)b.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=b[E]);if(r!==e){const b=g.getBoundingClientRect(),z=r.getBoundingClientRect();M===!0?(c.offsetStart+=z.left-b.left,c.offsetEnd-=z.width):(c.offsetStart+=z.top-b.top,c.offsetEnd-=z.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function at(e,r,s,p){r==="end"&&(r=(e===window?document.body:e)[s===!0?"scrollWidth":"scrollHeight"]),e===window?s===!0?(p===!0&&(r=(_e===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-r),window.scrollTo(r,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r):s===!0?(p===!0&&(r=(_e===!0?e.scrollWidth-e.offsetWidth:0)-r),e.scrollLeft=r):e.scrollTop=r}function ze(e,r,s,p){if(s>=p)return 0;const M=r.length,a=Math.floor(s/$),q=Math.floor((p-1)/$)+1;let w=e.slice(a,q).reduce(he,0);return s%$!==0&&(w-=r.slice(a*$,s).reduce(he,0)),p%$!==0&&p!==M&&(w-=r.slice(p,q*$).reduce(he,0)),w}const St={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},cl=Object.keys(St),el={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...St};function tl({virtualScrollLength:e,getVirtualScrollTarget:r,getVirtualScrollEl:s,virtualScrollItemSizeComputed:p}){const M=ft(),{props:a,emit:q,proxy:w}=M,{$q:g}=w;let E,c,b,z=[],h;const N=F(0),_=F(0),Q=F({}),X=F(null),T=F(null),U=F(null),O=F({from:0,to:0}),I=y(()=>a.tableColspan!==void 0?a.tableColspan:100);p===void 0&&(p=y(()=>a.virtualScrollItemSize));const W=y(()=>p.value+";"+a.virtualScrollHorizontal),ye=y(()=>W.value+";"+a.virtualScrollSliceRatioBefore+";"+a.virtualScrollSliceRatioAfter);ge(ye,()=>{Y()}),ge(W,ue);function ue(){Z(c,!0)}function we(n){Z(n===void 0?c:n)}function G(n,i){const f=r();if(f==null||f.nodeType===8)return;const k=Ne(f,s(),X.value,T.value,a.virtualScrollHorizontal,g.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd);b!==k.scrollViewSize&&Y(k.scrollViewSize),ne(f,k,Math.min(e.value-1,Math.max(0,parseInt(n,10)||0)),0,Gt.indexOf(i)>-1?i:c>-1&&n>c?"end":"start")}function K(){const n=r();if(n==null||n.nodeType===8)return;const i=Ne(n,s(),X.value,T.value,a.virtualScrollHorizontal,g.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd),f=e.value-1,k=i.scrollMaxSize-i.offsetStart-i.offsetEnd-_.value;if(E===i.scrollStart)return;if(i.scrollMaxSize<=0){ne(n,i,0,0);return}b!==i.scrollViewSize&&Y(i.scrollViewSize),be(O.value.from);const B=Math.floor(i.scrollMaxSize-Math.max(i.scrollViewSize,i.offsetEnd)-Math.min(h[f],i.scrollViewSize/2));if(B>0&&Math.ceil(i.scrollStart)>=B){ne(n,i,f,i.scrollMaxSize-i.offsetEnd-z.reduce(he,0));return}let S=0,v=i.scrollStart-i.offsetStart,H=v;if(v<=k&&v+i.scrollViewSize>=N.value)v-=N.value,S=O.value.from,H=v;else for(let m=0;v>=z[m]&&S<f;m++)v-=z[m],S+=$;for(;v>0&&S<f;)v-=h[S],v>-i.scrollViewSize?(S++,H=v):H=h[S]+v;ne(n,i,S,H)}function ne(n,i,f,k,B){const S=typeof B=="string"&&B.indexOf("-force")>-1,v=S===!0?B.replace("-force",""):B,H=v!==void 0?v:"start";let m=Math.max(0,f-Q.value[H]),R=m+Q.value.total;R>e.value&&(R=e.value,m=Math.max(0,R-Q.value.total)),E=i.scrollStart;const ae=m!==O.value.from||R!==O.value.to;if(ae===!1&&v===void 0){Ce(f);return}const{activeElement:pe}=document,j=U.value;ae===!0&&j!==null&&j!==pe&&j.contains(pe)===!0&&(j.addEventListener("focusout",Ve),setTimeout(()=>{j!==null&&j.removeEventListener("focusout",Ve)})),Zt(j,f-m);const Oe=v!==void 0?h.slice(m,f).reduce(he,0):0;if(ae===!0){const ee=R>=O.value.from&&m<=O.value.to?O.value.to:R;O.value={from:m,to:ee},N.value=ze(z,h,0,m),_.value=ze(z,h,R,e.value),requestAnimationFrame(()=>{O.value.to!==R&&E===i.scrollStart&&(O.value={from:O.value.from,to:R},_.value=ze(z,h,R,e.value))})}requestAnimationFrame(()=>{if(E!==i.scrollStart)return;ae===!0&&be(m);const ee=h.slice(m,f).reduce(he,0),ie=ee+i.offsetStart+N.value,Me=ie+h[f];let xe=ie+k;if(v!==void 0){const Be=ee-Oe,P=i.scrollStart+Be;xe=S!==!0&&P<ie&&Me<P+i.scrollViewSize?P:v==="end"?Me-i.scrollViewSize:ie-(v==="start"?0:Math.round((i.scrollViewSize-h[f])/2))}E=xe,at(n,xe,a.virtualScrollHorizontal,g.lang.rtl),Ce(f)})}function be(n){const i=U.value;if(i){const f=mt.call(i.children,m=>m.classList&&m.classList.contains("q-virtual-scroll--skip")===!1),k=f.length,B=a.virtualScrollHorizontal===!0?m=>m.getBoundingClientRect().width:m=>m.offsetHeight;let S=n,v,H;for(let m=0;m<k;){for(v=B(f[m]),m++;m<k&&f[m].classList.contains("q-virtual-scroll--with-prev")===!0;)v+=B(f[m]),m++;H=v-h[S],H!==0&&(h[S]+=H,z[Math.floor(S/$)]+=H),S++}}}function Ve(){U.value!==null&&U.value!==void 0&&U.value.focus()}function Z(n,i){const f=1*p.value;(i===!0||Array.isArray(h)===!1)&&(h=[]);const k=h.length;h.length=e.value;for(let S=e.value-1;S>=k;S--)h[S]=f;const B=Math.floor((e.value-1)/$);z=[];for(let S=0;S<=B;S++){let v=0;const H=Math.min((S+1)*$,e.value);for(let m=S*$;m<H;m++)v+=h[m];z.push(v)}c=-1,E=void 0,N.value=ze(z,h,0,O.value.from),_.value=ze(z,h,O.value.to,e.value),n>=0?(be(O.value.from),J(()=>{G(n)})):oe()}function Y(n){if(n===void 0&&typeof window!="undefined"){const v=r();v!=null&&v.nodeType!==8&&(n=Ne(v,s(),X.value,T.value,a.virtualScrollHorizontal,g.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd).scrollViewSize)}b=n;const i=parseFloat(a.virtualScrollSliceRatioBefore)||0,f=parseFloat(a.virtualScrollSliceRatioAfter)||0,k=1+i+f,B=n===void 0||n<=0?1:Math.ceil(n/p.value),S=Math.max(1,B,Math.ceil((a.virtualScrollSliceSize>0?a.virtualScrollSliceSize:10)/k));Q.value={total:Math.ceil(S*k),start:Math.ceil(S*i),center:Math.ceil(S*(.5+i)),end:Math.ceil(S*(1+i)),view:B}}function Ie(n,i){const f=a.virtualScrollHorizontal===!0?"width":"height",k={["--q-virtual-scroll-item-"+f]:p.value+"px"};return[n==="tbody"?C(n,{class:"q-virtual-scroll__padding",key:"before",ref:X},[C("tr",[C("td",{style:{[f]:`${N.value}px`,...k},colspan:I.value})])]):C(n,{class:"q-virtual-scroll__padding",key:"before",ref:X,style:{[f]:`${N.value}px`,...k}}),C(n,{class:"q-virtual-scroll__content",key:"content",ref:U,tabindex:-1},i.flat()),n==="tbody"?C(n,{class:"q-virtual-scroll__padding",key:"after",ref:T},[C("tr",[C("td",{style:{[f]:`${_.value}px`,...k},colspan:I.value})])]):C(n,{class:"q-virtual-scroll__padding",key:"after",ref:T,style:{[f]:`${_.value}px`,...k}})]}function Ce(n){c!==n&&(a.onVirtualScroll!==void 0&&q("virtualScroll",{index:n,from:O.value.from,to:O.value.to-1,direction:n<c?"decrease":"increase",ref:w}),c=n)}Y();const oe=Ht(K,g.platform.is.ios===!0?120:35);Lt(()=>{Y()});let o=!1;return Tt(()=>{o=!0}),Rt(()=>{if(o!==!0)return;const n=r();E!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?at(n,E,a.virtualScrollHorizontal,g.lang.rtl):G(c)}),dt(()=>{oe.cancel()}),Object.assign(w,{scrollTo:G,reset:ue,refresh:we}),{virtualScrollSliceRange:O,virtualScrollSliceSizeComputed:Q,setVirtualScrollSize:Y,onVirtualScrollEvt:oe,localResetVirtualScroll:Z,padVirtualScroll:Ie,scrollTo:G,reset:ue,refresh:we}}var ll=vt({name:"QField",inheritAttrs:!1,props:$e,emits:rt,setup(){return st(ct())}});const it=e=>["add","add-unique","toggle"].includes(e),ul=".*+?^${}()|[]\\",nl=Object.keys($e);var dl=vt({name:"QSelect",inheritAttrs:!1,props:{...el,...qt,...$e,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:it},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...rt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:r,emit:s}){const{proxy:p}=ft(),{$q:M}=p,a=F(!1),q=F(!1),w=F(-1),g=F(""),E=F(!1),c=F(!1);let b=null,z,h,N,_=null,Q,X,T,U;const O=F(null),I=F(null),W=F(null),ye=F(null),ue=F(null),we=Et(e),G=_t(Ze),K=y(()=>Array.isArray(e.options)?e.options.length:0),ne=y(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:be,virtualScrollSliceSizeComputed:Ve,localResetVirtualScroll:Z,padVirtualScroll:Y,onVirtualScrollEvt:Ie,scrollTo:Ce,setVirtualScrollSize:oe}=tl({virtualScrollLength:K,getVirtualScrollTarget:wt,getVirtualScrollEl:Je,virtualScrollItemSizeComputed:ne}),o=ct(),n=y(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const l=e.mapOptions===!0&&z!==void 0?z:[],d=u.map(x=>yt(x,l));return e.modelValue===null&&t===!0?d.filter(x=>x!==null):d}return u}),i=y(()=>{const t={};return nl.forEach(u=>{const l=e[u];l!==void 0&&(t[u]=l)}),t}),f=y(()=>e.optionsDark===null?o.isDark.value:e.optionsDark),k=y(()=>nt(n.value)),B=y(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||n.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),S=y(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),v=y(()=>K.value===0),H=y(()=>n.value.map(t=>D.value(t)).join(", ")),m=y(()=>e.displayValue!==void 0?e.displayValue:H.value),R=y(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ae=y(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||n.value.some(R.value))),pe=y(()=>o.focused.value===!0?e.tabindex:-1),j=y(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":a.value===!0?"true":"false","aria-controls":`${o.targetUid.value}_lb`};return w.value>=0&&(t["aria-activedescendant"]=`${o.targetUid.value}_${w.value}`),t}),Oe=y(()=>({id:`${o.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ee=y(()=>n.value.map((t,u)=>({index:u,opt:t,html:R.value(t),selected:!0,removeAtIndex:ht,toggleOption:te,tabindex:pe.value}))),ie=y(()=>{if(K.value===0)return[];const{from:t,to:u}=be.value;return e.options.slice(t,u).map((l,d)=>{const x=re.value(l)===!0,V=t+d,A={clickable:!0,active:!1,activeClass:Be.value,manualFocus:!0,focused:!1,disable:x,tabindex:-1,dense:e.optionsDense,dark:f.value,role:"option",id:`${o.targetUid.value}_${V}`,onClick:()=>{te(l)}};return x!==!0&&(Te(l)===!0&&(A.active=!0),w.value===V&&(A.focused=!0),A["aria-selected"]=A.active===!0?"true":"false",M.platform.is.desktop===!0&&(A.onMousemove=()=>{a.value===!0&&se(V)})),{index:V,opt:l,html:R.value(l),label:D.value(l),selected:A.active,focused:A.focused,toggleOption:te,setOptionIndex:se,itemProps:A}})}),Me=y(()=>e.dropdownIcon!==void 0?e.dropdownIcon:M.iconSet.arrow.dropdown),xe=y(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Be=y(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),P=y(()=>Le(e.optionValue,"value")),D=y(()=>Le(e.optionLabel,"label")),re=y(()=>Le(e.optionDisable,"disable")),Fe=y(()=>n.value.map(t=>P.value(t))),gt=y(()=>{const t={onInput:Ze,onChange:G,onKeydown:Ye,onKeyup:We,onKeypress:Xe,onFocus:Qe,onClick(u){h===!0&&me(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=G,t});ge(n,t=>{z=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&o.innerLoading.value!==!0&&(q.value!==!0&&a.value!==!0||k.value!==!0)&&(N!==!0&&ve(),(q.value===!0||a.value===!0)&&ce(""))},{immediate:!0}),ge(()=>e.fillInput,ve),ge(a,Re),ge(K,Ft);function Ke(t){return e.emitValue===!0?P.value(t):t}function He(t){if(t>-1&&t<n.value.length)if(e.multiple===!0){const u=e.modelValue.slice();s("remove",{index:t,value:u.splice(t,1)[0]}),s("update:modelValue",u)}else s("update:modelValue",null)}function ht(t){He(t),o.focus()}function je(t,u){const l=Ke(t);if(e.multiple!==!0){e.fillInput===!0&&ke(D.value(t),!0,!0),s("update:modelValue",l);return}if(n.value.length===0){s("add",{index:0,value:l}),s("update:modelValue",e.multiple===!0?[l]:l);return}if(u===!0&&Te(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const d=e.modelValue.slice();s("add",{index:d.length,value:l}),d.push(l),s("update:modelValue",d)}function te(t,u){if(o.editable.value!==!0||t===void 0||re.value(t)===!0)return;const l=P.value(t);if(e.multiple!==!0){u!==!0&&(ke(e.fillInput===!0?D.value(t):"",!0,!0),le()),I.value!==null&&I.value.focus(),(n.value.length===0||Ae(P.value(n.value[0]),l)!==!0)&&s("update:modelValue",e.emitValue===!0?l:t);return}if((h!==!0||E.value===!0)&&o.focus(),Qe(),n.value.length===0){const V=e.emitValue===!0?l:t;s("add",{index:0,value:V}),s("update:modelValue",e.multiple===!0?[V]:V);return}const d=e.modelValue.slice(),x=Fe.value.findIndex(V=>Ae(V,l));if(x>-1)s("remove",{index:x,value:d.splice(x,1)[0]});else{if(e.maxValues!==void 0&&d.length>=e.maxValues)return;const V=e.emitValue===!0?l:t;s("add",{index:d.length,value:V}),d.push(V)}s("update:modelValue",d)}function se(t){if(M.platform.is.desktop!==!0)return;const u=t>-1&&t<K.value?t:-1;w.value!==u&&(w.value=u)}function qe(t=1,u){if(a.value===!0){let l=w.value;do l=ot(l+t,-1,K.value-1);while(l!==-1&&l!==w.value&&re.value(e.options[l])===!0);w.value!==l&&(se(l),Ce(l),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Ee(l>=0?D.value(e.options[l]):Q))}}function yt(t,u){const l=d=>Ae(P.value(d),t);return e.options.find(l)||u.find(l)||t}function Le(t,u){const l=t!==void 0?t:u;return typeof l=="function"?l:d=>d!==null&&typeof d=="object"&&l in d?d[l]:d}function Te(t){const u=P.value(t);return Fe.value.find(l=>Ae(l,u))!==void 0}function Qe(t){e.useInput===!0&&I.value!==null&&(t===void 0||I.value===t.target&&t.target.value===H.value)&&I.value.select()}function Ue(t){$t(t,27)===!0&&a.value===!0&&(me(t),le(),ve()),s("keyup",t)}function We(t){const{value:u}=t.target;if(t.keyCode!==void 0){Ue(t);return}if(t.target.value="",b!==null&&(clearTimeout(b),b=null),ve(),typeof u=="string"&&u.length>0){const l=u.toLocaleLowerCase(),d=V=>{const A=e.options.find(L=>V.value(L).toLocaleLowerCase()===l);return A===void 0?!1:(n.value.indexOf(A)===-1?te(A):le(),!0)},x=V=>{d(P)!==!0&&(d(D)===!0||V===!0||ce(u,!0,()=>x(!0)))};x()}else o.clearValue(t)}function Xe(t){s("keypress",t)}function Ye(t){if(s("keydown",t),Kt(t)===!0)return;const u=g.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),l=t.shiftKey!==!0&&e.multiple!==!0&&(w.value>-1||u===!0);if(t.keyCode===27){De(t);return}if(t.keyCode===9&&l===!1){de();return}if(t.target===void 0||t.target.id!==o.targetUid.value)return;if(t.keyCode===40&&o.innerLoading.value!==!0&&a.value===!1){Se(t),fe();return}if(t.keyCode===8&&e.hideSelected!==!0&&g.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?He(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&s("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof g.value!="string"||g.value.length===0)&&(Se(t),w.value=-1,qe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&Ve.value!==void 0&&(Se(t),w.value=Math.max(-1,Math.min(K.value,w.value+(t.keyCode===33?-1:1)*Ve.value.view)),qe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(Se(t),qe(t.keyCode===38?-1:1,e.multiple));const d=K.value;if((T===void 0||U<Date.now())&&(T=""),d>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||T.length>0)){a.value!==!0&&fe(t);const x=t.key.toLocaleLowerCase(),V=T.length===1&&T[0]===x;U=Date.now()+1500,V===!1&&(Se(t),T+=x);const A=new RegExp("^"+T.split("").map(Pe=>ul.indexOf(Pe)>-1?"\\"+Pe:Pe).join(".*"),"i");let L=w.value;if(V===!0||L<0||A.test(D.value(e.options[L]))!==!0)do L=ot(L+1,-1,d-1);while(L!==w.value&&(re.value(e.options[L])===!0||A.test(D.value(e.options[L]))!==!0));w.value!==L&&J(()=>{se(L),Ce(L),L>=0&&e.useInput===!0&&e.fillInput===!0&&Ee(D.value(e.options[L]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||T!=="")&&(t.keyCode!==9||l===!1))){if(t.keyCode!==9&&Se(t),w.value>-1&&w.value<d){te(e.options[w.value]);return}if(u===!0){const x=(V,A)=>{if(A){if(it(A)!==!0)return}else A=e.newValueMode;if(V==null)return;ke("",e.multiple!==!0,!0),(A==="toggle"?te:je)(V,A==="add-unique"),e.multiple!==!0&&(I.value!==null&&I.value.focus(),le())};if(e.onNewValue!==void 0?s("newValue",g.value,x):x(g.value),e.multiple!==!0)return}a.value===!0?de():o.innerLoading.value!==!0&&fe()}}function Je(){return h===!0?ue.value:W.value!==null&&W.value.contentEl!==null?W.value.contentEl:void 0}function wt(){return Je()}function bt(){return e.hideSelected===!0?[]:r["selected-item"]!==void 0?ee.value.map(t=>r["selected-item"](t)).slice():r.selected!==void 0?[].concat(r.selected()):e.useChips===!0?ee.value.map((t,u)=>C(Qt,{key:"option-"+u,removable:o.editable.value===!0&&re.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:pe.value,onRemove(){t.removeAtIndex(u)}},()=>C("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:D.value(t.opt)}))):[C("span",{[ae.value===!0?"innerHTML":"textContent"]:m.value})]}function Ge(){if(v.value===!0)return r["no-option"]!==void 0?r["no-option"]({inputValue:g.value}):void 0;const t=r.option!==void 0?r.option:l=>C(Yt,{key:l.index,...l.itemProps},()=>C(Wt,()=>C(Xt,()=>C("span",{[l.html===!0?"innerHTML":"textContent"]:l.label}))));let u=Y("div",ie.value.map(t));return r["before-options"]!==void 0&&(u=r["before-options"]().concat(u)),jt(r["after-options"],u)}function Vt(t,u){const l=u===!0?{...j.value,...o.splitAttrs.attributes.value}:void 0,d={ref:u===!0?I:void 0,key:"i_t",class:B.value,style:e.inputStyle,value:g.value!==void 0?g.value:"",type:"search",...l,id:u===!0?o.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...gt.value};return t!==!0&&h===!0&&(Array.isArray(d.class)===!0?d.class=[...d.class,"no-pointer-events"]:d.class+=" no-pointer-events"),C("input",d)}function Ze(t){b!==null&&(clearTimeout(b),b=null),!(t&&t.target&&t.target.qComposing===!0)&&(Ee(t.target.value||""),N=!0,Q=g.value,o.focused.value!==!0&&(h!==!0||E.value===!0)&&o.focus(),e.onFilter!==void 0&&(b=setTimeout(()=>{b=null,ce(g.value)},e.inputDebounce)))}function Ee(t){g.value!==t&&(g.value=t,s("inputValue",t))}function ke(t,u,l){N=l!==!0,e.useInput===!0&&(Ee(t),(u===!0||l!==!0)&&(Q=t),u!==!0&&ce(t))}function ce(t,u,l){if(e.onFilter===void 0||u!==!0&&o.focused.value!==!0)return;o.innerLoading.value===!0?s("filterAbort"):(o.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&n.value.length>0&&N!==!0&&t===D.value(n.value[0])&&(t="");const d=setTimeout(()=>{a.value===!0&&(a.value=!1)},10);_!==null&&clearTimeout(_),_=d,s("filter",t,(x,V)=>{(u===!0||o.focused.value===!0)&&_===d&&(clearTimeout(_),typeof x=="function"&&x(),c.value=!1,J(()=>{o.innerLoading.value=!1,o.editable.value===!0&&(u===!0?a.value===!0&&le():a.value===!0?Re(!0):a.value=!0),typeof V=="function"&&J(()=>{V(p)}),typeof l=="function"&&J(()=>{l(p)})}))},()=>{o.focused.value===!0&&_===d&&(clearTimeout(_),o.innerLoading.value=!1,c.value=!1),a.value===!0&&(a.value=!1)})}function Ct(){return C(Jt,{ref:W,class:S.value,style:e.popupContentStyle,modelValue:a.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&v.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:f.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:xe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...Oe.value,onScrollPassive:Ie,onBeforeShow:tt,onBeforeHide:pt,onShow:xt},Ge)}function pt(t){lt(t),de()}function xt(){oe()}function kt(t){me(t),I.value!==null&&I.value.focus(),E.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function At(t){me(t),J(()=>{E.value=!1})}function zt(){const t=[C(ll,{class:`col-auto ${o.fieldClass.value}`,...i.value,for:o.targetUid.value,dark:f.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:g.value.length>0,...o.splitAttrs.listeners.value,onFocus:kt,onBlur:At},{...r,rawControl:()=>o.getControl(!0),before:void 0,after:void 0})];return a.value===!0&&t.push(C("div",{ref:ue,class:S.value+" scroll",style:e.popupContentStyle,...Oe.value,onClick:De,onScrollPassive:Ie},Ge())),C(Ut,{ref:ye,modelValue:q.value,position:e.useInput===!0?"top":void 0,transitionShow:X,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:tt,onBeforeHide:It,onHide:Ot,onShow:Mt},()=>C("div",{class:"q-select__dialog"+(f.value===!0?" q-select__dialog--dark q-dark":"")+(E.value===!0?" q-select__dialog--focused":"")},t))}function It(t){lt(t),ye.value!==null&&ye.value.__updateRefocusTarget(o.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),o.focused.value=!1}function Ot(t){le(),o.focused.value===!1&&s("blur",t),ve()}function Mt(){const t=document.activeElement;(t===null||t.id!==o.targetUid.value)&&I.value!==null&&I.value!==t&&I.value.focus(),oe()}function de(){q.value!==!0&&(w.value=-1,a.value===!0&&(a.value=!1),o.focused.value===!1&&(_!==null&&(clearTimeout(_),_=null),o.innerLoading.value===!0&&(s("filterAbort"),o.innerLoading.value=!1,c.value=!1)))}function fe(t){o.editable.value===!0&&(h===!0?(o.onControlFocusin(t),q.value=!0,J(()=>{o.focus()})):o.focus(),e.onFilter!==void 0?ce(g.value):(v.value!==!0||r["no-option"]!==void 0)&&(a.value=!0))}function le(){q.value=!1,de()}function ve(){e.useInput===!0&&ke(e.multiple!==!0&&e.fillInput===!0&&n.value.length>0&&D.value(n.value[0])||"",!0,!0)}function Re(t){let u=-1;if(t===!0){if(n.value.length>0){const l=P.value(n.value[0]);u=e.options.findIndex(d=>Ae(P.value(d),l))}Z(u)}se(u)}function Ft(t,u){a.value===!0&&o.innerLoading.value===!1&&(Z(-1,!0),J(()=>{a.value===!0&&o.innerLoading.value===!1&&(t>u?Z():Re(!0))}))}function et(){q.value===!1&&W.value!==null&&W.value.updatePosition()}function tt(t){t!==void 0&&me(t),s("popupShow",t),o.hasPopupOpen=!0,o.onControlFocusin(t)}function lt(t){t!==void 0&&me(t),s("popupHide",t),o.hasPopupOpen=!1,o.onControlFocusout(t)}function ut(){h=M.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?r["no-option"]!==void 0||e.onFilter!==void 0||v.value===!1:!0),X=M.platform.is.ios===!0&&h===!0&&e.useInput===!0?"fade":e.transitionShow}return Pt(ut),Dt(et),ut(),dt(()=>{b!==null&&clearTimeout(b)}),Object.assign(p,{showPopup:fe,hidePopup:le,removeAtIndex:He,add:je,toggleOption:te,getOptionIndex:()=>w.value,setOptionIndex:se,moveOptionSelection:qe,filter:ce,updateMenuPosition:et,updateInputValue:ke,isOptionSelected:Te,getEmittingOptionValue:Ke,isOptionDisabled:(...t)=>re.value.apply(null,t)===!0,getOptionValue:(...t)=>P.value.apply(null,t),getOptionLabel:(...t)=>D.value.apply(null,t)}),Object.assign(o,{innerValue:n,fieldClass:y(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:O,targetRef:I,hasValue:k,showPopup:fe,floatingLabel:y(()=>e.hideSelected!==!0&&k.value===!0||typeof g.value=="number"||g.value.length>0||nt(e.displayValue)),getControlChild:()=>{if(o.editable.value!==!1&&(q.value===!0||v.value!==!0||r["no-option"]!==void 0))return h===!0?zt():Ct();o.hasPopupOpen===!0&&(o.hasPopupOpen=!1)},controlEvents:{onFocusin(t){o.onControlFocusin(t)},onFocusout(t){o.onControlFocusout(t,()=>{ve(),de()})},onClick(t){if(De(t),h!==!0&&a.value===!0){de(),I.value!==null&&I.value.focus();return}fe(t)}},getControl:t=>{const u=bt(),l=t===!0||q.value!==!0||h!==!0;if(e.useInput===!0)u.push(Vt(t,l));else if(o.editable.value===!0){const x=l===!0?j.value:void 0;u.push(C("input",{ref:l===!0?I:void 0,key:"d_t",class:"q-select__focus-target",id:l===!0?o.targetUid.value:void 0,value:m.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...x,onKeydown:Ye,onKeyup:Ue,onKeypress:Xe})),l===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&u.push(C("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:We}))}if(we.value!==void 0&&e.disable!==!0&&Fe.value.length>0){const x=Fe.value.map(V=>C("option",{value:V,selected:!0}));u.push(C("select",{class:"hidden",name:we.value,multiple:e.multiple},x))}const d=e.useInput===!0||l!==!0?void 0:o.splitAttrs.attributes.value;return C("div",{class:"q-field__native row items-center",...d},u)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[C(Nt,{class:"q-select__dropdown-icon"+(a.value===!0?" rotate-180":""),name:Me.value})]:null}),st(o)}});export{dl as Q,tl as a,ll as b,cl as c,_e as r,el as u};
