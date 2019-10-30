// 接口继承类
// 当创建一个接口继承了具有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所 实现（implements）。
class Control {
  private state: any
}

interface SelectableControl extends Control {
  select(): void
}

class Button extends Control implements SelectableControl {
  select() { }
}

class TextBox extends Control {
  select() {}
}

// Error 'ImageC' 类型缺少 'state' 属性，它不是 Control 子类，所以无法具有 state 私有属性
class ImageC implements SelectableControl {
  select() {}
}