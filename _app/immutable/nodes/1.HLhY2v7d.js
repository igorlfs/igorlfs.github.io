import{s as S,n as v,c as j}from"../chunks/scheduler.j7AEvm1m.js";import{S as q,i as C,e as h,t as x,s as D,a as b,b as f,l as E,d as m,c as H,f as $,g as I,j as p,m as y}from"../chunks/index.BH3Pb7e9.js";import{s as P}from"../chunks/entry.D7nZP6Fh.js";const V=()=>{const t=P;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},k={subscribe(t){return V().page.subscribe(t)}};function w(t){var g;let e,a,r=t[0].status+"",n,d,c,i=((g=t[0].error)==null?void 0:g.message)+"",u;return{c(){e=h("div"),a=h("h1"),n=x(r),d=D(),c=h("p"),u=x(i),this.h()},l(o){e=b(o,"DIV",{class:!0});var s=f(e);a=b(s,"H1",{class:!0});var l=f(a);n=E(l,r),l.forEach(m),d=H(s),c=b(s,"P",{});var _=f(c);u=E(_,i),_.forEach(m),s.forEach(m),this.h()},h(){$(a,"class","text-primary text-3xl font-bold"),$(e,"class","h-full my-10 grid place-content-center text-text")},m(o,s){I(o,e,s),p(e,a),p(a,n),p(e,d),p(e,c),p(c,u)},p(o,[s]){var l;s&1&&r!==(r=o[0].status+"")&&y(n,r),s&1&&i!==(i=((l=o[0].error)==null?void 0:l.message)+"")&&y(u,i)},i:v,o:v,d(o){o&&m(e)}}}function z(t,e,a){let r;return j(t,k,n=>a(0,r=n)),[r]}let G=class extends q{constructor(e){super(),C(this,e,z,w,S,{})}};export{G as component};
