window.onclick = e => {
    let idOfPressedBtn = e.target.id;
    let totalSum = 0;

    switch (idOfPressedBtn) {
        case "button1":    
            console.log("Update UI");
            break;

        case "button2":
            console.log(idOfPressedBtn);
            break;

        case "button3":
            console.log(idOfPressedBtn);
            break;

        case "button4":
            console.log(idOfPressedBtn);
            break;

        case "button5":
            console.log(idOfPressedBtn);
            break;

        case "button6":
            console.log(idOfPressedBtn);
            break;

        case "button7":
            console.log(idOfPressedBtn);
            break;

        case "button8":
            console.log(idOfPressedBtn);
            break;

        case "button9":
            console.log(idOfPressedBtn);
            break;

        case "button0":
            console.log(idOfPressedBtn);
            break;

        case "deleteButton":
            deleteLastDigit();
            break;

        case "plusButton":
            console.log(idOfPressedBtn);
            break;

        case "substructBUtton":
            data["lastOperation"] = operationsEnum.SUBSTRUCT;
            break;

        case "decimalDot":
            data["lastOperation"] = operationsEnum.DECIMAL;
            break;

        case "divideButton":
            data["lastOperation"] = operationsEnum.DIVIDE;
            console.log(idOfPressedBtn);
            break;

        case "multipleBUtton":
            data["lastOperation"] = operationsEnum.MULTYPLE;
            console.log(idOfPressedBtn);
            break;

        case "equalButton":
            data["lastOperation"] = operationsEnum.EQUAL;
            changeOutputText("" + data["number"])
            break;

        case "resetButton":
            //resetNUmberInCals();
            changeOutputText("0")
            break;

        default:
            console.log('Button not found ' + idOfPressedBtn);
    }
}



var data = {
    number: 0,
    lastOperation: operationsEnum.EQUAL,
    isFirstMove: true
}


function changeOutputText(newOutputText) {
    document.getElementById("output").innerHTML = "" + newOutputText;
}

function resetNUmberInCals() {
    number = 0;

}

function deleteLastDigit() {
    let outputAsString = data["number"].toString();
    let numPostDeletion = outputAsString.substr(0, outputAsString.length - 1);
    if (numPostDeletion === ""){
        numPostDeletion = 0;
        data["isFirstMove"] = true
    }

    data["number"] = parseFloat(numPostDeletion);
    changeOutputText(data["number"]);
}

operationsEnum = {
    DIVIDE: "/",
    MULTYPLE: "*",
    SUBSTRUCT: "-",
    EQUAL: "=",
    DECIMAL: "."
}

digitsEnum = {
    ZERO: 0,
    ONE: 1,
    TWO: 1,
    THREE: 1,
    FOUR: 1,
    FIVE: 1,
    SIX: 1,
    SEVEN: 1,
    EIGHT: 1,
    NINE: 9
}









