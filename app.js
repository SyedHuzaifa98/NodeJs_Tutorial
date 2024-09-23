//manual approach create package.json in root
// npm init (step by step, press enter to skip)
// npm init -y (default)

const _ = require('lodash')

const items = [1,2,[3,4,[5,6,7,8,9.10,10]],[34,45]]
const itemsNew = _.flattenDeep(items) // this flatten method create linear array convert
console.log(itemsNew)
console.log("hel")