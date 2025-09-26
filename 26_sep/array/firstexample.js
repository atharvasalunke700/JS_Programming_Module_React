let fruits=['mango','apple','grapes','watermelon']
console.log(fruits)

// 1.push:add the new elements at last
fruits.push('muskmekon')
console.log(fruits);

// 2.pop:remove the lat element from existing array
console.log(fruits.pop())
console.log(fruits)

// 3.unshift:add the new element at first location
fruits.unshift('muskmelon')
console.log(fruits)

// 4.shift:remove the first element of array
console.log(fruits.shift())
console.log(fruits)

// 5.concat:combine the two array and return value of combine array
let myfruits=["muskmelon",'banana','cherry','apple']
console.log(myfruits)
console.log(fruits.concat(myfruits))

console.log(fruits)

// 6.indexOf()3:if element not present returns -1 //return the element whichever we search int array
console.log(fruits.indexOf('apple'))

// 7.includes
console.log(fruits.includes('cherry'))

// 8.sort :sort the array elements
console.log(fruits)
fruits.sort()
console.log(fruits)

// 9.reverse:show the reverse element of array and store in original array
fruits.reverse()
console.log(fruits)

// 10.slice:take subarray of particular size from the existing array
console.log(fruits.slice(1,3))

// 11.splice:Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(fruits)
console.log(fruits.splice(0,3,'banana','cherry'))
console.log(fruits)