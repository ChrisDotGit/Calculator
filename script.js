var total = 0;
var strNum = '';


// Input Numbers
function inputNumber(number){
    strNum = strNum + number;
    document.getElementById("output").innerHTML = strNum;
    console.log('inputNumber', strNum);
}

// Reset calculator
function clearOutput(){
    total = 0;
    strNum = '';
    document.getElementById("output").innerHTML = total;
    document.getElementById("total").innerHTML = total;
    console.log('---------CLEAR---------')
}


//////////////////////////OPERATIONS///////////////////////////

function add(){
    if (strNum !== ''){
    total = total + parseInt(strNum);
    strNum = '';
    document.getElementById("total").innerHTML = total;
    document.getElementById("output").innerHTML = strNum;
    

    console.log('addTotal', total);
    }
}

function subtract(){
    if (strNum !== ''){
    total = total - parseInt(strNum);
    strNum = '';
    document.getElementById("total").innerHTML = total;
    document.getElementById("output").innerHTML = strNum;
    

    console.log('subtractTotal', total);
    }
}


function multiply(){
    if (strNum !== ''){
    total = total * parseInt(strNum);
    strNum = '';
    document.getElementById("total").innerHTML = total;
    document.getElementById("output").innerHTML = strNum;
    

    console.log('multiplyTotal', total);
    }
}


function divide(){
    if (strNum !== ''){
    total = total / parseInt(strNum);
    strNum = '';
    document.getElementById("total").innerHTML = total;
    document.getElementById("output").innerHTML = strNum;
    

    console.log('divideTotal', total);
    }
}
