!function(r){var t={};function e(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return r[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=r,e.c=t,e.d=function(r,t,n){e.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:n})},e.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,t){if(1&t&&(r=e(r)),8&t)return r;if(4&t&&"object"===typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var a in r)e.d(n,a,function(t){return r[t]}.bind(null,a));return n},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},e.p="./",e(e.s=6)}([function(r,t,e){"use strict";this&&this.__assign;Object.defineProperty(t,"__esModule",{value:!0});var n=e(2),a=e(5),o=e(1),i={sum:o.sum_unsafe,mean:o.mean,count:o.count};function u(r){var t=r.type,e=r.aggFunc,a=void 0===e?o.count:e,i=r.factTable,u=void 0===i?[]:i,l=r.dimensions,f=void 0===l?[]:l,c=r.measures,s=void 0===c?[]:c;switch(t){case"period":return new n.periodCube({aggFunc:a,factTable:u,dimensions:f,measures:s});case"moment":default:return new n.momentCube({aggFunc:a,factTable:u,dimensions:f,measures:s})}}t.createCube=u,t.default=function(r){var t=r.dimensions,e=r.measures,n=r.asFields,l=r.operator,f=r.dataSource,c=u({type:"moment",aggFunc:i[l]||o.count,dimensions:t,measures:e,factTable:f}),s=a.tree2Table({dimensions:t,measures:e,cube:c});return s.forEach((function(r){n.forEach((function(t,n){r[t]=r[e[n]]}))})),s},function(r){for(var e in r)t.hasOwnProperty(e)||(t[e]=r[e])}(e(1))},function(r,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sum_unsafe=function(r,t){var e={};t.forEach((function(r){e[r]=0}));for(var n=function(n,a){t.forEach((function(t){e[t]+=r[n][t]}))},a=0,o=r.length;a<o;a++)n(a);return e},t.sum=function(r,t){var e={};t.forEach((function(r){e[r]=0}));for(var n=function(n,a){t.forEach((function(t){e[t]+=Number(r[n][t])||0}))},a=0,o=r.length;a<o;a++)n(a);return e},t.count=function(r,t){var e={};t.forEach((function(r){e[r]=0}));for(var n=0,a=r.length;n<a;n++)t.forEach((function(r){e[r]++}));return e},t.mean=function(r,t){var e={};t.forEach((function(r){e[r]=0}));for(var n=function(n,a){t.forEach((function(t){e[t]+=Number(r[n][t])||0}))},a=0,o=r.length;a<o;a++)n(a);return t.forEach((function(t){e[t]/=r.length})),e}},function(r,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(3);t.periodCube=n.default;var a=e(4);t.momentCube=a.default},function(r,t,e){"use strict";var n=this&&this.__read||function(r,t){var e="function"===typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,a,o=e.call(r),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(u){a={error:u}}finally{try{n&&!n.done&&(e=o.return)&&e.call(o)}finally{if(a)throw a.error}}return i},a=this&&this.__spread||function(){for(var r=[],t=0;t<arguments.length;t++)r=r.concat(n(arguments[t]));return r},o=this&&this.__values||function(r){var t="function"===typeof Symbol&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&"number"===typeof r.length)return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function r(r){this.children=new Map,this._rawData=[],this.aggFunc=r,this.cache=!1}return r.prototype.push=function(){for(var r,t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];(r=this._rawData).push.apply(r,a(t))},r.prototype.aggData=function(r){return void 0===r&&(r=[]),this.cache||(this._aggData=this.aggFunc(this.rawData,r),this.cache=!0),this._aggData},r.prototype.clearCache=function(){this.cache=!1},Object.defineProperty(r.prototype,"rawData",{get:function(){var r,t;if(!this.cache){if(0!==this.children.size){var e=this.children.values(),n=[];try{for(var a=o(e),i=a.next();!i.done;i=a.next()){var u=i.value,l=void 0,f=u.rawData,c=f.length;for(l=0;l<c;l++)n.push(f[l])}}catch(s){r={error:s}}finally{try{i&&!i.done&&(t=a.return)&&t.call(a)}finally{if(r)throw r.error}}this._rawData=n}this.cache=!0}return this._rawData},enumerable:!0,configurable:!0}),r.prototype.getNode=function(r){return function t(e,a){var i,u;if(a===r.length)return e;var l=e.children.entries();try{for(var f=o(l),c=f.next();!c.done;c=f.next()){var s=n(c.value,2),h=s[0],d=s[1];if(h===r[a])return t(d,a+1)}}catch(v){i={error:v}}finally{try{c&&!c.done&&(u=f.return)&&u.call(f)}finally{if(i)throw i.error}}return null}(this,0)},r}(),u=function(){function r(r){this.aggFunc=r.aggFunc,this.factTable=r.factTable,this.dimensions=r.dimensions,this.measures=r.measures}return r.prototype.get=function(r){var t=this.tree,e=(this.aggFunc,this.measures);return function t(a,i){var u,l;if(i===r.length)return a.aggData(e);var f=a.children.entries();try{for(var c=o(f),s=c.next();!s.done;s=c.next()){var h=n(s.value,2),d=h[0],v=h[1];if(d===r[i])return t(v,i+1)}}catch(y){u={error:y}}finally{try{s&&!s.done&&(l=c.return)&&l.call(c)}finally{if(u)throw u.error}}return!1}(t,0)},r.prototype.getNode=function(r){return this.tree.getNode(r)},r.prototype.buildTree=function(){var r,t=new i(this.aggFunc),e=this.factTable.length;for(r=0;r<e;r++)this.insertNode(this.factTable[r],t,0);return this.tree=t,t},r.prototype.insertNode=function(r,t,e){if(t.push(r),t.cache=!1,e<this.dimensions.length){var n=r[this.dimensions[e]];t.children.has(n)||t.children.set(n,new i(this.aggFunc)),this.insertNode(r,t.children.get(n),e+1)}},r.prototype.aggTree=function(r){var t,e;void 0===r&&(r=this.tree);var n=r.children.values();try{for(var a=o(n),i=a.next();!i.done;i=a.next()){var u=i.value;this.aggTree(u)}}catch(l){t={error:l}}finally{try{i&&!i.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}return r.aggData(this.measures),r},r.prototype.aggNode=function(r){var t,e;void 0===r&&(r=this.tree);var n=r.children.values();try{for(var a=o(n),i=a.next();!i.done;i=a.next()){var u=i.value;this.aggTree(u)}}catch(l){t={error:l}}finally{try{i&&!i.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}return r.aggData(this.measures),r},r}();t.default=u},function(r,t,e){"use strict";var n=this&&this.__read||function(r,t){var e="function"===typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,a,o=e.call(r),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(u){a={error:u}}finally{try{n&&!n.done&&(e=o.return)&&e.call(o)}finally{if(a)throw a.error}}return i},a=this&&this.__spread||function(){for(var r=[],t=0;t<arguments.length;t++)r=r.concat(n(arguments[t]));return r},o=this&&this.__values||function(r){var t="function"===typeof Symbol&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&"number"===typeof r.length)return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function r(){this.children=new Map,this.rawData=[]}return r.prototype.push=function(){for(var r,t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];(r=this.rawData).push.apply(r,a(t))},r.prototype.aggData=function(r,t){return void 0===t&&(t=[]),this._aggData=r(this.rawData,t),this._aggData},r.prototype.getNode=function(r){return function t(e,a){var i,u;if(a===r.length)return e;var l=e.children.entries();try{for(var f=o(l),c=f.next();!c.done;c=f.next()){var s=n(c.value,2),h=s[0],d=s[1];if(h===r[a])return t(d,a+1)}}catch(v){i={error:v}}finally{try{c&&!c.done&&(u=f.return)&&u.call(f)}finally{if(i)throw i.error}}return null}(this,0)},r}();t.Node=i;var u=function(){function r(r){this.aggFunc=r.aggFunc,this.factTable=r.factTable,this.dimensions=r.dimensions,this.measures=r.measures,this.buildTree(),this.aggTree()}return r.prototype.get=function(r){var t=this.tree,e=this.aggFunc,a=this.measures;return function t(i,u){var l,f;if(u===r.length)return i.aggData(e,a);var c=i.children.entries();try{for(var s=o(c),h=s.next();!h.done;h=s.next()){var d=n(h.value,2),v=d[0],y=d[1];if(v===r[u])return t(y,u+1)}}catch(g){l={error:g}}finally{try{h&&!h.done&&(f=s.return)&&f.call(s)}finally{if(l)throw l.error}}return!1}(t,0)},r.prototype.getNode=function(r){return this.tree.getNode(r)},r.prototype.setData=function(r){var t=r.aggFunc,e=void 0===t?this.aggFunc:t,n=r.factTable,a=void 0===n?this.factTable:n,o=r.dimensions,i=void 0===o?this.dimensions:o,u=r.measures,l=void 0===u?this.measures:u;i!==this.dimensions||a!==this.factTable?(this.dimensions=i,this.factTable=a,this.measures=l,this.aggFunc=e,this.buildTree(),this.aggTree()):l===this.measures&&e===this.aggFunc||(this.measures=l,this.aggFunc=e,this.aggTree())},r.prototype.buildTree=function(){var r,t=new i,e=this.factTable.length;for(r=0;r<e;r++)this.insertNode(this.factTable[r],t,0);return this.tree=t,t},r.prototype.insertNode=function(r,t,e){if(e===this.dimensions.length)t.push(r);else{var n=r[this.dimensions[e]];t.children.has(n)||t.children.set(n,new i),this.insertNode(r,t.children.get(n),e+1)}},r.prototype.aggTree=function(r){var t,e;if(void 0===r&&(r=this.tree),r.children.size>0){r.rawData=[];var n=r.children.values();try{for(var a=o(n),i=a.next();!i.done;i=a.next()){var u=i.value,l=void 0,f=this.aggTree(u).rawData,c=f.length;for(l=0;l<c;l++)r.rawData.push(f[l])}}catch(s){t={error:s}}finally{try{i&&!i.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}}return r.aggData(this.aggFunc,this.measures),r},r}();t.default=u},function(r,t,e){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(r){for(var t,e=1,n=arguments.length;e<n;e++)for(var a in t=arguments[e])Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a]);return r}).apply(this,arguments)},a=this&&this.__values||function(r){var t="function"===typeof Symbol&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&"number"===typeof r.length)return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},o=this&&this.__read||function(r,t){var e="function"===typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,a,o=e.call(r),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(u){a={error:u}}finally{try{n&&!n.done&&(e=o.return)&&e.call(o)}finally{if(a)throw a.error}}return i};Object.defineProperty(t,"__esModule",{value:!0}),t.tree2Table=function(r){var t=r.dimensions,e=(r.measures,r.cube),i=(e.aggFunc,[]);return function r(e,u,l){var f,c,s;if(0!==e.children.size)try{for(var h=a(e.children.entries()),d=h.next();!d.done;d=h.next()){var v=o(d.value,2),y=v[0];r(v[1],n(n({},u),((s={})[t[l]]=y,s)),l+1)}}catch(p){f={error:p}}finally{try{d&&!d.done&&(c=h.return)&&c.call(h)}finally{if(f)throw f.error}}else{var g=e._aggData;i.push(n(n({},u),g))}}(e.tree,{},0),i}},function(r,t,e){"use strict";e.r(t);var n={};e.r(n),e.d(n,"kruskal",(function(){return _})),e.d(n,"kruskalWithFullMST",(function(){return S}));var a={};function o(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function i(r){return function(r){if(Array.isArray(r)){for(var t=0,e=new Array(r.length);t<r.length;t++)e[t]=r[t];return e}}(r)||function(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function l(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?u(Object(e),!0).forEach((function(t){o(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}e.r(a),e.d(a,"getFieldType",(function(){return x})),e.d(a,"getAllFieldTypes",(function(){return O})),e.d(a,"getFieldDistribution",(function(){return T})),e.d(a,"getAllFieldsDistribution",(function(){return D})),e.d(a,"getFieldEntropy",(function(){return F})),e.d(a,"getAllFieldsEntropy",(function(){return j})),e.d(a,"groupFields",(function(){return M}));function f(r){return JSON.parse(JSON.stringify(r))}function c(r,t){var e=new Map,n=!0,a=!1,o=void 0;try{for(var u,l=r[Symbol.iterator]();!(n=(u=l.next()).done);n=!0){var f=u.value[t];e.has(f)||e.set(f,0),e.set(f,e.get(f)+1)}}catch(c){a=!0,o=c}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return i(e.entries())}function s(r){for(var t=r.dataSource,e=r.field,n=r.newField,a=void 0===n?"".concat(e,"(con-group)"):n,o=r.groupNumber,u=t.map((function(r){return r[e]})),l=Math.max.apply(Math,i(u)),f=Math.min.apply(Math,i(u)),c=(l-f)/o,s=[],h=0;h<o;h++){var d=f+h*c,v=f+(h+1)*c;s.push([d,v])}s[0][0]=-1/0,s[s.length-1][1]=1/0;for(var y=Math.max(1,Math.log10(Math.abs(f))-Math.log10(c))+1,g=function(r){var n=t[r],o=s.findIndex((function(r){return r[0]<=n[e]&&n[e]<r[1]})),i=s[o];n[a]="undefined"!==typeof i?"".concat(o+1,":[").concat(Number(i[0].toPrecision(y)),", ").concat(Number(i[1].toPrecision(y)),")"):"null"},p=0;p<t.length;p++)g(p);return t}function h(r){var t=r.dataSource,e=r.field,n=r.newField,a=void 0===n?"".concat(e,"(cat-group)"):n,i=r.groupNumber,u=c(t,e);u.sort((function(r,t){return t[1]-r[1]}));var f=u.map((function(r){return r[1]}));i=u.length;for(var s=f.length-2;s>=0;s--)f[s]=f[s+1]+f[s];for(var h=0;h<u.length-2;h++)if(5*u[h][1]>=f[h+1]&&u[h+1][1]/5<f[h+2]){i=h+2;break}if(i===u.length)return t.map((function(r){return l({},r,o({},a,r[e]))}));for(var d=new Set,v=i-1;v<u.length;v++)d.add(u[v][0]);var y=!0,g=!1,p=void 0;try{for(var m,b=t[Symbol.iterator]();!(y=(m=b.next()).done);y=!0){var w=m.value;d.has(w[e])?w[a]="others":w[a]=w[e]}}catch(S){g=!0,p=S}finally{try{y||null==b.return||b.return()}finally{if(g)throw p}}return t}function d(r,t){return c(r,t).every((function(r){return 1===r[1]}))}e(0);function v(r){var t=0,e=!0,n=!1,a=void 0;try{for(var o,i=r[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var u=o.value;t+=u}}catch(l){n=!0,a=l}finally{try{e||null==i.return||i.return()}finally{if(n)throw a}}return r.map((function(r){return r/t}))}var y=function(r){var t=0,e=!0,n=!1,a=void 0;try{for(var o,i=r[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var u=o.value;t+=u*Math.log2(u)}}catch(l){n=!0,a=l}finally{try{e||null==i.return||i.return()}finally{if(n)throw a}}return-t};function g(r){for(var t=[],e=0;e<r.length;e++)for(var n=e+1;n<r[e].length;n++)t.push([[e,n],Math.abs(r[e][n])]);return t}function p(r,t){return r[t]===t?t:r[t]=p(r,r[t])}function m(r,t,e){var n=p(r,t),a=p(r,e);r[n]=a,p(r,t),p(r,e)}function b(r,t,e){return r[e]===e?e:(r[e]=b(r,t,r[e]),t[e]=t[r[e]],r[e])}function w(r,t,e,n){var a=b(r,t,e),o=b(r,t,n),i=t[a],u=t[o];r[a]=o,t[a]=t[o]=i+u,b(r,t,e),b(r,t,n)}function S(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=g(r);n.sort((function(r,t){return t[1]-r[1]}));var a=[],o=r.map((function(r,t){return t})),u=i(o),l=!1,f=!0,c=!1,s=void 0;try{for(var h,d=n[Symbol.iterator]();!(f=(h=d.next()).done);f=!0){var v=h.value;p(o,v[0][0])!==p(o,v[0][1])&&(m(o,v[0][0],v[0][1]),a.push([v[0],v[1],l]));for(var y=0;y<o.length;y++)o[y]=p(o,y);var b=new Set(o);if(b.size<=t||v[1]<e?l=!0:u=i(o),1===b.size)break}}catch(w){c=!0,s=w}finally{try{f||null==d.return||d.return()}finally{if(c)throw s}}return{edgesInMST:a,groups:u}}var _=function(r){var t,e=r.matrix,n=r.measures,a=(r.method,r.groupMaxSize),o=void 0===a?4:a,i=r.limitSize,u=void 0!==i&&i,l=r.threshold,f=void 0===l?0:l;t=u?function(r,t){var e=g(r);e.sort((function(r,t){return t[1]-r[1]}));var n=r.map((function(r,t){return t})),a=r.map((function(){return 1})),o=!0,i=!1,u=void 0;try{for(var l,f=e[Symbol.iterator]();!(o=(l=f.next()).done);o=!0){var c=l.value;if(b(n,a,c[0][0])!==b(n,a,c[0][1])){if(a[c[0][0]]+a[c[0][1]]>t)continue;w(n,a,c[0][0],c[0][1])}for(var s=0;s<n.length;s++)n[s]=b(n,a,s);if(1===new Set(n).size)break}}catch(v){i=!0,u=v}finally{try{o||null==f.return||f.return()}finally{if(i)throw u}}for(var h=new Map,d=0;d<n.length;d++)h.has(n[d])||h.set(n[d],[]),h.get(n[d]).push(d);return h}(e,o):function(r,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=g(r);n.sort((function(r,t){return t[1]-r[1]}));var a=r.map((function(r,t){return t})),o=!0,i=!1,u=void 0;try{for(var l,f=n[Symbol.iterator]();!(o=(l=f.next()).done);o=!0){var c=l.value;p(a,c[0][0])!==p(a,c[0][1])&&m(a,c[0][0],c[0][1]);for(var s=0;s<a.length;s++)a[s]=p(a,s);var h=new Set(a);if(h.size<=t||c[1]<e)break}}catch(y){i=!0,u=y}finally{try{o||null==f.return||f.return()}finally{if(i)throw u}}for(var d=new Map,v=0;v<a.length;v++)d.has(a[v])||d.set(a[v],[]),d.get(a[v]).push(v);return d}(e,o,f);var c=[],s=!0,h=!1,d=void 0;try{for(var v,y=t.values()[Symbol.iterator]();!(s=(v=y.next()).done);s=!0){var S=v.value;c.push(S.map((function(r){return n[r]})))}}catch(_){h=!0,d=_}finally{try{s||null==y.return||y.return()}finally{if(h)throw d}}return c};function x(r,t){return function(r,t){return r.every((function(r){return!isNaN(Date.parse(r[t]))&&"string"===typeof r[t]&&/^[0-9]{0,4}[-/][0-9]{0,2}([-/][0-9]{0,2}$)?/.test(r[t])||"undefined"===typeof r[t]||null===r[t]}))}(r,t)?"temporal":function(r,t){return r.every((function(r){return"number"===typeof r[t]||"undefined"===typeof r[t]||null===r[t]}))}(r,t)?"quantitative":(function(r,t){r.every((function(r){return"string"===typeof r[t]||"undefined"===typeof r[t]||null===r[t]}))}(r,t),"nominal")}function O(r,t){var e=[],n=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var l=i.value;e.push({name:l,type:x(r,l)})}}catch(f){a=!0,o=f}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return e}function T(r,t){return c(r,t).map((function(r){return{memberName:r[0],count:r[1]}}))}function D(r,t){var e=[],n=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var l=i.value;e.push({fieldName:l,distribution:T(r,l)})}}catch(f){a=!0,o=f}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return e}function F(r,t){var e=c(r,t),n=v(e.map((function(r){return r[1]})));return{fieldName:t,entropy:y(n),maxEntropy:Math.log2(e.length)}}function j(r,t){var e=[],n=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var l=i.value;e.push(F(r,l))}}catch(f){a=!0,o=f}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return e}function M(r,t){var e=f(r),n=[],a=!0,o=!1,i=void 0;try{for(var u,l=t[Symbol.iterator]();!(a=(u=l.next()).done);a=!0){var v=u.value,y="".concat(v.name,"(group)");"quantitative"===v.type&&c(r,v.name).length>50?d(r,v.name)||(e=s({dataSource:e,field:v.name,newField:y,groupNumber:8}),n.push({name:y,type:"ordinal"})):("ordinal"===v.type||"nominal"===v.type)&&c(r,v.name).length>25&&(d(r,v.name)||(e=h({dataSource:e,field:v.name,newField:y,groupNumber:8}),n.push({name:y,type:v.type})))}}catch(g){o=!0,i=g}finally{try{a||null==l.return||l.return()}finally{if(o)throw i}}return{groupedData:e,fields:t,newFields:n}}var N;self.addEventListener("message",(N=r=>{try{const{dataSource:t,fields:e}=r.data,n=a.groupFields(t,e);self.postMessage({success:!0,data:n})}catch(t){self.postMessage({success:!1,message:t.toString()})}},function(r){var t=(new Date).getTime();try{N(r)}finally{var e=(new Date).getTime()-t;console.log("Task [".concat(N.name,"] cost ").concat(e," ms."))}}),!1)}]);
//# sourceMappingURL=f3bc8a1633357a2c2611.worker.js.map