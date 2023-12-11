"use strict";(self.webpackChunkba_getter=self.webpackChunkba_getter||[]).push([[939],{3906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(5893),s=n(1151);const o={},r="Use Alibaba (Aliyun) Object Storage Service",i={id:"Installation/aliyun",title:"Use Alibaba (Aliyun) Object Storage Service",description:"You can store packages to Alibaba(Aliyun) OSS.",source:"@site/docs/Installation/aliyun.md",sourceDirName:"Installation",slug:"/Installation/aliyun",permalink:"/docs/Installation/aliyun",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Installation/aliyun.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import NuGet.Server packages",permalink:"/docs/Import/nugetserver"},next:{title:"Run BaGetter on AWS",permalink:"/docs/Installation/aws"}},c={},l=[{value:"Configure BaGetter",id:"configure-bagetter",level:2},{value:"Aliyun OSS Storage",id:"aliyun-oss-storage",level:3}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"use-alibaba-aliyun-object-storage-service",children:"Use Alibaba (Aliyun) Object Storage Service"}),"\n",(0,a.jsxs)(t.p,{children:["You can store packages to ",(0,a.jsx)(t.a,{href:"https://www.alibabacloud.com/product/oss",children:"Alibaba(Aliyun) OSS"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"configure-bagetter",children:"Configure BaGetter"}),"\n",(0,a.jsxs)(t.p,{children:["You can modify BaGetter's configurations by editing the ",(0,a.jsx)(t.code,{children:"appsettings.json"})," file. For the full list of configurations, please refer to ",(0,a.jsx)(t.a,{href:"/docs/configuration",children:"BaGetter's configuration"})," guide."]}),"\n",(0,a.jsx)(t.h3,{id:"aliyun-oss-storage",children:"Aliyun OSS Storage"}),"\n",(0,a.jsxs)(t.p,{children:["Update the ",(0,a.jsx)(t.code,{children:"appsettings.json"})," file:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n    ...\n\n    "Storage": {\n        "Type": "AliyunOss",\n        "Endpoint": "oss-us-west-1.aliyuncs.com",\n        "Bucket": "foo",\n        "AccessKey": "",\n        "AccessKeySecret": "",\n        "Prefix": "lib/bagetter" // optional\n    },\n\n    ...\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(7294);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);