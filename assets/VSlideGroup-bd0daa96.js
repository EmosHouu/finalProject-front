import{p as J,W as H,m as ee,bY as te,a as le,bV as ae,g as ne,ax as se,az as ue,aW as oe,a9 as b,f as S,aB as G,br as ie,Z as ce,b as re,c as h,af as W,Q as $,bo as ve,an as fe}from"./index-1bbfcdf1.js";function B(a){const s=Math.abs(a);return Math.sign(a)*(s/((1/.501-2)*(1-s)+1))}function L(a){let{selectedElement:d,containerSize:s,contentSize:i,isRtl:x,currentScrollOffset:r,isHorizontal:n}=a;const u=n?d.clientWidth:d.clientHeight,t=n?d.offsetLeft:d.offsetTop,c=x&&n?i-t-u:t,v=s+r,o=u+c,g=u*.4;return c<=r?r=Math.max(c-g,0):v<=o&&(r=Math.min(r-(v-o-g),i-s)),r}function de(a){let{selectedElement:d,containerSize:s,contentSize:i,isRtl:x,isHorizontal:r}=a;const n=r?d.clientWidth:d.clientHeight,u=r?d.offsetLeft:d.offsetTop,t=x&&r?i-u-n/2-s/2:u+n/2-s/2;return Math.min(i-s,Math.max(0,t))}const pe=Symbol.for("vuetify:v-slide-group"),me=J({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:pe},nextIcon:{type:H,default:"$next"},prevIcon:{type:H,default:"$prev"},showArrows:{type:[Boolean,String],validator:a=>typeof a=="boolean"||["always","desktop","mobile"].includes(a)},...ee(),...te(),...le(),...ae({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Se=ne()({name:"VSlideGroup",props:me(),emits:{"update:modelValue":a=>!0},setup(a,d){let{slots:s}=d;const{isRtl:i}=se(),{displayClasses:x,mobile:r}=ue(a),n=oe(a,a.symbol),u=b(!1),t=b(0),c=b(0),v=b(0),o=S(()=>a.direction==="horizontal"),{resizeRef:g,contentRect:R}=G(),{resizeRef:f,contentRect:k}=G(),A=S(()=>n.selected.value.length?n.items.value.findIndex(e=>e.id===n.selected.value[0]):-1),Y=S(()=>n.selected.value.length?n.items.value.findIndex(e=>e.id===n.selected.value[n.selected.value.length-1]):-1);if(ie){let e=-1;ce(()=>[n.selected.value,R.value,k.value,o.value],()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{if(R.value&&k.value){const l=o.value?"width":"height";c.value=R.value[l],v.value=k.value[l],u.value=c.value+1<v.value}if(A.value>=0&&f.value){const l=f.value.children[Y.value];A.value===0||!u.value?t.value=0:a.centerActive?t.value=de({selectedElement:l,containerSize:c.value,contentSize:v.value,isRtl:i.value,isHorizontal:o.value}):u.value&&(t.value=L({selectedElement:l,containerSize:c.value,contentSize:v.value,isRtl:i.value,currentScrollOffset:t.value,isHorizontal:o.value}))}})})}const z=b(!1);let I=0,V=0;function q(e){const l=o.value?"clientX":"clientY";V=(i.value&&o.value?-1:1)*t.value,I=e.touches[0][l],z.value=!0}function D(e){if(!u.value)return;const l=o.value?"clientX":"clientY",p=i.value&&o.value?-1:1;t.value=p*(V+I-e.touches[0][l])}function N(e){const l=v.value-c.value;t.value<0||!u.value?t.value=0:t.value>=l&&(t.value=l),z.value=!1}function X(){g.value&&(g.value[o.value?"scrollLeft":"scrollTop"]=0)}const w=b(!1);function K(e){if(w.value=!0,!(!u.value||!f.value)){for(const l of e.composedPath())for(const p of f.value.children)if(p===l){t.value=L({selectedElement:p,containerSize:c.value,contentSize:v.value,isRtl:i.value,currentScrollOffset:t.value,isHorizontal:o.value});return}}}function U(e){w.value=!1}function j(e){var l;!w.value&&!(e.relatedTarget&&((l=f.value)!=null&&l.contains(e.relatedTarget)))&&m()}function Q(e){f.value&&(o.value?e.key==="ArrowRight"?m(i.value?"prev":"next"):e.key==="ArrowLeft"&&m(i.value?"next":"prev"):e.key==="ArrowDown"?m("next"):e.key==="ArrowUp"&&m("prev"),e.key==="Home"?m("first"):e.key==="End"&&m("last"))}function m(e){var l,p,F,M,E;if(f.value)if(!e)(l=ve(f.value)[0])==null||l.focus();else if(e==="next"){const y=(p=f.value.querySelector(":focus"))==null?void 0:p.nextElementSibling;y?y.focus():m("first")}else if(e==="prev"){const y=(F=f.value.querySelector(":focus"))==null?void 0:F.previousElementSibling;y?y.focus():m("last")}else e==="first"?(M=f.value.firstElementChild)==null||M.focus():e==="last"&&((E=f.value.lastElementChild)==null||E.focus())}function T(e){const l=t.value+(e==="prev"?-1:1)*c.value;t.value=fe(l,0,v.value-c.value)}const Z=S(()=>{let e=t.value>v.value-c.value?-(v.value-c.value)+B(v.value-c.value-t.value):-t.value;t.value<=0&&(e=B(-t.value));const l=i.value&&o.value?-1:1;return{transform:`translate${o.value?"X":"Y"}(${l*e}px)`,transition:z.value?"none":"",willChange:z.value?"transform":""}}),O=S(()=>({next:n.next,prev:n.prev,select:n.select,isSelected:n.isSelected})),P=S(()=>{switch(a.showArrows){case"always":return!0;case"desktop":return!r.value;case!0:return u.value||Math.abs(t.value)>0;case"mobile":return r.value||u.value||Math.abs(t.value)>0;default:return!r.value&&(u.value||Math.abs(t.value)>0)}}),_=S(()=>Math.abs(t.value)>0),C=S(()=>v.value>Math.abs(t.value)+c.value);return re(()=>h(a.tag,{class:["v-slide-group",{"v-slide-group--vertical":!o.value,"v-slide-group--has-affixes":P.value,"v-slide-group--is-overflowing":u.value},x.value,a.class],style:a.style,tabindex:w.value||n.selected.value.length?-1:0,onFocus:j},{default:()=>{var e,l,p;return[P.value&&h("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!_.value}],onClick:()=>_.value&&T("prev")},[((e=s.prev)==null?void 0:e.call(s,O.value))??h(W,null,{default:()=>[h($,{icon:i.value?a.nextIcon:a.prevIcon},null)]})]),h("div",{key:"container",ref:g,class:"v-slide-group__container",onScroll:X},[h("div",{ref:f,class:"v-slide-group__content",style:Z.value,onTouchstartPassive:q,onTouchmovePassive:D,onTouchendPassive:N,onFocusin:K,onFocusout:U,onKeydown:Q},[(l=s.default)==null?void 0:l.call(s,O.value)])]),P.value&&h("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!C.value}],onClick:()=>C.value&&T("next")},[((p=s.next)==null?void 0:p.call(s,O.value))??h(W,null,{default:()=>[h($,{icon:i.value?a.prevIcon:a.nextIcon},null)]})])]}})),{selected:n.selected,scrollTo:T,scrollOffset:t,focus:m}}});export{Se as V,me as m};