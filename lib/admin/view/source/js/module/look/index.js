const view = require('./view.jsx');


module.exports = (id, text) => {
    view(text, _list.vue.list[id]);
};