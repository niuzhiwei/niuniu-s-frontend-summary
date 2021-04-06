const obj1 = {
    a: 10,
    b: 20,
    sum() {
        return this.a + this.b
    }
}

const obj2 = new Object(obj1)
console.log(obj1 === obj2) //true

const obj3 = new Object({
    a: 10,
    b: 20,
    sum() {
        return this.a + this.b
    }
})
console.log(obj1 === obj3) //false

const obj4 = Object.create(null)
const obj5 = Object.create({
    a: 10,
    b: 20,
    sum() {
        return this.a + this.b
    }
})
const obj6 = Object.create(obj1)