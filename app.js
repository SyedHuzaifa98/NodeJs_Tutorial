const { readFile,writeFile } = require('fs')

readFile('./content/first.txt','utf-8',(error,result) => {
if(error){
    console.log(error)
}
console.log(result)
})