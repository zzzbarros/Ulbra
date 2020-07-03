function calc() {

    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var op = document.getElementById('op').value
    var result

    switch (op) {
        case '+':
            result = num1 + num2
            console.log(result)
            break;

        case '-':
            result = num1 - num2
            console.log(result)
            break;
    
        case '*':
            result = num1 * num2
            console.log(result)
            break;

        case '/':
            result = num1 / num2
            console.log(result)
            break;
    }

    document.getElementById("resultado").innerHTML = result
    
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