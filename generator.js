function* generatePrimes(limit) {
    // Helper function to check if a number is prime
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    // Generate prime numbers up to the limit
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            yield num;  // Use yield to return prime numbers one by one
        }
    }
}

// Create a generator for prime numbers up to 50
const primeGenerator = generatePrimes(50);

// Use a for...of loop to iterate over the generated primes
for (const prime of primeGenerator) {
    console.log(prime);
}
