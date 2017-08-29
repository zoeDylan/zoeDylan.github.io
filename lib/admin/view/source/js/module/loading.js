const
    fe = $('#__loading'),
    tp = '<span></span>';

module.exports = (txt) => {
    let now = $(tp);
    now.html(txt);
    fe.append(now);
    setTimeout(() => {
        now.addClass('active');
    }, 300);
    setTimeout(() => {
        now.remove();
    }, 3000);
}