
(function () {
  function onReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  function normalize(value) {
    return (value || "").toString().trim().toLowerCase();
  }

  function setupMenu() {
    var toggle = document.querySelector("[data-menu-toggle]");
    var nav = document.querySelector("[data-main-nav]");
    var search = document.querySelector(".header-search");
    if (!toggle || !nav) {
      return;
    }
    toggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
      if (search) {
        search.classList.toggle("is-open");
      }
    });
  }

  function setupHero() {
    var slider = document.querySelector("[data-hero-slider]");
    if (!slider) {
      return;
    }
    var slides = Array.prototype.slice.call(slider.querySelectorAll(".hero-slide"));
    var dots = Array.prototype.slice.call(slider.querySelectorAll("[data-slide-dot]"));
    var prev = slider.querySelector("[data-slide-prev]");
    var next = slider.querySelector("[data-slide-next]");
    var index = 0;
    var timer = null;

    function show(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("active", slideIndex === index);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("active", dotIndex === index);
      });
    }

    function restart() {
      if (timer) {
        window.clearInterval(timer);
      }
      timer = window.setInterval(function () {
        show(index + 1);
      }, 5200);
    }

    dots.forEach(function (dot, dotIndex) {
      dot.addEventListener("click", function () {
        show(dotIndex);
        restart();
      });
    });

    if (prev) {
      prev.addEventListener("click", function () {
        show(index - 1);
        restart();
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        show(index + 1);
        restart();
      });
    }

    restart();
  }

  function setupSearchForms() {
    Array.prototype.slice.call(document.querySelectorAll("[data-search-form]")).forEach(function (form) {
      form.addEventListener("submit", function (event) {
        var input = form.querySelector("input[name='q']");
        if (input && input.value.trim()) {
          event.preventDefault();
          window.location.href = "./search.html?q=" + encodeURIComponent(input.value.trim());
        }
      });
    });
  }

  function setupFilters() {
    Array.prototype.slice.call(document.querySelectorAll("[data-filter-scope]")).forEach(function (scope) {
      var list = document.querySelector("[data-filter-list]");
      if (!list) {
        return;
      }
      var input = scope.querySelector("[data-filter-input]");
      var region = scope.querySelector("[data-filter-region]");
      var type = scope.querySelector("[data-filter-type]");
      var year = scope.querySelector("[data-filter-year]");
      var sort = scope.querySelector("[data-filter-sort]");
      var empty = scope.querySelector("[data-filter-empty]");
      var items = Array.prototype.slice.call(list.querySelectorAll("[data-title]"));
      var params = new URLSearchParams(window.location.search);
      var query = params.get("q");

      if (query && input) {
        input.value = query;
      }

      function run() {
        var q = normalize(input && input.value);
        var r = normalize(region && region.value);
        var t = normalize(type && type.value);
        var y = normalize(year && year.value);
        var visible = 0;
        var sorted = items.slice();

        if (sort && sort.value === "year-desc") {
          sorted.sort(function (a, b) {
            return parseInt(b.dataset.year || "0", 10) - parseInt(a.dataset.year || "0", 10);
          });
        }

        if (sort && sort.value === "title-asc") {
          sorted.sort(function (a, b) {
            return (a.dataset.title || "").localeCompare(b.dataset.title || "", "zh-CN");
          });
        }

        sorted.forEach(function (item) {
          list.appendChild(item);
          var text = normalize(item.textContent + " " + item.dataset.title + " " + item.dataset.region + " " + item.dataset.type + " " + item.dataset.year);
          var ok = true;
          ok = ok && (!q || text.indexOf(q) !== -1);
          ok = ok && (!r || normalize(item.dataset.region) === r);
          ok = ok && (!t || normalize(item.dataset.type) === t);
          ok = ok && (!y || normalize(item.dataset.year) === y);
          item.style.display = ok ? "" : "none";
          if (ok) {
            visible += 1;
          }
        });

        if (empty) {
          empty.classList.toggle("show", visible === 0);
        }
      }

      [input, region, type, year, sort].forEach(function (control) {
        if (control) {
          control.addEventListener("input", run);
          control.addEventListener("change", run);
        }
      });

      run();
    });
  }

  window.initMoviePlayer = function (src) {
    onReady(function () {
      var video = document.querySelector("[data-player-video]");
      var trigger = document.querySelector("[data-player-trigger]");
      if (!video || !src) {
        return;
      }

      var attached = false;
      var hls = null;

      function attach() {
        if (attached) {
          return;
        }
        attached = true;

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = src;
          return;
        }

        if (window.Hls && window.Hls.isSupported()) {
          hls = new window.Hls({ enableWorker: true, lowLatencyMode: true, backBufferLength: 90 });
          hls.loadSource(src);
          hls.attachMedia(video);
          hls.on(window.Hls.Events.MANIFEST_PARSED, function () {
            video.play().catch(function () {});
          });
          hls.on(window.Hls.Events.ERROR, function (event, data) {
            if (data && data.fatal) {
              attached = false;
            }
          });
        }
      }

      function start() {
        if (trigger) {
          trigger.classList.add("is-hidden");
        }
        attach();
        video.play().catch(function () {});
      }

      if (trigger) {
        trigger.addEventListener("click", start);
      }

      video.addEventListener("click", function () {
        if (video.paused) {
          start();
        }
      });

      window.addEventListener("beforeunload", function () {
        if (hls) {
          hls.destroy();
        }
      });
    });
  };

  onReady(function () {
    setupMenu();
    setupHero();
    setupSearchForms();
    setupFilters();
  });
})();
