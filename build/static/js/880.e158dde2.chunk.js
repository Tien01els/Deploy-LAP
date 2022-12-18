"use strict";(self.webpackChunktemplate_react_app=self.webpackChunktemplate_react_app||[]).push([[880],{4212:function(e,s,t){var n=t(4165),l=t(5861),a=t(4569),r=t.n(a),i=t(456),c=t(7689),d=t(3458),o=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(){var s,t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=localStorage.getItem("refresh_token"),e.next=4,r().post(d.T5+"account/refresh-token",{},{headers:{Authorization:"Bearer ".concat(s)}});case 4:return t=e.sent,e.abrupt("return",t.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();s.Z=function(){var e=r().create();return e.interceptors.request.use(function(){var e=(0,l.Z)((0,n.Z)().mark((function e(s){var t,l,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("access_token"))){e.next=19;break}if(l=(0,i.Z)(t),e.prev=3,!(l.exp<Date.now()/1e3)){e.next=13;break}return e.next=7,o();case 7:a=e.sent,localStorage.setItem("access_token",a.accessToken),localStorage.setItem("refresh_token",a.refreshToken),s.headers.Authorization="Bearer "+a.accessToken,e.next=14;break;case 13:s.headers.Authorization="Bearer "+t;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0);case 19:return e.abrupt("return",s);case 20:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(s){return e.apply(this,arguments)}}(),(function(e){console.log(e),(0,c.s0)()("/")})),e}},1880:function(e,s,t){t.r(s);var n=t(2982),l=t(4165),a=t(5861),r=t(885),i=t(2791),c=t(7689),d=t(2426),o=t.n(d),x=t(3458),u=t(4212),m=t(184),f=(0,u.Z)(),p="https://thumbs.dreamstime.com/b/student-school-boy-studying-computer-online-lesson-education-vector-concept-student-school-boy-studying-computer-114522764.jpg";s.default=function(){var e,s=(0,c.UO)().assignmentId,t=(0,c.s0)(),d=(0,i.useState)({}),u=(0,r.Z)(d,2),v=u[0],h=u[1],g=(0,i.useState)(""),j=(0,r.Z)(g,2),N=j[0],w=j[1],y=(0,i.useState)([]),b=(0,r.Z)(y,2),k=b[0],S=b[1];return(0,i.useEffect)((function(){try{var e=function(){var e=(0,a.Z)((0,l.Z)().mark((function e(){var t;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(x.T5+"assignment/".concat(s,"/summary"));case 2:(t=e.sent).data&&(console.log(t.data),h(t.data),S(t.data.students));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){console.log(t)}}),[s]),console.log(k),(0,m.jsxs)("div",{className:"px-10 py-5 pb-7 flex flex-col gap-5",children:[(0,m.jsxs)("div",{className:"flex flex-col gap-4 w-full h-fit px-10 pb-10 pt-7 bg-white rounded-lg shadow",children:[(0,m.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,m.jsxs)("div",{className:"flex flex-col gap-3 text-gray-500",children:[(0,m.jsx)("span",{className:"text-2xl text-gray-700",children:null===v||void 0===v?void 0:v.assignmentName}),(0,m.jsxs)("span",{children:[null===v||void 0===v?void 0:v.numberQuestionOfAssignment," Questions"]})]}),(0,m.jsxs)("div",{className:"flex flex-col gap-3 text-gray-500",children:[(0,m.jsx)("div",{className:"flex flex-row-reverse gap-3",children:null===v||void 0===v||null===(e=v.skills)||void 0===e?void 0:e.map((function(e,s){return(0,m.jsx)("div",{className:"px-2 py-1 h-fit flex items-center justify-center text-primary rounded-full border-2 border-primary",children:(0,m.jsx)("span",{className:"text-sm",children:null===e||void 0===e?void 0:e.skillName})},s)}))}),(0,m.jsxs)("span",{children:["Date due:"," ",o()(null===v||void 0===v?void 0:v.dateDue).format("YYYY-MM-DD HH:mm:ss")]}),(0,m.jsxs)("span",{className:"text-left",children:[(0,m.jsx)("i",{className:"fa-regular fa-clock"})," ",null===v||void 0===v?void 0:v.doTime," min",(null===v||void 0===v?void 0:v.doTime)>1?"s":""]})]})]}),(0,m.jsxs)("div",{className:"flex flex-wrap gap-7",children:[(0,m.jsxs)("div",{className:"flex flex-row items-center w-[355px] gap-7 border border-gray-300 px-5 py-4 rounded-md",children:[(0,m.jsx)("div",{className:"flex items-center justify-center text-white bg-primary  rounded-full w-[40px] h-[40px]",children:(0,m.jsx)("i",{className:"fa-solid fa-user"})}),(0,m.jsxs)("div",{className:"flex flex-col",children:[(0,m.jsx)("span",{children:"Assigned Students"}),(0,m.jsx)("span",{className:"text-2xl",children:(null===k||void 0===k?void 0:k.length)||0})]})]}),(0,m.jsxs)("div",{className:"flex flex-row items-center w-[355px] gap-7 border border-gray-300 px-5 py-4 rounded-md",children:[(0,m.jsx)("div",{className:"flex items-center justify-center text-white bg-yellow-400  rounded-full w-[40px] h-[40px]",children:(0,m.jsx)("i",{className:"fa-solid fa-star"})}),(0,m.jsxs)("div",{className:"flex flex-col",children:[(0,m.jsx)("span",{children:"Average Score"}),(0,m.jsx)("span",{className:"text-2xl",children:(null===v||void 0===v?void 0:v.avgScoreOfStudent)||0})]})]}),(0,m.jsxs)("div",{className:"flex flex-row items-center w-[355px] gap-7 border border-gray-300 px-5 py-4 rounded-md",children:[(0,m.jsx)("div",{className:"flex items-center justify-center text-white bg-green-400  rounded-full w-[40px] h-[40px]",children:(0,m.jsx)("i",{className:"fa-solid fa-check font-bold"})}),(0,m.jsxs)("div",{className:"flex flex-col",children:[(0,m.jsx)("span",{children:"Passed students"}),(0,m.jsx)("span",{className:"text-2xl",children:(null===v||void 0===v?void 0:v.studentPassed)||0})]})]}),(0,m.jsxs)("div",{className:"flex flex-row items-center w-[355px] gap-7 border border-gray-300 px-5 py-4 rounded-md",children:[(0,m.jsx)("div",{className:"flex items-center justify-center text-white bg-red-400  rounded-full w-[40px] h-[40px]",children:(0,m.jsx)("i",{className:"fa-solid fa-xmark"})}),(0,m.jsxs)("div",{className:"flex flex-col",children:[(0,m.jsx)("span",{children:"Failed Students"}),(0,m.jsx)("span",{className:"text-2xl",children:(null===v||void 0===v?void 0:v.studentFailed)||0})]})]}),(0,m.jsxs)("div",{className:"flex flex-row items-center w-[355px] gap-7 border border-gray-300 px-5 py-4 rounded-md",children:[(0,m.jsx)("div",{className:"flex items-center justify-center text-white bg-yellow-500  rounded-full w-[40px] h-[40px]",children:(0,m.jsx)("i",{className:"fa-solid fa-circle-info"})}),(0,m.jsxs)("div",{className:"flex flex-col",children:[(0,m.jsx)("span",{children:"Late submit"}),(0,m.jsx)("span",{className:"text-2xl",children:(null===v||void 0===v?void 0:v.studentLateSubmit)||0})]})]}),(0,m.jsxs)("div",{className:"flex flex-row items-center w-[355px] gap-7 border border-gray-300 px-5 py-4 rounded-md",children:[(0,m.jsx)("div",{className:"flex items-center justify-center text-white bg-pink-400  rounded-full w-[40px] h-[40px]",children:(0,m.jsx)("i",{className:"fa-solid fa-question"})}),(0,m.jsxs)("div",{className:"flex flex-col",children:[(0,m.jsx)("span",{children:"Not submitted"}),(0,m.jsx)("span",{className:"text-2xl",children:(null===v||void 0===v?void 0:v.studentNotSubmit)||0})]})]})]})]}),(0,m.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,m.jsx)("span",{className:"text-xl",children:"Submitted students"}),(0,m.jsxs)("div",{className:"flex flex-row items-center gap-10",children:[(0,m.jsx)("input",{type:"text",placeholder:"Search student..",className:"px-3 py-2 rounded-lg shadow outline-none focus:shadow-lg transition-all",onChange:function(e){w(e.target.value)}}),(0,m.jsxs)("div",{className:"flex flex-row gap-3 text-gray-500 items-center",children:[(0,m.jsxs)("div",{className:"flex flex-col text-xs select-none",children:[(0,m.jsx)("i",{onClick:function(){S((0,n.Z)(null===k||void 0===k?void 0:k.sort((function(e,s){return s.studentAssignment[0].score-e.studentAssignment[0].score}))))},className:"fa-solid fa-caret-up cursor-pointer rounded active:scale-90"}),(0,m.jsx)("i",{onClick:function(){S((0,n.Z)(null===k||void 0===k?void 0:k.sort((function(e,s){return e.studentAssignment[0].score-s.studentAssignment[0].score}))))},className:"fa-solid fa-caret-down cursor-pointer rounded active:scale-90 "})]}),(0,m.jsx)("span",{className:"font-medium ",children:"Score Sort"})]})]}),(0,m.jsx)("div",{className:"flex flex-col gap-4",children:null===k||void 0===k?void 0:k.filter((function(e){return""===N||e.name.toLowerCase().includes(N.toLowerCase())?e:""})).map((function(e,n){var l,a,r,i,c,d,x;return(0,m.jsxs)("div",{className:"flex flex-row gap-28 items-center rounded-md shadow-md bg-white px-5 py-4 w-full h-fit",children:[(0,m.jsxs)("div",{className:"flex flex-row gap-4 items-center w-[150px]",children:[(0,m.jsx)("img",{src:(null===e||void 0===e?void 0:e.account.avatarImg)||p,className:"w-[40px] h-[40px] rounded-full",alt:"",onError:function(e){var s=e.currentTarget;s.onerror=null,s.src=p}}),(0,m.jsx)("span",{className:"truncate w-[120px]",children:null===e||void 0===e?void 0:e.fullName})]}),(0,m.jsx)("span",{className:"w-[20px]",children:null===e||void 0===e?void 0:e.studentAssignment[0].score}),(d=null===e||void 0===e?void 0:e.studentAssignment[0].score,x=null===v||void 0===v?void 0:v.passScore,d>=x?(0,m.jsx)("span",{className:"bg-green-400 text-sm py-1 w-24 flex justify-center text-white px-2 rounded-full",children:"Passed"}):d<x?(0,m.jsx)("span",{className:"bg-red-400 text-sm py-1 w-24 flex justify-center text-white px-2 rounded-full",children:"Failed"}):void 0),(0,m.jsx)("span",{className:"text-gray-500 w-[120px]",children:null!==e&&void 0!==e&&null!==(l=e.studentAssignment[0])&&void 0!==l&&l.dateComplete?o()(null===e||void 0===e||null===(a=e.studentAssignment[0])||void 0===a?void 0:a.dateComplete).format("HH:mm DD-MMM"):"Not submitted"}),(0,m.jsx)("span",{className:"text-gray-500 w-[120px]",children:null!==e&&void 0!==e&&null!==(r=e.studentAssignment[0])&&void 0!==r&&r.dateComplete?o()(null===e||void 0===e||null===(i=e.studentAssignment[0])||void 0===i?void 0:i.dateComplete)>o()(null===e||void 0===e||null===(c=e.studentAssignment[0])||void 0===c?void 0:c.dateDue)?"Late":"On time":"Not submitted"}),(0,m.jsx)("span",{onClick:function(){return t("/assignment/".concat(s,"/student/").concat(null===e||void 0===e?void 0:e.id))},className:"text-primary text-sm cursor-pointer select-none",children:"View Answers"})]},n)}))})]})]})}}}]);
//# sourceMappingURL=880.e158dde2.chunk.js.map