
// 1. obj 约束为对象，key 约束为 obj 的 key 之一，返回值为 obj[key] 该 val 的类型
function pickSingleValue<T extends object, U extends keyof T>(
  obj: T,
  key: U // 联合类型
): T[U] {
  return obj[key];
}


// 2. 在上栗基础上给点变化，传第二个参数为 key 数组，要求返回值为每个 key 的 val 组成的数组
function pick<T extends object, U extends keyof T>(obj: T, keys: U[]): T[U][] {
  return keys.map((key) => obj[key]);
}

pick({a: '1', b: 2, c: true}, ['a', 'b'])



// 3. 有个需求，实现一个接口 B ，它的字段与接口 A 完全相同，但是其中的类型全部为 string
interface A {
  a: boolean;
  b: string;
  c: number;
  d: () => void;
}

type cloneA<T> = {
  [p in keyof T]: string;
}

type B = cloneA<A>;


// 4. 要求实现一个接口 C ，它的字段和类型与 A 完全一致，但是全可选。
type OwnPartial<T> = {
  [K in keyof T]?: T[K];
};

type C = OwnPartial<A>;


// 5. 条件类型     
type LiteralType<T> = T extends string | number ? "foo" : "bar";

type c = LiteralType<'1' | false | 2> // 分发 union type

type d = LiteralType<['1' | false | 2]> // 加 [] 包裹住，就整体判断条件，不分发


// 6. 条件类型 补充说明：条件类型其实都是延迟推断
declare function strOrNum<T extends boolean>(
  x: T
): T extends true ? string : number;

strOrNum(true); // 此时才推断出来
strOrNum(false);

// 7. 工具类型源码

// 8. 社区工具类型
export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined;


export const isPrimitive = (val: unknown): val is Primitive => { // 类型守卫
  if (val === null || val === undefined) {
    return true;
  }

  const typeDef = typeof val;

  const primitiveNonNullishTypes = [
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
  ];

  return primitiveNonNullishTypes.indexOf(typeDef) !== -1;
};

export type Nullish = null | undefined;

export type NonUndefined<A> = A extends undefined ? never : A;

type NonNullable<T> = T extends null | undefined ? never : T;

const foo = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    resolve("sadhu");
  });
};

// Promise<string>
type FooReturnType = ReturnType<typeof foo>;

// string
type NakedFooReturnType = PromiseType<FooReturnType>;

// 提取 Promise 的实际类型
type PromiseType<T extends Promise<any>> = T extends Promise<infer R> ? R : never;

// 递归 Partial  这版实现只处理 val 是对象的情况
type DeepPartial<T> = {
  [k in keyof T]?: T[k] extends Function ? T[k] : T[k] extends object ?  DeepPartial<T[k]> : T[k];
}

// 获取一个接口中， val 是函数类型的 key 的联合类型
type FuncTypeKeys<T extends object> = {
  [K in keyof T]-?: T[K] extends Function ? K : never; // 这里 never 不会缩窄，只会缩窄联合类型
}[keyof T]; // 接口[联合类型] 会被分发，最终结果是联合类型。  如果单个分发的结果是 never ，则不会出现在最终的结果中

// 挑出一个接口中的可选属性的联合类型
type OptionalKeys<T> = {
  // 这两例中 -? 对最后的分发的影响是不会把 undefined 放在最终联合类型内
  [K in keyof T]: {} extends Pick<T, K> ? T[K] : never;
}[keyof T]

interface AA {
  a: 1;
  b?: '2';
  c?: true
}

type AA_O = OptionalKeys<AA>

// 根据 value Pick 
export type PickByValueType<T, ValueType> = Pick<
  T,
  { [Key in keyof T]-?: T[Key] extends ValueType ? Key : never }[keyof T]
>;

export type OmitByValueType<T, ValueType> = Pick<
  T,
  { [Key in keyof T]-?: T[Key] extends ValueType ? never : Key }[keyof T]
>;

/*
总结下上面书写的工具类型：
全量修饰接口：Partial Readonly(Immutable) Mutable Required，以及对应的递归版本。
裁剪接口：Pick Omit PickByValueType OmitByValueType
基于 infer：ReturnType ParamType PromiseType
获取指定条件字段：FunctionKeys OptionalKeys RequiredKeys ...
*/

// 重映射  ---  对映射类型（接口类型）提供过滤、转换的能力
// 转换 （改变 key 和 value）
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;

// 转换 （互换 key value）
type Flip<T extends Record<any, any>> = {
  [Key in keyof T as `${T[Key]}`]: Key
}

interface BeFlip {
  name: 'sadhu',
  age: 2,
}

type Fliped = Flip<BeFlip>;

// 过滤  （as 返回了 never 就过滤）
type RemoveKindField<T> = {
  [K in keyof T as Exclude<K, "kind">]: T[K]
};

interface Circle {
  kind: "circle";
  radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;
