(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2040:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(6003)},5855:function(e,t,n){Promise.resolve().then(n.bind(n,2555)),Promise.resolve().then(n.t.bind(n,1273,23)),Promise.resolve().then(n.t.bind(n,6356,23)),Promise.resolve().then(n.t.bind(n,2373,23))},1986:function(e,t,n){"use strict";n.d(t,{v:function(){return o}});var r=n(2040);let o={prefix:"https://heum2.github.io/heum2.github.io",profile:{name:"heum2",image:"/images/profile.jpg",role:"frontend developer",bio:"Coffee is my power ☕️",email:"jwh6295@gmail.com",linkedin:"eunheum-jo-b9459a1b4",github:"heum2",instagram:"heumheum_e",twitter:""},blog:{title:"heum.dev",description:"개발 및 일기를 끄적이는 블로그"},link:"https://heum2.github.io",since:2022,lang:"en-US",ogImageGenerateURL:"https://og-image-korean.vercel.app",seo:{keywords:["Blog","Website","Notion"]},notionConfig:{pageId:r.env.NOTION_PAGE_ID},googleAnalytics:{enable:!0,config:{measurementId:"G-TVDLGQEWEN"}},googleSearchConsole:{enable:!0,config:{siteVerification:"pSHTPLBdvZQt4yY4Q27XbwpH-9YyLGDA28C4PzN6hpE"}},naverSearchConsole:{enable:!0,config:{siteVerification:"2df7e219c18389fbf7278307c10f745449e61a30"}},utterances:{enable:!0,config:{repo:"heum2/heum2.github.io","issue-term":"title",label:"\uD83D\uDCAC Utterances"}}}},6167:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return a},default:function(){return i}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let a=r[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?o[a]=!!n[e]:o.setAttribute(a,n[e])}let{children:a,dangerouslySetInnerHTML:i}=n;return i?o.innerHTML=i.__html||"":a&&(o.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),o}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),l=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&l.push(n)}let c=t.map(o).filter(e=>{for(let t=0,n=l.length;t<n;t++){let n=l[t];if(a(n,e))return l.splice(t,1),!1}return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(i-l.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return h},initScriptLoader:function(){return p},default:function(){return y}});let r=n(343),o=n(3903),a=r._(n(8431)),i=o._(n(6006)),l=n(5415),s=n(6167),c=n(1722),u=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy"],m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:a,children:i="",strategy:l="afterInteractive",onError:c}=e,m=n||t;if(m&&d.has(m))return;if(u.has(t)){d.add(m),u.get(t).then(r,c);return}let h=()=>{o&&o(),d.add(m)},p=document.createElement("script"),g=new Promise((e,t)=>{p.addEventListener("load",function(t){e(),r&&r.call(this,t),h()}),p.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});for(let[n,r]of(a?(p.innerHTML=a.__html||"",h()):i?(p.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",h()):t&&(p.src=t,u.set(t,g)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();p.setAttribute(e,r)}"worker"===l&&p.setAttribute("type","text/partytown"),p.setAttribute("data-nscript",l),document.body.appendChild(p)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))}):m(e)}function p(e){e.forEach(h),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}()}function g(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:s="afterInteractive",onError:u,...f}=e,{updateScripts:h,scripts:p,getIsSsr:g,appDir:y,nonce:b}=(0,i.useContext)(l.HeadManagerContext),v=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;v.current||(o&&e&&d.has(e)&&o(),v.current=!0)},[o,t,n]);let x=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!x.current&&("afterInteractive"===s?m(e):"lazyOnload"===s&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))})),x.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(h?(p[s]=(p[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:u,...f}]),h(p)):g&&g()?d.add(t||n):g&&!g()&&m(e)),y){if("beforeInteractive"===s)return n?(a.default.preload(n,f.integrity?{as:"script",integrity:f.integrity}:{as:"script"}),i.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(f.dangerouslySetInnerHTML&&(f.children=f.dangerouslySetInnerHTML.__html,delete f.dangerouslySetInnerHTML),i.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...f}])+")"}}));"afterInteractive"===s&&n&&a.default.preload(n,f.integrity?{as:"script",integrity:f.integrity}:{as:"script"})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let y=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2555:function(e,t,n){"use strict";n.r(t),n.d(t,{Providers:function(){return L}});var r=n(9268),o=n(6006);let a=["light","dark"],i="(prefers-color-scheme: dark)",l="undefined"==typeof window,s=(0,o.createContext)(void 0),c={setTheme:e=>{},themes:[]},u=()=>{var e;return null!==(e=(0,o.useContext)(s))&&void 0!==e?e:c},d=e=>(0,o.useContext)(s)?o.createElement(o.Fragment,null,e.children):o.createElement(m,e),f=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:l="theme",themes:c=f,defaultTheme:u=n?"system":"light",attribute:d="data-theme",value:m,children:b,nonce:v})=>{let[x,_]=(0,o.useState)(()=>p(l,u)),[w,E]=(0,o.useState)(()=>p(l)),S=m?Object.values(m):c,T=(0,o.useCallback)(e=>{let o=e;if(!o)return;"system"===e&&n&&(o=y());let i=m?m[o]:o,l=t?g():null,s=document.documentElement;if("class"===d?(s.classList.remove(...S),i&&s.classList.add(i)):i?s.setAttribute(d,i):s.removeAttribute(d),r){let e=a.includes(u)?u:null,t=a.includes(o)?o:e;s.style.colorScheme=t}null==l||l()},[]),j=(0,o.useCallback)(e=>{_(e);try{localStorage.setItem(l,e)}catch(e){}},[e]),N=(0,o.useCallback)(t=>{let r=y(t);E(r),"system"===x&&n&&!e&&T("system")},[x,e]);(0,o.useEffect)(()=>{let e=window.matchMedia(i);return e.addListener(N),N(e),()=>e.removeListener(N)},[N]),(0,o.useEffect)(()=>{let e=e=>{e.key===l&&j(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[j]),(0,o.useEffect)(()=>{T(null!=e?e:x)},[e,x]);let k=(0,o.useMemo)(()=>({theme:x,setTheme:j,forcedTheme:e,resolvedTheme:"system"===x?w:x,themes:n?[...c,"system"]:c,systemTheme:n?w:void 0}),[x,j,e,w,n,c]);return o.createElement(s.Provider,{value:k},o.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:r,storageKey:l,themes:c,defaultTheme:u,attribute:d,value:m,children:b,attrs:S,nonce:v}),b)},h=(0,o.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:l,defaultTheme:s,value:c,attrs:u,nonce:d})=>{let f="system"===s,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=l?a.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,r=!0)=>{let o=c?c[e]:e,i=t?e+"|| ''":`'${o}'`,s="";return l&&r&&!t&&a.includes(e)&&(s+=`d.style.colorScheme = '${e}';`),"class"===n?s+=t||o?`c.add(${i})`:"null":o&&(s+=`d[s](n,${i})`),s},g=e?`!function(){${m}${p(e)}}()`:r?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${i}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}${f?"":"else{"+p(s,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}else{${p(s,!1,!1)};}${h}}catch(t){}}();`;return o.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:g}})},()=>!0),p=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light");var b=n(8367),v=n(6008),x=n(1986);let _=o.createContext(""),w=_.Provider;_.Consumer;var E=n(5846),S=n.n(E);function T(){let e=(0,v.usePathname)();return(0,r.jsx)("header",{className:"shadow-sm transition sticky bg-white dark:bg-zinc-700 mb-2 md:mb-6 border-b-[1px] z-[40] border-gray-100 dark:border-gray-800 top-0",children:(0,r.jsxs)("nav",{className:"flex justify-between items-center h-14 px-5 mx-auto my-0 max-w-6xl",children:[(0,r.jsx)("h1",{className:"text-lg font-black",children:(0,r.jsx)(S(),{href:"/",children:"heum.dev"})}),(0,r.jsx)("button",{className:"border p-2 rounded md:hidden",children:(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsx)("span",{className:"block w-5 h-1 bg-gray-500 dark:bg-gray-400"}),(0,r.jsx)("span",{className:"block w-5 h-1 bg-gray-500 dark:bg-gray-400"}),(0,r.jsx)("span",{className:"block w-5 h-1 bg-gray-500 dark:bg-gray-400"})]})}),(0,r.jsxs)("ul",{className:"hidden md:flex gap-4",children:[(0,r.jsx)("li",{className:"rounded-lg bg-transparent hover:bg-gray-300 px-3 py-1 ".concat(e.includes("about")&&"font-bold"),children:(0,r.jsx)(S(),{href:"/about",children:"About"})}),(0,r.jsx)("li",{className:"rounded-lg bg-transparent hover:bg-gray-300 px-3 py-1 ".concat(e.includes("posts")&&"font-bold"),children:(0,r.jsx)(S(),{href:"/posts",children:"Posts"})}),(0,r.jsx)("li",{className:"rounded-lg bg-transparent hover:bg-gray-300 px-3 py-1 ".concat(e.includes("log")&&"font-bold"),children:(0,r.jsx)(S(),{href:"/log",children:"Log"})})]})]})})}var j=n(8136);function N(){let{theme:e,setTheme:t}=u();return(0,r.jsx)("div",{className:"fixed bottom-4 right-4",children:(0,r.jsx)(b.E.button,{type:"button",whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>{t("dark"===e?"light":"dark")},className:"bg-current p-2 rounded-full text-gray-500 dark:text-gray-400",children:"light"===e?(0,r.jsx)(j.GL8,{className:"w-5 h-5",fill:"rgb(254, 240, 138)"}):(0,r.jsx)(j.aQ_,{className:"w-5 h-5",fill:"rgb(253, 224, 71)"})})})}x.v.googleAnalytics.config.measurementId;let k=e=>{console.log(window,e)},C=()=>{let e=(0,v.usePathname)(),t=(0,v.useSearchParams)();(0,o.useEffect)(()=>{let n=e+t.toString();x.v.googleAnalytics.enable&&k(n)},[e,t])};function L(e){let{children:t}=e;C();let n=(0,v.usePathname)();return(0,r.jsx)(d,{attribute:"class",children:(0,r.jsxs)(w,{value:x.v.prefix,children:[(0,r.jsx)(T,{}),(0,r.jsx)(b.E.main,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},className:"mx-auto max-w-6xl px-4",children:t},n),(0,r.jsx)(N,{})]})})}},6356:function(){},2373:function(e){e.exports={style:{fontFamily:"'__Noto_Sans_KR_474593', '__Noto_Sans_KR_Fallback_474593'",fontWeight:700,fontStyle:"normal"},className:"__className_474593"}},6003:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function a(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var s=[],c=!1,u=-1;function d(){c&&r&&(c=!1,r.length?s=r.concat(s):u=-1,s.length&&f())}function f(){if(!c){var e=l(d);c=!0;for(var t=s.length;t;){for(r=s,s=[];++u<t;)r&&r[u].run();u=-1,t=s.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||c||l(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}},i=!0;try{t[e](a,a.exports,r),i=!1}finally{i&&delete n[e]}return a.exports}r.ab="//";var o=r(229);e.exports=o}()},5846:function(e,t,n){e.exports=n(8920)}},function(e){e.O(0,[680,874,347,253,488,744],function(){return e(e.s=5855)}),_N_E=e.O()}]);