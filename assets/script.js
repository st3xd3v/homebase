/*function loadSong() {
$.get( "assets/play.php", function(data) {
var player = '<video id="ended" style="width:0;height:0;border:0;display:none;" width="400" autoplay><source src="'+data+'" type="video/mp4"></video>';
  $("#dom").html(player);
});


}

loadSong();

setTimeout(function(){
video = $("video").get(0);
video.addEventListener("ended", function() {
    loadSong();
});
}, 10000);
*/

/*
setInterval(function(){
	changeBackground();

}, 5000);*/

setTimeout(function(){
		$(".window").fadeIn(800);
	}, 1000);

addBackground();

function addBackground() {
$.get( "assets/background.php", function(data) {
var currentback = $(".background").css("background-image");
if(currentback != "url("+data+")") {

$(".background").css("background-image", "url("+data+")");
$("body").css("background-image", "url("+ data +")");
$(".background").fadeIn(80);
$(".background").css("filter", "blur(5px)");
} else {
addBackground();
}
});
}


function changeBackground() {
	$(".background").fadeOut(100);
	addBackground();

} 

twemoji.parse(document.body);

$('.emoji').each(function(i, obj) {
    $(this).attr("height", "20");
});
