!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("flash-message",[],n):"object"==typeof exports?exports["flash-message"]=n():e["flash-message"]=n()}(window,function(){return function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();var r=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.vue=null}return a(e,[{key:"init",value:function(e){this.vue=new e}},{key:"$emit",value:function(e,n,t){this.vue&&this.vue.$emit(e,n,t)}},{key:"$on",value:function(e,n){this.vue&&this.vue.$on(e,n)}}]),e}();n.default=new r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,r=t(0),o=(a=r)&&a.__esModule?a:{default:a};n.default={name:"flash-message",props:["message"],data:function(){return{show:!1,body:"",type:"",transition:"",close:""}},created:function(){var e=this;o.default.$on("flash",function(n,t){return e.flash(n,t)}),o.default.$on("flashSuccess",function(n){return e.flash(n,"success")}),o.default.$on("flashError",function(n){return e.flash(n,"error")}),o.default.$on("flashAlert",function(n){return e.flash(n,"alert")}),o.default.$on("flashNotice",function(n){return e.flash(n,"notice")})},methods:{flash:function(e,n){this.show=!0,this.body=e,this.type=this.alertClass(n),this.$properties.duration&&this.duration()},alertClass:function(e){return{error:"alert-danger",alert:"alert-warning",notice:"alert-info",success:"alert-success"}[e]},duration:function(){var e=this;setTimeout(function(){e.hide()},this.$properties.duration)},alert:function(){this.hide()},hide:function(){this.show=!1}}}},function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return r});var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("transition",{directives:[{name:"show",rawName:"v-show",value:this.$properties.transition,expression:"this.$properties.transition"}],attrs:{name:this.$properties.transition}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"alert",class:[e.type],attrs:{role:"alert"}},[this.$properties.close?t("button",{staticClass:"close",attrs:{type:"button"},on:{click:e.alert}},[e._v("×")]):e._e(),e._v("\n      "+e._s(e.body)+"\n  ")])])},r=[];a._withStripped=!0},function(e,n,t){"use strict";function a(e,n,t,a,r,o,s,i){var l=typeof(e=e||{}).default;"object"!==l&&"function"!==l||(e=e.default);var c,d="function"==typeof e?e.options:e;if(n&&(d.render=n,d.staticRenderFns=t,d._compiled=!0),a&&(d.functional=!0),o&&(d._scopeId=o),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=c):r&&(c=i?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(d.functional){d._injectStyles=c;var u=d.render;d.render=function(e,n){return c.call(n),u(e,n)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,c):[c]}return{exports:e,options:d}}t.d(n,"a",function(){return a})},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=i(t(5)),r=i(t(0)),o=i(t(9)),s=i(t(10));function i(e){return e&&e.__esModule?e:{default:e}}var l={install:function(e,n){console.log("loading!!!!");var t=new s.default;e.FlashMessage=e.prototype.$flashMessage=t,r.default.init(e),e.mixin(o.default);var i=Object.assign({},{close:!0,transition:""},n);e.prototype.$properties=i,(new(e.extend(a.default))).$mount("#flash-message")}};"undefined"!=typeof window&&window.Vue&&(window.FlashMessage=l),n.default=l},function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);var s=t(2),i=t(3),l=!1;var c=function(e){l||t(6)},d=Object(i.a)(r.a,s.a,s.b,!1,c,"data-v-592810a2",null);d.options.__file="src/flash_message.vue",n.default=d.exports},function(e,n,t){var a=t(7);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t(11).default)("67995794",a,!1,{})},function(e,n,t){(e.exports=t(8)(!0)).push([e.i,"\n.alert[data-v-592810a2]{\n    padding: 8px 35px 8px 14px;\n    margin-bottom: 20px;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n    background-color: #fcf8e3;\n    border: 1px solid #fbeed5;\n    border-radius: 4px;\n}\n.alert-success[data-v-592810a2]{\n    background-color: #dff0d8;\n    border-color: #d6e9c6;\n    color: #468847;\n}\n.alert-danger[data-v-592810a2], .alert-error[data-v-592810a2]{\n    background-color: #f2dede;\n    border-color: #eed3d7;\n    color: #b94a48\n}\n.alert-warning[data-v-592810a2]{\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #faebcc;\n}\n.alert-info[data-v-592810a2] {\n    color: #31708f;\n    background-color: #d9edf7;\n    border-color: #bce8f1;\n}\n.close[data-v-592810a2]{\n    float: right;\n}\n.slide-fade-enter-active[data-v-592810a2] {\n    transition: all .3s ease;\n}\n.slide-fade-leave-active[data-v-592810a2] {\n    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);\n}\n.slide-fade-enter[data-v-592810a2], .slide-fade-leave-to[data-v-592810a2]\n/* .slide-fade-leave-active below version 2.1.8 */ {\n    transform: translateX(10px);\n    opacity: 0;\n}\n.fade-enter-active[data-v-592810a2], .fade-leave-active[data-v-592810a2] {\n    transition: opacity .5s;\n}\n.fade-enter[data-v-592810a2], .fade-leave-to[data-v-592810a2] /* .fade-leave-active below version 2.1.8 */ {\n    opacity: 0;\n}\n.bounce-enter-active[data-v-592810a2] {\n    animation: bounce-in-data-v-592810a2 .5s;\n}\n.bounce-leave-active[data-v-592810a2] {\n    animation: bounce-in-data-v-592810a2 .5s reverse;\n}\n@keyframes bounce-in-data-v-592810a2 {\n0% {\n      transform: scale(0);\n}\n50% {\n      transform: scale(1.5);\n}\n100% {\n      transform: scale(1);\n}\n}\n\n","",{version:3,sources:["src/flash_message.vue","flash_message.vue"],names:[],mappings:";AAuEA;IACA,0BAAA;IACA,mBAAA;IACA,6CAAA;IACA,yBAAA;IACA,yBAAA;IACA,kBAAA;ACrEA;ADwEA;IACA,yBAAA;IACA,qBAAA;IACA,cAAA;ACtEA;ADyEA;IACA,yBAAA;IACA,qBAAA;IACA;ACvEA;AD0EA;IACA,cAAA;IACA,yBAAA;IACA,qBAAA;ACxEA;AD2EA;IACA,cAAA;IACA,yBAAA;IACA,qBAAA;ACzEA;AD4EA;IACA,YAAA;AC1EA;AD6EA;IACA,wBAAA;AC3EA;AD6EA;IACA,oDAAA;AC3EA;AD6EA;;IAEA,2BAAA;IACA,UAAA;AC3EA;AD8EA;IACA,uBAAA;AC5EA;AD8EA;IACA,UAAA;AC5EA;AD+EA;IACA,wCAAA;AC7EA;AD+EA;IACA,gDAAA;AC7EA;AD+EA;AACA;MACA,mBAAA;AC7EA;AD+EA;MACA,qBAAA;AC7EA;AD+EA;MACA,mBAAA;AC7EA;AACA",file:"flash_message.vue",sourcesContent:["<template>\n  <transition v-bind:name=\"this.$properties.transition\" v-show=\"this.$properties.transition\">\n    <div class=\"alert\" v-bind:class=\"[type]\" role=\"alert\" v-show=\"show\">\n      <button type=\"button\" class=\"close\" v-if=\"this.$properties.close\" v-on:click=\"alert\" >&times;</button>\n        {{ body }}\n    </div>\n  </transition>\n</template>\n\n<script>\n\nimport Bus from './bus'\nexport default {\n  name: 'flash-message',\n  props: ['message'],\n  data() {\n    return {\n      show : false,\n      body : '',\n      type: '',\n      transition: '',\n      close: ''\n    }\n  },\n\n  created() {\n    Bus.$on('flash', (message, type) => this.flash(message, type));\n    Bus.$on('flashSuccess', (message) => this.flash(message, 'success'));\n    Bus.$on('flashError', (message) => this.flash(message, 'error'));\n    Bus.$on('flashAlert', (message) => this.flash(message, 'alert'));\n    Bus.$on('flashNotice', (message) => this.flash(message, 'notice'));\n  },\n\n  methods: {\n    flash(message, type) {\n      this.show = true;\n      this.body = message;\n      this.type = this.alertClass(type);\n      if(this.$properties.duration){\n       this.duration();\n      }\n    },\n\n    alertClass(type) {\n    let classes = {\n      error: 'alert-danger',\n      alert: 'alert-warning',\n      notice: 'alert-info',\n      success: 'alert-success'\n    };\n     return classes[type]\n    },\n\n    duration(){\n      setTimeout(() => {\n        this.hide();\n      }, this.$properties.duration)\n    },\n\n    alert(){\n      this.hide();\n    },\n\n    hide() {\n      this.show = false;\n    }\n  }\n}\n<\/script>\n\n<style scoped>\n  .alert{\n    padding: 8px 35px 8px 14px;\n    margin-bottom: 20px;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n    background-color: #fcf8e3;\n    border: 1px solid #fbeed5;\n    border-radius: 4px;\n  }\n\n  .alert-success{\n    background-color: #dff0d8;\n    border-color: #d6e9c6;\n    color: #468847;\n  }\n\n  .alert-danger, .alert-error{\n    background-color: #f2dede;\n    border-color: #eed3d7;\n    color: #b94a48\n  }\n\n  .alert-warning{\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #faebcc;\n  }\n\n  .alert-info {\n    color: #31708f;\n    background-color: #d9edf7;\n    border-color: #bce8f1;\n  }\n\n  .close{\n    float: right;\n  }\n\n  .slide-fade-enter-active {\n    transition: all .3s ease;\n  }\n  .slide-fade-leave-active {\n    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);\n  }\n  .slide-fade-enter, .slide-fade-leave-to\n/* .slide-fade-leave-active below version 2.1.8 */ {\n    transform: translateX(10px);\n    opacity: 0;\n  }\n\n  .fade-enter-active, .fade-leave-active {\n    transition: opacity .5s;\n  }\n  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {\n    opacity: 0;\n  }\n\n  .bounce-enter-active {\n    animation: bounce-in .5s;\n  }\n  .bounce-leave-active {\n    animation: bounce-in .5s reverse;\n  }\n  @keyframes bounce-in {\n    0% {\n      transform: scale(0);\n    }\n    50% {\n      transform: scale(1.5);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n</style>\n","\n.alert[data-v-592810a2]{\n    padding: 8px 35px 8px 14px;\n    margin-bottom: 20px;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n    background-color: #fcf8e3;\n    border: 1px solid #fbeed5;\n    border-radius: 4px;\n}\n.alert-success[data-v-592810a2]{\n    background-color: #dff0d8;\n    border-color: #d6e9c6;\n    color: #468847;\n}\n.alert-danger[data-v-592810a2], .alert-error[data-v-592810a2]{\n    background-color: #f2dede;\n    border-color: #eed3d7;\n    color: #b94a48\n}\n.alert-warning[data-v-592810a2]{\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #faebcc;\n}\n.alert-info[data-v-592810a2] {\n    color: #31708f;\n    background-color: #d9edf7;\n    border-color: #bce8f1;\n}\n.close[data-v-592810a2]{\n    float: right;\n}\n.slide-fade-enter-active[data-v-592810a2] {\n    transition: all .3s ease;\n}\n.slide-fade-leave-active[data-v-592810a2] {\n    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);\n}\n.slide-fade-enter[data-v-592810a2], .slide-fade-leave-to[data-v-592810a2]\n/* .slide-fade-leave-active below version 2.1.8 */ {\n    transform: translateX(10px);\n    opacity: 0;\n}\n.fade-enter-active[data-v-592810a2], .fade-leave-active[data-v-592810a2] {\n    transition: opacity .5s;\n}\n.fade-enter[data-v-592810a2], .fade-leave-to[data-v-592810a2] /* .fade-leave-active below version 2.1.8 */ {\n    opacity: 0;\n}\n.bounce-enter-active[data-v-592810a2] {\n    animation: bounce-in-data-v-592810a2 .5s;\n}\n.bounce-leave-active[data-v-592810a2] {\n    animation: bounce-in-data-v-592810a2 .5s reverse;\n}\n@keyframes bounce-in-data-v-592810a2 {\n0% {\n      transform: scale(0);\n}\n50% {\n      transform: scale(1.5);\n}\n100% {\n      transform: scale(1);\n}\n}\n\n"]}])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",a=e[3];if(!a)return t;if(n&&"function"==typeof btoa){var r=(s=a,i=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(l," */")),o=a.sources.map(function(e){return"/*# sourceURL=".concat(a.sourceRoot).concat(e," */")});return[t].concat(o).concat([r]).join("\n")}var s,i,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(a[o]=!0)}for(var s=0;s<e.length;s++){var i=e[s];null!=i[0]&&a[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="(".concat(i[2],") and (").concat(t,")")),n.push(i))}},n}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,r=t(0),o=(a=r)&&a.__esModule?a:{default:a};n.default={methods:{flashMessage:function(e,n){o.default.$emit("flash",e,n)},flashSuccess:function(e,n){o.default.$emit("flashSuccess",e,n)},flashError:function(e,n){o.default.$emit("flashError",e,n)},flashAlert:function(e,n){o.default.$emit("flashAlert",e,n)},flashNotice:function(e,n){o.default.$emit("flashNotice",e,n)}}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,r=t(0),o=(a=r)&&a.__esModule?a:{default:a};n.default=function(){this.message=function(e,n){o.default.$emit("flash",e,n)},this.success=function(e,n){o.default.$emit("flashSuccess",e,n)},this.error=function(e,n){o.default.$emit("flashError",e,n)},this.alert=function(e,n){o.default.$emit("flashAlert",e,n)},this.notice=function(e,n){o.default.$emit("flashNotice",e,n)}}},function(e,n,t){"use strict";function a(e,n){for(var t=[],a={},r=0;r<n.length;r++){var o=n[r],s=o[0],i={id:e+":"+r,css:o[1],media:o[2],sourceMap:o[3]};a[s]?a[s].parts.push(i):t.push(a[s]={id:s,parts:[i]})}return t}t.r(n),t.d(n,"default",function(){return p});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},s=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,c=!1,d=function(){},u=null,f="data-vue-ssr-id",A="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,n,t,r){c=t,u=r||{};var s=a(e,n);return v(s),function(n){for(var t=[],r=0;r<s.length;r++){var i=s[r];(l=o[i.id]).refs--,t.push(l)}n?v(s=a(e,n)):s=[];for(r=0;r<t.length;r++){var l;if(0===(l=t[r]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete o[l.id]}}}}function v(e){for(var n=0;n<e.length;n++){var t=e[n],a=o[t.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](t.parts[r]);for(;r<t.parts.length;r++)a.parts.push(b(t.parts[r]));a.parts.length>t.parts.length&&(a.parts.length=t.parts.length)}else{var s=[];for(r=0;r<t.parts.length;r++)s.push(b(t.parts[r]));o[t.id]={id:t.id,refs:1,parts:s}}}}function h(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function b(e){var n,t,a=document.querySelector("style["+f+'~="'+e.id+'"]');if(a){if(c)return d;a.parentNode.removeChild(a)}if(A){var r=l++;a=i||(i=h()),n=y.bind(null,a,r,!1),t=y.bind(null,a,r,!0)}else a=h(),n=function(e,n){var t=n.css,a=n.media,r=n.sourceMap;a&&e.setAttribute("media",a);u.ssrId&&e.setAttribute(f,n.id);r&&(t+="\n/*# sourceURL="+r.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,a),t=function(){a.parentNode.removeChild(a)};return n(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;n(e=a)}else t()}}var m,g=(m=[],function(e,n){return m[e]=n,m.filter(Boolean).join("\n")});function y(e,n,t,a){var r=t?"":a.css;if(e.styleSheet)e.styleSheet.cssText=g(n,r);else{var o=document.createTextNode(r),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(o,s[n]):e.appendChild(o)}}}])});
//# sourceMappingURL=flash-message.js.map