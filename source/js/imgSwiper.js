/**
 *自定义图片展示切换 imgSwiper
 */

var _imgSwiper = (function () {

    //设置样式 active、prev、next    
    function setStyle(elem, style) {
        elem = $(elem);
        elem.removeClass('active prev next');
        elem.addClass(style);
    }

    //重设、改变显示
    //elem 主元素
    //showIndex 要显示的索引    
    function resetView(elem, showIndex) {

        //fe 主元素
        //item 切换元素
        //itemNum 切换元素数量
        //activeIndex 当前激活的切换元素索引
        var fe = $(elem),
            item = fe.find('.item'),
            itemNum = item.length,
            activeElem = fe.find('.item.active'),
            activeIndex = fe.find('.item.active').index();


        //判断
        //1.是否只有一个切换元素
        //2.是否只有两个切换元素
        //3.是否大于等于3个切换元素        
        if (itemNum == 1) {
            item.addClass('active');
        } else if (itemNum == 2) {
            //检查是否没有激活元素
            //排除当前激活
            if (activeIndex < 0) {
                setStyle(item[showIndex], 'active');
                //判断元素索引 初始化元素位置
                if (showIndex > 0) {
                    setStyle(item[0], 'prev');
                } else {
                    setStyle(item[1], 'next')
                }
            } else if (activeIndex != showIndex) {
                //判断左右
                if (showIndex > activeIndex) {
                    setStyle(item[activeIndex], 'prev')
                } else {
                    setStyle(item[activeIndex], 'next')
                }
                setStyle(item[showIndex], 'active');
            }
        } else if (itemNum >= 3) {
            //清空
            item.removeClass('active prev next');

            //检查是否没有激活元素
            //排除当前激活
            setStyle(item[showIndex], 'active');
            //设置左边
            setStyle(item[showIndex - 1 >= 0 ? showIndex - 1 : itemNum - 1], 'prev');
            //设置右边
            setStyle(item[showIndex + 1 < itemNum ? showIndex + 1 : 0], 'next');
            // if (activeIndex < 0) {
            // } else if (activeIndex != showIndex) {
            // }
        }
    }

    function setElem(elem) {
        var fe = $(elem),
            item = fe.find('.item'),
            itemNum = item.length;

        item.unbind().click(function () {
            resetView(fe, $(this).index());
        })
        resetView(fe, 0);
    }
    return setElem;

})();
