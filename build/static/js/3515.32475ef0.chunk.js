"use strict";(self.webpackChunkwaste2earn_home=self.webpackChunkwaste2earn_home||[]).push([[3515],{22090:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(36158),i=n.n(r),s=n(37012);const a=e=>{let{value:t,...n}=e;return(0,s.jsx)(i(),{value:t,...n})}},81279:(e,t,n)=>{n.d(t,{r:()=>i});var r=n(72296);function i(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;const[i,s]=(0,r.useState)(void 0),[a,o]=(0,r.useState)(0);return(0,r.useEffect)((()=>{!async function(){if(e){const t=await e();s(t)}}()}),[a,e,t]),(0,r.useEffect)((()=>{const t=setInterval((()=>{e&&o((e=>e+1))}),n);return()=>{clearInterval(t)}}),[n,e]),(0,r.useMemo)((()=>i),[i])}},23515:(e,t,n)=>{n.r(t),n.d(t,{Buttons:()=>He,default:()=>qe});var r=n(54711),i=n(72296),s=n(27312),a=n(77500),o=n(11871),c=n(52593),l=n(59155),d=n(20361),x=n(93172),u=n(2777),h=n(88069);const p=e=>{let{IDL:t}=e;const n=t.Variant({RestrictedTo:t.Vec(t.Principal),DepositsRestrictedTo:t.Vec(t.Principal),ReadOnly:t.Null,GeneralAvailability:t.Null}),r=t.Record({kyt_principal:t.Opt(t.Principal),mode:t.Opt(n),retrieve_btc_min_amount:t.Opt(t.Nat64),max_time_in_queue_nanos:t.Opt(t.Nat64),min_confirmations:t.Opt(t.Nat32),kyt_fee:t.Opt(t.Nat64)}),i=t.Variant({Mainnet:t.Null,Regtest:t.Null,Testnet:t.Null}),s=t.Record({kyt_principal:t.Opt(t.Principal),ecdsa_key_name:t.Text,mode:n,retrieve_btc_min_amount:t.Nat64,ledger_id:t.Principal,max_time_in_queue_nanos:t.Nat64,btc_network:i,min_confirmations:t.Opt(t.Nat32),kyt_fee:t.Opt(t.Nat64)}),a=(t.Variant({Upgrade:t.Opt(r),Init:s}),t.Record({owner:t.Principal,subaccount:t.Opt(t.Vec(t.Nat8))})),o=t.Record({height:t.Nat32,value:t.Nat64,outpoint:t.Record({txid:t.Vec(t.Nat8),vout:t.Nat32})}),c=t.Variant({CallFailed:t.Null,TaintedDestination:t.Record({kyt_fee:t.Nat64,kyt_provider:t.Principal})}),l=t.Variant({p2wsh_v0:t.Vec(t.Nat8),p2tr_v1:t.Vec(t.Nat8),p2sh:t.Vec(t.Nat8),p2wpkh_v0:t.Vec(t.Nat8),p2pkh:t.Vec(t.Nat8)}),d=t.Variant({received_utxos:t.Record({to_account:a,mint_txid:t.Opt(t.Nat64),utxos:t.Vec(o)}),schedule_deposit_reimbursement:t.Record({burn_block_index:t.Nat64,account:a,amount:t.Nat64,reason:c}),sent_transaction:t.Record({fee:t.Opt(t.Nat64),change_output:t.Opt(t.Record({value:t.Nat64,vout:t.Nat32})),txid:t.Vec(t.Nat8),utxos:t.Vec(o),requests:t.Vec(t.Nat64),submitted_at:t.Nat64}),distributed_kyt_fee:t.Record({block_index:t.Nat64,amount:t.Nat64,kyt_provider:t.Principal}),init:s,upgrade:r,retrieve_btc_kyt_failed:t.Record({block_index:t.Nat64,owner:t.Principal,uuid:t.Text,address:t.Text,amount:t.Nat64,kyt_provider:t.Principal}),accepted_retrieve_btc_request:t.Record({received_at:t.Nat64,block_index:t.Nat64,address:l,amount:t.Nat64,kyt_provider:t.Opt(t.Principal)}),checked_utxo:t.Record({clean:t.Bool,utxo:o,uuid:t.Text,kyt_provider:t.Opt(t.Principal)}),removed_retrieve_btc_request:t.Record({block_index:t.Nat64}),confirmed_transaction:t.Record({txid:t.Vec(t.Nat8)}),replaced_transaction:t.Record({fee:t.Nat64,change_output:t.Record({value:t.Nat64,vout:t.Nat32}),old_txid:t.Vec(t.Nat8),new_txid:t.Vec(t.Nat8),submitted_at:t.Nat64}),ignored_utxo:t.Record({utxo:o}),reimbursed_failed_deposit:t.Record({burn_block_index:t.Nat64,mint_block_index:t.Nat64})}),x=t.Record({retrieve_btc_min_amount:t.Nat64,min_confirmations:t.Nat32,kyt_fee:t.Nat64}),u=t.Record({address:t.Text,amount:t.Nat64}),h=t.Record({block_index:t.Nat64}),p=t.Variant({MalformedAddress:t.Text,GenericError:t.Record({error_message:t.Text,error_code:t.Nat64}),TemporarilyUnavailable:t.Text,AlreadyProcessing:t.Null,AmountTooLow:t.Nat64,InsufficientFunds:t.Record({balance:t.Nat64})}),f=t.Variant({Signing:t.Null,Confirmed:t.Record({txid:t.Vec(t.Nat8)}),Sending:t.Record({txid:t.Vec(t.Nat8)}),AmountTooLow:t.Null,Unknown:t.Null,Submitted:t.Record({txid:t.Vec(t.Nat8)}),Pending:t.Null}),m=t.Record({from_subaccount:t.Opt(t.Vec(t.Nat8)),address:t.Text,amount:t.Nat64}),j=t.Variant({MalformedAddress:t.Text,GenericError:t.Record({error_message:t.Text,error_code:t.Nat64}),TemporarilyUnavailable:t.Text,InsufficientAllowance:t.Record({allowance:t.Nat64}),AlreadyProcessing:t.Null,AmountTooLow:t.Nat64,InsufficientFunds:t.Record({balance:t.Nat64})}),g=t.Variant({ValueTooSmall:o,Tainted:o,Minted:t.Record({minted_amount:t.Nat64,block_index:t.Nat64,utxo:o}),Checked:o}),b=t.Variant({GenericError:t.Record({error_message:t.Text,error_code:t.Nat64}),TemporarilyUnavailable:t.Text,AlreadyProcessing:t.Null,NoNewUtxos:t.Record({required_confirmations:t.Nat32,current_confirmations:t.Opt(t.Nat32)})});return t.Service({estimate_withdrawal_fee:t.Func([t.Record({amount:t.Opt(t.Nat64)})],[t.Record({minter_fee:t.Nat64,bitcoin_fee:t.Nat64})],["query"]),get_btc_address:t.Func([t.Record({owner:t.Opt(t.Principal),subaccount:t.Opt(t.Vec(t.Nat8))})],[t.Text],[]),get_deposit_fee:t.Func([],[t.Nat64],["query"]),get_events:t.Func([t.Record({start:t.Nat64,length:t.Nat64})],[t.Vec(d)],["query"]),get_minter_info:t.Func([],[x],["query"]),get_withdrawal_account:t.Func([],[a],[]),retrieve_btc:t.Func([u],[t.Variant({Ok:h,Err:p})],[]),retrieve_btc_status:t.Func([t.Record({block_index:t.Nat64})],[f],["query"]),retrieve_btc_with_approval:t.Func([m],[t.Variant({Ok:h,Err:j})],[]),update_balance:t.Func([t.Record({owner:t.Opt(t.Principal),subaccount:t.Opt(t.Vec(t.Nat8))})],[t.Variant({Ok:t.Vec(g),Err:b})],[])})},f=e=>u.eN.create({canisterId:h.qM,identity:e,idlFactory:p}),m=async e=>await(0,u.Qr)(h.cg,e);var j=n(65324),g=n(62474),b=n(57456),w=n(16443),_=n(81279);function v(e){return!("Confirmed"!==e&&"AmountTooLow"!==e)}function A(){const e=(0,w.WT)(),t=(0,b.O8)(e),n=(0,b.KH)();(0,i.useEffect)((()=>{const r=setInterval((()=>{!async function(){if(t&&t.length&&e)for(let r=0;r<t.length;r++){const i=BigInt(t[r].block_index),{state:s}=t[r];if(!v(s)){const t=await(await f()).retrieve_btc_status({block_index:i});n(e,i,t,void 0)}}}()}),1e4);return()=>{clearInterval(r)}}),[t,e])}var k=n(3481),y=n(98152),N=n(1054),R=n(4102),C=n(92213),V=n(22090),T=n(18507),E=n(78192),O=n(97070),I=n(85066),P=n(12288),L=n(55484),F=n(94992),M=n(93469),S=n(76571),B=n(57448),D=n(48431),W=n(98868),z=n(94570),H=n.n(z),q=n(37012);function U(){return(0,q.jsx)("svg",{width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,q.jsx)("path",{d:"M6.0013 3.33268V0.666016L2.66797 3.99935L6.0013 7.33268V4.66602C8.20797 4.66602 10.0013 6.45935 10.0013 8.66602C10.0013 10.8727 8.20797 12.666 6.0013 12.666C3.79464 12.666 2.0013 10.8727 2.0013 8.66602H0.667969C0.667969 11.6127 3.05464 13.9993 6.0013 13.9993C8.94797 13.9993 11.3346 11.6127 11.3346 8.66602C11.3346 5.71935 8.94797 3.33268 6.0013 3.33268Z",fill:"white"})})}function G(e,t){if(!e||!t)return"--";let n="--";for(let r=0;r<e.vout.length;r++){const i=e.vout[r];if(i.scriptpubkey_address===t){n=i.value;break}}return n}function Y(e){var t,n;let{transaction:r,block:i,address:s}=e;return(0,q.jsxs)(F.A,{children:[(0,q.jsx)(M.A,{children:r.status.block_time?(0,q.jsx)(N.A,{children:H()(1e3*Number(r.status.block_time)).format("YYYY-MM-DD HH:mm:ss")}):(0,q.jsx)(N.A,{children:"--"})}),(0,q.jsx)(M.A,{children:r.status.block_height?(0,q.jsx)(o.eq,{link:"https://explorer.btc.com/btc/block/".concat(r.status.block_height),children:r.status.block_height}):(0,q.jsx)(N.A,{children:"--"})}),(0,q.jsx)(M.A,{children:(0,q.jsx)(N.A,{sx:{maxWidth:"200px",wordBreak:"break-all",whiteSpace:"break-spaces","@media(max-width:640px)":{width:"300px"}},children:(0,q.jsx)(o.eq,{link:"https://explorer.btc.com/btc/transaction/".concat(r.txid),children:r.txid})})}),(0,q.jsx)(M.A,{children:(0,q.jsx)(N.A,{sx:{maxWidth:"200px",wordBreak:"break-all",whiteSpace:"break-spaces","@media(max-width:640px)":{width:"300px"}},children:(0,q.jsx)(o.eq,{link:"https://explorer.btc.com/btc/address/".concat(null===(t=r.vin[0])||void 0===t?void 0:t.prevout.scriptpubkey_address),children:null===(n=r.vin[0])||void 0===n?void 0:n.prevout.scriptpubkey_address})})}),(0,q.jsx)(M.A,{children:(0,q.jsx)(N.A,{sx:{maxWidth:"200px",wordBreak:"break-all",whiteSpace:"break-spaces","@media(max-width:640px)":{width:"300px"}},children:(0,q.jsx)(o.eq,{link:"https://explorer.btc.com/btc/address/".concat(s),children:s})})}),(0,q.jsx)(M.A,{children:(0,q.jsx)(N.A,{children:(0,I.t)(G(r,s),8).toFormat()})}),(0,q.jsx)(M.A,{children:(0,q.jsx)(N.A,{children:i&&r.status.block_height?Number(i)-r.status.block_height:"--"})})]})}function Q(e){let{address:t,block:n}=e;const[r,s]=(0,i.useState)(!1),{result:c,loading:d}=function(e,t){return(0,l.Pz)((0,i.useCallback)((async()=>{if(e)try{const t=await fetch("https://blockstream.info/api/address/".concat(e,"/txs"));return await t.json()}catch(t){return}}),[e]),t)}(t,r),x=(0,i.useMemo)((()=>t?null===c||void 0===c?void 0:c.filter((e=>!function(e,t){if(!e||!t)return!1;let n=!1;for(let r=0;r<e.vin.length;r++)if(e.vin[r].prevout.scriptpubkey_address===t){n=!0;break}return n}(e,t))).slice(0,8):[]),[c,t]);return(0,q.jsxs)(o.Am,{children:[(0,q.jsxs)(a.A,{sx:{display:"flex",justifyItems:"center"},children:[(0,q.jsx)(N.A,{color:"#ffffff",sx:{margin:"0 5px 0 0"},children:(0,q.jsx)(k.x6,{id:"PfHUmm"})}),(0,q.jsx)(a.A,{sx:{cursor:"pointer"},onClick:()=>s(!r),children:(0,q.jsx)(U,{})})]}),(0,q.jsx)(N.A,{color:"#ffffff",sx:{margin:"5px 0 0 0"},children:(0,q.jsx)(k.x6,{id:"GwPFWp"})}),(0,q.jsx)(a.A,{sx:{margin:"0 0 3px 0"},children:(0,q.jsxs)(S.A,{className:d||!t?"with-loading":"",children:[(0,q.jsxs)(B.A,{children:[(0,q.jsx)(D.A,{children:(0,q.jsxs)(F.A,{children:[(0,q.jsx)(M.A,{children:(0,q.jsx)(k.x6,{id:"LhMjLm"})}),(0,q.jsx)(M.A,{children:(0,q.jsx)(k.x6,{id:"PFFhCT"})}),(0,q.jsx)(M.A,{children:(0,q.jsx)(k.x6,{id:"QbVNZJ"})}),(0,q.jsx)(M.A,{children:(0,q.jsx)(k.x6,{id:"ejVYRQ"})}),(0,q.jsx)(M.A,{children:(0,q.jsx)(k.x6,{id:"/jQctM"})}),(0,q.jsx)(M.A,{children:(0,q.jsx)(k.x6,{id:"hehnjM"})}),(0,q.jsx)(M.A,{children:(0,q.jsx)(k.x6,{id:"QW/8vm"})})]})}),(0,q.jsx)(W.A,{children:null===x||void 0===x?void 0:x.map((e=>(0,q.jsx)(Y,{transaction:e,block:n,address:t},e.txid)))})]}),0!==(null===x||void 0===x?void 0:x.length)||d?null:(0,q.jsx)(o.YQ,{}),(0,q.jsx)(o.n6,{loading:d||!t})]})})]})}var Z=n(73416),K=n(87539);function X(){return(0,q.jsxs)(a.A,{sx:{margin:"30px 0 0 0",display:"flex",flexDirection:"column",alignItems:"center",gap:"20px 0"},children:[(0,q.jsx)(K.N,{href:h.R4,label:(0,q.jsx)(k.x6,{id:"KxQwcq"})}),(0,q.jsx)(K.N,{href:(0,Z.c)(h.qM),label:(0,q.jsx)(k.x6,{id:"hPK3eZ"})})]})}var J=n(81863),$=n(94926);const ee=n.p+"static/media/BTC.d40a4d2eb24abbcca413dd2734d2b1f1.svg",te=(0,J.A)((()=>({logo_box:{position:"relative",width:"80px",height:"80px",borderRadius:"50%","&.ck":{background:"linear-gradient(0deg, rgba(105, 108, 225, 0.39), rgba(105, 108, 225, 0.39)), linear-gradient(0deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14))"},"&.ic":{background:"linear-gradient(135.36deg, #3A425F 15.81%, rgba(41, 49, 79, 0) 77.64%)"}},logo:{width:"74px",height:"74px",position:"absolute",top:"3px",left:"3px"}})));function ne(){return(0,q.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,q.jsx)("path",{d:"M6 6L12 12L6 18",stroke:"#059212",strokeOpacity:"0.6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,q.jsx)("path",{d:"M12 6L18 12L12 18",stroke:"#059212",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function re(e){let{type:t}=e;const n=te();return(0,q.jsxs)(a.A,{sx:{display:"flex",alignItems:"center",gap:"0 59px"},children:[(0,q.jsx)(a.A,{className:"".concat(n.logo_box," ").concat("mint"===t?"ic":"ck"),children:(0,q.jsx)(a.A,{className:n.logo,children:(0,q.jsx)("img",{src:"mint"===t?ee:$.y5.logo,alt:"",width:"100%",height:"100%"})})}),(0,q.jsx)(ne,{}),(0,q.jsx)(a.A,{className:"".concat(n.logo_box," ").concat("mint"===t?"ck":"ic"),children:(0,q.jsx)(a.A,{className:n.logo,children:(0,q.jsx)("img",{src:"mint"===t?$.y5.logo:ee,alt:"",width:"100%",height:"100%"})})})]})}function ie(){return(0,q.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,q.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.6654 5.33333H2.66536V13.3333H10.6654V5.33333ZM2.66536 4C1.92898 4 1.33203 4.59695 1.33203 5.33333V13.3333C1.33203 14.0697 1.92898 14.6667 2.66536 14.6667H10.6654C11.4017 14.6667 11.9987 14.0697 11.9987 13.3333V5.33333C11.9987 4.59695 11.4017 4 10.6654 4H2.66536Z",fill:"white"}),(0,q.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.3346 12L13.3346 2.66667L4.0013 2.66667L4.0013 1.33333L13.3346 1.33333C14.071 1.33333 14.668 1.93029 14.668 2.66667L14.668 12L13.3346 12Z",fill:"white"})]})}function se(e){let{buttons:t,handleChange:n,active:s,block:c}=e;const u=(0,y.A)(),p=(0,w.WT)(),[m,_]=(0,i.useState)(!1),[v,A]=(0,i.useState)(!1),[F]=(0,L.cO)(),{result:M}=(0,E.nC)(h.cg,p,m),{result:S}=(0,O.Vs)(h.cg),{result:B,loading:D}=function(e,t){const n=(0,b.ms)(e),r=(0,b.Nx)();return(0,l.Pz)((0,i.useCallback)((async()=>{if(!e)return;if(n)return n;const i=await(0,g.u)(),s=(0,d.Pk)(await(await f(i)).get_btc_address({owner:(0,x.E)(j.p.fromText(e)),subaccount:(0,x.E)(t)})).data;return s&&e&&r(e,s),s}),[e,t,n]))}(p),W=(0,i.useCallback)((async(e,t)=>{const n=await(0,g.u)();return(0,d.Pk)(await(await f(n)).update_balance({owner:(0,x.E)(j.p.fromText(e)),subaccount:(0,x.E)(t)}))}),[]);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(o.Am,{children:[(0,q.jsx)(o.Kp,{tabs:t,onChange:n,active:s}),(0,q.jsx)(a.A,{sx:{margin:"20px 0 0 0"},children:(0,q.jsxs)(a.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,q.jsx)(re,{type:"mint"}),(0,q.jsxs)(a.A,{sx:{margin:"20px 0 0 0",display:"flex",gap:"0 10px",alignItems:"center"},children:[(0,q.jsxs)(N.A,{color:"#fff",children:[(0,q.jsx)(k.x6,{id:"0QDjxt"}),"\xa0",(0,I.t)(M,null===S||void 0===S?void 0:S.decimals).toFormat()," ckBTC"]}),(0,q.jsxs)(R.A,{variant:"outlined",size:"small",disabled:v,onClick:async()=>{if(!p)return;A(!0);const{status:e,message:t}=await W(p,void 0);e===P.i.OK?(F(r.Ru._({id:"qUs4IW"}),L.lA.success),_(!m)):F(null!==t&&void 0!==t?t:r.Ru._({id:"u2HXZY"}),L.lA.error),A(!1)},children:[v?(0,q.jsx)(C.A,{size:18,sx:{margin:"0 5px 0 0",color:"inherit"}}):null,(0,q.jsx)(k.x6,{id:"EkH9pt"})]})]}),D?(0,q.jsx)(a.A,{sx:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"180px"},children:(0,q.jsx)(C.A,{})}):B?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(a.A,{sx:{background:u.palette.background.level4,margin:"30px 0 0 0",padding:"10px"},children:[(0,q.jsx)(N.A,{children:(0,q.jsx)(k.x6,{id:"/kMgYW"})}),(0,q.jsx)(a.A,{sx:{margin:"15px 0 0 0",display:"flex",justifyContent:"center"},children:(0,q.jsx)(V.A,{value:null!==B&&void 0!==B?B:""})})]}),(0,q.jsxs)(a.A,{sx:{margin:"10px 0 0 0",display:"flex",alignItems:"center",gap:"0 10px"},children:[(0,q.jsx)(T.A,{content:B,children:(0,q.jsx)(N.A,{color:"#fff",fontWeight:500,children:B})}),(0,q.jsx)(T.A,{content:B,children:(0,q.jsx)(ie,{})})]})]}):(0,q.jsx)(N.A,{sx:{margin:"10px 0 0 0"},children:(0,q.jsx)(k.x6,{id:"7G7XZF"})}),(0,q.jsxs)(a.A,{sx:{margin:"30px 0 0 0",display:"flex",width:"360px","@media(max-width:640px)":{width:"320px"}},children:[(0,q.jsx)(N.A,{sx:{flex:"1"},children:(0,q.jsx)(k.x6,{id:"fX7zrY"})}),(0,q.jsx)(N.A,{children:(0,q.jsx)(k.x6,{id:"CsCnoM"})})]}),(0,q.jsxs)(a.A,{sx:{margin:"10px 0 0 0",display:"flex",width:"360px","@media(max-width:640px)":{width:"320px"}},children:[(0,q.jsx)(N.A,{sx:{flex:"1"},children:(0,q.jsx)(k.x6,{id:"zifD4w"})}),(0,q.jsx)(N.A,{children:(0,q.jsx)(k.x6,{id:"+zzHvy"})})]}),(0,q.jsx)(X,{})]})})]}),(0,q.jsx)(a.A,{sx:{margin:"20px 0 0 0"},children:(0,q.jsx)(Q,{address:B,block:c})})]})}function ae(e){let{spender:t,spenderSub:n,owner:r,ownerSub:s}=e;return(0,l.Pz)((0,i.useCallback)((async()=>{if(t&&r)return await async function(e){let{spender:t,spenderSub:n,owner:r,ownerSub:i}=e;const s=await(await m(!0)).icrc2_allowance({account:{owner:r,subaccount:(0,x.E)(i)},spender:{owner:t,subaccount:(0,x.E)(n)}});return(0,d.Pk)(s.allowance).data}({spender:j.p.fromText(t),spenderSub:n,owner:j.p.fromText(r),ownerSub:s})}),[t,n,r,s]))}function oe(){const e=(0,w.WT)(),t=h.qM,{result:n}=ae({spender:t,owner:e});return(0,i.useCallback)((async e=>{let{amount:r,expected_allowance:i}=e;return t?!n||n<BigInt(r)?await async function(e){let{spender:t,amount:n,expected_allowance:r,spenderSub:i}=e;return(0,d.Pk)(await(await m(!0)).icrc2_approve({fee:[],memo:[],from_subaccount:[],created_at_time:[],amount:BigInt(n),spender:{owner:t,subaccount:(0,x.E)(i)},expires_at:(0,x.E)(r),expected_allowance:(0,x.E)(r)}))}({spender:j.p.fromText(t),amount:r,expected_allowance:i}):{status:"ok",message:"No need to approve"}:{status:"err",message:"No spender!"}}),[n,t])}var ce=n(27442),le=n(27895),de=function(){return de=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de.apply(this,arguments)},xe="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";(()=>{const e=Array(256).fill(-1);for(let t=0;t<58;++t)e[xe.charCodeAt(t)]=t})();var ue,he,pe,fe=e=>{if(!e||"string"!=typeof e)throw new Error("Expected base58 string but got \u201c".concat(e,"\u201d"));if(e.match(/[IOl0]/gmu))throw new Error("Invalid base58 character \u201c".concat(e.match(/[IOl0]/gmu),"\u201d"));const t=e.match(/^1+/gmu),n=t?t[0].length:0,r=(e.length-n)*(Math.log(58)/Math.log(256))+1>>>0;return new Uint8Array([...new Uint8Array(n),...e.match(/.{1}/gmu).map((e=>xe.indexOf(e))).reduce(((e,t)=>e.map((e=>{const n=58*e+t;return t=n>>8,n}))),new Uint8Array(r)).reverse().filter((i=!1,e=>i=i||e))]);var i},me=(ue=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.bech32m=t.bech32=void 0;const n="qpzry9x8gf2tvdw0s3jn54khce6mua7l",r={};for(let x=0;x<32;x++){const e=n.charAt(x);r[e]=x}function i(e){const t=e>>25;return(33554431&e)<<5^996825010&-(1&t)^642813549&-(t>>1&1)^513874426&-(t>>2&1)^1027748829&-(t>>3&1)^705979059&-(t>>4&1)}function s(e){let t=1;for(let n=0;n<e.length;++n){const r=e.charCodeAt(n);if(r<33||r>126)return"Invalid prefix ("+e+")";t=i(t)^r>>5}t=i(t);for(let n=0;n<e.length;++n){const r=e.charCodeAt(n);t=i(t)^31&r}return t}function a(e,t,n,r){let i=0,s=0;const a=(1<<n)-1,o=[];for(let c=0;c<e.length;++c)for(i=i<<t|e[c],s+=t;s>=n;)s-=n,o.push(i>>s&a);if(r)s>0&&o.push(i<<n-s&a);else{if(s>=t)return"Excess padding";if(i<<n-s&a)return"Non-zero padding"}return o}function o(e){return a(e,8,5,!0)}function c(e){const t=a(e,5,8,!1);if(Array.isArray(t))return t}function l(e){const t=a(e,5,8,!1);if(Array.isArray(t))return t;throw new Error(t)}function d(e){let t;function a(e,n){if(n=n||90,e.length<8)return e+" too short";if(e.length>n)return"Exceeds length limit";const a=e.toLowerCase(),o=e.toUpperCase();if(e!==a&&e!==o)return"Mixed-case string "+e;const c=(e=a).lastIndexOf("1");if(-1===c)return"No separator character for "+e;if(0===c)return"Missing prefix for "+e;const l=e.slice(0,c),d=e.slice(c+1);if(d.length<6)return"Data too short";let x=s(l);if("string"==typeof x)return x;const u=[];for(let t=0;t<d.length;++t){const e=d.charAt(t),n=r[e];if(void 0===n)return"Unknown character "+e;x=i(x)^n,t+6>=d.length||u.push(n)}return x!==t?"Invalid checksum for "+e:{prefix:l,words:u}}return t="bech32"===e?1:734539939,{decodeUnsafe:function(e,t){const n=a(e,t);if("object"==typeof n)return n},decode:function(e,t){const n=a(e,t);if("object"==typeof n)return n;throw new Error(n)},encode:function(e,r,a){if(a=a||90,e.length+7+r.length>a)throw new TypeError("Exceeds length limit");let o=s(e=e.toLowerCase());if("string"==typeof o)throw new Error(o);let c=e+"1";for(let t=0;t<r.length;++t){const e=r[t];if(e>>5!=0)throw new Error("Non 5-bit word");o=i(o)^e,c+=n.charAt(e)}for(let t=0;t<6;++t)o=i(o);o^=t;for(let t=0;t<6;++t)c+=n.charAt(o>>5*(5-t)&31);return c},toWords:o,fromWordsUnsafe:c,fromWords:l}}t.bech32=d("bech32"),t.bech32m=d("bech32m")},ue(he={exports:{}},he.exports),he.exports);(pe=me)&&pe.__esModule&&Object.prototype.hasOwnProperty.call(pe,"default")&&pe.default;var je=me.bech32m,ge=me.bech32;const be=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998];class we{constructor(){this.A=1779033703,this.B=-1150833019,this.C=1013904242,this.D=-1521486534,this.E=1359893119,this.F=-1694144372,this.G=528734635,this.H=1541459225,this._size=0,this._sp=0,(!ve||Ae>=8e3)&&(ve=new ArrayBuffer(8e3),Ae=0),this._byte=new Uint8Array(ve,Ae,80),this._word=new Int32Array(ve,Ae,20),Ae+=80}update(e){if("string"==typeof e)return this._utf8(e);if(null==e)throw new TypeError("Invalid type: "+typeof e);const t=e.byteOffset,n=e.byteLength;let r=n/64|0,i=0;if(r&&!(3&t)&&!(this._size%64)){const n=new Int32Array(e.buffer,t,16*r);for(;r--;)this._int32(n,i>>2),i+=64;this._size+=i}if(1!==e.BYTES_PER_ELEMENT&&e.buffer){const r=new Uint8Array(e.buffer,t+i,n-i);return this._uint8(r)}return i===n?this:this._uint8(e,i)}_uint8(e,t){const{_byte:n,_word:r}=this,i=e.length;for(t|=0;t<i;){const s=this._size%64;let a=s;for(;t<i&&a<64;)n[a++]=e[t++];a>=64&&this._int32(r),this._size+=a-s}return this}_utf8(e){const{_byte:t,_word:n}=this,r=e.length;let i=this._sp;for(let s=0;s<r;){const a=this._size%64;let o=a;for(;s<r&&o<64;){let n=0|e.charCodeAt(s++);n<128?t[o++]=n:n<2048?(t[o++]=192|n>>>6,t[o++]=128|63&n):n<55296||n>57343?(t[o++]=224|n>>>12,t[o++]=128|n>>>6&63,t[o++]=128|63&n):i?(n=((1023&i)<<10)+(1023&n)+65536,t[o++]=240|n>>>18,t[o++]=128|n>>>12&63,t[o++]=128|n>>>6&63,t[o++]=128|63&n,i=0):i=n}o>=64&&(this._int32(n),n[0]=n[16]),this._size+=o-a}return this._sp=i,this}_int32(e,t){let{A:n,B:r,C:i,D:s,E:a,F:o,G:c,H:l}=this,d=0;for(t|=0;d<16;)_e[d++]=ye(e[t++]);for(d=16;d<64;d++)_e[d]=Ee(_e[d-2])+_e[d-7]+Te(_e[d-15])+_e[d-16]|0;for(d=0;d<64;d++){const e=l+Ve(a)+Ne(a,o,c)+be[d]+_e[d]|0,t=Ce(n)+Re(n,r,i)|0;l=c,c=o,o=a,a=s+e|0,s=i,i=r,r=n,n=e+t|0}this.A=n+this.A|0,this.B=r+this.B|0,this.C=i+this.C|0,this.D=s+this.D|0,this.E=a+this.E|0,this.F=o+this.F|0,this.G=c+this.G|0,this.H=l+this.H|0}digest(e){const{_byte:t,_word:n}=this;let r=this._size%64|0;for(t[r++]=128;3&r;)t[r++]=0;if(r>>=2,r>14){for(;r<16;)n[r++]=0;r=0,this._int32(n)}for(;r<16;)n[r++]=0;const i=8*this._size,s=(4294967295&i)>>>0,a=(i-s)/4294967296;return a&&(n[14]=ye(a)),s&&(n[15]=ye(s)),this._int32(n),"hex"===e?this._hex():this._bin()}_hex(){const{A:e,B:t,C:n,D:r,E:i,F:s,G:a,H:o}=this;return ke(e)+ke(t)+ke(n)+ke(r)+ke(i)+ke(s)+ke(a)+ke(o)}_bin(){const{A:e,B:t,C:n,D:r,E:i,F:s,G:a,H:o,_byte:c,_word:l}=this;return l[0]=ye(e),l[1]=ye(t),l[2]=ye(n),l[3]=ye(r),l[4]=ye(i),l[5]=ye(s),l[6]=ye(a),l[7]=ye(o),c.slice(0,32)}}const _e=new Int32Array(64);let ve,Ae=0;const ke=e=>(e+4294967296).toString(16).substr(-8),ye=254===new Uint8Array(new Uint16Array([65279]).buffer)[0]?e=>e:e=>e<<24&4278190080|e<<8&16711680|e>>8&65280|e>>24&255,Ne=(e,t,n)=>n^e&(t^n),Re=(e,t,n)=>e&t|n&(e|t),Ce=e=>(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),Ve=e=>(e>>>6|e<<26)^(e>>>11|e<<21)^(e>>>25|e<<7),Te=e=>(e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3,Ee=e=>(e>>>17|e<<15)^(e>>>19|e<<13)^e>>>10;var Oe,Ie,Pe=function(e){return(new we).update(e).digest()};!function(e){e.mainnet="mainnet",e.testnet="testnet",e.regtest="regtest"}(Oe||(Oe={})),function(e){e.p2pkh="p2pkh",e.p2sh="p2sh",e.p2wpkh="p2wpkh",e.p2wsh="p2wsh",e.p2tr="p2tr"}(Ie||(Ie={}));var Le={0:{type:Ie.p2pkh,network:Oe.mainnet},111:{type:Ie.p2pkh,network:Oe.testnet},5:{type:Ie.p2sh,network:Oe.mainnet},196:{type:Ie.p2sh,network:Oe.testnet}},Fe=function(e){var t,n=e.substr(0,2).toLowerCase();if("bc"===n||"tb"===n)return function(e){var t;try{t=e.startsWith("bc1p")||e.startsWith("tb1p")||e.startsWith("bcrt1p")?je.decode(e):ge.decode(e)}catch(e){throw new Error("Invalid address")}var n={bc:Oe.mainnet,tb:Oe.testnet,bcrt:Oe.regtest}[t.prefix];if(void 0===n)throw new Error("Invalid address");var r=t.words[0];if(r<0||r>16)throw new Error("Invalid address");return{bech32:!0,network:n,address:e,type:20===ge.fromWords(t.words.slice(1)).length?Ie.p2wpkh:1===r?Ie.p2tr:Ie.p2wsh}}(e);try{t=fe(e)}catch(de){throw new Error("Invalid address")}var r=t.length;if(25!==r)throw new Error("Invalid address");var i=t[0],s=t.slice(r-4,r),a=t.slice(0,r-4),o=Pe(Pe(a)).slice(0,4);if(s.some((function(e,t){return e!==o[t]})))throw new Error("Invalid address");if(!Object.keys(Le).map(Number).includes(i))throw new Error("Invalid address");return de(de({},Le[i]),{address:e,bech32:!1})},Me=function(e,t){try{var n=Fe(e);return!t||t===n.network}catch(e){return!1}};function Se(e){var t;let{tx:n}=e;return(0,q.jsxs)(F.A,{children:[(0,q.jsx)(M.A,{children:(0,q.jsx)(N.A,{children:n.block_index})}),(0,q.jsx)(M.A,{children:(0,q.jsx)(N.A,{children:null!==(t=n.state)&&void 0!==t?t:"--"})}),(0,q.jsx)(M.A,{children:n.txid?(0,q.jsx)(N.A,{sx:{maxWidth:"400px",wordBreak:"break-all",whiteSpace:"break-spaces","@media(max-width:640px)":{width:"300px"}},children:(0,q.jsx)(o.eq,{link:"https://explorer.btc.com/btc/transaction/".concat(n.txid),children:n.txid})}):(0,q.jsx)(N.A,{children:"--"})}),(0,q.jsx)(M.A,{children:n.value?(0,q.jsx)(N.A,{children:(0,I.t)(n.value,8).toFormat()}):(0,q.jsx)(N.A,{children:"--"})})]})}function Be(){const e=(0,w.WT)(),t=(0,b.O8)(e);return(0,q.jsxs)(o.Am,{children:[(0,q.jsx)(a.A,{sx:{display:"flex",justifyItems:"center"},children:(0,q.jsx)(N.A,{color:"#ffffff",children:(0,q.jsx)(k.x6,{id:"l/4A2e"})})}),(0,q.jsx)(a.A,{sx:{margin:"0 0 3px 0"},children:(0,q.jsxs)(S.A,{children:[(0,q.jsxs)(B.A,{children:[(0,q.jsx)(D.A,{children:(0,q.jsxs)(F.A,{children:[(0,q.jsx)(M.A,{children:(0,q.jsx)(k.x6,{id:"5Lo2tO"})}),(0,q.jsx)(M.A,{children:(0,q.jsx)(k.x6,{id:"RS0o7b"})}),(0,q.jsx)(M.A,{children:(0,q.jsx)(k.x6,{id:"QbVNZJ"})}),(0,q.jsx)(M.A,{children:(0,q.jsx)(k.x6,{id:"hehnjM"})})]})}),(0,q.jsx)(W.A,{children:null===t||void 0===t?void 0:t.map((e=>(0,q.jsx)(Se,{tx:e},e.block_index)))})]}),0!==(null===t||void 0===t?void 0:t.length)&&t?null:(0,q.jsx)(o.YQ,{})]})})]})}var De=n(17471);function We(e){let{open:t,onClose:n,unDissolveBalance:s,token:c}=e;const l=(0,w.Le)(),[x,u]=(0,i.useState)(void 0),[p,m]=(0,i.useState)(!1),[j]=(0,L.cO)(),_=(0,b.KH)();let v="";return x&&!Me(x)&&(v=r.Ru._({id:"6p07iY"})),s&&!s.isGreaterThan(.001)&&(v=r.Ru._({id:"W9beDp"})),x||(v=r.Ru._({id:"z4Y3Lr"})),(0,q.jsx)(De.A,{open:t,title:r.Ru._({id:"g6HMHH"}),onClose:n,children:(0,q.jsxs)(a.A,{children:[(0,q.jsx)(N.A,{sx:{margin:"10px 0 0 0"},children:(0,q.jsx)(k.x6,{id:"GpNFkb"})}),(0,q.jsx)(a.A,{sx:{margin:"15px 0 0 0"},children:(0,q.jsx)(o.GV,{value:s&&c?(0,I.t)(s,c.decimals).toFormat():"--",disabled:!0})}),(0,q.jsxs)(N.A,{sx:{margin:"20px 0 0 0"},children:[(0,q.jsx)(N.A,{component:"span",color:"#D3625B",children:"*"}),(0,q.jsx)(k.x6,{id:"tPrmjP"})]}),(0,q.jsx)(a.A,{sx:{margin:"15px 0 0 0"},children:(0,q.jsx)(o.GV,{value:x,onChange:e=>u(e),inputProps:{maxLength:255}})}),(0,q.jsxs)(a.A,{sx:{margin:"15px 0 0 0"},children:[(0,q.jsx)(a.A,{sx:{margin:"5px 0 0 0",display:"flex",justifyContent:"space-between"},children:(0,q.jsxs)(N.A,{component:"div",children:[(0,q.jsxs)(N.A,{children:["Dissolve Fee: ",h.Z2,"ckBTC"]}),(0,q.jsx)(N.A,{children:(0,q.jsx)(k.x6,{id:"jhIMri"})})]})}),(0,q.jsx)(a.A,{sx:{width:"100%",margin:"20px 0 0 0"},children:(0,q.jsx)(g.A,{onSubmit:async()=>{if(!s||!c||!x||!l)return;const e=s;m(!0);const{status:t,message:i,data:a}=await async function(e,t){const n=await(0,g.u)();return(0,d.Pk)(await(await f(n)).retrieve_btc({address:e,amount:t}))}(x,BigInt((0,ce.u)(e)));t===P.i.ERROR?j(null!==i&&void 0!==i?i:r.Ru._({id:"idwgc1"}),L.lA.error):(j("Dissolve successfully",L.lA.success),null!==a&&void 0!==a&&a.block_index&&_(l.toString(),a.block_index,void 0,(0,ce.u)(e)),u(void 0),n()),m(!1)},children:e=>{let{submit:t}=e;return(0,q.jsxs)(R.A,{variant:"contained",fullWidth:!0,size:"large",onClick:t,disabled:!!v||p||!s,children:[p?(0,q.jsx)(C.A,{color:"inherit",size:22,sx:{margin:"0 5px 0 0"}}):null,v||(0,q.jsx)(k.x6,{id:"0jqDvh"})]})}})})]})]})})}function ze(e){let{buttons:t,handleChange:n,active:s}=e;const c=(0,w.WT)(),[u,p]=(0,i.useState)(!1),[m,j]=(0,i.useState)(void 0),[_,v]=(0,i.useState)(void 0),[y,V]=(0,i.useState)(!1),[T,F]=(0,i.useState)(!1),{result:M,loading:S}=(0,E.nC)(h.cg,c,u),{result:B}=(0,O.Vs)(h.cg),D=(0,b.KH)();A();const[W]=(0,L.cO)(),{result:z}=function(){const e=(0,w.WT)(),t=(0,b.MT)(e),n=(0,b.X5)();return(0,l.Pz)((0,i.useCallback)((async()=>{if(!e)return;const t=await(0,g.u)(),r=(0,d.Pk)(await(await f(t)).get_withdrawal_account()).data;return r&&n(e,r.owner,r.subaccount),r}),[null===t||void 0===t?void 0:t.owner,e]))}(),H=(0,i.useMemo)((()=>({owner:null===z||void 0===z?void 0:z.owner,sub:null!==z&&void 0!==z&&z.subaccount?null===z||void 0===z?void 0:z.subaccount[0]:void 0})),[JSON.stringify(z)]),{result:U,loading:G}=(0,E.nC)(h.cg,H.owner,!0,H.sub),Y=oe();let Q="";return _&&!Me(_)&&(Q=r.Ru._({id:"6p07iY"})),m||(Q=r.Ru._({id:"tbR3sW"})),m&&!new le.A(m).isGreaterThan(.001)&&(Q=r.Ru._({id:"W9beDp"})),_||(Q=r.Ru._({id:"z4Y3Lr"})),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(o.Am,{children:[(0,q.jsx)(o.Kp,{tabs:t,onChange:n,active:s}),(0,q.jsxs)(a.A,{sx:{display:"flex",flexDirection:"column",alignItems:"center",margin:"20px 0 0 0"},children:[(0,q.jsx)(re,{type:"dissolve"}),(0,q.jsxs)(a.A,{sx:{margin:"20px 0 0 0",display:"flex",gap:"0 10px",alignItems:"center"},children:[(0,q.jsx)(a.A,{children:(0,q.jsxs)(N.A,{color:"#fff",children:[(0,q.jsx)(k.x6,{id:"0QDjxt"}),"\xa0",(0,I.t)(M,null===B||void 0===B?void 0:B.decimals).toFormat()," ckBTC"]})}),(0,q.jsx)(R.A,{variant:"outlined",size:"small",disabled:S,onClick:()=>p(!u),children:(0,q.jsx)(k.x6,{id:"EkH9pt"})})]}),(0,q.jsxs)(a.A,{sx:{margin:"20px 0 0 0",display:"flex",gap:"0 10px",alignItems:"center",justifyContent:"flex-end"},children:[(0,q.jsxs)(N.A,{color:"#fff",children:[(0,q.jsx)(k.x6,{id:"tOjDQ7"}),"\xa0",G||!U?"--":(0,I.t)(U,null===B||void 0===B?void 0:B.decimals).toFormat()," ","ckBTC"]}),(0,q.jsx)(R.A,{variant:"outlined",size:"small",onClick:()=>F(!0),children:(0,q.jsx)(k.x6,{id:"3iMPjK"})})]}),(0,q.jsxs)(a.A,{sx:{margin:"40px 0 0 0",width:"100%",maxWidth:"474px"},children:[(0,q.jsx)(N.A,{color:"#fff",children:(0,q.jsx)(k.x6,{id:"+Mpjj4"})}),(0,q.jsxs)(N.A,{sx:{margin:"10px 0 0 0"},children:[(0,q.jsx)(N.A,{component:"span",color:"#D3625B",children:"*"}),(0,q.jsx)(k.x6,{id:"tPrmjP"})]}),(0,q.jsx)(a.A,{sx:{margin:"15px 0 0 0"},children:(0,q.jsx)(o.GV,{value:_,onChange:e=>v(e),inputProps:{maxLength:255}})}),(0,q.jsxs)(N.A,{sx:{margin:"10px 0 0 0"},children:[(0,q.jsx)(N.A,{component:"span",color:"#D3625B",children:"*"}),(0,q.jsx)(k.x6,{id:"GpNFkb"})]}),(0,q.jsxs)(a.A,{sx:{margin:"15px 0 0 0"},children:[(0,q.jsx)(o.LT,{value:m,onChange:e=>j(String(e)),numericProps:{allowNegative:!1,decimalScale:8,maxLength:26}}),(0,q.jsxs)(a.A,{sx:{margin:"5px 0 0 0",display:"flex",justifyContent:"space-between"},children:[(0,q.jsxs)(N.A,{component:"div",children:[(0,q.jsxs)(N.A,{children:["Dissolve Fee: ",h.Z2,"ckBTC"]}),(0,q.jsx)(N.A,{children:(0,q.jsx)(k.x6,{id:"jhIMri"})})]}),(0,q.jsx)(N.A,{color:"secondary",sx:{cursor:"pointer"},onClick:()=>{B&&j((0,I.t)(M,null===B||void 0===B?void 0:B.decimals).minus((0,I.t)(B.transFee,B.decimals)).toFixed(B.decimals-1))},children:(0,q.jsx)(k.x6,{id:"CK1KXz"})})]}),(0,q.jsx)(a.A,{sx:{width:"100%",margin:"20px 0 0 0"},children:(0,q.jsx)(g.A,{onSubmit:async()=>{if(!m||!c||!B||!_||!z)return;const e=BigInt((0,ce.u)((0,I.N)(m,B.decimals)));V(!0);const{status:t,message:n}=await Y({amount:e});if(t===P.i.ERROR)return W(null!==n&&void 0!==n?n:r.Ru._({id:"Uif/ev"}),L.lA.error),void V(!1);const{status:i,message:s,data:a}=await async function(e,t){const n=await(0,g.u)();return(0,d.Pk)(await(await f(n)).retrieve_btc_with_approval({from_subaccount:(0,x.E)(void 0),address:e,amount:t}))}(_,e);i===P.i.ERROR?W(null!==s&&void 0!==s?s:r.Ru._({id:"idwgc1"}),L.lA.error):(W("Dissolve successfully",L.lA.success),null!==a&&void 0!==a&&a.block_index&&D(c,a.block_index,void 0,e.toString()),p(!u),j(void 0),v(void 0)),V(!1)},children:e=>{let{submit:t}=e;return(0,q.jsxs)(R.A,{variant:"contained",fullWidth:!0,size:"large",onClick:t,disabled:!!Q||y,children:[y?(0,q.jsx)(C.A,{color:"inherit",size:22,sx:{margin:"0 5px 0 0"}}):null,Q||(0,q.jsx)(k.x6,{id:"0jqDvh"})]})}})})]})]}),(0,q.jsx)(X,{})]})]}),(0,q.jsx)(a.A,{sx:{margin:"20px 0 0 0"},children:(0,q.jsx)(Be,{})}),T?(0,q.jsx)(We,{token:B,unDissolveBalance:U,open:T,onClose:()=>F(!1)}):null]})}const He=[{key:"mint",value:r.Ru._({id:"5IrCQY"})},{key:"dissolve",value:r.Ru._({id:"TGmg93"})}];function qe(){const e=(0,s.W6)(),[t,n]=(0,i.useState)(""),{type:l}=(0,c.e)();(0,i.useEffect)((()=>{l&&n(l)}),[l]);const d=t=>{n(t.key),e.push("/wallet/ckBTC?type=".concat(t.key))},x=function(){const e=(0,_.r)((async()=>{try{const e=await fetch("https://blockchain.info/q/getblockcount");return await e.json()}catch(e){return}}),void 0,3e4);return(0,i.useMemo)((()=>e),[e])}();return(0,q.jsxs)(o.mO,{children:[(0,q.jsx)(o.BI,{prevLink:"/wallet",prevLabel:r.Ru._({id:"sb9Y58"}),currentLabel:"dissolve"===l?r.Ru._({id:"0jqDvh"}):r.Ru._({id:"7kb9HU"})}),(0,q.jsx)(a.A,{sx:{height:"20px"}}),"dissolve"===l?(0,q.jsx)(ze,{handleChange:d,buttons:He,active:t}):(0,q.jsx)(se,{handleChange:d,buttons:He,active:t,block:x})]})}},87539:(e,t,n)=>{n.d(t,{N:()=>o});var r=n(77500),i=n(1054),s=n(37012);function a(){return(0,s.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.43866 2.42969H1.16146V0.429688H8.85723H9.85723V1.42969V9.12545H7.85723V3.83954L1.94156 9.75521L0.527344 8.341L6.43866 2.42969Z",fill:"#5669DC"})})}n(72296);function o(e){let{href:t,label:n}=e;return(0,s.jsx)("a",{href:t,target:"_blank",style:{textDecoration:"none"},rel:"noreferrer",children:(0,s.jsxs)(r.A,{sx:{display:"flex",gap:"0 10px",alignItems:"center"},children:[(0,s.jsx)(i.A,{children:n}),(0,s.jsx)(a,{})]})})}},73416:(e,t,n)=>{function r(e){return e.length>27?"https://icscan.io/principal/".concat(e):"https://dashboard.internetcomputer.org/canister/".concat(e)}n.d(t,{c:()=>r})}}]);
//# sourceMappingURL=3515.32475ef0.chunk.js.map