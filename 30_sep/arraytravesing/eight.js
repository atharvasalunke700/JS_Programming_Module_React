let salary=[20,10,5,4,32]

//find out max or min element from given array
let result=salary.reduce((sum,ele)=>{return sum=sum+ele},0)
let result1=salary.reduce((max,ele)=>{return ele>max?ele:max},0)
console.log(result)
console.log(result1)