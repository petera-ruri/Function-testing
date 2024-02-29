function tempatureConverter() {
    let userInput = document.getElementById("input").value;
    let userType = document.getElementById("type").value;
    let convertedValue;
    if (userType == "Celsius") {
        convertedValue = (userInput + 32) * 9 / 5;
    } else {
        convertedValue = (userInput * 9 / 5) - 32;
    }
    document.getElementById("result").value = convertedValue;

}

// Ensure the DOM is fully loaded before accessing elements
document.addEventListener("DOMContentLoaded", function() {
    // Get the element by ID
    var element = document.getElementById("time");
    var d = new Date();
    // Check if the element exists
    if (element) {
        // If it exists, set its innerHTML
        element.innerText = d.toLocaleTimeString().replace("AM" ,"");
    } else {
        console.error("Element with ID 'myElement' not found.");
    }
});


