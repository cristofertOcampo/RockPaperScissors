const button_Stone = document.getElementById("Stone");
const button_Paper = document.getElementById("Paper");
const button_Scissors = document.getElementById("Scissors");

const message = document.querySelector(".text-mensajes");
const contenedor = document.querySelector(".conte_compu");
const Choose = document.querySelector(".Choose");

const img_Stone = document.getElementById("Stone").src;
const img_paper = document.getElementById("Paper").src;
const img_scissor = document.getElementById("Scissors").src;

//Wins user/machine
const Count_User = document.querySelector(".rol_user");
const Count_Compu = document.querySelector(".rol_compu");

// Events
button_Stone.addEventListener("click", StoneProcess);
button_Paper.addEventListener("click", PaperProcess);
button_Scissors.addEventListener("click", ScissorsProcess);

let user = 0;
let machine = 0;

function StoneProcess() {
  let Random = Math.floor(Math.random() * 3) + 1;
  console.log("Random: " + Random);
  document.querySelector(".img-User").setAttribute("src", img_Stone);
  if (Random == 1) {
    document.querySelector(".img-Compu").setAttribute("src", img_Stone);
    message.innerHTML = `<div class="alert alert-success" role="alert">!Tie!</div>`;
  } else if (Random === 2) {
    document.querySelector(".img-Compu").setAttribute("src", img_paper);
    machine = machine + 1;
    Count_Compu.innerHTML = machine;
    message.innerHTML = `<div class="alert alert-success" role="alert">!Machine Win!</div>`;
  } else if (Random === 3) {
    document.querySelector(".img-Compu").setAttribute("src", img_scissor);
    user = user + 1;
    Count_User.innerHTML = user;
    message.innerHTML = `<div class="alert alert-success" role="alert">!User Win!</div>`;
  }
  Game_Over();
}

function PaperProcess() {
  let Random = Math.floor(Math.random() * 3) + 1;
  console.log("Random: " + Random);
  document.querySelector(".img-User").setAttribute("src", img_paper);
  if (Random === 1) {
    document.querySelector(".img-Compu").setAttribute("src", img_Stone);
    user = user + 1;
    Count_User.innerHTML = user;
    message.innerHTML = `<div class="alert alert-success" role="alert">!User Win!</div>`;
  } else if (Random === 2) {
    document.querySelector(".img-Compu").setAttribute("src", img_paper);
    message.innerHTML = `<div class="alert alert-success" role="alert">!Tie!</div>`;
  } else if (Random === 3) {
    document.querySelector(".img-Compu").setAttribute("src", img_scissor);
    machine = machine + 1;
    Count_Compu.innerHTML = machine;
    message.innerHTML = `<div class="alert alert-success" role="alert">!Machine Win!</div>`;
  }
  Game_Over();
}

function ScissorsProcess() {
  let Random = Math.floor(Math.random() * 3) + 1;
  console.log("Random: " + Random);
  document.querySelector(".img-User").setAttribute("src", img_scissor);
  if (Random === 1) {
    document.querySelector(".img-Compu").setAttribute("src", img_Stone);
    machine = machine + 1;
    Count_Compu.innerHTML = machine;
    message.innerHTML = `<div class="alert alert-success" role="alert">!Machine win!</div>`;
  } else if (Random === 2) {
    document.querySelector(".img-Compu").setAttribute("src", img_paper);
    user = user + 1;
    Count_User.innerHTML = user;
    message.innerHTML = `<div class="alert alert-success" role="alert">!User Win!</div>`;
  } else if (Random === 3) {
    document.querySelector(".img-Compu").setAttribute("src", img_scissor);
    message.innerHTML = `<div class="alert alert-success" role="alert">!Tie!</div>`;
  }
  Game_Over();
}

function Game_Over() {
  if (machine == 3) {
    message.innerHTML = `<div class="alert alert-success" role="alert">!The machine won you!</div>
        <a href="index.html" class="link">Play Again</a>`;
    contenedor.style.display = "none";
    Choose.style.display = "none";
  } else if (user == 3) {
    message.innerHTML = `<div class="alert alert-success" role="alert">!You Won!</div>
        <a href="index.html" class="link">Play Again</a>`;
    contenedor.style.display = "none";
    Choose.style.display = "none";
  }
}