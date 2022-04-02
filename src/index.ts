import "./datatype/datatype.ts"; // 基本类型
import "./enum/enum.ts"; // 枚举
import "./oop/class.ts";
import "./oop/abstractClass";

const hello: string = "hello world!";
console.log(hello);

(document.getElementById("root") as HTMLElement).innerHTML = hello;
