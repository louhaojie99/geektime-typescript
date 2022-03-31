/**
 * 类的修饰符：
 *  public      公共的
 *  private     私有的
 *  protected   受保护成员
 *  readonly    只读属性
 *  static      静态的
 */

class Dog {
  constructor(name: string) {
    this.name = name;
  }
  public name: string = "Dog";
  run() {}
  private pri() {}
  protected pro() {}
  readonly age: number = 20;
  static food: string = "bones";
}
console.log(Dog.prototype);
let dog = new Dog("wangwang");
console.log(dog);
// dog.pri(); // 属性“pri”为私有属性，只能在类“Dog”中访问。
// dog.pro(); // 属性“pro”受保护，只能在类“Dog”及其子类中访问。
console.log(Dog.food);
// console.log(dog.food); 静态成员基类访问不了

// 类的继承
class Husky extends Dog {
  constructor(name: string, color: string) {
    // super 代表父类的实例
    super(name);
    this.color = color;
    // this.pri(); // 属性“pri”为私有属性，只能在类“Dog”中访问。
    this.pro();
  }
  color: string;
}
