const display = document.getElementById("display");
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isrunning = false;

function start() {
    if(!isrunning) {
        starttime = Date.now()-elapsedtime;
        timer = setInterval(update,10);
        isrunning = true;
    }
}

function stop() {
    if(isrunning) {
        isrunning = false;
        clearInterval(timer); 
        // some repeat shit
        elapsedtime = Date.now()-starttime;
    }  
}

function reset() {
    clearInterval(timer);
    starttime = 0;
    elapsedtime = 0;
    isrunning = false;
    display.textContent = "00:00:00:00";
}

function update() {
    const timenow = Date.now();
    elapsedtime=timenow-starttime;
    let hours = Math.floor(elapsedtime/(1000*60*60)).toString().padStart(2,0);
    let minutes = Math.floor(elapsedtime/(1000*60)%60).toString().padStart(2,0);
    let seconds = Math.floor(elapsedtime/1000%60).toString().padStart(2,0);
    let milliseconds = Math.floor(elapsedtime%1000/10).toString().padStart(2,0);
    // display.textContent = `${elapsedtime}`;
    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;
}
