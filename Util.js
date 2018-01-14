/**
 * 获取某一对象的任意一个样式(而非属性)
 * function getStyle(obj,name)
 * 注意:此时样式可以不是行间样式,也能获取
 * IE写法: currentStyle
 * 非IE写法: getComputedStyle
 * @param obj
 * @param name  样式属性名
 * @returns {*}
 */
function getStyle(obj,name) {
    if(obj.currentStyle){   //IE
        return obj.currentStyle[name];
    }else{
        return getComputedStyle(obj,false)[name];  //ff,chrome等主流浏览器
    }
}

/**
 * 运动框架
 * @param obj
 * @param attr
 * @param target
 */
// startMove(obj,{attr1:target1,arrt2:target2},fn)
function startMove(obj,json,fn) {
    var flag = true;//假设所有的运动都到达目标值
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){

        for(var attr in json){

            var icur = 0 ;
            //获取属性名icur时做个判断
            if(attr == 'opacity'){
                // icur = Math.round(parseFloat(getStyle(obj,attr)) * 100);
                //好像旧版浏览器会出现opacity的值在不断变化,虽然效果实现了
                icur = parseFloat(getStyle(obj,attr)) * 100;//亲测目前新版的浏览器没有问题
            }else{
                icur = parseInt(getStyle(obj,attr));
            }
            var speed = (json[attr]-icur) / 8;
            speed = speed > 0 ? Math.ceil(speed):Math.floor(speed);

            if(icur != json[attr]){
                flag = false;
            }


            /*设置属性值时也做个判断，是否是opacity*/
            if(attr == 'opacity'){

                obj.style.filter = 'alpha(opacity:' + (icur+speed) + ')';
                obj.style.opacity = (icur + speed) /100;
            }else{

                obj.style[attr] = icur + speed + 'px';
            }
        }
        if(flag){//if flag 是true，则表示所有运动都到达目标值，然后停止定时器
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }


    },30);
}