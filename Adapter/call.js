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