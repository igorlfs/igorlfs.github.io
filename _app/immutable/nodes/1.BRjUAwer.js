import{a as v,t as _,s as u}from"../chunks/disclose-version.BuaBUZqL.js";import"../chunks/legacy.3-Kx5GJo.js";import{aq as x,x as g,v as h,y,ar as m,g as d,as as $,at as k,am as q,p as S,t as j,a as w,c as f,r as l,s as z}from"../chunks/runtime.cFwoZaEO.js";import{s as A,a as B}from"../chunks/store.D35ZGodw.js";import{s as C}from"../chunks/entry.g2eUdb4V.js";function D(s=!1){const t=h,e=t.l.u;if(!e)return;let n=()=>k(t.s);if(s){let a=0,r={};const p=q(()=>{let i=!1;const c=t.s;for(const o in c)c[o]!==r[o]&&(r[o]=c[o],i=!0);return i&&a++,a});n=()=>d(p)}e.b.length&&x(()=>{b(t,n),m(e.b)}),g(()=>{const a=y(()=>e.m.map($));return()=>{for(const r of a)typeof r=="function"&&r()}}),e.a.length&&g(()=>{b(t,n),m(e.a)})}function b(s,t){if(s.l.s)for(const e of s.l.s)d(e);t()}const E=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},F={subscribe(s){return E().page.subscribe(s)}};var G=_('<div class="flex flex-col my-10 items-center text-text"><h1 class="text-primary text-3xl font-bold"> </h1> <p> </p></div>');function M(s,t){S(t,!1);const e=A(),n=()=>B(F,"$page",e);D();var a=G(),r=f(a),p=f(r,!0);l(r);var i=z(r,2),c=f(i,!0);l(i),l(a),j(()=>{var o;u(p,n().status),u(c,(o=n().error)==null?void 0:o.message)}),v(s,a),w()}export{M as component};