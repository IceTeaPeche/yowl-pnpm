"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[884],{50884:(wt,q,o)=>{o.r(q),o.d(q,{default:()=>Nt});var t=o(53657),y=o(93134),ft=o(49692),f=o(2669),_=o(48814),tt=o(87710),et=o(15227),nt=o(41427),K=o(35960),B=o(99283),_t=o(16100),ot=o(9991),xt=o(55613),yt=o(6620),c=o(29776),Et=o(29208),L=o(92639),st=o(60773),Ct=o(63922),Mt=o(51748),Tt=o(38845),Dt=o(10434),jt=o(14752),T=o(20590),Pt=o(80922),it=o(23787),at=o(66437),I=o(82154),z=o(33541),$=o(96125),n=o(59013),d=o(97421),x=o(87426),Vt=o(3404),Ht=o(29963),Jt=o(22507),Xt=o(9887),Gt=o(24754),Qt=o(13062),Yt=o(7453),qt=o(59891),te=o(80655),ee=o(38176),ne=o(2108),oe=o(14038),se=o(50973),ie=o(96584),ae=o(30696),le=o(13601),re=o(18514),de=o(96435),ce=o(12646);const lt=x.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,c.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,c.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:e,isChildOfDynamicZone:s,theme:i})=>s?`background-color: ${i.colors.primary200};`:e?`background-color: ${i.colors.primary200};`:`background: ${i.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function Z({customRowComponent:e,component:s,isFromDynamicZone:i,isNestedInDZComponent:a,firstLoopComponentUid:p}){const{modifiedData:r}=(0,d.u)(),{schema:{attributes:m}}=T(r,["components",s],{schema:{attributes:[]}});return(0,t.jsx)(lt,{isChildOfDynamicZone:i,className:"component-row",children:(0,t.jsx)("td",{colSpan:12,children:(0,t.jsx)(k,{customRowComponent:e,items:m,targetUid:s,firstLoopComponentUid:p||s,editTarget:"components",isFromDynamicZone:i,isNestedInDZComponent:a,isSub:!0,secondLoopComponentUid:p?s:null})})})}Z.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},Z.propTypes={component:n.string,customRowComponent:n.func,firstLoopComponentUid:n.string,isFromDynamicZone:n.bool,isNestedInDZComponent:n.bool};function w({isActive:e,icon:s}){return(0,t.jsx)(y.k,{alignItems:"center",background:e?"primary200":"neutral200",justifyContent:"center",height:8,width:8,borderRadius:"50%",children:(0,t.jsx)(ft.J,{as:d.C[s]||d.C.cube,height:5,width:5})})}w.defaultProps={isActive:!1,icon:"Cube"},w.propTypes={isActive:n.bool,icon:n.string};const rt=(0,x.default)(f.x)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,c.pxToRem)(8)};

  svg {
    width: ${(0,c.pxToRem)(10)};
    height: ${(0,c.pxToRem)(10)};

    path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,Ot=(0,x.default)(y.k)`
  width: ${(0,c.pxToRem)(140)};
  height: ${(0,c.pxToRem)(80)};
  position: relative;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: ${({theme:e})=>e.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    background: ${({theme:e})=>e.colors.primary100};

    ${rt} {
      display: block;
    }

    ${_.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:e})=>e.colors.primary200};
      color: ${({theme:e})=>e.colors.primary600};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.primary600};
        }
      }
    }
  }
`;function V({component:e,dzName:s,index:i,isActive:a,isInDevelopmentMode:p,onClick:r}){const{modifiedData:m,removeComponentFromDynamicZone:D}=(0,d.u)(),{schema:{icon:C,displayName:E}}=T(m,["components",e],{schema:{}}),g=l=>{l.stopPropagation(),D(s,i)};return(0,t.jsxs)(Ot,{alignItems:"center",direction:"column",className:a?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,onClick:r,role:"tab",tabIndex:a?0:-1,cursor:"pointer","aria-selected":a,"aria-controls":`dz-${s}-panel-${i}`,id:`dz-${s}-tab-${i}`,children:[(0,t.jsx)(w,{icon:C,isActive:a}),(0,t.jsx)(f.x,{marginTop:1,maxWidth:"100%",children:(0,t.jsx)(_.Z,{variant:"pi",fontWeight:"bold",ellipsis:!0,children:E})}),p&&(0,t.jsx)(rt,{as:"button",onClick:g,children:(0,t.jsx)(Et.Z,{})})]})}V.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},V.propTypes={component:n.string,dzName:n.string.isRequired,index:n.number.isRequired,isActive:n.bool,isInDevelopmentMode:n.bool,onClick:n.func};const vt=(0,x.default)(L.Z)`
  width: ${(0,c.pxToRem)(32)};
  height: ${(0,c.pxToRem)(32)};
  padding: ${(0,c.pxToRem)(9)};
  border-radius: ${(0,c.pxToRem)(64)};
  background: ${({theme:e})=>e.colors.primary100};
  path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,bt=(0,x.default)(f.x)`
  height: ${(0,c.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Rt=(0,x.default)(y.k)`
  width: 100%;
  overflow-x: auto;
`,At=(0,x.default)(f.x)`
  padding-top: ${(0,c.pxToRem)(90)};
`,It=(0,x.default)(y.k)`
  flex-shrink: 0;
  width: ${(0,c.pxToRem)(140)};
  height: ${(0,c.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`;function H({customRowComponent:e,components:s,addComponent:i,name:a,targetUid:p}){const{isInDevelopmentMode:r}=(0,d.u)(),[m,D]=(0,$.useState)(0),{formatMessage:C}=(0,I.Z)(),E=l=>{m!==l&&D(l)},g=()=>{i(a)};return(0,t.jsx)(lt,{className:"dynamiczone-row",isFromDynamicZone:!0,children:(0,t.jsxs)("td",{colSpan:12,children:[(0,t.jsx)(bt,{paddingLeft:8,children:(0,t.jsxs)(Rt,{gap:2,children:[r&&(0,t.jsx)("button",{type:"button",onClick:g,children:(0,t.jsxs)(It,{direction:"column",alignItems:"stretch",gap:1,children:[(0,t.jsx)(vt,{}),(0,t.jsx)(_.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:C({id:(0,d.g)("button.component.add"),defaultMessage:"Add a component"})})]})}),(0,t.jsx)(y.k,{role:"tablist",gap:2,children:s.map((l,u)=>(0,t.jsx)(V,{dzName:a,index:u,component:l,isActive:m===u,isInDevelopmentMode:r,onClick:()=>E(u)},l))})]})}),(0,t.jsx)(At,{children:s.map((l,u)=>{const h={customRowComponent:e,component:l};return(0,t.jsx)(f.x,{id:`dz-${a}-panel-${u}`,role:"tabpanel",tabindex:0,"aria-labelledby":`dz-${a}-tab-${u}`,style:{display:m===u?"block":"none"},children:(0,t.jsx)("table",{children:(0,t.jsx)("tbody",{children:(0,$.createElement)(Z,{...h,isFromDynamicZone:!0,targetUid:p,key:l})})})},l)})})]})})}H.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},H.propTypes={addComponent:n.func,components:n.instanceOf(Array),customRowComponent:n.func,name:n.string,targetUid:n.string.isRequired};const Bt=(0,x.default)(f.x)`
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
    fill: ${({theme:e,color:s})=>e.colors[`${s}600`]};
  }
`,Lt=(0,x.default)(f.x)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,dt=({children:e,icon:s,color:i,...a})=>(0,t.jsx)(Lt,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...a,children:(0,t.jsxs)(y.k,{children:[(0,t.jsx)(Bt,{color:i,"aria-hidden":!0,background:`${i}200`,children:s}),(0,t.jsx)(f.x,{paddingLeft:3,children:(0,t.jsx)(_.Z,{variant:"pi",fontWeight:"bold",textColor:`${i}600`,children:e})})]})});dt.propTypes={color:n.string.isRequired,children:n.string.isRequired,icon:n.node.isRequired};const $t=(0,x.default)(f.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:e})=>e.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:e})=>e.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:e})=>e.colors.neutral600};
    outline-offset: -4px;
  }
`;function k({addComponentToDZ:e,customRowComponent:s,editTarget:i,firstLoopComponentUid:a,isFromDynamicZone:p,isMain:r,isNestedInDZComponent:m,isSub:D,items:C,secondLoopComponentUid:E,targetUid:g}){const{formatMessage:l}=(0,I.Z)(),{trackUsage:u}=(0,c.useTracking)(),{isInDevelopmentMode:h,modifiedData:R,isInContentTypeView:P}=(0,d.u)(),{onOpenModalAddField:v}=(0,d.a)(),j=()=>{u("hasClickedCTBAddFieldBanner"),v({forTarget:i,targetUid:g})};return g?C.length===0&&r?(0,t.jsxs)(tt.i,{colCount:2,rowCount:2,children:[(0,t.jsx)(et.h,{children:(0,t.jsxs)(nt.Tr,{children:[(0,t.jsx)(K.Th,{children:(0,t.jsx)(_.Z,{variant:"sigma",textColor:"neutral600",children:l({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(K.Th,{children:(0,t.jsx)(_.Z,{variant:"sigma",textColor:"neutral600",children:l({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)(c.EmptyBodyTable,{action:(0,t.jsx)(B.z,{onClick:j,size:"L",startIcon:(0,t.jsx)(L.Z,{}),variant:"secondary",children:l({id:(0,d.g)("table.button.no-fields"),defaultMessage:"Add new field"})}),colSpan:2,content:P?{id:(0,d.g)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,d.g)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})]}):(0,t.jsxs)($t,{children:[(0,t.jsx)(f.x,{paddingLeft:6,paddingRight:r?6:0,...r&&{style:{overflowX:"auto"}},children:(0,t.jsxs)("table",{children:[r&&(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(_.Z,{variant:"sigma",textColor:"neutral600",children:l({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)("th",{colSpan:"2",children:(0,t.jsx)(_.Z,{variant:"sigma",textColor:"neutral600",children:l({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)("tbody",{children:C.map(O=>{const{type:A}=O,U=s;return(0,t.jsxs)($.Fragment,{children:[(0,t.jsx)(U,{...O,isNestedInDZComponent:m,targetUid:g,editTarget:i,firstLoopComponentUid:a,isFromDynamicZone:p,secondLoopComponentUid:E}),A==="component"&&(0,t.jsx)(Z,{...O,customRowComponent:s,targetUid:g,isNestedInDZComponent:p,editTarget:i,firstLoopComponentUid:a}),A==="dynamiczone"&&(0,t.jsx)(H,{...O,customRowComponent:s,addComponent:e,targetUid:g})]},O.name)})})]})}),r&&h&&(0,t.jsx)(_t.c,{icon:(0,t.jsx)(L.Z,{}),onClick:j,children:l({id:(0,d.g)(`form.button.add.field.to.${R.contentType?R.contentType.schema.kind:i||"collectionType"}`),defaultMessage:"Add another field"})}),D&&h&&(0,t.jsx)(dt,{icon:(0,t.jsx)(L.Z,{}),onClick:j,color:p?"primary":"neutral",children:l({id:(0,d.g)("form.button.add.field.to.component"),defaultMessage:"Add another field"})})]}):(0,t.jsxs)(tt.i,{colCount:2,rowCount:2,children:[(0,t.jsx)(et.h,{children:(0,t.jsxs)(nt.Tr,{children:[(0,t.jsx)(K.Th,{children:(0,t.jsx)(_.Z,{variant:"sigma",textColor:"neutral600",children:l({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(K.Th,{children:(0,t.jsx)(_.Z,{variant:"sigma",textColor:"neutral600",children:l({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)(c.EmptyBodyTable,{colSpan:2,content:{id:(0,d.g)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}})]})}k.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},k.propTypes={addComponentToDZ:n.func,customRowComponent:n.func,editTarget:n.string.isRequired,firstLoopComponentUid:n.string,isFromDynamicZone:n.bool,isNestedInDZComponent:n.bool,isMain:n.bool,items:n.instanceOf(Array),secondLoopComponentUid:n.string,targetUid:n.string,isSub:n.bool};const Ut=(0,x.default)(f.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e,color:s})=>e.colors[s]};
    display: block;
  }
`,Wt=x.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:s})=>e.colors[s]};
  }
`,ct=e=>(0,t.jsx)(Ut,{children:(0,t.jsx)(Wt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})})});ct.propTypes={color:n.string.isRequired};const J=({content:e})=>at(e);J.defaultProps={content:null},J.propTypes={content:n.string};const Kt=(0,x.default)(f.x)`
  position: relative;
`,X=({type:e,customField:s,repeatable:i})=>{const{formatMessage:a}=(0,I.Z)();let p=e;return["integer","biginteger","float","decimal"].includes(e)?p="number":["string"].includes(e)&&(p="text"),s?(0,t.jsx)(_.Z,{children:a({id:(0,d.g)("attribute.customField"),defaultMessage:"Custom field"})}):(0,t.jsxs)(_.Z,{children:[a({id:(0,d.g)(`attribute.${p}`),defaultMessage:e}),"\xA0",i&&a({id:(0,d.g)("component.repeatable"),defaultMessage:"(repeatable)"})]})};X.defaultProps={customField:null,repeatable:!1},X.propTypes={type:n.string.isRequired,customField:n.string,repeatable:n.bool};function G({configurable:e,customField:s,editTarget:i,firstLoopComponentUid:a,isFromDynamicZone:p,name:r,onClick:m,relation:D,repeatable:C,secondLoopComponentUid:E,target:g,targetUid:l,type:u}){const{contentTypes:h,isInDevelopmentMode:R,removeAttribute:P}=(0,d.u)(),{formatMessage:v}=(0,I.Z)(),j=u==="relation"&&D.includes("morph"),O=["integer","biginteger","float","decimal"].includes(u)?"number":u,A=T(h,[g],{}),U=T(A,["schema","displayName"],""),W=T(A,"plugin"),Y=g?"relation":O,F=()=>{j||e!==!1&&m(i,E||a||l,r,u,s)};let b;return E&&a?b=2:a?b=1:b=0,(0,t.jsxs)(Kt,{as:"tr",...(0,c.onRowClick)({fn:F,condition:R&&e&&!j}),children:[(0,t.jsxs)("td",{style:{position:"relative"},children:[b!==0&&(0,t.jsx)(ct,{color:p?"primary200":"neutral150"}),(0,t.jsxs)(y.k,{paddingLeft:2,gap:4,children:[(0,t.jsx)(d.A,{type:Y,customField:s}),(0,t.jsx)(_.Z,{fontWeight:"bold",children:r})]})]}),(0,t.jsx)("td",{children:g?(0,t.jsxs)(_.Z,{children:[v({id:(0,d.g)(`modelPage.attribute.${j?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",(0,t.jsxs)("span",{style:{fontStyle:"italic"},children:[(0,t.jsx)(J,{content:U}),"\xA0",W&&`(${v({id:(0,d.g)("from"),defaultMessage:"from"})}: ${W})`]})]}):(0,t.jsx)(X,{type:u,customField:s,repeatable:C})}),(0,t.jsx)("td",{children:R?(0,t.jsx)(y.k,{justifyContent:"flex-end",...c.stopPropagation,children:e?(0,t.jsxs)(y.k,{gap:1,children:[!j&&(0,t.jsx)(ot.h,{onClick:F,label:`${v({id:"app.utils.edit",defaultMessage:"Edit"})} ${r}`,noBorder:!0,icon:(0,t.jsx)(st.Z,{})}),(0,t.jsx)(ot.h,{onClick:S=>{S.stopPropagation(),P(i,r,E||a||"")},label:`${v({id:"global.delete",defaultMessage:"Delete"})} ${r}`,noBorder:!0,icon:(0,t.jsx)(Ct.Z,{})})]}):(0,t.jsx)(Mt.Z,{})}):(0,t.jsx)(f.x,{height:(0,c.pxToRem)(32)})})]})}G.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},G.propTypes={configurable:n.bool,customField:n.string,editTarget:n.string.isRequired,firstLoopComponentUid:n.string,isFromDynamicZone:n.bool,name:n.string.isRequired,onClick:n.func,relation:n.string,repeatable:n.bool,secondLoopComponentUid:n.string,target:n.string,targetUid:n.string,type:n.string};const Zt=(0,$.memo)(G),kt=e=>{let s;switch(e){case"date":case"datetime":case"time":case"timestamp":s="date";break;case"integer":case"biginteger":case"decimal":case"float":s="number";break;case"string":case"text":s="text";break;case"":s="relation";break;default:s=e}return s},Ft={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},Q=({disabled:e,isTemporary:s,isInContentTypeView:i,contentTypeKind:a,targetUid:p})=>{const{formatMessage:r}=(0,I.Z)(),{push:m}=(0,z.k6)(),{collectionTypesConfigurations:D,componentsConfigurations:C,singleTypesConfigurations:E}=Ft,g=r({id:"content-type-builder.form.button.configure-view",defaultMessage:"Configure the view"});let l=D;const u=()=>(s||m(i?`/content-manager/collectionType/${p}/configurations/edit`:`/content-manager/components/${p}/configurations/edit`),!1);return i&&a==="singleType"&&(l=E),i||(l=C),(0,t.jsx)(c.CheckPermissions,{permissions:l,children:(0,t.jsx)(B.z,{startIcon:(0,t.jsx)(Tt.Z,{}),variant:"tertiary",onClick:u,disabled:s||e,children:g})})};Q.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},Q.propTypes={disabled:n.bool.isRequired,contentTypeKind:n.string,isInContentTypeView:n.bool,isTemporary:n.bool,targetUid:n.string};const St=(0,$.memo)(Q),Nt=()=>{const{initialData:e,modifiedData:s,isInDevelopmentMode:i,isInContentTypeView:a,submitData:p}=(0,d.u)(),{formatMessage:r}=(0,I.Z)(),{trackUsage:m}=(0,c.useTracking)(),D=(0,z.$B)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:C,onOpenModalAddField:E,onOpenModalEditField:g,onOpenModalEditSchema:l,onOpenModalEditCustomField:u}=(0,d.a)(),h=a?"contentType":"component",R=[h,"schema","attributes"],P=T(s,[h,"uid"]),v=T(s,[h,"isTemporary"],!1),j=T(s,[h,"schema","kind"],null),O=T(s,R,[]),A=Pt(e,[h,"plugin"]),U=!it(s,e),W=a?"contentType":"component",Y=M=>{C({dynamicZoneTarget:M,targetUid:P})},F=async(M,pt,ut,mt,gt)=>{const ht=kt(mt);gt?u({forTarget:M,targetUid:pt,attributeName:ut,attributeType:ht,customFieldUid:gt}):g({forTarget:M,targetUid:pt,attributeName:ut,attributeType:ht,step:mt==="component"?"2":null})};let b=T(s,[h,"schema","displayName"],"");const S=T(s,[h,"schema","kind"],""),N=D?.params.currentUID==="create-content-type";!b&&N&&(b=r({id:(0,d.g)("button.model.create"),defaultMessage:"Create new collection type"}));const zt=()=>{const M=S||h;M==="collectionType"&&m("willEditNameOfContentType"),M==="singleType"&&m("willEditNameOfSingleType"),l({modalType:h,forTarget:h,targetUid:P,kind:M})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(z.NL,{message:M=>M.hash==="#back"?!1:r({id:(0,d.g)("prompt.unsaved")}),when:U}),(0,t.jsx)(xt.T,{id:"title",primaryAction:i&&(0,t.jsxs)(y.k,{gap:2,children:[!N&&(0,t.jsx)(B.z,{startIcon:(0,t.jsx)(L.Z,{}),variant:"secondary",onClick:()=>{E({forTarget:W,targetUid:P})},children:r({id:(0,d.g)("button.attributes.add.another"),defaultMessage:"Add another field"})}),(0,t.jsx)(B.z,{startIcon:(0,t.jsx)(Dt.Z,{}),onClick:()=>p(),type:"submit",disabled:it(s,e),children:r({id:"global.save",defaultMessage:"Save"})})]}),secondaryAction:i&&!A&&!N&&(0,t.jsx)(B.z,{startIcon:(0,t.jsx)(st.Z,{}),variant:"tertiary",onClick:zt,children:r({id:"app.utils.edit",defaultMessage:"Edit"})}),title:at(b),subtitle:r({id:(0,d.g)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:(0,t.jsx)(c.Link,{startIcon:(0,t.jsx)(jt.Z,{}),to:"/plugins/content-type-builder/",children:r({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(yt.D,{children:(0,t.jsxs)(y.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(y.k,{justifyContent:"flex-end",children:(0,t.jsx)(y.k,{gap:2,children:(0,t.jsx)(St,{targetUid:P,isTemporary:v,isInContentTypeView:a,contentTypeKind:j,disabled:N},"link-to-cm-settings-view")})}),(0,t.jsx)(f.x,{background:"neutral0",shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(k,{items:O,customRowComponent:M=>(0,t.jsx)(Zt,{...M,onClick:F}),addComponentToDZ:Y,targetUid:P,editTarget:W,isMain:!0})})]})})]})}}}]);
