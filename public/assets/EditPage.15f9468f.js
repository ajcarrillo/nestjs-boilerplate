import{Q as b}from"./QCardSection.dc33c047.js";import{a as v}from"./format.e39f8640.js";import{Q as q}from"./QCard.b42533e0.js";import{C as B}from"./CardPage.e9881ed3.js";import{g as x,j as C}from"./useSubBudgets.f92594e2.js";import{j as k,k as d,l as n,m as I,p as a,q as i,u as o,ag as Q,s as t,d as l,t as e}from"./index.6e0dc468.js";import{_ as R,a as w}from"./SkeletonForm.fcf20c04.js";import"./use-dark.b49e1a6f.js";import"./planeacion.api.0342f2e3.js";import"./index.2cf0d985.js";import"./scroll.0a304599.js";import"./QPage.2385e31a.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./layout.f6c7d4be.js";import"./QChip.c57cfaf9.js";import"./utils.esm.eb2a7ef9.js";import"./useMutation.esm.6c972cd2.js";import"./mutation.esm.bf03a6b1.js";import"./QInput.39e7bb07.js";import"./QFile.ab8a6a30.js";import"./QCardActions.55bc0492.js";import"./QForm.e5ce8d0b.js";import"./DatePicker.233d97ac.js";import"./ClosePopup.691ed294.js";import"./date.47296c4b.js";import"./useGoBack.2b369fe5.js";import"./FilePreview.23be025c.js";import"./QTooltip.c27337be.js";import"./QImg.62269655.js";import"./QSpace.d3b745d6.js";import"./index.7adaf3a2.js";const y={key:1,class:"q-pa-sm"},S={class:"row"},F={class:"col"},N={class:"row q-gutter-md"},P={class:"col-12 col-md-6 col-lg-4"},E=t("strong",null,"Nombre del evento:",-1),V={class:"col-12 col-md-6 col-lg-4"},j=t("strong",null,"Departamento:",-1),D={class:"col-12 col-md-6 col-lg-4"},L=t("strong",null,"Acci\xF3n:",-1),$={class:"col-12 col-md-6 col-lg-4"},A=t("strong",null,"Partida:",-1),T={class:"col-12 col-md-6 col-lg-4"},z=t("strong",null,"Poblaci\xF3n beneficiada:",-1),G={class:"col-12 col-md-6 col-lg-4"},H=t("strong",null,"Costo por participante:",-1),It=k({__name:"EditPage",props:{id:null,reqId:null},setup(p){const u=p,m=I(),{id:r}=m.params,{subBudgetQuery:_}=x(r),{isLoading:g,data:s}=_,{subBudgetRequisitionIsFetching:J,subBudgetRequisitionIsLoading:h,subBudgetRequisition:f}=C({subBudgetId:r,requisitionId:u.reqId});return(K,M)=>(a(),d(B,{class:""},{title:n(()=>[i("Editar Requisici\xF3n")]),body:n(()=>[o(g)||o(h)?(a(),d(R,{key:0,"input-count":7})):(a(),Q("div",y,[t("div",S,[t("div",F,[l(q,null,{default:n(()=>[l(b,null,{default:n(()=>{var c;return[t("div",N,[t("div",P,[t("p",null,[E,i(" "+e(o(s).event),1)])]),t("div",V,[t("p",null,[j,i(" "+e(o(s).department.description),1)])]),t("div",D,[t("p",null,[L,i(" "+e(o(s).action.name),1)])]),t("div",$,[t("p",null,[A,i(" "+e((c=o(s).line)==null?void 0:c.name),1)])]),t("div",T,[t("p",null,[z,i(" "+e(o(s).benefited_population),1)])]),t("div",G,[t("p",null,[H,i(" "+e(o(s).cost_per_participant),1)])])])]}),_:1}),l(v),l(w,{"is-editing":"","populate-with":o(f),"sub-budget":o(s)},null,8,["populate-with","sub-budget"])]),_:1})])])]))]),_:1}))}});export{It as default};
