/*
mocha tests for AnnotatedError class
test-AnnotatedError.js
*/

/* global describe, it */

import AnnotatedError from '../../src/main.js'

let chai = require('chai')
let assert = chai.assert

describe('AnnotatedError class', function () {

  describe('no opts object provided - mimic Error class behavior', function () {
    describe('created with default parameters', function () {
      let err = new AnnotatedError()
      it('err.name', function () {
        assert.equal(err.name, 'Error')
      })
      it('err.message', function () {
        assert.equal(err.message, '')
      })
      it('String(err)', function () {
        assert.equal(String(err), 'Error')
      })
      it('can be thrown', function () {
        function throwIt () {
          throw err
        }
        assert.throws(throwIt, err)
      })
    })

    describe('created with empty message parameter', function () {
      let err = new AnnotatedError('')
      it('has expected err.name', function () {
        assert.equal(err.name, 'Error')
      })
      it('has expected err.message', function () {
        assert.equal(err.message, '')
      })
      it('has expected String(err)', function () {
        assert.equal(String(err), 'Error')
      })
    })

    describe('created with non-empty message parameter', function () {
      let err = new AnnotatedError('hello there')
      it('has expected err.name', function () {
        assert.equal(err.name, 'Error')
      })
      it('has expected err.message', function () {
        assert.equal(err.message, 'hello there')
      })
      it('has expected String(err)', function () {
        assert.equal(String(err), 'Error: hello there')
      })
    })
  })

  describe('opts object provided', function () {
    describe('created with specified options', function () {
      let opts = {
        name: 'TestError',
        data: {this: 'is invalid'},
        message: 'test message 2'
      }
      let err = new AnnotatedError(opts)
      it('has appropriate name value', function () {
        assert.equal(err.name, opts.name)
      })
      it('has expected data value', function () {
        assert.deepEqual(err.data, opts.data)
      })
      it('has expected message', function () {
        assert.equal(err.message, opts.message)
      })
      it('has expected String(err)', function () {
        assert.equal(String(err), 'TestError: test message 2')
      })
      it('can be thrown', function () {
        function throwIt () {
          throw err
        }
        assert.throws(throwIt, err)
      })
    })

    describe('AnnotatedError with various message options', function () {
      it('uses opts.message if no explicit message provided', function () {
        let err = new AnnotatedError({message: 'msg 123'})
        assert.equal(err.message, 'msg 123')
        assert.equal(String(err), 'Error: msg 123')
      })
      it('uses opts.message if blank explicit message provided', function () {
        let err = new AnnotatedError({message: 'msg 123'}, '')
        assert.equal(err.message, 'msg 123')
        assert.equal(String(err), 'Error: msg 123')
      })
      it('uses non-blank explicit message instead of opts.message', function () {
        let err = new AnnotatedError({message: 'msg 123'}, 'msg 456')
        assert.equal(err.message, 'msg 456')
        assert.equal(String(err), 'Error: msg 456')
      })
    })
  })
})

/*
        assert.isNotOk(validate(dataToValidate))
        let errors = validate.errors
        assert.equal(JSON.stringify(errors), '...')
 */
