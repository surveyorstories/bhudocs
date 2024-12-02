"use strict";(self.webpackChunkbhukamatha=self.webpackChunkbhukamatha||[]).push([["101"],{6558:function(e,n,i){i.r(n),i.d(n,{metadata:()=>l,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>r});var l=JSON.parse('{"id":"Tutorial-Modules/lpm_numbering","title":"LPM Numbering (Beta)","description":"This guide explains how to use the Land Parcel Numbering Tool effectively in QGIS for labeling land parcels interactively.","source":"@site/docs/Tutorial-Modules/lpm_numbering.md","sourceDirName":"Tutorial-Modules","slug":"/Tutorial-Modules/lpm_numbering","permalink":"/bhudocs/docs/Tutorial-Modules/lpm_numbering","draft":false,"unlisted":false,"editUrl":"https://github.com/surveyorstories/bhudocs/edit/main/docs/Tutorial-Modules/lpm_numbering.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Splitting of Features (Beta)","permalink":"/bhudocs/docs/Tutorial-Modules/splitting_features"},"next":{"title":"LPM Processing","permalink":"/bhudocs/docs/Tutorial-Modules/lpm_processing"}}'),s=i("5893"),t=i("65");let r={sidebar_position:3},o="LPM Numbering (Beta)",a={},d=[{value:"How to",id:"how-to",level:2},{value:"1. Starting the Tool",id:"1-starting-the-tool",level:3},{value:"2. Setting Up the Map",id:"2-setting-up-the-map",level:3},{value:"3. Assigning Parcel Numbers",id:"3-assigning-parcel-numbers",level:3},{value:"4. Adjusting Points for Numbering",id:"4-adjusting-points-for-numbering",level:3},{value:"5. Undoing or Redoing Changes",id:"5-undoing-or-redoing-changes",level:3},{value:"6. Zooming and Panning the Map",id:"6-zooming-and-panning-the-map",level:3},{value:"7. Checking Label Status",id:"7-checking-label-status",level:4},{value:"8. Saving Changes",id:"8-saving-changes",level:3},{value:"9. Exiting the Tool",id:"9-exiting-the-tool",level:3},{value:"Tips for Better Results",id:"tips-for-better-results",level:2}];function c(e){let n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"lpm-numbering-beta",children:"LPM Numbering (Beta)"})}),"\n",(0,s.jsxs)(n.p,{children:["This guide explains how to use the ",(0,s.jsx)(n.strong,{children:"Land Parcel Numbering Tool"})," effectively in QGIS for labeling land parcels interactively."]}),"\n",(0,s.jsx)(n.h2,{id:"how-to",children:"How to"}),"\n",(0,s.jsx)(n.h3,{id:"1-starting-the-tool",children:"1. Starting the Tool"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Launch the Tool Set panel by clicking the icon or pressing the shortcut ",(0,s.jsx)(n.strong,{children:"ALT + SHIFT + T"}),". Click on ",(0,s.jsx)(n.strong,{children:"LP NO"})]}),"\n",(0,s.jsxs)(n.li,{children:["A new window titled ",(0,s.jsx)(n.strong,{children:'"Land Parcel Numbering"'})," will appear, displaying the map canvas."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-setting-up-the-map",children:"2. Setting Up the Map"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Make sure the layer you want to work on is active in the QGIS Layers Panel."}),"\n",(0,s.jsx)(n.li,{children:"The active layer will automatically load onto the map canvas in the tool window."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-assigning-parcel-numbers",children:"3. Assigning Parcel Numbers"}),"\n",(0,s.jsx)(n.p,{children:"\xa0\xa0\xa0\xa0To assign numbers to parcels:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:'Click the "Start Numbering" tool'})," (icon with a crosshair) from the toolbar."]}),"\n",(0,s.jsxs)(n.li,{children:["Click on a parcel on the map canvas.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The first click will assign the number ",(0,s.jsx)(n.code,{children:"1"}),", and subsequent clicks will continue the numbering sequence."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["If the parcel already has a number, you\u2019ll see a message:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:'"\uD83D\uDE35 Hey There! You already hit me \uD83C\uDFAF, Please try others!"'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4-adjusting-points-for-numbering",children:"4. Adjusting Points for Numbering"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.strong,{children:"Right Mouse Button"})," to manually draw shapes around parcels if needed."]}),"\n",(0,s.jsxs)(n.li,{children:["Press ",(0,s.jsx)(n.strong,{children:"Ctrl + Left Click"})," to create additional points for better precision."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"5-undoing-or-redoing-changes",children:"5. Undoing or Redoing Changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To undo a label assignment, press ",(0,s.jsx)(n.strong,{children:"Ctrl + Z"})," (",(0,s.jsx)(n.code,{children:"Ctrl + Z"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To redo a label assignment, press ",(0,s.jsx)(n.strong,{children:"Ctrl + Y"}),". (",(0,s.jsx)(n.code,{children:"Ctrl + Y"}),")."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"6-zooming-and-panning-the-map",children:"6. Zooming and Panning the Map"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use the toolbar to adjust the view:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Zoom In/Out:"})," Click the magnifying glass icons."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pan Tool:"})," Click the hand icon, then drag to move the map."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"7-checking-label-status",children:"7. Checking Label Status"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Parcels with assigned numbers turn ",(0,s.jsx)(n.strong,{children:"green"})," on the map."]}),"\n",(0,s.jsxs)(n.li,{children:["Unlabeled parcels remain in ",(0,s.jsx)(n.strong,{children:"gray"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"8-saving-changes",children:"8. Saving Changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The tool automatically saves changes to the active layer."}),"\n",(0,s.jsxs)(n.li,{children:["You can review and edit the ",(0,s.jsx)(n.code,{children:"LPM_NO"})," field directly in the layer\u2019s attribute table if needed."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"9-exiting-the-tool",children:"9. Exiting the Tool"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When closing the tool, a confirmation dialog will appear:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It shows the total number of unlabeled parcels."}),"\n",(0,s.jsxs)(n.li,{children:["Choose ",(0,s.jsx)(n.strong,{children:"Yes"})," to exit or ",(0,s.jsx)(n.strong,{children:"No"})," to continue numbering."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"tips-for-better-results",children:"Tips for Better Results"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Always make sure your active layer has parcels properly digitized."}),"\n",(0,s.jsx)(n.li,{children:"Avoid overlapping parcels to ensure accurate number assignment."}),"\n",(0,s.jsxs)(n.li,{children:["If labeling stops working, check the ",(0,s.jsx)(n.code,{children:"LPM_NO"})," field in your layer to confirm it's present."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Enjoy seamless parcel numbering with the Land Parcel Numbering Tool! \uD83C\uDF1F"})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},65:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return r}});var l=i(7294);let s={},t=l.createContext(s);function r(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);