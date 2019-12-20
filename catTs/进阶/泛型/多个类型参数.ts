/**
 * 定义泛型的时候，可以一次性定义多个类型参数
 * 
 */
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
swap([1, 's'])