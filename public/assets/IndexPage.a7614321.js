import{Q as D}from"./QTooltip.5f4d8a67.js";import{a as k,Q as T,b as rt}from"./QItemLabel.9891a74a.js";import{Q as it}from"./QToggle.3e6ba614.js";import{Q as Oe}from"./QList.9bbd2c21.js";import{a as st,Q as lt}from"./format.c4cd2b11.js";import{j as R,c as Q,p as P,k as B,l as d,d as f,q as A,t as L,u as C,r as M,M as at,o as ut,s as ee,aj as De,X as F,b9 as ct,h as _e,ag as ft,an as dt,F as pt,b as mt,_ as gt}from"./index.e2638eb4.js";import{Q as re}from"./layout.b48f6ca2.js";import{Q as xe}from"./QBtnGroup.795c5091.js";import{a as Ne,Q as ie}from"./QTable.71f78e09.js";import{a as qe,b as ht}from"./useSubBudgets.b930e893.js";import{T as bt}from"./TablePage.c13247da.js";import{b as te,Q as yt}from"./QSelect.8f3e200a.js";import{Q as Ue}from"./QCardSection.94464a72.js";import{Q as vt}from"./QCardActions.771e2101.js";import{Q as _t}from"./QForm.e216d907.js";import{u as pe}from"./useMoney.dbc60660.js";import{_ as we}from"./CardDialog.cb32ff35.js";import{u as xt}from"./useTableFilter.03b07df6.js";import{u as wt}from"./useExportDataToCsv.ea2c3b5d.js";import"./scroll.28522c71.js";import"./use-dark.eb190f4a.js";import"./QCheckbox.b1850863.js";import"./planeacion.api.4718394d.js";import"./index.2cf0d985.js";import"./QChip.e0f21080.js";import"./utils.esm.7ac9ce6f.js";import"./useMutation.esm.7ab5810a.js";import"./mutation.esm.6f8cd676.js";import"./QCard.be8ff39f.js";import"./QPage.c2fef450.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./QSpace.62bbc7da.js";import"./date.5b07776c.js";const St=R({__name:"ShortUuidLink",props:{uuid:null,to:null},setup(e){const t=e,n=Q(()=>t.uuid.substring(0,8).toUpperCase());return(r,o)=>(P(),B(T,{class:"text-primary tw-font-bold",clickable:"",to:e.to},{default:d(()=>[f(k,null,{default:d(()=>[A(L(C(n)),1)]),_:1})]),_:1},8,["to"]))}}),It={class:"self-center full-width no-outline",tabindex:"0"},jt={class:"self-center full-width no-outline",tabindex:"0"},Ct={class:"self-center full-width no-outline",tabindex:"0"},kt=R({__name:"SubBudgetAdjustmentForm",props:{target:null},emits:["close"],setup(e,{emit:t}){const n=e,{subBudgetQuery:r}=qe(),{createSubBudgetAdjustmentMutation:o}=ht(),{currencyFormat:i}=pe(),{data:s}=r,a=M(),l=at({source_sub_budget_id:"",target_sub_budget_id:n.target.id,justification:"",amount:0}),u=M([]),c=Q(()=>{var p;return b.value?+((p=b.value)==null?void 0:p.amount):0}),b=Q(()=>{var p;return(p=s==null?void 0:s.value)==null?void 0:p.find(g=>g.id===l.source_sub_budget_id)}),y={source_sub_budget_id:[p=>!!p||"El campo origen es requerido"],justification:[p=>!!p||"El campo justificaci\xF3n es requerido"],amount:[p=>!!p||"El campo monto es requerido",p=>p>0||"El monto debe ser mayor a 0",p=>p<=c.value||`El monto debe ser menor o igual a ${c.value}`]};ut(()=>{var p;u.value=(p=s==null?void 0:s.value)==null?void 0:p.filter(g=>g.id!==n.target.id).map(g=>({label:g.event,value:g.id}))});async function w(){var g;await((g=a.value)==null?void 0:g.validate())&&(await o.mutateAsync({createSubBudgetAdjustmentDto:l}),t("close"))}function S(p,g,I){if(p.length<2){I();return}g(()=>{var m;const j=p.toLowerCase();u.value=(m=s==null?void 0:s.value)==null?void 0:m.filter(_=>_.id!==n.target.id).filter(_=>_.event.toLowerCase().includes(j)).map(_=>({label:_.event,value:_.id}))})}return(p,g)=>(P(),B(C(_t),{ref_key:"qSubBudgetAdjustmentForm",ref:a,onSubmit:ct(w,["prevent"])},{default:d(()=>[f(Ue,null,{default:d(()=>[f(Oe,null,{default:d(()=>[f(T,null,{default:d(()=>[f(k,null,{default:d(()=>[f(te,{dense:"",label:"Transferir al evento",outlined:"","stack-label":""},{control:d(()=>[ee("div",It,L(e.target.event),1)]),_:1})]),_:1})]),_:1}),f(T,null,{default:d(()=>[f(k,null,{default:d(()=>[f(te,{dense:"",label:"Monto",outlined:"","stack-label":""},{control:d(()=>[ee("div",jt,L(C(i)(+e.target.amount)),1)]),_:1})]),_:1})]),_:1}),f(T,null,{default:d(()=>[f(k,null,{default:d(()=>[f(yt,{modelValue:l.source_sub_budget_id,"onUpdate:modelValue":g[0]||(g[0]=I=>l.source_sub_budget_id=I),clearable:"",dense:"","emit-value":"",hint:"M\xEDnimo 2 caracteres para activar el filtro",label:"Origen","map-options":"",options:u.value,outlined:"",rules:y.source_sub_budget_id,"use-input":"",onFilter:S},null,8,["modelValue","options","rules"])]),_:1})]),_:1}),C(b)?(P(),B(T,{key:0},{default:d(()=>[f(k,null,{default:d(()=>[f(te,{label:"Monto disponible",outlined:"","stack-label":""},{control:d(()=>[ee("div",Ct,L(C(i)(+C(b).amount)),1)]),_:1})]),_:1})]),_:1})):De("",!0),f(T,null,{default:d(()=>[f(k,null,{default:d(()=>[f(re,{modelValue:l.justification,"onUpdate:modelValue":g[1]||(g[1]=I=>l.justification=I),dense:"",label:"Justificaci\xF3n",outlined:"",rules:y.justification,type:"textarea"},null,8,["modelValue","rules"])]),_:1})]),_:1}),f(T,null,{default:d(()=>[f(k,null,{default:d(()=>[f(re,{modelValue:l.amount,"onUpdate:modelValue":g[2]||(g[2]=I=>l.amount=I),modelModifiers:{number:!0},dense:"",label:"Monto a transferir",max:C(c),min:1,outlined:"",rules:y.amount,step:"1",type:"number"},null,8,["modelValue","max","rules"])]),_:1})]),_:1})]),_:1})]),_:1}),f(st),f(vt,{align:"right"},{default:d(()=>[f(F,{color:"primary",label:"Guardar",type:"submit"})]),_:1})]),_:1},8,["onSubmit"]))}}),Ft=R({__name:"SubBudgetAdjustmentHistory",props:{subBudget:null},setup(e){const t=e,{currencyFormat:n}=pe(),r=[{name:"consecutiveId",label:"ID",field:"consecutiveId",sortable:!1},{name:"signedAmount",field:l=>n(l.signedAmount),label:"Operaci\xF3n",align:"right",sortable:!1,style:l=>l.signedAmount>0?"color: green; font-weight: 700":"color: red; font-weight: 700"},{name:"event",field:l=>l.signedAmount>0?l.sourceSubBudget.event:l.targetSubBudget.event,label:"Evento",align:"left",sortable:!1},{name:"action",field:l=>{var u,c;return l.signedAmount>0?(u=l.sourceSubBudget.action)==null?void 0:u.name:(c=l.targetSubBudget.action)==null?void 0:c.name},label:"Acci\xF3n",align:"left",sortable:!1},{name:"line",field:l=>{var u,c;return l.signedAmount>0?(u=l.sourceSubBudget.line)==null?void 0:u.name:(c=l.targetSubBudget.line)==null?void 0:c.name},label:"Partida",align:"left",sortable:!1},{name:"department",field:l=>l.signedAmount>0?l.sourceSubBudget.department.description:l.targetSubBudget.department.description,label:"Departamento",align:"left",sortable:!1},{name:"justification",field:"justification",label:"Justificaci\xF3n",align:"left",sortable:!1}],o=Q(()=>{var l,u;return(u=(l=t.subBudget)==null?void 0:l.adjustmentsFrom)==null?void 0:u.map(c=>({...c,signedAmount:-parseFloat(c.amount)}))}),i=Q(()=>{var l,u;return(u=(l=t.subBudget)==null?void 0:l.adjustmentsTo)==null?void 0:u.map(c=>({...c,signedAmount:parseFloat(c.amount)}))}),s=Q(()=>[...o.value,...i.value]),a=Q(()=>s.value.sort((l,u)=>new Date(l.createdAt).getTime()-new Date(u.createdAt).getTime()));return(l,u)=>(P(),B(Ue,null,{default:d(()=>[f(Ne,{columns:r,"row-key":"id",rows:C(a),"wrap-cells":""},{"body-cell-consecutiveId":d(c=>[f(ie,{props:c},{default:d(()=>[A(L(c.rowIndex+1),1)]),_:2},1032,["props"])]),_:1},8,["rows"])]),_:1}))}}),q=/^[a-z0-9]+(-[a-z0-9]+)*$/,X=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const a=o.pop(),l=o.pop(),u={provider:o.length>0?o[0]:r,prefix:l,name:a};return t&&!G(u)?null:u}const i=o[0],s=i.split("-");if(s.length>1){const a={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!G(a)?null:a}if(n&&r===""){const a={provider:r,prefix:"",name:i};return t&&!G(a,n)?null:a}return null},G=(e,t)=>e?!!((e.provider===""||e.provider.match(q))&&(t&&e.prefix===""||e.prefix.match(q))&&e.name.match(q)):!1,$e=Object.freeze({left:0,top:0,width:16,height:16}),W=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Y=Object.freeze({...$e,...W}),se=Object.freeze({...Y,body:"",hidden:!1});function Tt(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function Se(e,t){const n=Tt(e,t);for(const r in se)r in W?r in e&&!(r in n)&&(n[r]=W[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function At(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function i(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const a=r[s]&&r[s].parent,l=a&&i(a);l&&(o[s]=[a].concat(l))}return o[s]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(i),o}function Pt(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let i={};function s(a){i=Se(r[a]||o[a],i)}return s(t),n.forEach(s),Se(e,i)}function Re(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=At(e);for(const o in r){const i=r[o];i&&(t(o,Pt(e,o,i)),n.push(o))}return n}const Et={provider:"",aliases:{},not_found:{},...$e};function ne(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function ze(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!ne(e,Et))return null;const n=t.icons;for(const o in n){const i=n[o];if(!o.match(q)||typeof i.body!="string"||!ne(i,se))return null}const r=t.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(q)||typeof s!="string"||!n[s]&&!r[s]||!ne(i,se))return null}return t}const Ie=Object.create(null);function Mt(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function V(e,t){const n=Ie[e]||(Ie[e]=Object.create(null));return n[t]||(n[t]=Mt(e,t))}function me(e,t){return ze(t)?Re(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function Qt(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let U=!1;function He(e){return typeof e=="boolean"&&(U=e),U}function Bt(e){const t=typeof e=="string"?X(e,!0,U):e;if(t){const n=V(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Lt(e,t){const n=X(e,!0,U);if(!n)return!1;const r=V(n.provider,n.prefix);return Qt(r,n.name,t)}function Vt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),U&&!t&&!e.prefix){let o=!1;return ze(e)&&(e.prefix="",Re(e,(i,s)=>{s&&Lt(i,s)&&(o=!0)})),o}const n=e.prefix;if(!G({provider:t,prefix:n,name:"a"}))return!1;const r=V(t,n);return!!me(r,e)}const Ge=Object.freeze({width:null,height:null}),Je=Object.freeze({...Ge,...W}),Ot=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Dt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function je(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(Ot);if(r===null||!r.length)return e;const o=[];let i=r.shift(),s=Dt.test(i);for(;;){if(s){const a=parseFloat(i);isNaN(a)?o.push(i):o.push(Math.ceil(a*t*n)/n)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}const Nt=e=>e==="unset"||e==="undefined"||e==="none";function qt(e,t){const n={...Y,...e},r={...Je,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(S=>{const p=[],g=S.hFlip,I=S.vFlip;let j=S.rotate;g?I?j+=2:(p.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),p.push("scale(-1 1)"),o.top=o.left=0):I&&(p.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),p.push("scale(1 -1)"),o.top=o.left=0);let m;switch(j<0&&(j-=Math.floor(j/4)*4),j=j%4,j){case 1:m=o.height/2+o.top,p.unshift("rotate(90 "+m.toString()+" "+m.toString()+")");break;case 2:p.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:m=o.width/2+o.left,p.unshift("rotate(-90 "+m.toString()+" "+m.toString()+")");break}j%2===1&&(o.left!==o.top&&(m=o.left,o.left=o.top,o.top=m),o.width!==o.height&&(m=o.width,o.width=o.height,o.height=m)),p.length&&(i='<g transform="'+p.join(" ")+'">'+i+"</g>")});const s=r.width,a=r.height,l=o.width,u=o.height;let c,b;s===null?(b=a===null?"1em":a==="auto"?u:a,c=je(b,l/u)):(c=s==="auto"?l:s,b=a===null?je(c,u/l):a==="auto"?u:a);const y={},w=(S,p)=>{Nt(p)||(y[S]=p.toString())};return w("width",c),w("height",b),y.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+u.toString(),{attributes:y,body:i}}const Ut=/\sid="(\S+)"/g,$t="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Rt=0;function zt(e,t=$t){const n=[];let r;for(;r=Ut.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const s=typeof t=="function"?t(i):t+(Rt++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+s+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const le=Object.create(null);function Ht(e,t){le[e]=t}function ae(e){return le[e]||le[""]}function ge(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const he=Object.create(null),N=["https://api.simplesvg.com","https://api.unisvg.com"],J=[];for(;N.length>0;)N.length===1||Math.random()>.5?J.push(N.shift()):J.push(N.pop());he[""]=ge({resources:["https://api.iconify.design"].concat(J)});function Gt(e,t){const n=ge(t);return n===null?!1:(he[e]=n,!0)}function be(e){return he[e]}const Jt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Ce=Jt();function Kt(e,t){const n=be(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const i=t+".json?icons=";r=n.maxURL-o-n.path.length-i.length}return r}function Wt(e){return e===404}const Xt=(e,t,n)=>{const r=[],o=Kt(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},a=0;return n.forEach((l,u)=>{a+=l.length+1,a>=o&&u>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},a=l.length),s.icons.push(l)}),r.push(s),r};function Yt(e){if(typeof e=="string"){const t=be(e);if(t)return t.path}return"/"}const Zt=(e,t,n)=>{if(!Ce){n("abort",424);return}let r=Yt(t.provider);switch(t.type){case"icons":{const i=t.prefix,a=t.icons.join(","),l=new URLSearchParams({icons:a});r+=i+".json?"+l.toString();break}case"custom":{const i=t.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let o=503;Ce(e+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(Wt(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",o)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",o)})},en={prepare:Xt,send:Zt};function tn(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,a=o.name,l=n[i]||(n[i]=Object.create(null)),u=l[s]||(l[s]=V(i,s));let c;a in u.icons?c=t.loaded:s===""||u.missing.has(a)?c=t.missing:c=t.pending;const b={provider:i,prefix:s,name:a};c.push(b)}),t}function Ke(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function nn(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(i=>{const s=i.icons,a=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==o)return!0;const u=l.name;if(e.icons[u])s.loaded.push({provider:r,prefix:o,name:u});else if(e.missing.has(u))s.missing.push({provider:r,prefix:o,name:u});else return n=!0,!0;return!1}),s.pending.length!==a&&(n||Ke([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let on=0;function rn(e,t,n){const r=on++,o=Ke.bind(null,n,r);if(!t.pending.length)return o;const i={id:r,icons:t,callback:e,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}function sn(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const i=typeof o=="string"?X(o,t,n):o;i&&r.push(i)}),r}var ln={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function an(e,t,n,r){const o=e.resources.length,i=e.random?Math.floor(Math.random()*o):e.index;let s;if(e.random){let h=e.resources.slice(0);for(s=[];h.length>1;){const x=Math.floor(Math.random()*h.length);s.push(h[x]),h=h.slice(0,x).concat(h.slice(x+1))}s=s.concat(h)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const a=Date.now();let l="pending",u=0,c,b=null,y=[],w=[];typeof r=="function"&&w.push(r);function S(){b&&(clearTimeout(b),b=null)}function p(){l==="pending"&&(l="aborted"),S(),y.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),y=[]}function g(h,x){x&&(w=[]),typeof h=="function"&&w.push(h)}function I(){return{startTime:a,payload:t,status:l,queriesSent:u,queriesPending:y.length,subscribe:g,abort:p}}function j(){l="failed",w.forEach(h=>{h(void 0,c)})}function m(){y.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),y=[]}function _(h,x,O){const z=x!=="success";switch(y=y.filter(E=>E!==h),l){case"pending":break;case"failed":if(z||!e.dataAfterTimeout)return;break;default:return}if(x==="abort"){c=O,j();return}if(z){c=O,y.length||(s.length?v():j());return}if(S(),m(),!e.random){const E=e.resources.indexOf(h.resource);E!==-1&&E!==e.index&&(e.index=E)}l="completed",w.forEach(E=>{E(O)})}function v(){if(l!=="pending")return;S();const h=s.shift();if(h===void 0){if(y.length){b=setTimeout(()=>{S(),l==="pending"&&(m(),j())},e.timeout);return}j();return}const x={status:"pending",resource:h,callback:(O,z)=>{_(x,O,z)}};y.push(x),u++,b=setTimeout(v,e.rotate),n(h,t,x.callback)}return setTimeout(v),I}function We(e){const t={...ln,...e};let n=[];function r(){n=n.filter(a=>a().status==="pending")}function o(a,l,u){const c=an(t,a,l,(b,y)=>{r(),u&&u(b,y)});return n.push(c),c}function i(a){return n.find(l=>a(l))||null}return{query:o,find:i,setIndex:a=>{t.index=a},getIndex:()=>t.index,cleanup:r}}function ke(){}const oe=Object.create(null);function un(e){if(!oe[e]){const t=be(e);if(!t)return;const n=We(t),r={config:t,redundancy:n};oe[e]=r}return oe[e]}function cn(e,t,n){let r,o;if(typeof e=="string"){const i=ae(e);if(!i)return n(void 0,424),ke;o=i.send;const s=un(e);s&&(r=s.redundancy)}else{const i=ge(e);if(i){r=We(i);const s=e.resources?e.resources[0]:"",a=ae(s);a&&(o=a.send)}}return!r||!o?(n(void 0,424),ke):r.query(t,o,n)().abort}const Fe="iconify2",$="iconify",Xe=$+"-count",Te=$+"-version",Ye=36e5,fn=168;function ue(e,t){try{return e.getItem(t)}catch{}}function ye(e,t,n){try{return e.setItem(t,n),!0}catch{}}function Ae(e,t){try{e.removeItem(t)}catch{}}function ce(e,t){return ye(e,Xe,t.toString())}function fe(e){return parseInt(ue(e,Xe))||0}const Z={local:!0,session:!0},Ze={local:new Set,session:new Set};let ve=!1;function dn(e){ve=e}let H=typeof window=="undefined"?{}:window;function et(e){const t=e+"Storage";try{if(H&&H[t]&&typeof H[t].length=="number")return H[t]}catch{}Z[e]=!1}function tt(e,t){const n=et(e);if(!n)return;const r=ue(n,Te);if(r!==Fe){if(r){const a=fe(n);for(let l=0;l<a;l++)Ae(n,$+l.toString())}ye(n,Te,Fe),ce(n,0);return}const o=Math.floor(Date.now()/Ye)-fn,i=a=>{const l=$+a.toString(),u=ue(n,l);if(typeof u=="string"){try{const c=JSON.parse(u);if(typeof c=="object"&&typeof c.cached=="number"&&c.cached>o&&typeof c.provider=="string"&&typeof c.data=="object"&&typeof c.data.prefix=="string"&&t(c,a))return!0}catch{}Ae(n,l)}};let s=fe(n);for(let a=s-1;a>=0;a--)i(a)||(a===s-1?(s--,ce(n,s)):Ze[e].add(a))}function nt(){if(!ve){dn(!0);for(const e in Z)tt(e,t=>{const n=t.data,r=t.provider,o=n.prefix,i=V(r,o);if(!me(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function pn(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in Z)tt(r,o=>{const i=o.data;return o.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function mn(e,t){ve||nt();function n(r){let o;if(!Z[r]||!(o=et(r)))return;const i=Ze[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=fe(o),!ce(o,s+1))return;const a={cached:Math.floor(Date.now()/Ye),provider:e.provider,data:t};return ye(o,$+s.toString(),JSON.stringify(a))}t.lastModified&&!pn(e,t.lastModified)||!Object.keys(t.icons).length||(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function Pe(){}function gn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,nn(e)}))}function hn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let i;if(!o||!(i=ae(n)))return;i.prepare(n,r,o).forEach(a=>{cn(n,a,l=>{if(typeof l!="object")a.icons.forEach(u=>{e.missing.add(u)});else try{const u=me(e,l);if(!u.length)return;const c=e.pendingIcons;c&&u.forEach(b=>{c.delete(b)}),mn(e,l)}catch(u){console.error(u)}gn(e)})})}))}const bn=(e,t)=>{const n=sn(e,!0,He()),r=tn(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,Pe)}),()=>{l=!1}}const o=Object.create(null),i=[];let s,a;return r.pending.forEach(l=>{const{provider:u,prefix:c}=l;if(c===a&&u===s)return;s=u,a=c,i.push(V(u,c));const b=o[u]||(o[u]=Object.create(null));b[c]||(b[c]=[])}),r.pending.forEach(l=>{const{provider:u,prefix:c,name:b}=l,y=V(u,c),w=y.pendingIcons||(y.pendingIcons=new Set);w.has(b)||(w.add(b),o[u][c].push(b))}),i.forEach(l=>{const{provider:u,prefix:c}=l;o[u][c].length&&hn(l,o[u][c])}),t?rn(t,r,i):Pe};function yn(e,t){const n={...e};for(const r in t){const o=t[r],i=typeof o;r in Ge?(o===null||o&&(i==="string"||i==="number"))&&(n[r]=o):i===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const vn=/[\s,]+/;function _n(e,t){t.split(vn).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function xn(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(e.slice(0,e.length-n.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return t}function wn(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Sn(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function In(e){return"data:image/svg+xml,"+Sn(e)}function jn(e){return'url("'+In(e)+'")'}const Ee={...Je,inline:!1},Cn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},kn={display:"inline-block"},de={backgroundColor:"currentColor"},ot={backgroundColor:"transparent"},Me={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Qe={webkitMask:de,mask:de,background:ot};for(const e in Qe){const t=Qe[e];for(const n in Me)t[e+n]=Me[n]}const K={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";K[e+"-flip"]=t,K[e.slice(0,1)+"-flip"]=t,K[e+"Flip"]=t});function Be(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const Le=(e,t)=>{const n=yn(Ee,t),r={...Cn},o=t.mode||"svg",i={},s=t.style,a=typeof s=="object"&&!(s instanceof Array)?s:{};for(let p in t){const g=t[p];if(g!==void 0)switch(p){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[p]=g===!0||g==="true"||g===1;break;case"flip":typeof g=="string"&&_n(n,g);break;case"color":i.color=g;break;case"rotate":typeof g=="string"?n[p]=xn(g):typeof g=="number"&&(n[p]=g);break;case"ariaHidden":case"aria-hidden":g!==!0&&g!=="true"&&delete r["aria-hidden"];break;default:{const I=K[p];I?(g===!0||g==="true"||g===1)&&(n[I]=!0):Ee[p]===void 0&&(r[p]=g)}}}const l=qt(e,n),u=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),o==="svg"){r.style={...i,...a},Object.assign(r,u);let p=0,g=t.id;return typeof g=="string"&&(g=g.replace(/-/g,"_")),r.innerHTML=zt(l.body,g?()=>g+"ID"+p++:"iconifyVue"),_e("svg",r)}const{body:c,width:b,height:y}=e,w=o==="mask"||(o==="bg"?!1:c.indexOf("currentColor")!==-1),S=wn(c,{...u,width:b+"",height:y+""});return r.style={...i,"--svg":jn(S),width:Be(u.width),height:Be(u.height),...kn,...w?de:ot,...a},_e("span",r)};He(!0);Ht("",en);if(typeof document!="undefined"&&typeof window!="undefined"){nt();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Vt(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Gt(n,o)||console.error(r)}catch{console.error(r)}}}}const Fn={...Y,body:""},Ve=R({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(e,t){if(typeof e=="object"&&e!==null&&typeof e.body=="string")return this._name="",this.abortLoading(),{data:e};let n;if(typeof e!="string"||(n=X(e,!1,!0))===null)return this.abortLoading(),null;const r=Bt(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==e)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:e,abort:bn([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==e&&(this._name=e,t&&t(e));const o=["iconify"];return n.prefix!==""&&o.push("iconify--"+n.prefix),n.provider!==""&&o.push("iconify--"+n.provider),{data:r,classes:o}}},render(){this.counter;const e=this.$attrs,t=this.iconMounted?this.getIcon(e.icon,e.onLoad):null;if(!t)return Le(Fn,e);let n=e;return t.classes&&(n={...e,class:(typeof e.class=="string"?e.class+" ":"")+t.classes.join(" ")}),Le({...Y,...t.data},n)}});const ao=R({__name:"IndexPage",setup(e){const{exportDataToCsv:t}=wt(),{subBudgetQuery:n}=qe(),{currencyFormat:r}=pe(),{data:o}=n,i=[{name:"consecutiveId",label:"ID",field:"consecutiveId",sortable:!1,required:!0},{name:"action",label:"Acci\xF3n",field:m=>{var _;return(_=m.action)==null?void 0:_.name},align:"left",sortable:!0},{name:"line",label:"Partida",field:m=>{var _;return(_=m.line)==null?void 0:_.name},align:"left",sortable:!0},{name:"area",label:"\xC1rea",field:m=>m.department.description,align:"left",sortable:!0},{name:"benefited_population",label:"Poblaci\xF3n Beneficiada",field:"benefited_population",align:"left",sortable:!0},{name:"objective",label:"Objetivo",field:"objective",align:"left",sortable:!1},{name:"cost_per_participant",label:"Costo Por Participante",field:m=>r(+m.cost_per_participant),align:"right",sortable:!0},{name:"number_participants",label:"N\xFAm. Participantes",field:"number_participants",align:"right",sortable:!0},{name:"event",label:"Servicio o Evento",field:"event",align:"left",sortable:!0},{name:"event_venue",label:"Sede",field:"event_venue",align:"left",sortable:!0},{name:"justification",label:"Justificaci\xF3n",field:"justification",align:"left",sortable:!1},{name:"start_date",label:"Empieza",field:"start_date",align:"left",sortable:!0},{name:"end_date",label:"Termina",field:"end_date",align:"left",sortable:!0},{name:"amount",label:"$ programado",field:m=>j(m),align:"right",sortable:!0,classes:m=>m.adjustmentsFrom.length||m.adjustmentsTo.length?"text-info tw-font-bold":""},{name:"amount",label:"$ adecuado",field:m=>r(+m.amount),align:"right",sortable:!0,classes:m=>m.adjustmentsFrom.length||m.adjustmentsTo.length?"text-info tw-font-bold":""},{name:"vat_breakdown",label:"Desglose del I.V.A.",field:m=>m.vat_breakdown?"Si":"No",align:"left",sortable:!0},{name:"risk",label:"Riesgo",field:"risk",align:"left",sortable:!1},{name:"actions",label:"Acciones",field:"actions",sortable:!1,align:"center"}],s=M(["action","line","area","benefited_population","cost_per_participant","number_participants","event","start_date","end_date","amount","vat_breakdown","actions"]),a=i.map(m=>({label:m.label,value:m.name})).filter(m=>m.label!=="ID"),l=M(null),u=M(!1),c=M(!1),{searchQuery:b,pagination:y,updatePagination:w}=xt(),S=M();function p(m){l.value=m,u.value=!0}function g(m){l.value=m,c.value=!0}function I(){t(S.value.filteredSortedRows,i,"sub-presupuestos")}function j(m){const _=m.adjustmentsFrom.reduce((h,x)=>h+parseFloat(x.amount),0),v=m.adjustmentsTo.reduce((h,x)=>h+parseFloat(x.amount),0);return r(+m.amount+_-v)}return(m,_)=>(P(),B(bt,null,{"card-body":d(()=>[f(C(Ne),{ref_key:"qTableSubBudgets",ref:S,columns:i,filter:C(b),pagination:C(y),"row-key":"id",rows:C(o),title:"Sub Presupuestos","visible-columns":s.value,"wrap-cells":"","onUpdate:pagination":C(w)},{"top-right":d(v=>[f(F,{class:"tw-mr-2",color:"primary","fab-mini":"",flat:"",icon:"tune",size:"sm"},{default:d(()=>[f(D,null,{default:d(()=>[A(" Mostrar/Ocultar columnas ")]),_:1}),f(lt,{anchor:"top end",self:"center start"},{default:d(()=>[f(Oe,null,{default:d(()=>[(P(!0),ft(pt,null,dt(C(a),h=>(P(),B(T,{key:h.value,clickable:""},{default:d(()=>[f(k,null,{default:d(()=>[f(rt,null,{default:d(()=>[A(L(h.label),1)]),_:2},1024)]),_:2},1024),f(k,{side:""},{default:d(()=>[f(it,{modelValue:s.value,"onUpdate:modelValue":_[0]||(_[0]=x=>s.value=x),color:"primary",val:h.value},null,8,["modelValue","val"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),f(F,{dense:"",flat:"",icon:v.inFullscreen?"fullscreen_exit":"fullscreen",round:"",onClick:v.toggleFullscreen},{default:d(()=>[f(D,{disable:m.$q.platform.is.mobile},{default:d(()=>[A(L(v.inFullscreen?"Salir de Pantalla Completa":"Pantalla Completa"),1)]),_:2},1032,["disable"])]),_:2},1032,["icon","onClick"]),f(re,{modelValue:C(b),"onUpdate:modelValue":_[1]||(_[1]=h=>mt(b)?b.value=h:null),class:"q-mr-xs",clearable:"",debounce:"300",dense:"",outlined:"",placeholder:"Buscar"},{append:d(()=>[f(gt,{name:"search"})]),_:1},8,["modelValue"]),f(xe,{unelevated:""},{default:d(()=>[f(F,{color:"primary",icon:"add",label:"Nuevo",to:{name:"sub-budgets.create"}},null,8,["to"]),f(F,{color:"secondary","icon-right":"archive",label:"Exportar a CSV",onClick:I})]),_:1})]),"body-cell-consecutiveId":d(v=>[f(ie,{props:v},{default:d(()=>[f(St,{to:{name:"sub-budgets.show",params:{id:v.row.id}},uuid:(v.rowIndex+1).toString()},null,8,["to","uuid"])]),_:2},1032,["props"])]),"body-cell-actions":d(v=>[f(ie,{props:v},{default:d(()=>[f(xe,{rounded:"",unelevated:""},{default:d(()=>[f(F,{color:"primary",dense:"",flat:"",onClick:h=>p(v.row)},{default:d(()=>[f(C(Ve),{icon:"majesticons:money-plus",width:"24"}),f(D,null,{default:d(()=>[A(" Adecuaci\xF3n ")]),_:1})]),_:2},1032,["onClick"]),f(F,{color:"secondary",dense:"",flat:"",to:{name:"sub-budgets.create.requisition",params:{id:v.row.id}}},{default:d(()=>[f(C(Ve),{icon:"mdi:receipt-text-plus",width:"24"}),f(D,null,{default:d(()=>[A(" Agregar requisici\xF3n ")]),_:1})]),_:2},1032,["to"]),v.row.adjustmentsFrom.length>0||v.row.adjustmentsTo.length>0?(P(),B(F,{key:0,color:"info",dense:"",flat:"",icon:"history",onClick:h=>g(v.row)},{default:d(()=>[f(D,null,{default:d(()=>[A(" Ver adecuaciones ")]),_:1})]),_:2},1032,["onClick"])):De("",!0)]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["filter","pagination","rows","visible-columns","onUpdate:pagination"])]),footer:d(()=>[f(we,{modelValue:u.value,"onUpdate:modelValue":_[2]||(_[2]=v=>u.value=v),"card-title":"Adecuaci\xF3n"},{default:d(({closeDialog:v})=>[f(kt,{target:l.value,onClose:v},null,8,["target","onClose"])]),_:1},8,["modelValue"]),f(we,{modelValue:c.value,"onUpdate:modelValue":_[3]||(_[3]=v=>c.value=v),"card-title":"Historial de Adecuaciones",class:"card-size-dialog"},{default:d(()=>[f(Ft,{"sub-budget":l.value},null,8,["sub-budget"])]),_:1},8,["modelValue"])]),_:1}))}});export{ao as default};
