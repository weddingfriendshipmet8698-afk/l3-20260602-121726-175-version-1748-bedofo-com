(function() {
    function ready(fn) {
        if (document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }

    function normalize(value) {
        return String(value || "").toLowerCase().trim();
    }

    ready(function() {
        var sliders = document.querySelectorAll("[data-hero-slider]");
        sliders.forEach(function(slider) {
            var slides = Array.prototype.slice.call(slider.querySelectorAll(".hero-slide"));
            var dots = Array.prototype.slice.call(slider.querySelectorAll(".hero-dot"));
            var current = 0;

            function show(index) {
                if (!slides.length) {
                    return;
                }
                current = (index + slides.length) % slides.length;
                slides.forEach(function(slide, slideIndex) {
                    slide.classList.toggle("is-active", slideIndex === current);
                });
                dots.forEach(function(dot, dotIndex) {
                    dot.classList.toggle("is-active", dotIndex === current);
                });
            }

            dots.forEach(function(dot, dotIndex) {
                dot.addEventListener("click", function() {
                    show(dotIndex);
                });
            });

            if (slides.length > 1) {
                setInterval(function() {
                    show(current + 1);
                }, 5800);
            }
        });

        var panels = document.querySelectorAll("[data-filter-panel]");
        panels.forEach(function(panel) {
            var input = panel.querySelector("[data-filter-input]");
            var cards = Array.prototype.slice.call(document.querySelectorAll("[data-card]"));
            var empty = document.querySelector("[data-empty-state]");
            var params = new URLSearchParams(window.location.search);
            var initial = params.get("q") || "";

            if (input && initial) {
                input.value = initial;
            }

            function apply() {
                var keyword = normalize(input ? input.value : "");
                var visible = 0;
                cards.forEach(function(card) {
                    var text = normalize(card.getAttribute("data-title"));
                    var matched = !keyword || text.indexOf(keyword) !== -1;
                    card.style.display = matched ? "" : "none";
                    if (matched) {
                        visible += 1;
                    }
                });
                if (empty) {
                    empty.classList.toggle("is-visible", visible === 0);
                }
            }

            if (input) {
                input.addEventListener("input", apply);
            }
            panel.addEventListener("submit", function(event) {
                event.preventDefault();
                apply();
            });
            apply();
        });
    });

    window.startMoviePlayer = function(source) {
        var video = document.getElementById("moviePlayer");
        var cover = document.querySelector("[data-player-cover]");
        var button = document.querySelector("[data-player-button]");
        var prepared = false;
        var hlsInstance = null;

        if (!video || !source) {
            return;
        }

        function attach() {
            if (prepared) {
                return;
            }
            prepared = true;
            if (video.canPlayType("application/vnd.apple.mpegurl")) {
                video.src = source;
            } else if (window.Hls && window.Hls.isSupported()) {
                hlsInstance = new window.Hls();
                hlsInstance.loadSource(source);
                hlsInstance.attachMedia(video);
            } else {
                video.src = source;
            }
        }

        function hideCover() {
            if (cover) {
                cover.classList.add("is-hidden");
            }
        }

        function play() {
            attach();
            hideCover();
            var result = video.play();
            if (result && typeof result.catch === "function") {
                result.catch(function() {});
            }
        }

        if (cover) {
            cover.addEventListener("click", play);
        }
        if (button) {
            button.addEventListener("click", function(event) {
                event.stopPropagation();
                play();
            });
        }
        video.addEventListener("play", hideCover);
        window.addEventListener("pagehide", function() {
            if (hlsInstance) {
                hlsInstance.destroy();
                hlsInstance = null;
            }
        });
    };
})();
