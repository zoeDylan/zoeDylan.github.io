const
    _list = require('./module/list'),
    _look = require('./module/look');

_list.getList();

let canHashChange = true;
window.onhashchange = (e) => {
    if (canHashChange) {
        if ($('.runCode').length > 0) {
            $('.runCode').remove();
            canHashChange = false;
            location.hash = e.oldURL.replace(/http.+\#/g, '');
        } else if (e.newURL.indexOf('#id_') == -1) {
            $('#__look').removeClass('active');
            location.hash = '';
        } else if (e.newURL.indexOf('#id_') > -1) {
            _look(_list.dataList[location.hash.replace('#id_', '')]);
        }
    } else {
        canHashChange = true;
    }
}


window.list = _list;