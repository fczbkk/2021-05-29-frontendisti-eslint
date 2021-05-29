(()=>{"use strict";var t=/\s/;var r=/^\s+/;const n=function(n){return n?n.slice(0,function(r){for(var n=r.length;n--&&t.test(r.charAt(n)););return n}(n)+1).replace(r,""):n},e=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},o="object"==typeof global&&global&&global.Object===Object&&global;var i="object"==typeof self&&self&&self.Object===Object&&self;const u=o||i||Function("return this")(),a=u.Symbol;var c=Object.prototype,s=c.hasOwnProperty,l=c.toString,f=a?a.toStringTag:void 0;var p=Object.prototype.toString;var h=a?a.toStringTag:void 0;const v=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":h&&h in Object(t)?function(t){var r=s.call(t,f),n=t[f];try{t[f]=void 0;var e=!0}catch(t){}var o=l.call(t);return e&&(r?t[f]=n:delete t[f]),o}(t):function(t){return p.call(t)}(t)},y=function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==v(t)};var _=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,b=/^0o[0-7]+$/i,g=parseInt;const j=function(t){return t?Infinity===(t=function(t){if("number"==typeof t)return t;if(y(t))return NaN;if(e(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=e(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var o=d.test(t);return o||b.test(t)?g(t.slice(2),o?2:8):_.test(t)?NaN:+t}(t))||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0},O=function(t){var r=j(t),n=r%1;return r==r?n?r-n:r:0},m=function(t,r,n,e){var o=t.length;for((n=O(n))<0&&(n=-n>o?0:o+n),(e=void 0===e||e>o?o:O(e))<0&&(e+=o),e=n>e?0:function(t){return t?(r=O(t),n=0,e=4294967295,r==r&&(void 0!==e&&(r=r<=e?r:e),void 0!==n&&(r=r>=n?r:n)),r):0;var r,n,e}(e);n<e;)t[n++]=r;return t},$=function(t,r){return t===r||t!=t&&r!=r},w=function(t){if(!e(t))return!1;var r=v(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r};var z=/^(?:0|[1-9]\d*)$/;const S=function(t,r,n){if(!e(n))return!1;var o=typeof r;return!!("number"==o?function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!w(t)}(n)&&function(t,r){var n=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&z.test(t))&&t>-1&&t%1==0&&t<r}(r,n.length):"string"==o&&r in n)&&$(n[r],t)},A=Array.isArray;var P=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,x=/^\w*$/;const F=u["__core-js_shared__"];var N,C=(N=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"";var E=Function.prototype.toString;var T=/^\[object .+?Constructor\]$/,I=Function.prototype,k=Object.prototype,R=I.toString,G=k.hasOwnProperty,M=RegExp("^"+R.call(G).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const U=function(t){return!(!e(t)||(r=t,C&&C in r))&&(w(t)?M:T).test(function(t){if(null!=t){try{return E.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var r},q=function(t,r){var n=function(t,r){return null==t?void 0:t[r]}(t,r);return U(n)?n:void 0},B=q(Object,"create");var D=Object.prototype.hasOwnProperty;var H=Object.prototype.hasOwnProperty;function J(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}J.prototype.clear=function(){this.__data__=B?B(null):{},this.size=0},J.prototype.delete=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},J.prototype.get=function(t){var r=this.__data__;if(B){var n=r[t];return"__lodash_hash_undefined__"===n?void 0:n}return D.call(r,t)?r[t]:void 0},J.prototype.has=function(t){var r=this.__data__;return B?void 0!==r[t]:H.call(r,t)},J.prototype.set=function(t,r){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=B&&void 0===r?"__lodash_hash_undefined__":r,this};const K=J,L=function(t,r){for(var n=t.length;n--;)if($(t[n][0],r))return n;return-1};var Q=Array.prototype.splice;function V(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}V.prototype.clear=function(){this.__data__=[],this.size=0},V.prototype.delete=function(t){var r=this.__data__,n=L(r,t);return!(n<0||(n==r.length-1?r.pop():Q.call(r,n,1),--this.size,0))},V.prototype.get=function(t){var r=this.__data__,n=L(r,t);return n<0?void 0:r[n][1]},V.prototype.has=function(t){return L(this.__data__,t)>-1},V.prototype.set=function(t,r){var n=this.__data__,e=L(n,t);return e<0?(++this.size,n.push([t,r])):n[e][1]=r,this};const W=V,X=q(u,"Map"),Y=function(t,r){var n,e,o=t.__data__;return("string"==(e=typeof(n=r))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n)?o["string"==typeof r?"string":"hash"]:o.map};function Z(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}Z.prototype.clear=function(){this.size=0,this.__data__={hash:new K,map:new(X||W),string:new K}},Z.prototype.delete=function(t){var r=Y(this,t).delete(t);return this.size-=r?1:0,r},Z.prototype.get=function(t){return Y(this,t).get(t)},Z.prototype.has=function(t){return Y(this,t).has(t)},Z.prototype.set=function(t,r){var n=Y(this,t),e=n.size;return n.set(t,r),this.size+=n.size==e?0:1,this};const tt=Z;function rt(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var e=arguments,o=r?r.apply(this,e):e[0],i=n.cache;if(i.has(o))return i.get(o);var u=t.apply(this,e);return n.cache=i.set(o,u)||i,u};return n.cache=new(rt.Cache||tt),n}rt.Cache=tt;var nt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,et=/\\(\\)?/g;const ot=(it=rt((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(nt,(function(t,n,e,o){r.push(e?o.replace(et,"$1"):n||t)})),r}),(function(t){return 500===ut.size&&ut.clear(),t})),ut=it.cache,it);var it,ut;var at=a?a.prototype:void 0,ct=at?at.toString:void 0;const st=function t(r){if("string"==typeof r)return r;if(A(r))return function(t,r){for(var n=-1,e=null==t?0:t.length,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o}(r,t)+"";if(y(r))return ct?ct.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},lt=function(t,r){return A(t)?t:function(t,r){if(A(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!y(t))||x.test(t)||!P.test(t)||null!=r&&t in Object(r)}(t,r)?[t]:ot(function(t){return null==t?"":st(t)}(t))},ft=function(t){if("string"==typeof t||y(t))return t;var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},pt=(ht=Array(3),vt="x",(dt=null==ht?0:ht.length)?(yt&&"number"!=typeof yt&&S(ht,vt,yt)&&(yt=0,_t=dt),m(ht,vt,yt,_t)):[]);var ht,vt,yt,_t,dt;console.log(pt);const bt=function(t,r,n){var e=null==t?void 0:function(t,r){for(var n=0,e=(r=lt(r,t)).length;null!=t&&n<e;)t=t[ft(r[n++])];return n&&n==e?t:void 0}(t,r);return void 0===e?n:e}({a:{b:{c:"d"}}},"a.b.c");console.log(bt)})();