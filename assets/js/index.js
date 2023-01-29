const upperCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?"]

const allCharacters = [].concat(upperCharacters, lowerCharacters, numbers, symbols);
const results = []

let password1El = document.getElementById('password1-el')
let password2El = document.getElementById('password2-el')
let lengthEl = document.getElementById('length')
let uppercaseEl = document.getElementById('uppercase')
let lowercaseEl = document.getElementById('lowercase')
let numberEl = document.getElementById('numbers')
let symbolEl = document.getElementById('symbols')



function generatePassword() {
    renderPasswords();
}

function renderPasswords() {

    password1El.value = ''
    password2El.value = ''
    const length = +lengthEl.value 
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numberEl.checked
    const hasSymbol = symbolEl.checked

    let passwordArray = []

    if (hasLower) {
        passwordArray = passwordArray.concat(lowerCharacters)
    }
    if (hasUpper) {
        passwordArray = passwordArray.concat(upperCharacters)
    }
    if (hasNumber) {
        passwordArray = passwordArray.concat(numbers)
    }
    if (hasSymbol) {
        passwordArray = passwordArray.concat(symbols)
    }

    for (i = 0; i < length; i++) {
        let randomPassword1 = Math.floor(Math.random() * passwordArray.length)
        let randomPassword2 = Math.floor(Math.random() * passwordArray.length)

        password1El.value += passwordArray[randomPassword1]
        password2El.value += passwordArray[randomPassword2]
    }
}

function clearPasswords() {
    password1El.value = ''
    password2El.value = ''
}

password1El.addEventListener("click", function() {
    password1El.select()
    document.execCommand("copy")
    alert("First Password copied to clipboard!");
});

password2El.addEventListener("click", function() {
    password2El.select()
    document.execCommand("copy")
    alert("Second Password copied to clipboard!");
});

// Toogle dark & light

let sun = document.getElementById("sun");
sun.onclick = function() {
    sun.classList.toggle("night");
}