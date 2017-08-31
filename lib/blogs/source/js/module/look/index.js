const view = require('./view.jsx'),
    _loading = require('../loading');
let canGetMD = true;


module.exports = (id) => {
    if (id && canGetMD) {
        location.hash = '#id_' + id;
        canGetMD = false;
        _loading.show();
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
                alert('网络错误,请重试！');
            },
            complete: function(val) {
                _loading.hide();
                canGetMD = true;
            }
        });
    }
};