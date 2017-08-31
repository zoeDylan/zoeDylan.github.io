const view = require('./view.jsx'),
    _loading = require('../loading');
let
    cacheText = {},
    canGetMD = true;

//保存到本地数据
function saveCache() {
    localStorage.setItem('saveText', JSON.stringify(cacheText));
}

//读取本地数据
function getCache() {
    let cache;
    try {
        cache = JSON.parse(localStorage.getItem('saveText'));
    } catch (error) {
        console.log(error);
        localStorage.removeItem('saveText');
    }
    cacheText = cache || {};
}

getCache();

module.exports = (item) => {
    const id = item && item.id || '';
    if (id && canGetMD) {
        location.hash = '#id_' + id;
        _loading.show();
        if ((Object.keys(cacheText).indexOf(id) > -1) && (cacheText[id]._update == item._update)) {
            view(cacheText[id].text, item);
            _loading.hide();
        } else {
            canGetMD = false;
            $.ajax({
                //post | get
                type: "get",
                url: `./lib/md/files/${id}.md`,
                //txml | html | script | json | jsonp | text
                dataType: "text",
                success: function(res) {
                    cacheText[id] = {
                        _update: item._update,
                        text: res
                    };
                    saveCache();
                    view(res, item);
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
    }
};