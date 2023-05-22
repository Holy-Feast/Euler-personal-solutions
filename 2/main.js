let next = 2
let prev = 1
let sum = 0
while (next < 4000000) {
    let curr = next
    if (next % 2 === 0) {
        sum += next
    }
    next = next + prev
    prev = curr

}
console.log(sum); 