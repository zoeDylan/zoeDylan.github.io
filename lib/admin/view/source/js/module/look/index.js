const
    view = require('./view.jsx'),
    _loading = require('../loading');


module.exports = (id, text) => {
    if (id && text) {
        view(text, _list.vue.list[id]);
    } else {
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
                view(res, _list.vue.list[id]);
            },
            error: function(err) {

            },
            complete: function(val) {

            }
        });
    }
};