import{j as y,N as b,r as v,c as A,p as k,k as E,l as a,d as e,u as s,X as f,aH as q,_ as F,s as I}from"./index.764f91da.js";import{Q as N,a as V}from"./QForm.249823eb.js";import{Q as S,a as B}from"./QTable.c2f3088c.js";import{Q as L}from"./QChip.24db411d.js";import{T}from"./TablePage.fad92f6b.js";import{u as $,a as h,b as D}from"./useAreas.84992a4e.js";import{Q as C,a as w}from"./QItemLabel.aeee3940.js";import{Q as M}from"./QList.c3267100.js";import{c as P}from"./index.7adaf3a2.js";import{C as j}from"./CardForm.362d4219.js";import"./layout.885dabeb.js";import"./use-dark.8941baf2.js";import"./focus-manager.33224ae2.js";import"./index.2cf0d985.js";import"./format.5c717855.js";import"./scroll.7eebca94.js";import"./QSelect.2dbe0ba1.js";import"./QCheckbox.47de988e.js";import"./utils.esm.73bc7e0b.js";import"./QCard.85e6f4b4.js";import"./QPage.1fc2c1b7.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./app.a1afdaed.js";import"./ActionResource.4c3135ec.js";import"./LineResource.695fa546.js";import"./ArticleResource.138a0ca4.js";import"./useDictionaries.3532d40a.js";import"./QCardActions.c423be21.js";const z=y({__name:"AreaForm",props:{area:null},setup(Q){const u=Q,{areaStoreMutations:p}=$(),{isLoading:c}=p,{areaUpdateMutations:l}=h(),{isLoading:m}=l,g=b({description:"",alias:""}),o=b(P(u.area||g)),n=v(),r={description:[_=>!!_||"El nombre es requerido"]},t=A(()=>u.area&&"id"in u.area),x=A(()=>t.value?"Editar \xE1rea":"Agregar \xE1rea");async function U(){var i,d;!await((i=n.value)==null?void 0:i.validate())||(t.value?await l.mutateAsync(o):(await p.mutateAsync(o),o.description="",o.alias="",(d=n.value)==null||d.reset()))}return(_,i)=>(k(),E(j,{title:s(x)},{form:a(()=>[e(s(N),{ref_key:"areaForm",ref:n,class:"q-gutter-md"},{default:a(()=>[e(M,null,{default:a(()=>[e(C,null,{default:a(()=>[e(w,null,{default:a(()=>[e(V,{modelValue:o.description,"onUpdate:modelValue":i[0]||(i[0]=d=>o.description=d),dense:"",label:"Nombre",outlined:"",rules:r.description},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(C,null,{default:a(()=>[e(w,null,{default:a(()=>[e(V,{modelValue:o.alias,"onUpdate:modelValue":i[1]||(i[1]=d=>o.alias=d),dense:"",label:"Alias",outlined:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},512)]),actions:a(()=>[e(f,{color:"primary",label:"Guardar",loading:s(c)||s(m),onClick:U},null,8,["loading"])]),_:1},8,["title"]))}}),G={class:"q-gutter-sm"},Ve=y({__name:"IndexPage",setup(Q){const{data:u,isLoading:p}=D(),c=v(""),l=v(!1);let m=b({description:"",alias:""});const g=[{name:"id",field:"id",required:!0,label:"ID",sortable:!0,align:"left"},{name:"description",field:"description",label:"Nombre",sortable:!0,align:"left"},{name:"alias",field:"alias",label:"Alias",sortable:!1,align:"left"},{name:"action",align:"center",label:"Acciones",field:"action",sortable:!1}];q(()=>{l.value||(m=b({description:"",alias:""}))});function o(n){l.value=!0,m=n}return(n,r)=>(k(),E(T,null,{"card-body":a(()=>[e(B,{columns:g,loading:s(p),rows:s(u),"rows-per-page-options":[20,30,40,50],title:"\xC1reas"},{"top-right":a(()=>[e(f,{class:"q-mr-xs",color:"primary",icon:"add",label:"Nueva \xC1rea",outline:"",onClick:r[0]||(r[0]=t=>l.value=!0)}),e(V,{modelValue:c.value,"onUpdate:modelValue":r[1]||(r[1]=t=>c.value=t),class:"q-mr-xs",debounce:"300",dense:"",outlined:"",placeholder:"Search"},{append:a(()=>[e(F,{name:"search"})]),_:1},8,["modelValue"]),e(f,{color:"primary","icon-right":"archive",label:"Exportar CSV","no-caps":""})]),"body-cell-action":a(t=>[e(S,{props:t},{default:a(()=>[I("div",G,[e(f,{color:"primary",dense:"",flat:"",icon:"edit",rounded:"",size:"sm",onClick:x=>o(t.row)},null,8,["onClick"])])]),_:2},1032,["props"])]),_:1},8,["loading","rows"])]),footer:a(()=>[e(L,{modelValue:l.value,"onUpdate:modelValue":r[2]||(r[2]=t=>l.value=t)},{default:a(()=>[e(z,{area:s(m)},null,8,["area"])]),_:1},8,["modelValue"])]),_:1}))}});export{Ve as default};
