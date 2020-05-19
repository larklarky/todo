(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{30:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(18),s=a.n(r),l=a(7),c=a(8),i=a(9),u=a(10),d=a(12),h=a(15),m=a(3),p=function(e){return{type:"RECIEVE_TODOS",todos:e}},f=function(e){return{type:"DELETE_TODO",id:e}},E=a(14),g=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={hidden:!0},n.toggleShow=n.toggleShow.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"toggleShow",value:function(){this.setState({hidden:!this.state.hidden})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("input",{placeholder:this.props.placeholder,className:this.props.className,type:this.state.hidden?"password":"text",value:this.props.password,onChange:this.props.onChange}),o.a.createElement("div",{className:"password-input"},o.a.createElement("input",{className:"password",type:"checkbox",onClick:this.toggleShow}),o.a.createElement("p",null,"Show password")))}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={mail:"",password:""},n.handleEmail=n.handleEmail.bind(Object(m.a)(n)),n.handlePassword=n.handlePassword.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"handleEmail",value:function(e){this.setState({mail:e.target.value})}},{key:"handlePassword",value:function(e){this.setState({password:e.target.value})}},{key:"login",value:function(){this.props.getToken(this.state.mail,this.state.password)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"login"},o.a.createElement("div",{className:"login-form-group"},o.a.createElement("input",{placeholder:"Email",className:"login-form-control",onChange:this.handleEmail}),o.a.createElement(g,{placeholder:"Password",className:"login-form-control",password:this.state.password,onChange:this.handlePassword}),o.a.createElement("button",{type:"button",className:"add-button",disabled:!this.state.mail||0===this.state.password,onClick:function(){return e.login()}},"Log In")))}}]),a}(n.Component);var b=Object(E.b)((function(e){return{todos:e}}),{getToken:function(e,t){return function(a){return console.log("getting token",JSON.stringify({mail:e,password:t})),fetch("http://51.15.86.4:8006/API/v1/token",{method:"POST",body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){return a((t=e,console.log("data",t),localStorage.setItem("token","Bearer "+t.access_token),window.location.href="/",{type:"LOGIN"}));var t}))}}})(v),O=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={user:"",mail:"",password:""},n.handleUser=n.handleUser.bind(Object(m.a)(n)),n.handleEmail=n.handleEmail.bind(Object(m.a)(n)),n.handlePassword=n.handlePassword.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"handleUser",value:function(e){this.setState({user:e.target.value})}},{key:"handleEmail",value:function(e){this.setState({mail:e.target.value})}},{key:"handlePassword",value:function(e){this.setState({password:e.target.value})}},{key:"signUp",value:function(){this.props.createToken(this.state.user,this.state.mail,this.state.password)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"login"},o.a.createElement("div",{className:"login-form-group"},o.a.createElement("input",{placeholder:"Username",className:"login-form-control",onChange:this.handleUser}),o.a.createElement("input",{placeholder:"Email",className:"login-form-control",onChange:this.handleEmail}),o.a.createElement(g,{placeholder:"Password",className:"login-form-control",password:this.state.password,onChange:this.handlePassword}),o.a.createElement("button",{type:"button",className:"add-button",disabled:!this.state.mail||!this.state.password||0===this.state.user,onClick:function(){return e.signUp()}},"Sign Up")))}}]),a}(n.Component);var N=Object(E.b)((function(e){return{todos:e}}),{createToken:function(e,t,a){return function(n){return fetch("http://51.15.86.4:8006/API/v1/users/",{method:"POST",body:JSON.stringify({name:e,email:t,password:a})}).then((function(e){return console.log("response",e),422===e.status&&(window.location.href="/signup"),e.json()})).then((function(e){return n((t=e,console.log("data reg",t),window.location.href="/login",{type:"SIGNUP"}));var t}))}}})(O),k=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={text:""},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState({text:e.target.value}),console.log(this.state.text)}},{key:"addTodo",value:function(){this.props.makeTodo(this.state.text),this.setState({text:""})}},{key:"deleteTodo",value:function(e){this.props.removeTodo(e)}},{key:"changeStatus",value:function(e){this.props.switchStatus(e.id,e.text,!e.completed)}},{key:"deleteAll",value:function(e){this.props.removeAll(e)}},{key:"renderTodos",value:function(){var e=this,t=this.props.todos;return o.a.createElement("div",null,o.a.createElement("div",{className:"grid-container"},t.map((function(t){return o.a.createElement("div",{key:t.id,className:"todo-item"},o.a.createElement("input",{type:"checkbox",id:t.id,className:"hidden-box",defaultChecked:t.completed,onClick:function(){return e.changeStatus(t)}}),o.a.createElement("label",{for:t.id,className:"check--label"},o.a.createElement("span",{className:"check--label-box"}),o.a.createElement("span",{className:"todo-text-wrapper"},o.a.createElement("span",{className:"todo-text"},t.text)),o.a.createElement("span",{type:"button",className:"delete-todo",onClick:function(){return e.deleteTodo(t.id)}},"x")))}))),o.a.createElement("button",{type:"button",className:"delete-button",onClick:function(){return e.deleteAll(t)},hidden:0===t.length},"Delete all"))}},{key:"componentDidMount",value:function(){this.props.getTodos()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("div",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{className:"form-control",placeholder:"What needs to be done?",onChange:this.handleChange,value:this.state.text,onKeyPress:function(t){return 13===t.charCode?e.addTodo():void 0}}),o.a.createElement("button",{type:"button",className:"add-button",onClick:function(){return e.addTodo()}},"Add"))),this.renderTodos())}}]),a}(n.Component);var w=Object(E.b)((function(e){return{todos:e}}),{makeTodo:function(e){return function(t){var a=localStorage.getItem("token");return fetch("http://51.15.86.4:8006/API/v1/todos/",{method:"POST",headers:{Authorization:a},body:JSON.stringify({text:e})}).then((function(e){return e.json()})).then((function(e){return t({type:"ADD_TODO",todo:e})}))}},deleteTodo:f,getTodos:function(){return function(e){var t=localStorage.getItem("token");return fetch("http://51.15.86.4:8006/API/v1/todo/",{headers:{Authorization:t}}).then((function(e){return console.log("response",e),403===e.status&&(window.location.href="/login"),e.json()})).then((function(t){return e(p(t.objects))})).catch((function(e){return console.log("rrrrrrrrr",e)}))}},switchStatus:function(e,t,a){return function(n){var o=localStorage.getItem("token");fetch("http://51.15.86.4:8006/API/v1/todos/".concat(e,"/"),{method:"PUT",headers:{Authorization:o},body:JSON.stringify({text:t,completed:a})}).then((function(e){return e.json()})).then((function(e){return n({type:"CHANGE_STATUS",todo:e})}))}},removeTodo:function(e){return function(t){var a=localStorage.getItem("token");return fetch("http://51.15.86.4:8006/API/v1/todos/".concat(e,"/"),{method:"DELETE",headers:{Authorization:a}}).then((function(a){return t(f(e))}))}},removeAll:function(e){return function(t){var a=localStorage.getItem("token");Promise.all(e.map((function(e){return fetch("http://51.15.86.4:8006/API/v1/todos/".concat(e.id,"/"),{method:"DELETE",headers:{Authorization:a}})}))).then((function(e){return t({type:"DELETE_ALL"})}))}}})(k),y=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/"},o.a.createElement("div",{className:"navbar"},o.a.createElement("span",{className:"title-nav"},o.a.createElement(d.b,{to:"/"},"ToDo")),o.a.createElement("ul",{className:"nav"},o.a.createElement("li",{className:"menu"},o.a.createElement(d.b,{to:"/logout"},"Logout")))),o.a.createElement(w,null)),o.a.createElement(h.a,{path:"/login"},o.a.createElement("div",{className:"navbar"},o.a.createElement("span",{className:"title-nav"},o.a.createElement(d.b,{to:"/"},"ToDo")),o.a.createElement("ul",{className:"nav"},o.a.createElement("li",{className:"menu"},o.a.createElement(d.b,{to:"/signup"},"SignUp")),o.a.createElement("li",{className:"menu"},o.a.createElement(d.b,{to:"/login"},"Login")))),o.a.createElement(b,null)),o.a.createElement(h.a,{path:"/signup"},o.a.createElement("div",{className:"navbar"},o.a.createElement("span",{className:"title-nav"},o.a.createElement(d.b,{to:"/"},"ToDo")),o.a.createElement("ul",{className:"nav"},o.a.createElement("li",{className:"menu active"},o.a.createElement(d.b,{to:"/signup"},"SignUp")),o.a.createElement("li",{className:"menu"},o.a.createElement(d.b,{to:"/login"},"Login")))),o.a.createElement(N,null))))}}]),a}(n.Component),j=a(16),S=a(20),T=(a(40),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=null;switch(t.type){case"ADD_TODO":return a=[].concat(Object(S.a)(e),[t.todo]),a;case"DELETE_TODO":return a=Object(S.a)(e.filter((function(e){return e.id!==t.id}))),a;case"RECIEVE_TODOS":return a=Object(S.a)(t.todos),a;case"CHANGE_STATUS":return a=e.map((function(e){return e.id===t.todo.id?t.todo:e})),a;case"DELETE_ALL":return a=[],a;default:return e}}),C=(a(41),a(29)),A=Object(j.d)(T,Object(j.c)(Object(j.a)(C.a)));s.a.render(o.a.createElement(E.a,{store:A},o.a.createElement(y,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a7f6fefe.chunk.js.map