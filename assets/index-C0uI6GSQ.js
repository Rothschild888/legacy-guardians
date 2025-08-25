import{r as ur,g as Vr,a as Zr}from"./vendor-D3F3s8fL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var ut={exports:{}},_e={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ft;function Xr(){if(Ft)return _e;Ft=1;var e=ur(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(u,p,h){var d,f={},y=null,m=null;h!==void 0&&(y=""+h),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(m=p.ref);for(d in p)n.call(p,d)&&!i.hasOwnProperty(d)&&(f[d]=p[d]);if(u&&u.defaultProps)for(d in p=u.defaultProps,p)f[d]===void 0&&(f[d]=p[d]);return{$$typeof:t,type:u,key:y,ref:m,props:f,_owner:o.current}}return _e.Fragment=r,_e.jsx=c,_e.jsxs=c,_e}var Lt;function en(){return Lt||(Lt=1,ut.exports=Xr()),ut.exports}var s=en(),b=ur();const L=Vr(b);var qe={},Wt;function tn(){if(Wt)return qe;Wt=1;var e=Zr();return qe.createRoot=e.createRoot,qe.hydrateRoot=e.hydrateRoot,qe}var rn=tn(),T=function(){return T=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},T.apply(this,arguments)};function De(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var E="-ms-",Me="-moz-",C="-webkit-",hr="comm",nt="rule",Et="decl",nn="@import",fr="@keyframes",on="@layer",mr=Math.abs,Ot=String.fromCharCode,wt=Object.assign;function sn(e,t){return P(e,0)^45?(((t<<2^P(e,0))<<2^P(e,1))<<2^P(e,2))<<2^P(e,3):0}function gr(e){return e.trim()}function pe(e,t){return(e=t.exec(e))?e[0]:e}function x(e,t,r){return e.replace(t,r)}function Ue(e,t,r){return e.indexOf(t,r)}function P(e,t){return e.charCodeAt(t)|0}function Ae(e,t,r){return e.slice(t,r)}function oe(e){return e.length}function yr(e){return e.length}function Te(e,t){return t.push(e),e}function an(e,t){return e.map(t).join("")}function qt(e,t){return e.filter(function(r){return!pe(r,t)})}var ot=1,Re=1,xr=0,V=0,N=0,Oe="";function st(e,t,r,n,o,i,c,u){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:ot,column:Re,length:c,return:"",siblings:u}}function he(e,t){return wt(st("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ce(e){for(;e.root;)e=he(e.root,{children:[e]});Te(e,e.siblings)}function cn(){return N}function ln(){return N=V>0?P(Oe,--V):0,Re--,N===10&&(Re=1,ot--),N}function ee(){return N=V<xr?P(Oe,V++):0,Re++,N===10&&(Re=1,ot++),N}function ve(){return P(Oe,V)}function Je(){return V}function it(e,t){return Ae(Oe,e,t)}function $t(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function dn(e){return ot=Re=1,xr=oe(Oe=e),V=0,[]}function pn(e){return Oe="",e}function ht(e){return gr(it(V-1,St(e===91?e+2:e===40?e+1:e)))}function un(e){for(;(N=ve())&&N<33;)ee();return $t(e)>2||$t(N)>3?"":" "}function hn(e,t){for(;--t&&ee()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return it(e,Je()+(t<6&&ve()==32&&ee()==32))}function St(e){for(;ee();)switch(N){case e:return V;case 34:case 39:e!==34&&e!==39&&St(N);break;case 40:e===41&&St(e);break;case 92:ee();break}return V}function fn(e,t){for(;ee()&&e+N!==57;)if(e+N===84&&ve()===47)break;return"/*"+it(t,V-1)+"*"+Ot(e===47?e:ee())}function mn(e){for(;!$t(ve());)ee();return it(e,V)}function gn(e){return pn(Ke("",null,null,null,[""],e=dn(e),0,[0],e))}function Ke(e,t,r,n,o,i,c,u,p){for(var h=0,d=0,f=c,y=0,m=0,S=0,$=1,_=1,I=1,v=0,j="",k=o,R=i,w=n,g=j;_;)switch(S=v,v=ee()){case 40:if(S!=108&&P(g,f-1)==58){Ue(g+=x(ht(v),"&","&\f"),"&\f",mr(h?u[h-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:g+=ht(v);break;case 9:case 10:case 13:case 32:g+=un(S);break;case 92:g+=hn(Je()-1,7);continue;case 47:switch(ve()){case 42:case 47:Te(yn(fn(ee(),Je()),t,r,p),p);break;default:g+="/"}break;case 123*$:u[h++]=oe(g)*I;case 125*$:case 59:case 0:switch(v){case 0:case 125:_=0;case 59+d:I==-1&&(g=x(g,/\f/g,"")),m>0&&oe(g)-f&&Te(m>32?Qt(g+";",n,r,f-1,p):Qt(x(g," ","")+";",n,r,f-2,p),p);break;case 59:g+=";";default:if(Te(w=Yt(g,t,r,h,d,o,u,j,k=[],R=[],f,i),i),v===123)if(d===0)Ke(g,t,w,w,k,i,f,u,R);else switch(y===99&&P(g,3)===110?100:y){case 100:case 108:case 109:case 115:Ke(e,w,w,n&&Te(Yt(e,w,w,0,0,o,u,j,o,k=[],f,R),R),o,R,f,u,n?k:R);break;default:Ke(g,w,w,w,[""],R,0,u,R)}}h=d=m=0,$=I=1,j=g="",f=c;break;case 58:f=1+oe(g),m=S;default:if($<1){if(v==123)--$;else if(v==125&&$++==0&&ln()==125)continue}switch(g+=Ot(v),v*$){case 38:I=d>0?1:(g+="\f",-1);break;case 44:u[h++]=(oe(g)-1)*I,I=1;break;case 64:ve()===45&&(g+=ht(ee())),y=ve(),d=f=oe(j=g+=mn(Je())),v++;break;case 45:S===45&&oe(g)==2&&($=0)}}return i}function Yt(e,t,r,n,o,i,c,u,p,h,d,f){for(var y=o-1,m=o===0?i:[""],S=yr(m),$=0,_=0,I=0;$<n;++$)for(var v=0,j=Ae(e,y+1,y=mr(_=c[$])),k=e;v<S;++v)(k=gr(_>0?m[v]+" "+j:x(j,/&\f/g,m[v])))&&(p[I++]=k);return st(e,t,r,o===0?nt:u,p,h,d,f)}function yn(e,t,r,n){return st(e,t,r,hr,Ot(cn()),Ae(e,2,-2),0,n)}function Qt(e,t,r,n,o){return st(e,t,r,Et,Ae(e,0,n),Ae(e,n+1,-1),n,o)}function br(e,t,r){switch(sn(e,t)){case 5103:return C+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return C+e+e;case 4789:return Me+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return C+e+Me+e+E+e+e;case 5936:switch(P(e,t+11)){case 114:return C+e+E+x(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return C+e+E+x(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return C+e+E+x(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return C+e+E+e+e;case 6165:return C+e+E+"flex-"+e+e;case 5187:return C+e+x(e,/(\w+).+(:[^]+)/,C+"box-$1$2"+E+"flex-$1$2")+e;case 5443:return C+e+E+"flex-item-"+x(e,/flex-|-self/g,"")+(pe(e,/flex-|baseline/)?"":E+"grid-row-"+x(e,/flex-|-self/g,""))+e;case 4675:return C+e+E+"flex-line-pack"+x(e,/align-content|flex-|-self/g,"")+e;case 5548:return C+e+E+x(e,"shrink","negative")+e;case 5292:return C+e+E+x(e,"basis","preferred-size")+e;case 6060:return C+"box-"+x(e,"-grow","")+C+e+E+x(e,"grow","positive")+e;case 4554:return C+x(e,/([^-])(transform)/g,"$1"+C+"$2")+e;case 6187:return x(x(x(e,/(zoom-|grab)/,C+"$1"),/(image-set)/,C+"$1"),e,"")+e;case 5495:case 3959:return x(e,/(image-set\([^]*)/,C+"$1$`$1");case 4968:return x(x(e,/(.+:)(flex-)?(.*)/,C+"box-pack:$3"+E+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+C+e+e;case 4200:if(!pe(e,/flex-|baseline/))return E+"grid-column-align"+Ae(e,t)+e;break;case 2592:case 3360:return E+x(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,pe(n.props,/grid-\w+-end/)})?~Ue(e+(r=r[t].value),"span",0)?e:E+x(e,"-start","")+e+E+"grid-row-span:"+(~Ue(r,"span",0)?pe(r,/\d+/):+pe(r,/\d+/)-+pe(e,/\d+/))+";":E+x(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return pe(n.props,/grid-\w+-start/)})?e:E+x(x(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return x(e,/(.+)-inline(.+)/,C+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(oe(e)-1-t>6)switch(P(e,t+1)){case 109:if(P(e,t+4)!==45)break;case 102:return x(e,/(.+:)(.+)-([^]+)/,"$1"+C+"$2-$3$1"+Me+(P(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ue(e,"stretch",0)?br(x(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return x(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,c,u,p,h){return E+o+":"+i+h+(c?E+o+"-span:"+(u?p:+p-+i)+h:"")+e});case 4949:if(P(e,t+6)===121)return x(e,":",":"+C)+e;break;case 6444:switch(P(e,P(e,14)===45?18:11)){case 120:return x(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+C+(P(e,14)===45?"inline-":"")+"box$3$1"+C+"$2$3$1"+E+"$2box$3")+e;case 100:return x(e,":",":"+E)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return x(e,"scroll-","scroll-snap-")+e}return e}function Xe(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function xn(e,t,r,n){switch(e.type){case on:if(e.children.length)break;case nn:case Et:return e.return=e.return||e.value;case hr:return"";case fr:return e.return=e.value+"{"+Xe(e.children,n)+"}";case nt:if(!oe(e.value=e.props.join(",")))return""}return oe(r=Xe(e.children,n))?e.return=e.value+"{"+r+"}":""}function bn(e){var t=yr(e);return function(r,n,o,i){for(var c="",u=0;u<t;u++)c+=e[u](r,n,o,i)||"";return c}}function vn(e){return function(t){t.root||(t=t.return)&&e(t)}}function wn(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Et:e.return=br(e.value,e.length,r);return;case fr:return Xe([he(e,{value:x(e.value,"@","@"+C)})],n);case nt:if(e.length)return an(r=e.props,function(o){switch(pe(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ce(he(e,{props:[x(o,/:(read-\w+)/,":"+Me+"$1")]})),Ce(he(e,{props:[o]})),wt(e,{props:qt(r,n)});break;case"::placeholder":Ce(he(e,{props:[x(o,/:(plac\w+)/,":"+C+"input-$1")]})),Ce(he(e,{props:[x(o,/:(plac\w+)/,":"+Me+"$1")]})),Ce(he(e,{props:[x(o,/:(plac\w+)/,E+"input-$1")]})),Ce(he(e,{props:[o]})),wt(e,{props:qt(r,n)});break}return""})}}var $n={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Q={},Ie=typeof process<"u"&&Q!==void 0&&(Q.REACT_APP_SC_ATTR||Q.SC_ATTR)||"data-styled",vr="active",wr="data-styled-version",at="6.1.19",Nt=`/*!sc*/
`,et=typeof window<"u"&&typeof document<"u",Sn=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Q!==void 0&&Q.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Q.REACT_APP_SC_DISABLE_SPEEDY!==""?Q.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Q.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Q!==void 0&&Q.SC_DISABLE_SPEEDY!==void 0&&Q.SC_DISABLE_SPEEDY!==""&&Q.SC_DISABLE_SPEEDY!=="false"&&Q.SC_DISABLE_SPEEDY),jn={},ct=Object.freeze([]),Ee=Object.freeze({});function $r(e,t,r){return r===void 0&&(r=Ee),e.theme!==r.theme&&e.theme||t||r.theme}var Sr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Cn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kn=/(^-|-$)/g;function Ht(e){return e.replace(Cn,"-").replace(kn,"")}var An=/(a)(d)/gi,Ye=52,Ut=function(e){return String.fromCharCode(e+(e>25?39:97))};function jt(e){var t,r="";for(t=Math.abs(e);t>Ye;t=t/Ye|0)r=Ut(t%Ye)+r;return(Ut(t%Ye)+r).replace(An,"$1-$2")}var ft,jr=5381,ke=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Cr=function(e){return ke(jr,e)};function kr(e){return jt(Cr(e)>>>0)}function Rn(e){return e.displayName||e.name||"Component"}function mt(e){return typeof e=="string"&&!0}var Ar=typeof Symbol=="function"&&Symbol.for,Rr=Ar?Symbol.for("react.memo"):60115,In=Ar?Symbol.for("react.forward_ref"):60112,En={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},On={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ir={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Nn=((ft={})[In]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ft[Rr]=Ir,ft);function Jt(e){return("type"in(t=e)&&t.type.$$typeof)===Rr?Ir:"$$typeof"in e?Nn[e.$$typeof]:En;var t}var _n=Object.defineProperty,zn=Object.getOwnPropertyNames,Kt=Object.getOwnPropertySymbols,Pn=Object.getOwnPropertyDescriptor,Tn=Object.getPrototypeOf,Vt=Object.prototype;function Er(e,t,r){if(typeof t!="string"){if(Vt){var n=Tn(t);n&&n!==Vt&&Er(e,n,r)}var o=zn(t);Kt&&(o=o.concat(Kt(t)));for(var i=Jt(e),c=Jt(t),u=0;u<o.length;++u){var p=o[u];if(!(p in On||r&&r[p]||c&&p in c||i&&p in i)){var h=Pn(t,p);try{_n(e,p,h)}catch{}}}}return e}function we(e){return typeof e=="function"}function _t(e){return typeof e=="object"&&"styledComponentId"in e}function be(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ct(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Be(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function kt(e,t,r){if(r===void 0&&(r=!1),!r&&!Be(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=kt(e[n],t[n]);else if(Be(t))for(var n in t)e[n]=kt(e[n],t[n]);return e}function zt(e,t){Object.defineProperty(e,"toString",{value:t})}function $e(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Mn=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw $e(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var c=o;c<i;c++)this.groupSizes[c]=0}for(var u=this.indexOfGroup(t+1),p=(c=0,r.length);c<p;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[t]++,u++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,c=o;c<i;c++)r+="".concat(this.tag.getRule(c)).concat(Nt);return r},e})(),Ve=new Map,tt=new Map,Ze=1,Qe=function(e){if(Ve.has(e))return Ve.get(e);for(;tt.has(Ze);)Ze++;var t=Ze++;return Ve.set(e,t),tt.set(t,e),t},Dn=function(e,t){Ze=t+1,Ve.set(e,t),tt.set(t,e)},Bn="style[".concat(Ie,"][").concat(wr,'="').concat(at,'"]'),Gn=new RegExp("^".concat(Ie,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Fn=function(e,t,r){for(var n,o=r.split(","),i=0,c=o.length;i<c;i++)(n=o[i])&&e.registerName(t,n)},Ln=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Nt),o=[],i=0,c=n.length;i<c;i++){var u=n[i].trim();if(u){var p=u.match(Gn);if(p){var h=0|parseInt(p[1],10),d=p[2];h!==0&&(Dn(d,h),Fn(e,d,p[3]),e.getTag().insertRules(h,o)),o.length=0}else o.push(u)}}},Zt=function(e){for(var t=document.querySelectorAll(Bn),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(Ie)!==vr&&(Ln(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Wn(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Or=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=(function(u){var p=Array.from(u.querySelectorAll("style[".concat(Ie,"]")));return p[p.length-1]})(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(Ie,vr),n.setAttribute(wr,at);var c=Wn();return c&&n.setAttribute("nonce",c),r.insertBefore(n,i),n},qn=(function(){function e(t){this.element=Or(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var c=n[o];if(c.ownerNode===r)return c}throw $e(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e})(),Yn=(function(){function e(t){this.element=Or(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),Qn=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),Xt=et,Hn={isServer:!et,useCSSOMInjection:!Sn},rt=(function(){function e(t,r,n){t===void 0&&(t=Ee),r===void 0&&(r={});var o=this;this.options=T(T({},Hn),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&et&&Xt&&(Xt=!1,Zt(this)),zt(this,function(){return(function(i){for(var c=i.getTag(),u=c.length,p="",h=function(f){var y=(function(I){return tt.get(I)})(f);if(y===void 0)return"continue";var m=i.names.get(y),S=c.getGroup(f);if(m===void 0||!m.size||S.length===0)return"continue";var $="".concat(Ie,".g").concat(f,'[id="').concat(y,'"]'),_="";m!==void 0&&m.forEach(function(I){I.length>0&&(_+="".concat(I,","))}),p+="".concat(S).concat($,'{content:"').concat(_,'"}').concat(Nt)},d=0;d<u;d++)h(d);return p})(o)})}return e.registerId=function(t){return Qe(t)},e.prototype.rehydrate=function(){!this.server&&et&&Zt(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(T(T({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new Qn(o):n?new qn(o):new Yn(o)})(this.options),new Mn(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Qe(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Qe(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Qe(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),Un=/&/g,Jn=/^\s*\/\/.*$/gm;function Nr(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Nr(r.children,t)),r})}function Kn(e){var t,r,n,o=Ee,i=o.options,c=i===void 0?Ee:i,u=o.plugins,p=u===void 0?ct:u,h=function(y,m,S){return S.startsWith(r)&&S.endsWith(r)&&S.replaceAll(r,"").length>0?".".concat(t):y},d=p.slice();d.push(function(y){y.type===nt&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(Un,r).replace(n,h))}),c.prefix&&d.push(wn),d.push(xn);var f=function(y,m,S,$){m===void 0&&(m=""),S===void 0&&(S=""),$===void 0&&($="&"),t=$,r=m,n=new RegExp("\\".concat(r,"\\b"),"g");var _=y.replace(Jn,""),I=gn(S||m?"".concat(S," ").concat(m," { ").concat(_," }"):_);c.namespace&&(I=Nr(I,c.namespace));var v=[];return Xe(I,bn(d.concat(vn(function(j){return v.push(j)})))),v};return f.hash=p.length?p.reduce(function(y,m){return m.name||$e(15),ke(y,m.name)},jr).toString():"",f}var Vn=new rt,At=Kn(),_r=L.createContext({shouldForwardProp:void 0,styleSheet:Vn,stylis:At});_r.Consumer;L.createContext(void 0);function Rt(){return b.useContext(_r)}var Zn=(function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=At);var c=n.name+i.hash;o.hasNameForId(n.id,c)||o.insertRules(n.id,c,i(n.rules,c,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,zt(this,function(){throw $e(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=At),this.name+t.hash},e})(),Xn=function(e){return e>="A"&&e<="Z"};function er(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Xn(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var zr=function(e){return e==null||e===!1||e===""},Pr=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!zr(i)&&(Array.isArray(i)&&i.isCss||we(i)?n.push("".concat(er(o),":"),i,";"):Be(i)?n.push.apply(n,De(De(["".concat(o," {")],Pr(i),!1),["}"],!1)):n.push("".concat(er(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in $n||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function fe(e,t,r,n){if(zr(e))return[];if(_t(e))return[".".concat(e.styledComponentId)];if(we(e)){if(!we(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return fe(o,t,r,n)}var i;return e instanceof Zn?r?(e.inject(r,n),[e.getName(n)]):[e]:Be(e)?Pr(e):Array.isArray(e)?Array.prototype.concat.apply(ct,e.map(function(c){return fe(c,t,r,n)})):[e.toString()]}function Tr(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(we(r)&&!_t(r))return!1}return!0}var eo=Cr(at),to=(function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Tr(t),this.componentId=r,this.baseHash=ke(eo,r),this.baseStyle=n,rt.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=be(o,this.staticRulesId);else{var i=Ct(fe(this.rules,t,r,n)),c=jt(ke(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,c)){var u=n(i,".".concat(c),void 0,this.componentId);r.insertRules(this.componentId,c,u)}o=be(o,c),this.staticRulesId=c}else{for(var p=ke(this.baseHash,n.hash),h="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")h+=f;else if(f){var y=Ct(fe(f,t,r,n));p=ke(p,y+d),h+=y}}if(h){var m=jt(p>>>0);r.hasNameForId(this.componentId,m)||r.insertRules(this.componentId,m,n(h,".".concat(m),void 0,this.componentId)),o=be(o,m)}}return o},e})(),Ge=L.createContext(void 0);Ge.Consumer;function ro(e){var t=L.useContext(Ge),r=b.useMemo(function(){return(function(n,o){if(!n)throw $e(14);if(we(n)){var i=n(o);return i}if(Array.isArray(n)||typeof n!="object")throw $e(8);return o?T(T({},o),n):n})(e.theme,t)},[e.theme,t]);return e.children?L.createElement(Ge.Provider,{value:r},e.children):null}var gt={};function no(e,t,r){var n=_t(e),o=e,i=!mt(e),c=t.attrs,u=c===void 0?ct:c,p=t.componentId,h=p===void 0?(function(k,R){var w=typeof k!="string"?"sc":Ht(k);gt[w]=(gt[w]||0)+1;var g="".concat(w,"-").concat(kr(at+w+gt[w]));return R?"".concat(R,"-").concat(g):g})(t.displayName,t.parentComponentId):p,d=t.displayName,f=d===void 0?(function(k){return mt(k)?"styled.".concat(k):"Styled(".concat(Rn(k),")")})(e):d,y=t.displayName&&t.componentId?"".concat(Ht(t.displayName),"-").concat(t.componentId):t.componentId||h,m=n&&o.attrs?o.attrs.concat(u).filter(Boolean):u,S=t.shouldForwardProp;if(n&&o.shouldForwardProp){var $=o.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;S=function(k,R){return $(k,R)&&_(k,R)}}else S=$}var I=new to(r,y,n?o.componentStyle:void 0);function v(k,R){return(function(w,g,H){var te=w.attrs,Se=w.componentStyle,me=w.defaultProps,ge=w.foldedComponentIds,se=w.styledComponentId,ye=w.target,ie=L.useContext(Ge),Z=Rt(),A=w.shouldForwardProp||Z.shouldForwardProp,re=$r(g,ie,me)||Ee,W=(function(D,J,X){for(var ce,q=T(T({},J),{className:void 0,theme:X}),G=0;G<D.length;G+=1){var K=we(ce=D[G])?ce(q):ce;for(var F in K)q[F]=F==="className"?be(q[F],K[F]):F==="style"?T(T({},q[F]),K[F]):K[F]}return J.className&&(q.className=be(q.className,J.className)),q})(te,g,re),B=W.as||ye,U={};for(var M in W)W[M]===void 0||M[0]==="$"||M==="as"||M==="theme"&&W.theme===re||(M==="forwardedAs"?U.as=W.forwardedAs:A&&!A(M,B)||(U[M]=W[M]));var ae=(function(D,J){var X=Rt(),ce=D.generateAndInjectStyles(J,X.styleSheet,X.stylis);return ce})(Se,W),ne=be(ge,se);return ae&&(ne+=" "+ae),W.className&&(ne+=" "+W.className),U[mt(B)&&!Sr.has(B)?"class":"className"]=ne,H&&(U.ref=H),b.createElement(B,U)})(j,k,R)}v.displayName=f;var j=L.forwardRef(v);return j.attrs=m,j.componentStyle=I,j.displayName=f,j.shouldForwardProp=S,j.foldedComponentIds=n?be(o.foldedComponentIds,o.styledComponentId):"",j.styledComponentId=y,j.target=n?o.target:e,Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=n?(function(R){for(var w=[],g=1;g<arguments.length;g++)w[g-1]=arguments[g];for(var H=0,te=w;H<te.length;H++)kt(R,te[H],!0);return R})({},o.defaultProps,k):k}}),zt(j,function(){return".".concat(j.styledComponentId)}),i&&Er(j,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}function tr(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var rr=function(e){return Object.assign(e,{isCss:!0})};function Mr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(we(e)||Be(e))return rr(fe(tr(ct,De([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?fe(n):rr(fe(tr(n,t)))}function It(e,t,r){if(r===void 0&&(r=Ee),!t)throw $e(1,t);var n=function(o){for(var i=[],c=1;c<arguments.length;c++)i[c-1]=arguments[c];return e(t,r,Mr.apply(void 0,De([o],i,!1)))};return n.attrs=function(o){return It(e,t,T(T({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return It(e,t,T(T({},r),o))},n}var Dr=function(e){return It(no,e)},l=Dr;Sr.forEach(function(e){l[e]=Dr(e)});var oo=(function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Tr(t),rt.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(Ct(fe(this.rules,r,n,o)),""),c=this.componentId+t;n.insertRules(c,c,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&rt.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e})();function so(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Mr.apply(void 0,De([e],t,!1)),o="sc-global-".concat(kr(JSON.stringify(n))),i=new oo(n,o),c=function(p){var h=Rt(),d=L.useContext(Ge),f=L.useRef(h.styleSheet.allocateGSInstance(o)).current;return h.styleSheet.server&&u(f,p,h.styleSheet,d,h.stylis),L.useLayoutEffect(function(){if(!h.styleSheet.server)return u(f,p,h.styleSheet,d,h.stylis),function(){return i.removeStyles(f,h.styleSheet)}},[f,p,h.styleSheet,d,h.stylis]),null};function u(p,h,d,f,y){if(i.isStatic)i.renderStyles(p,jn,d,y);else{var m=T(T({},h),{theme:$r(h,f,c.defaultProps)});i.renderStyles(p,m,d,y)}}return L.memo(c)}const a={colors:{cyber:{primary:"#00fff7",secondary:"#ff00cc",accent:"#e67e22",bg:"#1a1a2e",bgLight:"#16213e",text:"#fff",gray:"#888",dark:"#222",success:"#27ae60",error:"#e74c3c"},classic:{primary:"#34495e",secondary:"#e67e22",accent:"#27ae60",bg:"#fff",text:"#222"},meme:{primary:"#f6d365",secondary:"#e67e22",accent:"#ff00cc",bg:"#f6d365",text:"#e67e22"}},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"3rem",xxxl:"4rem"},borderRadius:{sm:"0.25rem",md:"0.5rem",lg:"1rem",xl:"1.5rem",full:"50%"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1)",cyber:"0 0 20px rgba(0, 255, 247, 0.3)",cyberStrong:"0 0 30px rgba(0, 255, 247, 0.6)"},transitions:{fast:"0.15s ease-in-out",normal:"0.3s ease-in-out",slow:"0.5s ease-in-out"},breakpoints:{mobile:"480px",tablet:"768px",desktop:"1024px",wide:"1280px"}},io=so`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: ${a.colors.cyber.bg};
    color: ${a.colors.cyber.text};
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* 滚动条样式 */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${a.colors.cyber.bgLight};
  }

  ::-webkit-scrollbar-thumb {
    background: ${a.colors.cyber.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${a.colors.cyber.secondary};
  }

  /* 选择文本样式 */
  ::selection {
    background-color: ${a.colors.cyber.primary};
    color: ${a.colors.cyber.dark};
  }

  /* 焦点样式 */
  :focus {
    outline: 2px solid ${a.colors.cyber.primary};
    outline-offset: 2px;
  }

  /* 按钮重置 */
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  /* 输入框重置 */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  /* 链接样式 */
  a {
    color: ${a.colors.cyber.primary};
    text-decoration: none;
    transition: color ${a.transitions.fast};
  }

  a:hover {
    color: ${a.colors.cyber.secondary};
  }
`,ao=l.button`
  position: fixed;
  top: 32px;
  right: 32px;
  z-index: 1000;
  background: ${a.colors.meme.primary};
  color: ${a.colors.meme.text};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 28px;
  font-weight: 900;
  box-shadow: 0 0 16px ${a.colors.meme.primary}cc;
  border: none;
  cursor: pointer;
  transition: all ${a.transitions.normal};

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px ${a.colors.meme.primary};
  }
`,co=l.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({$theme:e})=>e==="cyberpunk"?a.colors.cyber.bg:e==="classic"?a.colors.classic.bg:a.colors.meme.primary};
  border-bottom: 2px solid ${a.colors.cyber.primary};
  padding: 0.8rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`,lo=l.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,po=l.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 8px ${a.colors.cyber.accent};
`,uo=l.span`
  font-weight: 700;
  font-size: 1.1rem;
  color: ${({$theme:e})=>e==="cyberpunk"?a.colors.cyber.primary:e==="classic"?a.colors.classic.text:a.colors.meme.accent};
`,Pt=l.div`
  font-weight: 700;
  font-size: 1.1rem;
  color: ${a.colors.cyber.primary};
`,ho=l(Pt)`
  color: ${a.colors.cyber.secondary};
`,fo=l(Pt)`
  color: ${a.colors.cyber.text};
`,mo=l.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,nr=l.span`
  background: ${({$type:e})=>e==="coins"?a.colors.meme.primary:a.colors.cyber.secondary};
  color: ${({$type:e})=>e==="coins"?a.colors.meme.text:a.colors.cyber.text};
  border-radius: 8px;
  padding: 0.3em 1em;
  font-weight: 700;
  transition: transform ${a.transitions.fast};

  &:hover {
    transform: scale(1.05);
  }
`,go=({companyName:e,avatar:t,badges:r,day:n,coins:o,gems:i,theme:c,onEditCompany:u})=>s.jsxs(s.Fragment,{children:[s.jsx(ao,{onClick:u,title:"编辑公司信息",children:"⚙️"}),s.jsxs(co,{$theme:c,children:[s.jsxs(lo,{children:[s.jsx(po,{src:t,alt:"avatar"}),s.jsx(uo,{$theme:c,children:e})]}),s.jsxs(Pt,{children:["守护者之星：",r.length,"/5"]}),s.jsx(ho,{children:"财富目标：300%"}),s.jsxs(fo,{children:["第 ",n+1," 天"]}),s.jsxs(mo,{children:[s.jsxs(nr,{$type:"coins",children:["💰 ",o]}),s.jsxs(nr,{$type:"gems",children:["💎 ",i]})]})]})]}),yo=l.div`
  flex: 0.7;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background: rgba(30,30,60,0.95);
  border-radius: 12px;
  box-shadow: 0 0 16px ${a.colors.cyber.secondary}55;
  padding: 1rem;
`,or=l.div`
  /* 基础样式 */
`,sr=l.h2`
  color: ${({$color:e})=>e};
  font-size: 1.1rem;
  margin-bottom: 8px;
`,xo=l.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,bo=l.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  box-shadow: 0 0 8px ${a.colors.cyber.primary};
`,vo=l.span`
  color: ${a.colors.cyber.text};
  font-weight: 700;
`,wo=l.div`
  color: ${a.colors.cyber.text};
  font-size: 0.95rem;
  margin-top: 8px;
`,$o=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,So=l.span`
  cursor: pointer;
  transition: transform ${a.transitions.fast};

  &:hover {
    transform: scale(1.05);
  }
`,jo=({aiPartnerData:e,badgesData:t,badges:r,history:n,onBadgeClick:o})=>s.jsxs(yo,{children:[s.jsxs(or,{children:[s.jsx(sr,{$color:a.colors.cyber.primary,children:"AI 伙伴"}),s.jsxs(xo,{children:[s.jsx(bo,{src:e.avatar,alt:"AI Partner"}),s.jsx(vo,{children:e.name})]}),s.jsx(wo,{children:n.length===0?"欢迎来到空岛守护者，分散配置，理性投资！":n[n.length-1].returns<0?e.feedbackTemplates[4]:r.length>0?e.feedbackTemplates[5].replace("{badge}",r[r.length-1]):e.feedbackTemplates[0].replace("{asset}","资产").replace("{percent}","分散")})]}),s.jsxs(or,{children:[s.jsx(sr,{$color:a.colors.cyber.accent,children:"成就徽章"}),s.jsx($o,{children:t.map(i=>s.jsxs(So,{className:`legacy-badge${r.includes(i.name.replace("徽章",""))?"":" locked"}`,title:i.desc,onClick:()=>o(i),children:[i.name," ",r.includes(i.name.replace("徽章",""))?"✔️":""]},i.key))})]})]}),Co=l.div`
  flex: 1.2;
  min-width: 340px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,ko=l.div`
  display: flex;
  gap: 1.2rem;
`,ir=l.div`
  flex: 1;
`,Ao=l.div`
  font-weight: 600;
  margin-bottom: 4px;
`,Ro=l.div`
  margin-bottom: 4px;
`,Io=l.div`
  color: ${a.colors.cyber.gray};
  font-size: 0.95rem;
`,Eo=l.div`
  position: relative;
`,Oo=l.strong`
  display: block;
  margin-bottom: 4px;
`,No=l.div`
  margin-bottom: 8px;
`,_o=l.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`,ar=l.img`
  width: 100%;
  height: 100%;
  opacity: 0.15;
  object-fit: cover;
`,zo=l.div`
  margin-top: 12px;
`,Po=l.button`
  margin-right: 8px;
`,To=l.div`
  color: ${a.colors.cyber.gray};
`,Mo=l.div`
  /* 继承 legacy-card 样式 */
`,Do=l.div`
  display: flex;
  gap: 1.2rem;
`,Bo=l.div`
  flex: 1;
  background: ${({$theme:e})=>e==="forest"?"rgba(0,255,247,0.10)":e==="snow"?"rgba(0,234,255,0.10)":e==="volcano"?"rgba(255,111,0,0.10)":"rgba(255,0,204,0.10)"};
  border-radius: 12px;
  padding: 1rem;
  position: relative;
  box-shadow: 0 2px 8px ${a.colors.cyber.primary}33;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,Go=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`,Fo=l.span`
  font-size: 2rem;
  margin-right: 12px;
`,Lo=l.label`
  font-weight: 700;
  font-size: 1.1rem;
  flex: 1;
`,Wo=l.input`
  margin-bottom: 8px;
`,qo=l.div`
  height: 10px;
  border-radius: 5px;
  background: ${a.colors.cyber.dark};
  margin: 8px 0;
  box-shadow: 0 0 4px ${a.colors.cyber.secondary}99;
  overflow: hidden;
`,Yo=l.div`
  width: ${({$width:e})=>Math.min(e,100)}%;
  height: 100%;
  border-radius: 5px;
  background: ${({$isHighRisk:e})=>e?a.colors.cyber.secondary:a.colors.cyber.primary};
  transition: width 0.3s;
`,Qo=l.div`
  height: 36px;
  width: 100%;
  background: linear-gradient(90deg, #222, #444);
  border-radius: 6px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${a.colors.cyber.primary};
  font-size: 12px;
  cursor: pointer;
  box-shadow: 0 0 6px ${a.colors.cyber.primary}99;
  transition: all ${a.transitions.fast};
  text-align: center;
  white-space: nowrap;

  &:hover {
    box-shadow: 0 0 8px ${a.colors.cyber.primary};
    transform: translateY(-1px);
  }
`,Ho=l.div`
  margin-top: 8px;
  color: ${a.colors.cyber.gray};
`,Uo=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Jo=l.div`
  /* 基础样式 */
`,Ko=l.h2`
  font-size: 1.1rem;
  color: ${a.colors.classic.primary};
`,Vo=l.div`
  font-weight: 600;
  font-size: 1.2rem;
`,Zo=l.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,cr=l.button`
  margin-top: 0;
`,Xo=({task:e,event:t,artifactsData:r,weights:n,returns:o,onWeightChange:i,onNextDay:c,onResetGame:u,onShowModal:p})=>{const h=(d,f)=>{Object.entries(n).reduce((m,[S,$])=>S===d?m+f:m+$,0)<=100&&i(d,f)};return s.jsxs(Co,{children:[s.jsxs(ko,{children:[s.jsxs(ir,{className:"legacy-card",children:[s.jsx("h2",{className:"legacy-task",children:"任务卡"}),s.jsx(Ao,{children:e?.title||"暂无任务"}),s.jsx(Ro,{children:e?.background||""}),s.jsx(Io,{children:e?.tip||""})]}),s.jsxs(ir,{className:"legacy-card",children:[s.jsx("h2",{className:"legacy-event",children:"市场事件"}),t?s.jsxs(Eo,{children:[s.jsx(Oo,{children:t.name}),s.jsx(No,{children:t.description}),s.jsxs(_o,{children:[t.name.includes("风暴")&&s.jsx(ar,{src:"https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",alt:"storm"}),t.name.includes("牛市")&&s.jsx(ar,{src:"https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",alt:"bull"})]}),t.choices&&Array.isArray(t.choices)&&s.jsx(zo,{children:t.choices.map(d=>s.jsx(Po,{className:"legacy-btn",onClick:c,children:d},d))})]}):s.jsx(To,{children:"暂无事件"})]})]}),s.jsxs(Mo,{className:"legacy-card",children:[s.jsx("h2",{className:"legacy-progress",children:"资产分配"}),s.jsx(Do,{children:r.map(d=>s.jsxs(Bo,{$theme:d.theme,children:[s.jsxs(Go,{children:[s.jsx(Fo,{children:d.icon}),s.jsxs(Lo,{children:[d.name,": ",s.jsxs("strong",{children:[n[d.key]||0,"%"]})]})]}),s.jsx(Wo,{type:"range",min:0,max:100,value:n[d.key]||0,onChange:f=>h(d.key,Number(f.target.value)),className:"legacy-slider"}),s.jsx(qo,{children:s.jsx(Yo,{$width:n[d.key]||0,$isHighRisk:(n[d.key]||0)>60})}),s.jsx(Qo,{title:`点击查看${d.name}详情`,onClick:()=>{p(`${d.name}（${d.icon}）

权重: ${n[d.key]||0}%

此资产代表：${d.theme==="forest"?"科技股":d.theme==="snow"?"债券":d.theme==="volcano"?"商品":"加密货币"}

风险提示: ${(n[d.key]||0)>60?"集中风险":"分散配置"}`)},children:"点击查看 Mini Chart"})]},d.key))}),s.jsxs(Ho,{children:["总分配: ",s.jsxs("strong",{children:[Object.values(n).reduce((d,f)=>d+f,0),"%"]})]})]}),s.jsxs(Uo,{className:"legacy-card",children:[s.jsxs(Jo,{children:[s.jsx(Ko,{children:"当日收益"}),s.jsx(Vo,{children:o!==null?`${o}%`:'请点击"下一天"模拟收益'})]}),s.jsxs(Zo,{children:[s.jsx(cr,{className:"legacy-btn",onClick:c,children:"下一天"}),s.jsx(cr,{className:"legacy-btn legacy-reset",onClick:u,children:"重置游戏"})]})]})]})},lr=l.button`
  position: fixed;
  bottom: ${({$type:e})=>e==="wheel"?"110px":"32px"};
  right: 32px;
  z-index: 1000;
  background: ${({$type:e})=>e==="wheel"?a.colors.cyber.secondary:a.colors.cyber.primary};
  color: ${({$type:e})=>e==="wheel"?a.colors.cyber.text:a.colors.cyber.dark};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 28px;
  font-weight: 900;
  box-shadow: 0 0 16px ${({$type:e})=>e==="wheel"?`${a.colors.cyber.secondary}bb`:`${a.colors.cyber.primary}cc`};
  border: none;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.5:1};
  transition: all ${a.transitions.normal};

  &:hover:not(:disabled) {
    transform: scale(1.1);
    box-shadow: 0 0 20px ${({$type:e})=>e==="wheel"?a.colors.cyber.secondary:a.colors.cyber.primary};
  }
`,es=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.7);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`,ts=l.div`
  background: ${a.colors.cyber.dark};
  color: ${a.colors.cyber.text};
  border-radius: 16px;
  padding: 32px;
  min-width: 320px;
  max-width: 480px;
  box-shadow: 0 0 32px ${a.colors.cyber.secondary}bb;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`,rs=l.span`
  position: absolute;
  top: 12px;
  right: 18px;
  font-size: 22px;
  cursor: pointer;
  color: ${a.colors.cyber.secondary};
  transition: color ${a.transitions.fast};

  &:hover {
    color: ${a.colors.cyber.primary};
  }
`,ns=l.h2`
  color: ${a.colors.cyber.secondary};
  margin-bottom: 16px;
`,os=l.div`
  font-size: 18px;
  margin-bottom: 24px;
  text-align: center;
`,ss=l.button`
  font-size: 22px;
  padding: 0.7rem 2.5rem;
  margin-bottom: 12px;
  transition: all ${a.transitions.fast};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,is=l.div`
  margin-top: 18px;
  color: ${a.colors.cyber.text};
  font-weight: 700;
  font-size: 20px;
  text-shadow: 0 0 8px ${a.colors.cyber.secondary};
`,as=({wheelOpen:e,wheelResult:t,wheelUsed:r,aiChatOpen:n,onWheelOpen:o,onWheelClose:i,onSpinWheel:c,onAiChatOpen:u,onAiChatClose:p})=>s.jsxs(s.Fragment,{children:[s.jsx(lr,{$type:"wheel",$disabled:r,onClick:()=>!r&&o(),title:"每日转盘",disabled:r,children:"🎡"}),s.jsx(lr,{$type:"chat",onClick:u,title:"向AI伙伴提问",children:"💬"}),e&&s.jsx(es,{children:s.jsxs(ts,{children:[s.jsx(rs,{onClick:i,children:"×"}),s.jsx(ns,{children:"每日转盘"}),s.jsx(os,{children:"点击转盘，获得随机奖励或惩罚！每天限一次。"}),s.jsx(ss,{className:"legacy-btn",onClick:c,disabled:t!==null,children:"🎡 Spin!"}),t&&s.jsx(is,{children:t})]})})]}),ze=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.7);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`,Pe=l.div`
  background: ${({$variant:e})=>e==="edit"?a.colors.cyber.text:a.colors.cyber.dark};
  color: ${({$variant:e})=>e==="edit"?a.colors.cyber.dark:a.colors.cyber.text};
  border-radius: 16px;
  padding: 32px;
  min-width: 320px;
  max-width: 480px;
  box-shadow: 0 0 32px ${({$variant:e})=>e==="edit"?`${a.colors.meme.primary}cc`:`${a.colors.cyber.primary}cc`};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,yt=l.span`
  position: absolute;
  top: 12px;
  right: 18px;
  font-size: 22px;
  cursor: pointer;
  color: ${({$color:e})=>e};
  transition: color ${a.transitions.fast};

  &:hover {
    opacity: 0.8;
  }
`,xt=l.h2`
  color: ${({$color:e})=>e};
  margin-bottom: 16px;
`,bt=l.label`
  font-weight: 700;
  margin-bottom: 8px;
`,cs=l.input`
  padding: 0.7rem 1rem;
  border-radius: 8px;
  border: 1px solid ${a.colors.cyber.accent};
  font-size: 16px;
  margin-bottom: 8px;
  background: ${a.colors.meme.primary}22;
  color: ${a.colors.cyber.dark};
  transition: border-color ${a.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${a.colors.cyber.primary};
  }
`,ls=l.select`
  padding: 0.7rem 1rem;
  border-radius: 8px;
  border: 1px solid ${a.colors.cyber.accent};
  font-size: 16px;
  margin-bottom: 8px;
  background: ${a.colors.meme.primary}22;
  color: ${a.colors.cyber.dark};
  transition: border-color ${a.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${a.colors.cyber.primary};
  }
`,ds=l.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`,ps=l.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: ${({$selected:e})=>e?`3px solid ${a.colors.cyber.accent}`:"2px solid #ccc"};
  cursor: pointer;
  box-shadow: ${({$selected:e})=>e?`0 0 8px ${a.colors.cyber.accent}`:"none"};
  transition: all ${a.transitions.fast};

  &:hover {
    transform: scale(1.05);
  }
`,xe=l.button`
  background: ${({$variant:e})=>e==="primary"?a.colors.cyber.accent:a.colors.cyber.primary};
  color: ${({$variant:e})=>e==="primary"?a.colors.cyber.text:a.colors.cyber.dark};
  margin-top: 12px;
  transition: all ${a.transitions.fast};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
`,us=l.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`,hs=l.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  box-shadow: 0 0 8px ${a.colors.cyber.primary};
`,fs=l.span`
  font-weight: 700;
  color: ${a.colors.cyber.primary};
`,ms=l.div`
  font-size: 16px;
  margin-bottom: 8px;
`,gs=l.input`
  padding: 0.7rem 1rem;
  border-radius: 8px;
  border: 1px solid ${a.colors.cyber.primary};
  font-size: 16px;
  margin-bottom: 8px;
  background: #111;
  color: ${a.colors.cyber.text};
  transition: border-color ${a.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${a.colors.cyber.secondary};
  }
`,ys=l.div`
  background: #333;
  color: ${a.colors.cyber.primary};
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  margin-top: 8px;
`,xs=l.div`
  font-size: 18px;
  margin-bottom: 24px;
`,bs=l.div`
  display: flex;
  gap: 16px;
`,vs=l.div`
  font-size: 18px;
  margin-bottom: 24px;
`,ws=l.div`
  display: flex;
  gap: 16px;
`,$s=l.div`
  margin-top: 18px;
  color: ${({$correct:e})=>e?a.colors.cyber.success:a.colors.cyber.error};
  font-weight: 700;
`,Ss=l.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.85);
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,js=l.img`
  width: 180px;
  height: 180px;
  margin-bottom: 24px;
`,Cs=l.h2`
  color: ${a.colors.cyber.primary};
  font-size: 2rem;
  text-shadow: 0 0 16px ${a.colors.cyber.secondary};
  margin-bottom: 12px;
`,ks=l.div`
  color: ${a.colors.cyber.text};
  text-align: center;
`,As=l.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.95);
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
`,Rs=l.h2`
  color: ${a.colors.cyber.secondary};
  font-size: 2rem;
  margin-bottom: 16px;
`,Is=l.div`
  color: ${a.colors.cyber.text};
  font-size: 1.2rem;
  margin-bottom: 16px;
  text-align: center;
`,vt=l.div`
  margin-bottom: 8px;
`,Es=l.pre`
  white-space: pre-wrap;
  font-size: 16px;
`,Os=({showModal:e,modalContent:t,aiChatOpen:r,dilemma:n,quiz:o,quizAnswered:i,endgame:c,showSummary:u,companyName:p,avatar:h,avatarOptions:d,theme:f,pendingCompanyName:y,aiPartnerData:m,aiInput:S,aiResponse:$,returns:_,badges:I,onModalClose:v,onCompanyNameChange:j,onAvatarChange:k,onThemeChange:R,onPendingCompanyNameChange:w,onDilemmaClose:g,onQuizAnswer:H,onQuizClose:te,onEndgameClose:Se,onSummaryClose:me,onAiInputChange:ge,onAiAsk:se,onAiChatClose:ye,onResetGame:ie})=>{const Z=A=>["A. 坚持长期持有","B. 立即止损","C. 增加投资"];return s.jsxs(s.Fragment,{children:[e&&t==="edit"&&s.jsx(ze,{children:s.jsxs(Pe,{$variant:"edit",children:[s.jsx(yt,{$color:a.colors.cyber.accent,onClick:v,children:"×"}),s.jsx(xt,{$color:a.colors.cyber.accent,children:p?"编辑公司信息":"注册公司"}),s.jsx(bt,{children:"公司名称："}),s.jsx(cs,{type:"text",value:y,onChange:A=>w(A.target.value),autoFocus:!0}),s.jsx(bt,{children:"选择头像："}),s.jsx(ds,{children:d.map(A=>s.jsx(ps,{src:A,alt:"avatar",$selected:h===A,onClick:()=>k(A)},A))}),s.jsx(bt,{children:"主题风格："}),s.jsxs(ls,{value:f,onChange:A=>R(A.target.value),children:[s.jsx("option",{value:"cyberpunk",children:"赛博朋克"}),s.jsx("option",{value:"classic",children:"经典"}),s.jsx("option",{value:"meme",children:"搞笑"})]}),s.jsx(xe,{$variant:"primary",onClick:v,children:"取消"}),p?s.jsx(xe,{$variant:"secondary",onClick:()=>{j(y),v()},children:"保存"}):s.jsx(xe,{$variant:"secondary",onClick:()=>{j(y),v()},children:"注册"})]})}),r&&s.jsx(ze,{children:s.jsxs(Pe,{$variant:"ai",children:[s.jsx(yt,{$color:a.colors.cyber.secondary,onClick:ye,children:"×"}),s.jsxs(us,{children:[s.jsx(hs,{src:m.avatar,alt:"AI Partner"}),s.jsx(fs,{children:m.name})]}),s.jsx(ms,{children:"你可以向AI伙伴提问任何金融相关问题。"}),s.jsx(gs,{type:"text",value:S,onChange:A=>ge(A.target.value),placeholder:"请输入你的问题..."}),s.jsx(xe,{$variant:"primary",onClick:se,children:"发送"}),$&&s.jsx(ys,{children:$})]})}),n&&s.jsx(ze,{children:s.jsxs(Pe,{$variant:"dilemma",children:[s.jsx(xt,{$color:a.colors.cyber.secondary,children:"决策时刻"}),s.jsx(xs,{children:n}),s.jsx(bs,{children:Z().map((A,re)=>s.jsx(xe,{$variant:"primary",onClick:g,children:A},A+re))})]})}),o&&s.jsx(ze,{children:s.jsxs(Pe,{$variant:"quiz",children:[s.jsx(xt,{$color:a.colors.cyber.primary,children:"金融知识小测验"}),s.jsx(vs,{children:o.question}),s.jsx(ws,{children:o.options.map(A=>s.jsx(xe,{$variant:"primary",onClick:()=>H(A),children:A},A))}),i&&s.jsx($s,{$correct:i===o.answer,children:i===o.answer?"回答正确！获得知识大师徽章！":"回答错误，再接再厉！"})]})}),c&&!u&&s.jsxs(Ss,{children:[s.jsx(js,{src:"https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",alt:"victory"}),s.jsx(Cs,{children:"传奇空岛重启成功！"}),s.jsx(ks,{children:"你已收集全部神器徽章，财富目标达成，成功渡过终极经济风暴！"})]}),u&&s.jsxs(As,{children:[s.jsx(Rs,{children:"冒险总结"}),s.jsxs(Is,{children:[s.jsxs(vt,{children:["累计收益：",_,"%"]}),s.jsxs(vt,{children:["获得徽章：",I.join("、")]}),s.jsx(vt,{children:"教育收获：分散投资、长期主义、风险管理、冷静应对市场波动"})]}),s.jsx(xe,{$variant:"primary",onClick:me,children:"再玩一次"})]}),e&&t!=="edit"&&s.jsx(ze,{onClick:v,children:s.jsxs(Pe,{$variant:"general",children:[s.jsx(yt,{$color:a.colors.cyber.secondary,onClick:v,children:"×"}),s.jsx(Es,{children:t})]})})]})},He=[{id:1,title:"科技森林起雾",background:"独角兽股价波动，你要增配吗？",tip:"科技股波动加剧，注意分散投资。",focus:"集中度风险"}],Ns=[{id:1,name:"科技泡沫",affected:["tech","crypto"],impactRange:{tech:[-.15,-.05],crypto:[-.1,-.03]},probability:.1,description:"科技股和加密货币遭遇泡沫，价格大幅下跌。"},{id:2,name:"大宗商品危机",affected:["commodity","tech"],impactRange:{commodity:[-.12,-.04],tech:[-.05,-.01]},probability:.08,description:"商品市场危机，科技股也受影响。"}],Br=[{key:"diversifier",name:"分散者徽章",desc:"同日持有 ≥4 种神器"},{key:"calm",name:"冷静头脑徽章",desc:"三次风暴日未恐慌性抛售"},{key:"longterm",name:"长远目光徽章",desc:"连续 3 天资产净值增长"},{key:"risk",name:"风险管理者徽章",desc:"高风险仓位理性止盈"},{key:"knowledge",name:"知识大师徽章",desc:"完成全部金融知识小测验"}],_s=()=>{const[e,t]=b.useState("我的空岛公司"),[r,n]=b.useState("https://cdn-icons-png.flaticon.com/512/616/616494.png"),[o,i]=b.useState("cyberpunk"),[c,u]=b.useState(100),[p,h]=b.useState(5),[d,f]=b.useState(!1),[y,m]=b.useState(null),[S,$]=b.useState(!1),[_,I]=b.useState(!1),[v,j]=b.useState(""),[k,R]=b.useState(""),[w,g]=b.useState(null),[H,te]=b.useState(null),[Se,me]=b.useState(null),[ge,se]=b.useState(!1),[ye,ie]=b.useState(!1),[Z,A]=b.useState([]),[re,W]=b.useState([]),[B,U]=b.useState({tech:25,bond:25,commodity:25,crypto:25}),[M,ae]=b.useState(0),[ne,D]=b.useState(null),[J,X]=b.useState(null),[ce,q]=b.useState(He[0]),[G,K]=b.useState([]),[F,Y]=b.useState(!1),[ue,Tt]=b.useState(""),[Gr,Fr]=b.useState(e),[Lr,Mt]=b.useState(!1),[Wr,Dt]=b.useState(""),lt=["市场波动加剧，你会选择？","突发利空消息，你会选择？","资产暴涨，你会选择？","行业政策变化，你会选择？","朋友推荐新资产，你会选择？"],qr=["https://cdn-icons-png.flaticon.com/512/616/616494.png","https://cdn-icons-png.flaticon.com/512/616/616408.png","https://cdn-icons-png.flaticon.com/512/616/616430.png","https://cdn-icons-png.flaticon.com/512/616/616408.png","https://cdn-icons-png/flaticon.com/512/616/616408.png","https://cdn-icons-png.flaticon.com/512/616/616408.png"],Yr=[{id:3,name:"科技牛市",affected:["tech","crypto"],impactRange:{tech:[.05,.15],crypto:[.03,.1]},probability:.12,description:"科技股和加密货币迎来牛市，价格大幅上涨。"},{id:4,name:"债券利好",affected:["bond"],impactRange:{bond:[.02,.08]},probability:.1,description:"债券市场利好，收益提升。"},{id:5,name:"商品暴跌",affected:["commodity"],impactRange:{commodity:[-.15,-.05]},probability:.09,description:"商品市场暴跌，注意分散风险。"},{id:6,name:"加密波动",affected:["crypto"],impactRange:{crypto:[-.2,.2]},probability:.15,description:"加密货币剧烈波动，风险与机会并存。"}],Bt=[...Ns,...Yr],Qr=b.useCallback(()=>{const le=[{label:"收益+10%",effect:()=>D(z=>z!==null?z+10:10),color:"#27ae60"},{label:"收益-10%",effect:()=>D(z=>z!==null?z-10:-10),color:"#e74c3c"},{label:"获得分散者徽章",effect:()=>K(z=>z.includes("分散者")?z:[...z,"分散者"]),color:"#00fff7"},{label:"风险提升",effect:()=>D(z=>z!==null?z-5:-5),color:"#ff00cc"},{label:"知识大师徽章",effect:()=>K(z=>z.includes("知识大师")?z:[...z,"知识大师"]),color:"#f6d365"},{label:"无变化",effect:()=>{},color:"#888"}],de=Math.floor(Math.random()*le.length);m(le[de].label),le[de].effect(),$(!0),setTimeout(()=>{f(!1),m(null)},1800)},[]),Hr=b.useCallback(async()=>{v.trim()&&(R("正在思考..."),setTimeout(()=>{const de=["你问得太专业了，我得查查我的数据库！","投资就像玩游戏，记得多收集徽章哦！","如果市场下跌，不如喝杯奶茶冷静一下？","分散投资，财富自由，顺便多吃点薯片！","你是空岛最强守护者，继续冲鸭！","AI也有点懵，建议你问ChatGPT！","投资有风险，游戏更有趣！","如果你赢了，记得截图发朋友圈！","财富密码：多玩几天，解锁彩蛋！","我猜你会选A，但B也不错！","市场风暴来袭，快用你的神器！","你问的问题让我想起了猫猫狗狗。","投资路上，记得保持微笑😄！"];R(de[Math.floor(Math.random()*de.length)])},1200))},[v]),Ur=b.useCallback(()=>{U({tech:25,bond:25,commodity:25,crypto:25}),ae(0),D(null),X(null),q(He[0]),K([]),A([]),Mt(!1),Dt(""),u(100),h(5),se(!1),ie(!1)},[]),Jr=b.useCallback((le,de)=>{Object.entries(B).reduce((Fe,[Le,dt])=>Le===le?Fe+de:Fe+dt,0)<=100&&U({...B,[le]:de})},[B]),Kr=b.useCallback(()=>{if(Math.random()<.15&&(Y(!0),Tt(`🎉 彩蛋事件：你发现了一只会跳舞的柴犬！

奖励：收益+5%，心情+100！`),D(O=>O!==null?O+5:5),u(O=>O+10),h(O=>O+1)),$(!1),Math.random()<.4){const O=lt.map((Ne,pt)=>pt).filter(Ne=>!re.includes(Ne));if(O.length>0){const Ne=O[Math.floor(Math.random()*O.length)];g(lt[Ne]),W(pt=>[...pt,Ne]);return}}if(Math.random()<.2){te({question:"分散投资的最大好处是什么？",options:["降低风险","增加波动","提高单一资产收益"],answer:"降低风险"});return}const le=300,z=Br.map(O=>O.name.replace("徽章","")).every(O=>G.includes(O));if(ne!==null&&ne>=le&&z){se(!0),setTimeout(()=>ie(!0),2500);return}const Fe=Math.floor(Math.random()*Bt.length),Le=Bt[Fe];X(Le);const dt=(M+1)%He.length;q(He[dt]),ae(M+1);let Gt=0;Gt=Math.random()*20-10;const je=Number((Gt*100).toFixed(2));D(je),u(O=>O+Math.max(0,Math.floor(je/10))),je>50&&h(O=>O+1);let We=[...G];Object.values(B).filter(O=>O>0).length>=4&&!G.includes("分散者")&&We.push("分散者"),Z.length>=2&&Z.slice(-2).every(O=>O.returns>0)&&je>0&&!G.includes("长远目光")&&We.push("长远目光"),Object.values(B).some(O=>O>60)&&je>0&&!G.includes("风险管理者")&&We.push("风险管理者"),K(We),A([...Z,{day:M+1,weights:{...B},event:Le,returns:je}])},[M,ne,G,B,Z,re]);return{companyName:e,avatar:r,theme:o,coins:c,gems:p,wheelOpen:d,wheelResult:y,wheelUsed:S,aiChatOpen:_,aiInput:v,aiResponse:k,dilemma:w,quiz:H,quizAnswered:Se,endgame:ge,showSummary:ye,history:Z,weights:B,day:M,returns:ne,event:J,task:ce,badges:G,showModal:F,modalContent:ue,pendingCompanyName:Gr,quizActive:Lr,quizResult:Wr,avatarOptions:qr,dilemmaQuestions:lt,setCompanyName:t,setAvatar:n,setTheme:i,setCoins:u,setGems:h,setWheelOpen:f,setWheelResult:m,setWheelUsed:$,setAiChatOpen:I,setAiInput:j,setAiResponse:R,setDilemma:g,setQuiz:te,setQuizAnswered:me,setEndgame:se,setShowSummary:ie,setHistory:A,setWeights:U,setDay:ae,setReturns:D,setEvent:X,setTask:q,setBadges:K,setShowModal:Y,setModalContent:Tt,setPendingCompanyName:Fr,setQuizActive:Mt,setQuizResult:Dt,handleSpinWheel:Qr,handleAiAsk:Hr,resetGame:Ur,handleWeightChange:Jr,nextDay:Kr}},zs=[{key:"tech",name:"敏捷之剑",theme:"forest",icon:"🗡️",color:"#00fff7"},{key:"bond",name:"稳固之盾",theme:"snow",icon:"🛡️",color:"#00eaff"},{key:"commodity",name:"火焰之斧",theme:"volcano",icon:"🪓",color:"#ff6f00"},{key:"crypto",name:"神秘水晶",theme:"starsea",icon:"🔮",color:"#ff00cc"}],Ps="智慧猫头鹰",Ts="https://cdn-icons-png.flaticon.com/512/616/616494.png",Ms=["观察：你当前对{asset}的配置为{percent}%","判断：该配置在{market}下属于{riskLevel}","建议：可考虑把权重从{from}%调整至{to}%，提升分散度至≥3 类","提问：如果再次遭遇{event}，你会如何应对？","鼓励：遇到风暴未抛售，体现了冷静的长期主义！","庆祝：你已获得{badge}徽章，继续保持！"],dr={name:Ps,avatar:Ts,feedbackTemplates:Ms},Ds=()=>{const e=_s(),{companyName:t,avatar:r,theme:n,coins:o,gems:i,wheelOpen:c,wheelResult:u,wheelUsed:p,aiChatOpen:h,aiInput:d,aiResponse:f,dilemma:y,quiz:m,quizAnswered:S,endgame:$,showSummary:_,history:I,weights:v,day:j,returns:k,event:R,task:w,badges:g,showModal:H,modalContent:te,pendingCompanyName:Se,avatarOptions:me,setCompanyName:ge,setAvatar:se,setTheme:ye,setWheelOpen:ie,setWheelResult:Z,setAiChatOpen:A,setAiInput:re,setAiResponse:W,setDilemma:B,setQuiz:U,setQuizAnswered:M,setEndgame:ae,setShowSummary:ne,setShowModal:D,setModalContent:J,setPendingCompanyName:X,handleSpinWheel:ce,handleAiAsk:q,resetGame:G,handleWeightChange:K,nextDay:F}=e,Y={editCompany:()=>{D(!0),J("edit"),X(t)},modalClose:()=>{D(!1),J("")},wheelClose:()=>{ie(!1),Z(null)},aiChatClose:()=>{A(!1),re(""),W("")},dilemmaClose:()=>{B(null),F()},quizAnswer:ue=>{M(ue),setTimeout(()=>{U(null),M(null),F()},1200)},endgameClose:()=>ae(!1),summaryClose:()=>{ne(!1),ae(!1),G()},badgeClick:ue=>{D(!0),J(`${ue.name}

${ue.desc}`)}};return s.jsxs("div",{className:"legacy-container",style:{paddingTop:0,maxWidth:"1200px",margin:"2rem auto"},children:[s.jsx(go,{companyName:t,avatar:r,badges:g,day:j,coins:o,gems:i,theme:n,onEditCompany:Y.editCompany}),s.jsx(as,{wheelOpen:c,wheelResult:u,wheelUsed:p,aiChatOpen:h,onWheelOpen:()=>ie(!0),onWheelClose:Y.wheelClose,onSpinWheel:ce,onAiChatOpen:()=>A(!0),onAiChatClose:Y.aiChatClose}),s.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"nowrap",marginBottom:"2rem"},children:[s.jsx(jo,{aiPartnerData:dr,badgesData:Br,badges:g,history:I,onBadgeClick:Y.badgeClick}),s.jsx(Xo,{task:w,event:R,artifactsData:zs,weights:v,returns:k,onWeightChange:K,onNextDay:F,onResetGame:G,onShowModal:ue=>{D(!0),J(ue)}})]}),s.jsx(Os,{showModal:H,modalContent:te,aiChatOpen:h,dilemma:y,quiz:m,quizAnswered:S,endgame:$,showSummary:_,companyName:t,avatar:r,avatarOptions:me,theme:n,pendingCompanyName:Se,aiPartnerData:dr,aiInput:d,aiResponse:f,returns:k,badges:g,onModalClose:Y.modalClose,onCompanyNameChange:ge,onAvatarChange:se,onThemeChange:ye,onPendingCompanyNameChange:X,onDilemmaClose:Y.dilemmaClose,onQuizAnswer:Y.quizAnswer,onQuizClose:()=>U(null),onEndgameClose:Y.endgameClose,onSummaryClose:Y.summaryClose,onAiInputChange:re,onAiAsk:q,onAiChatClose:Y.aiChatClose,onResetGame:G})]})};function Bs({children:e}){const[t,r]=L.useState(null);return t?s.jsxs("div",{style:{color:"red",padding:"2rem"},children:["运行时错误: ",t.message]}):s.jsx(L.Fragment,{children:L.Children.map(e,n=>{try{return n}catch(o){return r(o),null}})})}function Gs(){return s.jsxs(ro,{theme:a,children:[s.jsx(io,{}),s.jsx(Bs,{children:s.jsx(Ds,{})})]})}const pr=document.getElementById("root");pr?(console.log("Mounting React app to #root"),rn.createRoot(pr).render(s.jsx(b.StrictMode,{children:s.jsx(Gs,{})}))):document.body.innerHTML='<div style="color:red;padding:2rem;">未找到 root 元素，无法挂载 React 应用。</div>';
