var fileDistDir = '/平均分-康辉-微信读书.html'
var ary = fileDistDir.split('/')[1].split('.html')[0].split('-')
var bookName = ary[0]
var author = ary[1]
console.log(ary)
console.log(bookName)
console.log(author)

var fileDistDir = '/平均分-康辉-微信读书_files/t6_28070306.jpg'
var dirName = fileDistDir.split('/')[1]
var imgFile = fileDistDir.replace(dirName, 'img')
console.log('imgFile:'+imgFile)

