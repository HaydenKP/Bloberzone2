const button = document.getElementById("backgroundbtn");
const list = document.getElementById("dropdown-content");
const songbutton = document.getElementById("change-station");
const songlist = document.getElementById("song-content");
const background = document.getElementById("bg");

songlist.style.opacity = 0;

function loadPlayer() {
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function changeVideo(videoId) {
  player.loadVideoById(videoId);
}

function setVolume(volume) {
  player.setVolume(volume);
}

loadPlayer();

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: 'D1zR9DkYgu4',
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      rel: 0,
    },
  });

// Function to create dropdown menu for background

button.addEventListener("click", (event) => {
  console.log("Button clicked!");
  var list = document.getElementById("dropdown-content");
  var bgElements = document.getElementsByClassName("bg");

  if (list.style.opacity == 0) {
    list.style.opacity = 1;
    for (var i = 0; i < bgElements.length; i++) {
      bgElements[i].style.pointerEvents = "all";
    }
  } else {
    list.style.opacity = 0;
    for (var i = 0; i < bgElements.length; i++) {
      bgElements[i].style.pointerEvents = "none";
    }
  }
});

// Function to create dropdown menu for song list
songbutton.addEventListener("click", (event) => {
  var songlist = document.getElementById("song-content");
  var station = document.getElementsByClassName("songbtn");

  if (songlist.style.opacity == 0) {
    songlist.style.opacity = 1;
    for (var i = 0; i < station.length; i++) {
      station[i].style.pointerEvents = "all";
    }
  } else {
    songlist.style.opacity = 0;
    for (var i = 0; i < station.length; i++) {
      station[i].style.pointerEvents = "none";
    }
  }
});

    var playButton = document.getElementById('playbtn');
    playButton.addEventListener('click', function() {
      player.playVideo();
    });

    var pauseButton = document.getElementById('pausebtn');
    pauseButton.addEventListener('click', function() {
      player.pauseVideo();
    });

    var changeButton1 = document.getElementById('songbtn1');
    changeButton1.addEventListener('click', function() {
      changeVideo('D1zR9DkYgu4');
    });

    var changeButton2 = document.getElementById('songbtn2');
    changeButton2.addEventListener('click', function() {
      changeVideo('25BkVBgFD9Y');
    });

    var changeButton2 = document.getElementById('songbtn3');
    changeButton2.addEventListener('click', function() {
      changeVideo('BEXL80LS0-I');
    });

    var changeButton2 = document.getElementById('songbtn4');
    changeButton2.addEventListener('click', function() {
      changeVideo('TlWYgGyNnJo');
    });

    var volumeSlider = document.getElementById('volumeSlider');
    volumeSlider.addEventListener('input', function() {
      var volume = volumeSlider.value;
      setVolume(volume);
    });
  }
