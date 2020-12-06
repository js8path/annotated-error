# annotated-error
Javascript Error class with added data

## Usage

### annotated-error javascript module

Usage:

```javascript
import AnnotatedError from '@js8path/annotated-error'

// usage 
// new AnnotatedError([opts,] [msg[, ...addlParams]])
// opts is object containing these optional values
//   name: error name. Default 'Error'. Will be found in new err object as err.name
//   data: Any data. Default null. Will be found in new err object as err.data 
//   message: Any string message. Default ''. Will be found in new err object as err.message
// msg: if present, will override opts.message 

// typical usage example
try {
  throw new AnnotatedError({
    name: 'MyTestErrorType',
    data: { some: 'thing', any: 'where'},
    message: 'typical usage'
  })
} catch(err) {
  console.log(err.name) // MyTestErrorType
  console.log(String(err)) // MyTestErrorType: typical usage
  console.log(JSON.stringify(err.data)) // {"some":"thing","any":"where"}
}

// same behavior as Error of no opts object given
try {
  throw new AnnotatedError('mimics Error')
} catch(err) {
  console.log(err.name) // Error
  console.log(String(err)) // Error: mimics Error
}

// default name is Error, explicit message param overrides opts.message
try {
  throw new AnnotatedError(
    {
      data: { some: 'thing', any: 'where'},
      message: 'opt message'
    },
    'explicit message'
  )
} catch(err) {
  console.log(err.name) // Error
  console.log(String(err)) // Error: explicit message
  console.log(JSON.stringify(err.data)) // {"some":"thing","any":"where"}
}
```

## Development

### development process

Prepare package for development with
  `yarn install`

Run unit tests and coverage once 
  `yarn run test`

Build distribution files 
  `yarn run build`

Start continuous testing with: 
  `yarn run dev`

This will open a web-browser screen with unit test results. 
The tests are re-run every time that changed source code is saved. 

## License

MIT, ©2020, Correspondence Technologies, LLC
