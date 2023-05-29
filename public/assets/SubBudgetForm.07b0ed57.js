import{Q as p}from"./QSelect.ca846bee.js";import{Q as d,a as i}from"./QItemLabel.1df21711.js";import{Q as r}from"./QInput.39e7bb07.js";import{Q as y}from"./QCheckbox.c981629d.js";import{Q as F}from"./QList.a5647721.js";import{Q as j}from"./QCardSection.dc33c047.js";import{a as B}from"./format.e39f8640.js";import{j as S,V as w,N as A,r as C,p as D,k as I,l,d as e,u as s,X as M,b8 as P}from"./index.6e0dc468.js";import{Q as N}from"./QCardActions.55bc0492.js";import{Q as W}from"./QForm.e5ce8d0b.js";import{_ as b}from"./DatePicker.233d97ac.js";import{u as L}from"./useDictionaries.b98b9245.js";import{c as R,d as G}from"./useSubBudgets.f92594e2.js";const ae=S({__name:"SubBudgetForm",props:{populateWith:{default:null},isEditing:{type:Boolean,default:!1}},setup(V,{emit:J}){const m=V,c=w(),{areaDictionary:v,lineDictionary:g,actionDictionary:E}=L(),{createSubBudgetMutation:Q}=R(),{updateSubBudgetMutation:q}=G(),x={action_id:void 0,line_id:void 0,department_id:"",benefited_population:"",objective:"",cost_per_participant:0,number_participants:0,event:"",event_venue:"",justification:"",start_date:"",end_date:"",amount:0,vat_breakdown:!1,risk:""},a=A(m.populateWith||x),f=C(),n={action_id:[o=>!!o||"El campo acci\xF3n es requerido"],line_id:[o=>!!o||"El campo partida es requerido"],department_id:[o=>!!o||"El campo \xE1rea es requerido"],benefited_population:[o=>!!o||"El campo poblaci\xF3n beneficiada es requerido"],objective:[o=>!!o||"El campo objetivo es requerido"],cost_per_participant:[o=>!!o||"El campo costo por participante es requerido"],number_participants:[o=>!!o||"El campo n\xFAmero de participantes es requerido"],event:[o=>!!o||"El campo evento es requerido"],event_venue:[o=>!!o||"El campo lugar del evento es requerido"],justification:[o=>!!o||"El campo justificaci\xF3n es requerido"],start_date:[o=>!!o||"El campo fecha de inicio es requerido"],end_date:[o=>!!o||"El campo fecha de fin es requerido"],amount:[o=>!!o||"El campo monto es requerido"],vat_breakdown:[o=>o||"El campo desglose de IVA es requerido"],risk:[o=>!!o||"El campo riesgo es requerido"]};async function U(){var t,u,_;if(await((t=f.value)==null?void 0:t.validate()))if(m.isEditing){const k=(_=(u=m.populateWith)==null?void 0:u.id)!=null?_:"";await q.mutateAsync({subBudgetId:k,updateSubBudgetDto:a})}else await Q.mutateAsync(a),await c.push({name:"sub-budgets"})}return(o,t)=>(D(),I(s(W),{ref_key:"qSubBudgetForm",ref:f,onSubmit:P(U,["prevent"])},{default:l(()=>[e(j,null,{default:l(()=>[e(F,null,{default:l(()=>[e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[e(p,{modelValue:a.action_id,"onUpdate:modelValue":t[0]||(t[0]=u=>a.action_id=u),dense:"","emit-value":!0,label:"Acci\xF3n","map-options":"",options:s(E),outlined:"",rules:n.action_id},null,8,["modelValue","options","rules"])]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[e(p,{modelValue:a.line_id,"onUpdate:modelValue":t[1]||(t[1]=u=>a.line_id=u),dense:"","emit-value":!0,label:"Partida","map-options":"",options:s(g),outlined:"",rules:n.line_id},null,8,["modelValue","options","rules"])]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[e(p,{modelValue:a.department_id,"onUpdate:modelValue":t[2]||(t[2]=u=>a.department_id=u),dense:"","emit-value":!0,label:"\xC1rea","map-options":"","option-label":"full_description",options:s(v),outlined:"",rules:n.department_id},null,8,["modelValue","options","rules"])]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[e(r,{modelValue:a.benefited_population,"onUpdate:modelValue":t[3]||(t[3]=u=>a.benefited_population=u),dense:"",label:"Poblaci\xF3n Beneficiada",outlined:"",rules:n.benefited_population},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[e(r,{modelValue:a.objective,"onUpdate:modelValue":t[4]||(t[4]=u=>a.objective=u),dense:"",label:"Objetivo",outlined:"",rules:n.objective,type:"textarea"},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[e(r,{modelValue:a.cost_per_participant,"onUpdate:modelValue":t[5]||(t[5]=u=>a.cost_per_participant=u),modelModifiers:{number:!0},dense:"",label:"Costo Por Participante",outlined:"",rules:n.cost_per_participant},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[e(r,{modelValue:a.number_participants,"onUpdate:modelValue":t[6]||(t[6]=u=>a.number_participants=u),modelModifiers:{number:!0},dense:"",label:"N\xFAmero de Participantes",outlined:"",rules:n.number_participants,type:"number"},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[e(r,{modelValue:a.event,"onUpdate:modelValue":t[7]||(t[7]=u=>a.event=u),dense:"",label:"Evento",outlined:"",rules:n.event},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[e(r,{modelValue:a.event_venue,"onUpdate:modelValue":t[8]||(t[8]=u=>a.event_venue=u),dense:"",label:"Lugar del Evento",outlined:"",rules:n.event_venue},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[e(r,{modelValue:a.justification,"onUpdate:modelValue":t[9]||(t[9]=u=>a.justification=u),dense:"",label:"Justificaci\xF3n",outlined:"",rules:n.justification,type:"textarea"},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[e(b,{modelValue:a.start_date,"onUpdate:modelValue":t[10]||(t[10]=u=>a.start_date=u),label:"Fecha de Inicio",rules:n.start_date},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[e(b,{modelValue:a.end_date,"onUpdate:modelValue":t[11]||(t[11]=u=>a.end_date=u),label:"Fecha de Fin",rules:n.end_date},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[e(r,{modelValue:a.amount,"onUpdate:modelValue":t[12]||(t[12]=u=>a.amount=u),modelModifiers:{number:!0},dense:"",label:"Monto",outlined:"",rules:n.amount,type:"number"},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[e(y,{modelValue:a.vat_breakdown,"onUpdate:modelValue":t[13]||(t[13]=u=>a.vat_breakdown=u),dense:"",label:"Desglose de IVA",outlined:"",rules:n.vat_breakdown},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[e(r,{modelValue:a.risk,"onUpdate:modelValue":t[14]||(t[14]=u=>a.risk=u),dense:"",label:"Riesgo",outlined:"",rules:n.risk,type:"textarea"},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1}),e(B),e(N,{align:"right"},{default:l(()=>[e(M,{color:"primary",label:"Guardar",type:"submit"})]),_:1})]),_:1},8,["onSubmit"]))}});export{ae as _};
