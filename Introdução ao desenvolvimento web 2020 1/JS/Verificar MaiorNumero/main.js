function verif() {

    var numeros = document.getElementById('numbers').value
    numeros = numeros.split(',')
    var x 
    var maiorNumero = 0 

    for (x = 0; x < numeros.length; x++) {  
        if (maiorNumero < numeros[x]) {
            maiorNumero = numeros[x]
        }
    }
    console.log(numeros)
    console.log(maiorNumero)
    document.getElementById("resultado").innerHTML = maiorNumero
    
}


// // Filter number input
function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.,]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }