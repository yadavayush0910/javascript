// let id= const func=()=>{console.log("hi!")};
// setInterval(func,4000);
// clearInterval(id);
// let id = setInterval(() => {
//     console.log("Hello World");
// }, 3000);
// console.log(id);

// Start the second interval after 3 seconds (3000 milliseconds)
let id2 = setInterval(() => {console.log("hi Ayush");}, 2000);
setTimeout(()=>{clearInterval(id2)},12000);
