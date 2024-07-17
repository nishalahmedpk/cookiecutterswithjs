function transform() {
    const box1 = document.getElementById("box1");
    box1.style.scale = 2;
    setTimeout(()=>box1.style.scale=1,1000);
}