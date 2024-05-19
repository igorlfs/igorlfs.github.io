function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/about.f1KnjrX3.js","../chunks/scheduler.j7AEvm1m.js","../chunks/index.GnT-pjkZ.js","../chunks/mdsvex.CB79NlyW.js","../chunks/neovim-cpp-dbg.kTBgbZV7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as N}from"../chunks/preload-helper.D6kgxu3v.js";import{H as ot}from"../chunks/control.CYgJF_JY.js";import{s as nt}from"../chunks/scheduler.j7AEvm1m.js";import{S as rt,i as lt,B as F,e as v,s as j,t as H,n as J,l as st,c as g,d as _,f as O,a as y,b as M,o as it,g as d,j as p,h as R,p as K,k as C,r as Q,y as ct,q as W,m as mt,u as X,A as ut}from"../chunks/index.GnT-pjkZ.js";import{e as Y}from"../chunks/each.D6YF6ztN.js";import{f as Z}from"../chunks/utils.D2VCOvFc.js";const ft=(n,t)=>{const a=n[t];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((o,l)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic import: "+t)))})};function _t(n,t){throw new ot(n,t)}new TextEncoder;const pt=async({params:n})=>{try{const t=await ft(Object.assign({"../../posts/about.md":()=>N(()=>import("../chunks/about.f1KnjrX3.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"../../posts/neovim-cpp-dbg.md":()=>N(()=>import("../chunks/neovim-cpp-dbg.kTBgbZV7.js"),__vite__mapDeps([4,1,2,3]),import.meta.url)}),`../../posts/${n.slug}.md`);return{content:t.default,meta:t.metadata}}catch{_t(404,`Could not find ${n.slug}`)}},wt=Object.freeze(Object.defineProperty({__proto__:null,load:pt},Symbol.toStringTag,{value:"Module"}));function tt(n,t,a){const o=n.slice();return o[1]=t[a],o}function et(n){let t,a=Z(n[0].meta.date)+"",o;return{c(){t=v("p"),o=H(a),this.h()},l(l){t=g(l,"P",{class:!0});var i=y(t);o=M(i,a),i.forEach(_),this.h()},h(){d(t,"class","mt-2 text-subtext")},m(l,i){R(l,t,i),p(t,o)},p(l,i){i&1&&a!==(a=Z(l[0].meta.date)+"")&&C(o,a)},d(l){l&&_(t)}}}function at(n){let t,a,o=n[1]+"",l;return{c(){t=v("span"),a=H("#"),l=H(o),this.h()},l(i){t=g(i,"SPAN",{class:!0});var u=y(t);a=M(u,"#"),l=M(u,o),u.forEach(_),this.h()},h(){d(t,"class","rounded-3xl bg-crust px-3 py-2")},m(i,u){R(i,t,u),p(t,a),p(t,l)},p(i,u){u&1&&o!==(o=i[1]+"")&&C(l,o)},d(i){i&&_(t)}}}function dt(n){let t,a,o,l,i,u,h,b,x,A=n[0].meta.title+"",D,S,V,$,q,w,s,k;document.title=t=n[0].meta.title;let m=n[0].meta.date&&et(n),P=Y(n[0].meta.categories),c=[];for(let e=0;e<P.length;e+=1)c[e]=at(tt(n,P,e));var T=n[0].content;function L(e,f){return{}}return T&&(s=F(T,L())),{c(){a=v("meta"),o=v("meta"),i=j(),u=v("div"),h=v("article"),b=v("hgroup"),x=v("h1"),D=H(A),S=j(),m&&m.c(),V=j(),$=v("div");for(let e=0;e<c.length;e+=1)c[e].c();q=j(),w=v("div"),s&&J(s.$$.fragment),this.h()},l(e){const f=st("svelte-1fzsjrp",document.head);a=g(f,"META",{property:!0,content:!0}),o=g(f,"META",{property:!0,content:!0}),f.forEach(_),i=O(e),u=g(e,"DIV",{class:!0});var r=y(u);h=g(r,"ARTICLE",{class:!0});var E=y(h);b=g(E,"HGROUP",{});var I=y(b);x=g(I,"H1",{class:!0});var U=y(x);D=M(U,A),U.forEach(_),S=O(I),m&&m.l(I),I.forEach(_),V=O(E),$=g(E,"DIV",{class:!0});var B=y($);for(let z=0;z<c.length;z+=1)c[z].l(B);B.forEach(_),q=O(E),w=g(E,"DIV",{class:!0});var G=y(w);s&&it(s.$$.fragment,G),G.forEach(_),E.forEach(_),r.forEach(_),this.h()},h(){d(a,"property","og:type"),d(a,"content","article"),d(o,"property","og:title"),d(o,"content",l=n[0].meta.title),d(x,"class","capitalize sm:text-5xl text-3xl font-bold text-lavender"),d($,"class","flex gap-4 mt-3"),d(w,"class","prose lg:prose-xl max-w-none"),d(h,"class","xl:w-[60%] w-[90%]"),d(u,"class","text-text pb-8 my-10 flex justify-center")},m(e,f){p(document.head,a),p(document.head,o),R(e,i,f),R(e,u,f),p(u,h),p(h,b),p(b,x),p(x,D),p(b,S),m&&m.m(b,null),p(h,V),p(h,$);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m($,null);p(h,q),p(h,w),s&&K(s,w,null),k=!0},p(e,[f]){if((!k||f&1)&&t!==(t=e[0].meta.title)&&(document.title=t),(!k||f&1&&l!==(l=e[0].meta.title))&&d(o,"content",l),(!k||f&1)&&A!==(A=e[0].meta.title+"")&&C(D,A),e[0].meta.date?m?m.p(e,f):(m=et(e),m.c(),m.m(b,null)):m&&(m.d(1),m=null),f&1){P=Y(e[0].meta.categories);let r;for(r=0;r<P.length;r+=1){const E=tt(e,P,r);c[r]?c[r].p(E,f):(c[r]=at(E),c[r].c(),c[r].m($,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=P.length}if(f&1&&T!==(T=e[0].content)){if(s){ut();const r=s;Q(r.$$.fragment,1,0,()=>{X(r,1)}),ct()}T?(s=F(T,L()),J(s.$$.fragment),W(s.$$.fragment,1),K(s,w,null)):s=null}},i(e){k||(s&&W(s.$$.fragment,e),k=!0)},o(e){s&&Q(s.$$.fragment,e),k=!1},d(e){e&&(_(i),_(u)),_(a),_(o),m&&m.d(),mt(c,e),s&&X(s)}}}function ht(n,t,a){let{data:o}=t;return n.$$set=l=>{"data"in l&&a(0,o=l.data)},[o]}class kt extends rt{constructor(t){super(),lt(this,t,ht,dt,nt,{data:0})}}export{kt as component,wt as universal};
