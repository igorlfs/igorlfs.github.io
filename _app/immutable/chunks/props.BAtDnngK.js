import{a1 as A,a2 as G,a3 as $,X as h,a4 as z,a5 as w,a6 as O,a7 as v,g as b,M as L,a8 as H,Z as V,B as W,a9 as X,aa as J,ab as Y,ac as Q,y as C,ad as K,ae as D,af as Z,ag as k,ah as ee,ai as M,aj as re,w as ne,ak as ie,al as te,am as q,an as ae,ao as se,W as fe}from"./runtime.cFwoZaEO.js";import{c as ue}from"./store.D35ZGodw.js";function R(e,r=null,f){if(typeof e!="object"||e===null||A in e)return e;const u=V(e);if(u!==G&&u!==$)return e;var t=new Map,o=W(e),P=h(0);o&&t.set("length",h(e.length));var g;return new Proxy(e,{defineProperty(l,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&z();var s=t.get(n);return s===void 0?(s=h(i.value),t.set(n,s)):w(s,R(i.value,g)),!0},deleteProperty(l,n){var i=t.get(n);if(i===void 0)n in l&&t.set(n,h(v));else{if(o&&typeof n=="string"){var s=t.get("length"),a=Number(n);Number.isInteger(a)&&a<s.v&&w(s,a)}w(i,v),F(P)}return!0},get(l,n,i){var _;if(n===A)return e;var s=t.get(n),a=n in l;if(s===void 0&&(!a||(_=O(l,n))!=null&&_.writable)&&(s=h(R(a?l[n]:v,g)),t.set(n,s)),s!==void 0){var d=b(s);return d===v?void 0:d}return Reflect.get(l,n,i)},getOwnPropertyDescriptor(l,n){var i=Reflect.getOwnPropertyDescriptor(l,n);if(i&&"value"in i){var s=t.get(n);s&&(i.value=b(s))}else if(i===void 0){var a=t.get(n),d=a==null?void 0:a.v;if(a!==void 0&&d!==v)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return i},has(l,n){var d;if(n===A)return!0;var i=t.get(n),s=i!==void 0&&i.v!==v||Reflect.has(l,n);if(i!==void 0||L!==null&&(!s||(d=O(l,n))!=null&&d.writable)){i===void 0&&(i=h(s?R(l[n],g):v),t.set(n,i));var a=b(i);if(a===v)return!1}return s},set(l,n,i,s){var m;var a=t.get(n),d=n in l;if(o&&n==="length")for(var _=i;_<a.v;_+=1){var y=t.get(_+"");y!==void 0?w(y,v):_ in l&&(y=h(v),t.set(_+"",y))}a===void 0?(!d||(m=O(l,n))!=null&&m.writable)&&(a=h(void 0),w(a,R(i,g)),t.set(n,a)):(d=a.v!==v,w(a,R(i,g)));var p=Reflect.getOwnPropertyDescriptor(l,n);if(p!=null&&p.set&&p.set.call(s,i),!d){if(o&&typeof n=="string"){var x=t.get("length"),E=Number(n);Number.isInteger(E)&&E>=x.v&&w(x,E+1)}F(P)}return!0},ownKeys(l){b(P);var n=Reflect.ownKeys(l).filter(a=>{var d=t.get(a);return d===void 0||d.v!==v});for(var[i,s]of t)s.v!==v&&!(i in l)&&n.push(i);return n},setPrototypeOf(){H()}})}function F(e,r=1){w(e,e.v+r)}const le={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,f){return r in e.special||(e.special[r]=ce({get[r](){return e.props[r]}},r,Y)),e.special[r](f),K(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),K(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function _e(e,r){return new Proxy({props:e,exclude:r,special:{},version:h(0)},le)}const de={get(e,r){let f=e.props.length;for(;f--;){let u=e.props[f];if(D(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u)return u[r]}},set(e,r,f){let u=e.props.length;for(;u--;){let t=e.props[u];D(t)&&(t=t());const o=O(t,r);if(o&&o.set)return o.set(f),!0}return!1},getOwnPropertyDescriptor(e,r){let f=e.props.length;for(;f--;){let u=e.props[f];if(D(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u){const t=O(u,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){if(r===A||r===Z)return!1;for(let f of e.props)if(D(f)&&(f=f()),f!=null&&r in f)return!0;return!1},ownKeys(e){const r=[];for(let f of e.props){D(f)&&(f=f());for(const u in f)r.includes(u)||r.push(u)}return r}};function pe(...e){return new Proxy({props:e},de)}function U(e){for(var r=L,f=L;r!==null&&!(r.f&(k|ee));)r=r.parent;try{return M(r),e()}finally{M(f)}}function ce(e,r,f,u){var j;var t=(f&re)!==0,o=!ne||(f&ie)!==0,P=(f&te)!==0,g=(f&se)!==0,l=!1,n;P?[n,l]=ue(()=>e[r]):n=e[r];var i=A in e||Z in e,s=((j=O(e,r))==null?void 0:j.set)??(i&&P&&r in e?c=>e[r]=c:void 0),a=u,d=!0,_=!1,y=()=>(_=!0,d&&(d=!1,g?a=C(u):a=u),a);n===void 0&&u!==void 0&&(s&&o&&X(),n=y(),s&&s(n));var p;if(o)p=()=>{var c=e[r];return c===void 0?y():(d=!0,_=!1,c)};else{var x=U(()=>(t?q:ae)(()=>e[r]));x.f|=J,p=()=>{var c=b(x);return c!==void 0&&(a=void 0),c===void 0?a:c}}if(!(f&Y))return p;if(s){var E=e.$$legacy;return function(c,I){return arguments.length>0?((!o||!I||E||l)&&s(I?p():c),c):p()}}var m=!1,B=!1,N=fe(n),S=U(()=>q(()=>{var c=p(),I=b(N);return m?(m=!1,B=!0,I):(B=!1,N.v=c)}));return t||(S.equals=Q),function(c,I){if(arguments.length>0){const T=I?b(S):o&&P?R(c):c;return S.equals(T)||(m=!0,w(N,T),_&&a!==void 0&&(a=T),C(()=>b(S))),c}return b(S)}}export{R as a,_e as l,ce as p,pe as s};