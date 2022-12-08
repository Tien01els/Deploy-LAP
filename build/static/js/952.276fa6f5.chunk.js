"use strict";(self.webpackChunktemplate_react_app=self.webpackChunktemplate_react_app||[]).push([[952],{4453:function(e,n,t){var r=t(1413),i=t(5987),s=(t(2791),t(184)),o=["children","className"];n.Z=function(e){var n=e.children,t=e.className,a=void 0===t?"":t,l=(0,i.Z)(e,o);return(0,s.jsx)("button",(0,r.Z)((0,r.Z)({className:"bg-primary py-2 px-5 rounded-lg border-2 text-white transition-all active:scale-90 cursor-pointer select-none hover:bg-opacity-90 text-center border-none ".concat(a," ")},l),{},{children:n}))}},6906:function(e,n,t){t(2791);var r=t(7948),i=t.n(r),s=t(4453),o=t(184);n.Z=function(e){var n=e.isOpen,t=e.message,r=e.yesConfirm,a=e.noConfirm;return(0,o.jsxs)(i(),{isOpen:n,style:{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(165, 165, 165, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"8px"}},shouldCloseOnOverlayClick:!0,contentLabel:"Example Modal",ariaHideApp:!1,children:[(0,o.jsxs)("div",{className:"flex flex-col gap-4 w-[500px]",children:[(0,o.jsx)("span",{className:"text-2xl font-medium",children:"Confirm"}),(0,o.jsx)("span",{children:t})]}),(0,o.jsxs)("div",{className:"flex flex-row-reverse mt-5 gap-5",children:[(0,o.jsx)(s.Z,{onClick:r,children:"Yes"}),(0,o.jsx)(s.Z,{onClick:function(){a()},children:"No"})]})]})}},1756:function(e,n,t){var r=t(4165),i=t(5861),s=(t(2791),t(7948)),o=t.n(s),a=t(7689),l=t(3458),u=t(4212),c=t(4453),d=t(184);(0,u.Z)();n.Z=function(e){var n=e.isOpen,t=(0,a.s0)(),s=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.delete(l.T+"account/logout");case 3:localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),t("/"),window.location.reload(),e.next=16;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),t("/"),window.location.reload();case 16:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,d.jsx)(o(),{isOpen:n,style:{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(165, 165, 165, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"8px"}},contentLabel:"Example Modal",ariaHideApp:!1,children:(0,d.jsxs)("div",{className:"flex flex-col gap-4 w-[500px]",children:[(0,d.jsx)("span",{className:"text-2xl font-medium",children:"Session Expired"}),(0,d.jsx)("span",{children:"Your session has expired please login again, click the button bellow to go back login screen"}),(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsx)(c.Z,{onClick:s,className:"w-[50%]",children:"Login"})})]})})}},262:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(1413),i=t(885),s=t(2791),o=t(184),a=function(e){var n=e.item,t=e.onClickCheckbox,r=e.review,a=(0,s.useState)(!1),l=(0,i.Z)(a,2),u=l[0],c=l[1];return(0,s.useEffect)((function(){c(null===n||void 0===n?void 0:n.isTrue)}),[n]),(0,o.jsxs)("div",{className:"flex flex-row gap-5 w-full rounded-lg select-none\n                    outline outline-[2px] outline-primary px-5 py-2 transition-all cursor-pointer ".concat(u?"bg-primary text-white":"text-primary"),onClick:function(){var e;e=null===n||void 0===n?void 0:n.answer,r||(c(!u),t(e))},children:[(0,o.jsx)("input",{type:"checkbox",value:null===n||void 0===n?void 0:n.answer,className:"hidden"}),(0,o.jsxs)("label",{className:"flex flex-row justify-between items-center w-full cursor-pointer",children:[(0,o.jsx)("span",{className:"w-[80%] whitespace-normal break-words",children:null===n||void 0===n?void 0:n.answer}),(0,o.jsx)("div",{className:"flex items-center border justify-center rounded-full border-primary bg-white h-[20px] w-[20px]",children:u?(0,o.jsx)("i",{className:"fa-solid fa-check text-green-400 text-xs"}):""})]})]})},l=function(e){var n,t=e.answers,l=e.setAnswers,u=e.review,c=(0,s.useState)([]),d=(0,i.Z)(c,2),f=d[0],p=d[1],v=function(e){var n=f.findIndex((function(n){return n.answer===e}));-1!==n&&(f[n].isTrue=!f[n].isTrue,p(f),l((0,r.Z)((0,r.Z)({},t),{},{multiSelect:f})))};return(0,s.useEffect)((function(){var e;(null===(e=t.multiSelect)||void 0===e?void 0:e.length)>0&&p(t.multiSelect)}),[t]),(0,o.jsxs)("div",{className:"flex flex-col items-center gap-5",children:[(0,o.jsx)("div",{className:"w-full",children:(0,o.jsx)("span",{className:"text-yellow-400",children:"Multi select question"})}),null===t||void 0===t||null===(n=t.multiSelect)||void 0===n?void 0:n.map((function(e,n){return(0,o.jsx)(a,{item:e,onClickCheckbox:v,review:u},e.isTrue+e.answer+n)}))]})}},8462:function(e,n,t){var r=t(1413),i=t(885),s=t(2791),o=t(184);n.Z=function(e){var n=e.answers,t=e.setAnswers,a=(0,s.useState)(""),l=(0,i.Z)(a,2),u=l[0],c=l[1],d=(0,s.useRef)("");return(0,s.useEffect)((function(){d.current!==u&&u.length>0&&(d.current=u,t((0,r.Z)((0,r.Z)({},n),{},{input:[{answer:u}]})))}),[u]),(0,s.useEffect)((function(){var e,t,r;n&&1===(null===n||void 0===n||null===(e=n.input)||void 0===e?void 0:e.length)&&u!==(null===n||void 0===n||null===(t=n.input[0])||void 0===t?void 0:t.answer)&&c(null===(r=n.input[0])||void 0===r?void 0:r.answer)}),[n]),(0,o.jsx)("div",{className:"flex justify-center w-full",children:(0,o.jsx)("textarea",{value:u,onChange:function(e){return c(e.target.value)},placeholder:"Enter the answer...",className:"outline-primary resize-none transition-all border-2 border-gray-500 px-5 py-2 rounded-md w-[90%]"})})}},4212:function(e,n,t){var r=t(4165),i=t(5861),s=t(4569),o=t.n(s),a=t(456),l=t(7689),u=t(3458),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem("refresh_token"),e.next=4,o().post(u.T+"account/refresh-token",{},{headers:{Authorization:"Bearer ".concat(n)}});case 4:return t=e.sent,e.abrupt("return",t.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();n.Z=function(){var e=o().create();return e.interceptors.request.use(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("access_token"))){e.next=19;break}if(i=(0,a.Z)(t),e.prev=3,!(i.exp<Date.now()/1e3)){e.next=13;break}return e.next=7,c();case 7:s=e.sent,localStorage.setItem("access_token",s.accessToken),localStorage.setItem("refresh_token",s.refreshToken),n.headers.Authorization="Bearer "+s.accessToken,e.next=14;break;case 13:n.headers.Authorization="Bearer "+t;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0);case 19:return e.abrupt("return",n);case 20:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(n){return e.apply(this,arguments)}}(),(function(e){console.log(e),(0,l.s0)()("/")})),e}},3952:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r,i,s=t(168),o=t(4165),a=t(5861),l=t(885),u=t(2791),c=t(7689),d=(t(2118),t(2426)),f=t.n(d),p=t(3458),v=t(4453),x=t(1413),m=t(184),h=function(e){var n,t,r,i,s=e.answers,o=e.setAnswers,a=(0,u.useState)(null),c=(0,l.Z)(a,2),d=c[0],f=c[1],p=["a","b","c","d"],v=function(e){var n=e.target.value;f(n),o((function(e){var t,r,i,o;return(0,x.Z)((0,x.Z)({},s),{},{multiChoice:[{answer:null===(t=e.multiChoice[0])||void 0===t?void 0:t.answer,isTrue:"a"===n},{answer:null===(r=e.multiChoice[1])||void 0===r?void 0:r.answer,isTrue:"b"===n},{answer:null===(i=e.multiChoice[2])||void 0===i?void 0:i.answer,isTrue:"c"===n},{answer:null===(o=e.multiChoice[3])||void 0===o?void 0:o.answer,isTrue:"d"===n}]})}))};return(0,u.useEffect)((function(){var e,n=null===(e=s.multiChoice)||void 0===e?void 0:e.findIndex((function(e){return!0===e.isTrue}));f(p[n])}),[s]),(0,m.jsxs)("div",{className:"flex flex-wrap",children:[(0,m.jsxs)("div",{className:"hidden",children:[(0,m.jsx)("input",{type:"radio",onChange:function(e){return v(e)},value:"a",id:"option-A",name:"chosenAnswer"}),(0,m.jsx)("input",{type:"radio",onChange:function(e){return v(e)},value:"b",id:"option-B",name:"chosenAnswer"}),(0,m.jsx)("input",{type:"radio",onChange:function(e){return v(e)},value:"c",id:"option-C",name:"chosenAnswer"}),(0,m.jsx)("input",{type:"radio",onChange:function(e){return v(e)},value:"d",id:"option-D",name:"chosenAnswer"})]}),(0,m.jsxs)("div",{className:"flex flex-col w-full gap-5 my-5",children:[(0,m.jsx)("label",{htmlFor:"option-A",className:"border border-primary outline-none w-full inline-block whitespace-normal break-words px-5 justify-center py-3 rounded-lg transition-all cursor-pointer ".concat("a"===d?"bg-primary text-white":"text-primary bg-white"),children:null===(n=s.multiChoice[0])||void 0===n?void 0:n.answer}),(0,m.jsx)("label",{htmlFor:"option-B",className:"border border-primary outline-none w-full inline-block whitespace-normal break-words px-5 h-fit justify-center py-3 rounded-lg transition-all cursor-pointer ".concat("b"===d?"bg-primary text-white":"text-primary bg-white"),children:null===(t=s.multiChoice[1])||void 0===t?void 0:t.answer}),(0,m.jsx)("label",{htmlFor:"option-C",className:"border border-primary outline-none w-full inline-block whitespace-normal break-words px-5 h-fit justify-center py-3 rounded-lg transition-all cursor-pointer ".concat("c"===d?"bg-primary text-white":"text-primary bg-white"),children:null===(r=s.multiChoice[2])||void 0===r?void 0:r.answer}),(0,m.jsx)("label",{htmlFor:"option-D",className:"border border-primary outline-none w-full inline-block whitespace-normal break-words px-5 h-fit justify-center py-3 rounded-lg transition-all cursor-pointer ".concat("d"===d?"bg-primary text-white":"text-primary bg-white"),children:null===(i=s.multiChoice[3])||void 0===i?void 0:i.answer})]})]})},w=t(6308),g=t(262),b=t(8462),j=t(1756),k=t(6906),y=(0,t(4212).Z)(),Z=function(e){var n=e.isTeacher,t=(0,c.s0)(),d=(0,c.UO)(),x=d.assignmentId,Z=(d.questionIndex,(0,u.useState)(!1)),C=(0,l.Z)(Z,2),N=C[0],S=C[1],T=(0,u.useState)(!1),O=(0,l.Z)(T,2),I=O[0],A=O[1],E=(0,u.useState)(),R=(0,l.Z)(E,2),q=R[0],F=R[1],_=(0,u.useState)(),Q=(0,l.Z)(_,2),z=Q[0],B=Q[1],H=(0,u.useState)([]),D=(0,l.Z)(H,2),L=D[0],M=D[1],P=(0,u.useState)(),Y=(0,l.Z)(P,2),U=Y[0],V=Y[1],W=(0,u.useState)(),G=(0,l.Z)(W,2),J=G[0],K=G[1],X=(0,u.useState)("00:00:00"),$=(0,l.Z)(X,2),ee=$[0],ne=$[1],te=(0,u.useState)(!0),re=(0,l.Z)(te,2),ie=re[0],se=re[1],oe=function(e){var n,t=null===e||void 0===e||null===(n=e.answerOfRespondent)||void 0===n?void 0:n.answer,r=(null===e||void 0===e?void 0:e.questionTypeId)&&["","multiChoice","trueFalse","input","multiSelect"][null===e||void 0===e?void 0:e.questionTypeId];if(t&&r&&t[r]){var i=t[r];if("multiChoice"===r)for(var s=0;s<i.length;s++)if(i[s].isTrue)return!0;if("trueFalse"===r)for(var o=0;o<i.length;o++)if(i[o].isTrue)return!0;if("input"===r&&i[0].answer.length>0)return!0;if("multiSelect"===r)for(var a=0;a<i.length;a++)if(i[a].isTrue)return!0}return!1},ae=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){var t,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n){e.next=6;break}return e.next=4,y.put(p.T+"teacher-question/".concat(null===q||void 0===q||null===(t=q.answerOfRespondent)||void 0===t?void 0:t.respondentQuestionId),{answer:U});case 4:e.next=8;break;case 6:return e.next=8,y.put(p.T+"student-question/".concat(null===q||void 0===q||null===(r=q.answerOfRespondent)||void 0===r?void 0:r.respondentQuestionId),{answer:U});case 8:(null===q||void 0===q?void 0:q.index)<L.length-1?le((null===q||void 0===q?void 0:q.index)+1):(le(null===q||void 0===q?void 0:q.index),A(!0)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),401===e.t0.response.status&&S(!0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),le=(0,u.useCallback)(function(){var e=(0,a.Z)((0,o.Z)().mark((function e(t){var r,i,s,a,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=t||0,!n){e.next=8;break}return e.next=5,y.get(p.T+"teacher-question/teacher/assignment/".concat(x));case 5:i=e.sent,e.next=11;break;case 8:return e.next=10,y.get(p.T+"student-question/student/assignment/".concat(x));case 10:i=e.sent;case 11:if(i){for(s=i.data,a=0;a<s.length;a++)s[a].index=a;s&&s.length>0&&(M(s),B(null===(l=s[r])||void 0===l?void 0:l.id))}e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0),401===e.t0.response.status&&S(!0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),[x,n]),ue=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){var t,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n){e.next=6;break}return e.next=4,y.put(p.T+"teacher-question/".concat(null===q||void 0===q||null===(t=q.answerOfRespondent)||void 0===t?void 0:t.respondentQuestionId),{answer:U});case 4:e.next=8;break;case 6:return e.next=8,y.put(p.T+"student-question/".concat(null===q||void 0===q||null===(r=q.answerOfRespondent)||void 0===r?void 0:r.respondentQuestionId),{answer:U});case 8:le(null===q||void 0===q?void 0:q.index),A(!0),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),401===e.t0.response.status&&S(!0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),ce=(0,u.useCallback)((0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n){e.next=8;break}if(e.t0=!ie,!e.t0){e.next=6;break}return e.next=6,y.put(p.T+"teacher-assignment/teacher/assignment/".concat(x,"/submit"));case 6:e.next=12;break;case 8:if(e.t1=!ie,!e.t1){e.next=12;break}return e.next=12,y.put(p.T+"student-assignment/student/assignment/".concat(x,"/submit"));case 12:t("/assignment/".concat(x,"/result")),e.next=19;break;case 15:e.prev=15,e.t2=e.catch(0),console.log(e.t2),401===e.t2.response.status&&S(!0);case 19:case"end":return e.stop()}}),e,null,[[0,15]])}))),[x,t,ie,n]);(0,u.useEffect)((function(){J&&J<0&&(ne("00:00:00"),ce())}),[J,ce]),(0,u.useEffect)((function(){le()}),[le]),(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){var r,i,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=6;break}return e.next=3,y.get(p.T+"teacher-assignment/teacher/assignment/".concat(x,"/do-time"));case 3:r=e.sent,e.next=9;break;case 6:return e.next=8,y.get(p.T+"student-assignment/student/assignment/".concat(x,"/do-time"));case 8:r=e.sent;case 9:if(!r){e.next=17;break}if(i=r.data,se(!(null===i||void 0===i||!i.dateComplete)),null===i||void 0===i||!i.dateComplete){e.next=15;break}return t("/assignment/".concat(x,"/result")),e.abrupt("return");case 15:return s=setInterval((function(){var e=f()(null===i||void 0===i?void 0:i.dateEnd).diff(f()()),n=f()(e).utcOffset(0).format("HH:mm:ss");K(e),ne(n)}),1e3),e.abrupt("return",(function(){clearInterval(s)}));case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=e();return function(){return r.then((function(e){return e&&e()}))}}),[x]),(0,u.useEffect)((function(){F(L.find((function(e){return e.id===z})))}),[z,L]),(0,u.useEffect)((function(){if(q){var e,n,t,r,i,s,o,a,l,u,c,d,f,p,v,x,m,h,w={multiChoice:null===(e=q.answerOfRespondent)||void 0===e||null===(n=e.answer)||void 0===n||null===(t=n.multiChoice)||void 0===t?void 0:t.map((function(e,n){var t,r;return{isTrue:null===e||void 0===e?void 0:e.isTrue,answer:null===(t=q.contentQuestion)||void 0===t||null===(r=t.multiChoice[n])||void 0===r?void 0:r.answer}})),multiSelect:null===(r=q.answerOfRespondent)||void 0===r||null===(i=r.answer)||void 0===i||null===(s=i.multiSelect)||void 0===s?void 0:s.map((function(e,n){var t,r;return{isTrue:null===e||void 0===e?void 0:e.isTrue,answer:null===(t=q.contentQuestion)||void 0===t||null===(r=t.multiSelect[n])||void 0===r?void 0:r.answer}})),input:null===(o=q.answerOfRespondent)||void 0===o||null===(a=o.answer)||void 0===a?void 0:a.input,trueFalse:null===(l=q.answerOfRespondent)||void 0===l||null===(u=l.answer)||void 0===u||null===(c=u.trueFalse)||void 0===c?void 0:c.map((function(e,n){var t,r;return{isTrue:null===e||void 0===e?void 0:e.isTrue,answer:null===(t=q.contentQuestion)||void 0===t||null===(r=t.trueFalse[n])||void 0===r?void 0:r.answer}}))},g={multiChoice:null===(d=q.contentQuestion)||void 0===d||null===(f=d.multiChoice)||void 0===f?void 0:f.map((function(e){return{isTrue:!1,answer:e.answer}})),multiSelect:null===(p=q.contentQuestion)||void 0===p||null===(v=p.multiSelect)||void 0===v?void 0:v.map((function(e){return{isTrue:!1,answer:e.answer}})),input:[{answer:""}],trueFalse:null===(x=q.contentQuestion)||void 0===x||null===(m=x.trueFalse)||void 0===m?void 0:m.map((function(e){return{isTrue:!1,answer:e.answer}}))};V(null!==(h=q.answerOfRespondent)&&void 0!==h&&h.answer?w:g)}}),[q,n]);return(0,u.useEffect)((function(){document.querySelector("#formula").setValue(String.raw(r||(r=(0,s.Z)(["\begin{multline}\n    "],["\\begin{multline}\n    "])))+(null===q||void 0===q?void 0:q.content)+String.raw(i||(i=(0,s.Z)(["\n    end{multline}"],["\n    \\end{multline}"]))))}),[null===q||void 0===q?void 0:q.content]),(0,m.jsxs)("div",{className:"flex flex-col px-10 gap-5 py-7",children:[(0,m.jsx)("h2",{className:"font-semibold font-inter px-3 text-xl",children:"Assignment name"}),(0,m.jsxs)("div",{className:"flex flex-row gap-5 h-fit w-full",children:[(0,m.jsx)("div",{className:"flex flex-col w-[65%] gap-5",children:(0,m.jsxs)("div",{className:"w-full bg-white shadow rounded-lg px-12 pt-7 pb-5 flex flex-col gap-5 text-justify",children:[(0,m.jsx)("div",{className:"flex",children:(0,m.jsxs)("h2",{className:"font-semibold font-inter text-primary rounded-lg text-xl",children:["Question - ",(null===q||void 0===q?void 0:q.index)+1]})}),(0,m.jsx)("math-field",{id:"formula",style:{whiteSpace:"initial",fontSize:"20px",outline:"none",padding:"0.5rem 1.5rem",userSelect:"none",width:"100%",maxHeight:"150px",overflowWrap:"break-word",fontFamily:"Poppins"},readonly:!0}),(0,m.jsx)("div",{className:"",children:function(e){switch(e){case 1:return U&&(0,m.jsx)(h,{answers:U,setAnswers:V});case 2:return U&&(0,m.jsx)(w.Z,{answers:U,setAnswers:V});case 3:return U&&(0,m.jsx)(b.Z,{answers:U,setAnswers:V});case 4:return U&&(0,m.jsx)(g.Z,{answers:U,setAnswers:V});default:return(0,m.jsx)("div",{children:"404"})}}(null===q||void 0===q?void 0:q.questionTypeId)}),(0,m.jsx)("div",{className:"flex flex-row-reverse",children:(0,m.jsx)(v.Z,{className:"border-none",onClick:ae,children:(null===q||void 0===q?void 0:q.index)===L.length-1?"Submit":"Next"})})]})}),(0,m.jsx)("div",{className:"flex flex-col gap-5 w-[35%]",children:(0,m.jsxs)("div",{className:"flex flex-col h-[450px] pt-7 px-5 pb-5 items-center bg-white justify-between rounded-lg shadow",children:[(0,m.jsxs)("div",{className:"flex flex-col items-center gap-3 h-full ",children:[(0,m.jsx)("span",{className:"font-semibold text-2xl text-primary",children:ee}),(0,m.jsx)("div",{className:"flex flex-wrap gap-5 max-h-[300px] px-5 overflow-y-auto py-3",children:L.map((function(e,n){return(0,m.jsxs)("div",{className:"h-[40px] w-[30px] flex flex-col outline outline-2 outline-gray-500 hover:outline-green-500 rounded overflow-hidden transition-all cursor-pointer select-none",onClick:function(){return B(e.id)},children:[(0,m.jsx)("div",{className:"flex justify-center items-center",children:(0,m.jsx)("span",{children:n+1})}),oe(e)&&(0,m.jsx)("div",{className:"text-white flex w-full h-full items-center justify-center bg-primary"})]},e.id)}))})]}),(0,m.jsx)(v.Z,{className:"border-none w-[70%]",onClick:ue,children:"Submit"})]})})]}),(0,m.jsx)(j.Z,{isOpen:N}),(0,m.jsx)(k.Z,{isOpen:I,message:"Do you want submit assignment?",yesConfirm:ce,noConfirm:function(){return A(!1)}})]})}},168:function(e,n,t){function r(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=952.276fa6f5.chunk.js.map