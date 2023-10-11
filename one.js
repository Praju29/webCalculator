let displayVal = '';

function calValues(value){
    displayVal = displayVal+value;
    document.getElementById('inputBox').value = displayVal; 
}

function clearInputBox(){
    displayVal='';
    document.getElementById('inputBox').value = displayVal; 
}

function calculate(){
    try{
    displayVal = eval(displayVal);
    document.getElementById('inputBox').value = displayVal; 
    }
    catch(error){
        document.getElementById('inputBox').value = "error"; 
    }
}