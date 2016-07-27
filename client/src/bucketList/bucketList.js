var bucketList = function() {
  this.countries = [];
}

BuckList.prototype = {
  addCountry: function(country) {
    this.countries.push(country);
  }
}

module.exports = bucketList;