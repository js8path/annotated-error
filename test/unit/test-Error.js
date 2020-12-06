/*
mocha tests to generate default behavior of javascript native Error class
test-AnnotatedError.js
*/

/* global describe, it */

let chai = require('chai')
let assert = chai.assert

describe('Error class - Demonstrate behavior of js native Error class', function () {
  describe('created with default parameters', function () {
    let err = new Error()
    it('has expected err.name', function () {
      assert.equal(err.name, 'Error')
    })
    it('has expected err.message', function () {
      assert.equal(err.message, '')
    })
    it('has expected String(err)', function () {
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
    let err = new Error('')
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
    let err = new Error('hello there')
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

/*
        assert.isNotOk(validate(dataToValidate))
        let errors = validate.errors
        assert.equal(JSON.stringify(errors), '...')
 */
