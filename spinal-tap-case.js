function spinalCase(str) {
    return str.replace(/([A-Z])/g , ' $1')
    .trim()
    .split(/[\W_]/)
    .filter(el => el !== '')
    .map(el => el.toLowerCase())
    .join('-')
  }
  
  console.log(spinalCase('This Is Spinal Tap'));