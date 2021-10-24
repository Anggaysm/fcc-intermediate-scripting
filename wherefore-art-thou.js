function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    collection.forEach(el =>{
        let countProps = 0
        let countEqualProps = 0
        for (let key in source){
            countProps++
            if(el[key] === source[key]){
                countEqualProps++
            }
        }
        if(countProps === countEqualProps){
            arr.push(el)
        }
    })
  
    // Only change code above this line
    return arr;
  }
  
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" },
                 { first: "Mercutio", last: null }, 
                 { first: "Tybalt", last: "Capulet" }], 
                 { last: "Capulet" }));