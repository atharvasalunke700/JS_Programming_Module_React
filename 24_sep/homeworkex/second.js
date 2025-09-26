function greetings(name)
{
    return (name)=>
    {
        console.log('Hello $(name)');
        return name;
    } 
}

let result =greetings()
console.log(result('itview'));