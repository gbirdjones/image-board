'use strict';

var $close = $('#close');
var $heart = $('#heart');
var $open = $('#uploadBox');
var $img = $('#img');
var $desc = $('#desc');
var $submit = $('#submit');
var $imgError = $('#imgError');
var $descError = $('#descError');
var $mainBody = $('#main');
var $backgroundImg = $('#backgroundImg');
var zzz = 0


$heart.on('click', openUpload);
$close.on('click', closeFunc);
$submit.on('click', uploadFunc);

function load() {
	$.get (
		'http://tiyfe.herokuapp.com/collections/nbd',
		function(show) {
			$mainBody.html('');
			console.log(show.length);
			for(var i=0; i<show.length; i++) {
				$mainBody.append('<div id=z'+ zzz + ' class=' + '"spanich"' + '><img src=' + show[i].image + ' id=' + '"backgroundImg"' + '><div class=' + 'descriptionDiv' + '>' + show[i].desc + '</div></div>');
				
				var spanich = $('#z'+zzz);
				spanich.on('click', enlarge);
				function enlarge (e) {
					console.log(zzz);
					console.log('enlargeFunc', $(this));
					$(this).toggleClass('large');
				}
				zzz++;
			}
		},
			
		'json'
	)
}
load();

function closeFunc(e) {
	$open.hide();
}

function openUpload(e) {
	$open.toggle('fast');
}

function uploadFunc(e) {
	var imgval = $img.val();
	var desc = $desc.val();
	console.log(imgval.indexOf('.png'));
	if (!imgval.indexOf('.png')) {
		$imgError.show();
		console.log(imgval);
	} else if (!imgval.indexOf('.jpeg')) {
		$imgError.show();
	} else if (!desc) {
		$descError.show();
	} else {

	$.post(
		'http://tiyfe.herokuapp.com/collections/nbd',
		{
			image: imgval,
			desc: desc
		}
		)

	$open.hide();
}
load();

}