!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var a,o=i("l5bVx"),s="Expected a function",u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,v=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,g=d||p||Function("return this")(),h=Object.prototype.toString,m=Math.max,y=Math.min,b=function(){return g.Date.now()};function w(e,t,n){var r,i,a,o,u,c,l=0,f=!1,v=!1,d=!0;if("function"!=typeof e)throw new TypeError(s);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n)}function g(e){return l=e,u=setTimeout(w,t),f?p(e):o}function h(e){var n=e-c;return void 0===c||n>=t||n<0||v&&e-l>=a}function w(){var e=b();if(h(e))return M(e);u=setTimeout(w,function(e){var n=t-(e-c);return v?y(n,a-(e-l)):n}(e))}function M(e){return u=void 0,d&&r?p(e):(r=i=void 0,o)}function _(){var e=b(),n=h(e);if(r=arguments,i=this,c=e,n){if(void 0===u)return g(c);if(v)return u=setTimeout(w,t),p(c)}return void 0===u&&(u=setTimeout(w,t)),o}return t=A(t)||0,x(n)&&(f=!!n.leading,a=(v="maxWait"in n)?m(A(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),_.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=i=u=void 0},_.flush=function(){return void 0===u?o:M(b())},_}function x(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function A(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==h.call(t)}(t))return NaN;if(x(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=x(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var r=l.test(t);return r||f.test(t)?v(t.slice(2),r?2:8):c.test(t)?NaN:+t}a=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(s);return x(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),w(e,t,{leading:r,maxWait:t,trailing:i})};var M=i("bpxeT"),_=i("8MBJY"),P=i("a2hTj"),k=i("2TvXO"),T=i("dIxxU");i("5nHy8");var j=i("ikGeD"),O=i("7rQOT"),L=T.default.create({baseURL:"https://api.themoviedb.org/3"}),D={params:{api_key:"6251e629c61bceaf56a3d45f05637256"}},R=function(){"use strict";function t(){e(_)(this,t),this.page=1,this.totalPages=null,this.numberResultsPerPage=20,this.movieArray=[],this.pagesData={},this.everythingIsLoaded=!1}return e(P)(t,[{key:"getWatchedMovies",value:function(){var t=this;return e(M)(e(k).mark((function n(){return e(k).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j.filmsMainContainer.innerHTML="",t.movieArray=[76600,315162,593643,661374,436270,536554,545611,19995,668482,555604,804095,76600,315162,593643,661374,436270,536554,545611,19995,668482,555604,804095,76600,315162,593643,661374,436270,536554,545611,19995,668482,555604,804095,76600,315162,593643,661374,436270,536554,545611,19995,668482,555604,804095,76600,315162,593643,661374,436270,536554,545611,19995,668482,555604,804095,76600,315162,593643,661374,436270,536554,545611,19995,668482,555604,804095,76600,315162,593643,661374,436270,536554,545611,19995,668482,555604,804095,76600,315162,593643,661374,436270,536554,545611,19995,668482,555604,804095,76600,315162,593643,661374,436270,536554,545611,19995,668482,555604,804095],e.abrupt("return",t.movieArray);case 3:case"end":return e.stop()}}),n)})))()}},{key:"getQueueMovies",value:function(){var t=this;return e(M)(e(k).mark((function n(){return e(k).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j.filmsMainContainer.innerHTML="",t.movieArray=[668482,555604,76600,315162,593643,661374,436270,536554,545611,19995,668482,555604,804095,76600,315162,593643,661374,436270,536554,545611,19995,668482,555604,804095,76600,315162,593643,661374,436270,536554,545611,19995,668482,555604,804095,76600,315162,593643,661374,436270,536554,545611,19995,668482,555604,804095,76600,315162,593643],e.abrupt("return",t.movieArray);case 3:case"end":return e.stop()}}),n)})))()}},{key:"preload",value:function(){var t=this;return e(M)(e(k).mark((function n(){return e(k).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O.Loading.circle({svgColor:"red"}),e.prev=1,e.next=4,t.getQueueMovies();case 4:if(t.movieArray=e.sent,console.log(t.movieArray.length),0!==t.movieArray.length){e.next=10;break}return e.next=9,t.getWatchedMovies();case 9:t.movieArray=e.sent;case 10:if(0!==t.movieArray.length){e.next=13;break}return console.log("NO DATA"),e.abrupt("return");case 13:t.renderMovies(),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0);case 19:return e.prev=19,O.Loading.remove(),e.finish(19);case 22:case"end":return e.stop()}}),n,null,[[1,16,19,22]])})))()}},{key:"reverseArray",value:function(){this.movieArray.reverse()}},{key:"calcTotalPages",value:function(){this.totalPages=Math.ceil(this.movieArray.length/this.numberResultsPerPage)}},{key:"calcPagesData",value:function(){for(var e=[],t=0;t<Math.ceil(this.movieArray.length/this.numberResultsPerPage);t+=1)e[t]=this.movieArray.slice(t*this.numberResultsPerPage,t*this.numberResultsPerPage+this.numberResultsPerPage);this.pagesData=e.reduce((function(e,t,n){return e["page".concat(n+1)]=t,e}),{})}},{key:"renderMovies",value:function(){if(0!==this.movieArray){this.reverseArray(),this.calcTotalPages(),this.calcPagesData();var e="page".concat(this.page);!function(e){E.apply(this,arguments)}(this.pagesData[e])}else console.log(this.movieArray)}},{key:"resetAll",value:function(){this.page=1,this.totalPages=null,this.movieArray=[],this.pagesData={},this.everythingIsLoaded=!1}}]),t}();function E(){return E=e(M)(e(k).mark((function t(n){var r,i,a;return e(k).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=n.map(function(){var t=e(M)(e(k).mark((function t(n){var r;return e(k).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.get("/movie/".concat(n),D);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=4,Promise.all(r);case 4:i=t.sent,a=N(i),j.filmsMainContainer.insertAdjacentHTML("beforeend",a),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),E.apply(this,arguments)}function N(e){return e.map((function(e){return'<li class="films__item" data-id="'.concat(e.id,'">\n  <a href="" class="films__wrapper">\n    <div class="films__img-wrapper">\n      <img\n        class="films__img"\n        ').concat((t=e.poster_path,t?'src="https://image.tmdb.org/t/p/original'.concat(t,'"'):"src='./images/no-picture.png'"),'\n        alt="').concat(e.title,'"\n        loading="lazy"\n        width=\'395\' height=\'574\'\n      />\n    </div>\n\n    <div class="img__row">\n            <p>').concat(e.vote_average,"</p>\n      <p>").concat(Number.parseInt(e.release_date),'</p>\n    </div>\n\n    <div class="films__info">\n            <p class="films__name">').concat(e.title,'</p>\n\n      <p class="films__description">').concat(function(e){if(e.length<=3)return e.map((function(e){return e.name})).join(", ");var t=e.map((function(e){return e.name}));return t.splice(2,e.length-2,"Other"),t.join(", ")}(e.genres),"</p>\n    </div>\n  </a>\n</li>");var t})).join("")}var C=new R;console.log(C),{buttonsContainer:document.querySelector(".container-buttons")}.buttonsContainer.addEventListener("click",(function(e){if("watchedButton"===e.target.getAttribute("id"))return C.resetAll(),C.getWatchedMovies(),console.log(C),void C.renderMovies();if("queueButton"===e.target.getAttribute("id"))return C.resetAll(),C.getQueueMovies(),console.log(C),void C.renderMovies()})),C.resetAll(),C.preload(),window.addEventListener("scroll",e(a)((function(){C.everythingIsLoaded||document.documentElement.scrollHeight-(window.scrollY+window.innerHeight)<=400&&(C.page+=1,C.everythingIsLoaded=C.page>=C.totalPages,C.renderMovies())}),400))}();
//# sourceMappingURL=my-library.1de9260d.js.map