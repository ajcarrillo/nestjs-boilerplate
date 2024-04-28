import{a as ee,b as te,c as ae,d as ne,e as le,f as re,g as ie,h as X,i as oe}from"./planeacion.api.88477cd4.js";import{r as W,w as z,O as B,a1 as ue,c as T,v as se,z as ce,o as fe,h as _,a2 as de,g as ge,a3 as Y,a4 as $}from"./index.2447aa50.js";const G={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},U={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},p=Object.keys(U);p.forEach(e=>{U[e].regex=new RegExp(U[e].pattern)});const me=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+p.join("")+"])|(.)","g"),J=/[.*+?^${}()|[\]\\]/g,v=String.fromCharCode(1),he={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function ve(e,S,Z,C){let c,d,O,R;const b=W(null),k=W(m());function E(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}z(()=>e.type+e.autogrow,y),z(()=>e.mask,t=>{if(t!==void 0)N(k.value,!0);else{const n=j(k.value);y(),e.modelValue!==n&&S("update:modelValue",n)}}),z(()=>e.fillMask+e.reverseFillMask,()=>{b.value===!0&&N(k.value,!0)}),z(()=>e.unmaskedValue,()=>{b.value===!0&&N(k.value)});function m(){if(y(),b.value===!0){const t=D(j(e.modelValue));return e.fillMask!==!1?P(t):t}return e.modelValue}function K(t){if(t<c.length)return c.slice(-t);let n="",r=c;const i=r.indexOf(v);if(i>-1){for(let o=t-r.length;o>0;o--)n+=v;r=r.slice(0,i)+n+r.slice(i)}return r}function y(){if(b.value=e.mask!==void 0&&e.mask.length>0&&E(),b.value===!1){R=void 0,c="",d="";return}const t=G[e.mask]===void 0?e.mask:G[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",r=n.replace(J,"\\$&"),i=[],o=[],l=[];let f=e.reverseFillMask===!0,u="",g="";t.replace(me,(M,V,A,a,h)=>{if(a!==void 0){const w=U[a];l.push(w),g=w.negate,f===!0&&(o.push("(?:"+g+"+)?("+w.pattern+"+)?(?:"+g+"+)?("+w.pattern+"+)?"),f=!1),o.push("(?:"+g+"+)?("+w.pattern+")?")}else if(A!==void 0)u="\\"+(A==="\\"?"":A),l.push(A),i.push("([^"+u+"]+)?"+u+"?");else{const w=V!==void 0?V:h;u=w==="\\"?"\\\\\\\\":w.replace(J,"\\\\$&"),l.push(w),i.push("([^"+u+"]+)?"+u+"?")}});const I=new RegExp("^"+i.join("")+"("+(u===""?".":"[^"+u+"]")+"+)?"+(u===""?"":"["+u+"]*")+"$"),F=o.length-1,s=o.map((M,V)=>V===0&&e.reverseFillMask===!0?new RegExp("^"+r+"*"+M):V===F?new RegExp("^"+M+"("+(g===""?".":g)+"+)?"+(e.reverseFillMask===!0?"$":r+"*")):new RegExp("^"+M));O=l,R=M=>{const V=I.exec(e.reverseFillMask===!0?M:M.slice(0,l.length));V!==null&&(M=V.slice(1).join(""));const A=[],a=s.length;for(let h=0,w=M;h<a;h++){const q=s[h].exec(w);if(q===null)break;w=w.slice(q.shift().length),A.push(...q)}return A.length>0?A.join(""):M},c=l.map(M=>typeof M=="string"?M:v).join(""),d=c.split(v).join(n)}function N(t,n,r){const i=C.value,o=i.selectionEnd,l=i.value.length-o,f=j(t);n===!0&&y();const u=D(f),g=e.fillMask!==!1?P(u):u,I=k.value!==g;i.value!==g&&(i.value=g),I===!0&&(k.value=g),document.activeElement===i&&B(()=>{if(g===d){const s=e.reverseFillMask===!0?d.length:0;i.setSelectionRange(s,s,"forward");return}if(r==="insertFromPaste"&&e.reverseFillMask!==!0){const s=o-1;x.right(i,s,s);return}if(["deleteContentBackward","deleteContentForward"].indexOf(r)>-1){const s=e.reverseFillMask===!0?o===0?g.length>u.length?1:0:Math.max(0,g.length-(g===d?0:Math.min(u.length,l)+1))+1:o;i.setSelectionRange(s,s,"forward");return}if(e.reverseFillMask===!0)if(I===!0){const s=Math.max(0,g.length-(g===d?0:Math.min(u.length,l+1)));s===1&&o===1?i.setSelectionRange(s,s,"forward"):x.rightReverse(i,s,s)}else{const s=g.length-l;i.setSelectionRange(s,s,"backward")}else if(I===!0){const s=Math.max(0,c.indexOf(v),Math.min(u.length,o)-1);x.right(i,s,s)}else{const s=o-1;x.right(i,s,s)}});const F=e.unmaskedValue===!0?j(g):g;String(e.modelValue)!==F&&Z(F,!0)}function H(t,n,r){const i=D(j(t.value));n=Math.max(0,c.indexOf(v),Math.min(i.length,n)),t.setSelectionRange(n,r,"forward")}const x={left(t,n,r,i){const o=c.slice(n-1).indexOf(v)===-1;let l=Math.max(0,n-1);for(;l>=0;l--)if(c[l]===v){n=l,o===!0&&n++;break}if(l<0&&c[n]!==void 0&&c[n]!==v)return x.right(t,0,0);n>=0&&t.setSelectionRange(n,i===!0?r:n,"backward")},right(t,n,r,i){const o=t.value.length;let l=Math.min(o,r+1);for(;l<=o;l++)if(c[l]===v){r=l;break}else c[l-1]===v&&(r=l);if(l>o&&c[r-1]!==void 0&&c[r-1]!==v)return x.left(t,o,o);t.setSelectionRange(i?n:r,r,"forward")},leftReverse(t,n,r,i){const o=K(t.value.length);let l=Math.max(0,n-1);for(;l>=0;l--)if(o[l-1]===v){n=l;break}else if(o[l]===v&&(n=l,l===0))break;if(l<0&&o[n]!==void 0&&o[n]!==v)return x.rightReverse(t,0,0);n>=0&&t.setSelectionRange(n,i===!0?r:n,"backward")},rightReverse(t,n,r,i){const o=t.value.length,l=K(o),f=l.slice(0,r+1).indexOf(v)===-1;let u=Math.min(o,r+1);for(;u<=o;u++)if(l[u-1]===v){r=u,r>0&&f===!0&&r--;break}if(u>o&&l[r-1]!==void 0&&l[r-1]!==v)return x.leftReverse(t,o,o);t.setSelectionRange(i===!0?n:r,r,"forward")}};function Q(t){if(S("keydown",t),ue(t)===!0)return;const n=C.value,r=n.selectionStart,i=n.selectionEnd;if(t.keyCode===37||t.keyCode===39){const o=x[(t.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];t.preventDefault(),o(n,r,i,t.shiftKey)}else t.keyCode===8&&e.reverseFillMask!==!0&&r===i?x.left(n,r,i,!0):t.keyCode===46&&e.reverseFillMask===!0&&r===i&&x.rightReverse(n,r,i,!0)}function D(t){if(t==null||t==="")return"";if(e.reverseFillMask===!0)return L(t);const n=O;let r=0,i="";for(let o=0;o<n.length;o++){const l=t[r],f=n[o];if(typeof f=="string")i+=f,l===f&&r++;else if(l!==void 0&&f.regex.test(l))i+=f.transform!==void 0?f.transform(l):l,r++;else return i}return i}function L(t){const n=O,r=c.indexOf(v);let i=t.length-1,o="";for(let l=n.length-1;l>=0&&i>-1;l--){const f=n[l];let u=t[i];if(typeof f=="string")o=f+o,u===f&&i--;else if(u!==void 0&&f.regex.test(u))do o=(f.transform!==void 0?f.transform(u):u)+o,i--,u=t[i];while(r===l&&u!==void 0&&f.regex.test(u));else return o}return o}function j(t){return typeof t!="string"||R===void 0?typeof t=="number"?R(""+t):t:R(t)}function P(t){return d.length-t.length<=0?t:e.reverseFillMask===!0&&t.length>0?d.slice(0,-t.length)+t:t+d.slice(t.length)}return{innerValue:k,hasMask:b,moveCursorForPaste:H,updateMaskValue:N,onMaskedKeydown:Q}}function ke(e,S){function Z(){const C=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(C)===C&&("length"in C?Array.from(C):[C]).forEach(d=>{c.items.add(d)}),{files:c.files}}catch{return{files:void 0}}}return S===!0?T(()=>{if(e.type==="file")return Z()}):T(Z)}var xe=se({name:"QInput",inheritAttrs:!1,props:{...ee,...he,...te,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ae,"paste","change","keydown","animationend"],setup(e,{emit:S,attrs:Z}){const{proxy:C}=ge(),{$q:c}=C,d={};let O=NaN,R,b,k=null,E;const m=W(null),K=ne(e),{innerValue:y,hasMask:N,moveCursorForPaste:H,updateMaskValue:x,onMaskedKeydown:Q}=ve(e,S,I,m),D=ke(e,!0),L=T(()=>X(y.value)),j=oe(u),P=le(),t=T(()=>e.type==="textarea"||e.autogrow===!0),n=T(()=>t.value===!0||["text","search","url","tel","password"].includes(e.type)),r=T(()=>{const a={...P.splitAttrs.listeners.value,onInput:u,onPaste:f,onChange:s,onBlur:M,onFocus:Y};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=j,N.value===!0&&(a.onKeydown=Q),e.autogrow===!0&&(a.onAnimationend=g),a}),i=T(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:K.value,...P.splitAttrs.attributes.value,id:P.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return t.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});z(()=>e.type,()=>{m.value&&(m.value.value=e.modelValue)}),z(()=>e.modelValue,a=>{if(N.value===!0){if(b===!0&&(b=!1,String(a)===O))return;x(a)}else y.value!==a&&(y.value=a,e.type==="number"&&d.hasOwnProperty("value")===!0&&(R===!0?R=!1:delete d.value));e.autogrow===!0&&B(F)}),z(()=>e.autogrow,a=>{a===!0?B(F):m.value!==null&&Z.rows>0&&(m.value.style.height="auto")}),z(()=>e.dense,()=>{e.autogrow===!0&&B(F)});function o(){ie(()=>{const a=document.activeElement;m.value!==null&&m.value!==a&&(a===null||a.id!==P.targetUid.value)&&m.value.focus({preventScroll:!0})})}function l(){m.value!==null&&m.value.select()}function f(a){if(N.value===!0&&e.reverseFillMask!==!0){const h=a.target;H(h,h.selectionStart,h.selectionEnd)}S("paste",a)}function u(a){if(!a||!a.target)return;if(e.type==="file"){S("update:modelValue",a.target.files);return}const h=a.target.value;if(a.target.qComposing===!0){d.value=h;return}if(N.value===!0)x(h,!1,a.inputType);else if(I(h),n.value===!0&&a.target===document.activeElement){const{selectionStart:w,selectionEnd:q}=a.target;w!==void 0&&q!==void 0&&B(()=>{a.target===document.activeElement&&h.indexOf(a.target.value)===0&&a.target.setSelectionRange(w,q)})}e.autogrow===!0&&F()}function g(a){S("animationend",a),F()}function I(a,h){E=()=>{k=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==a&&O!==a&&(O=a,h===!0&&(b=!0),S("update:modelValue",a),B(()=>{O===a&&(O=NaN)})),E=void 0},e.type==="number"&&(R=!0,d.value=a),e.debounce!==void 0?(k!==null&&clearTimeout(k),d.value=a,k=setTimeout(E,e.debounce)):E()}function F(){requestAnimationFrame(()=>{const a=m.value;if(a!==null){const h=a.parentNode.style,{overflow:w}=a.style;c.platform.is.firefox!==!0&&(a.style.overflow="hidden"),h.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.height=a.scrollHeight+"px",a.style.overflow=w,h.marginBottom=""}})}function s(a){j(a),k!==null&&(clearTimeout(k),k=null),E!==void 0&&E(),S("change",a.target.value)}function M(a){a!==void 0&&Y(a),k!==null&&(clearTimeout(k),k=null),E!==void 0&&E(),R=!1,b=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{m.value!==null&&(m.value.value=y.value!==void 0?y.value:"")})}function V(){return d.hasOwnProperty("value")===!0?d.value:y.value!==void 0?y.value:""}ce(()=>{M()}),fe(()=>{e.autogrow===!0&&F()}),Object.assign(P,{innerValue:y,fieldClass:T(()=>`q-${t.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:T(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:m,emitValue:I,hasValue:L,floatingLabel:T(()=>L.value===!0||X(e.displayValue)),getControl:()=>_(t.value===!0?"textarea":"input",{ref:m,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...i.value,...r.value,...e.type!=="file"?{value:V()}:D.value}),getShadowControl:()=>_("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(t.value===!0?"":" text-no-wrap")},[_("span",{class:"invisible"},V()),_("span",e.shadowText)])});const A=re(P);return Object.assign(C,{focus:o,select:l,getNativeElement:()=>m.value}),de(C,"nativeEl",()=>m.value),A}}),ye={showSuccessNotification(e){$.create({message:e,color:"positive",icon:"check",iconSize:"32px",position:"top-right",timeout:2e3,actions:[{icon:"close",color:"white"}]})},showErrorNotification(e="There was an error with your request"){$.create({message:e,color:"negative",icon:"error",iconSize:"32px",position:"top-right",timeout:2e3,actions:[{icon:"close",color:"white"}]})},showWarningNotification(e){$.create({message:e,color:"warning",icon:"warning",iconSize:"32px",position:"top-right",timeout:2e3,actions:[{icon:"close",color:"white"}]})},showNotification(e){$.create(e)}};export{xe as Q,ye as l,ke as u};
