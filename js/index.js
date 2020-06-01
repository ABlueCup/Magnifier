let magnifierBox = document.getElementById('magnifier-box'),
    smallBox = magnifierBox.getElementsByClassName('smallBox')[0],
    mark = smallBox.getElementsByClassName('mark')[0],
    bigBox = magnifierBox.getElementsByClassName('bigBox')[0],
    bigImg = bigBox.getElementsByTagName("img")[0],
    flag = false
    ;
smallBox.onmouseenter = function () {
    mark.style.display = 'block';
    bigBox.style.display='block';
    flag = true;
}
smallBox.onmouseleave = function () {
    mark.style.display = 'none';
    bigBox.style.display='none';
    flag = false;
}
smallBox.onmousemove = function (ev) {
    if (!flag) {
        return;
    }
    let top = ev.pageY - magnifierBox.offsetTop-smallBox.offsetTop - 50,
        left = ev.pageX - magnifierBox.offsetLeft - smallBox.offsetLeft - 50;
    top = top < 0 ? 0 : (top > 330 ? 330 : top);
    left = left < 0 ? 0 : (left > 330 ? 330 : left);
    mark.style.top = top + 'px';
    mark.style.left = left + 'px';
    _top = -top * 430/100 + 'px';
    _left = -left * 430/100 + 'px';
    bigImg.style.left = _left;
    bigImg.style.top = _top;
}
