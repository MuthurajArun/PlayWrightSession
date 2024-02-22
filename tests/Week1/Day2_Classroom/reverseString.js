let myName = "mutheswari"

function reverseName(givenName){
let splitName = givenName.split("")
let reverseName = ""
for(let i=givenName.length-1;i>=0;i--){
    reverseName = reverseName+splitName[i]
}
return reverseName
}
console.log(`Reversed name is `+reverseName(myName))