function updateclock() {
    const now = new Date();
    document.getElementById("clock").textContent = `${now.getHours().toString().padStart(2,0)}:${now.getMinutes().toString().padStart(2,0)}:${now.getSeconds().toString().padStart(2,0)}`
}

updateclock();
setInterval(updateclock,1000); 
// set interval calls a function repeatedly