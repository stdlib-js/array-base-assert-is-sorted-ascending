/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var AccessorArray = require( '@stdlib/array-base-accessor' );
var isSortedAscending = require( './../lib' );

var x = new AccessorArray( [ 1, 2, 3, 4 ] );
var bool = isSortedAscending( x );
console.log( bool );
// => true

x = new AccessorArray( [ 1, 1, 1, 1 ] );
bool = isSortedAscending( x );
console.log( bool );
// => true

x = new AccessorArray( [ 1 ] );
bool = isSortedAscending( x );
console.log( bool );
// => true

x = new AccessorArray( [ 1, 3, 2, 4 ] );
bool = isSortedAscending( x );
console.log( bool );
// => false

x = new AccessorArray( [ 4, 3, 2, 1 ] );
bool = isSortedAscending( x );
console.log( bool );
// => false
