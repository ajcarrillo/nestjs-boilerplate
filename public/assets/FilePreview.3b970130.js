import{a as g,Q as h}from"./QSpace.873cbd20.js";import{j as Q,r as b,c as d,p as r,ag as u,aT as x,d as e,l as t,q as C,X as f,u as m,k as V,ap as k,F as y,b3 as S,b4 as F,s as I}from"./index.764f91da.js";import{Q as U,a as i}from"./QCard.85e6f4b4.js";import{a as _}from"./format.5c717855.js";import{Q as j}from"./QImg.70025582.js";import{Q as B}from"./QChip.24db411d.js";import{_ as P}from"./plugin-vue_export-helper.21dcd24c.js";const E=a=>(S("data-v-565bb954"),a=a(),F(),a),N=E(()=>I("div",{class:"text-h6"},"Archivo adjunto",-1)),T=["data"],D=Q({__name:"FilePreview",props:{fileUrl:null},setup(a){const n=a,o=b(!1),v=d(()=>{const l=n.fileUrl.split(".").pop().toLowerCase();return["jpg","jpeg","png"].includes(l)}),w=d(()=>n.fileUrl.split(".").pop().toLowerCase()==="pdf"),c=()=>{o.value=!0};return(l,s)=>(r(),u(y,null,[x(l.$slots,"activator",{showPreview:c},()=>[e(f,{color:"primary","fab-mini":"",icon:"o_preview",onClick:c},{default:t(()=>[e(g,{class:"bg-white text-primary"},{default:t(()=>[C("Ver archivo")]),_:1})]),_:1})],!0),e(B,{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=p=>o.value=p)},{default:t(()=>[e(U,{class:"custom-width custom-height"},{default:t(()=>[e(i,null,{default:t(()=>[N]),_:1}),e(_),e(i,{class:"scroll preview-file"},{default:t(()=>[m(v)?(r(),V(j,{key:0,src:a.fileUrl},null,8,["src"])):m(w)?(r(),u("object",{key:1,class:"tw-w-full tw-h-full",data:a.fileUrl},null,8,T)):k("",!0)]),_:1}),e(_),e(i,{class:"tw-flex"},{default:t(()=>[e(h),e(f,{color:"primary",label:"Cerrar",unelevated:"",onClick:s[0]||(s[0]=p=>o.value=!1)})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}});var H=P(D,[["__scopeId","data-v-565bb954"]]);export{H as F};
