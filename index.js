let homeScoreEl = document.getElementById('homescore-el');
let guestScoreEl = document.getElementById('guestscore-el');
let resetBtn = document.getElementById('reset-btn'); 
let resetBtn1 = document.getAnimations('reset-btn1');
let homeScore = 0;
let guestScore = 0;

//Home Score Buttons 

function btn(e) {
    if (e.id === "home") {
        homeScore += Number(e.value)
        homeScoreEl.innerText = homeScore
    }
    if (e.id === "guest") {
        guestScore += Number(e.value)
        guestScoreEl.innerText = guestScore
    }
    
}

//Guest Score Buttons

function resetGuest() {
    let resetScore = guestScore;

    guestScoreEl.textContent = 0
    guestScore = 0
}
function resetHome1() {
    let resetScore1 = homeScore;

    homeScoreEl.textContent = 0
    homeScore = 0
}