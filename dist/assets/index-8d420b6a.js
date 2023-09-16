import{s as c,r as d,j as o,P as u}from"./index-a5cbc852.js";const k=c.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
`;function f({postList:n}){const[a,r]=d.useState(n),s=e=>{const t=a.findIndex(l=>l.key===e);if(t===-1)return;const i=[...a];i[t].like=!i[t].like,r(i)};return o(k,{children:n.map(e=>o(u,{id:e.key,date:e.date,like:e.like,location:e.location,menu:e.menu,photo:e.photo[0],review:e.review,score:e.score,shop:e.shop,tags:e.tag,postList:n,onLike:s},e.key))})}export{f as default};
