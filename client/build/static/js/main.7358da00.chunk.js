(this.webpackJsonppumpspy=this.webpackJsonppumpspy||[]).push([[0],{46:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n(23),r=(n(33),n(10)),o=n(4),a="/signin",s="/signup",d=n(11),l=n(2),j=n(5),b=n(3),u=b.b.div.withConfig({displayName:"header__Container",componentId:"sc-162fi3q-0"})(["display:flex;margin:0 56px;height:100px;align-items:center;justify-content:space-between;"]),p=b.b.img.withConfig({displayName:"header__Logo",componentId:"sc-162fi3q-1"})(["height:auto;width:134px;margin-right:40px;"]),h=b.b.div.withConfig({displayName:"header__ButtonContainer",componentId:"sc-162fi3q-2"})(["display:flex;justify-content:space-between;width:240px;"]),x=Object(b.b)(r.b).withConfig({displayName:"header__ButtonLink",componentId:"sc-162fi3q-3"})(["background-color:#4cce59;color:#ffffff;text-align:center;width:110px;height:fit-content;border:0;font-size:15px;border-radius:3px;padding:8px 17px;cursor:pointer;text-decoration:none;&:hover{background:#3aa345;}"]),f=n(0),O=["children"],g=["to"],m=["children"],v=function(e){var t=e.children,n=Object(j.a)(e,O);return Object(f.jsx)(u,Object(l.a)(Object(l.a)({},n),{},{children:t}))};v.Logo=function(e){var t=e.to,n=Object(j.a)(e,g);return Object(f.jsx)(r.b,{to:t,children:Object(f.jsx)(p,Object(l.a)({},n))})},v.ButtonContainer=function(e){var t=Object.assign({},e);return Object(f.jsx)(h,Object(l.a)({},t))},v.ButtonLink=function(e){var t=e.children,n=Object(j.a)(e,m);return Object(f.jsx)(x,Object(l.a)(Object(l.a)({},n),{},{children:t}))};var y=v,C=n.p+"static/media/pump_spy.9f13d59a.png",w=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,1)[0];return Object(f.jsxs)(y,{children:[Object(f.jsx)(y.Logo,{to:"/",alt:"pumpspy.ie",src:C}),Object(f.jsx)(y.ButtonContainer,{children:t?Object(f.jsx)(y.ButtonLink,{children:"Sign Out"}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(y.ButtonLink,{to:"/signin",children:"Sign In"}),Object(f.jsx)(y.ButtonLink,{to:"/signup",children:"Sign Up"})]})})]})},_=n(16),I=n(15),k=n.n(I),B=n(21),P=b.b.div.withConfig({displayName:"modal__Background",componentId:"sc-18xzr1y-0"})(["position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.2);z-index:0;"]),N=b.b.div.withConfig({displayName:"modal__Container",componentId:"sc-18xzr1y-1"})(["position:fixed;background:#6e7269;width:25%;height:25%;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1;display:flex;flex-direction:column;align-items:center;"]),T=b.b.h2.withConfig({displayName:"modal__Title",componentId:"sc-18xzr1y-2"})(["padding-top:1em;"]),S=b.b.input.withConfig({displayName:"modal__TextBox",componentId:"sc-18xzr1y-3"})(["width:170px;resize:none;margin-bottom:20px;text-align:center;font-size:3em;"]),L=b.b.div.withConfig({displayName:"modal__ButtonContainer",componentId:"sc-18xzr1y-4"})(["display:flex;flex-direction:row;justify-content:center;margin-bottom:20px;"]),F=b.b.div.withConfig({displayName:"modal__ConfirmButton",componentId:"sc-18xzr1y-5"})(["color:#ffffff;text-align:center;width:110px;height:fit-content;border:0;font-size:15px;border-radius:3px;padding:8px 17px;cursor:pointer;text-decoration:none;margin-right:0.8em;background-color:#4cce59;&:hover{background:#3aa345;}"]),z=b.b.div.withConfig({displayName:"modal__CancelButton",componentId:"sc-18xzr1y-6"})(["color:#ffffff;text-align:center;width:110px;height:fit-content;border:0;font-size:15px;border-radius:3px;padding:8px 17px;cursor:pointer;text-decoration:none;margin-left:0.8em;background-color:#ef0707;&:hover{background:#d10606;}"]),q=["children"],E=Object(i.createContext)(),H=function(e){var t=e.children,n=Object(j.a)(e,q);return Object(f.jsx)(P,Object(l.a)(Object(l.a)({},n),{},{children:t}))};H.Container=function(e){var t=e.fuelPrice,n=e.children,c=Object(i.useState)(),r=Object(d.a)(c,2),o=r[0],a=r[1];Object(i.useEffect)((function(){a(t)}),[t]);return Object(f.jsx)(E.Provider,{value:{price:o,setPriceHandler:function(e){a(e)}},children:Object(f.jsx)(N,{children:n})})},H.Title=function(e){var t=e.children;return Object(f.jsx)(T,{children:t})},H.PriceTextBox=function(e){var t=e.children,n=Object(i.useContext)(E),c=n.price,r=n.setPriceHandler;return Object(f.jsx)(S,{defaultValue:c,maxLength:"5",type:"number",step:"0.1",onChange:function(e){return r(e.target.value)},children:t})},H.ButtonContainer=function(e){var t=e.children;return Object(f.jsx)(L,{children:t})},H.ConfirmButton=function(e){var t=e.toggleModalHandler,n=e.updatePrice,c=e.fuelType,r=e.id,o=e.children,a=Object(i.useContext)(E).price;return Object(f.jsx)(F,{onClick:function(){t(),n(r,c,a)},children:o})},H.CancelButton=function(e){var t=e.toggleModalHandler,n=e.children;return Object(f.jsx)(z,{onClick:function(){t()},children:n})};var R=H,M=["price","fuelType","updatePrice","id"],U=function(e){var t=e.price,n=e.fuelType,c=e.updatePrice,r=e.id,o=(Object(j.a)(e,M),Object(i.useContext)(te));return Object(f.jsx)(R,{children:Object(f.jsxs)(R.Container,{fuelPrice:t,children:[Object(f.jsxs)(R.Title,{children:["Edit Price ",t]}),Object(f.jsx)(R.PriceTextBox,{}),Object(f.jsxs)(R.ButtonContainer,{children:[Object(f.jsx)(R.ConfirmButton,{toggleModalHandler:o,updatePrice:c,id:r,fuelType:n,children:"Confirm"}),Object(f.jsx)(R.CancelButton,{toggleModalHandler:o,children:"Cancel"})]})]})})},A=b.b.div.withConfig({displayName:"stations__GridContainer",componentId:"sc-6qj152-0"})(["display:flex;flex-direction:column;height:auto;align-items:center;"]),J=b.b.div.withConfig({displayName:"stations__RowContainer",componentId:"sc-6qj152-1"})(["display:flex;height:auto;align-items:center;justify-content:center;width:625px;border-top:2px solid black;border-right:2px solid black;border-left:2px solid black;:last-child{border-bottom:2px solid black;}"]),D=b.b.img.withConfig({displayName:"stations__Logo",componentId:"sc-6qj152-2"})(["height:auto;width:100px;margin-right:11px;"]),G=b.b.div.withConfig({displayName:"stations__InfoContainer",componentId:"sc-6qj152-3"})(["height:140px;width:350px;border-left:2px solid black;border-right:2px solid black;"]),V=b.b.p.withConfig({displayName:"stations__StationInfo",componentId:"sc-6qj152-4"})(["margin-left:10px;"]),W=b.b.div.withConfig({displayName:"stations__PriceBox",componentId:"sc-6qj152-5"})([""]),K=b.b.div.withConfig({displayName:"stations__PriceRowContainer",componentId:"sc-6qj152-6"})([""]),Q=b.b.p.withConfig({displayName:"stations__Price",componentId:"sc-6qj152-7"})(["display:inline-block;margin-right:10px;margin-left:10px;width:95px;"]),X=b.b.img.withConfig({displayName:"stations__EditButton",componentId:"sc-6qj152-8"})(["display:inline-block height:auto;width:18px;cursor:pointer;"]),Y=["children"],Z=["children"],$=["fuelPrice","children"],ee=Object(i.createContext)(),te=Object(i.createContext)(),ne=function(e){var t=Object.assign({},e);return Object(f.jsx)(A,Object(l.a)({},t))};ne.StationRow=function(e){var t=Object.assign({},e);return Object(f.jsx)(J,Object(l.a)({},t))},ne.Logo=function(e){var t=Object.assign({},e);return Object(f.jsx)(D,Object(l.a)({},t))},ne.InfoBox=function(e){var t=Object.assign({},e);return Object(f.jsx)(G,Object(l.a)({},t))},ne.StationInfo=function(e){var t=e.children,n=Object(j.a)(e,Y);return Object(f.jsx)(V,Object(l.a)(Object(l.a)({},n),{},{children:t}))},ne.PriceBox=function(e){var t=e.children,n=Object(j.a)(e,Z);return Object(f.jsx)(W,Object(l.a)(Object(l.a)({},n),{},{children:t}))},ne.PriceRow=function(e){var t=Object.assign({},e),n=Object(i.useState)(!1),c=Object(d.a)(n,2),r=c[0],o=c[1];return Object(f.jsx)(ee.Provider,{value:r,children:Object(f.jsx)(te.Provider,{value:function(){o((function(e){return!e}))},children:Object(f.jsx)(K,Object(l.a)({},t))})})},ne.Price=function(e){var t=e.fuelPrice,n=e.children,i=Object(j.a)(e,$);return Object(f.jsxs)(Q,Object(l.a)(Object(l.a)({},i),{},{children:[n," ",t]}))},ne.EditButton=function(e){var t=Object.assign({},e),n=Object(i.useContext)(te);return Object(f.jsx)(X,Object(l.a)({onClick:function(){return n()}},t))},ne.Modal=function(e){var t=Object.assign({},e);return Object(i.useContext)(ee)?Object(f.jsx)(U,Object(l.a)({},t)):Object(f.jsx)(f.Fragment,{})};var ie=ne,ce=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(B.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/stations");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),o=function(e,t,i){console.log(i);var r=n.map((function(n){return n.station_id===e?Object(l.a)(Object(l.a)({},n),{},Object(_.a)({},t,i)):n}));c(r),a(e,t,i)},a=function(){var e=Object(B.a)(k.a.mark((function e(t,n,i){var c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c={price:i},e.next=4,fetch("/stations/".concat(n,"/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n,i){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){r()}),[]),Object(f.jsx)(ie,{children:n.map((function(e){return Object(f.jsxs)(ie.StationRow,{children:[Object(f.jsx)(ie.Logo,{src:"images/logos/".concat(e.brand.toLowerCase(),".png"),alt:e.alt}),Object(f.jsxs)(ie.InfoBox,{children:[Object(f.jsx)(ie.StationInfo,{children:e.name}),Object(f.jsx)(ie.StationInfo,{children:e.address}),Object(f.jsxs)(ie.StationInfo,{children:["Last Updated: ",e.updated]})]}),Object(f.jsxs)(ie.PriceBox,{children:[Object(f.jsxs)(ie.PriceRow,{children:[Object(f.jsxs)(ie.Price,{fuelPrice:e.petrol,children:["Petrol:"," "]}),Object(f.jsx)(ie.EditButton,{src:"images/icons/edit.png",alt:"edit-button"}),Object(f.jsx)(ie.Modal,{id:e.station_id,price:e.petrol,fuelType:"petrol",updatePrice:o})]}),Object(f.jsxs)(ie.PriceRow,{children:[Object(f.jsxs)(ie.Price,{fuelPrice:e.diesel,children:["Diesel:"," "]}),Object(f.jsx)(ie.EditButton,{src:"images/icons/edit.png",alt:"edit-button"}),Object(f.jsx)(ie.Modal,{id:e.station_id,price:e.diesel,fuelType:"diesel",updatePrice:o})]})]})]},e.station_id)}))})},re=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(w,{}),Object(f.jsx)(ce,{})]})},oe=b.b.div.withConfig({displayName:"auth__Container",componentId:"sc-tbjdey-0"})(["display:flex;flex-direction:column;align-items:center;"]),ae=b.b.h2.withConfig({displayName:"auth__Title",componentId:"sc-tbjdey-1"})([""]),se=b.b.form.withConfig({displayName:"auth__Form",componentId:"sc-tbjdey-2"})(["display:flex;flex-direction:column;align-items:center;"]),de=b.b.input.withConfig({displayName:"auth__InputField",componentId:"sc-tbjdey-3"})(["padding:10px;margin-bottom:15px;width:250px;"]),le=b.b.button.withConfig({displayName:"auth__SubmitButton",componentId:"sc-tbjdey-4"})(["background-color:#4cce59;color:#ffffff;text-align:center;width:-webkit-fill-available;height:fit-content;border:0;font-size:15px;border-radius:3px;padding:8px 17px;cursor:pointer;text-decoration:none;&:hover{background:#3aa345;}"]),je=b.b.p.withConfig({displayName:"auth__Text",componentId:"sc-tbjdey-5"})([""]),be=Object(b.b)(r.b).withConfig({displayName:"auth__TextLink",componentId:"sc-tbjdey-6"})(["color:#4cce59;"]),ue=["children"],pe=["children"],he=["children"],xe=["children"],fe=["children"],Oe=["children"],ge=["children"],me=function(e){var t=e.children,n=Object(j.a)(e,ue);return Object(f.jsx)(oe,Object(l.a)(Object(l.a)({},n),{},{children:t}))};me.Title=function(e){var t=e.children,n=Object(j.a)(e,pe);return Object(f.jsx)(ae,Object(l.a)(Object(l.a)({},n),{},{children:t}))},me.Form=function(e){var t=e.children,n=Object(j.a)(e,he);return Object(f.jsx)(se,Object(l.a)(Object(l.a)({},n),{},{children:t}))},me.InputField=function(e){var t=e.children,n=Object(j.a)(e,xe);return Object(f.jsx)(de,Object(l.a)(Object(l.a)({},n),{},{children:t}))},me.SubmitButton=function(e){var t=e.children,n=Object(j.a)(e,fe);return Object(f.jsx)(le,Object(l.a)(Object(l.a)({},n),{},{children:t}))},me.Text=function(e){var t=e.children,n=Object(j.a)(e,Oe);return Object(f.jsx)(je,Object(l.a)(Object(l.a)({},n),{},{children:t}))},me.TextLink=function(e){var t=e.children,n=Object(j.a)(e,ge);return Object(f.jsx)(be,Object(l.a)(Object(l.a)({},n),{},{children:t}))};var ve,ye=me,Ce=function(){return Object(f.jsxs)(ye,{children:[Object(f.jsx)(ye.Title,{children:"Welcome Back"}),Object(f.jsxs)(ye.Form,{children:[Object(f.jsx)(ye.InputField,{placeholder:"Email"}),Object(f.jsx)(ye.InputField,{placeholder:"Password"}),Object(f.jsx)(ye.SubmitButton,{children:"Login"})]}),Object(f.jsxs)(ye.Text,{children:[" ","Don't have an account? ",Object(f.jsx)(ye.TextLink,{to:s,children:"Sign Up"})]})]})},we=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(w,{}),Object(f.jsx)(Ce,{})]})},_e=function(){return Object(f.jsxs)(ye,{children:[Object(f.jsx)(ye.Title,{children:"Create Account"}),Object(f.jsxs)(ye.Form,{children:[Object(f.jsx)(ye.InputField,{placeholder:"First Name"}),Object(f.jsx)(ye.InputField,{placeholder:"Last Name"}),Object(f.jsx)(ye.InputField,{placeholder:"Email"}),Object(f.jsx)(ye.InputField,{placeholder:"Password"}),Object(f.jsx)(ye.SubmitButton,{children:"Register"})]}),Object(f.jsxs)(ye.Text,{children:["Already have an account?"," ",Object(f.jsx)(ye.TextLink,{to:a,children:"Sign In"})]})]})},Ie=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(w,{}),Object(f.jsx)(_e,{})]})},ke=function(){return Object(f.jsxs)(r.a,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",children:Object(f.jsx)(re,{})}),Object(f.jsx)(o.a,{exact:!0,path:a,children:Object(f.jsx)(we,{})}),Object(f.jsx)(o.a,{exact:!0,path:s,children:Object(f.jsx)(Ie,{})})]})},Be=n(28),Pe=Object(b.a)(ve||(ve=Object(Be.a)(["\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n  html, body {\n    height: 100%;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    color: #ffffff;\n    background-color: #6e7269;\n    font-size: 16px;\n}"])));Object(c.render)(Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Pe,{}),Object(f.jsx)(ke,{})]}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.7358da00.chunk.js.map