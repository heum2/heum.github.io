(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[333],{2040:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(6003)},7068:function(e,t,n){Promise.resolve().then(n.bind(n,1609))},1986:function(e,t,n){"use strict";n.d(t,{v:function(){return o}});var r=n(2040);let o={prefix:"https://heum2.github.io/heum2.github.io",profile:{name:"heum2",image:"/avatar.svg",role:"frontend developer",bio:"Coffee is my power ☕️",email:"jwh6295@gmail.com",linkedin:"eunheum-jo-b9459a1b4",github:"heum2",instagram:"heumheum_e",twitter:""},blog:{title:"heum.dev",description:"개발 및 일기를 끄적이는 블로그"},link:"https://heum2.github.io",since:2022,lang:"en-US",ogImageGenerateURL:"https://og-image-korean.vercel.app",seo:{keywords:["Blog","Website","Notion"]},notionConfig:{pageId:r.env.NOTION_PAGE_ID},googleAnalytics:{enable:!0,config:{measurementId:"G-TVDLGQEWEN"}},googleSearchConsole:{enable:!0,config:{siteVerification:"pSHTPLBdvZQt4yY4Q27XbwpH-9YyLGDA28C4PzN6hpE"}},naverSearchConsole:{enable:!0,config:{siteVerification:"2df7e219c18389fbf7278307c10f745449e61a30"}},utterances:{enable:!0,config:{repo:"heum2/heum2.github.io","issue-term":"title",label:"\uD83D\uDCAC Utterances"}}}},1609:function(e,t,n){"use strict";n.r(t);var r=n(9268),o=n(6006),i=n(1986);t.default=function(){let e=(0,o.useRef)(null);return((0,o.useEffect)(()=>{var t;let n=document.createElement("script");n.src="https://utteranc.es/client.js";let r=i.v.utterances.config;Object.keys(r).forEach(e=>{n.setAttribute(e,r[e])}),n.setAttribute("theme","github-light"),n.setAttribute("crossorigin","anonymous"),n.onload=e=>{let t=document.getElementById("comments");t&&t.children[1]&&(t.children[1].style.display="none")},n.async=!0,null===(t=e.current)||void 0===t||t.appendChild(n)},[]),i.v.utterances.enable)?(0,r.jsx)("div",{id:"comments",ref:e,className:"border-t-[1px]"}):(0,r.jsx)(r.Fragment,{})}},6003:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var c=[],a=!1,l=-1;function f(){a&&r&&(a=!1,r.length?c=r.concat(c):l=-1,c.length&&h())}function h(){if(!a){var e=s(f);a=!0;for(var t=c.length;t;){for(r=c,c=[];++l<t;)r&&r[l].run();l=-1,t=c.length}r=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||a||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},u=!0;try{t[e](i,i.exports,r),u=!1}finally{u&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,i={},a=null,l=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:s.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},9268:function(e,t,n){"use strict";e.exports=n(3177)}},function(e){e.O(0,[253,488,744],function(){return e(e.s=7068)}),_N_E=e.O()}]);