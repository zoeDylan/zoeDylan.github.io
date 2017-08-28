const
    view = require('./view.jsx'),
    _page = require('../page'),
    _edit = (() => {
        /**
         * 编辑文件
         * @param {*string} id 文件id
         */
        function edit(id) {
            if (id) {
                $.ajax({
                    //post | get
                    type: "post",
                    url: "/edit",
                    data: {
                        id: id
                    },
                    //txml | html | script | json | jsonp | text
                    dataType: "text",
                    success: function(res) {
                        view(id, res);
                        _page.to(2);
                    },
                    error: function(err) {

                    },
                    complete: function(val) {

                    }
                });
            }
        }
        return {
            edit: edit
        }
    })();



module.exports = _edit;