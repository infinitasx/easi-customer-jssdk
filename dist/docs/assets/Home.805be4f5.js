import{_ as e,j as t,k as a,l as s,u as i,a as l,c as o,d as n,w as r,b as c,t as v,m as u,N as f,F as d,e as m,h as k,i as p,q as h}from"./app.3f980b06.js";const y={key:0,class:"home-hero"},g={key:0,class:"figure"},x=["src","alt"],_={key:1,id:"main-title",class:"title"},b={key:2,class:"tagline"};var I=e(t({setup(e){const{site:t,frontmatter:d}=a(),m=s((()=>{const{heroImage:e,heroText:t,tagline:a,actionLink:s,actionText:i}=d.value;return e||t||a||s&&i})),k=s((()=>d.value.heroText||t.value.title)),p=s((()=>d.value.tagline||t.value.description));return(e,t)=>i(m)?(l(),o("header",y,[i(d).heroImage?(l(),o("figure",g,[n("img",{class:"image",src:i(r)(i(d).heroImage),alt:i(d).heroAlt},null,8,x)])):c("v-if",!0),i(k)?(l(),o("h1",_,v(i(k)),1)):c("v-if",!0),i(p)?(l(),o("p",b,v(i(p)),1)):c("v-if",!0),i(d).actionLink&&i(d).actionText?(l(),u(f,{key:3,item:{link:i(d).actionLink,text:i(d).actionText},class:"action"},null,8,["item"])):c("v-if",!0),i(d).altActionLink&&i(d).altActionText?(l(),u(f,{key:4,item:{link:i(d).altActionLink,text:i(d).altActionText},class:"action alt"},null,8,["item"])):c("v-if",!0)])):c("v-if",!0)}}),[["__scopeId","data-v-5d8b683d"]]);const T={key:0,class:"home-features"},A={class:"wrapper"},L={class:"container"},$={class:"features"},j={key:0,class:"title"},w={key:1,class:"details"};var q=e(t({setup(e){const{frontmatter:t}=a(),r=s((()=>t.value.features&&t.value.features.length>0)),u=s((()=>t.value.features?t.value.features:[]));return(e,t)=>i(r)?(l(),o("div",T,[n("div",A,[n("div",L,[n("div",$,[(l(!0),o(d,null,m(i(u),((e,t)=>(l(),o("section",{key:t,class:"feature"},[e.title?(l(),o("h2",j,v(e.title),1)):c("v-if",!0),e.details?(l(),o("p",w,v(e.details),1)):c("v-if",!0)])))),128))])])])])):c("v-if",!0)}}),[["__scopeId","data-v-245bde66"]]);const C={key:0,class:"footer"},F={class:"container"},N={class:"text"};var z=e(t({setup(e){const{frontmatter:t}=a();return(e,a)=>i(t).footer?(l(),o("footer",C,[n("div",F,[n("p",N,v(i(t).footer),1)])])):c("v-if",!0)}}),[["__scopeId","data-v-bff49316"]]);const B={class:"home","aria-labelledby":"main-title"},D={class:"home-content"};var E=e(t({setup:e=>(e,t)=>{const a=k("Content");return l(),o("main",B,[p(I),h(e.$slots,"hero",{},void 0,!0),p(q),n("div",D,[p(a)]),h(e.$slots,"features",{},void 0,!0),p(z),h(e.$slots,"footer",{},void 0,!0)])}}),[["__scopeId","data-v-8382b818"]]);export{E as default};