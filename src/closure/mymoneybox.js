// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox(initialCoins) {
  let saveCoins = initialCoins;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox(10);
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

const myMoneyBox2 = moneyBox(100);
myMoneyBox2(40);
myMoneyBox2(60);
myMoneyBox2(10);