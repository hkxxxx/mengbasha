

$("footer li a").click(function(){
        console.log(this);
        $(this).addClass('color').parents().siblings().find('a').removeClass('color');

        // var index = $tab_li.index(this);
        // $('div.deta ').eq(index).show().siblings().hide();
    });
var id = 0;

var goods = [
    {
        good_id : id++,
        good_url : 'dist/img/01.png',
        good_name : '韩伊儿欧韩街拍必备超宽领子拼仿皮草毛条短款棉衣(430515403)',
        good_price : 299
    },
    {
        good_id : id++,
        good_url : 'dist/img/02.png',
        good_name : '柏橡2016韩伊儿欧韩街拍必备超宽领子拼仿皮草毛条短款棉衣',
        good_price : 259
    },
    {
        good_id : id++,
        good_url : 'dist/img/03.png',
        good_name : '柏橡2016moshine韩伊儿欧韩街拍必备超宽领子拼仿皮草毛条短款棉衣',
        good_price : 280
    }
    ,
    {
        good_id : id++,
        good_url : 'dist/img/04.png',
        good_name : '柏橡2016moshine韩伊儿欧韩街拍必备超宽领子拼仿皮草毛条短款棉衣',
        good_price : 280
    }
    ,
    {
        good_id : id++,
        good_url : 'dist/img/05.png',
        good_name : '柏橡2016moshine韩伊儿欧韩街拍必备超宽领子拼仿皮草毛条短款棉衣',
        good_price : 280
    }
    ,
    {
        good_id : id++,
        good_url : 'dist/img/06.png',
        good_name : '柏橡2016moshine韩伊儿欧韩街拍必备超宽领子拼仿皮草毛条短款棉衣',
        good_price : 280
    }
];


var Static = {
    good : 'goodlist'
}

function init () {
    var goodlist = localStorage.getItem( Static.good );
    console.log(goodlist);
    if ( goodlist ) {
        goodlist = JSON.parse( goodlist );
        var data = [];
        for ( var i = 0; i < goodlist.length; i++ ) {
            data.push( getGood( goodlist[i] ) );
        }
        render( data );
    } else {
        alert( '此购物车没有任何东西' );
    }
}

init();

function render ( gooddata ) {

    var tpldata = {
        title : '购物车',
        list : gooddata
    }

    var html = template('goodtpl', tpldata);
    document.getElementById('content').innerHTML = html;
    console.log(html);


    $('.del').click( function () {
        var $this = $(this);
        removeGood( $(this).data('id'), function ( isSuccess ) {
            if ( isSuccess ) {
                $this.parents('.carlist').remove();
                init1();

            } else {
                alert( '删除失败，请重试' );
            }
        } );
    } );

}

function removeGood ( id, callback ) {
    var goodlist = localStorage.getItem( Static.good );
    goodlist = JSON.parse( goodlist ) || [];
    for ( var i = 0; i < goodlist.length; i++ ) {
        if ( goodlist[i] == id ) {
            goodlist.splice( i, 1 );
            localStorage.setItem( Static.good, JSON.stringify( goodlist ) );
            callback( true );
            return;
        }
    }
    callback( false );
}

function getGood ( id ) {
    for ( var i = 0; i < goods.length; i++ ) {
        if ( goods[i].good_id == id ) {
            return goods[i];
        }
    }

}




$('.icon-xuankuang').click(function(){
    if($(".icon-xuankuang").is('.color')){
        $(".icon-xuankuang").removeClass("color");
        $('button span').html("");
        $('#total span').html("");
    }else{
        $(".icon-xuankuang").addClass("color");

        init1();
    }

});

function init1 () {

    var goodlist = localStorage.getItem( Static.good );

    goodlist = JSON.parse( goodlist ) || [];

    var total = 0;

    for ( var i = 0; i < goodlist.length; i++ ) {
        $('button span').html(goodlist.length);
        total += getPrice( goodlist[i] );
    }

    $('#total span').html( '￥' + total );

}

function getPrice ( id ) {
    for ( var i = 0; i < goods.length; i++ ) {
        if ( goods[i].good_id == id ) {
            return goods[i].good_price;
        }
    }
}




