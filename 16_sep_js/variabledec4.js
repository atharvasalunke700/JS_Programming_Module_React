var a=10 //global scope
 var a=20
 
 
console.log(a);//20

function display()
{
    a=30
    console.log(a) //30
}
display()
console.log(a);