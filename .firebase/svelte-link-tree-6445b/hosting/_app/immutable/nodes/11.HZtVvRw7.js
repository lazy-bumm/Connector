import{w as K,L as ge,M as ve,s as $t,N as Mt,e as _t,n as ke,g as C,h as L,z as Z,k as S,i as N,c as U,d as A,A as qt,G as Ct,u as ye,q as we,r as Ce,H as te,v as dt,p as ht,I as Le,O as Se,l as nt,m as st,y as De,P as Gt,F as rt,J as Ee}from"../chunks/scheduler.QFVCaXZV.js";import{u as Re,w as Ie,x as Pe,y as Be,S as ee,i as ne,d as z,v as se,a as j,h as Ot,t as tt,c as jt,b as Q,e as v,q as bt,z as Ht,g as _,A as Oe,n as w,p as J,B as je,j as le,k as oe,m as ie,s as Jt,r as ae,l as re}from"../chunks/index.5xRIlaLs.js";import{U as ce,g as Te,a as Ne}from"../chunks/UserLink.EGNBppHP.js";import{p as kt}from"../chunks/stores.wbY-AGIG.js";import{A as Ve}from"../chunks/AuthCheck.A4oqIV7H.js";import{c as Ue}from"../chunks/index.3RTtd_1L.js";import{e as it,a as yt,u as wt,k as Wt,l as Xt,f as at,m as Yt,g as mt}from"../chunks/firebase.3aidnv6S.js";import{w as Kt}from"../chunks/index.nb3JogYc.js";function Ae(n,t,e,l){if(!t)return K;const s=n.getBoundingClientRect();if(t.left===s.left&&t.right===s.right&&t.top===s.top&&t.bottom===s.bottom)return K;const{delay:i=0,duration:o=300,easing:f=ge,start:a=Re()+i,end:d=a+o,tick:c=K,css:m}=e(n,{from:t,to:s},l);let p=!0,r=!1,u;function g(){m&&(u=Pe(n,0,1,o,i,f,m)),i||(r=!0)}function y(){m&&Be(n,u),p=!1}return Ie(T=>{if(!r&&T>=a&&(r=!0),r&&T>=d&&(c(1,0),y()),!p)return!1;if(r){const x=T-a,q=0+1*f(x/o);c(q,1-q)}return!0}),g(),c(0,1),y}function xe(n){const t=getComputedStyle(n);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:e,height:l}=t,s=n.getBoundingClientRect();n.style.position="absolute",n.style.width=e,n.style.height=l,ze(n,s)}}function ze(n,t){const e=n.getBoundingClientRect();if(t.left!==e.left||t.top!==e.top){const l=getComputedStyle(n),s=l.transform==="none"?"":l.transform;n.style.transform=`${s} translate(${t.left-e.left}px, ${t.top-e.top}px)`}}function ue(n,{from:t,to:e},l={}){const s=getComputedStyle(n),i=s.transform==="none"?"":s.transform,[o,f]=s.transformOrigin.split(" ").map(parseFloat),a=t.left+t.width*o/e.width-(e.left+o),d=t.top+t.height*f/e.height-(e.top+f),{delay:c=0,duration:m=r=>Math.sqrt(r)*120,easing:p=Ue}=l;return{delay:c,duration:ve(m)?m(Math.sqrt(a*a+d*d)):m,easing:p,css:(r,u)=>{const g=u*a,y=u*d,T=r+u*t.width/e.width,x=r+u*t.height/e.height;return`transform: ${i} translate(${g}px, ${y}px) scale(${T}, ${x});`}}}const Tt="C:/Users/razor/OneDrive/Desktop/s project/my-app/src/lib/components/SortableList.svelte";function pt(n,t,e){const l=n.slice();return l[9]=t[e],l[11]=e,l}const Fe=n=>({item:n&1,index:n&1}),Qt=n=>({item:n[9],index:n[11]});function fe(n){let t,e="No items";const l={c:function(){t=C("p"),t.textContent=e,this.h()},l:function(i){t=L(i,"P",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-1jmwi8z"&&(t.textContent=e),this.h()},h:function(){_(t,"class","text-center my-12 text-lg font-bold"),S(t,Tt,79,4,1770)},m:function(i,o){j(i,t,o)},p:K,i:K,o:K,d:function(i){i&&v(t)}};return z("SvelteRegisterBlock",{block:l,id:fe.name,type:"else",source:"(60:2) {:else}",ctx:n}),l}function de(n){let t,e=[],l=new Map,s,i=bt(n[0]);const o=a=>a[9].id;Ht(n,i,pt,o);for(let a=0;a<i.length;a+=1){let d=pt(n,i,a),c=o(d);l.set(c,e[a]=Lt(c,d))}const f={c:function(){t=C("ul");for(let d=0;d<e.length;d+=1)e[d].c();this.h()},l:function(d){t=L(d,"UL",{class:!0});var c=N(t);for(let m=0;m<e.length;m+=1)e[m].l(c);c.forEach(v),this.h()},h:function(){_(t,"class","list-none p-0 flex flex-col items-center"),S(t,Tt,60,4,1115)},m:function(d,c){j(d,t,c);for(let m=0;m<e.length;m+=1)e[m]&&e[m].m(t,null);s=!0},p:function(d,c){if(c&63){i=bt(d[0]),Ot();for(let m=0;m<e.length;m+=1)e[m].r();Ht(d,i,pt,o),e=Oe(e,c,o,1,d,i,l,t,je,Lt,null,pt);for(let m=0;m<e.length;m+=1)e[m].a();jt()}},i:function(d){if(!s){for(let c=0;c<i.length;c+=1)Q(e[c]);s=!0}},o:function(d){for(let c=0;c<e.length;c+=1)tt(e[c]);s=!1},d:function(d){d&&v(t);for(let c=0;c<e.length;c+=1)e[c].d()}};return z("SvelteRegisterBlock",{block:f,id:de.name,type:"if",source:"(41:2) {#if list?.length}",ctx:n}),f}function Lt(n,t){let e,l,s,i,o,f=K,a,d,c;const m=t[6].default,p=ke(m,t,t[5],Qt),r={key:n,first:null,c:function(){e=C("li"),p&&p.c(),l=U(),this.h()},l:function(g){e=L(g,"LI",{class:!0,"data-index":!0,"data-id":!0,draggable:!0});var y=N(e);p&&p.l(y),l=A(y),y.forEach(v),this.h()},h:function(){_(e,"class","border-2 border-dashed border-transparent p-2 transition-all max-w-md w-full s-bF1CfGpt5Wxa"),_(e,"data-index",s=t[11]),_(e,"data-id",i=t[9].id),_(e,"draggable","true"),qt(e,"over",t[9].id===t[1]),S(e,Tt,62,8,1223),this.first=e},m:function(g,y){j(g,e,y),p&&p.m(e,null),w(e,l),a=!0,d||(c=[J(e,"dragstart",he,!1,!1,!1,!1),J(e,"dragover",Ct(t[2]),!1,!0,!1,!1),J(e,"dragleave",t[3],!1,!1,!1,!1),J(e,"drop",Ct(t[4]),!1,!0,!1,!1)],d=!0)},p:function(g,y){t=g,p&&p.p&&(!a||y&33)&&ye(p,m,t,t[5],a?Ce(m,t[5],y,Fe):we(t[5]),Qt),(!a||y&1&&s!==(s=t[11]))&&_(e,"data-index",s),(!a||y&1&&i!==(i=t[9].id))&&_(e,"data-id",i),(!a||y&3)&&qt(e,"over",t[9].id===t[1])},r:function(){o=e.getBoundingClientRect()},f:function(){xe(e),f()},a:function(){f(),f=Ae(e,o,ue,{duration:300})},i:function(g){a||(Q(p,g),a=!0)},o:function(g){tt(p,g),a=!1},d:function(g){g&&v(e),p&&p.d(g),d=!1,te(c)}};return z("SvelteRegisterBlock",{block:r,id:Lt.name,type:"each",source:"(43:6) {#each list as item, index (item.id)}",ctx:t}),r}function St(n){let t,e,l,s;const i=[de,fe],o=[];function f(d,c){return d[0]?.length?0:1}t=f(n),e=o[t]=i[t](n);const a={c:function(){e.c(),l=_t()},l:function(c){e.l(c),l=_t()},m:function(c,m){o[t].m(c,m),j(c,l,m),s=!0},p:function(c,[m]){let p=t;t=f(c),t===p?o[t].p(c,m):(Ot(),tt(o[p],1,1,()=>{o[p]=null}),jt(),e=o[t],e?e.p(c,m):(e=o[t]=i[t](c),e.c()),Q(e,1),e.m(l.parentNode,l))},i:function(c){s||(Q(e),s=!0)},o:function(c){tt(e),s=!1},d:function(c){c&&v(l),o[t].d(c)}};return z("SvelteRegisterBlock",{block:a,id:St.name,type:"component",source:"",ctx:n}),a}function ot(n){return n.dataset.index?{...n.dataset}:ot(n.parentNode)}function he(n){const t=ot(n.target);n.dataTransfer?.setData("source",t?.index.toString())}function Me(n,t,e){let{$$slots:l={},$$scope:s}=t;se("SortableList",l,["default"]);let{list:i}=t,o=!1;const f=Mt();function a(r){r.target.dataset?.id;const u=ot(r.target);e(1,o=u?.id??!1)}function d(r){const u=ot(r.target);o===u.id&&e(1,o=!1)}function c(r){e(1,o=!1);const u=ot(r.target);m({from:r.dataTransfer?.getData("source"),to:u.index})}const m=({from:r,to:u})=>{const g=[...i];g[r]=[g[u],g[u]=g[r]][0],f("sort",g)};n.$$.on_mount.push(function(){i===void 0&&!("list"in t||n.$$.bound[n.$$.props.list])&&console.warn("<SortableList> was created without expected prop 'list'")});const p=["list"];return Object.keys(t).forEach(r=>{!~p.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<SortableList> was created with unknown prop '${r}'`)}),n.$$set=r=>{"list"in r&&e(0,i=r.list),"$$scope"in r&&e(5,s=r.$$scope)},n.$capture_state=()=>({flip:ue,createEventDispatcher:Mt,list:i,isOver:o,dispatch:f,getDraggedParent:ot,onDragStart:he,onDragOver:a,onDragLeave:d,onDrop:c,reorder:m}),n.$inject_state=r=>{"list"in r&&e(0,i=r.list),"isOver"in r&&e(1,o=r.isOver)},t&&"$$inject"in t&&n.$inject_state(t.$$inject),[i,o,a,d,c,s,l]}class me extends ee{constructor(t){super(t),ne(this,t,Me,St,$t,{list:0}),z("SvelteRegisterComponent",{component:this,tagName:"SortableList",options:t,id:St.name})}get list(){throw new Error("<SortableList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set list(t){throw new Error("<SortableList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const I="C:/Users/razor/OneDrive/Desktop/s project/my-app/src/routes/[username]/edit/+page.svelte";function Zt(n,t,e){const l=n.slice();return l[21]=t[e],l}function Dt(n){let t,e="Edit your Profile",l,s,i,o,f,a,d=n[5]?.username+"",c,m,p,r,u,g="Change photo",y,T,x,q,F,D,E,B,P,X=n[5]?.published?"Public profile":"Private profile",V,h,k,R,M,H,$,lt,Y,gt,Nt;H=new me({props:{list:n[5]?.links,$$slots:{default:[pe,({item:G,index:b})=>({24:G,25:b}),({item:G,index:b})=>(G?16777216:0)|(b?33554432:0)]},$$scope:{ctx:n}},$$inline:!0}),H.$on("sort",n[9]);function Vt(G,b){return G[3]?be:_e}let ct=Vt(n),W=ct(n);const Ut={c:function(){t=C("h1"),t.textContent=e,l=U(),s=C("div"),i=C("p"),o=nt(`Profile Link:\r
          `),f=C("a"),a=nt("https://connector/"),c=nt(d),p=U(),r=C("div"),u=C("a"),u.textContent=g,y=U(),T=C("a"),x=nt("Edit Bio"),F=U(),D=C("form"),E=C("label"),B=C("span"),P=C("div"),V=nt(X),h=U(),k=C("input"),M=U(),le(H.$$.fragment),$=U(),W.c(),lt=_t(),this.h()},l:function(b){t=L(b,"H1",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-zzls1r"&&(t.textContent=e),l=A(b),s=L(b,"DIV",{class:!0});var O=N(s);i=L(O,"P",{});var et=N(i);o=st(et,`Profile Link:\r
          `),f=L(et,"A",{href:!0,class:!0});var vt=N(f);a=st(vt,"https://connector/"),c=st(vt,d),vt.forEach(v),et.forEach(v),O.forEach(v),p=A(b),r=L(b,"DIV",{class:!0});var ut=N(r);u=L(ut,"A",{class:!0,href:!0,"data-svelte-h":!0}),Z(u)!=="svelte-1hnlagx"&&(u.textContent=g),y=A(ut),T=L(ut,"A",{class:!0,href:!0});var At=N(T);x=st(At,"Edit Bio"),At.forEach(v),ut.forEach(v),F=A(b),D=L(b,"FORM",{class:!0});var xt=N(D);E=L(xt,"LABEL",{class:!0});var ft=N(E);B=L(ft,"SPAN",{class:!0});var zt=N(B);P=L(zt,"DIV",{class:!0,"data-tip":!0});var Ft=N(P);V=st(Ft,X),Ft.forEach(v),zt.forEach(v),h=A(ft),k=L(ft,"INPUT",{type:!0,class:!0}),ft.forEach(v),xt.forEach(v),M=A(b),oe(H.$$.fragment,b),$=A(b),W.l(b),lt=_t(),this.h()},h:function(){_(t,"class","mx-2 text-2xl font-bold mt-8 mb-4 text-center"),S(t,I,84,6,1806),_(f,"href",m=`/${n[5]?.username}`),_(f,"class","link link-accent"),S(f,I,91,10,1996),S(i,I,89,8,1956),_(s,"class","text-center mb-8"),S(s,I,88,6,1916),_(u,"class","btn btn-outline btn-xs"),_(u,"href","/login/photo"),S(u,I,101,8,2244),_(T,"class","btn btn-outline btn-xs"),_(T,"href",q=`/${n[5].username}/bio`),S(T,I,102,8,2324),_(r,"class","text-center my-4"),S(r,I,100,6,2204),_(P,"class","tooltip group-hover:tooltip-open"),_(P,"data-tip","If public, the world can see your profile"),S(P,I,108,12,2593),_(B,"class","label-text mr-6"),S(B,I,107,10,2549),_(k,"type","checkbox"),_(k,"class","toggle toggle-success"),k.checked=R=n[5]?.published,S(k,I,115,10,2864),_(E,"class","label cursor-pointer flex items-start justify-center"),S(E,I,106,8,2469),_(D,"class","form-control"),S(D,I,105,6,2432)},m:function(b,O){j(b,t,O),j(b,l,O),j(b,s,O),w(s,i),w(i,o),w(i,f),w(f,a),w(f,c),j(b,p,O),j(b,r,O),w(r,u),w(r,y),w(r,T),w(T,x),j(b,F,O),j(b,D,O),w(D,E),w(E,B),w(B,P),w(P,V),w(E,h),w(E,k),j(b,M,O),ie(H,b,O),j(b,$,O),W.m(b,O),j(b,lt,O),Y=!0,gt||(Nt=J(k,"change",n[12],!1,!1,!1,!1),gt=!0)},p:function(b,O){(!Y||O&32)&&d!==(d=b[5]?.username+"")&&Jt(c,d),(!Y||O&32&&m!==(m=`/${b[5]?.username}`))&&_(f,"href",m),(!Y||O&32&&q!==(q=`/${b[5].username}/bio`))&&_(T,"href",q),(!Y||O&32)&&X!==(X=b[5]?.published?"Public profile":"Private profile")&&Jt(V,X),(!Y||O&32&&R!==(R=b[5]?.published))&&ae(k,"checked",R);const et={};O&32&&(et.list=b[5]?.links),O&83886080&&(et.$$scope={dirty:O,ctx:b}),H.$set(et),ct===(ct=Vt(b))&&W?W.p(b,O):(W.d(1),W=ct(b),W&&(W.c(),W.m(lt.parentNode,lt)))},i:function(b){Y||(Q(H.$$.fragment,b),Y=!0)},o:function(b){tt(H.$$.fragment,b),Y=!1},d:function(b){b&&(v(t),v(l),v(s),v(p),v(r),v(F),v(D),v(M),v($),v(lt)),re(H,b),W.d(b),gt=!1,Nt()}};return z("SvelteRegisterBlock",{block:Ut,id:Dt.name,type:"if",source:"(75:4) {#if $userData?.username == $page.params.username}",ctx:n}),Ut}function pe(n){let t,e,l,s,i="Delete",o,f,a;const d=[n[24]];let c={};for(let r=0;r<d.length;r+=1)c=Le(c,d[r]);e=new ce({props:c,$$inline:!0});function m(){return n[14](n[24])}const p={c:function(){t=C("div"),le(e.$$.fragment),l=U(),s=C("button"),s.textContent=i,this.h()},l:function(u){t=L(u,"DIV",{class:!0});var g=N(t);oe(e.$$.fragment,g),l=A(g),s=L(g,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(s)!=="svelte-1n5cbwc"&&(s.textContent=i),g.forEach(v),this.h()},h:function(){_(s,"class","btn btn-xs btn-error invisible group-hover:visible transition-all absolute -right-6 bottom-10"),S(s,I,127,10,3250),_(t,"class","group relative"),S(t,I,125,8,3176)},m:function(u,g){j(u,t,g),ie(e,t,null),w(t,l),w(t,s),o=!0,f||(a=J(s,"click",m,!1,!1,!1,!1),f=!0)},p:function(u,g){n=u;const y=g&16777216?Te(d,[Ne(n[24])]):{};e.$set(y)},i:function(u){o||(Q(e.$$.fragment,u),o=!0)},o:function(u){tt(e.$$.fragment,u),o=!1},d:function(u){u&&v(t),re(e),f=!1,a()}};return z("SvelteRegisterBlock",{block:p,id:pe.name,type:"slot",source:"(116:6) <SortableList list={$userData?.links} on:sort={sortList} let:item let:index>",ctx:n}),p}function _e(n){let t,e="Add a Link",l,s;const i={c:function(){t=C("button"),t.textContent=e,this.h()},l:function(f){t=L(f,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-1l5hg7j"&&(t.textContent=e),this.h()},h:function(){_(t,"class","btn btn-outline btn-info block mx-auto my-4"),S(t,I,184,8,5024)},m:function(f,a){j(f,t,a),l||(s=J(t,"click",n[18],!1,!1,!1,!1),l=!0)},p:K,d:function(f){f&&v(t),l=!1,s()}};return z("SvelteRegisterBlock",{block:i,id:_e.name,type:"else",source:"(175:6) {:else}",ctx:n}),i}function be(n){let t,e,l,s,i,o,f,a,d,c,m,p,r,u,g,y,T="Cancel",x,q,F=bt(n[7]),D=[];for(let V=0;V<F.length;V+=1)D[V]=Et(Zt(n,F,V));let E=!n[0]&&Rt(n),B=!n[1]&&It(n),P=n[4]&&Pt(n);const X={c:function(){t=C("form"),e=C("select");for(let h=0;h<D.length;h+=1)D[h].c();l=U(),s=C("input"),i=U(),o=C("input"),f=U(),a=C("div"),E&&E.c(),d=U(),B&&B.c(),c=U(),P&&P.c(),m=U(),p=C("button"),r=nt("Add Link"),g=U(),y=C("button"),y.textContent=T,this.h()},l:function(h){t=L(h,"FORM",{class:!0});var k=N(t);e=L(k,"SELECT",{name:!0,class:!0});var R=N(e);for(let $=0;$<D.length;$+=1)D[$].l(R);R.forEach(v),l=A(k),s=L(k,"INPUT",{name:!0,type:!0,placeholder:!0,class:!0}),i=A(k),o=L(k,"INPUT",{name:!0,type:!0,placeholder:!0,class:!0}),f=A(k),a=L(k,"DIV",{class:!0});var M=N(a);E&&E.l(M),d=A(M),B&&B.l(M),c=A(M),P&&P.l(M),M.forEach(v),m=A(k),p=L(k,"BUTTON",{type:!0,class:!0});var H=N(p);r=st(H,"Add Link"),H.forEach(v),g=A(k),y=L(k,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),Z(y)!=="svelte-ptz3kb"&&(y.textContent=T),k.forEach(v),this.h()},h:function(){_(e,"name","icon"),_(e,"class","select select-sm"),n[2].icon===void 0&&De(()=>n[15].call(e)),S(e,I,139,10,3667),_(s,"name","title"),_(s,"type","text"),_(s,"placeholder","Title"),_(s,"class","input input-sm"),S(s,I,149,10,3948),_(o,"name","url"),_(o,"type","text"),_(o,"placeholder","URL"),_(o,"class","input input-sm"),S(o,I,156,10,4142),_(a,"class","my-4"),S(a,I,163,10,4330),p.disabled=u=!n[4],_(p,"type","submit"),_(p,"class","btn btn-success block"),S(p,I,175,10,4739),_(y,"type","button"),_(y,"class","btn btn-xs my-4"),S(y,I,181,10,4899),_(t,"class","bg-base-200 p-6 w-full mx-auto rounded-xl"),S(t,I,135,8,3532)},m:function(h,k){j(h,t,k),w(t,e);for(let R=0;R<D.length;R+=1)D[R]&&D[R].m(e,null);Gt(e,n[2].icon,!0),w(t,l),w(t,s),rt(s,n[2].title),w(t,i),w(t,o),rt(o,n[2].url),w(t,f),w(t,a),E&&E.m(a,null),w(a,d),B&&B.m(a,null),w(a,c),P&&P.m(a,null),w(t,m),w(t,p),w(p,r),w(t,g),w(t,y),x||(q=[J(e,"change",n[15]),J(s,"input",n[16]),J(o,"input",n[17]),J(y,"click",n[13],!1,!1,!1,!1),J(t,"submit",Ct(n[10]),!1,!0,!1,!1)],x=!0)},p:function(h,k){if(k&128){F=bt(h[7]);let R;for(R=0;R<F.length;R+=1){const M=Zt(h,F,R);D[R]?D[R].p(M,k):(D[R]=Et(M),D[R].c(),D[R].m(e,null))}for(;R<D.length;R+=1)D[R].d(1);D.length=F.length}k&132&&Gt(e,h[2].icon),k&132&&s.value!==h[2].title&&rt(s,h[2].title),k&132&&o.value!==h[2].url&&rt(o,h[2].url),h[0]?E&&(E.d(1),E=null):E||(E=Rt(h),E.c(),E.m(a,d)),h[1]?B&&(B.d(1),B=null):B||(B=It(h),B.c(),B.m(a,c)),h[4]?P||(P=Pt(h),P.c(),P.m(a,null)):P&&(P.d(1),P=null),k&16&&u!==(u=!h[4])&&ae(p,"disabled",u)},d:function(h){h&&v(t),Ee(D,h),E&&E.d(),B&&B.d(),P&&P.d(),x=!1,te(q)}};return z("SvelteRegisterBlock",{block:X,id:be.name,type:"if",source:"(126:6) {#if showForm}",ctx:n}),X}function Et(n){let t,e=n[21]+"",l;const s={c:function(){t=C("option"),l=nt(e),this.h()},l:function(o){t=L(o,"OPTION",{});var f=N(t);l=st(f,e),f.forEach(v),this.h()},h:function(){t.__value=n[21].toLowerCase(),rt(t,t.__value),S(t,I,146,14,3844)},m:function(o,f){j(o,t,f),w(t,l)},p:K,d:function(o){o&&v(t)}};return z("SvelteRegisterBlock",{block:s,id:Et.name,type:"each",source:"(137:12) {#each icons as icon}",ctx:n}),s}function Rt(n){let t,e="Must have valid title";const l={c:function(){t=C("p"),t.textContent=e,this.h()},l:function(i){t=L(i,"P",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-1clkdjx"&&(t.textContent=e),this.h()},h:function(){_(t,"class","text-error text-xs"),S(t,I,165,14,4397)},m:function(i,o){j(i,t,o)},d:function(i){i&&v(t)}};return z("SvelteRegisterBlock",{block:l,id:Rt.name,type:"if",source:"(156:12) {#if !titleIsValid}",ctx:n}),l}function It(n){let t,e="Must have a valid URL";const l={c:function(){t=C("p"),t.textContent=e,this.h()},l:function(i){t=L(i,"P",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-ckpz19"&&(t.textContent=e),this.h()},h:function(){_(t,"class","text-error text-xs"),S(t,I,168,14,4518)},m:function(i,o){j(i,t,o)},d:function(i){i&&v(t)}};return z("SvelteRegisterBlock",{block:l,id:It.name,type:"if",source:"(159:12) {#if !urlIsValid}",ctx:n}),l}function Pt(n){let t,e="Looks good!";const l={c:function(){t=C("p"),t.textContent=e,this.h()},l:function(i){t=L(i,"P",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-18u4utf"&&(t.textContent=e),this.h()},h:function(){_(t,"class","text-success text-xs"),S(t,I,171,14,4639)},m:function(i,o){j(i,t,o)},d:function(i){i&&v(t)}};return z("SvelteRegisterBlock",{block:l,id:Pt.name,type:"if",source:"(162:12) {#if formIsValid}",ctx:n}),l}function Bt(n){let t,e,l=n[5]?.username==n[6].params.username&&Dt(n);const s={c:function(){t=C("main"),l&&l.c(),this.h()},l:function(o){t=L(o,"MAIN",{class:!0});var f=N(t);l&&l.l(f),f.forEach(v),this.h()},h:function(){_(t,"class","max-w-xl mx-auto"),S(t,I,82,2,1711)},m:function(o,f){j(o,t,f),l&&l.m(t,null),e=!0},p:function(o,[f]){o[5]?.username==o[6].params.username?l?(l.p(o,f),f&96&&Q(l,1)):(l=Dt(o),l.c(),Q(l,1),l.m(t,null)):l&&(Ot(),tt(l,1,1,()=>{l=null}),jt())},i:function(o){e||(Q(l),e=!0)},o:function(o){tt(l),e=!1},d:function(o){o&&v(t),l&&l.d()}};return z("SvelteRegisterBlock",{block:s,id:Bt.name,type:"component",source:"",ctx:n}),s}function qe(n,t,e){let l,s,i,o,f,a,d;dt(yt,"userData"),ht(n,yt,h=>e(5,o=h)),dt(wt,"user"),ht(n,wt,h=>e(19,f=h)),dt(kt,"page"),ht(n,kt,h=>e(6,d=h));let{$$slots:c={},$$scope:m}=t;se("Page",c,[]);const p=["X(Twitter)","YouTube","Leetcode","LinkedIn","GitHub","Codeforces","Custom"],r={icon:"custom",title:"",url:"https://"},u=Kt(r);dt(u,"formData"),ht(n,u,h=>e(2,a=h));let g=!1;function y(h){const k=h.detail,R=at(it,"users",f.uid);Yt(R,{links:k},{merge:!0})}async function T(h){const k=at(it,"users",f.uid);await mt(k,{links:Xt({...a,id:Date.now().toString()})}),u.set({icon:"",title:"",url:""}),e(3,g=!1)}async function x(h){const k=at(it,"users",f.uid);await mt(k,{links:Wt(h)})}async function q(h){const k=at(it,"users",f.uid);await mt(k,{published:!o?.published})}function F(){u.set(r),e(3,g=!1)}const D=[];Object.keys(t).forEach(h=>{!~D.indexOf(h)&&h.slice(0,2)!=="$$"&&h!=="slot"&&console.warn(`<Page> was created with unknown prop '${h}'`)});const E=h=>x(h);function B(){a.icon=Se(this),u.set(a),e(7,p)}function P(){a.title=this.value,u.set(a),e(7,p)}function X(){a.url=this.value,u.set(a),e(7,p)}const V=()=>e(3,g=!0);return n.$capture_state=()=>({page:kt,AuthCheck:Ve,SortableList:me,UserLink:ce,db:it,userData:yt,user:wt,arrayRemove:Wt,arrayUnion:Xt,doc:at,setDoc:Yt,updateDoc:mt,writable:Kt,icons:p,formDefaults:r,formData:u,showForm:g,sortList:y,addLink:T,deleteLink:x,toggleProfileStatus:q,cancelLink:F,titleIsValid:s,urlIsValid:l,formIsValid:i,$userData:o,$user:f,$formData:a,$page:d}),n.$inject_state=h=>{"showForm"in h&&e(3,g=h.showForm),"titleIsValid"in h&&e(0,s=h.titleIsValid),"urlIsValid"in h&&e(1,l=h.urlIsValid),"formIsValid"in h&&e(4,i=h.formIsValid)},t&&"$$inject"in t&&n.$inject_state(t.$$inject),n.$$.update=()=>{n.$$.dirty&4&&e(1,l=a.url.match(/^(ftp|http|https):\/\/[^ "]+$/)),n.$$.dirty&4&&e(0,s=a.title.length<20&&a.title.length>0),n.$$.dirty&3&&e(4,i=l&&s)},[s,l,a,g,i,o,d,p,u,y,T,x,q,F,E,B,P,X,V]}class Ze extends ee{constructor(t){super(t),ne(this,t,qe,Bt,$t,{}),z("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:Bt.name})}}export{Ze as component};
