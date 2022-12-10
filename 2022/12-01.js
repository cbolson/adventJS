const wrapped = wrapping(gifts);

function wrapping(gifts) {
  if (!gifts) return;

  const wrapped = [];
  const paper = "*";
  gifts.forEach((gift) => {
    const l = gift.length + 2;
    let present = `${paper.repeat(l)}\n`;
    present += `${paper}${gift}${paper}\n`;
    present += paper.repeat(l);

    wrapped.push(present);
  });
  return wrapped;
}
console.log(wrapped);
