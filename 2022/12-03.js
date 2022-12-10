// day 3
const packOfGifts = ["a", "b", "c"];
const reindeers = ["d", "e"];
const res = distributeGifts(packOfGifts, reindeers);
console.log(res);

function distributeGifts(packOfGifts, reindeers) {
  let weight = 0;
  packOfGifts.forEach((gift) => {
    weight += gift.length;
  });
  let limit = 0;
  reindeers.forEach((animal) => {
    limit += animal.length * 2;
  });
  const carryLimit = Math.floor(limit / weight);

  return carryLimit;
}
