$(document).ready(function() {

'use strict';

$.ajax({
	url: 'https://api.imgur.com/3/album/DDoWy.json',
	method: 'GET',
	headers: {
		'Authorization': 'Client-ID d40262efeb1bb8d'
	}
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

Tracker.prototype.getPhoto = function() {
	this.leftPhoto = this.photoArray[Math.floor(Math.random() * (this.photoArray.length - 1))];
	this.rightPhoto = this.photoArray[Math.floor(Math.random() * (this.photoArray.length - 1))];
	console.log(this.rightPhoto);
	while (this.rightPhoto === this.leftPhoto) {
		this.leftPhoto = this.photoArray[Math.floor(Math.random() * (this.photoArray.length - 1))];
	}
};

Tracker.prototype.renderPhotos = function() {
	rphoto.attributes[1].value = this.rightPhoto.fileLocation;
	lphoto.attributes[1].value = this.leftPhoto.fileLocation;
};

Tracker.prototype.leftphoto = function() {
	console.log ("left was clicked");
	console.log("left is " + vote.leftPhoto.fileLocation);
	vote.leftPhoto.votes++;
	console.log("left has " + vote.leftPhoto.votes);
	results.innerHTML = ('Left has ' + vote.leftPhoto.votes + ' and right has ' + vote.rightPhoto.votes);
	$('#nextbutton').show();
};

Tracker.prototype.rightphoto = function() {
	console.log ("right was clicked");
	console.log("right is " + vote.rightPhoto.fileLocation);
	vote.rightPhoto.votes++;
	console.log("right has " + vote.rightPhoto.votes);
	$('#nextbutton').show();
};

Tracker.prototype.incrementKittens = function(photo) {
	var index = this.leftphoto(photo);
	var index = this.rightphoto(photo);
	this.photoArray[index][1]++;
};

var vote = new Tracker();

vote.photoArray.push(new Photo('img/kittens/cat1.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat2.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat3.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat4.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat5.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat6.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat7.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat8.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat9.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat10.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat11.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat12.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat13.jpg'));
vote.photoArray.push(new Photo('img/kittens/cat14.jpg'));

var lphoto = document.getElementById('leftphoto');
var rphoto = document.getElementById('rightphoto');
var results = document.getElementById('results');
var nextbutton = document.getElementById('nextbutton');

rphoto.addEventListener('click', vote.rightphoto);
lphoto.addEventListener('click', vote.leftphoto);
nextbutton.addEventListener('click', function (){
	vote.getPhoto();
	vote.renderPhotos();
	$('#nextbutton').hide();
});

vote.getPhoto();
vote.renderPhotos();
$('#nextbutton').hide();

});


// 
// vote.waitingForVote();
// console.dir(vote);

// voteButton.addEventListener('click', waitingForVote);

// Photo.prototype.highlight = function() {
// 	var getPhoto = document.getElementById('photos');
// 	newDiv.
// };

// 	// highlight() // CSS for highlight later
// }
// 	// drawTheChart()?
// 	// giveUserOptionToVoteAgain()?

// Display Winner State

// Tracker.prototype.displayWinner = function() {
// 	action4()
// 	action5()
// 	action6()
// }

