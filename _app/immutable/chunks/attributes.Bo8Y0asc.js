import{b as K,B as V,c as O,d as b,e as k,E as S,q as D,D as x,F as H,z as q,G as N,J as w,K as F,L as G,M,N as J,S as Q,O as U,H as X,f as h,A as j}from"./runtime.DJiEXuFG.js";import{k as P,h as C,l as R,e as y,f as L}from"./disclose-version.AvVJUKAd.js";let I=null;function W(r,a,e){for(var t=[],u=r.length,l=0;l<u;l++)w(r[l],t,!0);if(r.length>0&&t.length===0&&a!==null){var i=a.parentNode;i.textContent="",i.append(a)}F(t,()=>{for(var f=0;f<u;f++)G(r[f]);e!==void 0&&e()})}function Z(r,a,e,t,u,l,i){var f={flags:a,items:[]},T=(a&M)!==0;if(T){var E=r;r=C?R(E.firstChild):E.appendChild(P())}var n=null;K(()=>{var v=e(),s=V(v)?v:v==null?[]:Array.from(v),A=t===null?s:s.map(t),m=s.length,o=f.flags;o&H&&!J(s)&&!(Q in s)&&(o^=H,o&U&&!(o&S)&&(o^=S));let g=!1;if(C){var z=r.data===X;z!==(m===0)&&(h(L),y(!1),g=!0)}if(C){for(var d=[],_=L[0],p=0;p<m;p++){if(_.nodeType!==8||_.data!==j){g=!0,y(!1);break}_=R(_),d[p]=Y(_,s[p],A==null?void 0:A[p],p,u,o),_=_.nextSibling}if(m>0)for(;_!==r;){var B=_.nextSibling;_.remove(),_=B}f.items=d}C||i(s,f,r,u,o,A),l!==null&&(m===0?n?O(n):n=b(()=>l(r)):n!==null&&k(n,()=>{n=null})),g&&y(!0)})}function sr(r,a,e,t,u=null){Z(r,a,e,null,t,u,$)}function $(r,a,e,t,u){for(var l=a.items,i=l.length,f=r.length,T=Math.min(i,f),E=Array(f),n,v,s=0;s<T;s+=1)v=r[s],n=l[s],E[s]=n,c(n,v,s,u),O(n.e);if(f>i){for(;s<f;s+=1)v=r[s],n=Y(e,v,null,s,t,u),E[s]=n;a.items=E}else if(i>f){var A=[];for(s=f;s<i;s+=1)A.push(l[s].e);var m=u&M&&f===0?e:null;W(A,m,()=>{a.items.length=f})}}function c(r,a,e,t){t&S&&D(r.v,a),t&x?D(r.i,e):r.i=e}function Y(r,a,e,t,u,l){var i=I;try{var f=(l&S)!==0,T=(l&H)===0,E=f?T?q(a):N(a):a,n=l&x?N(t):t,v={i:n,v:E,k:e,a:null,e:null};return I=v,v.e=b(()=>u(r,E,n)),v}finally{I=i}}function er(r,a,e){e=e==null?null:e+"";var t=r.__attributes??(r.__attributes={});C&&(t[a]=r.getAttribute(a),a==="src"||a==="href"||a==="srcset")||t[a]!==(t[a]=e)&&(e===null?r.removeAttribute(a):r.setAttribute(a,e))}export{sr as e,er as s};
