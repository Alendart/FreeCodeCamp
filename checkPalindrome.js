function checkPalindrome(str){
    const word = str.toLowerCase();
    let finalWord = "";
    for(const letter of word){
        const code = letter.charCodeAt(0);
        if (!(code <48 || code>57 && code<65 || code>90 && code<97 || code>122)){
            finalWord +=letter
        }

    }
    console.log(finalWord)
    let finalWordBackwards = "";
    for(let i = finalWord.length-1; i >= 0; i--){
        finalWordBackwards += finalWord[i];
    }
    console.log(finalWordBackwards)

    return finalWordBackwards === finalWord;
}

const result = checkPalindrome("p*&^*^&^$*^#*&&@&#((@o*!#()*)&*^&p")
console.log(result)