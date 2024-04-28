import{j as q,M as v,r as A,c as D,p as F,k as S,l as t,d as e,u as c,X as E,aN as U,_ as M,s as N}from"./index.2447aa50.js";import{l as _,Q}from"./layout.6863befb.js";import{Q as h,a as I}from"./QTable.697eb207.js";import{i as L}from"./format.267f291d.js";import{T as B}from"./TablePage.ec715fb1.js";import{A as w}from"./planeacion.api.88477cd4.js";import{u as z,a as k}from"./useQuery.esm.750a8d8b.js";import{u as T}from"./useMutation.esm.74dfadc9.js";import{Q as V,a as C}from"./QSelect.2537b62b.js";import{Q as K}from"./QList.faf37d42.js";import{c as $}from"./index.7adaf3a2.js";import{Q as P}from"./QForm.63b1cacd.js";import{C as R}from"./CardForm.bfb24096.js";import{u as j}from"./useExportDataToCsv.8101ca82.js";import"./use-dark.d5768ce8.js";import"./scroll.b3c06f66.js";import"./QCheckbox.06660279.js";import"./QCard.bb46903a.js";import"./QPage.0cca4af3.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./index.2cf0d985.js";import"./utils.esm.d89223b6.js";import"./mutation.esm.b316ef31.js";import"./QCardSection.4dd5e4e8.js";import"./QCardActions.905e0fb8.js";import"./date.5cf3ae7e.js";const G=async()=>{const{data:a}=await w.getArticles();return a},H=async a=>{const{data:r}=await w.storeArticle(a);return r},X=async a=>{const{id:r,name:i,description:u}=a,{data:d}=await w.updateArticle(r,{name:i,description:u});return d},J=()=>{const{isLoading:a,isError:r,data:i,error:u}=z({queryKey:["articles"],queryFn:G,staleTime:6e5});return{isLoading:a,isError:r,data:i,error:u}},O=()=>{const a=k();return{articleStoreMutations:T({mutationFn:H,onSuccess:()=>{a.invalidateQueries({queryKey:["articles"]}),_.showSuccessNotification("Art\xEDculo creado con \xE9xito")},onError:()=>{_.showErrorNotification("Error al crear art\xEDculo")}})}},W=()=>{const a=k();return{articleUpdateMutations:T({mutationFn:X,onSuccess:()=>{a.invalidateQueries({queryKey:["articles"]}),_.showSuccessNotification("Art\xEDculo actualizado con \xE9xito")},onError:()=>{_.showErrorNotification("Error al actualizar art\xEDculo")}})}},Y=q({__name:"ArticleForm",props:{article:null},setup(a){const r=a,{articleStoreMutations:i}=O(),{isLoading:u}=i,{articleUpdateMutations:d}=W(),{isLoading:x}=d,m=v({name:"",description:""}),l=v($(r.article||m)),p=A(),y={name:[o=>!!o||"El nombre es requerido"],description:[o=>!!o||"La descripci\xF3n es requerida"]},b=D(()=>r.article&&"id"in r.article),g=D(()=>b.value?"Editar art\xEDculo":"Agregar art\xEDculo");async function s(){var n,f;await((n=p.value)==null?void 0:n.validate())&&(b.value?await d.mutateAsync(l):(await i.mutateAsync(l),l.name="",l.description="",(f=p.value)==null||f.reset()))}return(o,n)=>(F(),S(R,{title:c(g)},{form:t(()=>[e(c(P),{ref_key:"articleForm",ref:p,class:"q-gutter-md"},{default:t(()=>[e(K,null,{default:t(()=>[e(V,null,{default:t(()=>[e(C,null,{default:t(()=>[e(Q,{modelValue:l.name,"onUpdate:modelValue":n[0]||(n[0]=f=>l.name=f),dense:"",label:"Art\xEDculo",outlined:"",rules:y.name},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(C,null,{default:t(()=>[e(Q,{modelValue:l.description,"onUpdate:modelValue":n[1]||(n[1]=f=>l.description=f),dense:"",label:"Descripci\xF3n",outlined:"",rules:y.description,type:"textarea"},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1},512)]),actions:t(()=>[e(E,{color:"primary",label:"Guardar",loading:c(u)||c(x),"no-caps":"",type:"submit",onClick:s},null,8,["loading"])]),_:1},8,["title"]))}}),Z={class:"q-gutter-sm"},Ve=q({__name:"IndexPage",setup(a){const{exportDataToCsv:r}=j(),{data:i,isLoading:u}=J(),d=A(),x=A(""),m=A(!1);let l=v({name:"",description:""});const p=[{name:"id",field:"id",required:!0,label:"ID",sortable:!0,align:"left"},{name:"name",field:"name",label:"Nombre",sortable:!0,align:"left"},{name:"description",field:"description",label:"Descripci\xF3n",sortable:!1,align:"left",searchable:!1},{name:"action",align:"center",label:"Acciones",field:"action",sortable:!1,searchable:!1}];U(()=>{m.value||(l=v({name:"",description:""}))});function y(g){m.value=!0,l=g}function b(){r(d.value.filteredSortedRows,p,"art\xEDculos")}return(g,s)=>(F(),S(B,null,{"card-body":t(()=>[e(c(I),{ref_key:"qTableArticles",ref:d,columns:p,filter:x.value,loading:c(u),rows:c(i),"rows-per-page-options":[20,30,40,50],title:"Art\xEDculos"},{"top-right":t(()=>[e(E,{class:"q-mr-xs",color:"primary",icon:"add",label:"Art\xEDculo",outline:"",onClick:s[0]||(s[0]=o=>m.value=!0)}),e(Q,{modelValue:x.value,"onUpdate:modelValue":s[1]||(s[1]=o=>x.value=o),class:"q-mr-xs",debounce:"300",dense:"",outlined:"",placeholder:"Buscar"},{append:t(()=>[e(M,{name:"search"})]),_:1},8,["modelValue"]),e(E,{color:"primary","icon-right":"archive",label:"Exportar CSV","no-caps":"",onClick:b})]),"body-cell-action":t(o=>[e(h,{props:o},{default:t(()=>[N("div",Z,[e(E,{color:"primary",dense:"",flat:"",icon:"edit",rounded:"",size:"sm",onClick:n=>y(o.row)},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["filter","loading","rows"])]),footer:t(()=>[e(L,{modelValue:m.value,"onUpdate:modelValue":s[2]||(s[2]=o=>m.value=o)},{default:t(()=>[e(Y,{article:c(l)},null,8,["article"])]),_:1},8,["modelValue"])]),_:1}))}});export{Ve as default};
