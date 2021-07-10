const counterValue = document.getElementById("counterValue"); 
const increment = document.getElementById("increment"); 
const decrement= document.getElementById("decrement"); 

   var counter = 0;
   counter   =0;increment.addEventListener("click", () => {
   if(counter <= 49){
   counter += 1;
   counterValue.innerHTML = counter;
   }
 });
 
    decrement.addEventListener("click", () => {
    if(counter >= 1){
    counter -= 1;
    counterValue.innerHTML = counter;
    }
 }) 


