const info =
{
Name : "Ayush Yadav",
emil :"ayushy065@gmail.com",
password: 73233028495,
};
let obj1={...info, id: 12};
console.log(obj1);
let arr=[1,2,3,4,5,6,7,8];
let obj2={...arr};
console.log(obj2);
let obj3={..."hello"};
console.log(obj3);
function sum(...arr)
{
    for(let i=0;i<arr.length;i++)
           console.log("you gave us",arr[i])
}
sum(1,2,3,4,5,6,7);