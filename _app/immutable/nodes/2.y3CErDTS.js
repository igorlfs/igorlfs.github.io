import{s as N,n as w}from"../chunks/scheduler.j7AEvm1m.js";import{S as O,i as T,s as x,e as v,l as U,d as u,f as E,c as g,a as b,g as p,h as k,j as _,m as B,t as S,b as I,k as L}from"../chunks/index.GnT-pjkZ.js";import{e as C}from"../chunks/each.D6YF6ztN.js";import{f as q}from"../chunks/utils.D2VCOvFc.js";import{b as z}from"../chunks/paths.CNphtvgf.js";function A(n,e,a){const s=n.slice();return s[1]=e[a],s}function D(n){let e,a=q(n[1].date)+"",s;return{c(){e=v("p"),s=S(a),this.h()},l(r){e=g(r,"P",{class:!0});var t=b(e);s=I(t,a),t.forEach(u),this.h()},h(){p(e,"class","mt-2 text-subtext")},m(r,t){k(r,e,t),_(e,s)},p(r,t){t&1&&a!==(a=q(r[1].date)+"")&&L(s,a)},d(r){r&&u(e)}}}function F(n){let e,a,s=n[1].title+"",r,t,i,h,l,d=n[1].description+"",m,y,o=n[1].date&&D(n);return{c(){e=v("li"),a=v("a"),r=S(s),i=x(),o&&o.c(),h=x(),l=v("p"),m=S(d),y=x(),this.h()},l(f){e=g(f,"LI",{class:!0});var c=b(e);a=g(c,"A",{href:!0,class:!0});var P=b(a);r=I(P,s),P.forEach(u),i=E(c),o&&o.l(c),h=E(c),l=g(c,"P",{class:!0});var j=b(l);m=I(j,d),j.forEach(u),y=E(c),c.forEach(u),this.h()},h(){p(a,"href",t=z+"/"+n[1].slug),p(a,"class","text-lavender capitalize sm:text-5xl text-3xl"),p(l,"class","mt-2"),p(e,"class","[&:not(:first-child)]:pt-3 pb-3")},m(f,c){k(f,e,c),_(e,a),_(a,r),_(e,i),o&&o.m(e,null),_(e,h),_(e,l),_(l,m),_(e,y)},p(f,c){c&1&&s!==(s=f[1].title+"")&&L(r,s),c&1&&t!==(t=z+"/"+f[1].slug)&&p(a,"href",t),f[1].date?o?o.p(f,c):(o=D(f),o.c(),o.m(e,h)):o&&(o.d(1),o=null),c&1&&d!==(d=f[1].description+"")&&L(m,d)},d(f){f&&u(e),o&&o.d()}}}function G(n){let e,a,s,r=C(n[0].posts),t=[];for(let i=0;i<r.length;i+=1)t[i]=F(A(n,r,i));return{c(){e=x(),a=v("section"),s=v("ul");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){U("svelte-1f2yoex",document.head).forEach(u),e=E(i),a=g(i,"SECTION",{class:!0});var l=b(a);s=g(l,"UL",{class:!0});var d=b(s);for(let m=0;m<t.length;m+=1)t[m].l(d);d.forEach(u),l.forEach(u),this.h()},h(){document.title="IgorLFS",p(s,"class","grid grid-cols-1 divide-y-2 divide-crust xl:w-[60%] w-[90%]"),p(a,"class","text-text pb-8 my-10 flex justify-center")},m(i,h){k(i,e,h),k(i,a,h),_(a,s);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(s,null)},p(i,[h]){if(h&1){r=C(i[0].posts);let l;for(l=0;l<r.length;l+=1){const d=A(i,r,l);t[l]?t[l].p(d,h):(t[l]=F(d),t[l].c(),t[l].m(s,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=r.length}},i:w,o:w,d(i){i&&(u(e),u(a)),B(t,i)}}}function H(n,e,a){let{data:s}=e;return n.$$set=r=>{"data"in r&&a(0,s=r.data)},[s]}class V extends O{constructor(e){super(),T(this,e,H,G,N,{data:0})}}export{V as component};