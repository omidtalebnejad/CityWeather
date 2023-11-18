// Define the function
function myFunction() {
  // Your code here
  alert('Welcome to my weather forcasts website!');
}

function changeTemperature() {
  // Get all temperature elements
  var temperatureElements = document.querySelectorAll('.temperature');

  // Loop through each temperature element
  temperatureElements.forEach(function(element) {
    // Get the current temperature value
    var currentTemperature = element.textContent;

    // Parse the temperature value to extract the numeric part
    var numericTemperature = parseInt(currentTemperature);

    // Generate a random temperature between 0 and 40
    var randomTemperature = Math.floor(Math.random() * 41);

    // Update the temperature element with the new value
    element.textContent = randomTemperature + '°C';

    // Add a class to indicate if the temperature increased or decreased
    if (randomTemperature > numericTemperature) {
      element.classList.add('increase');
      element.classList.remove('decrease');
    } else if (randomTemperature < numericTemperature) {
      element.classList.add('decrease');
      element.classList.remove('increase');
    } else {
      element.classList.remove('increase');
      element.classList.remove('decrease');
    }
  });
}

