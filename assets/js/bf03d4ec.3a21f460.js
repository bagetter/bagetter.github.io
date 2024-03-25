"use strict";(self.webpackChunkba_getter=self.webpackChunkba_getter||[]).push([[328],{843:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=t(5893),s=t(1151),r=t(4866),o=t(5162);const l={},i="Run BaGetter on AWS",c={id:"Installation/aws",title:"Run BaGetter on AWS",description:"This page is a work in progress!",source:"@site/docs/Installation/aws.md",sourceDirName:"Installation",slug:"/Installation/aws",permalink:"/docs/Installation/aws",draft:!1,unlisted:!1,editUrl:"https://github.com/bagetter/BaGetter/tree/main/docs/docs/Installation/aws.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Use Alibaba Cloud (Aliyun) OSS",permalink:"/docs/Installation/aliyun"},next:{title:"Run BaGetter on Azure",permalink:"/docs/Installation/azure"}},u={},d=[{value:"Configure BaGetter",id:"configure-bagetter",level:2},{value:"Amazon S3",id:"amazon-s3",level:3},{value:"Amazon RDS",id:"amazon-rds",level:3},{value:"Publish packages",id:"publish-packages",level:2},{value:"Restore packages",id:"restore-packages",level:2},{value:"Symbol server",id:"symbol-server",level:2}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"run-bagetter-on-aws",children:"Run BaGetter on AWS"}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"This page is a work in progress!"})}),"\n",(0,a.jsxs)(n.p,{children:["Use Amazon Web Services to scale BaGetter. You can store metadata on ",(0,a.jsx)(n.a,{href:"https://aws.amazon.com/rds",children:"Amazon Relational Database Service (RDS)"})," and upload packages to ",(0,a.jsx)(n.a,{href:"https://aws.amazon.com/s3/",children:"Amazon S3"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"configure-bagetter",children:"Configure BaGetter"}),"\n",(0,a.jsxs)(n.p,{children:["You can modify BaGetter's configurations by editing the ",(0,a.jsx)(n.code,{children:"appsettings.json"})," file. For the full list of configurations, please refer to ",(0,a.jsx)(n.a,{href:"/docs/configuration",children:"BaGetter's configuration"})," guide."]}),"\n",(0,a.jsx)(n.h3,{id:"amazon-s3",children:"Amazon S3"}),"\n",(0,a.jsxs)(n.p,{children:["Create a bucket, a service account with access to the bucket, and an access key for the service account.",(0,a.jsx)(n.br,{}),"\n","Update the ",(0,a.jsx)(n.code,{children:"appsettings.json"})," file with those:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    ...\n\n    "Storage": {\n        "Type": "AwsS3",\n        "Region": "us-west-1",\n        "Bucket": "foo",\n        "AccessKey": "",\n        "SecretKey": ""\n    },\n\n    ...\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"amazon-rds",children:"Amazon RDS"}),"\n",(0,a.jsxs)(r.Z,{groupId:"database-types",children:[(0,a.jsxs)(o.Z,{value:"postgresql",label:"Amazon RDS for PostgreSQL",children:[(0,a.jsxs)(n.p,{children:["To use ",(0,a.jsx)(n.a,{href:"https://aws.amazon.com/rds/postgresql",children:"PostgreSQL"}),", update the ",(0,a.jsx)(n.code,{children:"appsettings.json"})," file:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    ...\n\n    "Database": {\n        "Type": "PostgreSql",\n        "ConnectionString": "..."\n    },\n\n    ...\n}\n'})})]}),(0,a.jsxs)(o.Z,{value:"mysql",label:"Amazon RDS for MySQL",children:[(0,a.jsxs)(n.p,{children:["To use ",(0,a.jsx)(n.a,{href:"https://aws.amazon.com/rds/mysql",children:"MySQL"}),", update the ",(0,a.jsx)(n.code,{children:"appsettings.json"})," file:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    ...\n\n    "Database": {\n        "Type": "MySql",\n        "ConnectionString": "..."\n    },\n\n    ...\n}\n'})})]}),(0,a.jsxs)(o.Z,{value:"sqlserver",label:"Amazon RDS for SQL Server",children:[(0,a.jsxs)(n.p,{children:["To use ",(0,a.jsx)(n.a,{href:"https://aws.amazon.com/rds/sqlserver",children:"SQL Server"}),", update the ",(0,a.jsx)(n.code,{children:"appsettings.json"})," file:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    ...\n\n    "Database": {\n        "Type": "SqlServer",\n        "ConnectionString": "..."\n    },\n\n    ...\n}\n'})})]})]}),"\n",(0,a.jsx)(n.h2,{id:"publish-packages",children:"Publish packages"}),"\n",(0,a.jsx)(n.p,{children:"Publish your first package with:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"dotnet nuget push -s http://localhost:5000/v3/index.json package.1.0.0.nupkg\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Publish your first ",(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/nuget/create-packages/symbol-packages-snupkg",children:"symbol package"})," with:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"dotnet nuget push -s http://localhost:5000/v3/index.json symbol.package.1.0.0.snupkg\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["You should secure your server by requiring an API Key to publish packages. For more information, please refer to the ",(0,a.jsx)(n.a,{href:"/docs/configuration#require-an-api-key",children:"Require an API Key"})," guide."]})}),"\n",(0,a.jsx)(n.h2,{id:"restore-packages",children:"Restore packages"}),"\n",(0,a.jsx)(n.p,{children:"You can restore packages by using the following package source:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"http://localhost:5000/v3/index.json"})}),"\n",(0,a.jsx)(n.p,{children:"Some helpful guides:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio#package-sources",children:"Visual Studio"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/nuget/reference/nuget-config-file#package-source-sections",children:"NuGet.config"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"symbol-server",children:"Symbol server"}),"\n",(0,a.jsx)(n.p,{children:"You can load symbols by using the following symbol location:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"http://localhost:5000/api/download/symbols"})}),"\n",(0,a.jsxs)(n.p,{children:["For Visual Studio, please refer to the ",(0,a.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/visualstudio/debugger/specify-symbol-dot-pdb-and-source-files-in-the-visual-studio-debugger?view=vs-2017#configure-symbol-locations-and-loading-options",children:"Configure Debugging"})," guide."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var a=t(512);const s={tabItem:"tabItem_Ymn6"};var r=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(7294),s=t(512),r=t(2466),o=t(6550),l=t(469),i=t(1980),c=t(7392),u=t(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=g({queryString:t,groupId:s}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,u.Nk)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),b=(()=>{const e=c??m;return p({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(5893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),s=l[t].value;s!==a&&(c(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(x,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function k(e){const n=(0,f.Z)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var a=t(7294);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);