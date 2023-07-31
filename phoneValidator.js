// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

function telephoneCheck(str){
    const usTeleRegex =  /^[1]?[ ]?(?:(?=.*\()(\(\d{3}\))|(\d{3}))[- ]?(\d{3})[- ]?(\d{4})$/
    return usTeleRegex.test(str)
}



console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("1(555)555-5555"))
console.log(telephoneCheck("2 757 622-7382"))
console.log(telephoneCheck("2(757)622-7382"))