
// **********    Sync (start)**********

// below line is doing that its importing only readFileSync and writeFileSync function from fs module
// instead of importing all function its importing 2
// { readFileSync, writeFileSync }:

// This is object destructuring. 
// Instead of importing the entire fs module, 
// you're directly extracting and importing only 
// the functions readFileSync and writeFileSync from the fs module.
// This approach makes the code cleaner and reduces the need to 
// reference the whole module, like fs.readFileSync() or fs.writeFileSync(), 
// allowing you to call these functions directly.

const { readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf-8') // default one is utf-8
const second = readFileSync('./content/second.txt','utf-8') // if we not provide utf-8 then it return raw buffer data

//console.log(first) // this will print message in first.txt


// if file not exist then it will create else not , it overwrite data
// {flag:'a'} is optional if not provide then it overwrite if provide then append in existing data
writeFileSync("./content/result-sync.txt",`Hello This is result file and First content: ${first}
    Second content: ${second}`,{flag:'a'})


// **********    Sync (end)  **********

