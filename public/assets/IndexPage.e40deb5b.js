import{j as q,N as v,r as A,c as D,p as F,k as S,l as t,d as e,u as c,X as E,aH as U,_ as N,s as h}from"./index.6e0dc468.js";import{Q}from"./QInput.39e7bb07.js";import{Q as M,a as I}from"./QTable.c75b480b.js";import{u as L,a as k,Q as B}from"./QChip.c57cfaf9.js";import{T as z}from"./TablePage.e1853eac.js";import{l as _}from"./layout.f6c7d4be.js";import{A as w}from"./ArticleResource.5cc93ba2.js";import{u as T}from"./useMutation.esm.6c972cd2.js";import{Q as V,a as C}from"./QItemLabel.1df21711.js";import{Q as K}from"./QList.a5647721.js";import{c as $}from"./index.7adaf3a2.js";import{Q as H}from"./QForm.e5ce8d0b.js";import{C as P}from"./CardForm.04d99ef0.js";import{u as R}from"./useExportDataToCsv.75a770be.js";import"./planeacion.api.0342f2e3.js";import"./index.2cf0d985.js";import"./format.e39f8640.js";import"./use-dark.b49e1a6f.js";import"./scroll.0a304599.js";import"./QSelect.ca846bee.js";import"./QCheckbox.c981629d.js";import"./utils.esm.eb2a7ef9.js";import"./QCard.b42533e0.js";import"./QPage.2385e31a.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./mutation.esm.bf03a6b1.js";import"./QCardSection.dc33c047.js";import"./QCardActions.55bc0492.js";import"./date.47296c4b.js";const j=async()=>{const{data:a}=await w.getArticles();return a},G=async a=>{const{data:r}=await w.storeArticle(a);return r},X=async a=>{const{id:r,name:l,description:u}=a,{data:d}=await w.updateArticle(r,{name:l,description:u});return d},J=()=>{const{isLoading:a,isError:r,data:l,error:u}=L({queryKey:["articles"],queryFn:j,staleTime:6e5});return{isLoading:a,isError:r,data:l,error:u}},O=()=>{const a=k();return{articleStoreMutations:T({mutationFn:G,onSuccess:()=>{a.invalidateQueries({queryKey:["articles"]}),_.showSuccessNotification("Art\xEDculo creado con \xE9xito")},onError:()=>{_.showErrorNotification("Error al crear art\xEDculo")}})}},W=()=>{const a=k();return{articleUpdateMutations:T({mutationFn:X,onSuccess:()=>{a.invalidateQueries({queryKey:["articles"]}),_.showSuccessNotification("Art\xEDculo actualizado con \xE9xito")},onError:()=>{_.showErrorNotification("Error al actualizar art\xEDculo")}})}},Y=q({__name:"ArticleForm",props:{article:null},setup(a){const r=a,{articleStoreMutations:l}=O(),{isLoading:u}=l,{articleUpdateMutations:d}=W(),{isLoading:x}=d,m=v({name:"",description:""}),i=v($(r.article||m)),p=A(),y={name:[o=>!!o||"El nombre es requerido"],description:[o=>!!o||"La descripci\xF3n es requerida"]},b=D(()=>r.article&&"id"in r.article),g=D(()=>b.value?"Editar art\xEDculo":"Agregar art\xEDculo");async function s(){var n,f;await((n=p.value)==null?void 0:n.validate())&&(b.value?await d.mutateAsync(i):(await l.mutateAsync(i),i.name="",i.description="",(f=p.value)==null||f.reset()))}return(o,n)=>(F(),S(P,{title:c(g)},{form:t(()=>[e(c(H),{ref_key:"articleForm",ref:p,class:"q-gutter-md"},{default:t(()=>[e(K,null,{default:t(()=>[e(V,null,{default:t(()=>[e(C,null,{default:t(()=>[e(Q,{modelValue:i.name,"onUpdate:modelValue":n[0]||(n[0]=f=>i.name=f),dense:"",label:"Art\xEDculo",outlined:"",rules:y.name},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(C,null,{default:t(()=>[e(Q,{modelValue:i.description,"onUpdate:modelValue":n[1]||(n[1]=f=>i.description=f),dense:"",label:"Descripci\xF3n",outlined:"",rules:y.description,type:"textarea"},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1},512)]),actions:t(()=>[e(E,{color:"primary",label:"Guardar",loading:c(u)||c(x),"no-caps":"",type:"submit",onClick:s},null,8,["loading"])]),_:1},8,["title"]))}}),Z={class:"q-gutter-sm"},Fe=q({__name:"IndexPage",setup(a){const{exportDataToCsv:r}=R(),{data:l,isLoading:u}=J(),d=A(),x=A(""),m=A(!1);let i=v({name:"",description:""});const p=[{name:"id",field:"id",required:!0,label:"ID",sortable:!0,align:"left"},{name:"name",field:"name",label:"Nombre",sortable:!0,align:"left"},{name:"description",field:"description",label:"Descripci\xF3n",sortable:!1,align:"left",searchable:!1},{name:"action",align:"center",label:"Acciones",field:"action",sortable:!1,searchable:!1}];U(()=>{m.value||(i=v({name:"",description:""}))});function y(g){m.value=!0,i=g}function b(){r(d.value.filteredSortedRows,p,"art\xEDculos")}return(g,s)=>(F(),S(z,null,{"card-body":t(()=>[e(c(I),{ref_key:"qTableArticles",ref:d,columns:p,filter:x.value,loading:c(u),rows:c(l),"rows-per-page-options":[20,30,40,50],title:"Art\xEDculos"},{"top-right":t(()=>[e(E,{class:"q-mr-xs",color:"primary",icon:"add",label:"Art\xEDculo",outline:"",onClick:s[0]||(s[0]=o=>m.value=!0)}),e(Q,{modelValue:x.value,"onUpdate:modelValue":s[1]||(s[1]=o=>x.value=o),class:"q-mr-xs",debounce:"300",dense:"",outlined:"",placeholder:"Buscar"},{append:t(()=>[e(N,{name:"search"})]),_:1},8,["modelValue"]),e(E,{color:"primary","icon-right":"archive",label:"Exportar CSV","no-caps":"",onClick:b})]),"body-cell-action":t(o=>[e(M,{props:o},{default:t(()=>[h("div",Z,[e(E,{color:"primary",dense:"",flat:"",icon:"edit",rounded:"",size:"sm",onClick:n=>y(o.row)},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["filter","loading","rows"])]),footer:t(()=>[e(B,{modelValue:m.value,"onUpdate:modelValue":s[2]||(s[2]=o=>m.value=o)},{default:t(()=>[e(Y,{article:c(i)},null,8,["article"])]),_:1},8,["modelValue"])]),_:1}))}});export{Fe as default};
