function getNumber(num){
    var result=document.getElementById("result");
    result.value += num;
}

function clrbtn(){
    var clr = document.getElementById("result");
    clr.value="";
}

// function clear_one(){
//     var result=document.getElementById("result");
//     result.value -= result[result.value.length-1].value;
// }


function getResult(){
    var result  = document.getElementById("result");
    result.value = eval(result.value);
}

function getfactorial(){
    var result  = document.getElementById("result");
    if(result.value=="1"){
        result.value=1;
    }
    else if(result.value=="2"){
        result.value=2;
    }
    else{
        result.value = result.value * (result.value-1) * (result.value-2);
    }
}

function getSquare(){
    var result = document.getElementById('result');
    result.value = result.value * result.value;
}