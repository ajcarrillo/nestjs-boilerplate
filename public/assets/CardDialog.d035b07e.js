import{Q as p}from"./QSpace.68167c32.js";import{j as c,p as i,ag as f,t as _,c as Q,k as V,l as r,d as e,W as C,aR as d,X as g,u as k,b as B}from"./index.29beeebf.js";import{Q as S,a as D}from"./QCard.d231550d.js";import{c as $}from"./format.5ed1b2f9.js";import{Q as h}from"./QSelect.a8d33ba4.js";const v={class:"text-h6"},y=c({__name:"MyCardTitle",props:{title:null},setup(t){return(l,s)=>(i(),f("div",v,_(t.title),1))}}),j=c({__name:"CardDialog",props:{cardTitle:{default:""},modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:l}){const s=t,o=Q({get(){return s.modelValue},set(a){l("update:modelValue",a)}}),n=()=>{l("update:modelValue",!1)};return(a,u)=>(i(),V(h,{modelValue:k(o),"onUpdate:modelValue":u[0]||(u[0]=m=>B(o)?o.value=m:null)},{default:r(()=>[e(S,{class:C(a.$attrs.class)},{default:r(()=>[e(D,{class:"row items-center"},{default:r(()=>[e(y,{title:s.cardTitle},null,8,["title"]),e(p),d(a.$slots,"close-button",{closeDialog:n},()=>[e(g,{dense:"",flat:"",icon:"close",round:"",onClick:n})])]),_:3}),e($),d(a.$slots,"default")]),_:3},8,["class"])]),_:3},8,["modelValue"]))}});export{j as _};
