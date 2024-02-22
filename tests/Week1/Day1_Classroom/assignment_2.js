
function launchBrowser(browser){
    if(browser=="Chrome"){
        console.log("The browser is : ",browser)
    }
    else
        console.log("In else block and the browser is : ",browser)
}

function runTests(testType){
    switch(testType){
        case "Smoke" :
            console.log("The test type is : Smoke")
            break;
        case "Sanity" :
            console.log("The test type is : Sanity")
            break;
        case "Regression" :
            console.log("The test type is : Regression")
            break;
        default :
            console.log("Default test type is : Smoke")
            break;
    }

}

console.log("Opening chrome browser ")
launchBrowser("Chrome")
console.log("Launching other browser ")
launchBrowser("Opera")

console.log("Running smoke test")
runTests("Smoke")
console.log("Running Sanity test")
runTests("Sanity")
console.log("Running Regression test")
runTests("Regression")
console.log("Running Default test")
runTests("Default")