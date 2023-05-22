const array = Array.from({ length: 999 }, (_, index) => index + 1);
const sum = array.reduce((accumulator, currentValue) => (currentValue % 3 === 0 || currentValue % 5 === 0) ? accumulator + currentValue : accumulator, 0);
console.log(sum); 
