let home = document.getElementById("home");
let guest = document.getElementById("guest");
home.textContent=0;
guest.textContent=0;
let valueHome = 0;
let valueGuest = 0;

function addOneHome() {
    valueHome += 1;
    home.textContent = valueHome;
}
function addTwoHome() {
    valueHome += 2;
    home.textContent = valueHome;
}
function addThreeHome() {
    valueHome += 3;
    home.textContent = valueHome;
}
function addOneGuest() {
    valueGuest += 1;
    guest.textContent = valueGuest;
}
function addTwoGuest() {
    valueGuest += 2;
    guest.textContent = valueGuest;
}
function addThreeGuest() {
    valueGuest += 3;
    guest.textContent = valueGuest;
}
function reset() {
    
    valueHome = 0;
    home.textContent = valueHome;
    valueGuest = 0;
    guest.textContent = valueGuest;
}