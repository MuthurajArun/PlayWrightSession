let value = "chrome "
let firstch = value.charAt(0)
let lastch  = value.charAt(value.length-1)
let pos = value.indexOf(`o`)
console.log(`first ${firstch}, last ${lastch}, postion of o : ${pos}`)
let test = value.split("")
console.log(test)
console.log(test[2])
console.log(value.slice(0,2))
