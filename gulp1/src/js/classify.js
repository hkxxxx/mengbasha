

    var $tab_li = $('.section-left li');
    // touch.on('.section-left li', 'tap', function(ev) {

    // });

    $(".section-left li").click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        var index = $tab_li.index(this);
        $('div.deta ').eq(index).show().siblings().hide();
    });

     $("footer li a").click(function(){
        console.log(this);
        $(this).addClass('color').parents().siblings().find('a').removeClass('color');

        // var index = $tab_li.index(this);
        // $('div.deta ').eq(index).show().siblings().hide();
    });