// --- reduce ---
// Return updated accumulator ---
// array.reduce((accumulator, currentValue) => {
// }, initialValue);

const cart = [5, 15, 25];
const total = cart.reduce((acc, cost) => acc + cost, 0);
const withTax = cart.map((cost) => cost * 1.2);

const products = [
  { name: "sports car" },
  { name: "laptop" },
  { name: "phone" },
];

products.map((product) => {
  product.price = 100;
});

console.log(products);

products.forEach((product) => {
  product.price = 200;
});

console.log(products);

// Using the third argument of callbackFn
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];

const averaged = numbers
  .filter((num) => num > 0)
  .map((num, idx, arr) => {
    const prev = arr[idx - 1];
    const next = arr[idx + 1];
    let count = 1;
    let total = num;
    if (prev !== undefined) {
      count++;
      total += prev;
    }

    if (next !== undefined) {
      count++;
      total += next;
    }

    const average = total / count;
    return Math.round(average * 100) / 100;
  });

console.log(averaged);

//
const matrix = Array(5)
  .fill("")
  .map(() => Array(5).fill("0"));

console.log(matrix);
