const view = require('./view.jsx');
let canGetMD = true;


module.exports = (id) => {
    if (id && canGetMD) {
        canGetMD = false;
        $.ajax({
            //post | get
            type: "get",
            url: `./lib/md/files/${id}.md`,
            //txml | html | script | json | jsonp | text
            dataType: "text",
            success: function(res) {
                view(res);
            },
            error: function(err) {

            },
            complete: function(val) {

            }
        });
    }
};