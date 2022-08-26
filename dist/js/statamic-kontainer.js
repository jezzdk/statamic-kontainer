!function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=0)}([function(t,e,i){t.exports=i(1)},function(t,e,i){"use strict";i.r(e);var o=function(t,e,i,o,n,r,s,l){var a,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=i,d._compiled=!0),o&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),s?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=a):n&&(a=l?function(){n.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:n),a)if(d.functional){d._injectStyles=a;var u=d.render;d.render=function(t,e){return a.call(e),u(t,e)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,a):[a]}return{exports:t,options:d}}({mixins:[Fieldtype],data:function(){return{url:null,type:null,fileId:null,folderId:null,token:null,popupWidth:1024,popupHeight:768,popupTop:0,popupLeft:0}},mounted:function(){this.value&&(this.url=this.value.url,this.type=this.value.type,this.folderId=this.value.folderId,this.fileId=this.value.fileId),this.token=this.makeid(32),this.popupWidth=.8*window.screen.width,this.popupHeight=.8*window.screen.height,this.popupTop=.15*window.screen.height/2,this.popupLeft=.2*window.screen.width/2,window.addEventListener("message",this.receive,!1)},destroyed:function(){window.removeEventListener("message",this.receive,!1)},methods:{openKontainer:function(){if(this.config.kontainer_url){var t=this.config.kontainer_url.replace(/\/?$/,"/");this.folderId||this.fileId?(this.folderId&&(t+="folder/"+this.folderId+"/"),this.fileId&&(t+="file/"+this.fileId+"/")):t+="login-cms-redirect/",t+="?cmsMode=1&cmsToken="+this.token,window.open(t,"kontainer","width="+this.popupWidth+",height="+this.popupHeight+",top="+this.popupTop+",left="+this.popupLeft+",popup")}else this.$toast.error(__("Kontainer URL is missing"))},receive:function(t){if(this.config.kontainer_url.includes(t.origin)){var e=JSON.parse(t.data);this.meta.debug&&console.log(this.fieldId,e),e?e.url?e.token===this.token&&(["image","video","file"].includes(e.type)?"images"!==this.config.allow_type||"image"===e.type?"videos"!==this.config.allow_type||"video"===e.type?"files"!==this.config.allow_type||"file"===e.type?(this.url=e.url,this.type=e.type,this.folderId=e.folderId,this.fileId=e.fileId,this.update(e)):this.$toast.error(__("Only files allowed")):this.$toast.error(__("Only videos allowed")):this.$toast.error(__("Only images allowed")):this.$toast.error(__("Unknown type"))):this.$toast.error(__("Invalid URL")):this.$toast.error(__("Error parsing image data"))}},remove:function(){this.url=null,this.type=null,this.folderId=null,this.fileId=null,this.update(null)},makeid:function(t){for(var e="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=i.length,n=0;n<t;n++)e+=i.charAt(Math.floor(Math.random()*o));return e}}},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",["image"===t.type&&t.url?i("div",{staticClass:"mb-2"},[i("a",{staticClass:"inline-block",attrs:{href:t.url,target:"_blank"}},[i("img",{attrs:{src:t.url+"?w=300&h=300"}})])]):t._e(),t._v(" "),"video"===t.type&&t.url?i("div",{staticClass:"mb-2"},[i("video",{attrs:{controls:"",width:"300"}},[i("source",{attrs:{src:t.url,type:"video/mp4"}}),t._v("\n            "+t._s(t.__("Sorry, your browser doesn't support embedded videos."))+"\n        ")])]):t._e(),t._v(" "),"file"===t.type&&t.url?i("div",{staticClass:"flex items-center text-sm text-grey-80 bg-grey-10 border border-grey-40 rounded p-2 mb-2"},[i("div",{staticClass:"flex-none w-4 h-4 mr-1"},[i("svg",{staticClass:"block",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[i("path",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M23.25 9.9 12.273 20.878a6.75 6.75 0 0 1-9.546-9.546l9.016-9.015a4.5 4.5 0 1 1 6.363 6.363L9.091 17.7a2.25 2.25 0 0 1-3.182-3.181L14.925 5.5"}})])]),t._v(" "),i("div",[i("a",{attrs:{href:t.url,target:"_blank"}},[t._v(t._s(t.url))])])]):t._e(),t._v(" "),i("button",{staticClass:"btn",attrs:{disabled:t.config.read_only},domProps:{textContent:t._s(t.value?t.__("Edit"):t.__("Browse"))},on:{click:t.openKontainer}}),t._v(" "),t.url?i("button",{staticClass:"btn text-red",attrs:{disabled:t.config.read_only},domProps:{textContent:t._s(t.__("Unlink"))},on:{click:t.remove}}):t._e()])}),[],!1,null,null,null).exports;Statamic.booting((function(){Statamic.$components.register("kontainer_field-fieldtype",o)}))}]);