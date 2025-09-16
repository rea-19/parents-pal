/**
* Function that iterates over the data returned by the Fetch request
Things to do:
* add points depending on the price of the event
*/

function iterateRecords(data) {
	// Log the data to the console so that we can see what is being passed to the function
	console.log("Data returned: "+JSON.stringify(data));
	// Looking at what is returned, we can see that the data records are stored in the results object, which we pull out so we can iterate over each record
	var records = data.results;
	//to iterate over each of the values, we use Object.values - passing it the records and then using forEach to look at each value in the object
	Object.values(records).forEach(value => {
		
		// what other data can we get from the records?
		var subject = value["subject"];
		var description = value["description"];

		var location = value["location"];
        var date = value["formatteddatetime"];
        var age = value["age"];

        // add points and price indicator depending on the cost of the event
        var rawCost = value["cost"];
        var points = 0;
        var priceLabel = "N/A";

        if (rawCost) {
            let price = rawCost.toLowerCase() === "free" ? 0 : parseInt(rawCost.replace(/[^0-9]/g, ''), 10) || 0;

            // Points
            if (price === 0) points = 1;
            else if (price <= 10) points = 2;
            else if (price > 10) points = 3;

            // Price label
            if (price === 0) priceLabel = "$";
            else if (price <= 10) priceLabel = "$$";
            else if (price > 10) priceLabel = "$$$";
        }

        var price = priceLabel;


		// check that we have data for each of the fields we want to display
		if(subject && description && location && date && age && price && points) {
				
				// Use jQuery DOM manipulation to insert a section for each record in the set
                $("#records").append(
                    $('<section class="record">').append(
                        $('<h2>').text(subject),
                        $('<p>').text(description),
                        $('<p>').text(location),
                        $('<p>').text(age),
                        $('<p>').text(date),
                        $('<p>').text(price),
                        $('<p>').text("Points: "+points),
                        $('<button class="view-more">').text("View More").click(function() {
                            window.location.href = "/html/event_details.html?event=" + encodeURIComponent(subject);
                        })
                    )
                );
		}
	});
}


/** 
* When the document has loaded, we will call the API and request some data.
*/
$(document).ready(function() {
	var data = {};
	// set the base URL for the dataset you are connecting to
	const apiURL = "https://data.brisbane.qld.gov.au/api/explore/v2.1/catalog/datasets/infants-and-toddlers-events/records";
	
	// define request parameters that can be sent to refine the results. What other parameters could we send for this dataset?
	const requestParams = {
		limit: 50 // the number of records to return
	}
	//create a string from the request parameter object that we can add to the end of the API url
	const queryString = new URLSearchParams(requestParams).toString(); //slightly convoluted way to construct the URL but can help to avoid errors in the text
	
	//construct the full API call URl by concatenating the apiURL with the request parameters, the ? indicates there are parameters to come
	const fullURL = apiURL + "?" + queryString;
	
	console.log("URL: " + fullURL); // log the fullURL for error checking
	
	/**
	* Using fetch, we pass it the fullURL to connect to, 
	* We specify that we want the response to return json - what other response formats can we ask for?
	* We specify a function to process the data that is returned
	* We specify how to deal with errors that occur
	*/
	fetch(fullURL)
		.then(response => response.json())
		.then(data => iterateRecords(data))
		.catch(error => console.error("Error fetching data:", error));
});