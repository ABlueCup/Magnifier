### 说明
#### html结构
```html
<!-- maginifier-box只能是body的子元素，否则关于宽高的计算会比较复杂 -->
<section class="magnifier-box" id="magnifier-box">
        <div class="smallBox"><img src="./img/1.jpg" alt=""><div class="mark"></div></div>
        <div class="bigBox"><img src="./img/2.jpg" alt=""></div>
</section>
```
#### css结构
- 需要自行设置容器、小盒子、大盒子、MARK的宽高 
- MARK和大盒子的长宽比要一致
- 小盒子和两张图片的长宽比要一致
- smallBox和bigBox都需要设置overflow:hidden;
- 大盒子和MARK的初始状态为display:none;
#### js

开发文档
结构：
    容器 【
        窗口1【
            小图片
            小窗口
        】
        窗口2【
            大图片
        】
    】

逻辑:
```
    小窗口在窗口1中移动，小窗口覆盖的图片部分在大窗口中显示：
    1，给窗口1mouseenter事件绑定方法：小窗口显示，窗口2中的图片也显示
    2，给窗口1mousemove事件绑定方法： 小窗口随着鼠标而移动，窗口2中显示对应的小窗口覆盖的图片部分
        2.1 计算小窗口位置
            top = ev.pageY - 容器.offsetTop - 窗口1.offsetTop
            left = ev.pageX - 容器.offsetLeft - 窗口2.offsetLeft
        2.2 小窗口/窗口1 = 窗口2/大图片 以此来设置图片的宽高
            图片在窗口2中的位置
            top = - top / (小窗口的高度 / 窗口2的高度)
            left = - left / (小窗口的宽度 / 窗口2的宽度)
    1，给窗口1mouseleave事件绑定方法： 小窗口消失，窗口2也消失
```
