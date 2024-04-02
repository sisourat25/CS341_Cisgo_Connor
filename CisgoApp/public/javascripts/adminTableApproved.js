document.addEventListener('DOMContentLoaded', function () {
    // Initialize Tabulator
    var table = new Tabulator("#approved-table", {
        height: "100%", // set height of table (optional)
        layout: "fitColumns", // fit columns to width of table
        columns: [ // Define columns
            {formatter:"rowSelection", titleFormatter:"rowSelection", hozAlign:"center", headerSort:false, cellClick:function(e, cell){cell.getRow().toggleSelect();}},
            { title: "ID", field: "numid"},
            { title: "Name", field: "name", editor: "input" }, 
            { title: "Event", field: "event", editor: "input" },
            { title: "Email", field: "email", editor: "input" },
            { title: "City", field: "city", editor: "input" },
            { title: "Country", field: "country", editor: "input"},
            { title: "Coordinator Longitude", field: "coorlong", editor: "input" },
            { title: "Coordinator Latitude", field: "coorlat", editor: "input" },
            { title: "Department", field: "department", editor: "input" },
            { title: "Type", field: "type", editor: "input" },
            { title: "Status", field: "status", editor: "input" },
            { title: "Start Date", field: "startdate", editor: "input" },
            { title: "End Date", field: "enddate", editor: "input" },
        ],
        cellEdited: function(cell) { // Callback function when cell is edited
            
            // Send updated data to the server
            var data = cell.getValue();
            console.log("Edited Data:", data);

            // Extract the NUMID of the edited row
            var numid = cell.getRow().getData().numid;
            console.log("Edited ID:", numid);

            // Get the edited cell's column definition
            var col = cell.getColumn().getField();
            console.log("Edited Column:", col);

            

            // Example: Send data to the server using fetch API
            const editData = {
                changedID: numid,
                changedCol: col,
                changedData: data
            };
        
            // Send a POST request to the server to add the new order
            $.post('/adminTableEditRoute', editData, function(response) {
        
            });
        },
    });

    // Add event listener to the "Approve" button
    document.getElementById("pendingButton").addEventListener("click", function() {
        // Get the selected rows
        var selectedRows = table.getSelectedRows();

        // Extract numid of selected rows and log them
        var selectedNumids = selectedRows.map(row => row.getData().numid);
        console.log("Selected Numids:", selectedNumids);

        var status = 'Pending';

        if (selectedNumids.length !== 0) {
            selectedNumids.forEach(function(numid) {
                // Construct editData for each numid
                const editData = {
                    changedID: numid,
                    newStatus: status
                };
    
                // Send a POST request to the server for each numid
                $.post('/adminTableAdminStatusRoute', editData, function(response) {
                    // Handle the response if needed
                });
            });

            location.reload();
        }


    });

    

    // Issue a GET request to fetch data from the server using the same endpoint '/orders'
    $.get('/adminTableApprovedRoute', function(data) {
        // Create an array to hold the table data
        var tableData = [];

        console.log("HELLO FROM INSIDE APPROVED GETTING DATA");
        // Loop through the received data
        $.each(data, function(index, item) {
            // Push each item to the table data array
            tableData.push({
                numid: item.NUMID,
                name: item.NAME,
                event: item.EVENT,
                email: item.EMAIL,
                city: item.CITY,
                country: item.COUNTRY,
                coorlong: item.COORLONG,
                coorlat: item.COORLAT,
                department: item.DEPARTMENT,
                type: item.TYPE,
                status: item.STATUS,
                startdate: item.STARTDATE,
                enddate: item.ENDDATE
            });
        });

        // Populate the table with the retrieved data
        table.setData(tableData);
    });
});
