//cara pertama
function diffArray(arr1, arr2) {
    const filter1 = arr1.filter((el) => !arr2.includes(el))
    const filter2 = arr2.filter((el) => !arr1.includes(el))
    return [...filter1, ...filter2]
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));



  //cara kedua
function bedaArr(ary1, ary2){
  return ary1.concat(ary2).filter((item) => !ary1.includes(item) || !ary2.includes(item))
}
console.log(bedaArr(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
