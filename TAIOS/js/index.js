//首页广告位
$(function () {
    $(".slide_box").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true});
});


$(function () {
    // 获取需要修正的高度
    function getOffsetHeight(object) {
        // 获取屏幕的可视高度
        var clientHeight = $(window).height();
        // 当前滚动条高度
        var scrollTop = $(document).scrollTop();
        // 当前元素滚动高度
        var obj_top = object.offset().top;
        // 当前元素底部距离滚动高度
        var height = object.outerHeight() + obj_top - scrollTop;
        return clientHeight - height;
    }



//楼层导航切换
$(function(){
    $('.floor1-nav').click(function(){
        $('.floor1-nav').removeClass('hoverA');
        $(this).addClass('hoverA');
        $('.floor1-content').hide();
        var box =  $(this).attr('data-type') + '-box';
        $('div.floor1-content.'+box).show();
    })

    $('.floor2-nav').click(function(){
        $('.floor2-nav').removeClass('hoverA');
        $(this).addClass('hoverA');
        $('.floor2-content').hide();
        var box =  $(this).attr('data-type') + '-box';
        $('div.floor2-content.'+box).show();
    })

    $('.floor3-nav').click(function(){
        $('.floor3-nav').removeClass('hoverA');
        $(this).addClass('hoverA');
        $('.floor3-content').hide();
        var box =  $(this).attr('data-type') + '-box';
        $('div.floor3-content.'+box).show();
    })




})
});