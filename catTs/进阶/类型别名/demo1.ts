/**
 * type 设置别名。
 * 常规规范，首字母用大写。
 */

type Name = string;
type NameResolve = () => string;
type NameOrResolver = Name | NameResolve;

function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}