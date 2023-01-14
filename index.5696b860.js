!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequired7c6=a),a.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function s(e){n(o,i,a,s,u,"next",e)}function u(e){n(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),a.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new O(r||[]);return a._invoke=function(e,t,n){var r=f;return function(i,a){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw a;return A()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=E(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?h:d,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",v={};function m(){}function g(){}function y(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(N([])));k&&k!==n&&r.call(k,a)&&(b=k);var x=y.prototype=m.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function n(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function N(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:A}}function A(){return{value:t,done:!0}}return g.prototype=y,u(x,"constructor",y),u(y,"constructor",g),g.displayName=u(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},_(I.prototype),u(I.prototype,o,(function(){return this})),e.AsyncIterator=I,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new I(c(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},_(x),u(x,s,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=N,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("dIxxU",(function(t,n){e(t.exports,"default",(function(){return a("ke5Oc").default}));var r=a("ke5Oc");r.default.Axios,r.default.AxiosError,r.default.CanceledError,r.default.isCancel,r.default.CancelToken,r.default.VERSION,r.default.all,r.default.Cancel,r.default.isAxiosError,r.default.spread,r.default.toFormData,r.default.AxiosHeaders,r.default.HttpStatusCode,r.default.formToJSON,r.default.mergeConfig})),a.register("ke5Oc",(function(t,n){e(t.exports,"default",(function(){return k}));var r=a("c4C4W"),i=a("lGmLA"),o=a("9jbh3"),s=a("knWMA"),u=a("c74ni"),c=a("gipWz"),l=a("dW1zJ"),f=a("77MZz"),d=a("lXDKh"),p=a("kLR29"),h=a("12Kat"),v=a("5TB86"),m=a("9BdDr"),g=a("kv87N"),y=a("gHHim"),b=a("5siR6");var w=function e(t){var n=new(0,o.default)(t),a=(0,i.default)(o.default.prototype.request,n);return r.default.extend(a,o.default.prototype,n,{allOwnKeys:!0}),r.default.extend(a,n,null,{allOwnKeys:!0}),a.create=function(n){return e((0,s.default)(t,n))},a}(u.default);w.Axios=o.default,w.CanceledError=l.default,w.CancelToken=f.default,w.isCancel=d.default,w.VERSION=p.VERSION,w.toFormData=h.default,w.AxiosError=v.default,w.Cancel=w.CanceledError,w.all=function(e){return Promise.all(e)},w.spread=m.default,w.isAxiosError=g.default,w.mergeConfig=s.default,w.AxiosHeaders=y.default,w.formToJSON=function(e){return(0,c.default)(r.default.isHTMLForm(e)?new FormData(e):e)},w.HttpStatusCode=b.default,w.default=w;var k=w})),a.register("c4C4W",(function(r,i){e(r.exports,"default",(function(){return U}));var o,s=a("l5bVx"),u=a("lGmLA"),c=Object.prototype.toString,l=Object.getPrototypeOf,f=(o=Object.create(null),function(e){var t=c.call(e);return o[t]||(o[t]=t.slice(8,-1).toLowerCase())}),d=function(e){return e=e.toLowerCase(),function(t){return f(t)===e}},p=function(e){return function(t){return(void 0===t?"undefined":n(s)(t))===e}},h=Array.isArray,v=p("undefined");var m=d("ArrayBuffer");var g=p("string"),y=p("function"),b=p("number"),w=function(e){return null!==e&&"object"==typeof e},k=function(e){if("object"!==f(e))return!1;var t=l(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},x=d("Date"),_=d("File"),I=d("Blob"),E=d("FileList"),T=d("URLSearchParams");function S(e,t){var n,r,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.allOwnKeys,o=void 0!==a&&a;if(null!=e)if("object"!=typeof e&&(e=[e]),h(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{var s,u=o?Object.getOwnPropertyNames(e):Object.keys(e),c=u.length;for(n=0;n<c;n++)s=u[n],t.call(null,e[s],s,e)}}function O(e,t){t=t.toLowerCase();for(var n,r=Object.keys(e),i=r.length;i-- >0;)if(t===(n=r[i]).toLowerCase())return n;return null}var N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,A=function(e){return!v(e)&&e!==N};var C,R,L=(C="undefined"!=typeof Uint8Array&&l(Uint8Array),function(e){return C&&e instanceof C}),P=d("HTMLFormElement"),M=(R=Object.prototype.hasOwnProperty,function(e,t){return R.call(e,t)}),D=d("RegExp"),B=function(e,t){var n=Object.getOwnPropertyDescriptors(e),r={};S(n,(function(n,i){!1!==t(n,i,e)&&(r[i]=n)})),Object.defineProperties(e,r)},U={isArray:h,isArrayBuffer:m,isBuffer:function(e){return null!==e&&!v(e)&&null!==e.constructor&&!v(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||c.call(e)===t||y(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&m(e.buffer)},isString:g,isNumber:b,isBoolean:function(e){return!0===e||!1===e},isObject:w,isPlainObject:k,isUndefined:v,isDate:x,isFile:_,isBlob:I,isRegExp:D,isFunction:y,isStream:function(e){return w(e)&&y(e.pipe)},isURLSearchParams:T,isTypedArray:L,isFileList:E,forEach:S,merge:function e(){for(var t=(A(this)&&this||{}).caseless,n={},r=function(r,i){var a=t&&O(n,i)||i;k(n[a])&&k(r)?n[a]=e(n[a],r):k(r)?n[a]=e({},r):h(r)?n[a]=r.slice():n[a]=r},i=0,a=arguments.length;i<a;i++)arguments[i]&&S(arguments[i],r);return n},extend:function(e,t,n){var r=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).allOwnKeys;return S(t,(function(t,r){n&&y(t)?e[r]=(0,u.default)(t,n):e[r]=t}),{allOwnKeys:r}),e},trim:function(e){return e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n,r){var i,a,o,s={};if(t=t||{},null==e)return t;do{for(a=(i=Object.getOwnPropertyNames(e)).length;a-- >0;)o=i[a],r&&!r(o,e,t)||s[o]||(t[o]=e[o],s[o]=!0);e=!1!==n&&l(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:f,kindOfTest:d,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;if(h(e))return e;var t=e.length;if(!b(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},forEachEntry:function(e,t){for(var n,r=(e&&e[Symbol.iterator]).call(e);(n=r.next())&&!n.done;){var i=n.value;t.call(e,i[0],i[1])}},matchAll:function(e,t){for(var n,r=[];null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:P,hasOwnProperty:M,hasOwnProp:M,reduceDescriptors:B,freezeMethods:function(e){B(e,(function(t,n){if(y(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;var r=e[n];y(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=function(){throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:function(e,t){var n={},r=function(e){e.forEach((function(e){n[e]=!0}))};return h(e)?r(e):r(String(e).split(t)),n},toCamelCase:function(e){return e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n}))},noop:function(){},toFiniteNumber:function(e,t){return e=+e,Number.isFinite(e)?e:t},findKey:O,global:N,isContextDefined:A,toJSONObject:function(e){var t=new Array(10),n=function(e,r){if(w(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;var i=h(e)?[]:{};return S(e,(function(e,t){var a=n(e,r+1);!v(a)&&(i[t]=a)})),t[r]=void 0,i}}return e};return n(e,0)}}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("lGmLA",(function(t,n){function r(e,t){return function(){return e.apply(t,arguments)}}e(t.exports,"default",(function(){return r}))})),a.register("9jbh3",(function(t,r){e(t.exports,"default",(function(){return g}));var i=a("8MBJY"),o=a("a2hTj"),s=a("c4C4W"),u=a("6d5Pb"),c=a("JRZh2"),l=a("k04r0"),f=a("knWMA"),d=a("gYMA1"),p=a("9SeBc"),h=a("gHHim"),v=p.default.validators,m=function(){function e(t){n(i)(this,e),this.defaults=t,this.interceptors={request:new(0,c.default),response:new(0,c.default)}}return n(o)(e,[{key:"request",value:function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{};var n,r=(t=(0,f.default)(this.defaults,t)).transitional,i=t.paramsSerializer,a=t.headers;void 0!==r&&p.default.assertOptions(r,{silentJSONParsing:v.transitional(v.boolean),forcedJSONParsing:v.transitional(v.boolean),clarifyTimeoutError:v.transitional(v.boolean)},!1),void 0!==i&&p.default.assertOptions(i,{encode:v.function,serialize:v.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),(n=a&&s.default.merge(a.common,a[t.method]))&&s.default.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete a[e]})),t.headers=h.default.concat(n,a);var o=[],u=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(u=u&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));var c,d=[];this.interceptors.response.forEach((function(e){d.push(e.fulfilled,e.rejected)}));var m,g=0;if(!u){var y=[l.default.bind(this),void 0];for(y.unshift.apply(y,o),y.push.apply(y,d),m=y.length,c=Promise.resolve(t);g<m;)c=c.then(y[g++],y[g++]);return c}m=o.length;var b=t;for(g=0;g<m;){var w=o[g++],k=o[g++];try{b=w(b)}catch(e){k.call(this,e);break}}try{c=l.default.call(this,b)}catch(e){return Promise.reject(e)}for(g=0,m=d.length;g<m;)c=c.then(d[g++],d[g++]);return c}},{key:"getUri",value:function(e){e=(0,f.default)(this.defaults,e);var t=(0,d.default)(e.baseURL,e.url);return(0,u.default)(t,e.params,e.paramsSerializer)}}]),e}();s.default.forEach(["delete","get","head","options"],(function(e){m.prototype[e]=function(t,n){return this.request((0,f.default)(n||{},{method:e,url:t,data:(n||{}).data}))}})),s.default.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request((0,f.default)(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}m.prototype[e]=t(),m.prototype[e+"Form"]=t(!0)}));var g=m})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),a.register("6d5Pb",(function(t,n){e(t.exports,"default",(function(){return s}));var r=a("c4C4W"),i=a("8zJup");function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function s(e,t,n){if(!t)return e;var a,s=n&&n.encode||o,u=n&&n.serialize;if(a=u?u(t,n):r.default.isURLSearchParams(t)?t.toString():new(0,i.default)(t,n).toString(s)){var c=e.indexOf("#");-1!==c&&(e=e.slice(0,c)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}})),a.register("8zJup",(function(t,n){e(t.exports,"default",(function(){return u}));var r=a("12Kat");function i(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function o(e,t){this._pairs=[],e&&(0,r.default)(e,this,t)}var s=o.prototype;s.append=function(e,t){this._pairs.push([e,t])},s.toString=function(e){var t=e?function(t){return e.call(this,t,i)}:i;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var u=o})),a.register("12Kat",(function(t,n){e(t.exports,"default",(function(){return d}));var r=a("c4C4W"),i=a("5TB86"),o=a("h7mVc"),s=a("3aNd6").Buffer;function u(e){return r.default.isPlainObject(e)||r.default.isArray(e)}function c(e){return r.default.endsWith(e,"[]")?e.slice(0,-2):e}function l(e,t,n){return e?e.concat(t).map((function(e,t){return e=c(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}var f=r.default.toFlatObject(r.default,{},null,(function(e){return/^is[A-Z]/.test(e)}));var d=function(e,t,n){if(!r.default.isObject(e))throw new TypeError("target must be an object");t=t||new(o.default||FormData);var a,d=(n=r.default.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!r.default.isUndefined(t[e])}))).metaTokens,p=n.visitor||y,h=n.dots,v=n.indexes,m=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((a=t)&&r.default.isFunction(a.append)&&"FormData"===a[Symbol.toStringTag]&&a[Symbol.iterator]);if(!r.default.isFunction(p))throw new TypeError("visitor must be a function");function g(e){if(null===e)return"";if(r.default.isDate(e))return e.toISOString();if(!m&&r.default.isBlob(e))throw new(0,i.default)("Blob is not supported. Use a Buffer instead.");return r.default.isArrayBuffer(e)||r.default.isTypedArray(e)?m&&"function"==typeof Blob?new Blob([e]):s.from(e):e}function y(e,n,i){var a=e;if(e&&!i&&"object"==typeof e)if(r.default.endsWith(n,"{}"))n=d?n:n.slice(0,-2),e=JSON.stringify(e);else if(r.default.isArray(e)&&function(e){return r.default.isArray(e)&&!e.some(u)}(e)||r.default.isFileList(e)||r.default.endsWith(n,"[]")&&(a=r.default.toArray(e)))return n=c(n),a.forEach((function(e,i){!r.default.isUndefined(e)&&null!==e&&t.append(!0===v?l([n],i,h):null===v?n:n+"[]",g(e))})),!1;return!!u(e)||(t.append(l(i,n,h),g(e)),!1)}var b=[],w=Object.assign(f,{defaultVisitor:y,convertValue:g,isVisitable:u});if(!r.default.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!r.default.isUndefined(n)){if(-1!==b.indexOf(n))throw Error("Circular reference detected in "+i.join("."));b.push(n),r.default.forEach(n,(function(n,a){!0===(!(r.default.isUndefined(n)||null===n)&&p.call(t,n,r.default.isString(a)?a.trim():a,i,w))&&e(n,i?i.concat(a):[a])})),b.pop()}}(e),t}})),a.register("5TB86",(function(t,n){e(t.exports,"default",(function(){return u}));var r=a("c4C4W");function i(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}r.default.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r.default.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var o=i.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((function(e){s[e]={value:e}})),Object.defineProperties(i,s),Object.defineProperty(o,"isAxiosError",{value:!0}),i.from=function(e,t,n,a,s,u){var c=Object.create(o);return r.default.toFlatObject(e,c,(function(e){return e!==Error.prototype}),(function(e){return"isAxiosError"!==e})),i.call(c,e.message,t,n,a,s),c.cause=e,c.name=e.name,u&&Object.assign(c,u),c};var u=i})),a.register("h7mVc",(function(t,r){e(t.exports,"default",(function(){return i}));var i=n(a("4mzCO"))})),a.register("4mzCO",(function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData})),a.register("3aNd6",(function(t,r){e(t.exports,"Buffer",(function(){return i}),(function(e){return i=e})),e(t.exports,"INSPECT_MAX_BYTES",(function(){return o}),(function(e){return o=e}));var i,o,s=a("ds8z5"),u=a("8MBJY"),c=a("a2hTj"),l=a("eYQtU"),f=a("l5bVx"),d=a("2MbLg"),p=a("5d11t"),h=a("7rddL"),v="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=y,o=50;var m=2147483647;function g(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,y.prototype),t}function y(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return b(e,t,n)}function b(e,t,r){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!y.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var n=0|E(e,t),r=g(n),i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(ae(e,Uint8Array)){var t=new Uint8Array(e);return _(t.buffer,t.byteOffset,t.byteLength)}return x(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===e?"undefined":n(f)(e)));if(ae(e,ArrayBuffer)||e&&ae(e.buffer,ArrayBuffer))return _(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&(ae(e,SharedArrayBuffer)||e&&ae(e.buffer,SharedArrayBuffer)))return _(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return y.from(i,t,r);var a=function(e){if(y.isBuffer(e)){var t=0|I(e.length),n=g(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||oe(e.length)?g(0):x(e);if("Buffer"===e.type&&Array.isArray(e.data))return x(e.data)}(e);if(a)return a;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return y.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===e?"undefined":n(f)(e)))}function w(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function k(e){return w(e),g(e<0?0:0|I(e))}function x(e){for(var t=e.length<0?0:0|I(e.length),n=g(t),r=0;r<t;r+=1)n[r]=255&e[r];return n}function _(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,y.prototype),r}function I(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return 0|e}function E(e,t){if(y.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ae(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+(void 0===e?"undefined":n(f)(e)));var r=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===r)return 0;for(var a=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return ne(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return re(e).length;default:if(a)return i?-1:ne(e).length;t=(""+t).toLowerCase(),a=!0}}function T(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return F(this,t,n);case"utf8":case"utf-8":return D(this,t,n);case"ascii":return U(this,t,n);case"latin1":case"binary":return j(this,t,n);case"base64":return M(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return z(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function S(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function O(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),oe(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=y.from(t,r)),y.isBuffer(t))return 0===t.length?-1:N(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):N(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function N(e,t,n,r,i){var a,o=1,s=e.length,u=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;o=2,s/=2,u/=2,n/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){var l=-1;for(a=n;a<s;a++)if(c(e,a)===c(t,-1===l?0:a-l)){if(-1===l&&(l=a),a-l+1===u)return l*o}else-1!==l&&(a-=a-l),l=-1}else for(n+u>s&&(n=s-u),a=n;a>=0;a--){for(var f=!0,d=0;d<u;d++)if(c(e,a+d)!==c(t,d)){f=!1;break}if(f)return a}return-1}function A(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var a,o=t.length;for(r>o/2&&(r=o/2),a=0;a<r;++a){var s=parseInt(t.substr(2*a,2),16);if(oe(s))return a;e[n+a]=s}return a}function C(e,t,n,r){return ie(ne(t,e.length-n),e,n,r)}function R(e,t,n,r){return ie(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function L(e,t,n,r){return ie(re(t),e,n,r)}function P(e,t,n,r){return ie(function(e,t){for(var n,r,i,a=[],o=0;o<e.length&&!((t-=2)<0);++o)r=(n=e.charCodeAt(o))>>8,i=n%256,a.push(i),a.push(r);return a}(t,e.length-n),e,n,r)}function M(e,t,n){return 0===t&&n===e.length?p.fromByteArray(e):p.fromByteArray(e.slice(t,n))}function D(e,t,n){n=Math.min(e.length,n);for(var r=[],i=t;i<n;){var a=e[i],o=null,s=a>239?4:a>223?3:a>191?2:1;if(i+s<=n){var u=void 0,c=void 0,l=void 0,f=void 0;switch(s){case 1:a<128&&(o=a);break;case 2:128==(192&(u=e[i+1]))&&(f=(31&a)<<6|63&u)>127&&(o=f);break;case 3:u=e[i+1],c=e[i+2],128==(192&u)&&128==(192&c)&&(f=(15&a)<<12|(63&u)<<6|63&c)>2047&&(f<55296||f>57343)&&(o=f);break;case 4:u=e[i+1],c=e[i+2],l=e[i+3],128==(192&u)&&128==(192&c)&&128==(192&l)&&(f=(15&a)<<18|(63&u)<<12|(63&c)<<6|63&l)>65535&&f<1114112&&(o=f)}}null===o?(o=65533,s=1):o>65535&&(o-=65536,r.push(o>>>10&1023|55296),o=56320|1023&o),r.push(o),i+=s}return function(e){var t=e.length;if(t<=B)return String.fromCharCode.apply(String,e);var n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=B));return n}(r)}y.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),y.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(y.prototype,"parent",{enumerable:!0,get:function(){if(y.isBuffer(this))return this.buffer}}),Object.defineProperty(y.prototype,"offset",{enumerable:!0,get:function(){if(y.isBuffer(this))return this.byteOffset}}),y.poolSize=8192,y.from=function(e,t,n){return b(e,t,n)},Object.setPrototypeOf(y.prototype,Uint8Array.prototype),Object.setPrototypeOf(y,Uint8Array),y.alloc=function(e,t,n){return function(e,t,n){return w(e),e<=0?g(e):void 0!==t?"string"==typeof n?g(e).fill(t,n):g(e).fill(t):g(e)}(e,t,n)},y.allocUnsafe=function(e){return k(e)},y.allocUnsafeSlow=function(e){return k(e)},y.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==y.prototype},y.compare=function(e,t){if(ae(e,Uint8Array)&&(e=y.from(e,e.offset,e.byteLength)),ae(t,Uint8Array)&&(t=y.from(t,t.offset,t.byteLength)),!y.isBuffer(e)||!y.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var n=e.length,r=t.length,i=0,a=Math.min(n,r);i<a;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},y.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},y.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return y.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=y.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){var a=e[n];if(ae(a,Uint8Array))i+a.length>r.length?(y.isBuffer(a)||(a=y.from(a)),a.copy(r,i)):Uint8Array.prototype.set.call(r,a,i);else{if(!y.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(r,i)}i+=a.length}return r},y.byteLength=E,y.prototype._isBuffer=!0,y.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)S(this,t,t+1);return this},y.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)S(this,t,t+3),S(this,t+1,t+2);return this},y.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)S(this,t,t+7),S(this,t+1,t+6),S(this,t+2,t+5),S(this,t+3,t+4);return this},y.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?D(this,0,e):T.apply(this,arguments)},y.prototype.toLocaleString=y.prototype.toString,y.prototype.equals=function(e){if(!y.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===y.compare(this,e)},y.prototype.inspect=function(){var e="",t=o;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},v&&(y.prototype[v]=y.prototype.inspect),y.prototype.compare=function(e,t,r,i,a){if(ae(e,Uint8Array)&&(e=y.from(e,e.offset,e.byteLength)),!y.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+(void 0===e?"undefined":n(f)(e)));if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===i&&(i=0),void 0===a&&(a=this.length),t<0||r>e.length||i<0||a>this.length)throw new RangeError("out of range index");if(i>=a&&t>=r)return 0;if(i>=a)return-1;if(t>=r)return 1;if(this===e)return 0;for(var o=(a>>>=0)-(i>>>=0),s=(r>>>=0)-(t>>>=0),u=Math.min(o,s),c=this.slice(i,a),l=e.slice(t,r),d=0;d<u;++d)if(c[d]!==l[d]){o=c[d],s=l[d];break}return o<s?-1:s<o?1:0},y.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},y.prototype.indexOf=function(e,t,n){return O(this,e,t,n,!0)},y.prototype.lastIndexOf=function(e,t,n){return O(this,e,t,n,!1)},y.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var a=!1;;)switch(r){case"hex":return A(this,e,t,n);case"utf8":case"utf-8":return C(this,e,t,n);case"ascii":case"latin1":case"binary":return R(this,e,t,n);case"base64":return L(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,e,t,n);default:if(a)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),a=!0}},y.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var B=4096;function U(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function j(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function F(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var i="",a=t;a<n;++a)i+=se[e[a]];return i}function z(e,t,n){for(var r=e.slice(t,n),i="",a=0;a<r.length-1;a+=2)i+=String.fromCharCode(r[a]+256*r[a+1]);return i}function W(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function H(e,t,n,r,i,a){if(!y.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<a)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function V(e,t,n,r,i){Q(t,r,i,e,n,7);var a=Number(t&BigInt(4294967295));e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a;var o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function q(e,t,n,r,i){Q(t,r,i,e,n,7);var a=Number(t&BigInt(4294967295));e[n+7]=a,a>>=8,e[n+6]=a,a>>=8,e[n+5]=a,a>>=8,e[n+4]=a;var o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function K(e,t,n,r,i,a){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function J(e,t,n,r,i){return t=+t,n>>>=0,i||K(e,0,n,4),h.write(e,t,n,r,23,4),n+4}function G(e,t,n,r,i){return t=+t,n>>>=0,i||K(e,0,n,8),h.write(e,t,n,r,52,8),n+8}y.prototype.slice=function(e,t){var n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);var r=this.subarray(e,t);return Object.setPrototypeOf(r,y.prototype),r},y.prototype.readUintLE=y.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||W(e,t,this.length);for(var r=this[e],i=1,a=0;++a<t&&(i*=256);)r+=this[e+a]*i;return r},y.prototype.readUintBE=y.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||W(e,t,this.length);for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i;return r},y.prototype.readUint8=y.prototype.readUInt8=function(e,t){return e>>>=0,t||W(e,1,this.length),this[e]},y.prototype.readUint16LE=y.prototype.readUInt16LE=function(e,t){return e>>>=0,t||W(e,2,this.length),this[e]|this[e+1]<<8},y.prototype.readUint16BE=y.prototype.readUInt16BE=function(e,t){return e>>>=0,t||W(e,2,this.length),this[e]<<8|this[e+1]},y.prototype.readUint32LE=y.prototype.readUInt32LE=function(e,t){return e>>>=0,t||W(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},y.prototype.readUint32BE=y.prototype.readUInt32BE=function(e,t){return e>>>=0,t||W(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},y.prototype.readBigUInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24),i=this[++e]+256*this[++e]+65536*this[++e]+n*Math.pow(2,24);return BigInt(r)+(BigInt(i)<<BigInt(32))})),y.prototype.readBigUInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=t*Math.pow(2,24)+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),y.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||W(e,t,this.length);for(var r=this[e],i=1,a=0;++a<t&&(i*=256);)r+=this[e+a]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r},y.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||W(e,t,this.length);for(var r=t,i=1,a=this[e+--r];r>0&&(i*=256);)a+=this[e+--r]*i;return a>=(i*=128)&&(a-=Math.pow(2,8*t)),a},y.prototype.readInt8=function(e,t){return e>>>=0,t||W(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},y.prototype.readInt16LE=function(e,t){e>>>=0,t||W(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},y.prototype.readInt16BE=function(e,t){e>>>=0,t||W(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},y.prototype.readInt32LE=function(e,t){return e>>>=0,t||W(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},y.prototype.readInt32BE=function(e,t){return e>>>=0,t||W(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},y.prototype.readBigInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24))})),y.prototype.readBigInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],n=this[e+7];void 0!==t&&void 0!==n||ee(e,this.length-8);var r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+n)})),y.prototype.readFloatLE=function(e,t){return e>>>=0,t||W(e,4,this.length),h.read(this,e,!0,23,4)},y.prototype.readFloatBE=function(e,t){return e>>>=0,t||W(e,4,this.length),h.read(this,e,!1,23,4)},y.prototype.readDoubleLE=function(e,t){return e>>>=0,t||W(e,8,this.length),h.read(this,e,!0,52,8)},y.prototype.readDoubleBE=function(e,t){return e>>>=0,t||W(e,8,this.length),h.read(this,e,!1,52,8)},y.prototype.writeUintLE=y.prototype.writeUIntLE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||H(this,e,t,n,Math.pow(2,8*n)-1,0);var i=1,a=0;for(this[t]=255&e;++a<n&&(i*=256);)this[t+a]=e/i&255;return t+n},y.prototype.writeUintBE=y.prototype.writeUIntBE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||H(this,e,t,n,Math.pow(2,8*n)-1,0);var i=n-1,a=1;for(this[t+i]=255&e;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+n},y.prototype.writeUint8=y.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,1,255,0),this[t]=255&e,t+1},y.prototype.writeUint16LE=y.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},y.prototype.writeUint16BE=y.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},y.prototype.writeUint32LE=y.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},y.prototype.writeUint32BE=y.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},y.prototype.writeBigUInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return V(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),y.prototype.writeBigUInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return q(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),y.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);H(this,e,t,n,i-1,-i)}var a=0,o=1,s=0;for(this[t]=255&e;++a<n&&(o*=256);)e<0&&0===s&&0!==this[t+a-1]&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+n},y.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);H(this,e,t,n,i-1,-i)}var a=n-1,o=1,s=0;for(this[t+a]=255&e;--a>=0&&(o*=256);)e<0&&0===s&&0!==this[t+a+1]&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+n},y.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},y.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},y.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},y.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},y.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||H(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},y.prototype.writeBigInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return V(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),y.prototype.writeBigInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return q(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),y.prototype.writeFloatLE=function(e,t,n){return J(this,e,t,!0,n)},y.prototype.writeFloatBE=function(e,t,n){return J(this,e,t,!1,n)},y.prototype.writeDoubleLE=function(e,t,n){return G(this,e,t,!0,n)},y.prototype.writeDoubleBE=function(e,t,n){return G(this,e,t,!1,n)},y.prototype.copy=function(e,t,n,r){if(!y.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},y.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!y.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){var i=e.charCodeAt(0);("utf8"===r&&i<128||"latin1"===r)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var a;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(a=t;a<n;++a)this[a]=e;else{var o=y.isBuffer(e)?e:y.from(e,r),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<n-t;++a)this[a+t]=o[a%s]}return this};var X={};function Y(e,t,r){X[e]=function(r){n(l)(a,r);var i=n(d)(a);function a(){var r;return n(u)(this,a),r=i.call(this),Object.defineProperty(n(s)(r),"message",{value:t.apply(n(s)(r),arguments),writable:!0,configurable:!0}),r.name="".concat(r.name," [").concat(e,"]"),r.stack,delete r.name,r}return n(c)(a,[{key:"code",get:function(){return e},set:function(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}},{key:"toString",value:function(){return"".concat(this.name," [").concat(e,"]: ").concat(this.message)}}]),a}(r)}function $(e){for(var t="",n=e.length,r="-"===e[0]?1:0;n>=r+4;n-=3)t="_".concat(e.slice(n-3,n)).concat(t);return"".concat(e.slice(0,n)).concat(t)}function Q(e,t,r,i,a,o){if(e>r||e<t){var s,u="bigint"===(void 0===t?"undefined":n(f)(t))?"n":"";throw s=o>3?0===t||t===BigInt(0)?">= 0".concat(u," and < 2").concat(u," ** ").concat(8*(o+1)).concat(u):">= -(2".concat(u," ** ").concat(8*(o+1)-1).concat(u,") and < 2 ** ")+"".concat(8*(o+1)-1).concat(u):">= ".concat(t).concat(u," and <= ").concat(r).concat(u),new X.ERR_OUT_OF_RANGE("value",s,e)}!function(e,t,n){Z(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||ee(t,e.length-(n+1))}(i,a,o)}function Z(e,t){if("number"!=typeof e)throw new X.ERR_INVALID_ARG_TYPE(t,"number",e)}function ee(e,t,n){if(Math.floor(e)!==e)throw Z(e,n),new X.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new X.ERR_BUFFER_OUT_OF_BOUNDS;throw new X.ERR_OUT_OF_RANGE(n||"offset",">= ".concat(n?1:0," and <= ").concat(t),e)}Y("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?"".concat(e," is outside of buffer bounds"):"Attempt to access memory outside buffer bounds"}),RangeError),Y("ERR_INVALID_ARG_TYPE",(function(e,t){return'The "'.concat(e,'" argument must be of type number. Received type ').concat(void 0===t?"undefined":n(f)(t))}),TypeError),Y("ERR_OUT_OF_RANGE",(function(e,t,r){var i='The value of "'.concat(e,'" is out of range.'),a=r;return Number.isInteger(r)&&Math.abs(r)>Math.pow(2,32)?a=$(String(r)):"bigint"===(void 0===r?"undefined":n(f)(r))&&(a=String(r),(r>Math.pow(BigInt(2),BigInt(32))||r<-Math.pow(BigInt(2),BigInt(32)))&&(a=$(a)),a+="n"),i+=" It must be ".concat(t,". Received ").concat(a)}),RangeError);var te=/[^+/0-9A-Za-z-_]/g;function ne(e,t){var n;t=t||1/0;for(var r=e.length,i=null,a=[],o=0;o<r;++o){if((n=e.charCodeAt(o))>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&a.push(239,191,189);continue}if(o+1===r){(t-=3)>-1&&a.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&a.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&a.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;a.push(n)}else if(n<2048){if((t-=2)<0)break;a.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;a.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;a.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return a}function re(e){return p.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(te,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function ie(e,t,n,r){var i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function ae(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function oe(e){return e!=e}var se=function(){for(var e="0123456789abcdef",t=new Array(256),n=0;n<16;++n)for(var r=16*n,i=0;i<16;++i)t[r+i]=e[n]+e[i];return t}();function ue(e){return"undefined"==typeof BigInt?ce:e}function ce(){throw new Error("BigInt not supported")}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n}})),a.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,a=r.default(e);if(t){var o=r.default(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return i.default(this,n)}};var n=o(a("aTHs7")),r=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(a("ds8z5")),r=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("5d11t",(function(t,n){var r,i;e(t.exports,"toByteArray",(function(){return r}),(function(e){return r=e})),e(t.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),r=function(e){var t,n,r=f(e),i=r[0],a=r[1],u=new s(function(e,t,n){return 3*(t+n)/4-n}(0,i,a)),c=0,l=a>0?i-4:i;for(n=0;n<l;n+=4)t=o[e.charCodeAt(n)]<<18|o[e.charCodeAt(n+1)]<<12|o[e.charCodeAt(n+2)]<<6|o[e.charCodeAt(n+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===a&&(t=o[e.charCodeAt(n)]<<2|o[e.charCodeAt(n+1)]>>4,u[c++]=255&t);1===a&&(t=o[e.charCodeAt(n)]<<10|o[e.charCodeAt(n+1)]<<4|o[e.charCodeAt(n+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},i=function(e){for(var t,n=e.length,r=n%3,i=[],o=16383,s=0,u=n-r;s<u;s+=o)i.push(d(e,s,s+o>u?u:s+o));1===r?(t=e[n-1],i.push(a[t>>2]+a[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(a[t>>10]+a[t>>4&63]+a[t<<2&63]+"="));return i.join("")};for(var a=[],o=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)a[c]=u[c],o[u.charCodeAt(c)]=c;function f(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function d(e,t,n){for(var r,i,o=[],s=t;s<n;s+=3)r=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),o.push(a[(i=r)>>18&63]+a[i>>12&63]+a[i>>6&63]+a[63&i]);return o.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63})),a.register("7rddL",(function(t,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var r,i;e(t.exports,"read",(function(){return r}),(function(e){return r=e})),e(t.exports,"write",(function(){return i}),(function(e){return i=e})),r=function(e,t,n,r,i){var a,o,s=8*i-r-1,u=(1<<s)-1,c=u>>1,l=-7,f=n?i-1:0,d=n?-1:1,p=e[t+f];for(f+=d,a=p&(1<<-l)-1,p>>=-l,l+=s;l>0;a=256*a+e[t+f],f+=d,l-=8);for(o=a&(1<<-l)-1,a>>=-l,l+=r;l>0;o=256*o+e[t+f],f+=d,l-=8);if(0===a)a=1-c;else{if(a===u)return o?NaN:1/0*(p?-1:1);o+=Math.pow(2,r),a-=c}return(p?-1:1)*o*Math.pow(2,a-r)},i=function(e,t,n,r,i,a){var o,s,u,c=8*a-i-1,l=(1<<c)-1,f=l>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:a-1,h=r?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-o))<1&&(o--,u*=2),(t+=o+f>=1?d/u:d*Math.pow(2,1-f))*u>=2&&(o++,u/=2),o+f>=l?(s=0,o=l):o+f>=1?(s=(t*u-1)*Math.pow(2,i),o+=f):(s=t*Math.pow(2,f-1)*Math.pow(2,i),o=0));i>=8;e[n+p]=255&s,p+=h,s/=256,i-=8);for(o=o<<i|s,c+=i;c>0;e[n+p]=255&o,p+=h,o/=256,c-=8);e[n+p-h]|=128*v}})),a.register("JRZh2",(function(t,r){e(t.exports,"default",(function(){return u}));var i=a("8MBJY"),o=a("a2hTj"),s=a("c4C4W"),u=function(){function e(){n(i)(this,e),this.handlers=[]}return n(o)(e,[{key:"use",value:function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(e){this.handlers[e]&&(this.handlers[e]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(e){s.default.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}]),e}()})),a.register("k04r0",(function(t,n){e(t.exports,"default",(function(){return f}));var r=a("jrAxF"),i=a("lXDKh"),o=a("c74ni"),s=a("dW1zJ"),u=a("gHHim"),c=a("fA43c");function l(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new(0,s.default)(null,e)}function f(e){return l(e),e.headers=u.default.from(e.headers),e.data=r.default.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),c.default.getAdapter(e.adapter||o.default.adapter)(e).then((function(t){return l(e),t.data=r.default.call(e,e.transformResponse,t),t.headers=u.default.from(t.headers),t}),(function(t){return(0,i.default)(t)||(l(e),t&&t.response&&(t.response.data=r.default.call(e,e.transformResponse,t.response),t.response.headers=u.default.from(t.response.headers))),Promise.reject(t)}))}})),a.register("jrAxF",(function(t,n){e(t.exports,"default",(function(){return s}));var r=a("c4C4W"),i=a("c74ni"),o=a("gHHim");function s(e,t){var n=this||i.default,a=t||n,s=o.default.from(a.headers),u=a.data;return r.default.forEach(e,(function(e){u=e.call(n,u,s.normalize(),t?t.status:void 0)})),s.normalize(),u}})),a.register("c74ni",(function(t,n){e(t.exports,"default",(function(){return p}));var r=a("c4C4W"),i=a("5TB86"),o=a("gWbUy"),s=a("12Kat"),u=a("4ue3z"),c=a("d0XKg"),l=a("gipWz"),f={"Content-Type":void 0};var d={transitional:o.default,adapter:["xhr","http"],transformRequest:[function(e,t){var n,i=t.getContentType()||"",a=i.indexOf("application/json")>-1,o=r.default.isObject(e);if(o&&r.default.isHTMLForm(e)&&(e=new FormData(e)),r.default.isFormData(e))return a&&a?JSON.stringify((0,l.default)(e)):e;if(r.default.isArrayBuffer(e)||r.default.isBuffer(e)||r.default.isStream(e)||r.default.isFile(e)||r.default.isBlob(e))return e;if(r.default.isArrayBufferView(e))return e.buffer;if(r.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(o){if(i.indexOf("application/x-www-form-urlencoded")>-1)return(0,u.default)(e,this.formSerializer).toString();if((n=r.default.isFileList(e))||i.indexOf("multipart/form-data")>-1){var c=this.env&&this.env.FormData;return(0,s.default)(n?{"files[]":e}:e,c&&new c,this.formSerializer)}}return o||a?(t.setContentType("application/json",!1),function(e,t,n){if(r.default.isString(e))try{return(t||JSON.parse)(e),r.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||d.transitional,n=t&&t.forcedJSONParsing,a="json"===this.responseType;if(e&&r.default.isString(e)&&(n&&!this.responseType||a)){var o=!(t&&t.silentJSONParsing)&&a;try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw i.default.from(e,i.default.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:c.default.classes.FormData,Blob:c.default.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.default.forEach(["delete","get","head"],(function(e){d.headers[e]={}})),r.default.forEach(["post","put","patch"],(function(e){d.headers[e]=r.default.merge(f)}));var p=d})),a.register("gWbUy",(function(t,n){e(t.exports,"default",(function(){return r}));var r={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),a.register("4ue3z",(function(t,n){e(t.exports,"default",(function(){return s}));var r=a("c4C4W"),i=a("12Kat"),o=a("d0XKg");function s(e,t){return(0,i.default)(e,new o.default.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return o.default.isNode&&r.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}})),a.register("d0XKg",(function(t,n){e(t.exports,"default",(function(){return c}));var r,i=a("i5Hs4"),o=a("aIGDF"),s=("undefined"==typeof navigator||"ReactNative"!==(r=navigator.product)&&"NativeScript"!==r&&"NS"!==r)&&"undefined"!=typeof window&&"undefined"!=typeof document,u="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,c={isBrowser:!0,classes:{URLSearchParams:i.default,FormData:o.default,Blob:Blob},isStandardBrowserEnv:s,isStandardBrowserWebWorkerEnv:u,protocols:["http","https","file","blob","url","data"]}})),a.register("i5Hs4",(function(t,n){e(t.exports,"default",(function(){return i}));var r=a("8zJup"),i="undefined"!=typeof URLSearchParams?URLSearchParams:r.default})),a.register("aIGDF",(function(t,n){e(t.exports,"default",(function(){return r}));var r=FormData})),a.register("gipWz",(function(t,n){e(t.exports,"default",(function(){return i}));var r=a("c4C4W");var i=function(e){function t(e,n,i,a){var o=e[a++],s=Number.isFinite(+o),u=a>=e.length;return o=!o&&r.default.isArray(i)?i.length:o,u?(r.default.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!s):(i[o]&&r.default.isObject(i[o])||(i[o]=[]),t(e,n,i[o],a)&&r.default.isArray(i[o])&&(i[o]=function(e){var t,n,r={},i=Object.keys(e),a=i.length;for(t=0;t<a;t++)r[n=i[t]]=e[n];return r}(i[o])),!s)}if(r.default.isFormData(e)&&r.default.isFunction(e.entries)){var n={};return r.default.forEachEntry(e,(function(e,i){t(function(e){return r.default.matchAll(/\w+|\[(\w*)]/g,e).map((function(e){return"[]"===e[0]?"":e[1]||e[0]}))}(e),i,n,0)})),n}return null}})),a.register("gHHim",(function(t,r){e(t.exports,"default",(function(){return y}));var i=a("8MBJY"),o=a("a2hTj"),s=a("1t1Wn"),u=a("8nrFW"),c=a("c4C4W"),l=a("1nUSP"),f=Symbol("internals");function d(e){return e&&String(e).trim().toLowerCase()}function p(e){return!1===e||null==e?e:c.default.isArray(e)?e.map(p):String(e)}function h(e,t,n,r){return c.default.isFunction(r)?r.call(this,t,n):c.default.isString(t)?c.default.isString(r)?-1!==t.indexOf(r):c.default.isRegExp(r)?r.test(t):void 0:void 0}var v=Symbol.iterator,m=Symbol.toStringTag,g=function(){function e(t){n(i)(this,e),t&&this.set(t)}return n(o)(e,[{key:"set",value:function(e,t,n){var r=this;function i(e,t,n){var i=d(t);if(!i)throw new Error("header name must be a non-empty string");var a=c.default.findKey(r,i);(!a||void 0===r[a]||!0===n||void 0===n&&!1!==r[a])&&(r[a||t]=p(e))}var a=function(e,t){return c.default.forEach(e,(function(e,n){return i(e,n,t)}))};return c.default.isPlainObject(e)||e instanceof this.constructor?a(e,t):c.default.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?a((0,l.default)(e),t):null!=e&&i(t,e,n),this}},{key:"get",value:function(e,t){if(e=d(e)){var n=c.default.findKey(this,e);if(n){var r=this[n];if(!t)return r;if(!0===t)return function(e){for(var t,n=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;t=r.exec(e);)n[t[1]]=t[2];return n}(r);if(c.default.isFunction(t))return t.call(this,r,n);if(c.default.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(e,t){if(e=d(e)){var n=c.default.findKey(this,e);return!(!n||t&&!h(0,this[n],n,t))}return!1}},{key:"delete",value:function(e,t){var n=this,r=!1;function i(e){if(e=d(e)){var i=c.default.findKey(n,e);!i||t&&!h(0,n[i],i,t)||(delete n[i],r=!0)}}return c.default.isArray(e)?e.forEach(i):i(e),r}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(e){var t=this,n={};return c.default.forEach(this,(function(r,i){var a=c.default.findKey(n,i);if(a)return t[a]=p(r),void delete t[i];var o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n}))}(i):String(i).trim();o!==i&&delete t[i],t[o]=p(r),n[o]=!0})),this}},{key:"concat",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var i;return(i=this.constructor).concat.apply(i,[this].concat(n(u)(t)))}},{key:"toJSON",value:function(e){var t=Object.create(null);return c.default.forEach(this,(function(n,r){null!=n&&!1!==n&&(t[r]=e&&c.default.isArray(n)?n.join(", "):n)})),t}},{key:v,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map((function(e){var t=n(s)(e,2);return t[0]+": "+t[1]})).join("\n")}},{key:m,get:function(){return"AxiosHeaders"}}],[{key:"from",value:function(e){return e instanceof this?e:new this(e)}},{key:"concat",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=new this(e);return n.forEach((function(e){return i.set(e)})),i}},{key:"accessor",value:function(e){var t=(this[f]=this[f]={accessors:{}}).accessors,n=this.prototype;function r(e){var r=d(e);t[r]||(!function(e,t){var n=c.default.toCamelCase(" "+t);["get","set","has"].forEach((function(r){Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[r]=!0)}return c.default.isArray(e)?e.forEach(r):r(e),this}}]),e}();g.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),c.default.freezeMethods(g.prototype),c.default.freezeMethods(g);var y=g})),a.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||r.default(e,t)||o.default(e,t)||i.default()};var n=s(a("8slrw")),r=s(a("7AJDX")),i=s(a("ifqQW")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||o.default(e)||i.default()};var n=s(a("kMC0W")),r=s(a("7AJDX")),i=s(a("8CtQK")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("1nUSP",(function(t,n){e(t.exports,"default",(function(){return i}));var r=a("c4C4W").default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),i=function(e){var t,n,i,a={};return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),t=e.substring(0,i).trim().toLowerCase(),n=e.substring(i+1).trim(),!t||a[t]&&r[t]||("set-cookie"===t?a[t]?a[t].push(n):a[t]=[n]:a[t]=a[t]?a[t]+", "+n:n)})),a}})),a.register("lXDKh",(function(t,n){function r(e){return!(!e||!e.__CANCEL__)}e(t.exports,"default",(function(){return r}))})),a.register("dW1zJ",(function(t,n){e(t.exports,"default",(function(){return o}));var r=a("5TB86");function i(e,t,n){r.default.call(this,null==e?"canceled":e,r.default.ERR_CANCELED,t,n),this.name="CanceledError"}a("c4C4W").default.inherits(i,r.default,{__CANCEL__:!0});var o=i})),a.register("fA43c",(function(t,n){e(t.exports,"default",(function(){return c}));var r=a("c4C4W"),i=a("beknR"),o=a("btSY7"),s=a("5TB86"),u={http:i.default,xhr:o.default};r.default.forEach(u,(function(e,t){if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var c={getAdapter:function(e){for(var t,n,i=(e=r.default.isArray(e)?e:[e]).length,a=0;a<i&&(t=e[a],!(n=r.default.isString(t)?u[t.toLowerCase()]:t));a++);if(!n){if(!1===n)throw new(0,s.default)("Adapter ".concat(t," is not supported by the environment"),"ERR_NOT_SUPPORT");throw new Error(r.default.hasOwnProp(u,t)?"Adapter '".concat(t,"' is not available in the build"):"Unknown adapter '".concat(t,"'"))}if(!r.default.isFunction(n))throw new TypeError("adapter is not a function");return n},adapters:u}})),a.register("beknR",(function(t,n){e(t.exports,"default",(function(){return r}));var r=null})),a.register("btSY7",(function(t,n){e(t.exports,"default",(function(){return y}));var r=a("c4C4W"),i=a("j97bH"),o=a("jFG8L"),s=a("6d5Pb"),u=a("gYMA1"),c=a("9jFfm"),l=a("gWbUy"),f=a("5TB86"),d=a("dW1zJ"),p=a("4ULKu"),h=a("d0XKg"),v=a("gHHim"),m=a("dSDGE");function g(e,t){var n=0,r=(0,m.default)(50,250);return function(i){var a=i.loaded,o=i.lengthComputable?i.total:void 0,s=a-n,u=r(s);n=a;var c={loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:u||void 0,estimated:u&&o&&a<=o?(o-a)/u:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}var y="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){var a,m=e.data,y=v.default.from(e.headers).normalize(),b=e.responseType;function w(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}r.default.isFormData(m)&&(h.default.isStandardBrowserEnv||h.default.isStandardBrowserWebWorkerEnv)&&y.setContentType(!1);var k=new XMLHttpRequest;if(e.auth){var x=e.auth.username||"",_=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";y.set("Authorization","Basic "+btoa(x+":"+_))}var I=(0,u.default)(e.baseURL,e.url);function E(){if(k){var r=v.default.from("getAllResponseHeaders"in k&&k.getAllResponseHeaders()),a={data:b&&"text"!==b&&"json"!==b?k.response:k.responseText,status:k.status,statusText:k.statusText,headers:r,config:e,request:k};(0,i.default)((function(e){t(e),w()}),(function(e){n(e),w()}),a),k=null}}if(k.open(e.method.toUpperCase(),(0,s.default)(I,e.params,e.paramsSerializer),!0),k.timeout=e.timeout,"onloadend"in k?k.onloadend=E:k.onreadystatechange=function(){k&&4===k.readyState&&(0!==k.status||k.responseURL&&0===k.responseURL.indexOf("file:"))&&setTimeout(E)},k.onabort=function(){k&&(n(new(0,f.default)("Request aborted",f.default.ECONNABORTED,e,k)),k=null)},k.onerror=function(){n(new(0,f.default)("Network Error",f.default.ERR_NETWORK,e,k)),k=null},k.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||l.default;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new(0,f.default)(t,r.clarifyTimeoutError?f.default.ETIMEDOUT:f.default.ECONNABORTED,e,k)),k=null},h.default.isStandardBrowserEnv){var T=(e.withCredentials||(0,c.default)(I))&&e.xsrfCookieName&&o.default.read(e.xsrfCookieName);T&&y.set(e.xsrfHeaderName,T)}void 0===m&&y.setContentType(null),"setRequestHeader"in k&&r.default.forEach(y.toJSON(),(function(e,t){k.setRequestHeader(t,e)})),r.default.isUndefined(e.withCredentials)||(k.withCredentials=!!e.withCredentials),b&&"json"!==b&&(k.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&k.addEventListener("progress",g(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&k.upload&&k.upload.addEventListener("progress",g(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=function(t){k&&(n(!t||t.type?new(0,d.default)(null,e,k):t),k.abort(),k=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));var S=(0,p.default)(I);S&&-1===h.default.protocols.indexOf(S)?n(new(0,f.default)("Unsupported protocol "+S+":",f.default.ERR_BAD_REQUEST,e)):k.send(m||null)}))}})),a.register("j97bH",(function(t,n){e(t.exports,"default",(function(){return i}));var r=a("5TB86");function i(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new(0,r.default)("Request failed with status code "+n.status,[r.default.ERR_BAD_REQUEST,r.default.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}})),a.register("jFG8L",(function(t,n){e(t.exports,"default",(function(){return i}));var r=a("c4C4W"),i=a("d0XKg").default.isStandardBrowserEnv?{write:function(e,t,n,i,a,o){var s=[];s.push(e+"="+encodeURIComponent(t)),r.default.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.default.isString(i)&&s.push("path="+i),r.default.isString(a)&&s.push("domain="+a),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),a.register("gYMA1",(function(t,n){e(t.exports,"default",(function(){return o}));var r=a("7xjuH"),i=a("ftRZn");function o(e,t){return e&&!(0,r.default)(t)?(0,i.default)(e,t):t}})),a.register("7xjuH",(function(t,n){function r(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}e(t.exports,"default",(function(){return r}))})),a.register("ftRZn",(function(t,n){function r(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}e(t.exports,"default",(function(){return r}))})),a.register("9jFfm",(function(t,n){e(t.exports,"default",(function(){return i}));var r=a("c4C4W"),i=a("d0XKg").default.isStandardBrowserEnv?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.default.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}})),a.register("4ULKu",(function(t,n){function r(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}e(t.exports,"default",(function(){return r}))})),a.register("dSDGE",(function(t,n){e(t.exports,"default",(function(){return r}));var r=function(e,t){e=e||10;var n,r=new Array(e),i=new Array(e),a=0,o=0;return t=void 0!==t?t:1e3,function(s){var u=Date.now(),c=i[o];n||(n=u),r[a]=s,i[a]=u;for(var l=o,f=0;l!==a;)f+=r[l++],l%=e;if((a=(a+1)%e)===o&&(o=(o+1)%e),!(u-n<t)){var d=c&&u-c;return d?Math.round(1e3*f/d):void 0}}}})),a.register("knWMA",(function(t,n){e(t.exports,"default",(function(){return s}));var r=a("c4C4W"),i=a("gHHim"),o=function(e){return e instanceof i.default?e.toJSON():e};function s(e,t){t=t||{};var n={};function i(e,t,n){return r.default.isPlainObject(e)&&r.default.isPlainObject(t)?r.default.merge.call({caseless:n},e,t):r.default.isPlainObject(t)?r.default.merge({},t):r.default.isArray(t)?t.slice():t}function a(e,t,n){return r.default.isUndefined(t)?r.default.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function s(e,t){if(!r.default.isUndefined(t))return i(void 0,t)}function u(e,t){return r.default.isUndefined(t)?r.default.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function c(n,r,a){return a in t?i(n,r):a in e?i(void 0,n):void 0}var l={url:s,method:s,data:s,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:c,headers:function(e,t){return a(o(e),o(t),!0)}};return r.default.forEach(Object.keys(e).concat(Object.keys(t)),(function(i){var o=l[i]||a,s=o(e[i],t[i],i);r.default.isUndefined(s)&&o!==c||(n[i]=s)})),n}})),a.register("9SeBc",(function(t,r){e(t.exports,"default",(function(){return l}));var i=a("l5bVx"),o=a("kLR29"),s=a("5TB86"),u={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){u[e]=function(r){return(void 0===r?"undefined":n(i)(r))===e||"a"+(t<1?"n ":" ")+e}}));var c={};u.transitional=function(e,t,n){function r(e,t){return"[Axios v"+o.VERSION+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,i,a){if(!1===e)throw new(0,s.default)(r(i," has been removed"+(t?" in "+t:"")),s.default.ERR_DEPRECATED);return t&&!c[i]&&(c[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,a)}};var l={assertOptions:function(e,t,n){if("object"!=typeof e)throw new(0,s.default)("options must be an object",s.default.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),i=r.length;i-- >0;){var a=r[i],o=t[a];if(o){var u=e[a],c=void 0===u||o(u,a,e);if(!0!==c)throw new(0,s.default)("option "+a+" must be "+c,s.default.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new(0,s.default)("Unknown option "+a,s.default.ERR_BAD_OPTION)}},validators:u}})),a.register("kLR29",(function(t,n){e(t.exports,"VERSION",(function(){return r}));var r="1.2.2"})),a.register("77MZz",(function(t,r){e(t.exports,"default",(function(){return u}));var i=a("8MBJY"),o=a("a2hTj"),s=a("dW1zJ"),u=function(){function e(t){if(n(i)(this,e),"function"!=typeof t)throw new TypeError("executor must be a function.");var r;this.promise=new Promise((function(e){r=e}));var a=this;this.promise.then((function(e){if(a._listeners){for(var t=a._listeners.length;t-- >0;)a._listeners[t](e);a._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){a.subscribe(e),t=e})).then(e);return n.cancel=function(){a.unsubscribe(t)},n},t((function(e,t,n){a.reason||(a.reason=new(0,s.default)(e,t,n),r(a.reason))}))}return n(o)(e,[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}},{key:"unsubscribe",value:function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}}}],[{key:"source",value:function(){var t;return{token:new e((function(e){t=e})),cancel:t}}}]),e}()})),a.register("9BdDr",(function(t,n){function r(e){return function(t){return e.apply(null,t)}}e(t.exports,"default",(function(){return r}))})),a.register("kv87N",(function(t,n){e(t.exports,"default",(function(){return i}));var r=a("c4C4W");function i(e){return r.default.isObject(e)&&!0===e.isAxiosError}})),a.register("5siR6",(function(t,r){e(t.exports,"default",(function(){return s}));var i=a("1t1Wn"),o={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(o).forEach((function(e){var t=n(i)(e,2),r=t[0],a=t[1];o[a]=r}));var s=o})),a.register("ikGeD",(function(t,n){e(t.exports,"search",(function(){return i})),e(t.exports,"filmsMainContainer",(function(){return a})),e(t.exports,"backdrop",(function(){return o})),e(t.exports,"modal",(function(){return s}));var r={search:document.querySelector("#searchForm"),filmsMainContainer:document.querySelector(".films__list"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal")},i=r.search,a=r.filmsMainContainer,o=r.backdrop,s=r.modal})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=a("fVNic"))&&n.__esModule?n:{default:n}}));var o=a("bpxeT"),s=a("2TvXO"),u=(o=a("bpxeT"),a("8MBJY")),c=a("a2hTj");s=a("2TvXO");a("dIxxU");var l=a("ke5Oc");function f(e){return e.map((function(e){return'<li class="films__item" data-id="'.concat(e.id,'">\n  <a href="" class="films__wrapper">\n    <div class="films__img-wrapper">\n      <img\n        class="films__img"\n        ').concat(d(e.poster_path),'\n        alt="').concat(e.title,'"\n        loading="lazy"\n      />\n    </div>\n\n    <div class="img__row">\n            <p>').concat(e.vote_average,"</p>\n      <p>").concat(Number.parseInt(e.release_date),'</p>\n    </div>\n\n    <div class="films__info">\n            <p class="films__name">').concat(e.title,'</p>\n\n      <p class="films__description">').concat(function(e){JSON.parse(localStorage.getItem("genres")).map((function(t){e.includes(t.id)&&e.push(t.name)})),e.splice(0,e.length/2),e.length>3&&(e.splice(2,e.length,"Other"),console.log(e));return e.join(", ")}(e.genre_ids),"</p>\n    </div>\n  </a>\n</li>")})).join("")}function d(e){return e?'src="https://image.tmdb.org/t/p/original'.concat(e,'"'):"src='./images/no-picture.png'"}var p,h,v=a("ikGeD"),m=(v=a("ikGeD"),{});p=void 0!==t?t:"undefined"!=typeof window?window:m,h=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",r="Hourglass",i="Circle",a="Arrows",o="Dots",s="Pulse",u="Custom",c="Notiflix",l={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},f=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},d=function(t){return t||(t="head"),null!==e.document[t]||(f('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},p=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=p(e[r],n[r]):e[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return e},h=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},v=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},m=function(c,v,m,y,b){if(!d("body"))return!1;t||g.Loading.init({});var w=p(!0,t,{});if("object"==typeof v&&!Array.isArray(v)||"object"==typeof m&&!Array.isArray(m)){var k={};"object"==typeof v?k=v:"object"==typeof m&&(k=m),t=p(!0,t,k)}var x,_,I="";if("string"==typeof v&&v.length>0&&(I=v),y){var E="";(I=I.length>t.messageMaxLength?h(I).toString().substring(0,t.messageMaxLength)+"...":h(I).toString()).length>0&&(E='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+I+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var T="";if(c===n)x=t.svgSize,_=t.svgColor,x||(x="60px"),_||(_="#32c682"),T='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+_+'" width="'+x+'" height="'+x+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(c===r)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(c===i)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(c===a)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(c===o)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===s)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===u&&null!==t.customSvgCode&&null===t.customSvgUrl)T=t.customSvgCode||"";else if(c===u&&null!==t.customSvgUrl&&null===t.customSvgCode)T='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(c===u&&(null===t.customSvgUrl||null===t.customSvgCode))return f('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;T=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var S=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),O=e.innerWidth,N=S>=O?O-40+"px":S+"px",A='<div style="width:'+N+"; height:"+N+';" class="'+t.className+"-icon"+(I.length>0?" nx-with-message":"")+'">'+T+"</div>",C=e.document.createElement("div");C.id=l.ID,C.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),C.style.zIndex=t.zindex,C.style.background=t.backgroundColor,C.style.animationDuration=t.cssAnimationDuration+"ms",C.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',C.style.display="flex",C.style.flexWrap="wrap",C.style.flexDirection="column",C.style.alignItems="center",C.style.justifyContent="center",t.rtl&&(C.setAttribute("dir","rtl"),C.classList.add("nx-rtl-on")),C.innerHTML=A+E,e.document.getElementById(C.id)||(e.document.body.appendChild(C),t.clickToClose&&e.document.getElementById(C.id).addEventListener("click",(function(){C.classList.add("nx-remove");var e=setTimeout((function(){null!==C.parentNode&&(C.parentNode.removeChild(C),clearTimeout(e))}),t.cssAnimationDuration)})))}else if(e.document.getElementById(l.ID))var R=e.document.getElementById(l.ID),L=setTimeout((function(){R.classList.add("nx-remove");var e=setTimeout((function(){null!==R.parentNode&&(R.parentNode.removeChild(R),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(L)}),b);t=p(!0,t,w)},g={Loading:{init:function(n){t=p(!0,l,n),function(t,n){if(!d("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}}(v,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return f("You have to initialize the Loading module before call Merge function."),!1;t=p(!0,t,e)},standard:function(e,t){m(n,e,t,!0,0)},hourglass:function(e,t){m(r,e,t,!0,0)},circle:function(e,t){m(i,e,t,!0,0)},arrows:function(e,t){m(a,e,t,!0,0)},dots:function(e,t){m(o,e,t,!0,0)},pulse:function(e,t){m(s,e,t,!0,0)},custom:function(e,t){m(u,e,t,!0,0)},notiflix:function(e,t){m(c,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),m(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var r=e.document.getElementById(l.ID);if(r)if(n.length>0){n=n.length>t.messageMaxLength?h(n).substring(0,t.messageMaxLength)+"...":h(n);var i=r.getElementsByTagName("p")[0];if(i)i.innerHTML=n;else{var a=e.document.createElement("p");a.id=t.messageID,a.className="nx-loading-message nx-loading-message-new",a.style.color=t.messageColor,a.style.fontSize=t.messageFontSize,a.innerHTML=n,r.appendChild(a)}}else f("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?p(!0,e.Notiflix,{Loading:g.Loading}):{Loading:g.Loading}},"function"==typeof define&&define.amd?define([],(function(){return h(p)})):"object"==typeof m?m=h(p):p.Notiflix=h(p);var g={};!function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof g?g=t(e):e.Notiflix=t(e)}(void 0!==t?t:"undefined"!=typeof window?window:g,(function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Success",r="Failure",i="Warning",a="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},u=function(t){return t||(t="head"),null!==e.document[t]||(s('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=c(e[r],n[r]):e[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return e},l=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},f=0,d=function(s,l,d,h){if(!u("body"))return!1;t||p.Notify.init({});var v=c(!0,t,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof h&&!Array.isArray(h)){var m={};"object"==typeof d?m=d:"object"==typeof h&&(m=h),t=c(!0,t,m)}var g,y,b=t[s.toLocaleLowerCase("en")];f++,"string"!=typeof l&&(l="Notiflix "+s),t.plainText&&(g=l,(y=e.document.createElement("div")).innerHTML=g,l=y.textContent||y.innerText||""),!t.plainText&&l.length>t.messageMaxLength&&(t=c(!0,t,{closeButton:!0,messageMaxLength:150}),l='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),l.length>t.messageMaxLength&&(l=l.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),t.cssAnimation||(t.cssAnimationDuration=0);var w=e.document.getElementById(o.wrapID)||e.document.createElement("div");if(w.id=o.wrapID,w.style.width=t.width,w.style.zIndex=t.zindex,w.style.opacity=t.opacity,"center-center"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.top=t.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===t.position?(w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.left="auto"):"left-top"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===t.position?(w.style.left=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=t.distance,w.style.top=t.distance,w.style.left="auto",w.style.bottom="auto"),t.backOverlay){var k=e.document.getElementById(o.overlayID)||e.document.createElement("div");k.id=o.overlayID,k.style.width="100%",k.style.height="100%",k.style.position="fixed",k.style.zIndex=t.zindex-1,k.style.left=0,k.style.top=0,k.style.right=0,k.style.bottom=0,k.style.background=b.backOverlayColor||t.backOverlayColor,k.className=t.cssAnimation?"nx-with-animation":"",k.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(o.overlayID)||e.document.body.appendChild(k)}e.document.getElementById(o.wrapID)||e.document.body.appendChild(w);var x=e.document.createElement("div");x.id=t.ID+"-"+f,x.className=t.className+" "+b.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),x.style.fontSize=t.fontSize,x.style.color=b.textColor,x.style.background=b.background,x.style.borderRadius=t.borderRadius,x.style.pointerEvents="all",t.rtl&&(x.setAttribute("dir","rtl"),x.classList.add("nx-rtl-on")),x.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(x.style.animationDuration=t.cssAnimationDuration+"ms");var _="";if(t.closeButton&&"function"!=typeof d&&(_='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)x.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?_:"");else{var I="";s===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===r?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),x.innerHTML=I+'<span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?_:"")}else x.innerHTML='<span class="nx-message">'+l+"</span>"+(t.closeButton?_:"");if("left-bottom"===t.position||"right-bottom"===t.position){var E=e.document.getElementById(o.wrapID);E.insertBefore(x,E.firstChild)}else e.document.getElementById(o.wrapID).appendChild(x);var T=e.document.getElementById(x.id);if(T){var S,O,N=function(){T.classList.add("nx-remove");var t=e.document.getElementById(o.overlayID);t&&w.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(S)},A=function(){if(T&&null!==T.parentNode&&T.parentNode.removeChild(T),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var t=e.document.getElementById(o.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(O)};if(t.closeButton&&"function"!=typeof d)e.document.getElementById(x.id).querySelector("span.nx-close-button").addEventListener("click",(function(){N();var e=setTimeout((function(){A(),clearTimeout(e)}),t.cssAnimationDuration)}));if(("function"==typeof d||t.clickToClose)&&T.addEventListener("click",(function(){"function"==typeof d&&d(),N();var e=setTimeout((function(){A(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof d){var C=function(){S=setTimeout((function(){N()}),t.timeout),O=setTimeout((function(){A()}),t.timeout+t.cssAnimationDuration)};C(),t.pauseOnHover&&(T.addEventListener("mouseenter",(function(){T.classList.add("nx-paused"),clearTimeout(S),clearTimeout(O)})),T.addEventListener("mouseleave",(function(){T.classList.remove("nx-paused"),C()})))}}if(t.showOnlyTheLastOne&&f>0)for(var R=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+f+"])"),L=0;L<R.length;L++){var P=R[L];null!==P.parentNode&&P.parentNode.removeChild(P)}t=c(!0,t,v)},p={Notify:{init:function(n){t=c(!0,o,n),function(t,n){if(!u("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}}(l,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return s("You have to initialize the Notify module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,r){d(n,e,t,r)},failure:function(e,t,n){d(r,e,t,n)},warning:function(e,t,n){d(i,e,t,n)},info:function(e,t,n){d(a,e,t,n)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}}));var y=new(function(){"use strict";function e(){n(u)(this,e),this.searchQuery="",this.page=1}return n(c)(e,[{key:"fetchMovies",value:function(){var e=this;return n(o)(n(s).mark((function t(){var r,i;return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m.Loading.circle({svgColor:"red"}),t.prev=1,"48efdd88d1650cc055b0f5a157a41228","https://api.themoviedb.org/3/search/movie?",t.next=6,l.default.get("https://api.themoviedb.org/3/search/movie?",{params:{api_key:"48efdd88d1650cc055b0f5a157a41228",query:e.searchQuery,page:e.page,include_adult:!1}});case 6:return r=t.sent,i=r.data,console.log(i.results),e.incrementPage(),t.abrupt("return",i.results);case 13:t.prev=13,t.t0=t.catch(1),g.Notify.failure("Oups! Something went wrong");case 16:return t.prev=16,m.Loading.remove(),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,13,16,19]])})))()}},{key:"getGenres",value:function(){return n(o)(n(s).mark((function e(){var t,r;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"48efdd88d1650cc055b0f5a157a41228",e.next=4,l.default.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:"48efdd88d1650cc055b0f5a157a41228"}});case 4:t=e.sent,r=t.data.genres,localStorage.setItem("genres",JSON.stringify(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),g.Notify.failure("Oups! Something went wrong");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},{key:"getTrendMovies",value:function(){return n(o)(n(s).mark((function e(){var t;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.Loading.circle({svgColor:"red"}),e.prev=1,"48efdd88d1650cc055b0f5a157a41228",e.next=5,l.default.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:"48efdd88d1650cc055b0f5a157a41228"}});case 5:t=e.sent,console.log(t.data.results),v.filmsMainContainer.innerHTML=f(t.data.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),g.Notify.failure("Oups! Something went wrong");case 13:return e.prev=13,m.Loading.remove(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))()}},{key:"getFullInfo",value:function(e){return n(o)(n(s).mark((function t(){var r;return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"48efdd88d1650cc055b0f5a157a41228",t.next=3,l.default.get("https://api.themoviedb.org/3/movie/".concat(e),{params:{api_key:"48efdd88d1650cc055b0f5a157a41228"}});case 3:r=t.sent,console.log(r.data),v.modal.innerHTML=(n=r.data,i=void 0,'<div class="modal-window">\n    <div class="modal-img-flex">\n      <img '.concat(d(n.poster_path),' class="modal-img" alt="').concat(n.title,'" />\n    </div>\n    <div class="modal-flex">\n      <h2 class="modal-h2">').concat(n.title,'</h2>\n      <ul class="lists-flex">\n        \n            <li class="parametr-flex">\n              <p>Vote / Votes</p>\n            </li>\n            <li class="description-flex vote-style">\n              <p class="description-font modal-votes orng-back">\n                ').concat(n.vote_average,"\n              </p>\n              <p>/</p>\n              <p>\n                ").concat(n.vote_count,'\n              </p>\n            </li>\n            <li class="parametr-flex">\n              <p>Popularity</p>\n            </li>\n            <li class="description-flex">\n              <p class="description-font">').concat(n.popularity,'</p>\n            </li>\n            <li class="parametr-flex">\n              <p>Original Title</p>\n            </li>\n            <li class="description-flex">\n              <p class="description-font">').concat(n.original_title,'</p>\n            </li>\n            <li class="parametr-flex">\n              <p>Genre</p>\n            </li>\n            <li class="description-flex">\n              <p class="description-font">').concat((i=n.genres,i.map((function(e){return e.name})).join(", ")),'</p>\n            </li>\n      </ul>\n\n      <h5 class="description-font">ABOUT</h5>\n      <div class="overview-container">\n        <p class="about-font">\n          ').concat(n.overview,'\n        </p>\n      </div>\n      <div class="buttons-flex">\n        <button class="button-modal">ADD TO WATCHED</button>\n        <button class="button-modal">\n          ADD TO QUEUE\n        </button>\n        <button class="button-modal">\n          TRAILER\n        </button>\n      </div>\n    </div> \n    <button class="modal-cross"> \n    <svg  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M8 8L22 22" stroke="black" stroke-width="2"/>\n      <path d="M8 22L22 8" stroke="black" stroke-width="2"/>\n    </svg>\n    </button>   \n  </div>'));case 6:case"end":return t.stop()}var n,i}),t)})))()}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}}]),e}()),b=(v=a("ikGeD"),o=a("bpxeT"),u=a("8MBJY"),c=a("a2hTj"),s=a("2TvXO"),{apiKey:"AIzaSyDLECkBiM_zJdUtuEN2mdKPTBBYEj_ZLaA",authDomain:"filmoteka-a4d37.firebaseapp.com",projectId:"filmoteka-a4d37",storageBucket:"filmoteka-a4d37.appspot.com",messagingSenderId:"925416976763",appId:"1:925416976763:web:829d5454b8848bbcec8dde"});function w(){if(b&&b.apiKey)return b;throw new Error("No Firebase configuration object provided.\nAdd your web app's configuration object to firebase-config.js")}u=a("8MBJY"),c=a("a2hTj");var k=a("hKHmD"),x=a("8nrFW"),_=a("ds8z5"),I=(u=a("8MBJY"),c=a("a2hTj"),a("eYQtU")),E=a("1t1Wn"),T=(x=a("8nrFW"),{});Object.defineProperty(T,"__esModule",{value:!0}),T.default=function(e){return R(e)};var S=C(a("ge8co")),O=C(a("cZGw3")),N=C(a("fVNic")),A=C(a("gD1JV"));function C(e){return e&&e.__esModule?e:{default:e}}function R(e){var t="function"==typeof Map?new Map:void 0;return R=function(e){if(null===e||!O.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return S.default(e,arguments,N.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),A.default(n,e)},R(e)}var L,P,M,D=a("2MbLg"),B=L={};function U(){throw new Error("setTimeout has not been defined")}function j(){throw new Error("clearTimeout has not been defined")}function F(e){if(P===setTimeout)return setTimeout(e,0);if((P===U||!P)&&setTimeout)return P=setTimeout,setTimeout(e,0);try{return P(e,0)}catch(t){try{return P.call(null,e,0)}catch(t){return P.call(this,e,0)}}}!function(){try{P="function"==typeof setTimeout?setTimeout:U}catch(e){P=U}try{M="function"==typeof clearTimeout?clearTimeout:j}catch(e){M=j}}();var z,W=[],H=!1,V=-1;function q(){H&&z&&(H=!1,z.length?W=z.concat(W):V=-1,W.length&&K())}function K(){if(!H){var e=F(q);H=!0;for(var t=W.length;t;){for(z=W,W=[];++V<t;)z&&z[V].run();V=-1,t=W.length}z=null,H=!1,function(e){if(M===clearTimeout)return clearTimeout(e);if((M===j||!M)&&clearTimeout)return M=clearTimeout,clearTimeout(e);try{M(e)}catch(t){try{return M.call(null,e)}catch(t){return M.call(this,e)}}}(e)}}function J(e,t){this.fun=e,this.array=t}function G(){}B.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];W.push(new J(e,t)),1!==W.length||H||F(K)},J.prototype.run=function(){this.fun.apply(null,this.array)},B.title="browser",B.browser=!0,B.env={},B.argv=[],B.version="",B.versions={},B.on=G,B.addListener=G,B.once=G,B.off=G,B.removeListener=G,B.removeAllListeners=G,B.emit=G,B.prependListener=G,B.prependOnceListener=G,B.listeners=function(e){return[]},B.binding=function(e){throw new Error("process.binding is not supported")},B.cwd=function(){return"/"},B.chdir=function(e){throw new Error("process.chdir is not supported")},B.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var X=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,p=63&c;u||(p=64,o||(d=64)),r.push(n[l],n[f],n[d],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(X(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var f=s<<6&192|u;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},$=function(e){return function(e){var t=X(e);return Y.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Q=function(e){try{return Y.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ee(){try{return"object"==typeof indexedDB}catch(e){return!1}}function te(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ne=function(){return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},re=function(){try{return ne()||function(){if(void 0!==L&&void 0!==L.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&Q(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},ie=function(e){var t,n;return null===(n=null===(t=re())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ae=function(){var e;return null===(e=re())||void 0===e?void 0:e.config},oe=function(e){var t;return null===(t=re())||void 0===t?void 0:t["_".concat(e)]},se=function(){"use strict";function e(){var t=this;n(u)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return n(c)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ue=function(e){"use strict";n(I)(r,e);var t=n(D)(r);function r(e,i,a){var o;return n(u)(this,r),(o=t.call(this,i)).code=e,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(n(_)(o),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(n(_)(o),ce.prototype.create),o}return r}(n(T)(Error)),ce=function(){"use strict";function e(t,r,i){n(u)(this,e),this.service=t,this.serviceName=r,this.errors=i}return n(c)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?le(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new ue(a,u,i);return c}}]),e}();function le(e,t){return e.replace(fe,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var fe=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function pe(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],f=t[c];if(he(l)&&he(f)){if(!pe(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var d=!0,p=!1,h=void 0;try{for(var v,m=r[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var g=v.value;if(!n.includes(g))return!1}}catch(e){p=!0,h=e}finally{try{d||null==m.return||m.return()}finally{if(p)throw h}}return!0}function he(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ve(e){var t=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(e,r){var i=n(E)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){t.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(e)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return t.length?"&"+t.join("&"):""}function me(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=n(E)(e.split("="),2),i=r[0],a=r[1];t[decodeURIComponent(i)]=decodeURIComponent(a)}})),t}function ge(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye=function(){"use strict";function e(t,r){var i=this;n(u)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){t(i)})).catch((function(e){i.error(e)}))}return n(c)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=be),void 0===r.error&&(r.error=be),void 0===r.complete&&(r.complete=be);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function be(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function we(e){return e&&e._delegate?e._delegate:e}u=a("8MBJY"),c=a("a2hTj"),k=a("hKHmD"),x=a("8nrFW");var ke,xe,_e=[];(xe=ke||(ke={}))[xe.DEBUG=0]="DEBUG",xe[xe.VERBOSE=1]="VERBOSE",xe[xe.INFO=2]="INFO",xe[xe.WARN=3]="WARN",xe[xe.ERROR=4]="ERROR",xe[xe.SILENT=5]="SILENT";var Ie,Ee={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},Te=ke.INFO,Se=(Ie={},n(k)(Ie,ke.DEBUG,"log"),n(k)(Ie,ke.VERBOSE,"log"),n(k)(Ie,ke.INFO,"info"),n(k)(Ie,ke.WARN,"warn"),n(k)(Ie,ke.ERROR,"error"),Ie),Oe=function(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(t<e.logLevel)){var s=(new Date).toISOString(),u=Se[t];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(e.name,":")].concat(n(x)(i)))}},Ne=function(){"use strict";function e(t){n(u)(this,e),this.name=t,this._logLevel=Te,this._logHandler=Oe,this._userLogHandler=null,_e.push(this)}return n(c)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in ke))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?Ee[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ke.DEBUG].concat(n(x)(t))),this._logHandler.apply(this,[this,ke.DEBUG].concat(n(x)(t)))}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ke.VERBOSE].concat(n(x)(t))),this._logHandler.apply(this,[this,ke.VERBOSE].concat(n(x)(t)))}},{key:"info",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ke.INFO].concat(n(x)(t))),this._logHandler.apply(this,[this,ke.INFO].concat(n(x)(t)))}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ke.WARN].concat(n(x)(t))),this._logHandler.apply(this,[this,ke.WARN].concat(n(x)(t)))}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ke.ERROR].concat(n(x)(t))),this._logHandler.apply(this,[this,ke.ERROR].concat(n(x)(t)))}}]),e}();o=a("bpxeT"),u=a("8MBJY"),c=a("a2hTj"),k=a("hKHmD"),x=a("8nrFW"),s=a("2TvXO"),o=a("bpxeT"),u=a("8MBJY"),c=a("a2hTj"),E=a("1t1Wn"),x=a("8nrFW"),s=a("2TvXO");var Ae=function(){"use strict";function e(t,r,i){n(u)(this,e),this.name=t,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return n(c)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),Ce="[DEFAULT]",Re=function(){"use strict";function e(t,r){n(u)(this,e),this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return n(c)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new se;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Ce})}catch(e){}var t=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=n(E)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){r=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return n(o)(n(s).mark((function t(){var r;return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Array.from(e.instances.values()),t.next=3,Promise.all(n(x)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(n(x)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return t.stop()}}),t)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,r=void 0===t?{}:t,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=n(E)(c.value,2),d=f[0],p=f[1],h=this.normalizeInstanceIdentifier(d);i===h&&p.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Ce?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce;return this.component?this.component.multipleInstances?e:Ce:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();var Le=function(){"use strict";function e(t){n(u)(this,e),this.name=t,this.providers=new Map}return n(c)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Re(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}(),Pe=(o=a("bpxeT"),{});Object.defineProperty(Pe,"__esModule",{value:!0}),Pe.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){De.default(e,t,n[t])}))}return e};var Me,De=(Me=a("hKHmD"))&&Me.__esModule?Me:{default:Me};var Be,Ue;x=a("8nrFW"),s=a("2TvXO"),x=a("8nrFW");var je=new WeakMap,Fe=new WeakMap,ze=new WeakMap,We=new WeakMap,He=new WeakMap;var Ve={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Fe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ze.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Je(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function qe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ue||(Ue=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(Ge(this),n),Je(je.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Je(e.apply(Ge(this),n))}:function(t){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=e).call.apply(o,[Ge(this),t].concat(n(x)(i)));return ze.set(s,t.sort?t.sort():[t]),Je(s)}}function Ke(e){return"function"==typeof e?qe(e):(e instanceof IDBTransaction&&function(e){if(!Fe.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Fe.set(e,t)}}(e),t=e,(Be||(Be=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Ve):e);var t}function Je(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(Je(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&je.set(e,t)})).catch((function(){})),He.set(n,t),n;var t,n;if(We.has(e))return We.get(e);var r=Ke(e);return r!==e&&(We.set(e,r),He.set(r,e)),r}var Ge=function(e){return He.get(e)};function Xe(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=Je(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(Je(s.result),e.oldVersion,e.newVersion,Je(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var Ye=["get","getKey","getAll","getAllKeys","count"],$e=["put","add","delete","clear"],Qe=new Map;function Ze(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(Qe.get(t))return Qe.get(t);var r=t.replace(/FromIndex$/,""),i=t!==r,a=$e.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(a||Ye.includes(r))){var u,c=(u=n(o)(n(s).mark((function e(t){var o,u,c,l,f,d,p=arguments;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=p.length,u=new Array(o>1?o-1:0),c=1;c<o;c++)u[c-1]=p[c];return f=this.transaction(t,a?"readwrite":"readonly"),d=f.store,i&&(d=d.index(u.shift())),e.next=7,Promise.all([(l=d)[r].apply(l,n(x)(u)),a&&f.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)});return Qe.set(t,c),c}}}Ve=function(e){return n(Pe)({},e,{get:function(t,n,r){return Ze(t,n)||e.get(t,n,r)},has:function(t,n){return!!Ze(t,n)||e.has(t,n)}})}(Ve);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var et=function(){"use strict";function e(t){n(u)(this,e),this.container=t}return n(c)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var tt,nt,rt="@firebase/app",it="0.9.0",at=new Ne("@firebase/app"),ot="[DEFAULT]",st=(tt={},n(k)(tt,rt,"fire-core"),n(k)(tt,"@firebase/app-compat","fire-core-compat"),n(k)(tt,"@firebase/analytics","fire-analytics"),n(k)(tt,"@firebase/analytics-compat","fire-analytics-compat"),n(k)(tt,"@firebase/app-check","fire-app-check"),n(k)(tt,"@firebase/app-check-compat","fire-app-check-compat"),n(k)(tt,"@firebase/auth","fire-auth"),n(k)(tt,"@firebase/auth-compat","fire-auth-compat"),n(k)(tt,"@firebase/database","fire-rtdb"),n(k)(tt,"@firebase/database-compat","fire-rtdb-compat"),n(k)(tt,"@firebase/functions","fire-fn"),n(k)(tt,"@firebase/functions-compat","fire-fn-compat"),n(k)(tt,"@firebase/installations","fire-iid"),n(k)(tt,"@firebase/installations-compat","fire-iid-compat"),n(k)(tt,"@firebase/messaging","fire-fcm"),n(k)(tt,"@firebase/messaging-compat","fire-fcm-compat"),n(k)(tt,"@firebase/performance","fire-perf"),n(k)(tt,"@firebase/performance-compat","fire-perf-compat"),n(k)(tt,"@firebase/remote-config","fire-rc"),n(k)(tt,"@firebase/remote-config-compat","fire-rc-compat"),n(k)(tt,"@firebase/storage","fire-gcs"),n(k)(tt,"@firebase/storage-compat","fire-gcs-compat"),n(k)(tt,"@firebase/firestore","fire-fst"),n(k)(tt,"@firebase/firestore-compat","fire-fst-compat"),n(k)(tt,"fire-js","fire-js"),n(k)(tt,"firebase","fire-js-all"),tt),ut=new Map,ct=new Map;function lt(e,t){try{e.container.addComponent(t)}catch(n){at.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function ft(e){var t=e.name;if(ct.has(t))return at.debug("There were multiple attempts to register component ".concat(t,".")),!1;ct.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=ut.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){lt(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function dt(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var pt=(nt={},n(k)(nt,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),n(k)(nt,"bad-app-name","Illegal App name: '{$appName}"),n(k)(nt,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),n(k)(nt,"app-deleted","Firebase App named '{$appName}' already deleted"),n(k)(nt,"no-options","Need to provide options, when not being deployed to hosting via source."),n(k)(nt,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),n(k)(nt,"invalid-log-argument","First argument to `onLog` must be null or a function."),n(k)(nt,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),n(k)(nt,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),n(k)(nt,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),n(k)(nt,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),nt),ht=new ce("app","Firebase",pt),vt=function(){"use strict";function e(t,r,i){var a=this;n(u)(this,e),this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ae("app",(function(){return a}),"PUBLIC"))}return n(c)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw ht.create("app-deleted",{appName:this._name})}}]),e}(),mt="9.15.0";function gt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:ot,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw ht.create("bad-app-name",{appName:String(a)});if(n||(n=ae()),!n)throw ht.create("no-options");var o=ut.get(a);if(o){if(pe(n,o.options)&&pe(i,o.config))return o;throw ht.create("duplicate-app",{appName:a})}var s=new Le(a),u=!0,c=!1,l=void 0;try{for(var f,d=ct.values()[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var p=f.value;s.addComponent(p)}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}var h=new vt(n,i,s);return ut.set(a,h),h}function yt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=ut.get(e);if(!t&&e===ot)return gt();if(!t)throw ht.create("no-app",{appName:e});return t}function bt(e,t,n){var r,i=null!==(r=st[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void at.warn(s.join(" "))}ft(new Ae("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var wt="firebase-heartbeat-store",kt=null;function xt(){return kt||(kt=Xe("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(wt)}}).catch((function(e){throw ht.create("idb-open",{originalErrorMessage:e.message})}))),kt}function _t(e){return It.apply(this,arguments)}function It(){return(It=n(o)(n(s).mark((function e(t){var r,i;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xt();case 3:return r=e.sent,e.abrupt("return",r.transaction(wt).objectStore(wt).get(St(t)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof ue?at.warn(e.t0.message):(i=ht.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),at.warn(i.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function Et(e,t){return Tt.apply(this,arguments)}function Tt(){return(Tt=n(o)(n(s).mark((function e(t,r){var i,a,o,u;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xt();case 3:return i=e.sent,a=i.transaction(wt,"readwrite"),o=a.objectStore(wt),e.next=8,o.put(r,St(t));case 8:return e.abrupt("return",a.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof ue?at.warn(e.t0.message):(u=ht.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),at.warn(u.message));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function St(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot=function(){"use strict";function e(t){var r=this;n(u)(this,e),this.container=t,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Rt(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return n(c)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return n(o)(n(s).mark((function t(){var r,i,a;return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=Nt(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),t)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return n(o)(n(s).mark((function t(){var r,i,a,o,u;return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=Nt(),i=At(e._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,u=$(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=o,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",u);case 17:case"end":return t.stop()}}),t)})))()}}]),e}();function Nt(){return(new Date).toISOString().substring(0,10)}function At(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),Lt(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),Lt(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var Ct,Rt=function(){"use strict";function e(t){n(u)(this,e),this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return n(c)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return n(o)(n(s).mark((function e(){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ee()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",te().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return n(o)(n(s).mark((function t(){var r;return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,_t(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),t)})))()}},{key:"overwrite",value:function(e){var t=this;return n(o)(n(s).mark((function r(){var i,a;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,t._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,t.read();case 10:return a=n.sent,n.abrupt("return",Et(t.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return n.stop()}}),r)})))()}},{key:"add",value:function(e){var t=this;return n(o)(n(s).mark((function r(){var i,a;return n(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,t._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,t.read();case 10:return a=r.sent,r.abrupt("return",Et(t.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:n(x)(a.heartbeats).concat(n(x)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function Lt(e){return $(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct="",ft(new Ae("platform-logger",(function(e){return new et(e)}),"PRIVATE")),ft(new Ae("heartbeat",(function(e){return new Ot(e)}),"PRIVATE")),bt(rt,it,Ct),bt(rt,it,"esm2017"),bt("fire-js","");o=a("bpxeT"),k=a("hKHmD"),x=a("8nrFW"),s=a("2TvXO");var Pt,Mt="@firebase/installations",Dt="0.6.0",Bt=1e4,Ut="w:".concat(Dt),jt="FIS_v2",Ft=36e5,zt=(Pt={},n(k)(Pt,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),n(k)(Pt,"not-registered","Firebase Installation is not registered."),n(k)(Pt,"installation-not-found","Firebase Installation not found."),n(k)(Pt,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),n(k)(Pt,"app-offline","Could not process request. Application offline."),n(k)(Pt,"delete-pending-registration","Can't delete installation while there is a pending registration request."),Pt),Wt=new ce("installations","Installations",zt);function Ht(e){return e instanceof ue&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function qt(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function Kt(e,t){return Jt.apply(this,arguments)}function Jt(){return(Jt=n(o)(n(s).mark((function e(t,r){var i,a;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:return i=e.sent,a=i.error,e.abrupt("return",Wt.create("request-failed",{requestName:t,serverCode:a.code,serverMessage:a.message,serverStatus:a.status}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Gt(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Xt(e,t){var n=t.refreshToken,r=Gt(e);return r.append("Authorization",function(e){return"".concat(jt," ").concat(e)}(n)),r}function Yt(e){return $t.apply(this,arguments)}function $t(){return($t=n(o)(n(s).mark((function e(t){var r;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:if(!((r=e.sent).status>=500&&r.status<600)){e.next=5;break}return e.abrupt("return",t());case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Qt(e,t){return Zt.apply(this,arguments)}function Zt(){return(Zt=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(s).mark((function e(t,r){var i,a,o,u,c,l,f,d,p,h,v,m;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.appConfig,a=t.heartbeatServiceProvider,o=r.fid,u=Vt(i),c=Gt(i),!(l=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,l.getHeartbeatsHeader();case 7:(f=e.sent)&&c.append("x-firebase-client",f);case 9:return d={fid:o,authVersion:jt,appId:i.appId,sdkVersion:Ut},p={method:"POST",headers:c,body:JSON.stringify(d)},e.next=13,Yt((function(){return fetch(u,p)}));case 13:if(!(h=e.sent).ok){e.next=22;break}return e.next=17,h.json();case 17:return v=e.sent,m={fid:v.fid||o,registrationStatus:2,refreshToken:v.refreshToken,authToken:qt(v.authToken)},e.abrupt("return",m);case 22:return e.next=24,Kt("Create Installation",h);case 24:throw e.sent;case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var tn=/^[cdef][\w-]{21}$/;function nn(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return(t=e,btoa((r=String).fromCharCode.apply(r,n(x)(t))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t,r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return tn.test(t)?t:""}catch(e){return""}}function rn(e){return"".concat(e.appName,"!").concat(e.appId)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var an=new Map;function on(e,t){var n=rn(e);sn(n,t),function(e,t){var n=cn();n&&n.postMessage({key:e,fid:t});ln()}(n,t)}function sn(e,t){var n=an.get(e);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}var un=null;function cn(){return!un&&"BroadcastChannel"in self&&((un=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){sn(e.data.key,e.data.fid)}),un}function ln(){0===an.size&&un&&(un.close(),un=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fn="firebase-installations-store",dn=null;function pn(){return dn||(dn=Xe("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(fn)}})),dn}function hn(e,t){return vn.apply(this,arguments)}function vn(){return(vn=n(o)(n(s).mark((function e(t,r){var i,a,o,u,c;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=rn(t),e.next=3,pn();case 3:return a=e.sent,o=a.transaction(fn,"readwrite"),u=o.objectStore(fn),e.next=8,u.get(i);case 8:return c=e.sent,e.next=11,u.put(r,i);case 11:return e.next=13,o.done;case 13:return c&&c.fid===r.fid||on(t,r.fid),e.abrupt("return",r);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function mn(e){return gn.apply(this,arguments)}function gn(){return(gn=n(o)(n(s).mark((function e(t){var r,i,a;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=rn(t),e.next=3,pn();case 3:return i=e.sent,a=i.transaction(fn,"readwrite"),e.next=7,a.objectStore(fn).delete(r);case 7:return e.next=9,a.done;case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function yn(e,t){return bn.apply(this,arguments)}function bn(){return(bn=n(o)(n(s).mark((function e(t,r){var i,a,o,u,c,l;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=rn(t),e.next=3,pn();case 3:return a=e.sent,o=a.transaction(fn,"readwrite"),u=o.objectStore(fn),e.next=8,u.get(i);case 8:if(c=e.sent,void 0!==(l=r(c))){e.next=15;break}return e.next=13,u.delete(i);case 13:e.next=17;break;case 15:return e.next=17,u.put(l,i);case 17:return e.next=19,o.done;case 19:return!l||c&&c.fid===l.fid||on(t,l.fid),e.abrupt("return",l);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function wn(e){return kn.apply(this,arguments)}function kn(){return(kn=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(s).mark((function e(t){var r,i;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,yn(t.appConfig,(function(e){var n=xn(e),i=_n(t,n);return r=i.registrationPromise,i.installationEntry}));case 3:if(""!==(i=e.sent).fid){e.next=9;break}return e.next=7,r;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:i,registrationPromise:r});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xn(e){return On(e||{fid:nn(),registrationStatus:0})}function _n(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(Wt.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return In.apply(this,arguments)}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:En(e)}:{installationEntry:t}}function In(){return(In=n(o)(n(s).mark((function e(t,r){var i;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Qt(t,r);case 3:return i=e.sent,e.abrupt("return",hn(t.appConfig,i));case 7:if(e.prev=7,e.t0=e.catch(0),!Ht(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,mn(t.appConfig);case 12:e.next=16;break;case 14:return e.next=16,hn(t.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function En(e){return Tn.apply(this,arguments)}function Tn(){return(Tn=n(o)(n(s).mark((function e(t){var r,i,a,o;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Sn(t.appConfig);case 2:r=e.sent;case 3:if(1!==r.registrationStatus){e.next=11;break}return e.next=6,en(100);case 6:return e.next=8,Sn(t.appConfig);case 8:r=e.sent,e.next=3;break;case 11:if(0!==r.registrationStatus){e.next=22;break}return e.next=14,wn(t);case 14:if(i=e.sent,a=i.installationEntry,!(o=i.registrationPromise)){e.next=21;break}return e.abrupt("return",o);case 21:return e.abrupt("return",a);case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Sn(e){return yn(e,(function(e){if(!e)throw Wt.create("installation-not-found");return On(e)}))}function On(e){return 1===(t=e).registrationStatus&&t.registrationTime+Bt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function Nn(e,t){return An.apply(this,arguments)}function An(){return(An=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(s).mark((function e(t,r){var i,a,o,u,c,l,f,d,p,h,v;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.appConfig,a=t.heartbeatServiceProvider,o=Cn(i,r),u=Xt(i,r),!(c=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,c.getHeartbeatsHeader();case 7:(l=e.sent)&&u.append("x-firebase-client",l);case 9:return f={installation:{sdkVersion:Ut,appId:i.appId}},d={method:"POST",headers:u,body:JSON.stringify(f)},e.next=13,Yt((function(){return fetch(o,d)}));case 13:if(!(p=e.sent).ok){e.next=22;break}return e.next=17,p.json();case 17:return h=e.sent,v=qt(h),e.abrupt("return",v);case 22:return e.next=24,Kt("Generate Auth Token",p);case 24:throw e.sent;case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Cn(e,t){var n=t.fid;return"".concat(Vt(e),"/").concat(n,"/authTokens:generate")}function Rn(e){return Ln.apply(this,arguments)}function Ln(){return Ln=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(s).mark((function e(t){var r,i,a,o,u=arguments;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]&&u[1],e.next=4,yn(t.appConfig,(function(e){if(!jn(e))throw Wt.create("not-registered");var n=e.authToken;if(!r&&Fn(n))return e;if(1===n.requestStatus)return i=Pn(t,r),e;if(!navigator.onLine)throw Wt.create("app-offline");var a=zn(e);return i=Bn(t,a),a}));case 4:if(a=e.sent,!i){e.next=11;break}return e.next=8,i;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a.authToken;case 12:return o=e.t0,e.abrupt("return",o);case 14:case"end":return e.stop()}}),e)}))),Ln.apply(this,arguments)}function Pn(e,t){return Mn.apply(this,arguments)}function Mn(){return(Mn=n(o)(n(s).mark((function e(t,r){var i,a;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Dn(t.appConfig);case 2:i=e.sent;case 3:if(1!==i.authToken.requestStatus){e.next=11;break}return e.next=6,en(100);case 6:return e.next=8,Dn(t.appConfig);case 8:i=e.sent,e.next=3;break;case 11:if(0!==(a=i.authToken).requestStatus){e.next=16;break}return e.abrupt("return",Rn(t,r));case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Dn(e){return yn(e,(function(e){if(!jn(e))throw Wt.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+Bt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function Bn(e,t){return Un.apply(this,arguments)}function Un(){return(Un=n(o)(n(s).mark((function e(t,r){var i,a,o;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Nn(t,r);case 3:return i=e.sent,a=Object.assign(Object.assign({},r),{authToken:i}),e.next=7,hn(t.appConfig,a);case 7:return e.abrupt("return",i);case 10:if(e.prev=10,e.t0=e.catch(0),!Ht(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,mn(t.appConfig);case 15:e.next=20;break;case 17:return o=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),e.next=20,hn(t.appConfig,o);case 20:throw e.t0;case 21:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function jn(e){return void 0!==e&&2===e.registrationStatus}function Fn(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Ft}(e)}function zn(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Wn(){return(Wn=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(s).mark((function e(t){var r,i,a,o;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,e.next=3,wn(r);case 3:return i=e.sent,a=i.installationEntry,(o=i.registrationPromise)?o.catch(console.error):Rn(r).catch(console.error),e.abrupt("return",a.fid);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Hn(){return Hn=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(s).mark((function e(t){var r,i,a,o=arguments;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]&&o[1],i=t,e.next=4,Vn(i);case 4:return e.next=6,Rn(i,r);case 6:return a=e.sent,e.abrupt("return",a.token);case 8:case"end":return e.stop()}}),e)}))),Hn.apply(this,arguments)}function Vn(e){return qn.apply(this,arguments)}function qn(){return(qn=n(o)(n(s).mark((function e(t){var r;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,wn(t);case 2:if(!(r=e.sent.registrationPromise)){e.next=6;break}return e.next=6,r;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Kn(e){return Wt.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jn="installations",Gn=function(e){var t=dt(e.getProvider("app").getImmediate(),Jn).getImmediate(),n={getId:function(){return function(e){return Wn.apply(this,arguments)}(t)},getToken:function(e){return function(e){return Hn.apply(this,arguments)}(t,e)}};return n};ft(new Ae(Jn,(function(e){var t=e.getProvider("app").getImmediate(),n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw Kn("App Configuration");if(!e.name)throw Kn("App Name");var t=!0,n=!1,r=void 0;try{for(var i,a=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(!e.options[o])throw Kn(o)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:dt(t,"heartbeat"),_delete:function(){return Promise.resolve()}}}),"PUBLIC")),ft(new Ae("installations-internal",Gn,"PRIVATE")),bt(Mt,Dt),bt(Mt,Dt,"esm2017");var Xn,Yn,$n,Qn="@firebase/performance",Zn="0.6.0",er=Zn,tr="FB-PERF-TRACE-START",nr="FB-PERF-TRACE-STOP",rr="FB-PERF-TRACE-MEASURE",ir="_wt_",ar="_fcp",or="_fid",sr="@firebase/performance/config",ur="@firebase/performance/configexpire",cr="Performance",lr=(Xn={},n(k)(Xn,"trace started","Trace {$traceName} was started before."),n(k)(Xn,"trace stopped","Trace {$traceName} is not running."),n(k)(Xn,"nonpositive trace startTime","Trace {$traceName} startTime should be positive."),n(k)(Xn,"nonpositive trace duration","Trace {$traceName} duration should be positive."),n(k)(Xn,"no window","Window is not available."),n(k)(Xn,"no app id","App id is not available."),n(k)(Xn,"no project id","Project id is not available."),n(k)(Xn,"no api key","Api key is not available."),n(k)(Xn,"invalid cc log","Attempted to queue invalid cc event"),n(k)(Xn,"FB not default","Performance can only start when Firebase app instance is the default one."),n(k)(Xn,"RC response not ok","RC response is not ok"),n(k)(Xn,"invalid attribute name","Attribute name {$attributeName} is invalid."),n(k)(Xn,"invalid attribute value","Attribute value {$attributeValue} is invalid."),n(k)(Xn,"invalid custom metric name","Custom metric name {$customMetricName} is invalid"),n(k)(Xn,"invalid String merger input","Input for String merger is invalid, contact support team to resolve."),n(k)(Xn,"already initialized","initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."),Xn),fr=new ce("performance",cr,lr),dr=new Ne(cr);dr.logLevel=ke.INFO;var pr,hr,vr=function(){"use strict";function e(t){if(n(u)(this,e),this.window=t,!t)throw fr.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}return n(c)(e,[{key:"getUrl",value:function(){return this.windowLocation.href.split("?")[0]}},{key:"mark",value:function(e){this.performance&&this.performance.mark&&this.performance.mark(e)}},{key:"measure",value:function(e,t,n){this.performance&&this.performance.measure&&this.performance.measure(e,t,n)}},{key:"getEntriesByType",value:function(e){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(e):[]}},{key:"getEntriesByName",value:function(e){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(e):[]}},{key:"getTimeOrigin",value:function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}},{key:"requiredApisAvailable",value:function(){return fetch&&Promise&&"undefined"!=typeof navigator&&navigator.cookieEnabled?!!ee()||(dr.info("IndexedDB is not supported by current browswer"),!1):(dr.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)}},{key:"setupObserver",value:function(e,t){this.PerformanceObserver&&new this.PerformanceObserver((function(e){var n=!0,r=!1,i=void 0;try{for(var a,o=e.getEntries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;t(s)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}})).observe({entryTypes:[e]})}}],[{key:"getInstance",value:function(){return void 0===Yn&&(Yn=new e($n)),Yn}}]),e}();function mr(){return pr}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gr(e,t){var n=e.length-t.length;if(n<0||n>1)throw fr.create("invalid String merger input");for(var r=[],i=0;i<e.length;i++)r.push(e.charAt(i)),t.length>i&&r.push(t.charAt(i));return r.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yr,br,wr=function(){"use strict";function e(){n(u)(this,e),this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=gr("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=gr("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}return n(c)(e,[{key:"getFlTransportFullUrl",value:function(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}}],[{key:"getInstance",value:function(){return void 0===hr&&(hr=new e),hr}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(br=yr||(yr={}))[br.UNKNOWN=0]="UNKNOWN",br[br.VISIBLE=1]="VISIBLE",br[br.HIDDEN=2]="HIDDEN";var kr=["firebase_","google_","ga_"],xr=new RegExp("^[a-zA-Z]\\w*$");function _r(){var e=vr.getInstance().navigator;return(null==e?void 0:e.serviceWorker)?e.serviceWorker.controller?2:3:1}function Ir(){switch(vr.getInstance().document.visibilityState){case"visible":return yr.VISIBLE;case"hidden":return yr.HIDDEN;default:return yr.UNKNOWN}}function Er(){var e=vr.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tr(e){var t,n=null===(t=e.options)||void 0===t?void 0:t.appId;if(!n)throw fr.create("no app id");return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Sr="0.0.1",Or={loggingEnabled:!0},Nr="FIREBASE_INSTALLATIONS_AUTH";function Ar(e,t){var n=function(){var e=vr.getInstance().localStorage;if(!e)return;var t=e.getItem(ur);if(!(t&&(n=t,Number(n)>Date.now())))return;var n;var r=e.getItem(sr);if(!r)return;try{return JSON.parse(r)}catch(e){return}}();return n?(Rr(n),Promise.resolve()):function(e,t){return(n=e.installations,r=n.getToken(),r.then((function(e){})),r).then((function(n){var r=function(e){var t,n=null===(t=e.options)||void 0===t?void 0:t.projectId;if(!n)throw fr.create("no project id");return n}(e.app),i=function(e){var t,n=null===(t=e.options)||void 0===t?void 0:t.apiKey;if(!n)throw fr.create("no api key");return n}(e.app),a="https://firebaseremoteconfig.googleapis.com/v1/projects/".concat(r,"/namespaces/fireperf:fetch?key=").concat(i),o=new Request(a,{method:"POST",headers:{Authorization:"".concat(Nr," ").concat(n)},body:JSON.stringify({app_instance_id:t,app_instance_id_token:n,app_id:Tr(e.app),app_version:er,sdk_version:Sr})});return fetch(o).then((function(e){if(e.ok)return e.json();throw fr.create("RC response not ok")}))})).catch((function(){dr.info(Cr)}));var n,r}(e,t).then(Rr).then((function(e){return function(e){var t=vr.getInstance().localStorage;if(!e||!t)return;t.setItem(sr,JSON.stringify(e)),t.setItem(ur,String(Date.now()+36e5*wr.getInstance().configTimeToLive))}(e)}),(function(){}))}var Cr="Could not fetch config, will use default configs";function Rr(e){if(!e)return e;var t=wr.getInstance(),n=e.entries||{};return void 0!==n.fpr_enabled?t.loggingEnabled="true"===String(n.fpr_enabled):t.loggingEnabled=Or.loggingEnabled,n.fpr_log_source?t.logSource=Number(n.fpr_log_source):Or.logSource&&(t.logSource=Or.logSource),n.fpr_log_endpoint_url?t.logEndPointUrl=n.fpr_log_endpoint_url:Or.logEndPointUrl&&(t.logEndPointUrl=Or.logEndPointUrl),n.fpr_log_transport_key?t.transportKey=n.fpr_log_transport_key:Or.transportKey&&(t.transportKey=Or.transportKey),void 0!==n.fpr_vc_network_request_sampling_rate?t.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):void 0!==Or.networkRequestsSamplingRate&&(t.networkRequestsSamplingRate=Or.networkRequestsSamplingRate),void 0!==n.fpr_vc_trace_sampling_rate?t.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):void 0!==Or.tracesSamplingRate&&(t.tracesSamplingRate=Or.tracesSamplingRate),t.logTraceAfterSampling=Lr(t.tracesSamplingRate),t.logNetworkAfterSampling=Lr(t.networkRequestsSamplingRate),e}function Lr(e){return Math.random()<=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pr,Mr=1;function Dr(e){return Mr=2,Pr=Pr||function(e){return function(){var e=vr.getInstance().document;return new Promise((function(t){if(e&&"complete"!==e.readyState){var n=function(){"complete"===e.readyState&&(e.removeEventListener("readystatechange",n),t())};e.addEventListener("readystatechange",n)}else t()}))}().then((function(){return t=e.installations,(n=t.getId()).then((function(e){pr=e})),n;var t,n})).then((function(t){return Ar(e,t)})).then((function(){return Br()}),(function(){return Br()}))}(e),Pr}function Br(){Mr=3}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ur,jr=1e4,Fr=3,zr=[],Wr=!1;function Hr(e){setTimeout((function(){var e,t;if(0!==Fr)return zr.length?(e=zr.splice(0,1e3),t=e.map((function(e){return{source_extension_json_proto3:e.message,event_time_ms:String(e.eventTime)}})),void function(e,t){return function(e){var t=wr.getInstance().getFlTransportFullUrl();return fetch(t,{method:"POST",body:JSON.stringify(e)})}(e).then((function(e){return e.ok||dr.info("Call to Firebase backend failed."),e.json()})).then((function(e){var r=Number(e.nextRequestWaitMillis),i=jr;isNaN(r)||(i=Math.max(r,i));var a=e.logResponseDetails;Array.isArray(a)&&a.length>0&&"RETRY_REQUEST_LATER"===a[0].responseAction&&(zr=n(x)(t).concat(n(x)(zr)),dr.info("Retry transport request later.")),Fr=3,Hr(i)}))}({request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:wr.getInstance().logSource,log_event:t},e).catch((function(){zr=n(x)(e).concat(n(x)(zr)),Fr--,dr.info("Tries left: ".concat(Fr,".")),Hr(jr)}))):Hr(jr)}),e)}function Vr(e){if(!e.eventTime||!e.message)throw fr.create("invalid cc log");zr=n(x)(zr).concat([e])}function qr(e,t){var r;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ur||(r=Gr,Ur=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];Vr({message:r.apply(void 0,n(x)(t)),eventTime:Date.now()})}),Ur(e,t)}function Kr(e){var t=wr.getInstance();!t.instrumentationEnabled&&e.isAuto||(t.dataCollectionEnabled||e.isAuto)&&vr.getInstance().requiredApisAvailable()&&(e.isAuto&&Ir()!==yr.VISIBLE||(3===Mr?Jr(e):Dr(e.performanceController).then((function(){return Jr(e)}),(function(){return Jr(e)}))))}function Jr(e){if(mr()){var t=wr.getInstance();t.loggingEnabled&&t.logTraceAfterSampling&&setTimeout((function(){return qr(e,1)}),0)}}function Gr(e,t){return 0===t?(r={url:(n=e).url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},i={application_info:Xr(n.performanceController.app),network_request_metric:r},JSON.stringify(i)):function(e){var t={name:e.name,is_auto:e.isAuto,client_start_time_us:e.startTimeUs,duration_us:e.durationUs};0!==Object.keys(e.counters).length&&(t.counters=e.counters);var n=e.getAttributes();0!==Object.keys(n).length&&(t.custom_attributes=n);var r={application_info:Xr(e.performanceController.app),trace_metric:t};return JSON.stringify(r)}(e);var n,r,i}function Xr(e){return{google_app_id:Tr(e),app_instance_id:mr(),web_app_info:{sdk_version:er,page_url:vr.getInstance().getUrl(),service_worker_status:_r(),visibility_state:Ir(),effective_connection_type:Er()},application_process_state:0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yr=["_fp",ar,or];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var $r=function(){"use strict";function e(t,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3?arguments[3]:void 0;n(u)(this,e),this.performanceController=t,this.name=r,this.isAuto=i,this.state=1,this.customAttributes={},this.counters={},this.api=vr.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark="".concat(tr,"-").concat(this.randomId,"-").concat(this.name),this.traceStopMark="".concat(nr,"-").concat(this.randomId,"-").concat(this.name),this.traceMeasure=a||"".concat(rr,"-").concat(this.randomId,"-").concat(this.name),a&&this.calculateTraceMetrics())}return n(c)(e,[{key:"start",value:function(){if(1!==this.state)throw fr.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}},{key:"stop",value:function(){if(2!==this.state)throw fr.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),Kr(this)}},{key:"record",value:function(e,t,n){if(e<=0)throw fr.create("nonpositive trace startTime",{traceName:this.name});if(t<=0)throw fr.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*t),this.startTimeUs=Math.floor(1e3*e),n&&n.attributes&&(this.customAttributes=Object.assign({},n.attributes)),n&&n.metrics){var r=!0,i=!1,a=void 0;try{for(var o,s=Object.keys(n.metrics)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;isNaN(Number(n.metrics[u]))||(this.counters[u]=Math.floor(Number(n.metrics[u])))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}Kr(this)}},{key:"incrementMetric",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;void 0===this.counters[e]?this.putMetric(e,t):this.putMetric(e,this.counters[e]+t)}},{key:"putMetric",value:function(e,t){if(i=e,a=this.name,0===i.length||i.length>100||!(a&&a.startsWith(ir)&&Yr.indexOf(i)>-1)&&i.startsWith("_"))throw fr.create("invalid custom metric name",{customMetricName:e});var n,r,i,a;this.counters[e]=(n=null!=t?t:0,(r=Math.floor(n))<n&&dr.info("Metric value should be an Integer, setting the value as : ".concat(r,".")),r)}},{key:"getMetric",value:function(e){return this.counters[e]||0}},{key:"putAttribute",value:function(e,t){var n,r=!(0===(n=e).length||n.length>40||kr.some((function(e){return n.startsWith(e)}))||!n.match(xr)),i=function(e){return 0!==e.length&&e.length<=100}(t);if(r&&i)this.customAttributes[e]=t;else{if(!r)throw fr.create("invalid attribute name",{attributeName:e});if(!i)throw fr.create("invalid attribute value",{attributeValue:t})}}},{key:"getAttribute",value:function(e){return this.customAttributes[e]}},{key:"removeAttribute",value:function(e){void 0!==this.customAttributes[e]&&delete this.customAttributes[e]}},{key:"getAttributes",value:function(){return Object.assign({},this.customAttributes)}},{key:"setStartTime",value:function(e){this.startTimeUs=e}},{key:"setDuration",value:function(e){this.durationUs=e}},{key:"calculateTraceMetrics",value:function(){var e=this.api.getEntriesByName(this.traceMeasure),t=e&&e[0];t&&(this.durationUs=Math.floor(1e3*t.duration),this.startTimeUs=Math.floor(1e3*(t.startTime+this.api.getTimeOrigin())))}}],[{key:"createOobTrace",value:function(t,n,r,i){var a=vr.getInstance().getUrl();if(a){var o=new e(t,ir+a,!0),s=Math.floor(1e3*vr.getInstance().getTimeOrigin());o.setStartTime(s),n&&n[0]&&(o.setDuration(Math.floor(1e3*n[0].duration)),o.putMetric("domInteractive",Math.floor(1e3*n[0].domInteractive)),o.putMetric("domContentLoadedEventEnd",Math.floor(1e3*n[0].domContentLoadedEventEnd)),o.putMetric("loadEventEnd",Math.floor(1e3*n[0].loadEventEnd)));if(r){var u=r.find((function(e){return"first-paint"===e.name}));u&&u.startTime&&o.putMetric("_fp",Math.floor(1e3*u.startTime));var c=r.find((function(e){return"first-contentful-paint"===e.name}));c&&c.startTime&&o.putMetric(ar,Math.floor(1e3*c.startTime)),i&&o.putMetric(or,Math.floor(1e3*i))}Kr(o)}}},{key:"createUserTimingTrace",value:function(t,n){Kr(new e(t,n,!1,n))}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e,t){var n=t;if(n&&void 0!==n.responseStart){var r=vr.getInstance().getTimeOrigin(),i=Math.floor(1e3*(n.startTime+r)),a=n.responseStart?Math.floor(1e3*(n.responseStart-n.startTime)):void 0,o=Math.floor(1e3*(n.responseEnd-n.startTime));!function(e){var t=wr.getInstance();if(t.instrumentationEnabled){var n=e.url,r=t.logEndPointUrl.split("?")[0],i=t.flTransportEndpointUrl.split("?")[0];n!==r&&n!==i&&t.loggingEnabled&&t.logNetworkAfterSampling&&setTimeout((function(){return qr(e,0)}),0)}}({performanceController:e,url:n.name&&n.name.split("?")[0],responsePayloadBytes:n.transferSize,startTimeUs:i,timeToResponseInitiatedUs:a,timeToResponseCompletedUs:o})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(e){mr()&&(setTimeout((function(){return function(e){var t=vr.getInstance(),n=t.getEntriesByType("navigation"),r=t.getEntriesByType("paint");if(t.onFirstInputDelay){var i=setTimeout((function(){$r.createOobTrace(e,n,r),i=void 0}),5e3);t.onFirstInputDelay((function(t){i&&(clearTimeout(i),$r.createOobTrace(e,n,r,t))}))}else $r.createOobTrace(e,n,r)}(e)}),0),setTimeout((function(){return function(e){var t=vr.getInstance(),n=t.getEntriesByType("resource"),r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;Qr(e,u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}t.setupObserver("resource",(function(t){return Qr(e,t)}))}(e)}),0),setTimeout((function(){return function(e){var t=vr.getInstance(),n=t.getEntriesByType("measure"),r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;ei(e,u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}t.setupObserver("measure",(function(t){return ei(e,t)}))}(e)}),0))}function ei(e,t){var n=t.name;n.substring(0,rr.length)!==rr&&$r.createUserTimingTrace(e,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ti=function(){"use strict";function e(t,r){n(u)(this,e),this.app=t,this.installations=r,this.initialized=!1}return n(c)(e,[{key:"_init",value:function(e){var t=this;this.initialized||(void 0!==(null==e?void 0:e.dataCollectionEnabled)&&(this.dataCollectionEnabled=e.dataCollectionEnabled),void 0!==(null==e?void 0:e.instrumentationEnabled)&&(this.instrumentationEnabled=e.instrumentationEnabled),vr.getInstance().requiredApisAvailable()?te().then((function(e){if(e){var n=t;Wr||(Hr(5500),Wr=!0),Dr(t).then((function(){return Zr(n)}),(function(){return Zr(n)})),t.initialized=!0}})).catch((function(e){dr.info("Environment doesn't support IndexedDB: ".concat(e))})):dr.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}},{key:"instrumentationEnabled",get:function(){return wr.getInstance().instrumentationEnabled},set:function(e){wr.getInstance().instrumentationEnabled=e}},{key:"dataCollectionEnabled",get:function(){return wr.getInstance().dataCollectionEnabled},set:function(e){wr.getInstance().dataCollectionEnabled=e}}]),e}();function ni(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt(),t=dt(e=we(e),"performance"),n=t.getImmediate();return n}ft(new Ae("performance",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if("[DEFAULT]"!==r.name)throw fr.create("FB not default");if("undefined"==typeof window)throw fr.create("no window");!function(e){$n=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(window);var a=new ti(r,i);return a._init(n),a}),"PUBLIC")),bt(Qn,Zn),bt(Qn,Zn,"esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
bt("firebase","9.15.0","app");_=a("ds8z5"),o=a("bpxeT"),u=a("8MBJY"),c=a("a2hTj"),k=a("hKHmD");var ri={};Object.defineProperty(ri,"__esModule",{value:!0}),ri.default=function(e,t,n){return ai(e,t,n)};var ii=function(e){return e&&e.__esModule?e:{default:e}}(a("2mz0K"));function ai(e,t,n){return(ai="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=ii.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var oi=a("fVNic");I=a("eYQtU"),E=a("1t1Wn"),x=a("8nrFW"),D=a("2MbLg"),s=a("2TvXO");function si(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function ui(){return n(k)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var ci=ui,li=new ce("auth","Firebase",ui()),fi=new Ne("@firebase/auth");function di(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var a;fi.logLevel<=ke.ERROR&&(a=fi).error.apply(a,["Auth (".concat(mt,"): ").concat(e)].concat(n(x)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];throw gi.apply(void 0,[e].concat(n(x)(r)))}function hi(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return gi.apply(void 0,[e].concat(n(x)(r)))}function vi(e,t,r){var i=Object.assign(Object.assign({},ci()),n(k)({},t,r));return new ce("auth","Firebase",i).create(t,{appName:e.name})}function mi(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&pi(e,"argument-error"),vi(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function gi(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var a;if("string"!=typeof e){var o,s=r[0],u=n(x)(r.slice(1));return u[0]&&(u[0].appName=e.name),(o=e._errorFactory).create.apply(o,[s].concat(n(x)(u)))}return(a=li).create.apply(a,[e].concat(n(x)(r)))}function yi(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!e)throw gi.apply(void 0,[t].concat(n(x)(i)))}function bi(e){var t="INTERNAL ASSERTION FAILED: "+e;throw di(t),new Error(t)}function wi(e,t){e||bi(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ki=new Map;function xi(e){wi(e instanceof Function,"Expected a class definition");var t=ki.get(e);return t?(wi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ki.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(e,t){var n=dt(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(pe(n.getOptions(),null!=t?t:{}))return r;pi(r,"already-initialized")}return n.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ii(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ei(){return"http:"===Ti()||"https:"===Ti()}function Ti(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!Ei()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Oi=function(){"use strict";function e(t,r){n(u)(this,e),this.shortDelay=t,this.longDelay=r,wi(r>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Z())||"object"==typeof navigator&&"ReactNative"===navigator.product}return n(c)(e,[{key:"get",value:function(){return Si()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(e,t){wi(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ai,Ci=function(){"use strict";function e(){n(u)(this,e)}return n(c)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void bi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void bi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void bi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),Ri=(Ai={},n(k)(Ai,"CREDENTIAL_MISMATCH","custom-token-mismatch"),n(k)(Ai,"MISSING_CUSTOM_TOKEN","internal-error"),n(k)(Ai,"INVALID_IDENTIFIER","invalid-email"),n(k)(Ai,"MISSING_CONTINUE_URI","internal-error"),n(k)(Ai,"INVALID_PASSWORD","wrong-password"),n(k)(Ai,"MISSING_PASSWORD","internal-error"),n(k)(Ai,"EMAIL_EXISTS","email-already-in-use"),n(k)(Ai,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),n(k)(Ai,"INVALID_IDP_RESPONSE","invalid-credential"),n(k)(Ai,"INVALID_PENDING_TOKEN","invalid-credential"),n(k)(Ai,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),n(k)(Ai,"MISSING_REQ_TYPE","internal-error"),n(k)(Ai,"EMAIL_NOT_FOUND","user-not-found"),n(k)(Ai,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),n(k)(Ai,"EXPIRED_OOB_CODE","expired-action-code"),n(k)(Ai,"INVALID_OOB_CODE","invalid-action-code"),n(k)(Ai,"MISSING_OOB_CODE","internal-error"),n(k)(Ai,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),n(k)(Ai,"INVALID_ID_TOKEN","invalid-user-token"),n(k)(Ai,"TOKEN_EXPIRED","user-token-expired"),n(k)(Ai,"USER_NOT_FOUND","user-token-expired"),n(k)(Ai,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),n(k)(Ai,"INVALID_CODE","invalid-verification-code"),n(k)(Ai,"INVALID_SESSION_INFO","invalid-verification-id"),n(k)(Ai,"INVALID_TEMPORARY_PROOF","invalid-credential"),n(k)(Ai,"MISSING_SESSION_INFO","missing-verification-id"),n(k)(Ai,"SESSION_EXPIRED","code-expired"),n(k)(Ai,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),n(k)(Ai,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),n(k)(Ai,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),n(k)(Ai,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),n(k)(Ai,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),n(k)(Ai,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),n(k)(Ai,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),n(k)(Ai,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),n(k)(Ai,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),n(k)(Ai,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),n(k)(Ai,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Ai),Li=new Oi(3e4,6e4);function Pi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Mi(e,t,n,r){return Di.apply(this,arguments)}function Di(){return Di=n(o)(n(s).mark((function e(t,r,i,a){var u,c=arguments;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=c.length>4&&void 0!==c[4]?c[4]:{},e.abrupt("return",Bi(t,u,n(o)(n(s).mark((function e(){var o,u,c,l;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},u={},a&&("GET"===r?u=a:o={body:JSON.stringify(a)}),c=ve(Object.assign({key:t.config.apiKey},u)).slice(1),e.next=6,t._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),e.abrupt("return",Ci.fetch()(zi(t,t.config.apiHost,i,c),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),Di.apply(this,arguments)}function Bi(e,t,n){return Ui.apply(this,arguments)}function Ui(){return(Ui=n(o)(n(s).mark((function e(t,r,i){var a,o,u,c,l,f,d,p,h;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t._canInitEmulator=!1,a=Object.assign(Object.assign({},Ri),r),e.prev=2,o=new Wi(t),e.next=6,Promise.race([i(),o.promise]);case 6:return u=e.sent,o.clearNetworkTimeout(),e.next=10,u.json();case 10:if(!("needConfirmation"in(c=e.sent))){e.next=13;break}throw Hi(t,"account-exists-with-different-credential",c);case 13:if(!u.ok||"errorMessage"in c){e.next=17;break}return e.abrupt("return",c);case 17:if(l=u.ok?c.errorMessage:c.error.message,f=n(E)(l.split(" : "),2),d=f[0],p=f[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==d){e.next=23;break}throw Hi(t,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==d){e.next=27;break}throw Hi(t,"email-already-in-use",c);case 27:if("USER_DISABLED"!==d){e.next=29;break}throw Hi(t,"user-disabled",c);case 29:if(h=a[d]||d.toLowerCase().replace(/[_\s]+/g,"-"),!p){e.next=34;break}throw vi(t,h,p);case 34:pi(t,h);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof ue)){e.next=41;break}throw e.t0;case 41:pi(t,"network-request-failed");case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function ji(e,t,n,r){return Fi.apply(this,arguments)}function Fi(){return Fi=n(o)(n(s).mark((function e(t,r,i,a){var o,u,c=arguments;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,Mi(t,r,i,a,o);case 3:return"mfaPendingCredential"in(u=e.sent)&&pi(t,"multi-factor-auth-required",{_serverResponse:u}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)}))),Fi.apply(this,arguments)}function zi(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?Ni(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Wi=function(){"use strict";function e(t){var r=this;n(u)(this,e),this.auth=t,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(hi(n.auth,"network-request-failed"))}),Li.get())}))}return n(c)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function Hi(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=hi(e,t,r);return i.customData._tokenResponse=n,i}function Vi(e,t){return qi.apply(this,arguments)}function qi(){return(qi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(s).mark((function e(t,r){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Mi(t,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ki(e,t){return Ji.apply(this,arguments)}function Ji(){return(Ji=n(o)(n(s).mark((function e(t,r){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Mi(t,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(){return Xi=n(o)(n(s).mark((function e(t){var r,i,a,o,u,c,l=arguments;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],i=we(t),e.next=4,i.getIdToken(r);case 4:return a=e.sent,yi((o=$i(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),u="object"==typeof o.firebase?o.firebase:void 0,c=null==u?void 0:u.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:Gi(Yi(o.auth_time)),issuedAtTime:Gi(Yi(o.iat)),expirationTime:Gi(Yi(o.exp)),signInProvider:c||null,signInSecondFactor:(null==u?void 0:u.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),Xi.apply(this,arguments)}function Yi(e){return 1e3*Number(e)}function $i(e){var t=n(E)(e.split("."),3),r=t[0],i=t[1],a=t[2];if(void 0===r||void 0===i||void 0===a)return di("JWT malformed, contained fewer than 3 sections"),null;try{var o=Q(i);return o?JSON.parse(o):(di("Failed to decode base64 JWT payload"),null)}catch(e){return di("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function Qi(e,t){return Zi.apply(this,arguments)}function Zi(){return Zi=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(s).mark((function e(t,r){var i=arguments;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof ue&&ea(e.t0))){e.next=15;break}if(t.auth.currentUser!==t){e.next=15;break}return e.next=15,t.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),Zi.apply(this,arguments)}function ea(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ta=function(){"use strict";function e(t){n(u)(this,e),this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return n(c)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var t=this.getInterval(e),r=this;this.timerId=setTimeout(n(o)(n(s).mark((function e(){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),e)}))),t)}}},{key:"iteration",value:function(){var e=this;return n(o)(n(s).mark((function t(){return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.user.getIdToken(!0);case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)&&e.schedule(!0),t.abrupt("return");case 9:e.schedule();case 10:case"end":return t.stop()}}),t,null,[[0,5]])})))()}}]),e}(),na=function(){"use strict";function e(t,r){n(u)(this,e),this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}return n(c)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=Gi(this.lastLoginAt),this.creationTime=Gi(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(e){return ia.apply(this,arguments)}function ia(){return(ia=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(s).mark((function e(t){var r,i,a,o,u,c,l,f,d,p,h;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.auth,e.next=4,t.getIdToken();case 4:return a=e.sent,e.next=7,Qi(t,Ki(i,{idToken:a}));case 7:yi(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),u=o.users[0],t._notifyReloadListener(u),c=(null===(r=u.providerUserInfo)||void 0===r?void 0:r.length)?sa(u.providerUserInfo):[],l=oa(t.providerData,c),f=t.isAnonymous,d=!(t.email&&u.passwordHash||(null==l?void 0:l.length)),p=!!f&&d,h={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:l,metadata:new na(u.createdAt,u.lastLoginAt),isAnonymous:p},Object.assign(t,h);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function aa(){return(aa=n(o)(n(s).mark((function e(t){var r;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=we(t),e.next=3,ra(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oa(e,t){var r=e.filter((function(e){return!t.some((function(t){return t.providerId===e.providerId}))}));return n(x)(r).concat(n(x)(t))}function sa(e){return e.map((function(e){var t=e.providerId,n=si(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function ua(e,t){return ca.apply(this,arguments)}function ca(){return(ca=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(s).mark((function e(t,r){var i;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Bi(t,{},n(o)(n(s).mark((function e(){var i,a,o,u,c,l;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ve({grant_type:"refresh_token",refresh_token:r}).slice(1),a=t.config,o=a.tokenApiHost,u=a.apiKey,c=zi(t,o,"/v1/token","key=".concat(u)),e.next=5,t._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Ci.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var la=function(){"use strict";function e(){n(u)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return n(c)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){yi(e.idToken,"internal-error"),yi(void 0!==e.idToken,"internal-error"),yi(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,yi(n=$i(t),"internal-error"),yi(void 0!==n.exp,"internal-error"),yi(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n(o)(n(s).mark((function i(){return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(yi(!r.accessToken||r.refreshToken,e,"user-token-expired"),t||!r.accessToken||r.isExpired){n.next=3;break}return n.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){n.next=7;break}return n.next=6,r.refresh(e,r.refreshToken);case 6:return n.abrupt("return",r.accessToken);case 7:return n.abrupt("return",null);case 8:case"end":return n.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,t){var r=this;return n(o)(n(s).mark((function i(){var a,o,u,c;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ua(e,t);case 2:a=n.sent,o=a.accessToken,u=a.refreshToken,c=a.expiresIn,r.updateTokensAndExpiration(o,u,Number(c));case 7:case"end":return n.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return bi("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new e;return r&&(yi("string"==typeof r,"internal-error",{appName:t}),o.refreshToken=r),i&&(yi("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(yi("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(e,t){yi("string"==typeof e||void 0===e,"internal-error",{appName:t})}var da=function(){"use strict";function e(t){n(u)(this,e);var r=t.uid,i=t.auth,a=t.stsTokenManager,o=si(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ta(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?n(x)(o.providerData):[],this.metadata=new na(o.createdAt||void 0,o.lastLoginAt||void 0)}return n(c)(e,[{key:"getIdToken",value:function(e){var t=this;return n(o)(n(s).mark((function r(){var i;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Qi(t,t.stsTokenManager.getToken(t.auth,e));case 2:if(yi(i=n.sent,t.auth,"internal-error"),t.accessToken===i){n.next=9;break}return t.accessToken=i,n.next=8,t.auth._persistUserIfCurrent(t);case 8:t.auth._notifyListenersIfCurrent(t);case 9:return n.abrupt("return",i);case 10:case"end":return n.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Xi.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return aa.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(yi(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){yi(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n(o)(n(s).mark((function i(){var a;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),a=!0),!t){n.next=5;break}return n.next=5,ra(r);case 5:return n.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return n.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return n(o)(n(s).mark((function t(){var r;return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return r=t.sent,t.next=5,Qi(e,Vi(e.auth,{idToken:r}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),t)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,a,o,s,u,c,l,f=null!==(r=n.displayName)&&void 0!==r?r:void 0,d=null!==(i=n.email)&&void 0!==i?i:void 0,p=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,h=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=n.createdAt)&&void 0!==c?c:void 0,y=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,b=n.uid,w=n.emailVerified,k=n.isAnonymous,x=n.providerData,_=n.stsTokenManager;yi(b&&_,t,"internal-error");var I=la.fromJSON(this.name,_);yi("string"==typeof b,t,"internal-error"),fa(f,t.name),fa(d,t.name),yi("boolean"==typeof w,t,"internal-error"),yi("boolean"==typeof k,t,"internal-error"),fa(p,t.name),fa(h,t.name),fa(v,t.name),fa(m,t.name),fa(g,t.name),fa(y,t.name);var E=new e({uid:b,auth:t,email:d,emailVerified:w,displayName:f,isAnonymous:k,photoURL:h,phoneNumber:p,tenantId:v,stsTokenManager:I,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(E.providerData=x.map((function(e){return Object.assign({},e)}))),m&&(E._redirectEventId=m),E}},{key:"_fromIdTokenResponse",value:function(t,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n(o)(n(s).mark((function a(){var o,u;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(o=new la).updateFromServerResponse(r),u=new e({uid:r.localId,auth:t,stsTokenManager:o,isAnonymous:i}),n.next=5,ra(u);case 5:return n.abrupt("return",u);case 6:case"end":return n.stop()}}),a)})))()}}]),e}(),pa=function(){"use strict";function e(){n(u)(this,e),this.type="NONE",this.storage={}}return n(c)(e,[{key:"_isAvailable",value:function(){return n(o)(n(s).mark((function e(){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,t){var r=this;return n(o)(n(s).mark((function i(){return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r.storage[e]=t;case 1:case"end":return n.stop()}}),i)})))()}},{key:"_get",value:function(e){var t=this;return n(o)(n(s).mark((function r(){var i;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t.storage[e],n.abrupt("return",void 0===i?null:i);case 2:case"end":return n.stop()}}),r)})))()}},{key:"_remove",value:function(e){var t=this;return n(o)(n(s).mark((function r(){return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:delete t.storage[e];case 1:case"end":return n.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pa.type="NONE";var ha=pa;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var ma=function(){"use strict";function e(t,r,i){n(u)(this,e),this.persistence=t,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=va(this.userKey,o.apiKey,s),this.fullPersistenceKey=va("persistence",o.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return n(c)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return n(o)(n(s).mark((function t(){var r;return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return r=t.sent,t.abrupt("return",r?da._fromJSON(e.auth,r):null);case 4:case"end":return t.stop()}}),t)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var t=this;return n(o)(n(s).mark((function r(){var i;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.persistence!==e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,t.getCurrentUser();case 4:return i=n.sent,n.next=7,t.removeCurrentUser();case 7:if(t.persistence=e,!i){n.next=10;break}return n.abrupt("return",t.setCurrentUser(i));case 10:case"end":return n.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(t,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return n(o)(n(s).mark((function a(){var u,c,l,f,d,p,h,v,m,g,y,b,w;return n(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new e(xi(ha),t,i));case 2:return a.next=4,Promise.all(r.map(function(){var e=n(o)(n(s).mark((function e(t){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",t);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:u=a.sent.filter((function(e){return e})),c=u[0]||xi(ha),l=va(i,t.config.apiKey,t.name),f=null,d=!0,p=!1,h=void 0,a.prev=9,v=r[Symbol.iterator]();case 11:if(d=(m=v.next()).done){a.next=29;break}return g=m.value,a.prev=13,a.next=16,g._get(l);case 16:if(!(y=a.sent)){a.next=22;break}return b=da._fromJSON(t,y),g!==c&&(f=b),c=g,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:d=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),p=!0,h=a.t1;case 35:a.prev=35,a.prev=36,d||null==v.return||v.return();case 38:if(a.prev=38,!p){a.next=41;break}throw h;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(w=u.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&w.length){a.next=46;break}return a.abrupt("return",new e(c,t,i));case 46:if(c=w[0],!f){a.next=50;break}return a.next=50,c._set(l,f.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var e=n(o)(n(s).mark((function e(t){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t===c){e.next=8;break}return e.prev=1,e.next=4,t._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return a.abrupt("return",new e(c,t,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ka(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ya(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_a(t))return"Blackberry";if(Ia(t))return"Webos";if(ba(t))return"Safari";if((t.includes("chrome/")||wa(t))&&!t.includes("edge/"))return"Chrome";if(xa(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function ya(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z();return/firefox\//i.test(e)}function ba(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function wa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z();return/crios\//i.test(e)}function ka(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z();return/iemobile/i.test(e)}function xa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z();return/android/i.test(e)}function _a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z();return/blackberry/i.test(e)}function Ia(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z();return/webos/i.test(e)}function Ea(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ta(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z();return Ea(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Sa(){return((e=Z()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function Oa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z();return Ea(e)||xa(e)||Ia(e)||_a(e)||/windows phone/i.test(e)||ka(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Na(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=ga(Z());break;case"Worker":t="".concat(ga(Z()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(mt,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Aa=function(){"use strict";function e(t){n(u)(this,e),this.auth=t,this.queue=[]}return n(c)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var t=this;return n(o)(n(s).mark((function r(){var i,a,o,u,c,l,f,d,p,h,v,m,g;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.auth.currentUser!==e){n.next=2;break}return n.abrupt("return");case 2:i=[],n.prev=3,a=!0,o=!1,u=void 0,n.prev=5,c=t.queue[Symbol.iterator]();case 7:if(a=(l=c.next()).done){n.next=15;break}return f=l.value,n.next=11,f(e);case 11:f.onAbort&&i.push(f.onAbort);case 12:a=!0,n.next=7;break;case 15:n.next=21;break;case 17:n.prev=17,n.t0=n.catch(5),o=!0,u=n.t0;case 21:n.prev=21,n.prev=22,a||null==c.return||c.return();case 24:if(n.prev=24,!o){n.next=27;break}throw u;case 27:return n.finish(24);case 28:return n.finish(21);case 29:n.next=52;break;case 31:for(n.prev=31,n.t1=n.catch(3),i.reverse(),d=!0,p=!1,h=void 0,n.prev=35,v=i[Symbol.iterator]();!(d=(m=v.next()).done);d=!0){g=m.value;try{g()}catch(e){}}n.next=43;break;case 39:n.prev=39,n.t2=n.catch(35),p=!0,h=n.t2;case 43:n.prev=43,n.prev=44,d||null==v.return||v.return();case 46:if(n.prev=46,!p){n.next=49;break}throw h;case 49:return n.finish(46);case 50:return n.finish(43);case 51:throw t.auth._errorFactory.create("login-blocked",{originalMessage:null===n.t1||void 0===n.t1?void 0:n.t1.message});case 52:case"end":return n.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),e}(),Ca=function(){"use strict";function e(t,r,i){n(u)(this,e),this.app=t,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new La(this),this.idTokenSubscription=new La(this),this.beforeStateQueue=new Aa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=li,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}return n(c)(e,[{key:"_initializeWithPersistence",value:function(e,t){t&&(this._popupRedirectResolver=xi(t));var r=this;return this._initializationPromise=this.queue(n(o)(n(s).mark((function i(){var a,o;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._deleted){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,ma.create(r,e);case 5:if(r.persistenceManager=n.sent,!r._deleted){n.next=8;break}return n.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){n.next=16;break}return n.prev=9,n.next=12,r._popupRedirectResolver._initialize(r);case 12:n.next=16;break;case 14:n.prev=14,n.t0=n.catch(9);case 16:return n.next=18,r.initializeCurrentUser(t);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){n.next=21;break}return n.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return n.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return n(o)(n(s).mark((function t(){var r;return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(r=t.sent,e.currentUser||r){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!r||e.currentUser.uid!==r.uid){t.next=12;break}return e._currentUser._assign(r),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(r,!0);case 14:case"end":return t.stop()}}),t)})))()}},{key:"initializeCurrentUser",value:function(e){var t=this;return n(o)(n(s).mark((function r(){var i,a,o,u,c,l,f;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,t.assertedPersistence.getCurrentUser();case 3:if(a=n.sent,o=a,u=!1,!e||!t.config.authDomain){n.next=15;break}return n.next=9,t.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=t.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==o?void 0:o._redirectEventId,n.next=13,t.tryRedirectSignIn(e);case 13:f=n.sent,c&&c!==l||!(null==f?void 0:f.user)||(o=f.user,u=!0);case 15:if(o){n.next=17;break}return n.abrupt("return",t.directlySetCurrentUser(null));case 17:if(o._redirectEventId){n.next=33;break}if(!u){n.next=28;break}return n.prev=19,n.next=22,t.beforeStateQueue.runMiddleware(o);case 22:n.next=28;break;case 24:n.prev=24,n.t0=n.catch(19),o=a,t._popupRedirectResolver._overrideRedirectResult(t,(function(){return Promise.reject(n.t0)}));case 28:if(!o){n.next=32;break}return n.abrupt("return",t.reloadAndSetCurrentUserOrClear(o));case 32:return n.abrupt("return",t.directlySetCurrentUser(null));case 33:return yi(t._popupRedirectResolver,t,"argument-error"),n.next=36,t.getOrInitRedirectPersistenceManager();case 36:if(!t.redirectUser||t.redirectUser._redirectEventId!==o._redirectEventId){n.next=38;break}return n.abrupt("return",t.directlySetCurrentUser(o));case 38:return n.abrupt("return",t.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return n.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var t=this;return n(o)(n(s).mark((function r(){var i;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=null,n.prev=1,n.next=4,t._popupRedirectResolver._completeRedirectFn(t,e,!0);case 4:i=n.sent,n.next=11;break;case 7:return n.prev=7,n.t0=n.catch(1),n.next=11,t._setRedirectUser(null);case 11:return n.abrupt("return",i);case 12:case"end":return n.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var t=this;return n(o)(n(s).mark((function r(){return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ra(e);case 3:n.next=9;break;case 5:if(n.prev=5,n.t0=n.catch(0),"auth/network-request-failed"===(null===n.t0||void 0===n.t0?void 0:n.t0.code)){n.next=9;break}return n.abrupt("return",t.directlySetCurrentUser(null));case 9:return n.abrupt("return",t.directlySetCurrentUser(e));case 10:case"end":return n.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return n(o)(n(s).mark((function t(){return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),t)})))()}},{key:"updateCurrentUser",value:function(e){var t=this;return n(o)(n(s).mark((function r(){var i;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=e?we(e):null)&&yi(i.auth.config.apiKey===t.config.apiKey,t,"invalid-user-token"),n.abrupt("return",t._updateCurrentUser(i&&i._clone(t)));case 3:case"end":return n.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return n(o)(n(s).mark((function i(){return n(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&yi(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),t){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",r.queue(n(o)(n(s).mark((function t(){return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.directlySetCurrentUser(e);case 2:r.notifyAuthListeners();case 3:case"end":return t.stop()}}),t)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return n(o)(n(s).mark((function t(){return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),t)})))()}},{key:"setPersistence",value:function(e){var t=this;return this.queue(n(o)(n(s).mark((function r(){return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.assertedPersistence.setPersistence(xi(e));case 2:case"end":return n.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new ce("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,t){var r=this;return n(o)(n(s).mark((function i(){var a;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.getOrInitRedirectPersistenceManager(t);case 2:return a=n.sent,n.abrupt("return",null===e?a.removeCurrentUser():a.setCurrentUser(e));case 4:case"end":return n.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var t=this;return n(o)(n(s).mark((function r(){var i;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.redirectPersistenceManager){n.next=9;break}return yi(i=e&&xi(e)||t._popupRedirectResolver,t,"argument-error"),n.next=5,ma.create(t,[xi(i._redirectPersistence)],"redirectUser");case 5:return t.redirectPersistenceManager=n.sent,n.next=8,t.redirectPersistenceManager.getCurrentUser();case 8:t.redirectUser=n.sent;case 9:return n.abrupt("return",t.redirectPersistenceManager);case 10:case"end":return n.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(e){var t=this;return n(o)(n(s).mark((function r(){var i,a;return n(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t._isInitialized){r.next=4;break}return r.next=4,t.queue(n(o)(n(s).mark((function e(){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=t._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){r.next=6;break}return r.abrupt("return",t._currentUser);case 6:if((null===(a=t.redirectUser)||void 0===a?void 0:a._redirectEventId)!==e){r.next=8;break}return r.abrupt("return",t.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(e){var t=this;return n(o)(n(s).mark((function r(){return n(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!==t.currentUser){r.next=2;break}return r.abrupt("return",t.queue(n(o)(n(s).mark((function r(){return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.directlySetCurrentUser(e));case 1:case"end":return n.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return yi(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var t=this;return n(o)(n(s).mark((function r(){return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.currentUser&&t.currentUser!==e&&t._currentUser._stopProactiveRefresh(),e&&t.isProactiveRefreshEnabled&&e._startProactiveRefresh(),t.currentUser=e,!e){n.next=8;break}return n.next=6,t.assertedPersistence.setCurrentUser(e);case 6:n.next=10;break;case 8:return n.next=10,t.assertedPersistence.removeCurrentUser();case 10:case"end":return n.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return yi(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Na(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return n(o)(n(s).mark((function t(){var r,i,a;return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n(k)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),t.next=5,null===(r=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=t.sent)&&(i["X-Firebase-Client"]=a),t.abrupt("return",i);case 8:case"end":return t.stop()}}),t)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(e){return we(e)}var La=function(){"use strict";function e(t){var r,i,a=this;n(u)(this,e),this.auth=t,this.observer=null,this.addObserver=(i=new ye((function(e){return a.observer=e}),r)).subscribe.bind(i)}return n(c)(e,[{key:"next",get:function(){return yi(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();function Pa(e,t,r){var i=Ra(e);yi(i._canInitEmulator,i,"emulator-config-failed"),yi(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=Ma(t),s=function(e){var t=Ma(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:Da(i.substr(o.length+1))}}var s=n(E)(i.split(":"),2);return{host:s[0],port:Da(s[1])}}(t),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Ma(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Da(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Ba=function(){"use strict";function e(t,r){n(u)(this,e),this.providerId=t,this.signInMethod=r}return n(c)(e,[{key:"toJSON",value:function(){return bi("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return bi("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return bi("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return bi("not implemented")}}]),e}();function Ua(e,t){return ja.apply(this,arguments)}function ja(){return(ja=n(o)(n(s).mark((function e(t,r){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Mi(t,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fa(e,t){return za.apply(this,arguments)}function za(){return(za=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(s).mark((function e(t,r){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ji(t,"POST","/v1/accounts:signInWithPassword",Pi(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Wa(e,t){return Ha.apply(this,arguments)}function Ha(){return(Ha=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(s).mark((function e(t,r){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ji(t,"POST","/v1/accounts:signInWithEmailLink",Pi(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Va(e,t){return qa.apply(this,arguments)}function qa(){return(qa=n(o)(n(s).mark((function e(t,r){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ji(t,"POST","/v1/accounts:signInWithEmailLink",Pi(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ka=function(e){"use strict";n(I)(r,e);var t=n(D)(r);function r(e,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return n(u)(this,r),(o=t.call(this,"password",a))._email=e,o._password=i,o._tenantId=s,o}return n(c)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var t=this;return n(o)(n(s).mark((function r(){return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=t.signInMethod,n.next="password"===n.t0?3:"emailLink"===n.t0?4:5;break;case 3:return n.abrupt("return",Fa(e,{returnSecureToken:!0,email:t._email,password:t._password}));case 4:return n.abrupt("return",Wa(e,{email:t._email,oobCode:t._password}));case 5:pi(e,"internal-error");case 6:case"end":return n.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(e,t){var r=this;return n(o)(n(s).mark((function i(){return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=r.signInMethod,n.next="password"===n.t0?3:"emailLink"===n.t0?4:5;break;case 3:return n.abrupt("return",Ua(e,{idToken:t,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return n.abrupt("return",Va(e,{idToken:t,email:r._email,oobCode:r._password}));case 5:pi(e,"internal-error");case 6:case"end":return n.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Ba);function Ja(e,t){return Ga.apply(this,arguments)}function Ga(){return(Ga=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(s).mark((function e(t,r){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ji(t,"POST","/v1/accounts:signInWithIdp",Pi(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xa=function(e){"use strict";n(I)(r,e);var t=n(D)(r);function r(){var e;return n(u)(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return n(c)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Ja(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,Ja(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Ja(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ve(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):pi("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=si(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(Ba);function Ya(e,t){return $a.apply(this,arguments)}function $a(){return($a=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(s).mark((function e(t,r){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Mi(t,"POST","/v1/accounts:sendVerificationCode",Pi(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Qa(){return(Qa=n(o)(n(s).mark((function e(t,r){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ji(t,"POST","/v1/accounts:signInWithPhoneNumber",Pi(t,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Za(){return(Za=n(o)(n(s).mark((function e(t,r){var i;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ji(t,"POST","/v1/accounts:signInWithPhoneNumber",Pi(t,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Hi(t,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var eo=n(k)({},"USER_NOT_FOUND","user-not-found");function to(){return(to=n(o)(n(s).mark((function e(t,r){var i;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",ji(t,"POST","/v1/accounts:signInWithPhoneNumber",Pi(t,i),eo));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var no=function(e){"use strict";n(I)(r,e);var t=n(D)(r);function r(e){var i;return n(u)(this,r),(i=t.call(this,"phone","phone")).params=e,i}return n(c)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Qa.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Za.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return to.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(Ba);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ro=function(){"use strict";function e(t){var r,i,a,o,s,c;n(u)(this,e);var l=me(ge(t)),f=null!==(r=l.apiKey)&&void 0!==r?r:null,d=null!==(i=l.oobCode)&&void 0!==i?i:null,p=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);yi(f&&d&&p,"argument-error"),this.apiKey=f,this.operation=p,this.code=d,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=l.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return n(c)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=me(ge(e)).link,n=t?me(ge(t)).deep_link_id:null,r=me(ge(e)).deep_link_id;return(r?me(ge(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var io=function(){"use strict";function e(){n(u)(this,e),this.providerId=e.PROVIDER_ID}return n(c)(e,null,[{key:"credential",value:function(e,t){return Ka._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=ro.parseLink(t);return yi(n,"argument-error"),Ka._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();io.PROVIDER_ID="password",io.EMAIL_PASSWORD_SIGN_IN_METHOD="password",io.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ao=function(){"use strict";function e(t){n(u)(this,e),this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}return n(c)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),oo=function(e){"use strict";n(I)(r,e);var t=n(D)(r);function r(){var e;return n(u)(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return n(c)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return n(x)(this.scopes)}}]),r}(ao),so=function(e){"use strict";n(I)(r,e);var t=n(D)(r);function r(){return n(u)(this,r),t.call(this,"facebook.com")}return n(c)(r,null,[{key:"credential",value:function(e){return Xa._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(oo);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */so.FACEBOOK_SIGN_IN_METHOD="facebook.com",so.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var uo=function(e){"use strict";n(I)(r,e);var t=n(D)(r);function r(){var e;return n(u)(this,r),(e=t.call(this,"google.com")).addScope("profile"),e}return n(c)(r,null,[{key:"credential",value:function(e,t){return Xa._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(oo);uo.GOOGLE_SIGN_IN_METHOD="google.com",uo.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var co=function(e){"use strict";n(I)(r,e);var t=n(D)(r);function r(){return n(u)(this,r),t.call(this,"github.com")}return n(c)(r,null,[{key:"credential",value:function(e){return Xa._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(oo);co.GITHUB_SIGN_IN_METHOD="github.com",co.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var lo=function(e){"use strict";n(I)(r,e);var t=n(D)(r);function r(){return n(u)(this,r),t.call(this,"twitter.com")}return n(c)(r,null,[{key:"credential",value:function(e,t){return Xa._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(oo);lo.TWITTER_SIGN_IN_METHOD="twitter.com",lo.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fo=function(){"use strict";function e(t){n(u)(this,e),this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}return n(c)(e,null,[{key:"_fromIdTokenResponse",value:function(t,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n(o)(n(s).mark((function o(){var u,c,l;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,da._fromIdTokenResponse(t,i,a);case 2:return u=n.sent,c=po(i),l=new e({user:u,providerId:c,_tokenResponse:i,operationType:r}),n.abrupt("return",l);case 6:case"end":return n.stop()}}),o)})))()}},{key:"_forOperation",value:function(t,r,i){return n(o)(n(s).mark((function a(){var o;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t._updateTokensIfNecessary(i,!0);case 2:return o=po(i),n.abrupt("return",new e({user:t,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return n.stop()}}),a)})))()}}]),e}();function po(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ho=function(e){"use strict";n(I)(r,e);var t=n(D)(r);function r(e,i,a,o){var s,c;return n(u)(this,r),(s=t.call(this,i.code,i.message)).operationType=a,s.user=o,Object.setPrototypeOf(n(_)(s),r.prototype),s.customData={appName:e.name,tenantId:null!==(c=e.tenantId)&&void 0!==c?c:void 0,_serverResponse:i.customData._serverResponse,operationType:a},s}return n(c)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(ue);function vo(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw ho._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(e,t){return go.apply(this,arguments)}function go(){return go=n(o)(n(s).mark((function e(t,r){var i,a,o=arguments;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=Qi,e.t1=t,e.t2=r,e.t3=t.auth,e.next=7,t.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",fo._forOperation(t,"link",a));case 14:case"end":return e.stop()}}),e)}))),go.apply(this,arguments)}function yo(e,t){return bo.apply(this,arguments)}function bo(){return bo=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(s).mark((function e(t,r){var i,a,o,u,c,l,f=arguments;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],a=t.auth,o="reauthenticate",e.prev=3,e.next=6,Qi(t,vo(a,o,r,t),i);case 6:return yi((u=e.sent).idToken,a,"internal-error"),yi(c=$i(u.idToken),a,"internal-error"),l=c.sub,yi(t.uid===l,a,"user-mismatch"),e.abrupt("return",fo._forOperation(t,o,u));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&pi(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])}))),bo.apply(this,arguments)}function wo(e,t){return ko.apply(this,arguments)}function ko(){return ko=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(s).mark((function e(t,r){var i,a,o,u,c=arguments;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a="signIn",e.next=4,vo(t,a,r);case 4:return o=e.sent,e.next=7,fo._fromIdTokenResponse(t,a,o);case 7:if(u=e.sent,i){e.next=11;break}return e.next=11,t._updateCurrentUser(u.user);case 11:return e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)}))),ko.apply(this,arguments)}function xo(e,t,n,r){return we(e).onIdTokenChanged(t,n,r)}function _o(e,t,n){return we(e).beforeAuthStateChanged(t,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Io(e,t){return Mi(e,"POST","/v2/accounts/mfaEnrollment:start",Pi(e,t))}new WeakMap;var Eo="__sak",To=function(){"use strict";function e(t,r){n(u)(this,e),this.storageRetriever=t,this.type=r}return n(c)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Eo,"1"),this.storage.removeItem(Eo),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var So=function(e){"use strict";n(I)(r,e);var t=n(D)(r);function r(){var e,i;return n(u)(this,r),(e=t.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(ba(i=Z())||Ea(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=Oa(),e._shouldAllowMigration=!0,e}return n(c)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);Sa()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,t){var i=this,a=this;return n(o)(n(s).mark((function o(){return n(s).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n(ri)(n(oi)(r.prototype),"_set",i).call(a,e,t);case 2:a.localCache[e]=JSON.stringify(t);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(e){var t=this,i=this;return n(o)(n(s).mark((function a(){var o;return n(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n(ri)(n(oi)(r.prototype),"_get",t).call(i,e);case 2:return o=a.sent,i.localCache[e]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(e){var t=this,i=this;return n(o)(n(s).mark((function a(){return n(s).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n(ri)(n(oi)(r.prototype),"_remove",t).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(To);So.type="LOCAL";var Oo=So,No=function(e){"use strict";n(I)(r,e);var t=n(D)(r);function r(){return n(u)(this,r),t.call(this,(function(){return window.sessionStorage}),"SESSION")}return n(c)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(To);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */No.type="SESSION";var Ao=No;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(e){return Promise.all(e.map((t=n(o)(n(s).mark((function e(t){var r;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return t.apply(this,arguments)})));var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ro=function(){"use strict";function e(t){n(u)(this,e),this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return n(c)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var t=this;return n(o)(n(s).mark((function r(){var i,a,u,c,l,f,d,p;return n(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=e).data,u=a.eventId,c=a.eventType,l=a.data,null==(f=t.handlersMap[c])?void 0:f.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:u,eventType:c}),d=Array.from(f).map(function(){var e=n(o)(n(s).mark((function e(t){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t(i.origin,l));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.next=9,Co(d);case 9:p=r.sent,i.ports[0].postMessage({status:"done",eventId:u,eventType:c,response:p});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lo(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ro.receivers=[];var Po=function(){"use strict";function e(t){n(u)(this,e),this.target=t,this.handlers=new Set}return n(c)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return n(o)(n(s).mark((function a(){var o,u,c;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){n.next=3;break}throw new Error("connection_unavailable");case 3:return n.abrupt("return",new Promise((function(n,a){var s=Lo("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);c={messageChannel:o,onMessage:function(e){var t=e;if(t.data.eventId===s)switch(t.data.status){case"ack":clearTimeout(l),u=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(u),n(t.data.response);break;default:clearTimeout(l),clearTimeout(u),a(new Error("invalid_response"))}}},i.handlers.add(c),o.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:e,eventId:s,data:t},[o.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return n.stop()}}),a)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Do(){return void 0!==Mo().WorkerGlobalScope&&"function"==typeof Mo().importScripts}function Bo(){return Uo.apply(this,arguments)}function Uo(){return(Uo=n(o)(n(s).mark((function e(){var t;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return t=e.sent,e.abrupt("return",t.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jo="firebaseLocalStorageDb",Fo="firebaseLocalStorage",zo="fbase_key",Wo=function(){"use strict";function e(t){n(u)(this,e),this.request=t}return n(c)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),e}();function Ho(e,t){return e.transaction([Fo],t?"readwrite":"readonly").objectStore(Fo)}function Vo(){var e=indexedDB.deleteDatabase(jo);return new Wo(e).toPromise()}function qo(){var e=indexedDB.open(jo,1);return new Promise((function(t,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(Fo,{keyPath:zo})}catch(e){r(e)}})),e.addEventListener("success",n(o)(n(s).mark((function r(){var i;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((i=e.result).objectStoreNames.contains(Fo)){n.next=12;break}return i.close(),n.next=5,Vo();case 5:return n.t0=t,n.next=8,qo();case 8:n.t1=n.sent,(0,n.t0)(n.t1),n.next=13;break;case 12:t(i);case 13:case"end":return n.stop()}}),r)}))))}))}function Ko(e,t,n){return Jo.apply(this,arguments)}function Jo(){return(Jo=n(o)(n(s).mark((function e(t,r,i){var a,o;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=Ho(t,!0).put((a={},n(k)(a,zo,r),n(k)(a,"value",i),a)),e.abrupt("return",new Wo(o).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Go(e,t){return Xo.apply(this,arguments)}function Xo(){return(Xo=n(o)(n(s).mark((function e(t,r){var i,a;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Ho(t,!1).get(r),e.next=3,new Wo(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Yo(e,t){var n=Ho(e,!0).delete(t);return new Wo(n).toPromise()}var $o=function(){"use strict";function e(){n(u)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return n(c)(e,[{key:"_openDb",value:function(){var e=this;return n(o)(n(s).mark((function t(){return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,qo();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),t)})))()}},{key:"_withRetries",value:function(e){var t=this;return n(o)(n(s).mark((function r(){var i,a;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=0;case 1:return n.prev=2,n.next=5,t._openDb();case 5:return a=n.sent,n.next=8,e(a);case 8:return n.abrupt("return",n.sent);case 11:if(n.prev=11,n.t0=n.catch(2),!(i++>3)){n.next=15;break}throw n.t0;case 15:t.db&&(t.db.close(),t.db=void 0);case 16:n.next=1;break;case 18:case"end":return n.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return n(o)(n(s).mark((function t(){return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Do()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),t)})))()}},{key:"initializeReceiver",value:function(){var e=this;return n(o)(n(s).mark((function t(){return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.receiver=Ro._getInstance(Do()?self:null),e.receiver._subscribe("keyChanged",function(){var t=n(o)(n(s).mark((function t(r,i){var a;return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return a=t.sent,t.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=n(o)(n(s).mark((function e(t,r){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()}},{key:"initializeSender",value:function(){var e=this;return n(o)(n(s).mark((function t(){var r,i,a;return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Bo();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new Po(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(a=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),t)})))()}},{key:"notifyServiceWorker",value:function(e){var t=this;return n(o)(n(s).mark((function r(){return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.sender&&t.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===t.activeServiceWorker)){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,t.sender._send("keyChanged",{key:e},t.serviceWorkerReceiverAvailable?800:50);case 5:n.next=9;break;case 7:n.prev=7,n.t0=n.catch(2);case 9:case"end":return n.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return n(o)(n(s).mark((function e(){var t;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,qo();case 5:return t=e.sent,e.next=8,Ko(t,Eo,"1");case 8:return e.next=10,Yo(t,Eo);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var t=this;return n(o)(n(s).mark((function r(){return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.pendingWrites++,n.prev=1,n.next=4,e();case 4:return n.prev=4,t.pendingWrites--,n.finish(4);case 7:case"end":return n.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,t){var r=this;return n(o)(n(s).mark((function i(){return n(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(n(o)(n(s).mark((function i(){return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r._withRetries((function(n){return Ko(n,e,t)}));case 2:return r.localCache[e]=t,n.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return n.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var t=this;return n(o)(n(s).mark((function r(){var i;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t._withRetries((function(t){return Go(t,e)}));case 2:return i=n.sent,t.localCache[e]=i,n.abrupt("return",i);case 5:case"end":return n.stop()}}),r)})))()}},{key:"_remove",value:function(e){var t=this;return n(o)(n(s).mark((function r(){return n(s).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",t._withPendingWrite(n(o)(n(s).mark((function r(){return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t._withRetries((function(t){return Yo(t,e)}));case 2:return delete t.localCache[e],n.abrupt("return",t.notifyServiceWorker(e));case 4:case"end":return n.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var e=this;return n(o)(n(s).mark((function t(){var r,i,a,o,u,c,l,f,d,p,h,v,m,g,y,b,w;return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=Ho(e,!1).getAll();return new Wo(t).toPromise()}));case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,u=!1,c=void 0,t.prev=10,l=r[Symbol.iterator]();!(o=(f=l.next()).done);o=!0)d=f.value,p=d.fbase_key,h=d.value,a.add(p),JSON.stringify(e.localCache[p])!==JSON.stringify(h)&&(e.notifyListeners(p,h),i.push(p));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),u=!0,c=t.t0;case 18:t.prev=18,t.prev=19,o||null==l.return||l.return();case 21:if(t.prev=21,!u){t.next=24;break}throw c;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(v=!0,m=!1,g=void 0,t.prev=27,y=Object.keys(e.localCache)[Symbol.iterator]();!(v=(b=y.next()).done);v=!0)w=b.value,e.localCache[w]&&!a.has(w)&&(e.notifyListeners(w,null),i.push(w));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),m=!0,g=t.t1;case 35:t.prev=35,t.prev=36,v||null==y.return||y.return();case 38:if(t.prev=38,!m){t.next=41;break}throw g;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),t,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(n(o)(n(s).mark((function t(){return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),t)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();$o.type="LOCAL";var Qo=$o;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(e,t){return Mi(e,"POST","/v2/accounts/mfaSignIn:start",Pi(e,t))}function es(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=hi("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function ts(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ts("rcb"),new Oi(3e4,6e4);var ns="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(e,t,n){return is.apply(this,arguments)}function is(){return(is=n(o)(n(s).mark((function e(t,r,i){var a,o,u,c,l,f,d,p;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,yi("string"==typeof o,t,"argument-error"),yi(i.type===ns,t,"argument-error"),!("session"in(u="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(c=u.session,!("phoneNumber"in u)){e.next=19;break}return yi("enroll"===c.type,t,"internal-error"),e.next=15,Io(t,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:o}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return yi("signin"===c.type,t,"internal-error"),yi(f=(null===(a=u.multiFactorHint)||void 0===a?void 0:a.uid)||u.multiFactorUid,t,"missing-multi-factor-info"),e.next=24,Zo(t,{mfaPendingCredential:c.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:o}});case 24:return d=e.sent,e.abrupt("return",d.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Ya(t,{phoneNumber:u.phoneNumber,recaptchaToken:o});case 30:return p=e.sent.sessionInfo,e.abrupt("return",p);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var as=function(){"use strict";function e(t){n(u)(this,e),this.providerId=e.PROVIDER_ID,this.auth=Ra(t)}return n(c)(e,[{key:"verifyPhoneNumber",value:function(e,t){return rs(this.auth,e,we(t))}}],[{key:"credential",value:function(e,t){return no._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?no._fromTokenResponse(n,r):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function os(e,t){return t?xi(t):(yi(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */as.PROVIDER_ID="phone",as.PHONE_SIGN_IN_METHOD="phone";var ss=function(e){"use strict";n(I)(r,e);var t=n(D)(r);function r(e){var i;return n(u)(this,r),(i=t.call(this,"custom","custom")).params=e,i}return n(c)(r,[{key:"_getIdTokenResponse",value:function(e){return Ja(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Ja(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Ja(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Ba);function us(e){return wo(e.auth,new ss(e),e.bypassAuthState)}function cs(e){var t=e.auth,n=e.user;return yi(n,t,"internal-error"),yo(n,new ss(e),e.bypassAuthState)}function ls(e){return fs.apply(this,arguments)}function fs(){return(fs=n(o)(n(s).mark((function e(t){var r,i;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.auth,yi(i=t.user,r,"internal-error"),e.abrupt("return",mo(i,new ss(t),t.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ds=function(){"use strict";function e(t,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];n(u)(this,e),this.auth=t,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return n(c)(e,[{key:"execute",value:function(){var e,t=this;return new Promise((e=n(o)(n(s).mark((function e(r,i){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,t.resolver._initialize(t.auth);case 4:return t.eventManager=e.sent,e.next=7,t.onExecution();case 7:t.eventManager.registerConsumer(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,n){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var t=this;return n(o)(n(s).mark((function r(){var i,a,o,u,c,l,f;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=e.urlResponse,a=e.sessionId,o=e.postBody,u=e.tenantId,c=e.error,l=e.type,!c){n.next=4;break}return t.reject(c),n.abrupt("return");case 4:return f={auth:t.auth,requestUri:i,sessionId:a,tenantId:u||void 0,postBody:o||void 0,user:t.user,bypassAuthState:t.bypassAuthState},n.prev=5,n.t0=t,n.next=9,t.getIdpTask(l)(f);case 9:n.t1=n.sent,n.t0.resolve.call(n.t0,n.t1),n.next=16;break;case 13:n.prev=13,n.t2=n.catch(5),t.reject(n.t2);case 16:case"end":return n.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return us;case"linkViaPopup":case"linkViaRedirect":return ls;case"reauthViaPopup":case"reauthViaRedirect":return cs;default:pi(this.auth,"internal-error")}}},{key:"resolve",value:function(e){wi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){wi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),ps=new Oi(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(e,t,n){return vs.apply(this,arguments)}function vs(){return(vs=n(o)(n(s).mark((function e(t,r,i){var a,o,u;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Ra(t),mi(t,r,ao),o=os(a,i),u=new ms(a,"signInViaPopup",r,o),e.abrupt("return",u.executeNotNull());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ms=function(e){"use strict";n(I)(r,e);var t=n(D)(r);function r(e,i,a,o,s){var c;return n(u)(this,r),(c=t.call(this,e,i,o,s)).provider=a,c.authWindow=null,c.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=n(_)(c),c}return n(c)(r,[{key:"executeNotNull",value:function(){var e=this;return n(o)(n(s).mark((function t(){var r;return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return yi(r=t.sent,e.auth,"internal-error"),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()}},{key:"onExecution",value:function(){var e=this;return n(o)(n(s).mark((function t(){var r;return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return wi(1===e.filter.length,"Popup operations only handle one event"),r=Lo(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],r);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=r,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(hi(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),t)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(hi(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(hi(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,ps.get())};t()}}]),r}(ds);ms.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gs=new Map,ys=function(e){"use strict";n(I)(r,e);var t=n(D)(r);function r(e,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n(u)(this,r),(a=t.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return n(c)(r,[{key:"execute",value:function(){var e=this,t=this;return n(o)(n(s).mark((function i(){var a,o;return n(s).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=gs.get(t.auth._key())){i.next=21;break}return i.prev=2,i.next=5,bs(t.resolver,t.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,n(ri)(n(oi)(r.prototype),"execute",e).call(t);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:gs.set(t.auth._key(),a);case 21:return t.bypassAuthState||gs.set(t.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var t=this,i=this,a=function(){return n(ri)(n(oi)(r.prototype),"onAuthEvent",t)};return n(o)(n(s).mark((function t(){var r;return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",a().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(r=t.sent)){t.next=16;break}return i.user=r,t.abrupt("return",a().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),t)})))()}},{key:"onExecution",value:function(){return n(o)(n(s).mark((function e(){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),r}(ds);function bs(e,t){return ws.apply(this,arguments)}function ws(){return(ws=n(o)(n(s).mark((function e(t,r){var i,a,o;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=_s(r),a=xs(t),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ks(e,t){gs.set(e._key(),t)}function xs(e){return xi(e._redirectPersistence)}function _s(e){return va("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(e,t){return Es.apply(this,arguments)}function Es(){return Es=n(o)(n(s).mark((function e(t,r){var i,a,o,u,c,l=arguments;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=Ra(t),o=os(a,r),u=new ys(a,o,i),e.next=6,u.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,a._persistUserIfCurrent(c.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)}))),Es.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ts=function(){"use strict";function e(t){n(u)(this,e),this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return n(c)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Os(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Os(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(hi(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ss(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Ss(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function Ss(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Os(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Ns(e){return As.apply(this,arguments)}function As(){return As=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n(o)(n(s).mark((function e(t){var r,i=arguments;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",Mi(t,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),e)}))),As.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rs=/^https?/;function Ls(){return(Ls=n(o)(n(s).mark((function e(t){var r,i,a,o,u,c,l;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Ns(t);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,u=r[Symbol.iterator]();case 8:if(i=(c=u.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!Ps(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==u.return||u.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:pi(t,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Ps(e){var t=Ii(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!Rs.test(r))return!1;if(Cs.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ms=new Oi(3e4,6e4);function Ds(){var e=Mo().___jsl,t=!0,r=!1,i=void 0;if(null==e?void 0:e.H)try{for(var a,o=Object.keys(e.H)[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=a.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=n(x)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){r=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}var Bs=null;function Us(e){return Bs=Bs||function(e){return new Promise((function(t,n){var r,i,a;function o(){Ds(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Ds(),n(hi(e,"network-request-failed"))},timeout:Ms.get()})}if(null===(i=null===(r=Mo().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Mo().gapi)||void 0===a?void 0:a.load)){var s=ts("iframefcb");return Mo()[s]=function(){gapi.load?o():n(hi(e,"network-request-failed"))},es("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw Bs=null,e}))}(e),Bs}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var js=new Oi(5e3,15e3),Fs={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zs=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ws(e){var t=e.config;yi(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?Ni(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:mt},i=zs.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(ve(r).slice(1))}function Hs(e){return Vs.apply(this,arguments)}function Vs(){return Vs=n(o)(n(s).mark((function e(t){var r,i;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Us(t);case 2:return r=e.sent,yi(i=Mo().gapi,t,"internal-error"),e.abrupt("return",r.open({where:document.body,url:Ws(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fs,dontclear:!0},(function(e){return new Promise((r=n(o)(n(s).mark((function r(i,a){var o,u,c;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=function(){Mo().clearTimeout(u),i(e)},n.next=3,e.restyle({setHideOnLeave:!1});case 3:o=hi(t,"network-request-failed"),u=Mo().setTimeout((function(){a(o)}),js.get()),e.ping(c).then(c,(function(){a(o)}));case 7:case"end":return n.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return e.stop()}}),e)}))),Vs.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qs={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ks="_blank",Js="http://localhost",Gs=function(){"use strict";function e(t){n(u)(this,e),this.window=t,this.associatedEvent=null}return n(c)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function Xs(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},qs),{width:i.toString(),height:a.toString(),top:o,left:s}),l=Z().toLowerCase();r&&(u=wa(l)?Ks:r),ya(l)&&(t=t||Js,c.scrollbars="yes");var f=Object.entries(c).reduce((function(e,t){var r=n(E)(t,2),i=r[0],a=r[1];return"".concat(e).concat(i,"=").concat(a,",")}),"");if(Ta(l)&&"_self"!==u)return Ys(t||"",u),new Gs(null);var d=window.open(t||"",u,f);yi(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Gs(d)}function Ys(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $s="__/auth/handler",Qs="emulator/auth/handler";function Zs(e,t,r,i,a,o){yi(e.config.authDomain,e,"auth-domain-config-required"),yi(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:i,v:mt,eventId:a};if(t instanceof ao){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",de(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,d=Object.entries(o||{})[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var p=n(E)(f.value,2),h=p[0],v=p[1];s[h]=v}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}if(t instanceof oo){var m=t.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}e.tenantId&&(s.tid=e.tenantId);var g,y,b=s,w=!0,k=!1,x=void 0;try{for(var _,I=Object.keys(b)[Symbol.iterator]();!(w=(_=I.next()).done);w=!0){var T=_.value;void 0===b[T]&&delete b[T]}}catch(e){k=!0,x=e}finally{try{w||null==I.return||I.return()}finally{if(k)throw x}}return"".concat((g=e,y=g.config,y.emulator?Ni(y,Qs):"https://".concat(y.authDomain,"/").concat($s)),"?").concat(ve(b).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var eu="webStorageSupport",tu=function(){"use strict";function e(){n(u)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ao,this._completeRedirectFn=Is,this._overrideRedirectResult=ks}return n(c)(e,[{key:"_openPopup",value:function(e,t,r,i){var a=this;return n(o)(n(s).mark((function o(){var u,c;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return wi(null===(u=a.eventManagers[e._key()])||void 0===u?void 0:u.manager,"_initialize() not called before _openPopup()"),c=Zs(e,t,r,Ii(),i),n.abrupt("return",Xs(e,c,Lo()));case 4:case"end":return n.stop()}}),o)})))()}},{key:"_openRedirect",value:function(e,t,r,i){var a=this;return n(o)(n(s).mark((function o(){return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a._originValidation(e);case 2:return o=Zs(e,t,r,Ii(),i),Mo().location.href=o,n.abrupt("return",new Promise((function(){})));case 4:case"end":return n.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(wi(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(e){var t=this;return n(o)(n(s).mark((function r(){var i,a;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Hs(e);case 2:return i=n.sent,a=new Ts(e),i.register("authEvent",(function(t){return yi(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),t.eventManagers[e._key()]={manager:a},t.iframes[e._key()]=i,n.abrupt("return",a);case 8:case"end":return n.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(eu,{type:eu},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),pi(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Ls.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Oa()||ba()||Ea()}}]),e}(),nu=tu,ru=function(e){"use strict";n(I)(r,e);var t=n(D)(r);function r(e){var i;return n(u)(this,r),(i=t.call(this,"phone")).credential=e,i}return n(c)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return Mi(e,"POST","/v2/accounts/mfaEnrollment:finalize",Pi(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Mi(e,"POST","/v2/accounts/mfaSignIn:finalize",Pi(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function e(t){n(u)(this,e),this.factorId=t}return n(c)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return bi("unexpected MultiFactorSessionType")}}}]),e}());(function(){"use strict";function e(){n(u)(this,e)}return n(c)(e,null,[{key:"assertion",value:function(e){return ru._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var iu="@firebase/auth",au="0.21.0",ou=function(){"use strict";function e(t){n(u)(this,e),this.auth=t,this.internalListeners=new Map}return n(c)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var t=this;return n(o)(n(s).mark((function r(){var i;return n(s).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.assertAuthConfigured(),n.next=3,t.auth._initializationPromise;case 3:if(t.auth.currentUser){n.next=5;break}return n.abrupt("return",null);case 5:return n.next=7,t.auth.currentUser.getIdToken(e);case 7:return i=n.sent,n.abrupt("return",{accessToken:i});case 9:case"end":return n.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){yi(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var su,uu=oe("authIdTokenMaxAge")||300,cu=null,lu=function(e){return t=n(o)(n(s).mark((function t(r){var i,a,o;return n(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r,!t.t0){t.next=5;break}return t.next=4,r.getIdTokenResult();case 4:t.t0=t.sent;case 5:if(i=t.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>uu)){t.next=9;break}return t.abrupt("return");case 9:if(o=null==i?void 0:i.token,cu!==o){t.next=12;break}return t.abrupt("return");case 12:return cu=o,t.next=15,fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return t.stop()}}),t)}))),function(e){return t.apply(this,arguments)};var t};function fu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt(),t=dt(e,"auth");if(t.isInitialized())return t.getImmediate();var n=_i(e,{popupRedirectResolver:nu,persistence:[Qo,Oo,Ao]}),r=oe("authTokenSyncURL");if(r){var i=lu(r);_o(n,i,(function(){return i(n.currentUser)})),xo(n,(function(e){return i(e)}))}var a=ie("auth");return a&&Pa(n,"http://".concat(a)),n}su="Browser",ft(new Ae("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){yi(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),yi(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:su,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Na(su)},i=new Ca(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xi);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),ft(new Ae("auth-internal",(function(e){var t=Ra(e.getProvider("auth").getImmediate());return new ou(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),bt(iu,au,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(su)),bt(iu,au,"esm2017");var du,pu="no-scroll-body",hu="visually-hidden",vu=new(function(){"use strict";function e(t){n(u)(this,e),this.authStateObserver=t;gt(w());ni(),this.initFirebaseAuth()}return n(c)(e,[{key:"signInGoogle",value:function(){return n(o)(n(s).mark((function e(){var t;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new uo,e.next=3,hs(fu(),t);case 3:case"end":return e.stop()}}),e)})))()}},{key:"signInFacebook",value:function(){return n(o)(n(s).mark((function e(){var t;return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new so,e.next=3,hs(fu(),t);case 3:case"end":return e.stop()}}),e)})))()}},{key:"signOutUser",value:function(){we(fu()).signOut()}},{key:"initFirebaseAuth",value:function(){var e,t,n,r;e=fu(),t=this.authStateObserver.bind(this),we(e).onAuthStateChanged(t,n,r)}},{key:"getProfilePicUrl",value:function(){return fu().currentUser.photoURL||"/images/profile_placeholder.png"}},{key:"getUserName",value:function(){return fu().currentUser.displayName}},{key:"isUserSignedIn",value:function(){return!!fu().currentUser}},{key:"addSizeToGoogleProfilePic",value:function(e){return-1!==e.indexOf("googleusercontent.com")&&-1===e.indexOf("?")?e+"?sz=150":e}}]),e}())((function(e){e?(du.signOutButtonElement.classList.remove(hu),du.signInButtonElement.classList.add(hu)):(du.signOutButtonElement.classList.add(hu),du.signInButtonElement.classList.remove(hu))}));function mu(){document.addEventListener("keydown",gu),du.signInBackdrop.addEventListener("click",yu),document.body.classList.add(pu),du.signInMenu.classList.remove(hu),du.signInBackdrop.classList.remove(hu)}function gu(e){"Escape"===e.key&&bu(e)}function yu(e){bu(e)}function bu(e){document.removeEventListener("keydown",gu),du.signInBackdrop.removeEventListener("click",yu),document.body.classList.remove(pu),du.signInMenu.classList.add(hu),du.signInBackdrop.classList.add(hu)}function wu(){return(wu=n(o)(n(s).mark((function e(t){return n(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),y.query=t.currentTarget.elements.searchQuery.value,xu(),y.resetPage(),e.prev=4,e.next=7,y.fetchMovies();case 7:ku(f(e.sent)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),g.Notify.failure("Oups! Something went wrong");case 14:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}function ku(e){v.filmsMainContainer.innerHTML=e}function xu(){v.filmsMainContainer.innerHTML=""}v.search.addEventListener("submit",(function(e){return wu.apply(this,arguments)})),v.filmsMainContainer.addEventListener("click",(function(e){e.preventDefault();var t=e.target.closest("li").getAttribute("data-id");y.getFullInfo(t),v.modal.classList.remove("visually-hidden"),v.backdrop.classList.toggle("modal-open")})),v.backdrop.addEventListener("click",(function(e){(e.target.classList.contains("modal")||e.target.classList.contains("backdrop"))&&(v.modal.classList.add("visually-hidden"),v.backdrop.classList.toggle("modal-open"))})),(du={signInButtonElement:document.getElementById("signInButton"),signOutButtonElement:document.getElementById("signOutButton"),signInMenu:document.getElementById("menu_sign_in"),signInGoogleButtonElement:document.getElementById("btn-sign-in-google"),signInFacebookButtonElement:document.getElementById("btn-sign-in-facebook"),signInBackdrop:document.getElementById("backdrop_menu_sign_in")}).signInButtonElement.addEventListener("click",mu),du.signInGoogleButtonElement.addEventListener("click",vu.signInGoogle.bind(vu)),du.signInFacebookButtonElement.addEventListener("click",vu.signInFacebook.bind(vu)),du.signOutButtonElement.addEventListener("click",vu.signOutUser.bind(vu)),du.signInGoogleButtonElement.addEventListener("click",bu),du.signInFacebookButtonElement.addEventListener("click",bu),y.getGenres(),y.getTrendMovies()}();
//# sourceMappingURL=index.5696b860.js.map
