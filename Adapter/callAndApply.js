/**
 * call和apply 是为了改变某个函数运行的上下文(context)而存在的
 * 换句话说是为了改变函数内部this的指向
 */

function fruits() {}

fruits.prototype = {
  color: 'red',
  say: function() {
    console.log('This color is ' + this.color);
  }
}

var apple = new fruits();
apple.say();

// 对象banana = {color：'yellow'} 不重新定义say方法就可以通过call和apply用apple的say方法
banana = {
  color: 'yellow'
}
apple.say.call(banana);
apple.say.apply(banana);

/**
 * apply和call的区别
 * 两者接收的参数不一样作用完全一样
 * call接收全部按顺序参数 apply则是把参数放在数组中
 */

var func = function(arg1, arg2) {};
func.call(this, arg1, arg2);
func.apply(this, [arg1, arg2]);

/**
 * 数组之间追加
 * @param { array }
 * @param { array }
 * @returns { array }
 */

var array1 = [12, 'a', {name: 'Marry'}, -201];
var array2 = ['Jack', 222];
Array.prototype.push.apply(array1, array2);

/**
 * 获取数组中的最大值和最小值
 * @param { array }
 * @return { number }
 */

var numbers = [2, 4, 8, 3, 1, -78];
var maxInNumbers = Math.max.apply(null, numbers);
var minInNumbers = Math.min.apply(null, numbers);
console.log(maxInNumbers);
console.log(minInNumbers);

/**
 * 验证对象是否是数组
 * @param { object }
 * @return { boolean }
 */

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

/**
 * 伪数组转换为真数组
 * @param { arguments }
 * @return { array }
 */

// var domNodes = Array.prototype.slice.call(document, getElementsByTagName('*'));

/**
 * bind 和 apply、call相似也是可以改变函数体内this的指向
 * bind()方法会创建一个新函数，称为绑定函数，调用这个绑定函数时，绑定函数会以创建它时传入bind()方法的
 * 第一个参数作为this，传入bind()犯法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数
 * 的参数来调用原函数
 */

var foo = {
  bar: 1,
  eventBind: function() {
    var _this = this;
    $('.someClass').on('click', function(event) {
      console.log(_this.bar);
    })
  }
}

var foo = {
  bar: 1,
  eventBind: function() {
    $('.someClass').on('click', function(event) {
      console.log(this.bar);
    }.bind(this));
  }
}

// example
var bar = function() {
  console.log(this.x);
}
var foo = {
  x: 3
}
bar(); // undefined
var func = bar.bind(foo);
func()

var obj = {
  color: 'red',
  say: function() {
    console.log(this.color);
  }
}

obj.say();
// bind强行改变了this
obj.say = obj.say.bind({color: 'yellow'});
obj.say();

// apply call bind比较
var obj = {
  x: 25
}
var foo = {
  getX: function() {
    return this.x;
  }
}

console.log(foo.getX.call(obj));
console.log(foo.getX.apply(obj));
console.log(foo.getX.bind(obj)());


// 总结:
// apply、call、bind三者都是用来改变函数的this对象的指向的
// apply、call、bind三者第一个参数都是this要指向的对象，也就是想指定的上下文
// apply、call、bind三者都可以利用后续参数传参
// bind返回的是函数，便于稍后调用，apply和call则是立即调用