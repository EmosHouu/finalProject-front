import{p as z,ae as I,aL as U,g as R,aM as Y,r as M,f as V,b as G,t as w,c as f,F as j,k as T,aN as q,aO as J,aP as L,ar as Q,a as W,X as K,aJ as Z,a3 as p,ad as n,aA as ee,a0 as te,aQ as ae}from"./index-5cee6333.js";import{m as se,V as E}from"./VSlideGroup-c37db485.js";const _=Symbol.for("vuetify:v-tabs"),oe=z({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...I(U({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),le=R()({name:"VTab",props:oe(),setup(e,t){let{slots:s,attrs:g}=t;const{textColorClasses:x,textColorStyles:h}=Y(e,"sliderColor"),r=M(),v=M(),a=V(()=>e.direction==="horizontal"),o=V(()=>{var i,l;return((l=(i=r.value)==null?void 0:i.group)==null?void 0:l.isSelected.value)??!1});function A(i){var k,P;let{value:l}=i;if(l){const S=(P=(k=r.value)==null?void 0:k.$el.parentElement)==null?void 0:P.querySelector(".v-tab--selected .v-tab__slider"),C=v.value;if(!S||!C)return;const D=getComputedStyle(S).color,d=S.getBoundingClientRect(),c=C.getBoundingClientRect(),m=a.value?"x":"y",y=a.value?"X":"Y",B=a.value?"right":"bottom",u=a.value?"width":"height",F=d[m],N=c[m],b=F>N?d[B]-c[B]:d[m]-c[m],O=Math.sign(b)>0?a.value?"right":"bottom":Math.sign(b)<0?a.value?"left":"top":"center",X=(Math.abs(b)+(Math.sign(b)<0?d[u]:c[u]))/Math.max(d[u],c[u])||0,H=d[u]/c[u]||0,$=1.5;J(C,{backgroundColor:[D,"currentcolor"],transform:[`translate${y}(${b}px) scale${y}(${H})`,`translate${y}(${b/$}px) scale${y}(${(X-1)/$+1})`,"none"],transformOrigin:Array(3).fill(O)},{duration:225,easing:L})}}return G(()=>{const i=w.filterProps(e);return f(w,T({symbol:_,ref:r,class:["v-tab",e.class],style:e.style,tabindex:o.value?0:-1,role:"tab","aria-selected":String(o.value),active:!1},i,g,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":A}),{...s,default:()=>{var l;return f(j,null,[((l=s.default)==null?void 0:l.call(s))??e.text,!e.hideSlider&&f("div",{ref:v,class:["v-tab__slider",x.value],style:h.value},null)])}})}),q({},r)}});function ne(e){return e?e.map(t=>ae(t)?t:{text:t,value:t}):[]}const re=z({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...se({mandatory:"force"}),...Q(),...W()},"VTabs"),ue=R()({name:"VTabs",props:re(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;const g=K(e,"modelValue"),x=V(()=>ne(e.items)),{densityClasses:h}=Z(e),{backgroundColorClasses:r,backgroundColorStyles:v}=p(n(e,"bgColor"));return ee({VTab:{color:n(e,"color"),direction:n(e,"direction"),stacked:n(e,"stacked"),fixed:n(e,"fixedTabs"),sliderColor:n(e,"sliderColor"),hideSlider:n(e,"hideSlider")}}),G(()=>{const a=E.filterProps(e);return f(E,T(a,{modelValue:g.value,"onUpdate:modelValue":o=>g.value=o,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},h.value,r.value,e.class],style:[{"--v-tabs-height":te(e.height)},v.value,e.style],role:"tablist",symbol:_}),{default:()=>[s.default?s.default():x.value.map(o=>f(le,T(o,{key:o.text}),null))]})}),{}}});export{ue as V,le as a};
