/** 
 * mapScripts.js
 * 
 * displays all locations on the map. works with filterSelection() so it displays all locations
 * of relevant status (and in future will for other specific searches as well)
 * uses amcharts to create and display map.
 * (prev in a script in index.html, moved for my sanity - aether)
 * https://www.w3schools.com/howtoi/tryit.asp?filename=tryhow_js_filter_elements 
 * 
 * Authors: Aether Mocker + CISGO-SPIN
 */

//https://www.amcharts.com/docs/v5/charts/map-chart/map-api/
//chart.convert(lat, long) - coords to screen point
  
/**
 * 1) post data in JSON to a specific location.
 * 2) retrieve (get) data in JSON in am5.ready and set pointSeries data
 * 3) when filterSelection() is called, post the correct data first. 
 */


//important vars for reference:
var modal;
var modalSetup = false;
var allOpps = [];
var selectedOpps = {};
var selectedPoints = [];

//make all data from db into json objs (in allOpps array)
$.getJSON('/orders', function(json){ 
  allOpps = json;
  //filterSelection("all");
});

/* BEGINNING OF MAP SCRIPT */
am5.ready(function () {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root),
      am5themes_Moonrise.new(root)
    ]);

    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    var chart = root.container.children.push(am5map.MapChart.new(root, {
      panX: "rotateX",
      projection: am5map.geoEquirectangular()
    }));

    var colorSet = am5.ColorSet.new(root, {});

    // Create polygon series for continents
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var continentSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_continentsLow,
      exclude: ["antarctica"]
    }));

    continentSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true,
      fill: am5.color(0x1e1656)
    });

    continentSeries.mapPolygons.template.states.create("hover", {
      fill: root.interfaceColors.get("primaryButtonActive")
    });

    // Set up zooming in on clicked continent
    continentSeries.mapPolygons.template.events.on("click", function (ev) {
      continentSeries.zoomToDataItem(ev.target.dataItem);
      continentSeries.hide();
      pointSeries.show();
      countrySeries.show();
      homeButton.show();
    });

    // Create polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var countrySeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      exclude: ["AQ"],
      visible: false
    }));

    countrySeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true,
      fill: am5.color(0x1e1656)
    });

    countrySeries.mapPolygons.template.states.create("hover", {
      fill: root.interfaceColors.get("primaryButtonActive")
    });

    // Nate modified code begins:

    // Create polygon series for possible destinations
    var pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        visible: false
      })
    );

    //not sure what this does.
    modal = am5.Modal.new(root, {});

    /** 
     * when status button becomes active (is clicked)...
     * load the city data from the db (allOpps)
     * update map (FILTER HERE)
     */

    $.getJSON('/orders', function (ret) {
      var cities = [];
        for(var i = 0; i < allOpps.length; i++) {
          if(allOpps[i].STATUS == "all") {
            var obj = {
              geometry: { type: 'Point', 
                          coordinates: [allOpps[i].COORLAT, allOpps[i].COORLONG] },
              title:  allOpps[i].EVENT, //name
              id: allOpps[i].NUMID //id number
            };
        
            cities[i] = obj;
          }
        }
      pointSeries.data.setAll(cities);
    });

    // GeoJSON data
    var cities = {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "properties": { "name": "New York City" },
        "geometry": { "type": "Point", 
                      "coordinates": [-73.778137, 40.641312] }
      }, {
        "type": "Feature",
        "properties": { "name": "London" },
        "geometry": { "type": "Point",
                      "coordinates": [-0.454296, 51.470020] }
      }, {
        "type": "Feature",
        "properties": { "name": "Beijing " },
        "geometry": { "type": "Point",
                      "coordinates": [116.597504, 40.072498] }
        }]
    };

    // Create point series
    var pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        geoJSON: cities
      })
    );

    // appearance of a pin on the map:
    // add the definition for a circle pin to pointSeries
    
    pointSeries.bullets.push(function () {
      var circle = am5.Circle.new(root, {
        radius: 5,
        tooltipText: "{name}",
        tooltipY: 0,
        fill: am5.color(0xffba00),
        stroke: root.interfaceColors.get("background"),
        strokeWidth: 2,
        label: "hi"
      });
      circle.events.on("click", function(ev) {
        console.log("Clicked on a bullet!", ev.target.dataItem.dataContext.name);
        //zooms in
        pointSeries.zoomToDataItem(ev.target.dataItem, 50);
      });
      return am5.Bullet.new(root, {
        sprite: circle
      });
    });

    // Add a button to go back to continents view
    var homeButton = chart.children.push(am5.Button.new(root, {
      paddingTop: 10,
      paddingBottom: 10,
      x: am5.percent(100),
      y: am5.percent(95),
      centerX: am5.percent(100),
      opacity: 0,
      interactiveChildren: false,
      icon: am5.Graphics.new(root, {
        svgPath: "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8",
        fill: am5.color(0xffffff)
      })
    }));

    homeButton.events.on("click", function () {
      chart.goHome();
      continentSeries.show();
      countrySeries.hide();
      pointSeries.hide();
      homeButton.hide();
    });


    //sessionCheck();
  }); // end am5.ready()


/**
 * filterSelection()
 * 
 * @param {*} c - currently representing status, but can be expanded to any type of filter
 *      'all' -- for "Show All" button, allOpps
 *      'active' -- status is current/ongoing
 *      'archive' -- status is past/archive
 *      'pending' -- status is 'other', not necessarily needed
 * 
 * @returns updates map with filtered selectedOpps
 */
function filterSelection(c) {
  console.log("filterSelected called: " + c);
  console.log(allOpps);
  
  /* first, update cards. */

  //probably stupid way to do this
  if (c == "active") c = "Ongoing";
  if (c == "archive") c = "Past";

  $.get('/orders', function(data) {
    //clear sidebar cards first before appending results
    $('.card').remove();
    
    $.each(data, function(index, element) {
      //filter status and make cards for all
      if(element.STATUS == c || c == "all") {
        console.log("displaying element: " + element.NAME);
        if(element.NAME == allOpps[index].NAME) selectedOpps[index] = allOpps[index];
  
        // Create a new card element
        var card = $('<div class="card" onclick="declare()"></div>');
  
        // Populate the card with data
        card.append('<p class="card-name">Name: ' + element.NAME + '</p>');
        card.append('<p class="card-loc">Location: ' + element.CITY + ', ' + element.COUNTRY + '</p>');
        card.append('<p class="card-email">Email: ' + element.EMAIL + '</p>');
        card.append('<p class="card-description">Description: ' + element.DESCRIPTION + '</p>');
  
        // Append the card to the container
        $('#sideBarConatiner').append(card);
      }
    });
    console.log("updated cards.");
  });
  
  //if no opps are selected by status above... return (nothing will show up on map)
  if(selectedOpps == null) {
    pointSeries.data.setAll(selectedOpps);
    console.log("no results...");
  }
  console.log(selectedOpps);

  /* next, update the map. */

  //post filtered data to a new location to be accessed by am5.ready to put on the map.

  //selectedOpps is JSON dictionary object -- it's UNORDERED, 
  // so we need to for-each to iterate the info.

  //TODO: ITERATE THROUGH SELECTED OPPS
  /* var i = 0;
  selectedPoints.data.forEach(function(element) {
    console.log("creating points for selectedOpps...");

    //Points for the map and set the coordinates on the map (citySeries)
    var obj = {
      geometry: { type: 'Point', 
                  coordinates: [element.COORLAT, element.COORLONG] },
      title:  element.EVENT, //name
      id: element.NUMID //id number
    };

    selectedPoints[i] = obj;
    i++;
  });  */
  //pointSeries.data.setAll(selectedPoints);
} //end of filterSelection()