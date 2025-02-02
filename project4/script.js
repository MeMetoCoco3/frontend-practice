const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn")

let seconds = 0;
let minutes = 0;
let hours = 0;

let timerInterval = null;
let timerStatus = "stopped";

function stopWatch(){
    seconds ++
    if (seconds/60 === 1){
        seconds = 0;
        minutes ++;
        if (minutes/60 === 1){
            minutes = 0;
            hours ++;

        }
    }

    document.getElementById("timer").innerText = String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');
}
// Stop watch will be called each 1000 milliseconds
//window.setInterval(stopWatch, 1000);

startStopBtn.addEventListener("click", function(){
    if (timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 100);
        document.getElementById("startStopBtn").innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
    } else{
        window.clearInterval(timerInterval);
        document.getElementById("startStopBtn").innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
});


resetBtn.addEventListener("click", function(){
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("timer").innerHTML = `00:00:00`;
    document.getElementById("startStopBtn").innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
})