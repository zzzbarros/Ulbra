function verif() {

    var idades = document.getElementById('yo').value
    idades = idades.split(',')
    var x = 0
    var maiores = []  
    var menores = [] 
    var contMaior = 0
    var contMenor = 0

    for (x = 0; x < idades.length; x++) {  
        if (idades[x] >= 18) {
            maiores.push(idades[x])
            contMaior = contMaior + 1 
        }
        else {
            menores.push(idades[x]) 
            contMenor = contMenor + 1
        }
    }
    document.getElementById("resultadoMaiores").innerHTML = contMaior + " maiores de idade, sendo eles: {" + maiores + "}"
    document.getElementById("resultadoMenores").innerHTML = contMenor + " menores de idade, sendo eles: {" + menores + "}"
}
// // Filter number input
function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9,]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
}