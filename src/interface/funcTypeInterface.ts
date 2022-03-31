// 函数类型接口
let add1 = (x: number, y: number): number => {
  return x + y;
};

let add2: (x: number, y: number) => number;

type add3 = (x: number, y: number) => number;

interface add4 {
  (x: number, y: number): number;
}

// add(1, 2, 3)                      必选参数不能位于可选参数后。
function add5(x: number, y?: number /* z: number */): number {
  return y ? x + y : x;
}
add5(1);

function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q;
}
console.log(add6(1, undefined, 3));

function add7(x: number, ...args: number[]) {
  return x + args.reduce((pre, cur) => pre + cur);
}
console.log(add7(1, 2, 3, 4, 5));

// 函数的重载
function add8(...args: number[]): number;
function add8(...args: string[]): string;
function add8(...args: any[]): any {
  let first = args[0];
  if (typeof first === "string") {
    return args.join("");
  }
  if (typeof first === "number") {
    return args.reduce((pre, cur) => pre + cur);
  }
}
console.log(add8(1, 2, 3));
console.log(add8("a", "b", "c"));
