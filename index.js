const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstPass = []
let secondPass = []
let firstPassEl = document.getElementById("pass1")
let secondPassEl = document.getElementById("pass2")


function generatePass() {

    firstPass = []
    secondPass = []
    
    for (let i = 0; i < 16; i++) {
        let number = Math.floor(Math.random() * characters.length);
        firstPass.push(characters[number])
    }
    firstPassEl.innerText = firstPass.join("");


    for (let i = 0; i < 16; i++) {
        let number = Math.floor(Math.random() * characters.length)
        secondPass.push(characters[number])
    }
    secondPassEl.innerText = secondPass.join("")
}

// function copyToClipboard(text) {
//     navigator.clipboard.writeText(text).then(() => {
//         alert("Hasło skopiowane do schowka!");
//     }).catch(err => {
//         console.error('Wystąpił błąd podczas kopiowania do schowka', err);
//     });
// }



