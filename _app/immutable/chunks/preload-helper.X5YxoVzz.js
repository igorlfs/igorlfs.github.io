import{b as S,h as _,d as k,E as p,z as A,A as P,l as T,B as b,C as g,e as E,D as y,i as w}from"./runtime.Bh8MV18q.js";function q(d,l,c=!1){_&&k();var r=d,t=null,n=null,s=null,e=c?p:0,h=!1;const a=(m,f=!0)=>{h=!0,i(f,m)},i=(m,f)=>{if(s===(s=m))return;let o=!1;if(_){const u=r.data===A;s===u&&(r=P(),T(r),b(!1),o=!0)}s?(t?g(t):f&&(t=E(()=>f(r))),n&&y(n,()=>{n=null})):(n?g(n):f&&(n=E(()=>f(r))),t&&y(t,()=>{t=null})),o&&b(!0)};S(()=>{h=!1,l(a),h||i(null,null)},e),_&&(r=w)}function $(d,l,c){_&&k();var r=d,t,n;S(()=>{t!==(t=l())&&(n&&(y(n),n=null),t&&(n=E(()=>c(r,t))))},p),_&&(r=w)}const C="modulepreload",L=function(d,l){return new URL(d,l).href},R={},x=function(l,c,r){let t=Promise.resolve();if(c&&c.length>0){const s=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),h=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));t=Promise.allSettled(c.map(a=>{if(a=L(a,r),a in R)return;R[a]=!0;const i=a.endsWith(".css"),m=i?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const v=s[u];if(v.href===a&&(!i||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${m}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":C,i||(o.as="script"),o.crossOrigin="",o.href=a,h&&o.setAttribute("nonce",h),document.head.appendChild(o),i)return new Promise((u,v)=>{o.addEventListener("load",u),o.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${a}`)))})}))}function n(s){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=s,window.dispatchEvent(e),!e.defaultPrevented)throw s}return t.then(s=>{for(const e of s||[])e.status==="rejected"&&n(e.reason);return l().catch(n)})};export{x as _,$ as c,q as i};
