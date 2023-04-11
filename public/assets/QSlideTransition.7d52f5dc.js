import{v as T,z as w,h as z,$ as L}from"./index.c642270b.js";const m={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},E=Object.keys(m);m.all=!0;function j(i){const e={};for(const d of E)i[d]===!0&&(e[d]=!0);return Object.keys(e).length===0?m:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}function B(i,e){return e.event===void 0&&i.target!==void 0&&i.target.draggable!==!0&&typeof e.handler=="function"&&i.target.nodeName.toUpperCase()!=="INPUT"&&(i.qClonedBy===void 0||i.qClonedBy.indexOf(e.uid)===-1)}var C=T({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(i,{slots:e,emit:d}){let s=!1,f,c,o=null,u=null,r,g;function h(){f&&f(),f=null,s=!1,o!==null&&(clearTimeout(o),o=null),u!==null&&(clearTimeout(u),u=null),c!==void 0&&c.removeEventListener("transitionend",r),r=null}function p(t,n,l){t.style.overflowY="hidden",n!==void 0&&(t.style.height=`${n}px`),t.style.transition=`height ${i.duration}ms cubic-bezier(.25, .8, .50, 1)`,s=!0,f=l}function y(t,n){t.style.overflowY=null,t.style.height=null,t.style.transition=null,h(),n!==g&&d(n)}function v(t,n){let l=0;c=t,s===!0?(h(),l=t.offsetHeight===t.scrollHeight?0:void 0):g="hide",p(t,l,n),o=setTimeout(()=>{o=null,t.style.height=`${t.scrollHeight}px`,r=a=>{u=null,(Object(a)!==a||a.target===t)&&y(t,"show")},t.addEventListener("transitionend",r),u=setTimeout(r,i.duration*1.1)},100)}function b(t,n){let l;c=t,s===!0?h():(g="show",l=t.scrollHeight),p(t,l,n),o=setTimeout(()=>{o=null,t.style.height=0,r=a=>{u=null,(Object(a)!==a||a.target===t)&&y(t,"hide")},t.addEventListener("transitionend",r),u=setTimeout(r,i.duration*1.1)},100)}return w(()=>{s===!0&&h()}),()=>z(L,{css:!1,appear:i.appear,onEnter:v,onLeave:b},e.default)}});export{C as Q,j as g,B as s};
