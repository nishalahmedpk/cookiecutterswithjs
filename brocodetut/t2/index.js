// Math Library
// window.alert(Math.PI);
// window.alert(Math.E);
// Math.round(3.2);
// Math.floor(23.2);
// Math.ceil(23.1);
// Math.trunc(43.1);
// more are there

// Random
// let r = Math.floor(Math.random()*6+1);
// window.alert(r);

const but = document.getElementById("roll");
const num = document.getElementById("number");
const max = 6;
const min = 1;
but.onclick = function() {
    let r = Math.floor(Math.random()*max)+min;
    num.textContent = r;
}
