// 统计一个字符串每一个字母出现的次数
const str = 'abcdefgaddd';
let json = {};

for (let i = 0; i < str.length; i++) {
  json[str[i]] = (json[str[i]] + 1) || 1;
}
console.log(JSON.stringify(json));