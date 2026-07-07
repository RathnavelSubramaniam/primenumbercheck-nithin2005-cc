/**
 * Checks if a given number is prime.
 * 
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
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
    console.log("prime number");
} else {
    console.log("not prime number");
}

module.exports = isPrime;
