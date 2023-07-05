function fetchDetails() {
    debugger;
    var unformatNumber = document.getElementById("modelNumber").value;
    var modelNumber = unformatNumber.toUpperCase();

// Make an API request to fetch the details based on the entered model number
fetch('https://sheets.googleapis.com/v4/spreadsheets/1DRfdGvUkU62IXxJOkp9MrbU54sVmSAKCb5-yTn93Vmc/values/Sheet1!A:E?key=AIzaSyAanHgeY9e03JES4w2m-UR7QjJs4zt8nSM')
.then(response => response.json())
.then(data => {
  // Find the row that matches the model number
  var row = data.values.find(row => row[0] === modelNumber);
  
  // Update the display area (detailsDisplay) with the retrieved details
  var detailsDisplay = document.getElementById("detailsDisplay");
  if (row) {
    detailsDisplay.innerHTML = `
      <h2>Details for Model ${modelNumber}</h2>
      <p>BRAND: ${row[1]}</p>
      <p>CATEGORY: ${row[2]}</p>
      <p>NLC: ${row[3]}</p>
      <p>MRP: ${row[4]}</p>
    `;
  } else {
    detailsDisplay.innerHTML = "<p>No details found for the entered model number.</p>";
  }
})
.catch(error => {
  console.error('Error fetching details:', error);
});

}
