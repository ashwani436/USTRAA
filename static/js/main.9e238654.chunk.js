(this.webpackJsonpcontactlist=this.webpackJsonpcontactlist||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(6),n=c.n(a),r=(c(22),c(4)),i=c.n(r),l=c(7),j=c(2),d=(c(24),c(25),c(1));var o=function(e){var t=Object(s.useState)(!1),c=Object(j.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)([]),o=Object(j.a)(r,2),b=o[0],h=o[1],u=function(){var t=Object(l.a)(i.a.mark((function t(){var c,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=".concat(e.catid));case 3:return c=t.sent,t.next=6,c.json();case 6:s=t.sent,h(s.products),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){u()}),[e.catid]),Object(s.useEffect)((function(){a&&h(b),h(b.slice(0,3))}),[a]),console.log(b),Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"container-fluid mb-5",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-10 mx-2",children:[b.map((function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"col-md-4 col-10 mx-4",children:Object(d.jsx)("div",{className:"card",id:"all_cards",children:Object(d.jsxs)("div",{className:"row g-3",children:[Object(d.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-4",children:Object(d.jsx)("img",{className:"card-img",src:e.image_urls.x520,style:{maxWidth:"300px"},alt:"Card"})}),Object(d.jsx)("div",{className:"col-lg-8 col-md-6 col-sm-8",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:e.name}),Object(d.jsxs)("h5",{className:"card-title1",children:["(",e.weight," ",e.weight_unit,")"]}),Object(d.jsxs)("h5",{className:"card-title2",children:["\u20b9 ",e.price,Object(d.jsxs)("strike",{className:"card-title3",children:["\u20b9",e.price+200]})]}),e.is_in_stock?Object(d.jsx)("button",{href:"#",className:"btn btn mt-2",id:"btn1",children:"ADD TO CART"}):Object(d.jsx)("button",{href:"#",className:"btn btn mt-2",id:"btn2",disabled:!0,children:"OUT OF STOCK"})]})})]})})})})})),Object(d.jsx)("button",{className:"btn btn",id:"button1",onClick:function(){n(!a)},children:a?"less":"more"})]})})})})};var b=function(e){var t=Object(s.useState)(185),c=Object(j.a)(t,2),a=c[0],n=c[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"container mb-5",children:Object(d.jsx)("div",{className:"row_posters",onClick:function(e){var t=e.target.id.toString();n(t)},children:e.data.map((function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("img",{id:e.category_id,className:"row_poster",src:e.category_image,alt:"image_no"})})}))})}),Object(d.jsx)(o,{catid:a})]})},h=c.p+"static/media/ustra.c3c5d429.jpg",u=c(13),m=c.n(u),x=c(15),O=c.n(x),f=c(16),v=c.n(f);var p=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{class:"navbar navbar-light bg-light",children:Object(d.jsxs)("div",{class:"container-fluid",children:[Object(d.jsxs)("a",{class:"navbar-brand mx-5",href:"/",children:[Object(d.jsx)("img",{src:h,alt:"",width:"100",height:"60",style:{borderRadius:"5px"},class:"d-inline-block align-text-center bg-light"}),"USTRAA"]}),Object(d.jsx)("form",{class:"d-flex",children:Object(d.jsx)("input",{class:"form-control mx-5",style:{width:"500px",height:"50px",background:"lightgray"},type:"search",placeholder:"Search for a product","aria-label":"Search"})}),Object(d.jsx)("div",{className:"mx-5",children:Object(d.jsxs)("a",{href:"/",children:[Object(d.jsx)(m.a,{className:"mx-3"}),Object(d.jsx)(O.a,{className:"mx-3"}),Object(d.jsx)(v.a,{classame:"mx-3"})]})})]})})})};var g=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],n=function(){var e=Object(l.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,a(c.category_list),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){n()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{className:"my-3",children:"Our Products"}),Object(d.jsx)("hr",{}),Object(d.jsx)(b,{data:c})]})]})};c(32);n.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.9e238654.chunk.js.map