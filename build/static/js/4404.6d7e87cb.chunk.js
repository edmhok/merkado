"use strict";(self.webpackChunkwaste2earn_home=self.webpackChunkwaste2earn_home||[]).push([[4404],{3871:(e,i,t)=>{t.d(i,{C:()=>l});var n=t(77500),a=t(37012);function l(e){let{children:i}=e;return(0,a.jsx)(n.A,{sx:{display:"flex",width:"100%",justifyContent:"center"},children:(0,a.jsx)(n.A,{sx:{width:"100%",maxWidth:"1120px"},children:i})})}},26235:(e,i,t)=>{t.d(i,{A:()=>A});var n=t(54711),a=t(72296),l=t(98152),r=t(33441),s=t(1054),o=t(79932),d=t(42148),c=t(19957),u=t(2281),x=t(2777),h=t(20361);const p=async e=>{let{batch_id:i,chunk:t,canisterId:n}=e;return(await(0,x.iZ)(n,!0)).create_chunk({batch_id:i,content:[...new Uint8Array(await t.arrayBuffer())]})};var f=t(18406),m=t(81863),g=t(62474),v=t(37012);function j(){return(0,v.jsx)("svg",{width:"58",height:"38",viewBox:"0 0 58 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 23.571C0 31.2176 5.94742 37.475 13.4688 37.9699V37.9996H14.2013C14.2775 38.0008 14.3539 38.0014 14.4304 38.0014C14.5069 38.0014 14.5832 38.0008 14.6595 37.9996H44.2536V37.9797C44.4916 37.9934 44.7314 38.0004 44.9729 38.0004C51.7471 38.0004 57.2387 32.5088 57.2387 25.7346C57.2387 19.0745 51.9306 13.6542 45.3142 13.4734C43.6604 5.77266 36.8138 0 28.6189 0C22.0403 0 16.3306 3.72016 13.4787 9.17151C5.95265 9.66151 0 15.9211 0 23.571ZM28.6797 9.62109L39.5638 20.5052H33.0098V31.2837H24.3516V20.5052H17.7956L28.6797 9.62109Z",fill:"#4F5A84"})})}const y=(0,m.A)((e=>({fileName:{padding:"0 40px",...e.mixins.overflowEllipsis2}}))),A=(0,a.forwardRef)(((e,i)=>{var t;let{onUploaded:m,maxSize:A=10485760,accept:b,types:w=[],placeholder:k,imageProps:C,beforeUpload:I,canisterId:P,uploadImmediately:S=!0,onFileSelected:M,onFileError:L,disabled:R,base64:_,uploadWithIdentity:z=!1,minHeight:W,...B}=e;const N=y(),T=(0,l.A)(),[D,F]=(0,a.useState)(null),[Z,H]=(0,a.useState)(""),[E,U]=(0,a.useState)(""),[V,K]=(0,a.useState)(""),[Y,q]=(0,a.useState)(""),[G,X]=(0,a.useState)(""),[O,Q]=function(e){let{fileType:i}=e;const[t,l]=(0,a.useState)(""),[r,s]=(0,a.useState)(!1),[o,d]=(0,a.useState)(""),[c,f]=(0,a.useState)(BigInt(0)),m=async e=>{var t;let{file:a,canisterId:o}=e;if(r)return;s(!0);const m=await(0,x.iZ)(o,!0),g=(0,h.Pk)(await m.create_batch()),v=null===(t=g.data)||void 0===t?void 0:t.batch_id;if(!v&&v!==BigInt(0))return l(n.Ru._({id:"rZAlWG",values:{0:g.message?", ".concat(g.message):""}})),void s(!1);const j=[],y=7e5;for(let i=0;i<a.size;i+=y){const e=a.slice(i,i+y);j.push(p({batch_id:v,chunk:e,canisterId:o}))}const A=await Promise.all(j).catch((e=>{console.error(e),l(n.Ru._({id:"8mQYDS"})),s(!1)}));if(!A)return l(n.Ru._({id:"8mQYDS"})),void s(!1);await m.commit_batch({batch_id:v,chunk_ids:A.map((e=>{let{chunk_id:i}=e;return i})),content_type:a.type}),s(!1);const b=u.Nm===u.pG.IC?"https://".concat(null!==o&&void 0!==o?o:u.Tc,".raw.icp0.io/").concat(v):u.Nm===u.pG.LOCAL?"http://localhost:3000/dfx_image/".concat(v,"?canisterId=").concat(null!==o&&void 0!==o?o:u.Tc):"".concat(u.Hc,"/").concat(v,"?canisterId=").concat(null!==o&&void 0!==o?o:u.Tc);return d(b),f(v),{filePath:b,batchId:c,fileType:i}};return(0,a.useMemo)((()=>[{loading:r,error:t,data:{filePath:o,batchId:c,fileType:i}},m]),[r,o,c,m,i])}({fileType:Z}),J=(0,a.useRef)(null),{loading:$,error:ee,data:{filePath:ie,batchId:te}}=O,ne={...B,defaultValue:void 0};async function ae(){if(D)return await Q({file:D,canisterId:P})}(0,a.useEffect)((()=>{ie&&U(ie)}),[ie]),(0,a.useEffect)((()=>{B.defaultValue&&X(B.defaultValue)}),[B]),(0,a.useEffect)((()=>{E&&(X(E),m&&m({batch_id:te,file_path:E,file_type:Z}))}),[E,Z]),(0,a.useEffect)((()=>{L&&L(Y)}),[Y]),(0,a.useImperativeHandle)(i,(()=>({uploadCb:ae})),[Q,D,ae]);return(0,v.jsxs)(r.Ay,{container:!0,flexDirection:"column",justifyContent:"center",alignItems:"center",sx:{width:"100%",height:"100%",border:"1px dashed #4f5a84",borderRadius:"8px",position:"relative",padding:"10px",minHeight:null!==W&&void 0!==W?W:"auto"},children:[D?"image"===Z&&G?(0,v.jsx)("img",{src:G,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",maxWidth:c.Fr?"140px":"160px",maxHeight:c.Fr?"140px":"160px",...null!==(t=null===C||void 0===C?void 0:C.style)&&void 0!==t?t:{}}}):(0,v.jsx)(s.A,{className:N.fileName,children:V}):(0,v.jsx)(j,{}),(0,v.jsx)(o.A,{...ne,sx:{display:$?"none":"block",position:"absolute",width:"100%",height:"100%",zIndex:5,top:0,left:0,background:"transparent","& div":{background:"transparent"},"& fieldset":{display:"none"},"& input":{opacity:0,height:"100%",cursor:"pointer",background:"transparent"},"& label":{opacity:0},"& .MuiOutlinedInput-root":{width:"100%",height:"100%"}},type:"file",inputProps:{accept:b},title:"",onChange:async e=>{var i,t;if(R)return;e.preventDefault();const a=null===(i=e.target.files)||void 0===i?void 0:i[0];let l=(0,f.ti)(null!==(t=null===a||void 0===a?void 0:a.type)&&void 0!==t?t:"");if("other"===l||"unKnow"===l){var r,s;const e=null!==(r=null===a||void 0===a||null===(s=a.name)||void 0===s?void 0:s.split("."))&&void 0!==r?r:[];l=e[e.length-1]}if(!a)return void q(n.Ru._({id:"hqCwRf"}));if(w.length&&!w.includes(l))return void q(n.Ru._({id:"dzCoIa"}));if(q(""),A&&a.size>A)return void q(n.Ru._({id:"ADgiFR",values:{maxSize:A}}));q(""),H(l),K(a.name),M&&M(a);let o=!0;if(I&&(o=I(a)),o)if(F(a),_){if("image"===l){const e=new FileReader;e.readAsDataURL(a),e.onload=function(i){"load"===i.type&&U(e.result)}}}else if(S){var d;if(z)null===J||void 0===J||null===(d=J.current)||void 0===d||d.submit({file:a,canisterId:P});else Q({file:a,canisterId:P})}else if("image"===l){const e=new FileReader;e.readAsDataURL(a),e.onload=function(i){"load"===i.type&&X(e.result)}}}}),""===G&&k?(0,v.jsx)(s.A,{sx:{marginTop:"5px"},children:k}):null,Y||ee?(0,v.jsx)(s.A,{mt:"4px",sx:{color:T.colors.errorMain,textAlign:"center"},children:Y||ee}):null,$&&(0,v.jsx)(d.A,{loading:$,maskBorderRadius:"12px"}),z?(0,v.jsx)(g.A,{ref:J,onSubmit:async(e,i,t)=>{let{loading:n}=i,{file:a,canisterId:l}=t;!n&&a&&await Q({file:a,canisterId:l})}}):null]})}))},97260:(e,i,t)=>{t.d(i,{H3:()=>m,HB:()=>j,K1:()=>g,ML:()=>u,NB:()=>b,Ny:()=>f,Q9:()=>A,Wr:()=>k,cs:()=>y,fL:()=>c,iJ:()=>p,ie:()=>h,mI:()=>w,nG:()=>d,uq:()=>x,wl:()=>v});var n=t(72296),a=t(3764),l=t(20361),r=t(26462),s=t(2777),o=t(59155);t(75918);function d(){return(0,n.useCallback)((async(e,i,t)=>t.count&&BigInt(t.count)>1?(0,l.Pk)(await(await(0,s.iZ)(e,i)).mint_batch(t)):(0,l.Pk)(await(await(0,s.iZ)(e,i)).mint({...t}))),[])}function c(e,i,t){return(0,o.Pz)((0,n.useCallback)((async()=>{if(e&&(i||0===i))return(0,l.Pk)(await(await(0,s.iZ)(e)).icsMetadata(Number(i))).data}),[i]),t)}function u(e,i,t,a,d){return(0,o.Pz)((0,n.useCallback)((async()=>{if(e&&i&&(0,r.W)(t,a))return(0,l.Pk)(await(await(0,s.iZ)(e)).findTxRecord(i,BigInt(t),BigInt(a))).data}),[e,i,t,a]),d)}function x(e,i,t,a){return(0,o.Pz)((0,n.useCallback)((async()=>{if(e&&i&&(0,r.W)(t,a))return(0,l.Pk)(await(await(0,s.iZ)(e)).findTokenTxRecord({address:i},BigInt(t),BigInt(a))).data}),[i,t,a]))}function h(){return(0,n.useCallback)((async(e,i,t)=>(0,l.Pk)(await(await(0,s.iZ)(e,i)).transfer(t))),[])}function p(e){return(0,o.Pz)((0,n.useCallback)((async()=>{if(e)return(0,l.Pk)(await(await(0,s.iZ)(e)).cycleBalance()).data}),[e]))}function f(e,i,t){return(0,o.Pz)((0,n.useCallback)((async()=>{if(e&&i)return(0,l.Pk)(await(await(0,s.iZ)(e)).ownerNFTCount({address:i})).data}),[e,i]),t)}function m(e,i){return(0,o.Pz)((0,n.useCallback)((async()=>{if((0,r.W)(e,i))return(0,l.Pk)(await(await(0,s.gM)()).findCanister(BigInt(e),BigInt(i))).data}),[e,i]))}function g(e,i,t){return(0,o.Pz)((0,n.useCallback)((async()=>{if((0,r.W)(i,t))return(0,l.Pk)(await(await(0,s.gM)()).findUserCanister(e,BigInt(i),BigInt(t))).data}),[i,t]))}async function v(e){return(0,l.Pk)(await(await(0,s.gM)(!0)).create(e))}async function j(e,i){return(0,l.Pk)(await(await(0,s.iZ)(e,!0)).setLogo(i))}async function y(e,i){return(0,l.Pk)(await(await(0,s.gM)(!0)).setLogo(i,e))}function A(e){return(0,o.Pz)((0,n.useCallback)((async()=>{if(e)return a.XA.includes(e)?(0,l.Pk)(await(await(0,s.gM)()).canisterInfo(e)).data:(0,l.Pk)(await(await(0,s.iZ)(e)).canisterInfo()).data}),[e]))}function b(e,i,t,a){return(0,o.Pz)((0,n.useCallback)((async()=>{if(e&&i&&(0,r.W)(t,a))return(0,l.Pk)(await(await(0,s.iZ)(e)).findTokenList({address:i},BigInt(t),BigInt(a))).data}),[e,i,t,a]))}function w(){return(0,o.Pz)((0,n.useCallback)((async()=>(0,l.Pk)(await(await(0,s.gM)()).feeInfo()).data),[]))}async function k(){return(0,l.Pk)(await(await(0,s.iT)()).getNftStat()).data}},58051:(e,i,t)=>{t.d(i,{CM:()=>r,CP:()=>s});var n=t(72296),a=t(60816),l=t(40112);function r(){const e=(0,a.jL)();return[(0,a.GV)((e=>e.nft.userSelectedCanisters)),(0,n.useCallback)((i=>{e((0,l.IZ)(i))}),[e]),(0,n.useCallback)((i=>{e((0,l.y1)(i))}),[e])]}function s(){const e=(0,a.jL)(),i=(0,a.GV)((e=>e.nft.importedNFTs)),t=(0,n.useCallback)((i=>{e((0,l.i_)(i))}),[e]),r=(0,n.useCallback)((i=>{e((0,l.gw)({canisterId:i}))}),[e]);return(0,n.useMemo)((()=>({nfts:i,importNFT:t,deleteNFT:r})),[i,t,r])}},18406:(e,i,t)=>{function n(e){return function(e){return!!e.match("image.*")}(e)?"image":function(e){return!!e.match("video.*")}(e)?"video":function(e){return!!e.match("audio.*")}(e)?"audio":function(e){return"application/json"===e}(e)||function(e){return"application/pdf"===e}(e)||function(e){return"text/plain"===e}(e)||function(e){return"text/javascript"===e}(e)||function(e){return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===e||"application/vnd.ms-excel"===e}(e)||function(e){return"application/vnd.openxmlformats-officedocument.wordprocessingml.document"===e||"application/msword"===e}(e)?"other":"unKnow"}t.d(i,{ti:()=>n})},94404:(e,i,t)=>{t.r(i),t.d(i,{default:()=>U});var n=t(3481),a=t(54711),l=t(72296),r=t(27312),s=t(33441),o=t(77500),d=t(1054),c=t(74931),u=t(11871),x=t(26235),h=t(2281),p=t(97260),f=t(55484),m=t(17471),g=t(4102),v=t(85066),j=t(37012);const y=e=>{var i;let{open:t,onConfirm:l,onClose:r,details:c,mintInfo:u}=e;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(m.A,{open:t,title:a.Ru._({id:"i2lzku"}),onClose:r,children:[(0,j.jsxs)(o.A,{children:[(0,j.jsx)(d.A,{color:"text.tertiary",align:"center",children:(0,j.jsx)(n.x6,{id:"4fL/V7"})}),(0,j.jsxs)(d.A,{variant:"h2",color:"text.primary",align:"center",sx:{marginTop:"12px"},children:[(0,v.t)((null!==u&&void 0!==u?u:[])[0],h.Dj.decimals).toNumber()," ",h.Dj.symbol]})]}),(0,j.jsxs)(o.A,{children:[(0,j.jsxs)(s.Ay,{container:!0,mt:2,children:[(0,j.jsxs)(s.Ay,{container:!0,mt:3,children:[(0,j.jsx)(s.Ay,{item:!0,xs:!0,children:(0,j.jsx)(d.A,{children:(0,j.jsx)(n.x6,{id:"DCJc4d"})})}),(0,j.jsx)(s.Ay,{item:!0,xs:!0,children:(0,j.jsx)(d.A,{color:"textPrimary",align:"right",children:c.name})})]}),(0,j.jsxs)(s.Ay,{container:!0,mt:3,children:[(0,j.jsx)(s.Ay,{item:!0,xs:!0,children:(0,j.jsx)(d.A,{children:(0,j.jsx)(n.x6,{id:"UE2beD"})})}),(0,j.jsx)(s.Ay,{item:!0,xs:!0,children:(0,j.jsx)(d.A,{color:"textPrimary",align:"right",children:c.minter})})]}),(0,j.jsxs)(s.Ay,{container:!0,mt:3,children:[(0,j.jsx)(s.Ay,{item:!0,xs:!0,children:(0,j.jsx)(d.A,{children:(0,j.jsx)(n.x6,{id:"p08ZYE"})})}),(0,j.jsx)(s.Ay,{item:!0,xs:!0,children:(0,j.jsxs)(d.A,{color:"textPrimary",align:"right",children:[c.royalties,"%"]})})]}),(0,j.jsxs)(s.Ay,{container:!0,mt:3,children:[(0,j.jsx)(s.Ay,{item:!0,xs:!0,children:(0,j.jsx)(d.A,{children:(0,j.jsx)(n.x6,{id:"ERZMdK"})})}),(null!==(i=c.socialMediaLinks)&&void 0!==i?i:[]).length>0?(0,j.jsx)(s.Ay,{item:!0,xs:!0,children:c.socialMediaLinks.map((e=>e.value&&e.label?(0,j.jsx)(d.A,{color:"textPrimary",align:"right",children:e.value},e.label):null))}):(0,j.jsx)(s.Ay,{item:!0,xs:!0,children:(0,j.jsx)(d.A,{color:"textPrimary",align:"right",children:"--"})})]}),(0,j.jsxs)(s.Ay,{mt:3,children:[(0,j.jsx)(d.A,{children:"Collection Description"}),(0,j.jsx)(d.A,{color:"text.tertiary",sx:{marginTop:"8px"},children:c.introduction})]})]}),(0,j.jsxs)(s.Ay,{mt:4,container:!0,spacing:3,children:[(0,j.jsx)(s.Ay,{item:!0,xs:!0,children:(0,j.jsx)(g.A,{size:"large",variant:"outlined",fullWidth:!0,onClick:r,children:"Cancel"})}),(0,j.jsx)(s.Ay,{item:!0,xs:!0,children:(0,j.jsx)(g.A,{variant:"contained",size:"large",fullWidth:!0,onClick:l,children:(0,j.jsx)(n.x6,{id:"7VpPHA"})})})]})]})]})})};var A=t(58051),b=t(94439),w=t(56376),k=t(90538),C=t(97845),I=t(81863),P=t(96937),S=t(86100);const M=(0,I.A)((e=>({root:{color:e.colors.secondaryMain,"& .MuiSlider-rail":{height:"4px",backgroundColor:(0,S.g4)(e)?e.palette.background.level4:"#fff"},"& .MuiSlider-thumb":{width:"16px",height:"16px",border:"2px solid #fff",marginLeft:"5px"},"& .MuiSlider-mark":{width:"12px",height:"12px",borderRadius:"50%",backgroundColor:e.palette.background.level4,top:"50%",transform:"translate(0, -50%)",opacity:1,"&.MuiSlider-markActive":{backgroundColor:e.colors.secondaryMain}}},tooltip:{}}))),L=(0,P.A)((e=>{let{className:i,...t}=e;return(0,j.jsx)(w.A,{...t,classes:{popper:i}})}))((e=>{let{theme:i}=e;return{["& .".concat(k.A.tooltip)]:{backgroundColor:i.colors.secondaryMain,color:"#fff",fontWeight:700},"& .MuiTooltip-arrow":{color:i.colors.secondaryMain}}})),R=e=>{const{children:i,value:t}=e,n=M();return(0,j.jsx)(L,{placement:"top",arrow:!0,title:"".concat(t,"%"),className:n.tooltip,children:i})};function _(e){let{marks:i=[{value:0},{value:25},{value:50},{value:75},{value:100}],...t}=e;const n=M();return(0,j.jsx)(C.Ay,{...t,className:n.root,marks:i,valueLabelDisplay:"auto",components:{ValueLabel:R}})}var z=t(2394),W=t(92952),B=t(27442),N=t(27895);var T=t(68703),D=t(12852),F=t(62474),Z=t(84076),H=t(61361),E=t(3871);function U(){var e,i,t;const m=(0,r.W6)(),g=(0,D.F7)(),[w,k]=(0,l.useState)({}),[C]=(0,f.dX)(),[I,P]=(0,l.useState)(""),[S,M]=(0,l.useState)(!1),[,L]=(0,A.CM)(),R=(0,l.useRef)(null),[U,V]=(0,l.useState)(null),[K,Y]=(0,l.useState)(""),{result:q}=(0,p.mI)(),G=(e,i)=>{k({...w,[i]:e})},X=(0,T.z)(),O=(e=>{var i,t;if(!e.name)return a.Ru._({id:"76tLT+"});if(e.name&&e.name.toLocaleLowerCase().includes("icpswap"))return a.Ru._({id:"SF8Aho"});if(!e.minter)return a.Ru._({id:"mX18YU"});if(e.minter&&e.minter.toLocaleLowerCase().includes("icpswap"))return a.Ru._({id:"iEBoDi"});if(!e.introduction)return a.Ru._({id:"h4hoWE"});if((null!==(i=e.socialMediaLinks)&&void 0!==i?i:[]).length>0)for(let n=0;n<e.socialMediaLinks.length;n++)if(t=e.socialMediaLinks[n].value,!new RegExp(/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/).test(t))return a.Ru._({id:"KP2w2V"});return K?a.Ru._({id:"8pCOBS"}):U?e.royalties||"0"===String(e.royalties)?void 0:a.Ru._({id:"aWyAWS"}):a.Ru._({id:"50Y/h0"})})(w);return(0,j.jsxs)(E.C,{children:[(0,j.jsx)(u.BI,{prevLabel:(0,j.jsx)(n.x6,{id:"/PH/EV"}),currentLabel:(0,j.jsx)(n.x6,{id:"66KbVW"}),prevLink:"/console/nft/canister/list"}),(0,j.jsx)(u.Am,{sx:{margin:"16px 0 0 0"},children:(0,j.jsx)(s.Ay,{container:!0,justifyContent:"center",children:(0,j.jsxs)(o.A,{sx:{maxWidth:"474px",width:"100%"},children:[(0,j.jsx)(d.A,{sx:{margin:"28px 0 0 0",fontSize:"20px",fontWeight:700,color:"text.primary"},children:(0,j.jsx)(n.x6,{id:"66KbVW"})}),(0,j.jsx)(o.A,{mt:"32px",children:(0,j.jsx)(b.A,{label:(0,j.jsx)(n.x6,{id:"DCJc4d"}),labelSize:"16px",required:!0,fullWidth:!0,border:"none",placeholder:a.Ru._({id:"y+i7EK"}),onChange:e=>G(e,"name"),placeholderSize:"16px",fontSize:"16px",InputProps:{disableUnderline:!0,inputProps:{maxLength:50}}})}),(0,j.jsx)(o.A,{mt:3,children:(0,j.jsx)(b.A,{label:(0,j.jsx)(n.x6,{id:"7B+tWs"}),labelSize:"16px",required:!0,fullWidth:!0,multiline:!0,rows:4,fontSize:"16px",border:"none",placeholderSize:"16px",placeholder:a.Ru._({id:"kGhskg"}),onChange:e=>G(e,"introduction"),InputProps:{disableUnderline:!0,inputProps:{maxLength:500}}})}),(0,j.jsx)(o.A,{mt:3,children:(0,j.jsx)(b.A,{label:(0,j.jsx)(n.x6,{id:"UE2beD"}),labelSize:"16px",required:!0,fullWidth:!0,border:"none",fontSize:"16px",placeholderSize:"16px",placeholder:a.Ru._({id:"mX18YU"}),onChange:e=>G(e,"minter"),InputProps:{disableUnderline:!0,inputProps:{maxLength:50}}})}),(0,j.jsxs)(o.A,{mt:3,children:[(0,j.jsxs)(s.Ay,{container:!0,children:[(0,j.jsx)(s.Ay,{item:!0,xs:!0,children:(0,j.jsx)(d.A,{component:"span",fontSize:"16px",children:(0,j.jsx)(n.x6,{id:"ERZMdK"})})}),(0,j.jsx)(s.Ay,{item:!0,children:(0,j.jsxs)(s.Ay,{container:!0,alignItems:"center",justifyContent:"center",sx:{width:"72px",height:"31px",border:"1px solid #4F5A84",borderRadius:"8px",cursor:"pointer"},onClick:()=>{var e,i;(null!==(e=w.socialMediaLinks)&&void 0!==e?e:[]).length>=10||k({...w,socialMediaLinks:[...null!==(i=w.socialMediaLinks)&&void 0!==i?i:[],{label:"",value:""}]})},children:[(0,j.jsx)(z.A,{fontSize:"small"}),(0,j.jsx)(d.A,{color:"text.primary",children:(0,j.jsx)(n.x6,{id:"m16xKo"})})]})})]}),(0,j.jsx)(o.A,{mt:2,children:(null!==(e=w.socialMediaLinks)&&void 0!==e?e:[]).map(((e,i)=>(0,j.jsxs)(s.Ay,{container:!0,sx:{marginBottom:"10px","&:last-child":{marginBottom:"0px"}},children:[(0,j.jsx)(o.A,{mr:"10px",sx:{width:"145px"},children:(0,j.jsx)(b.A,{select:!0,border:"none",placeholder:a.Ru._({id:"xYilR2"}),value:e.label,onChange:e=>((e,i)=>{var t;const n=[...null!==(t=w.socialMediaLinks)&&void 0!==t?t:[]];n.find((i=>i.label===e))||(n[i]?n.splice(i,1,{label:e,value:n[i].value}):n[i]={label:e,value:""},k({...w,socialMediaLinks:n}))})(e,i),menus:h.w7,menuDisabled:e=>(e=>{var i;return-1!==(null!==(i=w.socialMediaLinks)&&void 0!==i?i:[]).findIndex((i=>i.label===e.value))})(e)})}),(0,j.jsx)(s.Ay,{item:!0,xs:!0,children:(0,j.jsx)(b.A,{border:"none",fullWidth:!0,placeholderSize:"16px",placeholder:a.Ru._({id:"wndNNQ"}),onChange:e=>((e,i)=>{var t;const n=[...null!==(t=w.socialMediaLinks)&&void 0!==t?t:[]];n[i]&&n.splice(i,1,{label:n[i].label,value:e}),k({...w,socialMediaLinks:n})})(e,i),InputProps:{disableUnderline:!0,inputProps:{maxLength:100},endAdornment:(0,j.jsx)(c.A,{position:"end",children:(0,j.jsx)(W.A,{sx:{color:"#111936",fontSize:"20px",cursor:"pointer"},onClick:()=>(e=>{var i;const t=[...null!==(i=w.socialMediaLinks)&&void 0!==i?i:[]];t[e]&&t.splice(e,1),k({...w,socialMediaLinks:t})})(i)})})}})})]},e.label?e.label:i)))})]}),(0,j.jsxs)(o.A,{mt:3,children:[(0,j.jsx)(b.u,{label:(0,j.jsx)(n.x6,{id:"YjbR5u"}),labelSize:"16px",required:!0}),(0,j.jsxs)(o.A,{mt:2,children:[(0,j.jsx)(o.A,{sx:{height:"160px"},children:(0,j.jsx)(x.A,{ref:R,onUploaded:e=>{let{file_path:i}=e;k({...w,image:i})},maxSize:2097152,types:["image"],accept:".jpeg, .png, .jpg, .gif, .apng",placeholder:a.Ru._({id:"50Y/h0"}),uploadImmediately:!1,canisterId:I,onFileSelected:e=>{V(e)},onFileError:e=>{Y(e)},imageProps:{style:{maxWidth:108,maxHeight:108}}})}),(0,j.jsx)(o.A,{mt:1,children:(0,j.jsx)(d.A,{children:(0,j.jsx)(n.x6,{id:"neWo2U"})})})]})]}),(0,j.jsxs)(o.A,{mt:3,children:[(0,j.jsxs)(o.A,{sx:{display:"flex",alignItems:"center"},children:[(0,j.jsx)(b.u,{label:(0,j.jsx)(n.x6,{id:"Suavgt"}),labelSize:"16px",required:!0}),w.royalties||"0"===String(w.royalties)?(0,j.jsxs)(d.A,{component:"span",fontSize:"16px",children:[": ",w.royalties,"%"]}):null]}),(0,j.jsx)(o.A,{mt:"30px",children:(0,j.jsx)(_,{value:Number(null!==(i=w.royalties)&&void 0!==i?i:0),onChange:(e,i)=>G(i,"royalties"),size:"small",min:0,max:20,step:.1,marks:[{value:0},{value:5},{value:10},{value:15},{value:20}]})})]}),(0,j.jsxs)(o.A,{mt:4,children:[(0,j.jsxs)(d.A,{variant:"h3",align:"center",color:"textPrimary",children:["Pay: ",(0,v.t)(null!==(t=(null!==q&&void 0!==q?q:[])[0])&&void 0!==t?t:0,h.Dj.decimals).toNumber()," ",h.Dj.symbol]}),(0,j.jsx)(H.A,{fullWidth:!0,variant:"contained",sx:{marginTop:"20px"},disabled:!!O,onClick:()=>M(!0),children:O||a.Ru._({id:"hYgDIe"})})]})]})})}),S?(0,j.jsx)(F.A,{onSubmit:async(e,i)=>{var t,n;let{loading:l,closeLoading:r}=i;if(l)return;const{status:s}=await X({canisterId:h.qy,spender:h.gM,account:g,value:(0,B.u)((0,v.t)(null!==(t=(null!==q&&void 0!==q?q:[])[0])&&void 0!==t?t:0,h.Dj.decimals))});if("err"===s)return void C(a.Ru._({id:"k0XF5b"}));const{status:o,data:d,message:c}=await(0,p.wl)({name:w.name,ownerName:w.minter,introduction:w.introduction,royalties:BigInt(new N.A(w.royalties).multipliedBy(100).toString()),image:"",linkMap:(null!==(n=w.socialMediaLinks)&&void 0!==n?n:[]).reduce(((e,i)=>i.label&&i.value?[...e,{k:i.label,v:i.value}]:[...e]),[])});if("ok"===o){if(d){var u,x;L([d]),P(d);const{filePath:e}=null!==(u=await(null===(x=R.current)||void 0===x?void 0:x.uploadCb()))&&void 0!==u?u:{};e&&await(0,p.HB)(d,e),e&&await(0,p.cs)(d,e)}m.push("/console/nft/canister/list")}else{var f;C(null!==(f=(0,Z.If)(c))&&void 0!==f?f:a.Ru._({id:"fUCzv8"}))}r()},fullScreenLoading:!0,children:e=>{let{submit:i}=e;return(0,j.jsx)(y,{details:w,open:S,onClose:()=>M(!1),onConfirm:i,mintInfo:q})}}):null]})}},2394:(e,i,t)=>{var n=t(52867);i.A=void 0;var a=n(t(85556)),l=t(37012),r=(0,a.default)((0,l.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");i.A=r},92952:(e,i,t)=>{var n=t(52867);i.A=void 0;var a=n(t(85556)),l=t(37012),r=(0,a.default)((0,l.jsx)("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOff");i.A=r}}]);
//# sourceMappingURL=4404.6d7e87cb.chunk.js.map