"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[448],{6242:function(n,e,t){t.d(e,{Hx:function(){return l},LI:function(){return s},Mc:function(){return u},iA:function(){return c},uV:function(){return p}});var r=t(5861),o=t(7757),i=t.n(o),a=t(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3",a.Z.defaults.params={api_key:"eab6e244ce570b702b61e3907180b3b2"};var c=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/search/movie?query=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9925:function(n,e,t){t.d(e,{Bc:function(){return s},Uw:function(){return p},lZ:function(){return u}});var r,o,i,a=t(168),c=t(5867),s=c.ZP.b(r||(r=(0,a.Z)(["\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 18px;\n\n  background-color: white;\n  letter-spacing: 3px;\n  padding: 30px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  color: ",";\n"])),(function(n){return n.theme.colors.error})),u=c.ZP.p(o||(o=(0,a.Z)(["\n  position: absolute;\n  top: 25%;\n  left: 45%;\n  transform: translate(-50%, -50%);\n\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 18px;\n  letter-spacing: 3px;\n\n  color: ",";\n\n  .query {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent})),p=c.ZP.p(i||(i=(0,a.Z)(["\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 18px;\n  letter-spacing: 3px;\n\n  color: ",";\n"])),(function(n){return n.theme.colors.white}))},498:function(n,e,t){t.d(e,{O:function(){return x}});var r,o,i,a=t(7689),c=t(1087),s=t(168),u=t(5867),p=u.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n  padding: 0 20px;\n  margin-bottom: 55px;\n"]))),l=u.ZP.li(o||(o=(0,s.Z)(["\n  width: 300px;\n  height: auto;\n  transition: ",";\n\n  &:hover {\n    transform: translateY(-6px);\n  }\n"])),(function(n){return n.theme.transition})),f=u.ZP.div(i||(i=(0,s.Z)(["\n  color: ",";\n  background-color: ",";\n  padding: 10px;\n\n  .rating {\n    color: ",";\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 18px;\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white})),h=t.p+"static/media/DefaultPoster.e781a50d09601f975e2e.webp",d=t(184),x=function(n){var e=n.movies,t=n.searchResults,r=(0,a.TH)(),o=e||t;if(o)return(0,d.jsx)(p,{children:o.map((function(n){var e=n.id,t=n.title,o=n.poster_path,i=n.vote_average,a=n.vote_count;return(0,d.jsx)(l,{children:(0,d.jsx)(c.rU,{to:"/movies/".concat(e),state:{from:r},children:(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:o?"https://image.tmdb.org/t/p/w300/"+o:h,alt:"Movie poster ".concat(t),width:300,height:450}),(0,d.jsxs)(f,{children:[(0,d.jsx)("p",{children:t}),(0,d.jsxs)("span",{className:"rating",children:["rating: ",i.toFixed(1)," votes: ",a]})]})]})})},e)}))})}},1195:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,o,i,a,c=t(5861),s=t(9439),u=t(7757),p=t.n(u),l=t(6242),f=t(2791),h=t(168),d=t(5867),x=d.ZP.div(r||(r=(0,h.Z)(["\n  margin-top: 100px;\n  padding: 0 20px;\n"]))),v=t(1087),m=function(){var n,e=(0,v.lr)(),t=(0,s.Z)(e,2),r=t[0],o=t[1],i=(0,f.useState)([]),a=(0,s.Z)(i,2),c=a[0],u=a[1];return{query:null!==(n=r.get("query"))&&void 0!==n?n:"",onSearch:function(n){n.preventDefault();var e=n.currentTarget;console.dir(e),o({query:e.elements.searchMovie.value}),e.reset(),u([])},searchMovies:c,setSearchMovies:u}},g=d.ZP.form(o||(o=(0,h.Z)(["\n  text-align: left;\n  position: relative;\n  margin: 1rem auto 0;\n  width: 100%;\n  max-width: 36.625rem;\n\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  margin-bottom: 40px;\n"]))),w=d.ZP.input(i||(i=(0,h.Z)(["\n  width: 500px;\n  height: 60px;\n  background: ",";\n  border: 2px solid rgba(128, 128, 128, 0.7);\n  border-radius: 10px;\n  color: ",";\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.5;\n  padding: 15px;\n  transition: ",";\n\n  margin-right: 10px;\n\n  &:focus,\n  &:hover {\n    border-color: #ffe900;\n    outline: none;\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.transition})),Z=d.ZP.button(a||(a=(0,h.Z)(["\n  width: 124px;\n  height: 60px;\n  padding: 10px;\n  background-color: ",";\n  border-radius: 10px;\n\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.5;\n  transition: ",";\n\n  &:hover {\n    background-color: #ffe900;\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.transition})),b=t(184),y=function(){var n=m().onSearch;return(0,b.jsxs)(g,{onSubmit:n,children:[(0,b.jsx)(w,{type:"text",name:"searchMovie",autoFocus:!0,required:!0,placeholder:"Search movies"}),(0,b.jsx)(Z,{type:"submit",children:"Search"})]})},k=t(498),j=t(9925),P=t(3652);function S(){var n=(0,f.useState)(!1),e=(0,s.Z)(n,2),t=e[0],r=e[1],o=(0,f.useState)(!1),i=(0,s.Z)(o,2),a=i[0],u=i[1],h=m(),d=h.query,v=h.searchMovies,g=h.setSearchMovies;return(0,f.useEffect)((function(){function n(){return(n=(0,c.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,""!==d){n.next=3;break}return n.abrupt("return");case 3:return r(!0),u(!1),n.next=7,(0,l.LI)(d);case 7:e=n.sent,g(e),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),u(!0);case 14:return n.prev=14,r(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,11,14,17]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[d,g]),(0,b.jsxs)(x,{children:[(0,b.jsx)(y,{}),""!==d&&0===v.length?(0,b.jsxs)(j.lZ,{children:["Movie ",(0,b.jsx)("span",{className:"query",children:d})," not found"]}):(0,b.jsx)(k.O,{searchResults:v}),t&&(0,b.jsx)(P.Z,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}),a&&(0,b.jsx)(j.Bc,{children:"Whoops! Error! Please reload this page!"})]})}}}]);
//# sourceMappingURL=448.bfdbabbb.chunk.js.map