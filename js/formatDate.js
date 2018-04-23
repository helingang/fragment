// date参数是一个 new Date()值
// fmt参数是类似于 'yyyy-MM-dd hh:mm' 格式的字符串
function formatDate(date, fmt){
    // 判断是否存在'年', 输入几位y就填充几位年
    // RegExp.$1表示yyyy
    if (/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)){
            let str = o[k] + '';
            // RegExp.$1长度为1则表示只需要个位,否则自动补零
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

// 补零的函数
// 如果substr(a, b) a: 开始的下标 b: (可选)截取的长度
function padLeftZero(str){
    return ('00' + str).substr(str.length);
};