var expect = require('chai').expect
  , unique = require('./')

describe('unique', function() {
  it('should do filter to unique values', function() {
    var a = [1,2,3,3,2]
    expect(a.reduce(unique), 0).to.be.eql([1,2,3])
  })
})