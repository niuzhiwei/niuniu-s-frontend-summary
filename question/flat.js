function flat(arr) {
    //验证arr中，还有没有深层数组
    const isDeep = arr.some(item => item instanceof Array)
    if (!isDeep) {
        return arr //已经是flatten
    }
    const res = Array.prototype.concat.apply([], arr)
    return flat(res) //递归
}

const res = flat([1, 2, [3, 4, [6, 7]], 5])
console.log(res)