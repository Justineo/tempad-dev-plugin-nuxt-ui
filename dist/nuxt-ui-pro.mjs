function Nt(e){return e}function J(e,n,t){return{name:e,props:n??{},children:t??[]}}function X(e,n){if(n===void 0)return!0;if(typeof e=="string"){if(Array.isArray(n))return n.includes(e);if(n instanceof RegExp)return n.test(e)}return e===n}function $(e,n){return typeof n=="function"?n(e):X(e.type,n.type)&&X(e.name,n.name)&&X(e.visible,n.visible??!0)}function g(e,n){return e.children.find(t=>$(t,n))??null}function N(e,n){return e.children.filter(t=>$(t,n))}function A(e,n){for(const t of e.children){if($(t,n))return t;if("children"in t){const o=A(t,n);if(o)return o}}return null}function O(e,n){const t=[];for(const o of e.children)$(o,n)&&t.push(o),"children"in o&&t.push(...O(o,n));return t}function k(e,n){if(n.length===0)return[];let t=[e];for(const o of n){const i=new Set,r=[];for(const a of t)if("children"in a)if(i.add(a),o.query==="child"||o.query==="one"){const l=o.query==="child"?g(a,o):A(a,o);l&&!i.has(l)&&(i.add(l),r.push(l))}else{const l=o.query==="children"?N(a,o):O(a,o);for(const s of l)i.has(s)||(i.add(s),r.push(s))}t=r}return t}function j(e,n){return k(e,n)[0]}function pe(e){return Array.isArray(e)?e.slice():e instanceof Object?{...e}:e}function ue(e,n){let t={};return Object.keys(e||t).forEach(o=>t[n(e[o],o)]=e[o]),t}function me(e,...n){const t=pe(e)??{};for(const o of n)delete t[o];return t}function Z(e){return m("UIcon",{name:b(e.name)},{})}function b(e){if(e)return`i-lucide-${e}`}function u(e,n){return ue(e,(t,o)=>{if(n&&o in n)return n[o]??o;const i=o.replace(/^[^ ]+ /,"").replace(/[ /]+(.)/g,(r,a)=>a.toUpperCase());return i.charAt(0).toLowerCase()+i.slice(1)})}function E(e,n,t){const o=t?n:null,i=t??n;return J("template",{[`#${e}`]:o??!0},i)}function Q(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/(\d)([a-z])/gi,"$1-$2").replace(/([a-z])(\d)/gi,"$1-$2").replace(/[_\s]/g,"-").toLowerCase()}function h(e){return e.toLowerCase()}function C(e,n){const t={};for(const o in e)e[o]!==void 0&&e[o]!==n[o]&&(t[o]=e[o]);return t}const B="Lorem ipsum",P="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";function m(e,n,t,o){return J(e,C(n,t),o)}function _(e,n){return e.find(t=>t[n]!=null)?.[n]}function K(e,n){return e.reduce((t,o)=>({...t,[o]:n}),{})}function Y(e){return e.type==="INSTANCE"&&e.children.length===1&&e.children[0].type==="VECTOR"&&e.children[0].name==="Vector"}function he(e){return({component:n})=>{try{if(Y(n))return Z(n);const t=e[n.name.replaceAll(" ","")];return t?t(n):""}catch(t){return console.error(t),""}}}function fe(e){return/^\d+$/.test(String(e))}const I={icons:{arrowRight:"i-lucide-arrow-right",arrowLeft:"i-lucide-arrow-left",check:"i-lucide-check",chevronDoubleRight:"i-lucide-chevrons-right",chevronDown:"i-lucide-chevron-down",chevronDoubleLeft:"i-lucide-chevrons-left",chevronRight:"i-lucide-chevron-right",chevronLeft:"i-lucide-chevron-left",close:"i-lucide-x",ellipsis:"i-lucide-ellipsis",minus:"i-lucide-minus",plus:"i-lucide-plus",search:"i-lucide-search"}};function ve(e){const n=N(e,{type:"INSTANCE",name:"Collapsible_panel"});let t=0;const o=n.map(i=>{const{properties:r}=i,{state:a,label:l,description:s,iconLeading:c,iconLeadingName:d,iconTrailingName:p}=u(r);return a==="Open"&&t++,C({label:l||B,content:s||P,icon:c?b(d.name):void 0,trailingIcon:b(p.name),disabled:a==="Disable"},{disabled:!1,trailingIcon:I.icons.chevronDown})});return m("UAccordion",{items:o,type:t>1?"multiple":"single"},{type:"single"})}function G(e,n={}){const{variant:t,size:o,iconName:i,chipPosition:r}=u(e.properties),a=g(e,{type:"TEXT"})?.characters,l=m("UAvatar",{icon:t==="Icon"?b(i.name):void 0,alt:t==="Alt"?a:void 0,...t==="Image"?w():{},size:o},{size:"md",...n});if(r==="None")return l;const s=h(r);return m("UChip",{inset:!0,position:s},{position:"top-right"},[l])}const ee=["benjamincanac","romhml","smarroufin","atinux","Haythamasalama","hywax","danielroe","sandros94","malik-jouda","connerblanton","antfu","Justineo"];function be(e){return{src:`https://github.com/${e}.png`,alt:`@${e}`}}function w(){return be(ee[Math.floor(Math.random()*ee.length)])}function ge(e,n={}){const{props:t,children:o}=G(e,n),i=o[0];return i&&typeof i!="string"&&i.name==="UAvatar"?i.props:t}const te={ButtonPrimary:"primary",ButtonSecondary:"secondary",ButtonSuccess:"success",ButtonInfo:"info",ButtonWarning:"warning",ButtonError:"error",ButtonNeutral:"neutral"},T=Object.keys(te);function F(e,n={}){const{variant:t,size:o,state:i,square:r,slot:a,iconLeading:l,iconLeadingName:s,iconTrailing:c,iconTrailingName:d,avatarLeading:p}=u(e.properties),f=te[e.name],v=a==="Icon"&&l?b(s.name):void 0,y=c?b(d.name):void 0,z=a==="Avatar"&&p?w():void 0,D=A(e,{type:"TEXT"})?.characters;return m("UButton",{variant:h(t),color:f,size:o,square:r==="True",icon:v,trailingIcon:y,avatar:z,disabled:i==="Disabled"},{color:"primary",variant:"solid",size:"md",square:!1,disabled:!1,...n},D?[D]:[])}function M(e,n={}){const{props:t,children:o}=F(e,n),i=o.map(r=>typeof r=="string"?r:void 0).filter(Boolean).join("");return{...i?{label:i}:{},...t}}function ye(e){const{props:{size:n,...t},children:o}=F(e);return m("UButton",t,{},o)}function Ie(e){const{color:n,variant:t,leadingSlot:o,showDescription:i,action:r,title:a,description:l,closeButton:s,icon:c,iconName:d}=u(e.properties,{"\u{1F441}\uFE0F Description":"showDescription"}),p=g(e,{type:"INSTANCE",name:T}),f=s&&p?M(p,{size:"md",color:"neutral",variant:"link"}):!1,v=f?f.icon:void 0,y=r==="True"?k(e,[{query:"one",type:"FRAME",name:"Actions"},{query:"children",type:"INSTANCE",name:T}]).map(z=>M(z,{size:"xs"})):[];return m("UAlert",{title:a,description:i&&l||void 0,icon:o==="Icon"&&c?b(d.name):void 0,avatar:o==="Avatar"?w():void 0,color:h(n),variant:h(t),close:f,closeIcon:v,actions:y.length>0?y:void 0},{color:"primary",variant:"solid",close:!1,closeIcon:I.icons.close})}function Ne(e){const{size:n}=u(e.properties),t=N(e,{type:"INSTANCE",name:"Avatar"}).map(r=>G(r));t.forEach(r=>{if("size"in r.props){const{size:a,...l}=r.props;r.props=l}});const o=t.at(-1)?.props,i=!Number.isNaN(Number.parseInt(o?.alt||"",10));return m("UAvatarGroup",{size:n,max:i?t.length-1:void 0},{size:"md"},i?t.slice(0,-1):t)}function V(e,n={}){const{color:t,variant:o,size:i,roundedFull:r,label:a,iconLeading:l,iconLeadingName:s,iconTrailing:c,iconTrailingName:d}=u(e.properties),p=l&&c?{leadingIcon:b(s.name),trailingIcon:b(d.name)}:{icon:l?b(s.name):c?b(d.name):void 0,trailing:c};return m("UBadge",{class:r==="True"?"rounded-full":void 0,color:h(t),variant:h(o),size:i,...p},{color:"primary",variant:"solid",size:"md",trailing:!1,...n},a?[a]:[])}function Te(e,n={}){const{props:t,children:o}=V(e,n);return{label:o.map(i=>typeof i=="string"?i:void 0).filter(Boolean).join("")||void 0,...t}}const Se={"\u2318":"meta","\u2303":"ctrl","\u2325":"alt","\u229E":"win","\u21E7":"shift","\u21B5":"enter","\u2326":"delete","\u232B":"backspace","\u238B":"escape","\u21E5":"tab","\u21EA":"capslock","\u2191":"arrowup","\u2192":"arrowright","\u2193":"arrowdown","\u2190":"arrowleft","\u21DE":"pageup","\u21DF":"pagedown","\u2196":"home","\u2198":"end"};function ne(e){const{size:n,variant:t}=u(e.properties),o=g(e,{type:"TEXT"})?.characters;return m("UKbd",{value:o?Se[o]||o:void 0,variant:h(t),size:n},{variant:"outline",size:"md"})}function Ae(e,n={}){const{props:t}=ne(e);return C(t,n)}function H(e,n={}){const t=k(e,[{query:"child",type:"FRAME",name:"Kbd"},{query:"children",type:"INSTANCE",name:"Kbd"}]).map(o=>Ae(o,n));if(t.length!==0)return t.every(o=>Object.keys(o).length===1&&o.value)?t.map(o=>o.value):t.length>0?t:void 0}function Ee(e){const{properties:n}=e,{state:t,leadingSlot:o,trailingSlot:i,label:r,iconLeadingName:a,iconTrailingName:l}=u(n);return C({label:r,icon:o==="Icon"?b(a.name):void 0,avatar:o==="Avatar"?w():void 0,kbds:i==="Kbd"?H(e):void 0,type:i==="Icon"&&l.name==="check"?"checkbox":"link",checked:i==="Icon"&&l.name==="check",disabled:t==="Disabled"},{type:"link",checked:!1,disabled:!1})}const Ce={"Bottom-start":"bottom","Bottom-end":"bottom",Right:"right","Top-start":"top",Left:"left"};function oe(e,n={}){const{size:t,variant:o,alignment:i,arrow:r}=u(e.properties),a=C({side:Ce[i]},{side:"bottom"}),l=k(e,[{query:"child",type:"FRAME",name:"DropdownMenu"},{query:"children",type:"FRAME",name:/^Container/}]).map(c=>N(c,{type:"INSTANCE",name:"DropdownMenuItem"}).map(Ee)),s=[];if(o==="Button"){const c=r==="True"?g(e,{type:"FRAME",name:"Button + arrow"}):e,d=c?g(c,{type:"INSTANCE",name:T}):void 0;if(d){const p=F(d);p.props={...p.props,...n.button},s.push(p)}}else if(o==="Avatar"){const c=r==="True"?g(e,{type:"FRAME",name:"Avatar + arrow"}):e,d=c?g(c,{type:"INSTANCE",name:"Avatar"}):void 0;d&&s.push(G(d))}return m("UDropdownMenu",{size:t,items:l,content:a,arrow:r==="True"},{size:"md",arrow:!1},s)}function ze(e){const{leadingSlot:n,divider:t,separatorIconName:o,separatorSlot:i}=u(e.properties),r=N(e,{name:/^Link|^DropdownMenu/}),a=[],l=[];return r.forEach(s=>{const{type:c,name:d}=s;if(c==="FRAME"&&d.startsWith("Link")){const p=j(s,[{query:"child",type:"INSTANCE",name:"Link"},{query:"child",type:"TEXT",name:"Label"}])?.characters||void 0,f=n==="Icon"&&Y(s.children[0])?b(s.children[0].name):void 0;a.push({label:p,icon:f})}else if(c==="INSTANCE"&&d==="Link")a.push({label:g(s,{type:"TEXT",name:"Label"})?.characters||void 0});else if(c==="INSTANCE"&&d==="DropdownMenu"){const p=oe(s,{button:{icon:void 0,":icon":"item.icon"}});if(!p){a.push({icon:I.icons.ellipsis});return}const{items:f,...v}=p.props;p.props=v,p.props[":items"]="item.children",a.push({icon:I.icons.ellipsis,slot:"dropdown",children:f}),l.push(E("dropdown","{ item }",[p]))}}),t==="Span"&&i&&l.push(E("separator",[i])),m("UBreadcrumb",{items:a,separatorIcon:t==="Icon"?b(o.name):void 0},{separatorIcon:I.icons.chevronRight},l)}const ie={InputOutline:"outline",InputSoft:"soft",InputNone:"none",InputGhost:"ghost",InputSubtle:"subtle"},L=Object.keys(ie);function q(e,n={}){const t=ie[e.name],{color:o,size:i,state:r,leadingSlot:a,trailingSlot:l,placeholder:s,placeholderLabel:c,completed:d,completedLabel:p,iconLeadingName:f,iconTrailingName:v,span:y}=u(e.properties),z=a==="Icon"?b(f.name):void 0,D=l==="Icon"?b(v.name):void 0,x=a==="Avatar"?w():void 0,U=[];return a==="Span"&&y?U.push(E("leading",[y])):l==="Span"&&y&&U.push(E("trailing",[y])),m("UInput",{type:d&&p&&/^\*+$/.test(p)?"password":"text",placeholder:s?c:void 0,color:h(o),variant:t,size:i,icon:z,trailingIcon:D,avatar:x,disabled:r==="Disabled"},{type:"text",color:"primary",variant:"outline",size:"md",disabled:!1,...n},U)}function Me(e){const{variant:n,size:t,orientation:o}=u(e.properties),i=[];if(n==="Buttons"){const r=N(e,{type:"INSTANCE",name:T});i.push(...r.map(a=>ye(a)))}else{const r=j(e,[{query:"child",type:"INSTANCE",name:"Input"},{query:"child",type:"INSTANCE",name:L}]);r&&i.push(q(r));const a=g(e,{type:"INSTANCE",name:T});a&&i.push(F(a))}return m("UButtonGroup",{size:t,orientation:h(o)},{size:"md",orientation:"horizontal"},i)}function we(e){const{color:n,variant:t,dateValue:o}=u(e.properties),i=Number(o);return{color:h(n),selected:t==="Data-selected",date:Number.isNaN(i)?0:i}}function De(e){const{color:n,size:t,numberOfMonths:o,monthControls:i,yearControls:r}=u(e.properties),a=Number(o),l=O(e,{type:"INSTANCE",name:"calendar-item"}).map(d=>we(d)),{range:s,multiple:c}=Ue(l);return m("UCalendar",{color:h(n),size:t,range:s,multiple:c,numberOfMonths:Number.isNaN(a)?1:a,monthControls:i,yearControls:r},{color:"primary",size:"md",range:!1,multiple:!1,numberOfMonths:1,monthControls:!0,yearControls:!0})}function Ue(e){let n=-1;for(let t=0;t<e.length;t++)if(e[t].selected){if(n!==-1&&t-n>1)return{range:!1,multiple:!0};if(t>0&&e[t-1].selected)return{range:!0,multiple:!1};n=t}return{range:!1,multiple:!1}}function ke(e){const n=A(e,{type:"FRAME",name:"Header"}),t=A(e,{type:"FRAME",name:"Body"}),o=A(e,{type:"FRAME",name:"Footer"});return m("UCard",{},{},[...n?[E("header",[B])]:[],...t?[P]:[],...o?[E("footer",[B])]:[]])}function Fe(e){const{variant:n,pagination:t,prevNext:o}=u(e.properties);let i={};if(o){const[r,a]=k(e,[{query:"child",type:"FRAME",name:"Carousel + prev/next"},{query:"children",type:"INSTANCE",name:T}]),l={size:"md",color:"neutral",variant:"link"},{icon:s,...c}=r?M(r,{...l,icon:I.icons.arrowLeft}):{},{icon:d,...p}=a?M(a,{...l,icon:I.icons.arrowRight}):{};i={prev:c,next:p,prevIcon:s,nextIcon:d}}return m("UCarousel",{items:[],arrows:o,dots:t,fade:n==="Fade",...i},{arrows:!1,dots:!1,fade:!1})}function Re(e){const{color:n,size:t,state:o,label:i,description:r,descriptionSlot:a,required:l,icon:s}=u(e.properties);return m("UCheckbox",{label:i,description:r?a:void 0,color:h(n),size:t,icon:b(s.name),disabled:o==="Disabled",required:l},{color:"primary",size:"md",icon:I.icons.check,disabled:!1,required:!1})}function Be(e){const{color:n,size:t,isLabel:o,label:i}=u(e.properties);return m("UChip",{text:o==="True"?i:void 0,color:h(n),size:t},{color:"primary",size:"md"})}function Pe(e){const{open:n}=u(e.properties),t=g(e,{type:"INSTANCE",name:T});return m("UCollapsible",{open:n},{open:!1},t?[F(t)]:[])}function Le(e){const{size:n,state:t}=u(e.properties);return m("UColorPicker",{size:n,disabled:t==="Disabled"},{size:"md",disabled:!1})}function qe(e){const{state:n,leadingSlot:t,trailingSlot:o,description:i,label:r,descriptionSlot:a,iconLeadingName:l,iconTrailingName:s}=u(e.properties);return C({label:r,suffix:i&&a||void 0,icon:t==="Icon"?b(l.name):void 0,avatar:t==="Avatar"?w():void 0,kbds:o==="Kbd"?H(e):void 0,active:o==="Icon"&&s.name==="check",disabled:n==="Disabled"},{active:!1,disabled:!1})}function xe(e){const n=A(e,{type:"INSTANCE",name:L}),t=n?q(n):void 0,{icon:o,placeholder:i,disabled:r}=t?.props||{},a=k(e,[{query:"child",type:"FRAME",name:"CommandPalette"},{query:"children",type:"FRAME",name:/^Container/}]);let l=0;const s=a.map(y=>{const z=g(y,{type:"TEXT",name:"Title"})?.characters,D=N(y,{type:"INSTANCE",name:"CommandPaletteItem"}).map(x=>{const U=qe(x);return U.active&&l++,U});return{id:Q(z||""),label:z,items:D}}),c=A(e,{type:"INSTANCE",name:T}),d=c?M(c,{size:"md",color:"neutral",variant:"ghost"}):!1,{icon:p,square:f,...v}=d||{};return m("UCommandPalette",{icon:o,placeholder:i,close:c?Object.keys(v).length>0?v:!0:!1,closeIcon:p,groups:s,multiple:l>1,disabled:r},{icon:I.icons.search,placeholder:"Type a command or search...",close:!1,closeIcon:I.icons.close,multiple:!1,disabled:!1})}function Oe(e){const{direction:n,overlay:t,handle:o,heading:i,title:r,showDescription:a,description:l,buttons:s}=u(e.properties,{"\u{1F441}\uFE0F Description":"showDescription"}),c=[E("body",[P])];if(s){const d=k(e,[{query:"one",type:"FRAME",name:"Buttons"},{query:"children",type:"INSTANCE",name:T}]);if(d.length>0){const p=d.map(f=>{const v=F(f);return v.props.class="justify-center",v});c.push(E("footer",p))}}return m("UDrawer",{title:i?r:void 0,description:a?l:void 0,overlay:t==="True",handle:o,direction:h(n)},{overlay:!0,handle:!0,direction:"bottom"},c)}function re(e){const{color:n,variant:t,size:o,orientation:i,state:r,highlight:a,placeholder:l,placeholderText:s}=u(e.properties),[c,d]=N(e,{type:"INSTANCE",name:T}).map(z=>M(z,{variant:"link",square:!0,size:o})),{icon:p,...f}=c||{},{icon:v,...y}=d||{};return m("UInputNumber",{placeholder:l&&s||void 0,color:h(n),variant:h(t),size:o,highlight:a==="True",orientation:h(i),increment:y,incrementIcon:v,decrement:f,decrementIcon:p,disabled:r==="Disabled"},{color:"primary",variant:"outline",size:"md",highlight:!1,orientation:"horizontal",incrementIcon:I.icons.plus,decrementIcon:I.icons.minus,disabled:!1})}function $e(e){const{color:n,variant:t,state:o,highlight:i,placeholder:r,placeholderText:a,completed:l,completedText:s,mask:c}=u(e.properties,{"\u{1F6A6}State":"state"});return{color:h(n),variant:h(t),highlight:i==="True",disabled:o==="Disabled",placeholder:r&&a||void 0,value:l&&s||void 0,mask:c}}function ae(e){const n=N(e,{type:"INSTANCE",name:"PinInputItem"}).map($e),t=n.some(d=>d.value&&!/^\d$/.test(d.value))?"text":"number",o=n.find(d=>!!d.placeholder)?.placeholder,i=n.some(d=>d.mask),{size:r}=u(e.properties),{color:a,variant:l,highlight:s,disabled:c}=n[0];return m("UPinInput",{color:a,variant:l,size:r,length:n.length,highlight:s,type:t,disabled:c,placeholder:o,mask:i},{color:"primary",variant:"outline",size:"md",length:5,highlight:!1,type:"text",disabled:!1,mask:!1})}function je(e){const{size:n,input:t,error:o,label:i,required:r,hint:a,hintSlot:l,help:s,helpSlot:c,description:d,descriptionSlot:p}=u(e.properties),f=[];if(t==="Input"){const v=A(e,{type:"INSTANCE",name:L});v&&f.push(q(v))}else if(t==="InputNumber"){const v=A(e,{type:"INSTANCE",name:"InputNumber"});v&&f.push(re(v))}else if(t==="PinInput"){const v=A(e,{type:"INSTANCE",name:"PinInput"});v&&f.push(ae(v))}return m("UFormField",{label:i,description:d&&p||void 0,help:o==="False"&&s&&c||void 0,error:o==="True"&&(c||!0),hint:a&&l||void 0,size:n,required:r},{error:!1,size:"md",required:!1},f)}function _e(e){const{state:n,leadingSlot:t,label:o,iconName:i}=u(e.properties);return C({label:o,icon:t==="Icon"?b(i.name):void 0,avatar:t==="Avatar"?w():void 0,chip:t==="Dot"?{color:"primary"}:void 0,disabled:n==="Disabled",selected:n==="Selected"},{disabled:!1,selected:!1})}function Ge(e){const{size:n}=u(e.properties),t=g(e,{type:"FRAME",name:"InputMenu"}),o=t?N(t,l=>l.type==="TEXT"&&l.name==="Title"||l.type==="INSTANCE"&&l.name==="InputMenuItem"&&l.visible===!0).map(l=>l.type==="TEXT"?{label:l.characters,type:"label"}:_e(l)):[],i=[],r=g(e,{type:"INSTANCE",name:L}),a=r?q(r).props:{};return m("UInputMenu",{size:n,items:o,...a},{size:"md"},i)}function Xe(e){const{color:n,state:t,label:o}=u(e.properties);return m("ULink",{active:h(n)==="primary",disabled:t==="Disabled"},{active:!1,disabled:!1},[o])}function Ke(e){const{header:n,body:t,footer:o}=u(e.properties);return m("UModal",{},{},[...n?[E("header",[B])]:[],...t?[E("body",[P])]:[],...o?[E("footer",[B])]:[]])}function Ve(e){const{icon:n,iconName:t,title:o,description:i,descriptionSlot:r}=u(e.properties);return{label:o,description:i&&r||void 0,icon:n?b(t.name):void 0}}function He(e){const{color:n,variant:t,state:o,active:i,highlight:r,iconLeading:a,iconLeadingName:l,iconTrailing:s,badge:c,label:d}=u(e.properties),p=c?j(e,[{query:"child",type:"FRAME",name:"Container"},{query:"child",type:"INSTANCE",name:"Badge"}]):void 0,f=p?Te(p,{size:"sm",color:"neutral",variant:"outline"}):void 0;let v=f;f&&Object.keys(f).length===1&&f.label!=null&&(String(Number(f.label))===f.label?v=Number(f.label):v=f.label);const y=s?O(e,{type:"INSTANCE",name:"NavigationMenu(DropdownItem)"}).map(Ve):void 0;return C({label:d,icon:a?b(l.name):void 0,badge:v,children:y,active:i==="True",disabled:o==="Disabled",variant:h(t),color:h(n),highlight:r==="True"},{active:!1,disabled:!1,variant:"pill",color:"primary",highlight:!1})}function We(e){const{orientation:n,highlight:t}=u(e.properties),o=N(e,{type:"INSTANCE",name:"NavigationMenuItem"}).map(He);return m("UNavigationMenu",{items:o.map(i=>me(i,"variant","color","highlight")),color:_(o,"color"),variant:_(o,"variant"),orientation:h(n),highlight:t==="True"||!!_(o,"highlight")},{color:"primary",variant:"pill",orientation:"horizontal",highlight:!1})}function le(e){if(!e)return[void 0,void 0];const[n,t]=e.split("-");return[n==="undefined"?void 0:n,t==="undefined"?void 0:t]}function Je(e){const{size:n}=u(e.properties),t=N(e,{type:"INSTANCE",name:T}).map(S=>M(S));let o=[];t.length>=5&&(o=[...t],o.splice(2,t.length-4),o=o.every(S=>!fe(S.label||""))?o:[]);const i=o.length===4,[r,a,l,s]=o,c=i?t.splice(2,t.length-4):t,d=c.find(({icon:S,label:R})=>S&&!/^\d+$/.test(R||"")),p=c.reduce((S,R)=>{const W=`${R.color}-${R.variant}`;return S[W]=(S[W]||0)+1,S},{}),f=Object.entries(p).sort(([,S],[,R])=>R-S),[v,y]=f.map(([S])=>S),[z,D]=le(v),[x,U]=le(y);return m("UPagination",{color:z,variant:D,activeColor:x,activeVariant:U,size:n,showControls:i,disabled:c.every(S=>S.disabled),firstIcon:r?.icon,prevIcon:a?.icon,nextIcon:l?.icon,lastIcon:s?.icon,ellipsisIcon:d?.icon},{color:"neutral",variant:"outline",activeColor:"primary",activeVariant:"solid",size:"md",showControls:!0,disabled:!1,firstIcon:I.icons.chevronDoubleLeft,prevIcon:I.icons.chevronLeft,nextIcon:I.icons.chevronRight,lastIcon:I.icons.chevronDoubleRight,ellipsisIcon:I.icons.ellipsis})}function Ze(e){const{position:n,arrow:t}=u(e.properties),o=C({side:h(n)},{side:"bottom"}),i=[E("content",[P])],r=g(e,{type:"INSTANCE",name:T});return r&&i.unshift(F(r)),m("UPopover",{content:o,arrow:t==="True"},{arrow:!1},i)}function Qe(e){const{color:n,size:t,orientation:o,value:i,indicator:r}=u(e.properties);return m("UProgress",{modelValue:Number.parseInt(i,10),status:r,size:t,color:h(n),orientation:h(o)},{status:!1,size:"md",color:"primary",orientation:"horizontal"})}function Ye(e){const{color:n,state:t,label:o,description:i,descriptionSlot:r}=u(e.properties);return C({label:o,description:i&&r||void 0,disabled:t==="Disabled",color:h(n)},{color:"primary",disabled:!1})}function et(e){const{size:n,align:t,legend:o,required:i}=u(e.properties),r=O(e,{type:"INSTANCE",name:"Radio"}).map(Ye),a=_(r,"color"),l=r.every(s=>s.disabled);return l&&r.forEach(s=>{delete s.disabled}),m("URadioGroup",{legend:o,items:r,size:n,color:a,orientation:h(t),disabled:l,required:i},{size:"md",color:"primary",orientation:"horizontal",disabled:!1,required:!1})}const se={SelectOutline:"outline",SelectSoft:"soft",SelectNone:"none",SelectGhost:"ghost",SelectSubtle:"subtle"},ce=Object.keys(se);function de(e,n={}){const t=se[e.name],{color:o,size:i,state:r,leadingSlot:a,placeholder:l,placeholderLabel:s,iconLeadingName:c,iconTrailingName:d}=u(e.properties),p=a==="Icon"?b(c.name):void 0,f=b(d.name),v=a==="Avatar"?w():void 0;return m("USelect",{placeholder:l?s:void 0,color:h(o),variant:t,size:i,icon:p,trailingIcon:f,avatar:v,disabled:r==="Disabled"},{color:"primary",variant:"outline",size:"md",trailingIcon:I.icons.chevronDown,disabled:!1,...n})}function tt(e){const{properties:n}=e,{state:t,leadingSlot:o,label:i,iconName:r}=u(n);return C({label:i,icon:o==="Icon"?b(r.name):void 0,avatar:o==="Avatar"?w():void 0,disabled:t==="Disabled",selected:t==="Selected"},{disabled:!1})}function nt(e){const n=g(e,{type:"FRAME",name:"SelectMenu"}),t=n?g(n,{type:"FRAME",name:"Container"}):void 0,o=t?N(t,d=>d.type==="FRAME"&&d.name==="Title"&&d.visible===!0||d.type==="INSTANCE"&&d.name==="SelectMenuItem"&&d.visible===!0).map(d=>d.type==="FRAME"?{label:g(d,{type:"TEXT"})?.characters,type:"label"}:tt(d)):[],i=[],r=g(e,{type:"INSTANCE",name:ce}),a=n?j(n,[{query:"child",type:"INSTANCE",name:"Input"},{query:"child",type:"INSTANCE",name:L}]):void 0,{content:l,...s}=r?de(r).props:{},c=a?q(a,{placeholder:"Search...",variant:"none"}).props:{};return m("USelectMenu",{...s,items:o,searchInput:c},{},i)}function ot(e){const{color:n,size:t,orientation:o,separator:i,slot:r,iconName:a,span:l}=u(e.properties),s=r==="Avatar"?g(e,{type:"INSTANCE",name:"Avatar"}):void 0,c=s?ge(s):void 0;return m("USeparator",{label:r==="Span"&&l||void 0,icon:r==="Icon"&&b(a.name)||void 0,avatar:c,color:h(n),size:t,type:h(i),orientation:h(o)},{color:"neutral",size:"xs",type:"solid",orientation:"horizontal"})}function it(e){return m("USkeleton",{},{})}function rt(e){const{variant:n,overlay:t}=u(e.properties),o=A(e,{type:"FRAME",name:"Header"}),i=A(e,{type:"FRAME",name:"Body"}),r=A(e,{type:"FRAME",name:"Footer"}),a=A(e,{type:"FRAME",name:"Title and description"}),l=o?g(o,{type:"INSTANCE",name:T}):void 0,s=l?M(l,{size:"md",color:"neutral",variant:"ghost"}):!1,{icon:c,square:d,...p}=s||{},[f,v]=a?N(a,{type:"TEXT"}):[],y=[];return i&&y.push(E("body",[P])),r&&y.push(E("footer",[B])),m("USlideover",{title:f?.characters,description:v?.characters,overlay:t==="True",side:h(n),close:s?Object.keys(p).length>0?p:!0:!1,closeIcon:c},{overlay:!0,side:"right",close:!0,closeIcon:I.icons.close},y)}function at(e){const{color:n,size:t,orientation:o,state:i,indicatorPosition:r,indicator2:a}=u(e.properties),l=Number(r);return m("USlider",{modelValue:a?[0,l]:l,color:h(n),size:t,orientation:h(o),disabled:i==="Disabled"},{color:"primary",size:"md",orientation:"horizontal",disabled:!1})}function lt(e){const{properties:n}=e,{variant:t,state:o,iconName:i}=u(n,{"\u{1F6A6}State":"state"});return C({icon:t==="Icon"?b(i.name):void 0,disabled:o==="Disabled"},{disabled:!1})}function st(e){const{color:n,size:t,step:o,orientation:i}=u(e.properties),r=N(e,{type:"FRAME",name:/^Step/}).map(a=>{const l=g(a,{type:"INSTANCE",name:"Stepper_Item"}),s=g(a,{type:"FRAME",name:"Title + description"}),[c,d]=s?N(s,{type:"TEXT"}):[];return l?{title:c?.characters,description:d?.characters,...lt(l)}:void 0}).filter(a=>a!=null);return m("UStepper",{modelValue:Number(o)-1,items:r,color:h(n),size:t,orientation:h(i)},{color:"primary",size:"md",orientation:"horizontal"})}function ct(e){const{color:n,size:t,state:o,title:i,showDescription:r,description:a,defaultIcon:l,defaultIconName:s,activeIcon:c,activeIconName:d,required:p}=u(e.properties,{"\u21B3 Description":"showDescription"});return m("USwitch",{label:i,description:r&&a||void 0,color:h(n),size:t,checkedIcon:l?b(d.name):void 0,uncheckedIcon:c?b(s.name):void 0,disabled:o==="Disabled",required:p},{color:"primary",size:"md",disabled:!1,required:!1})}function dt(e){const{state:n,leadingSlot:t,avatar:o,icon:i,iconName:r,label:a}=u(e.properties);return C({label:a,icon:t==="Icon"&&i?b(r.name):void 0,avatar:t==="Avatar"&&o?w():void 0,disabled:n==="Disabled"},{disabled:!1})}function pt(e){const{color:n,size:t,variant:o,align:i}=u(e.properties),r=[],a=[];return N(e,{type:"INSTANCE",name:"Tab"}).forEach(l=>{const s=dt(l),c=g(l,{type:"INSTANCE",name:"Badge"}),d=c?V(c):void 0;if(d){const p=Q(s.label||"");s.slot=p,r.push(E(p,[d]))}a.push(s)}),m("UTabs",{items:a,color:h(n),variant:h(o),size:t,orientation:h(i)},{color:"primary",variant:"pill",size:"md",orientation:"horizontal"},r)}function ut(e){const{color:n,size:t,variant:o,state:i,placeholder:r,placeholderSlot:a}=u(e.properties);return m("UTextarea",{placeholder:r?a:void 0,color:h(n),variant:h(o),size:t,disabled:i==="Disabled"},{color:"primary",variant:"outline",size:"md",disabled:!1})}function mt(e){const{color:n,leadingSlot:t,description:o,title:i,showDescription:r,leadingIconName:a}=u(e.properties,{"\u{1F441}\uFE0F Description":"showDescription"}),l=g(e,{type:"FRAME",name:"Content"}),s=g(l||e,{type:"INSTANCE",name:T}),c=s?M(s,{size:"md",color:"neutral",variant:"link"}):!1,d=c?c.icon:void 0,p=k(e,[{query:"one",type:"FRAME",name:"Actions"},{query:"children",type:"INSTANCE",name:T}]).map(f=>M(f,{size:"xs"}));return m("UToast",{title:i,description:r&&o||void 0,icon:t==="Icon"?b(a.name):void 0,avatar:t==="Avatar"?w():void 0,color:h(n),close:c,closeIcon:d,actions:p.length>0?p:void 0},{color:"primary",close:!0,closeIcon:I.icons.close})}const ht={top:"bottom",right:"left",bottom:"top",left:"right",none:"bottom"};function ft(e){const{properties:n}=e,{arrowPlacement:t,label:o}=u(n),i=C({side:ht[h(t)]},{side:"bottom"}),r=H(e,{size:"sm"});return m("UTooltip",{text:o,content:i,arrow:t!=="None",kbds:r},{arrow:!1})}const vt={Accordion:ve,Alert:Ie,Avatar:G,AvatarGroup:Ne,Badge:V,Breadcrumb:ze,...K(T,F),ButtonGroup:Me,Calendar:De,Card:ke,Carousel:Fe,Checkbox:Re,Chip:Be,Collapsible:Pe,ColorPicker:Le,CommandPalette:xe,Drawer:Oe,DropdownMenu:oe,FormField:je,Icon:Z,...K(L,q),InputMenu:Ge,InputNumber:re,Kbd:ne,Link:Xe,Modal:Ke,NavigationMenu:We,Pagination:Je,PinInput:ae,Popover:Ze,Progress:Qe,RadioGroup:et,...K(ce,de),SelectMenu:nt,Separator:ot,Skeleton:it,Slideover:rt,Slider:at,Stepper:st,Switch:ct,Tabs:pt,TextArea:ut,Toast:mt,Tooltip:ft};function bt(e){const{iconLeading:n,iconLeadingName:t,close:o,title:i,color:r}=u(e.properties),a=N(e,{type:"INSTANCE",name:T}),l=(o?a.slice(0,-1):a).map(d=>M(d,{color:"neutral",size:"xs"})),{icon:s,...c}=o?M(a.at(-1),{size:"md",color:"neutral",variant:"ghost"}):{};return m("UBanner",{color:h(r),icon:n?b(t.name):void 0,title:i,actions:l.length>0?l:void 0,close:o&&Object.keys(c).length>0?c:o,closeIcon:s},{color:"primary",close:!1,closeIcon:I.icons.close})}const gt={...vt,Banner:bt},yt=he(gt),It={name:"Nuxt UI Pro",code:{component:{title:"Component",lang:"vue",transformComponent:yt}}};export{It as plugin};
