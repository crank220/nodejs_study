const fs = require('fs')
fs.readFile(__dirname + '/成绩.txt', 'utf-8', (err, dataStr) => {
  if (err) return console.log('读取文件失败')
  console.log('读取文件成功。' + dataStr)
  console.log(dataStr.split(' '))
  let cj = dataStr.split(' ')
  for (var i = cj.length - 1; i >= 0; i--) {
    if (cj[i] === '') {
      cj.splice(i, 1)
    } else {
      cj[i] = cj[i].replace('=', ':')
    }
  }
  // for (let j = 0; j < cj.length; j++){
  //   fs.appendFile(__dirname + '/成绩new.txt', cj[j] + '\n', (err) => {
  //     if (err) return console.log('追加数据失败！' + err)
  //     console.log('追加数据成功')
  //   })
  // }
  // fs.readFile(__dirname + '/成绩new.txt', 'utf-8', (err, data) => {
  //   if (err) return console.log('读取文件失败')
  //   console.log('读取文件成功。\n' + data)
  // })
  fs.writeFile(__dirname + '/成绩new.txt', cj.join('\n'), (err) => {
    if (err) return console.log('追加数据失败！' + err)
    console.log('追加数据成功')
  })
})