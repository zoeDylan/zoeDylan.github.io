const
    _astrictTime = require('./astrictTime'),
    _loading = require('./loading'),
    _data = (() => {

        /**
         * 更新标题
         * @param {* string} id 
         * @param {* string} title 
         */
        function updateTitle(id, title) {
            if (_astrictTime('updateTime')) {
                _loading('更新标题');
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
                    success: function(res) {
                        _loading('更新标题成功!');
                    },
                    error: function(err) {
                        _loading('更新标题遭遇网络错误!');
                    },
                    complete: function(val) {}
                });
            }
        }

        /**
         * 创建
         */
        function create(title, fn) {
            if (_astrictTime('create')) {
                _loading('创建文章!');
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
                        _loading('创建文章完成!');
                        fn(res);
                    },
                    error: function(err) {
                        _loading('创建文章遭遇网络错误!');
                    },
                    complete: function(val) {}
                });
            }
        }
        //删除
        function remove(id) {
            _loading('删除文章');
            $.ajax({
                //post | get
                type: "post",
                url: "/remove",
                data: {
                    id: id
                },
                //txml | html | script | json | jsonp | text
                dataType: "json",
                success: function(res) { _loading('删除文章完成!'); },
                error: function(err) {
                    _loading('删除文章遭遇网络错误!');
                },
                complete: function(val) {}
            });
        }
        //保存
        function updateCont(id, cont) {
            _loading('保存文章!');
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
                success: function(res) { _loading('保存文章成功'); },
                error: function(err) { _loading('保存文章遭遇网络错误'); },
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