function age(){
    let a=document.getElementById("year").value;
    let b=document.getElementById("year2").value;
    document.getElementById("result").innerHTML=(Number(b) - Number(a));

}