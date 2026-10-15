<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zwxsy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Subtract elements of a second one-dimensional double-precision complex floating-point ndarray from the corresponding elements of a first one-dimensional double-precision complex floating-point ndarray and assign the results to elements in a third one-dimensional double-precision complex floating-point ndarray.

<section class="intro">

This BLAS extension implements the operation

<!-- <equation class="equation" label="eq:wxsy" align="center" raw="\mathbf{w} = \mathbf{x} - \mathbf{y}" alt="Equation for wxsy operation."> -->

```math
\mathbf{w} = \mathbf{x} - \mathbf{y}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbf{w} = \mathbf{x} - \mathbf{y}" data-equation="eq:wxsy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@6646bb2c2d9708b4cffa818600b20b35d81e5b45/lib/node_modules/@stdlib/blas/ext/base/ndarray/zwxsy/docs/img/equation_wxsy.svg" alt="Equation for wxsy operation.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-ndarray-zwxsy
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var zwxsy = require( '@stdlib/blas-ext-base-ndarray-zwxsy' );
```

#### zwxsy( arrays )

Subtracts elements of a second one-dimensional double-precision complex floating-point ndarray from the corresponding elements of a first one-dimensional double-precision complex floating-point ndarray and assigns the results to elements in a third one-dimensional double-precision complex floating-point ndarray.

```javascript
var Complex128Vector = require( '@stdlib/ndarray-vector-complex128' );

var x = new Complex128Vector( [ 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 ] );
var y = new Complex128Vector( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 ] );
var w = new Complex128Vector( 3 );

zwxsy( [ x, y, w ] );
// w => <ndarray>[ <Complex128>[ -1.0, 1.0 ], <Complex128>[ 4.0, -4.0 ], <Complex128>[ -4.0, 1.0 ] ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   first one-dimensional input ndarray.
    -   second one-dimensional input ndarray.
    -   a one-dimensional output ndarray.

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var Complex128Vector = require( '@stdlib/ndarray-vector-complex128' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );
var zwxsy = require( '@stdlib/blas-ext-base-ndarray-zwxsy' );

var opts = {
    'dtype': 'float64'
};

var x = new Complex128Vector( discreteUniform( 20, -100, 100, opts ) );
console.log( ndarray2array( x ) );

var y = new Complex128Vector( discreteUniform( 20, -100, 100, opts ) );
console.log( ndarray2array( y ) );

var w = new Complex128Vector( 10 );

zwxsy( [ x, y, w ] );
console.log( ndarray2array( w ) );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/ndarray/zwxsy.h"
```

#### stdlib_blas_ext_zwxsy( arrays )

Subtracts elements of a second one-dimensional double-precision complex floating-point ndarray from the corresponding elements of a first one-dimensional double-precision complex floating-point ndarray and assigns the results to elements in a third one-dimensional double-precision complex floating-point ndarray.

```c
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include <stdint.h>

// Create ndarrays:
const double dataX[] = { 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 };
const double dataY[] = { 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 };
double dataW[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };
int64_t shape[] = { 3 };
int64_t strides[] = { STDLIB_NDARRAY_COMPLEX128_BYTES_PER_ELEMENT };
int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

struct ndarray *x = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX128, (uint8_t *)dataX, 1, shape, strides, 0, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, 1, submodes );
struct ndarray *y = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX128, (uint8_t *)dataY, 1, shape, strides, 0, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, 1, submodes );
struct ndarray *w = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX128, (uint8_t *)dataW, 1, shape, strides, 0, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, 1, submodes );

// Perform computation:
const struct ndarray *arrays[] = { x, y, w };
stdlib_blas_ext_zwxsy( arrays );

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
stdlib_ndarray_free( w );
```

The function accepts the following arguments:

-   **arrays**: `[in] struct ndarray**` list containing the following ndarrays:

    -   `[in] struct ndarray*` first one-dimensional input ndarray.
    -   `[in] struct ndarray*` second one-dimensional input ndarray.
    -   `[out] struct ndarray*` a one-dimensional output ndarray.

```c
void stdlib_blas_ext_zwxsy( const struct ndarray *arrays[] );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/ndarray/zwxsy.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    // Create data buffers:
    const double dataX[] = { 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 };
    const double dataY[] = { 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 };
    double dataW[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of array dimensions:
    const int64_t ndims = 1;

    // Specify the array shape:
    int64_t shape[] = { 3 };

    // Specify the array strides:
    int64_t strides[] = { STDLIB_NDARRAY_COMPLEX128_BYTES_PER_ELEMENT };

    // Specify the byte offset:
    const int64_t offset = 0;

    // Specify the array order:
    const enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

    // Specify the index mode:
    const enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

    // Specify the subscript index modes:
    int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };
    const int64_t nsubmodes = 1;

    // Create ndarrays:
    struct ndarray *x = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX128, (uint8_t *)dataX, ndims, shape, strides, offset, order, imode, nsubmodes, submodes );
    struct ndarray *y = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX128, (uint8_t *)dataY, ndims, shape, strides, offset, order, imode, nsubmodes, submodes );
    struct ndarray *w = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX128, (uint8_t *)dataW, ndims, shape, strides, offset, order, imode, nsubmodes, submodes );

    if ( x == NULL || y == NULL || w == NULL ) {
        fprintf( stderr, "Error allocating memory.\n" );
        exit( 1 );
    }

    // Define a list of ndarrays:
    const struct ndarray *arrays[] = { x, y, w };

    // Perform computation:
    stdlib_blas_ext_zwxsy( arrays );

    // Print the result:
    const stdlib_complex128_t *v = (const stdlib_complex128_t *)dataW;
    for ( int i = 0; i < 3; i++ ) {
        printf( "w[ %i ] = %lf + %lfi\n", i, stdlib_complex128_real( v[ i ] ), stdlib_complex128_imag( v[ i ] ) );
    }

    // Free allocated memory:
    stdlib_ndarray_free( x );
    stdlib_ndarray_free( y );
    stdlib_ndarray_free( w );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-ndarray-zwxsy.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-ndarray-zwxsy

[test-image]: https://github.com/stdlib-js/blas-ext-base-ndarray-zwxsy/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-zwxsy/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-ndarray-zwxsy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-ndarray-zwxsy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-ndarray-zwxsy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-ndarray-zwxsy/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-zwxsy/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-zwxsy/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-zwxsy/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-zwxsy/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-zwxsy/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-zwxsy/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-zwxsy/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-ndarray-zwxsy/main/LICENSE

</section>

<!-- /.links -->
