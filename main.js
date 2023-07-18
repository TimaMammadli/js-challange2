
let i=0;
let numbers=[];

while(i<5){

    let number = parseInt(prompt("Enter the numbers of the array"));
    numbers[i]=number;

    i++

}
console.log("The numbers of array");
numbers.forEach(elem => {
    console.log(elem);
});
console.log("The positive numbers is below");
numbers.forEach(element => {
   if (element>0)  {
    console.log(element);
   }
    
});



console.log("The even numbers is below");

numbers.forEach(element => {
    if (element%2==0)  {
     console.log(element);
    }
     
 });
 
 
 