let display = document.getElementById('display');
let num0 = document.getElementById("num0");// begin variables for event listeners/handlers
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let num9 = document.getElementById("num9");
let add = document.getElementById("add");
let decimal = document.getElementById("decimal");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let clearKey = document.getElementById("clearKey");
let equalsKey = document.getElementById("equalsKey");//end variables for event listeners


let calculatingString = "";
let displayValue = 0;
let result = 0;

// ------------------
let negativeNum = true;

//-------------------

//states
let starting = true;  // set back to true when we hit clear



num0.addEventListener("click",function(){//begin event listeners for keys
    addToString('0');
    updateDisplay('0');
});

num1.addEventListener("click",function(){
    addToString('1');
    updateDisplay('1');
});

num2.addEventListener("click",function(){
    addToString('2');
    updateDisplay('2');
});

num3.addEventListener("click",function(){
    addToString('3');
    updateDisplay('3');
})

num4.addEventListener("click",function(){
    addToString('4');
    updateDisplay('4');
})
num5.addEventListener("click",function(){
    addToString('5');
    updateDisplay('5');
})

num6.addEventListener("click",function(){
    addToString('6');
    updateDisplay('6');
})
num7.addEventListener("click",function(){
    addToString('7');
    updateDisplay('7');
})

num8.addEventListener("click",function(){
    addToString('8');
    updateDisplay('8');
})

num9.addEventListener("click",function(){
    addToString('9');
    updateDisplay('9');
})
add.addEventListener("click",function(){
    addToString('+');
    clearDisplay();
})
decimal.addEventListener("click",function(){
    addToString('.');
    updateDisplay('.');
})
subtract.addEventListener("click",function(){
    addToString('-');
    if(negativeNum){
        updateDisplay('-');
        negativeNum = false;
        
   } else {
       clearDisplay();
   }




    // addToString('-');
    // updateDisplay('-');
    // clearDisplay();


})
multiply.addEventListener("click",function(){
    addToString('*');
    clearDisplay();
})
divide.addEventListener("click",function(){
    addToString('/');
    clearDisplay();
})
clearKey.addEventListener("click",function(){
    clear();
    clearDisplay();
    console.log('test');
})
equalsKey.addEventListener("click",function(){
    calculate();
    displayValue = calculate();
    display.innerHTML = displayValue;
    
    //---------------------
    negativeNum = true;
    //--------------------

})//end event listeners for keys



function addToString(num){
    calculatingString += num;
    console.log(calculatingString);
    return calculatingString;
}

function calculate(){
    
    console.log( eval(calculatingString) );
    result = eval(calculatingString);
    return result;
}

function updateDisplay(num){
    if(starting){
        displayValue = "";
        starting = false;
    }
    displayValue += num;
    display.innerHTML = displayValue;
    console.log(displayValue);
}

function clear(){
    calculatingString = "";
}

function clearDisplay(){
    displayValue = "";
    display.innerHTML = displayValue;
}

//Ignore below
//******************************************************* *

document.addEventListener('keydown', function(event){
    if(event.keycode == '49'){
        console.log('This is number 1');
    }

});


