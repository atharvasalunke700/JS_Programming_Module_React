function multiplyby(n)
{
    return (value)=>
    {
        return value*n;
    }
}
let result= multiplyby(5);
console.log(result(2));