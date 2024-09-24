!function(f){window.WebVRPolyfill = f()}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(_dereq_,module,exports){"use strict";function Events(){}function EE(fn,context,once){this.fn=fn,this.context=context,this.once=once||!1}function EventEmitter(){this._events=new Events,this._eventsCount=0}var has=Object.prototype.hasOwnProperty,prefix="~";Object.create&&(Events.prototype=Object.create(null),(new Events).__proto__||(prefix=!1)),EventEmitter.prototype.eventNames=function(){var events,name,names=[];if(0===this._eventsCount)return names;for(name in events=this._events)has.call(events,name)&&names.push(prefix?name.slice(1):name);return Object.getOwnPropertySymbols?names.concat(Object.getOwnPropertySymbols(events)):names},EventEmitter.prototype.listeners=function(event,exists){var evt=prefix?prefix+event:event,available=this._events[evt];if(exists)return!!available;if(!available)return[];if(available.fn)return[available.fn];for(var i=0,l=available.length,ee=new Array(l);l>i;i++)ee[i]=available[i].fn;return ee},EventEmitter.prototype.emit=function(event,a1,a2,a3,a4,a5){var evt=prefix?prefix+event:event;if(!this._events[evt])return!1;var args,i,listeners=this._events[evt],len=arguments.length;if(listeners.fn){switch(listeners.once&&this.removeListener(event,listeners.fn,void 0,!0),len){case 1:return listeners.fn.call(listeners.context),!0;case 2:return listeners.fn.call(listeners.context,a1),!0;case 3:return listeners.fn.call(listeners.context,a1,a2),!0;case 4:return listeners.fn.call(listeners.context,a1,a2,a3),!0;case 5:return listeners.fn.call(listeners.context,a1,a2,a3,a4),!0;case 6:return listeners.fn.call(listeners.context,a1,a2,a3,a4,a5),!0}for(i=1,args=new Array(len-1);len>i;i++)args[i-1]=arguments[i];listeners.fn.apply(listeners.context,args)}else{var j,length=listeners.length;for(i=0;length>i;i++)switch(listeners[i].once&&this.removeListener(event,listeners[i].fn,void 0,!0),len){case 1:listeners[i].fn.call(listeners[i].context);break;case 2:listeners[i].fn.call(listeners[i].context,a1);break;case 3:listeners[i].fn.call(listeners[i].context,a1,a2);break;case 4:listeners[i].fn.call(listeners[i].context,a1,a2,a3);break;default:if(!args)for(j=1,args=new Array(len-1);len>j;j++)args[j-1]=arguments[j];listeners[i].fn.apply(listeners[i].context,args)}}return!0},EventEmitter.prototype.on=function(event,fn,context){var listener=new EE(fn,context||this),evt=prefix?prefix+event:event;return this._events[evt]?this._events[evt].fn?this._events[evt]=[this._events[evt],listener]:this._events[evt].push(listener):(this._events[evt]=listener,this._eventsCount++),this},EventEmitter.prototype.once=function(event,fn,context){var listener=new EE(fn,context||this,!0),evt=prefix?prefix+event:event;return this._events[evt]?this._events[evt].fn?this._events[evt]=[this._events[evt],listener]:this._events[evt].push(listener):(this._events[evt]=listener,this._eventsCount++),this},EventEmitter.prototype.removeListener=function(event,fn,context,once){var evt=prefix?prefix+event:event;if(!this._events[evt])return this;if(!fn)return 0===--this._eventsCount?this._events=new Events:delete this._events[evt],this;var listeners=this._events[evt];if(listeners.fn)listeners.fn!==fn||once&&!listeners.once||context&&listeners.context!==context||(0===--this._eventsCount?this._events=new Events:delete this._events[evt]);else{for(var i=0,events=[],length=listeners.length;length>i;i++)(listeners[i].fn!==fn||once&&!listeners[i].once||context&&listeners[i].context!==context)&&events.push(listeners[i]);events.length?this._events[evt]=1===events.length?events[0]:events:0===--this._eventsCount?this._events=new Events:delete this._events[evt]}return this},EventEmitter.prototype.removeAllListeners=function(event){var evt;return event?(evt=prefix?prefix+event:event,this._events[evt]&&(0===--this._eventsCount?this._events=new Events:delete this._events[evt])):(this._events=new Events,this._eventsCount=0),this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,EventEmitter.prototype.addListener=EventEmitter.prototype.on,EventEmitter.prototype.setMaxListeners=function(){return this},EventEmitter.prefixed=prefix,EventEmitter.EventEmitter=EventEmitter,"undefined"!=typeof module&&(module.exports=EventEmitter)},{}],2:[function(_dereq_,module,exports){"use strict";function toObject(val){if(null===val||void 0===val)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(val)}function shouldUseNative(){try{if(!Object.assign)return!1;var test1=new String("abc");if(test1[5]="de","5"===Object.getOwnPropertyNames(test1)[0])return!1;for(var test2={},i=0;10>i;i++)test2["_"+String.fromCharCode(i)]=i;var order2=Object.getOwnPropertyNames(test2).map(function(n){return test2[n]});if("0123456789"!==order2.join(""))return!1;var test3={};return"abcdefghijklmnopqrst".split("").forEach(function(letter){test3[letter]=letter}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},test3)).join("")?!1:!0}catch(err){return!1}}var getOwnPropertySymbols=Object.getOwnPropertySymbols,hasOwnProperty=Object.prototype.hasOwnProperty,propIsEnumerable=Object.prototype.propertyIsEnumerable;module.exports=shouldUseNative()?Object.assign:function(target,source){for(var from,symbols,to=toObject(target),s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from)hasOwnProperty.call(from,key)&&(to[key]=from[key]);if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++)propIsEnumerable.call(from,symbols[i])&&(to[symbols[i]]=from[symbols[i]])}}return to}},{}],3:[function(_dereq_,module,exports){function VRFrameData(){this.leftProjectionMatrix=new Float32Array(16),this.leftViewMatrix=new Float32Array(16),this.rightProjectionMatrix=new Float32Array(16),this.rightViewMatrix=new Float32Array(16),this.pose=null}function VRDisplay(){this.isPolyfilled=!0,this.displayId=nextDisplayId++,this.displayName="webvr-polyfill displayName",this.depthNear=.01,this.depthFar=1e4,this.isConnected=!0,this.isPresenting=!1,this.capabilities={hasPosition:!1,hasOrientation:!1,hasExternalDisplay:!1,canPresent:!1,maxLayers:1},this.stageParameters=null,this.waitingForPresent_=!1,this.layer_=null,this.fullscreenElement_=null,this.fullscreenWrapper_=null,this.fullscreenElementCachedStyle_=null,this.fullscreenEventTarget_=null,this.fullscreenChangeHandler_=null,this.fullscreenErrorHandler_=null}function VRDevice(){this.isPolyfilled=!0,this.hardwareUnitId="webvr-polyfill hardwareUnitId",this.deviceId="webvr-polyfill deviceId",this.deviceName="webvr-polyfill deviceName"}function HMDVRDevice(){}function PositionSensorVRDevice(){}var Util=_dereq_("./util.js"),nextDisplayId=1e3,hasShowDeprecationWarning=!1,defaultLeftBounds=[0,0,.5,1],defaultRightBounds=[.5,0,.5,1];VRDisplay.prototype.getFrameData=function(frameData){return Util.frameDataFromPose(frameData,this.getPose(),this)},VRDisplay.prototype.getPose=function(){return this.getImmediatePose()},VRDisplay.prototype.requestAnimationFrame=function(callback){return window.requestAnimationFrame(callback)},VRDisplay.prototype.cancelAnimationFrame=function(id){return window.cancelAnimationFrame(id)},VRDisplay.prototype.wrapForFullscreen=function(element){function applyFullscreenElementStyle(){if(self.fullscreenElement_){var cssProperties=["position: absolute","top: 0","left: 0","width: "+Math.max(screen.width,screen.height)+"px","height: "+Math.min(screen.height,screen.width)+"px","border: 0","margin: 0","padding: 0"];self.fullscreenElement_.setAttribute("style",cssProperties.join("; ")+";")}}if(Util.isIOS())return element;if(!this.fullscreenWrapper_){this.fullscreenWrapper_=document.createElement("div");var cssProperties=["height: "+Math.min(screen.height,screen.width)+"px !important","top: 0 !important","left: 0 !important","right: 0 !important","border: 0","margin: 0","padding: 0","z-index: 999999 !important","position: fixed"];this.fullscreenWrapper_.setAttribute("style",cssProperties.join("; ")+";"),this.fullscreenWrapper_.classList.add("webvr-polyfill-fullscreen-wrapper")}if(this.fullscreenElement_==element)return this.fullscreenWrapper_;this.removeFullscreenWrapper(),this.fullscreenElement_=element;var parent=this.fullscreenElement_.parentElement;parent.insertBefore(this.fullscreenWrapper_,this.fullscreenElement_),parent.removeChild(this.fullscreenElement_),this.fullscreenWrapper_.insertBefore(this.fullscreenElement_,this.fullscreenWrapper_.firstChild),this.fullscreenElementCachedStyle_=this.fullscreenElement_.getAttribute("style");var self=this;return applyFullscreenElementStyle(),this.fullscreenWrapper_},VRDisplay.prototype.removeFullscreenWrapper=function(){if(this.fullscreenElement_){var element=this.fullscreenElement_;this.fullscreenElementCachedStyle_?element.setAttribute("style",this.fullscreenElementCachedStyle_):element.removeAttribute("style"),this.fullscreenElement_=null,this.fullscreenElementCachedStyle_=null;var parent=this.fullscreenWrapper_.parentElement;return this.fullscreenWrapper_.removeChild(element),parent.insertBefore(element,this.fullscreenWrapper_),parent.removeChild(this.fullscreenWrapper_),element}},VRDisplay.prototype.requestPresent=function(layers){var wasPresenting=this.isPresenting,self=this;return layers instanceof Array||(hasShowDeprecationWarning||(console.warn("Using a deprecated form of requestPresent. Should pass in an array of VRLayers."),hasShowDeprecationWarning=!0),layers=[layers]),new Promise(function(resolve,reject){function onFullscreenChange(){var actualFullscreenElement=Util.getFullscreenElement();self.isPresenting=fullscreenElement===actualFullscreenElement,self.isPresenting?(WebVRConfig.LOCK_ORIENTATION!==!1&&screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape-primary")["catch"](function(error){console.error("screen.orientation.lock() failed due to",error.message)}),self.waitingForPresent_=!1,self.beginPresent_(),resolve()):(WebVRConfig.LOCK_ORIENTATION!==!1&&screen.orientation&&screen.orientation.unlock&&screen.orientation.unlock(),self.removeFullscreenWrapper(),self.endPresent_(),self.removeFullscreenListeners_()),self.fireVRDisplayPresentChange_()}function onFullscreenError(){self.waitingForPresent_&&(self.removeFullscreenWrapper(),self.removeFullscreenListeners_(),self.waitingForPresent_=!1,self.isPresenting=!1,reject(new Error("Unable to present.")))}if(!self.capabilities.canPresent)return void reject(new Error("VRDisplay is not capable of presenting."));if(0==layers.length||layers.length>self.capabilities.maxLayers)return void reject(new Error("Invalid number of layers."));var incomingLayer=layers[0];if(!incomingLayer.source)return void resolve();var leftBounds=incomingLayer.leftBounds||defaultLeftBounds,rightBounds=incomingLayer.rightBounds||defaultRightBounds;if(wasPresenting){var layer=self.layer_;layer.source!==incomingLayer.source&&(layer.source=incomingLayer.source);for(var i=0;4>i;i++)layer.leftBounds[i]!==leftBounds[i]&&(layer.leftBounds[i]=leftBounds[i]),layer.rightBounds[i]!==rightBounds[i]&&(layer.rightBounds[i]=rightBounds[i]);return void resolve()}if(self.layer_={predistorted:incomingLayer.predistorted,source:incomingLayer.source,leftBounds:leftBounds.slice(0),rightBounds:rightBounds.slice(0)},self.waitingForPresent_=!1,self.layer_&&self.layer_.source){var fullscreenElement=self.wrapForFullscreen(self.layer_.source);self.addFullscreenListeners_(fullscreenElement,onFullscreenChange,onFullscreenError),Util.requestFullscreen(fullscreenElement)?self.waitingForPresent_=!0:Util.isIOS()&&(self.isPresenting=!0,self.beginPresent_(),self.fireVRDisplayPresentChange_(),resolve())}self.waitingForPresent_||Util.isIOS()||(Util.exitFullscreen(),reject(new Error("Unable to present.")))})},VRDisplay.prototype.exitPresent=function(){var wasPresenting=this.isPresenting,self=this;return this.isPresenting=!1,this.layer_=null,new Promise(function(resolve,reject){wasPresenting?(!Util.exitFullscreen()&&Util.isIOS()&&(self.endPresent_(),self.fireVRDisplayPresentChange_()),resolve()):reject(new Error("Was not presenting to VRDisplay."))})},VRDisplay.prototype.getLayers=function(){return this.layer_?[this.layer_]:[]},VRDisplay.prototype.fireVRDisplayPresentChange_=function(){var event=new CustomEvent("vrdisplaypresentchange",{detail:{display:this}});window.dispatchEvent(event)},VRDisplay.prototype.addFullscreenListeners_=function(element,changeHandler,errorHandler){this.removeFullscreenListeners_(),this.fullscreenEventTarget_=element,this.fullscreenChangeHandler_=changeHandler,this.fullscreenErrorHandler_=errorHandler,changeHandler&&(document.fullscreenEnabled?element.addEventListener("fullscreenchange",changeHandler,!1):document.webkitFullscreenEnabled?element.addEventListener("webkitfullscreenchange",changeHandler,!1):document.mozFullScreenEnabled?document.addEventListener("mozfullscreenchange",changeHandler,!1):document.msFullscreenEnabled&&element.addEventListener("msfullscreenchange",changeHandler,!1)),errorHandler&&(document.fullscreenEnabled?element.addEventListener("fullscreenerror",errorHandler,!1):document.webkitFullscreenEnabled?element.addEventListener("webkitfullscreenerror",errorHandler,!1):document.mozFullScreenEnabled?document.addEventListener("mozfullscreenerror",errorHandler,!1):document.msFullscreenEnabled&&element.addEventListener("msfullscreenerror",errorHandler,!1))},VRDisplay.prototype.removeFullscreenListeners_=function(){if(this.fullscreenEventTarget_){var element=this.fullscreenEventTarget_;if(this.fullscreenChangeHandler_){var changeHandler=this.fullscreenChangeHandler_;element.removeEventListener("fullscreenchange",changeHandler,!1),element.removeEventListener("webkitfullscreenchange",changeHandler,!1),document.removeEventListener("mozfullscreenchange",changeHandler,!1),element.removeEventListener("msfullscreenchange",changeHandler,!1)}if(this.fullscreenErrorHandler_){var errorHandler=this.fullscreenErrorHandler_;element.removeEventListener("fullscreenerror",errorHandler,!1),element.removeEventListener("webkitfullscreenerror",errorHandler,!1),document.removeEventListener("mozfullscreenerror",errorHandler,!1),element.removeEventListener("msfullscreenerror",errorHandler,!1)}this.fullscreenEventTarget_=null,this.fullscreenChangeHandler_=null,this.fullscreenErrorHandler_=null}},VRDisplay.prototype.beginPresent_=function(){},VRDisplay.prototype.endPresent_=function(){},VRDisplay.prototype.submitFrame=function(pose){},VRDisplay.prototype.getEyeParameters=function(whichEye){return null},HMDVRDevice.prototype=new VRDevice,PositionSensorVRDevice.prototype=new VRDevice,module.exports.VRFrameData=VRFrameData,module.exports.VRDisplay=VRDisplay,module.exports.VRDevice=VRDevice,module.exports.HMDVRDevice=HMDVRDevice,module.exports.PositionSensorVRDevice=PositionSensorVRDevice},{"./util.js":21}],4:[function(_dereq_,module,exports){function CardboardDistorter(gl){this.gl=gl,this.ctxAttribs=gl.getContextAttributes(),this.meshWidth=20,this.meshHeight=20,this.bufferScale=WebVRConfig.BUFFER_SCALE,this.bufferWidth=gl.drawingBufferWidth,this.bufferHeight=gl.drawingBufferHeight,this.realBindFramebuffer=gl.bindFramebuffer,this.realEnable=gl.enable,this.realDisable=gl.disable,this.realColorMask=gl.colorMask,this.realClearColor=gl.clearColor,this.realViewport=gl.viewport,Util.isIOS()||(this.realCanvasWidth=Object.getOwnPropertyDescriptor(gl.canvas.__proto__,"width"),this.realCanvasHeight=Object.getOwnPropertyDescriptor(gl.canvas.__proto__,"height")),this.isPatched=!1,this.lastBoundFramebuffer=null,this.cullFace=!1,this.depthTest=!1,this.blend=!1,this.scissorTest=!1,this.stencilTest=!1,this.viewport=[0,0,0,0],this.colorMask=[!0,!0,!0,!0],this.clearColor=[0,0,0,0],this.attribs={position:0,texCoord:1},this.program=Util.linkProgram(gl,distortionVS,distortionFS,this.attribs),this.uniforms=Util.getProgramUniforms(gl,this.program),this.viewportOffsetScale=new Float32Array(8),this.setTextureBounds(),this.vertexBuffer=gl.createBuffer(),this.indexBuffer=gl.createBuffer(),this.indexCount=0,this.renderTarget=gl.createTexture(),this.framebuffer=gl.createFramebuffer(),this.depthStencilBuffer=null,this.depthBuffer=null,this.stencilBuffer=null,this.ctxAttribs.depth&&this.ctxAttribs.stencil?this.depthStencilBuffer=gl.createRenderbuffer():this.ctxAttribs.depth?this.depthBuffer=gl.createRenderbuffer():this.ctxAttribs.stencil&&(this.stencilBuffer=gl.createRenderbuffer()),this.patch(),this.onResize(),WebVRConfig.CARDBOARD_UI_DISABLED||(this.cardboardUI=new CardboardUI(gl))}var CardboardUI=_dereq_("./cardboard-ui.js"),Util=_dereq_("./util.js"),WGLUPreserveGLState=_dereq_("./deps/wglu-preserve-state.js"),distortionVS=["attribute vec2 position;","attribute vec3 texCoord;","varying vec2 vTexCoord;","uniform vec4 viewportOffsetScale[2];","void main() {","  vec4 viewport = viewportOffsetScale[int(texCoord.z)];","  vTexCoord = (texCoord.xy * viewport.zw) + viewport.xy;","  gl_Position = vec4( position, 1.0, 1.0 );","}"].join("\n"),distortionFS=["precision mediump float;","uniform sampler2D diffuse;","varying vec2 vTexCoord;","void main() {","  gl_FragColor = texture2D(diffuse, vTexCoord);","}"].join("\n");CardboardDistorter.prototype.destroy=function(){var gl=this.gl;this.unpatch(),gl.deleteProgram(this.program),gl.deleteBuffer(this.vertexBuffer),gl.deleteBuffer(this.indexBuffer),gl.deleteTexture(this.renderTarget),gl.deleteFramebuffer(this.framebuffer),this.depthStencilBuffer&&gl.deleteRenderbuffer(this.depthStencilBuffer),this.depthBuffer&&gl.deleteRenderbuffer(this.depthBuffer),this.stencilBuffer&&gl.deleteRenderbuffer(this.stencilBuffer),this.cardboardUI&&this.cardboardUI.destroy()},CardboardDistorter.prototype.onResize=function(){var gl=this.gl,self=this,glState=[gl.RENDERBUFFER_BINDING,gl.TEXTURE_BINDING_2D,gl.TEXTURE0];WGLUPreserveGLState(gl,glState,function(gl){self.realBindFramebuffer.call(gl,gl.FRAMEBUFFER,null),self.scissorTest&&self.realDisable.call(gl,gl.SCISSOR_TEST),self.realColorMask.call(gl,!0,!0,!0,!0),self.realViewport.call(gl,0,0,gl.drawingBufferWidth,gl.drawingBufferHeight),self.realClearColor.call(gl,0,0,0,1),gl.clear(gl.COLOR_BUFFER_BIT),self.realBindFramebuffer.call(gl,gl.FRAMEBUFFER,self.framebuffer),gl.bindTexture(gl.TEXTURE_2D,self.renderTarget),gl.texImage2D(gl.TEXTURE_2D,0,self.ctxAttribs.alpha?gl.RGBA:gl.RGB,self.bufferWidth,self.bufferHeight,0,self.ctxAttribs.alpha?gl.RGBA:gl.RGB,gl.UNSIGNED_BYTE,null),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE),gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,self.renderTarget,0),self.ctxAttribs.depth&&self.ctxAttribs.stencil?(gl.bindRenderbuffer(gl.RENDERBUFFER,self.depthStencilBuffer),gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_STENCIL,self.bufferWidth,self.bufferHeight),gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_STENCIL_ATTACHMENT,gl.RENDERBUFFER,self.depthStencilBuffer)):self.ctxAttribs.depth?(gl.bindRenderbuffer(gl.RENDERBUFFER,self.depthBuffer),gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,self.bufferWidth,self.bufferHeight),gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,self.depthBuffer)):self.ctxAttribs.stencil&&(gl.bindRenderbuffer(gl.RENDERBUFFER,self.stencilBuffer),gl.renderbufferStorage(gl.RENDERBUFFER,gl.STENCIL_INDEX8,self.bufferWidth,self.bufferHeight),gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.STENCIL_ATTACHMENT,gl.RENDERBUFFER,self.stencilBuffer)),!gl.checkFramebufferStatus(gl.FRAMEBUFFER)===gl.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer incomplete!"),self.realBindFramebuffer.call(gl,gl.FRAMEBUFFER,self.lastBoundFramebuffer),self.scissorTest&&self.realEnable.call(gl,gl.SCISSOR_TEST),self.realColorMask.apply(gl,self.colorMask),self.realViewport.apply(gl,self.viewport),self.realClearColor.apply(gl,self.clearColor)}),this.cardboardUI&&this.cardboardUI.onResize()},CardboardDistorter.prototype.patch=function(){if(!this.isPatched){var self=this,canvas=this.gl.canvas,gl=this.gl;Util.isIOS()||(canvas.width=Util.getScreenWidth()*this.bufferScale,canvas.height=Util.getScreenHeight()*this.bufferScale,Object.defineProperty(canvas,"width",{configurable:!0,enumerable:!0,get:function(){return self.bufferWidth},set:function(value){self.bufferWidth=value,self.realCanvasWidth.set.call(canvas,value),self.onResize()}}),Object.defineProperty(canvas,"height",{configurable:!0,enumerable:!0,get:function(){return self.bufferHeight},set:function(value){self.bufferHeight=value,self.realCanvasHeight.set.call(canvas,value),self.onResize()}})),this.lastBoundFramebuffer=gl.getParameter(gl.FRAMEBUFFER_BINDING),null==this.lastBoundFramebuffer&&(this.lastBoundFramebuffer=this.framebuffer,this.gl.bindFramebuffer(gl.FRAMEBUFFER,this.framebuffer)),this.gl.bindFramebuffer=function(target,framebuffer){self.lastBoundFramebuffer=framebuffer?framebuffer:self.framebuffer,self.realBindFramebuffer.call(gl,target,self.lastBoundFramebuffer)},this.cullFace=gl.getParameter(gl.CULL_FACE),this.depthTest=gl.getParameter(gl.DEPTH_TEST),this.blend=gl.getParameter(gl.BLEND),this.scissorTest=gl.getParameter(gl.SCISSOR_TEST),this.stencilTest=gl.getParameter(gl.STENCIL_TEST),gl.enable=function(pname){switch(pname){case gl.CULL_FACE:self.cullFace=!0;break;case gl.DEPTH_TEST:self.depthTest=!0;break;case gl.BLEND:self.blend=!0;break;case gl.SCISSOR_TEST:self.scissorTest=!0;break;case gl.STENCIL_TEST:self.stencilTest=!0}self.realEnable.call(gl,pname)},gl.disable=function(pname){switch(pname){case gl.CULL_FACE:self.cullFace=!1;break;case gl.DEPTH_TEST:self.depthTest=!1;break;case gl.BLEND:self.blend=!1;break;case gl.SCISSOR_TEST:self.scissorTest=!1;break;case gl.STENCIL_TEST:self.stencilTest=!1}self.realDisable.call(gl,pname)},this.colorMask=gl.getParameter(gl.COLOR_WRITEMASK),gl.colorMask=function(r,g,b,a){self.colorMask[0]=r,self.colorMask[1]=g,self.colorMask[2]=b,self.colorMask[3]=a,self.realColorMask.call(gl,r,g,b,a)},this.clearColor=gl.getParameter(gl.COLOR_CLEAR_VALUE),gl.clearColor=function(r,g,b,a){self.clearColor[0]=r,self.clearColor[1]=g,self.clearColor[2]=b,self.clearColor[3]=a,self.realClearColor.call(gl,r,g,b,a)},this.viewport=gl.getParameter(gl.VIEWPORT),gl.viewport=function(x,y,w,h){self.viewport[0]=x,self.viewport[1]=y,self.viewport[2]=w,self.viewport[3]=h,self.realViewport.call(gl,x,y,w,h)},this.isPatched=!0,Util.safariCssSizeWorkaround(canvas)}},CardboardDistorter.prototype.unpatch=function(){if(this.isPatched){var gl=this.gl,canvas=this.gl.canvas;Util.isIOS()||(Object.defineProperty(canvas,"width",this.realCanvasWidth),Object.defineProperty(canvas,"height",this.realCanvasHeight)),canvas.width=this.bufferWidth,canvas.height=this.bufferHeight,gl.bindFramebuffer=this.realBindFramebuffer,gl.enable=this.realEnable,gl.disable=this.realDisable,gl.colorMask=this.realColorMask,gl.clearColor=this.realClearColor,gl.viewport=this.realViewport,this.lastBoundFramebuffer==this.framebuffer&&gl.bindFramebuffer(gl.FRAMEBUFFER,null),this.isPatched=!1,setTimeout(function(){Util.safariCssSizeWorkaround(canvas)},1)}},CardboardDistorter.prototype.setTextureBounds=function(leftBounds,rightBounds){leftBounds||(leftBounds=[0,0,.5,1]),rightBounds||(rightBounds=[.5,0,.5,1]),this.viewportOffsetScale[0]=leftBounds[0],this.viewportOffsetScale[1]=leftBounds[1],this.viewportOffsetScale[2]=leftBounds[2],this.viewportOffsetScale[3]=leftBounds[3],this.viewportOffsetScale[4]=rightBounds[0],this.viewportOffsetScale[5]=rightBounds[1],this.viewportOffsetScale[6]=rightBounds[2],this.viewportOffsetScale[7]=rightBounds[3]},CardboardDistorter.prototype.submitFrame=function(){var gl=this.gl,self=this,glState=[];if(WebVRConfig.DIRTY_SUBMIT_FRAME_BINDINGS||glState.push(gl.CURRENT_PROGRAM,gl.ARRAY_BUFFER_BINDING,gl.ELEMENT_ARRAY_BUFFER_BINDING,gl.TEXTURE_BINDING_2D,gl.TEXTURE0),WGLUPreserveGLState(gl,glState,function(gl){self.realBindFramebuffer.call(gl,gl.FRAMEBUFFER,null),self.cullFace&&self.realDisable.call(gl,gl.CULL_FACE),self.depthTest&&self.realDisable.call(gl,gl.DEPTH_TEST),self.blend&&self.realDisable.call(gl,gl.BLEND),self.scissorTest&&self.realDisable.call(gl,gl.SCISSOR_TEST),self.stencilTest&&self.realDisable.call(gl,gl.STENCIL_TEST),self.realColorMask.call(gl,!0,!0,!0,!0),self.realViewport.call(gl,0,0,gl.drawingBufferWidth,gl.drawingBufferHeight),(self.ctxAttribs.alpha||Util.isIOS())&&(self.realClearColor.call(gl,0,0,0,1),gl.clear(gl.COLOR_BUFFER_BIT)),gl.useProgram(self.program),gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,self.indexBuffer),gl.bindBuffer(gl.ARRAY_BUFFER,self.vertexBuffer),gl.enableVertexAttribArray(self.attribs.position),gl.enableVertexAttribArray(self.attribs.texCoord),gl.vertexAttribPointer(self.attribs.position,2,gl.FLOAT,!1,20,0),gl.vertexAttribPointer(self.attribs.texCoord,3,gl.FLOAT,!1,20,8),gl.activeTexture(gl.TEXTURE0),gl.uniform1i(self.uniforms.diffuse,0),gl.bindTexture(gl.TEXTURE_2D,self.renderTarget),gl.uniform4fv(self.uniforms.viewportOffsetScale,self.viewportOffsetScale),gl.drawElements(gl.TRIANGLES,self.indexCount,gl.UNSIGNED_SHORT,0),self.cardboardUI&&self.cardboardUI.renderNoState(),self.realBindFramebuffer.call(self.gl,gl.FRAMEBUFFER,self.framebuffer),self.ctxAttribs.preserveDrawingBuffer||(self.realClearColor.call(gl,0,0,0,0),gl.clear(gl.COLOR_BUFFER_BIT)),WebVRConfig.DIRTY_SUBMIT_FRAME_BINDINGS||self.realBindFramebuffer.call(gl,gl.FRAMEBUFFER,self.lastBoundFramebuffer),self.cullFace&&self.realEnable.call(gl,gl.CULL_FACE),self.depthTest&&self.realEnable.call(gl,gl.DEPTH_TEST),self.blend&&self.realEnable.call(gl,gl.BLEND),self.scissorTest&&self.realEnable.call(gl,gl.SCISSOR_TEST),self.stencilTest&&self.realEnable.call(gl,gl.STENCIL_TEST),self.realColorMask.apply(gl,self.colorMask),self.realViewport.apply(gl,self.viewport),(self.ctxAttribs.alpha||!self.ctxAttribs.preserveDrawingBuffer)&&self.realClearColor.apply(gl,self.clearColor)}),Util.isIOS()){var canvas=gl.canvas;(canvas.width!=self.bufferWidth||canvas.height!=self.bufferHeight)&&(self.bufferWidth=canvas.width,self.bufferHeight=canvas.height,self.onResize())}},CardboardDistorter.prototype.updateDeviceInfo=function(deviceInfo){var gl=this.gl,self=this,glState=[gl.ARRAY_BUFFER_BINDING,gl.ELEMENT_ARRAY_BUFFER_BINDING];WGLUPreserveGLState(gl,glState,function(gl){var vertices=self.computeMeshVertices_(self.meshWidth,self.meshHeight,deviceInfo);if(gl.bindBuffer(gl.ARRAY_BUFFER,self.vertexBuffer),gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW),!self.indexCount){var indices=self.computeMeshIndices_(self.meshWidth,self.meshHeight);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,self.indexBuffer),gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,indices,gl.STATIC_DRAW),self.indexCount=indices.length}})},CardboardDistorter.prototype.computeMeshVertices_=function(width,height,deviceInfo){for(var vertices=new Float32Array(2*width*height*5),lensFrustum=deviceInfo.getLeftEyeVisibleTanAngles(),noLensFrustum=deviceInfo.getLeftEyeNoLensTanAngles(),viewport=deviceInfo.getLeftEyeVisibleScreenRect(noLensFrustum),vidx=0,e=0;2>e;e++){for(var j=0;height>j;j++)for(var i=0;width>i;i++,vidx++){var u=i/(width-1),v=j/(height-1),s=u,t=v,x=Util.lerp(lensFrustum[0],lensFrustum[2],u),y=Util.lerp(lensFrustum[3],lensFrustum[1],v),d=Math.sqrt(x*x+y*y),r=deviceInfo.distortion.distortInverse(d),p=x*r/d,q=y*r/d;u=(p-noLensFrustum[0])/(noLensFrustum[2]-noLensFrustum[0]),v=(q-noLensFrustum[3])/(noLensFrustum[1]-noLensFrustum[3]);deviceInfo.device.widthMeters/deviceInfo.device.heightMeters;u=2*(viewport.x+u*viewport.width-.5),v=2*(viewport.y+v*viewport.height-.5),vertices[5*vidx+0]=u,vertices[5*vidx+1]=v,vertices[5*vidx+2]=s,vertices[5*vidx+3]=t,vertices[5*vidx+4]=e}var w=lensFrustum[2]-lensFrustum[0];lensFrustum[0]=-(w+lensFrustum[0]),lensFrustum[2]=w-lensFrustum[2],w=noLensFrustum[2]-noLensFrustum[0],noLensFrustum[0]=-(w+noLensFrustum[0]),noLensFrustum[2]=w-noLensFrustum[2],viewport.x=1-(viewport.x+viewport.width)}return vertices},CardboardDistorter.prototype.computeMeshIndices_=function(width,height){for(var indices=new Uint16Array(2*(width-1)*(height-1)*6),halfwidth=width/2,halfheight=height/2,vidx=0,iidx=0,e=0;2>e;e++)for(var j=0;height>j;j++)for(var i=0;width>i;i++,vidx++)0!=i&&0!=j&&(halfwidth>=i==halfheight>=j?(indices[iidx++]=vidx,indices[iidx++]=vidx-width-1,indices[iidx++]=vidx-width,indices[iidx++]=vidx-width-1,indices[iidx++]=vidx,indices[iidx++]=vidx-1):(indices[iidx++]=vidx-1,indices[iidx++]=vidx-width,indices[iidx++]=vidx,indices[iidx++]=vidx-width,indices[iidx++]=vidx-1,indices[iidx++]=vidx-width-1));return indices},CardboardDistorter.prototype.getOwnPropertyDescriptor_=function(proto,attrName){var descriptor=Object.getOwnPropertyDescriptor(proto,attrName);return(void 0===descriptor.get||void 0===descriptor.set)&&(descriptor.configurable=!0,descriptor.enumerable=!0,descriptor.get=function(){return this.getAttribute(attrName)},descriptor.set=function(val){this.setAttribute(attrName,val)}),descriptor},module.exports=CardboardDistorter},{"./cardboard-ui.js":5,"./deps/wglu-preserve-state.js":7,"./util.js":21}],5:[function(_dereq_,module,exports){function CardboardUI(gl){this.gl=gl,this.attribs={position:0},this.program=Util.linkProgram(gl,uiVS,uiFS,this.attribs),this.uniforms=Util.getProgramUniforms(gl,this.program),this.vertexBuffer=gl.createBuffer(),this.gearOffset=0,this.gearVertexCount=0,this.arrowOffset=0,this.arrowVertexCount=0,this.projMat=new Float32Array(16),this.listener=null,this.onResize()}var Util=_dereq_("./util.js"),WGLUPreserveGLState=_dereq_("./deps/wglu-preserve-state.js"),uiVS=["attribute vec2 position;","uniform mat4 projectionMat;","void main() {","  gl_Position = projectionMat * vec4( position, -1.0, 1.0 );","}"].join("\n"),uiFS=["precision mediump float;","uniform vec4 color;","void main() {","  gl_FragColor = color;","}"].join("\n"),DEG2RAD=Math.PI/180,kAnglePerGearSection=60,kOuterRimEndAngle=12,kInnerRimBeginAngle=20,kOuterRadius=1,kMiddleRadius=.75,kInnerRadius=.3125,kCenterLineThicknessDp=4,kButtonWidthDp=28,kTouchSlopFactor=1.5;CardboardUI.prototype.destroy=function(){var gl=this.gl;this.listener&&gl.canvas.removeEventListener("click",this.listener,!1),gl.deleteProgram(this.program),gl.deleteBuffer(this.vertexBuffer)},CardboardUI.prototype.listen=function(optionsCallback,backCallback){var canvas=this.gl.canvas;this.listener=function(event){var midline=canvas.clientWidth/2,buttonSize=kButtonWidthDp*kTouchSlopFactor;event.clientX>midline-buttonSize&&event.clientX<midline+buttonSize&&event.clientY>canvas.clientHeight-buttonSize?optionsCallback(event):event.clientX<buttonSize&&event.clientY<buttonSize&&backCallback(event)},canvas.addEventListener("click",this.listener,!1)},CardboardUI.prototype.onResize=function(){var gl=this.gl,self=this,glState=[gl.ARRAY_BUFFER_BINDING];WGLUPreserveGLState(gl,glState,function(gl){function addGearSegment(theta,r){var angle=(90-theta)*DEG2RAD,x=Math.cos(angle),y=Math.sin(angle);vertices.push(kInnerRadius*x*buttonScale+midline,kInnerRadius*y*buttonScale+buttonScale),vertices.push(r*x*buttonScale+midline,r*y*buttonScale+buttonScale)}function addArrowVertex(x,y){vertices.push(buttonBorder+x,gl.drawingBufferHeight-buttonBorder-y)}var vertices=[],midline=gl.drawingBufferWidth/2,dps=gl.drawingBufferWidth/(screen.width*window.devicePixelRatio);Util.isIOS()||(dps*=window.devicePixelRatio);
var lineWidth=kCenterLineThicknessDp*dps/2,buttonSize=kButtonWidthDp*kTouchSlopFactor*dps,buttonScale=kButtonWidthDp*dps/2,buttonBorder=(kButtonWidthDp*kTouchSlopFactor-kButtonWidthDp)*dps;vertices.push(midline-lineWidth,buttonSize),vertices.push(midline-lineWidth,gl.drawingBufferHeight),vertices.push(midline+lineWidth,buttonSize),vertices.push(midline+lineWidth,gl.drawingBufferHeight),self.gearOffset=vertices.length/2;for(var i=0;6>=i;i++){var segmentTheta=i*kAnglePerGearSection;addGearSegment(segmentTheta,kOuterRadius),addGearSegment(segmentTheta+kOuterRimEndAngle,kOuterRadius),addGearSegment(segmentTheta+kInnerRimBeginAngle,kMiddleRadius),addGearSegment(segmentTheta+(kAnglePerGearSection-kInnerRimBeginAngle),kMiddleRadius),addGearSegment(segmentTheta+(kAnglePerGearSection-kOuterRimEndAngle),kOuterRadius)}self.gearVertexCount=vertices.length/2-self.gearOffset,self.arrowOffset=vertices.length/2;var angledLineWidth=lineWidth/Math.sin(45*DEG2RAD);addArrowVertex(0,buttonScale),addA