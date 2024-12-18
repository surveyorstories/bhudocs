"use strict";(self.webpackChunkbhukamatha=self.webpackChunkbhukamatha||[]).push([["418"],{7436:function(e,t,a){a.r(t),a.d(t,{default:()=>p,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>h,contentTitle:()=>d});var n=JSON.parse('{"type":"mdx","permalink":"/bhudocs/lokesh","source":"@site/src/pages/lokesh.mdx","title":"Download Page","description":"Download Latest Release","frontMatter":{"id":"my-download-page","title":"Download Page"},"unlisted":false}'),r=a("5893"),o=a("65"),s=a("1824"),l=a("3538");let i={id:"my-download-page",title:"Download Page"},d=void 0,c={},h=[{value:"Download Latest Release",id:"download-latest-release",level:2}];function u(e){let t={h2:"h2",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"download-latest-release",children:"Download Latest Release"}),"\n",(0,r.jsx)(s.Z,{}),"\n",(0,r.jsx)(l.Z,{title:"Task List",initialItems:[{id:1,text:"Item 1",checked:!1},{id:2,text:"Item 2",checked:!1},{id:3,text:"Item 3",checked:!1},{id:4,text:"Item4 3",checked:!1}]})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1824:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(5893),r=a(7294),o=a(430);let s=()=>{let[e,t]=(0,r.useState)(""),[a,s]=(0,r.useState)(null),[l,i]=(0,r.useState)([]),[d,c]=(0,r.useState)(!0),[h,u]=(0,r.useState)(null);return(0,r.useEffect)(()=>{o.Z.get("https://api.github.com/repos/opengisch/QField/releases").then(e=>{let a=e.data,n=a[0],r=n.assets[0];r&&(t(r.browser_download_url),s({name:n.name,version:n.tag_name})),i(a.slice(1,3).map(e=>({name:e.name,url:e.assets[0].browser_download_url}))),c(!1)}).catch(e=>{u("Error fetching release data."),c(!1),console.error("Error fetching release data:",e)})},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("button",{className:"download-button",role:"button","aria-label":"Download button",children:["Download",(0,n.jsxs)("div",{className:"dropdown-content",children:[d?(0,n.jsx)("p",{children:"Loading..."}):h?(0,n.jsx)("p",{children:h}):(0,n.jsx)(n.Fragment,{children:a&&(0,n.jsxs)("a",{"aria-label":"Latest Release",href:e,download:!0,children:["Latest: ",a.name]})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"Old Releases"}),l.length>0?l.map((e,t)=>(0,n.jsx)("a",{href:e.url,download:!0,children:e.name},t)):(0,n.jsx)("p",{children:"No old releases available."})]}),(0,n.jsx)("a",{href:"https://github.com/opengisch/QField/releases",target:"_blank",rel:"noopener noreferrer",children:"All Releases"})]})]})})}},3538:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(5893),r=a(7294);let o=function(e){let{title:t,initialItems:a}=e,[o,s]=(0,r.useState)(a),[l,i]=(0,r.useState)(0),[d,c]=(0,r.useState)(!1);(0,r.useEffect)(()=>{u()},[o]);let h=e=>{s(o.map(t=>t.id===e?{...t,checked:!t.checked}:t))},u=()=>{let e=o.filter(e=>e.checked).length,t=e/o.length*100;i(t),100===t&&(c(!0),setTimeout(()=>c(!1),5e3))};return(0,n.jsxs)("div",{className:"full-page-container",children:[(0,n.jsx)("style",{children:`
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
          width: ${l}%;
          transition: width 0.3s ease-in-out;
        }

        .celebration-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: ${d?"flex":"none"};
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
      `}),(0,n.jsxs)("div",{className:"checklist-container",children:[(0,n.jsx)("h2",{children:t}),o.map(e=>(0,n.jsxs)("div",{className:`checklist-item ${e.checked?"checked":""}`,children:[(0,n.jsx)("input",{type:"checkbox",id:`item-${e.id}`,checked:e.checked,onChange:()=>h(e.id)}),(0,n.jsx)("label",{htmlFor:`item-${e.id}`,children:e.text})]},e.id)),(0,n.jsx)("div",{className:"progress-bar",children:(0,n.jsx)("div",{className:"progress"})}),(0,n.jsx)("button",{className:"reset-button",onClick:()=>{s(o.map(e=>({...e,checked:!1})))},children:"Reset"})]}),d&&(0,n.jsx)("div",{className:"celebration-overlay",children:(0,n.jsxs)("div",{className:"celebration-message",children:["Congratulations! You've completed the ",t,"!",[...Array(20)].map((e,t)=>(0,n.jsx)("div",{className:"star",style:{top:`${100*Math.random()}%`,left:`${100*Math.random()}%`,animationDelay:`${Math.random()}s`}},t))]})})]})}},65:function(e,t,a){a.d(t,{Z:function(){return l},a:function(){return s}});var n=a(7294);let r={},o=n.createContext(r);function s(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);