// This is the initial array.
var foodTruck = ["Dumpling Lady",  "Papi Queso", "Lobster Dogs", "What The Fries" ];

var foodTruckInfo = "";
var truckImage = "";



function displayTruckInfo() {
  var truckTerm = $(this).attr("truck-name");
  // var truckTerm = "The Dumpling Lady";
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://immense-savannah-32940.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + truckTerm + "&latitude=35.2271&longitude=-80.8431",
    "method": "GET",
    "headers": {
      "Authorization": "Bearer aYy9xWONrtrnWaDoz0Js2J1RkuPGT5QpxuTgNL6Wsn4Tup5Ef-AolHisHeX6Cz6DdKaZUofEDqXG8ZQKmPnsNYzvTYyuNecZgxPcHvLbTMKAoD3CW6Plu5e0IdB9XHYx",
      "cache-control": "no-cache",
      "postman-token": "d2ad7c44-d770-a99c-dfe8-50fb240cca0e"
    }

  }

  $.ajax(settings).done(function (response) {
    // console.log(response.businesses[0].image_url);
    // console.log(response.businesses[0].name);
    // console.log(response.businesses[0].is_closed);
    // console.log(response.businesses[0].display_phone);
    // console.log(response.businesses[0].rating);
    
    


    $("#image").attr(response.businesses[0].image_url);

    $("#name").text("Truck Name: " + JSON.stringify(response.businesses[0].name));
    $("#closed").text(" Are we Closed? " + JSON.stringify(response.businesses[0].is_closed));
    $("#phone").text("Phone Number: " + JSON.stringify(response.businesses[0].display_phone));
    $("#rating").text("Rating: " + JSON.stringify(response.businesses[0].rating));
  });
}


//funtion to test if there are at least 5 itmes to display
//var imageLimit = 1;

// This function will populate the buttons based on the "foodTruck" array above
function showButtons() {
  $("#buttonItems2").empty();
  $("#inputTruck").val("");
  for (var i = 0; i < foodTruck.length; i++) {
    var button = $("<button>");
    button.addClass("truck");
    button.attr("truck-name", foodTruck[i]);
    button.text(foodTruck[i]);
    $("#buttonItems2").append(button);
    $("#buttonItems2").append(" ");
    //console.log(foodTruck);
  }
}

showButtons();
// once the user adds their food truck this will list it 
$("#addTruck").on("click", function (event) {
  $("#entry").empty();
  event.preventDefault();
  var truckInput = $("#inputTruck").val().trim();
  foodTruck.push(truckInput);
  showButtons();
})

$(document).on("click", ".truck", displayTruckInfo);
showButtons();





var queryURL = "http://dataservice.accuweather.com/currentconditions/v1/349818?apikey=w1vG6KmeMiCxsIuVyuAwvJKTqXdyITMG";
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  // console.log(response[0].WeatherText);
  // console.log(response[0].HasPrecipitation);
  // console.log(response[0].PrecipitationType);
  // console.log(response[0].Temperature.Imperial.Value);
  $("#currentWeather").text("Today's weather is: " + JSON.stringify(response[0].WeatherText));
  $("#rain").text(JSON.stringify("Is it raining? " + response[0].HasPrecipitation));
  $("#temps").text(JSON.stringify("Today's Temp is " + response[0].Temperature.Imperial.Value + " F"));
  var tRow = $("<tr>");
  // Methods run on jQuery selectors return the selector they we run on
  // This is why we can create and save a reference to a td in the same statement we update its text
  var weather = $("<td>").text(response[0].WeatherText);
  var precep = $("<td>").text(response[0].HasPrecipitation);
  var temp = $("<td>").text(response[0].Temperature.Imperial.Value);
  // Append the newly created table data to the table row
  tRow.append(weather, precep, temp);
  // Append the table row to the table body
  $("tbody").append(tRow);

});