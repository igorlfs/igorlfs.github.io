import{s as N,n as w}from"../chunks/scheduler.j7AEvm1m.js";import{S as O,i as T,s as E,e as g,h as U,d as u,c as x,a as v,b,f as p,g as k,j as _,k as B,t as S,l as I,m as L}from"../chunks/index.BH3Pb7e9.js";import{e as C}from"../chunks/each.D6YF6ztN.js";import{f as q}from"../chunks/utils.D2VCOvFc.js";import{b as z}from"../chunks/paths.CfdbKn0q.js";function A(n,e,a){const s=n.slice();return s[1]=e[a],s}function D(n){let e,a=q(n[1].date)+"",s;return{c(){e=g("p"),s=S(a),this.h()},l(o){e=v(o,"P",{class:!0});var t=b(e);s=I(t,a),t.forEach(u),this.h()},h(){p(e,"class","mt-2 text-subtext")},m(o,t){k(o,e,t),_(e,s)},p(o,t){t&1&&a!==(a=q(o[1].date)+"")&&L(s,a)},d(o){o&&u(e)}}}function F(n){let e,a,s=n[1].title+"",o,t,i,h,l,d=n[1].description+"",m,y,r=n[1].date&&D(n);return{c(){e=g("li"),a=g("a"),o=S(s),i=E(),r&&r.c(),h=E(),l=g("p"),m=S(d),y=E(),this.h()},l(f){e=v(f,"LI",{class:!0});var c=b(e);a=v(c,"A",{href:!0,class:!0});var P=b(a);o=I(P,s),P.forEach(u),i=x(c),r&&r.l(c),h=x(c),l=v(c,"P",{class:!0});var j=b(l);m=I(j,d),j.forEach(u),y=x(c),c.forEach(u),this.h()},h(){p(a,"href",t=z+"/"+n[1].slug),p(a,"class","capitalize sm:text-5xl text-3xl"),p(l,"class","mt-2"),p(e,"class","[&:not(:first-child)]:pt-3 pb-3")},m(f,c){k(f,e,c),_(e,a),_(a,o),_(e,i),r&&r.m(e,null),_(e,h),_(e,l),_(l,m),_(e,y)},p(f,c){c&1&&s!==(s=f[1].title+"")&&L(o,s),c&1&&t!==(t=z+"/"+f[1].slug)&&p(a,"href",t),f[1].date?r?r.p(f,c):(r=D(f),r.c(),r.m(e,h)):r&&(r.d(1),r=null),c&1&&d!==(d=f[1].description+"")&&L(m,d)},d(f){f&&u(e),r&&r.d()}}}function G(n){let e,a,s,o=C(n[0].posts),t=[];for(let i=0;i<o.length;i+=1)t[i]=F(A(n,o,i));return{c(){e=E(),a=g("section"),s=g("ul");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){U("svelte-1f2yoex",document.head).forEach(u),e=x(i),a=v(i,"SECTION",{class:!0});var l=b(a);s=v(l,"UL",{class:!0});var d=b(s);for(let m=0;m<t.length;m+=1)t[m].l(d);d.forEach(u),l.forEach(u),this.h()},h(){document.title="IgorLFS",p(s,"class","grid grid-cols-1 divide-y-2 divide-crust xl:w-[60%] w-[90%]"),p(a,"class","text-text pb-8 my-10 flex justify-center")},m(i,h){k(i,e,h),k(i,a,h),_(a,s);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(s,null)},p(i,[h]){if(h&1){o=C(i[0].posts);let l;for(l=0;l<o.length;l+=1){const d=A(i,o,l);t[l]?t[l].p(d,h):(t[l]=F(d),t[l].c(),t[l].m(s,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=o.length}},i:w,o:w,d(i){i&&(u(e),u(a)),B(t,i)}}}function H(n,e,a){let{data:s}=e;return n.$$set=o=>{"data"in o&&a(0,s=o.data)},[s]}class V extends O{constructor(e){super(),T(this,e,H,G,N,{data:0})}}export{V as component};
