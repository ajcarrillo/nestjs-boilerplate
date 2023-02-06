import{v as k,c as Q,h as M,x as I,j as B,N,r as q,p as C,k as S,l as a,d as e,u as f,s as $,t as D,Z as w,aH as L,a6 as T}from"./index.ab1ab5b3.js";import{p as E,l as y,Q as j,a as U}from"./layout.6a960996.js";import{C as z,Q as G}from"./CardForm.61d55692.js";import{u as K,a as A,b as F,c as R,f as H,T as P,Q as Z,d as J}from"./QCardActions.06977e5e.js";import{a as O,b as g,c as v}from"./format.00788522.js";import"./use-dark.494f195b.js";import"./focus-manager.33224ae2.js";import"./index.2cf0d985.js";import"./QCard.412cbb6d.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./scroll.b38dbfea.js";import"./QPage.bce5ab9b.js";import"./utils.esm.d3e11ed7.js";var W=k({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(l,{slots:t}){const m=Q(()=>{const d=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(u=>l[u]===!0).map(u=>`q-btn-group--${u}`).join(" ");return`q-btn-group row no-wrap${d.length>0?" "+d:""}`+(l.spread===!0?" q-btn-group--spread":" inline")});return()=>M("div",{class:m.value},I(t.default))}}),_={getUsers(){return E.get("/users")},storeUser(l){return E.post("/users",l)},updateUser(l,t){return E.put(`/users/${l}`,t)}};const X=async()=>{const{data:l}=await _.getUsers();return l},Y=async l=>{const{data:t}=await _.storeUser(l);return t},ee=async l=>{const{id:t,...m}=l,{data:d}=await _.updateUser(t,m);return d},ae=()=>{const{isLoading:l,isError:t,data:m,error:d}=K({queryKey:["users"],queryFn:X,staleTime:6e5});return{isLoading:l,isError:t,data:m,error:d}},le=()=>{const l=A();return{userStoreMutations:F({mutationFn:Y,onSuccess:()=>{l.invalidateQueries({queryKey:["users"]}),y.showSuccessNotification("Usuario creado con \xE9xito")},onError:()=>{y.showErrorNotification("Error al crear usuario")}})}},se=()=>{const l=A();return{userUpdateMutations:F({mutationFn:ee,onSuccess:()=>{l.invalidateQueries({queryKey:["users"]}),y.showSuccessNotification("Usuario actualizado con \xE9xito")},onError:()=>{y.showErrorNotification("Error al actualizar usuario")}})}},te=B({__name:"UserForm",props:{user:null},setup(l){const t=l,{userStoreMutations:m}=le(),{isLoading:d}=m,{userUpdateMutations:u}=se(),{isLoading:b}=u,V=N({email:"",firstName:"",isActive:!0,lastName:"",roles:[],password:""}),s=N(R(t.user||V)),p=q(),n={email:[r=>!!r||"El email es requerido",r=>/.+@.+\..+/.test(r)||"El email debe ser v\xE1lido"],firstName:[r=>!!r||"El nombre es requerido"],lastName:[r=>!!r||"El apellido es requerido"],password:[r=>!!r||"El password es requerido"],roles:[r=>!!r.length||"Debe seleccionar al menos un rol"]},c=Q(()=>t.user&&"id"in t.user),x=Q(()=>c.value?"Editar usuario":"Agregar usuario");async function h(){var o,i;!await((o=p.value)==null?void 0:o.validate())||(c.value?await u.mutateAsync(s):(await m.mutateAsync(s),s.email="",s.firstName="",s.isActive=!0,s.lastName="",s.roles=[],s.password="",(i=p.value)==null||i.reset()))}return(r,o)=>(C(),S(z,{title:f(x)},{form:a(()=>[e(f(j),{ref_key:"userForm",ref:p,class:"q-gutter-md"},{default:a(()=>[e(O,null,{default:a(()=>[e(g,null,{default:a(()=>[e(v,null,{default:a(()=>[e(U,{modelValue:s.email,"onUpdate:modelValue":o[0]||(o[0]=i=>s.email=i),dense:"",label:"Email",outlined:"",rules:n.email},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(v,null,{default:a(()=>[e(U,{modelValue:s.firstName,"onUpdate:modelValue":o[1]||(o[1]=i=>s.firstName=i),dense:"",label:"Nombre",outlined:"",rules:n.firstName},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(v,null,{default:a(()=>[e(U,{modelValue:s.lastName,"onUpdate:modelValue":o[2]||(o[2]=i=>s.lastName=i),dense:"",label:"Apellido",outlined:"",rules:n.lastName},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(v,null,{default:a(()=>[e(U,{modelValue:s.password,"onUpdate:modelValue":o[3]||(o[3]=i=>s.password=i),dense:"",label:"Contrase\xF1a",outlined:"",rules:n.password,type:"password"},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(v,null,{default:a(()=>[e(H,{modelValue:s.roles,"onUpdate:modelValue":o[4]||(o[4]=i=>s.roles=i),dense:"",label:"Roles",multiple:"",options:["admin","user"],outlined:"",rules:n.roles},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1}),$("pre",null,D(s),1)]),_:1},512)]),actions:a(()=>[e(w,{color:"primary",label:"Guardar",loading:f(d)||f(b),onClick:h},null,8,["loading"])]),_:1},8,["title"]))}}),Ue=B({__name:"IndexPage",setup(l){const{data:t,isLoading:m}=ae(),d=q(""),u=q(!1);let b=N({email:"",firstName:"",isActive:!0,lastName:"",roles:[],password:""});const V=[{name:"id",field:"id",required:!0,label:"ID",sortable:!0,align:"left"},{name:"email",field:"email",label:"Email",sortable:!0,align:"left"},{name:"firstName",field:"firstName",label:"Nombre",sortable:!0,align:"left"},{name:"lastName",field:"lastName",label:"Apellido",sortable:!0,align:"left"},{name:"isActive",field:"isActive",label:"Activo",sortable:!0,align:"left"},{name:"roles",field:p=>p.roles.join(", "),label:"Roles",sortable:!0,align:"left"},{name:"action",align:"center",label:"Acciones",field:"action",sortable:!1}];L(()=>{u.value||(b=N({email:"",firstName:"",isActive:!0,lastName:"",roles:[],password:""}))});function s(p){u.value=!0,b=p}return(p,n)=>(C(),S(P,null,{"card-body":a(()=>[e(Z,{columns:V,loading:f(m),rows:f(t),"rows-per-page-options":[20,30,40,50],title:"Usuarios"},{"top-right":a(()=>[e(U,{modelValue:d.value,"onUpdate:modelValue":n[0]||(n[0]=c=>d.value=c),class:"q-mr-xs",debounce:"300",dense:"",outlined:"",placeholder:"Search"},{append:a(()=>[e(T,{name:"search"})]),_:1},8,["modelValue"]),e(W,{unelevated:""},{default:a(()=>[e(w,{class:"tw-bg-indigo-900",icon:"add",label:"Nueva Usuario","text-color":"white",onClick:n[1]||(n[1]=c=>u.value=!0)}),e(w,{color:"primary","icon-right":"archive",label:"Exportar CSV"})]),_:1})]),"body-cell-action":a(c=>[e(G,{props:c},{default:a(()=>[e(w,{color:"primary",dense:"",flat:"",icon:"edit",rounded:"",size:"sm",onClick:x=>s(c.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["loading","rows"])]),footer:a(()=>[e(J,{modelValue:u.value,"onUpdate:modelValue":n[2]||(n[2]=c=>u.value=c)},{default:a(()=>[e(te,{user:f(b)},null,8,["user"])]),_:1},8,["modelValue"])]),_:1}))}});export{Ue as default};
