// 接口可以用来约束, 对象、函数、类的结构、类型, 代码协作的契约必循遵守不可改变
/**
 * readonly 只读的
 */
interface List {
  readonly id: number;
  name: string;
  // [x: string]: any;
  age?: number;
}
interface Result {
  data: List[];
}
function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name);
    if (value.age) {
      console.log(value.age);
    }
    // value.id++; // 无法分配到 "id" ，因为它是只读属性
  });
}
let result = {
  data: [
    { id: 1, name: "A", sex: "男" },
    { id: 2, name: "B" },
  ],
};
render(result);
render({
  data: [
    { id: 1, name: "A", sex: "男" },
    { id: 2, name: "B" },
  ],
} as Result);
render(<Result>{
  data: [
    { id: 1, name: "A", sex: "男" },
    { id: 2, name: "B", age: 10 },
  ],
});

interface StringArray {
  [index: number]: string;
}
let chars: StringArray = ["hello", "world" /* 3 */];

interface Names {
  [x: string]: string;
  // y: number;
  [z: number]: string;
}
