
let display = document.getElementById('screen');

const Del = () => {
    display.value = '';
}

const Display = (n) => {
    display.value += n;
}

const Calcular = () => {
    display.value = eval(display.value);
}