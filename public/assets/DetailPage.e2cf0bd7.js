import{Q as te,a as $}from"./QSpace.68167c32.js";import{b as s,k as T,a as c,c as J,Q as le}from"./format.5ed1b2f9.js";import{u as ae,Q as oe}from"./useMoney.19fa1730.js";import{Q as H}from"./QList.93ee1cf7.js";import{r as p,b0 as ne,j as z,V as L,m as N,N as X,w as ie,p as V,k,l as a,d as l,q as v,t as x,u as h,b as ue,s as w,_ as U,aH as K,av as re,b1 as se,ag as W,F as Y,at as Z,X as S}from"./index.29beeebf.js";import{a as F,Q as de}from"./QForm.89ce2382.js";import{Q as me}from"./QBtnGroup.93e49097.js";import{Q as ce}from"./QPage.4b31ca73.js";import{b as fe}from"./useBudgets.5991e8cf.js";import{T as pe}from"./TablePage.0b68744b.js";import{a as G,Q as be}from"./QCard.d231550d.js";import{g as ge,f as B}from"./QSelect.a8d33ba4.js";import{Q as _e}from"./QCardActions.d676ed10.js";import{u as ve}from"./useDictionaries.f75c8820.js";import{c as ye}from"./index.7adaf3a2.js";import{u as he}from"./useBudgetDetail.34efcabd.js";import{Q as Ve}from"./QTable.b7a0d227.js";import{u as xe}from"./useExportDataToCsv.a2a63db7.js";import"./scroll.da39b050.js";import"./use-dark.c9685ee7.js";import"./focus-manager.33224ae2.js";import"./QCheckbox.cbd511b7.js";import"./layout.0b44b01f.js";import"./index.2cf0d985.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./utils.esm.b56e2037.js";import"./app.a9180f28.js";import"./ActionResource.20e99c48.js";import"./LineResource.a71b1146.js";import"./ArticleResource.f0978ffe.js";import"./date.2c671626.js";const qe=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],Qe=(b,g=0,d=!1)=>{let i;return(...m)=>{d&&!i&&b(...m),clearTimeout(i),i=setTimeout(()=>{b(...m)},g)}},we=(b,g,d)=>{const i=p(b);return ne((m,u)=>({get(){return m(),i.value},set:Qe(f=>{i.value=f,u()},g,d)}))},Ce={class:"self-center full-width no-outline",tabindex:"0"},Pe=z({__name:"MonthBudgetForm",props:{month:null,budgetMonth:{default:()=>({quantity:0})},estimatedAmount:{default:0}},emits:["update:quantity"],setup(b,{emit:g}){const d=b;L();const i=N(),{id:m}=i.params,u=X(ye(d.budgetMonth)),f=we(u.quantity||0,250,!1);return ie(f,_=>{_>0&&(u.quantity=_,u.month=d.month,u.budget_detail_id=m,g("update:quantity",u))}),(_,q)=>(V(),k(c,null,{default:a(()=>[l(s,null,{default:a(()=>[l(T,{overline:""},{default:a(()=>[v(x(b.month),1)]),_:1}),l(F,{modelValue:h(f),"onUpdate:modelValue":q[0]||(q[0]=C=>ue(f)?f.value=C:null),modelModifiers:{number:!0},dense:"","input-class":"tw-text-right",label:"Cantidad",outlined:"",type:"number"},null,8,["modelValue"])]),_:1}),l(s,{side:""},{default:a(()=>[l(T,{overline:""},{default:a(()=>[v("\xA0\xA0\xA0")]),_:1}),l(ge,{dense:"",label:"Total",outlined:"","stack-label":""},{control:a(()=>[w("div",Ce,x(u.quantity*d.estimatedAmount),1)]),prepend:a(()=>[l(U,{name:"o_attach_money"})]),_:1})]),_:1})]),_:1}))}}),Me=w("div",{class:"tw-text-xl"},"Agregar bien",-1),De=z({__name:"BudgetDetailForm",setup(b){L();const g=N(),{id:d}=g.params,{actionDictionary:i,lineDictionary:m,areaDictionary:u,getArticleByName:f}=ve(),{storeBudgetDetailMutation:_}=he(),{isLoading:q}=_,C=p(i.value),R=p(m.value),P=p(u.value),M=p([]),o=X({action:null,line:null,area:null,article:null,estimated_amount:0,justification:"",month:[],total:0,budgetMonths:[]}),r=p([]);K(()=>{if(r.value.length>0){const t=r.value.reduce((e,n)=>e+n.quantity,0);o.total=t*o.estimated_amount}});function I(t,e,n){e(()=>{const Q=t.toLowerCase();P.value=u.value.filter(D=>D.label.toLowerCase().indexOf(Q)>-1)})}function y(t,e,n){if(t.length<2){n();return}e(()=>{const Q=t.toLowerCase();M.value=f(Q).value})}function j(t){const e=r.value.findIndex(n=>n.month===t.month);e>-1?r.value[e]=t:r.value.push(t)}function O({value:t}){r.value=r.value.filter(e=>e.month!==t)}async function E(){o.budgetMonths=r.value,await _.mutateAsync({budgetId:d,budgetDetail:o}),o.action=null,o.line=null,o.area=null,o.article=null,o.estimated_amount=0,o.justification="",o.month=[],o.total=0,o.budgetMonths=[],r.value=[]}return(t,e)=>(V(),k(be,null,{default:a(()=>[l(G,null,{default:a(()=>[Me]),_:1}),l(J),l(G,{class:"tw-px-0"},{default:a(()=>[l(de,null,{default:a(()=>[l(H,null,{default:a(()=>[l(c,null,{default:a(()=>[l(s,null,{default:a(()=>[l(B,{modelValue:o.action,"onUpdate:modelValue":e[0]||(e[0]=n=>o.action=n),dense:"",label:"ACC",options:C.value,outlined:""},null,8,["modelValue","options"])]),_:1})]),_:1}),l(c,null,{default:a(()=>[l(s,null,{default:a(()=>[l(B,{modelValue:o.line,"onUpdate:modelValue":e[1]||(e[1]=n=>o.line=n),dense:"",label:"Partida",options:R.value,outlined:""},null,8,["modelValue","options"])]),_:1})]),_:1}),l(c,null,{default:a(()=>[l(s,null,{default:a(()=>[l(B,{modelValue:o.area,"onUpdate:modelValue":e[2]||(e[2]=n=>o.area=n),dense:"",label:"\xC1rea",options:P.value,outlined:"","use-input":"",onFilter:I},null,8,["modelValue","options"])]),_:1})]),_:1}),l(c,null,{default:a(()=>[l(s,null,{default:a(()=>[l(B,{modelValue:o.article,"onUpdate:modelValue":e[3]||(e[3]=n=>o.article=n),dense:"",hint:"M\xEDnimo 2 caracteres para activar el filtrado",label:"Art\xEDculos",options:M.value,outlined:"","use-input":"",onFilter:y},{option:a(n=>[l(c,re(se(n.itemProps)),{default:a(()=>[l(s,null,{default:a(()=>[l(T,null,{default:a(()=>[v(x(n.opt.label),1)]),_:2},1024),l(T,{caption:""},{default:a(()=>[v(x(n.opt.caption),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options"])]),_:1})]),_:1}),l(c,null,{default:a(()=>[l(s,null,{default:a(()=>[l(F,{modelValue:o.justification,"onUpdate:modelValue":e[4]||(e[4]=n=>o.justification=n),dense:"",label:"Justificaci\xF3n",outlined:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1}),l(c,null,{default:a(()=>[l(s,null,{default:a(()=>[l(F,{modelValue:o.estimated_amount,"onUpdate:modelValue":e[5]||(e[5]=n=>o.estimated_amount=n),modelModifiers:{number:!0},dense:"","input-class":"tw-text-right",label:"Monto estimado",outlined:"",type:"number"},{prepend:a(()=>[l(U,{name:"o_attach_money"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(c,null,{default:a(()=>[l(s,null,{default:a(()=>[l(B,{modelValue:o.month,"onUpdate:modelValue":e[6]||(e[6]=n=>o.month=n),dense:"",label:"Mes",multiple:"",options:h(qe),outlined:"","use-chips":"",onRemove:O},null,8,["modelValue","options"])]),_:1})]),_:1}),(V(!0),W(Y,null,Z(o.month,n=>(V(),k(Pe,{key:n,"estimated-amount":o.estimated_amount,month:n,"onUpdate:quantity":j},null,8,["estimated-amount","month"]))),128)),l(c,null,{default:a(()=>[l(s,null,{default:a(()=>[l(F,{modelValue:o.total,"onUpdate:modelValue":e[7]||(e[7]=n=>o.total=n),dense:"","input-class":"tw-text-right",label:"Total",outlined:"",readonly:"",type:"number"},{prepend:a(()=>[l(U,{name:"o_attach_money"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(J),l(_e,null,{default:a(()=>[l(te),l(S,{color:"primary",icon:"o_save",loading:h(q),unelevated:"",onClick:E},{default:a(()=>[v(" guardar ")]),_:1},8,["loading"])]),_:1})]),_:1}))}}),Ae={class:"q-my-xs q-pt-sm q-ml-md tw-text-2xl tw-font-bold tw-text-slate-700"},Be={class:"row"},Fe={class:"col col-md-3 q-pa-sm"},Te={class:"col"},mt=z({__name:"DetailPage",setup(b){const{exportDataToCsv:g}=xe(),d=p(),i=L(),m=N(),{id:u}=m.params,{search:f,sortBy:_="id",descending:q=!1,page:C,rowsPerPage:R=13}=m.query,{budget:P}=fe(u),{currencyFormat:M}=ae(),o=[{name:"id",field:"id",required:!0,label:"ID",sortable:!0,align:"left"},{name:"action",field:t=>t.action.name,label:"Acci\xF3n",sortable:!0,align:"left"},{name:"line",field:t=>t.line.name,label:"Partida",sortable:!0,align:"left"},{name:"department",field:t=>t.department.alias,label:"\xC1rea",sortable:!0,align:"left"},{name:"article",field:t=>t.article.name,label:"Bien",sortable:!0,align:"left"},{name:"article_description",field:t=>t.article.description,label:"Descripci\xF3n del bien",sortable:!0,align:"left"},{name:"justification",field:"justification",label:"Justificaci\xF3n",sortable:!0,align:"left"},{name:"enero",field:t=>{var e;return(e=t.enero)==null?void 0:e.quantity},label:"Enero",sortable:!0,align:"right"},{name:"febrero",field:t=>{var e;return(e=t.febrero)==null?void 0:e.quantity},label:"Febrero",sortable:!0,align:"right"},{name:"marzo",field:t=>{var e;return(e=t.marzo)==null?void 0:e.quantity},label:"Marzo",sortable:!0,align:"right"},{name:"abril",field:t=>{var e;return(e=t.abril)==null?void 0:e.quantity},label:"Abril",sortable:!0,align:"right"},{name:"mayo",field:t=>{var e;return(e=t.mayo)==null?void 0:e.quantity},label:"Mayo",sortable:!0,align:"right"},{name:"junio",field:t=>{var e;return(e=t.junio)==null?void 0:e.quantity},label:"Junio",sortable:!0,align:"right"},{name:"julio",field:t=>{var e;return(e=t.julio)==null?void 0:e.quantity},label:"Julio",sortable:!0,align:"right"},{name:"agosto",field:t=>{var e;return(e=t.agosto)==null?void 0:e.quantity},label:"Agosto",sortable:!0,align:"right"},{name:"septiembre",field:t=>{var e;return(e=t.septiembre)==null?void 0:e.quantity},label:"Septiembre",sortable:!0,align:"right"},{name:"octubre",field:t=>{var e;return(e=t.octubre)==null?void 0:e.quantity},label:"Octubre",sortable:!0,align:"right"},{name:"noviembre",field:t=>{var e;return(e=t.noviembre)==null?void 0:e.quantity},label:"Noviembre",sortable:!0,align:"right"},{name:"diciembre",field:t=>{var e;return(e=t.diciembre)==null?void 0:e.quantity},label:"Diciembre",sortable:!0,align:"right"},{name:"estimated_amount",field:t=>`${M(+t.estimated_amount)}`,label:"Precio",sortable:!0,align:"right"},{name:"total",field:t=>`${M(+t.total)}`,label:"Total",sortable:!0,align:"right"}],r=p(["action","line","department","article","estimated_amount","enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre","total"]),I=o.map(t=>({label:t.label,value:t.name})),y=p(f||""),j=p({sortBy:_,descending:q==="true",page:+C||1,rowsPerPage:+R||10});K(()=>{let t={};y.value?t={...i.currentRoute.value.query,search:y.value}:(t={...i.currentRoute.value.query},delete t.search),i.push({query:t})});function O(t){j.value=t,i.push({query:{...i.currentRoute.value.query,page:t.page,rowsPerPage:t.rowsPerPage,sortBy:t.sortBy,descending:t.descending}})}function E(){g(d.value.filteredSortedRows,o,"presupuesto")}return(t,e)=>(V(),k(ce,null,{default:a(()=>{var n;return[w("h5",Ae,"Presupuesto "+x((n=h(P))==null?void 0:n.year),1),w("div",Be,[w("div",Fe,[l(De)]),w("div",Te,[l(pe,null,{"card-body":a(()=>{var Q;return[l(h(Ve),{ref_key:"qTablePresupuesto",ref:d,columns:o,filter:y.value,pagination:j.value,"row-key":"id",rows:((Q=h(P))==null?void 0:Q.details)||[],"rows-per-page-options":[13,26,52,0],separator:"cell",title:"Detalle","visible-columns":r.value,"onUpdate:pagination":O},{"top-right":a(D=>[l(S,{class:"tw-mr-2",color:"primary","fab-mini":"",flat:"",icon:"tune",size:"sm"},{default:a(()=>[l($,null,{default:a(()=>[v(" Mostrar/Ocultar columnas ")]),_:1}),l(le,{anchor:"top end",self:"center start"},{default:a(()=>[l(H,null,{default:a(()=>[(V(!0),W(Y,null,Z(h(I),A=>(V(),k(c,{key:A.value,clickable:""},{default:a(()=>[l(s,null,{default:a(()=>[l(T,null,{default:a(()=>[v(x(A.label),1)]),_:2},1024)]),_:2},1024),l(s,{side:""},{default:a(()=>[l(oe,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=ee=>r.value=ee),color:"primary",val:A.value},null,8,["modelValue","val"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),l(S,{dense:"",flat:"",icon:D.inFullscreen?"fullscreen_exit":"fullscreen",round:"",onClick:D.toggleFullscreen},{default:a(()=>[l($,{disable:t.$q.platform.is.mobile},{default:a(()=>[v(x(D.inFullscreen?"Salir de Pantalla Completa":"Pantalla Completa"),1)]),_:2},1032,["disable"])]),_:2},1032,["icon","onClick"]),l(F,{modelValue:y.value,"onUpdate:modelValue":e[1]||(e[1]=A=>y.value=A),class:"q-mr-xs",clearable:"",debounce:"300",dense:"",outlined:"",placeholder:"Buscar"},{append:a(()=>[l(U,{name:"search"})]),_:1},8,["modelValue"]),l(me,{unelevated:""},{default:a(()=>[l(S,{color:"primary","icon-right":"archive",label:"Exportar a CSV",onClick:E})]),_:1})]),_:1},8,["filter","pagination","rows","visible-columns"])]}),_:1})])])]}),_:1}))}});export{mt as default};
