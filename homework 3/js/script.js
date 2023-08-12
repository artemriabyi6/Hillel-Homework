const getFirstInput = document.getElementById('firstNumber')
const getSecondInput = document.getElementById('secondNumber')
const getButtonPlus = document.getElementById('plus')
const getButtonPMinus = document.getElementById('minus')
const getButtonMultiple = document.getElementById('multiple')
const getButtonDivivded = document.getElementById('divided')
const computeResult = document.getElementById('Result')




function computedPlus() {
    getFirstInput.value + getSecondInput.value
    computeResult.innerHTML = +getFirstInput.value + +getSecondInput.value
}

getButtonPlus.addEventListener('click', computedPlus) 


function computedMinus() {
    getFirstInput.value - getSecondInput.value
    computeResult.innerHTML = +getFirstInput.value - +getSecondInput.value
}

getButtonPMinus.addEventListener('click', computedMinus) 


function computedMultiple() {
    getFirstInput.value * getSecondInput.value
    computeResult.innerHTML = +getFirstInput.value * +getSecondInput.value
}


getButtonMultiple.addEventListener('click', computedMultiple)


function computedDivided() {
    getFirstInput.value / getSecondInput.value
    computeResult.innerHTML = +getFirstInput.value / +getSecondInput.value
}

getButtonDivivded.addEventListener('click', computedDivided)