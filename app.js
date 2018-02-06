var numberArray = [];

function submitNumber (){
    var number= document.getElementById("theNumber").value;

    //var newNumber = newNumber(number);
    numberArray.push(parseFloat(number));

    var value = 0;
    for(var i = 0; i < numberArray.length; i++){
    value += numberArray[i];
    }
    console.log(value);

    //array.push(parseFloat(theNumber));



}