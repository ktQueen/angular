(function(){
    var public={
        // 参数定义
        parameter:{
        },
        //程序入口
        init: function () {
            var that = this;
            var para = that.parameter;
            that._execute();
            that._bind();
        },
        //事件绑定
        _bind: function () {
            var that = this;
            var para = that.parameter;
        },
        //执行
        _execute: function () {
            var that = this;
            var para = that.parameter;
            that.initpage();
        },
        //设置页面字体大小
        initpage: function (){
            var view_width = document.getElementsByTagName('html')[0].getBoundingClientRect().width;
            var _html = document.getElementsByTagName('html')[0];
            view_width>640?_html.style.fontSize=640/16 +'px':_html.style.fontSize =view_width/16+'px';
        }
    };
    public.init();
})();