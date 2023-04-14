import{c as s,v as Be,r as k,w as A,h as u,$ as G,x as it,g as Ae,J as Ie,X as T,aM as st,a2 as ct,ah as dt,ax as vt}from"./index.764f91da.js";import{u as ft,a as mt}from"./use-dark.8941baf2.js";import{a as ht,i as yt,h as gt}from"./layout.885dabeb.js";import{t as _t,_ as bt,a as Ee,f as xt,g as wt,j as be}from"./date.dcb0b78e.js";import{p as N,t as Dt,y as Ct,Q as Mt,D as qt,E as kt}from"./format.5c717855.js";import{Q as Ht}from"./QChip.24db411d.js";function St(){const a=new Map;return{getCache:function(v,f){return a[v]===void 0?a[v]=f:a[v]},getCacheWithFn:function(v,f){return a[v]===void 0?a[v]=f():a[v]}}}const Vt=["gregorian","persian"],Yt={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:a=>Vt.includes(a),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},jt=["update:modelValue"];function I(a){return a.year+"/"+N(a.month)+"/"+N(a.day)}function Ot(a,v){const f=s(()=>a.disable!==!0&&a.readonly!==!0),M=s(()=>a.editable===!0?0:-1),_=s(()=>{const m=[];return a.color!==void 0&&m.push(`bg-${a.color}`),a.textColor!==void 0&&m.push(`text-${a.textColor}`),m.join(" ")});function R(){return a.locale!==void 0?{...v.lang.date,...a.locale}:v.lang.date}function b(m){const Y=new Date,j=m===!0?null:0;if(a.calendar==="persian"){const S=_t(Y);return{year:S.jy,month:S.jm,day:S.jd}}return{year:Y.getFullYear(),month:Y.getMonth()+1,day:Y.getDate(),hour:j,minute:j,second:j,millisecond:j}}return{editable:f,tabindex:M,headerClass:_,getLocale:R,getCurrentDate:b}}const B=20,Tt=["Calendar","Years","Months"],Pe=a=>Tt.includes(a),xe=a=>/^-?[\d]+\/[0-1]\d$/.test(a),K=" \u2014 ";function E(a){return a.year+"/"+N(a.month)}var At=Be({name:"QDate",props:{...Yt,...ht,...ft,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:xe},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:xe},navigationMaxYearMonth:{type:String,validator:xe},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:Pe}},emits:[...jt,"rangeStart","rangeEnd","navigation"],setup(a,{slots:v,emit:f}){const{proxy:M}=Ae(),{$q:_}=M,R=mt(a,_),{getCache:b}=St(),{tabindex:m,headerClass:Y,getLocale:j,getCurrentDate:S}=Ot(a,_);let V;const oe=yt(a),re=gt(oe),z=k(null),h=k(Se()),y=k(j()),Ne=s(()=>Se()),Re=s(()=>j()),O=s(()=>S()),i=k(Ve(h.value,y.value)),C=k(a.defaultView),we=_.lang.rtl===!0?"right":"left",X=k(we.value),ue=k(we.value),ie=i.value.year,Z=k(ie-ie%B-(ie<0?B:0)),x=k(null),Qe=s(()=>{const e=a.landscape===!0?"landscape":"portrait";return`q-date q-date--${e} q-date--${e}-${a.minimal===!0?"minimal":"standard"}`+(R.value===!0?" q-date--dark q-dark":"")+(a.bordered===!0?" q-date--bordered":"")+(a.square===!0?" q-date--square no-border-radius":"")+(a.flat===!0?" q-date--flat no-shadow":"")+(a.disable===!0?" disabled":a.readonly===!0?" q-date--readonly":"")}),P=s(()=>a.color||"primary"),Q=s(()=>a.textColor||"white"),ee=s(()=>a.emitImmediately===!0&&a.multiple!==!0&&a.range!==!0),se=s(()=>Array.isArray(a.modelValue)===!0?a.modelValue:a.modelValue!==null&&a.modelValue!==void 0?[a.modelValue]:[]),H=s(()=>se.value.filter(e=>typeof e=="string").map(e=>fe(e,h.value,y.value)).filter(e=>e.dateHash!==null&&e.day!==null&&e.month!==null&&e.year!==null)),L=s(()=>{const e=t=>fe(t,h.value,y.value);return se.value.filter(t=>st(t)===!0&&t.from!==void 0&&t.to!==void 0).map(t=>({from:e(t.from),to:e(t.to)})).filter(t=>t.from.dateHash!==null&&t.to.dateHash!==null&&t.from.dateHash<t.to.dateHash)}),te=s(()=>a.calendar!=="persian"?e=>new Date(e.year,e.month-1,e.day):e=>{const t=Ee(e.year,e.month,e.day);return new Date(t.gy,t.gm-1,t.gd)}),ce=s(()=>a.calendar==="persian"?I:(e,t,n)=>xt(new Date(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond),t===void 0?h.value:t,n===void 0?y.value:n,e.year,e.timezoneOffset)),J=s(()=>H.value.length+L.value.reduce((e,t)=>e+1+wt(te.value(t.to),te.value(t.from)),0)),De=s(()=>{if(a.title!==void 0&&a.title!==null&&a.title.length>0)return a.title;if(x.value!==null){const n=x.value.init,o=te.value(n);return y.value.daysShort[o.getDay()]+", "+y.value.monthsShort[n.month-1]+" "+n.day+K+"?"}if(J.value===0)return K;if(J.value>1)return`${J.value} ${y.value.pluralDay}`;const e=H.value[0],t=te.value(e);return isNaN(t.valueOf())===!0?K:y.value.headerTitle!==void 0?y.value.headerTitle(t,e):y.value.daysShort[t.getDay()]+", "+y.value.monthsShort[e.month-1]+" "+e.day}),Le=s(()=>H.value.concat(L.value.map(t=>t.from)).sort((t,n)=>t.year-n.year||t.month-n.month)[0]),pe=s(()=>H.value.concat(L.value.map(t=>t.to)).sort((t,n)=>n.year-t.year||n.month-t.month)[0]),Ce=s(()=>{if(a.subtitle!==void 0&&a.subtitle!==null&&a.subtitle.length>0)return a.subtitle;if(J.value===0)return K;if(J.value>1){const e=Le.value,t=pe.value,n=y.value.monthsShort;return n[e.month-1]+(e.year!==t.year?" "+e.year+K+n[t.month-1]+" ":e.month!==t.month?K+n[t.month-1]:"")+" "+t.year}return H.value[0].year}),ae=s(()=>{const e=[_.iconSet.datetime.arrowLeft,_.iconSet.datetime.arrowRight];return _.lang.rtl===!0?e.reverse():e}),Me=s(()=>a.firstDayOfWeek!==void 0?Number(a.firstDayOfWeek):y.value.firstDayOfWeek),We=s(()=>{const e=y.value.daysShort,t=Me.value;return t>0?e.slice(t,7).concat(e.slice(0,t)):e}),F=s(()=>{const e=i.value;return a.calendar!=="persian"?new Date(e.year,e.month,0).getDate():be(e.year,e.month)}),Ke=s(()=>typeof a.eventColor=="function"?a.eventColor:()=>a.eventColor),w=s(()=>{if(a.navigationMinYearMonth===void 0)return null;const e=a.navigationMinYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),D=s(()=>{if(a.navigationMaxYearMonth===void 0)return null;const e=a.navigationMaxYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),de=s(()=>{const e={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return w.value!==null&&w.value.year>=i.value.year&&(e.year.prev=!1,w.value.year===i.value.year&&w.value.month>=i.value.month&&(e.month.prev=!1)),D.value!==null&&D.value.year<=i.value.year&&(e.year.next=!1,D.value.year===i.value.year&&D.value.month<=i.value.month&&(e.month.next=!1)),e}),ne=s(()=>{const e={};return H.value.forEach(t=>{const n=E(t);e[n]===void 0&&(e[n]=[]),e[n].push(t.day)}),e}),qe=s(()=>{const e={};return L.value.forEach(t=>{const n=E(t.from),o=E(t.to);if(e[n]===void 0&&(e[n]=[]),e[n].push({from:t.from.day,to:n===o?t.to.day:void 0,range:t}),n<o){let l;const{year:d,month:r}=t.from,c=r<12?{year:d,month:r+1}:{year:d+1,month:1};for(;(l=E(c))<=o;)e[l]===void 0&&(e[l]=[]),e[l].push({from:void 0,to:l===o?t.to.day:void 0,range:t}),c.month++,c.month>12&&(c.year++,c.month=1)}}),e}),U=s(()=>{if(x.value===null)return;const{init:e,initHash:t,final:n,finalHash:o}=x.value,[l,d]=t<=o?[e,n]:[n,e],r=E(l),c=E(d);if(r!==q.value&&c!==q.value)return;const g={};return r===q.value?(g.from=l.day,g.includeFrom=!0):g.from=1,c===q.value?(g.to=d.day,g.includeTo=!0):g.to=F.value,g}),q=s(()=>E(i.value)),ze=s(()=>{const e={};if(a.options===void 0){for(let n=1;n<=F.value;n++)e[n]=!0;return e}const t=typeof a.options=="function"?a.options:n=>a.options.includes(n);for(let n=1;n<=F.value;n++){const o=q.value+"/"+N(n);e[n]=t(o)}return e}),Je=s(()=>{const e={};if(a.events===void 0)for(let t=1;t<=F.value;t++)e[t]=!1;else{const t=typeof a.events=="function"?a.events:n=>a.events.includes(n);for(let n=1;n<=F.value;n++){const o=q.value+"/"+N(n);e[n]=t(o)===!0&&Ke.value(o)}}return e}),Ue=s(()=>{let e,t;const{year:n,month:o}=i.value;if(a.calendar!=="persian")e=new Date(n,o-1,1),t=new Date(n,o-1,0).getDate();else{const l=Ee(n,o,1);e=new Date(l.gy,l.gm-1,l.gd);let d=o-1,r=n;d===0&&(d=12,r--),t=be(r,d)}return{days:e.getDay()-Me.value-1,endDay:t}}),ke=s(()=>{const e=[],{days:t,endDay:n}=Ue.value,o=t<0?t+7:t;if(o<6)for(let r=n-o;r<=n;r++)e.push({i:r,fill:!0});const l=e.length;for(let r=1;r<=F.value;r++){const c={i:r,event:Je.value[r],classes:[]};ze.value[r]===!0&&(c.in=!0,c.flat=!0),e.push(c)}if(ne.value[q.value]!==void 0&&ne.value[q.value].forEach(r=>{const c=l+r-1;Object.assign(e[c],{selected:!0,unelevated:!0,flat:!1,color:P.value,textColor:Q.value})}),qe.value[q.value]!==void 0&&qe.value[q.value].forEach(r=>{if(r.from!==void 0){const c=l+r.from-1,g=l+(r.to||F.value)-1;for(let _e=c;_e<=g;_e++)Object.assign(e[_e],{range:r.range,unelevated:!0,color:P.value,textColor:Q.value});Object.assign(e[c],{rangeFrom:!0,flat:!1}),r.to!==void 0&&Object.assign(e[g],{rangeTo:!0,flat:!1})}else if(r.to!==void 0){const c=l+r.to-1;for(let g=l;g<=c;g++)Object.assign(e[g],{range:r.range,unelevated:!0,color:P.value,textColor:Q.value});Object.assign(e[c],{flat:!1,rangeTo:!0})}else{const c=l+F.value-1;for(let g=l;g<=c;g++)Object.assign(e[g],{range:r.range,unelevated:!0,color:P.value,textColor:Q.value})}}),U.value!==void 0){const r=l+U.value.from-1,c=l+U.value.to-1;for(let g=r;g<=c;g++)e[g].color=P.value,e[g].editRange=!0;U.value.includeFrom===!0&&(e[r].editRangeFrom=!0),U.value.includeTo===!0&&(e[c].editRangeTo=!0)}i.value.year===O.value.year&&i.value.month===O.value.month&&(e[l+O.value.day-1].today=!0);const d=e.length%7;if(d>0){const r=7-d;for(let c=1;c<=r;c++)e.push({i:c,fill:!0})}return e.forEach(r=>{let c="q-date__calendar-item ";r.fill===!0?c+="q-date__calendar-item--fill":(c+=`q-date__calendar-item--${r.in===!0?"in":"out"}`,r.range!==void 0&&(c+=` q-date__range${r.rangeTo===!0?"-to":r.rangeFrom===!0?"-from":""}`),r.editRange===!0&&(c+=` q-date__edit-range${r.editRangeFrom===!0?"-from":""}${r.editRangeTo===!0?"-to":""}`),(r.range!==void 0||r.editRange===!0)&&(c+=` text-${r.color}`)),r.classes=c}),e}),Ge=s(()=>a.disable===!0?{"aria-disabled":"true"}:a.readonly===!0?{"aria-readonly":"true"}:{});A(()=>a.modelValue,e=>{if(V===e)V=0;else{const{year:t,month:n}=Ve(h.value,y.value);p(t,n)}}),A(C,()=>{z.value!==null&&M.$el.contains(document.activeElement)===!0&&z.value.focus()}),A(()=>i.value.year,e=>{f("navigation",{year:e,month:i.value.month})}),A(()=>i.value.month,e=>{f("navigation",{year:i.value.year,month:e})}),A(Ne,e=>{Fe(e,y.value,"mask"),h.value=e}),A(Re,e=>{Fe(h.value,e,"locale"),y.value=e});function He(){const e=O.value,t=ne.value[E(e)];(t===void 0||t.includes(e.day)===!1)&&he(e),ve(e.year,e.month)}function Xe(e){Pe(e)===!0&&(C.value=e)}function Ze(e,t){["month","year"].includes(e)&&(e==="month"?je:me)(t===!0?-1:1)}function ve(e,t){C.value="Calendar",p(e,t)}function et(e,t){if(a.range===!1||!e){x.value=null;return}const n=Object.assign({...i.value},e),o=t!==void 0?Object.assign({...i.value},t):n;x.value={init:n,initHash:I(n),final:o,finalHash:I(o)},ve(n.year,n.month)}function Se(){return a.calendar==="persian"?"YYYY/MM/DD":a.mask}function fe(e,t,n){return bt(e,t,n,a.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Ve(e,t){const n=Array.isArray(a.modelValue)===!0?a.modelValue:a.modelValue?[a.modelValue]:[];if(n.length===0)return Ye();const o=n[n.length-1],l=fe(o.from!==void 0?o.from:o,e,t);return l.dateHash===null?Ye():l}function Ye(){let e,t;if(a.defaultYearMonth!==void 0){const n=a.defaultYearMonth.split("/");e=parseInt(n[0],10),t=parseInt(n[1],10)}else{const n=O.value!==void 0?O.value:S();e=n.year,t=n.month}return{year:e,month:t,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:e+"/"+N(t)+"/01"}}function je(e){let t=i.value.year,n=Number(i.value.month)+e;n===13?(n=1,t++):n===0&&(n=12,t--),p(t,n),ee.value===!0&&le("month")}function me(e){const t=Number(i.value.year)+e;p(t,i.value.month),ee.value===!0&&le("year")}function tt(e){p(e,i.value.month),C.value=a.defaultView==="Years"?"Months":"Calendar",ee.value===!0&&le("year")}function at(e){p(i.value.year,e),C.value="Calendar",ee.value===!0&&le("month")}function nt(e,t){const n=ne.value[t];(n!==void 0&&n.includes(e.day)===!0?ye:he)(e)}function $(e){return{year:e.year,month:e.month,day:e.day}}function p(e,t){w.value!==null&&e<=w.value.year&&(e=w.value.year,t<w.value.month&&(t=w.value.month)),D.value!==null&&e>=D.value.year&&(e=D.value.year,t>D.value.month&&(t=D.value.month));const n=e+"/"+N(t)+"/01";n!==i.value.dateHash&&(X.value=i.value.dateHash<n==(_.lang.rtl!==!0)?"left":"right",e!==i.value.year&&(ue.value=X.value),Ie(()=>{Z.value=e-e%B-(e<0?B:0),Object.assign(i.value,{year:e,month:t,day:1,dateHash:n})}))}function Oe(e,t,n){const o=e!==null&&e.length===1&&a.multiple===!1?e[0]:e;V=o;const{reason:l,details:d}=Te(t,n);f("update:modelValue",o,l,d)}function le(e){const t=H.value[0]!==void 0&&H.value[0].dateHash!==null?{...H.value[0]}:{...i.value};Ie(()=>{t.year=i.value.year,t.month=i.value.month;const n=a.calendar!=="persian"?new Date(t.year,t.month,0).getDate():be(t.year,t.month);t.day=Math.min(Math.max(1,t.day),n);const o=W(t);V=o;const{details:l}=Te("",t);f("update:modelValue",o,e,l)})}function Te(e,t){return t.from!==void 0?{reason:`${e}-range`,details:{...$(t.target),from:$(t.from),to:$(t.to)}}:{reason:`${e}-day`,details:$(t)}}function W(e,t,n){return e.from!==void 0?{from:ce.value(e.from,t,n),to:ce.value(e.to,t,n)}:ce.value(e,t,n)}function he(e){let t;if(a.multiple===!0)if(e.from!==void 0){const n=I(e.from),o=I(e.to),l=H.value.filter(r=>r.dateHash<n||r.dateHash>o),d=L.value.filter(({from:r,to:c})=>c.dateHash<n||r.dateHash>o);t=l.concat(d).concat(e).map(r=>W(r))}else{const n=se.value.slice();n.push(W(e)),t=n}else t=W(e);Oe(t,"add",e)}function ye(e){if(a.noUnset===!0)return;let t=null;if(a.multiple===!0&&Array.isArray(a.modelValue)===!0){const n=W(e);e.from!==void 0?t=a.modelValue.filter(o=>o.from!==void 0?o.from!==n.from&&o.to!==n.to:!0):t=a.modelValue.filter(o=>o!==n),t.length===0&&(t=null)}Oe(t,"remove",e)}function Fe(e,t,n){const o=H.value.concat(L.value).map(l=>W(l,e,t)).filter(l=>l.from!==void 0?l.from.dateHash!==null&&l.to.dateHash!==null:l.dateHash!==null);f("update:modelValue",(a.multiple===!0?o:o[0])||null,n)}function lt(){if(a.minimal!==!0)return u("div",{class:"q-date__header "+Y.value},[u("div",{class:"relative-position"},[u(G,{name:"q-transition--fade"},()=>u("div",{key:"h-yr-"+Ce.value,class:"q-date__header-subtitle q-date__header-link "+(C.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:m.value,...b("vY",{onClick(){C.value="Years"},onKeyup(e){e.keyCode===13&&(C.value="Years")}})},[Ce.value]))]),u("div",{class:"q-date__header-title relative-position flex no-wrap"},[u("div",{class:"relative-position col"},[u(G,{name:"q-transition--fade"},()=>u("div",{key:"h-sub"+De.value,class:"q-date__header-title-label q-date__header-link "+(C.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:m.value,...b("vC",{onClick(){C.value="Calendar"},onKeyup(e){e.keyCode===13&&(C.value="Calendar")}})},[De.value]))]),a.todayBtn===!0?u(T,{class:"q-date__header-today self-start",icon:_.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:m.value,onClick:He}):null])])}function ge({label:e,type:t,key:n,dir:o,goTo:l,boundaries:d,cls:r}){return[u("div",{class:"row items-center q-date__arrow"},[u(T,{round:!0,dense:!0,size:"sm",flat:!0,icon:ae.value[0],tabindex:m.value,disable:d.prev===!1,...b("go-#"+t,{onClick(){l(-1)}})})]),u("div",{class:"relative-position overflow-hidden flex flex-center"+r},[u(G,{name:"q-transition--jump-"+o},()=>u("div",{key:n},[u(T,{flat:!0,dense:!0,noCaps:!0,label:e,tabindex:m.value,...b("view#"+t,{onClick:()=>{C.value=t}})})]))]),u("div",{class:"row items-center q-date__arrow"},[u(T,{round:!0,dense:!0,size:"sm",flat:!0,icon:ae.value[1],tabindex:m.value,disable:d.next===!1,...b("go+#"+t,{onClick(){l(1)}})})])]}const ot={Calendar:()=>[u("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[u("div",{class:"q-date__navigation row items-center no-wrap"},ge({label:y.value.months[i.value.month-1],type:"Months",key:i.value.month,dir:X.value,goTo:je,boundaries:de.value.month,cls:" col"}).concat(ge({label:i.value.year,type:"Years",key:i.value.year,dir:ue.value,goTo:me,boundaries:de.value.year,cls:""}))),u("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},We.value.map(e=>u("div",{class:"q-date__calendar-item"},[u("div",e)]))),u("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[u(G,{name:"q-transition--slide-"+X.value},()=>u("div",{key:q.value,class:"q-date__calendar-days fit"},ke.value.map(e=>u("div",{class:e.classes},[e.in===!0?u(T,{class:e.today===!0?"q-date__today":"",dense:!0,flat:e.flat,unelevated:e.unelevated,color:e.color,textColor:e.textColor,label:e.i,tabindex:m.value,...b("day#"+e.i,{onClick:()=>{rt(e.i)},onMouseover:()=>{ut(e.i)}})},e.event!==!1?()=>u("div",{class:"q-date__event bg-"+e.event}):null):u("div",""+e.i)]))))])])],Months(){const e=i.value.year===O.value.year,t=o=>w.value!==null&&i.value.year===w.value.year&&w.value.month>o||D.value!==null&&i.value.year===D.value.year&&D.value.month<o,n=y.value.monthsShort.map((o,l)=>{const d=i.value.month===l+1;return u("div",{class:"q-date__months-item flex flex-center"},[u(T,{class:e===!0&&O.value.month===l+1?"q-date__today":null,flat:d!==!0,label:o,unelevated:d,color:d===!0?P.value:null,textColor:d===!0?Q.value:null,tabindex:m.value,disable:t(l+1),...b("month#"+l,{onClick:()=>{at(l+1)}})})])});return a.yearsInMonthView===!0&&n.unshift(u("div",{class:"row no-wrap full-width"},[ge({label:i.value.year,type:"Years",key:i.value.year,dir:ue.value,goTo:me,boundaries:de.value.year,cls:" col"})])),u("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},n)},Years(){const e=Z.value,t=e+B,n=[],o=l=>w.value!==null&&w.value.year>l||D.value!==null&&D.value.year<l;for(let l=e;l<=t;l++){const d=i.value.year===l;n.push(u("div",{class:"q-date__years-item flex flex-center"},[u(T,{key:"yr"+l,class:O.value.year===l?"q-date__today":null,flat:!d,label:l,dense:!0,unelevated:d,color:d===!0?P.value:null,textColor:d===!0?Q.value:null,tabindex:m.value,disable:o(l),...b("yr#"+l,{onClick:()=>{tt(l)}})})]))}return u("div",{class:"q-date__view q-date__years flex flex-center"},[u("div",{class:"col-auto"},[u(T,{round:!0,dense:!0,flat:!0,icon:ae.value[0],tabindex:m.value,disable:o(e),...b("y-",{onClick:()=>{Z.value-=B}})})]),u("div",{class:"q-date__years-content col self-stretch row items-center"},n),u("div",{class:"col-auto"},[u(T,{round:!0,dense:!0,flat:!0,icon:ae.value[1],tabindex:m.value,disable:o(t),...b("y+",{onClick:()=>{Z.value+=B}})})])])}};function rt(e){const t={...i.value,day:e};if(a.range===!1){nt(t,q.value);return}if(x.value===null){const n=ke.value.find(l=>l.fill!==!0&&l.i===e);if(a.noUnset!==!0&&n.range!==void 0){ye({target:t,from:n.range.from,to:n.range.to});return}if(n.selected===!0){ye(t);return}const o=I(t);x.value={init:t,initHash:o,final:t,finalHash:o},f("rangeStart",$(t))}else{const n=x.value.initHash,o=I(t),l=n<=o?{from:x.value.init,to:t}:{from:t,to:x.value.init};x.value=null,he(n===o?t:{target:t,...l}),f("rangeEnd",{from:$(l.from),to:$(l.to)})}}function ut(e){if(x.value!==null){const t={...i.value,day:e};Object.assign(x.value,{final:t,finalHash:I(t)})}}return Object.assign(M,{setToday:He,setView:Xe,offsetCalendar:Ze,setCalendarTo:ve,setEditingRange:et}),()=>{const e=[u("div",{class:"q-date__content col relative-position"},[u(G,{name:"q-transition--fade"},ot[C.value])])],t=it(v.default);return t!==void 0&&e.push(u("div",{class:"q-date__actions"},t)),a.name!==void 0&&a.disable!==!0&&re(e,"push"),u("div",{class:Qe.value,...Ge.value},[lt(),u("div",{ref:z,class:"q-date__main col column",tabindex:-1},e)])}}}),Nt=Be({name:"QPopupProxy",props:{...Dt,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(a,{slots:v,emit:f,attrs:M}){const{proxy:_}=Ae(),{$q:R}=_,b=k(!1),m=k(null),Y=s(()=>parseInt(a.breakpoint,10)),{canShow:j}=Ct({showing:b});function S(){return R.screen.width<Y.value||R.screen.height<Y.value?"dialog":"menu"}const V=k(S()),oe=s(()=>V.value==="menu"?{maxHeight:"99vh"}:{});A(()=>S(),h=>{b.value!==!0&&(V.value=h)});function re(h){b.value=!0,f("show",h)}function z(h){b.value=!1,V.value=S(),f("hide",h)}return Object.assign(_,{show(h){j(h)===!0&&m.value.show(h)},hide(h){m.value.hide(h)},toggle(h){m.value.toggle(h)}}),ct(_,"currentComponent",()=>({type:V.value,ref:m.value})),()=>{const h={ref:m,...oe.value,...M,onShow:re,onHide:z};let y;return V.value==="dialog"?y=Ht:(y=Mt,Object.assign(h,{target:a.target,contextMenu:a.contextMenu,noParentEvent:!0,separateClosePopup:!0})),u(y,h,v.default)}}});function $e(a){if(a===!1)return 0;if(a===!0||a===void 0)return 1;const v=parseInt(a,10);return isNaN(v)?0:v}var Rt=dt({name:"close-popup",beforeMount(a,{value:v}){const f={depth:$e(v),handler(M){f.depth!==0&&setTimeout(()=>{const _=qt(a);_!==void 0&&kt(_,M,f.depth)})},handlerKey(M){vt(M,13)===!0&&f.handler(M)}};a.__qclosepopup=f,a.addEventListener("click",f.handler),a.addEventListener("keyup",f.handlerKey)},updated(a,{value:v,oldValue:f}){v!==f&&(a.__qclosepopup.depth=$e(v))},beforeUnmount(a){const v=a.__qclosepopup;a.removeEventListener("click",v.handler),a.removeEventListener("keyup",v.handlerKey),delete a.__qclosepopup}});export{Rt as C,Nt as Q,At as a,St as u};
