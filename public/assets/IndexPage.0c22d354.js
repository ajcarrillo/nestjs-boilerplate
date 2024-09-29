import{j as q,M as v,r as A,c as D,p as F,k as S,l as t,d as e,u as c,X as E,aN as U,_ as M,s as N}from"./index.33aee9c3.js";import{Q}from"./QInput.bc534865.js";import{Q as h,a as I}from"./QTable.71d6b359.js";import{c as L}from"./format.9dfa61a7.js";import{T as B}from"./TablePage.1ebf5b06.js";import{l as _}from"./layout.880d2741.js";import{A as w}from"./BudgetResource.3a0abb0c.js";import{u as z,a as k}from"./useQuery.esm.08e598e9.js";import{u as T}from"./useMutation.esm.5aff8292.js";import{Q as V,a as C}from"./QItem.3270a199.js";import{Q as K}from"./QList.1e036a38.js";import{c as $}from"./index.7adaf3a2.js";import{Q as P}from"./QForm.05da6a20.js";import{C as R}from"./CardForm.e852cb18.js";import{u as j}from"./useExportDataToCsv.20dd4c5a.js";import"./use-key-composition.b1866cfc.js";import"./use-dark.a42b1db8.js";import"./focus-manager.387b0375.js";import"./QMenu.746f001c.js";import"./scroll.5632c0ea.js";import"./QSelect.bc9b930f.js";import"./QItemLabel.b3a0c01c.js";import"./QCheckbox.685522c0.js";import"./QCard.e44cba30.js";import"./QPage.6112cc6b.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./index.2cf0d985.js";import"./utils.esm.aa7cdc1a.js";import"./mutation.esm.9a94c1b8.js";import"./QCardSection.2089956e.js";import"./QCardActions.ddbe4808.js";import"./date.d5e8b0ec.js";const G=async()=>{const{data:r}=await w.getArticles();return r},H=async r=>{const{data:a}=await w.storeArticle(r);return a},X=async r=>{const{id:a,name:l,description:u}=r,{data:d}=await w.updateArticle(a,{name:l,description:u});return d},J=()=>{const{isLoading:r,isError:a,data:l,error:u}=z({queryKey:["articles"],queryFn:G,staleTime:6e5});return{isLoading:r,isError:a,data:l,error:u}},O=()=>{const r=k();return{articleStoreMutations:T({mutationFn:H,onSuccess:()=>{r.invalidateQueries({queryKey:["articles"]}),_.showSuccessNotification("Art\xEDculo creado con \xE9xito")},onError:()=>{_.showErrorNotification("Error al crear art\xEDculo")}})}},W=()=>{const r=k();return{articleUpdateMutations:T({mutationFn:X,onSuccess:()=>{r.invalidateQueries({queryKey:["articles"]}),_.showSuccessNotification("Art\xEDculo actualizado con \xE9xito")},onError:()=>{_.showErrorNotification("Error al actualizar art\xEDculo")}})}},Y=q({__name:"ArticleForm",props:{article:null},setup(r){const a=r,{articleStoreMutations:l}=O(),{isLoading:u}=l,{articleUpdateMutations:d}=W(),{isLoading:x}=d,m=v({name:"",description:""}),i=v($(a.article||m)),p=A(),y={name:[o=>!!o||"El nombre es requerido"],description:[o=>!!o||"La descripci\xF3n es requerida"]},b=D(()=>a.article&&"id"in a.article),g=D(()=>b.value?"Editar art\xEDculo":"Agregar art\xEDculo");async function s(){var n,f;await((n=p.value)==null?void 0:n.validate())&&(b.value?await d.mutateAsync(i):(await l.mutateAsync(i),i.name="",i.description="",(f=p.value)==null||f.reset()))}return(o,n)=>(F(),S(R,{title:c(g)},{form:t(()=>[e(c(P),{ref_key:"articleForm",ref:p,class:"q-gutter-md"},{default:t(()=>[e(K,null,{default:t(()=>[e(V,null,{default:t(()=>[e(C,null,{default:t(()=>[e(Q,{modelValue:i.name,"onUpdate:modelValue":n[0]||(n[0]=f=>i.name=f),dense:"",label:"Art\xEDculo",outlined:"",rules:y.name},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(C,null,{default:t(()=>[e(Q,{modelValue:i.description,"onUpdate:modelValue":n[1]||(n[1]=f=>i.description=f),dense:"",label:"Descripci\xF3n",outlined:"",rules:y.description,type:"textarea"},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1},512)]),actions:t(()=>[e(E,{color:"primary",label:"Guardar",loading:c(u)||c(x),"no-caps":"",type:"submit",onClick:s},null,8,["loading"])]),_:1},8,["title"]))}}),Z={class:"q-gutter-sm"},Te=q({__name:"IndexPage",setup(r){const{exportDataToCsv:a}=j(),{data:l,isLoading:u}=J(),d=A(),x=A(""),m=A(!1);let i=v({name:"",description:""});const p=[{name:"id",field:"id",required:!0,label:"ID",sortable:!0,align:"left"},{name:"name",field:"name",label:"Nombre",sortable:!0,align:"left"},{name:"description",field:"description",label:"Descripci\xF3n",sortable:!1,align:"left",searchable:!1},{name:"action",align:"center",label:"Acciones",field:"action",sortable:!1,searchable:!1}];U(()=>{m.value||(i=v({name:"",description:""}))});function y(g){m.value=!0,i=g}function b(){a(d.value.filteredSortedRows,p,"art\xEDculos")}return(g,s)=>(F(),S(B,null,{"card-body":t(()=>[e(c(I),{ref_key:"qTableArticles",ref:d,columns:p,filter:x.value,loading:c(u),rows:c(l),"rows-per-page-options":[20,30,40,50],title:"Art\xEDculos"},{"top-right":t(()=>[e(E,{class:"q-mr-xs",color:"primary",icon:"add",label:"Art\xEDculo",outline:"",onClick:s[0]||(s[0]=o=>m.value=!0)}),e(Q,{modelValue:x.value,"onUpdate:modelValue":s[1]||(s[1]=o=>x.value=o),class:"q-mr-xs",debounce:"300",dense:"",outlined:"",placeholder:"Buscar"},{append:t(()=>[e(M,{name:"search"})]),_:1},8,["modelValue"]),e(E,{color:"primary","icon-right":"archive",label:"Exportar CSV","no-caps":"",onClick:b})]),"body-cell-action":t(o=>[e(h,{props:o},{default:t(()=>[N("div",Z,[e(E,{color:"primary",dense:"",flat:"",icon:"edit",rounded:"",size:"sm",onClick:n=>y(o.row)},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["filter","loading","rows"])]),footer:t(()=>[e(L,{modelValue:m.value,"onUpdate:modelValue":s[2]||(s[2]=o=>m.value=o)},{default:t(()=>[e(Y,{article:c(i)},null,8,["article"])]),_:1},8,["modelValue"])]),_:1}))}});export{Te as default};
