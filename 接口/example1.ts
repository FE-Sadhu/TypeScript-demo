// 接口初探
function printLabel(labelObj: { label: string }) {
  console.log(labelObj.label)
}

let myObj = {
  size: 10,
  label: 'Size 10 Object' // 若对象中没有 label 或 label 的属性值不为字符串 ，但接口中规定了 {label: string}，则会报错
}

printLabel(myObj)

// 以接口的方式改写上面的例子，
interface labelTemp {
  label: string
}

function printLabel2(labelObj: labelTemp) {
  console.log(labelObj.label)
}

let myObj2 = {
  size: 2,
  label: 'Size 10 Object'
}

printLabel(myObj2)
