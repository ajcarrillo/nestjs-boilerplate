import{c as s,v as Ee,r as q,w as P,h as u,$ as X,x as ut,g as Pe,O as Ie,X as j,aQ as it,a2 as st}from"./index.2447aa50.js";import{u as ct,a as vt}from"./use-dark.d5768ce8.js";import{u as dt}from"./ClosePopup.c4620041.js";import{b as ft,o as mt,l as ht}from"./planeacion.api.88477cd4.js";import{t as yt,_ as gt,a as $e,f as bt,g as _t,j as _e}from"./date.5cf3ae7e.js";import{p as A,m as wt,t as xt,i as Dt,Q as Mt}from"./format.267f291d.js";const qt=["gregorian","persian"],Ct={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:n=>qt.includes(n),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},kt=["update:modelValue"];function T(n){return n.year+"/"+A(n.month)+"/"+A(n.day)}function Ht(n,R){const D=s(()=>n.disable!==!0&&n.readonly!==!0),I=s(()=>n.editable===!0?0:-1),g=s(()=>{const d=[];return n.color!==void 0&&d.push(`bg-${n.color}`),n.textColor!==void 0&&d.push(`text-${n.textColor}`),d.join(" ")});function N(){return n.locale!==void 0?{...R.lang.date,...n.locale}:R.lang.date}function y(d){const S=new Date,V=d===!0?null:0;if(n.calendar==="persian"){const k=yt(S);return{year:k.jy,month:k.jm,day:k.jd}}return{year:S.getFullYear(),month:S.getMonth()+1,day:S.getDate(),hour:V,minute:V,second:V,millisecond:V}}return{editable:D,tabindex:I,headerClass:g,getLocale:N,getCurrentDate:y}}const E=20,St=["Calendar","Years","Months"],Be=n=>St.includes(n),we=n=>/^-?[\d]+\/[0-1]\d$/.test(n),J=" \u2014 ";function F(n){return n.year+"/"+A(n.month)}var It=Ee({name:"QDate",props:{...Ct,...ft,...ct,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:we},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:we},navigationMaxYearMonth:{type:String,validator:we},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:Be}},emits:[...kt,"rangeStart","rangeEnd","navigation"],setup(n,{slots:R,emit:D}){const{proxy:I}=Pe(),{$q:g}=I,N=vt(n,g),{getCache:y}=dt(),{tabindex:d,headerClass:S,getLocale:V,getCurrentDate:k}=Ht(n,g);let H;const oe=mt(n),re=ht(oe),U=q(null),f=q(Se()),m=q(V()),Ae=s(()=>Se()),Re=s(()=>V()),Y=s(()=>k()),i=q(Ve(f.value,m.value)),x=q(n.defaultView),xe=g.lang.rtl===!0?"right":"left",Z=q(xe.value),ue=q(xe.value),ie=i.value.year,p=q(ie-ie%E-(ie<0?E:0)),b=q(null),Ne=s(()=>{const e=n.landscape===!0?"landscape":"portrait";return`q-date q-date--${e} q-date--${e}-${n.minimal===!0?"minimal":"standard"}`+(N.value===!0?" q-date--dark q-dark":"")+(n.bordered===!0?" q-date--bordered":"")+(n.square===!0?" q-date--square no-border-radius":"")+(n.flat===!0?" q-date--flat no-shadow":"")+(n.disable===!0?" disabled":n.readonly===!0?" q-date--readonly":"")}),$=s(()=>n.color||"primary"),Q=s(()=>n.textColor||"white"),ee=s(()=>n.emitImmediately===!0&&n.multiple!==!0&&n.range!==!0),se=s(()=>Array.isArray(n.modelValue)===!0?n.modelValue:n.modelValue!==null&&n.modelValue!==void 0?[n.modelValue]:[]),C=s(()=>se.value.filter(e=>typeof e=="string").map(e=>fe(e,f.value,m.value)).filter(e=>e.dateHash!==null&&e.day!==null&&e.month!==null&&e.year!==null)),W=s(()=>{const e=t=>fe(t,f.value,m.value);return se.value.filter(t=>it(t)===!0&&t.from!==void 0&&t.to!==void 0).map(t=>({from:e(t.from),to:e(t.to)})).filter(t=>t.from.dateHash!==null&&t.to.dateHash!==null&&t.from.dateHash<t.to.dateHash)}),te=s(()=>n.calendar!=="persian"?e=>new Date(e.year,e.month-1,e.day):e=>{const t=$e(e.year,e.month,e.day);return new Date(t.gy,t.gm-1,t.gd)}),ce=s(()=>n.calendar==="persian"?T:(e,t,a)=>bt(new Date(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond),t===void 0?f.value:t,a===void 0?m.value:a,e.year,e.timezoneOffset)),K=s(()=>C.value.length+W.value.reduce((e,t)=>e+1+_t(te.value(t.to),te.value(t.from)),0)),De=s(()=>{if(n.title!==void 0&&n.title!==null&&n.title.length>0)return n.title;if(b.value!==null){const a=b.value.init,o=te.value(a);return m.value.daysShort[o.getDay()]+", "+m.value.monthsShort[a.month-1]+" "+a.day+J+"?"}if(K.value===0)return J;if(K.value>1)return`${K.value} ${m.value.pluralDay}`;const e=C.value[0],t=te.value(e);return isNaN(t.valueOf())===!0?J:m.value.headerTitle!==void 0?m.value.headerTitle(t,e):m.value.daysShort[t.getDay()]+", "+m.value.monthsShort[e.month-1]+" "+e.day}),Qe=s(()=>C.value.concat(W.value.map(t=>t.from)).sort((t,a)=>t.year-a.year||t.month-a.month)[0]),We=s(()=>C.value.concat(W.value.map(t=>t.to)).sort((t,a)=>a.year-t.year||a.month-t.month)[0]),Me=s(()=>{if(n.subtitle!==void 0&&n.subtitle!==null&&n.subtitle.length>0)return n.subtitle;if(K.value===0)return J;if(K.value>1){const e=Qe.value,t=We.value,a=m.value.monthsShort;return a[e.month-1]+(e.year!==t.year?" "+e.year+J+a[t.month-1]+" ":e.month!==t.month?J+a[t.month-1]:"")+" "+t.year}return C.value[0].year}),ae=s(()=>{const e=[g.iconSet.datetime.arrowLeft,g.iconSet.datetime.arrowRight];return g.lang.rtl===!0?e.reverse():e}),qe=s(()=>n.firstDayOfWeek!==void 0?Number(n.firstDayOfWeek):m.value.firstDayOfWeek),ze=s(()=>{const e=m.value.daysShort,t=qe.value;return t>0?e.slice(t,7).concat(e.slice(0,t)):e}),O=s(()=>{const e=i.value;return n.calendar!=="persian"?new Date(e.year,e.month,0).getDate():_e(e.year,e.month)}),Le=s(()=>typeof n.eventColor=="function"?n.eventColor:()=>n.eventColor),_=s(()=>{if(n.navigationMinYearMonth===void 0)return null;const e=n.navigationMinYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),w=s(()=>{if(n.navigationMaxYearMonth===void 0)return null;const e=n.navigationMaxYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),ve=s(()=>{const e={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return _.value!==null&&_.value.year>=i.value.year&&(e.year.prev=!1,_.value.year===i.value.year&&_.value.month>=i.value.month&&(e.month.prev=!1)),w.value!==null&&w.value.year<=i.value.year&&(e.year.next=!1,w.value.year===i.value.year&&w.value.month<=i.value.month&&(e.month.next=!1)),e}),ne=s(()=>{const e={};return C.value.forEach(t=>{const a=F(t);e[a]===void 0&&(e[a]=[]),e[a].push(t.day)}),e}),Ce=s(()=>{const e={};return W.value.forEach(t=>{const a=F(t.from),o=F(t.to);if(e[a]===void 0&&(e[a]=[]),e[a].push({from:t.from.day,to:a===o?t.to.day:void 0,range:t}),a<o){let l;const{year:v,month:r}=t.from,c=r<12?{year:v,month:r+1}:{year:v+1,month:1};for(;(l=F(c))<=o;)e[l]===void 0&&(e[l]=[]),e[l].push({from:void 0,to:l===o?t.to.day:void 0,range:t}),c.month++,c.month>12&&(c.year++,c.month=1)}}),e}),G=s(()=>{if(b.value===null)return;const{init:e,initHash:t,final:a,finalHash:o}=b.value,[l,v]=t<=o?[e,a]:[a,e],r=F(l),c=F(v);if(r!==M.value&&c!==M.value)return;const h={};return r===M.value?(h.from=l.day,h.includeFrom=!0):h.from=1,c===M.value?(h.to=v.day,h.includeTo=!0):h.to=O.value,h}),M=s(()=>F(i.value)),Je=s(()=>{const e={};if(n.options===void 0){for(let a=1;a<=O.value;a++)e[a]=!0;return e}const t=typeof n.options=="function"?n.options:a=>n.options.includes(a);for(let a=1;a<=O.value;a++){const o=M.value+"/"+A(a);e[a]=t(o)}return e}),Ue=s(()=>{const e={};if(n.events===void 0)for(let t=1;t<=O.value;t++)e[t]=!1;else{const t=typeof n.events=="function"?n.events:a=>n.events.includes(a);for(let a=1;a<=O.value;a++){const o=M.value+"/"+A(a);e[a]=t(o)===!0&&Le.value(o)}}return e}),Ke=s(()=>{let e,t;const{year:a,month:o}=i.value;if(n.calendar!=="persian")e=new Date(a,o-1,1),t=new Date(a,o-1,0).getDate();else{const l=$e(a,o,1);e=new Date(l.gy,l.gm-1,l.gd);let v=o-1,r=a;v===0&&(v=12,r--),t=_e(r,v)}return{days:e.getDay()-qe.value-1,endDay:t}}),ke=s(()=>{const e=[],{days:t,endDay:a}=Ke.value,o=t<0?t+7:t;if(o<6)for(let r=a-o;r<=a;r++)e.push({i:r,fill:!0});const l=e.length;for(let r=1;r<=O.value;r++){const c={i:r,event:Ue.value[r],classes:[]};Je.value[r]===!0&&(c.in=!0,c.flat=!0),e.push(c)}if(ne.value[M.value]!==void 0&&ne.value[M.value].forEach(r=>{const c=l+r-1;Object.assign(e[c],{selected:!0,unelevated:!0,flat:!1,color:$.value,textColor:Q.value})}),Ce.value[M.value]!==void 0&&Ce.value[M.value].forEach(r=>{if(r.from!==void 0){const c=l+r.from-1,h=l+(r.to||O.value)-1;for(let be=c;be<=h;be++)Object.assign(e[be],{range:r.range,unelevated:!0,color:$.value,textColor:Q.value});Object.assign(e[c],{rangeFrom:!0,flat:!1}),r.to!==void 0&&Object.assign(e[h],{rangeTo:!0,flat:!1})}else if(r.to!==void 0){const c=l+r.to-1;for(let h=l;h<=c;h++)Object.assign(e[h],{range:r.range,unelevated:!0,color:$.value,textColor:Q.value});Object.assign(e[c],{flat:!1,rangeTo:!0})}else{const c=l+O.value-1;for(let h=l;h<=c;h++)Object.assign(e[h],{range:r.range,unelevated:!0,color:$.value,textColor:Q.value})}}),G.value!==void 0){const r=l+G.value.from-1,c=l+G.value.to-1;for(let h=r;h<=c;h++)e[h].color=$.value,e[h].editRange=!0;G.value.includeFrom===!0&&(e[r].editRangeFrom=!0),G.value.includeTo===!0&&(e[c].editRangeTo=!0)}i.value.year===Y.value.year&&i.value.month===Y.value.month&&(e[l+Y.value.day-1].today=!0);const v=e.length%7;if(v>0){const r=7-v;for(let c=1;c<=r;c++)e.push({i:c,fill:!0})}return e.forEach(r=>{let c="q-date__calendar-item ";r.fill===!0?c+="q-date__calendar-item--fill":(c+=`q-date__calendar-item--${r.in===!0?"in":"out"}`,r.range!==void 0&&(c+=` q-date__range${r.rangeTo===!0?"-to":r.rangeFrom===!0?"-from":""}`),r.editRange===!0&&(c+=` q-date__edit-range${r.editRangeFrom===!0?"-from":""}${r.editRangeTo===!0?"-to":""}`),(r.range!==void 0||r.editRange===!0)&&(c+=` text-${r.color}`)),r.classes=c}),e}),Ge=s(()=>n.disable===!0?{"aria-disabled":"true"}:n.readonly===!0?{"aria-readonly":"true"}:{});P(()=>n.modelValue,e=>{if(H===e)H=0;else{const{year:t,month:a}=Ve(f.value,m.value);z(t,a)}}),P(x,()=>{U.value!==null&&I.$el.contains(document.activeElement)===!0&&U.value.focus()}),P(()=>i.value.year,e=>{D("navigation",{year:e,month:i.value.month})}),P(()=>i.value.month,e=>{D("navigation",{year:i.value.year,month:e})}),P(Ae,e=>{Fe(e,m.value,"mask"),f.value=e}),P(Re,e=>{Fe(f.value,e,"locale"),m.value=e});function He(){const e=Y.value,t=ne.value[F(e)];(t===void 0||t.includes(e.day)===!1)&&he(e),de(e.year,e.month)}function Xe(e){Be(e)===!0&&(x.value=e)}function Ze(e,t){["month","year"].includes(e)&&(e==="month"?je:me)(t===!0?-1:1)}function de(e,t){x.value="Calendar",z(e,t)}function pe(e,t){if(n.range===!1||!e){b.value=null;return}const a=Object.assign({...i.value},e),o=t!==void 0?Object.assign({...i.value},t):a;b.value={init:a,initHash:T(a),final:o,finalHash:T(o)},de(a.year,a.month)}function Se(){return n.calendar==="persian"?"YYYY/MM/DD":n.mask}function fe(e,t,a){return gt(e,t,a,n.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Ve(e,t){const a=Array.isArray(n.modelValue)===!0?n.modelValue:n.modelValue?[n.modelValue]:[];if(a.length===0)return Ye();const o=a[a.length-1],l=fe(o.from!==void 0?o.from:o,e,t);return l.dateHash===null?Ye():l}function Ye(){let e,t;if(n.defaultYearMonth!==void 0){const a=n.defaultYearMonth.split("/");e=parseInt(a[0],10),t=parseInt(a[1],10)}else{const a=Y.value!==void 0?Y.value:k();e=a.year,t=a.month}return{year:e,month:t,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:e+"/"+A(t)+"/01"}}function je(e){let t=i.value.year,a=Number(i.value.month)+e;a===13?(a=1,t++):a===0&&(a=12,t--),z(t,a),ee.value===!0&&le("month")}function me(e){const t=Number(i.value.year)+e;z(t,i.value.month),ee.value===!0&&le("year")}function et(e){z(e,i.value.month),x.value=n.defaultView==="Years"?"Months":"Calendar",ee.value===!0&&le("year")}function tt(e){z(i.value.year,e),x.value="Calendar",ee.value===!0&&le("month")}function at(e,t){const a=ne.value[t];(a!==void 0&&a.includes(e.day)===!0?ye:he)(e)}function B(e){return{year:e.year,month:e.month,day:e.day}}function z(e,t){_.value!==null&&e<=_.value.year&&(e=_.value.year,t<_.value.month&&(t=_.value.month)),w.value!==null&&e>=w.value.year&&(e=w.value.year,t>w.value.month&&(t=w.value.month));const a=e+"/"+A(t)+"/01";a!==i.value.dateHash&&(Z.value=i.value.dateHash<a==(g.lang.rtl!==!0)?"left":"right",e!==i.value.year&&(ue.value=Z.value),Ie(()=>{p.value=e-e%E-(e<0?E:0),Object.assign(i.value,{year:e,month:t,day:1,dateHash:a})}))}function Oe(e,t,a){const o=e!==null&&e.length===1&&n.multiple===!1?e[0]:e;H=o;const{reason:l,details:v}=Te(t,a);D("update:modelValue",o,l,v)}function le(e){const t=C.value[0]!==void 0&&C.value[0].dateHash!==null?{...C.value[0]}:{...i.value};Ie(()=>{t.year=i.value.year,t.month=i.value.month;const a=n.calendar!=="persian"?new Date(t.year,t.month,0).getDate():_e(t.year,t.month);t.day=Math.min(Math.max(1,t.day),a);const o=L(t);H=o;const{details:l}=Te("",t);D("update:modelValue",o,e,l)})}function Te(e,t){return t.from!==void 0?{reason:`${e}-range`,details:{...B(t.target),from:B(t.from),to:B(t.to)}}:{reason:`${e}-day`,details:B(t)}}function L(e,t,a){return e.from!==void 0?{from:ce.value(e.from,t,a),to:ce.value(e.to,t,a)}:ce.value(e,t,a)}function he(e){let t;if(n.multiple===!0)if(e.from!==void 0){const a=T(e.from),o=T(e.to),l=C.value.filter(r=>r.dateHash<a||r.dateHash>o),v=W.value.filter(({from:r,to:c})=>c.dateHash<a||r.dateHash>o);t=l.concat(v).concat(e).map(r=>L(r))}else{const a=se.value.slice();a.push(L(e)),t=a}else t=L(e);Oe(t,"add",e)}function ye(e){if(n.noUnset===!0)return;let t=null;if(n.multiple===!0&&Array.isArray(n.modelValue)===!0){const a=L(e);e.from!==void 0?t=n.modelValue.filter(o=>o.from!==void 0?o.from!==a.from&&o.to!==a.to:!0):t=n.modelValue.filter(o=>o!==a),t.length===0&&(t=null)}Oe(t,"remove",e)}function Fe(e,t,a){const o=C.value.concat(W.value).map(l=>L(l,e,t)).filter(l=>l.from!==void 0?l.from.dateHash!==null&&l.to.dateHash!==null:l.dateHash!==null);D("update:modelValue",(n.multiple===!0?o:o[0])||null,a)}function nt(){if(n.minimal!==!0)return u("div",{class:"q-date__header "+S.value},[u("div",{class:"relative-position"},[u(X,{name:"q-transition--fade"},()=>u("div",{key:"h-yr-"+Me.value,class:"q-date__header-subtitle q-date__header-link "+(x.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:d.value,...y("vY",{onClick(){x.value="Years"},onKeyup(e){e.keyCode===13&&(x.value="Years")}})},[Me.value]))]),u("div",{class:"q-date__header-title relative-position flex no-wrap"},[u("div",{class:"relative-position col"},[u(X,{name:"q-transition--fade"},()=>u("div",{key:"h-sub"+De.value,class:"q-date__header-title-label q-date__header-link "+(x.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:d.value,...y("vC",{onClick(){x.value="Calendar"},onKeyup(e){e.keyCode===13&&(x.value="Calendar")}})},[De.value]))]),n.todayBtn===!0?u(j,{class:"q-date__header-today self-start",icon:g.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:d.value,onClick:He}):null])])}function ge({label:e,type:t,key:a,dir:o,goTo:l,boundaries:v,cls:r}){return[u("div",{class:"row items-center q-date__arrow"},[u(j,{round:!0,dense:!0,size:"sm",flat:!0,icon:ae.value[0],tabindex:d.value,disable:v.prev===!1,...y("go-#"+t,{onClick(){l(-1)}})})]),u("div",{class:"relative-position overflow-hidden flex flex-center"+r},[u(X,{name:"q-transition--jump-"+o},()=>u("div",{key:a},[u(j,{flat:!0,dense:!0,noCaps:!0,label:e,tabindex:d.value,...y("view#"+t,{onClick:()=>{x.value=t}})})]))]),u("div",{class:"row items-center q-date__arrow"},[u(j,{round:!0,dense:!0,size:"sm",flat:!0,icon:ae.value[1],tabindex:d.value,disable:v.next===!1,...y("go+#"+t,{onClick(){l(1)}})})])]}const lt={Calendar:()=>[u("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[u("div",{class:"q-date__navigation row items-center no-wrap"},ge({label:m.value.months[i.value.month-1],type:"Months",key:i.value.month,dir:Z.value,goTo:je,boundaries:ve.value.month,cls:" col"}).concat(ge({label:i.value.year,type:"Years",key:i.value.year,dir:ue.value,goTo:me,boundaries:ve.value.year,cls:""}))),u("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},ze.value.map(e=>u("div",{class:"q-date__calendar-item"},[u("div",e)]))),u("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[u(X,{name:"q-transition--slide-"+Z.value},()=>u("div",{key:M.value,class:"q-date__calendar-days fit"},ke.value.map(e=>u("div",{class:e.classes},[e.in===!0?u(j,{class:e.today===!0?"q-date__today":"",dense:!0,flat:e.flat,unelevated:e.unelevated,color:e.color,textColor:e.textColor,label:e.i,tabindex:d.value,...y("day#"+e.i,{onClick:()=>{ot(e.i)},onMouseover:()=>{rt(e.i)}})},e.event!==!1?()=>u("div",{class:"q-date__event bg-"+e.event}):null):u("div",""+e.i)]))))])])],Months(){const e=i.value.year===Y.value.year,t=o=>_.value!==null&&i.value.year===_.value.year&&_.value.month>o||w.value!==null&&i.value.year===w.value.year&&w.value.month<o,a=m.value.monthsShort.map((o,l)=>{const v=i.value.month===l+1;return u("div",{class:"q-date__months-item flex flex-center"},[u(j,{class:e===!0&&Y.value.month===l+1?"q-date__today":null,flat:v!==!0,label:o,unelevated:v,color:v===!0?$.value:null,textColor:v===!0?Q.value:null,tabindex:d.value,disable:t(l+1),...y("month#"+l,{onClick:()=>{tt(l+1)}})})])});return n.yearsInMonthView===!0&&a.unshift(u("div",{class:"row no-wrap full-width"},[ge({label:i.value.year,type:"Years",key:i.value.year,dir:ue.value,goTo:me,boundaries:ve.value.year,cls:" col"})])),u("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},a)},Years(){const e=p.value,t=e+E,a=[],o=l=>_.value!==null&&_.value.year>l||w.value!==null&&w.value.year<l;for(let l=e;l<=t;l++){const v=i.value.year===l;a.push(u("div",{class:"q-date__years-item flex flex-center"},[u(j,{key:"yr"+l,class:Y.value.year===l?"q-date__today":null,flat:!v,label:l,dense:!0,unelevated:v,color:v===!0?$.value:null,textColor:v===!0?Q.value:null,tabindex:d.value,disable:o(l),...y("yr#"+l,{onClick:()=>{et(l)}})})]))}return u("div",{class:"q-date__view q-date__years flex flex-center"},[u("div",{class:"col-auto"},[u(j,{round:!0,dense:!0,flat:!0,icon:ae.value[0],tabindex:d.value,disable:o(e),...y("y-",{onClick:()=>{p.value-=E}})})]),u("div",{class:"q-date__years-content col self-stretch row items-center"},a),u("div",{class:"col-auto"},[u(j,{round:!0,dense:!0,flat:!0,icon:ae.value[1],tabindex:d.value,disable:o(t),...y("y+",{onClick:()=>{p.value+=E}})})])])}};function ot(e){const t={...i.value,day:e};if(n.range===!1){at(t,M.value);return}if(b.value===null){const a=ke.value.find(l=>l.fill!==!0&&l.i===e);if(n.noUnset!==!0&&a.range!==void 0){ye({target:t,from:a.range.from,to:a.range.to});return}if(a.selected===!0){ye(t);return}const o=T(t);b.value={init:t,initHash:o,final:t,finalHash:o},D("rangeStart",B(t))}else{const a=b.value.initHash,o=T(t),l=a<=o?{from:b.value.init,to:t}:{from:t,to:b.value.init};b.value=null,he(a===o?t:{target:t,...l}),D("rangeEnd",{from:B(l.from),to:B(l.to)})}}function rt(e){if(b.value!==null){const t={...i.value,day:e};Object.assign(b.value,{final:t,finalHash:T(t)})}}return Object.assign(I,{setToday:He,setView:Xe,offsetCalendar:Ze,setCalendarTo:de,setEditingRange:pe}),()=>{const e=[u("div",{class:"q-date__content col relative-position"},[u(X,{name:"q-transition--fade"},lt[x.value])])],t=ut(R.default);return t!==void 0&&e.push(u("div",{class:"q-date__actions"},t)),n.name!==void 0&&n.disable!==!0&&re(e,"push"),u("div",{class:Ne.value,...Ge.value},[nt(),u("div",{ref:U,class:"q-date__main col column",tabindex:-1},e)])}}}),$t=Ee({name:"QPopupProxy",props:{...wt,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(n,{slots:R,emit:D,attrs:I}){const{proxy:g}=Pe(),{$q:N}=g,y=q(!1),d=q(null),S=s(()=>parseInt(n.breakpoint,10)),{canShow:V}=xt({showing:y});function k(){return N.screen.width<S.value||N.screen.height<S.value?"dialog":"menu"}const H=q(k()),oe=s(()=>H.value==="menu"?{maxHeight:"99vh"}:{});P(()=>k(),f=>{y.value!==!0&&(H.value=f)});function re(f){y.value=!0,D("show",f)}function U(f){y.value=!1,H.value=k(),D("hide",f)}return Object.assign(g,{show(f){V(f)===!0&&d.value.show(f)},hide(f){d.value.hide(f)},toggle(f){d.value.toggle(f)}}),st(g,"currentComponent",()=>({type:H.value,ref:d.value})),()=>{const f={ref:d,...oe.value,...I,onShow:re,onHide:U};let m;return H.value==="dialog"?m=Dt:(m=Mt,Object.assign(f,{target:n.target,contextMenu:n.contextMenu,noParentEvent:!0,separateClosePopup:!0})),u(m,f,R.default)}}});export{$t as Q,It as a};
