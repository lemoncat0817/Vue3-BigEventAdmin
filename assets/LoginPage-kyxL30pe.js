import{r as A,u as pe,a as me,w as xe,o as ge,b as k,c as F,d as u,e as s,f as b,g as v,h as T,i as _e,E as $,j as ve,k as N,l as R,p as ye,m as he}from"./index-BJZ7nvHG.js";import{E as be,a as we}from"./el-col-DblwbaAp.js";import{v as q,L as K,E as Ae}from"./el-loading-7btC8sJP.js";import{E as Ce,a as Ue}from"./el-form-item-C_CoVn2C.js";import{E as Ee}from"./el-link-uh7OP-pq.js";import{_ as Be,E as Se}from"./_plugin-vue_export-helper-rQZU3EJZ.js";import{E as Ve}from"./el-input-DpqjG_sx.js";import"./el-message-D0pQ_Qr6.js";import"./isEqual-D-eOZarM.js";const ke={install(e){e.directive("loading",q),e.config.globalProperties.$loading=K},directive:q,service:K},Q="3.7.7",Fe=Q,h=typeof Buffer=="function",M=typeof TextDecoder=="function"?new TextDecoder:void 0,Y=typeof TextEncoder=="function"?new TextEncoder:void 0,Re="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",w=Array.prototype.slice.call(Re),C=(e=>{let o={};return e.forEach((r,t)=>o[r]=t),o})(w),Ie=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,f=String.fromCharCode.bind(String),J=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),W=e=>e.replace(/=/g,"").replace(/[+\/]/g,o=>o=="+"?"-":"_"),X=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),ee=e=>{let o,r,t,n,i="";const l=e.length%3;for(let d=0;d<e.length;){if((r=e.charCodeAt(d++))>255||(t=e.charCodeAt(d++))>255||(n=e.charCodeAt(d++))>255)throw new TypeError("invalid character found");o=r<<16|t<<8|n,i+=w[o>>18&63]+w[o>>12&63]+w[o>>6&63]+w[o&63]}return l?i.slice(0,l-3)+"===".substring(l):i},z=typeof btoa=="function"?e=>btoa(e):h?e=>Buffer.from(e,"binary").toString("base64"):ee,L=h?e=>Buffer.from(e).toString("base64"):e=>{let r=[];for(let t=0,n=e.length;t<n;t+=4096)r.push(f.apply(null,e.subarray(t,t+4096)));return z(r.join(""))},B=(e,o=!1)=>o?W(L(e)):L(e),Le=e=>{if(e.length<2){var o=e.charCodeAt(0);return o<128?e:o<2048?f(192|o>>>6)+f(128|o&63):f(224|o>>>12&15)+f(128|o>>>6&63)+f(128|o&63)}else{var o=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return f(240|o>>>18&7)+f(128|o>>>12&63)+f(128|o>>>6&63)+f(128|o&63)}},De=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,oe=e=>e.replace(De,Le),G=h?e=>Buffer.from(e,"utf8").toString("base64"):Y?e=>L(Y.encode(e)):e=>z(oe(e)),y=(e,o=!1)=>o?W(G(e)):G(e),H=e=>y(e,!0),Oe=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,Te=e=>{switch(e.length){case 4:var o=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),r=o-65536;return f((r>>>10)+55296)+f((r&1023)+56320);case 3:return f((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return f((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},te=e=>e.replace(Oe,Te),re=e=>{if(e=e.replace(/\s+/g,""),!Ie.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(e.length&3));let o,r="",t,n;for(let i=0;i<e.length;)o=C[e.charAt(i++)]<<18|C[e.charAt(i++)]<<12|(t=C[e.charAt(i++)])<<6|(n=C[e.charAt(i++)]),r+=t===64?f(o>>16&255):n===64?f(o>>16&255,o>>8&255):f(o>>16&255,o>>8&255,o&255);return r},j=typeof atob=="function"?e=>atob(X(e)):h?e=>Buffer.from(e,"base64").toString("binary"):re,ne=h?e=>J(Buffer.from(e,"base64")):e=>J(j(e).split("").map(o=>o.charCodeAt(0))),ae=e=>ne(se(e)),ze=h?e=>Buffer.from(e,"base64").toString("utf8"):M?e=>M.decode(ne(e)):e=>te(j(e)),se=e=>X(e.replace(/[-_]/g,o=>o=="-"?"+":"/")),D=e=>ze(se(e)),je=e=>{if(typeof e!="string")return!1;const o=e.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(o)||!/[^\s0-9a-zA-Z\-_]/.test(o)},le=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),ue=function(){const e=(o,r)=>Object.defineProperty(String.prototype,o,le(r));e("fromBase64",function(){return D(this)}),e("toBase64",function(o){return y(this,o)}),e("toBase64URI",function(){return y(this,!0)}),e("toBase64URL",function(){return y(this,!0)}),e("toUint8Array",function(){return ae(this)})},ie=function(){const e=(o,r)=>Object.defineProperty(Uint8Array.prototype,o,le(r));e("toBase64",function(o){return B(this,o)}),e("toBase64URI",function(){return B(this,!0)}),e("toBase64URL",function(){return B(this,!0)})},Pe=()=>{ue(),ie()},U={version:Q,VERSION:Fe,atob:j,atobPolyfill:re,btoa:z,btoaPolyfill:ee,fromBase64:D,toBase64:y,encode:y,encodeURI:H,encodeURL:H,utob:oe,btou:te,decode:D,isValid:je,fromUint8Array:B,toUint8Array:ae,extendString:ue,extendUint8Array:ie,extendBuiltins:Pe};/*! js-cookie v3.0.5 | MIT */function E(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)e[t]=r[t]}return e}var Ze={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function O(e,o){function r(n,i,l){if(!(typeof document>"u")){l=E({},o,l),typeof l.expires=="number"&&(l.expires=new Date(Date.now()+l.expires*864e5)),l.expires&&(l.expires=l.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var d="";for(var p in l)l[p]&&(d+="; "+p,l[p]!==!0&&(d+="="+l[p].split(";")[0]));return document.cookie=n+"="+e.write(i,n)+d}}function t(n){if(!(typeof document>"u"||arguments.length&&!n)){for(var i=document.cookie?document.cookie.split("; "):[],l={},d=0;d<i.length;d++){var p=i[d].split("="),S=p.slice(1).join("=");try{var x=decodeURIComponent(p[0]);if(l[x]=e.read(S,x),n===x)break}catch{}}return n?l[n]:l}}return Object.create({set:r,get:t,remove:function(n,i){r(n,"",E({},i,{expires:-1}))},withAttributes:function(n){return O(this.converter,E({},this.attributes,n))},withConverter:function(n){return O(E({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(e)}})}var I=O(Ze,{path:"/"});const fe=e=>(ye("data-v-f9122c0f"),e=e(),he(),e),$e=fe(()=>T("h1",null,"註冊",-1)),Ne=fe(()=>T("h1",null,"登入",-1)),qe={class:"flex"},Ke={__name:"LoginPage",setup(e){const o=A(!1),r=A(),t=A({username:"159357",password:"159357",repassword:""}),n={username:[{required:!0,message:"請輸入用戶名",trigger:"blur"},{min:5,max:10,message:"用戶名必須是5-10位的字串",trigger:"blur"}],password:[{required:!0,message:"請輸入密碼",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密碼必須是 6-15位 的非空字串",trigger:"blur"}],repassword:[{required:!0,message:"請輸入密碼",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密碼必須是 6-15位 的非空字串",trigger:"blur"},{validator:(x,a,g)=>{a!==t.value.password?g(new Error("兩次輸入密碼不一致")):g()},trigger:"blur"}]},i=async()=>{await r.value.validate(),await _e(t.value),$.success("註冊成功"),o.value=!1},l=pe(),d=me();xe(o,()=>{t.value={username:"",password:"",repassword:""}});const p=A(!1),S=async()=>{await r.value.validate();const x=ke.service({lock:!0,text:"登入中",background:"rgba(0, 0, 0, 0.7)"}),a=await ve(t.value);if(x.close(),p.value){const{username:g,password:c}=t.value,_={username:U.encode(g),password:U.encode(c)};I.set("LOCAL_KEY",JSON.stringify(_))}else I.remove("LOCAL_KEY");l.setToken(a.data.token),$.success("登录成功"),d.push("/")};return ge(()=>{const x=I.get("LOCAL_KEY");if(x){p.value=!0;try{const{username:a,password:g}=JSON.parse(x);t.value.username=U.decode(a),t.value.password=U.decode(g)}catch(a){console.error("本地数据解析失败~",a)}}else p.value=!1}),(x,a)=>{const g=we,c=Ce,_=Ve,P=Se,V=Ee,Z=Ue,de=Ae,ce=be;return k(),F(ce,{class:"login-page"},{default:u(()=>[s(g,{span:12,class:"bg"}),s(g,{span:6,offset:3,class:"form"},{default:u(()=>[o.value?(k(),F(Z,{key:0,model:t.value,rules:n,ref_key:"form",ref:r,size:"large",autocomplete:"off"},{default:u(()=>[s(c,null,{default:u(()=>[$e]),_:1}),s(c,{prop:"username"},{default:u(()=>[s(_,{modelValue:t.value.username,"onUpdate:modelValue":a[0]||(a[0]=m=>t.value.username=m),"prefix-icon":b(N),placeholder:"請輸入用戶名"},null,8,["modelValue","prefix-icon"])]),_:1}),s(c,{prop:"password"},{default:u(()=>[s(_,{modelValue:t.value.password,"onUpdate:modelValue":a[1]||(a[1]=m=>t.value.password=m),"prefix-icon":b(R),type:"password",placeholder:"請輸入密碼"},null,8,["modelValue","prefix-icon"])]),_:1}),s(c,{prop:"repassword"},{default:u(()=>[s(_,{modelValue:t.value.repassword,"onUpdate:modelValue":a[2]||(a[2]=m=>t.value.repassword=m),"prefix-icon":b(R),type:"password",placeholder:"請再次輸入密碼"},null,8,["modelValue","prefix-icon"])]),_:1}),s(c,null,{default:u(()=>[s(P,{onClick:i,class:"button",type:"primary","auto-insert-space":""},{default:u(()=>[v(" 註冊 ")]),_:1})]),_:1}),s(c,{class:"flex"},{default:u(()=>[s(V,{type:"info",underline:!1,onClick:a[3]||(a[3]=m=>o.value=!1)},{default:u(()=>[v(" ← 返回 ")]),_:1})]),_:1})]),_:1},8,["model"])):(k(),F(Z,{key:1,model:t.value,rules:n,ref_key:"form",ref:r,size:"large",autocomplete:"off"},{default:u(()=>[s(c,null,{default:u(()=>[Ne]),_:1}),s(c,{prop:"username"},{default:u(()=>[s(_,{modelValue:t.value.username,"onUpdate:modelValue":a[4]||(a[4]=m=>t.value.username=m),"prefix-icon":b(N),placeholder:"請輸入用戶名"},null,8,["modelValue","prefix-icon"])]),_:1}),s(c,{prop:"password"},{default:u(()=>[s(_,{modelValue:t.value.password,"onUpdate:modelValue":a[5]||(a[5]=m=>t.value.password=m),name:"password","prefix-icon":b(R),type:"password",placeholder:"請輸入密碼"},null,8,["modelValue","prefix-icon"])]),_:1}),s(c,{class:"flex"},{default:u(()=>[T("div",qe,[s(de,{modelValue:p.value,"onUpdate:modelValue":a[6]||(a[6]=m=>p.value=m)},{default:u(()=>[v("記住我")]),_:1},8,["modelValue"]),s(V,{type:"primary",underline:!1},{default:u(()=>[v("忘記密碼？")]),_:1})])]),_:1}),s(c,null,{default:u(()=>[s(P,{onClick:S,class:"button",type:"primary","auto-insert-space":""},{default:u(()=>[v("登入")]),_:1})]),_:1}),s(c,{class:"flex"},{default:u(()=>[s(V,{type:"info",underline:!1,onClick:a[7]||(a[7]=m=>o.value=!0)},{default:u(()=>[v(" 註冊 → ")]),_:1})]),_:1})]),_:1},8,["model"]))]),_:1})]),_:1})}}},oo=Be(Ke,[["__scopeId","data-v-f9122c0f"]]);export{oo as default};