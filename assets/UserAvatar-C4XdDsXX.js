import{u as k,r as i,b as s,c as p,d as t,e as o,A as y,f as r,g as _,bQ as U,E,D as w,aR as d,bR as x}from"./index-BJZ7nvHG.js";import{_ as A,E as R}from"./_plugin-vue_export-helper-rQZU3EJZ.js";import{E as b}from"./el-progress-Bm-bCs_V.js";/* empty css                */import{P as S}from"./PageContainer-DADaTFpz.js";import"./el-message-D0pQ_Qr6.js";import"./isEqual-D-eOZarM.js";const B=["src"],C={__name:"UserAvatar",setup(h){const l=k(),a=i(l.user.user_pic),c=i(),f=n=>{const e=new FileReader;e.readAsDataURL(n.raw),e.onload=()=>{a.value=e.result,console.log(a.value)}},m=async()=>{await U(a.value),await l.getUser(),E.success("頭像更新成功")};return(n,e)=>{const v=w,g=b,u=R;return s(),p(S,{title:"更換頭像"},{default:t(()=>[o(g,{ref_key:"uploadRef",ref:c,style:{"margin-bottom":"20px"},"auto-upload":!1,class:"avatar-uploader","show-file-list":!1,"on-change":f},{default:t(()=>[a.value?(s(),y("img",{key:0,src:a.value,class:"avatar"},null,8,B)):(s(),p(v,{key:1,class:"avatar-uploader-icon"},{default:t(()=>[o(r(d))]),_:1}))]),_:1},512),o(u,{type:"primary",onClick:e[0]||(e[0]=z=>c.value.$el.querySelector("input").click()),icon:r(d),size:"large"},{default:t(()=>[_("選擇圖片")]),_:1},8,["icon"]),o(u,{type:"success",onClick:m,icon:r(x),size:"large"},{default:t(()=>[_("上傳頭像")]),_:1},8,["icon"])]),_:1})}}},q=A(C,[["__scopeId","data-v-339e3dc4"]]);export{q as default};
