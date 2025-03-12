"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[7967],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:1},i="\u6982\u8ff0",l={unversionedId:"explore/tutorials/assistant_ability/passthrough_mode/overview",id:"explore/tutorials/assistant_ability/passthrough_mode/overview",title:"\u6982\u8ff0",description:"\u9489\u9489 AI \u52a9\u7406\u8fd9\u4e2a\u4ea7\u54c1\uff0c\u80cc\u540e\u5bf9\u5e94\u7684\u667a\u80fd\u4f53\uff08Agent\uff09\u7684\u6280\u672f\u67b6\u6784\u3002",source:"@site/docs/explore/tutorials/assistant_ability/passthrough_mode/overview.md",sourceDirName:"explore/tutorials/assistant_ability/passthrough_mode",slug:"/explore/tutorials/assistant_ability/passthrough_mode/overview",permalink:"/developerpedia/docs/explore/tutorials/assistant_ability/passthrough_mode/overview",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/explore/tutorials/assistant_ability/passthrough_mode/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u76f4\u901a\u6a21\u5f0f & \u6280\u80fd\u5f00\u53d1",permalink:"/developerpedia/docs/explore/tutorials/assistant_ability/passthrough_mode"},next:{title:"Java",permalink:"/developerpedia/docs/explore/tutorials/assistant_ability/passthrough_mode/java"}},s={},p=[{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u9489\u9489 AI \u52a9\u7406\u8fd9\u4e2a\u4ea7\u54c1\uff0c\u80cc\u540e\u5bf9\u5e94\u7684\u667a\u80fd\u4f53\uff08Agent\uff09\u7684\u6280\u672f\u67b6\u6784\u3002\n\u5728\u52a9\u7406\u7684\u9ad8\u9636\u5f00\u53d1\u4e2d\uff0c\u79bb\u4e0d\u5f00\u5de5\u5177\u8c03\u7528\uff08tool call\uff0c\u6216\u8005\u90e8\u5206\u573a\u666f\u4e2d\u53ebtool chain\u3001function call\uff09\u3002\u9489\u9489\u5728\u5f00\u653e\u5e73\u53f0\u539f\u6709\u7684 Stream \u6a21\u5f0f\u6280\u672f\u67b6\u6784\u4e0a\uff0c\u652f\u6301\u4e86\u76f4\u901a\u6a21\u5f0f\u548c\u81ea\u5b9a\u4e49\u6280\u80fd\u5f00\u53d1\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7 Stream \u6a21\u5f0f\u5f00\u53d1 AI \u52a9\u7406\u7684\u81ea\u5b9a\u4e49\u6280\u80fd\u6216\u8005\u76f4\u901a\u6a21\u5f0f\u90fd\u4f1a\u53d8\u5f97\u66f4\u5b89\u5168\u66f4\u4fbf\u6377\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u76f4\u901a\u6a21\u5f0f\u5b9a\u4e49"),"\uff1a\u9489\u9489 AI \u52a9\u7406\u5728\u6280\u672f\u4e0a\u662f\u4e00\u4e2a\u667a\u80fd\u4f53\uff08Agent\uff09\uff0cAgent\u5728\u8fd0\u884c\u4e2d\u9700\u8981\u505a\u89c4\u5212\u63a8\u7406\uff08Planning\uff09\uff0c\u76f4\u901a\u6a21\u5f0f\u662f\u4e00\u79cd\u901a\u9053\uff0c\u9489\u9489 Agent \u6846\u67b6\u5c42\u4e0d\u505a\u89c4\u5212\u63a8\u7406\uff0c\u5c3d\u900f\u4f20\u7528\u6237\u8bf7\u6c42\u5230\u5f00\u53d1\u8005\u81ea\u5df1\u7684\u670d\u52a1\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9002\u7528\u573a\u666f"),"\uff1a\u52a9\u7406\u5f00\u53d1\u5df2\u7ecf\u901a\u8fc7\u5176\u4ed6\u6846\u67b6\u6216\u8005\u6280\u672f\u4f53\u7cfb\uff0c\u521b\u5efa\u81ea\u5df1\u7684Agent\uff0c\u5e0c\u671b\u5c06\u8fd9\u4e2a Agent \u63a5\u5165\u5230\u9489\u9489\u4e2d\uff0c\u7ed9\u9489\u9489\u5185\u7ec4\u7ec7\u5458\u5de5\u63d0\u4f9b\u670d\u52a1\u3002\u4f8b\u5982\u901a\u8fc7 LangChain \u7b49\u6846\u67b6\u5f00\u53d1\u81ea\u5b9a\u4e49 Agent\uff0c\u7136\u540e\u901a\u8fc7\u76f4\u901a\u6a21\u5f0f\u63a5\u5165\u5230\u9489\u9489\u4e2d\u6765\u3002"),(0,a.kt)("p",null,"\u6839\u636e\u4e0a\u9762\u5b9a\u4e49\u548c\u4f7f\u7528\u573a\u666f\u53ef\u4ee5\u770b\u51fa\u6765\uff0c\u76f4\u901a\u6a21\u5f0f\u672c\u8d28\u4e0a\u662f\u901a\u8fc7\u81ea\u5b9a\u4e49\u6280\u80fd\u6765\u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u76f8\u5173\u7684\u6280\u672f\u6587\u6863\u548c\u64cd\u4f5c\u65b9\u5f0f\u57fa\u672c\u4e0a\u662f\u4e00\u81f4\u7684\u3002\u552f\u4e00\u7684\u533a\u522b\u662f\uff0c\u76f4\u901a\u6a21\u5f0f\u4e0b\uff0cAI\u52a9\u7406\u53ea\u80fd\u6709\u4e00\u4e2a\u81ea\u5b9a\u4e49\u6280\u80fd\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u53ef\u4ee5\u901a\u8fc7\u76f8\u5173\u6587\u6863\u5b66\u4e60\u5982\u4f55\u5f00\u53d1\u76f4\u901a\u6a21\u5f0f\u548c\u81ea\u5b9a\u4e49\u6280\u80fd\u3002"),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"./python"},"Python \u6559\u7a0b")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"./java"},"Java \u6559\u7a0b"))))}d.isMDXComponent=!0}}]);