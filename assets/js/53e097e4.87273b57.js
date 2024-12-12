"use strict";(self.webpackChunkbhukamatha=self.webpackChunkbhukamatha||[]).push([["3440"],{4210:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>c,assets:()=>d,toc:()=>a,frontMatter:()=>l});var s=JSON.parse('{"id":"Tutorial-Modules/identify_changes","title":"Identify Changes","description":"This documentation is primarily generated by AI and may contain inaccuracies or incomplete information. A thorough manual review is still pending. Please Report any errors, inconsistencies, or suggestions for improvement to ensure accuracy and reliability.","source":"@site/docs/Tutorial-Modules/identify_changes.md","sourceDirName":"Tutorial-Modules","slug":"/Tutorial-Modules/identify_changes","permalink":"/bhudocs/docs/Tutorial-Modules/identify_changes","draft":false,"unlisted":false,"editUrl":"https://github.com/surveyorstories/bhudocs/edit/main/docs/Tutorial-Modules/identify_changes.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"tutorialSidebar","previous":{"title":"Add Layouts to Project","permalink":"/bhudocs/docs/Tutorial-Modules/adding_templates"},"next":{"title":"Adjusting Point IDs","permalink":"/bhudocs/docs/Tutorial-Modules/adjusting_pointid"}}'),r=i("5893"),t=i("65");let l={sidebar_position:9},o="Identify Changes",d={},a=[{value:"Data Required",id:"data-required",level:2},{value:"How to",id:"how-to",level:2},{value:"1. Run the algorithm",id:"1-run-the-algorithm",level:3},{value:"2. View Results",id:"2-view-results",level:3},{value:"Expected Results",id:"expected-results",level:2},{value:"Error Messages",id:"error-messages",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Tips for Best Results",id:"tips-for-best-results",level:3}];function h(e){let n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"identify-changes",children:"Identify Changes"})}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsxs)(n.p,{children:["This documentation is primarily generated by AI and may contain inaccuracies or incomplete information. A thorough manual review is still pending. Please ",(0,r.jsx)(n.a,{href:"../../feedback",children:"Report"})," any errors, inconsistencies, or suggestions for improvement to ensure accuracy and reliability."]})]}),"\n",(0,r.jsxs)(n.p,{children:['The "Identify Changes" algorithm is a tool designed for QGIS to detect and highlight differences between two vector layers: a ',(0,r.jsx)(n.strong,{children:"Reference Layer"})," and a ",(0,r.jsx)(n.strong,{children:"New Modified Layer"}),". This tool supports ",(0,r.jsx)(n.strong,{children:"Point"}),", ",(0,r.jsx)(n.strong,{children:"Line"}),", and ",(0,r.jsx)(n.strong,{children:"Polygon"})," geometries, and it outputs the differences in vertices and geometries as new layers. It is ideal for tasks such as validating changes in cadastral surveys or GIS projects."]}),"\n",(0,r.jsx)(n.h2,{id:"data-required",children:"Data Required"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Column"}),(0,r.jsx)(n.th,{children:"Expecting Value (Description)"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"New Modified Layer"}),(0,r.jsx)(n.td,{children:"This is the updated shapefile containing the changes. Ensure this layer is free of topology errors for accurate results. Supported geometry types: Point, Line, or Polygon."}),(0,r.jsx)(n.td,{children:"Shapefile"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Reference Layer"}),(0,r.jsx)(n.td,{children:"This is the original shapefile used for comparison. Supported geometry types: Point, Line, or Polygon."}),(0,r.jsx)(n.td,{children:"Shapefile"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Changed Vertices"}),(0,r.jsx)(n.td,{children:"The output layer for modified vertices. Default: Temporary layer."}),(0,r.jsx)(n.td,{children:"Path"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Changed Features"}),(0,r.jsx)(n.td,{children:"The output layer for modified geometries. Default: Temporary layer."}),(0,r.jsx)(n.td,{children:"Path"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Open output file after running algorithm"}),(0,r.jsx)(n.td,{children:"Option to automatically open the output layer in QGIS Project after running the algorithm. Default: Yes."}),(0,r.jsx)(n.td,{children:"Boolean"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This Algorithm supports batch process"})}),"\n",(0,r.jsx)(n.h2,{id:"how-to",children:"How to"}),"\n",(0,r.jsx)(n.h3,{id:"1-run-the-algorithm",children:"1. Run the algorithm"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Ensure any pending edits are committed before running this tool. Layers must have the same CRS for accurate results."})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Open the "Identify Changes" tool in the QGIS processing toolbox.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Select the required input layers."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Specify output paths for Changed Vertices and Changed Result (or leave them as temporary layers)."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Run"})," to start the algorithm."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"2-view-results",children:"2. View Results"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The results will be added to your QGIS project (Open output file after running algorithm is checked):","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Changed Vertices"})," will highlight all modified vertices."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Changed Features"})," will show all modified geometries, with appropriate naming (e.g., Changed Points, Lines, or Polygons)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"expected-results",children:"Expected Results"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.strong,{children:"Changed Vertices"})," layer showing all modified points across the two input layers."]}),"\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.strong,{children:"Changed Features"})," layer showing altered geometries,Temporary outputs are dynamically named for convenience  (e.g., Changed Points, Lines, or Polygons)."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"error-messages",children:"Error Messages"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Reference Layer is Invalid"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure the selected Reference Layer is a valid vector layer."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Changed Features is Invalid"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Verify the New Modified Layer is correctly loaded and free of topology errors."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"limitations",children:"Limitations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This tool may be computationally intensive for very large datasets."}),"\n",(0,r.jsx)(n.li,{children:"Topology errors in the New Modified Layer can lead to inaccurate results."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"tips-for-best-results",children:"Tips for Best Results"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Check Topology"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Validate and clean your shapefiles to ensure accuracy."}),"\n",(0,r.jsx)(n.li,{children:"Use QGIS's built-in topology checker."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Use Spatial Indexing"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If working with large datasets, ensure spatial indexing is enabled for better performance."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Save Outputs"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"While temporary layers are created by default, saving outputs ensures you retain results after QGIS is closed."}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},65:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return l}});var s=i(7294);let r={},t=s.createContext(r);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);