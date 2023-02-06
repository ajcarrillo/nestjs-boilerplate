import{j as C,N as b,r as _,c as x,p as F,k as S,l as a,d as e,u as c,Z as g,aH as M,a6 as h,s as I}from"./index.ab1ab5b3.js";import{l as v,Q as P,a as w}from"./layout.6a960996.js";import{C as T,Q as A}from"./CardForm.61d55692.js";import{u as B,a as N,b as U,c as D,T as z,Q as K,d as $}from"./QCardActions.06977e5e.js";import{L as Q}from"./LineResource.18831b0e.js";import{a as H,b as E,c as q}from"./format.00788522.js";import"./use-dark.494f195b.js";import"./focus-manager.33224ae2.js";import"./index.2cf0d985.js";import"./QCard.412cbb6d.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./scroll.b38dbfea.js";import"./QPage.bce5ab9b.js";import"./utils.esm.d3e11ed7.js";const j=async()=>{const{data:t}=await Q.getLines();return t},G=async t=>{const{data:n}=await Q.storeLine(t);return n},R=async t=>{const{id:n,name:s,description:u}=t,{data:o}=await Q.updateLine(n,{name:s,description:u});return o},Z=()=>{const{isLoading:t,isError:n,data:s,error:u}=B({queryKey:["lines"],queryFn:j,staleTime:6e5});return{isLoading:t,isError:n,data:s,error:u}},J=()=>{const t=N();return{lineStoreMutations:U({mutationFn:G,onSuccess:()=>{t.invalidateQueries({queryKey:["lines"]}),v.showSuccessNotification("Partida creada con \xE9xito")},onError:()=>{v.showErrorNotification("Error al crear partida")}})}},O=()=>{const t=N();return{lineUpdateMutations:U({mutationFn:R,onSuccess:()=>{t.invalidateQueries({queryKey:["lines"]}),v.showSuccessNotification("Partida actualizada con \xE9xito")},onError:()=>{v.showErrorNotification("Error al actualizar partida")}})}},W=C({__name:"LineForm",props:{line:null},setup(t){const n=t,{lineStoreMutations:s}=J(),{isLoading:u}=s,{lineUpdateMutations:o}=O(),{isLoading:f}=o,L=b({name:"",description:""}),i=b(D(n.line||L)),m=_(),l={name:[y=>!!y||"El nombre es requerido"],description:[y=>!!y||"La descripci\xF3n es requerida"]},r=x(()=>n.line&&"id"in n.line),V=x(()=>r.value?"Editar partida":"Agregar partida");async function k(){var d,p;await((d=m.value)==null?void 0:d.validate())&&(r.value?await o.mutateAsync(i):(await s.mutateAsync(i),i.name="",i.description="",(p=m.value)==null||p.reset()))}return(y,d)=>(F(),S(T,{title:c(V)},{form:a(()=>[e(c(P),{ref_key:"lineForm",ref:m,class:"q-gutter-md"},{default:a(()=>[e(H,null,{default:a(()=>[e(E,null,{default:a(()=>[e(q,null,{default:a(()=>[e(w,{modelValue:i.name,"onUpdate:modelValue":d[0]||(d[0]=p=>i.name=p),dense:"",label:"Nombre",outlined:"",rules:l.name},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(E,null,{default:a(()=>[e(q,null,{default:a(()=>[e(w,{modelValue:i.description,"onUpdate:modelValue":d[1]||(d[1]=p=>i.description=p),dense:"",label:"Descripci\xF3n",outlined:"",rules:l.description,type:"textarea"},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1},512)]),actions:a(()=>[e(g,{color:"primary",label:"Guardar",loading:c(u)||c(f),onClick:k},null,8,["loading"])]),_:1},8,["title"]))}}),X={class:"q-gutter-sm"},pe=C({__name:"IndexPage",setup(t){const{data:n,isLoading:s}=Z(),u=_(""),o=_(!1);let f=b({name:"",description:""});const L=[{name:"id",field:"id",required:!0,label:"ID",sortable:!0,align:"left"},{name:"name",field:"name",label:"Nombre",sortable:!0,align:"left"},{name:"description",field:"description",label:"Descripci\xF3n",sortable:!1,align:"left"},{name:"action",align:"center",label:"Acciones",field:"action",sortable:!1}];M(()=>{o.value||(f=b({name:"",description:""}))});function i(m){o.value=!0,f=m}return(m,l)=>(F(),S(z,null,{"card-body":a(()=>[e(K,{columns:L,loading:c(s),rows:c(n),"rows-per-page-options":[20,30,40,50],title:"Partidas"},{"top-right":a(()=>[e(g,{class:"q-mr-xs",color:"primary",icon:"add",label:"Nueva Partida",outline:"",onClick:l[0]||(l[0]=r=>o.value=!0)}),e(w,{modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=r=>u.value=r),class:"q-mr-xs",debounce:"300",dense:"",outlined:"",placeholder:"Search"},{append:a(()=>[e(h,{name:"search"})]),_:1},8,["modelValue"]),e(g,{color:"primary","icon-right":"archive",label:"Exportar CSV","no-caps":""})]),"body-cell-action":a(r=>[e(A,{props:r},{default:a(()=>[I("div",X,[e(g,{color:"primary",dense:"",flat:"",icon:"edit",rounded:"",size:"sm",onClick:V=>i(r.row)},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["loading","rows"])]),footer:a(()=>[e($,{modelValue:o.value,"onUpdate:modelValue":l[2]||(l[2]=r=>o.value=r)},{default:a(()=>[e(W,{line:c(f)},null,8,["line"])]),_:1},8,["modelValue"])]),_:1}))}});export{pe as default};
