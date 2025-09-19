var a=10 //global scope

// a=20
console.log(a);
if(true)
{
    a=20
    console.log(a)
}

console.log(a);