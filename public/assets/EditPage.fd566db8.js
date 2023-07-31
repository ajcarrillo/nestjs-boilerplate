import{Q as x}from"./QCardSection.0d056ee7.js";import{a as B}from"./format.d9f81dde.js";import{v as K,c as g,h as $,x as S,g as ee,p as m,k as b,l as t,s as v,aT as te,r as y,j as k,aH as ae,ag as V,d as e,X as D,q as f,ah as O,F as M,an as z,u as c,t as h,aj as L,o as ie,ap as le,b2 as oe,_ as ne,b as se,m as re}from"./index.14e8ebb5.js";import{Q as F}from"./QCard.01814d56.js";import{a as ue,Q as X}from"./QChip.c477ed29.js";import{C as de}from"./CardPage.0fe0ebea.js";import{R as G,c as ce}from"./useRequisitions.c64731a9.js";import{_ as me}from"./RequisitionForm.4dc34a06.js";import{Q as N,a as C,b as U}from"./QItemLabel.7fed4ad0.js";import{Q as P}from"./QSpace.a3e1f224.js";import{Q as fe}from"./QSelect.3bb31b5f.js";import{u as pe,a as _e}from"./use-dark.e748ccdc.js";import{a as J,Q as j}from"./QTable.4cc72d32.js";import{C as W}from"./ClosePopup.559675a8.js";import{_ as ve}from"./plugin-vue_export-helper.21dcd24c.js";import{u as qe}from"./useDictionaries.6e55a643.js";import{b as ge}from"./useBudgetDetail.5d3a1ab8.js";import{Q as be}from"./QInput.0f74b52d.js";import{Q as H}from"./QList.2e5bba7a.js";import{Q as we}from"./QCardActions.dee82ce4.js";import{l as R}from"./layout.a470fe7f.js";import"./planeacion.api.91fa18e5.js";import"./index.2cf0d985.js";import"./scroll.d839d060.js";import"./utils.esm.1cc111ad.js";import"./QPage.6a9365d9.js";import"./useMutation.esm.fc6ad15c.js";import"./mutation.esm.6a2477d4.js";import"./QPopupProxy.3538f428.js";import"./date.d6e11009.js";import"./QFile.0879df6b.js";import"./QForm.4ada3f4b.js";import"./index.7adaf3a2.js";import"./FilePreview.7be9115f.js";import"./QTooltip.133969a2.js";import"./QImg.17c45358.js";import"./useAreas.bfcc6976.js";import"./app.ceedfc2e.js";import"./ArticleResource.aab864ed.js";import"./QCheckbox.cc510596.js";var Y=K({name:"QBanner",props:{...pe,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(i,{slots:a}){const{proxy:{$q:d}}=ee(),r=_e(i,d),u=g(()=>"q-banner row items-center"+(i.dense===!0?" q-banner--dense":"")+(r.value===!0?" q-banner--dark q-dark":"")+(i.rounded===!0?" rounded-borders":"")),o=g(()=>`q-banner__actions row items-center justify-end col-${i.inlineActions===!0?"auto":"all"}`);return()=>{const n=[$("div",{class:"q-banner__avatar col-auto row items-center self-start"},S(a.avatar)),$("div",{class:"q-banner__content col text-body2"},S(a.default))],l=S(a.action);return l!==void 0&&n.push($("div",{class:o.value},l)),$("div",{class:u.value+(i.inlineActions===!1&&l!==void 0?" q-banner--top-padding":""),role:"alert"},n)}}});const ye={},De={class:"text-h6"};function he(i,a){return m(),b(x,null,{default:t(()=>[v("div",De,[te(i.$slots,"default")])]),_:3})}var T=ve(ye,[["render",he]]);const xe=async(i,a)=>{const{data:d}=await G.storeRequisitionDetail(i,a);return d},Qe=async({requisitionId:i,requisitionDetailId:a})=>{const{data:d}=await G.removeRequisitionDetail(i,a);return d},Z=()=>{const i=y(!1),a=y(null),d=y(null),r=ue();return{loading:i,error:a,data:d,storeDetail:async(n,l)=>{i.value=!0,a.value=null;try{d.value=await xe(n,l),R.showSuccessNotification("Detalle de requisici\xF3n guardado correctamente"),await r.invalidateQueries(["requisition",n])}catch(s){a.value=s,R.showErrorNotification("Error al guardar el detalle de requisici\xF3n")}finally{i.value=!1}},removeDetail:async({requisitionId:n,requisitionDetailId:l})=>{i.value=!0,a.value=null;try{await Qe({requisitionId:n,requisitionDetailId:l}),R.showSuccessNotification("Detalle de requisici\xF3n eliminado correctamente"),await r.invalidateQueries(["requisition",n])}catch(s){a.value=s,R.showErrorNotification("Error al eliminar el detalle de requisici\xF3n")}finally{i.value=!1}}}},Ae={class:"row items-center"},Ce=k({__name:"AddArticleDialog",props:{selectedArticle:null,requisition:null},setup(i){const a=i,{storeDetail:d,loading:r}=Z(),u=y(!1),o={alias:"Depto.",description:"Departamento",article_description:"Descripci\xF3n del art\xEDculo",month:"Mes",estimated_amount:"Monto estimado",total:"Total",quantity:"Cantidad programada"},n=y(a.selectedArticle.quantity||0),l=[p=>p>0||"La cantidad debe ser mayor a 0",p=>p<=a.selectedArticle.quantity||"La cantidad no puede ser mayor a la cantidad disponible"],s=y([]),w=g(()=>n.value*a.selectedArticle.estimated_amount||0),I=g(()=>a.requisition.estimated_amount/n.value),q=g(()=>s.value.length>0),E=g(()=>Object.keys(o).filter(p=>p!=="id"&&p!=="budget_id"));ae(()=>{s.value=[],I.value>a.selectedArticle.estimated_amount&&s.value.push("El precio por art\xEDculo no puede ser mayor al monto estimado por art\xEDculo"),w.value>a.selectedArticle.total&&s.value.push("El monto total no puede ser mayor al monto autorizado"),w.value>a.requisition.estimated_amount&&s.value.push("El monto total no puede ser mayor al monto estimado de la requisici\xF3n")});async function Q(){if(q.value)return;const p={...a.selectedArticle,quantity:n.value};await d(a.requisition.id,{budget_detail_id:p.id,quantity:p.quantity,unit_price:+p.estimated_amount,requisition_id:a.requisition.id}),u.value=!1}return(p,A)=>(m(),V(M,null,[e(D,{color:"primary",dense:"",icon:"o_post_add",size:"sm",unelevated:"",onClick:A[0]||(A[0]=_=>u.value=!0)}),e(X,{modelValue:u.value,"onUpdate:modelValue":A[2]||(A[2]=_=>u.value=_)},{default:t(()=>[e(F,null,{default:t(()=>[v("div",Ae,[e(T,null,{default:t(()=>[f("Art\xEDculo seleccionado")]),_:1}),e(P),O(e(D,{dense:"",flat:"",icon:"close",round:""},null,512),[[W]])]),e(B),e(x,null,{default:t(()=>[e(H,null,{default:t(()=>[(m(!0),V(M,null,z(c(E),_=>(m(),b(N,{key:_},{default:t(()=>[e(C,{class:"tw-font-bold"},{default:t(()=>[f(h(o[_]),1)]),_:2},1024),e(C,null,{default:t(()=>[f(h(i.selectedArticle[_]),1)]),_:2},1024)]),_:2},1024))),128)),e(N,null,{default:t(()=>[e(C,{class:"tw-font-bold"},{default:t(()=>[f("Cantidad")]),_:1}),e(C,null,{default:t(()=>[e(be,{modelValue:n.value,"onUpdate:modelValue":A[1]||(A[1]=_=>n.value=_),modelModifiers:{number:!0},dense:"",max:i.selectedArticle.quantity,min:"1",outlined:"",rules:l,type:"number"},null,8,["modelValue","max"])]),_:1})]),_:1})]),_:1}),c(q)?(m(),b(Y,{key:0,class:"text-white bg-red tw-mt-4","inline-actions":""},{default:t(()=>[e(H,null,{default:t(()=>[(m(!0),V(M,null,z(s.value,_=>(m(),b(N,{key:_,dense:""},{default:t(()=>[e(C,null,{default:t(()=>[f(h(_),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})):L("",!0)]),_:1}),e(B),e(we,null,{default:t(()=>[e(P),e(D,{color:"primary",disable:c(q),label:"Agregar",loading:c(r),onClick:Q},null,8,["disable","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),ke={class:"row items-center q-pb-none"},Ee={class:"tw-flex tw-gap-4 tw-items-center"},$e={class:"tw-w-80"},Re={class:"tw-gap-4 tw-flex"},Ve=k({inheritAttrs:!1}),Be=k({...Ve,__name:"BudgetDetailDialog",props:{requisition:null},setup(i){const a=i,{monthsDictionary:d}=qe(),{month:r,area:u,items:o,isLoading:n,isFetching:l}=ge(),s=[{name:"actions",field:"actions",label:"Agregar",align:"center"},{name:"alias",field:"alias",label:"Alias",align:"left"},{name:"description",field:"description",label:"Descripci\xF3n",align:"left"},{name:"month",field:"month",label:"Mes",align:"left"},{name:"quantity",field:"quantity",label:"Cantidad",align:"left"},{name:"article_description",field:"article_description",label:"Descripci\xF3n del art\xEDculo",align:"left"},{name:"estimated_amount",field:"estimated_amount",label:"Monto estimado",align:"left"},{name:"total",field:"total",label:"Total",align:"left"}];ie(()=>{u.value=a.requisition.area});const w=g(()=>{var q;return(q=u.value)==null?void 0:q.description});function I(){r.value=""}return(q,E)=>(m(),b(F,le(oe(q.$attrs)),{default:t(()=>[e(T,null,{default:t(()=>[v("div",ke,[e(C,null,{default:t(()=>[e(U,null,{default:t(()=>[f("Art\xEDculos")]),_:1}),e(U,{caption:""},{default:t(()=>[f(h(c(w)),1)]),_:1})]),_:1}),e(P),O(e(D,{dense:"",flat:"",icon:"close",round:""},null,512),[[W]])])]),_:1}),e(B),e(x,null,{default:t(()=>[e(Y,{class:"bg-grey-3",rounded:""},{default:t(()=>[v("div",Ee,[v("div",null,[e(ne,{name:"o_filter_list"})]),v("div",$e,[e(fe,{modelValue:c(r),"onUpdate:modelValue":E[0]||(E[0]=Q=>se(r)?r.value=Q:null),"bg-color":"white",dense:"",label:"Meses",options:c(d),outlined:""},null,8,["modelValue","options"])]),v("div",Re,[e(D,{color:"secondary",outline:"",onClick:I},{default:t(()=>[f("Limpiar")]),_:1})])])]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(J,{columns:s,loading:c(l)||c(n),rows:c(o),"wrap-cells":""},{"body-cell-actions":t(Q=>[e(j,{props:Q},{default:t(()=>[e(Ce,{requisition:a.requisition,"selected-article":Q.row},null,8,["requisition","selected-article"])]),_:2},1032,["props"])]),_:1},8,["loading","rows"])]),_:1})]),_:1},16))}}),Fe=k({__name:"RequisitionDetailTable",props:{requisition:null,details:null},setup(i){const a=i,{removeDetail:d}=Z(),r=[{name:"consecutiveId",label:"ID",field:"consecutiveId",sortable:!1},{name:"article",field:o=>o.budgetDetail.article.name,label:"Art\xEDculo",align:"left"},{name:"department",field:o=>o.budgetDetail.department.description,label:"Departamento",align:"left"},{name:"requested_quantity",field:"quantity",label:"Total solicitado",align:"right"},{name:"programed_quantity",field:o=>{var n;return(n=o.budgetDetail.months)==null?void 0:n.reduce((l,s)=>l+s.quantity,0)},label:"Total programado",align:"right"},{name:"requested_amount",field:"unit_price",label:"Monto solicitado",align:"right"},{name:"estimated_amount",field:o=>o.budgetDetail.total,label:"Monto programado",align:"right"},{name:"actions",field:"actions",label:"Acciones",align:"center"}];async function u(o){await d({requisitionId:a.requisition.id,requisitionDetailId:o.id})}return(o,n)=>(m(),b(J,{columns:r,flat:"","row-key":"id",rows:a.details},{"body-cell-consecutiveId":t(l=>[e(j,{props:l},{default:t(()=>[f(h(l.rowIndex+1),1)]),_:2},1032,["props"])]),"body-cell-actions":t(l=>[e(j,{props:l},{default:t(()=>[e(D,{color:"negative",dense:"",flat:"",icon:"delete",round:"",onClick:s=>u(l.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows"]))}}),Te=k({__name:"RequisitionDetailCard",props:{requisition:null},setup(i){const a=i,d=g(()=>{var r;return(r=a.requisition.details)==null?void 0:r.length});return(r,u)=>(m(),b(F,null,{default:t(()=>[e(T,null,{default:t(()=>[f(h(c(d))+" Art\xEDculo(s) solicitado(s)",1)]),_:1}),e(x,{class:"tw-p-0"},{default:t(()=>[e(Fe,{details:a.requisition.details,requisition:a.requisition},null,8,["details","requisition"])]),_:1})]),_:1}))}}),Ie={class:"q-pa-sm"},Se={class:"row q-mb-md"},Me={class:"col col-md-6"},Ne={key:0,class:"row q-mb-md"},Le={class:"col"},Ct=k({__name:"EditPage",setup(i){const a=re(),{id:d}=a.params,{isLoading:r,requisition:u}=ce(d),o=y(!1);return(n,l)=>c(r)?L("",!0):(m(),b(de,{key:0},{title:t(()=>{var s;return[f(" Requisici\xF3n "+h((s=c(u))==null?void 0:s.requisition_number),1)]}),body:t(()=>{var s;return[v("div",Ie,[v("div",Se,[v("div",Me,[e(F,null,{default:t(()=>[e(x,{class:"tw-p-0"},{default:t(()=>[e(T,{class:"tw-grow"},{default:t(()=>[f("Datos de la requisici\xF3n")]),_:1})]),_:1}),e(B),e(x,{class:"tw-pt-9"},{default:t(()=>[e(D,{class:"absolute tw-top-0 tw-right-3 tw-translate-y-[-50%]",color:"purple",icon:"o_add_shopping_cart",round:"",size:"1rem",onClick:l[0]||(l[0]=w=>o.value=!0)}),e(me,{requisition:c(u)},null,8,["requisition"])]),_:1})]),_:1})])]),((s=c(u))==null?void 0:s.details.length)>0?(m(),V("div",Ne,[v("div",Le,[e(Te,{requisition:c(u)},null,8,["requisition"])])])):L("",!0),e(X,{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=w=>o.value=w),"full-width":""},{default:t(()=>[e(Be,{requisition:c(u)},null,8,["requisition"])]),_:1},8,["modelValue"])])]}),_:1}))}});export{Ct as default};
