const
    view = require('./view.jsx');


module.exports = (id) => {
    if (id) {
        $.ajax({
            //post | get
            type: "get",
            url: `./lib/md/files/${id}.md`,
            //txml | html | script | json | jsonp | text
            dataType: "text",
            success: function (res) {
                view(res);
            },
            error: function(err) {

            },
            complete: function(val) {

            }
        });
    }
};