import{Q as g}from"./QCardSection.0d056ee7.js";import{a as h}from"./format.d9f81dde.js";import{Q as f}from"./QCard.01814d56.js";import{C as v}from"./CardPage.0fe0ebea.js";import{g as b}from"./useSubBudgets.bf228bfc.js";import{j as C,k as p,l as r,m as x,p as a,q as e,u as t,ag as k,s as o,d as l,t as i}from"./index.14e8ebb5.js";import{_ as B,a as Q}from"./SkeletonForm.e5854504.js";import"./use-dark.e748ccdc.js";import"./planeacion.api.91fa18e5.js";import"./index.2cf0d985.js";import"./scroll.d839d060.js";import"./QPage.6a9365d9.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./layout.a470fe7f.js";import"./QChip.c477ed29.js";import"./utils.esm.1cc111ad.js";import"./useMutation.esm.fc6ad15c.js";import"./mutation.esm.6a2477d4.js";import"./QInput.0f74b52d.js";import"./QFile.0879df6b.js";import"./QCardActions.dee82ce4.js";import"./QForm.4ada3f4b.js";import"./DatePicker.ef7c594a.js";import"./QPopupProxy.3538f428.js";import"./ClosePopup.559675a8.js";import"./date.d6e11009.js";import"./useGoBack.3b2c212b.js";import"./FilePreview.7be9115f.js";import"./QTooltip.133969a2.js";import"./QImg.17c45358.js";import"./QSpace.a3e1f224.js";import"./index.7adaf3a2.js";const y={key:1,class:"q-pa-sm"},q={class:"row"},N={class:"col"},P={class:"row q-gutter-md"},S={class:"col-12 col-md-6 col-lg-4"},w=o("strong",null,"Nombre del evento:",-1),F={class:"col-12 col-md-6 col-lg-4"},V=o("strong",null,"Departamento:",-1),A={class:"col-12 col-md-6 col-lg-4"},D=o("strong",null,"Acci\xF3n:",-1),R={class:"col-12 col-md-6 col-lg-4"},$=o("strong",null,"Partida:",-1),j={class:"col-12 col-md-6 col-lg-4"},E=o("strong",null,"Poblaci\xF3n beneficiada:",-1),L={class:"col-12 col-md-6 col-lg-4"},T=o("strong",null,"Costo por participante:",-1),Bo=C({__name:"CreatePage",setup(z){const m=x(),{id:d}=m.params,{subBudgetQuery:_}=b(d),{isLoading:u,data:s}=_;return(G,H)=>(a(),p(v,{class:""},{title:r(()=>[e("Agregar Requisici\xF3n")]),body:r(()=>[t(u)?(a(),p(B,{key:0,"input-count":7})):(a(),k("div",y,[o("div",q,[o("div",N,[l(f,null,{default:r(()=>[l(g,null,{default:r(()=>{var c,n;return[o("div",P,[o("div",S,[o("p",null,[w,e(" "+i(t(s).event),1)])]),o("div",F,[o("p",null,[V,e(" "+i(t(s).department.description),1)])]),o("div",A,[o("p",null,[D,e(" "+i((c=t(s).action)==null?void 0:c.name),1)])]),o("div",R,[o("p",null,[$,e(" "+i((n=t(s).line)==null?void 0:n.name),1)])]),o("div",j,[o("p",null,[E,e(" "+i(t(s).benefited_population),1)])]),o("div",L,[o("p",null,[T,e(" "+i(t(s).cost_per_participant),1)])])])]}),_:1}),l(h),l(Q,{"sub-budget":t(s)},null,8,["sub-budget"])]),_:1})])])]))]),_:1}))}});export{Bo as default};
