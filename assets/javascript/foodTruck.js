// This is the initial array.
var foodTruck = ["Dumpling Lady", "Bleu Barn Bistro", "Papi Queso", "New Wrap Order", "Queen City Sliders", "Lobster Dogs", "TIN Kitchen", "Cousins Maine Lobster", "Yummi Banh Mi", "What The Fries", "Ace of Spuds", "Passport Dough & Co.", ];

var truckImage = "";


//funtion to test if there are at least 5 itmes to display
//var imageLimit = 5;

// This function will populate the buttons based on the "foodTruck" array above
function showButtons() {
  $("#buttonItems2").empty();
  $("#inputTruck").val("");
  for (var i = 0; i < foodTruck.length; i++) {
    var button = $("<button class='btn-dark btn-lg'>");
    button.addClass("truck");
    button.attr("truck-name", foodTruck[i]);
    button.text(foodTruck[i]);
    $("#buttonItems2").append(button);
    $("#buttonItems2").append(" ");
  }
}


showButtons();
// once the user adds their food truck this will list it 
$("#addTruck").on("click", function (event) {
  $("#entry").empty();
  event.preventDefault();
  var truckInput = $("#inputTruck").val().trim();
  var truckTerm = $(this).attr("truck-name");

// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972",
//   "method": "GET",
//   "headers": {
//     "authorization": "Bearer aYy9xWONrtrnWaDoz0Js2J1RkuPGT5QpxuTgNL6Wsn4Tup5Ef-AolHisHeX6Cz6DdKaZUofEDqXG8ZQKmPnsNYzvTYyuNecZgxPcHvLbTMKAoD3CW6Plu5e0IdB9XHYx",
//     "cache-control": "no-cache",
//     "postman-token": "0cfa20c9-2ed1-9e6b-c114-f58aa5fea489"
//   }
//  }

var queryURL =  "http://dataservice.accuweather.com/currentconditions/v1/349818?apikey=w1vG6KmeMiCxsIuVyuAwvJKTqXdyITMG";

 $.ajax(settings).done(function (response) {
  console.log(response);
 });
});