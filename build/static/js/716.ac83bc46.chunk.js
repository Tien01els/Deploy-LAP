"use strict";(self.webpackChunktemplate_react_app=self.webpackChunktemplate_react_app||[]).push([[716],{4212:function(e,t,n){var s=n(4165),r=n(5861),a=n(4569),i=n.n(a),l=n(456),c=n(7689),o=n(3458),u=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("refresh_token"),e.next=4,i().post(o.T5+"account/refresh-token",{},{headers:{Authorization:"Bearer ".concat(t)}});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();t.Z=function(){var e=i().create();return e.interceptors.request.use(function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){var n,r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=localStorage.getItem("access_token"))){e.next=19;break}if(r=(0,l.Z)(n),e.prev=3,!(r.exp<Date.now()/1e3)){e.next=13;break}return e.next=7,u();case 7:a=e.sent,localStorage.setItem("access_token",a.accessToken),localStorage.setItem("refresh_token",a.refreshToken),t.headers.Authorization="Bearer "+a.accessToken,e.next=14;break;case 13:t.headers.Authorization="Bearer "+n;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0);case 19:return e.abrupt("return",t);case 20:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.log(e),(0,c.s0)()("/")})),e}},9716:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var s,r,a=n(4165),i=n(5861),l=n(885),c=n(2791),o=n(7689),u=n(2426),d=n.n(u),x=n(3458),f=n(4212),p=n(168),m=(n(2118),n(184)),h=function(e){var t,n=e.questionOfRespondent,a=e.index,i=e.getCorrectAnswerOfQuestion,l=e.listQuestionOfAssignment,o=e.checkAnswered;return(0,c.useEffect)((function(){document.querySelector("#formula-".concat(a)).setValue(String.raw(s||(s=(0,p.Z)(["\begin{multline}\n  "],["\\begin{multline}\n  "])))+(null===n||void 0===n?void 0:n.content)+String.raw(r||(r=(0,p.Z)(["\n  end{multline}"],["\n  \\end{multline}"]))))}),[null===n||void 0===n?void 0:n.content]),console.log(n),(0,m.jsxs)("div",{className:"flex flex-row gap-5 w-full bg-white rounded-lg shadow px-3 py-3",children:[(0,m.jsx)("div",{className:"w-[80px] h-[80px] flex items-center justify-center bg-primary rounded-lg select-none",children:(0,m.jsx)("span",{className:"text-white text-xl font-semibold",children:a+1})}),(0,m.jsxs)("div",{className:"flex flex-col gap-3 w-[80%]",children:[(0,m.jsxs)("div",{className:"flex flex-row  justify-between",children:[(0,m.jsxs)("div",{className:"flex flex-col gap-3 w-[90%]",children:[(0,m.jsx)("math-field",{id:"formula-".concat(a),style:{whiteSpace:"initial",fontSize:"20px",outline:"none",userSelect:"none",width:"100%",maxHeight:"150px",overflowWrap:"break-word",fontFamily:"Poppins"},readonly:!0}),(0,m.jsxs)("span",{children:["Correct Answer:"," ",i(l.find((function(e){return e.questionId===n.questionId})))]})]}),(0,m.jsxs)("span",{className:"text-sm text-gray-400 pt-1",children:[n.score,"pt"]})]}),(0,m.jsxs)("div",{className:"text-sm flex flex-row items-center gap-5",children:[(0,m.jsx)("div",{className:"bg-[#dcedfd] w-[480px] flex justify-between px-3 py-5 rounded-lg",children:(0,m.jsxs)("span",{className:"max-w-[430px] break-words whitespace-normal",children:["Your Answer: ",o(n)]})}),(0,m.jsx)("div",{children:null!==n&&void 0!==n&&null!==(t=n.answerOfRespondent)&&void 0!==t&&t.isCorrect?(0,m.jsx)("i",{className:"fa-solid fa-circle-check text-xl text-green-400"}):(0,m.jsx)("i",{className:"fa-solid fa-circle-xmark text-xl text-red-500"})})]})]})]})},g=(0,f.Z)(),v=function(e){var t=e.isTeacher,n=e.isParent,s=e.viewStudentResult,r=(0,o.UO)(),u=r.assignmentId,f=r.studentId,p=(0,c.useState)([]),v=(0,l.Z)(p,2),w=v[0],j=v[1],N=(0,c.useState)([]),y=(0,l.Z)(N,2),b=y[0],k=y[1],S=(0,c.useState)({}),T=(0,l.Z)(S,2),Z=T[0],q=T[1],I=(0,c.useState)(0),C=(0,l.Z)(I,2),O=C[0],A=C[1],_=(0,c.useState)(0),R=(0,l.Z)(_,2),z=R[0],F=R[1],Y=(0,c.useState)(null),P=(0,l.Z)(Y,2),B=P[0],D=P[1];(0,c.useEffect)((function(){if(n){var e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.get(x.T5+"parent/student");case 3:t=e.sent,D(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[]);var E=function(e){var t,n=null===e||void 0===e||null===(t=e.answerOfRespondent)||void 0===t?void 0:t.answer,s=(null===e||void 0===e?void 0:e.questionTypeId)&&["","multiChoice","trueFalse","input","multiSelect"][null===e||void 0===e?void 0:e.questionTypeId];if(n&&s&&n[s]){var r=n[s];if("multiChoice"===s)for(var a=0;a<r.length;a++)if(r[a].isTrue)return r[a].answer;if("trueFalse"===s)for(var i=0;i<r.length;i++)if(r[i].isTrue)return r[i].answer;if("input"===s&&r[0].answer.length>0)return r[0].answer;if("multiSelect"===s){for(var l=[],c=0;c<r.length;c++)r[c].isTrue&&l.push(r[c].answer);return l.join(", ")}}return!1},Q=function(e){var t=null===e||void 0===e?void 0:e.option,n=(null===e||void 0===e?void 0:e.questionTypeId)&&["","multiChoice","trueFalse","input","multiSelect"][null===e||void 0===e?void 0:e.questionTypeId];if(t&&n&&t[n]){var s=t[n];if("multiChoice"===n)for(var r=0;r<s.length;r++)if(s[r].isTrue)return s[r].answer;if("trueFalse"===n)for(var a=0;a<s.length;a++)if(s[a].isTrue)return s[a].answer;if("input"===n&&s[0].answer.length>0)return s[0].answer;if("multiSelect"===n){for(var i=[],l=0;l<s.length;l++)s[l].isTrue&&i.push(s[l].answer);return i.join(", ")}}return!1};return(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var r,i,l,c,o,d,p,m;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=4;break}return e.next=3,g.get(x.T5+"student-question/teacher/student/".concat(f,"/assignment/").concat(u));case 3:r=e.sent;case 4:if(!t){e.next=8;break}return e.next=7,g.get(x.T5+"teacher-question/teacher/assignment/".concat(u));case 7:r=e.sent;case 8:if(!n){e.next=13;break}if(!B){e.next=13;break}return e.next=12,g.get(x.T5+"parent/student/".concat(null===B||void 0===B?void 0:B.id,"/assignment/").concat(u,"/result"));case 12:r=e.sent;case 13:if(t||n||s){e.next=17;break}return e.next=16,g.get(x.T5+"student-question/student/assignment/".concat(u));case 16:r=e.sent;case 17:if(r){for(i=r.data,l=0;l<i.length;l++)i[l].index=l;if(i&&i.length>0){for(j(i),c=0,o=0,d=0;d<i.length;d++)null!==(p=i[d])&&void 0!==p&&null!==(m=p.answerOfRespondent)&&void 0!==m&&m.isCorrect&&(++c,o+=i[d].score);A(c),F(o)}}case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),g.get(x.T5+"assignment/".concat(u)).then((function(e){q(e.data)})),g.get(x.T5+"assignment-question/assignment/".concat(u)).then((function(e){k(e.data)}))}),[u,n,t,B,s,f]),(0,m.jsxs)("div",{className:"px-10 py-7 flex flex-row",children:[(0,m.jsx)("div",{className:" bg-white  w-[40%] h-fit px-5 py-4 shadow rounded-lg",children:(0,m.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,m.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,m.jsx)("span",{className:"text-2xl font-[500] text-primary",children:Z.assignmentName}),(0,m.jsx)("span",{className:"text-xl font-base",children:"Information"}),(0,m.jsxs)("div",{className:"flex flex-row gap-5",children:[(0,m.jsxs)("div",{className:"flex flex-row gap-3 w-[50%] text-sm items-center text-gray-500",children:[(0,m.jsx)("div",{className:"h-[40px] w-[40px] flex items-center justify-center bg-gray-100 rounded-lg",children:(0,m.jsx)("i",{className:"fa-regular fa-clock"})}),(0,m.jsxs)("span",{children:[Z.doTime," mins"]})]}),(0,m.jsxs)("div",{className:"flex flex-row gap-3 text-sm items-center text-gray-500",children:[(0,m.jsx)("div",{className:"h-[40px] w-[40px] flex items-center justify-center bg-gray-100 rounded-lg",children:(0,m.jsx)("i",{className:"fa-regular fa-calendar"})}),(0,m.jsx)("span",{children:d()(Z.dateDue).format("HH:mm A DD-MM-YYYY")})]})]}),(0,m.jsxs)("div",{className:"flex flex-row gap-5",children:[(0,m.jsxs)("div",{className:"flex flex-row gap-3 w-[50%] text-sm items-center text-gray-500",children:[(0,m.jsx)("div",{className:"h-[40px] w-[40px] flex items-center justify-center bg-gray-100 rounded-lg",children:(0,m.jsx)("i",{className:"fa-solid fa-check"})}),(0,m.jsxs)("span",{children:["Correct answers: ",O]})]}),(0,m.jsxs)("div",{className:"flex flex-row gap-3 text-sm items-center text-gray-500",children:[(0,m.jsx)("div",{className:"h-[40px] w-[40px] flex items-center justify-center bg-gray-100 rounded-lg",children:(0,m.jsx)("i",{className:"fa-solid fa-award"})}),(0,m.jsx)("span",{children:z>=Z.passScore?"Passed":"Failed"})]})]}),(0,m.jsxs)("div",{className:"flex flex-row gap-5",children:[(0,m.jsxs)("div",{className:"flex flex-row gap-3 text-sm w-[50%] items-center text-gray-500",children:[(0,m.jsx)("div",{className:"h-[40px] w-[40px] flex items-center justify-center bg-gray-100 rounded-lg",children:(0,m.jsx)("i",{className:"fa-regular fa-star"})}),(0,m.jsxs)("span",{children:["Score: ",z]})]}),(0,m.jsxs)("div",{className:"flex flex-row gap-3 text-sm items-center text-gray-500",children:[(0,m.jsx)("div",{className:"h-[40px] w-[40px] flex items-center justify-center bg-gray-100 rounded-lg",children:(0,m.jsx)("i",{className:"fa-regular fa-star"})}),(0,m.jsxs)("span",{children:["Pass Score: ",Z.passScore]})]})]}),(0,m.jsxs)("div",{className:"flex flex-row gap-3 text-sm items-center text-gray-500",children:[(0,m.jsx)("div",{className:"h-[40px] w-[40px] flex items-center justify-center bg-gray-100 rounded-lg",children:(0,m.jsx)("i",{className:"fa-regular fa-star"})}),(0,m.jsxs)("span",{children:["Total Score : ",Z.totalScore]})]})]}),(0,m.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,m.jsx)("span",{className:"text-xl font-base",children:"Your answers"}),(0,m.jsx)("div",{className:"flex flex-wrap gap-5 px-2 py-3 rounded-xl items-center",children:w.map((function(e,t){var n;return(0,m.jsxs)("div",{onClick:function(){return function(e){var t="question-".concat(e);document.getElementById(t).scrollIntoView({behavior:"smooth"})}(t)},className:"h-[40px] w-[30px] flex flex-col outline outline-2 outline-gray-200 hover:outline-red-400 rounded overflow-hidden transition-all cursor-pointer select-none",children:[(0,m.jsx)("div",{className:"flex justify-center items-center",children:(0,m.jsx)("span",{children:t+1})}),null!==e&&void 0!==e&&null!==(n=e.answerOfRespondent)&&void 0!==n&&n.isCorrect?(0,m.jsx)("div",{className:"text-white flex w-full h-full items-center justify-center bg-green-400",children:(0,m.jsx)("i",{className:"fas fa-check text-[8px]"})}):(0,m.jsx)("div",{className:"text-white flex w-full h-full items-center justify-center bg-red-400",children:(0,m.jsx)("i",{className:"fa solid fa-xmark text-[8px]"})})]},t)}))})]})]})}),(0,m.jsx)("div",{className:"px-10 gap-5 h-[90vh] w-[60%] overflow-y-auto  items-center justify-center",children:(0,m.jsx)("div",{className:"flex flex-col gap-5 pb-5 ",children:w.map((function(e,t){return(0,m.jsx)(h,{questionOfRespondent:e,index:t,getCorrectAnswerOfQuestion:Q,listQuestionOfAssignment:b,checkAnswered:E},t)}))})})]})}},168:function(e,t,n){function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return s}})}}]);
//# sourceMappingURL=716.ac83bc46.chunk.js.map