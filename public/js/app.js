
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
	// showImgurKits();
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

// Tracker.prototype.incrementKittens = function(photo) {
// 	var index = this.leftphoto(photo);
// 	var index = this.rightphoto(photo);
// 	this.photoArray[index][1]++;
// };

// // vote.photoArray.push(new Photo('http://i.imgur.com/pPA0iM0.jpg'));
// // vote.photoArray.push(new Photo('http://i.imgur.com/7ykJ1xi.jpg'));
// // vote.photoArray.push(new Photo('http://i.imgur.com/n91EiPd.jpg'));
// // vote.photoArray.push(new Photo('http://i.imgur.com/LDiTFeQ.jpg'));
// // vote.photoArray.push(new Photo('http://i.imgur.com/ywavhKp.jpg'));
// // vote.photoArray.push(new Photo('http://i.imgur.com/9Fg6CZS.jpg'));
// // vote.photoArray.push(new Photo('http://i.imgur.com/leaDJOY.jpg'));
// // vote.photoArray.push(new Photo('http://i.imgur.com/XA0PRs2.jpg'));
// // vote.photoArray.push(new Photo('http://i.imgur.com/rkO8XVX.jpg'));
// // vote.photoArray.push(new Photo('http://i.imgur.com/QBZjjMe.jpg'));
// // vote.photoArray.push(new Photo('http://i.imgur.com/aGJW6lS.jpg'));
// // vote.photoArray.push(new Photo('http://i.imgur.com/60maZWt.jpg'));
// // vote.photoArray.push(new Photo('http://i.imgur.com/u9wzm0f.jpg'));
// // vote.photoArray.push(new Photo('http://i.imgur.com/vyz8MGP.jpg'));

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


//vote.makeKittenChart();
$('#nextbutton').hide();
//showImgurKits();
//vote.renderPhotos();

});



