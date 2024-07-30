"use strict";(self.webpackChunkmerkado=self.webpackChunkmerkado||[]).push([[8568],{97260:(e,n,t)=>{t.d(n,{H3:()=>w,HB:()=>m,K1:()=>v,ML:()=>u,NB:()=>y,Ny:()=>p,Q9:()=>A,Wr:()=>b,cs:()=>g,fL:()=>d,g4:()=>k,iJ:()=>f,ie:()=>h,mI:()=>C,nG:()=>o,uq:()=>x,wl:()=>j});var a=t(72296),i=t(3764),r=t(20361),s=t(26462),l=t(85355),c=t(59155);t(75918);function o(){return(0,a.useCallback)((async(e,n,t)=>t.count&&BigInt(t.count)>1?(0,r.Pk)(await(await(0,l.iZ)(e,n)).mint_batch(t)):(0,r.Pk)(await(await(0,l.iZ)(e,n)).mint({...t}))),[])}function d(e,n,t){return(0,c.Pz)((0,a.useCallback)((async()=>{if(e&&(n||0===n))return(0,r.Pk)(await(await(0,l.iZ)(e)).icsMetadata(Number(n))).data}),[n]),t)}function u(e,n,t,i,o){return(0,c.Pz)((0,a.useCallback)((async()=>{if(e&&n&&(0,s.W)(t,i))return(0,r.Pk)(await(await(0,l.iZ)(e)).findTxRecord(n,BigInt(t),BigInt(i))).data}),[e,n,t,i]),o)}function x(e,n,t,i){return(0,c.Pz)((0,a.useCallback)((async()=>{if(e&&n&&(0,s.W)(t,i))return(0,r.Pk)(await(await(0,l.iZ)(e)).findTokenTxRecord({address:n},BigInt(t),BigInt(i))).data}),[n,t,i]))}function h(){return(0,a.useCallback)((async(e,n,t)=>(0,r.Pk)(await(await(0,l.iZ)(e,n)).transfer(t))),[])}function f(e){return(0,c.Pz)((0,a.useCallback)((async()=>{if(e)return(0,r.Pk)(await(await(0,l.iZ)(e)).cycleBalance()).data}),[e]))}function p(e,n,t){return(0,c.Pz)((0,a.useCallback)((async()=>{if(e&&n)return(0,r.Pk)(await(await(0,l.iZ)(e)).ownerNFTCount({address:n})).data}),[e,n]),t)}function w(e,n){return(0,c.Pz)((0,a.useCallback)((async()=>{if((0,s.W)(e,n))return(0,r.Pk)(await(await(0,l.gM)()).findCanister(BigInt(e),BigInt(n))).data}),[e,n]))}function v(e,n,t){return(0,c.Pz)((0,a.useCallback)((async()=>{if((0,s.W)(n,t))return(0,r.Pk)(await(await(0,l.gM)()).findUserCanister(e,BigInt(n),BigInt(t))).data}),[n,t]))}async function j(e){return(0,r.Pk)(await(await(0,l.gM)(!0)).create(e))}async function m(e,n){return(0,r.Pk)(await(await(0,l.iZ)(e,!0)).setLogo(n))}async function g(e,n){return(0,r.Pk)(await(await(0,l.gM)(!0)).setLogo(n,e))}function A(e){return(0,c.Pz)((0,a.useCallback)((async()=>{if(e)return i.XA.includes(e)?(0,r.Pk)(await(await(0,l.gM)()).canisterInfo(e)).data:(0,r.Pk)(await(await(0,l.iZ)(e)).canisterInfo()).data}),[e]))}function k(e){return(0,c.Pz)((0,a.useCallback)((async()=>{if(e)return await async function(e){var n,t;return i.XA.includes(e)?null===(n=(0,r.Pk)(await(await(0,l.gM)()).canisterInfo(e)).data)||void 0===n?void 0:n.image:null===(t=(0,r.Pk)(await(await(0,l.iZ)(e)).canisterInfo()).data)||void 0===t?void 0:t.image}(e)}),[e]))}function y(e,n,t,i){return(0,c.Pz)((0,a.useCallback)((async()=>{if(e&&n&&(0,s.W)(t,i))return(0,r.Pk)(await(await(0,l.iZ)(e)).findTokenList({address:n},BigInt(t),BigInt(i))).data}),[e,n,t,i]))}function C(){return(0,c.Pz)((0,a.useCallback)((async()=>(0,r.Pk)(await(await(0,l.gM)()).feeInfo()).data),[]))}async function b(){return(0,r.Pk)(await(await(0,l.iT)()).getNftStat()).data}},58051:(e,n,t)=>{t.d(n,{CM:()=>s,CP:()=>l});var a=t(72296),i=t(60816),r=t(40112);function s(){const e=(0,i.jL)();return[(0,i.GV)((e=>e.nft.userSelectedCanisters)),(0,a.useCallback)((n=>{e((0,r.IZ)(n))}),[e]),(0,a.useCallback)((n=>{e((0,r.y1)(n))}),[e])]}function l(){const e=(0,i.jL)(),n=(0,i.GV)((e=>e.nft.importedNFTs)),t=(0,a.useCallback)((n=>{e((0,r.i_)(n))}),[e]),s=(0,a.useCallback)((n=>{e((0,r.gw)({canisterId:n}))}),[e]);return(0,a.useMemo)((()=>({nfts:n,importNFT:t,deleteNFT:s})),[n,t,s])}},18568:(e,n,t)=>{t.r(n),t.d(n,{default:()=>he});var a=t(72296),i=t(27895),r=t(7745),s=t(27312),l=t(66684),c=t(40853),o=t(50620),d=t(52634),u=t(54711),x=t(37012);const h=[{name:u.Ru._({id:"zJlXbX"}),pageName:"nft"}];function f(){return(0,x.jsx)(r.A,{sx:{display:"flex",gap:"0 24px",alignItems:"center"},children:h.map((e=>(0,x.jsx)(d.A,{variant:"h3",color:"textPrimary",onClick:()=>e,sx:{cursor:"pointer"},children:e.name},e.pageName)))})}var p,w;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},v.apply(null,arguments)}function j(e,n){let{title:t,titleId:i,...r}=e;return a.createElement("svg",v({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":i},r),t?a.createElement("title",{id:i},t):null,p||(p=a.createElement("rect",{x:9,y:15,width:14,height:2,rx:1,fill:"white"})),w||(w=a.createElement("rect",{x:17,y:9,width:14,height:2,rx:1,transform:"rotate(90 17 9)",fill:"white"})))}const m=a.forwardRef(j);t.p;var g,A,k,y=t(3481),C=t(87148),b=t(38121),P=t(29650),I=t(51409),T=t(60479),z=t(36999),M=t(7836),R=t(69411),S=t(79264),B=t(39308),q=t(39053),W=t(17471),Z=t(46943),L=t(58051),E=t(97260),N=t(2281),_=t(86100),V=t(9064);function X(e){var n;let{data:t}=e;const{result:a}=(0,E.g4)(t.cid),[i,r,s]=(0,L.CM)();return(0,x.jsxs)(C.A,{children:[(0,x.jsx)(b.A,{children:(0,x.jsxs)(c.Ay,{container:!0,alignItems:"center",children:[(0,x.jsx)(o.A,{src:null!==a&&void 0!==a?a:"",children:"\xa0"}),(0,x.jsx)(c.Ay,{ml:1,item:!0,xs:!0,sx:{width:"120px",overflow:"hidden"},children:(0,x.jsx)(d.A,{fontSize:12,color:"textSecondary",sx:{width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t.name})})]})}),(0,x.jsx)(b.A,{children:(0,x.jsx)(d.A,{children:null===(n=t.cid)||void 0===n?void 0:n.toString()})}),(0,x.jsx)(b.A,{children:(0,_.hA)(t.owner)?null:(l=t,i.find((e=>e===(null===l||void 0===l?void 0:l.cid)))||N.Tf.includes(null===l||void 0===l?void 0:l.cid)?(0,x.jsx)(P.A,{variant:"outlined",color:"primary",size:"small",startIcon:(0,x.jsx)(q.A,{}),onClick:()=>{return e=t.cid,void s(e);var e},children:(0,x.jsx)(y.x6,{id:"cnGeoo"})}):(0,x.jsx)(P.A,{variant:"outlined",color:"primary",size:"small",startIcon:(0,x.jsx)(B.A,{}),onClick:()=>{return e=t.cid,void r([e]);var e},children:(0,x.jsx)(y.x6,{id:"m16xKo"})}))})]});var l}function F(e){let{open:n,onClose:t}=e;const i=(0,l.A)(),r=(0,I.A)(i.breakpoints.down("sm")),[s,o]=(0,a.useState)(""),{result:d}=(0,E.H3)(0,1e3),{content:h}=null!==d&&void 0!==d?d:{content:[]},f=(0,a.useMemo)((()=>h.filter((e=>{var n,t;return!s||((null===(n=e.name)||void 0===n||null===(t=n.toLowerCase())||void 0===t?void 0:t.includes(null===s||void 0===s?void 0:s.toLowerCase()))||e.cid===s)}))),[s,h]);return(0,x.jsx)(W.A,{open:n,onClose:t,title:u.Ru._({id:"XA8JXM"}),dialogProps:{sx:{"& .MuiPaper-root":{width:"700px",maxWith:"700px"}}},children:(0,x.jsxs)(c.Ay,{container:!0,spacing:3,children:[(0,x.jsx)(c.Ay,{item:!0,xs:12,children:(0,x.jsx)(V.GV,{contained:!0,borderRadius:"12px",background:i.palette.background.level1,InputProps:{startAdornment:(0,x.jsx)(T.A,{position:"start",children:(0,x.jsx)(Z.C0l,{stroke:1.5,size:"1rem"})})},fullWidth:!0,size:r?"small":void 0,placeholder:"Search canister",onChange:o})}),(0,x.jsxs)(c.Ay,{item:!0,xs:12,children:[(0,x.jsx)(z.A,{style:{maxHeight:"400px"},children:(0,x.jsxs)(M.A,{children:[(0,x.jsx)(R.A,{children:(0,x.jsxs)(C.A,{children:[(0,x.jsx)(b.A,{children:(0,x.jsx)(y.x6,{id:"6YtxFj"})}),(0,x.jsx)(b.A,{children:(0,x.jsx)(y.x6,{id:"Du6bPw"})}),(0,x.jsx)(b.A,{children:"\xa0"})]})}),(0,x.jsx)(S.A,{children:f.map(((e,n)=>(0,x.jsx)(X,{data:e},"".concat(e.cid,"-").concat(n))))})]})}),0===f.length?(0,x.jsx)(V.YQ,{}):null]})]})})}function O(){const[e,n]=(0,a.useState)(!1);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m,{style:{cursor:"pointer"},onClick:()=>n(!0)}),e&&(0,x.jsx)(F,{open:e,onClose:()=>n(!1)})]})}function H(){return H=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},H.apply(null,arguments)}function D(e,n){let{title:t,titleId:i,...r}=e;return a.createElement("svg",H({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":i},r),t?a.createElement("title",{id:i},t):null,g||(g=a.createElement("path",{d:"M8 12V12C8 9.79086 9.79086 8 12 8H20C22.2091 8 24 9.79086 24 12V20C24 22.2091 22.2091 24 20 24H12C9.79086 24 8 22.2091 8 20V20",stroke:"white",strokeWidth:2,strokeLinecap:"round"})),A||(A=a.createElement("rect",{x:7,y:15,width:12,height:2,rx:1,fill:"white"})),k||(k=a.createElement("path",{d:"M16.5 13L19.5 16L16.5 19",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const G=a.forwardRef(D);t.p;var J;!function(e){e.EXT="EXT"}(J||(J={}));var U=t(78454),Q=t(86307);const K=[{label:"EXT",value:J.EXT}];function Y(e){let{open:n,onClose:t}=e;const[i,s]=(0,a.useState)(0),[l,c]=(0,a.useState)(null),[o,d]=(0,a.useState)({standard:J.EXT}),[h,f]=(0,a.useState)(!1),{result:p}=(0,U.z)(),{nfts:w,importNFT:v}=(0,L.CP)(),j=(e,n)=>{s(0),c(null),f(!1),d({...o,[n]:e})};(0,a.useEffect)((()=>{if(o.id&&p){const e=p.find((e=>e.id===o.id));c(e)}}),[p,o.id]);let m="";var g;return o.id&&(0,Q.R)(o.id)&&((g=o.id)&&g&&w&&w.length>0&&w.find((e=>e.canisterId===g)))&&(m=u.Ru._({id:"QeOBT9"})),o.id&&!(0,Q.R)(o.id)&&(m=u.Ru._({id:"hO8ynl"})),o.id&&null!==p&&void 0!==p&&p.length&&!p.find((e=>e.id===o.id))&&(m=u.Ru._({id:"vkGJBC"})),o.id||(m=u.Ru._({id:"seDoL5"})),o.standard||(m=u.Ru._({id:"9jDXVD"})),(0,x.jsxs)(W.A,{open:n,onClose:t,title:u.Ru._({id:"osXsDn"}),dialogProps:{sx:{"& .MuiPaper-root":{width:"700px",maxWith:"700px"}}},children:[(0,x.jsx)(r.A,{children:(0,x.jsx)(V.GV,{label:u.Ru._({id:"5ZShby"}),select:!0,menus:K,placeholder:u.Ru._({id:"nUemLL"}),onChange:e=>j(e,"standard"),value:o.standard})}),(0,x.jsx)(r.A,{mt:"30px",children:(0,x.jsx)(V.GV,{label:u.Ru._({id:"ncZU7A"}),placeholder:u.Ru._({id:"seDoL5"}),onChange:e=>j(e,"id"),value:o.id})}),(0,x.jsx)(r.A,{mt:"30px",children:(0,x.jsx)(P.A,{variant:"contained",size:"large",fullWidth:!0,disabled:!!m||!h&&1===i,onClick:async()=>{l&&(v({canisterId:o.id,standard:o.standard}),t())},children:m||(1===i?(0,x.jsx)(y.x6,{id:"7VpPHA"}):(0,x.jsx)(y.x6,{id:"l3s5ri"}))})})]})}function $(){const[e,n]=(0,a.useState)(!1);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(G,{style:{cursor:"pointer"},onClick:()=>n(!0)}),e&&(0,x.jsx)(Y,{open:e,onClose:()=>n(!1)})]})}function ee(){return(0,x.jsxs)(r.A,{sx:{width:"100%",display:"flex",justifyContent:"space-between"},children:[(0,x.jsx)(f,{}),(0,x.jsxs)(r.A,{sx:{display:"flex-start",gap:"0 10px"},children:[(0,x.jsx)($,{}),(0,x.jsx)(O,{})]})]})}var ne=t(12852),te=t(84285),ae=t(62916);const ie=(0,a.createContext)({});var re=t(87983);const se=["jwh2l-aqaaa-aaaan-qatdq-cai","brx5n-xqaaa-aaaan-qanqa-cai","4lnl6-hqaaa-aaaag-qblla-cai","cdvmq-aaaaa-aaaah-qcdoq-cai","ckwhm-wiaaa-aaaah-qcdpa-cai","cnxby-3qaaa-aaaah-qcdpq-cai","crt3j-mqaaa-aaaah-qcdnq-cai","dv6u3-vqaaa-aaaah-qcdlq-cai"];function le(e){let{number:n,name:t,src:a,onClick:i}=e;const s=(0,l.A)();return(0,x.jsx)(r.A,{sx:{background:s.palette.background.level4,borderRadius:"12px",padding:"20px","@media(max-width: 640px)":{padding:"15px"}},onClick:i,children:(0,x.jsx)(c.Ay,{container:!0,alignItems:"center",sx:{cursor:"pointer"},children:(0,x.jsxs)(r.A,{sx:{display:"flex",alignItems:"center",gap:"0 16px",overflow:"hidden"},children:[(0,x.jsx)(o.A,{style:{width:"60px",height:"60px"},src:null!==a&&void 0!==a?a:"",children:"\xa0"}),(0,x.jsxs)(r.A,{sx:{overflow:"hidden"},children:[(0,x.jsx)(d.A,{color:"textPrimary",fontSize:"16px",fontWeight:600,sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t}),(0,x.jsx)(d.A,{sx:{margin:"10px 0 0 0",display:"inline-flex",padding:"0px 12px",alignItems:"center",gap:"10px",borderRadius:"40px",background:"#4F5A84",color:"#ffffff",fontWeight:500},children:void 0===n?"--":n})]})]})})})}function ce(e){let{canister:n}=e;const t=(0,ne.F7)(),i=(0,s.W6)(),{refreshCounter:r}=(0,a.useContext)(ie),{result:l}=(0,E.Ny)(n.cid,t,r),{result:c}=(0,E.g4)(n.cid);return(0,x.jsx)(le,{onClick:()=>{i.push("/wallet/nft/canister/details/".concat(n.cid))},src:c,name:n.name,number:null===l||void 0===l?void 0:l.toString()})}function oe(e){let{collection:n,userAllExtNfts:t}=e;const i=(0,s.W6)(),r=(0,a.useMemo)((()=>{if(t&&n)return t.filter((e=>e.canister===n.id)).length}),[t,n]);return(0,x.jsx)(le,{name:n.name,src:n.avatar,onClick:()=>{i.push("/wallet/nft/canister/details/".concat(n.id))},number:r})}function de(){const{result:e,loading:n}=(0,E.H3)(0,1e3),t=null===e||void 0===e?void 0:e.content,[i]=(0,L.CM)(),s=(0,ne.F7)(),l=(0,a.useMemo)((()=>null===t||void 0===t?void 0:t.filter((e=>(i.includes(e.cid)||(0,_.hA)(e.owner))&&!se.includes(e.cid)))),[i,t]),{nfts:o}=(0,L.CP)(),{result:d}=(0,U.z)(),u=(0,a.useMemo)((()=>d?o.map((e=>d.find((n=>n.id===e.canisterId)))).filter((e=>!!e)):[]),[o,d]),{result:h}=(0,re.Z)(s);return(0,x.jsxs)(r.A,{children:[(0,x.jsx)(ee,{}),(0,x.jsx)(r.A,{sx:{overflow:"hidden",width:"100%",margin:"30px 0"},children:(0,x.jsxs)(r.A,{sx:{width:"100%",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"20px","@media(max-width: 1088px)":{gridTemplateColumns:"1fr 1fr"},"@media(max-width: 640px)":{gridTemplateColumns:"100%",gap:"20px 0"}},children:[!n&&(null===u||void 0===u?void 0:u.map((e=>(0,x.jsx)(c.Ay,{item:!0,xs:12,children:(0,x.jsx)(oe,{collection:e,userAllExtNfts:h})},e.id)))),null===l||void 0===l?void 0:l.map((e=>(0,x.jsx)(c.Ay,{item:!0,xs:12,children:(0,x.jsx)(ce,{canister:e})},e.cid)))]})}),n?(0,x.jsx)(ae.A,{loading:!0}):null,l&&0===l.length&&u&&0===u.length&&!n?(0,x.jsx)(te.A,{}):null]})}var ue=t(16443);function xe(){const[,e]=(0,ue.R5)();return(0,x.jsx)(c.Ay,{container:!0,justifyContent:"center",children:(0,x.jsx)(r.A,{sx:{maxWidth:"1400px",width:"100%"},children:(0,x.jsx)(V.Am,{level:3,children:(0,x.jsxs)(c.Ay,{container:!0,alignItems:"center",flexDirection:"column",sx:{height:"250px"},children:[(0,x.jsx)(te.A,{}),(0,x.jsx)(d.A,{color:"text.primary",children:(0,x.jsx)(y.x6,{id:"FAJ5Zb"})}),(0,x.jsx)(P.A,{variant:"contained",onClick:()=>e(!0),sx:{width:"100%",maxWidth:"562px",marginTop:"23px"},size:"large",children:(0,x.jsx)(y.x6,{id:"CtByM7"})})]})})})})}function he(){const[e,n]=(0,a.useState)(0),[t,s]=(0,a.useState)(!1),[l,c]=(0,a.useState)({}),[o,d]=(0,a.useState)({}),[u,h]=(0,a.useState)(""),[f,p]=(0,a.useState)(new i.A(0)),[w,v]=(0,a.useState)("token"),j=(0,ue.RZ)(),m=(0,a.useMemo)((()=>Object.values(l).reduce(((e,n)=>e.plus(n)),new i.A(0))),[l]),g=(0,a.useMemo)((()=>Object.values(o).reduce(((e,n)=>e.plus(n)),new i.A(0))),[o]);return j?(0,x.jsx)(ie.Provider,{value:{refreshTotalBalance:t,setRefreshTotalBalance:s,refreshCounter:e,setRefreshCounter:n,totalValue:m,setTotalValue:(e,n)=>{c((t=>({...t,[e]:n})))},totalUSDBeforeChange:g,setTotalUSDBeforeChange:(e,n)=>{d((t=>({...t,[e]:n})))},transferTo:u,setTransferTo:h,transferAmount:f,setTransferAmount:p,page:w,setPage:v},children:(0,x.jsx)(r.A,{sx:{display:"flex",justifyContent:"center"},children:(0,x.jsx)(r.A,{sx:{width:"100%",maxWidth:"1400px"},children:(0,x.jsx)(r.A,{sx:{margin:"50px 0 0 0"},children:(0,x.jsx)(r.A,{sx:{display:"token"===w?"block":"none"},children:(0,x.jsx)(de,{})})})})})}):(0,x.jsx)(xe,{})}},39308:(e,n,t)=>{var a=t(52867);n.A=void 0;var i=a(t(50470)),r=t(37012),s=(0,i.default)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.A=s},39053:(e,n,t)=>{var a=t(52867);n.A=void 0;var i=a(t(50470)),r=t(37012),s=(0,i.default)((0,r.jsx)("path",{fillRule:"evenodd",d:"M4 11h16v2H4z"}),"HorizontalRule");n.A=s},78454:(e,n,t)=>{t.d(n,{z:()=>s});var a=t(72296),i=t(59155),r=function(e,n,t,a){return new(t||(t=Promise))((function(i,r){function s(e){try{c(a.next(e))}catch(n){r(n)}}function l(e){try{c(a.throw(e))}catch(n){r(n)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,l)}c((a=a.apply(e,n||[])).next())}))};function s(){return(0,i.Pz)((0,a.useCallback)((()=>r(this,void 0,void 0,(function*(){const e=yield fetch("https://us-central1-entrepot-api.cloudfunctions.net/api/collections").catch((()=>{}));if(e)return yield e.json()}))),[]))}},87983:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(72296),i=t(59155),r=function(e,n,t,a){return new(t||(t=Promise))((function(i,r){function s(e){try{c(a.next(e))}catch(n){r(n)}}function l(e){try{c(a.throw(e))}catch(n){r(n)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,l)}c((a=a.apply(e,n||[])).next())}))};function s(e,n){const t=(0,a.useCallback)((()=>r(this,void 0,void 0,(function*(){if(!e)return;const n=yield fetch("https://us-central1-entrepot-api.cloudfunctions.net/api/user/".concat(e,"/all")).catch((()=>{}));return n?yield n.json():void 0}))),[e]);return(0,i.Pz)(t,n)}}}]);
//# sourceMappingURL=8568.727af49a.chunk.js.map