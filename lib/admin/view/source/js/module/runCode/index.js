const
    tp = '<div class="runCode"><div class="close glyphicon glyphicon-remove"></div><div class="iframe"></div></div>',
    view = require('./view.jsx');

module.exports = (code) => {
    let
        now = $(tp),
        id = 'runCode' + new Date().getTime();
    now.find('.iframe').attr('id', id);
    now.find('.close').click(() => {
        now.remove();
    });

    $('body').append(now);
    view(id, code);
    $('#' + id).find('iframe').attr('sandbox', 'allow-scripts allow-modals');
}