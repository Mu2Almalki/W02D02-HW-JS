let count = 0;
        let button = document.getElementById("button");
        let disp = document.getElementById("display");
  
        button.onclick = function () {
            count++;
            disp.innerHTML = count;
        }
        // ----------------------------------------
 function handleclick(element){
    let rands =document.getElementById("rands").value ;
        let con = document.getElementById("USD")
        con.innerText=  rands * 0.27 ;
        let don = document.getElementById("EUR")
        don.innerText=  rands * 0.23 ;
        let on = document.getElementById("GBP")
        on.innerText=  rands * 0.20 ;
 }

// //  -----------------------------------
document.addEventListener("load", num)
function num () {
    for (let i = 0; i <= 25 ; i++) {
      let option = document.createElement("OPTION");  
        option.innerHTML = i; 
        let select = document.getElementById("elements")
        select.appendChild(option);   
        
    }
}