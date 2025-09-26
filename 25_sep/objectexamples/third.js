let empobj1={

    id:12101,
    empname:'rajiv',
    jobrole:'software engineer',
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
console.log(empobj1)

Object.defineProperty(empobj1,'id',{ //Object.defineProperty=>we restrict the property settings with the help of define property function
    writable:false,
    configurable:false
})

empobj1.id=12102
delete empobj1.id
console.log(empobj1)