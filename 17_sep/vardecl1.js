var a=10 //global scope
console.log('a=',a)//10
a=20
// console.log('a=',a);
if(true)
{
    console.log('a=',a) //10
    var  a=20
    console.log('a=',a); //20
}
console.log('a=',a);//20