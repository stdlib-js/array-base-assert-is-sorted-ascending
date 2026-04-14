"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=c(function(A,u){
var f=require('@stdlib/array-base-assert-is-accessor-array/dist'),o=require('@stdlib/array-base-accessor-getter/dist'),l=require('@stdlib/array-base-getter/dist'),q=require('@stdlib/array-dtype/dist');function d(e){var r,t,i,s,v,a;if(i=q(e),f(e)?t=o(i):t=l(i),r=e.length,r===0)return!1;for(s=t(e,0),a=1;a<r;a++){if(v=t(e,a),s>v)return!1;s=v}return!0}u.exports=d
});var g=n();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
