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
console.log(empobj1)
Object.seal(empobj1)//object.seal=> prevent to add delete new property but they allow to replace or edit existing property value
empobj1.city='Mumbai'
empobj1.email="xysitview@gmail.com"
delete empobj1.city
console.log(empobj1)