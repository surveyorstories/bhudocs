"use strict";(self.webpackChunkbhukamatha=self.webpackChunkbhukamatha||[]).push([["5296"],{8233:function(e,n,r){r.r(n),r.d(n,{default:()=>c,frontMatter:()=>l,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"Tutorial-Modules/village_map","title":"Village Map","description":"Shortcut to Launch: ALT + SHIFT + V","source":"@site/docs/Tutorial-Modules/village_map.md","sourceDirName":"Tutorial-Modules","slug":"/Tutorial-Modules/village_map","permalink":"/bhudocs/docs/Tutorial-Modules/village_map","draft":false,"unlisted":false,"editUrl":"https://github.com/surveyorstories/bhudocs/edit/main/docs/Tutorial-Modules/village_map.md","tags":[],"version":"current","lastUpdatedBy":"Lokesh Metta","lastUpdatedAt":1734107082000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"LPM Processing","permalink":"/bhudocs/docs/Tutorial-Modules/lpm_processing"},"next":{"title":"Stone Map","permalink":"/bhudocs/docs/Tutorial-Modules/stone_map"}}'),s=r("5893"),t=r("65");let l={sidebar_position:5},d="Village Map",a={},o=[{value:"Algorithm Overview",id:"algorithm-overview",level:3},{value:"Pre-Requisite Steps",id:"pre-requisite-steps",level:3},{value:"Data Requirement Table",id:"data-requirement-table",level:3},{value:"How To",id:"how-to",level:2},{value:"1. Create Topo Layers",id:"1-create-topo-layers",level:3},{value:"2. Prepare Your Data",id:"2-prepare-your-data",level:3},{value:"3. Run the Algorithm",id:"3-run-the-algorithm",level:3},{value:"4. Output",id:"4-output",level:3},{value:"Post-Processing Steps",id:"post-processing-steps",level:2},{value:"Key Considerations",id:"key-considerations",level:2},{value:"Important Notes",id:"important-notes",level:2}];function h(e){let n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"village-map",children:"Village Map"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Shortcut to Launch"}),": ",(0,s.jsx)(n.strong,{children:(0,s.jsx)("u",{children:"ALT + SHIFT + V"})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsxs)(n.p,{children:["This documentation is primarily generated by AI and may contain inaccuracies or incomplete information. A thorough manual review is still pending. Please ",(0,s.jsx)(n.a,{href:"../../feedback",children:"Report"})," any errors, inconsistencies, or suggestions for improvement to ensure accuracy and reliability."]})]}),"\n",(0,s.jsx)(n.h3,{id:"algorithm-overview",children:"Algorithm Overview"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Village Map Algorithm"})," is designed to generate a detailed village map by incorporating various parameters such as the ",(0,s.jsx)(n.strong,{children:"village boundary"}),", ",(0,s.jsx)(n.strong,{children:"Land parcel details"}),",",(0,s.jsx)(n.strong,{children:"Topo details"})," and notifications related to survey. The algorithm allows users to input data on land parcels, village details, and survey notifications, and outputs a final map aligned with the required survey standards."]}),"\n",(0,s.jsx)(n.h3,{id:"pre-requisite-steps",children:"Pre-Requisite Steps"}),"\n",(0,s.jsx)(n.p,{children:"Before running the algorithm, ensure that:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Project Saving"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure that the project is saved. The algorithm depends on saved project settings for output management."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Layer Setup"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Make sure the ",(0,s.jsx)(n.strong,{children:"village boundary layer"})," and ",(0,s.jsx)(n.strong,{children:"government land layer"})," are available in the project."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Projection Consistency"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ensure that the project and layers are in the same ",(0,s.jsx)(n.strong,{children:"Projection (CRS)"})," to avoid issues during processing."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"data-requirement-table",children:"Data Requirement Table"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Village Final Shape File"})}),(0,s.jsxs)(n.td,{children:["The final village boundary shapefile, usually in ",(0,s.jsx)(n.strong,{children:"polygon"})," format."]}),(0,s.jsx)(n.td,{children:"Shapefile (Polygon)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"LPM Number Column"})}),(0,s.jsx)(n.td,{children:"Column containing the Land Parcel Number (LPM) for identifying individual parcels."}),(0,s.jsx)(n.td,{children:"Field (Any)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Total Number of Land Parcels"})}),(0,s.jsx)(n.td,{children:"Input the total number of land parcels for the village."}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Government Land Shape File"})}),(0,s.jsxs)(n.td,{children:["Shape file representing government land in the village, usually in ",(0,s.jsx)(n.strong,{children:"polygon"})," format."]}),(0,s.jsx)(n.td,{children:"Shapefile (Polygon)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Mandal Name (Telugu)"})}),(0,s.jsxs)(n.td,{children:["Name of the mandal (administrative unit) in ",(0,s.jsx)(n.strong,{children:"Telugu"})," script."]}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Village Name (Telugu)"})}),(0,s.jsxs)(n.td,{children:["Name of the village in ",(0,s.jsx)(n.strong,{children:"Telugu"})," script."]}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Assistant Director Name (English)"})}),(0,s.jsxs)(n.td,{children:["Name of the Respected Assistant Director sir in ",(0,s.jsx)(n.strong,{children:"English"})," for the village."]}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Commissioner Name (English)"})}),(0,s.jsxs)(n.td,{children:["Name of the Respected Commissioner sir in ",(0,s.jsx)(n.strong,{children:"English"})," for the village."]}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"District Name (English)"})}),(0,s.jsxs)(n.td,{children:["Name of the district (in ",(0,s.jsx)(n.strong,{children:"English"}),") selected from the dropdown list."]}),(0,s.jsx)(n.td,{children:"Enum"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Mandal Name (English)"})}),(0,s.jsxs)(n.td,{children:["Name of the mandal (administrative unit) in ",(0,s.jsx)(n.strong,{children:"English"})," script."]}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Village Name (English)"})}),(0,s.jsxs)(n.td,{children:["Name of the village in ",(0,s.jsx)(n.strong,{children:"English"})," script."]}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Village Code"})}),(0,s.jsx)(n.td,{children:"Unique identifier for the village."}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Old Revision Survey Year"})}),(0,s.jsx)(n.td,{children:"Year of the old revision survey for the village."}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Extent as per Old Revision Survey (Acres)"})}),(0,s.jsxs)(n.td,{children:["Land extent as per the old revision survey in ",(0,s.jsx)(n.strong,{children:"Acres"}),"."]}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Extent as per Old Revision Survey (Hectares)"})}),(0,s.jsxs)(n.td,{children:["Land extent as per the old revision survey in ",(0,s.jsx)(n.strong,{children:"Hectares"}),"."]}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"New Resurvey Year"})}),(0,s.jsx)(n.td,{children:"Year of the new resurvey for the village."}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Extent as per New Resurvey (Acres)"})}),(0,s.jsxs)(n.td,{children:["Land extent as per the new resurvey in ",(0,s.jsx)(n.strong,{children:"Acres"}),"."]}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Extent as per New Resurvey (Hectares)"})}),(0,s.jsxs)(n.td,{children:["Land extent as per the new resurvey in ",(0,s.jsx)(n.strong,{children:"Hectares"}),"."]}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Notification 6(1) Gazette Number"})}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.strong,{children:"Gazette Number"})," of notification under section 6(1), used for the village."]}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Notification 6(1) Gazette Date"})}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.strong,{children:"Gazette Date"})," of notification under section 6(1), used for the village."]}),(0,s.jsx)(n.td,{children:"Date"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"RC Notification 6(1) Number"})}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.strong,{children:"RC Notification Number"})," under section 6(1), used for the village."]}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"RC Notification 6(1) Date"})}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.strong,{children:"RC Notification Date"})," under section 6(1), used for the village."]}),(0,s.jsx)(n.td,{children:"Date"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Notification 13 Gazette Number"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"Gazette Number"})," for the 13th notification, used for the village."]}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Notification 13 Gazette Date"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"Gazette Date"})," for the 13th notification, used for the village."]}),(0,s.jsx)(n.td,{children:"Date"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"how-to",children:"How To"}),"\n",(0,s.jsx)(n.h3,{id:"1-create-topo-layers",children:"1. Create Topo Layers"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Before running the algorithm"}),", use the ",(0,s.jsx)(n.strong,{children:"Create Topo Layers"})," tool from the toolset. This tool generates the following layers:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TopoPoint"}),": Point layer for topographic features."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TopoLine"}),": Line layer for topographic features."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TopoPolygon"}),": Polygon layer for topographic features."]}),"\n",(0,s.jsx)(n.li,{children:"These layers are necessary for proper visualization and representation of topographic data in the generated map."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-prepare-your-data",children:"2. Prepare Your Data"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure all input files (village shape file, government land shape file) are properly loaded in the project."}),"\n",(0,s.jsx)(n.li,{children:"Fill in the required fields, such as LPM number column, total number of land parcels, and other village details."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-run-the-algorithm",children:"3. Run the Algorithm"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Launch the ",(0,s.jsx)(n.strong,{children:"Village Map Algorithm"})," by filling in the input parameters."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The algorithm will:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Generate a village map with LPM boundaries and government land Parcels."}),"\n",(0,s.jsx)(n.li,{children:"Include survey notifications and revision details as per input fields."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4-output",children:"4. Output"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The generated village map will include:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A detailed map with the ",(0,s.jsx)(n.strong,{children:"LPM boundaries"})," and ",(0,s.jsx)(n.strong,{children:"government land boundaries"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Template of village map with village data aligned"}),"\n",(0,s.jsx)(n.li,{children:"Embedded notifications related to land surveys into village map template."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"post-processing-steps",children:"Post-Processing Steps"}),"\n",(0,s.jsx)(n.p,{children:"After running the algorithm, you can perform the following post-processing steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Review Map Accuracy"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Check the generated map to ensure that LPM boundaries and government land parcels are correctly represented."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Side Village Customization"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Easily add side village names and frill lines using pre-generated layers."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Modify Survey Details"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If there are any discrepancies in the survey year, extent, or notification details, adjust the relevant fields in master panel or  re-run the algorithm if necessary with appropriate data."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Final Template Adjustments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Make any required adjustments to the ",(0,s.jsx)(n.strong,{children:"A0"}),"  template based on project requirements."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Verify Output Layers"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure all generated layers (e.g., village map, land boundaries, notification details, and topo layers) are correctly aligned and properly labeled."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"key-considerations",children:"Key Considerations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Projection Consistency"}),": Ensure all layers and the project are in the same CRS (Coordinate Reference System) to avoid alignment issues during processing."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Save the Project"}),": Always save the project before running the algorithm to ensure proper output file management."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Topo Layers"}),": The ",(0,s.jsx)(n.strong,{children:"TopoPoint"}),", ",(0,s.jsx)(n.strong,{children:"TopoLine"}),", and ",(0,s.jsx)(n.strong,{children:"TopoPolygon"})," layers are required for topographic representation and should be created before running the algorithm."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Survey Notifications"}),": The algorithm handles multiple notifications (e.g., notification 6(1) Gazette, RC notifications) for proper documentation of land survey processes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Preserve Layer Names"}),": Changing the names of layers generated by the algorithm will disrupt functionality."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"important-notes",children:"Important Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The algorithm requires that ",(0,s.jsx)(n.strong,{children:"LPM number column"})," and other required fields are correctly specified in the input shape files to ensure accurate processing."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"District Name"}),", ",(0,s.jsx)(n.strong,{children:"Mandal Name"}),", and ",(0,s.jsx)(n.strong,{children:"Village Name"})," should match exactly as required for official documentation and notifications."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This documentation outlines the steps required to execute the ",(0,s.jsx)(n.strong,{children:"Village Map Algorithm"}),", ensuring that all parameters are set correctly for accurate map generation and output, including the creation of topographic layers before running the algorithm."]})]})}function c(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},65:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var i=r(7294);let s={},t=i.createContext(s);function l(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);