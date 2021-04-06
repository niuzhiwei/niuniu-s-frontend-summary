//传统方式
function unique(arr) {
    const res = []
    arr.forEach(item => {
        if (res.indexOf(item) < 0) {
            res.push(item)
        }
    })
    return res
}

unique([1, 2, 3, 3, 3, 4])

//使用set
function unique1(arr) {
    const set = new Set(arr)
    return [...set]
}
unique1([1, 2, 3, 3, 3, 4])
