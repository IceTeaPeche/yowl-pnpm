(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[6750],{31484:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(87426),i=e(39032),a=e(71536),d=e(91357),u=e(78455),o=e(33242),l=m=>m&&m.__esModule?m:{default:m};function g(m){if(m&&m.__esModule)return m;const v=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(m){for(const S in m)if(S!=="default"){const T=Object.getOwnPropertyDescriptor(m,S);Object.defineProperty(v,S,T.get?T:{enumerable:!0,get:()=>m[S]})}}return v.default=m,Object.freeze(v)}const j=g(s),x=l(r),L=({theme:m,expanded:v,variant:S,disabled:T,error:p})=>p?`1px solid ${m.colors.danger600} !important`:T?`1px solid ${m.colors.neutral150}`:v?`1px solid ${m.colors.primary600}`:S==="primary"?`1px solid ${m.colors.neutral0}`:`1px solid ${m.colors.neutral100}`,b=x.default(d.Typography)``,f=x.default(o.Box)`
  border: ${L};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:m})=>m.colors.primary600};

    ${b} {
      color: ${({theme:m,expanded:v})=>v?void 0:m.colors.primary700};
    }

    ${d.Typography} {
      color: ${({theme:m,expanded:v})=>v?void 0:m.colors.primary600};
    }

    & > ${u.Flex} {
      background: ${({theme:m})=>m.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:m})=>m.colors.primary200};
    }
  }
`,h=({children:m,disabled:v=!1,error:S,expanded:T=!1,hasErrorMessage:p=!0,id:y,onToggle:C,toggle:I,size:B="M",variant:R="primary",shadow:O})=>{const A=a.useId(y),D=j.useMemo(()=>({expanded:T,onToggle:C,toggle:I,id:A,size:B,variant:R,disabled:v}),[v,T,A,C,B,I,R]);return t.jsxs(i.AccordionContext.Provider,{value:D,children:[t.jsx(f,{"data-strapi-expanded":T,disabled:v,"aria-disabled":v,expanded:T,hasRadius:!0,variant:R,error:S,shadow:O,children:m}),S&&p&&t.jsx(o.Box,{paddingTop:1,children:t.jsx(d.Typography,{variant:"pi",textColor:"danger600",children:S})})]})};n.Accordion=h,n.AccordionTypography=b},34130:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(39032),r=e(33242),i=({children:a,...d})=>{const{expanded:u,id:o}=s.useAccordion();if(!u)return null;const l=`accordion-content-${o}`,g=`accordion-label-${o}`,j=`accordion-desc-${o}`;return t.jsx(r.Box,{role:"region",id:l,"aria-labelledby":g,"aria-describedby":j,...d,children:a})};n.AccordionContent=i},39032:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(96125),s=t.createContext({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),r=()=>t.useContext(s);n.AccordionContext=s,n.useAccordion=r},11921:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(87426),i=e(5387),a=e(33242),d=e(78455),u=e(91357),o=h=>h&&h.__esModule?h:{default:h};function l(h){if(h&&h.__esModule)return h;const m=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(h){for(const v in h)if(v!=="default"){const S=Object.getOwnPropertyDescriptor(h,v);Object.defineProperty(m,v,S.get?S:{enumerable:!0,get:()=>h[v]})}}return m.default=h,Object.freeze(m)}const g=l(s),j=o(r),x=j.default(a.Box)`
  border-bottom: 1px solid ${({theme:h})=>h.colors.neutral200};
  border-right: 1px solid ${({theme:h})=>h.colors.neutral200};
  border-left: 1px solid ${({theme:h})=>h.colors.neutral200};
  border-radius: 0 0 ${({theme:h})=>h.borderRadius} ${({theme:h})=>h.borderRadius};
`,L=j.default(a.Box)`
  & > * {
    & > * {
      border-radius: unset;
    }
  }

  & > * {
    border-radius: unset;
    border-right: 1px solid ${({theme:h})=>h.colors.neutral200};
    border-left: 1px solid ${({theme:h})=>h.colors.neutral200};
    border-bottom: 1px solid ${({theme:h})=>h.colors.neutral200};
  }

  & > *:first-of-type {
    border-top: 1px solid ${({theme:h})=>h.colors.neutral200};
    border-radius: ${({theme:h})=>h.borderRadius} ${({theme:h})=>h.borderRadius} 0 0;
    & > * {
      border-radius: ${({theme:h})=>h.borderRadius} ${({theme:h})=>h.borderRadius} 0 0;
    }

    &:hover {
      border-top: 1px solid ${({theme:h})=>h.colors.primary600};
    }
  }

  & [data-strapi-expanded='true'] {
    border: 1px solid ${({theme:h})=>h.colors.primary600};
  }

  ${({theme:h,footer:m})=>`
    &:not(${m}) {
      & > *:last-of-type {
        border-radius: 0 0 ${h.borderRadius} ${h.borderRadius};
      }
    }
  `}
`,b=j.default(a.Box)`
  svg path {
    fill: ${({theme:h})=>h.colors.neutral500};
  }
`,f=({children:h,footer:m,label:v,labelAction:S,error:T})=>{const p=g.Children.toArray(h).map(y=>g.cloneElement(y,{hasErrorMessage:!1}));return t.jsxs(i.KeyboardNavigable,{attributeName:"data-strapi-accordion-toggle",children:[v&&t.jsxs(d.Flex,{paddingBottom:1,children:[t.jsx(u.Typography,{variant:"pi",as:"label",textColor:"neutral800",fontWeight:"bold",children:v}),S&&t.jsx(b,{paddingLeft:1,children:S})]}),t.jsx(L,{footer:m,children:p}),m&&t.jsx(x,{children:m}),T&&t.jsx(a.Box,{paddingTop:1,children:t.jsx(u.Typography,{variant:"pi",textColor:"danger600",children:T})})]})};n.AccordionGroup=f},69377:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(28683),r=e(87426),i=e(31484),a=e(39032),d=e(20729),u=e(46203),o=e(9309),l=e(78455),g=e(91357),x=(h=>h&&h.__esModule?h:{default:h})(r),L=x.default(u.TextButton)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:h,expanded:m})=>m?h.colors.primary600:h.colors.neutral500};
    }
  }
`,b=x.default(l.Flex)`
  min-height: ${({theme:h,size:m})=>h.sizes.accordions[m]};
  border-radius: ${({theme:h,expanded:m})=>m?`${h.borderRadius} ${h.borderRadius} 0 0`:h.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:h})=>h.colors.primary600};
      }
    }
  }
`,f=({title:h,description:m,as:v="span",togglePosition:S="right",action:T,...p})=>{const{onToggle:y,toggle:C,expanded:I,id:B,size:R,variant:O,disabled:A}=a.useAccordion(),D=`accordion-content-${B}`,N=`accordion-label-${B}`,V=`accordion-desc-${B}`,q=R==="M"?6:4,rt=R==="M"?q:q-2,et=d.getBackground({expanded:I,disabled:A,variant:O}),Nt={as:v,fontWeight:R==="S"?"bold":void 0,id:N,textColor:I?"primary600":"neutral700",ellipsis:!0,variant:R==="M"?"delta":void 0},M=I?"primary600":"neutral600",w=I?"primary200":"neutral200",F=R==="M"?`${32/16}rem`:`${24/16}rem`,Q=()=>{A||(C&&!y?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),C()):y&&y())},Dt=t.jsx(l.Flex,{justifyContent:"center",borderRadius:"50%",height:F,width:F,transform:I?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:w,cursor:A?"not-allowed":"pointer",onClick:Q,shrink:0,children:t.jsx(o.Icon,{as:s.CarretDown,width:R==="M"?`${11/16}rem`:`${8/16}rem`,color:I?"primary600":"neutral600"})});return t.jsx(b,{paddingBottom:rt,paddingLeft:q,paddingRight:q,paddingTop:rt,background:et,expanded:I,size:R,justifyContent:"space-between",cursor:A?"not-allowed":"",children:t.jsxs(l.Flex,{gap:3,flex:1,maxWidth:"100%",children:[S==="left"&&Dt,t.jsx(L,{onClick:Q,"aria-disabled":A,"aria-expanded":I,"aria-controls":D,"aria-labelledby":N,"data-strapi-accordion-toggle":!0,expanded:I,type:"button",flex:1,minWidth:0,...p,children:t.jsxs(t.Fragment,{children:[t.jsx(i.AccordionTypography,{...Nt,children:h}),m&&t.jsx(g.Typography,{as:"p",id:V,textColor:M,children:m})]})}),S==="right"&&t.jsxs(l.Flex,{gap:3,children:[Dt,T]}),S==="left"&&T]})})};n.AccordionToggle=f},39539:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(31484),s=e(34130),r=e(69377),i=e(11921);n.Accordion=t.Accordion,n.AccordionTypography=t.AccordionTypography,n.AccordionContent=s.AccordionContent,n.AccordionToggle=r.AccordionToggle,n.AccordionGroup=i.AccordionGroup},20729:($,n)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=({expanded:t,disabled:s,variant:r})=>{let i="neutral100";return t?i="primary100":s?i="neutral150":r==="primary"&&(i="neutral0"),i};n.getBackground=e},60277:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(87426),i=e(41100),a=e(78455),d=x=>x&&x.__esModule?x:{default:x};function u(x){if(x&&x.__esModule)return x;const L=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(x){for(const b in x)if(b!=="default"){const f=Object.getOwnPropertyDescriptor(x,b);Object.defineProperty(L,b,f.get?f:{enumerable:!0,get:()=>x[b]})}}return L.default=x,Object.freeze(L)}const o=u(s),g=d(r).default(a.Flex)`
  > svg {
    height: ${({theme:x})=>x.spaces[3]};
    width: ${({theme:x})=>x.spaces[3]};

    > g,
    path {
      fill: ${({theme:x})=>x.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${i.buttonFocusStyle}
`,j=o.forwardRef(({disabled:x,children:L,background:b="neutral0",...f},h)=>t.jsx(g,{ref:h,"aria-disabled":x,as:"button",type:"button",disabled:x,padding:2,hasRadius:!0,background:b,borderColor:"neutral200",cursor:"pointer",...f,children:L}));j.displayName="BaseButton",n.BaseButton=j,n.BaseButtonWrapper=g},56590:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(87426),i=e(72042),a=e(56961),d=e(65085),u=e(60273),o=e(33242),l=f=>f&&f.__esModule?f:{default:f};function g(f){if(f&&f.__esModule)return f;const h=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(f){for(const m in f)if(m!=="default"){const v=Object.getOwnPropertyDescriptor(f,m);Object.defineProperty(h,m,v.get?v:{enumerable:!0,get:()=>f[m]})}}return h.default=f,Object.freeze(h)}const j=g(s),L=l(r).default.input`
  height: ${d.getCheckboxSize};
  min-width: ${d.getCheckboxSize};
  margin: 0;
  border-radius: ${({theme:f})=>f.borderRadius};
  border: 1px solid ${({theme:f})=>f.colors.neutral300};
  -webkit-appearance: none;
  background-color: ${({theme:f})=>f.colors.neutral0};
  cursor: pointer;

  &:checked {
    background-color: ${({theme:f})=>f.colors.primary600};
    border: 1px solid ${({theme:f})=>f.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      background: url(${a}) no-repeat no-repeat center center;
      width: 10px;
      height: 10px;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled:after {
      background: url(${i}) no-repeat no-repeat center center;
    }
  }

  &:disabled {
    background-color: ${({theme:f})=>f.colors.neutral200};
    border: 1px solid ${({theme:f})=>f.colors.neutral300};
  }

  &:indeterminate {
    background-color: ${({theme:f})=>f.colors.primary600};
    border: 1px solid ${({theme:f})=>f.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${({theme:f})=>f.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled {
      background-color: ${({theme:f})=>f.colors.neutral200};
      border: 1px solid ${({theme:f})=>f.colors.neutral300};
      &:after {
        background-color: ${({theme:f})=>f.colors.neutral500};
      }
    }
  }
`,b=j.forwardRef(({indeterminate:f=!1,size:h="M",name:m,value:v=!1,onValueChange:S,...T},p)=>{const y=j.useRef(null),C=u.useComposedRefs(y,p);j.useEffect(()=>{y.current&&f?y.current.indeterminate=f:y.current.indeterminate=!1},[f]);const I=()=>{S&&S(!v)};return t.jsx(o.Box,{children:t.jsx(L,{size:h,checked:v,onChange:I,type:"checkbox",ref:C,name:m,...T})})});b.displayName="BaseCheckbox",n.BaseCheckbox=b},72042:$=>{"use strict";const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSIjOEU4RUE5IgogIC8+Cjwvc3ZnPg==";$.exports=n},56961:$=>{"use strict";const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSJ3aGl0ZSIKICAvPgo8L3N2Zz4=";$.exports=n},36798:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(56590);n.BaseCheckbox=t.BaseCheckbox},65085:($,n)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=({size:t})=>t==="M"?"18px":"20px";n.getCheckboxSize=e},33242:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(87426),s=e(73020),r=e(14823),a=(o=>o&&o.__esModule?o:{default:o})(t),d={color:!0,cursor:!0,height:!0,width:!0},u=a.default.div.withConfig({shouldForwardProp:(o,l)=>!d[o]&&l(o)})`
  // Font
  font-size: ${({fontSize:o,theme:l})=>r.extractStyleFromTheme(l.fontSizes,o,o)};

  // Colors
  background: ${({theme:o,background:l})=>r.extractStyleFromTheme(o.colors,l,l)};
  color: ${({theme:o,color:l})=>r.extractStyleFromTheme(o.colors,l,void 0)};

  // Spaces
  ${({theme:o,padding:l})=>s("padding",l,o)}
  ${({theme:o,paddingTop:l})=>s("padding-top",l,o)}
  ${({theme:o,paddingRight:l})=>s("padding-right",l,o)}
  ${({theme:o,paddingBottom:l})=>s("padding-bottom",l,o)}
  ${({theme:o,paddingLeft:l})=>s("padding-left",l,o)}
  ${({theme:o,marginLeft:l})=>s("margin-left",l,o)}
  ${({theme:o,marginRight:l})=>s("margin-right",l,o)}
  ${({theme:o,marginTop:l})=>s("margin-top",l,o)}
  ${({theme:o,marginBottom:l})=>s("margin-bottom",l,o)}

  // Responsive hiding
  ${({theme:o,hiddenS:l})=>l?`${o.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:o,hiddenXS:l})=>l?`${o.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:o,hasRadius:l,borderRadius:g})=>l?o.borderRadius:g};
  border-style: ${({borderStyle:o})=>o};
  border-width: ${({borderWidth:o})=>o};
  border-color: ${({borderColor:o,theme:l})=>r.extractStyleFromTheme(l.colors,o,void 0)};
  border: ${({theme:o,borderColor:l,borderStyle:g,borderWidth:j})=>{if(l&&!g&&typeof j>"u")return`1px solid ${o.colors[l]}`}};

  // Shadows
  box-shadow: ${({theme:o,shadow:l})=>r.extractStyleFromTheme(o.shadows,l,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:o})=>o};
  &:hover {
    ${({_hover:o,theme:l})=>o?o(l):void 0}
  }

  // Display
  display: ${({display:o})=>o};

  // Position
  position: ${({position:o})=>o};
  left: ${({left:o,theme:l})=>r.extractStyleFromTheme(l.spaces,o,o)};
  right: ${({right:o,theme:l})=>r.extractStyleFromTheme(l.spaces,o,o)};
  top: ${({top:o,theme:l})=>r.extractStyleFromTheme(l.spaces,o,o)};
  bottom: ${({bottom:o,theme:l})=>r.extractStyleFromTheme(l.spaces,o,o)};
  z-index: ${({zIndex:o})=>o};
  overflow: ${({overflow:o})=>o};

  // Size
  width: ${({width:o,theme:l})=>r.extractStyleFromTheme(l.spaces,o,o)};
  max-width: ${({maxWidth:o,theme:l})=>r.extractStyleFromTheme(l.spaces,o,o)};
  min-width: ${({minWidth:o,theme:l})=>r.extractStyleFromTheme(l.spaces,o,o)};
  height: ${({height:o,theme:l})=>r.extractStyleFromTheme(l.spaces,o,o)};
  max-height: ${({maxHeight:o,theme:l})=>r.extractStyleFromTheme(l.spaces,o,o)};
  min-height: ${({minHeight:o,theme:l})=>r.extractStyleFromTheme(l.spaces,o,o)};

  // Animation
  transition: ${({transition:o})=>o};
  transform: ${({transform:o})=>o};
  animation: ${({animation:o})=>o};

  //Flexbox children props
  flex-shrink: ${({shrink:o})=>o};
  flex-grow: ${({grow:o})=>o};
  flex-basis: ${({basis:o})=>o};
  flex: ${({flex:o})=>o};

  // Text
  text-align: ${({textAlign:o})=>o};
  text-transform: ${({textTransform:o})=>o};
  line-height: ${({theme:o,lineHeight:l})=>r.extractStyleFromTheme(o.lineHeights,l,l)};

  // Cursor
  cursor: ${({cursor:o})=>o};
`;n.Box=u},9695:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(33242);n.Box=t.Box},41516:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(28683),i=e(87426),a=e(73794),d=e(11054),u=e(60277),o=e(33242),l=e(91357),g=e(78455),j=v=>v&&v.__esModule?v:{default:v},x=j(s),L=j(i),b=i.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,f=L.default(r.Loader)`
  animation: ${b} 2s infinite linear;
  will-change: transform;
`,h=L.default(u.BaseButton)`
  height: ${({theme:v,size:S})=>v.sizes.button[S]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${d.getDisabledStyle}

    &:active {
      ${d.getDisabledStyle}
    }
  }

  &:hover {
    ${d.getHoverStyle}
  }

  &:active {
    ${d.getActiveStyle}
  }

  ${d.getVariantStyle}
`,m=x.default.forwardRef(({variant:v=a.DEFAULT,startIcon:S,endIcon:T,disabled:p=!1,children:y,onClick:C,size:I=a.BUTTON_SIZES[0],loading:B=!1,fullWidth:R=!1,...O},A)=>{const D=p||B,N=V=>{!D&&C&&C(V)};return t.jsxs(h,{ref:A,"aria-disabled":D,disabled:D,size:I,variant:v,onClick:N,fullWidth:R,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:R,justifyContent:R?"center":void 0,paddingLeft:4,paddingRight:4,width:R?"100%":void 0,...O,children:[(S||B)&&t.jsx(o.Box,{"aria-hidden":!0,children:B?t.jsx(f,{}):S}),t.jsx(l.Typography,{variant:I==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:y}),T&&t.jsx(g.Flex,{"aria-hidden":!0,children:T})]})});m.displayName="Button",n.Button=m,n.ButtonWrapper=h},73794:($,n)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e="success-light",t="danger-light",s="default",r="tertiary",i="secondary",a="danger",d="success",u="ghost",o=[e,t],l=[s,r,i,a,d,u,...o],g=["S","M","L"];n.BUTTON_SIZES=g,n.DANGER=a,n.DANGER_LIGHT=t,n.DEFAULT=s,n.GHOST=u,n.LIGHT_VARIANTS=o,n.SECONDARY=i,n.SUCCESS=d,n.SUCCESS_LIGHT=e,n.TERTIARY=r,n.VARIANTS=l},24851:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(41516);n.Button=t.Button,n.ButtonWrapper=t.ButtonWrapper},11054:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(73794),s=e(91357),r=o=>o===t.SUCCESS_LIGHT||o===t.DANGER_LIGHT?`${o.substring(0,o.lastIndexOf("-"))}`:o===t.TERTIARY?"neutral":o===t.DEFAULT||o===t.SECONDARY||t.VARIANTS.every(l=>l!==o)?"primary":`${o}`,i=({theme:o})=>`
    border: 1px solid ${o.colors.neutral200};
    background: ${o.colors.neutral150};
    ${s.Typography} {
      color: ${o.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${o.colors.neutral600};
      }
    }
  `,a=({theme:o,variant:l})=>[...t.LIGHT_VARIANTS,t.SECONDARY].includes(l)?`
      background-color: ${o.colors.neutral0};
    `:l===t.TERTIARY?`
      background-color: ${o.colors.neutral100};
    `:l===t.GHOST?`
      background-color: ${o.colors.neutral100};
    `:l===t.DEFAULT?`
      border: 1px solid ${o.colors.buttonPrimary500};
      background: ${o.colors.buttonPrimary500};
    `:`
    border: 1px solid ${o.colors[`${r(l)}500`]};
    background: ${o.colors[`${r(l)}500`]};
  `,d=({theme:o,variant:l})=>[...t.LIGHT_VARIANTS,t.SECONDARY].includes(l)?`
      background-color: ${o.colors.neutral0};
      border: 1px solid ${o.colors[`${r(l)}600`]};
      ${s.Typography} {
        color: ${o.colors[`${r(l)}600`]};
      }
      svg {
        > g, path {
          fill: ${o.colors[`${r(l)}600`]};
        }
      }
    `:l===t.TERTIARY?`
      background-color: ${o.colors.neutral150};
    `:`
    border: 1px solid ${o.colors[`${r(l)}600`]};
    background: ${o.colors[`${r(l)}600`]};
  `,u=({theme:o,variant:l})=>{switch(l){case t.DANGER_LIGHT:case t.SUCCESS_LIGHT:case t.SECONDARY:return`
          border: 1px solid ${o.colors[`${r(l)}200`]};
          background: ${o.colors[`${r(l)}100`]};
          ${s.Typography} {
            color: ${o.colors[`${r(l)}700`]};
          }
          svg {
            > g, path {
              fill: ${o.colors[`${r(l)}700`]};
            }
          }
        `;case t.TERTIARY:return`
          border: 1px solid ${o.colors.neutral200};
          background: ${o.colors.neutral0};
          ${s.Typography} {
            color: ${o.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${o.colors.neutral800};
            }
          }
        `;case t.GHOST:return`
        border: 1px solid transparent;
        background: transparent;

        ${s.Typography} {
          color: ${o.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${o.colors.neutral500};
          }
        }
      `;case t.SUCCESS:case t.DANGER:return`
          border: 1px solid ${o.colors[`${r(l)}600`]};
          background: ${o.colors[`${r(l)}600`]};
          ${s.Typography} {
            color: ${o.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${o.colors.buttonNeutral0};
            }
          }
        `}};n.getActiveStyle=d,n.getDisabledStyle=i,n.getHoverStyle=a,n.getVariantColorName=r,n.getVariantStyle=u},37634:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(87426),r=e(33242),d=(o=>o&&o.__esModule?o:{default:o})(s).default(r.Box)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({unsetMargin:o})=>o?"margin: 0;":""}
`,u=({unsetMargin:o=!0,...l})=>t.jsx(d,{...l,background:"neutral150",as:"hr",unsetMargin:o});n.Divider=u},18613:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(87426),r=e(33242),i=e(78455),a=e(91357),o=(g=>g&&g.__esModule?g:{default:g})(s).default(r.Box)`
  svg {
    height: ${88/16}rem;
  }
`,l=({icon:g,content:j,action:x,hasRadius:L=!0,shadow:b="tableShadow"})=>t.jsxs(i.Flex,{alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:L,shadow:b,children:[t.jsx(o,{paddingBottom:6,"aria-hidden":!0,children:g}),t.jsx(r.Box,{paddingBottom:4,children:t.jsx(a.Typography,{variant:"delta",as:"p",textAlign:"center",textColor:"neutral600",children:j})}),x]});n.EmptyStateLayout=l},59445:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18613);n.EmptyStateLayout=t.EmptyStateLayout},74994:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(17038),i=e(71536),a=e(33242),d=s.forwardRef(({children:u,name:o,error:l,hint:g,id:j,required:x=!1,...L},b)=>{const f=i.useId(j),h=s.useMemo(()=>({name:o,id:f,error:l,hint:g,required:x}),[l,f,g,o,x]);return t.jsx(a.Box,{ref:b,...L,children:t.jsx(r.FieldContext.Provider,{value:h,children:u})})});n.Field=d},17038:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(96125),s=t.createContext({id:"",required:!1}),r=()=>t.useContext(s);n.FieldContext=s,n.useField=r},45565:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(17038),r=e(91357),i=()=>{const{id:a,error:d}=s.useField();return!d||typeof d!="string"?null:t.jsx(r.Typography,{variant:"pi",as:"p",id:`${a}-error`,textColor:"danger600","data-strapi-field-error":!0,children:d})};n.FieldError=i},71374:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(17038),r=e(91357),i=()=>{const{id:a,hint:d,error:u}=s.useField();return!d||u?null:t.jsx(r.Typography,{variant:"pi",as:"p",id:`${a}-hint`,textColor:"neutral600",children:d})};n.FieldHint=i},85989:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(87426),i=e(17038),a=e(41100),d=e(33242),u=e(78455),l=(b=>b&&b.__esModule?b:{default:b})(r),g={S:6.5,M:10.5},j=s.forwardRef(({endAction:b,startAction:f,disabled:h=!1,onChange:m,size:v="M",...S},T)=>{const{id:p,error:y,hint:C,name:I,required:B}=i.useField();let R;y?R=`${p}-error`:C&&(R=`${p}-hint`);const O=Boolean(y),A=D=>{!h&&m&&m(D)};return t.jsxs(L,{justifyContent:"space-between",hasError:O,disabled:h,children:[f?t.jsx(d.Box,{paddingLeft:3,paddingRight:2,children:f}):null,t.jsx(x,{id:p,name:I,ref:T,"aria-describedby":R,"aria-invalid":O,"aria-disabled":h,disabled:h,"data-disabled":h?"":void 0,hasLeftAction:Boolean(f),hasRightAction:Boolean(b),onChange:A,"aria-required":B,$size:v,...S}),b?t.jsx(d.Box,{paddingLeft:2,paddingRight:3,children:b}):null]})}),x=l.default.input`
  border: none;
  border-radius: ${({theme:b})=>b.borderRadius};
  padding-bottom: ${({$size:b})=>`${g[b]/16}rem`};
  padding-left: ${({theme:b,hasLeftAction:f})=>f?0:b.spaces[4]};
  padding-right: ${({theme:b,hasRightAction:f})=>f?0:b.spaces[4]};
  padding-top: ${({$size:b})=>`${g[b]/16}rem`};
  cursor: ${b=>b["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:b})=>b.colors.neutral800};
  font-weight: 400;
  font-size: ${b=>b.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:b})=>b.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,L=l.default(u.Flex)`
  border: 1px solid ${({theme:b,hasError:f})=>f?b.colors.danger600:b.colors.neutral200};
  border-radius: ${({theme:b})=>b.borderRadius};
  background: ${({theme:b})=>b.colors.neutral0};
  ${a.inputFocusStyle()}

  ${({theme:b,disabled:f})=>f?r.css`
          color: ${b.colors.neutral600};
          background: ${b.colors.neutral150};
        `:void 0}
`;n.FieldInput=j,n.InputWrapper=L},42248:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(87426),i=e(17038),a=e(90401),d=e(91357),u=e(78455),l=(f=>f&&f.__esModule?f:{default:f})(r),g=a.once(console.warn),j=s.forwardRef(({children:f,action:h,required:m,...v},S)=>{const{id:T,required:p}=i.useField(),y=p||m;return m!==void 0&&g('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),t.jsxs(x,{ref:S,variant:"pi",textColor:"neutral800",htmlFor:T,fontWeight:"bold",as:"label",...v,children:[f,y&&t.jsx(L,{textColor:"danger600",children:"*"}),h&&t.jsx(b,{marginLeft:1,children:h})]})}),x=l.default(d.Typography)`
  display: flex;
  align-items: center;
`,L=l.default(d.Typography)`
  line-height: 0;
`,b=l.default(u.Flex)`
  line-height: 0;

  svg path {
    fill: ${({theme:f})=>f.colors.neutral500};
  }
`;n.FieldLabel=j},78455:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(87426),s=e(73020),r=e(33242),a=(o=>o&&o.__esModule?o:{default:o})(t),d={direction:!0},u=a.default(r.Box).withConfig({shouldForwardProp:(o,l)=>!d[o]&&l(o)})`
  align-items: ${({alignItems:o="center"})=>o};
  display: ${({display:o="flex",inline:l})=>l?"inline-flex":o};
  flex-direction: ${({direction:o="row"})=>o};
  flex-shrink: ${({shrink:o})=>o};
  flex-wrap: ${({wrap:o})=>o};
  ${({gap:o,theme:l})=>s("gap",o,l)};
  justify-content: ${({justifyContent:o})=>o};
`;n.Flex=u},52917:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(78455);n.Flex=t.Flex},60067:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(87426),r=e(73020),i=e(33242),u=(l=>l&&l.__esModule?l:{default:l})(s).default(i.Box)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:l})=>l}, 1fr);
  ${({theme:l,gap:g})=>r("gap",g,l)}
`,o=l=>{const{gap:g="0",gridCols:j=12,...x}=l;return t.jsx(u,{gap:g,gridCols:j,...x})};n.Grid=o},44924:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(87426),s=e(33242),a=(d=>d&&d.__esModule?d:{default:d})(t).default(s.Box)`
  grid-column: span ${({col:d})=>d};
  max-width: 100%;

  ${({theme:d})=>d.mediaQueries.tablet} {
    grid-column: span ${({s:d})=>d};
  }

  ${({theme:d})=>d.mediaQueries.mobile} {
    grid-column: span ${({xs:d})=>d};
  }
`;n.GridItem=a},26343:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(60067),s=e(44924);n.Grid=t.Grid,n.GridItem=s.GridItem},34169:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(87426),i=e(89396),a=e(99976),d=e(60277),u=e(78455),o=S=>S&&S.__esModule?S:{default:S};function l(S){if(S&&S.__esModule)return S;const T=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(S){for(const p in S)if(p!=="default"){const y=Object.getOwnPropertyDescriptor(S,p);Object.defineProperty(T,p,y.get?y:{enumerable:!0,get:()=>S[p]})}}return T.default=S,Object.freeze(T)}const g=l(s),j=o(r),x="tertiary",L="secondary",b=["S","M","L"],f=[x,L],h=g.forwardRef(({label:S,background:T,borderWidth:p,noBorder:y=!1,children:C,icon:I,disabled:B=!1,onClick:R,size:O=b[0],"aria-label":A,variant:D=f[0],...N},V)=>{const q=et=>{!B&&R&&R(et)},rt=t.jsxs(m,{"aria-disabled":B,background:B?"neutral150":T,borderWidth:y?0:p,justifyContent:"center",...N,ref:V,size:O,onClick:q,variant:D,children:[t.jsx(i.VisuallyHidden,{as:"span",children:S??A}),g.cloneElement(I||C,{"aria-hidden":!0,focusable:!1})]});return S?t.jsx(a.Tooltip,{label:S,children:rt}):rt}),m=j.default(d.BaseButton)`
  background-color: ${({theme:S,variant:T})=>{if(T===L)return S.colors.primary100}};
  border-color: ${({theme:S,variant:T})=>T===L?S.colors.primary200:S.colors.neutral200};
  height: ${({theme:S,size:T})=>S.sizes.button[T]};
  width: ${({theme:S,size:T})=>S.sizes.button[T]};

  svg {
    g,
    path {
      fill: ${({theme:S,variant:T})=>T===L?S.colors.primary500:S.colors.neutral500};
    }
  }

  :hover,
  :focus {
    svg {
      g,
      path {
        fill: ${({theme:S,variant:T})=>T===L?S.colors.primary600:S.colors.neutral600};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:S})=>S.colors.neutral600};
      }
    }
  }
`,v=j.default(u.Flex)`
  & span:first-child button {
    border-left: 1px solid ${({theme:S})=>S.colors.neutral200};
    border-radius: ${({theme:S})=>`${S.borderRadius} 0 0 ${S.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:S})=>`0 ${S.borderRadius} ${S.borderRadius} 0`};
  }

  & ${m} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:S})=>S.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:S})=>S.colors.neutral100};

      svg {
        path {
          fill: ${({theme:S})=>S.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:S})=>S.colors.neutral150};
      svg {
        path {
          fill: ${({theme:S})=>S.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:S})=>S.colors.neutral600};
        }
      }
    }
  }
`;n.IconButton=h,n.IconButtonGroup=v},49610:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(34169);n.IconButton=t.IconButton,n.IconButtonGroup=t.IconButtonGroup},9309:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(87426),i=e(14823),a=e(33242),d=j=>j&&j.__esModule?j:{default:j},u=d(s),l=d(r).default(a.Box)`
  path {
    fill: ${({color:j,theme:x})=>i.extractStyleFromTheme(x.colors,j,void 0)};
  }
  ${({theme:j,colors:x})=>x(j)}
`,g=u.default.forwardRef(({color:j="neutral600",colors:x=()=>"",...L},b)=>t.jsx(l,{ref:b,color:j,colors:x,...L}));g.displayName="Icon",n.Icon=g},5387:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(39057),r=e(33242),i=({tagName:a,attributeName:d="",...u})=>{const o=()=>{const j=document.activeElement;return j?a?j.tagName.toLowerCase()===a:j.hasAttribute(d):!1},l=j=>a?j.querySelectorAll(a):j.querySelectorAll(`[${d}]`),g=j=>{switch(j.key){case s.KeyboardKeys.RIGHT:case s.KeyboardKeys.DOWN:{if(o()){j.preventDefault();const x=document.activeElement,L=[...l(j.currentTarget)],b=L.findIndex(h=>h===x),f=b+1<L.length?b+1:0;L[f].focus()}break}case s.KeyboardKeys.LEFT:case s.KeyboardKeys.UP:{if(o()){j.preventDefault();const x=document.activeElement,L=[...l(j.currentTarget)],b=L.findIndex(h=>h===x),f=b-1>-1?b-1:L.length-1;L[f].focus()}break}case s.KeyboardKeys.HOME:{o()&&(j.preventDefault(),l(j.currentTarget).item(0).focus());break}case s.KeyboardKeys.END:{if(o()){j.preventDefault();const x=l(j.currentTarget);x.item(x.length-1).focus()}break}}};return t.jsx(r.Box,{onKeyDown:g,...u})};n.KeyboardNavigable=i},89154:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(78455),r=({startActions:i,endActions:a})=>!i&&!a?null:t.jsxs(s.Flex,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[t.jsx(s.Flex,{gap:2,wrap:"wrap",children:i}),t.jsx(s.Flex,{gap:2,shrink:0,wrap:"wrap",children:a})]});n.ActionLayout=r},66793:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(33242),r=({children:i})=>t.jsx(s.Box,{paddingLeft:10,paddingRight:10,children:i});n.ContentLayout=r},70811:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(87426),i=(a=>a&&a.__esModule?a:{default:a})(t).default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:a})=>a.spaces[4]};
`;n.GridLayout=i},10047:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(87426),i=e(99966),a=e(94826),d=e(33242),u=e(78455),o=e(91357),l=f=>f&&f.__esModule?f:{default:f},g=l(s),j=l(r),x=f=>{const h=s.useRef(null),[m,v]=s.useState(null),[S,T]=i.useElementOnScreen({root:null,rootMargin:"0px",threshold:0});return a.useResizeObserver(S,()=>{S.current&&v(S.current.getBoundingClientRect())}),s.useEffect(()=>{h.current&&v(h.current.getBoundingClientRect())},[h]),t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{height:m?.height},ref:S,children:T&&t.jsx(b,{ref:h,...f})}),!T&&t.jsx(b,{...f,sticky:!0,width:m?.width})]})};x.displayName="HeaderLayout";const L=j.default(d.Box)`
  width: ${({width:f})=>f?`${f/16}rem`:void 0};
  z-index: ${({theme:f})=>f.zIndices[1]};
`,b=g.default.forwardRef(({navigationAction:f,primaryAction:h,secondaryAction:m,subtitle:v,title:S,sticky:T,width:p,...y},C)=>{const I=typeof v=="string";return T?t.jsx(L,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:p,"data-strapi-header-sticky":!0,children:t.jsxs(u.Flex,{justifyContent:"space-between",children:[t.jsxs(u.Flex,{children:[f&&t.jsx(d.Box,{paddingRight:3,children:f}),t.jsxs(d.Box,{children:[t.jsx(o.Typography,{variant:"beta",as:"h1",...y,children:S}),I?t.jsx(o.Typography,{variant:"pi",textColor:"neutral600",children:v}):v]}),m?t.jsx(d.Box,{paddingLeft:4,children:m}):null]}),t.jsx(u.Flex,{children:h?t.jsx(d.Box,{paddingLeft:2,children:h}):void 0})]})}):t.jsxs(d.Box,{ref:C,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:f?6:8,background:"neutral100","data-strapi-header":!0,children:[f?t.jsx(d.Box,{paddingBottom:2,children:f}):null,t.jsxs(u.Flex,{justifyContent:"space-between",children:[t.jsxs(u.Flex,{minWidth:0,children:[t.jsx(o.Typography,{as:"h1",variant:"alpha",...y,children:S}),m?t.jsx(d.Box,{paddingLeft:4,children:m}):null]}),h]}),I?t.jsx(o.Typography,{variant:"epsilon",textColor:"neutral600",as:"p",children:v}):v]})});n.BaseHeaderLayout=b,n.HeaderLayout=x},27634:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(87426),r=e(33242),a=(l=>l&&l.__esModule?l:{default:l})(s),d=a.default(r.Box)`
  display: grid;
  grid-template-columns: ${({hasSideNav:l})=>l?"auto 1fr":"1fr"};
`,u=a.default(r.Box)`
  overflow-x: hidden;
`,o=({sideNav:l,children:g})=>t.jsxs(d,{hasSideNav:Boolean(l),children:[l,t.jsx(u,{paddingBottom:10,children:g})]});n.Layout=o},8232:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(60067),r=e(44924),i=e(33242),a=({startCol:d,endCol:u})=>t.jsxs(s.Grid,{gap:4,children:[t.jsx(r.GridItem,{col:9,s:12,children:t.jsx(i.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:d})}),t.jsx(r.GridItem,{col:3,s:12,children:t.jsx(i.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:u})})]});n.TwoColsLayout=a},47724:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(27634),s=e(89154),r=e(66793),i=e(10047),a=e(8232),d=e(70811);n.Layout=t.Layout,n.ActionLayout=s.ActionLayout,n.ContentLayout=r.ContentLayout,n.BaseHeaderLayout=i.BaseHeaderLayout,n.HeaderLayout=i.HeaderLayout,n.TwoColsLayout=a.TwoColsLayout,n.GridLayout=d.GridLayout},63319:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(12658),i=e(33242);function a(o){if(o&&o.__esModule)return o;const l=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(o){for(const g in o)if(g!=="default"){const j=Object.getOwnPropertyDescriptor(o,g);Object.defineProperty(l,g,j.get?j:{enumerable:!0,get:()=>o[g]})}}return l.default=o,Object.freeze(l)}const u=a(s).forwardRef(({container:o=globalThis?.document?.body,...l},g)=>o?r.createPortal(t.jsx(i.Box,{ref:g,...l}),o):null);u.displayName="Portal",n.Portal=u},28262:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(43074),i=e(1660),a=e(39057),d=e(33242),u=l=>t.jsx(o,{...l,as:"th"}),o=({coords:l={col:0,row:0},as:g="td",...j})=>{const x=s.useRef(null),{rowIndex:L,colIndex:b,setTableValues:f}=r.useTable(),[h,m]=s.useState(!1),v=p=>{const y=i.getFocusableNodes(x.current,!0);if(y.length===0||y.length===1&&i.getFocusableNodesWithKeyboardNav(y).length===0)return;if(y.length>1&&!y.find(I=>I.tagName!=="BUTTON")){p.preventDefault();const I=y.findIndex(B=>B===document.activeElement);if(p.key===a.KeyboardKeys.RIGHT){const B=y[I+1];B&&(p.stopPropagation(),B.focus())}else if(p.key===a.KeyboardKeys.LEFT){const B=y[I-1];B&&(p.stopPropagation(),B.focus())}return}const C=p.key===a.KeyboardKeys.ENTER;if(C&&!h)m(!0);else if((p.key===a.KeyboardKeys.ESCAPE||C)&&h){if(C&&document.activeElement?.tagName==="A")return;m(!1),x.current.focus()}else h&&p.stopPropagation()},S=L===l.row-1&&b===l.col-1;s.useLayoutEffect(()=>{const p=i.getFocusableNodes(x.current,!0);p.length===0||p.length===1&&i.getFocusableNodesWithKeyboardNav(p).length!==0||p.length>1&&Boolean(p.find(y=>y.tagName!=="BUTTON"))?(x.current.setAttribute("tabIndex",!h&&S?"0":"-1"),p.forEach((y,C)=>{y.setAttribute("tabIndex",h?"0":"-1"),h&&C===0&&y.focus()})):p.forEach(y=>{y.setAttribute("tabIndex",S?"0":"-1")})},[h,S]);const T=s.useCallback(()=>{const p=i.getFocusableNodes(x.current,!0);p.length>=1&&(i.getFocusableNodesWithKeyboardNav(p).length!==0||!p.find(y=>y.tagName!=="BUTTON"))&&m(!0),f({rowIndex:l.row-1,colIndex:l.col-1})},[l,f]);return s.useLayoutEffect(()=>{const p=x.current;return i.getFocusableNodes(p,!0).forEach(C=>{C.addEventListener("focus",T)}),()=>{i.getFocusableNodes(p,!0).forEach(I=>{I.removeEventListener("focus",T)})}},[T]),t.jsx(d.Box,{role:"gridcell",as:g,ref:x,onKeyDown:v,...j})};n.RawTd=o,n.RawTh=u},8038:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(4973),i=e(43074),a=e(39057),d=({colCount:u,rowCount:o,jumpStep:l=3,initialCol:g=0,initialRow:j=0,...x})=>{const L=s.useRef(null),b=s.useRef(!1),[f,h]=s.useState(j),[m,v]=s.useState(g),S=s.useCallback(({colIndex:y,rowIndex:C})=>{v(y),h(C)},[]);s.useEffect(()=>{b.current&&r.focusFocusable(L.current),b.current||(b.current=!0)},[m,f]);const T=y=>{switch(y.key){case a.KeyboardKeys.RIGHT:{y.preventDefault(),v(C=>C<u-1?C+1:C);break}case a.KeyboardKeys.LEFT:{y.preventDefault(),v(C=>C>0?C-1:C);break}case a.KeyboardKeys.UP:{y.preventDefault(),h(C=>C>0?C-1:C);break}case a.KeyboardKeys.DOWN:{y.preventDefault(),h(C=>C<o-1?C+1:C);break}case a.KeyboardKeys.HOME:{y.preventDefault(),y.ctrlKey&&h(0),v(0);break}case a.KeyboardKeys.END:{y.preventDefault(),y.ctrlKey&&h(o-1),v(u-1);break}case a.KeyboardKeys.PAGE_DOWN:{y.preventDefault(),h(C=>C+l<o?C+l:o-1);break}case a.KeyboardKeys.PAGE_UP:{y.preventDefault(),h(C=>C-l>0?C-l:0);break}}},p=s.useMemo(()=>({rowIndex:f,colIndex:m,setTableValues:S}),[m,f,S]);return t.jsx(i.RawTableContext.Provider,{value:p,children:t.jsx("table",{role:"grid",ref:L,"aria-rowcount":o,"aria-colcount":u,onKeyDown:T,...x})})};n.RawTable=d},43074:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(96125),s=t.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),r=()=>t.useContext(s);n.RawTableContext=s,n.useTable=r},94257:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=({children:i,...a})=>{const d=s.Children.toArray(i).map((u,o)=>s.isValidElement(u)?s.cloneElement(u,{"aria-rowindex":o+2}):u);return t.jsx("tbody",{...a,children:d})};n.RawTbody=r},98308:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=({children:i,...a})=>{const d=s.Children.toArray(i).map(u=>s.isValidElement(u)?s.cloneElement(u,{"aria-rowindex":1}):u);return t.jsx("thead",{...a,children:d})};n.RawThead=r},73193:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(33242),i=({children:a,...d})=>{const u=s.Children.toArray(a).map((o,l)=>s.isValidElement(o)?s.cloneElement(o,{"aria-colindex":l+1,coords:{col:l+1,row:d["aria-rowindex"]}}):o);return t.jsx(r.Box,{as:"tr",...d,children:u})};n.RawTr=i},4973:($,n)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t=>{const s=t.querySelector('[tabindex="0"]');s&&s.focus()};n.focusFocusable=e},79015:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(28683),i=e(87426),a=e(80475),d=e(56961),u=e(70251),o=e(60273),l=e(71536),g=e(23679),j=e(78075),x=e(74994),L=e(78455),b=e(42248),f=e(33242),h=e(71374),m=e(45565),v=e(91357),S=O=>O&&O.__esModule?O:{default:O};function T(O){if(O&&O.__esModule)return O;const A=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(O){for(const D in O)if(D!=="default"){const N=Object.getOwnPropertyDescriptor(O,D);Object.defineProperty(A,D,N.get?N:{enumerable:!0,get:()=>O[D]})}}return A.default=O,Object.freeze(A)}const p=T(s),y=S(i),C=p.forwardRef(({"aria-label":O,children:A,clearLabel:D="Clear",customizeContent:N,disabled:V,error:q,hint:rt,id:et,label:it,labelAction:Nt,onChange:M,onClear:w,onCloseAutoFocus:F,onReachEnd:Q,placeholder:Dt,required:Ht,selectButtonTitle:se,startIcon:_t,size:xt="M",value:jt,withTags:$t,...Zt},Gt)=>{const Et=p.useRef(null),[ut,Ut]=p.useState(),[bt,yt]=p.useState(!1),Yt=l.useId(et),Ce=`${Yt}-hint`,Me=`${Yt}-error`,Be=ot=>{M?M(ot):Ut(ot)},me=ot=>()=>{const Jt=Array.isArray(jt)?jt.filter(ae=>ae!==ot):(ut??[]).filter(ae=>ae!==ot);M?M(Jt):Ut(Jt)},G=ot=>{yt(ot)},_=p.useRef(null),St=()=>{_.current.focus()},At=l.useId(),Z=`intersection-${u.stripReactIdOfColon(At)}`,gt=ot=>{Q&&Q(ot)};g.useIntersection(Et,gt,{selectorToWatch:`#${Z}`,skipWhen:!bt});const ct=typeof jt<"u"&&jt!==null?jt:ut,Ft=ot=>ot&&typeof ot=="object"&&ot.value?t.jsx(j.Tag,{tabIndex:-1,disabled:V,icon:t.jsx(r.Cross,{}),onClick:me(ot.value),children:ot.textValue},ot.value):null,he=o.useComposedRefs(_,Gt);return t.jsx(x.Field,{hint:rt,error:q,id:Yt,required:Ht,children:t.jsxs(L.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[it?t.jsx(b.FieldLabel,{onClick:St,action:Nt,children:it}):null,t.jsxs(a.Root,{onOpenChange:G,disabled:V,required:Ht,onValueChange:Be,value:ct,...Zt,multi:!0,children:[t.jsx(a.Trigger,{ref:he,"aria-label":it??O,"aria-describedby":`${Ce} ${Me}`,id:Yt,startIcon:_t,size:xt,hasError:Boolean(q),disabled:V,clearLabel:D,onClear:ct?.length?w:void 0,paddingLeft:$t&&ct?.length?1:3,children:t.jsx(a.Value,{placeholder:Dt,textColor:ct?.length?"neutral800":"neutral600",children:ct?.length?$t?Ft:N?N(ct):void 0:void 0})}),t.jsx(a.Portal,{children:t.jsx(a.Content,{position:"popper",sideOffset:4,onCloseAutoFocus:F,children:t.jsxs(a.Viewport,{ref:Et,children:[A,t.jsx(f.Box,{id:Z,width:"100%",height:"1px"})]})})})]}),t.jsx(h.FieldHint,{}),t.jsx(m.FieldError,{})]})})}),I=p.forwardRef(({value:O,children:A,startIcon:D,...N},V)=>t.jsxs(a.Item,{ref:V,value:O.toString(),...N,children:[D&&t.jsx(f.Box,{as:"span","aria-hidden":!0,children:D}),t.jsx(a.ItemIndicator,{children:({isSelected:q,isIntermediate:rt})=>t.jsx(B,{hasRadius:!0,overflow:"hidden",position:"relative",$indeterminate:rt,$selected:q,zIndex:1,height:"18px",width:"18px"})}),t.jsx(v.Typography,{textColor:"neutral800",children:t.jsx(a.ItemText,{children:A})})]})),B=y.default(f.Box)`
  border: 1px solid
    ${({theme:O,$selected:A,$indeterminate:D})=>A||D?O.colors.primary600:O.colors.neutral300};
  background-color: ${({theme:O,$selected:A,$indeterminate:D})=>A||D?O.colors.primary600:O.colors.neutral0};

  ${({theme:O,$indeterminate:A})=>A&&i.css`
      &::after {
        content: '';
        display: block;
        position: relative;
        color: white;
        height: 2px;
        width: 10px;
        background-color: ${O.colors.neutral0};
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
    `}

  ${({$selected:O})=>O&&i.css`
      &::after {
        content: '';
        background: url(${d}) no-repeat no-repeat center center;
        width: 100%;
        height: 100%;
        position: absolute;
      }
    `}
`,R=p.forwardRef(({children:O,label:A,startIcon:D,values:N=[],...V},q)=>t.jsxs(a.Group,{ref:q,children:[t.jsxs(a.Item,{value:N,...V,children:[D&&t.jsx(f.Box,{as:"span","aria-hidden":!0,children:D}),t.jsx(a.ItemIndicator,{children:({isSelected:rt,isIntermediate:et})=>t.jsx(B,{hasRadius:!0,overflow:"hidden",position:"relative",$indeterminate:et,$selected:rt,zIndex:1,height:"18px",width:"18px"})}),t.jsx(v.Typography,{textColor:"neutral800",children:A})]}),O]}));n.MultiSelect=C,n.MultiSelectGroup=R,n.MultiSelectOption=I},92357:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(87426),r=e(79015),a=(o=>o&&o.__esModule?o:{default:o})(s),d=({options:o,...l})=>t.jsx(r.MultiSelect,{...l,children:o.map(g=>"children"in g?t.jsx(r.MultiSelectGroup,{label:g.label,values:g.children.map(j=>j.value.toString()),children:g.children.map(j=>t.jsx(u,{value:j.value,children:j.label},j.value))},g.label):t.jsx(r.MultiSelectOption,{value:g.value,children:g.label},g.value))}),u=a.default(r.MultiSelectOption)`
  padding-left: ${({theme:o})=>o.spaces[7]};
`;n.MultiSelectNested=d},44524:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(79015);/**
 * @preserve
 * @deprecated This component is only fit for the MultiSelect component.
 * Therefore, you should import the MultiSelectGroup component instead.
 */const s=t.MultiSelectGroup;n.OptGroup=s},19795:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(79015),r=e(82009),i=e(78208);/**
 * @preserve
 * @deprecated You should import the specific type of option you want to render,
 * e.g. `import { MultiSelectOption } from '@strapi/design-system';`
 */const a=({multi:d,...u})=>{const o=r.useSelectContext();return d||o.multi?t.jsx(s.MultiSelectOption,{...u}):t.jsx(i.SingleSelectOption,{...u})};n.Option=a},82009:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(79015),i=e(78208);function a(g){if(g&&g.__esModule)return g;const j=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(g){for(const x in g)if(x!=="default"){const L=Object.getOwnPropertyDescriptor(g,x);Object.defineProperty(j,x,L.get?L:{enumerable:!0,get:()=>g[x]})}}return j.default=g,Object.freeze(j)}const d=a(s),u=d.createContext({multi:!1}),o=()=>d.useContext(u);/**
 * @preserve
 * @deprecated You should import the specific type of select you want to render
 *
 * e.g. `import { MultiSelect } from '@strapi/design-system';`
 */const l=g=>{const j=d.useMemo(()=>({multi:Boolean(g.multi||g.withTags)}),[g.multi,g.withTags]);return t.jsx(u.Provider,{value:j,children:g.multi||g.withTags?t.jsx(r.MultiSelect,{...g}):t.jsx(i.SingleSelect,{...g})})};n.Select=l,n.useSelectContext=o},10806:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(75729),i=e(39057),a=e(78455);function d(b){if(b&&b.__esModule)return b;const f=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(b){for(const h in b)if(h!=="default"){const m=Object.getOwnPropertyDescriptor(b,h);Object.defineProperty(f,h,m.get?m:{enumerable:!0,get:()=>b[h]})}}return f.default=b,Object.freeze(f)}const u=d(s),o={Keyboard:"down:keyboard",Mouse:"down:mouse"},l={Keyboard:"up:keyboard",Mouse:"up:mouse"};/**
 * @preserve
 * @deprecated This component will be removed in the next major release.
 * If you need a custom listbox I would recommend opening a new issue.
 */const g=({labelledBy:b,onSelectItem:f,children:h,multi:m=!1,onEscape:v,expanded:S})=>{const T=x(S),p=y=>{switch(y.key){case i.KeyboardKeys.ESCAPE:{y.stopPropagation(),v();break}case i.KeyboardKeys.DOWN:{y.preventDefault();const C=L(T.current);if(!C)return;const I=C.nextSibling;if(I)j(T.current,I);else{const R=T.current.querySelectorAll('[role="option"]')[0];j(T.current,R)}break}case i.KeyboardKeys.UP:{y.preventDefault();const C=L(T.current);if(!C)return;const I=C.previousSibling;if(I)j(T.current,I);else{const B=T.current.querySelectorAll('[role="option"]'),R=B[B.length-1];j(T.current,R)}break}case i.KeyboardKeys.SPACE:case i.KeyboardKeys.ENTER:{y.preventDefault();const C=L(T.current);C.getAttribute("data-opt-group")?f(C.getAttribute("data-opt-group-children").split(","),C.getAttribute("data-opt-group")):f(C.getAttribute("data-strapi-value")),m||v();break}}};return t.jsx(a.Flex,{as:"ul",gap:1,direction:"column",alignItems:"stretch",role:"listbox","aria-labelledby":b,tabIndex:-1,ref:T,onKeyDown:p,onBlur:v,children:h})},j=(b,f)=>{b.setAttribute("aria-activedescendant",f.getAttribute("id")),b.querySelectorAll('[role="option"]').forEach(v=>v.classList.remove("is-focused")),f.classList.add("is-focused"),r.compute(f,{scrollMode:"if-needed",block:"nearest",inline:"nearest"}).forEach(({el:v,top:S,left:T})=>{v.scrollTop=S,v.scrollLeft=T})},x=b=>{const f=u.useRef(null);return u.useEffect(()=>{f.current.focus()},[]),u.useEffect(()=>{if(!f.current)return;const h=f.current.querySelector('[aria-selected="true"]'),m=f.current.querySelectorAll('[role="option"]');let v;h?v=h:b===l.Keyboard?v=m[m.length-1]:b===o.Keyboard&&(v=m[0]),v&&(b===l.Keyboard||b===o.Keyboard)&&j(f.current,v)},[]),f},L=b=>{const f=b.getAttribute("aria-activedescendant");return b.querySelector(`#${f}`)};n.SelectList=g},80475:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(28683),i=e(30409),a=e(87426),d=e(60273),u=e(78455),o=e(33242),l=e(41100),g=e(91357),j=M=>M&&M.__esModule?M:{default:M};function x(M){if(M&&M.__esModule)return M;const w=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(M){for(const F in M)if(F!=="default"){const Q=Object.getOwnPropertyDescriptor(M,F);Object.defineProperty(w,F,Q.get?Q:{enumerable:!0,get:()=>M[F]})}}return w.default=M,Object.freeze(w)}const L=x(s),b=j(a),f=L.forwardRef(({onClear:M,clearLabel:w="Clear",startIcon:F,disabled:Q,hasError:Dt,size:Ht="M",children:se,..._t},xt)=>{const jt=L.useRef(null),$t=Gt=>{M&&!Q&&(M(Gt),jt.current.focus())},Zt=d.useComposedRefs(jt,xt);return t.jsx(i.Select.Trigger,{asChild:!0,children:t.jsxs(m,{"aria-disabled":Q,$hasError:Dt,$size:Ht,ref:Zt,alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden",hasRadius:!0,background:Q?"neutral150":"neutral0",paddingLeft:3,paddingRight:3,gap:4,cursor:"default",width:"100%",..._t,children:[t.jsxs(u.Flex,{flex:"1",as:"span",gap:3,children:[F&&t.jsx(o.Box,{as:"span","aria-hidden":!0,children:F}),se]}),t.jsxs(u.Flex,{as:"span",gap:3,children:[M?t.jsx(h,{as:"button",hasRadius:!0,background:"transparent",role:"button",tabIndex:0,onClick:$t,"aria-disabled":Q,"aria-label":w,title:w,cursor:"pointer",children:t.jsx(r.Cross,{})}):null,t.jsx(v,{children:t.jsx(r.CarretDown,{})})]})]})})}),h=b.default(o.Box)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:M})=>M.colors.neutral600};
  }
`,m=b.default(u.Flex)`
  border: 1px solid ${({theme:M,$hasError:w})=>w?M.colors.danger600:M.colors.neutral200};
  min-height: ${({theme:M,$size:w})=>l.getThemeSize("input")({theme:M,size:w})};

  &[aria-disabled='true'] {
    color: ${M=>M.theme.colors.neutral600};
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:M,$hasError:w})=>l.inputFocusStyle()({theme:M,hasError:w})};
`,v=b.default(i.Select.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:M})=>M.colors.neutral600};
    }
  }
`,S=L.forwardRef(({children:M,placeholder:w,...F},Q)=>t.jsx(T,{ref:Q,ellipsis:!0,...F,children:t.jsx(p,{placeholder:w,children:M})})),T=b.default(g.Typography)`
  flex: 1;
`,p=b.default(i.Select.Value)`
  display: flex;
  gap: ${({theme:M})=>M.spaces[1]};
  flex-wrap: wrap;
`,y=b.default(i.Select.Content)`
  background: ${({theme:M})=>M.colors.neutral0};
  box-shadow: ${({theme:M})=>M.shadows.filterShadow};
  border: 1px solid ${({theme:M})=>M.colors.neutral150};
  border-radius: ${({theme:M})=>M.borderRadius};
  min-width: var(--radix-select-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:M})=>M.zIndices[1]};
`,C=b.default(i.Select.Viewport)`
  padding: ${({theme:M})=>M.spaces[1]};
`,I=L.forwardRef((M,w)=>t.jsx(R,{ref:w,...M})),B=a.css`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  border-radius: ${M=>M.theme.borderRadius};
  padding: ${M=>`${M.theme.spaces[2]} ${M.theme.spaces[4]}`};
  padding-left: ${({theme:M})=>M.spaces[4]};
  background-color: ${({theme:M})=>M.colors.neutral0};
  display: flex;
  align-items: center;
  gap: ${({theme:M})=>M.spaces[2]};
  white-space: nowrap;
  user-select: none;

  &:focus-visible {
    outline: none;
    background-color: ${({theme:M})=>M.colors.primary100};
  }
`,R=b.default(i.Select.Item)`
  ${B}

  &:hover {
    background-color: ${({theme:M})=>M.colors.primary100};
  }

  &[data-state='checked'] {
    ${g.Typography} {
      font-weight: bold;
      color: ${({theme:M})=>M.colors.primary600};
    }
  }
`,O=i.Select.Root,A=f,D=S,N=i.Select.Portal,V=y,q=C,rt=I,et=i.Select.ItemIndicator,it=i.Select.ItemText,Nt=i.Select.Group;n.Content=V,n.Group=Nt,n.Item=rt,n.ItemIndicator=et,n.ItemText=it,n.Portal=N,n.Root=O,n.Trigger=A,n.Value=D,n.Viewport=q},78208:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(80475),i=e(70251),a=e(60273),d=e(71536),u=e(23679),o=e(74994),l=e(78455),g=e(42248),j=e(71374),x=e(45565),L=e(33242),b=e(91357);function f(T){if(T&&T.__esModule)return T;const p=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(T){for(const y in T)if(y!=="default"){const C=Object.getOwnPropertyDescriptor(T,y);Object.defineProperty(p,y,C.get?C:{enumerable:!0,get:()=>T[y]})}}return p.default=T,Object.freeze(p)}const h=f(s),m=h.forwardRef(({error:T,hint:p,id:y,label:C,labelAction:I,required:B,selectButtonTitle:R,...O},A)=>{const D=d.useId(y),N=h.useRef(null),V=()=>{N.current.focus()},q=a.useComposedRefs(A,N);return t.jsx(o.Field,{hint:p,error:T,id:D,required:B,children:t.jsxs(l.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[C?t.jsx(g.FieldLabel,{onClick:V,action:I,children:C}):null,t.jsx(v,{label:C,id:D,ref:q,required:B,...O}),t.jsx(j.FieldHint,{}),t.jsx(x.FieldError,{})]})})}),v=h.forwardRef(({"aria-label":T,id:p,children:y,clearLabel:C="Clear",customizeContent:I,disabled:B,error:R,label:O,onChange:A,onClear:D,onCloseAutoFocus:N,onReachEnd:V,placeholder:q,required:rt,selectButtonTitle:et,startIcon:it,size:Nt="M",value:M,...w},F)=>{const[Q,Dt]=h.useState(),[Ht,se]=h.useState(!1),_t=yt=>{se(yt)},xt=yt=>{D&&D(yt),A||Dt("")},jt=`${p}-hint`,$t=`${p}-error`,Zt=yt=>{A?A(typeof M=="number"?Number(yt):yt):Dt(yt)},Gt=h.useRef(null),Et=d.useId(),ut=`intersection-${i.stripReactIdOfColon(Et)}`,Ut=yt=>{V&&V(yt)};u.useIntersection(Gt,Ut,{selectorToWatch:`#${ut}`,skipWhen:!Ht});const bt=(typeof M<"u"&&M!==null?M.toString():Q)??"";return t.jsxs(r.Root,{onOpenChange:_t,disabled:B,required:rt,onValueChange:Zt,value:bt,...w,children:[t.jsx(r.Trigger,{ref:F,"aria-label":O??T,"aria-describedby":p?`${jt} ${$t}`:void 0,id:p,startIcon:it,size:Nt,hasError:Boolean(R),disabled:B,clearLabel:C,onClear:bt&&D?xt:void 0,children:t.jsx(r.Value,{placeholder:q,textColor:bt?"neutral800":"neutral600",children:bt&&I?I(bt):void 0})}),t.jsx(r.Portal,{children:t.jsx(r.Content,{position:"popper",sideOffset:4,onCloseAutoFocus:N,children:t.jsxs(r.Viewport,{ref:Gt,children:[y,t.jsx(L.Box,{id:ut,width:"100%",height:"1px"})]})})})]})}),S=h.forwardRef(({value:T,startIcon:p,children:y,...C},I)=>t.jsxs(r.Item,{ref:I,value:T.toString(),...C,children:[p&&t.jsx(L.Box,{as:"span","aria-hidden":!0,children:p}),t.jsx(b.Typography,{textColor:"neutral800",children:t.jsx(r.ItemText,{children:y})})]}));n.SingleSelect=m,n.SingleSelectInput=v,n.SingleSelectOption=S},21183:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(92357),s=e(79015),r=e(78208),i=e(82009),a=e(19795),d=e(44524),u=e(10806);n.MultiSelectNested=t.MultiSelectNested,n.MultiSelect=s.MultiSelect,n.MultiSelectGroup=s.MultiSelectGroup,n.MultiSelectOption=s.MultiSelectOption,n.SingleSelect=r.SingleSelect,n.SingleSelectOption=r.SingleSelectOption,n.Select=i.Select,n.Option=a.Option,n.OptGroup=d.OptGroup,n.SelectList=u.SelectList},37642:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(87426),i=e(14823),a=e(78455),u=(x=>x&&x.__esModule?x:{default:x})(r),o={size:!0,spacing:!0},l=u.default(a.Flex).withConfig({shouldForwardProp:(x,L)=>!o[x]&&L(x)})`
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: ${({theme:x,spacing:L})=>i.extractStyleFromTheme(x.spaces,L,void 0)};
  }
`,g=u.default(a.Flex).withConfig({shouldForwardProp:(x,L)=>!o[x]&&L(x)})`
  & > * {
    margin-left: 0;
    margin-right: 0;
  }

  & > * + * {
    margin-left: ${({theme:x,spacing:L})=>i.extractStyleFromTheme(x.spaces,L,void 0)};
  }
`,j=s.forwardRef(({horizontal:x=!1,spacing:L,size:b,...f},h)=>(b&&console.warn('Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'),x?t.jsx(g,{ref:h,spacing:L||b,...f}):t.jsx(l,{direction:"column",alignItems:"stretch",ref:h,spacing:L||b,...f})));j.displayName="Stack",n.Stack=j},86932:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(37642);n.Stack=t.Stack},99118:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(87426),r=e(28262),i=e(78455),d=(j=>j&&j.__esModule?j:{default:j})(s),u=d.default(r.RawTd)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:j})=>j.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,o=d.default.span`
  svg {
    height: ${4/16}rem;
  }
`,l=({children:j,action:x,...L})=>t.jsx(u,{as:r.RawTh,...L,children:t.jsxs(i.Flex,{children:[j,t.jsx(o,{children:x})]})}),g=({children:j,...x})=>t.jsx(u,{...x,children:j});n.Td=g,n.Th=l},60923:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(87426),r=e(33242),i=e(37634),a=e(78455),d=e(91357),o=(x=>x&&x.__esModule?x:{default:x})(s),l=o.default(r.Box)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:x})=>x.colors.primary600};
  }
`,g=o.default(r.Box)`
  border-radius: 0 0 ${({theme:x})=>x.borderRadius} ${({theme:x})=>x.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,j=({children:x,icon:L,...b})=>t.jsxs("div",{children:[t.jsx(i.Divider,{}),t.jsx(g,{as:"button",background:"primary100",padding:5,...b,children:t.jsxs(a.Flex,{children:[t.jsx(l,{"aria-hidden":!0,background:"primary200",children:L}),t.jsx(r.Box,{paddingLeft:3,children:t.jsx(d.Typography,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:x})})]})})]});n.TFooter=j},176:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(87426),i=e(8038),a=e(33242),u=(L=>L&&L.__esModule?L:{default:L})(r),o=u.default(a.Box)`
  overflow: hidden;
  border: 1px solid ${({theme:L})=>L.colors.neutral150};
`,l=u.default(i.RawTable)`
  width: 100%;
  white-space: nowrap;
`,g=u.default(a.Box)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:L})=>L==="both"||L==="left"?"''":void 0};
    box-shadow: ${({theme:L})=>L.shadows.tableShadow};
    width: ${({theme:L})=>L.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:L})=>L==="both"||L==="right"?"''":void 0};
    box-shadow: ${({theme:L})=>L.shadows.tableShadow};
    width: ${({theme:L})=>L.spaces[2]};
    right: 0;
    top: 0;
  }
`,j=u.default(a.Box)`
  overflow-x: auto;
`,x=({footer:L,...b})=>{const f=s.useRef(null),[h,m]=s.useState(),v=S=>{const T=S.target.scrollWidth-S.target.clientWidth;if(S.target.scrollLeft===0){m("right");return}if(S.target.scrollLeft===T){m("left");return}S.target.scrollLeft>0&&m("both")};return s.useEffect(()=>{f.current.scrollWidth>f.current.clientWidth&&m("right")},[]),t.jsxs(o,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[t.jsx(g,{overflowing:h,position:"relative",children:t.jsx(j,{ref:f,onScroll:v,paddingLeft:6,paddingRight:6,children:t.jsx(l,{...b})})}),L]})};n.Table=x},25747:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(87426),r=e(94257),d=(o=>o&&o.__esModule?o:{default:o})(s).default(r.RawTbody)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,u=({children:o,...l})=>t.jsx(d,{...l,children:o});n.Tbody=u},52872:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(87426),r=e(98308),d=(o=>o&&o.__esModule?o:{default:o})(s).default(r.RawThead)`
  border-bottom: 1px solid ${({theme:o})=>o.colors.neutral150};
`,u=({children:o,...l})=>t.jsx(d,{...l,children:o});n.Thead=u},50181:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(87426),r=e(73193),d=(o=>o&&o.__esModule?o:{default:o})(s).default(r.RawTr)`
  border-bottom: 1px solid ${({theme:o})=>o.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:o})=>o.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:o})=>o.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,u=o=>t.jsx(d,{...o});n.Tr=u},93378:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(176),s=e(25747),r=e(52872),i=e(50181),a=e(99118),d=e(60923);n.Table=t.Table,n.Tbody=s.Tbody,n.Thead=r.Thead,n.Tr=i.Tr,n.Td=a.Td,n.Th=a.Th,n.TFooter=d.TFooter},78075:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(87426),r=e(78455),i=e(91357),d=(g=>g&&g.__esModule?g:{default:g})(s),u=({children:g,icon:j,disabled:x=!1,onClick:L,...b})=>{const f=h=>{x||!L||L(h)};return t.jsxs(o,{as:"button",background:x?"neutral200":"primary100",color:x?"neutral700":"primary600",paddingLeft:3,paddingRight:3,onClick:f,"aria-disabled":x,disabled:x,borderWidth:"1px",borderStyle:"solid",borderColor:x?"neutral300":"primary200",hasRadius:!0,height:`${32/16}rem`,gap:2,...b,children:[t.jsx(l,{$disabled:x,variant:"pi",fontWeight:"bold",as:"span",children:g}),j]})},o=d.default(r.Flex)`
  & > svg {
    height: ${8/16}rem;
    width: ${8/16}rem;
  }

  & > svg path {
    fill: ${({theme:g,...j})=>j["aria-disabled"]?g.colors.neutral600:g.colors.primary600};
  }
`,l=d.default(i.Typography)`
  color: inherit;
  border-right: 1px solid ${({theme:g,$disabled:j})=>j?g.colors.neutral300:g.colors.primary200};
  padding-right: ${({theme:g})=>g.spaces[2]};
`;n.Tag=u},46203:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(28683),i=e(87426),a=e(41100),d=e(78455),u=e(91357),o=h=>h&&h.__esModule?h:{default:h};function l(h){if(h&&h.__esModule)return h;const m=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(h){for(const v in h)if(v!=="default"){const S=Object.getOwnPropertyDescriptor(h,v);Object.defineProperty(m,v,S.get?S:{enumerable:!0,get:()=>h[v]})}}return m.default=h,Object.freeze(m)}const g=l(s),j=o(i),x=i.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,L=j.default.div`
  animation: ${x} 2s infinite linear;
  will-change: transform;
`,b=j.default(d.Flex)`
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({theme:h})=>h.colors.neutral600};
    }
  }

  svg path {
    fill: ${({theme:h})=>h.colors.primary600};
  }

  ${a.buttonFocusStyle}
`,f=g.forwardRef(({children:h,startIcon:m,endIcon:v,onClick:S,disabled:T=!1,loading:p=!1,...y},C)=>{const I=S&&!T?S:void 0,B=T||p;return t.jsxs(b,{ref:C,"aria-disabled":B,onClick:I,as:"button",type:"button",background:"transparent",gap:2,...y,children:[p?t.jsx(L,{"aria-hidden":!0,children:t.jsx(r.Loader,{})}):m,t.jsx(u.Typography,{variant:"pi",textColor:B?"neutral600":"primary600",children:h}),v]})});f.displayName="TextButton",n.TextButton=f},16162:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(71536),i=e(74994),a=e(78455),d=e(42248),u=e(85989),o=e(71374),l=e(45565),g=s.forwardRef(({name:j,hint:x,error:L,label:b,labelAction:f,id:h,required:m,...v},S)=>{const T=r.useId(h),p=s.useRef(null),y=s.useRef(null);if(!b&&!v["aria-label"])throw new Error('The TextInput component needs a "label" or an "aria-label" props');return s.useImperativeHandle(S,()=>({input:y,inputWrapperRef:p}),[]),t.jsx("div",{ref:p,children:t.jsx(i.Field,{name:j,hint:x,error:L,id:T,required:m,children:t.jsxs(a.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[b&&t.jsx(d.FieldLabel,{action:f,children:b}),t.jsx(u.FieldInput,{ref:y,...v}),t.jsx(o.FieldHint,{}),t.jsx(l.FieldError,{})]})})})});g.displayName="TextInput",n.TextInput=g},15144:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(16162);n.TextInput=t.TextInput},99976:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(53657),s=e(96125),r=e(87426),i=e(7814),a=e(54066),d=e(71536),u=e(63319),o=e(33242),l=e(89396),g=e(91357),j=m=>m&&m.__esModule?m:{default:m};function x(m){if(m&&m.__esModule)return m;const v=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(m){for(const S in m)if(S!=="default"){const T=Object.getOwnPropertyDescriptor(m,S);Object.defineProperty(v,S,T.get?T:{enumerable:!0,get:()=>m[S]})}}return v.default=m,Object.freeze(v)}const L=x(s),f=j(r).default(o.Box)`
  /* z-index exist because of its position inside Modals */
  z-index: 4;
  display: ${({visible:m})=>m?"revert":"none"};
`,h=({children:m,label:v,description:S,delay:T=500,position:p="top",id:y,...C})=>{const I=d.useId(y),B=d.useId(),{visible:R,...O}=i.useTooltipHandlers(T),{tooltipWrapperRef:A,toggleSourceRef:D}=a.useTooltipLayout(R,p),N=L.cloneElement(m,{tabIndex:0,"aria-labelledby":v?I:void 0,"aria-describedby":S?I:void 0,...O});return t.jsxs(t.Fragment,{children:[t.jsx(u.Portal,{children:t.jsxs(f,{id:I,background:"neutral900",hasRadius:!0,padding:2,role:"tooltip",ref:A,visible:R,position:"absolute",...C,children:[R&&t.jsx(l.VisuallyHidden,{id:B,children:S}),t.jsx(g.Typography,{as:"p",variant:"pi",fontWeight:"bold",textColor:"neutral0",children:v||S})]})}),t.jsx("span",{ref:D,children:N})]})};n.Tooltip=h},7814:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(96125),s=r=>{const[i,a]=t.useState(!1),d=t.useRef(null),u=()=>{typeof d.current=="number"&&(clearTimeout(d.current),d.current=null)};return t.useEffect(()=>()=>{u()},[]),{visible:i,onFocus:()=>{a(!0)},onBlur:()=>{a(!1)},onMouseEnter:()=>{d.current=setTimeout(()=>{a(!0)},r)},onMouseLeave:()=>{u(),a(!1)}}};n.useTooltipHandlers=s},54066:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(96125),s=e(65029),r=(i,a)=>{const d=t.useRef(null),u=t.useRef(null);return t.useLayoutEffect(()=>{if(i){const o=d.current,l=u.current;if(o&&l){const g=s.positionTooltip(o,l,a);o.style.left=`${g.left}px`,o.style.top=`${g.top}px`}}},[a,i]),{tooltipWrapperRef:d,toggleSourceRef:u}};n.useTooltipLayout=r},65029:($,n)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=8,t=(d,u)=>{const o=(d.width-u.width)/2,l=u.left-o,g=u.top+u.height+e+window.pageYOffset;return{left:l,top:g}},s=(d,u)=>{const o=(d.height-u.height)/2,l=u.left+u.width+e,g=u.top-o+window.pageYOffset;return{left:l,top:g}},r=(d,u)=>{const o=(d.height-u.height)/2,l=u.left-d.width-e,g=u.top-o+window.pageYOffset;return{left:l,top:g}},i=(d,u)=>{const o=(d.width-u.width)/2;let l=u.left-o,g=u.top-d.height-e+window.pageYOffset;const j=window.innerWidth-u.right;return u.left+d.width-j>window.innerWidth?(l=u.left-d.width-e,g=u.top+window.scrollY-u.height/2):l<0?(l=u.width+u.left+e,g=u.top+window.scrollY-d.height/2+e):g<0&&l>0&&(g=u.top+u.height+e),{left:l,top:g}},a=(d,u,o)=>{const l=d.getBoundingClientRect(),g=u.getBoundingClientRect();return o==="bottom"?t(l,g):o==="right"?s(l,g):o==="left"?r(l,g):i(l,g)};n.positionTooltip=a},91357:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(87426),s=e(17316),r=e(14823),a=(o=>o&&o.__esModule?o:{default:o})(t),d={fontSize:!0,fontWeight:!0},u=a.default.span.withConfig({shouldForwardProp:(o,l)=>!d[o]&&l(o)})`
  ${s.variantStyle}
  ${s.ellipsisStyle}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:o,fontWeight:l})=>r.extractStyleFromTheme(o.fontWeights,l,void 0)};
  font-size: ${({theme:o,fontSize:l})=>r.extractStyleFromTheme(o.fontSizes,l,void 0)};
  line-height: ${({theme:o,lineHeight:l})=>r.extractStyleFromTheme(o.lineHeights,l,l)};
  color: ${({theme:o,textColor:l})=>o.colors[l||"neutral800"]};
  text-align: ${({textAlign:o})=>o};
  text-decoration: ${({textDecoration:o})=>o};
  text-transform: ${({textTransform:o})=>o};
`;n.Typography=u},11616:($,n)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e="alpha",t="beta",s="delta",r="epsilon",i="omega",a="pi",d="sigma",u=[e,t,s,r,i,a,d];n.ALPHA=e,n.BETA=t,n.DELTA=s,n.EPSILON=r,n.OMEGA=i,n.PI=a,n.SIGMA=d,n.TEXT_VARIANTS=u},54274:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(91357);n.Typography=t.Typography},17316:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(11616),s=({ellipsis:i=!1})=>i&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,r=({variant:i=t.OMEGA,theme:a})=>{switch(i){case t.ALPHA:return`
        font-weight: ${a.fontWeights.bold};
        font-size: ${a.fontSizes[5]};
        line-height: ${a.lineHeights[2]};
      `;case t.BETA:return`
        font-weight: ${a.fontWeights.bold};
        font-size: ${a.fontSizes[4]};
        line-height: ${a.lineHeights[1]};
      `;case t.DELTA:return`
        font-weight: ${a.fontWeights.semiBold};
        font-size: ${a.fontSizes[3]};
        line-height: ${a.lineHeights[2]};
      `;case t.EPSILON:return`
        font-size: ${a.fontSizes[3]};
        line-height: ${a.lineHeights[6]};
      `;case t.OMEGA:return`
        font-size: ${a.fontSizes[2]};
        line-height: ${a.lineHeights[4]};
      `;case t.PI:return`
        font-size: ${a.fontSizes[1]};
        line-height: ${a.lineHeights[3]};
      `;case t.SIGMA:return`
        font-weight: ${a.fontWeights.bold};
        font-size: ${a.fontSizes[0]};
        line-height: ${a.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${a.fontSizes[2]};
      `}};n.ellipsisStyle=s,n.variantStyle=r},89396:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(87426),i=(a=>a&&a.__esModule?a:{default:a})(t).default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;n.VisuallyHidden=i},27770:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(89396);n.VisuallyHidden=t.VisuallyHidden},90401:($,n)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e="[@strapi/design-system]:",t=s=>{const r=s;let i=!1;if(typeof r!="function")throw new TypeError(`${e} once requires a function parameter`);return(...a)=>{i||(r(...a),i=!0)}};n.PREFIX=e,n.once=t},1660:($,n)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=(s,r)=>[...s.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(d=>d.hasAttribute("disabled")?!1:r?!0:d.getAttribute("tabindex")!=="-1"),t=s=>s.filter(r=>r.tagName==="INPUT"?r.type!=="checkbox"&&r.type!=="radio":!1);n.getFocusableNodes=e,n.getFocusableNodesWithKeyboardNav=t},73020:$=>{"use strict";const n=(e,t,s)=>{if(!t)return;if(typeof t=="object")return(Array.isArray(t)?t:[t?.desktop,t?.tablet,t?.mobile]).reduce((d,u,o)=>{if(u)switch(o){case 0:return`${d}${e}: ${s.spaces[u]};`;case 1:return`${d}${s.mediaQueries.tablet}{${e}: ${s.spaces[u]};}`;case 2:return`${d}${s.mediaQueries.mobile}{${e}: ${s.spaces[u]};}`;default:return d}return d},"");const r=s.spaces[t]??t;return`${e}: ${r};`};$.exports=n},39057:($,n)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"};n.KeyboardKeys=e},55578:($,n)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});function e(s,r){return typeof s=="string"?!1:r in s}function t(s){return s&&typeof s=="object"&&!Array.isArray(s)}n.isKeyOf=e,n.isObject=t},70251:($,n)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t=>t.replaceAll(":","");n.stripReactIdOfColon=e},14823:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(55578);function s(r,i,a){return i&&t.isKeyOf(r,i)?r[i]:a}n.extractStyleFromTheme=s},60273:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(96125);function s(u){if(u&&u.__esModule)return u;const o=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(u){for(const l in u)if(l!=="default"){const g=Object.getOwnPropertyDescriptor(u,l);Object.defineProperty(o,l,g.get?g:{enumerable:!0,get:()=>u[l]})}}return o.default=u,Object.freeze(o)}const r=s(t);function i(u,o){typeof u=="function"?u(o):u!=null&&(u.current=o)}function a(...u){return o=>u.forEach(l=>i(l,o))}function d(...u){return r.useCallback(a(...u),u)}n.composeRefs=a,n.useComposedRefs=d},99966:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(96125),s=r=>{const i=t.useRef(null),[a,d]=t.useState(!0),u=([o])=>{d(o.isIntersecting)};return t.useEffect(()=>{const o=i.current,l=new IntersectionObserver(u,r);return o&&l.observe(i.current),()=>{o&&l.disconnect()}},[i,r]),[i,a]};n.useElementOnScreen=s},71536:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(96125),i=(u=>u&&u.__esModule?u:{default:u})(t).default["useId".toString()]||(()=>{});let a=0;const d=u=>{const[o,l]=t.useState(i());return t.useLayoutEffect(()=>{u||l(g=>g??String(a++))},[u]),u?.toString()??(o||"")};n.useId=d},23679:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(96125),s=e(30409),r=(i,a,{selectorToWatch:d,skipWhen:u=!1})=>{const o=s.useCallbackRef(a);t.useEffect(()=>{if(u||!i.current)return;const l={root:i.current,rootMargin:"0px"},g=L=>{L.forEach(b=>{b.isIntersecting&&i.current&&i.current.scrollHeight>i.current.clientHeight&&o(b)})},j=new IntersectionObserver(g,l),x=i.current.querySelector(d);return x&&j.observe(x),()=>{j.disconnect()}},[u,o,d,i])};n.useIntersection=r},94826:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(96125),s=e(30409),r=(i,a)=>{const d=s.useCallbackRef(a);t.useLayoutEffect(()=>{const u=new ResizeObserver(d);return Array.isArray(i)?i.forEach(o=>{o.current&&u.observe(o.current)}):i.current&&u.observe(i.current),()=>{u.disconnect()}},[i,d])};n.useResizeObserver=r},41100:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(87426),s=a=>({theme:d,size:u})=>d.sizes[a][u],r=(a="&")=>({theme:d,hasError:u=!1})=>t.css`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${a}:focus-within {
      border: 1px solid ${u?d.colors.danger600:d.colors.primary600};
      box-shadow: ${u?d.colors.danger600:d.colors.primary600} 0px 0px 0px 2px;
    }
  `,i=({theme:a})=>t.css`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${a.colors.primary600};
    }
  }
`;n.buttonFocusStyle=i,n.getThemeSize=s,n.inputFocusStyle=r},16362:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(87426),r=e(90241),i=e(18894),a=e(14073),o=(g=>g&&g.__esModule?g:{default:g})(s).default(r.Box)`
  svg {
    height: ${88/16}rem;
  }
`,l=({icon:g,content:j,action:x,hasRadius:L=!0,shadow:b="tableShadow"})=>t.jsxs(i.Flex,{alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:L,shadow:b,children:[t.jsx(o,{paddingBottom:6,"aria-hidden":!0,children:g}),t.jsx(r.Box,{paddingBottom:4,children:t.jsx(a.Typography,{variant:"delta",as:"p",textAlign:"center",textColor:"neutral600",children:j})}),x]});n.EmptyStateLayout=l},43508:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(16362);n.EmptyStateLayout=t.EmptyStateLayout},61622:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(87426),r=e(75418),i=e(90241),u=(l=>l&&l.__esModule?l:{default:l})(s).default(i.Box)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:l})=>l}, 1fr);
  ${({theme:l,gap:g})=>r("gap",g,l)}
`,o=l=>{const{gap:g="0",gridCols:j=12,...x}=l;return t.jsx(u,{gap:g,gridCols:j,...x})};n.Grid=o},79925:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(87426),s=e(90241),a=(d=>d&&d.__esModule?d:{default:d})(t).default(s.Box)`
  grid-column: span ${({col:d})=>d};
  max-width: 100%;

  ${({theme:d})=>d.mediaQueries.tablet} {
    grid-column: span ${({s:d})=>d};
  }

  ${({theme:d})=>d.mediaQueries.mobile} {
    grid-column: span ${({xs:d})=>d};
  }
`;n.GridItem=a},66420:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(38091);n.Icon=t.Icon},49520:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(18894),r=({startActions:i,endActions:a})=>!i&&!a?null:t.jsxs(s.Flex,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[t.jsx(s.Flex,{gap:2,wrap:"wrap",children:i}),t.jsx(s.Flex,{gap:2,shrink:0,wrap:"wrap",children:a})]});n.ActionLayout=r},61785:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(90241),r=({children:i})=>t.jsx(s.Box,{paddingLeft:10,paddingRight:10,children:i});n.ContentLayout=r},70945:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(87426),i=(a=>a&&a.__esModule?a:{default:a})(t).default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:a})=>a.spaces[4]};
`;n.GridLayout=i},95020:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(96125),r=e(87426),i=e(66073),a=e(45330),d=e(90241),u=e(18894),o=e(14073),l=f=>f&&f.__esModule?f:{default:f},g=l(s),j=l(r),x=f=>{const h=s.useRef(null),[m,v]=s.useState(null),[S,T]=i.useElementOnScreen({root:null,rootMargin:"0px",threshold:0});return a.useResizeObserver(S,()=>{S.current&&v(S.current.getBoundingClientRect())}),s.useEffect(()=>{h.current&&v(h.current.getBoundingClientRect())},[h]),t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{height:m?.height},ref:S,children:T&&t.jsx(b,{ref:h,...f})}),!T&&t.jsx(b,{...f,sticky:!0,width:m?.width})]})};x.displayName="HeaderLayout";const L=j.default(d.Box)`
  width: ${({width:f})=>f?`${f/16}rem`:void 0};
  z-index: ${({theme:f})=>f.zIndices[1]};
`,b=g.default.forwardRef(({navigationAction:f,primaryAction:h,secondaryAction:m,subtitle:v,title:S,sticky:T,width:p,...y},C)=>{const I=typeof v=="string";return T?t.jsx(L,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:p,"data-strapi-header-sticky":!0,children:t.jsxs(u.Flex,{justifyContent:"space-between",children:[t.jsxs(u.Flex,{children:[f&&t.jsx(d.Box,{paddingRight:3,children:f}),t.jsxs(d.Box,{children:[t.jsx(o.Typography,{variant:"beta",as:"h1",...y,children:S}),I?t.jsx(o.Typography,{variant:"pi",textColor:"neutral600",children:v}):v]}),m?t.jsx(d.Box,{paddingLeft:4,children:m}):null]}),t.jsx(u.Flex,{children:h?t.jsx(d.Box,{paddingLeft:2,children:h}):void 0})]})}):t.jsxs(d.Box,{ref:C,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:f?6:8,background:"neutral100","data-strapi-header":!0,children:[f?t.jsx(d.Box,{paddingBottom:2,children:f}):null,t.jsxs(u.Flex,{justifyContent:"space-between",children:[t.jsxs(u.Flex,{minWidth:0,children:[t.jsx(o.Typography,{as:"h1",variant:"alpha",...y,children:S}),m?t.jsx(d.Box,{paddingLeft:4,children:m}):null]}),h]}),I?t.jsx(o.Typography,{variant:"epsilon",textColor:"neutral600",as:"p",children:v}):v]})});n.BaseHeaderLayout=b,n.HeaderLayout=x},80819:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(87426),r=e(90241),a=(l=>l&&l.__esModule?l:{default:l})(s),d=a.default(r.Box)`
  display: grid;
  grid-template-columns: ${({hasSideNav:l})=>l?"auto 1fr":"1fr"};
`,u=a.default(r.Box)`
  overflow-x: hidden;
`,o=({sideNav:l,children:g})=>t.jsxs(d,{hasSideNav:Boolean(l),children:[l,t.jsx(u,{paddingBottom:10,children:g})]});n.Layout=o},74163:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(61622),r=e(79925),i=e(90241),a=({startCol:d,endCol:u})=>t.jsxs(s.Grid,{gap:4,children:[t.jsx(r.GridItem,{col:9,s:12,children:t.jsx(i.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:d})}),t.jsx(r.GridItem,{col:3,s:12,children:t.jsx(i.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:u})})]});n.TwoColsLayout=a},47080:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(80819),s=e(49520),r=e(61785),i=e(95020),a=e(74163),d=e(70945);n.Layout=t.Layout,n.ActionLayout=s.ActionLayout,n.ContentLayout=r.ContentLayout,n.BaseHeaderLayout=i.BaseHeaderLayout,n.HeaderLayout=i.HeaderLayout,n.TwoColsLayout=a.TwoColsLayout,n.GridLayout=d.GridLayout},85946:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(96125),r=e(28683),i=e(87426),a=e(97030),d=e(50854),u=e(56176),o=e(987),l=e(94182),g=e(65484),j=e(36787),x=e(2449),L=e(18894),b=e(99787),f=e(90241),h=e(89459),m=e(10949),v=e(14073),S=O=>O&&O.__esModule?O:{default:O};function T(O){if(O&&O.__esModule)return O;const A=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(O){for(const D in O)if(D!=="default"){const N=Object.getOwnPropertyDescriptor(O,D);Object.defineProperty(A,D,N.get?N:{enumerable:!0,get:()=>O[D]})}}return A.default=O,Object.freeze(A)}const p=T(s),y=S(i),C=p.forwardRef(({"aria-label":O,children:A,clearLabel:D="Clear",customizeContent:N,disabled:V,error:q,hint:rt,id:et,label:it,labelAction:Nt,onChange:M,onClear:w,onCloseAutoFocus:F,onReachEnd:Q,placeholder:Dt,required:Ht,selectButtonTitle:se,startIcon:_t,size:xt="M",value:jt,withTags:$t,...Zt},Gt)=>{const Et=p.useRef(null),[ut,Ut]=p.useState(),[bt,yt]=p.useState(!1),Yt=l.useId(et),Ce=`${Yt}-hint`,Me=`${Yt}-error`,Be=ot=>{M?M(ot):Ut(ot)},me=ot=>()=>{const Jt=Array.isArray(jt)?jt.filter(ae=>ae!==ot):(ut??[]).filter(ae=>ae!==ot);M?M(Jt):Ut(Jt)},G=ot=>{yt(ot)},_=p.useRef(null),St=()=>{_.current.focus()},At=l.useId(),Z=`intersection-${u.stripReactIdOfColon(At)}`,gt=ot=>{Q&&Q(ot)};g.useIntersection(Et,gt,{selectorToWatch:`#${Z}`,skipWhen:!bt});const ct=typeof jt<"u"&&jt!==null?jt:ut,Ft=ot=>ot&&typeof ot=="object"&&ot.value?t.jsx(j.Tag,{tabIndex:-1,disabled:V,icon:t.jsx(r.Cross,{}),onClick:me(ot.value),children:ot.textValue},ot.value):null,he=o.useComposedRefs(_,Gt);return t.jsx(x.Field,{hint:rt,error:q,id:Yt,required:Ht,children:t.jsxs(L.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[it?t.jsx(b.FieldLabel,{onClick:St,action:Nt,children:it}):null,t.jsxs(a.Root,{onOpenChange:G,disabled:V,required:Ht,onValueChange:Be,value:ct,...Zt,multi:!0,children:[t.jsx(a.Trigger,{ref:he,"aria-label":it??O,"aria-describedby":`${Ce} ${Me}`,id:Yt,startIcon:_t,size:xt,hasError:Boolean(q),disabled:V,clearLabel:D,onClear:ct?.length?w:void 0,paddingLeft:$t&&ct?.length?1:3,children:t.jsx(a.Value,{placeholder:Dt,textColor:ct?.length?"neutral800":"neutral600",children:ct?.length?$t?Ft:N?N(ct):void 0:void 0})}),t.jsx(a.Portal,{children:t.jsx(a.Content,{position:"popper",sideOffset:4,onCloseAutoFocus:F,children:t.jsxs(a.Viewport,{ref:Et,children:[A,t.jsx(f.Box,{id:Z,width:"100%",height:"1px"})]})})})]}),t.jsx(h.FieldHint,{}),t.jsx(m.FieldError,{})]})})}),I=p.forwardRef(({value:O,children:A,startIcon:D,...N},V)=>t.jsxs(a.Item,{ref:V,value:O.toString(),...N,children:[D&&t.jsx(f.Box,{as:"span","aria-hidden":!0,children:D}),t.jsx(a.ItemIndicator,{children:({isSelected:q,isIntermediate:rt})=>t.jsx(B,{hasRadius:!0,overflow:"hidden",position:"relative",$indeterminate:rt,$selected:q,zIndex:1,height:"18px",width:"18px"})}),t.jsx(v.Typography,{textColor:"neutral800",children:t.jsx(a.ItemText,{children:A})})]})),B=y.default(f.Box)`
  border: 1px solid
    ${({theme:O,$selected:A,$indeterminate:D})=>A||D?O.colors.primary600:O.colors.neutral300};
  background-color: ${({theme:O,$selected:A,$indeterminate:D})=>A||D?O.colors.primary600:O.colors.neutral0};

  ${({theme:O,$indeterminate:A})=>A&&i.css`
      &::after {
        content: '';
        display: block;
        position: relative;
        color: white;
        height: 2px;
        width: 10px;
        background-color: ${O.colors.neutral0};
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
    `}

  ${({$selected:O})=>O&&i.css`
      &::after {
        content: '';
        background: ${()=>`url("${d}") no-repeat no-repeat center center`};
        width: 100%;
        height: 100%;
        position: absolute;
      }
    `}
`,R=p.forwardRef(({children:O,label:A,startIcon:D,values:N=[],...V},q)=>t.jsxs(a.Group,{ref:q,children:[t.jsxs(a.Item,{value:N,...V,children:[D&&t.jsx(f.Box,{as:"span","aria-hidden":!0,children:D}),t.jsx(a.ItemIndicator,{children:({isSelected:rt,isIntermediate:et})=>t.jsx(B,{hasRadius:!0,overflow:"hidden",position:"relative",$indeterminate:et,$selected:rt,zIndex:1,height:"18px",width:"18px"})}),t.jsx(v.Typography,{textColor:"neutral800",children:A})]}),O]}));n.MultiSelect=C,n.MultiSelectGroup=R,n.MultiSelectOption=I},17475:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(87426),r=e(85946),a=(o=>o&&o.__esModule?o:{default:o})(s),d=({options:o,...l})=>t.jsx(r.MultiSelect,{...l,children:o.map(g=>"children"in g?t.jsx(r.MultiSelectGroup,{label:g.label,values:g.children.map(j=>j.value.toString()),children:g.children.map(j=>t.jsx(u,{value:j.value,children:j.label},j.value))},g.label):t.jsx(r.MultiSelectOption,{value:g.value,children:g.label},g.value))}),u=a.default(r.MultiSelectOption)`
  padding-left: ${({theme:o})=>o.spaces[7]};
`;n.MultiSelectNested=d},97660:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85946);/**
 * @preserve
 * @deprecated This component is only fit for the MultiSelect component.
 * Therefore, you should import the MultiSelectGroup component instead.
 */const s=t.MultiSelectGroup;n.OptGroup=s},53247:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(85946),r=e(57626),i=e(93938);/**
 * @preserve
 * @deprecated You should import the specific type of option you want to render,
 * e.g. `import { MultiSelectOption } from '@strapi/design-system';`
 */const a=({multi:d,...u})=>{const o=r.useSelectContext();return d||o.multi?t.jsx(s.MultiSelectOption,{...u}):t.jsx(i.SingleSelectOption,{...u})};n.Option=a},57626:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(96125),r=e(85946),i=e(93938);function a(g){if(g&&g.__esModule)return g;const j=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(g){for(const x in g)if(x!=="default"){const L=Object.getOwnPropertyDescriptor(g,x);Object.defineProperty(j,x,L.get?L:{enumerable:!0,get:()=>g[x]})}}return j.default=g,Object.freeze(j)}const d=a(s),u=d.createContext({multi:!1}),o=()=>d.useContext(u);/**
 * @preserve
 * @deprecated You should import the specific type of select you want to render
 *
 * e.g. `import { MultiSelect } from '@strapi/design-system';`
 */const l=g=>{const j=d.useMemo(()=>({multi:Boolean(g.multi||g.withTags)}),[g.multi,g.withTags]);return t.jsx(u.Provider,{value:j,children:g.multi||g.withTags?t.jsx(r.MultiSelect,{...g}):t.jsx(i.SingleSelect,{...g})})};n.Select=l,n.useSelectContext=o},29233:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(96125),r=e(75729),i=e(68946),a=e(18894);function d(b){if(b&&b.__esModule)return b;const f=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(b){for(const h in b)if(h!=="default"){const m=Object.getOwnPropertyDescriptor(b,h);Object.defineProperty(f,h,m.get?m:{enumerable:!0,get:()=>b[h]})}}return f.default=b,Object.freeze(f)}const u=d(s),o={Keyboard:"down:keyboard",Mouse:"down:mouse"},l={Keyboard:"up:keyboard",Mouse:"up:mouse"};/**
 * @preserve
 * @deprecated This component will be removed in the next major release.
 * If you need a custom listbox I would recommend opening a new issue.
 */const g=({labelledBy:b,onSelectItem:f,children:h,multi:m=!1,onEscape:v,expanded:S})=>{const T=x(S),p=y=>{switch(y.key){case i.KeyboardKeys.ESCAPE:{y.stopPropagation(),v();break}case i.KeyboardKeys.DOWN:{y.preventDefault();const C=L(T.current);if(!C)return;const I=C.nextSibling;if(I)j(T.current,I);else{const R=T.current.querySelectorAll('[role="option"]')[0];j(T.current,R)}break}case i.KeyboardKeys.UP:{y.preventDefault();const C=L(T.current);if(!C)return;const I=C.previousSibling;if(I)j(T.current,I);else{const B=T.current.querySelectorAll('[role="option"]'),R=B[B.length-1];j(T.current,R)}break}case i.KeyboardKeys.SPACE:case i.KeyboardKeys.ENTER:{y.preventDefault();const C=L(T.current);C.getAttribute("data-opt-group")?f(C.getAttribute("data-opt-group-children").split(","),C.getAttribute("data-opt-group")):f(C.getAttribute("data-strapi-value")),m||v();break}}};return t.jsx(a.Flex,{as:"ul",gap:1,direction:"column",alignItems:"stretch",role:"listbox","aria-labelledby":b,tabIndex:-1,ref:T,onKeyDown:p,onBlur:v,children:h})},j=(b,f)=>{b.setAttribute("aria-activedescendant",f.getAttribute("id")),b.querySelectorAll('[role="option"]').forEach(v=>v.classList.remove("is-focused")),f.classList.add("is-focused"),r.compute(f,{scrollMode:"if-needed",block:"nearest",inline:"nearest"}).forEach(({el:v,top:S,left:T})=>{v.scrollTop=S,v.scrollLeft=T})},x=b=>{const f=u.useRef(null);return u.useEffect(()=>{f.current.focus()},[]),u.useEffect(()=>{if(!f.current)return;const h=f.current.querySelector('[aria-selected="true"]'),m=f.current.querySelectorAll('[role="option"]');let v;h?v=h:b===l.Keyboard?v=m[m.length-1]:b===o.Keyboard&&(v=m[0]),v&&(b===l.Keyboard||b===o.Keyboard)&&j(f.current,v)},[]),f},L=b=>{const f=b.getAttribute("aria-activedescendant");return b.querySelector(`#${f}`)};n.SelectList=g},97030:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(96125),r=e(28683),i=e(64772),a=e(87426),d=e(987),u=e(18894),o=e(90241),l=e(98614),g=e(14073),j=M=>M&&M.__esModule?M:{default:M};function x(M){if(M&&M.__esModule)return M;const w=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(M){for(const F in M)if(F!=="default"){const Q=Object.getOwnPropertyDescriptor(M,F);Object.defineProperty(w,F,Q.get?Q:{enumerable:!0,get:()=>M[F]})}}return w.default=M,Object.freeze(w)}const L=x(s),b=j(a),f=L.forwardRef(({onClear:M,clearLabel:w="Clear",startIcon:F,disabled:Q,hasError:Dt,size:Ht="M",children:se,..._t},xt)=>{const jt=L.useRef(null),$t=Gt=>{M&&!Q&&(M(Gt),jt.current.focus())},Zt=d.useComposedRefs(jt,xt);return t.jsx(i.Select.Trigger,{asChild:!0,children:t.jsxs(m,{"aria-disabled":Q,$hasError:Dt,$size:Ht,ref:Zt,alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden",hasRadius:!0,background:Q?"neutral150":"neutral0",paddingLeft:3,paddingRight:3,gap:4,cursor:"default",width:"100%",..._t,children:[t.jsxs(u.Flex,{flex:"1",as:"span",gap:3,children:[F&&t.jsx(o.Box,{as:"span","aria-hidden":!0,children:F}),se]}),t.jsxs(u.Flex,{as:"span",gap:3,children:[M?t.jsx(h,{as:"button",hasRadius:!0,background:"transparent",role:"button",tabIndex:0,onClick:$t,"aria-disabled":Q,"aria-label":w,title:w,cursor:"pointer",children:t.jsx(r.Cross,{})}):null,t.jsx(v,{children:t.jsx(r.CarretDown,{})})]})]})})}),h=b.default(o.Box)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:M})=>M.colors.neutral600};
  }
`,m=b.default(u.Flex)`
  border: 1px solid ${({theme:M,$hasError:w})=>w?M.colors.danger600:M.colors.neutral200};
  min-height: ${({theme:M,$size:w})=>l.getThemeSize("input")({theme:M,size:w})};

  &[aria-disabled='true'] {
    color: ${M=>M.theme.colors.neutral600};
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:M,$hasError:w})=>l.inputFocusStyle()({theme:M,hasError:w})};
`,v=b.default(i.Select.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:M})=>M.colors.neutral600};
    }
  }
`,S=L.forwardRef(({children:M,placeholder:w,...F},Q)=>t.jsx(T,{ref:Q,ellipsis:!0,...F,children:t.jsx(p,{placeholder:w,children:M})})),T=b.default(g.Typography)`
  flex: 1;
`,p=b.default(i.Select.Value)`
  display: flex;
  gap: ${({theme:M})=>M.spaces[1]};
  flex-wrap: wrap;
`,y=b.default(i.Select.Content)`
  background: ${({theme:M})=>M.colors.neutral0};
  box-shadow: ${({theme:M})=>M.shadows.filterShadow};
  border: 1px solid ${({theme:M})=>M.colors.neutral150};
  border-radius: ${({theme:M})=>M.borderRadius};
  min-width: var(--radix-select-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:M})=>M.zIndices[1]};
`,C=b.default(i.Select.Viewport)`
  padding: ${({theme:M})=>M.spaces[1]};
`,I=L.forwardRef((M,w)=>t.jsx(R,{ref:w,...M})),B=a.css`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  border-radius: ${M=>M.theme.borderRadius};
  padding: ${M=>`${M.theme.spaces[2]} ${M.theme.spaces[4]}`};
  padding-left: ${({theme:M})=>M.spaces[4]};
  background-color: ${({theme:M})=>M.colors.neutral0};
  display: flex;
  align-items: center;
  gap: ${({theme:M})=>M.spaces[2]};
  white-space: nowrap;
  user-select: none;

  &:focus-visible {
    outline: none;
    background-color: ${({theme:M})=>M.colors.primary100};
  }
`,R=b.default(i.Select.Item)`
  ${B}

  &:hover {
    background-color: ${({theme:M})=>M.colors.primary100};
  }

  &[data-state='checked'] {
    ${g.Typography} {
      font-weight: bold;
      color: ${({theme:M})=>M.colors.primary600};
    }
  }
`,O=i.Select.Root,A=f,D=S,N=i.Select.Portal,V=y,q=C,rt=I,et=i.Select.ItemIndicator,it=i.Select.ItemText,Nt=i.Select.Group;n.Content=V,n.Group=Nt,n.Item=rt,n.ItemIndicator=et,n.ItemText=it,n.Portal=N,n.Root=O,n.Trigger=A,n.Value=D,n.Viewport=q},93938:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(96125),r=e(97030),i=e(56176),a=e(987),d=e(94182),u=e(65484),o=e(2449),l=e(18894),g=e(99787),j=e(89459),x=e(10949),L=e(90241),b=e(14073);function f(T){if(T&&T.__esModule)return T;const p=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(T){for(const y in T)if(y!=="default"){const C=Object.getOwnPropertyDescriptor(T,y);Object.defineProperty(p,y,C.get?C:{enumerable:!0,get:()=>T[y]})}}return p.default=T,Object.freeze(p)}const h=f(s),m=h.forwardRef(({error:T,hint:p,id:y,label:C,labelAction:I,required:B,selectButtonTitle:R,...O},A)=>{const D=d.useId(y),N=h.useRef(null),V=()=>{N.current.focus()},q=a.useComposedRefs(A,N);return t.jsx(o.Field,{hint:p,error:T,id:D,required:B,children:t.jsxs(l.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[C?t.jsx(g.FieldLabel,{onClick:V,action:I,children:C}):null,t.jsx(v,{label:C,id:D,ref:q,required:B,...O}),t.jsx(j.FieldHint,{}),t.jsx(x.FieldError,{})]})})}),v=h.forwardRef(({"aria-label":T,id:p,children:y,clearLabel:C="Clear",customizeContent:I,disabled:B,error:R,label:O,onChange:A,onClear:D,onCloseAutoFocus:N,onReachEnd:V,placeholder:q,required:rt,selectButtonTitle:et,startIcon:it,size:Nt="M",value:M,...w},F)=>{const[Q,Dt]=h.useState(),[Ht,se]=h.useState(!1),_t=yt=>{se(yt)},xt=yt=>{D&&D(yt),A||Dt("")},jt=`${p}-hint`,$t=`${p}-error`,Zt=yt=>{A?A(typeof M=="number"?Number(yt):yt):Dt(yt)},Gt=h.useRef(null),Et=d.useId(),ut=`intersection-${i.stripReactIdOfColon(Et)}`,Ut=yt=>{V&&V(yt)};u.useIntersection(Gt,Ut,{selectorToWatch:`#${ut}`,skipWhen:!Ht});const bt=(typeof M<"u"&&M!==null?M.toString():Q)??"";return t.jsxs(r.Root,{onOpenChange:_t,disabled:B,required:rt,onValueChange:Zt,value:bt,...w,children:[t.jsx(r.Trigger,{ref:F,"aria-label":O??T,"aria-describedby":p?`${jt} ${$t}`:void 0,id:p,startIcon:it,size:Nt,hasError:Boolean(R),disabled:B,clearLabel:C,onClear:bt&&D?xt:void 0,children:t.jsx(r.Value,{placeholder:q,textColor:bt?"neutral800":"neutral600",children:bt&&I?I(bt):void 0})}),t.jsx(r.Portal,{children:t.jsx(r.Content,{position:"popper",sideOffset:4,onCloseAutoFocus:N,children:t.jsxs(r.Viewport,{ref:Gt,children:[y,t.jsx(L.Box,{id:ut,width:"100%",height:"1px"})]})})})]})}),S=h.forwardRef(({value:T,startIcon:p,children:y,...C},I)=>t.jsxs(r.Item,{ref:I,value:T.toString(),...C,children:[p&&t.jsx(L.Box,{as:"span","aria-hidden":!0,children:p}),t.jsx(b.Typography,{textColor:"neutral800",children:t.jsx(r.ItemText,{children:y})})]}));n.SingleSelect=m,n.SingleSelectInput=v,n.SingleSelectOption=S},33246:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(17475),s=e(85946),r=e(93938),i=e(57626),a=e(53247),d=e(97660),u=e(29233);n.MultiSelectNested=t.MultiSelectNested,n.MultiSelect=s.MultiSelect,n.MultiSelectGroup=s.MultiSelectGroup,n.MultiSelectOption=s.MultiSelectOption,n.SingleSelect=r.SingleSelect,n.SingleSelectOption=r.SingleSelectOption,n.Select=i.Select,n.Option=a.Option,n.OptGroup=d.OptGroup,n.SelectList=u.SelectList},68105:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(96125),r=e(74863),i=e(94182);function a(o){if(o&&o.__esModule)return o;const l=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(o){for(const g in o)if(g!=="default"){const j=Object.getOwnPropertyDescriptor(o,g);Object.defineProperty(l,g,j.get?j:{enumerable:!0,get:()=>o[g]})}}return l.default=o,Object.freeze(l)}const d=a(s),u=d.forwardRef(({id:o,initialSelectedTabIndex:l=0,label:g,onTabChange:j,variant:x,...L},b)=>{const f=i.useId(o),[h,m]=d.useState(l);d.useImperativeHandle(b,()=>({_handlers:{setSelectedTabIndex:m}}));const v=d.useMemo(()=>({id:f,selectedTabIndex:h,selectTabIndex:m,label:g,variant:x,onTabChange:j}),[g,j,h,f,x]);return t.jsx(r.TabsContext.Provider,{value:v,children:t.jsx("div",{...L})})});u.displayName="TabGroup",n.TabGroup=u},41218:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(96125),r=e(74863),i=({children:d,...u})=>{const{id:o,selectedTabIndex:l}=r.useTabs(),g=s.Children.toArray(d).map((j,x)=>s.cloneElement(j,{id:`${o}-${x}`})).filter((j,x)=>x===l);return t.jsx("div",{...u,children:g})},a=({id:d,...u})=>{const o=`${d}-tab`,l=`${d}-tabpanel`;return t.jsx("div",{id:l,role:"tabpanel",tabIndex:0,"aria-labelledby":o,...u})};n.TabPanel=a,n.TabPanels=i},15772:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(96125),r=e(64772),i=e(87426),a=e(11435),d=e(74863),u=e(68946),o=e(14073),g=(f=>f&&f.__esModule?f:{default:f})(i),j=(f,h)=>{const m=s.useRef(null),v=s.useRef(!1),S=r.useCallbackRef(h);return s.useEffect(()=>{if(m.current){if(v.current){const T=m.current.querySelector('[tabindex="0"]');T&&(T.focus(),S(f))}v.current||(v.current=!0)}},[f,S]),m},x=g.default.button`
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,L=({children:f,...h})=>{const{id:m,selectedTabIndex:v,selectTabIndex:S,label:T,variant:p,onTabChange:y}=d.useTabs(),C=j(v,y),I=s.Children.toArray(f).map((R,O)=>s.cloneElement(R,{id:`${m}-${O}`,index:O,selectedTabIndex:v,onTabClick:()=>S(O),variant:p})),B=R=>{if(!I.every(A=>A.props.disabled))switch(R.key){case u.KeyboardKeys.RIGHT:{const A=v+1,D=V=>I[V].props.disabled?V===I.length-1?D(0):D(V+1):V,N=D(A>=I.length?0:A);S(N);break}case u.KeyboardKeys.LEFT:{const A=v-1,D=V=>I[V].props.disabled?D(V===0?I.length-1:V-1):V,N=D(A<0?I.length-1:A);S(N);break}case u.KeyboardKeys.HOME:{const A=I.findIndex(D=>!D.props.disabled);S(A);break}case u.KeyboardKeys.END:{const D=I.map((N,V)=>({isDisabled:N.props.disabled,index:V})).reverse().find(({isDisabled:N})=>!N);D&&S(D.index);break}}};return p==="simple"?t.jsx("div",{ref:C,role:"tablist","aria-label":T,onKeyDown:B,...h,children:I}):t.jsx(a.DefaultTabsRow,{ref:C,role:"tablist",alignItems:"flex-end","aria-label":T,onKeyDown:B,...h,children:I})},b=({disabled:f=!1,id:h,children:m,variant:v,hasError:S=!1,index:T,selectedTabIndex:p,onTabClick:y,...C})=>{const I=`${h}-tab`,B=`${h}-tabpanel`,R=T===p,O=()=>{f||y&&y()};if(v==="simple"){let D;return S?D="danger600":R?D="primary600":D="neutral600",t.jsx(x,{id:I,role:"tab","aria-controls":R?B:void 0,tabIndex:R?0:-1,"aria-selected":R,type:"button",onClick:O,"aria-disabled":f,...C,children:t.jsx(a.SimpleTabBox,{padding:4,selected:R,hasError:S,children:t.jsx(o.Typography,{variant:"sigma",textColor:D,children:m})})})}S&&console.warn('The "hasError" prop is only available for the "simple" variant.');const A=p&&p-1===T;return t.jsx(a.DefaultTabButton,{id:I,role:"tab",type:"button","aria-controls":R?B:void 0,tabIndex:R?0:-1,"aria-selected":R,onClick:O,"aria-disabled":f,showRightBorder:Boolean(A),...C,children:t.jsx(a.DefaultTabBox,{padding:R?4:3,background:R?"neutral0":"neutral100",selected:R,children:t.jsx(o.Typography,{fontWeight:"bold",textColor:R?"primary700":"neutral600",children:m})})})};n.Tab=b,n.Tabs=L},74863:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(96125),s=t.createContext({id:"",label:"",selectedTabIndex:0,selectTabIndex(){throw new Error("TabsContext.selectTabIndex is not implemented.")}}),r=()=>t.useContext(s);n.TabsContext=s,n.useTabs=r},11435:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(87426),s=e(90241),r=e(18894),a=(g=>g&&g.__esModule?g:{default:g})(t),d=a.default(s.Box)`
  border-bottom: 2px solid
    ${({theme:g,selected:j,hasError:x})=>j?x?g.colors.danger600:g.colors.primary600:"transparent"};
`,u=a.default(s.Box)`
  border-bottom: 1px solid ${({theme:g,selected:j})=>j?g.colors.neutral0:g.colors.neutral150};
`,o=a.default.button`
  border: none;
  background: transparent;
  padding: 0;

  & + & > ${u} {
    border-left: 1px solid ${({theme:g})=>g.colors.neutral150};
  }

  ${u} {
    border-right: ${({theme:g,showRightBorder:j})=>j?`1px solid ${g.colors.neutral150}`:"none"};
  }

  // Hack preventing the outline from being overflow by the following tab
  outline-offset: -2px;

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,l=a.default(r.Flex)`
  & > * {
    flex: 1;
  }

  & ${o}:first-of-type ${u} {
    border-radius: ${({theme:g})=>`${g.borderRadius} 0 0 0`};
  }

  & ${o}:last-of-type ${u} {
    border-radius: ${({theme:g})=>`0 ${g.borderRadius} 0 0`};
  }

  & ${o}[aria-selected="true"] ${u} {
    border-radius: ${({theme:g})=>`${g.borderRadius} ${g.borderRadius} 0 0`};
    border-left: none;
    border-right: none;
  }
`;n.DefaultTabBox=u,n.DefaultTabButton=o,n.DefaultTabsRow=l,n.SimpleTabBox=d},64165:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(15772),s=e(41218),r=e(68105);n.Tab=t.Tab,n.Tabs=t.Tabs,n.TabPanel=s.TabPanel,n.TabPanels=s.TabPanels,n.TabGroup=r.TabGroup},36787:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(87426),r=e(18894),i=e(14073),d=(g=>g&&g.__esModule?g:{default:g})(s),u=({children:g,icon:j,disabled:x=!1,onClick:L,...b})=>{const f=h=>{x||!L||L(h)};return t.jsxs(o,{as:"button",background:x?"neutral200":"primary100",color:x?"neutral700":"primary600",paddingLeft:3,paddingRight:3,onClick:f,"aria-disabled":x,disabled:x,borderWidth:"1px",borderStyle:"solid",borderColor:x?"neutral300":"primary200",hasRadius:!0,height:`${32/16}rem`,gap:2,...b,children:[t.jsx(l,{$disabled:x,variant:"pi",fontWeight:"bold",as:"span",children:g}),j]})},o=d.default(r.Flex)`
  & > svg {
    height: ${8/16}rem;
    width: ${8/16}rem;
  }

  & > svg path {
    fill: ${({theme:g,...j})=>j["aria-disabled"]?g.colors.neutral600:g.colors.primary600};
  }
`,l=d.default(i.Typography)`
  color: inherit;
  border-right: 1px solid ${({theme:g,$disabled:j})=>j?g.colors.neutral300:g.colors.primary200};
  padding-right: ${({theme:g})=>g.spaces[2]};
`;n.Tag=u},67586:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(88292);n.TextButton=t.TextButton},92198:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(18237),s=e(96125),r=e(94182),i=e(2449),a=e(18894),d=e(99787),u=e(94976),o=e(89459),l=e(10949),g=s.forwardRef(({name:j,hint:x,error:L,label:b,labelAction:f,id:h,required:m,...v},S)=>{const T=r.useId(h),p=s.useRef(null),y=s.useRef(null);if(!b&&!v["aria-label"])throw new Error('The TextInput component needs a "label" or an "aria-label" props');return s.useImperativeHandle(S,()=>({input:y,inputWrapperRef:p}),[]),t.jsx("div",{ref:p,children:t.jsx(i.Field,{name:j,hint:x,error:L,id:T,required:m,children:t.jsxs(a.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[b&&t.jsx(d.FieldLabel,{action:f,children:b}),t.jsx(u.FieldInput,{ref:y,...v}),t.jsx(o.FieldHint,{}),t.jsx(l.FieldError,{})]})})})});g.displayName="TextInput",n.TextInput=g},93666:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(92198);n.TextInput=t.TextInput},66073:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(96125),s=r=>{const i=t.useRef(null),[a,d]=t.useState(!0),u=([o])=>{d(o.isIntersecting)};return t.useEffect(()=>{const o=i.current,l=new IntersectionObserver(u,r);return o&&l.observe(i.current),()=>{o&&l.disconnect()}},[i,r]),[i,a]};n.useElementOnScreen=s},45330:($,n,e)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(96125),s=e(64772),r=(i,a)=>{const d=s.useCallbackRef(a);t.useLayoutEffect(()=>{const u=new ResizeObserver(d);return Array.isArray(i)?i.forEach(o=>{o.current&&u.observe(o.current)}):i.current&&u.observe(i.current),()=>{u.disconnect()}},[i,d])};n.useResizeObserver=r},9307:($,n,e)=>{"use strict";const t=e(53657),s=i=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:t.jsx("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),r=s;$.exports=r},78839:($,n,e)=>{"use strict";const t=e(53657),s=i=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:t.jsx("path",{fill:"#212134",d:"M20.727 2.97a.2.2 0 0 1 .286 0l2.85 2.89a.2.2 0 0 1 0 .28L9.554 20.854a.2.2 0 0 1-.285 0l-9.13-9.243a.2.2 0 0 1 0-.281l2.85-2.892a.2.2 0 0 1 .284 0l6.14 6.209L20.726 2.97Z"})}),r=s;$.exports=r},62819:($,n,e)=>{"use strict";const t=e(53657),s=i=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:[t.jsx("path",{fill:"#212134",d:"M15.2 12a3.2 3.2 0 1 1-6.399 0 3.2 3.2 0 0 1 6.4 0Z"}),t.jsx("path",{fill:"#212134",fillRule:"evenodd",d:"M18.78 6.103c1.923 1.243 3.64 2.981 4.963 5.027a1.61 1.61 0 0 1 .005 1.738c-1.318 2.063-3.031 3.807-4.954 5.046-2.12 1.364-4.475 2.086-6.81 2.086-2.388 0-4.683-.7-6.816-2.082-1.894-1.225-3.593-2.966-4.914-5.032a1.596 1.596 0 0 1 .032-1.777C1.89 8.811 3.734 7.027 5.77 5.805 7.767 4.608 9.858 4 11.984 4c2.317 0 4.667.728 6.795 2.103Zm-9.446 9.888a4.8 4.8 0 1 0 5.334-7.982 4.8 4.8 0 0 0-5.334 7.982Z",clipRule:"evenodd"})]}),r=s;$.exports=r},52829:($,n,e)=>{"use strict";const t=e(53657),s=i=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:t.jsx("path",{fill:"#212134",fillRule:"evenodd",d:"M23.604 3.514c.528.528.528 1.36 0 1.887l-2.622 2.607-4.99-4.99L18.6.396a1.322 1.322 0 0 1 1.887 0l3.118 3.118ZM0 24v-4.99l14.2-14.2 4.99 4.99L4.99 24H0Z",clipRule:"evenodd"})}),r=s;$.exports=r},90313:($,n,e)=>{"use strict";const t=e(53657),s=i=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:t.jsx("path",{fill:"#212134",d:"M24 13.604a.3.3 0 0 1-.3.3h-9.795V23.7a.3.3 0 0 1-.3.3h-3.21a.3.3 0 0 1-.3-.3v-9.795H.3a.3.3 0 0 1-.3-.3v-3.21a.3.3 0 0 1 .3-.3h9.795V.3a.3.3 0 0 1 .3-.3h3.21a.3.3 0 0 1 .3.3v9.795H23.7a.3.3 0 0 1 .3.3v3.21Z"})}),r=s;$.exports=r},57114:($,n,e)=>{"use strict";const t=e(53657),s=i=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:t.jsx("path",{fill:"#32324D",d:"M3.236 6.149a.2.2 0 0 0-.197.233L6 24h12l2.96-17.618a.2.2 0 0 0-.196-.233H3.236ZM21.8 1.983c.11 0 .2.09.2.2v1.584a.2.2 0 0 1-.2.2H2.2a.2.2 0 0 1-.2-.2V2.183c0-.11.09-.2.2-.2h5.511c.9 0 1.631-1.09 1.631-1.983h5.316c0 .894.73 1.983 1.631 1.983H21.8Z"})}),r=s;$.exports=r},94123:($,n,e)=>{"use strict";const t=e(18237),s=i=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 14 8",...i,children:t.jsx("path",{fill:"#32324D",fillRule:"evenodd",d:"M14 .889a.86.86 0 0 1-.26.625L7.615 7.736A.834.834 0 0 1 7 8a.834.834 0 0 1-.615-.264L.26 1.514A.861.861 0 0 1 0 .889c0-.24.087-.45.26-.625A.834.834 0 0 1 .875 0h12.25c.237 0 .442.088.615.264a.86.86 0 0 1 .26.625Z",clipRule:"evenodd"})}),r=s;$.exports=r},69600:($,n,e)=>{"use strict";const t=e(18237),s=i=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:[t.jsx("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),t.jsx("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),t.jsx("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),t.jsx("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),t.jsx("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),t.jsx("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),t.jsx("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),r=s;$.exports=r},83558:($,n,e)=>{"use strict";const t=e(18237),s=i=>t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:[t.jsx("circle",{cx:12,cy:12,r:12,fill:"#212134"}),t.jsx("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),r=s;$.exports=r},8701:($,n,e)=>{"use strict";var t=e(67537),s=r(Error);$.exports=s,s.eval=r(EvalError),s.range=r(RangeError),s.reference=r(ReferenceError),s.syntax=r(SyntaxError),s.type=r(TypeError),s.uri=r(URIError),s.create=r;function r(i){return a.displayName=i.displayName||i.name,a;function a(d){return d&&(d=t.apply(null,arguments)),new i(d)}}},67537:$=>{(function(){var n;n=$.exports=s,n.format=s,n.vsprintf=t,typeof console<"u"&&typeof console.log=="function"&&(n.printf=e);function e(){console.log(s.apply(null,arguments))}function t(r,i){return s.apply(null,[r].concat(i))}function s(r){for(var i=1,a=[].slice.call(arguments),d=0,u=r.length,o="",l,g=!1,j,x,L=!1,b,f=function(){return a[i++]},h=function(){for(var m="";/\d/.test(r[d]);)m+=r[d++],l=r[d];return m.length>0?parseInt(m):null};d<u;++d)if(l=r[d],g)switch(g=!1,l=="."?(L=!1,l=r[++d]):l=="0"&&r[d+1]=="."?(L=!0,d+=2,l=r[d]):L=!0,b=h(),l){case"b":o+=parseInt(f(),10).toString(2);break;case"c":j=f(),typeof j=="string"||j instanceof String?o+=j:o+=String.fromCharCode(parseInt(j,10));break;case"d":o+=parseInt(f(),10);break;case"f":x=String(parseFloat(f()).toFixed(b||6)),o+=L?x:x.replace(/^0/,"");break;case"j":o+=JSON.stringify(f());break;case"o":o+="0"+parseInt(f(),10).toString(8);break;case"s":o+=f();break;case"x":o+="0x"+parseInt(f(),10).toString(16);break;case"X":o+="0x"+parseInt(f(),10).toString(16).toUpperCase();break;default:o+=l;break}else l==="%"?g=!0:o+=l;return o}})()},57732:($,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});function e(p){return typeof p=="object"&&!("toString"in p)?Object.prototype.toString.call(p).slice(8,-1):p}var t=typeof process=="object"&&!0;function s(p,y){if(!p)throw t?new Error("Invariant failed"):new Error(y())}n.invariant=s;var r=Object.prototype.hasOwnProperty,i=Array.prototype.splice,a=Object.prototype.toString;function d(p){return a.call(p).slice(8,-1)}var u=Object.assign||function(p,y){return o(y).forEach(function(C){r.call(y,C)&&(p[C]=y[C])}),p},o=typeof Object.getOwnPropertySymbols=="function"?function(p){return Object.keys(p).concat(Object.getOwnPropertySymbols(p))}:function(p){return Object.keys(p)};function l(p){return Array.isArray(p)?u(p.constructor(p.length),p):d(p)==="Map"?new Map(p):d(p)==="Set"?new Set(p):p&&typeof p=="object"?u(Object.create(Object.getPrototypeOf(p)),p):p}var g=function(){function p(){this.commands=u({},j),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(y,C){return y===C},this.update.newContext=function(){return new p().update}}return Object.defineProperty(p.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(y){this.update.isEquals=y},enumerable:!0,configurable:!0}),p.prototype.extend=function(y,C){this.commands[y]=C},p.prototype.update=function(y,C){var I=this,B=typeof C=="function"?{$apply:C}:C;Array.isArray(y)&&Array.isArray(B)||s(!Array.isArray(B),function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."}),s(typeof B=="object"&&B!==null,function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the "+("following commands: "+Object.keys(I.commands).join(", ")+".")});var R=y;return o(B).forEach(function(O){if(r.call(I.commands,O)){var A=y===R;R=I.commands[O](B[O],R,B,y),A&&I.isEquals(R,y)&&(R=y)}else{var D=d(y)==="Map"?I.update(y.get(O),B[O]):I.update(y[O],B[O]),N=d(R)==="Map"?R.get(O):R[O];(!I.isEquals(D,N)||typeof D>"u"&&!r.call(y,O))&&(R===y&&(R=l(y)),d(R)==="Map"?R.set(O,D):R[O]=D)}}),R},p}();n.Context=g;var j={$push:function(p,y,C){return L(y,C,"$push"),p.length?y.concat(p):y},$unshift:function(p,y,C){return L(y,C,"$unshift"),p.length?p.concat(y):y},$splice:function(p,y,C,I){return f(y,C),p.forEach(function(B){h(B),y===I&&B.length&&(y=l(I)),i.apply(y,B)}),y},$set:function(p,y,C){return v(C),p},$toggle:function(p,y){b(p,"$toggle");var C=p.length?l(y):y;return p.forEach(function(I){C[I]=!y[I]}),C},$unset:function(p,y,C,I){return b(p,"$unset"),p.forEach(function(B){Object.hasOwnProperty.call(y,B)&&(y===I&&(y=l(I)),delete y[B])}),y},$add:function(p,y,C,I){return T(y,"$add"),b(p,"$add"),d(y)==="Map"?p.forEach(function(B){var R=B[0],O=B[1];y===I&&y.get(R)!==O&&(y=l(I)),y.set(R,O)}):p.forEach(function(B){y===I&&!y.has(B)&&(y=l(I)),y.add(B)}),y},$remove:function(p,y,C,I){return T(y,"$remove"),b(p,"$remove"),p.forEach(function(B){y===I&&y.has(B)&&(y=l(I)),y.delete(B)}),y},$merge:function(p,y,C,I){return S(y,p),o(p).forEach(function(B){p[B]!==y[B]&&(y===I&&(y=l(I)),y[B]=p[B])}),y},$apply:function(p,y){return m(p),p(y)}},x=new g;n.isEquals=x.update.isEquals,n.extend=x.extend,n.default=x.update,n.default.default=$.exports=u(n.default,n);function L(p,y,C){s(Array.isArray(p),function(){return"update(): expected target of "+e(C)+" to be an array; got "+e(p)+"."}),b(y[C],C)}function b(p,y){s(Array.isArray(p),function(){return"update(): expected spec of "+e(y)+" to be an array; got "+e(p)+". Did you forget to wrap your parameter in an array?"})}function f(p,y){s(Array.isArray(p),function(){return"Expected $splice target to be an array; got "+e(p)}),h(y.$splice)}function h(p){s(Array.isArray(p),function(){return"update(): expected spec of $splice to be an array of arrays; got "+e(p)+". Did you forget to wrap your parameters in an array?"})}function m(p){s(typeof p=="function",function(){return"update(): expected spec of $apply to be a function; got "+e(p)+"."})}function v(p){s(Object.keys(p).length===1,function(){return"Cannot have more than one key in an object with $set"})}function S(p,y){s(y&&typeof y=="object",function(){return"update(): $merge expects a spec of type 'object'; got "+e(y)}),s(p&&typeof p=="object",function(){return"update(): $merge expects a target of type 'object'; got "+e(p)})}function T(p,y){var C=d(p);s(C==="Map"||C==="Set",function(){return"update(): "+e(y)+" expects a target of type Set or Map; got "+e(C)})}},6842:($,n,e)=>{var t=e(85159),s=1,r=4;function i(a,d){return d=typeof d=="function"?d:void 0,t(a,s|r,d)}$.exports=i},8112:($,n,e)=>{"use strict";var t=e(28599);$.exports=t,t.registerLanguage("1c",e(81574)),t.registerLanguage("abnf",e(89387)),t.registerLanguage("accesslog",e(61264)),t.registerLanguage("actionscript",e(14619)),t.registerLanguage("ada",e(83136)),t.registerLanguage("angelscript",e(42733)),t.registerLanguage("apache",e(98277)),t.registerLanguage("applescript",e(37717)),t.registerLanguage("arcade",e(15434)),t.registerLanguage("arduino",e(91111)),t.registerLanguage("armasm",e(12787)),t.registerLanguage("xml",e(71481)),t.registerLanguage("asciidoc",e(95165)),t.registerLanguage("aspectj",e(84475)),t.registerLanguage("autohotkey",e(53410)),t.registerLanguage("autoit",e(33318)),t.registerLanguage("avrasm",e(16332)),t.registerLanguage("awk",e(21461)),t.registerLanguage("axapta",e(52653)),t.registerLanguage("bash",e(71438)),t.registerLanguage("basic",e(37847)),t.registerLanguage("bnf",e(55623)),t.registerLanguage("brainfuck",e(70352)),t.registerLanguage("c-like",e(16079)),t.registerLanguage("c",e(72605)),t.registerLanguage("cal",e(14718)),t.registerLanguage("capnproto",e(93518)),t.registerLanguage("ceylon",e(89153)),t.registerLanguage("clean",e(63203)),t.registerLanguage("clojure",e(91496)),t.registerLanguage("clojure-repl",e(86804)),t.registerLanguage("cmake",e(92126)),t.registerLanguage("coffeescript",e(17393)),t.registerLanguage("coq",e(64951)),t.registerLanguage("cos",e(23508)),t.registerLanguage("cpp",e(48353)),t.registerLanguage("crmsh",e(53350)),t.registerLanguage("crystal",e(13378)),t.registerLanguage("csharp",e(75874)),t.registerLanguage("csp",e(88459)),t.registerLanguage("css",e(70341)),t.registerLanguage("d",e(77133)),t.registerLanguage("markdown",e(99589)),t.registerLanguage("dart",e(33068)),t.registerLanguage("delphi",e(26445)),t.registerLanguage("diff",e(53908)),t.registerLanguage("django",e(2922)),t.registerLanguage("dns",e(33993)),t.registerLanguage("dockerfile",e(4887)),t.registerLanguage("dos",e(41703)),t.registerLanguage("dsconfig",e(29374)),t.registerLanguage("dts",e(21998)),t.registerLanguage("dust",e(12684)),t.registerLanguage("ebnf",e(5746)),t.registerLanguage("elixir",e(70220)),t.registerLanguage("elm",e(35907)),t.registerLanguage("ruby",e(10884)),t.registerLanguage("erb",e(41539)),t.registerLanguage("erlang-repl",e(94135)),t.registerLanguage("erlang",e(29322)),t.registerLanguage("excel",e(96762)),t.registerLanguage("fix",e(70059)),t.registerLanguage("flix",e(81389)),t.registerLanguage("fortran",e(22681)),t.registerLanguage("fsharp",e(77437)),t.registerLanguage("gams",e(78950)),t.registerLanguage("gauss",e(62990)),t.registerLanguage("gcode",e(90490)),t.registerLanguage("gherkin",e(97739)),t.registerLanguage("glsl",e(14618)),t.registerLanguage("gml",e(92737)),t.registerLanguage("go",e(80991)),t.registerLanguage("golo",e(93982)),t.registerLanguage("gradle",e(21870)),t.registerLanguage("groovy",e(98009)),t.registerLanguage("haml",e(899)),t.registerLanguage("handlebars",e(8141)),t.registerLanguage("haskell",e(19994)),t.registerLanguage("haxe",e(33910)),t.registerLanguage("hsp",e(62871)),t.registerLanguage("htmlbars",e(42363)),t.registerLanguage("http",e(51687)),t.registerLanguage("hy",e(54122)),t.registerLanguage("inform7",e(45718)),t.registerLanguage("ini",e(8597)),t.registerLanguage("irpf90",e(11996)),t.registerLanguage("isbl",e(92699)),t.registerLanguage("java",e(40736)),t.registerLanguage("javascript",e(37515)),t.registerLanguage("jboss-cli",e(73102)),t.registerLanguage("json",e(66969)),t.registerLanguage("julia",e(45334)),t.registerLanguage("julia-repl",e(98022)),t.registerLanguage("kotlin",e(94048)),t.registerLanguage("lasso",e(17700)),t.registerLanguage("latex",e(85146)),t.registerLanguage("ldif",e(92044)),t.registerLanguage("leaf",e(67952)),t.registerLanguage("less",e(88616)),t.registerLanguage("lisp",e(41664)),t.registerLanguage("livecodeserver",e(38920)),t.registerLanguage("livescript",e(32716)),t.registerLanguage("llvm",e(91506)),t.registerLanguage("lsl",e(89258)),t.registerLanguage("lua",e(68798)),t.registerLanguage("makefile",e(59949)),t.registerLanguage("mathematica",e(23537)),t.registerLanguage("matlab",e(21328)),t.registerLanguage("maxima",e(4913)),t.registerLanguage("mel",e(1831)),t.registerLanguage("mercury",e(88926)),t.registerLanguage("mipsasm",e(73766)),t.registerLanguage("mizar",e(34111)),t.registerLanguage("perl",e(26415)),t.registerLanguage("mojolicious",e(41186)),t.registerLanguage("monkey",e(16446)),t.registerLanguage("moonscript",e(97391)),t.registerLanguage("n1ql",e(5439)),t.registerLanguage("nginx",e(1867)),t.registerLanguage("nim",e(62292)),t.registerLanguage("nix",e(71365)),t.registerLanguage("node-repl",e(8549)),t.registerLanguage("nsis",e(90445)),t.registerLanguage("objectivec",e(12251)),t.registerLanguage("ocaml",e(69194)),t.registerLanguage("openscad",e(17073)),t.registerLanguage("oxygene",e(91422)),t.registerLanguage("parser3",e(21108)),t.registerLanguage("pf",e(26479)),t.registerLanguage("pgsql",e(11539)),t.registerLanguage("php",e(85675)),t.registerLanguage("php-template",e(9494)),t.registerLanguage("plaintext",e(62747)),t.registerLanguage("pony",e(36360)),t.registerLanguage("powershell",e(98118)),t.registerLanguage("processing",e(57144)),t.registerLanguage("profile",e(79286)),t.registerLanguage("prolog",e(91945)),t.registerLanguage("properties",e(67393)),t.registerLanguage("protobuf",e(38157)),t.registerLanguage("puppet",e(43183)),t.registerLanguage("purebasic",e(19590)),t.registerLanguage("python",e(10143)),t.registerLanguage("python-repl",e(2386)),t.registerLanguage("q",e(67054)),t.registerLanguage("qml",e(15987)),t.registerLanguage("r",e(92565)),t.registerLanguage("reasonml",e(72790)),t.registerLanguage("rib",e(33927)),t.registerLanguage("roboconf",e(77846)),t.registerLanguage("routeros",e(67921)),t.registerLanguage("rsl",e(75610)),t.registerLanguage("ruleslanguage",e(44680)),t.registerLanguage("rust",e(19461)),t.registerLanguage("sas",e(24967)),t.registerLanguage("scala",e(61326)),t.registerLanguage("scheme",e(32370)),t.registerLanguage("scilab",e(82759)),t.registerLanguage("scss",e(65119)),t.registerLanguage("shell",e(19082)),t.registerLanguage("smali",e(10947)),t.registerLanguage("smalltalk",e(66457)),t.registerLanguage("sml",e(33787)),t.registerLanguage("sqf",e(51151)),t.registerLanguage("sql_more",e(93540)),t.registerLanguage("sql",e(4968)),t.registerLanguage("stan",e(42032)),t.registerLanguage("stata",e(80720)),t.registerLanguage("step21",e(47590)),t.registerLanguage("stylus",e(3560)),t.registerLanguage("subunit",e(54081)),t.registerLanguage("swift",e(87381)),t.registerLanguage("taggerscript",e(22357)),t.registerLanguage("yaml",e(48149)),t.registerLanguage("tap",e(93550)),t.registerLanguage("tcl",e(85914)),t.registerLanguage("thrift",e(63236)),t.registerLanguage("tp",e(3564)),t.registerLanguage("twig",e(44225)),t.registerLanguage("typescript",e(44952)),t.registerLanguage("vala",e(93329)),t.registerLanguage("vbnet",e(63897)),t.registerLanguage("vbscript",e(32168)),t.registerLanguage("vbscript-html",e(59351)),t.registerLanguage("verilog",e(92246)),t.registerLanguage("vhdl",e(80428)),t.registerLanguage("vim",e(33880)),t.registerLanguage("x86asm",e(49749)),t.registerLanguage("xl",e(45660)),t.registerLanguage("xquery",e(7723)),t.registerLanguage("zephir",e(92051))},28599:($,n,e)=>{"use strict";var t=e(75960),s=e(8701);n.highlight=i,n.highlightAuto=a,n.registerLanguage=d,n.listLanguages=u,n.registerAlias=o,l.prototype.addText=x,l.prototype.addKeyword=g,l.prototype.addSublanguage=j,l.prototype.openNode=L,l.prototype.closeNode=b,l.prototype.closeAllNodes=h,l.prototype.finalize=h,l.prototype.toHTML=f;var r="hljs-";function i(m,v,S){var T=t.configure({}),p=S||{},y=p.prefix,C;if(typeof m!="string")throw s("Expected `string` for name, got `%s`",m);if(!t.getLanguage(m))throw s("Unknown language: `%s` is not registered",m);if(typeof v!="string")throw s("Expected `string` for value, got `%s`",v);if(y==null&&(y=r),t.configure({__emitter:l,classPrefix:y}),C=t.highlight(v,{language:m,ignoreIllegals:!0}),t.configure(T||{}),C.errorRaised)throw C.errorRaised;return{relevance:C.relevance,language:C.language,value:C.emitter.rootNode.children}}function a(m,v){var S=v||{},T=S.subset||t.listLanguages(),p=S.prefix,y=T.length,C=-1,I,B,R,O;if(p==null&&(p=r),typeof m!="string")throw s("Expected `string` for value, got `%s`",m);for(B={relevance:0,language:null,value:[]},I={relevance:0,language:null,value:[]};++C<y;)O=T[C],t.getLanguage(O)&&(R=i(O,m,v),R.language=O,R.relevance>B.relevance&&(B=R),R.relevance>I.relevance&&(B=I,I=R));return B.language&&(I.secondBest=B),I}function d(m,v){t.registerLanguage(m,v)}function u(){return t.listLanguages()}function o(m,v){var S=m,T;v&&(S={},S[m]=v);for(T in S)t.registerAliases(S[T],{languageName:T})}function l(m){this.options=m,this.rootNode={children:[]},this.stack=[this.rootNode]}function g(m,v){this.openNode(v),this.addText(m),this.closeNode()}function j(m,v){var S=this.stack,T=S[S.length-1],p=m.rootNode.children,y=v?{type:"element",tagName:"span",properties:{className:[v]},children:p}:p;T.children=T.children.concat(y)}function x(m){var v=this.stack,S,T;m!==""&&(S=v[v.length-1],T=S.children[S.children.length-1],T&&T.type==="text"?T.value+=m:S.children.push({type:"text",value:m}))}function L(m){var v=this.stack,S=this.options.classPrefix+m,T=v[v.length-1],p={type:"element",tagName:"span",properties:{className:[S]},children:[]};T.children.push(p),v.push(p)}function b(){this.stack.pop()}function f(){return""}function h(){}},18445:($,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>Ue});var t=e(53657),s=e(96125),r=e(33541),i=e(29776),a=e(33664),d=e(82154),u=e(3404),o=e(69054),l=e(70139),g=e(7139),j=e(55613),x=e(36956),L=e(30045),b=e(99283),f=e(70136),h=e(9991),m=e(6620),v=e(76731),S=e(22719),T=e(18441),p=e(2669),y=e(58218),C=e(50810),I=e(91845),B=e(34773),R=e(89969),O=e(53169),A=e(63922),D=e(14807),N=e(48814);const q=({data:c})=>{if(!c||!c.you||!c.bot)return null;const E={wordBreak:"keep-all"};return(0,t.jsxs)(p.x,{children:[(0,t.jsx)("span",{children:(0,t.jsxs)(N.Z,{style:E,children:["You: ",c.you," "]})}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{children:(0,t.jsxs)(N.Z,{style:E,children:["ChatGPT: ",c.bot]})})]})};var rt=e(83416),et=e(68577),it=e(17855);const M=({isOpen:c,onClose:E})=>(0,t.jsx)(t.Fragment,{children:c&&(0,t.jsxs)(rt.P,{onClose:()=>E(!c),labelledBy:"title",children:[(0,t.jsx)(et.x,{children:(0,t.jsx)(N.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title",children:"Help"})}),(0,t.jsxs)(it.f,{children:[(0,t.jsx)(N.Z,{variant:"omega",children:"You may use prompts such as the followings to get meaningful response from chatGPT:"}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(N.Z,{variant:"omega",children:(0,t.jsxs)("ol",{children:[(0,t.jsx)("li",{children:"1. Create a quiz with 5 multiple choice questions that assess students' understanding of [concept being taught]"}),(0,t.jsx)("li",{children:"2. Find the bug with this code: [post code below]"}),(0,t.jsx)("li",{children:"3. What exactly does this regex do? rege(x(es)?|xps?)"}),(0,t.jsx)("li",{children:"4. Describe [topic of your choice] in detail"}),(0,t.jsx)("li",{children:"5. Please provide a definition for the medical term 'tachycardia'"})]})}),(0,t.jsx)("br",{}),(0,t.jsxs)(N.Z,{variant:"omega",children:[(0,t.jsx)("a",{href:"https://classplusplus.com/chatgpt/",target:"_blank",children:"Click here"})," ","for more ChatGPT prompts."]})]})]})});var w=e(9091);const Q=({isLoading:c})=>{const E={position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"black",opacity:"0.6",justifyContent:"center",alignItems:"center",display:c?"flex":"none"};return(0,t.jsx)(p.x,{style:E,children:(0,t.jsx)(w.a,{})})};var Dt=e(28649),Ht=e(15345),se=e(93134),_t=e(15713),xt=e(62194);const $t=({isOpen:c,setIsOpen:E,onConfirm:H})=>(0,t.jsxs)(Dt.V,{onClose:()=>E(!1),title:"Confirmation",isOpen:c,children:[(0,t.jsx)(Ht.a,{icon:(0,t.jsx)(xt.Z,{}),children:(0,t.jsx)(L.K,{spacing:2,children:(0,t.jsx)(se.k,{justifyContent:"center",children:(0,t.jsx)(N.Z,{id:"confirm-description",children:"Are you sure you want to clear chatGPT history?"})})})}),(0,t.jsx)(_t.c,{startAction:(0,t.jsx)(b.z,{onClick:()=>E(!1),variant:"tertiary",children:"Cancel"}),endAction:(0,t.jsx)(b.z,{onClick:H,variant:"danger-light",startIcon:(0,t.jsx)(A.Z,{}),children:"Confirm"})})]});var Zt=e(2354),Gt=e(64291),Et=e(17306),ut=e(21922);function Ut(c,E){var H=Object.keys(c);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(c);E&&(z=z.filter(function(tt){return Object.getOwnPropertyDescriptor(c,tt).enumerable})),H.push.apply(H,z)}return H}function bt(c){for(var E=1;E<arguments.length;E++){var H=arguments[E]!=null?arguments[E]:{};E%2?Ut(Object(H),!0).forEach(function(z){(0,Et.Z)(c,z,H[z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(H)):Ut(Object(H)).forEach(function(z){Object.defineProperty(c,z,Object.getOwnPropertyDescriptor(H,z))})}return c}function yt(c){var E=c.length;if(E===0||E===1)return c;if(E===2)return[c[0],c[1],"".concat(c[0],".").concat(c[1]),"".concat(c[1],".").concat(c[0])];if(E===3)return[c[0],c[1],c[2],"".concat(c[0],".").concat(c[1]),"".concat(c[0],".").concat(c[2]),"".concat(c[1],".").concat(c[0]),"".concat(c[1],".").concat(c[2]),"".concat(c[2],".").concat(c[0]),"".concat(c[2],".").concat(c[1]),"".concat(c[0],".").concat(c[1],".").concat(c[2]),"".concat(c[0],".").concat(c[2],".").concat(c[1]),"".concat(c[1],".").concat(c[0],".").concat(c[2]),"".concat(c[1],".").concat(c[2],".").concat(c[0]),"".concat(c[2],".").concat(c[0],".").concat(c[1]),"".concat(c[2],".").concat(c[1],".").concat(c[0])];if(E>=4)return[c[0],c[1],c[2],c[3],"".concat(c[0],".").concat(c[1]),"".concat(c[0],".").concat(c[2]),"".concat(c[0],".").concat(c[3]),"".concat(c[1],".").concat(c[0]),"".concat(c[1],".").concat(c[2]),"".concat(c[1],".").concat(c[3]),"".concat(c[2],".").concat(c[0]),"".concat(c[2],".").concat(c[1]),"".concat(c[2],".").concat(c[3]),"".concat(c[3],".").concat(c[0]),"".concat(c[3],".").concat(c[1]),"".concat(c[3],".").concat(c[2]),"".concat(c[0],".").concat(c[1],".").concat(c[2]),"".concat(c[0],".").concat(c[1],".").concat(c[3]),"".concat(c[0],".").concat(c[2],".").concat(c[1]),"".concat(c[0],".").concat(c[2],".").concat(c[3]),"".concat(c[0],".").concat(c[3],".").concat(c[1]),"".concat(c[0],".").concat(c[3],".").concat(c[2]),"".concat(c[1],".").concat(c[0],".").concat(c[2]),"".concat(c[1],".").concat(c[0],".").concat(c[3]),"".concat(c[1],".").concat(c[2],".").concat(c[0]),"".concat(c[1],".").concat(c[2],".").concat(c[3]),"".concat(c[1],".").concat(c[3],".").concat(c[0]),"".concat(c[1],".").concat(c[3],".").concat(c[2]),"".concat(c[2],".").concat(c[0],".").concat(c[1]),"".concat(c[2],".").concat(c[0],".").concat(c[3]),"".concat(c[2],".").concat(c[1],".").concat(c[0]),"".concat(c[2],".").concat(c[1],".").concat(c[3]),"".concat(c[2],".").concat(c[3],".").concat(c[0]),"".concat(c[2],".").concat(c[3],".").concat(c[1]),"".concat(c[3],".").concat(c[0],".").concat(c[1]),"".concat(c[3],".").concat(c[0],".").concat(c[2]),"".concat(c[3],".").concat(c[1],".").concat(c[0]),"".concat(c[3],".").concat(c[1],".").concat(c[2]),"".concat(c[3],".").concat(c[2],".").concat(c[0]),"".concat(c[3],".").concat(c[2],".").concat(c[1]),"".concat(c[0],".").concat(c[1],".").concat(c[2],".").concat(c[3]),"".concat(c[0],".").concat(c[1],".").concat(c[3],".").concat(c[2]),"".concat(c[0],".").concat(c[2],".").concat(c[1],".").concat(c[3]),"".concat(c[0],".").concat(c[2],".").concat(c[3],".").concat(c[1]),"".concat(c[0],".").concat(c[3],".").concat(c[1],".").concat(c[2]),"".concat(c[0],".").concat(c[3],".").concat(c[2],".").concat(c[1]),"".concat(c[1],".").concat(c[0],".").concat(c[2],".").concat(c[3]),"".concat(c[1],".").concat(c[0],".").concat(c[3],".").concat(c[2]),"".concat(c[1],".").concat(c[2],".").concat(c[0],".").concat(c[3]),"".concat(c[1],".").concat(c[2],".").concat(c[3],".").concat(c[0]),"".concat(c[1],".").concat(c[3],".").concat(c[0],".").concat(c[2]),"".concat(c[1],".").concat(c[3],".").concat(c[2],".").concat(c[0]),"".concat(c[2],".").concat(c[0],".").concat(c[1],".").concat(c[3]),"".concat(c[2],".").concat(c[0],".").concat(c[3],".").concat(c[1]),"".concat(c[2],".").concat(c[1],".").concat(c[0],".").concat(c[3]),"".concat(c[2],".").concat(c[1],".").concat(c[3],".").concat(c[0]),"".concat(c[2],".").concat(c[3],".").concat(c[0],".").concat(c[1]),"".concat(c[2],".").concat(c[3],".").concat(c[1],".").concat(c[0]),"".concat(c[3],".").concat(c[0],".").concat(c[1],".").concat(c[2]),"".concat(c[3],".").concat(c[0],".").concat(c[2],".").concat(c[1]),"".concat(c[3],".").concat(c[1],".").concat(c[0],".").concat(c[2]),"".concat(c[3],".").concat(c[1],".").concat(c[2],".").concat(c[0]),"".concat(c[3],".").concat(c[2],".").concat(c[0],".").concat(c[1]),"".concat(c[3],".").concat(c[2],".").concat(c[1],".").concat(c[0])]}var Yt={};function Ce(c){if(c.length===0||c.length===1)return c;var E=c.join(".");return Yt[E]||(Yt[E]=yt(c)),Yt[E]}function Me(c){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},H=arguments.length>2?arguments[2]:void 0,z=c.filter(function(at){return at!=="token"}),tt=Ce(z);return tt.reduce(function(at,wt){return bt(bt({},at),H[wt])},E)}function Be(c){return c.join(" ")}function me(c,E){var H=0;return function(z){return H+=1,z.map(function(tt,at){return G({node:tt,stylesheet:c,useInlineStyles:E,key:"code-segment-".concat(H,"-").concat(at)})})}}function G(c){var E=c.node,H=c.stylesheet,z=c.style,tt=z===void 0?{}:z,at=c.useInlineStyles,wt=c.key,Ot=E.properties,Se=E.type,xe=E.tagName,te=E.value;if(Se==="text")return te;if(xe){var Wt=me(H,at),le;if(!at)le=bt(bt({},Ot),{},{className:Be(Ot.className)});else{var P=Object.keys(H).reduce(function(K,ht){return ht.split(".").forEach(function(Ct){K.includes(Ct)||K.push(Ct)}),K},[]),W=Ot.className&&Ot.className.includes("token")?["token"]:[],X=Ot.className&&W.concat(Ot.className.filter(function(K){return!P.includes(K)}));le=bt(bt({},Ot),{},{className:Be(X)||void 0,style:Me(Ot.className,Object.assign({},Ot.style,tt),H)})}var nt=Wt(E.children);return s.createElement(xe,(0,ut.Z)({key:wt},le),nt)}}const _=function(c,E){var H=c.listLanguages();return H.indexOf(E)!==-1};var St=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function At(c,E){var H=Object.keys(c);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(c);E&&(z=z.filter(function(tt){return Object.getOwnPropertyDescriptor(c,tt).enumerable})),H.push.apply(H,z)}return H}function Z(c){for(var E=1;E<arguments.length;E++){var H=arguments[E]!=null?arguments[E]:{};E%2?At(Object(H),!0).forEach(function(z){(0,Et.Z)(c,z,H[z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(H)):At(Object(H)).forEach(function(z){Object.defineProperty(c,z,Object.getOwnPropertyDescriptor(H,z))})}return c}var gt=/\n/g;function ct(c){return c.match(gt)}function Ft(c){var E=c.lines,H=c.startingLineNumber,z=c.style;return E.map(function(tt,at){var wt=at+H;return s.createElement("span",{key:"line-".concat(at),className:"react-syntax-highlighter-line-number",style:typeof z=="function"?z(wt):z},"".concat(wt,`
`))})}function he(c){var E=c.codeString,H=c.codeStyle,z=c.containerStyle,tt=z===void 0?{float:"left",paddingRight:"10px"}:z,at=c.numberStyle,wt=at===void 0?{}:at,Ot=c.startingLineNumber;return s.createElement("code",{style:Object.assign({},H,tt)},Ft({lines:E.replace(/\n$/,"").split(`
`),style:wt,startingLineNumber:Ot}))}function ot(c){return"".concat(c.toString().length,".25em")}function Jt(c,E){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(c),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:E},children:[{type:"text",value:c}]}}function ae(c,E,H){var z={display:"inline-block",minWidth:ot(H),paddingRight:"1em",textAlign:"right",userSelect:"none"},tt=typeof c=="function"?c(E):c,at=Z(Z({},z),tt);return at}function ie(c){var E=c.children,H=c.lineNumber,z=c.lineNumberStyle,tt=c.largestLineNumber,at=c.showInlineLineNumbers,wt=c.lineProps,Ot=wt===void 0?{}:wt,Se=c.className,xe=Se===void 0?[]:Se,te=c.showLineNumbers,Wt=c.wrapLongLines,le=typeof Ot=="function"?Ot(H):Ot;if(le.className=xe,H&&at){var P=ae(z,H,tt);E.unshift(Jt(H,P))}return Wt&te&&(le.style=Z(Z({},le.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:le,children:E}}function Ie(c){for(var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],H=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],z=0;z<c.length;z++){var tt=c[z];if(tt.type==="text")H.push(ie({children:[tt],className:(0,Gt.Z)(new Set(E))}));else if(tt.children){var at=E.concat(tt.properties.className);Ie(tt.children,at).forEach(function(wt){return H.push(wt)})}}return H}function Ke(c,E,H,z,tt,at,wt,Ot,Se){var xe,te=Ie(c.value),Wt=[],le=-1,P=0;function W(Y,J){var ft=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return ie({children:Y,lineNumber:J,lineNumberStyle:Ot,largestLineNumber:wt,showInlineLineNumbers:tt,lineProps:H,className:ft,showLineNumbers:z,wrapLongLines:Se})}function X(Y,J){if(z&&J&&tt){var ft=ae(Ot,J,wt);Y.unshift(Jt(J,ft))}return Y}function nt(Y,J){var ft=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return E||ft.length>0?W(Y,J,ft):X(Y,J)}for(var K=function(){var J=te[P],ft=J.children[0].value,ee=ct(ft);if(ee){var Bt=ft.split(`
`);Bt.forEach(function(Vt,pt){var Pt=z&&Wt.length+at,Rt={type:"text",value:"".concat(Vt,`
`)};if(pt===0){var ye=te.slice(le+1,P).concat(ie({children:[Rt],className:J.properties.className})),re=nt(ye,Pt);Wt.push(re)}else if(pt===Bt.length-1){var ne=te[P+1]&&te[P+1].children&&te[P+1].children[0],It={type:"text",value:"".concat(Vt)};if(ne){var Kt=ie({children:[It],className:J.properties.className});te.splice(P+1,0,Kt)}else{var zt=[It],U=nt(zt,Pt,J.properties.className);Wt.push(U)}}else{var Mt=[Rt],Qt=nt(Mt,Pt,J.properties.className);Wt.push(Qt)}}),le=P}P++};P<te.length;)K();if(le!==te.length-1){var ht=te.slice(le+1,te.length);if(ht&&ht.length){var Ct=z&&Wt.length+at,Lt=nt(ht,Ct);Wt.push(Lt)}}return E?Wt:(xe=[]).concat.apply(xe,Wt)}function Ge(c){var E=c.rows,H=c.stylesheet,z=c.useInlineStyles;return E.map(function(tt,at){return G({node:tt,stylesheet:H,useInlineStyles:z,key:"code-segement".concat(at)})})}function ze(c){return c&&typeof c.highlightAuto<"u"}function Ze(c){var E=c.astGenerator,H=c.language,z=c.code,tt=c.defaultCodeValue;if(ze(E)){var at=_(E,H);return H==="text"?{value:tt,language:"text"}:at?E.highlight(H,z):E.highlightAuto(z)}try{return H&&H!=="text"?{value:E.highlight(z,H)}:{value:tt}}catch{return{value:tt}}}function We(c,E){return function(z){var tt=z.language,at=z.children,wt=z.style,Ot=wt===void 0?E:wt,Se=z.customStyle,xe=Se===void 0?{}:Se,te=z.codeTagProps,Wt=te===void 0?{className:tt?"language-".concat(tt):void 0,style:Z(Z({},Ot['code[class*="language-"]']),Ot['code[class*="language-'.concat(tt,'"]')])}:te,le=z.useInlineStyles,P=le===void 0?!0:le,W=z.showLineNumbers,X=W===void 0?!1:W,nt=z.showInlineLineNumbers,K=nt===void 0?!0:nt,ht=z.startingLineNumber,Ct=ht===void 0?1:ht,Lt=z.lineNumberContainerStyle,Y=z.lineNumberStyle,J=Y===void 0?{}:Y,ft=z.wrapLines,ee=z.wrapLongLines,Bt=ee===void 0?!1:ee,Vt=z.lineProps,pt=Vt===void 0?{}:Vt,Pt=z.renderer,Rt=z.PreTag,ye=Rt===void 0?"pre":Rt,re=z.CodeTag,ne=re===void 0?"code":re,It=z.code,Kt=It===void 0?(Array.isArray(at)?at[0]:at)||"":It,zt=z.astGenerator,U=(0,Zt.Z)(z,St);zt=zt||c;var Mt=X?s.createElement(he,{containerStyle:Lt,codeStyle:Wt.style||{},numberStyle:J,startingLineNumber:Ct,codeString:Kt}):null,Qt=Ot.hljs||Ot['pre[class*="language-"]']||{backgroundColor:"#fff"},Tt=ze(zt)?"hljs":"prismjs",ue=P?Object.assign({},U,{style:Object.assign({},Qt,xe)}):Object.assign({},U,{className:U.className?"".concat(Tt," ").concat(U.className):Tt,style:Object.assign({},xe)});if(Bt?Wt.style=Z(Z({},Wt.style),{},{whiteSpace:"pre-wrap"}):Wt.style=Z(Z({},Wt.style),{},{whiteSpace:"pre"}),!zt)return s.createElement(ye,ue,Mt,s.createElement(ne,Wt,Kt));(ft===void 0&&Pt||Bt)&&(ft=!0),Pt=Pt||Ge;var Te=[{type:"text",value:Kt}],ve=Ze({astGenerator:zt,language:tt,code:Kt,defaultCodeValue:Te});ve.language===null&&(ve.value=Te);var $e=ve.value.length+Ct,Oe=Ke(ve,ft,pt,X,K,Ct,$e,J,Bt);return s.createElement(ye,ue,s.createElement(ne,Wt,!K&&Mt,Pt({rows:Oe,stylesheet:Ot,useInlineStyles:P})))}}const dt={hljs:{display:"block",overflowX:"auto",padding:"0.5em",background:"#F0F0F0",color:"#444"},"hljs-subst":{color:"#444"},"hljs-comment":{color:"#888888"},"hljs-keyword":{fontWeight:"bold"},"hljs-attribute":{fontWeight:"bold"},"hljs-selector-tag":{fontWeight:"bold"},"hljs-meta-keyword":{fontWeight:"bold"},"hljs-doctag":{fontWeight:"bold"},"hljs-name":{fontWeight:"bold"},"hljs-type":{color:"#880000"},"hljs-string":{color:"#880000"},"hljs-number":{color:"#880000"},"hljs-selector-id":{color:"#880000"},"hljs-selector-class":{color:"#880000"},"hljs-quote":{color:"#880000"},"hljs-template-tag":{color:"#880000"},"hljs-deletion":{color:"#880000"},"hljs-title":{color:"#880000",fontWeight:"bold"},"hljs-section":{color:"#880000",fontWeight:"bold"},"hljs-regexp":{color:"#BC6060"},"hljs-symbol":{color:"#BC6060"},"hljs-variable":{color:"#BC6060"},"hljs-template-variable":{color:"#BC6060"},"hljs-link":{color:"#BC6060"},"hljs-selector-attr":{color:"#BC6060"},"hljs-selector-pseudo":{color:"#BC6060"},"hljs-literal":{color:"#78A960"},"hljs-built_in":{color:"#397300"},"hljs-bullet":{color:"#397300"},"hljs-code":{color:"#397300"},"hljs-addition":{color:"#397300"},"hljs-meta":{color:"#1f7199"},"hljs-meta-string":{color:"#4d99bf"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}};var ce=e(8112),pe=e.n(ce);const Ve=["1c","abnf","accesslog","actionscript","ada","angelscript","apache","applescript","arcade","arduino","armasm","asciidoc","aspectj","autohotkey","autoit","avrasm","awk","axapta","bash","basic","bnf","brainfuck","c-like","c","cal","capnproto","ceylon","clean","clojure-repl","clojure","cmake","coffeescript","coq","cos","cpp","crmsh","crystal","csharp","csp","css","d","dart","delphi","diff","django","dns","dockerfile","dos","dsconfig","dts","dust","ebnf","elixir","elm","erb","erlang-repl","erlang","excel","fix","flix","fortran","fsharp","gams","gauss","gcode","gherkin","glsl","gml","go","golo","gradle","groovy","haml","handlebars","haskell","haxe","hsp","htmlbars","http","hy","inform7","ini","irpf90","isbl","java","javascript","jboss-cli","json","julia-repl","julia","kotlin","lasso","latex","ldif","leaf","less","lisp","livecodeserver","livescript","llvm","lsl","lua","makefile","markdown","mathematica","matlab","maxima","mel","mercury","mipsasm","mizar","mojolicious","monkey","moonscript","n1ql","nginx","nim","nix","node-repl","nsis","objectivec","ocaml","openscad","oxygene","parser3","perl","pf","pgsql","php-template","php","plaintext","pony","powershell","processing","profile","prolog","properties","protobuf","puppet","purebasic","python-repl","python","q","qml","r","reasonml","rib","roboconf","routeros","rsl","ruby","ruleslanguage","rust","sas","scala","scheme","scilab","scss","shell","smali","smalltalk","sml","sqf","sql","sql_more","stan","stata","step21","stylus","subunit","swift","taggerscript","tap","tcl","thrift","tp","twig","typescript","vala","vbnet","vbscript-html","vbscript","verilog","vhdl","vim","x86asm","xl","xml","xquery","yaml","zephir"];var vt=We(pe(),dt);vt.supportedLanguages=Ve;const Fe=vt,Pe={hljs:{display:"block",overflowX:"auto",padding:"0.5em",background:"#2b2b2b",color:"#bababa"},"hljs-strong":{color:"#a8a8a2"},"hljs-emphasis":{color:"#a8a8a2",fontStyle:"italic"},"hljs-bullet":{color:"#6896ba"},"hljs-quote":{color:"#6896ba"},"hljs-link":{color:"#6896ba"},"hljs-number":{color:"#6896ba"},"hljs-regexp":{color:"#6896ba"},"hljs-literal":{color:"#6896ba"},"hljs-code":{color:"#a6e22e"},"hljs-selector-class":{color:"#a6e22e"},"hljs-keyword":{color:"#cb7832"},"hljs-selector-tag":{color:"#cb7832"},"hljs-section":{color:"#cb7832"},"hljs-attribute":{color:"#cb7832"},"hljs-name":{color:"#cb7832"},"hljs-variable":{color:"#cb7832"},"hljs-params":{color:"#b9b9b9"},"hljs-string":{color:"#6a8759"},"hljs-subst":{color:"#e0c46c"},"hljs-type":{color:"#e0c46c"},"hljs-built_in":{color:"#e0c46c"},"hljs-builtin-name":{color:"#e0c46c"},"hljs-symbol":{color:"#e0c46c"},"hljs-selector-id":{color:"#e0c46c"},"hljs-selector-attr":{color:"#e0c46c"},"hljs-selector-pseudo":{color:"#e0c46c"},"hljs-template-tag":{color:"#e0c46c"},"hljs-template-variable":{color:"#e0c46c"},"hljs-addition":{color:"#e0c46c"},"hljs-comment":{color:"#7f7f7f"},"hljs-deletion":{color:"#7f7f7f"},"hljs-meta":{color:"#7f7f7f"}},Je=({isOpen:c,onClose:E})=>(0,t.jsx)(t.Fragment,{children:c&&(0,t.jsxs)(rt.P,{onClose:()=>E(!c),labelledBy:"title",children:[(0,t.jsx)(et.x,{children:(0,t.jsx)(N.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title-api-integration",children:"API Integration"})}),(0,t.jsxs)(it.f,{children:[(0,t.jsx)(N.Z,{variant:"omega",children:"1. Goto Settings -> Users & Permissions plugin -> Roles and enable strapi chatGPT endpoint for a role."}),(0,t.jsx)(p.x,{paddingTop:6,paddingBottom:6,children:(0,t.jsx)(y.i,{})}),(0,t.jsx)(N.Z,{variant:"omega",children:"Sample request"}),(0,t.jsx)("br",{}),(0,t.jsx)(Fe,{language:"bash",style:Pe,customStyle:{borderRadius:"12px",lineHeight:"1.5rem"},children:`curl --location --request POST '/api/strapi-chatgpt/prompt' \\
                                --header 'Content-Type: application/json' \\
                                --header 'Authorization: Bearer YOUR_STRAPI_AUTH_TOKEN' \\
                                --data-raw '{"prompt": "Test prompt?"}'`}),(0,t.jsx)(p.x,{paddingTop:6,paddingBottom:6,children:(0,t.jsx)(y.i,{})}),(0,t.jsx)(N.Z,{variant:"omega",children:"Sample request with additional OpenAi params"}),(0,t.jsx)("br",{}),(0,t.jsx)(Fe,{language:"bash",style:Pe,customStyle:{borderRadius:"12px",lineHeight:"1.5rem"},children:`curl --location --request POST '/api/strapi-chatgpt/prompt' \\
                                --header 'Content-Type: application/json' \\
                                --header 'Authorization: Bearer YOUR_STRAPI_AUTH_TOKEN' \\
                                --data-raw '{"prompt": "Test prompt?",
                                                        "model": "text-davinci-003",
                                                        "max_tokens": 100,
                                                        "temperature": 0.7,
                                                        "top_p": 1,
                                                        "frequency_penalty": 0,
                                                        "presence_penalty": 0,
                                                        "stop": ["\\n"] }'`}),(0,t.jsx)(p.x,{paddingTop:6,paddingBottom:6,children:(0,t.jsx)(y.i,{})}),(0,t.jsx)(N.Z,{variant:"omega",children:"Sample response"}),(0,t.jsx)("br",{}),(0,t.jsx)(Fe,{language:"json",style:Pe,customStyle:{borderRadius:"12px",lineHeight:"1.5rem"},children:'{"response": "Sample response"}'})]})]})}),Qe=()=>{const{formatMessage:c}=(0,d.Z)(),[E,H]=(0,s.useState)(""),[z,tt]=(0,s.useState)(""),[at,wt]=(0,s.useState)([]),[Ot,Se]=(0,s.useState)(!1),xe=(0,s.useRef)(null),[te,Wt]=(0,s.useState)(!1),[le,P]=(0,s.useState)(!1),[W,X]=(0,s.useState)(!1),nt=o.default.create({baseURL:"",headers:{Authorization:`Bearer ${i.auth.getToken()}`,"Content-Type":"application/json"}}),K=()=>{wt([]),X(!1)},ht=Lt=>{tt(!1),H(Lt.target.value)},Ct=async Lt=>{if(Lt.preventDefault(),tt(!1),!E){tt("Prompt is required");return}Se(!0);const{data:Y}=await nt.post("/strapi-chatgpt/prompt",{prompt:E});if(Y.error||!Y.response){Se(!1),tt(Y.error);return}wt([...at,{you:E,bot:Y.response}]),Se(!1),H("")};return(0,s.useEffect)(()=>{xe.current&&xe.current.scrollIntoView({behavior:"smooth"})},[at]),(0,t.jsxs)(l.A,{children:[(0,t.jsx)(u.q,{title:"Strapi ChatGPT"}),(0,t.jsxs)(g.o,{"aria-busy":!1,children:[(0,t.jsx)(j.T,{title:"ChatGPT",subtitle:c({id:"chatgpt-headder",defaultMessage:"ChatGPT plugin for Strapi"})}),(0,t.jsx)(x.Z,{startActions:(0,t.jsxs)(L.K,{horizontal:!0,gap:2,children:[(0,t.jsx)(b.z,{variant:"secondary",startIcon:(0,t.jsx)(R.Z,{}),onClick:()=>Wt(!0),children:"Prompt"}),(0,t.jsx)(b.z,{variant:"secondary",startIcon:(0,t.jsx)(O.Z,{}),onClick:()=>P(!0),children:"API Integration"})]}),endActions:(0,t.jsx)(f.u,{description:"Clear chatGPT history",position:"left",children:(0,t.jsx)(h.h,{disabled:Ot||at.length===0,onClick:()=>X(!0),icon:(0,t.jsx)(A.Z,{})})})}),(0,t.jsxs)(m.D,{children:[(0,t.jsx)($t,{isOpen:W,setIsOpen:X,onConfirm:K}),(0,t.jsx)(v.Z,{style:{position:"relative"},children:(0,t.jsx)(S.e,{style:{height:"64vh",overflowY:"scroll"},children:(0,t.jsxs)(T.a,{children:[(0,t.jsx)(Q,{isLoading:Ot}),(0,t.jsx)("div",{children:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%",overflow:"auto",justifyContent:"flex-end"},children:[at.map((Lt,Y)=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(q,{data:Lt},Y+"123"),(0,t.jsx)(p.x,{paddingTop:2,paddingBottom:4,children:(0,t.jsx)(y.i,{})})]})),(0,t.jsx)("div",{ref:xe})]})})]})})}),(0,t.jsx)(p.x,{children:(0,t.jsx)("form",{onSubmit:Ct,children:(0,t.jsxs)(C.r,{gap:2,paddingTop:4,children:[(0,t.jsx)(I.P,{col:10,children:(0,t.jsx)(B.o,{id:"chatInput",placeholder:"Enter your prompt here","aria-label":"Content",name:"content",error:z,onChange:ht,value:E,disabled:Ot,onpaste:Lt=>{Lt.preventDefault(),tt(!1)}})}),(0,t.jsx)(I.P,{col:2,children:(0,t.jsx)(b.z,{fullWidth:!0,size:"L",startIcon:(0,t.jsx)(D.Z,{}),type:"submit",loading:Ot,children:"Send"})})]})})})]}),(0,t.jsx)(M,{isOpen:te,onClose:()=>Wt(!1)}),(0,t.jsx)(Je,{isOpen:le,onClose:()=>P(!1)})]})]})},Xe=()=>(0,t.jsx)(Qe,{}),Ue=()=>(0,t.jsx)("div",{children:(0,t.jsxs)(r.rs,{children:[(0,t.jsx)(r.AW,{path:`/plugins/${a.Z}`,component:Xe,exact:!0}),(0,t.jsx)(r.AW,{component:i.NotFound})]})})},52860:($,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>B});var t=e(53657),s=e(96125),r=e(33541),i=e(29776),a=e(84683),d=e.n(a),u=e(2669),o=e(51089),l=e(46667),g=e(84139),j=e(93134),x=e(99283),L=e(47724),b=e(54274),f=e(15144),h=e(92639),m=e(86058),v=e(51748),S=e(69054);const T=S.default.create({baseURL:""});T.interceptors.request.use(async R=>(R.headers={Authorization:`Bearer ${i.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},R),R=>{Promise.reject(R)}),T.interceptors.response.use(R=>R,R=>{throw R.response?.status===401&&(i.auth.clearAppStorage(),window.location.reload()),R});const p=T,y=()=>{const[R,O]=(0,s.useState)({creds:{clientID:"",clientSecret:"",redirectURL:"",defaultScopes:""}}),[A,D]=(0,s.useState)(!1),[N,V]=(0,s.useState)(!0);function q(F){O({creds:{clientID:F,clientSecret:R.creds.clientSecret,redirectURL:R.creds.redirectURL}})}function rt(F){O({creds:{clientID:R.creds.clientID,clientSecret:F,redirectURL:R.creds.redirectURL}})}function et(F){O({creds:{clientID:R.creds.clientID,clientSecret:R.creds.clientSecret,redirectURL:F}})}function it(F){O({creds:{clientID:R.creds.clientID,clientSecret:R.creds.clientSecret,redirectURL:R.creds.redirectURL,defaultScopes:F}})}async function Nt(){try{const{data:F}=await p.get(`/${d()}/credentials`);O({creds:{clientID:F.google_client_id?F.google_client_id:"",clientSecret:F.google_client_secret?F.google_client_secret:"",redirectURL:F.google_redirect_url?F.google_redirect_url:"",defaultScopes:F.google_scopes?F.google_scopes:""}}),F&&F.google_client_id&&F.google_client_secret&&F.google_redirect_url&&F.google_scopes?V(!1):V(!0)}catch(F){console.log(F),O({creds:{clientID:"",clientSecret:"",redirectURL:"",defaultScopes:""}}),V(!0)}}async function M(F){F.preventDefault(),F.stopPropagation(),D(!0);try{await p.post(`/${d()}/credentials/add`,{google_client_id:R.creds.clientID,google_client_secret:R.creds.clientSecret,google_redirect_url:R.creds.redirectURL,google_scopes:R.creds.defaultScopes}),await Nt(),D(!1)}catch(Q){D(!1),console.log(Q)}}function w(F){F.preventDefault(),F.stopPropagation(),V(!0)}return(0,s.useEffect)(()=>{Nt()},[]),(0,t.jsxs)("div",{children:[(0,t.jsx)(u.x,{padding:8,background:"primary100",children:(0,t.jsx)(L.BaseHeaderLayout,{navigationAction:(0,t.jsx)(o.r,{isExternal:!0,href:"https://arjusmoon.com",children:"Arju S Moon."}),primaryAction:(0,t.jsx)(l.Q,{startIcon:(0,t.jsx)(h.Z,{}),size:"L",variant:"default",href:"https://console.cloud.google.com/projectcreate?previousPage=%2Fcloud-resource-manager%3Fproject%3D%26folder%3D%26organizationId%3D",children:"Create Google Project"}),title:"Google Authenticator",subtitle:"By Arju S Moon.",as:"h2"})}),(0,t.jsxs)(u.x,{padding:8,background:"neutral100",children:[(0,t.jsx)(u.x,{padding:4,children:(0,t.jsx)(b.Typography,{variant:"beta",children:"Add/Update your Google Project Details."})}),(0,t.jsxs)(L.GridLayout,{children:[(0,t.jsx)(u.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,t.jsx)(f.TextInput,{required:!0,disabled:!N,placeholder:"This is a content placeholder",label:"Google Client ID",name:"content",hint:"Ends with apps.googleusercontent.com",onChange:F=>q(F.target.value),value:R.creds.clientID})}),(0,t.jsx)(u.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,t.jsx)(f.TextInput,{required:!0,type:"password",disabled:!N,placeholder:"This is a content placeholder",label:"Google Client Secret",name:"content",hint:"Available in your google project",onChange:F=>rt(F.target.value),value:R.creds.clientSecret})}),(0,t.jsx)(u.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,t.jsx)(f.TextInput,{required:!0,disabled:!N,placeholder:"This is a content placeholder",label:"Redirect URL",name:"content",hint:"Redirect URL mentioned in the Google Project",onChange:F=>et(F.target.value),value:R.creds.redirectURL})})]}),(0,t.jsx)(L.GridLayout,{children:(0,t.jsx)(u.x,{padding:4,marginTop:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,t.jsx)(g.g,{required:!0,disabled:!N,placeholder:"",label:"Default Scopes",name:"content",hint:'{"scopes":["https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/userinfo.profile"]}',onChange:F=>it(F.target.value),value:R.creds.defaultScopes})})}),(0,t.jsxs)(j.k,{marginTop:4,justifyContent:"space-between",children:[(0,t.jsx)(x.z,{disabled:N,onClick:w,size:"L",endIcon:(0,t.jsx)(m.Z,{}),variant:"secondary",children:"Edit"}),(0,t.jsx)(x.z,{loading:A,onClick:M,size:"L",endIcon:(0,t.jsx)(v.Z,{}),variant:"default",children:"Save Credentials"})]})]})]})},C=(0,s.memo)(y),B=()=>(0,t.jsx)("div",{children:(0,t.jsxs)(r.rs,{children:[(0,t.jsx)(r.AW,{path:`/plugins/${d()}`,component:C,exact:!0}),(0,t.jsx)(r.AW,{component:i.NotFound})]})})},5061:($,n,e)=>{"use strict";e.d(n,{Z:()=>r});var t=e(29776);const r={getConfig:async()=>await(0,t.request)("/cookie-manager/config",{method:"GET"}),updateConfig:async i=>await(0,t.request)("/cookie-manager/config/update",{method:"PUT",body:{data:i}}),getLocales:async()=>await(0,t.request)("/cookie-manager/locales",{method:"GET"}),getCookies:async(i=null)=>await(0,t.request)(`/cookie-manager/cookie/find${i?`?locale=${i}`:""}`,{method:"GET"}),createCookie:async i=>await(0,t.request)("/cookie-manager/cookie/create",{method:"POST",body:{data:i}}),updateCookie:async(i,a)=>await(0,t.request)(`/cookie-manager/cookie/update/${i}`,{method:"PUT",body:{data:a}}),deleteCookie:async i=>await(0,t.request)(`/cookie-manager/cookie/delete/${i}`,{method:"DELETE"}),getCategories:async(i=null)=>await(0,t.request)(`/cookie-manager/cookie-category/find${i?`?locale=${i}`:""}`,{method:"GET"}),createCategory:async i=>await(0,t.request)("/cookie-manager/cookie-category/create",{method:"POST",body:{data:i}}),updateCategory:async(i,a)=>await(0,t.request)(`/cookie-manager/cookie-category/update/${i}`,{method:"PUT",body:{data:a}}),deleteCategory:async i=>await(0,t.request)(`/cookie-manager/cookie-category/delete/${i}`,{method:"DELETE"}),getPopups:async(i=null)=>await(0,t.request)(`/cookie-manager/cookie-popup/find${i?`?locale=${i}`:""}`,{method:"GET"}),createPopup:async i=>await(0,t.request)("/cookie-manager/cookie-popup/create",{method:"POST",body:{data:i}}),updatePopup:async(i,a)=>await(0,t.request)(`/cookie-manager/cookie-popup/update/${i}`,{method:"PUT",body:{data:a}}),deletePopup:async i=>await(0,t.request)(`/cookie-manager/cookie-popup/delete/${i}`,{method:"DELETE"})}},18702:($,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>le});var t=e(18237),s=e(96125),r=e(33541),i=e(29776),a=e(5631),d=e(82154),u=e(47080),o=e(28013),l=e(33246),g=e(39818),j=e(64165),x=e(14706),L=e(43508),b=e(34),f=e(88421),h=e(96162),m=e.n(h),v=e(16022),S=e(98540),T=e(7323),p=e(44532),y=e(81334),C=e(5061);const B=({locale:P,isMultiLocale:W})=>{const{formatMessage:X}=(0,d.Z)(),[nt,K]=(0,s.useState)([]),[ht,Ct]=(0,s.useState)([]),[Lt,Y]=(0,s.useState)(!1),[J,ft]=(0,s.useState)(!1),[ee,Bt]=(0,s.useState)(!1),[Vt,pt]=(0,s.useState)(!1),[Pt,Rt]=(0,s.useState)(!1),[ye,re]=(0,s.useState)(!1),[ne,It]=(0,s.useState)(!1),[Kt,zt]=(0,s.useState)(!1),[U,Mt]=(0,s.useState)(!0),[Qt,Tt]=(0,s.useState)(!0),[ue,Te]=(0,s.useState)(null),[ve,$e]=(0,s.useState)(null),[Oe,De]=(0,s.useState)([]),[Ne,kt]=(0,s.useState)([]),ge=async()=>{Mt(!0);const k=await C.Z.getCookies(P);K(k),Mt(!1)},je=async()=>{Tt(!0);const k=await C.Z.getCategories(P);Ct(k),Tt(!1)},Le=async k=>{await C.Z.createCookie(k),await ge()},Ae=async k=>{await C.Z.createCategory(k),await je()},Ye=async k=>{await C.Z.deleteCookie(k.id),await ge()},lt=async k=>{for(const fe of k)await C.Z.deleteCookie(fe.id);await ge()},mt=async k=>{await C.Z.deleteCategory(k.id),await je()},st=async k=>{await C.Z.updateCookie(k.id,k),await ge()},oe=async k=>{await C.Z.updateCategory(k.id,k),await je()},Xt=(k,fe=!1)=>{Ne.filter(Ee=>Ee.id===k).length>0||kt([{id:k,isExpanded:fe},...Ne])};return(0,s.useEffect)(()=>{je(),ge()},[]),(0,s.useEffect)(()=>{je(),ge()},[P]),!(!U&&!Qt)?(0,t.jsx)(i.LoadingIndicatorPage,{}):(0,t.jsxs)(t.Fragment,{children:[ht.length===0?(0,t.jsx)(L.EmptyStateLayout,{icon:(0,t.jsx)(v.Z,{}),content:X({id:(0,a.OB)("empty.category"),defaultMessage:"You don't have any categories yet..."}),action:(0,t.jsx)(b.Button,{startIcon:(0,t.jsx)(m(),{}),variant:"secondary",onClick:()=>{Te(null),re(!0)},children:X({id:(0,a.OB)("empty.category.cta"),defaultMessage:"Add your first category"})}),shadow:"none"}):(0,t.jsx)(x.AccordionGroup,{footer:(0,t.jsx)(f.TFooter,{onClick:()=>{Te(null),re(!0)},icon:(0,t.jsx)(m(),{}),children:X({id:(0,a.OB)("modal.category.form.cta.create"),defaultMessage:"Create new category"})}),children:ht.map((k,fe)=>{const Re=nt.filter(be=>be.category?.id===k.id);return fe===0?Xt(k.id,!0):Xt(k.id),(0,t.jsx)(y.Z,{cookies:Re,setCategory:Te,setCookies:De,category:k,expandedStates:Ne,setExpandedStates:kt,setShowCreateCookieModal:Y,setShowUpdateCategoryModal:It,setShowDeleteCategoryModal:zt,children:Re.length>0?(0,t.jsx)(S.Z,{cookies:Re,setCookie:$e,setCookies:De,category:k,setCategory:Te,updateCookie:st,setShowCreateCookieModal:Y,setShowUpdateCookieModal:ft,setShowDeleteCookieModel:Bt,setShowDuplicateCookieModal:pt,setShowDeleteAllCookieModal:Rt}):(0,t.jsx)(L.EmptyStateLayout,{icon:(0,t.jsx)(v.Z,{}),content:X({id:(0,a.OB)("empty.cookie"),defaultMessage:"You don't have any cookies yet..."}),action:(0,t.jsx)(b.Button,{startIcon:(0,t.jsx)(m(),{}),variant:"secondary",onClick:()=>{Te(k),Y(!0)},children:X({id:(0,a.OB)("empty.cookie.cta"),defaultMessage:"Add your first cookie"})}),shadow:"none"})},fe)})}),ye&&(0,t.jsx)(p.vs,{setShowModal:re,createCategory:Ae,locale:P,isMultiLocale:W}),ne&&(0,t.jsx)(p.R7,{setShowModal:It,updateCategory:oe,category:ue,isMultiLocale:W}),Kt&&(0,t.jsx)(p.u3,{setShowModal:zt,deleteCategory:mt,deleteAllCookie:lt,category:ue,cookies:Oe,showModal:Kt}),Lt&&(0,t.jsx)(T.rB,{setShowModal:Y,createCookie:Le,categories:ht,locale:P,isMultiLocale:W,preservedCategory:ue}),J&&(0,t.jsx)(T.PT,{setShowModal:ft,updateCookie:st,categories:ht,cookie:ve,isMultiLocale:W}),ee&&(0,t.jsx)(T.WL,{setShowModal:Bt,deleteCookie:Ye,cookie:ve,showModal:ee,isMultiLocale:W}),Vt&&(0,t.jsx)(T.vk,{setShowModal:pt,createCookie:Le,categories:ht,cookie:ve,locale:P}),Pt&&(0,t.jsx)(T.Wx,{setShowModal:Rt,deleteAllCookie:lt,cookies:Oe,showModal:Pt})]})};var R=e(22294),O=e(17237),A=e(8714),D=e(42168),N=e(31212),V=e(14190),q=e.n(V),rt=e(93285),et=e.n(rt),it=e(50033),Nt=e.n(it);const w=({popups:P,setPopup:W,setPopups:X,setShowCreatePopupModal:nt,setShowUpdatePopupModal:K,setShowDeletePopupModel:ht,setShowDuplicatePopupModal:Ct,setShowDeleteAllPopupModal:Lt})=>{const{formatMessage:Y}=(0,d.Z)(),[J,ft]=(0,s.useState)([]),[ee,Bt]=(0,s.useState)(!1),Vt=()=>J.filter(U=>U.isSelected!==!0).length===0,pt=()=>J.filter(U=>U.isSelected!==!1).length===0,Pt=()=>J.filter(U=>U.isSelected===!0).length,Rt=!pt()&&!Vt(),ye=U=>{Bt(!!U),ft([...J.filter(Mt=>(Mt.isSelected=U,Mt))])},re=(U,Mt)=>{const Qt=[...J.filter(Tt=>(Tt.id===U&&(Tt.isSelected=Mt),Tt))];X([...Qt.filter(Tt=>{if(Tt.isSelected)return Tt.popup})]),ft(Qt),Bt(!!Vt())},ne=U=>{const Mt=J.filter(Qt=>Qt.id===U)[0];return Mt?Mt.isSelected:!1},It=(U,Mt)=>{const Qt=U.filter(ue=>P.filter(Te=>Te.id===ue.popup.id).length===1);Qt.length!==U.length&&Mt([...Qt])},Kt=U=>{J.filter(Qt=>Qt.id===U.id).length>0?It(J,ft):ft([{id:U.id,isSelected:!1,popup:U},...J])};let zt={columns:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.Th,{children:(0,t.jsx)(D.BaseCheckbox,{onValueChange:U=>ye(U),value:ee,indeterminate:Rt,"aria-label":Y({id:(0,a.OB)("table.popup.actions.select.all"),defaultMessage:"Select all entries"})})}),(0,t.jsx)(f.Th,{children:(0,t.jsx)(O.Typography,{variant:"sigma",children:Y({id:(0,a.OB)("modal.popup.form.field.name.label"),defaultMessage:"Title"})})}),(0,t.jsx)(f.Th,{children:(0,t.jsx)(O.Typography,{variant:"sigma",children:Y({id:(0,a.OB)("modal.popup.form.field.description.label"),defaultMessage:"Description"})})}),(0,t.jsx)(f.Th,{children:(0,t.jsx)(N.VisuallyHidden,{children:Y({id:(0,a.OB)("table.popup.actions"),defaultMessage:"Actions"})})})]}),rows:P.map(U=>(Kt(U),(0,t.jsxs)(f.Tr,{children:[(0,t.jsx)(f.Td,{children:(0,t.jsx)(D.BaseCheckbox,{onValueChange:Mt=>re(U.id,Mt),"aria-label":Y({id:(0,a.OB)("table.popup.actions.select.popup"),defaultMessage:"Select { title }"},{title:U.title}),value:ne(U.id)})}),(0,t.jsx)(f.Td,{children:(0,t.jsx)(O.Typography,{textColor:"neutral800",children:U.title})}),(0,t.jsx)(f.Td,{children:(0,t.jsx)(O.Typography,{textColor:"neutral800",children:U.description})}),(0,t.jsx)(f.Td,{children:(0,t.jsxs)(R.Flex,{gap:4,style:{justifyContent:"end"},children:[(0,t.jsx)(A.IconButton,{onClick:()=>{W(U),K(!0)},label:Y({id:(0,a.OB)("table.popup.actions.update"),defaultMessage:"Update Popup"}),icon:(0,t.jsx)(q(),{})}),(0,t.jsx)(A.IconButton,{onClick:()=>{W(U),Ct(!0)},label:Y({id:(0,a.OB)("table.popup.actions.duplicate"),defaultMessage:"Duplicate Popup"}),icon:(0,t.jsx)(Nt(),{})}),(0,t.jsx)(A.IconButton,{onClick:()=>{W(U),ht(!0)},label:Y({id:(0,a.OB)("table.popup.actions.delete"),defaultMessage:"Delete Popup"}),icon:(0,t.jsx)(et(),{})})]})})]},U.id)))};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.Box,{paddingLeft:7,paddingRight:7,paddingTop:7,paddingBottom:7,children:[(0,t.jsx)(o.Box,{paddingBottom:4,children:(0,t.jsxs)(R.Flex,{justifyContent:"space-between",alignItems:"flex-end",children:[(0,t.jsx)(o.Box,{paddingLeft:2,paddingRight:2,children:(0,t.jsxs)(R.Flex,{direction:"column",gap:1,alignItems:"flex-start",children:[(0,t.jsx)(O.Typography,{variant:"beta",textColor:"neutral700",children:Y({id:(0,a.OB)("table.popup.title"),defaultMessage:"Popups"})}),(0,t.jsx)(O.Typography,{variant:"omega",textColor:"neutral600",children:Y({id:(0,a.OB)("table.popup.entries"),defaultMessage:"{ amount }{ moreThanOne, select, true { entries } other { entry } found"},{amount:P.length,moreThanOne:P.length>1})})]})}),!pt()&&(0,t.jsx)(o.Box,{paddingLeft:4,paddingRight:4,children:(0,t.jsxs)(R.Flex,{gap:2,justifyContent:"flex-end",children:[(0,t.jsx)(b.Button,{variant:"danger-light",size:"L",startIcon:(0,t.jsx)(et(),{}),onClick:()=>{Lt(!0)},children:Y({id:(0,a.OB)("table.popup.actions.seleted.delete"),defaultMessage:"Delete"})}),(0,t.jsx)(O.Typography,{variant:"epsilon",textColor:"neutral600",children:Y({id:(0,a.OB)("table.popup.actions.seleted.label"),defaultMessage:"{ amount } selected { moreThanOne, select, true { entries } other { entry }"},{amount:Pt(),moreThanOne:Pt()>1})})]})})]})}),(0,t.jsxs)(f.Table,{colCount:6,rowCount:10,footer:(0,t.jsx)(f.TFooter,{onClick:()=>{nt(!0)},icon:(0,t.jsx)(m(),{}),children:Y({id:(0,a.OB)("table.popup.actions.create"),defaultMessage:"Create new Popup"})}),children:[(0,t.jsx)(f.Thead,{children:(0,t.jsx)(f.Tr,{children:zt.columns})}),(0,t.jsx)(f.Tbody,{children:zt.rows})]})]})})};var F=e(56258),Q=e(2954),Dt=e(50532),Ht=e.n(Dt),se=e(83416),_t=e(68577),xt=e(48814),jt=e(17855),$t=e(2669),Zt=e(34773),Gt=e(84139),Et=e(77461),ut=e(99283),Ut=e(28703),bt=e(93666),yt=e(67586),Yt=e(59013),Ce=e.n(Yt),Me=e(83558),Be=e.n(Me),me=e(87426);const G=me.default.span`
  > svg {
    width: ${(0,i.pxToRem)(24)};
    height: ${(0,i.pxToRem)(24)};
    > circle {
      fill: ${({theme:P})=>P.colors.primary200};
    }
    > path {
      fill: ${({theme:P})=>P.colors.primary600};
    }
  }
`,_=({onClick:P,error:W})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Box,{as:"button",background:"neutral100",borderColor:W?"danger600":"neutral200",disabled:!1,hasRadius:!0,onClick:P,paddingTop:9,paddingBottom:9,width:"100%",type:"button",children:(0,t.jsxs)(g.Stack,{spacing:2,children:[(0,t.jsx)(R.Flex,{justifyContent:"center",style:{cursor:"inherit"},children:(0,t.jsx)(G,{children:(0,t.jsx)(Be(),{})})}),(0,t.jsx)(R.Flex,{justifyContent:"center",children:(0,t.jsx)(O.Typography,{textColor:"primary600",variant:"pi",fontWeight:"bold",children:"No entry yet. Click on the button below to add one."})})]})}),W&&(0,t.jsx)(O.Typography,{textColor:"danger600",variant:"pi",children:W})]});_.propTypes={onClick:Ce().func.isRequired};const St=_;var At=e(18898),Z=e(69600),gt=e.n(Z);const ct={COMPONENT:"component"};var Ft=e(66420),he=e(94123),ot=e.n(he);const Jt=me.default.span`
  display: flex;
  justify-content: space-between;
  padding-left: ${({theme:P})=>P.spaces[4]};
  padding-right: ${({theme:P})=>P.spaces[4]};
  background-color: ${({theme:P})=>P.colors.neutral0};
  height: ${50/16}rem;
`,ae=(0,me.default)(yt.TextButton)`
  text-align: left;

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:P,expanded:W})=>W?P.colors.primary600:P.colors.neutral500};
    }
  }
`,ie=(0,me.default)(A.IconButton)`
  background-color: transparent;

  svg path {
    fill: ${({theme:P,expanded:W})=>W?P.colors.primary600:P.colors.neutral600};
  }
`,Ie=({displayedValue:P})=>(0,t.jsxs)(Jt,{children:[(0,t.jsxs)(g.Stack,{horizontal:!0,spacing:3,flex:1,children:[(0,t.jsx)(R.Flex,{justifyContent:"center",borderRadius:"50%",height:`${24/16}rem}`,width:`${24/16}rem}`,"aria-hidden":!0,as:"span",background:"neutral200",children:(0,t.jsx)(Ft.Icon,{as:ot(),width:`${8/16}rem}`,color:"neutral600"})}),(0,t.jsx)(ae,{onClick:()=>{},flex:1,children:(0,t.jsx)(O.Typography,{fontWeight:"bold",textColor:"neutral700",children:P})})]}),(0,t.jsxs)(g.Stack,{horizontal:!0,spacing:0,children:[(0,t.jsx)(ie,{noBorder:!0,onClick:()=>{},icon:(0,t.jsx)(et(),{})}),(0,t.jsx)(ie,{icon:(0,t.jsx)(gt(),{}),noBorder:!0})]})]});Ie.propTypes={displayedValue:Ce().string.isRequired};const Ke=null,Ge=me.default.span`
  display: block;
  background-color: ${({theme:P})=>P.colors.primary100};
  outline: 1px dashed ${({theme:P})=>P.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:P})=>P.spaces[6]};
`,ze=()=>(0,t.jsx)(Ge,{padding:6,background:"primary100"}),Ze=null,We={backgroundColor:"cyan"},dt=(0,me.default)(A.IconButton)`
  background-color: transparent;

  svg {
    path {
      fill: ${({theme:P,expanded:W})=>W?P.colors.primary600:P.colors.neutral600};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${({theme:P})=>P.colors.primary600};
      }
    }
  }
`,ce=me.default.span`
  display: flex;
  align-items: center;
  height: ${({theme:P})=>P.spaces[7]};
  padding: 0 ${({theme:P})=>P.spaces[3]};
  cursor: all-scroll;
  svg {
    width: ${12/16}rem;
    height: ${12/16}rem;
  }
`,Ve=({index:P,entry:W,entryKey:X,moveEntry:nt,deleteEntry:K,onClickToggle:ht,isDraggingSibling:Ct,setIsDraggingSibling:Lt,toggleCollapses:Y,isOpen:J,error:ft,children:ee})=>{const Bt=(0,s.useRef)(null),Vt=(0,s.useRef)(null),[,pt]=(0,s.useState)(!1),[,Pt]=(0,Ut.useDrop)({accept:ct.COMPONENT,canDrop(){return!1},hover(It,Kt){if(!Vt.current)return;const zt=It.index,U=P;if(zt===U)return;const Mt=Vt.current?.getBoundingClientRect(),Qt=(Mt.bottom-Mt.top)/2,ue=Kt.getClientOffset().y-Mt.top;zt<U&&ue<Qt||zt>U&&ue>Qt||(nt(zt,U),It.index=U)}}),[{isDragging:Rt},ye,re]=(0,Ut.useDrag)({type:ct.COMPONENT,item:()=>(Y(),{index:P}),end(){Lt(!1)},collect:It=>({isDragging:It.isDragging()})});(0,s.useEffect)(()=>{re((0,At.rX)(),{captureDraggingState:!1})},[re]),(0,s.useEffect)(()=>{Rt&&Lt(!0)},[Rt,Lt]),(0,s.useEffect)(()=>{Ct||pt(It=>!It)},[Ct]);const ne=W.label;return ye(Bt),Pt(Vt),(0,t.jsxs)(o.Box,{ref:Vt,children:[Rt&&(0,t.jsx)(ze,{}),!Rt&&Ct&&(0,t.jsx)(Ie,{displayedValue:ne}),!Rt&&!Ct&&(0,t.jsxs)(x.Accordion,{expanded:J,onToggle:ht,id:X,size:"S",style:{style:We},error:ft,children:[(0,t.jsx)(x.AccordionToggle,{title:ne,togglePosition:"left",action:(0,t.jsxs)(g.Stack,{horizontal:!0,spacing:0,children:[(0,t.jsx)(dt,{expanded:J,noBorder:!0,onClick:()=>K(X),label:"Delete",icon:(0,t.jsx)(et(),{})}),(0,t.jsx)(ce,{ref:Bt,role:"button",tabIndex:-1,onClick:It=>It.stopPropagation(),children:(0,t.jsx)(gt(),{})})]})}),(0,t.jsx)(x.AccordionContent,{children:(0,t.jsx)(o.Box,{padding:3,children:ee})})]})]})};var vt=e(50386),Fe=e(57732),Pe=e.n(Fe),de=e(59891);const ke=P=>{const W={string:{isRequired:P({id:(0,a.OB)("form.validation.string.isRequired"),defaultMessage:"Field cannot be empty"})},mixed:{isOneOf:P({id:(0,a.OB)("form.validation.mixed.isOneOf"),defaultMessage:"Must have selected one of the options"})}};return de.Ry().shape({buttonType:de.nK().oneOf(["Primary","Secondary","Text"],W.mixed.isOneOf),label:de.Z_().required(W.string.isRequired)})},Qe=(0,me.default)(yt.TextButton)`
  height: 100%;
  width: 100%;
  border-radius: 0 0 4px 4px;
  display: flex;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 14px;
  }
`,Xe=({label:P,entries:W,setEntries:X,schema:nt,isValid:K,setIsValid:ht,childrensValidated:Ct,setChildrensValidated:Lt,isSubmit:Y,setIsSubmit:J,max:ft,error:ee})=>{const{formatMessage:Bt}=(0,d.Z)(),[Vt,pt]=(0,s.useState)([]),[Pt,Rt]=(0,s.useState)([]),[ye,re]=(0,s.useState)([]),[ne]=(0,s.useState)(nt.attributes||{}),[It,Kt]=(0,s.useState)(""),[zt,U]=(0,s.useState)(!1),[Mt,Qt]=(0,s.useState)(0),Tt=W?.length,ue=Tt>0,Te=async()=>{!K&&Y&&await De()},ve=async(lt,mt,st)=>{const oe=Object.keys(mt)[0],Xt=await Oe(mt,oe),qt=(0,vt.isNull)(Xt),k=qt?[]:Xt;Lt(fe=>{const Re=(0,vt.find)(fe,be=>be.id===lt),Ee=fe.map(be=>(be.id===lt&&(be.valid=qt),be));return Re?Ee:[...fe,{id:lt,valid:qt}]}),st(fe=>$e(lt,fe,k))},$e=(lt,mt,st)=>{const oe=(0,vt.find)(mt,qt=>qt.id===lt),Xt=mt.map(qt=>(qt.id===lt&&(qt.value=st),qt));return oe?Xt:[...mt,{id:lt,value:st}]},Oe=async(lt,mt)=>await ke(Bt).validateAt(mt,lt).then(()=>null).catch(st=>st.errors),De=async()=>{if(K)ht(!0);else{let lt=[],mt=[];for(const st of W){const oe=Object.keys(ne),Xt=`${st.id}.${oe[0]}.0`,qt=`${st.id}.${oe[1]}.1`;lt=$e(Xt,lt,await Oe({[oe[0]]:st.buttonType||[]},oe[0])),mt=$e(qt,mt,await Oe({[oe[1]]:st.label||""},oe[1]))}pt(lt),Rt(mt),re([...lt,...mt])}},Ne=(0,s.useCallback)((lt,mt)=>{X(st=>Pe()(st,{$splice:[[lt,1],[mt,0,st[lt]]]}))},[]),kt=()=>{Kt("")},ge=()=>{const mt=((0,vt.isEmpty)(W)?0:W.reduce((Xt,qt)=>Xt.id>qt.id?Xt:qt).id)+1,st=Object.keys(ne),oe={id:mt,buttonType:"",label:""};st.forEach((Xt,qt)=>{const k=`${mt}.${Xt}.${qt}`;Lt(fe=>[...fe,{id:k,valid:!1}])}),pt(Xt=>$e(`${mt}.${st[0]}.0`,Xt,[])),Rt(Xt=>$e(`${mt}.${st[1]}.1`,Xt,[])),J(!1),ht(!1),X([...W,oe]),Kt(mt),Qt(Mt+1)},je=lt=>{const mt=Pt.filter(k=>!k.id.startsWith(lt)),st=Vt.filter(k=>!k.id.startsWith(lt)),oe=Ct.filter(k=>!k.id.startsWith(lt)),Xt=W.filter(k=>k.id!==lt),qt=(0,vt.last)(Xt)?.id;J(!1),ht(!1),X([...Xt]),Rt([...mt]),pt([...st]),Lt([...oe]),Kt(qt)},Le=lt=>{const mt=ye.filter(st=>st.id.startsWith(lt)&&!(0,vt.isEmpty)(st.value));return!(0,vt.isEmpty)(mt)},Ae=(lt,mt)=>{const st=(0,vt.find)(lt,oe=>oe.id===mt)?.value;return(0,vt.isArray)(st)?(0,vt.first)(st):st};(0,s.useEffect)(()=>{Te()},[Y]),(0,s.useEffect)(()=>{const lt=Ct.filter(mt=>!!mt.valid);ht(lt.length===Ct.length)},[Ct]);const Ye=(0,t.jsxs)(t.Fragment,{children:[P," (",Tt,")",(0,t.jsx)(O.Typography,{variant:"omega",fontWeight:"bold",style:{color:"#d02b20"},children:"*"})]});return(0,t.jsx)(Ut.DndProvider,{children:ue?(0,t.jsx)(x.AccordionGroup,{footer:Tt<ft&&(0,t.jsx)(R.Flex,{justifyContent:"center",height:"48px",background:"neutral10",children:(0,t.jsx)(Qe,{startIcon:(0,t.jsx)(m(),{}),onClick:ge,children:"Add an entry"})}),error:ee,label:Ye,required:!0,children:W.map((lt,mt)=>{const st=lt.id,oe=It===st,Xt=()=>{Kt(oe?"":st)};return(0,t.jsx)(Ve,{entryKey:st,index:mt,isDraggingSibling:zt,isOpen:oe,entry:lt,moveEntry:Ne,deleteEntry:je,onClickToggle:Xt,setIsDraggingSibling:U,toggleCollapses:kt,error:Le(st),children:Object.values(ne).map((qt,k)=>{const fe=Object.keys(ne)[k],Re=`${st}.${fe}.${k}`;let Ee=(0,t.jsx)(t.Fragment,{});switch(qt.type){case"enumeration":Ee=(0,t.jsx)(l.SingleSelect,{label:Bt({id:(0,a.OB)("modal.popup.form.field.buttons.field.buttonType.label"),defaultMessage:"Type"}),required:!0,error:Ae(Vt,Re),onChange:be=>{X(He=>He.map(we=>(we.id===st&&(we.buttonType=be),we))),ve(Re,{[fe]:be},pt)},value:lt.buttonType,children:qt.enum.map((be,He)=>(0,t.jsx)(l.SingleSelectOption,{value:be,children:be},He))});break;case"string":Ee=(0,t.jsx)(bt.TextInput,{label:Bt({id:(0,a.OB)("modal.popup.form.field.buttons.field.label.label"),defaultMessage:"Label"}),required:!0,name:"label",error:Ae(Pt,Re),onChange:be=>{X(He=>He.map(we=>(we.id===st&&(we.label=be.target.value),we))),ve(Re,{[fe]:be.target.value},Rt)},value:lt.label});break}return(0,t.jsx)(o.Box,{padding:4,children:Ee},k)})},st)})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Box,{paddingBottom:1,children:(0,t.jsx)(O.Typography,{textColor:"neutral800",variant:"pi",fontWeight:"bold",as:"label",children:Ye})}),(0,t.jsx)(St,{onClick:ge,error:ue?"":ee})]})})},Ue=(P,W,X,nt)=>{const K={string:{isRequired:P({id:(0,a.OB)("form.validation.string.isRequired"),defaultMessage:"Field cannot be empty"}),isMax:P({id:(0,a.OB)("form.validation.string.isMax"),defaultMessage:"Field text is to long"})},array:{isMin:P({id:(0,a.OB)("form.validation.array.isMin"),defaultMessage:"Field has less than { amount } { moreThanOne, select, true { entries } other { entry }"},{amount:W,moreThanOne:nt}),isMax:P({id:(0,a.OB)("form.validation.array.isMax"),defaultMessage:"Field has more than { amount } { moreThanOne, select, true { entries } other { entry }"},{amount:X,moreThanOne:nt})}};return de.Ry().shape({title:de.Z_().required(K.string.isRequired).max(125,K.string.isMax),description:de.Z_().max(2e3,K.string.isMax),buttons:de.IX().min(1,K.array.isMin).max(3,K.array.isMax)})},c=JSON.parse('{"collectionName":"components_shared_cookie_button","info":{"displayName":"Cookie Button","icon":"mouse-pointer"},"options":{},"attributes":{"buttonType":{"type":"enumeration","enum":["Primary","Secondary","Text"]},"label":{"type":"string"}}}'),E=({setShowModal:P,crudAction:W,locale:X=null,popup:nt={}})=>{const{formatMessage:K}=(0,d.Z)(),ht=nt.id!==void 0,Ct=nt.id===void 0&&Object.keys(nt).length>0,Lt=1,Y=3,[J]=(0,s.useState)(nt.id||null),[ft,ee]=(0,s.useState)(nt.title||""),[Bt,Vt]=(0,s.useState)(nt.description||""),[pt,Pt]=(0,s.useState)(nt.buttons||[]),[Rt,ye]=(0,s.useState)([]),[re,ne]=(0,s.useState)([]),[It,Kt]=(0,s.useState)([]),[zt,U]=(0,s.useState)(nt.hasCustomizability||!1),[Mt,Qt]=(0,s.useState)([]),[Tt,ue]=(0,s.useState)(!1),[Te,ve]=(0,s.useState)(!1),$e=async kt=>{if(kt.preventDefault(),kt.stopPropagation(),ve(!0),await Ne()&&Tt){const ge=(0,vt.isEmpty)(nt.buttons)?[]:nt.buttons,je={title:ft,description:Bt,buttons:pt.map(Le=>ge.some(Ae=>Ae.id===Le.id)?Le:(0,vt.omit)(Le,"id")),hasCustomizability:zt,locale:X};try{await W(J?{id:J,...je}:{...je}),P(!1)}catch(Le){console.log("error",Le)}}else ve(!1)},Oe=async(kt,ge)=>{const je=Object.keys(kt)[0],Le=await De(kt,je),Ae=(0,vt.isNull)(Le)?[]:Le;ge(Ae)},De=async(kt,ge)=>await Ue(K,Lt,Y,pt.length>0).validateAt(ge,kt).then(()=>null).catch(je=>je.errors),Ne=async()=>{const kt={title:ft,description:Bt,buttons:pt},ge=await Ue(K,Lt,Y,pt.length>0).isValid(kt).then(je=>je);return ge||(ye(await De({title:ft},"title")),ne(await De({description:Bt},"description")),Kt(await De({buttons:pt},"buttons"))),ge};return(0,t.jsxs)(se.P,{onClose:()=>P(!1),labelledBy:"title",as:"form",onSubmit:$e,children:[(0,t.jsx)(_t.x,{children:(0,t.jsx)(xt.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title",children:K(Ct?{id:(0,a.OB)("modal.popup.form.header.title.duplicate"),defaultMessage:"Duplicate Popup"}:ht?{id:(0,a.OB)("modal.popup.form.header.title.update"),defaultMessage:"Update Popup"}:{id:(0,a.OB)("modal.popup.form.header.title.create"),defaultMessage:"Create new Popup"})})}),(0,t.jsxs)(jt.f,{children:[(0,t.jsx)($t.x,{children:(0,t.jsx)(Zt.o,{label:K({id:(0,a.OB)("modal.popup.form.field.title.label"),defaultMessage:"Title"}),required:!0,name:"title",error:(0,vt.first)(Rt),onChange:kt=>{Oe({title:kt.target.value},ye,Rt),ee(kt.target.value)},value:ft})}),(0,t.jsx)($t.x,{paddingTop:4,children:(0,t.jsx)(Gt.g,{label:K({id:(0,a.OB)("modal.popup.form.field.description.label"),defaultMessage:"Description"}),name:"description",error:(0,vt.first)(re),onChange:kt=>{Oe({description:kt.target.value},ne,re),Vt(kt.target.value)},value:Bt})}),(0,t.jsx)($t.x,{paddingTop:4,children:(0,t.jsx)(Xe,{label:K({id:(0,a.OB)("modal.popup.form.field.buttons.label"),defaultMessage:"Buttons"}),entries:pt,setEntries:Pt,schema:c,isValid:Tt,setIsValid:ue,childrensValidated:Mt,setChildrensValidated:Qt,isSubmit:Te,setIsSubmit:ve,max:Y,error:(0,vt.first)(It)})}),(0,t.jsx)($t.x,{paddingTop:4,children:(0,t.jsxs)(R.Flex,{direction:"column",alignItems:"flex-start",children:[(0,t.jsx)(xt.Z,{variant:"pi",fontWeight:"bold",children:K({id:(0,a.OB)("modal.popup.form.field.hasCustomizability.label"),defaultMessage:"Has Customizability"})}),(0,t.jsx)($t.x,{paddingTop:1,children:(0,t.jsx)(xt.Z,{variant:"pi",style:{color:"#666687"},children:K({id:(0,a.OB)("modal.popup.form.field.hasCustomizability.hint"),defaultMessage:"Activate when this popup contains the customizable cookies"})})}),(0,t.jsx)($t.x,{paddingTop:1,children:(0,t.jsx)(Q.Switch,{label:K({id:(0,a.OB)("modal.popup.form.field.hasCustomizability.label"),defaultMessage:"Has Customizability"}),name:"has-customizability",selected:zt,onChange:()=>U(kt=>!kt)})})]})})]}),(0,t.jsx)(Et.m,{startActions:(0,t.jsx)(ut.z,{onClick:()=>P(!1),variant:"tertiary",children:K({id:(0,a.OB)("modal.popup.form.cta.cancel"),defaultMessage:"Cancel"})}),endActions:Ct?(0,t.jsx)(ut.z,{type:"submit",children:K({id:(0,a.OB)("modal.popup.form.cta.duplicate"),defaultMessage:"Duplicate Popup"})}):ht?(0,t.jsx)(ut.z,{type:"submit",children:K({id:(0,a.OB)("modal.popup.form.cta.update"),defaultMessage:"Update Popup"})}):(0,t.jsx)(ut.z,{type:"submit",children:K({id:(0,a.OB)("modal.popup.form.cta.create"),defaultMessage:"Create new Popup"})})})]})},H=({setShowModal:P,createPopup:W,locale:X})=>(0,t.jsx)(E,{setShowModal:P,crudAction:W,locale:X}),z=({setShowModal:P,updatePopup:W,popup:X})=>(0,t.jsx)(E,{setShowModal:P,crudAction:W,popup:X}),tt=({setShowModal:P,createPopup:W,popup:X,locale:nt})=>(0,t.jsx)(E,{setShowModal:P,crudAction:W,popup:(0,vt.omit)(X,"id"),locale:nt}),at=({setShowModal:P,deletePopup:W,popup:X,showModal:nt=!1})=>{const{formatMessage:K}=(0,d.Z)();return(0,t.jsxs)(F.Dialog,{onClose:()=>P(!1),title:K({id:(0,a.OB)("modal.popup.form.header.title.delete"),defaultMessage:"Delete Popup"}),isOpen:nt,children:[(0,t.jsx)(F.DialogBody,{icon:(0,t.jsx)(Ht(),{}),children:(0,t.jsx)(g.Stack,{spacing:2,children:(0,t.jsx)(R.Flex,{justifyContent:"center",children:(0,t.jsx)(xt.Z,{id:"confirm-description",children:K({id:(0,a.OB)("modal.popup.form.info.delete"),defaultMessage:"Are you sure you want to delete this?"})})})})}),(0,t.jsx)(F.DialogFooter,{startAction:(0,t.jsx)(ut.z,{onClick:()=>P(!1),variant:"tertiary",children:K({id:(0,a.OB)("modal.popup.form.cta.cancel"),defaultMessage:"Cancel"})}),endAction:(0,t.jsx)(ut.z,{onClick:()=>{W(X),P(!1)},variant:"danger-light",startIcon:(0,t.jsx)(et(),{}),children:K({id:(0,a.OB)("modal.popup.form.cta.delete"),defaultMessage:"Delete Popup"})})})]})},wt=({setShowModal:P,deleteAllPopup:W,popups:X,showModal:nt=!1})=>{const{formatMessage:K}=(0,d.Z)();return(0,t.jsxs)(F.Dialog,{onClose:()=>P(!1),title:"Confirmation",isOpen:nt,children:[(0,t.jsx)(F.DialogBody,{icon:(0,t.jsx)(Ht(),{}),children:(0,t.jsx)(g.Stack,{spacing:2,children:(0,t.jsx)(R.Flex,{justifyContent:"center",children:(0,t.jsx)(xt.Z,{id:"confirm-description",children:K({id:(0,a.OB)("modal.popup.form.info.delete"),defaultMessage:"Are you sure you want to delete this?"})})})})}),(0,t.jsx)(F.DialogFooter,{startAction:(0,t.jsx)(ut.z,{onClick:()=>P(!1),variant:"tertiary",children:K({id:(0,a.OB)("modal.popup.form.cta.cancel"),defaultMessage:"Cancel"})}),endAction:(0,t.jsx)(ut.z,{onClick:()=>{W(X),P(!1)},variant:"danger-light",startIcon:(0,t.jsx)(et(),{}),children:K({id:(0,a.OB)("modal.popup.form.cta.deleteAll"),defaultMessage:"Delete Popups"})})})]})},Se=({locale:P})=>{const{formatMessage:W}=(0,d.Z)(),[X,nt]=(0,s.useState)([]),[K,ht]=(0,s.useState)(!1),[Ct,Lt]=(0,s.useState)(!1),[Y,J]=(0,s.useState)(!1),[ft,ee]=(0,s.useState)(!1),[Bt,Vt]=(0,s.useState)(!1),[pt,Pt]=(0,s.useState)(!0),[Rt,ye]=(0,s.useState)(null),[re,ne]=(0,s.useState)([]),It=async()=>{Pt(!0);const Tt=await C.Z.getPopups(P);nt(Tt),Pt(!1)},Kt=async Tt=>{await C.Z.createPopup(Tt),await It()},zt=async Tt=>{await C.Z.deletePopup(Tt.id),await It()},U=async Tt=>{for(const ue of Tt)await C.Z.deletePopup(ue.id);await It()},Mt=async Tt=>{await C.Z.updatePopup(Tt.id,Tt),await It()};return(0,s.useEffect)(()=>{It()},[]),(0,s.useEffect)(()=>{It()},[P]),!!pt?(0,t.jsx)(i.LoadingIndicatorPage,{}):(0,t.jsxs)(t.Fragment,{children:[X.length>0?(0,t.jsx)(w,{popups:X,setPopup:ye,setPopups:ne,updatePopup:Mt,setShowCreatePopupModal:ht,setShowUpdatePopupModal:Lt,setShowDeletePopupModel:J,setShowDuplicatePopupModal:ee,setShowDeleteAllPopupModal:Vt}):(0,t.jsx)(L.EmptyStateLayout,{icon:(0,t.jsx)(v.Z,{}),content:W({id:(0,a.OB)("empty.popup"),defaultMessage:"You don't have any popups yet..."}),action:(0,t.jsx)(b.Button,{startIcon:(0,t.jsx)(m(),{}),variant:"secondary",onClick:()=>{ht(!0)},children:W({id:(0,a.OB)("empty.popup.cta"),defaultMessage:"Add your first popup"})}),shadow:"none"}),K&&(0,t.jsx)(H,{setShowModal:ht,createPopup:Kt,locale:P}),Ct&&(0,t.jsx)(z,{setShowModal:Lt,updatePopup:Mt,popup:Rt}),Y&&(0,t.jsx)(at,{setShowModal:J,deletePopup:zt,popup:Rt,showModal:Y}),ft&&(0,t.jsx)(tt,{setShowModal:ee,createPopup:Kt,popup:Rt,locale:P}),Bt&&(0,t.jsx)(wt,{setShowModal:Vt,deleteAllPopup:U,popups:re,showModal:Bt})]})},xe=()=>{const{formatMessage:P}=(0,d.Z)(),[W,X]=(0,s.useState)([]),[nt,K]=(0,s.useState)([]),[ht,Ct]=(0,s.useState)(!0),[Lt,Y]=(0,s.useState)(!0),[J,ft]=(0,s.useState)(null),ee=async()=>{const pt=await C.Z.getLocales(),Pt=pt.filter(Rt=>Rt.isDefault)[0];K(pt),ft(Pt.code),Y(!1)},Bt=async()=>{const pt=await C.Z.getConfig();X(pt),Ct(!1)};return(0,s.useEffect)(()=>{Bt(),ee()},[]),!(!ht&&!Lt)?(0,t.jsx)(i.LoadingIndicatorPage,{}):(0,t.jsxs)(u.Layout,{children:[(0,t.jsx)(u.BaseHeaderLayout,{title:P({id:(0,a.OB)("header.title"),defaultMessage:"Cookie Manager"}),subtitle:P({id:(0,a.OB)("header.description"),defaultMessage:"Create and organize your cookies in one place"}),as:"h2",primaryAction:(0,t.jsx)(g.Stack,{horizontal:!0,spacing:4,children:W.localization&&(0,t.jsx)(l.Select,{id:"lang-select","aria-label":P({id:(0,a.OB)("header.cta.locale.label"),defaultMessage:"Choose the language to edit"}),value:J,defaultValue:J,onChange:ft,children:nt.map((pt,Pt)=>(0,t.jsx)(l.Option,{value:pt.code,children:pt.code.toUpperCase()},Pt))})})}),(0,t.jsx)(u.ContentLayout,{children:(0,t.jsxs)(j.TabGroup,{id:"tabs",label:"Overview",children:[(0,t.jsxs)(j.Tabs,{children:[(0,t.jsx)(j.Tab,{children:P({id:(0,a.OB)("tab.cookie"),defaultMessage:"Cookies"})}),(0,t.jsx)(j.Tab,{children:P({id:(0,a.OB)("tab.popup"),defaultMessage:"Popups"})})]}),(0,t.jsxs)(j.TabPanels,{children:[(0,t.jsx)(j.TabPanel,{children:(0,t.jsx)(o.Box,{color:"neutral800",padding:6,background:"neutral0",children:(0,t.jsx)(B,{locale:J,isMultiLocale:W.localization})})}),(0,t.jsx)(j.TabPanel,{children:(0,t.jsx)(o.Box,{color:"neutral800",padding:6,background:"neutral0",children:(0,t.jsx)(Se,{locale:J})})})]})]})})]})},te=(0,s.memo)(xe),le=()=>(0,t.jsx)("div",{children:(0,t.jsxs)(r.rs,{children:[(0,t.jsx)(r.AW,{path:`/plugins/${a.aw}`,component:te,exact:!0}),(0,t.jsx)(r.AW,{component:i.NotFound})]})})},84242:($,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>me});var t=e(53657),s=e(96125),r=e(33541),i=e(29776),a=e(59155),d=e.n(a),u=e(47724),o=e(59445),l=e(24851),g=e(90313),j=e.n(g),x=e(86932),L=e(66437),b=e.n(L);const f=()=>(0,t.jsxs)("svg",{width:"159",height:"88",viewBox:"0 0 159 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M134.933 17.417C137.768 17.417 140.067 19.7153 140.067 22.5503C140.067 25.3854 137.768 27.6837 134.933 27.6837H105.6C108.435 27.6837 110.733 29.9819 110.733 32.817C110.733 35.6521 108.435 37.9503 105.6 37.9503H121.733C124.568 37.9503 126.867 40.2486 126.867 43.0837C126.867 45.9187 124.568 48.217 121.733 48.217H114.272C110.698 48.217 107.8 50.5153 107.8 53.3503C107.8 55.2404 109.267 56.9515 112.2 58.4837C115.035 58.4837 117.333 60.7819 117.333 63.617C117.333 66.4521 115.035 68.7503 112.2 68.7503H51.3333C48.4982 68.7503 46.2 66.4521 46.2 63.617C46.2 60.7819 48.4982 58.4837 51.3333 58.4837H22.7333C19.8982 58.4837 17.6 56.1854 17.6 53.3503C17.6 50.5153 19.8982 48.217 22.7333 48.217H52.0666C54.9017 48.217 57.2 45.9187 57.2 43.0837C57.2 40.2486 54.9017 37.9503 52.0666 37.9503H33.7333C30.8982 37.9503 28.6 35.6521 28.6 32.817C28.6 29.9819 30.8982 27.6837 33.7333 27.6837H63.0666C60.2316 27.6837 57.9333 25.3854 57.9333 22.5503C57.9333 19.7153 60.2316 17.417 63.0666 17.417H134.933ZM134.933 37.9503C137.768 37.9503 140.067 40.2486 140.067 43.0837C140.067 45.9187 137.768 48.217 134.933 48.217C132.098 48.217 129.8 45.9187 129.8 43.0837C129.8 40.2486 132.098 37.9503 134.933 37.9503Z",fill:"#DBDBFA"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M95.826 16.6834L102.647 66.4348L103.26 71.4261C103.458 73.034 102.314 74.4976 100.706 74.695L57.7621 79.9679C56.1542 80.1653 54.6906 79.0219 54.4932 77.4139L47.8816 23.5671C47.7829 22.7631 48.3546 22.0313 49.1586 21.9326C49.1637 21.932 49.1688 21.9313 49.1739 21.9307L52.7367 21.5311L95.826 16.6834ZM55.6176 21.208L58.9814 20.8306Z",fill:"white"}),(0,t.jsx)("path",{d:"M55.6176 21.208L58.9814 20.8306M95.826 16.6834L102.647 66.4348L103.26 71.4261C103.458 73.034 102.314 74.4976 100.706 74.695L57.7621 79.9679C56.1542 80.1653 54.6906 79.0219 54.4932 77.4139L47.8816 23.5671C47.7829 22.7631 48.3546 22.0313 49.1586 21.9326C49.1637 21.932 49.1688 21.9313 49.1739 21.9307L52.7367 21.5311L95.826 16.6834Z",stroke:"#7E7BF6",strokeWidth:"2.5"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M93.9695 19.8144L100.144 64.9025L100.699 69.4258C100.878 70.8831 99.8559 72.2077 98.416 72.3845L59.9585 77.1065C58.5185 77.2833 57.2062 76.2453 57.0272 74.7881L51.0506 26.112C50.9519 25.308 51.5236 24.5762 52.3276 24.4775L57.0851 23.8934",fill:"#F0F0FF"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M97.701 7.33301H64.2927C63.7358 7.33301 63.2316 7.55873 62.8667 7.92368C62.5017 8.28862 62.276 8.79279 62.276 9.34967V65.083C62.276 65.6399 62.5017 66.1441 62.8667 66.509C63.2316 66.874 63.7358 67.0997 64.2927 67.0997H107.559C108.116 67.0997 108.62 66.874 108.985 66.509C109.35 66.1441 109.576 65.6399 109.576 65.083V19.202C109.576 18.6669 109.363 18.1537 108.985 17.7755L99.1265 7.92324C98.7484 7.54531 98.2356 7.33301 97.701 7.33301Z",fill:"white",stroke:"#7F7CFA",strokeWidth:"2.5"}),(0,t.jsx)("path",{d:"M98.026 8.17871V16.6833C98.026 17.8983 99.011 18.8833 100.226 18.8833H106.044",stroke:"#807EFA",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M70.1594 56.2838H89.2261M70.1594 18.8838H89.2261H70.1594ZM70.1594 27.6838H101.693H70.1594ZM70.1594 37.2171H101.693H70.1594ZM70.1594 46.7505H101.693H70.1594Z",stroke:"#817FFA",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]});var h=e(93378),m=e(9695),v=e(52917),S=e(54274),T=e(49610),p=e(27770),y=e(62819),C=e.n(y),I=e(52829),B=e.n(I),R=e(57114),O=e.n(R),A=e(50386);const N=G=>{const _=(()=>(0,A.startsWith)(G,"/")?`${strapi.backendURL}${G}`:(0,A.startsWith)(G,"https")||(0,A.startsWith)(G,"http")?G:`${strapi.backendURL}/${G}`)();return window.open(_,"_blank"),window.focus()};function V({value:G,checkboxID:_,callback:St,disabled:At}){const[Z,gt]=useState(G);function ct(){gt(!Z),St&&St({id:_,value:!Z})}return jsx(BaseCheckbox,{checked:Z,onChange:ct,disabled:At})}function q({value:G,onChange:_}){return jsx(TextInput,{type:"text","aria-label":"customAPI-input",name:"customAPI-input",onChange:_,value:G})}function rt({customAPIData:G,deleteCustomAPI:_,editCustomAPI:St,setShowCustomAPICustomizationPage:At}){return(0,t.jsx)(m.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",padding:8,style:{marginTop:"10px"},children:(0,t.jsxs)(h.Table,{colCount:4,rowCount:10,footer:(0,t.jsx)(h.TFooter,{onClick:()=>At(!0),icon:(0,t.jsx)(j(),{}),children:"Add a CustomAPI"}),children:[(0,t.jsx)(h.Thead,{children:(0,t.jsxs)(h.Tr,{children:[(0,t.jsx)(h.Th,{children:(0,t.jsx)(S.Typography,{variant:"sigma",children:"ID"})}),(0,t.jsx)(h.Th,{children:(0,t.jsx)(S.Typography,{variant:"sigma",children:"Custom API Name"})}),(0,t.jsx)(h.Th,{children:(0,t.jsx)(S.Typography,{variant:"sigma",children:"Slug"})}),(0,t.jsx)(h.Th,{children:(0,t.jsx)(p.VisuallyHidden,{children:"Actions"})})]})}),(0,t.jsx)(h.Tbody,{children:G.map(Z=>(0,t.jsxs)(h.Tr,{children:[(0,t.jsx)(h.Td,{children:(0,t.jsx)(S.Typography,{textColor:"neutral800",children:Z.id})}),(0,t.jsx)(h.Td,{children:(0,t.jsx)(S.Typography,{textColor:"neutral800",children:Z.name})}),(0,t.jsx)(h.Td,{children:(0,t.jsx)(S.Typography,{textColor:"neutral800",children:Z.slug})}),(0,t.jsx)(h.Td,{children:(0,t.jsxs)(v.Flex,{style:{justifyContent:"end"},children:[(0,t.jsx)(T.IconButton,{onClick:gt=>{gt.preventDefault(),N(`/custom-api/${Z.slug}`)},noBorder:!0,icon:(0,t.jsx)(C(),{}),label:"Open target"}),(0,t.jsx)(T.IconButton,{onClick:()=>St(Z.id),label:"Edit",noBorder:!0,icon:(0,t.jsx)(B(),{})}),(0,t.jsx)(m.Box,{paddingLeft:1,children:(0,t.jsx)(T.IconButton,{onClick:()=>_(Z),label:"Delete",noBorder:!0,icon:(0,t.jsx)(O(),{})})})]})})]},Z.id))})]})})}var et=e(9307),it=e.n(et),Nt=e(78839),M=e.n(Nt),w=e(26343),F=e(6842),Q=e.n(F),Dt=e(7453),Ht=e.n(Dt),se=e(15144);const xt={getAllCustomApis:async()=>await(0,i.request)("/custom-api/find",{method:"GET"}),getCustomApiById:async G=>await(0,i.request)(`/custom-api/find/${G}`,{method:"GET"}),addCustomApi:async G=>await(0,i.request)("/custom-api/create",{method:"POST",body:{data:G}}),updateCustomApi:async(G,_)=>await(0,i.request)(`/custom-api/update/${G}`,{method:"PUT",body:{data:_}}),getAllContentTypes:async()=>await(0,i.request)("/custom-api/content-types",{method:"GET"})};var jt=e(21183);async function $t({uid:G}){return(await xt.getAllContentTypes()).filter(At=>At.uid===G)[0]}async function Zt({currentContentTypeRaw:G,iteratedUIDs:_,reducedEntries:St,currentRelationalField:At}){let Z={};_.push(G.uid),Z.table=At||G.info.displayName,Z.fields||(Z.fields=[]),Z.media||(Z.media=[]);for(const gt of Object.keys(G.attributes)){if(["relation","media"].includes(G.attributes[gt].type)||Z.fields.push({selected:gt==="id",name:gt}),G.attributes[gt].type==="relation"){const ct=G.attributes[gt].target;if(!_.includes(ct)){const Ft=await $t({uid:ct});await Zt({currentContentTypeRaw:Ft,iteratedUIDs:_,reducedEntries:Z,currentRelationalField:gt})}}G.attributes[gt].type==="media"&&Z.media.push({selected:!1,name:gt})}St.populate=St.populate||[],St.populate.push(Z)}var Gt=e(36798);function Et({table:G,field:_,toggleSelectedOfField:St}){const[At,Z]=(0,s.useState)(_.selected);return(0,t.jsxs)(m.Box,{children:[(0,t.jsx)(Gt.BaseCheckbox,{"aria-label":"fields checkbox",name:`base-checkbox-${G}-${_.name}`,id:`base-checkbox-${G}-${_.name}`,onValueChange:gt=>{Z(gt),St(G,_.name)},value:At,disabled:_.name==="id"}),(0,t.jsx)("label",{style:{marginLeft:5},htmlFor:`base-checkbox-${G}-${_.name}`,children:_.name})]})}var ut=e(39539);function Ut({children:G,table:_,...St}){const[At,Z]=(0,s.useState)(!1);return(0,t.jsxs)(ut.Accordion,{expanded:At,onToggle:()=>Z(gt=>!gt),id:"acc-1",size:"S",...St,children:[(0,t.jsx)(ut.AccordionToggle,{title:_}),(0,t.jsx)(ut.AccordionContent,{children:(0,t.jsx)(m.Box,{padding:3,children:G})})]})}function bt({data:G,toggleSelectedOfField:_,toggleSelectedOfMedia:St}){let{table:At,fields:Z,populate:gt,media:ct}=G;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(m.Box,{padding:8,background:"neutral100",children:(0,t.jsx)(Ut,{table:At,children:(0,t.jsxs)("ul",{children:[Z.map(Ft=>(0,t.jsx)(Et,{table:At,field:Ft,toggleSelectedOfField:_},Ft.name)),ct.map(Ft=>(0,t.jsx)(Et,{table:At,field:Ft,toggleSelectedOfField:St},Ft.name)),gt&&Array.isArray(gt)&&gt.length&&gt.map(Ft=>(0,t.jsx)(bt,{data:Ft,toggleSelectedOfField:_}))]})})})})}const Yt=({showCustomAPICustomizationPage:G,setShowCustomAPICustomizationPage:_,fetchData:St,isLoading:At})=>{const[Z,gt]=(0,s.useState)(""),[ct,Ft]=(0,s.useState)(""),[he,ot]=(0,s.useState)(null);(0,s.useEffect)(async()=>{const ce=(await xt.getAllContentTypes()).map(pe=>({uid:pe.uid,displayName:pe.info.displayName}));ot(ce)},[]);const[Jt,ae]=(0,s.useState)(),[ie,Ie]=(0,s.useState)({populate:[]});(0,s.useEffect)(async()=>{if(!G||!G.id)return;const dt=await xt.getCustomApiById(G.id);dt&&(gt(dt.name),Ft(dt.slug),ae(dt.selectedContentType),Ie(dt.structure))},[]),(0,s.useEffect)(async()=>{if(G&&G.id||!Jt)return;const dt=await $t({uid:Jt.uid});if(!dt)return;const ce=[],pe={};await Zt({currentContentTypeRaw:Ht()(dt),iteratedUIDs:ce,reducedEntries:pe}),pe&&Ie(pe)},[Jt]);function Ke(dt,ce,pe){return Q()(dt,vt=>{if(vt&&vt.table&&vt.table===ce){const Pe=[...vt.fields].map(de=>de.name===pe?{selected:!de.selected,name:de.name}:de);return{...vt,fields:Pe}}})}function Ge(dt,ce,pe){return Q()(dt,vt=>{if(vt&&vt.table&&vt.table===ce){const Pe=[...vt.media].map(de=>de.name===pe?{selected:!de.selected,name:de.name}:de);return{...vt,media:Pe}}})}function ze(dt,ce){const pe=Ke(ie,dt,ce);Ie(pe)}function Ze(dt,ce){const pe=Ge(ie,dt,ce);Ie(pe)}const We=async dt=>{dt.preventDefault(),dt.stopPropagation();try{G&&G.id?await xt.updateCustomApi(G.id,{name:Z,slug:ct,selectedContentType:Jt,structure:ie}):await xt.addCustomApi({name:Z,slug:ct,selectedContentType:Jt,structure:ie}),St(),_(!1)}catch(ce){console.log("error",ce)}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.HeaderLayout,{id:"title",primaryAction:(0,t.jsx)(x.Stack,{horizontal:!0,spacing:2,children:(0,t.jsx)(l.Button,{startIcon:(0,t.jsx)(M(),{}),onClick:We,type:"button",disabled:!1,children:"Save"})}),title:b()("Create a custom API"),subtitle:"creating a new custom API",navigationAction:(0,t.jsx)(l.Button,{onClick:()=>{_(!1)},startIcon:(0,t.jsx)(it(),{}),variant:"ghost",style:{paddingLeft:0},children:"Back to list"})}),(0,t.jsxs)(u.ContentLayout,{children:[(0,t.jsx)(x.Stack,{spacing:4,children:(0,t.jsx)(m.Box,{padding:10,background:"neutral0",shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(w.Grid,{gap:6,children:[(0,t.jsx)(w.GridItem,{col:6,s:12,children:(0,t.jsx)(se.TextInput,{placeholder:"A descriptive name",label:"Custom API Name",name:"name",hint:"A descriptive name",onChange:dt=>gt(dt.target.value),value:Z})}),(0,t.jsx)(w.GridItem,{col:6,s:12,children:(0,t.jsx)(se.TextInput,{placeholder:"A Slug for constructing URL",label:"Slug",name:"slug",hint:ct&&`Get your data here: /custom-api/${ct}`,onChange:dt=>Ft(dt.target.value),value:ct})})]})})}),(0,t.jsx)(m.Box,{padding:10,background:"neutral0",shadow:"filterShadow",hasRadius:!0,style:{marginTop:10},children:(0,t.jsxs)(x.Stack,{spacing:11,children:[(0,t.jsxs)(S.Typography,{variant:"beta",children:["The selected Content Type is:"," ",Jt?Jt.displayName:""]}),(0,t.jsx)(jt.Select,{id:"select1",label:"Choose the content-type",required:!0,placeholder:"select a content type",hint:"Relationships will automatically be mapped below",onClear:()=>ae(void 0),clearLabel:"Clear content types",value:Jt?Jt.uid:null,disabled:!!(G&&G.id),onChange:dt=>{ae(he&&he.length&&he.filter(ce=>ce.uid===dt)[0])},children:he&&he.length&&he.map(dt=>(0,t.jsx)(jt.Option,{value:dt.uid,children:dt.displayName},dt.uid))})]})}),(0,t.jsx)(m.Box,{padding:10,background:"neutral0",shadow:"filterShadow",hasRadius:!0,style:{marginTop:10},children:ie&&ie.populate&&Array.isArray(ie.populate)&&ie.populate.length&&ie.populate.map(dt=>(0,t.jsx)(bt,{data:dt,toggleSelectedOfField:ze,toggleSelectedOfMedia:Ze}))})]})]})},Ce=()=>{const[G,_]=(0,s.useState)(!0),[St,At]=(0,s.useState)([]),[Z,gt]=(0,s.useState)(0),[ct,Ft]=(0,s.useState)(!1),he=async()=>{G===!1&&_(!0);const ae=await xt.getAllCustomApis();At(ae);const ie=await xt.getAllContentTypes();gt(ie.length),_(!1)};(0,s.useEffect)(async()=>{he()},[]);async function ot(){alert("Add functionality to delete the API")}async function Jt(ae){Ft({id:ae})}return G?(0,t.jsx)(i.LoadingIndicatorPage,{}):(0,t.jsxs)(u.Layout,{children:[(0,t.jsx)(u.BaseHeaderLayout,{title:"Custom API Builder Plugin",subtitle:"Visually build a custom API endpoint for any content type with fields nested any level deep",as:"h2"}),(0,t.jsxs)(u.ContentLayout,{children:[St.length===0&&!ct&&(0,t.jsx)("div",{children:(0,t.jsx)(o.EmptyStateLayout,{icon:(0,t.jsx)(f,{}),content:Z?"You don't have any custom API yet":"You require at least 1 collection type to proceed, Content-Type builder -> Create new collection type",action:(0,t.jsx)(l.Button,{onClick:()=>Ft({id:null}),variant:"secondary",startIcon:(0,t.jsx)(j(),{}),disabled:!Z,children:"Add your first Custom API"})})}),St.length>0&&!ct&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.HeaderLayout,{id:"title",primaryAction:(0,t.jsx)(x.Stack,{horizontal:!0,spacing:2,children:(0,t.jsx)(l.Button,{startIcon:(0,t.jsx)(j(),{}),onClick:()=>{Ft({id:null})},type:"submit",disabled:!1,children:"Create new custom API"})}),title:b()(`custom  API${St.length>1?"s":""}`),subtitle:`${St.length} ${St.length>1?"entries":"entry"} found`}),(0,t.jsx)(u.ContentLayout,{children:(0,t.jsx)(rt,{customAPIData:St,setShowCustomAPICustomizationPage:Ft,deleteCustomAPI:ot,editCustomAPI:Jt})})]}),ct&&(0,t.jsx)(Yt,{showCustomAPICustomizationPage:ct,setShowCustomAPICustomizationPage:Ft,isLoading:G,fetchData:he})]})]})},Me=(0,s.memo)(Ce),me=()=>(0,t.jsx)("div",{children:(0,t.jsxs)(r.rs,{children:[(0,t.jsx)(r.AW,{path:`/plugins/${d()}`,component:Me,exact:!0}),(0,t.jsx)(r.AW,{component:i.NotFound})]})})},75729:($,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});const e=a=>typeof a=="object"&&a!=null&&a.nodeType===1,t=(a,d)=>(!d||a!=="hidden")&&a!=="visible"&&a!=="clip",s=(a,d)=>{if(a.clientHeight<a.scrollHeight||a.clientWidth<a.scrollWidth){const u=getComputedStyle(a,null);return t(u.overflowY,d)||t(u.overflowX,d)||(o=>{const l=(g=>{if(!g.ownerDocument||!g.ownerDocument.defaultView)return null;try{return g.ownerDocument.defaultView.frameElement}catch{return null}})(o);return!!l&&(l.clientHeight<o.scrollHeight||l.clientWidth<o.scrollWidth)})(a)}return!1},r=(a,d,u,o,l,g,j,x)=>g<a&&j>d||g>a&&j<d?0:g<=a&&x<=u||j>=d&&x>=u?g-a-o:j>d&&x<u||g<a&&x>u?j-d+l:0,i=a=>{const d=a.parentElement;return d??(a.getRootNode().host||null)};n.compute=(a,d)=>{var u,o,l,g;if(typeof document>"u")return[];const{scrollMode:j,block:x,inline:L,boundary:b,skipOverflowHiddenElements:f}=d,h=typeof b=="function"?b:M=>M!==b;if(!e(a))throw new TypeError("Invalid target");const m=document.scrollingElement||document.documentElement,v=[];let S=a;for(;e(S)&&h(S);){if(S=i(S),S===m){v.push(S);break}S!=null&&S===document.body&&s(S)&&!s(document.documentElement)||S!=null&&s(S,f)&&v.push(S)}const T=(o=(u=window.visualViewport)==null?void 0:u.width)!=null?o:innerWidth,p=(g=(l=window.visualViewport)==null?void 0:l.height)!=null?g:innerHeight,{scrollX:y,scrollY:C}=window,{height:I,width:B,top:R,right:O,bottom:A,left:D}=a.getBoundingClientRect(),{top:N,right:V,bottom:q,left:rt}=(M=>{const w=window.getComputedStyle(M);return{top:parseFloat(w.scrollMarginTop)||0,right:parseFloat(w.scrollMarginRight)||0,bottom:parseFloat(w.scrollMarginBottom)||0,left:parseFloat(w.scrollMarginLeft)||0}})(a);let et=x==="start"||x==="nearest"?R-N:x==="end"?A+q:R+I/2-N+q,it=L==="center"?D+B/2-rt+V:L==="end"?O+V:D-rt;const Nt=[];for(let M=0;M<v.length;M++){const w=v[M],{height:F,width:Q,top:Dt,right:Ht,bottom:se,left:_t}=w.getBoundingClientRect();if(j==="if-needed"&&R>=0&&D>=0&&A<=p&&O<=T&&R>=Dt&&A<=se&&D>=_t&&O<=Ht)return Nt;const xt=getComputedStyle(w),jt=parseInt(xt.borderLeftWidth,10),$t=parseInt(xt.borderTopWidth,10),Zt=parseInt(xt.borderRightWidth,10),Gt=parseInt(xt.borderBottomWidth,10);let Et=0,ut=0;const Ut="offsetWidth"in w?w.offsetWidth-w.clientWidth-jt-Zt:0,bt="offsetHeight"in w?w.offsetHeight-w.clientHeight-$t-Gt:0,yt="offsetWidth"in w?w.offsetWidth===0?0:Q/w.offsetWidth:0,Yt="offsetHeight"in w?w.offsetHeight===0?0:F/w.offsetHeight:0;if(m===w)Et=x==="start"?et:x==="end"?et-p:x==="nearest"?r(C,C+p,p,$t,Gt,C+et,C+et+I,I):et-p/2,ut=L==="start"?it:L==="center"?it-T/2:L==="end"?it-T:r(y,y+T,T,jt,Zt,y+it,y+it+B,B),Et=Math.max(0,Et+C),ut=Math.max(0,ut+y);else{Et=x==="start"?et-Dt-$t:x==="end"?et-se+Gt+bt:x==="nearest"?r(Dt,se,F,$t,Gt+bt,et,et+I,I):et-(Dt+F/2)+bt/2,ut=L==="start"?it-_t-jt:L==="center"?it-(_t+Q/2)+Ut/2:L==="end"?it-Ht+Zt+Ut:r(_t,Ht,Q,jt,Zt+Ut,it,it+B,B);const{scrollLeft:Ce,scrollTop:Me}=w;Et=Yt===0?0:Math.max(0,Math.min(Me+Et/Yt,w.scrollHeight-F/Yt+bt)),ut=yt===0?0:Math.max(0,Math.min(Ce+ut/yt,w.scrollWidth-Q/yt+Ut)),et+=Me-Et,it+=Ce-ut}Nt.push({el:w,top:Et,left:ut})}return Nt}}}]);
