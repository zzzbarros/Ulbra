function calc() {

    var nome =  document.getElementById('name').value
    var peso = parseFloat(document.getElementById('weight').value)
    var altura = parseFloat(document.getElementById('height').value)
    
    imc = peso/(altura*altura)
    var arredondado = parseFloat(imc.toFixed(2));

    if (imc<18.5) {
        document.getElementById("resultado").innerHTML = nome + " seu IMC é " + arredondado + "você está abaixo do peso ideal!"
    }
    else if (imc>=18.5 && imc<25) {
        document.getElementById("resultado").innerHTML = nome + " seu IMC é " + arredondado + " você está no peso ideal!"
    }
    else if (imc>=25 && imc<30) {
        document.getElementById("resultado").innerHTML = nome + " seu IMC é " + arredondado + " você está acima do peso ideal!"
    }
    else if (imc>30) {
        document.getElementById("resultado").innerHTML = nome + " seu IMC é " + arredondado + " Você está obeso!"
    }
    console.log(imc)
}


// Filter number input
function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }