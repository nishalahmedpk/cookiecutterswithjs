const submit = document.getElementById("msub");
const temp = document.getElementById("temp");
const c2f = document.getElementById("c2f");
const f2c = document.getElementById("f2c");
const final = document.getElementById("output");

submit.onclick = function() {
    let t1 = temp.value;
    if(c2f.checked) {
        let t = t1*9/5+32;
        final.textContent = `${t1} celcius is ${t} farenheit.`;
    }
    else if(f2c.checked) {
        let t = (t1-32)*5/9;
        final.textContent = `${t1} farenheit is ${t} celcius.`;
    }
    else {
        final.textContent = "Invalid Input";
    }
}