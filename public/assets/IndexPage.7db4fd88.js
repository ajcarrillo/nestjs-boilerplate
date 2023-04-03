import{j as q,N as v,r as A,c as D,p as F,k as S,l as t,d as e,u as c,X as E,aH as U,_ as N,s as h}from"./index.0b175f01.js";import{Q as M,a as Q}from"./QForm.e02b1b3f.js";import{Q as I}from"./QTd.18df5e8a.js";import{u as L,a as k,b as T,Q as B}from"./QSelect.a01fc3f8.js";import{T as z}from"./TablePage.af3732ea.js";import{l as _}from"./layout.e5b39b81.js";import{A as w}from"./ArticleResource.776678dc.js";import{a as V,b as C}from"./format.bc6b5d0a.js";import{Q as K}from"./QList.de9c20f7.js";import{c as $}from"./index.7adaf3a2.js";import{C as H}from"./CardForm.46c9200b.js";import{u as P}from"./useExportDataToCsv.24875244.js";import{Q as R}from"./QTable.78812d52.js";import"./focus-manager.33224ae2.js";import"./utils.esm.4fba875c.js";import"./use-dark.46bf0f81.js";import"./QCard.8418aa13.js";import"./QPage.f7e992f7.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./index.2cf0d985.js";import"./scroll.be050d28.js";import"./QCardActions.cdd25544.js";import"./date.2de2ec43.js";const j=async()=>{const{data:a}=await w.getArticles();return a},G=async a=>{const{data:r}=await w.storeArticle(a);return r},X=async a=>{const{id:r,name:i,description:u}=a,{data:d}=await w.updateArticle(r,{name:i,description:u});return d},J=()=>{const{isLoading:a,isError:r,data:i,error:u}=L({queryKey:["articles"],queryFn:j,staleTime:6e5});return{isLoading:a,isError:r,data:i,error:u}},O=()=>{const a=k();return{articleStoreMutations:T({mutationFn:G,onSuccess:()=>{a.invalidateQueries({queryKey:["articles"]}),_.showSuccessNotification("Art\xEDculo creado con \xE9xito")},onError:()=>{_.showErrorNotification("Error al crear art\xEDculo")}})}},W=()=>{const a=k();return{articleUpdateMutations:T({mutationFn:X,onSuccess:()=>{a.invalidateQueries({queryKey:["articles"]}),_.showSuccessNotification("Art\xEDculo actualizado con \xE9xito")},onError:()=>{_.showErrorNotification("Error al actualizar art\xEDculo")}})}},Y=q({__name:"ArticleForm",props:{article:null},setup(a){const r=a,{articleStoreMutations:i}=O(),{isLoading:u}=i,{articleUpdateMutations:d}=W(),{isLoading:x}=d,m=v({name:"",description:""}),l=v($(r.article||m)),p=A(),b={name:[o=>!!o||"El nombre es requerido"],description:[o=>!!o||"La descripci\xF3n es requerida"]},y=D(()=>r.article&&"id"in r.article),g=D(()=>y.value?"Editar art\xEDculo":"Agregar art\xEDculo");async function s(){var n,f;await((n=p.value)==null?void 0:n.validate())&&(y.value?await d.mutateAsync(l):(await i.mutateAsync(l),l.name="",l.description="",(f=p.value)==null||f.reset()))}return(o,n)=>(F(),S(H,{title:c(g)},{form:t(()=>[e(c(M),{ref_key:"articleForm",ref:p,class:"q-gutter-md"},{default:t(()=>[e(K,null,{default:t(()=>[e(V,null,{default:t(()=>[e(C,null,{default:t(()=>[e(Q,{modelValue:l.name,"onUpdate:modelValue":n[0]||(n[0]=f=>l.name=f),dense:"",label:"Art\xEDculo",outlined:"",rules:b.name},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(C,null,{default:t(()=>[e(Q,{modelValue:l.description,"onUpdate:modelValue":n[1]||(n[1]=f=>l.description=f),dense:"",label:"Descripci\xF3n",outlined:"",rules:b.description,type:"textarea"},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1},512)]),actions:t(()=>[e(E,{color:"primary",label:"Guardar",loading:c(u)||c(x),"no-caps":"",type:"submit",onClick:s},null,8,["loading"])]),_:1},8,["title"]))}}),Z={class:"q-gutter-sm"},Qe=q({__name:"IndexPage",setup(a){const{exportDataToCsv:r}=P(),{data:i,isLoading:u}=J(),d=A(),x=A(""),m=A(!1);let l=v({name:"",description:""});const p=[{name:"id",field:"id",required:!0,label:"ID",sortable:!0,align:"left"},{name:"name",field:"name",label:"Nombre",sortable:!0,align:"left"},{name:"description",field:"description",label:"Descripci\xF3n",sortable:!1,align:"left",searchable:!1},{name:"action",align:"center",label:"Acciones",field:"action",sortable:!1,searchable:!1}];U(()=>{m.value||(l=v({name:"",description:""}))});function b(g){m.value=!0,l=g}function y(){r(d.value.filteredSortedRows,p,"art\xEDculos")}return(g,s)=>(F(),S(z,null,{"card-body":t(()=>[e(c(R),{ref_key:"qTableArticles",ref:d,columns:p,filter:x.value,loading:c(u),rows:c(i),"rows-per-page-options":[20,30,40,50],title:"Art\xEDculos"},{"top-right":t(()=>[e(E,{class:"q-mr-xs",color:"primary",icon:"add",label:"Art\xEDculo",outline:"",onClick:s[0]||(s[0]=o=>m.value=!0)}),e(Q,{modelValue:x.value,"onUpdate:modelValue":s[1]||(s[1]=o=>x.value=o),class:"q-mr-xs",debounce:"300",dense:"",outlined:"",placeholder:"Buscar"},{append:t(()=>[e(N,{name:"search"})]),_:1},8,["modelValue"]),e(E,{color:"primary","icon-right":"archive",label:"Exportar CSV","no-caps":"",onClick:y})]),"body-cell-action":t(o=>[e(I,{props:o},{default:t(()=>[h("div",Z,[e(E,{color:"primary",dense:"",flat:"",icon:"edit",rounded:"",size:"sm",onClick:n=>b(o.row)},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["filter","loading","rows"])]),footer:t(()=>[e(B,{modelValue:m.value,"onUpdate:modelValue":s[2]||(s[2]=o=>m.value=o)},{default:t(()=>[e(Y,{article:c(l)},null,8,["article"])]),_:1},8,["modelValue"])]),_:1}))}});export{Qe as default};
