const path = require('path')
console.log(path.basename(path.join(__dirname, 'basename.js'), '.js'))
console.log(path.basename(path.join(__dirname, 'basename.js')))