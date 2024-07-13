function rolldice() {
    const noofdice = document.getElementById("noofdice").value;
    const result = document.getElementById("result");
    const dimages = document.getElementById("dimages");
    const values = [];
    const images = [];

    for(let i = 1;i<=noofdice;i++) {
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src=${value}.png>`);
    } 

    result.textContent = `Dice: ${values.join(', ')}`;
    dimages.innerHTML = images.join('');
}