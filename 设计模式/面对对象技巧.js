
// class 的其他用法 类并不是说只有实例化后才能保存数据
// 在这个案例中 类也可以向对象一样使用 虽然它并没有实例化 但是改变内部的数据也是有效的 和对象表现一致

// 公司项目中常用的方式，老板模仿nginx源码中用的非常多的一种面对对象的编程方式
class Driver {
    static mDriver = {};
    static use(name, value) {
        if (this.has(name)) {
            console.log("重复了");
        } else {
            this.mDriver[name] = value;
        }
    }

    static create() {
        console.log('输出driver', this.mDriver);
    }


    static has(name) {
        return this.mDriver[name] != null;
    }
}

Driver.use("name", "chiko");
Driver.use("age", 22);
Driver.use("sex", "男");
Driver.use("isStudent", false);


Driver.create(); // 输出driver { name: 'chiko', age: 22, sex: '男', isStudent: false }