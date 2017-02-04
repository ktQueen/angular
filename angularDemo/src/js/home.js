$( document ).ready( function () {
    var home = {
        //参数定义
        parameter: {
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
        }
    };
    home.init();
});

