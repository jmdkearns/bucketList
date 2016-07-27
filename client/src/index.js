var bucketList = require('./bucketList/bucketList');

window.onload = function(){
  console.log("app running");
  console.log(bucketList);

  var url = 'https://restcountries.eu/rest/v1'
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function () {
    if (request.status === 200) {
       var jsonString = request.responseText;
       var countries = JSON.parse(jsonString);
       main(countries);
    }
  }
  request.send();

};

var main = function (countries) {
 populateSelect(countries);
 var cached = localStorage.getItem("selectedCountry");
 var selectedCountry = countries[0];
 if(cached){
   selectedCountry = JSON.parse(cached);
   document.querySelector('#countries').selectedIndex = selectedCountry.index;
 }

 var button = document.getElementById('button');
   button.onclick = function(e) {
     e.preventDefault();
     var input = document.getElementById('countries');
     var selectedIndex = input.value
     var selectedCountry = countries[ selectedIndex ]
     console.log( 'country', selectedCountry)

     var request = new XMLHttpRequest();
     request.open( "POST", '/bucketlist' );
     request.setRequestHeader( "Content-Type", "application/json" );
     request.onload = function() {
        if( request.status === 200 ) {
        }
      }
      request.send( JSON.stringify( { selectedCountry } ) );
  }
}



var populateSelect = function (countries) {
 var parent = document.querySelector('#countries');
 countries.forEach(function (item, index) {
   item.index = index;
   var option = document.createElement("option");
   option.value = index.toString();
   option.text = item.name;
   parent.appendChild(option);
 });
 parent.style.display = 'block';
 parent.addEventListener('change', function (e) {
   var index = this.value;
   var country = countries[index];
   localStorage.setItem("selectedCountry", JSON.stringify(country));
 });
}






