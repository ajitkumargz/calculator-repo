function display(value) {
    document.getElementById("result").value += value;
}
function clearScreen() {
    document.getElementById("result").value = "";
}

function calculate(){
    var p = document.getElementById("result").value;
    
    var q = eval(p);
   
    if(q!=null){
        document.getElementById("result").value=q;
        document.getElementById("resultexp").value=p +" = "+q;
    }else{
        q=0;
        document.getElementById("result").value=q;
        document.getElementById("resultexp").value=q;
    }
}
