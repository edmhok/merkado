"use strict";(self.webpackChunkwaste2earn_home=self.webpackChunkwaste2earn_home||[]).push([[4365],{97845:(e,t,r)=>{r.d(t,{Ay:()=>re});var a=r(64032),n=r(95265),o=r(72296),l=r(39189),i=r(56322),s=r(68480),c=r(58216),u=r(91642),d=r(69426),p=r(31834),m=r(84918),v=r(25228),h=r(23782),b=r(23148);const f={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};var g=r(37891);function y(e,t){return e-t}function x(e,t){var r;const{index:a}=null!=(r=e.reduce(((e,r,a)=>{const n=Math.abs(t-r);return null===e||n<e.distance||n===e.distance?{distance:n,index:a}:e}),null))?r:{};return a}function A(e,t){if(void 0!==t.current&&e.changedTouches){const r=e;for(let e=0;e<r.changedTouches.length;e+=1){const a=r.changedTouches[e];if(a.identifier===t.current)return{x:a.clientX,y:a.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function k(e,t,r){return 100*(e-t)/(r-t)}function S(e,t,r){const a=Math.round((e-r)/t)*t+r;return Number(a.toFixed(function(e){if(Math.abs(e)<1){const t=e.toExponential().split("e-"),r=t[0].split(".")[1];return(r?r.length:0)+parseInt(t[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}(t)))}function w(e){let{values:t,newValue:r,index:a}=e;const n=t.slice();return n[a]=r,n.sort(y)}function L(e){let{sliderRef:t,activeIndex:r,setActive:a}=e;var n,o;const l=(0,u.A)(t.current);var i;null!=(n=t.current)&&n.contains(l.activeElement)&&Number(null==l||null==(o=l.activeElement)?void 0:o.getAttribute("data-index"))===r||(null==(i=t.current)||i.querySelector('[type="range"][data-index="'.concat(r,'"]')).focus());a&&a(r)}function C(e,t){return"number"===typeof e&&"number"===typeof t?e===t:"object"===typeof e&&"object"===typeof t&&function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(e,t)=>e===t;return e.length===t.length&&e.every(((e,a)=>r(e,t[a])))}(e,t)}const R={horizontal:{offset:e=>({left:"".concat(e,"%")}),leap:e=>({width:"".concat(e,"%")})},"horizontal-reverse":{offset:e=>({right:"".concat(e,"%")}),leap:e=>({width:"".concat(e,"%")})},vertical:{offset:e=>({bottom:"".concat(e,"%")}),leap:e=>({height:"".concat(e,"%")})}},z=e=>e;let P;function N(){return void 0===P&&(P="undefined"===typeof CSS||"function"!==typeof CSS.supports||CSS.supports("touch-action","none")),P}function T(e){const{"aria-labelledby":t,defaultValue:r,disabled:a=!1,disableSwap:l=!1,isRtl:i=!1,marks:s=!1,max:c=100,min:P=0,name:T,onChange:I,onChangeCommitted:M,orientation:E="horizontal",rootRef:j,scale:O=z,step:V=1,shiftStep:F=10,tabIndex:D,value:Y}=e,Q=o.useRef(),[X,B]=o.useState(-1),[K,W]=o.useState(-1),[H,U]=o.useState(!1),$=o.useRef(0),[_,q]=(0,d.A)({controlled:Y,default:null!=r?r:P,name:"Slider"}),G=I&&((e,t,r)=>{const a=e.nativeEvent||e,n=new a.constructor(a.type,a);Object.defineProperty(n,"target",{writable:!0,value:{value:t,name:T}}),I(n,t,r)}),J=Array.isArray(_);let Z=J?_.slice().sort(y):[_];Z=Z.map((e=>null==e?P:(0,p.A)(e,P,c)));const ee=!0===s&&null!==V?[...Array(Math.floor((c-P)/V)+1)].map(((e,t)=>({value:P+V*t}))):s||[],te=ee.map((e=>e.value)),{isFocusVisibleRef:re,onBlur:ae,onFocus:ne,ref:oe}=(0,m.A)(),[le,ie]=o.useState(-1),se=o.useRef(),ce=(0,v.A)(oe,se),ue=(0,v.A)(j,ce),de=e=>t=>{var r;const a=Number(t.currentTarget.getAttribute("data-index"));ne(t),!0===re.current&&ie(a),W(a),null==e||null==(r=e.onFocus)||r.call(e,t)},pe=e=>t=>{var r;ae(t),!1===re.current&&ie(-1),W(-1),null==e||null==(r=e.onBlur)||r.call(e,t)},me=(e,t)=>{const r=Number(e.currentTarget.getAttribute("data-index")),a=Z[r],n=te.indexOf(a);let o=t;if(ee&&null==V){const e=te[te.length-1];o=o>e?e:o<te[0]?te[0]:o<a?te[n-1]:te[n+1]}if(o=(0,p.A)(o,P,c),J){l&&(o=(0,p.A)(o,Z[r-1]||-1/0,Z[r+1]||1/0));const e=o;o=w({values:Z,newValue:o,index:r});let t=r;l||(t=o.indexOf(e)),L({sliderRef:se,activeIndex:t})}q(o),ie(r),G&&!C(o,_)&&G(e,o,r),M&&M(e,o)},ve=e=>t=>{var r;if(null!==V){const e=Number(t.currentTarget.getAttribute("data-index")),r=Z[e];let a=null;("ArrowLeft"===t.key||"ArrowDown"===t.key)&&t.shiftKey||"PageDown"===t.key?a=Math.max(r-F,P):(("ArrowRight"===t.key||"ArrowUp"===t.key)&&t.shiftKey||"PageUp"===t.key)&&(a=Math.min(r+F,c)),null!==a&&(me(t,a),t.preventDefault())}null==e||null==(r=e.onKeyDown)||r.call(e,t)};(0,h.A)((()=>{var e;a&&se.current.contains(document.activeElement)&&(null==(e=document.activeElement)||e.blur())}),[a]),a&&-1!==X&&B(-1),a&&-1!==le&&ie(-1);const he=o.useRef();let be=E;i&&"horizontal"===E&&(be+="-reverse");const fe=e=>{let{finger:t,move:r=!1}=e;const{current:a}=se,{width:n,height:o,bottom:i,left:s}=a.getBoundingClientRect();let u,d;if(u=0===be.indexOf("vertical")?(i-t.y)/o:(t.x-s)/n,-1!==be.indexOf("-reverse")&&(u=1-u),d=function(e,t,r){return(r-t)*e+t}(u,P,c),V)d=S(d,V,P);else{const e=x(te,d);d=te[e]}d=(0,p.A)(d,P,c);let m=0;if(J){m=r?he.current:x(Z,d),l&&(d=(0,p.A)(d,Z[m-1]||-1/0,Z[m+1]||1/0));const e=d;d=w({values:Z,newValue:d,index:m}),l&&r||(m=d.indexOf(e),he.current=m)}return{newValue:d,activeIndex:m}},ge=(0,b.A)((e=>{const t=A(e,Q);if(!t)return;if($.current+=1,"mousemove"===e.type&&0===e.buttons)return void ye(e);const{newValue:r,activeIndex:a}=fe({finger:t,move:!0});L({sliderRef:se,activeIndex:a,setActive:B}),q(r),!H&&$.current>2&&U(!0),G&&!C(r,_)&&G(e,r,a)})),ye=(0,b.A)((e=>{const t=A(e,Q);if(U(!1),!t)return;const{newValue:r}=fe({finger:t,move:!0});B(-1),"touchend"===e.type&&W(-1),M&&M(e,r),Q.current=void 0,Ae()})),xe=(0,b.A)((e=>{if(a)return;N()||e.preventDefault();const t=e.changedTouches[0];null!=t&&(Q.current=t.identifier);const r=A(e,Q);if(!1!==r){const{newValue:t,activeIndex:a}=fe({finger:r});L({sliderRef:se,activeIndex:a,setActive:B}),q(t),G&&!C(t,_)&&G(e,t,a)}$.current=0;const n=(0,u.A)(se.current);n.addEventListener("touchmove",ge,{passive:!0}),n.addEventListener("touchend",ye,{passive:!0})})),Ae=o.useCallback((()=>{const e=(0,u.A)(se.current);e.removeEventListener("mousemove",ge),e.removeEventListener("mouseup",ye),e.removeEventListener("touchmove",ge),e.removeEventListener("touchend",ye)}),[ye,ge]);o.useEffect((()=>{const{current:e}=se;return e.addEventListener("touchstart",xe,{passive:N()}),()=>{e.removeEventListener("touchstart",xe),Ae()}}),[Ae,xe]),o.useEffect((()=>{a&&Ae()}),[a,Ae]);const ke=k(J?Z[0]:P,P,c),Se=k(Z[Z.length-1],P,c)-ke,we=e=>t=>{var r;null==(r=e.onMouseLeave)||r.call(e,t),W(-1)};return{active:X,axis:be,axisProps:R,dragging:H,focusedThumbIndex:le,getHiddenInputProps:function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var o;const l=(0,g.h)(r),s={onChange:(u=l||{},e=>{var t;null==(t=u.onChange)||t.call(u,e),me(e,e.target.valueAsNumber)}),onFocus:de(l||{}),onBlur:pe(l||{}),onKeyDown:ve(l||{})};var u;const d=(0,n.A)({},l,s);return(0,n.A)({tabIndex:D,"aria-labelledby":t,"aria-orientation":E,"aria-valuemax":O(c),"aria-valuemin":O(P),name:T,type:"range",min:e.min,max:e.max,step:null===e.step&&e.marks?"any":null!=(o=e.step)?o:void 0,disabled:a},r,d,{style:(0,n.A)({},f,{direction:i?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,g.h)(e),r={onMouseDown:(o=t||{},e=>{var t;if(null==(t=o.onMouseDown)||t.call(o,e),a)return;if(e.defaultPrevented)return;if(0!==e.button)return;e.preventDefault();const r=A(e,Q);if(!1!==r){const{newValue:t,activeIndex:a}=fe({finger:r});L({sliderRef:se,activeIndex:a,setActive:B}),q(t),G&&!C(t,_)&&G(e,t,a)}$.current=0;const n=(0,u.A)(se.current);n.addEventListener("mousemove",ge,{passive:!0}),n.addEventListener("mouseup",ye)})};var o;const l=(0,n.A)({},t,r);return(0,n.A)({},e,{ref:ue},l)},getThumbProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,g.h)(e),r={onMouseOver:(a=t||{},e=>{var t;null==(t=a.onMouseOver)||t.call(a,e);const r=Number(e.currentTarget.getAttribute("data-index"));W(r)}),onMouseLeave:we(t||{})};var a;return(0,n.A)({},e,t,r)},marks:ee,open:K,range:J,rootRef:ue,trackLeap:Se,trackOffset:ke,values:Z,getThumbStyle:e=>({pointerEvents:-1!==X&&X!==e?"none":void 0})}}var I=r(71987),M=r(75980),E=r(61670),j=r(82703),O=r(24603);const V=e=>!e||!(0,s.g)(e);var F=r(46987),D=r(72786),Y=r(48890);function Q(e){return(0,Y.Ay)("MuiSlider",e)}const X=(0,D.A)("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]);var B=r(37012);const K=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","shiftStep","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"],W=(0,E.h)("MuiSlider");function H(e){return e}const U=(0,j.Ay)("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t["color".concat((0,F.A)(r.color))],"medium"!==r.size&&t["size".concat((0,F.A)(r.size))],r.marked&&t.marked,"vertical"===r.orientation&&t.vertical,"inverted"===r.track&&t.trackInverted,!1===r.track&&t.trackFalse]}})((e=>{let{theme:t}=e;var r;return{borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"},["&.".concat(X.disabled)]:{pointerEvents:"none",cursor:"default",color:(t.vars||t).palette.grey[400]},["&.".concat(X.dragging)]:{["& .".concat(X.thumb,", & .").concat(X.track)]:{transition:"none"}},variants:[...Object.keys((null!=(r=t.vars)?r:t).palette).filter((e=>{var r;return(null!=(r=t.vars)?r:t).palette[e].main})).map((e=>({props:{color:e},style:{color:(t.vars||t).palette[e].main}}))),{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]}})),$=(0,j.Ay)("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),_=(0,j.Ay)("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})((e=>{let{theme:t}=e;var r;return{display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:t.transitions.create(["left","width","bottom","height"],{duration:t.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}},...Object.keys((null!=(r=t.vars)?r:t).palette).filter((e=>{var r;return(null!=(r=t.vars)?r:t).palette[e].main})).map((e=>({props:{color:e,track:"inverted"},style:(0,n.A)({},t.vars?{backgroundColor:t.vars.palette.Slider["".concat(e,"Track")],borderColor:t.vars.palette.Slider["".concat(e,"Track")]}:(0,n.A)({backgroundColor:(0,I.a)(t.palette[e].main,.62),borderColor:(0,I.a)(t.palette[e].main,.62)},t.applyStyles("dark",{backgroundColor:(0,I.e$)(t.palette[e].main,.5)}),t.applyStyles("dark",{borderColor:(0,I.e$)(t.palette[e].main,.5)})))})))]}})),q=(0,j.Ay)("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.thumb,t["thumbColor".concat((0,F.A)(r.color))],"medium"!==r.size&&t["thumbSize".concat((0,F.A)(r.size))]]}})((e=>{let{theme:t}=e;var r;return{position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:t.transitions.create(["box-shadow","left","bottom"],{duration:t.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(t.vars||t).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},["&.".concat(X.disabled)]:{"&:hover":{boxShadow:"none"}},variants:[{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}},...Object.keys((null!=(r=t.vars)?r:t).palette).filter((e=>{var r;return(null!=(r=t.vars)?r:t).palette[e].main})).map((e=>({props:{color:e},style:{["&:hover, &.".concat(X.focusVisible)]:(0,n.A)({},t.vars?{boxShadow:"0px 0px 0px 8px rgba(".concat(t.vars.palette[e].mainChannel," / 0.16)")}:{boxShadow:"0px 0px 0px 8px ".concat((0,I.X4)(t.palette[e].main,.16))},{"@media (hover: none)":{boxShadow:"none"}}),["&.".concat(X.active)]:(0,n.A)({},t.vars?{boxShadow:"0px 0px 0px 14px rgba(".concat(t.vars.palette[e].mainChannel," / 0.16)")}:{boxShadow:"0px 0px 0px 14px ".concat((0,I.X4)(t.palette[e].main,.16))})}})))]}})),G=(0,j.Ay)((function(e){const{children:t,className:r,value:a}=e,n=(e=>{const{open:t}=e;return{offset:(0,l.A)(t&&X.valueLabelOpen),circle:X.valueLabelCircle,label:X.valueLabelLabel}})(e);return t?o.cloneElement(t,{className:(0,l.A)(t.props.className)},(0,B.jsxs)(o.Fragment,{children:[t.props.children,(0,B.jsx)("span",{className:(0,l.A)(n.offset,r),"aria-hidden":!0,children:(0,B.jsx)("span",{className:n.circle,children:(0,B.jsx)("span",{className:n.label,children:a})})})]})):null}),{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})((e=>{let{theme:t}=e;return(0,n.A)({zIndex:1,whiteSpace:"nowrap"},t.typography.body2,{fontWeight:500,transition:t.transitions.create(["transform"],{duration:t.transitions.duration.shortest}),position:"absolute",backgroundColor:(t.vars||t).palette.grey[600],borderRadius:2,color:(t.vars||t).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:{transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"},["&.".concat(X.valueLabelOpen)]:{transform:"translateY(-100%) scale(1)"}}},{props:{orientation:"vertical"},style:{transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"},["&.".concat(X.valueLabelOpen)]:{transform:"translateY(-50%) scale(1)"}}},{props:{size:"small"},style:{fontSize:t.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]})})),J=(0,j.Ay)("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>(0,O.A)(e)&&"markActive"!==e,overridesResolver:(e,t)=>{const{markActive:r}=e;return[t.mark,r&&t.markActive]}})((e=>{let{theme:t}=e;return{position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(t.vars||t).palette.background.paper,opacity:.8}}]}})),Z=(0,j.Ay)("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>(0,O.A)(e)&&"markLabelActive"!==e,overridesResolver:(e,t)=>t.markLabel})((e=>{let{theme:t}=e;return(0,n.A)({},t.typography.body2,{color:(t.vars||t).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(t.vars||t).palette.text.primary}}]})})),ee=e=>{let{children:t}=e;return t},te=o.forwardRef((function(e,t){var r,u,d,p,m,v,h,b,f,g,y,x,A,S,w,L,C,R,z,P,N,I,E,j;const O=W({props:e,name:"MuiSlider"}),D=(0,M.I)(),{"aria-label":Y,"aria-valuetext":X,"aria-labelledby":te,component:re="span",components:ae={},componentsProps:ne={},color:oe="primary",classes:le,className:ie,disableSwap:se=!1,disabled:ce=!1,getAriaLabel:ue,getAriaValueText:de,marks:pe=!1,max:me=100,min:ve=0,orientation:he="horizontal",shiftStep:be=10,size:fe="medium",step:ge=1,scale:ye=H,slotProps:xe,slots:Ae,track:ke="normal",valueLabelDisplay:Se="off",valueLabelFormat:we=H}=O,Le=(0,a.A)(O,K),Ce=(0,n.A)({},O,{isRtl:D,max:me,min:ve,classes:le,disabled:ce,disableSwap:se,orientation:he,marks:pe,color:oe,size:fe,step:ge,shiftStep:be,scale:ye,track:ke,valueLabelDisplay:Se,valueLabelFormat:we}),{axisProps:Re,getRootProps:ze,getHiddenInputProps:Pe,getThumbProps:Ne,open:Te,active:Ie,axis:Me,focusedThumbIndex:Ee,range:je,dragging:Oe,marks:Ve,values:Fe,trackOffset:De,trackLeap:Ye,getThumbStyle:Qe}=T((0,n.A)({},Ce,{rootRef:t}));Ce.marked=Ve.length>0&&Ve.some((e=>e.label)),Ce.dragging=Oe,Ce.focusedThumbIndex=Ee;const Xe=(e=>{const{disabled:t,dragging:r,marked:a,orientation:n,track:o,classes:l,color:i,size:s}=e,u={root:["root",t&&"disabled",r&&"dragging",a&&"marked","vertical"===n&&"vertical","inverted"===o&&"trackInverted",!1===o&&"trackFalse",i&&"color".concat((0,F.A)(i)),s&&"size".concat((0,F.A)(s))],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",s&&"thumbSize".concat((0,F.A)(s)),i&&"thumbColor".concat((0,F.A)(i))],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return(0,c.A)(u,Q,l)})(Ce),Be=null!=(r=null!=(u=null==Ae?void 0:Ae.root)?u:ae.Root)?r:U,Ke=null!=(d=null!=(p=null==Ae?void 0:Ae.rail)?p:ae.Rail)?d:$,We=null!=(m=null!=(v=null==Ae?void 0:Ae.track)?v:ae.Track)?m:_,He=null!=(h=null!=(b=null==Ae?void 0:Ae.thumb)?b:ae.Thumb)?h:q,Ue=null!=(f=null!=(g=null==Ae?void 0:Ae.valueLabel)?g:ae.ValueLabel)?f:G,$e=null!=(y=null!=(x=null==Ae?void 0:Ae.mark)?x:ae.Mark)?y:J,_e=null!=(A=null!=(S=null==Ae?void 0:Ae.markLabel)?S:ae.MarkLabel)?A:Z,qe=null!=(w=null!=(L=null==Ae?void 0:Ae.input)?L:ae.Input)?w:"input",Ge=null!=(C=null==xe?void 0:xe.root)?C:ne.root,Je=null!=(R=null==xe?void 0:xe.rail)?R:ne.rail,Ze=null!=(z=null==xe?void 0:xe.track)?z:ne.track,et=null!=(P=null==xe?void 0:xe.thumb)?P:ne.thumb,tt=null!=(N=null==xe?void 0:xe.valueLabel)?N:ne.valueLabel,rt=null!=(I=null==xe?void 0:xe.mark)?I:ne.mark,at=null!=(E=null==xe?void 0:xe.markLabel)?E:ne.markLabel,nt=null!=(j=null==xe?void 0:xe.input)?j:ne.input,ot=(0,i.Q)({elementType:Be,getSlotProps:ze,externalSlotProps:Ge,externalForwardedProps:Le,additionalProps:(0,n.A)({},V(Be)&&{as:re}),ownerState:(0,n.A)({},Ce,null==Ge?void 0:Ge.ownerState),className:[Xe.root,ie]}),lt=(0,i.Q)({elementType:Ke,externalSlotProps:Je,ownerState:Ce,className:Xe.rail}),it=(0,i.Q)({elementType:We,externalSlotProps:Ze,additionalProps:{style:(0,n.A)({},Re[Me].offset(De),Re[Me].leap(Ye))},ownerState:(0,n.A)({},Ce,null==Ze?void 0:Ze.ownerState),className:Xe.track}),st=(0,i.Q)({elementType:He,getSlotProps:Ne,externalSlotProps:et,ownerState:(0,n.A)({},Ce,null==et?void 0:et.ownerState),className:Xe.thumb}),ct=(0,i.Q)({elementType:Ue,externalSlotProps:tt,ownerState:(0,n.A)({},Ce,null==tt?void 0:tt.ownerState),className:Xe.valueLabel}),ut=(0,i.Q)({elementType:$e,externalSlotProps:rt,ownerState:Ce,className:Xe.mark}),dt=(0,i.Q)({elementType:_e,externalSlotProps:at,ownerState:Ce,className:Xe.markLabel}),pt=(0,i.Q)({elementType:qe,getSlotProps:Pe,externalSlotProps:nt,ownerState:Ce});return(0,B.jsxs)(Be,(0,n.A)({},ot,{children:[(0,B.jsx)(Ke,(0,n.A)({},lt)),(0,B.jsx)(We,(0,n.A)({},it)),Ve.filter((e=>e.value>=ve&&e.value<=me)).map(((e,t)=>{const r=k(e.value,ve,me),a=Re[Me].offset(r);let i;return i=!1===ke?-1!==Fe.indexOf(e.value):"normal"===ke&&(je?e.value>=Fe[0]&&e.value<=Fe[Fe.length-1]:e.value<=Fe[0])||"inverted"===ke&&(je?e.value<=Fe[0]||e.value>=Fe[Fe.length-1]:e.value>=Fe[0]),(0,B.jsxs)(o.Fragment,{children:[(0,B.jsx)($e,(0,n.A)({"data-index":t},ut,!(0,s.g)($e)&&{markActive:i},{style:(0,n.A)({},a,ut.style),className:(0,l.A)(ut.className,i&&Xe.markActive)})),null!=e.label?(0,B.jsx)(_e,(0,n.A)({"aria-hidden":!0,"data-index":t},dt,!(0,s.g)(_e)&&{markLabelActive:i},{style:(0,n.A)({},a,dt.style),className:(0,l.A)(Xe.markLabel,dt.className,i&&Xe.markLabelActive),children:e.label})):null]},t)})),Fe.map(((e,t)=>{const r=k(e,ve,me),a=Re[Me].offset(r),o="off"===Se?ee:Ue;return(0,B.jsx)(o,(0,n.A)({},!(0,s.g)(o)&&{valueLabelFormat:we,valueLabelDisplay:Se,value:"function"===typeof we?we(ye(e),t):we,index:t,open:Te===t||Ie===t||"on"===Se,disabled:ce},ct,{children:(0,B.jsx)(He,(0,n.A)({"data-index":t},st,{className:(0,l.A)(Xe.thumb,st.className,Ie===t&&Xe.active,Ee===t&&Xe.focusVisible),style:(0,n.A)({},a,Qe(t),st.style),children:(0,B.jsx)(qe,(0,n.A)({"data-index":t,"aria-label":ue?ue(t):Y,"aria-valuenow":ye(e),"aria-labelledby":te,"aria-valuetext":de?de(ye(e),t):X,value:Fe[t]},pt))}))}),t)}))]}))})),re=te},96937:(e,t,r)=>{r.d(t,{A:()=>m});var a=r(95265),n=r(64032),o=r(72296),l=r(53672),i=r(29086),s=r.n(i),c=r(81863),u=r(37012);const d=["name"],p=["children","className","clone","component"];function m(e){return function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{name:i}=r,m=(0,n.A)(r,d);let v=i;const h="function"===typeof t?e=>({root:r=>t((0,a.A)({theme:e},r))}):{root:t},b=(0,c.A)(h,(0,a.A)({Component:e,name:i||e.displayName,classNamePrefix:v},m));let f,g={};t.filterProps&&(f=t.filterProps,delete t.filterProps),t.propTypes&&(g=t.propTypes,delete t.propTypes);const y=o.forwardRef((function(t,r){const{children:i,className:s,clone:c,component:d}=t,m=(0,n.A)(t,p),v=b(t),h=(0,l.A)(v.root,s);let g=m;if(f&&(g=function(e,t){const r={};return Object.keys(e).forEach((a=>{-1===t.indexOf(a)&&(r[a]=e[a])})),r}(g,f)),c)return o.cloneElement(i,(0,a.A)({className:(0,l.A)(i.props.className,h)},g));if("function"===typeof i)return i((0,a.A)({className:h},g));const y=d||e;return(0,u.jsx)(y,(0,a.A)({ref:r,className:h},g,{children:i}))}));return s()(y,e),y}}}}]);
//# sourceMappingURL=4365.dbaf35a9.chunk.js.map