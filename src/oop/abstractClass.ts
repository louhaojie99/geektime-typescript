// 抽象类与多态
(() => {
  abstract class Animal {
    eat() {
      console.log("eat");
    }
    sleep() {}
  }
  // let animal = new Animal(); // 无法创建抽象类的实例

  class Dog extends Animal {
    constructor(name: string) {
      super();
      this.name = name;
    }
    name: string;
    run() {}
    sleep() {
      console.log("Dog sleep");
    }
  }
  let dog = new Dog("wangwang");
  dog.eat();

  class Cat extends Animal {
    sleep() {
      console.log("Cat sleep");
    }
  }
  let cat = new Cat();

  let animals: Animal[] = [dog, cat];
  animals.forEach((i) => {
    i.sleep();
  });

  class WorkFlow {
    step1() {
      return this;
    }
    step2() {
      return this;
    }
  }
  new WorkFlow().step1().step2();

  class Myflow extends WorkFlow {
    next() {
      return this;
    }
  }
  new Myflow().step1().step2().next();
})();
