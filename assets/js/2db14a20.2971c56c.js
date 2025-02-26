"use strict";(self.webpackChunkbhukamatha=self.webpackChunkbhukamatha||[]).push([["2615"],{4314:function(e,t,i){i.d(t,{Z:function(){return n}});var r=i(5893),a=i(7294);let n=function(e){let{title:t,initialItems:i}=e,[n,o]=(0,a.useState)(i),[s,c]=(0,a.useState)(0),[l,d]=(0,a.useState)(!1);(0,a.useEffect)(()=>{p()},[n]);let h=e=>{o(n.map(t=>t.id===e?{...t,checked:!t.checked}:t))},p=()=>{let e=n.filter(e=>e.checked).length/n.length*100;c(e),100===e&&(d(!0),setTimeout(()=>d(!1),5e3))};return(0,r.jsxs)("div",{className:"full-page-container",children:[(0,r.jsx)("style",{children:`
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
          width: ${s}%;
          transition: width 0.3s ease-in-out;
        }

        .celebration-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: ${l?"flex":"none"};
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
      `}),(0,r.jsxs)("div",{className:"checklist-container",children:[(0,r.jsx)("h2",{children:t}),n.map(e=>(0,r.jsxs)("div",{className:`checklist-item ${e.checked?"checked":""}`,children:[(0,r.jsx)("input",{type:"checkbox",id:`item-${e.id}`,checked:e.checked,onChange:()=>h(e.id)}),(0,r.jsx)("label",{htmlFor:`item-${e.id}`,children:e.text})]},e.id)),(0,r.jsx)("div",{className:"progress-bar",children:(0,r.jsx)("div",{className:"progress"})}),(0,r.jsx)("button",{className:"reset-button",onClick:()=>{o(n.map(e=>({...e,checked:!1})))},children:"Reset"})]}),l&&(0,r.jsx)("div",{className:"celebration-overlay",children:(0,r.jsxs)("div",{className:"celebration-message",children:["Congratulations! You've completed the ",t,"!",[...Array(20)].map((e,t)=>(0,r.jsx)("div",{className:"star",style:{top:`${100*Math.random()}%`,left:`${100*Math.random()}%`,animationDelay:`${Math.random()}s`}},t))]})})]})}},9453:function(e,t,i){i.r(t),i.d(t,{default:function(){return n}});var r=i(5893);i(7294);var a=i(4314);let n=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(a.Z,{title:"Task List lokesh ",initialItems:[{id:1,text:"Item 1",checked:!1},{id:2,text:"Item 2",checked:!1},{id:3,text:"Item 3",checked:!1},{id:4,text:"Item 4",checked:!1}]})})}}}]);