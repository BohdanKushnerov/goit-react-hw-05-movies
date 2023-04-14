"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[270],{7270:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r,a,i,o=n(3433),c=n(5861),u=n(9439),s=n(4687),p=n.n(s),l=n(2791),d=n(7689),h=n(330),f=n(168),g=n(7402),v=g.Z.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),x=g.Z.li(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 8px;\n  background-color: #e5e8e9;\n  border-radius: 5px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.14),\n    0 2px 1px rgba(0, 0, 0, 0.2);\n"]))),m=g.Z.a(i||(i=(0,f.Z)(["\n  display: block;\n  width: 50px;\n  font-weight: 500;\n  color: orangered;\n  border-radius: 5px;\n  outline: 1px solid orangered;\n  text-align: center;\n"]))),_=n(184),b=function(t){var e=t.state;return console.log(e),(0,_.jsx)(v,{children:e.map((function(t){var e=t.author,n=t.content,r=t.id,a=t.url;return(0,_.jsxs)(x,{children:[(0,_.jsxs)("h2",{children:["Author: ",e]}),(0,_.jsx)("p",{children:n}),(0,_.jsx)(m,{href:a,target:"_blank",children:"Link"})]},r)}))})},w=n(8519),Z=function(){var t=(0,l.useState)([]),e=(0,u.Z)(t,2),n=e[0],r=e[1],a=(0,l.useState)(w.Z.IDLE),i=(0,u.Z)(a,2),s=i[0],f=i[1],g=(0,d.UO)().movieId;return(0,l.useEffect)((function(){var t=new AbortController;return function(){var e=(0,c.Z)(p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(w.Z.PENDING),e.prev=1,e.next=4,(0,h.Bt)(g,t);case 4:n=e.sent,r((0,o.Z)(n)),f(w.Z.RESOLVED),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),f(w.Z.REJECTED);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()(),function(){t.abort()}}),[g]),(0,_.jsxs)("section",{children:[s===w.Z.RESOLVED&&(0,_.jsx)(b,{state:n}),!n.length&&s===w.Z.RESOLVED&&(0,_.jsx)("h2",{children:"We don't have any reviews for this film"})]})}},8519:function(t,e){e.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},330:function(t,e,n){n.d(e,{Ai:function(){return s},Bt:function(){return h},Ny:function(){return g},Tg:function(){return c},xc:function(){return l}});var r=n(5861),a=n(4687),i=n.n(a),o=n(1243);function c(t){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=a89ed47e53c22ac07455246c7a19999d",{signal:e.signal});case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){var e=t.id,n=t.original_title,r=t.vote_average,a=t.poster_path,i=t.title;return{id:e,original_title:n,vote_average:r,poster_path:a?"https://image.tmdb.org/t/p/w220_and_h330_face".concat(a):"https://via.placeholder.com/220x330",title:i}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t,e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function t(e,n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=a89ed47e53c22ac07455246c7a19999d&query=".concat(e),{signal:n.signal});case 2:return r=t.sent,t.abrupt("return",r.data.results.map((function(t){var e=t.id,n=t.original_title,r=t.vote_average,a=t.poster_path,i=t.title;return{id:e,original_title:n,vote_average:r,poster_path:a?"https://image.tmdb.org/t/p/w220_and_h330_face".concat(a):"https://via.placeholder.com/220x330",title:i}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t,e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function t(e,n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US"),{signal:n.signal});case 2:return r=t.sent,t.abrupt("return",r.data.cast.map((function(t){var e=t.profile_path,n=t.name,r=t.id;return{profile_path:e?"https://image.tmdb.org/t/p/w138_and_h175_face".concat(e):"https://via.placeholder.com/138x175",name:n,id:r}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function t(e,n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US&page=1"),{signal:n.signal});case 2:return r=t.sent,t.abrupt("return",r.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id,url:t.url}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t,e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function t(e,n){var r,a,c,u,s,p,l,d;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d=function(t){return t.reduce((function(t,e){return t+e.name}),"").split(/(?=[A-Z])/).join(", ")},t.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US"),{signal:n.signal});case 3:return r=t.sent,a=r.data,c=a.vote_average,u=a.overview,s=a.title,p=a.genres,l=a.poster_path,t.abrupt("return",{vote_average:c,overview:u,title:s,genres:d(p),poster_path:l?"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(l):"https://via.placeholder.com/300x450"});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=270.e574ae73.chunk.js.map