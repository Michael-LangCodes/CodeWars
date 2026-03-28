// Let us begin with an example:

// A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

// He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

// Can you help him?

//My Solution
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  let i = 0;
  let savings = 0;
  while (savings + startPriceOld < startPriceNew){
    savings += savingperMonth
    startPriceOld *= (1-(percentLossByMonth/100))
    startPriceNew *= (1-(percentLossByMonth/100))
    console.log(startPriceOld)
    console.log(startPriceNew)
    if (i%2===0){
      percentLossByMonth += 0.5
    }
    i++
  }
    return [i, Math.round(startPriceOld + savings - startPriceNew)];
}