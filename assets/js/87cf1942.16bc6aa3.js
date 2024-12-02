"use strict";(self.webpackChunkbhukamatha=self.webpackChunkbhukamatha||[]).push([["8654"],{1890:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>a,frontMatter:()=>i});var r=JSON.parse('{"id":"Tutorial-Modules/gv_notices","title":"Ground Validation Notices","description":"This step-by-step guide will help you generate notices using the Gv_notice tool in QGIS. Follow the instructions carefully to ensure accurate results.","source":"@site/docs/Tutorial-Modules/gv_notices.md","sourceDirName":"Tutorial-Modules","slug":"/Tutorial-Modules/gv_notices","permalink":"/bhudocs/docs/Tutorial-Modules/gv_notices","draft":false,"unlisted":false,"editUrl":"https://github.com/surveyorstories/bhudocs/edit/main/docs/Tutorial-Modules/gv_notices.md","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11},"sidebar":"tutorialSidebar","previous":{"title":"Adjusting Point IDs","permalink":"/bhudocs/docs/Tutorial-Modules/adjusting_pointid"}}'),s=t("5893"),l=t("65");let i={sidebar_position:11},d="Ground Validation Notices",o={},a=[{value:"How to",id:"how-to",level:2},{value:"Data Requirements Table",id:"data-requirements-table",level:3},{value:"1. Open the Tool",id:"1-open-the-tool",level:3},{value:"2. Select Your Input Data",id:"2-select-your-input-data",level:3},{value:"3. Data Requirements",id:"3-data-requirements",level:3},{value:"4. Enter Basic Details",id:"4-enter-basic-details",level:3},{value:"5. Choose the Mode of Generation",id:"5-choose-the-mode-of-generation",level:3},{value:"6. Map the Data Columns",id:"6-map-the-data-columns",level:3},{value:"7. Run the Tool",id:"7-run-the-tool",level:3},{value:"8. View the Output",id:"8-view-the-output",level:3},{value:"9. Generate the Notices",id:"9-generate-the-notices",level:3},{value:"Tips for Success",id:"tips-for-success",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ground-validation-notices",children:"Ground Validation Notices"})}),"\n",(0,s.jsxs)(n.p,{children:["This step-by-step guide will help you generate notices using the ",(0,s.jsx)(n.strong,{children:"Gv_notice"})," tool in QGIS. Follow the instructions carefully to ensure accurate results."]}),"\n",(0,s.jsx)(n.h2,{id:"how-to",children:"How to"}),"\n",(0,s.jsx)(n.h3,{id:"data-requirements-table",children:"Data Requirements Table"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Column Name"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Data Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Example"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Village name (Please enter your village name in telugu)"})}),(0,s.jsx)(n.td,{children:"Village Name (Please enter your Village Name in Telugu)"}),(0,s.jsx)(n.td,{children:"String/Text"}),(0,s.jsx)(n.td,{children:"\u0C06\u0C28\u0C02\u0C26\u0C2A\u0C41\u0C30\u0C02"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Mandal name (Please enter mandal name in telugu)"})}),(0,s.jsx)(n.td,{children:"Mandal Name (Please enter Mandal Name in Telugu)"}),(0,s.jsx)(n.td,{children:"String/Text"}),(0,s.jsx)(n.td,{children:"\u0C15\u0C4B\u0C1F\u0C2C\u0C4A\u0C2E\u0C4D\u0C2E\u0C3E\u0C33\u0C3F"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"District name eng"})}),(0,s.jsx)(n.td,{children:"District Name (Choose Your District)"}),(0,s.jsx)(n.td,{children:"Enum/Text"}),(0,s.jsx)(n.td,{children:"Srikakulam"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Choose your data"})}),(0,s.jsx)(n.td,{children:"Data Layer (Select the vector layer containing your data)"}),(0,s.jsx)(n.td,{children:"Vector Layer"}),(0,s.jsx)(n.td,{children:"Land parcel data Shapefile"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Mode of generation"})}),(0,s.jsx)(n.td,{children:"Mode of Generation (Khata Number Wise / Land Parcel Wise)"}),(0,s.jsx)(n.td,{children:"Enum/Text"}),(0,s.jsx)(n.td,{children:"Khata Number Wise / Land parcel wise"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Choose land parcel column"})}),(0,s.jsx)(n.td,{children:"Land Parcel Column (Select the column for land parcel numbers)"}),(0,s.jsx)(n.td,{children:"Dropdown Field (Text/Number)12"}),(0,s.jsx)(n.td,{children:"123"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Choose khata number column"})}),(0,s.jsx)(n.td,{children:"Khata Number Column (Select the column for khata numbers)"}),(0,s.jsx)(n.td,{children:"Dropdown Field (Text/Number)"}),(0,s.jsx)(n.td,{children:"12345"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Choose sysubdivision number"})}),(0,s.jsx)(n.td,{children:"Sy-Subdivision Number Column (Select if applicable)"}),(0,s.jsx)(n.td,{children:"Dropdown Field (Text/Number)"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Choose acres column as per resurvey"})}),(0,s.jsx)(n.td,{children:"Acres Column as per Resurvey (Select the column for resurvey acres)"}),(0,s.jsx)(n.td,{children:"Dropdown Field (Decimal/Number)"}),(0,s.jsx)(n.td,{children:"3.5"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Choose hectres column as per resurvey"})}),(0,s.jsx)(n.td,{children:"Hectares Column as per Resurvey (Select the column for resurvey hectares)"}),(0,s.jsx)(n.td,{children:"Dropdown Field (Decimal/Number)"}),(0,s.jsx)(n.td,{children:"1.4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Choose acres as per old data"})}),(0,s.jsx)(n.td,{children:"Acres as per Old Data (Optional)"}),(0,s.jsx)(n.td,{children:"Dropdown Field (Decimal/Number)"}),(0,s.jsx)(n.td,{children:"3.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Choose hectres as per old data"})}),(0,s.jsx)(n.td,{children:"Hectares as per Old Data (Optional)"}),(0,s.jsx)(n.td,{children:"Dropdown Field (Decimal/Number)"}),(0,s.jsx)(n.td,{children:"1.2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Choose pattadar name column"})}),(0,s.jsx)(n.td,{children:"Pattadar Name Column (Select the column for pattadar names)"}),(0,s.jsx)(n.td,{children:"Dropdown Field (Text)"}),(0,s.jsx)(n.td,{children:"\u0C24\u0C46\u0C32\u0C41\u0C15\u0C41\u0C1F\u0C4D\u0C1F\u0C3F\xa0 \u0C26\u0C3F\u0C35\u0C3E\u0C15\u0C30\u0C4D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Choose pattadar relation name column"})}),(0,s.jsx)(n.td,{children:"Pattadar Relation Name Column (Optional)"}),(0,s.jsx)(n.td,{children:"Dropdown Field (Text)"}),(0,s.jsx)(n.td,{children:"\u0C2F\u0C30\u0C4D\u0C30\u0C02\u0C28\u0C3E\u0C2F\u0C41\u0C21\u0C41"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Choose remarks column"})}),(0,s.jsx)(n.td,{children:"Remarks Column (Optional)"}),(0,s.jsx)(n.td,{children:"Dropdown Field (Text)"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Choose classification column"})}),(0,s.jsx)(n.td,{children:"Classification Column (Optional)"}),(0,s.jsx)(n.td,{children:"Dropdown Field (Text)"}),(0,s.jsx)(n.td,{children:"Agricultural Land"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"1-open-the-tool",children:"1. Open the Tool"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Launch QGIS and open your project."}),"\n",(0,s.jsxs)(n.li,{children:["Go to the ",(0,s.jsx)(n.strong,{children:"Processing Toolbox"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Search for ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Gv_notice"})})," in the toolbox."]}),"\n",(0,s.jsx)(n.li,{children:"Double-click on the tool to open the input dialog."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-select-your-input-data",children:"2. Select Your Input Data"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In the dialog, locate the field ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Choose Your Data"})}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Click on the dropdown and select your data layer (e.g., land parcel or khata data)."}),"\n",(0,s.jsx)(n.li,{children:"Ensure your data contains all necessary columns as detailed below."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-data-requirements",children:"3. Data Requirements"}),"\n",(0,s.jsxs)(n.p,{children:["Before running the tool, make sure your input data has the ",(0,s.jsx)(n.a,{href:"#data-requirements-table",children:(0,s.jsx)(n.strong,{children:"Data Requirements Table"})})," columns with the correct data types. These columns will be used to generate notices based on the selected options."]}),"\n",(0,s.jsx)(n.h3,{id:"4-enter-basic-details",children:"4. Enter Basic Details"}),"\n",(0,s.jsx)(n.p,{children:"Fill in the following fields:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Village Name"}),": Enter the name of your village in Telugu. ",(0,s.jsx)(n.em,{children:"(Example: \u0C06\u0C28\u0C02\u0C26\u0C2A\u0C41\u0C30\u0C02)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mandal Name"}),": Enter the name of your mandal in Telugu. ",(0,s.jsx)(n.em,{children:"(Example: \u0C15\u0C4B\u0C1F\u0C2C\u0C4A\u0C2E\u0C4D\u0C2E\u0C3E\u0C33\u0C3F)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"District Name (English)"}),": Select your district name from the dropdown. ",(0,s.jsx)(n.em,{children:"(Example: Srikakulam)"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"5-choose-the-mode-of-generation",children:"5. Choose the Mode of Generation"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Locate the field ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Mode of Generation"})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Select one of the following options:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Khata Number Wise"}),": Generates notices grouped by Khata numbers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Land Parcel Wise"}),": Generates notices for each land parcel."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"6-map-the-data-columns",children:"6. Map the Data Columns"}),"\n",(0,s.jsx)(n.p,{children:"Map the fields from your dataset to the required parameters. Ensure you select the appropriate columns from your input data:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Land Parcel Column"}),": Select the column containing land parcel numbers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Khata Number Column"}),": Select the column containing Khata numbers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sy-Subdivision Number"}),": Select the column for subdivision numbers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Acres and Hectares (Resurvey)"}),": Map the columns for acres and hectares as per resurvey data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Acres and Hectares (Old Data)"})," ",(0,s.jsx)(n.em,{children:"(Optional)"}),": Map these columns if old records are available."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pattadar Name"}),": Select the column containing pattadar names."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pattadar Relation Name"})," ",(0,s.jsx)(n.em,{children:"(Optional)"}),": If applicable, map the column for pattadar's relation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Remarks Column"})," ",(0,s.jsx)(n.em,{children:"(Optional)"}),": If there are remarks for each land record, map this column."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Classification Column"})," ",(0,s.jsx)(n.em,{children:"(Optional)"}),": If applicable, map the column for land classification."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"7-run-the-tool",children:"7. Run the Tool"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Double-check all inputs and parameters."}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Run"})," to start the process."]}),"\n",(0,s.jsx)(n.li,{children:"Wait for the processing to complete. The output layers will be generated automatically."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"8-view-the-output",children:"8. View the Output"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["The tool generates the following layers:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Notices_Data.gpkg"}),": Contains the refactored dataset for notices."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Khata_Data.gpkg"}),": Aggregated data for Khata-based notices (if selected)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Add these layers to your QGIS project to view the processed data."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"9-generate-the-notices",children:"9. Generate the Notices"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.strong,{children:"Atlas Generation"})," feature in QGIS to generate notices from the processed data.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Open the ",(0,s.jsx)(n.strong,{children:"Atlas"})," panel and select the output layer (e.g., ",(0,s.jsx)(n.code,{children:"Notices_Data"})," or ",(0,s.jsx)(n.code,{children:"Khata_Data"}),")."]}),"\n",(0,s.jsx)(n.li,{children:"Configure your page layout and export the notices in the desired format (e.g., PDF or PNG)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"tips-for-success",children:"Tips for Success"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure all required columns in your data are properly filled, mapped and formatted."}),"\n",(0,s.jsx)(n.li,{children:"Use the correct Telugu spelling for village and mandal names."}),"\n",(0,s.jsx)(n.li,{children:"For large datasets, consider splitting the data into smaller chunks to speed up processing."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input Data Error"}),": If the tool fails, check that the selected columns contain valid data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Output Not Displayed"}),": Ensure the output layers are added to the QGIS project."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Missing Notices"}),": Verify that all required fields are mapped correctly during input setup."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},65:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var r=t(7294);let s={},l=r.createContext(s);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);