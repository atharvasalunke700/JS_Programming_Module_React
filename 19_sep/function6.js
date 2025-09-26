//function hoisting is allowed for only function declaration
//we call the function before defination
//var cannot be 
debugger
let a=10
let b=20;

addition(a,b)
let addition=function add(a,b)
{
    let result=a+b
    console.log(result)
}
