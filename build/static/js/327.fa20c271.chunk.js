"use strict";(self.webpackChunktemplate_react_app=self.webpackChunktemplate_react_app||[]).push([[327],{4453:function(e,t,n){var r=n(1413),a=n(5987),s=(n(2791),n(184)),o=["children","className"];t.Z=function(e){var t=e.children,n=e.className,c=void 0===n?"":n,l=(0,a.Z)(e,o);return(0,s.jsx)("button",(0,r.Z)((0,r.Z)({className:"bg-primary py-2 px-5 rounded-lg border-2 text-white transition-all active:scale-90 cursor-pointer select-none hover:bg-opacity-90 text-center border-none ".concat(c," ")},l),{},{children:t}))}},3458:function(e,t,n){n.d(t,{T:function(){return r}});var r="http://localhost:8080/api/"},4212:function(e,t,n){var r=n(4165),a=n(5861),s=n(4569),o=n.n(s),c=n(456),l=n(7689),i=n(3458),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("refresh_token"),e.next=4,o().post(i.T+"account/refresh-token",{},{headers:{Authorization:"Bearer ".concat(t)}});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();t.Z=function(){var e=o().create();return e.interceptors.request.use(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=localStorage.getItem("access_token"))){e.next=19;break}if(a=(0,c.Z)(n),e.prev=3,!(a.exp<Date.now()/1e3)){e.next=13;break}return e.next=7,u();case 7:s=e.sent,localStorage.setItem("access_token",s.accessToken),localStorage.setItem("refresh_token",s.refreshToken),t.headers.Authorization="Bearer "+s.accessToken,e.next=14;break;case 13:t.headers.Authorization="Bearer "+n;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0);case 19:return e.abrupt("return",t);case 20:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.log(e),(0,l.s0)()("/")})),e}},3510:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(2791),a=n(7689),s=n(4165),o=n(5861),c=n(885),l=n(3458),i=n.p+"static/media/logo.9f1e7684361584692496.png",u=n(2982),x=n(1087),d=n(456),f=n(4212),p=n(9520),m=n(2426),v=n.n(m),g=n(4453),h=n(184),b=function(e){var t=e.value,n=e.seenNoti,a=localStorage.getItem("access_token"),s=a&&(0,d.Z)(a),o=(0,r.useContext)(p.J),l=(0,r.useState)(!1),i=(0,c.Z)(l,2),u=i[0],x=i[1],f=(0,r.useState)(!1),m=(0,c.Z)(f,2),b=m[0],j=m[1],y=function(e,t){null===o||void 0===o||o.emit("send-handle-request-notification",{senderId:null===s||void 0===s?void 0:s.accountId,receiverId:null===e||void 0===e?void 0:e.senderAccountId,notificationContentId:null===e||void 0===e?void 0:e.id,tableHandle:null===e||void 0===e?void 0:e.tableHandle,idTableHandle:null===e||void 0===e?void 0:e.idTableHandle,answer:t}),j(!0),x(!0),n(null===e||void 0===e?void 0:e.id)};return(0,r.useEffect)((function(){j(!(null===t||void 0===t||!t.isAnswered))}),[null===t||void 0===t?void 0:t.isAnswered]),(0,r.useEffect)((function(){x(!(null===t||void 0===t||!t.isSeen))}),[null===t||void 0===t?void 0:t.isSeen]),t&&(0,h.jsxs)("div",{className:"flex flex-row p-3 select-none hover:bg-gray-100 transition-all gap-4 \n        ".concat(u?"":"bg-blue-100 bg-opacity-50"),children:[(0,h.jsx)("i",{className:"fa-solid fa-circle-exclamation text-2xl text-primary mt-1 ml-1"}),(0,h.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,h.jsx)("span",{className:"max-w-[260px] pt-1 text-sm whitespace-normal break-words text-gray-600",children:t.content}),(0,h.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,h.jsxs)("span",{className:"text-xs text-gray-400",children:[v()(t.dateRequest).format("DD MMM, YYYY"),(0,h.jsx)("br",{}),v()(t.dateRequest).format("hh:mm A")]}),!b&&(0,h.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,h.jsx)(g.Z,{className:"text-xs",onClick:function(){y(t,!0)},children:"Accept"}),(0,h.jsx)(g.Z,{className:"text-xs bg-white text-primary shadow border border-primary",onClick:function(){y(t,!1)},children:"Deny"})]})]})]})]})},j=n(9085),y=(n(5462),(0,f.Z)());var w=function(){var e=localStorage.getItem("access_token"),t=(0,r.useMemo)((function(){return e&&(0,d.Z)(e)}),[e]),n=(0,r.useContext)(p.J),a=(0,r.useState)(!1),i=(0,c.Z)(a,2),f=i[0],m=i[1],v=(0,r.useState)([]),g=(0,c.Z)(v,2),w=g[0],N=g[1],k=(0,r.useState)(!1),Z=(0,c.Z)(k,2),I=Z[0],S=Z[1],C=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.put(l.T+"notification-content/".concat(t,"/seen-notification"));case 3:S(!1),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.put(l.T+"notification-content/receiver/".concat(t.accountId,"/seen-all-notification"));case 3:S(!1),A(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,r.useEffect)((function(){return null===n||void 0===n||n.on("get-request-unlock-topic",function(){var e=(0,o.Z)((0,s.Z)().mark((function e(n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.senderId!==(null===t||void 0===t?void 0:t.accountId)&&(N((function(e){return[n].concat((0,u.Z)(e))})),j.Am.info(null===n||void 0===n?void 0:n.content,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),S(!0));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),function(){null===n||void 0===n||n.off("get-request-unlock-topic")}}),[n,t]);var A=(0,r.useCallback)((0,o.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=7;break}return e.next=4,y.get(l.T+"notification-content/receiver/".concat(t.accountId));case 4:n=e.sent,N(n.data),null!==(r=n.data)&&void 0!==r&&r.some((function(e){return 0===e.isSeen}))?S(!0):S(!1);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}var r}),e,null,[[0,9]])}))),[t]);(0,r.useEffect)((function(){A()}),[A]);var T=(0,r.useRef)(null);return function(e,t){(0,r.useEffect)((function(){function n(n){e.current&&!e.current.contains(n.target)&&t(!1)}return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e])}(T,m),(0,h.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,h.jsxs)(x.OL,{to:"/dashboard",className:function(e){return e.isActive?"flex flex-row items-center gap-5 cursor-pointer px-8 py-2 rounded-lg transition-all  text-gray-600 bg-[#e5ebee]":"flex flex-row items-center gap-5 cursor-pointer px-8 py-2 rounded-lg transition-all hover:bg-gray-100 text-gray-600"},children:[(0,h.jsx)("i",{className:"fa-solid fa-chart-line text-xl pb-1"}),(0,h.jsx)("span",{className:"font-semibold text-sm",children:"Dashboard"})]}),(0,h.jsxs)(x.OL,{to:"/class",className:function(e){return e.isActive?"flex flex-row items-center gap-5 cursor-pointer px-8 py-2 rounded-lg transition-all  text-gray-600 bg-[#e5ebee]":"flex flex-row items-center gap-5 cursor-pointer px-8 py-2 rounded-lg transition-all hover:bg-gray-100  text-gray-600"},children:[(0,h.jsx)("i",{className:"far fa-bookmark text-xl mb-1 ml-1"}),(0,h.jsx)("span",{className:"font-semibold ml-[3px] text-sm",children:"Classes"})]}),(0,h.jsxs)("div",{className:"relative",ref:T,children:[(0,h.jsx)(j.Ix,{}),(0,h.jsxs)("div",{onClick:function(){return m(!f)},className:f?"flex flex-row relative items-center gap-5 cursor-pointer px-8 py-2 rounded-lg transition-all select-none  text-gray-600 bg-[#e5ebee]":"flex flex-row relative items-center gap-5 cursor-pointer px-8 py-2 rounded-lg transition-all select-none hover:bg-gray-100  text-gray-600",children:[(0,h.jsx)("i",{className:"fa-regular fa-bell text-xl"}),(0,h.jsx)("span",{className:"font-semibold ml-1 text-sm",children:"Notification"}),I&&(0,h.jsx)("div",{className:"absolute bg-red-500 w-[8px] h-[8px] translate-x-3 -translate-y-3 rounded-full"})]}),(0,h.jsxs)("div",{className:"".concat(f?"":"hidden","  absolute bg-white rounded-r-lg pr-1 pb-2 shadow flex flex-col w-[350px] h-screen wibu:h-screen translate-x-[210px] wibu:-translate-y-[365px] -translate-y-[365px] z-[1000px]"),children:[(0,h.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,h.jsx)("span",{className:"text-xl text-gray-600 font-[500] px-5 py-3",children:"Notifications"}),(0,h.jsx)("span",{onClick:O,className:"text-sm text-primary pr-3 pt-1 select-none cursor-pointer",children:"Mark as read all"})]}),(0,h.jsx)("div",{className:"flex flex-col overflow-y-auto",children:null===w||void 0===w?void 0:w.map((function(e,t){return(0,h.jsx)(b,{seenNoti:C,value:e},e.id)}))})]})]}),(0,h.jsxs)(x.OL,{to:"/profile",className:function(e){return e.isActive?"flex flex-row items-center gap-5 cursor-pointer px-8 py-2 rounded-lg transition-all  text-gray-600 bg-[#f9fbfc]":"flex flex-row items-center gap-5 cursor-pointer px-8 py-2 rounded-lg transition-all hover:bg-gray-100 text-gray-600"},children:[(0,h.jsx)("i",{className:"fa-regular fa-user text-xl pb-1 pr-1"}),(0,h.jsx)("span",{className:"font-semibold text-sm",children:"Profile"})]})]})},N=function(e){var t,n=e.value,r=e.seenNoti,a=null===n||void 0===n||null===(t=n.content)||void 0===t?void 0:t.split(" ");return n&&(0,h.jsxs)("div",{onClick:function(){return r(null===n||void 0===n?void 0:n.id)},className:"flex flex-row p-3 select-none cursor-pointer hover:bg-blue-100 transition-all gap-4 ".concat(!1===(null===n||void 0===n?void 0:n.isSeen)?"bg-blue-100 bg-opacity-50":""),children:[a&&"accepted"===a[(null===a||void 0===a?void 0:a.length)-1].toLowerCase()?(0,h.jsx)("i",{className:"fa-solid fa-square-check text-2xl text-green-400"}):(0,h.jsx)("i",{className:"fa-solid fa-square-xmark text-2xl text-red-400"}),(0,h.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,h.jsx)("span",{className:"max-w-[260px] pt-1 text-sm whitespace-normal break-words text-gray-600",children:n.content}),(0,h.jsx)("span",{className:"text-xs text-gray-400",children:v()(n.dateRequest).format("lll")})]})]})},k=(0,f.Z)();var Z=function(e){var t=e.isParent,n=localStorage.getItem("access_token"),a=(0,r.useMemo)((function(){return n&&(0,d.Z)(n)}),[n]),i=a&&a.classId,f=(0,r.useContext)(p.J),m=(0,r.useState)(!1),v=(0,c.Z)(m,2),g=v[0],b=v[1],y=(0,r.useState)([]),w=(0,c.Z)(y,2),Z=w[0],I=w[1],S=(0,r.useState)(!1),C=(0,c.Z)(S,2),O=C[0],A=C[1],T=(0,r.useState)(),E=(0,c.Z)(T,2),_=E[0],L=E[1],q=(0,r.useRef)(null);!function(e,t){(0,r.useEffect)((function(){function n(n){e.current&&!e.current.contains(n.target)&&t(!1)}return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e])}(q,b),(0,r.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(n){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=7;break}return e.next=4,k.get(l.T+"parent/student/".concat(n,"/class"));case 4:r=e.sent,e.next=10;break;case 7:return e.next=9,k.get(l.T+"student/class");case 9:r=e.sent;case 10:L(r.data),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();i||a&&e(a.userId)}),[a,i,t]),(0,r.useEffect)((function(){return null===f||void 0===f||f.on("get-handle-request-notification",(function(e){(null===e||void 0===e?void 0:e.senderId)!==(null===a||void 0===a?void 0:a.accountId)&&(I((function(t){return[e].concat((0,u.Z)(t))})),j.Am.info(null===e||void 0===e?void 0:e.content,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),A(!0))})),function(){null===f||void 0===f||f.off("get-handle-request-notification")}}),[f,a]);var P=(0,r.useCallback)((0,o.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!a){e.next=7;break}return e.next=4,k.get(l.T+"notification-content/receiver/".concat(a.accountId));case 4:t=e.sent,I(t.data),t.data.some((function(e){return!1===e.isSeen}))?A(!0):A(!1);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[a]);(0,r.useEffect)((function(){P()}),[P]);var M=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.put(l.T+"notification-content/".concat(t,"/seen-notification"));case 3:P(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,h.jsxs)(x.OL,{to:"/dashboard",className:function(e){return e.isActive?"flex flex-row items-center gap-5 cursor-pointer px-8 py-2 rounded-lg transition-all  text-gray-600 bg-[#e5ebee]":"flex flex-row items-center gap-5 cursor-pointer px-8 py-2 rounded-lg transition-all hover:bg-gray-100 text-gray-600"},children:[(0,h.jsx)("i",{className:"fas fa-home text-xl pb-1"}),(0,h.jsx)("span",{className:"font-semibold text-sm",children:"Dashboard"})]}),(0,h.jsxs)(x.OL,{to:"/class/".concat(i||(null===_||void 0===_?void 0:_.id)),className:function(e){return e.isActive?"flex flex-row items-center gap-5 cursor-pointer px-8 py-2 rounded-lg transition-all  text-gray-600 bg-[#e5ebee]":"flex flex-row items-center gap-5 cursor-pointer px-8 py-2 rounded-lg transition-all hover:bg-gray-100  text-gray-600"},children:[(0,h.jsx)("i",{className:"far fa-bookmark text-xl mb-1 ml-1"}),(0,h.jsx)("span",{className:"font-semibold ml-1 text-sm",children:"Class"})]}),!t&&(0,h.jsxs)("div",{className:"relative",ref:q,children:[(0,h.jsx)(j.Ix,{}),(0,h.jsxs)("div",{onClick:function(){return b(!g)},className:g?"flex flex-row relative items-center gap-5 cursor-pointer px-8 py-2 rounded-lg transition-all select-none  text-gray-600 bg-[#e5ebee]":"flex flex-row relative items-center gap-5 cursor-pointer px-8 py-2 rounded-lg transition-all select-none hover:bg-gray-100  text-gray-600",children:[(0,h.jsx)("i",{className:"fa-regular fa-bell text-xl"}),(0,h.jsx)("span",{className:"font-semibold ml-1 text-sm",children:"Notification"}),O&&(0,h.jsx)("div",{className:"absolute bg-red-500 w-[8px] h-[8px] translate-x-3 -translate-y-3 rounded-full"})]}),(0,h.jsxs)("div",{className:"".concat(g?"":"hidden","  absolute bg-white rounded-r-lg pr-1 pb-2 shadow flex flex-col w-[350px] h-screen wibu:h-screen translate-x-[215px] -translate-y-[365px] wibu:-translate-y-[365px] z-[1000px]"),children:[(0,h.jsxs)("div",{className:"flex flex-row items-center justify-between px-3 py-3",children:[(0,h.jsx)("span",{className:"text-xl text-gray-600 font-[500] ",children:"Notifications"}),(0,h.jsx)("span",{onClick:function(){try{k.put(l.T+"notification-content/receiver/".concat(a.accountId,"/seen-all-notification")),P()}catch(e){console.log(e)}},className:"text-xs text-primary cursor-pointer select-none",children:"Mark as read all"})]}),(0,h.jsx)("div",{className:"flex flex-col overflow-y-auto",children:Z.map((function(e,t){return(0,h.jsx)(N,{seenNoti:M,value:e},t)}))})]})]}),(0,h.jsxs)(x.OL,{to:"/exams",className:function(e){return e.isActive?"flex flex-row items-center gap-5 cursor-pointer px-8 py-2 rounded-lg transition-all  text-gray-600 bg-[#e5ebee]":"flex flex-row items-center gap-5 cursor-pointer px-8 py-2 rounded-lg transition-all hover:bg-gray-100 text-gray-600"},children:[(0,h.jsx)("i",{className:"fa-solid fa-book text-xl pr-1"}),(0,h.jsx)("span",{className:"font-semibold text-sm",children:"Exams"})]}),(0,h.jsxs)(x.OL,{to:"/profile",className:function(e){return e.isActive?"flex flex-row items-center gap-5 cursor-pointer px-8 py-2 rounded-lg transition-all  text-gray-600 bg-[#e5ebee]":"flex flex-row items-center gap-5 cursor-pointer px-8 py-2 rounded-lg transition-all hover:bg-gray-100 text-gray-600"},children:[(0,h.jsx)("i",{className:"fa-regular fa-user text-xl pb-1 pr-1"}),(0,h.jsx)("span",{className:"font-semibold text-sm",children:"Profile"})]})]})},I=(0,f.Z)(),S=function(){var e,t=(0,r.useContext)(p.J),n=(0,a.s0)(),u=localStorage.getItem("access_token"),x=(0,r.useMemo)((function(){return u&&(0,d.Z)(u)}),[u]),f=(0,r.useState)([]),m=(0,c.Z)(f,2),v=m[0],g=m[1],b={name:x&&x.fullName,imageUrl:"https://bizweb.dktcdn.net/100/307/433/articles/87126502-2509242206005371-2073523065622364160-n.jpg?v=1627806241047",role:(e=null===x||void 0===x?void 0:x.roleId,1===e?"Admin":2===e?"Teacher":3===e?"Student":4===e?"Parent":"")},j=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.delete(l.T+"account/logout");case 3:localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),n("/"),window.location.reload(),e.next=16;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),n("/"),window.location.reload();case 16:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),y=(0,r.useCallback)((0,o.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!x){e.next=6;break}return e.next=4,I.get(l.T+"notification-room/receiver/".concat(x.accountId));case 4:t=e.sent,g(t.data);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[x]);(0,r.useEffect)((function(){y()}),[y]),(0,r.useEffect)((function(){v&&(null===t||void 0===t||t.emit("rooms",v))}),[t,v]);return(0,h.jsxs)("div",{className:"w-[240px] items-center h-full fixed top-0 left-0 bg-white shadow-sm flex flex-col p-5 gap-10 justify-between",children:[(0,h.jsxs)("div",{className:"flex flex-col justify-center items-center gap-20",children:[(0,h.jsx)("img",{src:i,alt:"",className:"w-[200px] h-[100px] object-contain"}),function(e){return 1===e?(0,h.jsx)(h.Fragment,{}):2===e?(0,h.jsx)(w,{}):3===e?(0,h.jsx)(Z,{}):4===e?(0,h.jsx)(Z,{isParent:!0}):(0,h.jsx)(h.Fragment,{})}(null===x||void 0===x?void 0:x.roleId)]}),(0,h.jsxs)("div",{className:"flex flex-row gap-3 items-center justify-between",children:[(0,h.jsx)("img",{src:null===b||void 0===b?void 0:b.imageUrl,alt:"",className:"w-[50px] h-[50px] bg-cover rounded-full"}),(0,h.jsxs)("div",{className:"flex flex-col justify-center text-gray-600",children:[(0,h.jsx)("span",{className:"font-semibold text-sm w-[100px] truncate",children:null===b||void 0===b?void 0:b.name}),(0,h.jsx)("span",{className:"text-xs",children:null===b||void 0===b?void 0:b.role})]}),(0,h.jsx)("div",{className:"flex justify-center items-center divide-solid cursor-pointer hover:bg-gray-200 px-2 h-8 rounded-lg text-gray-600",onClick:j,children:(0,h.jsx)("i",{className:"fas fa-sign-out-alt"})})]})]})},C=function(e){return e.role?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"pl-60",children:(0,h.jsx)(a.j3,{})}),(0,h.jsx)(S,{})]}):(0,h.jsx)(a.j3,{})}},5462:function(){},5987:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(3366);function a(e,t){if(null==e)return{};var n,a,s=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}},3366:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=327.fa20c271.chunk.js.map