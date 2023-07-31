const valueDetails = {
    "ONE HUNDRED":100,
    "TWENTY":20,
    "TEN":10,
    "FIVE":5,
    "ONE":1,
    "QUARTER":0.25,
    "DIME":0.1,
    "NICKEL":0.05,
    "PENNY":0.01,
}

const responseStatus = {
    1:"INSUFFICIENT_FUNDS",
    2:"CLOSED",
    3:"OPEN",
}

function checkCashRegister(price, cash, cid) {
    const totalCashInDrawer = Number((cid.reduce((prev, curr) => prev + curr[1],0)).toFixed(2))
    const changeToReturn = (cash-price)
    const totalCashLeftInDrawer = Number((totalCashInDrawer - changeToReturn).toFixed(2))
    const moneySorted = ([...cid]).sort((a, b) => valueDetails[b[0]] - valueDetails[a[0]])
    moneySorted.push(["END",0]) // Marker for end of drawer

    if (totalCashLeftInDrawer < 0){
        return {status:responseStatus[1],change:[]}
    }
    if (totalCashLeftInDrawer === 0) {
        return {status: responseStatus[2],change:[...cid]}
    }

    const moneyLeft = [...moneySorted]
    let change = [];
    let changeValue = 0;
    for (changeValue; changeValue < changeToReturn;){
        for (const val in moneySorted){
            const valInDrawer = moneyLeft[val][1]
            const valKey = moneyLeft[val][0]
            const changeLeftToReturn = (changeToReturn - changeValue).toFixed(2)

            if (valueDetails[valKey] <= changeLeftToReturn && valInDrawer>0){
                changeValue += valueDetails[valKey];
                const index = change.findIndex(value => value[0] === valKey);
                index === -1 ? change.push([valKey, valueDetails[valKey]]) : change[index][1] += valueDetails[valKey]
                moneyLeft[val][1] -= valueDetails[valKey]

                break
            }
            if (moneyLeft[val][0] === "END"){
                return {status:responseStatus[1],change:[]}
            }
        }
    }
    console.log({totalCashInDrawer,totalCashLeftInDrawer, changeToReturn, change, changeValue, moneyLeft})
    return {status: responseStatus[3],change};
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))