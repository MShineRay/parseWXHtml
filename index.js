var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');
console.log('being...')
/**
 * parseFile
 * @type {string}
 *
 */

/**
 * 实现思路
 * 1、遍历src下的所有文件并解析,找到src/*.html, 解析其文件名，在当前目录找到其对应的子目录（资源文件）
 * 3、获取html内容（id为js_content)的内容，获取对应子目录（资源文件）下所有的图片
 * 4、将内容追加到html模版里，并写到dist下
 * 5、拷贝对应的资源文件至dist下
 * 6、clean 删除 src下已经处理过的源文件及其依赖的资源文件
 * @type {string}
 */
var filePath = path.resolve(__dirname + '/data');

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function readFiles(fileOrDirPath,{filename=''}={}) {
  if (fileOrDirPath) {
    var stat = fs.lstatSync(fileOrDirPath);
    var isDir = stat.isDirectory();// true || false 判断是不是文件夹
    var isFile = stat.isFile();// true || false 判断是不是文件夹
    if (isDir) {
      //根据文件路径读取文件，返回文件列表
      fs.readdir(fileOrDirPath, function (err, files) {
        if (err) {
          console.warn(err)
        } else {
          //遍历读取到的文件列表
          console.log('files:', files)
          files.forEach(function (filename) {
            //获取当前文件的绝对路径
            console.log('filename:', filename)
            console.log('fileDirPath:', fileOrDirPath)
            var filedir = path.join(fileOrDirPath, filename);
            readFiles(filedir,{fileOrDirPath, filename});//递归，如果是文件夹，就继续遍历该文件夹下面的文件
          });
        }
      });
    } else if (isFile) {
      if (isFile) {
        console.log("fileOrDirPath:", fileOrDirPath);
        // fs.readFile(filePath, 'utf8', function (err, files) {
        //   console.log("files:",files)
        //   var $ = cheerio.load(filePath)
        //   $("[style='display:none;']").remove()
        //   // $("[data-id='heading-0']").remove()// cheerio未实现根据data-id属性的查找dom
        //   $("section[data-role='outer']").remove()
        //   var js_content = $('#js_content').html()
        //   var newHtml = `<!DOCTYPE html>
        //   <html lang="en">
        //   <head>
        //       <meta charset="UTF-8">
        //       <title>Title</title>
        //   </head>
        //   <body>
        //   ${js_content}
        //   </body>
        //   </html>`
        //   // fs.writeFile('./dist/Vue高版本中一些新特性的使用.html',
        //   //   newHtml, 'utf8', function (err) {
        //   //     if (err) return console.log(err);
        //   //   });
        //
        // })
      }
    }
  }

}

readFiles(filePath)
//readdir方法读取文件名
//readFile方法读取文件内容
//writeFile改写文件内容
// fs.readdir(filePath, 'utf8', function (err, data) {
//   data.forEach(function (item, index) {
//     console.log(item)
//     var stat = fs.lstatSync(item);
//     var isDir = stat.isDirectory();// true || false 判断是不是文件夹
//     if (isDir)
//       fs.readFile('./dist/' + item, 'utf8', function (err, files) {
//         console.log(files)
//         // var result = files.replace(/要替换的内容/g, '替换后的内容');
//         //
//         // fs.writeFile('./js/'+item, result, 'utf8', function (err) {
//         //     if (err) return console.log(err);
//         // });
//
//         //     var $ = cheerio.load(data)
//         //     $("[style='display:none;']").remove()
//         //     // $("[data-id='heading-0']").remove()// cheerio未实现根据data-id属性的查找dom
//         //     $("section[data-role='outer']").remove()
//         //     var js_content = $('#js_content').html()
//         //     var newHtml = `<!DOCTYPE html>
//         // <html lang="en">
//         // <head>
//         //     <meta charset="UTF-8">
//         //     <title>Title</title>
//         // </head>
//         // <body>
//         // ${js_content}
//         // </body>
//         // </html>`
//         //     //
//         //
//         //     // console.log("$", $('#page-content').html())
//         //     // console.log(  $pageContent.html()  )
//         //     fs.writeFile('./dist/Vue高版本中一些新特性的使用.html',
//         //         newHtml, 'utf8', function (err) {
//         //             if (err) return console.log(err);
//         //         });
//
//       })
//   });
//
// });

// var url = 'https://mp.weixin.qq.com/s/OL9AXTl7XaEsUicizYkWPw';
// http.get(url, result => {
//   console.log(result)
//     result.setEncoding('utf-8');
//     var resChunk = '';
//     result.on('data', chunk => {
//         resChunk += chunk;
//     });
//     result.on('end', () => {
//         var $ = cheerio.load(resChunk);
//         // $('img').each((index, res) => {
//         //     // 对img标签进行处理
//         //     if(res.attribs['data-src']){
//         //         var src = res.attribs['data-src'];
//         //         var srcArr = src.split('/');
//         //         var fileType = srcArr[srcArr.length - 1].split('=')[1];
//         //         var fileName = srcArr[srcArr.length - 2] + '.' + fileType;
//         //         // request.head(src,function(err,res,body){
//         //         //     if(err){
//         //         //         console.log(err);
//         //         //     }
//         //         // });
//         //         // 写入图片
//         //         request(src).pipe(fs.createWriteStream('./data/image/' + fileName));
//         //         // 把原路径改为本地路径
//         //         res.attribs['data-src'] = './images/' + fileName;
//         //         res.attribs.src = './image/' + fileName
//         //     }
//         // });
//         // $('link').each((index, res) => {
//             // 对link标签进行处理
//         //     if(res.attribs.href){
//         //         res.attribs.href = 'https:' + res.attribs.href
//         //     }
//         // });
//         // 暂时还没想好怎么处理script
//         // $('script').each((index, res) => {
//         //
//         // });
//         // 写入文件
//         fs.appendFile('./data/index.html', $.html(), 'utf-8', err => {
//             if(err){
//                 console.log(err)
//             }
//         });
//     })
// });