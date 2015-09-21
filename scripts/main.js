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
				$mainBody.append('<span id='+ zzz + ' class=' + '"spanich"' + '><img src=' + show[i].image + ' id=' + '"backgroundImg"' + '><div class=' + 'descriptionDiv' + '>' + show[i].desc + '</div></span>');
				zzz++;
			}
			var spanich = document.getElementsByClassName('.spanich');
			spanich.addEventListener('click', enlarge);
			function enlarge (e) {
				spanich.style.width('100%;');
				spanich.style.height('100%;');
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