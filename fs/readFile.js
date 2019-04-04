const fs = require('fs')
fs.readFile('./first.md', (err, data) => {
  if (err) return console.log('读取文件失败！' + err)
  console.log('读取文件成功' + data)
})