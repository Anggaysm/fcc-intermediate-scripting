function addTogether(...args) {
    for(let i = 0; i < args.length; i++){
        if(typeof args[i] != 'number'){
            return undefined
        }
    }
    if(args.length == 1){
        return(angka2) =>{
            if(typeof angka2 != 'number'){
                return undefined
            }
            return args[0] + angka2
        }
    }
    return args[0]+args[1]
  }
  
  console.log(addTogether(2, 3));
  //5
  console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"))
  //undefined
  console.log(addTogether(5)(7))
  //12