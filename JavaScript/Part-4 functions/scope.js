function outer()
{
    function inner()
    {
        let a=10;
        console.log(x);
    }
    let x=12;
    let y=22;
    inner();
    // console.log(a);
}
outer();
function multigreet(func,count)
{
    for(let i=0;i<count;i++)
        func();
}
let greet=function()
{
    console.log("Namaste");
}
multigreet(greet,3);
multigreet(function(){console.log("Hello!")},12);