import{v as V,c as h,h as q,x as ne,ar as Ye,aw as Je,r as T,ax as le,a5 as oe,A as Ze,g as L,ay as et,a9 as he,J as Q,aj as ge,w as x,o as He,z as W,am as tt,K as p,az as nt,aA as D,a as lt,a2 as ot,aB as it,aC as at,aD as rt,E as Me,a4 as Ae,aa as y,al as st,$ as ut,aE as ct,aF as be,aG as dt}from"./index.0b175f01.js";import{u as ie,a as ae}from"./use-dark.46bf0f81.js";import{b as we,c as ft,a as vt}from"./focus-manager.33224ae2.js";import{c as mt,g as ht,b as gt,a as bt,h as wt}from"./scroll.be050d28.js";var Jt=V({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const l=h(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>q("div",{class:l.value},ne(t.default))}}),Zt=V({name:"QItem",props:{...ie,...Ye,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:l}){const{proxy:{$q:n}}=L(),o=ae(e,n),{hasLink:u,linkAttrs:i,linkClass:s,linkTag:c,navigateOnClick:d}=Je(),r=T(null),g=T(null),b=h(()=>e.clickable===!0||u.value===!0||e.tag==="label"),a=h(()=>e.disable!==!0&&b.value===!0),w=h(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(u.value===!0&&e.active===null?s.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),$=h(()=>{if(e.insetLevel===void 0)return null;const m=n.lang.rtl===!0?"Right":"Left";return{["padding"+m]:16+e.insetLevel*56+"px"}});function B(m){a.value===!0&&(g.value!==null&&(m.qKeyEvent!==!0&&document.activeElement===r.value?g.value.focus():document.activeElement===g.value&&r.value.focus()),d(m))}function k(m){if(a.value===!0&&le(m,13)===!0){oe(m),m.qKeyEvent=!0;const _=new MouseEvent("click",m);_.qKeyEvent=!0,r.value.dispatchEvent(_)}l("keyup",m)}function v(){const m=Ze(t.default,[]);return a.value===!0&&m.unshift(q("div",{class:"q-focus-helper",tabindex:-1,ref:g})),m}return()=>{const m={ref:r,class:w.value,style:$.value,role:"listitem",onClick:B,onKeyup:k};return a.value===!0?(m.tabindex=e.tabindex||"0",Object.assign(m,i.value)):b.value===!0&&(m["aria-disabled"]="true"),q(c.value,m,v())}}});const pt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},X={xs:2,sm:4,md:8,lg:16,xl:24};var en=V({name:"QSeparator",props:{...ie,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=L(),l=ae(e,t.proxy.$q),n=h(()=>e.vertical===!0?"vertical":"horizontal"),o=h(()=>` q-separator--${n.value}`),u=h(()=>e.inset!==!1?`${o.value}-${pt[e.inset]}`:""),i=h(()=>`q-separator${o.value}${u.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(l.value===!0?" q-separator--dark":"")),s=h(()=>{const c={};if(e.size!==void 0&&(c[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const d=e.spaced===!0?`${X.md}px`:e.spaced in X?`${X[e.spaced]}px`:e.spaced,r=e.vertical===!0?["Left","Right"]:["Top","Bottom"];c[`margin${r[0]}`]=c[`margin${r[1]}`]=d}return c});return()=>q("hr",{class:i.value,style:s.value,"aria-orientation":n.value})}});function yt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),et.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const xt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function qt({showing:e,avoidEmit:t,configureAnchorEl:l}){const{props:n,proxy:o,emit:u}=L(),i=T(null);let s=null;function c(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const d={};l===void 0&&(Object.assign(d,{hide(a){o.hide(a)},toggle(a){o.toggle(a),a.qAnchorHandled=!0},toggleKey(a){le(a,13)===!0&&d.toggle(a)},contextClick(a){o.hide(a),he(a),Q(()=>{o.show(a),a.qAnchorHandled=!0})},prevent:he,mobileTouch(a){if(d.mobileCleanup(a),c(a)!==!0)return;o.hide(a),i.value.classList.add("non-selectable");const w=a.target;ge(d,"anchor",[[w,"touchmove","mobileCleanup","passive"],[w,"touchend","mobileCleanup","passive"],[w,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),s=setTimeout(()=>{s=null,o.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),s!==null&&(clearTimeout(s),s=null),e.value===!0&&a!==void 0&&yt()}}),l=function(a=n.contextMenu){if(n.noParentEvent===!0||i.value===null)return;let w;a===!0?o.$q.platform.is.mobile===!0?w=[[i.value,"touchstart","mobileTouch","passive"]]:w=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:w=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],ge(d,"anchor",w)});function r(){tt(d,"anchor")}function g(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;l()}function b(){if(n.target===!1||n.target===""||o.$el.parentNode===null)i.value=null;else if(n.target===!0)g(o.$el.parentNode);else{let a=n.target;if(typeof n.target=="string")try{a=document.querySelector(n.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,l()):(i.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return x(()=>n.contextMenu,a=>{i.value!==null&&(r(),l(a))}),x(()=>n.target,()=>{i.value!==null&&r(),b()}),x(()=>n.noParentEvent,a=>{i.value!==null&&(a===!0?r():l())}),He(()=>{b(),t!==!0&&n.modelValue===!0&&i.value===null&&u("update:modelValue",!1)}),W(()=>{s!==null&&clearTimeout(s),r()}),{anchorEl:i,canShow:c,anchorEvents:d}}function Tt(e,t){const l=T(null);let n;function o(s,c){const d=`${c!==void 0?"add":"remove"}EventListener`,r=c!==void 0?c:n;s!==window&&s[d]("scroll",r,p.passive),window[d]("scroll",r,p.passive),n=c}function u(){l.value!==null&&(o(l.value),l.value=null)}const i=x(()=>e.noParentEvent,()=>{l.value!==null&&(u(),t())});return W(i),{localScrollTarget:l,unconfigureScrollTarget:u,changeScrollEvent:o}}const kt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},St=["beforeShow","show","beforeHide","hide"];function Et({showing:e,canShow:t,hideOnRouteChange:l,handleShow:n,handleHide:o,processOnMount:u}){const i=L(),{props:s,emit:c,proxy:d}=i;let r;function g(v){e.value===!0?w(v):b(v)}function b(v){if(s.disable===!0||v!==void 0&&v.qAnchorHandled===!0||t!==void 0&&t(v)!==!0)return;const m=s["onUpdate:modelValue"]!==void 0;m===!0&&(c("update:modelValue",!0),r=v,Q(()=>{r===v&&(r=void 0)})),(s.modelValue===null||m===!1)&&a(v)}function a(v){e.value!==!0&&(e.value=!0,c("beforeShow",v),n!==void 0?n(v):c("show",v))}function w(v){if(s.disable===!0)return;const m=s["onUpdate:modelValue"]!==void 0;m===!0&&(c("update:modelValue",!1),r=v,Q(()=>{r===v&&(r=void 0)})),(s.modelValue===null||m===!1)&&$(v)}function $(v){e.value!==!1&&(e.value=!1,c("beforeHide",v),o!==void 0?o(v):c("hide",v))}function B(v){s.disable===!0&&v===!0?s["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):v===!0!==e.value&&(v===!0?a:$)(r)}x(()=>s.modelValue,B),l!==void 0&&nt(i)===!0&&x(()=>d.$route.fullPath,()=>{l.value===!0&&e.value===!0&&w()}),u===!0&&He(()=>{B(s.modelValue)});const k={show:b,hide:w,toggle:g};return Object.assign(d,k),k}const M=[];function tn(e){return M.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function We(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return D(e)}else if(e.__qPortal===!0){const l=D(e);return l!==void 0&&l.$options.name==="QPopupProxy"?(e.hide(t),l):e}e=D(e)}while(e!=null)}function nn(e,t,l){for(;l!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(l--,e.$options.name==="QMenu"){e=We(e,t);continue}e.hide(t)}e=D(e)}}function Ct(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Pt(e,t,l,n){const o=T(!1),u=T(!1);let i=null;const s={},c=n==="dialog"&&Ct(e);function d(g){if(g===!0){we(s),u.value=!0;return}u.value=!1,o.value===!1&&(c===!1&&i===null&&(i=at(!1,n)),o.value=!0,M.push(e.proxy),ft(s))}function r(g){if(u.value=!1,g!==!0)return;we(s),o.value=!1;const b=M.indexOf(e.proxy);b!==-1&&M.splice(b,1),i!==null&&(rt(i),i=null)}return lt(()=>{r(!0)}),e.proxy.__qPortal=!0,ot(e.proxy,"contentEl",()=>t.value),{showPortal:d,hidePortal:r,portalIsActive:o,portalIsAccessible:u,renderPortal:()=>c===!0?l():o.value===!0?[q(it,{to:i},l())]:void 0}}const Lt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function $t(e,t=()=>{},l=()=>{}){return{transitionProps:h(()=>{const n=`q-transition--${e.transitionShow||t()}`,o=`q-transition--${e.transitionHide||l()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${o}-leave-from`,leaveActiveClass:`${o}-leave-active`,leaveToClass:`${o}-leave-to`}}),transitionStyle:h(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Bt(){let e;const t=L();function l(){e=void 0}return Me(l),W(l),{removeTick:l,registerTick(n){e=n,Q(()=>{e===n&&(Ae(t)===!1&&e(),e=void 0)})}}}function Ht(){let e=null;const t=L();function l(){e!==null&&(clearTimeout(e),e=null)}return Me(l),W(l),{removeTimeout:l,registerTimeout(n,o){l(),Ae(t)===!1&&(e=setTimeout(n,o))}}}const E=[];let A;function Mt(e){A=e.keyCode===27}function At(){A===!0&&(A=!1)}function Wt(e){A===!0&&(A=!1,le(e,27)===!0&&E[E.length-1](e))}function _e(e){window[e]("keydown",Mt),window[e]("blur",At),window[e]("keyup",Wt),A=!1}function _t(e){y.is.desktop===!0&&(E.push(e),E.length===1&&_e("addEventListener"))}function pe(e){const t=E.indexOf(e);t>-1&&(E.splice(t,1),E.length===0&&_e("removeEventListener"))}const C=[];function ze(e){C[C.length-1](e)}function zt(e){y.is.desktop===!0&&(C.push(e),C.length===1&&document.body.addEventListener("focusin",ze))}function Ft(e){const t=C.indexOf(e);t>-1&&(C.splice(t,1),C.length===0&&document.body.removeEventListener("focusin",ze))}const{notPassiveCapture:K}=p,P=[];function I(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let l=M.length-1;for(;l>=0;){const n=M[l].$;if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;l--}for(let n=P.length-1;n>=0;n--){const o=P[n];if((o.anchorEl.value===null||o.anchorEl.value.contains(t)===!1)&&(t===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(t)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function Ot(e){P.push(e),P.length===1&&(document.addEventListener("mousedown",I,K),document.addEventListener("touchstart",I,K))}function ye(e){const t=P.findIndex(l=>l===e);t>-1&&(P.splice(t,1),P.length===0&&(document.removeEventListener("mousedown",I,K),document.removeEventListener("touchstart",I,K)))}let xe,qe;function Te(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Vt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const te={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{te[`${e}#ltr`]=e,te[`${e}#rtl`]=e});function ke(e,t){const l=e.split(" ");return{vertical:l[0],horizontal:te[`${l[1]}#${t===!0?"rtl":"ltr"}`]}}function Rt(e,t){let{top:l,left:n,right:o,bottom:u,width:i,height:s}=e.getBoundingClientRect();return t!==void 0&&(l-=t[1],n-=t[0],u+=t[1],o+=t[0],i+=t[0],s+=t[1]),{top:l,bottom:u,height:s,left:n,right:o,width:i,middle:n+(o-n)/2,center:l+(u-l)/2}}function Dt(e,t,l){let{top:n,left:o}=e.getBoundingClientRect();return n+=t.top,o+=t.left,l!==void 0&&(n+=l[1],o+=l[0]),{top:n,bottom:n+1,height:1,left:o,right:o+1,width:1,middle:o,center:n}}function Qt(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Se(e,t,l){return{top:e[l.anchorOrigin.vertical]-t[l.selfOrigin.vertical],left:e[l.anchorOrigin.horizontal]-t[l.selfOrigin.horizontal]}}function Kt(e){if(y.is.ios===!0&&window.visualViewport!==void 0){const s=document.body.style,{offsetLeft:c,offsetTop:d}=window.visualViewport;c!==xe&&(s.setProperty("--q-pe-left",c+"px"),xe=c),d!==qe&&(s.setProperty("--q-pe-top",d+"px"),qe=d)}const{scrollLeft:t,scrollTop:l}=e.el,n=e.absoluteOffset===void 0?Rt(e.anchorEl,e.cover===!0?[0,0]:e.offset):Dt(e.anchorEl,e.absoluteOffset,e.offset);let o={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(o.minWidth=n.width+"px",e.cover===!0&&(o.minHeight=n.height+"px")),Object.assign(e.el.style,o);const u=Qt(e.el);let i=Se(n,u,e);if(e.absoluteOffset===void 0||e.offset===void 0)Y(i,n,u,e.anchorOrigin,e.selfOrigin);else{const{top:s,left:c}=i;Y(i,n,u,e.anchorOrigin,e.selfOrigin);let d=!1;if(i.top!==s){d=!0;const r=2*e.offset[1];n.center=n.top-=r,n.bottom-=r+2}if(i.left!==c){d=!0;const r=2*e.offset[0];n.middle=n.left-=r,n.right-=r+2}d===!0&&(i=Se(n,u,e),Y(i,n,u,e.anchorOrigin,e.selfOrigin))}o={top:i.top+"px",left:i.left+"px"},i.maxHeight!==void 0&&(o.maxHeight=i.maxHeight+"px",n.height>i.maxHeight&&(o.minHeight=o.maxHeight)),i.maxWidth!==void 0&&(o.maxWidth=i.maxWidth+"px",n.width>i.maxWidth&&(o.minWidth=o.maxWidth)),Object.assign(e.el.style,o),e.el.scrollTop!==l&&(e.el.scrollTop=l),e.el.scrollLeft!==t&&(e.el.scrollLeft=t)}function Y(e,t,l,n,o){const u=l.bottom,i=l.right,s=mt(),c=window.innerHeight-s,d=document.body.clientWidth;if(e.top<0||e.top+u>c)if(o.vertical==="center")e.top=t[n.vertical]>c/2?Math.max(0,c-u):0,e.maxHeight=Math.min(u,c);else if(t[n.vertical]>c/2){const r=Math.min(c,n.vertical==="center"?t.center:n.vertical===o.vertical?t.bottom:t.top);e.maxHeight=Math.min(u,r),e.top=Math.max(0,r-u)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===o.vertical?t.top:t.bottom),e.maxHeight=Math.min(u,c-e.top);if(e.left<0||e.left+i>d)if(e.maxWidth=Math.min(i,d),o.horizontal==="middle")e.left=t[n.horizontal]>d/2?Math.max(0,d-i):0;else if(t[n.horizontal]>d/2){const r=Math.min(d,n.horizontal==="middle"?t.middle:n.horizontal===o.horizontal?t.right:t.left);e.maxWidth=Math.min(i,r),e.left=Math.max(0,r-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===o.horizontal?t.left:t.right),e.maxWidth=Math.min(i,d-e.left)}var ln=V({name:"QMenu",inheritAttrs:!1,props:{...xt,...kt,...ie,...Lt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Te},self:{type:String,validator:Te},offset:{type:Array,validator:Vt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...St,"click","escapeKey"],setup(e,{slots:t,emit:l,attrs:n}){let o=null,u,i,s;const c=L(),{proxy:d}=c,{$q:r}=d,g=T(null),b=T(!1),a=h(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),w=ae(e,r),{registerTick:$,removeTick:B}=Bt(),{registerTimeout:k}=Ht(),{transitionProps:v,transitionStyle:m}=$t(e),{localScrollTarget:_,changeScrollEvent:Fe,unconfigureScrollTarget:Oe}=Tt(e,ve),{anchorEl:H,canShow:Ve}=qt({showing:b}),{hide:re}=Et({showing:b,canShow:Ve,handleShow:Ie,handleHide:je,hideOnRouteChange:a,processOnMount:!0}),{showPortal:se,hidePortal:ue,renderPortal:Re}=Pt(c,g,Ue,"menu"),j={anchorEl:H,innerRef:g,onClickOutside(f){if(e.persistent!==!0&&b.value===!0)return re(f),(f.type==="touchstart"||f.target.classList.contains("q-dialog__backdrop"))&&oe(f),!0}},ce=h(()=>ke(e.anchor||(e.cover===!0?"center middle":"bottom start"),r.lang.rtl)),De=h(()=>e.cover===!0?ce.value:ke(e.self||"top start",r.lang.rtl)),Qe=h(()=>(e.square===!0?" q-menu--square":"")+(w.value===!0?" q-menu--dark q-dark":"")),Ke=h(()=>e.autoClose===!0?{onClick:Ne}:{}),de=h(()=>b.value===!0&&e.persistent!==!0);x(de,f=>{f===!0?(_t(U),Ot(j)):(pe(U),ye(j))});function N(){vt(()=>{let f=g.value;f&&f.contains(document.activeElement)!==!0&&(f=f.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||f.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||f.querySelector("[autofocus], [data-autofocus]")||f,f.focus({preventScroll:!0}))})}function Ie(f){if(o=e.noRefocus===!1?document.activeElement:null,zt(me),se(),ve(),u=void 0,f!==void 0&&(e.touchPosition||e.contextMenu)){const G=st(f);if(G.left!==void 0){const{top:Ge,left:Xe}=H.value.getBoundingClientRect();u={left:G.left-Xe,top:G.top-Ge}}}i===void 0&&(i=x(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,z)),e.noFocus!==!0&&document.activeElement.blur(),$(()=>{z(),e.noFocus!==!0&&N()}),k(()=>{r.platform.is.ios===!0&&(s=e.autoClose,g.value.click()),z(),se(!0),l("show",f)},e.transitionDuration)}function je(f){B(),ue(),fe(!0),o!==null&&(f===void 0||f.qClickOutside!==!0)&&(((f&&f.type.indexOf("key")===0?o.closest('[tabindex]:not([tabindex^="-"])'):void 0)||o).focus(),o=null),k(()=>{ue(!0),l("hide",f)},e.transitionDuration)}function fe(f){u=void 0,i!==void 0&&(i(),i=void 0),(f===!0||b.value===!0)&&(Ft(me),Oe(),ye(j),pe(U)),f!==!0&&(o=null)}function ve(){(H.value!==null||e.scrollTarget!==void 0)&&(_.value=ht(H.value,e.scrollTarget),Fe(_.value,z))}function Ne(f){s!==!0?(We(d,f),l("click",f)):s=!1}function me(f){de.value===!0&&e.noFocus!==!0&&ct(g.value,f.target)!==!0&&N()}function U(f){l("escapeKey"),re(f)}function z(){const f=g.value;f===null||H.value===null||Kt({el:f,offset:e.offset,anchorEl:H.value,anchorOrigin:ce.value,selfOrigin:De.value,absoluteOffset:u,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ue(){return q(ut,v.value,()=>b.value===!0?q("div",{role:"menu",...n,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+Qe.value,n.class],style:[n.style,m.value],...Ke.value},ne(t.default)):null)}return W(fe),Object.assign(d,{focus:N,updatePosition:z}),Re}}),on=V({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const l=h(()=>parseInt(e.lines,10)),n=h(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),o=h(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>q("div",{style:o.value,class:n.value},ne(t.default))}});function an(e,t,l){let n;function o(){n!==void 0&&(be.remove(n),n=void 0)}return W(()=>{e.value===!0&&o()}),{removeFromHistory:o,addToHistory(){n={condition:()=>l.value===!0,handler:t},be.add(n)}}}let F=0,J,Z,O,ee=!1,Ee,Ce,Pe,S=null;function It(e){jt(e)&&oe(e)}function jt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=dt(e),l=e.shiftKey&&!e.deltaX,n=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),o=l||n?e.deltaY:e.deltaX;for(let u=0;u<t.length;u++){const i=t[u];if(wt(i,n))return n?o<0&&i.scrollTop===0?!0:o>0&&i.scrollTop+i.clientHeight===i.scrollHeight:o<0&&i.scrollLeft===0?!0:o>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function Le(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function R(e){ee!==!0&&(ee=!0,requestAnimationFrame(()=>{ee=!1;const{height:t}=e.target,{clientHeight:l,scrollTop:n}=document.scrollingElement;(O===void 0||t!==window.innerHeight)&&(O=l-t,document.scrollingElement.scrollTop=n),n>O&&(document.scrollingElement.scrollTop-=Math.ceil((n-O)/8))}))}function $e(e){const t=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:o}=window.getComputedStyle(t);J=gt(window),Z=bt(window),Ee=t.style.left,Ce=t.style.top,Pe=window.location.href,t.style.left=`-${J}px`,t.style.top=`-${Z}px`,o!=="hidden"&&(o==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,y.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",R,p.passiveCapture),window.visualViewport.addEventListener("scroll",R,p.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Le,p.passiveCapture))}y.is.desktop===!0&&y.is.mac===!0&&window[`${e}EventListener`]("wheel",It,p.notPassive),e==="remove"&&(y.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",R,p.passiveCapture),window.visualViewport.removeEventListener("scroll",R,p.passiveCapture)):window.removeEventListener("scroll",Le,p.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Ee,t.style.top=Ce,window.location.href===Pe&&window.scrollTo(J,Z),O=void 0)}function Nt(e){let t="add";if(e===!0){if(F++,S!==null){clearTimeout(S),S=null;return}if(F>1)return}else{if(F===0||(F--,F>0))return;if(t="remove",y.is.ios===!0&&y.is.nativeMobile===!0){S!==null&&clearTimeout(S),S=setTimeout(()=>{$e(t),S=null},100);return}}$e(t)}function rn(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Nt(t))}}}const Be=["B","KB","MB","GB","TB","PB"];function sn(e){let t=0;for(;parseInt(e,10)>=1024&&t<Be.length-1;)e/=1024,++t;return`${e.toFixed(1)}${Be[t]}`}function un(e){return e.charAt(0).toUpperCase()+e.slice(1)}function cn(e,t,l){return l<=t?t:Math.min(l,Math.max(t,e))}function dn(e,t,l){if(l<=t)return t;const n=l-t+1;let o=t+(e-t)%n;return o<t&&(o=n+o),o===0?0:o}function fn(e,t=2,l="0"){if(e==null)return e;const n=""+e;return n.length>=t?n:new Array(t-n.length+1).join(l)+n}export{Tt as A,qt as B,ye as C,Kt as D,ke as E,Ot as F,sn as G,tn as H,nn as I,ln as Q,Zt as a,Jt as b,en as c,yt as d,St as e,Ht as f,Et as g,an as h,rn as i,cn as j,on as k,Lt as l,Bt as m,$t as n,Pt as o,pe as p,zt as q,Ft as r,_t as s,dn as t,kt as u,fn as v,un as w,xt as x,Te as y,Vt as z};
