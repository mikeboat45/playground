let currentHomeScore = 0;
let currentGuestScore = 0;

// manipulate home scores
const displayHomeScore = document.getElementById("home-score");
displayHomeScore.textContent = currentHomeScore;

function add1Point() {
  currentHomeScore = currentHomeScore + 1;
  displayHomeScore.textContent = currentHomeScore;
}

function add2Point() {
  currentHomeScore = currentHomeScore + 2;
  displayHomeScore.textContent = currentHomeScore;
}

function add3Point() {
  currentHomeScore = currentHomeScore + 3;
  displayHomeScore.textContent = currentHomeScore;
}

// manipulate guest scores
const displayGuestScore = document.getElementById("guest-score");
displayGuestScore.textContent = currentGuestScore;

const add1Btn = document.getElementById("1-point");
const add2Btn = document.getElementById("2-point");
const add3Btn = document.getElementById("3-point");

add1Btn.addEventListener("click", () => {
  currentGuestScore = currentGuestScore + 1;
  displayGuestScore.textContent = currentGuestScore;
});

add2Btn.addEventListener("click", () => {
  currentGuestScore = currentGuestScore + 2;
  displayGuestScore.textContent = currentGuestScore;
});

add3Btn.addEventListener("click", () => {
  currentGuestScore = currentGuestScore + 3;
  displayGuestScore.textContent = currentGuestScore;
});

// reset scores for new game
const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", () => {
  currentHomeScore = 0;
  currentGuestScore = 0;

  displayHomeScore.textContent = 0;
  displayGuestScore.textContent = 0;
});
