//cara pertama
function sumAll(arr){
    arr.sort((a,b) => a - b)
    let total = 0;
    for (let i = arr[0]; i <= arr[1]; i++){
        total += i
    }
    return total
}
console.log(sumAll([5,1]))

//cara kedua 
function sumAll2(arr2){
    let total2 = 0;
    for(let j = Math.min(...arr2); j <= Math.max(...arr2); j++){
        total2 += j
    }
    return total2
}

console.log(sumAll2([1, 3]))