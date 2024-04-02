// Connor Sisourath

console.log("hello from scripts")

// Clear the container first
$('#sideBarContainer').empty();

$(document).ready(function() {
    // Issue a GET request to fetch data from the server
    $.get('/orders', function(data) {

        


        // Loop through the received data
        $.each(data, function(index, item) {

            console.log("CARD ADDED");
            // Create a new card element
            var card = $('<div class="card" onclick="declare()"></div>');

            // Populate the card with data
            card.append('<p class="card-name">Name: ' + item.NAME + '</p>');
            card.append('<p class="card-loc">Location: ' + item.CITY + ', ' + item.COUNTRY + '</p>');
            card.append('<p class="card-email">Email: ' + item.EMAIL + '</p>');
            card.append('<p class="card-description">Description: ' + item.DESCRIPTION + '</p>');

            // Append the card to the container
            $('#sideBarConatiner').append(card);
        });
    });
});

function declare() {
    if(document.getElementById("mySidebar").style.width == "350px") {
        document.getElementById("mySidebar").style.width = "550px";
        document.getElementById("container").style.marginLeft= "550px";
    }
    else {
        document.getElementById("mySidebar").style.width = "350px";
        document.getElementById("container").style.marginLeft= "350px";
    }
}