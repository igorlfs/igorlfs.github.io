function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/about.DSK89uli.js","../chunks/scheduler.hmPMH6-H.js","../chunks/index.DSET9CbI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as at}from"../chunks/preload-helper.D6kgxu3v.js";import{H as nt}from"../chunks/control.CYgJF_JY.js";import{s as ot}from"../chunks/scheduler.hmPMH6-H.js";import{S as lt,i as rt,v as B,e as v,s as A,t as M,w as F,l as st,c as g,d as _,f as H,a as E,b as O,x as it,g as p,j as d,h as S,y as J,k as C,o as K,p as ct,q as Q,m as ut,z as W,u as ft}from"../chunks/index.DSET9CbI.js";import{e as X}from"../chunks/each.D6YF6ztN.js";import{f as Y}from"../chunks/utils.D2VCOvFc.js";const mt=(o,t)=>{const a=o[t];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((n,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+t)))})};function _t(o,t){throw new nt(o,t)}new TextEncoder;const dt=async({params:o})=>{try{const t=await mt(Object.assign({"../../posts/about.md":()=>at(()=>import("../chunks/about.DSK89uli.js"),__vite__mapDeps([0,1,2]),import.meta.url)}),`../../posts/${o.slug}.md`);return{content:t.default,meta:t.metadata}}catch{_t(404,`Could not find ${o.slug}`)}},wt=Object.freeze(Object.defineProperty({__proto__:null,load:dt},Symbol.toStringTag,{value:"Module"}));function Z(o,t,a){const n=o.slice();return n[1]=t[a],n}function tt(o){let t,a=Y(o[0].meta.date)+"",n;return{c(){t=v("p"),n=M(a),this.h()},l(r){t=g(r,"P",{class:!0});var i=E(t);n=O(i,a),i.forEach(_),this.h()},h(){p(t,"class","mt-2 text-subtext")},m(r,i){S(r,t,i),d(t,n)},p(r,i){i&1&&a!==(a=Y(r[0].meta.date)+"")&&C(n,a)},d(r){r&&_(t)}}}function et(o){let t,a,n=o[1]+"",r;return{c(){t=v("span"),a=M("#"),r=M(n),this.h()},l(i){t=g(i,"SPAN",{class:!0});var f=E(t);a=O(f,"#"),r=O(f,n),f.forEach(_),this.h()},h(){p(t,"class","rounded-3xl bg-crust px-3 py-2")},m(i,f){S(i,t,f),d(t,a),d(t,r)},p(i,f){f&1&&n!==(n=i[1]+"")&&C(r,n)},d(i){i&&_(t)}}}function pt(o){let t,a,n,r,i,f,h,y,P,j=o[0].meta.title+"",D,q,z,$,R,w,s,k;document.title=t=o[0].meta.title;let u=o[0].meta.date&&tt(o),x=X(o[0].meta.categories),c=[];for(let e=0;e<x.length;e+=1)c[e]=et(Z(o,x,e));var T=o[0].content;function L(e,m){return{}}return T&&(s=B(T,L())),{c(){a=v("meta"),n=v("meta"),i=A(),f=v("div"),h=v("article"),y=v("hgroup"),P=v("h1"),D=M(j),q=A(),u&&u.c(),z=A(),$=v("div");for(let e=0;e<c.length;e+=1)c[e].c();R=A(),w=v("div"),s&&F(s.$$.fragment),this.h()},l(e){const m=st("svelte-1fzsjrp",document.head);a=g(m,"META",{property:!0,content:!0}),n=g(m,"META",{property:!0,content:!0}),m.forEach(_),i=H(e),f=g(e,"DIV",{class:!0});var l=E(f);h=g(l,"ARTICLE",{class:!0});var b=E(h);y=g(b,"HGROUP",{});var I=E(y);P=g(I,"H1",{class:!0});var U=E(P);D=O(U,j),U.forEach(_),q=H(I),u&&u.l(I),I.forEach(_),z=H(b),$=g(b,"DIV",{class:!0});var G=E($);for(let V=0;V<c.length;V+=1)c[V].l(G);G.forEach(_),R=H(b),w=g(b,"DIV",{class:!0});var N=E(w);s&&it(s.$$.fragment,N),N.forEach(_),b.forEach(_),l.forEach(_),this.h()},h(){p(a,"property","og:type"),p(a,"content","article"),p(n,"property","og:title"),p(n,"content",r=o[0].meta.title),p(P,"class","capitalize text-4xl font-bold text-lavender"),p($,"class","flex gap-4 mt-3"),p(w,"class","prose"),p(h,"class","xl:w-[60%] sm:w-[90%]"),p(f,"class","text-text pb-8 my-10 flex justify-center")},m(e,m){d(document.head,a),d(document.head,n),S(e,i,m),S(e,f,m),d(f,h),d(h,y),d(y,P),d(P,D),d(y,q),u&&u.m(y,null),d(h,z),d(h,$);for(let l=0;l<c.length;l+=1)c[l]&&c[l].m($,null);d(h,R),d(h,w),s&&J(s,w,null),k=!0},p(e,[m]){if((!k||m&1)&&t!==(t=e[0].meta.title)&&(document.title=t),(!k||m&1&&r!==(r=e[0].meta.title))&&p(n,"content",r),(!k||m&1)&&j!==(j=e[0].meta.title+"")&&C(D,j),e[0].meta.date?u?u.p(e,m):(u=tt(e),u.c(),u.m(y,null)):u&&(u.d(1),u=null),m&1){x=X(e[0].meta.categories);let l;for(l=0;l<x.length;l+=1){const b=Z(e,x,l);c[l]?c[l].p(b,m):(c[l]=et(b),c[l].c(),c[l].m($,null))}for(;l<c.length;l+=1)c[l].d(1);c.length=x.length}if(m&1&&T!==(T=e[0].content)){if(s){ft();const l=s;K(l.$$.fragment,1,0,()=>{W(l,1)}),ct()}T?(s=B(T,L()),F(s.$$.fragment),Q(s.$$.fragment,1),J(s,w,null)):s=null}},i(e){k||(s&&Q(s.$$.fragment,e),k=!0)},o(e){s&&K(s.$$.fragment,e),k=!1},d(e){e&&(_(i),_(f)),_(a),_(n),u&&u.d(),ut(c,e),s&&W(s)}}}function ht(o,t,a){let{data:n}=t;return o.$$set=r=>{"data"in r&&a(0,n=r.data)},[n]}class kt extends lt{constructor(t){super(),rt(this,t,ht,pt,ot,{data:0})}}export{kt as component,wt as universal};
