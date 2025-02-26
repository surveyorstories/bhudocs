"use strict";(self.webpackChunkbhukamatha=self.webpackChunkbhukamatha||[]).push([["6371"],{7352:function(e,t,l){l.d(t,{Z:()=>R});var n=l("5893");l("7294");var r=l("7026"),a=l("8141");function s(e){let{children:t,className:l}=e;return(0,n.jsx)("article",{className:l,children:t})}var i=l("3367");function o(e){let{className:t}=e,{metadata:l,isBlogPostPage:s}=(0,a.nO)(),{permalink:o,title:u}=l;return(0,n.jsx)(s?"h1":"h2",{className:(0,r.Z)("title_f1Hy",t),children:s?u:(0,n.jsx)(i.Z,{to:o,children:u})})}var u=l("7670"),c=l("1107"),m=l("4221");function d(e){let{readingTime:t}=e,l=function(){let{selectMessage:e}=(0,c.c)();return t=>{let l=Math.ceil(t);return e(l,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:l}))}}();return(0,n.jsx)(n.Fragment,{children:l(t)})}function h(e){let{date:t,formattedDate:l}=e;return(0,n.jsx)("time",{dateTime:t,children:l})}function g(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function x(e){let{className:t}=e,{metadata:l}=(0,a.nO)(),{date:s,readingTime:i}=l,o=(0,m.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,n.jsxs)("div",{className:(0,r.Z)("container_mt6G","margin-vert--md",t),children:[(0,n.jsx)(h,{date:s,formattedDate:o.format(new Date(s))}),void 0!==i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g,{}),(0,n.jsx)(d,{readingTime:i})]})]})}var f=l("6230");let p={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function j(e){let{className:t}=e,{metadata:{authors:l},assets:s}=(0,a.nO)();if(0===l.length)return null;let i=l.every(e=>{let{name:t}=e;return!t}),o=1===l.length;return(0,n.jsx)("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",i?p.imageOnlyAuthorRow:"row",t),children:l.map((e,t)=>(0,n.jsx)("div",{className:(0,r.Z)(!i&&(o?"col col--12":"col col--6"),i?p.imageOnlyAuthorCol:p.authorCol),children:(0,n.jsx)(f.Z,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t))})}function v(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(o,{}),(0,n.jsx)(x,{}),(0,n.jsx)(j,{})]})}var b=l("3781"),Z=l("4719");function _(e){let{children:t,className:l}=e,{isBlogPostPage:s}=(0,a.nO)();return(0,n.jsx)("div",{id:s?b.blogPostContainerID:void 0,className:(0,r.Z)("markdown",l),children:(0,n.jsx)(Z.Z,{children:t})})}var N=l("6171"),w=l("6360"),k=l("6671");function O(){return(0,n.jsx)("b",{children:(0,n.jsx)(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function y(e){let{blogPostTitle:t,...l}=e;return(0,n.jsx)(i.Z,{"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...l,children:(0,n.jsx)(O,{})})}function F(){let{metadata:e,isBlogPostPage:t}=(0,a.nO)(),{tags:l,title:s,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:u,lastUpdatedAt:c}=e,m=!t&&o,d=l.length>0;if(!(d||m||i))return null;if(!t)return(0,n.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[d&&(0,n.jsx)("div",{className:(0,r.Z)("col",{"col--9":m}),children:(0,n.jsx)(k.Z,{tags:l})}),m&&(0,n.jsx)("div",{className:(0,r.Z)("col text--right",{"col--3":d}),children:(0,n.jsx)(y,{blogPostTitle:s,to:e.permalink})})]});{let e=!!(i||c||u);return(0,n.jsxs)("footer",{className:"docusaurus-mt-lg",children:[d&&(0,n.jsx)("div",{className:(0,r.Z)("row","margin-top--sm",N.k.blog.blogFooterEditMetaRow),children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(k.Z,{tags:l})})}),e&&(0,n.jsx)(w.Z,{className:(0,r.Z)("margin-top--sm",N.k.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:c,lastUpdatedBy:u})]})}}function R(e){let{children:t,className:l}=e,i=function(){let{isBlogPostPage:e}=(0,a.nO)();return e?void 0:"margin-bottom--xl"}();return(0,n.jsxs)(s,{className:(0,r.Z)(i,l),children:[(0,n.jsx)(v,{}),(0,n.jsx)(_,{children:t}),(0,n.jsx)(F,{})]})}},8007:function(e,t,l){l.d(t,{Z:function(){return s}});var n=l(5893);l(7294);var r=l(7026),a=l(3367);function s(e){let{permalink:t,title:l,subLabel:s,isNext:i}=e;return(0,n.jsxs)(a.Z,{className:(0,r.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,n.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,n.jsx)("div",{className:"pagination-nav__label",children:l})]})}},2684:function(e,t,l){l.d(t,{Z:()=>i});var n=l("5893");l("7294");var r=l("7026"),a=l("3367");let s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:l,count:i,description:o}=e;return(0,n.jsxs)(a.Z,{href:t,title:o,className:(0,r.Z)(s.tag,i?s.tagWithCount:s.tagRegular),children:[l,i&&(0,n.jsx)("span",{children:i})]})}},6671:function(e,t,l){l.d(t,{Z:()=>i});var n=l("5893");l("7294");var r=l("7026"),a=l("7670"),s=l("2684");function i(e){let{tags:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("b",{children:(0,n.jsx)(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,n.jsx)("ul",{className:(0,r.Z)("tags_jXut","padding--none","margin-left--sm"),children:t.map(e=>(0,n.jsx)("li",{className:"tag_QGVx",children:(0,n.jsx)(s.Z,{...e})},e.permalink))})]})}},1107:function(e,t,l){l.d(t,{c:function(){return o}});var n=l(7294),r=l(7262);let a=["zero","one","two","few","many","other"];function s(e){return a.filter(t=>e.includes(t))}let i={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,r.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),i}},[e])}();return{selectMessage:(t,l)=>(function(e,t,l){let n=e.split("|");if(1===n.length)return n[0];n.length>l.pluralForms.length&&console.error(`For locale=${l.locale}, a maximum of ${l.pluralForms.length} plural forms are expected (${l.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let r=l.select(t);return n[Math.min(l.pluralForms.indexOf(r),n.length-1)]})(l,t,e)}}}}]);