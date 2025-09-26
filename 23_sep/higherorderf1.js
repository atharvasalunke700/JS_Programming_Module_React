debugger

function demo(data)
{
    console.log(typeof(data))
    console.dir(data)
    data()
}

// higherorderfunction("hello from programmer")
// higherorderfunction(23)
// higherorderfunction(true)
// higherorderfunction(null)

function test()
{
    console.log("I am from test function");
}
//callback function
demo(test)