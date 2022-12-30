const input = document.querySelector('#input-text')
const btnEncrypt = document.querySelector('#encrypt')

const output = document.querySelector('#output')
const noOutput = document.querySelector('#no-output')
const withOutput = document.querySelector('#with-output')
const outputText = document.querySelector('#output-text')

function activeOutput() {
    noOutput.style.display = 'none'
    withOutput.style.display = 'flex'
    output.classList.add(['content'])
}

function desactiveOutput() {
    noOutput.style.display = 'block'
    withOutput.style.display = 'none'
}

function encryptLetter(letter){
    let returnedString

    if (letter == 'a') {
        returnedString = 'ai'
    } else if(letter == 'e'){
        returnedString = 'enter'
        
    } else if(letter == 'i'){
        returnedString = 'imes'
        
    } else if(letter == 'o'){
        returnedString = 'ober'
        
    } else if(letter == 'u'){
        returnedString = 'ufat'
    } else {
        returnedString = letter
    }

    return returnedString
}

function encryptText(text) {
    let encryptedString = '';

    for(let i = 0; i < text.length; i++){
        encryptedString += encryptLetter(text[i])
    }

    return encryptedString;
}

function encryptListener() {
    const encryptedText = encryptText(input.value.trim())
    if (encryptedText.length == 0){
        desactiveOutput()
        return 0;
    }
    outputText.textContent = encryptedText
    activeOutput()
}


function decrypt(string){
    let decryptedString = string.replace(/ai/g,'a')
    decryptedString = decryptedString.replace(/enter/g,'e')
    decryptedString = decryptedString.replace(/imes/g,'i')
    decryptedString = decryptedString.replace(/ober/g,'o')
    decryptedString = decryptedString.replace(/ufat/g,'u')

    return decryptedString
}

function decryptText(text) {
    let decryptedText = decrypt(text)

    console.log(decryptedText)

    return decryptedText;
}

function decryptListener() {
    const decryptedText = decryptText(input.value.trim())
    if (decryptedText.length == 0){
        desactiveOutput()
        return 0;
    }
    outputText.textContent = decryptedText
    activeOutput()
}

function copy() {
    navigator.clipboard.writeText(outputText.textContent)
}