"use strict";(self.webpackChunkwaste2earn_home=self.webpackChunkwaste2earn_home||[]).push([[8321],{81279:(e,t,n)=>{n.d(t,{r:()=>r});var i=n(72296);function r(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;const[r,a]=(0,i.useState)(void 0),[s,c]=(0,i.useState)(0);return(0,i.useEffect)((()=>{!async function(){if(e){const t=await e();a(t)}}()}),[s,e,t]),(0,i.useEffect)((()=>{const t=setInterval((()=>{e&&c((e=>e+1))}),n);return()=>{clearInterval(t)}}),[n,e]),(0,i.useMemo)((()=>r),[r])}},48321:(e,t,n)=>{n.r(t),n.d(t,{Buttons:()=>_e,default:()=>be});var i=n(54711),r=n(72296),a=n(27312),s=n(77500),c=n(11871),l=n(52593),o=n(52019),d=n(94222),x=n(63535);var u=n(3481),h=n(1054),p=n(74931),m=n(16443),f=n(55484);const j=JSON.parse('[{"inputs":[{"internalType":"address","name":"_cketh_minter_main_address","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"principal","type":"bytes32"}],"name":"ReceivedEth","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"SentEth","type":"event"},{"inputs":[{"internalType":"bytes32","name":"_principal","type":"bytes32"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getMinterAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]');var g=n(21929),A=n(12133),_=n(58317),b=n(32510),v=n(27895);function w(e){try{return(0,A.getAddress)(e)}catch{return!1}}function k(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return"0x0".concat(new v.A(e).multipliedBy(10**t).toString(16))}function y(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const{provider:i,account:a}=(0,o.useWeb3React)();return(0,r.useMemo)((()=>{if(!e||!t||!i)return null;let r;if(r="string"===typeof e?e:e[g.cy],!r)return null;try{return function(e,t,n,i){if(!w(e)||e===_.L)throw Error("Invalid 'address' parameter '".concat(e,"'."));return new b.NZ(e,t,function(e,t){return t&&e?function(e,t){return e.getSigner(t).connectUnchecked()}(e,t):e}(n,i))}(r,t,i,n&&a?a:void 0)}catch(s){return console.error("Failed to get contract",s),null}}),[e,t,i,n,a])}var N=n(85066),T=n(53695),R=n.n(T);var S=n(10739),C=n(60816),E=n(58633);function I(){const e=(0,C.jL)();return(0,r.useCallback)(((t,n,i,r)=>{let a="";i&&Object.keys(i).forEach((e=>{if("TxSent"===e)a=i[e].transaction_hash;else if("TxFinalized"===e){const e=i.TxFinalized;Object.keys(e).forEach((t=>{a="Success"===t?e[t].transaction_hash:"Reimbursed"===t?e.Reimbursed.transaction_hash:e.PendingReimbursement.transaction_hash}))}})),e((0,E.w)({principal:t,tx:{block_index:n.toString(),hash:a,state:i?Object.keys(i)[0]:"",value:null!==r&&void 0!==r?r:""}}))}),[e])}function L(e){const t=(0,C.GV)((e=>e.web3.withdrawTx));return(0,r.useMemo)((()=>{if(e&&t)return t[e]}),[e,t])}var M=n(61361),W=n(4102),V=n(83643),F=n(11377),B=n(19957),O=n(37012);function H(e){let{chainId:t}=e;const{account:n,chainId:i}=(0,o.useWeb3React)(),a=(0,r.useCallback)((async e=>{try{await e.activate(null!==t&&void 0!==t?t:F.YT)}catch(n){console.error("web3-react connection error: ".concat(n))}}),[]);return(0,O.jsx)(W.A,{sx:{maxWidth:"100%"},variant:"contained",fullWidth:!0,size:"large",onClick:()=>{B.Fr?n||window.open("https://metamask.app.link/dapp/airdrop.blus.cc"):(!n||n&&i!==(null!==t&&void 0!==t?t:F.YT))&&a(V.b$.connector)},children:"Connect to Metamask"})}function D(e){let{fill:t="#ffffff"}=e;return(0,O.jsx)("svg",{width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,O.jsx)("path",{d:"M6.0013 3.33268V0.666016L2.66797 3.99935L6.0013 7.33268V4.66602C8.20797 4.66602 10.0013 6.45935 10.0013 8.66602C10.0013 10.8727 8.20797 12.666 6.0013 12.666C3.79464 12.666 2.0013 10.8727 2.0013 8.66602H0.667969C0.667969 11.6127 3.05464 13.9993 6.0013 13.9993C8.94797 13.9993 11.3346 11.6127 11.3346 8.66602C11.3346 5.71935 8.94797 3.33268 6.0013 3.33268Z",fill:t})})}var P=n(12780),Y=n(94926),z=n(87539);function q(){return(0,O.jsxs)(s.A,{sx:{margin:"30px 0 0 0",display:"flex",flexDirection:"column",alignItems:"center",gap:"20px 0"},children:[(0,O.jsx)(z.N,{href:g.lM,label:(0,O.jsx)(u.x6,{id:"T0/nHs"})}),(0,O.jsx)(z.N,{href:g.u1,label:(0,O.jsx)(u.x6,{id:"MNlxcW"})}),(0,O.jsx)(z.N,{href:g.eh,label:(0,O.jsx)(u.x6,{id:"y7Uwrp"})})]})}var Q=n(94992),U=n(93469),Z=n(76571),G=n(57448),K=n(48431),X=n(98868),J=n(94570),$=n.n(J),ee=n(81279);function te(e){let{transaction:t}=e;const n=function(e){const{provider:t}=(0,o.useWeb3React)(),[n,i]=(0,r.useState)(null),a=(0,r.useCallback)((async()=>{if(e&&t)return await t.getTransaction(e)}),[t,e]),s=(0,ee.r)(a);return(0,r.useEffect)((()=>{s&&i(s)}),[s]),(0,r.useMemo)((()=>n),[n])}(t.hash);return(0,O.jsxs)(Q.A,{children:[(0,O.jsx)(U.A,{children:(0,O.jsx)(h.A,{children:$()(Number(t.timestamp)).format("YYYY-MM-DD HH:mm:ss")})}),(0,O.jsx)(U.A,{children:null!==n&&void 0!==n&&n.blockNumber?(0,O.jsx)(c.eq,{link:"".concat(g.n5,"/").concat(n.blockNumber),children:n.blockNumber}):"--"}),(0,O.jsx)(U.A,{children:(0,O.jsx)(h.A,{sx:{maxWidth:"200px",wordBreak:"break-all",whiteSpace:"break-spaces","@media(max-width:640px)":{width:"300px"}},children:(0,O.jsx)(c.eq,{link:"".concat(g.ob,"/").concat(t.hash),children:t.hash})})}),(0,O.jsx)(U.A,{children:(0,O.jsx)(h.A,{sx:{maxWidth:"200px",wordBreak:"break-all",whiteSpace:"break-spaces","@media(max-width:640px)":{width:"300px"}},children:(0,O.jsx)(c.eq,{link:"".concat(g.ME,"/").concat(t.from),children:t.from})})}),(0,O.jsx)(U.A,{children:(0,O.jsx)(h.A,{sx:{maxWidth:"200px",wordBreak:"break-all",whiteSpace:"break-spaces","@media(max-width:640px)":{width:"300px"}},children:t.to?(0,O.jsx)(c.eq,{link:"".concat(g.ME,"/").concat(t.to),children:t.to}):"--"})}),(0,O.jsx)(U.A,{children:(0,O.jsx)(h.A,{children:(0,S.d)((0,N.t)(t.value,18).toString())})}),(0,O.jsx)(U.A,{children:(0,O.jsx)(h.A,{children:n?n.confirmations:"--"})})]})}function ne(e){let{blockNumber:t}=e;const n=function(e){const t=(0,C.GV)((e=>e.web3.tx));return(0,r.useMemo)((()=>{if(e&&t)return t[e]}),[e,t])}((0,m.WT)());return(0,O.jsxs)(c.Am,{children:[(0,O.jsx)(s.A,{sx:{display:"flex",justifyItems:"center"},children:(0,O.jsx)(h.A,{color:"#ffffff",sx:{margin:"0 5px 0 0"},children:(0,O.jsx)(u.x6,{id:"LZbI2V"})})}),(0,O.jsxs)(h.A,{color:"#ffffff",sx:{margin:"5px 0 0 0"},children:[(0,O.jsx)(u.x6,{id:"AasXCB"}),"\xa0",t]}),(0,O.jsx)(s.A,{sx:{margin:"0 0 3px 0"},children:(0,O.jsxs)(Z.A,{children:[(0,O.jsxs)(G.A,{children:[(0,O.jsx)(K.A,{children:(0,O.jsxs)(Q.A,{children:[(0,O.jsx)(U.A,{children:(0,O.jsx)(u.x6,{id:"LhMjLm"})}),(0,O.jsx)(U.A,{children:(0,O.jsx)(u.x6,{id:"PFFhCT"})}),(0,O.jsx)(U.A,{children:(0,O.jsx)(u.x6,{id:"QbVNZJ"})}),(0,O.jsx)(U.A,{children:(0,O.jsx)(u.x6,{id:"ejVYRQ"})}),(0,O.jsx)(U.A,{children:(0,O.jsx)(u.x6,{id:"/jQctM"})}),(0,O.jsx)(U.A,{children:(0,O.jsx)(u.x6,{id:"hehnjM"})}),(0,O.jsx)(U.A,{children:(0,O.jsx)(u.x6,{id:"QW/8vm"})})]})}),(0,O.jsx)(X.A,{children:null===n||void 0===n?void 0:n.map((e=>(0,O.jsx)(te,{transaction:e},e.hash)))})]}),n&&0!==(null===n||void 0===n?void 0:n.length)?null:(0,O.jsx)(c.YQ,{})]})})]})}var ie=n(81863);const re=n.p+"static/media/ETH.5289b9cfe987d1ee4965e2d86183be4a.svg",ae=(0,ie.A)((()=>({logo_box:{position:"relative",width:"80px",height:"80px",borderRadius:"50%","&.ck":{background:"linear-gradient(0deg, rgba(105, 108, 225, 0.39), rgba(105, 108, 225, 0.39)), linear-gradient(0deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14))"},"&.ic":{background:"linear-gradient(135.36deg, #3A425F 15.81%, rgba(41, 49, 79, 0) 77.64%)"}},logo:{width:"74px",height:"74px",position:"absolute",top:"3px",left:"3px"}})));function se(){return(0,O.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,O.jsx)("path",{d:"M6 6L12 12L6 18",stroke:"#059212",strokeOpacity:"0.6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,O.jsx)("path",{d:"M12 6L18 12L12 18",stroke:"#059212",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function ce(e){let{type:t}=e;const n=ae();return(0,O.jsxs)(s.A,{sx:{display:"flex",alignItems:"center",gap:"0 59px"},children:[(0,O.jsx)(s.A,{className:"".concat(n.logo_box," ").concat("mint"===t?"ic":"ck"),children:(0,O.jsx)(s.A,{className:n.logo,children:(0,O.jsx)("img",{src:"mint"===t?re:Y.AS.logo,alt:"",width:"100%",height:"100%"})})}),(0,O.jsx)(se,{}),(0,O.jsx)(s.A,{className:"".concat(n.logo_box," ").concat("mint"===t?"ck":"ic"),children:(0,O.jsx)(s.A,{className:n.logo,children:(0,O.jsx)("img",{src:"mint"===t?Y.AS.logo:re,alt:"",width:"100%",height:"100%"})})})]})}function le(e){let{content:t}=e;return(0,O.jsx)(s.A,{sx:{padding:"14px 16px",borderRadius:"8px",background:"#4F5A84"},children:(0,O.jsx)(h.A,{color:"text.primary",sx:{wordBreak:"break-all"},children:t||(0,O.jsx)(h.A,{height:"10px",width:"2px"})})})}function oe(e){let{buttons:t,handleChange:n,active:a}=e;const l=(0,m.WT)(),{account:d,provider:A,chainId:_}=(0,o.useWeb3React)(),[b,v]=(0,r.useState)(!1),[w,T]=(0,r.useState)(!1),[I,L]=(0,r.useState)(void 0),W=function(){const{data:e}=(0,x.A)(["ethBlockNumber"]);return e}(),[V]=(0,f.cO)(),{result:B,loading:z}=function(e){const{account:t}=(0,o.useWeb3React)(),[n,i]=(0,r.useState)(void 0),[a,s]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{!async function(){if(t){s(!0);const e=new(R())(R().givenProvider),n=await e.eth.getBalance(t);i((0,N.t)(n,18)),s(!1)}}()}),[t,e]),(0,r.useMemo)((()=>({result:n,loading:a})),[n,a])}(b),{result:Q,loading:U}=(0,P.nC)(Y.AS.address,l,b),Z=(0,r.useMemo)((()=>{if(l)return function(e){function t(e,t){return(e+=(t>>4&15).toString(16))+(15&t).toString(16)}const n=function(e){let t=0,n=0;const i=[];for(let r=0;r<e.length;r++){const a=e.charAt(r),s="abcdefghijklmnopqrstuvwxyz234567".indexOf(a);if(-1===s)throw Error("Invalid principal: unexpected lowercase base32 character: ".concat(a));n=(n<<5)+s,t+=5,t>=8&&(i.push(n>>t-8),n&=(1<<t-8)-1,t-=8)}if(n>0)throw Error("Invalid principal: non-zero padding");return i}(e.replace(/-/g,""));if(n.length<4)throw Error("Invalid principal: too short");if(n.length>33)throw Error("Invalid principal: too long");return function(e){let n="0x";n=t(n,e.length);for(let i=0;i<e.length;i++)n=t(n,e[i]);for(let t=0;t<31-e.length;t++)n+="00";return n}(n.slice(4))}(l)}),[l]),G=y(g.tr,j,K);var K;const X=function(){const e=(0,C.jL)();return(0,r.useCallback)(((t,n)=>{e((0,E.q)({principal:t,tx:n}))}),[e])}();let J="";return _&&g.cy!==_&&(J="Please switch to ".concat(F.WY[g.cy])),I&&B&&B.isLessThan(I)&&(J=i.Ru._({id:"N2DUxS"})),I||(J=i.Ru._({id:"tbR3sW"})),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(c.Am,{children:[(0,O.jsx)(c.Kp,{tabs:t,onChange:n,active:a}),(0,O.jsx)(s.A,{sx:{margin:"20px 0 0 0"},children:(0,O.jsxs)(s.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,O.jsx)(ce,{type:"mint"}),(0,O.jsxs)(s.A,{sx:{margin:"20px 0 0 0",display:"flex",gap:"0 10px"},children:[(0,O.jsx)(h.A,{color:"#ffffff",children:(0,O.jsx)(u.x6,{id:"0QDjxt"})}),(0,O.jsxs)(h.A,{children:[(0,O.jsxs)(h.A,{color:"#ffffff",children:[B&&!z?(0,S.d)(B.toString()):"--"," ETH"]}),(0,O.jsxs)(h.A,{color:"#ffffff",children:[Q&&!U?(0,S.d)((0,N.t)(Q,Y.AS.decimals).toString()):"--"," ","ckETH"]})]}),(0,O.jsx)(s.A,{sx:{cursor:"pointer"},onClick:async()=>{v(!b)},children:(0,O.jsx)(D,{fill:"rgb(86, 105, 220)"})})]}),(0,O.jsxs)(s.A,{sx:{margin:"40px 0 0 0",width:"100%",maxWidth:"474px"},children:[(0,O.jsxs)(s.A,{children:[(0,O.jsx)(h.A,{children:"Your wallet of IC network"}),(0,O.jsx)(s.A,{sx:{margin:"16px 0 0 0"},children:(0,O.jsx)(le,{content:l})})]}),(0,O.jsxs)(s.A,{sx:{margin:"16px 0 0 0"},children:[(0,O.jsx)(h.A,{children:"Principal \u2192 Bytes32"}),(0,O.jsx)(s.A,{sx:{margin:"16px 0 0 0"},children:(0,O.jsx)(le,{content:Z})})]}),(0,O.jsxs)(s.A,{sx:{margin:"16px 0 0 0"},children:[(0,O.jsx)(h.A,{children:"Your wallet of Metamask"}),(0,O.jsx)(s.A,{sx:{margin:"16px 0 0 0"},children:d?(0,O.jsx)(le,{content:d}):(0,O.jsx)(H,{chainId:g.cy})})]}),(0,O.jsxs)(s.A,{sx:{margin:"16px 0 0 0"},children:[(0,O.jsx)(h.A,{children:"Transfer ETH (Ethereum Mainnet) amount:"}),(0,O.jsx)(s.A,{sx:{margin:"16px 0 0 0"},children:(0,O.jsx)(c.LT,{value:I,numericProps:{decimalScale:8,thousandSeparator:!0},onChange:e=>L(e),InputProps:{endAdornment:(0,O.jsx)(p.A,{position:"start",children:"ETH"})}})})]}),(0,O.jsx)(s.A,{sx:{margin:"48px 0 0 0"},children:(0,O.jsx)(M.A,{variant:"contained",fullWidth:!0,size:"large",onClick:async()=>{if(!G||!l||!A||!Z||!I||!W)return;T(!0);const e={to:G.address,data:G.interface.encodeFunctionData("deposit",[Z]),value:k(I)},t=await A.getSigner().sendTransaction(e).catch((e=>{console.error(e),V("Transaction for minting ckETH failed to submit",f.lA.error)}));var n;t&&(L(""),V("ckETH minting in progress: Transaction submitted and pending confirmation.",f.lA.success),X(l,{timestamp:String((new Date).getTime()),block:String(W),hash:t.hash,from:t.from,to:t.to,value:t.value.toString(),gas:null===(n=t.gasPrice)||void 0===n?void 0:n.toString()}));T(!1)},disabled:w||!d||!I||!!J,loading:w,children:J||i.Ru._({id:"Cq8MYF"})})})]}),(0,O.jsx)(q,{})]})})]}),(0,O.jsx)(s.A,{sx:{margin:"20px 0 0 0"},children:(0,O.jsx)(ne,{blockNumber:W})})]})}var de=n(92213),xe=n(20361),ue=n(2777);const he=e=>{let{IDL:t}=e;const n=t.Variant({Safe:t.Null,Finalized:t.Null,Latest:t.Null}),i=t.Record({next_transaction_nonce:t.Opt(t.Nat),ethereum_contract_address:t.Opt(t.Text),minimum_withdrawal_amount:t.Opt(t.Nat),ethereum_block_height:t.Opt(n)}),r=t.Variant({Mainnet:t.Null,Sepolia:t.Null}),a=t.Record({ethereum_network:r,last_scraped_block_number:t.Nat,ecdsa_key_name:t.Text,next_transaction_nonce:t.Nat,ledger_id:t.Principal,ethereum_contract_address:t.Opt(t.Text),minimum_withdrawal_amount:t.Nat,ethereum_block_height:n}),s=(t.Variant({UpgradeArg:i,InitArg:a}),t.Record({max_priority_fee_per_gas:t.Nat,max_fee_per_gas:t.Nat,max_transaction_fee:t.Nat,gas_limit:t.Nat})),c=t.Variant({stopped:t.Null,stopping:t.Null,running:t.Null}),l=t.Record({freezing_threshold:t.Nat,controllers:t.Vec(t.Principal),memory_allocation:t.Nat,compute_allocation:t.Nat}),o=t.Record({status:c,memory_size:t.Nat,cycles:t.Nat,settings:l,idle_cycles_burned_per_day:t.Nat,module_hash:t.Opt(t.Vec(t.Nat8))}),d=t.Record({destination:t.Text,value:t.Nat,max_priority_fee_per_gas:t.Nat,data:t.Vec(t.Nat8),max_fee_per_gas:t.Nat,chain_id:t.Nat,nonce:t.Nat,gas_limit:t.Nat,access_list:t.Vec(t.Record({storage_keys:t.Vec(t.Vec(t.Nat8)),address:t.Text}))}),x=t.Record({transaction_hash:t.Text,log_index:t.Nat}),u=t.Record({effective_gas_price:t.Nat,status:t.Variant({Success:t.Null,Failure:t.Null}),transaction_hash:t.Text,block_hash:t.Text,block_number:t.Nat,gas_used:t.Nat}),h=t.Record({timestamp:t.Nat64,payload:t.Variant({SkippedBlock:t.Record({block_number:t.Nat}),SignedTransaction:t.Record({raw_transaction:t.Text,withdrawal_id:t.Nat}),Upgrade:i,Init:a,SyncedToBlock:t.Record({block_number:t.Nat}),AcceptedDeposit:t.Record({principal:t.Principal,transaction_hash:t.Text,value:t.Nat,log_index:t.Nat,block_number:t.Nat,from_address:t.Text}),ReplacedTransaction:t.Record({withdrawal_id:t.Nat,transaction:d}),MintedCkEth:t.Record({event_source:x,mint_block_index:t.Nat}),ReimbursedEthWithdrawal:t.Record({transaction_hash:t.Opt(t.Text),withdrawal_id:t.Nat,reimbursed_amount:t.Nat,reimbursed_in_block:t.Nat}),CreatedTransaction:t.Record({withdrawal_id:t.Nat,transaction:d}),InvalidDeposit:t.Record({event_source:x,reason:t.Text}),AcceptedEthWithdrawalRequest:t.Record({ledger_burn_index:t.Nat,destination:t.Text,withdrawal_amount:t.Nat,from:t.Principal,created_at:t.Opt(t.Nat64),from_subaccount:t.Opt(t.Vec(t.Nat8))}),FinalizedTransaction:t.Record({withdrawal_id:t.Nat,transaction_receipt:u})})}),p=t.Record({transaction_hash:t.Text}),m=t.Variant({Success:p,Reimbursed:t.Record({transaction_hash:t.Text,reimbursed_amount:t.Nat,reimbursed_in_block:t.Nat}),PendingReimbursement:p}),f=t.Variant({NotFound:t.Null,TxFinalized:m,TxSent:p,TxCreated:t.Null,Pending:t.Null}),j=t.Record({recipient:t.Text,amount:t.Nat}),g=t.Record({block_index:t.Nat}),A=t.Variant({TemporarilyUnavailable:t.Text,InsufficientAllowance:t.Record({allowance:t.Nat}),AmountTooLow:t.Record({min_withdrawal_amount:t.Nat}),RecipientAddressBlocked:t.Record({address:t.Text}),InsufficientFunds:t.Record({balance:t.Nat})});return t.Service({eip_1559_transaction_price:t.Func([],[s],[]),get_canister_status:t.Func([],[o],[]),get_events:t.Func([t.Record({start:t.Nat64,length:t.Nat64})],[t.Record({total_event_count:t.Nat64,events:t.Vec(h)})],["query"]),is_address_blocked:t.Func([t.Text],[t.Bool],["query"]),minter_address:t.Func([],[t.Text],[]),retrieve_eth_status:t.Func([t.Nat64],[f],[]),smart_contract_address:t.Func([],[t.Text],["query"]),withdraw_eth:t.Func([j],[t.Variant({Ok:g,Err:A})],[])})},pe=e=>ue.eN.create({canisterId:g.wN,identity:e,idlFactory:he});var me=n(27442),fe=n(12288);function je(e){var t;let{tx:n}=e;return(0,O.jsxs)(Q.A,{children:[(0,O.jsx)(U.A,{children:(0,O.jsx)(h.A,{children:n.block_index})}),(0,O.jsx)(U.A,{children:(0,O.jsx)(h.A,{children:null!==(t=n.state)&&void 0!==t?t:"--"})}),(0,O.jsx)(U.A,{children:n.hash?(0,O.jsx)(h.A,{sx:{maxWidth:"400px",wordBreak:"break-all",whiteSpace:"break-spaces","@media(max-width:640px)":{width:"300px"}},children:(0,O.jsx)(c.eq,{link:"".concat(g.ob,"/").concat(n.hash),children:n.hash})}):(0,O.jsx)(h.A,{children:"--"})}),(0,O.jsx)(U.A,{children:n.value?(0,O.jsx)(h.A,{children:(0,N.t)(n.value,Y.AS.decimals).toFormat()}):(0,O.jsx)(h.A,{children:"--"})})]})}function ge(){const e=L((0,m.WT)());return(0,O.jsxs)(c.Am,{children:[(0,O.jsx)(s.A,{sx:{display:"flex",justifyItems:"center"},children:(0,O.jsx)(h.A,{color:"#ffffff",children:(0,O.jsx)(u.x6,{id:"l/4A2e"})})}),(0,O.jsx)(s.A,{sx:{margin:"0 0 3px 0"},children:(0,O.jsxs)(Z.A,{children:[(0,O.jsxs)(G.A,{children:[(0,O.jsx)(K.A,{children:(0,O.jsxs)(Q.A,{children:[(0,O.jsx)(U.A,{children:(0,O.jsx)(u.x6,{id:"5Lo2tO"})}),(0,O.jsx)(U.A,{children:(0,O.jsx)(u.x6,{id:"RS0o7b"})}),(0,O.jsx)(U.A,{children:(0,O.jsx)(u.x6,{id:"QbVNZJ"})}),(0,O.jsx)(U.A,{children:(0,O.jsx)(u.x6,{id:"hehnjM"})})]})}),(0,O.jsx)(X.A,{children:null===e||void 0===e?void 0:e.map((e=>(0,O.jsx)(je,{tx:e},e.block_index)))})]}),0!==(null===e||void 0===e?void 0:e.length)&&e?null:(0,O.jsx)(c.YQ,{})]})})]})}function Ae(e){let{buttons:t,handleChange:n,active:a}=e;const l=(0,m.WT)(),[d,x]=(0,r.useState)(!1),[j,A]=(0,r.useState)(!1),[_,b]=(0,r.useState)(void 0),[v,k]=(0,r.useState)(void 0),{account:y,chainId:T}=(0,o.useWeb3React)();(0,r.useEffect)((()=>{y&&k(y)}),[y]);const{result:R}=(0,P.nC)(Y.AS.address,l,d),{result:C}=(0,P.Vs)(Y.AS.address),E=I(),[M]=(0,f.cO)(),V=(0,P.zH)();!function(){const e=(0,m.WT)(),t=L(e),n=I();(0,r.useEffect)((()=>{async function i(){if(t&&t.length&&e)for(let i=0;i<t.length;i++){const r=t[i],a=BigInt(r.block_index),s=await(await pe()).retrieve_eth_status(a);n(e,a,s,void 0)}}const r=setInterval((()=>{i()}),1e4);return i(),()=>{clearInterval(r)}}),[t,e])}();let B="";return _||(B=i.Ru._({id:"tbR3sW"})),_&&(0,N.N)(_,Y.AS.decimals).isLessThan(g.rC)&&(B="Min amount is ".concat((0,S.d)((0,N.t)(g.rC,Y.AS.decimals).toString())," ckETH")),v&&!1===w(v)&&(B=i.Ru._({id:"N5kBDi"})),_&&C&&R&&!(0,N.N)(_,Y.AS.decimals).plus(C.transFee.toString()).isLessThan(R)&&(B=i.Ru._({id:"N2DUxS"})),T&&g.cy!==T&&(B="Please switch to ".concat(F.WY[g.cy])),v||(B=i.Ru._({id:"z4Y3Lr"})),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(c.Am,{children:[(0,O.jsx)(c.Kp,{tabs:t,onChange:n,active:a}),(0,O.jsxs)(s.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center",margin:"20px 0 0 0"},children:[(0,O.jsx)(ce,{type:"dissolve"}),(0,O.jsxs)(s.A,{sx:{margin:"20px 0 0 0",display:"flex",gap:"0 10px",alignItems:"center"},children:[(0,O.jsx)(s.A,{children:(0,O.jsxs)(h.A,{color:"#fff",children:[(0,O.jsx)(u.x6,{id:"0QDjxt"}),"\xa0",(0,S.d)((0,N.t)(R,null===C||void 0===C?void 0:C.decimals).toNumber())," ckETH"]})}),(0,O.jsx)(s.A,{sx:{cursor:"pointer"},onClick:()=>x(!d),children:(0,O.jsx)(D,{fill:"rgb(86, 105, 220)"})})]}),(0,O.jsxs)(s.A,{sx:{margin:"40px 0 0 0",width:"100%",maxWidth:"474px"},children:[(0,O.jsx)(h.A,{color:"#fff",children:(0,O.jsx)(u.x6,{id:"NKMyOG"})}),(0,O.jsxs)(h.A,{sx:{margin:"10px 0 0 0"},children:[(0,O.jsx)(h.A,{component:"span",color:"#D3625B",children:"*"}),(0,O.jsx)(u.x6,{id:"lY4Ycr"})]}),(0,O.jsx)(s.A,{sx:{margin:"15px 0 0 0"},children:(0,O.jsx)(c.GV,{value:v,onChange:e=>k(e),inputProps:{maxLength:255}})}),(0,O.jsxs)(h.A,{sx:{margin:"10px 0 0 0"},children:[(0,O.jsx)(h.A,{component:"span",color:"#D3625B",children:"*"}),(0,O.jsx)(u.x6,{id:"cAA41U"})]}),(0,O.jsxs)(s.A,{sx:{margin:"15px 0 0 0"},children:[(0,O.jsx)(c.LT,{value:_,onChange:e=>b(String(e)),numericProps:{allowNegative:!1,decimalScale:8,maxLength:26},InputProps:{endAdornment:(0,O.jsxs)(p.A,{position:"start",children:[(0,O.jsx)(h.A,{children:"ckETH"}),(0,O.jsx)(h.A,{color:"secondary",sx:{cursor:"pointer",margin:"0 0 0 5px"},onClick:()=>{C&&b((0,N.t)(R,null===C||void 0===C?void 0:C.decimals).minus((0,N.t)(C.transFee,C.decimals)).toFixed(C.decimals-1))},children:(0,O.jsx)(u.x6,{id:"CK1KXz"})})]})}}),(0,O.jsx)(s.A,{sx:{margin:"5px 0 0 0",display:"flex",justifyContent:"space-between"},children:(0,O.jsx)(h.A,{children:"Important: Please enter the address of a non-custodial wallet only. Avoid using deposit addresses from centralized exchanges (CEX) like Binance or Coinbase. Using a CEX address could result in the loss of your Ethereum (ETH) in the event of any discrepancies or exceptions."})}),(0,O.jsx)(s.A,{sx:{width:"100%",margin:"20px 0 0 0"},children:(0,O.jsxs)(W.A,{variant:"contained",fullWidth:!0,size:"large",onClick:async()=>{if(!_||!l||!C||!v)return;const e=BigInt((0,me.u)((0,N.N)(_,C.decimals)));A(!0);const{status:t,message:n}=await V({canisterId:Y.AS.address,spender:g.wN,value:e,account:l});if(t===fe.i.ERROR)return M(null!==n&&void 0!==n?n:i.Ru._({id:"y9SsVc"}),f.lA.error),void A(!1);const{status:r,message:a,data:s}=await async function(e,t){return(0,xe.Pk)(await(await pe(!0)).withdraw_eth({recipient:e,amount:t}))}(v,e);r===fe.i.ERROR?M(null!==a&&void 0!==a?a:i.Ru._({id:"z5X2LW"}),f.lA.error):(b(""),M("ckETH dissolution transaction submitted: Awaiting completion.",f.lA.success),null!==s&&void 0!==s&&s.block_index&&E(l,s.block_index,void 0,e.toString()),x(!d)),A(!1)},disabled:!!B||j,children:[j?(0,O.jsx)(de.A,{color:"inherit",size:22,sx:{margin:"0 5px 0 0"}}):null,B||(0,O.jsx)(u.x6,{id:"0u+DsT"})]})})]})]}),(0,O.jsx)(q,{})]})]}),(0,O.jsx)(s.A,{sx:{margin:"20px 0 0 0"},children:(0,O.jsx)(ge,{})})]})}const _e=[{key:"mint",value:i.Ru._({id:"5IrCQY"})},{key:"dissolve",value:i.Ru._({id:"TGmg93"})}];function be(){const e=(0,a.W6)(),[t,n]=(0,r.useState)(""),{type:x}=(0,l.e)();(0,r.useEffect)((()=>{x&&n(x)}),[x]);const u=t=>{n(t.key),e.push("/wallet/ckETH?type=".concat(t.key))};return function(){const{provider:e}=(0,o.useWeb3React)(),{data:t}=(0,d.Ay)(e?["ethBlockNumber"]:void 0,(async()=>{if(e)return await e.getBlockNumber()}),{refreshInterval:3e3})}(),(0,O.jsxs)(c.mO,{children:[(0,O.jsx)(c.BI,{prevLink:"/wallet",prevLabel:i.Ru._({id:"sb9Y58"}),currentLabel:"dissolve"===x?i.Ru._({id:"0u+DsT"}):i.Ru._({id:"Cq8MYF"})}),(0,O.jsx)(s.A,{sx:{height:"20px"}}),"dissolve"===x?(0,O.jsx)(Ae,{handleChange:u,buttons:_e,active:t}):(0,O.jsx)(oe,{handleChange:u,buttons:_e,active:t})]})}},87539:(e,t,n)=>{n.d(t,{N:()=>c});var i=n(77500),r=n(1054),a=n(37012);function s(){return(0,a.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.43866 2.42969H1.16146V0.429688H8.85723H9.85723V1.42969V9.12545H7.85723V3.83954L1.94156 9.75521L0.527344 8.341L6.43866 2.42969Z",fill:"#5669DC"})})}n(72296);function c(e){let{href:t,label:n}=e;return(0,a.jsx)("a",{href:t,target:"_blank",style:{textDecoration:"none"},rel:"noreferrer",children:(0,a.jsxs)(i.A,{sx:{display:"flex",gap:"0 10px",alignItems:"center"},children:[(0,a.jsx)(r.A,{children:n}),(0,a.jsx)(s,{})]})})}}}]);
//# sourceMappingURL=8321.1b0c8ff8.chunk.js.map