import{N as R,d as q,l as N,e as P,r as C,J as H,o as m,h as v,w as t,E as U,c as a,n as h,O as g,i as r,D as o,z as L,C as M,F as O,y as $,P as D,Q as _,v as s,j as y,q as j,t as z,G,H as J}from"./index-1bbfcdf1.js";import{c as Q,g as K,u as W,V as X}from"./index.esm-03ebe0c3.js";import{_ as Y}from"./_plugin-vue_export-helper-eff87112.js";import{V as Z,a as w}from"./VRow-7fea83c2.js";import{V as b}from"./VCol-62b15bfe.js";import{a as ee,V as te}from"./VCarouselItem-5922978b.js";import{V as x}from"./VChip-56d890ed.js";import"./ssrBoot-abee7b25.js";import"./VSlideGroup-bd0daa96.js";const u=n=>(G("data-v-ff3c2cf2"),n=n(),J(),n),ae={class:"description"},le=u(()=>r("br",null,null,-1)),se=u(()=>r("br",null,null,-1)),oe=u(()=>r("br",null,null,-1)),re=u(()=>r("br",null,null,-1)),ie=u(()=>r("br",null,null,-1)),ue={class:"d-flex"},ne=u(()=>r("br",null,null,-1)),ce=u(()=>r("h2",null,"活動描述",-1)),de={__name:"ActDetail",setup(n){const k=R();q();const{api:S,apiAuth:T}=U(),p=N(),V=P(),c=C(!1),e=C({_id:"",name:"",description:"",images:"[]",category:"",startDate:"",endDate:"",startTime:"",endTime:"",participants:"",area:"",location:""}),B=Q({quantity:K().typeError("缺少數量").required("缺少數量").min(1,"數量最小為 1")}),{isSubmitting:F,handleSubmit:E}=W({validationSchema:B,initialValues:{quantity:1}}),A=E(async l=>{var f,d;if(!V.isLogin){p({text:"請先登入",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}});return}try{const{data:i}=await T.patch("/users/cart",{activity:e.value._id,quantity:1});V.cart=i.result,c.value=!0,console.log(c.value),p({text:"報名成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(i){const I=((d=(f=i==null?void 0:i.response)==null?void 0:f.data)==null?void 0:d.message)||"發生錯誤，請稍後再試";p({text:I,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return H(async()=>{try{const{data:l}=await S.get("/activity/"+k.params.id);e.value._id=l.result._id,e.value.name=l.result.name,e.value.category=l.result.category,e.value.description=l.result.description,e.value.area=l.result.area,e.value.images=l.result.images,e.value.startDate=l.result.startDate,e.value.startTime=l.result.startTime,e.value.endDate=l.result.endDate,e.value.endTime=l.result.endTime,e.value.participants=l.result.participants,e.value.location=l.result.location,console.log("activity",e.value)}catch(l){console.log(l),console.error("Error fetching activity data:",l)}}),(l,f)=>(m(),v(Z,null,{default:t(()=>[a(w,{class:"align-stretch"},{default:t(()=>[a(b,{cols:"12",md:"8"},{default:t(()=>[a(h,{color:"#FFEFE8"},{default:t(()=>[a(g,null,{default:t(()=>[r("h2",null,o(e.value.name),1)]),_:1}),e.value.images.length>0?(m(),v(ee,{key:0,"show-arrows":"hover","hide-delimiter-background":""},{default:t(()=>[(m(!0),L(O,null,M(e.value.images,(d,i)=>(m(),v(te,{key:i,src:d,height:"500",cover:""},null,8,["src"]))),128))]),_:1})):$("",!0)]),_:1})]),_:1}),a(b,{cols:"12",md:"4"},{default:t(()=>[a(h,{height:"100%",color:"#FFEFE8"},{default:t(()=>[a(g),a(D,null,{default:t(()=>[r("div",ae,[a(_,null,{default:t(()=>[s("mdi-account")]),_:1}),s(" 團長：HARU HOU "),le,a(_,null,{default:t(()=>[s("mdi-calendar")]),_:1}),s(" 活動時間："),se,s(" "+o(e.value.startDate)+" "+o(e.value.startTime)+" ~ "+o(e.value.endDate)+" "+o(e.value.endTime),1),oe,a(_,null,{default:t(()=>[s("mdi-map-marker")]),_:1}),s(" "+o(e.value.location)+" ",1),re,a(_,null,{default:t(()=>[s(" mdi-account-group")]),_:1}),s(" 活動人數:"+o(e.value.participants)+"人 已報名：3人",1),ie]),r("div",ue,[a(x,{style:{marginRight:"10px"},color:"#FFD4C0",variant:"flat"},{default:t(()=>[s(o(e.value.category),1)]),_:1}),a(x,{color:"#FFD4C0",variant:"flat"},{default:t(()=>[s(o(e.value.area),1)]),_:1})]),ne,a(X,{disabled:y(F),onSubmit:j(y(A),["prevent"])},{default:t(()=>[a(z,{color:"#F8B44B",type:"submit",loading:y(F),disabled:c.value.value},{default:t(()=>[s(o(c.value.value?"已报名":"我要参加"),1)]),_:1},8,["loading","disabled"])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1}),a(w,null,{default:t(()=>[a(b,{cols:"12"},{default:t(()=>[a(h,{color:"#FFEFE8"},{default:t(()=>[a(g,null,{default:t(()=>[ce]),_:1}),a(D,{style:{"white-space":"pre"},class:"description"},{default:t(()=>[s(o(e.value.description),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Ve=Y(de,[["__scopeId","data-v-ff3c2cf2"]]);export{Ve as default};