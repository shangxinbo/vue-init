
export const mAjax = (vm, options) => {
    vm.$http.post(options.url, options.data).then(function (data) {
        if (data.status == 200 && data.data.code == 200) {
            options.success(data.body)
        } else if (data.status == 404 || data.data.code == 404) {
            vm.$router.replace('/error?code=404')
        } else if (data.status == 403 || data.data.code == 403) {
            vm.$router.replace('/error?code=403')
        } else if (data.status == 500 || data.data.code == 500) {
            vm.$router.replace('/error?code=500')
        } else if (data.data.code == 10018) {
            vm.$router.replace('/login')
        } else {
            if (data.status == 200) {
                vm.$router.replace('/error?code=' + data.data.code + '&msg=' + data.data.message)
            } else {
                vm.$router.replace('/error?code=' + data.status + '&msg=' + data.statusText)
            }
        }
    }, options.error)
}

export const setCookie = (name, value, end, path, domain, secure) => {
    if (!name) { return false }
    let expires = ""
    if (end) {
        switch (end.constructor) {
            case Number:
                expires = end === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + end
                break
            case String:
                expires = "; expires=" + end
                break
            case Date:
                expires = "; expires=" + end.toUTCString()
                break
        }
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value)
        + expires
        + (domain ? "; domain=" + domain : "")
        + (path ? "; path=" + path : "")
        + (secure ? "; secure" : "")
    return true
}

export const getCookie = (name) => {
    let value = document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")
    return decodeURIComponent(value) || null
}

export const delCookie = (name, path, domain) => {
    let hasName = (new RegExp("(?:^|;\\s*)" + encodeURIComponent(name).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie)
    if (!name || !hasName) { return false }
    document.cookie = encodeURIComponent(name) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (domain ? "; domain=" + domain : "") + (path ? "; path=" + path : "")
    return true
}

export const listCookie = () => {
    let aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/)
    for (let nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]) }
    return aKeys
}

export const accAdd = (arg1, arg2) => {
    let r1, r2, m, c
    try {
        r1 = arg1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }
    c = Math.abs(r1 - r2)
    m = Math.pow(10, Math.max(r1, r2))
    if (c > 0) {
        let cm = Math.pow(10, c)
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace(".", ""))
            arg2 = Number(arg2.toString().replace(".", "")) * cm
        } else {
            arg1 = Number(arg1.toString().replace(".", "")) * cm
            arg2 = Number(arg2.toString().replace(".", ""))
        }
    } else {
        arg1 = Number(arg1.toString().replace(".", ""))
        arg2 = Number(arg2.toString().replace(".", ""))
    }
    return (arg1 + arg2) / m
}

export const accSub = (arg1, arg2) => {
    let r1, r2, m, n
    try {
        r1 = arg1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    n = (r1 >= r2) ? r1 : r2
    return ((arg1 * m - arg2 * m) / m).toFixed(n)
}

export const accMul = (arg1, arg2) => {
    let m = 0,
        s1 = arg1.toString(),
        s2 = arg2.toString()
    try {
        m += s1.split(".")[1].length
    } catch (e) {
        console.log(e)
    }
    try {
        m += s2.split(".")[1].length
    } catch (e) {
        console.log(e)
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}

export const accDiv = (arg1, arg2) => {
    let t1 = 0,
        t2 = 0,
        r1, r2
    try {
        t1 = arg1.toString().split(".")[1].length
    } catch (e) {
        console.log(e)
    }
    try {
        t2 = arg2.toString().split(".")[1].length
    } catch (e) {
        console.log(e)
    }
    r1 = Number(arg1.toString().replace(".", ""))
    r2 = Number(arg2.toString().replace(".", ""))
    return (r1 / r2) * Math.pow(10, t2 - t1)
}

export const getQuery = (name) => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
    let r = window.location.search.substr(1).match(reg)
    if (r != null) return decodeURIComponent(r[2])
    return null
}

export const removeHTMLTag = (str) => {
    str = str.replace(/<\/?[^>]*>/g, '') //去除HTML tag
    str = str.replace(/[ | ]*\n/g, '\n') //去除行尾空白
    str = str.replace(/&#x20;/ig, '') //去掉&#x20;
    return str
}

export const isRealPhone = (mobile) => {
    let patten1 = /^1(3[456789]{1}|47|5[012789]{1}|78|8[23478]{1})\d{8}$/   //移动
    let patten2 = /^1(3[012]{1}|45|5[56]{1}|76|8[56]{1})\d{8}$/             //联通
    let patten3 = /^1(33|53|77|8[019]{1})\d{8}$/                            //电信
    let patten4 = /^170\d{8}$/                                              //虚拟运营商

    if (patten1.test(mobile)) {
        return 1
    } else if (patten2.test(mobile)) {
        return 2
    } else if (patten3.test(mobile)) {
        return 3
    } else if (patten4.test(mobile)) {
        return 4
    } else {
        return false
    }
}

export const isEmail = (str) => {
    let patten = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[a-z0-9]*[a-z0-9]+\.){1,63}[a-z0-9]+$/
    if (patten.test(str)) {
        return true
    } else {
        return false
    }
}

export const isIdentity = (str) => {
    str = str.replace(/[ ]/g, "")
    let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return reg.test(str)
}

export const numberFormatter = (num) => {
    try {
        return num.toString().replace(/\d+?(?=(?:\d{3})+$)/img, "$&,")
    } catch (e) {
        return NaN
    }
}

export const random = (max, min) => {
    if (!isNaN(max)) {
        min = isNaN(min) ? 0 : min
        var sect = max - min
        return Math.floor(accMul(Math.random(), sect) + min)
    } else {
        console.info('random param is not available')
        return false
    }
}

export const dateFormat = (date) => {
    if (date instanceof Date) {
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    } else {
        return ''
    }
}