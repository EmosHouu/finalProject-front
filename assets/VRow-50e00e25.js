import{p as d,m as f,a as g,g as y,aw as S,b as p,c as N,f as P,bU as L,bT as A,aD as E}from"./index-a9192726.js";const R=d({fluid:{type:Boolean,default:!1},...f(),...g()},"VContainer"),_=y()({name:"VContainer",props:R(),setup(t,s){let{slots:n}=s;const{rtlClasses:a}=S();return p(()=>N(t.tag,{class:["v-container",{"v-container--fluid":t.fluid},a.value,t.class],style:t.style},n)),{}}}),o=["start","end","center"],C=["space-between","space-around","space-evenly"];function i(t,s){return A.reduce((n,a)=>{const e=t+E(a);return n[e]=s(),n},{})}const h=[...o,"baseline","stretch"],V=t=>h.includes(t),m=i("align",()=>({type:String,default:null,validator:V})),T=[...o,...C],v=t=>T.includes(t),j=i("justify",()=>({type:String,default:null,validator:v})),G=[...o,...C,"stretch"],b=t=>G.includes(t),k=i("alignContent",()=>({type:String,default:null,validator:b})),u={align:Object.keys(m),justify:Object.keys(j),alignContent:Object.keys(k)},U={align:"align",justify:"justify",alignContent:"align-content"};function $(t,s,n){let a=U[t];if(n!=null){if(s){const e=s.replace(t,"");a+=`-${e}`}return a+=`-${n}`,a.toLowerCase()}}const I=d({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:V},...m,justify:{type:String,default:null,validator:v},...j,alignContent:{type:String,default:null,validator:b},...k,...f(),...g()},"VRow"),B=y()({name:"VRow",props:I(),setup(t,s){let{slots:n}=s;const a=P(()=>{const e=[];let l;for(l in u)u[l].forEach(c=>{const w=t[c],r=$(l,c,w);r&&e.push(r)});return e.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),e});return()=>{var e;return L(t.tag,{class:["v-row",a.value,t.class],style:t.style},(e=n.default)==null?void 0:e.call(n))}}});export{_ as V,B as a};