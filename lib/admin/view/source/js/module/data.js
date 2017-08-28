const
    _astrictTime = require('./astrictTime'),
    _data = (() => {

        /**
         * 更新标题
         * @param {* string} id 
         * @param {* string} title 
         */
        function updateTitle(id, title) {
            if (_astrictTime('updateTime')) {
                $.ajax({
                    //post | get
                    type: "post",
                    url: "/updateTitle",
                    data: {
                        id: id,
                        title: title
                    },
                    //txml | html | script | json | jsonp | text
                    dataType: "json",
                    success: function(res) {},
                    error: function(err) {},
                    complete: function(val) {}
                });
            }
        }

        /**
         * 创建
         */
        function create(title, fn) {
            if (_astrictTime('create')) {
                $.ajax({
                    //post | get
                    type: "post",
                    url: "/create",
                    data: {
                        title: title
                    },
                    //txml | html | script | json | jsonp | text
                    dataType: "json",
                    success: function(res) {
                        fn(res);
                    },
                    error: function(err) {},
                    complete: function(val) {}
                });
            }
        }
        //删除
        function remove(id) {
            $.ajax({
                //post | get
                type: "post",
                url: "/remove",
                data: {
                    id: id
                },
                //txml | html | script | json | jsonp | text
                dataType: "json",
                success: function(res) {},
                error: function(err) {},
                complete: function(val) {}
            });
        }
        //保存
        function updateCont(id, cont) {
            $.ajax({
                //post | get
                type: "post",
                url: "/updateCont",
                data: {
                    id: id,
                    cont: cont
                },
                //txml | html | script | json | jsonp | text
                dataType: "json",
                success: function(res) {},
                error: function(err) {},
                complete: function(val) {}
            });
        }
        return {
            updateTitle: updateTitle,
            create: create,
            remove: remove,
            updateCont: updateCont
        }
    })();



module.exports = _data;