// var a=10 //global scope
// console.log('a=',a)//10

// a=20
// // console.log('a=',a);

function display()
{
    // console.log('a=',a) //10
    var a=20
    console.log('a=',a); //10
}

display()
console.log('a=',a);//20