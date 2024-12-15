"use strict";(self.webpackChunkbhukamatha=self.webpackChunkbhukamatha||[]).push([["418"],{7436:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>a,assets:()=>d,toc:()=>h,contentTitle:()=>c});var a=JSON.parse('{"type":"mdx","permalink":"/bhudocs/lokesh","source":"@site/src/pages/lokesh.mdx","title":"Download Page","description":"Download Latest Release","frontMatter":{"id":"my-download-page","title":"Download Page"},"unlisted":false}'),o=n("5893"),r=n("65"),s=n("1824"),i=n("3538");let l={id:"my-download-page",title:"Download Page"},c=void 0,d={},h=[{value:"Download Latest Release",id:"download-latest-release",level:2}];function u(e){let t={h2:"h2",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"download-latest-release",children:"Download Latest Release"}),"\n",(0,o.jsx)(s.Z,{}),"\n",(0,o.jsx)(i.Z,{title:"Task List",initialItems:[{id:1,text:"Item 1",checked:!1},{id:2,text:"Item 2",checked:!1},{id:3,text:"Item 3",checked:!1},{id:4,text:"Item4 3",checked:!1}]})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1824:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(5893),o=n(7294),r=n(430);let s=()=>{let[e,t]=(0,o.useState)("");return(0,o.useEffect)(()=>{r.Z.get("https://api.github.com/repos/opengisch/QField/releases/latest").then(e=>{let n=e.data.assets[0];n&&t(n.browser_download_url)}).catch(e=>{console.error("Error fetching download link:",e)})},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("button",{className:"download-button",role:"button","aria-label":"button",children:["Download",(0,a.jsxs)("div",{className:"dropdown-content",children:[e?(0,a.jsx)("a",{"aria-label":"Latest Release",href:e,download:!0,children:"Latest Release"}):(0,a.jsx)("p",{children:"Loading..."}),(0,a.jsx)("a",{href:"./releases",children:"Old Releases"})]})]})})}},3538:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(5893),o=n(7294);let r=function(e){let{title:t,initialItems:n}=e,[r,s]=(0,o.useState)(n),[i,l]=(0,o.useState)(0),[c,d]=(0,o.useState)(!1);(0,o.useEffect)(()=>{u()},[r]);let h=e=>{s(r.map(t=>t.id===e?{...t,checked:!t.checked}:t))},u=()=>{let e=r.filter(e=>e.checked).length,t=e/r.length*100;l(t),100===t&&(d(!0),setTimeout(()=>d(!1),5e3))};return(0,a.jsxs)("div",{className:"full-page-container",children:[(0,a.jsx)("style",{children:`
        /* CSS styles */
        body, html {
          margin: 0;
          padding: 0;
          height: 100%;
        }

        .full-page-container {
          position: relative;
          min-height: 100%;
          background-color: #f8f9fa;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .checklist-container {
          font-family: Arial, sans-serif;
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 5px;
          width: 400px;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          z-index: 2;
          position: relative;
        }

        .checklist-item {
          margin-bottom: 10px;
        }

        .checklist-item.checked label {
          text-decoration: line-through;
        }

        input[type="checkbox"] {
          margin-right: 10px;
        }

        label {
          display: inline-block;
          vertical-align: middle;
        }

        .reset-button {
          margin-top: 10px;
          margin-right: 10px;
          padding: 8px 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          z-index: 1;
        }

        .reset-button:hover {
          background-color: #0056b3;
        }

        .progress-bar {
          background-color: #ddd;
          height: 20px;
          border-radius: 4px;
          overflow: hidden;
          margin-top: 10px;
        }

        .progress {
          background-color: #007bff;
          height: 100%;
          width: ${i}%;
          transition: width 0.3s ease-in-out;
        }

        .celebration-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: ${c?"flex":"none"};
          justify-content: center;
          align-items: center;
          z-index: 3;
        }

        .celebration-message {
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          text-align: center;
          font-size: 24px;
          color: #000;
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background-color: red;
          animation: fly-star 2s linear infinite;
          pointer-events: none;
        }

        @keyframes fly-star {
          0% {
            transform: translateY(0) translateX(0) rotate(0);
          }
          50% {
            transform: translateY(-100px) translateX(100px) rotate(720deg);
          }
          100% {
            transform: translateY(-200px) translateX(200px) rotate(1440deg);
          }
        }
      `}),(0,a.jsxs)("div",{className:"checklist-container",children:[(0,a.jsx)("h2",{children:t}),r.map(e=>(0,a.jsxs)("div",{className:`checklist-item ${e.checked?"checked":""}`,children:[(0,a.jsx)("input",{type:"checkbox",id:`item-${e.id}`,checked:e.checked,onChange:()=>h(e.id)}),(0,a.jsx)("label",{htmlFor:`item-${e.id}`,children:e.text})]},e.id)),(0,a.jsx)("div",{className:"progress-bar",children:(0,a.jsx)("div",{className:"progress"})}),(0,a.jsx)("button",{className:"reset-button",onClick:()=>{s(r.map(e=>({...e,checked:!1})))},children:"Reset"})]}),c&&(0,a.jsx)("div",{className:"celebration-overlay",children:(0,a.jsxs)("div",{className:"celebration-message",children:["Congratulations! You've completed the ",t,"!",[...Array(20)].map((e,t)=>(0,a.jsx)("div",{className:"star",style:{top:`${100*Math.random()}%`,left:`${100*Math.random()}%`,animationDelay:`${Math.random()}s`}},t))]})})]})}},65:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return s}});var a=n(7294);let o={},r=a.createContext(o);function s(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);