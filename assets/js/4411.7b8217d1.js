(self.webpackChunkbhukamatha=self.webpackChunkbhukamatha||[]).push([["4411"],{7594:function(e,t){function n(e){let t,n=[];for(let s of e.split(",").map(e=>e.trim()))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,r]=t;if(s&&r){s=parseInt(s);let e=s<(r=parseInt(r))?1:-1;("-"===a||".."===a||"\u2025"===a)&&(r+=e);for(let t=s;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},2575:function(e,t,n){"use strict";n.d(t,{Z:()=>B});var s=n("5893"),a=n("7294"),r=n("7026"),o=n("4751"),i=n("3212");let l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function c(e){let{type:t,className:n,children:a}=e;return(0,s.jsx)("div",{className:(0,r.Z)(i.k.common.admonition,i.k.common.admonitionType(t),l.admonition,n),children:a})}function d(e){let{icon:t,title:n}=e;return(0,s.jsxs)("div",{className:l.admonitionHeading,children:[(0,s.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function u(e){let{children:t}=e;return t?(0,s.jsx)("div",{className:l.admonitionContent,children:t}):null}function m(e){let{type:t,icon:n,title:a,children:r,className:o}=e;return(0,s.jsxs)(c,{type:t,className:o,children:[a||n?(0,s.jsx)(d,{title:a,icon:n}):null,(0,s.jsx)(u,{children:r})]})}let h={icon:(0,s.jsx)(function(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},{}),title:(0,s.jsx)(o.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function p(e){return(0,s.jsx)(m,{...h,...e,className:(0,r.Z)("alert alert--secondary",e.className),children:e.children})}let f={icon:(0,s.jsx)(function(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},{}),title:(0,s.jsx)(o.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function x(e){return(0,s.jsx)(m,{...f,...e,className:(0,r.Z)("alert alert--success",e.className),children:e.children})}let j={icon:(0,s.jsx)(function(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},{}),title:(0,s.jsx)(o.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(e){return(0,s.jsx)(m,{...j,...e,className:(0,r.Z)("alert alert--info",e.className),children:e.children})}function g(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}let v={icon:(0,s.jsx)(g,{}),title:(0,s.jsx)(o.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})},y={icon:(0,s.jsx)(function(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},{}),title:(0,s.jsx)(o.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},k={icon:(0,s.jsx)(g,{}),title:(0,s.jsx)(o.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})},N={note:p,tip:x,info:b,warning:function(e){return(0,s.jsx)(m,{...v,...e,className:(0,r.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(m,{...y,...e,className:(0,r.Z)("alert alert--danger",e.className),children:e.children})},secondary:e=>(0,s.jsx)(p,{title:"secondary",...e}),important:e=>(0,s.jsx)(b,{title:"important",...e}),success:e=>(0,s.jsx)(x,{title:"success",...e}),caution:function(e){return(0,s.jsx)(m,{...k,...e,className:(0,r.Z)("alert alert--warning",e.className),children:e.children})}};function B(e){let t=function(e){let{mdxAdmonitionTitle:t,rest:n}=function(e){let t=a.Children.toArray(e),n=t.find(e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),r=t.filter(e=>e!==n);return{mdxAdmonitionTitle:n?.props.children,rest:r.length>0?(0,s.jsx)(s.Fragment,{children:r}):null}}(e.children),r=e.title??t;return{...e,...r&&{title:r},children:n}}(e),n=function(e){let t=N[e];return t?t:(console.warn(`No admonition component found for admonition type "${e}". Using Info as fallback.`),N.info)}(t.type);return(0,s.jsx)(n,{...t})}},5036:function(e,t,n){"use strict";n.d(t,{Z:()=>x});var s=n("5893");n("7294");var a=n("7026"),r=n("4751"),o=n("3212"),i=n("1183");let l="iconEdit_Z9Sw";function c(e){let{className:t,...n}=e;return(0,s.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.Z)(l,t),"aria-hidden":"true",...n,children:(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,s.jsxs)(i.Z,{to:t,className:o.k.common.editThisPage,children:[(0,s.jsx)(c,{}),(0,s.jsx)(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=n("9793");function m(e){let{lastUpdatedAt:t}=e,n=new Date(t),a=(0,u.P)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,s.jsx)(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,s.jsx)("b",{children:(0,s.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:a})})},children:" on {date}"})}function h(e){let{lastUpdatedBy:t}=e;return(0,s.jsx)(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,s.jsx)("b",{children:t})},children:" by {user}"})}function p(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,s.jsxs)("span",{className:o.k.common.lastUpdated,children:[(0,s.jsx)(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,s.jsx)(m,{lastUpdatedAt:t}):"",byUser:n?(0,s.jsx)(h,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}let f="lastUpdated_JAkA";function x(e){let{className:t,editUrl:n,lastUpdatedAt:r,lastUpdatedBy:o}=e;return(0,s.jsxs)("div",{className:(0,a.Z)("row",t),children:[(0,s.jsx)("div",{className:"col",children:n&&(0,s.jsx)(d,{editUrl:n})}),(0,s.jsx)("div",{className:(0,a.Z)("col",f),children:(r||o)&&(0,s.jsx)(p,{lastUpdatedAt:r,lastUpdatedBy:o})})]})}},5053:function(e,t,n){"use strict";n.d(t,{Z:()=>es});var s=n("5893"),a=n("7294"),r=n("65"),o=n("8766"),i=n("7131"),l=n("7026"),c=n("7844"),d=n("2007");function u(){let{prism:e}=(0,d.L)(),{colorMode:t}=(0,c.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var m=n("3212"),h=n("7594"),p=n.n(h);let f=/title=(?<quote>["'])(?<title>.*?)\1/,x=/\{(?<range>[\d,-]+)\}/,j={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},b={...j,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},g=Object.keys(j);function v(e,t){let n=e.map(e=>{let{start:n,end:s}=b[e];return`(?:${n}\\s*(${t.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${s})`}).join("|");return RegExp(`^\\s*(?:${n})\\s*$`)}let y="codeBlockContainer_Ckt0";function k(e){let{as:t,...n}=e,a=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(e=>{let[s,a]=e,r=t[s];r&&"string"==typeof a&&(n[r]=a)}),n}(u());return(0,s.jsx)(t,{...n,style:a,className:(0,l.Z)(n.className,y,m.k.common.codeBlock)})}let N={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function B(e){let{children:t,className:n}=e;return(0,s.jsx)(k,{as:"pre",tabIndex:0,className:(0,l.Z)(N.codeBlockStandalone,"thin-scrollbar",n),children:(0,s.jsx)("code",{className:N.codeBlockLines,children:t})})}var w=n("1558");let C={attributes:!0,characterData:!0,childList:!0,subtree:!0};var Z=n("3229");let E={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function L(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:r,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");let i=r({line:t,className:(0,l.Z)(n,a&&E.codeLine)}),c=t.map((e,t)=>(0,s.jsx)("span",{...o({token:e})},t));return(0,s.jsxs)("span",{...i,children:[a?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:E.codeLineNumber}),(0,s.jsx)("span",{className:E.codeLineContent,children:c})]}):c,(0,s.jsx)("br",{})]})}var T=n("4751");function _(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function A(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let S={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function I(e){let{code:t,className:n}=e,[r,o]=(0,a.useState)(!1),i=(0,a.useRef)(void 0),c=(0,a.useCallback)(()=>{!function(e){let{target:t=document.body}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);let n=document.createElement("textarea"),s=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";let a=document.getSelection(),r=a.rangeCount>0&&a.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch{}n.remove(),r&&(a.removeAllRanges(),a.addRange(r)),s&&s.focus()}(t),o(!0),i.current=window.setTimeout(()=>{o(!1)},1e3)},[t]);return(0,a.useEffect)(()=>()=>window.clearTimeout(i.current),[]),(0,s.jsx)("button",{type:"button","aria-label":r?(0,T.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,T.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,T.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,S.copyButton,r&&S.copyButtonCopied),onClick:c,children:(0,s.jsxs)("span",{className:S.copyButtonIcons,"aria-hidden":"true",children:[(0,s.jsx)(_,{className:S.copyButtonIcon}),(0,s.jsx)(A,{className:S.copyButtonSuccessIcon})]})})}function z(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let M={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function H(e){let{className:t,onClick:n,isEnabled:a}=e,r=(0,T.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,s.jsx)("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,a&&M.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,s.jsx)(z,{className:M.wordWrapButtonIcon,"aria-hidden":"true"})})}function R(e){var t,n,r;let{children:o,className:i="",metastring:c,title:m,showLineNumbers:h,language:j}=e,{prism:{defaultLanguage:b,magicComments:y}}=(0,d.L)();let B=(t=j??function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return t?.replace(/language-/,"")}(i)??b,t?.toLowerCase()),E=u(),T=function(){let[e,t]=(0,a.useState)(!1),[n,s]=(0,a.useState)(!1),r=(0,a.useRef)(null),o=(0,a.useCallback)(()=>{let n=r.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[r,e]),i=(0,a.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=r.current;s(e>t||r.current.querySelector("code").hasAttribute("style"))},[r]);return!function(e,t){let[n,s]=(0,a.useState)(),r=(0,a.useCallback)(()=>{s(e.current?.closest("[role=tabpanel][hidden]"))},[e,s]);(0,a.useEffect)(()=>{r()},[r]),!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C,s=(0,w.zX)(t),r=(0,w.Ql)(n);(0,a.useEffect)(()=>{let t=new MutationObserver(s);return e&&t.observe(e,r),()=>t.disconnect()},[e,s,r])}(n,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(r,i),(0,a.useEffect)(()=>{i()},[e,i]),(0,a.useEffect)(()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)}),[i]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:o}}();let _=(n=c,(n?.match(f)?.groups.title??"")||m),{lineClassNames:A,code:S}=function(e,t){let n=e.replace(/\n$/,""),{language:s,magicComments:a,metastring:r}=t;if(r&&x.test(r)){let e=r.match(x).groups.range;if(0===a.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=a[0].className;return{lineClassNames:Object.fromEntries(p()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:n}}if(void 0===s)return{lineClassNames:{},code:n};let o=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return v(["js","jsBlock"],t);case"jsx":case"tsx":return v(["js","jsBlock","jsx"],t);case"html":return v(["js","jsBlock","html"],t);case"python":case"py":case"bash":return v(["bash"],t);case"markdown":case"md":return v(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return v(["tex"],t);case"lua":case"haskell":case"sql":return v(["lua"],t);case"wasm":return v(["wasm"],t);case"vb":case"vba":case"visual-basic":return v(["vb","rem"],t);case"vbnet":return v(["vbnet","rem"],t);case"batch":return v(["rem"],t);case"basic":return v(["rem","f90"],t);case"fsharp":return v(["js","ml"],t);case"ocaml":case"sml":return v(["ml"],t);case"fortran":return v(["f90"],t);case"cobol":return v(["cobol"],t);default:return v(g,t)}}(s,a),i=n.split("\n"),l=Object.fromEntries(a.map(e=>[e.className,{start:0,range:""}])),c=Object.fromEntries(a.filter(e=>e.line).map(e=>{let{className:t,line:n}=e;return[n,t]})),d=Object.fromEntries(a.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.start,t]})),u=Object.fromEntries(a.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.end,t]}));for(let e=0;e<i.length;){let t=i[e].match(o);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);c[n]?l[c[n]].range+=`${e},`:d[n]?l[d[n]].start=e:u[n]&&(l[u[n]].range+=`${l[u[n]].start}-${e-1},`),i.splice(e,1)}n=i.join("\n");let m={};return Object.entries(l).forEach(e=>{let[t,{range:n}]=e;p()(n).forEach(e=>{m[e]??=[],m[e].push(t)})}),{lineClassNames:m,code:n}}(o,{metastring:c,language:B,magicComments:y});let z=h??(r=c,!!r?.includes("showLineNumbers"));return(0,s.jsxs)(k,{as:"div",className:(0,l.Z)(i,B&&!i.includes(`language-${B}`)&&`language-${B}`),children:[_&&(0,s.jsx)("div",{className:N.codeBlockTitle,children:_}),(0,s.jsxs)("div",{className:N.codeBlockContent,children:[(0,s.jsx)(Z.y$,{theme:E,code:S,language:B??"text",children:e=>{let{className:t,style:n,tokens:a,getLineProps:r,getTokenProps:o}=e;return(0,s.jsx)("pre",{tabIndex:0,ref:T.codeBlockRef,className:(0,l.Z)(t,N.codeBlock,"thin-scrollbar"),style:n,children:(0,s.jsx)("code",{className:(0,l.Z)(N.codeBlockLines,z&&N.codeBlockLinesWithNumbering),children:a.map((e,t)=>(0,s.jsx)(L,{line:e,getLineProps:r,getTokenProps:o,classNames:A[t],showLineNumbers:z},t))})})}}),(0,s.jsxs)("div",{className:N.buttonGroup,children:[(T.isEnabled||T.isCodeScrollable)&&(0,s.jsx)(H,{className:N.codeButton,onClick:()=>T.toggle(),isEnabled:T.isEnabled}),(0,s.jsx)(I,{className:N.codeButton,code:S})]})]})]})}function U(e){var t;let{children:n,...r}=e,o=(0,i.Z)();let l=(t=n,a.Children.toArray(t).some(e=>(0,a.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t);return(0,s.jsx)("string"==typeof l?R:B,{...r,children:l},String(o))}function V(e){return(0,s.jsx)("code",{...e})}var $=n("1183"),D=n("1149"),W=n("4548");let P={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function O(e){return!!e&&("SUMMARY"===e.tagName||O(e.parentElement))}function q(e){let{summary:t,children:n,...r}=e;(0,D.Z)().collectAnchor(r.id);let o=(0,i.Z)(),c=(0,a.useRef)(null),{collapsed:d,setCollapsed:u}=(0,W.u)({initialState:!r.open}),[m,h]=(0,a.useState)(r.open),p=a.isValidElement(t)?t:(0,s.jsx)("summary",{children:t??"Details"});return(0,s.jsxs)("details",{...r,ref:c,open:m,"data-collapsed":d,className:(0,l.Z)(P.details,o&&P.isBrowser,r.className),onMouseDown:e=>{O(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();let t=e.target;if(!!(O(t)&&function e(t,n){return!!t&&(t===n||e(t.parentElement,n))}(t,c.current)))e.preventDefault(),d?(u(!1),h(!0)):u(!0)},children:[p,(0,s.jsx)(W.z,{lazy:!1,collapsed:d,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{u(e),h(!e)},children:(0,s.jsx)("div",{className:P.collapsibleContent,children:n})})]})}let F="details_b_Ee";function G(e){let{...t}=e;return(0,s.jsx)(q,{...t,className:(0,l.Z)("alert alert--info",F,t.className)})}function J(e){let t=a.Children.toArray(e.children),n=t.find(e=>a.isValidElement(e)&&"summary"===e.type),r=(0,s.jsx)(s.Fragment,{children:t.filter(e=>e!==n)});return(0,s.jsx)(G,{...e,summary:n,children:r})}var Y=n("8608");function K(e){return(0,s.jsx)(Y.Z,{...e})}let Q={containsTaskList:"containsTaskList_mC6p"},X="img_ev3q";var ee=n("2575"),et=n("4263");let en={Head:o.Z,details:J,Details:J,code:function(e){var t;return void 0!==(t=e).children&&a.Children.toArray(t.children).every(e=>"string"==typeof e&&!e.includes("\n"))?(0,s.jsx)(V,{...e}):(0,s.jsx)(U,{...e})},a:function(e){return(0,s.jsx)($.Z,{...e})},pre:function(e){return(0,s.jsx)(s.Fragment,{children:e.children})},ul:function(e){return(0,s.jsx)("ul",{...e,className:function(e){if(void 0!==e)return(0,l.Z)(e,e?.includes("contains-task-list")&&Q.containsTaskList)}(e.className)})},li:function(e){return(0,D.Z)().collectAnchor(e.id),(0,s.jsx)("li",{...e})},img:function(e){var t;return(0,s.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,l.Z)(t,X))})},h1:e=>(0,s.jsx)(K,{as:"h1",...e}),h2:e=>(0,s.jsx)(K,{as:"h2",...e}),h3:e=>(0,s.jsx)(K,{as:"h3",...e}),h4:e=>(0,s.jsx)(K,{as:"h4",...e}),h5:e=>(0,s.jsx)(K,{as:"h5",...e}),h6:e=>(0,s.jsx)(K,{as:"h6",...e}),admonition:ee.Z,mermaid:et.Z};function es(e){let{children:t}=e;return(0,s.jsx)(r.Z,{components:en,children:t})}},9793:function(e,t,n){"use strict";n.d(t,{P:function(){return a}});var s=n(9931);function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{i18n:{currentLocale:t}}=(0,s.Z)(),n=function(){let{i18n:{currentLocale:e,localeConfigs:t}}=(0,s.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}},65:function(e,t,n){"use strict";n.d(t,{Z:function(){return i},a:function(){return o}});var s=n(7294);let a={},r=s.createContext(a);function o(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);