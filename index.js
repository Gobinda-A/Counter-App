let count=0;
let countEl=document.getElementById("count-el");
console.log(countEl);
function increment(){
    count++;
    countEl.innerText=count;
}
function decrement(){
    count--;
    countEl.innerText=count;
}
function reset(){
    count=0;
    countEl.innerText=0;
}
let saveEl=document.getElementById("save-el");
console.log(saveEl);
function save(){
    let display=count+" ";
    saveEl.textContent+=display;
    count=0;
    countEl.innerText=0;
}

