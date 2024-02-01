"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[3213],{33213:(g,d,s)=>{s.r(d),s.d(d,{LoginEE:()=>v});var _=s(53657),i=s(58218),n=s(2669),E=s(93134),P=s(60590),o=s(29370),D=s(82154),M=s(80107),l=s(87426),r=s(43628),e=s(62765),O=s(33099),h=s(25291),t=s(70464),c=s(1108),m=s(83937),a=s(3404),I=s(96125),T=s(2108),W=s(18239),K=s(18514),j=s(59891),f=s(92898),u=s(96435),y=s(50973),S=s(20590),$=s(22507);const L=(0,l.default)(i.i)`
  flex: 1;
`,v=C=>{const{formatMessage:x}=(0,D.Z)(),{get:B}=(0,o.kY)(),{isLoading:U,data:R=[]}=(0,M.useQuery)(["ee","providers"],async()=>{const{data:A}=await B("/admin/providers");return A},{enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!U&&R.length===0?(0,_.jsx)(r.L,{...C}):(0,_.jsx)(r.L,{...C,children:(0,_.jsx)(n.x,{paddingTop:7,children:(0,_.jsxs)(E.k,{direction:"column",alignItems:"stretch",gap:7,children:[(0,_.jsxs)(E.k,{children:[(0,_.jsx)(L,{}),(0,_.jsx)(n.x,{paddingLeft:3,paddingRight:3,children:(0,_.jsx)(P.Z,{variant:"sigma",textColor:"neutral600",children:x({id:"Auth.login.sso.divider"})})}),(0,_.jsx)(L,{})]}),(0,_.jsx)(e.S,{providers:R,displayAllProviders:!1})]})})})}},62765:(g,d,s)=>{s.d(d,{S:()=>r});var _=s(53657),i=s(50810),n=s(91845),E=s(70136),P=s(93134),o=s(60590),D=s(82154),M=s(58641),l=s(87426);const r=({providers:t,displayAllProviders:c})=>{const{formatMessage:m}=(0,D.Z)();return c?(0,_.jsx)(i.r,{gap:4,children:t.map(a=>(0,_.jsx)(n.P,{col:4,children:(0,_.jsx)(O,{provider:a})},a.uid))}):t.length>2&&!c?(0,_.jsxs)(i.r,{gap:4,children:[t.slice(0,2).map(a=>(0,_.jsx)(n.P,{col:4,children:(0,_.jsx)(O,{provider:a})},a.uid)),(0,_.jsx)(n.P,{col:4,children:(0,_.jsx)(E.u,{label:m({id:"global.see-more"}),children:(0,_.jsx)(h,{as:M.rU,to:"/auth/providers",children:(0,_.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,_.jsx)(e,{justifyContent:"center",children:t.map(a=>(0,_.jsx)(O,{provider:a},a.uid))})},e=(0,l.default)(P.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:t})=>t.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:t})=>t.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:t})=>t.spaces[2]};
  }
`,O=({provider:t})=>(0,_.jsx)(E.u,{label:t.displayName,children:(0,_.jsx)(h,{href:`${window.strapi.backendURL}/admin/connect/${t.uid}`,children:t.icon?(0,_.jsx)("img",{src:t.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,_.jsx)(o.Z,{children:t.displayName})})}),h=l.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:t})=>t.colors.neutral150};
  border-radius: ${({theme:t})=>t.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:t})=>t.colors.neutral600};
`}}]);
