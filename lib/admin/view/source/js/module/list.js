const
    _data = require('./data'),
    _list = (() => {
        const
            _vue = new Vue({
                el: '#__list',
                data: {
                    list: {}
                },
                methods: {
                    changeVal: (id, title) => {
                        _data.updateTitle(id, title, (data) => {
                            _vue.list[id] = data;
                        });
                    },
                    create: (title) => {
                        _data.create(title, (data) => {
                            _vue.$set(_vue.list, data.id, data);
                        });
                    },
                    remove: (id) => {
                        _data.remove(id);
                        Vue.delete(_vue.list, id);
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