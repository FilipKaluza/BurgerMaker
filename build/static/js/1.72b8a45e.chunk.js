webpackJsonp([1],{145:function(e,n,t){"use strict";function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),o=t.n(i),r=t(146),u=t(47),l=t(48),c=t(159),A=t.n(c),d=t(6),s=t(11),p=t(19),b=t(149),m=function(){function e(e,n){var t=[],a=!0,i=!1,o=void 0;try{for(var r,u=e[Symbol.iterator]();!(a=(r=u.next()).done)&&(t.push(r.value),!n||t.length!==n);a=!0);}catch(e){i=!0,o=e}finally{try{!a&&u.return&&u.return()}finally{if(i)throw o}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=function(e){var n=Object(i.useState)({email:{elementType:"input",elementConfig:{type:"email",placeholder:"E-mail address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Your password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}}),t=m(n,2),c=t[0],d=t[1],s=Object(i.useState)(!0),g=m(s,2),h=g[0],f=g[1],x=e.buildingBurger,v=e.authRedirect,C=e.onSetAuthRedirectUrl;Object(i.useEffect)(function(){e.buildingBurger||"/"===e.authRedirect||e.onSetAuthRedirectUrl()},[x,v,C]);var B=function(e,n){var t=Object.assign({},c,a({},n,Object.assign({},c[n],{value:e.target.value,valid:Object(b.a)(e.target.value,c[n].validation),touched:!0})));d(t)},_=function(n){n.preventDefault(),e.onAuth(c.email.value,c.password.value,h)},I=function(){f(!h)},w=[];for(var k in c)w.push({id:k,config:c[k]});var y=w.map(function(e){return o.a.createElement(r.a,{key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,changed:function(n){return B(n,e.id)},invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched})});e.loading&&(y=o.a.createElement(l.a,null));var E=null;e.error&&(E=o.a.createElement("p",null," ",e.error.message," "));var j=null;return e.isAuthenticated&&(j=o.a.createElement(p.a,{to:e.authRedirect})),o.a.createElement("div",{className:A.a.Auth},j,E,o.a.createElement("form",{onSubmit:_},y,o.a.createElement(u.a,{btnType:"Success"}," Submit ")),o.a.createElement(u.a,{btnType:"Danger",clicked:I}," Swtich to ",h?"SIGN IN":"SIGN UP"," "))},h=function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirect:e.auth.authRedirect}},f=function(e){return{onAuth:function(n,t,a){return e(s.b(n,t,a))},onSetAuthRedirectUrl:function(){return e(s.j("/"))}}};n.default=Object(d.b)(h,f)(g)},146:function(e,n,t){"use strict";var a=t(0),i=t.n(a),o=t(147),r=t.n(o),u=function(e){var n=null,t=[n];switch(e.invalid&&e.shouldValidate&&e.touched&&t.push(r.a.Invalid),e.elementType){case"input":n=i.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":n=i.a.createElement("textarea",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":n=i.a.createElement("select",{className:t.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:n=i.a.createElement("input",Object.assign({className:r.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}))}return i.a.createElement("div",{className:r.a.Input},i.a.createElement("label",{className:r.a.Label}," ",e.label," "),n)};n.a=u},147:function(e,n,t){var a=t(148);"string"===typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;t(142)(a,i);a.locals&&(e.exports=a.locals)},148:function(e,n,t){n=e.exports=t(141)(!0),n.push([e.i,".Input__Input__s67N0{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label___n-1m{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__2-aFx{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__2-aFx:focus{outline:none;background-color:#ccc}.Input__Invalid__1sl1p{border:2px solid red;padding:6px 10px}","",{version:3,sources:["/home/filip/Documents/Development/React/Udemy/BurgerProject_with_Hooks/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,4BACI,aAAc,AACd,sBAAuB,AACvB,sBAAuB,AACvB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,kCACI,aAAc,AACd,qBAAuB,CAC1B,AAED,uBACI,qBAAsB,AACtB,gBAAkB,CACrB",file:"Input.css",sourcesContent:[".Input {\n    width: 100%;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.Label {\n    font-weight: bold;\n    display: block;\n    margin-bottom: 8px;\n}\n\n.InputElement {\n    outline: none;\n    border: 1px solid #ccc;\n    background-color: #fff;\n    font: inherit;\n    padding: 6px 10px;\n    display: block;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.InputElement:focus {\n    outline: none;\n    background-color: #ccc;\n}\n\n.Invalid {\n    border: 2px solid red;\n    padding: 6px 10px;\n}"],sourceRoot:""}]),n.locals={Input:"Input__Input__s67N0",Label:"Input__Label___n-1m",InputElement:"Input__InputElement__2-aFx",Invalid:"Input__Invalid__1sl1p"}},149:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var a=function(e,n){var t=!0;return n.required&&(t=""!==e.trim()&&t),n.minLength&&(t=e.length>=n.minLength&&t),n.maxLength&&(t=e.length<=n.maxLength&&t),n.email&&(t=e.includes("@")&&e.includes(".")&&t),t}},159:function(e,n,t){var a=t(160);"string"===typeof a&&(a=[[e.i,a,""]]);var i={};i.transform=void 0;t(142)(a,i);a.locals&&(e.exports=a.locals)},160:function(e,n,t){n=e.exports=t(141)(!0),n.push([e.i,".Auth__Auth__2YUr1{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width:600px){.Auth__Auth__2YUr1{width:600px}}","",{version:3,sources:["/home/filip/Documents/Development/React/Udemy/BurgerProject_with_Hooks/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,mBACI,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAGD,yBACI,mBACI,WAAa,CAChB,CACJ",file:"Auth.css",sourcesContent:[".Auth {\n    margin: 20px auto;\n    width: 80%;\n    text-align: center;\n    -webkit-box-shadow: 0 2px 3px #ccc;\n            box-shadow: 0 2px 3px #ccc;\n    border: 1px solid #eee;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n\n@media (min-width: 600px) {\n    .Auth {\n        width: 600px;\n    }\n}"],sourceRoot:""}]),n.locals={Auth:"Auth__Auth__2YUr1"}}});
//# sourceMappingURL=1.72b8a45e.chunk.js.map