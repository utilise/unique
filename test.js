var expect = require('chai').expect
  , unique = require('./')

describe('unique', function() {
  it('should do filter to unique values', function() {
    var a = [1,2,3,3,2]
    expect(a.filter(unique)).to.be.eql([1,2,3])
  })

  it('should work with array of size 1', function() {
    var a = [1]
    expect(a.filter(unique)).to.be.eql([1])
  })

  it('should work with objects', function() {
    var a = {}, b = {}
    expect([a, a, b].filter(unique)).to.be.eql([a, b])
  })

})