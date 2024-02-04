"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[322],{70322:(j,D,s)=>{s.r(D),s.d(D,{default:()=>S});var t=s(74081),_=s(27279),i=s(73354),c=s(27875),O=s(48102),h=s(74758),o=s(93415),f=s(10701),A=s(21395),C=s(23298),m=s(74577),l=s(2548),v=s(12881),E=s(28040),d=s(684),I=s(41352),r=s(98264),g=s(92191),u=s(71563),L=s(61020),R=s(72450),M=s(47853),a=s(47501),e=s(78658),U=s(40464);const x=M.Ry().shape({restrictedAccess:M.O7(),password:M.Z_().when("restrictedAccess",(n,p)=>n?p.required(d.translatedErrors.required):p)}),S=()=>{(0,d.useFocusWhenNavigate)();const{formatMessage:n}=(0,L.Z)(),{submit:p,data:W,isLoading:w}=(0,e.u)(),[B,Z]=(0,_.useState)(!1),{allowedActions:F}=(0,d.useRBAC)(a.P),N=T=>{p.mutate({prefix:W?.prefix,body:T})};return(0,t.jsx)(i.o,{children:w?(0,t.jsx)(d.LoadingIndicatorPage,{children:"Plugin settings are loading"}):(0,t.jsx)(u.J9,{initialValues:{restrictedAccess:W?.documentationAccess.restrictedAccess||!1,password:""},onSubmit:N,validationSchema:x,children:({handleSubmit:T,values:P,handleChange:H,errors:y,setFieldTouched:z,setFieldValue:K,dirty:J})=>(0,t.jsxs)(d.Form,{noValidate:!0,onSubmit:T,children:[(0,t.jsx)(c.T,{title:n({id:(0,e.g)("plugin.name"),defaultMessage:"Documentation"}),subtitle:n({id:(0,e.g)("pages.SettingsPage.header.description"),defaultMessage:"Configure the documentation plugin"}),primaryAction:(0,t.jsx)(O.z,{type:"submit",startIcon:(0,t.jsx)(I.Z,{}),disabled:!J&&F.canUpdate,children:n({id:(0,e.g)("pages.SettingsPage.Button.save"),defaultMessage:"Save"})})}),(0,t.jsx)(h.D,{children:(0,t.jsx)(o.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(f.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(A.Z,{variant:"delta",as:"h2",children:n({id:"global.settings",defaultMessage:"Settings"})}),(0,t.jsxs)(C.r,{gap:4,children:[(0,t.jsx)(m.P,{col:6,s:12,children:(0,t.jsx)(l.s,{name:"restrictedAccess",label:n({id:(0,e.g)("pages.SettingsPage.toggle.label"),defaultMessage:"Restricted Access"}),hint:n({id:(0,e.g)("pages.SettingsPage.toggle.hint"),defaultMessage:"Make the documentation endpoint private"}),checked:P.restrictedAccess,onChange:()=>{P.restrictedAccess===!0&&(K("password","",!1),z("password",!1,!1)),K("restrictedAccess",!P.restrictedAccess,!1)},onLabel:"On",offLabel:"Off"})}),P.restrictedAccess&&(0,t.jsx)(m.P,{col:6,s:12,children:(0,t.jsx)(v.o,{label:n({id:"global.password",defaultMessage:"Password"}),name:"password",placeholder:"**********",type:B?"text":"password",value:P.password,onChange:H,error:y.password?n({id:y.password,defaultMessage:"Invalid value"}):null,endAction:(0,t.jsx)($,{onClick:Q=>{Q.stopPropagation(),Z(V=>!V)},label:n(B?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"}),children:B?(0,t.jsx)(r.Z,{}):(0,t.jsx)(g.Z,{})})})})]})]})})})]})})})},$=(0,R.default)(E.E)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:n})=>n.colors.neutral600};
    }
  }
`},78658:(j,D,s)=>{s.d(D,{g:()=>O,u:()=>h});var t=s(27279),_=s(684),i=s(40464),c=s(47501);const O=o=>`${c.p}.${o}`,h=()=>{const o=(0,_.useNotification)(),{del:f,post:A,put:C,get:m}=(0,_.useFetchClient)(),{formatAPIError:l}=(0,_.useAPIErrorHandler)(),{isLoading:v,isError:E,data:d,refetch:I,error:r}=(0,i.useQuery)(["get-documentation",c.p],async()=>{const{data:a}=await m(`/${c.p}/getInfos`);return a});(0,t.useEffect)(()=>{E&&r&&o({type:"warning",message:r?l(r):{id:"notification.error"}})},[E,r,o,l]);const g=a=>{o({type:"warning",message:l(a)})},u=(a,e,U)=>{I(),o({type:a,message:{id:O(e),defaultMessage:U}})},L=(0,i.useMutation)(({prefix:a,version:e})=>f(`${a}/deleteDoc/${e}`),{onSuccess:()=>u("info","notification.delete.success","Successfully deleted documentation"),onError:g}),R=(0,i.useMutation)(({prefix:a,body:e})=>C(`${a}/updateSettings`,e),{onSuccess:()=>u("success","notification.update.success","Successfully updated settings"),onError:g}),M=(0,i.useMutation)(({prefix:a,version:e})=>A(`${a}/regenerateDoc`,{version:e}),{onSuccess:()=>u("info","notification.generate.success","Successfully generated documentation"),onError:g});return{data:d,isLoading:v,isError:E,remove:L,submit:R,regenerate:M}}}}]);