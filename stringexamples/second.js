//object :

//object :one ot the non-primitive data type and also called as reference-based type of datatypes

//  Object:they have three object literals
    // object litrals
    // Array
    // Function
    
//1. object Literal
let empobj={

    id:12101,
    empname:'rajiv',
    exprience:12,
    city:'pune',

    info:function (){
        console.log('Employee from infosys')
    },

    skills:['JAVA','JS','React','DBMS'],

    contact:{
        add:'Pune Maharashtra',
        pincode:411061,
        mobno:123654789,
    }
}
console.log(empobj)
console.log(empobj.skills)
console.log(empobj.id)
empobj.emailid='xyzitview@.com'
console.log(empobj);

empobj.contact.country='INDIA'
console.log(empobj)

 delete empobj.info
 console.log(empobj)