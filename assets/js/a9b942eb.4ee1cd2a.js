"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[7383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),g=r,m=c["".concat(o,".").concat(g)]||c[g]||d[g]||i;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},12764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:3},l="3. \u642d\u5efa AI \u63d2\u4ef6\u670d\u52a1",p={unversionedId:"explore/tutorials/stream/aiplugin/java/build-ai-plugin-server",id:"explore/tutorials/stream/aiplugin/java/build-ai-plugin-server",title:"3. \u642d\u5efa AI \u63d2\u4ef6\u670d\u52a1",description:"\u5728\u672c\u7ae0\u8282\uff0c\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u5728\u4f7f\u7528\u9489\u9489\u5f00\u653e\u5e73\u53f0Stream mode\u642d\u5efa AI \u63d2\u4ef6\u670d\u52a1\u3002\u5305\u62ec\u4ee5\u4e0b\u5185\u5bb9\uff1a",source:"@site/docs/explore/tutorials/stream/aiplugin/java/build-ai-plugin-server.md",sourceDirName:"explore/tutorials/stream/aiplugin/java",slug:"/explore/tutorials/stream/aiplugin/java/build-ai-plugin-server",permalink:"/developerpedia/docs/explore/tutorials/stream/aiplugin/java/build-ai-plugin-server",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/explore/tutorials/stream/aiplugin/java/build-ai-plugin-server.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. \u521b\u5efa AI \u63d2\u4ef6",permalink:"/developerpedia/docs/explore/tutorials/stream/aiplugin/java/create-ai-plugin"},next:{title:"4. \u4f7f\u7528 AI \u63d2\u4ef6\u642d\u5efa AI \u6280\u80fd",permalink:"/developerpedia/docs/explore/tutorials/stream/aiplugin/java/use-ai-plugin-in-skill"}},o={},s=[{value:"\u642d\u5efa AI \u63d2\u4ef6\u5904\u7406\u903b\u8f91",id:"\u642d\u5efa-ai-\u63d2\u4ef6\u5904\u7406\u903b\u8f91",level:2},{value:"\u586b\u5145\u5e94\u7528\u4fe1\u606f",id:"\u586b\u5145\u5e94\u7528\u4fe1\u606f",level:2},{value:"\u6ce8\u518c AI \u63d2\u4ef6\u56de\u8c03\u901a\u9053",id:"\u6ce8\u518c-ai-\u63d2\u4ef6\u56de\u8c03\u901a\u9053",level:2},{value:"\u542f\u52a8 AI \u63d2\u4ef6\u670d\u52a1",id:"\u542f\u52a8-ai-\u63d2\u4ef6\u670d\u52a1",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"3-\u642d\u5efa-ai-\u63d2\u4ef6\u670d\u52a1"},"3. \u642d\u5efa AI \u63d2\u4ef6\u670d\u52a1"),(0,r.kt)("p",null,"\u5728\u672c\u7ae0\u8282\uff0c\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u5728\u4f7f\u7528\u9489\u9489\u5f00\u653e\u5e73\u53f0",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/stream/overview"},"Stream mode"),"\u642d\u5efa AI \u63d2\u4ef6\u670d\u52a1\u3002\u5305\u62ec\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u642d\u5efa AI \u63d2\u4ef6\u5904\u7406\u903b\u8f91"),(0,r.kt)("li",{parentName:"ol"},"\u586b\u5145\u5e94\u7528\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ol"},"\u6ce8\u518c AI \u63d2\u4ef6\u56de\u8c03\u901a\u9053")),(0,r.kt)("admonition",{title:"\u63d0\u793a\u4fe1\u606f",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u6559\u7a0b\u7684\u5b8c\u6574\u4ee3\u7801\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-dingtalk/dingtalk-stream-sdk-java-quick-start"},"GitHub \u4ed3\u5e93"),"\u4e2d\u83b7\u53d6\uff0c\u672c\u7ae0\u8282\u6d89\u53ca\u7684\u4ee3\u7801\u91cf\u8f83\u5927\uff0c\u5efa\u8bae\u901a\u8fc7 GitHub \u67e5\u770b\u3002")),(0,r.kt)("h2",{id:"\u642d\u5efa-ai-\u63d2\u4ef6\u5904\u7406\u903b\u8f91"},"\u642d\u5efa AI \u63d2\u4ef6\u5904\u7406\u903b\u8f91"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="AIGraphPluginCallbackListener.java" showLineNumbers',title:'"AIGraphPluginCallbackListener.java"',showLineNumbers:!0},'public class AIGraphPluginCallbackListener implements OpenDingTalkCallbackListener<GraphAPIRequest, GraphAPIResponse> {\n    @Override\n    public GraphAPIResponse execute(GraphAPIRequest request) {\n        log.info("receive AI graph plugin request={}", request);\n        String abilityKey = request.getHeader(AIPluginHeaders.ABILITY_KEY_NAME);\n        String pluginId = request.getHeader(AIPluginHeaders.PLUGIN_ID_NAME);\n        String pluginVersion = request.getHeader(AIPluginHeaders.PLUGIN_VERSION_NAME);\n        //\u4e1a\u52a1\u6570\u636e\u7684json\u5b57\u7b26\u4e32\n        String data = request.getBody();\n        //\u83b7\u53d6graph\u7684\u8def\u5f84\u8bf7\u6c42{version}/{resource}\n        String path = request.getRequestLine().getPath();\n        return GraphUtils.failed(StatusLine.INTERNAL_ERROR);\n    }\n}\n')),(0,r.kt)("p",null,"\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"DingTalkAIPluginRequest"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"DingTalkAIPluginResponse")," \u4e3a\u5e73\u53f0\u7ea6\u5b9a\u7684\u56de\u8c03\u534f\u8bae\u5bf9\u8c61,\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-dingtalk/dingtalk-stream-sdk-java-quick-start/tree/main/src/main/java/org/example/model"},"GitHub \u4ed3\u5e93")),(0,r.kt)("admonition",{title:"\u63d0\u793a\u4fe1\u606f",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"abilityKey")," \u53ef\u4ee5\u4f5c\u4e3a\u670d\u52a1\u7684\u552f\u4e00\u6807\u8bc6\u505a\u8def\u7531\u3002")),(0,r.kt)("h2",{id:"\u586b\u5145\u5e94\u7528\u4fe1\u606f"},"\u586b\u5145\u5e94\u7528\u4fe1\u606f"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img.png",src:n(81485).Z,width:"2790",height:"1238"})),(0,r.kt)("p",null,"\u5c06\u9489\u9489\u5f00\u653e\u5e73\u53f0\u4e2d\u5e94\u7528\u7684\u6807\u8bc6\u586b\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"<your-app-key>"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"<your-app-secret>"),"\u533a\u57df"),(0,r.kt)("admonition",{title:"\u5173\u4e8e\u5e94\u7528\u552f\u4e00\u6807\u8bc6",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4f01\u4e1a\u5185\u90e8\u5e94\u7528\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"appKey"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"appSecret"),",\u4f01\u4e1a\u4e09\u65b9\u5e94\u7528\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"suiteKey"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"suiteSecret"),"\u3002")),(0,r.kt)("h2",{id:"\u6ce8\u518c-ai-\u63d2\u4ef6\u56de\u8c03\u901a\u9053"},"\u6ce8\u518c AI \u63d2\u4ef6\u56de\u8c03\u901a\u9053"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="DingTalkStreamClientConfiguration.java" showLineNumbers',title:'"DingTalkStreamClientConfiguration.java"',showLineNumbers:!0},'public class DingTalkStreamClientConfiguration {\n\n    @Value("${app.appKey}")\n    private String clientId;\n    @Value("${app.appSecret}")\n    private String clientSecret;\n\n    /**\n     * \u914d\u7f6eOpenDingTalkClient\u5ba2\u6237\u7aef\u5e76\u914d\u7f6e\u521d\u59cb\u5316\u65b9\u6cd5(start)\n     *\n     * @param chatBotCallbackListener\n     * @param aiGraphPluginCallbackListener\n     * @return\n     */\n    @Bean(initMethod = "start")\n    public OpenDingTalkClient configureStreamClient(@Autowired ChatBotCallbackListener chatBotCallbackListener,\n                                                    @Autowired AIGraphPluginCallbackListener aiGraphPluginCallbackListener) throws Exception {\n        // init stream client\n        return OpenDingTalkStreamClientBuilder.custom()\n                //\u914d\u7f6e\u5e94\u7528\u7684\u8eab\u4efd\u4fe1\u606f, \u4f01\u4e1a\u5185\u90e8\u5e94\u7528\u5206\u522b\u4e3aappKey\u548cappSecret, \u4e09\u65b9\u5e94\u7528\u4e3asuiteKey\u548csuiteSecret\n                .credential(new AuthClientCredential(clientId, clientSecret))\n                //\u6ce8\u518c\u673a\u5668\u4eba\u56de\u8c03\n                .registerCallbackListener(DingTalkStreamTopics.BOT_MESSAGE_TOPIC, chatBotCallbackListener)\n                //\u6ce8\u518cgraph api\u56de\u8c03\n                .registerCallbackListener(DingTalkStreamTopics.GRAPH_API_TOPIC, aiGraphPluginCallbackListener).build();\n    }\n}\n')),(0,r.kt)("h2",{id:"\u542f\u52a8-ai-\u63d2\u4ef6\u670d\u52a1"},"\u542f\u52a8 AI \u63d2\u4ef6\u670d\u52a1"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img.png",src:n(49631).Z,width:"2774",height:"1506"})))}d.isMDXComponent=!0},81485:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fill-app-info-83d8280fb15cf30feb2e54eb00c13081.jpg"},49631:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/run-server-ceaa3310bb034c957127e6e24b9eeec4.jpg"}}]);