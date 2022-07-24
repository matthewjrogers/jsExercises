function prime_sieve(upper_limit){
    //create an array
    let ints = new Array();
    // initialize array with all ints from 2 (smallest prime) to upper_limit
    for (let int = 2; int <= upper_limit; int++){
        ints.push(int);
    }

    // for each number between 2 and upper limit
    // If the number is <= sqrt(upper_limit) and it is prime, mark all of its multiples as not prime (0, in this case)
    // If the number is <= sqrt(upper_limit) and it is not prime, next
    // Example: upper limit is 10
    // IDX 1 : value 2 (prime). 2**2 == 4, so continue. Set 4, 6, 8, and 10 to 0
    // IDX 2 : value 3 (prime). 3**2 is 9, so continue. Set 6 and 9 to 0
    // IDX 3 : value 0 Not prime, so skip
    // IDX 4 : value 5 (prime) 5**2 is 25, so exit loop
    // End array is [2,3,0,5,0,7,0,0,0]
    // Filter array for non-zero values
    
    for (let idx_outer = 0; idx_outer <= Math.sqrt(upper_limit) - 2; idx_outer++){
        
        // any number that is <= to N (upper_limit) and is a multiple of a number > sqrt(N) must also have a factor <= sqrt(N)
        // thus, by the time we reach sqrt(N), all non-primes will have been flagged

        // In other words, if a number smaller than N has a factor larger than the square root of N, 
        // it must also have a factor less than the square root of N (which we will have already looked at and all multiples thereof)
        
        // In short, we can skip a bunch of numbers

            // we also don't need to check from the beginning of the array -- only from the current index + 1
            for (let idx_inner = idx_outer + 1; idx_inner <= ints.length; idx_inner++){
                if (ints[idx_outer] != 0){
                    if (ints[idx_inner] !== 0 && ints[idx_inner] % ints[idx_outer] === 0){
                        ints[idx_inner] = 0;
                    }
                }
            }
    }
    // return array where there are non-zero values
    return ints.filter(num => num > 0)
}

//console.log(prime_sieve(100000))
const {
    performance,
    PerformanceObserver
  } = require('perf_hooks');

  const wrapped_sieve_fn = performance.timerify(prime_sieve);

const obs = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0].duration);
  obs.disconnect();
});
obs.observe({ entryTypes: ['function'] });

// A performance timeline entry will be created
//wrapped_sieve_fn(1000000);
//wrapped_sieve_fn(100);
let primes = prime_sieve(200000)
console.log(primes)
console.log(primes.length)