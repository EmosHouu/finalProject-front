import{d as le,l as re,r as f,e as oe,f as b,G as se,o as ne,h as ue,w as o,C as ie,c as l,j as t,q as de,s as d,V as Y,i as K,t as me,v as pe}from"./index-decc786b.js";import{v as G,V as ve}from"./index-5a2a4f49.js";import{c as ge,a as i,g as Ve,e as W,f as H,u as ce,b as u,V as fe}from"./index.esm-ea543e30.js";import{V as De,a as F}from"./VRow-fcae3dc7.js";import{V}from"./VCol-fe4a7cf6.js";import{V as J}from"./VDatePicker-6552b7f4.js";import{V as C,a as be}from"./VTextarea-40943cea.js";import"./ssrBoot-69e5ffeb.js";import"./VChip-8f6cb8bf.js";import"./VSlideGroup-db764c74.js";const ye=K("h1",null,"我要開團",-1),xe={class:"d-flex justify-center"},Ae={__name:"ActivityView",setup(Se){const{apiAuth:Q}=ie(),X=le(),A=re(),m=f(!1),p=f(!1),D=new Date,Z=f(null),E=oe();E.getProfile();const P=b(()=>{const r=new Date(D);r.setDate(r.getDate()+1);const a=r.getFullYear(),s=String(r.getMonth()+1).padStart(2,"0"),e=String(r.getDate()).padStart(2,"0");return`${a}-${s}-${e}`}),I=b(()=>{const r=D.getFullYear()+1,a=String(D.getMonth()+1).padStart(2,"0"),s=String(D.getDate()).padStart(2,"0");return`${r}-${a}-${s}`}),R=(r,a)=>{const e=new Date(r).toISOString().split("T")[0];a==="startDate"?v.value.value=e:a==="endDate"&&(g.value.value=e),m.value=!1,p.value=!1},j=b(()=>v.value.value?v.value.value.toLocaleDateString():""),z=b(()=>g.value.value?g.value.value.toLocaleDateString():""),N=["揪團玩","揪團行","揪團買","揪團住"],L=["北海道","東北","關東","中部","近畿","中國","四國","九州"],h=Array.from({length:50},(r,a)=>a+1),_=ge({name:i().required("活動名稱為必填欄位").min(5,"活動名稱長度不符").max(40,"活動名稱長度不符").test("no-numbers","姓名不能包含數字",r=>!/\d/.test(r)),location:i().required("活動地點為必填欄位"),participants:Ve().required("活動人數為必填欄位").min(1,"活動人數不能小於 1"),startDate:W().required("活動日期為必填欄位").min(new Date,"活動開始日期不能早於今天"),endDate:W().required("活動日期為必填欄位").min(H("startDate"),"結束日期不能早於開始日期").min(H("startDate"),"活動結束日期不能早於開始日期"),startTime:i().required("活動開始時間為必填欄位"),endTime:i().required("活動結束時間為必填欄位").test("is-later","活動結束時間必須晚於開始時間",function(r){const{startTime:a,startDate:s,endDate:e}=this.parent;if(!r||!a||!s||!e)return this.createError({message:"必須填寫所有日期和時間字段"});const n=new Date(`${s}T${a}`),q=new Date(`${e}T${r}`);return s===e&&q<=n?this.createError({message:"活動結束時間必須晚於開始時間"}):!0}),category:i().required("缺少活動分類").test("isCategory","商品活動錯誤",r=>N.includes(r)),area:i().required("缺少地區分類").test("isArea","地區分類錯誤",r=>L.includes(r)),phone:i().required("手機號碼為必填欄位").test("is-phone","手機號碼格式錯誤",r=>G.isMobilePhone(r,"zh-TW")),email:i().required("信箱為必填欄位").test("isEmail","信箱格式錯誤",r=>G.isEmail(r)),description:i().required("活動內容為必填欄位").min(10,"活動內容長度不符").max(1e3,"活動內容長度不符")}),{handleSubmit:ee,isSubmitting:ae}=ce({validationSchema:_,initialValues:{name:"",email:"",phone:"",description:"",category:"",area:"",startTime:"",endTime:""}}),y=u("name"),x=u("location"),S=u("phone"),w=u("email"),v=u("startDate"),g=u("endDate"),M=u("startTime"),$=u("endTime"),T=u("description"),U=u("category"),k=u("area"),B=u("participants"),c=f([]),O=f([]),te=ee(async r=>{var a,s;if(c.value.length!==0)try{const e=new FormData;for(const n in r)n==="startDate"?e.append("startDate",j.value):n==="endDate"?e.append("endDate",z.value):e.append(n,r[n]);for(const[n,q]of e.entries())console.log(`${n}:`,q);if(e.append("user",E._id),c.value.length>0)for(const n of c.value)e.append("images",n.file);await Q.post("/activity",e),A({text:"新增成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),X.push("/")}catch(e){const n=((s=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:s.message)||"發生錯誤，請稍後再試";A({text:n,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(r,a)=>{const s=se("VueFileAgent");return ne(),ue(De,null,{default:o(()=>[l(F,null,{default:o(()=>[l(V,{cols:"12"},{default:o(()=>[ye]),_:1}),l(ve),l(V,{cols:"12"},{default:o(()=>[l(fe,{disabled:t(ae),onSubmit:de(t(te),["prevent"])},{default:o(()=>[l(d,{modelValue:t(y).value.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t(y).value.value=e),label:"活動名稱","error-messages":t(y).errorMessage.value,"prepend-icon":"mdi-order-alphabetical-ascending"},null,8,["modelValue","error-messages"]),l(F,null,{default:o(()=>[l(V,{cols:"6"},{default:o(()=>[l(d,{"model-value":j.value,label:"活動開始日期","error-messages":t(v).errorMessage.value,readonly:"","prepend-icon":"mdi-calendar","onClick:prepend":a[1]||(a[1]=e=>m.value=!m.value)},null,8,["model-value","error-messages"]),l(Y,{modelValue:m.value,"onUpdate:modelValue":a[4]||(a[4]=e=>m.value=e),persistent:"","max-width":"290px","onClick:outside":a[5]||(a[5]=e=>m.value=!1)},{default:o(()=>[l(J,{modelValue:t(v).value.value,"onUpdate:modelValue":a[2]||(a[2]=e=>t(v).value.value=e),color:"#F8B44B",min:P.value,max:I.value,onInput:a[3]||(a[3]=e=>R(e,"startDate"))},null,8,["modelValue","min","max"])]),_:1},8,["modelValue"])]),_:1}),l(V,{cols:"6"},{default:o(()=>[l(d,{modelValue:t(M).value.value,"onUpdate:modelValue":a[6]||(a[6]=e=>t(M).value.value=e),label:"活動開始時間 (請填寫當地時間)",type:"time","error-messages":t(M).errorMessage.value,"prepend-icon":"mdi-clock-time-four-outline"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),l(F,null,{default:o(()=>[l(V,{cols:"6"},{default:o(()=>[l(d,{"model-value":z.value,label:"活動結束日期","error-messages":t(g).errorMessage.value,readonly:"readonly","prepend-icon":"mdi-calendar","onClick:prepend":a[7]||(a[7]=e=>p.value=!p.value)},null,8,["model-value","error-messages"]),l(Y,{modelValue:p.value,"onUpdate:modelValue":a[10]||(a[10]=e=>p.value=e),persistent:"","max-width":"350px","onClick:outside":a[11]||(a[11]=e=>p.value=!1)},{default:o(()=>[l(J,{modelValue:t(g).value.value,"onUpdate:modelValue":a[8]||(a[8]=e=>t(g).value.value=e),color:"#F8B44B",min:P.value,max:I.value,onInput:a[9]||(a[9]=e=>R(e,"endDate"))},null,8,["modelValue","min","max"])]),_:1},8,["modelValue"])]),_:1}),l(V,{cols:"6"},{default:o(()=>[l(d,{modelValue:t($).value.value,"onUpdate:modelValue":a[12]||(a[12]=e=>t($).value.value=e),label:"活動結束時間 (請填寫當地時間)",type:"time","error-messages":t($).errorMessage.value,"prepend-icon":"mdi-clock-time-four-outline"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),l(d,{modelValue:t(x).value.value,"onUpdate:modelValue":a[13]||(a[13]=e=>t(x).value.value=e),label:"活動地點（請輸入地址）","error-messages":t(x).errorMessage.value,"prepend-icon":"mdi-map-marker"},null,8,["modelValue","error-messages"]),l(C,{modelValue:t(B).value.value,"onUpdate:modelValue":a[14]||(a[14]=e=>t(B).value.value=e),items:t(h),label:"活動人數","error-messages":t(B).errorMessage.value,"prepend-icon":"mdi-account-group"},null,8,["modelValue","items","error-messages"]),l(C,{modelValue:t(U).value.value,"onUpdate:modelValue":a[15]||(a[15]=e=>t(U).value.value=e),label:"分類",items:N,"error-messages":t(U).errorMessage.value,"prepend-icon":"mdi-tag"},null,8,["modelValue","error-messages"]),l(C,{modelValue:t(k).value.value,"onUpdate:modelValue":a[16]||(a[16]=e=>t(k).value.value=e),label:"地區",items:L,"error-messages":t(k).errorMessage.value,"prepend-icon":"mdi-map-legend"},null,8,["modelValue","error-messages"]),l(d,{modelValue:t(S).value.value,"onUpdate:modelValue":a[17]||(a[17]=e=>t(S).value.value=e),label:"手機號碼",type:"tel","error-messages":t(S).errorMessage.value,"prepend-icon":"mdi-phone"},null,8,["modelValue","error-messages"]),l(d,{modelValue:t(w).value.value,"onUpdate:modelValue":a[18]||(a[18]=e=>t(w).value.value=e),label:"信箱",type:"email","error-messages":t(w).errorMessage.value,"prepend-icon":"mdi-email"},null,8,["modelValue","error-messages"]),l(be,{modelValue:t(T).value.value,"onUpdate:modelValue":a[19]||(a[19]=e=>t(T).value.value=e),label:"活動內容","error-messages":t(T).errorMessage.value,"prepend-icon":"mdi-comment-text-outline"},null,8,["modelValue","error-messages"]),l(s,{ref_key:"fileAgent",ref:Z,modelValue:c.value,"onUpdate:modelValue":a[20]||(a[20]=e=>c.value=e),rawModelValue:O.value,"onUpdate:rawModelValue":a[21]||(a[21]=e=>O.value=e),multiple:"true",accept:"image/jpeg,image/png",deletable:"deletable","error-text":{type:"檔案格式不支援",size:"檔案超過 1MB 大小限制"},"help-text":"選擇檔案或拖曳到這裡","max-files":3,"max-size":"1MB"},null,8,["modelValue","rawModelValue"]),K("div",xe,[l(me,{color:"#F8B44B",type:"submit :isSubmitting"},{default:o(()=>[pe("開團 ")]),_:1})])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1})}}};export{Ae as default};
