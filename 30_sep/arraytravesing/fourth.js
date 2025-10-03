let salary=[20,10,5,4,32]

//for Each  applicable  Array
//does not return anything
let result=salary.forEach((num,index)=>
                            {
                                console.log(`key ${index}=${num*2.5}`)
                                return
                            })
console.log(result)                          
// console.log(salary)