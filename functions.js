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
