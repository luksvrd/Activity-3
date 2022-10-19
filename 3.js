// TODO: Create some fake shopping cart data
// item, price, quantity
// See if you can multiply the price by the quantity
// Use template literals to print out something like, Your total is
const item = "chips";
const price = 2;
const quantity = 3;

console.log(typeof item);
console.log(typeof price);
console.log(typeof quantity);
const total = price * quantity;

const message = `You bought ${quantity} ${item}s for $${total}`;
console.log(message);
console.log(total);

const num3 = 10;
const num4 = 2;
const num5 = 5;

// Remander operator: tells you what the remainder of the division operation
console.log(num3 % num4); // 0
console.log(num5 % num4); // 1

// TODO: If the total is over $20, log that they get a 10% discount
// Else, log that they get a 5% discount
if (total > 20) {
  console.log("You get a 10% discount");
} else {
  console.log("You get a 5% discount");
}
