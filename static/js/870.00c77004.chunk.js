"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[870],{870:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(861),s=r(885),i=r(757),c=r.n(i),a=r(731),o=r(689),u=r(791),h=r(44);function l(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=1b8f437c71433f5413fc08734c0f2d02"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:if(e.prev=8,e.t0=e.catch(0),!h.ZP.isCancel){e.next=12;break}return e.abrupt("return",{});case 12:throw new Error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var f=r(184),v=function(){var e,t,r=(0,u.useState)({}),i=(0,s.Z)(r,2),h=i[0],d=i[1],v=(0,u.useState)(""),p=(0,s.Z)(v,2),x=p[0],j=p[1],m=(0,u.useState)(!1),w=(0,s.Z)(m,2),g=w[0],k=w[1],_=(0,u.useState)(""),b=(0,s.Z)(_,2),Z=b[0],O=b[1],S=(0,u.useState)(0),y=(0,s.Z)(S,2),C=y[0],L=y[1],E=(0,o.UO)().movieId,P=(0,o.TH)(),U=null!==(e=null===(t=P.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",B=P.state.from;(0,u.useEffect)((function(){if(E){var e=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,s,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.prev=1,e.next=4,l(t);case 4:(r=e.sent)&&(n=r.genres.map((function(e){return e.name})),s=n.join(" "),i=Object.keys(r).length,L(i),j((function(){return s})),d((function(){return r}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),O("Ops we don`t have information for this movie");case 11:return e.prev=11,k(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();return e(E),function(){}}}),[E]),(0,u.useEffect)((function(){Z&&alert(Z)}),[Z]);var G=h.overview,H=h.release_date,I=h.poster_path,N=h.vote_average,R=h.title,T=h.name;return(0,f.jsxs)("section",{children:[(0,f.jsx)(a.OL,{to:B,children:"Back"}),g||C?(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{children:(0,f.jsx)("img",{src:I?"https://image.tmdb.org/t/p/w400/".concat(I):"https://via.placeholder.com/400x600?text=No image",alt:R||T})}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h2",{children:[R||T,"(",H,")"]}),(0,f.jsxs)("p",{children:["User Score: ",N]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:G}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:x})]}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{to:"/movie/".concat(E,"/cast"),state:{from:U},children:(0,f.jsx)("p",{children:"Cast"})})}),(0,f.jsx)("li",{children:(0,f.jsx)(a.OL,{to:"/movie/".concat(E,"/reviews"),state:{from:U},children:(0,f.jsx)("p",{children:"Reviews"})})})]}),(0,f.jsx)(u.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(o.j3,{})})]}):(0,f.jsx)("p",{children:"We don't have information for this movie"})]})}}}]);
//# sourceMappingURL=870.00c77004.chunk.js.map