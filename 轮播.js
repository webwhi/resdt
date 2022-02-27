window.addEventListener('load', function () {
    let arrow_l = document.querySelector('.arrow-l');
    let arrow_r = document.querySelector('.arrow-r');
    let lunbo = document.querySelector('.lunbo');
    let timer = setInterval(function () {
        arrow_r.click();
    }, 2000);
    lunbo.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    lunbo.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            arrow_r.click();
        }, 2000);
    })
    let ul = lunbo.children[2];
    let lunboWidth = lunbo.offsetWidth;
    let num = 0;
    arrow_r.addEventListener('click', function () {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * lunboWidth);
    });
    arrow_l.addEventListener('click', function () {
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = (-num) * lunboWidth + 'px';
        }
        num--;
        animate(ul, -num * lunboWidth);
    });
    let h = document.querySelector('.h');
    h.onmouseover = function () {
        h.innerHTML = '所以好好学习';
    }
    h.onmouseout = function () {
        h.innerHTML = '立志不去摆烂';
    }
    let first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
})
