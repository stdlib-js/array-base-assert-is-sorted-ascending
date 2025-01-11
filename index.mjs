// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.3.0-esm/index.mjs";function i(i){var a,d,n,m,o,j;if(n=t(i),d=r(i)?s(n):e(n),0===(a=i.length))return!1;for(m=d(i,0),j=1;j<a;j++){if(m>(o=d(i,j)))return!1;m=o}return!0}export{i as default};
//# sourceMappingURL=index.mjs.map
