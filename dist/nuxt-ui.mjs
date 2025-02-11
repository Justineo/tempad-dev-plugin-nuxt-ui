function dt(e){return e}function H(e,t,n){return{name:e,props:t??{},children:n??[]}}function q(e,t){if(t===void 0)return!0;if(typeof e=="string"){if(Array.isArray(t))return t.includes(e);if(t instanceof RegExp)return t.test(e)}return e===t}function $(e,t){return typeof t=="function"?t(e):q(e.type,t.type)&&q(e.name,t.name)&&q(e.visible,t.visible)}function f(e,t){return e.children.find(n=>$(n,t))??null}function y(e,t){return e.children.filter(n=>$(n,t))}function E(e,t){for(const n of e.children){if($(n,t))return n;if("children"in n){const i=E(n,t);if(i)return i}}return null}function G(e,t){const n=[];for(const i of e.children)$(i,t)&&n.push(i),"children"in i&&n.push(...G(i,t));return n}function ae(e){return Array.isArray(e)?e.slice():e instanceof Object?{...e}:e}function le(e,t){let n={};return Object.keys(e||n).forEach(i=>n[t(e[i],i)]=e[i]),n}function se(e,...t){const n=ae(e)??{};for(const i of t)delete n[i];return n}function d(e,t){return le(e,(n,i)=>{if(t&&i in t)return t[i]??i;const o=i.replace(/^[^ ]+ /,"").replace(/[ /]+(.)/g,(a,r)=>r.toUpperCase());return o.charAt(0).toLowerCase()+o.slice(1)})}function C(e,t){return H("template",{[`#${e}`]:!0},t)}function ce(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/(\d)([a-z])/gi,"$1-$2").replace(/([a-z])(\d)/gi,"$1-$2").replace(/[_\s]/g,"-").toLowerCase()}function v(e){return e.toLowerCase()}function z(e,t){const n={};for(const i in e)e[i]!==void 0&&e[i]!==t[i]&&(n[i]=e[i]);return n}const L="Lorem ipsum",P="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";function m(e,t,n,i){return H(e,z(t,n),i)}function j(e,t){return e.find(n=>n[t]!=null)?.[t]}const A={icons:{arrowRight:"i-lucide-arrow-right",arrowLeft:"i-lucide-arrow-left",check:"i-lucide-check",chevronDoubleRight:"i-lucide-chevrons-right",chevronDown:"i-lucide-chevron-down",chevronDoubleLeft:"i-lucide-chevrons-left",chevronRight:"i-lucide-chevron-right",chevronLeft:"i-lucide-chevron-left",close:"i-lucide-x",ellipsis:"i-lucide-ellipsis",minus:"i-lucide-minus",plus:"i-lucide-plus",search:"i-lucide-search"}};function J(e){return m("UIcon",{name:I(e.name)},{})}function I(e){if(e)return`i-lucide-${e}`}function pe(e){const t=y(e,{type:"INSTANCE",name:"Collapsible_panel"});let n=0;const i=t.map(o=>{const{properties:a}=o,{state:r,label:l,description:s,iconLeading:c,iconLeadingName:u,iconTrailingName:p}=d(a);return r==="Open"&&n++,z({label:l||L,content:s||P,icon:c?I(u?.name):void 0,trailingIcon:I(p?.name),disabled:r==="Disable"},{disabled:!1,trailingIcon:A.icons.chevronDown})});return m("UAccordion",{items:i,type:n>1?"multiple":"single"},{type:"single"})}function X(e,t={}){const{properties:n}=e,{variant:i,size:o,iconName:a,chipPosition:r}=d(n),l=f(e,{type:"TEXT"})?.characters,s=m("UAvatar",{icon:i==="Icon"?I(a?.name):void 0,alt:i==="Alt"?l:void 0,...i==="Image"?D():{},size:o},{size:"md",...t});if(r==="None")return s;const c=v(r);return m("UChip",{inset:!0,position:c},{position:"top-right"},[s])}const W=["benjamincanac","romhml","smarroufin","atinux","Haythamasalama","hywax","danielroe","sandros94","malik-jouda","connerblanton","antfu","Justineo"];function ue(e){return{src:`https://github.com/${e}.png`,alt:`@${e}`}}function D(){return ue(W[Math.floor(Math.random()*W.length)])}function de(e,t={}){const{props:n,children:i}=X(e,t),o=i[0];return o&&typeof o!="string"&&o.name==="UAvatar"?o.props:n}const Z={ButtonPrimary:"primary",ButtonSecondary:"secondary",ButtonSuccess:"success",ButtonInfo:"info",ButtonWarning:"warning",ButtonError:"error",ButtonNeutral:"neutral"},M=Object.keys(Z);function k(e,t={}){const{name:n,properties:i}=e,o=Z[n],{variant:a,size:r,state:l,square:s,slot:c,iconLeading:u,iconLeadingName:p,iconTrailing:h,iconTrailingName:g,avatarLeading:b}=d(i),N=c==="Icon"&&u?I(p?.name):void 0,T=h?I(g?.name):void 0,w=c==="Avatar"&&b?D():void 0,F=E(e,{type:"TEXT",visible:!0})?.characters;return m("UButton",{variant:v(a),color:o,size:r,square:s==="True",icon:N,trailingIcon:T,avatar:w,disabled:l==="Disabled"},{color:"primary",variant:"solid",size:"md",square:!1,disabled:!1,...t},F?[F]:[])}function U(e,t={}){const{props:n,children:i}=k(e,t);return{label:i.map(o=>typeof o=="string"?o:void 0).filter(Boolean).join("")||void 0,...n}}function me(e){const{props:{size:t,...n},children:i}=k(e);return m("UButton",n,i)}function ve(e){const{properties:t}=e,{color:n,variant:i,leadingSlot:o,showDescription:a,action:r,title:l,description:s,closeButton:c,icon:u,iconName:p}=d(t,{"\u{1F441}\uFE0F Description":"showDescription"}),h=f(e,{type:"INSTANCE",name:M}),g=c&&h?U(h,{size:"md",color:"neutral",variant:"link"}):!1,b=g?g.icon:void 0,N=r?E(e,{type:"FRAME",name:"Actions"}):null,T=(N?y(N,{type:"INSTANCE",name:M})||[]:[]).map(w=>U(w));return m("UAlert",{title:l,description:a&&s||void 0,icon:o==="Icon"&&u?I(p?.name):void 0,avatar:o==="Avatar"?D():void 0,color:v(n),variant:v(i),close:g,closeIcon:b,actions:T.length>0?T:void 0},{color:"primary",variant:"solid",close:!1,closeIcon:A.icons.close})}function be(e){const{properties:t}=e,{size:n}=d(t),i=y(e,r=>r.type==="INSTANCE"&&r.name==="Avatar"&&r.visible===!0).map(r=>X(r));i.forEach(r=>{if("size"in r.props){const{size:l,...s}=r.props;r.props=s}});const o=i.at(-1)?.props,a=!Number.isNaN(Number.parseInt(o?.alt||"",10));return m("UAvatarGroup",{size:n,max:a?i.length-1:void 0},{size:"md"},a?i.slice(0,-1):i)}function K(e,t={}){const{properties:n}=e,{color:i,variant:o,size:a,roundedFull:r,label:l,iconLeading:s,iconLeadingName:c,iconTrailing:u,iconTrailingName:p}=d(n),h=s&&u?{leadingIcon:I(c?.name),trailingIcon:I(p?.name)}:{icon:s?I(c?.name):u?I(p?.name):void 0,trailing:u};return m("UBadge",{class:r==="True"?"rounded-full":void 0,color:v(i),variant:v(o),size:a,...h},{color:"primary",variant:"solid",size:"md",trailing:!1,...t},l?[l]:[])}function he(e,t={}){const{props:n,children:i}=K(e,t);return{label:i.map(o=>typeof o=="string"?o:void 0).filter(Boolean).join("")||void 0,...n}}function fe(e){const{properties:t}=e,{leadingSlot:n,divider:i,separatorIconName:o,separatorSlot:a,iconName1:r,iconName2:l,iconName3:s}=d(t),c=[r,l,s],u=[];if(n==="None"||n==="Span"){const p=y(e,{type:"INSTANCE",name:"Link",visible:!0});u.push(...p.map(h=>({label:f(h,{type:"TEXT",name:"Label"})?.characters||void 0})))}else{const p=y(e,{name:/Link \d+/});u.push(...p.map((h,g)=>{const b=f(h,{type:"INSTANCE",name:"Link"});return{label:b?f(b,{type:"TEXT",name:"Label"})?.characters:void 0,icon:I(c[g]?.name)}}))}return m("UBreadcrumb",{items:u,separatorIcon:i==="Icon"?I(o?.name):void 0},{separatorIcon:A.icons.chevronRight},i==="Span"&&a?[C("separator",[a])]:[])}const Q={InputOutline:"outline",InputSoft:"soft",InputNone:"none",InputGhost:"ghost",InputSubtle:"subtle"},x=Object.keys(Q);function O(e,t={}){const{name:n,properties:i}=e,o=Q[n],{color:a,size:r,state:l,leadingSlot:s,trailingSlot:c,placeholder:u,placeholderLabel:p,completed:h,completedLabel:g,iconLeadingName:b,iconTrailingName:N,span:T}=d(i),w=s==="Icon"?I(b?.name):void 0,F=c==="Icon"?I(N?.name):void 0,R=s==="Avatar"?D():void 0,S=[];return s==="Span"&&T?S.push(C("leading",[T])):c==="Span"&&T&&S.push(C("trailing",[T])),m("UInput",{type:h&&g&&/^\*+$/.test(g)?"password":"text",placeholder:u?p:void 0,color:v(a),variant:o,size:r,icon:w,trailingIcon:F,avatar:R,disabled:l==="Disabled"},{type:"text",color:"primary",variant:"outline",size:"md",disabled:!1,...t},S)}function ge(e){const{properties:t}=e,{variant:n,size:i,orientation:o}=d(t),a=[];if(n==="Buttons"){const r=y(e,{type:"INSTANCE",visible:!0,name:M});a.push(...r.map(l=>me(l)))}else{const r=f(e,{type:"INSTANCE",visible:!0,name:x}),l=f(e,{type:"INSTANCE",visible:!0,name:M});r&&a.push(O(r)),l&&a.push(k(l))}return m("UButtonGroup",{size:i,orientation:v(o)},{size:"md",orientation:"horizontal"},a)}function Ie(e){const{properties:t}=e,{color:n,size:i,numberOfMonths:o,monthControls:a,yearControls:r}=d(t),l=Number(o);return m("UCalendar",{color:v(n),size:i,numberOfMonths:Number.isNaN(l)?1:l,monthControls:a,yearControls:r},{color:"primary",size:"md",numberOfMonths:1,monthControls:!0,yearControls:!0})}function Ne(e){const t=E(e,{type:"FRAME",name:"Header",visible:!0}),n=E(e,{type:"FRAME",name:"Body",visible:!0}),i=E(e,{type:"FRAME",name:"Footer",visible:!0});return m("UCard",{},{},[...t?[C("header",[L])]:[],...n?[P]:[],...i?[C("footer",[L])]:[]])}function ye(e){const{properties:t}=e,{variant:n,pagination:i,prevNext:o}=d(t);let a={};if(o){const r=f(e,{type:"FRAME",name:"Carousel + prev/next"}),[l,s]=y(r,{type:"INSTANCE",visible:!0}),c={size:"md",color:"neutral",variant:"link"},{icon:u,...p}=U(l,{...c,icon:A.icons.arrowLeft}),{icon:h,...g}=U(s,{...c,icon:A.icons.arrowRight});a={prev:p,next:g,prevIcon:u,nextIcon:h}}return m("UCarousel",{items:[],arrows:o,dots:i,fade:n==="Fade",...a},{arrows:!1,dots:!1,fade:!1})}function Se(e){const{properties:t}=e,{color:n,size:i,state:o,label:a,description:r,descriptionSlot:l,required:s,icon:c}=d(t);return m("UCheckbox",{label:a,description:r?l:void 0,color:v(n),size:i,icon:I(c?.name),disabled:o==="Disabled",required:s},{color:"primary",size:"md",icon:A.icons.check,disabled:!1,required:!1})}function Ae(e){const{properties:t}=e,{color:n,size:i,isLabel:o,label:a}=d(t);return m("UChip",{text:o?a:void 0,color:v(n),size:i},{color:"primary",size:"md"})}function Te(e){const{properties:t}=e,{open:n}=d(t),i=e.children[0];return m("UCollapsible",{open:n},{open:!1},[k(i)])}const Ee={"\u2318":"meta","\u2303":"ctrl","\u2325":"alt","\u229E":"win","\u21E7":"shift","\u21B5":"enter","\u2326":"delete","\u232B":"backspace","\u238B":"escape","\u21E5":"tab","\u21EA":"capslock","\u2191":"arrowup","\u2192":"arrowright","\u2193":"arrowdown","\u2190":"arrowleft","\u21DE":"pageup","\u21DF":"pagedown","\u2196":"home","\u2198":"end"};function Y(e){const{properties:t}=e,{size:n,variant:i}=d(t),o=f(e,{type:"TEXT",visible:!0})?.characters;return m("UKbd",{value:o?Ee[o]||o:void 0,variant:v(i),size:n},{variant:"outline",size:"md"})}function Ce(e,t={}){const{props:n}=Y(e);return z(n,t)}function _(e,t={}){const n=f(e,{type:"FRAME",name:"Kbd",visible:!0});if(n){const i=y(n,{type:"INSTANCE",name:"Kbd",visible:!0}).map(o=>Ce(o,t));return i.length===0?void 0:i.every(o=>Object.keys(o).length===1&&o.value)?i.map(o=>o.value):i}}function ze(e){const{properties:t}=e,{state:n,leadingSlot:i,trailingSlot:o,description:a,label:r,descriptionSlot:l,iconLeadingName:s,iconTrailingName:c}=d(t);return z({label:r,suffix:a&&l||void 0,icon:i==="Icon"?I(s?.name):void 0,avatar:i==="Avatar"?D():void 0,kbds:o==="Kbd"?_(e):void 0,active:o==="Icon"&&c?.name==="check",disabled:n==="Disabled"},{active:!1,disabled:!1})}function Me(e){const t=E(e,{type:"INSTANCE",name:x,visible:!0}),n=t?O(t):void 0,{icon:i,placeholder:o,disabled:a}=n?.props||{},r=f(e,{type:"FRAME",name:"CommandPalette",visible:!0}),l=r?y(r,{type:"FRAME",name:/^Container/,visible:!0}):[];let s=0;const c=l.map(N=>{const T=f(N,{type:"TEXT",name:"Title",visible:!0})?.characters,w=y(N,{type:"INSTANCE",name:"CommandPaletteItem",visible:!0}).map(F=>{const R=ze(F);return R.active&&s++,R});return{label:T,items:w}}),u=E(e,{type:"INSTANCE",name:M,visible:!0}),p=u?U(u,{size:"md",color:"neutral",variant:"ghost"}):!1,{icon:h,square:g,...b}=p||{};return m("UCommandPalette",{icon:i,placeholder:o,close:u?Object.keys(b).length>0?b:!0:!1,closeIcon:h,groups:c,multiple:s>1,disabled:a},{icon:A.icons.search,placeholder:"Type a command or search...",close:!1,closeIcon:A.icons.close,multiple:!1,disabled:!1})}function we(e){const{properties:t}=e,{direction:n,overlay:i,handle:o,heading:a,title:r,showDescription:l,description:s,buttons:c}=d(t,{"\u{1F441}\uFE0F Description":"showDescription"}),u=[C("body",[P])];if(c){const p=E(e,{type:"FRAME",name:"Buttons",visible:!0}),h=p?y(p,{type:"INSTANCE",name:M,visible:!0}):[];if(h.length>0){const g=h.map(b=>{const N=k(b);return N.props.class="justify-center",N});u.push(C("footer",g))}}return m("UDrawer",{title:a?r:void 0,description:l?s:void 0,overlay:i==="True",handle:o,direction:v(n)},{overlay:!0,handle:!0,direction:"bottom"},u)}function De(e){const{properties:t}=e,{state:n,leadingSlot:i,trailingSlot:o,label:a,iconLeadingName:r,iconTrailingName:l}=d(t);return z({label:a,icon:i==="Icon"?I(r?.name):void 0,avatar:i==="Avatar"?D():void 0,kbds:o==="Kbd"?_(e):void 0,type:o==="Icon"&&l?.name==="check"?"checkbox":"link",checked:o==="Icon"&&l?.name==="check",disabled:n==="Disabled"},{type:"link",checked:!1,disabled:!1})}const Ue={"Bottom-start":"bottom","Bottom-end":"bottom",Right:"right","Top-start":"top",Left:"left"};function Fe(e){const{properties:t}=e,{size:n,variant:i,alignment:o,arrow:a}=d(t),r=z({side:Ue[o]},{side:"bottom"}),l=f(e,{type:"FRAME",name:"DropdownMenu",visible:!0}),s=(l?y(l,{type:"FRAME",name:/^Container/,visible:!0}):[]).map(u=>y(u,{type:"INSTANCE",name:"DropdownMenuItem",visible:!0}).map(De)),c=[];if(i==="Button"){const u=f(e,{type:"FRAME",name:"Button + arrow",visible:!0}),p=u?f(u,{type:"INSTANCE",name:M,visible:!0}):void 0;p&&c.push(k(p))}else if(i==="Avatar"){const u=f(e,{type:"FRAME",name:"Avatar + arrow",visible:!0}),p=u?f(u,{type:"INSTANCE",name:"Avatar",visible:!0}):void 0;p&&c.push(X(p))}return m("UDropdownMenu",{size:n,items:s,content:r,arrow:a==="True"},{size:"md",arrow:!1},c)}function ee(e){const{properties:t}=e,{color:n,variant:i,size:o,orientation:a,state:r,highlight:l,placeholder:s,placeholderText:c}=d(t),u=y(e,{type:"INSTANCE",name:M,visible:!0}),[p,h]=u.map(w=>U(w,{variant:"link",square:!0})),{icon:g,...b}=p,{icon:N,...T}=h;return m("UInputNumber",{placeholder:s&&c||void 0,color:v(n),variant:v(i),size:o,highlight:l==="True",orientation:v(a),increment:T,incrementIcon:N,decrement:b,decrementIcon:g,disabled:r==="Disabled"},{color:"primary",variant:"outline",size:"md",highlight:!1,orientation:"horizontal",incrementIcon:A.icons.plus,decrementIcon:A.icons.minus,disabled:!1})}function ke(e){const{properties:t}=e,{color:n,variant:i,state:o,highlight:a,placeholder:r,placeholderText:l,completed:s,completedText:c,mask:u}=d(t,{"\u{1F6A6}State":"state"});return{color:v(n),variant:v(i),highlight:a==="True",disabled:o==="Disabled",placeholder:r&&l||void 0,value:s&&c||void 0,mask:u}}function te(e){const{properties:t}=e,n=y(e,{type:"INSTANCE",name:"PinInputItem",visible:!0}).map(ke),i=n.some(p=>p.value&&!/^\d$/.test(p.value))?"text":"number",o=n.find(p=>!!p.placeholder)?.placeholder,a=n.some(p=>p.mask),{size:r}=d(t),{color:l,variant:s,highlight:c,disabled:u}=n[0];return m("UPinInput",{color:l,variant:s,size:r,length:n.length,highlight:c,type:i,disabled:u,placeholder:o,mask:a},{color:"primary",variant:"outline",size:"md",length:5,highlight:!1,type:"text",disabled:!1,mask:!1})}function Re(e){const{properties:t}=e,{size:n,input:i,error:o,label:a,required:r,hint:l,hintSlot:s,help:c,helpSlot:u,description:p,descriptionSlot:h}=d(t),g=[];if(i==="Input"){const b=E(e,{type:"INSTANCE",name:x,visible:!0});b&&g.push(O(b))}else if(i==="InputNumber"){const b=E(e,{type:"INSTANCE",name:"InputNumber",visible:!0});b&&g.push(ee(b))}else if(i==="PinInput"){const b=E(e,{type:"INSTANCE",name:"PinInput",visible:!0});b&&g.push(te(b))}return m("UFormField",{label:a,description:p&&h||void 0,help:c&&u||void 0,error:o==="True"?u||!0:!1,hint:l&&s||void 0,size:n,required:r},{error:!1,size:"md",required:!1},g)}function Be(e){const{properties:t}=e,{state:n,leadingSlot:i,label:o,iconName:a}=d(t);return z({label:o,icon:i==="Icon"?I(a?.name):void 0,avatar:i==="Avatar"?D():void 0,chip:i==="Dot"?{color:"primary"}:void 0,disabled:n==="Disabled",selected:n==="Selected"},{disabled:!1})}function Le(e){const{properties:t}=e,{size:n}=d(t),i=f(e,{type:"FRAME",name:"InputMenu",visible:!0}),o=i?y(i,s=>s.type==="TEXT"&&s.name==="Title"||s.type==="INSTANCE"&&s.name==="InputMenuItem"&&s.visible===!0).map(s=>s.type==="TEXT"?{label:s.characters,type:"label"}:Be(s)):[],a=[],r=f(e,{type:"INSTANCE",name:x,visible:!0}),l=r?O(r).props:{};return m("UInputMenu",{size:n,items:o,...l},{size:"md"},a)}function Pe(e){const{properties:t}=e,{color:n,state:i,label:o}=d(t);return m("ULink",{active:v(n)==="primary",disabled:i==="Disabled"},{active:!1,disabled:!1},[o])}function xe(e){const{properties:t}=e,{header:n,body:i,footer:o}=d(t);return m("UModal",{},{},[...n?[C("header",[L])]:[],...i?[C("body",[P])]:[],...o?[C("footer",[L])]:[]])}function Oe(e){const{properties:t}=e,{icon:n,iconName:i,title:o,description:a,descriptionSlot:r}=d(t);return{label:o,description:a&&r||void 0,icon:n?I(i?.name):void 0}}function $e(e){const{properties:t}=e,{color:n,variant:i,state:o,active:a,highlight:r,iconLeading:l,iconLeadingName:s,iconTrailing:c,badge:u,label:p}=d(t),h=u?f(e,{type:"FRAME",name:"Container",visible:!0}):void 0,g=h?f(h,{type:"INSTANCE",name:"Badge",visible:!0}):void 0,b=g?he(g,{size:"sm",color:"neutral",variant:"outline"}):void 0;let N=b;b&&Object.keys(b).length===1&&b.label!=null&&(String(Number(b.label))===b.label?N=Number(b.label):N=b.label);const T=c?G(e,{type:"INSTANCE",name:"NavigationMenu(DropdownItem)",visible:!0}).map(Oe):void 0;return z({label:p,icon:l?I(s?.name):void 0,badge:N,children:T,active:a==="True",disabled:o==="Disabled",variant:v(i),color:v(n),highlight:r==="True"},{active:!1,disabled:!1,variant:"pill",color:"primary",highlight:!1})}function je(e){const{properties:t}=e,{orientation:n,highlight:i}=d(t),o=y(e,{type:"INSTANCE",name:"NavigationMenuItem",visible:!0}).map($e);return m("UNavigationMenu",{items:o.map(a=>se(a,"variant","color","highlight")),color:j(o,"color"),variant:j(o,"variant"),orientation:v(n),highlight:i==="True"||!!j(o,"highlight")},{color:"primary",variant:"pill",orientation:"horizontal",highlight:!1})}function ie(e){if(!e)return[void 0,void 0];const[t,n]=e.split("-");return[t==="undefined"?void 0:t,n==="undefined"?void 0:n]}function Xe(e){const{properties:t}=e,{size:n}=d(t),i=e.children,o=i.map(S=>U(S));i.splice(2,i.length-4);const a=i.some(S=>S.visible),r=o.splice(2,o.length-4),[l,s,c,u]=o,p=r.find(({icon:S,label:B})=>S&&!/^\d+$/.test(B||"")),h=r.reduce((S,B)=>{const V=`${B.color}-${B.variant}`;return S[V]=(S[V]||0)+1,S},{}),g=Object.entries(h).sort(([,S],[,B])=>B-S),[b,N]=g.map(([S])=>S),[T,w]=ie(b),[F,R]=ie(N);return m("UPagination",{color:T,variant:w,activeColor:F,activeVariant:R,size:n,showControls:a,disabled:r.every(S=>S.disabled),firstIcon:l.icon,prevIcon:s.icon,nextIcon:c.icon,lastIcon:u.icon,ellipsisIcon:p?.icon},{color:"neutral",variant:"outline",activeColor:"primary",activeVariant:"solid",size:"md",showControls:!0,disabled:!1,firstIcon:A.icons.chevronDoubleLeft,prevIcon:A.icons.chevronLeft,nextIcon:A.icons.chevronRight,lastIcon:A.icons.chevronDoubleRight,ellipsisIcon:A.icons.ellipsis})}function qe(e){const{properties:t}=e,{position:n,arrow:i}=d(t),o=z({side:v(n)},{side:"bottom"}),a=[C("content",[P])],r=f(e,{type:"INSTANCE",name:M,visible:!0});return r&&a.unshift(k(r)),m("UPopover",{content:o,arrow:i==="True"},{arrow:!1},a)}function Ge(e){const{properties:t}=e,{color:n,size:i,orientation:o,value:a,indicator:r}=d(t);return m("UProgress",{modelValue:Number.parseInt(a,10),status:r,size:i,color:v(n),orientation:v(o)},{status:!1,size:"md",color:"primary",orientation:"horizontal"})}function Ke(e){const{properties:t}=e,{color:n,state:i,label:o,description:a,descriptionSlot:r}=d(t);return z({label:o,description:a&&r||void 0,disabled:i==="Disabled",color:v(n)},{color:"primary",disabled:!1})}function _e(e){const{properties:t}=e,{size:n,align:i,legend:o,required:a}=d(t),r=G(e,{type:"INSTANCE",name:"Radio",visible:!0}).map(Ke),l=j(r,"color"),s=r.every(c=>c.disabled);return s&&r.forEach(c=>{delete c.disabled}),m("URadioGroup",{legend:o,items:r,size:n,color:l,orientation:v(i),disabled:s,required:a},{size:"md",color:"primary",orientation:"horizontal",disabled:!1,required:!1})}const ne={SelectOutline:"outline",SelectSoft:"soft",SelectNone:"none",SelectGhost:"ghost",SelectSubtle:"subtle"},Ve=Object.keys(ne);function oe(e,t={}){const{name:n,properties:i}=e,o=ne[n],{color:a,size:r,state:l,leadingSlot:s,placeholder:c,placeholderLabel:u,iconLeadingName:p,iconTrailingName:h}=d(i),g=s==="Icon"?I(p?.name):void 0,b=I(h?.name),N=s==="Avatar"?D():void 0;return m("USelect",{placeholder:c?u:void 0,color:v(a),variant:o,size:r,icon:g,trailingIcon:b,avatar:N,disabled:l==="Disabled"},{color:"primary",variant:"outline",size:"md",trailingIcon:A.icons.chevronDown,disabled:!1,...t})}function He(e){const{properties:t}=e,{state:n,leadingSlot:i,label:o,iconName:a}=d(t);return z({label:o,icon:i==="Icon"?I(a?.name):void 0,avatar:i==="Avatar"?D():void 0,disabled:n==="Disabled",selected:n==="Selected"},{disabled:!1})}function Je(e){const t=f(e,{type:"FRAME",name:"SelectMenu",visible:!0}),n=t?f(t,{type:"FRAME",name:"Container",visible:!0}):void 0,i=n?y(n,p=>p.type==="FRAME"&&p.name==="Title"||p.type==="INSTANCE"&&p.name==="SelectMenuItem"&&p.visible===!0).map(p=>p.type==="FRAME"?{label:f(p,{type:"TEXT"})?.characters,type:"label"}:He(p)):[],o=[],a=f(e,{type:"INSTANCE",name:Ve,visible:!0}),r=t?f(t,{type:"INSTANCE",name:"Input",visible:!0}):void 0,l=r?f(r,{type:"INSTANCE",name:x,visible:!0}):void 0,{content:s,...c}=a?oe(a).props:{},u=l?O(l,{placeholder:"Search...",variant:"none"}).props:{};return m("USelectMenu",{...c,items:i,searchInput:u},{},o)}function We(e){const{properties:t}=e,{color:n,size:i,orientation:o,separator:a,slot:r,iconName:l,span:s}=d(t),c=r==="Avatar"?f(e,{type:"INSTANCE",name:"Avatar",visible:!0}):void 0,u=c?de(c):void 0;return m("USeparator",{label:r==="Span"&&s||void 0,icon:r==="Icon"&&I(l?.name)||void 0,avatar:u,color:v(n),size:i,type:v(a),orientation:v(o)},{color:"neutral",size:"xs",type:"solid",orientation:"horizontal"})}function Ze(e){return m("USkeleton",{},{})}function Qe(e){const{properties:t}=e,{variant:n,overlay:i}=d(t),o=E(e,{type:"FRAME",name:"Header",visible:!0}),a=E(e,{type:"FRAME",name:"Body",visible:!0}),r=E(e,{type:"FRAME",name:"Footer",visible:!0}),l=E(e,{type:"FRAME",name:"Title and description",visible:!0}),s=o?f(o,{type:"INSTANCE",name:M,visible:!0}):void 0,c=s?U(s,{size:"md",color:"neutral",variant:"ghost"}):!1,{icon:u,square:p,...h}=c||{},[g,b]=l?y(l,{type:"TEXT",visible:!0}):[],N=[];return a&&N.push(C("body",[P])),r&&N.push(C("footer",[L])),m("USlideover",{title:g?.characters,description:b?.characters,overlay:i==="True",side:v(n),close:c?Object.keys(h).length>0?h:!0:!1,closeIcon:u},{overlay:!0,side:"right",close:!0,closeIcon:A.icons.close},N)}function Ye(e){const{properties:t}=e,{color:n,size:i,orientation:o,state:a,indicatorPosition:r,indicator2:l}=d(t),s=Number(r);return m("USlider",{modelValue:l?[0,s]:s,color:v(n),size:i,orientation:v(o),disabled:a==="Disabled"},{color:"primary",size:"md",orientation:"horizontal",disabled:!1})}function et(e){const{properties:t}=e,{variant:n,state:i,iconName:o}=d(t,{"\u{1F6A6}State":"state"});return z({icon:n==="Icon"?I(o?.name):void 0,disabled:i==="Disabled"},{disabled:!1})}function tt(e){const{properties:t}=e,{color:n,size:i,step:o,orientation:a}=d(t),r=y(e,{type:"FRAME",name:/^Step/,visible:!0}).map(l=>{const s=f(l,{type:"INSTANCE",name:"Stepper_Item",visible:!0}),c=f(l,{type:"FRAME",name:"Title + description",visible:!0}),[u,p]=c?y(c,{type:"TEXT",visible:!0}):[];return s?{title:u?.characters,description:p?.characters,...et(s)}:void 0}).filter(l=>l!=null);return m("UStepper",{modelValue:Number(o)-1,items:r,color:v(n),size:i,orientation:v(a)},{color:"primary",size:"md",orientation:"horizontal"})}function it(e){const{properties:t}=e,{color:n,size:i,state:o,title:a,showDescription:r,description:l,defaultIcon:s,defaultIconName:c,activeIcon:u,activeIconName:p,required:h}=d(t,{"\u21B3 Description":"showDescription"});return m("USwitch",{label:a,description:r&&l||void 0,color:v(n),size:i,checkedIcon:s?I(p?.name):void 0,uncheckedIcon:u?I(c?.name):void 0,disabled:o==="Disabled",required:h},{color:"primary",size:"md",disabled:!1,required:!1})}function nt(e){const{properties:t}=e,{state:n,leadingSlot:i,avatar:o,icon:a,iconName:r,label:l}=d(t);return z({label:l,icon:i==="Icon"&&a?I(r?.name):void 0,avatar:i==="Avatar"&&o?D():void 0,disabled:n==="Disabled"},{disabled:!1})}function ot(e){const{properties:t}=e,{color:n,size:i,variant:o,align:a}=d(t),r=[],l=[];return y(e,{type:"INSTANCE",name:"Tab",visible:!0}).forEach(s=>{const c=nt(s),u=f(s,{type:"INSTANCE",name:"Badge",visible:!0}),p=u?K(u):void 0;if(p){const h=ce(c.label||"");c.slot=h,r.push(C(h,[p]))}l.push(c)}),m("UTabs",{items:l,color:v(n),variant:v(o),size:i,orientation:v(a)},{color:"primary",variant:"pill",size:"md",orientation:"horizontal"},r)}function rt(e){const{properties:t}=e,{color:n,size:i,variant:o,state:a,placeholder:r,placeholderSlot:l}=d(t);return m("UTextarea",{placeholder:r?l:void 0,color:v(n),variant:v(o),size:i,disabled:a==="Disabled"},{color:"primary",variant:"outline",size:"md",disabled:!1})}function at(e){const{properties:t}=e,{color:n,leadingSlot:i,description:o,actions:a,title:r,showDescription:l,leadingIconName:s}=d(t,{"\u{1F441}\uFE0F Description":"showDescription"}),c=f(e,{type:"FRAME",name:"Content",visible:!0}),u=f(c||e,{type:"INSTANCE",name:M}),p=u?U(u,{size:"md",color:"neutral",variant:"link"}):!1,h=p?p.icon:void 0,g=a?E(e,{type:"FRAME",name:"Actions"}):null,b=(g?y(g,{type:"INSTANCE",name:M})||[]:[]).map(N=>U(N));return m("UToast",{title:r,description:l&&o||void 0,icon:i==="Icon"?I(s?.name):void 0,avatar:i==="Avatar"?D():void 0,color:v(n),close:p,closeIcon:h,actions:b.length>0?b:void 0},{color:"primary",close:!0,closeIcon:A.icons.close})}const lt={top:"bottom",right:"left",bottom:"top",left:"right",none:"bottom"};function st(e){const{properties:t}=e,{arrowPlacement:n,label:i}=d(t),o=z({side:lt[v(n)]},{side:"bottom"}),a=_(e,{size:"sm"});return m("UTooltip",{text:i,content:o,arrow:n!=="None",kbds:a},{arrow:!1})}function re(e,t){return e.reduce((n,i)=>({...n,[i]:t}),{})}const ct={Accordion:pe,Alert:ve,Avatar:X,AvatarGroup:be,Badge:K,Breadcrumb:fe,...re(M,k),ButtonGroup:ge,Calendar:Ie,Card:Ne,Carousel:ye,Checkbox:Se,Chip:Ae,Collapsible:Te,CommandPalette:Me,Drawer:we,DropdownMenu:Fe,FormField:Re,Icon:J,...re(x,O),InputMenu:Le,InputNumber:ee,Kbd:Y,Link:Pe,Modal:xe,NavigationMenu:je,Pagination:Xe,PinInput:te,Popover:qe,Progress:Ge,RadioGroup:_e,Select:oe,SelectMenu:Je,Separator:We,Skeleton:Ze,Slideover:Qe,Slider:Ye,Stepper:tt,Switch:it,Tabs:ot,TextArea:rt,Toast:at,Tooltip:st},pt=({component:e})=>{try{if(e.children.length===1&&e.children[0].type==="VECTOR"&&e.children[0].name==="Vector")return J(e);const t=ct[e.name.replaceAll(" ","")];return t?t(e):""}catch(t){return console.error(t),""}},ut={name:"Nuxt UI",code:{component:{title:"Component",lang:"vue",transformComponent:pt}}};export{ut as plugin};
