import{j as b,k as a,l as i,n as g,p as l,d as o,X as n,au as q,u as r,ap as w}from"./index.6e0dc468.js";import{Q as s,a as x}from"./QTable.c75b480b.js";import{b as F}from"./useRequisitions.583bbbe5.js";import{T as h}from"./TablePage.e1853eac.js";import{F as y}from"./FilePreview.23be025c.js";import"./format.e39f8640.js";import"./use-dark.b49e1a6f.js";import"./planeacion.api.0342f2e3.js";import"./index.2cf0d985.js";import"./scroll.0a304599.js";import"./QList.a5647721.js";import"./QSelect.ca846bee.js";import"./layout.f6c7d4be.js";import"./QChip.c57cfaf9.js";import"./utils.esm.eb2a7ef9.js";import"./QItemLabel.1df21711.js";import"./QCheckbox.c981629d.js";import"./useMutation.esm.6c972cd2.js";import"./mutation.esm.bf03a6b1.js";import"./QCard.b42533e0.js";import"./QPage.2385e31a.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./QTooltip.c27337be.js";import"./QCardSection.dc33c047.js";import"./QImg.62269655.js";import"./QSpace.d3b745d6.js";const Y=b({__name:"IndexPage",setup(k){const m="https://nestjs-boilerplate-production.up.railway.app",{isLoading:p,requisitions:u}=F(),d=[{name:"requisition_number",field:"requisition_number",label:"N\xFAmero de requisici\xF3n",align:"center",sortable:!0},{name:"preparation_date",field:"preparation_date",label:"Fecha de elaboraci\xF3n",sortable:!0,align:"left"},{name:"processing_date",field:"processing_date",label:"Fecha de tr\xE1mite",sortable:!0,align:"left"},{name:"file",field:"file",label:"Archivo",sortable:!1,align:"left"}];function c({href:t}){return{to:t}}return(t,P)=>{const f=g("router-link");return l(),a(h,null,{"card-body":i(()=>[o(x,{columns:d,loading:r(p),rows:r(u),"rows-per-page-options":[20,30,40,50],title:"Requisiciones"},{"top-right":i(()=>[o(n,{color:"primary",icon:"o_add",label:"Nueva requisici\xF3n",size:"md",to:{name:"requisitions.create"}},null,8,["to"])]),"body-cell-requisition_number":i(e=>[o(s,{props:e},{default:i(()=>[o(f,{custom:"",to:{name:"requisitions.edit",params:{id:e.row.id}}},{default:i(_=>[o(n,q(c(_),{color:"primary",flat:"",label:e.row.requisition_number,size:"md"}),null,16,["label"])]),_:2},1032,["to"])]),_:2},1032,["props"])]),"body-cell-file":i(e=>[o(s,{props:e},{default:i(()=>[e.row.file?(l(),a(y,{key:0,"file-url":`${r(m)}/api/files/requisitions/${e.row.id}/${e.row.file}`},null,8,["file-url"])):w("",!0)]),_:2},1032,["props"])]),_:1},8,["loading","rows"])]),_:1})}}});export{Y as default};
