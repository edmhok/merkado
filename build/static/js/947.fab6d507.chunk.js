"use strict";(self.webpackChunkmerkado=self.webpackChunkmerkado||[]).push([[947],{33879:(t,a,e)=>{e.d(a,{A:()=>n});e(72296);const n=e.p+"static/media/verify.2ec148b8e5850f17ee9fec763f965822.svg"},46135:(t,a,e)=>{e.d(a,{iq:()=>o});var n=e(14274);const i=t=>{let{IDL:a}=t;const e=a.Variant({ok:a.Bool,err:a.Text}),n=a.Record({amount0:a.Nat,amount1:a.Nat}),i=a.Variant({ok:n,err:a.Text}),r=a.Record({tokenId:a.Nat,internalCall:a.Bool,recipient:a.Principal,amount0Max:a.Text,amount1Max:a.Text}),o=a.Text,c=a.Variant({ok:o,err:a.Text}),s=a.Variant({ok:a.Nat,err:a.Text}),d=a.Record({tokenId:a.Nat,liquidity:a.Text,recipient:a.Principal,amount0Min:a.Text,amount1Min:a.Text,deadline:a.Nat}),u=a.Variant({ok:a.Vec(a.Text),err:a.Text}),l=a.Text,x=a.Record({fee:a.Nat,token0:l,token1:l}),p=a.Record({token0TVL:a.Nat,token1TVL:a.Nat}),f=a.Variant({ok:a.Vec(p),err:a.Text}),k=a.Record({tickUpper:a.Int,tokensOwed0:a.Nat,tokensOwed1:a.Nat,operator:l,feeGrowthInside1LastX128:a.Nat,liquidity:a.Nat,feeGrowthInside0LastX128:a.Nat,nonce:a.Nat,tickLower:a.Int,poolId:a.Nat}),m=a.Record({tickIndex:a.Int,price0Decimal:a.Nat,liquidityNet:a.Int,price0:a.Nat,price1:a.Nat,liquidityGross:a.Nat,price1Decimal:a.Nat}),w=a.Variant({ok:a.Vec(m),err:a.Text}),g=a.Record({tokenA:a.Nat,tokenB:a.Nat}),h=a.Variant({ok:g,err:a.Text}),N=a.Record({tokenId:a.Nat,recipient:a.Principal,amount0Min:a.Text,amount1Min:a.Text,deadline:a.Nat,amount0Desired:a.Text,amount1Desired:a.Text}),y=a.Record({liquidity:a.Nat,amount0:a.Nat,amount1:a.Nat}),T=a.Variant({ok:y,err:a.Text}),v=a.Record({fee:a.Nat,tickUpper:a.Int,tokensOwed0:a.Nat,tokensOwed1:a.Nat,operator:l,feeGrowthInside1LastX128:a.Nat,liquidity:a.Nat,feeGrowthInside0LastX128:a.Nat,token0:l,token1:l,nonce:a.Nat,tickLower:a.Int,poolId:a.Nat}),I=a.Variant({ok:v,err:a.Text}),P=a.Record({fee:a.Nat,tickUpper:a.Int,recipient:a.Principal,amount0Min:a.Text,amount1Min:a.Text,deadline:a.Nat,token0:l,token1:l,amount0Desired:a.Text,amount1Desired:a.Text,tickLower:a.Int}),C=a.Record({tokenId:a.Nat,liquidity:a.Nat,amount0:a.Nat,amount1:a.Nat}),b=a.Variant({ok:C,err:a.Text}),A=a.Variant({ok:a.Vec(a.Nat),err:a.Text}),F=a.Variant({ok:a.Bool,err:a.Text}),j=a.Variant({ok:a.Text,err:a.Text});return a.Service({addAdmin:a.Func([a.Text],[e],[]),burn:a.Func([a.Nat],[i],[]),collect:a.Func([r],[i],[]),collectInInvalidPosition:a.Func([r],[i],[]),createAndInitializePoolIfNecessary:a.Func([o,a.Text,o,a.Text,a.Nat,a.Text],[c],[]),cycleAvailable:a.Func([],[s],[]),cycleBalance:a.Func([],[s],["query"]),decreaseLiquidity:a.Func([d],[i],[]),decreaseLiquidityInInvalidPosition:a.Func([d],[i],[]),getAdminList:a.Func([],[u],["query"]),getApproved:a.Func([a.Nat],[c],["query"]),getBaseDataStructureCanister:a.Func([a.Text],[a.Text],["query"]),getPoolTVL:a.Func([a.Vec(x)],[f],[]),getPositionByPoolAddress:a.Func([o],[a.Vec(k)],["query"]),getTickInfos:a.Func([a.Text],[w],[]),getTotalVolume:a.Func([a.Text],[h],[]),increaseLiquidity:a.Func([N],[T],[]),invalidPositions:a.Func([a.Nat],[I],["query"]),mint:a.Func([P],[b],[]),ownerInvalidTokens:a.Func([a.Text],[A],["query"]),ownerTokens:a.Func([a.Text],[A],["query"]),positions:a.Func([a.Nat],[I],["query"]),refreshIncome:a.Func([a.Nat],[i],[]),refreshInvalidIncome:a.Func([a.Nat],[i],[]),removeAdmin:a.Func([a.Text],[e],[]),removeSwapPool:a.Func([o],[F],[]),setBaseDataStructureCanister:a.Func([a.Text],[],[]),setLockServerCanisterId:a.Func([a.Text],[],[]),setSwapNFTCanisterId:a.Func([a.Text],[],["oneway"]),swapNFTCanisterId:a.Func([],[a.Text],["query"]),tokenURI:a.Func([a.Nat],[j],[]),transfer:a.Func([a.Nat,a.Text],[j],[])})};var r=e(87288);const o=t=>n.eN.create({canisterId:r.We.ic,identity:t,idlFactory:i})},4861:(t,a,e)=>{e.d(a,{A:()=>l});var n=e(52634),i=e(40853),r=e(7745),o=e(86100),c=e(33879),s=e(72794),d=e(37012);function u(t){let{minter:a,secondaryColor:e,fontSize:i="12px",textSX:r}=t;const c=(0,o.hA)(a)?"ICPSwap":a;return(0,d.jsxs)(n.A,{color:"text.primary",fontSize:i,sx:{...null!==r&&void 0!==r?r:{}},children:["By"," ",e?(0,d.jsx)(n.A,{color:"secondary",fontSize:i,component:"span",sx:{...null!==r&&void 0!==r?r:{}},children:(0,s.m)(null!==c&&void 0!==c?c:"",3)}):(0,s.m)(null!==c&&void 0!==c?c:"",3)]})}function l(t){let{minter:a,sx:e,justifyContent:n,secondaryColor:s,fontSize:l,textSX:x}=t;return(0,o.hA)(a)?(0,d.jsxs)(i.Ay,{container:!0,alignItems:"center",justifyContent:n||"flex-start",children:[(0,d.jsx)(u,{fontSize:l,secondaryColor:s,minter:a,textSX:x}),(0,d.jsx)(r.A,{sx:{width:"14px",height:"14px",marginLeft:"4px",...e||{}},children:(0,d.jsx)("img",{width:"100%",height:"100%",src:c.A,alt:""})})]}):(0,d.jsx)(i.Ay,{container:!0,alignItems:"center",justifyContent:n||"flex-start",children:(0,d.jsx)(u,{fontSize:l,secondaryColor:s,minter:a,textSX:x})})}},97260:(t,a,e)=>{e.d(a,{H3:()=>m,HB:()=>h,K1:()=>w,ML:()=>l,NB:()=>v,Ny:()=>k,Q9:()=>y,Wr:()=>P,cs:()=>N,fL:()=>u,g4:()=>T,iJ:()=>f,ie:()=>p,mI:()=>I,nG:()=>d,uq:()=>x,wl:()=>g});var n=e(72296),i=e(3764),r=e(20361),o=e(26462),c=e(14274),s=e(59155);e(46135);function d(){return(0,n.useCallback)((async(t,a,e)=>e.count&&BigInt(e.count)>1?(0,r.Pk)(await(await(0,c.iZ)(t,a)).mint_batch(e)):(0,r.Pk)(await(await(0,c.iZ)(t,a)).mint({...e}))),[])}function u(t,a,e){return(0,s.Pz)((0,n.useCallback)((async()=>{if(t&&(a||0===a))return(0,r.Pk)(await(await(0,c.iZ)(t)).icsMetadata(Number(a))).data}),[a]),e)}function l(t,a,e,i,d){return(0,s.Pz)((0,n.useCallback)((async()=>{if(t&&a&&(0,o.W)(e,i))return(0,r.Pk)(await(await(0,c.iZ)(t)).findTxRecord(a,BigInt(e),BigInt(i))).data}),[t,a,e,i]),d)}function x(t,a,e,i){return(0,s.Pz)((0,n.useCallback)((async()=>{if(t&&a&&(0,o.W)(e,i))return(0,r.Pk)(await(await(0,c.iZ)(t)).findTokenTxRecord({address:a},BigInt(e),BigInt(i))).data}),[a,e,i]))}function p(){return(0,n.useCallback)((async(t,a,e)=>(0,r.Pk)(await(await(0,c.iZ)(t,a)).transfer(e))),[])}function f(t){return(0,s.Pz)((0,n.useCallback)((async()=>{if(t)return(0,r.Pk)(await(await(0,c.iZ)(t)).cycleBalance()).data}),[t]))}function k(t,a,e){return(0,s.Pz)((0,n.useCallback)((async()=>{if(t&&a)return(0,r.Pk)(await(await(0,c.iZ)(t)).ownerNFTCount({address:a})).data}),[t,a]),e)}function m(t,a){return(0,s.Pz)((0,n.useCallback)((async()=>{if((0,o.W)(t,a))return(0,r.Pk)(await(await(0,c.gM)()).findCanister(BigInt(t),BigInt(a))).data}),[t,a]))}function w(t,a,e){return(0,s.Pz)((0,n.useCallback)((async()=>{if((0,o.W)(a,e))return(0,r.Pk)(await(await(0,c.gM)()).findUserCanister(t,BigInt(a),BigInt(e))).data}),[a,e]))}async function g(t){return(0,r.Pk)(await(await(0,c.gM)(!0)).create(t))}async function h(t,a){return(0,r.Pk)(await(await(0,c.iZ)(t,!0)).setLogo(a))}async function N(t,a){return(0,r.Pk)(await(await(0,c.gM)(!0)).setLogo(a,t))}function y(t){return(0,s.Pz)((0,n.useCallback)((async()=>{if(t)return i.XA.includes(t)?(0,r.Pk)(await(await(0,c.gM)()).canisterInfo(t)).data:(0,r.Pk)(await(await(0,c.iZ)(t)).canisterInfo()).data}),[t]))}function T(t){return(0,s.Pz)((0,n.useCallback)((async()=>{if(t)return await async function(t){var a,e;return i.XA.includes(t)?null===(a=(0,r.Pk)(await(await(0,c.gM)()).canisterInfo(t)).data)||void 0===a?void 0:a.image:null===(e=(0,r.Pk)(await(await(0,c.iZ)(t)).canisterInfo()).data)||void 0===e?void 0:e.image}(t)}),[t]))}function v(t,a,e,i){return(0,s.Pz)((0,n.useCallback)((async()=>{if(t&&a&&(0,o.W)(e,i))return(0,r.Pk)(await(await(0,c.iZ)(t)).findTokenList({address:a},BigInt(e),BigInt(i))).data}),[t,a,e,i]))}function I(){return(0,s.Pz)((0,n.useCallback)((async()=>(0,r.Pk)(await(await(0,c.gM)()).feeInfo()).data),[]))}async function P(){return(0,r.Pk)(await(await(0,c.iT)()).getNftStat()).data}},11947:(t,a,e)=>{e.r(a),e.d(a,{CollectionCard:()=>N,default:()=>T});var n=e(3481),i=e(72296),r=e(27312),o=e(7745),c=e(52634),s=e(40682),d=e(25476),u=e(97260),l=e(31877),x=e(62916),p=e(50620),f=e(40853),k=e(4861),m=e(37012);const w=(0,s.A)((()=>({avatarWrapper:{borderRadius:"12px",width:"100%",height:"100%",position:"relative"},bg:{backgroundSize:"cover",backgroundPosition:"center center",borderRadius:"inherit",width:"100%",height:"100%",filter:"blur(30px)","-webkit-mask":"linear-gradient(0deg, rgb(53, 56, 64) 0%, rgba(53, 56, 64, 0.4) 100%)",overflow:"hidden"},avatarBox:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},avatar:{width:"94px",height:"94px",border:"3px solid #ffffff",borderRadius:"50%"}})));function g(t){var a;let{metadata:e}=t;const n=w();return(0,m.jsxs)(o.A,{className:"".concat(n.avatarWrapper," avatarWrapper"),children:[(0,m.jsx)(o.A,{className:n.bg,sx:{fontSize:"28px",backgroundImage:"url(".concat(null===e||void 0===e?void 0:e.image,")")}}),(0,m.jsxs)(o.A,{className:n.avatarBox,children:[(0,m.jsx)(p.A,{className:n.avatar,src:null!==(a=null===e||void 0===e?void 0:e.image)&&void 0!==a?a:"",children:"\xa0"}),(0,m.jsx)(f.Ay,{container:!0,justifyContent:"center",mt:"20px",children:(0,m.jsx)(k.A,{minter:null===e||void 0===e?void 0:e.creator,justifyContent:"center",fontSize:"14px",textSX:{textShadow:"0px 3px 4px rgba(0, 0, 0, 0.1)"}})})]})]})}const h=(0,s.A)((t=>({collectionsWrapper:{position:"relative",display:"grid",gridGap:"20px 20px",gridTemplateColumns:"1fr 1fr 1fr",width:"fit-content","@media (max-width:479px)":{position:"static",right:"0",gridGap:"20px 20px",gridTemplateColumns:"1fr",width:"auto"},"@media (min-width:480px) and (max-width:719px)":{position:"static",right:"0",gridGap:"20px 20px",gridTemplateColumns:"1fr 1fr",width:"auto"},"@media (min-width:720px) and (max-width:1060px)":{position:"static",right:"0",gridGap:"20px 20px",gridTemplateColumns:"1fr 1fr 1fr",width:"auto"},"@media (min-width:1060px) ":{position:"static",right:"0",gridGap:"20px 20px",gridTemplateColumns:"repeat(4, 1fr)",width:"auto"}},collectionWrapper:{background:t.palette.background.level4,padding:"8px 8px 20px 8px",border:"1px solid #2F3C6D",borderRadius:"12px",cursor:"pointer"},avatar:{width:"100px",height:"100px"}})));function N(t){let{collection:a}=t;const e=h(),n=(0,r.W6)(),{result:i}=(0,u.Q9)(a.cid);return(0,m.jsxs)(o.A,{className:e.collectionWrapper,onClick:()=>{n.push("/marketplace/NFT/".concat(a.cid))},children:[(0,m.jsx)(o.A,{sx:{height:"194px",borderRadius:"12px"},children:(0,m.jsx)(g,{metadata:i})}),(0,m.jsx)(o.A,{mt:"40px",children:(0,m.jsx)(c.A,{color:"text.primary",fontSize:"18px",fontWeight:"600",align:"center",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.name})})]})}const y=["rppv3-yqaaa-aaaan-qcx4q-cai","46dg2-ciaaa-aaaan-qa3dq-cai","v4jsw-5aaaa-aaaan-qaoha-cai","ey3ct-4aaaa-aaaak-aaueq-cai","e7xmv-vyaaa-aaaag-qahha-cai","ewuhj-dqaaa-aaaag-qahgq-cai"];function T(){const t=h(),{result:a,loading:e}=(0,u.H3)(0,1e3),r=(0,i.useMemo)((()=>{var t;return null!==(t=null===a||void 0===a?void 0:a.content.filter((t=>!y.includes(t.cid))))&&void 0!==t?t:[]}),[a]);return(0,m.jsxs)(l.A,{children:[(0,m.jsx)(d.BI,{prevLink:"/marketplace/NFT",prevLabel:(0,m.jsx)(n.x6,{id:"Zt5PUS"}),currentLabel:(0,m.jsx)(n.x6,{id:"DoJzLz"})}),(0,m.jsx)(o.A,{sx:{margin:"60px 0 40px 0"},children:(0,m.jsx)(c.A,{color:"text.primary",fontWeight:"700",fontSize:"30px",children:(0,m.jsx)(n.x6,{id:"DoJzLz"})})}),(0,m.jsxs)(d.Am,{children:[(0,m.jsx)(o.A,{className:t.collectionsWrapper,children:r.map(((t,a)=>(0,m.jsx)(o.A,{sx:{overflow:"hidden"},children:(0,m.jsx)(N,{collection:t})},"".concat(t.cid,"-").concat(a))))}),e?(0,m.jsx)(x.A,{loading:e}):null]})]})}},26462:(t,a,e)=>{function n(t,a){return(!!t||0===t)&&!!a}e.d(a,{W:()=>n})}}]);
//# sourceMappingURL=947.fab6d507.chunk.js.map