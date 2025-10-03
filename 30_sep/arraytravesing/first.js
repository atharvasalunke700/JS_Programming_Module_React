//array traversing
let arr=[20,10,5,4,32]

console.log(arr)

//access individual element
for(let i=0;i<arr.length;i++)
{
    // console.log("arr[",i,"]"+arr[i])
    console.log(`arr[${i}]=${arr[i]}`)
}

//for of
for (const ele of arr) {

    if(ele>5)
    {
        console.log(ele)
    }
}

// for (const ele of arr) {

//     if(ele==5)
//     {
//         console.log(ele)
//     }
// }