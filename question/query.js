//传统方式
function query(name) {
    const search = location.search.substring(1)
    //search:'a=10&b=20'
    const reg = new RegExp(`(^|$)${name}=([^&]*)(&|$)`, 'i')
    const res = search.match(reg)
    if (res === null) {
        return null
    }
    return res[2]
}

//URLSearchParams
function query(name) {
    const search = location.search
    const p = new URLSearchParams(search)
    return p.get(name)
}