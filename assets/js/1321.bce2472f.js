"use strict";(self.webpackChunkbhukamatha=self.webpackChunkbhukamatha||[]).push([["1321"],{1080:function(e,t,l){l.d(t,{Z:()=>T});var n=l("5893");l("7294");var r=l("7026"),a=l("4183");function s(e){let{children:t,className:l}=e;return(0,n.jsx)("article",{className:l,children:t})}var i=l("3012");let o="title_f1Hy";function u(e){let{className:t}=e,{metadata:l,isBlogPostPage:s}=(0,a.nO)(),{permalink:u,title:c}=l;return(0,n.jsx)(s?"h1":"h2",{className:(0,r.Z)(o,t),children:s?c:(0,n.jsx)(i.Z,{to:u,children:c})})}var c=l("6025"),m=l("3115"),d=l("1437");let h="container_mt6G";function g(e){let{readingTime:t}=e,l=function(){let{selectMessage:e}=(0,m.c)();return t=>{let l=Math.ceil(t);return e(l,(0,c.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:l}))}}();return(0,n.jsx)(n.Fragment,{children:l(t)})}function x(e){let{date:t,formattedDate:l}=e;return(0,n.jsx)("time",{dateTime:t,children:l})}function f(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function p(e){let t,{className:l}=e,{metadata:s}=(0,a.nO)(),{date:i,readingTime:o}=s,u=(0,d.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,n.jsxs)("div",{className:(0,r.Z)(h,"margin-vert--md",l),children:[(0,n.jsx)(x,{date:i,formattedDate:(t=i,u.format(new Date(t)))}),void 0!==o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{}),(0,n.jsx)(g,{readingTime:o})]})]})}var j=l("1389");let v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function b(e){let{className:t}=e,{metadata:{authors:l},assets:s}=(0,a.nO)();if(0===l.length)return null;let i=l.every(e=>{let{name:t}=e;return!t}),o=1===l.length;return(0,n.jsx)("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",i?v.imageOnlyAuthorRow:"row",t),children:l.map((e,t)=>(0,n.jsx)("div",{className:(0,r.Z)(!i&&(o?"col col--12":"col col--6"),i?v.imageOnlyAuthorCol:v.authorCol),children:(0,n.jsx)(j.Z,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t))})}function Z(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(u,{}),(0,n.jsx)(p,{}),(0,n.jsx)(b,{})]})}var _=l("8365"),N=l("6798");function w(e){let{children:t,className:l}=e,{isBlogPostPage:s}=(0,a.nO)();return(0,n.jsx)("div",{id:s?_.blogPostContainerID:void 0,className:(0,r.Z)("markdown",l),children:(0,n.jsx)(N.Z,{children:t})})}var k=l("4681"),O=l("9230"),y=l("2501");function F(){return(0,n.jsx)("b",{children:(0,n.jsx)(c.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function R(e){let{blogPostTitle:t,...l}=e;return(0,n.jsx)(i.Z,{"aria-label":(0,c.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...l,children:(0,n.jsx)(F,{})})}function C(){let{metadata:e,isBlogPostPage:t}=(0,a.nO)(),{tags:l,title:s,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:u,lastUpdatedAt:c}=e,m=!t&&o,d=l.length>0;if(!(d||m||i))return null;if(!t)return(0,n.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[d&&(0,n.jsx)("div",{className:(0,r.Z)("col",{"col--9":m}),children:(0,n.jsx)(y.Z,{tags:l})}),m&&(0,n.jsx)("div",{className:(0,r.Z)("col text--right",{"col--3":d}),children:(0,n.jsx)(R,{blogPostTitle:s,to:e.permalink})})]});{let e=!!(i||c||u);return(0,n.jsxs)("footer",{className:"docusaurus-mt-lg",children:[d&&(0,n.jsx)("div",{className:(0,r.Z)("row","margin-top--sm",k.k.blog.blogFooterEditMetaRow),children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(y.Z,{tags:l})})}),e&&(0,n.jsx)(O.Z,{className:(0,r.Z)("margin-top--sm",k.k.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:c,lastUpdatedBy:u})]})}}function T(e){let{children:t,className:l}=e,i=function(){let{isBlogPostPage:e}=(0,a.nO)();return e?void 0:"margin-bottom--xl"}();return(0,n.jsxs)(s,{className:(0,r.Z)(i,l),children:[(0,n.jsx)(Z,{}),(0,n.jsx)(w,{children:t}),(0,n.jsx)(C,{})]})}},790:function(e,t,l){l.d(t,{Z:function(){return s}});var n=l(5893);l(7294);var r=l(7026),a=l(3012);function s(e){let{permalink:t,title:l,subLabel:s,isNext:i}=e;return(0,n.jsxs)(a.Z,{className:(0,r.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,n.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,n.jsx)("div",{className:"pagination-nav__label",children:l})]})}},8627:function(e,t,l){l.d(t,{Z:()=>i});var n=l("5893");l("7294");var r=l("7026"),a=l("3012");let s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:l,count:i,description:o}=e;return(0,n.jsxs)(a.Z,{href:t,title:o,className:(0,r.Z)(s.tag,i?s.tagWithCount:s.tagRegular),children:[l,i&&(0,n.jsx)("span",{children:i})]})}},2501:function(e,t,l){l.d(t,{Z:()=>u});var n=l("5893");l("7294");var r=l("7026"),a=l("6025"),s=l("8627");let i="tags_jXut",o="tag_QGVx";function u(e){let{tags:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("b",{children:(0,n.jsx)(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,n.jsx)("ul",{className:(0,r.Z)(i,"padding--none","margin-left--sm"),children:t.map(e=>(0,n.jsx)("li",{className:o,children:(0,n.jsx)(s.Z,{...e})},e.permalink))})]})}},3115:function(e,t,l){l.d(t,{c:function(){return o}});var n=l(7294),r=l(2933);let a=["zero","one","two","few","many","other"];function s(e){return a.filter(t=>e.includes(t))}let i={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,r.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),i}},[e])}();return{selectMessage:(t,l)=>(function(e,t,l){let n=e.split("|");if(1===n.length)return n[0];n.length>l.pluralForms.length&&console.error(`For locale=${l.locale}, a maximum of ${l.pluralForms.length} plural forms are expected (${l.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let r=l.select(t);return n[Math.min(l.pluralForms.indexOf(r),n.length-1)]})(l,t,e)}}}}]);