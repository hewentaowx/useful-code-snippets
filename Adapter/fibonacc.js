/**
 * 非递归
 * @param {int} n 
 */
let fibonacc = (n) => {
	let fibo = [0, 1];
	if (n <= 2) return 1;
	for(let i = 2; i <= n; i++) {
		fibo[i] = fibo[i-1] + fibo[i-2];
	}
	return fibo[n];
};

let result1 = fibonacc(12);
console.log(result1);

/**
 * 递归版
 */
let fibonaccDi = (n) => {
	if (n <= 1) {
		return n;
	} else {
		return fibonaccDi(n-1) + fibonaccDi(n-2);
	}
};
console.log(fibonaccDi(12));