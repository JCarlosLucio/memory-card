(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],[,,function(e,t,a){e.exports={root:"Header_root__1Z-h9",title:"Header_title__284EO",score:"Header_score__15w4f",win:"Header_win__HEYIB"}},,,,function(e,t,a){e.exports={root:"Card_root__Xod19",image:"Card_image__2XPik"}},,,function(e,t,a){e.exports={root:"CardGrid_root__1UMr1"}},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),i=(a(15),a(5)),l=a(1),m=function(e){for(var t=Object(i.a)(e),a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=[t[n],t[a]];t[a]=r[0],t[n]=r[1]}return t};var s=function(e){var t=Object(n.useState)(m(e)),a=Object(l.a)(t,2),r=a[0],c=a[1];return[r,function(){c(m(e))}]},d=a(2),u=a.n(d);var g=function(e){var t=e.score,a=e.topScore;return r.a.createElement("header",{className:u.a.root},r.a.createElement("h1",{className:u.a.title},"Memory Card"),r.a.createElement("div",{className:u.a.score},r.a.createElement("h3",null,"Score"),r.a.createElement("h2",null,t)),r.a.createElement("div",{className:"".concat(u.a.score," ").concat(12===a?u.a.win:"")},r.a.createElement("h3",null,"Top Score"),r.a.createElement("h2",null,a)))},h=a(6),v=a.n(h);var f=function(e){var t=e.id,a=e.img,n=e.handleClick;return r.a.createElement("div",{className:v.a.root,onClick:function(){return n(t)}},r.a.createElement("img",{className:v.a.image,src:"https://source.unsplash.com/".concat(a,"/250x350"),alt:"dog-".concat(t)}))},_=a(9),E=a.n(_);var p=function(e){var t=e.cards,a=e.handleClick;return r.a.createElement("div",{className:E.a.root},t.map((function(e){return r.a.createElement(f,{key:e.id,id:e.id,img:e.img,handleClick:a})})))},b=[{id:0,img:"dpb-qhtcA0A"},{id:1,img:"tFiXn-Rjmb4"},{id:2,img:"qNJpGSCv_Jc"},{id:3,img:"v0_MCllHY9M"},{id:4,img:"2glK9ao5jYI"},{id:5,img:"11lRpYcvbrk"},{id:6,img:"KZv7w34tluA"},{id:7,img:"09iA8GzINiI"},{id:8,img:"IE2Z11zKsso"},{id:9,img:"7WF-9GaU-cM"},{id:10,img:"xZ5E9H5DIi0"},{id:11,img:"80e_Gtz58Ks"}];var w=function(){var e=s(b),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),m=Object(l.a)(o,2),d=m[0],u=m[1],h=Object(n.useState)(0),v=Object(l.a)(h,2),f=v[0],_=v[1];return Object(n.useEffect)((function(){d.length>f&&_(d.length)}),[d,f]),r.a.createElement("div",null,r.a.createElement(g,{score:d.length,topScore:f}),r.a.createElement(p,{cards:a,handleClick:function(e){d.includes(e)?u([]):u([].concat(Object(i.a)(d),[e])),c(b)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.60f9fe16.chunk.js.map