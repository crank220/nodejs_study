const fs = require('fs')
fs.stat(__dirname + '/first.md', (err, stats) => {
  console.log(stats)
  if (err) return console.log('读取文件信息失败' + err)
  console.log('读取文件信息成功')
  console.log('是否为文件' + stats.isFile())
  console.log('是否为目录' + stats.isDirectory())
})