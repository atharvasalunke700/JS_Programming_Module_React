const userintro={
    username:'rajiv',
    userid:1234,
    useradd:{
        city:'pune',
        state:'Maha'
    }
}

//Destructuring of Function
function userdata({userid,useradd:{state}})
{
    console.log(userid,state)
}
userdata(userintro)