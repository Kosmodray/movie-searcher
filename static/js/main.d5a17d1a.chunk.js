(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(n,e,a){"use strict";a.r(e);var t=a(0),i=a.n(t),r=a(15),o=a.n(r),c=a(4),d=a(21),I=a(13),l=a(1),u=a(44),g=a(2),b=a(19),m=a.n(b),s=a(25),p=a(103),x=a(38),S=a.n(x),w=function(){return S.a.create({baseURL:"https://www.omdbapi.com/"})},f=function(n,e){return w().get("?s=".concat(n,"&page=").concat(e,"&apikey=7a9de037"))},v=function(n){return w().get("?i=".concat(n,"&plot=full&apikey=7a9de037"))},V=Object(p.a)("search"),z=Object(p.a)("gotoMovie"),h=Object(p.a)("setData"),M=Object(p.a)("isLoading"),P={searchMovies:function(n){return function(){var e=Object(s.a)(m.a.mark(function e(a){var t,i,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.page,i=n.title,a(M(!0)),a(h(n)),e.prev=3,e.next=6,f(i,t);case 6:r=e.sent,a(V(r.data,t)),a(M(!1)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:case"end":return e.stop()}},e,null,[[3,11]])}));return function(n){return e.apply(this,arguments)}}()},getMovie:function(n){return function(){var e=Object(s.a)(m.a.mark(function e(a){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(n);case 3:t=e.sent,a(z(t.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(n){return e.apply(this,arguments)}}()}};function j(){var n=Object(l.a)(["\n    width: 100px;\n    height:50px;\n    margin-left:2px;\n    background-color: white;\n    border-radius: 5px;\n    color: black;\n    font-size:24px;\n    border-right: none;\n    border-left:none;\n    border-top: 1px solid #42f445;\n    border-bottom: 1px solid #69a8ff;\n    background-position: 0 0, 100% 0;\n    background-repeat: no-repeat;\n    -webkit-background-size: 1px 100%;\n    -moz-background-size: 1px 100%;\n    background-size: 1px 100%;\n    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzYWNmZDUiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzNhNGVkNSIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=),url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzYWNmZDUiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzNhNGVkNSIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);\n    background-image: -webkit-linear-gradient(top, #42f445 0%, #69a8ff 100%), -webkit-linear-gradient(top, #42f445 0%, #69a8ff 100%);\n    background-image: -moz-linear-gradient(top, #42f445 0%, #69a8ff 100%), -moz-linear-gradient(top, #42f445 0%, #69a8ff 100%);\n    background-image: -o-linear-gradient(top, #42f445 0%, #69a8ff 100%), -o-linear-gradient(top, #42f445 0%, #69a8ff 100%);\n    background-image: linear-gradient(to bottom, #42f445 0%, #69a8ff 100%), linear-gradient(to bottom, #42f445 0%, #69a8ff 100%);\n    &:focus, &:active {\n        outline:none;\n    }\n"]);return j=function(){return n},n}function Z(){var n=Object(l.a)(["\n    width: 300px;\n    height: 50px;\n    box-sizing:border-box;\n    font-size:24px;\n    padding: 5px 15px;\n    border: none;\n    background: linear-gradient(180deg, #42c8f4, #4195f4);\n    border-radius: 5px;\n    border-top: 1px solid #3ACFD5;\n    border-bottom: 1px solid #3a4ed5;\n    background-position: 0 0, 100% 0;\n    background-repeat: no-repeat;\n    -webkit-background-size: 1px 100%;\n    -moz-background-size: 1px 100%;\n    background-size: 1px 100%;\n    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzYWNmZDUiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzNhNGVkNSIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=),url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzYWNmZDUiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzNhNGVkNSIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);\n    background-image: -webkit-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%), -webkit-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);\n    background-image: -moz-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%), -moz-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);\n    background-image: -o-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%), -o-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);\n    background-image: linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%), linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%);\n    &:focus, &:active {\n        outline:none;\n    }\n"]);return Z=function(){return n},n}function G(){var n=Object(l.a)(["\n    margin-top:10%;\n    display:flex;\n    flex-direction: row;\n    margin-bottom:50px;\n"]);return G=function(){return n},n}var k=g.a.form(G()),J=g.a.input(Z()),A=g.a.button(j()),D=Object(c.b)(null,{searchMovies:P.searchMovies})(function(n){var e=n.searchMovies,a=(n.searchLoading,Object(t.useState)("")),r=Object(u.a)(a,2),o=r[0],c=r[1];return i.a.createElement(k,{onSubmit:function(n){n.preventDefault(),e({title:o,page:1})}},i.a.createElement(J,{onChange:function(n){var e=n.target;return c(e.value)},placeholder:"enter title"}),i.a.createElement(A,{type:"submit"},"Search"))}),N=a(41),W=a.n(N);function B(){var n=Object(l.a)(["\n    font-size:36px;\n    text-decoration:none;\n    color:black;\n"]);return B=function(){return n},n}function C(){var n=Object(l.a)(["\n    font-size: 18px;\n    color: grey;\n"]);return C=function(){return n},n}function R(){var n=Object(l.a)(["\n    width:170px;\n    height:250px;\n    border-radius: 10px;\n    box-sizing:border-box;\n"]);return R=function(){return n},n}function X(){var n=Object(l.a)(["\n    width:80%;\n    height:100%;\n    display: flex;\n    flex-direction: column;\n    padding:10px;\n"]);return X=function(){return n},n}function y(){var n=Object(l.a)(["\n    width:550px;\n    max-height:250px;\n    border-radius: 5px;\n    margin-top:50px;    margin-bottom: 50px;\n    padding: 20px;\n    display:flex;\n    flex-direction: row;\n    border-top: 1px solid #3ACFD5;\n    border-bottom: 1px solid #3a4ed5;\n    background-position: 0 0, 100% 0;\n    background-repeat: no-repeat;\n    -webkit-background-size: 1px 100%;\n    -moz-background-size: 1px 100%;\n    background-size: 1px 100%;\n    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzYWNmZDUiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzNhNGVkNSIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=),url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzYWNmZDUiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzNhNGVkNSIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);\n    background-image: -webkit-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%), -webkit-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);\n    background-image: -moz-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%), -moz-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);\n    background-image: -o-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%), -o-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);\n    background-image: linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%), linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%);\n"],["\n    width:550px;\n    max-height:250px;\n    border-radius: 5px;\n    margin-top:50px;\\\n    margin-bottom: 50px;\n    padding: 20px;\n    display:flex;\n    flex-direction: row;\n    border-top: 1px solid #3ACFD5;\n    border-bottom: 1px solid #3a4ed5;\n    background-position: 0 0, 100% 0;\n    background-repeat: no-repeat;\n    -webkit-background-size: 1px 100%;\n    -moz-background-size: 1px 100%;\n    background-size: 1px 100%;\n    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzYWNmZDUiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzNhNGVkNSIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=),url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzYWNmZDUiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzNhNGVkNSIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);\n    background-image: -webkit-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%), -webkit-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);\n    background-image: -moz-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%), -moz-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);\n    background-image: -o-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%), -o-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);\n    background-image: linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%), linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%);\n"]);return y=function(){return n},n}var F=g.a.div(y()),Y=g.a.div(X()),U=g.a.img(R()),E=g.a.span(C()),L=Object(g.a)(d.b)(B()),T=function(n){var e=n.item;return i.a.createElement(F,null,"N/A"!==e.Poster?i.a.createElement(U,{src:e.Poster}):null,i.a.createElement(Y,null,i.a.createElement(L,{to:"/movie/".concat(e.imdbID)},e.Title),i.a.createElement(E,null,e.Year)))};function H(){var n=Object(l.a)(["\n    font-size: 36px;\n    color: red;\n"]);return H=function(){return n},n}var Q=g.a.div(H()),O=Object(c.b)(function(n){return{movies:n.Search,isLoading:n.isLoading,response:n.Response}})(function(n){var e=n.movies,a=n.isLoading,t=n.response;return void 0===e?null:a?i.a.createElement(W.a,{type:"Triangle",color:"#42bff4",height:"200",width:"200"}):"False"===t?i.a.createElement(Q,null,"Not Found"):e.map(function(n){return i.a.createElement(T,{key:n.imdbID,item:n})})});function K(){var n=Object(l.a)(["\n    margin:50px;\n    background-color: white;\n    font-size:36px;\n    border-radius:5px;\n    border-left:none;\n    border-right:none;\n    border-top: 1px solid #3ACFD5;\n    border-bottom: 1px solid #3a4ed5;\n    background-position: 0 0, 100% 0;\n    background-repeat: no-repeat;\n    -webkit-background-size: 1px 100%;\n    -moz-background-size: 1px 100%;\n    background-size: 1px 100%;\n    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzYWNmZDUiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzNhNGVkNSIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=),url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzYWNmZDUiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzNhNGVkNSIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);\n    background-image: -webkit-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%), -webkit-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);\n    background-image: -moz-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%), -moz-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);\n    background-image: -o-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%), -o-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);\n    background-image: linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%), linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%);\n    &:focus, &:active {\n        outline:none;\n    }\n"]);return K=function(){return n},n}function $(){var n=Object(l.a)(["\n    font-size:36px;\n    margin-bottom: 5vh;\n    display: ","\n"]);return $=function(){return n},n}var q=g.a.div($(),function(n){return n.pageCount<=1?"none":"block"}),_=g.a.button(K()),nn=Object(c.b)(function(n){return{title:n.title,page:n.page,pageCount:Math.round(n.totalResults/10),isLoading:n.isLoading,response:n.Response}},{searchMovies:P.searchMovies})(function(n){var e=n.response,a=n.title,t=n.page,r=n.searchMovies,o=n.pageCount;if(n.isLoading)return null;if("False"===e)return null;if(!a)return null;var c=function(n){"next"===n&&t<o&&r({title:a,page:t+1}),"prev"===n&&t>1&&r({title:a,page:t-1})};return i.a.createElement(q,{pageCount:o},i.a.createElement(_,{onClick:function(){return c("prev")}},"Prev"),t,i.a.createElement(_,{onClick:function(){return c("next")}},"Next"))});function en(){var n=Object(l.a)(["\n    width:100%;\n    height:100%;\n    display:flex;\n    flex-direction: column;\n    align-items:center;\n"]);return en=function(){return n},n}var an=g.a.div(en()),tn=Object(c.b)(function(n){return{isLoading:n.isLoading,pageCount:Math.round(n.totalResults/10)}})(function(n){n.isLoading,n.pageCount;return i.a.createElement(an,null,i.a.createElement(D,null),i.a.createElement(O,null),i.a.createElement(nn,null))});function rn(){var n=Object(l.a)(["\n    font-size: 14px;\n"]);return rn=function(){return n},n}function on(){var n=Object(l.a)(["\n    display:flex;\n    flex-direction:column;\n    margin-top:10px;\n"]);return on=function(){return n},n}function cn(){var n=Object(l.a)(["\n    font-size:14px;\n    margin:0px;\n"]);return cn=function(){return n},n}var dn=g.a.p(cn()),In=g.a.div(on()),ln=g.a.span(rn()),un=Object(c.b)(function(n){return{ratings:n.Ratings}})(function(n){var e=n.ratings;return e?e.map(function(n,e){return i.a.createElement(In,{key:e*Math.random()},i.a.createElement(ln,null,n.Source),i.a.createElement(dn,null,n.Value))}):"loading"});function gn(){var n=Object(l.a)(["\n    font-size:20px;\n    width: 100%;\n"]);return gn=function(){return n},n}function bn(){var n=Object(l.a)(["\n    font-size:36px;\n    text-decoration:none;\n    color:black;\n"]);return bn=function(){return n},n}function mn(){var n=Object(l.a)(["\n    font-size: 18px;\n    color: grey;\n    margin: 5px;\n"]);return mn=function(){return n},n}function sn(){var n=Object(l.a)(["\n    width:170px;\n    height:250px;\n    border-radius: 10px;\n"]);return sn=function(){return n},n}function pn(){var n=Object(l.a)(["\n    width:40%;\n    height:100%;\n    display: flex;\n    flex-direction: column;\n    padding:10px;\n"]);return pn=function(){return n},n}function xn(){var n=Object(l.a)(["\n    width:100%;\n    height: 100%;\n    border-radius: 5px;\n    margin-top:50px;\n    margin-bottom: 50px;\n    padding: 20px;\n    display:flex;\n    flex-direction: row;\n    justify-content:center;\n    box-sizing: border-box;\n    font-family: 'Raleway', sans-serif;\n"]);return xn=function(){return n},n}var Sn=g.a.div(xn()),wn=g.a.div(pn()),fn=g.a.img(sn()),vn=g.a.p(mn()),Vn=g.a.span(bn()),zn=g.a.p(gn()),hn=Object(c.b)(function(n){return{movieInfo:n}},{getMovie:P.getMovie})(function(n){var e=n.movieInfo,a=n.getMovie,t=n.match;return e.Title||a(t.params.id),i.a.createElement(Sn,null,"N/A"!==e.Poster?i.a.createElement(fn,{src:e.Poster}):null,i.a.createElement(wn,null,i.a.createElement(Vn,null,e.Title),i.a.createElement(vn,null,e.Year,", ",e.Runtime,", Rate: ",e.Rated),i.a.createElement(vn,null,e.Genre),i.a.createElement(vn,null,"Writer: ",e.Writer),i.a.createElement(vn,null,"Actors: ",e.Actors),i.a.createElement(vn,null,"Awards: ",e.Awards),i.a.createElement(un,null),i.a.createElement(zn,null,e.Plot)))}),Mn=function(n){var e=n.store;return i.a.createElement(c.a,{store:e},i.a.createElement(d.a,{basename:"/movie-searcher"},i.a.createElement(I.a,{exact:!0,path:"/",component:tn}),i.a.createElement(I.a,{path:"/movie/:id",component:hn})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pn=a(20),jn=a(102),Zn=Object(jn.a)({search:function(n,e){return Object(Pn.a)({},n,e.payload)},gotoMovie:function(n,e){return Object(Pn.a)({},n,e.payload)},setData:function(n,e){return Object(Pn.a)({},n,{page:e.payload.page,title:e.payload.title})},isLoading:function(n,e){return Object(Pn.a)({},n,{isLoading:e.payload})}},{isLoading:!1}),Gn=a(18),kn=a(43),Jn=Object(Gn.c)(Zn,Object(Gn.a)(kn.a));o.a.render(i.a.createElement(Mn,{store:Jn}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},47:function(n,e,a){n.exports=a(101)}},[[47,1,2]]]);
//# sourceMappingURL=main.d5a17d1a.chunk.js.map