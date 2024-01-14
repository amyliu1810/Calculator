
let display = document.getElementById('display');
let operatorBtn = document.querySelectorAll('.operator-btn');
let numBtn = document.querySelectorAll('.num');
let resultBtn = document.querySelector('.result');
let clearBtn = document.querySelector('.clear');

let currentInput = ''; // 目前輸入
let currentOperator = ''; // 使用者的目前操作(+-*/)
let previousInput = ''; // 新增一個變數來保存前一次的輸入值

numBtn.forEach(function (button) {
    button.addEventListener('click', function () {
        currentInput += button.textContent;
        display.value = currentInput;
    });
});

operatorBtn.forEach(function (button) {
    button.addEventListener('click', function () {
        if (currentOperator !== '') {
            calculateResult(); // 如果已經有操作符，先計算前一個結果
        }
        currentOperator = button.dataset.operator; // 設置當前操作符
        previousInput = currentInput; // 保存當前輸入值到前一次的輸入值
        currentInput = ''; // 重置當前輸入值
    });
});

resultBtn.addEventListener('click', function () {
    calculateResult();
});

clearBtn.addEventListener('click', function () {
    // 清空所有
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    display.value = '';
});

function calculateResult() {
    if (currentOperator !== '') {
        // 如果有操作符，計算結果並顯示
        let result = performOperation(parseFloat(previousInput), parseFloat(currentInput), currentOperator);
        display.value = result;
        // 重置當前輸入和操作符
        currentInput = result.toString();
        // currentOperator = '';
        // previousInput = '';
    }
}

function performOperation(firstNumber, secondNumber, operator) {
    // 執行相應的運算
    switch (operator) {
        case 'add':
            return firstNumber + secondNumber;
        case 'minus':
            return firstNumber - secondNumber;
        case 'times':
            return firstNumber * secondNumber;
        case 'divide':
            return firstNumber / secondNumber;
        default:
            return secondNumber;
    }
}
