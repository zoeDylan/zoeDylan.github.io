/**
 * 页面添加  #__list里面
 * 已取消vue的使用
 *
 <!-- <button v-for="item in list" @click="location.hash='#id_'+item.id" type="button" class="list-group-item">
                <span>{{item.title}}</span>
                <span class="time">{{new Date(item._update).toLocaleDateString()}}</span>
</button> -->
 */


const
    _loading = require('./loading'),
    _vue = new Vue({
        el: '#__blogs',
        data: {
            list: {}
        }
    });


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
                _vue.list = res;
                _loading.hide();
                if (location.hash.indexOf('#id_') > -1) {
                    _look(_vue.list[location.hash.replace('#id_', '')]);
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
    vue: _vue
}