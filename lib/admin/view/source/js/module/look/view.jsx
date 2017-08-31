const
    reactDom = require('react-dom'),
    Frame = require('./frame.jsx');

module.exports = (text, item) => {
    $("#__look").height(innerHeight).addClass('active').html('');
    reactDom.render(<Frame text={text} item={item} />, document.getElementById('__look'));
}