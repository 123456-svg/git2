// var path = require("path")
// console.log(path.resolve('C:/Windows/System32/cmd.exe', "/aaa"))
// console.log(path.normalize('C:/Windows/System32/cmd.exe',"/aaa"))
// console.log(path.isAbsolute('/cmd.exe'))
// console.log(path.dirname('C:/Windows/System32/cmd.exe'))
// console.log(path.basename('C:/Windows/System32/cmd.exe',"/aaa"))
// console.log(path.extname('C:/Windows/System32/cmd.exe'))
// console.log(path.format({
//     root: 'C:/',
//     dir: 'C:/Windows/System32',
//     base: 'cmd.exe',
//     ext: '.exe',
//     name: 'cmd'
// }))
// console.log(path.parse('C:/Windows/System32/cmd.exe', "/aaa"))
// console.log(path.join("/aa","//b"))
console.log(path.relative('C:/Windows/System32/cmd.exe','C:/Windows/System32/1.txt'))