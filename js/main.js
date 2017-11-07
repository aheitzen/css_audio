var audio = $("#sound")[0];

var audio = $("#sound")[0];
$(".fa.fa-music").mouseenter(function() {
  audio.play();
});

$(".fa.fa-music").mouseout(function() {
  audio.pause();
});

