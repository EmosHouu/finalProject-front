import{p as x,m as y,a as T,g as V,b as k,c as t,aa as R,ac as D,af as I,ag as E,Z as w,a7 as U,ai as $,ak as F,an as W,ah as Z,aB as j,a3 as q,H as h,aD as z,D as A,T as u,W as o,aU as G}from"./index-bf168c3d.js";const J=x({text:String,...y(),...T()},"VToolbarTitle"),K=V()({name:"VToolbarTitle",props:J(),setup(e,n){let{slots:a}=n;return k(()=>{const s=!!(a.default||a.text||e.text);return t(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[s&&t("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(l=a.default)==null?void 0:l.call(a)])]}})}),{}}}),L=[null,"prominent","default","comfortable","compact"],M=x({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>L.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...R(),...y(),...D(),...I(),...T({tag:"header"}),...E()},"VToolbar"),Q=V()({name:"VToolbar",props:M(),setup(e,n){var c;let{slots:a}=n;const{backgroundColorClasses:s,backgroundColorStyles:l}=w(U(e,"color")),{borderClasses:_}=$(e),{elevationClasses:C}=F(e),{roundedClasses:B}=W(e),{themeClasses:P}=Z(e),{rtlClasses:S}=j(),i=q(!!(e.extended||(c=a.extension)!=null&&c.call(a))),d=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),r=h(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return z({VBtn:{variant:"text"}}),k(()=>{var g;const N=!!(e.title||a.title),H=!!(a.image||e.image),m=(g=a.extension)==null?void 0:g.call(a);return i.value=!!(e.extended||m),t(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,_.value,C.value,B.value,P.value,S.value,e.class],style:[l.value,e.style]},{default:()=>[H&&t("div",{key:"image",class:"v-toolbar__image"},[a.image?t(u,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):t(A,{key:"image-img",cover:!0,src:e.image},null)]),t(u,{defaults:{VTabs:{height:o(d.value)}}},{default:()=>{var v,b,f;return[t("div",{class:"v-toolbar__content",style:{height:o(d.value)}},[a.prepend&&t("div",{class:"v-toolbar__prepend"},[(v=a.prepend)==null?void 0:v.call(a)]),N&&t(K,{key:"title",text:e.title},{text:a.title}),(b=a.default)==null?void 0:b.call(a),a.append&&t("div",{class:"v-toolbar__append"},[(f=a.append)==null?void 0:f.call(a)])])]}}),t(u,{defaults:{VTabs:{height:o(r.value)}}},{default:()=>[t(G,null,{default:()=>[i.value&&t("div",{class:"v-toolbar__extension",style:{height:o(r.value)}},[m])]})]})]})}),{contentHeight:d,extensionHeight:r}}});export{Q as V,K as a};
