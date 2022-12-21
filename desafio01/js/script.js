const decrypted = document.querySelector('#decrypted')
const encrypted = document.querySelector('#encrypted')
const btnEncrypt = document.querySelector('#encrypt')


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
    const encryptedText = encryptText(decrypted.value);
    encrypted.value = encryptedText;
}

function decryptLetter(letter ){
    let returnedString
    let nextPosition = 0

    if (letter == 'a') {
        returnedString = 'a'
        nextPosition = 1
    } else if(letter == 'e'){
        returnedString = 'e'
        nextPosition = 4
    } else if(letter == 'i'){
        returnedString = 'i'
        nextPosition = 3
    } else if(letter == 'o'){
        returnedString = 'o'
        nextPosition = 3
    } else if(letter == 'u'){
        returnedString = 'u'
        nextPosition = 3
    } else {
        returnedString = letter
    }

    return [returnedString, nextPosition]
}

function decryptText(text) {
    let decryptedString = '';

    for(let i = 0; i < text.length; i++){
        let decryptedLetter = decryptLetter(text[i], i)
        decryptedString += decryptedLetter[0]
        i += decryptedLetter[1]
    }

    console.log(decryptedString)

    return decryptedString;
}

function decryptListener() {
    const decryptedText = decryptText(encrypted.value);
    decrypted.value = decryptedText;
}