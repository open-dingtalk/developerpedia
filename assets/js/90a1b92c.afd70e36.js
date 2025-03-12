"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[2802],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:1},a="\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u95ee\u9898\u6700\u4f73\u5b9e\u8df5",p={unversionedId:"develop/best-practices/openapi-exception",id:"develop/best-practices/openapi-exception",title:"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u95ee\u9898\u6700\u4f73\u5b9e\u8df5",description:"\u5f53\u4f60\u8c03\u7528\u9489\u9489\u5f00\u653e\u5e73\u53f0 API \u65f6\u5019\uff0c\u5982\u679c\u51fa\u73b0\u8c03\u7528\u5f02\u5e38\uff0c\u53ef\u4ee5\u53c2\u8003\u672c\u6587\u6863\u5bfb\u6c42\u89e3\u51b3\u65b9\u6848",source:"@site/docs/develop/best-practices/openapi-exception.md",sourceDirName:"develop/best-practices",slug:"/develop/best-practices/openapi-exception",permalink:"/developerpedia/docs/develop/best-practices/openapi-exception",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/develop/best-practices/openapi-exception.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6700\u4f73\u5b9e\u8df5",permalink:"/developerpedia/docs/category/\u6700\u4f73\u5b9e\u8df5"},next:{title:"\u201c\u63a5\u53e3\u8c03\u7528\u6ca1\u6709\u6743\u9650\u201d \u95ee\u9898\u6700\u4f73\u5b9e\u8df5",permalink:"/developerpedia/docs/develop/best-practices/permission-deny"}},l={},c=[{value:"\u5347\u7ea7\u81f3\u6700\u65b0\u7248",id:"\u5347\u7ea7\u81f3\u6700\u65b0\u7248",level:2},{value:"\u5bfb\u6c42\u5e2e\u52a9",id:"\u5bfb\u6c42\u5e2e\u52a9",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u95ee\u9898\u6700\u4f73\u5b9e\u8df5"},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u95ee\u9898\u6700\u4f73\u5b9e\u8df5"),(0,o.kt)("p",null,"\u5f53\u4f60\u8c03\u7528\u9489\u9489\u5f00\u653e\u5e73\u53f0 API \u65f6\u5019\uff0c\u5982\u679c\u51fa\u73b0\u8c03\u7528\u5f02\u5e38\uff0c\u53ef\u4ee5\u53c2\u8003\u672c\u6587\u6863\u5bfb\u6c42\u89e3\u51b3\u65b9\u6848"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u8fd9\u7c7b\u5e38\u89c1\u95ee\u9898\uff0c\u6709\u66f4\u4e3a\u8be6\u7ec6\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u70b9\u51fb\u67e5\u770b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"permission-deny"},"\u201c\u63a5\u53e3\u8c03\u7528\u6ca1\u6709\u6743\u9650\u201d \u95ee\u9898\u6700\u4f73\u5b9e\u8df5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"socket-timeout"},"\u7f51\u7edc\u8fde\u63a5\u95ee\u9898\u9519\u8bef\u8bca\u65ad\u4e0e\u89e3\u51b3"))),(0,o.kt)("h2",{id:"\u5347\u7ea7\u81f3\u6700\u65b0\u7248"},"\u5347\u7ea7\u81f3\u6700\u65b0\u7248"),(0,o.kt)("p",null,"\u5efa\u8bae\u53c2\u8003\u548c\u91c7\u7528\u6700\u65b0\u7248\u672c\u7684\u6587\u6863\u3001API \u548c SDK\u3002"),(0,o.kt)("h2",{id:"\u5bfb\u6c42\u5e2e\u52a9"},"\u5bfb\u6c42\u5e2e\u52a9"),(0,o.kt)("p",null,"\u5f53\u4ee5\u4e0a\u65b9\u6cd5\u90fd\u65e0\u6cd5\u89e3\u51b3\u4f60\u7684\u95ee\u9898\u65f6\u5019\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("a",{parentName:"p",href:"/docs/explore/support"},"\u6280\u672f\u652f\u6301"),"\u63d0\u4ea4\u4f60\u7684\u95ee\u9898\u53cd\u9988\uff0c\u4ee5\u5bfb\u6c42\u5e2e\u52a9\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u9ad8\u6548\u89e3\u51b3\u95ee\u9898\uff0c\u63d0\u4ea4\u53cd\u9988\u65f6\u5019\u52a1\u5fc5\u63d0\u4f9b\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5e94\u7528 ClientID \uff08\u5bf9\u5e94 AppKey \u6216\u8005 SuiteKey\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u8c03\u7528\u63a5\u53e3\u7684\u65e5\u671f\u548c\u65f6\u95f4"),(0,o.kt)("li",{parentName:"ol"},"\u8c03\u7528\u7684\u63a5\u53e3URL\uff0c\u6216\u8005\u5bf9\u5e94\u7684\u5f00\u653e\u5e73\u53f0\u6587\u6863\u94fe\u63a5\uff0c\u6216\u8005\u8c03\u7528 SDK \u7684\u76f8\u5173\u4ee3\u7801 \uff08\u63a8\u8350\u63d0\u4f9b\u63a5\u53e3 URL \uff0c\u6216\u8005\u63a5\u53e3\u5bf9\u5e94\u7684\u6587\u6863 URL\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u8c03\u7528\u63a5\u53e3\u65f6\u5019\u4f20\u5165\u7684\u53c2\u6570\uff0c\u6ce8\u610f\u5bf9\u654f\u611f\u4fe1\u606f\u8131\u654f\u3002\u8131\u654f\u65f6\u5019\u5c3d\u91cf\u4fdd\u7559 json \u6570\u636e\u7684\u683c\u5f0f\u4fe1\u606f"),(0,o.kt)("li",{parentName:"ol"},"\u9489\u9489\u5f00\u653e\u5e73\u53f0\u8fd4\u56de\u7684\u9519\u8bef\u4fe1\u606f"),(0,o.kt)("li",{parentName:"ol"},"\u63a5\u53e3\u7684 RequestID")),(0,o.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u4fdd\u62a4\u7684\u4f60\u5e94\u7528\u5b89\u5168\uff0c\u4ee5\u53ca\u4f7f\u7528\u4f60\u5e94\u7528\u7684\u5ba2\u6237\u4fe1\u606f\u5b89\u5168\uff0c\u8bf7\u4e0d\u8981\u5728\u95ee\u9898\u53cd\u9988\u4e2d\u643a\u5e26\u9690\u79c1\u4fe1\u606f\u3002\u4f8b\u5982 ClientSecret\u3001\u7528\u6237AT\u804a\u5929\u673a\u5668\u4eba\u7684\u6d88\u606f\u5185\u5bb9\u7b49\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u5728\u95ee\u9898\u6c9f\u901a\u7fa4\u4e2d\u53cd\u9988\u95ee\u9898\u65f6\u5019\uff0c\u4e0d\u5c0f\u5fc3\u63d0\u4ea4\u4e86\u9690\u79c1\u4fe1\u606f\uff0c\u7fa4\u7ba1\u7406\u5458\u53d1\u73b0\u540e\u5c06\u4f1a\u7acb\u5373\u64a4\u56de\u8be5\u6d88\u606f\uff0c\u4ee5\u907f\u514d\u4f60\u7684\u5e94\u7528\u548c\u4f7f\u7528\u4f60\u5e94\u7528\u7684\u5ba2\u6237\u4fe1\u606f\u53d1\u751f\u6cc4\u6f0f\u3002")),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"permission-deny"},"\u201c\u63a5\u53e3\u8c03\u7528\u6ca1\u6709\u6743\u9650\u201d \u95ee\u9898\u6700\u4f73\u5b9e\u8df5"))))}d.isMDXComponent=!0}}]);