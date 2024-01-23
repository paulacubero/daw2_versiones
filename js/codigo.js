function saludar(){
    let nombre="Juan";
    window.alert("Hola, qué tal "+nombre);
}
// para declarear una variable hay que utilizar var o let 

function saludar2(nombre){ // sobrecarga
    window.alert("Hola, qué tal "+nombre);
}

function calcular(){ 
    let precio=12;
    let unidades=window.prompt("Dime cuantas unidades quieres?")
    let total=precio*unidades;
    window.alert("El total es "+total);
    window.confirm("Aceptas la compra");
}

//ECMAScript importante