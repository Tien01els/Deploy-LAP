"use strict";(self.webpackChunktemplate_react_app=self.webpackChunktemplate_react_app||[]).push([[274],{4453:function(e,n,t){var s=t(1413),a=t(5987),r=(t(2791),t(184)),i=["children","className"];n.Z=function(e){var n=e.children,t=e.className,l=void 0===t?"":t,o=(0,a.Z)(e,i);return(0,r.jsx)("button",(0,s.Z)((0,s.Z)({className:"bg-primary py-2 px-5 rounded-lg border-2 text-white transition-all active:scale-90 cursor-pointer select-none hover:bg-opacity-90 text-center border-none ".concat(l," ")},o),{},{children:n}))}},8093:function(e,n,t){var s=t(4165),a=t(5861),r=t(885),i=t(2791),l=t(7948),o=t.n(l),c=t(2426),u=t.n(c),d=t(7689),m=t(3458),x=t(4212),p=t(1756),f=t(4453),v=t(184),g=(0,x.Z)(),h={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(165, 165, 165, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"8px",overflow:"unset !important"}};n.Z=function(e){var n=e.isOpen,t=e.setIsOpen,l=e.val,c=e.isParent,x=e.classPage,j=(0,d.s0)(),w=(0,i.useState)(!1),b=(0,r.Z)(w,2),k=b[0],Z=b[1];console.log("Teacher",l);var N=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n,t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"start"!==t){e.next=4;break}return e.next=4,g.put(m.T+"student-assignment/student/assignment/".concat(n,"/start"));case 4:j("/assignment/".concat(n,"/question/")),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),401===e.t0.response.status&&Z(!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,v.jsxs)(o(),{isOpen:n,style:h,contentLabel:"Example Modal",ariaHideApp:!1,children:[(0,v.jsxs)("div",{className:"flex flex-col gap-4 w-[500px] text-gray-500",children:[(0,v.jsx)("span",{className:"text-2xl font-medium text-primary whitespace-normal break-words w-full",children:null===l||void 0===l?void 0:l.assignment.assignmentName}),(0,v.jsxs)("div",{className:"flex flex-row ",children:[(0,v.jsxs)("div",{className:"flex flex-row gap-3 items-center w-[50%]",children:[(0,v.jsx)("div",{className:"bg-gray-100 flex items-center h-[30px] w-[30px] rounded-lg justify-center",children:(0,v.jsx)("i",{className:"fa-regular fa-clock text-primary"})}),(0,v.jsxs)("span",{children:[null===l||void 0===l?void 0:l.assignment.doTime," mins"]})]}),(0,v.jsxs)("div",{className:"flex flex-row gap-3 items-center ",children:[(0,v.jsxs)("div",{className:"bg-gray-100 flex items-center h-[30px] w-[30px] rounded-lg justify-center",children:[(0,v.jsx)("i",{className:"fa-regular fa-calendar text-primary"})," "]}),(0,v.jsx)("span",{children:u()(null===l||void 0===l?void 0:l.assignment.dateDue).format("HH:mm DD/MM/YYYY")})]})]}),(0,v.jsxs)("div",{className:"flex flex-row ",children:[(null===l||void 0===l?void 0:l.numberQuestionOfAssignment)&&(0,v.jsxs)("div",{className:"flex flex-row gap-3 items-center w-[50%]",children:[(0,v.jsx)("div",{className:"bg-gray-100 flex items-center h-[30px] w-[30px] rounded-lg justify-center",children:(0,v.jsx)("i",{className:"fa-solid fa-clipboard-question text-primary"})}),(0,v.jsxs)("span",{children:[null===l||void 0===l?void 0:l.numberQuestionOfAssignment," question"]})]}),(0,v.jsxs)("div",{className:"flex flex-row gap-3 items-center",children:[(0,v.jsx)("div",{className:"bg-gray-100 flex items-center h-[30px] w-[30px] rounded-lg justify-center",children:(0,v.jsx)("i",{className:"fa-regular fa-star text-primary"})}),(0,v.jsxs)("span",{children:["Pass score : ",null===l||void 0===l?void 0:l.assignment.passScore,"/",null===l||void 0===l?void 0:l.assignment.totalScore," "]})]})]}),(0,v.jsxs)("div",{className:"flex flex-row gap-3 items-center",children:[(0,v.jsx)("div",{className:"bg-gray-100 flex items-center h-[30px] w-[30px] rounded-lg justify-center",children:(0,v.jsx)("i",{className:"fa-brands fa-cloudsmith text-primary"})}),(0,v.jsx)("span",{className:" text-gray-500",children:function(){var e,n,t,s;return x?null!==l&&void 0!==l&&null!==(e=l.assignment)&&void 0!==e&&null!==(n=e.studentAssignment[0])&&void 0!==n&&n.dateComplete?"Submitted on ".concat(u()(null===l||void 0===l||null===(t=l.assignment)||void 0===t||null===(s=t.studentAssignment[0])||void 0===s?void 0:s.dateComplete).format("hh:mm DD/MM/YYYY")):"Not submitted":null!==l&&void 0!==l&&l.dateComplete?"Submitted on ".concat(u()(null===l||void 0===l?void 0:l.dateComplete).format("hh:mm DD/MM/YYYY")):null!==l&&void 0!==l&&l.dateComplete?void 0:"Not submitted"}()})]})]}),(0,v.jsxs)("div",{className:"flex flex-row-reverse mt-5 gap-5",children:[(0,v.jsx)(f.Z,{onClick:function(){t(!1)},children:"Cancel"}),function(){return 0===(null===l||void 0===l?void 0:l.numberQuestionOfAssignment)?(0,v.jsx)(v.Fragment,{}):x?c?null!==l&&void 0!==l&&null!==(a=l.assignment)&&void 0!==a&&null!==(r=a.studentAssignment[0])&&void 0!==r&&r.dateComplete?(0,v.jsx)(f.Z,{onClick:function(){j("/assignment/".concat(null===l||void 0===l?void 0:l.assignment.id,"/result"))},children:"View Result"}):(0,v.jsx)(v.Fragment,{}):null!==l&&void 0!==l&&null!==(e=l.assignment)&&void 0!==e&&null!==(n=e.studentAssignment[0])&&void 0!==n&&n.dateComplete?(0,v.jsx)(f.Z,{onClick:function(){j("/assignment/".concat(null===l||void 0===l?void 0:l.assignment.id,"/result"))},children:"View Result"}):null!==l&&void 0!==l&&null!==(t=l.assignment)&&void 0!==t&&null!==(s=t.studentAssignment[0])&&void 0!==s&&s.dateEnd?(0,v.jsx)(f.Z,{onClick:function(){return N(null===l||void 0===l?void 0:l.assignment.id,"continue")},children:"Continue Assignment"}):(0,v.jsx)(f.Z,{onClick:function(){return N(null===l||void 0===l?void 0:l.assignment.id,"start")},children:"Do Assignment"}):c?null!==l&&void 0!==l&&l.dateComplete?(0,v.jsx)(f.Z,{onClick:function(){j("/assignment/".concat(null===l||void 0===l?void 0:l.assignment.id,"/result"))},children:"View Result"}):(0,v.jsx)(v.Fragment,{}):null!==l&&void 0!==l&&l.dateComplete?(0,v.jsx)(f.Z,{onClick:function(){j("/assignment/".concat(null===l||void 0===l?void 0:l.assignment.id,"/result"))},children:"View Result"}):null!==l&&void 0!==l&&l.dateEnd?(0,v.jsx)(f.Z,{onClick:function(){return N(null===l||void 0===l?void 0:l.assignment.id,"continue")},children:"Continue Assignment"}):(0,v.jsx)(f.Z,{onClick:function(){return N(null===l||void 0===l?void 0:l.assignment.id,"start")},children:"Do Assignment"});var e,n,t,s,a,r}()]}),(0,v.jsx)(p.Z,{isOpen:k})]})}},1756:function(e,n,t){var s=t(4165),a=t(5861),r=(t(2791),t(7948)),i=t.n(r),l=t(7689),o=t(3458),c=t(4212),u=t(4453),d=t(184),m=(0,c.Z)();n.Z=function(e){var n=e.isOpen,t=(0,l.s0)(),r=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.delete(o.T+"account/logout");case 3:localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),t("/"),window.location.reload(),e.next=16;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),t("/"),window.location.reload();case 16:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,d.jsx)(i(),{isOpen:n,style:{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(165, 165, 165, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"8px"}},contentLabel:"Example Modal",ariaHideApp:!1,children:(0,d.jsxs)("div",{className:"flex flex-col gap-4 w-[500px]",children:[(0,d.jsx)("span",{className:"text-2xl font-medium",children:"Session Expired"}),(0,d.jsx)("span",{children:"Your session has expired please login again, click the button bellow to go back login screen"}),(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsx)(u.Z,{onClick:r,className:"w-[50%]",children:"Login"})})]})})}},4212:function(e,n,t){var s=t(4165),a=t(5861),r=t(4569),i=t.n(r),l=t(456),o=t(7689),c=t(3458),u=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){var n,t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem("refresh_token"),e.next=4,i().post(c.T+"account/refresh-token",{},{headers:{Authorization:"Bearer ".concat(n)}});case 4:return t=e.sent,e.abrupt("return",t.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();n.Z=function(){var e=i().create();return e.interceptors.request.use(function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n){var t,a,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("access_token"))){e.next=19;break}if(a=(0,l.Z)(t),e.prev=3,!(a.exp<Date.now()/1e3)){e.next=13;break}return e.next=7,u();case 7:r=e.sent,localStorage.setItem("access_token",r.accessToken),localStorage.setItem("refresh_token",r.refreshToken),n.headers.Authorization="Bearer "+r.accessToken,e.next=14;break;case 13:n.headers.Authorization="Bearer "+t;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0);case 19:return e.abrupt("return",n);case 20:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(n){return e.apply(this,arguments)}}(),(function(e){console.log(e),(0,o.s0)()("/")})),e}},2274:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var s=t(4165),a=t(5861),r=t(885),i=t(2791),l=t(456),o=t(2426),c=t.n(o),u=t(8093),d=t(184),m=function(e){var n=e.val,t=e.isParent,s=(0,i.useState)(!1),a=(0,r.Z)(s,2),l=a[0],o=a[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u.Z,{isOpen:l,setIsOpen:o,val:n,isParent:t}),(0,d.jsxs)("div",{onClick:function(){return o(!0)},className:"bg-white flex flex-col gap-3 w-[260px] rounded-lg px-3 py-3 select-none shadow-md hover:shadow-lg transition-all cursor-pointer",children:[(0,d.jsx)("span",{className:"w-[230px] truncate text-primary",children:null===n||void 0===n?void 0:n.assignment.assignmentName}),(0,d.jsxs)("span",{className:"text-xs text-gray-500",children:[(0,d.jsx)("i",{className:"fa-regular fa-clock"})," ",(0,d.jsxs)("span",{children:[null===n||void 0===n?void 0:n.assignment.doTime," mins"]})]}),(0,d.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,d.jsxs)("span",{className:"text-xs text-gray-500",children:[(0,d.jsx)("i",{className:"fa-regular fa-calendar"})," ",(0,d.jsx)("span",{children:c()(null===n||void 0===n?void 0:n.assignment.dateDue).format("YYYY-MM-DD HH:mm:ss")})]}),(0,d.jsx)("span",{className:"text-xs text-gray-500",children:null!==n&&void 0!==n&&n.dateComplete?"Submitted":"Not submitted"})]})]})]})},x=t(3458),p=t(4212),f=t(1756),v=(0,p.Z)(),g=function(e){var n=e.isParent,t=localStorage.getItem("access_token"),o=(0,i.useState)(!1),c=(0,r.Z)(o,2),u=c[0],p=c[1],g=(0,i.useState)(""),h=(0,r.Z)(g,2),j=h[0],w=h[1],b=(0,i.useState)([]),k=(0,r.Z)(b,2),Z=k[0],N=k[1],y=(0,i.useState)(null),C=(0,r.Z)(y,2),S=C[0],A=C[1],Y=(0,i.useMemo)((function(){return t&&(0,l.Z)(t)}),[t]);return(0,i.useEffect)((function(){if(n){var e=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.get(x.T+"parent/student");case 3:n=e.sent,A(n.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),401===e.t0.response.status&&p(!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[n]),(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(t,a){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n){e.next=6;break}if(null===a||void 0===a||!a.classId){e.next=6;break}return e.next=5,v.get(x.T+"parent/student/".concat(null===a||void 0===a?void 0:a.id,"/class/").concat(null===a||void 0===a?void 0:a.classId));case 5:r=e.sent;case 6:if(n){e.next=13;break}if(e.t0=t,!e.t0){e.next=12;break}return e.next=11,v.get(x.T+"student-assignment/student/class/".concat(t));case 11:e.t0=e.sent;case 12:r=e.t0;case 13:r&&N(r.data),e.next=20;break;case 16:e.prev=16,e.t1=e.catch(0),console.log(e.t1),401===e.t1.response.status&&p(!0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(n,t){return e.apply(this,arguments)}}();e(null===Y||void 0===Y?void 0:Y.classId,S)}),[null===Y||void 0===Y?void 0:Y.classId,n,S]),(0,d.jsxs)("div",{className:"flex flex-col gap-5 px-10 py-5",children:[(0,d.jsxs)("div",{className:"flex flex-row items-center pr-20 justify-between",children:[(0,d.jsx)("span",{className:"text-2xl font-[500] text-gray-600",children:"Exams"}),(0,d.jsx)("input",{type:"text",className:"outline-none shadow focus:shadow-md px-3 py-2 rounded-lg transition-all",onChange:function(e){return w(e.target.value)},placeholder:"Search ..."})]}),(0,d.jsx)("div",{className:"flex flex-wrap gap-10",children:!(null===Z||void 0===Z||!Z.length)&&Z.filter((function(e){return""===j||null!==e&&void 0!==e&&e.assignment.assignmentName.toLowerCase().includes(j.toLowerCase())?e:""})).map((function(e,t){return(0,d.jsx)(m,{val:e,isParent:n},t)}))}),(0,d.jsx)(f.Z,{isOpen:u})]})}}}]);
//# sourceMappingURL=274.492d8102.chunk.js.map