const romanNumbers = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1,
}


function convertToRoman(num){
    let romanNumberValue = 0;
    const romanNumber = [];

    for(romanNumberValue; romanNumberValue < num;){

        for(const number in romanNumbers){

            const value = romanNumbers[number]
            const actualMissing = num - romanNumberValue
            if( actualMissing >= value){
                romanNumber.push(number);
                romanNumberValue += value
                console.log({romanNumber,romanNumberValue})
                break
            }

        }

    }

    return romanNumber.reduce((prev, curr) => prev + curr,"")

}


console.log(convertToRoman(3442))