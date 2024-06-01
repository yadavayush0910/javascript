const info = {
    name: "Ayush Yadav",
    age: 21,
    eng: 90,
    math: 94,
    phy: 93,
    getAvg() {
        console.log((this.eng + this.math + this.phy) / 3);
    }
};

function getAvg() {
    console.log(info); // Access the info object directly
}

getAvg(); // Call the function
const sum=(a,b)=>
{
    return (a+b);
}
console.log(sum(2,3));
const power=(a,b)=>
{
    return a**b;
}
console.log(power(2,3));
const greeting = () => {
    console.log("hi");
}

console.log(greeting); // This will print [Function: greeting]
greeting(); // This will execute the function and print "hi"
console.log(sum(2,3));
const power1=(a,b)=>
{
    console.log(a**b);
}
console.log(power1(2,3));

const mult=(a,b)=>(a*b);

console.log(mult(2,32));