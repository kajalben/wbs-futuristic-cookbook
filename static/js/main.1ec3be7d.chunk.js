(this["webpackJsonpwbs-futuristic-cookbook"]=this["webpackJsonpwbs-futuristic-cookbook"]||[]).push([[0],{33:function(e,t){},62:function(e,t,c){},83:function(e,t,c){},85:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(24),i=c.n(s),r=c(12),l=(c(61),c(62),c(21)),o=c(18),j=c(9),d=c(55).a({space:"4mgx4jgworh2",accessToken:"tsqaIdeBMRvcsfvYMEdH_h2AsxVlrT8MrhAeuCNsaEw"}),b=c(53),u=c(36),x=c(54),O=(c(83),c(1)),m=function(e){var t=e.children;return Object(O.jsx)("div",{className:"d-md-flex justify-content-md-center align-items-md-center main-blog flex-wrap",children:t})},h=(c(85),c(19)),f=c(20),g=c(11),v=function(e){var t=e.fields,c=e.sys,a=t.title,n=t.image;return Object(O.jsxs)(g.a,{className:"my-4 rounded card-blog",children:[Object(O.jsx)(g.a.Header,{style:{backgroundImage:"url(".concat(n.fields.file.url,")")},className:"card-image"}),Object(O.jsx)(g.a.Body,{children:Object(O.jsx)(g.a.Title,{className:"card-title",children:a})}),Object(O.jsxs)(g.a.Footer,{className:"card-blog-footer d-flex justify-content-start align-items-center",children:[Object(O.jsx)(h.a,{icon:f.b,className:"card-blog-footer-icon"}),Object(O.jsx)(r.b,{to:"/article/".concat(c.id),children:"Go to the recipe"})]})]})},N=(c(92),c.p+"static/media/logo.38761afe.png"),p=(c(93),c(27)),y=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(p.a.Brand,{className:"inline-flex main-nav d-none d-lg-block",fixed:"bottom",children:Object(O.jsxs)("ul",{className:"navbar-nav d-flex justify-content-between align-items-center",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(r.c,{className:"nav-link",activeClassName:"nav-selected",to:"/",exact:!0,children:"Articles"})}),Object(O.jsx)(h.a,{icon:f.c,className:"main-nav-icon"}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(r.c,{className:"nav-link",activeClassName:"nav-selected",to:"/categories",exact:!0,children:"Categories"})})]})})})},k=function(){var e=Object(a.useState)(window.innerWidth>1024),t=Object(o.a)(e,2),c=t[0],n=t[1],s=function(){n(window.innerWidth>1024)};return Object(a.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}})),Object(O.jsx)("header",{className:"header",children:c?Object(O.jsxs)("div",{className:"col-12 d-flex justify-content-around align-items-center",children:[Object(O.jsxs)("div",{className:"hero",children:[Object(O.jsx)("img",{src:N,alt:"cookbook"}),Object(O.jsx)("h1",{children:" Futuristic Cookbook"})]}),Object(O.jsx)(y,{})]}):Object(O.jsxs)("div",{className:"hero col-12",children:[Object(O.jsx)("img",{src:N,alt:"cookbook"}),Object(O.jsx)("h1",{children:" Futuristic Cookbook"})]})})},w=(c(94),function(){return Object(O.jsx)("div",{className:"container-sm d-block d-lg-none",children:Object(O.jsx)(p.a,{className:"mob-nav",fixed:"bottom",children:Object(O.jsxs)("ul",{className:"navbar-nav mob-nav-box d-flex justify-content-between align-items-center",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(r.c,{className:"nav-link",activeClassName:"navmob-selected",to:"/",exact:!0,children:"Articles"})}),Object(O.jsx)(h.a,{icon:f.c,className:"navmob-icon"}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(r.c,{className:"nav-link",activeClassName:"navmob-selected",to:"/categories",exact:!0,children:"Categories"})})]})})})}),E=c.p+"static/media/cookbook-1.8aca5c4a.jpg",C=c.p+"static/media/cookbook-2.78eb5f6a.jpg",S=c.p+"static/media/cookbook-3.f7a15ec2.png",T=(c(95),c(51)),B=c(56),F=function(e){var t=e.image,c=e.title,a=e.total;return Object(O.jsxs)(g.a,{className:"category-card",children:[Object(O.jsx)(g.a.Header,{style:{backgroundImage:"url(".concat(t,")")},className:"category-image"}),Object(O.jsxs)(g.a.Body,{className:"d-flex justify-content-between justify-content-md-around align-items-center category-card-body",children:[Object(O.jsx)(g.a.Title,{className:"mb-0 category-card-title",children:c}),Object(O.jsx)(g.a.Text,{children:Object(O.jsx)(r.b,{to:"/categories/".concat(c),children:Object(O.jsxs)(B.a,{className:"category-card-button",children:[Object(O.jsx)(h.a,{icon:f.a,className:"category-card-button-icon"}),"Recipes",Object(O.jsx)(T.a,{variant:"light",className:"px-3 category-card-button-badge",children:a})]})})})]})]})},I=function(e){var t=e.articles,c=Object(j.g)(),n=Object(a.useState)([{title:"Main",image:E,total:0},{title:"Desserts",image:C,total:0},{title:"Drinks",image:S,total:0}]),s=Object(o.a)(n,2),i=s[0],r=s[1];return Object(a.useEffect)((function(){if(t){var e=i.map((function(e){var c=t.filter((function(t){return t.fields.categories===e.title})).length;return Object(l.a)(Object(l.a)({},e),{},{total:c})}));r(e)}else c.push("/")}),[]),Object(O.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center w-100",children:i.map((function(e,t){return Object(O.jsx)(F,Object(l.a)({},e),t)}))})},M=function(e){var t=e.articles,c=Object(j.h)(),a=Object(j.g)();return Object(O.jsx)(O.Fragment,{children:t?t.filter((function(e){return e.fields.categories===c.category})).map((function(e){return Object(O.jsx)(v,Object(l.a)({},e),e.sys.id)})):a.push("/")})},A=c(52),H=(c(96),c(26)),W=function(){var e=Object(j.h)(),t=Object(a.useState)(),c=Object(o.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(!0),r=Object(o.a)(i,2),l=r[0],b=r[1];return Object(a.useEffect)((function(){d.getEntry(e.id).then((function(e){s(e.fields),b(!1)})).catch((function(e){return console.log(e)}))}),[]),Object(O.jsxs)(O.Fragment,{children:[l&&Object(O.jsx)("div",{className:"d-flex justify-content-center align-items-center loader",children:Object(O.jsx)(H.a,{animation:"grow"})}),n&&Object(O.jsxs)(g.a,{className:"article-card",children:[Object(O.jsx)(g.a.Header,{style:{backgroundImage:"url(".concat(n.image.fields.file.url,")")},className:"article-card-header"}),Object(O.jsx)(g.a.Img,{variant:"top"}),Object(O.jsxs)(g.a.Body,{className:"p-4 article-card-body",children:[Object(O.jsx)(g.a.Title,{as:"h2",className:"py-4 text-center",children:n.title}),Object(O.jsx)("div",{className:"py-3",children:Object(A.documentToReactComponents)(n.description)})]})]})]})},D=function(e){var t=e.children,c=Object(j.i)().path;return Object(a.useEffect)((function(){window.scrollTo({top:0,left:0})}),[c]),Object(O.jsx)(O.Fragment,{children:t})},R=function(){return Object(O.jsx)("div",{style:{color:"var(--light-color)",letterSpacing:"0.2rem"},className:"w-100 text-center p-4",children:Object(O.jsxs)("small",{children:["Made with ",Object(O.jsx)("span",{style:{color:"var(--red-color)"},children:"\u2665"})," by WBS[WD#011] Group Team"]})})},z=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),i=Object(o.a)(s,2),r=i[0],h=i[1];return Object(a.useEffect)((function(){d.getEntries().then((function(e){n(e.items),h(!1)})).catch((function(e){return console.log(e)}))}),[]),Object(O.jsxs)(b.a,{fluid:!0,children:[Object(O.jsx)(u.a,{children:Object(O.jsx)(k,{})}),Object(O.jsx)(u.a,{children:Object(O.jsx)(x.a,{children:Object(O.jsxs)(m,{children:[Object(O.jsxs)(j.d,{children:[Object(O.jsx)(j.b,{path:"/",exact:!0,children:Object(O.jsxs)(D,{children:[r&&Object(O.jsx)("div",{className:"d-flex justify-content-center align-items-center loader",children:Object(O.jsx)(H.a,{animation:"grow"})}),c&&c.map((function(e){return Object(O.jsx)(v,Object(l.a)({},e),e.sys.id)}))]})}),Object(O.jsx)(j.b,{path:"/article/:id",children:Object(O.jsx)(D,{children:Object(O.jsx)(W,{})})}),Object(O.jsx)(j.b,{path:"/categories",exact:!0,children:Object(O.jsx)(D,{children:Object(O.jsx)(I,{articles:c})})}),Object(O.jsx)(j.b,{path:"/categories/:category",children:Object(O.jsx)(D,{children:Object(O.jsx)(M,{articles:c})})}),Object(O.jsx)(j.a,{to:"/",exact:!0})]}),Object(O.jsx)(R,{})]})})}),Object(O.jsx)(w,{})]})};i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(r.a,{children:Object(O.jsx)(z,{})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.1ec3be7d.chunk.js.map