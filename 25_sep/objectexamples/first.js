let empobj1={

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
//How to add or delete
console.log(empobj1)
empobj1.contact.emailid='xyzitview@gmail.com'
console.log(empobj1)

Object.freeze(empobj1)//by using this function of object we can not add delete ann modify any property in existing object
empobj1.exprience()
