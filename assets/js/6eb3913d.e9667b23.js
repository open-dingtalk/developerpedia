"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[5461],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(t),m=a,y=l["".concat(p,".").concat(m)]||l[m]||d[m]||i;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(67294),a=t(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>x});var r=t(87462),a=t(67294),i=t(86010),o=t(12466),s=t(16550),p=t(91980),c=t(67392),u=t(50012);function l(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??l(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function y(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,p._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=d(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[p,c]=y({queryString:t,groupId:r}),[l,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),h=(()=>{const e=p??l;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var h=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:s,selectValue:p,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=u.indexOf(n),r=c[t].value;r!==s&&(l(n),p(r))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function k(e){const n=g(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},a.createElement(b,(0,r.Z)({},e,n)),a.createElement(v,(0,r.Z)({},e,n)))}function x(e){const n=(0,h.Z)();return a.createElement(k,(0,r.Z)({key:String(n)},e))}},63865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(87462),a=(t(67294),t(3905)),i=t(74866),o=t(85162);const s={sidebar_position:3},p="3. \u5f00\u901a\u76f4\u901a\u6a21\u5f0f",c={unversionedId:"explore/tutorials/assistant_ability/passthrough_mode/java/open_passthrough",id:"explore/tutorials/assistant_ability/passthrough_mode/java/open_passthrough",title:"3. \u5f00\u901a\u76f4\u901a\u6a21\u5f0f",description:"\u6b65\u9aa4\u4e00: \u521b\u5efa\u81ea\u5b9a\u4e49\u80fd\u529b",source:"@site/docs/explore/tutorials/assistant_ability/passthrough_mode/java/open_passthrough.md",sourceDirName:"explore/tutorials/assistant_ability/passthrough_mode/java",slug:"/explore/tutorials/assistant_ability/passthrough_mode/java/open_passthrough",permalink:"/developerpedia/docs/explore/tutorials/assistant_ability/passthrough_mode/java/open_passthrough",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/explore/tutorials/assistant_ability/passthrough_mode/java/open_passthrough.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. \u521b\u5efa AI \u52a9\u7406",permalink:"/developerpedia/docs/explore/tutorials/assistant_ability/passthrough_mode/java/create_ai_assistant"},next:{title:"4. \u5f00\u53d1\u76f4\u901a\u6a21\u5f0f\u670d\u52a1",permalink:"/developerpedia/docs/explore/tutorials/assistant_ability/passthrough_mode/java/\u5f00\u53d1\u76f4\u901a\u6a21\u5f0f"}},u={},l=[{value:"\u6b65\u9aa4\u4e00: \u521b\u5efa\u81ea\u5b9a\u4e49\u80fd\u529b",id:"\u6b65\u9aa4\u4e00-\u521b\u5efa\u81ea\u5b9a\u4e49\u80fd\u529b",level:3},{value:"\u6b65\u9aa4\u4e8c: \u7f16\u5199\u63a5\u53e3\u7684 Yaml \u63cf\u8ff0\u6587\u4ef6\uff0c\u6211\u4eec\u8fd9\u91cc\u4ee5\u5929\u6c14\u67e5\u8be2\u4e3a\u4f8b",id:"\u6b65\u9aa4\u4e8c-\u7f16\u5199\u63a5\u53e3\u7684-yaml-\u63cf\u8ff0\u6587\u4ef6\u6211\u4eec\u8fd9\u91cc\u4ee5\u5929\u6c14\u67e5\u8be2\u4e3a\u4f8b",level:3},{value:"\u6b65\u9aa4\u4e09: \u786e\u8ba4\u6280\u80fd",id:"\u6b65\u9aa4\u4e09-\u786e\u8ba4\u6280\u80fd",level:3},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:3}],d={toc:l},m="wrapper";function y(e){let{components:n,...s}=e;return(0,a.kt)(m,(0,r.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"3-\u5f00\u901a\u76f4\u901a\u6a21\u5f0f"},"3. \u5f00\u901a\u76f4\u901a\u6a21\u5f0f"),(0,a.kt)("h3",{id:"\u6b65\u9aa4\u4e00-\u521b\u5efa\u81ea\u5b9a\u4e49\u80fd\u529b"},"\u6b65\u9aa4\u4e00: \u521b\u5efa\u81ea\u5b9a\u4e49\u80fd\u529b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create1.png",src:t(43816).Z,width:"1062",height:"1234"}),"\n",(0,a.kt)("img",{alt:"create2.png",src:t(4447).Z,width:"2218",height:"474"})),(0,a.kt)("h3",{id:"\u6b65\u9aa4\u4e8c-\u7f16\u5199\u63a5\u53e3\u7684-yaml-\u63cf\u8ff0\u6587\u4ef6\u6211\u4eec\u8fd9\u91cc\u4ee5\u5929\u6c14\u67e5\u8be2\u4e3a\u4f8b"},"\u6b65\u9aa4\u4e8c: \u7f16\u5199\u63a5\u53e3\u7684 Yaml \u63cf\u8ff0\u6587\u4ef6\uff0c\u6211\u4eec\u8fd9\u91cc\u4ee5\u5929\u6c14\u67e5\u8be2\u4e3a\u4f8b"),(0,a.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"caution"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u76f4\u901a\u6a21\u5f0f\uff0c\u6240\u6709\u7684\u53c2\u6570\u90fd\u5fc5\u987b\u4e14\u53ea\u80fd\u9644\u5e26 ",(0,a.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/ai-dev/actions-advanced-settings#b6788d573apjp"},"x-dingtalk-context")," \u5c5e\u6027\u6765\u4ece\u4e0a\u4e0b\u6587\u4e2d\u83b7\u53d6\uff0c\u4e0d\u80fd\u542b\u6709\u9700\u8981\u5927\u6a21\u578b\u63d0\u53d6\u7684\u53c2\u6570\u3002"),(0,a.kt)("li",{parentName:"ol"},"AI \u52a9\u7406\u4e0b\u9762\u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a\u63cf\u8ff0\u6587\u4ef6\u4e14\u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a\u63a5\u53e3\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5173\u95ed\u6216\u5220\u9664\u667a\u80fd\u5bf9\u8bdd\u6280\u80fd\u3002"))),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"GET_STREAM",label:"GET\u8bf7\u6c42\u683c\u5f0f(Stream\u534f\u8bae)",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.1\ninfo:\n  title: \u5929\u6c14\u67e5\u8be2\n  description: \u6309\u5730\u533a\u548c\u65e5\u671f\u6765\u67e5\u770b\u5929\u6c14\u4fe1\u606f\uff0c\u4e86\u89e3\u6c14\u6e29\u3001\u6e7f\u5ea6\u3001\u98ce\u5411\u7b49\u4fe1\u606f\u3002\u975e\u771f\u5b9e\u5929\u6c14\u6570\u636e\uff0c\u4ec5\u7528\u4e8e\u6f14\u793a\uff0c\u8bf7\u52ff\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528\u3002\n  version: v1.0.0\nx-dingtalk-protocol: stream\npaths:\n  /v1/actions/example/weather/get:\n    get:\n      description: \u67e5\u8be2\u7279\u5b9a\u5730\u533a\u7684\u5929\u6c14\u4fe1\u606f\n      summary: \u67e5\u770b\u5929\u6c14\n      operationId: GetCurrentWeather\n      parameters:\n        - name: input\n          in: query\n          description: \u8f93\u5165\u4fe1\u606f\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentInput\n              format: raw\n        - name: sender\n          in: query\n          description: \u8bf7\u6c42\u4eba\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentUser\n              format: userId\n        - name: inputAttribute\n          in: query\n          description: \u8f93\u5165\u4fe1\u606f\u5c5e\u6027\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentInput\n              format: attribute\n        - name: corpId\n          in: query\n          description: \u7ec4\u7ec7\u4fe1\u606f\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentOrg\n              format: corpId\n      responses:\n        '200':\n          description: OK\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/GetWeatherResponse'\ncomponents:\n  schemas:\n    GetWeatherResponse:\n      type: object\n      properties:\n        location:\n          type: string\n          description: \u67e5\u8be2\u5929\u6c14\u7ed3\u679c\u5bf9\u5e94\u7684\u57ce\u5e02\u548c\u5730\u533a\n        date:\n          type: string\n          description: \u67e5\u8be2\u5929\u6c14\u7ed3\u679c\u5bf9\u5e94\u7684\u65e5\u671f\n        text:\n          type: string\n          description: \u5929\u6c14\u73b0\u8c61\uff0c\u6674\u5929\u3001\u591a\u4e91\u7b49\n        temperature:\n          type: number\n          description: \u6c14\u6e29\uff0c\u5355\u4f4d\uff1a\u6444\u6c0f\u5ea6\n        humidity:\n          type: number\n          description: \u6e7f\u5ea6\n        wind_direction:\n          type: string\n          description: \u98ce\u5411\n"))),(0,a.kt)(o.Z,{value:"POST_STREAM",label:"POST\u8bf7\u6c42\u683c\u5f0f(Stream\u534f\u8bae)",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.1\ninfo:\n  title: \u5929\u6c14\u67e5\u8be2\n  description: \u6309\u5730\u533a\u548c\u65e5\u671f\u6765\u67e5\u770b\u5929\u6c14\u4fe1\u606f\uff0c\u4e86\u89e3\u6c14\u6e29\u3001\u6e7f\u5ea6\u3001\u98ce\u5411\u7b49\u4fe1\u606f\u3002\u975e\u771f\u5b9e\u5929\u6c14\u6570\u636e\uff0c\u4ec5\u7528\u4e8e\u6f14\u793a\uff0c\u8bf7\u52ff\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528\u3002\n  version: v1.0.0\n## \u63a8\u8350\u4f7f\u7528\u9489\u9489 Stream \u6a21\u5f0f\uff0c\u65e0\u9700\u63d0\u4f9b\u516c\u7f51\u57df\u540d(https://open.dingtalk.com/document/ai-dev/actions-advanced-settings#dc65a46ae9nis)\nx-dingtalk-protocol: stream\npaths:\n  /v1/actions/example/weather/get:\n    post:\n      description: \u67e5\u8be2\u7279\u5b9a\u5730\u533a\u7684\u5929\u6c14\u4fe1\u606f\n      summary: \u67e5\u770b\u5929\u6c14\n      operationId: GetCurrentWeather\n      requestBody:\n        content:\n          application/json:\n            schema:\n              type: object\n              properties:\n                input:\n                  type: string\n                  description: \u8f93\u5165\u4fe1\u606f\n                  x-dingtalk-context:\n                    property: currentInput\n                    format: raw\n                attribute:\n                  type: string\n                  description: \u8f93\u5165\u5c5e\u6027\n                  x-dingtalk-context :\n                    property: currentInput\n                    format: attribute\n                sender:\n                  type: string\n                  description: \u53d1\u9001\u4ebaUserId\n                  x-dingtalk-context:\n                    property: currentUser\n                    format: userId\n                corpId:\n                  type: string\n                  description: \u7ec4\u7ec7\u4fe1\u606f\n                  x-dingtalk-context:\n                    property: currentOrg\n                    format: corpId\n      parameters:\n        - name: input\n          in: query\n          description: \u8f93\u5165\u4fe1\u606f\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentInput\n              format: raw\n        - name: sender\n          in: query\n          description: \u8bf7\u6c42\u4eba\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentUser\n              format: userId\n      responses:\n        '200':\n          description: OK\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/GetWeatherResponse'\ncomponents:\n  schemas:\n    GetWeatherResponse:\n      type: object\n      properties:\n        location:\n          type: string\n          description: \u67e5\u8be2\u5929\u6c14\u7ed3\u679c\u5bf9\u5e94\u7684\u57ce\u5e02\u548c\u5730\u533a\n        date:\n          type: string\n          description: \u67e5\u8be2\u5929\u6c14\u7ed3\u679c\u5bf9\u5e94\u7684\u65e5\u671f\n        text:\n          type: string\n          description: \u5929\u6c14\u73b0\u8c61\uff0c\u6674\u5929\u3001\u591a\u4e91\u7b49\n        temperature:\n          type: number\n          description: \u6c14\u6e29\uff0c\u5355\u4f4d\uff1a\u6444\u6c0f\u5ea6\n        humidity:\n          type: number\n          description: \u6e7f\u5ea6\n        wind_direction:\n          type: string\n          description: \u98ce\u5411\n"))),(0,a.kt)(o.Z,{value:"GET_HTTP",label:"GET\u8bf7\u6c42\u683c\u5f0f(HTTP\u534f\u8bae)",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.1\ninfo:\n  title: \u5929\u6c14\u67e5\u8be2\n  description: \u6309\u5730\u533a\u548c\u65e5\u671f\u6765\u67e5\u770b\u5929\u6c14\u4fe1\u606f\uff0c\u4e86\u89e3\u6c14\u6e29\u3001\u6e7f\u5ea6\u3001\u98ce\u5411\u7b49\u4fe1\u606f\u3002\u975e\u771f\u5b9e\u5929\u6c14\u6570\u636e\uff0c\u4ec5\u7528\u4e8e\u6f14\u793a\uff0c\u8bf7\u52ff\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528\u3002\n  version: v1.0.0\nservers:\n  - url: https://action-example.dingtalk.com\npaths:\n  /v1/actions/example/weather/get:\n    get:\n      description: \u67e5\u8be2\u7279\u5b9a\u5730\u533a\u7684\u5929\u6c14\u4fe1\u606f\n      summary: \u67e5\u770b\u5929\u6c14\n      operationId: GetCurrentWeather\n      parameters:\n        - name: input\n          in: query\n          description: \u8f93\u5165\u4fe1\u606f\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentInput\n              format: raw\n        - name: sender\n          in: query\n          description: \u8bf7\u6c42\u4eba\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentUser\n              format: userId\n        - name: inputAttribute\n          in: query\n          description: \u8f93\u5165\u4fe1\u606f\u5c5e\u6027\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentInput\n              format: attribute\n        - name: corpId\n          in: query\n          description: \u7ec4\u7ec7\u4fe1\u606f\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentOrg\n              format: corpId\n      responses:\n        '200':\n          description: OK\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/GetWeatherResponse'\ncomponents:\n  schemas:\n    GetWeatherResponse:\n      type: object\n      properties:\n        location:\n          type: string\n          description: \u67e5\u8be2\u5929\u6c14\u7ed3\u679c\u5bf9\u5e94\u7684\u57ce\u5e02\u548c\u5730\u533a\n        date:\n          type: string\n          description: \u67e5\u8be2\u5929\u6c14\u7ed3\u679c\u5bf9\u5e94\u7684\u65e5\u671f\n        text:\n          type: string\n          description: \u5929\u6c14\u73b0\u8c61\uff0c\u6674\u5929\u3001\u591a\u4e91\u7b49\n        temperature:\n          type: number\n          description: \u6c14\u6e29\uff0c\u5355\u4f4d\uff1a\u6444\u6c0f\u5ea6\n        humidity:\n          type: number\n          description: \u6e7f\u5ea6\n        wind_direction:\n          type: string\n          description: \u98ce\u5411\n"))),(0,a.kt)(o.Z,{value:"POST_HTTP",label:"POST\u8bf7\u6c42\u683c\u5f0f(HTTP\u534f\u8bae)",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.1\ninfo:\n  title: \u5929\u6c14\u67e5\u8be2\n  description: \u6309\u5730\u533a\u548c\u65e5\u671f\u6765\u67e5\u770b\u5929\u6c14\u4fe1\u606f\uff0c\u4e86\u89e3\u6c14\u6e29\u3001\u6e7f\u5ea6\u3001\u98ce\u5411\u7b49\u4fe1\u606f\u3002\u975e\u771f\u5b9e\u5929\u6c14\u6570\u636e\uff0c\u4ec5\u7528\u4e8e\u6f14\u793a\uff0c\u8bf7\u52ff\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528\u3002\n  version: v1.0.0\nservers:\n  - url: https://action-example.dingtalk.com\npaths:\n  /v1/actions/example/weather/get:\n    post:\n      description: \u67e5\u8be2\u7279\u5b9a\u5730\u533a\u7684\u5929\u6c14\u4fe1\u606f\n      summary: \u67e5\u770b\u5929\u6c14\n      operationId: GetCurrentWeather\n      requestBody:\n        content:\n          application/json:\n            schema:\n              type: object\n              properties:\n                input:\n                  type: string\n                  description: \u8f93\u5165\u4fe1\u606f\n                  x-dingtalk-context:\n                    property: currentInput\n                    format: raw\n                attribute:\n                  type: string\n                  description: \u8f93\u5165\u5c5e\u6027\n                  x-dingtalk-context :\n                    property: currentInput\n                    format: attribute\n                sender:\n                  type: string\n                  description: \u53d1\u9001\u4ebaUserId\n                  x-dingtalk-context:\n                    property: currentUser\n                    format: userId\n                corpId:\n                  type: string\n                  description: \u7ec4\u7ec7\u4fe1\u606f\n                  x-dingtalk-context:\n                    property: currentOrg\n                    format: corpId\n      parameters:\n        - name: input\n          in: query\n          description: \u8f93\u5165\u4fe1\u606f\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentInput\n              format: raw\n        - name: sender\n          in: query\n          description: \u8bf7\u6c42\u4eba\n          required: true\n          schema:\n            type: string\n            x-dingtalk-context:\n              property: currentUser\n              format: userId\n      responses:\n        '200':\n          description: OK\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/GetWeatherResponse'\ncomponents:\n  schemas:\n    GetWeatherResponse:\n      type: object\n      properties:\n        location:\n          type: string\n          description: \u67e5\u8be2\u5929\u6c14\u7ed3\u679c\u5bf9\u5e94\u7684\u57ce\u5e02\u548c\u5730\u533a\n        date:\n          type: string\n          description: \u67e5\u8be2\u5929\u6c14\u7ed3\u679c\u5bf9\u5e94\u7684\u65e5\u671f\n        text:\n          type: string\n          description: \u5929\u6c14\u73b0\u8c61\uff0c\u6674\u5929\u3001\u591a\u4e91\u7b49\n        temperature:\n          type: number\n          description: \u6c14\u6e29\uff0c\u5355\u4f4d\uff1a\u6444\u6c0f\u5ea6\n        humidity:\n          type: number\n          description: \u6e7f\u5ea6\n        wind_direction:\n          type: string\n          description: \u98ce\u5411\n")))),(0,a.kt)("h3",{id:"\u6b65\u9aa4\u4e09-\u786e\u8ba4\u6280\u80fd"},"\u6b65\u9aa4\u4e09: \u786e\u8ba4\u6280\u80fd"),(0,a.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0d\u53ef\u4ee5\u5173\u8054\u5176\u4ed6\u4efb\u4f55\u6280\u80fd\u624d\u53ef\u4ee5\u6210\u529f\u5f00\u901a\u76f4\u901a\u6a21\u5f0f")),(0,a.kt)("h3",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://open.dingtalk.com/document/ai-dev/actions-advanced-settings#b6788d573apjp"},"\u83b7\u53d6\u8fd0\u884c\u4e0a\u4e0b\u6587")))}y.isMDXComponent=!0},43816:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/create1-9bf32c8d35dc82fb5e80269c6851dceb.png"},4447:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/create2-abfd0d25738e216118343ef785368160.png"}}]);