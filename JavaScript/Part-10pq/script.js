let btn = document.createElement("button");
document.body.appendChild(btn);
btn.innerText = "Click me!";
btn.addEventListener("dblclick",function(){
    console.log('hi');
});
btn.addEventListener("click",function(){
    this.style.backgroundColor='green';
});
