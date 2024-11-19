"use strict";(self.webpackChunkbhukamatha=self.webpackChunkbhukamatha||[]).push([["343"],{5001:function(e,t,a){a.d(t,{CS:()=>v,wj:()=>l,nO:()=>m,iZ:()=>f,n4:()=>c,Ne:()=>_,ci:()=>Z,cH:()=>k});var n=a("5893"),r=a("7294"),i=a("1558"),s=a("8259");function l(){let e=(0,s.Z)(),t=e?.data?.blogMetadata;if(!t)throw Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}let o=r.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:i=!1}=e,s=function(e){let{content:t,isBlogPostPage:a}=e;return(0,r.useMemo)(()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}),[t,a])}({content:a,isBlogPostPage:i});return(0,n.jsx)(o.Provider,{value:s,children:t})}function m(){let e=(0,r.useContext)(o);if(null===e)throw new i.i6("BlogPostProvider");return e}var u=a("3113"),h=a("9931");let d=e=>new Date(e).toISOString();function g(e){let t=e.map(p);return{author:1===t.length?t[0]:t}}function x(e,t,a){return e?{image:function(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function v(e){let{siteConfig:t}=(0,h.Z)(),{withBaseUrl:a}=(0,u.Cg)(),{metadata:{blogDescription:n,blogTitle:r,permalink:i}}=e,s=`${t.url}${i}`;return{"@context":"https://schema.org","@type":"Blog","@id":s,mainEntityOfPage:s,headline:r,description:n,blogPost:e.items.map(e=>(function(e,t,a){let{assets:n,frontMatter:r,metadata:i}=e,{date:s,title:l,description:o,lastUpdatedAt:c}=i,m=n.image??r.image,u=r.keywords??[],h=`${t.url}${i.permalink}`,v=c?d(c):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:l,name:l,description:o,datePublished:s,...v?{dateModified:v}:{},...g(i.authors),...x(m,a,l),...u?{keywords:u}:{}}})(e.content,t,a))}}function f(){let e=l(),{assets:t,metadata:a}=m(),{siteConfig:n}=(0,h.Z)(),{withBaseUrl:r}=(0,u.Cg)(),{date:i,title:s,description:o,frontMatter:c,lastUpdatedAt:v}=a,f=t.image??c.image,p=c.keywords??[],j=v?d(v):void 0,b=`${n.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":b,mainEntityOfPage:b,url:b,headline:s,name:s,description:o,datePublished:i,...j?{dateModified:j}:{},...g(a.authors),...x(f,r,s),...p?{keywords:p}:{},isPartOf:{"@type":"Blog","@id":`${n.url}${e.blogBasePath}`,name:e.blogTitle}}}function p(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}var j=a("6550"),b=a("1183"),w=a("2227"),N=a("7156");function k(e){let{pathname:t}=(0,j.TH)();return(0,r.useMemo)(()=>e.filter(e=>{var a,n;return a=e,n=t,(!a.unlisted||!!(0,N.Mg)(a.permalink,n))&&!0}),[e,t])}function Z(e){let t=Object.entries((0,w.vM)(e,e=>`${new Date(e.date).getFullYear()}`));return t.reverse(),t}function _(e){let{items:t,ulClassName:a,liClassName:r,linkClassName:i,linkActiveClassName:s}=e;return(0,n.jsx)("ul",{className:a,children:t.map(e=>(0,n.jsx)("li",{className:r,children:(0,n.jsx)(b.Z,{isNavLink:!0,to:e.permalink,className:i,activeClassName:s,children:e.title})},e.permalink))})}},8576:function(e,t,a){a.d(t,{Z:()=>b});var n=a("5893");a("7294");var r=a("7026"),i=a("1183");let s="githubSvg_Uu4N",l="xSvg_y3PF",o=function(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,n.jsx)("path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}),(0,n.jsx)("path",{d:"M3.6 9h16.8"}),(0,n.jsx)("path",{d:"M3.6 15h16.8"}),(0,n.jsx)("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),(0,n.jsx)("path",{d:"M12.5 3a17 17 0 0 1 0 18"})]})},c="authorSocials_rSDt",m="authorSocialLink_owbf",u={twitter:{Icon:function(e){return(0,n.jsx)("svg",{viewBox:"0 0 256 209",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",...e,children:(0,n.jsx)("path",{d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",fill:"#55acee"})})},label:"Twitter"},github:{Icon:function(e){return(0,n.jsx)("svg",{viewBox:"0 0 256 250",width:"1em",height:"1em",...e,className:(0,r.Z)(e.className,s),xmlns:"http://www.w3.org/2000/svg",style:{"--dark":"#000","--light":"#fff"},preserveAspectRatio:"xMidYMid",children:(0,n.jsx)("path",{d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"})})},label:"GitHub"},stackoverflow:{Icon:function(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.61 200",width:"1em",height:"1em",...e,children:[(0,n.jsx)("path",{d:"M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z",fill:"#bcbbbb"}),(0,n.jsx)("path",{d:"M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z",fill:"#f48024"})]})},label:"Stack Overflow"},linkedin:{Icon:function(e){return(0,n.jsx)("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256",...e,children:(0,n.jsx)("path",{d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",fill:"#0A66C2"})})},label:"LinkedIn"},x:{Icon:function(e){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 1200 1227",...e,className:(0,r.Z)(e.className,l),style:{"--dark":"#000","--light":"#fff"},children:(0,n.jsx)("path",{d:"M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"})})},label:"X"}};function h(e){var t;let{platform:a,link:s}=e;let{Icon:l,label:c}=u[t=a]??{Icon:o,label:t};return(0,n.jsx)(i.Z,{className:m,href:s,title:c,children:(0,n.jsx)(l,{className:(0,r.Z)(m)})})}function d(e){let{author:t}=e,a=Object.entries(t.socials??{});return(0,n.jsx)("div",{className:c,children:a.map(e=>{let[t,a]=e;return(0,n.jsx)(h,{platform:t,link:a},t)})})}var g=a("8608");let x={authorImage:"authorImage_XqGP","author-as-h1":"author-as-h1_n9oJ","author-as-h2":"author-as-h2_gXvM",authorDetails:"authorDetails_lV9A",authorName:"authorName_yefp",authorTitle:"authorTitle_nd0D",authorBlogPostCount:"authorBlogPostCount_iiJ5"};function v(e){return e.href?(0,n.jsx)(i.Z,{...e}):(0,n.jsx)(n.Fragment,{children:e.children})}function f(e){let{title:t}=e;return(0,n.jsx)("small",{className:x.authorTitle,title:t,children:t})}function p(e){let{name:t,as:a}=e;return a?(0,n.jsx)(g.Z,{as:a,className:x.authorName,children:t}):(0,n.jsx)("span",{className:x.authorName,children:t})}function j(e){let{count:t}=e;return(0,n.jsx)("span",{className:(0,r.Z)(x.authorBlogPostCount),children:t})}function b(e){let{as:t,author:a,className:i,count:s}=e,{name:l,title:o,url:c,imageURL:m,email:u,page:h}=a,g=h?.permalink||c||u&&`mailto:${u}`||void 0;return(0,n.jsxs)("div",{className:(0,r.Z)("avatar margin-bottom--sm",i,x[`author-as-${t}`]),children:[m&&(0,n.jsx)(v,{href:g,className:"avatar__photo-link",children:(0,n.jsx)("img",{className:(0,r.Z)("avatar__photo",x.authorImage),src:m,alt:l})}),(l||o)&&(0,n.jsxs)("div",{className:(0,r.Z)("avatar__intro",x.authorDetails),children:[(0,n.jsxs)("div",{className:"avatar__name",children:[l&&(0,n.jsx)(v,{href:g,children:(0,n.jsx)(p,{name:l,as:t})}),void 0!==s&&(0,n.jsx)(j,{count:s})]}),!!o&&(0,n.jsx)(f,{title:o}),(0,n.jsx)(d,{author:a})]})]})}},387:function(e,t,a){a.d(t,{Z:()=>B});var n=a("5893"),r=a("7294"),i=a("7026"),s=a("5622"),l=a("5705"),o=a("4751"),c=a("5001"),m=a("2007"),u=a("8608");function h(e){let{year:t,yearGroupHeadingClassName:a,children:r}=e;return(0,n.jsxs)("div",{role:"group",children:[(0,n.jsx)(u.Z,{as:"h3",className:a,children:t}),r]})}let d=(0,r.memo)(function(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:r}=e;if(!(0,m.L)().blog.sidebar.groupByYear)return(0,n.jsx)(r,{items:t});{let e=(0,c.ci)(t);return(0,n.jsx)(n.Fragment,{children:e.map(e=>{let[t,i]=e;return(0,n.jsx)(h,{year:t,yearGroupHeadingClassName:a,children:(0,n.jsx)(r,{items:i})},t)})})}}),g="sidebar_re4s",x="sidebarItemTitle_pO2u",v="sidebarItemList_Yudw",f="sidebarItem__DBe",p="sidebarItemLink_mo7H",j="sidebarItemLinkActive_I1ZP",b="yearGroupHeading_rMGB",w=e=>{let{items:t}=e;return(0,n.jsx)(c.Ne,{items:t,ulClassName:(0,i.Z)(v,"clean-list"),liClassName:f,linkClassName:p,linkActiveClassName:j})},N=(0,r.memo)(function(e){let{sidebar:t}=e,a=(0,c.cH)(t.items);return(0,n.jsx)("aside",{className:"col col--3",children:(0,n.jsxs)("nav",{className:(0,i.Z)(g,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,n.jsx)("div",{className:(0,i.Z)(x,"margin-bottom--md"),children:t.title}),(0,n.jsx)(d,{items:a,ListComponent:w,yearGroupHeadingClassName:b})]})})});var k=a("4202");let Z="yearGroupHeading_QT03",_=e=>{let{items:t}=e;return(0,n.jsx)(c.Ne,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function M(e){let{sidebar:t}=e,a=(0,c.cH)(t.items);return(0,n.jsx)(d,{items:a,ListComponent:_,yearGroupHeadingClassName:Z})}let C=(0,r.memo)(function(e){return(0,n.jsx)(k.Zo,{component:M,props:e})});function y(e){let{sidebar:t}=e,a=(0,l.i)();return t?.items.length?"mobile"===a?(0,n.jsx)(C,{sidebar:t}):(0,n.jsx)(N,{sidebar:t}):null}function B(e){let{sidebar:t,toc:a,children:r,...l}=e,o=t&&t.items.length>0;return(0,n.jsx)(s.Z,{...l,children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(y,{sidebar:t}),(0,n.jsx)("main",{className:(0,i.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:r}),a&&(0,n.jsx)("div",{className:"col col--2",children:a})]})})})}}}]);