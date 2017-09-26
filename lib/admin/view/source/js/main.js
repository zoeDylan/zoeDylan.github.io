const
    _page = require('./module/page'),
    _list = require('./module/list'),
    _edit = require('./module/edit'),
    _data = require('./module/data'),
    _look = require('./module/look');

_page.to(0);
window._edit = _edit;
window._page = _page;
window._data = _data;
window._list = _list;
window._look = _look;