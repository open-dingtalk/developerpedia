"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[7400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,y=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:3},o="3. \u521b\u5efa\u81ea\u5b9a\u4e49\u80fd\u529b",p={unversionedId:"explore/tutorials/stream/advanced_ability/java/create-ai-stream-actions",id:"explore/tutorials/stream/advanced_ability/java/create-ai-stream-actions",title:"3. \u521b\u5efa\u81ea\u5b9a\u4e49\u80fd\u529b",description:"\u5f00\u53d1\u793a\u4f8b",source:"@site/docs/explore/tutorials/stream/advanced_ability/java/create-ai-stream-actions.md",sourceDirName:"explore/tutorials/stream/advanced_ability/java",slug:"/explore/tutorials/stream/advanced_ability/java/create-ai-stream-actions",permalink:"/developerpedia/docs/explore/tutorials/stream/advanced_ability/java/create-ai-stream-actions",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/explore/tutorials/stream/advanced_ability/java/create-ai-stream-actions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. \u521b\u5efa AI \u52a9\u7406",permalink:"/developerpedia/docs/explore/tutorials/stream/advanced_ability/java/create_ai_assistant"},next:{title:"4. \u5f00\u53d1\u81ea\u5b9a\u4e49\u80fd\u529b",permalink:"/developerpedia/docs/explore/tutorials/stream/advanced_ability/java/create-stream-app"}},s={},l=[{value:"\u5f00\u53d1\u793a\u4f8b",id:"\u5f00\u53d1\u793a\u4f8b",level:2},{value:"\u6b65\u9aa4\u4e00\uff1a\u7f16\u5199\u63a5\u53e3\u7684 OpenAPI \u63cf\u8ff0\u6587\u4ef6",id:"\u6b65\u9aa4\u4e00\u7f16\u5199\u63a5\u53e3\u7684-openapi-\u63cf\u8ff0\u6587\u4ef6",level:3},{value:"\u6b65\u9aa4\u4e8c\uff1a\u83b7\u53d6\u5e94\u7528\u51ed\u8bc1",id:"\u6b65\u9aa4\u4e8c\u83b7\u53d6\u5e94\u7528\u51ed\u8bc1",level:3},{value:"Step1: \u6253\u5f00 AI \u52a9\u7406\u8be6\u60c5",id:"step1-\u6253\u5f00-ai-\u52a9\u7406\u8be6\u60c5",level:4},{value:"Step2: \u70b9\u51fb\u7f16\u8f91AI\u52a9\u7406",id:"step2-\u70b9\u51fb\u7f16\u8f91ai\u52a9\u7406",level:4},{value:"Step3: \u70b9\u51fb\u5e94\u7528\u4fe1\u606f",id:"step3-\u70b9\u51fb\u5e94\u7528\u4fe1\u606f",level:4},{value:"Step4: \u83b7\u53d6\u5e94\u7528\u8eab\u4efd\u51ed\u8bc1",id:"step4-\u83b7\u53d6\u5e94\u7528\u8eab\u4efd\u51ed\u8bc1",level:4}],c={toc:l},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"3-\u521b\u5efa\u81ea\u5b9a\u4e49\u80fd\u529b"},"3. \u521b\u5efa\u81ea\u5b9a\u4e49\u80fd\u529b"),(0,r.kt)("h2",{id:"\u5f00\u53d1\u793a\u4f8b"},"\u5f00\u53d1\u793a\u4f8b"),(0,r.kt)("p",null,"\u672c\u6587\u4ee5\u5b98\u65b9\u5929\u6c14\u67e5\u8be2\u529f\u80fd\u4e3a\u4f8b\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7\u5728 OpenAPI \u914d\u7f6e\u6587\u4ef6\u4e2d\u652f\u6301 Stream\u6a21\u5f0f\u3002\u6211\u4eec\u4ee5\u9489\u9489 AI \u52a9\u7406\u63d0\u4f9b\u7684\u5b98\u65b9\u793a\u4f8b\u5929\u6c14\u67e5\u8be2\u4e3a\u4f8b\u4ecb\u7ecd Stream \u6a21\u5f0f\u7684\u914d\u7f6e\u3002"),(0,r.kt)("h3",{id:"\u6b65\u9aa4\u4e00\u7f16\u5199\u63a5\u53e3\u7684-openapi-\u63cf\u8ff0\u6587\u4ef6"},"\u6b65\u9aa4\u4e00\uff1a\u7f16\u5199\u63a5\u53e3\u7684 OpenAPI \u63cf\u8ff0\u6587\u4ef6"),(0,r.kt)("admonition",{title:"\u8bf4\u660e",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7f16\u5199\u7b26\u5408 OpenAPI 3.0 \u89c4\u8303\u7684\u63cf\u8ff0\u6587\u4ef6\u63cf\u8ff0\u4e0a\u8ff0\u63a5\u53e3\uff08\u8bed\u6cd5\u89c4\u8303\u53c2\u8003\u6807\u51c6 ",(0,r.kt)("a",{parentName:"p",href:"https://swagger.io/specification/?spm=ding_open_doc.document.0.0.5c252f20aEt5pw"},"OpenAPI Specification"),", \u683c\u5f0f\u6821\u9a8c\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://editor.swagger.io/?spm=ding_open_doc.document.0.0.5c252f20aEt5pw"},"Swagger Editor"),"\uff09\u3002")),(0,r.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u63cf\u8ff0\u7684\u5b57\u6bb5\u4e2d\uff0csummary\uff0cdescription\uff0coperationId \u4e3a\u5fc5\u586b\u5b57\u6bb5\uff1a"),(0,r.kt)("li",{parentName:"ul"},"summary\uff1a\u7b80\u77ed\u7684\u52a8\u5bbe\u7ed3\u6784\u7684\u77ed\u8bed\uff0c\u4f8b\u5982\uff1a\u67e5\u8be2\u5929\u6c14\u3002"),(0,r.kt)("li",{parentName:"ul"},"description\uff1a\u63a5\u53e3\u7684\u8be6\u7ec6\u63cf\u8ff0\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"operationId\uff1a\u63a5\u53e3\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u5efa\u8bae\u9a7c\u5cf0\u5f0f\u7684\u82f1\u6587\u547d\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u540c\u4e00\u4e2a\u63a5\u53e3\u4e2d\u8bf7\u52ff\u58f0\u540d\u91cd\u540d\u7684\u53c2\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},"POST \u63a5\u53e3\u7684\u8bf7\u6c42\u548c\u54cd\u5e94\u5f53\u524d\u4ec5\u652f\u6301 application/json \u683c\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"POST \u63a5\u53e3\u53c2\u6570\u652f\u6301 object \u7c7b\u578b\uff0c\u4e14\u53ea\u80fd\u652f\u6301\u4e00\u5c42\u53c2\u6570\u7ed3\u6784\uff08\u66f4\u591a\u80fd\u529b\uff0c\u656c\u8bf7\u671f\u5f85\uff01\uff09"))),(0,r.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u534f\u8bae\u6269\u5c55\u5b57\u6bb5 x-dingtalk-protocol \u6765\u6307\u5b9a\u901a\u4fe1\u534f\u8bae\uff0c\u542f\u7528 Stream \u6a21\u5f0f\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"x-dingtalk-protocol: stream\n")),(0,r.kt)("p",null,"\u6211\u4eec\u4ee5\u5b98\u65b9\u7684\u5929\u6c14\u67e5\u8be2\u4e3a\u4f8b\uff0c \u652f\u6301 Stream \u6a21\u5f0f\u7684 yaml\u914d\u7f6e\u6587\u4ef6\u4e0b\u6240\u793a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.1\ninfo:\n  title: \u5929\u6c14\u67e5\u8be2\n  description: \u6309\u5730\u533a\u548c\u65e5\u671f\u6765\u67e5\u770b\u5929\u6c14\u4fe1\u606f\uff0c\u4e86\u89e3\u6c14\u6e29\u3001\u6e7f\u5ea6\u3001\u98ce\u5411\u7b49\u4fe1\u606f\u3002\u975e\u771f\u5b9e\u5929\u6c14\u6570\u636e\uff0c\u4ec5\u7528\u4e8e\u6f14\u793a\uff0c\u8bf7\u52ff\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528\u3002\n  version: v1.0.0\nx-dingtalk-protocol: stream\npaths:\n  /v1/actions/example/weather/get:\n    get:\n      description: \u67e5\u8be2\u7279\u5b9a\u5730\u533a\u7684\u5929\u6c14\u4fe1\u606f\n      summary: \u67e5\u770b\u5929\u6c14\n      operationId: GetCurrentWeather\n      parameters:\n        - name: location\n          in: query\n          description: \u5730\u533a\n          required: true\n          schema:\n            type: string\n        - name: date\n          in: query\n          description: \u65e5\u671f\n          required: true\n          schema:\n            type: string\n            x-dingtalk-entity:\n              category: time\n              format: strftime:yyyy-MM-dd\n      responses:\n        '200':\n          description: OK\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/GetWeatherResponse'\ncomponents:\n  schemas:\n    GetWeatherResponse:\n      type: object\n      properties:\n        location:\n          type: string\n          description: \u67e5\u8be2\u5929\u6c14\u7ed3\u679c\u5bf9\u5e94\u7684\u57ce\u5e02\u548c\u5730\u533a\n        date:\n          type: string\n          description: \u67e5\u8be2\u5929\u6c14\u7ed3\u679c\u5bf9\u5e94\u7684\u65e5\u671f\n        text:\n          type: string\n          description: \u5929\u6c14\u73b0\u8c61\uff0c\u6674\u5929\u3001\u591a\u4e91\u7b49\n        temperature:\n          type: number\n          description: \u6c14\u6e29\uff0c\u5355\u4f4d\uff1a\u6444\u6c0f\u5ea6\n        humidity:\n          type: number\n          description: \u6e7f\u5ea6\n        wind_direction:\n          type: string\n          description: \u98ce\u5411\n")),(0,r.kt)("p",null,"\u5176\u4ed6\u9ad8\u7ea7\u81ea\u5b9a\u4e49\u80fd\u529b\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\u6587\u6863",(0,r.kt)("a",{parentName:"p",href:"https://open.dingtalk.com/document/ai-dev/actions-advanced-settings"},"\u9ad8\u7ea7\u8bbe\u7f6e")),(0,r.kt)("h3",{id:"\u6b65\u9aa4\u4e8c\u83b7\u53d6\u5e94\u7528\u51ed\u8bc1"},"\u6b65\u9aa4\u4e8c\uff1a\u83b7\u53d6\u5e94\u7528\u51ed\u8bc1"),(0,r.kt)("p",null,"\u4f7f\u7528 Stream \u534f\u8bae\u5f00\u53d1\u9ad8\u7ea7\u81ea\u5b9a\u4e49\u80fd\u529b\u9700\u8981\u83b7\u53d6 AI \u52a9\u7406\u7684\u5e94\u7528\u51ed\u8bc1\u4fe1\u606f\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u83b7\u53d6\u5f53\u524d AI \u52a9\u7406\u7684\u5e94\u7528\u51ed\u8bc1\u4fe1\u606f"),(0,r.kt)("h4",{id:"step1-\u6253\u5f00-ai-\u52a9\u7406\u8be6\u60c5"},"Step1: \u6253\u5f00 AI \u52a9\u7406\u8be6\u60c5"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(90098).Z,width:"716",height:"722"})),(0,r.kt)("h4",{id:"step2-\u70b9\u51fb\u7f16\u8f91ai\u52a9\u7406"},"Step2: \u70b9\u51fb\u7f16\u8f91AI\u52a9\u7406"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(24314).Z,width:"716",height:"1450"})),(0,r.kt)("h4",{id:"step3-\u70b9\u51fb\u5e94\u7528\u4fe1\u606f"},"Step3: \u70b9\u51fb\u5e94\u7528\u4fe1\u606f"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(86290).Z,width:"2306",height:"1790"})),(0,r.kt)("h4",{id:"step4-\u83b7\u53d6\u5e94\u7528\u8eab\u4efd\u51ed\u8bc1"},"Step4: \u83b7\u53d6\u5e94\u7528\u8eab\u4efd\u51ed\u8bc1"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(92522).Z,width:"3450",height:"1524"})),(0,r.kt)("p",null,"\u83b7\u53d6\u5230\u5e94\u7528\u51ed\u8bc1\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5f00\u59cb\u670d\u52a1\u7aef\u7684\u4ee3\u7801\u5f00\u53d1\u3002"))}m.isMDXComponent=!0},24314:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/edit_ai_assistant-2b6d58c856f5b9c743a4ff115d4b6c23.png"},90098:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/get_ai_assistant_detail-c1e14e1ce9e12a4809a7b75004ced130.png"},86290:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/get_ai_detail-b4d846abff42f6e8ac30bed35f6a6a51.png"},92522:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/get_app_info-55ae0adb134d43e54f3e9161a86fe385.png"}}]);