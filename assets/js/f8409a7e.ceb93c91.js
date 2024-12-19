"use strict";(self.webpackChunkbhukamatha=self.webpackChunkbhukamatha||[]).push([["8147"],{9773:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>r,metadata:()=>i,assets:()=>d,toc:()=>u,contentTitle:()=>a});var i=JSON.parse('{"id":"intro","title":"Welcome","description":"Let\'s discover Bhukamtha.","source":"@site/docs/intro.mdx","sourceDirName":".","slug":"/","permalink":"/bhudocs/docs/","draft":false,"unlisted":false,"editUrl":"https://github.com/surveyorstories/bhudocs/edit/main/docs/intro.mdx","tags":[],"version":"current","lastUpdatedBy":"Lokesh Metta","lastUpdatedAt":1734625115000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"slug":"/"},"sidebar":"tutorialSidebar","next":{"title":"Next Steps","permalink":"/bhudocs/docs/nextsteps"}}'),l=t("5893"),s=t("65"),o=t("1824");let r={sidebar_position:1,slug:"/"},a="Welcome",d={},u=[{value:"Let&#39;s discover <strong>Bhukamtha</strong>.",id:"lets-discover-bhukamtha",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Installation",id:"installation",level:2},{value:"1. Download the Plugin",id:"1-download-the-plugin",level:3},{value:"2. Access QGIS Plugin Manager",id:"2-access-qgis-plugin-manager",level:3},{value:"3. Install the Plugin",id:"3-install-the-plugin",level:3}];function h(e){let n={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"welcome",children:"Welcome"})}),"\n",(0,l.jsxs)(n.h2,{id:"lets-discover-bhukamtha",children:["Let's discover ",(0,l.jsx)(n.strong,{children:"Bhukamtha"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Welcome to the ",(0,l.jsx)(n.strong,{children:"Bhukamatha Docs"})," We're your go-to source for all things related to the ",(0,l.jsx)(n.strong,{children:"Bhukamatha"})," plugin, designed specifically for QGIS in Mind of Resurvey. Gain a deeper understanding of the plugin's functionalities.\nTroubleshooting tips and FAQs: Quickly resolve any issues you encounter.Our mission is to assist you in successfully completing the ",(0,l.jsx)(n.strong,{children:"Andhrapradesh Resurvey Project"})," by providing comprehensive resources, updates, and support. Explore our site to unlock the full potential of this powerful tool!"]}),"\n",(0,l.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,l.jsxs)(n.p,{children:["Get started by ",(0,l.jsx)(n.strong,{children:"Downloading"})," the Plugin from Bhukamatha web or from here"]}),"\n",(0,l.jsxs)(n.admonition,{type:"warning",children:[(0,l.jsx)(n.mdxAdmonitionTitle,{children:(0,l.jsx)(n.strong,{children:"\uD83C\uDF35 Prerequisites"})}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Bhukamatha"})," requires ",(0,l.jsx)(n.strong,{children:"QGIS version 3.26"})," or newer for compatibility and functionality, along with the ",(0,l.jsx)(n.strong,{children:"Gautami"})," Telugu font installed on the system for proper rendering of Telugu text."]})]}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(n.h3,{id:"1-download-the-plugin",children:"1. Download the Plugin"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Click on \xa0\xa0 ",(0,l.jsx)(o.Z,{})," \xa0\xa0 button"]}),"\n",(0,l.jsx)(n.li,{children:"Locate the plugin file you want to install in your PC(Laptop)."}),"\n",(0,l.jsx)(n.li,{children:"The plugin file is usually in ZIP file format"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"2-access-qgis-plugin-manager",children:"2. Access QGIS Plugin Manager"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Launch the QGIS(>2.26) application on your computer."}),"\n",(0,l.jsx)(n.li,{children:'In the QGIS menu, go to "Plugins" Click on "Manage and Install Plugins".'}),"\n",(0,l.jsx)(n.li,{children:'In the Plugin Manager window, go to the "Installed" tab.'}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"3-install-the-plugin",children:"3. Install the Plugin"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:'Click on the "Install from ZIP" button.'}),"\n",(0,l.jsx)(n.li,{children:"Browse your computer to select the Bhukamatha plugin ZIP file you want to install."}),"\n",(0,l.jsx)(n.li,{children:'Click "Install Plugin."'}),"\n",(0,l.jsx)(n.li,{children:"Once installed, you may need to enable the plugin by checking the box next to its name."}),"\n",(0,l.jsx)(n.li,{children:"Close the Plugin Manager."}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{title:"success",type:"tip",children:(0,l.jsx)(n.p,{children:"Yeah, you did it! \uD83D\uDE80 You're now armed with incredible new tools at your fingertips. Let the adventure begin!"})})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},1824:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(5893),l=t(7294),s=t(430);let o=()=>{let[e,n]=(0,l.useState)(""),[t,o]=(0,l.useState)(null),[r,a]=(0,l.useState)([]),[d,u]=(0,l.useState)(!0),[h,c]=(0,l.useState)(null);return(0,l.useEffect)(()=>{s.Z.get("https://api.github.com/repos/opengisch/QField/releases").then(e=>{let t=e.data,i=t[0],l=i.assets[0];l&&(n(l.browser_download_url),o({name:i.name,version:i.tag_name})),a(t.slice(1,3).map(e=>({name:e.name,url:e.assets[0].browser_download_url}))),u(!1)}).catch(e=>{c("Error fetching release data."),u(!1),console.error("Error fetching release data:",e)})},[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("button",{className:"download-button",role:"button","aria-label":"Download button",children:["Download",(0,i.jsxs)("div",{className:"dropdown-content",children:[d?(0,i.jsx)("p",{children:"Loading..."}):h?(0,i.jsx)("p",{children:h}):(0,i.jsx)(i.Fragment,{children:t&&(0,i.jsxs)("a",{"aria-label":"Latest Release",href:e,download:!0,children:["Latest: ",t.name]})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"Old Releases"}),r.length>0?r.map((e,n)=>(0,i.jsx)("a",{href:e.url,download:!0,children:e.name},n)):(0,i.jsx)("p",{children:"No old releases available."})]}),(0,i.jsx)("a",{href:"https://github.com/opengisch/QField/releases",target:"_blank",rel:"noopener noreferrer",children:"All Releases"})]})]})})}},65:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var i=t(7294);let l={},s=i.createContext(l);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);