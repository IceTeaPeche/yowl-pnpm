(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[4868],{29520:i=>{function u(n,r,s,t){for(var e=-1,a=n==null?0:n.length;++e<a;){var o=n[e];r(t,o,s(o),n)}return t}i.exports=u},67083:(i,u,n)=>{var r=n(62878);function s(t,e){var a=t==null?0:t.length;return!!a&&r(t,e,0)>-1}i.exports=s},65286:i=>{function u(n,r,s){for(var t=-1,e=n==null?0:n.length;++t<e;)if(s(r,n[t]))return!0;return!1}i.exports=u},83377:(i,u,n)=>{var r=n(54483),s=r("length");i.exports=s},98694:(i,u,n)=>{var r=n(1107);function s(t,e,a,o){return r(t,function(d,l,c){e(o,d,a(d),c)}),o}i.exports=s},1107:(i,u,n)=>{var r=n(84856),s=n(52593),t=s(r);i.exports=t},32652:i=>{function u(n,r,s,t){for(var e=n.length,a=s+(t?1:-1);t?a--:++a<e;)if(r(n[a],a,n))return a;return-1}i.exports=u},62878:(i,u,n)=>{var r=n(32652),s=n(2784),t=n(51425);function e(a,o,d){return o===o?t(a,o,d):r(a,s,d)}i.exports=e},2784:i=>{function u(n){return n!==n}i.exports=u},92403:(i,u,n)=>{var r=n(1107),s=n(47727);function t(e,a){var o=-1,d=s(e)?Array(e.length):[];return r(e,function(l,c,f){d[++o]=a(l,c,f)}),d}i.exports=t},16429:(i,u,n)=>{var r=n(36393),s=n(82393),t=n(90040),e=n(92403),a=n(63135),o=n(20435),d=n(9998),l=n(51339),c=n(26126);function f(x,E,h){E.length?E=r(E,function(g){return c(g)?function(p){return s(p,g.length===1?g[0]:g)}:g}):E=[l];var j=-1;E=r(E,o(t));var v=e(x,function(g,p,M){var O=r(E,function(P){return P(g)});return{criteria:O,index:++j,value:g}});return a(v,function(g,p){return d(g,p,h)})}i.exports=f},63135:i=>{function u(n,r){var s=n.length;for(n.sort(r);s--;)n[s]=n[s].value;return n}i.exports=u},21157:(i,u,n)=>{var r=n(44936),s=n(67083),t=n(65286),e=n(42435),a=n(83661),o=n(1695),d=200;function l(c,f,x){var E=-1,h=s,j=c.length,v=!0,g=[],p=g;if(x)v=!1,h=t;else if(j>=d){var M=f?null:a(c);if(M)return o(M);v=!1,h=e,p=new r}else p=f?[]:g;n:for(;++E<j;){var O=c[E],P=f?f(O):O;if(O=x||O!==0?O:0,v&&P===P){for(var D=p.length;D--;)if(p[D]===P)continue n;f&&p.push(P),g.push(O)}else h(p,P,x)||(p!==g&&p.push(P),g.push(O))}return g}i.exports=l},17654:(i,u,n)=>{var r=n(85194);function s(t,e){if(t!==e){var a=t!==void 0,o=t===null,d=t===t,l=r(t),c=e!==void 0,f=e===null,x=e===e,E=r(e);if(!f&&!E&&!l&&t>e||l&&c&&x&&!f&&!E||o&&c&&x||!a&&x||!d)return 1;if(!o&&!l&&!E&&t<e||E&&a&&d&&!o&&!l||f&&a&&d||!c&&d||!x)return-1}return 0}i.exports=s},9998:(i,u,n)=>{var r=n(17654);function s(t,e,a){for(var o=-1,d=t.criteria,l=e.criteria,c=d.length,f=a.length;++o<c;){var x=r(d[o],l[o]);if(x){if(o>=f)return x;var E=a[o];return x*(E=="desc"?-1:1)}}return t.index-e.index}i.exports=s},37177:(i,u,n)=>{var r=n(29520),s=n(98694),t=n(90040),e=n(26126);function a(o,d){return function(l,c){var f=e(l)?r:s,x=d?d():{};return f(l,o,t(c,2),x)}}i.exports=a},52593:(i,u,n)=>{var r=n(47727);function s(t,e){return function(a,o){if(a==null)return a;if(!r(a))return t(a,o);for(var d=a.length,l=e?d:-1,c=Object(a);(e?l--:++l<d)&&o(c[l],l,c)!==!1;);return a}}i.exports=s},83661:(i,u,n)=>{var r=n(31497),s=n(18920),t=n(1695),e=1/0,a=r&&1/t(new r([,-0]))[1]==e?function(o){return new r(o)}:s;i.exports=a},51425:i=>{function u(n,r,s){for(var t=s-1,e=n.length;++t<e;)if(n[t]===r)return t;return-1}i.exports=u},30930:(i,u,n)=>{var r=n(83377),s=n(11993),t=n(61781);function e(a){return s(a)?t(a):r(a)}i.exports=e},61781:i=>{var u="\\ud800-\\udfff",n="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",s="\\u20d0-\\u20ff",t=n+r+s,e="\\ufe0e\\ufe0f",a="["+u+"]",o="["+t+"]",d="\\ud83c[\\udffb-\\udfff]",l="(?:"+o+"|"+d+")",c="[^"+u+"]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",x="[\\ud800-\\udbff][\\udc00-\\udfff]",E="\\u200d",h=l+"?",j="["+e+"]?",v="(?:"+E+"(?:"+[c,f,x].join("|")+")"+j+h+")*",g=j+h+v,p="(?:"+[c+o+"?",o,f,x,a].join("|")+")",M=RegExp(d+"(?="+d+")|"+p+g,"g");function O(P){for(var D=M.lastIndex=0;M.test(P);)++D;return D}i.exports=O},63799:(i,u,n)=>{var r=n(71041),s=n(37177),t=Object.prototype,e=t.hasOwnProperty,a=s(function(o,d,l){e.call(o,l)?o[l].push(d):r(o,l,[d])});i.exports=a},63514:(i,u,n)=>{var r=n(13578),s=n(26126),t=n(27138),e="[object String]";function a(o){return typeof o=="string"||!s(o)&&t(o)&&r(o)==e}i.exports=a},18920:i=>{function u(){}i.exports=u},84921:(i,u,n)=>{var r=n(52695),s=n(4500),t=n(47727),e=n(63514),a=n(30930),o="[object Map]",d="[object Set]";function l(c){if(c==null)return 0;if(t(c))return e(c)?a(c):c.length;var f=s(c);return f==o||f==d?c.size:r(c).length}i.exports=l},51006:(i,u,n)=>{var r=n(93367),s=n(16429),t=n(52431),e=n(65145),a=t(function(o,d){if(o==null)return[];var l=d.length;return l>1&&e(o,d[0],d[1])?d=[]:l>2&&e(d[0],d[1],d[2])&&(d=[d[0]]),s(o,r(d,1),[])});i.exports=a},79146:(i,u,n)=>{var r=n(16946);function s(t){return r(t).toLowerCase()}i.exports=s},81465:(i,u,n)=>{var r=n(21157);function s(t){return t&&t.length?r(t):[]}i.exports=s},71877:(i,u,n)=>{"use strict";n.d(u,{m:()=>o});var r=n(74081),s=n(72450),t=n(23298);const e=`${232/16}rem`,a=(0,s.default)(t.r)`
  width: ${e};
  background: ${({theme:d})=>d.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:d})=>d.colors.neutral200};
  z-index: 1;
`,o=({ariaLabel:d,...l})=>(0,r.jsx)(a,{"aria-label":d,as:"nav",...l})},25804:(i,u,n)=>{"use strict";n.d(u,{p:()=>g});var r=n(74081),s=n(27279),t=n(10382),e=n(72450),a=n(89166),o=n(74513),d=n(76646),l=n(84366),c=n(93415),f=n(28479),x=n(31624),E=n(10701),h=n(21395),j=n(4987);const v=(0,e.default)(l.i)`
  width: ${24/16}rem;
  background-color: ${({theme:p})=>p.colors.neutral200};
`,g=({as:p="h2",label:M,searchLabel:O="",searchable:P=!1,onChange:D=()=>{},value:A="",onClear:L=()=>{},onSubmit:C=()=>{},id:R})=>{const[B,S]=(0,s.useState)(!1),y=(0,d.D)(B),W=(0,o.M)(R),T=(0,s.useRef)(void 0),_=(0,s.useRef)(void 0);(0,s.useEffect)(()=>{B&&T.current&&T.current.focus(),y&&!B&&_.current&&_.current.focus()},[B,y]);const I=()=>{S(m=>!m)},U=m=>{L(m),T.current.focus()},b=m=>{m.relatedTarget?.id!==W&&S(!1)},K=m=>{m.key===a.y.ESCAPE&&S(!1)};return B?(0,r.jsxs)(c.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,r.jsx)(f.U,{children:(0,r.jsx)(x.w,{name:"searchbar",value:A,onChange:D,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:K,ref:T,onBlur:b,onClear:U,onSubmit:C,clearLabel:"Clear",size:"S",children:O})}),(0,r.jsx)(c.x,{paddingLeft:2,paddingTop:4,children:(0,r.jsx)(v,{})})]}):(0,r.jsxs)(c.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,r.jsxs)(E.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,r.jsx)(h.Z,{variant:"beta",as:p,children:M}),P&&(0,r.jsx)(j.h,{ref:_,onClick:I,label:O,icon:(0,r.jsx)(t.Z,{})})]}),(0,r.jsx)(c.x,{paddingTop:4,children:(0,r.jsx)(v,{})})]})}},49370:(i,u,n)=>{"use strict";n.d(u,{E:()=>E});var r=n(74081),s=n(27279),t=n(79830),e=n(72450),a=n(93415),o=n(21395),d=n(10701),l=n(30413);const c=(0,e.default)(a.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:h})=>h.colors.neutral800};
  svg > * {
    fill: ${({theme:h})=>h.colors.neutral600};
  }

  &.active {
    ${({theme:h})=>`
      background-color: ${h.colors.primary100};
      border-right: 2px solid ${h.colors.primary600};
      svg > * {
        fill: ${h.colors.primary700};
      }
      ${o.Z} {
        color: ${h.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,f=(0,e.default)(t.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:h,$active:j})=>j?h.colors.primary600:h.colors.neutral600};
  }
`,x=e.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,E=s.forwardRef(({children:h,icon:j=null,withBullet:v=!1,as:g=l.f,isSubSectionChild:p=!1,...M},O)=>(0,r.jsxs)(c,{as:g,icon:j,background:"neutral100",paddingLeft:p?9:7,paddingBottom:2,paddingTop:2,ref:O,...M,children:[(0,r.jsxs)(d.k,{children:[j?(0,r.jsx)(x,{children:j}):(0,r.jsx)(f,{}),(0,r.jsx)(a.x,{paddingLeft:2,children:(0,r.jsx)(o.Z,{as:"span",children:h})})]}),v&&(0,r.jsx)(a.x,{as:d.k,paddingRight:4,children:(0,r.jsx)(f,{$active:!0})})]}))},20534:(i,u,n)=>{"use strict";n.d(u,{D:()=>j});var r=n(74081),s=n(27279),t=n(72450),e=n(10411),a=n(10701),o=n(93415),d=n(21395);const l=(0,t.default)(a.k)`
  border: none;
  padding: 0;
  background: transparent;
`,c=t.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:v})=>v?"0deg":"180deg"});
`,f=({collapsable:v=!1,label:g,onClick:p=()=>{},ariaExpanded:M,ariaControls:O})=>v?(0,r.jsxs)(l,{as:"button",onClick:p,"aria-expanded":M,"aria-controls":O,textAlign:"left",children:[(0,r.jsx)(o.x,{paddingRight:1,children:(0,r.jsx)(d.Z,{variant:"sigma",textColor:"neutral600",children:g})}),v&&(0,r.jsx)(c,{rotated:M,children:(0,r.jsx)(e.Z,{"aria-hidden":!0})})]}):(0,r.jsx)(l,{children:(0,r.jsx)(o.x,{paddingRight:1,children:(0,r.jsx)(d.Z,{variant:"sigma",textColor:"neutral600",children:g})})});var x=n(74513),E=n(4963);const h=(0,t.default)(o.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:v})=>v.colors.neutral500};
    }
  }
`,j=({collapsable:v=!1,label:g,badgeLabel:p,children:M,id:O})=>{const[P,D]=(0,s.useState)(!0),A=(0,x.M)(O),L=()=>{D(C=>!C)};return(0,r.jsxs)(a.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,r.jsx)(h,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,r.jsxs)(o.x,{position:"relative",paddingRight:p?6:0,children:[(0,r.jsx)(f,{onClick:L,ariaExpanded:P,ariaControls:A,collapsable:v,label:g}),p&&(0,r.jsx)(E.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:p})]})}),(!v||P)&&(0,r.jsx)("ol",{id:A,children:s.Children.map(M,(C,R)=>(0,r.jsx)("li",{children:C},R))})]})}},96220:(i,u,n)=>{"use strict";n.d(u,{Z:()=>a});var r=n(74081),s=n(27279),t=n(93415),e=n(10701);const a=({children:o,spacing:d=2,horizontal:l=!1,...c})=>(0,r.jsx)(t.x,{paddingTop:2,paddingBottom:4,children:(0,r.jsx)(e.k,{as:"ol",gap:d,direction:l?"row":"column",alignItems:l?"center":"stretch",...c,children:s.Children.map(o,(f,x)=>(0,r.jsx)("li",{children:f},x))})})}}]);
