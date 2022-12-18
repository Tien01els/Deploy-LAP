"use strict";(self.webpackChunktemplate_react_app=self.webpackChunktemplate_react_app||[]).push([[786],{4453:function(e,n,t){var s=t(1413),l=t(5987),r=(t(2791),t(184)),i=["children","className"];n.Z=function(e){var n=e.children,t=e.className,a=void 0===t?"":t,o=(0,l.Z)(e,i);return(0,r.jsx)("button",(0,s.Z)((0,s.Z)({className:"bg-primary py-2 px-5 rounded-lg border-2 text-white transition-all active:scale-90 cursor-pointer select-none hover:bg-opacity-90 text-center border-none ".concat(a," ")},o),{},{children:n}))}},3683:function(e,n,t){var s=t(1413),l=t(5987),r=(t(2791),t(9391)),i=t(184),a=["children"];n.Z=function(e){e.children;var n=(0,l.Z)(e,a);return(0,i.jsxs)("div",{style:{position:"relative",width:"200px",height:"200px"},children:[(0,i.jsx)("div",{style:{position:"absolute"},children:(0,i.jsx)(r.Ip,(0,s.Z)({},n))}),(0,i.jsx)("div",{style:{position:"absolute",height:"100%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:e.children})]})}},8093:function(e,n,t){var s=t(4165),l=t(5861),r=t(885),i=t(2791),a=t(7948),o=t.n(a),c=t(2426),d=t.n(c),u=t(7689),f=t(3458),x=t(1756),p=t(4453),m=t(7054),v=t(4212),h=t(184),g=(0,v.Z)(),j={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(165, 165, 165, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"8px",overflow:"unset !important"}};n.Z=function(e){var n=e.isOpen,t=e.setIsOpen,a=e.val,c=e.isParent,v=e.classPage,w=e.viewStudentResult,b=(0,u.s0)(),y=(0,i.useContext)(m.S),N=(0,i.useState)(!1),k=(0,r.Z)(N,2),C=k[0],Z=k[1];console.log(w);var S=function(){var e=(0,l.Z)((0,s.Z)().mark((function e(n,t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"start"!==t){e.next=4;break}return e.next=4,g.put(f.T5+"student-assignment/student/assignment/".concat(n,"/start"));case 4:b("/assignment/".concat(n,"/question/")),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),401===e.t0.response.status&&Z(!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,h.jsxs)(o(),{isOpen:n,style:j,contentLabel:"Example Modal",ariaHideApp:!1,children:[(0,h.jsxs)("div",{className:"flex flex-col gap-4 w-[500px] text-gray-500",children:[(0,h.jsx)("span",{className:"text-2xl font-medium text-primary whitespace-normal break-words w-full",children:null===a||void 0===a?void 0:a.assignment.assignmentName}),(0,h.jsxs)("div",{className:"flex flex-row ",children:[(0,h.jsxs)("div",{className:"flex flex-row gap-3 items-center w-[50%]",children:[(0,h.jsx)("div",{className:"bg-gray-100 flex items-center h-[30px] w-[30px] rounded-lg justify-center",children:(0,h.jsx)("i",{className:"fa-regular fa-clock text-primary"})}),(0,h.jsxs)("span",{children:[null===a||void 0===a?void 0:a.assignment.doTime," mins"]})]}),(0,h.jsxs)("div",{className:"flex flex-row gap-3 items-center ",children:[(0,h.jsxs)("div",{className:"bg-gray-100 flex items-center h-[30px] w-[30px] rounded-lg justify-center",children:[(0,h.jsx)("i",{className:"fa-regular fa-calendar text-primary"})," "]}),(0,h.jsx)("span",{children:d()(null===a||void 0===a?void 0:a.assignment.dateDue).format("HH:mm DD/MM/YYYY")})]})]}),(0,h.jsxs)("div",{className:"flex flex-row ",children:[(null===a||void 0===a?void 0:a.numberQuestionOfAssignment)&&(0,h.jsxs)("div",{className:"flex flex-row gap-3 items-center w-[50%]",children:[(0,h.jsx)("div",{className:"bg-gray-100 flex items-center h-[30px] w-[30px] rounded-lg justify-center",children:(0,h.jsx)("i",{className:"fa-solid fa-clipboard-question text-primary"})}),(0,h.jsxs)("span",{children:[null===a||void 0===a?void 0:a.numberQuestionOfAssignment," question"]})]}),(0,h.jsxs)("div",{className:"flex flex-row gap-3 items-center",children:[(0,h.jsx)("div",{className:"bg-gray-100 flex items-center h-[30px] w-[30px] rounded-lg justify-center",children:(0,h.jsx)("i",{className:"fa-regular fa-star text-primary"})}),(0,h.jsxs)("span",{children:["Pass score : ",null===a||void 0===a?void 0:a.assignment.passScore,"/",null===a||void 0===a?void 0:a.assignment.totalScore," "]})]})]}),(0,h.jsxs)("div",{className:"flex flex-row gap-3 items-center",children:[(0,h.jsx)("div",{className:"bg-gray-100 flex items-center h-[30px] w-[30px] rounded-lg justify-center",children:(0,h.jsx)("i",{className:"fa-brands fa-cloudsmith text-primary"})}),(0,h.jsx)("span",{className:" text-gray-500",children:function(){var e,n,t,s;return v?null!==a&&void 0!==a&&null!==(e=a.assignment)&&void 0!==e&&null!==(n=e.studentAssignment[0])&&void 0!==n&&n.dateComplete?"Submitted on ".concat(d()(null===a||void 0===a||null===(t=a.assignment)||void 0===t||null===(s=t.studentAssignment[0])||void 0===s?void 0:s.dateComplete).format("hh:mm DD/MM/YYYY")):"Not submitted":null!==a&&void 0!==a&&a.dateComplete?"Submitted on ".concat(d()(null===a||void 0===a?void 0:a.dateComplete).format("hh:mm DD/MM/YYYY")):null!==a&&void 0!==a&&a.dateComplete?void 0:"Not submitted"}()})]})]}),(0,h.jsxs)("div",{className:"flex flex-row-reverse mt-5 gap-5",children:[(0,h.jsx)(p.Z,{onClick:function(){t(!1)},children:"Cancel"}),function(){return 0===(null===a||void 0===a?void 0:a.numberQuestionOfAssignment)?(0,h.jsx)(h.Fragment,{}):v?c?null!==a&&void 0!==a&&null!==(l=a.assignment)&&void 0!==l&&null!==(r=l.studentAssignment[0])&&void 0!==r&&r.dateComplete?(0,h.jsx)(p.Z,{onClick:function(){b("/assignment/".concat(null===a||void 0===a?void 0:a.assignment.id,"/result"))},children:"View Result"}):(0,h.jsx)(h.Fragment,{}):null!==a&&void 0!==a&&null!==(e=a.assignment)&&void 0!==e&&null!==(n=e.studentAssignment[0])&&void 0!==n&&n.dateComplete?(0,h.jsx)(p.Z,{onClick:function(){b("/assignment/".concat(null===a||void 0===a?void 0:a.assignment.id,"/result"))},children:"View Result"}):null!==a&&void 0!==a&&null!==(t=a.assignment)&&void 0!==t&&null!==(s=t.studentAssignment[0])&&void 0!==s&&s.dateEnd?(0,h.jsx)(p.Z,{onClick:function(){return S(null===a||void 0===a?void 0:a.assignment.id,"continue")},children:"Continue Assignment"}):(0,h.jsx)(p.Z,{onClick:function(){return S(null===a||void 0===a?void 0:a.assignment.id,"start")},children:"Do Assignment"}):w?null!==a&&void 0!==a&&null!==(i=a.assignment)&&void 0!==i&&null!==(o=i.studentAssignment[0])&&void 0!==o&&o.dateComplete?(0,h.jsx)(p.Z,{onClick:function(){var e;b("/assignment/".concat(null===a||void 0===a?void 0:a.assignment.id,"/student/").concat(null===y||void 0===y||null===(e=y.studentInfo)||void 0===e?void 0:e.id))},children:"View Result"}):(0,h.jsx)(h.Fragment,{}):c?null!==a&&void 0!==a&&a.dateComplete?(0,h.jsx)(p.Z,{onClick:function(){b("/assignment/".concat(null===a||void 0===a?void 0:a.assignment.id,"/result"))},children:"View Result"}):(0,h.jsx)(h.Fragment,{}):null!==a&&void 0!==a&&a.dateComplete?(0,h.jsx)(p.Z,{onClick:function(){b("/assignment/".concat(null===a||void 0===a?void 0:a.assignment.id,"/result"))},children:"View Result"}):null!==a&&void 0!==a&&a.dateEnd?(0,h.jsx)(p.Z,{onClick:function(){return S(null===a||void 0===a?void 0:a.assignment.id,"continue")},children:"Continue Assignment"}):(0,h.jsx)(p.Z,{onClick:function(){return S(null===a||void 0===a?void 0:a.assignment.id,"start")},children:"Do Assignment"});var e,n,t,s,l,r,i,o}()]}),(0,h.jsx)(x.Z,{isOpen:C})]})}},1756:function(e,n,t){var s=t(4165),l=t(5861),r=(t(2791),t(7948)),i=t.n(r),a=t(7689),o=t(3458),c=t(4212),d=t(4453),u=t(184),f=(0,c.Z)();n.Z=function(e){var n=e.isOpen,t=(0,a.s0)(),r=function(){var e=(0,l.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.delete(o.T5+"account/logout");case 3:localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),t("/"),window.location.reload(),e.next=16;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),t("/"),window.location.reload();case 16:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,u.jsx)(i(),{isOpen:n,style:{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(165, 165, 165, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"8px"}},contentLabel:"Example Modal",ariaHideApp:!1,children:(0,u.jsxs)("div",{className:"flex flex-col gap-4 w-[500px]",children:[(0,u.jsx)("span",{className:"text-2xl font-medium",children:"Session Expired"}),(0,u.jsx)("span",{children:"Your session has expired please login again, click the button bellow to go back login screen"}),(0,u.jsx)("div",{className:"flex justify-center",children:(0,u.jsx)(d.Z,{onClick:r,className:"w-[50%]",children:"Login"})})]})})}},4212:function(e,n,t){var s=t(4165),l=t(5861),r=t(4569),i=t.n(r),a=t(456),o=t(7689),c=t(3458),d=function(){var e=(0,l.Z)((0,s.Z)().mark((function e(){var n,t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem("refresh_token"),e.next=4,i().post(c.T5+"account/refresh-token",{},{headers:{Authorization:"Bearer ".concat(n)}});case 4:return t=e.sent,e.abrupt("return",t.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();n.Z=function(){var e=i().create();return e.interceptors.request.use(function(){var e=(0,l.Z)((0,s.Z)().mark((function e(n){var t,l,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("access_token"))){e.next=19;break}if(l=(0,a.Z)(t),e.prev=3,!(l.exp<Date.now()/1e3)){e.next=13;break}return e.next=7,d();case 7:r=e.sent,localStorage.setItem("access_token",r.accessToken),localStorage.setItem("refresh_token",r.refreshToken),n.headers.Authorization="Bearer "+r.accessToken,e.next=14;break;case 13:n.headers.Authorization="Bearer "+t;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0);case 19:return e.abrupt("return",n);case 20:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(n){return e.apply(this,arguments)}}(),(function(e){console.log(e),(0,o.s0)()("/")})),e}},7373:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var s=t(4165),l=t(5861),r=t(885),i=t(2791),a=t(7689),o=t(9391),c=(t(1009),t(4453)),d=t(3458),u=t(4212),f=t(184),x=(0,u.Z)(),p=function(e){var n=e.student,t=e.setStudentInfo,a=e.onGetStudentOfClass,o=(0,i.useState)(!1),c=(0,r.Z)(o,2),u=c[0],p=c[1],m=function(){t(n)},v=function(){var e=(0,l.Z)((0,s.Z)().mark((function e(n,t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.delete(d.T5+"student/".concat(n,"/class"));case 3:return e.next=5,x.delete(d.T5+"notification-room/receiver/".concat(t));case 5:a(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"w-full h-[140px] flex flex-row gap-4 bg-white rounded-[16px] items-center shadow-md hover:shadow-lg transition-all select-none px-3 py-3",children:[(0,f.jsx)("img",{src:"https://students.flinders.edu.au/_jcr_content/content/section_856874544_co/par_0/image_general.coreimg.png/1621207287287/waving-person.png",alt:"",className:"object-fill h-32 w-36 rounded-lg"}),(0,f.jsxs)("div",{className:"flex flex-col justify-evenly h-full",children:[(0,f.jsxs)("div",{className:"flex flex-row items-center",children:[(0,f.jsx)("span",{className:"font-medium w-[210px] truncate cursor-pointer",onClick:function(){return m()},children:null===n||void 0===n?void 0:n.fullName}),(0,f.jsx)("div",{className:"flex flex-col mr-2",children:(0,f.jsxs)("div",{className:"rounded-full relative h-[24px] w-[24px] cursor-pointer  select-none flex items-center justify-center bg-".concat(u?"gray-100":"white"," hover:bg-gray-100"),onClick:function(){return p(!u)},children:[(0,f.jsx)("i",{className:"fas fa-ellipsis-h font-xs"}),u&&(0,f.jsx)("div",{className:"absolute translate-y-8 -translate-x-5 border-t-2 text-sm border-primary bg-[#ffffff] flex flex-col divide-y shadow-lg rounded-b",children:(0,f.jsx)("div",{className:"cursor-pointer px-2 py-1 hover:bg-[#ffffff] transition-all",onClick:function(){return v(null===n||void 0===n?void 0:n.id,null===n||void 0===n?void 0:n.accountId)},children:(0,f.jsx)("span",{children:"Remove"})})})]})})]}),(0,f.jsx)("p",{className:"text-xs w-[240px] h-[48px] whitespace-normal break-words line-clamp-3",children:"Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}),(0,f.jsxs)("div",{className:"flex flex-row justify-between items-center mr-5 text-xs",children:[(0,f.jsxs)("span",{children:["Average Score :"," ",(0,f.jsx)("span",{className:"text-primary",children:null===n||void 0===n?void 0:n.averageScore})]}),(0,f.jsx)("span",{className:"text-primary cursor-pointer",onClick:function(){return m()},children:"View"})]})]})]})},m=t(3683),v=t(8563),h=t(7247),g=(t(4676),t(4432),t(2558)),j=t(2426),w=t.n(j),b=t(7948),y=t.n(b),N=t(1413),k=t(4164);var C=function(e,n){};function Z(){return Z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Z.apply(this,arguments)}function S(e,n){if(null==e)return{};var t,s,l={},r=Object.keys(e);for(s=0;s<r.length;s++)n.indexOf(t=r[s])>=0||(l[t]=e[t]);return l}var A=function(){};function E(e){return null!=e&&e.current?e.current.scrollHeight:(C(!0,"useCollapse was not able to find a ref to the collapse element via `getCollapseProps`. Ensure that the element exposes its `ref` prop. If it exposes the ref prop under a different name (like `innerRef`), use the `refKey` property to change it. Example:\n\n{...getCollapseProps({refKey: 'innerRef'})}"),"auto")}var I=function(){var e=arguments;return function(){var n=arguments;return[].slice.call(e).forEach((function(e){return e&&e.apply(void 0,[].slice.call(n))}))}};function O(e,n){if(null!=e)if("function"==typeof e)e(n);else try{e.current=n}catch(t){throw new Error('Cannot assign value "'+n+'" to ref "'+e+'"')}}var R="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,T=!1,_=0,D=function(){return++_},Y=i.useId,P=["duration","easing","collapseStyles","expandStyles","onExpandStart","onExpandEnd","onCollapseStart","onCollapseEnd","isExpanded","defaultExpanded","hasDisabledAnimation"],M=["disabled","onClick"],q=["style","onTransitionEnd","refKey"];var B=t(8093),F=function(e){var n,t=e.assignmentInfo,s=(0,i.useState)(!1),l=(0,r.Z)(s,2),a=l[0],o=l[1],c=(null===t||void 0===t?void 0:t.assignment).studentAssignment;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(B.Z,{isOpen:a,setIsOpen:o,val:t,viewStudentResult:!0}),(0,f.jsxs)("div",{onClick:function(){return o(!0)},className:"flex flex-row ml-3 rounded-lg transition-all hover:bg-gray-50 cursor-pointer px-3 py-2 justify-between items-center",children:[(0,f.jsx)("span",{className:"text-primary w-[60%] truncate",children:null===t||void 0===t||null===(n=t.assignment)||void 0===n?void 0:n.assignmentName}),(0,f.jsxs)("div",{className:"flex flex-row gap-5  text-sm",children:[(null===c||void 0===c?void 0:c.score)&&(0,f.jsxs)("span",{className:"text-gray-400",children:[c.score,".pt"]}),(null===c||void 0===c?void 0:c.score)>t.passScore&&(0,f.jsx)("span",{className:"text-green-400",children:"Passed"})]})]})]})},L=function(e){var n,t,s=e.skill;return(0,f.jsxs)("div",{className:"flex ml-7 flex-col gap-4",children:[(0,f.jsxs)("span",{className:"w-[85%] truncate",children:[(0,f.jsx)("i",{className:"fa-solid fa-book text-gray-500"})," ",null===s||void 0===s?void 0:s.skillName]}),(0,f.jsx)("div",{className:"flex flex-col gap-3",children:(null===s||void 0===s||null===(n=s.skillAssignment)||void 0===n?void 0:n.length)>0&&(null===s||void 0===s||null===(t=s.skillAssignment)||void 0===t?void 0:t.map((function(e,n){return(0,f.jsx)(F,{assignmentInfo:e},n)})))})]})},G=function(e){var n,t,s=e.topicInfo,l=function(e){var n,t=void 0===e?{}:e,s=t.duration,l=t.easing,r=void 0===l?"cubic-bezier(0.4, 0, 0.2, 1)":l,a=t.collapseStyles,o=void 0===a?{}:a,c=t.expandStyles,d=void 0===c?{}:c,u=t.onExpandStart,f=void 0===u?A:u,x=t.onExpandEnd,p=void 0===x?A:x,m=t.onCollapseStart,v=void 0===m?A:m,h=t.onCollapseEnd,g=void 0===h?A:h,j=t.isExpanded,w=t.defaultExpanded,b=void 0!==w&&w,y=t.hasDisabledAnimation,N=void 0!==y&&y,_=S(t,P),B=function(e,n){var t=(0,i.useState)(n||!1),s=t[0],l=t[1],r=(0,i.useRef)(null!=e),a=r.current?e:s,o=(0,i.useCallback)((function(e){r.current||l(e)}),[]);return(0,i.useEffect)((function(){C(!(r.current&&null==e),"useCollapse is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."),C(!(!r.current&&null!=e),"useCollapse is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop.")}),[e]),[a,o]}(j,b),F=B[0],L=B[1],G=void 0!==Y?Y():function(e){var n=T?D():null,t=(0,i.useState)(n),s=t[0],l=t[1];return R((function(){null===s&&l(D())}),[]),(0,i.useEffect)((function(){!1===T&&(T=!0)}),[]),null!=s?String(s):void 0}(),H=(0,i.useRef)(null);n=H,(0,i.useEffect)((function(){}),[n]);var z,V,K,Q=(_.collapsedHeight||0)+"px",U={display:"0px"===Q?"none":"block",height:Q,overflow:"hidden"},W=(0,i.useState)(F?{}:U),J=W[0],X=W[1],$=function(e){(0,k.flushSync)((function(){X(e)}))},ee=function(e){$((function(n){return Z({},n,e)}))};function ne(e){if(N)return{};var n=s||function(e){if(!e||"string"==typeof e)return 0;var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(e);return{transition:"height "+n+"ms "+r}}z=function(){F?requestAnimationFrame((function(){f(),ee(Z({},d,{willChange:"height",display:"block",overflow:"hidden"})),requestAnimationFrame((function(){var e=E(H);ee(Z({},ne(e),{height:e}))}))})):requestAnimationFrame((function(){v();var e=E(H);ee(Z({},o,ne(e),{willChange:"height",height:e})),requestAnimationFrame((function(){ee({height:Q,overflow:"hidden"})}))}))},V=[F,Q],K=(0,i.useRef)(!0),(0,i.useEffect)((function(){if(!K.current)return z();K.current=!1}),V);var te=function(e){if(e.target===H.current&&"height"===e.propertyName)if(F){var n=E(H);n===J.height?$({}):ee({height:n}),p()}else J.height===Q&&($(U),g())};return{getToggleProps:function(e){var n=void 0===e?{}:e,t=n.disabled,s=void 0!==t&&t,l=n.onClick,r=void 0===l?A:l,i=S(n,M);return Z({type:"button",role:"button",id:"react-collapsed-toggle-"+G,"aria-controls":"react-collapsed-panel-"+G,"aria-expanded":F,tabIndex:0,disabled:s},i,{onClick:s?A:I(r,(function(){return L((function(e){return!e}))}))})},getCollapseProps:function(e){var n,t=void 0===e?{}:e,s=t.style,l=void 0===s?{}:s,r=t.onTransitionEnd,i=void 0===r?A:r,a=t.refKey,o=void 0===a?"ref":a,c=S(t,q);return Z({id:"react-collapsed-panel-"+G,"aria-hidden":!F},c,((n={})[o]=function(){var e=[].slice.call(arguments);return e.every((function(e){return null==e}))?null:function(n){e.forEach((function(e){O(e,n)}))}}(H,c[o]),n.onTransitionEnd=I(te,i),n.style=Z({boxSizing:"border-box"},l,J),n))},isExpanded:F,setExpanded:L}}(),r=l.getCollapseProps,a=l.getToggleProps,o=l.isExpanded;return(0,f.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,f.jsxs)("div",(0,N.Z)((0,N.Z)({className:"flex flex-row border-b bg-primary text-white rounded-lg py-3 px-4 justify-between w-full items-center"},a()),{},{children:[(0,f.jsx)("span",{className:"w-[50%] truncate",children:null===s||void 0===s||null===(n=s.topic)||void 0===n?void 0:n.topicName}),(0,f.jsxs)("div",{className:"flex flex-row gap-5 items-center",children:[(null===s||void 0===s?void 0:s.averageScore)&&(0,f.jsxs)("span",{className:"text-sm",children:["Average Score : ",s.averageScore,".pt"]}),(null===s||void 0===s?void 0:s.isPassed)&&(0,f.jsx)("span",{className:"text-sm bg-green-400 px-3 rounded-lg py-1 text-white",children:"Passed"}),(0,f.jsx)("i",{className:"fa-solid fa-chevron-up pt-1 text-xs duration-500 transition-all ".concat(o?" rotate-180 ":""," ")})]})]})),(0,f.jsx)("div",(0,N.Z)((0,N.Z)({},r()),{},{className:"flex flex-col gap-4",children:null===s||void 0===s||null===(t=s.topic)||void 0===t?void 0:t.skill.map((function(e,n){return(0,f.jsx)(L,{skill:e},n)}))}))]})},H=t(7054),z=t(9085),V=(t(5462),(0,u.Z)()),K={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(165, 165, 165, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"8px"}},Q=function(){var e=(0,i.useContext)(H.S),n=(0,i.useState)(0),t=(0,r.Z)(n,2),u=t[0],x=t[1],j=(0,i.useState)("All"),b=(0,r.Z)(j,2),N=b[0],k=b[1],C=(0,i.useState)([]),Z=(0,r.Z)(C,2),S=Z[0],A=Z[1],E=(0,i.useState)([]),I=(0,r.Z)(E,2),O=I[0],R=I[1],T=(0,i.useState)({}),_=(0,r.Z)(T,2),D=_[0],Y=_[1],P=(0,i.useState)(!1),M=(0,r.Z)(P,2),q=M[0],B=M[1],F=(0,i.useState)(""),L=(0,r.Z)(F,2),Q=L[0],U=L[1],W=(0,i.useState)(""),J=(0,r.Z)(W,2),X=J[0],$=J[1],ee=(0,i.useRef)(),ne=(0,a.UO)().classId,te=function(){B(!q)},se=(0,i.useCallback)((0,l.Z)((0,s.Z)().mark((function e(){var n,t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.get(d.T5+"student/class/".concat(ne));case 3:t=e.sent,R(t.data),(null===(n=t.data)||void 0===n?void 0:n.length)>0&&Y(t.data[0]),A(t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[ne]),le=function(e){"All"===e&&A(O),"Good"===e&&A(O.filter((function(e){return(null===e||void 0===e?void 0:e.averageScore)>50}))),"Below Average"===e&&A(O.filter((function(e){return(null===e||void 0===e?void 0:e.averageScore)<50})))},re=function(){var e=(0,l.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.post(d.T5+"student/class/".concat(ne),{studentEmail:ee.current.value});case 3:if(n=e.sent,U(n.data.text),$(n.data.message),"Ok"!==n.data.text){e.next=10;break}return e.next=9,V.post(d.T5+"notification-room",{userEmail:ee.current.value});case 9:te();case 10:(0,z.Am)("Added success"),se(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),(0,z.Am)("Add failed"),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){se()}),[se]),(0,i.useEffect)((function(){x(null===D||void 0===D?void 0:D.averageScore),e.setStudentInfo(D)}),[D,e]),(0,f.jsxs)("div",{className:"flex flex-row h-screen",children:[(0,f.jsxs)("div",{className:"w-[40%] flex flex-col px-10 py-5 gap-6",children:[(0,f.jsxs)("div",{className:"flex flex-row justify-between items-center px-4",children:[(0,f.jsx)("span",{className:"text-2xl font-medium",children:"Students"}),(0,f.jsx)("input",{className:"outline-none rounded-lg text-base px-4 py-2 drop-shadow-md focus:drop-shadow-lg transition-all",placeholder:"Search"})]}),(0,f.jsxs)("div",{className:"flex flex-row justify-between items-center pl-6 pr-4 text-lg",children:[(0,f.jsxs)("div",{className:"flex flex-row h-[30px] gap-5 items-center",children:[(0,f.jsx)("span",{onClick:function(){k("All"),le("All")},className:"cursor-pointer transition-all ".concat("All"===N?"font-medium ":"text-base"),children:"All"}),(0,f.jsx)("span",{onClick:function(){k("Good"),le("Good")},className:"cursor-pointer transition-all ".concat("Good"===N?"font-medium ":"text-base"),children:"Good"}),(0,f.jsx)("span",{onClick:function(){k("Below Average"),le("Below Average")},className:"cursor-pointer transition-all ".concat("Below Average"===N?"font-medium ":"text-base"),children:"Below Average"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(c.Z,{className:"text-xs border-none",onClick:te,children:"Add a student"}),(0,f.jsx)(y(),{isOpen:q,onRequestClose:te,style:K,ariaHideApp:!1,children:(0,f.jsxs)("div",{className:"w-[500px] h-[200px] flex flex-col relative",children:[(0,f.jsx)("div",{className:"absolute text-xl cursor-pointer translate-x-[490px] -translate-y-[10px]",onClick:te,children:(0,f.jsx)("i",{className:"fas fa-times text-gray-700"})}),(0,f.jsxs)("div",{className:"flex flex-col justify-between gap-5 h-full",children:[(0,f.jsx)("div",{children:(0,f.jsx)("span",{className:"text-2xl font-medium",children:"Add a student"})}),(0,f.jsxs)("div",{className:"flex flex-col gap-3",children:["No ok"===Q&&(0,f.jsx)("span",{className:"text-red-500",children:X}),(0,f.jsx)("input",{ref:ee,type:"text",placeholder:"Type in student email",className:"w-full outline-none border transition-all focus:border-primary rounded p-2"})]}),(0,f.jsx)("div",{className:"flex flex-row-reverse",children:(0,f.jsx)(c.Z,{className:"border-none",onClick:re,children:"Add"})})]})]})})]})]}),(0,f.jsx)("div",{className:"flex flex-col gap-7 px-4 pb-4 overflow-auto scroll-smooth",children:S.map((function(e,n){return(0,f.jsx)(p,{student:e,setStudentInfo:Y,onGetStudentOfClass:se},n)}))})]}),(0,f.jsx)("div",{className:"w-[60%] bg-white py-5 px-10 overflow-y-auto",children:(0,f.jsxs)("div",{className:"flex flex-col gap-5 justify-center items-center",children:[(0,f.jsx)("img",{src:"https://img.freepik.com/premium-vector/students-classroom-teacher-near-blackboard-auditorium-teaches-maths-lesson-children-study-subject-kids-group-studying-elementary-primary-school-class-interior-cartoon-vector-flat-concept_176411-2393.jpg?w=2000",alt:"",className:"w-[200px] h-[200px] rounded-full border-4 border-white shadow-2xl mb-5"}),(0,f.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,f.jsx)("span",{className:"font-bold text-2xl my-3",children:null===D||void 0===D?void 0:D.fullName}),(0,f.jsxs)("span",{className:"text-gray-500 text-sm",children:["Date of birth :"," ",w()(null===D||void 0===D?void 0:D.dateOfBirth).format("DD/MM/YYYY")]})]}),(0,f.jsx)("div",{className:"flex flex-col z-0 justify-center items-center select-none w-[750px]",children:(0,f.jsxs)(v.tq,{navigation:!0,modules:[g.W_],className:"mySwiper w-[100%] justify-center items-center",children:[(0,f.jsx)(v.o5,{children:(0,f.jsx)("div",{className:"h-[200px] w-[200px] pt-5 font-opensan",children:(0,f.jsx)(m.Z,{value:u,circleRatio:.75,initialAnimation:!0,styles:(0,o.y3)({pathColor:"#5199ad",rotation:.625,trailColor:"#eee"}),children:(0,f.jsxs)("div",{className:"flex flex-col items-center justify-center text-primary",children:[(0,f.jsx)("span",{className:"font-semibold text-4xl",children:u}),(0,f.jsx)("span",{className:"font-semibold text-sm",children:"Average Score"})]})})})}),(0,f.jsx)(v.o5,{children:(0,f.jsxs)("div",{className:"flex flex-col",children:[(0,f.jsx)("div",{className:"h-[160px] w-[200px] bg-cover",style:{backgroundImage:"url('"+h+"')"}}),(0,f.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,f.jsx)("span",{className:"text-primary text-2xl",children:"56"})," Topics completed"]})]})})]})}),(0,f.jsx)("div",{className:"flex flex-col gap-7 w-full",children:(0,f.jsxs)("div",{className:"flex flex-col gap-3 w-full",children:[(0,f.jsx)("span",{className:"text-2xl font-medium text-primary select-none",children:"Topics"}),(0,f.jsx)("div",{className:"flex flex-col gap-5",children:D&&(null===D||void 0===D?void 0:D.studentTopic)&&(null===D||void 0===D?void 0:D.studentTopic.map((function(e,n){return(0,f.jsx)(G,{topicInfo:e},n)})))})]})})]})})]})}},5462:function(){},4432:function(){},7247:function(e,n,t){e.exports=t.p+"static/media/achievement.3f091fde55968f39c7ce.png"}}]);
//# sourceMappingURL=786.8178cd67.chunk.js.map