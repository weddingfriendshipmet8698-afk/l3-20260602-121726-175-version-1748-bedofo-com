(function () {
  function setupPlayer(player) {
    var video = player.querySelector('video');
    var button = player.querySelector('.player-overlay');
    var src = player.getAttribute('data-src');
    var attached = false;
    var instance = null;

    if (!video || !src) {
      return;
    }

    function attach() {
      if (attached) {
        return Promise.resolve();
      }
      attached = true;

      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
        return Promise.resolve();
      }

      if (window.Hls && window.Hls.isSupported()) {
        instance = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        instance.loadSource(src);
        instance.attachMedia(video);
        return new Promise(function (resolve) {
          instance.on(window.Hls.Events.MANIFEST_PARSED, function () {
            resolve();
          });
          instance.on(window.Hls.Events.ERROR, function (event, data) {
            if (data && data.fatal) {
              if (data.type === window.Hls.ErrorTypes.NETWORK_ERROR) {
                instance.startLoad();
              }
              if (data.type === window.Hls.ErrorTypes.MEDIA_ERROR) {
                instance.recoverMediaError();
              }
            }
          });
        });
      }

      video.src = src;
      return Promise.resolve();
    }

    function play() {
      attach().then(function () {
        player.classList.add('is-playing');
        var action = video.play();
        if (action && action.catch) {
          action.catch(function () {
            player.classList.remove('is-playing');
          });
        }
      });
    }

    if (button) {
      button.addEventListener('click', play);
    }

    video.addEventListener('click', function () {
      if (video.paused) {
        play();
      }
    });

    video.addEventListener('play', function () {
      player.classList.add('is-playing');
    });

    video.addEventListener('pause', function () {
      if (!video.ended) {
        player.classList.remove('is-playing');
      }
    });

    window.addEventListener('beforeunload', function () {
      if (instance) {
        instance.destroy();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.slice.call(document.querySelectorAll('.js-player')).forEach(setupPlayer);
  });
})();
