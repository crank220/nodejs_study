const fs = require('fs')
fs.writeFile('./first.txt', '222', (err) => {
  if (err) return console.log('写入文件失败！' + err.message)
  console.log('写入文件成功')
})