(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8771:function(d,u,e){"use strict";var f=e(1682);function c(d,u){var e=Object.keys(d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(d);u&&(f=f.filter((function(u){return Object.getOwnPropertyDescriptor(d,u).enumerable}))),e.push.apply(e,f)}return e}function t(d){for(var u=1;u<arguments.length;u++){var e=null!=arguments[u]?arguments[u]:{};u%2?c(Object(e),!0).forEach((function(u){f(d,u,e[u])})):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(u){Object.defineProperty(d,u,Object.getOwnPropertyDescriptor(e,u))}))}return d}u.default=function(d,u){var e=n.default,f={loading:function(d){d.error,d.isLoading;return d.pastDelay,null}};d instanceof Promise?f.loader=function(){return d}:"function"===typeof d?f.loader=d:"object"===typeof d&&(f=t(t({},f),d));var c=f=t(t({},f),u);if(c.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(c.suspense)return e(c);f.loadableGenerated&&delete(f=t(t({},f),f.loadableGenerated)).loadableGenerated;if("boolean"===typeof f.ssr){if(!f.ssr)return delete f.ssr,a(e,f);delete f.ssr}return e(f)};r(e(7294));var n=r(e(4860));function r(d){return d&&d.__esModule?d:{default:d}}function a(d,u){return delete u.webpack,delete u.modules,d(u)}},1083:function(d,u,e){"use strict";var f;Object.defineProperty(u,"__esModule",{value:!0}),u.LoadableContext=void 0;var c=((f=e(7294))&&f.__esModule?f:{default:f}).default.createContext(null);u.LoadableContext=c},4860:function(d,u,e){"use strict";var f=e(2553),c=e(2012),t=e(1682);function n(d,u){var e=Object.keys(d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(d);u&&(f=f.filter((function(u){return Object.getOwnPropertyDescriptor(d,u).enumerable}))),e.push.apply(e,f)}return e}function r(d){for(var u=1;u<arguments.length;u++){var e=null!=arguments[u]?arguments[u]:{};u%2?n(Object(e),!0).forEach((function(u){t(d,u,e[u])})):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(u){Object.defineProperty(d,u,Object.getOwnPropertyDescriptor(e,u))}))}return d}function a(d,u){var e="undefined"!==typeof Symbol&&d[Symbol.iterator]||d["@@iterator"];if(!e){if(Array.isArray(d)||(e=function(d,u){if(!d)return;if("string"===typeof d)return o(d,u);var e=Object.prototype.toString.call(d).slice(8,-1);"Object"===e&&d.constructor&&(e=d.constructor.name);if("Map"===e||"Set"===e)return Array.from(d);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(d,u)}(d))||u&&d&&"number"===typeof d.length){e&&(d=e);var f=0,c=function(){};return{s:c,n:function(){return f>=d.length?{done:!0}:{done:!1,value:d[f++]}},e:function(d){throw d},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var t,n=!0,r=!1;return{s:function(){e=e.call(d)},n:function(){var d=e.next();return n=d.done,d},e:function(d){r=!0,t=d},f:function(){try{n||null==e.return||e.return()}finally{if(r)throw t}}}}function o(d,u){(null==u||u>d.length)&&(u=d.length);for(var e=0,f=new Array(u);e<u;e++)f[e]=d[e];return f}Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var i,s=(i=e(7294))&&i.__esModule?i:{default:i},l=e(7161),b=e(1083);var p=[],m=[],h=!1;function g(d){var u=d(),e={loading:!0,loaded:null,error:null};return e.promise=u.then((function(d){return e.loading=!1,e.loaded=d,d})).catch((function(d){throw e.loading=!1,e.error=d,d})),e}var y=function(){function d(u,e){f(this,d),this._loadFn=u,this._opts=e,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return c(d,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var d=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var u=this._res,e=this._opts;u.loading&&("number"===typeof e.delay&&(0===e.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){d._update({pastDelay:!0})}),e.delay)),"number"===typeof e.timeout&&(this._timeout=setTimeout((function(){d._update({timedOut:!0})}),e.timeout))),this._res.promise.then((function(){d._update({}),d._clearTimeouts()})).catch((function(u){d._update({}),d._clearTimeouts()})),this._update({})}},{key:"_update",value:function(d){this._state=r(r({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},d),this._callbacks.forEach((function(d){return d()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(d){var u=this;return this._callbacks.add(d),function(){u._callbacks.delete(d)}}}]),d}();function v(d){return function(d,u){var e=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},u);e.suspense&&(e.lazy=s.default.lazy(e.loader));var f=null;function c(){if(!f){var u=new y(d,e);f={getCurrentValue:u.getCurrentValue.bind(u),subscribe:u.subscribe.bind(u),retry:u.retry.bind(u),promise:u.promise.bind(u)}}return f.promise()}if(!h&&"function"===typeof e.webpack&&!e.suspense){var t=e.webpack();m.push((function(d){var u,e=a(t);try{for(e.s();!(u=e.n()).done;){var f=u.value;if(-1!==d.indexOf(f))return c()}}catch(n){e.e(n)}finally{e.f()}}))}var n=e.suspense?function(d,u){return s.default.createElement(e.lazy,r(r({},d),{},{ref:u}))}:function(d,u){c();var t=s.default.useContext(b.LoadableContext),n=l.useSubscription(f);return s.default.useImperativeHandle(u,(function(){return{retry:f.retry}}),[]),t&&Array.isArray(e.modules)&&e.modules.forEach((function(d){t(d)})),s.default.useMemo((function(){return n.loading||n.error?s.default.createElement(e.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:f.retry}):n.loaded?s.default.createElement(function(d){return d&&d.__esModule?d.default:d}(n.loaded),d):null}),[d,n])};return n.preload=function(){return!e.suspense&&c()},n.displayName="LoadableComponent",s.default.forwardRef(n)}(g,d)}function w(d,u){for(var e=[];d.length;){var f=d.pop();e.push(f(u))}return Promise.all(e).then((function(){if(d.length)return w(d,u)}))}v.preloadAll=function(){return new Promise((function(d,u){w(p).then(d,u)}))},v.preloadReady=function(){var d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(u){var e=function(){return h=!0,u()};w(m,d).then(e,e)}))},window.__NEXT_PRELOADREADY=v.preloadReady;var j=v;u.default=j},4918:function(d,u,e){"use strict";e.r(u),e.d(u,{__N_SSG:function(){return v},default:function(){return w}});var f=e(5152),c=e(5697),t=e.n(c),n=(e(2806),e(7294),e(9008)),r=e(5893);function a(d){var u=d.data;return(0,r.jsxs)(n.default,{children:[(0,r.jsx)("title",{children:u.title}),(0,r.jsx)("meta",{name:"title",content:u.title}),(0,r.jsx)("meta",{name:"author",content:"Hanzla Tauqeer"}),(0,r.jsx)("meta",{name:"description",content:u.description}),(0,r.jsx)("meta",{name:"keywords",content:u.keywords.join(", ")}),(0,r.jsx)("link",{rel:"canonical",href:u.url}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:u.url}),(0,r.jsx)("meta",{property:"og:title",content:u.title}),(0,r.jsx)("meta",{property:"og:description",content:u.description}),(0,r.jsx)("meta",{property:"og:image",content:u.image}),(0,r.jsx)("meta",{property:"og:site_name",content:u.title}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:u.url}),(0,r.jsx)("meta",{property:"twitter:title",content:u.title}),(0,r.jsx)("meta",{property:"twitter:description",content:u.description}),(0,r.jsx)("meta",{property:"twitter:image",content:u.image}),(0,r.jsx)("meta",{name:"robots",content:"Index"}),(0,r.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"./favicon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"./favicon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"./favicon.png"}),(0,r.jsx)("script",{async:!0,src:"https://code.iconify.design/1/1.0.4/iconify.min.js"})]})}a.prototype={data:t().shape({title:t().string.isRequired,description:t().string,image:t().string,url:t().string,keywords:t().arrayOf(t().string)}).isRequired};var o=a,i=(0,f.default)((function(){return Promise.all([e.e(351),e.e(317),e.e(590)]).then(e.bind(e,1590))}),{loadableGenerated:{webpack:function(){return[1590]},modules:["index.js -> ../components/Navigation"]}}),s=(0,f.default)((function(){return Promise.all([e.e(296),e.e(351),e.e(185)]).then(e.bind(e,3185))}),{loadableGenerated:{webpack:function(){return[3185]},modules:["index.js -> ../containers/Greetings"]}}),l=(0,f.default)((function(){return Promise.all([e.e(296),e.e(351),e.e(317),e.e(546),e.e(688)]).then(e.bind(e,5688))}),{loadableGenerated:{webpack:function(){return[5688]},modules:["index.js -> ../containers/Skills"]}}),b=(0,f.default)((function(){return Promise.all([e.e(296),e.e(351),e.e(338)]).then(e.bind(e,7338))}),{loadableGenerated:{webpack:function(){return[7338]},modules:["index.js -> ../containers/Proficiency"]}}),p=(0,f.default)((function(){return Promise.all([e.e(351),e.e(51)]).then(e.bind(e,4051))}),{loadableGenerated:{webpack:function(){return[4051]},modules:["index.js -> ../containers/Education"]}}),m=(0,f.default)((function(){return Promise.all([e.e(351),e.e(675),e.e(39),e.e(974)]).then(e.bind(e,3974))}),{loadableGenerated:{webpack:function(){return[3974]},modules:["index.js -> ../containers/Experience"]}}),h=(0,f.default)((function(){return Promise.all([e.e(351),e.e(829)]).then(e.bind(e,4829))}),{loadableGenerated:{webpack:function(){return[4829]},modules:["index.js -> ../containers/Projects"]}}),g=(0,f.default)((function(){return Promise.all([e.e(351),e.e(519)]).then(e.bind(e,3519))}),{loadableGenerated:{webpack:function(){return[3519]},modules:["index.js -> ../containers/Feedbacks"]}}),y=(0,f.default)((function(){return Promise.all([e.e(351),e.e(675),e.e(551)]).then(e.bind(e,9551))}),{loadableGenerated:{webpack:function(){return[9551]},modules:["index.js -> ../components/GithubProfileCard"]}}),v=!0;function w(d){var u=d.githubProfileData;return(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)(o,{data:{title:"Mufasa",description:"A passionate Full Stack Web Developer and Mobile App Developer.",image:"https://avatars3.githubusercontent.com/u/59178380?v=4",url:"https://developer-portfolio-1hanzla100.vercel.app",keywords:["Mufasa","Mufasa","@King-Mufasa","King-Mufasa","Portfolio","Mufasa Portfolio ","Mufasa Portfolio","web developer","full stack","full stack web developer","mobile app developer","android developer","django","flask","django rest framework","nodejs ","expressjs","reactjs ","contextapi","redux","flutter"]}}),(0,r.jsx)(i,{}),(0,r.jsx)(s,{}),(0,r.jsx)("div",{className:"bg-black",children:(0,r.jsx)(l,{})}),(0,r.jsxs)("div",{className:"bg-dark",children:[(0,r.jsx)(b,{}),(0,r.jsx)(p,{})]}),(0,r.jsxs)("div",{className:"bg-black",children:[(0,r.jsx)(m,{}),(0,r.jsx)(g,{}),(0,r.jsx)(h,{})]}),(0,r.jsx)(y,{prof:u})]})}w.prototype={githubProfileData:t().object.isRequired}},2806:function(d,u,e){"use strict";e.d(u,{c0:function(){return t},KT:function(){return n},LO:function(){return r},Bv:function(){return a},E5:function(){return o},b8:function(){return i},q:function(){return s},KK:function(){return l}});var f=e(4134),c=e.n(f),t={name:"Rolland K",title:"Hi all, I'm Rolland",description:"A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django / Flask / Wordpress and some other cool libraries and frameworks and Native Mobile Apps With Android studio.",resumeLink:"https://cv.hanzla.ga"},n={facebook:"https://www.facebook.com/rolland8080",instagram:"https://www.instagram.com/rolland8080",skype:"live:fashioncstar2019",github:"https://github.com/King-Mufasa",linkedin:"https://www.linkedin.com/in/rolland-k-0869281ba/"},r={title:"What I do",subTitle:"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",skills:[c()("\u26a1 Develop highly interactive Front end / User Interfaces for your web and mobile applications"),c()("\u26a1 Progressive Web Applications ( PWA ) in normal and SPA Stacks"),c()("\u26a1 Integration of third party services such as Firebase/ AWS / Digital Ocean")],softwareSkills:[{skillName:"html-5",fontAwesomeClassname:"vscode-icons:file-type-html"},{skillName:"css3",fontAwesomeClassname:"vscode-icons:file-type-css"},{skillName:"sass",fontAwesomeClassname:"logos:sass"},{skillName:"JavaScript",fontAwesomeClassname:"logos:javascript"},{skillName:"TypeScript",fontAwesomeClassname:"logos:typescript-icon"},{skillName:"reactjs",fontAwesomeClassname:"vscode-icons:file-type-reactjs"},{skillName:"nodejs",fontAwesomeClassname:"logos:nodejs-icon"},{skillName:"flutter",fontAwesomeClassname:"logos:flutter"},{skillName:"swift",fontAwesomeClassname:"vscode-icons:file-type-swift"},{skillName:"npm",fontAwesomeClassname:"vscode-icons:file-type-npm"},{skillName:"sql-database",fontAwesomeClassname:"vscode-icons:file-type-sql"},{skillName:"mongoDB",fontAwesomeClassname:"vscode-icons:file-type-mongo"},{skillName:"aws",fontAwesomeClassname:"logos:aws"},{skillName:"firebase",fontAwesomeClassname:"logos:firebase"},{skillName:"python",fontAwesomeClassname:"logos:python"},{skillName:"git",fontAwesomeClassname:"logos:git-icon"},{skillName:"docker",fontAwesomeClassname:"logos:docker-icon"}]},a=[{Stack:"Frontend/Design",progressPercentage:"90"},{Stack:"Backend",progressPercentage:"70"},{Stack:"Programming",progressPercentage:"60"}],o=[{schoolName:"Novosibirsk State Technical University",subHeader:"Master of Science in Computer Science",duration:"September 2014 - April 2017",desc:"Technology of Computer science.",descBullets:["Software Engineering","Project Management"]}],i=[{role:"Web and Mobile developer",company:"Freelancer",companylogo:"/img/icons/common/free.png",date:"Jan 2018 \u2013 May 2020",desc:"Work as freelancer. Full/Part time developer on web site and mobile app development."},{role:"Software Developer",company:"Axamit",companylogo:"/img/icons/common/axamit.png",date:"Sep 2018 \u2013 May 2020",desc:"Update company system and developed custom application for using inner company."},{role:"Software Engineer",company:"ZEBRAINS",companylogo:"/img/icons/common/zebrains.png",date:"Jan 2021 - June 2021",desc:"Maintain project and develop new one with team. in many case, work as Frontend Development."}],s=[{name:"React & Gatsbty",desc:"NFT market place website based on React and Gatsby",link:"https://masterbrews.cards/"},{name:"KhojoDoctor",desc:"Health care system developed with php Laravel",link:"https://khojodoctor.in"},{name:"E-Commerce",desc:"shopping site developed with wordpress",link:"https://store.wacom.jp/"},{name:"WigleNet",desc:"Native Android app. (contribute)",link:"https://play.google.com/store/apps/details?id=net.wigle.wigleandroid"}],l=[{name:"Hassan Mehmood",feedback:"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have."},{name:"Maheen Altaf",feedback:"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job"}]},8581:function(d,u,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(4918)}])},5152:function(d,u,e){d.exports=e(8771)},9008:function(d,u,e){d.exports=e(639)},4134:function(d,u,e){var f=e(1390),c=e(4310);d.exports=function(d,u){var e="function"===typeof u?u:c(u);return f(d,e)}},4310:function(d,u,e){var f=e(7294).createElement,c="undefined"===typeof location?"":"https:"===location.protocol?"https:":"http:",t={height:"1em",width:"1em",margin:"0 .05em 0 .1em",verticalAlign:"-0.1em"};function n(){for(var d={},u=arguments.length,e=0;e<u;++e){var f=arguments[e];if(f)for(var c in f)Object.prototype.hasOwnProperty.call(f,c)&&(d[c]=f[c])}return d}d.exports=function(d){return d=n({protocol:c,baseUrl:"//twemoji.maxcdn.com/2/",size:"72x72",ext:".png",props:null},d),function(u,e,c){var r,a="";return 0!==d.baseUrl.indexOf("http")&&(a+=(r=d.protocol)&&r.length>0&&":"!==r.charAt(r.length-1)?r+":":r),a+=d.baseUrl+d.size+"/"+u+d.ext,f("img",n({key:c,alt:e,draggable:!1,src:a,style:t},d.props))}}},1390:function(d,u,e){var f=e(2008),c=/(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[\xa9\xae\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g;var t=/\uFE0F/g,n=String.fromCharCode(8205);d.exports=function(d,u){return f(d,c,(function(d,e,f){var c,r=function(d,u){for(var e=[],f=0,c=0,t=0;t<d.length;)f=d.charCodeAt(t++),c?(e.push((65536+(c-55296<<10)+(f-56320)).toString(16)),c=0):55296<=f&&f<=56319?c=f:e.push(f.toString(16));return e.join(u||"-")}((c=d).indexOf(n)<0?c.replace(t,""):c);return u(r,d,f)}))}},2008:function(d){function u(d,u,c,t){if("string"!==typeof d)throw new Error("First param must be a string");if("string"!==typeof u&&!(u instanceof RegExp))throw new Error("Second param must be a string pattern or a regular expression");return("string"===typeof u?e:f)(d,u,c,t)}function e(d,u,e,f){var c=d.indexOf(u);if(c>=0){var t=[],n=c+u.length;return c>0&&t.push(d.substring(0,c)),t.push("function"===typeof e?e(d.substring(c,n),c+f,d):e),n<d.length&&t.push(d.substring(n)),t}return[d]}function f(d,u,e,f){var c,t=[],n="function"===typeof e,r=u.lastIndex;u.lastIndex=0;for(var a=0;c=u.exec(d);){var o=c.index;""===c[0]&&u.lastIndex++,o!==a&&t.push(d.substring(a,o)),a=o+c[0].length;var i=n?e.apply(this,c.concat(o+f,c.input)):e;if(t.push(i),!u.global)break}return a<d.length&&t.push(d.substring(a)),u.lastIndex=r,t}d.exports=function(d,e,f){if("string"===typeof d)return u(d,e,f,0);if(Array.isArray(d)&&d[0]){for(var c=d.length,t=[],n=0,r=0;r<c;++r){var a=d[r];"string"===typeof a?(t.push.apply(t,u(a,e,f,n)),n+=a.length):t.push(a)}return t}throw new TypeError("First argument must be an array or non-empty string")}}},function(d){d.O(0,[774,888,179],(function(){return u=8581,d(d.s=u);var u}));var u=d.O();_N_E=u}]);