import{j as F,N as g,r as _,c as w,p as E,k as V,l as a,d as t,u,X as y,aH as h,_ as k,s as U}from"./index.c6535512.js";import{Q as M,a as C}from"./QForm.866d1cbd.js";import{Q as I}from"./QTd.daad9830.js";import{T as L,Q as T}from"./QTable.25e693b7.js";import{u as B,a as q,b as S,Q as z}from"./QChip.b9af2c8a.js";import{Q as K,a as $,b as D}from"./QItemLabel.05af1820.js";import{A as x}from"./ActionResource.54a75bc9.js";import{l as A}from"./layout.7b62d204.js";import{c as H}from"./index.7adaf3a2.js";import{C as P}from"./CardForm.355d16b8.js";import"./focus-manager.33224ae2.js";import"./QCard.5e2e9fe0.js";import"./use-dark.23b804b4.js";import"./QPage.508d9960.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./format.e5167fe8.js";import"./scroll.883daedc.js";import"./utils.esm.588a85b6.js";import"./index.2cf0d985.js";import"./QCardActions.76db5bf9.js";const j=async()=>{const{data:o}=await x.getActions();return o},G=async o=>{const{data:e}=await x.storeAction(o);return e},R=async o=>{const{id:e,name:i}=o,{data:r}=await x.updateAction(e,{name:i});return r},X=()=>{const{isLoading:o,isError:e,data:i,error:r}=B({queryKey:["actions"],queryFn:j,staleTime:6e5});return{isLoading:o,isError:e,data:i,error:r}},J=()=>{const o=q();return{actionStoreMutations:S({mutationFn:G,onSuccess:()=>{o.invalidateQueries({queryKey:["actions"]}),A.showSuccessNotification("Acci\xF3n creada con \xE9xito")},onError:()=>{A.showErrorNotification("Error al crear acci\xF3n")}})}},O=()=>{const o=q();return{actionUpdateMutations:S({mutationFn:R,onSuccess:()=>{o.invalidateQueries({queryKey:["actions"]}),A.showSuccessNotification("Acci\xF3n actualizada con \xE9xito")},onError:()=>{A.showErrorNotification("Error al actualizar acci\xF3n")}})}},W=F({__name:"ActionForm",props:{action:null},setup(o){const e=o,{actionStoreMutations:i}=J(),{isLoading:r}=i,{actionUpdateMutations:s}=O(),{isLoading:m}=s,b=g({name:""}),l=g(H(e.action||b)),d=_(),c={name:[v=>!!v||"El nombre es requerido"]},n=w(()=>e.action&&"id"in e.action),Q=w(()=>n.value?"Editar acci\xF3n":"Agregar acci\xF3n");async function N(){var p,f;!await((p=d.value)==null?void 0:p.validate())||(n.value?await s.mutateAsync(l):(await i.mutateAsync(l),l.name="",(f=d.value)==null||f.reset()))}return(v,p)=>(E(),V(P,{title:u(Q)},{form:a(()=>[t(u(M),{ref_key:"actionForm",ref:d,class:"q-gutter-md"},{default:a(()=>[t(K,null,{default:a(()=>[t($,null,{default:a(()=>[t(D,null,{default:a(()=>[t(C,{modelValue:l.name,"onUpdate:modelValue":p[0]||(p[0]=f=>l.name=f),dense:"",label:"Nombre",outlined:"",rules:c.name},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1},512)]),actions:a(()=>[t(y,{color:"primary",label:"Guardar",loading:u(r)||u(m),onClick:N},null,8,["loading"])]),_:1},8,["title"]))}}),Y={class:"q-gutter-sm"},vt=F({__name:"IndexPage",setup(o){const{data:e,isLoading:i}=X(),r=_(""),s=_(!1);let m=g({name:""});const b=[{name:"id",field:"id",required:!0,label:"ID",sortable:!0,align:"left"},{name:"name",field:"name",label:"Nombre",sortable:!0,align:"left"},{name:"action",align:"center",label:"Acciones",field:"action",sortable:!1}];h(()=>{s.value||(m=g({name:""}))});function l(d){s.value=!0,m=d}return(d,c)=>(E(),V(L,null,{"card-body":a(()=>[t(T,{columns:b,loading:u(i),rows:u(e),"rows-per-page-options":[20,30,40,50],title:"Acciones"},{"top-right":a(()=>[t(y,{class:"q-mr-xs",color:"primary",icon:"add",label:"Nueva Acci\xF3n",outline:"",onClick:c[0]||(c[0]=n=>s.value=!0)}),t(C,{modelValue:r.value,"onUpdate:modelValue":c[1]||(c[1]=n=>r.value=n),class:"q-mr-xs",debounce:"300",dense:"",outlined:"",placeholder:"Search"},{append:a(()=>[t(k,{name:"search"})]),_:1},8,["modelValue"]),t(y,{color:"primary","icon-right":"archive",label:"Exportar CSV","no-caps":""})]),"body-cell-action":a(n=>[t(I,{props:n},{default:a(()=>[U("div",Y,[t(y,{color:"primary",dense:"",flat:"",icon:"edit",rounded:"",size:"sm",onClick:Q=>l(n.row)},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["loading","rows"])]),footer:a(()=>[t(z,{modelValue:s.value,"onUpdate:modelValue":c[2]||(c[2]=n=>s.value=n)},{default:a(()=>[t(W,{action:u(m)},null,8,["action"])]),_:1},8,["modelValue"])]),_:1}))}});export{vt as default};
