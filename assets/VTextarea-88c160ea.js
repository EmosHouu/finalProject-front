import{p,b2 as ee,b3 as te,g as ae,b4 as ne,l as le,b5 as oe,f as y,r as v,a4 as ue,aB as ie,T as re,ag as x,b6 as se,b as ce,b7 as de,b8 as _,b9 as fe,c as l,ba as ve,h as I,F as R,am as G,an as xe,bb as me,bc as ge,i as he,U as S,bd as we,w as Ve,aP as ye}from"./index-8d391943.js";const be=p({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ee(),...te()},"VTextarea"),Pe=ae()({name:"VTextarea",directives:{Intersect:ne},inheritAttrs:!1,props:be(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,U){let{attrs:b,emit:B,slots:i}=U;const o=le(e,"modelValue"),{isFocused:f,focus:D,blur:E}=oe(e),O=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),$=y(()=>{if(b.maxlength)return b.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function j(t,n){var a,u;!e.autofocus||!t||(u=(a=n[0].target)==null?void 0:a.focus)==null||u.call(a)}const M=v(),m=v(),T=ue(""),g=v(),q=y(()=>e.persistentPlaceholder||f.value||e.active);function F(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||D()}function J(t){F(),B("click:control",t)}function K(t){B("mousedown:control",t)}function L(t){t.stopPropagation(),F(),S(()=>{o.value="",we(e["onClick:clear"],t)})}function Q(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const u=[n.selectionStart,n.selectionEnd];S(()=>{n.selectionStart=u[0],n.selectionEnd=u[1]})}}const c=v(),h=v(+e.rows),P=y(()=>["plain","underlined"].includes(e.variant));ie(()=>{e.autoGrow||(h.value=+e.rows)});function d(){e.autoGrow&&S(()=>{if(!c.value||!m.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(m.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,w=parseFloat(t.lineHeight),C=Math.max(parseFloat(e.rows)*w+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),k=parseFloat(e.maxRows)*w+a||1/0,s=ye(u??0,C,k);h.value=Math.floor((s-a)/w),T.value=Ve(s)})}re(d),x(o,d),x(()=>e.rows,d),x(()=>e.maxRows,d),x(()=>e.density,d);let r;return x(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),se(()=>{r==null||r.disconnect()}),ce(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,u]=de(b),{modelValue:w,...C}=_.filterProps(e),k=fe(e);return l(_,I({ref:M,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":P.value},e.class],style:e.style},a,C,{centerAffix:h.value===1&&!P.value,focused:f.value}),{...i,default:s=>{let{id:V,isDisabled:H,isDirty:N,isReadonly:W,isValid:X}=s;return l(ve,I({ref:m,style:{"--v-textarea-control-height":T.value},onClick:J,onMousedown:K,"onClick:clear":L,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},k,{id:V.value,active:q.value||N.value,centerAffix:h.value===1&&!P.value,dirty:N.value||e.dirty,disabled:H.value,focused:f.value,error:X.value===!1}),{...i,default:Y=>{let{props:{class:z,...A}}=Y;return l(R,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),G(l("textarea",I({ref:g,class:z,value:o.value,onInput:Q,autofocus:e.autofocus,readonly:W.value,disabled:H.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:F,onBlur:E},A,u),null),[[xe("intersect"),{handler:j},null,{once:!0}]]),e.autoGrow&&G(l("textarea",{class:[z,"v-textarea__sizer"],id:`${A.id}-sizer`,"onUpdate:modelValue":Z=>o.value=Z,ref:c,readonly:!0,"aria-hidden":"true"},null),[[me,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var V;return l(R,null,[(V=i.details)==null?void 0:V.call(i,s),t&&l(R,null,[l("span",null,null),l(ge,{active:e.persistentCounter||f.value,value:O.value,max:$.value},i.counter)])])}:void 0})}),he({},M,m,g)}});export{Pe as V};
