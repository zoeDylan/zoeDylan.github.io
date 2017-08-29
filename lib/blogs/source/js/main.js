const
    _list = require('./module/list'),
    _look = require('./module/look');


_list.getList();

if (location.hash.indexOf('#id_') > -1) {
    _look(location.hash.replace('#id_', ''));
}
window._look = _look;