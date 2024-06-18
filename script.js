
var startValue_string = '';
var operator = '';

// INPUT NUMERICAL VALUE
function inputNumber(number){
    startValue_string = startValue_string + number;
    document.getElementById("output").innerHTML = startValue_string;
}

function selectOperator(selectedOperator) {
    operator = selectedOperator;
    console.log(operator)
}

function calculate(){
    valueArray = startValue_string.split(/(÷|\+|\.)/);
    console.log(valueArray)
}