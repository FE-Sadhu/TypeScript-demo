/**
 * 字符串字面量类型，约束取值只能是这几个字符串中的一个。
 * 和别名一样，用 type 定义。
 */

 type EventNames = 'click' | 'scroll' | 'mousemove';

 function handleEvent(ele: Element, event: EventNames) {
   // do something.
 }

 handleEvent(document.getElementById('hello'), 'scroll');
 handleEvent(document.getElementById('world'), 'click1'); // 这个不是那三个字符串字面量之一
 