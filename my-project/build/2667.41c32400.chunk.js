(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[2667],{20827:(R,M,n)=>{var i=n(88644),h=n(80312),c="[object Boolean]";function T(s){return s===!0||s===!1||h(s)&&i(s)==c}R.exports=T},41577:(R,M,n)=>{var i=n(48990);function h(c){return i(c)&&c!=+c}R.exports=h},48990:(R,M,n)=>{var i=n(88644),h=n(80312),c="[object Number]";function T(s){return typeof s=="number"||h(s)&&i(s)==c}R.exports=T},41964:(R,M,n)=>{"use strict";n.d(M,{D:()=>s});var i=n(53657),h=n(2669),c=n(28703);function T(D,y,O){if(!D||!y||!O)return{display:"none"};const{x:I,y:x}=O;return{transform:`translate(${I}px, ${x}px)`}}const s=({renderItem:D})=>{const{itemType:y,isDragging:O,item:I,initialOffset:x,currentOffset:d,mouseOffset:C}=(0,c.useDragLayer)(p=>({item:p.getItem(),itemType:p.getItemType(),initialOffset:p.getInitialSourceClientOffset(),currentOffset:p.getSourceClientOffset(),isDragging:p.isDragging(),mouseOffset:p.getClientOffset()}));return O?(0,i.jsx)(h.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:(0,i.jsx)(h.x,{style:T(x,d,C),children:D({type:y,item:I})})}):null}},59245:(R,M,n)=>{"use strict";n.d(M,{a:()=>v,b:()=>W,c:()=>Z,d:()=>L,g:()=>p,i:()=>U,m:()=>A,s:()=>S,u:()=>K});var i=n(96125),h=n(28703),c=n(13302),T=n(75377),s=n(29776),D=n(20590),y=n(20827),O=n(85392),I=n(41577),x=n(13601),d=n(59891);const p=e=>`content-manager.${e}`;(0,i.createContext)();const k=(e,a,{onCancel:o,onDropItem:t,onGrabItem:u,onMoveItem:f})=>{const[l,E]=(0,i.useState)(!1),P=g=>{l&&(g==="UP"?f(a-1,a):g==="DOWN"&&f(a+1,a))},m=()=>{l?(t&&t(a),E(!1)):(u&&u(a),E(!0))},r=()=>{l&&(E(!1),o&&o(a))};return g=>{if(e&&!(g.key==="Tab"&&!l))switch(g.preventDefault(),g.key){case" ":case"Enter":m();break;case"Escape":r();break;case"ArrowDown":case"ArrowRight":P("DOWN");break;case"ArrowUp":case"ArrowLeft":P("UP");break}}},K=(e,{type:a="STRAPI_DND",index:o,item:t={},onStart:u,onEnd:f,onGrabItem:l,onDropItem:E,onCancel:P,onMoveItem:m,dropSensitivity:r="regular"})=>{const _=(0,i.useRef)(null),[{handlerId:g},B]=(0,h.useDrop)({accept:a,collect(j){return{handlerId:j.getHandlerId()}},hover(j,Q){if(!_.current)return;const N=j.index,w=o;if(N!==w){if(r==="regular"){const z=_.current.getBoundingClientRect(),H=(z.bottom-z.top)/2,X=Q.getClientOffset().y-z.top;if(N<w&&X<H||N>w&&X>H)return}m(w,N),j.index=w}}}),[{isDragging:b},V,Y]=(0,h.useDrag)({type:a,item(){u&&u();const{width:j}=_.current?.getBoundingClientRect()??{};return{index:o,width:j,...t}},end(){f&&f()},canDrag:e,isDragging:t.id?j=>t.id===j.getItem().id:void 0,collect:j=>({isDragging:j.isDragging()})}),G=k(e,o,{onGrabItem:l,onDropItem:E,onCancel:P,onMoveItem:m});return[{handlerId:g,isDragging:b,handleKeyDown:G},_,B,V,Y]},L=()=>e=>e["content-manager_app"]||T.J,W=()=>(0,c.P1)(L(),e=>({collectionTypeLinks:e.collectionTypeLinks,singleTypeLinks:e.singleTypeLinks})),A=()=>(0,c.P1)(L(),({components:e,models:a})=>({schemas:[...e,...a]})),S=(0,c.P1)(L(),e=>e.fieldSizes),$=(e,a)=>{typeof e=="function"?e(a):e!=null&&(e.current=a)},Z=(...e)=>a=>e.forEach(o=>$(o,a));function U(e){return["integer","biginteger","decimal","float","number"].includes(e)}d.kM(d.nK,"defined",function(){return this.test("defined",s.translatedErrors.required,e=>e!==void 0)}),d.kM(d.IX,"notEmptyMin",function(e){return this.test("notEmptyMin",s.translatedErrors.min,a=>O(a)?!0:a.length>=e)}),d.kM(d.Z_,"isInferior",function(e,a){return this.test("isInferior",e,function(o){return!o||Number.isNaN(x(o))?!0:x(a)>=x(o)})}),d.kM(d.Z_,"isSuperior",function(e,a){return this.test("isSuperior",e,function(o){return!o||Number.isNaN(x(o))?!0:x(o)>=x(a)})});const F=e=>D(e,["attributes"],{}),v=(e,{components:a},o={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1,isJSONTestDisabled:!1})=>{const t=F(e);return d.Ry().shape(Object.keys(t).reduce((u,f)=>{const l=t[f];if(l.type!=="relation"&&l.type!=="component"&&l.type!=="dynamiczone"){const E=J(l.type,l,o);u[f]=E}if(l.type==="relation"&&(u[f]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(l.relationType)?d.Ry().nullable():d.IX().nullable()),l.type==="component"){const E=v(a[l.component],{components:a},{...o,isFromComponent:!0});if(l.repeatable===!0){const{min:m,max:r,required:_}=l;let g=d.Vo(B=>{let b=d.IX().of(E);return m?_?b=b.min(m,s.translatedErrors.min):_!==!0&&O(B)?b=b.nullable():b=b.min(m,s.translatedErrors.min):_&&!o.isDraft&&(b=b.min(1,s.translatedErrors.required)),r&&(b=b.max(r,s.translatedErrors.max)),b});return u[f]=g,u}const P=d.Vo(m=>m!==void 0?l.required===!0&&!o.isDraft?E.defined():E.nullable():l.required===!0?d.Ry().defined():d.Ry().nullable());return u[f]=P,u}if(l.type==="dynamiczone"){let E=d.IX().of(d.Vo(({__component:r})=>v(a[r],{components:a},{...o,isFromComponent:!0})));const{max:P,min:m}=l;m?l.required?E=E.test("min",s.translatedErrors.min,r=>o.isCreatingEntry?r&&r.length>=m:r===void 0?!0:r!==null&&r.length>=m).test("required",s.translatedErrors.required,r=>o.isCreatingEntry?r!==null||r!==void 0:r===void 0?!0:r!==null):E=E.notEmptyMin(m):l.required&&!o.isDraft&&(E=E.test("required",s.translatedErrors.required,r=>o.isCreatingEntry?r!==null||r!==void 0:r===void 0?!0:r!==null)),P&&(E=E.max(P,s.translatedErrors.max)),u[f]=E}return u},{}))},J=(e,a,o)=>{let t=d.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(e)&&(t=d.Z_()),e==="blocks"&&(t=d.nK().test("isJSON",s.translatedErrors.json,u=>o.isJSONTestDisabled||o.isDraft?!0:!(u&&!Array.isArray(u)))),e==="json"&&(t=d.nK(s.translatedErrors.json).test("isJSON",s.translatedErrors.json,u=>{if(o.isJSONTestDisabled||!u||!u.length)return!0;try{return JSON.parse(u),!0}catch{return!1}}).nullable().test("required",s.translatedErrors.required,u=>!(a.required&&(!u||!u.length)))),e==="email"&&(t=t.email(s.translatedErrors.email)),["number","integer","float","decimal"].includes(e)&&(t=d.Rx().transform(u=>I(u)?void 0:u).typeError()),e==="biginteger"&&(t=d.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(e)&&(t=d.hT()),Object.keys(a).forEach(u=>{const f=a[u];if(f||!y(f)&&Number.isInteger(Math.floor(f))||f===0)switch(u){case"required":{o.isDraft||(e==="password"&&o.isCreatingEntry&&(t=t.required(s.translatedErrors.required)),e!=="password"&&(o.isCreatingEntry?t=t.required(s.translatedErrors.required):t=t.test("required",s.translatedErrors.required,l=>l===void 0&&!o.isFromComponent?!0:U(e)?l===0?!0:!!l:e==="boolean"?l!=null:e==="date"||e==="datetime"?typeof l=="string"?!O(l):!O(l?.toString()):!O(l))));break}case"max":{e==="biginteger"?t=t.isInferior(s.translatedErrors.max,f):t=t.max(f,s.translatedErrors.max);break}case"maxLength":t=t.max(f,s.translatedErrors.maxLength);break;case"min":{e==="biginteger"?t=t.isSuperior(s.translatedErrors.min,f):t=t.min(f,s.translatedErrors.min);break}case"minLength":{o.isDraft||(t=t.min(f,s.translatedErrors.minLength));break}case"regex":t=t.matches(new RegExp(f),{message:s.translatedErrors.regex,excludeEmptyString:!a.required});break;case"lowercase":["text","textarea","email","string"].includes(e)&&(t=t.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(e)&&(t=t.strict().uppercase());break;case"positive":U(e)&&(t=t.positive());break;case"negative":U(e)&&(t=t.negative());break;default:t=t.nullable()}}),t}},49586:(R,M,n)=>{"use strict";n.d(M,{VY:()=>u,__:()=>l,ck:()=>f,fC:()=>o,fF:()=>P,rl:()=>E,tu:()=>m,xz:()=>t});var i=n(53657),h=n(96125),c=n(31195),T=n(26104),s=n(12406),D=n(87426),y=n(44171),O=n(26478),I=n(99283),x=n(2669),d=n(93134),C=n(48814);const p=c.fC,k=(0,h.forwardRef)(({size:r,endIcon:_=(0,i.jsx)(T.Z,{width:`${6/16}rem`,height:`${4/16}rem`,"aria-hidden":!0}),...g},B)=>(0,i.jsx)(c.xz,{asChild:!0,children:(0,i.jsx)(I.z,{ref:B,type:"button",variant:"ghost",endIcon:_,paddingTop:r==="S"?1:2,paddingBottom:r==="S"?1:2,paddingLeft:r==="S"?3:4,paddingRight:r==="S"?3:4,...g})})),K=(0,h.forwardRef)(({children:r,intersectionId:_,popoverPlacement:g="bottom-start",...B},b)=>{const[V,Y]=g.split("-");return(0,i.jsx)(c.Uv,{children:(0,i.jsx)(c.VY,{align:Y,side:V,loop:!0,asChild:!0,children:(0,i.jsxs)(L,{ref:b,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",position:"relative",overflow:"auto",...B,children:[r,(0,i.jsx)(x.x,{id:_,width:"100%",height:"1px"})]})})})}),L=(0,D.default)(d.k)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,W=({onSelect:r,disabled:_=!1,...g})=>(0,i.jsx)(c.ck,{asChild:!0,onSelect:r,disabled:_,children:g.isLink||g.isExternal?(0,i.jsx)($,{color:"neutral800",...g,isExternal:g.isExternal??!1,children:(0,i.jsx)(C.Z,{children:g.children})}):(0,i.jsx)(S,{cursor:"pointer",color:"neutral800",background:"transparent",borderStyle:"none",...g,children:(0,i.jsx)(C.Z,{children:g.children})})}),A=({theme:r})=>(0,D.css)`
  text-align: left;
  width: 100%;
  border-radius: ${r.borderRadius};
  padding: ${r.spaces[2]} ${r.spaces[4]};

  ${C.Z} {
    color: inherit;
  }

  &[aria-disabled] {
    cursor: not-allowed;

    ${C.Z} {
      color: ${r.colors.neutral500};
    }
  }

  &[data-highlighted] {
    background-color: ${r.colors.primary100};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,S=(0,D.default)(d.k)`
  ${A}
`,$=(0,D.default)(O.r)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:r,color:_})=>(0,y.$)(r.colors,_,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${A}
`,Z=(0,h.forwardRef)((r,_)=>(0,i.jsx)(c.__,{asChild:!0,children:(0,i.jsx)(U,{ref:_,variant:"sigma",textColor:"neutral600",...r})})),U=(0,D.default)(C.Z)`
  padding: ${({theme:r})=>r.spaces[2]} ${({theme:r})=>r.spaces[4]};
`,F=c.Tr,v=(0,h.forwardRef)(({disabled:r=!1,..._},g)=>(0,i.jsx)(c.fF,{asChild:!0,disabled:r,children:(0,i.jsxs)(J,{ref:g,color:"neutral800",as:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,..._,children:[(0,i.jsx)(C.Z,{children:_.children}),(0,i.jsx)(e,{height:12,width:12})]})})),J=(0,D.default)(S)`
  &[data-state='open'] {
    background-color: ${({theme:r})=>r.colors.primary100};
  }
`,e=(0,D.default)(s.Z)`
  path {
    fill: ${({theme:r})=>r.colors.neutral500};
  }
`,a=(0,h.forwardRef)((r,_)=>(0,i.jsx)(c.Uv,{children:(0,i.jsx)(c.tu,{sideOffset:8,asChild:!0,children:(0,i.jsx)(L,{ref:_,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...r})})})),o=p,t=k,u=K,f=W,l=Z,E=F,P=v,m=a},92946:(R,M,n)=>{"use strict";n.d(M,{sN:()=>s});var i=n(53657),h=n(96125),c=n(49586);const T=({children:D,onOpen:y,onClose:O,popoverPlacement:I,onReachEnd:x,...d})=>{const C=useRef(null),[p,k]=useState(!1),K=S=>{x&&x(S)},L=S=>{S&&typeof y=="function"?y():!S&&typeof O=="function"&&O(),k(S)},W=useId(),A=`intersection-${stripReactIdOfColon(W)}`;return useIntersection(C,K,{selectorToWatch:`#${A}`,skipWhen:!p}),jsxs(Root,{onOpenChange:L,children:[jsx(Trigger,{...d,children:d.label}),jsx(Content,{intersectionId:A,popoverPlacement:I,children:D})]})},s=c.ck},34823:(R,M,n)=>{"use strict";n.d(M,{d7:()=>c});var i=n(69054);const{Axios:h,AxiosError:c,CanceledError:T,isCancel:s,CancelToken:D,VERSION:y,all:O,Cancel:I,isAxiosError:x,spread:d,toFormData:C,AxiosHeaders:p,HttpStatusCode:k,formToJSON:K,getAdapter:L,mergeConfig:W}=i.default}}]);
