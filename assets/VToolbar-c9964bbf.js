import{p as x,m as y,a as T,g as V,b as k,c as a,X as H,Y as I,Z as E,_ as w,q as D,t as $,$ as q,a0 as F,a1 as U,a2 as X,a3 as Y,a4 as Z,f as h,v as j,a5 as z,a6 as u,w as o,a7 as A}from"./index-8d391943.js";const G=x({text:String,...y(),...T()},"VToolbarTitle"),J=V()({name:"VToolbarTitle",props:G(),setup(e,n){let{slots:t}=n;return k(()=>{const s=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[s&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),K=[null,"prominent","default","comfortable","compact"],L=x({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>K.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...H(),...y(),...I(),...E(),...T({tag:"header"}),...w()},"VToolbar"),O=V()({name:"VToolbar",props:L(),setup(e,n){var c;let{slots:t}=n;const{backgroundColorClasses:s,backgroundColorStyles:l}=D($(e,"color")),{borderClasses:_}=q(e),{elevationClasses:C}=F(e),{roundedClasses:B}=U(e),{themeClasses:P}=X(e),{rtlClasses:S}=Y(),i=Z(!!(e.extended||(c=t.extension)!=null&&c.call(t))),d=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),r=h(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return j({VBtn:{variant:"text"}}),k(()=>{var g;const N=!!(e.title||t.title),R=!!(t.image||e.image),m=(g=t.extension)==null?void 0:g.call(t);return i.value=!!(e.extended||m),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,_.value,C.value,B.value,P.value,S.value,e.class],style:[l.value,e.style]},{default:()=>[R&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(u,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(z,{key:"image-img",cover:!0,src:e.image},null)]),a(u,{defaults:{VTabs:{height:o(d.value)}}},{default:()=>{var v,b,f;return[a("div",{class:"v-toolbar__content",style:{height:o(d.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(v=t.prepend)==null?void 0:v.call(t)]),N&&a(J,{key:"title",text:e.title},{text:t.title}),(b=t.default)==null?void 0:b.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(f=t.append)==null?void 0:f.call(t)])])]}}),a(u,{defaults:{VTabs:{height:o(r.value)}}},{default:()=>[a(A,null,{default:()=>[i.value&&a("div",{class:"v-toolbar__extension",style:{height:o(r.value)}},[m])]})]})]})}),{contentHeight:d,extensionHeight:r}}});export{O as V};
