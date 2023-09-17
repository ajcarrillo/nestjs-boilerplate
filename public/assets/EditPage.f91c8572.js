import{Q as D}from"./QCardSection.a8afd0fa.js";import{a as V}from"./format.5a4585ee.js";import{p as m,k as v,l as t,s as g,aT as Y,r as b,j as E,c as C,aH as Z,ag as R,d as e,X as w,q as f,ah as j,F as I,an as P,u as d,t as y,aj as S,o as K,ap as ee,b2 as te,_ as ae,b as ie,m as le}from"./index.e81fb1fc.js";import{Q as F}from"./QCard.9dedbb2b.js";import{a as oe,Q as H}from"./QChip.349b418c.js";import{C as ne}from"./CardPage.5e01f852.js";import{R as O,d as se}from"./useRequisitions.844a4f0a.js";import{_ as re}from"./RequisitionForm.e7e1ce7a.js";import{Q as M,a as A,b as z}from"./QItemLabel.dd0d0c24.js";import{Q as N}from"./QSpace.f345c4e6.js";import{Q as ue}from"./QSelect.f9a905e8.js";import{Q as X}from"./QBanner.2379f02e.js";import{a as G,Q as L}from"./QTable.877f6a43.js";import{C as J}from"./ClosePopup.6338225d.js";import{_ as de}from"./plugin-vue_export-helper.21dcd24c.js";import{u as ce}from"./useDictionaries.1556b69d.js";import{b as me}from"./useBudgetDetail.e399bbe0.js";import{l as k,Q as fe}from"./layout.002d03c4.js";import{Q as U}from"./QList.c2fb8b2a.js";import{Q as pe}from"./QCardActions.4c711164.js";import"./use-dark.9dc9ea9d.js";import"./planeacion.api.ea428453.js";import"./index.2cf0d985.js";import"./scroll.e271a657.js";import"./utils.esm.db18b7fe.js";import"./QPage.8984cb37.js";import"./useMutation.esm.f7013444.js";import"./mutation.esm.fb605c8f.js";import"./QPopupProxy.75399885.js";import"./date.eb50e543.js";import"./QFile.b0d7dd09.js";import"./QForm.1f8f3bc3.js";import"./index.7adaf3a2.js";import"./FilePreview.debddd79.js";import"./QTooltip.4fedd4bd.js";import"./QImg.7f40ff77.js";import"./useAreas.61910f3a.js";import"./app.3d5fad7f.js";import"./ArticleResource.bca6a98d.js";import"./QCheckbox.4b3f9cbd.js";const _e={},ge={class:"text-h6"};function qe(i,a){return m(),v(D,null,{default:t(()=>[g("div",ge,[Y(i.$slots,"default")])]),_:3})}var T=de(_e,[["render",qe]]);const ve=async(i,a)=>{const{data:c}=await O.storeRequisitionDetail(i,a);return c},be=async({requisitionId:i,requisitionDetailId:a})=>{const{data:c}=await O.removeRequisitionDetail(i,a);return c},W=()=>{const i=b(!1),a=b(null),c=b(null),r=oe();return{loading:i,error:a,data:c,storeDetail:async(s,o)=>{i.value=!0,a.value=null;try{c.value=await ve(s,o),k.showSuccessNotification("Detalle de requisici\xF3n guardado correctamente"),await r.invalidateQueries(["requisition",s])}catch(n){a.value=n,k.showErrorNotification("Error al guardar el detalle de requisici\xF3n")}finally{i.value=!1}},removeDetail:async({requisitionId:s,requisitionDetailId:o})=>{i.value=!0,a.value=null;try{await be({requisitionId:s,requisitionDetailId:o}),k.showSuccessNotification("Detalle de requisici\xF3n eliminado correctamente"),await r.invalidateQueries(["requisition",s])}catch(n){a.value=n,k.showErrorNotification("Error al eliminar el detalle de requisici\xF3n")}finally{i.value=!1}}}},we={class:"row items-center"},ye=E({__name:"AddArticleDialog",props:{selectedArticle:null,requisition:null},setup(i){const a=i,{storeDetail:c,loading:r}=W(),u=b(!1),l={alias:"Depto.",description:"Departamento",article_description:"Descripci\xF3n del art\xEDculo",month:"Mes",estimated_amount:"Monto estimado",total:"Total",quantity:"Cantidad programada"},s=b(a.selectedArticle.quantity||0),o=[p=>p>0||"La cantidad debe ser mayor a 0",p=>p<=a.selectedArticle.quantity||"La cantidad no puede ser mayor a la cantidad disponible"],n=b([]),h=C(()=>s.value*a.selectedArticle.estimated_amount||0),B=C(()=>a.requisition.estimated_amount/s.value),q=C(()=>n.value.length>0),$=C(()=>Object.keys(l).filter(p=>p!=="id"&&p!=="budget_id"));Z(()=>{n.value=[],B.value>a.selectedArticle.estimated_amount&&n.value.push("El precio por art\xEDculo no puede ser mayor al monto estimado por art\xEDculo"),h.value>a.selectedArticle.total&&n.value.push("El monto total no puede ser mayor al monto autorizado")});async function x(){if(q.value)return;const p={...a.selectedArticle,quantity:s.value};await c(a.requisition.id,{budget_detail_id:p.id,quantity:p.quantity,unit_price:+p.estimated_amount,requisition_id:a.requisition.id}),u.value=!1}return(p,Q)=>(m(),R(I,null,[e(w,{color:"primary",dense:"",icon:"o_post_add",size:"sm",unelevated:"",onClick:Q[0]||(Q[0]=_=>u.value=!0)}),e(H,{modelValue:u.value,"onUpdate:modelValue":Q[2]||(Q[2]=_=>u.value=_)},{default:t(()=>[e(F,null,{default:t(()=>[g("div",we,[e(T,null,{default:t(()=>[f("Art\xEDculo seleccionado")]),_:1}),e(N),j(e(w,{dense:"",flat:"",icon:"close",round:""},null,512),[[J]])]),e(V),e(D,null,{default:t(()=>[e(U,null,{default:t(()=>[(m(!0),R(I,null,P(d($),_=>(m(),v(M,{key:_},{default:t(()=>[e(A,{class:"tw-font-bold"},{default:t(()=>[f(y(l[_]),1)]),_:2},1024),e(A,null,{default:t(()=>[f(y(i.selectedArticle[_]),1)]),_:2},1024)]),_:2},1024))),128)),e(M,null,{default:t(()=>[e(A,{class:"tw-font-bold"},{default:t(()=>[f("Cantidad")]),_:1}),e(A,null,{default:t(()=>[e(fe,{modelValue:s.value,"onUpdate:modelValue":Q[1]||(Q[1]=_=>s.value=_),modelModifiers:{number:!0},dense:"",max:i.selectedArticle.quantity,min:"1",outlined:"",rules:o,type:"number"},null,8,["modelValue","max"])]),_:1})]),_:1})]),_:1}),d(q)?(m(),v(X,{key:0,class:"text-white bg-red tw-mt-4","inline-actions":""},{default:t(()=>[e(U,null,{default:t(()=>[(m(!0),R(I,null,P(n.value,_=>(m(),v(M,{key:_,dense:""},{default:t(()=>[e(A,null,{default:t(()=>[f(y(_),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})):S("",!0)]),_:1}),e(V),e(pe,null,{default:t(()=>[e(N),e(w,{color:"primary",disable:d(q),label:"Agregar",loading:d(r),onClick:x},null,8,["disable","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),De={class:"row items-center q-pb-none"},he={class:"tw-flex tw-gap-4 tw-items-center"},xe={class:"tw-w-80"},Qe={class:"tw-gap-4 tw-flex"},Ae=E({inheritAttrs:!1}),Ce=E({...Ae,__name:"BudgetDetailDialog",props:{requisition:null},setup(i){const a=i,{monthsDictionary:c}=ce(),{month:r,area:u,items:l,isLoading:s,isFetching:o}=me(),n=[{name:"actions",field:"actions",label:"Agregar",align:"center"},{name:"alias",field:"alias",label:"Alias",align:"left"},{name:"description",field:"description",label:"Descripci\xF3n",align:"left"},{name:"month",field:"month",label:"Mes",align:"left"},{name:"quantity",field:"quantity",label:"Cantidad",align:"left"},{name:"article_description",field:"article_description",label:"Descripci\xF3n del art\xEDculo",align:"left"},{name:"estimated_amount",field:"estimated_amount",label:"Monto estimado",align:"left"},{name:"total",field:"total",label:"Total",align:"left"}];K(()=>{u.value=a.requisition.area});const h=C(()=>{var q;return(q=u.value)==null?void 0:q.description});function B(){r.value=""}return(q,$)=>(m(),v(F,ee(te(q.$attrs)),{default:t(()=>[e(T,null,{default:t(()=>[g("div",De,[e(A,null,{default:t(()=>[e(z,null,{default:t(()=>[f("Art\xEDculos")]),_:1}),e(z,{caption:""},{default:t(()=>[f(y(d(h)),1)]),_:1})]),_:1}),e(N),j(e(w,{dense:"",flat:"",icon:"close",round:""},null,512),[[J]])])]),_:1}),e(V),e(D,null,{default:t(()=>[e(X,{class:"bg-grey-3",rounded:""},{default:t(()=>[g("div",he,[g("div",null,[e(ae,{name:"o_filter_list"})]),g("div",xe,[e(ue,{modelValue:d(r),"onUpdate:modelValue":$[0]||($[0]=x=>ie(r)?r.value=x:null),"bg-color":"white",dense:"",label:"Meses",options:d(c),outlined:""},null,8,["modelValue","options"])]),g("div",Qe,[e(w,{color:"secondary",outline:"",onClick:B},{default:t(()=>[f("Limpiar")]),_:1})])])]),_:1})]),_:1}),e(D,null,{default:t(()=>[e(G,{columns:n,loading:d(o)||d(s),rows:d(l),"wrap-cells":""},{"body-cell-actions":t(x=>[e(L,{props:x},{default:t(()=>[e(ye,{requisition:a.requisition,"selected-article":x.row},null,8,["requisition","selected-article"])]),_:2},1032,["props"])]),_:1},8,["loading","rows"])]),_:1})]),_:1},16))}}),Ee=E({__name:"RequisitionDetailTable",props:{requisition:null,details:null},setup(i){const a=i,{removeDetail:c}=W(),r=[{name:"consecutiveId",label:"ID",field:"consecutiveId",sortable:!1},{name:"article",field:l=>l.budgetDetail.article.name,label:"Art\xEDculo",align:"left"},{name:"department",field:l=>l.budgetDetail.department.description,label:"Departamento",align:"left"},{name:"requested_quantity",field:"quantity",label:"Total solicitado",align:"right"},{name:"programed_quantity",field:l=>{var s;return(s=l.budgetDetail.months)==null?void 0:s.reduce((o,n)=>o+n.quantity,0)},label:"Total programado",align:"right"},{name:"requested_amount",field:"unit_price",label:"Monto solicitado",align:"right"},{name:"estimated_amount",field:l=>l.budgetDetail.total,label:"Monto programado",align:"right"},{name:"actions",field:"actions",label:"Acciones",align:"center"}];async function u(l){await c({requisitionId:a.requisition.id,requisitionDetailId:l.id})}return(l,s)=>(m(),v(G,{columns:r,flat:"","row-key":"id",rows:a.details},{"body-cell-consecutiveId":t(o=>[e(L,{props:o},{default:t(()=>[f(y(o.rowIndex+1),1)]),_:2},1032,["props"])]),"body-cell-actions":t(o=>[e(L,{props:o},{default:t(()=>[e(w,{color:"negative",dense:"",flat:"",icon:"delete",round:"",onClick:n=>u(o.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows"]))}}),$e=E({__name:"RequisitionDetailCard",props:{requisition:null},setup(i){const a=i,c=C(()=>{var r;return(r=a.requisition.details)==null?void 0:r.length});return(r,u)=>(m(),v(F,null,{default:t(()=>[e(T,null,{default:t(()=>[f(y(d(c))+" Art\xEDculo(s) solicitado(s)",1)]),_:1}),e(D,{class:"tw-p-0"},{default:t(()=>[e(Ee,{details:a.requisition.details,requisition:a.requisition},null,8,["details","requisition"])]),_:1})]),_:1}))}}),ke={class:"q-pa-sm"},Re={class:"row q-mb-md"},Ve={class:"col col-md-6"},Fe={key:0,class:"row q-mb-md"},Te={class:"col"},yt=E({__name:"EditPage",setup(i){const a=le(),{id:c}=a.params,{isLoading:r,requisition:u}=se(c),l=b(!1);return(s,o)=>d(r)?S("",!0):(m(),v(ne,{key:0},{title:t(()=>{var n;return[f(" Requisici\xF3n "+y((n=d(u))==null?void 0:n.requisition_number),1)]}),body:t(()=>{var n;return[g("div",ke,[g("div",Re,[g("div",Ve,[e(F,null,{default:t(()=>[e(D,{class:"tw-p-0"},{default:t(()=>[e(T,{class:"tw-grow"},{default:t(()=>[f("Datos de la requisici\xF3n")]),_:1})]),_:1}),e(V),e(D,{class:"tw-pt-9"},{default:t(()=>[e(w,{class:"absolute tw-top-0 tw-right-3 tw-translate-y-[-50%]",color:"purple",icon:"o_add_shopping_cart",round:"",size:"1rem",onClick:o[0]||(o[0]=h=>l.value=!0)}),e(re,{requisition:d(u)},null,8,["requisition"])]),_:1})]),_:1})])]),((n=d(u))==null?void 0:n.details.length)>0?(m(),R("div",Fe,[g("div",Te,[e($e,{requisition:d(u)},null,8,["requisition"])])])):S("",!0),e(H,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=h=>l.value=h),"full-width":""},{default:t(()=>[e(Ce,{requisition:d(u)},null,8,["requisition"])]),_:1},8,["modelValue"])])]}),_:1}))}});export{yt as default};
