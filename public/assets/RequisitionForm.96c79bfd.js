import{r as _,j as X,N as J,V as K,c as E,o as W,p as g,ag as F,d as a,l as t,s as r,_ as m,u as n,b as Z,av as ee,b1 as ae,q as A,t as N,an as D,X as V,ap as k,F as ie}from"./index.6e0dc468.js";import{Q as c}from"./QInput.39e7bb07.js";import{Q as oe,a as te,b as C}from"./QItemLabel.1df21711.js";import{Q as se}from"./QSelect.ca846bee.js";import{Q as M,a as S,C as L}from"./ClosePopup.691ed294.js";import{Q as le}from"./QFile.ab8a6a30.js";import{a as re}from"./format.e39f8640.js";import{Q as ne}from"./QSpace.d3b745d6.js";import{Q as ue}from"./QForm.e5ce8d0b.js";import{R as de,u as me,a as pe}from"./useRequisitions.583bbbe5.js";import{c as P}from"./index.7adaf3a2.js";import{F as ce}from"./FilePreview.23be025c.js";import{l as _e}from"./layout.f6c7d4be.js";import{c as fe}from"./useAreas.01e1bd8d.js";const qe=()=>{const d=_(),l=_(!1);return{isLoading:l,requisitionFile:d,uploadRequisitionFile:async f=>{const p=new FormData;p.append("file",d.value),l.value=!0;const{data:q}=await de.uploadFile(f,p);return l.value=!1,_e.showSuccessNotification("Archivo subido con \xE9xito"),d.value=void 0,q.file_name}}},ve={class:"row q-gutter-md"},be={class:"col"},ge={class:"row q-gutter-md"},Fe={class:"col"},Ve={class:"row q-gutter-md"},xe={class:"col"},we={class:"row q-gutter-md"},he={class:"col"},ye={class:"row items-center justify-end"},Qe={class:"col"},Re={class:"row items-center justify-end"},Ue={key:0,class:"row q-gutter-md"},Ee={class:"col"},Ae={key:0,class:"col"},Ne={class:"row q-mt-md"},ze=X({__name:"RequisitionForm",props:{requisition:{default:()=>({requisition_number:"",preparation_date:"",processing_date:"",estimated_amount:0,area_id:"",area:null})}},setup(d){const l=d,x="https://nestjs-boilerplate-production.up.railway.app",{uploadRequisitionFile:f,requisitionFile:p,isLoading:q}=qe(),{area:u,filterArea:Y,areasOptions:I}=fe(),j={requisition_number:"",preparation_date:"",processing_date:"",estimated_amount:0,area_id:"",area:null},o=J(P(l.requisition)||P(j)),w=_(),{requisitionStoreMutations:h}=me(),{requisitionUpdateMutations:y}=pe(),{isLoading:B,data:$}=h,{isLoading:H}=y,O=K(),v={requisition_number:[s=>!!s||"El n\xFAmero de requisici\xF3n es requerido",s=>s.length==3||"El n\xFAmero de requisici\xF3n debe tener 3 d\xEDgitos",s=>!isNaN(Number(s))||"El n\xFAmero de requisici\xF3n debe ser un n\xFAmero"],estimated_amount:[s=>!!s||"El monto estimado es requerido",s=>!isNaN(Number(s))||"El monto estimado debe ser un n\xFAmero"],area_id:[s=>!!s||"El \xE1rea es requerida"]},b=_(),Q=E(()=>!!l.requisition.id),z=E(()=>!l.requisition.details||l.requisition.details.length==0);W(()=>{l.requisition.area&&(u.value={label:l.requisition.area.alias,full_description:l.requisition.area.description,value:l.requisition.area.id})});async function G(){var i,e,R,U;!await((i=w.value)==null?void 0:i.validate())||(Q.value?await y.mutateAsync({...o,area_id:(U=u.value)==null?void 0:U.value}):(await h.mutateAsync({...o,area_id:(e=u.value)==null?void 0:e.value}),await O.push({name:"requisitions.edit",params:{id:(R=$.value)==null?void 0:R.id}})))}async function T(s){p.value=s,o.file=await f(l.requisition.id),b.value=void 0}return(s,i)=>(g(),F(ie,null,[a(n(ue),{ref_key:"qRequisitionForm",ref:w,class:"q-pb-md"},{default:t(()=>[r("div",ve,[r("div",be,[a(c,{modelValue:o.requisition_number,"onUpdate:modelValue":i[0]||(i[0]=e=>o.requisition_number=e),"bg-color":"white",counter:"",dense:"",label:"N\xFAmero de requisici\xF3n",maxlength:"3",outlined:"",rules:v.requisition_number},{prepend:t(()=>[a(m,{name:"tag"})]),_:1},8,["modelValue","rules"])])]),r("div",ge,[r("div",Fe,[a(se,{modelValue:n(u),"onUpdate:modelValue":i[1]||(i[1]=e=>Z(u)?u.value=e:null),"bg-color":"white",dense:"","input-debounce":"0",label:"Departamentos",options:n(I),outlined:"",rules:v.area_id,"use-input":"",onFilter:n(Y)},{option:t(e=>[a(oe,ee(ae(e.itemProps)),{default:t(()=>[a(te,null,{default:t(()=>[a(C,null,{default:t(()=>[A(N(e.opt.full_description),1)]),_:2},1024),a(C,{caption:""},{default:t(()=>[A(N(e.opt.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","rules","onFilter"])])]),r("div",Ve,[r("div",xe,[a(c,{modelValue:o.estimated_amount,"onUpdate:modelValue":i[2]||(i[2]=e=>o.estimated_amount=e),modelModifiers:{number:!0},dense:"","input-class":"tw-text-right",label:"Monto estimado",outlined:"",readonly:!n(z),rules:v.estimated_amount,type:"number"},{prepend:t(()=>[a(m,{name:"attach_money"})]),_:1},8,["modelValue","readonly","rules"])])]),r("div",we,[r("div",he,[a(c,{modelValue:o.preparation_date,"onUpdate:modelValue":i[4]||(i[4]=e=>o.preparation_date=e),dense:"",label:"Fecha de elaboraci\xF3n",outlined:"",rules:[e=>!!e||"La fecha de elaboraci\xF3n es requerida"]},{append:t(()=>[a(m,{class:"cursor-pointer",name:"event"},{default:t(()=>[a(M,{cover:"","transition-hide":"scale","transition-show":"scale"},{default:t(()=>[a(S,{modelValue:o.preparation_date,"onUpdate:modelValue":i[3]||(i[3]=e=>o.preparation_date=e),mask:"YYYY-MM-DD"},{default:t(()=>[r("div",ye,[D(a(V,{color:"primary",flat:"",label:"Close"},null,512),[[L]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","rules"])]),r("div",Qe,[a(c,{modelValue:o.processing_date,"onUpdate:modelValue":i[6]||(i[6]=e=>o.processing_date=e),dense:"",label:"Fecha de tr\xE1mite",outlined:"",rules:[e=>!!e||"La fecha de tr\xE1mite es requerida"]},{append:t(()=>[a(m,{class:"cursor-pointer",name:"event"},{default:t(()=>[a(M,{cover:"","transition-hide":"scale","transition-show":"scale"},{default:t(()=>[a(S,{modelValue:o.processing_date,"onUpdate:modelValue":i[5]||(i[5]=e=>o.processing_date=e),mask:"YYYY-MM-DD"},{default:t(()=>[r("div",Re,[D(a(V,{color:"primary",flat:"",label:"Close"},null,512),[[L]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","rules"])])]),n(Q)?(g(),F("div",Ue,[r("div",Ee,[a(le,{modelValue:b.value,"onUpdate:modelValue":[i[7]||(i[7]=e=>b.value=e),T],accept:".jpg, image/*, application/pdf",dense:"",label:"Haga click para subir el archivo o arrastralo aqu\xED",loading:n(q),outlined:""},{prepend:t(()=>[a(m,{name:"attach_file"})]),_:1},8,["modelValue","loading"])]),o.file?(g(),F("div",Ae,[a(ce,{"file-url":`${n(x)}/api/files/requisitions/${l.requisition.id}/${o.file}`},null,8,["file-url"])])):k("",!0)])):k("",!0)]),_:1},512),a(re),r("div",Ne,[a(ne),r("div",null,[a(V,{color:"primary",label:"Guardar",loading:n(B)||n(H),onClick:G},null,8,["loading"])])])],64))}});export{ze as _};
