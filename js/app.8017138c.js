(function(){var e={4129:function(e){const t=512;async function n(e){let t=document.createElement("video");if(t.setAttribute("autoplay",""),t.setAttribute("muted",""),t.setAttribute("playsinline",""),t.setAttribute("ref","video"),t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.zIndex="-2",navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)return await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:e}}).then((e=>(t.addEventListener("loadedmetadata",(()=>{t.setAttribute("width",t.videoWidth+"px"),t.setAttribute("height",t.videoHeight+"px"),r(t),window.addEventListener("resize",(()=>{r(t)}))})),t.srcObject=e,t))).catch((e=>{throw e}))}function i(e){let n=document.createElement("canvas");n.style.display="none",n.width=t,n.height=e.videoHeight/e.videoWidth*n.width,n.getContext("2d").drawImage(e,0,0,n.width,n.height);let i=n.toDataURL("image/jpeg");return i}function r(e){let t,n,i=e?.parentElement;if(!e||!i)return;const r=e.videoWidth/e.videoHeight,s=i.clientWidth/i.clientHeight;r>s?(n=i.clientHeight,t=n*r):(t=i.clientWidth,n=t/r),e.style.top=-(n-i.clientHeight)/2+"px",e.style.left=-(t-i.clientWidth)/2+"px",e.style.width=t+"px",e.style.height=n+"px"}e.exports={CreateCameraVideo:n,TakePhoto:i}},3861:function(e){const t="#scanningOverlay",n="#loadingOverlay",i=2,r=2,s=.001,a=1e3,o=1;function c(e,c){return new window.MINDAR.IMAGE.MindARThree({container:c,imageTargetSrc:e,uiScanning:t,uiLoading:n,warmupTolerance:i,missTolerance:r,filterMinCF:s,filterBeta:a,maxTrack:o})}function l(e){return new window.MINDAR.FACE.MindARThree({container:e,uiScanning:t,uiLoading:n})}e.exports={MindArTarget:c,MindArFace:l}},9765:function(e,t,n){"use strict";var i=n(9242),r=n(3396);const s={id:"app"};function a(e,t){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(n)])}var o=n(89);const c={},l=(0,o.Z)(c,[["render",a]]);var u=l,h=n(2483);const d={id:"app",ref:"app"},f={id:"container",class:"fixed"},g={id:"unity-canvas",class:"fixed",ref:"uc"},m={id:"videoContainer",class:"fixed",ref:"vc"},p={key:0,id:"NotSupported",class:"fixed"},w={key:1,id:"NotSupported",class:"fixed"},v=(0,r.uE)('<div id="notSupported" class="frc" style="width:80%;"><label class="msg giant mb">:(</label><label class="msg large uc">OOPS!</label><label class="msg large uc">You are using a browser version</label><label class="msg large uc mb">that we do not support.</label><label class="msg middle">Please use the latest version of</label><label class="msg middle">Chrome, Opera, Firefox, or Safari.</label></div>',1),S=[v],y={key:2,id:"loaderMain",class:"fixed"},b=(0,r._)("div",{id:"center"},[(0,r._)("div",{class:"loader"})],-1),A=[b],x={key:3,id:"scanningMain",class:"fixed"},M=(0,r._)("div",{id:"center"},[(0,r._)("div",{class:"loader"})],-1),C=[M];function E(e,t,n,i,s,a){return(0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("button",{onClick:t[0]||(t[0]=e=>a.SetFullscreen(!0)),ref:"fullscreenBtn",id:"fullscreenBtn"}," Fullscreen ",512),(0,r._)("div",f,[(0,r._)("canvas",g,null,512),(0,r._)("div",m,null,512)]),s.ShowBlank?((0,r.wg)(),(0,r.iD)("div",p)):(0,r.kq)("",!0),s.NotSupported?((0,r.wg)(),(0,r.iD)("div",w,S)):(0,r.kq)("",!0),s.ShowLoading?((0,r.wg)(),(0,r.iD)("div",y,A)):(0,r.kq)("",!0),s.ShowScanning?((0,r.wg)(),(0,r.iD)("div",x,C)):(0,r.kq)("",!0)],512)}class F{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}magnitude(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}}class I{constructor(e=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]){this.elements=e}clone(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}decompose(e,t,n){const i=this.elements;let r=new F(i[0],i[1],i[2]).magnitude();const s=new F(i[4],i[5],i[6]).magnitude(),a=new F(i[8],i[9],i[10]).magnitude(),o=this.determinant();o<0&&(r=-r);const c=1/r,l=1/s,u=1/a,h=new I;return h.clone(this),h.elements[0]*=c,h.elements[1]*=c,h.elements[2]*=c,h.elements[4]*=l,h.elements[5]*=l,h.elements[6]*=l,h.elements[8]*=u,h.elements[9]*=u,h.elements[10]*=u,e.set(i[12],i[14],i[13]),n.set(r,s,a),t.setFromRotationMatrix(h),this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],a=e[5],o=e[9],c=e[13],l=e[2],u=e[6],h=e[10],d=e[14],f=e[3],g=e[7],m=e[11],p=e[15];return f*(+r*o*u-i*c*u-r*a*h+n*c*h+i*a*d-n*o*d)+g*(+t*o*d-t*c*h+r*s*h-i*s*d+i*c*l-r*o*l)+m*(+t*c*u-t*a*d-r*s*u+n*s*d+r*a*l-n*c*l)+p*(-i*a*l-t*o*u+t*a*h+i*s*u-n*s*h+n*o*l)}}class T{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10],h=n+a+u;if(h>0){const e=.5/Math.sqrt(h+1);this.x=(l-o)*e,this.y=(s-i)*e,this.z=(r-c)*e,this.w=.25/e}else if(n>a&&n>u){const e=2*Math.sqrt(1+n-a-u);this.x=.25*e,this.y=(r+c)/e,this.z=(i+s)/e,this.w=(l-o)/e}else if(a>u){const e=2*Math.sqrt(1+a-n-u);this.x=(i+s)/e,this.y=(o+l)/e,this.z=.25*e,this.w=(r-c)/e}else{const e=2*Math.sqrt(1+u-n-a);this.x=(r+c)/e,this.y=.25*e,this.z=(o+l)/e,this.w=(s-i)/e}return this.x*=-1,this}}class k{constructor(){}isValid(){}}class O extends k{constructor(e,t,n,i=60,r=[]){super(),e||(e=new F),t||(e=new T),n||(e=new F),this.position=e,this.rotation=t,this.scale=n,this.camerFOV=i,this.faceMeshData=r.join()}isValid(){return!!(this.position&&this.rotation&&this.scale&&this.camerFOV&&this.faceMeshData)}}class _ extends k{constructor(e,t,n,i=60){super(),e||(e=new F),t||(e=new T),n||(e=new F),this.position=e,this.rotation=t,this.scale=n,this.camerFOV=i}isValid(){return!!(this.position&&this.rotation&&this.scale&&this.camerFOV)}}let P,L,R,H;function z(e){R=e.Module,P=e.Module.cwrap("call_cb_vtt",null,["number","number","number","number"]),L=e.Module.cwrap("call_cb_vft",null,["number","number","number","number","string"])}function D(e,t){t.SendMessage(e,"StartTracking")}function N(e,t,n,i,r,s){j(e,t,n,i,r,s)}function V(e,t){t.SendMessage(e,"StopTracking")}function j(e,t,n,i,r,s){let a=new O(t,n,i,r,s);if(a.isValid()){if(e){var o=R._malloc(40),c=o>>2;R.HEAPF32[c]=a.position.x,R.HEAPF32[c+1]=a.position.y,R.HEAPF32[c+2]=a.position.z,R.HEAPF32[c+3]=a.rotation.x,R.HEAPF32[c+4]=a.rotation.y,R.HEAPF32[c+5]=a.rotation.z,R.HEAPF32[c+6]=a.rotation.w,R.HEAPF32[c+7]=a.scale.x,R.HEAPF32[c+8]=a.scale.y,R.HEAPF32[c+9]=a.scale.z,L(o,o+12,o+28,a.camerFOV,a.faceMeshData),R._free(o)}}else console.error("Face transform is invalid!")}function U(e,t){t.SendMessage(e,"StartTracking")}function B(e,t,n,i,r){G(e,t,n,i,r)}function q(e,t){t.SendMessage(e,"StopTracking")}function G(e,t,n,i,r){let s=new _(t,n,i,r);if(s.isValid()){if(e){var a=R._malloc(40),o=a>>2;R.HEAPF32[o]=s.position.x,R.HEAPF32[o+1]=s.position.y,R.HEAPF32[o+2]=s.position.z,R.HEAPF32[o+3]=s.rotation.x,R.HEAPF32[o+4]=s.rotation.y,R.HEAPF32[o+5]=s.rotation.z,R.HEAPF32[o+6]=s.rotation.w,R.HEAPF32[o+7]=s.scale.x,R.HEAPF32[o+8]=s.scale.y,R.HEAPF32[o+9]=s.scale.z,P(a,a+12,a+28,s.camerFOV),R._free(a)}}else console.error("Target transform is invalid!")}function W(e,t,n){t.SendMessage(e,"SceneLoadedEvent",n)}function $(e,t){var n="./Build",i=n+"/mi_broeser_issue.loader.js",r={dataUrl:n+"/mi_broeser_issue.data",frameworkUrl:n+"/mi_broeser_issue.framework.js",codeUrl:n+"/mi_broeser_issue.wasm",streamingAssetsUrl:"StreamingAssets",companyName:"DefaultCompany",productName:"ar-unity-renderer-scene",productVersion:"1.0"};e.width=window.innerWidth,e.height=window.innerHeight;var s=document.createElement("script");s.src=i,s.onload=()=>{createUnityInstance(e,r).then((e=>{H=e,z(e),t(e)})).catch((e=>{}))},e.appendChild(s)}function Y(e){U(e,H)}function Z(e,t){te(e,((e,n,i)=>{B(H,e,n,i,t)}))}function K(e){q(e,H)}function J(e){D(e,H)}function Q(e,t,n){te(e,((e,i,r)=>{N(H,e,i,r,t,n)}))}function X(e){V(e,H)}function ee(e,t){W(e,H,t)}function te(e,t){const n=new I(e),i=new F,r=new T,s=new F;return n.decompose(i,r,s),t(i,r,s)}var ne=n(4129);class ie{constructor(e,t){this.controller=t,this.sceneIndex=e,this.isTargetVisible=!1,this.start=null,this.stop=null}}var re=n(3861);class se extends ie{constructor(e,t){super(e,t),this.targets=null}Initialize(e){this.targets=e}async CreateMindAr(e){return this.mindARContainer=e,await n.e(528).then(n.t.bind(n,5528,23)).then((async()=>{let e=(0,re.MindArTarget)(this.targets,this.mindARContainer);this.mindAr=e,e.addAnchor(0);let t=e.renderer,n=e.scene,i=e.camera;this.start=async()=>{e.imageTargetSrc=this.targets,await e.start(),e.anchors[0].group.visible=!1,t.setAnimationLoop((()=>{t.render(n,i),this.CheckTarget(e)})),ee(this.controller,Number(this.sceneIndex))},this.stop=async()=>{K(this.controller),await e.stop(),this.mindARContainer.remove(),t.setAnimationLoop(null)}}))}CheckTarget(e){let t=e.container.offsetWidth/e.container.offsetHeight,n=t<4/3?e.camera.fov:e.camera.fov*(4/3)/t,i=e.anchors[0];if(i.group.visible){let e=i.group.matrix.elements;this.isTargetVisible||(this.isTargetVisible=!0,Y(this.controller)),Z(e,n)}else this.isTargetVisible&&(this.isTargetVisible=!1,K(this.controller))}}class ae extends ie{constructor(e,t){super(e,t)}Initialize(){}async CreateMindAr(e){return this.mindARContainer=e,await n.e(816).then(n.t.bind(n,9816,23)).then((async()=>{let t=(0,re.MindArFace)(this.mindARContainer=e);this.mindAr=t;let n=t.addFaceMesh();t.addAnchor(0);let i=t.renderer,r=t.scene,s=t.camera;this.start=async()=>{await t.start(),i.setAnimationLoop((()=>{i.render(r,s),this.CheckTarget(t,n.geometry.positions)})),ee(this.controller,Number(this.sceneIndex))},this.stop=async()=>{X(this.controller),await t.stop(),this.mindARContainer.remove(),i.setAnimationLoop(null)}}))}CheckTarget(e,t){let n=e.container.offsetWidth/e.container.offsetHeight,i=n<4/3?e.camera.fov:e.camera.fov*(4/3)/n,r=e.anchors[0];if(r.group.visible){let e=r.group.matrix.elements;this.isTargetVisible||(this.isTargetVisible=!0,J(this.controller)),Q(e,i,t)}else this.isTargetVisible&&(this.isTargetVisible=!1,X(this.controller))}}n(7658),n(4200);const oe=new window.MINDAR.IMAGE.Compiler;async function ce(e){const t=[];for(let r=0;r<e.length;r++){let n=await le(e[r]);t.push(n)}await oe.compileImageTargets(t,(e=>{console.log(e)}));const n=await oe.exportData();let i=ue(n);return i}async function le(e){return new Promise(((t,n)=>{let i=new Image;i.onload=()=>t(i),i.onerror=n,i.src=e}))}function ue(e){var t=new Blob([e]),n=window.document.createElement("a");return n.download="targets.mind",n.href=window.URL.createObjectURL(t),n.href}class he{constructor(e,t,n){this.unityContainer=e,this.videoContainer=t,this.mindARContainerId=n.mindARContainerId,this.showLoadingIndicator=n.ShowLoadingIndicator,this.showScanningIndicator=n.ShowScanningIndicator,this.video=null,this.scenes={},this.faceScene=null,this.targetScene=null,this.currentScene=null,window.SCENE_LOADER=this}async LoadScene(e,t,n,i){this.showLoadingIndicator(!0);let r={sceneType:e,sceneIndex:Number(t),controller:n};switch(e){case"face":break;case"image":r.targets=null,r.targetImg=i;break;case"surface":r.targets=null,r.targetImg=null;break;default:throw new Error(`${e} is not correct scene type!`)}this.scenes[r.sceneIndex]||(this.scenes[r.sceneIndex]=r),this.DisplayScene(this.scenes[r.sceneIndex])}async DisplayScene(e){if(null!==this.currentScene)switch(this.currentScene.sceneType){case"face":this.faceScene?.stop&&await this.faceScene.stop();break;case"surface":case"image":this.targetScene?.stop&&await this.targetScene.stop();break;default:}let t;switch(this.currentScene=e,e.sceneType){case"face":t=this.faceScene,t||(t=await this.CreateScene(this.currentScene)),t.Initialize();break;case"image":t=this.targetScene,t?(null===this.currentScene.targets&&await this.GenerateTargetForScene(this.currentScene),t.Initialize(this.currentScene.targets)):t=await this.CreateScene(this.currentScene);break;case"surface":if(null===this.currentScene.targetImg)return this.SetupSurfaceRecognition(),void this.showLoadingIndicator(!1);t=this.targetScene,t?(null===this.currentScene.targets&&await this.GenerateTargetForScene(this.currentScene),t.Initialize(this.currentScene.targets)):t=await this.CreateScene(this.currentScene);break;default:}this.StartScene(t)}async StartScene(e){e.start&&e.mindARContainer&&(this.unityContainer.parentElement.appendChild(e.mindARContainer),await e.start(),await setTimeout((()=>{}),200),this.videoContainer.style.display="none"),this.showScanningIndicator(!1),this.showLoadingIndicator(!1)}async ReloadScene(){if(null!==this.currentScene){let e;switch(this.showLoadingIndicator(!0),this.currentScene.sceneType){case"face":e=this.faceScene;break;case"surface":case"image":e=this.targetScene;break}await e.stop(),this.StartScene(e)}}async CreateScene(e){let t,n=this.CreateMindArContainer();switch(e.sceneType){case"face":n.style.transform="scale(-1, 1)",t=new ae(e.sceneIndex,e.controller),this.faceScene=t;break;case"image":n.style.transform="scale(1, 1)",t=new se(e.sceneIndex,e.controller),console.warn(e),await this.GenerateTargetForScene(e),t.Initialize(e.targets),this.targetScene=t;break;case"surface":n.style.transform="scale(1, 1)",t=new se(e.sceneIndex,e.controller),null===e.targets&&await this.GenerateTargetForScene(e),t.Initialize(e.targets),this.targetScene=t;break;default:}return await t.CreateMindAr(n),t}async SetupSurfaceRecognition(){if(this.videoContainer.style.transform="scale(1, 1)",this.videoContainer.style.display="block",null==this.video){let e=await(0,ne.CreateCameraVideo)("environment");this.video=e,this.videoContainer.appendChild(this.video)}}async GenerateTargetForScene(e){let t;t="surface"===e.sceneType?await ce([e.targetImg]):await ce([`./Targets/${e.targetImg}.png`]),e.targets=t}async ScanSurface(e){e=Number(e),this.currentScene.sceneIndex===e&&(this.showScanningIndicator(!0),this.currentScene.targetImg=(0,ne.TakePhoto)(this.video),await this.GenerateTargetForScene(this.currentScene),this.DisplayScene(this.currentScene))}CreateMindArContainer(){let e=document.createElement("div");return e.setAttribute("id","mindArContainer"),e.setAttribute("class","fixed"),e}}var de={name:"App",data(){return{isFullscreen:!1,sceneLoader:null,ShowLoading:!0,ShowScanning:!1,NotSupported:!1,ShowBlank:!0}},mounted(){this.CheckBrowserSupport((()=>{this.Initialization()}))},methods:{async CheckBrowserSupport(e){let t=this;var n=function(){t.ShowBlank=!1,e()},i=function(){t.NotSupported=!0,t.ShowBlank=!1};navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,navigator.getUserMedia?navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then((function(){n()})).catch((function(){i()})):i()},async ReloadScene(){this.sceneLoader.ReloadScene()},async Initialization(){let e=this.$refs.uc,t=this.$refs.vc;this.sceneLoader=new he(e,t,this);let n=this;window.addEventListener("orientationchange",(function(){n.ReloadScene()}),!1),$(e,(()=>{setTimeout((()=>{this.$refs.fullscreenBtn&&this.$refs.fullscreenBtn.remove()}),10500)}))},SetFullscreen(e){this.$refs.fullscreenBtn.remove(),e?this.$refs.app.requestFullscreen().then((()=>{this.isFullscreen=!0})).catch((e=>{console.error(e)})):document.exitFullscreen().then((()=>{this.isFullscreen=!1})).catch((e=>{console.error(e)}))},ShowLoadingIndicator(e){this.ShowLoading=e},ShowScanningIndicator(e){this.ShowScanning=e}}};const fe=(0,o.Z)(de,[["render",E]]);var ge=fe;const me=h.p7({history:h.r5(),routes:[{path:"/:id?",component:ge}]});(0,i.ri)(u).use(me).mount("#app")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,s){if(!i){var a=1/0;for(u=0;u<e.length;u++){i=e[u][0],r=e[u][1],s=e[u][2];for(var o=!0,c=0;c<i.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(o=!1,s<a&&(a=s));if(o){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[i,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(i,r){if(1&r&&(i=this(i)),8&r)return i;if("object"===typeof i&&i){if(4&r&&i.__esModule)return i;if(16&r&&"function"===typeof i.then)return i}var s=Object.create(null);n.r(s);var a={};e=e||[null,t({}),t([]),t(t)];for(var o=2&r&&i;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((function(e){a[e]=function(){return i[e]}}));return a["default"]=function(){return i},n.d(s,a),s}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{528:"55705571",816:"9fd8e268"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ar-unity-renderer:";n.l=function(i,r,s,a){if(e[i])e[i].push(r);else{var o,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var h=l[u];if(h.getAttribute("src")==i||h.getAttribute("data-webpack")==t+s){o=h;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",t+s),o.src=i),e[i]=[r];var d=function(t,n){o.onerror=o.onload=null,clearTimeout(f);var r=e[i];if(delete e[i],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={143:0};n.f.j=function(t,i){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var s=new Promise((function(n,i){r=e[t]=[n,i]}));i.push(r[2]=s);var a=n.p+n.u(t),o=new Error,c=function(i){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;o.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",o.name="ChunkLoadError",o.type=s,o.request=a,r[1](o)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,s,a=i[0],o=i[1],c=i[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(c)var u=c(n)}for(t&&t(i);l<a.length;l++)s=a[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},i=self["webpackChunkar_unity_renderer"]=self["webpackChunkar_unity_renderer"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(9765)}));i=n.O(i)})();
//# sourceMappingURL=app.8017138c.js.map
