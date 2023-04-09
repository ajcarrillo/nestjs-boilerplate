import{Q as I}from"./QSpace.806ddb40.js";import{r as c,j as R,N as k,p as Q,k as V,l as r,d as e,u as g,av as A,b1 as L,q as w,t as S,_ as $,X as P,b5 as T,ap as E,s as B}from"./index.3368071b.js";import{a as j,Q as H}from"./QTable.389e2b81.js";import{Q as z}from"./QPage.1cbbdd27.js";import{T as G}from"./TablePage.d279c911.js";import{P as M,u as X,a as J}from"./usePurchaseOrders.58f2d6be.js";import{a as K,Q as W}from"./QForm.b003c7e9.js";import{a as v,b as F,k as D,c as Y}from"./format.5c2ef003.js";import{f as Z}from"./QSelect.37b48709.js";import{Q as ee}from"./QFile.3d80d05b.js";import{Q as re}from"./QList.5b32bffe.js";import{a as ae}from"./QCard.39cdd76c.js";import{Q as oe}from"./QCardActions.b7416617.js";import{c as N}from"./index.7adaf3a2.js";import{d as ie}from"./useRequisitions.6b19a40d.js";import{_ as le}from"./DatePicker.cc392c4f.js";import{l as te}from"./layout.e94e56b8.js";import{_ as ne}from"./CardDialog.c391a448.js";import{F as ue}from"./FilePreview.a105a4c3.js";import"./scroll.0ed17dea.js";import"./use-dark.df68422f.js";import"./QCheckbox.0e68f13b.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./focus-manager.33224ae2.js";import"./utils.esm.6355ed5c.js";import"./ClosePopup.87de336f.js";import"./date.2891a3b3.js";import"./index.2cf0d985.js";import"./QImg.2154c205.js";const se=()=>{const n=c(),u=c(!1);return{isLoading:u,fileToUpload:n,uploadFile:async f=>{if(!n.value)throw new Error("No hay archivo para cargar");u.value=!0;const s=await f(n.value);return u.value=!1,te.showSuccessNotification("Archivo subido con \xE9xito"),n.value=void 0,s}}},de=()=>{const{fileToUpload:n,isLoading:u,uploadFile:p}=se();return{fileToUpload:n,isLoading:u,uploadRequisitionFile:async s=>await p(async d=>{const m=new FormData;m.append("file",d);const{data:i}=await M.uploadFile(s,m);return i.file_name})}},me=R({__name:"PurchaseOrderForm",props:{purchaseOrder:{default:()=>({order_number:null,reception_date:new Date().toISOString().substring(0,10),requisition_id:null})}},setup(n){const u=n,{uploadRequisitionFile:p,fileToUpload:f,isLoading:s}=de(),{requisitionsDictionary:q}=ie(),{createPurchaseOrder:d,purchaseOrder:m}=X(),i={order_number:null,reception_date:new Date().toISOString().substring(0,10),requisition_id:null},a=k(N(u.purchaseOrder)||N(i)),_={order_number:[l=>!!l||"El n\xFAmero de orden de compra es requerido",l=>l.length==3||"El n\xFAmero de orden de compra debe tener 3 d\xEDgitos",l=>!isNaN(Number(l))||"El n\xFAmero de orden de compra debe ser un n\xFAmero"],reception_date:[l=>!!l||"La fecha de recepci\xF3n es requerida"],requisition_id:[l=>!!l||"La requisici\xF3n es requerida"]},x=c(),h=c(null),b=c();async function U(){var t,o,y,O;await((t=x.value)==null?void 0:t.validate())&&(await d({requisition_id:(o=h.value)==null?void 0:o.id,order_number:a.order_number,reception_date:a.reception_date}),b.value?(f.value=b.value,await p(m.value.id),(y=x.value)==null||y.reset()):(O=x.value)==null||O.reset())}function C(){a.order_number=null,a.reception_date=new Date().toISOString().substring(0,10),a.requisition_id=null,h.value=null,b.value=void 0}return(l,t)=>(Q(),V(g(W),{ref_key:"qPurchaseOrderForm",ref:x,onReset:C,onSubmit:T(U,["prevent"])},{default:r(()=>[e(ae,null,{default:r(()=>[e(re,null,{default:r(()=>[e(v,null,{default:r(()=>[e(F,null,{default:r(()=>[e(K,{modelValue:a.order_number,"onUpdate:modelValue":t[0]||(t[0]=o=>a.order_number=o),dense:"",label:"N\xFAmero de orden de compra",outlined:"",rules:_.order_number},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(v,null,{default:r(()=>[e(F,null,{default:r(()=>[e(le,{modelValue:a.reception_date,"onUpdate:modelValue":t[1]||(t[1]=o=>a.reception_date=o),rules:_.reception_date},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(v,null,{default:r(()=>[e(F,null,{default:r(()=>[e(Z,{modelValue:h.value,"onUpdate:modelValue":t[2]||(t[2]=o=>h.value=o),dense:"",label:"Requisici\xF3n","option-label":o=>`Requisici\xF3n #${o.requisition_number} - ${o.area_description}`,"option-value":"id",options:g(q),outlined:"",rules:_.requisition_id},{option:r(o=>[e(v,A(L(o.itemProps)),{default:r(()=>[e(F,null,{default:r(()=>[e(D,null,{default:r(()=>[w("Requisici\xF3n #"+S(o.opt.requisition_number),1)]),_:2},1024),e(D,{caption:""},{default:r(()=>[w(S(o.opt.area_description),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","option-label","options","rules"])]),_:1})]),_:1}),e(v,null,{default:r(()=>[e(F,null,{default:r(()=>[e(ee,{modelValue:b.value,"onUpdate:modelValue":t[3]||(t[3]=o=>b.value=o),accept:".jpg, image/*, application/pdf",dense:"",label:"Haga click para subir el archivo o arrastralo aqu\xED",loading:g(s),outlined:"","use-chips":""},{prepend:r(()=>[e($,{name:"attach_file"})]),_:1},8,["modelValue","loading"])]),_:1})]),_:1})]),_:1})]),_:1}),e(Y),e(oe,{align:"right"},{default:r(()=>[e(P,{color:"primary",label:"Guardar",type:"submit",unelevated:""})]),_:1})]),_:1},8,["onSubmit"]))}});const ce=B("div",{class:"q-table__title"},"\xD3rdenes de compra",-1),Be=R({__name:"IndexPage",setup(n){const u="https://nestjs-boilerplate-production.up.railway.app",{isLoading:p,isFetching:f,orders:s}=J(),q=[{name:"order_number",field:"order_number",label:"N\xFAmero de orden de compra",align:"center",sortable:!0},{name:"reception_date",field:"reception_date",label:"Fecha de recepci\xF3n",sortable:!0,align:"left"},{name:"requisition",field:m=>{var i;return(i=m.requisition)==null?void 0:i.requisition_number},label:"Requisici\xF3n",sortable:!0,align:"center"},{name:"file",field:"file",label:"Archivo",sortable:!1,align:"left"}],d=c(!1);return(m,i)=>(Q(),V(z,null,{default:r(()=>[e(G,null,{"card-body":r(()=>[e(j,{columns:q,rows:g(s),title:"\xD3rdenes de compra"},{top:r(()=>[ce,e(I),e(P,{color:"primary",label:"Nueva orden de compra",onClick:i[0]||(i[0]=a=>d.value=!0)})]),"body-cell-file":r(a=>[e(H,{props:a},{default:r(()=>[a.value?(Q(),V(ue,{key:0,"file-url":`${g(u)}/api/files/purchase-orders/${a.id}/${a.value}`},{activator:r(({showPreview:_})=>[e(P,{color:"primary",flat:"","no-caps":"",onClick:_},{default:r(()=>[w(" Ver archivo ")]),_:2},1032,["onClick"])]),_:2},1032,["file-url"])):E("",!0)]),_:2},1032,["props"])]),_:1},8,["rows"])]),footer:r(()=>[e(ne,{modelValue:d.value,"onUpdate:modelValue":i[1]||(i[1]=a=>d.value=a),"card-title":"Orden de Compra",class:"form-purchase-order"},{default:r(()=>[e(me)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}});export{Be as default};
