//rest param and spread operator
const arr1=[1,2,3,4]
const arr2=[5,6,7,8,9,10]

const concatarr=arr1.concat(arr2)

console.log(concatarr)

const newarr=[...arr1,...arr2]

//rest param for the object

const userintro={
    username:'rajiv',
    userid:1234,
}
const updateduser={...userintro}
console.log(updateduser)