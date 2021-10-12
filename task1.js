function handleclick(element){
    let num1 =document.getElementById("num1").value ;
    let num2 = document.getElementById("num2").value ;
    let sum = document.getElementById("ansSum")
    sum.innerText=parseInt(num1)+parseInt(num2) ;
    
}
function oclick(element){
    let num3 =document.getElementById("num3").value ;
    let num4 = document.getElementById("num4").value ;
    let multiply = document.getElementById("ansMultiply")
    multiply.innerText=parseInt(num3)*parseInt(num4) ;
}

function aclick(element){
        let num3 =document.getElementById("num5").value ;
        let num4 = document.getElementById("num6").value ;
        let mod = document.getElementById("ansMod")
        mod.innerText=parseInt(num5)/parseInt(num6) ;
}
