const arr1=[1,2,3,4]
const arr2=[5,6,7,8,9,10]

const concatarr=[...arr1,...arr2]

console.log(concatarr)

function add(...num1)//num1 is rest parameter =>take all arguments value an d in aon e array
{
    console.log(num1);
    return num1.reduce((sum,cele)=>{
        return sum=sum+cele
    },0)
}
let result=add(...concatarr,12,13)
console.log(result)
