/**
 * flip 翻转函数参数
 * @param { function } 接受函数为参数然后将函数的第一个参数作为最后一个参数
 * @return { Object } 返回一个包含可变参数输入的闭包并在应用其余参数之前
 * 将最后一个参数拼接成第一个参数
 */

const filp = fn => (first, ...rest) => fn(...rest, first);
let a = { name: 'John'};
let b = {};
const mergeFrom = filp(Object.assign);
let mergePerson = mergeFrom.bind(null, a);
mergePerson(b);
b = {};
Object.assign(b, a);