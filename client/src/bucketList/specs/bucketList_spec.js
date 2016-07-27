var bucketList = require('../bucketList');
var country = require('../country');
var assert = require('assert');

describe('bucketList', function() {

  it('should start with no countries', function() {
    var bucketList1 = new bucketList();
    assert.equal(0, bucketList1.countries.length);
  })

  it('should add country to list', function() {
    var bucketList1 = new bucketList();
    var country1 = new country("France", "Europe", "Eiffel Tower")
    bucketList1.addCountry(country1);
    assert.equal(1, bucketList1.countries.length);
  })

})
