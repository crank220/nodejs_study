const fs = require('fs')
fs.appendFile('./first.txt', 'ooo', (err) => {
  if (err) return console.log('追加数据失败！' + err)
  console.log('追加数据成功')
})