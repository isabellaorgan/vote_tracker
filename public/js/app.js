
'use strict';

$(document).ready(function() {

var photoArray = [];

function ajaxHarvest(ary, cb) {
	$.ajax({
		url: 'https://api.imgur.com/3/album/DDoWy',
		method: 'GET',
		headers: {
			'Authorization': 'Client-ID d40262efeb1bb8d'
		}
	})

	.done(function(res) {
		
		cb(res.data.images);  
	})

	.fail(function(err) {
		console.log(err);
	});
}
	
function showImgurKits() {
	var randPic = Math.floor(Math.random() * vote.photoArray.length + 1);
	var dispRandPic = '<img src="' + vote.photoArray[randPic].link + '">';
	$('#pic Container').html(dispRandPic);
}
$('#another').click(function() {

});

var Photo = function(fileLocation) {
	this.fileLocation = fileLocation;
	this.votes = 1;
	this.index = [];
};

var Tracker = function() {
	this.photoArray = [];
	this.leftPhoto = '';
	this.rightPhoto = '';
};

var vote = new Tracker();

Tracker.prototype.getPhoto = function() {
	this.leftPhoto = this.photoArray[Math.floor(Math.random() * (this.photoArray.length - 1))];
	this.rightPhoto = this.photoArray[Math.floor(Math.random() * (this.photoArray.length - 1))];
	while (this.rightPhoto.link === this.leftPhoto.link) {
		this.leftPhoto = this.photoArray[Math.floor(Math.random() * (this.photoArray.length - 1))];
	}
};

Tracker.prototype.renderPhotos = function() {
	rphoto.attributes[1].value = this.rightPhoto.link;
	lphoto.attributes[1].value = this.leftPhoto.link;
};

Tracker.prototype.leftphoto = function() {
	console.log ("left was clicked");
	console.log("left is " + vote.leftPhoto.link);
	vote.leftPhoto.vote++;
	console.log("left has " + vote.leftPhoto.vote);
	results.innerHTML = ('Left has ' + vote.leftPhoto.vote + ' and right has ' + vote.rightPhoto.vote);
	vote.makeKittenChart();
	$('#nextbutton').show();
};
	
Tracker.prototype.makeKittenChart = function() {
	console.log("Make Kitten Chart");
	console.log();
	var leftValue = vote.leftPhoto.vote;
	var rightValue = vote.rightPhoto.vote;
	
	var ctx = document.getElementById('kittenchart').getContext('2d');
	console.dir(ctx);
	var myDoughnutChart = new Chart(ctx).Doughnut([{
		value: leftValue,
		color: "blue"
	}, {
		value: rightValue,
		color: "red"
	} ]);
};

Tracker.prototype.rightphoto = function() {
	console.log ("right was clicked");
	console.log("right is " + vote.rightPhoto.link);
	vote.rightPhoto.vote++;
	console.log("right has " + vote.rightPhoto.vote);
	results.innerHTML = ('Left has ' + vote.leftPhoto.vote + ' and right has ' + vote.rightPhoto.vote);
	vote.makeKittenChart();
	$('#nextbutton').show();
};

var lphoto = document.getElementById('leftphoto');
var rphoto = document.getElementById('rightphoto');
var results = document.getElementById('results');
var nextbutton = document.getElementById('nextbutton');

rphoto.addEventListener('click', vote.rightphoto);
lphoto.addEventListener('click', vote.leftphoto);

nextbutton.addEventListener('click', function (){
	vote.getPhoto();
	vote.renderPhotos();
	vote.makeKittenChart();
	$('#nextbutton').hide();
});

ajaxHarvest(vote.photoArray,function(data){
	vote.photoArray = data;
	vote.getPhoto();
	vote.renderPhotos();
	vote.makeKittenChart();
});

$('#nextbutton').hide();

});



