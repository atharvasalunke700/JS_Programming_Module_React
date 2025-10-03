// Q3. Product with Special Property (Object.defineProperty)
// Create a product object with properties: id and name.
// Use Object.defineProperty() to add a price property
// writable: false (cannot be changed)
// enumerable: true (should be visible in loops)
// configurable: false (cannot be deleted or redefined)
// Test the behaviour by trying to update and delete the price property.

let productobj={
    id:12101,
    name:"issa",
    price:5000,
}
console.log(productobj)
Object.defineProperty(productobj,'id',{
    writable:false,
    enumerable:true,
    configurable:true
})
productobj.price=6000
console.log(productobj)
productobj.emailid="issathanos@gmail@123"
console.log(productobj)

productobj.id=12102
console.log(productobj)