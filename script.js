const add = function( a, b )
{
    return a + b;
};

const multiply = function( a, b )
{
    return a * b;
};

const subtract = function( a, b )
{
    return a - b;
};

const divide = function( a, b )
{
    return a / b;
};

const operate = function( operation, a, b )
{
    return operation(a,b);
};

//DOM STUFF

const calculatorContainer = document.getElementById("calculatorContainer");
const calculatorDisplay = document.getElementById("calculatorDisplay");
const calculatorButtons = document.getElementById("calculatorButtons");

let buttonFragment = new DocumentFragment();

for( let i = 0; i < 5; i++ )
{
    let buttonColumn = document.createElement("div");

    for( let j = 0; j < 4; j++ )
    {
        let button = document.createElement("div");
        button.id = i + "x" + j;
        buttonColumn.appendChild(button);
    };

    buttonFragment.appendChild(buttonColumn);
};

calculatorButtons.appendChild(buttonFragment);