import{Q as g}from"./QCardSection.94464a72.js";import{a as h}from"./format.c4cd2b11.js";import{Q as f}from"./QCard.be8ff39f.js";import{C as v}from"./CardPage.0943df62.js";import{g as b}from"./useSubBudgets.b930e893.js";import{j as C,k as p,l,m as x,p as a,q as e,u as t,ag as k,s as o,d as r,t as i}from"./index.e2638eb4.js";import{_ as B,a as Q}from"./SkeletonForm.5cfc3729.js";import"./use-dark.eb190f4a.js";import"./planeacion.api.4718394d.js";import"./index.2cf0d985.js";import"./scroll.28522c71.js";import"./QPage.c2fef450.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./layout.b48f6ca2.js";import"./QChip.e0f21080.js";import"./utils.esm.7ac9ce6f.js";import"./useMutation.esm.7ab5810a.js";import"./mutation.esm.6f8cd676.js";import"./QFile.2bb28d4c.js";import"./QCardActions.771e2101.js";import"./QForm.e216d907.js";import"./DatePicker.9480aac9.js";import"./QPopupProxy.c515cd9f.js";import"./ClosePopup.e552dc18.js";import"./date.5b07776c.js";import"./useGoBack.3197296b.js";import"./FilePreview.15041e1a.js";import"./QTooltip.5f4d8a67.js";import"./QImg.39e45ba0.js";import"./QSpace.62bbc7da.js";import"./index.7adaf3a2.js";const y={key:1,class:"q-pa-sm"},q={class:"row"},N={class:"col"},P={class:"row q-gutter-md"},S={class:"col-12 col-md-6 col-lg-4"},w=o("strong",null,"Nombre del evento:",-1),F={class:"col-12 col-md-6 col-lg-4"},V=o("strong",null,"Departamento:",-1),A={class:"col-12 col-md-6 col-lg-4"},D=o("strong",null,"Acci\xF3n:",-1),R={class:"col-12 col-md-6 col-lg-4"},$=o("strong",null,"Partida:",-1),j={class:"col-12 col-md-6 col-lg-4"},E=o("strong",null,"Poblaci\xF3n beneficiada:",-1),L={class:"col-12 col-md-6 col-lg-4"},T=o("strong",null,"Costo por participante:",-1),ko=C({__name:"CreatePage",setup(z){const m=x(),{id:d}=m.params,{subBudgetQuery:_}=b(d),{isLoading:u,data:s}=_;return(G,H)=>(a(),p(v,{class:""},{title:l(()=>[e("Agregar Requisici\xF3n")]),body:l(()=>[t(u)?(a(),p(B,{key:0,"input-count":7})):(a(),k("div",y,[o("div",q,[o("div",N,[r(f,null,{default:l(()=>[r(g,null,{default:l(()=>{var c,n;return[o("div",P,[o("div",S,[o("p",null,[w,e(" "+i(t(s).event),1)])]),o("div",F,[o("p",null,[V,e(" "+i(t(s).department.description),1)])]),o("div",A,[o("p",null,[D,e(" "+i((c=t(s).action)==null?void 0:c.name),1)])]),o("div",R,[o("p",null,[$,e(" "+i((n=t(s).line)==null?void 0:n.name),1)])]),o("div",j,[o("p",null,[E,e(" "+i(t(s).benefited_population),1)])]),o("div",L,[o("p",null,[T,e(" "+i(t(s).cost_per_participant),1)])])])]}),_:1}),r(h),r(Q,{"sub-budget":t(s)},null,8,["sub-budget"])]),_:1})])])]))]),_:1}))}});export{ko as default};
