"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[2604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(87462),a=n(67294),i=n(86010),o=n(12466),s=n(16550),p=n(91980),l=n(67392),c=n(50012);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,p._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=d(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[p,l]=y({queryString:n,groupId:r}),[u,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),g=(()=>{const e=p??u;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),h(e)}),[l,h,i]),tabValues:i}}var g=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:p,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=l[n].value;r!==s&&(u(t),p(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=h(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function x(e){const t=(0,g.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},18225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),i=n(74866),o=n(85162);const s={sidebar_position:3},p="3. \u5f00\u901a\u76f4\u901a\u6a21\u5f0f",l={unversionedId:"explore/tutorials/assistant_ability/passthrough_mode/python/step-3-open_passthrough",id:"explore/tutorials/assistant_ability/passthrough_mode/python/step-3-open_passthrough",title:"3. \u5f00\u901a\u76f4\u901a\u6a21\u5f0f",description:"\u5728\u672c\u7ae0\u8282\uff0c\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u5728\u9489\u9489\u9b54\u6cd5\u68d2\xb7AI\u751f\u4ea7\u529b\u5e73\u53f0\u521b\u5efa\u4e00\u4e2aAI\u52a9\u7406\uff0c\u5e76\u5f00\u901a\u76f4\u901a\u6a21\u5f0f\u3002\u5305\u62ec\u4ee5\u4e0b\u5185\u5bb9\uff1a",source:"@site/docs/explore/tutorials/assistant_ability/passthrough_mode/python/step-3-open_passthrough.md",sourceDirName:"explore/tutorials/assistant_ability/passthrough_mode/python",slug:"/explore/tutorials/assistant_ability/passthrough_mode/python/step-3-open_passthrough",permalink:"/developerpedia/docs/explore/tutorials/assistant_ability/passthrough_mode/python/step-3-open_passthrough",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/explore/tutorials/assistant_ability/passthrough_mode/python/step-3-open_passthrough.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. \u521b\u5efa AI \u52a9\u7406",permalink:"/developerpedia/docs/explore/tutorials/assistant_ability/passthrough_mode/python/step-2-create"},next:{title:"4. \u5f00\u53d1\u76f4\u901a\u6a21\u5f0f\u670d\u52a1",permalink:"/developerpedia/docs/explore/tutorials/assistant_ability/passthrough_mode/python/step-4-develop"}},c={},u=[{value:"\u6b65\u9aa4\u4e00: \u521b\u5efa\u81ea\u5b9a\u4e49\u80fd\u529b",id:"\u6b65\u9aa4\u4e00-\u521b\u5efa\u81ea\u5b9a\u4e49\u80fd\u529b",level:3},{value:"\u6b65\u9aa4\u4e8c: \u7f16\u5199\u63a5\u53e3\u7684 Yaml \u63cf\u8ff0\u6587\u4ef6\uff0c\u6211\u4eec\u8fd9\u91cc\u4ee5\u5929\u6c14\u67e5\u8be2\u4e3a\u4f8b",id:"\u6b65\u9aa4\u4e8c-\u7f16\u5199\u63a5\u53e3\u7684-yaml-\u63cf\u8ff0\u6587\u4ef6\u6211\u4eec\u8fd9\u91cc\u4ee5\u5929\u6c14\u67e5\u8be2\u4e3a\u4f8b",level:3},{value:"\u6b65\u9aa4\u4e09: \u786e\u8ba4 AI \u52a9\u7406\u4ec5\u5305\u542b\u4e00\u4e2a\u81ea\u5b9a\u4e49\u63a5\u53e3",id:"\u6b65\u9aa4\u4e09-\u786e\u8ba4-ai-\u52a9\u7406\u4ec5\u5305\u542b\u4e00\u4e2a\u81ea\u5b9a\u4e49\u63a5\u53e3",level:3},{value:"\u6b65\u9aa4\u56db: \u83b7\u53d6 AI \u52a9\u7406\uff08\u5e94\u7528\uff09\u51ed\u8bc1",id:"\u6b65\u9aa4\u56db-\u83b7\u53d6-ai-\u52a9\u7406\u5e94\u7528\u51ed\u8bc1",level:3},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:3}],d={toc:u},m="wrapper";function y(e){let{components:t,...s}=e;return(0,a.kt)(m,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"3-\u5f00\u901a\u76f4\u901a\u6a21\u5f0f"},"3. \u5f00\u901a\u76f4\u901a\u6a21\u5f0f"),(0,a.kt)("p",null,"\u5728\u672c\u7ae0\u8282\uff0c\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u5728\u9489\u9489\u9b54\u6cd5\u68d2\xb7AI\u751f\u4ea7\u529b\u5e73\u53f0\u521b\u5efa\u4e00\u4e2aAI\u52a9\u7406\uff0c\u5e76\u5f00\u901a\u76f4\u901a\u6a21\u5f0f\u3002\u5305\u62ec\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efaAI\u52a9\u7406\u7684\u81ea\u5b9a\u4e49\u80fd\u529b"),(0,a.kt)("li",{parentName:"ol"},"\u7f16\u5199\u63a5\u53e3\u7684 Yaml \u63cf\u8ff0\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u786e\u8ba4 AI \u52a9\u7406\u4ec5\u5305\u542b\u4e00\u4e2a\u81ea\u5b9a\u4e49\u63a5\u53e3"),(0,a.kt)("li",{parentName:"ol"},"\u83b7\u53d6 AI \u52a9\u7406\uff08\u5e94\u7528\uff09\u51ed\u8bc1\uff0c\u5373 Client ID \u548c Client Secret")),(0,a.kt)("h3",{id:"\u6b65\u9aa4\u4e00-\u521b\u5efa\u81ea\u5b9a\u4e49\u80fd\u529b"},"\u6b65\u9aa4\u4e00: \u521b\u5efa\u81ea\u5b9a\u4e49\u80fd\u529b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create1.png",src:n(43816).Z,width:"1062",height:"1234"}),"\n",(0,a.kt)("img",{alt:"create2.png",src:n(4447).Z,width:"2218",height:"474"})),(0,a.kt)("h3",{id:"\u6b65\u9aa4\u4e8c-\u7f16\u5199\u63a5\u53e3\u7684-yaml-\u63cf\u8ff0\u6587\u4ef6\u6211\u4eec\u8fd9\u91cc\u4ee5\u5929\u6c14\u67e5\u8be2\u4e3a\u4f8b"},"\u6b65\u9aa4\u4e8c: \u7f16\u5199\u63a5\u53e3\u7684 Yaml \u63cf\u8ff0\u6587\u4ef6\uff0c\u6211\u4eec\u8fd9\u91cc\u4ee5\u5929\u6c14\u67e5\u8be2\u4e3a\u4f8b"),(0,a.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"caution"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u76f4\u901a\u6a21\u5f0f\uff0c\u6240\u6709\u7684\u53c2\u6570\u90fd\u5fc5\u987b\u4e14\u53ea\u80fd\u9644\u5e26 ",(0,a.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/ai-dev/actions-advanced-settings#b6788d573apjp"},"x-dingtalk-context")," \u5c5e\u6027\u6765\u4ece\u4e0a\u4e0b\u6587\u4e2d\u83b7\u53d6\uff0c\u4e0d\u80fd\u542b\u6709\u9700\u8981\u5927\u6a21\u578b\u63d0\u53d6\u7684\u53c2\u6570\u3002"),(0,a.kt)("li",{parentName:"ol"},"AI \u52a9\u7406\u4e0b\u9762\u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a\u63cf\u8ff0\u6587\u4ef6\u4e14\u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a\u63a5\u53e3\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5173\u95ed\u6216\u5220\u9664\u667a\u80fd\u5bf9\u8bdd\u6280\u80fd\uff08\u4ee5\u53ca\u52a9\u7406\u4e0b\u5176\u4ed6\u5f00\u542f\u7684\u6280\u80fd\uff09"))),(0,a.kt)("p",null,"\u4ee5\u4e0b\u6709\u591a\u79cd\u8bf7\u6c42\u914d\u7f6e\u65b9\u5f0f\u4f9b\u53c2\u8003\uff0c\u53ef\u4ee5\u9009\u62e9\u4e00\u4e2a\u9002\u5408\u81ea\u5df1\u7684\u65b9\u5f0f\u6765\u53c2\u8003\u4f7f\u7528\u3002"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"GET_STREAM",label:"GET\u8bf7\u6c42\u683c\u5f0f(Stream\u534f\u8bae)",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.1\ninfo:\n  title: \u5929\u6c14\u67e5\u8be2\n  description: \u6309\u5730\u533a\u548c\u65e5\u671f\u6765\u67e5\u770b\u5929\u6c14\u4fe1\u606f\uff0c\u4e86\u89e3\u6c14\u6e29\u3001\u6e7f\u5ea6\u3001\u98ce\u5411\u7b49\u4fe1\u606f\u3002\u975e\u771f\u5b9e\u5929\u6c14\u6570\u636e\uff0c\u4ec5\u7528\u4e8e\u6f14\u793a\uff0c\u8bf7\u52ff\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528\u3002\n  version: v1.0.0\nx-dingtalk-protocol: stream\npaths:\n  /v1/actions/example/weather/get:\n    get:\n      description: \u67e5\u8be2\u7279\u5b9a\u5730\u533a\u7684\u5929\u6c14\u4fe1\u606f\n      summary: \u67e5\u770b\u5929\u6c14\n      operationId: GetCurrentWeather\n      parameters:\n        - name: input\n          in: query\n          description: \u8f93\u5165\u4fe1\u606f\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentInput\n              format: raw\n        - name: sender\n          in: query\n          description: \u8bf7\u6c42\u4eba\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentUser\n              format: userId\n        - name: inputAttribute\n          in: query\n          description: \u8f93\u5165\u4fe1\u606f\u5c5e\u6027\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentInput\n              format: attribute\n        - name: corpId\n          in: query\n          description: \u7ec4\u7ec7\u4fe1\u606f\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentOrg\n              format: corpId\n      responses:\n        '200':\n          description: OK\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/GetWeatherResponse'\ncomponents:\n  schemas:\n    GetWeatherResponse:\n      type: object\n      properties:\n        location:\n          type: string\n          description: \u67e5\u8be2\u5929\u6c14\u7ed3\u679c\u5bf9\u5e94\u7684\u57ce\u5e02\u548c\u5730\u533a\n        date:\n          type: string\n          description: \u67e5\u8be2\u5929\u6c14\u7ed3\u679c\u5bf9\u5e94\u7684\u65e5\u671f\n        text:\n          type: string\n          description: \u5929\u6c14\u73b0\u8c61\uff0c\u6674\u5929\u3001\u591a\u4e91\u7b49\n        temperature:\n          type: number\n          description: \u6c14\u6e29\uff0c\u5355\u4f4d\uff1a\u6444\u6c0f\u5ea6\n        humidity:\n          type: number\n          description: \u6e7f\u5ea6\n        wind_direction:\n          type: string\n          description: \u98ce\u5411\n"))),(0,a.kt)(o.Z,{value:"POST_STREAM",label:"POST\u8bf7\u6c42\u683c\u5f0f(Stream\u534f\u8bae)",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.1\ninfo:\n  title: \u5929\u6c14\u67e5\u8be2\n  description: \u6309\u5730\u533a\u548c\u65e5\u671f\u6765\u67e5\u770b\u5929\u6c14\u4fe1\u606f\uff0c\u4e86\u89e3\u6c14\u6e29\u3001\u6e7f\u5ea6\u3001\u98ce\u5411\u7b49\u4fe1\u606f\u3002\u975e\u771f\u5b9e\u5929\u6c14\u6570\u636e\uff0c\u4ec5\u7528\u4e8e\u6f14\u793a\uff0c\u8bf7\u52ff\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528\u3002\n  version: v1.0.0\n## \u63a8\u8350\u4f7f\u7528\u9489\u9489 Stream \u6a21\u5f0f\uff0c\u65e0\u9700\u63d0\u4f9b\u516c\u7f51\u57df\u540d(https://open.dingtalk.com/document/ai-dev/actions-advanced-settings#dc65a46ae9nis)\nx-dingtalk-protocol: stream\npaths:\n  /v1/actions/example/weather/get:\n    post:\n      description: \u67e5\u8be2\u7279\u5b9a\u5730\u533a\u7684\u5929\u6c14\u4fe1\u606f\n      summary: \u67e5\u770b\u5929\u6c14\n      operationId: GetCurrentWeather\n      requestBody:\n        content:\n          application/json:\n            schema:\n              type: object\n              properties:\n                input:\n                  type: string\n                  description: \u8f93\u5165\u4fe1\u606f\n                  x-dingtalk-context:\n                    property: currentInput\n                    format: raw\n                attribute:\n                  type: string\n                  description: \u8f93\u5165\u5c5e\u6027\n                  x-dingtalk-context :\n                    property: currentInput\n                    format: attribute\n                sender:\n                  type: string\n                  description: \u53d1\u9001\u4ebaUserId\n                  x-dingtalk-context:\n                    property: currentUser\n                    format: userId\n                corpId:\n                  type: string\n                  description: \u7ec4\u7ec7\u4fe1\u606f\n                  x-dingtalk-context:\n                    property: currentOrg\n                    format: corpId\n      parameters:\n        - name: input\n          in: query\n          description: \u8f93\u5165\u4fe1\u606f\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentInput\n              format: raw\n        - name: sender\n          in: query\n          description: \u8bf7\u6c42\u4eba\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentUser\n              format: userId\n      responses:\n        '200':\n          description: OK\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/GetWeatherResponse'\ncomponents:\n  schemas:\n    GetWeatherResponse:\n      type: object\n      properties:\n        location:\n          type: string\n          description: \u67e5\u8be2\u5929\u6c14\u7ed3\u679c\u5bf9\u5e94\u7684\u57ce\u5e02\u548c\u5730\u533a\n        date:\n          type: string\n          description: \u67e5\u8be2\u5929\u6c14\u7ed3\u679c\u5bf9\u5e94\u7684\u65e5\u671f\n        text:\n          type: string\n          description: \u5929\u6c14\u73b0\u8c61\uff0c\u6674\u5929\u3001\u591a\u4e91\u7b49\n        temperature:\n          type: number\n          description: \u6c14\u6e29\uff0c\u5355\u4f4d\uff1a\u6444\u6c0f\u5ea6\n        humidity:\n          type: number\n          description: \u6e7f\u5ea6\n        wind_direction:\n          type: string\n          description: \u98ce\u5411\n"))),(0,a.kt)(o.Z,{value:"GET_HTTP",label:"GET\u8bf7\u6c42\u683c\u5f0f(HTTP\u534f\u8bae)",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.1\ninfo:\n  title: \u5929\u6c14\u67e5\u8be2\n  description: \u6309\u5730\u533a\u548c\u65e5\u671f\u6765\u67e5\u770b\u5929\u6c14\u4fe1\u606f\uff0c\u4e86\u89e3\u6c14\u6e29\u3001\u6e7f\u5ea6\u3001\u98ce\u5411\u7b49\u4fe1\u606f\u3002\u975e\u771f\u5b9e\u5929\u6c14\u6570\u636e\uff0c\u4ec5\u7528\u4e8e\u6f14\u793a\uff0c\u8bf7\u52ff\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528\u3002\n  version: v1.0.0\nservers:\n  - url: https://action-example.dingtalk.com\npaths:\n  /v1/actions/example/weather/get:\n    get:\n      description: \u67e5\u8be2\u7279\u5b9a\u5730\u533a\u7684\u5929\u6c14\u4fe1\u606f\n      summary: \u67e5\u770b\u5929\u6c14\n      operationId: GetCurrentWeather\n      parameters:\n        - name: input\n          in: query\n          description: \u8f93\u5165\u4fe1\u606f\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentInput\n              format: raw\n        - name: sender\n          in: query\n          description: \u8bf7\u6c42\u4eba\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentUser\n              format: userId\n        - name: inputAttribute\n          in: query\n          description: \u8f93\u5165\u4fe1\u606f\u5c5e\u6027\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentInput\n              format: attribute\n        - name: corpId\n          in: query\n          description: \u7ec4\u7ec7\u4fe1\u606f\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentOrg\n              format: corpId\n      responses:\n        '200':\n          description: OK\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/GetWeatherResponse'\ncomponents:\n  schemas:\n    GetWeatherResponse:\n      type: object\n      properties:\n        location:\n          type: string\n          description: \u67e5\u8be2\u5929\u6c14\u7ed3\u679c\u5bf9\u5e94\u7684\u57ce\u5e02\u548c\u5730\u533a\n        date:\n          type: string\n          description: \u67e5\u8be2\u5929\u6c14\u7ed3\u679c\u5bf9\u5e94\u7684\u65e5\u671f\n        text:\n          type: string\n          description: \u5929\u6c14\u73b0\u8c61\uff0c\u6674\u5929\u3001\u591a\u4e91\u7b49\n        temperature:\n          type: number\n          description: \u6c14\u6e29\uff0c\u5355\u4f4d\uff1a\u6444\u6c0f\u5ea6\n        humidity:\n          type: number\n          description: \u6e7f\u5ea6\n        wind_direction:\n          type: string\n          description: \u98ce\u5411\n"))),(0,a.kt)(o.Z,{value:"POST_HTTP",label:"POST\u8bf7\u6c42\u683c\u5f0f(HTTP\u534f\u8bae)",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.1\ninfo:\n  title: \u5929\u6c14\u67e5\u8be2\n  description: \u6309\u5730\u533a\u548c\u65e5\u671f\u6765\u67e5\u770b\u5929\u6c14\u4fe1\u606f\uff0c\u4e86\u89e3\u6c14\u6e29\u3001\u6e7f\u5ea6\u3001\u98ce\u5411\u7b49\u4fe1\u606f\u3002\u975e\u771f\u5b9e\u5929\u6c14\u6570\u636e\uff0c\u4ec5\u7528\u4e8e\u6f14\u793a\uff0c\u8bf7\u52ff\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528\u3002\n  version: v1.0.0\nservers:\n  - url: https://action-example.dingtalk.com\npaths:\n  /v1/actions/example/weather/get:\n    post:\n      description: \u67e5\u8be2\u7279\u5b9a\u5730\u533a\u7684\u5929\u6c14\u4fe1\u606f\n      summary: \u67e5\u770b\u5929\u6c14\n      operationId: GetCurrentWeather\n      requestBody:\n        content:\n          application/json:\n            schema:\n              type: object\n              properties:\n                input:\n                  type: string\n                  description: \u8f93\u5165\u4fe1\u606f\n                  x-dingtalk-context:\n                    property: currentInput\n                    format: raw\n                attribute:\n                  type: string\n                  description: \u8f93\u5165\u5c5e\u6027\n                  x-dingtalk-context :\n                    property: currentInput\n                    format: attribute\n                sender:\n                  type: string\n                  description: \u53d1\u9001\u4ebaUserId\n                  x-dingtalk-context:\n                    property: currentUser\n                    format: userId\n                corpId:\n                  type: string\n                  description: \u7ec4\u7ec7\u4fe1\u606f\n                  x-dingtalk-context:\n                    property: currentOrg\n                    format: corpId\n      parameters:\n        - name: input\n          in: query\n          description: \u8f93\u5165\u4fe1\u606f\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentInput\n              format: raw\n        - name: sender\n          in: query\n          description: \u8bf7\u6c42\u4eba\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentUser\n              format: userId\n      responses:\n        '200':\n          description: OK\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/GetWeatherResponse'\ncomponents:\n  schemas:\n    GetWeatherResponse:\n      type: object\n      properties:\n        location:\n          type: string\n          description: \u67e5\u8be2\u5929\u6c14\u7ed3\u679c\u5bf9\u5e94\u7684\u57ce\u5e02\u548c\u5730\u533a\n        date:\n          type: string\n          description: \u67e5\u8be2\u5929\u6c14\u7ed3\u679c\u5bf9\u5e94\u7684\u65e5\u671f\n        text:\n          type: string\n          description: \u5929\u6c14\u73b0\u8c61\uff0c\u6674\u5929\u3001\u591a\u4e91\u7b49\n        temperature:\n          type: number\n          description: \u6c14\u6e29\uff0c\u5355\u4f4d\uff1a\u6444\u6c0f\u5ea6\n        humidity:\n          type: number\n          description: \u6e7f\u5ea6\n        wind_direction:\n          type: string\n          description: \u98ce\u5411\n")))),(0,a.kt)("h3",{id:"\u6b65\u9aa4\u4e09-\u786e\u8ba4-ai-\u52a9\u7406\u4ec5\u5305\u542b\u4e00\u4e2a\u81ea\u5b9a\u4e49\u63a5\u53e3"},"\u6b65\u9aa4\u4e09: \u786e\u8ba4 AI \u52a9\u7406\u4ec5\u5305\u542b\u4e00\u4e2a\u81ea\u5b9a\u4e49\u63a5\u53e3"),(0,a.kt)("p",null,"\u5fc5\u987b\u786e\u8ba4\u5f53\u524d AI \u52a9\u7406\u6ca1\u6709\u5173\u8054\u5176\u4ed6\u4efb\u4f55\u6280\u80fd\uff0c\u624d\u53ef\u4ee5\u6210\u529f\u5f00\u901a\u76f4\u901a\u6a21\u5f0f\uff0c\u5426\u5219\u9489\u9489 AI \u52a9\u7406\u65e0\u6cd5\u786e\u5b9a\u8bf7\u6c42\u8f6c\u53d1\u5230\u54ea\u4e00\u4e2a\u63a5\u53e3\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c yaml \u4e2d\u6709\u591a\u4e2a\u63a5\u53e3\uff0c\u8bf7\u4fee\u6539\u4e3a\u4e00\u4e2a"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c AI \u52a9\u7406\u4e2d\u5f00\u542f\u4e86\u591a\u4e2a\u6280\u80fd\uff0c\u8bf7\u5173\u95ed\u5176\u4ed6\u6280\u80fd\uff0c\u4ec5\u4fdd\u7559\u7740\u4e00\u4e2a\u7528\u4e8e\u76f4\u901a\u7684\u81ea\u5b9a\u4e49\u6280\u80fd")),(0,a.kt)("h3",{id:"\u6b65\u9aa4\u56db-\u83b7\u53d6-ai-\u52a9\u7406\u5e94\u7528\u51ed\u8bc1"},"\u6b65\u9aa4\u56db: \u83b7\u53d6 AI \u52a9\u7406\uff08\u5e94\u7528\uff09\u51ed\u8bc1"),(0,a.kt)("p",null,"\u6b64\u5904\u9700\u8981\u83b7\u53d6 AI \u52a9\u7406\uff08\u5e94\u7528\uff09\u51ed\u8bc1\uff0c\u5373 Client ID \u548c Client Secret\uff0c\u7528\u4e8e\u540e\u7eed\u7684\u4ee3\u7801\u5f00\u53d1\u3002"),(0,a.kt)("p",null,"\u5728\u7f16\u8f91\u81ea\u5b9a\u4e49\u80fd\u529b\u7684\u9875\u9762\u5e95\u90e8\uff0c\u70b9\u51fb\u300c\u83b7\u53d6\u6211\u7684\u5e94\u7528\u4fe1\u606f\u300d\u94fe\u63a5\uff0c\u53ef\u4ee5\u8fdb\u5165\u5f00\u53d1\u8005\u540e\u53f0\u7684 AI \u52a9\u7406\uff08\u5e94\u7528\uff09\u8be6\u60c5\u9875\uff0c\u4ece\u4e2d\u53ef\u4ee5\u83b7\u53d6 Client ID \u548c Client Secret\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create1.png",src:n(57586).Z,width:"2170",height:"1722"})),(0,a.kt)("h3",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://open.dingtalk.com/document/ai-dev/actions-advanced-settings#b6788d573apjp"},"\u83b7\u53d6\u8fd0\u884c\u4e0a\u4e0b\u6587")))}y.isMDXComponent=!0},43816:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create1-9bf32c8d35dc82fb5e80269c6851dceb.png"},4447:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create2-abfd0d25738e216118343ef785368160.png"},57586:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/opendev-e0fcaf3a97fe65150cc24fc87a6dba7e.png"}}]);