//IIFE->immediate invoked function Expression

//does not need calling function
debugger
let a=10
let b=20;

(function(n1,n2)
{
    let result=n1+n2 //formal agreement
    console.log(result)
})(a,b);//actual agreement