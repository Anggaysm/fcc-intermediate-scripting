//Smallest Common Multiple
function kpk(a, b){
    return (a / fpb(a, b)) *b
}

function fpb(a, b){
    return b == 0 ? a : fpb(b, a % b)
}


function smallestCommons(arr) {
    let mini = Math.min(...arr)
    let maxi = Math.max(...arr)

    for(let i = mini; i <= maxi; i++){
        mini = kpk(i, mini)
    }
    return mini;
  }
  
  
  console.log(smallestCommons([1,5]));