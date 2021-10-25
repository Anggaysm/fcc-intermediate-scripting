//Sum All Odd Fibonacci Numbers
function sumFibs(num) {
    let f0 = 0,
        f1 = 1,
        next,
        result = 0;
    for(let i = 1; i <= num; i++){
        if(f1 % 2 === 1 && f1<= num){
            result += f1
        }
        next = f0 + f1
        f0 = f1
        f1 = next
    }
    return result
  }
  
  console.log(sumFibs(1000));
  //1785
  sumFibs(4000000)
  //4613732