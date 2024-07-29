"use strict";(self.webpackChunkwaste2earn_home=self.webpackChunkwaste2earn_home||[]).push([[8826],{34510:(e,t,n)=>{n.d(t,{AW:()=>r,BZ:()=>s});const i=e=>{let{IDL:t}=e;const n=t.Text,i=t.Record({secs:t.Nat64,nanos:t.Nat32}),a=t.Record({max_message_size_bytes:t.Opt(t.Nat32),node_max_memory_size_bytes:t.Opt(t.Nat32),controller_id:t.Principal}),o=t.Record({e8s:t.Nat64}),r=(t.Record({send_whitelist:t.Vec(t.Tuple(t.Principal)),minting_account:n,transaction_window:t.Opt(i),max_message_size_bytes:t.Opt(t.Nat32),archive_options:t.Opt(a),initial_values:t.Vec(t.Tuple(n,o))}),t.Record({account:n})),s=t.Vec(t.Nat8),c=t.Nat64,l=t.Record({to_subaccount:t.Opt(s),from_subaccount:t.Opt(s),to_canister:t.Principal,max_fee:o,block_height:c}),d=t.Nat64,u=t.Record({timestamp_nanos:t.Nat64}),p=t.Record({to:n,fee:o,memo:d,from_subaccount:t.Opt(s),created_at_time:t.Opt(u),amount:o});return t.Service({account_balance_dfx:t.Func([r],[o],["query"]),notify_dfx:t.Func([l],[],[]),send_dfx:t.Func([p],[c],[])})};var a=n(2281),o=n(2777);const r=async e=>await(0,o.T)(e);n(87198);const s=e=>o.eN.create({idlFactory:i,canisterId:a.Yd,identity:e})},9533:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(23603),a=n(37012);function o(e){let{label:t,value:n}=e;return(0,a.jsx)(i.A,{href:n,target:"_blank",children:t})}},18951:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(3481),a=n(1054),o=n(69770),r=n(37012);function s(e){var t;const n=(0,o.A)();return(0,r.jsx)(a.A,{...e,sx:{padding:"1px 3px",cursor:"pointer",borderRadius:"2px",backgroundColor:n.colors.secondaryMain,color:"#ffffff",fontSize:"12px",...null!==(t=e.sx)&&void 0!==t?t:{}},children:(0,r.jsx)(i.x6,{id:"CK1KXz"})})}},26235:(e,t,n)=>{n.d(t,{A:()=>b});var i=n(54711),a=n(72296),o=n(98152),r=n(33441),s=n(1054),c=n(79932),l=n(42148),d=n(19957),u=n(2281),p=n(2777),x=n(20361);const h=async e=>{let{batch_id:t,chunk:n,canisterId:i}=e;return(await(0,p.iZ)(i,!0)).create_chunk({batch_id:t,content:[...new Uint8Array(await n.arrayBuffer())]})};var m=n(18406),f=n(81863),g=n(62474),j=n(37012);function A(){return(0,j.jsx)("svg",{width:"58",height:"38",viewBox:"0 0 58 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,j.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 23.571C0 31.2176 5.94742 37.475 13.4688 37.9699V37.9996H14.2013C14.2775 38.0008 14.3539 38.0014 14.4304 38.0014C14.5069 38.0014 14.5832 38.0008 14.6595 37.9996H44.2536V37.9797C44.4916 37.9934 44.7314 38.0004 44.9729 38.0004C51.7471 38.0004 57.2387 32.5088 57.2387 25.7346C57.2387 19.0745 51.9306 13.6542 45.3142 13.4734C43.6604 5.77266 36.8138 0 28.6189 0C22.0403 0 16.3306 3.72016 13.4787 9.17151C5.95265 9.66151 0 15.9211 0 23.571ZM28.6797 9.62109L39.5638 20.5052H33.0098V31.2837H24.3516V20.5052H17.7956L28.6797 9.62109Z",fill:"#4F5A84"})})}const v=(0,f.A)((e=>({fileName:{padding:"0 40px",...e.mixins.overflowEllipsis2}}))),b=(0,a.forwardRef)(((e,t)=>{var n;let{onUploaded:f,maxSize:b=10485760,accept:y,types:w=[],placeholder:k,imageProps:C,beforeUpload:q,canisterId:I,uploadImmediately:R=!0,onFileSelected:S,onFileError:_,disabled:N,base64:T,uploadWithIdentity:z=!1,minHeight:F,...P}=e;const L=v(),W=(0,o.A)(),[B,H]=(0,a.useState)(null),[G,M]=(0,a.useState)(""),[D,O]=(0,a.useState)(""),[V,Q]=(0,a.useState)(""),[Z,E]=(0,a.useState)(""),[U,Y]=(0,a.useState)(""),[K,X]=function(e){let{fileType:t}=e;const[n,o]=(0,a.useState)(""),[r,s]=(0,a.useState)(!1),[c,l]=(0,a.useState)(""),[d,m]=(0,a.useState)(BigInt(0)),f=async e=>{var n;let{file:a,canisterId:c}=e;if(r)return;s(!0);const f=await(0,p.iZ)(c,!0),g=(0,x.Pk)(await f.create_batch()),j=null===(n=g.data)||void 0===n?void 0:n.batch_id;if(!j&&j!==BigInt(0))return o(i.Ru._({id:"rZAlWG",values:{0:g.message?", ".concat(g.message):""}})),void s(!1);const A=[],v=7e5;for(let t=0;t<a.size;t+=v){const e=a.slice(t,t+v);A.push(h({batch_id:j,chunk:e,canisterId:c}))}const b=await Promise.all(A).catch((e=>{console.error(e),o(i.Ru._({id:"8mQYDS"})),s(!1)}));if(!b)return o(i.Ru._({id:"8mQYDS"})),void s(!1);await f.commit_batch({batch_id:j,chunk_ids:b.map((e=>{let{chunk_id:t}=e;return t})),content_type:a.type}),s(!1);const y=u.Nm===u.pG.IC?"https://".concat(null!==c&&void 0!==c?c:u.Tc,".raw.icp0.io/").concat(j):u.Nm===u.pG.LOCAL?"http://localhost:3000/dfx_image/".concat(j,"?canisterId=").concat(null!==c&&void 0!==c?c:u.Tc):"".concat(u.Hc,"/").concat(j,"?canisterId=").concat(null!==c&&void 0!==c?c:u.Tc);return l(y),m(j),{filePath:y,batchId:d,fileType:t}};return(0,a.useMemo)((()=>[{loading:r,error:n,data:{filePath:c,batchId:d,fileType:t}},f]),[r,c,d,f,t])}({fileType:G}),J=(0,a.useRef)(null),{loading:$,error:ee,data:{filePath:te,batchId:ne}}=K,ie={...P,defaultValue:void 0};async function ae(){if(B)return await X({file:B,canisterId:I})}(0,a.useEffect)((()=>{te&&O(te)}),[te]),(0,a.useEffect)((()=>{P.defaultValue&&Y(P.defaultValue)}),[P]),(0,a.useEffect)((()=>{D&&(Y(D),f&&f({batch_id:ne,file_path:D,file_type:G}))}),[D,G]),(0,a.useEffect)((()=>{_&&_(Z)}),[Z]),(0,a.useImperativeHandle)(t,(()=>({uploadCb:ae})),[X,B,ae]);return(0,j.jsxs)(r.Ay,{container:!0,flexDirection:"column",justifyContent:"center",alignItems:"center",sx:{width:"100%",height:"100%",border:"1px dashed #4f5a84",borderRadius:"8px",position:"relative",padding:"10px",minHeight:null!==F&&void 0!==F?F:"auto"},children:[B?"image"===G&&U?(0,j.jsx)("img",{src:U,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",maxWidth:d.Fr?"140px":"160px",maxHeight:d.Fr?"140px":"160px",...null!==(n=null===C||void 0===C?void 0:C.style)&&void 0!==n?n:{}}}):(0,j.jsx)(s.A,{className:L.fileName,children:V}):(0,j.jsx)(A,{}),(0,j.jsx)(c.A,{...ie,sx:{display:$?"none":"block",position:"absolute",width:"100%",height:"100%",zIndex:5,top:0,left:0,background:"transparent","& div":{background:"transparent"},"& fieldset":{display:"none"},"& input":{opacity:0,height:"100%",cursor:"pointer",background:"transparent"},"& label":{opacity:0},"& .MuiOutlinedInput-root":{width:"100%",height:"100%"}},type:"file",inputProps:{accept:y},title:"",onChange:async e=>{var t,n;if(N)return;e.preventDefault();const a=null===(t=e.target.files)||void 0===t?void 0:t[0];let o=(0,m.ti)(null!==(n=null===a||void 0===a?void 0:a.type)&&void 0!==n?n:"");if("other"===o||"unKnow"===o){var r,s;const e=null!==(r=null===a||void 0===a||null===(s=a.name)||void 0===s?void 0:s.split("."))&&void 0!==r?r:[];o=e[e.length-1]}if(!a)return void E(i.Ru._({id:"hqCwRf"}));if(w.length&&!w.includes(o))return void E(i.Ru._({id:"dzCoIa"}));if(E(""),b&&a.size>b)return void E(i.Ru._({id:"ADgiFR",values:{maxSize:b}}));E(""),M(o),Q(a.name),S&&S(a);let c=!0;if(q&&(c=q(a)),c)if(H(a),T){if("image"===o){const e=new FileReader;e.readAsDataURL(a),e.onload=function(t){"load"===t.type&&O(e.result)}}}else if(R){var l;if(z)null===J||void 0===J||null===(l=J.current)||void 0===l||l.submit({file:a,canisterId:I});else X({file:a,canisterId:I})}else if("image"===o){const e=new FileReader;e.readAsDataURL(a),e.onload=function(t){"load"===t.type&&Y(e.result)}}}}),""===U&&k?(0,j.jsx)(s.A,{sx:{marginTop:"5px"},children:k}):null,Z||ee?(0,j.jsx)(s.A,{mt:"4px",sx:{color:W.colors.errorMain,textAlign:"center"},children:Z||ee}):null,$&&(0,j.jsx)(l.A,{loading:$,maskBorderRadius:"12px"}),z?(0,j.jsx)(g.A,{ref:J,onSubmit:async(e,t,n)=>{let{loading:i}=t,{file:a,canisterId:o}=n;!i&&a&&await X({file:a,canisterId:o})}}):null]})}))},58051:(e,t,n)=>{n.d(t,{CM:()=>r,CP:()=>s});var i=n(72296),a=n(60816),o=n(40112);function r(){const e=(0,a.jL)();return[(0,a.GV)((e=>e.nft.userSelectedCanisters)),(0,i.useCallback)((t=>{e((0,o.IZ)(t))}),[e]),(0,i.useCallback)((t=>{e((0,o.y1)(t))}),[e])]}function s(){const e=(0,a.jL)(),t=(0,a.GV)((e=>e.nft.importedNFTs)),n=(0,i.useCallback)((t=>{e((0,o.i_)(t))}),[e]),r=(0,i.useCallback)((t=>{e((0,o.gw)({canisterId:t}))}),[e]);return(0,i.useMemo)((()=>({nfts:t,importNFT:n,deleteNFT:r})),[t,n,r])}},18406:(e,t,n)=>{function i(e){return function(e){return!!e.match("image.*")}(e)?"image":function(e){return!!e.match("video.*")}(e)?"video":function(e){return!!e.match("audio.*")}(e)?"audio":function(e){return"application/json"===e}(e)||function(e){return"application/pdf"===e}(e)||function(e){return"text/plain"===e}(e)||function(e){return"text/javascript"===e}(e)||function(e){return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===e||"application/vnd.ms-excel"===e}(e)||function(e){return"application/vnd.openxmlformats-officedocument.wordprocessingml.document"===e||"application/msword"===e}(e)?"other":"unKnow"}n.d(t,{ti:()=>i})},8826:(e,t,n)=>{n.r(t),n.d(t,{default:()=>He});var i=n(3481),a=n(54711),o=n(72296),r=n(77500),s=n(1054),c=n(27312),l=n(11871),d=n(33441),u=n(81863),p=n(69770),x=n(86100),h=n(83024),m=n(3232),f=n(70202),g=n(46185),j=n(37012);function A(){return(0,j.jsxs)(r.A,{sx:{position:"relative",width:"70px",height:"28px"},children:[(0,j.jsx)(r.A,{sx:{position:"absolute",top:"0",left:0,background:"rgba(17, 25, 54, 0.5)",width:"70px",height:"28px",borderRadius:"8px"}}),(0,j.jsx)(r.A,{sx:{position:"absolute",top:"0",left:0,width:"100%",height:"100%"},children:(0,j.jsx)(d.Ay,{container:!0,alignItems:"center",justifyContent:"center",sx:{width:"100%",height:"100%"},children:(0,j.jsx)(s.A,{color:"text.primary",fontWeight:"600",children:(0,j.jsx)(i.x6,{id:"HhVDr2"})})})})]})}const v=(0,u.A)((e=>({desc:{...(0,x.g4)(e)?{color:e.colors.darkTextTertiary}:{},lineHeight:"20px",fontSize:"12px",wordBreak:"break-all",...e.mixins.overflowEllipsis2},positionSVG:{"& svg":{width:"100%",height:"auto"}}})));function b(e){let{nft:t,onCardClick:n,showDetails:i=!0}=e;const a=v(),o=(0,p.A)(),c="dark"===o.customization.mode,u=(0,m.k)(t),{result:x}=(0,h.eY)(t.cId,t.tokenId),b=!!x;return(0,j.jsxs)(l.Am,{level:5,sx:{position:"relative",padding:"12px",cursor:"pointer",...c?{}:{background:"#f5f5f5"}},onClick:()=>n(t),children:[(0,j.jsxs)(d.Ay,{sx:{position:"relative",background:o.palette.background.level2,borderRadius:"8px"},children:[(0,j.jsx)(d.Ay,{container:!0,justifyContent:"center",children:(0,j.jsx)(f.A,{metadata:u})}),b?(0,j.jsx)(r.A,{sx:{position:"absolute",top:"8px",right:"8px",width:"70px",height:"28px"},children:(0,j.jsx)(A,{})}):null]}),(0,j.jsxs)(r.A,{mt:2,children:[(0,j.jsx)(s.A,{variant:"h4",color:"textPrimary",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t.name}),(0,j.jsx)(r.A,{mt:1,children:(0,j.jsxs)(d.Ay,{container:!0,children:[(0,j.jsx)(d.Ay,{item:!0,xs:!0,children:(0,j.jsxs)(s.A,{children:["#",Number(t.tokenId)]})}),b?(0,j.jsx)(d.Ay,{item:!0,children:(0,j.jsx)(g.A,{price:null===x||void 0===x?void 0:x.price,fontSize:"16px"})}):null]})}),i?(0,j.jsx)(d.Ay,{mt:2,container:!0,flexDirection:"column",children:(0,j.jsx)(d.Ay,{mt:1,sx:{height:"40px"},children:(0,j.jsx)(s.A,{className:a.desc,children:t.introduction})})}):null]})]})}var y=n(97260),w=n(12852),k=n(84285),C=n(67982),q=n(88592),I=n(62916);var R=n(76571),S=n(57448),_=n(48431),N=n(94992),T=n(93469),z=n(98868),F=n(42906),P=n(18507),L=n(11149),W=n.n(L),B=n(53922),H=n(56862),G=n(72794),M=n(50972);var D=n(4102),O=n(98152),V=n(7535),Q=n(12288),Z=n(9533),E=n(74931),U=n(85066),Y=n(27895),K=n(55484),X=n(2281),J=n(65324),$=n(62474),ee=n(16443),te=n(61361),ne=n(18951),ie=n(210),ae=n(34510),oe=n(32880),re=n(42402),se=n(17471);function ce(e){let{canisterId:t,cyclesBalance:n,open:c,onClose:u,onTopUpSuccess:p}=e;const[x,h]=(0,o.useState)(""),m=(0,ee.Le)(),f=(0,w.gH)(),{result:g}=(0,re.n)({canisterId:X.Q4.canisterId,address:m}),[A,v]=(0,K.dx)(),[b]=(0,K.I5)(),[y]=(0,K.dX)(),k=(0,o.useMemo)((()=>(0,U.t)(g,X.Q4.decimals).toString()),[g]),C=(0,o.useMemo)((()=>x&&f&&new Y.A(x).minus(2e-4).isGreaterThan(0)?new Y.A(new Y.A(x).minus(2e-4).multipliedBy(f).toFixed(4)).toFormat():0),[x,f]);let q="";return new Y.A(x).minus(null!==k&&void 0!==k?k:0).toNumber()>0&&(q=a.Ru._({id:"N2DUxS"})),new Y.A(x).isGreaterThan(2e-4)||(q=a.Ru._({id:"zWRUJN"})),x||(q=a.Ru._({id:"iPMIoT"})),(0,j.jsxs)(se.A,{title:a.Ru._({id:"AIZhBz"}),open:c,onClose:u,children:[(0,j.jsx)(l.Tv,{name:"amount",label:a.Ru._({id:"08Z2qC"}),value:x,onChange:e=>{h(e.target.value)},fullWidth:!0,numericProps:{decimalScale:Number(X.Q4.decimals),allowNegative:!1,maxLength:15},InputProps:{endAdornment:(0,j.jsx)(E.A,{position:"end",children:(0,j.jsx)(s.A,{children:"".concat(C," T Cycles")})})}}),(0,j.jsxs)(r.A,{mt:1,children:[(0,j.jsxs)(d.Ay,{container:!0,alignItems:"center",children:[(0,j.jsxs)(s.A,{children:["Balance: ","".concat(new Y.A(k).toFormat()," ICP")]}),(0,j.jsx)(ne.A,{sx:{marginLeft:"6px"},onClick:e=>{e.stopPropagation(),k&&h(k)}})]}),(0,j.jsx)(r.A,{mt:1,children:(0,j.jsxs)(s.A,{children:[(0,j.jsx)(i.x6,{id:"booixm"}),"".concat((0,M.rr)(n)," Cycles")]})})]}),(0,j.jsx)(r.A,{mt:2,children:(0,j.jsx)($.A,{onSubmit:async e=>{A();const n=J.p.fromText(t),i=J.p.fromText(X.Fy);if(e&&m){const t=oe.nG.fromPrincipal({principal:i,subAccount:oe.sd.fromPrincipal(n)}).toHex();try{const{data:i}=await(0,ie.FY)({from:m.toString(),canisterId:X.Q4.canisterId,to:t,memo:BigInt("0x50555054"),amount:(0,U.N)(x,X.Q4.decimals).minus((0,U.N)(2e-4,X.Q4.decimals)),decimals:X.Q4.decimals});i?(await(await(0,ae.BZ)(e)).notify_dfx({to_canister:J.p.fromText(X.Fy),block_height:i,max_fee:{e8s:BigInt(1e4)},to_subaccount:[[...oe.sd.fromPrincipal(n).toUint8Array()]],from_subaccount:[]}),p&&p(),b(a.Ru._({id:"HQIdbW"}))):y(a.Ru._({id:"HXQcbN"}))}catch(o){y(a.Ru._({id:"HXQcbN"})),console.error(o)}}else console.error("No http agent founded");v()},children:e=>{let{submit:t}=e;return(0,j.jsx)(te.A,{variant:"contained",sx:{my:3},fullWidth:!0,color:"primary",type:"submit",size:"large",disabled:!!q,onClick:t,children:q||(0,j.jsx)(i.x6,{id:"CIqzye"})})}})})]})}var le=n(65810),de=n(26235),ue=n(88308);const pe=(0,u.A)((e=>({infoCard:{display:"inline-block",background:e.palette.background.level4,borderRadius:"12px",padding:"20px"},wrapper:{background:e.palette.background.level2,padding:"30px",borderRadius:"12px",display:"grid",gridTemplateColumns:"85px auto fit-content(260px)",[e.breakpoints.down("md")]:{gridTemplateColumns:"1fr",padding:"10px"}},content:{paddingLeft:"30px",[e.breakpoints.down("md")]:{paddingLeft:"0px",marginTop:"10px"}},name:{fontSize:"28px",fontWeight:"700",color:e.palette.text.primary,[e.breakpoints.down("md")]:{fontSize:"18px",fontWeight:"500"}},description:{maxWidth:"80%",width:"100%",[e.breakpoints.down("md")]:{maxWidth:"100%"}},button:{[e.breakpoints.down("md")]:{marginTop:"10px"}}})));function xe(e){let{canisterId:t,open:n,onClose:a}=e;const c=(0,o.useRef)(null),[d,u]=(0,o.useState)(null),[p,x]=(0,o.useState)(""),[h]=(0,K.cO)();return(0,j.jsxs)(l.aF,{open:n,onClose:a,children:[(0,j.jsxs)(r.A,{sx:{padding:"20px"},children:[(0,j.jsx)(de.A,{ref:c,maxSize:204800,types:["image"],accept:".jpeg, .png, .jpg, .gif, .apng",placeholder:"Upload your file",canisterId:t,uploadImmediately:!1,onFileSelected:e=>{u(e)},onFileError:e=>{x(e)},uploadWithIdentity:!0,minHeight:"220px"}),(0,j.jsx)(s.A,{sx:{marginTop:"5px"},children:(0,j.jsx)(i.x6,{id:"l194o4"})})]}),(0,j.jsx)(r.A,{sx:{margin:"20px 0 0 0"},children:(0,j.jsx)(D.A,{fullWidth:!0,variant:"contained",onClick:async()=>{var e,n;const{filePath:i}=null!==(e=await(null===(n=c.current)||void 0===n?void 0:n.uploadCb()))&&void 0!==e?e:{};if(i){const{status:e,message:n}=await(0,y.HB)(t,i);e===Q.i.ERROR?h(null!==n&&void 0!==n?n:"Failed to upload, please try again later",K.XI):(h("Upload successfully",K.mh),a&&a())}else h("Failed to upload, please try again later",K.XI)},disabled:!d||!!p,children:(0,j.jsx)(i.x6,{id:"ONWvwQ"})})})]})}function he(e){let{details:t,cycles:n,count:a,loading:l}=e;const u=pe(),p=(0,c.W6)(),x=(0,w.F7)(),h=(0,O.A)(),m=(0,V.A)(h.breakpoints.down("sm")),f=(null===t||void 0===t?void 0:t.owner)===x,[g,A]=(0,o.useState)(!1),[v,b]=(0,o.useState)(!1);return(0,j.jsxs)(j.Fragment,{children:[l?(0,j.jsxs)(le.A,{children:[(0,j.jsx)("div",{}),(0,j.jsx)("div",{}),(0,j.jsx)("div",{}),(0,j.jsx)("div",{}),(0,j.jsx)("div",{}),(0,j.jsx)("div",{}),(0,j.jsx)("div",{}),(0,j.jsx)("div",{})]}):(0,j.jsxs)(r.A,{className:u.wrapper,children:[(0,j.jsx)(ue.A,{src:t.image,sx:{width:"85px",height:"85px"},onClick:()=>{f&&b(!0)}}),(0,j.jsxs)(r.A,{className:u.content,children:[(0,j.jsx)(s.A,{className:u.name,children:t.name}),(0,j.jsx)(r.A,{mt:"20px",children:(0,j.jsxs)(d.Ay,{sx:{width:"100%"},container:!0,alignItems:"center",children:[(0,j.jsx)(s.A,{color:"text.primary",children:(0,j.jsx)(i.x6,{id:"KQoRhF"})}),(0,j.jsx)(d.Ay,{item:!0,xs:!0,ml:"5px",children:(0,j.jsx)(Z.A,{label:t.cid,value:"".concat(X.xP,"/nft/canister/details/").concat(t.cid)})})]})}),(0,j.jsx)(r.A,{mt:1,children:(0,j.jsx)(s.A,{color:"text.tertiary",className:u.description,children:t.introduction})}),(0,j.jsxs)(d.Ay,{container:!0,mt:"20px",children:[(0,j.jsx)(D.A,{variant:"contained",size:m?"small":"large",sx:{marginRight:"12px"},onClick:()=>{p.push("/marketplace/NFT/".concat(t.cid))},children:(0,j.jsx)(i.x6,{id:"Zt5PUS"})}),f?(0,j.jsx)(D.A,{variant:"contained",size:m?"small":"large",color:"secondary",sx:{marginRight:"12px"},onClick:()=>{p.push("/console/nft/mint?canister=".concat(t.cid))},children:(0,j.jsx)(i.x6,{id:"MHyhAs"})}):null,(0,j.jsx)(D.A,{variant:"contained",size:m?"small":"large",color:"secondary",onClick:()=>A(!0),children:(0,j.jsx)(i.x6,{id:"Ozz1kv"})})]})]}),(0,j.jsxs)(r.A,{className:u.button,children:[(0,j.jsxs)(r.A,{className:u.infoCard,sx:{marginRight:"20px"},children:[(0,j.jsx)(s.A,{color:"text.primary",fontWeight:700,fontSize:"18px",children:(0,M.rr)(n)}),(0,j.jsx)(s.A,{sx:{marginTop:"4px"},children:(0,j.jsx)(i.x6,{id:"pWjHxR"})})]}),(0,j.jsxs)(r.A,{className:u.infoCard,children:[(0,j.jsx)(s.A,{color:"text.primary",fontWeight:700,fontSize:"18px",align:"center",children:Number(a)}),(0,j.jsx)(s.A,{sx:{marginTop:"4px"},children:(0,j.jsx)(i.x6,{id:"uluiae"})})]})]})]}),(0,j.jsx)(ce,{open:g,onClose:()=>A(!1),onTopUpSuccess:()=>A(!1),cyclesBalance:n,canisterId:t.cid}),(0,j.jsx)(xe,{canisterId:t.cid,open:v,onClose:()=>b(!1)})]})}var me=n(31877),fe=n(58051),ge=n(28039);var je=n(41652);function Ae(e){let{image:t}=e;return(0,j.jsx)(je.A,{src:null!==t&&void 0!==t?t:"",boxSX:{cursor:"pointer"}})}var ve=n(79932),be=n(92213),ye=n(20361),we=n(86307),ke=n(3334),Ce=n(84076),qe=n(2777);const Ie=(0,u.A)((e=>({warningText:{color:e.palette.warning.dark},inputBox:{border:"1px solid #313A5A",background:e.palette.background.level4,borderRadius:"8px",padding:"14px 16px","& input::placeholder":{color:e.palette.primary[400]}},description:{fontSize:"12px",wordBreak:"break-all",maxHeight:"90px",overflow:"hidden",textOverflow:"ellipsis",boxOrient:"vertical",lineClamp:"5",display:"-webkit-box"}})));function Re(e){let{image:t,collection:n,open:c,onClose:l,nft:u,index:x,onTransferSuccess:h}=e;const m=Ie(),f=(0,w.F7)(),g=(0,p.A)(),[A]=(0,K.I5)(),[v]=(0,K.dX)(),[b,y]=(0,o.useState)(""),k=(0,ee.Le)(),C=(0,o.useCallback)((async(e,t)=>{let{loading:n,closeLoading:i}=t;if(n||!k||!b)return;const o=(0,ye.Pk)(await(await(0,qe.ni)(u.canister,!0)).transfer({to:b&&(0,we.R)(b)?{principal:J.p.fromText(b)}:{address:b},token:u.id,notify:!1,from:{principal:k},memo:[],subaccount:[],amount:BigInt(1)}));i(),"ok"===o.status?(A(a.Ru._({id:"uI5++B"})),h&&h(o)):v((0,Ce.If)(o.message))}),[u,b]),q=(0,o.useMemo)((()=>{if(f===b)return(0,j.jsx)("span",{className:m.warningText,children:(0,j.jsx)(i.x6,{id:"8oLpSL"})})}),[f,b]),I=(0,o.useCallback)((()=>{y(""),l&&l()}),[l,y]),R=(0,o.useMemo)((()=>b?(0,ke.O)(b)||(0,we.R)(b)?void 0:a.Ru._({id:"Kw1+qc"}):a.Ru._({id:"mx9r6b"})),[b]);return c?(0,j.jsxs)(se.A,{open:c,onClose:I,title:a.Ru._({id:"4NcGjG"}),children:[(0,j.jsxs)(d.Ay,{container:!0,sx:{position:"relative",padding:"12px",background:g.palette.background.level4,borderRadius:"12px"},children:[(0,j.jsx)(d.Ay,{item:!0,sx:{minWidth:"140px"},children:(0,j.jsx)(d.Ay,{container:!0,alignItems:"center",justifyContent:"center",sx:{position:"relative",background:g.palette.background.level1,borderRadius:"8px",width:"100%",height:"100%"},children:(0,j.jsx)(je.A,{src:t})})}),(0,j.jsx)(d.Ay,{item:!0,xs:!0,sx:{height:"120px",marginLeft:"20px"},flexDirection:"column",children:(0,j.jsxs)(r.A,{children:[(0,j.jsx)(s.A,{color:"text.primary",component:"span",children:null===n||void 0===n?void 0:n.name}),(0,j.jsxs)(s.A,{color:"text.primary",component:"span",sx:{marginLeft:"10px"},children:["#",x?x+1:"--"]})]})})]}),(0,j.jsxs)(d.Ay,{container:!0,mt:"20px",children:[(0,j.jsxs)(d.Ay,{item:!0,xs:12,className:m.inputBox,children:[(0,j.jsx)(s.A,{children:(0,j.jsx)(i.x6,{id:"ysunuR"})}),(0,j.jsx)(ve.A,{variant:"standard",placeholder:a.Ru._({id:"m3S0zY"}),onChange:e=>{let{target:{value:t}}=e;return y(t)},helperText:q,fullWidth:!0,autoComplete:"To",InputProps:{disableUnderline:!0}})]}),(0,j.jsx)(d.Ay,{item:!0,xs:12,mt:"10px",children:(0,j.jsx)(s.A,{color:"text.warning",children:(0,j.jsx)(i.x6,{id:"GGfi+A"})})}),(0,j.jsx)(d.Ay,{item:!0,xs:12,mt:3,children:(0,j.jsx)($.A,{onSubmit:C,children:e=>{let{submit:t,loading:n}=e;return(0,j.jsx)(D.A,{variant:"contained",fullWidth:!0,color:"primary",size:"large",disabled:n||!!R,onClick:t,startIcon:n?(0,j.jsx)(be.A,{color:"inherit",size:30}):null,children:R||(n?"":a.Ru._({id:"7VpPHA"}))})}})})]})]}):null}function Se(e){let{nft:t,collection:n,setReload:i}=e;const a=(0,p.A)(),{index:c}=(0,ge.Z8)(t.id),u=function(e,t,n,i){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:10;const o="?".concat(arguments.length>4&&void 0!==arguments[4]?arguments[4]:"");if("4ggk4-mqaaa-aaaae-qad6q-cai"===e&&!1===i)return"https://images.entrepot.app/t/dexpm-6aaaa-aaaal-qbgrq-cai/".concat((0,ge.zE)("dexpm-6aaaa-aaaal-qbgrq-cai",t)).concat(o,"&cache=").concat(a);if("jeghr-iaaaa-aaaah-qco7q-cai"===e)return"https://fl5nr-xiaaa-aaaai-qbjmq-cai.raw.icp0.io/nft/".concat(t);if("bxdf4-baaaa-aaaah-qaruq-cai"===e)return"https://qcg3w-tyaaa-aaaah-qakea-cai.raw.icp0.io/Token/".concat(t);if("y3b7h-siaaa-aaaah-qcnwa-cai"===e)return"https://4nvhy-3qaaa-aaaah-qcnoq-cai.raw.icp0.io/Token/".concat(t);if("3db6u-aiaaa-aaaah-qbjbq-cai"===e)return"https://d3ttm-qaaaa-aaaai-qam4a-cai.raw.icp0.io?tokenId=".concat(t);if("q6hjz-kyaaa-aaaah-qcama-cai"===e)return"https://".concat(["efqhu-yqaaa-aaaaf-qaeda-cai","ecrba-viaaa-aaaaf-qaedq-cai","fp7fo-2aaaa-aaaaf-qaeea-cai","fi6d2-xyaaa-aaaaf-qaeeq-cai","fb5ig-bqaaa-aaaaf-qaefa-cai","fg4os-miaaa-aaaaf-qaefq-cai","ft377-naaaa-aaaaf-qaega-cai","fu2zl-ayaaa-aaaaf-qaegq-cai","f5zsx-wqaaa-aaaaf-qaeha-cai","f2yud-3iaaa-aaaaf-qaehq-cai"][(r=t)%10],".raw.icp0.io/Token/").concat(r);var r;if("pk6rk-6aaaa-aaaae-qaazq-cai"===e)return i?"https://".concat(e,".raw.icp0.io/?tokenid=").concat(n):"https://images.entrepot.app/t/7budn-wqaaa-aaaah-qcsba-cai/".concat(n);if("dhiaa-ryaaa-aaaae-qabva-cai"===e)return i?"https://".concat(e,".raw.icp0.io/?tokenid=").concat(n):"https://images.entrepot.app/tnc/qtejr-pqaaa-aaaah-qcyvq-cai/".concat(n);if("skjpp-haaaa-aaaae-qac7q-cai"===e)return i?"https://".concat(e,".raw.icp0.io/?tokenid=").concat(n):"https://images.entrepot.app/tnc/wtwf2-biaaa-aaaam-qauoq-cai/".concat(n);if(i)return"https://".concat(e,".raw.icp0.io/?cc=0&tokenid=").concat(n);if("7i54s-nyaaa-aaaal-abomq-cai "===e){const e=(Math.random()+1).toString(36).substring(7);return"https://images.entrepot.app/t/7i54s-nyaaa-aaaal-abomq-cai /".concat(n,"?cache=").concat(a,"&cachebuster=").concat(e)}return"yrdz3-2yaaa-aaaah-qcvpa-cai"===e||"rw7qm-eiaaa-aaaak-aaiqq-cai"===e||"5movr-diaaa-aaaak-aaftq-cai"===e||"e3izy-jiaaa-aaaah-qacbq-cai"===e||"xjjax-uqaaa-aaaal-qbfgq-cai"===e?"https://images.entrepot.app/tnc/".concat(e,"/").concat(n).concat(o):"6wih6-siaaa-aaaah-qczva-cai"===e?"https://".concat(e,".raw.icp0.io/?cc").concat(Date.now(),"&type=thumbnail&tokenid=").concat(n).concat(o):"kss7i-hqaaa-aaaah-qbvmq-cai"===e?"https://".concat(e,".raw.icp0.io/?type=thumbnail&tokenid=").concat(n):"https://images.entrepot.app/t/".concat(e,"/").concat(n,"?cache=").concat(a)}(t.canister,null!==c&&void 0!==c?c:0,t.id,!1),[x,h]=(0,o.useState)(!1);return(0,j.jsxs)(l.Am,{level:5,sx:{position:"relative",padding:"12px",cursor:"pointer"},children:[(0,j.jsx)(d.Ay,{sx:{position:"relative",background:a.palette.background.level2,borderRadius:"8px"},children:(0,j.jsx)(d.Ay,{container:!0,justifyContent:"center",children:(0,j.jsx)(Ae,{image:u})})}),(0,j.jsxs)(r.A,{mt:2,children:[(0,j.jsx)(s.A,{variant:"h4",color:"textPrimary",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:null===n||void 0===n?void 0:n.name}),(0,j.jsx)(r.A,{mt:1,children:(0,j.jsx)(d.Ay,{container:!0,children:(0,j.jsx)(d.Ay,{item:!0,xs:!0,children:(0,j.jsxs)(s.A,{children:["#",c?c+1:"--"]})})})}),(0,j.jsx)(r.A,{mt:1,sx:{display:"flex",justifyContent:"flex-end"},children:(0,j.jsx)(D.A,{variant:"contained",size:"medium",onClick:()=>{h(!0)},children:"Transfer"})})]}),x?(0,j.jsx)(Re,{nft:t,image:u,open:x,index:c,onTransferSuccess:()=>{i&&i()},onClose:()=>h(!1),collection:n}):null]})}function _e(e){let{nfts:t,collection:n,loading:i,setReload:a}=e;return(0,j.jsxs)(r.A,{sx:{position:"relative",minHeight:"300px"},children:[(0,j.jsx)(r.A,{sx:{position:"relative",display:"grid",gridGap:"10px 20px",gridTemplateColumns:"1fr 1fr 1fr",width:"fit-content","@media (max-width:479px)":{position:"static",right:"0",gridGap:"20px 10px",gridTemplateColumns:"1fr",width:"auto"},"@media (min-width:480px) and (max-width:719px)":{position:"static",right:"0",gridGap:"20px 10px",gridTemplateColumns:"1fr 1fr",width:"auto"},"@media (min-width:720px) and (max-width:960px)":{position:"static",right:"0",gridGap:"20px 10px",gridTemplateColumns:"1fr 1fr 1fr",width:"auto"},"@media (min-width:961px) and (max-width:1240px)":{position:"static",right:"0",gridGap:"20px 10px",gridTemplateColumns:"1fr 1fr 1fr 1fr",width:"auto"},"@media (min-width:1241px) ":{position:"static",right:"0",gridGap:"20px 10px",gridTemplateColumns:"repeat(6, 1fr)",width:"auto"}},children:null===t||void 0===t?void 0:t.map((e=>(0,j.jsx)(Se,{nft:e,collection:n,setReload:a},e.id)))}),t&&!i&&0===t.length?(0,j.jsx)(l.YQ,{}):null,i?(0,j.jsx)(r.A,{sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},children:(0,j.jsx)(l.DN,{loading:i,mask:!0})}):null]})}var Ne=n(59155),Te=function(e,t,n,i){return new(n||(n=Promise))((function(a,o){function r(e){try{c(i.next(e))}catch(t){o(t)}}function s(e){try{c(i.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}c((i=i.apply(e,t||[])).next())}))};var ze=function(e,t,n,i){return new(n||(n=Promise))((function(a,o){function r(e){try{c(i.next(e))}catch(t){o(t)}}function s(e){try{c(i.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}c((i=i.apply(e,t||[])).next())}))};const Fe=(0,u.A)((e=>({infoCard:{display:"inline-block",background:e.palette.background.level4,borderRadius:"12px",padding:"20px"},wrapper:{background:e.palette.background.level2,padding:"30px",borderRadius:"12px",display:"grid",gridTemplateColumns:"85px auto fit-content(260px)",[e.breakpoints.down("md")]:{gridTemplateColumns:"1fr",padding:"10px"}},content:{paddingLeft:"30px",[e.breakpoints.down("md")]:{paddingLeft:"0px",marginTop:"10px"}},name:{fontSize:"28px",fontWeight:"700",color:e.palette.text.primary,[e.breakpoints.down("md")]:{fontSize:"18px",fontWeight:"500"}},description:{maxWidth:"80%",width:"100%",[e.breakpoints.down("md")]:{maxWidth:"100%"}},button:{[e.breakpoints.down("md")]:{marginTop:"10px"}}})));function Pe(e){let{collection:t,count:n,loading:a}=e;const o=Fe();return(0,j.jsx)(j.Fragment,{children:a||!t?(0,j.jsxs)(le.A,{children:[(0,j.jsx)("div",{}),(0,j.jsx)("div",{}),(0,j.jsx)("div",{}),(0,j.jsx)("div",{}),(0,j.jsx)("div",{}),(0,j.jsx)("div",{}),(0,j.jsx)("div",{}),(0,j.jsx)("div",{})]}):(0,j.jsxs)(r.A,{className:o.wrapper,children:[(0,j.jsx)(ue.A,{src:t.avatar,sx:{width:"85px",height:"85px"}}),(0,j.jsxs)(r.A,{className:o.content,children:[(0,j.jsx)(s.A,{className:o.name,children:t.name}),(0,j.jsx)(r.A,{mt:"20px",children:(0,j.jsxs)(d.Ay,{sx:{width:"100%"},container:!0,alignItems:"center",children:[(0,j.jsx)(s.A,{color:"text.primary",children:(0,j.jsx)(i.x6,{id:"KQoRhF"})}),(0,j.jsx)(d.Ay,{item:!0,xs:!0,ml:"5px",children:(0,j.jsx)(s.A,{children:t.id})})]})}),(0,j.jsx)(r.A,{mt:1,children:(0,j.jsx)(s.A,{color:"text.tertiary",className:o.description,children:t.description})})]}),(0,j.jsx)(r.A,{className:o.button,children:(0,j.jsxs)(r.A,{className:o.infoCard,children:[(0,j.jsx)(s.A,{color:"text.primary",fontWeight:700,fontSize:"18px",align:"center",children:Number(n)}),(0,j.jsx)(s.A,{sx:{marginTop:"4px"},children:(0,j.jsx)(i.x6,{id:"uluiae"})})]})})]})})}function Le(){const{id:e}=(0,c.g)(),t=(0,w.F7)(),[n,a]=(0,o.useState)(!1),{result:d,loading:u}=function(e,t){const n=(0,o.useCallback)((()=>Te(this,void 0,void 0,(function*(){if(!e)return;const t=yield fetch("https://us-central1-entrepot-api.cloudfunctions.net/api/user/".concat(e,"/all")).catch((()=>{}));return t?yield t.json():void 0}))),[e]);return(0,Ne.Pz)(n,t)}(t,n),{result:p}=function(){return(0,Ne.Pz)((0,o.useCallback)((()=>ze(this,void 0,void 0,(function*(){const e=yield fetch("https://us-central1-entrepot-api.cloudfunctions.net/api/collections").catch((()=>{}));if(e)return yield e.json()}))),[]))}(),x=(0,o.useMemo)((()=>{if(p)return p.find((t=>t.id===e))}),[p,e]),h=(0,o.useMemo)((()=>{if(d)return d.filter((t=>t.canister===e))}),[e,d]),m=(0,o.useMemo)((()=>h?h.length:"--"),[h]);return(0,j.jsx)(me.A,{children:(0,j.jsxs)(r.A,{children:[(0,j.jsx)(l.BI,{prevLink:"/wallet",prevLabel:(0,j.jsx)(i.x6,{id:"q6fkwG"}),currentLabel:(0,j.jsx)(i.x6,{id:"8Dh77Z"})}),(0,j.jsx)(r.A,{mt:2,children:(0,j.jsx)(Pe,{loading:!x,collection:x,count:null!==m&&void 0!==m?m:"--"})}),(0,j.jsx)(r.A,{mt:2,children:(0,j.jsxs)(l.Am,{level:2,children:[(0,j.jsx)(r.A,{mb:3,children:(0,j.jsx)(s.A,{fontWeight:"700",fontSize:"20px",color:"text.primary",component:"span",sx:{marginRight:"20px",cursor:"pointer"},children:"NFT List"})}),(0,j.jsx)(_e,{nfts:h,loading:u,collection:x,setReload:()=>a(!n)})]})})]})})}const We=[{key:"NFTs",label:a.Ru._({id:"8Dh77Z"}),component:function(e){let{canisterId:t}=e;const n=(0,c.W6)(),[i,a]=(0,o.useState)({pageNum:1,pageSize:24}),[s]=(0,C.g)(i.pageNum,i.pageSize),l=(0,w.F7)(),{result:d,loading:u}=(0,y.NB)(t,l,s,i.pageSize),{content:p,totalElements:x}=null!==d&&void 0!==d?d:{content:[],totalElements:0},h=(0,o.useCallback)((e=>{a(e)}),[a]),m=(0,o.useCallback)((e=>{n.push("/wallet/nft/view/".concat(t,"/").concat(e.tokenId))}),[n]);return(0,j.jsxs)(r.A,{sx:{position:"relative",minHeight:"300px"},children:[(0,j.jsx)(r.A,{sx:{position:"relative",display:"grid",gridGap:"10px 20px",gridTemplateColumns:"1fr 1fr 1fr",width:"fit-content","@media (max-width:479px)":{position:"static",right:"0",gridGap:"20px 10px",gridTemplateColumns:"1fr",width:"auto"},"@media (min-width:480px) and (max-width:719px)":{position:"static",right:"0",gridGap:"20px 10px",gridTemplateColumns:"1fr 1fr",width:"auto"},"@media (min-width:720px) and (max-width:960px)":{position:"static",right:"0",gridGap:"20px 10px",gridTemplateColumns:"1fr 1fr 1fr",width:"auto"},"@media (min-width:961px) and (max-width:1240px)":{position:"static",right:"0",gridGap:"20px 10px",gridTemplateColumns:"1fr 1fr 1fr 1fr",width:"auto"},"@media (min-width:1241px) ":{position:"static",right:"0",gridGap:"20px 10px",gridTemplateColumns:"repeat(6, 1fr)",width:"auto"}},children:p.map((e=>(0,j.jsx)(b,{canisterId:t,nft:e,onCardClick:m,showDetails:!1},Number(e.tokenId))))}),p&&!u&&0===p.length?(0,j.jsx)(k.A,{}):null,x&&0!==Number(x)?(0,j.jsx)(r.A,{mt:"12px",children:(0,j.jsx)(q.A,{count:Number(x),defaultPageSize:i.pageSize,onPageChange:h})}):null,u?(0,j.jsx)(r.A,{sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},children:(0,j.jsx)(I.A,{loading:u,mask:!0})}):null]})}},{key:"Transactions",label:a.Ru._({id:"4wyw8H"}),component:function(e){let{canisterId:t}=e;const[n,a]=(0,o.useState)(1),[r,c]=(0,C.g)(n,10),u=(0,w.F7)(),{result:p,loading:x}=(0,y.uq)(t,u,r,c);(0,o.useEffect)((()=>{a(1)}),[a]);const{content:h,totalElements:m}=(0,o.useMemo)((()=>null!==p&&void 0!==p?p:{totalElements:0,content:[],offset:0,limit:10}),[p]),f=(0,o.useCallback)((e=>{let{pageNum:t}=e;a(t)}),[a]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(R.A,{className:x?"with-loading":"",children:[(0,j.jsxs)(S.A,{children:[(0,j.jsx)(_.A,{children:(0,j.jsxs)(N.A,{children:[(0,j.jsx)(T.A,{children:(0,j.jsx)(i.x6,{id:"LhMjLm"})}),(0,j.jsx)(T.A,{children:(0,j.jsx)(i.x6,{id:"+zy2Nq"})}),(0,j.jsx)(T.A,{children:(0,j.jsx)(i.x6,{id:"6YtxFj"})}),(0,j.jsx)(T.A,{children:(0,j.jsx)(i.x6,{id:"qnxOZn"})}),(0,j.jsx)(T.A,{children:(0,j.jsx)(i.x6,{id:"ejVYRQ"})}),(0,j.jsx)(T.A,{children:(0,j.jsx)(i.x6,{id:"/jQctM"})}),(0,j.jsx)(T.A,{children:(0,j.jsx)(i.x6,{id:"Kbwvno"})})]})}),(0,j.jsx)(z.A,{children:h.map(((e,n)=>(0,j.jsxs)(N.A,{children:[(0,j.jsx)(T.A,{children:(0,j.jsx)(d.Ay,{container:!0,spacing:2,children:(0,j.jsx)(d.Ay,{item:!0,xs:12,children:(0,j.jsx)(s.A,{variant:"h6",children:(0,B.sZ)(e.time)})})})}),(0,j.jsx)(T.A,{children:(0,j.jsx)(s.A,{variant:"h6",children:W()((0,H.q)(e.txType))})}),(0,j.jsx)(T.A,{children:(0,j.jsx)(s.A,{children:e.tokenName})}),(0,j.jsx)(T.A,{children:(0,j.jsxs)(l.QW,{to:"/wallet/nft/view/".concat(t,"/").concat(e.tokenId),children:["#",e.tokenId]})}),(0,j.jsx)(T.A,{children:(0,j.jsx)(d.Ay,{container:!0,spacing:1,children:(0,j.jsx)(d.Ay,{item:!0,xs:12,children:(0,j.jsx)(s.A,{variant:"h6",children:(0,j.jsx)(P.A,{content:e.from,children:(0,G.m)(e.from,12)})})})})}),(0,j.jsx)(T.A,{children:(0,j.jsx)(d.Ay,{container:!0,spacing:1,children:(0,j.jsx)(d.Ay,{item:!0,xs:12,children:(0,j.jsx)(s.A,{variant:"h6",children:(0,j.jsx)(P.A,{content:e.to,children:(0,G.m)(e.to,12)})})})})}),(0,j.jsx)(T.A,{children:(0,j.jsx)(s.A,{variant:"h6",children:e.memo[0]?(0,M.GY)(Uint8Array.from(e.memo[0])):""})})]},"".concat(Number(e.tokenId),"_").concat(n))))})]}),0!==h.length||x?null:(0,j.jsx)(k.A,{}),(0,j.jsx)(F.A,{loading:x})]}),h.length?(0,j.jsx)(l.dK,{count:Number(m),onPageChange:f}):null]})}}];function Be(){const{id:e}=(0,c.g)(),t=(0,w.F7)(),{result:n,loading:a}=(0,y.Q9)(e),{result:d}=(0,y.iJ)(e),{result:u}=(0,y.Ny)(e,t),[p,x]=(0,o.useState)(We[0].key);return(0,j.jsx)(me.A,{children:(0,j.jsxs)(r.A,{children:[(0,j.jsx)(l.BI,{prevLabel:(0,j.jsx)(i.x6,{id:"q6fkwG"}),prevLink:"/wallet",currentLabel:(0,j.jsx)(i.x6,{id:"8Dh77Z"})}),(0,j.jsx)(r.A,{mt:2,children:(0,j.jsx)(he,{loading:a,details:null!==n&&void 0!==n?n:{},cycles:null!==d&&void 0!==d?d:BigInt(0),count:null!==u&&void 0!==u?u:BigInt(0)})}),(0,j.jsx)(r.A,{mt:2,children:(0,j.jsxs)(l.Am,{level:2,children:[(0,j.jsx)(r.A,{mb:3,children:We.map((e=>(0,j.jsx)(s.A,{fontWeight:"700",fontSize:"20px",color:p===e.key?"text.primary":"text.secondary",component:"span",sx:{marginRight:"20px",cursor:"pointer"},onClick:()=>x(e.key),children:e.label},e.key)))}),(()=>{var t,n;const i=null!==(t=null===(n=We.find((e=>e.key===p)))||void 0===n?void 0:n.component)&&void 0!==t?t:We[0].component;return(0,j.jsx)(i,{canisterId:e})})()]})})]})})}function He(){const{id:e}=(0,c.g)(),{nfts:t}=(0,fe.CP)();return(0,o.useMemo)((()=>!!t.find((t=>t.canisterId===e))),[t,e])?(0,j.jsx)(Le,{}):(0,j.jsx)(Be,{})}},23603:(e,t,n)=>{n.d(t,{A:()=>C});var i=n(64032),a=n(95265),o=n(72296),r=n(39189),s=n(58216),c=n(46987),l=n(82703),d=n(76724),u=n(35292),p=n(85953),x=n(1054),h=n(72786),m=n(48890);function f(e){return(0,m.Ay)("MuiLink",e)}const g=(0,h.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var j=n(63169),A=n(71987);const v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=e=>{let{theme:t,ownerState:n}=e;const i=(e=>v[e]||e)(n.color),a=(0,j.Yn)(t,"palette.".concat(i),!1)||n.color,o=(0,j.Yn)(t,"palette.".concat(i,"Channel"));return"vars"in t&&o?"rgba(".concat(o," / 0.4)"):(0,A.X4)(a,.4)};var y=n(37012);const w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=(0,l.Ay)(x.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t["underline".concat((0,c.A)(n.underline))],"button"===n.component&&t.button]}})((e=>{let{theme:t,ownerState:n}=e;return(0,a.A)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,a.A)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:b({theme:t,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(g.focusVisible)]:{outline:"auto"}})})),C=o.forwardRef((function(e,t){const n=(0,d.A)({props:e,name:"MuiLink"}),{className:l,color:x="primary",component:h="a",onBlur:m,onFocus:g,TypographyClasses:j,underline:A="always",variant:b="inherit",sx:C}=n,q=(0,i.A)(n,w),{isFocusVisibleRef:I,onBlur:R,onFocus:S,ref:_}=(0,u.A)(),[N,T]=o.useState(!1),z=(0,p.A)(t,_),F=(0,a.A)({},n,{color:x,component:h,focusVisible:N,underline:A,variant:b}),P=(e=>{const{classes:t,component:n,focusVisible:i,underline:a}=e,o={root:["root","underline".concat((0,c.A)(a)),"button"===n&&"button",i&&"focusVisible"]};return(0,s.A)(o,f,t)})(F);return(0,y.jsx)(k,(0,a.A)({color:x,className:(0,r.A)(P.root,l),classes:j,component:h,onBlur:e=>{R(e),!1===I.current&&T(!1),m&&m(e)},onFocus:e=>{S(e),!0===I.current&&T(!0),g&&g(e)},ref:z,ownerState:F,variant:b,sx:[...Object.keys(v).includes(x)?[]:[{color:x}],...Array.isArray(C)?C:[C]]},q))}))},42402:(e,t,n)=>{n.d(t,{k:()=>u,n:()=>p});var i=n(72296),a=n(1261),o=n(86307),r=n(72279),s=n(65324),c=n(27895),l=n(59155);const d=function(e,t,n,i){return new(n||(n=Promise))((function(a,o){function r(e){try{c(i.next(e))}catch(t){o(t)}}function s(e){try{c(i.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}c((i=i.apply(e,t||[])).next())}))};function u(e){return d(this,arguments,void 0,(function(e){let{canisterId:t,address:n,sub:i}=e;return function*(){return(yield r.v9.balance({canisterId:t,params:{user:(0,a.H)(n)?{principal:n}:(0,o.R)(n)?{principal:s.p.fromText(n)}:{address:n},token:"",subaccount:i?[...i]:void 0}})).data}()}))}function p(e){let{canisterId:t,address:n,sub:a,reload:o}=e;return(0,l.$4)((0,i.useCallback)((()=>d(this,void 0,void 0,(function*(){if(!n||!t)return;const e=yield u({canisterId:t,sub:a,address:n});return void 0===e?void 0:new c.A(e.toString())}))),[n,t,a]),o)}}}]);
//# sourceMappingURL=8826.09ee0e11.chunk.js.map