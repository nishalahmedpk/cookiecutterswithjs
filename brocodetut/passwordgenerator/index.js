
function randompassword(incupper,inclower,incnumbers,incsymbols,length) {
let allowedchars = "";
let password = "";
const lowercase = "qwertyuiopasdfghjklzxcvbnm";
const upper = lowercase.toUpperCase();
const numbers = "1234567890";
const symbols = "~!@#$%^&*()_+-=[]\{}|;':<>?,./"+'"';
allowedchars += incupper ? upper : "";
allowedchars += inclower ? lowercase : "";
allowedchars += incnumbers ? numbers : "";
allowedchars += incsymbols ? symbols : "";
if(allowedchars.length<=0) return `Lenght of passwords must atleast be 1`;
for(let i=0;i<length;i++){
    let randomchar = Math.floor(Math.random()*allowedchars.length);
    password += allowedchars[randomchar];
}
return password;
}

console.log(randompassword(true,false,false,false,4));