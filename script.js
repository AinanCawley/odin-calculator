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
    buttonColumn.setAttribute("class", "buttonColumn");

    for( let j = 0; j < 4; j++ )
    {
        let button = document.createElement("div");
        button.setAttribute("class", "calculatorButton");
        button.id = i + "x" + j;

        if( i==0 )
        {
            if( j==0 )
            {
                button.id = "7button";
                button.innerText = "7";
            }
            if( j==1 )
            {
                button.id = "4button";
                button.innerText = "4";
            }
            if( j==2 )
            {
                button.id = "1button";
                button.innerText = "1";
            }
            if( j==3 )
            {
                button.innerText = "\u2800"; //this character isn't supposed to be visible
            }
        }
        if( i==1 )
        {
            if( j==0 )
            {
                button.id = "8button";
                button.innerText = "8";
            }
            if( j==1 )
            {
                button.id = "5button";
                button.innerText = "5";
            }
            if( j==2 )
            {
                button.id = "2button";
                button.innerText = "2";
            }
            if( j==3 )
            {
                button.id = "0button";
                button.innerText = "0";
            }
        }
        if( i==2 )
        {
            if( j==0 )
            {
                button.id = "9button";
                button.innerText = "9";
            }
            if( j==1 )
            {
                button.id = "6button";
                button.innerText = "6";
            }
            if( j==2 )
            {
                button.id = "3button";
                button.innerText = "3";
            }
            if( j==3 )
            {
                button.id = "decimalButton";
                button.innerText = ".";
            }
        }
        if( i==3 )
        {
            if( j==0 )
            {
                button.id = "equalsButton";
                button.innerText = "=";
            }
            if( j==1 )
            {
                button.id = "plusButton";
                button.innerText = "+";
            }
            if( j==2 )
            {
                button.id = "timesButton";
                button.innerText = "x";
            }
            if( j==3 )
            {
                button.innerText = "\u2800"; //this character isn't supposed to be visible
            }
        }
        if( i==4 )
        {
            if( j==0 )
            {
                button.id = "backspaceButton";
                button.innerText = "\u21b5";
            }
            if( j==1 )
            {
                button.id = "minusButton";
                button.innerText = "-";
            }
            if( j==2 )
            {
                button.id = "divideButton";
                button.innerText = "/";
            }
            if( j==3 )
            {
                button.id = "clearButton";
                button.innerText = "\u21b5\u21b5";
            }
        }

        buttonColumn.appendChild(button);
    };

    buttonFragment.appendChild(buttonColumn);
};

calculatorButtons.appendChild(buttonFragment);

const calculatorDisplayTop = document.createElement('div');
const calculatorDisplayBottom = document.createElement('div');

calculatorDisplayTop.classList.add('displayTop');
calculatorDisplayBottom.classList.add('displayBottom');

calculatorDisplayTop.innerText = "3x3"; //TESTING DISPLAY
calculatorDisplayBottom.innerText = "=9"; //TESTING DISPLAY

calculatorDisplay.appendChild(calculatorDisplayTop);
calculatorDisplay.appendChild(calculatorDisplayBottom);