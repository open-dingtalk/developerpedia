"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[9425],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),i=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(r),m=n,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),s=r(16550),u=r(91980),i=r(67392),c=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,i]=f({queryString:r,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),h=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),b(e)}),[i,b,o]),tabValues:o}}var h=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=i[r].value;a!==s&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":s===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(g,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},70173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));r(74866),r(85162);const o={sidebar_position:8},l="8. \u603b\u7ed3",s={unversionedId:"explore/tutorials/assistant_ability/passthrough_mode/java/\u603b\u7ed3",id:"explore/tutorials/assistant_ability/passthrough_mode/java/\u603b\u7ed3",title:"8. \u603b\u7ed3",description:"\u81f3\u6b64\uff0c\u76f8\u5173\u6559\u7a0b\u5df2\u7ecf\u5168\u90e8\u7ed3\u675f\u3002\u5728\u8be5\u6559\u7a0b\u4e2d\uff0c\u4ec5\u63d0\u4f9b\u5feb\u901f\u5165\u95e8\u6307\u5f15\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u638c\u63e1\u57fa\u672c\u7684\u5f00\u53d1\u80fd\u529b\u3002",source:"@site/docs/explore/tutorials/assistant_ability/passthrough_mode/java/\u603b\u7ed3.md",sourceDirName:"explore/tutorials/assistant_ability/passthrough_mode/java",slug:"/explore/tutorials/assistant_ability/passthrough_mode/java/\u603b\u7ed3",permalink:"/developerpedia/docs/explore/tutorials/assistant_ability/passthrough_mode/java/\u603b\u7ed3",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/explore/tutorials/assistant_ability/passthrough_mode/java/\u603b\u7ed3.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"7. \u8fdb\u9636\uff1aAI \u52a9\u7406\u53d1\u5361\u7247",permalink:"/developerpedia/docs/explore/tutorials/assistant_ability/passthrough_mode/java/\u8fdb\u9636:AI\u52a9\u7406\u56de\u590d\u5361\u7247"},next:{title:"Python",permalink:"/developerpedia/docs/explore/tutorials/assistant_ability/passthrough_mode/python"}},u={},i=[],c={toc:i},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"8-\u603b\u7ed3"},"8. \u603b\u7ed3"),(0,n.kt)("p",null,"\u81f3\u6b64\uff0c\u76f8\u5173\u6559\u7a0b\u5df2\u7ecf\u5168\u90e8\u7ed3\u675f\u3002\u5728\u8be5\u6559\u7a0b\u4e2d\uff0c\u4ec5\u63d0\u4f9b\u5feb\u901f\u5165\u95e8\u6307\u5f15\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u638c\u63e1\u57fa\u672c\u7684\u5f00\u53d1\u80fd\u529b\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u60f3\u8981\u8fdb\u4e00\u6b65\u5f00\u53d1\u7684\u8bdd\uff0c\u63a8\u8350\u9605\u8bfb\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/explore/tutorials/stream/advanced_ability/java"},"\u81ea\u5b9a\u4e49\u80fd\u529b Stream \u6a21\u5f0f")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/ai-dev/actions-advanced-settings"},"\u81ea\u5b9a\u4e49\u80fd\u529b\u9ad8\u7ea7\u8bbe\u7f6e"))))}d.isMDXComponent=!0}}]);