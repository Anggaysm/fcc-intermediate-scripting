function uniteUnique(...arr) {
    return Array.from(new Set(arr.flat()));
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  //[1, 3, 2, 5, 4]
  uniteUnique([1, 2, 3], [5, 2, 1])
  //[1, 2, 3, 5]
  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
  //[1, 2, 3, 5, 4, 6, 7, 8]