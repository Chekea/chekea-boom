"use strict";(self.webpackChunkmy_react_appo=self.webpackChunkmy_react_appo||[]).push([[277],{5277:(e,a,o)=>{o.d(a,{A:()=>x});var t=o(8587),c=o(8168),l=o(9950),r=o(2004),n=o(4061),i=o(9269),s=o(3235),d=o(4414);const p=(0,s.A)((0,d.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");var v=o(1506),m=o(1676),u=o(8079),b=o(8283),g=o(9254),h=o(863),y=o(8483);function C(e){return(0,y.Ay)("MuiChip",e)}const f=(0,h.A)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),A=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],k=(0,g.Ay)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e,{color:t,iconColor:c,clickable:l,onDelete:r,size:n,variant:i}=o;return[{["& .".concat(f.avatar)]:a.avatar},{["& .".concat(f.avatar)]:a["avatar".concat((0,m.A)(n))]},{["& .".concat(f.avatar)]:a["avatarColor".concat((0,m.A)(t))]},{["& .".concat(f.icon)]:a.icon},{["& .".concat(f.icon)]:a["icon".concat((0,m.A)(n))]},{["& .".concat(f.icon)]:a["iconColor".concat((0,m.A)(c))]},{["& .".concat(f.deleteIcon)]:a.deleteIcon},{["& .".concat(f.deleteIcon)]:a["deleteIcon".concat((0,m.A)(n))]},{["& .".concat(f.deleteIcon)]:a["deleteIconColor".concat((0,m.A)(t))]},{["& .".concat(f.deleteIcon)]:a["deleteIcon".concat((0,m.A)(i),"Color").concat((0,m.A)(t))]},a.root,a["size".concat((0,m.A)(n))],a["color".concat((0,m.A)(t))],l&&a.clickable,l&&"default"!==t&&a["clickableColor".concat((0,m.A)(t),")")],r&&a.deletable,r&&"default"!==t&&a["deletableColor".concat((0,m.A)(t))],a[i],a["".concat(i).concat((0,m.A)(t))]]}})((e=>{let{theme:a,ownerState:o}=e;const t="light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300];return(0,c.A)({maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",["&.".concat(f.disabled)]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},["& .".concat(f.avatar)]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:t,fontSize:a.typography.pxToRem(12)},["& .".concat(f.avatarColorPrimary)]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},["& .".concat(f.avatarColorSecondary)]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},["& .".concat(f.avatarSmall)]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},["& .".concat(f.icon)]:(0,c.A)({marginLeft:5,marginRight:-6},"small"===o.size&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&(0,c.A)({color:a.vars?a.vars.palette.Chip.defaultIconColor:t},"default"!==o.color&&{color:"inherit"})),["& .".concat(f.deleteIcon)]:(0,c.A)({WebkitTapHighlightColor:"transparent",color:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / 0.26)"):(0,i.X4)(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / 0.4)"):(0,i.X4)(a.palette.text.primary,.4)}},"small"===o.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==o.color&&{color:a.vars?"rgba(".concat(a.vars.palette[o.color].contrastTextChannel," / 0.7)"):(0,i.X4)(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].contrastText}})},"small"===o.size&&{height:24},"default"!==o.color&&{backgroundColor:(a.vars||a).palette[o.color].main,color:(a.vars||a).palette[o.color].contrastText},o.onDelete&&{["&.".concat(f.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,i.X4)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},o.onDelete&&"default"!==o.color&&{["&.".concat(f.focusVisible)]:{backgroundColor:(a.vars||a).palette[o.color].dark}})}),(e=>{let{theme:a,ownerState:o}=e;return(0,c.A)({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,i.X4)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},["&.".concat(f.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selectedChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,i.X4)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}},o.clickable&&"default"!==o.color&&{["&:hover, &.".concat(f.focusVisible)]:{backgroundColor:(a.vars||a).palette[o.color].dark}})}),(e=>{let{theme:a,ownerState:o}=e;return(0,c.A)({},"outlined"===o.variant&&{backgroundColor:"transparent",border:a.vars?"1px solid ".concat(a.vars.palette.Chip.defaultBorder):"1px solid ".concat("light"===a.palette.mode?a.palette.grey[400]:a.palette.grey[700]),["&.".concat(f.clickable,":hover")]:{backgroundColor:(a.vars||a).palette.action.hover},["&.".concat(f.focusVisible)]:{backgroundColor:(a.vars||a).palette.action.focus},["& .".concat(f.avatar)]:{marginLeft:4},["& .".concat(f.avatarSmall)]:{marginLeft:2},["& .".concat(f.icon)]:{marginLeft:4},["& .".concat(f.iconSmall)]:{marginLeft:2},["& .".concat(f.deleteIcon)]:{marginRight:5},["& .".concat(f.deleteIconSmall)]:{marginRight:3}},"outlined"===o.variant&&"default"!==o.color&&{color:(a.vars||a).palette[o.color].main,border:"1px solid ".concat(a.vars?"rgba(".concat(a.vars.palette[o.color].mainChannel," / 0.7)"):(0,i.X4)(a.palette[o.color].main,.7)),["&.".concat(f.clickable,":hover")]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[o.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,i.X4)(a.palette[o.color].main,a.palette.action.hoverOpacity)},["&.".concat(f.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[o.color].mainChannel," / ").concat(a.vars.palette.action.focusOpacity,")"):(0,i.X4)(a.palette[o.color].main,a.palette.action.focusOpacity)},["& .".concat(f.deleteIcon)]:{color:a.vars?"rgba(".concat(a.vars.palette[o.color].mainChannel," / 0.7)"):(0,i.X4)(a.palette[o.color].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].main}}})})),S=(0,g.Ay)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,a)=>{const{ownerState:o}=e,{size:t}=o;return[a.label,a["label".concat((0,m.A)(t))]]}})((e=>{let{ownerState:a}=e;return(0,c.A)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"outlined"===a.variant&&{paddingLeft:11,paddingRight:11},"small"===a.size&&{paddingLeft:8,paddingRight:8},"small"===a.size&&"outlined"===a.variant&&{paddingLeft:7,paddingRight:7})}));function I(e){return"Backspace"===e.key||"Delete"===e.key}const x=l.forwardRef((function(e,a){const o=(0,b.A)({props:e,name:"MuiChip"}),{avatar:i,className:s,clickable:g,color:h="default",component:y,deleteIcon:f,disabled:x=!1,icon:w,label:z,onClick:R,onDelete:O,onKeyDown:D,onKeyUp:L,size:T="medium",variant:V="filled",tabIndex:N,skipFocusWhenDisabled:P=!1}=o,M=(0,t.A)(o,A),E=l.useRef(null),X=(0,v.A)(E,a),F=e=>{e.stopPropagation(),O&&O(e)},K=!(!1===g||!R)||g,W=K||O?u.A:y||"div",j=(0,c.A)({},o,{component:W,disabled:x,size:T,color:h,iconColor:l.isValidElement(w)&&w.props.color||h,onDelete:!!O,clickable:K,variant:V}),_=(e=>{const{classes:a,disabled:o,size:t,color:c,iconColor:l,onDelete:r,clickable:i,variant:s}=e,d={root:["root",s,o&&"disabled","size".concat((0,m.A)(t)),"color".concat((0,m.A)(c)),i&&"clickable",i&&"clickableColor".concat((0,m.A)(c)),r&&"deletable",r&&"deletableColor".concat((0,m.A)(c)),"".concat(s).concat((0,m.A)(c))],label:["label","label".concat((0,m.A)(t))],avatar:["avatar","avatar".concat((0,m.A)(t)),"avatarColor".concat((0,m.A)(c))],icon:["icon","icon".concat((0,m.A)(t)),"iconColor".concat((0,m.A)(l))],deleteIcon:["deleteIcon","deleteIcon".concat((0,m.A)(t)),"deleteIconColor".concat((0,m.A)(c)),"deleteIcon".concat((0,m.A)(s),"Color").concat((0,m.A)(c))]};return(0,n.A)(d,C,a)})(j),U=W===u.A?(0,c.A)({component:y||"div",focusVisibleClassName:_.focusVisible},O&&{disableRipple:!0}):{};let B=null;O&&(B=f&&l.isValidElement(f)?l.cloneElement(f,{className:(0,r.A)(f.props.className,_.deleteIcon),onClick:F}):(0,d.jsx)(p,{className:(0,r.A)(_.deleteIcon),onClick:F}));let H=null;i&&l.isValidElement(i)&&(H=l.cloneElement(i,{className:(0,r.A)(_.avatar,i.props.className)}));let q=null;return w&&l.isValidElement(w)&&(q=l.cloneElement(w,{className:(0,r.A)(_.icon,w.props.className)})),(0,d.jsxs)(k,(0,c.A)({as:W,className:(0,r.A)(_.root,s),disabled:!(!K||!x)||void 0,onClick:R,onKeyDown:e=>{e.currentTarget===e.target&&I(e)&&e.preventDefault(),D&&D(e)},onKeyUp:e=>{e.currentTarget===e.target&&(O&&I(e)?O(e):"Escape"===e.key&&E.current&&E.current.blur()),L&&L(e)},ref:X,tabIndex:P&&x?-1:N,ownerState:j},U,M,{children:[H||q,(0,d.jsx)(S,{className:(0,r.A)(_.label),ownerState:j,children:z}),B]}))}))}}]);