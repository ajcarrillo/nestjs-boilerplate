import{q as b,c as o,h as c,s as Q,v as m,r as p,w as d,x as H,y as T,i as _,z as O,g as $}from"./index.812f81a0.js";import{b as k}from"./QLayout.bb9aeb84.js";var L=b({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:s}){const n=o(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>c("div",{class:n.value},Q(s.default))}}),R=b({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:s}){const n=o(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>c("div",{class:n.value,role:"toolbar"},Q(s.default))}}),S=b({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:s,emit:n}){const{proxy:{$q:v}}=$(),a=_(O,m);if(a===m)return console.error("QHeader needs to be child of QLayout"),m;const f=p(parseInt(t.heightHint,10)),u=p(!0),h=o(()=>t.reveal===!0||a.view.value.indexOf("H")>-1||v.platform.is.ios&&a.isContainer.value===!0),y=o(()=>{if(t.modelValue!==!0)return 0;if(h.value===!0)return u.value===!0?f.value:0;const e=f.value-a.scroll.value.position;return e>0?e:0}),q=o(()=>t.modelValue!==!0||h.value===!0&&u.value!==!0),w=o(()=>t.modelValue===!0&&q.value===!0&&t.reveal===!0),z=o(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(q.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),V=o(()=>{const e=a.rows.value.top,r={};return e[0]==="l"&&a.left.space===!0&&(r[v.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),e[2]==="r"&&a.right.space===!0&&(r[v.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),r});function l(e,r){a.update("header",e,r)}function i(e,r){e.value!==r&&(e.value=r)}function x({height:e}){i(f,e),l("size",e)}function B(e){w.value===!0&&i(u,!0),n("focusin",e)}d(()=>t.modelValue,e=>{l("space",e),i(u,!0),a.animate()}),d(y,e=>{l("offset",e)}),d(()=>t.reveal,e=>{e===!1&&i(u,t.modelValue)}),d(u,e=>{a.animate(),n("reveal",e)}),d(a.scroll,e=>{t.reveal===!0&&i(u,e.direction==="up"||e.position<=t.revealOffset||e.position-e.inflectionPoint<100)});const g={};return a.instances.header=g,t.modelValue===!0&&l("size",f.value),l("space",t.modelValue),l("offset",y.value),H(()=>{a.instances.header===g&&(a.instances.header=void 0,l("size",0),l("offset",0),l("space",!1))}),()=>{const e=T(s.default,[]);return t.elevated===!0&&e.push(c("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(c(k,{debounce:0,onResize:x})),c("header",{class:z.value,style:V.value,onFocusin:B},e)}}});export{R as Q,L as a,S as b};
