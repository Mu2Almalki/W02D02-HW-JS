function sum(n){
    if(n == 0 || n == 1){
        return 1;
    
    }else{
        return n + sum(n-1);
    }
}
console.log(sum(4));
// ----------------------------------
function multiple(a){
    if(a%3==0 && a%5==0){
       console.log("FizzBuzz");
    }else if (a%5==00){
       console.log("Buzz");
    }else if(a %3 == 0) {
        console.log("FizzBuzz");
    }
    };
    multiple(9);
 