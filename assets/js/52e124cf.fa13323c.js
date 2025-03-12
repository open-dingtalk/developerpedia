"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[1985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},55735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:2},i="\u4f01\u4e1a\u5185\u90e8\u5e94\u7528\u5982\u4f55\u6539\u9020\u6210\u4e0a\u4e0b\u6e38\u5e94\u7528\uff1f",p={unversionedId:"develop/permission/single_to_multi/self_to_upstream",id:"develop/permission/single_to_multi/self_to_upstream",title:"\u4f01\u4e1a\u5185\u90e8\u5e94\u7528\u5982\u4f55\u6539\u9020\u6210\u4e0a\u4e0b\u6e38\u5e94\u7528\uff1f",description:"\u4f01\u4e1a\u5185\u90e8\u5e94\u7528\u7531\u4e8e\u53ea\u80fd\u8fd0\u884c\u5728\u5f00\u53d1\u672c\u5e94\u7528\u7684\u7ec4\u7ec7\u91cc\uff0c\u56e0\u6b64\u88ab\u5f52\u7c7b\u4e3a\u5355\u7ec4\u7ec7\u5e94\u7528\uff08Single-tenant Application\uff09*\u3002",source:"@site/docs/develop/permission/single_to_multi/self_to_upstream.md",sourceDirName:"develop/permission/single_to_multi",slug:"/develop/permission/single_to_multi/self_to_upstream",permalink:"/developerpedia/docs/develop/permission/single_to_multi/self_to_upstream",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/develop/permission/single_to_multi/self_to_upstream.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/developerpedia/docs/develop/permission/single_to_multi/intro"},next:{title:"\u83b7\u53d6\u5e94\u7528\u7684 Access Token [\u65b0\ud83d\udd25]",permalink:"/developerpedia/docs/develop/permission/single_to_multi/new_get_app_token"}},o={},s=[{value:"\u4e00\u3001\u68b3\u7406\u6743\u9650\u70b9",id:"\u4e00\u68b3\u7406\u6743\u9650\u70b9",level:2},{value:"\u4e8c\u3001\u8c03\u7528OpenAPI",id:"\u4e8c\u8c03\u7528openapi",level:2},{value:"2-1 \u83b7\u53d6\u8bbf\u95ee\u51ed\u8bc1",id:"2-1-\u83b7\u53d6\u8bbf\u95ee\u51ed\u8bc1",level:3},{value:"2-2 \u8c03\u7528OpenAPI",id:"2-2-\u8c03\u7528openapi",level:3},{value:"\u4e09\u3001\u4e0a\u4e0b\u6e38\u5206\u53d1",id:"\u4e09\u4e0a\u4e0b\u6e38\u5206\u53d1",level:2},{value:"\u56db\u3001\u5176\u4ed6",id:"\u56db\u5176\u4ed6",level:2}],m={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f01\u4e1a\u5185\u90e8\u5e94\u7528\u5982\u4f55\u6539\u9020\u6210\u4e0a\u4e0b\u6e38\u5e94\u7528"},"\u4f01\u4e1a\u5185\u90e8\u5e94\u7528\u5982\u4f55\u6539\u9020\u6210\u4e0a\u4e0b\u6e38\u5e94\u7528\uff1f"),(0,a.kt)("h2",{id:""}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u5185\u90e8\u5e94\u7528\u7531\u4e8e\u53ea\u80fd\u8fd0\u884c\u5728\u5f00\u53d1\u672c\u5e94\u7528\u7684\u7ec4\u7ec7\u91cc\uff0c\u56e0\u6b64\u88ab\u5f52\u7c7b\u4e3a",(0,a.kt)("strong",{parentName:"li"},"\u5355\u7ec4\u7ec7\u5e94\u7528\uff08Single-tenant Application\uff09"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u4e09\u65b9\u5e94\u7528\u3001\u4f01\u4e1a\u4e0a\u4e0b\u6e38\u5e94\u7528\u548c\u4f01\u4e1a\u4e0a\u4e0b\u7ea7\u7b49\u5e94\u7528\u7531\u4e8e\u80fd\u901a\u8fc7\u5e94\u7528\u5e02\u573a\u5f00\u901a\u3001\u4e0a\u4e0b\u6e38\u5206\u53d1\u7b49\u5206\u53d1\u6e20\u9053\uff0c\u6700\u7ec8\u8fd0\u884c\u5728\u591a\u4e2a\u7ec4\u7ec7\u5185\uff0c\u56e0\u6b64\u88ab\u5f52\u7c7b\u4e3a",(0,a.kt)("strong",{parentName:"li"},"\u591a\u7ec4\u7ec7\u5e94\u7528\uff08Multi-tenant Application\uff09"),"\u3002")),(0,a.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u4f01\u4e1a\u5185\u90e8\u5e94\u7528\u6539\u9020\u6210\u4e0a\u4e0b\u6e38\u5e94\u7528\uff0c\u662f\u4e00\u4e2a\u4ece\u5355\u7ec4\u7ec7\u5e94\u7528\u5230\u591a\u7ec4\u7ec7\u5e94\u7528\u7684\u6539\u9020\u3002\u4f60\u53ef\u4ee5\u7ee7\u7eed\u53c2\u8003\u672c\u6587\uff0c\u5b8c\u6210\u4ee3\u7801\u6539\u9020\u3002"),(0,a.kt)("h2",{id:"\u4e00\u68b3\u7406\u6743\u9650\u70b9"},"\u4e00\u3001\u68b3\u7406\u6743\u9650\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\uff0c\u6574\u7406\u4f60\u7684\u5e94\u7528\u4e2d\u7528\u5230\u7684\u6240\u6709\u6743\u9650\u70b9\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u6b21\uff0c\u5f00\u653e\u5e73\u53f0\u7684\u6743\u9650\u70b9\u5206\u4e3a\u4e24\u7c7b\uff1a\u59d4\u6258\u6743\u9650\u70b9\u548c\u5e94\u7528\u6743\u9650\u70b9\u3002")),(0,a.kt)("admonition",{title:"\u5f00\u53d1\u8005Tip",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"  \u6743\u9650\u70b9\u7c7b\u578b\u5728\u5f00\u53d1\u8005\u540e\u53f0\u7684\u900f\u51fa\u6b63\u5728\u5f00\u53d1\u4e2d\uff0c\u73b0\u5728\u5982\u679c\u4f60\u60f3\u77e5\u9053\u67d0\u4e2a\u6743\u9650\u70b9\u5c5e\u4e8e\u59d4\u6258\u8fd8\u662f\u5e94\u7528\uff0c\u6b22\u8fce\u8fdb\u7fa4\u54a8\u8be2\uff1a\u201c\u9489\u9489\u6743\u9650\u7cfb\u7edf\u4ea4\u6d41\u7fa4\u201d\uff0c\u7fa4\u53f7\uff1a 27520024199\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6700\u7ec8\uff0c\u4f60\u53ef\u4ee5\u6574\u7406\u51fa\u7c7b\u4f3c\u4e0b\u65b9\u8868\u683c\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"}),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u6743\u9650\u70b9code"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u6743\u9650\u4fe1\u606f"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u6743\u9650\u70b9\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"1"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Contact.User.Read"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u901a\u8baf\u5f55\u4e2a\u4eba\u4fe1\u606f\u8bfb\u6743\u9650"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u59d4\u6258\u7c7b\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"2"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Calendar.EventSchedule.Read"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u65e5\u5386\u5e94\u7528\u4e2d\u65e5\u7a0b\u95f2\u5fd9\u72b6\u6001\u8bfb\u6743\u9650"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u59d4\u6258\u7c7b\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"3"),(0,a.kt)("td",{parentName:"tr",align:"left"},"qyapi_chat_manage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9489\u9489\u7fa4\u6d88\u606f\u7ba1\u7406\u6743\u9650"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u7c7b\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"4"),(0,a.kt)("td",{parentName:"tr",align:"left"},"qyapi_chat_read"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9489\u9489\u7fa4\u6d88\u606f\u8bfb\u6743\u9650"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u7c7b\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"5"),(0,a.kt)("td",{parentName:"tr",align:"left"},"..."),(0,a.kt)("td",{parentName:"tr",align:"left"},"..."),(0,a.kt)("td",{parentName:"tr",align:"left"},"...")))),(0,a.kt)("h2",{id:"\u4e8c\u8c03\u7528openapi"},"\u4e8c\u3001\u8c03\u7528OpenAPI"),(0,a.kt)("h3",{id:"2-1-\u83b7\u53d6\u8bbf\u95ee\u51ed\u8bc1"},"2-1 \u83b7\u53d6\u8bbf\u95ee\u51ed\u8bc1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u7684\u5e94\u7528\u9700\u8981\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},"\u59d4\u6258\u7c7b\u578b\u6743\u9650\u70b9")," \u5bf9\u5e94\u7684 OpenAPI\uff0c\u8bf7\u53c2\u8003\u6587\u6863 ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/permission/token/browser/get_user_app_token_browser"},"\u6d4f\u89c8\u5668\u5185\u83b7\u53d6\u7528\u6237\u59d4\u6258\u7684\u8bbf\u95ee\u51ed\u8bc1"),"\n\u6216 ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/permission/token/jsapi/get_user_app_token_jsapi"},"\u9489\u9489\u7aef\u5185\u83b7\u53d6\u7528\u6237\u59d4\u6258\u7684\u8bbf\u95ee\u51ed\u8bc1"),"\uff0c\u83b7\u53d6\u7528\u6237\u59d4\u6258\u7684Access Token\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u59d4\u6258\u7684Access Token\u4e2d\u6709\u7528\u6237\u6388\u6743\u7684\u6240\u6709\u59d4\u6258\u7c7b\u578b\u6743\u9650\u70b9\uff0c\u53ef\u4ee5\u7528\u4e8e\u8c03\u7528\u59d4\u6258\u7c7b\u578b\u6743\u9650\u70b9\u5bf9\u5e94\u7684OpenAPI\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u7684\u5e94\u7528\u9700\u8981\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},"\u5e94\u7528\u7c7b\u578b\u6743\u9650\u70b9")," \u5bf9\u5e94\u7684 OpenAPI\u3002\u8bf7\u53c2\u8003\u6587\u6863 ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/permission/single_to_multi/new_get_app_token"},"\u83b7\u53d6\u5e94\u7528\u7684Access Token[\u65b0\ud83d\udd25] "),"\uff0c\u83b7\u53d6\u5e94\u7528\u7684Access Token\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7684Access Token\u4e2d\u6709\u6240\u6709\u5e94\u7528\u7c7b\u578b\u6743\u9650\u70b9\uff0c\u53ef\u7528\u4e8e\u8c03\u7528\u5e94\u7528\u7c7b\u578b\u6743\u9650\u70b9\u5bf9\u5e94\u7684OpenAPI\u3002 ")))),(0,a.kt)("h3",{id:"2-2-\u8c03\u7528openapi"},"2-2 \u8c03\u7528OpenAPI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u7528\u6237\u59d4\u6258\u7684Access Token\uff0c\u8c03\u7528\u59d4\u6258\u7c7b\u578b\u6743\u9650\u70b9\u5bf9\u5e94\u7684OpenAPI\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u5e94\u7528\u7684Access Token\uff0c\u8c03\u7528\u5e94\u7528\u7c7b\u578b\u6743\u9650\u70b9\u5bf9\u5e94\u7684OpenAPI\u3002")),(0,a.kt)("h2",{id:"\u4e09\u4e0a\u4e0b\u6e38\u5206\u53d1"},"\u4e09\u3001\u4e0a\u4e0b\u6e38\u5206\u53d1"),(0,a.kt)("p",null,"\u5728\u5b8c\u6210\u4e0a\u65b9\u7684\u4ee3\u7801\u6539\u9020\u540e\uff0c\u4f60\u53ef\u4ee5\u628a\u5e94\u7528\u901a\u8fc7\u5f00\u53d1\u8005\u540e\u53f0\u7684\u4e0a\u4e0b\u6e38\u5206\u53d1\u6e20\u9053\uff0c\u5206\u53d1\u7ed9\u4e0b\u6e38\u7ec4\u7ec7\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"\u56db\u5176\u4ed6"},"\u56db\u3001\u5176\u4ed6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u59d4\u6258\u6743\u9650\u548c\u5e94\u7528\u6743\u9650\u7684\u77e5\u8bc6\uff0c\u53ef\u4ee5\u79fb\u6b65",(0,a.kt)("a",{parentName:"li",href:"/docs/learn/permission/intro/delegated_permission"},"\u59d4\u6258\u8bbf\u95ee"),"\u548c",(0,a.kt)("a",{parentName:"li",href:"/docs/learn/permission/intro/application_permission"},"\u5e94\u7528\u8bbf\u95ee"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4ee5\u4e0a\u65b9\u5f0f\u65e0\u6cd5\u89e3\u51b3\u4f60\u7684\u95ee\u9898\uff0c\u6b22\u8fce\u901a\u8fc7",(0,a.kt)("a",{parentName:"li",href:"/docs/explore/support"},"\u6280\u672f\u652f\u6301"),"\u63d0\u4ea4\u4f60\u7684\u53cd\u9988 \u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5728\u6539\u9020\u8fc7\u7a0b\u4e2d\u6709\u4efb\u4f55\u95ee\u9898\uff0c\u6b22\u8fce\u8fdb\u7fa4\u54a8\u8be2\uff1a\u201c\u9489\u9489\u6743\u9650\u7cfb\u7edf\u4ea4\u6d41\u7fa4\u201d\uff0c\u7fa4\u53f7\uff1a 27520024199\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8be5\u95ee\u9898\u8fd8\u6709\u5176\u4ed6\u7684\u56e0\u7d20\u9700\u8981\u8003\u8651\uff0c\u4e5f\u6b22\u8fce\u4f60",(0,a.kt)("a",{parentName:"li",href:"/docs/contrib/overview"},"\u53c2\u4e0e\u8d21\u732e"),"\u5b8c\u5584\u8be5\u6587\u6863\uff0c\u5e2e\u52a9\u66f4\u591a\u4eba\u89e3\u51b3\u4e0a\u4e0b\u6e38\u5e94\u7528\u95ee\u9898\u3002")))}u.isMDXComponent=!0}}]);