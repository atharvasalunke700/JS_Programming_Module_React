let salary=[20,10,5,4,32]

//for Each  applicable for  Array only
//original array do not affect anything
let result=salary.map((num,index)=>
                            {
                                console.log(`key ${index}=${num*2.5}`)
                                return num*2
                            })
console.log(result)//its create a new array and store the result of return value of callback function             
console.log(salary)//don't affect original array