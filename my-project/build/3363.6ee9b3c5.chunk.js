"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[3363],{23363:(I,E,s)=>{s.r(E),s.d(E,{InstalledPluginsPage:()=>m,ProtectedInstalledPluginsPage:()=>c});var t=s(53657),d=s(96125),i=s(46268),o=s(70139),P=s(7139),r=s(55613),a=s(6620),g=s(87710),L=s(15227),v=s(41427),M=s(35960),e=s(60590),B=s(18946),n=s(29370),W=s(3404),C=s(82154),K=s(80107),R=s(2108),U=s(4771),j=s(36336),y=s(70662),p=s(43628),Z=s(33099),$=s(25291),G=s(70464),N=s(1108),S=s(83937),F=s(18239),Q=s(18514),Y=s(59891),z=s(92898),H=s(96435),J=s(50973),V=s(20590),X=s(22507),b=s(7453);const m=()=>{const{formatMessage:_}=(0,C.Z)(),{notifyStatus:D}=(0,i.G)(),T=(0,n.lm)(),{get:u}=(0,n.kY)();(0,n.go)();const{status:h,data:O,error:A}=(0,K.useQuery)(["plugins"],async()=>{const{data:l}=await u("/admin/plugins");return l});return d.useEffect(()=>{O&&D(_({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:_({id:"global.plugins",defaultMessage:"Plugins"})})),A&&T({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})},[O,A,_,D,T]),h!=="success"&&h!=="error"?(0,t.jsx)(o.A,{children:(0,t.jsx)(P.o,{"aria-busy":!0,children:(0,t.jsx)(n.dO,{})})}):(0,t.jsx)(o.A,{children:(0,t.jsxs)(P.o,{children:[(0,t.jsx)(r.T,{title:_({id:"global.plugins",defaultMessage:"Plugins"}),subtitle:_({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),(0,t.jsx)(a.D,{children:(0,t.jsxs)(g.i,{colCount:2,rowCount:O?.plugins?.length??0+1,children:[(0,t.jsx)(L.h,{children:(0,t.jsxs)(v.Tr,{children:[(0,t.jsx)(M.Th,{children:(0,t.jsx)(e.Z,{variant:"sigma",textColor:"neutral600",children:_({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(M.Th,{children:(0,t.jsx)(e.Z,{variant:"sigma",textColor:"neutral600",children:_({id:"global.description",defaultMessage:"description"})})})]})}),(0,t.jsx)(B.p,{children:O?.plugins.map(({name:l,displayName:x,description:f})=>(0,t.jsxs)(v.Tr,{children:[(0,t.jsx)(M.Td,{children:(0,t.jsx)(e.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold",children:_({id:`global.plugins.${l}`,defaultMessage:x})})}),(0,t.jsx)(M.Td,{children:(0,t.jsx)(e.Z,{textColor:"neutral800",children:_({id:`global.plugins.${l}.description`,defaultMessage:f})})})]},l))})]})})]})})},c=()=>{const{formatMessage:_}=(0,C.Z)(),D=(0,R.v9)(U.s);return(0,t.jsxs)(n.O4,{permissions:D.marketplace?.main,children:[(0,t.jsx)(W.q,{title:_({id:"global.plugins",defaultMessage:"Plugins"})}),(0,t.jsx)(m,{})]})}},70139:(I,E,s)=>{s.d(E,{A:()=>r});var t=s(53657),d=s(87426),i=s(2669);const o=(0,d.default)(i.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:a})=>a?"auto 1fr":"1fr"};
`,P=(0,d.default)(i.x)`
  overflow-x: hidden;
`,r=({sideNav:a,children:g})=>(0,t.jsxs)(o,{hasSideNav:Boolean(a),children:[a,(0,t.jsx)(P,{paddingBottom:10,children:g})]})}}]);
