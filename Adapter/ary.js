/**
 * ary 指定函数参数个数 最多接受n个参数忽略多余参数
 * @param { function } fn 获取调用Array.slice函数返回的参数
 * @param { number } n 参入的n个参数
 * @return { array }
 */

const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
const firstTwoMax = ary(Math.max, 2);
let data = [[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x));
console.log(data);
