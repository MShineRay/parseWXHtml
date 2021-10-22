const pinyin = require('pinyin')
let poetryNameCn = '平均分'
let pinyinNames = pinyin(poetryNameCn, {
  style: pinyin.STYLE_NORMAL,
});
// 数组扁平化
console.log(poetryNameCn, pinyinNames.join(""));
