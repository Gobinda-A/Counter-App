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
let saveEl=document.getElementById("save-el");
let resetEl=saveEl.innerText;
console.log(resetEl);
console.log(saveEl);
function save(){
    let display=count+" ";
    saveEl.textContent+=display;
    count=0;
    countEl.innerText=0;
}

function reset(){
    count=0;
    countEl.innerText=0;
    saveEl.innerText=resetEl;
}

