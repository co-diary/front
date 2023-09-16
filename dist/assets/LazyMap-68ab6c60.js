import{s as r,j as n,L as y,a as i,T as _,b as Z,U as w,c as M,C as R,r as o,w as D,y as G,I as H,x as W,F as q}from"./index-a5cbc852.js";const J=r.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,P=r.img`
  width: 7rem;
  height: 100%;
  object-fit: cover;
  margin-right: 10px;
`,Q=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;

  strong {
    font-family: LINESeedKR-Bd;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  p {
    margin: 0;
    font-size: 1.4rem;
    line-height: 1.5;
  }
`;function X({postInfo:t}){return console.log("인포",t),n(y,{position:{lat:t.latLng[0],lng:t.latLng[1]},children:i(J,{children:[n(P,{src:t.photo}),i(Q,{children:[i("strong",{children:[t.shop," ",t.location]}),n("p",{children:t.menu}),n(_,{children:t.tag.map((a,l)=>i(Z,{children:["#",a]},l))})]})]})})}const ee=w`
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    transform: translateY(-10%);
    opacity: 1;
  }
`,te=r.button`
  position: relative;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  font-family: 'LINESeedKR-Rg';
  /* 애니메이션 효과 추가 */
  overflow: hidden;
  animation: ${ee} 0.3s ease-in-out forwards;
  animation-delay: 0.2s; /* 애니메이션 지연 시간 조정 */
  opacity: 0;
`,ne=r.p`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${M.MAIN};

  font-size: 1.4rem;

  ${t=>t.active&&R`
      background-color: #ffa471;
    `}
`;function v({onClick:t,content:a,active:l}){return n(te,{onClick:t,children:n(ne,{active:l,children:a})})}function oe({myLocation:t}){return n(y,{position:{lat:t.latitude,lng:t.longitude},yAnchor:1,children:n("div",{style:{minWith:"20px",position:"relative",top:"15px",right:"5px",padding:"0.5rem",backgroundColor:"#F7DA76",color:"#000",borderRadius:"1rem",fontFamily:"LINESeedKR-Rg",boxShadow:"0 0 5px rgba(0, 0, 0, 0.3)",fontSize:"1.4rem"},children:n("span",{children:"📍현위치"})})})}const ie=r.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1000;
  bottom: 13rem;
  right: 3rem;
  gap: 0.9rem;
`;function ae({children:t}){return n(ie,{children:t})}const le=w`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,re=r.button`
  font-family: 'LINESeedKR-Rg';

  &.slide-in {
    animation: ${le} 0.3s ease-in-out;
    animation-fill-mode: forwards;
  }
`,se=r.p`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${M.MAIN};
  border-radius: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  font-size: 1.4rem;

  ${t=>t.active&&R`
      background-color: #ffa471;
    `}
`;function k({onClick:t,content:a,active:l}){return n(re,{onClick:t,children:n(se,{active:l,children:a})})}function ue({myLocation:t,mapCenter:a,userPost:l,likedPost:E,onZoomChanged:T,handleMoveToMyLocation:B}){const[A,s]=o.useState(null),[m,d]=o.useState(!1),[c,g]=o.useState(),[f,u]=o.useState(null),[$,p]=o.useState(!0),[I,L]=o.useState(!1),[h,O]=o.useState(!1),[z,S]=o.useState("🍔 옵션 보기"),[b,ce]=o.useState(!0);o.useEffect(()=>{g(l.map(e=>({id:(e.address.latLng[1]-e.address.latLng[0]).toString(),latLng:e.address.latLng,menu:e.menu,shop:e.shop,photo:e.photo[0],tag:e.tag})))},[]);const N=e=>{console.log("마커 클릭"),A===e?(d(!1),u(null),s(null)):(d(!0),u(e),s(e))},x=o.useRef(),U=(e,V)=>{if(!b)return;const C=x.current,Y=C.getLevel()-1;C.setLevel(Y,{anchor:V.getCenter()})},j=()=>{p(!1),L(!0),g(E.map(e=>({id:(e.address.latLng[1]-e.address.latLng[0]).toString(),latLng:e.address.latLng,menu:e.menu,shop:e.shop,photo:e.photo,tag:e.tag})))},F=()=>{p(!0),L(!1),g(l.map(e=>({id:(e.address.latLng[1]-e.address.latLng[0]).toString(),latLng:e.address.latLng,menu:e.menu,shop:e.shop,location:e.location,photo:e.photo,tag:e.tag})))},K=()=>{O(e=>!e),S(h?"👆 옵션 보기":"👇 옵션 닫기")};return i("main",{style:{position:"relative"},children:[i(D,{center:{lat:a.lat,lng:a.lng},style:{position:"relative",width:"100%",height:"100vh",marginTop:"4.8rem",overflow:"hidden"},level:3,ref:x,draggable:!0,onZoomChanged:e=>T(e.getLevel()),onClick:()=>{m&&(d(!1),u(null),s(null))},children:[n(oe,{myLocation:t}),c&&i(G,{averageCenter:!0,minLevel:9,disableClickZoom:!b,onClusterclick:U,children:[c.map(e=>n(H,{position:{lat:e.latLng[0],lng:e.latLng[1]},clickable:!0,onClick:()=>N(e.id)},e.id)),m&&f&&n(X,{postInfo:c.find(e=>e.id===f)})]}),n(W,{anchor:"BOTTOMRIGHT"})]}),i(ae,{children:[n(k,{onClick:K,content:z,className:h?"slide-in":""}),h&&i(q,{children:[n(v,{onClick:F,content:"📝 기록한 모든 매장 보기",active:$}),n(v,{onClick:j,content:"❤️ 좋아요 매장만 보기",active:I})]}),n(k,{onClick:B,content:"📍현위치로 이동"})]})]})}export{ue as default};
