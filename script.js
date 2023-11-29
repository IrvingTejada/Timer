let intervalId;

function startTime() {
    let hour = parseInt(document.getElementById("hour").value);
    let min = parseInt(document.getElementById("min").value);
    let sec = parseInt(document.getElementById("seg").value);

    let timeInMillis = (hour * 60 * 60 + min * 60 + sec) * 1000;
    intervalId = setInterval(() => {
        if(timeInMillis <= 0) {
            clearInterval(intervalId);
        } else {
            timeInMillis -= 1000;
            let hours = Math.floor(timeInMillis / (1000 * 60 * 60));
            let minutes = Math.floor((timeInMillis % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeInMillis % (1000 * 60)) / 1000);
            document.getElementById("hour").value = hours < 10 ? "0" + hours : hours;
            document.getElementById("min").value = minutes < 10 ? "0" + minutes : minutes;
            document.getElementById("seg").value = seconds < 10 ? "0" + seconds : seconds;
        }
    }, 1000);
}

function stopTime() {
    clearInterval(intervalId);
}