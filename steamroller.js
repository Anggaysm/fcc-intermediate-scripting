function steamrollArray(arr, result = []) {
      for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
          steamrollArray(arr[i], result)
        }else{
          result.push(arr[i])
        }
      }
      return result;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));
  //[1, 2, 3, 4]
  steamrollArray([[["a"]], [["b"]]])
  //["a", "b"]