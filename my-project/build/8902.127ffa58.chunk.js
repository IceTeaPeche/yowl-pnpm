(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[8902],{29520:W=>{function V(c,i,m,S){for(var y=-1,T=c==null?0:c.length;++y<T;){var E=c[y];i(S,E,m(E),c)}return S}W.exports=V},98694:(W,V,c)=>{var i=c(1107);function m(S,y,T,E){return i(S,function(K,q,Q){y(E,K,T(K),Q)}),E}W.exports=m},37177:(W,V,c)=>{var i=c(29520),m=c(98694),S=c(90040),y=c(26126);function T(E,K){return function(q,Q){var ue=y(q)?i:m,pe=K?K():{};return ue(q,E,S(Q,2),pe)}}W.exports=T},39738:(W,V,c)=>{var i=c(93367),m=1/0;function S(y){var T=y==null?0:y.length;return T?i(y,m):[]}W.exports=S},63799:(W,V,c)=>{var i=c(71041),m=c(37177),S=Object.prototype,y=S.hasOwnProperty,T=m(function(E,K,q){y.call(E,q)?E[q].push(K):i(E,q,[K])});W.exports=T},68902:(W,V,c)=>{"use strict";c.d(V,{P:()=>Mt,a:()=>Dt,u:()=>vt});var i=c(74081),m=c(27279),S=c(48102),y=c(10701),T=c(21395),E=c(93415),K=c(61181),q=c(5938),Q=c(6918),ue=c(15244),pe=c(35250),N=c(73411),De=c(22572),cs=c(23298),us=c(74577),ps=c(45322),gs=c(24920),ms=c(34642),hs=c(69878),$e=c(94098),J=c(61908),re=c(684),ae=c(10131),ee=c(10124),r=c(70627),k=c(61020),fs=c(76873),Cs=c(51006),x=c(72450),ys=c(35318),xs=c(10411),_s=c(57853),bs=c(78582),A=c(98934),Se=c(74919),js=c(89486),Os=c(82298),Le=c(61815),ge=c(63799),se=c(51943),Es=c(39738),U=c(3243),Rs=c(87830),I=c(43433),me=c(8175),ke=c(40464);const[As,Ps]=(0,fs.k)("PermissionsDataManager"),X=()=>Ps("usePermissionsDataManager"),Ts=x.default.div`
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
`,he=({onClick:e,className:s,hasConditions:n,variant:t})=>{const{formatMessage:o}=(0,k.Z)();return(0,i.jsx)(Ts,{hasConditions:n,className:s,children:(0,i.jsx)(S.z,{variant:t,startIcon:(0,i.jsx)(ys.Z,{}),onClick:e,children:o({id:"global.settings",defaultMessage:"Settings"})})})};he.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},he.propTypes={onClick:r.func.isRequired,className:r.string,hasConditions:r.bool,variant:r.string};const le=(0,x.default)(he)``,Ms=e=>Object.values(e).map(s=>Object.entries(s).filter(([,n])=>n).map(([n])=>n)).flat(),vs=e=>e.reduce((s,[n,t])=>(s.push({label:se(n),children:t.map(o=>({label:o.displayName,value:o.id}))}),s),[]),Ds=(e,s)=>e.map(([,n])=>n).flat().reduce((n,t)=>({[t.id]:s.includes(t.id),...n}),{}),Ie=({arrayOfOptionsGroupedByCategory:e,isFormDisabled:s,isGrey:n,label:t,name:o,onChange:a,value:l})=>{const{formatMessage:d}=(0,k.Z)(),p=u=>{a(o,Ds(e,u))};return(0,i.jsxs)(y.k,{as:"li",background:n?"neutral100":"neutral0",paddingBottom:3,paddingTop:3,children:[(0,i.jsxs)(y.k,{paddingLeft:6,style:{width:180},children:[(0,i.jsxs)(T.Z,{variant:"sigma",textColor:"neutral600",children:[d({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"]}),(0,i.jsx)(T.Z,{variant:"sigma",title:t,textColor:"primary600",ellipsis:!0,children:d({id:`Settings.roles.form.permissions.${t.toLowerCase()}`,defaultMessage:t})}),(0,i.jsxs)(T.Z,{variant:"sigma",textColor:"neutral600",children:["\xA0",d({id:"Settings.permissions.conditions.when",defaultMessage:"When"})]})]}),(0,i.jsx)(E.x,{style:{maxWidth:430,width:"100%"},children:(0,i.jsx)(K.Q,{id:o,customizeContent:u=>`${u.length} currently selected`,onChange:p,value:Ms(l),options:vs(e),disabled:s})})]})};Ie.propTypes={arrayOfOptionsGroupedByCategory:r.array.isRequired,isFormDisabled:r.bool.isRequired,isGrey:r.bool.isRequired,label:r.string.isRequired,name:r.string.isRequired,value:r.object.isRequired,onChange:r.func.isRequired};const $s=(e,s)=>e.reduce((n,t)=>(n[t.id]=A(s,t.id,!1),n),{}),Ss=(e,s)=>e.reduce((n,t)=>{const[o,a]=t,l=$s(a,s);return n[o]=l,n},{}),Ls=(e,s,n)=>e.reduce((t,o)=>{const a=A(s,[...o.pathToConditionsObject,"conditions"],{}),l=Ss(n,a);return t[o.pathToConditionsObject.join("..")]=l,t},{}),fe=({actions:e,headerBreadCrumbs:s,isFormDisabled:n,onClosed:t,onToggle:o})=>{const{formatMessage:a}=(0,k.Z)(),{availableConditions:l,modifiedData:d,onChangeConditions:p}=X(),u=(0,m.useMemo)(()=>Object.entries(ge(l,"category")),[l]),g=e.filter(({isDisplayed:h,hasSomeActionsSelected:O,hasAllActionsSelected:b})=>h&&(O||b)),f=(0,m.useMemo)(()=>Ls(g,d,u),[g,d,u]),[_,P]=(0,m.useState)(f),j=(h,O)=>{P((0,Le.ZP)(b=>{b[h]||(b[h]={}),b[h].default||(b[h].default={}),b[h].default=O}))},C=()=>{const h=Object.entries(_).reduce((O,b)=>{const[R,$]=b,v=Object.values($).reduce((D,M)=>({...D,...M}),{});return O[R]=v,O},{});p(h),o()};return(0,i.jsxs)(q.P,{labelledBy:"condition-modal-breadcrumbs",onClose:t,children:[(0,i.jsx)(Q.x,{children:(0,i.jsx)(js.O,{id:"condition-modal-breadcrumbs",label:s.join(", "),children:s.map((h,O,b)=>(0,i.jsx)(Os.$,{isCurrent:O===b.length-1,children:se(a({id:h,defaultMessage:h}))},h))})}),(0,i.jsxs)(ue.f,{children:[g.length===0&&(0,i.jsx)(T.Z,{children:a({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})}),(0,i.jsx)("ul",{children:g.map(({actionId:h,label:O,pathToConditionsObject:b},R)=>{const $=b.join("..");return(0,i.jsx)(Ie,{arrayOfOptionsGroupedByCategory:u,label:O,isFormDisabled:n,isGrey:R%2===0,name:$,onChange:j,value:A(_,$,{})},h)})})]}),(0,i.jsx)(pe.m,{startActions:(0,i.jsx)(S.z,{variant:"tertiary",onClick:o,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,i.jsx)(S.z,{onClick:C,children:a({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"})})})]})};fe.propTypes={actions:r.arrayOf(r.shape({actionId:r.string.isRequired,checkboxName:r.string,hasSomeActionsSelected:r.bool.isRequired,hasAllActionsSelected:r.bool,isDisplayed:r.bool.isRequired,label:r.string})).isRequired,headerBreadCrumbs:r.arrayOf(r.string).isRequired,isFormDisabled:r.bool.isRequired,onClosed:r.func.isRequired,onToggle:r.func.isRequired};const Y=`${120/16}rem`,Ce=`${200/16}rem`,de=`${53/16}rem`,ye=x.default.div`
  width: ${Y};
`,Be=(0,x.default)(y.k)`
  padding-right: ${({theme:e})=>e.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:e})=>e&&"cursor: pointer;"}
`,xe=({children:e,isCollapsable:s,isActive:n,isFormDisabled:t,label:o,onChange:a,onClick:l,checkboxName:d,someChecked:p,value:u})=>{const{formatMessage:g}=(0,k.Z)();return(0,i.jsxs)(y.k,{alignItems:"center",paddingLeft:6,style:{width:Ce,flexShrink:0},children:[(0,i.jsx)(E.x,{paddingRight:2,children:(0,i.jsx)(N.C,{name:d,"aria-label":g({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:o}),disabled:t,onValueChange:f=>a({target:{name:d,value:f}}),indeterminate:p,value:u})}),(0,i.jsxs)(Be,{title:o,alignItems:"center",isCollapsable:s,...s&&{onClick:l,"aria-expanded":n,onKeyDown:({key:f})=>(f==="Enter"||f===" ")&&l(),tabIndex:0,role:"button"},children:[(0,i.jsx)(T.Z,{fontWeight:n?"bold":"",textColor:n?"primary600":"neutral800",ellipsis:!0,children:se(o)}),e]})]})};xe.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},xe.propTypes={checkboxName:r.string,children:r.node,label:r.string.isRequired,isCollapsable:r.bool,isFormDisabled:r.bool.isRequired,onChange:r.func,onClick:r.func.isRequired,someChecked:r.bool,value:r.bool,isActive:r.bool.isRequired};const We=(0,m.memo)(xe),w=e=>U(e)?Es(Object.values(e).map(s=>U(s)?w(s):s)):[],_e=e=>e?Object.keys(e).reduce((s,n)=>(n!=="conditions"&&(s[n]=e[n]),s),{}):null,Z=e=>{const s=_e(e),n=w(s);if(!n.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const t=n.every(a=>a),o=n.some(a=>a)&&!t;return{hasAllActionsSelected:t,hasSomeActionsSelected:o}},te=(0,x.default)(xs.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:e})=>e?"180":"0"}deg);
  margin-left: ${({theme:e})=>e.spaces[2]};
`,ne=e=>`
  ${T.Z} {
    color: ${e.colors.primary600};
    font-weight: ${e.fontWeights.bold}
  }
  ${te} {
    display: block;
    path {
      fill: ${e.colors.primary600}
    };
  }
`,ks=(e,s,n)=>e.map(({actionId:t,isDisplayed:o,applyToProperties:a,label:l})=>{if(!o)return{actionId:t,hasSomeActionsSelected:!1,isDisplayed:o};const d=[...n.split(".."),t],p=ee(a)?[...d,"properties","enabled"]:d,u=p.join(".."),g=A(s,[...d,"conditions"],null),f=w(g).some(C=>C);if(ee(a)){const C=A(s,p,!1);return{actionId:t,checkboxName:u,hasAllActionsSelected:C,hasConditions:f,hasSomeActionsSelected:C,isDisplayed:o,isParentCheckbox:!1,label:l,pathToConditionsObject:d}}const _=A(s,p,null),{hasAllActionsSelected:P,hasSomeActionsSelected:j}=Z(_);return{actionId:t,checkboxName:u,hasAllActionsSelected:P,hasConditions:f,hasSomeActionsSelected:j,isDisplayed:o,isParentCheckbox:!0,label:l,pathToConditionsObject:d}}),be=(e,s)=>`
  ${Ke} {
    background-color: ${e.colors.primary100};
    color: ${e.colors.primary600};
    border-radius: ${s?"2px 2px 0 0":"2px"};
  }
  ${Fe} {
    display: flex;
  }
  ${le} {
    display: block;
  }
  &:hover {
   ${ne(e)}
  }

  &:focus-within {
    ${({theme:n,isActive:t})=>be(n,t)}
  }
  
`,Ke=x.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${de};
  background-color: ${({isGrey:e,theme:s})=>e?s.colors.neutral100:s.colors.neutral0};
  border: 1px solid transparent;
`,Is=x.default.div`
  display: inline-flex;
  min-width: 100%;

  ${le} {
    display: none;
  }
  ${({isActive:e,theme:s})=>e&&be(s,e)}
  &:hover {
    ${({theme:e,isActive:s})=>be(e,s)}
  }
`,qe=(0,x.default)(y.k)`
  width: ${Y};
  position: relative;
`,Fe=(0,x.default)(E.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Ne=x.default.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:e})=>e.colors.primary600};
`,Bs=(0,x.default)(E.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,Ue=({availableActions:e,isActive:s,isGrey:n,isFormDisabled:t,label:o,onClickToggle:a,pathToData:l})=>{const[d,p]=(0,m.useState)(!1),{formatMessage:u}=(0,k.Z)(),{modifiedData:g,onChangeParentCheckbox:f,onChangeSimpleCheckbox:_}=X(),P=()=>{p(v=>!v)},j=()=>{p(!1)},C=A(g,l.split(".."),{}),h=(0,m.useMemo)(()=>Object.keys(C).reduce((v,D)=>(v[D]=Se(C[D],"conditions"),v),{}),[C]),{hasAllActionsSelected:O,hasSomeActionsSelected:b}=Z(h),R=(0,m.useMemo)(()=>ks(e,g,l),[e,g,l]),$=R.some(({hasConditions:v})=>v);return(0,i.jsxs)(Is,{isActive:s,children:[(0,i.jsxs)(Ke,{isGrey:n,children:[(0,i.jsx)(We,{isCollapsable:!0,isFormDisabled:t,label:o,checkboxName:l,onChange:f,onClick:a,someChecked:b,value:O,isActive:s,children:(0,i.jsx)(Fe,{paddingLeft:2,children:s?(0,i.jsx)(_s.Z,{}):(0,i.jsx)(bs.Z,{})})}),(0,i.jsx)(y.k,{style:{flex:1},children:R.map(({actionId:v,hasConditions:D,hasAllActionsSelected:M,hasSomeActionsSelected:B,isDisplayed:z,isParentCheckbox:L,checkboxName:F,label:ie})=>z?L?(0,i.jsxs)(qe,{justifyContent:"center",alignItems:"center",children:[D&&(0,i.jsx)(Ne,{}),(0,i.jsx)(N.C,{disabled:t,name:F,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${ie} ${o}`}),onValueChange:H=>{f({target:{name:F,value:H}})},indeterminate:B,value:M})]},v):(0,i.jsxs)(qe,{justifyContent:"center",alignItems:"center",children:[D&&(0,i.jsx)(Ne,{}),(0,i.jsx)(N.C,{disabled:t,indeterminate:D,name:F,onValueChange:H=>{_({target:{name:F,value:H}})},value:M})]},v):(0,i.jsx)(ye,{},v))}),d&&(0,i.jsx)(fe,{headerBreadCrumbs:[o,"Settings.permissions.conditions.conditions"],actions:R,isFormDisabled:t,onClosed:j,onToggle:P})]}),(0,i.jsx)(Bs,{children:(0,i.jsx)(le,{onClick:P,hasConditions:$})})]})};Ue.propTypes={availableActions:r.array.isRequired,isActive:r.bool.isRequired,isGrey:r.bool.isRequired,isFormDisabled:r.bool.isRequired,label:r.string.isRequired,onClickToggle:r.func.isRequired,pathToData:r.string.isRequired};const Ws=x.default.span`
  color: ${({theme:e})=>e.colors.danger700};
  padding-left: ${({theme:e})=>e.spaces[1]}px;
`,Ve=()=>(0,i.jsx)(Ws,{children:"*"}),Ks=(e,s)=>e.map(n=>{const t=Array.isArray(n.subjects)&&n.subjects.indexOf(s)!==-1;return{...n,isDisplayed:t}}),qs=(0,x.default)(E.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e})=>e.colors.primary200};
    display: block;
  }
`,Fs=x.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:s})=>e.colors[s]};
  }
`,je=e=>(0,i.jsx)(qs,{children:(0,i.jsx)(Fs,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})})});je.defaultProps={fill:"primary200"},je.propTypes={fill:r.string};const Ns=(0,m.memo)(je),we=(0,x.default)(y.k)`
  width: ${Y};
  position: relative;
`,Us=(0,x.default)(y.k)`
  height: ${de};
`,Vs=(0,x.default)(E.x)`
  padding-left: ${31/16}rem;
`,ws=(0,x.default)(E.x)`
  border-left: ${({isVisible:e,theme:s})=>e?`4px solid ${s.colors.primary200}`:"4px solid transparent"};
`,Zs=(0,x.default)(y.k)`
  padding-left: ${({theme:e})=>e.spaces[4]};
  width: ${({level:e})=>145-e*36}px;

  ${({isCollapsable:e,theme:s})=>e&&`
      ${te} {
        display: block;
        color: ${s.colors.neutral100};
      }
      &:hover {
        ${ne(s)}
      }
  `}
  ${({isActive:e,theme:s})=>e&&ne(s)};
`,Hs=x.default.div`
  padding-top: ${({theme:e})=>e.spaces[2]};
  margin-top: ${({theme:e})=>e.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:e})=>e.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,Oe=({childrenForm:e,isFormDisabled:s,recursiveLevel:n,pathToDataFromActionRow:t,propertyActions:o,parentName:a,propertyName:l})=>{const{formatMessage:d}=(0,k.Z)(),{modifiedData:p,onChangeParentCheckbox:u,onChangeSimpleCheckbox:g}=X(),[f,_]=(0,m.useState)(null),P=C=>{_(h=>h===C?null:C)},j=(0,m.useMemo)(()=>f?e.find(({value:C})=>C===f):null,[f,e]);return(0,i.jsxs)(Vs,{children:[(0,i.jsx)(Hs,{}),e.map(({label:C,value:h,required:O,children:b},R)=>{const $=R+1<e.length,v=Array.isArray(b),D=f===h;return(0,i.jsxs)(ws,{isVisible:$,children:[(0,i.jsxs)(Us,{children:[(0,i.jsx)(Ns,{color:"primary200"}),(0,i.jsxs)(y.k,{style:{flex:1},children:[(0,i.jsx)(Zs,{level:n,isActive:D,isCollapsable:v,children:(0,i.jsxs)(Be,{alignItems:"center",isCollapsable:v,...v&&{onClick:()=>P(h),"aria-expanded":D,onKeyDown:({key:M})=>(M==="Enter"||M===" ")&&P(h),tabIndex:0,role:"button"},title:C,children:[(0,i.jsx)(T.Z,{ellipsis:!0,children:se(C)}),O&&(0,i.jsx)(Ve,{}),(0,i.jsx)(te,{$isActive:D})]})}),(0,i.jsx)(y.k,{style:{flex:1},children:o.map(({actionId:M,label:B,isActionRelatedToCurrentProperty:z})=>{if(!z)return(0,i.jsx)(ye,{},M);const L=[...t.split(".."),M,"properties",l,...a.split(".."),h],F=A(p,L,!1);if(!b)return(0,i.jsx)(we,{justifyContent:"center",alignItems:"center",children:(0,i.jsx)(N.C,{disabled:s,name:L.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${C} ${B}`}),onValueChange:G=>{g({target:{name:L.join(".."),value:G}})},value:F})},B);const{hasAllActionsSelected:ie,hasSomeActionsSelected:H}=Z(F);return(0,i.jsx)(we,{justifyContent:"center",alignItems:"center",children:(0,i.jsx)(N.C,{disabled:s,name:L.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${C} ${B}`}),onValueChange:G=>{u({target:{name:L.join(".."),value:G}})},value:ie,indeterminate:H},B)},B)})})]})]}),j&&D&&(0,i.jsx)(E.x,{paddingBottom:2,children:(0,i.jsx)(Oe,{isFormDisabled:s,parentName:`${a}..${h}`,pathToDataFromActionRow:t,propertyActions:o,propertyName:l,recursiveLevel:n+1,childrenForm:j.children})})]},h)})]})};Oe.propTypes={childrenForm:r.array.isRequired,isFormDisabled:r.bool.isRequired,parentName:r.string.isRequired,pathToDataFromActionRow:r.string.isRequired,propertyActions:r.array.isRequired,propertyName:r.string.isRequired,recursiveLevel:r.number.isRequired};const Gs=(0,m.memo)(Oe),Xs=e=>e.reduce((n,t)=>(t.isActionRelatedToCurrentProperty&&n.push(t.actionId),n),[]),Ys=(e,s,n,t,o)=>{const l=Xs(e).reduce((d,p)=>{const u=[...n.split(".."),p,"properties",t,o],g=A(s,u,!1);return d[p]=g,d},{});return Z(l)},Ze=(0,x.default)(y.k)`
  width: ${Y};
  position: relative;
`,zs=(0,x.default)(y.k)`
  height: ${de};
  flex: 1;

  ${({isCollapsable:e,theme:s})=>e&&`
      ${te} {
        display: block;
        color: ${s.colors.neutral100};
      }
      &:hover {
        ${ne(s)}
      }
  `}
  ${({isActive:e,theme:s})=>e&&ne(s)};
`,Ee=({childrenForm:e,label:s,isFormDisabled:n,name:t,required:o,pathToData:a,propertyActions:l,propertyName:d,isOdd:p})=>{const{formatMessage:u}=(0,k.Z)(),[g,f]=(0,m.useState)(null),{modifiedData:_,onChangeCollectionTypeLeftActionRowCheckbox:P,onChangeParentCheckbox:j,onChangeSimpleCheckbox:C}=X(),h=g===t,O=(0,m.useMemo)(()=>Array.isArray(e)?e:[],[e]),b=O.length>0,R=(0,m.useCallback)(()=>{b&&f(M=>M===t?null:t)},[b,t]),$=({target:{value:M}})=>{P(a,d,t,M)},{hasAllActionsSelected:v,hasSomeActionsSelected:D}=(0,m.useMemo)(()=>Ys(l,_,a,d,t),[l,_,a,d,t]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(zs,{alignItems:"center",isCollapsable:b,isActive:h,background:p?"neutral100":"neutral0",children:(0,i.jsxs)(y.k,{children:[(0,i.jsxs)(We,{onChange:$,onClick:R,isCollapsable:b,isFormDisabled:n,label:s,someChecked:D,value:v,isActive:h,children:[o&&(0,i.jsx)(Ve,{}),(0,i.jsx)(te,{$isActive:h})]}),(0,i.jsx)(y.k,{children:l.map(({label:M,isActionRelatedToCurrentProperty:B,actionId:z})=>{if(!B)return(0,i.jsx)(ye,{},M);const L=[...a.split(".."),z,"properties",d,t];if(!b){const G=A(_,L,!1);return(0,i.jsx)(Ze,{justifyContent:"center",alignItems:"center",children:(0,i.jsx)(N.C,{disabled:n,name:L.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${t} ${M}`}),onValueChange:$t=>{C({target:{name:L.join(".."),value:$t}})},value:G})},z)}const F=A(_,L,{}),{hasAllActionsSelected:ie,hasSomeActionsSelected:H}=Z(F);return(0,i.jsx)(Ze,{justifyContent:"center",alignItems:"center",children:(0,i.jsx)(N.C,{disabled:n,name:L.join(".."),onValueChange:G=>{j({target:{name:L.join(".."),value:G}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${t} ${M}`}),value:ie,indeterminate:H})},M)})})]})}),h&&(0,i.jsx)(Gs,{childrenForm:O,isFormDisabled:n,parentName:t,pathToDataFromActionRow:a,propertyName:d,propertyActions:l,recursiveLevel:0})]})};Ee.defaultProps={childrenForm:[],required:!1},Ee.propTypes={childrenForm:r.array,label:r.string.isRequired,isFormDisabled:r.bool.isRequired,name:r.string.isRequired,pathToData:r.string.isRequired,propertyActions:r.array.isRequired,propertyName:r.string.isRequired,required:r.bool,isOdd:r.bool.isRequired};const Qs=(0,m.memo)(Ee),He=(0,x.default)(y.k)`
  width: ${Y};
  flex-shrink: 0;
`,Js=(0,x.default)(y.k)`
  width: ${Ce};
  height: ${de};
  flex-shrink: 0;
`,Ge=({headers:e,label:s})=>{const{formatMessage:n}=(0,k.Z)(),t=n({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:s});return(0,i.jsxs)(y.k,{children:[(0,i.jsx)(Js,{alignItems:"center",paddingLeft:6,children:(0,i.jsx)(T.Z,{variant:"sigma",textColor:"neutral500",children:t})}),e.map(o=>o.isActionRelatedToCurrentProperty?(0,i.jsx)(He,{justifyContent:"center",children:(0,i.jsx)(T.Z,{variant:"sigma",textColor:"neutral500",children:n({id:`Settings.roles.form.permissions.${o.label.toLowerCase()}`,defaultMessage:o.label})})},o.label):(0,i.jsx)(He,{},o.label))]})};Ge.propTypes={headers:r.arrayOf(r.shape({label:r.string.isRequired,isActionRelatedToCurrentProperty:r.bool.isRequired})).isRequired,label:r.string.isRequired};const et=(e,s)=>e.map(n=>{const t=Array.isArray(n.applyToProperties)&&n.applyToProperties.indexOf(s)!==-1&&n.isDisplayed;return{label:n.label,actionId:n.actionId,isActionRelatedToCurrentProperty:t}}),st=x.default.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,Xe=({availableActions:e,childrenForm:s,isFormDisabled:n,label:t,pathToData:o,propertyName:a})=>{const l=(0,m.useMemo)(()=>et(e,a),[e,a]);return(0,i.jsxs)(st,{children:[(0,i.jsx)(Ge,{label:t,headers:l}),(0,i.jsx)(E.x,{children:s.map(({children:d,label:p,value:u,required:g},f)=>(0,i.jsx)(Qs,{childrenForm:d,label:p,isFormDisabled:n,name:u,required:g,propertyActions:l,pathToData:o,propertyName:a,isOdd:f%2===0},u))})]})};Xe.propTypes={childrenForm:r.array.isRequired,availableActions:r.array.isRequired,isFormDisabled:r.bool.isRequired,label:r.string.isRequired,pathToData:r.string.isRequired,propertyName:r.string.isRequired};const tt=x.default.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:e,isActive:s})=>s&&`border: 1px solid ${e.colors.primary600};`}
`,Ye=({allActions:e,contentTypeName:s,label:n,index:t,isActive:o,isFormDisabled:a,onClickToggleCollapse:l,pathToData:d,properties:p})=>{const u=(0,m.useCallback)(()=>{l(s)},[s,l]),g=(0,m.useMemo)(()=>Ks(e,s),[e,s]);return(0,i.jsxs)(tt,{isActive:o,children:[(0,i.jsx)(Ue,{availableActions:g,isActive:o,isGrey:t%2===0,isFormDisabled:a,label:n,onClickToggle:u,pathToData:d}),o&&p.map(({label:f,value:_,children:P})=>(0,i.jsx)(Xe,{availableActions:g,childrenForm:P,isFormDisabled:a,label:f,pathToData:d,propertyName:_},_))]})};Ye.propTypes={allActions:r.array.isRequired,contentTypeName:r.string.isRequired,index:r.number.isRequired,isActive:r.bool.isRequired,isFormDisabled:r.bool.isRequired,label:r.string.isRequired,onClickToggleCollapse:r.func.isRequired,pathToData:r.string.isRequired,properties:r.array.isRequired};const Re=({actions:e,isFormDisabled:s,pathToData:n,subjects:t})=>{const[o,a]=(0,m.useState)(null),l=d=>{a(o===d?null:d)};return t.map(({uid:d,label:p,properties:u},g)=>(0,i.jsx)(Ye,{allActions:e,contentTypeName:d,label:p,isActive:o===d,isFormDisabled:s,index:g,onClickToggleCollapse:l,pathToData:`${n}..${d}`,properties:u},d))};Re.defaultProps={actions:[],subjects:[]},Re.propTypes={actions:r.array.isRequired,isFormDisabled:r.bool.isRequired,pathToData:r.string.isRequired,subjects:r.arrayOf(r.shape({uid:r.string.isRequired,label:r.string.isRequired,properties:r.array.isRequired}))};const nt=(0,m.memo)(Re),ot=e=>e.filter(({subjects:s})=>s&&s.length),it=e=>e.map(({actionId:s})=>s),rt=(e,s)=>e.reduce((n,t)=>(Object.keys(s).forEach(o=>{const a=A(s,[o,t],{}),l={[o]:_e(a)};n[t]?n[t]={...n[t],...l}:n[t]=l}),n),{}),at=(e,s)=>{const n=it(e),t=rt(n,s);return Object.keys(t).reduce((a,l)=>(a[l]=Z(t[l]),a),{})},lt=(0,x.default)(y.k)`
  width: ${Y};
  flex-shrink: 0;
`,Ae=({actions:e,isFormDisabled:s,kind:n})=>{const{formatMessage:t}=(0,k.Z)(),{modifiedData:o,onChangeCollectionTypeGlobalActionCheckbox:a}=X(),l=(0,m.useMemo)(()=>ot(e),[e]),d=(0,m.useMemo)(()=>at(l,o[n]),[o,l,n]);return(0,i.jsx)(E.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:Ce},children:(0,i.jsx)(y.k,{gap:0,children:l.map(({label:p,actionId:u})=>(0,i.jsxs)(lt,{direction:"column",alignItems:"center",justifyContent:"center",gap:3,children:[(0,i.jsx)(T.Z,{variant:"sigma",textColor:"neutral500",children:t({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),(0,i.jsx)(N.C,{disabled:s,onValueChange:g=>{a(n,u,g)},name:u,"aria-label":t({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:t({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),value:A(d,[u,"hasAllActionsSelected"],!1),indeterminate:A(d,[u,"hasSomeActionsSelected"],!1)})]},u))})})};Ae.defaultProps={actions:[]},Ae.propTypes={actions:r.arrayOf(r.shape({label:r.string.isRequired,actionId:r.string.isRequired,subjects:r.array.isRequired})),isFormDisabled:r.bool.isRequired,kind:r.string.isRequired};const dt=(0,m.memo)(Ae),ct=(0,x.default)(E.x)`
  overflow-x: auto;
`,ze=({isFormDisabled:e,kind:s,layout:{actions:n,subjects:t}})=>{const o=Cs([...t],"label");return(0,i.jsxs)(ct,{background:"neutral0",children:[(0,i.jsx)(dt,{actions:n,kind:s,isFormDisabled:e}),(0,i.jsx)(nt,{actions:n,isFormDisabled:e,pathToData:s,subjects:o})]})};ze.propTypes={isFormDisabled:r.bool.isRequired,kind:r.string.isRequired,layout:r.shape({actions:r.array,subjects:r.arrayOf(r.shape({uid:r.string.isRequired,label:r.string.isRequired,properties:r.array.isRequired}))}).isRequired};const Qe=(0,m.memo)(ze),ut=(e,s,n)=>e.map(t=>{const o=[...n,t.action,"properties","enabled"],a=A(s,o,!1),l=A(s,[...n,t.action,"conditions"],{}),d=w(l).some(p=>p);return{...t,isDisplayed:a,checkboxName:o.join(".."),hasSomeActionsSelected:a,value:a,hasConditions:d,label:t.displayName,actionId:t.action,pathToConditionsObject:[...n,t.action]}}),pt=e=>{const s=Object.entries(e).reduce((t,o)=>{const[a,{conditions:l}]=o;return t[a]=l,t},{});return w(s).some(t=>t)},gt=x.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,mt=x.default.div`
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
`,Je=({categoryName:e,isFormDisabled:s,subCategoryName:n,actions:t,pathToData:o})=>{const[a,l]=(0,m.useState)(!1),{modifiedData:d,onChangeParentCheckbox:p,onChangeSimpleCheckbox:u}=X(),{formatMessage:g}=(0,k.Z)(),f=A(d,o,{}),_=(0,m.useMemo)(()=>Object.keys(f).reduce((R,$)=>(R[$]=_e(f[$]),R),{}),[f]),{hasAllActionsSelected:P,hasSomeActionsSelected:j}=Z(_),C=()=>{l(R=>!R)},h=()=>{l(!1)},O=ut(t,d,o),b=pt(A(d,[...o],{}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(E.x,{children:[(0,i.jsxs)(y.k,{justifyContent:"space-between",alignItems:"center",children:[(0,i.jsx)(E.x,{paddingRight:4,children:(0,i.jsx)(T.Z,{variant:"sigma",textColor:"neutral600",children:n})}),(0,i.jsx)(gt,{}),(0,i.jsx)(E.x,{paddingLeft:4,children:(0,i.jsx)(De.X,{name:o.join(".."),disabled:s,onValueChange:R=>{p({target:{name:o.join(".."),value:R}})},indeterminate:j,value:P,children:g({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,i.jsxs)(y.k,{paddingTop:6,paddingBottom:6,children:[(0,i.jsx)(cs.r,{gap:2,style:{flex:1},children:O.map(({checkboxName:R,value:$,action:v,displayName:D,hasConditions:M})=>(0,i.jsx)(us.P,{col:3,children:(0,i.jsx)(mt,{disabled:s,hasConditions:M,children:(0,i.jsx)(De.X,{name:R,disabled:s,onValueChange:B=>{u({target:{name:R,value:B}})},value:$,children:D})})},v))}),(0,i.jsx)(le,{hasConditions:b,onClick:C})]})]}),a&&(0,i.jsx)(fe,{headerBreadCrumbs:[e,n],actions:O,isFormDisabled:s,onClosed:h,onToggle:C})]})};Je.propTypes={actions:r.array.isRequired,categoryName:r.string.isRequired,isFormDisabled:r.bool.isRequired,subCategoryName:r.string.isRequired,pathToData:r.array.isRequired};const Pe=({childrenForm:e,kind:s,name:n,isOpen:t,isFormDisabled:o,isWhite:a,onOpenCategory:l,pathToData:d})=>{const{formatMessage:p}=(0,k.Z)(),u=()=>{l(n)},g=(0,m.useMemo)(()=>n.split("::").pop(),[n]);return(0,i.jsxs)(ps.U,{expanded:t,onToggle:u,id:`accordion-${n}`,variant:a?"primary":"secondary",children:[(0,i.jsx)(gs.B,{title:se(g),description:`${p({id:"Settings.permissions.category"},{category:g})} ${s==="plugins"?"plugin":s}`}),(0,i.jsx)(ms.v,{children:(0,i.jsx)(E.x,{padding:6,children:e.map(({actions:f,subCategoryName:_,subCategoryId:P})=>(0,i.jsx)(Je,{actions:f,categoryName:g,isFormDisabled:o,subCategoryName:_,pathToData:[...d,P]},_))})})]})};Pe.defaultProps={},Pe.propTypes={childrenForm:r.array.isRequired,isOpen:r.bool.isRequired,isFormDisabled:r.bool.isRequired,isWhite:r.bool.isRequired,kind:r.string.isRequired,name:r.string.isRequired,onOpenCategory:r.func.isRequired,pathToData:r.array.isRequired};const Te=({isFormDisabled:e,kind:s,layout:n})=>{const[t,o]=(0,m.useState)(null),a=l=>{o(l===t?null:l)};return(0,i.jsx)(E.x,{padding:6,background:"neutral0",children:n.map(({category:l,categoryId:d,childrenForm:p},u)=>(0,i.jsx)(Pe,{childrenForm:p,kind:s,isFormDisabled:e,isOpen:t===l,isWhite:u%2===1,name:l,onOpenCategory:a,pathToData:[s,d]},l))})};Te.propTypes={isFormDisabled:r.bool.isRequired,kind:r.string.isRequired,layout:r.arrayOf(r.shape({category:r.string.isRequired,categoryId:r.string.isRequired,childrenForm:r.arrayOf(r.shape({actions:r.array.isRequired})).isRequired}).isRequired).isRequired};const es=(e,s,n)=>e.find(t=>t.action===s&&t.subject===n),ss=(e,s=[])=>e.reduce((n,t)=>(n[t.id]=s.indexOf(t.id)!==-1,n),{}),ts=({children:e},s,n="")=>e.reduce((t,o)=>{if(o.children)return{...t,[o.value]:ts(o,s,`${n}${o.value}.`)};const a=s.indexOf(`${n}${o.value}`)!==-1;return t[o.value]=a,t},{}),ht=(e,s,n)=>e.reduce((t,o)=>{const a=s.properties.find(({value:l})=>l===o);if(a){const l=A(n,["properties",a.value],[]),d=ts(a,l);t.properties[o]=d}return t},{properties:{}}),ft=(e,s)=>s.reduce((n,t)=>{const o=e.find(({uid:a})=>a===t)||null;return o&&(n[t]=o),n},{}),ns=({subjects:e},s,n,t=[])=>s.reduce((o,a)=>{const l=a.subjects,d=ft(e,l);if(ee(d))return o;const p=Object.keys(d).reduce((u,g)=>{const{actionId:f,applyToProperties:_}=a,C=d[g].properties.map(({value:R})=>R).every(R=>(_||[]).indexOf(R)===-1),h=es(t,f,g),O=ss(n,A(h,"conditions",[]));if(ee(_)||C)return I(u,[g,f],{properties:{enabled:h!==void 0},conditions:O}),u;const b=ht(_,d[g],h);return I(u,[g,f],{...b,conditions:O}),u},{});return Rs(o,p)},{}),Ct=(e,s,n)=>e.reduce((t,o)=>{const a=es(n,o.action,null);return t[o.action]={properties:{enabled:a!==void 0},conditions:ss(s,a?.conditions??[])},t},{}),yt=(e,s,n)=>e.reduce((t,o)=>(t[o.subCategoryId]=Ct(o.actions,s,n),t),{}),os=(e,s,n=[])=>e.reduce((t,{categoryId:o,childrenForm:a})=>{const l=yt(a,s,n);return t[o]=l,t},{}),is=e=>e.split(" ").join("-"),rs=(e,s)=>Object.entries(ge(e,s)).map(([n,t])=>({category:n,categoryId:is(n),childrenForm:Object.entries(ge(t,"subCategory")).map(([o,a])=>({subCategoryName:o,subCategoryId:is(o),actions:a}))})),xt=(e,s)=>{const{conditions:n,sections:{collectionTypes:t,singleTypes:o,plugins:a,settings:l}}=e,d={collectionTypes:t,singleTypes:o,plugins:rs(a,"plugin"),settings:rs(l,"category")},p={collectionTypes:ns(t,t.actions||[],n,s),singleTypes:ns(o,o.actions||[],n,s),plugins:os(d.plugins,n,s),settings:os(d.settings,n,s)};return{initialData:p,modifiedData:p,layouts:d}},ce=e=>Object.keys(e).reduce((s,n)=>{const t=e[n];if(U(t)&&!ae(t,"conditions"))return{...s,[n]:ce(t)};if(U(t)&&ae(t,"conditions")&&!w(Se(t,"conditions")).some(a=>a)){const a=Object.keys(t.conditions).reduce((l,d)=>(l[d]=!1,l),{});return{...s,[n]:{...t,conditions:a}}}return s[n]=t,s},{}),oe=(e,s,n=!1)=>Object.keys(e).reduce((t,o)=>{const a=e[o];return o==="conditions"&&!n?(t[o]=a,t):U(a)?{...t,[o]:oe(a,s,o==="fields")}:(t[o]=s,t)},{}),_t={initialData:{},modifiedData:{},layouts:{}},bt=(e,s)=>(0,Le.ZP)(e,n=>{switch(s.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:t,actionId:o,value:a}=s,l=["modifiedData",t];Object.keys(A(e,l)).forEach(d=>{const p=A(e,[...l,d,o],void 0);if(p){let u=oe(p,a);if(!a&&u.conditions){const g=oe(u.conditions,!1);u={...u,conditions:g}}I(n,[...l,d,o],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:t,propertyName:o,rowName:a,value:l}=s;let d=me(e.modifiedData);const p=t.split(".."),u=A(d,p,{});Object.keys(u).forEach(g=>{if(ae(u[g],`properties.${o}`)){const f=A(u,[g,"properties",o,a]),_=[...p,g,"properties",o,a];if(!U(f))I(d,_,l);else{const P=oe(f,l);I(d,_,P)}}}),l||(d=ce(d)),I(n,"modifiedData",d);break}case"ON_CHANGE_CONDITIONS":{Object.entries(s.conditions).forEach(t=>{const[o,a]=t;I(n,["modifiedData",...o.split(".."),"conditions"],a)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let t=me(e.modifiedData);I(t,[...s.keys.split("..")],s.value),s.value||(t=ce(t)),I(n,"modifiedData",t);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:t,value:o}=s,a=[...t.split("..")];let l=me(e.modifiedData);const d=A(l,a,{}),p=oe(d,o);I(l,a,p),o||(l=ce(l)),I(n,["modifiedData"],l);break}case"RESET_FORM":{n.modifiedData=e.initialData;break}case"SET_FORM_AFTER_SUBMIT":{n.initialData=e.modifiedData;break}default:return n}}),Me=e=>Object.entries(e).filter(([,s])=>s).map(([s])=>s),jt=e=>{const[s,{conditions:n}]=e;return{action:s,subject:null,conditions:Me(n),properties:{}}},Ot=e=>Object.values(e).reduce((s,n)=>{const t=Object.entries(n).reduce((o,a)=>{const[,{properties:{enabled:l}}]=a;if(!l)return o;const d=jt(a);return o.push(d),o},[]);return[...s,...t]},[]),as=e=>Object.values(e).reduce((s,n)=>{const t=Ot(n);return[...s,...t]},[]),ls=(e,s="")=>Object.entries(e).reduce((n,t)=>{const[o,a]=t;return U(a)?[...n,...ls(a,`${s}${o}.`)]:(a&&!U(a)&&n.push(`${s}${o}`),n)},[]),Et=(e,s,{conditions:n,properties:t})=>Object.entries(t).reduce((o,a)=>{const[l,d]=a;return o.properties[l]=ls(d),o},{action:e,subject:s,conditions:Me(n),properties:{}}),Rt=(e,s,{conditions:n})=>({action:e,subject:s,properties:{},conditions:Me(n)}),At=(e,s)=>Object.entries(s).reduce((t,o)=>{const[a,l]=o;if(!w(l).some(u=>u))return t;if(!l?.properties?.enabled){const u=Et(a,e,l);return[...t,u]}if(!l.properties.enabled)return t;const p=Rt(a,e,l);return t.push(p),t},[]),ds=e=>Object.entries(e).reduce((n,t)=>{const[o,a]=t,l=At(o,a);return[...n,...l]},[]),Pt=e=>{const s=as(e.plugins),n=as(e.settings),t=ds(e.collectionTypes),o=ds(e.singleTypes);return[...s,...n,...t,...o]},Tt=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],ve=(0,m.forwardRef)(({layout:e,isFormDisabled:s,permissions:n},t)=>{const[{initialData:o,layouts:a,modifiedData:l},d]=(0,m.useReducer)(bt,_t,()=>xt(e,n)),{formatMessage:p}=(0,k.Z)();(0,m.useImperativeHandle)(t,()=>({getPermissions(){const j=(0,re.difference)(o.collectionTypes,l.collectionTypes),C=(0,re.difference)(o.singleTypes,l.singleTypes),h={...j,...C};let O;return ee(h)?O=!1:O=Object.values(h).some(b=>Object.values(b).some(R=>ae(R,"conditions"))),{permissionsToSend:Pt(l),didUpdateConditions:O}},resetForm(){d({type:"RESET_FORM"})},setFormAfterSubmit(){d({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(j,C,h,O)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:j,propertyName:C,rowName:h,value:O})},g=(j,C,h)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:j,actionId:C,value:h})},f=j=>{d({type:"ON_CHANGE_CONDITIONS",conditions:j})},_=(0,m.useCallback)(({target:{name:j,value:C}})=>{d({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:j,value:C})},[]),P=(0,m.useCallback)(({target:{name:j,value:C}})=>{d({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:j,value:C})},[]);return(0,i.jsx)(As,{availableConditions:e.conditions,modifiedData:l,onChangeConditions:f,onChangeSimpleCheckbox:_,onChangeParentCheckbox:P,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:g,children:(0,i.jsxs)(hs.v,{id:"tabs",label:p({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"}),children:[(0,i.jsx)($e.m,{children:Tt.map(j=>(0,i.jsx)($e.O,{children:p({id:j.labelId,defaultMessage:j.defaultMessage})},j.id))}),(0,i.jsxs)(J.n,{style:{position:"relative"},children:[(0,i.jsx)(J.x,{children:(0,i.jsx)(Qe,{layout:a.collectionTypes,kind:"collectionTypes",isFormDisabled:s})}),(0,i.jsx)(J.x,{children:(0,i.jsx)(Qe,{layout:a.singleTypes,kind:"singleTypes",isFormDisabled:s})}),(0,i.jsx)(J.x,{children:(0,i.jsx)(Te,{layout:a.plugins,kind:"plugins",isFormDisabled:s})}),(0,i.jsx)(J.x,{children:(0,i.jsx)(Te,{layout:a.settings,kind:"settings",isFormDisabled:s})})]})]})})});ve.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},ve.propTypes={layout:r.object,isFormDisabled:r.bool.isRequired,permissions:r.array};const Mt=(0,m.memo)(ve),vt=(e,s={})=>{const{get:n}=(0,re.useFetchClient)(),{data:t,error:o,isError:a,isLoading:l}=(0,ke.useQuery)(["permissions",e],async()=>{const{data:{data:d}}=await n("/admin/permissions",{params:{role:e}});return d},s);return{data:t,error:o,isError:a,isLoading:l}},Dt=(e={id:null},s={})=>{const{id:n,...t}=e,{get:o}=(0,re.useFetchClient)(),{data:a,error:l,isError:d,isLoading:p,refetch:u}=(0,ke.useQuery)(["roles",n,"permissions",t],async()=>{const{data:{data:g}}=await o(`/admin/roles/${n}/permissions`,{params:t});return g},s);return{permissions:a,error:l,isError:d,isLoading:p,refetch:u}}}}]);
