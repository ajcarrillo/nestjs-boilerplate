import{w as R,o as X,z as M,i as te,g as P,a6 as le,r as m,c as i,a8 as re,a2 as ne,a9 as ue,a5 as ae,J as ie,E as se,D as de,H as fe,h as a,aa as A,_ as Q,a0 as ce,x as k,$ as ve,ab as pe,ac as $}from"./index.4e938c33.js";import{u as me,a as ge}from"./use-dark.2fd19ef1.js";import{a as he,u as be,r as Ce}from"./planeacion.api.7dcbe402.js";function ye({validate:e,resetValidation:o,requiresQForm:l}){const r=te(le,!1);if(r!==!1){const{props:c,proxy:s}=P();Object.assign(s,{validate:e,resetValidation:o}),R(()=>c.disable,n=>{n===!0?(typeof o=="function"&&o(),r.unbindComponent(s)):r.bindComponent(s)}),X(()=>{c.disable!==!0&&r.bindComponent(s)}),M(()=>{c.disable!==!0&&r.unbindComponent(s)})}else l===!0&&console.error("Parent QForm not found on useFormChild()!")}const Z=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,J=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,W=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,E=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,I=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,T={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Z.test(e),hexaColor:e=>J.test(e),hexOrHexaColor:e=>W.test(e),rgbColor:e=>E.test(e),rgbaColor:e=>I.test(e),rgbOrRgbaColor:e=>E.test(e)||I.test(e),hexOrRgbColor:e=>Z.test(e)||E.test(e),hexaOrRgbaColor:e=>J.test(e)||I.test(e),anyColor:e=>W.test(e)||E.test(e)||I.test(e)},qe=[!0,!1,"ondemand"],xe={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>qe.includes(e)}};function _e(e,o){const{props:l,proxy:r}=P(),c=m(!1),s=m(null),n=m(null);ye({validate:C,resetValidation:x});let f=0,b;const B=i(()=>l.rules!==void 0&&l.rules!==null&&l.rules.length>0),g=i(()=>l.disable!==!0&&B.value===!0),q=i(()=>l.error===!0||c.value===!0),z=i(()=>typeof l.errorMessage=="string"&&l.errorMessage.length>0?l.errorMessage:s.value);R(()=>l.modelValue,()=>{F()}),R(()=>l.reactiveRules,h=>{h===!0?b===void 0&&(b=R(()=>l.rules,()=>{F(!0)})):b!==void 0&&(b(),b=void 0)},{immediate:!0}),R(e,h=>{h===!0?n.value===null&&(n.value=!1):n.value===!1&&(n.value=!0,g.value===!0&&l.lazyRules!=="ondemand"&&o.value===!1&&_())});function x(){f++,o.value=!1,n.value=null,c.value=!1,s.value=null,_.cancel()}function C(h=l.modelValue){if(g.value!==!0)return!0;const S=++f,O=o.value!==!0?()=>{n.value=!0}:()=>{},y=(d,v)=>{d===!0&&O(),c.value=d,s.value=v||null,o.value=!1},w=[];for(let d=0;d<l.rules.length;d++){const v=l.rules[d];let p;if(typeof v=="function"?p=v(h,T):typeof v=="string"&&T[v]!==void 0&&(p=T[v](h)),p===!1||typeof p=="string")return y(!0,p),!1;p!==!0&&p!==void 0&&w.push(p)}return w.length===0?(y(!1),!0):(o.value=!0,Promise.all(w).then(d=>{if(d===void 0||Array.isArray(d)===!1||d.length===0)return S===f&&y(!1),!0;const v=d.find(p=>p===!1||typeof p=="string");return S===f&&y(v!==void 0,v),v===void 0},d=>(S===f&&(console.error(d),y(!0)),!1)))}function F(h){g.value===!0&&l.lazyRules!=="ondemand"&&(n.value===!0||l.lazyRules!==!0&&h!==!0)&&_()}const _=re(C,0);return M(()=>{b!==void 0&&b(),_.cancel()}),Object.assign(r,{resetValidation:x,validate:C}),ne(r,"hasError",()=>q.value),{isDirtyModel:n,hasRules:B,hasError:q,errorMessage:z,validate:C,resetValidation:x}}const G=/^on[A-Z]/;function Se(e,o){const l={listeners:m({}),attributes:m({})};function r(){const c={},s={};for(const n in e)n!=="class"&&n!=="style"&&G.test(n)===!1&&(c[n]=e[n]);for(const n in o.props)G.test(n)===!0&&(s[n]=o.props[n]);l.attributes.value=c,l.listeners.value=s}return ue(r),r(),l}function D(e){return e===void 0?`f_${be()}`:e}function we(e){return e!=null&&(""+e).length>0}const Ee={...me,...xe,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ie=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Pe(){const{props:e,attrs:o,proxy:l,vnode:r}=P();return{isDark:ge(e,l.$q),editable:i(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:m(!1),focused:m(!1),hasPopupOpen:!1,splitAttrs:Se(o,r),targetUid:m(D(e.for)),rootRef:m(null),targetRef:m(null),controlRef:m(null)}}function ze(e){const{props:o,emit:l,slots:r,attrs:c,proxy:s}=P(),{$q:n}=s;let f=null;e.hasValue===void 0&&(e.hasValue=i(()=>we(o.modelValue))),e.emitValue===void 0&&(e.emitValue=t=>{l("update:modelValue",t)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:H,onFocusout:N}),Object.assign(e,{clearValue:U,onControlFocusin:H,onControlFocusout:N,focus:v}),e.computedCounter===void 0&&(e.computedCounter=i(()=>{if(o.counter!==!1){const t=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,u=o.maxlength!==void 0?o.maxlength:o.maxValues;return t+(u!==void 0?" / "+u:"")}}));const{isDirtyModel:b,hasRules:B,hasError:g,errorMessage:q,resetValidation:z}=_e(e.focused,e.innerLoading),x=e.floatingLabel!==void 0?i(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):i(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),C=i(()=>o.bottomSlots===!0||o.hint!==void 0||B.value===!0||o.counter===!0||o.error!==null),F=i(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),_=i(()=>`q-field row no-wrap items-start q-field--${F.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(x.value===!0?" q-field--float":"")+(S.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(g.value===!0?" q-field--error":"")+(g.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&C.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),h=i(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(g.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length>0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),S=i(()=>o.labelSlot===!0||o.label!==void 0),O=i(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&g.value!==!0?` text-${o.labelColor}`:"")),y=i(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:x.value,modelValue:o.modelValue,emitValue:e.emitValue})),w=i(()=>{const t={for:e.targetUid.value};return o.disable===!0?t["aria-disabled"]="true":o.readonly===!0&&(t["aria-readonly"]="true"),t});R(()=>o.for,t=>{e.targetUid.value=D(t)});function d(){const t=document.activeElement;let u=e.targetRef!==void 0&&e.targetRef.value;u&&(t===null||t.id!==e.targetUid.value)&&(u.hasAttribute("tabindex")===!0||(u=u.querySelector("[tabindex]")),u&&u!==t&&u.focus({preventScroll:!0}))}function v(){he(d)}function p(){Ce(d);const t=document.activeElement;t!==null&&e.rootRef.value.contains(t)&&t.blur()}function H(t){f!==null&&(clearTimeout(f),f=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,l("focus",t))}function N(t,u){f!==null&&clearTimeout(f),f=setTimeout(()=>{f=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,l("blur",t)),u!==void 0&&u())})}function U(t){ae(t),n.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),l("update:modelValue",null),l("clear",o.modelValue),ie(()=>{z(),n.platform.is.mobile!==!0&&(b.value=!1)})}function Y(){const t=[];return r.prepend!==void 0&&t.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:A},r.prepend())),t.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},ee())),g.value===!0&&o.noErrorIcon===!1&&t.push(V("error",[a(Q,{name:n.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?t.push(V("inner-loading-append",r.loading!==void 0?r.loading():[a(ce,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&t.push(V("inner-clearable-append",[a(Q,{class:"q-field__focusable-action",tag:"button",name:o.clearIcon||n.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:U})])),r.append!==void 0&&t.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:A},r.append())),e.getInnerAppend!==void 0&&t.push(V("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&t.push(e.getControlChild()),t}function ee(){const t=[];return o.prefix!==void 0&&o.prefix!==null&&t.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&t.push(e.getShadowControl()),e.getControl!==void 0?t.push(e.getControl()):r.rawControl!==void 0?t.push(r.rawControl()):r.control!==void 0&&t.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},r.control(y.value))),S.value===!0&&t.push(a("div",{class:O.value},k(r.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&t.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),t.concat(k(r.default))}function oe(){let t,u;g.value===!0?q.value!==null?(t=[a("div",{role:"alert"},q.value)],u=`q--slot-error-${q.value}`):(t=k(r.error),u="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(t=[a("div",o.hint)],u=`q--slot-hint-${o.hint}`):(t=k(r.hint),u="q--slot-hint"));const L=o.counter===!0||r.counter!==void 0;if(o.hideBottomSpace===!0&&L===!1&&t===void 0)return;const K=a("div",{key:u,class:"q-field__messages col"},t);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:A},[o.hideBottomSpace===!0?K:a(ve,{name:"q-transition--field-message"},()=>K),L===!0?a("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function V(t,u){return u===null?null:a("div",{key:t,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},u)}let j=!1;return se(()=>{j=!0}),de(()=>{j===!0&&o.autofocus===!0&&s.focus()}),X(()=>{fe.value===!0&&o.for===void 0&&(e.targetUid.value=D()),o.autofocus===!0&&s.focus()}),M(()=>{f!==null&&clearTimeout(f)}),Object.assign(s,{focus:v,blur:p}),function(){const u=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...w.value}:w.value;return a("label",{ref:e.rootRef,class:[_.value,c.class],style:c.style,...u},[r.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:A},r.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:h.value,tabindex:-1,...e.controlEvents},Y()),C.value===!0?oe():null]),r.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:A},r.after()):null])}}const Oe={name:String};function Te(e){return i(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function De(e={}){return(o,l,r)=>{o[l](a("input",{class:"hidden"+(r||""),...e.value}))}}function Me(e){return i(()=>e.name||e.for)}const Re=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Ae=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Be=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Fe=/[a-z0-9_ -]$/i;function He(e){return function(l){if(l.type==="compositionend"||l.type==="change"){if(l.target.qComposing!==!0)return;l.target.qComposing=!1,e(l)}else l.type==="compositionupdate"&&l.target.qComposing!==!0&&typeof l.data=="string"&&(pe.is.firefox===!0?Fe.test(l.data)===!1:Re.test(l.data)===!0||Ae.test(l.data)===!0||Be.test(l.data)===!0)===!0&&(l.target.qComposing=!0)}}var Ne={showSuccessNotification(e){$.create({message:e,color:"positive",icon:"check",iconSize:"32px",position:"top-right",timeout:2e3,actions:[{icon:"close",color:"white"}]})},showErrorNotification(e="There was an error with your request"){$.create({message:e,color:"negative",icon:"error",iconSize:"32px",position:"top-right",timeout:2e3,actions:[{icon:"close",color:"white"}]})},showWarningNotification(e){$.create({message:e,color:"warning",icon:"warning",iconSize:"32px",position:"top-right",timeout:2e3,actions:[{icon:"close",color:"white"}]})},showNotification(e){$.create(e)}};export{Oe as a,Ie as b,Me as c,Pe as d,ze as e,we as f,He as g,De as h,Te as i,Ne as l,Ee as u};
