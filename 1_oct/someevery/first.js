let arr =[14,10,4,8,20,2,12]

console.log(arr)

const result=arr.some((num)=>
{
    console.log(num*2)
    return null
})
console.log(result)