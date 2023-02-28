// 单例模式

// 类写法

class Singeleto {
    private static intance: any = null;
    static createSinge() {
        if (!Singeleto.intance) {
            Singeleto.intance = new Singeleto();
        }
        return Singeleto.intance;
    }
}

const obj = Singeleto.createSinge();
const obj2 = Singeleto.createSinge(); // 重新写没用 只能实例化一次
console.log(obj, obj2);
console.log(obj === obj2);

// 函数写法 写法非常多 这只是其中一种 

function SingeletoFun(name: string, age: number) {
    this.name = name;
    this.age = age;
}
SingeletoFun.prototype.intance = null;
SingeletoFun.prototype.createSinge = (name: string, age: number) => {
    if (!SingeletoFun.prototype.intance) {
        SingeletoFun.prototype.intance = new SingeletoFun(name, age);
    }
    return SingeletoFun.prototype.intance;
}

const o = SingeletoFun.prototype.createSinge('陈子文', 23);
const o2 = SingeletoFun.prototype.createSinge('陈', 23);

console.log(o, o2);
console.log(o === o2);