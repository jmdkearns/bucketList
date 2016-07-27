var bucketList = function() {
  this.countries = [];
}

bucketList.prototype = {
  addCountry: function(country) {
    this.countries.push(country);
  }
}

module.exports = bucketList;