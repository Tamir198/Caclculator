window.onclick = e => {
    let idOfPressedBtn = e.target.id;

    switch (idOfPressedBtn) {
        case "button1":
            handleDigitClick(1);
            break;

        case "button2":
            handleDigitClick(2);
            break;

        case "button3":
            handleDigitClick(3);
            break;

        case "button4":
            handleDigitClick(4);
            break;

        case "button5":
            handleDigitClick(5);
            break;

        case "button6":
            handleDigitClick(6);
            break;

        case "button7":
            handleDigitClick(7);
            break;

        case "button8":
            handleDigitClick(8);
            break;

        case "button9":
            handleDigitClick(9);
            break;

        case "button0":
            handleDigitClick(0);
            break;

        case "deleteButton":
            deleteLastDigit();
            break;

        case "plusButton":
            break;

        case "substructBUtton":
            data["lastOperation"] = operationsEnum.SUBSTRUCT;
            break;

        case "decimalDot":
            data["lastOperation"] = operationsEnum.DECIMAL;
            break;

        case "divideButton":
            data["lastOperation"] = operationsEnum.DIVIDE;
            break;

        case "multipleBUtton":
            data["lastOperation"] = operationsEnum.MULTYPLE;
            break;

        case "equalButton":
            data["lastOperation"] = operationsEnum.EQUAL;
            changeOutputText("" + data["firstNumber"])
            break;

        case "resetButton":
            //resetNUmberInCals();
            changeOutputText("0")
            break;

        default:
            console.log('Button not found ' + idOfPressedBtn);
    }
}





function changeOutputText(newOutputText) {
    document.getElementById("resultScreenId").innerHTML = newOutputText.toString();
}

function resetNUmberInCals() {
    number = 0;

}

function deleteLastDigit() {
    let outputAsString = data["firstNumber"].toString();
    let numPostDeletion = outputAsString.substr(0, outputAsString.length - 1);
    if (numPostDeletion === "") {
        numPostDeletion = 0;
        data["isFirstMove"] = true
    }

    data["firstNumber"] = parseFloat(numPostDeletion);
    changeOutputText(data["firstNumber"]);
}


function handleDigitClick(pressedNumber) {

    
    if (data["operator"] === null) {
        data["firstNumber"] *= 10;
        data["firstNumber"] += pressedNumber;
    } else {
        data["secondNumber"] *= 10;
        data["secondNumber"] += pressedNumber;
    }
    changeOutputText(data["firstNumber"]);
}

function handleOperatorsClick(operator) {
    let firstNumber = data["firstNumber"];
    let secondNumber = data["secondNumber"];
    let result, outputText;

    switch (operator) {
        case operationsEnum.DIVIDE:
            outputText = operator;
            if (secondNumber === 0) {
                outputText = "Cant divide by zero";
                data["operator"] = null;
                changeOutputText(outputText);
                return;
            } else {
                result = firstNumber / secondNumber;
            }
            break;

        case operationsEnum.MULTIPLY:
            outputText = operator;
            result = firstNumber * secondNumber;
            break;

        case operationsEnum.SUBTRACT:
            outputText = operator;
            result = firstNumber - secondNumber;
            break;

        case operationsEnum.ADDITION:
            outputText = operator;
            result = firstNumber + secondNumber;
            break;

        case operationsEnum.EQUAL:
            changeOutputText(data["firstNumber"]);
            break;
    }

    data["firstNumber"] = result;
    data["secondNumber"] = 0;

    changeOutputText(outputText);

}

function handleDecimalClick() {
    if (data["operator"] === null && data["firstNumber"] % 1 != 0) {
        data["firstNumber"] = data["firstNumber"].toFixed(1);

    }else if(data["secondNumber"] % 1 != 0){
        data["secondNumber"] = data["secondNumber"].toFixed(1);

    } 
}

var data = {
    firstNumber: 0,
    secondNumber: 0,
    operator: null,
}

operationsEnum = {
    DIVIDE: '/',
    ADDITION: '+',
    MULTIPLY: "*",
    SUBTRACT: "-",
    EQUAL: "=",
}











