function sayHello(person: string) {
  return 'hello, ' + person;
}

let user = 'Tom'

console.log(sayHello(user));

// 如果想在报错的时候不生成 js 文件，则在 tsconfig.json 中配置 noEmitOnError 为 true 即可。