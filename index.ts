import {User,getUser} from './functions';
console.log('Hello World')

interface Person {
  name: string
  age: number
  readonly id:number
}

let person: Person = {
  name: 'John',
  age: 30,
  id: 1
}
//readonly 属性不能被修改
//person.id = 2;

//
let names: string[] = ['Alice', 'Bob', 'Charlie'];
//泛型写法
let names2: Array<string> = ['Alice', 'Bob', 'Charlie'];

//剩余参数 ...rest
function sum(num:number,...rest: number[]): number {
  return rest.reduce((a, b) => a + b, 0);
}

//函数重载
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number|string, b: number|string): number|string
{
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('参数类型错误');
}

//类型断言 仍然会在运行时报错 只是会绕过类型检查
interface Cat {
  name: string
  run(): void
}

interface Fish {
  name: string
  swim(): void
}

function isFish(animal: Cat | Fish) {
  (animal as Fish).swim(); //类型断言
}

//内置对象
let flag: boolean = Boolean(1);
//
//let flag1:boolean=new Boolean(1);

//类型别名
type Name = string;
type NameFunction = () => string;
type NameOrFunction = Name | NameFunction;

function getName(n: NameOrFunction): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}

//字面量类型
type newName = 'John' | 'Jane' | 'Jim';
function getNewName(name: newName): newName {
    return name;
}

getNewName('John');
//getNewName('Tom'); //报错

//数组与元祖  数组表示同类型  元祖表示不同类型
let arr: number[] = [1, 2, 3];
console.log(arr[0]);
//根据元祖声明中的数量有限制
let arr2: [string,number] = ['John', 30];
arr2.push('Tom'); //运行报错

//枚举 常数项  计算所得
enum Color {
  Red,
  Green,
  Blue
}
//常数枚举 会在编译阶段时被删除 替换为具体的数字
const enum Color2 {
  Red,
  Green,
  Blue
}

//类
class Animal {
    name:string;
    age:number;
    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('Hello');
    }

    get animalName():string {
        return this.name;
    }

    set animalName(value:string) {
        this.name = value;
    }
}

class Dog extends Animal {
    flag:boolean;
    //实例属性
    range:number[] = [1, 2, 3];
    //静态属性
    static count:number = 0;
    constructor(name:string,age:number,flag:boolean) {
        super(name,age);
        this.flag = flag;
    }
    sayHello() {
        console.log('Dog Hello');
    }
    run() {
        console.log('Dog run');
    }
    static isDog(animal:Animal):boolean
    {
        return animal instanceof Dog;
    }
}

//初始化
let dog = new Dog('Tom', 3, true);
dog.sayHello();
//属性存取器
console.log(dog.animalName);
dog.animalName = 'Jerry';
//静态函数
Dog.isDog(dog);


//抽象类与接口的区别  目前理解  抽象类中可以有实现  但是接口中不可以有实现
abstract class Animal2 {
    abstract name:string;
    abstract sayHello():void;
    constructor() {
        console.log('Animal2 constructor');
    }
    run() {
        console.log('Animal2 run');
    }
}

class Dog2 extends Animal2 {
    name:string;
    constructor() {
        super();
        this.name = 'Dog2';
    }
    sayHello() {
        console.log('Dog2 Hello');
    }
}

//可以调用抽象类中的方法
let dog2=new Dog2();
dog2.run();