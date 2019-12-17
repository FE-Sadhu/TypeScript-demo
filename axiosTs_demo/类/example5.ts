// 保护也可以保护构造器，不仅仅可以保护变量
// 如下

class Person {
  protected name: string

  protected constructor(name: string) {
    this.name = name
  }
}

const mee = new Person('sadhu') // 这样是报错的，受保护了不能在外部访问，这种情况只能在子类中继承访问。
