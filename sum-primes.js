//Sum All Primes
function sumPrimes(num) {
    let arrPrimes = [];
    for (let i = 1; i <= num; i++){
        let prime = true;
        for (let j = 2; j < i; j++){
            if (i % j == 0){
                prime = false
                break
            }
        }
        if ( i > 1 && prime){
            arrPrimes.push(i)
        }
    }
    return arrPrimes.reduce((acc, curr) => acc + curr)
  }
  
  console.log(sumPrimes(10));
  //17

  console.log(sumPrimes(977))