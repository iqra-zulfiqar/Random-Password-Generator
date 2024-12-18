const passwordBox = document.querySelector("#password");
const genButton = document.querySelector(".btn")
const copyButton = document.querySelector(".copyBtn")
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()-_+[]{}|;:'?=/";

const allChars = upperCase + lowerCase + number + symbols;

genButton.addEventListener("click", () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

while (length > password.length) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
}
passwordBox.value = password;
}) 

copyButton.addEventListener("click", () => {
    passwordBox.select();
    document.execCommand("copy");
}) 
 