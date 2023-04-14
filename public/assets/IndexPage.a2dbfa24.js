import{j as C,N as b,r as _,c as x,p as F,k as S,l as t,d as e,u as c,X as g,aH as M,_ as h,s as I}from"./index.764f91da.js";import{Q as P,a as Q}from"./QForm.249823eb.js";import{Q as T,a as A}from"./QTable.c2f3088c.js";import{u as B,a as N,b as U,Q as D}from"./QChip.24db411d.js";import{T as z}from"./TablePage.fad92f6b.js";import{L as w}from"./LineResource.695fa546.js";import{l as v}from"./layout.885dabeb.js";import{Q as E,a as q}from"./QItemLabel.aeee3940.js";import{Q as K}from"./QList.c3267100.js";import{C as $}from"./CardForm.362d4219.js";import{c as H}from"./index.7adaf3a2.js";import"./focus-manager.33224ae2.js";import"./format.5c717855.js";import"./use-dark.8941baf2.js";import"./scroll.7eebca94.js";import"./QSelect.2dbe0ba1.js";import"./QCheckbox.47de988e.js";import"./utils.esm.73bc7e0b.js";import"./QCard.85e6f4b4.js";import"./QPage.1fc2c1b7.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./index.2cf0d985.js";import"./QCardActions.c423be21.js";const j=async()=>{const{data:a}=await w.getLines();return a},G=async a=>{const{data:o}=await w.storeLine(a);return o},R=async a=>{const{id:o,name:s,description:u}=a,{data:i}=await w.updateLine(o,{name:s,description:u});return i},X=()=>{const{isLoading:a,isError:o,data:s,error:u}=B({queryKey:["lines"],queryFn:j,staleTime:6e5});return{isLoading:a,isError:o,data:s,error:u}},J=()=>{const a=N();return{lineStoreMutations:U({mutationFn:G,onSuccess:()=>{a.invalidateQueries({queryKey:["lines"]}),v.showSuccessNotification("Partida creada con \xE9xito")},onError:()=>{v.showErrorNotification("Error al crear partida")}})}},O=()=>{const a=N();return{lineUpdateMutations:U({mutationFn:R,onSuccess:()=>{a.invalidateQueries({queryKey:["lines"]}),v.showSuccessNotification("Partida actualizada con \xE9xito")},onError:()=>{v.showErrorNotification("Error al actualizar partida")}})}},W=C({__name:"LineForm",props:{line:null},setup(a){const o=a,{lineStoreMutations:s}=J(),{isLoading:u}=s,{lineUpdateMutations:i}=O(),{isLoading:f}=i,L=b({name:"",description:""}),n=b(H(o.line||L)),m=_(),l={name:[y=>!!y||"El nombre es requerido"],description:[y=>!!y||"La descripci\xF3n es requerida"]},r=x(()=>o.line&&"id"in o.line),V=x(()=>r.value?"Editar partida":"Agregar partida");async function k(){var d,p;await((d=m.value)==null?void 0:d.validate())&&(r.value?await i.mutateAsync(n):(await s.mutateAsync(n),n.name="",n.description="",(p=m.value)==null||p.reset()))}return(y,d)=>(F(),S($,{title:c(V)},{form:t(()=>[e(c(P),{ref_key:"lineForm",ref:m,class:"q-gutter-md"},{default:t(()=>[e(K,null,{default:t(()=>[e(E,null,{default:t(()=>[e(q,null,{default:t(()=>[e(Q,{modelValue:n.name,"onUpdate:modelValue":d[0]||(d[0]=p=>n.name=p),dense:"",label:"Nombre",outlined:"",rules:l.name},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(E,null,{default:t(()=>[e(q,null,{default:t(()=>[e(Q,{modelValue:n.description,"onUpdate:modelValue":d[1]||(d[1]=p=>n.description=p),dense:"",label:"Descripci\xF3n",outlined:"",rules:l.description,type:"textarea"},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1},512)]),actions:t(()=>[e(g,{color:"primary",label:"Guardar",loading:c(u)||c(f),onClick:k},null,8,["loading"])]),_:1},8,["title"]))}}),Y={class:"q-gutter-sm"},we=C({__name:"IndexPage",setup(a){const{data:o,isLoading:s}=X(),u=_(""),i=_(!1);let f=b({name:"",description:""});const L=[{name:"id",field:"id",required:!0,label:"ID",sortable:!0,align:"left"},{name:"name",field:"name",label:"Nombre",sortable:!0,align:"left"},{name:"description",field:"description",label:"Descripci\xF3n",sortable:!1,align:"left"},{name:"action",align:"center",label:"Acciones",field:"action",sortable:!1}];M(()=>{i.value||(f=b({name:"",description:""}))});function n(m){i.value=!0,f=m}return(m,l)=>(F(),S(z,null,{"card-body":t(()=>[e(A,{columns:L,loading:c(s),rows:c(o),"rows-per-page-options":[20,30,40,50],title:"Partidas"},{"top-right":t(()=>[e(g,{class:"q-mr-xs",color:"primary",icon:"add",label:"Nueva Partida",outline:"",onClick:l[0]||(l[0]=r=>i.value=!0)}),e(Q,{modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=r=>u.value=r),class:"q-mr-xs",debounce:"300",dense:"",outlined:"",placeholder:"Search"},{append:t(()=>[e(h,{name:"search"})]),_:1},8,["modelValue"]),e(g,{color:"primary","icon-right":"archive",label:"Exportar CSV","no-caps":""})]),"body-cell-action":t(r=>[e(T,{props:r},{default:t(()=>[I("div",Y,[e(g,{color:"primary",dense:"",flat:"",icon:"edit",rounded:"",size:"sm",onClick:V=>n(r.row)},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["loading","rows"])]),footer:t(()=>[e(D,{modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=r=>i.value=r)},{default:t(()=>[e(W,{line:c(f)},null,8,["line"])]),_:1},8,["modelValue"])]),_:1}))}});export{we as default};
