// console.log(a)//10//Exection context
debugger
var a=10
console.log(a)//10
a=20
console.log(a)//20
function display()
{
    console.log(a)//undefined(20)
    var a=30
    console.log(a)//30
}
display()
console.log(a)//20