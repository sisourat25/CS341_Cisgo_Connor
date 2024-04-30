/**
 * search-bar-script.js
 * 
 * first listens for 'enter' key event inside searchBar text input box
 * then takes whatever user has typed in and searches using the text
 *      can potentially use filterSelection, but needs tinkering
 * 
 * 
 * searchdb(input)
 * 
 * gets data from db and scans all it's fields to see if it matches input in search box
 * then creates cards (for now) with as many results as it can find matching or including what is entered
 * 
 * Aether Mocker
 */

//or if 'enter' key was pressed while typing in search bar
const node = document.getElementsByClassName("searchBar")[0];
const searchInput = document.getElementById("searchBar");

node.addEventListener("keyup", function(event) {
    const { value } = event.target;
    if (event.key === "Enter") {
        console.log("Search has been made. " + value);
        searchdb(value);
    }
});

function searchdb(value) {
    //get data from db and search it
    $.get('/orders', function(data) {

        //clear sidebar cards first before appending results
       $('.card').remove();

        //then update the cards if it matches in any of my specified fields
        $.each(data, function(index, item) {
            //can be changed... but for searching by status rather than using buttons
            if(value === "current") value = "active";
            if(value === "past") value = "archive";

            //basically... if it is found in any specified field make a card for it
            if( (value).toLocaleLowerCase().localeCompare((item.NAME).toLocaleLowerCase()) === 0 
                || (item.NAME).toLocaleLowerCase().includes((value).toLocaleLowerCase())
                || (value).toLocaleLowerCase().localeCompare((item.EMAIL).toLocaleLowerCase()) === 0 
                || (item.EMAIL).toLocaleLowerCase().includes((value).toLocaleLowerCase())
                || (value).toLocaleLowerCase().localeCompare((item.CITY).toLocaleLowerCase()) === 0 
                || (item.CITY).toLocaleLowerCase().includes((value).toLocaleLowerCase())
                || (value).toLocaleLowerCase().localeCompare((item.COUNTRY).toLocaleLowerCase()) === 0 
                || (item.COUNTRY).toLocaleLowerCase().includes((value).toLocaleLowerCase())
                || (value).toLocaleLowerCase().localeCompare((item.DESCRIPTION).toLocaleLowerCase()) === 0 
                || (item.DESCRIPTION).toLocaleLowerCase().includes((value).toLocaleLowerCase())
                || (value).toLocaleLowerCase().localeCompare((item.STATUS).toLocaleLowerCase()) === 0 
                || (item.STATUS).toLocaleLowerCase().includes((value).toLocaleLowerCase())) {

                console.log("found it: " + i + " " + value);
    
                // Create a new card element
                var card = $('<div class="card" onclick="declare()"></div>');
    
                // Populate the card with data
                card.append('<p class="card-name">Name: ' + item.NAME + '</p>');
                card.append('<p class="card-loc">Location: ' + item.CITY + ', ' + item.COUNTRY + '</p>');
                card.append('<p class="card-email">Email: ' + item.EMAIL + '</p>');
                card.append('<p class="card-description">Description: ' + item.DESCRIPTION + '</p>');
    
                // Append the card to the container
                $('#sideBarConatiner').append(card);
            }
        });

        //if no results are made, say so. currently doesn't work...
        if(document.getElementsByClassName('card').length == 0) {
            console.log("searchBar: no results for " + value);
            var card = $('<div class="card"></div>');
            card.append('<br><p class="card-name">No Results found for "'+ value +'". Try searching something else.</p><br>');
            $('#sideBarConatiner').append(card);
        }

        //reset search bar for the next search
        var text = document.getElementById("search");
        text.value = text.defaultValue;
    });
}