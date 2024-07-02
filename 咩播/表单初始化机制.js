// 咩播项目中默认的表单初始化机制
// 在父类中中实现一个空方法，然后通过在子类中重写这个方法，并在父类中直接调用这个方法。
// 这是典型的面向对象思维，在js中根据原型链深度去读取同名的方法，优先读取最外层的方法，也就是son类的create，所以最终会触发son的create
class father {
    constructor() {
        this.create();
    }
    create() { }
}

class son extends father {
    create() {
        console.log("i am a son!");
    }
}

new son() // i am a son!