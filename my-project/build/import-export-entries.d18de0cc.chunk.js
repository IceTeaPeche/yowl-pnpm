"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[3770],{43816:(L,h,n)=>{n.r(h),n.d(h,{default:()=>U});var t=n(53657),g=n(29370),x=n(96125),c=n(33541),u=n(12295),E=n.n(u),m=n(6620),e=n(93134),o=n(2669),l=n(60590),y=n(37083),a=n(37367),r=n(45486),d=n(51089),p=n(74975),j=n.n(p),v=n(6696),P=n(55613),f=n(24589);const I=()=>{const{i18n:s}=(0,f.Q)();return(0,t.jsx)(o.x,{background:"neutral100",children:(0,t.jsx)(P.A,{title:s("plugin.name","Import Export"),subtitle:s("plugin.description","Import/Export data from and to your database in just few clicks"),as:"h2"})})};var C=n(10654),B=n(44184),M=n(68697),R=n(52017),W=n(44946);const F=()=>{const{i18n:s}=(0,f.Q)(),{getPreferences:D,updatePreferences:K}=(0,M._)(),[O,Z]=(0,x.useState)(D()),A=(i,$)=>{K({[i]:$}),Z(D())};return(0,t.jsxs)(g.O4,{permissions:R.I.main,children:[(0,t.jsx)(I,{}),(0,t.jsx)(m.D,{children:(0,t.jsxs)(e.k,{direction:"column",alignItems:"start",gap:8,children:[(0,t.jsx)(o.x,{style:{alignSelf:"stretch"},background:"neutral0",padding:"32px",hasRadius:!0,children:(0,t.jsxs)(e.k,{direction:"column",alignItems:"start",gap:6,children:[(0,t.jsx)(l.Z,{variant:"alpha",children:s("plugin.page.homepage.section.quick-actions.title","Quick Actions")}),(0,t.jsx)(o.x,{children:(0,t.jsx)(e.k,{direction:"column",alignItems:"start",gap:4,children:(0,t.jsxs)(e.k,{gap:4,children:[(0,t.jsx)(C.r,{}),(0,t.jsx)(v.j,{availableExportFormats:[W.g.JSON_V2]})]})})})]})}),(0,t.jsx)(o.x,{style:{alignSelf:"stretch"},background:"neutral0",padding:"32px",hasRadius:!0,children:(0,t.jsxs)(e.k,{direction:"column",alignItems:"start",gap:6,children:[(0,t.jsx)(l.Z,{variant:"alpha",children:s("plugin.page.homepage.section.preferences.title","Preferences")}),(0,t.jsx)(o.x,{children:(0,t.jsxs)(e.k,{direction:"column",alignItems:"start",gap:4,children:[(0,t.jsx)(e.k,{justifyContent:"space-between",children:(0,t.jsx)(y.X,{value:O.applyFilters,onValueChange:i=>A("applyFilters",i),children:(0,t.jsx)(l.Z,{children:s("plugin.export.apply-filters-and-sort","Apply filters and sort to exported data")})})}),(0,t.jsx)(e.k,{justifyContent:"space-between",children:(0,t.jsx)(a.P,{label:s("plugin.export.deepness","Deepness"),placeholder:s("plugin.export.deepness","Deepness"),value:O.deepness,onChange:i=>A("deepness",i),children:j()(1,21).map(i=>(0,t.jsx)(r.W,{value:i,children:i},i))})})]})})]})}),(0,t.jsx)(o.x,{style:{alignSelf:"stretch"},background:"neutral0",padding:"32px",hasRadius:!0,children:(0,t.jsxs)(e.k,{direction:"column",alignItems:"start",gap:6,children:[(0,t.jsx)(l.Z,{variant:"alpha",children:s("plugin.page.homepage.section.need-help.title","Feature Request / Bug Report")}),(0,t.jsx)(o.x,{children:(0,t.jsxs)(e.k,{direction:"column",alignItems:"start",gap:4,children:[(0,t.jsx)(l.Z,{children:s("plugin.page.homepage.section.need-help.description","Feel free to reach out on the product roadmap, discord or github \u270C\uFE0F")}),(0,t.jsxs)(e.k,{gap:4,children:[(0,t.jsx)(d.r,{href:"https://strapi-import-export-entries.canny.io",isExternal:!0,children:s("plugin.page.homepage.section.need-help.product-roadmap","Product Roadmap")}),(0,t.jsx)(d.r,{href:"https://discord.gg/dcqCAFFdP8",isExternal:!0,children:s("plugin.page.homepage.section.need-help.discord","Discord")}),(0,t.jsx)(d.r,{href:"https://github.com/Baboo7/strapi-plugin-import-export-entries/issues",isExternal:!0,children:s("plugin.page.homepage.section.need-help.github","GitHub")})]})]})})]})})]})}),(0,t.jsx)(B.p,{})]})},T=(0,x.memo)(F),U=()=>(0,t.jsx)("div",{children:(0,t.jsxs)(c.rs,{children:[(0,t.jsx)(c.AW,{path:`/plugins/${E()}`,component:T,exact:!0}),(0,t.jsx)(c.AW,{component:g.Hn})]})})},51089:(L,h,n)=>{n.d(h,{r:()=>y});var t=n(53657),g=n(96125),x=n(51812),c=n(58641),u=n(87426),E=n(38973),m=n(60590),e=n(2669);const o=u.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:a})=>a?"none":void 0};
  color: ${({disabled:a,theme:r})=>a?r.colors.neutral600:r.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${m.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:a})=>a.colors.primary500};
  }

  &:active {
    color: ${({theme:a})=>a.colors.primary700};
  }

  ${E.BF};
`,l=(0,u.default)(e.x)`
  display: flex;
`,y=g.forwardRef(({children:a,href:r,to:d,disabled:p=!1,startIcon:j,endIcon:v,...P},f)=>{const I=r?"_blank":void 0,C=r?"noreferrer noopener":void 0;return(0,t.jsxs)(o,{as:d&&!p?c.OL:"a",target:I,rel:C,to:p?void 0:d,href:p?"#":r,disabled:p,ref:f,...P,children:[j&&(0,t.jsx)(l,{as:"span","aria-hidden":!0,paddingRight:2,children:j}),(0,t.jsx)(m.Z,{children:a}),v&&!r&&(0,t.jsx)(l,{as:"span","aria-hidden":!0,paddingLeft:2,children:v}),r&&(0,t.jsx)(l,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,t.jsx)(x.Z,{})})]})})}}]);
