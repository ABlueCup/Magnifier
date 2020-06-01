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
    小窗口在窗口1中移动，小窗口覆盖的图片部分在大窗口中显示：
    1，给窗口1mouseenter事件绑定方法：小窗口显示，窗口2中的图片也显示
    2，给窗口1mousemove事件绑定方法： 小窗口随着鼠标而移动，窗口2中显示对应的小窗口覆盖的图片部分
        2.1 计算小窗口位置
            top = ev.pageY - 容器.offsetTop - 窗口1.offsetTop
            left = ev.pageX - 容器.offsetLeft - 窗口2.offsetLeft
        2.2 小窗口/窗口1 = 窗口2/大图片 = ratio
            图片在窗口2中的位置
            top = - top / ratio
            left = - left / ratio
    1，给窗口1mouseleave事件绑定方法： 小窗口消失，窗口2也消失
