/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let cheapestPrice = prices[0];
  let profit = 0;
  for (let index = 0; index < prices.length; index++) {
    if (prices[index] < cheapestPrice) cheapestPrice = prices[index];
    else if (prices[index] - cheapestPrice > profit) profit = prices[index] - cheapestPrice;
  }
  return profit;
};

const prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
