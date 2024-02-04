"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[5004],{27255:(v,O,s)=>{s.d(O,{S:()=>m});var t=s(53657),P=s(50810),a=s(91845),d=s(70136),i=s(93134),D=s(48814),h=s(82154),c=s(58641),M=s(87426);const m=({providers:_,displayAllProviders:e})=>{const{formatMessage:E}=(0,h.Z)();return e?(0,t.jsx)(P.r,{gap:4,children:_.map(n=>(0,t.jsx)(a.P,{col:4,children:(0,t.jsx)(r,{provider:n})},n.uid))}):_.length>2&&!e?(0,t.jsxs)(P.r,{gap:4,children:[_.slice(0,2).map(n=>(0,t.jsx)(a.P,{col:4,children:(0,t.jsx)(r,{provider:n})},n.uid)),(0,t.jsx)(a.P,{col:4,children:(0,t.jsx)(d.u,{label:E({id:"global.see-more"}),children:(0,t.jsx)(o,{as:c.rU,to:"/auth/providers",children:(0,t.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,t.jsx)(x,{justifyContent:"center",children:_.map(n=>(0,t.jsx)(r,{provider:n},n.uid))})},x=(0,M.default)(i.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:_})=>_.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:_})=>_.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:_})=>_.spaces[2]};
  }
`,r=({provider:_})=>(0,t.jsx)(d.u,{label:_.displayName,children:(0,t.jsx)(o,{href:`${window.strapi.backendURL}/admin/connect/${_.uid}`,children:_.icon?(0,t.jsx)("img",{src:_.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,t.jsx)(D.Z,{children:_.displayName})})}),o=M.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:_})=>_.colors.neutral150};
  border-radius: ${({theme:_})=>_.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:_})=>_.colors.neutral600};
`},15004:(v,O,s)=>{s.r(O),s.d(O,{FORMS:()=>R});var t=s(53657),P=s(7139),a=s(2669),d=s(48814),i=s(93134),D=s(9091),h=s(99283),c=s(58218),M=s(26478),m=s(29776),x=s(82154),r=s(80107),o=s(33541),_=s(58641),e=s(87426),E=s(75377),n=s(27255),W=s(33099),I=s(25291),K=s(70464),f=s(1108),u=s(83937),y=s(3404),S=s(96125),p=s(2108),$=s(18239),Z=s(18514),F=s(59891),z=s(92898),N=s(96435),Q=s(50973),G=s(20590),H=s(22507);const L=()=>{const{push:A}=(0,o.k6)(),{formatMessage:l}=(0,x.Z)(),{get:B}=(0,m.useFetchClient)(),{isLoading:g,data:j=[]}=(0,r.useQuery)(["ee","providers"],async()=>{const{data:T}=await B("/admin/providers");return T},{enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)}),U=()=>{A("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!g&&j.length===0?(0,t.jsx)(o.l_,{to:"/auth/login"}):(0,t.jsx)(E.U,{children:(0,t.jsxs)(P.o,{children:[(0,t.jsxs)(E.e,{children:[(0,t.jsxs)(E.C,{children:[(0,t.jsx)(E.f,{}),(0,t.jsx)(a.x,{paddingTop:6,paddingBottom:1,children:(0,t.jsx)(d.Z,{as:"h1",variant:"alpha",children:l({id:"Auth.form.welcome.title"})})}),(0,t.jsx)(a.x,{paddingBottom:7,children:(0,t.jsx)(d.Z,{variant:"epsilon",textColor:"neutral600",children:l({id:"Auth.login.sso.subtitle"})})})]}),(0,t.jsxs)(i.k,{direction:"column",alignItems:"stretch",gap:7,children:[g?(0,t.jsx)(i.k,{justifyContent:"center",children:(0,t.jsx)(D.a,{children:l({id:"Auth.login.sso.loading"})})}):(0,t.jsx)(n.S,{providers:j}),(0,t.jsxs)(i.k,{children:[(0,t.jsx)(C,{}),(0,t.jsx)(a.x,{paddingLeft:3,paddingRight:3,children:(0,t.jsx)(d.Z,{variant:"sigma",textColor:"neutral600",children:l({id:"or"})})}),(0,t.jsx)(C,{})]}),(0,t.jsx)(h.z,{fullWidth:!0,size:"L",onClick:U,children:l({id:"Auth.form.button.login.strapi"})})]})]}),(0,t.jsx)(i.k,{justifyContent:"center",children:(0,t.jsx)(a.x,{paddingTop:4,children:(0,t.jsx)(M.r,{as:_.OL,to:"/auth/forgot-password",children:(0,t.jsx)(d.Z,{variant:"pi",children:l({id:"Auth.link.forgot-password"})})})})})]})})},C=(0,e.default)(c.i)`
  flex: 1;
`,R={providers:L}}}]);
