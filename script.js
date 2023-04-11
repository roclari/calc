function attDisplay(btn) {
    const display = document.getElementById('display');
    if (display.value.length === 9)
        return;
    if (display.value === '0')
        display.value = btn.value;
    else
        display.value += btn.value;
}

function cleanDisplay() {
    document.getElementById('display').value = '0';
}

let op = '';
let firstVal = 0;

function attOp(btn) {
    const display = document.getElementById('display');
    op = btn.value;
    firstVal = parseInt(display.value);
    display.value = '0';
}

function calc() {
    const display = document.getElementById('display');
    const secondVal = parseInt(display.value);
    firstVal = eval(firstVal+op+secondVal);
    display.value = firstVal;
    op = '';
}