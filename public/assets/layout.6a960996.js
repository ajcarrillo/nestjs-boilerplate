import{w as z,o as ee,z as te,i as xe,g as K,a0 as ge,r as $,c as w,a1 as we,a2 as he,a3 as Ce,a4 as ne,J as Z,E as pe,D as be,H as Se,h as x,a5 as Q,a6 as ue,S as Me,x as W,R as Re,a7 as qe,a8 as Fe,v as ye,a9 as ie,aa as Ae,L as Ve,U as Ee,ab as _e,ac as J}from"./index.ab1ab5b3.js";import{u as Be,a as Te}from"./use-dark.494f195b.js";import{a as re,u as Pe,r as $e}from"./focus-manager.33224ae2.js";import{a as Oe}from"./index.2cf0d985.js";function Ie({validate:e,resetValidation:t,requiresQForm:a}){const u=xe(ge,!1);if(u!==!1){const{props:c,proxy:i}=K();Object.assign(i,{validate:e,resetValidation:t}),z(()=>c.disable,m=>{m===!0?(typeof t=="function"&&t(),u.unbindComponent(i)):u.bindComponent(i)}),ee(()=>{c.disable!==!0&&u.bindComponent(i)}),te(()=>{c.disable!==!0&&u.unbindComponent(i)})}else a===!0&&console.error("Parent QForm not found on useFormChild()!")}const se=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ce=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,de=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,X=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,Y=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,oe={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>se.test(e),hexaColor:e=>ce.test(e),hexOrHexaColor:e=>de.test(e),rgbColor:e=>X.test(e),rgbaColor:e=>Y.test(e),rgbOrRgbaColor:e=>X.test(e)||Y.test(e),hexOrRgbColor:e=>se.test(e)||X.test(e),hexaOrRgbaColor:e=>ce.test(e)||Y.test(e),anyColor:e=>de.test(e)||X.test(e)||Y.test(e)},je=[!0,!1,"ondemand"],ze={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>je.includes(e)}};function De(e,t){const{props:a,proxy:u}=K(),c=$(!1),i=$(null),m=$(null);Ie({validate:S,resetValidation:g});let y=0,F;const C=w(()=>a.rules!==void 0&&a.rules!==null&&a.rules.length>0),A=w(()=>a.disable!==!0&&C.value===!0),b=w(()=>a.error===!0||c.value===!0),L=w(()=>typeof a.errorMessage=="string"&&a.errorMessage.length>0?a.errorMessage:i.value);z(()=>a.modelValue,()=>{D()}),z(()=>a.reactiveRules,P=>{P===!0?F===void 0&&(F=z(()=>a.rules,()=>{D(!0)})):F!==void 0&&(F(),F=void 0)},{immediate:!0}),z(e,P=>{P===!0?m.value===null&&(m.value=!1):m.value===!1&&(m.value=!0,A.value===!0&&a.lazyRules!=="ondemand"&&t.value===!1&&V())});function g(){y++,t.value=!1,m.value=null,c.value=!1,i.value=null,V.cancel()}function S(P=a.modelValue){if(A.value!==!0)return!0;const N=++y,M=t.value!==!0?()=>{m.value=!0}:()=>{},k=(o,l)=>{o===!0&&M(),c.value=o,i.value=l||null,t.value=!1},R=[];for(let o=0;o<a.rules.length;o++){const l=a.rules[o];let s;if(typeof l=="function"?s=l(P,oe):typeof l=="string"&&oe[l]!==void 0&&(s=oe[l](P)),s===!1||typeof s=="string")return k(!0,s),!1;s!==!0&&s!==void 0&&R.push(s)}return R.length===0?(k(!1),!0):(t.value=!0,Promise.all(R).then(o=>{if(o===void 0||Array.isArray(o)===!1||o.length===0)return N===y&&k(!1),!0;const l=o.find(s=>s===!1||typeof s=="string");return N===y&&k(l!==void 0,l),l===void 0},o=>(N===y&&(console.error(o),k(!0)),!1)))}function D(P){A.value===!0&&a.lazyRules!=="ondemand"&&(m.value===!0||a.lazyRules!==!0&&P!==!0)&&V()}const V=we(S,0);return te(()=>{F!==void 0&&F(),V.cancel()}),Object.assign(u,{resetValidation:g,validate:S}),he(u,"hasError",()=>b.value),{isDirtyModel:m,hasRules:C,hasError:b,errorMessage:L,validate:S,resetValidation:g}}const fe=/^on[A-Z]/;function Ne(e,t){const a={listeners:$({}),attributes:$({})};function u(){const c={},i={};for(const m in e)m!=="class"&&m!=="style"&&fe.test(m)===!1&&(c[m]=e[m]);for(const m in t.props)fe.test(m)===!0&&(i[m]=t.props[m]);a.attributes.value=c,a.listeners.value=i}return Ce(u),u(),a}function ae(e){return e===void 0?`f_${Pe()}`:e}function le(e){return e!=null&&(""+e).length>0}const Ue={...Be,...ze,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Le=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Ze(){const{props:e,attrs:t,proxy:a,vnode:u}=K();return{isDark:Te(e,a.$q),editable:w(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:$(!1),focused:$(!1),hasPopupOpen:!1,splitAttrs:Ne(t,u),targetUid:$(ae(e.for)),rootRef:$(null),targetRef:$(null),controlRef:$(null)}}function He(e){const{props:t,emit:a,slots:u,attrs:c,proxy:i}=K(),{$q:m}=i;let y=null;e.hasValue===void 0&&(e.hasValue=w(()=>le(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{a("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:f,onFocusout:v}),Object.assign(e,{clearValue:d,onControlFocusin:f,onControlFocusout:v,focus:l}),e.computedCounter===void 0&&(e.computedCounter=w(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,h=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(h!==void 0?" / "+h:"")}}));const{isDirtyModel:F,hasRules:C,hasError:A,errorMessage:b,resetValidation:L}=De(e.focused,e.innerLoading),g=e.floatingLabel!==void 0?w(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):w(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),S=w(()=>t.bottomSlots===!0||t.hint!==void 0||C.value===!0||t.counter===!0||t.error!==null),D=w(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),V=w(()=>`q-field row no-wrap items-start q-field--${D.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(g.value===!0?" q-field--float":"")+(N.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(A.value===!0?" q-field--error":"")+(A.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&S.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),P=w(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(A.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),N=w(()=>t.labelSlot===!0||t.label!==void 0),M=w(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&A.value!==!0?` text-${t.labelColor}`:"")),k=w(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:g.value,modelValue:t.modelValue,emitValue:e.emitValue})),R=w(()=>{const n={for:e.targetUid.value};return t.disable===!0?n["aria-disabled"]="true":t.readonly===!0&&(n["aria-readonly"]="true"),n});z(()=>t.for,n=>{e.targetUid.value=ae(n)});function o(){const n=document.activeElement;let h=e.targetRef!==void 0&&e.targetRef.value;h&&(n===null||n.id!==e.targetUid.value)&&(h.hasAttribute("tabindex")===!0||(h=h.querySelector("[tabindex]")),h&&h!==n&&h.focus({preventScroll:!0}))}function l(){re(o)}function s(){$e(o);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function f(n){y!==null&&(clearTimeout(y),y=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,a("focus",n))}function v(n,h){y!==null&&clearTimeout(y),y=setTimeout(()=>{y=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,a("blur",n)),h!==void 0&&h())})}function d(n){ne(n),m.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),a("update:modelValue",null),a("clear",t.modelValue),Z(()=>{L(),m.platform.is.mobile!==!0&&(F.value=!1)})}function q(){const n=[];return u.prepend!==void 0&&n.push(x("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:Q},u.prepend())),n.push(x("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},p())),A.value===!0&&t.noErrorIcon===!1&&n.push(O("error",[x(ue,{name:m.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(O("inner-loading-append",u.loading!==void 0?u.loading():[x(Me,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(O("inner-clearable-append",[x(ue,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||m.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:d})])),u.append!==void 0&&n.push(x("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:Q},u.append())),e.getInnerAppend!==void 0&&n.push(O("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function p(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(x("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):u.rawControl!==void 0?n.push(u.rawControl()):u.control!==void 0&&n.push(x("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},u.control(k.value))),N.value===!0&&n.push(x("div",{class:M.value},W(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(x("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(W(u.default))}function E(){let n,h;A.value===!0?b.value!==null?(n=[x("div",{role:"alert"},b.value)],h=`q--slot-error-${b.value}`):(n=W(u.error),h="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[x("div",t.hint)],h=`q--slot-hint-${t.hint}`):(n=W(u.hint),h="q--slot-hint"));const j=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&j===!1&&n===void 0)return;const U=x("div",{key:h,class:"q-field__messages col"},n);return x("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:Q},[t.hideBottomSpace===!0?U:x(Re,{name:"q-transition--field-message"},()=>U),j===!0?x("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function O(n,h){return h===null?null:x("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},h)}let I=!1;return pe(()=>{I=!0}),be(()=>{I===!0&&t.autofocus===!0&&i.focus()}),ee(()=>{Se.value===!0&&t.for===void 0&&(e.targetUid.value=ae()),t.autofocus===!0&&i.focus()}),te(()=>{y!==null&&clearTimeout(y)}),Object.assign(i,{focus:l,blur:s}),function(){const h=e.getControl===void 0&&u.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...R.value}:R.value;return x("label",{ref:e.rootRef,class:[V.value,c.class],style:c.style,...h},[u.before!==void 0?x("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:Q},u.before()):null,x("div",{class:"q-field__inner relative-position col self-stretch"},[x("div",{ref:e.controlRef,class:P.value,tabindex:-1,...e.controlEvents},q()),S.value===!0?E():null]),u.after!==void 0?x("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:Q},u.after()):null])}}const ve={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},G={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ke=Object.keys(G);ke.forEach(e=>{G[e].regex=new RegExp(G[e].pattern)});const Ke=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ke.join("")+"])|(.)","g"),me=/[.*+?^${}()|[\]\\]/g,B=String.fromCharCode(1),Qe={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function We(e,t,a,u){let c,i,m,y;const F=$(null),C=$(b());function A(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}z(()=>e.type+e.autogrow,g),z(()=>e.mask,o=>{if(o!==void 0)S(C.value,!0);else{const l=k(C.value);g(),e.modelValue!==l&&t("update:modelValue",l)}}),z(()=>e.fillMask+e.reverseFillMask,()=>{F.value===!0&&S(C.value,!0)}),z(()=>e.unmaskedValue,()=>{F.value===!0&&S(C.value)});function b(){if(g(),F.value===!0){const o=N(k(e.modelValue));return e.fillMask!==!1?R(o):o}return e.modelValue}function L(o){if(o<c.length)return c.slice(-o);let l="",s=c;const f=s.indexOf(B);if(f>-1){for(let v=o-s.length;v>0;v--)l+=B;s=s.slice(0,f)+l+s.slice(f)}return s}function g(){if(F.value=e.mask!==void 0&&e.mask.length>0&&A(),F.value===!1){y=void 0,c="",i="";return}const o=ve[e.mask]===void 0?e.mask:ve[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",s=l.replace(me,"\\$&"),f=[],v=[],d=[];let q=e.reverseFillMask===!0,p="",E="";o.replace(Ke,(h,j,U,r,_)=>{if(r!==void 0){const T=G[r];d.push(T),E=T.negate,q===!0&&(v.push("(?:"+E+"+)?("+T.pattern+"+)?(?:"+E+"+)?("+T.pattern+"+)?"),q=!1),v.push("(?:"+E+"+)?("+T.pattern+")?")}else if(U!==void 0)p="\\"+(U==="\\"?"":U),d.push(U),f.push("([^"+p+"]+)?"+p+"?");else{const T=j!==void 0?j:_;p=T==="\\"?"\\\\\\\\":T.replace(me,"\\\\$&"),d.push(T),f.push("([^"+p+"]+)?"+p+"?")}});const O=new RegExp("^"+f.join("")+"("+(p===""?".":"[^"+p+"]")+"+)?"+(p===""?"":"["+p+"]*")+"$"),I=v.length-1,n=v.map((h,j)=>j===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+h):j===I?new RegExp("^"+h+"("+(E===""?".":E)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+h));m=d,y=h=>{const j=O.exec(e.reverseFillMask===!0?h:h.slice(0,d.length));j!==null&&(h=j.slice(1).join(""));const U=[],r=n.length;for(let _=0,T=h;_<r;_++){const H=n[_].exec(T);if(H===null)break;T=T.slice(H.shift().length),U.push(...H)}return U.length>0?U.join(""):h},c=d.map(h=>typeof h=="string"?h:B).join(""),i=c.split(B).join(l)}function S(o,l,s){const f=u.value,v=f.selectionEnd,d=f.value.length-v,q=k(o);l===!0&&g();const p=N(q),E=e.fillMask!==!1?R(p):p,O=C.value!==E;f.value!==E&&(f.value=E),O===!0&&(C.value=E),document.activeElement===f&&Z(()=>{if(E===i){const n=e.reverseFillMask===!0?i.length:0;f.setSelectionRange(n,n,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const n=v-1;V.right(f,n,n);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const n=e.reverseFillMask===!0?v===0?E.length>p.length?1:0:Math.max(0,E.length-(E===i?0:Math.min(p.length,d)+1))+1:v;f.setSelectionRange(n,n,"forward");return}if(e.reverseFillMask===!0)if(O===!0){const n=Math.max(0,E.length-(E===i?0:Math.min(p.length,d+1)));n===1&&v===1?f.setSelectionRange(n,n,"forward"):V.rightReverse(f,n,n)}else{const n=E.length-d;f.setSelectionRange(n,n,"backward")}else if(O===!0){const n=Math.max(0,c.indexOf(B),Math.min(p.length,v)-1);V.right(f,n,n)}else{const n=v-1;V.right(f,n,n)}});const I=e.unmaskedValue===!0?k(E):E;String(e.modelValue)!==I&&a(I,!0)}function D(o,l,s){const f=N(k(o.value));l=Math.max(0,c.indexOf(B),Math.min(f.length,l)),o.setSelectionRange(l,s,"forward")}const V={left(o,l,s,f){const v=c.slice(l-1).indexOf(B)===-1;let d=Math.max(0,l-1);for(;d>=0;d--)if(c[d]===B){l=d,v===!0&&l++;break}if(d<0&&c[l]!==void 0&&c[l]!==B)return V.right(o,0,0);l>=0&&o.setSelectionRange(l,f===!0?s:l,"backward")},right(o,l,s,f){const v=o.value.length;let d=Math.min(v,s+1);for(;d<=v;d++)if(c[d]===B){s=d;break}else c[d-1]===B&&(s=d);if(d>v&&c[s-1]!==void 0&&c[s-1]!==B)return V.left(o,v,v);o.setSelectionRange(f?l:s,s,"forward")},leftReverse(o,l,s,f){const v=L(o.value.length);let d=Math.max(0,l-1);for(;d>=0;d--)if(v[d-1]===B){l=d;break}else if(v[d]===B&&(l=d,d===0))break;if(d<0&&v[l]!==void 0&&v[l]!==B)return V.rightReverse(o,0,0);l>=0&&o.setSelectionRange(l,f===!0?s:l,"backward")},rightReverse(o,l,s,f){const v=o.value.length,d=L(v),q=d.slice(0,s+1).indexOf(B)===-1;let p=Math.min(v,s+1);for(;p<=v;p++)if(d[p-1]===B){s=p,s>0&&q===!0&&s--;break}if(p>v&&d[s-1]!==void 0&&d[s-1]!==B)return V.leftReverse(o,v,v);o.setSelectionRange(f===!0?l:s,s,"forward")}};function P(o){if(t("keydown",o),qe(o)===!0)return;const l=u.value,s=l.selectionStart,f=l.selectionEnd;if(o.keyCode===37||o.keyCode===39){const v=V[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];o.preventDefault(),v(l,s,f,o.shiftKey)}else o.keyCode===8&&e.reverseFillMask!==!0&&s===f?V.left(l,s,f,!0):o.keyCode===46&&e.reverseFillMask===!0&&s===f&&V.rightReverse(l,s,f,!0)}function N(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return M(o);const l=m;let s=0,f="";for(let v=0;v<l.length;v++){const d=o[s],q=l[v];if(typeof q=="string")f+=q,d===q&&s++;else if(d!==void 0&&q.regex.test(d))f+=q.transform!==void 0?q.transform(d):d,s++;else return f}return f}function M(o){const l=m,s=c.indexOf(B);let f=o.length-1,v="";for(let d=l.length-1;d>=0&&f>-1;d--){const q=l[d];let p=o[f];if(typeof q=="string")v=q+v,p===q&&f--;else if(p!==void 0&&q.regex.test(p))do v=(q.transform!==void 0?q.transform(p):p)+v,f--,p=o[f];while(s===d&&p!==void 0&&q.regex.test(p));else return v}return v}function k(o){return typeof o!="string"||y===void 0?typeof o=="number"?y(""+o):o:y(o)}function R(o){return i.length-o.length<=0?o:e.reverseFillMask===!0&&o.length>0?i.slice(0,-o.length)+o:o+i.slice(o.length)}return{innerValue:C,hasMask:F,moveCursorForPaste:D,updateMaskValue:S,onMaskedKeydown:P}}const Je={name:String};function it(e={}){return(t,a,u)=>{t[a](x("input",{class:"hidden"+(u||""),...e.value}))}}function Xe(e){return w(()=>e.name||e.for)}function Ye(e,t){function a(){const u=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(i=>{c.items.add(i)}),{files:c.files}}catch{return{files:void 0}}}return t===!0?w(()=>{if(e.type==="file")return a()}):w(a)}const Ge=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,et=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,tt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ot=/[a-z0-9_ -]$/i;function nt(e){return function(a){if(a.type==="compositionend"||a.type==="change"){if(a.target.qComposing!==!0)return;a.target.qComposing=!1,e(a)}else a.type==="compositionupdate"&&a.target.qComposing!==!0&&typeof a.data=="string"&&(Fe.is.firefox===!0?ot.test(a.data)===!1:Ge.test(a.data)===!0||et.test(a.data)===!0||tt.test(a.data)===!0)===!0&&(a.target.qComposing=!0)}}var st=ye({name:"QInput",inheritAttrs:!1,props:{...Ue,...Qe,...Je,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Le,"paste","change","keydown","animationend"],setup(e,{emit:t,attrs:a}){const{proxy:u}=K(),{$q:c}=u,i={};let m=NaN,y,F,C=null,A;const b=$(null),L=Xe(e),{innerValue:g,hasMask:S,moveCursorForPaste:D,updateMaskValue:V,onMaskedKeydown:P}=We(e,t,O,b),N=Ye(e,!0),M=w(()=>le(g.value)),k=nt(p),R=Ze(),o=w(()=>e.type==="textarea"||e.autogrow===!0),l=w(()=>o.value===!0||["text","search","url","tel","password"].includes(e.type)),s=w(()=>{const r={...R.splitAttrs.listeners.value,onInput:p,onPaste:q,onChange:n,onBlur:h,onFocus:ie};return r.onCompositionstart=r.onCompositionupdate=r.onCompositionend=k,S.value===!0&&(r.onKeydown=P),e.autogrow===!0&&(r.onAnimationend=E),r}),f=w(()=>{const r={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:L.value,...R.splitAttrs.attributes.value,id:R.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return o.value===!1&&(r.type=e.type),e.autogrow===!0&&(r.rows=1),r});z(()=>e.type,()=>{b.value&&(b.value.value=e.modelValue)}),z(()=>e.modelValue,r=>{if(S.value===!0){if(F===!0&&(F=!1,String(r)===m))return;V(r)}else g.value!==r&&(g.value=r,e.type==="number"&&i.hasOwnProperty("value")===!0&&(y===!0?y=!1:delete i.value));e.autogrow===!0&&Z(I)}),z(()=>e.autogrow,r=>{r===!0?Z(I):b.value!==null&&a.rows>0&&(b.value.style.height="auto")}),z(()=>e.dense,()=>{e.autogrow===!0&&Z(I)});function v(){re(()=>{const r=document.activeElement;b.value!==null&&b.value!==r&&(r===null||r.id!==R.targetUid.value)&&b.value.focus({preventScroll:!0})})}function d(){b.value!==null&&b.value.select()}function q(r){if(S.value===!0&&e.reverseFillMask!==!0){const _=r.target;D(_,_.selectionStart,_.selectionEnd)}t("paste",r)}function p(r){if(!r||!r.target)return;if(e.type==="file"){t("update:modelValue",r.target.files);return}const _=r.target.value;if(r.target.qComposing===!0){i.value=_;return}if(S.value===!0)V(_,!1,r.inputType);else if(O(_),l.value===!0&&r.target===document.activeElement){const{selectionStart:T,selectionEnd:H}=r.target;T!==void 0&&H!==void 0&&Z(()=>{r.target===document.activeElement&&_.indexOf(r.target.value)===0&&r.target.setSelectionRange(T,H)})}e.autogrow===!0&&I()}function E(r){t("animationend",r),I()}function O(r,_){A=()=>{C=null,e.type!=="number"&&i.hasOwnProperty("value")===!0&&delete i.value,e.modelValue!==r&&m!==r&&(m=r,_===!0&&(F=!0),t("update:modelValue",r),Z(()=>{m===r&&(m=NaN)})),A=void 0},e.type==="number"&&(y=!0,i.value=r),e.debounce!==void 0?(C!==null&&clearTimeout(C),i.value=r,C=setTimeout(A,e.debounce)):A()}function I(){requestAnimationFrame(()=>{const r=b.value;if(r!==null){const _=r.parentNode.style,{overflow:T}=r.style;c.platform.is.firefox!==!0&&(r.style.overflow="hidden"),_.marginBottom=r.scrollHeight-1+"px",r.style.height="1px",r.style.height=r.scrollHeight+"px",r.style.overflow=T,_.marginBottom=""}})}function n(r){k(r),C!==null&&(clearTimeout(C),C=null),A!==void 0&&A(),t("change",r.target.value)}function h(r){r!==void 0&&ie(r),C!==null&&(clearTimeout(C),C=null),A!==void 0&&A(),y=!1,F=!1,delete i.value,e.type!=="file"&&setTimeout(()=>{b.value!==null&&(b.value.value=g.value!==void 0?g.value:"")})}function j(){return i.hasOwnProperty("value")===!0?i.value:g.value!==void 0?g.value:""}te(()=>{h()}),ee(()=>{e.autogrow===!0&&I()}),Object.assign(R,{innerValue:g,fieldClass:w(()=>`q-${o.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:w(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:b,emitValue:O,hasValue:M,floatingLabel:w(()=>M.value===!0||le(e.displayValue)),getControl:()=>x(o.value===!0?"textarea":"input",{ref:b,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...f.value,...s.value,...e.type!=="file"?{value:j()}:N.value}),getShadowControl:()=>x("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(o.value===!0?"":" text-no-wrap")},[x("span",{class:"invisible"},j()),x("span",e.shadowText)])});const U=He(R);return Object.assign(u,{focus:v,select:d,getNativeElement:()=>b.value}),he(u,"nativeEl",()=>b.value),U}}),ct=ye({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:a}){const u=K(),c=$(null);let i=0;const m=[];function y(g){const S=typeof g=="boolean"?g:e.noErrorFocus!==!0,D=++i,V=(M,k)=>{a("validation"+(M===!0?"Success":"Error"),k)},P=M=>{const k=M.validate();return typeof k.then=="function"?k.then(R=>({valid:R,comp:M}),R=>({valid:!1,comp:M,err:R})):Promise.resolve({valid:k,comp:M})};return(e.greedy===!0?Promise.all(m.map(P)).then(M=>M.filter(k=>k.valid!==!0)):m.reduce((M,k)=>M.then(()=>P(k).then(R=>{if(R.valid===!1)return Promise.reject(R)})),Promise.resolve()).catch(M=>[M])).then(M=>{if(M===void 0||M.length===0)return D===i&&V(!0),!0;if(D===i){const{comp:k,err:R}=M[0];if(R!==void 0&&console.error(R),V(!1,k),S===!0){const o=M.find(({comp:l})=>typeof l.focus=="function"&&Ae(l.$)===!1);o!==void 0&&o.comp.focus()}}return!1})}function F(){i++,m.forEach(g=>{typeof g.resetValidation=="function"&&g.resetValidation()})}function C(g){g!==void 0&&ne(g);const S=i+1;y().then(D=>{S===i&&D===!0&&(e.onSubmit!==void 0?a("submit",g):g!==void 0&&g.target!==void 0&&typeof g.target.submit=="function"&&g.target.submit())})}function A(g){g!==void 0&&ne(g),a("reset"),Z(()=>{F(),e.autofocus===!0&&e.noResetFocus!==!0&&b()})}function b(){re(()=>{if(c.value===null)return;const g=c.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||c.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||c.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(c.value.querySelectorAll("[tabindex]"),S=>S.tabIndex>-1);g!=null&&g.focus({preventScroll:!0})})}Ve(ge,{bindComponent(g){m.push(g)},unbindComponent(g){const S=m.indexOf(g);S>-1&&m.splice(S,1)}});let L=!1;return pe(()=>{L=!0}),be(()=>{L===!0&&e.autofocus===!0&&b()}),ee(()=>{e.autofocus===!0&&b()}),Object.assign(u.proxy,{validate:y,resetValidation:F,submit:C,reset:A,focus:b,getValidationComponents:()=>m}),()=>x("form",{class:"q-form",ref:c,onSubmit:C,onReset:A},W(t.default))}}),dt={coreUrl:"https://nestjs-boilerplate-production.up.railway.app",apiUrl:"https://nestjs-boilerplate-production.up.railway.app/api",http:Oe.create({}),updateAccessToken(){const e=Ee();this.http.defaults.headers.common.Authorization=`Bearer ${e.accessToken}`},checkForExpiredToken(e){e.response&&e.response.status===401&&_e.logout()},apiRoute(e){return this.updateAccessToken(),`${this.apiUrl}${e}`},get(e,t){const a=this;return new Promise((u,c)=>{a.http.get(a.apiRoute(e),{params:t}).then(i=>{u(i)}).catch(i=>{a.checkForExpiredToken(i),c(i)})})},post(e,t,a={}){const u=this;return new Promise((c,i)=>{u.http.post(u.apiRoute(e),t,a).then(m=>{c(m)}).catch(m=>{u.checkForExpiredToken(m),i(m)})})},patch(e,t){const a=this;return new Promise((u,c)=>{a.http.patch(a.apiRoute(e),t).then(i=>{u(i)}).catch(i=>{a.checkForExpiredToken(i),c(i)})})},put(e,t){const a=this;return new Promise((u,c)=>{a.http.put(a.apiRoute(e),t).then(i=>{u(i)}).catch(i=>{a.checkForExpiredToken(i),c(i)})})},delete(e){const t=this;return new Promise((a,u)=>{t.http.delete(t.apiRoute(e)).then(c=>{a(c)}).catch(c=>{t.checkForExpiredToken(c),u(c)})})}},ft={showSuccessNotification(e){J.create({message:e,color:"positive",icon:"check",iconSize:"32px",position:"top-right",timeout:2e3,actions:[{icon:"close",color:"white"}]})},showErrorNotification(e="There was an error with your request"){J.create({message:e,color:"negative",icon:"error",iconSize:"32px",position:"top-right",timeout:2e3,actions:[{icon:"close",color:"white"}]})},showWarningNotification(e){J.create({message:e,color:"warning",icon:"warning",iconSize:"32px",position:"top-right",timeout:2e3,actions:[{icon:"close",color:"white"}]})},showNotification(e){J.create(e)}};export{ct as Q,st as a,Le as b,He as c,Ze as d,Je as e,Xe as f,le as g,nt as h,it as i,ft as l,dt as p,Ue as u};
