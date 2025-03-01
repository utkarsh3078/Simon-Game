let gameSeq = [];
let userSeq = [];

let btns = ["red","green","purple","blue"];

let started = false;
let level = 0;
let h3 = document.querySelector("h3")

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
   
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250);
}

function levelUp(){
    userSeq=[]
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`)
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);

    gameSeq.push(randColor);
    console.log(gameSeq)
    btnFlash(randbtn);
}

function checkAns(idx){
    // console.log("Current level :", level);
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press Any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "White"
        }, 500);
        reset();
    }
}
function btnPress(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
   started = false;
   gameSeq = [];
   userSeq = []; 
   level = 0;
}
