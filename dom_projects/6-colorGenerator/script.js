let intervalID = null;
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    } 
    return color;
};

startButton.addEventListener("click", function () {
    if (intervalID === null) {
        intervalID = setInterval(function () {
        document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
});

stopButton.addEventListener("click", function () {
    clearInterval(intervalID);
    intervalID = null;
});


resetButton.addEventListener("click", function () {
    clearInterval(intervalID);
    intervalID = null;
    document.body.style.backgroundColor = "#FFFFFF";
});


