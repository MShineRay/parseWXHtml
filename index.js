var http = require('https');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
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