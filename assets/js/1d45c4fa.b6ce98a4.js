"use strict";(self.webpackChunkba_getter=self.webpackChunkba_getter||[]).push([[889],{6214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(5893),r=n(1151);const i={},o="nuget.org",a={id:"vs/nugetorg",title:"nuget.org",description:"This page is a work in progress!",source:"@site/docs/vs/nugetorg.md",sourceDirName:"vs",slug:"/vs/nugetorg",permalink:"/docs/vs/nugetorg",draft:!1,unlisted:!1,editUrl:"https://github.com/bagetter/BaGetter/tree/main/docs/vs/nugetorg.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Nexus",permalink:"/docs/vs/nexus"},next:{title:"NuGet.Server",permalink:"/docs/vs/nugetserver"}},l={},c=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"nugetorg",children:"nuget.org"}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"This page is a work in progress!"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.nuget.org/",children:"nuget.org"}),', also known as the "Gallery", is the defacto feed to host open\nsource packages. You should publish NuGet packages for your open-source projects here.']}),"\n",(0,s.jsxs)(t.p,{children:["The Gallery is battle-tested and proven to scale well. You can find a guide on how to host\nyour own Gallery instance on ",(0,s.jsx)(t.a,{href:"https://github.com/NuGet/NuGetGallery/wiki/Hosting-nuget.org's-v3-services",children:"the Gallery's wiki"}),".\nYou can find the Gallery's code on GitHub:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/NuGet/NuGetGallery",children:"NuGet/NuGetGallery"})," - the ",(0,s.jsx)(t.a,{href:"https://nuget.org",children:"nuget.org"}),"\nwebsite and v2 APIs"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/NuGet/NuGet.Jobs/",children:"NuGet/NuGet.Jobs"})," - the Gallery's jobs for things like validation and package statistics."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/NuGet/NuGet.Services.Metadata/",children:"NuGet/NuGet.Services.Metadata"})," - NuGet's v3 implementation"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/NuGet/ServerCommon",children:"NuGet/ServerCommon"})," - common libraries used across NuGet's services"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"As you can tell, nuget.org is a complex beast. Hosting your own instance of the Gallery is not for the faint of heart."}),"\n",(0,s.jsx)(t.h1,{id:"bagetter-vs-nugetorg",children:"BaGetter vs nuget.org"}),"\n",(0,s.jsxs)(t.p,{children:["TODO. See ",(0,s.jsx)(t.a,{href:"https://github.com/loic-sharma/BaGet/issues/71",children:"this issue"})," for a deep-dive."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["BaGetter only competes with ",(0,s.jsx)(t.a,{href:"https://github.com/NuGet/NuGet.Services.Metadata/",children:"NuGet/NuGet.Services.Metadata"})]}),"\n",(0,s.jsxs)(t.li,{children:["nuget.org's v3 implementation is static","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Runs only on Windows"}),"\n",(0,s.jsx)(t.li,{children:"Highly tied to Azure"}),"\n",(0,s.jsx)(t.li,{children:"Scales reads to near infinity"}),"\n",(0,s.jsx)(t.li,{children:"Doesn't scale well for writes"}),"\n",(0,s.jsx)(t.li,{children:"Static JSON files are hosted on Azure Blob Storage"}),"\n",(0,s.jsx)(t.li,{children:"Served by a Content Delivery Network"}),"\n",(0,s.jsxs)(t.li,{children:["Files are updated by ",(0,s.jsx)(t.code,{children:"feed2catalog"}),", ",(0,s.jsx)(t.code,{children:"catalog2registration"}),", ",(0,s.jsx)(t.code,{children:"catalog2dnx"}),", and ",(0,s.jsx)(t.code,{children:"catalog2lucene"})," jobs"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["BaGetter's v3 implementation is dynamic","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Cross-platform implementation"}),"\n",(0,s.jsx)(t.li,{children:"Requests are served by a service that queries a database"}),"\n",(0,s.jsx)(t.li,{children:"Simpler architecture, which makes it easier to deploy and run small feeds"}),"\n",(0,s.jsx)(t.li,{children:"Easier to scale for writes"}),"\n",(0,s.jsx)(t.li,{children:"Harder to scale for reads"}),"\n",(0,s.jsx)(t.li,{children:"Easier to add new features"}),"\n",(0,s.jsx)(t.li,{children:"Harder to make as reliable"}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var s=n(7294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);