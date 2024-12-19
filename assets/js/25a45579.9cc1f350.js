"use strict";(self.webpackChunkbhukamatha=self.webpackChunkbhukamatha||[]).push([["1420"],{9575:function(e,n,i){i.r(n),i.d(n,{default:()=>c,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"Tutorial-Modules/pattasubdivision","title":"Patta Sub-Division","description":"The Patta Sub-Division Algorithm is a tool designed to automate and streamline the process of dividing land parcels and integrating various data layers in a QGIS environment. This algorithm is particularly useful for creating sub-divisions of revenue villages, and it ensures that the necessary spatial, tabular, and topological data are properly integrated. The output includes both spatial data and finalized layouts, including A4 and A3 LPM templates that are aligned with the project settings for seamless map export using the Atlas function in QGIS.","source":"@site/docs/Tutorial-Modules/pattasubdivision.md","sourceDirName":"Tutorial-Modules","slug":"/Tutorial-Modules/pattasubdivision","permalink":"/bhudocs/docs/Tutorial-Modules/pattasubdivision","draft":false,"unlisted":false,"editUrl":"https://github.com/surveyorstories/bhudocs/edit/main/docs/Tutorial-Modules/pattasubdivision.md","tags":[],"version":"current","lastUpdatedBy":"Lokesh Metta","lastUpdatedAt":1734625115000,"sidebarPosition":13,"frontMatter":{"sidebar_position":13,"slug":"pattasubdivision"},"sidebar":"tutorialSidebar","previous":{"title":"Master Panel","permalink":"/bhudocs/docs/Tutorial-Modules/master"}}'),r=i("5893"),t=i("65");let l={sidebar_position:13,slug:"pattasubdivision"},a="Patta Sub-Division",o={},d=[{value:"Purpose",id:"purpose",level:2},{value:"<strong>Pre-Requisite Steps</strong>",id:"pre-requisite-steps",level:6},{value:"Data Requirements",id:"data-requirements",level:3},{value:"How To",id:"how-to",level:2},{value:"1. Configure Input Files",id:"1-configure-input-files",level:3},{value:"2. Use the Create Topo Layers Tool",id:"2-use-the-create-topo-layers-tool",level:3},{value:"3. Define Algorithm Parameters",id:"3-define-algorithm-parameters",level:3},{value:"4. Execute the Patta Sub-Division Algorithm",id:"4-execute-the-patta-sub-division-algorithm",level:3},{value:"5. Template Generation for Map Export",id:"5-template-generation-for-map-export",level:3},{value:"Output Layers",id:"output-layers",level:2},{value:"A4 and A3 LPM Templates",id:"a4-and-a3-lpm-templates",level:3},{value:"Atlas Setup",id:"atlas-setup",level:3},{value:"Post-Processing Steps",id:"post-processing-steps",level:2},{value:"Tips and Warnings",id:"tips-and-warnings",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){let n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h6:"h6",header:"header",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"patta-sub-division",children:"Patta Sub-Division"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Patta Sub-Division Algorithm"})," is a tool designed to automate and streamline the process of dividing land parcels and integrating various data layers in a QGIS environment. This algorithm is particularly useful for creating sub-divisions of revenue villages, and it ensures that the necessary spatial, tabular, and topological data are properly integrated. The output includes both spatial data and finalized layouts, including ",(0,r.jsx)(n.strong,{children:"A4 and A3 LPM templates"})," that are aligned with the project settings for seamless map export using the ",(0,r.jsx)(n.strong,{children:"Atlas function"})," in QGIS."]}),"\n",(0,r.jsx)(n.h2,{id:"purpose",children:"Purpose"}),"\n",(0,r.jsxs)(n.p,{children:["The algorithm helps in generating a comprehensive sub-division of land records, enhancing the quality and accuracy of the mapping process. The tool integrates topological precision, data from different sources (like RLR, ROR, ULPIN), and generates standardized templates for seamless map export. The integration of ",(0,r.jsx)(n.strong,{children:"Topo Layers"})," ensures topological integrity before running the algorithm."]}),"\n",(0,r.jsx)(n.h6,{id:"pre-requisite-steps",children:(0,r.jsx)(n.strong,{children:"Pre-Requisite Steps"})}),"\n",(0,r.jsx)(n.p,{children:"Before running the algorithm, ensure the following:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Project Consistency"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Both ",(0,r.jsx)(n.strong,{children:"Village Final Shape File"})," and ",(0,r.jsx)(n.strong,{children:"Cutted Layer"})," layers must be in the ",(0,r.jsx)(n.strong,{children:"same projection"})," to avoid any misalignment during processing. Verify the projection settings of the layers and the project to ensure they match."]}),"\n",(0,r.jsxs)(n.li,{children:["If needed, adjust the projection by right-clicking the layer and choosing ",(0,r.jsx)(n.strong,{children:"Layer CRS"})," or adjusting the ",(0,r.jsx)(n.strong,{children:"Project CRS"})," settings."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Save the Project"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The QGIS project must be saved before running the algorithm, as it depends on the project directory for saving output files and layers."}),"\n",(0,r.jsx)(n.li,{children:"Ensure that all layers are correctly loaded and saved in the project to maintain integrity during the algorithm execution."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"data-requirements",children:"Data Requirements"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Parameter"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Village Final Shape File"})}),(0,r.jsx)(n.td,{children:"The final approved shapefile of the village boundary, typically containing polygon data."}),(0,r.jsx)(n.td,{children:"Shapefile (Polygon)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Cutted Layer"})}),(0,r.jsx)(n.td,{children:"A layer representing the subdivisions or cuts to be applied to the village polygons."}),(0,r.jsx)(n.td,{children:"Shapefile (Line/Polygon)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Land Parcel Number Column"})}),(0,r.jsx)(n.td,{children:"Column containing land parcel number for identifying individual parcels in the village shape."}),(0,r.jsx)(n.td,{children:"Field (Any)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Area in Acres Column"})}),(0,r.jsx)(n.td,{children:"Column containing area information in acres for land parcels."}),(0,r.jsx)(n.td,{children:"Field (Any)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Area in Hectares Column"})}),(0,r.jsx)(n.td,{children:"Column containing area information in hectares for land parcels."}),(0,r.jsx)(n.td,{children:"Field (Any)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Create Side Villages Polygon Layer"})}),(0,r.jsx)(n.td,{children:"Option to generate a polygon layer for side villages."}),(0,r.jsx)(n.td,{children:"Boolean"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Frill Line Length (Multi Ring Length)"})}),(0,r.jsx)(n.td,{children:"The length of the frill line to be applied around Land Parcel boundaries."}),(0,r.jsx)(n.td,{children:"Distance (1-20)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"RLR/ROR File"})}),(0,r.jsx)(n.td,{children:"Excel file containing Resurvey Land Register (RLR) or Records of Rights (ROR)."}),(0,r.jsx)(n.td,{children:"File (*.xlsx)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Select File Type (RLR/ROR)"})}),(0,r.jsx)(n.td,{children:"Dropdown to specify the type of file selected (either RLR or ROR)."}),(0,r.jsx)(n.td,{children:"Enum"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"ULPIN Layer"})}),(0,r.jsx)(n.td,{children:"CSV file containing Unique Land Parcel Identification Numbers (ULPIN) data."}),(0,r.jsx)(n.td,{children:"File (*.csv)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"LP Number Column"})}),(0,r.jsx)(n.td,{children:"Column containing LP (Land Parcel) numbers in the ULPIN layer."}),(0,r.jsx)(n.td,{children:"Field (Any)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"ULPIN Number Column"})}),(0,r.jsx)(n.td,{children:"Column containing ULPIN numbers in the ULPIN layer."}),(0,r.jsx)(n.td,{children:"Field (Any)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"7-Digit Revenue Village Code"})}),(0,r.jsx)(n.td,{children:"Unique 7-digit code identifying the revenue village."}),(0,r.jsx)(n.td,{children:"String"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Village Name (Telugu)"})}),(0,r.jsx)(n.td,{children:"Name of the village in Telugu script."}),(0,r.jsx)(n.td,{children:"String"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Mandal Name (Telugu)"})}),(0,r.jsx)(n.td,{children:"Name of the mandal (administrative unit) in Telugu script."}),(0,r.jsx)(n.td,{children:"String"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"District Name (English)"})}),(0,r.jsx)(n.td,{children:"Name of the district selected from a dropdown list."}),(0,r.jsx)(n.td,{children:"Enum"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Village Surveyor Name"})}),(0,r.jsx)(n.td,{children:"Name of the surveyor responsible for the village."}),(0,r.jsx)(n.td,{children:"String"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"how-to",children:"How To"}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsx)(n.p,{children:"Ensure that the project and both the layers  are in the same Projection (CRS) and project must be saved before running the algorithm."})]}),"\n",(0,r.jsx)(n.h3,{id:"1-configure-input-files",children:"1. Configure Input Files"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Load Spatial Data"}),":"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Load the ",(0,r.jsx)(n.strong,{children:"Village Final Shape File"})," and ",(0,r.jsx)(n.strong,{children:"Cutted Layer"})," (polygon or line) into your QGIS project."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.strong,{children:"Layer > Add Layer > Add Vector Layer"})," or drag-and-drop the files."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Load Tabular Data"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Choose the appropriate ",(0,r.jsx)(n.strong,{children:"RLR/ROR File"})," and ",(0,r.jsx)(n.strong,{children:"ULPIN Layer"})," through the file selection interface."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"2-use-the-create-topo-layers-tool",children:"2. Use the Create Topo Layers Tool"}),"\n",(0,r.jsxs)(n.p,{children:["Before running the algorithm, use the ",(0,r.jsx)(n.strong,{children:"Create Topo Layers"})," tool to generate topological data that ensures the spatial integrity of the sub-division process:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Create Topo Layers"}),":"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Before running the algorithm"}),", use the ",(0,r.jsx)(n.strong,{children:"Create Topo Layers"})," tool from the toolset. This tool generates the following layers:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"TopoPoint"}),": Point layer for topographic features."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"TopoLine"}),": Line layer for topographic features."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"TopoPolygon"}),": Polygon layer for topographic features."]}),"\n",(0,r.jsxs)(n.li,{children:["These layers are necessary for proper visualization and representation of topographic data in the generated map. for detailed instructions visit ",(0,r.jsx)(n.a,{href:"./toolset#1-topo-layers",children:(0,r.jsx)(n.strong,{children:"How to create Topo Layers"})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Validate Topo Layers"}),":"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure that these topo layers are aligned correctly and that no topological errors are present in the generated layers."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"3-define-algorithm-parameters",children:"3. Define Algorithm Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Select Data Fields"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ensure all fields, such as ",(0,r.jsx)(n.strong,{children:"Land Parcel Number Column"}),", ",(0,r.jsx)(n.strong,{children:"Area in Acres Column"}),", ",(0,r.jsx)(n.strong,{children:"Area in Hectares Column"}),", and the ",(0,r.jsx)(n.strong,{children:"LP Number Column"})," in the ULPIN layer, are correctly mapped."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Set Village Information"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Enter the ",(0,r.jsx)(n.strong,{children:"7-Digit Revenue Village Code"}),", ",(0,r.jsx)(n.strong,{children:"Village Name (Telugu)"}),", ",(0,r.jsx)(n.strong,{children:"Mandal Name (Telugu)"}),", and ",(0,r.jsx)(n.strong,{children:"District Name"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"4-execute-the-patta-sub-division-algorithm",children:"4. Execute the Patta Sub-Division Algorithm"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Once all parameters are configured, click ",(0,r.jsx)(n.strong,{children:"Run"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"The algorithm will process the data and generate:"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Sub-divided land records based on the Cutted Layer."}),"\n",(0,r.jsx)(n.li,{children:"Topological accuracy for the land parcels."}),"\n",(0,r.jsx)(n.li,{children:"A side villages polygon layer (if selected)."}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsxs)(n.p,{children:["All layers and files generated by the Panel are saved in the ",(0,r.jsx)(n.strong,{children:"Project Directory"}),"."]})]}),"\n",(0,r.jsx)(n.h3,{id:"5-template-generation-for-map-export",children:"5. Template Generation for Map Export"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"A4 and A3 LPM Templates"}),":"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The algorithm automatically generates both ",(0,r.jsx)(n.strong,{children:"A4"})," and ",(0,r.jsx)(n.strong,{children:"A3 LPM templates"})," for map export. These templates are pre-aligned with the project\u2019s settings to ensure accurate scaling and positioning when using QGIS\u2019s ",(0,r.jsx)(n.strong,{children:"Atlas"})," function."]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Template Alignment"}),":"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Both templates are configured to match the project\u2019s spatial reference system, ensuring that all maps generated through the Atlas function are correctly scaled for printing or distribution."}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"output-layers",children:"Output Layers"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Sub-divided Village Layer"}),": The final polygon layer containing sub-divisions of land parcels."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Topo Layers"}),":"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"TopoPoint"}),"\n",(0,r.jsx)(n.li,{children:"TopoLine"}),"\n",(0,r.jsx)(n.li,{children:"TopoPolygon"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Side Village Frill Lines"}),": Optional lines marking the boundaries of side villages."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ULPIN Linked Layer"}),": A layer linking ULPIN numbers with the respective land parcels."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"a4-and-a3-lpm-templates",children:"A4 and A3 LPM Templates"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The algorithm automatically adds both the ",(0,r.jsx)(n.strong,{children:"A4 LPM template"})," and the ",(0,r.jsx)(n.strong,{children:"A3 LPM template"})," to the project."]}),"\n",(0,r.jsx)(n.li,{children:"These templates are aligned with the current project settings to ensure consistent page size and layout for printing."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"atlas-setup",children:"Atlas Setup"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The generated ",(0,r.jsx)(n.strong,{children:"A4"})," and ",(0,r.jsx)(n.strong,{children:"A3"})," templates are integrated into the ",(0,r.jsx)(n.strong,{children:"Atlas function"})," in QGIS, enabling seamless generation of map layouts for the sub-divided parcels. This ensures that maps can be exported or printed without manual adjustments."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"post-processing-steps",children:"Post-Processing Steps"}),"\n",(0,r.jsx)(n.p,{children:"After executing the algorithm, you may need to perform some adjustments for final map presentation and data accuracy:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Adjust Topo Layers"}),":"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If any errors are detected in the ",(0,r.jsx)(n.strong,{children:"TopoPoint"}),", ",(0,r.jsx)(n.strong,{children:"TopoLine"}),", or ",(0,r.jsx)(n.strong,{children:"TopoPolygon"})," layers, make corrections manually by selecting the appropriate layer and editing the geometry."]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Add Junction Stones"}),":"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If required, insert ",(0,r.jsx)(n.strong,{children:"Bi-Junction (Old/New)"})," or ",(0,r.jsx)(n.strong,{children:"Tri-Junction (Old/New)"})," stones using the pre-existing stone layers (TopoPoint)."]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Modify Side Villages"}),":"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the side villages layer has been created, use the ",(0,r.jsx)(n.strong,{children:"Side Village Frill Line"})," and ",(0,r.jsx)(n.strong,{children:"Side Village Layer"})," to adjust village boundary labels or frill line placement."]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Review Map Templates"}),":"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Review both the ",(0,r.jsx)(n.strong,{children:"A4"})," and ",(0,r.jsx)(n.strong,{children:"A3 LPM templates"})," generated during the process. Make any necessary adjustments in the layout for print or export."]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Verify Layer Integrity"}),":"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure that no layers have been renamed or altered, as this could disrupt the functionality of the algorithm."}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"tips-and-warnings",children:"Tips and Warnings"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Save Your Project"}),":"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Always save your QGIS project before running the algorithm to avoid data loss."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ensure Proper Layer Names"}),":"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Avoid renaming any layers generated by the algorithm, as it may disrupt the workflow."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Verify Data Consistency"}),":"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Make sure that all spatial and tabular data are correctly aligned and that no field mappings are missing."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Double-Check Telugu Names"}),":"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure that Telugu names for the village and mandal are typed accurately, as this impacts the final report."}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Patta Sub-Division Algorithm"})," provides a powerful tool for automating the creation and management of land record sub-divisions. It seamlessly integrates spatial data, land records, and topological accuracy, while generating map templates for professional-quality output. By following the steps outlined above, users can efficiently process, visualize, and export land subdivision maps with minimal manual intervention."]})]})}function c(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},65:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return l}});var s=i(7294);let r={},t=s.createContext(r);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);