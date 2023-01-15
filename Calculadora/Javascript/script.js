let VisaoGeral = document.getElementById("VisaoGeral");

function display(num) {

    VisaoGeral.value += num

}

function Calcular() {

    try{
        VisaoGeral.value = eval(VisaoGeral.value);

    }catch(err) {

        alert("invalid")
    }

}
function Clear() {

    VisaoGeral.value = "";

}

function Del(){

    VisaoGeral.value = VisaoGeral.value.slice(0,-1)


}
