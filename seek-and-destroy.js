function destroyer(arr, ...destroyer) {
     return arr.filter(el=> !destroyer.includes(el))
  }
  
 console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));