//Destructuring of Object

const userintro={
    username:'rajiv',
    userid:1234,
    useradd:{
        city:'pune',
        state:'Maha'
    }
}
console.log(userintro)
console.log(userintro.username)
console.log(userintro.userid)
//Destructuring of object and nested object
const{username,userid,useradd:{city}}=userintro
console.log(username,userid,city)