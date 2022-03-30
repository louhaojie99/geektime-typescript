// 原始类型
var bool = true;
var num = 123;
var str = "hello typescript!";
// 数组
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3, "4"]; // Array<number | string> 泛型接口 和 联合类型
// 元组
var tuple = [0, "1"];
tuple.push(2);
console.log(tuple);
