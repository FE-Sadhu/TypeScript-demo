// 接口初探
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = {
    size: 10,
    label: 'Size 10 Object' // 若对象中没有 label 或 label 的属性值不为字符串 ，但接口中规定了 {label: string}，则会报错
};
printLabel(myObj);
function printLabel2(labelObj) {
    console.log(labelObj.label);
}
var myObj2 = {
    size: 2,
    label: 'Size 10 Object'
};
printLabel(myObj2);
