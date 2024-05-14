
let games = [];
let users = [];
let started = false;
let level = 0;
let btns = ["red", "green", "pink", "yellow"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game is started");
        started = true;
        levelup();
    }
});

function btnf(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200);
}

function levelup() {
    level++;
    users = [];
    h2.innerText = `Level ${level}`;
    let ran = Math.floor(Math.random() * 4);
    let rancolor = btns[ran];
    games.push(rancolor);
    console.log(games);
    let randbtn = document.querySelector(`.${rancolor}`);
    btnf(randbtn);
}

function chekAns(idx) {
    if (games[idx] === users[idx]) {
        if (users.length === games.length) {
            setTimeout(levelup, 100);
        }
    } else {
        h2.innerText = `Game over! Press any key to start. Your score is : ${level} ` ;
        h2.style.color="red";
        reset();
    }
}

function btnpress() {
    let btn = this;
    btnf(btn);
    let usercolor = btn.getAttribute("id");
    users.push(usercolor);
    chekAns(users.length - 1);
}

let allbtns = document.querySelectorAll(".t");
for (let btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    games = [];
    users = [];
    started = false;
    level = 0;
}
