window.onclick = e => {
    let idOfPressedBtn = e.target.id;

    switch (idOfPressedBtn) {
        case "button1":
            handleDigitClick("1");
            break;

        case "button2":
            handleDigitClick("2");
            break;

        case "button3":
            handleDigitClick("3");
            break;

        case "button4":
            handleDigitClick("4");
            break;

        case "button5":
            handleDigitClick("5");
            break;

        case "button6":
            handleDigitClick("6");
            break;

        case "button7":
            handleDigitClick("7");
            break;

        case "button8":
            handleDigitClick("8");
            break;

        case "button9":
            handleDigitClick("9");
            break;

        case "button0":
            handleDigitClick("0");
            break;

        case "deleteButton":
            deleteLastDigit();
            break;

        case "plusButton":
            handleOperatorsClick(operationsEnum.ADDITION);
            break;

        case "substructBUtton":
            handleOperatorsClick(operationsEnum.SUBTRACT);
            break;

        case "decimalDot":
            //handleOperatorsClick(operationsEnum.ADDITION);
            break;

        case "divideButton":
            handleOperatorsClick(operationsEnum.DIVIDE);
            break;

        case "multipleBUtton":
            handleOperatorsClick(operationsEnum.MULTIPLY);
            break;

        case "equalButton":
            handleOperatorsClick(operationsEnum.EQUAL);
            break;

        case "resetButton":
            data["firstNumber"] = 0;
            data["secondNumber"] = 0;
            data["operator"] = null;
            changeOutputText("0")
            break;

        default:
            console.log('Button not found ' + idOfPressedBtn);
    }
}


function changeOutputText(newOutputText) {
    document.getElementById("resultScreenId").innerHTML = newOutputText.toString();
}


function deleteLastDigit() {
    let numPostDeletion = (data["operator"] === null)
        ? removeLastDigitFromStringInData("firstNumber")
        : removeLastDigitFromStringInData("secondNumber")

    changeOutputText(numPostDeletion);
}

function removeLastDigitFromStringInData(stringInData) {
    numPostDeletion = data[stringInData].substr(0, data[stringInData].length - 1);
    if (numPostDeletion === "") {
        numPostDeletion = "0";
    }

    data[stringInData] = numPostDeletion;
    return numPostDeletion;
}

function handleDigitClick(pressedNumber) {

    if (data["operator"] === null) {
        if(data["firstNumber"] === "0"){
            data["firstNumber"] = pressedNumber;
        }else{
            data["firstNumber"] += pressedNumber;
        }
        changeOutputText(data["firstNumber"]);
    } else {
        if(data["secondNumber"] === "0"){
            data["secondNumber"] = pressedNumber;
        }else{
            data["secondNumber"] += pressedNumber;
        }
        changeOutputText(data["secondNumber"]);
    }
}

function handleOperatorsClick(operator) {
    let firstNumber = data["firstNumber"];
    let secondNumber = data["secondNumber"];
    let result;
    let lastOperator = data["operator"];
    data["operator"] = operator;

    switch (operator) {
        case operationsEnum.DIVIDE:
            if (secondNumber === "0" && lastOperator != null) {
                data["firstNumber"] = "0"
                data["secondNumber"] = "0"
                data["operator"] = null;
                changeOutputText("Cant divide by zero");
                return;

            } else if (secondNumber === "0") {
                result = firstNumber.toString();
            } else {
                result = (parseFloat(firstNumber) / parseFloat(secondNumber)).toString();
            }
            data["operator"] = operator;
            break;

        case operationsEnum.MULTIPLY:
            if (secondNumber === "0" && lastOperator === null) {
                result = firstNumber.toString();
            }
            else {
                result = (parseFloat(firstNumber) * parseFloat(secondNumber)).toString();
            }

            data["operator"] = operator;
            break;

        case operationsEnum.SUBTRACT:
            data["operator"] = operator;
            result = (parseFloat(firstNumber) - parseFloat(secondNumber)).toString();
            break;

        case operationsEnum.ADDITION:
            data["operator"] = operator;
            result = (parseFloat(firstNumber) + parseFloat(secondNumber)).toString();
            break;

        case operationsEnum.EQUAL:
            result = handleOperatorsClick(lastOperator);
            data["operator"] = null;
            break;
    }

    if (lastOperator != null) {
        data["firstNumber"] = result;
        if (operator === operationsEnum.EQUAL) {
            data["secondNumber"] = "0";
        } else {
        }
    }

    changeOutputText(result);

    return result;

}

function handleDecimalClick() {
    if (data["operator"] === null && data["firstNumber"] % 1 != 0) {
        data["firstNumber"] = data["firstNumber"].toFixed(1);

    } else if (data["secondNumber"] % 1 != 0) {
        data["secondNumber"] = data["secondNumber"].toFixed(1);

    }
}

var data = {
    firstNumber: "0",
    secondNumber: "0",
    operator: null,
}

operationsEnum = {
    DIVIDE: '/',
    ADDITION: '+',
    MULTIPLY: "*",
    SUBTRACT: "-",
    EQUAL: "=",
}











