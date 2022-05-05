// 类型守卫 --- 控制多类型 type 收窄
// is、in、typeof、instanceof、字面量

/* ---------------- 类型谓词 is 配合 boolean 使用，若 true 则是 is 的类型 ------------- */

const isString = (arg: unknown): arg is string => typeof arg === "string";

function useIt(numOrStr: number | string) {
  if (isString(numOrStr)) {
    // 类型缩窄到 string
    console.log(numOrStr.length);
  }
}

// 可以类型谓词和 boolean 结合写一些工具方法
export type Falsy = false | "" | 0 | null | undefined;

export const isFalsy = (val: unknown): val is Falsy => !val;

/* --------------------- in 判断一个属性是否为对象所拥有，可缩窄类型 ----------------- */

 class A {
  public a() {}

  public useA() {
    return "A";
  }
}

class B {
  public b() {}

  public useB() {
    return "B";
  }
}

function useIt1(arg: A | B): void {
  // 类型缩窄了
  'a' in arg ? arg.useA() : arg.useB();
}

interface ILogInUserProps {
  isLogin: boolean;
  name: string;
}

interface IUnLoginUserProps {
  isLogin: boolean;
  from: string;
}

type UserProps = ILogInUserProps | IUnLoginUserProps;

function getUserInfo(user: ILogInUserProps | IUnLoginUserProps): string {
  // 类型缩窄了
  return 'name' in user ? user.name : user.from;
  // 注意: hasOwnProperty 并不能缩窄
  // return user.hasOwnProperty('name') ? user.name : user.from;
}

/* --------------------------------------- typeof ----------------------------------- */

function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    // 类型缩窄了
      return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
      return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

/* --------------------------------------- instanceof -------------------------------- */

class Tmp {
  xxx() {};
}

class Bmp {
  bbb() {};
}

function Template(a: Tmp | Bmp) {
  if (a instanceof Tmp) {
    // 类型缩窄了
    a.xxx();
  }
}

/* --------------------------------------- 字面量 -------------------------------------- */

interface ICommonUserProps {
  type: "common",
  accountLevel: string
}

interface IVIPUserProps {
  type: "vip";
  vipLevel: string;
}

type UserProps1 = ICommonUserProps | IVIPUserProps;

function getUserInfo1(user: UserProps1): string {
  // 类型缩窄了
  return user.type === "common" ? user.accountLevel : user.vipLevel;
}

