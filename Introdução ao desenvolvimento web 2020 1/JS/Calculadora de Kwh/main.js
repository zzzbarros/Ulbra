function calc() {

    var kwhCons = parseFloat(document.getElementById('kwh_cons').value)
    var vlrUni = parseFloat(document.getElementById('vlr_kwh').value)
    var result 
    var vlorFinal

    result = (kwhCons * vlrUni)

    if (kwhCons <100) {
        vlorFinal = result        
    }
    else if (kwhCons >=100 && kwhCons <200 ) {
        vlorFinal = (result*1.25)
    }
    else if (kwhCons >=200) {
        vlorFinal = (result * 1.5)
    }
    console.log(result)
    console.log(vlorFinal)
    document.getElementById("resultado").innerHTML = vlorFinal
    
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