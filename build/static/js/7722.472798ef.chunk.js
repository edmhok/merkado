"use strict";(self.webpackChunkwaste2earn_home=self.webpackChunkwaste2earn_home||[]).push([[7722],{41738:(e,i,o)=>{o.d(i,{A:()=>h});var n=o(3481),t=o(72296),r=o(33441),l=o(1054),s=o(4102),c=o(6),a=o(61753),d=o(29277),p=o(60667),x=o(43643);var u=o(37012);function h(e){var i,o;let{open:h,onCancel:v,onConfirm:m,position:g,baseCurrencyDefault:f}=e;const j=null===g||void 0===g||null===(i=g.pool)||void 0===i?void 0:i.token0,A=null===g||void 0===g||null===(o=g.pool)||void 0===o?void 0:o.token1,[y,b]=(0,t.useState)(!1),k=(0,t.useMemo)((()=>{const e=f?f===j?j:f===A?A:j:j;return y?e===j?A:j:e}),[f,A,j,y]),C=k===j,w=C?A:j,R=function(e){let{position:i,inverted:o}=e;const{tickLower:n,tickUpper:r}=i||{},l=null===i||void 0===i?void 0:i.pool.fee,s=(0,x.A)(l,n,r);return(0,t.useMemo)((()=>o?{[d.zm.LOWER]:!!s[d.zm.UPPER]||void 0,[d.zm.UPPER]:!!s[d.zm.LOWER]||void 0}:s),[s,o])}({position:g,inverted:y}),{price:S,priceLower:z,priceUpper:L}=(0,t.useMemo)((()=>({price:C?g.pool.priceOf(g.pool.token0):g.pool.priceOf(g.pool.token1),priceLower:C?g.token0PriceLower:g.token0PriceUpper.invert(),priceUpper:C?g.token0PriceUpper:g.token0PriceLower.invert()})),[C,g]),P=()=>{b(!y)};return(0,u.jsx)(c.A,{open:h,onClose:v,title:"Add Liquidity",children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(r.Ay,{container:!0,flexDirection:"column",spacing:3,children:[(0,u.jsxs)(r.Ay,{item:!0,container:!0,children:[(0,u.jsx)(l.A,{children:(0,u.jsx)(n.x6,{id:"SzZxJA"})}),(0,u.jsxs)(r.Ay,{item:!0,xs:!0,container:!0,flexDirection:"column",justifyContent:"flex-end",children:[(0,u.jsx)(l.A,{color:"textPrimary",align:"right",children:"".concat(g.amount0.toSignificant(6,{groupSeparator:","})," ").concat(j.symbol)}),(0,u.jsx)(l.A,{color:"textPrimary",align:"right",sx:{marginTop:"8px"},children:"".concat(g.amount1.toSignificant(6,{groupSeparator:","})," ").concat(A.symbol)})]})]}),(0,u.jsxs)(r.Ay,{item:!0,container:!0,children:[(0,u.jsx)(l.A,{children:(0,u.jsx)(n.x6,{id:"kNeEXg"})}),(0,u.jsxs)(r.Ay,{item:!0,xs:!0,container:!0,justifyContent:"flex-end",children:[(0,u.jsx)(l.A,{color:"textPrimary",align:"right",children:"".concat(S.toSignificant(5,{groupSeparator:","})," ").concat(w.symbol," per ").concat(k.symbol)}),(0,u.jsx)(p.A,{sx:{fontSize:"1rem",marginLeft:"6px",cursor:"pointer"},onClick:P})]})]}),(0,u.jsxs)(r.Ay,{item:!0,container:!0,children:[(0,u.jsx)(l.A,{children:(0,u.jsx)(n.x6,{id:"YA4hwj"})}),(0,u.jsxs)(r.Ay,{item:!0,xs:!0,container:!0,justifyContent:"flex-end",children:[(0,u.jsxs)(l.A,{color:"textPrimary",align:"right",children:["".concat((0,a.I)(z,R,d.zm.LOWER))," -"," ","".concat((0,a.I)(L,R,d.zm.UPPER))," ","".concat(null===w||void 0===w?void 0:w.symbol," per ").concat(null===k||void 0===k?void 0:k.symbol)]}),(0,u.jsx)(p.A,{sx:{fontSize:"1rem",marginLeft:"6px",cursor:"pointer"},onClick:P})]})]})]}),(0,u.jsx)(s.A,{variant:"contained",size:"large",fullWidth:!0,sx:{marginTop:"40px"},onClick:m,children:(0,u.jsx)(n.x6,{id:"m16xKo"})})]})})}},78186:(e,i,o)=>{o.d(i,{A:()=>d});var n=o(72296),t=o(27312),r=o(33441),l=o(1054),s=o(78470),c=o(37012);const a=(0,s.A)((0,c.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");function d(e){let{showArrow:i=!1,title:o,onBack:s}=e;const d=(0,t.W6)(),p=(0,n.useCallback)((()=>{s?s():d.goBack()}),[d,s]);return(0,c.jsxs)(r.Ay,{container:!0,children:[(0,c.jsx)(r.Ay,{item:!0,xs:2,container:!0,justifyContent:"flex-start",children:i&&(0,c.jsx)(a,{sx:{cursor:"pointer"},onClick:p})}),(0,c.jsx)(r.Ay,{item:!0,xs:!0,container:!0,justifyContent:"center",children:(0,c.jsx)(l.A,{color:"textPrimary",variant:"h3",children:o})}),(0,c.jsx)(r.Ay,{item:!0,xs:2,container:!0,justifyContent:"flex-start",sx:{position:"relative"}})]})}},26265:(e,i,o)=>{o.d(i,{A:()=>y});var n=o(3481),t=o(72296),r=o(33441),l=o(77500),s=o(1054),c=o(81863),a=o(61753),d=o(43643),p=o(29277),x=o(63473),u=o(50284),h=o(60667),v=o(36884),m=o(68112),g=o(13930),f=o(37012);const j=(0,v.A)({breakpoints:{values:{sm:680}}}),A=(0,c.A)((e=>({NFTBox:{marginRight:"12px",borderRadius:"12px",background:e.palette.background.level2,width:"300px",height:"332px",[j.breakpoints.down("sm")]:{width:"100%",height:"332px",marginBottom:"20px",marginRight:"0px"}},NFTWrapper:{width:"300px",height:"300px",position:"relative"},currentPrice:{height:"52px",borderRadius:"12px",border:"1px solid ".concat(e.palette.background.level3),background:e.palette.background.level2,padding:"0 20px"},rangeBox:{height:"112px",borderRadius:"12px",border:"1px solid ".concat(e.palette.background.level3),background:e.palette.background.level2}})));function y(e){let{position:i}=e;const o=A(),{pool:c,tickLower:v,tickUpper:j}=i||{},{token0:y,token1:b,fee:k}=c||{},C=(0,x.s)(i),[w,R]=(0,t.useState)(!1),{priceLower:S,priceUpper:z,base:L}=(0,u.h)({priceLower:C.priceLower,priceUpper:C.priceUpper,quote:C.quote,base:C.base,invert:w}),P=b?null===L||void 0===L?void 0:L.equals(b):void 0,U=P?y:b,I=P?b:y,N=(0,d.A)(k,v,j),W=(0,t.useMemo)((()=>P?{[p.zm.LOWER]:!!N[p.zm.UPPER]||void 0,[p.zm.UPPER]:!!N[p.zm.LOWER]||void 0}:N),[N,P]),M=(0,t.useMemo)((()=>U&&I?"".concat(null===U||void 0===U?void 0:U.symbol," per ").concat(null===I||void 0===I?void 0:I.symbol):"--"),[U,I]),B=!(!c||!j&&0!==j||!v&&0!==v)&&(c.tickCurrent<v||c.tickCurrent>=j),E=!function(e){var i;return"0"!==(null===e||void 0===e||null===(i=e.liquidity)||void 0===i?void 0:i.toString())}(i);return(0,f.jsxs)(r.Ay,{container:!0,flexDirection:"column",children:[(0,f.jsxs)(r.Ay,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,f.jsxs)(l.A,{sx:{display:"flex",alignItems:"center"},children:[(0,f.jsx)(m.H,{logo:null===y||void 0===y?void 0:y.logo,tokenId:null===y||void 0===y?void 0:y.address}),(0,f.jsx)(l.A,{sx:{width:"32px",height:"32px",position:"relative",left:"-10px"},children:(0,f.jsx)(m.H,{logo:null===b||void 0===b?void 0:b.logo,tokenId:null===b||void 0===b?void 0:b.address})}),(0,f.jsx)(s.A,{sx:{fontSize:"28px",color:"#fff",fontWeight:500,"@media(max-width: 640px)":{fontSize:"18px"}},children:null===y||void 0===y?void 0:y.symbol}),(0,f.jsx)(s.A,{sx:{fontSize:"24px",color:"#fff",fontWeight:500,margin:"0 10px","@media(max-width: 640px)":{fontSize:"16px"}},children:"/"}),(0,f.jsx)(s.A,{sx:{fontSize:"28px",color:"#fff",fontWeight:500,"@media(max-width: 640px)":{fontSize:"18px"}},children:null===b||void 0===b?void 0:b.symbol})]}),(0,f.jsx)(g.A,{outOfRange:B,closed:E})]}),(0,f.jsxs)(r.Ay,{item:!0,xs:!0,sx:{margin:"24px 0 0 0"},children:[(0,f.jsxs)(r.Ay,{container:!0,alignItems:"center",className:o.currentPrice,children:[(0,f.jsx)(s.A,{color:"text.primary",children:(0,f.jsx)(n.x6,{id:"kNeEXg"})}),(0,f.jsx)(r.Ay,{item:!0,xs:!0,children:(0,f.jsxs)(r.Ay,{container:!0,alignItems:"center",justifyContent:"flex-end",children:[(0,f.jsx)(s.A,{fontWeight:"500",color:"text.primary",sx:{maxWidth:"190px",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:b&&y?P?null!==c&&void 0!==c&&c.priceOf(b)?"".concat(null===c||void 0===c?void 0:c.priceOf(b).toSignificant(6)):"--":null!==c&&void 0!==c&&c.priceOf(y)?"".concat(null===c||void 0===c?void 0:c.priceOf(y).toSignificant(6)):"--":"--"}),(0,f.jsx)(h.A,{sx:{fontSize:"1rem",marginLeft:"6px",cursor:"pointer"},onClick:()=>R(!w)})]})})]}),(0,f.jsxs)(l.A,{mt:"20px",children:[(0,f.jsx)(r.Ay,{container:!0,alignItems:"center",children:(0,f.jsx)(r.Ay,{item:!0,xs:!0,children:(0,f.jsx)(s.A,{color:"text.primary",fontWeight:"700",children:"Price Range"})})}),(0,f.jsxs)(l.A,{sx:{display:"flex",gap:"0 24px"},children:[(0,f.jsx)(r.Ay,{container:!0,justifyContent:"center",alignItems:"center",mt:"10px",className:o.rangeBox,children:(0,f.jsx)(l.A,{children:(0,f.jsxs)(r.Ay,{container:!0,justifyContent:"center",alignItems:"center",flexDirection:"column",children:[(0,f.jsx)(s.A,{fontSize:"12px",fontWeight:"500",children:"Min Price"}),(0,f.jsx)(s.A,{fontSize:"20px",fontWeight:"700",color:"text.primary",sx:{margin:"6px 0"},children:(0,a.I)(S,W,p.zm.LOWER)}),(0,f.jsx)(s.A,{fontSize:"12px",fontWeight:"500",children:M})]})})}),(0,f.jsx)(r.Ay,{container:!0,justifyContent:"center",alignItems:"center",mt:"8px",className:o.rangeBox,children:(0,f.jsx)(l.A,{children:(0,f.jsxs)(r.Ay,{container:!0,justifyContent:"center",alignItems:"center",flexDirection:"column",children:[(0,f.jsx)(s.A,{fontSize:"12px",fontWeight:"500",children:"Max Price"}),(0,f.jsx)(s.A,{fontSize:"20px",fontWeight:"700",color:"text.primary",sx:{margin:"6px 0"},children:(0,a.I)(z,W,p.zm.UPPER)}),(0,f.jsx)(s.A,{fontSize:"12px",fontWeight:"500",children:M})]})})})]})]})]})]})}},13930:(e,i,o)=>{o.d(i,{A:()=>h});var n=o(3481),t=o(53250),r=o(77500),l=o(1054),s=o(81863),c=o(37012);const a=(0,s.A)((e=>({wrapper:{display:"flex",alignItems:"center",height:"24px",padding:"0 9px",borderRadius:"8px","& .MuiTypography-root":{fontSize:"12px",fontWeight:500},"&.inRange":{background:e.colors.darkPrimary400},"&.closed":{background:e.colors.darkPrimary400},"&.outOfRange":{background:"#FFC107","& .MuiTypography-root":{color:e.colors.darkLevel1,marginLeft:"3px"}}}})));function d(e){return(0,c.jsx)(t.A,{width:"12",height:"12",viewBox:"0 0 12 12",...e,children:(0,c.jsx)("path",{d:"M5.5 3.5H6.5V4.5H5.5V3.5ZM5.5 5.5H6.5V8.5H5.5V5.5ZM6 1C3.24 1 1 3.24 1 6C1 8.76 3.24 11 6 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 6 1ZM6 10C3.795 10 2 8.205 2 6C2 3.795 3.795 2 6 2C8.205 2 10 3.795 10 6C10 8.205 8.205 10 6 10Z",fill:e.color?e.color:"#111936"})})}function p(){const e=a();return(0,c.jsxs)(r.A,{component:"span",className:"".concat(e.wrapper," closed"),children:[(0,c.jsx)(d,{fontSize:"12px",color:"#fff"}),(0,c.jsx)(l.A,{color:"#ffffff",sx:{marginLeft:"3px"},children:(0,c.jsx)(n.x6,{id:"D87pha"})})]})}function x(){const e=a();return(0,c.jsxs)(r.A,{className:"".concat(e.wrapper," outOfRange"),children:[(0,c.jsx)(d,{fontSize:"12px"}),(0,c.jsx)(l.A,{children:(0,c.jsx)(n.x6,{id:"i3Z+/Z"})})]})}function u(){const e=a();return(0,c.jsxs)(r.A,{className:"".concat(e.wrapper," inRange"),children:[(0,c.jsx)(r.A,{component:"span",sx:{background:"#54C081",width:"8px",height:"8px",borderRadius:"50%",marginRight:"8px"}}),(0,c.jsx)(l.A,{color:"#ffffff",children:(0,c.jsx)(n.x6,{id:"vOyUlD"})})]})}function h(e){let{outOfRange:i,closed:o}=e;return o?(0,c.jsx)(p,{}):i?(0,c.jsx)(x,{}):(0,c.jsx)(u,{})}},84052:(e,i,o)=>{o.d(i,{A:()=>j});var n=o(3481),t=o(77500),r=o(33441),l=o(1054),s=o(25993),c=o(81863),a=o(69770),d=o(53250),p=o(37012);const x=e=>(0,p.jsx)(d.A,{viewBox:"0 0 18 20",...e,children:(0,p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.5227 5.39601V6.92935C16.2451 7.46696 17.5 9.02614 17.5 10.8884V15.8253C17.5 18.1308 15.5886 20 13.2322 20H4.7688C2.41136 20 0.5 18.1308 0.5 15.8253V10.8884C0.5 9.02614 1.75595 7.46696 3.47729 6.92935V5.39601C3.48745 2.41479 5.95667 0 8.98476 0C12.0535 0 14.5227 2.41479 14.5227 5.39601ZM9.00508 1.73904C11.0678 1.73904 12.7445 3.37871 12.7445 5.39601V6.7137H5.25553V5.37613C5.26569 3.36878 6.94232 1.73904 9.00508 1.73904ZM9.88912 14.4549C9.88912 14.9419 9.49283 15.3294 8.99492 15.3294C8.50717 15.3294 8.11088 14.9419 8.11088 14.4549V12.2488C8.11088 11.7718 8.50717 11.3843 8.99492 11.3843C9.49283 11.3843 9.88912 11.7718 9.88912 12.2488V14.4549Z",fill:"#111936"})});var u=o(11871),h=o(2281),v=o(24012),m=o(86100);const g=(0,c.A)((e=>({box:{position:"relative",borderRadius:"".concat(e.radius,"px"),backgroundColor:e.palette.background.level3,border:e.palette.border.gray200},input:{"& input":{textAlign:"right",fontSize:"20px",fontWeight:700,[e.breakpoints.down("sm")]:{fontSize:"16px"}},"& input::placeholder":{fontSize:"20px",fontWeight:700,[e.breakpoints.down("sm")]:{fontSize:"16px"}}},chip:{padding:"0 10px",height:"44px",backgroundColor:(0,m.g4)(e)?e.palette.background.level2:e.colors.lightGray200,borderRadius:"".concat(e.radius,"px"),"& .MuiChip-label":{paddingLeft:"18px"}},maxButton:{padding:"1px 3px",cursor:"pointer",borderRadius:"2px",backgroundColor:e.colors.secondaryMain,color:"#ffffff"}}))),f=e=>{let{type:i}=e;const o=(0,a.A)();return(0,p.jsxs)(t.A,{sx:{position:"absolute",width:"100%",height:"100%",top:0,left:0},children:[(0,p.jsx)(t.A,{sx:{position:"absolute",width:"100%",height:"100%",top:0,left:0,background:"addLiquidity"===i?o.palette.background.level2:o.palette.background.level1,opacity:.9,borderRadius:"12px"}}),(0,p.jsxs)(r.Ay,{container:!0,sx:{position:"absolute",width:"100%",height:"100%",top:0,left:0,zIndex:1},justifyContent:"center",alignItems:"center",children:[(0,p.jsx)(x,{}),(0,p.jsx)(l.A,{align:"center",color:"textPrimary",children:(0,p.jsx)(n.x6,{id:"G92cwW"})})]})]})};function j(e){var i;let{currency:o,value:c,locked:a=!1,onUserInput:d,type:x,currencyBalance:m,showMaxButton:j,onMax:A}=e;const y=g(),b=null!==(i=null===o||void 0===o?void 0:o.decimals)&&void 0!==i?i:h.if;return(0,p.jsxs)(t.A,{sx:{p:2},className:y.box,children:[(0,p.jsxs)(r.Ay,{container:!0,alignItems:"center",children:[(0,p.jsx)(s.A,{className:y.chip,label:null===o||void 0===o?void 0:o.symbol,avatar:(0,p.jsx)(u.HM,{logo:null===o||void 0===o?void 0:o.logo,tokenId:null===o||void 0===o?void 0:o.wrapped.address})}),(0,p.jsx)(r.Ay,{item:!0,xs:!0,children:(0,p.jsx)(u.Tv,{value:c,fullWidth:!0,className:y.input,placeholder:"0.0",variant:"standard",numericProps:{thousandSeparator:!0,decimalScale:b>h.if?h.if:b,allowNegative:!1,maxLength:h.jA},onChange:e=>{d(e.target.value)}})})]}),(0,p.jsxs)(r.Ay,{container:!0,mt:1,children:[(0,p.jsx)(r.Ay,{item:!0,mr:1,children:(0,p.jsxs)(l.A,{children:[(0,p.jsx)(n.x6,{id:"0QDjxt"})," ",o?(0,v.N)(m,o.decimals):"--"]})}),j&&(0,p.jsx)(r.Ay,{children:(0,p.jsx)(l.A,{fontSize:12,className:y.maxButton,onClick:A,children:(0,p.jsx)(n.x6,{id:"CK1KXz"})})})]}),a&&(0,p.jsx)(f,{type:x})]})}},27586:(e,i,o)=>{o.d(i,{F:()=>l,s:()=>s});var n=o(87916),t=o(28918),r=o(93321);function l(e){const[,i]=(0,r.rd)(null===e||void 0===e?void 0:e.token0),[,o]=(0,r.rd)(null===e||void 0===e?void 0:e.token1),[l,s]=(0,t.Q2)(null!==i&&void 0!==i?i:void 0,null!==o&&void 0!==o?o:void 0,null!==e&&void 0!==e&&e.fee?Number(e.fee):void 0);let c;return s&&e&&(c=new n.y({pool:s,liquidity:e.liquidity.toString(),tickLower:Number(e.tickLower),tickUpper:Number(e.tickUpper)})),{loading:l===t.S.LOADING,position:c,pool:null!==s&&void 0!==s?s:void 0}}function s(e){const[,i]=(0,r.rd)(null===e||void 0===e?void 0:e.token0),[,o]=(0,r.rd)(null===e||void 0===e?void 0:e.token1),[l,s]=(0,t.Xc)(null!==i&&void 0!==i?i:void 0,null!==o&&void 0!==o?o:void 0,null!==e&&void 0!==e&&e.fee?Number(e.fee):void 0);let c;return s&&e&&(c=new n.y({pool:s,liquidity:e.liquidity.toString(),tickLower:Number(e.tickLower),tickUpper:Number(e.tickUpper)})),{loading:l===t.S.LOADING,position:c,pool:null!==s&&void 0!==s?s:void 0}}},6511:(e,i,o)=>{o.d(i,{qK:()=>s,uj:()=>l});var n=o(72296),t=o(60816),r=o(37140);function l(){return(0,t.GV)((e=>e.swapV2Cache.userTransactionsDeadline))}function s(e){const i=(0,t.jL)();return[(0,t.GV)((e=>e.swapV2Cache.userSlippage))[e],(0,n.useCallback)((o=>{i((0,r.S)({type:e,value:o}))}),[i])]}},87722:(e,i,o)=>{o.r(i),o.d(i,{PriceRange:()=>N,default:()=>W});var n=o(3481),t=o(54711),r=o(72296),l=o(27312),s=o(33441),c=o(1054),a=o(77500),d=o(81863),p=o(11871),x=o(78186),u=o(84052),h=o(95826),v=o(31879),m=o(6511),g=o(78361),f=o(27586),j=o(41738),A=o(55484),y=o(2281),b=o(62916),k=o(85066),C=o(86100),w=o(68703),R=o(62474),S=o(16443),z=o(26265),L=o(84076),P=o(61361),U=o(37012);const I=(0,d.A)((e=>({container:{width:"100%",maxWidth:"720px"},currentPrice:{padding:"16px 20px",border:e.palette.border.gray200,backgroundColor:(0,C.g4)(e)?e.palette.background.level1:"#fff",borderRadius:"12px",marginTop:"20px"},range:{width:"48%",padding:"16px 0",borderRadius:"12px",backgroundColor:(0,C.g4)(e)?e.palette.background.level2:"#fff"},inputBox:{backgroundColor:e.palette.background.level3,borderRadius:"12px",padding:"16px 24px 16px 12px"},input:{"& input":{fontSize:"20px",fontWeight:700,textAlign:"right",height:"28px",padding:"0 0"},"& input::placeholder":{fontSize:"20px",fontWeight:700}}})));function N(e){let{label:i,value:o,currencyA:n,currencyB:t}=e;const r=I();return(0,U.jsxs)(s.Ay,{item:!0,container:!0,className:r.range,alignItems:"center",flexDirection:"column",children:[(0,U.jsx)(c.A,{fontSize:"12px",children:i}),(0,U.jsx)(a.A,{mt:"12px",children:(0,U.jsx)(c.A,{variant:"h3",color:"textPrimary",children:o})}),(0,U.jsx)(a.A,{mt:"12px",children:(0,U.jsx)(c.A,{fontSize:"12px",children:null!==t&&void 0!==t&&t.symbol&&null!==n&&void 0!==n&&n.symbol?"".concat(null===t||void 0===t?void 0:t.symbol," per ").concat(null===n||void 0===n?void 0:n.symbol):y.As})})]})}const W=(0,r.memo)((()=>{var e,i;const o=I(),d=(0,l.W6)(),{positionId:y}=(0,l.g)(),C=BigInt(y),{result:N,loading:W}=(0,g.Jl)(C),{position:M,loading:B}=(0,f.F)(N),[E]=(0,r.useState)(!1),q=(0,S.Le)(),_=B||W,O=null===M||void 0===M?void 0:M.pool.token0,V=null===M||void 0===M?void 0:M.pool.token1,D=(0,r.useMemo)((()=>E?V:O),[E,O,V]),F=!!O&&(null===D||void 0===D?void 0:D.equals(O))?V:O,{independentField:H,typedValue:Z}=(0,v.Vs)(),{dependentField:T,parsedAmounts:Y,currencyBalances:G,position:X,noLiquidity:K,errorMessage:J,invalidRange:Q,depositADisabled:$,depositBDisabled:ee,atMaxAmounts:ie,maxAmounts:oe}=(0,v.Gm)(null!==D&&void 0!==D?D:void 0,null!==F&&void 0!==F?F:void 0,null===M||void 0===M?void 0:M.pool.fee,null!==D&&void 0!==D?D:void 0,M,E),{onFieldAInput:ne,onFieldBInput:te}=(0,v.R8)(K),re={[H]:Z,[T]:null!==(e=null===(i=Y[T])||void 0===i?void 0:i.toSignificant(6))&&void 0!==e?e:""},le=!J&&!Q,[se,ce]=(0,r.useState)(!1),ae=(0,r.useCallback)((()=>{ce(!0)}),[ce]),de=(0,r.useCallback)((()=>{ce(!1)}),[ce]),pe=(0,m.uj)(),[xe]=(0,m.qK)("mint"),[ue]=(0,A.I5)(),[he]=(0,A.dX)(),[ve,me]=(0,A.VS)(),ge=(0,v.Wk)(),fe=(0,r.useCallback)((()=>{ge(),d.push("/swap/v2/liquidity")}),[d,ge]),je=(0,w.z)(),Ae=(0,r.useCallback)((async(e,i)=>{let{loading:o}=i;if(!o&&q&&X){ce(!1);const i=X.mintAmountsWithSlippage((0,h.EU)(xe)),o=X.mintAmounts.amount0.toString(),r=X.mintAmounts.amount1.toString(),l=i.amount0.toString(),s=i.amount1.toString(),c=ve(t.Ru._({id:"XbgXuu",values:{0:(0,k.t)(o,X.pool.token0.decimals).toFormat(),1:X.pool.token0.symbol,2:(0,k.t)(r,X.pool.token1.decimals).toFormat(),3:X.pool.token1.symbol}})),{status:a}=await je({canisterId:X.pool.token0.address,spender:X.pool.id,value:o,account:q});if("err"===a)return me(c),void he("Failed to approve ".concat(X.pool.token0.symbol));const{status:d}=await je({canisterId:X.pool.token1.address,spender:X.pool.id,value:r,account:q});if("err"===d)return me(c),void he("Failed to approve ".concat(X.pool.token1.symbol));const{status:p,message:x}=await(0,g.PC)(e,{tokenId:C,amount0Desired:o,amount1Desired:r,amount0Min:l,amount1Min:s,deadline:BigInt(pe),recipient:q});var n;if(me(c),"ok"===p)ue(t.Ru._({id:"LZeZGf"})),fe();else he(null!==(n=(0,L.If)(x))&&void 0!==n?n:t.Ru._({id:"6XI1Dg"}))}}),[X,C,xe,pe]);return(0,U.jsx)(R.A,{onSubmit:Ae,children:e=>{let{submit:i,loading:r}=e;return(0,U.jsxs)(a.A,{sx:{position:"relative"},children:[(0,U.jsx)(s.Ay,{container:!0,justifyContent:"center",children:(0,U.jsxs)(a.A,{sx:{width:"100%",maxWidth:"720px",position:"relative"},children:[(0,U.jsxs)(p.Am,{level:1,className:"".concat(o.container," lightGray200"),children:[(0,U.jsx)(x.A,{title:"Add Liquidity",showArrow:!0,showUserSetting:!0,slippageType:"mint",onBack:fe}),(0,U.jsx)(a.A,{mt:"20px",children:(0,U.jsx)(z.A,{position:M,positionId:C,version:"v2"})}),(0,U.jsxs)(a.A,{mt:3,children:[(0,U.jsx)(c.A,{variant:"h5",color:"textPrimary",children:(0,U.jsx)(n.x6,{id:"BRi+RY"})}),(0,U.jsxs)(a.A,{mt:"12px",children:[(0,U.jsx)(u.A,{currency:null!==D&&void 0!==D?D:void 0,onUserInput:ne,value:re[h.b_.CURRENCY_A],locked:$,type:"addLiquidity",currencyBalance:null===G||void 0===G?void 0:G[h.b_.CURRENCY_A],showMaxButton:!ie[h.b_.CURRENCY_A],onMax:()=>{var e,i;return ne(null!==(e=null===(i=oe[h.b_.CURRENCY_A])||void 0===i?void 0:i.toExact())&&void 0!==e?e:"")}}),(0,U.jsx)(a.A,{mt:"16px",children:(0,U.jsx)(u.A,{currency:null!==F&&void 0!==F?F:void 0,onUserInput:te,value:re[h.b_.CURRENCY_B],locked:ee,type:"addLiquidity",currencyBalance:null===G||void 0===G?void 0:G[h.b_.CURRENCY_B],showMaxButton:!ie[h.b_.CURRENCY_B],onMax:()=>{var e,i;return te(null!==(e=null===(i=oe[h.b_.CURRENCY_B])||void 0===i?void 0:i.toExact())&&void 0!==e?e:"")}})})]})]}),(0,U.jsx)(a.A,{mt:5,children:(0,U.jsx)(P.A,{fullWidth:!0,variant:"contained",disabled:!le||r,size:"large",onClick:ae,children:le?t.Ru._({id:"m16xKo"}):J})})]}),_&&(0,U.jsx)(a.A,{sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},children:(0,U.jsx)(b.A,{loading:_,mask:!0})})]})}),se&&!!X&&(0,U.jsx)(j.A,{onConfirm:i,onCancel:de,open:se,position:X})]})}})}))},60667:(e,i,o)=>{o.d(i,{A:()=>r});var n=o(78470),t=o(37012);const r=(0,n.A)((0,t.jsx)("path",{d:"m18 12 4-4-4-4v3H3v2h15zM6 12l-4 4 4 4v-3h15v-2H6z"}),"SyncAlt")},63473:(e,i,o)=>{function n(e){if(!e)return{};const i=e.amount0.currency,o=e.amount1.currency;return e.token0PriceUpper.lessThan(1)?{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:i,base:o}:{priceLower:e.token0PriceLower,priceUpper:e.token0PriceUpper,quote:o,base:i}}o.d(i,{s:()=>n})},50284:(e,i,o)=>{function n(e){let{priceLower:i,priceUpper:o,quote:n,base:t,invert:r}=e;return{priceUpper:r?null===i||void 0===i?void 0:i.invert():o,priceLower:r?null===o||void 0===o?void 0:o.invert():i,quote:r?t:n,base:r?n:t}}o.d(i,{h:()=>n})}}]);
//# sourceMappingURL=7722.472798ef.chunk.js.map