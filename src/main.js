/*
    AnnotatedError - extended error class
    annotated-error.js

*/

import _isObject from 'lodash/isObject'
import _merge from 'lodash/merge'

let optsDefault = {
  name: 'Error',
  data: null,
  message: ''
}

class AnnotatedError extends Error {
  constructor (optsOrMessage, msgOrParam2, ...params) {
    let opts = optsOrMessage
    let message = optsOrMessage
    let param2 = msgOrParam2
    if (_isObject(opts)) {
      opts = _merge({}, optsDefault, opts)
      message = msgOrParam2 || opts.message
      super(message, ...params)
    } else {
      opts = _merge({}, optsDefault)
      super(message, param2, ...params)
    }

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AnnotatedError)
    }

    this.name = opts.name
    this.data = opts.data
  }
}

export default AnnotatedError
