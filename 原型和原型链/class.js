//类
class Student {
    constructor(name, number) {
        this.name = name
        this.number = number
        // this.gender = 'male'
    }
    sayHi() {
        console.log(`姓名${this.name},学号${this.number}`)
    }
}
//通过类new实例
const niuniu = new Student('niuniu', 28)
console.log(niuniu.name)
console.log(niuniu.number)
niuniu.sayHi()

const zhuzhu = new Student('zhuzhu', 29)