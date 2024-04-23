$(document).ready(function() {

    // Populate start date year select
    var currentYear = new Date().getFullYear();
    for (var i = currentYear; i >= 1900; i--) {
        $('#startdate_year').append($('<option>', {
            value: i,
            text: i
        }));
    }

    // Populate end date year select
    for (var i = currentYear + 10; i >= 1900; i--) {
        $('#enddate_year').append($('<option>', {
            value: i,
            text: i
        }));
    }

    // Function to fetch suggestions based on input location
    function fetchSuggestions(location) {
        var url = 'https://nominatim.openstreetmap.org/search?q=' + location + '&format=json&limit=5';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                showSuggestions(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    // Function to display suggestions
    function showSuggestions(suggestions) {
        var suggestionsDiv = $('#suggestions');
        suggestionsDiv.html('');
        suggestions.forEach(suggestion => {
            var suggestionElement = $('<div></div>').text(suggestion.display_name);
            suggestionElement.on('click', function () {
                $('#location').val(suggestion.display_name);
                $('#suggestions').html(''); // Clear suggestions
            });
            suggestionsDiv.append(suggestionElement);
        });
        suggestionsDiv.css('display', 'block'); // Show suggestions
    }

    // Function to handle click event for search location button
    $('#searchLocation').on('click', function() {
        var location = $('#location').val();
        if (location.length > 2) {
            fetchSuggestions(location);
        }
    });

    // Form submission
    $('#databaseForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Collect form data
        var formData = {

            name: $('#name').val(),
            event: $('#event').val(),
            email: $('#email').val(),
            emailcheck: $('#display_email').val(),
            city: '', // Placeholder for city, to be filled later
            country: '', // Placeholder for country, to be filled later
            department: $('#department').val(),
            type: $('#type').val(),
            status: $('#status').val(),
            startmonth: $('#startdate_month').val(),
            startyear: $('#startdate_year').val(),
            endmonth: $('#enddate_month').val(),
            endyear: $('#enddate_year').val(),
            description: $('#description').val()
        };

        // Fetch coordinates based on selected location
        var location = $('#location').val();
        console.log(location);
        fetchCoordinates(location, function(coordinates, city, country) {
            // Add coordinates, city, and country to formData
            formData.coorlat = coordinates.lat;
            formData.coorlong = coordinates.lon;
            formData.city = city;
            formData.country = country;

            console.log(formData);

            // Send a POST request to the server to add the new order
            $.post('/formSubmitRoute', formData, function(response) {
                $('#databaseForm')[0].reset(); // Reset the form after submission

                // Redirect to formConfirmation.html after successful submission
                window.location.href = 'formConfirmation.html';
            });
        });
    });

    // Function to fetch coordinates based on selected location
    function fetchCoordinates(location, callback) {
        var url = 'https://nominatim.openstreetmap.org/search?q=' + location + '&format=json&limit=1';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the response data to inspect its structure
                if (data.length > 0) {
                    var coordinates = {
                        lat: data[0].lat,
                        lon: data[0].lon
                    };
                    // Perform reverse geocoding to get city and country
                    fetchReverseGeocoding(coordinates, function(city, country) {
                        callback(coordinates, city, country);
                    });
                } else {
                    alert("Location not found");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred while fetching coordinates.");
            });
    }

    // Function to fetch reverse geocoding based on coordinates
    function fetchReverseGeocoding(coordinates, callback) {
        var url = 'https://nominatim.openstreetmap.org/reverse?lat=' + coordinates.lat + '&lon=' + coordinates.lon + '&format=json';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the response data to inspect its structure
                var city = data.address.city || '';
                var country = data.address.country || '';
                callback(city, country);
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred while fetching reverse geocoding data.");
            });
    }
});
