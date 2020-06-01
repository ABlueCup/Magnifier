class Magnifier {
    constructor(container) {
        this.container = container;
        this.smallBox = this.container.querySelector('.smallBox');
        this.mark = this.smallBox.querySelector('.mark');
        this.bigBox = this.container.querySelector('.bigBox');
        this.bigImg = this.bigBox.querySelector('img');
        this.flag = false;
        this.init();
    }

    //初始化
    init() {
        this.smallBox.onmouseenter = () => {
            if (this.flag) {
                return;
            }
            this.mark.style.display = 'block';
            this.bigBox.style.display = 'block';
            this.flag = true;
            this.bigImg.style.width = this.bigBox.offsetWidth / (this.mark.offsetWidth / this.smallBox.offsetWidth) + 'px';
            this.bigImg.style.height = this.bigBox.offsetHeight / (this.mark.offsetHeight / this.smallBox.offsetHeight) + 'px';
        }
        //
        this.smallBox.onmouseleave = () => {
            if (!this.flag) {
                return;
            }
            this.mark.style.display = 'none';
            this.bigBox.style.display = 'none';
            this.flag = false;
        }
        this.smallBox.onmousemove = (ev) => {
            if (!this.flag) {
                return;
            }
            //mark的移动
            let top = ev.pageY - this.container.offsetTop - this.smallBox.offsetTop - this.mark.offsetHeight / 2,
            left = ev.pageX - this.container.offsetLeft - this.smallBox.offsetLeft - this.mark.offsetWidth / 2;
            let markMaxTop = this.smallBox.offsetHeight - this.mark.offsetHeight,
                markMaxLeft = this.smallBox.offsetWidth - this.mark.offsetWidth;
            top = top < 0 ? 0 : (top > markMaxTop ? markMaxTop : top);
            left = left < 0 ? 0 : (left > markMaxLeft ? markMaxLeft : left);
            this.mark.style.top = top + 'px';
            this.mark.style.left = left + 'px';

            // 图片的展示
            let _top = top / (this.mark.offsetHeight / this.bigBox.offsetHeight),
                _left = left / (this.mark.offsetWidth / this.bigBox.offsetWidth);
            this.bigImg.style.top = -_top + 'px';
            this.bigImg.style.left = -_left + 'px';
        }
    }
}

//  当遇到事件绑定的时候，方法是function(){}的时候，里面的this会变为绑定的元素，我们有两种方法可以解决，一是使用箭头函数，而是提前将类中的this赋值给一个变量that,箭头函数更常用，会让代码看起来更易读