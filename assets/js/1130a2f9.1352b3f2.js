"use strict";(self.webpackChunkbhukamatha=self.webpackChunkbhukamatha||[]).push([[410],{3691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var o=n(4848),a=n(8453),s=n(14);const l={id:"my-download-page",title:"Download Page"},r=void 0,d={type:"mdx",permalink:"/bhudocs/lokesh",source:"@site/src/pages/lokesh.mdx",title:"Download Page",description:"Download Latest Release",frontMatter:{id:"my-download-page",title:"Download Page"},unlisted:!1},c={},i=[{value:"Download Latest Release",id:"download-latest-release",level:2}];function u(e){const t={h2:"h2",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"download-latest-release",children:"Download Latest Release"}),"\n",(0,o.jsx)(s.A,{})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},14:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(6540),a=n(1250),s=n(4848);const l=()=>{const[e,t]=(0,o.useState)("");return(0,o.useEffect)((()=>{a.A.get("https://api.github.com/repos/surveyorstories/bhukamatha/releases/latest").then((e=>{const n=e.data.assets[0];n&&t(n.browser_download_url)})).catch((e=>{console.error("Error fetching download link:",e)}))}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("button",{className:"download-button",role:"button","aria-label":"send email",children:["Download",(0,s.jsxs)("div",{className:"dropdown-content",children:[e?(0,s.jsx)("a",{"aria-label":"Latest Release",href:e,download:!0,children:"Latest Release"}):(0,s.jsx)("p",{children:"Loading..."}),(0,s.jsx)("a",{href:"./releases",children:"Old Releases"})]})]})})}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var o=n(6540);const a={},s=o.createContext(a);function l(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);