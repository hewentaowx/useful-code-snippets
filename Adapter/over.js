/**
 * over 同一函数调用多个函数
 * @param { Object }
 * @return { Object }
 */

const over = (...fns) => (...args)=> fns.map(fn => fn.apply(null, args));
const minMax = over(Math.min, Math.max);
minMax(1, 2, 3, 4, 5);