const fs = require('fs')
fs.copyFile(__dirname + '/first.md', __dirname + '/copy.md', (err) => {
  if (err) return console.log('拷贝失败' + err)
  console.log('拷贝成功了')
})