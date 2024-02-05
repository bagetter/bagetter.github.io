"use strict";(self.webpackChunkba_getter=self.webpackChunkba_getter||[]).push([[185],{7791:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(5893),o=t(1151);const r={},i="Run BaGetter on your Computer",a={id:"Installation/local",title:"Run BaGetter on your Computer",description:"Run BaGetter",source:"@site/docs/Installation/local.md",sourceDirName:"Installation",slug:"/Installation/local",permalink:"/docs/Installation/local",draft:!1,unlisted:!1,editUrl:"https://github.com/bagetter/BaGetter/tree/main/docs/Installation/local.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Windows IIS Proxy",permalink:"/docs/Installation/iis-proxy"},next:{title:"Configuration",permalink:"/docs/configuration"}},l={},c=[{value:"Run BaGetter",id:"run-bagetter",level:2},{value:"Configure BaGetter",id:"configure-bagetter",level:2},{value:"Publish packages",id:"publish-packages",level:2},{value:"Restore packages",id:"restore-packages",level:2},{value:"Symbol server",id:"symbol-server",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"run-bagetter-on-your-computer",children:"Run BaGetter on your Computer"}),"\n",(0,s.jsx)(n.h2,{id:"run-bagetter",children:"Run BaGetter"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Install the ",(0,s.jsx)(n.a,{href:"https://www.microsoft.com/net/download",children:".NET Core SDK"})]}),"\n",(0,s.jsxs)(n.li,{children:["Download and extract ",(0,s.jsx)(n.a,{href:"https://github.com/bagetter/BaGetter/releases",children:"BaGetter's latest release"})]}),"\n",(0,s.jsxs)(n.li,{children:["Start the service with ",(0,s.jsx)(n.code,{children:"dotnet BaGetter.dll"})]}),"\n",(0,s.jsxs)(n.li,{children:["Browse ",(0,s.jsx)(n.code,{children:"http://localhost:5000/"})," in your browser"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configure-bagetter",children:"Configure BaGetter"}),"\n",(0,s.jsxs)(n.p,{children:["You can modify BaGetter's configurations by editing the ",(0,s.jsx)(n.code,{children:"appsettings.json"})," file. For the full list of configurations, please refer to ",(0,s.jsx)(n.a,{href:"/docs/configuration",children:"BaGetter's configuration"})," guide."]}),"\n",(0,s.jsx)(n.h2,{id:"publish-packages",children:"Publish packages"}),"\n",(0,s.jsx)(n.p,{children:"Publish your first package with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"dotnet nuget push -s http://localhost:5000/v3/index.json package.1.0.0.nupkg\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Publish your first ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/nuget/create-packages/symbol-packages-snupkg",children:"symbol package"})," with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"dotnet nuget push -s http://localhost:5000/v3/index.json symbol.package.1.0.0.snupkg\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["You should secure your server by requiring an API Key to publish packages. For more information, please refer to the ",(0,s.jsx)(n.a,{href:"/docs/configuration#require-an-api-key",children:"Require an API Key"})," guide."]})}),"\n",(0,s.jsx)(n.h2,{id:"restore-packages",children:"Restore packages"}),"\n",(0,s.jsx)(n.p,{children:"You can restore packages by using the following package source:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"http://localhost:5000/v3/index.json"})}),"\n",(0,s.jsx)(n.p,{children:"Some helpful guides:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio#package-sources",children:"Visual Studio"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/nuget/reference/nuget-config-file#package-source-sections",children:"NuGet.config"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"symbol-server",children:"Symbol server"}),"\n",(0,s.jsx)(n.p,{children:"You can load symbols by using the following symbol location:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"http://localhost:5000/api/download/symbols"})}),"\n",(0,s.jsxs)(n.p,{children:["For Visual Studio, please refer to the ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/visualstudio/debugger/specify-symbol-dot-pdb-and-source-files-in-the-visual-studio-debugger?view=vs-2017#configure-symbol-locations-and-loading-options",children:"Configure Debugging"})," guide."]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(7294);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);