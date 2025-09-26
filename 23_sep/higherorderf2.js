function higherorder(tester)
{
    console.log("from the higher order function");
    tester()
}
function tester()
{
    console.log("From call back function");
}
higherorder(tester)