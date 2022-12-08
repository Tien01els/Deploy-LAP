"use strict";(self.webpackChunktemplate_react_app=self.webpackChunktemplate_react_app||[]).push([[716],{3458:function(e,t,n){n.d(t,{T:function(){return s}});var s="http://localhost:8080/api/"},4212:function(e,t,n){var s=n(4165),r=n(5861),a=n(4569),i=n.n(a),l=n(456),c=n(7689),o=n(3458),u=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("refresh_token"),e.next=4,i().post(o.T+"account/refresh-token",{},{headers:{Authorization:"Bearer ".concat(t)}});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();t.Z=function(){var e=i().create();return e.interceptors.request.use(function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){var n,r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=localStorage.getItem("access_token"))){e.next=19;break}if(r=(0,l.Z)(n),e.prev=3,!(r.exp<Date.now()/1e3)){e.next=13;break}return e.next=7,u();case 7:a=e.sent,localStorage.setItem("access_token",a.accessToken),localStorage.setItem("refresh_token",a.refreshToken),t.headers.Authorization="Bearer "+a.accessToken,e.next=14;break;case 13:t.headers.Authorization="Bearer "+n;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0);case 19:return e.abrupt("return",t);case 20:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.log(e),(0,c.s0)()("/")})),e}},9716:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var s,r,a=n(4165),i=n(5861),l=n(885),c=n(2791),o=n(7689),u=n(2426),d=n.n(u),f=n(3458),x=n(4212),p=n(168),m=(n(2118),n(184)),h=function(e){var t,n=e.questionOfRespondent,a=e.index,i=e.getCorrectAnswerOfQuestion,l=e.listQuestionOfAssignment,o=e.checkAnswered;return(0,c.useEffect)((function(){document.querySelector("#formula-".concat(a)).setValue(String.raw(s||(s=(0,p.Z)(["\begin{multline}\n  "],["\\begin{multline}\n  "])))+(null===n||void 0===n?void 0:n.content)+String.raw(r||(r=(0,p.Z)(["\n  end{multline}"],["\n  \\end{multline}"]))))}),[null===n||void 0===n?void 0:n.content]),console.log(n),(0,m.jsxs)("div",{className:"flex flex-row gap-5 w-full bg-white rounded-lg shadow px-3 py-3",children:[(0,m.jsx)("div",{className:"w-[80px] h-[80px] flex items-center justify-center bg-primary rounded-lg select-none",children:(0,m.jsx)("span",{className:"text-white text-xl font-semibold",children:a+1})}),(0,m.jsxs)("div",{className:"flex flex-col gap-3 w-[80%]",children:[(0,m.jsxs)("div",{className:"flex flex-row  justify-between",children:[(0,m.jsxs)("div",{className:"flex flex-col gap-3 w-[90%]",children:[(0,m.jsx)("math-field",{id:"formula-".concat(a),style:{whiteSpace:"initial",fontSize:"20px",outline:"none",userSelect:"none",width:"100%",maxHeight:"150px",overflowWrap:"break-word",fontFamily:"Poppins"},readonly:!0}),(0,m.jsxs)("span",{children:["Correct Answer:"," ",i(l.find((function(e){return e.questionId===n.questionId})))]})]}),(0,m.jsxs)("span",{className:"text-sm text-gray-400 pt-1",children:[n.score,"pt"]})]}),(0,m.jsxs)("div",{className:"text-sm flex flex-row items-center gap-5",children:[(0,m.jsx)("div",{className:"bg-[#dcedfd] w-[480px] flex justify-between px-3 py-5 rounded-lg",children:(0,m.jsxs)("span",{className:"max-w-[430px] break-words whitespace-normal",children:["Your Answer: ",o(n)]})}),(0,m.jsx)("div",{children:null!==n&&void 0!==n&&null!==(t=n.answerOfRespondent)&&void 0!==t&&t.isCorrect?(0,m.jsx)("i",{className:"fa-solid fa-circle-check text-xl text-green-400"}):(0,m.jsx)("i",{className:"fa-solid fa-circle-xmark text-xl text-red-500"})})]})]})]})},g=(0,x.Z)(),v=function(e){var t=e.isTeacher,n=e.isParent,s=(0,o.UO)().assignmentId,r=(0,c.useState)([]),u=(0,l.Z)(r,2),x=u[0],p=u[1],v=(0,c.useState)([]),w=(0,l.Z)(v,2),j=w[0],N=w[1],y=(0,c.useState)({}),b=(0,l.Z)(y,2),k=b[0],S=b[1],T=(0,c.useState)(0),Z=(0,l.Z)(T,2),q=Z[0],C=Z[1],I=(0,c.useState)(0),O=(0,l.Z)(I,2),A=O[0],_=O[1],z=(0,c.useState)(null),F=(0,l.Z)(z,2),R=F[0],Y=F[1];(0,c.useEffect)((function(){if(n){var e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.get(f.T+"parent/student");case 3:t=e.sent,Y(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[]);var P=function(e){var t,n=null===e||void 0===e||null===(t=e.answerOfRespondent)||void 0===t?void 0:t.answer,s=(null===e||void 0===e?void 0:e.questionTypeId)&&["","multiChoice","trueFalse","input","multiSelect"][null===e||void 0===e?void 0:e.questionTypeId];if(n&&s&&n[s]){var r=n[s];if("multiChoice"===s)for(var a=0;a<r.length;a++)if(r[a].isTrue)return r[a].answer;if("trueFalse"===s)for(var i=0;i<r.length;i++)if(r[i].isTrue)return r[i].answer;if("input"===s&&r[0].answer.length>0)return r[0].answer;if("multiSelect"===s){for(var l=[],c=0;c<r.length;c++)r[c].isTrue&&l.push(r[c].answer);return l.join(", ")}}return!1},B=function(e){var t=null===e||void 0===e?void 0:e.option,n=(null===e||void 0===e?void 0:e.questionTypeId)&&["","multiChoice","trueFalse","input","multiSelect"][null===e||void 0===e?void 0:e.questionTypeId];if(t&&n&&t[n]){var s=t[n];if("multiChoice"===n)for(var r=0;r<s.length;r++)if(s[r].isTrue)return s[r].answer;if("trueFalse"===n)for(var a=0;a<s.length;a++)if(s[a].isTrue)return s[a].answer;if("input"===n&&s[0].answer.length>0)return s[0].answer;if("multiSelect"===n){for(var i=[],l=0;l<s.length;l++)s[l].isTrue&&i.push(s[l].answer);return i.join(", ")}}return!1};return(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var r,i,l,c,o,u,d,x;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}return e.next=3,g.get(f.T+"teacher-question/teacher/assignment/".concat(s));case 3:r=e.sent;case 4:if(!n){e.next=9;break}if(!R){e.next=9;break}return e.next=8,g.get(f.T+"parent/student/".concat(null===R||void 0===R?void 0:R.id,"/assignment/").concat(s,"/result"));case 8:r=e.sent;case 9:if(t||n){e.next=13;break}return e.next=12,g.get(f.T+"student-question/student/assignment/".concat(s));case 12:r=e.sent;case 13:if(r){for(i=r.data,l=0;l<i.length;l++)i[l].index=l;if(i&&i.length>0){for(p(i),c=0,o=0,u=0;u<i.length;u++)null!==(d=i[u])&&void 0!==d&&null!==(x=d.answerOfRespondent)&&void 0!==x&&x.isCorrect&&(++c,o+=i[u].score);C(c),_(o)}}case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t?g.get(f.T+"teacher-assignment/teacher/assignment/".concat(s)).then((function(e){console.log(e.data)})):g.get(f.T+"student-assignment/student/assignment/".concat(s)).then((function(e){console.log(e.data)})),g.get(f.T+"assignment/".concat(s)).then((function(e){S(e.data)})),g.get(f.T+"assignment-question/assignment/".concat(s)).then((function(e){N(e.data)}))}),[s,n,t,R]),(0,m.jsxs)("div",{className:"px-10 py-7 flex flex-row",children:[(0,m.jsx)("div",{className:" bg-white  w-[40%] h-fit px-5 py-4 shadow rounded-lg",children:(0,m.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,m.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,m.jsx)("span",{className:"text-2xl font-[500] text-primary",children:k.assignmentName}),(0,m.jsx)("span",{className:"text-xl font-base",children:"Information"}),(0,m.jsxs)("div",{className:"flex flex-row gap-5",children:[(0,m.jsxs)("div",{className:"flex flex-row gap-3 w-[50%] text-sm items-center text-gray-500",children:[(0,m.jsx)("div",{className:"h-[40px] w-[40px] flex items-center justify-center bg-gray-100 rounded-lg",children:(0,m.jsx)("i",{className:"fa-regular fa-clock"})}),(0,m.jsxs)("span",{children:[k.doTime," mins"]})]}),(0,m.jsxs)("div",{className:"flex flex-row gap-3 text-sm items-center text-gray-500",children:[(0,m.jsx)("div",{className:"h-[40px] w-[40px] flex items-center justify-center bg-gray-100 rounded-lg",children:(0,m.jsx)("i",{className:"fa-regular fa-calendar"})}),(0,m.jsx)("span",{children:d()(k.dateDue).format("HH:mm A DD-MM-YYYY")})]})]}),(0,m.jsxs)("div",{className:"flex flex-row gap-5",children:[(0,m.jsxs)("div",{className:"flex flex-row gap-3 w-[50%] text-sm items-center text-gray-500",children:[(0,m.jsx)("div",{className:"h-[40px] w-[40px] flex items-center justify-center bg-gray-100 rounded-lg",children:(0,m.jsx)("i",{className:"fa-solid fa-check"})}),(0,m.jsxs)("span",{children:["Correct answers: ",q]})]}),(0,m.jsxs)("div",{className:"flex flex-row gap-3 text-sm items-center text-gray-500",children:[(0,m.jsx)("div",{className:"h-[40px] w-[40px] flex items-center justify-center bg-gray-100 rounded-lg",children:(0,m.jsx)("i",{className:"fa-solid fa-award"})}),(0,m.jsx)("span",{children:A>=k.passScore?"Passed":"Failed"})]})]}),(0,m.jsxs)("div",{className:"flex flex-row gap-5",children:[(0,m.jsxs)("div",{className:"flex flex-row gap-3 text-sm w-[50%] items-center text-gray-500",children:[(0,m.jsx)("div",{className:"h-[40px] w-[40px] flex items-center justify-center bg-gray-100 rounded-lg",children:(0,m.jsx)("i",{className:"fa-regular fa-star"})}),(0,m.jsxs)("span",{children:["Score: ",A]})]}),(0,m.jsxs)("div",{className:"flex flex-row gap-3 text-sm items-center text-gray-500",children:[(0,m.jsx)("div",{className:"h-[40px] w-[40px] flex items-center justify-center bg-gray-100 rounded-lg",children:(0,m.jsx)("i",{className:"fa-regular fa-star"})}),(0,m.jsxs)("span",{children:["Pass Score: ",k.passScore]})]})]}),(0,m.jsxs)("div",{className:"flex flex-row gap-3 text-sm items-center text-gray-500",children:[(0,m.jsx)("div",{className:"h-[40px] w-[40px] flex items-center justify-center bg-gray-100 rounded-lg",children:(0,m.jsx)("i",{className:"fa-regular fa-star"})}),(0,m.jsxs)("span",{children:["Total Score : ",k.totalScore]})]})]}),(0,m.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,m.jsx)("span",{className:"text-xl font-base",children:"Your answers"}),(0,m.jsx)("div",{className:"flex flex-wrap gap-5 px-2 py-3 rounded-xl items-center",children:x.map((function(e,t){var n;return(0,m.jsxs)("div",{onClick:function(){return function(e){var t="question-".concat(e);document.getElementById(t).scrollIntoView({behavior:"smooth"})}(t)},className:"h-[40px] w-[30px] flex flex-col outline outline-2 outline-gray-200 hover:outline-red-400 rounded overflow-hidden transition-all cursor-pointer select-none",children:[(0,m.jsx)("div",{className:"flex justify-center items-center",children:(0,m.jsx)("span",{children:t+1})}),null!==e&&void 0!==e&&null!==(n=e.answerOfRespondent)&&void 0!==n&&n.isCorrect?(0,m.jsx)("div",{className:"text-white flex w-full h-full items-center justify-center bg-green-400",children:(0,m.jsx)("i",{className:"fas fa-check text-[8px]"})}):(0,m.jsx)("div",{className:"text-white flex w-full h-full items-center justify-center bg-red-400",children:(0,m.jsx)("i",{className:"fa solid fa-xmark text-[8px]"})})]},t)}))})]})]})}),(0,m.jsx)("div",{className:"px-10 gap-5 h-[90vh] w-[60%] overflow-y-auto  items-center justify-center",children:(0,m.jsx)("div",{className:"flex flex-col gap-5 pb-5 ",children:x.map((function(e,t){return(0,m.jsx)(h,{questionOfRespondent:e,index:t,getCorrectAnswerOfQuestion:B,listQuestionOfAssignment:j,checkAnswered:P},t)}))})})]})}},168:function(e,t,n){function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return s}})}}]);
//# sourceMappingURL=716.756aad4f.chunk.js.map