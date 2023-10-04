// Set the date we're counting down to (e.g., your launch date)
var countdownDate = new Date("2023-12-31 00:00:00").getTime();

// Update the countdown every 1 second
var countdown = setInterval(function() {
var now = new Date().getTime();
var distance = countdownDate - now;

var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

var countdownText = hours + ":" + minutes + ":" + seconds;

document.getElementById("countdown-timer").innerHTML = countdownText;

if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown-timer").innerHTML = "EXPIRED";
}
}, 1000);