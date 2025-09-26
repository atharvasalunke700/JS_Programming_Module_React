debugger
let globalvariable='I am script/ global variable'

function outerfunction()
{
    let outervariable='i am outer variable'
    console.log('From outer function')
    console.log(outerfunction);

    function innerfunction()
    {
        let innervariable='I am inner type of varaible'
        console.log('From inner function')
        console.log(outervariable);
        console.log(globalvariable);
    }
    innerfunction()
}
outerfunction()