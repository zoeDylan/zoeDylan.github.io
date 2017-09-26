const
    _data = require('./data'),
    _list = (() => {
        const
            _vue = new Vue({
                el: '#__list',
                data: {
                    list: {},
                    saveTitle: ''
                },
                methods: {
                    changeVal: (id, title) => {
                        if (title != _vue.saveTitle) {
                            _data.updateTitle(id, title, (data) => {
                                _vue.$set(_vue.list, data.id, data);
                            });
                        }
                        _vue.saveTitle = "";
                    },
                    create: (title) => {
                        _data.create(title, (data) => {
                            _vue.$set(_vue.list, data.id, data);
                        });
                    },
                    remove: (id) => {
                        if (confirm(`警告，你正在删除:【${_vue.list[id].title}】,请确认是否删除.`)) {
                            _data.remove(id);
                            Vue.delete(_vue.list, id);
                        }
                    }
                }
            });

        let canGetList = true;

        function getList() {
            if (canGetList) {
                canGetList = false;
                $.ajax({
                    //post | get
                    type: "get",
                    url: "/list",
                    //txml | html | script | json | jsonp | text
                    dataType: "json",
                    success: function(res) {
                        _vue.list = res;
                    },
                    error: function(err) {

                    },
                    complete: function(val) {
                        canGetList = true;
                    }
                });
            }
        }

        return {
            getList: getList,
            vue: _vue
        }
    })();


module.exports = _list;