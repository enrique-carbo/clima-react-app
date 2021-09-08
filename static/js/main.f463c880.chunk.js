(this.webpackJsonpclima=this.webpackJsonpclima||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(7),i=a.n(s),r=(a(13),a(5)),l=a.n(r),j=a(8),o=a(2),d=a(0),u=function(e){var t=e.titulo;return Object(d.jsx)("nav",{children:Object(d.jsx)("div",{className:"nav-wrapper light-blue darken-2",children:Object(d.jsxs)("a",{href:"#!",className:"brand-logo",children:[" ",t," "]})})})},b=a(3),p=a(6),O=function(e){var t=e.mensaje;return Object(d.jsxs)("p",{className:"red darken-4 error",children:[" ",t," "]})},h=function(e){var t=e.busqueda,a=e.guardarBusqueda,n=e.guardarConsultar,s=Object(c.useState)(!1),i=Object(o.a)(s,2),r=i[0],l=i[1],j=t.ciudad,u=t.pais,h=function(e){a(Object(p.a)(Object(p.a)({},t),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==j.trim()&&""!==u.trim()?(l(!1),n(!0)):l(!0)},children:[r?Object(d.jsx)(O,{mensaje:"Todos los campos son obligatorios"}):null,Object(d.jsxs)("div",{className:"input-field col s12",children:[Object(d.jsx)("input",{type:"text",name:"ciudad",id:"ciudad",value:j,onChange:h}),Object(d.jsx)("label",{htmlFor:"ciudad",children:"Ciudad: "})]}),Object(d.jsxs)("div",{className:"input-field col s12",children:[Object(d.jsxs)("select",{name:"pais",id:"pais",value:u,onChange:h,children:[Object(d.jsx)("option",{value:"",children:"-- Seleccione un pa\xeds --"}),Object(d.jsx)("option",{value:"US",children:"Estados Unidos"}),Object(d.jsx)("option",{value:"MX",children:"M\xe9xico"}),Object(d.jsx)("option",{value:"AR",children:"Argentina"}),Object(d.jsx)("option",{value:"CO",children:"Colombia"}),Object(d.jsx)("option",{value:"CR",children:"Costa Rica"}),Object(d.jsx)("option",{value:"ES",children:"Espa\xf1a"}),Object(d.jsx)("option",{value:"PE",children:"Per\xfa"})]}),Object(d.jsx)("label",{htmlFor:"pais",children:"Pa\xeds: "})]}),Object(d.jsx)("div",{className:"input-field col s12",children:Object(d.jsx)("button",{type:"submit",className:"waves-effect waves-light btn-large btn-block yellow accent-4 col s12",children:"Buscar Clima"})})]})},m=function(e){var t=e.resultado,a=t.name,c=t.main;if(!a)return null;var n=273.15;return Object(d.jsx)("div",{className:"card-panel white col s12",children:Object(d.jsxs)("div",{className:"black-text",children:[Object(d.jsxs)("h2",{children:["El clima en ",a," es: "]}),Object(d.jsxs)("p",{className:"temperatura",children:[parseFloat(c.temp-n,10).toFixed(1),Object(d.jsx)("span",{children:"\u2103"})]}),Object(d.jsxs)("p",{children:[" Temperatura M\xe1xima:",parseFloat(c.temp_max-n,10).toFixed(1),Object(d.jsx)("span",{children:"\u2103"})]}),Object(d.jsxs)("p",{children:[" Temperatura M\xednima:",parseFloat(c.temp_min-n,10).toFixed(1),Object(d.jsx)("span",{children:"\u2103"})]})]})})};var x=function(){var e,t=Object(c.useState)({ciudad:"",pais:""}),a=Object(o.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(!1),r=Object(o.a)(i,2),b=r[0],p=r[1],x=Object(c.useState)({}),v=Object(o.a)(x,2),f=v[0],g=v[1],N=Object(c.useState)(!1),C=Object(o.a)(N,2),F=C[0],w=C[1],S=n.ciudad,k=n.pais;return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=12;break}return"4e444544b14723cda9c455820eb0aa90",t="https://api.openweathermap.org/data/2.5/weather?q=".concat(S,",").concat(k,"&appid=").concat("4e444544b14723cda9c455820eb0aa90"),e.next=5,fetch(t);case 5:return a=e.sent,e.next=8,a.json();case 8:c=e.sent,g(c),p(!1),"404"===c.cod?w(!0):w(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),e=F?Object(d.jsx)(O,{mensaje:"No hay resultados"}):Object(d.jsx)(m,{resultado:f}),Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)(u,{titulo:"Clima React App"}),Object(d.jsx)("div",{className:"contenedor-form",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col m6 s12",children:Object(d.jsx)(h,{busqueda:n,guardarBusqueda:s,guardarConsultar:p})}),Object(d.jsx)("div",{className:"col m6 s12",children:e})]})})})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.f463c880.chunk.js.map