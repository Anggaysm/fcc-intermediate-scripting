function translatePigLatin(str) {
    if(str.match(/^[aiueo]/)){
        return str + 'way'
    }else{
        return str.replace(/([^aiueo]+)(\w*)/, '$2$1ay')
    }
  }
  
  console.log(translatePigLatin("consonant"));