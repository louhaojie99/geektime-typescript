/**
 * 举例场景:
 * 问题:
 *   1) 可读性差：很难记住数字的含义
 *   2) 可维护差：硬编码, 牵一发动全身
 */
function initByRole(role: number) {
  if (role === 1 || role === 2) {
    // do sth
  } else if (role === 3 || role === 4) {
    // do sth
  } else if (role === 5) {
    // do sth
  } else {
    // do sth
  }
}

// 枚举：一组有名字的常量集合
/**
 * 例如：电话簿
 *   张三: 15896727763
 *   李四：15896727777
 */

// 数字枚举
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest,
}
console.log(Role.Reporter);
console.log(Role);
// Role.Reporter = 2; // 无法分配到 "Reporter" ，因为它是只读属性。

// 字符串枚举
enum Message {
  Success = "恭喜你, 成功了",
  Fail = "抱歉, 失败了",
}

// 异构枚举
enum Answer {
  N,
  Y = "Yes",
}

// 枚举成员
enum Char {
  // const
  a,
  b = Char.a,
  c = 1 + 3,
  // computed
  d = Math.random(),
  e = "123".length,
}

// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar,
}
let month = [Month.Jan, Month.Feb, Month.Mar];
console.log(month);

// 枚举类型
enum E {
  a,
  b,
}
enum F {
  a = 0,
  b = 1,
}
enum G {
  a = "apple",
  b = "apid",
}

let e: E = 3;
let f: F = 3;

let e1: E.a;
let e2: E.b;
// e1 == e2; // 永远不可进行比较
let e3: E.a;
e1 == e3; // 相同成员枚举类型, 可以进行比较

let g1: G = G.b;
let g2: G = G.a;

/**
 * 举例场景优化
 */
// 数字枚举
enum Roles {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest,
}
function initByRoleTs(role: number) {
  if (role === Roles.Reporter || role === Roles.Developer) {
    // do sth
  } else if (role === Roles.Maintainer || role === Roles.Owner) {
    // do sth
  } else if (role === Roles.Guest) {
    // do sth
  } else {
    // do sth
  }
}
