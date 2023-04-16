"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[593],{3291:function(t,e,n){n.d(e,{Z:function(){return b}});var r,a,o,i,s,c=n(1087),u=n(7689),p=n(7084),l=n(168),d=n(7402),h=d.Z.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 8px;\n"]))),f=d.Z.li(a||(a=(0,l.Z)(["\n  position: relative;\n\n  max-width: 220px;\n  padding: 8px;\n\n  text-align: center;\n\n  &:hover {\n    background-color: #e5e8e9;\n    border-radius: 5px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.14),\n      0 2px 1px rgba(0, 0, 0, 0.2);\n    overflow: hidden;\n  }\n"]))),g=d.Z.h2(o||(o=(0,l.Z)(["\n  color: black;\n"]))),x=d.Z.img(i||(i=(0,l.Z)(["\n  margin-bottom: 20px;\n"]))),v=d.Z.div(s||(s=(0,l.Z)(["\n  position: absolute;\n  top: 303px;\n  left: 5px;\n\n  width: 47px;\n"]))),m=n(184),b=function(t){var e=t.state,n=(0,u.TH)();return(0,m.jsx)(h,{children:e.map((function(t){var e,r=t.id,a=t.original_title,o=t.vote_average,i=t.poster_path,s=t.title;return(0,m.jsxs)(f,{children:[(0,m.jsxs)(c.rU,{to:(e=r,"/"===n.pathname?"movies/".concat(e):"".concat(e)),state:{from:n},children:[(0,m.jsx)(x,{src:i,alt:s,width:220,height:330}),(0,m.jsx)(g,{children:a})]},r),(0,m.jsx)(v,{children:(0,m.jsx)(p.Z,{value:Math.round(10*o),text:"".concat(Math.round(10*o),"%")})})]},r)}))})}},7084:function(t,e,n){n.d(e,{Z:function(){return d}});var r=n(2791),a=function(t,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},a(t,e)};function o(t){var e=t.className,n=t.counterClockwise,a=t.dashRatio,o=t.pathRadius,c=t.strokeWidth,u=t.style;return(0,r.createElement)("path",{className:e,style:Object.assign({},u,s({pathRadius:o,dashRatio:a,counterClockwise:n})),d:i({pathRadius:o,counterClockwise:n}),strokeWidth:c,fillOpacity:0})}function i(t){var e=t.pathRadius,n=t.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+e+"\n      a "+e+","+e+" "+n+" 1 1 0,"+2*e+"\n      a "+e+","+e+" "+n+" 1 1 0,-"+2*e+"\n    "}function s(t){var e=t.counterClockwise,n=t.dashRatio,r=t.pathRadius,a=2*Math.PI*r,o=(1-n)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(e?-o:o)+"px"}}var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},e.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},e.prototype.getPathRatio=function(){var t=this.props,e=t.value,n=t.minValue,r=t.maxValue;return(Math.min(Math.max(e,n),r)-n)/(r-n)},e.prototype.render=function(){var t=this.props,e=t.circleRatio,n=t.className,a=t.classes,i=t.counterClockwise,s=t.styles,c=t.strokeWidth,u=t.text,p=this.getPathRadius(),l=this.getPathRatio();return(0,r.createElement)("svg",{className:a.root+" "+n,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:a.background,style:s.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(o,{className:a.trail,counterClockwise:i,dashRatio:e,pathRadius:p,strokeWidth:c,style:s.trail}),(0,r.createElement)(o,{className:a.path,counterClockwise:i,dashRatio:l*e,pathRadius:p,strokeWidth:c,style:s.path}),u?(0,r.createElement)("text",{className:a.text,style:s.text,x:50,y:50},u):null)},e.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},e}(r.Component);function u(t){var e=t.rotation,n=t.strokeLinecap,r=t.textColor,a=t.textSize,o=t.pathColor,i=t.pathTransition,s=t.pathTransitionDuration,c=t.trailColor,u=t.backgroundColor,l=null==e?void 0:"rotate("+e+"turn)",d=null==e?void 0:"center center";return{root:{},path:p({stroke:o,strokeLinecap:n,transform:l,transformOrigin:d,transition:i,transitionDuration:null==s?void 0:s+"s"}),trail:p({stroke:c,strokeLinecap:n,transform:l,transformOrigin:d}),text:p({fill:r,fontSize:a}),background:p({fill:u})}}function p(t){return Object.keys(t).forEach((function(e){null==t[e]&&delete t[e]})),t}var l=n(184),d=function(t){var e=t.value,n=t.text,r=function(){switch(!0){case e>=75:return"#21d07a";case e<=75&&e>=25:return"#d2d531";case e<=25&&0!==e:return"#db2360";default:return"gray"}}(),a=function(){switch(!0){case e>=75:return"#204529";case e<=75&&e>=25:return"#423d0f";case e<=25&&0!==e:return"#571435";default:return"gray"}}();return(0,l.jsx)(c,{value:e,text:n,background:!0,backgroundPadding:6,styles:u({textColor:"white",pathColor:r,trailColor:a,backgroundColor:"#081c22",textSize:"35px"})})}},8593:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r,a,o,i=n(3433),s=n(5861),c=n(9439),u=n(4687),p=n.n(u),l=n(2791),d=n(1087),h=n(4312),f=n(3291),g=n(168),x=n(7402),v=x.Z.form(r||(r=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n"]))),m=x.Z.input(a||(a=(0,g.Z)(["\n  width: 500px;\n  padding: 15px 16px;\n\n  box-sizing: border-box;\n  border-radius: 5px;\n  background-color: #dcdfe2;\n  border: 1px solid #ffffff;\n  font-size: 18px;\n\n  :focus {\n    outline: transparent;\n    border: 1px solid #000000;\n    background-color: #dcdfe2;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.14),\n      0 2px 1px rgba(0, 0, 0, 0.2);\n  }\n  :-webkit-autofill {\n    transition: background-color 600000s 0s, color 600000s 0s;\n  }\n"]))),b=x.Z.button(o||(o=(0,g.Z)(["\n  padding: 10px 24px;\n  min-width: 100px;\n\n  font-family: inherit;\n  font-weight: 700;\n  font-size: 16px;\n  border-radius: 4px;\n  border: none;\n  color: black;\n  background-color: #74858f;\n  cursor: pointer;\n\n  :disabled {\n    opacity: 0.4;\n  }\n\n  :hover {\n    color: orangered;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.14),\n      0 2px 1px rgba(0, 0, 0, 0.2);\n  }\n"]))),k=n(184),y=function(t){var e=t.onSubmit,n=(0,l.useState)(""),r=(0,c.Z)(n,2),a=r[0],o=r[1];return(0,k.jsxs)(v,{onSubmit:function(t){t.preventDefault(),e(a),o("")},children:[(0,k.jsx)(m,{type:"text",name:"text",value:a,onChange:function(t){var e=t.currentTarget.value;o(e.toLowerCase())},placeholder:"Search for a movie..."}),(0,k.jsx)(b,{type:"submit",disabled:!a,children:"Search"})]})},w=n(1989),_=n(8519),Z=function(){var t=(0,l.useState)(""),e=(0,c.Z)(t,2),n=e[0],r=e[1],a=(0,l.useState)(!1),o=(0,c.Z)(a,2),u=o[0],g=o[1],x=(0,l.useState)([]),v=(0,c.Z)(x,2),m=v[0],b=v[1],Z=(0,l.useState)(_.Z.IDLE),C=(0,c.Z)(Z,2),E=C[0],j=C[1],R=(0,d.lr)(),P=(0,c.Z)(R,2),S=P[0],D=P[1],N=S.get("search");return(0,l.useEffect)((function(){if(n||N){var t=new AbortController;return function(){var e=(0,s.Z)(p().mark((function e(){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),j(_.Z.PENDING),e.prev=2,e.next=5,(0,h.Ai)(n||N,t);case 5:r=e.sent,b((0,i.Z)(r)),j(_.Z.RESOLVED),g(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),j(_.Z.REJECTED);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}()(),function(){t.abort()}}}),[n,N]),(0,k.jsx)(k.Fragment,{children:E===_.Z.REJECTED?(0,k.jsx)("h2",{children:"An error occurred, we could not upload the data, please try reloading the page and try again :)"}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("section",{children:(0,k.jsx)(y,{onSubmit:function(t){D({search:t}),r(t)}})}),(0,k.jsxs)("section",{children:[u&&(0,k.jsx)(w.Z,{}),E===_.Z.RESOLVED&&(0,k.jsx)(f.Z,{state:m}),!m.length&&E===_.Z.RESOLVED&&(0,k.jsx)("h2",{children:"There are no movies that matched your query."})]})]})})}},8519:function(t,e){e.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},4312:function(t,e,n){n.d(e,{Ai:function(){return u},Bt:function(){return h},Ny:function(){return g},Tg:function(){return s},xc:function(){return l}});var r=n(5861),a=n(4687),o=n.n(a),i=n(1243);function s(t){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=a89ed47e53c22ac07455246c7a19999d",{signal:e.signal});case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){var e=t.id,n=t.original_title,r=t.vote_average,a=t.poster_path,o=t.title;return{id:e,original_title:n,vote_average:r,poster_path:a?"https://image.tmdb.org/t/p/w220_and_h330_face".concat(a):"https://via.placeholder.com/220x330",title:o}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t,e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function t(e,n){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=a89ed47e53c22ac07455246c7a19999d&query=".concat(e),{signal:n.signal});case 2:return r=t.sent,t.abrupt("return",r.data.results.map((function(t){var e=t.id,n=t.original_title,r=t.vote_average,a=t.poster_path,o=t.title;return{id:e,original_title:n,vote_average:r,poster_path:a?"https://image.tmdb.org/t/p/w220_and_h330_face".concat(a):"https://via.placeholder.com/220x330",title:o}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t,e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function t(e,n){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US"),{signal:n.signal});case 2:return r=t.sent,t.abrupt("return",r.data.cast.map((function(t){var e=t.profile_path,n=t.name,r=t.id;return{profile_path:e?"https://image.tmdb.org/t/p/w138_and_h175_face".concat(e):"https://via.placeholder.com/138x175",name:n,id:r}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function t(e,n){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US&page=1"),{signal:n.signal});case 2:return r=t.sent,t.abrupt("return",r.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id,url:t.url}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t,e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function t(e,n){var r,a,s,c,u,p,l,d;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d=function(t){return t.reduce((function(t,e){return t+e.name}),"").split(/(?=[A-Z])/).join(", ")},t.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US"),{signal:n.signal});case 3:return r=t.sent,a=r.data,s=a.vote_average,c=a.overview,u=a.title,p=a.genres,l=a.poster_path,t.abrupt("return",{vote_average:s,overview:c,title:u,genres:d(p),poster_path:l?"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(l):"https://via.placeholder.com/300x450"});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=593.86503392.chunk.js.map