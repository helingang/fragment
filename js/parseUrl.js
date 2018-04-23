// 解析url参数 "?id=123&a=1" 用户app中保存id
// return {id: 123, a: 1}

export function urlParse(){
    // window的location对象, window.location.search表示?后的内容
    let url = window.location.search;
    let obj = {};
    // ?或& , 多个非?& , = , 多个非?&
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    // ['?id=123','&a=1']
    if (arr){
        arr.forEach((item) => {
            // 把?或&切割掉, 以=为界切割成数组并赋值到对象的key和val中
            let tempArr = item.substring(1).split('=');
            let key = decodeURIComponent(tempArr[0]);
            let val = decodeURIComponent(tempArr[1]);
            obj[key] = val;
        });
    }
    return obj;
}
