import{v as ee,r as O,c as f,w as x,z as C,aw as k,av as E,h as H,$ as te,g as oe,x as ae,a6 as ne}from"./index.2447aa50.js";import{m as ie,u as le,o as se,v as A,q as re,b as ue,l as ce,c as de,r as fe,s as ve,t as he,d as me,w as ge,x as q,y as ye,j,z as D,A as Te}from"./format.267f291d.js";import{g as pe}from"./scroll.b3c06f66.js";var Pe=ee({name:"QTooltip",inheritAttrs:!1,props:{...ie,...le,...se,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:re},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...ue],setup(e,{slots:M,emit:y,attrs:v}){let i,l;const h=oe(),{proxy:{$q:a}}=h,s=O(null),c=O(!1),L=f(()=>D(e.anchor,a.lang.rtl)),Q=f(()=>D(e.self,a.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:z,removeTick:N}=ce(),{registerTimeout:d}=de(),{transitionProps:R,transitionStyle:_}=fe(e),{localScrollTarget:T,changeScrollEvent:$,unconfigureScrollTarget:B}=ve(e,w),{anchorEl:o,canShow:I,anchorEvents:r}=he({showing:c,configureAnchorEl:X}),{show:U,hide:m}=me({showing:c,canShow:I,handleShow:F,handleHide:G,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:J,delayHide:K});const{showPortal:p,hidePortal:b,renderPortal:V}=ge(h,s,Z,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:s,onClickOutside(n){return m(n),n.target.classList.contains("q-dialog__backdrop")&&ne(n),!0}},g=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);x(g,n=>{(n===!0?Te:q)(t)}),C(()=>{q(t)})}function F(t){p(),z(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),w()}),i===void 0&&(i=x(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,u)),d(()=>{p(!0),y("show",t)},e.transitionDuration)}function G(t){N(),b(),S(),d(()=>{b(!0),y("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),B(),k(r,"tooltipTemp")}function u(){const t=s.value;o.value===null||!t||ye({el:t,offset:e.offset,anchorEl:o.value,anchorOrigin:L.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function J(t){if(a.platform.is.mobile===!0){j(),document.body.classList.add("non-selectable");const g=o.value,n=["touchmove","touchcancel","touchend","click"].map(P=>[g,P,"delayHide","passiveCapture"]);E(r,"tooltipTemp",n)}d(()=>{U(t)},e.delay)}function K(t){a.platform.is.mobile===!0&&(k(r,"tooltipTemp"),j(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{m(t)},e.hideDelay)}function X(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];E(r,"anchor",t)}function w(){if(o.value!==null||e.scrollTarget!==void 0){T.value=pe(o.value,e.scrollTarget);const t=e.noParentEvent===!0?u:m;$(T.value,t)}}function Y(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,_.value],role:"tooltip"},ae(M.default)):null}function Z(){return H(te,R.value,Y)}return C(S),Object.assign(h.proxy,{updatePosition:u}),V}});export{Pe as Q};
