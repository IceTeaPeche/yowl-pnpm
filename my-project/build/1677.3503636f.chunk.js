"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[1677],{51677:(Q,p,s)=>{s.r(p),s.d(p,{default:()=>B});var e=s(53657),M=s(29370),C=s(2108),u=s(4771),h=s(56804),k=s(96125),T=s(80107),K=s(36336),S=s(70662),N=s(43628),U=s(33099),a=s(25291),V=s(70464),v=s(1108),Z=s(83937),F=s(3404),y=s(18239),Y=s(18514),$=s(59891),m=s(92898),c=s(96435),n=s(50973),z=s(20590),f=s(22507),A=s(7453),I=s(38831);const B=()=>{const W=(0,C.v9)(u.s);return(0,e.jsx)(M.O4,{permissions:W.settings["transfer-tokens"].create,children:(0,e.jsx)(h.T,{})})}},56804:(Q,p,s)=>{s.d(p,{T:()=>H});var e=s(53657),M=s(96125),C=s(2669),u=s(93134),h=s(60590),k=s(50810),T=s(91845),K=s(7139),S=s(55613),N=s(99283),U=s(6620),a=s(29370),V=s(18239),v=s(82154),Z=s(80107),F=s(2108),y=s(33541),Y=s(4771),$=s(74087),m=s(23119),c=s(38831),n=s(59013),z=s(10434),f=s(59891);const A=({errors:_,onChange:d,canEditInputs:g,isCreating:o,values:E,transferToken:r})=>{const{formatMessage:P}=(0,v.Z)(),x=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,e.jsx)(C.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(u.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(h.Z,{variant:"delta",as:"h2",children:P({id:"global.details",defaultMessage:"Details"})}),(0,e.jsxs)(k.r,{gap:5,children:[(0,e.jsx)(T.P,{col:6,xs:12,children:(0,e.jsx)(c.T,{errors:_,values:E,canEditInputs:g,onChange:d})},"name"),(0,e.jsx)(T.P,{col:6,xs:12,children:(0,e.jsx)(c.a,{errors:_,values:E,canEditInputs:g,onChange:d})},"description"),(0,e.jsx)(T.P,{col:6,xs:12,children:(0,e.jsx)(c.L,{isCreating:o,errors:_,values:E,onChange:d,token:r})},"lifespan"),(0,e.jsx)(T.P,{col:6,xs:12,children:(0,e.jsx)(c.b,{name:"permissions",values:E,errors:_,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:O=>{d({target:{name:"permissions",value:O}})},options:x,canEditInputs:g})},"permissions")]})]})})};A.propTypes={errors:n.shape({name:n.string,description:n.string,lifespan:n.string,type:n.string}),onChange:n.func.isRequired,canEditInputs:n.bool.isRequired,values:n.shape({name:n.string,description:n.string,lifespan:n.oneOfType([n.number,n.string]),type:n.string}).isRequired,isCreating:n.bool.isRequired,transferToken:n.shape({id:n.oneOfType([n.number,n.string]),type:n.string,lifespan:n.string,name:n.string,accessKey:n.string,permissions:n.array,description:n.string,createdAt:n.string})},A.defaultProps={errors:{},transferToken:{}};const I=({transferTokenName:_})=>{const{formatMessage:d}=(0,v.Z)();return(0,a.go)(),(0,e.jsxs)(K.o,{"aria-busy":"true",children:[(0,e.jsx)(a.SL,{name:"Transfer Tokens"}),(0,e.jsx)(S.T,{primaryAction:(0,e.jsx)(N.z,{disabled:!0,startIcon:(0,e.jsx)(z.Z,{}),type:"button",size:"L",children:d({id:"global.save",defaultMessage:"Save"})}),title:_||d({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,e.jsx)(U.D,{children:(0,e.jsx)(a.dO,{})})]})};I.defaultProps={transferTokenName:null},I.propTypes={transferTokenName:n.string};const B=f.Ry().shape({name:f.Z_(a.I0.string).max(100).required(a.I0.required),description:f.Z_().nullable(),lifespan:f.Rx().integer().min(0).nullable().defined(a.I0.required),permissions:f.Z_(a.I0.string).required(a.I0.required)}),W="Name already taken",H=()=>{(0,a.go)();const{formatMessage:_}=(0,v.Z)(),{lockApp:d,unlockApp:g}=(0,a.o1)(),o=(0,a.lm)(),E=(0,y.k6)(),[r,P]=(0,M.useState)(E.location.state?.transferToken.accessKey?{...E.location.state.transferToken}:null),{trackUsage:x}=(0,a.rS)(),O=(0,M.useRef)(x),{setCurrentStep:X}=(0,a.c1)(),b=(0,F.v9)(Y.s),{allowedActions:{canCreate:w,canUpdate:q,canRegenerate:ss}}=(0,a.ss)(b.settings["transfer-tokens"]),{params:{id:R}}=(0,y.$B)("/settings/transfer-tokens/:id"),{get:es,post:ns,put:ts}=(0,a.kY)(),i=R==="create",{formatAPIError:G}=(0,a.So)();(0,M.useEffect)(()=>{O.current(i?"didAddTokenFromList":"didEditTokenFromList",{tokenType:m.T})},[i]);const{status:as}=(0,Z.useQuery)(["transfer-token",R],async()=>{const{data:{data:t}}=await es(`/admin/transfer/tokens/${R}`);return P({...t}),t},{enabled:!i&&!r,onError(t){t.response.data.error.details?.code==="INVALID_TOKEN_SALT"?o({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):o({type:"warning",message:G(t)})}}),rs=async(t,D)=>{O.current(i?"willCreateToken":"willEditToken",{tokenType:m.T}),d();const j=t.lifespan&&parseInt(t.lifespan,10)&&t.lifespan!=="0"?parseInt(t.lifespan,10):null,L=t.permissions.split("-");try{const{data:{data:l}}=i?await ns("/admin/transfer/tokens",{...t,lifespan:j,permissions:L}):await ts(`/admin/transfer/tokens/${R}`,{name:t.name,description:t.description,permissions:L});g(),i&&(E.replace(`/settings/transfer-tokens/${l.id}`,{transferToken:l}),X("transferTokens.success")),P({...l}),o({type:"success",message:_(i?{id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"}:{id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),O.current(i?"didCreateToken":"didEditToken",{type:r?.permissions,tokenType:m.T})}catch(l){const os=(0,$.f)(l.response.data);D.setErrors(os),l?.response?.data?.error?.message===W?o({type:"warning",message:l.response.data.message||"notification.error.tokennamenotunique"}):l?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?o({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):o({type:"warning",message:l?.response?.data?.message||"notification.error"}),g()}},J=q&&!i||w&&i;if(!i&&!r&&as!=="success")return(0,e.jsx)(I,{transferTokenName:r?.name});const is=t=>{t?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?o({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):o({type:"warning",message:G(t)})};return(0,e.jsxs)(K.o,{children:[(0,e.jsx)(a.SL,{name:"Transfer Tokens"}),(0,e.jsx)(V.J9,{validationSchema:B,validateOnChange:!1,initialValues:{name:r?.name||"",description:r?.description||"",lifespan:r?.lifespan?r.lifespan.toString():r?.lifespan,permissions:r?.permissions.join("-")},enableReinitialize:!0,onSubmit:(t,D)=>rs(t,D),children:({errors:t,handleChange:D,isSubmitting:j,values:L})=>(0,e.jsxs)(a.l0,{children:[(0,e.jsx)(c.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"},token:r,setToken:P,canEditInputs:J,canRegenerate:ss,isSubmitting:j,regenerateUrl:"/admin/transfer/tokens/",onErrorRegenerate:is}),(0,e.jsx)(U.D,{children:(0,e.jsxs)(u.k,{direction:"column",alignItems:"stretch",gap:6,children:[Boolean(r?.name)&&(0,e.jsx)(c.c,{token:r?.accessKey,tokenType:m.T}),(0,e.jsx)(A,{errors:t,onChange:D,canEditInputs:J,isCreating:i,values:L,transferToken:r})]})})]})})]})}}}]);
