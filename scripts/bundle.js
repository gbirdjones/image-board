(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
var zzz = 0;

$heart.on('click', openUpload);
$close.on('click', closeFunc);
$submit.on('click', uploadFunc);

function load() {
	$.get('http://tiyfe.herokuapp.com/collections/nbd', function (show) {
		$mainBody.html('');
		console.log(show.length);
		for (var i = 0; i < show.length; i++) {
			var enlarge = function enlarge(e) {
				console.log(zzz);
				console.log('enlargeFunc', $(this));
				$(this).toggleClass('large');
			};

			$mainBody.append('<div id=z' + zzz + ' class=' + '"spanich"' + '><img src=' + show[i].image + ' id=' + '"backgroundImg"' + '><div class=' + 'descriptionDiv' + '>' + show[i].desc + '</div></div>');

			var spanich = $('#z' + zzz);
			spanich.on('click', enlarge);

			zzz++;
		}
	}, 'json');
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

		$.post('http://tiyfe.herokuapp.com/collections/nbd', {
			image: imgval,
			desc: desc
		});

		$open.hide();
	}
	load();
}

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map