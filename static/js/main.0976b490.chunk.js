(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{20:function(e,t,n){e.exports=n(44)},25:function(e,t,n){},26:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),c=n.n(l),u=(n(25),n(26),n(12)),o=n(13),s=n(19),i=n(17),m=n(14),d=n.n(m),E=function(e){return d.a.get("https://randomuser.me/api/"+e)},h=n(18);var f=function(e){return r.a.createElement(h.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Gender"),r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"Age"))),r.a.createElement("tbody",null,e.results.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{alt:e.name.first,className:"img-fluid",src:e.picture.thumbnail})),r.a.createElement("td",null,e.name.first),r.a.createElement("td",null,e.name.last),r.a.createElement("td",null,e.gender),r.a.createElement("td",null,e.location.country),r.a.createElement("td",null,e.dob.age))}))))},p=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={search:"hello",results:[]},e.generateUsers=function(t){E(t).then((function(t){e.setState({results:t.data.results}),console.log(e.state)})).catch((function(e){return console.log(e)}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.generateUsers("?results=20&inc=name,email,phone,dob,picture,id,location,gender")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{results:this.state.results}))}}]),n}(a.Component);var g=function(){return r.a.createElement(p,null)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.0976b490.chunk.js.map