var assert = require('chai').assert
var helloWorld = require('../src/index')

describe('Hello World', function(){
  it('Should return a hello world string', function(){
    var returnedString = helloWorld()
    assert.equal(returnedString, 'Hello World!')
  })
})