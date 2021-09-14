// 1. array destructing

const numbers = [42, 44];

// const x = numbers[0];

// const y = numbers[1];

// destructing array
const [x, y] = numbers;
// console.log(x, y);
function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

console.log(boxify(12, 14));
