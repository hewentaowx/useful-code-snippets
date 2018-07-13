/**
 * 数组去重
 */
const arrayUnique = arr => arr.filter((item, index) => arr.indexOf(item) === index);
console.log(arrayUnique([1,1,2,3,4,5,5]));

/**
 * 从数组中取出某一对象的属性
 */
let arr = [
	{
		id: 1,
		name: 'marry'
	},
	{
		id: 2,
		name: 'green'
	},
	{
		id: 3,
		name: 'dary'
	}
];

let result = arr.reduce((r, c) => [...r, c.id], []);
console.log(result);