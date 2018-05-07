/**
 * overArgs 参数转换器
 * @param { function }
 * @return { Object }
 */

const overArgs = (fn, transforms) => (...args) => fn(...args.map((val, i) => transforms[i](val)));
let square = a => a * a;
let doubled = b => 2 * b;
var func = overArgs(
  function(x, y) {
    return [x, y];
  },
  [square, doubled]
);
func(9, 3);