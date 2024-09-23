const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf-8', (error, result) => {
    if (error) {
        console.log(error)
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (error, result) => {
        if (error) {
            console.log(error)
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is content of first file: ${first} , 
            content of second file: ${second}`, (error, result) => {
            console.log(error)
        })
        console.log(result)
    })
})