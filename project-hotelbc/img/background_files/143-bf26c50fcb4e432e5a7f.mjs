(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[143],{"0EiH":function(t,e,i){i.r(e);var n=i("q1tI"),s=i("/MKj"),o=i("EgnG"),r=i("ihsa"),a=i("n6mq"),c=i("nKUr");function l({addedStyles:t,button:e,headerText:i,icon:s,iconOverride:o,minHeight:l,subHeaderText:d}){return Object(c.jsx)(a.f,{display:"flex",justifyContent:"center",width:"100vw",paddingX:2,children:Object(c.jsxs)(a.f,{alignContent:"center",alignItems:"center",bottom:!0,color:"white",dangerouslySetInlineStyle:{__style:{boxShadow:"0 3px 6px rgba(0,0,0,0.18)",transform:"translateY(-20px)",...t}},display:"flex",minHeight:l||75,padding:6,position:"relative",rounding:4,width:"100%",children:[(()=>{const t=o||Object(c.jsxs)(n.Fragment,{children:[Object(c.jsx)(r.a,{unsafeCSS:"\n@keyframes baseEduToastIconScale {\n  0% {\n    transform: scale(0)\n  }\n  30% {\n    transform: scale(1.2);\n  }\n  50% {\n    transform: scale(1);\n  }\n}\n"}),Object(c.jsx)(a.f,{alignItems:"center",color:"blue","data-test-id":"pin-save-toast",direction:"column",dangerouslySetInlineStyle:{__style:{animation:"baseEduToastIconScale 3s"}},display:"flex",height:60,justifyContent:"center",minHeight:60,minWidth:60,rounding:"circle",width:60,children:Object(c.jsx)(a.w,{accessibilityLabel:s.accessibilityLabel,color:s.color,dangerouslySetSvgPath:s.dangerouslySetSvgPath,icon:s.icon,inline:s.inline,size:s.size})})]});return Object(c.jsx)(a.f,{marginEnd:4,children:t})})(),Object(c.jsxs)(a.f,{marginEnd:"auto",children:[Object(c.jsx)(a.cb,{color:"darkGray",weight:"bold",children:i}),d&&Object(c.jsx)(a.f,{paddingY:1,children:Object(c.jsx)(a.cb,{size:"lg",color:"darkGray",children:d})})]}),Object(c.jsx)(a.f,{display:"flex",flex:"shrink",marginStart:2,children:e})]})})}i("8ifP");var d=i("yweb");function h(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const u=(t,e)=>(t-e)/2,b=68,p=u(b,68),m=u(b,66),g=u(b,60),j="cubicBezier(0.25, 0.1, 0.25, 1)",f="encourageToastIconContainer",x="encourageToastIconRadiateBg",y="encourageToastIconRadiateRing",w={targets:"#"+f,duration:300,scale:1.4,easing:j},O={targets:"#"+f,duration:300,scale:1,easing:j,endDelay:1e3},S={targets:"#"+f,duration:300,scale:.42,easing:j},T={targets:"#"+x,duration:400,opacity:0,scale:1.6,easing:j},v={targets:"#"+y,duration:650,opacity:0,scale:2,easing:j};class I extends n.PureComponent{constructor(...t){super(...t),h(this,"delayTimer",null),h(this,"requestAnimationFrameId",null),h(this,"playAnimation",()=>{this.requestAnimationFrameId=window.requestAnimationFrame(()=>{Object(o.a)(T),Object(o.a)(v),Object(o.a)(w).finished.then(()=>{Object(o.a)(O).finished.then(()=>{o.a.set("#"+f,{transformOrigin:"top right"}),Object(o.a)(S)})})})}),h(this,"getHeaderText",()=>{const{text:t}=this.props;return"string"==typeof t?t:t[0]?t[0]:t}),h(this,"getIconProps",()=>({accessibilityLabel:this.props.i18n._("Check icon","Label for check icon on toast shown after board create","Label for check icon on toast shown after board create"),color:"white",icon:"check",size:30})),h(this,"getSubHeaderText",()=>{const{text:t}=this.props;return t instanceof Array&&t.length>1&&t[1]?t[1]:""}),h(this,"renderAnimatedIcon",()=>Object(c.jsxs)(a.f,{height:b,position:"relative",width:b,children:[Object(c.jsx)(a.f,{"data-test-id":"pin-save-toast",width:60,height:60,overflow:"hidden",position:"absolute",rounding:4,dangerouslySetInlineStyle:{__style:{left:g+"px",top:g+"px"}},children:this.props.thumbnail}),Object(c.jsxs)(a.f,{id:f,height:b,width:b,dangerouslySetInlineStyle:{__style:{transform:"scale(0)"}},position:"absolute",children:[Object(c.jsx)(a.f,{color:"blue",id:x,width:68,height:68,position:"absolute",rounding:"circle",dangerouslySetInlineStyle:{__style:{left:p+"px",top:p+"px",transform:"scale(0)"}}}),Object(c.jsx)(a.f,{id:y,width:66,height:66,position:"absolute",rounding:"circle",opacity:1,dangerouslySetInlineStyle:{__style:{borderWidth:"2px",borderStyle:"solid",borderColor:"#0074e8",left:m+"px",top:m+"px",transform:"scale(0)"}}}),Object(c.jsx)(a.f,{alignItems:"center",color:"blue",direction:"column",display:"flex",height:b,justifyContent:"center",minHeight:b,minWidth:b,position:"absolute",rounding:"circle",width:b,children:Object(c.jsx)(a.w,{accessibilityLabel:this.props.i18n._("Check icon","Label for check icon on toast shown after board create","Label for check icon on toast shown after board create"),color:"white",icon:"check",size:30})})]})]}))}componentDidMount(){this.delayTimer=setTimeout(this.playAnimation,700)}componentWillUnmount(){this.delayTimer&&clearTimeout(this.delayTimer),this.requestAnimationFrameId&&window.cancelAnimationFrame(this.requestAnimationFrameId)}render(){const{isRepinToExistingBoard:t,button:e}=this.props,i=t;return Object(c.jsx)(l,{button:e,headerText:this.getHeaderText(),icon:this.getIconProps(),iconOverride:i?void 0:this.renderAnimatedIcon(),subHeaderText:this.getSubHeaderText()})}}var _=function(t){const e=Object(d.c)();return Object(c.jsx)(I,{...t,i18n:e})},A=i("i2lo"),E=i("4kAQ");class H extends n.PureComponent{constructor(...t){var e,i,n;super(...t),n=()=>{const{completeExperience:t,experience:e,onTouch:i}=this.props;if(i&&i(),e){const{experience_id:i,placement_id:n}=e;t(n,i)}},(i="handleTouch")in(e=this)?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n}render(){const{eligibleIds:t,experience:e,text:i}=this.props;return t?Object(c.jsx)(A.a,{experience:e,eligibleIds:t,children:Object(c.jsx)(a.bb,{onTap:this.handleTouch,rounding:2,children:Object(c.jsx)(a.f,{display:"flex",justifyContent:"center",paddingX:4,width:"100vw",children:Object(c.jsx)(a.f,{alignContent:"center",alignItems:"center",bottom:!0,color:"darkGray",display:"flex",paddingX:4,paddingY:4,position:"relative",rounding:"pill",children:Object(c.jsxs)(a.u,{alignItems:"center",justifyContent:"start",children:[Object(c.jsx)(a.f,{marginStart:2,children:Object(c.jsx)(a.cb,{color:"white",inline:!0,weight:"bold",children:i})}),Object(c.jsx)(a.f,{display:"inlineBlock",marginStart:4,children:Object(c.jsx)(a.w,{accessibilityLabel:"arrow forward",color:"white",icon:"arrow-circle-forward",inline:!0,size:24})})]})})})})}):null}}var C=Object(s.connect)(null,t=>({completeExperience:(e,i)=>t(Object(E.a)(e,i)),dismissExperience:(e,i)=>t(Object(E.d)(e,i))}))(H),k=i("bcHz"),X=i("Lr1Z"),Y=i("qpbZ");function F(t){const e=Object(d.c)(),{text:i,thumbnail:n}=t,s=i instanceof Array?i.length>1?i[0]:"":i||"",o=Object(c.jsxs)(a.u,{alignItems:"stretch",justifyContent:"start",children:[Object(c.jsx)(a.u,{alignItems:"stretch",direction:"column",justifyContent:"center",children:n?Object(c.jsx)(a.D,{rounding:2,height:48,width:48,children:n}):null}),Object(c.jsx)(a.f,{direction:"column",display:"flex",justifyContent:"center",paddingX:2,children:Object(c.jsx)(a.cb,{color:"white",children:Object(Y.b)(e._("Welcome back, {{firstName}}! Log in and get inspired","Welcome back prompt in personalized login toast.","Welcome back prompt in personalized login toast."),{firstName:s})})}),Object(c.jsx)(a.u,{alignItems:"stretch",direction:"column",justifyContent:"center",children:Object(c.jsx)(a.w,{accessibilityLabel:"",color:"white",icon:"arrow-circle-forward",size:36})})]});return Object(c.jsx)(a.f,{marginBottom:3,paddingX:4,maxWidth:376,width:"100vw",children:Object(c.jsx)(a.f,{color:"darkGray",fit:!0,paddingX:6,paddingY:5,rounding:"pill",children:o})})}var L=i("LT60");function q({ideaPinImages:t}){const e={1:28,2:40,3:48},i=t.map((t,e)=>{var i,n,s;return Object(c.jsx)(a.f,{height:48,width:28,color:"white",borderStyle:"sm",overflow:"hidden",rounding:2,dangerouslySetInlineStyle:{__style:{borderColor:"white",marginInlineEnd:"-17px",WebkitMaskImage:"-webkit-radial-gradient(white, black)",zIndex:e}},children:Object(c.jsx)(a.y,{alt:"",src:null!==(i=null==t?void 0:t.url)&&void 0!==i?i:"",color:"#696969",fit:"cover",naturalHeight:null!==(n=null==t?void 0:t.height)&&void 0!==n?n:1,naturalWidth:null!==(s=null==t?void 0:t.width)&&void 0!==s?s:1})},e)});return Object(c.jsx)(a.u,{justifyContent:"center",children:Object(c.jsx)(a.u,{justifyContent:"start",width:e[t.length],children:i})})}var z=i("0HhX");function D({handleHide:t,text:e,userId:i}){const n=Object(d.c)();Object(z.b)({name:"UserStoryPinsFeedResource",options:{data:{filter_version:2,public_only:!0},field_set_key:"partner_grid_item",user_id:i}});const o=Object(s.useSelector)(({feeds:t})=>t["story-pins-feed:"+i])||[],r=Object(s.useSelector)(({pins:t})=>t)||[],l=Object(s.useSelector)(({users:t})=>t[i]),h=`/${l.username}/`,{image_medium_url:u}=l,b=Array.isArray(e)?e.join(" "):e,p=Object(c.jsx)(X.a,{to:h,onTouch:t,rounding:"pill",pressState:"none",children:b});if(0===(o||[]).length){const t=u?Object(c.jsx)(a.f,{height:48,overflow:"hidden",width:48,children:Object(c.jsx)(a.y,{alt:n._("Image of who you followed","userFollowingToast.thumbnail.userImage","Profile thumbnail of the user you followed"),fit:"cover",naturalHeight:1,naturalWidth:1,src:u})}):void 0;return Object(c.jsx)(a.fb,{text:p,thumbnail:t,thumbnailShape:"circle"})}const m=[];o.slice(0,3).map(t=>{var e;return m.push(null===(e=r[t.id].images)||void 0===e?void 0:e["170x"])});const g=Object(c.jsx)(q,{ideaPinImages:m});return Object(c.jsx)(a.fb,{thumbnail:g,text:p,thumbnailShape:"square"})}var P=i("QtD7");function W(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const M=t=>({x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}),B=(t,e,i)=>((t,e)=>Math.sqrt(t*t+e*e))(t,e)/(Date.now()-i),U=(t,e)=>t-e;class R extends n.Component{constructor(...t){super(...t),W(this,"state",{isSwiping:!1,deltaX:0,deltaY:0,startX:0,startY:0,startTime:0}),W(this,"isMounted",!1),W(this,"handleTouchStart",t=>{const{onSwipeStart:e}=this.props,i=t.touches[0].clientX,n=t.touches[0].clientY;document.body&&(document.body.style.overflow="hidden",document.body.style.touchAction="none"),e&&e({startX:i,startY:n}),this.setState({startX:i,startY:n,startTime:Date.now()})}),W(this,"handleTouchMove",t=>{const{onSwiping:e}=this.props,{isSwiping:i,startX:n,startY:s}=this.state,o=M(t),r=U(o.x,n),a=U(o.y,s);(i||((t,e)=>Math.abs(t)>5||Math.abs(e)>5)(r,a))&&(t.stopPropagation(),e&&e({deltaX:r,deltaY:a}),this.requestId=window.requestAnimationFrame(()=>{this.isMounted&&this.setState({deltaX:r,deltaY:a,isSwiping:!0})}))}),W(this,"handleTouchEnd",t=>{const{onSwipeEnd:e}=this.props,{isSwiping:i,startX:n,startY:s,startTime:o}=this.state;if(document.body&&(document.body.style.overflow="visible",document.body.style.touchAction="auto"),!i)return;const r=M(t),a=r.x-n,c=r.y-s;if(e){const t=B(a,c,o);e({deltaX:a,deltaY:c,velocity:t,isFlick:t>.7})}this.requestId=window.requestAnimationFrame(()=>{this.setState({deltaX:a,deltaY:c,isSwiping:!1})})})}componentDidMount(){this.isMounted=!0}componentWillUnmount(){this.isMounted=!1,window.cancelAnimationFrame(this.requestId)}render(){const{startX:t,startY:e,deltaX:i,deltaY:n,isSwiping:s}=this.state;return Object(c.jsx)("div",{onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,children:this.props.children({startX:t,startY:e,deltaX:i,deltaY:n,isSwiping:s})})}}var G=i("nq2V"),N=i("ulr2");function V(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const K={initial:{opacity:0,transform:"translateY(200px)"},visible:{opacity:1,transform:"translateY(0)",transition:"all 0.7s cubic-bezier(.19, 1.15, .48, 1)"},hiding:{opacity:0,transform:"scale(1.1)",transition:"opacity transform .2s"}},$={hiding:{...K.hiding,transform:"scale(1)"}};class Q extends n.PureComponent{constructor(...t){super(...t),V(this,"state",{visible:!1,hiding:!1}),V(this,"legoEncouragementToastExp",""),V(this,"isLegoEncouragementToast",!1),V(this,"handleHide",()=>{this.setState({hiding:!0}),this.hidingTimeout=setTimeout(this.props.hideToast,200)}),V(this,"handleTouch",t=>{const{onTouch:e}=this.props.toast;this.handleHide(),e&&e(t)}),V(this,"handleSwipeEnd",({isFlick:t}={})=>{t&&this.handleHide()}),V(this,"initializeTimeouts",()=>{this.slideInAnimation=window.requestAnimationFrame(()=>{this.setState({visible:!0})});const{duration:t,persistent:e}=this.props.toast;e||(this.visibleTimeout=setTimeout(this.handleHide,t||G.a))}),V(this,"delayTimer",null),V(this,"getToastFormat",()=>{const{button:t,eligibleIds:e,experience:i,href:n,isError:s,isRepinToExistingBoard:o,text:r,thumbnail:l,thumbnailShape:d,toastFormat:h,userId:u}=this.props.toast;switch(h){case"encouragement":return Object(c.jsx)(_,{button:t,isRepinToExistingBoard:o,text:r,thumbnail:l});case"experience":return Object(c.jsx)(C,{eligibleIds:e,experience:i,text:r});case"personalizedLoginToast":return Object(c.jsx)(F,{text:r,thumbnail:l});case"userFollowingToast":return Object(c.jsx)(D,{handleHide:this.handleHide,text:r,userId:u||""});case"standard":default:const h=Array.isArray(r)?r.join(" "):r;return Object(c.jsx)(a.fb,{color:s?"red":void 0,text:n?Object(c.jsx)(X.a,{to:n,onTouch:this.handleHide,rounding:"pill",pressState:"none",children:h}):h,thumbnail:l,thumbnailShape:d,button:t})}}),V(this,"getStyleInitial",()=>{const{top:t}=this.props.toast,e=t||G.b;return e?{...K.initial,top:e,transform:"translateY(0)"}:K.initial}),V(this,"getStyleVisible",()=>{const{top:t,toastFormat:e}=this.props.toast,i=t||"encouragement"===e?t:G.b;return i?{...K.visible,top:i,transform:`translateY(${i}px)`}:K.visible}),V(this,"renderSwipeableToast",({deltaX:t,isSwiping:e}={})=>{const{persistent:i,toastFormat:n}=this.props.toast,s="encouragement"===n?$.hiding:K.hiding,o=this.state.visible||i?e&&t?{transform:`translateX(${t}px)`}:this.state.hiding?s:this.getStyleVisible():this.getStyleInitial();return this.renderToast(o)}),V(this,"renderWithDelay",()=>this.state.visible?this.renderToast(this.getStyleVisible()):this.renderToast(this.getStyleInitial()))}componentDidMount(){const{delay:t}=this.props.toast;t?this.delayTimer=setTimeout(this.initializeTimeouts,t):this.initializeTimeouts(),this.props.setShowToastsState()}componentDidUpdate(t){const{toast:e}=this.props;e===t.toast||t.toast.persistent||(this.setState({visible:e.persistent,hiding:!1}),e.persistent||this.initializeTimeouts())}componentWillUnmount(){window.cancelAnimationFrame(this.slideInAnimation),clearTimeout(this.visibleTimeout),clearTimeout(this.hidingTimeout),this.delayTimer&&clearTimeout(this.delayTimer),this.props.setHideToastsState()}renderToast(t={}){const{href:e,onTouch:i,toastFormat:n,top:s}=this.props.toast,o=s||"encouragement"===n?s:G.b;let r=this.getToastFormat();const l=this.props.bottomSpacing;return i?r=Object(c.jsx)(k.a,{onTouch:this.handleTouch,rounding:"pill",pressState:"none",children:r}):e&&(r=Object(c.jsx)(X.a,{to:e,onTouch:this.handleHide,rounding:"pill",pressState:"none",children:r})),Object(c.jsx)(L.a,{children:Object(c.jsx)(a.A,{children:Object(c.jsx)(a.f,{bottom:!o,dangerouslySetInlineStyle:{__style:{...t,marginBottom:l}},justifyContent:"center",position:"fixed",width:"100%",display:"flex",zIndex:G.c,children:r})})})}render(){const{persistent:t,delay:e}=this.props.toast;return t&&e?this.renderWithDelay():t?this.renderToast():Object(c.jsx)(R,{onSwipeEnd:this.handleSwipeEnd,children:this.renderSwipeableToast})}}e.default=Object(s.connect)(()=>({}),t=>({setHideToastsState:()=>t(Object(N.m)()),setShowToastsState:()=>t(Object(N.N)()),isSpamDefensePreviewExp:()=>t(Object(P.a)("mweb_message_spam_defense")).startsWith("enabled")}))(Q)},nq2V:function(t,e,i){i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a}));var n=i("n6mq"),s=i("CYge");const o=2e3,r=28,a=new n.o([s.d])}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/143-bf26c50fcb4e432e5a7f.mjs.map