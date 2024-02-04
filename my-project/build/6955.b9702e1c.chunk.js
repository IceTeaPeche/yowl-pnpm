(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[6955],{5554:I=>{function W(c,o,g,D){for(var f=-1,T=c==null?0:c.length;++f<T;){var x=c[f];o(D,x,g(x),c)}return D}I.exports=W},44154:(I,W,c)=>{var o=c(29038);function g(D,f,T,x){return o(D,function(S,K,V){f(x,S,T(S),V)}),x}I.exports=g},38662:(I,W,c)=>{var o=c(5554),g=c(44154),D=c(70828),f=c(90485);function T(x,S){return function(K,V){var w=f(K)?o:g,se=S?S():{};return w(K,x,D(V,2),se)}}I.exports=T},6219:(I,W,c)=>{var o=c(59202),g=1/0;function D(f){var T=f==null?0:f.length;return T?o(f,g):[]}I.exports=D},80655:(I,W,c)=>{var o=c(76756),g=c(38662),D=Object.prototype,f=D.hasOwnProperty,T=g(function(x,S,K){f.call(x,K)?x[K].push(S):o(x,K,[S])});I.exports=T},26955:(I,W,c)=>{"use strict";c.d(W,{P:()=>Mt,a:()=>Dt,u:()=>vt});var o=c(53657),g=c(96125),D=c(99283),f=c(93134),T=c(48814),x=c(2669),S=c(7564),K=c(83416),V=c(68577),w=c(17855),se=c(77461),F=c(91019),z=c(37083),me=c(50810),he=c(91845),fe=c(91589),gs=c(58505),ms=c(74860),hs=c(14382),ke=c(32255),te=c(49937),de=c(29776),ce=c(80922),ne=c(85392),r=c(59013),B=c(82154),fs=c(53047),Cs=c(12646),b=c(87426),ys=c(53169),xs=c(26104),bs=c(41176),_s=c(58035),A=c(20590),Ie=c(96435),js=c(99216),Os=c(41062),Be=c(78331),Ce=c(80655),oe=c(66437),Es=c(6219),Z=c(13236),Rs=c(1108),N=c(22507),ye=c(7453),We=c(80107);const[Ts,As]=(0,fs.k)("PermissionsDataManager"),Q=()=>As("usePermissionsDataManager"),Ps=b.default.div`
  position: relative;

  ${({hasConditions:e,disabled:s,theme:n})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${s?n.colors.neutral100:n.colors.primary600};
    }
  `}
`,xe=({onClick:e,className:s,hasConditions:n,variant:t})=>{const{formatMessage:i}=(0,B.Z)();return(0,o.jsx)(Ps,{hasConditions:n,className:s,children:(0,o.jsx)(D.z,{variant:t,startIcon:(0,o.jsx)(ys.Z,{}),onClick:e,children:i({id:"global.settings",defaultMessage:"Settings"})})})};xe.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},xe.propTypes={onClick:r.func.isRequired,className:r.string,hasConditions:r.bool,variant:r.string};const ue=(0,b.default)(xe)``,Ms=e=>Object.values(e).map(s=>Object.entries(s).filter(([,n])=>n).map(([n])=>n)).flat(),vs=e=>e.reduce((s,[n,t])=>(s.push({label:oe(n),children:t.map(i=>({label:i.displayName,value:i.id}))}),s),[]),Ds=(e,s)=>e.map(([,n])=>n).flat().reduce((n,t)=>({[t.id]:s.includes(t.id),...n}),{}),Ke=({arrayOfOptionsGroupedByCategory:e,isFormDisabled:s,isGrey:n,label:t,name:i,onChange:a,value:l})=>{const{formatMessage:d}=(0,B.Z)(),p=u=>{a(i,Ds(e,u))};return(0,o.jsxs)(f.k,{as:"li",background:n?"neutral100":"neutral0",paddingBottom:3,paddingTop:3,children:[(0,o.jsxs)(f.k,{paddingLeft:6,style:{width:180},children:[(0,o.jsxs)(T.Z,{variant:"sigma",textColor:"neutral600",children:[d({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"]}),(0,o.jsx)(T.Z,{variant:"sigma",title:t,textColor:"primary600",ellipsis:!0,children:d({id:`Settings.roles.form.permissions.${t.toLowerCase()}`,defaultMessage:t})}),(0,o.jsxs)(T.Z,{variant:"sigma",textColor:"neutral600",children:["\xA0",d({id:"Settings.permissions.conditions.when",defaultMessage:"When"})]})]}),(0,o.jsx)(x.x,{style:{maxWidth:430,width:"100%"},children:(0,o.jsx)(S.Q,{id:i,customizeContent:u=>`${u.length} currently selected`,onChange:p,value:Ms(l),options:vs(e),disabled:s})})]})};Ke.propTypes={arrayOfOptionsGroupedByCategory:r.array.isRequired,isFormDisabled:r.bool.isRequired,isGrey:r.bool.isRequired,label:r.string.isRequired,name:r.string.isRequired,value:r.object.isRequired,onChange:r.func.isRequired};const $s=(e,s)=>e.reduce((n,t)=>(n[t.id]=A(s,t.id,!1),n),{}),Ss=(e,s)=>e.reduce((n,t)=>{const[i,a]=t,l=$s(a,s);return n[i]=l,n},{}),Ls=(e,s,n)=>e.reduce((t,i)=>{const a=A(s,[...i.pathToConditionsObject,"conditions"],{}),l=Ss(n,a);return t[i.pathToConditionsObject.join("..")]=l,t},{}),be=({actions:e,headerBreadCrumbs:s,isFormDisabled:n,onClosed:t,onToggle:i})=>{const{formatMessage:a}=(0,B.Z)(),{availableConditions:l,modifiedData:d,onChangeConditions:p}=Q(),u=(0,g.useMemo)(()=>Object.entries(Ce(l,"category")),[l]),m=e.filter(({isDisplayed:h,hasSomeActionsSelected:E,hasAllActionsSelected:j})=>h&&(E||j)),C=(0,g.useMemo)(()=>Ls(m,d,u),[m,d,u]),[_,P]=(0,g.useState)(C),O=(h,E)=>{P((0,Be.ZP)(j=>{j[h]||(j[h]={}),j[h].default||(j[h].default={}),j[h].default=E}))},y=()=>{const h=Object.entries(_).reduce((E,j)=>{const[R,L]=j,v=Object.values(L).reduce(($,M)=>({...$,...M}),{});return E[R]=v,E},{});p(h),i()};return(0,o.jsxs)(K.P,{labelledBy:"condition-modal-breadcrumbs",onClose:t,children:[(0,o.jsx)(V.x,{children:(0,o.jsx)(js.O,{id:"condition-modal-breadcrumbs",label:s.join(", "),children:s.map((h,E,j)=>(0,o.jsx)(Os.$,{isCurrent:E===j.length-1,children:oe(a({id:h,defaultMessage:h}))},h))})}),(0,o.jsxs)(w.f,{children:[m.length===0&&(0,o.jsx)(T.Z,{children:a({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})}),(0,o.jsx)("ul",{children:m.map(({actionId:h,label:E,pathToConditionsObject:j},R)=>{const L=j.join("..");return(0,o.jsx)(Ke,{arrayOfOptionsGroupedByCategory:u,label:E,isFormDisabled:n,isGrey:R%2===0,name:L,onChange:O,value:A(_,L,{})},h)})})]}),(0,o.jsx)(se.m,{startActions:(0,o.jsx)(D.z,{variant:"tertiary",onClick:i,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,o.jsx)(D.z,{onClick:y,children:a({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"})})})]})};be.propTypes={actions:r.arrayOf(r.shape({actionId:r.string.isRequired,checkboxName:r.string,hasSomeActionsSelected:r.bool.isRequired,hasAllActionsSelected:r.bool,isDisplayed:r.bool.isRequired,label:r.string})).isRequired,headerBreadCrumbs:r.arrayOf(r.string).isRequired,isFormDisabled:r.bool.isRequired,onClosed:r.func.isRequired,onToggle:r.func.isRequired};const J=`${120/16}rem`,_e=`${200/16}rem`,pe=`${53/16}rem`,je=b.default.div`
  width: ${J};
`,Ne=(0,b.default)(f.k)`
  padding-right: ${({theme:e})=>e.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:e})=>e&&"cursor: pointer;"}
`,Oe=({children:e,isCollapsable:s,isActive:n,isFormDisabled:t,label:i,onChange:a,onClick:l,checkboxName:d,someChecked:p,value:u})=>{const{formatMessage:m}=(0,B.Z)();return(0,o.jsxs)(f.k,{alignItems:"center",paddingLeft:6,style:{width:_e,flexShrink:0},children:[(0,o.jsx)(x.x,{paddingRight:2,children:(0,o.jsx)(F.C,{name:d,"aria-label":m({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:t,onValueChange:C=>a({target:{name:d,value:C}}),indeterminate:p,value:u})}),(0,o.jsxs)(Ne,{title:i,alignItems:"center",isCollapsable:s,...s&&{onClick:l,"aria-expanded":n,onKeyDown:({key:C})=>(C==="Enter"||C===" ")&&l(),tabIndex:0,role:"button"},children:[(0,o.jsx)(T.Z,{fontWeight:n?"bold":"",textColor:n?"primary600":"neutral800",ellipsis:!0,children:oe(i)}),e]})]})};Oe.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Oe.propTypes={checkboxName:r.string,children:r.node,label:r.string.isRequired,isCollapsable:r.bool,isFormDisabled:r.bool.isRequired,onChange:r.func,onClick:r.func.isRequired,someChecked:r.bool,value:r.bool,isActive:r.bool.isRequired};const Ue=(0,g.memo)(Oe),H=e=>Z(e)?Es(Object.values(e).map(s=>Z(s)?H(s):s)):[],Ee=e=>e?Object.keys(e).reduce((s,n)=>(n!=="conditions"&&(s[n]=e[n]),s),{}):null,G=e=>{const s=Ee(e),n=H(s);if(!n.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const t=n.every(a=>a),i=n.some(a=>a)&&!t;return{hasAllActionsSelected:t,hasSomeActionsSelected:i}},ie=(0,b.default)(xs.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:e})=>e?"180":"0"}deg);
  margin-left: ${({theme:e})=>e.spaces[2]};
`,re=e=>`
  ${T.Z} {
    color: ${e.colors.primary600};
    font-weight: ${e.fontWeights.bold}
  }
  ${ie} {
    display: block;
    path {
      fill: ${e.colors.primary600}
    };
  }
`,ks=(e,s,n)=>e.map(({actionId:t,isDisplayed:i,applyToProperties:a,label:l})=>{if(!i)return{actionId:t,hasSomeActionsSelected:!1,isDisplayed:i};const d=[...n.split(".."),t],p=ne(a)?[...d,"properties","enabled"]:d,u=p.join(".."),m=A(s,[...d,"conditions"],null),C=H(m).some(y=>y);if(ne(a)){const y=A(s,p,!1);return{actionId:t,checkboxName:u,hasAllActionsSelected:y,hasConditions:C,hasSomeActionsSelected:y,isDisplayed:i,isParentCheckbox:!1,label:l,pathToConditionsObject:d}}const _=A(s,p,null),{hasAllActionsSelected:P,hasSomeActionsSelected:O}=G(_);return{actionId:t,checkboxName:u,hasAllActionsSelected:P,hasConditions:C,hasSomeActionsSelected:O,isDisplayed:i,isParentCheckbox:!0,label:l,pathToConditionsObject:d}}),Re=(e,s)=>`
  ${Fe} {
    background-color: ${e.colors.primary100};
    color: ${e.colors.primary600};
    border-radius: ${s?"2px 2px 0 0":"2px"};
  }
  ${Ve} {
    display: flex;
  }
  ${ue} {
    display: block;
  }
  &:hover {
   ${re(e)}
  }

  &:focus-within {
    ${({theme:n,isActive:t})=>Re(n,t)}
  }
  
`,Fe=b.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${pe};
  background-color: ${({isGrey:e,theme:s})=>e?s.colors.neutral100:s.colors.neutral0};
  border: 1px solid transparent;
`,Is=b.default.div`
  display: inline-flex;
  min-width: 100%;

  ${ue} {
    display: none;
  }
  ${({isActive:e,theme:s})=>e&&Re(s,e)}
  &:hover {
    ${({theme:e,isActive:s})=>Re(e,s)}
  }
`,qe=(0,b.default)(f.k)`
  width: ${J};
  position: relative;
`,Ve=(0,b.default)(x.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Ze=b.default.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:e})=>e.colors.primary600};
`,Bs=(0,b.default)(x.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,we=({availableActions:e,isActive:s,isGrey:n,isFormDisabled:t,label:i,onClickToggle:a,pathToData:l})=>{const[d,p]=(0,g.useState)(!1),{formatMessage:u}=(0,B.Z)(),{modifiedData:m,onChangeParentCheckbox:C,onChangeSimpleCheckbox:_}=Q(),P=()=>{p(v=>!v)},O=()=>{p(!1)},y=A(m,l.split(".."),{}),h=(0,g.useMemo)(()=>Object.keys(y).reduce((v,$)=>(v[$]=Ie(y[$],"conditions"),v),{}),[y]),{hasAllActionsSelected:E,hasSomeActionsSelected:j}=G(h),R=(0,g.useMemo)(()=>ks(e,m,l),[e,m,l]),L=R.some(({hasConditions:v})=>v);return(0,o.jsxs)(Is,{isActive:s,children:[(0,o.jsxs)(Fe,{isGrey:n,children:[(0,o.jsx)(Ue,{isCollapsable:!0,isFormDisabled:t,label:i,checkboxName:l,onChange:C,onClick:a,someChecked:j,value:E,isActive:s,children:(0,o.jsx)(Ve,{paddingLeft:2,children:s?(0,o.jsx)(bs.Z,{}):(0,o.jsx)(_s.Z,{})})}),(0,o.jsx)(f.k,{style:{flex:1},children:R.map(({actionId:v,hasConditions:$,hasAllActionsSelected:M,hasSomeActionsSelected:U,isDisplayed:ee,isParentCheckbox:k,checkboxName:q,label:le})=>ee?k?(0,o.jsxs)(qe,{justifyContent:"center",alignItems:"center",children:[$&&(0,o.jsx)(Ze,{}),(0,o.jsx)(F.C,{disabled:t,name:q,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${le} ${i}`}),onValueChange:X=>{C({target:{name:q,value:X}})},indeterminate:U,value:M})]},v):(0,o.jsxs)(qe,{justifyContent:"center",alignItems:"center",children:[$&&(0,o.jsx)(Ze,{}),(0,o.jsx)(F.C,{disabled:t,indeterminate:$,name:q,onValueChange:X=>{_({target:{name:q,value:X}})},value:M})]},v):(0,o.jsx)(je,{},v))}),d&&(0,o.jsx)(be,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:R,isFormDisabled:t,onClosed:O,onToggle:P})]}),(0,o.jsx)(Bs,{children:(0,o.jsx)(ue,{onClick:P,hasConditions:L})})]})};we.propTypes={availableActions:r.array.isRequired,isActive:r.bool.isRequired,isGrey:r.bool.isRequired,isFormDisabled:r.bool.isRequired,label:r.string.isRequired,onClickToggle:r.func.isRequired,pathToData:r.string.isRequired};const Ws=b.default.span`
  color: ${({theme:e})=>e.colors.danger700};
  padding-left: ${({theme:e})=>e.spaces[1]}px;
`,He=()=>(0,o.jsx)(Ws,{children:"*"}),Ks=(e,s)=>e.map(n=>{const t=Array.isArray(n.subjects)&&n.subjects.indexOf(s)!==-1;return{...n,isDisplayed:t}}),Ns=(0,b.default)(x.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e})=>e.colors.primary200};
    display: block;
  }
`,Us=b.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:s})=>e.colors[s]};
  }
`,Te=e=>(0,o.jsx)(Ns,{children:(0,o.jsx)(Us,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})})});Te.defaultProps={fill:"primary200"},Te.propTypes={fill:r.string};const Fs=(0,g.memo)(Te),Ge=(0,b.default)(f.k)`
  width: ${J};
  position: relative;
`,qs=(0,b.default)(f.k)`
  height: ${pe};
`,Vs=(0,b.default)(x.x)`
  padding-left: ${31/16}rem;
`,Zs=(0,b.default)(x.x)`
  border-left: ${({isVisible:e,theme:s})=>e?`4px solid ${s.colors.primary200}`:"4px solid transparent"};
`,ws=(0,b.default)(f.k)`
  padding-left: ${({theme:e})=>e.spaces[4]};
  width: ${({level:e})=>145-e*36}px;

  ${({isCollapsable:e,theme:s})=>e&&`
      ${ie} {
        display: block;
        color: ${s.colors.neutral100};
      }
      &:hover {
        ${re(s)}
      }
  `}
  ${({isActive:e,theme:s})=>e&&re(s)};
`,Hs=b.default.div`
  padding-top: ${({theme:e})=>e.spaces[2]};
  margin-top: ${({theme:e})=>e.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:e})=>e.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,Ae=({childrenForm:e,isFormDisabled:s,recursiveLevel:n,pathToDataFromActionRow:t,propertyActions:i,parentName:a,propertyName:l})=>{const{formatMessage:d}=(0,B.Z)(),{modifiedData:p,onChangeParentCheckbox:u,onChangeSimpleCheckbox:m}=Q(),[C,_]=(0,g.useState)(null),P=y=>{_(h=>h===y?null:y)},O=(0,g.useMemo)(()=>C?e.find(({value:y})=>y===C):null,[C,e]);return(0,o.jsxs)(Vs,{children:[(0,o.jsx)(Hs,{}),e.map(({label:y,value:h,required:E,children:j},R)=>{const L=R+1<e.length,v=Array.isArray(j),$=C===h;return(0,o.jsxs)(Zs,{isVisible:L,children:[(0,o.jsxs)(qs,{children:[(0,o.jsx)(Fs,{color:"primary200"}),(0,o.jsxs)(f.k,{style:{flex:1},children:[(0,o.jsx)(ws,{level:n,isActive:$,isCollapsable:v,children:(0,o.jsxs)(Ne,{alignItems:"center",isCollapsable:v,...v&&{onClick:()=>P(h),"aria-expanded":$,onKeyDown:({key:M})=>(M==="Enter"||M===" ")&&P(h),tabIndex:0,role:"button"},title:y,children:[(0,o.jsx)(T.Z,{ellipsis:!0,children:oe(y)}),E&&(0,o.jsx)(He,{}),(0,o.jsx)(ie,{$isActive:$})]})}),(0,o.jsx)(f.k,{style:{flex:1},children:i.map(({actionId:M,label:U,isActionRelatedToCurrentProperty:ee})=>{if(!ee)return(0,o.jsx)(je,{},M);const k=[...t.split(".."),M,"properties",l,...a.split(".."),h],q=A(p,k,!1);if(!j)return(0,o.jsx)(Ge,{justifyContent:"center",alignItems:"center",children:(0,o.jsx)(F.C,{disabled:s,name:k.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${y} ${U}`}),onValueChange:Y=>{m({target:{name:k.join(".."),value:Y}})},value:q})},U);const{hasAllActionsSelected:le,hasSomeActionsSelected:X}=G(q);return(0,o.jsx)(Ge,{justifyContent:"center",alignItems:"center",children:(0,o.jsx)(F.C,{disabled:s,name:k.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${y} ${U}`}),onValueChange:Y=>{u({target:{name:k.join(".."),value:Y}})},value:le,indeterminate:X},U)},U)})})]})]}),O&&$&&(0,o.jsx)(x.x,{paddingBottom:2,children:(0,o.jsx)(Ae,{isFormDisabled:s,parentName:`${a}..${h}`,pathToDataFromActionRow:t,propertyActions:i,propertyName:l,recursiveLevel:n+1,childrenForm:O.children})})]},h)})]})};Ae.propTypes={childrenForm:r.array.isRequired,isFormDisabled:r.bool.isRequired,parentName:r.string.isRequired,pathToDataFromActionRow:r.string.isRequired,propertyActions:r.array.isRequired,propertyName:r.string.isRequired,recursiveLevel:r.number.isRequired};const Gs=(0,g.memo)(Ae),Xs=e=>e.reduce((n,t)=>(t.isActionRelatedToCurrentProperty&&n.push(t.actionId),n),[]),Ys=(e,s,n,t,i)=>{const l=Xs(e).reduce((d,p)=>{const u=[...n.split(".."),p,"properties",t,i],m=A(s,u,!1);return d[p]=m,d},{});return G(l)},Xe=(0,b.default)(f.k)`
  width: ${J};
  position: relative;
`,zs=(0,b.default)(f.k)`
  height: ${pe};
  flex: 1;

  ${({isCollapsable:e,theme:s})=>e&&`
      ${ie} {
        display: block;
        color: ${s.colors.neutral100};
      }
      &:hover {
        ${re(s)}
      }
  `}
  ${({isActive:e,theme:s})=>e&&re(s)};
`,Pe=({childrenForm:e,label:s,isFormDisabled:n,name:t,required:i,pathToData:a,propertyActions:l,propertyName:d,isOdd:p})=>{const{formatMessage:u}=(0,B.Z)(),[m,C]=(0,g.useState)(null),{modifiedData:_,onChangeCollectionTypeLeftActionRowCheckbox:P,onChangeParentCheckbox:O,onChangeSimpleCheckbox:y}=Q(),h=m===t,E=(0,g.useMemo)(()=>Array.isArray(e)?e:[],[e]),j=E.length>0,R=(0,g.useCallback)(()=>{j&&C(M=>M===t?null:t)},[j,t]),L=({target:{value:M}})=>{P(a,d,t,M)},{hasAllActionsSelected:v,hasSomeActionsSelected:$}=(0,g.useMemo)(()=>Ys(l,_,a,d,t),[l,_,a,d,t]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(zs,{alignItems:"center",isCollapsable:j,isActive:h,background:p?"neutral100":"neutral0",children:(0,o.jsxs)(f.k,{children:[(0,o.jsxs)(Ue,{onChange:L,onClick:R,isCollapsable:j,isFormDisabled:n,label:s,someChecked:$,value:v,isActive:h,children:[i&&(0,o.jsx)(He,{}),(0,o.jsx)(ie,{$isActive:h})]}),(0,o.jsx)(f.k,{children:l.map(({label:M,isActionRelatedToCurrentProperty:U,actionId:ee})=>{if(!U)return(0,o.jsx)(je,{},M);const k=[...a.split(".."),ee,"properties",d,t];if(!j){const Y=A(_,k,!1);return(0,o.jsx)(Xe,{justifyContent:"center",alignItems:"center",children:(0,o.jsx)(F.C,{disabled:n,name:k.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${t} ${M}`}),onValueChange:$t=>{y({target:{name:k.join(".."),value:$t}})},value:Y})},ee)}const q=A(_,k,{}),{hasAllActionsSelected:le,hasSomeActionsSelected:X}=G(q);return(0,o.jsx)(Xe,{justifyContent:"center",alignItems:"center",children:(0,o.jsx)(F.C,{disabled:n,name:k.join(".."),onValueChange:Y=>{O({target:{name:k.join(".."),value:Y}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${t} ${M}`}),value:le,indeterminate:X})},M)})})]})}),h&&(0,o.jsx)(Gs,{childrenForm:E,isFormDisabled:n,parentName:t,pathToDataFromActionRow:a,propertyName:d,propertyActions:l,recursiveLevel:0})]})};Pe.defaultProps={childrenForm:[],required:!1},Pe.propTypes={childrenForm:r.array,label:r.string.isRequired,isFormDisabled:r.bool.isRequired,name:r.string.isRequired,pathToData:r.string.isRequired,propertyActions:r.array.isRequired,propertyName:r.string.isRequired,required:r.bool,isOdd:r.bool.isRequired};const Qs=(0,g.memo)(Pe),Ye=(0,b.default)(f.k)`
  width: ${J};
  flex-shrink: 0;
`,Js=(0,b.default)(f.k)`
  width: ${_e};
  height: ${pe};
  flex-shrink: 0;
`,ze=({headers:e,label:s})=>{const{formatMessage:n}=(0,B.Z)(),t=n({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:s});return(0,o.jsxs)(f.k,{children:[(0,o.jsx)(Js,{alignItems:"center",paddingLeft:6,children:(0,o.jsx)(T.Z,{variant:"sigma",textColor:"neutral500",children:t})}),e.map(i=>i.isActionRelatedToCurrentProperty?(0,o.jsx)(Ye,{justifyContent:"center",children:(0,o.jsx)(T.Z,{variant:"sigma",textColor:"neutral500",children:n({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label})})},i.label):(0,o.jsx)(Ye,{},i.label))]})};ze.propTypes={headers:r.arrayOf(r.shape({label:r.string.isRequired,isActionRelatedToCurrentProperty:r.bool.isRequired})).isRequired,label:r.string.isRequired};const et=(e,s)=>e.map(n=>{const t=Array.isArray(n.applyToProperties)&&n.applyToProperties.indexOf(s)!==-1&&n.isDisplayed;return{label:n.label,actionId:n.actionId,isActionRelatedToCurrentProperty:t}}),st=b.default.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,Qe=({availableActions:e,childrenForm:s,isFormDisabled:n,label:t,pathToData:i,propertyName:a})=>{const l=(0,g.useMemo)(()=>et(e,a),[e,a]);return(0,o.jsxs)(st,{children:[(0,o.jsx)(ze,{label:t,headers:l}),(0,o.jsx)(x.x,{children:s.map(({children:d,label:p,value:u,required:m},C)=>(0,o.jsx)(Qs,{childrenForm:d,label:p,isFormDisabled:n,name:u,required:m,propertyActions:l,pathToData:i,propertyName:a,isOdd:C%2===0},u))})]})};Qe.propTypes={childrenForm:r.array.isRequired,availableActions:r.array.isRequired,isFormDisabled:r.bool.isRequired,label:r.string.isRequired,pathToData:r.string.isRequired,propertyName:r.string.isRequired};const tt=b.default.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:e,isActive:s})=>s&&`border: 1px solid ${e.colors.primary600};`}
`,Je=({allActions:e,contentTypeName:s,label:n,index:t,isActive:i,isFormDisabled:a,onClickToggleCollapse:l,pathToData:d,properties:p})=>{const u=(0,g.useCallback)(()=>{l(s)},[s,l]),m=(0,g.useMemo)(()=>Ks(e,s),[e,s]);return(0,o.jsxs)(tt,{isActive:i,children:[(0,o.jsx)(we,{availableActions:m,isActive:i,isGrey:t%2===0,isFormDisabled:a,label:n,onClickToggle:u,pathToData:d}),i&&p.map(({label:C,value:_,children:P})=>(0,o.jsx)(Qe,{availableActions:m,childrenForm:P,isFormDisabled:a,label:C,pathToData:d,propertyName:_},_))]})};Je.propTypes={allActions:r.array.isRequired,contentTypeName:r.string.isRequired,index:r.number.isRequired,isActive:r.bool.isRequired,isFormDisabled:r.bool.isRequired,label:r.string.isRequired,onClickToggleCollapse:r.func.isRequired,pathToData:r.string.isRequired,properties:r.array.isRequired};const Me=({actions:e,isFormDisabled:s,pathToData:n,subjects:t})=>{const[i,a]=(0,g.useState)(null),l=d=>{a(i===d?null:d)};return t.map(({uid:d,label:p,properties:u},m)=>(0,o.jsx)(Je,{allActions:e,contentTypeName:d,label:p,isActive:i===d,isFormDisabled:s,index:m,onClickToggleCollapse:l,pathToData:`${n}..${d}`,properties:u},d))};Me.defaultProps={actions:[],subjects:[]},Me.propTypes={actions:r.array.isRequired,isFormDisabled:r.bool.isRequired,pathToData:r.string.isRequired,subjects:r.arrayOf(r.shape({uid:r.string.isRequired,label:r.string.isRequired,properties:r.array.isRequired}))};const nt=(0,g.memo)(Me),ot=e=>e.filter(({subjects:s})=>s&&s.length),it=e=>e.map(({actionId:s})=>s),rt=(e,s)=>e.reduce((n,t)=>(Object.keys(s).forEach(i=>{const a=A(s,[i,t],{}),l={[i]:Ee(a)};n[t]?n[t]={...n[t],...l}:n[t]=l}),n),{}),at=(e,s)=>{const n=it(e),t=rt(n,s);return Object.keys(t).reduce((a,l)=>(a[l]=G(t[l]),a),{})},lt=(0,b.default)(f.k)`
  width: ${J};
  flex-shrink: 0;
`,ve=({actions:e,isFormDisabled:s,kind:n})=>{const{formatMessage:t}=(0,B.Z)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:a}=Q(),l=(0,g.useMemo)(()=>ot(e),[e]),d=(0,g.useMemo)(()=>at(l,i[n]),[i,l,n]);return(0,o.jsx)(x.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:_e},children:(0,o.jsx)(f.k,{gap:0,children:l.map(({label:p,actionId:u})=>(0,o.jsxs)(lt,{direction:"column",alignItems:"center",justifyContent:"center",gap:3,children:[(0,o.jsx)(T.Z,{variant:"sigma",textColor:"neutral500",children:t({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),(0,o.jsx)(F.C,{disabled:s,onValueChange:m=>{a(n,u,m)},name:u,"aria-label":t({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:t({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),value:A(d,[u,"hasAllActionsSelected"],!1),indeterminate:A(d,[u,"hasSomeActionsSelected"],!1)})]},u))})})};ve.defaultProps={actions:[]},ve.propTypes={actions:r.arrayOf(r.shape({label:r.string.isRequired,actionId:r.string.isRequired,subjects:r.array.isRequired})),isFormDisabled:r.bool.isRequired,kind:r.string.isRequired};const dt=(0,g.memo)(ve),ct=(0,b.default)(x.x)`
  overflow-x: auto;
`,es=({isFormDisabled:e,kind:s,layout:{actions:n,subjects:t}})=>{const i=Cs([...t],"label");return(0,o.jsxs)(ct,{background:"neutral0",children:[(0,o.jsx)(dt,{actions:n,kind:s,isFormDisabled:e}),(0,o.jsx)(nt,{actions:n,isFormDisabled:e,pathToData:s,subjects:i})]})};es.propTypes={isFormDisabled:r.bool.isRequired,kind:r.string.isRequired,layout:r.shape({actions:r.array,subjects:r.arrayOf(r.shape({uid:r.string.isRequired,label:r.string.isRequired,properties:r.array.isRequired}))}).isRequired};const ss=(0,g.memo)(es),ut=(e,s,n)=>e.map(t=>{const i=[...n,t.action,"properties","enabled"],a=A(s,i,!1),l=A(s,[...n,t.action,"conditions"],{}),d=H(l).some(p=>p);return{...t,isDisplayed:a,checkboxName:i.join(".."),hasSomeActionsSelected:a,value:a,hasConditions:d,label:t.displayName,actionId:t.action,pathToConditionsObject:[...n,t.action]}}),pt=e=>{const s=Object.entries(e).reduce((t,i)=>{const[a,{conditions:l}]=i;return t[a]=l,t},{});return H(s).some(t=>t)},gt=b.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,mt=b.default.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:e,disabled:s,theme:n})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${s?n.colors.neutral100:n.colors.primary600};
    }
  `}
`,ts=({categoryName:e,isFormDisabled:s,subCategoryName:n,actions:t,pathToData:i})=>{const[a,l]=(0,g.useState)(!1),{modifiedData:d,onChangeParentCheckbox:p,onChangeSimpleCheckbox:u}=Q(),{formatMessage:m}=(0,B.Z)(),C=A(d,i,{}),_=(0,g.useMemo)(()=>Object.keys(C).reduce((R,L)=>(R[L]=Ee(C[L]),R),{}),[C]),{hasAllActionsSelected:P,hasSomeActionsSelected:O}=G(_),y=()=>{l(R=>!R)},h=()=>{l(!1)},E=ut(t,d,i),j=pt(A(d,[...i],{}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(x.x,{children:[(0,o.jsxs)(f.k,{justifyContent:"space-between",alignItems:"center",children:[(0,o.jsx)(x.x,{paddingRight:4,children:(0,o.jsx)(T.Z,{variant:"sigma",textColor:"neutral600",children:n})}),(0,o.jsx)(gt,{}),(0,o.jsx)(x.x,{paddingLeft:4,children:(0,o.jsx)(z.X,{name:i.join(".."),disabled:s,onValueChange:R=>{p({target:{name:i.join(".."),value:R}})},indeterminate:O,value:P,children:m({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,o.jsxs)(f.k,{paddingTop:6,paddingBottom:6,children:[(0,o.jsx)(me.r,{gap:2,style:{flex:1},children:E.map(({checkboxName:R,value:L,action:v,displayName:$,hasConditions:M})=>(0,o.jsx)(he.P,{col:3,children:(0,o.jsx)(mt,{disabled:s,hasConditions:M,children:(0,o.jsx)(z.X,{name:R,disabled:s,onValueChange:U=>{u({target:{name:R,value:U}})},value:L,children:$})})},v))}),(0,o.jsx)(ue,{hasConditions:j,onClick:y})]})]}),a&&(0,o.jsx)(be,{headerBreadCrumbs:[e,n],actions:E,isFormDisabled:s,onClosed:h,onToggle:y})]})};ts.propTypes={actions:r.array.isRequired,categoryName:r.string.isRequired,isFormDisabled:r.bool.isRequired,subCategoryName:r.string.isRequired,pathToData:r.array.isRequired};const De=({childrenForm:e,kind:s,name:n,isOpen:t,isFormDisabled:i,isWhite:a,onOpenCategory:l,pathToData:d})=>{const{formatMessage:p}=(0,B.Z)(),u=()=>{l(n)},m=(0,g.useMemo)(()=>n.split("::").pop(),[n]);return(0,o.jsxs)(fe.U,{expanded:t,onToggle:u,id:`accordion-${n}`,variant:a?"primary":"secondary",children:[(0,o.jsx)(gs.B,{title:oe(m),description:`${p({id:"Settings.permissions.category"},{category:m})} ${s==="plugins"?"plugin":s}`}),(0,o.jsx)(ms.v,{children:(0,o.jsx)(x.x,{padding:6,children:e.map(({actions:C,subCategoryName:_,subCategoryId:P})=>(0,o.jsx)(ts,{actions:C,categoryName:m,isFormDisabled:i,subCategoryName:_,pathToData:[...d,P]},_))})})]})};De.defaultProps={},De.propTypes={childrenForm:r.array.isRequired,isOpen:r.bool.isRequired,isFormDisabled:r.bool.isRequired,isWhite:r.bool.isRequired,kind:r.string.isRequired,name:r.string.isRequired,onOpenCategory:r.func.isRequired,pathToData:r.array.isRequired};const $e=({isFormDisabled:e,kind:s,layout:n})=>{const[t,i]=(0,g.useState)(null),a=l=>{i(l===t?null:l)};return(0,o.jsx)(x.x,{padding:6,background:"neutral0",children:n.map(({category:l,categoryId:d,childrenForm:p},u)=>(0,o.jsx)(De,{childrenForm:p,kind:s,isFormDisabled:e,isOpen:t===l,isWhite:u%2===1,name:l,onOpenCategory:a,pathToData:[s,d]},l))})};$e.propTypes={isFormDisabled:r.bool.isRequired,kind:r.string.isRequired,layout:r.arrayOf(r.shape({category:r.string.isRequired,categoryId:r.string.isRequired,childrenForm:r.arrayOf(r.shape({actions:r.array.isRequired})).isRequired}).isRequired).isRequired};const ns=(e,s,n)=>e.find(t=>t.action===s&&t.subject===n),os=(e,s=[])=>e.reduce((n,t)=>(n[t.id]=s.indexOf(t.id)!==-1,n),{}),is=({children:e},s,n="")=>e.reduce((t,i)=>{if(i.children)return{...t,[i.value]:is(i,s,`${n}${i.value}.`)};const a=s.indexOf(`${n}${i.value}`)!==-1;return t[i.value]=a,t},{}),ht=(e,s,n)=>e.reduce((t,i)=>{const a=s.properties.find(({value:l})=>l===i);if(a){const l=A(n,["properties",a.value],[]),d=is(a,l);t.properties[i]=d}return t},{properties:{}}),ft=(e,s)=>s.reduce((n,t)=>{const i=e.find(({uid:a})=>a===t)||null;return i&&(n[t]=i),n},{}),rs=({subjects:e},s,n,t=[])=>s.reduce((i,a)=>{const l=a.subjects,d=ft(e,l);if(ne(d))return i;const p=Object.keys(d).reduce((u,m)=>{const{actionId:C,applyToProperties:_}=a,y=d[m].properties.map(({value:R})=>R).every(R=>(_||[]).indexOf(R)===-1),h=ns(t,C,m),E=os(n,A(h,"conditions",[]));if(ne(_)||y)return N(u,[m,C],{properties:{enabled:h!==void 0},conditions:E}),u;const j=ht(_,d[m],h);return N(u,[m,C],{...j,conditions:E}),u},{});return Rs(i,p)},{}),Ct=(e,s,n)=>e.reduce((t,i)=>{const a=ns(n,i.action,null);return t[i.action]={properties:{enabled:a!==void 0},conditions:os(s,a?.conditions??[])},t},{}),yt=(e,s,n)=>e.reduce((t,i)=>(t[i.subCategoryId]=Ct(i.actions,s,n),t),{}),as=(e,s,n=[])=>e.reduce((t,{categoryId:i,childrenForm:a})=>{const l=yt(a,s,n);return t[i]=l,t},{}),ls=e=>e.split(" ").join("-"),ds=(e,s)=>Object.entries(Ce(e,s)).map(([n,t])=>({category:n,categoryId:ls(n),childrenForm:Object.entries(Ce(t,"subCategory")).map(([i,a])=>({subCategoryName:i,subCategoryId:ls(i),actions:a}))})),xt=(e,s)=>{const{conditions:n,sections:{collectionTypes:t,singleTypes:i,plugins:a,settings:l}}=e,d={collectionTypes:t,singleTypes:i,plugins:ds(a,"plugin"),settings:ds(l,"category")},p={collectionTypes:rs(t,t.actions||[],n,s),singleTypes:rs(i,i.actions||[],n,s),plugins:as(d.plugins,n,s),settings:as(d.settings,n,s)};return{initialData:p,modifiedData:p,layouts:d}},ge=e=>Object.keys(e).reduce((s,n)=>{const t=e[n];if(Z(t)&&!ce(t,"conditions"))return{...s,[n]:ge(t)};if(Z(t)&&ce(t,"conditions")&&!H(Ie(t,"conditions")).some(a=>a)){const a=Object.keys(t.conditions).reduce((l,d)=>(l[d]=!1,l),{});return{...s,[n]:{...t,conditions:a}}}return s[n]=t,s},{}),ae=(e,s,n=!1)=>Object.keys(e).reduce((t,i)=>{const a=e[i];return i==="conditions"&&!n?(t[i]=a,t):Z(a)?{...t,[i]:ae(a,s,i==="fields")}:(t[i]=s,t)},{}),bt={initialData:{},modifiedData:{},layouts:{}},_t=(e,s)=>(0,Be.ZP)(e,n=>{switch(s.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:t,actionId:i,value:a}=s,l=["modifiedData",t];Object.keys(A(e,l)).forEach(d=>{const p=A(e,[...l,d,i],void 0);if(p){let u=ae(p,a);if(!a&&u.conditions){const m=ae(u.conditions,!1);u={...u,conditions:m}}N(n,[...l,d,i],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:t,propertyName:i,rowName:a,value:l}=s;let d=ye(e.modifiedData);const p=t.split(".."),u=A(d,p,{});Object.keys(u).forEach(m=>{if(ce(u[m],`properties.${i}`)){const C=A(u,[m,"properties",i,a]),_=[...p,m,"properties",i,a];if(!Z(C))N(d,_,l);else{const P=ae(C,l);N(d,_,P)}}}),l||(d=ge(d)),N(n,"modifiedData",d);break}case"ON_CHANGE_CONDITIONS":{Object.entries(s.conditions).forEach(t=>{const[i,a]=t;N(n,["modifiedData",...i.split(".."),"conditions"],a)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let t=ye(e.modifiedData);N(t,[...s.keys.split("..")],s.value),s.value||(t=ge(t)),N(n,"modifiedData",t);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:t,value:i}=s,a=[...t.split("..")];let l=ye(e.modifiedData);const d=A(l,a,{}),p=ae(d,i);N(l,a,p),i||(l=ge(l)),N(n,["modifiedData"],l);break}case"RESET_FORM":{n.modifiedData=e.initialData;break}case"SET_FORM_AFTER_SUBMIT":{n.initialData=e.modifiedData;break}default:return n}}),Se=e=>Object.entries(e).filter(([,s])=>s).map(([s])=>s),jt=e=>{const[s,{conditions:n}]=e;return{action:s,subject:null,conditions:Se(n),properties:{}}},Ot=e=>Object.values(e).reduce((s,n)=>{const t=Object.entries(n).reduce((i,a)=>{const[,{properties:{enabled:l}}]=a;if(!l)return i;const d=jt(a);return i.push(d),i},[]);return[...s,...t]},[]),cs=e=>Object.values(e).reduce((s,n)=>{const t=Ot(n);return[...s,...t]},[]),us=(e,s="")=>Object.entries(e).reduce((n,t)=>{const[i,a]=t;return Z(a)?[...n,...us(a,`${s}${i}.`)]:(a&&!Z(a)&&n.push(`${s}${i}`),n)},[]),Et=(e,s,{conditions:n,properties:t})=>Object.entries(t).reduce((i,a)=>{const[l,d]=a;return i.properties[l]=us(d),i},{action:e,subject:s,conditions:Se(n),properties:{}}),Rt=(e,s,{conditions:n})=>({action:e,subject:s,properties:{},conditions:Se(n)}),Tt=(e,s)=>Object.entries(s).reduce((t,i)=>{const[a,l]=i;if(!H(l).some(u=>u))return t;if(!l?.properties?.enabled){const u=Et(a,e,l);return[...t,u]}if(!l.properties.enabled)return t;const p=Rt(a,e,l);return t.push(p),t},[]),ps=e=>Object.entries(e).reduce((n,t)=>{const[i,a]=t,l=Tt(i,a);return[...n,...l]},[]),At=e=>{const s=cs(e.plugins),n=cs(e.settings),t=ps(e.collectionTypes),i=ps(e.singleTypes);return[...s,...n,...t,...i]},Pt=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],Le=(0,g.forwardRef)(({layout:e,isFormDisabled:s,permissions:n},t)=>{const[{initialData:i,layouts:a,modifiedData:l},d]=(0,g.useReducer)(_t,bt,()=>xt(e,n)),{formatMessage:p}=(0,B.Z)();(0,g.useImperativeHandle)(t,()=>({getPermissions(){const O=(0,de.difference)(i.collectionTypes,l.collectionTypes),y=(0,de.difference)(i.singleTypes,l.singleTypes),h={...O,...y};let E;return ne(h)?E=!1:E=Object.values(h).some(j=>Object.values(j).some(R=>ce(R,"conditions"))),{permissionsToSend:At(l),didUpdateConditions:E}},resetForm(){d({type:"RESET_FORM"})},setFormAfterSubmit(){d({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(O,y,h,E)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:O,propertyName:y,rowName:h,value:E})},m=(O,y,h)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:O,actionId:y,value:h})},C=O=>{d({type:"ON_CHANGE_CONDITIONS",conditions:O})},_=(0,g.useCallback)(({target:{name:O,value:y}})=>{d({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:O,value:y})},[]),P=(0,g.useCallback)(({target:{name:O,value:y}})=>{d({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:O,value:y})},[]);return(0,o.jsx)(Ts,{availableConditions:e.conditions,modifiedData:l,onChangeConditions:C,onChangeSimpleCheckbox:_,onChangeParentCheckbox:P,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:m,children:(0,o.jsxs)(hs.v,{id:"tabs",label:p({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"}),children:[(0,o.jsx)(ke.m,{children:Pt.map(O=>(0,o.jsx)(ke.O,{children:p({id:O.labelId,defaultMessage:O.defaultMessage})},O.id))}),(0,o.jsxs)(te.n,{style:{position:"relative"},children:[(0,o.jsx)(te.x,{children:(0,o.jsx)(ss,{layout:a.collectionTypes,kind:"collectionTypes",isFormDisabled:s})}),(0,o.jsx)(te.x,{children:(0,o.jsx)(ss,{layout:a.singleTypes,kind:"singleTypes",isFormDisabled:s})}),(0,o.jsx)(te.x,{children:(0,o.jsx)($e,{layout:a.plugins,kind:"plugins",isFormDisabled:s})}),(0,o.jsx)(te.x,{children:(0,o.jsx)($e,{layout:a.settings,kind:"settings",isFormDisabled:s})})]})]})})});Le.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},Le.propTypes={layout:r.object,isFormDisabled:r.bool.isRequired,permissions:r.array};const Mt=(0,g.memo)(Le),vt=(e,s={})=>{const{get:n}=(0,de.useFetchClient)(),{data:t,error:i,isError:a,isLoading:l}=(0,We.useQuery)(["permissions",e],async()=>{const{data:{data:d}}=await n("/admin/permissions",{params:{role:e}});return d},s);return{data:t,error:i,isError:a,isLoading:l}},Dt=(e={id:null},s={})=>{const{id:n,...t}=e,{get:i}=(0,de.useFetchClient)(),{data:a,error:l,isError:d,isLoading:p,refetch:u}=(0,We.useQuery)(["roles",n,"permissions",t],async()=>{const{data:{data:m}}=await i(`/admin/roles/${n}/permissions`,{params:t});return m},s);return{permissions:a,error:l,isError:d,isLoading:p,refetch:u}}},99216:(I,W,c)=>{"use strict";c.d(W,{O:()=>V});var o=c(53657),g=c(96125),D=c(87426),f=c(2669),T=c(48814);const x=()=>(0,o.jsx)(f.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,o.jsx)(T.Z,{variant:"pi",textColor:"neutral500",children:"/"})});x.displayName="Divider";var S=c(93134);const K=(0,D.default)(S.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:w})=>`calc(-1*${w.spaces[2]})`};
  }
`,V=({label:w,children:se,...F})=>{const z=g.Children.toArray(se);return(0,o.jsx)(f.x,{"aria-label":w,...F,children:(0,o.jsx)(K,{as:"ol",children:g.Children.map(z,(me,he)=>{const fe=z.length>1&&he+1<z.length;return(0,o.jsxs)(S.k,{inline:!0,as:"li",children:[me,fe&&(0,o.jsx)(x,{})]})})})})};V.displayName="Breadcrumbs"},41062:(I,W,c)=>{"use strict";c.d(W,{$:()=>f});var o=c(53657),g=c(2669),D=c(48814);const f=({children:T,isCurrent:x=!1,...S})=>(0,o.jsx)(g.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,o.jsx)(D.Z,{variant:"pi",textColor:"neutral800",fontWeight:x?"bold":"normal","aria-current":x,...S,children:T})});f.displayName="Crumb"}}]);
