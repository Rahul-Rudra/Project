(this.webpackJsonplms=this.webpackJsonplms||[]).push([[0],{138:function(e,t){},139:function(e,t){},146:function(e,t){},148:function(e,t){},188:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),o=a.n(r),s=a(10),c=a(9),i=(a(92),a(3)),m=a(4),u=a(1),d=a(6),h=a(5),g=a(2),p=a.n(g),b=a(85);function E(){var e=localStorage.getItem("name");return l.a.createElement(n.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Navbar"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item "},l.a.createElement("a",{className:"nav-link",href:"/"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),localStorage.getItem("login")&&"superAdmin"===localStorage.getItem("role")?l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/users",tabIndex:"-1","aria-disabled":"true"},"UserList")):"",localStorage.getItem("login")&&"superAdmin"===localStorage.getItem("role")?l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/activitys",tabIndex:"-1","aria-disabled":"true"},"Activity")):"",localStorage.getItem("login")&&"Admin"===localStorage.getItem("role")?l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/activitys",tabIndex:"-1","aria-disabled":"true"},"Activity")):"",localStorage.getItem("login")?l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/profile",tabIndex:"-1","aria-disabled":"true"},"Profile")):"",localStorage.getItem("login")?l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/books",tabIndex:"-1","aria-disabled":"true"},"Book")):"",localStorage.getItem("login")&&"superAdmin"===localStorage.getItem("role")?l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/issuedbooks",tabIndex:"-1","aria-disabled":"true"},"IssuedBook")):"",localStorage.getItem("login")&&"Admin"===localStorage.getItem("role")?l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/issuedbooks",tabIndex:"-1","aria-disabled":"true"},"IssuedBook")):""),l.a.createElement("form",{class:"form-inline my-2 my-lg-0"},l.a.createElement("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")),l.a.createElement("ul",{className:"nav navbar-nav navbar-right"},l.a.createElement("li",{className:"nav-item ml-5 "},l.a.createElement("a",{className:"nav-link active",href:"/profile",tabIndex:"-1","aria-disabled":"false"},l.a.createElement("span",{style:{color:"#deee78",margin:"5px",textAlign:"center"}},e),l.a.createElement(b.a,null))),localStorage.getItem("login")?l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/logout",tabIndex:"-1","aria-disabled":"true"},"Logout")):l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/login",tabIndex:"-1","aria-disabled":"true"},"Login")),localStorage.getItem("login")?" ":l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/register",tabIndex:"-1","aria-disabled":"true"},"SingUp"))))))}a(109),a(40);var v=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChangeEmail=n.onChangeEmail.bind(Object(u.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(u.a)(n)),n.onSubmit=n.onSubmit.bind(Object(u.a)(n)),n.state={email:"",password:""},n}return Object(m.a)(a,[{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={email:this.state.email,password:this.state.password};p.a.post("/api/auth",a).then((function(e){return localStorage.setItem("login",JSON.stringify(e)),localStorage.setItem("role",e.data.role),localStorage.setItem("id",e.data.id),localStorage.setItem("name",e.data.name),console.log(e.data.id),t.props.history.push("/")})).catch((function(e){console.log(e.msg),alert(e)})),this.setState({email:"",password:""})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement("div",{className:"wrapper m-5 "},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group m-3"},l.a.createElement("label",{forhtml:"email"},"Email"),l.a.createElement("input",{autoFocus:!0,autoComplete:!0,required:!0,type:"text",id:"email",placeholder:"Email",value:this.state.email,onChange:this.onChangeEmail,className:"form-control"})),l.a.createElement("div",{className:"form-group m-3 "},l.a.createElement("label",{forhtml:"password"},"Password"),l.a.createElement("input",{autoFocus:!0,autoComplete:!0,required:!0,type:"text",id:"password",placeholder:"Password",value:this.state.password,onChange:this.onChangePassword,className:"form-control"})),l.a.createElement("div",{className:"form-group m-3"},l.a.createElement("input",{type:"submit",value:"Login",className:"btn btn-success"})),l.a.createElement("div",null,l.a.createElement(s.b,{to:"/forget-password"},"Forget Password"),l.a.createElement("hr",null)," New_User ?",l.a.createElement(s.b,{to:"/register"},"Register")))))}}]),a}(n.Component),f=(a(20),a(15)),N=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChangeUser=n.onChangeUser.bind(Object(u.a)(n)),n.onChangeEmail=n.onChangeEmail.bind(Object(u.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(u.a)(n)),n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.onSubmit=n.onSubmit.bind(Object(u.a)(n)),n.state={name:"",email:"",password:"",role:"user"},n}return Object(m.a)(a,[{key:"onChangeUser",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleChange",value:function(e){this.setState({role:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={name:this.state.name,email:this.state.email,password:this.state.password,role:this.state.role};p.a.post("/api/users",a).then((function(e){return console.log(e.data),alert("Successfully Register"),t.props.history.push("/login")})).catch((function(e){console.log(e),alert("password must be atleast 6 character")})),this.setState({name:"",email:"",password:""})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,null),l.a.createElement(E,null),l.a.createElement("div",{className:"wrapper m-5 "},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group m-3"},l.a.createElement("label",{forhtml:"name"},"UserName"),l.a.createElement("input",{autoFocus:!0,type:"text",id:"name",placeholder:"UserName",value:this.state.name,onChange:this.onChangeUser,className:"form-control"})),l.a.createElement("div",{className:"form-group m-3"},l.a.createElement("label",{forhtml:"email"},"Email"),l.a.createElement("input",{autoFocus:!0,type:"text",id:"email",placeholder:"Email",value:this.state.email,onChange:this.onChangeEmail,className:"form-control"})),l.a.createElement("div",{className:"form-group m-3 "},l.a.createElement("label",{forhtml:"password"},"Password"),l.a.createElement("input",{autoFocus:!0,type:"password",id:"password",placeholder:"password",value:this.state.password,onChange:this.onChangePassword,className:"form-control"})),l.a.createElement("div",{className:"form-group m-3"},l.a.createElement("label",{forhtml:"exampleFormControlSelect"},"Role"),l.a.createElement("select",{className:"form-control",value:this.state.role,onChange:this.handleChange},l.a.createElement("option",{value:"user"},"user"),l.a.createElement("option",{value:"Admin"},"Admin"),l.a.createElement("option",{value:"superAdmin"},"superAdmin"))),l.a.createElement("div",{className:"form-group m-3"},l.a.createElement("input",{type:"submit",value:"Register",className:"btn btn-success"})))))}}]),a}(n.Component);function S(){return l.a.createElement(n.Fragment,null,l.a.createElement(E,null),l.a.createElement("div",{className:"card-columns"},l.a.createElement("div",{className:"card bg-info m-3",style:{width:400}},l.a.createElement("img",{className:"card-img-top ",src:"abc.jpeg",alt:"Card image"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"Nodejs"))),l.a.createElement("div",{className:"card bg-danger m-3",style:{width:400}},l.a.createElement("img",{className:"card-img-top ",src:"abc.jpeg",alt:"Card image"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"Reactjs"))),l.a.createElement("div",{className:"card bg-success m-3",style:{width:400}},l.a.createElement("img",{className:"card-img-top ",src:"abc.jpeg",alt:"Card image"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"Express")))),l.a.createElement("div",{className:"card-columns"},l.a.createElement("div",{className:"card bg-info m-3",style:{width:400}},l.a.createElement("img",{className:"card-img-top ",src:"abc.jpeg",alt:"Card image"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"Nodejs"))),l.a.createElement("div",{className:"card bg-danger m-3",style:{width:400}},l.a.createElement("img",{className:"card-img-top ",src:"abc.jpeg",alt:"Card image"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"Reactjs"))),l.a.createElement("div",{className:"card bg-success m-3",style:{width:400}},l.a.createElement("img",{className:"card-img-top ",src:"abc.jpeg",alt:"Card image"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"Express")))))}var y=a(24),k=a(41),C=a(42),w=a.n(C),I=function(e){var t=e.itemsCount,a=e.pageSize,n=e.currentPage,r=Math.ceil(t/a);if(1===r)return null;var o=w.a.range(1,r+1);return l.a.createElement("nav",{"aria-label":"Page navigation example"},l.a.createElement("ul",{className:"pagination justify-content-left"},o.map((function(t){return l.a.createElement("li",{key:t,className:t===n?"page-item active":"page-item"},l.a.createElement("a",{className:"page-link",onClick:function(){e.onPageChange(t)}},t))}))))};function j(e,t,a){var n=(t-1)*a;return w()(e).slice(n).take(a).value()}var O=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={book:[],Issue:[],currentPage:1,pageSize:3,count:0,bool:"true",s:"btn btn-primary float-right "},e.IssueBook=function(t){var a=localStorage.getItem("id");p.a.post("/api/book/".concat(t,"/issue/").concat(a)).then((function(t){console.log(t.data),e.setState({Issue:t.data}),e.state.bool=!1,5===t.data.len||0===t.data.st?f.b.warning("You can not access more than 5 books or stock is zero"):f.b.success("successfully issued by you")})).catch((function(e){console.log(e),f.b.error("you can not isssue more than 5 books")}))},e.ReturnBook=function(t){var a=localStorage.getItem("id");p.a.post("/api/return/book_id/".concat(t,"/user_id/").concat(a)).then((function(t){console.log(t.data.c),e.setState({Issue:t.data}),e.state.bool=!1,null===t.data.issue||t.data.c!=t.data.book_id?f.b.error("You can not return this book first issue the book then only you can return"):f.b.success("successfully return by you")})).catch((function(e){console.log(e);f.b.error("You did not issued this book so first issue then only you can return")}))},e.RenewBook=function(t){var a=localStorage.getItem("id");p.a.post("/api/renew/book_id/".concat(t,"/user_id/").concat(a)).then((function(t){console.log(t.data),e.setState({Issue:t.data}),e.state.bool=!1,null===t.data.issue?f.b.error("You can not renew first issue the book then only you can renew"):f.b.success("successfully renew by you")})).catch((function(e){console.log(e);f.b.error("You did not issued this book so first issue then only you can renew")}))},e.control=function(t){e.setState({count:e.state.count+1})},e.handlePageChange=function(t){e.setState({currentPage:t})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/books").then((function(t){e.setState({book:t.data}),console.log(y)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.pageSize,n=t.currentPage,r=j(t.book,n,a);return l.a.createElement("div",{className:"App"},l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,null),l.a.createElement(E,null),localStorage.getItem("login")&&"superAdmin"===localStorage.getItem("role")?l.a.createElement(s.b,{to:"/addbooks"},l.a.createElement("input",{type:"submit",value:"AddBook",className:"btn btn-info mt-2"})):"",l.a.createElement("table",{className:"table table-bordered table-hover table-lg  p-2 m-2"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Title"),l.a.createElement("th",null,"ISBN"),l.a.createElement("th",null,"Stock"),l.a.createElement("th",null,"Author"),l.a.createElement("th",{scope:"col"},"Issue"),l.a.createElement("th",null,"Return"),l.a.createElement("th",null,"Renew"))),l.a.createElement("tbody",null,r.map((function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",{scope:"row"},t.title),l.a.createElement("td",null,t.ISBN),l.a.createElement("td",null,t.stock),l.a.createElement("td",null,t.author),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:e.state.s,onClick:function(){e.IssueBook(t._id)}},"Issue")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:e.state.s,onClick:function(){e.ReturnBook(t._id)}},"Return")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:e.state.s,onClick:function(){e.RenewBook(t._id)}},"Renew")))})))),l.a.createElement(I,{itemsCount:this.state.book.length,pageSize:this.state.pageSize,currentPage:this.state.currentPage,onPageChange:this.handlePageChange})))}}]),a}(n.Component),x=a(31),P=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={user:[],currentPage:1,pageSize:5,count:0},e.deleteUser=function(t){p.a.delete("/api/users/".concat(t)).then((function(a){var n=e.state.user.filter((function(e){return e._id!==t}));e.setState({user:n})}))},e.control=function(t){e.setState({count:e.state.count+1})},e.handlePageChange=function(t){e.setState({currentPage:t})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/users").then((function(t){e.setState({user:t.data}),console.log(x)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.pageSize,n=t.currentPage,r=j(t.user,n,a);return l.a.createElement("div",{className:"App"},l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement("table",{className:"table table-bordered table-hover table-lg w-30 p-2 m-3"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Role"),l.a.createElement("th",{scope:"col"},"Delete"),l.a.createElement("th",null,"Edit"))),l.a.createElement("tbody",null,r.map((function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",{scope:"row"},t.name),l.a.createElement("td",null,t.email),l.a.createElement("td",null,t.role),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn btn-danger float-right",onClick:function(){e.deleteUser(t._id)}},"Delete")),l.a.createElement("td",null,l.a.createElement(s.b,{to:"/edit/".concat(t._id)},l.a.createElement("button",{type:"button",className:"btn btn-success float-right"},"Edit"))))})))),l.a.createElement(I,{itemsCount:this.state.user.length,pageSize:this.state.pageSize,currentPage:this.state.currentPage,onPageChange:this.handlePageChange})))}}]),a}(n.Component),B=function(){return localStorage.clear(),l.a.createElement(c.a,{to:"/login"})},A=a(43),F=function(e){var t=e.component,a=Object(A.a)(e,["component"]);return l.a.createElement(c.b,Object.assign({},a,{render:function(e){return localStorage.getItem("login")?l.a.createElement(t,e):l.a.createElement(c.a,{to:"login"})}}))},_=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=localStorage.getItem("name"),t=localStorage.getItem("id"),a=localStorage.getItem("role");return l.a.createElement(n.Fragment,null,l.a.createElement(E,null),l.a.createElement("div",{className:"card bg-light mb-3",style:{width:300}},l.a.createElement("img",{className:"card-img-top ",src:"p.png",alt:"Card image"}),l.a.createElement("div",{className:"card-body text"},l.a.createElement("h4",{className:"card-text"},"Name : ",l.a.createElement("span",{style:{color:"black"}},e)),l.a.createElement("h4",null,"Id : ",l.a.createElement("span",{style:{color:"black"}},t)),l.a.createElement("h4",null,"Role : ",l.a.createElement("span",{style:{color:"black"}},a)))))}}]),a}(n.Component),D=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChangeEmail=n.onChangeEmail.bind(Object(u.a)(n)),n.onSubmit=n.onSubmit.bind(Object(u.a)(n)),n.state={email:""},n}return Object(m.a)(a,[{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={email:this.state.email};p.a.post("/forget-password",t).then((function(e){console.log(e.data.msg),alert(e.data.msg)})).catch((function(e){console.log(e),alert(e)})),this.setState({email:""})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement("div",{className:"wrapper m-5 "},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group m-3"},l.a.createElement("label",{forhtml:"email"},"Email"),l.a.createElement("input",{autoFocus:!0,type:"text",id:"email",placeholder:"Email",value:this.state.email,onChange:this.onChangeEmail,className:"form-control"})),l.a.createElement("div",{className:"form-group m-3"},l.a.createElement("input",{type:"submit",value:"send",className:"btn btn-success"})))))}}]),a}(n.Component),R=function(e){var t=e.component,a=Object(A.a)(e,["component"]);return l.a.createElement(c.b,Object.assign({},a,{render:function(e){return localStorage.getItem("login")&&"superAdmin"===localStorage.getItem("role")||"Admin"===localStorage.getItem("role")?l.a.createElement(t,e):l.a.createElement(c.a,{to:"login"})}}))},U=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChangeUser=n.onChangeUser.bind(Object(u.a)(n)),n.onChangeEmail=n.onChangeEmail.bind(Object(u.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(u.a)(n)),n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.onSubmit=n.onSubmit.bind(Object(u.a)(n)),n.state={name:"",email:"",password:"",role:"user"},n}return Object(m.a)(a,[{key:"onChangeUser",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleChange",value:function(e){this.setState({role:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={name:this.state.name,email:this.state.email,password:this.state.password,role:this.state.role},n=this.props.match.params.id;console.log(n),p.a.put("/api/users/".concat(n),a).then((function(e){return t.props.history.push("/users")})).catch((function(e){console.log(e)})),this.setState({name:"",email:"",password:""})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement("div",{className:"wrapper m-5 "},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group m-3"},l.a.createElement("label",{forhtml:"name"},"UserName"),l.a.createElement("input",{autoFocus:!0,type:"text",id:"name",placeholder:"UserName",value:this.state.name,onChange:this.onChangeUser,className:"form-control"})),l.a.createElement("div",{className:"form-group m-3"},l.a.createElement("label",{forhtml:"email"},"Email"),l.a.createElement("input",{autoFocus:!0,type:"text",id:"email",placeholder:"Email",value:this.state.email,onChange:this.onChangeEmail,className:"form-control"})),l.a.createElement("div",{className:"form-group m-3 "},l.a.createElement("label",{forhtml:"password"},"Password"),l.a.createElement("input",{autoFocus:!0,type:"text",id:"password",placeholder:"password",value:this.state.password,onChange:this.onChangePassword,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{forhtml:"exampleFormControlSelect"},"Role"),l.a.createElement("select",{className:"form-control",value:this.state.role,onChange:this.handleChange},l.a.createElement("option",{value:"user"},"user"),l.a.createElement("option",{value:"Admin"},"Admin"),l.a.createElement("option",{value:"superAdmin"},"superAdmin"))),l.a.createElement("div",{className:"form-group m-3"},l.a.createElement("input",{type:"submit",value:"Update",className:"btn btn-success mr-3"}),l.a.createElement(s.b,{to:"/users"},l.a.createElement("button",{className:"btn btn-secondary"},"Cancel"))),l.a.createElement("div",null))))}}]),a}(n.Component),z=a(52),T=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChangeId=n.onChangeId.bind(Object(u.a)(n)),n.onChangeTitle=n.onChangeTitle.bind(Object(u.a)(n)),n.onChangeISBN=n.onChangeISBN.bind(Object(u.a)(n)),n.onSubmit=n.onSubmit.bind(Object(u.a)(n)),n.state={book_info:{id:"",title:"",ISBN:"",stock:"",author:""},user_id:{u_id:"",name:""}},n}return Object(m.a)(a,[{key:"onChangeId",value:function(e){this.setState({id:e.target.value})}},{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeISBN",value:function(e){this.setState({ISBN:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={book_info:{id:y._id,title:y.title,ISBN:y.ISBN,stock:y.stock,author:y.author},user_id:{u_id:x._id,name:x.name}};p.a.post("/book/:book_id/issue/:user_id",a).then((function(e){return console.log(e.data),t.props.history.push("/login")})).catch((function(e){console.log(e)})),this.setState({id:"",title:"",ISBN:"",stock:" ",author:"",name:""})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement("div",{className:"wrapper m-5 "},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group m-3"},l.a.createElement("label",{forhtml:"id"},"Id"),l.a.createElement("input",{autoFocus:!0,type:"text",id:"id",placeholder:"Id",value:this.state.id,onChange:this.onChangeId,className:"form-control"})),l.a.createElement("div",{className:"form-group m-3"},l.a.createElement("label",{forhtml:"title"},"Title"),l.a.createElement("input",{autoFocus:!0,type:"text",id:"title",placeholder:"title",value:this.state.title,onChange:this.onChangeTitle,className:"form-control"})),l.a.createElement("div",{className:"form-group m-3 "},l.a.createElement("label",{forhtml:"ISBN"},"ISBN"),l.a.createElement("input",{autoFocus:!0,type:"text",id:"ISBN",placeholder:"ISBN",value:this.state.ISBN,onChange:this.onChangeISBN,className:"form-control"})),l.a.createElement("div",{className:"form-group m-3"},l.a.createElement("input",{type:"submit",value:"Issue",className:"btn btn-success"})))))}}]),a}(n.Component),J=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={activity:[],currentPage:1,pageSize:5,count:0},e.control=function(t){e.setState({count:e.state.count+1})},e.handlePageChange=function(t){e.setState({currentPage:t})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/activitys").then((function(t){e.setState({activity:t.data}),console.log(z)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.pageSize,a=e.currentPage,n=j(e.activity,a,t);return l.a.createElement("div",{className:"App"},l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement("table",{className:"table table-bordered table-hover table-lg w-40 p-3 m-5"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Book_id"),l.a.createElement("th",null,"Book_Title"),l.a.createElement("th",null,"IssueDate"),l.a.createElement("th",null,"ReturnDate"),l.a.createElement("th",null,"UserName"),l.a.createElement("th",null,"User_id"),l.a.createElement("th",null,"Category"))),l.a.createElement("tbody",null,n.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",{scope:"row"},e.info.id),l.a.createElement("td",null,e.info.title),l.a.createElement("td",null,e.time.issueDate),l.a.createElement("td",null,e.time.returnDate),l.a.createElement("td",null,e.user_id.id),l.a.createElement("td",null,e.user_id.name),l.a.createElement("td",null,e.category))})))),l.a.createElement(I,{itemsCount:this.state.activity.length,pageSize:this.state.pageSize,currentPage:this.state.currentPage,onPageChange:this.handlePageChange})))}}]),a}(n.Component),M=a(84),L=(a(185),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleInput=function(e){e.preventDefault();var t=e.target.name,a=e.target.value;n.setState(Object(M.a)({},t,a))},n.handleForm=function(e){if(e.preventDefault(),""===n.state.email)return alert("Email is Required"),!1;p.a.post("/forget-password/updatePassword",n.state).then((function(e){return alert(e.data.msg),console.log(e.data.msg),n.props.history.push("/login")})).catch((function(e){e.response&&404===e.response.status?alert(e.response.data.msg):alert("Something Went Wrong"),n.setState({errors:e.response})}))},n.state={linkDate:"",email:"",password:"",confirm_password:"",errors:{}},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.slug.split("+++"),t=e[0],a=e[1],n=e[2];console.log(t),console.log(a),this.setState({email:a,linkDate:t,token:n});var l=new Date(t),r=new Date;console.log(l),console.log(r),r-l>36e3&&(alert("Link Not Valid link will be valid for 30 min.Please sent the reset link Again"),this.props.history.push("/login"))}},{key:"render",value:function(){return l.a.createElement("div",{className:"content"},l.a.createElement("form",{onSubmit:this.handleForm},l.a.createElement("div",{className:"row",style:{marginTop:20}},l.a.createElement("div",{className:"col-sm-3"}),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header text-center"},"Reset Password"),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleInput,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Confirm Password"),l.a.createElement("input",{type:"password",name:"confirm_password",value:this.state.confirm_password,onChange:this.handleInput,className:"form-control"}))),l.a.createElement("div",{className:"card-footer text-center"},l.a.createElement("input",{type:"button",value:"Reset",onClick:this.handleForm,className:"btn btn-primary"})))),l.a.createElement("div",{className:"col-sm-3"}))))}}]),a}(n.Component)),Y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChangeTitle=n.onChangeTitle.bind(Object(u.a)(n)),n.onChangeISBN=n.onChangeISBN.bind(Object(u.a)(n)),n.onChangeStock=n.onChangeStock.bind(Object(u.a)(n)),n.onChangeAuthor=n.onChangeAuthor.bind(Object(u.a)(n)),n.onSubmit=n.onSubmit.bind(Object(u.a)(n)),n.state={title:"",ISBN:"",stock:"",author:""},n}return Object(m.a)(a,[{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeISBN",value:function(e){this.setState({ISBN:e.target.value})}},{key:"onChangeStock",value:function(e){this.setState({stock:e.target.value})}},{key:"onChangeAuthor",value:function(e){this.setState({author:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={title:this.state.title,ISBN:this.state.ISBN,stock:this.state.stock,author:this.state.author};p.a.post("/api/books",a).then((function(e){return console.log(e.data),t.props.history.push("/books")})).catch((function(e){console.log(e)})),this.setState({title:"",ISBN:"",stock:"",author:""})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement("div",{className:"wrapper m-5 "},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group m-3"},l.a.createElement("label",{forhtml:"title"},"Title"),l.a.createElement("input",{autoFocus:!0,type:"text",id:"title",placeholder:"Title",value:this.state.title,onChange:this.onChangeTitle,className:"form-control"})),l.a.createElement("div",{className:"form-group m-3"},l.a.createElement("label",{forhtml:"ISBN"},"ISBN"),l.a.createElement("input",{autoFocus:!0,type:"text",id:"ISBN",placeholder:"ISBN",value:this.state.ISBN,onChange:this.onChangeISBN,className:"form-control"})),l.a.createElement("div",{className:"form-group m-3 "},l.a.createElement("label",{forhtml:"stock"},"Stock"),l.a.createElement("input",{autoFocus:!0,type:"text",id:"stock",placeholder:"stock",value:this.state.stock,onChange:this.onChangeStock,className:"form-control"})),l.a.createElement("div",{className:"form-group m-3"},l.a.createElement("label",{forhtml:"author"},"Author"),l.a.createElement("input",{autoFocus:!0,type:"text",id:"author",placeholder:"Author",value:this.state.author,onChange:this.onChangeAuthor,className:"form-control"})),l.a.createElement("div",{className:"form-group m-3"},l.a.createElement("input",{type:"submit",value:"ADD",className:"btn btn-success mr-3"}),l.a.createElement(s.b,{to:"/books"},l.a.createElement("button",{className:"btn btn-secondary"},"Cancel"))))))}}]),a}(n.Component),q=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={Issue:[],currentPage:1,pageSize:5,count:0},e.control=function(t){e.setState({count:e.state.count+1})},e.handlePageChange=function(t){e.setState({currentPage:t})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/issued/books").then((function(t){e.setState({Issue:t.data}),console.log(k)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.pageSize,a=e.currentPage,n=j(e.Issue,a,t);return l.a.createElement("div",{className:"App"},l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement("table",{className:"table table-bordered table-hover table-lg w-40 p-3 m-5"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Book_Title"),l.a.createElement("th",null,"IssueDate"),l.a.createElement("th",null,"UserName"))),l.a.createElement("tbody",null,n.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.book_info.title),l.a.createElement("td",null,e.book_info.issueDate),l.a.createElement("td",null,e.user_id.name))})))),l.a.createElement(I,{itemsCount:this.state.Issue.length,pageSize:this.state.pageSize,currentPage:this.state.currentPage,onPageChange:this.handlePageChange})))}}]),a}(n.Component);function H(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{class:"nav flex-column nav-pills",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},l.a.createElement("a",{class:"nav-link active",id:"v-pills-home-tab","data-toggle":"pill",href:"#v-pills-home",role:"tab","aria-controls":"v-pills-home","aria-selected":"true"},"Home"),l.a.createElement("a",{class:"nav-link",id:"v-pills-profile-tab","data-toggle":"pill",href:"#v-pills-profile",role:"tab","aria-controls":"v-pills-profile","aria-selected":"false"},"Profile"),l.a.createElement("a",{class:"nav-link",id:"v-pills-messages-tab","data-toggle":"pill",href:"#v-pills-messages",role:"tab","aria-controls":"v-pills-messages","aria-selected":"false"},"Messages"),l.a.createElement("a",{class:"nav-link",id:"v-pills-settings-tab","data-toggle":"pill",href:"#v-pills-settings",role:"tab","aria-controls":"v-pills-settings","aria-selected":"false"},"Settings")),l.a.createElement("div",{class:"tab-content",id:"v-pills-tabContent"},l.a.createElement("div",{class:"tab-pane fade show active",id:"v-pills-home",role:"tabpanel","aria-labelledby":"v-pills-home-tab"},"..."),l.a.createElement("div",{class:"tab-pane fade",id:"v-pills-profile",role:"tabpanel","aria-labelledby":"v-pills-profile-tab"},"..."),l.a.createElement("div",{class:"tab-pane fade",id:"v-pills-messages",role:"tabpanel","aria-labelledby":"v-pills-messages-tab"},"..."),l.a.createElement("div",{class:"tab-pane fade",id:"v-pills-settings",role:"tabpanel","aria-labelledby":"v-pills-settings-tab"},"...")))}var W=function(){return l.a.createElement(s.a,null,l.a.createElement(F,{exact:!0,path:"/",component:S}),l.a.createElement(F,{exact:!0,path:"/books",component:O}),l.a.createElement(F,{exact:!0,path:"/profile",component:_}),l.a.createElement(c.b,{exact:!0,path:"/logout",component:B}),l.a.createElement(c.b,{exact:!0,path:"/login",component:v}),l.a.createElement(c.b,{exact:!0,path:"/register",component:N}),l.a.createElement(c.b,{exact:!0,path:"/forget-password",component:D}),l.a.createElement(R,{exact:!0,path:"/users",component:P}),l.a.createElement(R,{exact:!0,path:"/edit/:id",component:U}),l.a.createElement(F,{exact:!0,path:"/issue/:id",component:T}),l.a.createElement(R,{exact:!0,path:"/activitys",component:J}),l.a.createElement(c.b,{exact:!0,path:"/reset-password/:slug",component:L}),l.a.createElement(R,{exact:!0,path:"/addbooks",component:Y}),l.a.createElement(R,{exact:!0,path:"/issuedbooks",component:q}),l.a.createElement(c.b,{exact:!0,path:"/examples",component:H}))};o.a.render(l.a.createElement(W,null),document.getElementById("root"))},24:function(e){e.exports=JSON.parse("[{}]")},31:function(e){e.exports=JSON.parse("[{}]")},41:function(e){e.exports=JSON.parse("[{}]")},52:function(e){e.exports=JSON.parse("[{}]")},87:function(e,t,a){e.exports=a(188)},92:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.4f26c308.chunk.js.map