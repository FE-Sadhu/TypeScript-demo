// 函数类型接口
interface SearchFun { // 直接在接口里面规范了函数的 参数 和 返回值类型
  (source: string, subString: string): boolean
}

let mySearch: SearchFun
mySearch = function(source: string, subString: string): boolean {
  let result = source.search(subString) // search() 方法执行正则表达式和 String 对象之间的一个搜索匹配。如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引;否则，返回 -1。
  return result > -1
}

// 参数名不一定非要跟函数类型接口里定义的名字匹配
mySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub)
  return result > -1
}

// 也可以利用类型推断
mySearch = function(src, sub) {
  let result = src.search(sub)
  return result > -1
}