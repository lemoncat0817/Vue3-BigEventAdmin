import{aB as Fe,b4 as je,z as p,a3 as ke,bE as _e,r as N,bD as G,w as Z,V as Ue,ay as We,s as we,n as Ye,aE as Xe,v as ae,t as Se,ag as Ge,H as oe,x as Pe,c2 as Ze,M as Je,y as Ce,ak as qe,Z as P,o as Qe,U as et,b as v,A as S,a2 as m,a5 as ne,G as y,f as t,F as W,h as V,c as E,d as $,C as Y,D as H,K as se,e as tt,aF as at,a4 as ot,bF as nt,al as X,B as st,_ as lt,ai as Ee,aA as rt,c3 as it,c4 as ut,aj as ct,J as dt}from"./index-BJZ7nvHG.js";import{c as pt,d as ft,a as vt,f as mt,e as Ie}from"./_plugin-vue_export-helper-rQZU3EJZ.js";const ht=()=>Fe&&/firefox/i.test(window.navigator.userAgent);function $t(){if(!arguments.length)return[];var o=arguments[0];return je(o)?o:[o]}const le="update:modelValue",Ht="change",yt=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),gt=["class","style"],bt=/^on[A-Z]/,xt=(o={})=>{const{excludeListeners:f=!1,excludeKeys:u}=o,a=p(()=>((u==null?void 0:u.value)||[]).concat(gt)),r=ke();return r?p(()=>{var i;return _e(Object.entries((i=r.proxy)==null?void 0:i.$attrs).filter(([c])=>!a.value.includes(c)&&!(f&&bt.test(c))))}):p(()=>({}))};function wt(o){const f=N();function u(){if(o.value==null)return;const{selectionStart:r,selectionEnd:i,value:c}=o.value;if(r==null||i==null)return;const g=c.slice(0,Math.max(0,r)),d=c.slice(Math.max(0,i));f.value={selectionStart:r,selectionEnd:i,value:c,beforeTxt:g,afterTxt:d}}function a(){if(o.value==null||f.value==null)return;const{value:r}=o.value,{beforeTxt:i,afterTxt:c,selectionStart:g}=f.value;if(i==null||c==null||g==null)return;let d=r.length;if(r.endsWith(c))d=r.length-c.length;else if(r.startsWith(i))d=i.length;else{const x=i[g-1],w=r.indexOf(x,g-1);w!==-1&&(d=w+1)}o.value.setSelectionRange(d,d)}return[u,a]}function St(o,{afterFocus:f,beforeBlur:u,afterBlur:a}={}){const r=ke(),{emit:i}=r,c=G(),g=N(!1),d=l=>{g.value||(g.value=!0,i("focus",l),f==null||f())},x=l=>{var T;We(u)&&u(l)||l.relatedTarget&&((T=c.value)!=null&&T.contains(l.relatedTarget))||(g.value=!1,i("blur",l),a==null||a())},w=()=>{var l;(l=o.value)==null||l.focus()};return Z(c,l=>{l&&l.setAttribute("tabindex","-1")}),Ue(c,"click",w),{wrapperRef:c,isFocused:g,handleFocus:d,handleBlur:x}}let b;const Ct=`
  height:0 !important;
  visibility:hidden !important;
  ${ht()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Et=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function It(o){const f=window.getComputedStyle(o),u=f.getPropertyValue("box-sizing"),a=Number.parseFloat(f.getPropertyValue("padding-bottom"))+Number.parseFloat(f.getPropertyValue("padding-top")),r=Number.parseFloat(f.getPropertyValue("border-bottom-width"))+Number.parseFloat(f.getPropertyValue("border-top-width"));return{contextStyle:Et.map(c=>`${c}:${f.getPropertyValue(c)}`).join(";"),paddingSize:a,borderSize:r,boxSizing:u}}function ze(o,f=1,u){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:r,borderSize:i,boxSizing:c,contextStyle:g}=It(o);b.setAttribute("style",`${g};${Ct}`),b.value=o.value||o.placeholder||"";let d=b.scrollHeight;const x={};c==="border-box"?d=d+i:c==="content-box"&&(d=d-r),b.value="";const w=b.scrollHeight-r;if(we(f)){let l=w*f;c==="border-box"&&(l=l+r+i),d=Math.max(l,d),x.minHeight=`${l}px`}if(we(u)){let l=w*u;c==="border-box"&&(l=l+r+i),d=Math.min(l,d)}return x.height=`${d}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,x}const zt=Ye({id:{type:String,default:void 0},size:Xe,disabled:Boolean,modelValue:{type:ae([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ae([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Se},prefixIcon:{type:Se},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ae([Object,Array,String]),default:()=>Ge({})},autofocus:{type:Boolean,default:!1}}),Ft={[le]:o=>oe(o),input:o=>oe(o),change:o=>oe(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},kt=["role"],Pt=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Vt=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Nt=Pe({name:"ElInput",inheritAttrs:!1}),Tt=Pe({...Nt,props:zt,emits:Ft,setup(o,{expose:f,emit:u}){const a=o,r=Ze(),i=Je(),c=p(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),g=p(()=>[a.type==="textarea"?ie.b():s.b(),s.m(re.value),s.is("disabled",z.value),s.is("exceed",Ae.value),{[s.b("group")]:i.prepend||i.append,[s.bm("group","append")]:i.append,[s.bm("group","prepend")]:i.prepend,[s.m("prefix")]:i.prefix||a.prefixIcon,[s.m("suffix")]:i.suffix||a.suffixIcon||a.clearable||a.showPassword,[s.bm("suffix","password-clear")]:_.value&&Q.value,[s.b("hidden")]:a.type==="hidden"},r.class]),d=p(()=>[s.e("wrapper"),s.is("focus",q.value)]),x=xt({excludeKeys:p(()=>Object.keys(c.value))}),{form:w,formItem:l}=pt(),{inputId:T}=ft(a,{formItemContext:l}),re=vt(),z=mt(),s=Ce("input"),ie=Ce("textarea"),L=G(),C=G(),J=N(!1),A=N(!1),O=N(!1),ue=N(),D=G(a.inputStyle),F=p(()=>L.value||C.value),{wrapperRef:Ve,isFocused:q,handleFocus:K,handleBlur:j}=St(F,{afterBlur(){var e;a.validateEvent&&((e=l==null?void 0:l.validate)==null||e.call(l,"blur").catch(n=>Ie()))}}),ce=p(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),B=p(()=>(l==null?void 0:l.validateState)||""),de=p(()=>B.value&&rt[B.value]),Ne=p(()=>O.value?it:ut),Te=p(()=>[r.style]),pe=p(()=>[a.inputStyle,D.value,{resize:a.resize}]),I=p(()=>ct(a.modelValue)?"":String(a.modelValue)),_=p(()=>a.clearable&&!z.value&&!a.readonly&&!!I.value&&(q.value||J.value)),Q=p(()=>a.showPassword&&!z.value&&!a.readonly&&!!I.value&&(!!I.value||q.value)),k=p(()=>a.showWordLimit&&!!a.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),ee=p(()=>I.value.length),Ae=p(()=>!!k.value&&ee.value>Number(a.maxlength)),Be=p(()=>!!i.suffix||!!a.suffixIcon||_.value||a.showPassword||k.value||!!B.value&&ce.value),[Re,Me]=wt(L);qe(C,e=>{if($e(),!k.value||a.resize!=="both")return;const n=e[0],{width:h}=n.contentRect;ue.value={right:`calc(100% - ${h+15+6}px)`}});const R=()=>{const{type:e,autosize:n}=a;if(!(!Fe||e!=="textarea"||!C.value))if(n){const h=Ee(n)?n.minRows:void 0,U=Ee(n)?n.maxRows:void 0,xe=ze(C.value,h,U);D.value={overflowY:"hidden",...xe},P(()=>{C.value.offsetHeight,D.value=xe})}else D.value={minHeight:ze(C.value).minHeight}},$e=(e=>{let n=!1;return()=>{var h;if(n||!a.autosize)return;((h=C.value)==null?void 0:h.offsetParent)===null||(e(),n=!0)}})(R),M=()=>{const e=F.value,n=a.formatter?a.formatter(I.value):I.value;!e||e.value===n||(e.value=n)},te=async e=>{Re();let{value:n}=e.target;if(a.formatter&&(n=a.parser?a.parser(n):n),!A.value){if(n===I.value){M();return}u(le,n),u("input",n),await P(),M(),Me()}},fe=e=>{u("change",e.target.value)},ve=e=>{u("compositionstart",e),A.value=!0},me=e=>{var n;u("compositionupdate",e);const h=(n=e.target)==null?void 0:n.value,U=h[h.length-1]||"";A.value=!yt(U)},he=e=>{u("compositionend",e),A.value&&(A.value=!1,te(e))},He=()=>{O.value=!O.value,ye()},ye=async()=>{var e;await P(),(e=F.value)==null||e.focus()},Le=()=>{var e;return(e=F.value)==null?void 0:e.blur()},Oe=e=>{J.value=!1,u("mouseleave",e)},De=e=>{J.value=!0,u("mouseenter",e)},ge=e=>{u("keydown",e)},Ke=()=>{var e;(e=F.value)==null||e.select()},be=()=>{u(le,""),u("change",""),u("clear"),u("input","")};return Z(()=>a.modelValue,()=>{var e;P(()=>R()),a.validateEvent&&((e=l==null?void 0:l.validate)==null||e.call(l,"change").catch(n=>Ie()))}),Z(I,()=>M()),Z(()=>a.type,async()=>{await P(),M(),R()}),Qe(()=>{!a.formatter&&a.parser,M(),P(R)}),f({input:L,textarea:C,ref:F,textareaStyle:pe,autosize:et(a,"autosize"),focus:ye,blur:Le,select:Ke,clear:be,resizeTextarea:R}),(e,n)=>(v(),S("div",se(t(c),{class:t(g),style:t(Te),role:e.containerRole,onMouseenter:De,onMouseleave:Oe}),[m(" input "),e.type!=="textarea"?(v(),S(ne,{key:0},[m(" prepend slot "),e.$slots.prepend?(v(),S("div",{key:0,class:y(t(s).be("group","prepend"))},[W(e.$slots,"prepend")],2)):m("v-if",!0),V("div",{ref_key:"wrapperRef",ref:Ve,class:y(t(d))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),S("span",{key:0,class:y(t(s).e("prefix"))},[V("span",{class:y(t(s).e("prefix-inner"))},[W(e.$slots,"prefix"),e.prefixIcon?(v(),E(t(H),{key:0,class:y(t(s).e("icon"))},{default:$(()=>[(v(),E(Y(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),V("input",se({id:t(T),ref_key:"input",ref:L,class:t(s).e("inner")},t(x),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?O.value?"text":"password":e.type,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[0]||(n[0]=(...h)=>t(K)&&t(K)(...h)),onBlur:n[1]||(n[1]=(...h)=>t(j)&&t(j)(...h)),onChange:fe,onKeydown:ge}),null,16,Pt),m(" suffix slot "),t(Be)?(v(),S("span",{key:1,class:y(t(s).e("suffix"))},[V("span",{class:y(t(s).e("suffix-inner"))},[!t(_)||!t(Q)||!t(k)?(v(),S(ne,{key:0},[W(e.$slots,"suffix"),e.suffixIcon?(v(),E(t(H),{key:0,class:y(t(s).e("icon"))},{default:$(()=>[(v(),E(Y(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(_)?(v(),E(t(H),{key:1,class:y([t(s).e("icon"),t(s).e("clear")]),onMousedown:ot(t(nt),["prevent"]),onClick:be},{default:$(()=>[tt(t(at))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(Q)?(v(),E(t(H),{key:2,class:y([t(s).e("icon"),t(s).e("password")]),onClick:He},{default:$(()=>[(v(),E(Y(t(Ne))))]),_:1},8,["class"])):m("v-if",!0),t(k)?(v(),S("span",{key:3,class:y(t(s).e("count"))},[V("span",{class:y(t(s).e("count-inner"))},X(t(ee))+" / "+X(e.maxlength),3)],2)):m("v-if",!0),t(B)&&t(de)&&t(ce)?(v(),E(t(H),{key:4,class:y([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t(B)==="validating")])},{default:$(()=>[(v(),E(Y(t(de))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(v(),S("div",{key:1,class:y(t(s).be("group","append"))},[W(e.$slots,"append")],2)):m("v-if",!0)],64)):(v(),S(ne,{key:1},[m(" textarea "),V("textarea",se({id:t(T),ref_key:"textarea",ref:C,class:t(ie).e("inner")},t(x),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(pe),"aria-label":e.label,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[2]||(n[2]=(...h)=>t(K)&&t(K)(...h)),onBlur:n[3]||(n[3]=(...h)=>t(j)&&t(j)(...h)),onChange:fe,onKeydown:ge}),null,16,Vt),t(k)?(v(),S("span",{key:0,style:st(ue.value),class:y(t(s).e("count"))},X(t(ee))+" / "+X(e.maxlength),7)):m("v-if",!0)],64))],16,kt))}});var At=lt(Tt,[["__file","input.vue"]]);const Lt=dt(At);export{Ht as C,Lt as E,le as U,$t as c,yt as i,St as u};