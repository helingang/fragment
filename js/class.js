// 添加class
function addClass(el, className){
    if (hasClass(el, className)) {
        return;
    } else {
        var newClass = el.className.split(' ');
        newClass.push(className);
        el.className = newClass.join(' ');
    }
}

function hasClass(el, className){
    if (!className) {
        return false;
    }
    let reg = '(^|\\s)' + className + '(\\s|$)';
    return reg.test(el.className);
}