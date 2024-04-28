import{Q as ie}from"./QSpace.1bee90fa.js";import{Q as ue}from"./QToggle.e125aaf0.js";import{v as K,h as p,x as L,r as P,c as _,_ as W,ah as se,aH as de,g as z,y as j,i as ce,b5 as pe,b8 as ae,H as me,N as ve,ai as fe,j as re,m as _e,M as be,p as B,k as $,l as r,d as t,u as Q,ap as G,b2 as X,q as T,t as D,aj as M,X as U,b9 as ge,S as qe,o as Se,w as Pe,V as ye,s as he}from"./index.2447aa50.js";import{l as Ce,Q as oe}from"./layout.6863befb.js";import{a as xe,Q as H}from"./QTable.697eb207.js";import{Q as we}from"./QSlideTransition.9312582a.js";import{u as Fe,a as Qe,b as Ve,c as Ie}from"./use-panel.5b863150.js";import{u as Re}from"./ClosePopup.c4620041.js";import{Q as De}from"./QCard.bb46903a.js";import{u as Oe,a as Ue}from"./use-dark.d5768ce8.js";import{Q as ke}from"./QPage.0cca4af3.js";import{T as Te}from"./TablePage.ec715fb1.js";import{P as Be,u as $e,a as Ee,b as Ne}from"./usePurchaseOrders.b052d250.js";import{Q as O,a as R,c as J,b as A}from"./QSelect.2537b62b.js";import{Q as Ae}from"./QFile.667b126a.js";import{Q as Le}from"./QList.faf37d42.js";import{Q as Ke}from"./QCardSection.4dd5e4e8.js";import{a as je}from"./format.267f291d.js";import{Q as He}from"./QCardActions.905e0fb8.js";import{c as Y}from"./index.7adaf3a2.js";import{e as Me}from"./useRequisitions.be4cce6c.js";import{_ as We}from"./DatePicker.4876206b.js";import{Q as ze}from"./QForm.63b1cacd.js";import{u as Ge}from"./useSubBudgets.cb729bac.js";import{_ as Xe}from"./CardDialog.c2bfa875.js";import{F as Je}from"./FilePreview.57a0eabd.js";import{_ as Ye}from"./DeleteCardDialog.5aafa946.js";import{u as Ze}from"./planeacion.api.88477cd4.js";import"./QCheckbox.06660279.js";import"./scroll.b3c06f66.js";import"./touch.70a9dd44.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./useQuery.esm.750a8d8b.js";import"./utils.esm.d89223b6.js";import"./useMutation.esm.74dfadc9.js";import"./mutation.esm.b316ef31.js";import"./QPopupProxy.b7486451.js";import"./date.5cf3ae7e.js";import"./MyCardTitle.048c6803.js";import"./QTooltip.b76f4e81.js";import"./QImg.85161e06.js";import"./QBanner.0ec551cc.js";import"./index.2cf0d985.js";var Z=K({name:"QStepperNavigation",setup(e,{slots:u}){return()=>p("div",{class:"q-stepper__nav"},L(u.default))}}),le=K({name:"StepHeader",props:{stepper:{},step:{},goToPanel:Function},setup(e,{attrs:u}){const{proxy:{$q:m}}=z(),v=P(null),o=_(()=>e.stepper.modelValue===e.step.name),b=_(()=>{const a=e.step.disable;return a===!0||a===""}),d=_(()=>{const a=e.step.error;return a===!0||a===""}),f=_(()=>{const a=e.step.done;return b.value===!1&&(a===!0||a==="")}),y=_(()=>{const a=e.step.headerNav,l=a===!0||a===""||a===void 0;return b.value===!1&&e.stepper.headerNav&&l}),x=_(()=>e.step.prefix&&(o.value===!1||e.stepper.activeIcon==="none")&&(d.value===!1||e.stepper.errorIcon==="none")&&(f.value===!1||e.stepper.doneIcon==="none")),q=_(()=>{const a=e.step.icon||e.stepper.inactiveIcon;if(o.value===!0){const l=e.step.activeIcon||e.stepper.activeIcon;return l==="none"?a:l||m.iconSet.stepper.active}if(d.value===!0){const l=e.step.errorIcon||e.stepper.errorIcon;return l==="none"?a:l||m.iconSet.stepper.error}if(b.value===!1&&f.value===!0){const l=e.step.doneIcon||e.stepper.doneIcon;return l==="none"?a:l||m.iconSet.stepper.done}return a}),S=_(()=>{const a=d.value===!0?e.step.errorColor||e.stepper.errorColor:void 0;if(o.value===!0){const l=e.step.activeColor||e.stepper.activeColor||e.step.color;return l!==void 0?l:a}return a!==void 0?a:b.value===!1&&f.value===!0?e.step.doneColor||e.stepper.doneColor||e.step.color||e.stepper.inactiveColor:e.step.color||e.stepper.inactiveColor}),w=_(()=>"q-stepper__tab col-grow flex items-center no-wrap relative-position"+(S.value!==void 0?` text-${S.value}`:"")+(d.value===!0?" q-stepper__tab--error q-stepper__tab--error-with-"+(x.value===!0?"prefix":"icon"):"")+(o.value===!0?" q-stepper__tab--active":"")+(f.value===!0?" q-stepper__tab--done":"")+(y.value===!0?" q-stepper__tab--navigation q-focusable q-hoverable":"")+(b.value===!0?" q-stepper__tab--disabled":"")),c=_(()=>e.stepper.headerNav!==!0?!1:y.value);function h(){v.value!==null&&v.value.focus(),o.value===!1&&e.goToPanel(e.step.name)}function F(a){a.keyCode===13&&o.value===!1&&e.goToPanel(e.step.name)}return()=>{const a={class:w.value};y.value===!0&&(a.onClick=h,a.onKeyup=F,Object.assign(a,b.value===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:u.tabindex||0}));const l=[p("div",{class:"q-focus-helper",tabindex:-1,ref:v}),p("div",{class:"q-stepper__dot row flex-center q-stepper__line relative-position"},[p("span",{class:"row flex-center"},[x.value===!0?e.step.prefix:p(W,{name:q.value})])])];if(e.step.title!==void 0&&e.step.title!==null){const I=[p("div",{class:"q-stepper__title"},e.step.title)];e.step.caption!==void 0&&e.step.caption!==null&&I.push(p("div",{class:"q-stepper__caption"},e.step.caption)),l.push(p("div",{class:"q-stepper__label q-stepper__line relative-position"},I))}return se(p("div",a,l),[[de,c.value]])}}});function ne(e){return p("div",{class:"q-stepper__step-content"},[p("div",{class:"q-stepper__step-inner"},L(e.default))])}const ee={setup(e,{slots:u}){return()=>ne(u)}};var te=K({name:"QStep",props:{...Fe,icon:String,color:String,title:{type:String,required:!0},caption:String,prefix:[String,Number],doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String,headerNav:{type:Boolean,default:!0},done:Boolean,error:Boolean,onScroll:[Function,Array]},setup(e,{slots:u,emit:m}){const{proxy:{$q:v}}=z(),o=ce(ae,j);if(o===j)return console.error("QStep needs to be a child of QStepper"),j;const{getCacheWithFn:b}=Re(),d=P(null),f=_(()=>o.value.modelValue===e.name),y=_(()=>v.platform.is.ios!==!0&&v.platform.is.chrome===!0||f.value!==!0||o.value.vertical!==!0?{}:{onScroll(S){const{target:w}=S;w.scrollTop>0&&(w.scrollTop=0),e.onScroll!==void 0&&m("scroll",S)}}),x=_(()=>typeof e.name=="string"||typeof e.name=="number"?e.name:String(e.name));function q(){const S=o.value.vertical;return S===!0&&o.value.keepAlive===!0?p(pe,o.value.keepAliveProps.value,f.value===!0?[p(o.value.needsUniqueKeepAliveWrapper.value===!0?b(x.value,()=>({...ee,name:x.value})):ee,{key:x.value},u.default)]:void 0):S!==!0||f.value===!0?ne(u):void 0}return()=>p("div",{ref:d,class:"q-stepper__step",role:"tabpanel",...y.value},o.value.vertical===!0?[p(le,{stepper:o.value,step:e,goToPanel:o.value.goToPanel}),o.value.animated===!0?p(we,q):q()]:[q()])}});const et=/(-\w)/g;function tt(e){const u={};for(const m in e){const v=m.replace(et,o=>o[1].toUpperCase());u[v]=e[m]}return u}var at=K({name:"QStepper",props:{...Oe,...Qe,flat:Boolean,bordered:Boolean,alternativeLabels:Boolean,headerNav:Boolean,contracted:Boolean,headerClass:String,inactiveColor:String,inactiveIcon:String,doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String},emits:Ve,setup(e,{slots:u}){const m=z(),v=Ue(e,m.proxy.$q),{updatePanelsList:o,isValidPanelName:b,updatePanelIndex:d,getPanelContent:f,getPanels:y,panelDirectives:x,goToPanel:q,keepAliveProps:S,needsUniqueKeepAliveWrapper:w}=Ie();me(ae,_(()=>({goToPanel:q,keepAliveProps:S,needsUniqueKeepAliveWrapper:w,...e})));const c=_(()=>`q-stepper q-stepper--${e.vertical===!0?"vertical":"horizontal"}`+(e.flat===!0?" q-stepper--flat":"")+(e.bordered===!0?" q-stepper--bordered":"")+(v.value===!0?" q-stepper--dark q-dark":"")),h=_(()=>`q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels===!0?"alternative":"standard"}-labels`+(e.flat===!1||e.bordered===!0?" q-stepper__header--border":"")+(e.contracted===!0?" q-stepper__header--contracted":"")+(e.headerClass!==void 0?` ${e.headerClass}`:""));function F(){const a=L(u.message,[]);if(e.vertical===!0){b(e.modelValue)&&d();const l=p("div",{class:"q-stepper__content"},L(u.default));return a===void 0?[l]:a.concat(l)}return[p("div",{class:h.value},y().map(l=>{const I=tt(l.props);return p(le,{key:I.name,stepper:e,step:I,goToPanel:q})})),a,fe("div",{class:"q-stepper__content q-panel-parent"},f(),"cont",e.swipeable,()=>x.value)]}return()=>(o(u),p("div",{class:c.value},ve(u.navigation,F())))}});const rt=()=>{const e=P(),u=P(!1);return{isLoading:u,fileToUpload:e,uploadFile:async v=>{if(!e.value)throw new Error("No hay archivo para cargar");u.value=!0;const o=await v(e.value);return u.value=!1,Ce.showSuccessNotification("Archivo subido con \xE9xito"),e.value=void 0,o}}},ot=()=>{const{fileToUpload:e,isLoading:u,uploadFile:m}=rt();return{fileToUpload:e,isLoading:u,uploadRequisitionFile:async o=>await m(async d=>{const f=new FormData;f.append("file",d);const{data:y}=await Be.uploadFile(o,f);return y.file_name})}},lt=re({__name:"PurchaseOrderForm",props:{purchaseOrder:{default:()=>({order_number:null,reception_date:new Date().toISOString().substring(0,10),requisition_id:null})}},setup(e){const u=e,m=_e(),v=P(m.query.fromSubBudgets==="true"),{uploadRequisitionFile:o,fileToUpload:b,isLoading:d}=ot(),{requisitionsDictionary:f}=Me(),{subBudgetReqDictionary:y}=Ge(),{createPurchaseOrder:x,purchaseOrder:q,purchaseOrderType:S}=$e({fromSubBudgets:v}),w={order_number:null,reception_date:new Date().toISOString().substring(0,10),requisition_id:null},c=be(Y(u.purchaseOrder)||Y(w)),h={order_number:[V=>!!V||"El n\xFAmero de orden de compra es requerido",V=>!isNaN(Number(V))||"El n\xFAmero de orden de compra debe ser un n\xFAmero"],reception_date:[V=>!!V||"La fecha de recepci\xF3n es requerida"],requisition_id:[V=>!!V||"La requisici\xF3n es requerida"]},F=P(),a=P(null),l=P();async function I(){var g,n,E,N;await((g=F.value)==null?void 0:g.validate())&&(await x({requisition_id:(n=a.value)==null?void 0:n.id,order_number:c.order_number,reception_date:c.reception_date}),l.value?(b.value=l.value,await o(q.value.id),(E=F.value)==null||E.reset()):(N=F.value)==null||N.reset())}function k(){c.order_number=null,c.reception_date=new Date().toISOString().substring(0,10),c.requisition_id=null,a.value=null,l.value=void 0}return(V,g)=>(B(),$(Q(ze),{ref_key:"qPurchaseOrderForm",ref:F,onReset:k,onSubmit:ge(I,["prevent"])},{default:r(()=>[t(Ke,null,{default:r(()=>[t(Le,null,{default:r(()=>[t(O,null,{default:r(()=>[t(R,null,{default:r(()=>[t(oe,{modelValue:c.order_number,"onUpdate:modelValue":g[0]||(g[0]=n=>c.order_number=n),dense:"",label:"N\xFAmero de orden de compra",outlined:"",rules:h.order_number},null,8,["modelValue","rules"])]),_:1})]),_:1}),t(O,null,{default:r(()=>[t(R,null,{default:r(()=>[t(We,{modelValue:c.reception_date,"onUpdate:modelValue":g[1]||(g[1]=n=>c.reception_date=n),rules:h.reception_date},null,8,["modelValue","rules"])]),_:1})]),_:1}),t(O,null,{default:r(()=>[Q(S)==="PRESUPUESTO"?(B(),$(R,{key:0},{default:r(()=>[t(J,{modelValue:a.value,"onUpdate:modelValue":g[2]||(g[2]=n=>a.value=n),dense:"",label:"Requisici\xF3n","option-label":n=>`Requisici\xF3n #${n.requisition_number} - ${n.area_description}`,"option-value":"id",options:Q(f),outlined:"",rules:h.requisition_id},{option:r(n=>[t(O,G(X(n.itemProps)),{default:r(()=>[t(R,null,{default:r(()=>[t(A,null,{default:r(()=>[T("Requisici\xF3n #"+D(n.opt.requisition_number),1)]),_:2},1024),t(A,{caption:""},{default:r(()=>[T(D(n.opt.area_description),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","option-label","options","rules"])]),_:1})):M("",!0),Q(S)==="SUBPRESUPUESTO"?(B(),$(R,{key:1},{default:r(()=>[t(J,{modelValue:a.value,"onUpdate:modelValue":g[3]||(g[3]=n=>a.value=n),dense:"",label:"Requisici\xF3n","option-label":n=>`Requisici\xF3n #${n.requisition_number} - ${n.event}`,"option-value":"id",options:Q(y),outlined:"",rules:h.requisition_id},{option:r(n=>[t(O,G(X(n.itemProps)),{default:r(()=>[t(R,null,{default:r(()=>[t(A,null,{default:r(()=>[T("Requisici\xF3n #"+D(n.opt.requisition_number),1)]),_:2},1024),t(A,{caption:""},{default:r(()=>[T(D(n.opt.area_description)+" "+D(n.opt.event),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","option-label","options","rules"])]),_:1})):M("",!0)]),_:1}),t(O,null,{default:r(()=>[t(R,null,{default:r(()=>[t(Ae,{modelValue:l.value,"onUpdate:modelValue":g[4]||(g[4]=n=>l.value=n),accept:".jpg, image/*, application/pdf",dense:"",label:"Haga click para subir el archivo o arrastralo aqu\xED",loading:Q(d),outlined:"","use-chips":""},{prepend:r(()=>[t(W,{name:"attach_file"})]),_:1},8,["modelValue","loading"])]),_:1})]),_:1})]),_:1})]),_:1}),t(je),t(He,{align:"right"},{default:r(()=>[t(U,{color:"primary",label:"Guardar",type:"submit",unelevated:""})]),_:1})]),_:1},8,["onSubmit"]))}});const nt={class:"q-table__title"},Jt=re({__name:"IndexPage",setup(e){const u="https://nestjs-boilerplate-production.up.railway.app",m=Ze(),{selectedBudget:v}=qe(m),o=ye(),b=o.currentRoute.value,d=P(b.query.fromSubBudgets==="true"),{isLoading:f,isFetching:y,orders:x,purchaseOrderType:q}=Ee({fromSubBudgets:d,selectedBudget:v}),S=[{name:"consecutiveId",label:"ID",field:"consecutiveId",sortable:!1,required:!0},{name:"area",field:C=>{var s,i;return(i=(s=C.requisition)==null?void 0:s.area)==null?void 0:i.name},label:"Departamento",sortable:!0,align:"left"},{name:"event",field:"event",label:"Evento",sortable:!1,align:"left"},{name:"order_number",field:"order_number",label:"N\xFAmero de orden de compra",align:"center",sortable:!0},{name:"reception_date",field:"reception_date",label:"Fecha de recepci\xF3n",sortable:!0,align:"left"},{name:"requisition",field:C=>{var s;return(s=C.requisition)==null?void 0:s.requisition_number},label:"Requisici\xF3n",sortable:!0,align:"center"},{name:"file",field:"file",label:"Archivo",sortable:!1,align:"left"},{name:"actions",field:"actions",label:"Acciones",sortable:!1,align:"center"}],w=P(!1),c=P(1),h=P(["area","order_number","reception_date","requisition","file","actions"]),F=P(""),a=P(!1),{deletePurchaseOrder:l,isDeleteingPurchaseOrder:I}=Ne({fromSubBudgets:d}),k=P(void 0);Se(()=>{d.value&&h.value.splice(1,0,"event")}),Pe(d,C=>{o.replace({query:{...b.query,fromSubBudgets:C.toString()}}),C?h.value.splice(1,0,"event"):h.value.splice(1,1)});const V=_(()=>q.value===""?"Selecciona un tipo de orden de compra":q.value==="PRESUPUESTO"?"Presupuesto":"SubPresupuesto");function g(C){q.value=C,c.value=2}function n(C){k.value=C,a.value=!0}async function E(){const C=d.value?"RequisitionSubBudgetEntity":"RequisitionEntity";await l({id:k.value,requisitionType:C}),N()}function N(){k.value=void 0,a.value=!1}return(C,s)=>(B(),$(ke,null,{default:r(()=>[t(Te,null,{"card-body":r(()=>[t(xe,{columns:S,filter:F.value,loading:Q(f)||Q(y),pagination:{rowsPerPage:20},rows:Q(x),"visible-columns":h.value,"wrap-cells":""},{top:r(()=>[he("div",nt," \xD3rdenes de compra/"+D(d.value?"SubPresupuestos":"Presupuestos"),1),t(ie),t(ue,{modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=i=>d.value=i),class:"tw-mr-4",label:"Mostrar las \xF3rdenes de compra de los SubPresupuestos"},null,8,["modelValue"]),t(oe,{modelValue:F.value,"onUpdate:modelValue":s[1]||(s[1]=i=>F.value=i),class:"q-mr-xs",clearable:"",debounce:"300",dense:"",outlined:"",placeholder:"Buscar"},{append:r(()=>[t(W,{name:"search"})]),_:1},8,["modelValue"]),t(U,{color:"primary",label:"Nueva orden de compra",onClick:s[2]||(s[2]=i=>w.value=!0)})]),"body-cell-consecutiveId":r(i=>[t(H,{props:i},{default:r(()=>[T(D((i.rowIndex+1).toString()),1)]),_:2},1032,["props"])]),"body-cell-file":r(i=>[t(H,{props:i},{default:r(()=>[i.value?(B(),$(Je,{key:0,"file-url":`${Q(u)}/api/files/purchase-orders/${i.row.id}/${i.value}`},null,8,["file-url"])):M("",!0)]),_:2},1032,["props"])]),"body-cell-actions":r(i=>[t(H,{props:i},{default:r(()=>[t(U,{color:"negative",flat:"",icon:"delete",round:"",onClick:it=>n(i.row.id)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["filter","loading","rows","visible-columns"])]),footer:r(()=>[t(Xe,{modelValue:w.value,"onUpdate:modelValue":s[7]||(s[7]=i=>w.value=i),"card-title":"Orden de Compra",class:"form-purchase-order"},{default:r(()=>[t(at,{modelValue:c.value,"onUpdate:modelValue":s[6]||(s[6]=i=>c.value=i),animated:"",color:"primary",vertical:""},{default:r(()=>[t(te,{done:c.value>1,icon:"settings",name:1,title:"Selecciona un tipo de orden de compra"},{default:r(()=>[t(Z,{class:"tw-flex tw-gap-1"},{default:r(()=>[t(U,{color:"primary",label:"Presupuesto",outline:"",onClick:s[3]||(s[3]=i=>g("PRESUPUESTO"))}),t(U,{color:"primary",label:"SubPresupuesto",outline:"",onClick:s[4]||(s[4]=i=>g("SUBPRESUPUESTO"))})]),_:1})]),_:1},8,["done"]),t(te,{caption:Q(V),done:c.value>2,icon:"create_new_folder",name:2,title:"Crear Orden de Compra"},{default:r(()=>[t(De,{bordered:"",flat:""},{default:r(()=>[t(lt)]),_:1}),t(Z,null,{default:r(()=>[t(U,{color:"primary",flat:"",label:"atr\xE1s",onClick:s[5]||(s[5]=i=>{c.value=1,q.value=""})})]),_:1})]),_:1},8,["caption","done"])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),t(Ye,{modelValue:a.value,"onUpdate:modelValue":s[8]||(s[8]=i=>a.value=i),"card-title":"\xBFDesea eliminar la orden de compra?",deleting:Q(I),onConfirmDelete:E},null,8,["modelValue","deleting"])]),_:1})]),_:1}))}});export{Jt as default};
