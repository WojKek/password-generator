const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passLength = 0
let passInput = document.getElementById("pass-length")
let firstPass = document.getElementById("first-pass")
let secondPass = document.getElementById("second-pass")

function getRandomCharacter() {
    let randomNumb = Math.floor(Math.random() * characters.length)
    return characters[randomNumb]
} 

function getPassword() {
    let pass = ""
    for (let i = 0; i < passLength; i++) {
        pass += getRandomCharacter()                
    }
    return pass
}

function getPasswordLength() {
    if (passInput.value.length == 0) {
        return 13
    } else {
        return passInput.value
    }
}

function genPasswords() {
    passLength = getPasswordLength()
    firstPass.textContent = getPassword()
    secondPass.textContent = getPassword()
}

