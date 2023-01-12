!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),i.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=i("gD1JV"))&&n.__esModule?n:{default:n};function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=a()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),i.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=i("fVNic"))&&n.__esModule?n:{default:n}}));var a=i("bpxeT"),o=i("8MBJY"),s=i("a2hTj"),u=i("hKHmD"),c=i("2TvXO"),l={apiKey:"AIzaSyDLECkBiM_zJdUtuEN2mdKPTBBYEj_ZLaA",authDomain:"filmoteka-a4d37.firebaseapp.com",projectId:"filmoteka-a4d37",storageBucket:"filmoteka-a4d37.appspot.com",messagingSenderId:"925416976763",appId:"1:925416976763:web:829d5454b8848bbcec8dde"};function h(){if(l&&l.apiKey)return l;throw new Error("No Firebase configuration object provided.\nAdd your web app's configuration object to firebase-config.js")}o=i("8MBJY"),s=i("a2hTj"),u=i("hKHmD");var f=i("8nrFW"),d=i("ds8z5"),v=(o=i("8MBJY"),s=i("a2hTj"),i("eYQtU")),p=i("1t1Wn"),y=(f=i("8nrFW"),{});Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e){return T(e)};var m=b(i("ge8co")),g=b(i("cZGw3")),k=b(i("fVNic")),w=b(i("gD1JV"));function b(e){return e&&e.__esModule?e:{default:e}}function T(e){var t="function"==typeof Map?new Map:void 0;return T=function(e){if(null===e||!g.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return m.default(e,arguments,k.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),w.default(n,e)},T(e)}var I,_,E,x=i("2MbLg"),S=I={};function A(){throw new Error("setTimeout has not been defined")}function C(){throw new Error("clearTimeout has not been defined")}function N(e){if(_===setTimeout)return setTimeout(e,0);if((_===A||!_)&&setTimeout)return _=setTimeout,setTimeout(e,0);try{return _(e,0)}catch(t){try{return _.call(null,e,0)}catch(t){return _.call(this,e,0)}}}!function(){try{_="function"==typeof setTimeout?setTimeout:A}catch(e){_=A}try{E="function"==typeof clearTimeout?clearTimeout:C}catch(e){E=C}}();var D,R=[],O=!1,L=-1;function M(){O&&D&&(O=!1,D.length?R=D.concat(R):L=-1,R.length&&P())}function P(){if(!O){var e=N(M);O=!0;for(var t=R.length;t;){for(D=R,R=[];++L<t;)D&&D[L].run();L=-1,t=R.length}D=null,O=!1,function(e){if(E===clearTimeout)return clearTimeout(e);if((E===C||!E)&&clearTimeout)return E=clearTimeout,clearTimeout(e);try{E(e)}catch(t){try{return E.call(null,e)}catch(t){return E.call(this,e)}}}(e)}}function U(e,t){this.fun=e,this.array=t}function F(){}S.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];R.push(new U(e,t)),1!==R.length||O||N(P)},U.prototype.run=function(){this.fun.apply(null,this.array)},S.title="browser",S.browser=!0,S.env={},S.argv=[],S.version="",S.versions={},S.on=F,S.addListener=F,S.once=F,S.off=F,S.removeListener=F,S.removeAllListeners=F,S.emit=F,S.prependListener=F,S.prependOnceListener=F,S.listeners=function(e){return[]},S.binding=function(e){throw new Error("process.binding is not supported")},S.cwd=function(){return"/"},S.chdir=function(e){throw new Error("process.chdir is not supported")},S.umask=function(){return 0};
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
var V=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},j={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,h=(3&a)<<4|s>>4,f=(15&s)<<2|c>>6,d=63&c;u||(d=64,o||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(V(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},B=function(e){return function(e){var t=V(e);return j.encodeByteArray(t,!0)}(e).replace(/\./g,"")},q=function(e){try{return j.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function K(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function z(){try{return"object"==typeof indexedDB}catch(e){return!1}}function H(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
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
var G=function(){return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},W=function(){try{return G()||function(){if(void 0!==I&&void 0!==I.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&q(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},Q=function(e){var t,n;return null===(n=null===(t=W())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Y=function(e){var t=Q(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},J=function(){var e;return null===(e=W())||void 0===e?void 0:e.config},X=function(e){var t;return null===(t=W())||void 0===t?void 0:t["_".concat(e)]},$=function(){"use strict";function t(){var n=this;e(o)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(s)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
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
function Z(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[B(JSON.stringify({alg:"none",type:"JWT"})),B(JSON.stringify(a)),""].join(".")}
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
 */var ee=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i,a){var s;return e(o)(this,r),(s=n.call(this,i)).code=t,s.customData=a,s.name="FirebaseError",Object.setPrototypeOf(e(d)(s),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(d)(s),te.prototype.create),s}return r}(e(y)(Error)),te=function(){"use strict";function t(n,r,i){e(o)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(s)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?ne(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new ee(a,u,i);return c}}]),t}();function ne(e,t){return e.replace(re,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var re=/\{\$([^}]+)}/g;
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
 */function ie(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ae(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(oe(l)&&oe(h)){if(!ae(l,h))return!1}else if(l!==h)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var f=!0,d=!1,v=void 0;try{for(var p,y=r[Symbol.iterator]();!(f=(p=y.next()).done);f=!0){var m=p.value;if(!n.includes(m))return!1}}catch(e){d=!0,v=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw v}}return!0}function oe(e){return null!==e&&"object"==typeof e}
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
function se(t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=e(p)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function ue(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(p)(t.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function ce(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */var le=function(){"use strict";function t(n,r){var i=this;e(o)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(s)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=he),void 0===r.error&&(r.error=he),void 0===r.complete&&(r.complete=he);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function he(){}
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
function fe(e){return e&&e._delegate?e._delegate:e}o=i("8MBJY"),s=i("a2hTj"),u=i("hKHmD"),f=i("8nrFW");var de,ve,pe=[];(ve=de||(de={}))[ve.DEBUG=0]="DEBUG",ve[ve.VERBOSE=1]="VERBOSE",ve[ve.INFO=2]="INFO",ve[ve.WARN=3]="WARN",ve[ve.ERROR=4]="ERROR",ve[ve.SILENT=5]="SILENT";var ye,me={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},ge=de.INFO,ke=(ye={},e(u)(ye,de.DEBUG,"log"),e(u)(ye,de.VERBOSE,"log"),e(u)(ye,de.INFO,"info"),e(u)(ye,de.WARN,"warn"),e(u)(ye,de.ERROR,"error"),ye),we=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=ke[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(f)(i)))}},be=function(){"use strict";function t(n){e(o)(this,t),this.name=n,this._logLevel=ge,this._logHandler=we,this._userLogHandler=null,pe.push(this)}return e(s)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in de))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?me[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,de.DEBUG].concat(e(f)(n))),this._logHandler.apply(this,[this,de.DEBUG].concat(e(f)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,de.VERBOSE].concat(e(f)(n))),this._logHandler.apply(this,[this,de.VERBOSE].concat(e(f)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,de.INFO].concat(e(f)(n))),this._logHandler.apply(this,[this,de.INFO].concat(e(f)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,de.WARN].concat(e(f)(n))),this._logHandler.apply(this,[this,de.WARN].concat(e(f)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,de.ERROR].concat(e(f)(n))),this._logHandler.apply(this,[this,de.ERROR].concat(e(f)(n)))}}]),t}();a=i("bpxeT"),o=i("8MBJY"),s=i("a2hTj"),u=i("hKHmD"),f=i("8nrFW"),c=i("2TvXO"),a=i("bpxeT"),o=i("8MBJY"),s=i("a2hTj"),p=i("1t1Wn"),f=i("8nrFW"),c=i("2TvXO");var Te=function(){"use strict";function t(n,r,i){e(o)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(s)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),Ie="[DEFAULT]",_e=function(){"use strict";function t(n,r){e(o)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(s)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new $;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:Ie})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=e(p)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(a)(e(c).mark((function n(){var r;return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(f)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(f)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=e(p)(c.value,2),f=h[0],d=h[1],v=this.normalizeInstanceIdentifier(f);i===v&&d.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Ie?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie;return this.component?this.component.multipleInstances?e:Ie:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();var Ee=function(){"use strict";function t(n){e(o)(this,t),this.name=n,this.providers=new Map}return e(s)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new _e(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),xe=(a=i("bpxeT"),{});Object.defineProperty(xe,"__esModule",{value:!0}),xe.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ae.default(e,t,n[t])}))}return e};var Se,Ae=(Se=i("hKHmD"))&&Se.__esModule?Se:{default:Se};var Ce,Ne;f=i("8nrFW"),c=i("2TvXO"),f=i("8nrFW");var De=new WeakMap,Re=new WeakMap,Oe=new WeakMap,Le=new WeakMap,Me=new WeakMap;var Pe={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Re.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Oe.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ve(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Ue(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ne||(Ne=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(je(this),n),Ve(De.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Ve(t.apply(je(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[je(this),n].concat(e(f)(i)));return Oe.set(s,n.sort?n.sort():[n]),Ve(s)}}function Fe(e){return"function"==typeof e?Ue(e):(e instanceof IDBTransaction&&function(e){if(!Re.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Re.set(e,t)}}(e),t=e,(Ce||(Ce=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Pe):e);var t}function Ve(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(Ve(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&De.set(e,t)})).catch((function(){})),Me.set(n,t),n;var t,n;if(Le.has(e))return Le.get(e);var r=Fe(e);return r!==e&&(Le.set(e,r),Me.set(r,e)),r}var je=function(e){return Me.get(e)};function Be(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=Ve(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(Ve(s.result),e.oldVersion,e.newVersion,Ve(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var qe=["get","getKey","getAll","getAllKeys","count"],Ke=["put","add","delete","clear"],ze=new Map;function He(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(ze.get(n))return ze.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,o=Ke.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(o||qe.includes(r))){var s,u=(s=e(a)(e(c).mark((function t(n){var a,s,u,l,h,d,v=arguments;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=v.length,s=new Array(a>1?a-1:0),u=1;u<a;u++)s[u-1]=v[u];return h=this.transaction(n,o?"readwrite":"readonly"),d=h.store,i&&(d=d.index(s.shift())),t.next=7,Promise.all([(l=d)[r].apply(l,e(f)(s)),o&&h.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return s.apply(this,arguments)});return ze.set(n,u),u}}}Pe=function(t){return e(xe)({},t,{get:function(e,n,r){return He(e,n)||t.get(e,n,r)},has:function(e,n){return!!He(e,n)||t.has(e,n)}})}(Pe);
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
var Ge=function(){"use strict";function t(n){e(o)(this,t),this.container=n}return e(s)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var We,Qe,Ye="@firebase/app",Je="0.9.0",Xe=new be("@firebase/app"),$e="[DEFAULT]",Ze=(We={},e(u)(We,Ye,"fire-core"),e(u)(We,"@firebase/app-compat","fire-core-compat"),e(u)(We,"@firebase/analytics","fire-analytics"),e(u)(We,"@firebase/analytics-compat","fire-analytics-compat"),e(u)(We,"@firebase/app-check","fire-app-check"),e(u)(We,"@firebase/app-check-compat","fire-app-check-compat"),e(u)(We,"@firebase/auth","fire-auth"),e(u)(We,"@firebase/auth-compat","fire-auth-compat"),e(u)(We,"@firebase/database","fire-rtdb"),e(u)(We,"@firebase/database-compat","fire-rtdb-compat"),e(u)(We,"@firebase/functions","fire-fn"),e(u)(We,"@firebase/functions-compat","fire-fn-compat"),e(u)(We,"@firebase/installations","fire-iid"),e(u)(We,"@firebase/installations-compat","fire-iid-compat"),e(u)(We,"@firebase/messaging","fire-fcm"),e(u)(We,"@firebase/messaging-compat","fire-fcm-compat"),e(u)(We,"@firebase/performance","fire-perf"),e(u)(We,"@firebase/performance-compat","fire-perf-compat"),e(u)(We,"@firebase/remote-config","fire-rc"),e(u)(We,"@firebase/remote-config-compat","fire-rc-compat"),e(u)(We,"@firebase/storage","fire-gcs"),e(u)(We,"@firebase/storage-compat","fire-gcs-compat"),e(u)(We,"@firebase/firestore","fire-fst"),e(u)(We,"@firebase/firestore-compat","fire-fst-compat"),e(u)(We,"fire-js","fire-js"),e(u)(We,"firebase","fire-js-all"),We),et=new Map,tt=new Map;function nt(e,t){try{e.container.addComponent(t)}catch(n){Xe.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function rt(e){var t=e.name;if(tt.has(t))return Xe.debug("There were multiple attempts to register component ".concat(t,".")),!1;tt.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=et.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){nt(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function it(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
var at=(Qe={},e(u)(Qe,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(u)(Qe,"bad-app-name","Illegal App name: '{$appName}"),e(u)(Qe,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(u)(Qe,"app-deleted","Firebase App named '{$appName}' already deleted"),e(u)(Qe,"no-options","Need to provide options, when not being deployed to hosting via source."),e(u)(Qe,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(u)(Qe,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(u)(Qe,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(u)(Qe,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(u)(Qe,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(u)(Qe,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),Qe),ot=new te("app","Firebase",at),st=function(){"use strict";function t(n,r,i){var a=this;e(o)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Te("app",(function(){return a}),"PUBLIC"))}return e(s)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw ot.create("app-deleted",{appName:this._name})}}]),t}(),ut="9.15.0";function ct(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:$e,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw ot.create("bad-app-name",{appName:String(a)});if(n||(n=J()),!n)throw ot.create("no-options");var o=et.get(a);if(o){if(ae(n,o.options)&&ae(i,o.config))return o;throw ot.create("duplicate-app",{appName:a})}var s=new Ee(a),u=!0,c=!1,l=void 0;try{for(var h,f=tt.values()[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=h.value;s.addComponent(d)}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}var v=new st(n,i,s);return et.set(a,v),v}function lt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=et.get(e);if(!t&&e===$e)return ct();if(!t)throw ot.create("no-app",{appName:e});return t}function ht(e,t,n){var r,i=null!==(r=Ze[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Xe.warn(s.join(" "))}rt(new Te("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
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
var ft="firebase-heartbeat-store",dt=null;function vt(){return dt||(dt=Be("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(ft)}}).catch((function(e){throw ot.create("idb-open",{originalErrorMessage:e.message})}))),dt}function pt(e){return yt.apply(this,arguments)}function yt(){return(yt=e(a)(e(c).mark((function t(n){var r,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,vt();case 3:return r=e.sent,e.abrupt("return",r.transaction(ft).objectStore(ft).get(kt(n)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof ee?Xe.warn(e.t0.message):(i=ot.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),Xe.warn(i.message));case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function mt(e,t){return gt.apply(this,arguments)}function gt(){return(gt=e(a)(e(c).mark((function t(n,r){var i,a,o,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,vt();case 3:return i=e.sent,a=i.transaction(ft,"readwrite"),o=a.objectStore(ft),e.next=8,o.put(r,kt(n));case 8:return e.abrupt("return",a.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof ee?Xe.warn(e.t0.message):(s=ot.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),Xe.warn(s.message));case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function kt(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var wt=function(){"use strict";function t(n){var r=this;e(o)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new _t(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(s)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(a)(e(c).mark((function n(){var r,i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=bt(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(a)(e(c).mark((function n(){var r,i,a,o,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=bt(),i=Tt(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=B(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function bt(){return(new Date).toISOString().substring(0,10)}function Tt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),Et(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),Et(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var It,_t=function(){"use strict";function t(n){e(o)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(s)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(a)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",H().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(a)(e(c).mark((function n(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,pt(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(a)(e(c).mark((function r(){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return a=e.sent,e.abrupt("return",mt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(a)(e(c).mark((function r(){var i,a;return e(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",mt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(f)(a.heartbeats).concat(e(f)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function Et(e){return B(JSON.stringify({version:2,heartbeats:e})).length}
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
 */It="",rt(new Te("platform-logger",(function(e){return new Ge(e)}),"PRIVATE")),rt(new Te("heartbeat",(function(e){return new wt(e)}),"PRIVATE")),ht(Ye,Je,It),ht(Ye,Je,"esm2017"),ht("fire-js","");a=i("bpxeT"),u=i("hKHmD"),f=i("8nrFW"),c=i("2TvXO");var xt,St="@firebase/installations",At="0.6.0",Ct=1e4,Nt="w:".concat(At),Dt="FIS_v2",Rt=36e5,Ot=(xt={},e(u)(xt,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),e(u)(xt,"not-registered","Firebase Installation is not registered."),e(u)(xt,"installation-not-found","Firebase Installation not found."),e(u)(xt,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),e(u)(xt,"app-offline","Could not process request. Application offline."),e(u)(xt,"delete-pending-registration","Can't delete installation while there is a pending registration request."),xt),Lt=new te("installations","Installations",Ot);function Mt(e){return e instanceof ee&&e.code.includes("request-failed")}
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
 */function Pt(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function Ut(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function Ft(e,t){return Vt.apply(this,arguments)}function Vt(){return(Vt=e(a)(e(c).mark((function t(n,r){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:return i=e.sent,a=i.error,e.abrupt("return",Lt.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status}));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function jt(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Bt(e,t){var n=t.refreshToken,r=jt(e);return r.append("Authorization",function(e){return"".concat(Dt," ").concat(e)}(n)),r}function qt(e){return Kt.apply(this,arguments)}function Kt(){return(Kt=e(a)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(!((r=e.sent).status>=500&&r.status<600)){e.next=5;break}return e.abrupt("return",n());case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function zt(e,t){return Ht.apply(this,arguments)}function Ht(){return(Ht=
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
e(a)(e(c).mark((function t(n,r){var i,a,o,s,u,l,h,f,d,v,p,y;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=r.fid,s=Pt(i),u=jt(i),!(l=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,l.getHeartbeatsHeader();case 7:(h=e.sent)&&u.append("x-firebase-client",h);case 9:return f={fid:o,authVersion:Dt,appId:i.appId,sdkVersion:Nt},d={method:"POST",headers:u,body:JSON.stringify(f)},e.next=13,qt((function(){return fetch(s,d)}));case 13:if(!(v=e.sent).ok){e.next=22;break}return e.next=17,v.json();case 17:return p=e.sent,y={fid:p.fid||o,registrationStatus:2,refreshToken:p.refreshToken,authToken:Ut(p.authToken)},e.abrupt("return",y);case 22:return e.next=24,Ft("Create Installation",v);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function Gt(e){return new Promise((function(t){setTimeout(t,e)}))}
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
var Wt=/^[cdef][\w-]{21}$/;function Qt(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var n=function(t){return(n=t,btoa((r=String).fromCharCode.apply(r,e(f)(n))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n,r}
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
 */(t);return Wt.test(n)?n:""}catch(e){return""}}function Yt(e){return"".concat(e.appName,"!").concat(e.appId)}
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
 */var Jt=new Map;function Xt(e,t){var n=Yt(e);$t(n,t),function(e,t){var n=en();n&&n.postMessage({key:e,fid:t});tn()}(n,t)}function $t(e,t){var n=Jt.get(e);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}var Zt=null;function en(){return!Zt&&"BroadcastChannel"in self&&((Zt=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){$t(e.data.key,e.data.fid)}),Zt}function tn(){0===Jt.size&&Zt&&(Zt.close(),Zt=null)}
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
 */var nn="firebase-installations-store",rn=null;function an(){return rn||(rn=Be("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(nn)}})),rn}function on(e,t){return sn.apply(this,arguments)}function sn(){return(sn=e(a)(e(c).mark((function t(n,r){var i,a,o,s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Yt(n),e.next=3,an();case 3:return a=e.sent,o=a.transaction(nn,"readwrite"),s=o.objectStore(nn),e.next=8,s.get(i);case 8:return u=e.sent,e.next=11,s.put(r,i);case 11:return e.next=13,o.done;case 13:return u&&u.fid===r.fid||Xt(n,r.fid),e.abrupt("return",r);case 15:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function un(e){return cn.apply(this,arguments)}function cn(){return(cn=e(a)(e(c).mark((function t(n){var r,i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Yt(n),e.next=3,an();case 3:return i=e.sent,a=i.transaction(nn,"readwrite"),e.next=7,a.objectStore(nn).delete(r);case 7:return e.next=9,a.done;case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ln(e,t){return hn.apply(this,arguments)}function hn(){return(hn=e(a)(e(c).mark((function t(n,r){var i,a,o,s,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Yt(n),e.next=3,an();case 3:return a=e.sent,o=a.transaction(nn,"readwrite"),s=o.objectStore(nn),e.next=8,s.get(i);case 8:if(u=e.sent,void 0!==(l=r(u))){e.next=15;break}return e.next=13,s.delete(i);case 13:e.next=17;break;case 15:return e.next=17,s.put(l,i);case 17:return e.next=19,o.done;case 19:return!l||u&&u.fid===l.fid||Xt(n,l.fid),e.abrupt("return",l);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function fn(e){return dn.apply(this,arguments)}function dn(){return(dn=
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
e(a)(e(c).mark((function t(n){var r,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,ln(n.appConfig,(function(e){var t=vn(e),i=pn(n,t);return r=i.registrationPromise,i.installationEntry}));case 3:if(""!==(i=e.sent).fid){e.next=9;break}return e.next=7,r;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:i,registrationPromise:r});case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function vn(e){return wn(e||{fid:Qt(),registrationStatus:0})}function pn(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(Lt.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return yn.apply(this,arguments)}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:mn(e)}:{installationEntry:t}}function yn(){return(yn=e(a)(e(c).mark((function t(n,r){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,zt(n,r);case 3:return i=e.sent,e.abrupt("return",on(n.appConfig,i));case 7:if(e.prev=7,e.t0=e.catch(0),!Mt(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,un(n.appConfig);case 12:e.next=16;break;case 14:return e.next=16,on(n.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function mn(e){return gn.apply(this,arguments)}function gn(){return(gn=e(a)(e(c).mark((function t(n){var r,i,a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,kn(n.appConfig);case 2:r=e.sent;case 3:if(1!==r.registrationStatus){e.next=11;break}return e.next=6,Gt(100);case 6:return e.next=8,kn(n.appConfig);case 8:r=e.sent,e.next=3;break;case 11:if(0!==r.registrationStatus){e.next=22;break}return e.next=14,fn(n);case 14:if(i=e.sent,a=i.installationEntry,!(o=i.registrationPromise)){e.next=21;break}return e.abrupt("return",o);case 21:return e.abrupt("return",a);case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function kn(e){return ln(e,(function(e){if(!e)throw Lt.create("installation-not-found");return wn(e)}))}function wn(e){return 1===(t=e).registrationStatus&&t.registrationTime+Ct<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function bn(e,t){return Tn.apply(this,arguments)}function Tn(){return(Tn=
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
e(a)(e(c).mark((function t(n,r){var i,a,o,s,u,l,h,f,d,v,p;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=In(i,r),s=Bt(i,r),!(u=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,u.getHeartbeatsHeader();case 7:(l=e.sent)&&s.append("x-firebase-client",l);case 9:return h={installation:{sdkVersion:Nt,appId:i.appId}},f={method:"POST",headers:s,body:JSON.stringify(h)},e.next=13,qt((function(){return fetch(o,f)}));case 13:if(!(d=e.sent).ok){e.next=22;break}return e.next=17,d.json();case 17:return v=e.sent,p=Ut(v),e.abrupt("return",p);case 22:return e.next=24,Ft("Generate Auth Token",d);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function In(e,t){var n=t.fid;return"".concat(Pt(e),"/").concat(n,"/authTokens:generate")}function _n(e){return En.apply(this,arguments)}function En(){return En=
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
e(a)(e(c).mark((function t(n){var r,i,a,o,s=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],e.next=4,ln(n.appConfig,(function(e){if(!Dn(e))throw Lt.create("not-registered");var t=e.authToken;if(!r&&Rn(t))return e;if(1===t.requestStatus)return i=xn(n,r),e;if(!navigator.onLine)throw Lt.create("app-offline");var a=On(e);return i=Cn(n,a),a}));case 4:if(a=e.sent,!i){e.next=11;break}return e.next=8,i;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a.authToken;case 12:return o=e.t0,e.abrupt("return",o);case 14:case"end":return e.stop()}}),t)}))),En.apply(this,arguments)}function xn(e,t){return Sn.apply(this,arguments)}function Sn(){return(Sn=e(a)(e(c).mark((function t(n,r){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,An(n.appConfig);case 2:i=e.sent;case 3:if(1!==i.authToken.requestStatus){e.next=11;break}return e.next=6,Gt(100);case 6:return e.next=8,An(n.appConfig);case 8:i=e.sent,e.next=3;break;case 11:if(0!==(a=i.authToken).requestStatus){e.next=16;break}return e.abrupt("return",_n(n,r));case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function An(e){return ln(e,(function(e){if(!Dn(e))throw Lt.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+Ct<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function Cn(e,t){return Nn.apply(this,arguments)}function Nn(){return(Nn=e(a)(e(c).mark((function t(n,r){var i,a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,bn(n,r);case 3:return i=e.sent,a=Object.assign(Object.assign({},r),{authToken:i}),e.next=7,on(n.appConfig,a);case 7:return e.abrupt("return",i);case 10:if(e.prev=10,e.t0=e.catch(0),!Mt(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,un(n.appConfig);case 15:e.next=20;break;case 17:return o=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),e.next=20,on(n.appConfig,o);case 20:throw e.t0;case 21:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function Dn(e){return void 0!==e&&2===e.registrationStatus}function Rn(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Rt}(e)}function On(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Ln(){return(Ln=
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
e(a)(e(c).mark((function t(n){var r,i,a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,e.next=3,fn(r);case 3:return i=e.sent,a=i.installationEntry,(o=i.registrationPromise)?o.catch(console.error):_n(r).catch(console.error),e.abrupt("return",a.fid);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Mn(){return Mn=
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
e(a)(e(c).mark((function t(n){var r,i,a,o=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]&&o[1],i=n,e.next=4,Pn(i);case 4:return e.next=6,_n(i,r);case 6:return a=e.sent,e.abrupt("return",a.token);case 8:case"end":return e.stop()}}),t)}))),Mn.apply(this,arguments)}function Pn(e){return Un.apply(this,arguments)}function Un(){return(Un=e(a)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fn(n);case 2:if(!(r=e.sent.registrationPromise)){e.next=6;break}return e.next=6,r;case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Fn(e){return Lt.create("missing-app-config-values",{valueName:e})}
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
 */var Vn="installations",jn=function(e){var t=it(e.getProvider("app").getImmediate(),Vn).getImmediate(),n={getId:function(){return function(e){return Ln.apply(this,arguments)}(t)},getToken:function(e){return function(e){return Mn.apply(this,arguments)}(t,e)}};return n};rt(new Te(Vn,(function(e){var t=e.getProvider("app").getImmediate(),n=
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
function(e){if(!e||!e.options)throw Fn("App Configuration");if(!e.name)throw Fn("App Name");var t=!0,n=!1,r=void 0;try{for(var i,a=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(!e.options[o])throw Fn(o)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:it(t,"heartbeat"),_delete:function(){return Promise.resolve()}}}),"PUBLIC")),rt(new Te("installations-internal",jn,"PRIVATE")),ht(St,At),ht(St,At,"esm2017");var Bn,qn,Kn,zn="@firebase/performance",Hn="0.6.0",Gn=Hn,Wn="FB-PERF-TRACE-START",Qn="FB-PERF-TRACE-STOP",Yn="FB-PERF-TRACE-MEASURE",Jn="_wt_",Xn="_fcp",$n="_fid",Zn="@firebase/performance/config",er="@firebase/performance/configexpire",tr="Performance",nr=(Bn={},e(u)(Bn,"trace started","Trace {$traceName} was started before."),e(u)(Bn,"trace stopped","Trace {$traceName} is not running."),e(u)(Bn,"nonpositive trace startTime","Trace {$traceName} startTime should be positive."),e(u)(Bn,"nonpositive trace duration","Trace {$traceName} duration should be positive."),e(u)(Bn,"no window","Window is not available."),e(u)(Bn,"no app id","App id is not available."),e(u)(Bn,"no project id","Project id is not available."),e(u)(Bn,"no api key","Api key is not available."),e(u)(Bn,"invalid cc log","Attempted to queue invalid cc event"),e(u)(Bn,"FB not default","Performance can only start when Firebase app instance is the default one."),e(u)(Bn,"RC response not ok","RC response is not ok"),e(u)(Bn,"invalid attribute name","Attribute name {$attributeName} is invalid."),e(u)(Bn,"invalid attribute value","Attribute value {$attributeValue} is invalid."),e(u)(Bn,"invalid custom metric name","Custom metric name {$customMetricName} is invalid"),e(u)(Bn,"invalid String merger input","Input for String merger is invalid, contact support team to resolve."),e(u)(Bn,"already initialized","initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."),Bn),rr=new te("performance",tr,nr),ir=new be(tr);ir.logLevel=de.INFO;var ar,or,sr=function(){"use strict";function t(n){if(e(o)(this,t),this.window=n,!n)throw rr.create("no window");this.performance=n.performance,this.PerformanceObserver=n.PerformanceObserver,this.windowLocation=n.location,this.navigator=n.navigator,this.document=n.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=n.localStorage),n.perfMetrics&&n.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=n.perfMetrics.onFirstInputDelay)}return e(s)(t,[{key:"getUrl",value:function(){return this.windowLocation.href.split("?")[0]}},{key:"mark",value:function(e){this.performance&&this.performance.mark&&this.performance.mark(e)}},{key:"measure",value:function(e,t,n){this.performance&&this.performance.measure&&this.performance.measure(e,t,n)}},{key:"getEntriesByType",value:function(e){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(e):[]}},{key:"getEntriesByName",value:function(e){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(e):[]}},{key:"getTimeOrigin",value:function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}},{key:"requiredApisAvailable",value:function(){return fetch&&Promise&&"undefined"!=typeof navigator&&navigator.cookieEnabled?!!z()||(ir.info("IndexedDB is not supported by current browswer"),!1):(ir.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)}},{key:"setupObserver",value:function(e,t){this.PerformanceObserver&&new this.PerformanceObserver((function(e){var n=!0,r=!1,i=void 0;try{for(var a,o=e.getEntries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;t(s)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}})).observe({entryTypes:[e]})}}],[{key:"getInstance",value:function(){return void 0===qn&&(qn=new t(Kn)),qn}}]),t}();function ur(){return ar}
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
function cr(e,t){var n=e.length-t.length;if(n<0||n>1)throw rr.create("invalid String merger input");for(var r=[],i=0;i<e.length;i++)r.push(e.charAt(i)),t.length>i&&r.push(t.charAt(i));return r.join("")}
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
 */var lr,hr,fr=function(){"use strict";function t(){e(o)(this,t),this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=cr("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=cr("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}return e(s)(t,[{key:"getFlTransportFullUrl",value:function(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}}],[{key:"getInstance",value:function(){return void 0===or&&(or=new t),or}}]),t}();
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
 */(hr=lr||(lr={}))[hr.UNKNOWN=0]="UNKNOWN",hr[hr.VISIBLE=1]="VISIBLE",hr[hr.HIDDEN=2]="HIDDEN";var dr=["firebase_","google_","ga_"],vr=new RegExp("^[a-zA-Z]\\w*$");function pr(){var e=sr.getInstance().navigator;return(null==e?void 0:e.serviceWorker)?e.serviceWorker.controller?2:3:1}function yr(){switch(sr.getInstance().document.visibilityState){case"visible":return lr.VISIBLE;case"hidden":return lr.HIDDEN;default:return lr.UNKNOWN}}function mr(){var e=sr.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}
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
function gr(e){var t,n=null===(t=e.options)||void 0===t?void 0:t.appId;if(!n)throw rr.create("no app id");return n}
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
var kr="0.0.1",wr={loggingEnabled:!0},br="FIREBASE_INSTALLATIONS_AUTH";function Tr(e,t){var n=function(){var e=sr.getInstance().localStorage;if(!e)return;var t=e.getItem(er);if(!(t&&(n=t,Number(n)>Date.now())))return;var n;var r=e.getItem(Zn);if(!r)return;try{return JSON.parse(r)}catch(e){return}}();return n?(_r(n),Promise.resolve()):function(e,t){return(n=e.installations,r=n.getToken(),r.then((function(e){})),r).then((function(n){var r=function(e){var t,n=null===(t=e.options)||void 0===t?void 0:t.projectId;if(!n)throw rr.create("no project id");return n}(e.app),i=function(e){var t,n=null===(t=e.options)||void 0===t?void 0:t.apiKey;if(!n)throw rr.create("no api key");return n}(e.app),a="https://firebaseremoteconfig.googleapis.com/v1/projects/".concat(r,"/namespaces/fireperf:fetch?key=").concat(i),o=new Request(a,{method:"POST",headers:{Authorization:"".concat(br," ").concat(n)},body:JSON.stringify({app_instance_id:t,app_instance_id_token:n,app_id:gr(e.app),app_version:Gn,sdk_version:kr})});return fetch(o).then((function(e){if(e.ok)return e.json();throw rr.create("RC response not ok")}))})).catch((function(){ir.info(Ir)}));var n,r}(e,t).then(_r).then((function(e){return function(e){var t=sr.getInstance().localStorage;if(!e||!t)return;t.setItem(Zn,JSON.stringify(e)),t.setItem(er,String(Date.now()+36e5*fr.getInstance().configTimeToLive))}(e)}),(function(){}))}var Ir="Could not fetch config, will use default configs";function _r(e){if(!e)return e;var t=fr.getInstance(),n=e.entries||{};return void 0!==n.fpr_enabled?t.loggingEnabled="true"===String(n.fpr_enabled):t.loggingEnabled=wr.loggingEnabled,n.fpr_log_source?t.logSource=Number(n.fpr_log_source):wr.logSource&&(t.logSource=wr.logSource),n.fpr_log_endpoint_url?t.logEndPointUrl=n.fpr_log_endpoint_url:wr.logEndPointUrl&&(t.logEndPointUrl=wr.logEndPointUrl),n.fpr_log_transport_key?t.transportKey=n.fpr_log_transport_key:wr.transportKey&&(t.transportKey=wr.transportKey),void 0!==n.fpr_vc_network_request_sampling_rate?t.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):void 0!==wr.networkRequestsSamplingRate&&(t.networkRequestsSamplingRate=wr.networkRequestsSamplingRate),void 0!==n.fpr_vc_trace_sampling_rate?t.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):void 0!==wr.tracesSamplingRate&&(t.tracesSamplingRate=wr.tracesSamplingRate),t.logTraceAfterSampling=Er(t.tracesSamplingRate),t.logNetworkAfterSampling=Er(t.networkRequestsSamplingRate),e}function Er(e){return Math.random()<=e}
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
 */var xr,Sr=1;function Ar(e){return Sr=2,xr=xr||function(e){return function(){var e=sr.getInstance().document;return new Promise((function(t){if(e&&"complete"!==e.readyState){var n=function(){"complete"===e.readyState&&(e.removeEventListener("readystatechange",n),t())};e.addEventListener("readystatechange",n)}else t()}))}().then((function(){return t=e.installations,(n=t.getId()).then((function(e){ar=e})),n;var t,n})).then((function(t){return Tr(e,t)})).then((function(){return Cr()}),(function(){return Cr()}))}(e),xr}function Cr(){Sr=3}
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
 */var Nr,Dr=1e4,Rr=3,Or=[],Lr=!1;function Mr(t){setTimeout((function(){var t,n;if(0!==Rr)return Or.length?(t=Or.splice(0,1e3),n=t.map((function(e){return{source_extension_json_proto3:e.message,event_time_ms:String(e.eventTime)}})),void function(t,n){return function(e){var t=fr.getInstance().getFlTransportFullUrl();return fetch(t,{method:"POST",body:JSON.stringify(e)})}(t).then((function(e){return e.ok||ir.info("Call to Firebase backend failed."),e.json()})).then((function(t){var r=Number(t.nextRequestWaitMillis),i=Dr;isNaN(r)||(i=Math.max(r,i));var a=t.logResponseDetails;Array.isArray(a)&&a.length>0&&"RETRY_REQUEST_LATER"===a[0].responseAction&&(Or=e(f)(n).concat(e(f)(Or)),ir.info("Retry transport request later.")),Rr=3,Mr(i)}))}({request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:fr.getInstance().logSource,log_event:n},t).catch((function(){Or=e(f)(t).concat(e(f)(Or)),Rr--,ir.info("Tries left: ".concat(Rr,".")),Mr(Dr)}))):Mr(Dr)}),t)}function Pr(t){if(!t.eventTime||!t.message)throw rr.create("invalid cc log");Or=e(f)(Or).concat([t])}function Ur(t,n){var r;
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
 */Nr||(r=jr,Nr=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];Pr({message:r.apply(void 0,e(f)(n)),eventTime:Date.now()})}),Nr(t,n)}function Fr(e){var t=fr.getInstance();!t.instrumentationEnabled&&e.isAuto||(t.dataCollectionEnabled||e.isAuto)&&sr.getInstance().requiredApisAvailable()&&(e.isAuto&&yr()!==lr.VISIBLE||(3===Sr?Vr(e):Ar(e.performanceController).then((function(){return Vr(e)}),(function(){return Vr(e)}))))}function Vr(e){if(ur()){var t=fr.getInstance();t.loggingEnabled&&t.logTraceAfterSampling&&setTimeout((function(){return Ur(e,1)}),0)}}function jr(e,t){return 0===t?(r={url:(n=e).url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},i={application_info:Br(n.performanceController.app),network_request_metric:r},JSON.stringify(i)):function(e){var t={name:e.name,is_auto:e.isAuto,client_start_time_us:e.startTimeUs,duration_us:e.durationUs};0!==Object.keys(e.counters).length&&(t.counters=e.counters);var n=e.getAttributes();0!==Object.keys(n).length&&(t.custom_attributes=n);var r={application_info:Br(e.performanceController.app),trace_metric:t};return JSON.stringify(r)}(e);var n,r,i}function Br(e){return{google_app_id:gr(e),app_instance_id:ur(),web_app_info:{sdk_version:Gn,page_url:sr.getInstance().getUrl(),service_worker_status:pr(),visibility_state:yr(),effective_connection_type:mr()},application_process_state:0}}
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
 */var qr=["_fp",Xn,$n];
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
var Kr=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3?arguments[3]:void 0;e(o)(this,t),this.performanceController=n,this.name=r,this.isAuto=i,this.state=1,this.customAttributes={},this.counters={},this.api=sr.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark="".concat(Wn,"-").concat(this.randomId,"-").concat(this.name),this.traceStopMark="".concat(Qn,"-").concat(this.randomId,"-").concat(this.name),this.traceMeasure=a||"".concat(Yn,"-").concat(this.randomId,"-").concat(this.name),a&&this.calculateTraceMetrics())}return e(s)(t,[{key:"start",value:function(){if(1!==this.state)throw rr.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}},{key:"stop",value:function(){if(2!==this.state)throw rr.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),Fr(this)}},{key:"record",value:function(e,t,n){if(e<=0)throw rr.create("nonpositive trace startTime",{traceName:this.name});if(t<=0)throw rr.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*t),this.startTimeUs=Math.floor(1e3*e),n&&n.attributes&&(this.customAttributes=Object.assign({},n.attributes)),n&&n.metrics){var r=!0,i=!1,a=void 0;try{for(var o,s=Object.keys(n.metrics)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;isNaN(Number(n.metrics[u]))||(this.counters[u]=Math.floor(Number(n.metrics[u])))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}Fr(this)}},{key:"incrementMetric",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;void 0===this.counters[e]?this.putMetric(e,t):this.putMetric(e,this.counters[e]+t)}},{key:"putMetric",value:function(e,t){if(i=e,a=this.name,0===i.length||i.length>100||!(a&&a.startsWith(Jn)&&qr.indexOf(i)>-1)&&i.startsWith("_"))throw rr.create("invalid custom metric name",{customMetricName:e});var n,r,i,a;this.counters[e]=(n=null!=t?t:0,(r=Math.floor(n))<n&&ir.info("Metric value should be an Integer, setting the value as : ".concat(r,".")),r)}},{key:"getMetric",value:function(e){return this.counters[e]||0}},{key:"putAttribute",value:function(e,t){var n,r=!(0===(n=e).length||n.length>40||dr.some((function(e){return n.startsWith(e)}))||!n.match(vr)),i=function(e){return 0!==e.length&&e.length<=100}(t);if(r&&i)this.customAttributes[e]=t;else{if(!r)throw rr.create("invalid attribute name",{attributeName:e});if(!i)throw rr.create("invalid attribute value",{attributeValue:t})}}},{key:"getAttribute",value:function(e){return this.customAttributes[e]}},{key:"removeAttribute",value:function(e){void 0!==this.customAttributes[e]&&delete this.customAttributes[e]}},{key:"getAttributes",value:function(){return Object.assign({},this.customAttributes)}},{key:"setStartTime",value:function(e){this.startTimeUs=e}},{key:"setDuration",value:function(e){this.durationUs=e}},{key:"calculateTraceMetrics",value:function(){var e=this.api.getEntriesByName(this.traceMeasure),t=e&&e[0];t&&(this.durationUs=Math.floor(1e3*t.duration),this.startTimeUs=Math.floor(1e3*(t.startTime+this.api.getTimeOrigin())))}}],[{key:"createOobTrace",value:function(e,n,r,i){var a=sr.getInstance().getUrl();if(a){var o=new t(e,Jn+a,!0),s=Math.floor(1e3*sr.getInstance().getTimeOrigin());o.setStartTime(s),n&&n[0]&&(o.setDuration(Math.floor(1e3*n[0].duration)),o.putMetric("domInteractive",Math.floor(1e3*n[0].domInteractive)),o.putMetric("domContentLoadedEventEnd",Math.floor(1e3*n[0].domContentLoadedEventEnd)),o.putMetric("loadEventEnd",Math.floor(1e3*n[0].loadEventEnd)));if(r){var u=r.find((function(e){return"first-paint"===e.name}));u&&u.startTime&&o.putMetric("_fp",Math.floor(1e3*u.startTime));var c=r.find((function(e){return"first-contentful-paint"===e.name}));c&&c.startTime&&o.putMetric(Xn,Math.floor(1e3*c.startTime)),i&&o.putMetric($n,Math.floor(1e3*i))}Fr(o)}}},{key:"createUserTimingTrace",value:function(e,n){Fr(new t(e,n,!1,n))}}]),t}();
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
 */function zr(e,t){var n=t;if(n&&void 0!==n.responseStart){var r=sr.getInstance().getTimeOrigin(),i=Math.floor(1e3*(n.startTime+r)),a=n.responseStart?Math.floor(1e3*(n.responseStart-n.startTime)):void 0,o=Math.floor(1e3*(n.responseEnd-n.startTime));!function(e){var t=fr.getInstance();if(t.instrumentationEnabled){var n=e.url,r=t.logEndPointUrl.split("?")[0],i=t.flTransportEndpointUrl.split("?")[0];n!==r&&n!==i&&t.loggingEnabled&&t.logNetworkAfterSampling&&setTimeout((function(){return Ur(e,0)}),0)}}({performanceController:e,url:n.name&&n.name.split("?")[0],responsePayloadBytes:n.transferSize,startTimeUs:i,timeToResponseInitiatedUs:a,timeToResponseCompletedUs:o})}}
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
 */function Hr(e){ur()&&(setTimeout((function(){return function(e){var t=sr.getInstance(),n=t.getEntriesByType("navigation"),r=t.getEntriesByType("paint");if(t.onFirstInputDelay){var i=setTimeout((function(){Kr.createOobTrace(e,n,r),i=void 0}),5e3);t.onFirstInputDelay((function(t){i&&(clearTimeout(i),Kr.createOobTrace(e,n,r,t))}))}else Kr.createOobTrace(e,n,r)}(e)}),0),setTimeout((function(){return function(e){var t=sr.getInstance(),n=t.getEntriesByType("resource"),r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;zr(e,u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}t.setupObserver("resource",(function(t){return zr(e,t)}))}(e)}),0),setTimeout((function(){return function(e){var t=sr.getInstance(),n=t.getEntriesByType("measure"),r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;Gr(e,u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}t.setupObserver("measure",(function(t){return Gr(e,t)}))}(e)}),0))}function Gr(e,t){var n=t.name;n.substring(0,Yn.length)!==Yn&&Kr.createUserTimingTrace(e,n)}
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
 */var Wr=function(){"use strict";function t(n,r){e(o)(this,t),this.app=n,this.installations=r,this.initialized=!1}return e(s)(t,[{key:"_init",value:function(e){var t=this;this.initialized||(void 0!==(null==e?void 0:e.dataCollectionEnabled)&&(this.dataCollectionEnabled=e.dataCollectionEnabled),void 0!==(null==e?void 0:e.instrumentationEnabled)&&(this.instrumentationEnabled=e.instrumentationEnabled),sr.getInstance().requiredApisAvailable()?H().then((function(e){if(e){var n=t;Lr||(Mr(5500),Lr=!0),Ar(t).then((function(){return Hr(n)}),(function(){return Hr(n)})),t.initialized=!0}})).catch((function(e){ir.info("Environment doesn't support IndexedDB: ".concat(e))})):ir.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}},{key:"instrumentationEnabled",get:function(){return fr.getInstance().instrumentationEnabled},set:function(e){fr.getInstance().instrumentationEnabled=e}},{key:"dataCollectionEnabled",get:function(){return fr.getInstance().dataCollectionEnabled},set:function(e){fr.getInstance().dataCollectionEnabled=e}}]),t}();function Qr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt(),t=it(e=fe(e),"performance"),n=t.getImmediate();return n}rt(new Te("performance",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if("[DEFAULT]"!==r.name)throw rr.create("FB not default");if("undefined"==typeof window)throw rr.create("no window");!function(e){Kn=e}
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
 */(window);var a=new Wr(r,i);return a._init(n),a}),"PUBLIC")),ht(zn,Hn),ht(zn,Hn,"esm2017");
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
ht("firebase","9.15.0","app");d=i("ds8z5"),a=i("bpxeT"),o=i("8MBJY"),s=i("a2hTj"),u=i("hKHmD");var Yr={};Object.defineProperty(Yr,"__esModule",{value:!0}),Yr.default=function(e,t,n){return Xr(e,t,n)};var Jr=function(e){return e&&e.__esModule?e:{default:e}}(i("2mz0K"));function Xr(e,t,n){return(Xr="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Jr.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var $r=i("fVNic");v=i("eYQtU"),p=i("1t1Wn"),f=i("8nrFW"),x=i("2MbLg"),c=i("2TvXO");function Zr(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function ei(){return e(u)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var ti=ei,ni=new te("auth","Firebase",ei()),ri=new be("@firebase/auth");function ii(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;ri.logLevel<=de.ERROR&&(a=ri).error.apply(a,["Auth (".concat(ut,"): ").concat(t)].concat(e(f)(r)))}
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
 */function ai(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw ci.apply(void 0,[t].concat(e(f)(r)))}function oi(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return ci.apply(void 0,[t].concat(e(f)(r)))}function si(t,n,r){var i=Object.assign(Object.assign({},ti()),e(u)({},n,r));return new te("auth","Firebase",i).create(n,{appName:t.name})}function ui(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&ai(e,"argument-error"),si(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function ci(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=r[0],u=e(f)(r.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(f)(u)))}return(a=ni).create.apply(a,[t].concat(e(f)(r)))}function li(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!t)throw ci.apply(void 0,[n].concat(e(f)(i)))}function hi(e){var t="INTERNAL ASSERTION FAILED: "+e;throw ii(t),new Error(t)}function fi(e,t){e||hi(t)}
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
 */var di=new Map;function vi(e){fi(e instanceof Function,"Expected a class definition");var t=di.get(e);return t?(fi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,di.set(e,t),t)}
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
 */function pi(e,t){var n=it(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(ae(n.getOptions(),null!=t?t:{}))return r;ai(r,"already-initialized")}return n.initialize({options:t})}
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
function yi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function mi(){return"http:"===gi()||"https:"===gi()}function gi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function ki(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!mi()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
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
var wi=function(){"use strict";function t(n,r){e(o)(this,t),this.shortDelay=n,this.longDelay=r,fi(r>n,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(K())||"object"==typeof navigator&&"ReactNative"===navigator.product}return e(s)(t,[{key:"get",value:function(){return ki()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
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
 */function bi(e,t){fi(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
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
 */var Ti,Ii=function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void hi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void hi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void hi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),_i=(Ti={},e(u)(Ti,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(u)(Ti,"MISSING_CUSTOM_TOKEN","internal-error"),e(u)(Ti,"INVALID_IDENTIFIER","invalid-email"),e(u)(Ti,"MISSING_CONTINUE_URI","internal-error"),e(u)(Ti,"INVALID_PASSWORD","wrong-password"),e(u)(Ti,"MISSING_PASSWORD","internal-error"),e(u)(Ti,"EMAIL_EXISTS","email-already-in-use"),e(u)(Ti,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(u)(Ti,"INVALID_IDP_RESPONSE","invalid-credential"),e(u)(Ti,"INVALID_PENDING_TOKEN","invalid-credential"),e(u)(Ti,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(u)(Ti,"MISSING_REQ_TYPE","internal-error"),e(u)(Ti,"EMAIL_NOT_FOUND","user-not-found"),e(u)(Ti,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(u)(Ti,"EXPIRED_OOB_CODE","expired-action-code"),e(u)(Ti,"INVALID_OOB_CODE","invalid-action-code"),e(u)(Ti,"MISSING_OOB_CODE","internal-error"),e(u)(Ti,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(u)(Ti,"INVALID_ID_TOKEN","invalid-user-token"),e(u)(Ti,"TOKEN_EXPIRED","user-token-expired"),e(u)(Ti,"USER_NOT_FOUND","user-token-expired"),e(u)(Ti,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(u)(Ti,"INVALID_CODE","invalid-verification-code"),e(u)(Ti,"INVALID_SESSION_INFO","invalid-verification-id"),e(u)(Ti,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(u)(Ti,"MISSING_SESSION_INFO","missing-verification-id"),e(u)(Ti,"SESSION_EXPIRED","code-expired"),e(u)(Ti,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(u)(Ti,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(u)(Ti,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(u)(Ti,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(u)(Ti,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(u)(Ti,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(u)(Ti,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(u)(Ti,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(u)(Ti,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(u)(Ti,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(u)(Ti,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Ti),Ei=new wi(3e4,6e4);function xi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Si(e,t,n,r){return Ai.apply(this,arguments)}function Ai(){return Ai=e(a)(e(c).mark((function t(n,r,i,o){var s,u=arguments;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},t.abrupt("return",Ci(n,s,e(a)(e(c).mark((function t(){var a,s,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s={},o&&("GET"===r?s=o:a={body:JSON.stringify(o)}),u=se(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",Ii.fetch()(Oi(n,n.config.apiHost,i,u),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),Ai.apply(this,arguments)}function Ci(e,t,n){return Ni.apply(this,arguments)}function Ni(){return(Ni=e(a)(e(c).mark((function t(n,r,i){var a,o,s,u,l,h,f,d,v;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},_i),r),t.prev=2,o=new Li(n),t.next=6,Promise.race([i(),o.promise]);case 6:return s=t.sent,o.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(u=t.sent))){t.next=13;break}throw Mi(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){t.next=17;break}return t.abrupt("return",u);case 17:if(l=s.ok?u.errorMessage:u.error.message,h=e(p)(l.split(" : "),2),f=h[0],d=h[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){t.next=23;break}throw Mi(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==f){t.next=27;break}throw Mi(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==f){t.next=29;break}throw Mi(n,"user-disabled",u);case 29:if(v=a[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!d){t.next=34;break}throw si(n,v,d);case 34:ai(n,v);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof ee)){t.next=41;break}throw t.t0;case 41:ai(n,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function Di(e,t,n,r){return Ri.apply(this,arguments)}function Ri(){return Ri=e(a)(e(c).mark((function t(n,r,i,a){var o,s,u=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,Si(n,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&ai(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),Ri.apply(this,arguments)}function Oi(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?bi(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Li=function(){"use strict";function t(n){var r=this;e(o)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(oi(n.auth,"network-request-failed"))}),Ei.get())}))}return e(s)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Mi(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=oi(e,t,r);return i.customData._tokenResponse=n,i}function Pi(e,t){return Ui.apply(this,arguments)}function Ui(){return(Ui=
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
e(a)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Si(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Fi(e,t){return Vi.apply(this,arguments)}function Vi(){return(Vi=e(a)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Si(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function ji(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function Bi(){return Bi=e(a)(e(c).mark((function t(n){var r,i,a,o,s,u,l=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],i=fe(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,li((o=Ki(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:ji(qi(o.auth_time)),issuedAtTime:ji(qi(o.iat)),expirationTime:ji(qi(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),Bi.apply(this,arguments)}function qi(e){return 1e3*Number(e)}function Ki(t){var n=e(p)(t.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return ii("JWT malformed, contained fewer than 3 sections"),null;try{var o=q(i);return o?JSON.parse(o):(ii("Failed to decode base64 JWT payload"),null)}catch(e){return ii("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function zi(e,t){return Hi.apply(this,arguments)}function Hi(){return Hi=
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
e(a)(e(c).mark((function t(n,r){var i=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof ee&&Gi(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),Hi.apply(this,arguments)}function Gi(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */var Wi=function(){"use strict";function t(n){e(o)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(s)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(a)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(a)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}}]),t}(),Qi=function(){"use strict";function t(n,r){e(o)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(s)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=ji(this.lastLoginAt),this.creationTime=ji(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
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
 */function Yi(e){return Ji.apply(this,arguments)}function Ji(){return(Ji=
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
e(a)(e(c).mark((function t(n){var r,i,a,o,s,u,l,h,f,d,v;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,zi(n,Fi(i,{idToken:a}));case 7:li(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?Zi(s.providerUserInfo):[],l=$i(n.providerData,u),h=n.isAnonymous,f=!(n.email&&s.passwordHash||(null==l?void 0:l.length)),d=!!h&&f,v={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Qi(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(n,v);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Xi(){return(Xi=e(a)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=fe(n),e.next=3,Yi(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function $i(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(f)(r).concat(e(f)(n))}function Zi(e){return e.map((function(e){var t=e.providerId,n=Zr(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function ea(e,t){return ta.apply(this,arguments)}function ta(){return(ta=
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
e(a)(e(c).mark((function t(n,r){var i;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ci(n,{},e(a)(e(c).mark((function t(){var i,a,o,s,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=se({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,s=a.apiKey,u=Oi(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Ii.fetch()(u,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
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
 */var na=function(){"use strict";function t(){e(o)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(s)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){li(e.idToken,"internal-error"),li(void 0!==e.idToken,"internal-error"),li(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,li(n=Ki(t),"internal-error"),li(void 0!==n.exp,"internal-error"),li(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(c).mark((function i(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(li(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(a)(e(c).mark((function i(){var a,o,s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ea(t,n);case 2:a=e.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return hi("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new t;return r&&(li("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),i&&(li("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(li("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
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
 */function ra(e,t){li("string"==typeof e||void 0===e,"internal-error",{appName:t})}var ia=function(){"use strict";function t(n){e(o)(this,t);var r=n.uid,i=n.auth,a=n.stsTokenManager,s=Zr(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Wi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?e(f)(s.providerData):[],this.metadata=new Qi(s.createdAt||void 0,s.lastLoginAt||void 0)}return e(s)(t,[{key:"getIdToken",value:function(t){var n=this;return e(a)(e(c).mark((function r(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,zi(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(li(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Bi.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Xi.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(li(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){li(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(c).mark((function i(){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),a=!0),!n){e.next=5;break}return e.next=5,Yi(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(a)(e(c).mark((function n(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,zi(t,Pi(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,a,o,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,v=null!==(o=n.photoURL)&&void 0!==o?o:void 0,p=null!==(s=n.tenantId)&&void 0!==s?s:void 0,y=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,m=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,w=n.emailVerified,b=n.isAnonymous,T=n.providerData,I=n.stsTokenManager;li(k&&I,e,"internal-error");var _=na.fromJSON(this.name,I);li("string"==typeof k,e,"internal-error"),ra(h,e.name),ra(f,e.name),li("boolean"==typeof w,e,"internal-error"),li("boolean"==typeof b,e,"internal-error"),ra(d,e.name),ra(v,e.name),ra(p,e.name),ra(y,e.name),ra(m,e.name),ra(g,e.name);var E=new t({uid:k,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:b,photoURL:v,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:m,lastLoginAt:g});return T&&Array.isArray(T)&&(E.providerData=T.map((function(e){return Object.assign({},e)}))),y&&(E._redirectEventId=y),E}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(a)(e(c).mark((function a(){var o,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new na).updateFromServerResponse(r),s=new t({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),e.next=5,Yi(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),aa=function(){"use strict";function t(){e(o)(this,t),this.type="NONE",this.storage={}}return e(s)(t,[{key:"_isAvailable",value:function(){return e(a)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(c).mark((function i(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(c).mark((function r(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
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
 */aa.type="NONE";var oa=aa;
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
 */function sa(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var ua=function(){"use strict";function t(n,r,i){e(o)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,s=a.config,u=a.name;this.fullUserKey=sa(this.userKey,s.apiKey,u),this.fullPersistenceKey=sa("persistence",s.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(s)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(a)(e(c).mark((function n(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?ia._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(a)(e(c).mark((function r(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(a)(e(c).mark((function o(){var s,u,l,h,f,d,v,p,y,m,g,k,w;return e(c).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r.length){o.next=2;break}return o.abrupt("return",new t(vi(oa),n,i));case 2:return o.next=4,Promise.all(r.map(function(){var t=e(a)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:s=o.sent.filter((function(e){return e})),u=s[0]||vi(oa),l=sa(i,n.config.apiKey,n.name),h=null,f=!0,d=!1,v=void 0,o.prev=9,p=r[Symbol.iterator]();case 11:if(f=(y=p.next()).done){o.next=29;break}return m=y.value,o.prev=13,o.next=16,m._get(l);case 16:if(!(g=o.sent)){o.next=22;break}return k=ia._fromJSON(n,g),m!==u&&(h=k),u=m,o.abrupt("break",29);case 22:o.next=26;break;case 24:o.prev=24,o.t0=o.catch(13);case 26:f=!0,o.next=11;break;case 29:o.next=35;break;case 31:o.prev=31,o.t1=o.catch(9),d=!0,v=o.t1;case 35:o.prev=35,o.prev=36,f||null==p.return||p.return();case 38:if(o.prev=38,!d){o.next=41;break}throw v;case 41:return o.finish(38);case 42:return o.finish(35);case 43:if(w=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&w.length){o.next=46;break}return o.abrupt("return",new t(u,n,i));case 46:if(u=w[0],!h){o.next=50;break}return o.next=50,u._set(l,h.toJSON());case 50:return o.next=52,Promise.all(r.map(function(){var t=e(a)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===u){e.next=8;break}return e.prev=1,e.next=4,n._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return o.abrupt("return",new t(u,n,i));case 53:case"end":return o.stop()}}),o,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
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
 */function ca(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(da(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(la(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pa(t))return"Blackberry";if(ya(t))return"Webos";if(ha(t))return"Safari";if((t.includes("chrome/")||fa(t))&&!t.includes("edge/"))return"Chrome";if(va(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function la(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K();return/firefox\//i.test(e)}function ha(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K();return/crios\//i.test(e)}function da(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K();return/iemobile/i.test(e)}function va(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K();return/android/i.test(e)}function pa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K();return/blackberry/i.test(e)}function ya(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K();return/webos/i.test(e)}function ma(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ga(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K();return ma(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function ka(){return((e=K()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function wa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K();return ma(e)||va(e)||ya(e)||pa(e)||/windows phone/i.test(e)||da(e)}
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
function ba(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=ca(K());break;case"Worker":t="".concat(ca(K()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(ut,"/").concat(r)}
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
 */var Ta=function(){"use strict";function t(n){e(o)(this,t),this.auth=n,this.queue=[]}return e(s)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(a)(e(c).mark((function r(){var i,a,o,s,u,l,h,f,d,v,p,y,m;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:i=[],e.prev=3,a=!0,o=!1,s=void 0,e.prev=5,u=n.queue[Symbol.iterator]();case 7:if(a=(l=u.next()).done){e.next=15;break}return h=l.value,e.next=11,h(t);case 11:h.onAbort&&i.push(h.onAbort);case 12:a=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),o=!0,s=e.t0;case 21:e.prev=21,e.prev=22,a||null==u.return||u.return();case 24:if(e.prev=24,!o){e.next=27;break}throw s;case 27:return e.finish(24);case 28:return e.finish(21);case 29:e.next=52;break;case 31:for(e.prev=31,e.t1=e.catch(3),i.reverse(),f=!0,d=!1,v=void 0,e.prev=35,p=i[Symbol.iterator]();!(f=(y=p.next()).done);f=!0){m=y.value;try{m()}catch(e){}}e.next=43;break;case 39:e.prev=39,e.t2=e.catch(35),d=!0,v=e.t2;case 43:e.prev=43,e.prev=44,f||null==p.return||p.return();case 46:if(e.prev=46,!d){e.next=49;break}throw v;case 49:return e.finish(46);case 50:return e.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===e.t1||void 0===e.t1?void 0:e.t1.message});case 52:case"end":return e.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),t}(),Ia=function(){"use strict";function t(n,r,i){e(o)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ea(this),this.idTokenSubscription=new Ea(this),this.beforeStateQueue=new Ta(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ni,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return e(s)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=vi(n));var r=this;return this._initializationPromise=this.queue(e(a)(e(c).mark((function i(){var a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,ua.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(a)(e(c).mark((function n(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(a)(e(c).mark((function r(){var i,a,o,s,u,l,h;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,o=a,s=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==o?void 0:o._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:h=e.sent,u&&u!==l||!(null==h?void 0:h.user)||(o=h.user,s=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return li(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(o));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(a)(e(c).mark((function r(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(a)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Yi(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)){e.next=9;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 9:return e.abrupt("return",n.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(a)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(a)(e(c).mark((function r(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?fe(t):null)&&li(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(c).mark((function i(){return e(c).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&li(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(a)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(a)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(a)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(vi(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new te("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(a)(e(c).mark((function i(){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(a)(e(c).mark((function r(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return li(i=t&&vi(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,ua.create(n,[vi(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(a)(e(c).mark((function r(){var i,o;return e(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(a)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(o=n.redirectUser)||void 0===o?void 0:o._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(a)(e(c).mark((function r(){return e(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(a)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return li(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(a)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return li(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ba(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(a)(e(c).mark((function n(){var r,i,a;return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(u)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),t}();
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
 */function _a(e){return fe(e)}var Ea=function(){"use strict";function t(n){var r,i,a=this;e(o)(this,t),this.auth=n,this.observer=null,this.addObserver=(i=new le((function(e){return a.observer=e}),r)).subscribe.bind(i)}return e(s)(t,[{key:"next",get:function(){return li(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();function xa(t,n,r){var i=_a(t);li(i._canInitEmulator,i,"emulator-config-failed"),li(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=Sa(n),s=function(t){var n=Sa(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:Aa(i.substr(o.length+1))}}var s=e(p)(i.split(":"),2);return{host:s[0],port:Aa(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Sa(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Aa(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Ca=function(){"use strict";function t(n,r){e(o)(this,t),this.providerId=n,this.signInMethod=r}return e(s)(t,[{key:"toJSON",value:function(){return hi("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return hi("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return hi("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return hi("not implemented")}}]),t}();function Na(e,t){return Da.apply(this,arguments)}function Da(){return(Da=e(a)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Si(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ra(e,t){return Oa.apply(this,arguments)}function Oa(){return(Oa=
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
e(a)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Di(n,"POST","/v1/accounts:signInWithPassword",xi(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function La(e,t){return Ma.apply(this,arguments)}function Ma(){return(Ma=
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
e(a)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Di(n,"POST","/v1/accounts:signInWithEmailLink",xi(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Pa(e,t){return Ua.apply(this,arguments)}function Ua(){return(Ua=e(a)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Di(n,"POST","/v1/accounts:signInWithEmailLink",xi(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Fa=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i,a){var s,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(o)(this,r),(s=n.call(this,"password",a))._email=t,s._password=i,s._tenantId=u,s}return e(s)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(a)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Ra(t,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",La(t,{email:n._email,oobCode:n._password}));case 5:ai(t,"internal-error");case 6:case"end":return e.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(a)(e(c).mark((function i(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Na(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",Pa(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:ai(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Ca);function Va(e,t){return ja.apply(this,arguments)}function ja(){return(ja=
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
e(a)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Di(n,"POST","/v1/accounts:signInWithIdp",xi(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Ba=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(){var t;return e(o)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(s)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Va(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,Va(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Va(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=se(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ai("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=Zr(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(Ca);function qa(e,t){return Ka.apply(this,arguments)}function Ka(){return(Ka=
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
e(a)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Si(n,"POST","/v1/accounts:sendVerificationCode",xi(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function za(){return(za=e(a)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Di(n,"POST","/v1/accounts:signInWithPhoneNumber",xi(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ha(){return(Ha=e(a)(e(c).mark((function t(n,r){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Di(n,"POST","/v1/accounts:signInWithPhoneNumber",xi(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Mi(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Ga=e(u)({},"USER_NOT_FOUND","user-not-found");function Wa(){return(Wa=e(a)(e(c).mark((function t(n,r){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",Di(n,"POST","/v1/accounts:signInWithPhoneNumber",xi(n,i),Ga));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Qa=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(s)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return za.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Ha.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Wa.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(Ca);
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
 */var Ya=function(){"use strict";function t(n){var r,i,a,s,u,c;e(o)(this,t);var l=ue(ce(n)),h=null!==(r=l.apiKey)&&void 0!==r?r:null,f=null!==(i=l.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);li(h&&f&&d,"argument-error"),this.apiKey=h,this.operation=d,this.code=f,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return e(s)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=ue(ce(e)).link,n=t?ue(ce(t)).deep_link_id:null,r=ue(ce(e)).deep_link_id;return(r?ue(ce(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
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
var Ja=function(){"use strict";function t(){e(o)(this,t),this.providerId=t.PROVIDER_ID}return e(s)(t,null,[{key:"credential",value:function(e,t){return Fa._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Ya.parseLink(t);return li(n,"argument-error"),Fa._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();Ja.PROVIDER_ID="password",Ja.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ja.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var Xa=function(){"use strict";function t(n){e(o)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(s)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),$a=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(){var t;return e(o)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(s)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(f)(this.scopes)}}]),r}(Xa),Za=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(){return e(o)(this,r),n.call(this,"facebook.com")}return e(s)(r,null,[{key:"credential",value:function(e){return Ba._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}($a);
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
 */Za.FACEBOOK_SIGN_IN_METHOD="facebook.com",Za.PROVIDER_ID="facebook.com";
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
var eo=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(){var t;return e(o)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(s)(r,null,[{key:"credential",value:function(e,t){return Ba._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}($a);eo.GOOGLE_SIGN_IN_METHOD="google.com",eo.PROVIDER_ID="google.com";
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
var to=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(){return e(o)(this,r),n.call(this,"github.com")}return e(s)(r,null,[{key:"credential",value:function(e){return Ba._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}($a);to.GITHUB_SIGN_IN_METHOD="github.com",to.PROVIDER_ID="github.com";
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
var no=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(){return e(o)(this,r),n.call(this,"twitter.com")}return e(s)(r,null,[{key:"credential",value:function(e,t){return Ba._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}($a);no.TWITTER_SIGN_IN_METHOD="twitter.com",no.PROVIDER_ID="twitter.com";
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
var ro=function(){"use strict";function t(n){e(o)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(s)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(a)(e(c).mark((function a(){var s,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ia._fromIdTokenResponse(n,i,o);case 2:return s=e.sent,u=io(i),l=new t({user:s,providerId:u,_tokenResponse:i,operationType:r}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),a)})))()}},{key:"_forOperation",value:function(n,r,i){return e(a)(e(c).mark((function a(){var o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=io(i),e.abrupt("return",new t({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function io(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var ao=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i,a,s){var u,c;return e(o)(this,r),(u=n.call(this,i.code,i.message)).operationType=a,u.user=s,Object.setPrototypeOf(e(d)(u),r.prototype),u.customData={appName:t.name,tenantId:null!==(c=t.tenantId)&&void 0!==c?c:void 0,_serverResponse:i.customData._serverResponse,operationType:a},u}return e(s)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(ee);function oo(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw ao._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */function so(e,t){return uo.apply(this,arguments)}function uo(){return uo=e(a)(e(c).mark((function t(n,r){var i,a,o=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=zi,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",ro._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),t)}))),uo.apply(this,arguments)}function co(e,t){return lo.apply(this,arguments)}function lo(){return lo=
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
e(a)(e(c).mark((function t(n,r){var i,a,o,s,u,l,h=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=h.length>2&&void 0!==h[2]&&h[2],a=n.auth,o="reauthenticate",e.prev=3,e.next=6,zi(n,oo(a,o,r,n),i);case 6:return li((s=e.sent).idToken,a,"internal-error"),li(u=Ki(s.idToken),a,"internal-error"),l=u.sub,li(n.uid===l,a,"user-mismatch"),e.abrupt("return",ro._forOperation(n,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&ai(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),lo.apply(this,arguments)}function ho(e,t){return fo.apply(this,arguments)}function fo(){return fo=
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
e(a)(e(c).mark((function t(n,r){var i,a,o,s,u=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,oo(n,a,r);case 4:return o=e.sent,e.next=7,ro._fromIdTokenResponse(n,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),fo.apply(this,arguments)}function vo(e,t,n,r){return fe(e).onIdTokenChanged(t,n,r)}function po(e,t,n){return fe(e).beforeAuthStateChanged(t,n)}
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
function yo(e,t){return Si(e,"POST","/v2/accounts/mfaEnrollment:start",xi(e,t))}new WeakMap;var mo="__sak",go=function(){"use strict";function t(n,r){e(o)(this,t),this.storageRetriever=n,this.type=r}return e(s)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(mo,"1"),this.storage.removeItem(mo),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
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
 */var ko=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(){var t,i;return e(o)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(ha(i=K())||ma(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=wa(),t._shouldAllowMigration=!0,t}return e(s)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);ka()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,o=this;return e(a)(e(c).mark((function a(){return e(c).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Yr)(e($r)(r.prototype),"_set",i).call(o,t,n);case 2:o.localCache[t]=JSON.stringify(n);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(a)(e(c).mark((function a(){var o;return e(c).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Yr)(e($r)(r.prototype),"_get",n).call(i,t);case 2:return o=a.sent,i.localCache[t]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(a)(e(c).mark((function a(){return e(c).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Yr)(e($r)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(go);ko.type="LOCAL";var wo=ko,bo=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(){return e(o)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(s)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(go);
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
 */bo.type="SESSION";var To=bo;
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
 */function Io(t){return Promise.all(t.map((n=e(a)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
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
 */var _o=function(){"use strict";function t(n){e(o)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(s)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(a)(e(c).mark((function r(){var i,o,s,u,l,h,f,d;return e(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=(i=t).data,s=o.eventId,u=o.eventType,l=o.data,null==(h=n.handlersMap[u])?void 0:h.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),f=Array.from(h).map(function(){var t=e(a)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,Io(f);case 9:d=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:d});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
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
function Eo(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */_o.receivers=[];var xo=function(){"use strict";function t(n){e(o)(this,t),this.target=n,this.handlers=new Set}return e(s)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(a)(e(c).mark((function a(){var o,s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var c=Eo("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(t){var n=t;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(n.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:t,eventId:c,data:n},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
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
 */function So(){return window}
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
function Ao(){return void 0!==So().WorkerGlobalScope&&"function"==typeof So().importScripts}function Co(){return No.apply(this,arguments)}function No(){return(No=e(a)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
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
var Do="firebaseLocalStorageDb",Ro="firebaseLocalStorage",Oo="fbase_key",Lo=function(){"use strict";function t(n){e(o)(this,t),this.request=n}return e(s)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function Mo(e,t){return e.transaction([Ro],t?"readwrite":"readonly").objectStore(Ro)}function Po(){var e=indexedDB.deleteDatabase(Do);return new Lo(e).toPromise()}function Uo(){var t=indexedDB.open(Do,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Ro,{keyPath:Oo})}catch(e){r(e)}})),t.addEventListener("success",e(a)(e(c).mark((function r(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(Ro)){e.next=12;break}return i.close(),e.next=5,Po();case 5:return e.t0=n,e.next=8,Uo();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function Fo(e,t,n){return Vo.apply(this,arguments)}function Vo(){return(Vo=e(a)(e(c).mark((function t(n,r,i){var a,o;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Mo(n,!0).put((a={},e(u)(a,Oo,r),e(u)(a,"value",i),a)),t.abrupt("return",new Lo(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function jo(e,t){return Bo.apply(this,arguments)}function Bo(){return(Bo=e(a)(e(c).mark((function t(n,r){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Mo(n,!1).get(r),e.next=3,new Lo(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function qo(e,t){var n=Mo(e,!0).delete(t);return new Lo(n).toPromise()}var Ko=function(){"use strict";function t(){e(o)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(s)(t,[{key:"_openDb",value:function(){var t=this;return e(a)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Uo();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(a)(e(c).mark((function r(){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(a)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ao()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(a)(e(c).mark((function n(){return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=_o._getInstance(Ao()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(a)(e(c).mark((function n(r,i){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(a)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(a)(e(c).mark((function n(){var r,i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Co();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new xo(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(a)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(a)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Uo();case 5:return n=e.sent,e.next=8,Fo(n,mo,"1");case 8:return e.next=10,qo(n,mo);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(a)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(c).mark((function i(){return e(c).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(a)(e(c).mark((function i(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Fo(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(c).mark((function r(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return jo(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(c).mark((function r(){return e(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(a)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return qo(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(a)(e(c).mark((function n(){var r,i,a,o,s,u,l,h,f,d,v,p,y,m,g,k,w;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=Mo(e,!1).getAll();return new Lo(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,e.prev=10,l=r[Symbol.iterator]();!(o=(h=l.next()).done);o=!0)f=h.value,d=f.fbase_key,v=f.value,a.add(d),JSON.stringify(t.localCache[d])!==JSON.stringify(v)&&(t.notifyListeners(d,v),i.push(d));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,u=e.t0;case 18:e.prev=18,e.prev=19,o||null==l.return||l.return();case 21:if(e.prev=21,!s){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(p=!0,y=!1,m=void 0,e.prev=27,g=Object.keys(t.localCache)[Symbol.iterator]();!(p=(k=g.next()).done);p=!0)w=k.value,t.localCache[w]&&!a.has(w)&&(t.notifyListeners(w,null),i.push(w));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),y=!0,m=e.t1;case 35:e.prev=35,e.prev=36,p||null==g.return||g.return();case 38:if(e.prev=38,!y){e.next=41;break}throw m;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(a)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();Ko.type="LOCAL";var zo=Ko;
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
 */function Ho(e,t){return Si(e,"POST","/v2/accounts/mfaSignIn:start",xi(e,t))}function Go(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=oi("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function Wo(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
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
Wo("rcb"),new wi(3e4,6e4);var Qo="recaptcha";
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
 */function Yo(e,t,n){return Jo.apply(this,arguments)}function Jo(){return(Jo=e(a)(e(c).mark((function t(n,r,i){var a,o,s,u,l,h,f,d;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,li("string"==typeof o,n,"argument-error"),li(i.type===Qo,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return li("enroll"===u.type,n,"internal-error"),e.next=15,yo(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return li("signin"===u.type,n,"internal-error"),li(h=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Ho(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:h,phoneSignInInfo:{recaptchaToken:o}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,qa(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
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
var Xo=function(){"use strict";function t(n){e(o)(this,t),this.providerId=t.PROVIDER_ID,this.auth=_a(n)}return e(s)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Yo(this.auth,e,fe(t))}}],[{key:"credential",value:function(e,t){return Qa._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?Qa._fromTokenResponse(n,r):null}}]),t}();
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
function $o(e,t){return t?vi(t):(li(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Xo.PROVIDER_ID="phone",Xo.PHONE_SIGN_IN_METHOD="phone";var Zo=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(s)(r,[{key:"_getIdTokenResponse",value:function(e){return Va(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Va(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Va(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Ca);function es(e){return ho(e.auth,new Zo(e),e.bypassAuthState)}function ts(e){var t=e.auth,n=e.user;return li(n,t,"internal-error"),co(n,new Zo(e),e.bypassAuthState)}function ns(e){return rs.apply(this,arguments)}function rs(){return(rs=e(a)(e(c).mark((function t(n){var r,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,li(i=n.user,r,"internal-error"),e.abrupt("return",so(i,new Zo(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var is=function(){"use strict";function t(n,r,i,a){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(o)(this,t),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(s)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(a)(e(c).mark((function t(r,i){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(a)(e(c).mark((function r(){var i,a,o,s,u,l,h;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,o=t.postBody,s=t.tenantId,u=t.error,l=t.type,!u){e.next=4;break}return n.reject(u),e.abrupt("return");case 4:return h={auth:n.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(l)(h);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return es;case"linkViaPopup":case"linkViaRedirect":return ns;case"reauthViaPopup":case"reauthViaRedirect":return ts;default:ai(this.auth,"internal-error")}}},{key:"resolve",value:function(e){fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),as=new wi(2e3,1e4);
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
 */function os(e,t,n){return ss.apply(this,arguments)}function ss(){return(ss=e(a)(e(c).mark((function t(n,r,i){var a,o,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=_a(n),ui(n,r,Xa),o=$o(a,i),s=new us(a,"signInViaPopup",r,o),e.abrupt("return",s.executeNotNull());case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var us=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i,a,s,u){var c;return e(o)(this,r),(c=n.call(this,t,i,s,u)).provider=a,c.authWindow=null,c.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(d)(c),c}return e(s)(r,[{key:"executeNotNull",value:function(){var t=this;return e(a)(e(c).mark((function n(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return li(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(a)(e(c).mark((function n(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return fi(1===t.filter.length,"Popup operations only handle one event"),r=Eo(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(oi(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(oi(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(oi(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,as.get())};t()}}]),r}(is);us.currentPopupAction=null;
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
var cs=new Map,ls=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i){var a,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(o)(this,r),(a=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,s)).eventId=null,a}return e(s)(r,[{key:"execute",value:function(){var t=this,n=this;return e(a)(e(c).mark((function i(){var a,o;return e(c).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=cs.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,hs(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(Yr)(e($r)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:cs.set(n.auth._key(),a);case 21:return n.bypassAuthState||cs.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,o=function(){return e(Yr)(e($r)(r.prototype),"onAuthEvent",n)};return e(a)(e(c).mark((function n(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",o().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",o().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(a)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(is);function hs(e,t){return fs.apply(this,arguments)}function fs(){return(fs=e(a)(e(c).mark((function t(n,r){var i,a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ps(r),a=vs(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ds(e,t){cs.set(e._key(),t)}function vs(e){return vi(e._redirectPersistence)}function ps(e){return sa("pendingRedirect",e.config.apiKey,e.name)}
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
 */function ys(e,t){return ms.apply(this,arguments)}function ms(){return ms=e(a)(e(c).mark((function t(n,r){var i,a,o,s,u,l=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=_a(n),o=$o(a,r),s=new ls(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),t)}))),ms.apply(this,arguments)}
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
var gs=function(){"use strict";function t(n){e(o)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(s)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ws(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!ws(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(oi(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ks(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(ks(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function ks(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function ws(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function bs(e){return Ts.apply(this,arguments)}function Ts(){return Ts=
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
e(a)(e(c).mark((function t(n){var r,i=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",Si(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),Ts.apply(this,arguments)}
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
 */var Is=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_s=/^https?/;function Es(){return(Es=e(a)(e(c).mark((function t(n){var r,i,a,o,s,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,bs(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(l=u.value,e.prev=10,!xs(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:ai(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function xs(e){var t=yi(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!_s.test(r))return!1;if(Is.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
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
 */var Ss=new wi(3e4,6e4);function As(){var t=So().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(f)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var Cs=null;function Ns(e){return Cs=Cs||function(e){return new Promise((function(t,n){var r,i,a;function o(){As(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){As(),n(oi(e,"network-request-failed"))},timeout:Ss.get()})}if(null===(i=null===(r=So().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=So().gapi)||void 0===a?void 0:a.load)){var s=Wo("iframefcb");return So()[s]=function(){gapi.load?o():n(oi(e,"network-request-failed"))},Go("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw Cs=null,e}))}(e),Cs}
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
 */var Ds=new wi(5e3,15e3),Rs={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Os=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ls(e){var t=e.config;li(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?bi(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:ut},i=Os.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(se(r).slice(1))}function Ms(e){return Ps.apply(this,arguments)}function Ps(){return Ps=e(a)(e(c).mark((function t(n){var r,i;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ns(n);case 2:return r=t.sent,li(i=So().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:Ls(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rs,dontclear:!0},(function(t){return new Promise((r=e(a)(e(c).mark((function r(i,a){var o,s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){So().clearTimeout(s),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=oi(n,"network-request-failed"),s=So().setTimeout((function(){a(o)}),Ds.get()),t.ping(u).then(u,(function(){a(o)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),Ps.apply(this,arguments)}
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
 */var Us={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fs="_blank",Vs="http://localhost",js=function(){"use strict";function t(n){e(o)(this,t),this.window=n,this.associatedEvent=null}return e(s)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function Bs(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Us),{width:i.toString(),height:a.toString(),top:o,left:s}),l=K().toLowerCase();r&&(u=fa(l)?Fs:r),la(l)&&(n=n||Vs,c.scrollbars="yes");var h=Object.entries(c).reduce((function(t,n){var r=e(p)(n,2),i=r[0],a=r[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(ga(l)&&"_self"!==u)return qs(n||"",u),new js(null);var f=window.open(n||"",u,h);li(f,t,"popup-blocked");try{f.focus()}catch(e){}return new js(f)}function qs(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */var Ks="__/auth/handler",zs="emulator/auth/handler";function Hs(t,n,r,i,a,o){li(t.config.authDomain,t,"auth-domain-config-required"),li(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:i,v:ut,eventId:a};if(n instanceof Xa){n.setDefaultLanguage(t.languageCode),s.providerId=n.providerId||"",ie(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var h,f=Object.entries(o||{})[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=e(p)(h.value,2),v=d[0],y=d[1];s[v]=y}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}}if(n instanceof $a){var m=n.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}t.tenantId&&(s.tid=t.tenantId);var g,k,w=s,b=!0,T=!1,I=void 0;try{for(var _,E=Object.keys(w)[Symbol.iterator]();!(b=(_=E.next()).done);b=!0){var x=_.value;void 0===w[x]&&delete w[x]}}catch(e){T=!0,I=e}finally{try{b||null==E.return||E.return()}finally{if(T)throw I}}return"".concat((g=t,k=g.config,k.emulator?bi(k,zs):"https://".concat(k.authDomain,"/").concat(Ks)),"?").concat(se(w).slice(1))}
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
var Gs="webStorageSupport",Ws=function(){"use strict";function t(){e(o)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=To,this._completeRedirectFn=ys,this._overrideRedirectResult=ds}return e(s)(t,[{key:"_openPopup",value:function(t,n,r,i){var o=this;return e(a)(e(c).mark((function a(){var s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return fi(null===(s=o.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=Hs(t,n,r,yi(),i),e.abrupt("return",Bs(t,u,Eo()));case 4:case"end":return e.stop()}}),a)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var o=this;return e(a)(e(c).mark((function a(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o._originValidation(t);case 2:return a=Hs(t,n,r,yi(),i),So().location.href=a,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var a}),a)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(fi(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(t){var n=this;return e(a)(e(c).mark((function r(){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ms(t);case 2:return i=e.sent,a=new gs(t),i.register("authEvent",(function(e){return li(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:a},n.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Gs,{type:Gs},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),ai(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Es.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return wa()||ha()||ma()}}]),t}(),Qs=Ws,Ys=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(s)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return Si(e,"POST","/v2/accounts/mfaEnrollment:finalize",xi(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Si(e,"POST","/v2/accounts/mfaSignIn:finalize",xi(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function t(n){e(o)(this,t),this.factorId=n}return e(s)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return hi("unexpected MultiFactorSessionType")}}}]),t}());(function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,null,[{key:"assertion",value:function(e){return Ys._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var Js="@firebase/auth",Xs="0.21.0",$s=function(){"use strict";function t(n){e(o)(this,t),this.auth=n,this.internalListeners=new Map}return e(s)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(a)(e(c).mark((function r(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){li(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
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
var Zs,eu=X("authIdTokenMaxAge")||300,tu=null,nu=function(t){return n=e(a)(e(c).mark((function n(r){var i,a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=5;break}return e.next=4,r.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>eu)){e.next=9;break}return e.abrupt("return");case 9:if(o=null==i?void 0:i.token,tu!==o){e.next=12;break}return e.abrupt("return");case 12:return tu=o,e.next=15,fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};function ru(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt(),t=it(e,"auth");if(t.isInitialized())return t.getImmediate();var n=pi(e,{popupRedirectResolver:Qs,persistence:[zo,wo,To]}),r=X("authTokenSyncURL");if(r){var i=nu(r);po(n,i,(function(){return i(n.currentUser)})),vo(n,(function(e){return i(e)}))}var a=Q("auth");return a&&xa(n,"http://".concat(a)),n}Zs="Browser",rt(new Te("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){li(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),li(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:Zs,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ba(Zs)},i=new Ia(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vi);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),rt(new Te("auth-internal",(function(e){var t=_a(e.getProvider("auth").getImmediate());return new $s(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ht(Js,Xs,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Zs)),ht(Js,Xs,"esm2017");a=i("bpxeT"),o=i("8MBJY");var iu,au=i("ge8co"),ou=(s=i("a2hTj"),$r=i("fVNic"),v=i("eYQtU"),i("jmhxu")),su=(p=i("1t1Wn"),f=i("8nrFW"),i("l5bVx")),uu=(x=i("2MbLg"),c=i("2TvXO"),o=i("8MBJY"),s=i("a2hTj"),$r=i("fVNic"),v=i("eYQtU"),p=i("1t1Wn"),su=i("l5bVx"),x=i("2MbLg"),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}),cu={},lu=lu||{},hu=uu||self;function fu(){}function du(t){var n=void 0===t?"undefined":e(su)(t);return"array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length}function vu(t){var n=void 0===t?"undefined":e(su)(t);return"object"==n&&null!=t||"function"==n}var pu="closure_uid_"+(1e9*Math.random()>>>0),yu=0;function mu(e,t,n){return e.call.apply(e.bind,arguments)}function gu(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function ku(e,t,n){return(ku=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?mu:gu).apply(null,arguments)}function wu(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function bu(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}function Tu(){this.s=this.s,this.o=this.o}Tu.prototype.s=!1,Tu.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,pu)&&e[pu]||(e[pu]=++yu))},Tu.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var Iu=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function _u(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function Eu(e,t){for(var n=1;n<arguments.length;n++){var r=arguments[n];if(du(r)){var i=e.length||0,a=r.length||0;e.length=i+a;for(var o=0;o<a;o++)e[i+o]=r[o]}else e.push(r)}}function xu(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}xu.prototype.h=function(){this.defaultPrevented=!0};var Su=function(){if(!hu.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{hu.addEventListener("test",fu,t),hu.removeEventListener("test",fu,t)}catch(e){}return e}();function Au(e){return/^[\s\xa0]*$/.test(e)}var Cu=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Nu(e,t){return e<t?-1:e>t?1:0}function Du(){var e=hu.navigator;return e&&(e=e.userAgent)?e:""}function Ru(e){return-1!=Du().indexOf(e)}function Ou(e){return Ou[" "](e),e}Ou[" "]=fu;var Lu,Mu,Pu=Ru("Opera"),Uu=Ru("Trident")||Ru("MSIE"),Fu=Ru("Edge"),Vu=Fu||Uu,ju=Ru("Gecko")&&!(-1!=Du().toLowerCase().indexOf("webkit")&&!Ru("Edge"))&&!(Ru("Trident")||Ru("MSIE"))&&!Ru("Edge"),Bu=-1!=Du().toLowerCase().indexOf("webkit")&&!Ru("Edge");function qu(){var e=hu.document;return e?e.documentMode:void 0}e:{var Ku="",zu=(Mu=Du(),ju?/rv:([^\);]+)(\)|;)/.exec(Mu):Fu?/Edge\/([\d\.]+)/.exec(Mu):Uu?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Mu):Bu?/WebKit\/(\S+)/.exec(Mu):Pu?/(?:Version)[ \/]?(\S+)/.exec(Mu):void 0);if(zu&&(Ku=zu?zu[1]:""),Uu){var Hu=qu();if(null!=Hu&&Hu>parseFloat(Ku)){Lu=String(Hu);break e}}Lu=Ku}var Gu,Wu={};function Qu(){return function(e){var t=Wu;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){for(var e=0,t=Cu(String(Lu)).split("."),n=Cu("9").split("."),r=Math.max(t.length,n.length),i=0;0==e&&i<r;i++){var a=t[i]||"",o=n[i]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==a[0].length&&0==o[0].length)break;e=Nu(0==a[1].length?0:parseInt(a[1],10),0==o[1].length?0:parseInt(o[1],10))||Nu(0==a[2].length,0==o[2].length)||Nu(a[2],o[2]),a=a[3],o=o[3]}while(0==e)}return 0<=e}))}if(hu.document&&Uu){var Yu=qu();Gu=Yu||(parseInt(Lu,10)||void 0)}else Gu=void 0;var Ju=Gu;function Xu(e,t){if(xu.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ju){e:{try{Ou(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:$u[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Xu.X.h.call(this)}}bu(Xu,xu);var $u={2:"touch",3:"pen",4:"mouse"};Xu.prototype.h=function(){Xu.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Zu="closure_listenable_"+(1e6*Math.random()|0),ec=0;function tc(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++ec,this.ba=this.ea=!1}function nc(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function rc(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function ic(e){var t={};for(var n in e)t[n]=e[n];return t}var ac="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oc(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(var a=0;a<ac.length;a++)n=ac[a],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function sc(e){this.src=e,this.g={},this.h=0}function uc(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],a=Iu(i,t);(r=0<=a)&&Array.prototype.splice.call(i,a,1),r&&(nc(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function cc(e,t,n,r){for(var i=0;i<e.length;++i){var a=e[i];if(!a.ba&&a.listener==t&&a.capture==!!n&&a.ha==r)return i}return-1}sc.prototype.add=function(e,t,n,r,i){var a=e.toString();(e=this.g[a])||(e=this.g[a]=[],this.h++);var o=cc(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new tc(t,this.src,a,!!r,i)).ea=n,e.push(t)),t};var lc="closure_lm_"+(1e6*Math.random()|0),hc={};function fc(e,t,n,r,i){if(r&&r.once)return vc(e,t,n,r,i);if(Array.isArray(t)){for(var a=0;a<t.length;a++)fc(e,t[a],n,r,i);return null}return n=bc(n),e&&e[Zu]?e.N(t,n,vu(r)?!!r.capture:!!r,i):dc(e,t,n,!1,r,i)}function dc(e,t,n,r,i,a){if(!t)throw Error("Invalid event type");var o=vu(i)?!!i.capture:!!i,s=kc(e);if(s||(e[lc]=s=new sc(e)),(n=s.add(t,n,r,o,a)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=gc;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Su||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(mc(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function vc(e,t,n,r,i){if(Array.isArray(t)){for(var a=0;a<t.length;a++)vc(e,t[a],n,r,i);return null}return n=bc(n),e&&e[Zu]?e.O(t,n,vu(r)?!!r.capture:!!r,i):dc(e,t,n,!0,r,i)}function pc(e,t,n,r,i){if(Array.isArray(t))for(var a=0;a<t.length;a++)pc(e,t[a],n,r,i);else r=vu(r)?!!r.capture:!!r,n=bc(n),e&&e[Zu]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=cc(a=e.g[t],n,r,i))&&(nc(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete e.g[t],e.h--)))):e&&(e=kc(e))&&(t=e.g[t.toString()],e=-1,t&&(e=cc(t,n,r,i)),(n=-1<e?t[e]:null)&&yc(n))}function yc(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[Zu])uc(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(mc(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=kc(t))?(uc(n,e),0==n.h&&(n.src=null,t[lc]=null)):nc(e)}}}function mc(e){return e in hc?hc[e]:hc[e]="on"+e}function gc(e,t){if(e.ba)e=!0;else{t=new Xu(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&yc(e),e=n.call(r,t)}return e}function kc(e){return(e=e[lc])instanceof sc?e:null}var wc="__closure_events_fn_"+(1e9*Math.random()>>>0);function bc(e){return"function"==typeof e?e:(e[wc]||(e[wc]=function(t){return e.handleEvent(t)}),e[wc])}function Tc(){Tu.call(this),this.i=new sc(this),this.P=this,this.I=null}function Ic(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new xu(t,e);else if(t instanceof xu)t.target=t.target||e;else{var i=t;oc(t=new xu(r,e),i)}if(i=!0,n)for(var a=n.length-1;0<=a;a--){var o=t.g=n[a];i=_c(o,r,!0,t)&&i}if(i=_c(o=t.g=e,r,!0,t)&&i,i=_c(o,r,!1,t)&&i,n)for(a=0;a<n.length;a++)i=_c(o=t.g=n[a],r,!1,t)&&i}function _c(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,a=0;a<t.length;++a){var o=t[a];if(o&&!o.ba&&o.capture==n){var s=o.listener,u=o.ha||o.src;o.ea&&uc(e.i,o),i=!1!==s.call(u,r)&&i}}return i&&!r.defaultPrevented}bu(Tc,Tu),Tc.prototype[Zu]=!0,Tc.prototype.removeEventListener=function(e,t,n,r){pc(this,e,t,n,r)},Tc.prototype.M=function(){if(Tc.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)nc(n[r]);delete t.g[e],t.h--}}this.I=null},Tc.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Tc.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ec=hu.JSON.stringify;function xc(){var e=Lc,t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Sc,Ac=function(){"use strict";function t(){e(o)(this,t),this.h=this.g=null}return e(s)(t,[{key:"add",value:function(e,t){var n=Cc.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}]),t}(),Cc=new(function(){"use strict";function t(n,r){e(o)(this,t),this.i=n,this.j=r,this.h=0,this.g=null}return e(s)(t,[{key:"get",value:function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}]),t}())((function(){return new Nc}),(function(e){return e.reset()})),Nc=function(){"use strict";function t(){e(o)(this,t),this.next=this.g=this.h=null}return e(s)(t,[{key:"set",value:function(e,t){this.h=e,this.g=t,this.next=null}},{key:"reset",value:function(){this.next=this.g=this.h=null}}]),t}();function Dc(e){hu.setTimeout((function(){throw e}),0)}function Rc(e,t){Sc||function(){var e=hu.Promise.resolve(void 0);Sc=function(){e.then(Mc)}}(),Oc||(Sc(),Oc=!0),Lc.add(e,t)}var Oc=!1,Lc=new Ac;function Mc(){for(var e;e=xc();){try{e.h.call(e.g)}catch(e){Dc(e)}var t=Cc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Oc=!1}function Pc(e,t){Tc.call(this),this.h=e||1,this.g=t||hu,this.j=ku(this.lb,this),this.l=Date.now()}function Uc(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Fc(e,t,n){if("function"==typeof e)n&&(e=ku(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=ku(e.handleEvent,e)}return 2147483647<Number(t)?-1:hu.setTimeout(e,t||0)}function Vc(e){e.g=Fc((function(){e.g=null,e.i&&(e.i=!1,Vc(e))}),e.j);var t=e.h;e.h=null,e.m.apply(null,t)}bu(Pc,Tc),(iu=Pc.prototype).ca=!1,iu.R=null,iu.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ic(this,"tick"),this.ca&&(Uc(this),this.start()))}},iu.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},iu.M=function(){Pc.X.M.call(this),Uc(this),delete this.g};var jc=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this)).m=t,a.j=i,a.h=null,a.i=!1,a.g=null,a}return e(s)(r,[{key:"l",value:function(e){this.h=arguments,this.g?this.i=!0:Vc(this)}},{key:"M",value:function(){e(Yr)(e($r)(r.prototype),"M",this).call(this),this.g&&(hu.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}]),r}(Tu);function Bc(e){Tu.call(this),this.h=e,this.g={}}bu(Bc,Tu);var qc=[];function Kc(e,t,n,r){Array.isArray(n)||(n&&(qc[0]=n.toString()),n=qc);for(var i=0;i<n.length;i++){var a=fc(t,n[i],r||e.handleEvent,!1,e.h||e);if(!a)break;e.g[a.key]=a}}function zc(e){rc(e.g,(function(e,t){this.g.hasOwnProperty(t)&&yc(e)}),e),e.g={}}function Hc(){this.g=!0}function Gc(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var a=i[0];if("noop"!=a&&"stop"!=a&&"close"!=a)for(var o=1;o<i.length;o++)i[o]=""}}}return Ec(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Bc.prototype.M=function(){Bc.X.M.call(this),zc(this)},Bc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Hc.prototype.Aa=function(){this.g=!1},Hc.prototype.info=function(){};var Wc={},Qc=null;function Yc(){return Qc=Qc||new Tc}function Jc(e){xu.call(this,Wc.Pa,e)}function Xc(e){var t=Yc();Ic(t,new Jc(t))}function $c(e,t){xu.call(this,Wc.STAT_EVENT,e),this.stat=t}function Zc(e){var t=Yc();Ic(t,new $c(t,e))}function el(e,t){xu.call(this,Wc.Qa,e),this.size=t}function tl(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return hu.setTimeout((function(){e()}),t)}Wc.Pa="serverreachability",bu(Jc,xu),Wc.STAT_EVENT="statevent",bu($c,xu),Wc.Qa="timingevent",bu(el,xu);var nl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},rl={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function il(){}function al(e){return e.h||(e.h=e.i())}function ol(){}il.prototype.h=null;var sl,ul={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function cl(){xu.call(this,"d")}function ll(){xu.call(this,"c")}function hl(){}function fl(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Bc(this),this.O=vl,e=Vu?125:void 0,this.T=new Pc(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new dl}function dl(){this.i=null,this.g="",this.h=!1}bu(cl,xu),bu(ll,xu),bu(hl,il),hl.prototype.g=function(){return new XMLHttpRequest},hl.prototype.i=function(){return{}},sl=new hl;var vl=45e3,pl={},yl={};function ml(e,t,n){e.K=1,e.v=Pl(Dl(t)),e.s=n,e.P=!0,gl(e,null)}function gl(e,t){e.F=Date.now(),Tl(e),e.A=Dl(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),Yl(n.i,"t",r),e.C=0,n=e.l.H,e.h=new dl,e.g=Yh(e.l,n?t:null,!e.s),0<e.N&&(e.L=new jc(ku(e.La,e,e.g),e.N)),Kc(e.S,e.g,"readystatechange",e.ib),t=e.H?ic(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Xc(),function(e,t,n,r,i,a){e.info((function(){if(e.g)if(a)for(var o="",s=a.split("&"),u=0;u<s.length;u++){var c=s[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function kl(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function wl(e,t,n){for(var r,i=!0;!e.I&&e.C<n.length;){if((r=bl(e,n))==yl){4==t&&(e.o=4,Zc(14),i=!1),Gc(e.j,e.m,null,"[Incomplete Response]");break}if(r==pl){e.o=4,Zc(15),Gc(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Gc(e.j,e.m,r,null),Sl(e,r)}kl(e)&&r!=yl&&r!=pl&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Zc(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bh(t),t.K=!0,Zc(11))):(Gc(e.j,e.m,n,"[Invalid Chunked Response]"),xl(e),El(e))}function bl(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?yl:(n=Number(t.substring(n,r)),isNaN(n)?pl:(r+=1)+n>t.length?yl:(t=t.substr(r,n),e.C=r+n,t))}function Tl(e){e.V=Date.now()+e.O,Il(e,e.O)}function Il(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=tl(ku(e.gb,e),t)}function _l(e){e.B&&(hu.clearTimeout(e.B),e.B=null)}function El(e){0==e.l.G||e.I||zh(e.l,e)}function xl(e){_l(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Uc(e.T),zc(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Sl(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||nh(n.h,e)))if(!e.J&&nh(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(a){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Kh(n),Oh(n)}jh(n),Zc(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=tl(ku(n.cb,n),6e3));if(1>=th(n.h)&&n.ja){try{n.ja()}catch(a){}n.ja=void 0}}else Gh(n,11)}else if((e.J||n.g==e)&&Kh(n),!Au(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){var a=i[t];if(n.T=a[0],a=a[1],2==n.G)if("c"==a[0]){n.I=a[1],n.ka=a[2];var o=a[3];null!=o&&(n.ma=o,n.j.info("VER="+n.ma));var s=a[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));var u=a[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;var c=e.g;if(c){var l=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.h;h.g||-1==l.indexOf("spdy")&&-1==l.indexOf("quic")&&-1==l.indexOf("h2")||(h.j=h.l,h.g=new Set,h.h&&(rh(h,h.h),h.h=null))}if(r.D){var f=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.za=f,Ml(r.F,r.D,f))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var d=e;if((r=n).sa=Qh(r,r.H?r.ka:null,r.V),d.J){ih(r.h,d);var v=d,p=r.J;p&&v.setTimeout(p),v.B&&(_l(v),Tl(v)),r.g=d}else Vh(r);0<n.i.length&&Mh(n)}else"stop"!=a[0]&&"close"!=a[0]||Gh(n,7);else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?Gh(n,7):Rh(n):"noop"!=a[0]&&n.l&&n.l.wa(a),n.A=0)}Xc()}catch(a){}}function Al(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(du(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(du(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(var r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(du(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}(iu=fl.prototype).setTimeout=function(e){this.O=e},iu.ib=function(e){e=e.target;var t=this.L;t&&3==xh(e)?t.l():this.La(e)},iu.La=function(e){try{if(e==this.g)e:{var t=xh(this.g),n=this.g.Ea();this.g.aa();if(!(3>t)&&(3!=t||Vu||this.g&&(this.h.h||this.g.fa()||Sh(this.g)))){this.I||4!=t||7==n||Xc(),_l(this);var r=this.g.aa();this.Y=r;t:if(kl(this)){var i=Sh(this.g);e="";var a=i.length,o=4==xh(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){xl(this),El(this);var s="";break t}this.h.i=new hu.TextDecoder}for(n=0;n<a;n++)this.h.h=!0,e+=this.h.i.decode(i[n],{stream:o&&n==a-1});i.splice(0,a),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==r,function(e,t,n,r,i,a,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+a+" "+o}))}(this.j,this.u,this.A,this.m,this.U,t,r),this.i){if(this.Z&&!this.J){t:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Au(u)){var l=u;break t}}l=null}if(!(r=l)){this.i=!1,this.o=3,Zc(12),xl(this),El(this);break e}Gc(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Sl(this,r)}this.P?(wl(this,t,s),Vu&&this.i&&3==t&&(Kc(this.S,this.T,"tick",this.hb),this.T.start())):(Gc(this.j,this.m,s,null),Sl(this,s)),4==t&&xl(this),this.i&&!this.I&&(4==t?zh(this.l,this):(this.i=!1,Tl(this)))}else 400==r&&0<s.indexOf("Unknown SID")?(this.o=3,Zc(12)):(this.o=0,Zc(13)),xl(this),El(this)}}}catch(t){}},iu.hb=function(){if(this.g){var e=xh(this.g),t=this.g.fa();this.C<t.length&&(_l(this),wl(this,e,t),this.i&&4!=e&&Tl(this))}},iu.cancel=function(){this.I=!0,xl(this)},iu.gb=function(){this.B=null;var e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Xc(),Zc(17)),xl(this),this.o=2,El(this)):Il(this,this.V-e)};var Cl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nl(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Nl){this.h=void 0!==t?t:e.h,Rl(this,e.j),this.s=e.s,this.g=e.g,Ol(this,e.m),this.l=e.l,t=e.i;var n=new Hl;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ll(this,n),this.o=e.o}else e&&(n=String(e).match(Cl))?(this.h=!!t,Rl(this,n[1]||"",!0),this.s=Ul(n[2]||""),this.g=Ul(n[3]||"",!0),Ol(this,n[4]),this.l=Ul(n[5]||"",!0),Ll(this,n[6]||"",!0),this.o=Ul(n[7]||"")):(this.h=!!t,this.i=new Hl(null,this.h))}function Dl(e){return new Nl(e)}function Rl(e,t,n){e.j=n?Ul(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ol(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ll(e,t,n){t instanceof Hl?(e.i=t,function(e,t){t&&!e.j&&(Gl(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Wl(this,t),Yl(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Fl(t,Kl)),e.i=new Hl(t,e.h))}function Ml(e,t,n){e.i.set(t,n)}function Pl(e){return Ml(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ul(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Fl(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Vl),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Vl(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Nl.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Fl(t,jl,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Fl(t,jl,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Fl(n,"/"==n.charAt(0)?ql:Bl,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Fl(n,zl)),e.join("")};var jl=/[#\/\?@]/g,Bl=/[#\?:]/g,ql=/[#\?]/g,Kl=/[#\?@]/g,zl=/#/g;function Hl(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Gl(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var a=e[n].substring(0,r);i=e[n].substring(r+1)}else a=e[n];t(a,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Wl(e,t){Gl(e),t=Jl(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ql(e,t){return Gl(e),t=Jl(e,t),e.g.has(t)}function Yl(e,t,n){Wl(e,t),0<n.length&&(e.i=null,e.g.set(Jl(e,t),_u(n)),e.h+=n.length)}function Jl(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(iu=Hl.prototype).add=function(e,t){Gl(this),this.i=null,e=Jl(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},iu.forEach=function(e,t){Gl(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},iu.oa=function(){Gl(this);for(var e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[],r=0;r<t.length;r++)for(var i=e[r],a=0;a<i.length;a++)n.push(t[r]);return n},iu.W=function(e){Gl(this);var t=[];if("string"==typeof e)Ql(this,e)&&(t=t.concat(this.g.get(Jl(this,e))));else{e=Array.from(this.g.values());for(var n=0;n<e.length;n++)t=t.concat(e[n])}return t},iu.set=function(e,t){return Gl(this),this.i=null,Ql(this,e=Jl(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},iu.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},iu.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=Array.from(this.g.keys()),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r)),a=this.W(r);for(r=0;r<a.length;r++){var o=i;""!==a[r]&&(o+="="+encodeURIComponent(String(a[r]))),e.push(o)}}return this.i=e.join("&")};var Xl=function t(n,r){"use strict";e(o)(this,t),this.h=n,this.g=r};function $l(e){this.l=e||Zl,hu.PerformanceNavigationTiming?e=0<(e=hu.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(hu.g&&hu.g.Ga&&hu.g.Ga()&&hu.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Zl=10;function eh(e){return!!e.h||!!e.g&&e.g.size>=e.j}function th(e){return e.h?1:e.g?e.g.size:0}function nh(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function rh(e,t){e.g?e.g.add(t):e.h=t}function ih(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function ah(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){var t=e.i,n=!0,r=!1,i=void 0;try{for(var a,o=e.g.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;t=t.concat(s.D)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}return _u(e.i)}function oh(){}function sh(){this.g=new oh}function uh(e,t,n){var r=n||"";try{Al(e,(function(e,n){var i=e;vu(e)&&(i=Ec(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function ch(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function lh(e){this.l=e.ac||null,this.j=e.jb||!1}function hh(e,t){Tc.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=fh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$l.prototype.cancel=function(){if(this.i=ah(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){var e=!0,t=!1,n=void 0;try{for(var r,i=this.g.values()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){r.value.cancel()}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}this.g.clear()}},oh.prototype.stringify=function(e){return hu.JSON.stringify(e,void 0)},oh.prototype.parse=function(e){return hu.JSON.parse(e,void 0)},bu(lh,il),lh.prototype.g=function(){return new hh(this.l,this.j)},lh.prototype.i=function(e){return function(){return e}}({}),bu(hh,Tc);var fh=0;function dh(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function vh(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ph(e)}function ph(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(iu=hh.prototype).open=function(e,t){if(this.readyState!=fh)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ph(this)},iu.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||hu).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},iu.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((function(){})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,vh(this)),this.readyState=fh},iu.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ph(this)),this.g&&(this.readyState=3,ph(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==hu.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dh(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},iu.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?vh(this):ph(this),3==this.readyState&&dh(this)}},iu.Va=function(e){this.g&&(this.response=this.responseText=e,vh(this))},iu.Ua=function(e){this.g&&(this.response=e,vh(this))},iu.ga=function(){this.g&&vh(this)},iu.setRequestHeader=function(e,t){this.v.append(e,t)},iu.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},iu.getAllResponseHeaders=function(){if(!this.h)return"";for(var e=[],t=this.h.entries(),n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(hh.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var yh=hu.JSON.parse;function mh(e){Tc.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=gh,this.K=this.L=!1}bu(mh,Tc);var gh="",kh=/^https?$/i,wh=["POST","PUT"];function bh(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Th(e),_h(e)}function Th(e){e.D||(e.D=!0,Ic(e,"complete"),Ic(e,"error"))}function Ih(e){if(e.h&&void 0!==lu&&(!e.C[1]||4!=xh(e)||2!=e.aa()))if(e.v&&4==xh(e))Fc(e.Ha,0,e);else if(Ic(e,"readystatechange"),4==xh(e)){e.h=!1;try{var t,n=e.aa();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var a=String(e.H).match(Cl)[1]||null;if(!a&&hu.self&&hu.self.location){var o=hu.self.location.protocol;a=o.substr(0,o.length-1)}i=!kh.test(a?a.toLowerCase():"")}t=i}if(t)Ic(e,"complete"),Ic(e,"success");else{e.m=6;try{var s=2<xh(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.aa()+"]",Th(e)}}finally{_h(e)}}}function _h(e,t){if(e.g){Eh(e);var n=e.g,r=e.C[0]?fu:null;e.g=null,e.C=null,t||Ic(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Eh(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(hu.clearTimeout(e.A),e.A=null)}function xh(e){return e.g?e.g.readyState:0}function Sh(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case gh:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ah(e){var t="";return rc(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Ch(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Ah(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Ml(e,t,n))}function Nh(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Dh(e){this.Ca=0,this.i=[],this.j=new Hc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Nh("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Nh("baseRetryDelayMs",5e3,e),this.bb=Nh("retryDelaySeedMs",1e4,e),this.$a=Nh("forwardChannelMaxRetries",2,e),this.ta=Nh("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new $l(e&&e.concurrentRequestLimit),this.Fa=new sh,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Rh(e){if(Lh(e),3==e.G){var t=e.U++,n=Dl(e.F);Ml(n,"SID",e.I),Ml(n,"RID",t),Ml(n,"TYPE","terminate"),Uh(e,n),(t=new fl(e,e.j,t,void 0)).K=2,t.v=Pl(Dl(n)),n=!1,hu.navigator&&hu.navigator.sendBeacon&&(n=hu.navigator.sendBeacon(t.v.toString(),"")),!n&&hu.Image&&((new Image).src=t.v,n=!0),n||(t.g=Yh(t.l,null),t.g.da(t.v)),t.F=Date.now(),Tl(t)}Wh(e)}function Oh(e){e.g&&(Bh(e),e.g.cancel(),e.g=null)}function Lh(e){Oh(e),e.u&&(hu.clearTimeout(e.u),e.u=null),Kh(e),e.h.cancel(),e.m&&("number"==typeof e.m&&hu.clearTimeout(e.m),e.m=null)}function Mh(e){eh(e.h)||e.m||(e.m=!0,Rc(e.Ja,e),e.C=0)}function Ph(e,t){var n;n=t?t.m:e.U++;var r=Dl(e.F);Ml(r,"SID",e.I),Ml(r,"RID",n),Ml(r,"AID",e.T),Uh(e,r),e.o&&e.s&&Ch(r,e.o,e.s),n=new fl(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Fh(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),rh(e.h,n),ml(n,r,t)}function Uh(e,t){e.ia&&rc(e.ia,(function(e,n){Ml(t,n,e)})),e.l&&Al({},(function(e,n){Ml(t,n,e)}))}function Fh(e,t,n){n=Math.min(e.i.length,n);var r=e.l?ku(e.l.Ra,e.l,e):null;e:for(var i=e.i,a=-1;;){var o=["count="+n];-1==a?0<n?(a=i[0].h,o.push("ofs="+a)):a=0:o.push("ofs="+a);for(var s=!0,u=0;u<n;u++){var c=i[u].h,l=i[u].g;if(0>(c-=a))a=Math.max(0,i[u].h-100),s=!1;else try{uh(l,o,"req"+c+"_")}catch(e){r&&r(l)}}if(s){r=o.join("&");break e}}return e=e.i.splice(0,n),t.D=e,r}function Vh(e){e.g||e.u||(e.Z=1,Rc(e.Ia,e),e.A=0)}function jh(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=tl(ku(e.Ia,e),Hh(e,e.A)),e.A++,!0)}function Bh(e){null!=e.B&&(hu.clearTimeout(e.B),e.B=null)}function qh(e){e.g=new fl(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Dl(e.sa);Ml(t,"RID","rpc"),Ml(t,"SID",e.I),Ml(t,"CI",e.L?"0":"1"),Ml(t,"AID",e.T),Ml(t,"TYPE","xmlhttp"),Uh(e,t),e.o&&e.s&&Ch(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Pl(Dl(t)),n.s=null,n.P=!0,gl(n,e)}function Kh(e){null!=e.v&&(hu.clearTimeout(e.v),e.v=null)}function zh(e,t){var n=null;if(e.g==t){Kh(e),Bh(e),e.g=null;var r=2}else{if(!nh(e.h,t))return;n=t.D,ih(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;Ic(r=Yc(),new el(r,n)),Mh(e)}else Vh(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!(th(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=tl(ku(e.Ja,e,t),Hh(e,e.C)),e.C++,0)))}(e,t)||2==r&&jh(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Gh(e,5);break;case 4:Gh(e,10);break;case 3:Gh(e,6);break;default:Gh(e,2)}}function Hh(e,t){var n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Gh(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=ku(e.kb,e);n||(n=new Nl("//www.google.com/images/cleardot.gif"),hu.location&&"http"==hu.location.protocol||Rl(n,"https"),Pl(n)),function(e,t){var n=new Hc;if(hu.Image){var r=new Image;r.onload=wu(ch,n,r,"TestLoadImage: loaded",!0,t),r.onerror=wu(ch,n,r,"TestLoadImage: error",!1,t),r.onabort=wu(ch,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=wu(ch,n,r,"TestLoadImage: timeout",!1,t),hu.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Zc(2);e.G=0,e.l&&e.l.va(t),Wh(e),Lh(e)}function Wh(e){if(e.G=0,e.la=[],e.l){var t=ah(e.h);0==t.length&&0==e.i.length||(Eu(e.la,t),Eu(e.la,e.i),e.h.i.length=0,_u(e.i),e.i.length=0),e.l.ua()}}function Qh(e,t,n){var r=n instanceof Nl?Dl(n):new Nl(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Ol(r,r.m);else{var i=hu.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var a=new Nl(null,void 0);r&&Rl(a,r),t&&(a.g=t),i&&Ol(a,i),n&&(a.l=n),r=a}return n=e.D,t=e.za,n&&t&&Ml(r,n,t),Ml(r,"VER",e.ma),Uh(e,r),r}function Yh(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new mh(new lh({jb:!0})):new mh(e.ra)).Ka(e.H),t}function Jh(){}function Xh(){if(Uu&&!(10<=Number(Ju)))throw Error("Environmental error: no available transport.")}function $h(e,t){Tc.call(this),this.g=new Dh(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Au(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Au(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new tf(this)}function Zh(e){cl.call(this);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ef(){ll.call(this),this.status=1}function tf(e){this.g=e}(iu=mh.prototype).Ka=function(e){this.L=e},iu.da=function(t,n,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);n=n?n.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():sl.g(),this.C=this.u?al(this.u):al(sl),this.g.onreadystatechange=ku(this.Ha,this);try{this.F=!0,this.g.open(n,String(t),!0),this.F=!1}catch(e){return void bh(this,e)}if(t=r||"",r=new Map(this.headers),i){var a=!0,o=!1,s=void 0;if(Object.getPrototypeOf(i)===Object.prototype)for(var u in i)r.set(u,i[u]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));try{for(var c,l=i.keys()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var h=c.value;r.set(h,i.get(h))}}catch(e){o=!0,s=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw s}}}}i=Array.from(r.keys()).find((function(e){return"content-type"==e.toLowerCase()})),u=hu.FormData&&t instanceof hu.FormData,!(0<=Iu(wh,n))||i||u||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");var f=!0,d=!1,v=void 0;try{for(var y,m=r[Symbol.iterator]();!(f=(y=m.next()).done);f=!0){var g=e(p)(y.value,2),k=g[0],w=g[1];this.g.setRequestHeader(k,w)}}catch(e){d=!0,v=e}finally{try{f||null==m.return||m.return()}finally{if(d)throw v}}this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Eh(this),0<this.B&&((this.K=function(e){return Uu&&Qu()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ku(this.qa,this)):this.A=Fc(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(e){bh(this,e)}},iu.qa=function(){void 0!==lu&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ic(this,"timeout"),this.abort(8))},iu.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ic(this,"complete"),Ic(this,"abort"),_h(this))},iu.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_h(this,!0)),mh.X.M.call(this)},iu.Ha=function(){this.s||(this.F||this.v||this.l?Ih(this):this.fb())},iu.fb=function(){Ih(this)},iu.aa=function(){try{return 2<xh(this)?this.g.status:-1}catch(e){return-1}},iu.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},iu.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),yh(t)}},iu.Ea=function(){return this.m},iu.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(iu=Dh.prototype).ma=8,iu.G=1,iu.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;var t=new fl(this,this.j,e,void 0),n=this.s;if(this.S&&(n?oc(n=ic(n),this.S):n=this.S),null!==this.o||this.N||(t.H=n,n=null),this.O)e:{for(var r=0,i=0;i<this.i.length;i++){var a=this.i[i];if(void 0===(a="__data__"in a.g&&"string"==typeof(a=a.g.__data__)?a.length:void 0))break;if(4096<(r+=a)){r=i;break e}if(4096===r||i===this.i.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=Fh(this,t,r),Ml(i=Dl(this.F),"RID",e),Ml(i,"CVER",22),this.D&&Ml(i,"X-HTTP-Session-Id",this.D),Uh(this,i),n&&(this.N?r="headers="+encodeURIComponent(String(Ah(n)))+"&"+r:this.o&&Ch(i,this.o,n)),rh(this.h,t),this.Ya&&Ml(i,"TYPE","init"),this.O?(Ml(i,"$req",r),Ml(i,"SID","null"),t.Z=!0,ml(t,i,null)):ml(t,i,r),this.G=2}}else 3==this.G&&(e?Ph(this,e):0==this.i.length||eh(this.h)||Ph(this))},iu.Ia=function(){if(this.u=null,qh(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=tl(ku(this.eb,this),e)}},iu.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Zc(10),Oh(this),qh(this))},iu.cb=function(){null!=this.v&&(this.v=null,Oh(this),jh(this),Zc(19))},iu.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Zc(2)):(this.j.info("Failed to ping google.com"),Zc(1))},(iu=Jh.prototype).xa=function(){},iu.wa=function(){},iu.va=function(){},iu.ua=function(){},iu.Ra=function(){},Xh.prototype.g=function(e,t){return new $h(e,t)},bu($h,Tc),$h.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Zc(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Qh(e,null,e.V),Mh(e)},$h.prototype.close=function(){Rh(this.g)},$h.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Ec(e),e=n);t.i.push(new Xl(t.ab++,e)),3==t.G&&Mh(t)},$h.prototype.M=function(){this.g.l=null,delete this.j,Rh(this.g),delete this.g,$h.X.M.call(this)},bu(Zh,cl),bu(ef,ll),bu(tf,Jh),tf.prototype.xa=function(){Ic(this.g,"a")},tf.prototype.wa=function(e){Ic(this.g,new Zh(e))},tf.prototype.va=function(e){Ic(this.g,new ef)},tf.prototype.ua=function(){Ic(this.g,"b")},Xh.prototype.createWebChannel=Xh.prototype.g,$h.prototype.send=$h.prototype.u,$h.prototype.open=$h.prototype.m,$h.prototype.close=$h.prototype.close,nl.NO_ERROR=0,nl.TIMEOUT=8,nl.HTTP_ERROR=6,rl.COMPLETE="complete",ol.EventType=ul,ul.OPEN="a",ul.CLOSE="b",ul.ERROR="c",ul.MESSAGE="d",Tc.prototype.listen=Tc.prototype.N,mh.prototype.listenOnce=mh.prototype.O,mh.prototype.getLastError=mh.prototype.Oa,mh.prototype.getLastErrorCode=mh.prototype.Ea,mh.prototype.getStatus=mh.prototype.aa,mh.prototype.getResponseJson=mh.prototype.Sa,mh.prototype.getResponseText=mh.prototype.fa,mh.prototype.send=mh.prototype.da,mh.prototype.setWithCredentials=mh.prototype.Ka;var nf=cu.createWebChannelTransport=function(){return new Xh},rf=cu.getStatEventTarget=function(){return Yc()},af=cu.ErrorCode=nl,of=cu.EventType=rl,sf=cu.Event=Wc,uf=cu.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},cf=cu.FetchXmlHttpFactory=lh,lf=cu.WebChannel=ol,hf=cu.XhrIo=mh,ff="@firebase/firestore",df=function(){"use strict";function t(n){e(o)(this,t),this.uid=n}return e(s)(t,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),t}();df.UNAUTHENTICATED=new df(null),df.GOOGLE_CREDENTIALS=new df("google-credentials-uid"),df.FIRST_PARTY=new df("first-party-uid"),df.MOCK_USER=new df("mock-user");
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
var vf="9.15.0",pf=new be("@firebase/firestore");
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
 */function yf(){return pf.logLevel}function mf(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(pf.logLevel<=de.DEBUG){var a,o=r.map(wf);(a=pf).debug.apply(a,["Firestore (".concat(vf,"): ").concat(t)].concat(e(f)(o)))}}function gf(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(pf.logLevel<=de.ERROR){var a,o=r.map(wf);(a=pf).error.apply(a,["Firestore (".concat(vf,"): ").concat(t)].concat(e(f)(o)))}}function kf(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(pf.logLevel<=de.WARN){var a,o=r.map(wf);(a=pf).warn.apply(a,["Firestore (".concat(vf,"): ").concat(t)].concat(e(f)(o)))}}function wf(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */var t}
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
 */function bf(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(vf,") INTERNAL ASSERTION FAILED: ")+e;throw gf(t),new Error(t)}function Tf(e,t){e||bf()}function If(e,t){return e}
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
 */var _f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},Ef=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this,t,i)).code=t,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},e(ou)(a)}return r}(ee),xf=function t(){"use strict";var n=this;e(o)(this,t),this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))},Sf=function t(n,r){"use strict";e(o)(this,t),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},Af=function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(df.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),t}(),Cf=function(){"use strict";function t(n){e(o)(this,t),this.token=n,this.changeListener=null}return e(s)(t,[{key:"getToken",value:function(){return Promise.resolve(this.token)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){var n=this;this.changeListener=t,e.enqueueRetryable((function(){return t(n.token.user)}))}},{key:"shutdown",value:function(){this.changeListener=null}}]),t}(),Nf=function(){"use strict";function t(n){e(o)(this,t),this.t=n,this.currentUser=df.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}return e(s)(t,[{key:"start",value:function(t,n){var r=this,i=this.i,o=function(e){return r.i!==i?(i=r.i,n(e)):Promise.resolve()},s=new xf;this.o=function(){var e=r;r.i++,r.currentUser=r.u(),s.resolve(),s=new xf,t.enqueueRetryable((function(){return o(e.currentUser)}))};var u=function(){var n=s,i=r;t.enqueueRetryable(e(a)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.promise;case 2:return e.next=4,o(i.currentUser);case 4:case"end":return e.stop()}}),t)}))))},l=function(e){mf("FirebaseAuthCredentialsProvider","Auth detected"),r.auth=e,r.auth.addAuthTokenListener(r.o),u()};this.t.onInit((function(e){return l(e)})),setTimeout((function(){if(!r.auth){var e=r.t.getImmediate({optional:!0});e?l(e):(mf("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new xf)}}),0),u()}},{key:"getToken",value:function(){var e=this,t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((function(n){return e.i!==t?(mf("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),e.getToken()):n?(Tf("string"==typeof n.accessToken),new Sf(n.accessToken,e.currentUser)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.auth&&this.auth.removeAuthTokenListener(this.o)}},{key:"u",value:function(){var e=this.auth&&this.auth.getUid();return Tf(null===e||"string"==typeof e),new df(e)}}]),t}(),Df=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.h=n,this.l=r,this.m=i,this.g=a,this.type="FirstParty",this.user=df.FIRST_PARTY,this.p=new Map}return e(s)(t,[{key:"I",value:function(){return this.g?this.g():(Tf(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}},{key:"headers",get:function(){this.p.set("X-Goog-AuthUser",this.l);var e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}]),t}(),Rf=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.h=n,this.l=r,this.m=i,this.g=a}return e(s)(t,[{key:"getToken",value:function(){return Promise.resolve(new Df(this.h,this.l,this.m,this.g))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(df.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),t}(),Of=function t(n){"use strict";e(o)(this,t),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},Lf=function(){"use strict";function t(n){e(o)(this,t),this.T=n,this.forceRefresh=!1,this.appCheck=null,this.A=null}return e(s)(t,[{key:"start",value:function(e,t){var n=this;this.o=function(r){e.enqueueRetryable((function(){return function(e){null!=e.error&&mf("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(e.error.message));var r=e.token!==n.A;return n.A=e.token,mf("FirebaseAppCheckTokenProvider","Received ".concat(r?"new":"existing"," token.")),r?t(e.token):Promise.resolve()}(r)}))};var r=function(e){mf("FirebaseAppCheckTokenProvider","AppCheck detected"),n.appCheck=e,n.appCheck.addTokenListener(n.o)};this.T.onInit((function(e){return r(e)})),setTimeout((function(){if(!n.appCheck){var e=n.T.getImmediate({optional:!0});e?r(e):mf("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}},{key:"getToken",value:function(){var e=this,t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((function(t){return t?(Tf("string"==typeof t.token),e.A=t.token,new Of(t.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}]),t}();
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
function Mf(e){var t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(var r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */var Pf=function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,null,[{key:"R",value:function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";n.length<20;)for(var r=Mf(40),i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length));return n}}]),t}();function Uf(e,t){return e<t?-1:e>t?1:0}function Ff(e,t,n){return e.length===t.length&&e.every((function(e,r){return n(e,t[r])}))}
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
var Vf=function(){"use strict";function t(n,r){if(e(o)(this,t),this.seconds=n,this.nanoseconds=r,r<0)throw new Ef(_f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new Ef(_f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(n<-62135596800)throw new Ef(_f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n);if(n>=253402300800)throw new Ef(_f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n)}return e(s)(t,[{key:"toDate",value:function(){return new Date(this.toMillis())}},{key:"toMillis",value:function(){return 1e3*this.seconds+this.nanoseconds/1e6}},{key:"_compareTo",value:function(e){return this.seconds===e.seconds?Uf(this.nanoseconds,e.nanoseconds):Uf(this.seconds,e.seconds)}},{key:"isEqual",value:function(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}},{key:"toString",value:function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}},{key:"toJSON",value:function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}},{key:"valueOf",value:function(){var e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}],[{key:"now",value:function(){return t.fromMillis(Date.now())}},{key:"fromDate",value:function(e){return t.fromMillis(e.getTime())}},{key:"fromMillis",value:function(e){var n=Math.floor(e/1e3);return new t(n,Math.floor(1e6*(e-1e3*n)))}}]),t}(),jf=function(){"use strict";function t(n){e(o)(this,t),this.timestamp=n}return e(s)(t,[{key:"compareTo",value:function(e){return this.timestamp._compareTo(e.timestamp)}},{key:"isEqual",value:function(e){return this.timestamp.isEqual(e.timestamp)}},{key:"toMicroseconds",value:function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}},{key:"toString",value:function(){return"SnapshotVersion("+this.timestamp.toString()+")"}},{key:"toTimestamp",value:function(){return this.timestamp}}],[{key:"fromTimestamp",value:function(e){return new t(e)}},{key:"min",value:function(){return new t(new Vf(0,0))}},{key:"max",value:function(){return new t(new Vf(253402300799,999999999))}}]),t}(),Bf=function(){"use strict";function t(n,r,i){e(o)(this,t),void 0===r?r=0:r>n.length&&bf(),void 0===i?i=n.length-r:i>n.length-r&&bf(),this.segments=n,this.offset=r,this.len=i}return e(s)(t,[{key:"length",get:function(){return this.len}},{key:"isEqual",value:function(e){return 0===t.comparator(this,e)}},{key:"child",value:function(e){var n=this.segments.slice(this.offset,this.limit());return e instanceof t?e.forEach((function(e){n.push(e)})):n.push(e),this.construct(n)}},{key:"limit",value:function(){return this.offset+this.length}},{key:"popFirst",value:function(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}},{key:"popLast",value:function(){return this.construct(this.segments,this.offset,this.length-1)}},{key:"firstSegment",value:function(){return this.segments[this.offset]}},{key:"lastSegment",value:function(){return this.get(this.length-1)}},{key:"get",value:function(e){return this.segments[this.offset+e]}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"isPrefixOf",value:function(e){if(e.length<this.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"isImmediateParentOf",value:function(e){if(this.length+1!==e.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"forEach",value:function(e){for(var t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}},{key:"toArray",value:function(){return this.segments.slice(this.offset,this.limit())}}],[{key:"comparator",value:function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=e.get(r),a=t.get(r);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}]),t}(),qf=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return e(s)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().join("/")}},{key:"toString",value:function(){return this.canonicalString()}}],[{key:"fromString",value:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var a=[],o=!0,s=!1,u=void 0;try{for(var c,l=n[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h,d=c.value;if(d.indexOf("//")>=0)throw new Ef(_f.INVALID_ARGUMENT,"Invalid segment (".concat(d,"). Paths must not contain // in them."));(h=a).push.apply(h,e(f)(d.split("/").filter((function(e){return e.length>0}))))}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return new r(a)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(Bf),Kf=/^[_a-zA-Z][_a-zA-Z0-9]*$/,zf=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return e(s)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().map((function(e){return e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),r.isValidIdentifier(e)||(e="`"+e+"`"),e})).join(".")}},{key:"toString",value:function(){return this.canonicalString()}},{key:"isKeyField",value:function(){return 1===this.length&&"__name__"===this.get(0)}}],[{key:"isValidIdentifier",value:function(e){return Kf.test(e)}},{key:"keyField",value:function(){return new r(["__name__"])}},{key:"fromServerFormat",value:function(e){for(var t=[],n="",i=0,a=function(){if(0===n.length)throw new Ef(_f.INVALID_ARGUMENT,"Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));t.push(n),n=""},o=!1;i<e.length;){var s=e[i];if("\\"===s){if(i+1===e.length)throw new Ef(_f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);var u=e[i+1];if("\\"!==u&&"."!==u&&"`"!==u)throw new Ef(_f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else"`"===s?(o=!o,i++):"."!==s||o?(n+=s,i++):(a(),i++)}if(a(),o)throw new Ef(_f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new r(t)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(Bf),Hf=function(){"use strict";function t(n){e(o)(this,t),this.path=n}return e(s)(t,[{key:"collectionGroup",get:function(){return this.path.popLast().lastSegment()}},{key:"hasCollectionId",value:function(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}},{key:"getCollectionGroup",value:function(){return this.path.get(this.path.length-2)}},{key:"getCollectionPath",value:function(){return this.path.popLast()}},{key:"isEqual",value:function(e){return null!==e&&0===qf.comparator(this.path,e.path)}},{key:"toString",value:function(){return this.path.toString()}}],[{key:"fromPath",value:function(e){return new t(qf.fromString(e))}},{key:"fromName",value:function(e){return new t(qf.fromString(e).popFirst(5))}},{key:"empty",value:function(){return new t(qf.emptyPath())}},{key:"comparator",value:function(e,t){return qf.comparator(e.path,t.path)}},{key:"isDocumentKey",value:function(e){return e.length%2==0}},{key:"fromSegments",value:function(e){return new t(new qf(e.slice()))}}]),t}(),Gf=function t(n,r,i,a){"use strict";e(o)(this,t),this.indexId=n,this.collectionGroup=r,this.fields=i,this.indexState=a};
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
 */Gf.UNKNOWN_ID=-1;function Wf(e,t){var n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=jf.fromTimestamp(1e9===r?new Vf(n+1,0):new Vf(n,r));return new Yf(i,Hf.empty(),t)}function Qf(e){return new Yf(e.readTime,e.key,-1)}var Yf=function(){"use strict";function t(n,r,i){e(o)(this,t),this.readTime=n,this.documentKey=r,this.largestBatchId=i}return e(s)(t,null,[{key:"min",value:function(){return new t(jf.min(),Hf.empty(),-1)}},{key:"max",value:function(){return new t(jf.max(),Hf.empty(),-1)}}]),t}();function Jf(e,t){var n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=Hf.comparator(e.documentKey,t.documentKey))?n:Uf(e.largestBatchId,t.largestBatchId)}
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
 */var Xf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",$f=function(){"use strict";function t(){e(o)(this,t),this.onCommittedListeners=[]}return e(s)(t,[{key:"addOnCommittedListener",value:function(e){this.onCommittedListeners.push(e)}},{key:"raiseOnCommittedEvent",value:function(){this.onCommittedListeners.forEach((function(e){return e()}))}}]),t}();function Zf(e){return ed.apply(this,arguments)}function ed(){return(ed=
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
e(a)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.code===_f.FAILED_PRECONDITION&&n.message===Xf){e.next=2;break}throw n;case 2:mf("LocalStore","Unexpectedly lost primary lease");case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var td=function(){"use strict";function t(n){var r=this;e(o)(this,t),this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,n((function(e){r.isDone=!0,r.result=e,r.nextCallback&&r.nextCallback(e)}),(function(e){r.isDone=!0,r.error=e,r.catchCallback&&r.catchCallback(e)}))}return e(s)(t,[{key:"catch",value:function(e){return this.next(void 0,e)}},{key:"next",value:function(e,n){var r=this;return this.callbackAttached&&bf(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new t((function(t,i){var a=r;r.nextCallback=function(n){a.wrapSuccess(e,n).next(t,i)},r.catchCallback=function(e){a.wrapFailure(n,e).next(t,i)}}))}},{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){e.next(t,n)}))}},{key:"wrapUserFunction",value:function(e){try{var n=e();return n instanceof t?n:t.resolve(n)}catch(e){return t.reject(e)}}},{key:"wrapSuccess",value:function(e,n){return e?this.wrapUserFunction((function(){return e(n)})):t.resolve(n)}},{key:"wrapFailure",value:function(e,n){return e?this.wrapUserFunction((function(){return e(n)})):t.reject(n)}}],[{key:"resolve",value:function(e){return new t((function(t,n){t(e)}))}},{key:"reject",value:function(e){return new t((function(t,n){n(e)}))}},{key:"waitFor",value:function(e){return new t((function(t,n){var r=0,i=0,a=!1;e.forEach((function(e){++r,e.next((function(){++i,a&&i===r&&t()}),(function(e){return n(e)}))})),a=!0,i===r&&t()}))}},{key:"or",value:function(e){var n=t.resolve(!1),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,r){var i=r.value;n=n.next((function(e){return e?t.resolve(e):i()}))},u=e[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n}},{key:"forEach",value:function(e,t){var n=this,r=[];return e.forEach((function(e,i){r.push(t.call(n,e,i))})),this.waitFor(r)}},{key:"mapArray",value:function(e,n){return new t((function(t,r){for(var i=function(i){var u=i;n(e[u]).next((function(e){o[u]=e,++s===a&&t(o)}),(function(e){return r(e)}))},a=e.length,o=new Array(a),s=0,u=0;u<a;u++)i(u)}))}},{key:"doWhile",value:function(e,n){return new t((function(t,r){var i=function(){!0===e()?n().next((function(){i()}),r):t()};i()}))}}]),t}();
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
 */function nd(e){return"IndexedDbTransactionError"===e.name}var rd=function(){"use strict";function t(n,r){var i=this;e(o)(this,t),this.previousValue=n,r&&(r.sequenceNumberHandler=function(e){return i.ut(e)},this.ct=function(e){return r.writeSequenceNumber(e)})}return e(s)(t,[{key:"ut",value:function(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}},{key:"next",value:function(){var e=++this.previousValue;return this.ct&&this.ct(e),e}}]),t}();rd.at=-1;
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
var id=function t(n,r,i,a,s,u,c,l){"use strict";e(o)(this,t),this.databaseId=n,this.appId=r,this.persistenceKey=i,this.host=a,this.ssl=s,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.useFetchStreams=l},ad=function(){"use strict";function t(n,r){e(o)(this,t),this.projectId=n,this.database=r||"(default)"}return e(s)(t,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}}],[{key:"empty",value:function(){return new t("","")}}]),t}();
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
function od(e){var t=0;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function sd(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ud(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */function cd(e){return null==e}function ld(e){return 0===e&&1/e==-1/0}function hd(e){return"number"==typeof e&&Number.isInteger(e)&&!ld(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */var fd=Symbol.iterator,dd=function(){"use strict";function t(n){e(o)(this,t),this.binaryString=n}return e(s)(t,[{key:fd,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return Uf(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(e){return new t(atob(e))}},{key:"fromUint8Array",value:function(e){return new t(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}}]),t}();
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
 */dd.EMPTY_BYTE_STRING=new dd("");var vd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pd(e){if(Tf(!!e),"string"==typeof e){var t=0,n=vd.exec(e);if(Tf(!!n),n[1]){var r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}var i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:yd(e.seconds),nanos:yd(e.nanos)}}function yd(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function md(e){return"string"==typeof e?dd.fromBase64String(e):dd.fromUint8Array(e)}
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
 */function gd(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function kd(e){var t=e.mapValue.fields.__previous_value__;return gd(t)?kd(t):t}function wd(e){var t=pd(e.mapValue.fields.__local_write_time__.timestampValue);return new Vf(t.seconds,t.nanos)}
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
 */var bd={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Td(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?gd(e)?4:Pd(e)?9007199254740991:10:bf()}function Id(e,t){if(e===t)return!0;var n,r=Td(e);if(r!==Td(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return wd(e).isEqual(wd(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;var n=pd(e.timestampValue),r=pd(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return n=t,md(e.bytesValue).isEqual(md(n.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return yd(e.geoPointValue.latitude)===yd(t.geoPointValue.latitude)&&yd(e.geoPointValue.longitude)===yd(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return yd(e.integerValue)===yd(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){var n=yd(e.doubleValue),r=yd(t.doubleValue);return n===r?ld(n)===ld(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ff(e.arrayValue.values||[],t.arrayValue.values||[],Id);case 10:return function(e,t){var n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(od(n)!==od(r))return!1;for(var i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Id(n[i],r[i])))return!1;return!0}(e,t);default:return bf()}}function _d(e,t){return void 0!==(e.values||[]).find((function(e){return Id(e,t)}))}function Ed(e,t){if(e===t)return 0;var n,r,i,a,o=Td(e),s=Td(t);if(o!==s)return Uf(o,s);switch(o){case 0:case 9007199254740991:return 0;case 1:return Uf(e.booleanValue,t.booleanValue);case 2:return r=t,i=yd((n=e).integerValue||n.doubleValue),a=yd(r.integerValue||r.doubleValue),i<a?-1:i>a?1:i===a?0:isNaN(i)?isNaN(a)?0:-1:1;case 3:return xd(e.timestampValue,t.timestampValue);case 4:return xd(wd(e),wd(t));case 5:return Uf(e.stringValue,t.stringValue);case 6:return function(e,t){var n=md(e),r=md(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){for(var n=e.split("/"),r=t.split("/"),i=0;i<n.length&&i<r.length;i++){var a=Uf(n[i],r[i]);if(0!==a)return a}return Uf(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){var n=Uf(yd(e.latitude),yd(t.latitude));return 0!==n?n:Uf(yd(e.longitude),yd(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){for(var n=e.values||[],r=t.values||[],i=0;i<n.length&&i<r.length;++i){var a=Ed(n[i],r[i]);if(a)return a}return Uf(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===bd.mapValue&&t===bd.mapValue)return 0;if(e===bd.mapValue)return 1;if(t===bd.mapValue)return-1;var n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(var o=0;o<r.length&&o<a.length;++o){var s=Uf(r[o],a[o]);if(0!==s)return s;var u=Ed(n[r[o]],i[a[o]]);if(0!==u)return u}return Uf(r.length,a.length)}(e.mapValue,t.mapValue);default:throw bf()}}function xd(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Uf(e,t);var n=pd(e),r=pd(t),i=Uf(n.seconds,r.seconds);return 0!==i?i:Uf(n.nanos,r.nanos)}function Sd(e){return Ad(e)}function Ad(e){var t,n,r,i;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?(r=e.timestampValue,i=pd(r),"time(".concat(i.seconds,",").concat(i.nanos,")")):"stringValue"in e?e.stringValue:"bytesValue"in e?md(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Hf.fromName(n).toString()):"geoPointValue"in e?"geo(".concat((t=e.geoPointValue).latitude,",").concat(t.longitude,")"):"arrayValue"in e?function(e){var t="[",n=!0,r=!0,i=!1,a=void 0;try{for(var o,s=(e.values||[])[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n?n=!1:t+=",",t+=Ad(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return t+"]"}(e.arrayValue):"mapValue"in e?function(e){var t=Object.keys(e.fields||{}).sort(),n="{",r=!0,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r?r=!1:n+=",",n+="".concat(c,":").concat(Ad(e.fields[c]))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return n+"}"}(e.mapValue):bf()}function Cd(e,t){return{referenceValue:"projects/".concat(e.projectId,"/databases/").concat(e.database,"/documents/").concat(t.path.canonicalString())}}function Nd(e){return!!e&&"integerValue"in e}function Dd(e){return!!e&&"arrayValue"in e}function Rd(e){return!!e&&"nullValue"in e}function Od(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ld(e){return!!e&&"mapValue"in e}function Md(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){var t={mapValue:{fields:{}}};return sd(e.mapValue.fields,(function(e,n){return t.mapValue.fields[e]=Md(n)})),t}if(e.arrayValue){for(var n={arrayValue:{values:[]}},r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=Md(e.arrayValue.values[r]);return n}return Object.assign({},e)}function Pd(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
var Ud=function t(n,r){"use strict";e(o)(this,t),this.position=n,this.inclusive=r};function Fd(e,t,n){for(var r=0,i=0;i<e.position.length;i++){var a=t[i],o=e.position[i];if(r=a.field.isKeyField()?Hf.comparator(Hf.fromName(o.referenceValue),n.key):Ed(o,n.data.field(a.field)),"desc"===a.dir&&(r*=-1),0!==r)break}return r}function Vd(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(var n=0;n<e.position.length;n++)if(!Id(e.position[n],t.position[n]))return!1;return!0}
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
 */var jd=function t(){"use strict";e(o)(this,t)},Bd=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i,a){var s;return e(o)(this,r),(s=n.call(this)).field=t,s.op=i,s.value=a,e(ou)(s)}return e(s)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ed(t,this.value)):null!==t&&Td(this.value)===Td(t)&&this.matchesComparison(Ed(t,this.value))}},{key:"matchesComparison",value:function(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return bf()}}},{key:"isInequality",value:function(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}},{key:"getFlattenedFilters",value:function(){return[this]}},{key:"getFilters",value:function(){return[this]}},{key:"getFirstInequalityField",value:function(){return this.isInequality()?this.field:null}}],[{key:"create",value:function(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Yd(e,t,n):"array-contains"===t?new Zd(e,n):"in"===t?new ev(e,n):"not-in"===t?new tv(e,n):"array-contains-any"===t?new nv(e,n):new r(e,t,n)}},{key:"createKeyFieldInFilter",value:function(e,t,n){return"in"===t?new Jd(e,n):new Xd(e,n)}}]),r}(jd),qd=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this)).filters=t,a.op=i,a.ht=null,e(ou)(a)}return e(s)(r,[{key:"matches",value:function(e){return Kd(this)?void 0===this.filters.find((function(t){return!t.matches(e)})):void 0!==this.filters.find((function(t){return t.matches(e)}))}},{key:"getFlattenedFilters",value:function(){return null!==this.ht||(this.ht=this.filters.reduce((function(e,t){return e.concat(t.getFlattenedFilters())}),[])),this.ht}},{key:"getFilters",value:function(){return Object.assign([],this.filters)}},{key:"getFirstInequalityField",value:function(){var e=this.lt((function(e){return e.isInequality()}));return null!==e?e.field:null}},{key:"lt",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.getFlattenedFilters()[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(e(o))return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}}],[{key:"create",value:function(e,t){return new r(e,t)}}]),r}(jd);function Kd(e){return"and"===e.op}function zd(e){return Hd(e)&&Kd(e)}function Hd(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value instanceof qd)return!1}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!0}function Gd(e){if(e instanceof Bd)return e.field.canonicalString()+e.op.toString()+Sd(e.value);var t=e.filters.map((function(e){return Gd(e)})).join(",");return"".concat(e.op,"(").concat(t,")")}function Wd(e,t){return e instanceof Bd?(n=e,(r=t)instanceof Bd&&n.op===r.op&&n.field.isEqual(r.field)&&Id(n.value,r.value)):e instanceof qd?function(e,t){return t instanceof qd&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((function(e,n,r){return e&&Wd(n,t.filters[r])}),!0)}(e,t):void bf();var n,r}function Qd(e){return e instanceof Bd?"".concat((t=e).field.canonicalString()," ").concat(t.op," ").concat(Sd(t.value)):e instanceof qd?function(e){return e.op.toString()+" {"+e.getFilters().map(Qd).join(" ,")+"}"}(e):"Filter";var t}var Yd=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i,a){var s;return e(o)(this,r),(s=n.call(this,t,i,a)).key=Hf.fromName(a.referenceValue),e(ou)(s)}return e(s)(r,[{key:"matches",value:function(e){var t=Hf.comparator(e.key,this.key);return this.matchesComparison(t)}}]),r}(Bd),Jd=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this,t,"in",i)).keys=$d("in",i),e(ou)(a)}return e(s)(r,[{key:"matches",value:function(e){return this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(Bd),Xd=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this,t,"not-in",i)).keys=$d("not-in",i),e(ou)(a)}return e(s)(r,[{key:"matches",value:function(e){return!this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(Bd);function $d(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((function(e){return Hf.fromName(e.referenceValue)}))}var Zd=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i){return e(o)(this,r),n.call(this,t,"array-contains",i)}return e(s)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return Dd(t)&&_d(t.arrayValue,this.value)}}]),r}(Bd),ev=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i){return e(o)(this,r),n.call(this,t,"in",i)}return e(s)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return null!==t&&_d(this.value.arrayValue,t)}}]),r}(Bd),tv=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i){return e(o)(this,r),n.call(this,t,"not-in",i)}return e(s)(r,[{key:"matches",value:function(e){if(_d(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;var t=e.data.field(this.field);return null!==t&&!_d(this.value.arrayValue,t)}}]),r}(Bd),nv=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i){return e(o)(this,r),n.call(this,t,"array-contains-any",i)}return e(s)(r,[{key:"matches",value:function(e){var t=this,n=e.data.field(this.field);return!(!Dd(n)||!n.arrayValue.values)&&n.arrayValue.values.some((function(e){return _d(t.value.arrayValue,e)}))}}]),r}(Bd),rv=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";e(o)(this,t),this.field=n,this.dir=r};function iv(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */var av=function(){"use strict";function t(n,r){e(o)(this,t),this.comparator=n,this.root=r||sv.EMPTY}return e(s)(t,[{key:"insert",value:function(e,n){return new t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,sv.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,sv.BLACK,null,null))}},{key:"get",value:function(e){for(var t=this.root;!t.isEmpty();){var n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}},{key:"indexOf",value:function(e){for(var t=0,n=this.root;!n.isEmpty();){var r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}},{key:"isEmpty",value:function(){return this.root.isEmpty()}},{key:"size",get:function(){return this.root.size}},{key:"minKey",value:function(){return this.root.minKey()}},{key:"maxKey",value:function(){return this.root.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root.inorderTraversal(e)}},{key:"forEach",value:function(e){this.inorderTraversal((function(t,n){return e(t,n),!1}))}},{key:"toString",value:function(){var e=[];return this.inorderTraversal((function(t,n){return e.push("".concat(t,":").concat(n)),!1})),"{".concat(e.join(", "),"}")}},{key:"reverseTraversal",value:function(e){return this.root.reverseTraversal(e)}},{key:"getIterator",value:function(){return new ov(this.root,null,this.comparator,!1)}},{key:"getIteratorFrom",value:function(e){return new ov(this.root,e,this.comparator,!1)}},{key:"getReverseIterator",value:function(){return new ov(this.root,null,this.comparator,!0)}},{key:"getReverseIteratorFrom",value:function(e){return new ov(this.root,e,this.comparator,!0)}}]),t}(),ov=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.isReverse=a,this.nodeStack=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,r&&a&&(s*=-1),s<0)n=this.isReverse?n.left:n.right;else{if(0===s){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}return e(s)(t,[{key:"getNext",value:function(){var e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}},{key:"hasNext",value:function(){return this.nodeStack.length>0}},{key:"peek",value:function(){if(0===this.nodeStack.length)return null;var e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}]),t}(),sv=function(){"use strict";function t(n,r,i,a,s){e(o)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:t.EMPTY,this.right=null!=s?s:t.EMPTY,this.size=this.left.size+1+this.right.size}return e(s)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return t.EMPTY;var e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(e,n){var r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(e,i.key)){if(i.right.isEmpty())return t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw bf();if(this.right.isRed())throw bf();var e=this.left.check();if(e!==this.right.check())throw bf();return e+(this.isRed()?0:1)}}]),t}();sv.EMPTY=null,sv.RED=!0,sv.BLACK=!1,sv.EMPTY=new(function(){"use strict";function t(){e(o)(this,t),this.size=0}return e(s)(t,[{key:"key",get:function(){throw bf()}},{key:"value",get:function(){throw bf()}},{key:"color",get:function(){throw bf()}},{key:"left",get:function(){throw bf()}},{key:"right",get:function(){throw bf()}},{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new sv(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),t}());
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
var uv=function(){"use strict";function t(n){e(o)(this,t),this.comparator=n,this.data=new av(this.comparator)}return e(s)(t,[{key:"has",value:function(e){return null!==this.data.get(e)}},{key:"first",value:function(){return this.data.minKey()}},{key:"last",value:function(){return this.data.maxKey()}},{key:"size",get:function(){return this.data.size}},{key:"indexOf",value:function(e){return this.data.indexOf(e)}},{key:"forEach",value:function(e){this.data.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"forEachInRange",value:function(e,t){for(var n=this.data.getIteratorFrom(e[0]);n.hasNext();){var r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}},{key:"forEachWhile",value:function(e,t){var n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}},{key:"firstAfterOrEqual",value:function(e){var t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}},{key:"getIterator",value:function(){return new cv(this.data.getIterator())}},{key:"getIteratorFrom",value:function(e){return new cv(this.data.getIteratorFrom(e))}},{key:"add",value:function(e){return this.copy(this.data.remove(e).insert(e,!0))}},{key:"delete",value:function(e){return this.has(e)?this.copy(this.data.remove(e)):this}},{key:"isEmpty",value:function(){return this.data.isEmpty()}},{key:"unionWith",value:function(e){var t=this;return t.size<e.size&&(t=e,e=this),e.forEach((function(e){t=t.add(e)})),t}},{key:"isEqual",value:function(e){if(!(e instanceof t))return!1;if(this.size!==e.size)return!1;for(var n=this.data.getIterator(),r=e.data.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(0!==this.comparator(i,a))return!1}return!0}},{key:"toArray",value:function(){var e=[];return this.forEach((function(t){e.push(t)})),e}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){return e.push(t)})),"SortedSet("+e.toString()+")"}},{key:"copy",value:function(e){var n=new t(this.comparator);return n.data=e,n}}]),t}(),cv=function(){"use strict";function t(n){e(o)(this,t),this.iter=n}return e(s)(t,[{key:"getNext",value:function(){return this.iter.getNext().key}},{key:"hasNext",value:function(){return this.iter.hasNext()}}]),t}();
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
var lv=function(){"use strict";function t(n){e(o)(this,t),this.fields=n,n.sort(zf.comparator)}return e(s)(t,[{key:"unionWith",value:function(e){var n=new uv(zf.comparator),r=!0,i=!1,a=void 0;try{for(var o,s=this.fields[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n.add(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var c=!0,l=!1,h=void 0;try{for(var f,d=e[Symbol.iterator]();!(c=(f=d.next()).done);c=!0){var v=f.value;n=n.add(v)}}catch(e){l=!0,h=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw h}}return new t(n.toArray())}},{key:"covers",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.fields[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.isPrefixOf(e))return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"isEqual",value:function(e){return Ff(this.fields,e.fields,(function(e,t){return e.isEqual(t)}))}}],[{key:"empty",value:function(){return new t([])}}]),t}(),hv=function(){"use strict";function t(n){e(o)(this,t),this.value=n}return e(s)(t,[{key:"field",value:function(e){if(e.isEmpty())return this.value;for(var t=this.value,n=0;n<e.length-1;++n)if(!Ld(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}},{key:"set",value:function(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Md(t)}},{key:"setAll",value:function(e){var t=this,n=zf.emptyPath(),r={},i=[];e.forEach((function(e,a){if(!n.isImmediateParentOf(a)){var o=t.getFieldsMap(n);t.applyChanges(o,r,i),r={},i=[],n=a.popLast()}e?r[a.lastSegment()]=Md(e):i.push(a.lastSegment())}));var a=this.getFieldsMap(n);this.applyChanges(a,r,i)}},{key:"delete",value:function(e){var t=this.field(e.popLast());Ld(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}},{key:"isEqual",value:function(e){return Id(this.value,e.value)}},{key:"getFieldsMap",value:function(e){var t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(var n=0;n<e.length;++n){var r=t.mapValue.fields[e.get(n)];Ld(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}},{key:"applyChanges",value:function(e,t,n){sd(t,(function(t,n){return e[t]=n}));var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;delete e[u]}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"clone",value:function(){return new t(Md(this.value))}}],[{key:"empty",value:function(){return new t({mapValue:{}})}}]),t}();
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
 */function fv(e){var t=[];return sd(e.fields,(function(e,n){var r=new zf([e]);if(Ld(n)){var i=fv(n.mapValue).fields,a=!0,o=!1,s=void 0;if(0===i.length)t.push(r);else try{for(var u,c=i[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.push(r.child(l))}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}}else t.push(r)})),new lv(t)
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
 */}var dv=function(){"use strict";function t(n,r,i,a,s,u,c){e(o)(this,t),this.key=n,this.documentType=r,this.version=i,this.readTime=a,this.createTime=s,this.data=u,this.documentState=c}return e(s)(t,[{key:"convertToFoundDocument",value:function(e,t){return!this.createTime.isEqual(jf.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}},{key:"convertToNoDocument",value:function(e){return this.version=e,this.documentType=2,this.data=hv.empty(),this.documentState=0,this}},{key:"convertToUnknownDocument",value:function(e){return this.version=e,this.documentType=3,this.data=hv.empty(),this.documentState=2,this}},{key:"setHasCommittedMutations",value:function(){return this.documentState=2,this}},{key:"setHasLocalMutations",value:function(){return this.documentState=1,this.version=jf.min(),this}},{key:"setReadTime",value:function(e){return this.readTime=e,this}},{key:"hasLocalMutations",get:function(){return 1===this.documentState}},{key:"hasCommittedMutations",get:function(){return 2===this.documentState}},{key:"hasPendingWrites",get:function(){return this.hasLocalMutations||this.hasCommittedMutations}},{key:"isValidDocument",value:function(){return 0!==this.documentType}},{key:"isFoundDocument",value:function(){return 1===this.documentType}},{key:"isNoDocument",value:function(){return 2===this.documentType}},{key:"isUnknownDocument",value:function(){return 3===this.documentType}},{key:"isEqual",value:function(e){return e instanceof t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}},{key:"mutableCopy",value:function(){return new t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}},{key:"toString",value:function(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {createTime: ").concat(this.createTime,"}), {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}}],[{key:"newInvalidDocument",value:function(e){return new t(e,0,jf.min(),jf.min(),jf.min(),hv.empty(),0)}},{key:"newFoundDocument",value:function(e,n,r,i){return new t(e,1,n,jf.min(),r,i,0)}},{key:"newNoDocument",value:function(e,n){return new t(e,2,n,jf.min(),jf.min(),hv.empty(),0)}},{key:"newUnknownDocument",value:function(e,n){return new t(e,3,n,jf.min(),jf.min(),hv.empty(),2)}}]),t}(),vv=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;e(o)(this,t),this.path=n,this.collectionGroup=r,this.orderBy=i,this.filters=a,this.limit=s,this.startAt=u,this.endAt=c,this.ft=null};
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
 */function pv(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return new vv(e,t,n,r,i,a,o)}function yv(e){var t=If(e);if(null===t.ft){var n=t.path.canonicalString();null!==t.collectionGroup&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((function(e){return Gd(e)})).join(","),n+="|ob:",n+=t.orderBy.map((function(e){return(t=e).field.canonicalString()+t.dir;var t})).join(","),cd(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return Sd(e)})).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return Sd(e)})).join(",")),t.ft=n}return t.ft}function mv(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(var n=0;n<e.orderBy.length;n++)if(!iv(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(var r=0;r<e.filters.length;r++)if(!Wd(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Vd(e.startAt,t.startAt)&&Vd(e.endAt,t.endAt)}function gv(e){return Hf.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
var kv=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;e(o)(this,t),this.path=n,this.collectionGroup=r,this.explicitOrderBy=i,this.filters=a,this.limit=s,this.limitType=u,this.startAt=c,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt};function wv(e,t,n,r,i,a,o,s){return new kv(e,t,n,r,i,a,o,s)}function bv(e){return new kv(e)}function Tv(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Iv(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function _v(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value.getFirstInequalityField();if(null!==o)return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}function Ev(e){return null!==e.collectionGroup}function xv(e){var t=If(e);if(null===t.dt){t.dt=[];var n=_v(t),r=Iv(t);if(null!==n&&null===r)n.isKeyField()||t.dt.push(new rv(n)),t.dt.push(new rv(zf.keyField(),"asc"));else{var i=!1,a=!0,o=!1,s=void 0;try{for(var u,c=t.explicitOrderBy[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.dt.push(l),l.field.isKeyField()&&(i=!0)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}if(!i){var h=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new rv(zf.keyField(),h))}}}return t.dt}function Sv(e){var t=If(e);if(!t._t)if("F"===t.limitType)t._t=pv(t.path,t.collectionGroup,xv(t),t.filters,t.limit,t.startAt,t.endAt);else{var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=xv(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c="desc"===u.dir?"asc":"desc";n.push(new rv(u.field,c))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var l=t.endAt?new Ud(t.endAt.position,t.endAt.inclusive):null,h=t.startAt?new Ud(t.startAt.position,t.startAt.inclusive):null;t._t=pv(t.path,t.collectionGroup,n,t.filters,t.limit,l,h)}return t._t}function Av(e,t){t.getFirstInequalityField(),_v(e);var n=e.filters.concat([t]);return new kv(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Cv(e,t,n){return new kv(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Nv(e,t){return mv(Sv(e),Sv(t))&&e.limitType===t.limitType}function Dv(e){return"".concat(yv(Sv(e)),"|lt:").concat(e.limitType)}function Rv(e){return"Query(target=".concat((t=Sv(e),n=t.path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=", filters: [".concat(t.filters.map((function(e){return Qd(e)})).join(", "),"]")),cd(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=", orderBy: [".concat(t.orderBy.map((function(e){return"".concat((t=e).field.canonicalString()," (").concat(t.dir,")");var t})).join(", "),"]")),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return Sd(e)})).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return Sd(e)})).join(",")),"Target(".concat(n,")")),"; limitType=").concat(e.limitType,")");var t,n}function Ov(e,t){return t.isFoundDocument()&&(i=e,o=(a=t).key.path,null!==i.collectionGroup?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):Hf.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o))&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=xv(e)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(!s.field.isKeyField()&&null===t.data.field(s.field))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=e.filters[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){if(!a.value.matches(t))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){var r=Fd(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,xv(n),r)||n.endAt&&!function(e,t,n){var r=Fd(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,xv(n),r)));var n,r,i,a,o}function Lv(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Mv(e){return function(t,n){var r=!1,i=!0,a=!1,o=void 0;try{for(var s,u=xv(e)[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=Pv(c,t,n);if(0!==l)return l;r=r||c.field.isKeyField()}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return 0}}function Pv(e,t,n){var r,i,a,o,s=e.field.isKeyField()?Hf.comparator(t.key,n.key):(r=e.field,i=n,a=t.data.field(r),o=i.data.field(r),null!==a&&null!==o?Ed(a,o):bf());switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return bf()}}
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
 */function Uv(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ld(t)?"-0":t}}function Fv(e){return{integerValue:""+e}}function Vv(e,t){return hd(t)?Fv(t):Uv(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */var jv=function t(){"use strict";e(o)(this,t),this._=void 0};function Bv(e,t,n){return e instanceof zv?(i=t,a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:(r=n).seconds,nanos:r.nanoseconds}}}},i&&(a.fields.__previous_value__=i),{mapValue:a}):e instanceof Hv?Gv(e,t):e instanceof Wv?Qv(e,t):function(e,t){var n=Kv(e,t),r=Jv(n)+Jv(e.gt);return Nd(n)&&Nd(e.gt)?Fv(r):Uv(e.yt,r)}(e,t);var r,i,a}function qv(e,t,n){return e instanceof Hv?Gv(e,t):e instanceof Wv?Qv(e,t):n}function Kv(e,t){var n,r;return e instanceof Yv?Nd(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null}var zv=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return r}(jv),Hv=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this)).elements=t,e(ou)(i)}return r}(jv);function Gv(e,t){var n=Xv(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n.some((function(e){return Id(e,r)}))||n.push(r)},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var Wv=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this)).elements=t,e(ou)(i)}return r}(jv);function Qv(e,t){var n=Xv(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n=n.filter((function(e){return!Id(e,r)}))},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var Yv=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this)).yt=t,a.gt=i,e(ou)(a)}return r}(jv);function Jv(e){return yd(e.integerValue||e.doubleValue)}function Xv(e){return Dd(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */var $v=function t(n,r){"use strict";e(o)(this,t),this.field=n,this.transform=r};var Zv=function t(n,r){"use strict";e(o)(this,t),this.version=n,this.transformResults=r},ep=function(){"use strict";function t(n,r){e(o)(this,t),this.updateTime=n,this.exists=r}return e(s)(t,[{key:"isNone",get:function(){return void 0===this.updateTime&&void 0===this.exists}},{key:"isEqual",value:function(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}],[{key:"none",value:function(){return new t}},{key:"exists",value:function(e){return new t(void 0,e)}},{key:"updateTime",value:function(e){return new t(e)}}]),t}();function tp(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}var np=function t(){"use strict";e(o)(this,t)};function rp(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new pp(e.key,ep.none()):new up(e.key,e.data,ep.none());var n=e.data,r=hv.empty(),i=new uv(zf.comparator),a=!0,o=!1,s=void 0;try{for(var u,c=t.fields[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;if(!i.has(l)){var h=n.field(l);null===h&&l.length>1&&(l=l.popLast(),h=n.field(l)),null===h?r.delete(l):r.set(l,h),i=i.add(l)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new cp(e.key,r,new lv(i.toArray()),ep.none())}function ip(e,t,n){var r,i,a,o,s;e instanceof up?(i=t,a=n,o=(r=e).value.clone(),s=hp(r.fieldTransforms,i,a.transformResults),o.setAll(s),i.convertToFoundDocument(a.version,o).setHasCommittedMutations()):e instanceof cp?function(e,t,n){if(tp(e.precondition,t)){var r=hp(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(lp(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}else t.convertToUnknownDocument(n.version)}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function ap(e,t,n,r){return e instanceof up?function(e,t,n,r){if(!tp(e.precondition,t))return n;var i=e.value.clone(),a=fp(e.fieldTransforms,r,t);return i.setAll(a),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof cp?function(e,t,n,r){if(!tp(e.precondition,t))return n;var i=fp(e.fieldTransforms,r,t),a=t.data;return a.setAll(lp(e)),a.setAll(i),t.convertToFoundDocument(t.version,a).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((function(e){return e.field})))}(e,t,n,r):(i=t,a=n,tp(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):a);var i,a}function op(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.fieldTransforms[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c=t.data.field(u.field),l=Kv(u.transform,c||null);null!=l&&(null===n&&(n=hv.empty()),n.set(u.field,l))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n||null}function sp(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Ff(n,r,(function(e,t){return function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Hv&&r instanceof Hv||n instanceof Wv&&r instanceof Wv?Ff(n.elements,r.elements,Id):n instanceof Yv&&r instanceof Yv?Id(n.gt,r.gt):n instanceof zv&&r instanceof zv);var n,r}(e,t)}))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}var up=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i,a){var s,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return e(o)(this,r),(s=n.call(this)).key=t,s.value=i,s.precondition=a,s.fieldTransforms=u,s.type=0,e(ou)(s)}return e(s)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(np),cp=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i,a,s){var u,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];return e(o)(this,r),(u=n.call(this)).key=t,u.data=i,u.fieldMask=a,u.precondition=s,u.fieldTransforms=c,u.type=1,e(ou)(u)}return e(s)(r,[{key:"getFieldMask",value:function(){return this.fieldMask}}]),r}(np);function lp(e){var t=new Map;return e.fieldMask.fields.forEach((function(n){if(!n.isEmpty()){var r=e.data.field(n);t.set(n,r)}})),t}function hp(e,t,n){var r=new Map;Tf(e.length===n.length);for(var i=0;i<n.length;i++){var a=e[i],o=a.transform,s=t.data.field(a.field);r.set(a.field,qv(o,s,n[i]))}return r}function fp(e,t,n){var r=new Map,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=c.transform,h=n.data.field(c.field);r.set(c.field,Bv(l,h,t))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var dp,vp,pp=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this)).key=t,a.precondition=i,a.type=2,a.fieldTransforms=[],e(ou)(a)}return e(s)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(np),yp=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this)).key=t,a.precondition=i,a.type=3,a.fieldTransforms=[],e(ou)(a)}return e(s)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(np),mp=function t(n){"use strict";e(o)(this,t),this.count=n};function gp(e){switch(e){default:return bf();case _f.CANCELLED:case _f.UNKNOWN:case _f.DEADLINE_EXCEEDED:case _f.RESOURCE_EXHAUSTED:case _f.INTERNAL:case _f.UNAVAILABLE:case _f.UNAUTHENTICATED:return!1;case _f.INVALID_ARGUMENT:case _f.NOT_FOUND:case _f.ALREADY_EXISTS:case _f.PERMISSION_DENIED:case _f.FAILED_PRECONDITION:case _f.ABORTED:case _f.OUT_OF_RANGE:case _f.UNIMPLEMENTED:case _f.DATA_LOSS:return!0}}function kp(e){if(void 0===e)return gf("GRPC error has no .code"),_f.UNKNOWN;switch(e){case dp.OK:return _f.OK;case dp.CANCELLED:return _f.CANCELLED;case dp.UNKNOWN:return _f.UNKNOWN;case dp.DEADLINE_EXCEEDED:return _f.DEADLINE_EXCEEDED;case dp.RESOURCE_EXHAUSTED:return _f.RESOURCE_EXHAUSTED;case dp.INTERNAL:return _f.INTERNAL;case dp.UNAVAILABLE:return _f.UNAVAILABLE;case dp.UNAUTHENTICATED:return _f.UNAUTHENTICATED;case dp.INVALID_ARGUMENT:return _f.INVALID_ARGUMENT;case dp.NOT_FOUND:return _f.NOT_FOUND;case dp.ALREADY_EXISTS:return _f.ALREADY_EXISTS;case dp.PERMISSION_DENIED:return _f.PERMISSION_DENIED;case dp.FAILED_PRECONDITION:return _f.FAILED_PRECONDITION;case dp.ABORTED:return _f.ABORTED;case dp.OUT_OF_RANGE:return _f.OUT_OF_RANGE;case dp.UNIMPLEMENTED:return _f.UNIMPLEMENTED;case dp.DATA_LOSS:return _f.DATA_LOSS;default:return bf()}}(vp=dp||(dp={}))[vp.OK=0]="OK",vp[vp.CANCELLED=1]="CANCELLED",vp[vp.UNKNOWN=2]="UNKNOWN",vp[vp.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",vp[vp.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",vp[vp.NOT_FOUND=5]="NOT_FOUND",vp[vp.ALREADY_EXISTS=6]="ALREADY_EXISTS",vp[vp.PERMISSION_DENIED=7]="PERMISSION_DENIED",vp[vp.UNAUTHENTICATED=16]="UNAUTHENTICATED",vp[vp.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",vp[vp.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",vp[vp.ABORTED=10]="ABORTED",vp[vp.OUT_OF_RANGE=11]="OUT_OF_RANGE",vp[vp.UNIMPLEMENTED=12]="UNIMPLEMENTED",vp[vp.INTERNAL=13]="INTERNAL",vp[vp.UNAVAILABLE=14]="UNAVAILABLE",vp[vp.DATA_LOSS=15]="DATA_LOSS";
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
var wp=function(){"use strict";function t(n,r){e(o)(this,t),this.mapKeyFn=n,this.equalsFn=r,this.inner={},this.innerSize=0}return e(s)(t,[{key:"get",value:function(t){var n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){var i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=e(p)(s.value,2),l=c[0],h=c[1];if(this.equalsFn(l,t))return h}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}}},{key:"has",value:function(e){return void 0!==this.get(e)}},{key:"set",value:function(e,t){var n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(var i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}},{key:"delete",value:function(e){var t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(var r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}},{key:"forEach",value:function(t){sd(this.inner,(function(n,r){var i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=e(p)(s.value,2),l=c[0],h=c[1];t(l,h)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}))}},{key:"isEmpty",value:function(){return ud(this.inner)}},{key:"size",value:function(){return this.innerSize}}]),t}(),bp=new av(Hf.comparator);
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
 */function Tp(){return bp}var Ip=new av(Hf.comparator);function _p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Ip,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.insert(c.key,c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}function Ep(e){var t=Ip;return e.forEach((function(e,n){return t=t.insert(e,n.overlayedDocument)})),t}function xp(){return Ap()}function Sp(){return Ap()}function Ap(){return new wp((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)}))}var Cp=new av(Hf.comparator),Np=new uv(Hf.comparator);function Dp(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Np,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.add(c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var Rp=new uv(Uf);function Op(){return Rp}
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
 */var Lp=function(){"use strict";function t(n,r,i,a,s){e(o)(this,t),this.snapshotVersion=n,this.targetChanges=r,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=s}return e(s)(t,null,[{key:"createSynthesizedRemoteEventForCurrentChange",value:function(e,n,r){var i=new Map;return i.set(e,Mp.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new t(jf.min(),i,Op(),Tp(),Dp())}}]),t}(),Mp=function(){"use strict";function t(n,r,i,a,s){e(o)(this,t),this.resumeToken=n,this.current=r,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=s}return e(s)(t,null,[{key:"createSynthesizedTargetChangeForCurrentChange",value:function(e,n,r){return new t(r,n,Dp(),Dp(),Dp())}}]),t}(),Pp=function t(n,r,i,a){"use strict";e(o)(this,t),this.It=n,this.removedTargetIds=r,this.key=i,this.Tt=a},Up=function t(n,r){"use strict";e(o)(this,t),this.targetId=n,this.Et=r},Fp=function t(n,r){"use strict";var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:dd.EMPTY_BYTE_STRING,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e(o)(this,t),this.state=n,this.targetIds=r,this.resumeToken=i,this.cause=a},Vp=function(){"use strict";function t(){e(o)(this,t),this.At=0,this.Rt=qp(),this.bt=dd.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}return e(s)(t,[{key:"current",get:function(){return this.Pt}},{key:"resumeToken",get:function(){return this.bt}},{key:"Vt",get:function(){return 0!==this.At}},{key:"St",get:function(){return this.vt}},{key:"Dt",value:function(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}},{key:"Ct",value:function(){var e=Dp(),t=Dp(),n=Dp();return this.Rt.forEach((function(r,i){switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:bf()}})),new Mp(this.bt,this.Pt,e,t,n)}},{key:"xt",value:function(){this.vt=!1,this.Rt=qp()}},{key:"Nt",value:function(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}},{key:"kt",value:function(e){this.vt=!0,this.Rt=this.Rt.remove(e)}},{key:"Ot",value:function(){this.At+=1}},{key:"Mt",value:function(){this.At-=1}},{key:"Ft",value:function(){this.vt=!0,this.Pt=!0}}]),t}(),jp=function(){"use strict";function t(n){e(o)(this,t),this.$t=n,this.Bt=new Map,this.Lt=Tp(),this.qt=Bp(),this.Ut=new uv(Uf)}return e(s)(t,[{key:"Kt",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.It[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;e.Tt&&e.Tt.isFoundDocument()?this.Gt(o,e.Tt):this.Qt(o,e.key,e.Tt)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}var s=!0,u=!1,c=void 0;try{for(var l,h=e.removedTargetIds[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;this.Qt(f,e.key,e.Tt)}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}}},{key:"jt",value:function(e){var t=this;this.forEachTarget(e,(function(n){var r=t.Wt(n);switch(e.state){case 0:t.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||t.removeTarget(n);break;case 3:t.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:t.zt(n)&&(t.Ht(n),r.Dt(e.resumeToken));break;default:bf()}}))}},{key:"forEachTarget",value:function(e,t){var n=this;e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((function(e,r){n.zt(r)&&t(r)}))}},{key:"Jt",value:function(e){var t=e.targetId,n=e.Et.count,r=this.Yt(t);if(r){var i=r.target;if(gv(i))if(0===n){var a=new Hf(i.path);this.Qt(t,a,dv.newNoDocument(a,jf.min()))}else Tf(1===n);else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}},{key:"Zt",value:function(e){var t=this,n=new Map;this.Bt.forEach((function(r,i){var a=t.Yt(i);if(a){if(r.current&&gv(a.target)){var o=new Hf(a.target.path);null!==t.Lt.get(o)||t.te(i,o)||t.Qt(i,o,dv.newNoDocument(o,e))}r.St&&(n.set(i,r.Ct()),r.xt())}}));var r=Dp();this.qt.forEach((function(e,n){var i=t,a=!0;n.forEachWhile((function(e){var t=i.Yt(e);return!t||2===t.purpose||(a=!1,!1)})),a&&(r=r.add(e))})),this.Lt.forEach((function(t,n){return n.setReadTime(e)}));var i=new Lp(e,n,this.Ut,this.Lt,r);return this.Lt=Tp(),this.qt=Bp(),this.Ut=new uv(Uf),i}},{key:"Gt",value:function(e,t){if(this.zt(e)){var n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}}},{key:"Qt",value:function(e,t,n){if(this.zt(e)){var r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}}},{key:"removeTarget",value:function(e){this.Bt.delete(e)}},{key:"Xt",value:function(e){var t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}},{key:"Ot",value:function(e){this.Wt(e).Ot()}},{key:"Wt",value:function(e){var t=this.Bt.get(e);return t||(t=new Vp,this.Bt.set(e,t)),t}},{key:"ee",value:function(e){var t=this.qt.get(e);return t||(t=new uv(Uf),this.qt=this.qt.insert(e,t)),t}},{key:"zt",value:function(e){var t=null!==this.Yt(e);return t||mf("WatchChangeAggregator","Detected inactive target",e),t}},{key:"Yt",value:function(e){var t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}},{key:"Ht",value:function(e){var t=this;this.Bt.set(e,new Vp),this.$t.getRemoteKeysForTarget(e).forEach((function(n){t.Qt(e,n,null)}))}},{key:"te",value:function(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}]),t}();function Bp(){return new av(Hf.comparator)}function qp(){return new av(Hf.comparator)}
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
 */var Kp={asc:"ASCENDING",desc:"DESCENDING"},zp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hp={and:"AND",or:"OR"},Gp=function t(n,r){"use strict";e(o)(this,t),this.databaseId=n,this.wt=r};function Wp(e,t){return e.wt?"".concat(new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+t.nanoseconds).slice(-9),"Z"):{seconds:""+t.seconds,nanos:t.nanoseconds}}function Qp(e,t){return e.wt?t.toBase64():t.toUint8Array()}function Yp(e,t){return Wp(e,t.toTimestamp())}function Jp(e){return Tf(!!e),jf.fromTimestamp((t=pd(e),new Vf(t.seconds,t.nanos)));var t}function Xp(e,t){return(n=e,new qf(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function $p(e){var t=qf.fromString(e);return Tf(yy(t)),t}function Zp(e,t){return Xp(e.databaseId,t.path)}function ey(e,t){var n=$p(t);if(n.get(1)!==e.databaseId.projectId)throw new Ef(_f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ef(_f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Hf(iy(n))}function ty(e,t){return Xp(e.databaseId,t)}function ny(e){var t=$p(e);return 4===t.length?qf.emptyPath():iy(t)}function ry(e){return new qf(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function iy(e){return Tf(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ay(e,t,n){return{name:Zp(e,t),fields:n.value.mapValue.fields}}function oy(e,t){var n,r,i;if(t instanceof up)n={update:ay(e,t.key,t.value)};else if(t instanceof pp)n={delete:Zp(e,t.key)};else if(t instanceof cp)n={update:ay(e,t.key,t.data),updateMask:(r=t.fieldMask,i=[],r.fields.forEach((function(e){return i.push(e.canonicalString())})),{fieldPaths:i})};else{if(!(t instanceof yp))return bf();n={verify:Zp(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((function(e){return function(e,t){var n=t.transform;if(n instanceof zv)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Hv)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Wv)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Yv)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw bf()}(0,e)}))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Yp(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:bf()}(e,t.precondition)),n}function sy(e,t){return{documents:[ty(e,t.path)]}}function uy(e,t){var n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=ty(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ty(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);var i=function(e){if(0!==e.length)return py(qd.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);var a=function(e){if(0!==e.length)return e.map((function(e){return{field:dy((t=e).field),direction:hy(t.dir)};var t}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);var o,s,u,c=(o=e,s=t.limit,o.wt||cd(s)?s:{value:s});return null!==c&&(n.structuredQuery.limit=c),t.startAt&&(n.structuredQuery.startAt={before:(u=t.startAt).inclusive,values:u.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function cy(e){var t=ny(e.parent),n=e.structuredQuery,r=n.from?n.from.length:0,i=null;if(r>0){Tf(1===r);var a=n.from[0];a.allDescendants?i=a.collectionId:t=t.child(a.collectionId)}var o,s,u=[];n.where&&(o=n.where,u=(s=ly(o))instanceof qd&&zd(s)?s.getFilters():[s]);var c=[];n.orderBy&&(c=n.orderBy.map((function(e){return new rv(vy((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));var l=null;n.limit&&(l=function(e){var t;return cd(t="object"==typeof e?e.value:e)?null:t}(n.limit));var h=null;n.startAt&&(h=function(e){var t=!!e.before,n=e.values||[];return new Ud(n,t)}(n.startAt));var f=null;return n.endAt&&(f=function(e){var t=!e.before,n=e.values||[];return new Ud(n,t)}(n.endAt)),wv(t,i,c,u,l,"F",h,f)}function ly(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":var t=vy(e.unaryFilter.field);return Bd.create(t,"==",{doubleValue:NaN});case"IS_NULL":var n=vy(e.unaryFilter.field);return Bd.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":var r=vy(e.unaryFilter.field);return Bd.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":var i=vy(e.unaryFilter.field);return Bd.create(i,"!=",{nullValue:"NULL_VALUE"});default:return bf()}}(e):void 0!==e.fieldFilter?(n=e,Bd.create(vy(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return bf()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,qd.create(t.compositeFilter.filters.map((function(e){return ly(e)})),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return bf()}}(t.compositeFilter.op))):bf();var t,n}function hy(e){return Kp[e]}function fy(e){return zp[e]}function dy(e){return{fieldPath:e.canonicalString()}}function vy(e){return zf.fromServerFormat(e.fieldPath)}function py(e){return e instanceof Bd?function(e){if("=="===e.op){if(Od(e.value))return{unaryFilter:{field:dy(e.field),op:"IS_NAN"}};if(Rd(e.value))return{unaryFilter:{field:dy(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Od(e.value))return{unaryFilter:{field:dy(e.field),op:"IS_NOT_NAN"}};if(Rd(e.value))return{unaryFilter:{field:dy(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dy(e.field),op:fy(e.op),value:e.value}}}(e):e instanceof qd?(r=(t=e).getFilters().map((function(e){return py(e)})),1===r.length?r[0]:{compositeFilter:{op:(n=t.op,Hp[n]),filters:r}}):bf();var t,n,r}function yy(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */var my=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],gy=(e(f)(my).concat(["documentOverlays"]),["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"]),ky=gy;
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
 */e(f)(ky).concat(["indexConfiguration","indexState","indexEntries"]);
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
var wy=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.batchId=n,this.localWriteTime=r,this.baseMutations=i,this.mutations=a}return e(s)(t,[{key:"applyToRemoteDocument",value:function(e,t){for(var n=t.mutationResults,r=0;r<this.mutations.length;r++){var i=this.mutations[r];i.key.isEqual(e.key)&&ip(i,e,n[r])}}},{key:"applyToLocalView",value:function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=this.baseMutations[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;s.key.isEqual(e.key)&&(t=ap(s,e,t,this.localWriteTime))}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}var u=!0,c=!1,l=void 0;try{for(var h,f=this.mutations[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=h.value;d.key.isEqual(e.key)&&(t=ap(d,e,t,this.localWriteTime))}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}return t}},{key:"applyToLocalDocumentSet",value:function(e,t){var n=this,r=Sp();return this.mutations.forEach((function(i){var a=e.get(i.key),o=a.overlayedDocument,s=n.applyToLocalView(o,a.mutatedFields),u=rp(o,s=t.has(i.key)?null:s);null!==u&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(jf.min())})),r}},{key:"keys",value:function(){return this.mutations.reduce((function(e,t){return e.add(t.key)}),Dp())}},{key:"isEqual",value:function(e){return this.batchId===e.batchId&&Ff(this.mutations,e.mutations,(function(e,t){return sp(e,t)}))&&Ff(this.baseMutations,e.baseMutations,(function(e,t){return sp(e,t)}))}}]),t}(),by=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.batch=n,this.commitVersion=r,this.mutationResults=i,this.docVersions=a}return e(s)(t,null,[{key:"from",value:function(e,n,r){Tf(e.mutations.length===r.length);for(var i=Cp,a=e.mutations,o=0;o<a.length;o++)i=i.insert(a[o].key,r[o].version);return new t(e,n,r,i)}}]),t}(),Ty=function(){"use strict";function t(n,r){e(o)(this,t),this.largestBatchId=n,this.mutation=r}return e(s)(t,[{key:"getKey",value:function(){return this.mutation.key}},{key:"isEqual",value:function(e){return null!==e&&this.mutation===e.mutation}},{key:"toString",value:function(){return"Overlay{\n      largestBatchId: ".concat(this.largestBatchId,",\n      mutation: ").concat(this.mutation.toString(),"\n    }")}}]),t}(),Iy=function(){"use strict";function t(n,r,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:jf.min(),u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:jf.min(),c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:dd.EMPTY_BYTE_STRING;e(o)(this,t),this.target=n,this.targetId=r,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c}return e(s)(t,[{key:"withSequenceNumber",value:function(e){return new t(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}},{key:"withResumeToken",value:function(e,n){return new t(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}},{key:"withLastLimboFreeSnapshotVersion",value:function(e){return new t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}]),t}(),_y=function t(n){"use strict";e(o)(this,t),this.ie=n};function Ey(e){var t=cy({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Cv(t,t.limit,"L"):t}
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
 */var xy=function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,[{key:"ue",value:function(e,t){this.ce(e,t),t.ae()}},{key:"ce",value:function(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(yd(e.integerValue));else if("doubleValue"in e){var n=yd(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),ld(n)?t.le(0):t.le(n))}else if("timestampValue"in e){var r=e.timestampValue;this.he(t,20),"string"==typeof r?t.fe(r):(t.fe("".concat(r.seconds||"")),t.le(r.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(md(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){var i=e.geoPointValue;this.he(t,45),t.le(i.latitude||0),t.le(i.longitude||0)}else"mapValue"in e?Pd(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):bf()}},{key:"de",value:function(e,t){this.he(t,25),this.pe(e,t)}},{key:"pe",value:function(e,t){t.fe(e)}},{key:"ge",value:function(e,t){var n=e.fields||{};this.he(t,55);var r=!0,i=!1,a=void 0;try{for(var o,s=Object.keys(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.de(u,t),this.ce(n[u],t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"ye",value:function(e,t){var n=e.values||[];this.he(t,50);var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.ce(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"me",value:function(e,t){var n=this;this.he(t,37),Hf.fromName(e).path.forEach((function(e){n.he(t,60),n.pe(e,t)}))}},{key:"he",value:function(e,t){e.le(t)}},{key:"_e",value:function(e){e.le(2)}}]),t}();xy.Ie=new xy;
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
var Sy=function(){"use strict";function t(){e(o)(this,t),this.Je=new Ay}return e(s)(t,[{key:"addToCollectionParentIndex",value:function(e,t){return this.Je.add(t),td.resolve()}},{key:"getCollectionParents",value:function(e,t){return td.resolve(this.Je.getEntries(t))}},{key:"addFieldIndex",value:function(e,t){return td.resolve()}},{key:"deleteFieldIndex",value:function(e,t){return td.resolve()}},{key:"getDocumentsMatchingTarget",value:function(e,t){return td.resolve(null)}},{key:"getIndexType",value:function(e,t){return td.resolve(0)}},{key:"getFieldIndexes",value:function(e,t){return td.resolve([])}},{key:"getNextCollectionGroupToUpdate",value:function(e){return td.resolve(null)}},{key:"getMinOffset",value:function(e,t){return td.resolve(Yf.min())}},{key:"getMinOffsetFromCollectionGroup",value:function(e,t){return td.resolve(Yf.min())}},{key:"updateCollectionGroup",value:function(e,t,n){return td.resolve()}},{key:"updateIndexEntries",value:function(e,t){return td.resolve()}}]),t}(),Ay=function(){"use strict";function t(){e(o)(this,t),this.index={}}return e(s)(t,[{key:"add",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new uv(qf.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}},{key:"has",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}},{key:"getEntries",value:function(e){return(this.index[e]||new uv(qf.comparator)).toArray()}}]),t}();new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
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
var Cy=function(){"use strict";function t(n,r,i){e(o)(this,t),this.cacheSizeCollectionThreshold=n,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=i}return e(s)(t,null,[{key:"withCacheSize",value:function(e){return new t(e,t.DEFAULT_COLLECTION_PERCENTILE,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}]),t}();
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
 */Cy.DEFAULT_COLLECTION_PERCENTILE=10,Cy.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Cy.DEFAULT=new Cy(41943040,Cy.DEFAULT_COLLECTION_PERCENTILE,Cy.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Cy.DISABLED=new Cy(-1,0,0);
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
var Ny=function(){"use strict";function t(n){e(o)(this,t),this.bn=n}return e(s)(t,[{key:"next",value:function(){return this.bn+=2,this.bn}}],[{key:"Pn",value:function(){return new t(0)}},{key:"vn",value:function(){return new t(-1)}}]),t}();
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
var Dy=function(){"use strict";function t(){e(o)(this,t),this.changes=new wp((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)})),this.changesApplied=!1}return e(s)(t,[{key:"addEntry",value:function(e){this.assertNotApplied(),this.changes.set(e.key,e)}},{key:"removeEntry",value:function(e,t){this.assertNotApplied(),this.changes.set(e,dv.newInvalidDocument(e).setReadTime(t))}},{key:"getEntry",value:function(e,t){this.assertNotApplied();var n=this.changes.get(t);return void 0!==n?td.resolve(n):this.getFromCache(e,t)}},{key:"getEntries",value:function(e,t){return this.getAllFromCache(e,t)}},{key:"apply",value:function(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}},{key:"assertNotApplied",value:function(){}}]),t}();
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
var Ry=function t(n,r){"use strict";e(o)(this,t),this.overlayedDocument=n,this.mutatedFields=r},Oy=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.remoteDocumentCache=n,this.mutationQueue=r,this.documentOverlayCache=i,this.indexManager=a}return e(s)(t,[{key:"getDocument",value:function(e,t){var n=this,r=null;return this.documentOverlayCache.getOverlay(e,t).next((function(i){return r=i,n.remoteDocumentCache.getEntry(e,t)})).next((function(e){return null!==r&&ap(r.mutation,e,lv.empty(),Vf.now()),e}))}},{key:"getDocuments",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.getLocalViewOfDocuments(e,t,Dp()).next((function(){return t}))}))}},{key:"getLocalViewOfDocuments",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Dp(),r=this,i=xp();return this.populateOverlays(e,i,t).next((function(){return r.computeViews(e,t,i,n).next((function(e){var t=_p();return e.forEach((function(e,n){t=t.insert(e,n.overlayedDocument)})),t}))}))}},{key:"getOverlayedDocuments",value:function(e,t){var n=this,r=xp();return this.populateOverlays(e,r,t).next((function(){return n.computeViews(e,t,r,Dp())}))}},{key:"populateOverlays",value:function(e,t,n){var r=[];return n.forEach((function(e){t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((function(e){e.forEach((function(e,n){t.set(e,n)}))}))}},{key:"computeViews",value:function(e,t,n,r){var i=Tp(),a=Ap(),o=Ap();return t.forEach((function(e,t){var o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof cp)?i=i.insert(t.key,t):void 0!==o&&(a.set(t.key,o.mutation.getFieldMask()),ap(o.mutation,t,o.mutation.getFieldMask(),Vf.now()))})),this.recalculateAndSaveOverlays(e,i).next((function(e){return e.forEach((function(e,t){return a.set(e,t)})),t.forEach((function(e,t){var n;return o.set(e,new Ry(t,null!==(n=a.get(e))&&void 0!==n?n:null))})),o}))}},{key:"recalculateAndSaveOverlays",value:function(e,t){var n=this,r=Ap(),i=new av((function(e,t){return e-t})),a=Dp();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((function(e){var n=!0,a=!1,o=void 0;try{for(var s,u=function(e,n){var a=n.value;a.keys().forEach((function(e){var n=t.get(e);if(null!==n){var o=r.get(e)||lv.empty();o=a.applyToLocalView(n,o),r.set(e,o);var s=(i.get(a.batchId)||Dp()).add(e);i=i.insert(a.batchId,s)}}))},c=e[Symbol.iterator]();!(n=(s=c.next()).done);n=!0)u(0,s)}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}})).next((function(){for(var o=[],s=i.getReverseIterator();s.hasNext();){var u=s.getNext(),c=u.key,l=u.value,h=Sp();l.forEach((function(e){if(!a.has(e)){var n=rp(t.get(e),r.get(e));null!==n&&h.set(e,n),a=a.add(e)}})),o.push(n.documentOverlayCache.saveOverlays(e,c,h))}return td.waitFor(o)})).next((function(){return r}))}},{key:"recalculateAndSaveOverlaysForDocumentKeys",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.recalculateAndSaveOverlays(e,t)}))}},{key:"getDocumentsMatchingQuery",value:function(e,t,n){return r=t,Hf.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Ev(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var r}},{key:"getNextDocuments",value:function(e,t,n,r){var i=this;return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((function(a){var o=i,s=r-a.size>0?i.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-a.size):td.resolve(xp()),u=-1,c=a;return s.next((function(t){return td.forEach(t,(function(t,n){return u<n.largestBatchId&&(u=n.largestBatchId),a.get(t)?td.resolve():o.remoteDocumentCache.getEntry(e,t).next((function(e){c=c.insert(t,e)}))})).next((function(){return o.populateOverlays(e,t,a)})).next((function(){return o.computeViews(e,c,t,Dp())})).next((function(e){return{batchId:u,changes:Ep(e)}}))}))}))}},{key:"getDocumentsMatchingDocumentQuery",value:function(e,t){return this.getDocument(e,new Hf(t)).next((function(e){var t=_p();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}},{key:"getDocumentsMatchingCollectionGroupQuery",value:function(e,t,n){var r=this,i=t.collectionGroup,a=_p();return this.indexManager.getCollectionParents(e,i).next((function(o){return td.forEach(o,(function(o){var s,u,c=(s=t,u=o.child(i),new kv(u,null,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt));return r.getDocumentsMatchingCollectionQuery(e,c,n).next((function(e){e.forEach((function(e,t){a=a.insert(e,t)}))}))})).next((function(){return a}))}))}},{key:"getDocumentsMatchingCollectionQuery",value:function(e,t,n){var r,i=this;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((function(a){return r=a,i.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)})).next((function(e){e.forEach((function(e,t){var n=t.getKey();null===r.get(n)&&(r=r.insert(n,dv.newInvalidDocument(n)))}));var n=_p();return r.forEach((function(r,i){var a=e.get(r);void 0!==a&&ap(a.mutation,i,lv.empty(),Vf.now()),Ov(t,i)&&(n=n.insert(r,i))})),n}))}}]),t}(),Ly=function(){"use strict";function t(n){e(o)(this,t),this.yt=n,this.Zn=new Map,this.ts=new Map}return e(s)(t,[{key:"getBundleMetadata",value:function(e,t){return td.resolve(this.Zn.get(t))}},{key:"saveBundleMetadata",value:function(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:Jp(n.createTime)}),td.resolve()}},{key:"getNamedQuery",value:function(e,t){return td.resolve(this.ts.get(t))}},{key:"saveNamedQuery",value:function(e,t){return this.ts.set(t.name,{name:(n=t).name,query:Ey(n.bundledQuery),readTime:Jp(n.readTime)}),td.resolve();var n}}]),t}(),My=function(){"use strict";function t(){e(o)(this,t),this.overlays=new av(Hf.comparator),this.es=new Map}return e(s)(t,[{key:"getOverlay",value:function(e,t){return td.resolve(this.overlays.get(t))}},{key:"getOverlays",value:function(e,t){var n=this,r=xp();return td.forEach(t,(function(t){return n.getOverlay(e,t).next((function(e){null!==e&&r.set(t,e)}))})).next((function(){return r}))}},{key:"saveOverlays",value:function(e,t,n){var r=this;return n.forEach((function(n,i){r.oe(e,t,i)})),td.resolve()}},{key:"removeOverlaysForBatchId",value:function(e,t,n){var r=this,i=this.es.get(n);return void 0!==i&&(i.forEach((function(e){return r.overlays=r.overlays.remove(e)})),this.es.delete(n)),td.resolve()}},{key:"getOverlaysForCollection",value:function(e,t,n){for(var r=xp(),i=t.length+1,a=new Hf(t.child("")),o=this.overlays.getIteratorFrom(a);o.hasNext();){var s=o.getNext().value,u=s.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&s.largestBatchId>n&&r.set(s.getKey(),s)}return td.resolve(r)}},{key:"getOverlaysForCollectionGroup",value:function(e,t,n,r){for(var i=new av((function(e,t){return e-t})),a=this.overlays.getIterator();a.hasNext();){var o=a.getNext().value;if(o.getKey().getCollectionGroup()===t&&o.largestBatchId>n){var s=i.get(o.largestBatchId);null===s&&(s=xp(),i=i.insert(o.largestBatchId,s)),s.set(o.getKey(),o)}}for(var u=xp(),c=i.getIterator();c.hasNext()&&(c.getNext().value.forEach((function(e,t){return u.set(e,t)})),!(u.size()>=r)););return td.resolve(u)}},{key:"oe",value:function(e,t,n){var r=this.overlays.get(n.key);if(null!==r){var i=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new Ty(t,n));var a=this.es.get(t);void 0===a&&(a=Dp(),this.es.set(t,a)),this.es.set(t,a.add(n.key))}}]),t}(),Py=function(){"use strict";function t(){e(o)(this,t),this.ns=new uv(Uy.ss),this.rs=new uv(Uy.os)}return e(s)(t,[{key:"isEmpty",value:function(){return this.ns.isEmpty()}},{key:"addReference",value:function(e,t){var n=new Uy(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}},{key:"us",value:function(e,t){var n=this;e.forEach((function(e){return n.addReference(e,t)}))}},{key:"removeReference",value:function(e,t){this.cs(new Uy(e,t))}},{key:"hs",value:function(e,t){var n=this;e.forEach((function(e){return n.removeReference(e,t)}))}},{key:"ls",value:function(e){var t=this,n=new Hf(new qf([])),r=new Uy(n,e),i=new Uy(n,e+1),a=[];return this.rs.forEachInRange([r,i],(function(e){t.cs(e),a.push(e.key)})),a}},{key:"fs",value:function(){var e=this;this.ns.forEach((function(t){return e.cs(t)}))}},{key:"cs",value:function(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}},{key:"ds",value:function(e){var t=new Hf(new qf([])),n=new Uy(t,e),r=new Uy(t,e+1),i=Dp();return this.rs.forEachInRange([n,r],(function(e){i=i.add(e.key)})),i}},{key:"containsKey",value:function(e){var t=new Uy(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}]),t}(),Uy=function(){"use strict";function t(n,r){e(o)(this,t),this.key=n,this._s=r}return e(s)(t,null,[{key:"ss",value:function(e,t){return Hf.comparator(e.key,t.key)||Uf(e._s,t._s)}},{key:"os",value:function(e,t){return Uf(e._s,t._s)||Hf.comparator(e.key,t.key)}}]),t}(),Fy=function(){"use strict";function t(n,r){e(o)(this,t),this.indexManager=n,this.referenceDelegate=r,this.mutationQueue=[],this.ws=1,this.gs=new uv(Uy.ss)}return e(s)(t,[{key:"checkEmpty",value:function(e){return td.resolve(0===this.mutationQueue.length)}},{key:"addMutationBatch",value:function(e,t,n,r){var i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];var a=new wy(i,t,n,r);this.mutationQueue.push(a);var o=!0,s=!1,u=void 0;try{for(var c,l=r[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=c.value;this.gs=this.gs.add(new Uy(h.key,i)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast())}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return td.resolve(a)}},{key:"lookupMutationBatch",value:function(e,t){return td.resolve(this.ys(t))}},{key:"getNextMutationBatchAfterBatchId",value:function(e,t){var n=t+1,r=this.ps(n),i=r<0?0:r;return td.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}},{key:"getHighestUnacknowledgedBatchId",value:function(){return td.resolve(0===this.mutationQueue.length?-1:this.ws-1)}},{key:"getAllMutationBatches",value:function(e){return td.resolve(this.mutationQueue.slice())}},{key:"getAllMutationBatchesAffectingDocumentKey",value:function(e,t){var n=this,r=new Uy(t,0),i=new Uy(t,Number.POSITIVE_INFINITY),a=[];return this.gs.forEachInRange([r,i],(function(e){var t=n.ys(e._s);a.push(t)})),td.resolve(a)}},{key:"getAllMutationBatchesAffectingDocumentKeys",value:function(e,t){var n=this,r=new uv(Uf);return t.forEach((function(e){var t=new Uy(e,0),i=new Uy(e,Number.POSITIVE_INFINITY);n.gs.forEachInRange([t,i],(function(e){r=r.add(e._s)}))})),td.resolve(this.Is(r))}},{key:"getAllMutationBatchesAffectingQuery",value:function(e,t){var n=t.path,r=n.length+1,i=n;Hf.isDocumentKey(i)||(i=i.child(""));var a=new Uy(new Hf(i),0),o=new uv(Uf);return this.gs.forEachWhile((function(e){var t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)}),a),td.resolve(this.Is(o))}},{key:"Is",value:function(e){var t=this,n=[];return e.forEach((function(e){var r=t.ys(e);null!==r&&n.push(r)})),n}},{key:"removeMutationBatch",value:function(e,t){var n=this;Tf(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();var r=this.gs;return td.forEach(t.mutations,(function(i){var a=new Uy(i.key,t.batchId);return r=r.delete(a),n.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((function(){n.gs=r}))}},{key:"An",value:function(e){}},{key:"containsKey",value:function(e,t){var n=new Uy(t,0),r=this.gs.firstAfterOrEqual(n);return td.resolve(t.isEqual(r&&r.key))}},{key:"performConsistencyCheck",value:function(e){return this.mutationQueue.length,td.resolve()}},{key:"Ts",value:function(e,t){return this.ps(e)}},{key:"ps",value:function(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}},{key:"ys",value:function(e){var t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}]),t}(),Vy=function(){"use strict";function t(n){e(o)(this,t),this.Es=n,this.docs=new av(Hf.comparator),this.size=0}return e(s)(t,[{key:"setIndexManager",value:function(e){this.indexManager=e}},{key:"addEntry",value:function(e,t){var n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}},{key:"removeEntry",value:function(e){var t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}},{key:"getEntry",value:function(e,t){var n=this.docs.get(t);return td.resolve(n?n.document.mutableCopy():dv.newInvalidDocument(t))}},{key:"getEntries",value:function(e,t){var n=this,r=Tp();return t.forEach((function(e){var t=n.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():dv.newInvalidDocument(e))})),td.resolve(r)}},{key:"getAllFromCollection",value:function(e,t,n){for(var r=Tp(),i=new Hf(t.child("")),a=this.docs.getIteratorFrom(i);a.hasNext();){var o=a.getNext(),s=o.key,u=o.value.document;if(!t.isPrefixOf(s.path))break;s.path.length>t.length+1||Jf(Qf(u),n)<=0||(r=r.insert(u.key,u.mutableCopy()))}return td.resolve(r)}},{key:"getAllFromCollectionGroup",value:function(e,t,n,r){bf()}},{key:"As",value:function(e,t){return td.forEach(this.docs,(function(e){return t(e)}))}},{key:"newChangeBuffer",value:function(e){return new jy(this)}},{key:"getSize",value:function(e){return td.resolve(this.size)}}]),t}(),jy=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this)).Yn=t,e(ou)(i)}return e(s)(r,[{key:"applyChanges",value:function(e){var t=this,n=[];return this.changes.forEach((function(r,i){i.isValidDocument()?n.push(t.Yn.addEntry(e,i)):t.Yn.removeEntry(r)})),td.waitFor(n)}},{key:"getFromCache",value:function(e,t){return this.Yn.getEntry(e,t)}},{key:"getAllFromCache",value:function(e,t){return this.Yn.getEntries(e,t)}}]),r}(Dy),By=function(){"use strict";function t(n){e(o)(this,t),this.persistence=n,this.Rs=new wp((function(e){return yv(e)}),mv),this.lastRemoteSnapshotVersion=jf.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Py,this.targetCount=0,this.vs=Ny.Pn()}return e(s)(t,[{key:"forEachTarget",value:function(e,t){return this.Rs.forEach((function(e,n){return t(n)})),td.resolve()}},{key:"getLastRemoteSnapshotVersion",value:function(e){return td.resolve(this.lastRemoteSnapshotVersion)}},{key:"getHighestSequenceNumber",value:function(e){return td.resolve(this.bs)}},{key:"allocateTargetId",value:function(e){return this.highestTargetId=this.vs.next(),td.resolve(this.highestTargetId)}},{key:"setTargetsMetadata",value:function(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),td.resolve()}},{key:"Dn",value:function(e){this.Rs.set(e.target,e);var t=e.targetId;t>this.highestTargetId&&(this.vs=new Ny(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}},{key:"addTargetData",value:function(e,t){return this.Dn(t),this.targetCount+=1,td.resolve()}},{key:"updateTargetData",value:function(e,t){return this.Dn(t),td.resolve()}},{key:"removeTargetData",value:function(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,td.resolve()}},{key:"removeTargets",value:function(e,t,n){var r=this,i=0,a=[];return this.Rs.forEach((function(o,s){s.sequenceNumber<=t&&null===n.get(s.targetId)&&(r.Rs.delete(o),a.push(r.removeMatchingKeysForTargetId(e,s.targetId)),i++)})),td.waitFor(a).next((function(){return i}))}},{key:"getTargetCount",value:function(e){return td.resolve(this.targetCount)}},{key:"getTargetData",value:function(e,t){var n=this.Rs.get(t)||null;return td.resolve(n)}},{key:"addMatchingKeys",value:function(e,t,n){return this.Ps.us(t,n),td.resolve()}},{key:"removeMatchingKeys",value:function(e,t,n){this.Ps.hs(t,n);var r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((function(t){i.push(r.markPotentiallyOrphaned(e,t))})),td.waitFor(i)}},{key:"removeMatchingKeysForTargetId",value:function(e,t){return this.Ps.ls(t),td.resolve()}},{key:"getMatchingKeysForTargetId",value:function(e,t){var n=this.Ps.ds(t);return td.resolve(n)}},{key:"containsKey",value:function(e,t){return td.resolve(this.Ps.containsKey(t))}}]),t}(),qy=function(){"use strict";function t(n,r){var i=this;e(o)(this,t),this.Vs={},this.overlays={},this.Ss=new rd(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=n(this),this.Cs=new By(this),this.indexManager=new Sy,this.remoteDocumentCache=new Vy((function(e){return i.referenceDelegate.xs(e)})),this.yt=new _y(r),this.Ns=new Ly(this.yt)}return e(s)(t,[{key:"start",value:function(){return Promise.resolve()}},{key:"shutdown",value:function(){return this.Ds=!1,Promise.resolve()}},{key:"started",get:function(){return this.Ds}},{key:"setDatabaseDeletedListener",value:function(){}},{key:"setNetworkEnabled",value:function(){}},{key:"getIndexManager",value:function(e){return this.indexManager}},{key:"getDocumentOverlayCache",value:function(e){var t=this.overlays[e.toKey()];return t||(t=new My,this.overlays[e.toKey()]=t),t}},{key:"getMutationQueue",value:function(e,t){var n=this.Vs[e.toKey()];return n||(n=new Fy(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}},{key:"getTargetCache",value:function(){return this.Cs}},{key:"getRemoteDocumentCache",value:function(){return this.remoteDocumentCache}},{key:"getBundleCache",value:function(){return this.Ns}},{key:"runTransaction",value:function(e,t,n){var r=this;mf("MemoryPersistence","Starting transaction:",e);var i=new Ky(this.Ss.next());return this.referenceDelegate.ks(),n(i).next((function(e){return r.referenceDelegate.Os(i).next((function(){return e}))})).toPromise().then((function(e){return i.raiseOnCommittedEvent(),e}))}},{key:"Ms",value:function(e,t){return td.or(Object.values(this.Vs).map((function(n){return function(){return n.containsKey(e,t)}})))}}]),t}(),Ky=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this)).currentSequenceNumber=t,e(ou)(i)}return r}($f),zy=function(){"use strict";function t(n){e(o)(this,t),this.persistence=n,this.Fs=new Py,this.$s=null}return e(s)(t,[{key:"Ls",get:function(){if(this.$s)return this.$s;throw bf()}},{key:"addReference",value:function(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),td.resolve()}},{key:"removeReference",value:function(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),td.resolve()}},{key:"markPotentiallyOrphaned",value:function(e,t){return this.Ls.add(t.toString()),td.resolve()}},{key:"removeTarget",value:function(e,t){var n=this;this.Fs.ls(t.targetId).forEach((function(e){return n.Ls.add(e.toString())}));var r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((function(e){var t=n;e.forEach((function(e){return t.Ls.add(e.toString())}))})).next((function(){return r.removeTargetData(e,t)}))}},{key:"ks",value:function(){this.$s=new Set}},{key:"Os",value:function(e){var t=this,n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return td.forEach(this.Ls,(function(r){var i=Hf.fromPath(r);return t.qs(e,i).next((function(e){e||n.removeEntry(i,jf.min())}))})).next((function(){return t.$s=null,n.apply(e)}))}},{key:"updateLimboDocument",value:function(e,t){var n=this;return this.qs(e,t).next((function(e){e?n.Ls.delete(t.toString()):n.Ls.add(t.toString())}))}},{key:"xs",value:function(e){return 0}},{key:"qs",value:function(e,t){var n=this;return td.or([function(){return td.resolve(n.Fs.containsKey(t))},function(){return n.persistence.getTargetCache().containsKey(e,t)},function(){return n.persistence.Ms(e,t)}])}}],[{key:"Bs",value:function(e){return new t(e)}}]),t}();
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
var Hy=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.targetId=n,this.fromCache=r,this.Si=i,this.Di=a}return e(s)(t,null,[{key:"Ci",value:function(e,n){var r=Dp(),i=Dp(),a=!0,o=!1,s=void 0;try{for(var u,c=n.docChanges[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:i=i.add(l.doc.key)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new t(e,n.fromCache,r,i)}}]),t}(),Gy=function(){"use strict";function t(){e(o)(this,t),this.xi=!1}return e(s)(t,[{key:"initialize",value:function(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}},{key:"getDocumentsMatchingQuery",value:function(e,t,n,r){var i=this;return this.ki(e,t).next((function(a){return a||i.Oi(e,t,r,n)})).next((function(n){return n||i.Mi(e,t)}))}},{key:"ki",value:function(t,n){var r=this;if(Tv(n))return td.resolve(null);var i=Sv(n);return this.indexManager.getIndexType(t,i).next((function(a){return 0===a?null:(null!==n.limit&&1===a&&(n=Cv(n,null,"F"),i=Sv(n)),r.indexManager.getDocumentsMatchingTarget(t,i).next((function(a){var o=r,s=Dp.apply(void 0,e(f)(a));return r.Ni.getDocuments(t,s).next((function(e){return o.indexManager.getMinOffset(t,i).next((function(r){var i=o.Fi(n,e);return o.$i(n,i,s,r.readTime)?o.ki(t,Cv(n,null,"F")):o.Bi(t,i,n,r)}))}))})))}))}},{key:"Oi",value:function(e,t,n,r){var i=this;return Tv(t)||r.isEqual(jf.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((function(a){var o=i.Fi(t,a);return i.$i(t,o,n,r)?i.Mi(e,t):(yf()<=de.DEBUG&&mf("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Rv(t)),i.Bi(e,o,t,Wf(r,-1)))}))}},{key:"Fi",value:function(e,t){var n=new uv(Mv(e));return t.forEach((function(t,r){Ov(e,r)&&(n=n.add(r))})),n}},{key:"$i",value:function(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;var i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}},{key:"Mi",value:function(e,t){return yf()<=de.DEBUG&&mf("QueryEngine","Using full collection scan to execute query:",Rv(t)),this.Ni.getDocumentsMatchingQuery(e,t,Yf.min())}},{key:"Bi",value:function(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((function(e){return t.forEach((function(t){e=e.insert(t.key,t)})),e}))}}]),t}(),Wy=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.persistence=n,this.Li=r,this.yt=a,this.qi=new av(Uf),this.Ui=new wp((function(e){return yv(e)}),mv),this.Ki=new Map,this.Gi=n.getRemoteDocumentCache(),this.Cs=n.getTargetCache(),this.Ns=n.getBundleCache(),this.Qi(i)}return e(s)(t,[{key:"Qi",value:function(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Oy(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}},{key:"collectGarbage",value:function(e){var t=this;return this.persistence.runTransaction("Collect garbage","readwrite-primary",(function(n){return e.collect(n,t.qi)}))}}]),t}();
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
 */function Qy(e,t,n,r){return new Wy(e,t,n,r)}function Yy(e,t){return Jy.apply(this,arguments)}function Jy(){return(Jy=e(a)(e(c).mark((function t(n,r){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=If(n),e.next=3,i.persistence.runTransaction("Handle user change","readonly",(function(e){var t;return i.mutationQueue.getAllMutationBatches(e).next((function(n){return t=n,i.Qi(r),i.mutationQueue.getAllMutationBatches(e)})).next((function(n){var r=[],a=[],o=Dp(),s=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;r.push(f.batchId);var d=!0,v=!1,p=void 0;try{for(var y,m=f.mutations[Symbol.iterator]();!(d=(y=m.next()).done);d=!0){var g=y.value;o=o.add(g.key)}}catch(e){v=!0,p=e}finally{try{d||null==m.return||m.return()}finally{if(v)throw p}}}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}var k=!0,w=!1,b=void 0;try{for(var T,I=n[Symbol.iterator]();!(k=(T=I.next()).done);k=!0){var _=T.value;a.push(_.batchId);var E=!0,x=!1,S=void 0;try{for(var A,C=_.mutations[Symbol.iterator]();!(E=(A=C.next()).done);E=!0){var N=A.value;o=o.add(N.key)}}catch(e){x=!0,S=e}finally{try{E||null==C.return||C.return()}finally{if(x)throw S}}}}catch(e){w=!0,b=e}finally{try{k||null==I.return||I.return()}finally{if(w)throw b}}return i.localDocuments.getDocuments(e,o).next((function(e){return{ji:e,removedBatchIds:r,addedBatchIds:a}}))}))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Xy(e,t){var n=If(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(function(e){var r,i,a,o,s,u,c,l=t.batch.keys(),h=n.Gi.newChangeBuffer({trackRemovals:!0});return(r=n,i=e,a=t,o=h,s=a.batch,u=s.keys(),c=td.resolve(),u.forEach((function(e){c=c.next((function(){return o.getEntry(i,e)})).next((function(t){var n=a.docVersions.get(e);Tf(null!==n),t.version.compareTo(n)<0&&(s.applyToRemoteDocument(t,a),t.isValidDocument()&&(t.setReadTime(a.commitVersion),o.addEntry(t)))}))})),c.next((function(){return r.mutationQueue.removeMutationBatch(i,s)}))).next((function(){return h.apply(e)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,l,t.batch.batchId)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){for(var t=Dp(),n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))})).next((function(){return n.localDocuments.getDocuments(e,l)}))}))}function $y(e){var t=If(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(function(e){return t.Cs.getLastRemoteSnapshotVersion(e)}))}function Zy(e,t){var n=If(e),r=t.snapshotVersion,i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(function(e){var a=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;var o=[];t.targetChanges.forEach((function(a,s){var u=i.get(s);if(u){o.push(n.Cs.removeMatchingKeys(e,a.removedDocuments,s).next((function(){return n.Cs.addMatchingKeys(e,a.addedDocuments,s)})));var c,l,h,f=u.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(s)?f=f.withResumeToken(dd.EMPTY_BYTE_STRING,jf.min()).withLastLimboFreeSnapshotVersion(jf.min()):a.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(a.resumeToken,r)),i=i.insert(s,f),l=f,h=a,(0===(c=u).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&o.push(n.Cs.updateTargetData(e,f))}}));var s=Tp(),u=Dp();if(t.documentUpdates.forEach((function(r){t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(em(e,a,t.documentUpdates).next((function(e){s=e.Wi,u=e.zi}))),!r.isEqual(jf.min())){var c=n.Cs.getLastRemoteSnapshotVersion(e).next((function(t){return n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)}));o.push(c)}return td.waitFor(o).next((function(){return a.apply(e)})).next((function(){return n.localDocuments.getLocalViewOfDocuments(e,s,u)})).next((function(){return s}))})).then((function(e){return n.qi=i,e}))}function em(e,t,n){var r=Dp(),i=Dp();return n.forEach((function(e){return r=r.add(e)})),t.getEntries(e,r).next((function(e){var r=Tp();return n.forEach((function(n,a){var o=e.get(n);a.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),a.isNoDocument()&&a.version.isEqual(jf.min())?(t.removeEntry(n,a.readTime),r=r.insert(n,a)):!o.isValidDocument()||a.version.compareTo(o.version)>0||0===a.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(a),r=r.insert(n,a)):mf("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",a.version)})),{Wi:r,zi:i}}))}function tm(e,t){var n=If(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(function(e){return void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)}))}function nm(e,t){var n=If(e);return n.persistence.runTransaction("Allocate target","readwrite",(function(e){var r;return n.Cs.getTargetData(e,t).next((function(i){return i?(r=i,td.resolve(r)):n.Cs.allocateTargetId(e).next((function(i){return r=new Iy(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((function(){return r}))}))}))})).then((function(e){var r=n.qi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e}))}function rm(e,t,n){return im.apply(this,arguments)}function im(){return(im=e(a)(e(c).mark((function t(n,r,i){var a,o,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=If(n),o=a.qi.get(r),s=i?"readwrite":"readwrite-primary",e.prev=1,e.t0=i,e.t0){e.next=6;break}return e.next=6,a.persistence.runTransaction("Release target",s,(function(e){return a.persistence.referenceDelegate.removeTarget(e,o)}));case 6:e.next=13;break;case 8:if(e.prev=8,e.t1=e.catch(1),nd(e.t1)){e.next=12;break}throw e.t1;case 12:mf("LocalStore","Failed to update sequence numbers for target ".concat(r,": ").concat(e.t1));case 13:a.qi=a.qi.remove(r),a.Ui.delete(o.target);case 14:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function am(e,t,n){var r=If(e),i=jf.min(),a=Dp();return r.persistence.runTransaction("Execute query","readonly",(function(e){return(o=r,s=e,u=Sv(t),c=If(o),l=c.Ui.get(u),void 0!==l?td.resolve(c.qi.get(l)):c.Cs.getTargetData(s,u)).next((function(t){if(t)return i=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((function(e){a=e}))})).next((function(){return r.Li.getDocumentsMatchingQuery(e,t,n?i:jf.min(),n?a:Dp())})).next((function(e){return om(r,Lv(t),e),{documents:e,Hi:a}}));var o,s,u,c,l}))}function om(e,t,n){var r=e.Ki.get(t)||jf.min();n.forEach((function(e,t){t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}var sm=function(){"use strict";function t(){e(o)(this,t),this.activeTargetIds=Op()}return e(s)(t,[{key:"er",value:function(e){this.activeTargetIds=this.activeTargetIds.add(e)}},{key:"nr",value:function(e){this.activeTargetIds=this.activeTargetIds.delete(e)}},{key:"tr",value:function(){var e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}]),t}(),um=function(){"use strict";function t(){e(o)(this,t),this.Lr=new sm,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}return e(s)(t,[{key:"addPendingMutation",value:function(e){}},{key:"updateMutationState",value:function(e,t,n){}},{key:"addLocalQueryTarget",value:function(e){return this.Lr.er(e),this.qr[e]||"not-current"}},{key:"updateQueryState",value:function(e,t,n){this.qr[e]=t}},{key:"removeLocalQueryTarget",value:function(e){this.Lr.nr(e)}},{key:"isLocalQueryTarget",value:function(e){return this.Lr.activeTargetIds.has(e)}},{key:"clearQueryState",value:function(e){delete this.qr[e]}},{key:"getAllActiveQueryTargets",value:function(){return this.Lr.activeTargetIds}},{key:"isActiveQueryTarget",value:function(e){return this.Lr.activeTargetIds.has(e)}},{key:"start",value:function(){return this.Lr=new sm,Promise.resolve()}},{key:"handleUserChange",value:function(e,t,n){}},{key:"setOnlineState",value:function(e){}},{key:"shutdown",value:function(){}},{key:"writeSequenceNumber",value:function(e){}},{key:"notifyBundleLoaded",value:function(e){}}]),t}(),cm=function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,[{key:"Ur",value:function(e){}},{key:"shutdown",value:function(){}}]),t}(),lm=function(){"use strict";function t(){var n=this;e(o)(this,t),this.Kr=function(){return n.Gr()},this.Qr=function(){return n.jr()},this.Wr=[],this.zr()}return e(s)(t,[{key:"Ur",value:function(e){this.Wr.push(e)}},{key:"shutdown",value:function(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}},{key:"zr",value:function(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}},{key:"Gr",value:function(){mf("ConnectivityMonitor","Network connectivity changed: AVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.Wr[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(0)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}},{key:"jr",value:function(){mf("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.Wr[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(1)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}}],[{key:"C",value:function(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}]),t}(),hm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},fm=function(){"use strict";function t(n){e(o)(this,t),this.Hr=n.Hr,this.Jr=n.Jr}return e(s)(t,[{key:"Yr",value:function(e){this.Xr=e}},{key:"Zr",value:function(e){this.eo=e}},{key:"onMessage",value:function(e){this.no=e}},{key:"close",value:function(){this.Jr()}},{key:"send",value:function(e){this.Hr(e)}},{key:"so",value:function(){this.Xr()}},{key:"io",value:function(e){this.eo(e)}},{key:"ro",value:function(e){this.no(e)}}]),t}(),dm=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this,t)).forceLongPolling=t.forceLongPolling,i.autoDetectLongPolling=t.autoDetectLongPolling,i.useFetchStreams=t.useFetchStreams,e(ou)(i)}return e(s)(r,[{key:"fo",value:function(e,t,n,r){return new Promise((function(i,a){var o=new hf;o.setWithCredentials(!0),o.listenOnce(of.COMPLETE,(function(){try{switch(o.getLastErrorCode()){case af.NO_ERROR:var t=o.getResponseJson();mf("Connection","XHR received:",JSON.stringify(t)),i(t);break;case af.TIMEOUT:mf("Connection",'RPC "'+e+'" timed out'),a(new Ef(_f.DEADLINE_EXCEEDED,"Request time out"));break;case af.HTTP_ERROR:var n=o.getStatus();if(mf("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){var r=o.getResponseJson();Array.isArray(r)&&(r=r[0]);var s=null==r?void 0:r.error;if(s&&s.status&&s.message){var u=(c=s.status,l=c.toLowerCase().replace(/_/g,"-"),Object.values(_f).indexOf(l)>=0?l:_f.UNKNOWN);a(new Ef(u,s.message))}else a(new Ef(_f.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new Ef(_f.UNAVAILABLE,"Connection failed."));break;default:bf()}}finally{mf("Connection",'RPC "'+e+'" completed.')}var c,l}));var s=JSON.stringify(r);o.send(t,"POST",s,n,15)}))}},{key:"wo",value:function(e,t,n){var r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=nf(),a=rf(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/".concat(this.databaseId.projectId,"/databases/").concat(this.databaseId.database)},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new cf({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;var s=r.join("");mf("Connection","Creating WebChannel: "+s,o);var u=i.createWebChannel(s,o),c=!1,l=!1,h=new fm({Hr:function(e){l?mf("Connection","Not sending because WebChannel is closed:",e):(c||(mf("Connection","Opening WebChannel transport."),u.open(),c=!0),mf("Connection","WebChannel sending:",e),u.send(e))},Jr:function(){return u.close()}}),f=function(e,t,n){e.listen(t,(function(e){try{n(e)}catch(e){setTimeout((function(){throw e}),0)}}))};return f(u,lf.EventType.OPEN,(function(){l||mf("Connection","WebChannel transport opened.")})),f(u,lf.EventType.CLOSE,(function(){l||(l=!0,mf("Connection","WebChannel transport closed"),h.io())})),f(u,lf.EventType.ERROR,(function(e){l||(l=!0,kf("Connection","WebChannel transport errored:",e),h.io(new Ef(_f.UNAVAILABLE,"The operation could not be completed")))})),f(u,lf.EventType.MESSAGE,(function(e){var t;if(!l){var n=e.data[0];Tf(!!n);var r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){mf("Connection","WebChannel received error:",i);var a=i.status,o=function(e){var t=dp[e];if(void 0!==t)return kp(t)}(a),s=i.message;void 0===o&&(o=_f.INTERNAL,s="Unknown error status: "+a+" with message "+i.message),l=!0,h.io(new Ef(o,s)),u.close()}else mf("Connection","WebChannel received:",n),h.ro(n)}})),f(a,sf.STAT_EVENT,(function(e){e.stat===uf.PROXY?mf("Connection","Detected buffering proxy"):e.stat===uf.NOPROXY&&mf("Connection","Detected no buffering proxy")})),setTimeout((function(){h.so()}),0),h}}]),r}(function(){"use strict";function t(n){e(o)(this,t),this.databaseInfo=n,this.databaseId=n.databaseId;var r=n.ssl?"https":"http";this.oo=r+"://"+n.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}return e(s)(t,[{key:"co",get:function(){return!1}},{key:"ao",value:function(e,t,n,r,i){var a=this.ho(e,t);mf("RestConnection","Sending: ",a,n);var o={};return this.lo(o,r,i),this.fo(e,a,o,n).then((function(e){return mf("RestConnection","Received: ",e),e}),(function(t){throw kf("RestConnection","".concat(e," failed with error: "),t,"url: ",a,"request:",n),t}))}},{key:"_o",value:function(e,t,n,r,i,a){return this.ao(e,t,n,r,i)}},{key:"lo",value:function(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+vf,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((function(t,n){return e[n]=t})),n&&n.headers.forEach((function(t,n){return e[n]=t}))}},{key:"ho",value:function(e,t){var n=hm[e];return"".concat(this.oo,"/v1/").concat(t,":").concat(n)}}]),t}());function vm(){return"undefined"!=typeof document?document:null}
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
 */function pm(e){return new Gp(e,!0)}var ym=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:6e4;e(o)(this,t),this.Hs=n,this.timerId=r,this.mo=i,this.yo=a,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}return e(s)(t,[{key:"reset",value:function(){this.Io=0}},{key:"Ao",value:function(){this.Io=this.po}},{key:"Ro",value:function(e){var t=this;this.cancel();var n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&mf("ExponentialBackoff","Backing off for ".concat(i," ms (base delay: ").concat(this.Io," ms, delay with jitter: ").concat(n," ms, last attempt: ").concat(r," ms ago)")),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(function(){return t.Eo=Date.now(),e()})),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}},{key:"Po",value:function(){null!==this.To&&(this.To.skipDelay(),this.To=null)}},{key:"cancel",value:function(){null!==this.To&&(this.To.cancel(),this.To=null)}},{key:"bo",value:function(){return(Math.random()-.5)*this.Io}}]),t}(),mm=function(){"use strict";function t(n,r,i,a,s,u,c,l){e(o)(this,t),this.Hs=n,this.vo=i,this.Vo=a,this.connection=s,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ym(n,r)}return e(s)(t,[{key:"No",value:function(){return 1===this.state||5===this.state||this.ko()}},{key:"ko",value:function(){return 2===this.state||3===this.state}},{key:"start",value:function(){4!==this.state?this.auth():this.Oo()}},{key:"stop",value:function(){var t=this;return e(a)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t.No(),!e.t0){e.next=4;break}return e.next=4,t.close(0);case 4:case"end":return e.stop()}}),n)})))()}},{key:"Mo",value:function(){this.state=0,this.xo.reset()}},{key:"Fo",value:function(){var e=this;this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(function(){return e.$o()})))}},{key:"Bo",value:function(e){this.Lo(),this.stream.send(e)}},{key:"$o",value:function(){var t=this;return e(a)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ko()){e.next=2;break}return e.abrupt("return",t.close(0));case 2:case"end":return e.stop()}}),n)})))()}},{key:"Lo",value:function(){this.Do&&(this.Do.cancel(),this.Do=null)}},{key:"qo",value:function(){this.Co&&(this.Co.cancel(),this.Co=null)}},{key:"close",value:function(t,n){var r=this;return e(a)(e(c).mark((function i(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.Lo(),r.qo(),r.xo.cancel(),r.So++,4!==t?r.xo.reset():n&&n.code===_f.RESOURCE_EXHAUSTED?(gf(n.toString()),gf("Using maximum backoff delay to prevent overloading the backend."),r.xo.Ao()):n&&n.code===_f.UNAUTHENTICATED&&3!==r.state&&(r.authCredentialsProvider.invalidateToken(),r.appCheckCredentialsProvider.invalidateToken()),null!==r.stream&&(r.Uo(),r.stream.close(),r.stream=null),r.state=t,e.next=9,r.listener.Zr(n);case 9:case"end":return e.stop()}}),i)})))()}},{key:"Uo",value:function(){}},{key:"auth",value:function(){var t=this;this.state=1;var n=this.Ko(this.So),r=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((function(n){var i=e(p)(n,2),a=i[0],o=i[1];t.So===r&&t.Go(a,o)}),(function(e){var r=t;n((function(){var t=new Ef(_f.UNKNOWN,"Fetching auth token failed: "+e.message);return r.Qo(t)}))}))}},{key:"Go",value:function(e,t){var n=this,r=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((function(){var e=n;r((function(){return e.state=2,e.Co=e.Hs.enqueueAfterDelay(e.Vo,1e4,(function(){return e.ko()&&(e.state=3),Promise.resolve()})),e.listener.Yr()}))})),this.stream.Zr((function(e){var t=n;r((function(){return t.Qo(e)}))})),this.stream.onMessage((function(e){var t=n;r((function(){return t.onMessage(e)}))}))}},{key:"Oo",value:function(){var t=this;this.state=5,this.xo.Ro(e(a)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.state=0,t.start();case 1:case"end":return e.stop()}}),n)}))))}},{key:"Qo",value:function(e){return mf("PersistentStream","close with error: ".concat(e)),this.stream=null,this.close(4,e)}},{key:"Ko",value:function(e){var t=this;return function(n){var r=t;t.Hs.enqueueAndForget((function(){return r.So===e?n():(mf("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())}))}}}]),t}(),gm=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i,a,s,u,c){var l;return e(o)(this,r),(l=n.call(this,t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,a,s,c)).yt=u,e(ou)(l)}return e(s)(r,[{key:"jo",value:function(e,t){return this.connection.wo("Listen",e,t)}},{key:"onMessage",value:function(e){this.xo.reset();var t=function(e,t){var n,r;if("targetChange"in t){t.targetChange;var i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:bf(),a=t.targetChange.targetIds||[],o=function(e,t){return e.wt?(Tf(void 0===t||"string"==typeof t),dd.fromBase64String(t||"")):(Tf(void 0===t||t instanceof Uint8Array),dd.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,u=s&&function(e){var t=void 0===e.code?_f.UNKNOWN:kp(e.code);return new Ef(t,e.message||"")}(s);n=new Fp(i,a,o,u||null)}else if("documentChange"in t){t.documentChange;var c=t.documentChange;c.document,c.document.name,c.document.updateTime;var l=ey(e,c.document.name),h=Jp(c.document.updateTime),f=c.document.createTime?Jp(c.document.createTime):jf.min(),d=new hv({mapValue:{fields:c.document.fields}}),v=dv.newFoundDocument(l,h,f,d),p=c.targetIds||[],y=c.removedTargetIds||[];n=new Pp(p,y,v.key,v)}else if("documentDelete"in t){t.documentDelete;var m=t.documentDelete;m.document;var g=ey(e,m.document),k=m.readTime?Jp(m.readTime):jf.min(),w=dv.newNoDocument(g,k),b=m.removedTargetIds||[];n=new Pp([],b,w.key,w)}else if("documentRemove"in t){t.documentRemove;var T=t.documentRemove;T.document;var I=ey(e,T.document),_=T.removedTargetIds||[];n=new Pp([],_,I,null)}else{if(!("filter"in t))return bf();t.filter;var E=t.filter;E.targetId;var x=E.count||0,S=new mp(x),A=E.targetId;n=new Up(A,S)}return n}(this.yt,e),n=function(e){if(!("targetChange"in e))return jf.min();var t=e.targetChange;return t.targetIds&&t.targetIds.length?jf.min():t.readTime?Jp(t.readTime):jf.min()}(e);return this.listener.Wo(t,n)}},{key:"zo",value:function(e){var t,n,r,i,a={};a.database=ry(this.yt),a.addTarget=(t=this.yt,i=(n=e).target,(r=gv(i)?{documents:sy(t,i)}:{query:uy(t,i)}).targetId=n.targetId,n.resumeToken.approximateByteSize()>0?r.resumeToken=Qp(t,n.resumeToken):n.snapshotVersion.compareTo(jf.min())>0&&(r.readTime=Wp(t,n.snapshotVersion.toTimestamp())),r);var o=function(e,t){var n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return bf()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,e);o&&(a.labels=o),this.Bo(a)}},{key:"Ho",value:function(e){var t={};t.database=ry(this.yt),t.removeTarget=e,this.Bo(t)}}]),r}(mm),km=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i,a,s,u,c){var l;return e(o)(this,r),(l=n.call(this,t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,s,c)).yt=u,l.Jo=!1,e(ou)(l)}return e(s)(r,[{key:"Yo",get:function(){return this.Jo}},{key:"start",value:function(){this.Jo=!1,this.lastStreamToken=void 0,e(Yr)(e($r)(r.prototype),"start",this).call(this)}},{key:"Uo",value:function(){this.Jo&&this.Xo([])}},{key:"jo",value:function(e,t){return this.connection.wo("Write",e,t)}},{key:"onMessage",value:function(e){if(Tf(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();var t=(r=e.writeResults,i=e.commitTime,r&&r.length>0?(Tf(void 0!==i),r.map((function(e){return n=i,(r=(t=e).updateTime?Jp(t.updateTime):Jp(n)).isEqual(jf.min())&&(r=Jp(n)),new Zv(r,t.transformResults||[]);var t,n,r}))):[]),n=Jp(e.commitTime);return this.listener.Zo(n,t)}var r,i;return Tf(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}},{key:"eu",value:function(){var e={};e.database=ry(this.yt),this.Bo(e)}},{key:"Xo",value:function(e){var t=this,n={streamToken:this.lastStreamToken,writes:e.map((function(e){return oy(t.yt,e)}))};this.Bo(n)}}]),r}(mm),wm=function(t){"use strict";e(v)(r,(function t(){e(o)(this,t)}));var n=e(x)(r);function r(t,i,a,s){var u;return e(o)(this,r),(u=n.call(this)).authCredentials=t,u.appCheckCredentials=i,u.connection=a,u.yt=s,u.nu=!1,e(ou)(u)}return e(s)(r,[{key:"su",value:function(){if(this.nu)throw new Ef(_f.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"ao",value:function(t,n,r){var i=this;return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(a){var o=e(p)(a,2),s=o[0],u=o[1];return i.connection.ao(t,n,r,s,u)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===_f.UNAUTHENTICATED&&(i.authCredentials.invalidateToken(),i.appCheckCredentials.invalidateToken()),e):new Ef(_f.UNKNOWN,e.toString())}))}},{key:"_o",value:function(t,n,r,i){var a=this;return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(o){var s=e(p)(o,2),u=s[0],c=s[1];return a.connection._o(t,n,r,u,c,i)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===_f.UNAUTHENTICATED&&(a.authCredentials.invalidateToken(),a.appCheckCredentials.invalidateToken()),e):new Ef(_f.UNKNOWN,e.toString())}))}},{key:"terminate",value:function(){this.nu=!0}}]),r}();
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
 */var bm=function(){"use strict";function t(n,r){e(o)(this,t),this.asyncQueue=n,this.onlineStateHandler=r,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}return e(s)(t,[{key:"uu",value:function(){var e=this;0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(function(){return e.ru=null,e.au("Backend didn't respond within 10 seconds."),e.cu("Offline"),Promise.resolve()})))}},{key:"hu",value:function(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au("Connection failed 1 times. Most recent error: ".concat(e.toString())),this.cu("Offline")))}},{key:"set",value:function(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}},{key:"cu",value:function(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}},{key:"au",value:function(e){var t="Could not reach Cloud Firestore backend. ".concat(e,"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.");this.ou?(gf(t),this.ou=!1):mf("OnlineStateTracker",t)}},{key:"lu",value:function(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}]),t}(),Tm=function t(n,r,i,s,u){"use strict";var l=this;e(o)(this,t),this.localStore=n,this.datastore=r,this.asyncQueue=i,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=u,this.mu.Ur((function(t){var n=l;i.enqueueAndForget(e(a)(e(c).mark((function t(){return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=Om(n),!t.t0){t.next=5;break}return mf("RemoteStore","Restarting streams for network reachability change."),t.next=5,function(){var t=e(a)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=If(n))._u.add(4),e.next=4,Em(r);case 4:return r.gu.set("Unknown"),r._u.delete(4),e.next=8,Im(r);case 8:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()(n);case 5:case"end":return t.stop()}}),t)}))))})),this.gu=new bm(i,s)};
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
 */function Im(e){return _m.apply(this,arguments)}function _m(){return(_m=e(a)(e(c).mark((function t(n){var r,i,a,o,s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!0,i=!1,a=void 0,!Om(n)){e.next=25;break}e.prev=2,o=n.wu[Symbol.iterator]();case 4:if(r=(s=o.next()).done){e.next=11;break}return u=s.value,e.next=8,u(!0);case 8:r=!0,e.next=4;break;case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),i=!0,a=e.t0;case 17:e.prev=17,e.prev=18,r||null==o.return||o.return();case 20:if(e.prev=20,!i){e.next=23;break}throw a;case 23:return e.finish(20);case 24:return e.finish(17);case 25:case"end":return e.stop()}}),t,null,[[2,13,17,25],[18,,20,24]])})))).apply(this,arguments)}function Em(e){return xm.apply(this,arguments)}function xm(){return(xm=e(a)(e(c).mark((function t(n){var r,i,a,o,s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,i=!1,a=void 0,e.prev=1,o=n.wu[Symbol.iterator]();case 3:if(r=(s=o.next()).done){e.next=10;break}return u=s.value,e.next=7,u(!1);case 7:r=!0,e.next=3;break;case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),i=!0,a=e.t0;case 16:e.prev=16,e.prev=17,r||null==o.return||o.return();case 19:if(e.prev=19,!i){e.next=22;break}throw a;case 22:return e.finish(19);case 23:return e.finish(16);case 24:case"end":return e.stop()}}),t,null,[[1,12,16,24],[17,,19,23]])})))).apply(this,arguments)}function Sm(e,t){var n=If(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Rm(n)?Dm(n):ug(n).ko()&&Cm(n,t))}function Am(e,t){var n=If(e),r=ug(n);n.du.delete(t),r.ko()&&Nm(n,t),0===n.du.size&&(r.ko()?r.Fo():Om(n)&&n.gu.set("Unknown"))}function Cm(e,t){e.yu.Ot(t.targetId),ug(e).zo(t)}function Nm(e,t){e.yu.Ot(t),ug(e).Ho(t)}function Dm(e){e.yu=new jp({getRemoteKeysForTarget:function(t){return e.remoteSyncer.getRemoteKeysForTarget(t)},ne:function(t){return e.du.get(t)||null}}),ug(e).start(),e.gu.uu()}function Rm(e){return Om(e)&&!ug(e).No()&&e.du.size>0}function Om(e){return 0===If(e)._u.size}function Lm(e){e.yu=void 0}function Mm(e){return Pm.apply(this,arguments)}function Pm(){return(Pm=e(a)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.du.forEach((function(e,t){Cm(n,e)}));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Um(e,t){return Fm.apply(this,arguments)}function Fm(){return(Fm=e(a)(e(c).mark((function t(n,r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Lm(n),Rm(n)?(n.gu.hu(r),Dm(n)):n.gu.set("Unknown");case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Vm(e,t,n){return jm.apply(this,arguments)}function jm(){return jm=e(a)(e(c).mark((function t(n,r,i){var o;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.gu.set("Online"),!(r instanceof Fp&&2===r.state&&r.cause)){t.next=13;break}return t.prev=1,t.next=4,function(){var t=e(a)(e(c).mark((function t(n,r){var i,a,o,s,u,l,h;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=r.cause,a=!0,o=!1,s=void 0,e.prev=2,u=r.targetIds[Symbol.iterator]();case 4:if(a=(l=u.next()).done){e.next=15;break}if(h=l.value,e.t0=n.du.has(h),!e.t0){e.next=12;break}return e.next=10,n.remoteSyncer.rejectListen(h,i);case 10:n.du.delete(h),n.yu.removeTarget(h);case 12:a=!0,e.next=4;break;case 15:e.next=21;break;case 17:e.prev=17,e.t1=e.catch(2),o=!0,s=e.t1;case 21:e.prev=21,e.prev=22,a||null==u.return||u.return();case 24:if(e.prev=24,!o){e.next=27;break}throw s;case 27:return e.finish(24);case 28:return e.finish(21);case 29:case"end":return e.stop()}}),t,null,[[2,17,21,29],[22,,24,28]])})));return function(e,n){return t.apply(this,arguments)}}()(n,r);case 4:t.next=11;break;case 6:return t.prev=6,t.t0=t.catch(1),mf("RemoteStore","Failed to remove targets %s: %s ",r.targetIds.join(","),t.t0),t.next=11,Bm(n,t.t0);case 11:case 22:t.next=29;break;case 13:if(r instanceof Pp?n.yu.Kt(r):r instanceof Up?n.yu.Jt(r):n.yu.jt(r),i.isEqual(jf.min())){t.next=29;break}return t.prev=14,t.next=17,$y(n.localStore);case 17:if(o=t.sent,t.t1=i.compareTo(o)>=0,!t.t1){t.next=22;break}return t.next=22,function(e,t){var n=e.yu.Zt(t);return n.targetChanges.forEach((function(n,r){if(n.resumeToken.approximateByteSize()>0){var i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((function(t){var n=e.du.get(t);if(n){e.du.set(t,n.withResumeToken(dd.EMPTY_BYTE_STRING,n.snapshotVersion)),Nm(e,t);var r=new Iy(n.target,t,1,n.sequenceNumber);Cm(e,r)}})),e.remoteSyncer.applyRemoteEvent(n)}(n,i);case 24:return t.prev=24,t.t2=t.catch(14),mf("RemoteStore","Failed to raise snapshot:",t.t2),t.next=29,Bm(n,t.t2);case 29:case"end":return t.stop()}}),t,null,[[1,6],[14,24]])}))),jm.apply(this,arguments)}function Bm(e,t,n){return qm.apply(this,arguments)}function qm(){return(qm=e(a)(e(c).mark((function t(n,r,i){return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(nd(r)){t.next=2;break}throw r;case 2:return n._u.add(1),t.next=5,Em(n);case 5:n.gu.set("Offline"),i||(i=function(){return $y(n.localStore)}),n.asyncQueue.enqueueRetryable(e(a)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return mf("RemoteStore","Retrying IndexedDB access"),e.next=3,i();case 3:return n._u.delete(1),e.next=6,Im(n);case 6:case"end":return e.stop()}}),t)}))));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Km(e,t){return t().catch((function(n){return Bm(e,n,t)}))}function zm(e){return Hm.apply(this,arguments)}function Hm(){return(Hm=e(a)(e(c).mark((function t(n){var r,i,a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=If(n),i=cg(r),a=r.fu.length>0?r.fu[r.fu.length-1].batchId:-1;case 2:if(!Gm(r)){e.next=19;break}return e.prev=3,e.next=6,tm(r.localStore,a);case 6:if(null!==(o=e.sent)){e.next=10;break}return 0===r.fu.length&&i.Fo(),e.abrupt("break",19);case 10:a=o.batchId,Wm(r,o),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(3),e.next=17,Bm(r,e.t0);case 17:e.next=2;break;case 19:Qm(r)&&Ym(r);case 20:case"end":return e.stop()}}),t,null,[[3,13]])})))).apply(this,arguments)}function Gm(e){return Om(e)&&e.fu.length<10}function Wm(e,t){e.fu.push(t);var n=cg(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Qm(e){return Om(e)&&!cg(e).No()&&e.fu.length>0}function Ym(e){cg(e).start()}function Jm(e){return Xm.apply(this,arguments)}function Xm(){return(Xm=e(a)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:cg(n).eu();case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function $m(e){return Zm.apply(this,arguments)}function Zm(){return(Zm=e(a)(e(c).mark((function t(n){var r,i,a,o,s,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=cg(n),i=!0,a=!1,o=void 0,e.prev=2,s=n.fu[Symbol.iterator]();!(i=(u=s.next()).done);i=!0)l=u.value,r.Xo(l.mutations);e.next=10;break;case 6:e.prev=6,e.t0=e.catch(2),a=!0,o=e.t0;case 10:e.prev=10,e.prev=11,i||null==s.return||s.return();case 13:if(e.prev=13,!a){e.next=16;break}throw o;case 16:return e.finish(13);case 17:return e.finish(10);case 18:case"end":return e.stop()}}),t,null,[[2,6,10,18],[11,,13,17]])})))).apply(this,arguments)}function eg(e,t,n){return tg.apply(this,arguments)}function tg(){return(tg=e(a)(e(c).mark((function t(n,r,i){var a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.fu.shift(),o=by.from(a,r,i),e.next=3,Km(n,(function(){return n.remoteSyncer.applySuccessfulWrite(o)}));case 3:return e.next=5,zm(n);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ng(e,t){return rg.apply(this,arguments)}function rg(){return rg=e(a)(e(c).mark((function t(n,r){return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r&&cg(n).Yo,!t.t0){t.next=4;break}return t.next=4,function(){var t=e(a)(e(c).mark((function t(n,r){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!gp(a=r.code)||a===_f.ABORTED){e.next=7;break}return i=n.fu.shift(),cg(n).Mo(),e.next=5,Km(n,(function(){return n.remoteSyncer.rejectFailedWrite(i.batchId,r)}));case 5:return e.next=7,zm(n);case 7:case 8:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()(n,r);case 4:Qm(n)&&Ym(n);case 5:case"end":return t.stop()}}),t)}))),rg.apply(this,arguments)}function ig(e,t){return ag.apply(this,arguments)}function ag(){return(ag=e(a)(e(c).mark((function t(n,r){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=If(n)).asyncQueue.verifyOperationInProgress(),mf("RemoteStore","RemoteStore received new credentials"),a=Om(i),i._u.add(3),e.next=6,Em(i);case 6:return a&&i.gu.set("Unknown"),e.next=9,i.remoteSyncer.handleCredentialChange(r);case 9:return i._u.delete(3),e.next=12,Im(i);case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function og(e,t){return sg.apply(this,arguments)}function sg(){return(sg=e(a)(e(c).mark((function t(n,r){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=If(n),!r){e.next=7;break}return i._u.delete(2),e.next=5,Im(i);case 5:e.next=13;break;case 7:if(e.t0=r,e.t0){e.next=13;break}return i._u.add(2),e.next=12,Em(i);case 12:i.gu.set("Unknown");case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ug(t){return t.pu||(t.pu=(r=t.datastore,i=t.asyncQueue,o={Yr:Mm.bind(null,t),Zr:Um.bind(null,t),Wo:Vm.bind(null,t)},(s=If(r)).su(),new gm(i,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,o)),t.wu.push((n=e(a)(e(c).mark((function n(r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=4;break}t.pu.Mo(),Rm(t)?Dm(t):t.gu.set("Unknown"),e.next=7;break;case 4:return e.next=6,t.pu.stop();case 6:Lm(t);case 7:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)}))),t.pu;var n,r,i,o,s}function cg(t){return t.Iu||(t.Iu=(r=t.datastore,i=t.asyncQueue,o={Yr:Jm.bind(null,t),Zr:ng.bind(null,t),tu:$m.bind(null,t),Zo:eg.bind(null,t)},(s=If(r)).su(),new km(i,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,o)),t.wu.push((n=e(a)(e(c).mark((function n(r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=6;break}return t.Iu.Mo(),e.next=4,zm(t);case 4:e.next=9;break;case 6:return e.next=8,t.Iu.stop();case 8:t.fu.length>0&&(mf("RemoteStore","Stopping write stream with ".concat(t.fu.length," pending writes")),t.fu=[]);case 9:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)}))),t.Iu
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
 */;var n,r,i,o,s}var lg=function(){"use strict";function t(n,r,i,a,s){e(o)(this,t),this.asyncQueue=n,this.timerId=r,this.targetTimeMs=i,this.op=a,this.removalCallback=s,this.deferred=new xf,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((function(e){}))}return e(s)(t,[{key:"start",value:function(e){var t=this;this.timerHandle=setTimeout((function(){return t.handleDelayElapsed()}),e)}},{key:"skipDelay",value:function(){return this.handleDelayElapsed()}},{key:"cancel",value:function(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ef(_f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}},{key:"handleDelayElapsed",value:function(){var e=this;this.asyncQueue.enqueueAndForget((function(){return null!==e.timerHandle?(e.clearTimeout(),e.op().then((function(t){return e.deferred.resolve(t)}))):Promise.resolve()}))}},{key:"clearTimeout",value:function(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}],[{key:"createAndSchedule",value:function(e,n,r,i,a){var o=new t(e,n,Date.now()+r,i,a);return o.start(r),o}}]),t}();function hg(e,t){if(gf("AsyncQueue","".concat(t,": ").concat(e)),nd(e))return new Ef(_f.UNAVAILABLE,"".concat(t,": ").concat(e));throw e}
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
 */var fg=function(){"use strict";function t(n){e(o)(this,t),this.comparator=n?function(e,t){return n(e,t)||Hf.comparator(e.key,t.key)}:function(e,t){return Hf.comparator(e.key,t.key)},this.keyedMap=_p(),this.sortedSet=new av(this.comparator)}return e(s)(t,[{key:"has",value:function(e){return null!=this.keyedMap.get(e)}},{key:"get",value:function(e){return this.keyedMap.get(e)}},{key:"first",value:function(){return this.sortedSet.minKey()}},{key:"last",value:function(){return this.sortedSet.maxKey()}},{key:"isEmpty",value:function(){return this.sortedSet.isEmpty()}},{key:"indexOf",value:function(e){var t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}},{key:"size",get:function(){return this.sortedSet.size}},{key:"forEach",value:function(e){this.sortedSet.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"add",value:function(e){var t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}},{key:"delete",value:function(e){var t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}},{key:"isEqual",value:function(e){if(!(e instanceof t))return!1;if(this.size!==e.size)return!1;for(var n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}},{key:"copy",value:function(e,n){var r=new t;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}],[{key:"emptySet",value:function(e){return new t(e.comparator)}}]),t}(),dg=function(){"use strict";function t(){e(o)(this,t),this.Tu=new av(Hf.comparator)}return e(s)(t,[{key:"track",value:function(e){var t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):bf():this.Tu=this.Tu.insert(t,e)}},{key:"Eu",value:function(){var e=[];return this.Tu.inorderTraversal((function(t,n){e.push(n)})),e}}]),t}(),vg=function(){"use strict";function t(n,r,i,a,s,u,c,l,h){e(o)(this,t),this.query=n,this.docs=r,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=s,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}return e(s)(t,[{key:"hasPendingWrites",get:function(){return!this.mutatedKeys.isEmpty()}},{key:"isEqual",value:function(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nv(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;var t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(var r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}],[{key:"fromInitialDocuments",value:function(e,n,r,i,a){var o=[];return n.forEach((function(e){o.push({type:0,doc:e})})),new t(e,n,fg.emptySet(n),o,r,i,!0,!1,a)}}]),t}(),pg=function t(){"use strict";e(o)(this,t),this.Au=void 0,this.listeners=[]},yg=function t(){"use strict";e(o)(this,t),this.queries=new wp((function(e){return Dv(e)}),Nv),this.onlineState="Unknown",this.Ru=new Set};
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
 */function mg(e,t){return gg.apply(this,arguments)}function gg(){return(gg=e(a)(e(c).mark((function t(n,r){var i,a,o,s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=If(n),a=r.query,o=!1,(s=i.queries.get(a))||(o=!0,s=new pg),!o){e.next=13;break}return e.prev=3,e.next=6,i.onListen(a);case 6:s.Au=e.sent,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),u=hg(e.t0,"Initialization of query '".concat(Rv(r.query),"' failed")),e.abrupt("return",void r.onError(u));case 13:i.queries.set(a,s),s.listeners.push(r),r.bu(i.onlineState),s.Au&&r.Pu(s.Au)&&Ig(i);case 14:case"end":return e.stop()}}),t,null,[[3,9]])})))).apply(this,arguments)}function kg(e,t){return wg.apply(this,arguments)}function wg(){return(wg=e(a)(e(c).mark((function t(n,r){var i,a,o,s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=If(n),a=r.query,o=!1,(s=i.queries.get(a))&&(u=s.listeners.indexOf(r))>=0&&(s.listeners.splice(u,1),o=0===s.listeners.length),!o){e.next=6;break}return e.abrupt("return",(i.queries.delete(a),i.onUnlisten(a)));case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function bg(e,t){var n=If(e),r=!1,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=c.query,h=n.queries.get(l);if(h){var f=!0,d=!1,v=void 0;try{for(var p,y=h.listeners[Symbol.iterator]();!(f=(p=y.next()).done);f=!0){p.value.Pu(c)&&(r=!0)}}catch(e){d=!0,v=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw v}}h.Au=c}}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}r&&Ig(n)}function Tg(e,t,n){var r=If(e),i=r.queries.get(t),a=!0,o=!1,s=void 0;if(i)try{for(var u,c=i.listeners[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){u.value.onError(n)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}r.queries.delete(t)}function Ig(e){e.Ru.forEach((function(e){e.next()}))}var _g=function(){"use strict";function t(n,r,i){e(o)(this,t),this.query=n,this.vu=r,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=i||{}}return e(s)(t,[{key:"Pu",value:function(e){if(!this.options.includeMetadataChanges){var t=[],n=!0,r=!1,i=void 0;try{for(var a,o=e.docChanges[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;3!==s.type&&t.push(s)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}e=new vg(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}var u=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),u=!0):this.Cu(e,this.onlineState)&&(this.xu(e),u=!0),this.Su=e,u}},{key:"onError",value:function(e){this.vu.error(e)}},{key:"bu",value:function(e){this.onlineState=e;var t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}},{key:"Cu",value:function(e,t){if(!e.fromCache)return!0;var n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}},{key:"Du",value:function(e){if(e.docChanges.length>0)return!0;var t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}},{key:"xu",value:function(e){e=vg.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}]),t}();
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
var Eg=function t(n){"use strict";e(o)(this,t),this.key=n},xg=function t(n){"use strict";e(o)(this,t),this.key=n},Sg=function(){"use strict";function t(n,r){e(o)(this,t),this.query=n,this.qu=r,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Dp(),this.mutatedKeys=Dp(),this.Gu=Mv(n),this.Qu=new fg(this.Gu)}return e(s)(t,[{key:"ju",get:function(){return this.qu}},{key:"Wu",value:function(e,t){var n=this,r=t?t.zu:new dg,i=t?t.Qu:this.Qu,a=t?t.mutatedKeys:this.mutatedKeys,o=i,s=!1,u="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((function(e,t){var l=i.get(e),h=Ov(n.query,t)?t:null,f=!!l&&n.mutatedKeys.has(l.key),d=!!h&&(h.hasLocalMutations||n.mutatedKeys.has(h.key)&&h.hasCommittedMutations),v=!1;l&&h?l.data.isEqual(h.data)?f!==d&&(r.track({type:3,doc:h}),v=!0):n.Hu(l,h)||(r.track({type:2,doc:h}),v=!0,(u&&n.Gu(h,u)>0||c&&n.Gu(h,c)<0)&&(s=!0)):!l&&h?(r.track({type:0,doc:h}),v=!0):l&&!h&&(r.track({type:1,doc:l}),v=!0,(u||c)&&(s=!0)),v&&(h?(o=o.add(h),a=d?a.add(e):a.delete(e)):(o=o.delete(e),a=a.delete(e)))})),null!==this.query.limit)for(;o.size>this.query.limit;){var l="F"===this.query.limitType?o.last():o.first();o=o.delete(l.key),a=a.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,$i:s,mutatedKeys:a}}},{key:"Hu",value:function(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}},{key:"applyChanges",value:function(e,t,n){var r=this,i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;var a=e.zu.Eu();a.sort((function(e,t){return n=e.type,i=t.type,(a=function(e){switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return bf()}})(n)-a(i)||r.Gu(e.doc,t.doc);var n,i,a})),this.Ju(n);var o=t?this.Yu():[],s=0===this.Ku.size&&this.current?1:0,u=s!==this.Uu;return this.Uu=s,0!==a.length||u?{snapshot:new vg(this.query,e.Qu,i,a,e.mutatedKeys,0===s,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}},{key:"bu",value:function(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new dg,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}},{key:"Zu",value:function(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}},{key:"Ju",value:function(e){var t=this;e&&(e.addedDocuments.forEach((function(e){return t.qu=t.qu.add(e)})),e.modifiedDocuments.forEach((function(e){})),e.removedDocuments.forEach((function(e){return t.qu=t.qu.delete(e)})),this.current=e.current)}},{key:"Yu",value:function(){var e=this;if(!this.current)return[];var t=this.Ku;this.Ku=Dp(),this.Qu.forEach((function(t){e.Zu(t.key)&&(e.Ku=e.Ku.add(t.key))}));var n=[];return t.forEach((function(t){e.Ku.has(t)||n.push(new xg(t))})),this.Ku.forEach((function(e){t.has(e)||n.push(new Eg(e))})),n}},{key:"tc",value:function(e){this.qu=e.Hi,this.Ku=Dp();var t=this.Wu(e.documents);return this.applyChanges(t,!0)}},{key:"ec",value:function(){return vg.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}]),t}(),Ag=function t(n,r,i){"use strict";e(o)(this,t),this.query=n,this.targetId=r,this.view=i},Cg=function t(n){"use strict";e(o)(this,t),this.key=n,this.nc=!1},Ng=function(){"use strict";function t(n,r,i,a,s,u){e(o)(this,t),this.localStore=n,this.remoteStore=r,this.eventManager=i,this.sharedClientState=a,this.currentUser=s,this.maxConcurrentLimboResolutions=u,this.sc={},this.ic=new wp((function(e){return Dv(e)}),Nv),this.rc=new Map,this.oc=new Set,this.uc=new av(Hf.comparator),this.cc=new Map,this.ac=new Py,this.hc={},this.lc=new Map,this.fc=Ny.vn(),this.onlineState="Unknown",this.dc=void 0}return e(s)(t,[{key:"isPrimaryClient",get:function(){return!0===this.dc}}]),t}();function Dg(e,t){return Rg.apply(this,arguments)}function Rg(){return(Rg=e(a)(e(c).mark((function t(n,r){var i,a,o,s,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=ok(n),!(s=i.ic.get(r))){e.next=7;break}a=s.targetId,i.sharedClientState.addLocalQueryTarget(a),o=s.view.ec(),e.next=16;break;case 7:return e.next=9,nm(i.localStore,Sv(r));case 9:return u=e.sent,i.isPrimaryClient&&Sm(i.remoteStore,u),l=i.sharedClientState.addLocalQueryTarget(u.targetId),a=u.targetId,e.next=15,Og(i,r,a,"current"===l,u.resumeToken);case 15:o=e.sent;case 16:return e.abrupt("return",o);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Og(e,t,n,r,i){return Lg.apply(this,arguments)}function Lg(){return Lg=e(a)(e(c).mark((function t(n,r,i,o,s){var u,l,h,f,d,v;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._c=function(t,r,i){return(o=e(a)(e(c).mark((function t(n,r,i,a){var o,s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.view.Wu(i),e.t0=o.$i,!e.t0){e.next=6;break}return e.next=5,am(n.localStore,r.query,!1).then((function(e){var t=e.documents;return r.view.Wu(t,o)}));case 5:o=e.sent;case 6:return s=a&&a.targetChanges.get(r.targetId),u=r.view.applyChanges(o,n.isPrimaryClient,s),e.abrupt("return",($g(n,r.targetId,u.Xu),u.snapshot));case 8:case"end":return e.stop()}}),t)}))),function(e,t,n,r){return o.apply(this,arguments)})(n,t,r,i);var o},t.next=3,am(n.localStore,r,!0);case 3:return u=t.sent,l=new Sg(r,u.Hi),h=l.Wu(u.documents),f=Mp.createSynthesizedTargetChangeForCurrentChange(i,o&&"Offline"!==n.onlineState,s),d=l.applyChanges(h,n.isPrimaryClient,f),$g(n,i,d.Xu),v=new Ag(r,i,l),t.abrupt("return",(n.ic.set(r,v),n.rc.has(i)?n.rc.get(i).push(r):n.rc.set(i,[r]),d.snapshot));case 11:case"end":return t.stop()}}),t)}))),Lg.apply(this,arguments)}function Mg(e,t){return Pg.apply(this,arguments)}function Pg(){return(Pg=e(a)(e(c).mark((function t(n,r){var i,a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=If(n),a=i.ic.get(r),!((o=i.rc.get(a.targetId)).length>1)){e.next=3;break}return e.abrupt("return",(i.rc.set(a.targetId,o.filter((function(e){return!Nv(e,r)}))),void i.ic.delete(r)));case 3:if(!i.isPrimaryClient){e.next=11;break}if(i.sharedClientState.removeLocalQueryTarget(a.targetId),e.t0=i.sharedClientState.isActiveQueryTarget(a.targetId),e.t0){e.next=9;break}return e.next=9,rm(i.localStore,a.targetId,!1).then((function(){i.sharedClientState.clearQueryState(a.targetId),Am(i.remoteStore,a.targetId),Jg(i,a.targetId)})).catch(Zf);case 9:e.next=14;break;case 11:return Jg(i,a.targetId),e.next=14,rm(i.localStore,a.targetId,!0);case 14:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ug(e,t,n){return Fg.apply(this,arguments)}function Fg(){return(Fg=e(a)(e(c).mark((function t(n,r,i){var a,o,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=sk(n),e.prev=1,e.next=4,function(e,t){var n,r,i=If(e),a=Vf.now(),o=t.reduce((function(e,t){return e.add(t.key)}),Dp());return i.persistence.runTransaction("Locally write mutations","readwrite",(function(e){var s=Tp(),u=Dp();return i.Gi.getEntries(e,o).next((function(e){(s=e).forEach((function(e,t){t.isValidDocument()||(u=u.add(e))}))})).next((function(){return i.localDocuments.getOverlayedDocuments(e,s)})).next((function(r){n=r;var o=[],s=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value,d=op(f,n.get(f.key).overlayedDocument);null!=d&&o.push(new cp(f.key,d,fv(d.value.mapValue),ep.exists(!0)))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return i.mutationQueue.addMutationBatch(e,a,o,t)})).next((function(t){r=t;var a=t.applyToLocalDocumentSet(n,u);return i.documentOverlayCache.saveOverlays(e,t.batchId,a)}))})).then((function(){return{batchId:r.batchId,changes:Ep(n)}}))}(a.localStore,r);case 4:return o=e.sent,a.sharedClientState.addPendingMutation(o.batchId),t=a,u=o.batchId,c=i,l=void 0,(l=t.hc[t.currentUser.toKey()])||(l=new av(Uf)),l=l.insert(u,c),t.hc[t.currentUser.toKey()]=l,e.next=9,tk(a,o.changes);case 9:return e.next=11,zm(a.remoteStore);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),s=hg(e.t0,"Failed to persist write"),i.reject(s);case 17:case"end":return e.stop()}var t,u,c,l}),t,null,[[1,13]])})))).apply(this,arguments)}function Vg(e,t){return jg.apply(this,arguments)}function jg(){return(jg=e(a)(e(c).mark((function t(n,r){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=If(n),e.prev=1,e.next=4,Zy(i.localStore,r);case 4:return a=e.sent,r.targetChanges.forEach((function(e,t){var n=i.cc.get(t);n&&(Tf(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?n.nc=!0:e.modifiedDocuments.size>0?Tf(n.nc):e.removedDocuments.size>0&&(Tf(n.nc),n.nc=!1))})),e.next=8,tk(i,a,r);case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),e.next=14,Zf(e.t0);case 14:case"end":return e.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}function Bg(e,t,n){var r=If(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){var i=[];r.ic.forEach((function(e,n){var r=n.view.bu(t);r.snapshot&&i.push(r.snapshot)})),function(e,t){var n=If(e);n.onlineState=t;var r=!1;n.queries.forEach((function(e,n){var i=!0,a=!1,o=void 0;try{for(var s,u=n.listeners[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){s.value.bu(t)&&(r=!0)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}})),r&&Ig(n)}(r.eventManager,t),i.length&&r.sc.Wo(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}function qg(e,t,n){return Kg.apply(this,arguments)}function Kg(){return(Kg=e(a)(e(c).mark((function t(n,r,i){var a,o,s,u,l,h;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=If(n)).sharedClientState.updateQueryState(r,"rejected",i),o=a.cc.get(r),!(s=o&&o.key)){e.next=14;break}return u=(u=new av(Hf.comparator)).insert(s,dv.newNoDocument(s,jf.min())),l=Dp().add(s),h=new Lp(jf.min(),new Map,new uv(Uf),u,l),e.next=9,Vg(a,h);case 9:a.uc=a.uc.remove(s),a.cc.delete(r),ek(a),e.next=16;break;case 14:return e.next=16,rm(a.localStore,r,!1).then((function(){return Jg(a,r,i)})).catch(Zf);case 16:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function zg(e,t){return Hg.apply(this,arguments)}function Hg(){return(Hg=e(a)(e(c).mark((function t(n,r){var i,a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=If(n),a=r.batch.batchId,e.prev=1,e.next=4,Xy(i.localStore,r);case 4:return o=e.sent,Yg(i,a,null),Qg(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),e.next=10,tk(i,o);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,Zf(e.t0);case 16:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function Gg(e,t,n){return Wg.apply(this,arguments)}function Wg(){return(Wg=e(a)(e(c).mark((function t(n,r,i){var a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=If(n),e.prev=1,e.next=4,function(e,t){var n=If(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(function(e){var r;return n.mutationQueue.lookupMutationBatch(e,t).next((function(t){return Tf(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)})).next((function(){return n.localDocuments.getDocuments(e,r)}))}))}(a.localStore,r);case 4:return o=e.sent,Yg(a,r,i),Qg(a,r),a.sharedClientState.updateMutationState(r,"rejected",i),e.next=10,tk(a,o);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,Zf(e.t0);case 16:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function Qg(e,t){(e.lc.get(t)||[]).forEach((function(e){e.resolve()})),e.lc.delete(t)}function Yg(e,t,n){var r=If(e),i=r.hc[r.currentUser.toKey()];if(i){var a=i.get(t);a&&(n?a.reject(n):a.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function Jg(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.sharedClientState.removeLocalQueryTarget(t);var r=!0,i=!1,a=void 0;try{for(var o,s=e.rc.get(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;e.ic.delete(u),n&&e.sc.wc(u,n)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((function(t){e.ac.containsKey(t)||Xg(e,t)}))}function Xg(e,t){e.oc.delete(t.path.canonicalString());var n=e.uc.get(t);null!==n&&(Am(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),ek(e))}function $g(e,t,n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;u instanceof Eg?(e.ac.addReference(u.key,t),Zg(e,u)):u instanceof xg?(mf("SyncEngine","Document no longer in limbo: "+u.key),e.ac.removeReference(u.key,t),e.ac.containsKey(u.key)||Xg(e,u.key)):bf()}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}function Zg(e,t){var n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(mf("SyncEngine","New document in limbo: "+n),e.oc.add(r),ek(e))}function ek(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){var t=e.oc.values().next().value;e.oc.delete(t);var n=new Hf(qf.fromString(t)),r=e.fc.next();e.cc.set(r,new Cg(n)),e.uc=e.uc.insert(n,r),Sm(e.remoteStore,new Iy(Sv(bv(n.path)),r,2,rd.at))}}function tk(e,t,n){return nk.apply(this,arguments)}function nk(){return nk=e(a)(e(c).mark((function t(n,r,i){var o,s,u,l;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=If(n),s=[],u=[],l=[],t.t0=o.ic.isEmpty(),t.t0){t.next=9;break}return o.ic.forEach((function(e,t){l.push(o._c(t,r,i).then((function(e){if((e||i)&&o.isPrimaryClient&&o.sharedClientState.updateQueryState(t.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);var n=Hy.Ci(t.targetId,e);u.push(n)}})))})),t.next=6,Promise.all(l);case 6:return o.sc.Wo(s),t.next=9,function(){var t=e(a)(e(c).mark((function t(n,r){var i,a,o,s,u,l,h,f,d,v,p;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=If(n),e.prev=1,e.next=4,i.persistence.runTransaction("notifyLocalViewChanges","readwrite",(function(e){return td.forEach(r,(function(t){return td.forEach(t.Si,(function(n){return i.persistence.referenceDelegate.addReference(e,t.targetId,n)})).next((function(){return td.forEach(t.Di,(function(n){return i.persistence.referenceDelegate.removeReference(e,t.targetId,n)}))}))}))}));case 4:e.next=11;break;case 6:if(e.prev=6,e.t0=e.catch(1),nd(e.t0)){e.next=10;break}throw e.t0;case 10:mf("LocalStore","Failed to update sequence numbers: "+e.t0);case 11:for(a=!0,o=!1,s=void 0,e.prev=12,u=r[Symbol.iterator]();!(a=(l=u.next()).done);a=!0)h=l.value,f=h.targetId,h.fromCache||(d=i.qi.get(f),v=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(v),i.qi=i.qi.insert(f,p));e.next=20;break;case 16:e.prev=16,e.t1=e.catch(12),o=!0,s=e.t1;case 20:e.prev=20,e.prev=21,a||null==u.return||u.return();case 23:if(e.prev=23,!o){e.next=26;break}throw s;case 26:return e.finish(23);case 27:return e.finish(20);case 28:case"end":return e.stop()}}),t,null,[[1,6],[12,16,20,28],[21,,23,27]])})));return function(e,n){return t.apply(this,arguments)}}()(o.localStore,u);case 9:case"end":return t.stop()}}),t)}))),nk.apply(this,arguments)}function rk(e,t){return ik.apply(this,arguments)}function ik(){return(ik=e(a)(e(c).mark((function t(n,r){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=If(n)).currentUser.isEqual(r)){e.next=11;break}return mf("SyncEngine","User change. New user:",r.toKey()),e.next=5,Yy(i.localStore,r);case 5:return a=e.sent,i.currentUser=r,(t=i).lc.forEach((function(e){e.forEach((function(e){e.reject(new Ef(_f.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.lc.clear(),i.sharedClientState.handleUserChange(r,a.removedBatchIds,a.addedBatchIds),e.next=11,tk(i,a.ji);case 11:case"end":return e.stop()}var t}),t)})))).apply(this,arguments)}function ak(e,t){var n=If(e),r=n.cc.get(t);if(r&&r.nc)return Dp().add(r.key);var i=Dp(),a=n.rc.get(t);if(!a)return i;var o=!0,s=!1,u=void 0;try{for(var c,l=a[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=c.value,f=n.ic.get(h);i=i.unionWith(f.view.ju)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return i}function ok(e){var t=If(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Vg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ak.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=qg.bind(null,t),t.sc.Wo=bg.bind(null,t.eventManager),t.sc.wc=Tg.bind(null,t.eventManager),t}function sk(e){var t=If(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=zg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Gg.bind(null,t),t}var uk=function(){"use strict";function t(){e(o)(this,t),this.synchronizeTabs=!1}return e(s)(t,[{key:"initialize",value:function(t){var n=this;return e(a)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.yt=pm(t.databaseInfo.databaseId),n.sharedClientState=n.gc(t),n.persistence=n.yc(t),e.next=5,n.persistence.start();case 5:n.localStore=n.Ic(t),n.gcScheduler=n.Tc(t,n.localStore),n.indexBackfillerScheduler=n.Ec(t,n.localStore);case 8:case"end":return e.stop()}}),r)})))()}},{key:"Tc",value:function(e,t){return null}},{key:"Ec",value:function(e,t){return null}},{key:"Ic",value:function(e){return Qy(this.persistence,new Gy,e.initialUser,this.yt)}},{key:"yc",value:function(e){return new qy(zy.Bs,this.yt)}},{key:"gc",value:function(e){return new um}},{key:"terminate",value:function(){var t=this;return e(a)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.gcScheduler&&t.gcScheduler.stop(),e.next=3,t.sharedClientState.shutdown();case 3:return e.next=5,t.persistence.shutdown();case 5:case"end":return e.stop()}}),n)})))()}}]),t}(),ck=function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,[{key:"initialize",value:function(t,n){var r=this;return e(a)(e(c).mark((function i(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r.localStore,e.t0){e.next=12;break}return r.localStore=t.localStore,r.sharedClientState=t.sharedClientState,r.datastore=r.createDatastore(n),r.remoteStore=r.createRemoteStore(n),r.eventManager=r.createEventManager(n),r.syncEngine=r.createSyncEngine(n,!t.synchronizeTabs),r.sharedClientState.onlineStateHandler=function(e){return Bg(r.syncEngine,e,1)},r.remoteStore.remoteSyncer.handleCredentialChange=rk.bind(null,r.syncEngine),e.next=12,og(r.remoteStore,r.syncEngine.isPrimaryClient);case 12:case"end":return e.stop()}}),i)})))()}},{key:"createEventManager",value:function(e){return new yg}},{key:"createDatastore",value:function(e){var t,n,r,i=pm(e.databaseInfo.databaseId),a=(t=e.databaseInfo,new dm(t));return n=e.authCredentials,r=e.appCheckCredentials,new wm(n,r,a,i)}},{key:"createRemoteStore",value:function(e){var t,n,r,i,a,o=this;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=function(e){return Bg(o.syncEngine,e,0)},a=lm.C()?new lm:new cm,new Tm(t,n,r,i,a)}},{key:"createSyncEngine",value:function(e,t){return n=this.localStore,r=this.remoteStore,i=this.eventManager,a=this.sharedClientState,o=e.initialUser,s=e.maxConcurrentLimboResolutions,u=t,c=new Ng(n,r,i,a,o,s),u&&(c.dc=!0),c;var n,r,i,a,o,s,u,c}},{key:"terminate",value:function(){return(t=e(a)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=If(n),mf("RemoteStore","RemoteStore shutting down."),r._u.add(5),e.next=5,Em(r);case 5:r.mu.shutdown(),r.gu.set("Unknown");case 7:case"end":return e.stop()}}),t)}))),function(e){return t.apply(this,arguments)})(this.remoteStore);var t}}]),t}();
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
function lk(e,t,n){if(!n)throw new Ef(_f.INVALID_ARGUMENT,"Function ".concat(e,"() cannot be called with an empty ").concat(t,"."))}function hk(e){if(!Hf.isDocumentKey(e))throw new Ef(_f.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but ".concat(e," has ").concat(e.length,"."))}function fk(e){if(Hf.isDocumentKey(e))throw new Ef(_f.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but ".concat(e," has ").concat(e.length,"."))}function dk(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e="".concat(e.substring(0,20),"...")),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";var t=(n=e).constructor?n.constructor.name:null;return t?"a custom ".concat(t," object"):"an object"}var n;return"function"==typeof e?"a function":bf()}function vk(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ef(_f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");var n=dk(e);throw new Ef(_f.INVALID_ARGUMENT,"Expected type '".concat(t.name,"', but it was: ").concat(n))}return e}function pk(e,t){if(t<=0)throw new Ef(_f.INVALID_ARGUMENT,"Function ".concat(e,"() requires a positive number, but it was: ").concat(t,"."))}
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
 */var yk=new Map,mk=function(){"use strict";function t(n){var r;if(e(o)(this,t),void 0===n.host){if(void 0!==n.ssl)throw new Ef(_f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new Ef(_f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new Ef(_f.INVALID_ARGUMENT,"".concat(e," and ").concat(n," cannot be used together."))}("experimentalForceLongPolling",n.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",n.experimentalAutoDetectLongPolling)}return e(s)(t,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),t}(),gk=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this._authCredentials=n,this._appCheckCredentials=r,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mk({}),this._settingsFrozen=!1}return e(s)(t,[{key:"app",get:function(){if(!this._app)throw new Ef(_f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new Ef(_f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mk(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Af;switch(e.type){case"gapi":var t=e.client;return new Rf(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Ef(_f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=yk.get(e))&&(mf("ComponentProvider","Removing Datastore"),yk.delete(e),t.terminate()),Promise.resolve();var e,t}}]),t}();function kk(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=(e=vk(e,gk))._getSettings();if("firestore.googleapis.com"!==a.host&&a.host!==t&&kf("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},a),{host:"".concat(t,":").concat(n),ssl:!1})),i.mockUserToken){var o,s;if("string"==typeof i.mockUserToken)o=i.mockUserToken,s=df.MOCK_USER;else{o=Z(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);var u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new Ef(_f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");s=new df(u)}e._authCredentials=new Cf(new Sf(o,s))}}
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
 */var wk=function(){"use strict";function t(n,r,i){e(o)(this,t),this.converter=r,this._key=i,this.type="document",this.firestore=n}return e(s)(t,[{key:"_path",get:function(){return this._key.path}},{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"path",get:function(){return this._key.path.canonicalString()}},{key:"parent",get:function(){return new Tk(this.firestore,this.converter,this._key.path.popLast())}},{key:"withConverter",value:function(e){return new t(this.firestore,e,this._key)}}]),t}(),bk=function(){"use strict";function t(n,r,i){e(o)(this,t),this.converter=r,this._query=i,this.type="query",this.firestore=n}return e(s)(t,[{key:"withConverter",value:function(e){return new t(this.firestore,e,this._query)}}]),t}(),Tk=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i,a){var s;return e(o)(this,r),(s=n.call(this,t,i,bv(a)))._path=a,s.type="collection",e(ou)(s)}return e(s)(r,[{key:"id",get:function(){return this._query.path.lastSegment()}},{key:"path",get:function(){return this._query.path.canonicalString()}},{key:"parent",get:function(){var e=this._path.popLast();return e.isEmpty()?null:new wk(this.firestore,null,new Hf(e))}},{key:"withConverter",value:function(e){return new r(this.firestore,e,this._path)}}]),r}(bk);function Ik(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(t=fe(t),lk("collection","path",n),t instanceof gk){var o,s=(o=qf).fromString.apply(o,[n].concat(e(f)(i)));return fk(s),new Tk(t,null,s)}var u;if(!(t instanceof wk||t instanceof Tk))throw new Ef(_f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=t._path.child((u=qf).fromString.apply(u,[n].concat(e(f)(i))));return fk(c),new Tk(t.firestore,null,c)}
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
var _k=function(){"use strict";function t(n){e(o)(this,t),this.observer=n,this.muted=!1}return e(s)(t,[{key:"next",value:function(e){this.observer.next&&this.Rc(this.observer.next,e)}},{key:"error",value:function(e){this.observer.error?this.Rc(this.observer.error,e):gf("Uncaught Error in snapshot listener:",e.toString())}},{key:"bc",value:function(){this.muted=!0}},{key:"Rc",value:function(e,t){var n=this;this.muted||setTimeout((function(){n.muted||e(t)}),0)}}]),t}(),Ek=function(){"use strict";function t(n,r,i,s){var u=this;e(o)(this,t);var l,h=this;this.authCredentials=n,this.appCheckCredentials=r,this.asyncQueue=i,this.databaseInfo=s,this.user=df.UNAUTHENTICATED,this.clientId=Pf.R(),this.authCredentialListener=function(){return Promise.resolve()},this.appCheckCredentialListener=function(){return Promise.resolve()},this.authCredentials.start(i,(l=e(a)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return mf("FirestoreClient","Received user=",n.uid),e.next=3,h.authCredentialListener(n);case 3:h.user=n;case 4:case"end":return e.stop()}}),t)}))),function(e){return l.apply(this,arguments)})),this.appCheckCredentials.start(i,(function(e){return mf("FirestoreClient","Received new app check token=",e),u.appCheckCredentialListener(e,u.user)}))}return e(s)(t,[{key:"getConfiguration",value:function(){var t=this;return e(a)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{asyncQueue:t.asyncQueue,databaseInfo:t.databaseInfo,clientId:t.clientId,authCredentials:t.authCredentials,appCheckCredentials:t.appCheckCredentials,initialUser:t.user,maxConcurrentLimboResolutions:100});case 1:case"end":return e.stop()}}),n)})))()}},{key:"setCredentialChangeListener",value:function(e){this.authCredentialListener=e}},{key:"setAppCheckTokenChangeListener",value:function(e){this.appCheckCredentialListener=e}},{key:"verifyNotTerminated",value:function(){if(this.asyncQueue.isShuttingDown)throw new Ef(_f.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"terminate",value:function(){this.asyncQueue.enterRestrictedMode();var t=new xf,n=this;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(e(a)(e(c).mark((function r(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=n.onlineComponents,!e.t0){e.next=5;break}return e.next=5,n.onlineComponents.terminate();case 5:if(e.t1=n.offlineComponents,!e.t1){e.next=9;break}return e.next=9,n.offlineComponents.terminate();case 9:n.authCredentials.shutdown(),n.appCheckCredentials.shutdown(),t.resolve(),e.next=18;break;case 14:e.prev=14,e.t2=e.catch(0),i=hg(e.t2,"Failed to shutdown persistence"),t.reject(i);case 18:case"end":return e.stop()}}),r,null,[[0,14]])})))),t.promise}}]),t}();
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
 */function xk(e,t){return Sk.apply(this,arguments)}function Sk(){return Sk=e(a)(e(c).mark((function t(n,r){var i,o;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.asyncQueue.verifyOperationInProgress(),mf("FirestoreClient","Initializing OfflineComponentProvider"),t.next=3,n.getConfiguration();case 3:return i=t.sent,t.next=6,r.initialize(i);case 6:o=i.initialUser,n.setCredentialChangeListener(function(){var t=e(a)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=o.isEqual(n),e.t0){e.next=5;break}return e.next=4,Yy(r.localStore,n);case 4:o=n;case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.persistence.setDatabaseDeletedListener((function(){return n.terminate()})),n.offlineComponents=r;case 8:case"end":return t.stop()}}),t)}))),Sk.apply(this,arguments)}function Ak(e,t){return Ck.apply(this,arguments)}function Ck(){return(Ck=e(a)(e(c).mark((function t(n,r){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.asyncQueue.verifyOperationInProgress(),e.next=3,Nk(n);case 3:return i=e.sent,mf("FirestoreClient","Initializing OnlineComponentProvider"),e.next=7,n.getConfiguration();case 7:return a=e.sent,e.next=10,r.initialize(i,a);case 10:n.setCredentialChangeListener((function(e){return ig(r.remoteStore,e)})),n.setAppCheckTokenChangeListener((function(e,t){return ig(r.remoteStore,t)})),n.onlineComponents=r;case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Nk(e){return Dk.apply(this,arguments)}function Dk(){return(Dk=e(a)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n.offlineComponents,e.t0){e.next=5;break}return mf("FirestoreClient","Using default OfflineComponentProvider"),e.next=5,xk(n,new uk);case 5:return e.abrupt("return",(e.t0||e.sent,n.offlineComponents));case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Rk(e){return Ok.apply(this,arguments)}function Ok(){return(Ok=e(a)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n.onlineComponents,e.t0){e.next=5;break}return mf("FirestoreClient","Using default OnlineComponentProvider"),e.next=5,Ak(n,new ck);case 5:return e.abrupt("return",(e.t0||e.sent,n.onlineComponents));case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Lk(e){return Rk(e).then((function(e){return e.syncEngine}))}function Mk(e){return Pk.apply(this,arguments)}function Pk(){return(Pk=e(a)(e(c).mark((function t(n){var r,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Rk(n);case 2:return r=e.sent,i=r.eventManager,e.abrupt("return",(i.onListen=Dg.bind(null,r.syncEngine),i.onUnlisten=Mg.bind(null,r.syncEngine),i));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Uk=function(){"use strict";function t(){var n=this;e(o)(this,t),this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ym(this,"async_queue_retry"),this.Wc=function(){var e=vm();e&&mf("AsyncQueue","Visibility state changed to "+e.visibilityState),n.xo.Po()};var r=vm();r&&"function"==typeof r.addEventListener&&r.addEventListener("visibilitychange",this.Wc)}return e(s)(t,[{key:"isShuttingDown",get:function(){return this.qc}},{key:"enqueueAndForget",value:function(e){this.enqueue(e)}},{key:"enqueueAndForgetEvenWhileRestricted",value:function(e){this.zc(),this.Hc(e)}},{key:"enterRestrictedMode",value:function(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;var t=vm();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}},{key:"enqueue",value:function(e){var t=this;if(this.zc(),this.qc)return new Promise((function(){}));var n=new xf;return this.Hc((function(){return t.qc&&t.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)})).then((function(){return n.promise}))}},{key:"enqueueRetryable",value:function(e){var t=this;this.enqueueAndForget((function(){return t.Lc.push(e),t.Jc()}))}},{key:"Jc",value:function(){var t=this;return e(a)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t.Lc.length){e.next=14;break}return e.prev=1,e.next=4,t.Lc[0]();case 4:t.Lc.shift(),t.xo.reset(),e.next=13;break;case 8:if(e.prev=8,e.t0=e.catch(1),nd(e.t0)){e.next=12;break}throw e.t0;case 12:mf("AsyncQueue","Operation failed with retryable error: "+e.t0);case 13:t.Lc.length>0&&t.xo.Ro((function(){return t.Jc()}));case 14:case"end":return e.stop()}}),n,null,[[1,8]])})))()}},{key:"Hc",value:function(e){var t=this,n=this.Bc.then((function(){return t.Gc=!0,e().catch((function(e){var n,r;throw t.Kc=e,t.Gc=!1,gf("INTERNAL UNHANDLED ERROR: ",(r=(n=e).message||"",n.stack&&(r=n.stack.includes(n.message)?n.stack:n.message+"\n"+n.stack),r)),e})).then((function(e){return t.Gc=!1,e}))}));return this.Bc=n,n}},{key:"enqueueAfterDelay",value:function(e,t,n){var r=this;this.zc(),this.jc.indexOf(e)>-1&&(t=0);var i=lg.createAndSchedule(this,e,t,n,(function(e){return r.Yc(e)}));return this.Uc.push(i),i}},{key:"zc",value:function(){this.Kc&&bf()}},{key:"verifyOperationInProgress",value:function(){}},{key:"Xc",value:function(){var t=this;return e(a)(e(c).mark((function n(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:return r=t.Bc,e.next=4,r;case 4:if(r!==t.Bc){e.next=1;break}case 5:case"end":return e.stop()}}),n)})))()}},{key:"Zc",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.Uc[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.timerId===e)return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"ta",value:function(e){var t=this;return this.Xc().then((function(){t.Uc.sort((function(e,t){return e.targetTimeMs-t.targetTimeMs}));var n=!0,r=!1,i=void 0;try{for(var a,o=t.Uc[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s.skipDelay(),"all"!==e&&s.timerId===e)break}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t.Xc()}))}},{key:"ea",value:function(e){this.jc.push(e)}},{key:"Yc",value:function(e){var t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}]),t}();function Fk(e){return function(e,t){if("object"!=typeof e||null===e)return!1;var n=e,r=!0,i=!1,a=void 0;try{for(var o,s=["next","error","complete"][Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;if(u in n&&"function"==typeof n[u])return!0}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return!1}(e)}var Vk=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i,a,s){var u;return e(o)(this,r),(u=n.call(this,t,i,a,s)).type="firestore",u._queue=new Uk,u._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]",e(ou)(u)}return e(s)(r,[{key:"_terminate",value:function(){return this._firestoreClient||qk(this),this._firestoreClient.terminate()}}]),r}(gk);
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
 */function jk(t,n){var r="string"==typeof t?t:n||"(default)",i=it("object"==typeof t?t:lt(),"firestore").getImmediate({identifier:r});if(!i._initialized){var a=Y("firestore");a&&kk.apply(void 0,[i].concat(e(f)(a)))}return i}function Bk(e){return e._firestoreClient||qk(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function qk(e){var t,n,r,i,a,o=e._freezeSettings(),s=(n=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",i=e._persistenceKey,new id(n,r,i,(a=o).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));e._firestoreClient=new Ek(e._authCredentials,e._appCheckCredentials,e._queue,s)}
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
var Kk=function(){"use strict";function t(n){e(o)(this,t),this._byteString=n}return e(s)(t,[{key:"toBase64",value:function(){return this._byteString.toBase64()}},{key:"toUint8Array",value:function(){return this._byteString.toUint8Array()}},{key:"toString",value:function(){return"Bytes(base64: "+this.toBase64()+")"}},{key:"isEqual",value:function(e){return this._byteString.isEqual(e._byteString)}}],[{key:"fromBase64String",value:function(e){try{return new t(dd.fromBase64String(e))}catch(e){throw new Ef(_f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}},{key:"fromUint8Array",value:function(e){return new t(dd.fromUint8Array(e))}}]),t}(),zk=function(){"use strict";function t(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e(o)(this,t);for(var a=0;a<r.length;++a)if(0===r[a].length)throw new Ef(_f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zf(r)}return e(s)(t,[{key:"isEqual",value:function(e){return this._internalPath.isEqual(e._internalPath)}}]),t}();
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
var Hk=function t(n){"use strict";e(o)(this,t),this._methodName=n},Gk=function(){"use strict";function t(n,r){if(e(o)(this,t),!isFinite(n)||n<-90||n>90)throw new Ef(_f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+n);if(!isFinite(r)||r<-180||r>180)throw new Ef(_f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=n,this._long=r}return e(s)(t,[{key:"latitude",get:function(){return this._lat}},{key:"longitude",get:function(){return this._long}},{key:"isEqual",value:function(e){return this._lat===e._lat&&this._long===e._long}},{key:"toJSON",value:function(){return{latitude:this._lat,longitude:this._long}}},{key:"_compareTo",value:function(e){return Uf(this._lat,e._lat)||Uf(this._long,e._long)}}]),t}(),Wk=/^__.*__$/,Qk=function(){"use strict";function t(n,r,i){e(o)(this,t),this.data=n,this.fieldMask=r,this.fieldTransforms=i}return e(s)(t,[{key:"toMutation",value:function(e,t){return null!==this.fieldMask?new cp(e,this.data,this.fieldMask,t,this.fieldTransforms):new up(e,this.data,t,this.fieldTransforms)}}]),t}();
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
 */function Yk(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw bf()}}var Jk=function(){"use strict";function t(n,r,i,a,s,u){e(o)(this,t),this.settings=n,this.databaseId=r,this.yt=i,this.ignoreUndefinedProperties=a,void 0===s&&this.na(),this.fieldTransforms=s||[],this.fieldMask=u||[]}return e(s)(t,[{key:"path",get:function(){return this.settings.path}},{key:"sa",get:function(){return this.settings.sa}},{key:"ia",value:function(e){return new t(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}},{key:"ra",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}},{key:"ca",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}},{key:"aa",value:function(e){return this.ia({path:void 0,oa:!0})}},{key:"ha",value:function(e){return cw(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}},{key:"contains",value:function(e){return void 0!==this.fieldMask.find((function(t){return e.isPrefixOf(t)}))||void 0!==this.fieldTransforms.find((function(t){return e.isPrefixOf(t.field)}))}},{key:"na",value:function(){if(this.path)for(var e=0;e<this.path.length;e++)this.ua(this.path.get(e))}},{key:"ua",value:function(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(Yk(this.sa)&&Wk.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}]),t}(),Xk=function(){"use strict";function t(n,r,i){e(o)(this,t),this.databaseId=n,this.ignoreUndefinedProperties=r,this.yt=i||pm(n)}return e(s)(t,[{key:"da",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Jk({sa:e,methodName:t,fa:n,path:zf.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}]),t}();function $k(e){var t=e._freezeSettings(),n=pm(e._databaseId);return new Xk(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Zk(e,t,n,r,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=e.da(a.merge||a.mergeFields?2:0,t,n,i);aw("Data must be an object, but it was:",o,r);var s,u,c=rw(r,o);if(a.merge)s=new lv(o.fieldMask),u=o.fieldTransforms;else if(a.mergeFields){var l=[],h=!0,f=!1,d=void 0;try{for(var v,p=a.mergeFields[Symbol.iterator]();!(h=(v=p.next()).done);h=!0){var y=v.value,m=ow(t,y,n);if(!o.contains(m))throw new Ef(_f.INVALID_ARGUMENT,"Field '".concat(m,"' is specified in your field mask but missing from your input data."));lw(l,m)||l.push(m)}}catch(e){f=!0,d=e}finally{try{h||null==p.return||p.return()}finally{if(f)throw d}}s=new lv(l),u=o.fieldTransforms.filter((function(e){return s.covers(e.field)}))}else s=null,u=o.fieldTransforms;return new Qk(new hv(c),s,u)}var ew=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return e(s)(r,[{key:"_toFieldTransform",value:function(e){return new $v(e.path,new zv)}},{key:"isEqual",value:function(e){return e instanceof r}}]),r}(Hk);function tw(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return nw(n,e.da(r?4:3,t))}function nw(e,t){if(iw(e=fe(e)))return aw("Unsupported field value:",t,e),rw(e,t);if(e instanceof Hk)return function(e,t){if(!Yk(t.sa))throw t.ha("".concat(e._methodName,"() can only be used with update() and set()"));if(!t.path)throw t.ha("".concat(e._methodName,"() is not currently supported inside arrays"));var n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){var n=[],r=0,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=nw(s.value,t.aa(r));null==c&&(c={nullValue:"NULL_VALUE"}),n.push(c),r++}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=fe(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Vv(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){var n=Vf.fromDate(e);return{timestampValue:Wp(t.yt,n)}}if(e instanceof Vf){var r=new Vf(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Wp(t.yt,r)}}if(e instanceof Gk)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Kk)return{bytesValue:Qp(t.yt,e._byteString)};if(e instanceof wk){var i=t.databaseId,a=e.firestore._databaseId;if(!a.isEqual(i))throw t.ha("Document reference is for database ".concat(a.projectId,"/").concat(a.database," but should be for database ").concat(i.projectId,"/").concat(i.database));return{referenceValue:Xp(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha("Unsupported field value: ".concat(dk(e)))}(e,t)}function rw(e,t){var n={};return ud(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):sd(e,(function(e,r){var i=nw(r,t.ra(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function iw(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Vf||e instanceof Gk||e instanceof Kk||e instanceof wk||e instanceof Hk)}function aw(e,t,n){if(!iw(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){var r=dk(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}var i}function ow(e,t,n){if((t=fe(t))instanceof zk)return t._internalPath;if("string"==typeof t)return uw(e,t);throw cw("Field path arguments must be of type string or ",e,!1,void 0,n)}var sw=new RegExp("[~\\*/\\[\\]]");function uw(t,n,r){if(n.search(sw)>=0)throw cw("Invalid field path (".concat(n,"). Paths must not contain '~', '*', '/', '[', or ']'"),t,!1,void 0,r);try{return e(au)(zk,e(f)(n.split(".")))._internalPath}catch(e){throw cw("Invalid field path (".concat(n,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),t,!1,void 0,r)}}function cw(e,t,n,r,i){var a=r&&!r.isEmpty(),o=void 0!==i,s="Function ".concat(t,"() called with invalid data");n&&(s+=" (via `toFirestore()`)"),s+=". ";var u="";return(a||o)&&(u+=" (found",a&&(u+=" in field ".concat(r)),o&&(u+=" in document ".concat(i)),u+=")"),new Ef(_f.INVALID_ARGUMENT,s+e+u)}function lw(e,t){return e.some((function(e){return e.isEqual(t)}))}
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
 */var hw=function(){"use strict";function t(n,r,i,a,s){e(o)(this,t),this._firestore=n,this._userDataWriter=r,this._key=i,this._document=a,this._converter=s}return e(s)(t,[{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"ref",get:function(){return new wk(this._firestore,this._converter,this._key)}},{key:"exists",value:function(){return null!==this._document}},{key:"data",value:function(){if(this._document){if(this._converter){var e=new fw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}},{key:"get",value:function(e){if(this._document){var t=this._document.data.field(dw("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}]),t}(),fw=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return e(s)(r,[{key:"data",value:function(){return e(Yr)(e($r)(r.prototype),"data",this).call(this)}}]),r}(hw);function dw(e,t){return"string"==typeof t?uw(e,t):t instanceof zk?t._internalPath:t._delegate._internalPath}
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
 */function vw(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Ef(_f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var pw=function t(){"use strict";e(o)(this,t)},yw=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return r}(pw);function mw(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=[];t instanceof pw&&a.push(t),function(e){var t=e.filter((function(e){return e instanceof kw})).length,n=e.filter((function(e){return e instanceof gw})).length;if(t>1||t>0&&n>0)throw new Ef(_f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(a=a.concat(r));var o=!0,s=!1,u=void 0;try{for(var c,l=a[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=c.value;e=h._apply(e)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return e}var gw=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i,a){var s;return e(o)(this,r),(s=n.call(this))._field=t,s._op=i,s._value=a,s.type="where",e(ou)(s)}return e(s)(r,[{key:"_apply",value:function(e){var t=this._parse(e);return Ew(e._query,t),new bk(e.firestore,e.converter,Av(e._query,t))}},{key:"_parse",value:function(e){var t=$k(e.firestore);return function(e,t,n,r,i,a,o){var s;if(i.isKeyField()){if("array-contains"===a||"array-contains-any"===a)throw new Ef(_f.INVALID_ARGUMENT,"Invalid Query. You can't perform '".concat(a,"' queries on documentId()."));if("in"===a||"not-in"===a){_w(o,a);var u=[],c=!0,l=!1,h=void 0;try{for(var f,d=o[Symbol.iterator]();!(c=(f=d.next()).done);c=!0){var v=f.value;u.push(Iw(r,e,v))}}catch(e){l=!0,h=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw h}}s={arrayValue:{values:u}}}else s=Iw(r,e,o)}else"in"!==a&&"not-in"!==a&&"array-contains-any"!==a||_w(o,a),s=tw(n,"where",o,"in"===a||"not-in"===a);return Bd.create(i,a,s)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value)}}],[{key:"_create",value:function(e,t,n){return new r(e,t,n)}}]),r}(yw);var kw=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this)).type=t,a._queryConstraints=i,e(ou)(a)}return e(s)(r,[{key:"_parse",value:function(e){var t=this._queryConstraints.map((function(t){return t._parse(e)})).filter((function(e){return e.getFilters().length>0}));return 1===t.length?t[0]:qd.create(t,this._getOperator())}},{key:"_apply",value:function(e){var t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){var n=e,r=t.getFlattenedFilters(),i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;Ew(n,c),n=Av(n,c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}(e._query,t),new bk(e.firestore,e.converter,Av(e._query,t)))}},{key:"_getQueryConstraints",value:function(){return this._queryConstraints}},{key:"_getOperator",value:function(){return"and"===this.type?"and":"or"}}],[{key:"_create",value:function(e,t){return new r(e,t)}}]),r}(pw);var ww=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this))._field=t,a._direction=i,a.type="orderBy",e(ou)(a)}return e(s)(r,[{key:"_apply",value:function(e){var t,n,r,i=function(e,t,n){if(null!==e.startAt)throw new Ef(_f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Ef(_f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");var r=new rv(t,n);return function(e,t){if(null===Iv(e)){var n=_v(e);null!==n&&xw(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new bk(e.firestore,e.converter,(t=e._query,n=i,r=t.explicitOrderBy.concat([n]),new kv(t.path,t.collectionGroup,r,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)))}}],[{key:"_create",value:function(e,t){return new r(e,t)}}]),r}(yw);function bw(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc",n=t,r=dw("orderBy",e);return ww._create(r,n)}var Tw=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i,a){var s;return e(o)(this,r),(s=n.call(this)).type=t,s._limit=i,s._limitType=a,e(ou)(s)}return e(s)(r,[{key:"_apply",value:function(e){return new bk(e.firestore,e.converter,Cv(e._query,this._limit,this._limitType))}}],[{key:"_create",value:function(e,t,n){return new r(e,t,n)}}]),r}(yw);function Iw(e,t,n){if("string"==typeof(n=fe(n))){if(""===n)throw new Ef(_f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ev(t)&&-1!==n.indexOf("/"))throw new Ef(_f.INVALID_ARGUMENT,"Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '".concat(n,"' contains a '/' character."));var r=t.path.child(qf.fromString(n));if(!Hf.isDocumentKey(r))throw new Ef(_f.INVALID_ARGUMENT,"Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '".concat(r,"' is not because it has an odd number of segments (").concat(r.length,")."));return Cd(e,new Hf(r))}if(n instanceof wk)return Cd(e,n._key);throw new Ef(_f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ".concat(dk(n),"."))}function _w(e,t){if(!Array.isArray(e)||0===e.length)throw new Ef(_f.INVALID_ARGUMENT,"Invalid Query. A non-empty array is required for '".concat(t.toString(),"' filters."));if(e.length>10)throw new Ef(_f.INVALID_ARGUMENT,"Invalid Query. '".concat(t.toString(),"' filters support a maximum of 10 elements in the value array."))}function Ew(e,t){if(t.isInequality()){var n=_v(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new Ef(_f.INVALID_ARGUMENT,"Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '".concat(n.toString(),"' and '").concat(r.toString(),"'"));var i=Iv(e);null!==i&&xw(e,r,i)}var a=function(e,t){var n=!0,r=!1,i=void 0,a=!0,o=!1,s=void 0;try{for(var u,c=e[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;try{for(var h,f=l.getFlattenedFilters()[Symbol.iterator]();!(n=(h=f.next()).done);n=!0){var d=h.value;if(t.indexOf(d.op)>=0)return d.op}}catch(e){r=!0,i=e}finally{try{n||null==f.return||f.return()}finally{if(r)throw i}}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==a)throw a===t.op?new Ef(_f.INVALID_ARGUMENT,"Invalid query. You cannot use more than one '".concat(t.op.toString(),"' filter.")):new Ef(_f.INVALID_ARGUMENT,"Invalid query. You cannot use '".concat(t.op.toString(),"' filters with '").concat(a.toString(),"' filters."))}function xw(e,t,n){if(!n.isEqual(t))throw new Ef(_f.INVALID_ARGUMENT,"Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '".concat(t.toString(),"' and so you must also use '").concat(t.toString(),"' as your first argument to orderBy(), but your first orderBy() is on field '").concat(n.toString(),"' instead."))}var Sw=function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,[{key:"convertValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch(Td(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yd(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(md(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw bf()}}},{key:"convertObject",value:function(e,t){var n=this,r={};return sd(e.fields,(function(e,i){r[e]=n.convertValue(i,t)})),r}},{key:"convertGeoPoint",value:function(e){return new Gk(yd(e.latitude),yd(e.longitude))}},{key:"convertArray",value:function(e,t){var n=this;return(e.values||[]).map((function(e){return n.convertValue(e,t)}))}},{key:"convertServerTimestamp",value:function(e,t){switch(t){case"previous":var n=kd(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(wd(e));default:return null}}},{key:"convertTimestamp",value:function(e){var t=pd(e);return new Vf(t.seconds,t.nanos)}},{key:"convertDocumentKey",value:function(e,t){var n=qf.fromString(e);Tf(yy(n));var r=new ad(n.get(1),n.get(3)),i=new Hf(n.popFirst(5));return r.isEqual(t)||gf("Document ".concat(i," contains a document reference within a different database (").concat(r.projectId,"/").concat(r.database,") which is not supported. It will be treated as a reference in the current database (").concat(t.projectId,"/").concat(t.database,") instead.")),i}}]),t}();
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
 */function Aw(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}var Cw=function(){"use strict";function t(n,r){e(o)(this,t),this.hasPendingWrites=n,this.fromCache=r}return e(s)(t,[{key:"isEqual",value:function(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}]),t}(),Nw=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t,i,a,s,u,c){var l;return e(o)(this,r),(l=n.call(this,t,i,a,s,c))._firestore=t,l._firestoreImpl=t,l.metadata=u,e(ou)(l)}return e(s)(r,[{key:"exists",value:function(){return e(Yr)(e($r)(r.prototype),"exists",this).call(this)}},{key:"data",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._document){if(this._converter){var t=new Dw(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._document){var n=this._document.data.field(dw("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}]),r}(hw),Dw=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return e(s)(r,[{key:"data",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(Yr)(e($r)(r.prototype),"data",this).call(this,t)}}]),r}(Nw),Rw=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this._firestore=n,this._userDataWriter=r,this._snapshot=a,this.metadata=new Cw(a.hasPendingWrites,a.fromCache),this.query=i}return e(s)(t,[{key:"docs",get:function(){var e=[];return this.forEach((function(t){return e.push(t)})),e}},{key:"size",get:function(){return this._snapshot.docs.size}},{key:"empty",get:function(){return 0===this.size}},{key:"forEach",value:function(e,t){var n=this;this._snapshot.docs.forEach((function(r){e.call(t,new Dw(n._firestore,n._userDataWriter,r.key,r,new Cw(n._snapshot.mutatedKeys.has(r.key),n._snapshot.fromCache),n.query.converter))}))}},{key:"docChanges",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Ef(_f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){var n=0;return e._snapshot.docChanges.map((function(t){var r=new Dw(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Cw(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);return t.doc,{type:"added",doc:r,oldIndex:-1,newIndex:n++}}))}var r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((function(e){return t||3!==e.type})).map((function(t){var n=new Dw(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Cw(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,a=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(a=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:Ow(t.type),doc:n,oldIndex:i,newIndex:a}}))}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}]),t}();
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
 */function Ow(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return bf()}}var Lw=function(t){"use strict";e(v)(r,t);var n=e(x)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this)).firestore=t,e(ou)(i)}return e(s)(r,[{key:"convertBytes",value:function(e){return new Kk(e)}},{key:"convertReference",value:function(e){var t=this.convertDocumentKey(e,this.firestore._databaseId);return new wk(this.firestore,null,t)}}]),r}(Sw);function Mw(t,n){var r=vk(t.firestore,Vk),i=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(t=fe(t),1===arguments.length&&(n=Pf.R()),lk("doc","path",n),t instanceof gk){var o,s=(o=qf).fromString.apply(o,[n].concat(e(f)(i)));return hk(s),new wk(t,null,new Hf(s))}var u;if(!(t instanceof wk||t instanceof Tk))throw new Ef(_f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=t._path.child((u=qf).fromString.apply(u,[n].concat(e(f)(i))));return hk(c),new wk(t.firestore,t instanceof Tk?t.converter:null,new Hf(c))}(t),a=Aw(t.converter,n);return Uw(r,[Zk($k(t.firestore),"addDoc",i._key,a,null!==t.converter,{}).toMutation(i._key,ep.exists(!1))]).then((function(){return i}))}function Pw(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o,s,u;t=fe(t);var l={includeMetadataChanges:!1},h=0;"object"!=typeof r[h]||Fk(r[h])||(l=r[h],h++);var f,d,v,p,y,m,g,k,w={includeMetadataChanges:l.includeMetadataChanges};if(Fk(r[h])){var b=r[h];r[h]=null===(o=b.next)||void 0===o?void 0:o.bind(b),r[h+1]=null===(s=b.error)||void 0===s?void 0:s.bind(b),r[h+2]=null===(u=b.complete)||void 0===u?void 0:u.bind(b)}if(t instanceof wk)d=vk(t.firestore,Vk),v=bv(t._key.path),f={next:function(e){r[h]&&r[h](Fw(d,t,e))},error:r[h+1],complete:r[h+2]};else{var T=vk(t,bk);d=vk(T.firestore,Vk),v=T._query;var I=new Lw(d);f={next:function(e){r[h]&&r[h](new Rw(d,I,T,e))},error:r[h+1],complete:r[h+2]},vw(t._query)}return p=Bk(d),y=v,m=w,g=new _k(f),k=new _g(y,g,m),p.asyncQueue.enqueueAndForget(e(a)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=mg,e.next=3,Mk(p);case 3:return e.t1=e.sent,e.t2=k,e.abrupt("return",(0,e.t0)(e.t1,e.t2));case 6:case"end":return e.stop()}}),t)})))),function(){g.bc(),p.asyncQueue.enqueueAndForget(e(a)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=kg,e.next=3,Mk(p);case 3:return e.t1=e.sent,e.t2=k,e.abrupt("return",(0,e.t0)(e.t1,e.t2));case 6:case"end":return e.stop()}}),t)}))))}}function Uw(t,n){return r=Bk(t),i=n,o=new xf,r.asyncQueue.enqueueAndForget(e(a)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Ug,e.next=3,Lk(r);case 3:return e.t1=e.sent,e.t2=i,e.t3=o,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),t)})))),o.promise;var r,i,o}function Fw(e,t,n){var r=n.docs.get(t._key),i=new Lw(e);return new Nw(e,i,t._key,r,new Cw(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */!function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];vf=ut,rt(new Te("firestore",(function(e,n){var r=n.instanceIdentifier,i=n.options,a=e.getProvider("app").getImmediate(),o=new Vk(new Nf(e.getProvider("auth-internal")),new Lf(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Ef(_f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ad(e.options.projectId,t)}(a,r),a);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),ht(ff,"3.8.0",e),ht(ff,"3.8.0","esm2017")}();var Vw=function(){"use strict";function t(n){e(o)(this,t),e(u)(this,"NAME_KEY_STORAGE_WATCHED","Filmoteka_List_Watched"),e(u)(this,"NAME_KEY_STORAGE_QUEUE","Filmoteka_List_Queue"),this.authStateObserver=n;ct(h());Qr(),this.initFirebaseAuth()}return e(s)(t,[{key:"signInGoogle",value:function(){return e(a)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new eo,e.next=3,os(ru(),n);case 3:case"end":return e.stop()}}),t)})))()}},{key:"signInFacebook",value:function(){return e(a)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Za,e.next=3,os(ru(),n);case 3:case"end":return e.stop()}}),t)})))()}},{key:"signOutUser",value:function(){fe(ru()).signOut()}},{key:"initFirebaseAuth",value:function(){var e,t,n,r;e=ru(),t=this.authStateObserver.bind(this),fe(e).onAuthStateChanged(t,n,r)}},{key:"getProfilePicUrl",value:function(){return ru().currentUser.photoURL||"/images/profile_placeholder.png"}},{key:"getUserName",value:function(){return ru().currentUser.displayName}},{key:"isUserSignedIn",value:function(){return!!ru().currentUser}},{key:"addSizeToGoogleProfilePic",value:function(e){return-1!==e.indexOf("googleusercontent.com")&&-1===e.indexOf("?")?e+"?sz=150":e}},{key:"saveToWatch",value:function(e){this.saveObject(e,this.NAME_KEY_STORAGE_WATCHED)}},{key:"saveToQueue",value:function(e){this.saveObject(e,this.NAME_KEY_STORAGE_QUEUE)}},{key:"saveObject",value:function(t,n){var r=this;return e(a)(e(c).mark((function i(){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("🚀 ~ saveMessage"),a=JSON.stringify(t),e.prev=2,e.next=5,Mw(Ik(jk(),n),{name:r.getUserName(),text:a,profilePicUrl:r.getProfilePicUrl(),timestamp:new ew("serverTimestamp")});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error("Error writing new message to Firebase Database",e.t0);case 10:case"end":return e.stop()}}),i,null,[[2,7]])})))()}},{key:"loadMessages",value:function(){var e;Pw(mw(Ik(jk(),this.NAME_KEY_STORAGE_WATCHED),bw("timestamp","desc"),(pk("limit",e=12),Tw._create("limit",e,"F"))),(function(e){e.docChanges().forEach((function(e){if("removed"!==e.type){var t=e.doc.data();console.log("message",JSON.parse(t.text))}}))}))}}]),t}();var jw={signInButtonElement:document.getElementById("signInButton"),signOutButtonElement:document.getElementById("signOutButton"),signInMenu:document.getElementById("menu_sign_in"),signInGoogleButtonElement:document.getElementById("btn-sign-in-google"),signInFacebookButtonElement:document.getElementById("btn-sign-in-facebook"),signInBackdrop:document.getElementById("backdrop_menu_sign_in")},Bw="no-scroll-body",qw="visually-hidden",Kw=new Vw((function(e){e?(jw.signOutButtonElement.classList.remove(qw),jw.signInButtonElement.classList.add(qw)):(jw.signOutButtonElement.classList.add(qw),jw.signInButtonElement.classList.remove(qw))}));function zw(e){"Escape"===e.key&&Gw(e)}function Hw(e){Gw(e)}function Gw(e){document.removeEventListener("keydown",zw),jw.signInBackdrop.removeEventListener("click",Hw),document.body.classList.remove(Bw),jw.signInMenu.classList.add(qw),jw.signInBackdrop.classList.add(qw)}jw.signInButtonElement.addEventListener("click",(function(){document.addEventListener("keydown",zw),jw.signInBackdrop.addEventListener("click",Hw),document.body.classList.add(Bw),jw.signInMenu.classList.remove(qw),jw.signInBackdrop.classList.remove(qw)})),jw.signInGoogleButtonElement.addEventListener("click",Kw.signInGoogle.bind(Kw)),jw.signInFacebookButtonElement.addEventListener("click",Kw.signInFacebook.bind(Kw)),jw.signOutButtonElement.addEventListener("click",Kw.signOutUser.bind(Kw)),jw.signInGoogleButtonElement.addEventListener("click",Gw),jw.signInFacebookButtonElement.addEventListener("click",Gw)}();
//# sourceMappingURL=index.e01177d6.js.map
