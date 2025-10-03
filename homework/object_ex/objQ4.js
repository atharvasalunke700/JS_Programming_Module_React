// Q4. Bank Account Security
// Create a bankAccount object with properties: accountNumber, holderName, and balance.
// Seal the object to prevent adding or deleting properties.
// Add a method deposit(amount) that updates the balance.
// Try adding a new property branch and check what happens.

let bankAccountobj={
    accountNumber:1234567,
    holderName:'issathanos',
    balance:5000,
}
console.log(bankAccountobj)

Object.seal(bankAccountobj)

bankAccountobj.deposite=10000
console.log(bankAccountobj)
 delete bankAccountobj.balance