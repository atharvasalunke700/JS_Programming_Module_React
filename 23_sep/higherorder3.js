//function which return other function is also called higher  order function
 function counter()
{
    console.log("From higher order function")
    let count=0
    return counterdisplay
}

function counterdisplay()
{
    // count++
    console.log("form function  counter display");
}
// console.log(counter());
// counter()
let res=counter()
console.log(res());
