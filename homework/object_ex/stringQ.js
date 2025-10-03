// String
// Q1. Write a program that processes a sentence string and performs the following operations:
// Take a sentence (e.g., "JavaScript is a powerful programming language").
// Use slice() to extract the word "powerful".
// Use split() to break the sentence into an array of words.
// Use includes() to check if the word "JavaScript" exists in the sentence.
// Use indexOf() to find the position of the word "language" in the sentence.

let str="JavaScript is a powerful programming language"

console.log(str.slice(16,24))//powerful

// let res=str.split("")
// console.log(res[6])

console.log(str.split())

console.log(str.includes("JavaScript"))

console.log(str.indexOf("language"))