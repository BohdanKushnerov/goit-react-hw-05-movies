"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[270],{7270:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r,a,i,o=n(3433),c=n(5861),u=n(9439),s=n(4687),p=n.n(s),l=n(2791),d=n(7689),h=n(330),f=n(168),g=n(7402),v=g.Z.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),x=g.Z.li(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 8px;\n  background-color: #e5e8e9;\n  border-radius: 5px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.14),\n    0 2px 1px rgba(0, 0, 0, 0.2);\n"]))),m=g.Z.a(i||(i=(0,f.Z)(["\n  display: block;\n  width: 50px;\n  font-weight: 500;\n  color: orangered;\n  border-radius: 5px;\n  outline: 1px solid orangered;\n  text-align: center;\n"]))),_=n(184),b=function(e){var t=e.state;return console.log(t),(0,_.jsx)(v,{children:t.map((function(e){var t=e.author,n=e.content,r=e.id,a=e.url;return(0,_.jsxs)(x,{children:[(0,_.jsxs)("h2",{children:["Author: ",t]}),(0,_.jsx)("p",{children:n}),(0,_.jsx)(m,{href:a,children:"Link"})]},r)}))})},w="idle",y="pending",k="resolved",Z="rejected",j=function(){var e=(0,l.useState)([]),t=(0,u.Z)(e,2),n=t[0],r=t[1],a=(0,l.useState)(w),i=(0,u.Z)(a,2),s=i[0],f=i[1],g=(0,d.UO)().movieId;return(0,l.useEffect)((function(){var e=new AbortController;return function(){var t=(0,c.Z)(p().mark((function t(){var n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(y),t.prev=1,t.next=4,(0,h.Bt)(g,e);case 4:n=t.sent,r((0,o.Z)(n)),f(k),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),f(Z);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}()(),function(){e.abort()}}),[g]),(0,_.jsxs)("section",{children:[s===k&&(0,_.jsx)(b,{state:n}),!n.length&&s===k&&(0,_.jsx)("h2",{children:"We don't have any reviews for this film"})]})}},330:function(e,t,n){n.d(t,{Ai:function(){return s},Bt:function(){return h},Ny:function(){return g},Tg:function(){return c},xc:function(){return l}});var r=n(5861),a=n(4687),i=n.n(a),o=n(1243);function c(e){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=a89ed47e53c22ac07455246c7a19999d",{signal:t.signal});case 2:return n=e.sent,e.abrupt("return",n.data.results.map((function(e){var t=e.id,n=e.original_title,r=e.vote_average,a=e.poster_path,i=e.title;return{id:t,original_title:n,vote_average:r,poster_path:a?"https://image.tmdb.org/t/p/w220_and_h330_face".concat(a):"https://via.placeholder.com/220x330",title:i}})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e,t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function e(t,n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=a89ed47e53c22ac07455246c7a19999d&query=".concat(t),{signal:n.signal});case 2:return r=e.sent,e.abrupt("return",r.data.results.map((function(e){var t=e.id,n=e.original_title,r=e.vote_average,a=e.poster_path,i=e.title;return{id:t,original_title:n,vote_average:r,poster_path:a?"https://image.tmdb.org/t/p/w220_and_h330_face".concat(a):"https://via.placeholder.com/220x330",title:i}})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function e(t,n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US"),{signal:n.signal});case 2:return r=e.sent,e.abrupt("return",r.data.cast.map((function(e){var t=e.profile_path,n=e.name,r=e.id;return{profile_path:t?"https://image.tmdb.org/t/p/w138_and_h175_face".concat(t):"https://via.placeholder.com/138x175",name:n,id:r}})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function e(t,n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US&page=1"),{signal:n.signal});case 2:return r=e.sent,e.abrupt("return",r.data.results.map((function(e){return{author:e.author,content:e.content,id:e.id,url:e.url}})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function e(t,n){var r,a,c,u,s,p,l,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=function(e){return e.reduce((function(e,t){return e+t.name}),"").split(/(?=[A-Z])/).join(", ")},e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US"),{signal:n.signal});case 3:return r=e.sent,a=r.data,c=a.vote_average,u=a.overview,s=a.title,p=a.genres,l=a.poster_path,e.abrupt("return",{vote_average:c,overview:u,title:s,genres:d(p),poster_path:l?"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(l):"https://via.placeholder.com/300x450"});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=270.1126415c.chunk.js.map