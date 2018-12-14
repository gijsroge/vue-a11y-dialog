(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],b):b(a.VueA11yDialog={},a.vue)})(this,function(a,b){"use strict";function c(a,b){return b={exports:{}},a(b,b.exports),b.exports}b=b&&b.hasOwnProperty("default")?b["default"]:b;var d="undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window,e=c(function(a){(function(){function b(a,b){this._show=this.show.bind(this),this._hide=this.hide.bind(this),this._maintainFocus=this._maintainFocus.bind(this),this._bindKeypress=this._bindKeypress.bind(this),this.container=a,this.dialog=a.querySelector("dialog, [role=\"dialog\"], [role=\"alertdialog\"]"),this.role=this.dialog.getAttribute("role")||"dialog",this.useDialog="show"in document.createElement("dialog")&&"DIALOG"===this.dialog.nodeName,this._listeners={},this.create(b)}function c(a){return Array.prototype.slice.call(a)}function d(a,b){return c((b||document).querySelectorAll(a))}function e(a){return NodeList.prototype.isPrototypeOf(a)?c(a):Element.prototype.isPrototypeOf(a)?[a]:"string"==typeof a?d(a):void 0}function f(a){var b=g(a),c=a.querySelector("[autofocus]")||b[0];c&&c.focus()}function g(a){return d(k.join(","),a).filter(function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)})}function h(a,b){var c=g(a),d=c.indexOf(document.activeElement);b.shiftKey&&0===d?(c[c.length-1].focus(),b.preventDefault()):!b.shiftKey&&d===c.length-1&&(c[0].focus(),b.preventDefault())}function i(a){var b=c(a.parentNode.childNodes),d=b.filter(function(a){return 1===a.nodeType});return d.splice(d.indexOf(a),1),d}var j,k=["a[href]:not([tabindex^=\"-\"]):not([inert])","area[href]:not([tabindex^=\"-\"]):not([inert])","input:not([disabled]):not([inert])","select:not([disabled]):not([inert])","textarea:not([disabled]):not([inert])","button:not([disabled]):not([inert])","iframe:not([tabindex^=\"-\"]):not([inert])","audio:not([tabindex^=\"-\"]):not([inert])","video:not([tabindex^=\"-\"]):not([inert])","[contenteditable]:not([tabindex^=\"-\"]):not([inert])","[tabindex]:not([tabindex^=\"-\"]):not([inert])"];b.prototype.create=function(a){return this._targets=this._targets||e(a)||i(this.container),this.shown=this.dialog.hasAttribute("open"),this.dialog.setAttribute("role",this.role),this.useDialog?this.container.setAttribute("data-a11y-dialog-native",""):this.shown?this.container.removeAttribute("aria-hidden"):this.container.setAttribute("aria-hidden",!0),this._openers=d("[data-a11y-dialog-show=\""+this.container.id+"\"]"),this._openers.forEach(function(a){a.addEventListener("click",this._show)}.bind(this)),this._closers=d("[data-a11y-dialog-hide]",this.container).concat(d("[data-a11y-dialog-hide=\""+this.container.id+"\"]")),this._closers.forEach(function(a){a.addEventListener("click",this._hide)}.bind(this)),this._fire("create"),this},b.prototype.show=function(a){return this.shown?this:(this.shown=!0,j=document.activeElement,this.useDialog?this.dialog.showModal(a instanceof Event?void 0:a):(this.dialog.setAttribute("open",""),this.container.removeAttribute("aria-hidden"),this._targets.forEach(function(a){a.setAttribute("aria-hidden","true")})),f(this.dialog),document.body.addEventListener("focus",this._maintainFocus,!0),document.addEventListener("keydown",this._bindKeypress),this._fire("show",a),this)},b.prototype.hide=function(a){return this.shown?(this.shown=!1,this.useDialog?this.dialog.close(a instanceof Event?void 0:a):(this.dialog.removeAttribute("open"),this.container.setAttribute("aria-hidden","true"),this._targets.forEach(function(a){a.removeAttribute("aria-hidden")})),j&&j.focus(),document.body.removeEventListener("focus",this._maintainFocus,!0),document.removeEventListener("keydown",this._bindKeypress),this._fire("hide",a),this):this},b.prototype.destroy=function(){return this.hide(),this._openers.forEach(function(a){a.removeEventListener("click",this._show)}.bind(this)),this._closers.forEach(function(a){a.removeEventListener("click",this._hide)}.bind(this)),this._fire("destroy"),this._listeners={},this},b.prototype.on=function(a,b){return"undefined"==typeof this._listeners[a]&&(this._listeners[a]=[]),this._listeners[a].push(b),this},b.prototype.off=function(a,b){var c=this._listeners[a].indexOf(b);return-1<c&&this._listeners[a].splice(c,1),this},b.prototype._fire=function(a,b){var c=this._listeners[a]||[];c.forEach(function(a){a(this.container,b)}.bind(this))},b.prototype._bindKeypress=function(a){this.shown&&a.which===27&&"alertdialog"!==this.role&&(a.preventDefault(),this.hide()),this.shown&&a.which===9&&h(this.dialog,a)},b.prototype._maintainFocus=function(a){this.shown&&!this.container.contains(a.target)&&f(this.dialog)},a.exports=b})("undefined"==typeof d?window:d)}),f=c(function(a){(function(c,d){a.exports=d(b)})(d,function(a){function b(a){for(var b,c=a.hasAttributes()?a.attributes:[],d={},e=0;e<c.length;e++)b=c[e],b.value&&(d[b.name]=""===b.value||b.value);var f,g;d.class&&(f=d.class,delete d.class),d.style&&(g=d.style,delete d.style);var h={attrs:d,class:f,style:g};return h}function c(a){return Array.isArray(a)||"object"===("undefined"==typeof a?"undefined":h(a))?Object.freeze(a):a}function d(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return a.reduce(function(a,c){var d=c.passengers[0];return d="function"==typeof d?d(b):c.passengers,a.concat(d)},[])}function e(a,b){return a.map(function(a,b){return[b,a]}).sort(function(c,a){return this(c[1],a[1])||c[0]-a[0]}.bind(b)).map(function(a){return a[1]})}function f(c,a){return function(){c&&c.apply(this,arguments),a&&a.apply(this,arguments)}}function g(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};a.component(b.portalName||"Portal",s),a.component(b.portalTargetName||"PortalTarget",p)}a=a&&a.hasOwnProperty("default")?a["default"]:a;var h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},i=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},j=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)},k={},l=a.extend({data:function(){return{transports:k}},methods:{open:function(b){var d=b.to,f=b.from,g=b.passengers;if(d&&f&&g){b.passengers=c(g);var h=Object.keys(this.transports);-1===h.indexOf(d)&&a.set(this.transports,d,[]);var i=this.getTransportIndex(b),j=this.transports[d].slice(0);-1===i?j.push(b):j[i]=b,this.transports[d]=e(j,function(c,a){return c.order-a.order})}},close:function(a){var b=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],c=a.to,d=a.from;if(c&&d&&this.transports[c])if(b)this.transports[c]=[];else{var e=this.getTransportIndex(a);if(0<=e){var f=this.transports[c].slice(0);f.splice(e,1),this.transports[c]=f}}},hasTarget:function(a){return this.transports.hasOwnProperty(a)},hasContentFor:function(a){return!!this.transports[a]&&0<this.getContentFor(a).length},getSourceFor:function(a){return this.transports[a]&&this.transports[a][0].from},getContentFor:function(a){var b=this.transports[a];return b?d(b):void 0},getTransportIndex:function(a){var b=a.to,c=a.from;for(var d in this.transports[b])if(this.transports[b][d].from===c)return d;return-1}}}),m=new l(k),n=/^(attrs|props|on|nativeOn|class|style|hook)$/,o=function(a){return a.reduce(function(c,a){var b,d,e,g,h;for(e in a)if(b=c[e],d=a[e],!(b&&n.test(e)))c[e]=a[e];else if("class"===e&&("string"==typeof b&&(h=b,c[e]=b={},b[h]=!0),"string"==typeof d&&(h=d,a[e]=d={},d[h]=!0)),"on"===e||"nativeOn"===e||"hook"===e)for(g in d)b[g]=f(b[g],d[g]);else if(Array.isArray(b))c[e]=b.concat(d);else if(Array.isArray(d))c[e]=[b].concat(d);else for(g in d)b[g]=d[g];return c},{})},p={abstract:!1,name:"portalTarget",props:{attributes:{type:Object,default:function(){return{}}},multiple:{type:Boolean,default:!1},name:{type:String,required:!0},slim:{type:Boolean,default:!1},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},transition:{type:[Boolean,String,Object],default:!1},transitionEvents:{type:Object,default:function(){return{}}}},data:function(){return{transports:m.transports,firstRender:!0}},created:function(){this.transports[this.name]||this.$set(this.transports,this.name,[])},mounted:function(){var a=this;this.unwatch=this.$watch("ownTransports",this.emitChange),this.$nextTick(function(){a.transition&&(a.firstRender=!1)}),this.$options.abstract&&(this.$options.abstract=!1)},updated:function(){this.$options.abstract&&(this.$options.abstract=!1)},beforeDestroy:function(){this.unwatch()},computed:{ownTransports:function(){var a=this.transports[this.name]||[];return this.multiple?a:0===a.length?[]:[a[a.length-1]]},passengers:function(){return d(this.ownTransports,this.slotProps)},hasAttributes:function(){return 0<Object.keys(this.attributes).length},withTransition:function(){return!!this.transition},transitionData:function(){var a=this.transition,b={};return this.firstRender&&"object"===h(this.transition)&&!this.transition.appear?(b.props={name:"__notranstition__portal-vue__"},b):("string"==typeof a?b.props={name:a}:"object"===("undefined"==typeof a?"undefined":h(a))&&(b.props=a),this.renderSlim&&(b.props.tag=this.tag),b.on=this.transitionEvents,b)},transportedClasses:function(){return this.ownTransports.map(function(a){return a.class}).reduce(function(a,b){return a.concat(b)},[])}},methods:{emitChange:function(a,b){if(this.multiple)this.$emit("change",[].concat(j(a)),[].concat(j(b)));else{var c=0===a.length?void 0:a[0],d=0===b.length?void 0:b[0];this.$emit("change",i({},c),i({},d))}},children:function(){return 0===this.passengers.length?this.$slots.default||[]:this.passengers},noWrapper:function a(){var a=!this.hasAttributes&&this.slim;return a&&1<this.children().length&&console.warn("[portal-vue]: PortalTarget with `slim` option received more than one child element."),a}},render:function(a){this.$options.abstract=!0;var b=this.noWrapper(),c=this.children(),d=b?"transition":"transition-group",e=this.tag;if(this.withTransition)return a(d,o([this.transitionData,{class:"vue-portal-target"}]),[c]);var f=this.ownTransports.length;return b?c[0]:a(e,o([{class:"vue-portal-target "+this.transportedClasses.join(" ")},this.attributes,{key:f}]),[c])}},q="undefined"!=typeof window,r=1,s={abstract:!1,name:"portal",props:{disabled:{type:Boolean,default:!1},name:{type:String,default:function(){return r++ +""}},order:{type:Number,default:0},slim:{type:Boolean,default:!1},slotProps:{type:Object,default:function(){return{}}},tag:{type:[String],default:"DIV"},targetEl:{type:q?[String,HTMLElement]:String},targetClass:{type:String},to:{type:String,default:function(){return Math.round(1e7*Math.random())+""}}},mounted:function(){this.targetEl&&this.mountToTarget(),this.disabled||this.sendUpdate(),this.$options.abstract&&(this.$options.abstract=!1)},updated:function(){this.disabled?this.clear():this.sendUpdate(),this.$options.abstract&&(this.$options.abstract=!1)},beforeDestroy:function(){this.clear(),this.mountedComp&&this.mountedComp.$destroy()},watch:{to:function(a,b){b&&b!==a&&this.clear(b),this.sendUpdate()},targetEl:function(a){a&&this.mountToTarget()}},methods:{normalizedSlots:function(){return this.$scopedSlots.default?[this.$scopedSlots.default]:this.$slots.default},sendUpdate:function(){var a=this.normalizedSlots();a?m.open({from:this.name,to:this.to,passengers:[].concat(j(a)),class:this.targetClass&&this.targetClass.split(" "),order:this.order}):this.clear()},clear:function(a){m.close({from:this.name,to:a||this.to})},mountToTarget:function(){var c=void 0,d=this.targetEl;if("string"==typeof d)c=document.querySelector(d);else if(d instanceof HTMLElement)c=d;else return void console.warn("[vue-portal]: value of targetEl must be of type String or HTMLElement");if(c){var e=new a(i({},p,{parent:this,propsData:{name:this.to,tag:c.tagName,attributes:b(c)}}));e.$mount(c),this.mountedComp=e}else console.warn("[vue-portal]: The specified targetEl "+d+" was not found")},normalizeChildren:function(a){return"function"==typeof a?a(this.slotProps):a}},render:function(a){var b=this.$slots.default||this.$scopedSlots.default||[],c=this.tag;return b.length&&this.disabled?(this.$options.abstract=!0,1>=b.length&&this.slim?b[0]:a(c,[this.normalizeChildren(b)])):a(c,{class:"v-portal",style:"display: none",key:"v-portal-placeholder"})}};"undefined"!=typeof window&&window.Vue&&window.Vue.use({install:g});return{install:g,Portal:s,PortalTarget:p,Wormhole:m}})}),g=f.Portal,h={name:"VueA11yDialog",props:{id:{type:String,required:!0},appRoot:{type:[String,Array],required:!0},dialogRoot:{type:String,required:!0},classNames:{type:Object,default:()=>({})},titleId:{type:String},closeButtonLabel:{type:String,default:"Close this dialog window"},disableNative:{type:Boolean,default:!1},role:{type:String,default:"dialog"}},components:{Portal:g},computed:{fullTitleId(){return this.titleId||this.id+"-title"},dialogElement(){return this.disableNative?"div":"dialog"},roleAttribute(){return["dialog","alertdialog"].includes(this.role)?this.role:"dialog"},portalTarget(){return this.dialogRoot||this.appRoot}},data:()=>({dialog:null}),methods:{close(){this.dialog.hide()}},mounted(){this.$nextTick(()=>{this.dialog=new e(this.$refs.rootElement,this.appRoot),this.$emit("dialog-ref",this.dialog)})},destroyed(){this.dialog&&this.dialog.destroy(),this.$emit("dialog-ref")}};var i=function(a,b,c,d,e){const f=("function"==typeof c?c.options:c)||{};return f.__file="A11yDialog.vue",f.render||(f.render=a.render,f.staticRenderFns=a.staticRenderFns,f._compiled=!0,e&&(f.functional=!0)),f._scopeId=d,f}({render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("portal",{attrs:{"target-el":a.portalTarget}},[c("div",{ref:"rootElement",class:a.classNames.base,attrs:{id:a.id}},[c("div",{class:a.classNames.overlay,attrs:{"data-a11y-dialog-hide":"",tabIndex:"-1"},on:{click:function(){"alertdialog"===a.role?void 0:a.close}}}),a._v(" "),c(a.dialogElement,{tag:"component",class:a.classNames.element,attrs:{role:a.roleAttribute,"aria-labelledby":a.titleId}},[c("div",{class:a.classNames.document,attrs:{role:"document"}},[c("button",{class:a.classNames.closeButton,attrs:{"data-a11y-dialog-hide":"",type:"button","aria-label":a.closeButtonLabel},on:{click:a.close}},[a._t("closeButtonContent",[a._v("\n            "+a._s("\xD7")+"\n          ")])],2),a._v(" "),c("h1",{class:a.classNames.title,attrs:{id:a.fullTitleId}},[a._t("title")],2),a._v(" "),a._t("default")],2)])],1)])},staticRenderFns:[]},void 0,h,void 0,!1,void 0,void 0,void 0),j={install(a){a.component("a11y-dialog",i)}};a.A11yDialog=i,a.default=j,Object.defineProperty(a,"__esModule",{value:!0})});
