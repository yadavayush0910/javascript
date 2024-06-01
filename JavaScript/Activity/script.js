let ul = document.createElement('ul');
let btn = document.querySelector('button');
let inp = document.querySelector('input');

btn.addEventListener("click", function() {
    let li = document.createElement('li');
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value="";

});
