import{p as Z,ae as H,m as ee,bS as te,a as le,bP as ae,g as ne,a3 as se,aU as ue,ak as oe,a4 as b,f as S,aV as G,bH as ie,ag as ce,b as re,c as h,aD as $,a9 as D,bE as ve,aP as fe}from"./index-61b001a0.js";function L(a){const s=Math.abs(a);return Math.sign(a)*(s/((1/.501-2)*(1-s)+1))}function q(a){let{selectedElement:d,containerSize:s,contentSize:i,isRtl:x,currentScrollOffset:r,isHorizontal:n}=a;const u=n?d.clientWidth:d.clientHeight,t=n?d.offsetLeft:d.offsetTop,c=x&&n?i-t-u:t,v=s+r,o=u+c,g=u*.4;return c<=r?r=Math.max(c-g,0):v<=o&&(r=Math.min(r-(v-o-g),i-s)),r}function de(a){let{selectedElement:d,containerSize:s,contentSize:i,isRtl:x,isHorizontal:r}=a;const n=r?d.clientWidth:d.clientHeight,u=r?d.offsetLeft:d.offsetTop,t=x&&r?i-u-n/2-s/2:u+n/2-s/2;return Math.min(i-s,Math.max(0,t))}const pe=Symbol.for("vuetify:v-slide-group"),me=Z({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:pe},nextIcon:{type:H,default:"$next"},prevIcon:{type:H,default:"$prev"},showArrows:{type:[Boolean,String],validator:a=>typeof a=="boolean"||["always","desktop","mobile"].includes(a)},...ee(),...te(),...le(),...ae({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Se=ne()({name:"VSlideGroup",props:me(),emits:{"update:modelValue":a=>!0},setup(a,d){let{slots:s}=d;const{isRtl:i}=se(),{displayClasses:x,mobile:r}=ue(a),n=oe(a,a.symbol),u=b(!1),t=b(0),c=b(0),v=b(0),o=S(()=>a.direction==="horizontal"),{resizeRef:g,contentRect:R}=G(),{resizeRef:f,contentRect:k}=G(),A=S(()=>n.selected.value.length?n.items.value.findIndex(e=>e.id===n.selected.value[0]):-1),B=S(()=>n.selected.value.length?n.items.value.findIndex(e=>e.id===n.selected.value[n.selected.value.length-1]):-1);if(ie){let e=-1;ce(()=>[n.selected.value,R.value,k.value,o.value],()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{if(R.value&&k.value){const l=o.value?"width":"height";c.value=R.value[l],v.value=k.value[l],u.value=c.value+1<v.value}if(A.value>=0&&f.value){const l=f.value.children[B.value];A.value===0||!u.value?t.value=0:a.centerActive?t.value=de({selectedElement:l,containerSize:c.value,contentSize:v.value,isRtl:i.value,isHorizontal:o.value}):u.value&&(t.value=q({selectedElement:l,containerSize:c.value,contentSize:v.value,isRtl:i.value,currentScrollOffset:t.value,isHorizontal:o.value}))}})})}const z=b(!1);let I=0,V=0;function N(e){const l=o.value?"clientX":"clientY";V=(i.value&&o.value?-1:1)*t.value,I=e.touches[0][l],z.value=!0}function U(e){if(!u.value)return;const l=o.value?"clientX":"clientY",p=i.value&&o.value?-1:1;t.value=p*(V+I-e.touches[0][l])}function W(e){const l=v.value-c.value;t.value<0||!u.value?t.value=0:t.value>=l&&(t.value=l),z.value=!1}function X(){g.value&&(g.value[o.value?"scrollLeft":"scrollTop"]=0)}const w=b(!1);function Y(e){if(w.value=!0,!(!u.value||!f.value)){for(const l of e.composedPath())for(const p of f.value.children)if(p===l){t.value=q({selectedElement:p,containerSize:c.value,contentSize:v.value,isRtl:i.value,currentScrollOffset:t.value,isHorizontal:o.value});return}}}function K(e){w.value=!1}function j(e){var l;!w.value&&!(e.relatedTarget&&((l=f.value)!=null&&l.contains(e.relatedTarget)))&&m()}function J(e){f.value&&(o.value?e.key==="ArrowRight"?m(i.value?"prev":"next"):e.key==="ArrowLeft"&&m(i.value?"next":"prev"):e.key==="ArrowDown"?m("next"):e.key==="ArrowUp"&&m("prev"),e.key==="Home"?m("first"):e.key==="End"&&m("last"))}function m(e){var l,p,E,F,M;if(f.value)if(!e)(l=ve(f.value)[0])==null||l.focus();else if(e==="next"){const y=(p=f.value.querySelector(":focus"))==null?void 0:p.nextElementSibling;y?y.focus():m("first")}else if(e==="prev"){const y=(E=f.value.querySelector(":focus"))==null?void 0:E.previousElementSibling;y?y.focus():m("last")}else e==="first"?(F=f.value.firstElementChild)==null||F.focus():e==="last"&&((M=f.value.lastElementChild)==null||M.focus())}function P(e){const l=t.value+(e==="prev"?-1:1)*c.value;t.value=fe(l,0,v.value-c.value)}const Q=S(()=>{let e=t.value>v.value-c.value?-(v.value-c.value)+L(v.value-c.value-t.value):-t.value;t.value<=0&&(e=L(-t.value));const l=i.value&&o.value?-1:1;return{transform:`translate${o.value?"X":"Y"}(${l*e}px)`,transition:z.value?"none":"",willChange:z.value?"transform":""}}),T=S(()=>({next:n.next,prev:n.prev,select:n.select,isSelected:n.isSelected})),O=S(()=>{switch(a.showArrows){case"always":return!0;case"desktop":return!r.value;case!0:return u.value||Math.abs(t.value)>0;case"mobile":return r.value||u.value||Math.abs(t.value)>0;default:return!r.value&&(u.value||Math.abs(t.value)>0)}}),_=S(()=>Math.abs(t.value)>0),C=S(()=>v.value>Math.abs(t.value)+c.value);return re(()=>h(a.tag,{class:["v-slide-group",{"v-slide-group--vertical":!o.value,"v-slide-group--has-affixes":O.value,"v-slide-group--is-overflowing":u.value},x.value,a.class],style:a.style,tabindex:w.value||n.selected.value.length?-1:0,onFocus:j},{default:()=>{var e,l,p;return[O.value&&h("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!_.value}],onClick:()=>_.value&&P("prev")},[((e=s.prev)==null?void 0:e.call(s,T.value))??h($,null,{default:()=>[h(D,{icon:i.value?a.nextIcon:a.prevIcon},null)]})]),h("div",{key:"container",ref:g,class:"v-slide-group__container",onScroll:X},[h("div",{ref:f,class:"v-slide-group__content",style:Q.value,onTouchstartPassive:N,onTouchmovePassive:U,onTouchendPassive:W,onFocusin:Y,onFocusout:K,onKeydown:J},[(l=s.default)==null?void 0:l.call(s,T.value)])]),O.value&&h("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!C.value}],onClick:()=>C.value&&P("next")},[((p=s.next)==null?void 0:p.call(s,T.value))??h($,null,{default:()=>[h(D,{icon:i.value?a.prevIcon:a.nextIcon},null)]})])]}})),{selected:n.selected,scrollTo:P,scrollOffset:t,focus:m}}});export{Se as V,me as m};
