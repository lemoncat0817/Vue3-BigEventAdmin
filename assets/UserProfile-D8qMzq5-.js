import{u as V,r as s,b as k,c as U,d as l,e,g as w,bP as x,E as y}from"./index-BJZ7nvHG.js";import{a as C,E as P}from"./el-col-DblwbaAp.js";import{E as S,a as B}from"./el-form-item-C_CoVn2C.js";import{E as I}from"./_plugin-vue_export-helper-rQZU3EJZ.js";import{E as R}from"./el-input-DpqjG_sx.js";import{P as q}from"./PageContainer-DADaTFpz.js";import"./el-message-D0pQ_Qr6.js";const G={__name:"UserProfile",setup(F){const{user:{username:u,nickname:i,email:d,id:p},getUser:_}=V(),a=s({username:u,nickname:i,email:d,id:p}),f={nickname:[{required:!0,message:"請輸入用戶暱稱",trigger:"blur"},{pattern:/^\S{2,10}$/,message:"暱稱必須是2-10位的非空字符",trigger:"blur"}],email:[{required:!0,message:"請輸入用戶郵箱",trigger:"blur"},{type:"email",message:"請輸入正確郵件地址",trigger:"blur"}]},m=s(),c=async()=>{await m.value.validate(),await x(a.value),_(),y.success("用戶訊息更新成功")};return(N,o)=>{const n=R,r=S,g=I,b=B,E=C,v=P;return k(),U(q,{title:"基本資料"},{default:l(()=>[e(v,null,{default:l(()=>[e(E,{span:12},{default:l(()=>[e(b,{ref_key:"formRef",ref:m,model:a.value,rules:f,"label-width":"100px",size:"large"},{default:l(()=>[e(r,{label:"登入名稱"},{default:l(()=>[e(n,{modelValue:a.value.username,"onUpdate:modelValue":o[0]||(o[0]=t=>a.value.username=t),disabled:""},null,8,["modelValue"])]),_:1}),e(r,{label:"用戶暱稱",prop:"nickname"},{default:l(()=>[e(n,{modelValue:a.value.nickname,"onUpdate:modelValue":o[1]||(o[1]=t=>a.value.nickname=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"用戶郵箱",prop:"email"},{default:l(()=>[e(n,{modelValue:a.value.email,"onUpdate:modelValue":o[2]||(o[2]=t=>a.value.email=t)},null,8,["modelValue"])]),_:1}),e(r,null,{default:l(()=>[e(g,{type:"primary",onClick:c},{default:l(()=>[w("提交修改")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})}}};export{G as default};
