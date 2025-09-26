//String: seq of char
//String is primitive data type

let str='itview Solution'

console.log(str)//display

console.log(str.length)//find out number of character in given string/ lenght is property

console.log(typeof(str))//check data type of str

console.log(str.toLowerCase())//to convert into lowercase
console.log(str.toUpperCase())//to convert into uppercase

console.log(str.trim())// remove starting and ending space of the string

console.log(str.trimEnd())//remove only the ending space
console.log(str.trimStart())//remove only the starting space

console.log(str)//trim function doest not affect on original string

let str2='Pune'
console.log(str.concat(str2))//combine two string or concatenate of two strings
console.log(str2)//concatenate does not affect on the original string

console.log(str.includes(str2))//includes return the true of false value depending on the char or string is present in the given string or not
console.log(str.includes('w'))//case sensitive function

console.log(str.indexOf('w'))//6 it return the index of first occurrence of character
console.log(str.indexOf('z'))//minus1
console.log(str.indexOf('Solution'))//indexof function is case sensitive function

console.log(str.replace('i','I'));//replace first character with new character
console.log(str.replaceAll('o','b'))//replace all character with new character
console.log(str)//replace and replaceAll they not changes in original string

//masking
let addharnumber='2345'
console.log(addharnumber.padStart(12,'*'))
console.log(addharnumber.padEnd(12,'#'))

// str='itview Solution'
let result=str.split(" ")
console.log(result[0])
console.log(str)//split do not change any original string value

//slice function that take given string in some part with starting index and end index and exclude the end index value
console.log(str)
console.log(str.slice(0,5))
let result1=str.slice(6,9)
console.log(result1)
console.log(str.slice(0,-1))//itview solutio
console.log(str.slice(-2,-1))//o
console.log(str.slice(-3,-4))//invalid range
console.log(str)//itview solution

console.log(str.substring(0,5))//itvie
console.log(str.substring(6,9))//2,5

// console.log(str)
console.log(str.substring(0,-1))//itview Solution
console.log(str.substring(5,-2))//itvie
console.log(str.substring(2,4))//vi
console.log(str.substring(4,2))//vi
console.log(str.substring(-2,-3))//invalid range
console.log(str.slice(2))
console.log(str.substring(2))