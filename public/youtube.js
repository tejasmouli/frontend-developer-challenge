var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    playerVars: { 'rel': 0 },
    events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
    event.target.playVideo();
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function() {
      player.playVideo();
    });
    
    var pauseButton = document.getElementById("pause-button");
    pauseButton?.addEventListener("onClick", function() {
      player.pauseVideo();
    });
}

var done = false;
function onPlayerStateChange(event) {
    console.log(event.data);
}



function stopVideo() {
    player.stopVideo();
}