/**
 * 顺序执行异步函数
 * 从左到右的执行异步函数
 * @param {function} 一元函数
 * @return  简单值或promise或定义为await返回的异步
 */
const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));

const sum = pipeAsyncFunctions(
    x => x + 1,
    x => new Promise(resolve => setTimeout(() => resolve(x+2), 1000)),
    x => x + 3,
    async x => (await x) + 4
);
(async () => {
    console.log(await sum(5));
})();