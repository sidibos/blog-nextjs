(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5960:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>f,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d}),r(5458),r(2029),r(5866);var i=r(3191),n=r(8716),o=r(7922),s=r.n(o),a=r(5231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5458)),"/Users/sidibos/dev/nextjs/blog-nextjs/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2029)),"/Users/sidibos/dev/nextjs/blog-nextjs/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/sidibos/dev/nextjs/blog-nextjs/src/app/page.tsx"],c="/page",f={require:r,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8271:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},8692:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2481,23))},3715:()=>{},2481:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});let i=r(1174),n=r(8374),o=r(326),s=n._(r(7577)),a=i._(r(962)),l=i._(r(815)),d=r(3078),u=r(5248),c=r(1206);r(576);let f=r(131),p=i._(r(6820)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,i,n,o,s){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function h(e){let[t,r]=s.version.split(".",2),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let b=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:a,width:l,decoding:d,className:u,style:c,fetchPriority:f,placeholder:p,loading:m,unoptimized:b,fill:v,onLoadRef:x,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:_,sizesInput:j,onLoad:S,onError:P,...C}=e;return(0,o.jsx)("img",{...C,...h(f),loading:m,width:l,height:a,decoding:d,"data-nimg":v?"fill":"1",className:u,style:c,sizes:n,srcSet:i,src:r,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&g(e,p,x,y,w,b,j))},[r,p,x,y,w,P,b,j,t]),onLoad:e=>{g(e.currentTarget,p,x,y,w,b,j)},onError:e=>{_(!0),"empty"!==p&&w(!0),P&&P(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,i),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let x=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(f.RouterContext),i=(0,s.useContext)(c.ImageConfigContext),n=(0,s.useMemo)(()=>{let e=m||i||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:a,onLoadingComplete:l}=e,g=(0,s.useRef)(a);(0,s.useEffect)(()=>{g.current=a},[a]);let h=(0,s.useRef)(l);(0,s.useEffect)(()=>{h.current=l},[l]);let[x,y]=(0,s.useState)(!1),[w,_]=(0,s.useState)(!1),{props:j,meta:S}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:n,blurComplete:x,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{...j,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:y,setShowAltText:_,sizesInput:e.sizes,ref:t}),S.priority?(0,o.jsx)(v,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3484:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.AmpContext},1157:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.HeadManagerContext},1206:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.ImageConfigContext},8710:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||r&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},3078:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(576);let i=r(380),n=r(5248);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,d,{src:u,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:b,height:v,fill:x=!1,style:y,overrideSrc:w,onLoad:_,onLoadingComplete:j,placeholder:S="empty",blurDataURL:P,fetchPriority:C,layout:z,objectFit:O,objectPosition:E,lazyBoundary:M,lazyRoot:I,...k}=e,{imgConf:A,showAltText:R,blurComplete:N,defaultLoader:D}=t,G=A||n.imageConfigDefault;if("allSizes"in G)a=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);a={...G,allSizes:e,deviceSizes:t}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let q=k.loader||D;delete k.loader,delete k.srcSet;let U="__next_img_default"in q;if(U){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=q;q=t=>{let{config:r,...i}=t;return e(i)}}if(z){"fill"===z&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!c&&(c=t)}let B="",F=s(b),L=s(v);if("object"==typeof(r=u)&&(o(r)||void 0!==r.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,P=P||e.blurDataURL,B=e.src,!x){if(F||L){if(F&&!L){let t=F/e.width;L=Math.round(e.height*t)}else if(!F&&L){let t=L/e.height;F=Math.round(e.width*t)}}else F=e.width,L=e.height}}let T=!p&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:B)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,T=!1),a.unoptimized&&(f=!0),U&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(C="high");let W=s(h),V=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:E}:{},R?{}:{color:"transparent"},y),$=N||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:F,heightInt:L,blurWidth:l,blurHeight:d,blurDataURL:P||"",objectFit:V.objectFit})+'")':'url("'+S+'")',H=$?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:$}:{},Y=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:s,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,s),u=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((e,i)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:a({config:t,src:r,quality:o,width:l[u]})}}({config:a,src:u,unoptimized:f,width:F,quality:W,sizes:c,loader:q});return{props:{...k,loading:T?"lazy":m,fetchPriority:C,width:F,height:L,decoding:"async",className:g,style:{...V,...H},sizes:Y.sizes,srcSet:Y.srcSet,src:w||Y.src},meta:{unoptimized:f,priority:p,placeholder:S,fill:x}}}},815:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return c}});let i=r(1174),n=r(8374),o=r(326),s=n._(r(7577)),a=i._(r(8003)),l=r(3484),d=r(1157),u=r(8710);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(576);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,i={};return n=>{let o=!0,s=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){s=!0;let t=n.key.slice(n.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(n.type){case"title":case"base":t.has(n.type)?o=!1:t.add(n.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(n.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=n.props[t],r=i[t]||new Set;("name"!==t||!s)&&r.has(e)?o=!1:(r.add(e),i[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,s.default.cloneElement(e,t)}return s.default.cloneElement(e,{key:i})})}let g=function(e){let{children:t}=e,r=(0,s.useContext)(l.AmpStateContext),i=(0,s.useContext)(d.HeadManagerContext);return(0,o.jsx)(a.default,{reduceComponentsToState:m,headManager:i,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},380:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:s}=e,a=i?40*i:t,l=n?40*n:r,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5248:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},6820:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},8003:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let i=r(7577),n=()=>{},o=()=>{};function s(e){var t;let{headManager:r,reduceComponentsToState:s}=e;function a(){if(r&&r.mountedInstances){let t=i.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(s(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),a(),n(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),n(()=>(r&&(r._pendingUpdate=a),()=>{r&&(r._pendingUpdate=a)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},8883:e=>{e.exports={text_green:"home_text_green__CYAAw",bg_green:"home_bg_green__TKW9m",fit_content:"home_fit_content__q_uBL"}},221:(e,t,r)=>{"use strict";let{createProxy:i}=r(8570);e.exports=i("/Users/sidibos/dev/nextjs/blog-nextjs/node_modules/next/dist/client/image-component.js")},9241:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(6501);let i=r(5728),n=r(9472);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,d,{src:u,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:b,height:v,fill:x=!1,style:y,overrideSrc:w,onLoad:_,onLoadingComplete:j,placeholder:S="empty",blurDataURL:P,fetchPriority:C,layout:z,objectFit:O,objectPosition:E,lazyBoundary:M,lazyRoot:I,...k}=e,{imgConf:A,showAltText:R,blurComplete:N,defaultLoader:D}=t,G=A||n.imageConfigDefault;if("allSizes"in G)a=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);a={...G,allSizes:e,deviceSizes:t}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let q=k.loader||D;delete k.loader,delete k.srcSet;let U="__next_img_default"in q;if(U){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=q;q=t=>{let{config:r,...i}=t;return e(i)}}if(z){"fill"===z&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!c&&(c=t)}let B="",F=s(b),L=s(v);if("object"==typeof(r=u)&&(o(r)||void 0!==r.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,P=P||e.blurDataURL,B=e.src,!x){if(F||L){if(F&&!L){let t=F/e.width;L=Math.round(e.height*t)}else if(!F&&L){let t=L/e.height;F=Math.round(e.width*t)}}else F=e.width,L=e.height}}let T=!p&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:B)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,T=!1),a.unoptimized&&(f=!0),U&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(C="high");let W=s(h),V=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:E}:{},R?{}:{color:"transparent"},y),$=N||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:F,heightInt:L,blurWidth:l,blurHeight:d,blurDataURL:P||"",objectFit:V.objectFit})+'")':'url("'+S+'")',H=$?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:$}:{},Y=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:s,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,s),u=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((e,i)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:a({config:t,src:r,quality:o,width:l[u]})}}({config:a,src:u,unoptimized:f,width:F,quality:W,sizes:c,loader:q});return{props:{...k,loading:T?"lazy":m,fetchPriority:C,width:F,height:L,decoding:"async",className:g,style:{...V,...H},sizes:Y.sizes,srcSet:Y.srcSet,src:w||Y.src},meta:{unoptimized:f,priority:p,placeholder:S,fill:x}}}},5728:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:s}=e,a=i?40*i:t,l=n?40*n:r,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},9472:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},6794:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return a}});let i=r(3370),n=r(9241),o=r(221),s=i._(r(2049));function a(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=o.Image},2049:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},6501:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},2029:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>s});var i=r(9510),n=r(1553),o=r.n(n);r(3069);let s={title:"Create Next App",description:"Generated by create next app"};function a({children:e}){return i.jsx("html",{lang:"en",children:i.jsx("body",{className:o().className,children:e})})}},5458:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var i=r(9510),n=r(6794),o=r.n(n),s=r(8883),a=r.n(s);function l(){return(0,i.jsxs)("main",{className:"flex items-center justify-center min-h-screen bg-gray-50",children:[i.jsx("div",{className:"container mx-auto p-4 relative",children:(0,i.jsxs)("div",{className:"bg-white border-2 border-emerald-500 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,i.jsxs)("div",{className:"flex flex-col justify-center",children:[i.jsx("h1",{className:`text-4xlfont-bold mb-4 ${a().text_green}`,children:"Welcome to the Blog"}),i.jsx("p",{className:"text-lg text-gray-700 mb-4",children:"Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci."}),i.jsx("a",{href:"/blog/posts",className:`outline outline-1 outline-offset-2 border-emerald-500 text-emerald-500 hover:text-white py-2 px-4 rounded hover:bg-emerald-500 md:w-auto ${a().fit_content}`,children:"Read"})]}),(0,i.jsxs)("div",{className:"relative flex justify-center items-center",children:[i.jsx(o(),{src:"/image-desktop.jpeg",width:1e3,height:760,className:"hidden rounded-lg md:block z-10",alt:"Screenshots of the dashboard project showing desktop version"}),i.jsx(o(),{src:"/image-mobile.jpeg",width:560,height:620,className:"block rounded-md md:hidden",alt:"Screenshot of the dashboard project showing mobile version"})]})]})}),i.jsx("div",{className:`hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0 ${a().bg_green}`})]})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var i=r(6621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,i.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},3069:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[948,863,809],()=>r(5960));module.exports=i})();