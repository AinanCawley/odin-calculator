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

let firstNumber = ""; 
let chosenOperator = "";
let secondNumber = "";
let result = "";

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
                button.addEventListener('click', function()
                {
                    if(chosenOperator=="")
                    {
                        firstNumber = firstNumber + "7";
                    }
                    else
                    {
                        secondNumber = secondNumber + "7";
                    }
                    calculatorDisplayTop.innerText = firstNumber + chosenOperator + secondNumber;
                });
            }
            if( j==1 )
            {
                button.id = "4button";
                button.innerText = "4";
                button.addEventListener('click', function()
                {
                    if(chosenOperator=="")
                    {
                        firstNumber = firstNumber + "4";
                    }
                    else
                    {
                        secondNumber = secondNumber + "4";
                    }
                    calculatorDisplayTop.innerText = firstNumber + chosenOperator + secondNumber;
                });
            }
            if( j==2 )
            {
                button.id = "1button";
                button.innerText = "1";
                button.addEventListener('click', function()
                {
                    if(chosenOperator=="")
                    {
                        firstNumber = firstNumber + "1";
                    }
                    else
                    {
                        secondNumber = secondNumber + "1";
                    }
                    calculatorDisplayTop.innerText = firstNumber + chosenOperator + secondNumber;
                });
            }
            if( j==3 )
            {
                button.innerText = "\u200B"; //this character isn't supposed to be visible
            }
        }
        if( i==1 )
        {
            if( j==0 )
            {
                button.id = "8button";
                button.innerText = "8";
                button.addEventListener('click', function()
                {
                    if(chosenOperator=="")
                    {
                        firstNumber = firstNumber + "8";
                    }
                    else
                    {
                        secondNumber = secondNumber + "8";
                    }
                    calculatorDisplayTop.innerText = firstNumber + chosenOperator + secondNumber;
                });
            }
            if( j==1 )
            {
                button.id = "5button";
                button.innerText = "5";
                button.addEventListener('click', function()
                {
                    if(chosenOperator=="")
                    {
                        firstNumber = firstNumber + "5";
                    }
                    else
                    {
                        secondNumber = secondNumber + "5";
                    }
                    calculatorDisplayTop.innerText = firstNumber + chosenOperator + secondNumber;
                });
            }
            if( j==2 )
            {
                button.id = "2button";
                button.innerText = "2";
                button.addEventListener('click', function()
                {
                    if(chosenOperator=="")
                    {
                        firstNumber = firstNumber + "2";
                    }
                    else
                    {
                        secondNumber = secondNumber + "2";
                    }
                    calculatorDisplayTop.innerText = firstNumber + chosenOperator + secondNumber;
                });
            }
            if( j==3 )
            {
                button.id = "0button";
                button.innerText = "0";
                button.addEventListener('click', function()
                {
                    if(chosenOperator=="")
                    {
                        firstNumber = firstNumber + "0";
                    }
                    else
                    {
                        secondNumber = secondNumber + "0";
                    }
                    calculatorDisplayTop.innerText = firstNumber + chosenOperator + secondNumber;
                });
            }
        }
        if( i==2 )
        {
            if( j==0 )
            {
                button.id = "9button";
                button.innerText = "9";
                button.addEventListener('click', function()
                {
                    if(chosenOperator=="")
                    {
                        firstNumber = firstNumber + "9";
                    }
                    else
                    {
                        secondNumber = secondNumber + "9";
                    }
                    calculatorDisplayTop.innerText = firstNumber + chosenOperator + secondNumber;
                });
            }
            if( j==1 )
            {
                button.id = "6button";
                button.innerText = "6";
                button.addEventListener('click', function()
                {
                    if(chosenOperator=="")
                    {
                        firstNumber = firstNumber + "6";
                    }
                    else
                    {
                        secondNumber = secondNumber + "6";
                    }
                    calculatorDisplayTop.innerText = firstNumber + chosenOperator + secondNumber;
                });
            }
            if( j==2 )
            {
                button.id = "3button";
                button.innerText = "3";
                button.addEventListener('click', function()
                {
                    if(chosenOperator=="")
                    {
                        firstNumber = firstNumber + "3";
                    }
                    else
                    {
                        secondNumber = secondNumber + "3";
                    }
                    calculatorDisplayTop.innerText = firstNumber + chosenOperator + secondNumber;
                });
            }
            if( j==3 )
            {
                button.id = "decimalButton";
                button.innerText = ".";
                button.addEventListener('click', function()
                {
                    if(chosenOperator=="")
                    {
                        if(firstNumber.indexOf(".") == -1)
                        {
                            firstNumber = firstNumber + ".";
                        }
                    }
                    else
                    {
                        if(secondNumber.indexOf(".") == -1)
                        {
                            secondNumber = secondNumber + ".";
                        }
                    }
                    calculatorDisplayTop.innerText = firstNumber + chosenOperator + secondNumber;
                });
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
                button.addEventListener('click', function()
                {
                    if(chosenOperator=="")
                    {
                        chosenOperator = "+";
                    }
                    calculatorDisplayTop.innerText = firstNumber + chosenOperator + secondNumber;
                });
            }
            if( j==2 )
            {
                button.id = "timesButton";
                button.innerText = "x";
                button.addEventListener('click', function()
                {
                    if(chosenOperator=="")
                    {
                        chosenOperator = "x";
                    }
                    calculatorDisplayTop.innerText = firstNumber + chosenOperator + secondNumber;
                });
            }
            if( j==3 )
            {
                button.innerText = "\u200B"; //this character isn't supposed to be visible
            }
        }
        if( i==4 )
        {
            if( j==0 )
            {
                button.id = "backspaceButton";
                button.innerText = "\u21b5";
                button.addEventListener('click', function()
                {
                    if(chosenOperator=="")
                    {
                        firstNumber = firstNumber.slice(0,-1);
                    }
                    else
                    {
                        if(secondNumber=="")
                        {
                            chosenOperator = "";
                        }
                        else
                        {
                            secondNumber = secondNumber.slice(0,-1);
                        }
                    }
                    calculatorDisplayTop.innerText = firstNumber + chosenOperator + secondNumber;
                    calculatorDisplayBottom.innerText = "";
                });
            }
            if( j==1 )
            {
                button.id = "minusButton";
                button.innerText = "-";
                button.addEventListener('click', function()
                {
                    if(firstNumber=="")
                    {
                        firstNumber = "-";
                    }
                    else
                    {
                        if(chosenOperator=="")
                        {
                            chosenOperator = "-";
                        }
                        else
                        {
                            if(secondNumber.indexOf("-")==-1)
                            {
                                secondNumber = "-" + secondNumber;
                            }
                        }
                    }
                    calculatorDisplayTop.innerText = firstNumber + chosenOperator + secondNumber;
                });
            }
            if( j==2 )
            {
                button.id = "divideButton";
                button.innerText = "\u00F7";
                button.addEventListener('click', function()
                {
                    if(chosenOperator=="")
                    {
                        chosenOperator = "\u00F7";
                    }
                    calculatorDisplayTop.innerText = firstNumber + chosenOperator + secondNumber;
                });
            }
            if( j==3 )
            {
                button.id = "clearButton";
                button.innerText = "C";
                button.addEventListener('click', function()
                {
                    firstNumber = ""; 
                    chosenOperator = "";
                    secondNumber = "";
                    result = "";
                    calculatorDisplayTop.innerText = firstNumber + chosenOperator + secondNumber;
                    calculatorDisplayBottom.innerText = result;
                });
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

calculatorDisplayTop.innerText = firstNumber + chosenOperator + secondNumber;
calculatorDisplayBottom.innerText = result;

calculatorDisplay.appendChild(calculatorDisplayTop);
calculatorDisplay.appendChild(calculatorDisplayBottom);