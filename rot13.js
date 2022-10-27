const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const alphabetArray = alphabet.split('')

function rot13(str){
    const text = str.toUpperCase();
    let encryptedText = "";
    for(const letter of text){
        const letterCode = letter.charCodeAt(0);
        console.log({letterCode,letter})
        if (letterCode>64 && letterCode<91){
            const charIndex = alphabetArray.findIndex((val) => val === letter)+13;
            const cipherValue = charIndex > alphabetArray.length-1 ? charIndex - alphabetArray.length : charIndex;
            console.log({charIndex,cipherValue})
            encryptedText += alphabetArray[cipherValue];
        } else {
            encryptedText += letter;
        }

    }
    console.log(encryptedText)

}

function decipherRot13(str){
    const encryptedText = str.toUpperCase();
    let text = "";
    for (const letter of encryptedText){
        const letterCode = letter.charCodeAt(0);
        if (letterCode>64 && letterCode<91){
            const charIndex = alphabetArray.findIndex((val) => val === letter)-13;
            const decipherValue = charIndex < 0 ? charIndex + alphabetArray.length : charIndex;
            text += alphabetArray[decipherValue]
        }else {
            text += letter;
        }
    }
    console.log(text)
}

rot13("FREE CODE CAMP")
decipherRot13("SERR PBQR PNZC")