console.log("hello script js");
var inputHappenedCelsius = function(currentInput){
    //calculation for fah to cels
    var celsius = (currentInput - 32) * (5/9);
    console.log(celsius);
    displayCelsius(celsius + " c");
}
var inputHappenedKelvin = function(currentInput){
    console.log(typeof currentInput)
    var kelvin = (currentInput - 32) * (5/9) + 273.15;
    displayKelvin(kelvin + " k");
};

/*var inputHappenedCelsius = function(currentInput){
    //calculation for fah to cels
    var celsius = (currentInput - 32) * (5/9);
    console.log(celsius);
    displayCelsius(celsius + " c");
}
var inputHappenedKelvin = function(currentInput){
    console.log(typeof currentInput)
    var kelvin = (currentInput - 32) * (5/9) + 273.15;
    displayKelvin(kelvin + " k");
};
*/