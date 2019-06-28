// define(['jquery.SuperSlide.2.1.1','common','handlebars-v4.1.2'],function (jquery_SuperSlide, handlebars, common) {
//加载产品分类
// import * as Handlebars from "./handlebars-v4.1.2";

// $(document).ready(
//         getParam
//     );
$(function getParam() {
    $.ajax({
        url: "http://192.168.137.1:8080/mall/param/findallparams.do",
        xhrFields: {withCredentials: true},//允许跨域请求携带cookie数据
        crossDomain: true,//跨域请求
        success: function (rs) {
            console.log(rs);
            //    创建对象 预编译插件
            var tpl = $("#param_tpl").html();
            var func = Handlebars.compile(tpl);
            //获取数据
            var data = rs.data;
            var result = func(data);
            //将handlerbars插入到整个页面
            $("#paramContainer").html(result);

        }
    });
    //    创建对象 预编译插件
    //     var tpl =$("#param_tpl").html();
    //     var func = Handlebars.compile(tpl);
    //     //获取数据
    //     var data = [{
    //         "id": 10029,
    //         "parent_id": 0,
    //         "name": "模型专区",
    //         "status": true,
    //         "sort_order": 7,
    //         "level": 0,
    //         "created": 1518421522000,
    //         "updated": 1518421522000,
    //         "children":[
    //             {
    //                 "name":"itai",
    //                 "chilren":[{
    //                     "name":"bigtai"
    //                 }]
    //             }
    //         ]
    //     }
    //     ];
    // console.log(data);
    // var result = func(data);
    //     //将handlerbars插入到整个页面
    //     $("#paramContainer").html(result);
    //

});
//加载热销产品
$(function getHotProduct() {
    $.ajax({
        url: "http://192.168.137.1:8080/mall/product/findhotproducts.do",
        xhrFields: {withCredentials: true},//允许跨域请求携带cookie数据
        crossDomain: true,//跨域请求
        success: function (rs) {
            //    创建对象 预编译插件
            var tpl = $("#hot_tpl").html();
            var func = Handlebars.compile(tpl);
            //    获取数据 处理数据（图片）
            var data = new Array();
            for (var i = 0; i < rs.data.length; i++) {
                // rs.data[i].iconUrl = rs.data[i].iconUrl;
                data[i] = rs.data[i];
                if (i >= 4) {
                    //前台只展示五个
                    break;
                }
            }
            //     添加数据插入页面 css样式修改
            var result = func(data);
            $("#hotContainer").html(result);
            //为最后一个<li>添加样式
            $("#hotContainer>li:last-child").add("right_border");
        }
    });
});
//加载楼层信息
$(function getFloors() {
    $.ajax({
        url: "http://192.168.137.1:8080/mall/product/findfloor.do",
        xhrFields: {withCredentials: true},//允许跨域请求携带cookie数据
        crossDomain: true,//跨域请求
        success: function (rs) {
            console.log(rs);
           //判断是否成功
            if (rs.status == 1){
                return;
            }
            //一楼数据 获取数据(修改图片路径) 插件预编译 插入页面

            var tpl1 = $("#floor_odd_top").html();
            var func = Handlebars.compile(tpl1);
            var data1 = rs.data.firstFloor;
            for (var i=0;i<data1.length;i++){
                // data1[i].iconUrl=""http://192.168.137.1:8080/mall" + data1[i].iconUrl;
            }
            // $("#floor_one_m").html();
            // $("#floor_one_m").append(func(data1));
            var result = func(data1);
            $("#floor_one_m").html(result);

            //2楼
            var data2 = rs.data.secondFloor;
            for (var i=0;i<data2.length;i++){
                // data2[i].iconUrl=data2[i].iconUrl;
            }
            var func = Handlebars.compile($("#floor_odd_top").html());
            $("#floor_two_m").html();
            $("#floor_two_m").append(func(data2));
            //3楼
            var data3 = rs.data.thirdFloor;
            for (var i=0;i<data3.length;i++){
                // data3[i].iconUrl=data3[i].iconUrl;
            }
            var func = Handlebars.compile($("#floor_odd_top").html());
            $("#floor_three_m").html();
            $("#floor_three_m").append(func(data3));
            //4楼
            var data4 = rs.data.forthFloor;
            for (var i=0;i<data4.length;i++){
                // data4[i].iconUrl=data4[i].iconUrl;
            }
            var func = Handlebars.compile($("#floor_odd_top").html());
            $("#floor_four_m").html();
            $("#floor_four_m").append(func(data4));
        }
    })
});
//产品分类
$(function product_sort() {
    $(".iten").live({
        mouseenter:function () {
          //获取对象
          var children_div = $(this).children("div");
          var t_this = $(this);
          //显示子分类
            t_this.find('item_hd').css({border:'none'});
            t_this.prev().find('item_hd').css({border: 'none'});
            //
            children_div.show();
            $(this).addClass("selected");
        },

        mouseleave:function () {
            //获取对象
            var children_div = $(this).children("div");
            var t_this = $(this);

            //隐藏子分类
            t_this.find('item_hd').css({'border-bottom':'1px dotted white'});
            t_this.prev().find('item_hd').css({'border-bottom':'1px dotted white'});
            //
            children_div.hide();
            $(this).removeClass("selected");
        }
    });
});
//产品搜索
$(function search() {
    $("#searchBtn").click(
        function () {


        })
});






//     return{
//         getParam:getParam,
//         getHotProduct:getHotProduct
//     };
//
// });