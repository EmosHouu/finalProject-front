import{aV as X,p as Y,m as W,a as A,ag as G,g as H,ah as O,aB as j,R as F,aW as z,r as S,H as h,a3 as b,S as D,aq as q,c as m,q as w,b as V,aX as k,aY as U,aZ as Z,a_ as J,ar as K,a$ as Q,b0 as N,b1 as p,_ as ee,W as E,G as te}from"./index-bf168c3d.js";import{u as ne}from"./ssrBoot-fe5c3dc7.js";const oe=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:a}=e,u=.5,s=16;e.offsetX=t-o,e.offsetY=a-n,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&t<o-s&&e.left(e),e.right&&t>o+s&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&a<n-s&&e.up(e),e.down&&a>n+s&&e.down(e))};function se(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function ae(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),oe(o)}function ie(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function ue(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>se(t,o),touchend:t=>ae(t,o),touchmove:t=>ie(t,o)}}function ce(e,o){var v;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,a=(t==null?void 0:t.options)??{passive:!0},u=(v=o.instance)==null?void 0:v.$.uid;if(!n||!u)return;const s=ue(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[u]=s,X(s).forEach(r=>{n.addEventListener(r,s[r],a)})}function le(e,o){var u,s;const t=(u=o.value)!=null&&u.parent?e.parentElement:e,n=(s=o.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const a=t._touchHandlers[n];X(a).forEach(v=>{t.removeEventListener(v,a[v])}),delete t._touchHandlers[n]}const R={mounted:ce,unmounted:le},re=R,$=Symbol.for("vuetify:v-window"),P=Symbol.for("vuetify:v-window-group"),ve=Y({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...W(),...A(),...G()},"VWindow"),me=H()({name:"VWindow",directives:{Touch:R},props:ve(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=O(e),{isRtl:a}=j(),{t:u}=F(),s=z(e,P),v=S(),r=h(()=>a.value?!e.reverse:e.reverse),d=b(!1),y=h(()=>{const i=e.direction==="vertical"?"y":"x",f=(r.value?!d.value:d.value)?"-reverse":"";return`v-window-${i}${f}-transition`}),_=b(0),T=S(void 0),g=h(()=>s.items.value.findIndex(i=>s.selected.value.includes(i.id)));D(g,(i,l)=>{const f=s.items.value.length,I=f-1;f<=2?d.value=i<l:i===I&&l===0?d.value=!0:i===0&&l===I?d.value=!1:d.value=i<l}),q($,{transition:y,isReversed:d,transitionCount:_,transitionHeight:T,rootRef:v});const c=h(()=>e.continuous||g.value!==0),x=h(()=>e.continuous||g.value!==s.items.value.length-1);function B(){c.value&&s.prev()}function C(){x.value&&s.next()}const L=h(()=>{const i=[],l={icon:a.value?e.nextIcon:e.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:s.prev,"aria-label":u("$vuetify.carousel.prev")};i.push(c.value?t.prev?t.prev({props:l}):m(w,l,null):m("div",null,null));const f={icon:a.value?e.prevIcon:e.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:s.next,"aria-label":u("$vuetify.carousel.next")};return i.push(x.value?t.next?t.next({props:f}):m(w,f,null):m("div",null,null)),i}),M=h(()=>e.touch===!1?e.touch:{...{left:()=>{r.value?B():C()},right:()=>{r.value?C():B()},start:l=>{let{originalEvent:f}=l;f.stopPropagation()}},...e.touch===!0?{}:e.touch});return V(()=>k(m(e.tag,{ref:v,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var i,l;return[m("div",{class:"v-window__container",style:{height:T.value}},[(i=t.default)==null?void 0:i.call(t,{group:s}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[L.value])]),(l=t.additional)==null?void 0:l.call(t,{group:s})]}}),[[U("touch"),M.value]])),{group:s}}}),de=Y({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...W(),...Z(),...J()},"VWindowItem"),ge=H()({name:"VWindowItem",directives:{Touch:re},props:de(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=K($),a=Q(e,P),{isBooted:u}=ne();if(!n||!a)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=b(!1),v=h(()=>u.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function r(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function d(){var c;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=E((c=n.rootRef.value)==null?void 0:c.clientHeight)),n.transitionCount.value+=1)}function y(){r()}function _(c){s.value&&te(()=>{!v.value||!s.value||!n||(n.transitionHeight.value=E(c.clientHeight))})}const T=h(()=>{const c=n.isReversed.value?e.reverseTransition:e.transition;return v.value?{name:typeof c!="string"?n.transition.value:c,onBeforeEnter:d,onAfterEnter:r,onEnterCancelled:y,onBeforeLeave:d,onAfterLeave:r,onLeaveCancelled:y,onEnter:_}:!1}),{hasContent:g}=N(e,a.isSelected);return V(()=>m(ee,{transition:T.value,disabled:!u.value},{default:()=>{var c;return[k(m("div",{class:["v-window-item",a.selectedClass.value,e.class],style:e.style},[g.value&&((c=t.default)==null?void 0:c.call(t))]),[[p,a.isSelected.value]])]}})),{groupItem:a}}}),ye=(e,o)=>{const t=e.__vccOpts||e;for(const[n,a]of o)t[n]=a;return t};export{me as V,ye as _,ge as a,de as b,ve as m};
