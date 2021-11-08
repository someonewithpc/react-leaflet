"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[918],{804:function(e,t,a){a.d(t,{N:function(){return u},Z:function(){return v}});var n=a(1461),r=a(7896),l=a(2784),i=a(6277),o=a(7921),s=a(9727),c="anchorWithStickyNavbar_1eoN",d="anchorWithHideOnScrollNavbar_ZIrD",m=["id"],u=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var a,r=e.id,u=(0,n.Z)(e,m),v=(0,s.LU)().navbar.hideOnScroll;return r?l.createElement(t,u,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor","anchor__"+t,(a={},a[d]=v,a[c]=!v,a)),id:r}),u.children,l.createElement("a",{className:"hash-link",href:"#"+r,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,u)});var t}},3341:function(e,t,a){a.r(t),a.d(t,{default:function(){return Q}});var n=a(2784),r=a(6277),l=a(5200),i=a(1233),o=a(1510),s=a(7921);var c=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(o.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(o.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},d=a(7614),m=a(9727);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(o.Z,{to:a,onClick:r},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.versionMetadata,i=(0,d.Z)().siteConfig.title,o=(0,l.gA)({failfast:!0}).pluginId,s=(0,m.J)(o).savePreferredVersionName,c=(0,l.Jo)(o),u=c.latestDocSuggestion,p=c.latestVersionSuggestion,f=null!=u?u:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:i,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:p.label,to:f.path,onClick:function(){return s(p.name)}})))}var f=function(e){var t=e.versionMetadata;return t.banner?n.createElement(p,{versionMetadata:t}):n.createElement(n.Fragment,null)},b=a(759);function E(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function g(e){var t=e.lastUpdatedBy;return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(g,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}function N(e){var t=e.getBoundingClientRect();return t.top===t.bottom?N(e.parentNode):t}function k(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return N(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(N(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function L(){var e=(0,n.useRef)(0),t=(0,m.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var T=function(e){var t=(0,n.useRef)(void 0),a=L();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=k({anchorTopOffset:a.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},Z="tableOfContents_2Tf-",U="table-of-contents__link",C={linkClassName:U,linkActiveClassName:"table-of-contents__link--active"};function y(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:U,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(y,{isChild:!0,toc:e.children}))}))):null}var w=function(e){var t=e.toc;return T(C),n.createElement("div",{className:(0,r.Z)(Z,"thin-scrollbar")},n.createElement(y,{toc:t}))},A="tocCollapsible_350o",M="tocCollapsibleButton_hQ7M",O="tocCollapsibleContent_13ho",S="tocCollapsibleExpanded_2_3p";function B(e){var t,a=e.toc,l=e.className,i=(0,m.uR)({initialState:!0}),o=i.collapsed,c=i.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(A,(t={},t[S]=!o,t),l)},n.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",M),onClick:c},n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:O,collapsed:o},n.createElement(y,{toc:a})))}var I=a(7896),x=a(1461),V="iconEdit_2nOl",D=["className"],z=function(e){var t=e.className,a=(0,x.Z)(e,D);return n.createElement("svg",(0,I.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(V,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function R(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(z,null),n.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var F=a(804),q="docItemContainer_1EXp",H="lastUpdated_1szQ",P="docItemCol_2rXS",J="tocMobile_Ftrd";var Q=function(e){var t,a=e.content,o=e.versionMetadata,s=a.metadata,d=a.frontMatter,m=d.image,u=d.keywords,v=d.hide_title,h=d.hide_table_of_contents,p=s.description,E=s.title,g=s.editUrl,N=s.lastUpdatedAt,k=s.formattedLastUpdatedAt,L=s.lastUpdatedBy,T=(0,l.gA)({failfast:!0}).pluginId,Z=(0,l.gB)(T).length>1,U=!v&&void 0===a.contentTitle,C=(0,i.Z)(),y=!h&&a.toc&&a.toc.length>0,A=y&&("desktop"===C||"ssr"===C);return n.createElement(n.Fragment,null,n.createElement(b.Z,{title:E,description:p,keywords:u,image:m}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",(t={},t[P]=!h,t))},n.createElement(f,{versionMetadata:o}),n.createElement("div",{className:q},n.createElement("article",null,Z&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",o.label),y&&n.createElement(B,{toc:a.toc,className:J}),n.createElement("div",{className:"markdown"},U&&n.createElement(F.N,null,E),n.createElement(a,null)),(g||N||L)&&n.createElement("footer",{className:"row docusaurus-mt-lg"},n.createElement("div",{className:"col"},g&&n.createElement(R,{editUrl:g})),n.createElement("div",{className:(0,r.Z)("col",H)},(N||L)&&n.createElement(_,{lastUpdatedAt:N,formattedLastUpdatedAt:k,lastUpdatedBy:L})))),n.createElement(c,{metadata:s}))),A&&n.createElement("div",{className:"col col--3"},n.createElement(w,{toc:a.toc}))))}}}]);