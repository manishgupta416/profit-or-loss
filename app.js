const initialPrice = document.querySelector("#initial-price")
const noOfStocks = document.querySelector("#no-of-stocks")
const currentPrice = document.querySelector("#current-price")
const showOutput = document.querySelector(".output")
const checkBtn = document.querySelector("#check-btn")
const container = document.querySelector(".container")

checkBtn.addEventListener("click" , checkHandler)

function checkHandler () {
    const initialPriceOfStocks = Number(initialPrice.value)
    const stockQuantity = Number(noOfStocks.value)
    const currentStockPrice = Number(currentPrice.value)
    // console.log(initialPrice.value , noOfStocks.value , currentPrice.value)
    calculateProfitAndLoss(initialPriceOfStocks,stockQuantity,currentStockPrice)
}

function  calculateProfitAndLoss(initial, quantity , current) {
    if(initial && quantity && current){
        if(current > initial) {
            const profit = (current - initial) * quantity
            const profitPercentage = ((profit/initial) * 100).toFixed(2);
            showOutput.innerText = "Hey, You got profit of "+ profit +  " and the profit percentage is " + profitPercentage +"%"
            showOutput.style.color = '#06e933'
            //console.log("WoW You get profit of " + profitPercentage)
    
        } else if (current < initial) {
            const loss = current - initial 
            const lossPercentage = ((loss/initial) * 100).toFixed(2);
            showOutput.innerText = "Oh! You got loss of "  +  loss + " and the loss percentage is " + lossPercentage+"%"
            //console.log("Oh! You got loss of " + lossPercentage)
            showOutput.style.color = 'red'
    
        } else{
            showOutput.innerText =" No Pain No Gain and No Gain No Pain"
            //console.log("No Gain No Pain")
        }

    } else{
        showOutput.innerText = "Please input all fields"

    }
}

