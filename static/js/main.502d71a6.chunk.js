(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{12:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),o=a.n(r),l=(a(12),a(13),a(14),a(3)),s=a(4),i=[],m=/[a-zA-Z].+/;function u(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(i),o=Object(s.a)(r,2),u=o[0],d=o[1],f=function(e,t){return m.test(a)?e:t};return n.createElement(n.Fragment,null,n.createElement("div",{className:"card my-3"},n.createElement("div",{className:"card-header"},"Todo List"),n.createElement("div",{className:"card-body"},n.createElement("form",{onSubmit:function(e){e.preventDefault(),m.test(a)&&(d([].concat(Object(l.a)(u),[a.trim()])),c(""))}},n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:"task",className:a.length>0?f("text-success","text-danger"):""},"Task"),n.createElement("input",{type:"text",placeholder:"Task to add",className:"form-control form-control-lg ".concat(a.length>0?f("is-valid","is-invalid"):""),name:"task",onChange:function(e){c(e.target.value)},value:a})),n.createElement("button",{className:"btn btn-primary btn-block"},"Add")))),u.map((function(e,t){return n.createElement("div",{className:"card mb-3",key:t},n.createElement("div",{className:"card-body"},n.createElement("h4",null,e,n.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",color:"red",float:"right"},onClick:function(){!function(e){var t=Object(l.a)(u);t.splice(e,1),d(t)}(t)}}))))})))}var d=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.502d71a6.chunk.js.map