import{s as L,g as m,c as j,l as E,h as d,i as v,d as P,m as S,D as b,k as _,w as y}from"./scheduler.QFVCaXZV.js";import{S as D,i as C,d as U,v as O,e as w,g as l,a as q,n as h,s as x}from"./index.5xRIlaLs.js";function z(s,e){const n={},u={},f={$$scope:1};let o=s.length;for(;o--;){const r=s[o],c=e[o];if(c){for(const i in r)i in c||(u[i]=1);for(const i in c)f[i]||(n[i]=c[i],f[i]=1);s[o]=c}else for(const i in r)f[i]=1}for(const r in u)r in n||(n[r]=void 0);return n}function B(s){return typeof s=="object"&&s!==null?s:{}}const g="C:/Users/razor/OneDrive/Desktop/s project/my-app/src/lib/components/UserLink.svelte";function p(s){let e,n,u,f,o,r;const c={c:function(){e=m("a"),n=m("img"),f=j(),o=m("span"),r=E(s[2]),this.h()},l:function(t){e=d(t,"A",{href:!0,class:!0});var a=v(e);n=d(a,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),f=P(a),o=d(a,"SPAN",{class:!0});var k=v(o);r=S(k,s[2]),k.forEach(w),a.forEach(w),this.h()},h:function(){b(n.src,u=`/${s[0]}.png`)||l(n,"src",u),l(n,"alt",s[0]),l(n,"width","32"),l(n,"height","32"),l(n,"class","w-8"),_(n,g,8,2,274),l(o,"class","text-lg text-white font-bold"),_(o,g,9,2,352),l(e,"href",s[1]),l(e,"class","stack w-full max-w-md text-center bg-base-300 flex justify-center items-center p-4 rounded-lg not-prose no-underline"),_(e,g,7,0,131)},m:function(t,a){q(t,e,a),h(e,n),h(e,f),h(e,o),h(o,r)},p:function(t,[a]){a&1&&!b(n.src,u=`/${t[0]}.png`)&&l(n,"src",u),a&1&&l(n,"alt",t[0]),a&4&&x(r,t[2]),a&2&&l(e,"href",t[1])},i:y,o:y,d:function(t){t&&w(e)}};return U("SvelteRegisterBlock",{block:c,id:p.name,type:"component",source:"",ctx:s}),c}function A(s,e,n){let{$$slots:u={},$$scope:f}=e;O("UserLink",u,[]);let{icon:o="default"}=e,{url:r="foo"}=e,{title:c="some cool title"}=e;const i=["icon","url","title"];return Object.keys(e).forEach(t=>{!~i.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<UserLink> was created with unknown prop '${t}'`)}),s.$$set=t=>{"icon"in t&&n(0,o=t.icon),"url"in t&&n(1,r=t.url),"title"in t&&n(2,c=t.title)},s.$capture_state=()=>({icon:o,url:r,title:c}),s.$inject_state=t=>{"icon"in t&&n(0,o=t.icon),"url"in t&&n(1,r=t.url),"title"in t&&n(2,c=t.title)},e&&"$$inject"in e&&s.$inject_state(e.$$inject),[o,r,c]}class G extends D{constructor(e){super(e),C(this,e,A,p,L,{icon:0,url:1,title:2}),U("SvelteRegisterComponent",{component:this,tagName:"UserLink",options:e,id:p.name})}get icon(){throw new Error("<UserLink>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set icon(e){throw new Error("<UserLink>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get url(){throw new Error("<UserLink>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set url(e){throw new Error("<UserLink>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get title(){throw new Error("<UserLink>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set title(e){throw new Error("<UserLink>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{G as U,B as a,z as g};
