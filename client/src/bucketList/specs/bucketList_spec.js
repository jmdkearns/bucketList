var bucketList = require('../bucketList');
var country = require('../country');
var assert = require('assert');

describe('bucketList', function() {
  it('should start with no countries', function() {
    var bucketList = new bucketList();
    assert.equal(0, bucketList.countries.length);
  })
})
