import{p as $,m as A,a as H,g as E,b as R,c as a,aq as L,as as Q,at as W,av as K,a3 as F,ad as g,aL as Z,aM as p,aN as ee,ay as te,ax as ae,a9 as le,f as k,aA as O,B as oe,_ as N,a0 as C,aO as se,ae as ne,aP as ie,aQ as re,r as z,t as D,F as de,k as w,aR as ce,aS as ue,aT as be,ar as ge,X as ve,aJ as me,aU as fe}from"./index-3ca31bb1.js";import{m as he,V as G}from"./VSlideGroup-73a9da84.js";const ye=$({text:String,...A(),...H()},"VToolbarTitle"),xe=E()({name:"VToolbarTitle",props:ye(),setup(e,l){let{slots:t}=l;return R(()=>{const c=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var u;return[c&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(u=t.default)==null?void 0:u.call(t)])]}})}),{}}}),Te=[null,"prominent","default","comfortable","compact"],Ve=$({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Te.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...L(),...A(),...Q(),...W(),...H({tag:"header"}),...K()},"VToolbar"),Ee=E()({name:"VToolbar",props:Ve(),setup(e,l){var V;let{slots:t}=l;const{backgroundColorClasses:c,backgroundColorStyles:u}=F(g(e,"color")),{borderClasses:x}=Z(e),{elevationClasses:b}=p(e),{roundedClasses:m}=ee(e),{themeClasses:s}=te(e),{rtlClasses:i}=ae(),T=le(!!(e.extended||(V=t.extension)!=null&&V.call(t))),n=k(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),o=k(()=>T.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return O({VBtn:{variant:"text"}}),R(()=>{var P;const B=!!(e.title||t.title),S=!!(t.image||e.image),f=(P=t.extension)==null?void 0:P.call(t);return T.value=!!(e.extended||f),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},c.value,x.value,b.value,m.value,s.value,i.value,e.class],style:[u.value,e.style]},{default:()=>[S&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(N,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(oe,{key:"image-img",cover:!0,src:e.image},null)]),a(N,{defaults:{VTabs:{height:C(n.value)}}},{default:()=>{var r,d,v;return[a("div",{class:"v-toolbar__content",style:{height:C(n.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(r=t.prepend)==null?void 0:r.call(t)]),B&&a(xe,{key:"title",text:e.title},{text:t.title}),(d=t.default)==null?void 0:d.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(v=t.append)==null?void 0:v.call(t)])])]}}),a(N,{defaults:{VTabs:{height:C(o.value)}}},{default:()=>[a(se,null,{default:()=>[T.value&&a("div",{class:"v-toolbar__extension",style:{height:C(o.value)}},[f])]})]})]})}),{contentHeight:n,extensionHeight:o}}});const U=Symbol.for("vuetify:v-tabs"),Se=$({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...ne(ie({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Ce=E()({name:"VTab",props:Se(),setup(e,l){let{slots:t,attrs:c}=l;const{textColorClasses:u,textColorStyles:x}=re(e,"sliderColor"),b=z(),m=z(),s=k(()=>e.direction==="horizontal"),i=k(()=>{var n,o;return((o=(n=b.value)==null?void 0:n.group)==null?void 0:o.isSelected.value)??!1});function T(n){var V,B;let{value:o}=n;if(o){const S=(B=(V=b.value)==null?void 0:V.$el.parentElement)==null?void 0:B.querySelector(".v-tab--selected .v-tab__slider"),f=m.value;if(!S||!f)return;const P=getComputedStyle(S).color,r=S.getBoundingClientRect(),d=f.getBoundingClientRect(),v=s.value?"x":"y",_=s.value?"X":"Y",I=s.value?"right":"bottom",h=s.value?"width":"height",X=r[v],q=d[v],y=X>q?r[I]-d[I]:r[v]-d[v],Y=Math.sign(y)>0?s.value?"right":"bottom":Math.sign(y)<0?s.value?"left":"top":"center",j=(Math.abs(y)+(Math.sign(y)<0?r[h]:d[h]))/Math.max(r[h],d[h])||0,J=r[h]/d[h]||0,M=1.5;ue(f,{backgroundColor:[P,"currentcolor"],transform:[`translate${_}(${y}px) scale${_}(${J})`,`translate${_}(${y/M}px) scale${_}(${(j-1)/M+1})`,"none"],transformOrigin:Array(3).fill(Y)},{duration:225,easing:be})}}return R(()=>{const n=D.filterProps(e);return a(D,w({symbol:U,ref:b,class:["v-tab",e.class],style:e.style,tabindex:i.value?0:-1,role:"tab","aria-selected":String(i.value),active:!1},n,c,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":T}),{...t,default:()=>{var o;return a(de,null,[((o=t.default)==null?void 0:o.call(t))??e.text,!e.hideSlider&&a("div",{ref:m,class:["v-tab__slider",u.value],style:x.value},null)])}})}),ce({},b)}});function ke(e){return e?e.map(l=>fe(l)?l:{text:l,value:l}):[]}const Be=$({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...he({mandatory:"force"}),...ge(),...H()},"VTabs"),Re=E()({name:"VTabs",props:Be(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const c=ve(e,"modelValue"),u=k(()=>ke(e.items)),{densityClasses:x}=me(e),{backgroundColorClasses:b,backgroundColorStyles:m}=F(g(e,"bgColor"));return O({VTab:{color:g(e,"color"),direction:g(e,"direction"),stacked:g(e,"stacked"),fixed:g(e,"fixedTabs"),sliderColor:g(e,"sliderColor"),hideSlider:g(e,"hideSlider")}}),R(()=>{const s=G.filterProps(e);return a(G,w(s,{modelValue:c.value,"onUpdate:modelValue":i=>c.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},x.value,b.value,e.class],style:[{"--v-tabs-height":C(e.height)},m.value,e.style],role:"tablist",symbol:U}),{default:()=>[t.default?t.default():u.value.map(i=>a(Ce,w(i,{key:i.text}),null))]})}),{}}});export{Ee as V,Re as a,Ce as b,xe as c};