"use strict";(self.webpackChunkwaste2earn_home=self.webpackChunkwaste2earn_home||[]).push([[9114],{69114:(e,n,t)=>{t.r(n),t.d(n,{TokenStandards:()=>_,default:()=>O});var i=t(54711),a=t(72296),r=t(27312),o=t(33441),d=t(77500),l=t(1054),u=t(81863),s=t(16443),c=t(11871),m=t(55484),v=t(62474),h=t(27442),p=t(85066),w=t(61361),f=t(22631),k=t(52841),x=t(65490),T=t(12288),g=t(66657),y=t(67856),P=t(72177),I=t(86100),C=t(97070),L=t(34947),j=t(12780),A=t(94570),b=t.n(A),D=t(11967),R=t(86837),S=t(37012);const _=[{label:"EXT",value:x.i.EXT},{label:"DIP20",value:x.i.DIP20},{label:"ICRC1",value:x.i.ICRC1},{label:"ICRC2",value:x.i.ICRC2},{label:"ICP",value:x.i.ICP}],V=(0,u.A)((e=>({breadcrumbs:{padding:"0 0 25px 16px","& a":{textDecoration:"none","&:hover":{textDecoration:"underline"}}},nftDesc:{color:e.palette.primary[400]},mintInfoBox:{display:"grid",gap:"30px 0",gridTemplateColumns:"1fr",gridAutoFlow:"row"},uploadImage:{height:"180px"}}))),B={startDateTime:new Date((new Date).getTime()+6e5),endDateTime:new Date((new Date).getTime()+864e6),token0AmountLimit:0,token1AmountLimit:0,secondPerCycle:600};function O(){var e,n,t;const u=V(),x=(0,r.W6)(),A=(0,s.Le)(),[O,N]=(0,a.useState)(B),[z]=(0,m.cO)(),[G,U]=(0,a.useState)(!1),[W,E]=(0,a.useState)(void 0),F=(0,L.DA)(),K=(e,n)=>{"rewardStandard"!==n&&"rewardToken"!==n||O.rewardToken&&O.rewardStandard&&F({canisterId:O.rewardToken,standard:O.rewardStandard}),N({...O,[n]:e})};(0,a.useEffect)((()=>{!async function(){if(!O.rewardToken||!O.rewardStandard)return void E(void 0);const{valid:e}=await(0,R.E)(O.rewardToken,O.rewardStandard);E(e?O.rewardToken:void 0)}()}),[O.rewardToken,O.rewardStandard]);const{result:M}=(0,C.Vs)(W),{result:X}=(0,f.QH)(O.pool),{result:q}=(0,C.Vs)(null===X||void 0===X?void 0:X.token0.address),{result:H}=(0,C.Vs)(null===X||void 0===X?void 0:X.token1.address);let J="";return O.rewardToken||(J=i.Ru._({id:"z5ccVY"})),O.rewardStandard||(J=i.Ru._({id:"epfL2+"})),M||(J=i.Ru._({id:"aZhdc2"})),O.rewardPool||(J=i.Ru._({id:"Vlcz07"})),O.pool||(J=i.Ru._({id:"eb/+IJ"})),O.reward||(J=i.Ru._({id:"aV6sn2"})),O.token0AmountLimit||0===O.token0AmountLimit||(J=i.Ru._({id:"surftM"})),O.token1AmountLimit||0===O.token1AmountLimit||(J=i.Ru._({id:"n/fv22"})),(0,S.jsx)(c.mO,{children:(0,S.jsx)(c.Am,{children:(0,S.jsx)(o.Ay,{container:!0,justifyContent:"center",children:(0,S.jsxs)(d.A,{sx:{maxWidth:"474px",width:"100%"},children:[(0,S.jsxs)(o.Ay,{mt:"30px",container:!0,className:u.mintInfoBox,children:[(0,S.jsx)(c.GV,{label:"Reward Token",placeholder:i.Ru._({id:"AIjezT"}),onChange:e=>K(e,"rewardToken"),value:O.rewardToken}),(0,S.jsx)(c.GV,{select:!0,menus:_,label:"Reward standard",placeholder:i.Ru._({id:"Uz2jLa"}),onChange:e=>K(e,"rewardStandard"),value:O.rewardStandard}),(0,S.jsx)(c.GV,{label:"Reward token swap pool id ",placeholder:i.Ru._({id:"Vlcz07"}),onChange:e=>K(e,"rewardPool"),value:O.rewardPool}),(0,S.jsx)(c.GV,{label:"Pool id ",placeholder:i.Ru._({id:"Mqd/SO"}),onChange:e=>K(e,"pool"),value:O.pool}),(0,S.jsxs)(d.A,{children:[(0,S.jsx)(l.A,{color:"text.secondary",children:"Start/End Time"}),(0,S.jsx)(d.A,{mt:2,children:(0,S.jsxs)(o.Ay,{container:!0,justifyContent:"space-between",children:[(0,S.jsx)(o.Ay,{item:!0,sx:{width:"48%"},children:(0,S.jsx)(y.$,{dateAdapter:g.R,children:(0,S.jsx)(P.K,{renderInput:e=>{var n;return(0,S.jsx)(c.GV,{fullWidth:!0,...e,InputProps:{...null!==(n=null===e||void 0===e?void 0:e.InputProps)&&void 0!==n?n:{}},helperText:""})},value:O.startDateTime,onChange:e=>{K((0,I.Lw)(e),"startDateTime")},minDateTime:b()(new Date),maxDateTime:O.endDateTime?b()(new Date(O.endDateTime)):void 0})})}),(0,S.jsx)(o.Ay,{item:!0,sx:{width:"48%"},children:(0,S.jsx)(y.$,{dateAdapter:g.R,children:(0,S.jsx)(P.K,{renderInput:e=>{var n;return(0,S.jsx)(c.GV,{fullWidth:!0,...e,InputProps:{...null!==(n=null===e||void 0===e?void 0:e.InputProps)&&void 0!==n?n:{}},helperText:""})},value:O.endDateTime,onChange:e=>{K((0,I.Lw)(e),"endDateTime")},minDateTime:O.startDateTime?b()(new Date(O.startDateTime)):b()(new Date)})})})]})})]}),(0,S.jsx)(c.LT,{label:"Reward",placeholder:i.Ru._({id:"2zjeGJ"}),onChange:e=>K(e,"reward"),value:O.reward,numericProps:{thousandSeparator:!0,decimalScale:null!==(e=null===O||void 0===O?void 0:O.rewardTokenDecimals)&&void 0!==e?e:8,allowNegative:!1,maxLength:100}}),(0,S.jsx)(c.LT,{label:"Token0 minimum staking amount ".concat(null!==q&&void 0!==q&&q.symbol?"(".concat(null===q||void 0===q?void 0:q.symbol,")"):""),placeholder:i.Ru._({id:"surftM"}),onChange:e=>K(e,"token0AmountLimit"),value:O.token0AmountLimit,numericProps:{thousandSeparator:!0,decimalScale:null!==(n=null===O||void 0===O?void 0:O.rewardTokenDecimals)&&void 0!==n?n:8,allowNegative:!1,maxLength:100}}),(0,S.jsx)(c.LT,{label:"Token1 minimum staking amount ".concat(null!==H&&void 0!==H&&H.symbol?"(".concat(null===H||void 0===H?void 0:H.symbol,")"):""),placeholder:i.Ru._({id:"n/fv22"}),onChange:e=>K(e,"token1AmountLimit"),value:O.token1AmountLimit,numericProps:{thousandSeparator:!0,decimalScale:null!==(t=null===O||void 0===O?void 0:O.rewardTokenDecimals)&&void 0!==t?t:8,allowNegative:!1,maxLength:100}}),(0,S.jsx)(c.LT,{label:"SecondPerCycle",placeholder:i.Ru._({id:"cpSmXO"}),onChange:e=>K(e,"secondPerCycle"),value:O.secondPerCycle,numericProps:{thousandSeparator:!0,decimalScale:0,allowNegative:!1,maxLength:100}}),(0,S.jsx)(c.GV,{select:!0,label:"PriceInsideLimit",placeholder:i.Ru._({id:"dBjbBQ"}),onChange:e=>K(e,"priceInsideLimit"),value:O.priceInsideLimit,menus:[{label:"True",value:"true"},{label:"False",value:"false"}]})]}),(0,S.jsxs)(l.A,{sx:{margin:"10px 0 0 0"},children:["FarmControllerId: ",D.cr]}),(0,S.jsx)(d.A,{mt:4,children:(0,S.jsx)(v.A,{onSubmit:async e=>{if(!e||G||!A||!M)return;U(!0);const{status:n,message:t}=await(0,k.UO)(e,{rewardToken:(0,j.kN)(M.canisterId),startTime:BigInt(parseInt(String(O.startDateTime.getTime()/1e3),10)),endTime:BigInt(parseInt(String(O.endDateTime.getTime()/1e3),10)),pool:O.pool,secondPerCycle:BigInt(O.secondPerCycle),rewardAmount:BigInt((0,h.u)((0,p.N)(O.reward,M.decimals))||0),rewardPool:O.rewardPool,token0AmountLimit:BigInt((0,h.u)((0,p.N)(O.token0AmountLimit,null===q||void 0===q?void 0:q.decimals))||0),token1AmountLimit:BigInt((0,h.u)((0,p.N)(O.token1AmountLimit,null===H||void 0===H?void 0:H.decimals))||0),priceInsideLimit:"true"===O.priceInsideLimit});z(n===T.i.OK?"Created successfully":t,n),U(!1),n===T.i.OK&&x.push("/staking-farm")},children:e=>{let{submit:n}=e;return(0,S.jsx)(w.A,{variant:"contained",fullWidth:!0,size:"large",onClick:n,disabled:Boolean(J)||G,loading:G,children:J||i.Ru._({id:"oeZOR2"})})}})})]})})})})}},52841:(e,n,t)=>{t.d(n,{Hc:()=>v,Ls:()=>s,O2:()=>p,UO:()=>w,YK:()=>m,lU:()=>f,qt:()=>h,yN:()=>k});var i=t(72296),a=t(20361),r=t(26462),o=t(65324),d=t(2777),l=t(59155);const u=function(e,n,t,i){return new(t||(t=Promise))((function(a,r){function o(e){try{l(i.next(e))}catch(n){r(n)}}function d(e){try{l(i.throw(e))}catch(n){r(n)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,d)}l((i=i.apply(e,n||[])).next())}))};function s(e,n){return u(this,void 0,void 0,(function*(){return(0,a.Pk)(yield(yield(0,d.P4)(e)).getFarmInfo(n)).data}))}function c(e,n,t,i){return u(this,void 0,void 0,(function*(){return(0,a.Pk)(yield(yield(0,d.P4)(e)).getUserPositions(o.p.from(n),BigInt(t),BigInt(i))).data}))}function m(e,n,t){const a=(0,i.useCallback)(((t,i)=>u(this,void 0,void 0,(function*(){if(e&&n)return yield c(e,n,t,i)}))),[e,n]);return(0,l.ND)(a,300,t)}function v(e){return u(this,void 0,void 0,(function*(){return(0,a.Pk)(yield(yield(0,d.P4)(e)).getTVL()).data}))}function h(e,n){return u(this,void 0,void 0,(function*(){return(0,a.Pk)(yield(yield(0,d.P4)(e)).getUserTVL(o.p.fromText(n))).data}))}function p(e,n){return u(this,void 0,void 0,(function*(){return(0,a.Pk)(yield(yield(0,d.P4)(e)).getRewardInfo(n)).data}))}function w(e,n){return u(this,void 0,void 0,(function*(){return(0,a.Pk)(yield(yield(0,d.Oj)(e)).create(n.rewardToken,n.rewardAmount,n.rewardPool,n.pool,n.startTime,n.endTime,n.secondPerCycle,n.token0AmountLimit,n.token1AmountLimit,n.priceInsideLimit))}))}function f(e,n,t,o){return(0,l.Pz)((0,i.useCallback)((()=>u(this,void 0,void 0,(function*(){if((0,r.W)(e,n)&&t)return yield function(e,n,t){return u(this,void 0,void 0,(function*(){return(0,a.Pk)(yield(yield(0,d.Oj)()).getFarmList(BigInt(e),BigInt(n),t)).data}))}(e,n,t)}))),[e,n,t]),o)}function k(e){return(0,l.Pz)((0,i.useCallback)((()=>u(this,void 0,void 0,(function*(){if(e)return yield function(e){return u(this,void 0,void 0,(function*(){return(0,a.Pk)(yield(yield(0,d.P4)(e)).getRewardMeta()).data}))}(e)}))),[e]))}}}]);
//# sourceMappingURL=9114.9e8b125b.chunk.js.map