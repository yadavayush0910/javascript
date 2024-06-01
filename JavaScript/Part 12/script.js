// let jsonRes ='{"fact": "It has been scientifically proven that stroking a cat can lower ones blood pressure.","length" : 85}';
// let validRes=JSON.parse(jsonRes);
// console.log(validRes);
// console.log(jsonRes);
// let student ={
//     name :"Ayush Yadav",
//     age :21,
// };
// let outp= JSON.stringify(student);
// console.log(outp);
let url="https://catfact.ninja/breeds";
fetch(url)
.then((rrsponse)=>
{
    console.log(Response);
})
.catch((err)=>
{
    console.log("Error-",err);
});