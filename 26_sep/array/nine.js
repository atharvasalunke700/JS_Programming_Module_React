const user1={
    username:'rajiv',
    userid:12102,
    useradd:{
        city:'Pune',
    }
}

const user2=structuredClone(user1)//deep copy using spread opreation
console.log(user1)
console.log(user2)
user2.username='anil'
user2.useradd.city="Mumbai"
console.log(user1)
console.log(user2)