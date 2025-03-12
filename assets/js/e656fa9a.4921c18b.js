"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[9249],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=c(n),k=r,u=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return n?a.createElement(u,i(i({ref:e},m),{},{components:n})):a.createElement(u,i({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},70850:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:3},i="\u83b7\u53d6\u5e94\u7528\u7684 Access Token [\u65b0\ud83d\udd25]",o={unversionedId:"develop/permission/single_to_multi/new_get_app_token",id:"develop/permission/single_to_multi/new_get_app_token",title:"\u83b7\u53d6\u5e94\u7528\u7684 Access Token [\u65b0\ud83d\udd25]",description:"\u5982\u679c\u4f60\u7684\u5e94\u7528\u4f7f\u7528\u5230\u4e86\u5e94\u7528\u6743\u9650\u70b9\uff0c\u63a8\u8350\u4f60\u4f7f\u7528\u6b64\u6587\u6863\u83b7\u53d6\u5e94\u7528\u7684 Access Token\u3002",source:"@site/docs/develop/permission/single_to_multi/new_get_app_token.md",sourceDirName:"develop/permission/single_to_multi",slug:"/develop/permission/single_to_multi/new_get_app_token",permalink:"/developerpedia/docs/develop/permission/single_to_multi/new_get_app_token",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/develop/permission/single_to_multi/new_get_app_token.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u4f01\u4e1a\u5185\u90e8\u5e94\u7528\u5982\u4f55\u6539\u9020\u6210\u4e0a\u4e0b\u6e38\u5e94\u7528\uff1f",permalink:"/developerpedia/docs/develop/permission/single_to_multi/self_to_upstream"},next:{title:"AI\u52a9\u7406\u83b7\u53d6\u6743\u9650",permalink:"/developerpedia/docs/category/ai\u52a9\u7406\u83b7\u53d6\u6743\u9650"}},p={},c=[{value:"\u4e00\u3001\u83b7\u53d6\u5e94\u7528\u7684 ClientId \u548c ClientSecret",id:"\u4e00\u83b7\u53d6\u5e94\u7528\u7684-clientid-\u548c-clientsecret",level:2},{value:"\u4e8c\u3001\u8bf7\u6c42\u65b9\u6cd5",id:"\u4e8c\u8bf7\u6c42\u65b9\u6cd5",level:2},{value:"\u9519\u8bef\u7801",id:"\u9519\u8bef\u7801",level:2}],m={toc:c},d="wrapper";function s(t){let{components:e,...l}=t;return(0,r.kt)(d,(0,a.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u83b7\u53d6\u5e94\u7528\u7684-access-token-\u65b0"},"\u83b7\u53d6\u5e94\u7528\u7684 Access Token ","[\u65b0\ud83d\udd25]"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u7684\u5e94\u7528\u4f7f\u7528\u5230\u4e86\u5e94\u7528\u6743\u9650\u70b9\uff0c\u63a8\u8350\u4f60\u4f7f\u7528\u6b64\u6587\u6863\u83b7\u53d6\u5e94\u7528\u7684 Access Token\u3002"),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},'\u4e00\u4e2a\u5e94\u7528\u5728\u5f00\u53d1\u65f6\uff0c\u5c31\u662f\u4e00\u4e2a\u5e94\u7528\u3002\u5e94\u7528\u53ea\u6709\u5728\u88ab\u5206\u53d1\u65f6\uff0c\u624d\u88ab\u533a\u5206\u4e3a"\u5185\u90e8"\u8fd8\u662f"\u4e09\u65b9"\u3002')),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},'\u539f\u6765\u7684\u9489\u9489\u5f00\u653e\u5e73\u53f0\u5e94\u7528\u5728\u521b\u5efa\u65f6\u5c31\u533a\u5206\u4e86"\u4f01\u4e1a\u5185\u90e8\u5e94\u7528"\u548c"\u4f01\u4e1a\u4e09\u65b9\u5e94\u7528"\uff0c\u4f46\u968f\u7740\u4e1a\u52a1\u7684\u53d1\u5c55\uff0c\u5e73\u53f0\u548c\u5f00\u53d1\u8005\u4eec\u9010\u6e10\u53d1\u73b0\u5e94\u7528\u5728\u5f00\u53d1\u65f6\u6ca1\u6709\u5fc5\u8981\u533a\u5206\u662f"\u5185\u90e8"\u8fd8\u662f"\u4e09\u65b9"\u3002'),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd9\u4e2a\u5e94\u7528\u6700\u7ec8\u4ec5\u88ab\u5e94\u7528\u5f00\u53d1\u8005\u7ec4\u7ec7\u4f7f\u7528\uff0c\u5373\u5e94\u7528\u88ab\u5206\u53d1\u7ed9\u5f00\u53d1\u8005\u7ec4\u7ec7\uff0c\u90a3\u4e48\u8fd9\u4e2a\u5e94\u7528\u53ef\u4ee5\u88ab\u79f0\u4e3a\u4f01\u4e1a\u5185\u90e8\u5e94\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fd9\u4e2a\u5e94\u7528\u6700\u7ec8\u901a\u8fc7\u5e94\u7528\u5e02\u573a\u88ab\u5176\u4ed6\u7ec4\u7ec7\u4f7f\u7528\uff0c\u5373\u5e94\u7528\u88ab\u5206\u53d1\u7ed9\u5176\u4ed6\u7ec4\u7ec7\u4f7f\u7528\uff0c\u90a3\u4e48\u8fd9\u4e2a\u5e94\u7528\u53ef\u4ee5\u88ab\u79f0\u4e3a\u4f01\u4e1a\u4e09\u65b9\u5e94\u7528\u3002"))),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u5185\u90e8\u5e94\u7528\u7531\u4e8e\u53ea\u80fd\u8fd0\u884c\u5728\u5f00\u53d1\u8be5\u5e94\u7528\u7684\u7ec4\u7ec7\u91cc\uff0c\u56e0\u6b64\u88ab\u5f52\u7c7b\u4e3a",(0,r.kt)("strong",{parentName:"li"},"\u5355\u7ec4\u7ec7\u5e94\u7528\uff08Single-tenant Application\uff09"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u4e09\u65b9\u5e94\u7528\u3001\u4f01\u4e1a\u4e0a\u4e0b\u6e38\u5e94\u7528\u548c\u4f01\u4e1a\u4e0a\u4e0b\u7ea7\u5e94\u7528\u7b49\u5e94\u7528\u7531\u4e8e\u80fd\u901a\u8fc7\u5e94\u7528\u5e02\u573a\u5f00\u901a\u3001\u4e0a\u4e0b\u6e38\u5206\u53d1\u7b49\u5206\u53d1\u6e20\u9053\uff0c\u6700\u7ec8\u8fd0\u884c\u5728\u591a\u4e2a\u7ec4\u7ec7\u5185\uff0c\u56e0\u6b64\u88ab\u5f52\u7c7b\u4e3a",(0,r.kt)("strong",{parentName:"li"},"\u591a\u7ec4\u7ec7\u5e94\u7528\uff08Multi-tenant Application\uff09"),"\u3002"))),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u63a8\u8350\u4f7f\u7528\u6b64\u6587\u6863\u83b7\u53d6\u5e94\u7528\u7684 Access Token\uff0c\u539f\u6765\u7684\u4e00\u4e9b\u6587\u6863\u7531\u4e8e\u5b58\u5728\u5c40\u9650\u6027\uff08\u6bd4\u5982\u4e0d\u80fd\u6ee1\u8db3\u5e94\u7528\u4ece\u5355\u7ec4\u7ec7\u5230\u591a\u7ec4\u7ec7\u7684\u5feb\u901f\u5207\u6362\uff09\uff0c\u5c06\u9010\u6b65\u4e0b\u7ebf\u3002")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u539f\u6765\u4f01\u4e1a\u5185\u90e8\u5e94\u7528\u83b7\u53d6\u5e94\u7528 Access Token \u7684\u6587\u6863\u4e3a\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/orgapp/obtain-the-access_token-of-an-internal-app"},"\u83b7\u53d6\u4f01\u4e1a\u5185\u90e8\u5e94\u7528\u7684 Access Token")),(0,r.kt)("li",{parentName:"ul"},"\u539f\u6765\u4f01\u4e1a\u4e09\u65b9\u5e94\u7528\u83b7\u53d6\u5e94\u7528 Access Token \u7684\u6587\u6863\u4e3a\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/isvapp/obtain-the-access_token-of-the-authorized-enterprise"},"\u83b7\u53d6\u7b2c\u4e09\u65b9\u5e94\u7528\u6388\u6743\u4f01\u4e1a\u7684 Access Token")))),(0,r.kt)("h2",{id:"\u4e00\u83b7\u53d6\u5e94\u7528\u7684-clientid-\u548c-clientsecret"},"\u4e00\u3001\u83b7\u53d6\u5e94\u7528\u7684 ClientId \u548c ClientSecret"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u767b\u5f55\u9489\u9489\u5f00\u53d1\u8005\u540e\u53f0\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u5df2\u521b\u5efa\u7684\u5e94\u7528\uff0c\u5728\u201c\u51ed\u8bc1\u4e0e\u57fa\u7840\u4fe1\u606f\u201d\u91cc\u53ef\u4ee5\u770b\u5230\u5e94\u7528\u7684 ClientId \u548c ClientSecret \u3002\n",(0,r.kt)("img",{alt:"\u5e94\u7528\u7684ClientId\u548cClientSecret",src:n(31978).Z,width:"1431",height:"394"}))),(0,r.kt)("h2",{id:"\u4e8c\u8bf7\u6c42\u65b9\u6cd5"},"\u4e8c\u3001\u8bf7\u6c42\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},'POST /v1.0/oauth2/{corpId}/token HTTP/1.1\nHost:api.dingtalk.com\nContent-Type:application/json\n\n{\n  "client_id" : "ding123",\n  "client_secret" : "*******",\n  "grant_type" : "client_credentials"\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"corpId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u7ec7ID\uff0c\u5e94\u7528\u8fd0\u884c\u5728\u54ea\u4e2a\u7ec4\u7ec7\u5c31\u586b\u5199\u54ea\u4e2a\u7ec4\u7ec7\u7684 corpId\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"client_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u7684 ClientID\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"client_secret"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u7684 ClientSecret\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"grant_type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u987b\u662f client_credentials\u3002")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http",metastring:'title="\u6210\u529f\u7684\u54cd\u5e94"',title:'"\u6210\u529f\u7684\u54cd\u5e94"'},'{\n  "access_token": "0a7*********657",\n  "expires_in": 7200\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"access_token"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bbf\u95ee\u51ed\u8bc1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"expires_in"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8bbf\u95ee\u51ed\u8bc1\u6709\u6548\u7684\u65f6\u957f\uff0c\u5355\u4f4d\u79d2\u3002")))),(0,r.kt)("h2",{id:"\u9519\u8bef\u7801"},"\u9519\u8bef\u7801"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001\u7801"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9519\u8bef\u7801"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9519\u8bef\u539f\u56e0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"invalid.client"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0\u6548\u7684 ClientID \u6216 ClientSecret\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"unsupported.grant.type"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301\u6b64\u6388\u6743\u7c7b\u578b\uff0c\u8bf7\u68c0\u67e5\u6388\u6743\u7c7b\u578b\u53c2\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"unauthorized.client"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u672a\u88ab\u6388\u6743\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"server.error"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5668\u610f\u5916\u9519\u8bef\u3002")))))}s.isMDXComponent=!0},31978:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/client_id_secret-8b0e82c3f41722b13eed05412cc58242.png"}}]);