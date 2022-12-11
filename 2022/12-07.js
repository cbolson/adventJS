const a1 = ["bike", "car", "bike", "bike"];
const a2 = ["car", "bike", "doll", "car"];
const a3 = ["bike", "pc", "pc"];

const gifts = getGiftsToRefill(a1, a2, a3);
console.table(gifts);

// I miss-read the instructions and came up with this function which returned an array of items where stock was <= 1 accross all stores
// function getGiftsToRefill(a1, a2, a3) {
//   // join the arrays together
//   const arr = a1.concat(a2, a3);

//   // get unique gifts - indexOf === lastIndexOf
//   const onlyOne = arr.filter((x, i, a) => a.indexOf(x) === a.lastIndexOf(x));
//   return onlyOne;
// }

function getGiftsToRefill(a1, a2, a3) {
  // create list of all gifst to check
  const possibleGifts = [...new Set([...a1, ...a2, ...a3])];

  const stockRequired = [];

  // check each gift
  possibleGifts.map((gift) => {
    //console.log(gift);
    let giftCount = 0;
    if (a1.includes(gift)) giftCount++;
    if (a2.includes(gift)) giftCount++;
    if (a3.includes(gift)) giftCount++;

    if (giftCount <= 1) {
      stockRequired.push(gift);
    }
  });

  return stockRequired;
}
