const
    Frame = require('./frame.jsx'),
    ReactMarkdown = require('react-markdown'),
    reactDom = require('react-dom');

module.exports = (id, text) => {
    document.getElementById('__edit').innerText='';
    reactDom.render(< Frame tid={id} text={text} />, document.getElementById('__edit'));
};