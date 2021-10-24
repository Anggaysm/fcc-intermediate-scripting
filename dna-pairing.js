function pairElement(str) {
    const strArr = str.split('')
    let result = []
    strArr.forEach(el => {
        if(el === 'C'){
            result.push(['C', 'G'])
        }else if( el === 'G'){
            result.push(['G', 'C'])
            
        }else if(el === 'A'){
            result.push(['A', 'T'])
        }else if(el === 'T'){
            result.push(['T', 'A'])
        }
    })
    return result
  }
  

  console.log(pairElement("GCG"));
  console.log(pairElement("ATCGA"))
  //[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]