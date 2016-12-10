




var id = 0;

var goods = [
	{
		good_id : id++,
		good_url : 'dist/img/good.png',
		good_name : '物品1',
		good_price : 10
	},
	{
		good_id : id++,
		good_url : 'dist/img/good.png',
		good_name : '物品2',
		good_price : 20
	},
	{
		good_id : id++,
		good_url : 'dist/img/good.png',
		good_name : '物品3',
		good_price : 30
	}
];



var Static = {
	good : 'goodlist'
}

$('.add').click(function () {
	addGood( $(this).data('id') );
});

function addGood ( id ) {
	var goodlist = localStorage.getItem( Static.good );
	console.log(goodlist);
	if ( goodlist ) {
		goodlist = JSON.parse( goodlist );
		goodlist.push( id );
	} else {
		// 购物车没东西
		goodlist = [ id ];
	}
	localStorage.setItem( Static.good, JSON.stringify( goodlist ) );
}










