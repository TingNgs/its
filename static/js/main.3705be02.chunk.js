(this.webpackJsonpits=this.webpackJsonpits||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/locked_project.cdd8dc1e.svg"},24:function(e,t,a){e.exports=a.p+"static/media/project.54e467ef.svg"},40:function(e,t,a){e.exports=a.p+"static/media/add.151f63a5.svg"},42:function(e){e.exports=JSON.parse('{"a":"0.1.3"}')},45:function(e,t,a){e.exports=a(96)},50:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),i=(a(50),a(4)),s=a(14),l=a(2),u=a(3),m=(a(55),function(e){var t=e.type,a=e.name,n=e.onChange,c=e.value,o=e.placeholder,i=e.onblur,s=e.alertMessage;return r.a.createElement("div",null,r.a.createElement("input",{className:"text_input w-full border-b-2",type:t,name:a,onChange:n,value:c,placeholder:o,onBlur:i}),r.a.createElement("div",{className:"text_input_alert text-14 text-red-600"},s))}),p="https://its-api.herokuapp.com",d="We don't recognize this email, please sign up to get started",f="Login fail. Please try again",b="Register fail. Please try again",j="This email address is already in use",h="This username is already in use",v="Something when wrong. Please try again later.",E="Project name repeated.",g="404 NOT FOUND",y=["s1","s2","s3","s4","s5"],O=["se1","se2","se3","se4","se5"],w=["p1","p2","p3","p4","p5"],I="text_alert",P="text",_="textarea",S="radio",N="select",T=(a(56),function(e){var t=e.handleInput,a=e.inputList,n=e.handleInputOnblur;return r.a.createElement(r.a.Fragment,null,a.map((function(e){return r.a.createElement(r.a.Fragment,{key:"formInput".concat(e.name)},e.title?r.a.createElement("div",{className:"formInput_title font-semibold"},e.title):null,e.inputType===I?r.a.createElement(m,{name:e.name,type:e.type,onChange:t,value:e.value,placeholder:e.placeholder,alertMessage:e.alertMessage,onblur:n}):e.inputType===P?r.a.createElement("input",{className:"formInput_text w-full",name:e.name,type:e.type,onChange:t,value:e.value,placeholder:e.placeholder,onBlur:n}):e.inputType===_?r.a.createElement("textarea",{className:"formInput_textarea w-full",name:e.name,onChange:t,value:e.value,placeholder:e.placeholder}):e.inputType===S?r.a.createElement("div",{className:"formInput_radio_container flex flex-wrap"},e.option.map((function(a,n){var c=n===parseInt(e.value);return r.a.createElement("div",{key:"formInput_radio".concat(a).concat(n),className:"formInput_radio_layout flex relative"},r.a.createElement("div",{className:"formInput_radio  rounded-full border-main border-solid ".concat(c?"border-5 bg-white":"border-2")},r.a.createElement("input",{className:"absolute top-0 left-0 w-full h-full opacity-0",type:"radio",name:e.name,value:n,checked:c,onChange:t})),a)})),r.a.createElement("br",null)):e.inputType===N?r.a.createElement("select",{name:e.name,onChange:t,value:e.value},e.option.map((function(t,a){return r.a.createElement("option",{value:a,key:"".concat(e.name,"_").concat(a,"_").concat(t)},t)}))):"")})))}),x=a(15),D=a.n(x),C=a(17),L=a(26),k=a.n(L);k.a.defaults.headers.post["Content-Type"]="application/json";var F={},A=k.a.create({timeout:5e3,onUploadProgress:function(e){document.body.style.cursor=e.loaded===e.total?"default":"progress"}});F.fire=function(){var e=Object(C.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A.request(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var R=F,U={getMyProfile:function(){var e="".concat(p,"/profile/me?sessionId=").concat(localStorage.getItem("sessionId"),"&profileId=").concat(localStorage.getItem("profileId"));return R.fire({url:e,method:"GET"})},getProfileById:function(e){var t="".concat(p,"/profile?profileId=").concat(e);return R.fire({url:t,method:"GET"})}},M=U,B="Auth/AUTH_SUCCESS",H="Auth/AUTH_LOGOUT",J=function(e){return function(t){var a={username:e.username};e.sessionId&&localStorage.setItem("sessionId",e.sessionId),(0===e.profileId||e.profileId)&&localStorage.setItem("profileId",e.profileId),t({type:B,payload:a})}},q=function(){return function(e){localStorage.removeItem("sessionId"),localStorage.removeItem("profileId"),e({type:H})}},W={register:function(e){var t="".concat(p,"/session");return R.fire({url:t,method:"POST",data:e})},login:function(e){var t="".concat(p,"/session/login");return R.fire({url:t,method:"POST",data:e})},logout:function(){var e="".concat(p,"/session/logout?sessionId=").concat(localStorage.getItem("sessionId"));return R.fire({url:e,method:"DELETE"})},verifyEmail:function(e){var t="".concat(p,"/session/verify/email?email=").concat(e);return R.fire({url:t,method:"GET"})},verifyUsername:function(e){var t="".concat(p,"/session/verify/username?username=").concat(e);return R.fire({url:t,method:"GET"})}},G=W,Y="/login",V="/register",$="/dashboard",z="/project",K="/issue",Q="/setting",X="/p/:user/:project",Z=(a(75),Object(s.g)((function(e){var t=Object(u.b)(),a=Object(u.c)((function(e){return e.AuthReducer})).username;return r.a.createElement("div",{className:"header flex justify-between items-center bg-blue-500 sticky top-0"},r.a.createElement("div",{className:"text-28"},r.a.createElement(i.b,{to:$},"ITS")),r.a.createElement("div",{className:"header_link_container flex text-16"},r.a.createElement("div",{className:"header_link"},"Hi ".concat(a)),r.a.createElement("div",{className:"header_link cursor-pointer",onClick:function(){G.logout(),q()(t),e.history.push("/login")}},"Logout")))}))),ee=[{name:"Dashboard",path:$},{name:"Projects",path:z},{name:"Issue",path:K}],te=(a(77),function(e){return r.a.createElement("div",{className:"nav_sidebar bg-333"},r.a.createElement("div",{className:"nav_sidebar_container fixed flex flex-col"},ee.map((function(e){return r.a.createElement(i.b,{key:"sliderBar_".concat(e.name),className:"nav_sidebar_link text-white font-bold",to:e.path},e.name)}))))}),ae=Object(s.g)((function(e){var t=e.isLogined,a=e.history,c=e.children,o=Object(u.b)();return Object(n.useEffect)((function(){if(t){if(!localStorage.getItem("sessionId"))return q()(o),void a.push("/login");M.getMyProfile().then((function(e){J(e.data)(o)}),(function(){q()(o),a.push("/login")}))}else if(localStorage.getItem("sessionId"))return void a.push("/dashboard")}),[]),r.a.createElement("div",{className:"layout min-h-screen flex flex-col"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null),r.a.createElement("div",{className:"flex flex-grow"},r.a.createElement(te,null),c)):c)})),ne=(a(78),function(e){var t=e.title,a=e.children,n=e.linkTo,c=e.link,o=e.buttonEnable,s=e.handleSubmit,l=e.submitButtom;return r.a.createElement(ae,{isLogined:!1},r.a.createElement("div",{className:"auth_layout text-18 flex justify-center items-center w-full h-full min-h-screen bg-blue-400"},r.a.createElement("div",{className:"auth_form mx-auto w-full bg-white rounded"},r.a.createElement("div",{className:"auth_form_title text-blue-600 text-28 inline-block"},t),a,r.a.createElement(i.b,{className:"auth_bottom_link text-blue-600 text-14 block",to:n},c),r.a.createElement("span",{className:"main_btn btn-active btn-sm inline-block".concat(o?"":" disable"),onClick:s},l))))}),re=a(20),ce=a.n(re),oe=Object(s.g)((function(e){var t=Object(u.b)(),a=Object(n.useState)(""),c=Object(l.a)(a,2),o=c[0],i=c[1],s=Object(n.useState)(""),m=Object(l.a)(s,2),p=m[0],b=m[1],j=Object(n.useState)(""),h=Object(l.a)(j,2),v=h[0],E=h[1],g=Object(n.useState)(""),y=Object(l.a)(g,2),O=y[0],w=y[1],P=[{name:"email",type:"text",value:o,placeholder:"Email",alertMessage:p,inputType:I},{name:"password",type:"password",value:v,placeholder:"Password",alertMessage:O,inputType:I}];return r.a.createElement(ne,{title:"Login",link:"Don't have an account? Sign up now!",linkTo:V,submitButtom:"Login",handleSubmit:function(a){G.login({email:o,password:ce()(v)}).then((function(a){var n=a.data;J(n)(t),e.history.push("/dashboard")}),(function(e){switch(e.response.status){case 401:w(f),b("");break;case 404:w(""),b(d);break;default:w(f),b("")}}))},buttonEnable:o&&v},r.a.createElement(T,{inputList:P,handleInput:function(e){var t=e.target.name,a=e.target.value;switch(t){case"email":i(a);break;case"password":E(a)}},handleInputOnblur:function(e){}}))})),ie=Object(s.g)((function(e){var t=Object(u.b)(),a=Object(n.useState)(""),c=Object(l.a)(a,2),o=c[0],i=c[1],s=Object(n.useState)(""),m=Object(l.a)(s,2),p=m[0],d=m[1],f=Object(n.useState)(""),v=Object(l.a)(f,2),E=v[0],g=v[1],y=Object(n.useState)(""),O=Object(l.a)(y,2),w=O[0],P=(O[1],Object(n.useState)("")),_=Object(l.a)(P,2),S=_[0],N=_[1],x=Object(n.useState)(""),L=Object(l.a)(x,2),k=L[0],F=(L[1],Object(n.useState)("")),A=Object(l.a)(F,2),R=A[0],U=A[1],M=Object(n.useState)(""),B=Object(l.a)(M,2),H=B[0],q=B[1],W=function(){return o?G.verifyEmail(o).then((function(){return d(j),!1}),(function(){return d(""),!0})):(d(""),!1)},V=function(){return R?G.verifyUsername(R).then((function(){return q(h),!1}),(function(){return q(""),!0})):(q(""),!1)},$=function(){var e=Object(C.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:if(e.t0=e.sent,!e.t0){e.next=7;break}return e.next=6,V();case 6:e.t0=e.sent;case 7:if(!e.t0){e.next=9;break}z();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){G.register({email:o,password:ce()(E),username:R}).then((function(a){var n=a.data;J(n)(t),e.history.push("/dashboard")}),(function(e){q(b)}))},K=function(){var e=Object(C.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.name,e.t0=a,e.next="email"===e.t0?4:"username"===e.t0?6:8;break;case 4:return W(),e.abrupt("break",9);case 6:return V(),e.abrupt("break",9);case 8:return e.abrupt("break",9);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=[{name:"email",type:"text",value:o,placeholder:"Email",alertMessage:p,inputType:I},{name:"password",type:"password",value:E,placeholder:"Password",alertMessage:w,inputType:I},{name:"confirm_username",type:"password",value:S,placeholder:"Confirm passowrd",alertMessage:k,inputType:I},{name:"username",type:"text",value:R,placeholder:"Username",alertMessage:H,inputType:I}];return r.a.createElement(ne,{title:"Register",link:"Already have an account? Log in now!",linkTo:Y,submitButtom:"Register",handleSubmit:$,buttonEnable:o&&E&&E===S&&R},r.a.createElement(T,{inputList:Q,handleInput:function(e){var t=e.target.name,a=e.target.value;switch(t){case"email":i(a);break;case"password":g(a);break;case"confirm_username":N(a);break;case"username":U(a)}},handleInputOnblur:K}))})),se=function(){return r.a.createElement(ae,{isLogined:!0},r.a.createElement("div",{className:"w-full"},' "LOGIN_SUCCESS"'))},le=(a(81),a(40)),ue=a.n(le),me=function(e){var t=e.action,a=e.wording;return r.a.createElement("div",{className:"addButton_container main_btn btn-sm btn-active flex",onClick:t},r.a.createElement("img",{className:"addButton_img h-full",src:ue.a}),a)},pe=(a(82),function(){return r.a.createElement("div",{className:"loadingSpinner_container"},r.a.createElement("div",{className:"loadingSpinner"}),r.a.createElement("div",{className:"loadingSpinner"}),r.a.createElement("div",{className:"loadingSpinner"}))}),de=(a(83),function(e){var t=e.handleLeftOption,a=e.handleRightOption,n=e.leftOption,c=e.rightOption,o=e.isActive;return r.a.createElement("div",{className:"form_footer_btn w-full flex justify-between"},r.a.createElement("span",{className:"main_btn btn-cancel",onClick:t},n||"Cancel"),r.a.createElement("span",{className:"main_btn btn-active".concat(o?"":" disable"),onClick:a},c))}),fe="Add New Project",be="name",je="Issue title",he="description",ve="Description",Ee="state",ge="Issue state",ye="severity",Oe="Issue severity",we="priority",Ie="Issue priority",Pe="isReproducible",_e="Is Reproducible",Se="Yes",Ne="No",Te="Add",xe=(a(84),function(e){var t=e.handleCancel,a=e.handleSubmit,c=e.errorMsg,o=Object(n.useState)(""),i=Object(l.a)(o,2),s=i[0],u=i[1],m=Object(n.useState)(""),p=Object(l.a)(m,2),d=p[0],f=p[1],b=Object(n.useState)(0),j=Object(l.a)(b,2),h=j[0],v=j[1],E=Object(n.useState)(0),g=Object(l.a)(E,2),I=g[0],x=g[1],D=Object(n.useState)(0),C=Object(l.a)(D,2),L=C[0],k=C[1],F=Object(n.useState)(0),A=Object(l.a)(F,2),R=A[0],U=A[1],M=[{name:be,type:"text",value:s,placeholder:je,title:je,inputType:P},{name:he,title:ve,value:d,placeholder:ve,inputType:_},{name:Ee,title:ge,value:h,option:y,inputType:N},{name:ye,title:Oe,value:I,option:O,inputType:N},{name:we,title:Ie,value:L,option:w,inputType:N},{name:Pe,title:_e,value:R,option:[Se,Ne],inputType:S}],B=s.length>0&&d.length>0;return r.a.createElement("div",{className:"issueForm_container bg-white rounded-4 max-h-full w-full overflow-y-auto text-18"},r.a.createElement("div",{className:"issueForm_title text-20 font-bold"},fe),r.a.createElement(T,{inputList:M,handleInput:function(e){var t=e.target.name,a=e.target.value;switch(t){case be:u(a);break;case he:f(a);break;case Ee:v(a);break;case ye:x(a);break;case we:k(a);break;case Pe:U(a)}}}),r.a.createElement(de,{handleLeftOption:t,handleRightOption:function(){a({name:s,description:d,state:h,severity:I,priority:L,isReproducible:0===R})},rightOption:Te,isActive:B}),r.a.createElement("div",{className:"text-red-600"},c))}),De=(a(85),function(e){var t=e.children;return r.a.createElement("div",{className:"popUp_container fixed inset-0 bg-popUp"},r.a.createElement("div",{className:"popUp w-full h-full relative flex justify-center items-center"},t))}),Ce="Project_DETAIL/FETCH_PROJECT_DETAIL",Le="Project_DETAIL/FETCH_PROJECT_DETAIL_SUCCESS",ke="Project_DETAIL/FETCH_PROJECT_DETAIL_FAIL",Fe="Project_DETAIL/TOGGLE_NEW_ISSUE_FORM",Ae="Project_DETAIL/ADD_NEW_PROJECT",Re="Project_DETAIL/ADD_NEW_ISSUE_SUCCESS",Ue="Project_DETAIL/ADD_NEW_ISSUE_FAIL",Me="Project_DETAIL/FETCH_PROJECT_ISSUE",Be="Project_DETAIL/FETCH_PROJECT_ISSUE_SUCCESS",He="Project_DETAIL/FETCH_PROJECT_ISSUE_FAIL",Je="Project_DETAIL/FETCH_PROJECT_ISSUE_BOTTOM",qe=" Project name : ",We="Project owner : ",Ge="Description : ",Ye=" Create At : ",Ve="Active Issue : ",$e="Closed Issue : ",ze="Member : ",Ke="Tags : ",Qe="Report A Issue",Xe="Issue List",Ze=[{query:null,name:"Detail"},{query:"issue",name:"Issue"},{query:"tag",name:"Tag"},{query:"member",name:"Member"}],et=function(e){return new Date(e).toLocaleString()},tt=function(e){var t=e.projectDetail,a=t.create_time,n=t.description,c=t.finish_issue_count,o=(t.isPrivate,t.issue_count),i=t.member_count,s=(t.name,t.owner),l=t.tag_count;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"projectDetail_subtitle text-18 font-semibold flex"},We,s),r.a.createElement("div",{className:"projectDetail_subtitle text-18 font-semibold flex"},Ge,n),r.a.createElement("div",{className:"projectDetail_subtitle text-18 font-semibold flex"},Ye,et(a)),r.a.createElement("div",{className:"projectDetail_subtitle text-18 font-semibold flex"},Ve,o),r.a.createElement("div",{className:"projectDetail_subtitle text-18 font-semibold flex"},$e,c),r.a.createElement("div",{className:"projectDetail_subtitle text-18 font-semibold flex"},ze,i),r.a.createElement("div",{className:"projectDetail_subtitle text-18 font-semibold flex"},Ke,l))},at=a(41),nt=(a(86),function(e){e.id,e.ReportUser;var t=e.create_time,a=(e.description,e.isReproducible,e.name),n=e.priority,c=(e.projectId,e.severity),o=e.state;return r.a.createElement("div",{className:"IssueCard w-full"},r.a.createElement("div",{className:"IssueCard_title text-20"},a),r.a.createElement("div",null,"state : ",o,", priority:",n,", severity:",c),r.a.createElement("div",null,"create at : ",et(t)))}),rt={addNewProject:function(e){var t="".concat(p,"/project?sessionId=").concat(localStorage.getItem("sessionId"));return R.fire({url:t,method:"POST",data:e})},getProject:function(e){var t="".concat(p,"/project/get?sessionId=").concat(localStorage.getItem("sessionId"));return R.fire({url:t,method:"POST",data:e})},getProjectDetail:function(e){var t="".concat(p,"/project/detail?sessionId=").concat(localStorage.getItem("sessionId"));return R.fire({url:t,method:"POST",data:e})}},ct=rt,ot={addNewIssue:function(e){var t="".concat(p,"/issue?sessionId=").concat(localStorage.getItem("sessionId"));return R.fire({url:t,method:"POST",data:e})},getIssueByProjectId:function(e){var t="".concat(p,"/issue/project?sessionId=").concat(localStorage.getItem("sessionId"));return R.fire({url:t,method:"POST",data:e})}},it=ot,st=function(e){Object(at.a)(e);var t=Object(u.b)(),a=Object(u.c)((function(e){return e.ProjectDetailReducer})),c=a.projectDetail,o=a.projectIssueList,i=a.isFetchingProjectIssue,s=a.isProjectIssueFetchBottom,l=a.projectIssueTimestamp,m=function(){var e,a;(e=c.id,a=l,function(t){t({type:Me});var n={timestamp:a,projectId:e,limit:15};it.getIssueByProjectId(n).then((function(e){e.data.length?t({type:Be,payload:e.data}):t({type:Je,payload:e.data})}),(function(e){t({type:He})}))})(t)},p=function(){window.innerHeight+Math.ceil(window.scrollY)>=document.body.offsetHeight&&!i&&!s&&m()};return Object(n.useEffect)((function(){return window.addEventListener("scroll",p),function(){window.removeEventListener("scroll",p)}})),Object(n.useEffect)((function(){null===l&&m()}),[]),r.a.createElement("div",{className:"IssueTab_container w-full"},r.a.createElement("div",{className:"IssueTab_title text-20 font-semibold"},Xe),r.a.createElement("div",{className:"IssueTab_Issues_container"},o.map((function(e){return r.a.createElement(nt,{key:"pit".concat(e.id),id:e.id,ReportUser:e.ReportUser,create_time:e.create_time,description:e.description,isReproducible:e.isReproducible,name:e.name,priority:e.priority,projectId:e.projectId,severity:e.severity,state:e.state})})),i?r.a.createElement(pe,null):null,s?"You already hit the bottom !":null))},lt=a(23),ut=a.n(lt),mt=a(24),pt=a.n(mt),dt=(a(87),function(){var e=Object(s.f)(),t=e.user,a=e.project,c=new URLSearchParams(Object(s.e)().search).get("tab"),o=Object(u.b)(),l=Object(u.c)((function(e){return e.ProjectDetailReducer})),m=l.isFetchingProjectDetail,p=l.projectDetail,d=l.showNewIssueForm,f=l.newIssueErrorMsg,b=l.isAddingIssue,j=l.fetchProjectDetailError,h=null!==p;Object(n.useEffect)((function(){p&&t===p.owner&&a===p.name?h=!1:function(e,t){return function(a){a({type:Ce}),ct.getProjectDetail({user:e,project:t}).then((function(e){a({type:Le,payload:e.data})}),(function(e){var t=e.response.status;a({type:ke,payload:404===t?g:v})}))}}(t,a)(o)}),[t,a]);var E=function(){!function(e){e({type:Fe})}(o)};return r.a.createElement(ae,{isLogined:!0},r.a.createElement("div",{className:"projectDetail w-full"},j||r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"projectDetail_header flex justify-between flex-row items-center"},r.a.createElement("div",{className:"projectDetail_title text-20 font-semibold flex"},qe,a),r.a.createElement(me,{action:E,wording:Qe})),r.a.createElement("div",{className:"projectDetail_tab_container flex justify-between flex-row items-center text-18 text-center"},Ze.map((function(e){return r.a.createElement(i.b,{to:"/p/".concat(t,"/").concat(a).concat(e.query?"?tab=".concat(e.query):""),className:"projectDetail_tab flex-grow".concat(c===e.query?" bg-main text-white":""),key:"pd_tab".concat(e.name)},r.a.createElement("div",null,e.name))}))),m||!h?r.a.createElement(pe,null):function(){switch(c){case Ze[1].query:return r.a.createElement(st,null);case Ze[2].query:case Ze[3].query:return"";default:return r.a.createElement(tt,{projectDetail:p})}}())),d?r.a.createElement(De,null,r.a.createElement(xe,{handleCancel:b?null:E,handleSubmit:function(e){e.projectId=p.id,function(e){return function(t){t({type:Ae}),it.addNewIssue(e).then((function(e){t({type:Re,payload:e.data})}),(function(e){t({type:Ue,payload:v})}))}}(e)(o)},errorMsg:f})):null)}),ft="Add New Project",bt="name",jt="Project Name",ht="description",vt="Description",Et="isPrivate",gt="Is Private ?",yt="Private",Ot="Public",wt="Add",It=(a(88),function(e){var t=e.handleCancel,a=e.handleSubmit,c=e.errorMsg,o=Object(n.useState)(""),i=Object(l.a)(o,2),s=i[0],u=i[1],m=Object(n.useState)(""),p=Object(l.a)(m,2),d=p[0],f=p[1],b=Object(n.useState)(0),j=Object(l.a)(b,2),h=j[0],v=j[1],E=[{name:bt,type:"text",value:s,placeholder:jt,title:jt,inputType:P},{name:ht,title:vt,value:d,placeholder:vt,inputType:_},{name:Et,title:gt,value:h,option:[Ot,yt],inputType:S}];return r.a.createElement("div",{className:"projectForm_container bg-white rounded-4 max-h-full w-full overflow-y-auto text-18"},r.a.createElement("div",{className:"projectForm_title text-20 font-bold"},ft),r.a.createElement(T,{inputList:E,handleInput:function(e){var t=e.target.name,a=e.target.value;switch(t){case bt:u(a);break;case ht:f(a);break;case Et:v(a)}}}),r.a.createElement(de,{handleLeftOption:t,handleRightOption:function(){a({name:s,description:d,isPrivate:1===parseInt(h)})},rightOption:wt,isActive:s.length>0}),r.a.createElement("div",{className:"text-red-600"},c))}),Pt=" Project : ",_t=" Create At : ",St=(a(89),function(e){e.id;var t,a,n=e.name,c=(e.description,e.create_time),o=e.isPrivate,s=e.owner;return r.a.createElement("div",{className:"projectCard w-full"},r.a.createElement("div",{className:"projectCard_title text-20 font-semibold flex"},r.a.createElement("img",{className:"projectCard_icon",src:o?ut.a:pt.a}),r.a.createElement(i.b,{to:(t=s,a=n,"/p/".concat(t,"/").concat(a))},"".concat(Pt).concat(s,"/").concat(n))),r.a.createElement("div",{className:"projectCard_createAt text-16"},"".concat(_t).concat(et(c))))}),Nt="Projects/FETCH_PROJECTS",Tt="Projects/FETCH_PROJECTS_SUCCESS",xt="Projects/FETCH_PROJECTS_BOTTOM",Dt="Projects/TOGGLE_NEW_PROJECT_FORM",Ct="Projects/ADD_NEW_PROJECT",Lt="Projects/ADD_NEW_PROJECT_SUCCESS",kt="Projects/ADD_NEW_PROJECT_FAIL",Ft=function(e){return function(t){t({type:Nt});var a={timestamp:e,user_id:localStorage.getItem("profileId"),limit:15,isOwner:!1};ct.getProject(a).then((function(e){var a=e.data;a.length?t({type:Tt,payload:a}):t({type:xt,payload:a})}),(function(e){console.log(e)}))}},At=(a(90),function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.ProjectsReducer})),a=t.projectList,c=t.projectTimestamp,o=t.isFetchingProject,i=t.isProjectFetchBottom,s=t.isAddingProject,l=t.showNewProjectForm,m=t.newProjectErrorMsg;Object(n.useEffect)((function(){null===c&&Ft()(e)}),[]);var p=function(){window.innerHeight+Math.ceil(window.scrollY)>=document.body.offsetHeight&&!o&&!i&&Ft(c)(e)};Object(n.useEffect)((function(){return window.addEventListener("scroll",p),function(){window.removeEventListener("scroll",p)}}));var d=function(){!function(e){e({type:Dt})}(e)};return r.a.createElement(ae,{isLogined:!0},r.a.createElement("div",{className:"project_container w-full"},r.a.createElement("div",{className:"project_header w-full flex justify-between items-center"},r.a.createElement("p",{className:" text-20 font-semibold"},"Project List"),r.a.createElement(me,{action:d,wording:"New Project"})),r.a.createElement("div",{className:"project_list w-full"},a.map((function(e){return r.a.createElement(St,{key:"$projectCard".concat(e.id),id:e.id,name:e.name,description:e.description,create_time:e.create_time,isPrivate:e.isPrivate,owner:e.owner})})),o?r.a.createElement(pe,null):null,i?"You already hit the bottom !":null)),l?r.a.createElement(De,null,r.a.createElement(It,{handleCancel:s?null:d,handleSubmit:function(t){s||function(e){return function(t){t({type:Ct}),ct.addNewProject(e).then((function(e){t({type:Lt,payload:e.data})}),(function(e){var a=e.response.status;t({type:kt,payload:409===a?E:v})}))}}(t)(e)},errorMsg:m})):null)}),Rt="ISSUE/FETCH_ISSUE_SUCCESS",Ut=function(){var e=Object(u.c)((function(e){return e.IssueReducer.issueList})),t=Object(u.b)();return Object(n.useEffect)((function(){!function(e){e({type:Rt,payload:[456]})}(t)}),[]),r.a.createElement(ae,{isLogined:!0},r.a.createElement("div",null,"test issue reducer : ",e," "))},Mt=a(42);a(91);var Bt=function(){return console.log("version "+Mt.a),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/its",REACT_APP_ENV:"prod"})),r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{basename:"/"},r.a.createElement(s.a,{path:Y,component:oe}),r.a.createElement(s.a,{path:V,component:ie}),r.a.createElement(s.a,{path:$,component:se}),r.a.createElement(s.a,{path:z,component:At}),r.a.createElement(s.a,{path:K,component:Ut}),r.a.createElement(s.a,{path:Q,component:se}),r.a.createElement(s.a,{path:X,component:dt}),r.a.createElement(s.a,{path:"/",exact:!0,component:oe})))},Ht=a(13),Jt=a(43),qt=a.n(Jt),Wt=a(44),Gt=a(12);function Yt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Vt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Yt(Object(a),!0).forEach((function(t){Object(Gt.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Yt(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var $t={projectList:[],isFetchingProject:!1,isProjectFetchBottom:!1,projectTimestamp:null,showNewProjectForm:!1,newProjectErrorMsg:null,isAddingProject:!1};function zt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Kt={issueList:[]};function Qt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Xt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Qt(Object(a),!0).forEach((function(t){Object(Gt.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Qt(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Zt={username:""};function ea(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ta(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ea(Object(a),!0).forEach((function(t){Object(Gt.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ea(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var aa={isFetchingProjectDetail:!1,fetchProjectDetailError:null,projectDetail:null,projectIssueList:[],isFetchingProjectIssue:!1,isProjectIssueFetchBottom:!1,projectIssueTimestamp:null,showNewIssueForm:!1,newIssueErrorMsg:null,isAddingIssue:!1};var na=Object(Ht.c)({ProjectsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload,r=e.projectList;switch(a){case Nt:return Vt({},e,{isFetchingProject:!0});case Tt:return Vt({},e,{projectList:r.concat(n),projectTimestamp:n[n.length-1].create_time,isFetchingProject:!1});case xt:return Vt({},e,{isProjectFetchBottom:!0,isFetchingProject:!1});case Dt:return Vt({},e,{showNewProjectForm:!e.showNewProjectForm,newProjectErrorMsg:null});case Ct:return Vt({},e,{isAddingProject:!0});case Lt:return Vt({},e,{isAddingProject:!1,showNewProjectForm:!1,projectList:[n].concat(r)});case kt:return Vt({},e,{isAddingProject:!1,newProjectErrorMsg:n});default:return e}},AuthReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zt,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case B:return Xt({},e,{username:n.username});case H:return Xt({},e,{},Zt);default:return e}},IssueReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Kt,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case Rt:return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?zt(Object(a),!0).forEach((function(t){Object(Gt.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):zt(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{issueList:e.issueList.concat(n)});default:return e}},ProjectDetailReducer:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:aa,a=arguments.length>1?arguments[1]:void 0,n=a.type,r=a.payload;switch(n){case Ce:return ta({},aa,{isFetchingProjectDetail:!0,fetchProjectDetailError:null});case Le:return ta({},t,{isFetchingProjectDetail:!1,projectDetail:r});case ke:return ta({},t,{isFetchingProjectDetail:!1,fetchProjectDetailError:r,projectDetail:{}});case Fe:return ta({},t,{showNewIssueForm:!t.showNewIssueForm,newIssueErrorMsg:null});case Ae:return ta({},t,{isAddingIssue:!0});case Re:return e=ta({},t.projectDetail),r.state<3?e.issue_count+=1:e.finish_issue_count+=1,ta({},t,{isAddingIssue:!1,showNewIssueForm:!1,projectIssueList:[r].concat(t.projectIssueList),projectDetail:e});case Ue:return ta({},t,{isAddingIssue:!1,newIssueErrorMsg:r});case Me:return ta({},t,{isFetchingProjectIssue:!0});case Be:return ta({},t,{isFetchingProjectIssue:!1,projectIssueList:t.projectIssueTimestamp?t.projectIssueList.concat(r):r,projectIssueTimestamp:r[r.length-1].create_time});case He:return ta({},t,{isFetchingProjectIssue:!1,fetchProjectDetailError:r});case Je:return ta({},t,{isProjectIssueFetchBottom:!0,isFetchingProjectIssue:!1});default:return t}}});var ra=Object(Ht.e)(na,function(){var e=[Wt.a,qt.a];return Object(Ht.d)(Ht.a.apply(void 0,e))}());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(u.a,{store:ra},r.a.createElement(Bt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.3705be02.chunk.js.map