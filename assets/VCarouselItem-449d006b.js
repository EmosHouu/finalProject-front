import{m as b,V as w,b as k,a as h}from"./_plugin-vue_export-helper-63e08e25.js";import{p as I,ae as B,g as y,l as x,af as T,r as _,ag as g,aa as S,b as C,c as t,F,a5 as N,V as W,h as i,ah as $,w as A,ai as L,T as P}from"./index-61b001a0.js";const p=I({color:String,cycle:Boolean,delimiterIcon:{type:B,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...b({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),q=y()({name:"VCarousel",props:p(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const r=x(e,"modelValue"),{t:u}=T(),o=_();let c=-1;g(r,m),g(()=>e.interval,m),g(()=>e.cycle,d=>{d?m():window.clearTimeout(c)}),S(f);function f(){!e.cycle||!o.value||(c=window.setTimeout(o.value.group.next,+e.interval>0?+e.interval:6e3))}function m(){window.clearTimeout(c),window.requestAnimationFrame(f)}return C(()=>{const d=w.filterProps(e);return t(w,i({ref:o},d,{modelValue:r.value,"onUpdate:modelValue":v=>r.value=v,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:A(e.height)},e.style]}),{default:a.default,additional:v=>{let{group:l}=v;return t(F,null,[!e.hideDelimiters&&t("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[l.items.value.length>0&&t(N,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[l.items.value.map((s,D)=>{const V={id:`carousel-item-${s.id}`,"aria-label":u("$vuetify.carousel.ariaLabel.delimiter",D+1,l.items.value.length),class:["v-carousel__controls__item",l.isSelected(s.id)&&"v-btn--active"],onClick:()=>l.select(s.id,!0)};return a.item?a.item({props:V,item:s}):t(W,i(s,V),null)})]})]),e.progress&&t($,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(l.getItemIndex(r.value)+1)/l.items.value.length*100},null)])},prev:a.prev,next:a.next})}),{}}}),M=I({...L(),...k()},"VCarouselItem"),z=y()({name:"VCarouselItem",inheritAttrs:!1,props:M(),setup(e,n){let{slots:a,attrs:r}=n;C(()=>{const u=P.filterProps(e),o=h.filterProps(e);return t(h,i({class:"v-carousel-item"},o),{default:()=>[t(P,i(r,u),a)]})})}});export{z as V,q as a};
