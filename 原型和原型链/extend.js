//父类
class People {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat something`)
    }
}

//子类
class Student extends People {
    constructor(name, number) {
        super(name)
        this.number = number
    }
    sayHi() {
        console.log(`姓名 ${this.name} 学号 ${this.number}`)
    }
}

//子类
class Teacher extends People {
    constructor(name, major) {
        super(name)
        this.major = major
    }
    teach() {
        console.log(`${this.name} 教授 ${this.major}`)
    }
}

//通过类new实例
const niuniu = new Student('niuniu', 28)
console.log(niuniu.name)
console.log(niuniu.number)
niuniu.sayHi()
niuniu.eat()

const teacherW = new Teacher('wang', '语文')
console.log(teacherW.name)
teacherW.teach()