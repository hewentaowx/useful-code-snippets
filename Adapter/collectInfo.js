/**
 * collectInfo 将接受数组的函数更改为可变参数函数
 * @param { array }
 * @return { Object } 返回一个闭包
 */

const collectInfo = fn => (...args) => fn(args);
const Pall = collectInfo(Promise.all.bind(Promise));
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3));
Pall(p1, p2, p3).then(console.log);