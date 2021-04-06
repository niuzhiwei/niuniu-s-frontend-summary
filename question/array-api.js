const arr = [10, 20, 30, 40]
//pop
const popRes = arr.pop()
console.log(popRes, arr) //40 [10,20,30]

//push
const pushRes = arr.push(40)
console.log(pushRes, arr) //4(长度) [10,20,30,40]

//shift
const shiftRes = arr.shift()
console.log(shiftRes, arr) //10 [20,30,40]

//unshift
const unshiftRes = arr.unshift(10)
console.log(unshiftRes, arr) // 4(长度) [10,20,30,40]

//concat 
const arr1 = arr.concat([50, 60, 70])
console.log(arr1, arr) //[10, 20, 30, 40, 50, 60, 70] [10, 20, 30, 40]

//map
const arr2 = arr.map(num => num * 2)
console.log(arr2, arr) //[20, 40, 60, 80]  [10, 20, 30, 40]

//filter
const arr3 = arr.filter(num => num > 25)
console.log(arr3, arr) // [30, 40]  [10, 20, 30, 40]

//slice
const arr4 = arr.slice() //类似深拷贝
const arr5 = arr.slice(0, 2)
console.log(arr5, arr) //[10, 20]  [10, 20, 30, 40]
const arr6 = arr.slice(2)
console.log(arr6, arr) //[30, 40] [10, 20, 30, 40]
const arr7 = arr.slice(-2)
console.log(arr7, arr) // [30, 40] [10, 20, 30, 40]

//splice 非纯函数
const spliceRes = arr.splice(1, 2, 'a', 'b', 'c')
console.log(spliceRes, arr) //[20,30]  [10, "a", "b", "c", 40]