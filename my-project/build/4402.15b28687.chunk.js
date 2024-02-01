(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[4402],{5554:N=>{function B(l,n,p,_){for(var m=-1,b=l==null?0:l.length;++m<b;){var f=l[m];n(_,f,p(f),l)}return _}N.exports=B},44154:(N,B,l)=>{var n=l(29038);function p(_,m,b,f){return n(_,function($,M,S){m(f,$,b($),S)}),f}N.exports=p},38662:(N,B,l)=>{var n=l(5554),p=l(44154),_=l(70828),m=l(90485);function b(f,$){return function(M,S){var w=m(M)?n:p,Y=$?$():{};return w(M,f,_(S,2),Y)}}N.exports=b},6219:(N,B,l)=>{var n=l(59202),p=1/0;function _(m){var b=m==null?0:m.length;return b?n(m,p):[]}N.exports=_},80655:(N,B,l)=>{var n=l(76756),p=l(38662),_=Object.prototype,m=_.hasOwnProperty,b=p(function(f,$,M){m.call(f,M)?f[M].push($):n(f,M,[$])});N.exports=b},44402:(N,B,l)=>{"use strict";l.d(B,{P:()=>Rt,a:()=>Dt,u:()=>Tt});var n=l(53657),p=l(96125),_=l(99283),m=l(93134),b=l(60590),f=l(2669),$=l(7564),M=l(83416),S=l(68577),w=l(17855),Y=l(77461),H=l(91019),D=l(37083),v=l(50810),k=l(91845),G=l(91589),q=l(58505),le=l(74860),de=l(14382),se=l(32255),z=l(49937),K=l(29370),ee=l(80922),Z=l(85392),r=l(59013),U=l(82154),Ae=l(53047),be=l(12646),j=l(87426),ce=l(53169),je=l(26104),Re=l(41176),qe=l(58035),R=l(20590),Oe=l(96435),Te=l(99216),Ee=l(41062),he=l(78331),ue=l(80655),fe=l(66437),Es=l(6219),ne=l(13236),Ms=l(1108),Q=l(22507),De=l(7453),Xe=l(80107);const[vs,Ps]=(0,Ae.k)("PermissionsDataManager"),pe=()=>Ps("usePermissionsDataManager"),As=j.default.div`
  position: relative;

  ${({hasConditions:e,disabled:s,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${s?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,$e=({onClick:e,className:s,hasConditions:o,variant:t})=>{const{formatMessage:i}=(0,U.Z)();return(0,n.jsx)(As,{hasConditions:o,className:s,children:(0,n.jsx)(_.z,{variant:t,startIcon:(0,n.jsx)(ce.Z,{}),onClick:e,children:i({id:"global.settings",defaultMessage:"Settings"})})})};$e.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},$e.propTypes={onClick:r.func.isRequired,className:r.string,hasConditions:r.bool,variant:r.string};const Me=(0,j.default)($e)``,Rs=e=>Object.values(e).map(s=>Object.entries(s).filter(([,o])=>o).map(([o])=>o)).flat(),Ts=e=>e.reduce((s,[o,t])=>(s.push({label:fe(o),children:t.map(i=>({label:i.displayName,value:i.id}))}),s),[]),Ds=(e,s)=>e.map(([,o])=>o).flat().reduce((o,t)=>({[t.id]:s.includes(t.id),...o}),{}),Ye=({arrayOfOptionsGroupedByCategory:e,isFormDisabled:s,isGrey:o,label:t,name:i,onChange:a,value:d})=>{const{formatMessage:c}=(0,U.Z)(),g=u=>{a(i,Ds(e,u))};return(0,n.jsxs)(m.k,{as:"li",background:o?"neutral100":"neutral0",paddingBottom:3,paddingTop:3,children:[(0,n.jsxs)(m.k,{paddingLeft:6,style:{width:180},children:[(0,n.jsxs)(b.Z,{variant:"sigma",textColor:"neutral600",children:[c({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"]}),(0,n.jsx)(b.Z,{variant:"sigma",title:t,textColor:"primary600",ellipsis:!0,children:c({id:`Settings.roles.form.permissions.${t.toLowerCase()}`,defaultMessage:t})}),(0,n.jsxs)(b.Z,{variant:"sigma",textColor:"neutral600",children:["\xA0",c({id:"Settings.permissions.conditions.when",defaultMessage:"When"})]})]}),(0,n.jsx)(f.x,{style:{maxWidth:430,width:"100%"},children:(0,n.jsx)($.Q,{id:i,customizeContent:u=>`${u.length} currently selected`,onChange:g,value:Rs(d),options:Ts(e),disabled:s})})]})};Ye.propTypes={arrayOfOptionsGroupedByCategory:r.array.isRequired,isFormDisabled:r.bool.isRequired,isGrey:r.bool.isRequired,label:r.string.isRequired,name:r.string.isRequired,value:r.object.isRequired,onChange:r.func.isRequired};const $s=(e,s)=>e.reduce((o,t)=>(o[t.id]=R(s,t.id,!1),o),{}),Ss=(e,s)=>e.reduce((o,t)=>{const[i,a]=t,d=$s(a,s);return o[i]=d,o},{}),Ls=(e,s,o)=>e.reduce((t,i)=>{const a=R(s,[...i.pathToConditionsObject,"conditions"],{}),d=Ss(o,a);return t[i.pathToConditionsObject.join("..")]=d,t},{}),Se=({actions:e,headerBreadCrumbs:s,isFormDisabled:o,onClosed:t,onToggle:i})=>{const{formatMessage:a}=(0,U.Z)(),{availableConditions:d,modifiedData:c,onChangeConditions:g}=pe(),u=(0,p.useMemo)(()=>Object.entries(ue(d,"category")),[d]),h=e.filter(({isDisplayed:x,hasSomeActionsSelected:A,hasAllActionsSelected:E})=>x&&(A||E)),C=(0,p.useMemo)(()=>Ls(h,c,u),[h,c,u]),[O,L]=(0,p.useState)(C),P=(x,A)=>{L((0,he.ZP)(E=>{E[x]||(E[x]={}),E[x].default||(E[x].default={}),E[x].default=A}))},y=()=>{const x=Object.entries(O).reduce((A,E)=>{const[T,V]=E,W=Object.values(V).reduce((F,I)=>({...F,...I}),{});return A[T]=W,A},{});g(x),i()};return(0,n.jsxs)(M.P,{labelledBy:"condition-modal-breadcrumbs",onClose:t,children:[(0,n.jsx)(S.x,{children:(0,n.jsx)(Te.O,{id:"condition-modal-breadcrumbs",label:s.join(", "),children:s.map((x,A,E)=>(0,n.jsx)(Ee.$,{isCurrent:A===E.length-1,children:fe(a({id:x,defaultMessage:x}))},x))})}),(0,n.jsxs)(w.f,{children:[h.length===0&&(0,n.jsx)(b.Z,{children:a({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})}),(0,n.jsx)("ul",{children:h.map(({actionId:x,label:A,pathToConditionsObject:E},T)=>{const V=E.join("..");return(0,n.jsx)(Ye,{arrayOfOptionsGroupedByCategory:u,label:A,isFormDisabled:o,isGrey:T%2===0,name:V,onChange:P,value:R(O,V,{})},x)})})]}),(0,n.jsx)(Y.m,{startActions:(0,n.jsx)(_.z,{variant:"tertiary",onClick:i,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,n.jsx)(_.z,{onClick:y,children:a({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"})})})]})};Se.propTypes={actions:r.arrayOf(r.shape({actionId:r.string.isRequired,checkboxName:r.string,hasSomeActionsSelected:r.bool.isRequired,hasAllActionsSelected:r.bool,isDisplayed:r.bool.isRequired,label:r.string})).isRequired,headerBreadCrumbs:r.arrayOf(r.string).isRequired,isFormDisabled:r.bool.isRequired,onClosed:r.func.isRequired,onToggle:r.func.isRequired};const ge=`${120/16}rem`,Le=`${200/16}rem`,ve=`${53/16}rem`,Be=j.default.div`
  width: ${ge};
`,ze=(0,j.default)(m.k)`
  padding-right: ${({theme:e})=>e.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:e})=>e&&"cursor: pointer;"}
`,Ie=({children:e,isCollapsable:s,isActive:o,isFormDisabled:t,label:i,onChange:a,onClick:d,checkboxName:c,someChecked:g,value:u})=>{const{formatMessage:h}=(0,U.Z)();return(0,n.jsxs)(m.k,{alignItems:"center",paddingLeft:6,style:{width:Le,flexShrink:0},children:[(0,n.jsx)(f.x,{paddingRight:2,children:(0,n.jsx)(H.C,{name:c,"aria-label":h({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:t,onValueChange:C=>a({target:{name:c,value:C}}),indeterminate:g,value:u})}),(0,n.jsxs)(ze,{title:i,alignItems:"center",isCollapsable:s,...s&&{onClick:d,"aria-expanded":o,onKeyDown:({key:C})=>(C==="Enter"||C===" ")&&d(),tabIndex:0,role:"button"},children:[(0,n.jsx)(b.Z,{fontWeight:o?"bold":"",textColor:o?"primary600":"neutral800",ellipsis:!0,children:fe(i)}),e]})]})};Ie.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Ie.propTypes={checkboxName:r.string,children:r.node,label:r.string.isRequired,isCollapsable:r.bool,isFormDisabled:r.bool.isRequired,onChange:r.func,onClick:r.func.isRequired,someChecked:r.bool,value:r.bool,isActive:r.bool.isRequired};const Qe=(0,p.memo)(Ie),oe=e=>ne(e)?Es(Object.values(e).map(s=>ne(s)?oe(s):s)):[],ke=e=>e?Object.keys(e).reduce((s,o)=>(o!=="conditions"&&(s[o]=e[o]),s),{}):null,ie=e=>{const s=ke(e),o=oe(s);if(!o.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const t=o.every(a=>a),i=o.some(a=>a)&&!t;return{hasAllActionsSelected:t,hasSomeActionsSelected:i}},xe=(0,j.default)(je.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:e})=>e?"180":"0"}deg);
  margin-left: ${({theme:e})=>e.spaces[2]};
`,Ce=e=>`
  ${b.Z} {
    color: ${e.colors.primary600};
    font-weight: ${e.fontWeights.bold}
  }
  ${xe} {
    display: block;
    path {
      fill: ${e.colors.primary600}
    };
  }
`,Bs=(e,s,o)=>e.map(({actionId:t,isDisplayed:i,applyToProperties:a,label:d})=>{if(!i)return{actionId:t,hasSomeActionsSelected:!1,isDisplayed:i};const c=[...o.split(".."),t],g=Z(a)?[...c,"properties","enabled"]:c,u=g.join(".."),h=R(s,[...c,"conditions"],null),C=oe(h).some(y=>y);if(Z(a)){const y=R(s,g,!1);return{actionId:t,checkboxName:u,hasAllActionsSelected:y,hasConditions:C,hasSomeActionsSelected:y,isDisplayed:i,isParentCheckbox:!1,label:d,pathToConditionsObject:c}}const O=R(s,g,null),{hasAllActionsSelected:L,hasSomeActionsSelected:P}=ie(O);return{actionId:t,checkboxName:u,hasAllActionsSelected:L,hasConditions:C,hasSomeActionsSelected:P,isDisplayed:i,isParentCheckbox:!0,label:d,pathToConditionsObject:c}}),We=(e,s)=>`
  ${Je} {
    background-color: ${e.colors.primary100};
    color: ${e.colors.primary600};
    border-radius: ${s?"2px 2px 0 0":"2px"};
  }
  ${ss} {
    display: flex;
  }
  ${Me} {
    display: block;
  }
  &:hover {
   ${Ce(e)}
  }

  &:focus-within {
    ${({theme:o,isActive:t})=>We(o,t)}
  }
  
`,Je=j.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${ve};
  background-color: ${({isGrey:e,theme:s})=>e?s.colors.neutral100:s.colors.neutral0};
  border: 1px solid transparent;
`,Is=j.default.div`
  display: inline-flex;
  min-width: 100%;

  ${Me} {
    display: none;
  }
  ${({isActive:e,theme:s})=>e&&We(s,e)}
  &:hover {
    ${({theme:e,isActive:s})=>We(e,s)}
  }
`,es=(0,j.default)(m.k)`
  width: ${ge};
  position: relative;
`,ss=(0,j.default)(f.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,ts=j.default.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:e})=>e.colors.primary600};
`,ks=(0,j.default)(f.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,ns=({availableActions:e,isActive:s,isGrey:o,isFormDisabled:t,label:i,onClickToggle:a,pathToData:d})=>{const[c,g]=(0,p.useState)(!1),{formatMessage:u}=(0,U.Z)(),{modifiedData:h,onChangeParentCheckbox:C,onChangeSimpleCheckbox:O}=pe(),L=()=>{g(W=>!W)},P=()=>{g(!1)},y=R(h,d.split(".."),{}),x=(0,p.useMemo)(()=>Object.keys(y).reduce((W,F)=>(W[F]=Oe(y[F],"conditions"),W),{}),[y]),{hasAllActionsSelected:A,hasSomeActionsSelected:E}=ie(x),T=(0,p.useMemo)(()=>Bs(e,h,d),[e,h,d]),V=T.some(({hasConditions:W})=>W);return(0,n.jsxs)(Is,{isActive:s,children:[(0,n.jsxs)(Je,{isGrey:o,children:[(0,n.jsx)(Qe,{isCollapsable:!0,isFormDisabled:t,label:i,checkboxName:d,onChange:C,onClick:a,someChecked:E,value:A,isActive:s,children:(0,n.jsx)(ss,{paddingLeft:2,children:s?(0,n.jsx)(Re.Z,{}):(0,n.jsx)(qe.Z,{})})}),(0,n.jsx)(m.k,{style:{flex:1},children:T.map(({actionId:W,hasConditions:F,hasAllActionsSelected:I,hasSomeActionsSelected:J,isDisplayed:me,isParentCheckbox:X,checkboxName:te,label:_e})=>me?X?(0,n.jsxs)(es,{justifyContent:"center",alignItems:"center",children:[F&&(0,n.jsx)(ts,{}),(0,n.jsx)(H.C,{disabled:t,name:te,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${_e} ${i}`}),onValueChange:re=>{C({target:{name:te,value:re}})},indeterminate:J,value:I})]},W):(0,n.jsxs)(es,{justifyContent:"center",alignItems:"center",children:[F&&(0,n.jsx)(ts,{}),(0,n.jsx)(H.C,{disabled:t,indeterminate:F,name:te,onValueChange:re=>{O({target:{name:te,value:re}})},value:I})]},W):(0,n.jsx)(Be,{},W))}),c&&(0,n.jsx)(Se,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:T,isFormDisabled:t,onClosed:P,onToggle:L})]}),(0,n.jsx)(ks,{children:(0,n.jsx)(Me,{onClick:L,hasConditions:V})})]})};ns.propTypes={availableActions:r.array.isRequired,isActive:r.bool.isRequired,isGrey:r.bool.isRequired,isFormDisabled:r.bool.isRequired,label:r.string.isRequired,onClickToggle:r.func.isRequired,pathToData:r.string.isRequired};const Ws=j.default.span`
  color: ${({theme:e})=>e.colors.danger700};
  padding-left: ${({theme:e})=>e.spaces[1]}px;
`,os=()=>(0,n.jsx)(Ws,{children:"*"}),Ks=(e,s)=>e.map(o=>{const t=Array.isArray(o.subjects)&&o.subjects.indexOf(s)!==-1;return{...o,isDisplayed:t}}),Us=(0,j.default)(f.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e})=>e.colors.primary200};
    display: block;
  }
`,Ns=j.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:s})=>e.colors[s]};
  }
`,Ke=e=>(0,n.jsx)(Us,{children:(0,n.jsx)(Ns,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})})});Ke.defaultProps={fill:"primary200"},Ke.propTypes={fill:r.string};const Fs=(0,p.memo)(Ke),is=(0,j.default)(m.k)`
  width: ${ge};
  position: relative;
`,Zs=(0,j.default)(m.k)`
  height: ${ve};
`,Vs=(0,j.default)(f.x)`
  padding-left: ${31/16}rem;
`,ws=(0,j.default)(f.x)`
  border-left: ${({isVisible:e,theme:s})=>e?`4px solid ${s.colors.primary200}`:"4px solid transparent"};
`,Hs=(0,j.default)(m.k)`
  padding-left: ${({theme:e})=>e.spaces[4]};
  width: ${({level:e})=>145-e*36}px;

  ${({isCollapsable:e,theme:s})=>e&&`
      ${xe} {
        display: block;
        color: ${s.colors.neutral100};
      }
      &:hover {
        ${Ce(s)}
      }
  `}
  ${({isActive:e,theme:s})=>e&&Ce(s)};
`,Gs=j.default.div`
  padding-top: ${({theme:e})=>e.spaces[2]};
  margin-top: ${({theme:e})=>e.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:e})=>e.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,Ue=({childrenForm:e,isFormDisabled:s,recursiveLevel:o,pathToDataFromActionRow:t,propertyActions:i,parentName:a,propertyName:d})=>{const{formatMessage:c}=(0,U.Z)(),{modifiedData:g,onChangeParentCheckbox:u,onChangeSimpleCheckbox:h}=pe(),[C,O]=(0,p.useState)(null),L=y=>{O(x=>x===y?null:y)},P=(0,p.useMemo)(()=>C?e.find(({value:y})=>y===C):null,[C,e]);return(0,n.jsxs)(Vs,{children:[(0,n.jsx)(Gs,{}),e.map(({label:y,value:x,required:A,children:E},T)=>{const V=T+1<e.length,W=Array.isArray(E),F=C===x;return(0,n.jsxs)(ws,{isVisible:V,children:[(0,n.jsxs)(Zs,{children:[(0,n.jsx)(Fs,{color:"primary200"}),(0,n.jsxs)(m.k,{style:{flex:1},children:[(0,n.jsx)(Hs,{level:o,isActive:F,isCollapsable:W,children:(0,n.jsxs)(ze,{alignItems:"center",isCollapsable:W,...W&&{onClick:()=>L(x),"aria-expanded":F,onKeyDown:({key:I})=>(I==="Enter"||I===" ")&&L(x),tabIndex:0,role:"button"},title:y,children:[(0,n.jsx)(b.Z,{ellipsis:!0,children:fe(y)}),A&&(0,n.jsx)(os,{}),(0,n.jsx)(xe,{$isActive:F})]})}),(0,n.jsx)(m.k,{style:{flex:1},children:i.map(({actionId:I,label:J,isActionRelatedToCurrentProperty:me})=>{if(!me)return(0,n.jsx)(Be,{},I);const X=[...t.split(".."),I,"properties",d,...a.split(".."),x],te=R(g,X,!1);if(!E)return(0,n.jsx)(is,{justifyContent:"center",alignItems:"center",children:(0,n.jsx)(H.C,{disabled:s,name:X.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${y} ${J}`}),onValueChange:ae=>{h({target:{name:X.join(".."),value:ae}})},value:te})},J);const{hasAllActionsSelected:_e,hasSomeActionsSelected:re}=ie(te);return(0,n.jsx)(is,{justifyContent:"center",alignItems:"center",children:(0,n.jsx)(H.C,{disabled:s,name:X.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${y} ${J}`}),onValueChange:ae=>{u({target:{name:X.join(".."),value:ae}})},value:_e,indeterminate:re},J)},J)})})]})]}),P&&F&&(0,n.jsx)(f.x,{paddingBottom:2,children:(0,n.jsx)(Ue,{isFormDisabled:s,parentName:`${a}..${x}`,pathToDataFromActionRow:t,propertyActions:i,propertyName:d,recursiveLevel:o+1,childrenForm:P.children})})]},x)})]})};Ue.propTypes={childrenForm:r.array.isRequired,isFormDisabled:r.bool.isRequired,parentName:r.string.isRequired,pathToDataFromActionRow:r.string.isRequired,propertyActions:r.array.isRequired,propertyName:r.string.isRequired,recursiveLevel:r.number.isRequired};const qs=(0,p.memo)(Ue),Xs=e=>e.reduce((o,t)=>(t.isActionRelatedToCurrentProperty&&o.push(t.actionId),o),[]),Ys=(e,s,o,t,i)=>{const d=Xs(e).reduce((c,g)=>{const u=[...o.split(".."),g,"properties",t,i],h=R(s,u,!1);return c[g]=h,c},{});return ie(d)},rs=(0,j.default)(m.k)`
  width: ${ge};
  position: relative;
`,zs=(0,j.default)(m.k)`
  height: ${ve};
  flex: 1;

  ${({isCollapsable:e,theme:s})=>e&&`
      ${xe} {
        display: block;
        color: ${s.colors.neutral100};
      }
      &:hover {
        ${Ce(s)}
      }
  `}
  ${({isActive:e,theme:s})=>e&&Ce(s)};
`,Ne=({childrenForm:e,label:s,isFormDisabled:o,name:t,required:i,pathToData:a,propertyActions:d,propertyName:c,isOdd:g})=>{const{formatMessage:u}=(0,U.Z)(),[h,C]=(0,p.useState)(null),{modifiedData:O,onChangeCollectionTypeLeftActionRowCheckbox:L,onChangeParentCheckbox:P,onChangeSimpleCheckbox:y}=pe(),x=h===t,A=(0,p.useMemo)(()=>Array.isArray(e)?e:[],[e]),E=A.length>0,T=(0,p.useCallback)(()=>{E&&C(I=>I===t?null:t)},[E,t]),V=({target:{value:I}})=>{L(a,c,t,I)},{hasAllActionsSelected:W,hasSomeActionsSelected:F}=(0,p.useMemo)(()=>Ys(d,O,a,c,t),[d,O,a,c,t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(zs,{alignItems:"center",isCollapsable:E,isActive:x,background:g?"neutral100":"neutral0",children:(0,n.jsxs)(m.k,{children:[(0,n.jsxs)(Qe,{onChange:V,onClick:T,isCollapsable:E,isFormDisabled:o,label:s,someChecked:F,value:W,isActive:x,children:[i&&(0,n.jsx)(os,{}),(0,n.jsx)(xe,{$isActive:x})]}),(0,n.jsx)(m.k,{children:d.map(({label:I,isActionRelatedToCurrentProperty:J,actionId:me})=>{if(!J)return(0,n.jsx)(Be,{},I);const X=[...a.split(".."),me,"properties",c,t];if(!E){const ae=R(O,X,!1);return(0,n.jsx)(rs,{justifyContent:"center",alignItems:"center",children:(0,n.jsx)(H.C,{disabled:o,name:X.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${t} ${I}`}),onValueChange:$t=>{y({target:{name:X.join(".."),value:$t}})},value:ae})},me)}const te=R(O,X,{}),{hasAllActionsSelected:_e,hasSomeActionsSelected:re}=ie(te);return(0,n.jsx)(rs,{justifyContent:"center",alignItems:"center",children:(0,n.jsx)(H.C,{disabled:o,name:X.join(".."),onValueChange:ae=>{P({target:{name:X.join(".."),value:ae}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${t} ${I}`}),value:_e,indeterminate:re})},I)})})]})}),x&&(0,n.jsx)(qs,{childrenForm:A,isFormDisabled:o,parentName:t,pathToDataFromActionRow:a,propertyName:c,propertyActions:d,recursiveLevel:0})]})};Ne.defaultProps={childrenForm:[],required:!1},Ne.propTypes={childrenForm:r.array,label:r.string.isRequired,isFormDisabled:r.bool.isRequired,name:r.string.isRequired,pathToData:r.string.isRequired,propertyActions:r.array.isRequired,propertyName:r.string.isRequired,required:r.bool,isOdd:r.bool.isRequired};const Qs=(0,p.memo)(Ne),as=(0,j.default)(m.k)`
  width: ${ge};
  flex-shrink: 0;
`,Js=(0,j.default)(m.k)`
  width: ${Le};
  height: ${ve};
  flex-shrink: 0;
`,ls=({headers:e,label:s})=>{const{formatMessage:o}=(0,U.Z)(),t=o({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:s});return(0,n.jsxs)(m.k,{children:[(0,n.jsx)(Js,{alignItems:"center",paddingLeft:6,children:(0,n.jsx)(b.Z,{variant:"sigma",textColor:"neutral500",children:t})}),e.map(i=>i.isActionRelatedToCurrentProperty?(0,n.jsx)(as,{justifyContent:"center",children:(0,n.jsx)(b.Z,{variant:"sigma",textColor:"neutral500",children:o({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label})})},i.label):(0,n.jsx)(as,{},i.label))]})};ls.propTypes={headers:r.arrayOf(r.shape({label:r.string.isRequired,isActionRelatedToCurrentProperty:r.bool.isRequired})).isRequired,label:r.string.isRequired};const et=(e,s)=>e.map(o=>{const t=Array.isArray(o.applyToProperties)&&o.applyToProperties.indexOf(s)!==-1&&o.isDisplayed;return{label:o.label,actionId:o.actionId,isActionRelatedToCurrentProperty:t}}),st=j.default.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,ds=({availableActions:e,childrenForm:s,isFormDisabled:o,label:t,pathToData:i,propertyName:a})=>{const d=(0,p.useMemo)(()=>et(e,a),[e,a]);return(0,n.jsxs)(st,{children:[(0,n.jsx)(ls,{label:t,headers:d}),(0,n.jsx)(f.x,{children:s.map(({children:c,label:g,value:u,required:h},C)=>(0,n.jsx)(Qs,{childrenForm:c,label:g,isFormDisabled:o,name:u,required:h,propertyActions:d,pathToData:i,propertyName:a,isOdd:C%2===0},u))})]})};ds.propTypes={childrenForm:r.array.isRequired,availableActions:r.array.isRequired,isFormDisabled:r.bool.isRequired,label:r.string.isRequired,pathToData:r.string.isRequired,propertyName:r.string.isRequired};const tt=j.default.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:e,isActive:s})=>s&&`border: 1px solid ${e.colors.primary600};`}
`,cs=({allActions:e,contentTypeName:s,label:o,index:t,isActive:i,isFormDisabled:a,onClickToggleCollapse:d,pathToData:c,properties:g})=>{const u=(0,p.useCallback)(()=>{d(s)},[s,d]),h=(0,p.useMemo)(()=>Ks(e,s),[e,s]);return(0,n.jsxs)(tt,{isActive:i,children:[(0,n.jsx)(ns,{availableActions:h,isActive:i,isGrey:t%2===0,isFormDisabled:a,label:o,onClickToggle:u,pathToData:c}),i&&g.map(({label:C,value:O,children:L})=>(0,n.jsx)(ds,{availableActions:h,childrenForm:L,isFormDisabled:a,label:C,pathToData:c,propertyName:O},O))]})};cs.propTypes={allActions:r.array.isRequired,contentTypeName:r.string.isRequired,index:r.number.isRequired,isActive:r.bool.isRequired,isFormDisabled:r.bool.isRequired,label:r.string.isRequired,onClickToggleCollapse:r.func.isRequired,pathToData:r.string.isRequired,properties:r.array.isRequired};const Fe=({actions:e,isFormDisabled:s,pathToData:o,subjects:t})=>{const[i,a]=(0,p.useState)(null),d=c=>{a(i===c?null:c)};return t.map(({uid:c,label:g,properties:u},h)=>(0,n.jsx)(cs,{allActions:e,contentTypeName:c,label:g,isActive:i===c,isFormDisabled:s,index:h,onClickToggleCollapse:d,pathToData:`${o}..${c}`,properties:u},c))};Fe.defaultProps={actions:[],subjects:[]},Fe.propTypes={actions:r.array.isRequired,isFormDisabled:r.bool.isRequired,pathToData:r.string.isRequired,subjects:r.arrayOf(r.shape({uid:r.string.isRequired,label:r.string.isRequired,properties:r.array.isRequired}))};const nt=(0,p.memo)(Fe),ot=e=>e.filter(({subjects:s})=>s&&s.length),it=e=>e.map(({actionId:s})=>s),rt=(e,s)=>e.reduce((o,t)=>(Object.keys(s).forEach(i=>{const a=R(s,[i,t],{}),d={[i]:ke(a)};o[t]?o[t]={...o[t],...d}:o[t]=d}),o),{}),at=(e,s)=>{const o=it(e),t=rt(o,s);return Object.keys(t).reduce((a,d)=>(a[d]=ie(t[d]),a),{})},lt=(0,j.default)(m.k)`
  width: ${ge};
  flex-shrink: 0;
`,Ze=({actions:e,isFormDisabled:s,kind:o})=>{const{formatMessage:t}=(0,U.Z)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:a}=pe(),d=(0,p.useMemo)(()=>ot(e),[e]),c=(0,p.useMemo)(()=>at(d,i[o]),[i,d,o]);return(0,n.jsx)(f.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:Le},children:(0,n.jsx)(m.k,{gap:0,children:d.map(({label:g,actionId:u})=>(0,n.jsxs)(lt,{direction:"column",alignItems:"center",justifyContent:"center",gap:3,children:[(0,n.jsx)(b.Z,{variant:"sigma",textColor:"neutral500",children:t({id:`Settings.roles.form.permissions.${g.toLowerCase()}`,defaultMessage:g})}),(0,n.jsx)(H.C,{disabled:s,onValueChange:h=>{a(o,u,h)},name:u,"aria-label":t({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:t({id:`Settings.roles.form.permissions.${g.toLowerCase()}`,defaultMessage:g})}),value:R(c,[u,"hasAllActionsSelected"],!1),indeterminate:R(c,[u,"hasSomeActionsSelected"],!1)})]},u))})})};Ze.defaultProps={actions:[]},Ze.propTypes={actions:r.arrayOf(r.shape({label:r.string.isRequired,actionId:r.string.isRequired,subjects:r.array.isRequired})),isFormDisabled:r.bool.isRequired,kind:r.string.isRequired};const dt=(0,p.memo)(Ze),ct=(0,j.default)(f.x)`
  overflow-x: auto;
`,us=({isFormDisabled:e,kind:s,layout:{actions:o,subjects:t}})=>{const i=be([...t],"label");return(0,n.jsxs)(ct,{background:"neutral0",children:[(0,n.jsx)(dt,{actions:o,kind:s,isFormDisabled:e}),(0,n.jsx)(nt,{actions:o,isFormDisabled:e,pathToData:s,subjects:i})]})};us.propTypes={isFormDisabled:r.bool.isRequired,kind:r.string.isRequired,layout:r.shape({actions:r.array,subjects:r.arrayOf(r.shape({uid:r.string.isRequired,label:r.string.isRequired,properties:r.array.isRequired}))}).isRequired};const ps=(0,p.memo)(us),ut=(e,s,o)=>e.map(t=>{const i=[...o,t.action,"properties","enabled"],a=R(s,i,!1),d=R(s,[...o,t.action,"conditions"],{}),c=oe(d).some(g=>g);return{...t,isDisplayed:a,checkboxName:i.join(".."),hasSomeActionsSelected:a,value:a,hasConditions:c,label:t.displayName,actionId:t.action,pathToConditionsObject:[...o,t.action]}}),pt=e=>{const s=Object.entries(e).reduce((t,i)=>{const[a,{conditions:d}]=i;return t[a]=d,t},{});return oe(s).some(t=>t)},gt=j.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,mt=j.default.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:e,disabled:s,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${s?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,gs=({categoryName:e,isFormDisabled:s,subCategoryName:o,actions:t,pathToData:i})=>{const[a,d]=(0,p.useState)(!1),{modifiedData:c,onChangeParentCheckbox:g,onChangeSimpleCheckbox:u}=pe(),{formatMessage:h}=(0,U.Z)(),C=R(c,i,{}),O=(0,p.useMemo)(()=>Object.keys(C).reduce((T,V)=>(T[V]=ke(C[V]),T),{}),[C]),{hasAllActionsSelected:L,hasSomeActionsSelected:P}=ie(O),y=()=>{d(T=>!T)},x=()=>{d(!1)},A=ut(t,c,i),E=pt(R(c,[...i],{}));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(f.x,{children:[(0,n.jsxs)(m.k,{justifyContent:"space-between",alignItems:"center",children:[(0,n.jsx)(f.x,{paddingRight:4,children:(0,n.jsx)(b.Z,{variant:"sigma",textColor:"neutral600",children:o})}),(0,n.jsx)(gt,{}),(0,n.jsx)(f.x,{paddingLeft:4,children:(0,n.jsx)(D.X,{name:i.join(".."),disabled:s,onValueChange:T=>{g({target:{name:i.join(".."),value:T}})},indeterminate:P,value:L,children:h({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,n.jsxs)(m.k,{paddingTop:6,paddingBottom:6,children:[(0,n.jsx)(v.r,{gap:2,style:{flex:1},children:A.map(({checkboxName:T,value:V,action:W,displayName:F,hasConditions:I})=>(0,n.jsx)(k.P,{col:3,children:(0,n.jsx)(mt,{disabled:s,hasConditions:I,children:(0,n.jsx)(D.X,{name:T,disabled:s,onValueChange:J=>{u({target:{name:T,value:J}})},value:V,children:F})})},W))}),(0,n.jsx)(Me,{hasConditions:E,onClick:y})]})]}),a&&(0,n.jsx)(Se,{headerBreadCrumbs:[e,o],actions:A,isFormDisabled:s,onClosed:x,onToggle:y})]})};gs.propTypes={actions:r.array.isRequired,categoryName:r.string.isRequired,isFormDisabled:r.bool.isRequired,subCategoryName:r.string.isRequired,pathToData:r.array.isRequired};const Ve=({childrenForm:e,kind:s,name:o,isOpen:t,isFormDisabled:i,isWhite:a,onOpenCategory:d,pathToData:c})=>{const{formatMessage:g}=(0,U.Z)(),u=()=>{d(o)},h=(0,p.useMemo)(()=>o.split("::").pop(),[o]);return(0,n.jsxs)(G.U,{expanded:t,onToggle:u,id:`accordion-${o}`,variant:a?"primary":"secondary",children:[(0,n.jsx)(q.B,{title:fe(h),description:`${g({id:"Settings.permissions.category"},{category:h})} ${s==="plugins"?"plugin":s}`}),(0,n.jsx)(le.v,{children:(0,n.jsx)(f.x,{padding:6,children:e.map(({actions:C,subCategoryName:O,subCategoryId:L})=>(0,n.jsx)(gs,{actions:C,categoryName:h,isFormDisabled:i,subCategoryName:O,pathToData:[...c,L]},O))})})]})};Ve.defaultProps={},Ve.propTypes={childrenForm:r.array.isRequired,isOpen:r.bool.isRequired,isFormDisabled:r.bool.isRequired,isWhite:r.bool.isRequired,kind:r.string.isRequired,name:r.string.isRequired,onOpenCategory:r.func.isRequired,pathToData:r.array.isRequired};const we=({isFormDisabled:e,kind:s,layout:o})=>{const[t,i]=(0,p.useState)(null),a=d=>{i(d===t?null:d)};return(0,n.jsx)(f.x,{padding:6,background:"neutral0",children:o.map(({category:d,categoryId:c,childrenForm:g},u)=>(0,n.jsx)(Ve,{childrenForm:g,kind:s,isFormDisabled:e,isOpen:t===d,isWhite:u%2===1,name:d,onOpenCategory:a,pathToData:[s,c]},d))})};we.propTypes={isFormDisabled:r.bool.isRequired,kind:r.string.isRequired,layout:r.arrayOf(r.shape({category:r.string.isRequired,categoryId:r.string.isRequired,childrenForm:r.arrayOf(r.shape({actions:r.array.isRequired})).isRequired}).isRequired).isRequired};const ms=(e,s,o)=>e.find(t=>t.action===s&&t.subject===o),hs=(e,s=[])=>e.reduce((o,t)=>(o[t.id]=s.indexOf(t.id)!==-1,o),{}),fs=({children:e},s,o="")=>e.reduce((t,i)=>{if(i.children)return{...t,[i.value]:fs(i,s,`${o}${i.value}.`)};const a=s.indexOf(`${o}${i.value}`)!==-1;return t[i.value]=a,t},{}),ht=(e,s,o)=>e.reduce((t,i)=>{const a=s.properties.find(({value:d})=>d===i);if(a){const d=R(o,["properties",a.value],[]),c=fs(a,d);t.properties[i]=c}return t},{properties:{}}),ft=(e,s)=>s.reduce((o,t)=>{const i=e.find(({uid:a})=>a===t)||null;return i&&(o[t]=i),o},{}),xs=({subjects:e},s,o,t=[])=>s.reduce((i,a)=>{const d=a.subjects,c=ft(e,d);if(Z(c))return i;const g=Object.keys(c).reduce((u,h)=>{const{actionId:C,applyToProperties:O}=a,y=c[h].properties.map(({value:T})=>T).every(T=>(O||[]).indexOf(T)===-1),x=ms(t,C,h),A=hs(o,R(x,"conditions",[]));if(Z(O)||y)return Q(u,[h,C],{properties:{enabled:x!==void 0},conditions:A}),u;const E=ht(O,c[h],x);return Q(u,[h,C],{...E,conditions:A}),u},{});return Ms(i,g)},{}),xt=(e,s,o)=>e.reduce((t,i)=>{const a=ms(o,i.action,null);return t[i.action]={properties:{enabled:a!==void 0},conditions:hs(s,a?.conditions??[])},t},{}),Ct=(e,s,o)=>e.reduce((t,i)=>(t[i.subCategoryId]=xt(i.actions,s,o),t),{}),Cs=(e,s,o=[])=>e.reduce((t,{categoryId:i,childrenForm:a})=>{const d=Ct(a,s,o);return t[i]=d,t},{}),ys=e=>e.split(" ").join("-"),_s=(e,s)=>Object.entries(ue(e,s)).map(([o,t])=>({category:o,categoryId:ys(o),childrenForm:Object.entries(ue(t,"subCategory")).map(([i,a])=>({subCategoryName:i,subCategoryId:ys(i),actions:a}))})),yt=(e,s)=>{const{conditions:o,sections:{collectionTypes:t,singleTypes:i,plugins:a,settings:d}}=e,c={collectionTypes:t,singleTypes:i,plugins:_s(a,"plugin"),settings:_s(d,"category")},g={collectionTypes:xs(t,t.actions||[],o,s),singleTypes:xs(i,i.actions||[],o,s),plugins:Cs(c.plugins,o,s),settings:Cs(c.settings,o,s)};return{initialData:g,modifiedData:g,layouts:c}},Pe=e=>Object.keys(e).reduce((s,o)=>{const t=e[o];if(ne(t)&&!ee(t,"conditions"))return{...s,[o]:Pe(t)};if(ne(t)&&ee(t,"conditions")&&!oe(Oe(t,"conditions")).some(a=>a)){const a=Object.keys(t.conditions).reduce((d,c)=>(d[c]=!1,d),{});return{...s,[o]:{...t,conditions:a}}}return s[o]=t,s},{}),ye=(e,s,o=!1)=>Object.keys(e).reduce((t,i)=>{const a=e[i];return i==="conditions"&&!o?(t[i]=a,t):ne(a)?{...t,[i]:ye(a,s,i==="fields")}:(t[i]=s,t)},{}),_t={initialData:{},modifiedData:{},layouts:{}},bt=(e,s)=>(0,he.ZP)(e,o=>{switch(s.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:t,actionId:i,value:a}=s,d=["modifiedData",t];Object.keys(R(e,d)).forEach(c=>{const g=R(e,[...d,c,i],void 0);if(g){let u=ye(g,a);if(!a&&u.conditions){const h=ye(u.conditions,!1);u={...u,conditions:h}}Q(o,[...d,c,i],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:t,propertyName:i,rowName:a,value:d}=s;let c=De(e.modifiedData);const g=t.split(".."),u=R(c,g,{});Object.keys(u).forEach(h=>{if(ee(u[h],`properties.${i}`)){const C=R(u,[h,"properties",i,a]),O=[...g,h,"properties",i,a];if(!ne(C))Q(c,O,d);else{const L=ye(C,d);Q(c,O,L)}}}),d||(c=Pe(c)),Q(o,"modifiedData",c);break}case"ON_CHANGE_CONDITIONS":{Object.entries(s.conditions).forEach(t=>{const[i,a]=t;Q(o,["modifiedData",...i.split(".."),"conditions"],a)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let t=De(e.modifiedData);Q(t,[...s.keys.split("..")],s.value),s.value||(t=Pe(t)),Q(o,"modifiedData",t);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:t,value:i}=s,a=[...t.split("..")];let d=De(e.modifiedData);const c=R(d,a,{}),g=ye(c,i);Q(d,a,g),i||(d=Pe(d)),Q(o,["modifiedData"],d);break}case"RESET_FORM":{o.modifiedData=e.initialData;break}case"SET_FORM_AFTER_SUBMIT":{o.initialData=e.modifiedData;break}default:return o}}),He=e=>Object.entries(e).filter(([,s])=>s).map(([s])=>s),jt=e=>{const[s,{conditions:o}]=e;return{action:s,subject:null,conditions:He(o),properties:{}}},Ot=e=>Object.values(e).reduce((s,o)=>{const t=Object.entries(o).reduce((i,a)=>{const[,{properties:{enabled:d}}]=a;if(!d)return i;const c=jt(a);return i.push(c),i},[]);return[...s,...t]},[]),bs=e=>Object.values(e).reduce((s,o)=>{const t=Ot(o);return[...s,...t]},[]),js=(e,s="")=>Object.entries(e).reduce((o,t)=>{const[i,a]=t;return ne(a)?[...o,...js(a,`${s}${i}.`)]:(a&&!ne(a)&&o.push(`${s}${i}`),o)},[]),Et=(e,s,{conditions:o,properties:t})=>Object.entries(t).reduce((i,a)=>{const[d,c]=a;return i.properties[d]=js(c),i},{action:e,subject:s,conditions:He(o),properties:{}}),Mt=(e,s,{conditions:o})=>({action:e,subject:s,properties:{},conditions:He(o)}),vt=(e,s)=>Object.entries(s).reduce((t,i)=>{const[a,d]=i;if(!oe(d).some(u=>u))return t;if(!d?.properties?.enabled){const u=Et(a,e,d);return[...t,u]}if(!d.properties.enabled)return t;const g=Mt(a,e,d);return t.push(g),t},[]),Os=e=>Object.entries(e).reduce((o,t)=>{const[i,a]=t,d=vt(i,a);return[...o,...d]},[]),Pt=e=>{const s=bs(e.plugins),o=bs(e.settings),t=Os(e.collectionTypes),i=Os(e.singleTypes);return[...s,...o,...t,...i]},At=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],Ge=(0,p.forwardRef)(({layout:e,isFormDisabled:s,permissions:o},t)=>{const[{initialData:i,layouts:a,modifiedData:d},c]=(0,p.useReducer)(bt,_t,()=>yt(e,o)),{formatMessage:g}=(0,U.Z)();(0,p.useImperativeHandle)(t,()=>({getPermissions(){const P=(0,K.e5)(i.collectionTypes,d.collectionTypes),y=(0,K.e5)(i.singleTypes,d.singleTypes),x={...P,...y};let A;return Z(x)?A=!1:A=Object.values(x).some(E=>Object.values(E).some(T=>ee(T,"conditions"))),{permissionsToSend:Pt(d),didUpdateConditions:A}},resetForm(){c({type:"RESET_FORM"})},setFormAfterSubmit(){c({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(P,y,x,A)=>{c({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:P,propertyName:y,rowName:x,value:A})},h=(P,y,x)=>{c({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:P,actionId:y,value:x})},C=P=>{c({type:"ON_CHANGE_CONDITIONS",conditions:P})},O=(0,p.useCallback)(({target:{name:P,value:y}})=>{c({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:P,value:y})},[]),L=(0,p.useCallback)(({target:{name:P,value:y}})=>{c({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:P,value:y})},[]);return(0,n.jsx)(vs,{availableConditions:e.conditions,modifiedData:d,onChangeConditions:C,onChangeSimpleCheckbox:O,onChangeParentCheckbox:L,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:h,children:(0,n.jsxs)(de.v,{id:"tabs",label:g({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"}),children:[(0,n.jsx)(se.m,{children:At.map(P=>(0,n.jsx)(se.O,{children:g({id:P.labelId,defaultMessage:P.defaultMessage})},P.id))}),(0,n.jsxs)(z.n,{style:{position:"relative"},children:[(0,n.jsx)(z.x,{children:(0,n.jsx)(ps,{layout:a.collectionTypes,kind:"collectionTypes",isFormDisabled:s})}),(0,n.jsx)(z.x,{children:(0,n.jsx)(ps,{layout:a.singleTypes,kind:"singleTypes",isFormDisabled:s})}),(0,n.jsx)(z.x,{children:(0,n.jsx)(we,{layout:a.plugins,kind:"plugins",isFormDisabled:s})}),(0,n.jsx)(z.x,{children:(0,n.jsx)(we,{layout:a.settings,kind:"settings",isFormDisabled:s})})]})]})})});Ge.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},Ge.propTypes={layout:r.object,isFormDisabled:r.bool.isRequired,permissions:r.array};const Rt=(0,p.memo)(Ge),Tt=(e,s={})=>{const{get:o}=(0,K.kY)(),{data:t,error:i,isError:a,isLoading:d}=(0,Xe.useQuery)(["permissions",e],async()=>{const{data:{data:c}}=await o("/admin/permissions",{params:{role:e}});return c},s);return{data:t,error:i,isError:a,isLoading:d}},Dt=(e={id:null},s={})=>{const{id:o,...t}=e,{get:i}=(0,K.kY)(),{data:a,error:d,isError:c,isLoading:g,refetch:u}=(0,Xe.useQuery)(["roles",o,"permissions",t],async()=>{const{data:{data:h}}=await i(`/admin/roles/${o}/permissions`,{params:t});return h},s);return{permissions:a,error:d,isError:c,isLoading:g,refetch:u}}},91589:(N,B,l)=>{"use strict";l.d(B,{U:()=>H,y:()=>w});var n=l(53657),p=l(96125),_=l(87426),m=l(58508),b=l(89227),f=l(60590),$=l(93134),M=l(2669);const S=({theme:D,expanded:v,variant:k,disabled:G,error:q})=>q?`1px solid ${D.colors.danger600} !important`:G?`1px solid ${D.colors.neutral150}`:v?`1px solid ${D.colors.primary600}`:k==="primary"?`1px solid ${D.colors.neutral0}`:`1px solid ${D.colors.neutral100}`,w=(0,_.default)(f.Z)``,Y=(0,_.default)(M.x)`
  border: ${S};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:D})=>D.colors.primary600};

    ${w} {
      color: ${({theme:D,expanded:v})=>v?void 0:D.colors.primary700};
    }

    ${f.Z} {
      color: ${({theme:D,expanded:v})=>v?void 0:D.colors.primary600};
    }

    & > ${$.k} {
      background: ${({theme:D})=>D.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:D})=>D.colors.primary200};
    }
  }
`,H=({children:D,disabled:v=!1,error:k,expanded:G=!1,hasErrorMessage:q=!0,id:le,onToggle:de,toggle:se,size:z="M",variant:K="primary",shadow:ee})=>{const Z=(0,b.M)(le),r=p.useMemo(()=>({expanded:G,onToggle:de,toggle:se,id:Z,size:z,variant:K,disabled:v}),[v,G,Z,de,z,se,K]);return(0,n.jsxs)(m.S.Provider,{value:r,children:[(0,n.jsx)(Y,{"data-strapi-expanded":G,disabled:v,"aria-disabled":v,expanded:G,hasRadius:!0,variant:K,error:k,shadow:ee,children:D}),k&&q&&(0,n.jsx)(M.x,{paddingTop:1,children:(0,n.jsx)(f.Z,{variant:"pi",textColor:"danger600",children:k})})]})}},74860:(N,B,l)=>{"use strict";l.d(B,{v:()=>m});var n=l(53657),p=l(58508),_=l(2669);const m=({children:b,...f})=>{const{expanded:$,id:M}=(0,p.A)();if(!$)return null;const S=`accordion-content-${M}`,w=`accordion-label-${M}`,Y=`accordion-desc-${M}`;return(0,n.jsx)(_.x,{role:"region",id:S,"aria-labelledby":w,"aria-describedby":Y,...f,children:b})}},58508:(N,B,l)=>{"use strict";l.d(B,{A:()=>_,S:()=>p});var n=l(96125);const p=(0,n.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),_=()=>(0,n.useContext)(p)},58505:(N,B,l)=>{"use strict";l.d(B,{B:()=>D});var n=l(53657),p=l(26104),_=l(87426),m=l(91589),b=l(58508);const f=({expanded:v,disabled:k,variant:G})=>{let q="neutral100";return v?q="primary100":k?q="neutral150":G==="primary"&&(q="neutral0"),q};var $=l(63553),M=l(49692),S=l(93134),w=l(60590);const Y=(0,_.default)($.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:v,expanded:k})=>k?v.colors.primary600:v.colors.neutral500};
    }
  }
`,H=(0,_.default)(S.k)`
  min-height: ${({theme:v,size:k})=>v.sizes.accordions[k]};
  border-radius: ${({theme:v,expanded:k})=>k?`${v.borderRadius} ${v.borderRadius} 0 0`:v.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:v})=>v.colors.primary600};
      }
    }
  }
`,D=({title:v,description:k,as:G="span",togglePosition:q="right",action:le,...de})=>{const{onToggle:se,toggle:z,expanded:K,id:ee,size:Z,variant:r,disabled:U}=(0,b.A)(),Ae=`accordion-content-${ee}`,be=`accordion-label-${ee}`,j=`accordion-desc-${ee}`,ce=Z==="M"?6:4,je=Z==="M"?ce:ce-2,Re=f({expanded:K,disabled:U,variant:r}),R={as:G,fontWeight:Z==="S"?"bold":void 0,id:be,textColor:K?"primary600":"neutral700",ellipsis:!0,variant:Z==="M"?"delta":void 0},Oe=K?"primary600":"neutral600",Te=K?"primary200":"neutral200",Ee=Z==="M"?`${32/16}rem`:`${24/16}rem`,he=()=>{U||(z&&!se?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),z()):se&&se())},ue=(0,n.jsx)(S.k,{justifyContent:"center",borderRadius:"50%",height:Ee,width:Ee,transform:K?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:Te,cursor:U?"not-allowed":"pointer",onClick:he,shrink:0,children:(0,n.jsx)(M.J,{as:p.Z,width:Z==="M"?`${11/16}rem`:`${8/16}rem`,color:K?"primary600":"neutral600"})});return(0,n.jsx)(H,{paddingBottom:je,paddingLeft:ce,paddingRight:ce,paddingTop:je,background:Re,expanded:K,size:Z,justifyContent:"space-between",cursor:U?"not-allowed":"",children:(0,n.jsxs)(S.k,{gap:3,flex:1,maxWidth:"100%",children:[q==="left"&&ue,(0,n.jsx)(Y,{onClick:he,"aria-disabled":U,"aria-expanded":K,"aria-controls":Ae,"aria-labelledby":be,"data-strapi-accordion-toggle":!0,expanded:K,type:"button",flex:1,minWidth:0,...de,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.y,{...R,children:v}),k&&(0,n.jsx)(w.Z,{as:"p",id:j,textColor:Oe,children:k})]})}),q==="right"&&(0,n.jsxs)(S.k,{gap:3,children:[ue,le]}),q==="left"&&le]})})}},7564:(N,B,l)=>{"use strict";l.d(B,{Q:()=>m});var n=l(53657),p=l(87426),_=l(44101);const m=({options:f,...$})=>(0,n.jsx)(_.NU,{...$,children:f.map(M=>"children"in M?(0,n.jsx)(_.Ab,{label:M.label,values:M.children.map(S=>S.value.toString()),children:M.children.map(S=>(0,n.jsx)(b,{value:S.value,children:S.label},S.value))},M.label):(0,n.jsx)(_.ML,{value:M.value,children:M.label},M.value))}),b=(0,p.default)(_.ML)`
  padding-left: ${({theme:f})=>f.spaces[7]};
`},99216:(N,B,l)=>{"use strict";l.d(B,{O:()=>S});var n=l(53657),p=l(96125),_=l(87426),m=l(2669),b=l(60590);const f=()=>(0,n.jsx)(m.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,n.jsx)(b.Z,{variant:"pi",textColor:"neutral500",children:"/"})});f.displayName="Divider";var $=l(93134);const M=(0,_.default)($.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:w})=>`calc(-1*${w.spaces[2]})`};
  }
`,S=({label:w,children:Y,...H})=>{const D=p.Children.toArray(Y);return(0,n.jsx)(m.x,{"aria-label":w,...H,children:(0,n.jsx)(M,{as:"ol",children:p.Children.map(D,(v,k)=>{const G=D.length>1&&k+1<D.length;return(0,n.jsxs)($.k,{inline:!0,as:"li",children:[v,G&&(0,n.jsx)(f,{})]})})})})};S.displayName="Breadcrumbs"},41062:(N,B,l)=>{"use strict";l.d(B,{$:()=>m});var n=l(53657),p=l(2669),_=l(60590);const m=({children:b,isCurrent:f=!1,...$})=>(0,n.jsx)(p.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,n.jsx)(_.Z,{variant:"pi",textColor:"neutral800",fontWeight:f?"bold":"normal","aria-current":f,...$,children:b})});m.displayName="Crumb"}}]);
