function hello()
{
    console.log("Hello,Ayush Yadav");
}
hello();
hello();
function isAdult()
{
    let age=2;
 if(age>=18)
    console.log("Adult");
  else
    console.log("Not an adult");
}
isAdult();
function printName(name,age)
{
    console.log(name,age);
}
printName(21);
function average(a,b,c)
{
    console.log((a+b+c)/3);
}
average(21,2233,135);
function Multiplication(num)
{
    for(let i=1;i<=10;i++)
    {
        console.log(num*i);
    }
}
Multiplication(5);
Multiplication();
function sum(a,b)
{
 return a+b;
}
sum(3,4);
let val=sum(3,4);
console.log(val);
let str=["Hi! ","Ayush Yadav ","Bye "," -2 "];
function concat(str)
{
    let sum="";
    for(let i=0;i<str.length;i++)
    {
        sum+=str[i];
    }
    return sum;
}
 let result=concat(str);
 console.log(result);
 {
    let blockscope=25;
    console.log(blockscope);
 }
 console.log(blockscope);
 