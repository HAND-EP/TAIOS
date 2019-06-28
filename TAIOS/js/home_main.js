require.config({
    baseUrl:"../js",
    shim:{
        'jquery.SuperSlide.2.1.1':['jquery.1.6.2.min'],
        'jquery.url':['jquery.1.6.2.min'],
    }
});
require(['jquery-1.6.2.min','jquery.SuperSlide.2.1.1','jquery.url','handlebars-v4.1.2','common','home'],
    function (jquery,jquery_SuperSlide,jquery_url,handlebars,common,home) {
       $(function () {
           //加载登录用户信息
           common.getUserInfo();
           //用户登出
           common.logout();
           //加载产品分类
           home.getParam();
           //加载热销商品
            home.getHotProduct();
       });
    });