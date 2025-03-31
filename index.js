"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello World');
var person = {
    name: 'John',
    age: 30,
    id: 1
};
//readonly 属性不能被修改
//person.id = 2;
//
var names = ['Alice', 'Bob', 'Charlie'];
//泛型写法
var names2 = ['Alice', 'Bob', 'Charlie'];
//剩余参数 ...rest
function sum(num) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return rest.reduce(function (a, b) { return a + b; }, 0);
}
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('参数类型错误');
}
function isFish(animal) {
    animal.swim(); //类型断言
}
//内置对象
var flag = Boolean(1);
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function getNewName(name) {
    return name;
}
getNewName('John');
//getNewName('Tom'); //报错
//数组与元祖  数组表示同类型  元祖表示不同类型
var arr = [1, 2, 3];
console.log(arr[0]);
//根据元祖声明中的数量有限制
var arr2 = ['John', 30];
arr2.push('Tom'); //报错
