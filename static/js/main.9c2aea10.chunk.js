(this.webpackJsonpto_do_list=this.webpackJsonpto_do_list||[]).push([[0],{29:function(e,t,a){e.exports=a(41)},34:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(26),c=a.n(l),r=(a(34),a(21)),s=a(3),o=a(2),d=a(14),m=a.n(d),u=a(17),_=a(4);function p(e){var t=0;return function a(){e.some((function(e){return e.id===t}))&&(t++,a())}(),t}var b={initial:{scaleY:0,opacity:0,x:400},animate:{scaleY:1,opacity:1,x:0},exit:{scaleY:0}},E={animate:{y:0,opacity:1},initial:{y:-100,opacity:0},exit:{scaleY:0}},f={animate:{height:"auto",opacity:1},initial:{height:0,opacity:0},exit:{height:0,opacity:0}},v={animate:{y:0},initial:{y:-100,x:"-50%"},exit:{x:100,opacity:0}},k={animate:{opacity:1,y:0},initial:{opacity:0,y:40},exit:{rotate:40,opacity:0,scale:0}},y={initial:{scaleY:0},animate:{scaleY:1},exit:{scaleY:0}},h={initial:{opacity:0,y:40},animate:{opacity:1,y:0,transition:{staggerChildren:.2}}},O={initial:{opacity:0,y:40},animate:{opacity:1,y:0}},x={visible:{opacity:1,rotateX:0},hidden:{opacity:0,rotateX:180},left:{opacity:.3,scale:0}},N=a(5),T=a(16),j=function(e,t){switch(t.type){case"ADD_TASK":case"ADD_TO_DONE":return[].concat(Object(T.a)(e),[t.payload]);case"DELETE_TASK":return e.filter((function(e){return e.id!==t.payload}));case"ADD_TASK_TO_EDIT":return null===t.payload?Object(N.a)(Object(N.a)({},e),{},{task:[]}):Object(N.a)(Object(N.a)({},e),{},{task:[t.payload]});case"IS_EDITED":return Object(N.a)(Object(N.a)({},e),{},{isEdited:t.payload});case"EDIT_TASK":return t.payload;default:return e}},g=localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")||""):[],D=Object(n.createContext)(g),S=function(e){var t=e.children,a=Object(n.useReducer)(j,g),l=Object(_.a)(a,2),c=l[0],r=l[1];return Object(n.useEffect)((function(){localStorage.setItem("task",JSON.stringify(c))}),[c]),i.a.createElement(D.Provider,{value:{state:c,addTask:function(e){r({type:"ADD_TASK",payload:e})},deleteTask:function(e){r({type:"DELETE_TASK",payload:e})},editTask:function(e){var t=e.title,a=e.description,n=e.id,i=e.date,l=c.map((function(e){return e.id===n?{title:t,description:a,id:n,date:i}:e}));r({type:"EDIT_TASK",payload:l})}}},t)},C=localStorage.getItem("doneTask")?JSON.parse(localStorage.getItem("doneTask")||""):[],A=Object(n.createContext)(C),I=function(e){var t=e.children,a=Object(n.useReducer)(j,C),l=Object(_.a)(a,2),c=l[0],r=l[1];return Object(n.useEffect)((function(){return localStorage.setItem("doneTask",JSON.stringify(c))}),[c]),i.a.createElement(A.Provider,{value:{doneTaskState:c,addToDone:function(e){var t=(new Date).toLocaleString();e.id=p(c),e.doneDate=t,r({type:"ADD_TO_DONE",payload:e})},deleteDoneTask:function(e){r({type:"DELETE_TASK",payload:e})}}},t)},w=a(54),K=a(55),Y=a(56),F=function(){var e=Object(n.useContext)(A),t=e.doneTaskState,a=e.deleteDoneTask,l=Object(n.useContext)(D),c=l.state,r=l.addTask,s=Object(n.useState)(null),d=Object(_.a)(s,2),b=d[0],v=d[1];return t.length?i.a.createElement(o.b.section,{initial:"initial",variants:E,animate:"animate",exit:"exit",className:"done-tasks"},t.map((function(e,t){return i.a.createElement(o.b.article,{className:"done-tasks__box",key:e.id,positionTransition:!0},i.a.createElement("div",{className:"done-tasks__title"},i.a.createElement("div",{className:"title__heading-set"},i.a.createElement("span",{className:"heading-set__index"},t+1,"."),i.a.createElement("p",{className:"heading-set__title"},e.title)),i.a.createElement(o.b.div,{className:"title__btn-set",variants:h,initial:"initial",animate:"animate"},i.a.createElement(o.b.button,{className:"btn-set__btn ",onClick:function(){return a(e.id)},variants:O},i.a.createElement(w.a,null)),i.a.createElement(o.b.button,{className:"btn-set__btn",onClick:Object(u.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e.id);case 2:delete e.doneDate,e.id=p(c),r(e);case 5:case"end":return t.stop()}}),t)}))),variants:O},i.a.createElement(K.a,null)))),i.a.createElement("div",{className:"done-task__more-info"},i.a.createElement(o.a,null,b===e.id&&i.a.createElement(o.b.div,{className:"more-info__details",variants:f,animate:"animate",initial:"initial",exit:"exit",transition:{duration:.2,ease:"linear",type:"tween"}},i.a.createElement("p",{className:"details__description"},e.description),i.a.createElement("div",{className:"details__date"},i.a.createElement("span",null,"Should Have Done: ",e.date),i.a.createElement("span",null,"Finised at: ",e.doneDate)))),i.a.createElement("button",{className:b===e.id?"more-info__expand-more more-info__expand-more--rotate ":"more-info__expand-more ",onClick:function(){if(e.id===b)return v(null);v(e.id)}},i.a.createElement(Y.a,null))))}))):i.a.createElement(o.b.p,{className:"no-match",initial:{opacity:0,y:-20},animate:{opacity:1,y:0}},"No Task Done")},J={task:[],isEdited:!1},L=Object(n.createContext)(J),M=function(e){var t=e.children,a=Object(n.useReducer)(j,J),l=Object(_.a)(a,2),c=l[0],r=l[1];function s(e){r({type:"IS_EDITED",payload:e})}return i.a.createElement(L.Provider,{value:{editedState:c,addTaskToEdit:function(e){if(null===e)return null;c.task.length&&c.task[0].id===e.id&&(e=null,s(!1)),r({type:"ADD_TASK_TO_EDIT",payload:e})},setEditMode:s}},t)},P=function(){var e=Object(n.useContext)(L),t=e.editedState,a=e.setEditMode,l=Object(n.useContext)(D).editTask,c=Object(n.useState)({title:"",description:"",date:"",id:0}),r=Object(_.a)(c,2),s=r[0],d=r[1];return Object(n.useEffect)((function(){if(t.task.length){var e=Object(_.a)(t.task,1)[0],a=e.title,n=e.description,i=e.date,l=e.id;d({title:a,description:n,date:i,id:l})}}),[t]),i.a.createElement(o.b.section,{initial:"hidden",animate:"visible",exit:"left",variants:x,className:"edit-section"},i.a.createElement("form",{action:"#",className:"edit-section__edit-form",onSubmit:function(e){e.preventDefault(),l(s),a(!1)}},i.a.createElement("label",{htmlFor:"edit-title",className:"edit-form__label"},"Edit Title"),i.a.createElement("input",{type:"text",id:"edit-title",name:"edit-title",value:s.title,onChange:function(e){return d(Object(N.a)(Object(N.a)({},s),{},{title:e.target.value}))},className:"edit-form__input"}),i.a.createElement("label",{htmlFor:"edit-desc",className:"edit-form__label"},"Edit Description"),i.a.createElement("input",{type:"text",id:"edit-desc",name:"edit-desc",value:s.description,onChange:function(e){return d(Object(N.a)(Object(N.a)({},s),{},{description:e.target.value}))},className:"edit-form__input"}),i.a.createElement("label",{htmlFor:"edit-date",className:"edit-form__label"},"Edit Date"),i.a.createElement("input",{type:"date",id:"edit-date",name:"edit-date",value:s.date,onChange:function(e){return d(Object(N.a)(Object(N.a)({},s),{},{date:e.target.value}))},className:"edit-form__input"}),i.a.createElement("button",{className:"edit-form__edit-btn",type:"submit"},"Edit")))},R=a(57),B=a(58),X=function(){var e=Object(n.useContext)(D),t=e.state,a=e.deleteTask,l=Object(n.useContext)(A),c=l.addToDone,r=l.doneTaskState,s=Object(n.useContext)(L),d=s.editedState,_=s.addTaskToEdit,b=s.setEditMode;return t.length?i.a.createElement(o.b.section,{className:"current-tasks",variants:y,initial:"initial",animate:"animate",exit:"exit"},t.map((function(e,t){return i.a.createElement(o.b.article,{key:e.id,className:"current-tasks__box",positionTransition:!0},i.a.createElement(o.a,null,d.task.length&&d.task[0].id===e.id&&i.a.createElement(P,null)),i.a.createElement("div",{className:"current-tasks__title-box"},i.a.createElement("span",{className:"title-box__number-task"},t+1,"."),i.a.createElement("h5",{className:"title-box__title"},e.title),i.a.createElement(o.b.div,{className:"title-box__btn-set",variants:h,initial:"initial",animate:"animate"},i.a.createElement(o.b.button,{className:"btn-set__btn",variants:O,onClick:Object(u.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e.id);case 2:e.id=p(r),c(e);case 4:case"end":return t.stop()}}),t)})))},i.a.createElement(R.a,null)),i.a.createElement(o.b.button,{className:d.task.length&&d.task[0].id===e.id?"btn-set__btn btn-set__btn--active":"btn-set__btn",variants:O,onClick:function(){b(!0),_(e)}},i.a.createElement(B.a,null)),i.a.createElement(o.b.button,{variants:O,className:"btn-set__btn",onClick:function(){return a(e.id)}},i.a.createElement(w.a,null)))),i.a.createElement("div",{className:"current-tasks__desc"},i.a.createElement("span",{className:"desc__label"},"Description:"),e.description),i.a.createElement("div",{className:"current-tasks__date"},i.a.createElement("span",{className:"date__label"},"Deadline:"),e.date))}))):i.a.createElement(o.b.p,{className:"no-match",initial:{opacity:0,y:-20},animate:{opacity:1,y:0}},"No Tasks...")},H=a(19),q=function(e){var t=e.newTask,a=[];return t.title||a.push({message:"Title should be filled",id:p(a)}),t.date||a.push({message:"Date should be seted",id:p(a)}),i.a.createElement(o.b.section,{variants:k,animate:"animate",initial:"initial",exit:"exit"},i.a.createElement("ul",{className:"error-box"},a.map((function(e){var t=e.id,a=e.message;return i.a.createElement(o.b.li,{key:t,className:"error-box__error-name",positionTransition:!0},a)}))))};function z(){return i.a.createElement(o.b.section,{className:"success-alert",variants:v,animate:"animate",initial:"initial",exit:"exit"},i.a.createElement("h5",null,"Task has added!"))}var G=[{pathname:"/addtask",text:"Add Task",id:0},{pathname:"/",text:"Your Tasks",id:1},{pathname:"/donetasks",text:"Your Done Tasks",id:2}],Q=[{path:"/addtask",component:function(){var e=Object(n.useContext)(D),t=e.state,a=e.addTask,l=Object(n.useState)({title:"",description:"",date:"",id:0}),c=Object(_.a)(l,2),r=c[0],s=c[1],d=Object(n.useState)(!1),m=Object(_.a)(d,2),u=m[0],E=m[1],f=Object(n.useState)(!1),v=Object(_.a)(f,2),k=v[0],y=v[1],h=Object(n.useState)(!1),O=Object(_.a)(h,2),x=O[0],T=O[1],j=function(){y(!0),setTimeout((function(){return y(!1)}),3e3)},g=function(e){return s(Object(N.a)(Object(N.a)({},r),{},Object(H.a)({},e.target.name,e.target.value)))};return Object(n.useEffect)((function(){x&&(r.title&&r.date?E(!1):E(!0))}),[x,r]),Object(n.useEffect)((function(){return function(){return y(!1)}}),[]),i.a.createElement("section",null,i.a.createElement(o.b.form,{action:"#",className:"form",onSubmit:function(e){return function(e){e.preventDefault(),u||(r.id=p(t),a(r),s({title:"",description:"",date:"",id:0}),j(),T(!1))}(e)},variants:b,initial:"initial",animate:"animate",exit:"exit",transition:{type:"tween"}},i.a.createElement(o.a,null," ",k&&i.a.createElement(z,null)),i.a.createElement(o.a,null,u&&i.a.createElement(q,{newTask:r})),i.a.createElement("label",{htmlFor:"add-task-title",className:"form__add-task-label"},"Task Title"),i.a.createElement("input",{type:"text",className:"form__add-task-input",name:"title",value:r.title,id:"add-task-title",autoComplete:"off",onChange:function(e){return g(e)}}),i.a.createElement("label",{htmlFor:"add-task-desc",className:"form__add-task-label"},"Task Description"),i.a.createElement("textarea",{name:"description",value:r.description,id:"add-task-desc",className:"form__add-task-input form__add-task-input--description",autoComplete:"off",onChange:function(e){return g(e)}}),i.a.createElement("label",{htmlFor:"task-deadline",className:"form__add-task-label"},"Select Deadline"),i.a.createElement("input",{type:"date",name:"date",value:r.date,id:"task-deadline",className:"form__add-task-input",autoComplete:"off",onChange:function(e){return g(e)}}),i.a.createElement("button",{type:"submit",className:"form__add-btn",onClick:function(){return T(!0)}},"Add Task")))},id:0},{path:"/",component:X,id:1},{path:"/donetasks",component:F,id:2}];function U(){return i.a.createElement("header",{className:"header"},i.a.createElement("h1",{className:"header__heading"},"To Do List"))}var V=function(){var e=Object(n.useState)([]),t=Object(_.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(_.a)(c,2),d=o[0],m=o[1],u=Object(_.a)(a,2),p=u[0],b=u[1],E=Object(s.f)();return Object(n.useEffect)((function(){return Q.forEach((function(e,t){e.path===E.pathname&&l([].concat(Object(T.a)(a),[t]))}))}),[d]),a.length>2&&a.shift(),i.a.createElement("nav",{className:"nav"},i.a.createElement("ul",{className:"nav__link-conteiner"},G.map((function(e){return i.a.createElement("li",{className:"nav__item",key:e.id},i.a.createElement(r.b,{exact:!0,to:{pathname:e.pathname,state:e.id},className:"nav__link","data-text":e.text,onClick:function(){return m(!d)}},e.text),i.a.createElement("span",{className:p>b&&b===e.id?"nav__overlay nav__overlay--slide-left":p>b&&p===e.id?"nav__overlay nav__overlay--slide-left-hide":p<b&&b===e.id?"nav__overlay nav__overlay--slide-right":p<b&&p===e.id?"nav__overlay nav__overlay--slide-right-hide":p===e.id&&void 0===b?"nav__overlay nav__overlay--slide-left":"nav__overlay"}))}))))},W=function(){return i.a.createElement(r.a,{basename:"/"},i.a.createElement("main",null,i.a.createElement(U,null),i.a.createElement(V,null),i.a.createElement(S,null,i.a.createElement(I,null,i.a.createElement(s.a,{render:function(e){var t=e.location;return i.a.createElement(o.a,{exitBeforeEnter:!0},i.a.createElement(s.c,{location:t,key:t.pathname},i.a.createElement(M,null,Q.map((function(e){return i.a.createElement(s.a,{key:e.id,exact:!0,component:e.component,path:e.path})})))))}})))))};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(W,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.9c2aea10.chunk.js.map