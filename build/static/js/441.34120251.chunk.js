"use strict";(self.webpackChunktemplate_react_app=self.webpackChunktemplate_react_app||[]).push([[441],{4453:function(e,t,n){var a=n(1413),r=n(5987),s=(n(2791),n(184)),o=["children","className"];t.Z=function(e){var t=e.children,n=e.className,c=void 0===n?"":n,i=(0,r.Z)(e,o);return(0,s.jsx)("button",(0,a.Z)((0,a.Z)({className:"bg-primary py-2 px-5 rounded-lg border-2 text-white transition-all active:scale-90 cursor-pointer select-none hover:bg-opacity-90 text-center border-none ".concat(c," ")},i),{},{children:t}))}},1756:function(e,t,n){var a=n(4165),r=n(5861),s=(n(2791),n(7948)),o=n.n(s),c=n(7689),i=n(3458),l=n(4212),d=n(4453),u=n(184),p=(0,l.Z)();t.Z=function(e){var t=e.isOpen,n=(0,c.s0)(),s=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.delete(i.T5+"account/logout");case 3:localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),n("/"),window.location.reload(),e.next=16;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),n("/"),window.location.reload();case 16:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,u.jsx)(o(),{isOpen:t,style:{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(165, 165, 165, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"8px"}},contentLabel:"Example Modal",ariaHideApp:!1,children:(0,u.jsxs)("div",{className:"flex flex-col gap-4 w-[500px]",children:[(0,u.jsx)("span",{className:"text-2xl font-medium",children:"Session Expired"}),(0,u.jsx)("span",{children:"Your session has expired please login again, click the button bellow to go back login screen"}),(0,u.jsx)("div",{className:"flex justify-center",children:(0,u.jsx)(d.Z,{onClick:s,className:"w-[50%]",children:"Login"})})]})})}},6752:function(e,t,n){var a=n(2791),r=n(4261),s=n(4453),o=n(184),c=function(e){var t=e.checkboxTable,n=void 0!==t&&t,c=e.customCssTr,i=void 0===c?"":c,l=e.thead,d=void 0===l?[]:l,u=e.tbody,p=void 0===u?[]:u,f=e.actions,x=void 0===f?[]:f,m=e.onClickTh,h=void 0===m?null:m,g=e.checked,b=void 0===g?[]:g;return(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:"overflow-x-auto relative shadow-lg rounded-xl mt-[8px]",children:(0,o.jsxs)("table",{className:"w-full text-xl text-center text-gray-500 dark:text-gray-400 border-separate",children:[(0,o.jsx)("thead",{className:"text-base text-gray-700 uppercase font-semibold bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:(0,o.jsxs)("tr",{children:[n&&(0,o.jsx)("th",{scope:"col",className:"p-4",style:{width:"5%"}}),d&&d.map((function(e,t,n){return t!==n.length-1||e.title?(0,o.jsx)("th",{style:{width:e.width},scope:"col",className:"py-3 px-6",children:e.title},(0,r.Z)()):(0,o.jsx)("th",{style:{width:e.width},scope:"col",className:"py-3 px-1"},(0,r.Z)())}))]})}),(0,o.jsx)("tbody",{className:"text-base",children:p&&p.map((function(e){var t=Object.keys(e).filter((function(e){return"id"!==e}));return(0,o.jsxs)("tr",{className:"odd:bg-white even:bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700 "+i,children:[n&&(0,o.jsx)("td",{className:"p-4",style:{width:"5%"},children:(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsx)("input",{type:"checkbox",checked:b.includes(e.id),className:"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer",onChange:function(){return h(e.id)}}),(0,o.jsx)("label",{className:"sr-only",children:"checkbox"})]})}),t.map((function(t,n){return(0,o.jsx)("td",{className:"py-4 px-6 font-medium dark:text-white truncate",style:{maxWidth:d[n]["max-width"]},onClick:function(){return h(e.id)},children:e[t]},(0,r.Z)())})),!!x.length&&(0,o.jsx)("td",{className:"py-4 px-1 font-medium whitespace-nowrap text-white flex justify-evenly",children:x.map((function(t){return(0,o.jsx)(a.Fragment,{children:(0,o.jsx)(s.Z,{className:"rounded-lg border-none text-sm font-semibold bg-primary px-3 py-1.5",onClick:function(){t.eventAction&&t.eventAction(e.id)},children:t.name})},(0,r.Z)())}))})]},(0,r.Z)())}))})]})})})};t.Z=(0,a.memo)(c)},4212:function(e,t,n){var a=n(4165),r=n(5861),s=n(4569),o=n.n(s),c=n(456),i=n(7689),l=n(3458),d=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("refresh_token"),e.next=4,o().post(l.T5+"account/refresh-token",{},{headers:{Authorization:"Bearer ".concat(t)}});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();t.Z=function(){var e=o().create();return e.interceptors.request.use(function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var n,r,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=localStorage.getItem("access_token"))){e.next=19;break}if(r=(0,c.Z)(n),e.prev=3,!(r.exp<Date.now()/1e3)){e.next=13;break}return e.next=7,d();case 7:s=e.sent,localStorage.setItem("access_token",s.accessToken),localStorage.setItem("refresh_token",s.refreshToken),t.headers.Authorization="Bearer "+s.accessToken,e.next=14;break;case 13:t.headers.Authorization="Bearer "+n;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0);case 19:return e.abrupt("return",t);case 20:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.log(e),(0,i.s0)()("/")})),e}},9959:function(e,t,n){var a=n(4165),r=n(1413),s=n(5861),o=n(885),c=n(2791),i=n(1134),l=n(7948),d=n.n(l),u=n(3458),p=n(4453),f=n(1756),x=n(4212),m=n(184),h=(0,x.Z)();t.Z=function(e){var t=e.modalCreateSkillIsOpen,n=e.setCreateSkillIsOpen,l=e.topicId,x=e.getTopicOfClass,g=e.getTopicOfGrade,b=(0,i.cI)(),v=b.register,k=b.handleSubmit,y=b.reset,j=b.formState,N=(0,c.useState)(!1),w=(0,o.Z)(N,2),Z=w[0],S=w[1],I=(0,c.useState)([]),C=(0,o.Z)(I,2),T=C[0],D=C[1],A=function(){n(!1)},O=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,r.Z)((0,r.Z)({},t),{},{topicId:l}),e.next=4,h.post(u.T5+"skill",n);case 4:x&&x(),g&&g(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),401===e.t0.response.status&&S(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.get(u.T5+"standard");case 3:t=e.sent,D(t.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),401===e.t0.response.status&&S(!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){U()}),[]),(0,c.useEffect)((function(){j.isSubmitSuccessful&&(y({skillName:"",description:"",standardId:-1,topicId:-1}),A())}),[j,y]),(0,m.jsxs)(d(),{isOpen:t,style:{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(165, 165, 165, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"8px"}},contentLabel:"Example Modal",ariaHideApp:!1,children:[(0,m.jsx)("div",{className:"flex justify-end",children:(0,m.jsx)("button",{onClick:A,children:(0,m.jsx)("i",{className:"fas fa-times"})})}),(0,m.jsxs)("form",{className:"flex flex-col w-[500px]",onSubmit:k(O),children:[(0,m.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,m.jsx)("div",{className:"flex justify-center",children:(0,m.jsx)("h2",{className:"text-2xl font-semibold",children:"Create new skill"})}),(0,m.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,m.jsx)("label",{htmlFor:"skillName",children:"Name"}),(0,m.jsx)("input",(0,r.Z)({type:"text",name:"skillName",placeholder:"Enter skill name",className:"outline-none border border-gray-500 px-2 py-1 rounded"},v("skillName")))]}),(0,m.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,m.jsx)("label",{htmlFor:"description",children:"Description"}),(0,m.jsx)("textarea",(0,r.Z)({type:"text",name:"description",placeholder:"Description",className:"resize-none outline-none border border-gray-500 px-2 py-1 rounded"},v("description")))]}),(0,m.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,m.jsx)("label",{htmlFor:"standard",children:"Standard of skill"}),(0,m.jsxs)("select",(0,r.Z)((0,r.Z)({name:"standard",className:"border border-gray-500 rounded px-2",defaultValue:"-1"},v("standardId")),{},{children:[(0,m.jsx)("option",{disabled:!0,value:"-1",children:"-- Select standards --"}),T.map((function(e){return(0,m.jsx)("option",{value:e.id,children:e.standardName},e.id)}))]}))]})]}),(0,m.jsx)(p.Z,{className:"border-none bg-primary w-full mt-5",children:"Create"})]}),(0,m.jsx)(f.Z,{isOpen:Z})]})}},7441:function(e,t,n){n.r(t);var a=n(2982),r=n(885),s=n(2791),o=n(7689),c=n(6048),i=n.n(c),l=n(2426),d=n.n(l),u=n(6752),p=n(3458),f=n(9959),x=n(4212),m=n(184),h=(0,x.Z)();t.default=function(){var e=(0,o.s0)(),t=(0,o.UO)().topicId,n=(0,s.useState)([]),c=(0,r.Z)(n,2),l=c[0],x=c[1],g=(0,s.useState)([]),b=(0,r.Z)(g,2),v=b[0],k=b[1],y=(0,s.useState)([]),j=(0,r.Z)(y,2),N=j[0],w=j[1],Z=(0,s.useState)([]),S=(0,r.Z)(Z,2),I=S[0],C=S[1],T=(0,s.useState)(0),D=(0,r.Z)(T,2),A=D[0],O=D[1],U=(0,s.useState)(0),_=(0,r.Z)(U,2),E=_[0],L=_[1],R=(0,s.useState)(0),M=(0,r.Z)(R,2),P=M[0],Y=M[1],z=(0,s.useState)(!1),F=(0,r.Z)(z,2),H=F[0],V=F[1],B=(0,s.useCallback)((function(){h.get(p.T5+"skill/topic/".concat(t)).then((function(e){for(var t=e.data,n=[],r=0;r<t.length;++r)n=[].concat((0,a.Z)(n),[{id:t[r].id,topicName:t[r].skillName,standardName:t[r].standardName}]);w(t),C(n),O(n.length>0?1:0)}))}),[t]);return(0,s.useEffect)((function(){h.get(p.T5+"topic/".concat(t)).then((function(e){x(e.data)}))}),[t]),(0,s.useEffect)((function(){B()}),[B]),(0,s.useEffect)((function(){var e=P+5;k(I.slice(P,e)),L(Math.ceil(I.length/5))}),[P,I]),(0,m.jsxs)("div",{className:"pt-[40px] px-[68px] h-screen",children:[(0,m.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,m.jsx)("i",{className:"fas fa-caret-left text-xl font-bold"}),(0,m.jsx)("span",{className:"underline underline-offset-4 font-semibold cursor-pointer",onClick:function(){e("/class/:classId/topic/")},children:"All Topics"})]}),(0,m.jsxs)("div",{className:"w-full h-[68px] bg-primary flex items-center justify-between mt-[20px] rounded-xl shadow-lg px-12",children:[(0,m.jsx)("h1",{className:"text-2xl font-medium uppercase text-white",children:l.topicName}),(0,m.jsxs)("button",{className:"h-7 w-24 px-2 flex items-center justify-center text-white rounded-xl border-[1px]",onClick:function(){V(!0)},children:[(0,m.jsx)("span",{className:" flex items-center justify-center mr-1",children:"Add"}),(0,m.jsx)("span",{children:"skill"})]}),(0,m.jsx)(f.Z,{modalCreateSkillIsOpen:H,setCreateSkillIsOpen:V,getSkillsOfTopic:B,topicId:t})]}),(0,m.jsxs)("div",{className:"flex flex-col justify-between mb-[40px] h-[77%]",children:[(0,m.jsx)("div",{className:"grow",children:(0,m.jsx)(u.Z,{thead:[{width:"50%",title:"SKILL"},{width:"25%",title:"STANDARD"},{width:"25%",title:""}],tbody:v,actions:[{name:"Assign",eventAction:function(t){h.get(p.T5+"skill-assignment/skill/".concat(t)).then((function(n){if(!n.data){var a={assignmentName:N.find((function(e){return e.id===t})).skillName,time:90,totalScore:100,redo:0,dateDue:d()(new Date).format("YYYY-MM-DD HH:mm:ss")};h.post(p.T5+"assignment",a).then((function(n){h.post(p.T5+"skill-assignment",{assignmentId:n.data.id,skillId:t}).then((function(t){e("/skill/".concat(t.data.skillId,"/assignment/").concat(t.data.assignmentId,"/"))}))}))}e("/skill/".concat(n.data.skillId,"/assignment/").concat(n.data.assignmentId,"/"))}))}},{name:"Delete",eventAction:function(e){h.delete(p.T5+"skill/".concat(e)).then((function(e){B()}))}}]})}),(0,m.jsxs)("div",{className:"mt-[16px] flex justify-between px-5",children:[(0,m.jsxs)("span",{className:"font-sm text-gray-500",children:["Page ",A," / ",E]}),(0,m.jsx)(i(),{breakLabel:"...",nextLabel:(0,m.jsxs)("button",{children:["Next ",(0,m.jsx)("i",{className:"fas fa-angle-right"})]}),onPageChange:function(e){O(e.selected+1);var t=5*e.selected%I.length;Y(t)},pageRangeDisplayed:1,marginPagesDisplayed:2,pageCount:E,previousLabel:(0,m.jsxs)("button",{children:[(0,m.jsx)("i",{className:"fas fa-angle-left"})," Previous"]}),renderOnZeroPageCount:null,className:"flex flex-row text-gray-500 gap-7 justify-center font-semibold items-center",activeClassName:"bg-primary text-white flex justify-center items-center w-8 h-8 rounded-full shadow-lg"})]})]})]})}},4261:function(e,t,n){n.d(t,{Z:function(){return d}});var a,r={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},s=new Uint8Array(16);function o(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(s)}for(var c=[],i=0;i<256;++i)c.push((i+256).toString(16).slice(1));function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase()}var d=function(e,t,n){if(r.randomUUID&&!t&&!e)return r.randomUUID();var a=(e=e||{}).random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(var s=0;s<16;++s)t[n+s]=a[s];return t}return l(a)}}}]);
//# sourceMappingURL=441.34120251.chunk.js.map