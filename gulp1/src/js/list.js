/*
* @Author: Marte
* @Date:   2016-12-08 22:11:52
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-09 10:24:46
*/

$.get('/list.json',{}, function (data) {
    console.log(data);
    for ( var i = 0; i < data.length; i++ ) {
        console.log(data);
        var tpldata = {
            list : data
        }
        var html = template('goodtpl', tpldata);
        document.getElementById('content').innerHTML = html;
    }
});

