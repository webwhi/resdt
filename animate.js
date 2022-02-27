function animate(obj, taget, callback) {
    clearInterval(obj.timer);

    obj.timer = setInterval(function () {
        let step = (taget - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == taget) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);

}
/* 动画函数要熟练写会，还需练习。 */