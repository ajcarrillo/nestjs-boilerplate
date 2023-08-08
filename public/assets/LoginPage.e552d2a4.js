import{j as b,R as V,r as d,S as k,U as C,k as S,l as t,V as U,p as z,d as a,s as l,W as B,X as p,Y as N,Z as $,_ as q}from"./index.94a2a2c4.js";import{Q as x}from"./QImg.2c00d1c6.js";import{Q as c}from"./QCardSection.c5d91bb3.js";import{Q as f}from"./QInput.af5d33a8.js";import{Q as I}from"./QForm.43443744.js";import{Q as R}from"./QCard.388c49b9.js";import{Q as j}from"./QPage.42982557.js";import{Q as F,a as P}from"./QLayout.7d1c7b6f.js";import{p as E}from"./planeacion.api.2f123763.js";import{l as g}from"./layout.b5017cfe.js";import{u as D}from"./app.0a1eaf90.js";import"./use-dark.4d6c2b3e.js";import"./scroll.dcc6a748.js";import"./QResizeObserver.e730ae1a.js";import"./index.2cf0d985.js";import"./ArticleResource.5b41bca3.js";const J=l("div",{class:"row no-wrap items-center"},[l("div",{class:"col text-h6 ellipsis"},"Iniciar sesi\xF3n")],-1),ra=b({__name:"LoginPage",setup(L){const n=V(),w=D(),h=U(),r=d(""),i=d(""),{authUser:v,isAuthenticated:u}=k(n),{flushDictionaries:y,fetchDictionaries:Q}=w;C(async()=>{if(u.value){await m(v.value.firstName);return}localStorage.clear(),y()});function _(){return{name:"welcome"}}async function A(){try{const{data:e}=await E.post("/auth/login",{email:r.value,password:i.value});n.setUser(e),await m(e.firstName)}catch{g.showErrorNotification("Authentication Failed")}}async function m(e){u&&(g.showSuccessNotification(`Bienvenid@ de vuelta, ${e}`),await Q(),await h.push(_()))}return(e,o)=>(z(),S(F,null,{default:t(()=>[a(P,null,{default:t(()=>[a(j,{class:"flex flex-center"},{default:t(()=>[l("div",{id:"particles-js",class:B(e.$q.dark.isActive?"dark_gradient":"normal_gradient")},null,2),a(p,{class:"absolute-top-right",color:"white",flat:"",icon:e.$q.dark.isActive?"nights_stay":"wb_sunny",round:"",onClick:o[0]||(o[0]=s=>e.$q.dark.toggle())},null,8,["icon"]),a(R,{class:"login-form",style:N(e.$q.platform.is.mobile?{width:"80%"}:{width:"30%"})},{default:t(()=>[a(x,{src:"https://pbs.twimg.com/media/EjzUi4lWsAApJJV?format=jpg&name=large"}),a(c,null,{default:t(()=>[a($,{class:"absolute tw-top-0 tw-right-6 tw-translate-y-[-50%] tw-bg-orange-600",size:"74px"},{default:t(()=>[a(q,{color:"white",name:"perm_identity"})]),_:1}),J]),_:1}),a(c,null,{default:t(()=>[a(I,{class:"q-gutter-md"},{default:t(()=>[a(f,{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=s=>r.value=s),filled:"",label:"Usuario","lazy-rules":""},null,8,["modelValue"]),a(f,{modelValue:i.value,"onUpdate:modelValue":o[2]||(o[2]=s=>i.value=s),filled:"",label:"Contrase\xF1a","lazy-rules":"",type:"password"},null,8,["modelValue"]),l("div",null,[a(p,{color:"primary",label:"Entrar",type:"button",onClick:A})])]),_:1})]),_:1})]),_:1},8,["style"])]),_:1})]),_:1})]),_:1}))}});export{ra as default};
