"use strict";(self.webpackChunkbhukamatha=self.webpackChunkbhukamatha||[]).push([["7886"],{7834:function(e,n,i){i.r(n),i.d(n,{default:()=>c,frontMatter:()=>r,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"Tutorial-Modules/splitting_features","title":"Splitting of Features (Beta)","description":"Shortcut to Launch: Shift + Alt + B","source":"@site/docs/Tutorial-Modules/splitting_features.md","sourceDirName":"Tutorial-Modules","slug":"/Tutorial-Modules/splittingfeatures","permalink":"/bhudocs/docs/Tutorial-Modules/splittingfeatures","draft":false,"unlisted":false,"editUrl":"https://github.com/surveyorstories/bhudocs/edit/main/docs/Tutorial-Modules/splitting_features.md","tags":[],"version":"current","lastUpdatedBy":"Lokesh Metta","lastUpdatedAt":1734625115000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"slug":"splittingfeatures"},"sidebar":"tutorialSidebar","previous":{"title":"Tool Set","permalink":"/bhudocs/docs/Tutorial-Modules/toolset"},"next":{"title":"Land Parcel Numbering (Beta)","permalink":"/bhudocs/docs/Tutorial-Modules/lpnumbering"}}'),t=i("5893"),l=i("65");let r={sidebar_position:2,slug:"splittingfeatures"},o="Splitting of Features (Beta)",a={},d=[{value:"Key functionality of the Tool",id:"key-functionality-of-the-tool",level:2},{value:"Splitting Features Based on Visible Area",id:"splitting-features-based-on-visible-area",level:3},{value:"How It Works:",id:"how-it-works",level:4},{value:"How to Use",id:"how-to-use",level:2},{value:"1. Zoom into the Area to Split",id:"1-zoom-into-the-area-to-split",level:3},{value:"2. Select the Geometry to Split",id:"2-select-the-geometry-to-split",level:3},{value:"3. Drawing Lines and Temporary Rubber Band",id:"3-drawing-lines-and-temporary-rubber-band",level:3},{value:"How It Works:",id:"how-it-works-1",level:4},{value:"What You Can Do:",id:"what-you-can-do",level:4},{value:"Interaction:",id:"interaction",level:4},{value:"4. Display of Area for Polygons and Length for Lines Outside Boundaries",id:"4-display-of-area-for-polygons-and-length-for-lines-outside-boundaries",level:3},{value:"For Polygons:",id:"for-polygons",level:4},{value:"For Lines:",id:"for-lines",level:4},{value:"Key Notes:",id:"key-notes",level:4},{value:"5. Adding and Removing Vertices",id:"5-adding-and-removing-vertices",level:3},{value:"Adding Vertices:",id:"adding-vertices",level:4},{value:"Removing Vertices:",id:"removing-vertices",level:4},{value:"Interaction:",id:"interaction-1",level:4},{value:"6. Moving Vertices",id:"6-moving-vertices",level:3},{value:"How It Works:",id:"how-it-works-2",level:4},{value:"7. Closing and Opening Lines",id:"7-closing-and-opening-lines",level:3},{value:"Closing a Line:",id:"closing-a-line",level:4},{value:"Opening a Line:",id:"opening-a-line",level:4},{value:"8. Undo and Redo Actions",id:"8-undo-and-redo-actions",level:3},{value:"Key Shortcuts:",id:"key-shortcuts",level:4},{value:"9. Modes for Geometry Editing",id:"9-modes-for-geometry-editing",level:3},{value:"Modes Available:",id:"modes-available",level:4},{value:"How to Switch Modes:",id:"how-to-switch-modes",level:4},{value:"10. Visual Feedback and Updates",id:"10-visual-feedback-and-updates",level:3},{value:"What You&#39;ll See:",id:"what-youll-see",level:4},{value:"Refreshing Views:",id:"refreshing-views",level:4},{value:"11. Snap to Map",id:"11-snap-to-map",level:3},{value:"What Happens:",id:"what-happens",level:4},{value:"12. Right-Click to Split Based on the Drawn Line",id:"12-right-click-to-split-based-on-the-drawn-line",level:3},{value:"How It Works:",id:"how-it-works-3",level:4},{value:"Key Notes:",id:"key-notes-1",level:4},{value:"Frequently Used Buttons and Shortcuts",id:"frequently-used-buttons-and-shortcuts",level:2},{value:"Tips for Effective Use",id:"tips-for-effective-use",level:2},{value:"Configuring Snapping Settings",id:"configuring-snapping-settings",level:3},{value:"Managing Layers",id:"managing-layers",level:3},{value:"Handling Overlapping Geometries",id:"handling-overlapping-geometries",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Applications",id:"applications",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){let n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"splitting-of-features-beta",children:"Splitting of Features (Beta)"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Shortcut to Launch"}),": ",(0,t.jsx)(n.strong,{children:(0,t.jsx)("u",{children:"Shift + Alt + B"})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["This documentation is primarily generated by AI and may contain inaccuracies or incomplete information. A thorough manual review is still pending. Please ",(0,t.jsx)(n.a,{href:"../../feedback",children:"Report"})," any errors, inconsistencies, or suggestions for improvement to ensure accuracy and reliability."]})]}),"\n",(0,t.jsx)(n.p,{children:"This guide provides an overview of the functionality available in Split Features. The tool allows users to create, edit, and manage geometries interactively on the map canvas. It includes features like adding, removing, and moving vertices, as well as manipulating line segments and drawing temporary lines."}),"\n",(0,t.jsx)(n.h2,{id:"key-functionality-of-the-tool",children:"Key functionality of the Tool"}),"\n",(0,t.jsx)(n.h3,{id:"splitting-features-based-on-visible-area",children:"Splitting Features Based on Visible Area"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Split Features"})," tool primarily allows users to split geometries based on their on-screen representation in the map canvas. You can visually divide large geometries into smaller sections using the visible portion of the map."]}),"\n",(0,t.jsx)(n.h4,{id:"how-it-works",children:"How It Works:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The tool splits the selected feature (line or polygon) based on where temporary lines intersect the geometry in the visible area."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"This feature is especially useful for dividing large or complex features, ensuring that only the visible section of the feature is split."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,t.jsx)(n.h3,{id:"1-zoom-into-the-area-to-split",children:"1. Zoom into the Area to Split"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Zoom into the portion of the map canvas where you want to split the feature. The tool operates based on the visible area of the map."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-select-the-geometry-to-split",children:"2. Select the Geometry to Split"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Click on the feature (line or polygon) you want to split. This feature will be selected for the splitting operation."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"3-drawing-lines-and-temporary-rubber-band",children:"3. Drawing Lines and Temporary Rubber Band"}),"\n",(0,t.jsx)(n.p,{children:"The tool provides functionality to draw and manage lines visually on the canvas."}),"\n",(0,t.jsx)(n.h4,{id:"how-it-works-1",children:"How It Works:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"rubber band"})," represents the line being drawn."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"temporary rubber band"})," gives a preview of the next segment being added."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"what-you-can-do",children:"What You Can Do:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start a new line by clicking on the map."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"See the line's progress as you add points."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Adjust the style and color of the line for better visibility."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"interaction",children:"Interaction:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The line is drawn with red dots, and the temporary preview updates dynamically."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"4-display-of-area-for-polygons-and-length-for-lines-outside-boundaries",children:"4. Display of Area for Polygons and Length for Lines Outside Boundaries"}),"\n",(0,t.jsxs)(n.p,{children:["When the drawn line extends beyond the boundaries of the selected feature, the tool will automatically display either the ",(0,t.jsx)(n.strong,{children:"area"})," (for polygons) or the ",(0,t.jsx)(n.strong,{children:"length"})," (for lines) of the resulting geometries created by the split."]}),"\n",(0,t.jsx)(n.h4,{id:"for-polygons",children:"For Polygons:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If the feature is a polygon and the drawn line extends beyond its boundaries, the tool computes and displays the ",(0,t.jsx)(n.strong,{children:"area"})," of the new polygons formed by the split."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The area is displayed dynamically, reflecting the new geometry as the line is drawn."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"for-lines",children:"For Lines:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If the feature is a line and the drawn line extends outside the boundaries, the tool calculates and displays the ",(0,t.jsx)(n.strong,{children:"length"})," of the resulting line segments created by the intersection with the drawn line."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The displayed length will update in real time, reflecting the new geometry created by the split."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"key-notes",children:"Key Notes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The area (for polygons) or length (for lines) is calculated for each resulting geometry created when the feature is split by the drawn line."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The area or length values are updated dynamically as the user draws the line outside the selected feature boundaries."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"This helps users immediately see the effect of the split, whether they are dividing polygons or lines, and gives them accurate measurements."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"5-adding-and-removing-vertices",children:"5. Adding and Removing Vertices"}),"\n",(0,t.jsx)(n.p,{children:"Vertices define the shape of your lines or polygons. This tool allows you to add, remove, and adjust vertices."}),"\n",(0,t.jsx)(n.h4,{id:"adding-vertices",children:"Adding Vertices:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click near an existing line to add a new vertex."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The tool automatically detects the closest point on the line and places the vertex there."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"removing-vertices",children:"Removing Vertices:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Select a vertex and click to remove it."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the vertex is the first or last point of a closed shape, the line will open."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"interaction-1",children:"Interaction:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Vertices are shown as small red squares."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The selected vertex (or the one being moved) is highlighted in green."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"6-moving-vertices",children:"6. Moving Vertices"}),"\n",(0,t.jsx)(n.p,{children:"Adjust the shape of your geometry by moving its vertices."}),"\n",(0,t.jsx)(n.h4,{id:"how-it-works-2",children:"How It Works:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Enable the "Move Vertices" mode from the toolbar.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Drag vertices to their new position."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The geometry updates dynamically as you move."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"7-closing-and-opening-lines",children:"7. Closing and Opening Lines"}),"\n",(0,t.jsx)(n.p,{children:"You can choose whether a line should be open (a simple path) or closed (a loop)."}),"\n",(0,t.jsx)(n.h4,{id:"closing-a-line",children:"Closing a Line:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Click the "Close Line" button to connect the last point back to the first.'}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"opening-a-line",children:"Opening a Line:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Click the "Open Line" button to remove the connection between the last and first points.'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"8-undo-and-redo-actions",children:"8. Undo and Redo Actions"}),"\n",(0,t.jsx)(n.p,{children:"Quickly revert or reapply changes to your geometry."}),"\n",(0,t.jsx)(n.h4,{id:"key-shortcuts",children:"Key Shortcuts:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Ctrl + Z"}),": Undo the last change."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Ctrl + Y"}),": Redo the previously undone change."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"9-modes-for-geometry-editing",children:"9. Modes for Geometry Editing"}),"\n",(0,t.jsx)(n.p,{children:"The tool supports different modes to manage your geometries efficiently:"}),"\n",(0,t.jsx)(n.h4,{id:"modes-available",children:"Modes Available:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Adding Vertices"}),": Insert new points along the line."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Removing Vertices"}),": Delete unnecessary points."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Moving Vertices"}),": Drag and drop points to a new location."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Moving Line Segments"}),": Adjust entire segments of the line."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Moving the Whole Line"}),": Shift the entire geometry without altering its shape."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"how-to-switch-modes",children:"How to Switch Modes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the toolbar to select the desired mode."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Modes are exclusive, meaning only one can be active at a time."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"10-visual-feedback-and-updates",children:"10. Visual Feedback and Updates"}),"\n",(0,t.jsx)(n.p,{children:"The tool provides clear visual feedback as you interact with the map canvas."}),"\n",(0,t.jsx)(n.h4,{id:"what-youll-see",children:"What You'll See:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Red Squares"}),": Regular vertices."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Green Squares"}),": Highlighted vertices (e.g., during movement)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Red Dotted Lines"}),": The temporary rubber band preview."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"refreshing-views",children:"Refreshing Views:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The tool ensures the canvas updates automatically as you make changes."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Use the "Refresh" option if the screen doesn\u2019t update as expected.'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"11-snap-to-map",children:"11. Snap to Map"}),"\n",(0,t.jsx)(n.p,{children:"When adding or moving vertices, the tool attempts to snap to the nearest feature on the map for precision."}),"\n",(0,t.jsx)(n.h4,{id:"what-happens",children:"What Happens:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If snapping is available, the new vertex aligns with the nearest map feature."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If snapping is not possible, the vertex uses the cursor's position."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"12-right-click-to-split-based-on-the-drawn-line",children:"12. Right-Click to Split Based on the Drawn Line"}),"\n",(0,t.jsx)(n.p,{children:"Once you've drawn the line (either a full or temporary line), you can right-click on the  canvas  (line or polygon) to split it based on the drawn line."}),"\n",(0,t.jsx)(n.h4,{id:"how-it-works-3",children:"How It Works:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"After drawing the desired line, right-click anywhere on the map canvas."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["From the context menu, select ",(0,t.jsx)(n.strong,{children:"Split Feature"}),". This action splits the selected geometry (line or polygon) at the intersection points of the drawn line."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"key-notes-1",children:"Key Notes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The splitting operation will only occur if the drawn line intersects the selected feature."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The tool splits the feature precisely along the drawn line, based on the visible geometry in the current map canvas."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"This functionality allows users to quickly and accurately divide geometries without needing to manually select vertices or move shapes."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"frequently-used-buttons-and-shortcuts",children:"Frequently Used Buttons and Shortcuts"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Action"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"How to Perform It"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Start Drawing Line"}),(0,t.jsx)(n.td,{children:"Click on the map canvas"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Add a Vertex"}),(0,t.jsx)(n.td,{children:"Click near a line segment"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Remove a Vertex"}),(0,t.jsx)(n.td,{children:"Select the vertex and delete"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Close a Line"}),(0,t.jsx)(n.td,{children:'Click the "Close Line" button'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Open a Line"}),(0,t.jsx)(n.td,{children:'Click the "Open Line" button'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Move a Vertex"}),(0,t.jsx)(n.td,{children:"Drag and drop the vertex"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Undo Last Action"}),(0,t.jsxs)(n.td,{children:["Press ",(0,t.jsx)(n.strong,{children:"Ctrl + Z"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Redo Last Action"}),(0,t.jsxs)(n.td,{children:["Press ",(0,t.jsx)(n.strong,{children:"Ctrl + Y"})]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"tips-for-effective-use",children:"Tips for Effective Use"}),"\n",(0,t.jsx)(n.h3,{id:"configuring-snapping-settings",children:"Configuring Snapping Settings"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Before starting your edits, configure snapping settings for accuracy:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open the QGIS snapping toolbar or access snapping options via project settings."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Adjust the snapping tolerance to an appropriate value."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Enable snapping to vertices or segments as required."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set snapping priorities to handle overlapping geometries effectively."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The tool allows snapping to existing map points for precision."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"These settings enhance accuracy and streamline the workflow."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Utilize the snapping functionality to ensure vertices align with your desired features."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"managing-layers",children:"Managing Layers"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When working with multiple layers, consider isolating layers or using layer visibility options to reduce visual clutter."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.strong,{children:"layer lock"})," feature to avoid accidental edits on other layers."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"handling-overlapping-geometries",children:"Handling Overlapping Geometries"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Carefully plan your edits to ensure no unintentional overlaps are created."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Utilize the snapping functionality to align geometries precisely."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Temporarily hide layers that are not being edited to focus on the target layer."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Save Regularly:"})," Save your edits frequently to prevent accidental data loss."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Work Incrementally:"})," For complex geometries, perform edits in smaller, manageable steps."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Test Changes:"})," Use the undo/redo functionality to experiment without making permanent changes."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Snap Strategically:"})," Ensure snapping settings align with your project needs to maintain precision."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Layer Management:"})," Use visibility and isolation options to work effectively with overlapping or dense geometries."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"applications",children:"Applications"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Split Features"})," tool is useful for the following tasks:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Land Parcel Division"}),": Dividing land parcels into smaller sections for detailed analysis or reporting."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Boundary Adjustments"}),": Correcting boundaries that need to be split or reshaped based on new data."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Feature Editing"}),": Editing existing geometries, such as roads or infrastructure features, in the map display."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Split Features"})," tool is an intuitive and powerful tool for interacting with geometries based on their on-screen representation. By allowing users to split features precisely where they are visible in the map canvas, it offers flexibility and accuracy for land parcel divisions, boundary adjustments, and other spatial editing tasks. Whether for dividing large features or making precise corrections, this tool streamlines the process and enhances spatial data editing."]}),"\n",(0,t.jsx)(n.h2,{id:""})]})}function c(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},65:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return r}});var s=i(7294);let t={},l=s.createContext(t);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);