"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[2625],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),d=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(i.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=d(n),u=r,g=s["".concat(i,".").concat(u)]||s[u]||k[u]||l;return n?a.createElement(g,o(o({ref:e},m),{},{components:n})):a.createElement(g,o({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[s]="string"==typeof t?t:r,o[1]=p;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83916:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:1},o="AI \u52a9\u7406\u53d1\u9001\u6d88\u606f",p={unversionedId:"develop/agent/send-message",id:"develop/agent/send-message",title:"AI \u52a9\u7406\u53d1\u9001\u6d88\u606f",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5b9e\u73b0\u4ee5 AI \u52a9\u7406 \u8eab\u4efd\u53d1\u9001\u6d88\u606f\uff0c\u4ee5\u53ca\u5728\u4e0d\u540c\u573a\u666f\u4e0b\u5982\u4f55\u9009\u62e9\u5408\u9002\u7684\u63a5\u53e3\u3002",source:"@site/docs/develop/agent/send-message.md",sourceDirName:"develop/agent",slug:"/develop/agent/send-message",permalink:"/developerpedia/docs/develop/agent/send-message",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/develop/agent/send-message.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"AI \u52a9\u7406",permalink:"/developerpedia/docs/category/ai-\u52a9\u7406"},next:{title:"\u6743\u9650",permalink:"/developerpedia/docs/category/\u6743\u9650"}},i={},d=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"\u56de\u590d\u6d88\u606f\u6a21\u5f0f",id:"\u56de\u590d\u6d88\u606f\u6a21\u5f0f",level:3},{value:"\u4e3b\u52a8\u53d1\u9001\u6a21\u5f0f",id:"\u4e3b\u52a8\u53d1\u9001\u6a21\u5f0f",level:3},{value:"\u76f4\u63a5\u53d1\u9001",id:"\u76f4\u63a5\u53d1\u9001",level:4},{value:"\u5206\u6b65\u53d1\u9001",id:"\u5206\u6b65\u53d1\u9001",level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],m={toc:d},s="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ai-\u52a9\u7406\u53d1\u9001\u6d88\u606f"},"AI \u52a9\u7406\u53d1\u9001\u6d88\u606f"),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5b9e\u73b0\u4ee5 ",(0,r.kt)("a",{parentName:"p",href:"https://open.dingtalk.com/document/ai-dev/introduction-to-ai-assistant"},"AI \u52a9\u7406")," \u8eab\u4efd\u53d1\u9001\u6d88\u606f\uff0c\u4ee5\u53ca\u5728\u4e0d\u540c\u573a\u666f\u4e0b\u5982\u4f55\u9009\u62e9\u5408\u9002\u7684\u63a5\u53e3\u3002"),(0,r.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,r.kt)("p",null,"\u9489\u9489 AI \u52a9\u7406\uff0c\u5b83\u878d\u5408\u4e86\u9489\u9489\u5e73\u53f0\u7684\u591a\u9879 AI \u4ea7\u54c1\u529f\u80fd\uff0c\u4ee5\u667a\u80fd\u5316\u7684\u65b9\u5f0f\u8f85\u52a9\u4f01\u4e1a\u65e5\u5e38\u7684\u5de5\u4f5c\u6d41\u7a0b\u3002\u9489\u9489 AI \u52a9\u7406\u5177\u5907\u591a\u79cd\u667a\u80fd\u80fd\u529b\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u667a\u80fd\u6c9f\u901a\u3001\u667a\u80fd\u534f\u540c\u3001\u667a\u80fd\u7ba1\u7406\u7b49\u3002"),(0,r.kt)("p",null,"\u53d1\u9001\u6d88\u606f\u7684\u6a21\u5f0f\u5206\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u4e3b\u52a8\u53d1\u9001\u6a21\u5f0f"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u56de\u590d\u6d88\u606f\u6a21\u5f0f"),"\uff0c\u4e24\u79cd\u6a21\u5f0f\u5bf9\u6bd4\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3b\u52a8\u53d1\u9001\u6a21\u5f0f"),(0,r.kt)("th",{parentName:"tr",align:null},"\u56de\u590d\u6d88\u606f\u6a21\u5f0f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ed9\u6307\u5b9a\u7528\u6237\uff08UnionID\uff09\u53d1\u9001\u5355\u804a\u6d88\u606f\uff0c\u6216\u8005\u7ed9\u6307\u5b9a\u7fa4\u7ec4\uff08OpenConversationID\uff09\u53d1\u9001\u7fa4\u804a\u6d88\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},"AI \u52a9\u7406\uff08\u6216\u673a\u5668\u4eba\uff09\u6536\u5230\u6765\u81ea\u5355\u804a\u3001\u7fa4\u804a\u6216\u8005\u9b54\u6cd5\u68d2\u4e2d\u7684\u6d88\u606f\u540e\uff0c\u5b8c\u6210\u8bf7\u6c42\u5904\u7406\uff0c\u5e76\u4ee5\u6d88\u606f\u65b9\u5f0f\u4e88\u4ee5\u54cd\u5e94")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u573a\u666f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u5b9a\u65f6\u4efb\u52a1\u89e6\u53d1\uff0c\u4ea7\u54c1\u4e3b\u52a8\u63a8\u9001\u6216\u8fd0\u8425\u4e3b\u52a8\u63a8\u9001\u7684\u573a\u666f\u4e0b\uff0c\u4e3b\u52a8\u7ed9\u7528\u6237\u6216\u8005\u7fa4\u7ec4\u53d1\u9001\u6d88\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u6709\u9650\u7684\u65f6\u95f4\u5185\u56de\u590d\u6765\u81ea\u804a\u5929\u4f1a\u8bdd\uff08\u5355\u804a\u3001\u7fa4\u804a\u6216\u9b54\u6cd5\u68d2\uff09\u4e2d\u7684\u8bf7\u6c42")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7279\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u5728\u4efb\u4f55\u65f6\u5019\u4e3b\u52a8\u53d1\u8d77\u8c03\u7528"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7b80\u5355\u6613\u7528\uff0c\u53d1\u8d77\u8c03\u7528\u65f6\u5019\u53ef\u4ee5\u4e0d\u7528\u5173\u5fc3\u4f1a\u8bdd\u7c7b\u578b\uff08\u5355\u804a\u3001\u7fa4\u804a\u6216\u9b54\u6cd5\u68d2\uff09\uff0c\u4e00\u6b21\u7b80\u5355\u7684\u5f00\u53d1\u5373\u53ef\u517c\u5bb9\u6240\u6709\u7684\u4f1a\u8bdd\u7c7b\u578b\u4e2d\u56de\u590d\u6d88\u606f\u3002",(0,r.kt)("br",null),"\u5728 AI \u52a9\u7406\u548c\u673a\u5668\u4eba\u7684\u5f00\u53d1\u4e2d\uff0c\u56de\u590d\u6d88\u606f\u662f\u4e3b\u6d41\u573a\u666f\uff0c\u4e3a\u8be5\u573a\u666f\u7279\u522b\u63d0\u4f9b\u66f4\u52a0\u6613\u7528\u7684\u63a5\u53e3\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5feb\u901f\u5b9e\u73b0\u529f\u80fd\u5f00\u53d1\u3002",(0,r.kt)("br",null),"\u5728\u56de\u590d\u6d88\u606f\u6a21\u5f0f\u4e2d\uff0c\u4f60\u4f1a\u5148\u6536\u5230\u4e00\u6761\u6d88\u606f\u8bf7\u6c42\uff0c\u7136\u540e\u56de\u590d\u5b83\u3002\u5728\u6536\u5230\u7684\u6d88\u606f\u8bf7\u6c42\u4e2d\uff0c\u4f60\u53ef\u4ee5\u83b7\u5f97 SessionWebhook \u6216\u8005 ConversationToken \u53c2\u6570\uff0c\u901a\u8fc7 SessionWebhook \u6216 ConversationToken \u56de\u590d\u6d88\u606f\u5373\u53ef\uff0c\u65e0\u9700\u5173\u5fc3\u4f1a\u8bdd\u7c7b\u578b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u9650\u5236"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u6839\u636e\u4f1a\u8bdd\u7c7b\u578b\uff0c\u9009\u62e9\u4e0d\u540c\u7684\u53d1\u9001\u76ee\u6807\u53c2\u6570\u6765\u8c03\u7528\u3002\u4f8b\u5982\uff1a",(0,r.kt)("br",null),"\u5728",(0,r.kt)("strong",{parentName:"td"},"\u5355\u804a"),"\u4f1a\u8bdd\u573a\u666f\uff0c\u9700\u8981\u6307\u5b9a\u7528\u6237 ID \u6765\u53d1\u9001\u6d88\u606f\uff0c\u4e5f\u5373 UnionID\uff1b",(0,r.kt)("br",null),"\u5728",(0,r.kt)("strong",{parentName:"td"},"\u7fa4\u804a"),"\u4f1a\u8bdd\u573a\u666f\uff0c\u9700\u8981\u6307\u5b9a\u7fa4\u7ec4\u7684\u4f1a\u8bdd ID \u6765\u53d1\u9001\u6d88\u606f\uff0c\u4e5f\u5373 OpenConversationID\u3002",(0,r.kt)("br",null),"\u7279\u522b\u63d0\u9192\uff1a\u5982\u679c\u4f60\u5728\u56de\u590d\u6d88\u606f\u7684\u573a\u666f\u4e2d\uff0c\u4f7f\u7528\u4e3b\u52a8\u53d1\u9001\u6a21\u5f0f\u7684\u8bdd\uff0c\u5fc5\u987b\u7a77\u4e3e\u6240\u6709\u4f1a\u8bdd\u7c7b\u578b\u7684\u53d1\u9001\u65b9\u5f0f\u3002\u5426\u5219\u4f1a\u5bfc\u81f4\u5728\u7279\u5b9a\u4f1a\u8bdd\u7c7b\u578b\u4e2d\u529f\u80fd\u5f02\u5e38\u3002\u4f8b\u5982\uff1a\u5728 AI \u52a9\u7406\uff08\u6216\u673a\u5668\u4eba\uff09\u56de\u590d\u7528\u6237\u6d88\u606f\u7684\u5904\u7406\u4e2d\uff0c\u53ea\u5b9e\u73b0\u4e86\u7fa4\u804a\u7c7b\u578b\uff0c\u90a3\u4e48\u7528\u6237\u5355\u804a\u4e2d\u4f7f\u7528\u8be5\u529f\u80fd\u5c06\u65e0\u6cd5\u6536\u5230\u56de\u590d\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b\u662f\u5728\u6536\u5230\u7528\u6237\u8bf7\u6c42\u4e4b\u540e\u624d\u80fd\u8c03\u7528\u56de\u590d\u6d88\u606f\u63a5\u53e3\uff0c\u5e76\u4e14\u6709\u65f6\u95f4\u9650\u5236\u3002",(0,r.kt)("br",null),"\u65e0\u8bba\u662f SessionWebhook \u8fd8\u662f ConversationToken\uff0c\u90fd\u5b58\u5728\u8fc7\u671f\u65f6\u95f4\u3002\u4f60\u5fc5\u987b\u5728\u8fc7\u671f\u4e4b\u524d\u56de\u590d\u6d88\u606f\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u8c03\u7528\u5931\u8d25\u3002\u901a\u5e38\u8be5\u8fc7\u671f\u65f6\u95f4\u662f\u8db3\u591f\u7684\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5bf9\u5e94\u7684\u63a5\u53e3\u6587\u6863\u4e86\u89e3\u5177\u4f53\u7684\u8fc7\u671f\u65f6\u957f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u5efa\u8bae"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u6ca1\u6709\u804a\u5929\u4e0a\u4e0b\u6587\u7684\u573a\u666f\u4e0b\uff0c\u9700\u8981\u4e3b\u52a8\u53d1\u9001\u6d88\u606f\u5230\u5355\u804a\u6216\u7fa4\u804a\u4f1a\u8bdd\u7684\u65f6\u5019\uff0c",(0,r.kt)("strong",{parentName:"td"},"\u53ea\u80fd"),"\u4f7f\u7528\u4e3b\u52a8\u53d1\u9001\u6a21\u5f0f\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f60\u5e0c\u671b\u901a\u8fc7 AI \u52a9\u7406\uff08\u6216\u673a\u5668\u4eba\uff09\u56de\u590d\u6765\u81ea\u804a\u5929\u4f1a\u8bdd\u4e2d\u5bf9\u8bdd\u8bf7\u6c42\u65f6\u5019\uff0c\u5f3a\u70c8\u5efa\u8bae\u4f18\u5148\u91c7\u7528\u56de\u590d\u6d88\u606f\u6a21\u5f0f\u3002\u5f53\u7136\uff0c\u5728\u8fd9\u4e2a\u573a\u666f\u4e0b\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e3b\u52a8\u53d1\u9001\u6a21\u5f0f\uff0c\u8fd9\u79cd\u65f6\u5019\u9700\u8981\u9488\u5bf9\u6bcf\u79cd\u4f1a\u8bdd\u7c7b\u578b\uff08\u5355\u804a\u3001\u7fa4\u804a\u3001\u9b54\u6cd5\u68d2\uff09\u5206\u522b\u5b9e\u73b0\u5bf9\u5e94\u7684\u63a5\u53e3\u8c03\u7528\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u90e8\u5206\u573a\u666f\u4e0b\u529f\u80fd\u5f02\u5e38\u3002")))),(0,r.kt)("h2",{id:"\u63a5\u53e3\u8bf4\u660e"},"\u63a5\u53e3\u8bf4\u660e"),(0,r.kt)("h3",{id:"\u56de\u590d\u6d88\u606f\u6a21\u5f0f"},"\u56de\u590d\u6d88\u606f\u6a21\u5f0f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f7f\u7528\u573a\u666f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/ai-dev/ai-assistant-message-sending-webhook-reply-message-mode"},"AI \u52a9\u7406\u56de\u590d\u6d88\u606f\uff08SessionWebhook \u65b9\u5f0f\uff09")),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7 SessionWebhook \u6765\u56de\u590d\u7528\u6237\u7684\u6d88\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728 SessionWebhook \u672a\u8fc7\u671f\u573a\u666f\u4e0b\uff0c\u91c7\u7528\u8be5\u63a5\u53e3\u66f4\u7b80\u5355\u6613\u7528\u3002SessionWebhook \u901a\u8fc7 TLS \u5b89\u5168\u4fe1\u9053\u548c\u77ed\u5468\u671f\u7684\u8fc7\u671f\u65f6\u95f4\u786e\u4fdd\u4e86\u5176\u5b89\u5168\u6027\uff0c\u91c7\u7528\u7b80\u5355\u7684 HTTP POST \u65b9\u5f0f\u5373\u53ef\u5b8c\u6210\u8c03\u7528\uff0c\u65e0\u9700\u989d\u5916\u9274\u6743\u52a8\u4f5c\u3002SessionWebhook \u7684\u8fc7\u671f\u65f6\u95f4\u8bbe\u8ba1\u4e0a\uff0c\u4f1a\u6ee1\u8db3\u7edd\u5927\u591a\u6570\u573a\u666f\uff0c\u5982\u679c\u4f60\u7684\u573a\u666f\u662f\u6536\u5230\u8bf7\u6c42\u540e\u7acb\u5373\u56de\u590d\uff0c\u53ef\u4ee5\u5ffd\u7565\u8be5\u8fc7\u671f\u65f6\u95f4\u7684\u7ea6\u675f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp/ai-assistant-messages-reply-mode"},"AI \u52a9\u7406\u56de\u590d\u6d88\u606f\uff08OpenAPI \u65b9\u5f0f\uff09")),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7 OpenAPI \u6765\u56de\u590d\u7528\u6237\u7684\u6d88\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728 SessionWebhook \u8fc7\u671f\u7684\u573a\u666f\u4e0b\uff0c\u9009\u62e9\u56de\u590d\u6d88\u606f\u6a21\u5f0f\u7684\u8bdd\uff0c\u53ea\u80fd\u91c7\u7528 OpenAPI \u65b9\u5f0f\uff0c\u9700\u8981\u6309\u7167 OpenAPI \u8c03\u7528\u89c4\u8303\uff0c\u9996\u5148\u901a\u8fc7\u5e94\u7528\u7684 Client ID \u548c Client secret \u6362\u53d6\u8bbf\u95ee\u51ed\u8bc1\uff08AccessToken\uff09\uff0c\u5e76\u4f7f\u7528\u8bbf\u95ee\u51ed\u8bc1\u8c03\u7528\u8be5\u63a5\u53e3\u3002")))),(0,r.kt)("h3",{id:"\u4e3b\u52a8\u53d1\u9001\u6a21\u5f0f"},"\u4e3b\u52a8\u53d1\u9001\u6a21\u5f0f"),(0,r.kt)("h4",{id:"\u76f4\u63a5\u53d1\u9001"},"\u76f4\u63a5\u53d1\u9001"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u7684\u6d88\u606f\u662f\u4e00\u6761\u5b8c\u6574\u4e14\u72ec\u7acb\u7684\u6d88\u606f\uff0c\u53d1\u9001\u5b8c\u6210\u540e\u4e0d\u9700\u8981\u6301\u7eed\u66f4\u65b0\u5b83\uff0c\u4f8b\u5982\u6587\u672c\u3001\u56fe\u7247\u3001\u4e92\u52a8\u5361\u7247\u7b49\uff0c\u53ef\u4ee5\u4f7f\u7528\u8be5\u65b9\u6cd5\u53d1\u9001\u6d88\u606f\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f7f\u7528\u573a\u666f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp/api-send"},"AI \u52a9\u7406\u53d1\u6d88\u606f\uff08\u4e3b\u52a8\u53d1\u9001\u6a21\u5f0f\uff09")),(0,r.kt)("td",{parentName:"tr",align:null},"\u76f4\u63a5\u53d1\u9001\u4e00\u6761\u6d88\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u53d1\u9001\u4e00\u6761\u5b8c\u6574\u7684\u6d88\u606f\uff0c\u4f8b\u5982\u6587\u672c\u3001\u56fe\u7247\u3001\u4e92\u52a8\u5361\u7247\u6d88\u606f\u7b49")))),(0,r.kt)("h4",{id:"\u5206\u6b65\u53d1\u9001"},"\u5206\u6b65\u53d1\u9001"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u5f15\u5165\u6253\u5b57\u673a\u6a21\u5f0f\uff0c\u53d1\u9001\u540e\u8fd8\u80fd\u6301\u7eed\u66f4\u65b0\u8be5\u6d88\u606f\u5185\u5bb9\u3002\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u5206\u6b65\u53d1\u9001\u6d88\u606f\u7684\u63a5\u53e3\uff0c\u8bf7\u52a1\u5fc5\u6309\u7167\u9884\u5907\u3001\u66f4\u65b0\u3001\u7ed3\u675f\u7684\u987a\u5e8f\u6765\u8c03\u7528\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp/api-prepare"},"AI \u52a9\u7406\u9884\u5907\u53d1\u6d88\u606f\uff08\u4e3b\u9001\u53d1\u578b\u6a21\u5f0f\uff09")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ed9\u7528\u6237\u53d1\u9001\u4e00\u4e2a\u72b6\u6001\u4e3a\u201c\u51c6\u5907\u4e2d\u201d\u7684\u6d88\u606f\u6846\uff0c\u5f00\u53d1\u8005\u6536\u5230\u9489\u9489\u9881\u53d1\u7684\u4f1a\u8bdd\u51ed\u8bc1\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp/api-update"},"AI \u52a9\u7406\u66f4\u65b0\u6d88\u606f\uff08\u4e3b\u52a8\u53d1\u9001\u6a21\u5f0f\uff09")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u8005\u4f7f\u7528\u4f1a\u8bdd\u51ed\u8bc1\u66f4\u65b0\u6d88\u606f\u6846\u4e2d\u7684\u5185\u5bb9\uff0c\u53ef\u4ee5\u591a\u6b21\u66f4\u65b0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/orgapp/api-finish"},"AI \u52a9\u7406\u7ed3\u675f\u53d1\u6d88\u606f\uff08\u4e3b\u52a8\u53d1\u9001\u6a21\u5f0f\uff09")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ed3\u675f\u8be5\u6d88\u606f\u3002")))),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u4ee5\u4e0a\u6587\u6863\u5185\u5bb9\uff0c\u63cf\u8ff0\u4e86 AI \u52a9\u7406\u53d1\u9001\u6d88\u606f\u7684\u5404\u79cd\u63a5\u53e3\u53ca\u4f7f\u7528\u573a\u666f\u3002\u5982\u679c\u60f3\u8981\u4e86\u89e3\u5b8c\u6574\u7684\u64cd\u4f5c\u6b65\u9aa4\uff0c\u53ef\u4ee5\u53c2\u8003\u53c2\u8003\u4ee5\u4e0b\u6559\u5b66\u6587\u6863\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/ai-dev/ai-assistant-message-sending-openapi-reply-message-mode"},"AI \u52a9\u7406\u53d1\u6d88\u606f - \u56de\u590d\u6d88\u606f\u6a21\u5f0f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/ai-dev/ai-assistant-messaging-active-sending-mode"},"AI \u52a9\u7406\u53d1\u6d88\u606f - \u4e3b\u52a8\u53d1\u9001\u6a21\u5f0f"))),(0,r.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/ai-dev/introduction-to-ai-assistant"},"AI \u52a9\u7406\u6982\u8ff0"))))}k.isMDXComponent=!0}}]);