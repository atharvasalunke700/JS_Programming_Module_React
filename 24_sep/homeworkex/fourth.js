function calculate(a,b,callbackf)//higherorder function
{
    return callbackf(a,b)
}
function add(n1,n2)//callback function
{
    return n1+n2
}
function mul(n1,n2)
{
    return n1*n2
}
console.log(calculate(3,2,add));
console.log(calculate(3,2,mul));
