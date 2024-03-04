const inputvalue = document.getElementById("values");

function addNumber(num){
    if(num==55){
        inputvalue.value+=0;
        inputvalue.value+=0;

    }
    else{
        inputvalue.value+=num;
    }
    
}

function addCharacter(string){
    if(string==="fowardbracket"){
        inputvalue.value+="("
    }else{
        inputvalue+=")"
    }
    
}

function findAns(){
 try {
    inputvalue.value =  eval(inputvalue.value)
    
 } catch (error) {
    alert("Enter the correct syntax");
    
 }
}
function clearTheInput(){
    inputvalue.value = ""
}
function deleteOneValue(){
 inputvalue.value = inputvalue.value.slice(0,-1)
}