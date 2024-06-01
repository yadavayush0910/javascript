let i=5;
while(i>=1)
{
    if (i===3)
       break;
    console.log(i);
    i--;
}
let fruits =["Apple","Banana","Litchi"];
for(let i=0;i<fruits.length;i++)
{
    console.log(i,fruits[i]);
}
let actors =[["SHAHRUKH","SALMAN","AMIR"],["SANJAY DUTT","GOVINDA","SUNNY DEOL"]]
for(let i=0;i<actors.length;i++)
{
    for(let j=0;j<actors[i].length;j++)
    {
        console.log(actors[i][j]);
    }
}
for(elements of actors)
{
    console.log(elements);
}
for(char of "ayushyadav")
{
    console.log(char);
}
for(list of actors)
{
    for(elements of list)
    {
        console.log(elements);
    }
}
let ayushyadav1={
 Name:"Ayush Yadav",
 Age :"21"
};
console.log(ayushyadav1);
let post={
    Name: "Ayush Yaadav",
    Username:"@ayushy065",
    likes:65,
    tags:["@ayushyadav","rahulyadav","ayushy12212"]
};
console.log(post.Name);
console.log(post["tags"]);
let prop="repost";
console.log(post[prop]);
console.log(post.prop);
const obj={
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
};
console.log(obj);
obj["true"]="e";
obj.undefined="x";
delete obj[2];
delete obj.null;
console.log(obj);
const student ={
    name:"Shraddha",
    age:23,
    marks:94.4,
    city:"Delhi"
};
student.city="Mumbai";
student["gender"]="female";
student.marks="A";
console.log(student);
const studentsinfo ={
    shraddha:{
    name:"Shraddha",
    age:23,
    marks:94.4,
    city:"Delhi"
    },
    aman:{
        name:"Aman",
        age:21,
        marks:91.4,
        city:"Delhi"
        },
};
console.log(studentsinfo.aman.marks);
console.log(Math.ceil(-5.5));
