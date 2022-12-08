/*! For license information please see 285.c304a313.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunktemplate_react_app=self.webpackChunktemplate_react_app||[]).push([[285],{4453:function(e,t,r){var n=r(1413),a=r(5987),o=(r(2791),r(184)),i=["children","className"];t.Z=function(e){var t=e.children,r=e.className,l=void 0===r?"":r,s=(0,a.Z)(e,i);return(0,o.jsx)("button",(0,n.Z)((0,n.Z)({className:"bg-primary py-2 px-5 rounded-lg border-2 text-white transition-all active:scale-90 cursor-pointer select-none hover:bg-opacity-90 text-center border-none ".concat(l," ")},s),{},{children:t}))}},4716:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(885),a=r(2791),o=r(4453),i=r(1413),l=r(7948),s=r.n(l),c=r(1134),u=r(4255),d=r(184),p={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(165, 165, 165, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"8px"}},h=[{value:"1",label:"Admin"},{value:"2",label:"Teacher"},{value:"3",label:"Student"},{value:"4",label:"Parent"}],f=function(e){var t,r=e.isOpen,l=e.setIsOpen,f=e.edit,x=(0,c.cI)(),m=x.control,y=x.register,v=x.formState.errors,g=x.handleSubmit,b=x.watch,w=(0,a.useState)(!1),j=(0,n.Z)(w,2),N=j[0],k=j[1],E=b("role");console.log(v.email),(0,a.useEffect)((function(){"3"===(null===E||void 0===E?void 0:E.value)?k(!0):k(!1)}),[E]);return(0,d.jsx)(s(),{id:"AccountManageModal",isOpen:r,style:p,shouldCloseOnOverlayClick:!0,contentLabel:"Example Modal",ariaHideApp:!1,children:(0,d.jsxs)("div",{className:"flex flex-col w-[500px] h-fit gap-5",children:[(0,d.jsx)("span",{className:"text-2xl",children:"Create account"}),(0,d.jsxs)("form",{className:"flex flex-col gap-5",onSubmit:g((function(e){console.log(e)})),children:[(0,d.jsxs)("div",{className:"flex flex-col gap-2 px-2",children:[(0,d.jsx)("span",{className:"px-2",children:"Role"}),(0,d.jsx)(c.Qr,{name:"role",control:m,rules:{required:!0},render:function(e){var t=e.field;return(0,d.jsx)(u.ZP,(0,i.Z)((0,i.Z)({},t),{},{options:h,placeholder:"Pick a role"}))}})]}),N&&(0,d.jsxs)("div",{className:"flex flex-col gap-2 px-2 w-full",children:[(0,d.jsx)("span",{className:"px-2",children:"Parent id"}),(0,d.jsx)("input",(0,i.Z)((0,i.Z)({},y("parentId",{required:!0})),{},{placeholder:"Parent id",className:"outline-none px-3 py-1 border-b-2  border-opacity-0 transition-all focus:border-primary"}))]}),(0,d.jsxs)("div",{className:"flex flex-col gap-2 px-2 w-full",children:[(0,d.jsxs)("span",{className:"px-2 flex flex-row justify-between items-center",children:["Email","pattern"===(null===(t=v.email)||void 0===t?void 0:t.type)&&(0,d.jsx)("p",{role:"alert",className:"text-red-500 w-full text-right text-sm",children:"Wrong email format"})]}),(0,d.jsx)("input",(0,i.Z)((0,i.Z)({type:"text"},y("email",{required:"Email is required",pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,message:"Please enter valid Email"}})),{},{placeholder:"Type in email",className:"outline-none px-3 py-1 border-b-2  border-opacity-0 transition-all focus:border-primary"}))]}),(0,d.jsxs)("div",{className:"flex flex-col gap-2 px-2 w-full",children:[(0,d.jsx)("span",{className:"px-2",children:"Password"}),(0,d.jsx)("input",(0,i.Z)((0,i.Z)({type:"password"},y("password",{required:!0})),{},{placeholder:"Type in password",className:"outline-none px-3 py-1 border-b-2  border-opacity-0 transition-all focus:border-primary"}))]}),(0,d.jsxs)("div",{className:"w-full flex flex-row-reverse gap-5",children:[(0,d.jsx)(o.Z,{onClick:function(){return l(!r)},children:"Cancel"}),(0,d.jsx)(o.Z,{type:"submit",children:f?"Save":"Create"})]})]})]})})},x=function(){var e=(0,a.useState)(!1),t=(0,n.Z)(e,2),r=t[0],i=t[1];return(0,d.jsxs)("div",{className:"px-10 py-7 flex flex-col gap-5",children:[(0,d.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,d.jsx)("span",{className:"text-2xl font-[500]",children:"Manage Account"}),(0,d.jsx)(o.Z,{onClick:function(){i(!0)},children:"Add an account"}),(0,d.jsx)(f,{isOpen:r,setIsOpen:i})]}),(0,d.jsx)("div",{className:"overflow-x-auto relative shadow-md sm:rounded-lg",children:(0,d.jsxs)("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[(0,d.jsx)("thead",{className:" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{scope:"col",className:"py-3 px-6",children:"Id"}),(0,d.jsx)("th",{scope:"col",className:"py-3 px-6",children:"Email"}),(0,d.jsx)("th",{scope:"col",className:"py-3 px-6",children:"Name"}),(0,d.jsx)("th",{scope:"col",className:"py-3 px-6",children:"Active"}),(0,d.jsx)("th",{scope:"col",className:"py-3 px-6",children:"Role"}),(0,d.jsx)("th",{scope:"col",className:"py-3 px-6",children:(0,d.jsx)("span",{className:"sr-only",children:"Edit"})})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[(0,d.jsx)("th",{scope:"row",className:"py-4 px-6",children:"1"}),(0,d.jsx)("th",{className:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:'Apple MacBook Pro 17"'}),(0,d.jsx)("td",{className:"py-4 px-6",children:"Sliver"}),(0,d.jsx)("td",{className:"py-4 px-6",children:"Laptop"}),(0,d.jsx)("td",{className:"py-4 px-6",children:"$2999"}),(0,d.jsx)("td",{className:"py-4 px-6 text-right",children:(0,d.jsx)("span",{className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Edit"})})]}),(0,d.jsxs)("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[(0,d.jsx)("th",{scope:"row",className:"py-4 px-6",children:"1"}),(0,d.jsx)("th",{className:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:'Apple MacBook Pro 17"'}),(0,d.jsx)("td",{className:"py-4 px-6",children:"Sliver"}),(0,d.jsx)("td",{className:"py-4 px-6",children:"Laptop"}),(0,d.jsx)("td",{className:"py-4 px-6",children:"$2999"}),(0,d.jsx)("td",{className:"py-4 px-6 text-right",children:(0,d.jsx)("span",{className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Edit"})})]}),(0,d.jsxs)("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[(0,d.jsx)("th",{scope:"row",className:"py-4 px-6",children:"1"}),(0,d.jsx)("th",{className:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:'Apple MacBook Pro 17"'}),(0,d.jsx)("td",{className:"py-4 px-6",children:"Sliver"}),(0,d.jsx)("td",{className:"py-4 px-6",children:"Laptop"}),(0,d.jsx)("td",{className:"py-4 px-6",children:"$2999"}),(0,d.jsx)("td",{className:"py-4 px-6 text-right",children:(0,d.jsx)("span",{className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"Edit"})})]})]})]})})]})}},5861:function(e,t,r){function n(e,t,r,n,a,o,i){try{var l=e[o](i),s=l.value}catch(c){return void r(c)}l.done?t(s):Promise.resolve(s).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function l(e){n(i,a,o,l,s,"next",e)}function s(e){n(i,a,o,l,s,"throw",e)}l(void 0)}))}}r.d(t,{Z:function(){return a}})},4165:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(1002);function a(){a=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(O){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new E(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return Z()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=j(i,r);if(l){if(l===p)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=d(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),o}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(O){return{type:"throw",arg:O}}}e.wrap=u;var p={};function h(){}function f(){}function x(){}var m={};c(m,i,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(L([])));v&&v!==t&&r.call(v,i)&&(m=v);var g=x.prototype=h.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function a(o,i,l,s){var c=d(e[o],e,i);if("throw"!==c.type){var u=c.arg,p=u.value;return p&&"object"==(0,n.Z)(p)&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){a("next",e,l,s)}),(function(e){a("throw",e,l,s)})):t.resolve(p).then((function(e){u.value=e,l(u)}),(function(e){return a("throw",e,l,s)}))}s(c.arg)}var o;this._invoke=function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return o=o?o.then(n,n):n()}}function j(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=d(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function L(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return f.prototype=x,c(g,"constructor",x),c(x,"constructor",f),f.displayName=c(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,c(e,s,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(w.prototype),c(w.prototype,l,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),c(g,s,"Generator"),c(g,i,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}}}]);
//# sourceMappingURL=285.c304a313.chunk.js.map