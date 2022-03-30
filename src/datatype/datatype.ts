// 原始类型
let bool: boolean = true;
let num: number = 123;
let str: string = "hello typescript!";

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number | string> = [1, 2, 3, "4"]; // Array<number | string> 泛型接口 和 联合类型

// 元组
let tuple: [number, string] = [0, "1"];
tuple.push(2);
// tuple[2]; // wrning 在索引 "2" 处没有元素

// 函数
let add = (x: number, y: number): number => x + y;
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;

// 对象
let obj1: object = { x: 1, y: 2 };
let obj2: { x: number; y: number } = { x: 1, y: 2 };

// Symbol
let s1: symbol = Symbol();
let s2: symbol = Symbol();
console.log(s1 === s2); // false

// undefined, null
let un: undefined = undefined;
let nu: null = null;
num = undefined; // 在ts中文档中 undefined null 属于基本数据类型的子类型
num = null;

// void, 代表函数没有返回值的类型
let noReturn = () => {
  void 0;
}; // 在js中函数返回undefined  void 0

// any 不建议
let x;
x = 1;
x = "hello";
x = false;
x = [];
x = {};

// never, 永远不会有返回值的类型
let error = () => {
  throw new Error("err");
};
let endless = () => {
  while (true) {}
};
