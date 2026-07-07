/**
 * Checks if a given number is prime.
 * 
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
// const n=parseInt();

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
if (isprime(n)) {
    console.log("Prime number");
} else {
    console.log("not P Mrime number");
}

module.exports = isPrime;
