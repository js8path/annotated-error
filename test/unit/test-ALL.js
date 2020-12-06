/*
run all mocha unit tests for annotated-error
test-ALL.js
*/

/* global describe */

// es6-promise polyfill needed for IE and other platforms without native ES6 Promise
import es6Promise from 'es6-promise'
es6Promise.polyfill()

describe('All annotated-error unit tests', function () {
  require('./test-Error.js')
  require('./test-AnnotatedError.js')
})
