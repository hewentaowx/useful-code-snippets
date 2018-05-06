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


/**
 * call 给定一个key和一个set给定上下文调用主要用于函数组合
 * @param { string } key 
 * @param { array } args
 * @return { array } 
 */

const call = (key, ...args) => context => context[key](...args);
Promise.resolve([1, 2, 3])
  .then(call('map', x => 2 * x))
  .then(console.log);

const map = call.bind(null, 'map');
Promise.resolve([1, 2, 3])
  .then(map(x => 2 * x))
  .then(console.log);

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