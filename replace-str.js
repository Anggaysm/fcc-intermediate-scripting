function myReplace(str, before, after) {
    if (before[0] !== before[0].toLowerCase()){
        after = after[0].toUpperCase() + after.slice(1)
        return str.replace(before, after)
    }else {
        return str.replace(before, after.toLowerCase())
    }
    
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
  console.log(myReplace("I think we should look up there", "up", "Down")); //I think we should look down there