"use strict";(self.webpackChunkbhukamatha=self.webpackChunkbhukamatha||[]).push([["2998"],{3474:function(e,t,n){n.r(t),n.d(t,{default:()=>v});var r=n("5893");n("7294");var i=n("7026"),l=n("3314"),a=n("3212"),s=n("5001"),o=n("387"),c=n("3886"),d=n("4751"),u=n("9034");function h(e){let{nextItem:t,prevItem:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,r.jsx)(u.Z,{...n,subLabel:(0,r.jsx)(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,r.jsx)(u.Z,{...t,subLabel:(0,r.jsx)(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function m(){let{assets:e,metadata:t}=(0,s.nO)(),{title:n,description:i,date:a,tags:o,authors:c,frontMatter:d}=t,{keywords:u}=d,h=e.image??d.image;return(0,r.jsxs)(l.d,{title:d.title_meta??n,description:i,keywords:u,image:h,children:[(0,r.jsx)("meta",{property:"og:type",content:"article"}),(0,r.jsx)("meta",{property:"article:published_time",content:a}),c.some(e=>e.url)&&(0,r.jsx)("meta",{property:"article:author",content:c.map(e=>e.url).filter(Boolean).join(",")}),o.length>0&&(0,r.jsx)("meta",{property:"article:tag",content:o.map(e=>e.label).join(",")})]})}var f=n("8766");function p(){let e=(0,s.iZ)();return(0,r.jsx)(f.Z,{children:(0,r.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var g=n("1955"),x=n("9945");function b(e){let{sidebar:t,children:n}=e,{metadata:i,toc:l}=(0,s.nO)(),{nextItem:a,prevItem:d,frontMatter:u}=i,{hide_table_of_contents:m,toc_min_heading_level:f,toc_max_heading_level:p}=u;return(0,r.jsxs)(o.Z,{sidebar:t,toc:!m&&l.length>0?(0,r.jsx)(g.Z,{toc:l,minHeadingLevel:f,maxHeadingLevel:p}):void 0,children:[(0,r.jsx)(x.Z,{metadata:i}),(0,r.jsx)(c.Z,{children:n}),(a||d)&&(0,r.jsx)(h,{nextItem:a,prevItem:d})]})}function v(e){let t=e.content;return(0,r.jsx)(s.n4,{content:e.content,isBlogPostPage:!0,children:(0,r.jsxs)(l.FG,{className:(0,i.Z)(a.k.wrapper.blogPages,a.k.page.blogPostPage),children:[(0,r.jsx)(m,{}),(0,r.jsx)(p,{}),(0,r.jsx)(b,{sidebar:e.sidebar,children:(0,r.jsx)(t,{})})]})})}},9945:function(e,t,n){n.d(t,{Z:()=>x});var r=n("5893");n("7294");var i=n("7026"),l=n("4751"),a=n("8766");function s(){return(0,r.jsx)(l.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(l.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(a.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,r.jsx)(l.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,r.jsx)(l.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var h=n("3212"),m=n("2575");function f(e){let{className:t}=e;return(0,r.jsx)(m.Z,{type:"caution",title:(0,r.jsx)(d,{}),className:(0,i.Z)(t,h.k.common.draftBanner),children:(0,r.jsx)(u,{})})}function p(e){let{className:t}=e;return(0,r.jsx)(m.Z,{type:"caution",title:(0,r.jsx)(s,{}),className:(0,i.Z)(t,h.k.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function g(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(p,{...e})]})}function x(e){let{metadata:t}=e,{unlisted:n,frontMatter:i}=t;return(0,r.jsxs)(r.Fragment,{children:[(n||i.unlisted)&&(0,r.jsx)(g,{}),i.draft&&(0,r.jsx)(f,{})]})}},1955:function(e,t,n){n.d(t,{Z:()=>s});var r=n("5893");n("7294");var i=n("7026"),l=n("9450");let a="tableOfContents_bqdL";function s(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.Z)(a,"thin-scrollbar",t),children:(0,r.jsx)(l.Z,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},9450:function(e,t,n){n.d(t,{Z:()=>c});var r=n("5893"),i=n("7294"),l=n("2007");function a(e){let t=e.getBoundingClientRect();return t.top===t.bottom?a(e.parentNode):t}var s=n("1183");let o=i.memo(function e(t){let{toc:n,className:i,linkClassName:l,isChild:a}=t;return n.length?(0,r.jsx)("ul",{className:a?void 0:i,children:n.map(t=>(0,r.jsxs)("li",{children:[(0,r.jsx)(s.Z,{to:`#${t.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,r.jsx)(e,{isChild:!0,toc:t.children,className:i,linkClassName:l})]},t.id))}):null});function c(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...h}=e,m=(0,l.L)(),f=d??m.tableOfContents.minHeadingLevel,p=u??m.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,i.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:r,maxHeadingLevel:i}=t;return n.flatMap(t=>{var n;let l=e({toc:t.children,minHeadingLevel:r,maxHeadingLevel:i});return(n=t).level>=r&&n.level<=i?[{...t,children:l}]:l})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t});let r=[];return t.forEach(e=>{let{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):r.push(i)}),r}(t),minHeadingLevel:n,maxHeadingLevel:r}),[t,n,r])}({toc:t,minHeadingLevel:f,maxHeadingLevel:p});return!function(e){let t=(0,i.useRef)(void 0),n=function(){let e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,i.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,i.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:r,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:s}=e;function o(){var e;let o=(e=r,Array.from(document.getElementsByClassName(e))),c=function(e,t){let{anchorTopOffset:n}=t,r=e.find(e=>a(e).top>=n);if(r){var i;return(i=a(r)).top>0&&i.bottom<window.innerHeight/2?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,r=[];for(let e=t;e<=n;e+=1)r.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:s}),{anchorTopOffset:n.current}),d=o.find(e=>{var t;return c&&c.id===decodeURIComponent((t=e).href.substring(t.href.indexOf("#")+1))});o.forEach(e=>{var n;n=e,e===d?(t.current&&t.current!==n&&t.current.classList.remove(i),n.classList.add(i),t.current=n):n.classList.remove(i)})}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}},[e,n])}((0,i.useMemo)(()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:p}},[s,c,f,p])),(0,r.jsx)(o,{toc:g,className:n,linkClassName:s,...h})}}}]);