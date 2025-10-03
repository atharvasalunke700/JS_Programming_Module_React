// Q2. Car Information (Object.seal)
// Create a car object with properties: brand, model, and year.
// Seal the object using Object.seal().
// Try changing the value of an existing property, deleting a property, and adding a new one.
// Print the object to see which changes are applied.

let carobj={
    brand:'toyta',
    model:'xz4wD',
    year:2025,
}
Object.seal(carobj)
console.log(carobj)
//deleting
delete carobj.brand
console.log(carobj)
//adding
carobj.emailid='issa@123gmail.com'
console.log(carobj);