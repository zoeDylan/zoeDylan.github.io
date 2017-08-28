const
    tag = $('#__pageTag'),
    page = $('#__page'),
    _list = require('./list'),
    nowNum = 0;

$('#__page').height(innerHeight - tag.height() - 1);

tag.find('li').click(function() {
    to($(this).index());
});

function to(num) {
    page.children().removeClass('active').eq(num).addClass('active');
    tag.children().removeClass('active').eq(num).addClass('active');
    if (num === 0) {
        _list.getList();
    }
}

module.exports = {
    to: to,
}