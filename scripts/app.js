function metricBMI(weight, height) {    //function to calculate BMI 
    return weight / (height ** 2)
}
function imperialBMI(weight, height) {
    return (weight / (height ** 2)) * 703
}


function BMIEvaluate(BMIValue) {    //function to determine BMI status  
    if (BMIValue < 18.5)
        return (`It is Below Normal.`)
    else if (BMIValue >= 18.5 && BMIValue <= 24.9)
        return (`It is Normal.`)
    else
        return (`It is Above Normal.`)
}

function isValid(w, h) {  //function to check if the inputs are valid
    let message = "";
    if (isNaN(w) == true || w <= 0) {
        message += "enter a numeric weight greater than 0"
    }
    if (isNaN(h) == true || h <= 0) {
        message += "\nenter a numeric height greater than 0"
    }
    return message;
}

document.getElementById("btnCalcBMI").addEventListener("click", function () {
    let inputWeight = document.getElementById("txtWeight").value;
    let inputHeight = document.getElementById("txtHeight").value;
    let radioChecked = document.querySelector("input[name=radMeasure]:Checked").value;
    let bmi = undefined;
    let errors = isValid(inputWeight, inputHeight);
    if (errors == "") {
        if (radioChecked == "metric") {
            bmi = metricBMI(inputWeight, inputHeight);

        }
        else {
            bmi = imperialBMI(inputWeight, inputHeight);

        }
        let BMIDescription = BMIEvaluate(bmi);
        alert(`Your bmi is ${bmi}. It is ${BMIDescription}.`)
    }
    else {
        alert(errors);
    }





});