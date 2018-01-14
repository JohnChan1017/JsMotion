# JS运动框架实现思路
## 1. 速度（改变值left，right，width，height，opacity）
> 运动，就是是物体动起来，而动起来就是使用定时器使其每个一段时间改变它对应的left，right，height,opacity的值;

left | 目标值(taget)
---|---
-200 | 0 

## 2. 缓冲运动(匀减速直线运动)

> 缓冲运动的奥义在于  **"速度的大小是在每时每刻在递减"**  例子:火车进站
## 3. 多物体运动
> 多物体运动的奥义在于 要各自设置定时器obj.timer = null;
所有的多物体运动，东西都不能共用
## 4. 任意值变化
## 5. 链式运动
## 6. 同时运动

getStyle(obj,name)避免了offsetWidth=width+padding+border
的影响，直接提取了盒子的宽度getStyle(obj,'width')
用之前一定要parseInt一下,因为通过该方法获得的值带有单位需要用parseInt截取字符串"200px"后面的非数字部分