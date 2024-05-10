"use strict";(self.webpackChunkbhukamatha=self.webpackChunkbhukamatha||[]).push([[633],{2983:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(4848),l=t(8453);const r={sidebar_position:6},s="Stone Map",a={id:"Tutorial-Modules/stone_map",title:"Stone Map",description:"Shortcut to launch ALT + SHIFT + S",source:"@site/docs/Tutorial-Modules/stone_map.md",sourceDirName:"Tutorial-Modules",slug:"/Tutorial-Modules/stone_map",permalink:"/bhudocs/docs/Tutorial-Modules/stone_map",draft:!1,unlisted:!1,editUrl:"https://github.com/surveyorstories/bhudocs/edit/main/docs/Tutorial-Modules/stone_map.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Village Map",permalink:"/bhudocs/docs/Tutorial-Modules/village_map"},next:{title:"Export Panel",permalink:"/bhudocs/docs/Tutorial-Modules/export_panel"}},o={},d=[{value:"Data Required",id:"data-required",level:2},{value:"How to",id:"how-to",level:2},{value:"Run algorithm",id:"run-algorithm",level:3},{value:"Remaining things ToDo",id:"remaining-things-todo",level:3},{value:"Points to Remember",id:"points-to-remember",level:2}];function h(e){const n={admonition:"admonition",div:"div",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"stone-map",children:"Stone Map"}),"\n",(0,i.jsxs)(n.p,{children:["Shortcut to launch ",(0,i.jsx)(n.strong,{children:(0,i.jsx)("u",{children:"ALT + SHIFT + S"})})]}),"\n",(0,i.jsx)(n.div,{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Gautami"})," font Must be installed to generate a Stone map using Bhukamatha"]})}),"\n",(0,i.jsx)(n.h2,{id:"data-required",children:"Data Required"}),"\n",(0,i.jsxs)(n.p,{children:["The Following Data fields are Required to Generate ",(0,i.jsx)(n.strong,{children:"Stone Map"})," using Bhukamatha"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Column"}),(0,i.jsx)(n.th,{children:"Expecting Value (Description)"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Village Final Shape File"}),(0,i.jsx)(n.td,{children:"Final approved Village shapefile"}),(0,i.jsx)(n.td,{children:"Shapefile"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Choose Your LPM Column"}),(0,i.jsx)(n.td,{children:"Column which represents LP Number in the village final shapefile"}),(0,i.jsx)(n.td,{children:"Dropdown"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Government Land Shape File"}),(0,i.jsx)(n.td,{children:"Separate Shapefile containing all the Government land parcels which is different from the village final Shapefile"}),(0,i.jsx)(n.td,{children:"Shapefile"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Choose Your District"}),(0,i.jsx)(n.td,{children:"Select your district from the drop-down"}),(0,i.jsx)(n.td,{children:"Drop-down (Name)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Mandal Name(Please Enter Your Mandal Name in Telugu)"}),(0,i.jsx)(n.td,{children:"Type your Mandal name in Telugu"}),(0,i.jsx)(n.td,{children:"Name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Village Name(Please Enter Your Village Name in Telugu)"}),(0,i.jsx)(n.td,{children:"Type your Revenue village name in Telugu"}),(0,i.jsx)(n.td,{children:"Name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Gazette Date"}),(0,i.jsxs)(n.td,{children:["13 ",(0,i.jsx)("sup",{children:"th"})," Notification Gazette Date"]}),(0,i.jsx)(n.td,{children:"Date"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Gazette No"}),(0,i.jsxs)(n.td,{children:["13 ",(0,i.jsx)("sup",{children:"th"})," Notification Number"]}),(0,i.jsx)(n.td,{children:"Number (Text)"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"how-to",children:"How to"}),"\n",(0,i.jsx)(n.h3,{id:"run-algorithm",children:"Run algorithm"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["All the Files(layers) generated by the algorithm are stored in the ",(0,i.jsx)(n.strong,{children:"project directory"})]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Save the project and set the projection of the project."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Load the village final shapefile and Government land shapefile into the project we can done this by **Layer>Add Layer > Add vector Layer, then browse and pick the appropriate layer or just drag and drop it into the project."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Launch the Stone map algorithm by pressing Alt + Shift + S (accessible in the processing toolbox, Bhukamatha toolbar, or Plugin menu)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Fill out all of the details accordingly."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Now simply click on the Run Button located on the bottom right side"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Now all the work will done by algorithm, sit still and wait until it completes."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["It will generate all the Required layers (",(0,i.jsx)(n.strong,{children:"Land_Parcel_Stones, Government_Land_Stones, Field_Tri-Junction_Stones, Side_Village_Frill_Line, Side_VillageLayer"}),") for you \xa0"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Adding of Stone map Layout with all the details including Stone Count was done for you by Bhukamatha no need to do it manually"})}),"\n",(0,i.jsx)(n.h3,{id:"remaining-things-todo",children:"Remaining things ToDo"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the Bi-Junction (Old,New) Stones  and Tri-Junction (Old,New) Stones using any existing Stone Layers,"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Change the stones where it is Necessary by selecting appropriate Layers,"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add Side village Frill lines using the line layer ",(0,i.jsx)(n.strong,{children:"Side_Village_Frill_Line"}),","]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add Side Village Names using the Point Layer  ",(0,i.jsx)(n.strong,{children:"Side_VillageLayer"})," (No need to set symbology opacity to '0' Bhukamatha removes the opacity when the template is opened, when closed changes to Orange)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Changing  any  layer name generated by the Bhukamatha algorithm will break the project"})}),"\n",(0,i.jsx)(n.h2,{id:"points-to-remember",children:"Points to Remember"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Save the project beforehand (Bhukamatha doesn't allow running the algorithm without saving because it was mostly dependent on the project)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Before running the algorithm, ensure that all of the data is appropriately mapped and typed."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check the Projection of the project and Shapefile are correct and matching"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Don't change any layer names that are generated by the Bhukamatha stone map algorithm"}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const l={},r=i.createContext(l);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);