import{q as i,y as b,ap as f,W as o,g as a,a5 as l}from"./runtime.cFwoZaEO.js";function d(u,e,n){if(u==null)return e(void 0),i;const s=b(()=>u.subscribe(e,n));return s.unsubscribe?()=>s.unsubscribe():s}let r=!1;function g(u,e,n){const s=n[e]??(n[e]={store:null,source:o(void 0),unsubscribe:i});if(s.store!==u)if(s.unsubscribe(),s.store=u??null,u==null)s.source.v=void 0,s.unsubscribe=i;else{var t=!0;s.unsubscribe=d(u,c=>{t?s.source.v=c:l(s.source,c)}),t=!1}return a(s.source)}function _(){const u={};return f(()=>{for(var e in u)u[e].unsubscribe()}),u}function v(u){var e=r;try{return r=!1,[u(),r]}finally{r=e}}export{g as a,v as c,_ as s};
