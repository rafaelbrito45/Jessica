let result = 0;

let answer1 = document.getElementById("answer1");
let opt1a = document.getElementById("opt1a");
let opt1b = document.getElementById("opt1b");
let opt1c = document.getElementById("opt1c");
let opt1d = document.getElementById("opt1d");

answer1.addEventListener("click",()=>{
    opt1a.classList.add("red");
    opt1b.classList.add("red");
    opt1c.classList.add("green");
    opt1d.classList.add("red");
})
opt1c.addEventListener("click",()=>{
    result+=1;
})


let answer2 = document.getElementById("answer2");
let opt2a = document.getElementById("opt2a");
let opt2b = document.getElementById("opt2b");
let opt2c = document.getElementById("opt2c");
let opt2d = document.getElementById("opt2d");

answer2.addEventListener("click",()=>{
    opt2a.classList.add("green");
    opt2b.classList.add("red");
    opt2c.classList.add("red");
    opt2d.classList.add("red");
})
opt2a.addEventListener("click",()=>{
    result+=1;
})


let answer3 = document.getElementById("answer3");
let opt3a = document.getElementById("opt3a");
let opt3b = document.getElementById("opt3b");
let opt3c = document.getElementById("opt3c");
let opt3d = document.getElementById("opt3d");

answer3.addEventListener("click",()=>{
    opt3a.classList.add("red");
    opt3b.classList.add("green");
    opt3c.classList.add("red");
    opt3d.classList.add("red");
})
opt3b.addEventListener("click",()=>{
    result+=1;
})


let answer4 = document.getElementById("answer4");
let opt4a = document.getElementById("opt4a");
let opt4b = document.getElementById("opt4b");
let opt4c = document.getElementById("opt4c");
let opt4d = document.getElementById("opt4d");

answer4.addEventListener("click",()=>{
    opt4a.classList.add("red");
    opt4b.classList.add("red");
    opt4c.classList.add("red");
    opt4d.classList.add("green");
})
opt4d.addEventListener("click",()=>{
    result+=1;
})

let resultSection = document.getElementById("resultSection");
let scoreNumber = document.getElementById("scoreNumber");

function showResults(){
    scoreNumber.innerHTML=result;
    resultSection.style.display="block";
    window.scroll({
        top: 2000,
        behavior: 'smooth'
      });
    
    
}
