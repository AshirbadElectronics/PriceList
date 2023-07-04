function fetchDetails() {
    debugger;
    var modelNumber = document.getElementById("modelNumber").value;

// Make an API request to fetch the details based on the entered model number
fetch('https://sheets.googleapis.com/v4/spreadsheets/1LYDhZs-RpMlI2mb--DpmGloMEYUnkiRH4KYms4wHyRY/values/Sheet1!A:E?key=AIzaSyAeP_vcF6LEjjXHotfnWipj_QFHGqW7NfE')
.then(response => response.json())
.then(data => {
  // Find the row that matches the model number
  var row = data.values.find(row => row[0] === modelNumber);
  
  // Update the display area (detailsDisplay) with the retrieved details
  var detailsDisplay = document.getElementById("detailsDisplay");
  if (row) {
    detailsDisplay.innerHTML = `
      <h2>Details for Model ${modelNumber}</h2>
      <p>ITEM: ${row[1]}</p>
      <p>PRICE: ${row[2]}</p>
      <p>BRAND: ${row[3]}</p>
      <p>STOCK: ${row[4]}</p>
    `;
  } else {
    detailsDisplay.innerHTML = "<p>No details found for the entered model number.</p>";
  }
})
.catch(error => {
  console.error('Error fetching details:', error);
});

}
