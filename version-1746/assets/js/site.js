(function () {
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  function initMenu() {
    var button = document.querySelector("[data-menu-button]");
    var nav = document.querySelector("[data-mobile-nav]");
    if (!button || !nav) {
      return;
    }
    button.addEventListener("click", function () {
      nav.classList.toggle("is-open");
    });
  }

  function initHero() {
    var hero = document.querySelector("[data-hero]");
    if (!hero) {
      return;
    }
    var slides = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-dot]"));
    if (slides.length < 2) {
      return;
    }
    var index = 0;
    var timer;

    function show(next) {
      index = (next + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === index);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === index);
      });
    }

    function play() {
      timer = window.setInterval(function () {
        show(index + 1);
      }, 5200);
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        window.clearInterval(timer);
        show(i);
        play();
      });
    });

    play();
  }

  function params() {
    var result = {};
    var query = window.location.search.replace(/^\?/, "");
    if (!query) {
      return result;
    }
    query.split("&").forEach(function (part) {
      var pair = part.split("=");
      var key = decodeURIComponent(pair[0] || "");
      var value = decodeURIComponent((pair[1] || "").replace(/\+/g, " "));
      if (key) {
        result[key] = value;
      }
    });
    return result;
  }

  function initSearch() {
    var area = document.querySelector("[data-filter-area]");
    var input = document.getElementById("searchInput");
    var category = document.getElementById("categoryFilter");
    var year = document.getElementById("yearFilter");
    var type = document.getElementById("typeFilter");
    var empty = document.querySelector("[data-empty-state]");
    if (!area || !input) {
      return;
    }
    var query = params();
    if (query.q) {
      input.value = query.q;
    }
    if (query.category && category) {
      category.value = query.category;
    }

    function valueOf(node) {
      return node ? node.value.trim().toLowerCase() : "";
    }

    function apply() {
      var keyword = valueOf(input);
      var cat = valueOf(category);
      var selectedYear = valueOf(year);
      var selectedType = valueOf(type);
      var visible = 0;
      Array.prototype.slice.call(area.querySelectorAll("[data-card]")).forEach(function (card) {
        var title = (card.getAttribute("data-title") || "").toLowerCase();
        var cardCat = (card.getAttribute("data-category") || "").toLowerCase();
        var cardYear = (card.getAttribute("data-year") || "").toLowerCase();
        var cardType = (card.getAttribute("data-type") || "").toLowerCase();
        var tags = (card.getAttribute("data-tags") || "").toLowerCase();
        var region = (card.getAttribute("data-region") || "").toLowerCase();
        var text = [title, cardCat, cardYear, cardType, tags, region].join(" ");
        var matched = true;
        if (keyword && text.indexOf(keyword) === -1) {
          matched = false;
        }
        if (cat && cardCat !== cat) {
          matched = false;
        }
        if (selectedYear && cardYear !== selectedYear) {
          matched = false;
        }
        if (selectedType && cardType !== selectedType) {
          matched = false;
        }
        card.hidden = !matched;
        if (matched) {
          visible += 1;
        }
      });
      if (empty) {
        empty.hidden = visible !== 0;
      }
    }

    [input, category, year, type].forEach(function (node) {
      if (node) {
        node.addEventListener("input", apply);
        node.addEventListener("change", apply);
      }
    });
    apply();
  }

  function initPlayers() {
    Array.prototype.slice.call(document.querySelectorAll(".js-player")).forEach(function (box) {
      var video = box.querySelector("video");
      var overlay = box.querySelector(".player-overlay");
      var stream = box.getAttribute("data-stream");
      var hls;
      if (!video || !stream) {
        return;
      }

      function setup() {
        if (video.dataset.ready === "1") {
          return;
        }
        if (window.Hls && window.Hls.isSupported()) {
          hls = new window.Hls({ autoStartLoad: true });
          hls.loadSource(stream);
          hls.attachMedia(video);
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = stream;
        }
        video.dataset.ready = "1";
      }

      function play() {
        setup();
        var action = video.paused ? video.play() : video.pause();
        if (action && typeof action.catch === "function") {
          action.catch(function () {});
        }
      }

      if (overlay) {
        overlay.addEventListener("click", play);
      }
      video.addEventListener("click", function () {
        if (video.paused) {
          play();
        }
      });
      video.addEventListener("play", function () {
        box.classList.add("is-playing");
      });
      video.addEventListener("pause", function () {
        box.classList.remove("is-playing");
      });
      video.addEventListener("ended", function () {
        box.classList.remove("is-playing");
      });
      window.addEventListener("pagehide", function () {
        if (hls) {
          hls.destroy();
        }
      });
    });
  }

  ready(function () {
    initMenu();
    initHero();
    initSearch();
    initPlayers();
  });
})();
