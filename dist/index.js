"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var s=q(function(g,n){
var d=require('@stdlib/ndarray-base-numel-dimension/dist'),u=require('@stdlib/ndarray-base-stride/dist'),a=require('@stdlib/ndarray-base-offset/dist'),v=require('@stdlib/ndarray-base-data-buffer/dist'),o=require('@stdlib/blas-ext-base-zwxsy/dist').ndarray;function x(e){var r=e[0],t=e[1],i=e[2];return o(d(r,0),v(r),u(r,0),a(r),v(t),u(t,0),a(t),v(i),u(i,0),a(i)),i}n.exports=x
});var c=s();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
