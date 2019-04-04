const path = require('path')
const fs = require('fs')
const result = path.join(':c/', 'b', 'c', 'd', 'e', '..', 'f/g', '..', '..')
console.log(result)
fs.readFile(path.join(__dirname, 'join.js'), 'utf-8', (err, dataStr) =>{
  if (err) return console.log(err)
  console.log(dataStr)
})