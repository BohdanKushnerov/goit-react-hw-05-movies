"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[946],{3291:function(t,e,r){r.d(e,{Z:function(){return k}});var n,a,o,i,c,s=r(1087),u=r(7689),l=r(7084),p=r(168),d=r(7402),h=d.Z.ul(n||(n=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 8px;\n"]))),f=d.Z.li(a||(a=(0,p.Z)(["\n  position: relative;\n\n  max-width: 220px;\n  padding: 8px;\n\n  text-align: center;\n\n  &:hover {\n    background-color: #e5e8e9;\n    overflow: hidden;\n    border-radius: 5px;\n  }\n"]))),g=d.Z.h2(o||(o=(0,p.Z)(["\n  color: black;\n"]))),v=d.Z.img(i||(i=(0,p.Z)(["\n  margin-bottom: 20px;\n"]))),m=d.Z.div(c||(c=(0,p.Z)(["\n  position: absolute;\n  top: 303px;\n  left: 5px;\n\n  width: 47px;\n"]))),x=r(184),k=function(t){var e=t.state;console.log(e);var r=(0,u.TH)();return(0,x.jsx)(h,{children:e.map((function(t){var e,n=t.id,a=t.original_title,o=t.vote_average,i=t.poster_path,c=t.title;return(0,x.jsxs)(f,{children:[(0,x.jsxs)(s.rU,{to:(e=n,"/"===r.pathname?"movies/".concat(e):"".concat(e)),state:{from:r},children:[(0,x.jsx)(v,{src:i,alt:c}),(0,x.jsx)(g,{children:a})]},n),(0,x.jsx)(m,{children:(0,x.jsx)(l.Z,{value:Math.round(10*o),text:"".concat(Math.round(10*o),"%")})})]},n)}))})}},7084:function(t,e,r){r.d(e,{Z:function(){return d}});var n=r(2791),a=function(t,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},a(t,e)};function o(t){var e=t.className,r=t.counterClockwise,a=t.dashRatio,o=t.pathRadius,s=t.strokeWidth,u=t.style;return(0,n.createElement)("path",{className:e,style:Object.assign({},u,c({pathRadius:o,dashRatio:a,counterClockwise:r})),d:i({pathRadius:o,counterClockwise:r}),strokeWidth:s,fillOpacity:0})}function i(t){var e=t.pathRadius,r=t.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+e+"\n      a "+e+","+e+" "+r+" 1 1 0,"+2*e+"\n      a "+e+","+e+" "+r+" 1 1 0,-"+2*e+"\n    "}function c(t){var e=t.counterClockwise,r=t.dashRatio,n=t.pathRadius,a=2*Math.PI*n,o=(1-r)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(e?-o:o)+"px"}}var s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return function(t,e){function r(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),e.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},e.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},e.prototype.getPathRatio=function(){var t=this.props,e=t.value,r=t.minValue,n=t.maxValue;return(Math.min(Math.max(e,r),n)-r)/(n-r)},e.prototype.render=function(){var t=this.props,e=t.circleRatio,r=t.className,a=t.classes,i=t.counterClockwise,c=t.styles,s=t.strokeWidth,u=t.text,l=this.getPathRadius(),p=this.getPathRatio();return(0,n.createElement)("svg",{className:a.root+" "+r,style:c.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,n.createElement)("circle",{className:a.background,style:c.background,cx:50,cy:50,r:50}):null,(0,n.createElement)(o,{className:a.trail,counterClockwise:i,dashRatio:e,pathRadius:l,strokeWidth:s,style:c.trail}),(0,n.createElement)(o,{className:a.path,counterClockwise:i,dashRatio:p*e,pathRadius:l,strokeWidth:s,style:c.path}),u?(0,n.createElement)("text",{className:a.text,style:c.text,x:50,y:50},u):null)},e.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},e}(n.Component);function u(t){var e=t.rotation,r=t.strokeLinecap,n=t.textColor,a=t.textSize,o=t.pathColor,i=t.pathTransition,c=t.pathTransitionDuration,s=t.trailColor,u=t.backgroundColor,p=null==e?void 0:"rotate("+e+"turn)",d=null==e?void 0:"center center";return{root:{},path:l({stroke:o,strokeLinecap:r,transform:p,transformOrigin:d,transition:i,transitionDuration:null==c?void 0:c+"s"}),trail:l({stroke:s,strokeLinecap:r,transform:p,transformOrigin:d}),text:l({fill:n,fontSize:a}),background:l({fill:u})}}function l(t){return Object.keys(t).forEach((function(e){null==t[e]&&delete t[e]})),t}var p=r(184),d=function(t){var e=t.value,r=t.text,n=e>=75?"#21d07a":e<=25?0===e?"gray":"#6323db":"#d2d531",a=e>=75?"#204529":e<=25?0===e?"gray":"#571435":"#423d0f";return(0,p.jsx)(s,{value:e,text:r,background:!0,backgroundPadding:6,styles:u({textColor:"white",pathColor:n,trailColor:a,backgroundColor:"#081c22",textSize:"35px"})})}},6946:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var n,a=r(3433),o=r(5861),i=r(9439),c=r(4687),s=r.n(c),u=r(2791),l=r(330),p=r(3291),d=r(168),h=r(7402).Z.section(n||(n=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),f=r(184),g=function(){var t=(0,u.useState)([]),e=(0,i.Z)(t,2),r=e[0],n=e[1];return(0,u.useEffect)((function(){var t=new AbortController;return function(){var e=(0,o.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Tg)(t);case 3:r=e.sent,n((0,a.Z)(r)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()(),function(){t.abort()}}),[]),(0,f.jsxs)(h,{children:[(0,f.jsx)("h2",{children:"Tranding today"}),0!==r.length&&(0,f.jsx)(p.Z,{state:r})]})}},330:function(t,e,r){r.d(e,{Ai:function(){return u},Bt:function(){return h},Ny:function(){return g},Tg:function(){return c},xc:function(){return p}});var n=r(5861),a=r(4687),o=r.n(a),i=r(1243);function c(t){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=a89ed47e53c22ac07455246c7a19999d",{signal:e.signal});case 2:return r=t.sent,t.abrupt("return",r.data.results.map((function(t){var e=t.id,r=t.original_title,n=t.vote_average,a=t.poster_path,o=t.title;return{id:e,original_title:r,vote_average:n,poster_path:a?"https://image.tmdb.org/t/p/w220_and_h330_face".concat(a):"https://via.placeholder.com/220x330",title:o}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t,e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(o().mark((function t(e,r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=a89ed47e53c22ac07455246c7a19999d&query=".concat(e),{signal:r.signal});case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){var e=t.id,r=t.original_title,n=t.vote_average,a=t.poster_path,o=t.title;return{id:e,original_title:r,vote_average:n,poster_path:a?"https://image.tmdb.org/t/p/w220_and_h330_face".concat(a):"https://via.placeholder.com/220x330",title:o}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t,e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(o().mark((function t(e,r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US"),{signal:r.signal});case 2:return n=t.sent,t.abrupt("return",n.data.cast.map((function(t){var e=t.profile_path,r=t.name,n=t.id;return{profile_path:e?"https://image.tmdb.org/t/p/w138_and_h175_face".concat(e):"https://via.placeholder.com/138x175",name:r,id:n}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(o().mark((function t(e,r){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US&page=1"),{signal:r.signal});case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id,url:t.url}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t,e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(o().mark((function t(e,r){var n,a,c,s,u,l,p,d;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d=function(t){return t.reduce((function(t,e){return t+e.name}),"").split(/(?=[A-Z])/).join(", ")},t.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US"),{signal:r.signal});case 3:return n=t.sent,a=n.data,c=a.vote_average,s=a.overview,u=a.title,l=a.genres,p=a.poster_path,t.abrupt("return",{vote_average:c,overview:s,title:u,genres:d(l),poster_path:p?"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(p):"https://via.placeholder.com/300x450"});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=946.9787c1ca.chunk.js.map