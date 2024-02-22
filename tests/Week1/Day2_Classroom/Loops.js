let Input = 10

function oddNumber(val){
    let result = null
    for(let i=1;i<=val;i++){
        if(i%2 != 0)
        result = result + i +","
    }

    return result.slice(0,-1)   
}

console.log(oddNumber(Input))