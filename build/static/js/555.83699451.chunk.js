"use strict";(self.webpackChunktemplate_react_app=self.webpackChunktemplate_react_app||[]).push([[555],{4453:function(e,n,s){var t=s(1413),r=s(5987),a=(s(2791),s(184)),i=["children","className"];n.Z=function(e){var n=e.children,s=e.className,l=void 0===s?"":s,o=(0,r.Z)(e,i);return(0,a.jsx)("button",(0,t.Z)((0,t.Z)({className:"bg-primary py-2 px-5 rounded-lg border-2 text-white transition-all active:scale-90 cursor-pointer select-none hover:bg-opacity-90 text-center border-none ".concat(l," ")},o),{},{children:n}))}},6906:function(e,n,s){s(2791);var t=s(7948),r=s.n(t),a=s(4453),i=s(184);n.Z=function(e){var n=e.isOpen,s=e.message,t=e.yesConfirm,l=e.noConfirm;return(0,i.jsxs)(r(),{isOpen:n,style:{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(165, 165, 165, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"8px"}},shouldCloseOnOverlayClick:!0,contentLabel:"Example Modal",ariaHideApp:!1,children:[(0,i.jsxs)("div",{className:"flex flex-col gap-4 w-[500px]",children:[(0,i.jsx)("span",{className:"text-2xl font-medium",children:"Confirm"}),(0,i.jsx)("span",{children:s})]}),(0,i.jsxs)("div",{className:"flex flex-row-reverse mt-5 gap-5",children:[(0,i.jsx)(a.Z,{onClick:t,children:"Yes"}),(0,i.jsx)(a.Z,{onClick:function(){l()},children:"No"})]})]})}},1756:function(e,n,s){var t=s(4165),r=s(5861),a=(s(2791),s(7948)),i=s.n(a),l=s(7689),o=s(3458),c=s(4212),u=s(4453),d=s(184);(0,c.Z)();n.Z=function(e){var n=e.isOpen,s=(0,l.s0)(),a=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.delete(o.T+"account/logout");case 3:localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),s("/"),window.location.reload(),e.next=16;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),s("/"),window.location.reload();case 16:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,d.jsx)(i(),{isOpen:n,style:{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(165, 165, 165, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"8px"}},contentLabel:"Example Modal",ariaHideApp:!1,children:(0,d.jsxs)("div",{className:"flex flex-col gap-4 w-[500px]",children:[(0,d.jsx)("span",{className:"text-2xl font-medium",children:"Session Expired"}),(0,d.jsx)("span",{children:"Your session has expired please login again, click the button bellow to go back login screen"}),(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsx)(u.Z,{onClick:a,className:"w-[50%]",children:"Login"})})]})})}},262:function(e,n,s){s.d(n,{Z:function(){return o}});var t=s(1413),r=s(885),a=s(2791),i=s(184),l=function(e){var n=e.item,s=e.onClickCheckbox,t=e.review,l=(0,a.useState)(!1),o=(0,r.Z)(l,2),c=o[0],u=o[1];return(0,a.useEffect)((function(){u(null===n||void 0===n?void 0:n.isTrue)}),[n]),(0,i.jsxs)("div",{className:"flex flex-row gap-5 w-full rounded-lg select-none\n                    outline outline-[2px] outline-primary px-5 py-2 transition-all cursor-pointer ".concat(c?"bg-primary text-white":"text-primary"),onClick:function(){var e;e=null===n||void 0===n?void 0:n.answer,t||(u(!c),s(e))},children:[(0,i.jsx)("input",{type:"checkbox",value:null===n||void 0===n?void 0:n.answer,className:"hidden"}),(0,i.jsxs)("label",{className:"flex flex-row justify-between items-center w-full cursor-pointer",children:[(0,i.jsx)("span",{className:"w-[80%] whitespace-normal break-words",children:null===n||void 0===n?void 0:n.answer}),(0,i.jsx)("div",{className:"flex items-center border justify-center rounded-full border-primary bg-white h-[20px] w-[20px]",children:c?(0,i.jsx)("i",{className:"fa-solid fa-check text-green-400 text-xs"}):""})]})]})},o=function(e){var n,s=e.answers,o=e.setAnswers,c=e.review,u=(0,a.useState)([]),d=(0,r.Z)(u,2),x=d[0],p=d[1],f=function(e){var n=x.findIndex((function(n){return n.answer===e}));-1!==n&&(x[n].isTrue=!x[n].isTrue,p(x),o((0,t.Z)((0,t.Z)({},s),{},{multiSelect:x})))};return(0,a.useEffect)((function(){var e;(null===(e=s.multiSelect)||void 0===e?void 0:e.length)>0&&p(s.multiSelect)}),[s]),(0,i.jsxs)("div",{className:"flex flex-col items-center gap-5",children:[(0,i.jsx)("div",{className:"w-full",children:(0,i.jsx)("span",{className:"text-yellow-400",children:"Multi select question"})}),null===s||void 0===s||null===(n=s.multiSelect)||void 0===n?void 0:n.map((function(e,n){return(0,i.jsx)(l,{item:e,onClickCheckbox:f,review:c},e.isTrue+e.answer+n)}))]})}},4648:function(e,n,s){var t=s(885),r=s(2791),a=s(184);n.Z=function(e){var n=e.answers,s=e.setAnswers,i=e.Preview,l=(0,r.useState)(""),o=(0,t.Z)(l,2),c=o[0],u=o[1],d=(0,r.useState)(""),x=(0,t.Z)(d,2),p=x[0],f=x[1],m=(0,r.useState)(""),h=(0,t.Z)(m,2),g=h[0],v=h[1],w=(0,r.useState)(""),j=(0,t.Z)(w,2),b=j[0],y=j[1],N=(0,r.useState)(""),Z=(0,t.Z)(N,2),C=Z[0],k=Z[1],T=(0,r.useMemo)((function(){return{0:"a",1:"b",2:"c",3:"d"}}),[]);return(0,r.useEffect)((function(){var e;if(n&&4===(null===n||void 0===n||null===(e=n.multiChoice)||void 0===e?void 0:e.length)){var s,t,r,a,i,l=null===n||void 0===n||null===(s=n.multiChoice)||void 0===s?void 0:s.findIndex((function(e){return!0===e.isTrue}));u(T["".concat(l)]),f(null===(t=n.multiChoice[0])||void 0===t?void 0:t.answer),v(null===(r=n.multiChoice[1])||void 0===r?void 0:r.answer),y(null===(a=n.multiChoice[2])||void 0===a?void 0:a.answer),k(null===(i=n.multiChoice[3])||void 0===i?void 0:i.answer)}}),[n,T]),(0,r.useEffect)((function(){s((function(e){return e.multiChoice[0].isTrue="a"===c,e.multiChoice[1].isTrue="b"===c,e.multiChoice[2].isTrue="c"===c,e.multiChoice[3].isTrue="d"===c,e}))}),[c,s]),(0,r.useEffect)((function(){s((function(e){return e.multiChoice[0].answer=p,e}))}),[p,s]),(0,r.useEffect)((function(){s((function(e){return e.multiChoice[1].answer=g,e}))}),[g,s]),(0,r.useEffect)((function(){s((function(e){return e.multiChoice[2].answer=b,e}))}),[b,s]),(0,r.useEffect)((function(){s((function(e){return e.multiChoice[3].answer=C,e}))}),[C,s]),(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsxs)("div",{className:"hidden",children:[(0,a.jsx)("input",{type:"radio",checked:"a"===c,onChange:function(e){return u(e.target.value)},name:"right-answer",value:"a",id:"option-a",disabled:!!i}),(0,a.jsx)("input",{type:"radio",checked:"b"===c,onChange:function(e){return u(e.target.value)},name:"right-answer",value:"b",id:"option-b",disabled:!!i}),(0,a.jsx)("input",{type:"radio",checked:"c"===c,onChange:function(e){return u(e.target.value)},name:"right-answer",value:"c",id:"option-c",disabled:!!i}),(0,a.jsx)("input",{type:"radio",checked:"d"===c,onChange:function(e){return u(e.target.value)},name:"right-answer",value:"d",id:"option-d",disabled:!!i})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-5 my-5",children:[(0,a.jsxs)("label",{htmlFor:"option-a",className:"h-full w-full bg-primary px-3 py-4 rounded-md flex flex-row gap-5 items-center justify-between cursor-pointer",children:[i?(0,a.jsx)("span",{className:"text-white outline-none  duration-300  pb-1 px-1",children:p}):(0,a.jsx)("input",{value:p,onChange:function(e){return f(e.target.value)},placeholder:"Type in answer",readOnly:!!i,className:"text-white outline-none w-full bg-primary placeholder-gray-100 border-b border-primary duration-300 focus:border-gray-100 pb-1 px-1"}),"a"===c?(0,a.jsx)("div",{className:"w-[20px] h-[20px] rounded-full bg-green-400 text-white cursor-pointer flex justify-center items-center",children:(0,a.jsx)("i",{className:"fas fa-check text-xs"})}):(0,a.jsx)("div",{className:"w-[20px] h-[20px] rounded-full border-2  cursor-pointer"})]}),(0,a.jsxs)("label",{htmlFor:"option-b",className:"h-full w-full bg-primary px-3 py-4 rounded-md flex flex-row gap-5 items-center justify-between cursor-pointer",children:[i?(0,a.jsx)("span",{className:"text-white outline-none  duration-300  pb-1 px-1",children:g}):(0,a.jsx)("input",{value:g,onChange:function(e){return v(e.target.value)},placeholder:"Type in answer",readOnly:!!i,className:" text-white outline-none bg-primary placeholder-gray-100 w-full border-b border-primary duration-300 focus:border-gray-100 pb-1 px-1"}),"b"===c?(0,a.jsx)("div",{className:"w-[20px] h-[20px] rounded-full bg-green-400 text-white cursor-pointer flex justify-center items-center",children:(0,a.jsx)("i",{className:"fas fa-check text-xs"})}):(0,a.jsx)("div",{className:"w-[20px] h-[20px] rounded-full border-2 cursor-pointer"})]}),(0,a.jsxs)("label",{htmlFor:"option-c",className:"h-full w-full bg-primary px-3 py-4 rounded-md flex flex-row gap-5 items-center justify-between cursor-pointer",children:[i?(0,a.jsx)("span",{className:"text-white outline-none  duration-300  pb-1 px-1",children:b}):(0,a.jsx)("input",{value:b,onChange:function(e){return y(e.target.value)},placeholder:"Type in answer",readOnly:!!i,className:" text-white outline-none bg-primary placeholder-gray-100 w-full border-b border-primary duration-300 focus:border-gray-100 pb-1 px-1"}),"c"===c?(0,a.jsx)("div",{className:"w-[20px] h-[20px] rounded-full bg-green-400 text-white cursor-pointer flex justify-center items-center",children:(0,a.jsx)("i",{className:"fas fa-check text-xs"})}):(0,a.jsx)("div",{className:"w-[20px] h-[20px] rounded-full border-2  cursor-pointer"})]}),(0,a.jsxs)("label",{htmlFor:"option-d",className:"h-full w-full bg-primary px-3 py-4 rounded-md flex flex-row gap-5 items-center justify-between cursor-pointer",children:[i?(0,a.jsx)("span",{className:"text-white outline-none  duration-300  pb-1 px-1",children:C}):(0,a.jsx)("input",{value:C,onChange:function(e){return k(e.target.value)},placeholder:"Type in answer",readOnly:!!i,className:" text-white outline-none bg-primary placeholder-gray-100 w-full border-b border-primary duration-300 focus:border-gray-100 pb-1 px-1"}),"d"===c?(0,a.jsx)("div",{className:"w-[20px] h-[20px] rounded-full bg-green-400 text-white cursor-pointer flex justify-center items-center",children:(0,a.jsx)("i",{className:"fas fa-check text-xs"})}):(0,a.jsx)("div",{className:"w-[20px] h-[20px] rounded-full border-2  cursor-pointer"})]})]})]})}},140:function(e,n,s){var t=s(1413),r=s(885),a=s(2791),i=s(184);n.Z=function(e){var n,s=e.answers,l=e.setAnswers,o=e.Review,c=(0,a.useState)(""),u=(0,r.Z)(c,2),d=u[0],x=u[1],p=function(e){o||x(e.target.value)},f=null===s||void 0===s||null===(n=s.trueFalse)||void 0===n?void 0:n.findIndex((function(e){return!0===e.isTrue})),m=(0,a.useMemo)((function(){return{0:"True",1:"False"}}),[]);return(0,a.useEffect)((function(){var e;null!==s&&void 0!==s&&null!==(e=s.trueFalse)&&void 0!==e&&e.find((function(e){return"True"===e.answer}))&&x(m["".concat(f)])}),[s,m,f]),(0,a.useEffect)((function(){d&&m[f]!==d&&!o&&l((0,t.Z)((0,t.Z)({},s),{},{trueFalse:[{isTrue:"True"===d,answer:"True"},{isTrue:"False"===d,answer:"False"}]}))}),[d]),(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsxs)("div",{className:"hidden",onChange:p,children:[(0,i.jsx)("input",{type:"radio",name:"right-answer",value:"True",id:"option-True"}),(0,i.jsx)("input",{type:"radio",name:"right-answer",value:"False",id:"option-False"})]}),(0,i.jsxs)("div",{className:"grid grid-cols-2 gap-5 my-5 ",onChange:p,children:[(0,i.jsxs)("label",{htmlFor:"option-True",className:"h-full w-full bg-primary px-3 py-4 rounded-md flex flex-row gap-5 items-center cursor-pointer select-none justify-between",children:[(0,i.jsx)("span",{className:" text-white outline-none bg-primary placeholder-gray-100 select-none",children:"True"}),"True"===d?(0,i.jsx)("div",{className:"w-[20px] h-[20px] rounded-full bg-green-400 text-white  flex justify-center items-center",children:(0,i.jsx)("i",{className:"fas fa-check text-xs"})}):(0,i.jsx)("div",{className:"w-[20px] h-[20px] rounded-full border-2  cursor-pointer"})]}),(0,i.jsxs)("label",{htmlFor:"option-False",className:"h-full w-full bg-primary px-3 py-4 rounded-md flex flex-row gap-5 items-center select-none cursor-pointer  justify-between",children:[(0,i.jsx)("span",{className:" text-white outline-none bg-primary placeholder-gray-100 select-none",children:"False"}),"False"===d?(0,i.jsx)("div",{className:"w-[20px] h-[20px] rounded-full bg-green-400 text-white cursor-pointer flex justify-center items-center",children:(0,i.jsx)("i",{className:"fas fa-check text-xs"})}):(0,i.jsx)("div",{className:"w-[20px] h-[20px] rounded-full border-2 "})]})]})]})}},3458:function(e,n,s){s.d(n,{T:function(){return t}});var t="http://localhost:8080/api/"},4212:function(e,n,s){var t=s(4165),r=s(5861),a=s(4569),i=s.n(a),l=s(456),o=s(7689),c=s(3458),u=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(){var n,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem("refresh_token"),e.next=4,i().post(c.T+"account/refresh-token",{},{headers:{Authorization:"Bearer ".concat(n)}});case 4:return s=e.sent,e.abrupt("return",s.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();n.Z=function(){var e=i().create();return e.interceptors.request.use(function(){var e=(0,r.Z)((0,t.Z)().mark((function e(n){var s,r,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(s=localStorage.getItem("access_token"))){e.next=19;break}if(r=(0,l.Z)(s),e.prev=3,!(r.exp<Date.now()/1e3)){e.next=13;break}return e.next=7,u();case 7:a=e.sent,localStorage.setItem("access_token",a.accessToken),localStorage.setItem("refresh_token",a.refreshToken),n.headers.Authorization="Bearer "+a.accessToken,e.next=14;break;case 13:n.headers.Authorization="Bearer "+s;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0);case 19:return e.abrupt("return",n);case 20:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(n){return e.apply(this,arguments)}}(),(function(e){console.log(e),(0,o.s0)()("/")})),e}},7555:function(e,n,s){s.r(n),s.d(n,{default:function(){return z}});var t,r,a=s(4165),i=s(5861),l=s(885),o=s(2791),c=s(7689),u=s(2426),d=s.n(u),x=s(3458),p=s(4453),f=s(168),m=s(7948),h=s.n(m),g=(s(2118),s(4648)),v=s(140),w=s(262),j=s(184),b={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(165, 165, 165, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"8px",overflow:"unset !important"}},y={multiChoice:[{answer:"test",isTrue:!0},{answer:"test",isTrue:!1},{answer:"test",isTrue:!1},{answer:"test",isTrue:!1}],trueFalse:[{isTrue:!0,answer:"True"},{isTrue:!1,answer:"False"}],input:[{isTrue:!0,answer:"test"}],multiSelect:[{answer:"test",isTrue:!0},{answer:"test",isTrue:!0},{answer:"test",isTrue:!1},{answer:"test",isTrue:!1}]},N=function(e){var n=e.isOpen,s=e.setIsOpen,a=e.question;return(0,o.useEffect)((function(){var e=document.querySelector("#viewQ");e&&(e.applyStyle({fontSize:7}),console.log(e))}),[a]),(0,j.jsx)(h(),{isOpen:n,style:b,onRequestClose:function(){return s(!n)},contentLabel:"Example Modal",ariaHideApp:!1,children:(0,j.jsxs)("div",{className:"flex flex-col gap-5 w-[600px] h-fit",children:[(0,j.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,j.jsx)("math-field",{style:{whiteSpace:"initial",fontSize:"20px",outline:"none",padding:"0.5rem 1.5rem",userSelect:"none",width:"100%",maxHeight:"150px",overflowWrap:"break-word",fontFamily:"Poppins"},id:"viewQ",value:String.raw(t||(t=(0,f.Z)(["\begin{multline}\n            "],["\\begin{multline}\n            "])))+a.content+String.raw(r||(r=(0,f.Z)(["end{multline}"],["\\end{multline}"]))),readOnly:!0}),(0,j.jsxs)("div",{className:"flex flex-row gap-5 items-center text-sm px-2 text-gray-500",children:[(0,j.jsx)("span",{className:"bg-primary text-white rounded-full px-2 text-sm flex items-center",children:(1===a.questionTypeId?"Multi Choice":2===a.questionTypeId&&"True False")||3===a.questionTypeId&&"Input"||4===a.questionTypeId&&"Multi Select"}),(0,j.jsxs)("span",{className:"text-gray-500",children:[a.score," pt"]})]}),(0,j.jsx)("div",{children:function(e,n){switch(n=JSON.parse(n),e){case 1:return y&&(0,j.jsx)(g.Z,{answers:n,setAnswers:function(){},Preview:!0});case 2:return y&&(0,j.jsx)(v.Z,{answers:n,Review:!0});case 3:return y&&(0,j.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,j.jsx)("span",{className:"px-2 font-[500]",children:"Correct input"}),(0,j.jsx)("div",{className:"bg-blue-400  rounded-lg px-3 py-3 max-h-[200px] overflow-auto text-white break-words whitespace-normal",children:(0,j.jsx)("span",{children:n.input[0].answer})})]});case 4:return y&&(0,j.jsx)(w.Z,{answers:n,review:!0});default:return(0,j.jsx)("div",{children:"404"})}}(a.questionTypeId,a.option)})]}),(0,j.jsx)("div",{className:"flex flex-row-reverse",children:(0,j.jsx)(p.Z,{className:"w-[30%]",onClick:function(){return s(!n)},children:"Cancel"})})]})})},Z=function(e){var n=e.question,s=e.index,t=(0,o.useState)(!1),r=(0,l.Z)(t,2),a=r[0],i=r[1];return(0,o.useEffect)((function(){var e=document.querySelector("#formula-exam-".concat(s));console.log(e),e&&e.setValue(null===n||void 0===n?void 0:n.content)}),[null===n||void 0===n?void 0:n.content,s]),n&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(N,{isOpen:a,setIsOpen:i,question:n}),(0,j.jsxs)("div",{onClick:function(){return i(!a)},className:"flex flex-row bg-[#f4f7f9] justify-between select-non cursor-pointer shadow rounded-lg px-4 py-3",children:[(0,j.jsx)("math-field",{readOnly:!0,id:"formula-exam-".concat(s),style:{width:"70%"}}),(0,j.jsxs)("div",{className:"flex flex-row items-center w-[150px] gap-4",children:[(0,j.jsx)("span",{className:"bg-primary text-white rounded-full h-fit px-3 py-1 text-xs flex items-center",children:(1===n.questionTypeId?"Multi Choice":2===n.questionTypeId&&"True False")||3===n.questionTypeId&&"Input"||4===n.questionTypeId&&"Multi Select"}),(0,j.jsxs)("span",{className:"text-gray-500",children:[n.score," pt"]})]})]})]})},C=s(2982),k=s(1756),T=s(4212),S=s(9085),I=(s(5462),{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(165, 165, 165, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"8px"}}),O=(0,T.Z)(),A=function(e){var n=e.isOpen,s=e.setIsOpen,t=e.classId,r=e.currentAssignment,c=e.studentsOfAssignment,u=e.getAssignmentOfClass,d=(0,o.useState)([]),f=(0,l.Z)(d,2),m=f[0],g=f[1],v=(0,o.useState)([]),w=(0,l.Z)(v,2),b=w[0],y=w[1],N=(0,o.useState)(!1),Z=(0,l.Z)(N,2),T=Z[0],A=Z[1],q=(0,o.useState)(""),E=(0,l.Z)(q,2),F=E[0],M=E[1],D=(0,o.useState)(!1),R=(0,l.Z)(D,2),Y=R[0],P=R[1],_=(0,o.useCallback)((0,i.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.get(x.T+"student/class/".concat(t));case 3:n=e.sent,g(n.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),401===e.t0.response.status&&A(!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t]),L=function(e){y((function(n){return n.includes(e)?n.filter((function(n){return n!==e})):[].concat((0,C.Z)(n),[e])}))};(0,o.useEffect)((function(){return(null===b||void 0===b?void 0:b.length)===(null===m||void 0===m?void 0:m.length)?P(!0):P(!1)}),[b,m]);var z=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.put(x.T+"student-assignment/assignment/".concat(null===(t=r.assignment)||void 0===t?void 0:t.id,"/assign-list-student"),{listStudentId:b,dateDue:r.dateDue});case 3:u(null===(i=r.assignment)||void 0===i?void 0:i.id),s(!n),H("Assign success"),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),s(!n),H("Assign failed please try again!"),401===e.t0.response.status&&A(!0);case 14:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){_()}),[_]);var H=function(e){return(0,S.Am)(e)};return(0,o.useEffect)((function(){if(c&&m){for(var e=[],n=function(n){m.find((function(e){return e.id===c[n].studentId}))&&e.push(c[n].studentId)},s=0;s<c.length;++s)n(s);y(e)}}),[m,c]),(0,j.jsxs)(h(),{isOpen:n,style:I,onRequestClose:function(){return s()},contentLabel:"Example Modal",ariaHideApp:!1,children:[(0,j.jsxs)("div",{className:"flex flex-col gap-4 w-[500px]",children:[(0,j.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,j.jsx)("span",{className:"text-2xl font-medium",children:"Assign Students"}),(0,j.jsx)("input",{onChange:function(e){return M(e.target.value)},type:"text",className:"bg-[#f4f7f9] rounded-lg shadow px-2 outline-none mr-2",placeholder:"Search student"})]}),(0,j.jsxs)("div",{className:"flex flex-row-reverse gap-2 mx-3",children:[(0,j.jsx)("label",{htmlFor:"assign-all",className:"border-primary border px-2 rounded-lg cursor-pointer select-none transition-all \n            ".concat(Y?"bg-primary text-white":"text-primary"),children:"Assign to all class"}),(0,j.jsx)("input",{type:"checkbox",id:"assign-all",checked:Y,onChange:function(){P((function(e){return y(e?[]:m.map((function(e){return e.id}))),!e}))},className:"hidden"})]}),(0,j.jsx)("div",{className:"flex flex-col gap-4 px-2 py-2 h-[350px] overflow-y-auto",children:m.filter((function(e){return""===F||e.fullName.toLowerCase().includes(F.toLowerCase())?e:""})).map((function(e,n){return(0,j.jsxs)("div",{onClick:function(){return L(e.id)},className:"w-full flex flex-row justify-between content-center transition-all gap-5 h-fit px-4 py-2 rounded-lg cursor-pointer\n                  ".concat(b.includes(e.id)?"bg-primary text-white":"bg-[#f4f7f9]"),children:[(0,j.jsx)("label",{htmlFor:"student-".concat(n),className:"flex items-center gap-4 cursor-pointer",onClick:function(){return L(e.id)},children:(0,j.jsx)("input",{id:"student-".concat(n),type:"checkbox",checked:b.includes(e.id),className:"cursor-pointer hidden",onChange:function(){return L(e.id)}})}),(0,j.jsx)("span",{className:"w-[70%] truncate inline",children:e.fullName}),(0,j.jsxs)("span",{className:"".concat(b.includes(e.id)?"text-white":"text-gray-500"," w-[100px]"),children:["avS: ",e.averageScore||0]})]},e.id)}))}),(0,j.jsxs)("div",{className:"flex flex-row-reverse gap-5",children:[(0,j.jsx)(p.Z,{onClick:function(){return s()},className:"bg-white text-primary shadow-primary shadow",children:"Cancel"}),(0,j.jsx)(p.Z,{onClick:function(){z()},children:"Assign"})]})]}),(0,j.jsx)(k.Z,{isOpen:T})]})},q=s(1413),E=s(1134),F=(s(3443),s(7160)),M=(0,T.Z)(),D={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(165, 165, 165, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"8px",overflow:"unset !important"}},R=function(e){var n=e.isOpen,s=e.setIsOpen,t=e.assignId,r=e.typeAssignment,u=(0,c.s0)(),f=(0,o.useState)(!1),m=(0,l.Z)(f,2),g=m[0],v=m[1],w=(0,o.useState)((0,F.P6)().getToday()),b=(0,l.Z)(w,2),y=b[0],N=b[1],Z=(0,E.cI)(),C=Z.register,T=Z.handleSubmit,I=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var s,i,l,o,c,p,f,m,h,g,w,j;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s="".concat(y.year,"-").concat(y.month,"-").concat(y.day," ").concat(n.hour,":").concat(n.minute,":00"),i={assignmentName:n.assignmentName,dateDue:s,doTime:n.doTime,passScore:n.passScore,totalScore:n.totalScore,redo:n.redo,typeAssignment:r},e.next=5,M.post(x.T+"assignment",i);case 5:if(l=e.sent,"Class"!==r){e.next=13;break}return g=new Date,w=y&&d()("".concat(y.year,"-").concat(y.month,"-").concat(y.day)).add(parseInt(n.dueTime),"days").format("YYYY-MM-DD")||(new Date).setDate((new Date).getDate()+parseInt(n.dueTime)),e.next=11,M.post(x.T+"class-assignment",{assignmentId:null===(o=l.data)||void 0===o||null===(c=o.result)||void 0===c?void 0:c.id,classId:t,dateOpen:g,dateDue:w});case 11:j=e.sent,u("/class/".concat(null===(p=j.data)||void 0===p||null===(f=p.result)||void 0===f?void 0:f.classId,"/assignment/").concat(null===(m=j.data)||void 0===m||null===(h=m.result)||void 0===h?void 0:h.assignmentId,"/"));case 13:e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0),a="Create failed please try again",(0,S.Am)(a),401===e.t0.response.status&&v(!0);case 20:case"end":return e.stop()}var a}),e,null,[[0,15]])})));return function(n){return e.apply(this,arguments)}}();return(0,j.jsxs)(h(),{isOpen:n,style:D,onRequestClose:function(){return s(!n)},contentLabel:"Example Modal",ariaHideApp:!1,children:[(0,j.jsxs)("div",{className:"flex flex-col gap-4 h-fit w-[700px]",children:[(0,j.jsx)("div",{className:"flex flex-row justify-between",children:(0,j.jsx)("span",{className:"text-2xl font-medium text-gray-600",children:"Create Exam"})}),(0,j.jsxs)("form",{onSubmit:T(I),className:"flex flex-col text-gray-600 gap-4",children:[(0,j.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,j.jsx)("span",{children:"Exams title"}),(0,j.jsx)("input",(0,q.Z)((0,q.Z)({type:"text"},C("assignmentName",{required:!0})),{},{placeholder:"Title",className:"outline-none px-3 py-1 border-b-2 border-opacity-0 transition-all focus:border-primary"}))]}),(0,j.jsxs)("div",{className:"flex flex-row w-full gap-5",children:[(0,j.jsxs)("div",{className:"flex flex-col gap-2 w-[50%]",children:[(0,j.jsx)("span",{children:"Time to do exams"}),(0,j.jsx)("input",(0,q.Z)((0,q.Z)({type:"number"},C("doTime",{required:!0,min:0})),{},{placeholder:"min(s)",className:"outline-none px-3  py-1 border-b-2 border-opacity-0 transition-all focus:border-primary"}))]}),(0,j.jsxs)("div",{className:"flex flex-col gap-2 w-[50%]",children:[(0,j.jsx)("span",{children:"Allow redo"}),(0,j.jsx)("input",(0,q.Z)((0,q.Z)({type:"number"},C("redo",{required:!0,min:1})),{},{placeholder:"Ex : 10",className:"outline-none px-3 py-1 border-b-2 border-opacity-0 transition-all focus:border-primary"}))]})]}),(0,j.jsxs)("div",{className:"flex flex-row w-full gap-5",children:[(0,j.jsxs)("div",{className:"flex flex-col gap-2 w-[50%]",children:[(0,j.jsx)("span",{children:"Total Score"}),(0,j.jsx)("input",(0,q.Z)((0,q.Z)({type:"number"},C("totalScore",{required:!0,min:0})),{},{placeholder:"Ex : 100",className:"outline-none px-3 py-1 border-b-2 border-opacity-0 transition-all focus:border-primary"}))]}),(0,j.jsxs)("div",{className:"flex flex-col gap-2 w-[50%]",children:[(0,j.jsx)("span",{children:"Pass Score"}),(0,j.jsx)("input",(0,q.Z)((0,q.Z)({type:"number"},C("passScore",{required:!0,min:0})),{},{placeholder:"Ex : 10",className:"outline-none px-3 py-1 border-b-2 border-opacity-0 transition-all focus:border-primary"}))]})]}),(0,j.jsxs)("div",{className:"flex flex-row w-full gap-5",children:[(0,j.jsxs)("div",{className:"flex flex-col gap-2 w-[50%]",children:[(0,j.jsx)("span",{children:"Date due"}),(0,j.jsx)(F.ZP,{value:y,onChange:N,inputPlaceholder:"Select a day",calendarPopperPosition:"top",calendarClassName:"pickday h-[100px] full",wrapperClassName:"pickday full",inputClassName:"w-full border-b-2 outline-none",minimumDate:(0,F.P6)().getToday(),shouldHighlightWeekends:!0})]}),(0,j.jsxs)("div",{className:"flex flex-col gap-2 w-[50%]",children:[(0,j.jsx)("span",{children:"Due time"}),(0,j.jsxs)("div",{className:"flex flex-row gap-5",children:[(0,j.jsx)("input",(0,q.Z)((0,q.Z)({type:"number",placeholder:"End hour"},C("hour",{required:!0,min:0,max:24})),{},{className:"outline-none px-3 py-1 w-[50%] border-b-2 border-opacity-0 transition-all focus:border-primary"})),"h :",(0,j.jsx)("input",(0,q.Z)((0,q.Z)({type:"number",placeholder:"End minute"},C("minute",{required:!0,min:0,max:60})),{},{className:"outline-none px-3 py-1 w-[50%] border-b-2 border-opacity-0 transition-all focus:border-primary"})),"min"]})]})]}),(0,j.jsxs)("div",{className:"flex flex-row-reverse gap-5",children:[(0,j.jsx)(p.Z,{onClick:function(){return s()},children:"Cancel"}),(0,j.jsx)(p.Z,{type:"submit",children:"Create"})]})]})]}),(0,j.jsx)(k.Z,{isOpen:g})]})},Y=s(6906),P=(0,T.Z)(),_=function(e){var n,s,t,r=e.val,c=e.currentAssignment,u=e.setCurrentAssignment,p=e.getAssignmentOfClass,f=(0,o.useState)(!1),m=(0,l.Z)(f,2),h=m[0],g=m[1],v=(0,o.useState)(!1),w=(0,l.Z)(v,2),b=w[0],y=w[1],N=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n,s){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.delete(x.T+"class-assignment/".concat(n));case 3:y(!b),p(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),401===e.t0.response.status&&g(!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,s){return e.apply(this,arguments)}}();return(0,j.jsxs)("div",{onClick:function(){u(r)},className:"border h-fit w-full hover:bg-gray-100 transition-all flex flex-row cursor-pointer select-none justify-between items-baseline rounded-lg px-3 py-2\n      ".concat((null===c||void 0===c?void 0:c.assignmentId)===(null===r||void 0===r?void 0:r.assignmentId)?"bg-gray-200":""),children:[(0,j.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,j.jsx)("span",{className:"w-[250px] truncate",children:null===r||void 0===r||null===(n=r.assignment)||void 0===n?void 0:n.assignmentName}),(0,j.jsxs)("div",{className:"flex flex-row gap-3 text-xs text-gray-500",children:[(0,j.jsxs)("span",{children:[(0,j.jsx)("i",{className:"fa-regular fa-calendar"})," ",d()(null===r||void 0===r?void 0:r.dateOpen).format("MMMM Do YY")]}),(0,j.jsxs)("span",{children:[(0,j.jsx)("i",{className:"fa-regular fa-clock"})," ","".concat(null===r||void 0===r||null===(s=r.assignment)||void 0===s?void 0:s.doTime,"   min").concat((null===r||void 0===r||null===(t=r.assignment)||void 0===t?void 0:t.doTime)>1?"s":"")]})]})]}),(0,j.jsxs)("div",{className:"flex flex-col justify-between gap-3",children:[(0,j.jsxs)("div",{className:"flex flex-row-reverse items-center gap-5",children:[(0,j.jsx)("i",{className:"fa-solid fa-xmark text-sm hover:text-red-500 transition-all",onClick:function(){y(!b)}}),(0,j.jsx)(Y.Z,{message:"Are you sure to delete this?",isOpen:b,setIsOpen:y,yesConfirm:function(){N(null===r||void 0===r?void 0:r.id,null===r||void 0===r?void 0:r.assignmentId)},noConfirm:function(){y(!b)}})]}),(0,j.jsx)("span",{className:"text-xs text-gray-500 flex flex-row-reverse",children:null!==r&&void 0!==r&&r.dateDue&&d()(null===r||void 0===r?void 0:r.dateDue)>d()()?d()(null===r||void 0===r?void 0:r.dateDue).format("DD MMM YYYY"):"Overdue"})]}),(0,j.jsx)(k.Z,{isOpen:h})]})},L=(0,T.Z)(),z=function(){var e,n,s,t,r,u,f,m,h,g,v,w=(0,c.UO)().classId,b=(0,o.useState)(!1),y=(0,l.Z)(b,2),N=y[0],C=y[1],T=(0,o.useState)(!1),S=(0,l.Z)(T,2),I=S[0],O=S[1],q=(0,o.useState)(!1),E=(0,l.Z)(q,2),F=E[0],M=E[1],D=(0,o.useState)([]),Y=(0,l.Z)(D,2),P=Y[0],z=Y[1],H=(0,o.useState)({}),Q=(0,l.Z)(H,2),B=Q[0],W=Q[1],J=(0,c.s0)(),U=(0,o.useCallback)(function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var s,t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.get(x.T+"class-assignment/class/".concat(w));case 3:s=e.sent,t=s.data,z(t),null!==t&&void 0!==t&&t.length?(r=null===t||void 0===t?void 0:t.find((function(e){return e.assignment.id===n})),W(r||t[0])):W({}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),401===e.t0.response.status&&C(!0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),[w]);return(0,o.useEffect)((function(){console.log(B)}),[B]),(0,o.useEffect)((function(){U()}),[]),(0,j.jsxs)("div",{className:"px-10 py-7 flex h-full flex-row gap-5",children:[(0,j.jsx)(R,{isOpen:F,setIsOpen:M,assignId:w,typeAssignment:"Class"}),(0,j.jsx)("div",{className:"flex flex-col gap-5 h-fit w-[60%] bg-white rounded-lg shadow lg px-5 py-4",children:(null===B||void 0===B?void 0:B.assignment)&&(0,j.jsxs)("div",{className:"flex flex-col gap-5 h-fit",children:[(0,j.jsx)(A,{isOpen:I,setIsOpen:O,classId:w,currentAssignment:B,studentsOfAssignment:B.assignment.studentAssignment,getAssignmentOfClass:U}),(0,j.jsx)("span",{className:"text-4xl w-[650px] truncate text-gray-800",children:null===(e=B.assignment)||void 0===e?void 0:e.assignmentName}),(0,j.jsx)("span",{className:"font-[500]",children:"Exams Information"}),(0,j.jsxs)("div",{className:"flex flex-row justify-between text-sm items-baseline",children:[(0,j.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,j.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,j.jsx)("div",{className:"flex items-center w-[40px] h-[40px] bg-gray-100 rounded-lg justify-center",children:(0,j.jsx)("i",{className:"fa-regular fa-calendar"})}),(0,j.jsx)("span",{children:d()(B.dateOpen).format("MMMM Do YY")})]}),(0,j.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,j.jsx)("div",{className:"flex items-center w-[40px] h-[40px] bg-gray-100 rounded-lg justify-center",children:(0,j.jsx)("i",{className:"fa-regular fa-clock"})}),(0,j.jsx)("span",{children:"".concat(null===(n=B.assignment)||void 0===n?void 0:n.doTime," min").concat((null===(s=B.assignment)||void 0===s?void 0:s.doTime)>1?"s":"")})]}),(0,j.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,j.jsx)("div",{className:"flex items-center w-[40px] h-[40px] bg-gray-100 rounded-lg justify-center",children:(0,j.jsx)("i",{className:"fa-solid fa-users"})}),"".concat(null===(t=B.assignment)||void 0===t?void 0:t.studentAssignment.length," student").concat((null===(r=B.assignment)||void 0===r?void 0:r.studentAssignment.length)>1?"s":"")]})]}),(0,j.jsxs)("div",{className:"flex flex-col gap-3 w-[35%]",children:[(0,j.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,j.jsx)("div",{className:"flex items-center w-[40px] h-[40px] bg-gray-100 rounded-lg justify-center",children:(0,j.jsx)("i",{className:"fa-solid fa-users"})}),(0,j.jsxs)("span",{children:["Total Score: ",null===(u=B.assignment)||void 0===u?void 0:u.totalScore," pt"]})]}),(0,j.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,j.jsx)("div",{className:"flex items-center w-[40px] h-[40px] bg-gray-100 rounded-lg justify-center",children:(0,j.jsx)("i",{className:"fa-solid fa-users"})}),(0,j.jsxs)("span",{children:["Pass Score: ",null===(f=B.assignment)||void 0===f?void 0:f.passScore," pt"]})]}),(0,j.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,j.jsx)("div",{className:"flex items-center w-[40px] h-[40px] bg-gray-100 rounded-lg justify-center",children:(0,j.jsx)("i",{className:"fa-regular fa-circle-question"})}),(0,j.jsx)("span",{children:"".concat((null===(m=B.assignment)||void 0===m?void 0:m.assignmentQuestion.length)||0," question").concat((null===(h=B.assignment)||void 0===h?void 0:h.assignmentQuestion.length)>1?"s":"")})]})]})]}),(0,j.jsxs)("div",{className:"flex flex-col h-full gap-5 ",children:[(0,j.jsxs)("div",{className:"flex flex-row items-base justify-between",children:[(0,j.jsx)("span",{className:"font-[500]",children:"Questions"}),(0,j.jsxs)(p.Z,{onClick:function(){var e;return J("/class/".concat(w,"/assignment/").concat(null===B||void 0===B||null===(e=B.assignment)||void 0===e?void 0:e.id))},className:"text-sm flex gap-3 items-center",children:[(0,j.jsx)("i",{className:"fa-solid fa-pen-to-square"})," Edit questions"]})]}),(0,j.jsx)("div",{className:"flex flex-col h-[380px] py-3 px-2 gap-4 overflow-y-auto",children:(null===B||void 0===B||null===(g=B.assignment)||void 0===g?void 0:g.assignmentQuestion)&&(null===B||void 0===B||null===(v=B.assignment)||void 0===v?void 0:v.assignmentQuestion.map((function(e,n){return(0,j.jsx)(Z,{index:n,question:e.question},e.questionId)})))}),(0,j.jsx)("div",{className:"flex flex-row-reverse",children:(0,j.jsx)(p.Z,{onClick:function(){return O(!I)},children:"Assign"})})]})]})}),(0,j.jsxs)("div",{className:"flex flex-col gap-3 h-[100%] w-[40%] bg-white rounded-lg shadow lg px-5 py-4",children:[(0,j.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,j.jsx)("span",{className:"text-2xl",children:"Exams"}),(0,j.jsx)(p.Z,{onClick:function(){return M(!F)},className:"text-xs",children:"Create new exam"})]}),(0,j.jsx)("div",{className:"flex flex-col gap-5 pr-2 h-[400px] overflow-auto",children:P&&P.map((function(e,n){return(0,j.jsx)(_,{val:e,currentAssignment:B,setCurrentAssignment:W,getAssignmentOfClass:U},n)}))})]}),(0,j.jsx)(k.Z,{isOpen:N})]})}},3443:function(){},5462:function(){},168:function(e,n,s){function t(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}s.d(n,{Z:function(){return t}})}}]);
//# sourceMappingURL=555.83699451.chunk.js.map