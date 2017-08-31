const
    fe = $('.loading');

module.exports = {
    show: () => {
        fe.addClass('active');
    },
    hide: () => {
        fe.removeClass('active');
    }
}