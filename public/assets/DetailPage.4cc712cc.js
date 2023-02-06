import{q as K,r as w,c as Q,w as J,x as ne,af as oe,ac as ie,h as P,L as Ve,g as Me,s as Qe,_ as ke,a2 as U,ap as Pe,aV as Ae,M as X,P as Y,aW as Z,H as ge,m as V,j as B,k as n,d as t,n as A,t as j,u as O,b as Oe,p as k,ax as Ee,am as pe,F as ve,an as he,S as W}from"./index.812f81a0.js";import{f as Fe,g as je,v as ue,h as Be,i as Le,j as Ie,k as Ue,l as Ne,m as $e,r as re,s as He,p as se,n as Re,o as ze,q as Je,t as We,c as Ge,w as Ke,a as Xe,b as Ye,x as F,e as Ze,Q as et,y as tt,T as at}from"./QCardActions.08f71cf5.js";import{u as lt,a as nt,b as ot,d as it,c as de,h,i as G,Q as x,j as ce,k as ye}from"./QSeparator.e38ba453.js";import{g as ut}from"./scroll.7ca003e8.js";import{Q as rt}from"./QPage.3dfb7345.js";import{b as st}from"./useBudgets.f10b2a7a.js";import{c as I,p as dt,l as me,a as fe,b as ct,Q as mt}from"./layout.a9526a0e.js";import{u as ft}from"./app.dae98124.js";import"./uid.41ce9c26.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./utils.esm.48473d4c.js";import"./index.2cf0d985.js";import"./ActionResource.d6c0be8e.js";import"./LineResource.832adf2e.js";import"./AreaResource.094d6a2e.js";import"./ArticleResource.c5f3993f.js";var be=K({name:"QTooltip",inheritAttrs:!1,props:{...Fe,...lt,...je,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:ue},self:{type:String,default:"top middle",validator:ue},offset:{type:Array,default:()=>[14,14],validator:Be},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...nt],setup(l,{slots:f,emit:s,attrs:d}){let c,r;const g=Me(),{proxy:{$q:e}}=g,a=w(null),p=w(!1),S=Q(()=>se(l.anchor,e.lang.rtl)),C=Q(()=>se(l.self,e.lang.rtl)),q=Q(()=>l.persistent!==!0),{registerTick:i,removeTick:_}=Le(),{registerTimeout:M}=ot(),{transitionProps:N,transitionStyle:$}=Ie(l),{localScrollTarget:L,changeScrollEvent:H,unconfigureScrollTarget:R}=Ue(l,ae),{anchorEl:v,canShow:m,anchorEvents:o}=Ne({showing:p,configureAnchorEl:De}),{show:u,hide:y}=it({showing:p,canShow:m,handleShow:xe,handleHide:we,hideOnRouteChange:q,processOnMount:!0});Object.assign(o,{delayShow:Ce,delayHide:qe});const{showPortal:D,hidePortal:ee,renderPortal:_e}=$e(g,a,Te,"tooltip");if(e.platform.is.mobile===!0){const b={anchorEl:v,innerRef:a,onClickOutside(T){return y(T),T.target.classList.contains("q-dialog__backdrop")&&ke(T),!0}},z=Q(()=>l.modelValue===null&&l.persistent!==!0&&p.value===!0);J(z,T=>{(T===!0?Re:re)(b)}),ne(()=>{re(b)})}function xe(b){D(),i(()=>{r=new MutationObserver(()=>E()),r.observe(a.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),E(),ae()}),c===void 0&&(c=J(()=>e.screen.width+"|"+e.screen.height+"|"+l.self+"|"+l.anchor+"|"+e.lang.rtl,E)),M(()=>{D(!0),s("show",b)},l.transitionDuration)}function we(b){_(),ee(),te(),M(()=>{ee(!0),s("hide",b)},l.transitionDuration)}function te(){r!==void 0&&(r.disconnect(),r=void 0),c!==void 0&&(c(),c=void 0),R(),oe(o,"tooltipTemp")}function E(){const b=a.value;v.value===null||!b||He({el:b,offset:l.offset,anchorEl:v.value,anchorOrigin:S.value,selfOrigin:C.value,maxHeight:l.maxHeight,maxWidth:l.maxWidth})}function Ce(b){if(e.platform.is.mobile===!0){de(),document.body.classList.add("non-selectable");const z=v.value,T=["touchmove","touchcancel","touchend","click"].map(le=>[z,le,"delayHide","passiveCapture"]);ie(o,"tooltipTemp",T)}M(()=>{u(b)},l.delay)}function qe(b){e.platform.is.mobile===!0&&(oe(o,"tooltipTemp"),de(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),M(()=>{y(b)},l.hideDelay)}function De(){if(l.noParentEvent===!0||v.value===null)return;const b=e.platform.is.mobile===!0?[[v.value,"touchstart","delayShow","passive"]]:[[v.value,"mouseenter","delayShow","passive"],[v.value,"mouseleave","delayHide","passive"]];ie(o,"anchor",b)}function ae(){if(v.value!==null||l.scrollTarget!==void 0){L.value=ut(v.value,l.scrollTarget);const b=l.noParentEvent===!0?E:y;H(L.value,b)}}function Se(){return p.value===!0?P("div",{...d,ref:a,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",d.class],style:[d.style,$.value],role:"tooltip"},Qe(f.default)):null}function Te(){return P(Ve,N.value,Se)}return ne(te),Object.assign(g.proxy,{updatePosition:E}),_e}}),bt=K({name:"QToggle",props:{...ze,icon:String,iconColor:String},emits:Je,setup(l){function f(s,d){const c=Q(()=>(s.value===!0?l.checkedIcon:d.value===!0?l.indeterminateIcon:l.uncheckedIcon)||l.icon),r=Q(()=>s.value===!0?l.iconColor:null);return()=>[P("div",{class:"q-toggle__track"}),P("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},c.value!==void 0?[P(U,{name:c.value,color:r.value})]:void 0)]}return We("toggle",f)}});const gt=P("div",{class:"q-space"});var pt=K({name:"QSpace",setup(){return()=>gt}});const vt=()=>{const l=ft(),{actionDictionary:f,lineDictionary:s,areaDictionary:d,articleDictionary:c}=Pe(l),{getArticleByName:r}=l;return{actionDictionary:f,lineDictionary:s,areaDictionary:d,articleDictionary:c,getArticleByName:r}},ht=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],yt=(l,f=0,s=!1)=>{let d;return(...c)=>{s&&!d&&l(...c),clearTimeout(d),d=setTimeout(()=>{l(...c)},f)}},_t=(l,f,s)=>{const d=w(l);return Ae((c,r)=>({get(){return c(),d.value},set:yt(g=>{d.value=g,r()},f,s)}))},xt={class:"self-center full-width no-outline",tabindex:"0"},wt=X({__name:"MonthBudgetForm",props:{month:null,budgetMonth:{default:()=>({quantity:0})},estimatedAmount:{default:0}},emits:["update:quantity"],setup(l,{emit:f}){const s=l;Y();const d=Z(),{id:c}=d.params,r=ge(Ge(s.budgetMonth)),g=_t(r.quantity||0,250,!1);return J(g,e=>{e>0&&(r.quantity=e,r.month=s.month,r.budget_detail_id=c,f("update:quantity",r))}),(e,a)=>(V(),B(x,null,{default:n(()=>[t(h,null,{default:n(()=>[t(G,{overline:""},{default:n(()=>[A(j(l.month),1)]),_:1}),t(I,{modelValue:O(g),"onUpdate:modelValue":a[0]||(a[0]=p=>Oe(g)?g.value=p:null),modelModifiers:{number:!0},dense:"","input-class":"tw-text-right",label:"Cantidad",outlined:"",type:"number"},null,8,["modelValue"])]),_:1}),t(h,{side:""},{default:n(()=>[t(G,{overline:""},{default:n(()=>[A("\xA0\xA0\xA0")]),_:1}),t(Ke,{dense:"",label:"Total",outlined:"","stack-label":""},{control:n(()=>[k("div",xt,j(r.quantity*s.estimatedAmount),1)]),prepend:n(()=>[t(U,{name:"o_attach_money"})]),_:1})]),_:1})]),_:1}))}});var Ct={storeDetail(l,f){return dt.post(`/budgets/${l}/budget-details`,f)}};const qt=async({budgetId:l,budgetDetail:f})=>{const{data:s}=await Ct.storeDetail(l,f);return s},Dt=()=>{const l=Xe();return{storeBudgetDetailMutation:Ye({mutationFn:s=>qt(s),onSuccess:async(s,d)=>{await l.invalidateQueries(["budget",d.budgetId]),me.showSuccessNotification("El bien se agreg\xF3 al presupuesto con \xE9xito")},onError:()=>{me.showErrorNotification("Error al agregar el bien al presupuesto")}})}},St=k("div",{class:"tw-text-xl"},"Agregar bien",-1),Tt=X({__name:"BudgetDetailForm",setup(l){Y();const f=Z(),{id:s}=f.params,{actionDictionary:d,lineDictionary:c,areaDictionary:r,getArticleByName:g}=vt(),{storeBudgetDetailMutation:e}=Dt(),{isLoading:a}=e,p=w(d.value),S=w(c.value),C=w(r.value),q=w([]),i=ge({action:null,line:null,area:null,article:null,estimated_amount:0,justification:"",month:[],total:0,budgetMonths:[]}),_=w([]);Ee(()=>{if(_.value.length>0){const m=_.value.reduce((o,u)=>o+u.quantity,0);i.total=m*i.estimated_amount}});function M(m,o,u){if(m.length<2){u();return}o(()=>{const y=m.toLowerCase();p.value=d.value.filter(D=>D.label.toLowerCase().indexOf(y)>-1)})}function N(m,o,u){if(m.length<2){u();return}o(()=>{const y=m.toLowerCase();S.value=c.value.filter(D=>D.label.toLowerCase().indexOf(y)>-1)})}function $(m,o,u){if(m.length<2){u();return}o(()=>{const y=m.toLowerCase();C.value=r.value.filter(D=>D.label.toLowerCase().indexOf(y)>-1)})}function L(m,o,u){if(m.length<2){u();return}o(()=>{const y=m.toLowerCase();q.value=g(y).value})}function H(m){const o=_.value.findIndex(u=>u.month===m.month);o>-1?_.value[o]=m:_.value.push(m)}function R({value:m}){_.value=_.value.filter(o=>o.month!==m)}async function v(){i.budgetMonths=_.value,await e.mutateAsync({budgetId:s,budgetDetail:i}),i.action=null,i.line=null,i.area=null,i.article=null,i.estimated_amount=0,i.justification="",i.month=[],i.total=0,i.budgetMonths=[]}return(m,o)=>(V(),B(mt,null,{default:n(()=>[t(fe,null,{default:n(()=>[St]),_:1}),t(ce),t(fe,{class:"tw-px-0"},{default:n(()=>[t(ct,null,{default:n(()=>[t(ye,null,{default:n(()=>[t(x,null,{default:n(()=>[t(h,null,{default:n(()=>[t(F,{modelValue:i.action,"onUpdate:modelValue":o[0]||(o[0]=u=>i.action=u),dense:"",hint:"M\xEDnimo 2 caracteres para activar el filtrado",label:"ACC",options:p.value,outlined:"","use-input":"",onFilter:M},null,8,["modelValue","options"])]),_:1})]),_:1}),t(x,null,{default:n(()=>[t(h,null,{default:n(()=>[t(F,{modelValue:i.line,"onUpdate:modelValue":o[1]||(o[1]=u=>i.line=u),dense:"",hint:"M\xEDnimo 2 caracteres para activar el filtrado",label:"Partida",options:S.value,outlined:"","use-input":"",onFilter:N},null,8,["modelValue","options"])]),_:1})]),_:1}),t(x,null,{default:n(()=>[t(h,null,{default:n(()=>[t(F,{modelValue:i.area,"onUpdate:modelValue":o[2]||(o[2]=u=>i.area=u),dense:"",hint:"M\xEDnimo 2 caracteres para activar el filtrado",label:"\xC1rea",options:C.value,outlined:"","use-input":"",onFilter:$},null,8,["modelValue","options"])]),_:1})]),_:1}),t(x,null,{default:n(()=>[t(h,null,{default:n(()=>[t(F,{modelValue:i.article,"onUpdate:modelValue":o[3]||(o[3]=u=>i.article=u),dense:"",hint:"M\xEDnimo 2 caracteres para activar el filtrado",label:"Art\xEDculos",options:q.value,outlined:"","use-input":"",onFilter:L},null,8,["modelValue","options"])]),_:1})]),_:1}),t(x,null,{default:n(()=>[t(h,null,{default:n(()=>[t(I,{modelValue:i.justification,"onUpdate:modelValue":o[4]||(o[4]=u=>i.justification=u),dense:"",label:"Justificaci\xF3n",outlined:"",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1}),t(x,null,{default:n(()=>[t(h,null,{default:n(()=>[t(I,{modelValue:i.estimated_amount,"onUpdate:modelValue":o[5]||(o[5]=u=>i.estimated_amount=u),modelModifiers:{number:!0},dense:"","input-class":"tw-text-right",label:"Monto estimado",outlined:"",type:"number"},{prepend:n(()=>[t(U,{name:"o_attach_money"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(x,null,{default:n(()=>[t(h,null,{default:n(()=>[t(F,{modelValue:i.month,"onUpdate:modelValue":o[6]||(o[6]=u=>i.month=u),dense:"",label:"Mes",multiple:"",options:O(ht),outlined:"","use-chips":"",onRemove:R},null,8,["modelValue","options"])]),_:1})]),_:1}),(V(!0),pe(ve,null,he(i.month,u=>(V(),B(wt,{key:u,"estimated-amount":i.estimated_amount,month:u,"onUpdate:quantity":H},null,8,["estimated-amount","month"]))),128)),t(x,null,{default:n(()=>[t(h,null,{default:n(()=>[t(I,{modelValue:i.total,"onUpdate:modelValue":o[7]||(o[7]=u=>i.total=u),dense:"","input-class":"tw-text-right",label:"Total",outlined:"",readonly:"",type:"number"},{prepend:n(()=>[t(U,{name:"o_attach_money"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(ce),t(Ze,null,{default:n(()=>[t(pt),t(W,{color:"primary",icon:"o_save",loading:O(a),unelevated:"",onClick:v},{default:n(()=>[A(" guardar ")]),_:1},8,["loading"])]),_:1})]),_:1}))}}),Vt={class:"q-my-xs q-pt-sm q-ml-md tw-text-2xl tw-font-bold tw-text-slate-700"},Mt={class:"row"},Qt={class:"col col-md-3 q-pa-sm"},kt={class:"col"},Wt=X({__name:"DetailPage",setup(l){Y();const f=Z(),{id:s}=f.params,{budget:d}=st(s),c=[{name:"id",field:"id",required:!0,label:"ID",sortable:!0,align:"left"},{name:"action",field:e=>e.action.name,label:"Acci\xF3n",sortable:!0,align:"left"},{name:"line",field:e=>e.line.name,label:"Partida",sortable:!0,align:"left"},{name:"department",field:e=>e.department.alias,label:"\xC1rea",sortable:!0,align:"left"},{name:"article",field:e=>e.article.name,label:"Bien",sortable:!0,align:"left"},{name:"article_description",field:e=>e.article.description,label:"Descripci\xF3n del bien",sortable:!0,align:"left"},{name:"justification",field:"justification",label:"Justificaci\xF3n",sortable:!0,align:"left"},{name:"enero",field:e=>{var a;return(a=e.enero)==null?void 0:a.quantity},label:"Enero",sortable:!0,align:"right"},{name:"febrero",field:e=>{var a;return(a=e.febrero)==null?void 0:a.quantity},label:"Febrero",sortable:!0,align:"right"},{name:"marzo",field:e=>{var a;return(a=e.marzo)==null?void 0:a.quantity},label:"Marzo",sortable:!0,align:"right"},{name:"abril",field:e=>{var a;return(a=e.abril)==null?void 0:a.quantity},label:"Abril",sortable:!0,align:"right"},{name:"mayo",field:e=>{var a;return(a=e.mayo)==null?void 0:a.quantity},label:"Mayo",sortable:!0,align:"right"},{name:"junio",field:e=>{var a;return(a=e.junio)==null?void 0:a.quantity},label:"Junio",sortable:!0,align:"right"},{name:"julio",field:e=>{var a;return(a=e.julio)==null?void 0:a.quantity},label:"Julio",sortable:!0,align:"right"},{name:"agosto",field:e=>{var a;return(a=e.agosto)==null?void 0:a.quantity},label:"Agosto",sortable:!0,align:"right"},{name:"septiembre",field:e=>{var a;return(a=e.septiembre)==null?void 0:a.quantity},label:"Septiembre",sortable:!0,align:"right"},{name:"octubre",field:e=>{var a;return(a=e.octubre)==null?void 0:a.quantity},label:"Octubre",sortable:!0,align:"right"},{name:"noviembre",field:e=>{var a;return(a=e.noviembre)==null?void 0:a.quantity},label:"Noviembre",sortable:!0,align:"right"},{name:"diciembre",field:e=>{var a;return(a=e.diciembre)==null?void 0:a.quantity},label:"Diciembre",sortable:!0,align:"right"},{name:"estimated_amount",field:e=>`$ ${e.estimated_amount}`,label:"Precio",sortable:!0,align:"right"},{name:"total",field:e=>`$ ${e.total}`,label:"Total",sortable:!0,align:"right"}],r=w(["action","line","department","article","estimated_amount","enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre","total"]),g=c.map(e=>({label:e.label,value:e.name}));return(e,a)=>(V(),B(rt,null,{default:n(()=>{var p;return[k("h5",Vt,"Presupuesto "+j((p=O(d))==null?void 0:p.year),1),k("div",Mt,[k("div",Qt,[t(Tt)]),k("div",kt,[t(at,null,{"card-body":n(()=>{var S;return[t(et,{columns:c,rows:((S=O(d))==null?void 0:S.details)||[],title:"Detalle","visible-columns":r.value},{"top-right":n(C=>[t(W,{class:"tw-mr-2",color:"primary","fab-mini":"",flat:"",icon:"tune",size:"sm"},{default:n(()=>[t(be,null,{default:n(()=>[A(" Mostrar/Ocultar columnas ")]),_:1}),t(tt,{anchor:"top end",self:"center start"},{default:n(()=>[t(ye,null,{default:n(()=>[(V(!0),pe(ve,null,he(O(g),q=>(V(),B(x,{key:q.value,clickable:""},{default:n(()=>[t(h,null,{default:n(()=>[t(G,null,{default:n(()=>[A(j(q.label),1)]),_:2},1024)]),_:2},1024),t(h,{side:""},{default:n(()=>[t(bt,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=i=>r.value=i),color:"primary",val:q.value},null,8,["modelValue","val"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),t(W,{dense:"",flat:"",icon:C.inFullscreen?"fullscreen_exit":"fullscreen",round:"",onClick:C.toggleFullscreen},{default:n(()=>[t(be,{disable:e.$q.platform.is.mobile},{default:n(()=>[A(j(C.inFullscreen?"Salir de Pantalla Completa":"Pantalla Completa"),1)]),_:2},1032,["disable"])]),_:2},1032,["icon","onClick"])]),_:1},8,["rows","visible-columns"])]}),_:1})])])]}),_:1}))}});export{Wt as default};
