(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[6750],{74349:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(27279),n=t(72450),i=t(15093),g=t(54673),u=t(11880),y=t(35725),s=t(44747),T=f=>f&&f.__esModule?f:{default:f};function M(f){if(f&&f.__esModule)return f;const R=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(f){for(const $ in f)if($!=="default"){const O=Object.getOwnPropertyDescriptor(f,$);Object.defineProperty(R,$,O.get?O:{enumerable:!0,get:()=>f[$]})}}return R.default=f,Object.freeze(R)}const x=M(e),b=T(n),C=({theme:f,expanded:R,variant:$,disabled:O,error:d})=>d?`1px solid ${f.colors.danger600} !important`:O?`1px solid ${f.colors.neutral150}`:R?`1px solid ${f.colors.primary600}`:$==="primary"?`1px solid ${f.colors.neutral0}`:`1px solid ${f.colors.neutral100}`,h=b.default(u.Typography)``,E=b.default(s.Box)`
  border: ${C};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:f})=>f.colors.primary600};

    ${h} {
      color: ${({theme:f,expanded:R})=>R?void 0:f.colors.primary700};
    }

    ${u.Typography} {
      color: ${({theme:f,expanded:R})=>R?void 0:f.colors.primary600};
    }

    & > ${y.Flex} {
      background: ${({theme:f})=>f.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:f})=>f.colors.primary200};
    }
  }
`,l=({children:f,disabled:R=!1,error:$,expanded:O=!1,hasErrorMessage:d=!0,id:c,onToggle:m,toggle:k,size:F="M",variant:L="primary",shadow:_})=>{const ge=g.useId(c),we=x.useMemo(()=>({expanded:O,onToggle:m,toggle:k,id:ge,size:F,variant:L,disabled:R}),[R,O,ge,m,F,k,L]);return o.jsxs(i.AccordionContext.Provider,{value:we,children:[o.jsx(E,{"data-strapi-expanded":O,disabled:R,"aria-disabled":R,expanded:O,hasRadius:!0,variant:L,error:$,shadow:_,children:f}),$&&d&&o.jsx(s.Box,{paddingTop:1,children:o.jsx(u.Typography,{variant:"pi",textColor:"danger600",children:$})})]})};r.Accordion=l,r.AccordionTypography=h},40932:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(15093),n=t(44747),i=({children:g,...u})=>{const{expanded:y,id:s}=e.useAccordion();if(!y)return null;const T=`accordion-content-${s}`,M=`accordion-label-${s}`,x=`accordion-desc-${s}`;return o.jsx(n.Box,{role:"region",id:T,"aria-labelledby":M,"aria-describedby":x,...u,children:g})};r.AccordionContent=i},15093:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(27279),e=o.createContext({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),n=()=>o.useContext(e);r.AccordionContext=e,r.useAccordion=n},43270:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(27279),n=t(72450),i=t(50359),g=t(44747),u=t(35725),y=t(11880),s=l=>l&&l.__esModule?l:{default:l};function T(l){if(l&&l.__esModule)return l;const f=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(l){for(const R in l)if(R!=="default"){const $=Object.getOwnPropertyDescriptor(l,R);Object.defineProperty(f,R,$.get?$:{enumerable:!0,get:()=>l[R]})}}return f.default=l,Object.freeze(f)}const M=T(e),x=s(n),b=x.default(g.Box)`
  border-bottom: 1px solid ${({theme:l})=>l.colors.neutral200};
  border-right: 1px solid ${({theme:l})=>l.colors.neutral200};
  border-left: 1px solid ${({theme:l})=>l.colors.neutral200};
  border-radius: 0 0 ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius};
`,C=x.default(g.Box)`
  & > * {
    & > * {
      border-radius: unset;
    }
  }

  & > * {
    border-radius: unset;
    border-right: 1px solid ${({theme:l})=>l.colors.neutral200};
    border-left: 1px solid ${({theme:l})=>l.colors.neutral200};
    border-bottom: 1px solid ${({theme:l})=>l.colors.neutral200};
  }

  & > *:first-of-type {
    border-top: 1px solid ${({theme:l})=>l.colors.neutral200};
    border-radius: ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius} 0 0;
    & > * {
      border-radius: ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius} 0 0;
    }

    &:hover {
      border-top: 1px solid ${({theme:l})=>l.colors.primary600};
    }
  }

  & [data-strapi-expanded='true'] {
    border: 1px solid ${({theme:l})=>l.colors.primary600};
  }

  ${({theme:l,footer:f})=>`
    &:not(${f}) {
      & > *:last-of-type {
        border-radius: 0 0 ${l.borderRadius} ${l.borderRadius};
      }
    }
  `}
`,h=x.default(g.Box)`
  svg path {
    fill: ${({theme:l})=>l.colors.neutral500};
  }
`,E=({children:l,footer:f,label:R,labelAction:$,error:O})=>{const d=M.Children.toArray(l).map(c=>M.cloneElement(c,{hasErrorMessage:!1}));return o.jsxs(i.KeyboardNavigable,{attributeName:"data-strapi-accordion-toggle",children:[R&&o.jsxs(u.Flex,{paddingBottom:1,children:[o.jsx(y.Typography,{variant:"pi",as:"label",textColor:"neutral800",fontWeight:"bold",children:R}),$&&o.jsx(h,{paddingLeft:1,children:$})]}),o.jsx(C,{footer:f,children:d}),f&&o.jsx(b,{children:f}),O&&o.jsx(g.Box,{paddingTop:1,children:o.jsx(y.Typography,{variant:"pi",textColor:"danger600",children:O})})]})};r.AccordionGroup=E},18459:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(71434),n=t(72450),i=t(74349),g=t(15093),u=t(65336),y=t(80652),s=t(34760),T=t(35725),M=t(11880),b=(l=>l&&l.__esModule?l:{default:l})(n),C=b.default(y.TextButton)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:l,expanded:f})=>f?l.colors.primary600:l.colors.neutral500};
    }
  }
`,h=b.default(T.Flex)`
  min-height: ${({theme:l,size:f})=>l.sizes.accordions[f]};
  border-radius: ${({theme:l,expanded:f})=>f?`${l.borderRadius} ${l.borderRadius} 0 0`:l.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:l})=>l.colors.primary600};
      }
    }
  }
`,E=({title:l,description:f,as:R="span",togglePosition:$="right",action:O,...d})=>{const{onToggle:c,toggle:m,expanded:k,id:F,size:L,variant:_,disabled:ge}=g.useAccordion(),we=`accordion-content-${F}`,te=`accordion-label-${F}`,Ke=`accordion-desc-${F}`,se=L==="M"?6:4,et=L==="M"?se:se-2,lt=u.getBackground({expanded:k,disabled:ge,variant:_}),tt={as:R,fontWeight:L==="S"?"bold":void 0,id:te,textColor:k?"primary600":"neutral700",ellipsis:!0,variant:L==="M"?"delta":void 0},it=k?"primary600":"neutral600",ze=k?"primary200":"neutral200",V=L==="M"?`${32/16}rem`:`${24/16}rem`,Je=()=>{ge||(m&&!c?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),m()):c&&c())},dt=o.jsx(T.Flex,{justifyContent:"center",borderRadius:"50%",height:V,width:V,transform:k?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ze,cursor:ge?"not-allowed":"pointer",onClick:Je,shrink:0,children:o.jsx(s.Icon,{as:e.CarretDown,width:L==="M"?`${11/16}rem`:`${8/16}rem`,color:k?"primary600":"neutral600"})});return o.jsx(h,{paddingBottom:et,paddingLeft:se,paddingRight:se,paddingTop:et,background:lt,expanded:k,size:L,justifyContent:"space-between",cursor:ge?"not-allowed":"",children:o.jsxs(T.Flex,{gap:3,flex:1,maxWidth:"100%",children:[$==="left"&&dt,o.jsx(C,{onClick:Je,"aria-disabled":ge,"aria-expanded":k,"aria-controls":we,"aria-labelledby":te,"data-strapi-accordion-toggle":!0,expanded:k,type:"button",flex:1,minWidth:0,...d,children:o.jsxs(o.Fragment,{children:[o.jsx(i.AccordionTypography,{...tt,children:l}),f&&o.jsx(M.Typography,{as:"p",id:Ke,textColor:it,children:f})]})}),$==="right"&&o.jsxs(T.Flex,{gap:3,children:[dt,O]}),$==="left"&&O]})})};r.AccordionToggle=E},30219:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74349),e=t(40932),n=t(18459),i=t(43270);r.Accordion=o.Accordion,r.AccordionTypography=o.AccordionTypography,r.AccordionContent=e.AccordionContent,r.AccordionToggle=n.AccordionToggle,r.AccordionGroup=i.AccordionGroup},65336:(P,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const t=({expanded:o,disabled:e,variant:n})=>{let i="neutral100";return o?i="primary100":e?i="neutral150":n==="primary"&&(i="neutral0"),i};r.getBackground=t},36741:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(23455);r.BaseCheckbox=o.BaseCheckbox},20601:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(27279),n=t(72450),i=t(20565),g=t(5529),u=t(44747),y=t(35725),T=(h=>h&&h.__esModule?h:{default:h})(n),M={S:6.5,M:10.5},x=e.forwardRef(({endAction:h,startAction:E,disabled:l=!1,onChange:f,size:R="M",...$},O)=>{const{id:d,error:c,hint:m,name:k,required:F}=i.useField();let L;c?L=`${d}-error`:m&&(L=`${d}-hint`);const _=Boolean(c),ge=we=>{!l&&f&&f(we)};return o.jsxs(C,{justifyContent:"space-between",hasError:_,disabled:l,children:[E?o.jsx(u.Box,{paddingLeft:3,paddingRight:2,children:E}):null,o.jsx(b,{id:d,name:k,ref:O,"aria-describedby":L,"aria-invalid":_,"aria-disabled":l,disabled:l,"data-disabled":l?"":void 0,hasLeftAction:Boolean(E),hasRightAction:Boolean(h),onChange:ge,"aria-required":F,$size:R,...$}),h?o.jsx(u.Box,{paddingLeft:2,paddingRight:3,children:h}):null]})}),b=T.default.input`
  border: none;
  border-radius: ${({theme:h})=>h.borderRadius};
  padding-bottom: ${({$size:h})=>`${M[h]/16}rem`};
  padding-left: ${({theme:h,hasLeftAction:E})=>E?0:h.spaces[4]};
  padding-right: ${({theme:h,hasRightAction:E})=>E?0:h.spaces[4]};
  padding-top: ${({$size:h})=>`${M[h]/16}rem`};
  cursor: ${h=>h["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:h})=>h.colors.neutral800};
  font-weight: 400;
  font-size: ${h=>h.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:h})=>h.colors.neutral500};
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
`,C=T.default(y.Flex)`
  border: 1px solid ${({theme:h,hasError:E})=>E?h.colors.danger600:h.colors.neutral200};
  border-radius: ${({theme:h})=>h.borderRadius};
  background: ${({theme:h})=>h.colors.neutral0};
  ${g.inputFocusStyle()}

  ${({theme:h,disabled:E})=>E?n.css`
          color: ${h.colors.neutral600};
          background: ${h.colors.neutral150};
        `:void 0}
`;r.FieldInput=x,r.InputWrapper=C},10084:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(80518);r.IconButton=o.IconButton,r.IconButtonGroup=o.IconButtonGroup},50359:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(77547),n=t(44747),i=({tagName:g,attributeName:u="",...y})=>{const s=()=>{const x=document.activeElement;return x?g?x.tagName.toLowerCase()===g:x.hasAttribute(u):!1},T=x=>g?x.querySelectorAll(g):x.querySelectorAll(`[${u}]`),M=x=>{switch(x.key){case e.KeyboardKeys.RIGHT:case e.KeyboardKeys.DOWN:{if(s()){x.preventDefault();const b=document.activeElement,C=[...T(x.currentTarget)],h=C.findIndex(l=>l===b),E=h+1<C.length?h+1:0;C[E].focus()}break}case e.KeyboardKeys.LEFT:case e.KeyboardKeys.UP:{if(s()){x.preventDefault();const b=document.activeElement,C=[...T(x.currentTarget)],h=C.findIndex(l=>l===b),E=h-1>-1?h-1:C.length-1;C[E].focus()}break}case e.KeyboardKeys.HOME:{s()&&(x.preventDefault(),T(x.currentTarget).item(0).focus());break}case e.KeyboardKeys.END:{if(s()){x.preventDefault();const b=T(x.currentTarget);b.item(b.length-1).focus()}break}}};return o.jsx(n.Box,{onKeyDown:M,...y})};r.KeyboardNavigable=i},91594:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(35725),n=({startActions:i,endActions:g})=>!i&&!g?null:o.jsxs(e.Flex,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[o.jsx(e.Flex,{gap:2,wrap:"wrap",children:i}),o.jsx(e.Flex,{gap:2,shrink:0,wrap:"wrap",children:g})]});r.ActionLayout=n},3823:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(44747),n=({children:i})=>o.jsx(e.Box,{paddingLeft:10,paddingRight:10,children:i});r.ContentLayout=n},20285:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(72450),i=(g=>g&&g.__esModule?g:{default:g})(o).default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:g})=>g.spaces[4]};
`;r.GridLayout=i},32213:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(27279),n=t(72450),i=t(43809),g=t(29381),u=t(44747),y=t(35725),s=t(11880),T=E=>E&&E.__esModule?E:{default:E},M=T(e),x=T(n),b=E=>{const l=e.useRef(null),[f,R]=e.useState(null),[$,O]=i.useElementOnScreen({root:null,rootMargin:"0px",threshold:0});return g.useResizeObserver($,()=>{$.current&&R($.current.getBoundingClientRect())}),e.useEffect(()=>{l.current&&R(l.current.getBoundingClientRect())},[l]),o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{height:f?.height},ref:$,children:O&&o.jsx(h,{ref:l,...E})}),!O&&o.jsx(h,{...E,sticky:!0,width:f?.width})]})};b.displayName="HeaderLayout";const C=x.default(u.Box)`
  width: ${({width:E})=>E?`${E/16}rem`:void 0};
  z-index: ${({theme:E})=>E.zIndices[1]};
`,h=M.default.forwardRef(({navigationAction:E,primaryAction:l,secondaryAction:f,subtitle:R,title:$,sticky:O,width:d,...c},m)=>{const k=typeof R=="string";return O?o.jsx(C,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:d,"data-strapi-header-sticky":!0,children:o.jsxs(y.Flex,{justifyContent:"space-between",children:[o.jsxs(y.Flex,{children:[E&&o.jsx(u.Box,{paddingRight:3,children:E}),o.jsxs(u.Box,{children:[o.jsx(s.Typography,{variant:"beta",as:"h1",...c,children:$}),k?o.jsx(s.Typography,{variant:"pi",textColor:"neutral600",children:R}):R]}),f?o.jsx(u.Box,{paddingLeft:4,children:f}):null]}),o.jsx(y.Flex,{children:l?o.jsx(u.Box,{paddingLeft:2,children:l}):void 0})]})}):o.jsxs(u.Box,{ref:m,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:E?6:8,background:"neutral100","data-strapi-header":!0,children:[E?o.jsx(u.Box,{paddingBottom:2,children:E}):null,o.jsxs(y.Flex,{justifyContent:"space-between",children:[o.jsxs(y.Flex,{minWidth:0,children:[o.jsx(s.Typography,{as:"h1",variant:"alpha",...c,children:$}),f?o.jsx(u.Box,{paddingLeft:4,children:f}):null]}),l]}),k?o.jsx(s.Typography,{variant:"epsilon",textColor:"neutral600",as:"p",children:R}):R]})});r.BaseHeaderLayout=h,r.HeaderLayout=b},65030:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(72450),n=t(44747),g=(T=>T&&T.__esModule?T:{default:T})(e),u=g.default(n.Box)`
  display: grid;
  grid-template-columns: ${({hasSideNav:T})=>T?"auto 1fr":"1fr"};
`,y=g.default(n.Box)`
  overflow-x: hidden;
`,s=({sideNav:T,children:M})=>o.jsxs(u,{hasSideNav:Boolean(T),children:[T,o.jsx(y,{paddingBottom:10,children:M})]});r.Layout=s},90493:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(44076),n=t(3528),i=t(44747),g=({startCol:u,endCol:y})=>o.jsxs(e.Grid,{gap:4,children:[o.jsx(n.GridItem,{col:9,s:12,children:o.jsx(i.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:u})}),o.jsx(n.GridItem,{col:3,s:12,children:o.jsx(i.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:y})})]});r.TwoColsLayout=g},94305:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(65030),e=t(91594),n=t(3823),i=t(32213),g=t(90493),u=t(20285);r.Layout=o.Layout,r.ActionLayout=e.ActionLayout,r.ContentLayout=n.ContentLayout,r.BaseHeaderLayout=i.BaseHeaderLayout,r.HeaderLayout=i.HeaderLayout,r.TwoColsLayout=g.TwoColsLayout,r.GridLayout=u.GridLayout},24986:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(27279),n=t(29935),i=t(70598),g=t(77547),u=t(44747),y=T=>o.jsx(s,{...T,as:"th"}),s=({coords:T={col:0,row:0},as:M="td",...x})=>{const b=e.useRef(null),{rowIndex:C,colIndex:h,setTableValues:E}=n.useTable(),[l,f]=e.useState(!1),R=d=>{const c=i.getFocusableNodes(b.current,!0);if(c.length===0||c.length===1&&i.getFocusableNodesWithKeyboardNav(c).length===0)return;if(c.length>1&&!c.find(k=>k.tagName!=="BUTTON")){d.preventDefault();const k=c.findIndex(F=>F===document.activeElement);if(d.key===g.KeyboardKeys.RIGHT){const F=c[k+1];F&&(d.stopPropagation(),F.focus())}else if(d.key===g.KeyboardKeys.LEFT){const F=c[k-1];F&&(d.stopPropagation(),F.focus())}return}const m=d.key===g.KeyboardKeys.ENTER;if(m&&!l)f(!0);else if((d.key===g.KeyboardKeys.ESCAPE||m)&&l){if(m&&document.activeElement?.tagName==="A")return;f(!1),b.current.focus()}else l&&d.stopPropagation()},$=C===T.row-1&&h===T.col-1;e.useLayoutEffect(()=>{const d=i.getFocusableNodes(b.current,!0);d.length===0||d.length===1&&i.getFocusableNodesWithKeyboardNav(d).length!==0||d.length>1&&Boolean(d.find(c=>c.tagName!=="BUTTON"))?(b.current.setAttribute("tabIndex",!l&&$?"0":"-1"),d.forEach((c,m)=>{c.setAttribute("tabIndex",l?"0":"-1"),l&&m===0&&c.focus()})):d.forEach(c=>{c.setAttribute("tabIndex",$?"0":"-1")})},[l,$]);const O=e.useCallback(()=>{const d=i.getFocusableNodes(b.current,!0);d.length>=1&&(i.getFocusableNodesWithKeyboardNav(d).length!==0||!d.find(c=>c.tagName!=="BUTTON"))&&f(!0),E({rowIndex:T.row-1,colIndex:T.col-1})},[T,E]);return e.useLayoutEffect(()=>{const d=b.current;return i.getFocusableNodes(d,!0).forEach(m=>{m.addEventListener("focus",O)}),()=>{i.getFocusableNodes(d,!0).forEach(k=>{k.removeEventListener("focus",O)})}},[O]),o.jsx(u.Box,{role:"gridcell",as:M,ref:b,onKeyDown:R,...x})};r.RawTd=s,r.RawTh=y},56094:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(27279),n=t(9609),i=t(29935),g=t(77547),u=({colCount:y,rowCount:s,jumpStep:T=3,initialCol:M=0,initialRow:x=0,...b})=>{const C=e.useRef(null),h=e.useRef(!1),[E,l]=e.useState(x),[f,R]=e.useState(M),$=e.useCallback(({colIndex:c,rowIndex:m})=>{R(c),l(m)},[]);e.useEffect(()=>{h.current&&n.focusFocusable(C.current),h.current||(h.current=!0)},[f,E]);const O=c=>{switch(c.key){case g.KeyboardKeys.RIGHT:{c.preventDefault(),R(m=>m<y-1?m+1:m);break}case g.KeyboardKeys.LEFT:{c.preventDefault(),R(m=>m>0?m-1:m);break}case g.KeyboardKeys.UP:{c.preventDefault(),l(m=>m>0?m-1:m);break}case g.KeyboardKeys.DOWN:{c.preventDefault(),l(m=>m<s-1?m+1:m);break}case g.KeyboardKeys.HOME:{c.preventDefault(),c.ctrlKey&&l(0),R(0);break}case g.KeyboardKeys.END:{c.preventDefault(),c.ctrlKey&&l(s-1),R(y-1);break}case g.KeyboardKeys.PAGE_DOWN:{c.preventDefault(),l(m=>m+T<s?m+T:s-1);break}case g.KeyboardKeys.PAGE_UP:{c.preventDefault(),l(m=>m-T>0?m-T:0);break}}},d=e.useMemo(()=>({rowIndex:E,colIndex:f,setTableValues:$}),[f,E,$]);return o.jsx(i.RawTableContext.Provider,{value:d,children:o.jsx("table",{role:"grid",ref:C,"aria-rowcount":s,"aria-colcount":y,onKeyDown:O,...b})})};r.RawTable=u},29935:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(27279),e=o.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),n=()=>o.useContext(e);r.RawTableContext=e,r.useTable=n},6890:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(27279),n=({children:i,...g})=>{const u=e.Children.toArray(i).map((y,s)=>e.isValidElement(y)?e.cloneElement(y,{"aria-rowindex":s+2}):y);return o.jsx("tbody",{...g,children:u})};r.RawTbody=n},41179:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(27279),n=({children:i,...g})=>{const u=e.Children.toArray(i).map(y=>e.isValidElement(y)?e.cloneElement(y,{"aria-rowindex":1}):y);return o.jsx("thead",{...g,children:u})};r.RawThead=n},26014:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(27279),n=t(44747),i=({children:g,...u})=>{const y=e.Children.toArray(g).map((s,T)=>e.isValidElement(s)?e.cloneElement(s,{"aria-colindex":T+1,coords:{col:T+1,row:u["aria-rowindex"]}}):s);return o.jsx(n.Box,{as:"tr",...u,children:y})};r.RawTr=i},9609:(P,r)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const t=o=>{const e=o.querySelector('[tabindex="0"]');e&&e.focus()};r.focusFocusable=t},95773:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(27279),n=t(72450),i=t(10547),g=t(35725),y=(b=>b&&b.__esModule?b:{default:b})(n),s={size:!0,spacing:!0},T=y.default(g.Flex).withConfig({shouldForwardProp:(b,C)=>!s[b]&&C(b)})`
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: ${({theme:b,spacing:C})=>i.extractStyleFromTheme(b.spaces,C,void 0)};
  }
`,M=y.default(g.Flex).withConfig({shouldForwardProp:(b,C)=>!s[b]&&C(b)})`
  & > * {
    margin-left: 0;
    margin-right: 0;
  }

  & > * + * {
    margin-left: ${({theme:b,spacing:C})=>i.extractStyleFromTheme(b.spaces,C,void 0)};
  }
`,x=e.forwardRef(({horizontal:b=!1,spacing:C,size:h,...E},l)=>(h&&console.warn('Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'),b?o.jsx(M,{ref:l,spacing:C||h,...E}):o.jsx(T,{direction:"column",alignItems:"stretch",ref:l,spacing:C||h,...E})));x.displayName="Stack",r.Stack=x},58892:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(95773);r.Stack=o.Stack},34922:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(72450),n=t(24986),i=t(35725),u=(x=>x&&x.__esModule?x:{default:x})(e),y=u.default(n.RawTd)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:x})=>x.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,s=u.default.span`
  svg {
    height: ${4/16}rem;
  }
`,T=({children:x,action:b,...C})=>o.jsx(y,{as:n.RawTh,...C,children:o.jsxs(i.Flex,{children:[x,o.jsx(s,{children:b})]})}),M=({children:x,...b})=>o.jsx(y,{...b,children:x});r.Td=M,r.Th=T},82079:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(72450),n=t(44747),i=t(19658),g=t(35725),u=t(11880),s=(b=>b&&b.__esModule?b:{default:b})(e),T=s.default(n.Box)`
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
    fill: ${({theme:b})=>b.colors.primary600};
  }
`,M=s.default(n.Box)`
  border-radius: 0 0 ${({theme:b})=>b.borderRadius} ${({theme:b})=>b.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,x=({children:b,icon:C,...h})=>o.jsxs("div",{children:[o.jsx(i.Divider,{}),o.jsx(M,{as:"button",background:"primary100",padding:5,...h,children:o.jsxs(g.Flex,{children:[o.jsx(T,{"aria-hidden":!0,background:"primary200",children:C}),o.jsx(n.Box,{paddingLeft:3,children:o.jsx(u.Typography,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:b})})]})})]});r.TFooter=x},31661:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(27279),n=t(72450),i=t(56094),g=t(44747),y=(C=>C&&C.__esModule?C:{default:C})(n),s=y.default(g.Box)`
  overflow: hidden;
  border: 1px solid ${({theme:C})=>C.colors.neutral150};
`,T=y.default(i.RawTable)`
  width: 100%;
  white-space: nowrap;
`,M=y.default(g.Box)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:C})=>C==="both"||C==="left"?"''":void 0};
    box-shadow: ${({theme:C})=>C.shadows.tableShadow};
    width: ${({theme:C})=>C.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:C})=>C==="both"||C==="right"?"''":void 0};
    box-shadow: ${({theme:C})=>C.shadows.tableShadow};
    width: ${({theme:C})=>C.spaces[2]};
    right: 0;
    top: 0;
  }
`,x=y.default(g.Box)`
  overflow-x: auto;
`,b=({footer:C,...h})=>{const E=e.useRef(null),[l,f]=e.useState(),R=$=>{const O=$.target.scrollWidth-$.target.clientWidth;if($.target.scrollLeft===0){f("right");return}if($.target.scrollLeft===O){f("left");return}$.target.scrollLeft>0&&f("both")};return e.useEffect(()=>{E.current.scrollWidth>E.current.clientWidth&&f("right")},[]),o.jsxs(s,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[o.jsx(M,{overflowing:l,position:"relative",children:o.jsx(x,{ref:E,onScroll:R,paddingLeft:6,paddingRight:6,children:o.jsx(T,{...h})})}),C]})};r.Table=b},73314:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(72450),n=t(6890),u=(s=>s&&s.__esModule?s:{default:s})(e).default(n.RawTbody)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,y=({children:s,...T})=>o.jsx(u,{...T,children:s});r.Tbody=y},79821:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(72450),n=t(41179),u=(s=>s&&s.__esModule?s:{default:s})(e).default(n.RawThead)`
  border-bottom: 1px solid ${({theme:s})=>s.colors.neutral150};
`,y=({children:s,...T})=>o.jsx(u,{...T,children:s});r.Thead=y},45286:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(72450),n=t(26014),u=(s=>s&&s.__esModule?s:{default:s})(e).default(n.RawTr)`
  border-bottom: 1px solid ${({theme:s})=>s.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:s})=>s.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:s})=>s.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,y=s=>o.jsx(u,{...s});r.Tr=y},22493:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(31661),e=t(73314),n=t(79821),i=t(45286),g=t(34922),u=t(82079);r.Table=o.Table,r.Tbody=e.Tbody,r.Thead=n.Thead,r.Tr=i.Tr,r.Td=g.Td,r.Th=g.Th,r.TFooter=u.TFooter},80652:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(27279),n=t(71434),i=t(72450),g=t(5529),u=t(35725),y=t(11880),s=l=>l&&l.__esModule?l:{default:l};function T(l){if(l&&l.__esModule)return l;const f=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(l){for(const R in l)if(R!=="default"){const $=Object.getOwnPropertyDescriptor(l,R);Object.defineProperty(f,R,$.get?$:{enumerable:!0,get:()=>l[R]})}}return f.default=l,Object.freeze(f)}const M=T(e),x=s(i),b=i.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,C=x.default.div`
  animation: ${b} 2s infinite linear;
  will-change: transform;
`,h=x.default(u.Flex)`
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({theme:l})=>l.colors.neutral600};
    }
  }

  svg path {
    fill: ${({theme:l})=>l.colors.primary600};
  }

  ${g.buttonFocusStyle}
`,E=M.forwardRef(({children:l,startIcon:f,endIcon:R,onClick:$,disabled:O=!1,loading:d=!1,...c},m)=>{const k=$&&!O?$:void 0,F=O||d;return o.jsxs(h,{ref:m,"aria-disabled":F,onClick:k,as:"button",type:"button",background:"transparent",gap:2,...c,children:[d?o.jsx(C,{"aria-hidden":!0,children:o.jsx(n.Loader,{})}):f,o.jsx(y.Typography,{variant:"pi",textColor:F?"neutral600":"primary600",children:l}),R]})});E.displayName="TextButton",r.TextButton=E},15901:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(74081),e=t(27279),n=t(54673),i=t(59817),g=t(35725),u=t(69803),y=t(20601),s=t(63391),T=t(28518),M=e.forwardRef(({name:x,hint:b,error:C,label:h,labelAction:E,id:l,required:f,...R},$)=>{const O=n.useId(l),d=e.useRef(null),c=e.useRef(null);if(!h&&!R["aria-label"])throw new Error('The TextInput component needs a "label" or an "aria-label" props');return e.useImperativeHandle($,()=>({input:c,inputWrapperRef:d}),[]),o.jsx("div",{ref:d,children:o.jsx(i.Field,{name:x,hint:b,error:C,id:O,required:f,children:o.jsxs(g.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[h&&o.jsx(u.FieldLabel,{action:E,children:h}),o.jsx(y.FieldInput,{ref:c,...R}),o.jsx(s.FieldHint,{}),o.jsx(T.FieldError,{})]})})})});M.displayName="TextInput",r.TextInput=M},83067:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(15901);r.TextInput=o.TextInput},70711:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(70321);r.VisuallyHidden=o.VisuallyHidden},43809:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(27279),e=n=>{const i=o.useRef(null),[g,u]=o.useState(!0),y=([s])=>{u(s.isIntersecting)};return o.useEffect(()=>{const s=i.current,T=new IntersectionObserver(y,n);return s&&T.observe(i.current),()=>{s&&T.disconnect()}},[i,n]),[i,g]};r.useElementOnScreen=e},29381:(P,r,t)=>{"use strict";Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const o=t(27279),e=t(81906),n=(i,g)=>{const u=e.useCallbackRef(g);o.useLayoutEffect(()=>{const y=new ResizeObserver(u);return Array.isArray(i)?i.forEach(s=>{s.current&&y.observe(s.current)}):i.current&&y.observe(i.current),()=>{y.disconnect()}},[i,u])};r.useResizeObserver=n},29019:(P,r,t)=>{"use strict";const o=t(74081),e=i=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:o.jsx("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),n=e;P.exports=n},65713:(P,r,t)=>{"use strict";const o=t(74081),e=i=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:o.jsx("path",{fill:"#212134",d:"M20.727 2.97a.2.2 0 0 1 .286 0l2.85 2.89a.2.2 0 0 1 0 .28L9.554 20.854a.2.2 0 0 1-.285 0l-9.13-9.243a.2.2 0 0 1 0-.281l2.85-2.892a.2.2 0 0 1 .284 0l6.14 6.209L20.726 2.97Z"})}),n=e;P.exports=n},76229:(P,r,t)=>{"use strict";const o=t(74081),e=i=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:[o.jsx("path",{fill:"#212134",d:"M15.2 12a3.2 3.2 0 1 1-6.399 0 3.2 3.2 0 0 1 6.4 0Z"}),o.jsx("path",{fill:"#212134",fillRule:"evenodd",d:"M18.78 6.103c1.923 1.243 3.64 2.981 4.963 5.027a1.61 1.61 0 0 1 .005 1.738c-1.318 2.063-3.031 3.807-4.954 5.046-2.12 1.364-4.475 2.086-6.81 2.086-2.388 0-4.683-.7-6.816-2.082-1.894-1.225-3.593-2.966-4.914-5.032a1.596 1.596 0 0 1 .032-1.777C1.89 8.811 3.734 7.027 5.77 5.805 7.767 4.608 9.858 4 11.984 4c2.317 0 4.667.728 6.795 2.103Zm-9.446 9.888a4.8 4.8 0 1 0 5.334-7.982 4.8 4.8 0 0 0-5.334 7.982Z",clipRule:"evenodd"})]}),n=e;P.exports=n},89867:(P,r,t)=>{"use strict";const o=t(74081),e=i=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:o.jsx("path",{fill:"#212134",fillRule:"evenodd",d:"M23.604 3.514c.528.528.528 1.36 0 1.887l-2.622 2.607-4.99-4.99L18.6.396a1.322 1.322 0 0 1 1.887 0l3.118 3.118ZM0 24v-4.99l14.2-14.2 4.99 4.99L4.99 24H0Z",clipRule:"evenodd"})}),n=e;P.exports=n},37579:(P,r,t)=>{"use strict";const o=t(74081),e=i=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:o.jsx("path",{fill:"#212134",d:"M24 13.604a.3.3 0 0 1-.3.3h-9.795V23.7a.3.3 0 0 1-.3.3h-3.21a.3.3 0 0 1-.3-.3v-9.795H.3a.3.3 0 0 1-.3-.3v-3.21a.3.3 0 0 1 .3-.3h9.795V.3a.3.3 0 0 1 .3-.3h3.21a.3.3 0 0 1 .3.3v9.795H23.7a.3.3 0 0 1 .3.3v3.21Z"})}),n=e;P.exports=n},8834:(P,r,t)=>{"use strict";const o=t(74081),e=i=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:o.jsx("path",{fill:"#32324D",d:"M3.236 6.149a.2.2 0 0 0-.197.233L6 24h12l2.96-17.618a.2.2 0 0 0-.196-.233H3.236ZM21.8 1.983c.11 0 .2.09.2.2v1.584a.2.2 0 0 1-.2.2H2.2a.2.2 0 0 1-.2-.2V2.183c0-.11.09-.2.2-.2h5.511c.9 0 1.631-1.09 1.631-1.983h5.316c0 .894.73 1.983 1.631 1.983H21.8Z"})}),n=e;P.exports=n},76994:(P,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});function t(d){return typeof d=="object"&&!("toString"in d)?Object.prototype.toString.call(d).slice(8,-1):d}var o=typeof process=="object"&&!0;function e(d,c){if(!d)throw o?new Error("Invariant failed"):new Error(c())}r.invariant=e;var n=Object.prototype.hasOwnProperty,i=Array.prototype.splice,g=Object.prototype.toString;function u(d){return g.call(d).slice(8,-1)}var y=Object.assign||function(d,c){return s(c).forEach(function(m){n.call(c,m)&&(d[m]=c[m])}),d},s=typeof Object.getOwnPropertySymbols=="function"?function(d){return Object.keys(d).concat(Object.getOwnPropertySymbols(d))}:function(d){return Object.keys(d)};function T(d){return Array.isArray(d)?y(d.constructor(d.length),d):u(d)==="Map"?new Map(d):u(d)==="Set"?new Set(d):d&&typeof d=="object"?y(Object.create(Object.getPrototypeOf(d)),d):d}var M=function(){function d(){this.commands=y({},x),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(c,m){return c===m},this.update.newContext=function(){return new d().update}}return Object.defineProperty(d.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(c){this.update.isEquals=c},enumerable:!0,configurable:!0}),d.prototype.extend=function(c,m){this.commands[c]=m},d.prototype.update=function(c,m){var k=this,F=typeof m=="function"?{$apply:m}:m;Array.isArray(c)&&Array.isArray(F)||e(!Array.isArray(F),function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."}),e(typeof F=="object"&&F!==null,function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the "+("following commands: "+Object.keys(k.commands).join(", ")+".")});var L=c;return s(F).forEach(function(_){if(n.call(k.commands,_)){var ge=c===L;L=k.commands[_](F[_],L,F,c),ge&&k.isEquals(L,c)&&(L=c)}else{var we=u(c)==="Map"?k.update(c.get(_),F[_]):k.update(c[_],F[_]),te=u(L)==="Map"?L.get(_):L[_];(!k.isEquals(we,te)||typeof we>"u"&&!n.call(c,_))&&(L===c&&(L=T(c)),u(L)==="Map"?L.set(_,we):L[_]=we)}}),L},d}();r.Context=M;var x={$push:function(d,c,m){return C(c,m,"$push"),d.length?c.concat(d):c},$unshift:function(d,c,m){return C(c,m,"$unshift"),d.length?d.concat(c):c},$splice:function(d,c,m,k){return E(c,m),d.forEach(function(F){l(F),c===k&&F.length&&(c=T(k)),i.apply(c,F)}),c},$set:function(d,c,m){return R(m),d},$toggle:function(d,c){h(d,"$toggle");var m=d.length?T(c):c;return d.forEach(function(k){m[k]=!c[k]}),m},$unset:function(d,c,m,k){return h(d,"$unset"),d.forEach(function(F){Object.hasOwnProperty.call(c,F)&&(c===k&&(c=T(k)),delete c[F])}),c},$add:function(d,c,m,k){return O(c,"$add"),h(d,"$add"),u(c)==="Map"?d.forEach(function(F){var L=F[0],_=F[1];c===k&&c.get(L)!==_&&(c=T(k)),c.set(L,_)}):d.forEach(function(F){c===k&&!c.has(F)&&(c=T(k)),c.add(F)}),c},$remove:function(d,c,m,k){return O(c,"$remove"),h(d,"$remove"),d.forEach(function(F){c===k&&c.has(F)&&(c=T(k)),c.delete(F)}),c},$merge:function(d,c,m,k){return $(c,d),s(d).forEach(function(F){d[F]!==c[F]&&(c===k&&(c=T(k)),c[F]=d[F])}),c},$apply:function(d,c){return f(d),d(c)}},b=new M;r.isEquals=b.update.isEquals,r.extend=b.extend,r.default=b.update,r.default.default=P.exports=y(r.default,r);function C(d,c,m){e(Array.isArray(d),function(){return"update(): expected target of "+t(m)+" to be an array; got "+t(d)+"."}),h(c[m],m)}function h(d,c){e(Array.isArray(d),function(){return"update(): expected spec of "+t(c)+" to be an array; got "+t(d)+". Did you forget to wrap your parameter in an array?"})}function E(d,c){e(Array.isArray(d),function(){return"Expected $splice target to be an array; got "+t(d)}),l(c.$splice)}function l(d){e(Array.isArray(d),function(){return"update(): expected spec of $splice to be an array of arrays; got "+t(d)+". Did you forget to wrap your parameters in an array?"})}function f(d){e(typeof d=="function",function(){return"update(): expected spec of $apply to be a function; got "+t(d)+"."})}function R(d){e(Object.keys(d).length===1,function(){return"Cannot have more than one key in an object with $set"})}function $(d,c){e(c&&typeof c=="object",function(){return"update(): $merge expects a spec of type 'object'; got "+t(c)}),e(d&&typeof d=="object",function(){return"update(): $merge expects a target of type 'object'; got "+t(d)})}function O(d,c){var m=u(d);e(m==="Map"||m==="Set",function(){return"update(): "+t(c)+" expects a target of type Set or Map; got "+t(m)})}},8018:(P,r,t)=>{var o=t(74734),e=1,n=4;function i(g,u){return u=typeof u=="function"?u:void 0,o(g,e|n,u)}P.exports=i},84447:(P,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>F});var o=t(74081),e=t(27279),n=t(51447),i=t(47665),g=t(44436),u=t.n(g),y=t(93415),s=t(68412),T=t(83),M=t(39708),x=t(10701),b=t(48102),C=t(94305),h=t(50568),E=t(83067),l=t(36938),f=t(30984),R=t(91561),$=t(5466);const O=$.default.create({baseURL:""});O.interceptors.request.use(async L=>(L.headers={Authorization:`Bearer ${i.I8.getToken()}`,Accept:"application/json","Content-Type":"application/json"},L),L=>{Promise.reject(L)}),O.interceptors.response.use(L=>L,L=>{throw L.response?.status===401&&(i.I8.clearAppStorage(),window.location.reload()),L});const d=O,c=()=>{const[L,_]=(0,e.useState)({creds:{clientID:"",clientSecret:"",redirectURL:"",defaultScopes:""}}),[ge,we]=(0,e.useState)(!1),[te,Ke]=(0,e.useState)(!0);function se(V){_({creds:{clientID:V,clientSecret:L.creds.clientSecret,redirectURL:L.creds.redirectURL}})}function et(V){_({creds:{clientID:L.creds.clientID,clientSecret:V,redirectURL:L.creds.redirectURL}})}function lt(V){_({creds:{clientID:L.creds.clientID,clientSecret:L.creds.clientSecret,redirectURL:V}})}function mt(V){_({creds:{clientID:L.creds.clientID,clientSecret:L.creds.clientSecret,redirectURL:L.creds.redirectURL,defaultScopes:V}})}async function tt(){try{const{data:V}=await d.get(`/${u()}/credentials`);_({creds:{clientID:V.google_client_id?V.google_client_id:"",clientSecret:V.google_client_secret?V.google_client_secret:"",redirectURL:V.google_redirect_url?V.google_redirect_url:"",defaultScopes:V.google_scopes?V.google_scopes:""}}),V&&V.google_client_id&&V.google_client_secret&&V.google_redirect_url&&V.google_scopes?Ke(!1):Ke(!0)}catch(V){console.log(V),_({creds:{clientID:"",clientSecret:"",redirectURL:"",defaultScopes:""}}),Ke(!0)}}async function it(V){V.preventDefault(),V.stopPropagation(),we(!0);try{await d.post(`/${u()}/credentials/add`,{google_client_id:L.creds.clientID,google_client_secret:L.creds.clientSecret,google_redirect_url:L.creds.redirectURL,google_scopes:L.creds.defaultScopes}),await tt(),we(!1)}catch(Je){we(!1),console.log(Je)}}function ze(V){V.preventDefault(),V.stopPropagation(),Ke(!0)}return(0,e.useEffect)(()=>{tt()},[]),(0,o.jsxs)("div",{children:[(0,o.jsx)(y.x,{padding:8,background:"primary100",children:(0,o.jsx)(C.BaseHeaderLayout,{navigationAction:(0,o.jsx)(s.r,{isExternal:!0,href:"https://arjusmoon.com",children:"Arju S Moon."}),primaryAction:(0,o.jsx)(T.Q,{startIcon:(0,o.jsx)(l.Z,{}),size:"L",variant:"default",href:"https://console.cloud.google.com/projectcreate?previousPage=%2Fcloud-resource-manager%3Fproject%3D%26folder%3D%26organizationId%3D",children:"Create Google Project"}),title:"Google Authenticator",subtitle:"By Arju S Moon.",as:"h2"})}),(0,o.jsxs)(y.x,{padding:8,background:"neutral100",children:[(0,o.jsx)(y.x,{padding:4,children:(0,o.jsx)(h.Typography,{variant:"beta",children:"Add/Update your Google Project Details."})}),(0,o.jsxs)(C.GridLayout,{children:[(0,o.jsx)(y.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,o.jsx)(E.TextInput,{required:!0,disabled:!te,placeholder:"This is a content placeholder",label:"Google Client ID",name:"content",hint:"Ends with apps.googleusercontent.com",onChange:V=>se(V.target.value),value:L.creds.clientID})}),(0,o.jsx)(y.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,o.jsx)(E.TextInput,{required:!0,type:"password",disabled:!te,placeholder:"This is a content placeholder",label:"Google Client Secret",name:"content",hint:"Available in your google project",onChange:V=>et(V.target.value),value:L.creds.clientSecret})}),(0,o.jsx)(y.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,o.jsx)(E.TextInput,{required:!0,disabled:!te,placeholder:"This is a content placeholder",label:"Redirect URL",name:"content",hint:"Redirect URL mentioned in the Google Project",onChange:V=>lt(V.target.value),value:L.creds.redirectURL})})]}),(0,o.jsx)(C.GridLayout,{children:(0,o.jsx)(y.x,{padding:4,marginTop:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:(0,o.jsx)(M.g,{required:!0,disabled:!te,placeholder:"",label:"Default Scopes",name:"content",hint:'{"scopes":["https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/userinfo.profile"]}',onChange:V=>mt(V.target.value),value:L.creds.defaultScopes})})}),(0,o.jsxs)(x.k,{marginTop:4,justifyContent:"space-between",children:[(0,o.jsx)(b.z,{disabled:te,onClick:ze,size:"L",endIcon:(0,o.jsx)(f.Z,{}),variant:"secondary",children:"Edit"}),(0,o.jsx)(b.z,{loading:ge,onClick:it,size:"L",endIcon:(0,o.jsx)(R.Z,{}),variant:"default",children:"Save Credentials"})]})]})]})},m=(0,e.memo)(c),F=()=>(0,o.jsx)("div",{children:(0,o.jsxs)(n.rs,{children:[(0,o.jsx)(n.AW,{path:`/plugins/${u()}`,component:m,exact:!0}),(0,o.jsx)(n.AW,{component:i.NotFound})]})})},9395:(P,r,t)=>{"use strict";t.d(r,{Z:()=>n});var o=t(47665);const n={getConfig:async()=>await(0,o.WY)("/cookie-manager/config",{method:"GET"}),updateConfig:async i=>await(0,o.WY)("/cookie-manager/config/update",{method:"PUT",body:{data:i}}),getLocales:async()=>await(0,o.WY)("/cookie-manager/locales",{method:"GET"}),getCookies:async(i=null)=>await(0,o.WY)(`/cookie-manager/cookie/find${i?`?locale=${i}`:""}`,{method:"GET"}),createCookie:async i=>await(0,o.WY)("/cookie-manager/cookie/create",{method:"POST",body:{data:i}}),updateCookie:async(i,g)=>await(0,o.WY)(`/cookie-manager/cookie/update/${i}`,{method:"PUT",body:{data:g}}),deleteCookie:async i=>await(0,o.WY)(`/cookie-manager/cookie/delete/${i}`,{method:"DELETE"}),getCategories:async(i=null)=>await(0,o.WY)(`/cookie-manager/cookie-category/find${i?`?locale=${i}`:""}`,{method:"GET"}),createCategory:async i=>await(0,o.WY)("/cookie-manager/cookie-category/create",{method:"POST",body:{data:i}}),updateCategory:async(i,g)=>await(0,o.WY)(`/cookie-manager/cookie-category/update/${i}`,{method:"PUT",body:{data:g}}),deleteCategory:async i=>await(0,o.WY)(`/cookie-manager/cookie-category/delete/${i}`,{method:"DELETE"}),getPopups:async(i=null)=>await(0,o.WY)(`/cookie-manager/cookie-popup/find${i?`?locale=${i}`:""}`,{method:"GET"}),createPopup:async i=>await(0,o.WY)("/cookie-manager/cookie-popup/create",{method:"POST",body:{data:i}}),updatePopup:async(i,g)=>await(0,o.WY)(`/cookie-manager/cookie-popup/update/${i}`,{method:"PUT",body:{data:g}}),deletePopup:async i=>await(0,o.WY)(`/cookie-manager/cookie-popup/delete/${i}`,{method:"DELETE"})}},20982:(P,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>en});var o={};t.r(o);var e=t(30772),n=t(27279),i=t(51447),g=t(47665),u=t(84982),y=t(61020),s=t(70627),T=t.n(s),M=t(72450),x=t(24696);const b=(0,M.default)(x.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:a})=>a?"auto 1fr":"1fr"};
`,C=(0,M.default)(x.x)`
  overflow-x: hidden;
`,h=({sideNav:a,children:p})=>n.createElement(b,{hasSideNav:Boolean(a)},a,n.createElement(C,{paddingBottom:10},p));h.defaultProps={sideNav:void 0},h.propTypes={children:s.node.isRequired,sideNav:s.node};var E=t(69222),l=t(79879),f=t(95066),R=t(10411),$=t(56527);const O={Keyboard:"down:keyboard",Mouse:"down:mouse"},d={Keyboard:"up:keyboard",Mouse:"up:mouse"},c=a=>{const p=(0,n.useRef)(null),v=(0,n.useRef)(null),S=(0,n.useRef)();return a&&(S.current=a),(0,n.useEffect)(()=>{!v.current||a||(S.current===O.Keyboard||S.current===d.Keyboard)&&p.current.focus()},[a]),(0,n.useEffect)(()=>{v.current=!0},[]),p};var m=t(25165);const k=M.default.button`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  background: transparent;
  border: none;

  // The focus state is moved to the parent thanks to :focus-within
  &:focus {
    outline: none;
  }

  &[data-disabled] {
    cursor: not-allowed;
  }
`,F=(0,n.forwardRef)(({labelledBy:a,expanded:p,onTrigger:v,disabled:S,...j},B)=>{const D=A=>{if(!S)switch(A.key){case m.y.DOWN:case m.y.SPACE:case m.y.ENTER:{A.preventDefault(),v(O.Keyboard);break}case m.y.UP:{A.preventDefault(),v(d.Keyboard);break}}};return n.createElement(k,{ref:B,role:"combobox","aria-labelledby":a,"aria-haspopup":"listbox","aria-expanded":p,onKeyDown:D,disabled:S,"data-disabled":S?"":void 0,type:"button",...j})});F.displayName="SelectButton",F.defaultProps={expanded:!1,disabled:!1},F.propTypes={disabled:s.bool,expanded:s.bool,labelledBy:s.string.isRequired,onTrigger:s.func.isRequired};var L=t(54957);const _=(a,p)=>{a.setAttribute("aria-activedescendant",p.getAttribute("id")),a.querySelectorAll('[role="option"]').forEach(v=>v.classList.remove("is-focused")),p.classList.add("is-focused"),(0,L.Z)(p,{scrollMode:"if-needed",block:"nearest",inline:"nearest"}).forEach(({el:v,top:S,left:j})=>{v.scrollTop=S,v.scrollLeft=j})},ge=a=>{const p=a.getAttribute("aria-activedescendant");return a.querySelector(`#${p}`)},we=a=>{const p=(0,n.useRef)(null);return(0,n.useEffect)(()=>{p.current.focus()},[]),(0,n.useEffect)(()=>{if(!p.current)return;const v=p.current.querySelector('[aria-selected="true"]'),S=p.current.querySelectorAll('[role="option"]');let j;v?j=v:a===d.Keyboard?j=S[S.length-1]:a===O.Keyboard&&(j=S[0]),j&&(a===d.Keyboard||a===O.Keyboard)&&_(p.current,j)},[]),p};var te=t(4005);const Ke=({labelledBy:a,onSelectItem:p,children:v,multi:S,onEscape:j,expanded:B})=>{const D=we(B),A=I=>{switch(I.key){case m.y.ESCAPE:{I.stopPropagation(),j();break}case m.y.DOWN:{I.preventDefault();const w=ge(D.current);if(!w)return;const W=w.nextSibling;if(W)_(D.current,W);else{const Y=D.current.querySelectorAll('[role="option"]')[0];_(D.current,Y)}break}case m.y.UP:{I.preventDefault();const w=ge(D.current);if(!w)return;const W=w.previousSibling;if(W)_(D.current,W);else{const Y=D.current.querySelectorAll('[role="option"]'),H=Y[Y.length-1];_(D.current,H)}break}case m.y.SPACE:case m.y.ENTER:{I.preventDefault();const w=ge(D.current);w.getAttribute("data-opt-group")?p(w.getAttribute("data-opt-group-children").split(","),w.getAttribute("data-opt-group")):p(w.getAttribute("data-strapi-value")),S||j();break}}};return n.createElement(te.k,{as:"ul",gap:1,direction:"column",alignItems:"stretch",role:"listbox","aria-labelledby":a,tabIndex:-1,ref:D,onKeyDown:A,onBlur:j,"aria-multiselectable":S},v)};Ke.defaultProps={labelledBy:void 0,multi:!1},Ke.propTypes={children:s.node.isRequired,expanded:s.oneOf([d.Keyboard,d.Mouse,O.Keyboard,O.Mouse]).isRequired,labelledBy:s.string,multi:s.bool,onEscape:s.func.isRequired,onSelectItem:s.func.isRequired};var se=t(11374);const et=({children:a,icon:p,disabled:v=!1,onClick:S,...j})=>(0,e.jsxs)(lt,{as:"button",background:v?"neutral200":"primary100",color:v?"neutral700":"primary600",paddingLeft:3,paddingRight:3,onClick:B=>{v||!S||S(B)},"aria-disabled":v,disabled:v,borderWidth:"1px",borderStyle:"solid",borderColor:v?"neutral300":"primary200",hasRadius:!0,height:`${32/16}rem`,gap:2,...j,children:[(0,e.jsx)(mt,{$disabled:v,variant:"pi",fontWeight:"bold",as:"span",children:a}),p]}),lt=(0,M.default)(te.k)`
  & > svg {
    height: ${8/16}rem;
    width: ${8/16}rem;
  }

  & > svg path {
    fill: ${({theme:a,...p})=>p["aria-disabled"]?a.colors.neutral600:a.colors.primary600};
  }
`,mt=(0,M.default)(se.Z)`
  color: inherit;
  border-right: 1px solid ${({theme:a,$disabled:p})=>p?a.colors.neutral300:a.colors.primary200};
  padding-right: ${({theme:a})=>a.spaces[2]};
`,tt=M.default.div`
  margin-bottom: ${({theme:a})=>a.spaces[1]};
`,it=(0,M.default)(et)`
  margin-left: ${({theme:a})=>a.spaces[1]};
  margin-top: ${({theme:a})=>a.spaces[1]};
`,ze=({tags:a,onRemoveTag:p,disabled:v})=>n.createElement(tt,null,n.createElement(te.k,{wrap:"wrap"},a.map(S=>n.createElement(it,{disabled:v,key:`tag-${S.value}`,icon:n.createElement(f.Z,null),onClick:()=>p(S.value),position:"relative",tabIndex:-1,zIndex:1},S.label))));ze.defaultProps={disabled:!1,tags:[]},ze.propTypes={disabled:s.bool,onRemoveTag:s.func.isRequired,tags:s.arrayOf(s.shape({label:s.string,value:s.oneOfType([s.string,s.number])}))};var V=t(63410),Je=t(57664),dt=t(16933),Bt=t(41986);const Tt=a=>a.replace(":","-");var wt=t(24887),qe=t(54320),At=t(12659),yt=t(59082);const Lt=(0,M.default)(te.k)`
  width: 100%;
`,St=({label:a,labelAction:p,id:v,children:S,customizeContent:j,placeholder:B,onChange:D,value:A,hint:I,error:w,disabled:W,clearLabel:Y,onClear:H,onReachEnd:Q,multi:N,required:ne,selectButtonTitle:ue,size:ke,startIcon:$e,withTags:Ce,...pe})=>{const le=(0,wt.M)(v),[ye,K]=(0,n.useState)(void 0),ie=c(ye),xe=(0,n.useRef)(null),ae=`${le}-label`,Ee=`${le}-content`,Ne=typeof w=="string";let Fe;if(w?Fe=`${le}-error`:I&&(Fe=`${le}-hint`),Ce&&!N)throw new Error('The "withTags" props can only be used when the "multi" prop is present');const Ue=()=>{K(void 0)},Ve=()=>{W||(H(),ie.current.focus())},He=q=>{q.preventDefault(),!W&&(q.nativeEvent.which===3||q.nativeEvent.button===2||K(O.Mouse))},Ge=(q,z=!0)=>{N?D(A.includes(q)?A.filter(J=>J!==q):[...A,q]):(D(q),z&&K(void 0))},fe=q=>{D(A.includes(q[0])?A.filter((z,J,U)=>U.indexOf(z)<0,q):[...A,...q])};let be,Me=[];const De=(q,z)=>{const J=`${le}-option-${q.props.value}`,U=N?A.includes(q.props.value):q.props.value===A;return U&&(Ce?Me.push({label:q.props.children,value:q.props.value}):be=q.props.children),(0,n.cloneElement)(q,{id:Tt(J),onClick:()=>Ge(q.props.value),selected:U,multi:N,isChild:z})},Qe=n.Children.toArray(S).map(q=>{if(q.type.displayName==="OptGroup"){const z=`${le}-option-${q.props.label}`,J=q.props.children.every(de=>A.includes(de.props.value)),U=!J&&q.props.children.some(de=>A.includes(de.props.value));return(0,n.cloneElement)(q,{id:Tt(z),onClick:()=>fe(q.props.children.map(de=>de.props.value)),selected:J,indeterminate:U,multi:N,children:n.Children.toArray(q.props.children).map(de=>De(de,!0)),value:q.props.label})}return De(q)});return n.createElement(V.g,{hint:I,error:w,id:le,required:ne},n.createElement(te.k,{direction:"column",alignItems:"stretch",gap:a||I||Ne?1:0},a&&n.createElement(Je.Q,{action:p},a),n.createElement($.nP,{size:ke,hasError:Boolean(w),disabled:W,ref:xe},n.createElement(F,{ref:ie,labelledBy:`${le} ${ae} ${Ee}`,"aria-describedby":Fe,"aria-required":ne,expanded:Boolean(ye),onTrigger:K,id:le,hasError:Boolean(w),disabled:W,onMouseDown:He,value:N?A.join(","):A,...pe}),n.createElement(Lt,{justifyContent:"space-between"},n.createElement(te.k,null,$e&&n.createElement(x.x,{paddingLeft:3,"aria-hidden":!0},$e),Ce&&n.createElement(ze,{tags:Me,onRemoveTag:Ge,disabled:W}),n.createElement(x.x,{paddingLeft:4,paddingRight:4},Ce?n.createElement(n.Fragment,null,!A||A.length===0?n.createElement(se.Z,{ellipsis:!0,id:Ee,textColor:"neutral600"},B):null,n.createElement(yt.T,{as:"span",id:Ee},j?j(A):be||B,A.join(", "))):n.createElement(se.Z,{ellipsis:!0,id:Ee,textColor:A?"neutral800":"neutral600"},j?j(A):be||B,N&&n.createElement(yt.T,{as:"span"},A.join(", "))))),n.createElement(te.k,null,(N&&A&&A.length||!N&&A)&&H&&n.createElement($.zb,{as:"button",type:"button",onClick:Ve,"aria-label":Y,"aria-disabled":W,title:Y},n.createElement(f.Z,null)),n.createElement($.AV,{paddingLeft:3,"aria-hidden":!0,as:"button",type:"button",onMouseDown:He,tabIndex:-1,disabled:W,title:ue},n.createElement(R.Z,null))))),n.createElement(dt.J,null),n.createElement(Bt.c,null)),ye&&n.createElement(qe.J2,{source:xe,spacing:4,fullWidth:!0,intersectionId:`select-list-intersection-${le}`,onReachEnd:Q},n.createElement(Ke,{selectId:le,labelledBy:a?ae:void 0,onEscape:Ue,expanded:ye,onSelectItem:(q,z)=>z?fe(q):Ge(q,!1),multi:N},Qe)))};St.defaultProps={"aria-label":void 0,children:[],clearLabel:"Clear",customizeContent:void 0,disabled:!1,id:void 0,label:void 0,labelAction:void 0,multi:!1,onChange(){},onClear:void 0,onReachEnd:void 0,value:void 0,hint:void 0,error:void 0,placeholder:"Select...",required:!1,selectButtonTitle:"Carret Down Button",size:"M",startIcon:void 0,withTags:!1},St.propTypes={"aria-label":s.string,children:s.oneOfType([s.arrayOf(s.node),s.node]),clearLabel:s.string,customizeContent:s.func,disabled:s.bool,error:s.oneOfType([s.string,s.bool]),hint:s.oneOfType([s.string,s.bool,s.node,s.arrayOf(s.node)]),id:s.oneOfType([s.string,s.number]),label:s.string,labelAction:s.element,multi:s.bool,onChange:s.func,onClear:s.func,onReachEnd:s.func,placeholder:s.string,required:s.bool,selectButtonTitle:s.string,size:s.oneOf(Object.keys(At.J.input)),startIcon:s.element,value:s.oneOfType([s.arrayOf(s.oneOfType([s.string,s.number])),s.string,s.number]),withTags:s.bool};var Dt=t(41473);const Et=(0,M.default)(x.x)`
  border: 1px solid
    ${({theme:a,selected:p,indeterminate:v})=>p||v?a.colors.primary600:a.colors.neutral300};
  height: 18px;
  width: 18px;
  background-color: ${({theme:a,selected:p,indeterminate:v})=>p||v?a.colors.primary600:a.colors.neutral0};

  ${({theme:a,indeterminate:p})=>p&&`&::after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${a.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

  `}

  ${({selected:a})=>a&&`  
    &::after {
      content: '';
      background: url(${Dt.Z}) no-repeat no-repeat center center;
      width: 100%;
      height: 100%;
      position: absolute;
    }

  `}
`,kt=(0,M.default)(x.x)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  &.is-focused {
    background: ${({theme:a})=>a.colors.primary100};
  }

  &:hover {
    background: ${({theme:a})=>a.colors.primary100};
  }
`,ct=({selected:a,indeterminate:p,children:v,value:S,multi:j,isChild:B,startIcon:D,...A})=>{const I=(0,n.useRef)(null);return n.createElement(kt,{as:"li",hasRadius:!0,paddingLeft:B?7:4,paddingRight:4,paddingTop:2,paddingBottom:2,ref:I,role:"option","aria-selected":a,background:"neutral0","data-strapi-value":S,...A},n.createElement(te.k,null,D&&n.createElement(x.x,{paddingRight:2,"aria-hidden":!0},D),j&&n.createElement(x.x,{paddingRight:2,"aria-hidden":!0},n.createElement(Et,{hasRadius:!0,overflow:"hidden",position:"relative",indeterminate:p,selected:a,zIndex:1})),n.createElement(se.Z,{textColor:a?"primary600":"neutral800",fontWeight:a?"bold":null},v)))};ct.defaultProps={isChild:!1,multi:!1,selected:!1,startIcon:void 0,indeterminate:!1},ct.propTypes={children:s.oneOfType([s.string,s.number]).isRequired,indeterminate:s.bool,isChild:s.bool,multi:s.bool,selected:s.bool,startIcon:s.node,value:s.oneOfType([s.string,s.number]).isRequired},ct.displayName="Option";var ot=t(3548);const Pt=(0,n.createContext)(),Ot=()=>(0,n.useContext)(Pt),xt=n.forwardRef(({id:a,initialSelectedTabIndex:p,label:v,onTabChange:S,variant:j,...B},D)=>{const A=(0,wt.M)(a),I=n.Children.toArray(B.children).find(Q=>Q.type.displayName==="Tabs");let w=p||0;I&&p===void 0&&(w=I.props.children.findIndex(Q=>!Q.props.disabled));const[W,Y]=n.useState(w===-1?0:w);n.useImperativeHandle(D,()=>({_handlers:{setSelectedTabIndex:Y}}));const H=n.useMemo(()=>({id:A,selectedTabIndex:W,selectTabIndex:Y,label:v,variant:j,onTabChange:S}),[v,S,W,A,j]);return n.createElement(Pt.Provider,{value:H},n.createElement("div",{...B}))});xt.displayName="TabGroup",xt.defaultProps={id:void 0,initialSelectedTabIndex:void 0,onTabChange(){},variant:void 0},xt.propTypes={children:s.node.isRequired,id:s.string,initialSelectedTabIndex:s.number,label:s.string.isRequired,onTabChange:s.func,variant:s.oneOf(["simple"])};const Ht=(0,M.default)(x.x)`
  border-bottom: 2px solid
    ${({theme:a,selected:p,hasError:v})=>p?v?a.colors.danger600:a.colors.primary600:"transparent"};
`,nt=(0,M.default)(x.x)`
  border-bottom: 1px solid ${({theme:a,selected:p})=>p?a.colors.neutral0:a.colors.neutral150};
`,Z=M.default.button`
  border: none;
  background: transparent;
  padding: 0;

  & + & > ${nt} {
    border-left: 1px solid ${({theme:a})=>a.colors.neutral150};
  }

  ${nt} {
    border-right: ${({theme:a,showRightBorder:p})=>p?`1px solid ${a.colors.neutral150}`:"none"};
  }

  // Hack preventing the outline from being overflow by the following tab
  outline-offset: -2px;

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,oe=(0,M.default)(te.k)`
  & > * {
    flex: 1;
  }

  & ${Z}:first-of-type ${nt} {
    border-radius: ${({theme:a})=>`${a.borderRadius} 0 0 0`};
  }

  & ${Z}:last-of-type ${nt} {
    border-radius: ${({theme:a})=>`0 ${a.borderRadius} 0 0`};
  }

  & ${Z}[aria-selected="true"] ${nt} {
    border-radius: ${({theme:a})=>`${a.borderRadius} ${a.borderRadius} 0 0`};
    border-left: none;
    border-right: none;
  }
`;var ce=t(66705);const Te=(a,p)=>{const v=(0,n.useRef)(null),S=(0,n.useRef)(null),j=(0,ce.W)(p);return(0,n.useEffect)(()=>{if(v.current){if(S.current){const B=v.current.querySelector('[tabindex="0"]');B&&(B.focus(),j(a))}S.current||(S.current=!0)}},[a,j]),v},ee=M.default.button`
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,re=({children:a,...p})=>{const{id:v,selectedTabIndex:S,selectTabIndex:j,label:B,variant:D,onTabChange:A}=Ot(),I=Te(S,A),w=n.Children.toArray(a).map((Y,H)=>(0,n.cloneElement)(Y,{id:`${v}-${H}`,index:H,selectedTabIndex:S,onTabClick:()=>j(H),variant:D})),W=Y=>{if(!w.every(H=>H.props.disabled))switch(Y.key){case m.y.RIGHT:{const H=S+1,Q=ne=>w[ne].props.disabled?ne===w.length-1?Q(0):Q(ne+1):ne,N=Q(H>=w.length?0:H);j(N);break}case m.y.LEFT:{const H=S-1,Q=ne=>w[ne].props.disabled?Q(ne===0?w.length-1:ne-1):ne,N=Q(H<0?w.length-1:H);j(N);break}case m.y.HOME:{const H=w.findIndex(Q=>!Q.props.disabled);j(H);break}case m.y.END:{const H=w.map((Q,N)=>({isDisabled:Q.props.disabled,index:N})).reverse().find(({isDisabled:Q})=>!Q);H&&j(H.index);break}}};return D==="simple"?n.createElement("div",{ref:I,role:"tablist","aria-label":B,onKeyDown:W,...p},w):n.createElement(oe,{ref:I,role:"tablist",alignItems:"flex-end","aria-label":B,onKeyDown:W,...p},w)};re.propTypes={children:s.node.isRequired};const me=({disabled:a,id:p,children:v,variant:S,hasError:j,index:B,selectedTabIndex:D,onTabClick:A,...I})=>{const w=`${p}-tab`,W=`${p}-tabpanel`,Y=B===D,H=()=>{a||A()};if(S==="simple"){let N;return j?N="danger600":Y?N="primary600":N="neutral600",n.createElement(ee,{id:w,role:"tab","aria-controls":Y?W:void 0,tabIndex:Y?0:-1,"aria-selected":Y,type:"button",onClick:H,"aria-disabled":a,...I},n.createElement(Ht,{padding:4,selected:Y,hasError:j},n.createElement(se.Z,{variant:"sigma",textColor:N},v)))}j&&console.warn('The "hasError" prop is only available for the "simple" variant.');const Q=D-1===B;return n.createElement(Z,{id:w,role:"tab",type:"button","aria-controls":Y?W:void 0,tabIndex:Y?0:-1,"aria-selected":Y,onClick:H,"aria-disabled":a,showRightBorder:Q,...I},n.createElement(nt,{padding:Y?4:3,background:Y?"neutral0":"neutral100",selected:Y},n.createElement(se.Z,{fontWeight:"bold",textColor:Y?"primary700":"neutral600"},v)))};me.defaultProps={disabled:!1,hasError:!1,id:void 0,index:void 0,onTabClick:void 0,selectedTabIndex:void 0,variant:void 0},me.propTypes={children:s.node.isRequired,disabled:s.bool,hasError:s.bool,id:s.string,index:s.number,onTabClick:s.func,selectedTabIndex:s.number,variant:s.oneOf(["simple"])};const je=({children:a,...p})=>{const{id:v,selectedTabIndex:S}=Ot(),j=n.Children.toArray(a).map((B,D)=>(0,n.cloneElement)(B,{id:`${v}-${D}`})).filter((B,D)=>D===S);return n.createElement("div",{...p},j)};je.propTypes={children:s.node.isRequired};const Ie=({id:a,...p})=>{const v=`${a}-tab`,S=`${a}-tabpanel`;return n.createElement("div",{id:S,role:"tabpanel",tabIndex:0,"aria-labelledby":v,...p})};Ie.defaultProps={id:void 0},Ie.propTypes={id:s.string};const Rt=({tagName:a,attributeName:p="",...v})=>{const S=()=>{const B=document.activeElement;return B?a?B.tagName.toLowerCase()===a:B.hasAttribute(p):!1},j=B=>a?B.querySelectorAll(a):B.querySelectorAll(`[${p}]`);return(0,e.jsx)(x.x,{onKeyDown:B=>{switch(B.key){case m.y.RIGHT:case m.y.DOWN:{if(S()){B.preventDefault();const D=document.activeElement,A=[...j(B.currentTarget)],I=A.findIndex(W=>W===D),w=I+1<A.length?I+1:0;A[w].focus()}break}case m.y.LEFT:case m.y.UP:{if(S()){B.preventDefault();const D=document.activeElement,A=[...j(B.currentTarget)],I=A.findIndex(W=>W===D),w=I-1>-1?I-1:A.length-1;A[w].focus()}break}case m.y.HOME:{S()&&(B.preventDefault(),j(B.currentTarget).item(0).focus());break}case m.y.END:{if(S()){B.preventDefault();const D=j(B.currentTarget);D.item(D.length-1).focus()}break}}},...v})},Ze=(0,M.default)(x.x)`
  border-bottom: 1px solid ${({theme:a})=>a.colors.neutral200};
  border-right: 1px solid ${({theme:a})=>a.colors.neutral200};
  border-left: 1px solid ${({theme:a})=>a.colors.neutral200};
  border-radius: 0 0 ${({theme:a})=>a.borderRadius} ${({theme:a})=>a.borderRadius};
`,_e=(0,M.default)(x.x)`
  & > * {
    & > * {
      border-radius: unset;
    }
  }

  & > * {
    border-radius: unset;
    border-right: 1px solid ${({theme:a})=>a.colors.neutral200};
    border-left: 1px solid ${({theme:a})=>a.colors.neutral200};
    border-bottom: 1px solid ${({theme:a})=>a.colors.neutral200};
  }

  & > *:first-of-type {
    border-top: 1px solid ${({theme:a})=>a.colors.neutral200};
    border-radius: ${({theme:a})=>a.borderRadius} ${({theme:a})=>a.borderRadius} 0 0;
    & > * {
      border-radius: ${({theme:a})=>a.borderRadius} ${({theme:a})=>a.borderRadius} 0 0;
    }

    &:hover {
      border-top: 1px solid ${({theme:a})=>a.colors.primary600};
    }
  }

  & [data-strapi-expanded='true'] {
    border: 1px solid ${({theme:a})=>a.colors.primary600};
  }

  ${({theme:a,footer:p})=>`
    &:not(${p}) {
      & > *:last-of-type {
        border-radius: 0 0 ${a.borderRadius} ${a.borderRadius};
      }
    }
  `}
`,We=(0,M.default)(x.x)`
  svg path {
    fill: ${({theme:a})=>a.colors.neutral500};
  }
`,ut=({children:a,footer:p,label:v,labelAction:S,error:j})=>{const B=n.Children.toArray(a).map(D=>n.cloneElement(D,{hasErrorMessage:!1}));return(0,e.jsxs)(Rt,{attributeName:"data-strapi-accordion-toggle",children:[v&&(0,e.jsxs)(te.k,{paddingBottom:1,children:[(0,e.jsx)(se.Z,{variant:"pi",as:"label",textColor:"neutral800",fontWeight:"bold",children:v}),S&&(0,e.jsx)(We,{paddingLeft:1,children:S})]}),(0,e.jsx)(_e,{footer:p,children:B}),p&&(0,e.jsx)(Ze,{children:p}),j&&(0,e.jsx)(x.x,{paddingTop:1,children:(0,e.jsx)(se.Z,{variant:"pi",textColor:"danger600",children:j})})]})},Ft=(0,M.default)(x.x)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,Zt=(0,M.default)(x.x)`
  svg {
    height: ${88/16}rem;
  }
`,pt=({icon:a,content:p,action:v,hasRadius:S,shadow:j})=>n.createElement(Ft,{padding:11,background:"neutral0",hasRadius:S,shadow:j},n.createElement(Zt,{paddingBottom:6,"aria-hidden":!0},a),n.createElement(x.x,{paddingBottom:4},n.createElement(se.Z,{variant:"delta",as:"p",textColor:"neutral600"},p)),v);pt.defaultProps={action:void 0,hasRadius:!0,shadow:"tableShadow"},pt.propTypes={action:s.node,content:s.string.isRequired,hasRadius:s.bool,icon:s.node.isRequired,shadow:s.string};var bt=t(7469),It=t(25756),X=t(4843),Re=t(39396),Le=t(83422),ft=t(15539),Oe=t(74446),Wt=t(26531),Se=t(9395);const ao=({locale:a,isMultiLocale:p})=>{const{formatMessage:v}=(0,y.Z)(),[S,j]=(0,n.useState)([]),[B,D]=(0,n.useState)([]),[A,I]=(0,n.useState)(!1),[w,W]=(0,n.useState)(!1),[Y,H]=(0,n.useState)(!1),[Q,N]=(0,n.useState)(!1),[ne,ue]=(0,n.useState)(!1),[ke,$e]=(0,n.useState)(!1),[Ce,pe]=(0,n.useState)(!1),[le,ye]=(0,n.useState)(!1),[K,ie]=(0,n.useState)(!0),[xe,ae]=(0,n.useState)(!0),[Ee,Ne]=(0,n.useState)(null),[Fe,Ue]=(0,n.useState)(null),[Ve,He]=(0,n.useState)([]),[Ge,fe]=(0,n.useState)([]),be=async()=>{ie(!0);const G=await Se.Z.getCookies(a);j(G),ie(!1)},Me=async()=>{ae(!0);const G=await Se.Z.getCategories(a);D(G),ae(!1)},De=async G=>{await Se.Z.createCookie(G),await be()},Qe=async G=>{await Se.Z.createCategory(G),await Me()},q=async G=>{await Se.Z.deleteCookie(G.id),await be()},z=async G=>{for(const Be of G)await Se.Z.deleteCookie(Be.id);await be()},J=async G=>{await Se.Z.deleteCategory(G.id),await Me()},U=async G=>{await Se.Z.updateCookie(G.id,G),await be()},de=async G=>{await Se.Z.updateCategory(G.id,G),await Me()},he=(G,Be=!1)=>{Ge.filter(rt=>rt.id===G).length>0||fe([{id:G,isExpanded:Be},...Ge])};return(0,n.useEffect)(()=>{Me(),be()},[]),(0,n.useEffect)(()=>{Me(),be()},[a]),!(!K&&!xe)?(0,e.jsx)(g.dO,{}):(0,e.jsxs)(e.Fragment,{children:[B.length===0?(0,e.jsx)(pt,{icon:(0,e.jsx)(Re.Z,{}),content:v({id:(0,u.OB)("empty.category"),defaultMessage:"You don't have any categories yet..."}),action:(0,e.jsx)(bt.z,{startIcon:(0,e.jsx)(X.Z,{}),variant:"secondary",onClick:()=>{Ne(null),$e(!0)},children:v({id:(0,u.OB)("empty.category.cta"),defaultMessage:"Add your first category"})}),shadow:"none"}):(0,e.jsx)(ut,{footer:(0,e.jsx)(It.c,{onClick:()=>{Ne(null),$e(!0)},icon:(0,e.jsx)(X.Z,{}),children:v({id:(0,u.OB)("modal.category.form.cta.create"),defaultMessage:"Create new category"})}),children:B.map((G,Be)=>{const Ye=S.filter(Pe=>Pe.category?.id===G.id);return Be===0?he(G.id,!0):he(G.id),(0,e.jsx)(Wt.Z,{cookies:Ye,setCategory:Ne,setCookies:He,category:G,expandedStates:Ge,setExpandedStates:fe,setShowCreateCookieModal:I,setShowUpdateCategoryModal:pe,setShowDeleteCategoryModal:ye,children:Ye.length>0?(0,e.jsx)(Le.Z,{cookies:Ye,setCookie:Ue,setCookies:He,category:G,setCategory:Ne,updateCookie:U,setShowCreateCookieModal:I,setShowUpdateCookieModal:W,setShowDeleteCookieModel:H,setShowDuplicateCookieModal:N,setShowDeleteAllCookieModal:ue}):(0,e.jsx)(pt,{icon:(0,e.jsx)(Re.Z,{}),content:v({id:(0,u.OB)("empty.cookie"),defaultMessage:"You don't have any cookies yet..."}),action:(0,e.jsx)(bt.z,{startIcon:(0,e.jsx)(X.Z,{}),variant:"secondary",onClick:()=>{Ne(G),I(!0)},children:v({id:(0,u.OB)("empty.cookie.cta"),defaultMessage:"Add your first cookie"})}),shadow:"none"})},Be)})}),ke&&(0,e.jsx)(Oe.vs,{setShowModal:$e,createCategory:Qe,locale:a,isMultiLocale:p}),Ce&&(0,e.jsx)(Oe.R7,{setShowModal:pe,updateCategory:de,category:Ee,isMultiLocale:p}),le&&(0,e.jsx)(Oe.u3,{setShowModal:ye,deleteCategory:J,deleteAllCookie:z,category:Ee,cookies:Ve,showModal:le}),A&&(0,e.jsx)(ft.rB,{setShowModal:I,createCookie:De,categories:B,locale:a,isMultiLocale:p,preservedCategory:Ee}),w&&(0,e.jsx)(ft.PT,{setShowModal:W,updateCookie:U,categories:B,cookie:Fe,isMultiLocale:p}),Y&&(0,e.jsx)(ft.WL,{setShowModal:H,deleteCookie:q,cookie:Fe,showModal:Y,isMultiLocale:p}),Q&&(0,e.jsx)(ft.vk,{setShowModal:N,createCookie:De,categories:B,cookie:Fe,locale:a}),ne&&(0,e.jsx)(ft.Wx,{setShowModal:ue,deleteAllCookie:z,cookies:Ve,showModal:ne})]})};var Mt=t(45345),zt=t(30803),at=t(42682),Ut=t(99790),so=t(24722),ro=t(39090),lo=t(36713),io=t(94062),vt=t(20063),co=t(43092);const uo=({popups:a,setPopup:p,setPopups:v,setShowCreatePopupModal:S,setShowUpdatePopupModal:j,setShowDeletePopupModel:B,setShowDuplicatePopupModal:D,setShowDeleteAllPopupModal:A})=>{const{formatMessage:I}=(0,y.Z)(),[w,W]=(0,n.useState)([]),[Y,H]=(0,n.useState)(!1),Q=()=>w.filter(K=>K.isSelected!==!0).length===0,N=()=>w.filter(K=>K.isSelected!==!1).length===0,ne=()=>w.filter(K=>K.isSelected===!0).length,ue=!N()&&!Q(),ke=K=>{H(!!K),W([...w.filter(ie=>(ie.isSelected=K,ie))])},$e=(K,ie)=>{const xe=[...w.filter(ae=>(ae.id===K&&(ae.isSelected=ie),ae))];v([...xe.filter(ae=>{if(ae.isSelected)return ae.popup})]),W(xe),H(!!Q())},Ce=K=>{const ie=w.filter(xe=>xe.id===K)[0];return ie?ie.isSelected:!1},pe=(K,ie)=>{const xe=K.filter(Ee=>a.filter(Ne=>Ne.id===Ee.popup.id).length===1);xe.length!==K.length&&ie([...xe])},le=K=>{w.filter(xe=>xe.id===K.id).length>0?pe(w,W):W([{id:K.id,isSelected:!1,popup:K},...w])};let ye={columns:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(at.Th,{children:(0,e.jsx)(zt.C,{onValueChange:K=>ke(K),value:Y,indeterminate:ue,"aria-label":I({id:(0,u.OB)("table.popup.actions.select.all"),defaultMessage:"Select all entries"})})}),(0,e.jsx)(at.Th,{children:(0,e.jsx)(se.Z,{variant:"sigma",children:I({id:(0,u.OB)("modal.popup.form.field.name.label"),defaultMessage:"Title"})})}),(0,e.jsx)(at.Th,{children:(0,e.jsx)(se.Z,{variant:"sigma",children:I({id:(0,u.OB)("modal.popup.form.field.description.label"),defaultMessage:"Description"})})}),(0,e.jsx)(at.Th,{children:(0,e.jsx)(yt.T,{children:I({id:(0,u.OB)("table.popup.actions"),defaultMessage:"Actions"})})})]}),rows:a.map(K=>(le(K),(0,e.jsxs)(Ut.Tr,{children:[(0,e.jsx)(at.Td,{children:(0,e.jsx)(zt.C,{onValueChange:ie=>$e(K.id,ie),"aria-label":I({id:(0,u.OB)("table.popup.actions.select.popup"),defaultMessage:"Select { title }"},{title:K.title}),value:Ce(K.id)})}),(0,e.jsx)(at.Td,{children:(0,e.jsx)(se.Z,{textColor:"neutral800",children:K.title})}),(0,e.jsx)(at.Td,{children:(0,e.jsx)(se.Z,{textColor:"neutral800",children:K.description})}),(0,e.jsx)(at.Td,{children:(0,e.jsxs)(te.k,{gap:4,style:{justifyContent:"end"},children:[(0,e.jsx)(Mt.h,{onClick:()=>{p(K),j(!0)},label:I({id:(0,u.OB)("table.popup.actions.update"),defaultMessage:"Update Popup"}),icon:(0,e.jsx)(io.Z,{})}),(0,e.jsx)(Mt.h,{onClick:()=>{p(K),D(!0)},label:I({id:(0,u.OB)("table.popup.actions.duplicate"),defaultMessage:"Duplicate Popup"}),icon:(0,e.jsx)(co.Z,{})}),(0,e.jsx)(Mt.h,{onClick:()=>{p(K),B(!0)},label:I({id:(0,u.OB)("table.popup.actions.delete"),defaultMessage:"Delete Popup"}),icon:(0,e.jsx)(vt.Z,{})})]})})]},K.id)))};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(x.x,{paddingLeft:7,paddingRight:7,paddingTop:7,paddingBottom:7,children:[(0,e.jsx)(x.x,{paddingBottom:4,children:(0,e.jsxs)(te.k,{justifyContent:"space-between",alignItems:"flex-end",children:[(0,e.jsx)(x.x,{paddingLeft:2,paddingRight:2,children:(0,e.jsxs)(te.k,{direction:"column",gap:1,alignItems:"flex-start",children:[(0,e.jsx)(se.Z,{variant:"beta",textColor:"neutral700",children:I({id:(0,u.OB)("table.popup.title"),defaultMessage:"Popups"})}),(0,e.jsx)(se.Z,{variant:"omega",textColor:"neutral600",children:I({id:(0,u.OB)("table.popup.entries"),defaultMessage:"{ amount }{ moreThanOne, select, true { entries } other { entry } found"},{amount:a.length,moreThanOne:a.length>1})})]})}),!N()&&(0,e.jsx)(x.x,{paddingLeft:4,paddingRight:4,children:(0,e.jsxs)(te.k,{gap:2,justifyContent:"flex-end",children:[(0,e.jsx)(bt.z,{variant:"danger-light",size:"L",startIcon:(0,e.jsx)(vt.Z,{}),onClick:()=>{A(!0)},children:I({id:(0,u.OB)("table.popup.actions.seleted.delete"),defaultMessage:"Delete"})}),(0,e.jsx)(se.Z,{variant:"epsilon",textColor:"neutral600",children:I({id:(0,u.OB)("table.popup.actions.seleted.label"),defaultMessage:"{ amount } selected { moreThanOne, select, true { entries } other { entry }"},{amount:ne(),moreThanOne:ne()>1})})]})})]})}),(0,e.jsxs)(so.i,{colCount:6,rowCount:10,footer:(0,e.jsx)(It.c,{onClick:()=>{S(!0)},icon:(0,e.jsx)(X.Z,{}),children:I({id:(0,u.OB)("table.popup.actions.create"),defaultMessage:"Create new Popup"})}),children:[(0,e.jsx)(ro.h,{children:(0,e.jsx)(Ut.Tr,{children:ye.columns})}),(0,e.jsx)(lo.p,{children:ye.rows})]})]})})};var Vt=t(82539),Gt=t(52845),Yt=t(51193),po=t(25160),Jt=t(14770),fo=t(5938),ho=t(6918),$t=t(32370),go=t(15244),jt=t(93415),mo=t(12881),yo=t(39708),xo=t(35250),st=t(48102),Nt=t(67621),bo=t(77099);const Xt=(0,n.forwardRef)(({name:a,hint:p,error:v,label:S,labelAction:j,id:B,required:D,...A},I)=>{const w=(0,wt.M)(B),W=(0,n.useRef)(null);if(!S&&!A["aria-label"])throw new Error('The TextInput component needs a "label" or an "aria-label" props');return(0,n.useImperativeHandle)(I,()=>({inputWrapperRef:W})),(0,e.jsx)("div",{ref:W,children:(0,e.jsx)(V.g,{name:a,hint:p,error:v,id:w,required:D,children:(0,e.jsxs)(te.k,{direction:"column",alignItems:"stretch",gap:1,children:[S&&(0,e.jsx)(Je.Q,{action:j,children:S}),(0,e.jsx)(bo._,{...A}),(0,e.jsx)(dt.J,{}),(0,e.jsx)(Bt.c,{})]})})})});Xt.displayName="TextInput";var Qt=t(59537);const vo=a=>(0,e.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,e.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,e.jsx)("path",{d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z",fill:"#F6F6F9"})]}),jo=vo,Co=M.default.span`
  > svg {
    width: ${(0,g.Q1)(24)};
    height: ${(0,g.Q1)(24)};
    > circle {
      fill: ${({theme:a})=>a.colors.primary200};
    }
    > path {
      fill: ${({theme:a})=>a.colors.primary600};
    }
  }
`,qt=({onClick:a,error:p})=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x.x,{as:"button",background:"neutral100",borderColor:p?"danger600":"neutral200",disabled:!1,hasRadius:!0,onClick:a,paddingTop:9,paddingBottom:9,width:"100%",type:"button",children:(0,e.jsxs)(ot.K,{spacing:2,children:[(0,e.jsx)(te.k,{justifyContent:"center",style:{cursor:"inherit"},children:(0,e.jsx)(Co,{children:(0,e.jsx)(jo,{})})}),(0,e.jsx)(te.k,{justifyContent:"center",children:(0,e.jsx)(se.Z,{textColor:"primary600",variant:"pi",fontWeight:"bold",children:"No entry yet. Click on the button below to add one."})})]})}),p&&(0,e.jsx)(se.Z,{textColor:"danger600",variant:"pi",children:p})]});qt.propTypes={onClick:T().func.isRequired};const To=qt;var So=t(92241),Eo=t(62710),Ro=t(98625),Mo=t(76704);const $o=a=>(0,e.jsxs)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:[(0,e.jsx)("path",{d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z",fill:"#212134"}),(0,e.jsx)("path",{d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z",fill:"#212134"}),(0,e.jsx)("path",{d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z",fill:"#212134"}),(0,e.jsx)("path",{d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z",fill:"#212134"}),(0,e.jsx)("path",{d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z",fill:"#212134"}),(0,e.jsx)("path",{d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z",fill:"#212134"}),(0,e.jsx)("path",{d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z",fill:"#212134"})]}),_t=$o,eo={COMPONENT:"component"};var Bo=t(2250);const wo=a=>(0,e.jsx)("svg",{width:"1rem",height:"1rem",viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 .889a.86.86 0 0 1-.26.625L7.615 7.736A.834.834 0 0 1 7 8a.834.834 0 0 1-.615-.264L.26 1.514A.861.861 0 0 1 0 .889c0-.24.087-.45.26-.625A.834.834 0 0 1 .875 0h12.25c.237 0 .442.088.615.264a.86.86 0 0 1 .26.625Z",fill:"#32324D"})}),Ao=wo,Lo=M.default.span`
  display: flex;
  justify-content: space-between;
  padding-left: ${({theme:a})=>a.spaces[4]};
  padding-right: ${({theme:a})=>a.spaces[4]};
  background-color: ${({theme:a})=>a.colors.neutral0};
  height: ${50/16}rem;
`,Do=(0,M.default)(Qt.A)`
  text-align: left;

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:a,expanded:p})=>p?a.colors.primary600:a.colors.neutral500};
    }
  }
`,to=(0,M.default)(Mt.h)`
  background-color: transparent;

  svg path {
    fill: ${({theme:a,expanded:p})=>p?a.colors.primary600:a.colors.neutral600};
  }
`,oo=({displayedValue:a})=>(0,e.jsxs)(Lo,{children:[(0,e.jsxs)(ot.K,{horizontal:!0,spacing:3,flex:1,children:[(0,e.jsx)(te.k,{justifyContent:"center",borderRadius:"50%",height:`${24/16}rem}`,width:`${24/16}rem}`,"aria-hidden":!0,as:"span",background:"neutral200",children:(0,e.jsx)(Bo.J,{as:Ao,width:`${8/16}rem}`,color:"neutral600"})}),(0,e.jsx)(Do,{onClick:()=>{},flex:1,children:(0,e.jsx)(se.Z,{fontWeight:"bold",textColor:"neutral700",children:a})})]}),(0,e.jsxs)(ot.K,{horizontal:!0,spacing:0,children:[(0,e.jsx)(to,{noBorder:!0,onClick:()=>{},icon:(0,e.jsx)(vt.Z,{})}),(0,e.jsx)(to,{icon:(0,e.jsx)(_t,{}),noBorder:!0})]})]});oo.propTypes={displayedValue:T().string.isRequired};const on=null,Po=M.default.span`
  display: block;
  background-color: ${({theme:a})=>a.colors.primary100};
  outline: 1px dashed ${({theme:a})=>a.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:a})=>a.spaces[6]};
`,Oo=()=>(0,e.jsx)(Po,{padding:6,background:"primary100"}),nn=null,Io={backgroundColor:"cyan"},ko=(0,M.default)(Mt.h)`
  background-color: transparent;

  svg {
    path {
      fill: ${({theme:a,expanded:p})=>p?a.colors.primary600:a.colors.neutral600};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${({theme:a})=>a.colors.primary600};
      }
    }
  }
`,Fo=M.default.span`
  display: flex;
  align-items: center;
  height: ${({theme:a})=>a.spaces[7]};
  padding: 0 ${({theme:a})=>a.spaces[3]};
  cursor: all-scroll;
  svg {
    width: ${12/16}rem;
    height: ${12/16}rem;
  }
`,Zo=({index:a,entry:p,entryKey:v,moveEntry:S,deleteEntry:j,onClickToggle:B,isDraggingSibling:D,setIsDraggingSibling:A,toggleCollapses:I,isOpen:w,error:W,children:Y})=>{const H=(0,n.useRef)(null),Q=(0,n.useRef)(null),[,N]=(0,n.useState)(!1),[,ne]=(0,Nt.useDrop)({accept:eo.COMPONENT,canDrop(){return!1},hover(pe,le){if(!Q.current)return;const ye=pe.index,K=a;if(ye===K)return;const ie=Q.current?.getBoundingClientRect(),xe=(ie.bottom-ie.top)/2,Ee=le.getClientOffset().y-ie.top;ye<K&&Ee<xe||ye>K&&Ee>xe||(S(ye,K),pe.index=K)}}),[{isDragging:ue},ke,$e]=(0,Nt.useDrag)({type:eo.COMPONENT,item:()=>(I(),{index:a}),end(){A(!1)},collect:pe=>({isDragging:pe.isDragging()})});(0,n.useEffect)(()=>{$e((0,So.rX)(),{captureDraggingState:!1})},[$e]),(0,n.useEffect)(()=>{ue&&A(!0)},[ue,A]),(0,n.useEffect)(()=>{D||N(pe=>!pe)},[D]);const Ce=p.label;return ke(H),ne(Q),(0,e.jsxs)(x.x,{ref:Q,children:[ue&&(0,e.jsx)(Oo,{}),!ue&&D&&(0,e.jsx)(oo,{displayedValue:Ce}),!ue&&!D&&(0,e.jsxs)(Eo.U,{expanded:w,onToggle:B,id:v,size:"S",style:{style:Io},error:W,children:[(0,e.jsx)(Ro.B,{title:Ce,togglePosition:"left",action:(0,e.jsxs)(ot.K,{horizontal:!0,spacing:0,children:[(0,e.jsx)(ko,{expanded:w,noBorder:!0,onClick:()=>j(v),label:"Delete",icon:(0,e.jsx)(vt.Z,{})}),(0,e.jsx)(Fo,{ref:H,role:"button",tabIndex:-1,onClick:pe=>pe.stopPropagation(),children:(0,e.jsx)(_t,{})})]})}),(0,e.jsx)(Mo.v,{children:(0,e.jsx)(x.x,{padding:3,children:Y})})]})]})};var Ae=t(82284),Wo=t(76994),No=t.n(Wo),ht=t(47853);const Ko=a=>{const p={string:{isRequired:a({id:(0,u.OB)("form.validation.string.isRequired"),defaultMessage:"Field cannot be empty"})},mixed:{isOneOf:a({id:(0,u.OB)("form.validation.mixed.isOneOf"),defaultMessage:"Must have selected one of the options"})}};return ht.Ry().shape({buttonType:ht.nK().oneOf(["Primary","Secondary","Text"],p.mixed.isOneOf),label:ht.Z_().required(p.string.isRequired)})},Ho=(0,M.default)(Qt.A)`
  height: 100%;
  width: 100%;
  border-radius: 0 0 4px 4px;
  display: flex;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 14px;
  }
`,zo=({label:a,entries:p,setEntries:v,schema:S,isValid:j,setIsValid:B,childrensValidated:D,setChildrensValidated:A,isSubmit:I,setIsSubmit:w,max:W,error:Y})=>{const{formatMessage:H}=(0,y.Z)(),[Q,N]=(0,n.useState)([]),[ne,ue]=(0,n.useState)([]),[ke,$e]=(0,n.useState)([]),[Ce]=(0,n.useState)(S.attributes||{}),[pe,le]=(0,n.useState)(""),[ye,K]=(0,n.useState)(!1),[ie,xe]=(0,n.useState)(0),ae=p?.length,Ee=ae>0,Ne=async()=>{!j&&I&&await He()},Fe=async(z,J,U)=>{const de=Object.keys(J)[0],he=await Ve(J,de),ve=(0,Ae.isNull)(he),G=ve?[]:he;A(Be=>{const Ye=(0,Ae.find)(Be,Pe=>Pe.id===z),rt=Be.map(Pe=>(Pe.id===z&&(Pe.valid=ve),Pe));return Ye?rt:[...Be,{id:z,valid:ve}]}),U(Be=>Ue(z,Be,G))},Ue=(z,J,U)=>{const de=(0,Ae.find)(J,ve=>ve.id===z),he=J.map(ve=>(ve.id===z&&(ve.value=U),ve));return de?he:[...J,{id:z,value:U}]},Ve=async(z,J)=>await Ko(H).validateAt(J,z).then(()=>null).catch(U=>U.errors),He=async()=>{if(j)B(!0);else{let z=[],J=[];for(const U of p){const de=Object.keys(Ce),he=`${U.id}.${de[0]}.0`,ve=`${U.id}.${de[1]}.1`;z=Ue(he,z,await Ve({[de[0]]:U.buttonType||[]},de[0])),J=Ue(ve,J,await Ve({[de[1]]:U.label||""},de[1]))}N(z),ue(J),$e([...z,...J])}},Ge=(0,n.useCallback)((z,J)=>{v(U=>No()(U,{$splice:[[z,1],[J,0,U[z]]]}))},[]),fe=()=>{le("")},be=()=>{const J=((0,Ae.isEmpty)(p)?0:p.reduce((he,ve)=>he.id>ve.id?he:ve).id)+1,U=Object.keys(Ce),de={id:J,buttonType:"",label:""};U.forEach((he,ve)=>{const G=`${J}.${he}.${ve}`;A(Be=>[...Be,{id:G,valid:!1}])}),N(he=>Ue(`${J}.${U[0]}.0`,he,[])),ue(he=>Ue(`${J}.${U[1]}.1`,he,[])),w(!1),B(!1),v([...p,de]),le(J),xe(ie+1)},Me=z=>{const J=ne.filter(G=>!G.id.startsWith(z)),U=Q.filter(G=>!G.id.startsWith(z)),de=D.filter(G=>!G.id.startsWith(z)),he=p.filter(G=>G.id!==z),ve=(0,Ae.last)(he)?.id;w(!1),B(!1),v([...he]),ue([...J]),N([...U]),A([...de]),le(ve)},De=z=>{const J=ke.filter(U=>U.id.startsWith(z)&&!(0,Ae.isEmpty)(U.value));return!(0,Ae.isEmpty)(J)},Qe=(z,J)=>{const U=(0,Ae.find)(z,de=>de.id===J)?.value;return(0,Ae.isArray)(U)?(0,Ae.first)(U):U};(0,n.useEffect)(()=>{Ne()},[I]),(0,n.useEffect)(()=>{const z=D.filter(J=>!!J.valid);B(z.length===D.length)},[D]);const q=(0,e.jsxs)(e.Fragment,{children:[a," (",ae,")",(0,e.jsx)(se.Z,{variant:"omega",fontWeight:"bold",style:{color:"#d02b20"},children:"*"})]});return(0,e.jsx)(Nt.DndProvider,{children:Ee?(0,e.jsx)(ut,{footer:ae<W&&(0,e.jsx)(te.k,{justifyContent:"center",height:"48px",background:"neutral10",children:(0,e.jsx)(Ho,{startIcon:(0,e.jsx)(X.Z,{}),onClick:be,children:"Add an entry"})}),error:Y,label:q,required:!0,children:p.map((z,J)=>{const U=z.id,de=pe===U,he=()=>{le(de?"":U)};return(0,e.jsx)(Zo,{entryKey:U,index:J,isDraggingSibling:ye,isOpen:de,entry:z,moveEntry:Ge,deleteEntry:Me,onClickToggle:he,setIsDraggingSibling:K,toggleCollapses:fe,error:De(U),children:Object.values(Ce).map((ve,G)=>{const Be=Object.keys(Ce)[G],Ye=`${U}.${Be}.${G}`;let rt=(0,e.jsx)(e.Fragment,{});switch(ve.type){case"enumeration":rt=(0,e.jsx)(o.SingleSelect,{label:H({id:(0,u.OB)("modal.popup.form.field.buttons.field.buttonType.label"),defaultMessage:"Type"}),required:!0,error:Qe(Q,Ye),onChange:Pe=>{v(Ct=>Ct.map(gt=>(gt.id===U&&(gt.buttonType=Pe),gt))),Fe(Ye,{[Be]:Pe},N)},value:z.buttonType,children:ve.enum.map((Pe,Ct)=>(0,e.jsx)(o.SingleSelectOption,{value:Pe,children:Pe},Ct))});break;case"string":rt=(0,e.jsx)(Xt,{label:H({id:(0,u.OB)("modal.popup.form.field.buttons.field.label.label"),defaultMessage:"Label"}),required:!0,name:"label",error:Qe(ne,Ye),onChange:Pe=>{v(Ct=>Ct.map(gt=>(gt.id===U&&(gt.label=Pe.target.value),gt))),Fe(Ye,{[Be]:Pe.target.value},ue)},value:z.label});break}return(0,e.jsx)(x.x,{padding:4,children:rt},G)})},U)})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x.x,{paddingBottom:1,children:(0,e.jsx)(se.Z,{textColor:"neutral800",variant:"pi",fontWeight:"bold",as:"label",children:q})}),(0,e.jsx)(To,{onClick:be,error:Ee?"":Y})]})})},no=(a,p,v,S)=>{const j={string:{isRequired:a({id:(0,u.OB)("form.validation.string.isRequired"),defaultMessage:"Field cannot be empty"}),isMax:a({id:(0,u.OB)("form.validation.string.isMax"),defaultMessage:"Field text is to long"})},array:{isMin:a({id:(0,u.OB)("form.validation.array.isMin"),defaultMessage:"Field has less than { amount } { moreThanOne, select, true { entries } other { entry }"},{amount:p,moreThanOne:S}),isMax:a({id:(0,u.OB)("form.validation.array.isMax"),defaultMessage:"Field has more than { amount } { moreThanOne, select, true { entries } other { entry }"},{amount:v,moreThanOne:S})}};return ht.Ry().shape({title:ht.Z_().required(j.string.isRequired).max(125,j.string.isMax),description:ht.Z_().max(2e3,j.string.isMax),buttons:ht.IX().min(1,j.array.isMin).max(3,j.array.isMax)})},Uo=JSON.parse('{"collectionName":"components_shared_cookie_button","info":{"displayName":"Cookie Button","icon":"mouse-pointer"},"options":{},"attributes":{"buttonType":{"type":"enumeration","enum":["Primary","Secondary","Text"]},"label":{"type":"string"}}}'),Kt=({setShowModal:a,crudAction:p,locale:v=null,popup:S={}})=>{const{formatMessage:j}=(0,y.Z)(),B=S.id!==void 0,D=S.id===void 0&&Object.keys(S).length>0,A=1,I=3,[w]=(0,n.useState)(S.id||null),[W,Y]=(0,n.useState)(S.title||""),[H,Q]=(0,n.useState)(S.description||""),[N,ne]=(0,n.useState)(S.buttons||[]),[ue,ke]=(0,n.useState)([]),[$e,Ce]=(0,n.useState)([]),[pe,le]=(0,n.useState)([]),[ye,K]=(0,n.useState)(S.hasCustomizability||!1),[ie,xe]=(0,n.useState)([]),[ae,Ee]=(0,n.useState)(!1),[Ne,Fe]=(0,n.useState)(!1),Ue=async fe=>{if(fe.preventDefault(),fe.stopPropagation(),Fe(!0),await Ge()&&ae){const be=(0,Ae.isEmpty)(S.buttons)?[]:S.buttons,Me={title:W,description:H,buttons:N.map(De=>be.some(Qe=>Qe.id===De.id)?De:(0,Ae.omit)(De,"id")),hasCustomizability:ye,locale:v};try{await p(w?{id:w,...Me}:{...Me}),a(!1)}catch(De){console.log("error",De)}}else Fe(!1)},Ve=async(fe,be)=>{const Me=Object.keys(fe)[0],De=await He(fe,Me),Qe=(0,Ae.isNull)(De)?[]:De;be(Qe)},He=async(fe,be)=>await no(j,A,I,N.length>0).validateAt(be,fe).then(()=>null).catch(Me=>Me.errors),Ge=async()=>{const fe={title:W,description:H,buttons:N},be=await no(j,A,I,N.length>0).isValid(fe).then(Me=>Me);return be||(ke(await He({title:W},"title")),Ce(await He({description:H},"description")),le(await He({buttons:N},"buttons"))),be};return(0,e.jsxs)(fo.P,{onClose:()=>a(!1),labelledBy:"title",as:"form",onSubmit:Ue,children:[(0,e.jsx)(ho.x,{children:(0,e.jsx)($t.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title",children:j(D?{id:(0,u.OB)("modal.popup.form.header.title.duplicate"),defaultMessage:"Duplicate Popup"}:B?{id:(0,u.OB)("modal.popup.form.header.title.update"),defaultMessage:"Update Popup"}:{id:(0,u.OB)("modal.popup.form.header.title.create"),defaultMessage:"Create new Popup"})})}),(0,e.jsxs)(go.f,{children:[(0,e.jsx)(jt.x,{children:(0,e.jsx)(mo.o,{label:j({id:(0,u.OB)("modal.popup.form.field.title.label"),defaultMessage:"Title"}),required:!0,name:"title",error:(0,Ae.first)(ue),onChange:fe=>{Ve({title:fe.target.value},ke,ue),Y(fe.target.value)},value:W})}),(0,e.jsx)(jt.x,{paddingTop:4,children:(0,e.jsx)(yo.g,{label:j({id:(0,u.OB)("modal.popup.form.field.description.label"),defaultMessage:"Description"}),name:"description",error:(0,Ae.first)($e),onChange:fe=>{Ve({description:fe.target.value},Ce,$e),Q(fe.target.value)},value:H})}),(0,e.jsx)(jt.x,{paddingTop:4,children:(0,e.jsx)(zo,{label:j({id:(0,u.OB)("modal.popup.form.field.buttons.label"),defaultMessage:"Buttons"}),entries:N,setEntries:ne,schema:Uo,isValid:ae,setIsValid:Ee,childrensValidated:ie,setChildrensValidated:xe,isSubmit:Ne,setIsSubmit:Fe,max:I,error:(0,Ae.first)(pe)})}),(0,e.jsx)(jt.x,{paddingTop:4,children:(0,e.jsxs)(te.k,{direction:"column",alignItems:"flex-start",children:[(0,e.jsx)($t.Z,{variant:"pi",fontWeight:"bold",children:j({id:(0,u.OB)("modal.popup.form.field.hasCustomizability.label"),defaultMessage:"Has Customizability"})}),(0,e.jsx)(jt.x,{paddingTop:1,children:(0,e.jsx)($t.Z,{variant:"pi",style:{color:"#666687"},children:j({id:(0,u.OB)("modal.popup.form.field.hasCustomizability.hint"),defaultMessage:"Activate when this popup contains the customizable cookies"})})}),(0,e.jsx)(jt.x,{paddingTop:1,children:(0,e.jsx)(po.r,{label:j({id:(0,u.OB)("modal.popup.form.field.hasCustomizability.label"),defaultMessage:"Has Customizability"}),name:"has-customizability",selected:ye,onChange:()=>K(fe=>!fe)})})]})})]}),(0,e.jsx)(xo.m,{startActions:(0,e.jsx)(st.z,{onClick:()=>a(!1),variant:"tertiary",children:j({id:(0,u.OB)("modal.popup.form.cta.cancel"),defaultMessage:"Cancel"})}),endActions:D?(0,e.jsx)(st.z,{type:"submit",children:j({id:(0,u.OB)("modal.popup.form.cta.duplicate"),defaultMessage:"Duplicate Popup"})}):B?(0,e.jsx)(st.z,{type:"submit",children:j({id:(0,u.OB)("modal.popup.form.cta.update"),defaultMessage:"Update Popup"})}):(0,e.jsx)(st.z,{type:"submit",children:j({id:(0,u.OB)("modal.popup.form.cta.create"),defaultMessage:"Create new Popup"})})})]})},Vo=({setShowModal:a,createPopup:p,locale:v})=>(0,e.jsx)(Kt,{setShowModal:a,crudAction:p,locale:v}),Go=({setShowModal:a,updatePopup:p,popup:v})=>(0,e.jsx)(Kt,{setShowModal:a,crudAction:p,popup:v}),Yo=({setShowModal:a,createPopup:p,popup:v,locale:S})=>(0,e.jsx)(Kt,{setShowModal:a,crudAction:p,popup:(0,Ae.omit)(v,"id"),locale:S}),Jo=({setShowModal:a,deletePopup:p,popup:v,showModal:S=!1})=>{const{formatMessage:j}=(0,y.Z)();return(0,e.jsxs)(Vt.V,{onClose:()=>a(!1),title:j({id:(0,u.OB)("modal.popup.form.header.title.delete"),defaultMessage:"Delete Popup"}),isOpen:S,children:[(0,e.jsx)(Gt.a,{icon:(0,e.jsx)(Jt.Z,{}),children:(0,e.jsx)(ot.K,{spacing:2,children:(0,e.jsx)(te.k,{justifyContent:"center",children:(0,e.jsx)($t.Z,{id:"confirm-description",children:j({id:(0,u.OB)("modal.popup.form.info.delete"),defaultMessage:"Are you sure you want to delete this?"})})})})}),(0,e.jsx)(Yt.c,{startAction:(0,e.jsx)(st.z,{onClick:()=>a(!1),variant:"tertiary",children:j({id:(0,u.OB)("modal.popup.form.cta.cancel"),defaultMessage:"Cancel"})}),endAction:(0,e.jsx)(st.z,{onClick:()=>{p(v),a(!1)},variant:"danger-light",startIcon:(0,e.jsx)(vt.Z,{}),children:j({id:(0,u.OB)("modal.popup.form.cta.delete"),defaultMessage:"Delete Popup"})})})]})},Xo=({setShowModal:a,deleteAllPopup:p,popups:v,showModal:S=!1})=>{const{formatMessage:j}=(0,y.Z)();return(0,e.jsxs)(Vt.V,{onClose:()=>a(!1),title:"Confirmation",isOpen:S,children:[(0,e.jsx)(Gt.a,{icon:(0,e.jsx)(Jt.Z,{}),children:(0,e.jsx)(ot.K,{spacing:2,children:(0,e.jsx)(te.k,{justifyContent:"center",children:(0,e.jsx)($t.Z,{id:"confirm-description",children:j({id:(0,u.OB)("modal.popup.form.info.delete"),defaultMessage:"Are you sure you want to delete this?"})})})})}),(0,e.jsx)(Yt.c,{startAction:(0,e.jsx)(st.z,{onClick:()=>a(!1),variant:"tertiary",children:j({id:(0,u.OB)("modal.popup.form.cta.cancel"),defaultMessage:"Cancel"})}),endAction:(0,e.jsx)(st.z,{onClick:()=>{p(v),a(!1)},variant:"danger-light",startIcon:(0,e.jsx)(vt.Z,{}),children:j({id:(0,u.OB)("modal.popup.form.cta.deleteAll"),defaultMessage:"Delete Popups"})})})]})},Qo=({locale:a})=>{const{formatMessage:p}=(0,y.Z)(),[v,S]=(0,n.useState)([]),[j,B]=(0,n.useState)(!1),[D,A]=(0,n.useState)(!1),[I,w]=(0,n.useState)(!1),[W,Y]=(0,n.useState)(!1),[H,Q]=(0,n.useState)(!1),[N,ne]=(0,n.useState)(!0),[ue,ke]=(0,n.useState)(null),[$e,Ce]=(0,n.useState)([]),pe=async()=>{ne(!0);const ae=await Se.Z.getPopups(a);S(ae),ne(!1)},le=async ae=>{await Se.Z.createPopup(ae),await pe()},ye=async ae=>{await Se.Z.deletePopup(ae.id),await pe()},K=async ae=>{for(const Ee of ae)await Se.Z.deletePopup(Ee.id);await pe()},ie=async ae=>{await Se.Z.updatePopup(ae.id,ae),await pe()};return(0,n.useEffect)(()=>{pe()},[]),(0,n.useEffect)(()=>{pe()},[a]),!!N?(0,e.jsx)(g.dO,{}):(0,e.jsxs)(e.Fragment,{children:[v.length>0?(0,e.jsx)(uo,{popups:v,setPopup:ke,setPopups:Ce,updatePopup:ie,setShowCreatePopupModal:B,setShowUpdatePopupModal:A,setShowDeletePopupModel:w,setShowDuplicatePopupModal:Y,setShowDeleteAllPopupModal:Q}):(0,e.jsx)(pt,{icon:(0,e.jsx)(Re.Z,{}),content:p({id:(0,u.OB)("empty.popup"),defaultMessage:"You don't have any popups yet..."}),action:(0,e.jsx)(bt.z,{startIcon:(0,e.jsx)(X.Z,{}),variant:"secondary",onClick:()=>{B(!0)},children:p({id:(0,u.OB)("empty.popup.cta"),defaultMessage:"Add your first popup"})}),shadow:"none"}),j&&(0,e.jsx)(Vo,{setShowModal:B,createPopup:le,locale:a}),D&&(0,e.jsx)(Go,{setShowModal:A,updatePopup:ie,popup:ue}),I&&(0,e.jsx)(Jo,{setShowModal:w,deletePopup:ye,popup:ue,showModal:I}),W&&(0,e.jsx)(Yo,{setShowModal:Y,createPopup:le,popup:ue,locale:a}),H&&(0,e.jsx)(Xo,{setShowModal:Q,deleteAllPopup:K,popups:$e,showModal:H})]})},qo=()=>{const{formatMessage:a}=(0,y.Z)(),[p,v]=(0,n.useState)([]),[S,j]=(0,n.useState)([]),[B,D]=(0,n.useState)(!0),[A,I]=(0,n.useState)(!0),[w,W]=(0,n.useState)(null),Y=async()=>{const N=await Se.Z.getLocales(),ne=N.filter(ue=>ue.isDefault)[0];j(N),W(ne.code),I(!1)},H=async()=>{const N=await Se.Z.getConfig();v(N),D(!1)};return(0,n.useEffect)(()=>{H(),Y()},[]),!(!B&&!A)?(0,e.jsx)(g.dO,{}):(0,e.jsxs)(h,{children:[(0,e.jsx)(E.A,{title:a({id:(0,u.OB)("header.title"),defaultMessage:"Cookie Manager"}),subtitle:a({id:(0,u.OB)("header.description"),defaultMessage:"Create and organize your cookies in one place"}),as:"h2",primaryAction:(0,e.jsx)(ot.K,{horizontal:!0,spacing:4,children:p.localization&&(0,e.jsx)(St,{id:"lang-select","aria-label":a({id:(0,u.OB)("header.cta.locale.label"),defaultMessage:"Choose the language to edit"}),value:w,defaultValue:w,onChange:W,children:S.map((N,ne)=>(0,e.jsx)(ct,{value:N.code,children:N.code.toUpperCase()},ne))})})}),(0,e.jsx)(l.D,{children:(0,e.jsxs)(xt,{id:"tabs",label:"Overview",children:[(0,e.jsxs)(re,{children:[(0,e.jsx)(me,{children:a({id:(0,u.OB)("tab.cookie"),defaultMessage:"Cookies"})}),(0,e.jsx)(me,{children:a({id:(0,u.OB)("tab.popup"),defaultMessage:"Popups"})})]}),(0,e.jsxs)(je,{children:[(0,e.jsx)(Ie,{children:(0,e.jsx)(x.x,{color:"neutral800",padding:6,background:"neutral0",children:(0,e.jsx)(ao,{locale:w,isMultiLocale:p.localization})})}),(0,e.jsx)(Ie,{children:(0,e.jsx)(x.x,{color:"neutral800",padding:6,background:"neutral0",children:(0,e.jsx)(Qo,{locale:w})})})]})]})})]})},_o=(0,n.memo)(qo),en=()=>(0,e.jsx)("div",{children:(0,e.jsxs)(i.rs,{children:[(0,e.jsx)(i.AW,{path:`/plugins/${u.aw}`,component:_o,exact:!0}),(0,e.jsx)(i.AW,{component:g.NotFound})]})})},94982:(P,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>nt});var o=t(74081),e=t(27279),n=t(51447),i=t(47665),g=t(19382),u=t.n(g),y=t(94305),s=t(29046),T=t(97487),M=t(37579),x=t.n(M),b=t(58892),C=t(51943),h=t.n(C);const E=()=>(0,o.jsxs)("svg",{width:"159",height:"88",viewBox:"0 0 159 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M134.933 17.417C137.768 17.417 140.067 19.7153 140.067 22.5503C140.067 25.3854 137.768 27.6837 134.933 27.6837H105.6C108.435 27.6837 110.733 29.9819 110.733 32.817C110.733 35.6521 108.435 37.9503 105.6 37.9503H121.733C124.568 37.9503 126.867 40.2486 126.867 43.0837C126.867 45.9187 124.568 48.217 121.733 48.217H114.272C110.698 48.217 107.8 50.5153 107.8 53.3503C107.8 55.2404 109.267 56.9515 112.2 58.4837C115.035 58.4837 117.333 60.7819 117.333 63.617C117.333 66.4521 115.035 68.7503 112.2 68.7503H51.3333C48.4982 68.7503 46.2 66.4521 46.2 63.617C46.2 60.7819 48.4982 58.4837 51.3333 58.4837H22.7333C19.8982 58.4837 17.6 56.1854 17.6 53.3503C17.6 50.5153 19.8982 48.217 22.7333 48.217H52.0666C54.9017 48.217 57.2 45.9187 57.2 43.0837C57.2 40.2486 54.9017 37.9503 52.0666 37.9503H33.7333C30.8982 37.9503 28.6 35.6521 28.6 32.817C28.6 29.9819 30.8982 27.6837 33.7333 27.6837H63.0666C60.2316 27.6837 57.9333 25.3854 57.9333 22.5503C57.9333 19.7153 60.2316 17.417 63.0666 17.417H134.933ZM134.933 37.9503C137.768 37.9503 140.067 40.2486 140.067 43.0837C140.067 45.9187 137.768 48.217 134.933 48.217C132.098 48.217 129.8 45.9187 129.8 43.0837C129.8 40.2486 132.098 37.9503 134.933 37.9503Z",fill:"#DBDBFA"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M95.826 16.6834L102.647 66.4348L103.26 71.4261C103.458 73.034 102.314 74.4976 100.706 74.695L57.7621 79.9679C56.1542 80.1653 54.6906 79.0219 54.4932 77.4139L47.8816 23.5671C47.7829 22.7631 48.3546 22.0313 49.1586 21.9326C49.1637 21.932 49.1688 21.9313 49.1739 21.9307L52.7367 21.5311L95.826 16.6834ZM55.6176 21.208L58.9814 20.8306Z",fill:"white"}),(0,o.jsx)("path",{d:"M55.6176 21.208L58.9814 20.8306M95.826 16.6834L102.647 66.4348L103.26 71.4261C103.458 73.034 102.314 74.4976 100.706 74.695L57.7621 79.9679C56.1542 80.1653 54.6906 79.0219 54.4932 77.4139L47.8816 23.5671C47.7829 22.7631 48.3546 22.0313 49.1586 21.9326C49.1637 21.932 49.1688 21.9313 49.1739 21.9307L52.7367 21.5311L95.826 16.6834Z",stroke:"#7E7BF6",strokeWidth:"2.5"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M93.9695 19.8144L100.144 64.9025L100.699 69.4258C100.878 70.8831 99.8559 72.2077 98.416 72.3845L59.9585 77.1065C58.5185 77.2833 57.2062 76.2453 57.0272 74.7881L51.0506 26.112C50.9519 25.308 51.5236 24.5762 52.3276 24.4775L57.0851 23.8934",fill:"#F0F0FF"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M97.701 7.33301H64.2927C63.7358 7.33301 63.2316 7.55873 62.8667 7.92368C62.5017 8.28862 62.276 8.79279 62.276 9.34967V65.083C62.276 65.6399 62.5017 66.1441 62.8667 66.509C63.2316 66.874 63.7358 67.0997 64.2927 67.0997H107.559C108.116 67.0997 108.62 66.874 108.985 66.509C109.35 66.1441 109.576 65.6399 109.576 65.083V19.202C109.576 18.6669 109.363 18.1537 108.985 17.7755L99.1265 7.92324C98.7484 7.54531 98.2356 7.33301 97.701 7.33301Z",fill:"white",stroke:"#7F7CFA",strokeWidth:"2.5"}),(0,o.jsx)("path",{d:"M98.026 8.17871V16.6833C98.026 17.8983 99.011 18.8833 100.226 18.8833H106.044",stroke:"#807EFA",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M70.1594 56.2838H89.2261M70.1594 18.8838H89.2261H70.1594ZM70.1594 27.6838H101.693H70.1594ZM70.1594 37.2171H101.693H70.1594ZM70.1594 46.7505H101.693H70.1594Z",stroke:"#817FFA",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]});var l=t(22493),f=t(25074),R=t(16897),$=t(50568),O=t(10084),d=t(70711),c=t(76229),m=t.n(c),k=t(89867),F=t.n(k),L=t(8834),_=t.n(L),ge=t(82284);const te=Z=>{const oe=(()=>(0,ge.startsWith)(Z,"/")?`${strapi.backendURL}${Z}`:(0,ge.startsWith)(Z,"https")||(0,ge.startsWith)(Z,"http")?Z:`${strapi.backendURL}/${Z}`)();return window.open(oe,"_blank"),window.focus()};function Ke({value:Z,checkboxID:oe,callback:ce,disabled:Te}){const[ee,re]=useState(Z);function me(){re(!ee),ce&&ce({id:oe,value:!ee})}return jsx(BaseCheckbox,{checked:ee,onChange:me,disabled:Te})}function se({value:Z,onChange:oe}){return jsx(TextInput,{type:"text","aria-label":"customAPI-input",name:"customAPI-input",onChange:oe,value:Z})}function et({customAPIData:Z,deleteCustomAPI:oe,editCustomAPI:ce,setShowCustomAPICustomizationPage:Te}){return(0,o.jsx)(f.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",padding:8,style:{marginTop:"10px"},children:(0,o.jsxs)(l.Table,{colCount:4,rowCount:10,footer:(0,o.jsx)(l.TFooter,{onClick:()=>Te(!0),icon:(0,o.jsx)(x(),{}),children:"Add a CustomAPI"}),children:[(0,o.jsx)(l.Thead,{children:(0,o.jsxs)(l.Tr,{children:[(0,o.jsx)(l.Th,{children:(0,o.jsx)($.Typography,{variant:"sigma",children:"ID"})}),(0,o.jsx)(l.Th,{children:(0,o.jsx)($.Typography,{variant:"sigma",children:"Custom API Name"})}),(0,o.jsx)(l.Th,{children:(0,o.jsx)($.Typography,{variant:"sigma",children:"Slug"})}),(0,o.jsx)(l.Th,{children:(0,o.jsx)(d.VisuallyHidden,{children:"Actions"})})]})}),(0,o.jsx)(l.Tbody,{children:Z.map(ee=>(0,o.jsxs)(l.Tr,{children:[(0,o.jsx)(l.Td,{children:(0,o.jsx)($.Typography,{textColor:"neutral800",children:ee.id})}),(0,o.jsx)(l.Td,{children:(0,o.jsx)($.Typography,{textColor:"neutral800",children:ee.name})}),(0,o.jsx)(l.Td,{children:(0,o.jsx)($.Typography,{textColor:"neutral800",children:ee.slug})}),(0,o.jsx)(l.Td,{children:(0,o.jsxs)(R.Flex,{style:{justifyContent:"end"},children:[(0,o.jsx)(O.IconButton,{onClick:re=>{re.preventDefault(),te(`/custom-api/${ee.slug}`)},noBorder:!0,icon:(0,o.jsx)(m(),{}),label:"Open target"}),(0,o.jsx)(O.IconButton,{onClick:()=>ce(ee.id),label:"Edit",noBorder:!0,icon:(0,o.jsx)(F(),{})}),(0,o.jsx)(f.Box,{paddingLeft:1,children:(0,o.jsx)(O.IconButton,{onClick:()=>oe(ee),label:"Delete",noBorder:!0,icon:(0,o.jsx)(_(),{})})})]})})]},ee.id))})]})})}var lt=t(29019),mt=t.n(lt),tt=t(65713),it=t.n(tt),ze=t(96053),V=t(8018),Je=t.n(V),dt=t(8175),Bt=t.n(dt),Tt=t(83067);const qe={getAllCustomApis:async()=>await(0,i.WY)("/custom-api/find",{method:"GET"}),getCustomApiById:async Z=>await(0,i.WY)(`/custom-api/find/${Z}`,{method:"GET"}),addCustomApi:async Z=>await(0,i.WY)("/custom-api/create",{method:"POST",body:{data:Z}}),updateCustomApi:async(Z,oe)=>await(0,i.WY)(`/custom-api/update/${Z}`,{method:"PUT",body:{data:oe}}),getAllContentTypes:async()=>await(0,i.WY)("/custom-api/content-types",{method:"GET"})};var At=t(74284);async function yt({uid:Z}){return(await qe.getAllContentTypes()).filter(Te=>Te.uid===Z)[0]}async function Lt({currentContentTypeRaw:Z,iteratedUIDs:oe,reducedEntries:ce,currentRelationalField:Te}){let ee={};oe.push(Z.uid),ee.table=Te||Z.info.displayName,ee.fields||(ee.fields=[]),ee.media||(ee.media=[]);for(const re of Object.keys(Z.attributes)){if(["relation","media"].includes(Z.attributes[re].type)||ee.fields.push({selected:re==="id",name:re}),Z.attributes[re].type==="relation"){const me=Z.attributes[re].target;if(!oe.includes(me)){const je=await yt({uid:me});await Lt({currentContentTypeRaw:je,iteratedUIDs:oe,reducedEntries:ee,currentRelationalField:re})}}Z.attributes[re].type==="media"&&ee.media.push({selected:!1,name:re})}ce.populate=ce.populate||[],ce.populate.push(ee)}var St=t(36741);function Dt({table:Z,field:oe,toggleSelectedOfField:ce}){const[Te,ee]=(0,e.useState)(oe.selected);return(0,o.jsxs)(f.Box,{children:[(0,o.jsx)(St.BaseCheckbox,{"aria-label":"fields checkbox",name:`base-checkbox-${Z}-${oe.name}`,id:`base-checkbox-${Z}-${oe.name}`,onValueChange:re=>{ee(re),ce(Z,oe.name)},value:Te,disabled:oe.name==="id"}),(0,o.jsx)("label",{style:{marginLeft:5},htmlFor:`base-checkbox-${Z}-${oe.name}`,children:oe.name})]})}var Et=t(30219);function kt({children:Z,table:oe,...ce}){const[Te,ee]=(0,e.useState)(!1);return(0,o.jsxs)(Et.Accordion,{expanded:Te,onToggle:()=>ee(re=>!re),id:"acc-1",size:"S",...ce,children:[(0,o.jsx)(Et.AccordionToggle,{title:oe}),(0,o.jsx)(Et.AccordionContent,{children:(0,o.jsx)(f.Box,{padding:3,children:Z})})]})}function ct({data:Z,toggleSelectedOfField:oe,toggleSelectedOfMedia:ce}){let{table:Te,fields:ee,populate:re,media:me}=Z;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(f.Box,{padding:8,background:"neutral100",children:(0,o.jsx)(kt,{table:Te,children:(0,o.jsxs)("ul",{children:[ee.map(je=>(0,o.jsx)(Dt,{table:Te,field:je,toggleSelectedOfField:oe},je.name)),me.map(je=>(0,o.jsx)(Dt,{table:Te,field:je,toggleSelectedOfField:ce},je.name)),re&&Array.isArray(re)&&re.length&&re.map(je=>(0,o.jsx)(ct,{data:je,toggleSelectedOfField:oe}))]})})})})}const Pt=({showCustomAPICustomizationPage:Z,setShowCustomAPICustomizationPage:oe,fetchData:ce,isLoading:Te})=>{const[ee,re]=(0,e.useState)(""),[me,je]=(0,e.useState)(""),[Ie,Rt]=(0,e.useState)(null);(0,e.useEffect)(async()=>{const Re=(await qe.getAllContentTypes()).map(Le=>({uid:Le.uid,displayName:Le.info.displayName}));Rt(Re)},[]);const[Ze,_e]=(0,e.useState)(),[We,ut]=(0,e.useState)({populate:[]});(0,e.useEffect)(async()=>{if(!Z||!Z.id)return;const X=await qe.getCustomApiById(Z.id);X&&(re(X.name),je(X.slug),_e(X.selectedContentType),ut(X.structure))},[]),(0,e.useEffect)(async()=>{if(Z&&Z.id||!Ze)return;const X=await yt({uid:Ze.uid});if(!X)return;const Re=[],Le={};await Lt({currentContentTypeRaw:Bt()(X),iteratedUIDs:Re,reducedEntries:Le}),Le&&ut(Le)},[Ze]);function Ft(X,Re,Le){return Je()(X,Oe=>{if(Oe&&Oe.table&&Oe.table===Re){const Se=[...Oe.fields].map(Xe=>Xe.name===Le?{selected:!Xe.selected,name:Xe.name}:Xe);return{...Oe,fields:Se}}})}function Zt(X,Re,Le){return Je()(X,Oe=>{if(Oe&&Oe.table&&Oe.table===Re){const Se=[...Oe.media].map(Xe=>Xe.name===Le?{selected:!Xe.selected,name:Xe.name}:Xe);return{...Oe,media:Se}}})}function pt(X,Re){const Le=Ft(We,X,Re);ut(Le)}function bt(X,Re){const Le=Zt(We,X,Re);ut(Le)}const It=async X=>{X.preventDefault(),X.stopPropagation();try{Z&&Z.id?await qe.updateCustomApi(Z.id,{name:ee,slug:me,selectedContentType:Ze,structure:We}):await qe.addCustomApi({name:ee,slug:me,selectedContentType:Ze,structure:We}),ce(),oe(!1)}catch(Re){console.log("error",Re)}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y.HeaderLayout,{id:"title",primaryAction:(0,o.jsx)(b.Stack,{horizontal:!0,spacing:2,children:(0,o.jsx)(T.Button,{startIcon:(0,o.jsx)(it(),{}),onClick:It,type:"button",disabled:!1,children:"Save"})}),title:h()("Create a custom API"),subtitle:"creating a new custom API",navigationAction:(0,o.jsx)(T.Button,{onClick:()=>{oe(!1)},startIcon:(0,o.jsx)(mt(),{}),variant:"ghost",style:{paddingLeft:0},children:"Back to list"})}),(0,o.jsxs)(y.ContentLayout,{children:[(0,o.jsx)(b.Stack,{spacing:4,children:(0,o.jsx)(f.Box,{padding:10,background:"neutral0",shadow:"filterShadow",hasRadius:!0,children:(0,o.jsxs)(ze.Grid,{gap:6,children:[(0,o.jsx)(ze.GridItem,{col:6,s:12,children:(0,o.jsx)(Tt.TextInput,{placeholder:"A descriptive name",label:"Custom API Name",name:"name",hint:"A descriptive name",onChange:X=>re(X.target.value),value:ee})}),(0,o.jsx)(ze.GridItem,{col:6,s:12,children:(0,o.jsx)(Tt.TextInput,{placeholder:"A Slug for constructing URL",label:"Slug",name:"slug",hint:me&&`Get your data here: /custom-api/${me}`,onChange:X=>je(X.target.value),value:me})})]})})}),(0,o.jsx)(f.Box,{padding:10,background:"neutral0",shadow:"filterShadow",hasRadius:!0,style:{marginTop:10},children:(0,o.jsxs)(b.Stack,{spacing:11,children:[(0,o.jsxs)($.Typography,{variant:"beta",children:["The selected Content Type is:"," ",Ze?Ze.displayName:""]}),(0,o.jsx)(At.Select,{id:"select1",label:"Choose the content-type",required:!0,placeholder:"select a content type",hint:"Relationships will automatically be mapped below",onClear:()=>_e(void 0),clearLabel:"Clear content types",value:Ze?Ze.uid:null,disabled:!!(Z&&Z.id),onChange:X=>{_e(Ie&&Ie.length&&Ie.filter(Re=>Re.uid===X)[0])},children:Ie&&Ie.length&&Ie.map(X=>(0,o.jsx)(At.Option,{value:X.uid,children:X.displayName},X.uid))})]})}),(0,o.jsx)(f.Box,{padding:10,background:"neutral0",shadow:"filterShadow",hasRadius:!0,style:{marginTop:10},children:We&&We.populate&&Array.isArray(We.populate)&&We.populate.length&&We.populate.map(X=>(0,o.jsx)(ct,{data:X,toggleSelectedOfField:pt,toggleSelectedOfMedia:bt}))})]})]})},Ot=()=>{const[Z,oe]=(0,e.useState)(!0),[ce,Te]=(0,e.useState)([]),[ee,re]=(0,e.useState)(0),[me,je]=(0,e.useState)(!1),Ie=async()=>{Z===!1&&oe(!0);const _e=await qe.getAllCustomApis();Te(_e);const We=await qe.getAllContentTypes();re(We.length),oe(!1)};(0,e.useEffect)(async()=>{Ie()},[]);async function Rt(){alert("Add functionality to delete the API")}async function Ze(_e){je({id:_e})}return Z?(0,o.jsx)(i.dO,{}):(0,o.jsxs)(y.Layout,{children:[(0,o.jsx)(y.BaseHeaderLayout,{title:"Custom API Builder Plugin",subtitle:"Visually build a custom API endpoint for any content type with fields nested any level deep",as:"h2"}),(0,o.jsxs)(y.ContentLayout,{children:[ce.length===0&&!me&&(0,o.jsx)("div",{children:(0,o.jsx)(s.EmptyStateLayout,{icon:(0,o.jsx)(E,{}),content:ee?"You don't have any custom API yet":"You require at least 1 collection type to proceed, Content-Type builder -> Create new collection type",action:(0,o.jsx)(T.Button,{onClick:()=>je({id:null}),variant:"secondary",startIcon:(0,o.jsx)(x(),{}),disabled:!ee,children:"Add your first Custom API"})})}),ce.length>0&&!me&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y.HeaderLayout,{id:"title",primaryAction:(0,o.jsx)(b.Stack,{horizontal:!0,spacing:2,children:(0,o.jsx)(T.Button,{startIcon:(0,o.jsx)(x(),{}),onClick:()=>{je({id:null})},type:"submit",disabled:!1,children:"Create new custom API"})}),title:h()(`custom  API${ce.length>1?"s":""}`),subtitle:`${ce.length} ${ce.length>1?"entries":"entry"} found`}),(0,o.jsx)(y.ContentLayout,{children:(0,o.jsx)(et,{customAPIData:ce,setShowCustomAPICustomizationPage:je,deleteCustomAPI:Rt,editCustomAPI:Ze})})]}),me&&(0,o.jsx)(Pt,{showCustomAPICustomizationPage:me,setShowCustomAPICustomizationPage:je,isLoading:Z,fetchData:Ie})]})]})},xt=(0,e.memo)(Ot),nt=()=>(0,o.jsx)("div",{children:(0,o.jsxs)(n.rs,{children:[(0,o.jsx)(n.AW,{path:`/plugins/${u()}`,component:xt,exact:!0}),(0,o.jsx)(n.AW,{component:i.NotFound})]})})},68412:(P,r,t)=>{"use strict";t.d(r,{r:()=>x});var o=t(74081),e=t(27279),n=t(48157),i=t(47533),g=t(72450),u=t(61657),y=t(32370),s=t(93415);const T=g.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:b})=>b?"none":void 0};
  color: ${({disabled:b,theme:C})=>b?C.colors.neutral600:C.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${y.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:b})=>b.colors.primary500};
  }

  &:active {
    color: ${({theme:b})=>b.colors.primary700};
  }

  ${u.BF};
`,M=(0,g.default)(s.x)`
  display: flex;
`,x=e.forwardRef(({children:b,href:C,to:h,disabled:E=!1,startIcon:l,endIcon:f,...R},$)=>{const O=C?"_blank":void 0,d=C?"noreferrer noopener":void 0;return(0,o.jsxs)(T,{as:h&&!E?i.NavLink:"a",target:O,rel:d,to:E?void 0:h,href:E?"#":C,disabled:E,ref:$,...R,children:[l&&(0,o.jsx)(M,{as:"span","aria-hidden":!0,paddingRight:2,children:l}),(0,o.jsx)(y.Z,{children:b}),f&&!C&&(0,o.jsx)(M,{as:"span","aria-hidden":!0,paddingLeft:2,children:f}),C&&(0,o.jsx)(M,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,o.jsx)(n.Z,{})})]})})},79879:(P,r,t)=>{"use strict";t.d(r,{D:()=>i});var o=t(27279),e=t(70627),n=t(24696);const i=({children:g})=>o.createElement(n.x,{paddingLeft:10,paddingRight:10},g);i.propTypes={children:e.node.isRequired}},69222:(P,r,t)=>{"use strict";t.d(r,{A:()=>C,T:()=>x});var o=t(27279),e=t(70627),n=t(72450),i=t(24696),g=t(4005);const u=h=>{const E=(0,o.useRef)(null),[l,f]=(0,o.useState)(!0),R=([$])=>{f($.isIntersecting)};return(0,o.useEffect)(()=>{const $=E.current,O=new IntersectionObserver(R,h);return $&&O.observe(E.current),()=>{$&&O.disconnect()}},[E,h]),[E,l]};var y=t(66705);const s=(h,E)=>{const l=(0,y.W)(E);(0,o.useLayoutEffect)(()=>{const f=new ResizeObserver(l);return Array.isArray(h)?h.forEach(R=>{R.current&&f.observe(R.current)}):h.current&&f.observe(h.current),()=>{f.disconnect()}},[h,l])};var T=t(11374);const M=()=>{const h=(0,o.useRef)(null),[E,l]=(0,o.useState)(null),[f,R]=u({root:null,rootMargin:"0px",threshold:0});return s(f,()=>{f.current&&l(f.current.getBoundingClientRect())}),(0,o.useEffect)(()=>{h.current&&l(h.current.getBoundingClientRect())},[h]),{containerRef:f,isVisible:R,baseHeaderLayoutRef:h,headerSize:E}},x=h=>{const{containerRef:E,isVisible:l,baseHeaderLayoutRef:f,headerSize:R}=M();return o.createElement(o.Fragment,null,o.createElement("div",{style:{height:R?.height},ref:E},l&&o.createElement(C,{ref:f,...h})),!l&&o.createElement(C,{...h,sticky:!0,width:R?.width}))};x.displayName="HeaderLayout";const b=(0,n.default)(i.x)`
  width: ${h=>h.width}px;
`,C=o.forwardRef(({navigationAction:h,primaryAction:E,secondaryAction:l,subtitle:f,title:R,sticky:$,width:O,...d},c)=>{const m=typeof f=="string";return $?o.createElement(b,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:O,zIndex:4,"data-strapi-header-sticky":!0},o.createElement(g.k,{justifyContent:"space-between"},o.createElement(g.k,null,h&&o.createElement(i.x,{paddingRight:3},h),o.createElement(i.x,null,o.createElement(T.Z,{variant:"beta",as:"h1",...d},R),m?o.createElement(T.Z,{variant:"pi",textColor:"neutral600"},f):f),l?o.createElement(i.x,{paddingLeft:4},l):null),o.createElement(g.k,null,E?o.createElement(i.x,{paddingLeft:2},E):void 0))):o.createElement(i.x,{ref:c,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:h?6:8,background:"neutral100","data-strapi-header":!0},h?o.createElement(i.x,{paddingBottom:2},h):null,o.createElement(g.k,{justifyContent:"space-between"},o.createElement(g.k,{minWidth:0},o.createElement(T.Z,{as:"h1",variant:"alpha",...d},R),l?o.createElement(i.x,{paddingLeft:4},l):null),E),m?o.createElement(T.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},f):f)});C.displayName="BaseHeaderLayout",C.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},C.propTypes={navigationAction:e.node,primaryAction:e.node,secondaryAction:e.node,sticky:e.bool,subtitle:e.oneOfType([e.string,e.node]),title:e.string.isRequired,width:e.number},x.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},x.propTypes={navigationAction:e.node,primaryAction:e.node,secondaryAction:e.node,subtitle:e.oneOfType([e.string,e.node]),title:e.string.isRequired}}}]);
