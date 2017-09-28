const
    _listTp = require('./list.jsx'),
    _loading = require('../loading'),
    _look = require('../look');
let _dataList = {};

let canGetList = true;

function getList() {
    if (canGetList) {
        canGetList = false;
        $.ajax({
                //post | get
                type: "get",
                url: "./lib/db/files/mdList.json",
                //txml | html | script | json | jsonp | text
                dataType: "json",
                success: function(res) {
                    _dataList = res;
                    ReactDOM.render( < _listTp list = { _dataList }
                            />, document.getElementById('__list'));
                            _loading.hide();
                            if (location.hash.indexOf('#id_') > -1) {
                                _look(_dataList[location.hash.replace('#id_', '')]);
                            } else {
                                location.hash = '';
                            }
                        },
                        error: function(err) {

                        },
                        complete: function(val) {
                            canGetList = true;
                        }
                });
        }
    }


    module.exports = {
        getList: getList,
        get dataList() {
            return _dataList;
        }
    }