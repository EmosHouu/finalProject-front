import{p as c,m as v,ag as d,g as h,ah as m,aP as u,a7 as g,H as C,W as i,b as V,c as k}from"./index-bf168c3d.js";const x=c({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v(),...d()},"VDivider"),b=h()({name:"VDivider",props:x(),setup(e,r){let{attrs:t}=r;const{themeClasses:s}=m(e),{textColorClasses:o,textColorStyles:l}=u(g(e,"color")),n=C(()=>{const a={};return e.length&&(a[e.vertical?"maxHeight":"maxWidth"]=i(e.length)),e.thickness&&(a[e.vertical?"borderRightWidth":"borderTopWidth"]=i(e.thickness)),a});return V(()=>k("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,o.value,e.class],style:[n.value,l.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{b as V};
