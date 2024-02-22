let browserName = []
browserName = ['Chrome','safari','opera']
browserName.push('edge','chormium')
console.log(browserName)
browserName.pop()
console.log(browserName)
browserName.unshift('edge')
console.log(browserName)
browserName.splice(1,2)
console.log(browserName.sort())
browserName.push('edge','chormium')
let b=[...browserName,'we','ew','we']
let test = browserName+b
console.log(b)
browserName.push('edge1','chormium1','test')
console.log(browserName)
console.log(b)

let mixedArray = [1,2,3,[1,23,45],'test']
console.log(mixedArray[3].length)
console.log(mixedArray[3][1])