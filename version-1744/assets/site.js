(function () {
    function ready(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            callback();
        }
    }

    function normalize(value) {
        return String(value || '').trim().toLowerCase();
    }

    function getQuery(name) {
        return new URLSearchParams(window.location.search).get(name) || '';
    }

    function initMobileNav() {
        var toggle = document.querySelector('[data-mobile-toggle]');
        var nav = document.querySelector('[data-mobile-nav]');
        if (!toggle || !nav) {
            return;
        }
        toggle.addEventListener('click', function () {
            var open = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    function matchYear(year, bucket) {
        var value = parseInt(year, 10);
        if (!bucket) {
            return true;
        }
        if (bucket === '2026' || bucket === '2025' || bucket === '2024') {
            return String(year) === bucket;
        }
        if (bucket === '2020s') {
            return value >= 2020 && value <= 2029;
        }
        if (bucket === '2010s') {
            return value >= 2010 && value <= 2019;
        }
        if (bucket === 'older') {
            return value < 2010;
        }
        return true;
    }

    function initFilters() {
        document.querySelectorAll('[data-filter-root]').forEach(function (root) {
            var input = root.querySelector('[data-filter-input]');
            var typeSelect = root.querySelector('[data-filter-type]');
            var yearSelect = root.querySelector('[data-filter-year]');
            var cards = Array.prototype.slice.call(root.querySelectorAll('[data-movie-card]'));
            var empty = root.querySelector('[data-empty-state]');
            var query = getQuery('q');
            if (query && input) {
                input.value = query;
            }
            function apply() {
                var keyword = normalize(input ? input.value : '');
                var selectedType = normalize(typeSelect ? typeSelect.value : '');
                var selectedYear = yearSelect ? yearSelect.value : '';
                var visible = 0;
                cards.forEach(function (card) {
                    var haystack = normalize([
                        card.dataset.title,
                        card.dataset.region,
                        card.dataset.type,
                        card.dataset.year,
                        card.dataset.keywords
                    ].join(' '));
                    var byKeyword = !keyword || haystack.indexOf(keyword) !== -1;
                    var byType = !selectedType || normalize(card.dataset.type) === selectedType;
                    var byYear = matchYear(card.dataset.year, selectedYear);
                    var show = byKeyword && byType && byYear;
                    card.hidden = !show;
                    if (show) {
                        visible += 1;
                    }
                });
                if (empty) {
                    empty.hidden = visible !== 0;
                }
            }
            ['input', 'change'].forEach(function (eventName) {
                if (input) {
                    input.addEventListener(eventName, apply);
                }
                if (typeSelect) {
                    typeSelect.addEventListener(eventName, apply);
                }
                if (yearSelect) {
                    yearSelect.addEventListener(eventName, apply);
                }
            });
            apply();
        });
    }

    function initHero() {
        var slider = document.querySelector('[data-hero-slider]');
        if (!slider) {
            return;
        }
        var slides = Array.prototype.slice.call(slider.querySelectorAll('[data-hero-slide]'));
        var dots = Array.prototype.slice.call(slider.querySelectorAll('[data-hero-dot]'));
        if (slides.length <= 1) {
            return;
        }
        var active = 0;
        var timer = null;
        function show(next) {
            active = (next + slides.length) % slides.length;
            slides.forEach(function (slide, index) {
                slide.classList.toggle('is-active', index === active);
            });
            dots.forEach(function (dot, index) {
                dot.classList.toggle('is-active', index === active);
            });
        }
        function start() {
            stop();
            timer = window.setInterval(function () {
                show(active + 1);
            }, 5200);
        }
        function stop() {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        }
        dots.forEach(function (dot, index) {
            dot.addEventListener('click', function () {
                show(index);
                start();
            });
        });
        slider.addEventListener('mouseenter', stop);
        slider.addEventListener('mouseleave', start);
        start();
    }

    window.initMoviePlayer = function (playerId, sourceUrl) {
        var container = document.getElementById(playerId);
        if (!container) {
            return;
        }
        var video = container.querySelector('video');
        var overlay = container.querySelector('.player-overlay');
        if (!video || !overlay || !sourceUrl) {
            return;
        }
        var attached = false;
        var hlsInstance = null;
        function attachSource() {
            if (attached) {
                return;
            }
            attached = true;
            if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = sourceUrl;
                return;
            }
            if (window.Hls && window.Hls.isSupported()) {
                hlsInstance = new window.Hls({
                    enableWorker: true,
                    lowLatencyMode: false
                });
                hlsInstance.loadSource(sourceUrl);
                hlsInstance.attachMedia(video);
                return;
            }
            video.src = sourceUrl;
        }
        function begin() {
            attachSource();
            overlay.classList.add('is-hidden');
            var playPromise = video.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(function () {
                    overlay.classList.remove('is-hidden');
                });
            }
        }
        overlay.addEventListener('click', begin);
        video.addEventListener('click', function () {
            if (video.paused) {
                begin();
            }
        });
        video.addEventListener('play', function () {
            overlay.classList.add('is-hidden');
        });
        video.addEventListener('ended', function () {
            overlay.classList.remove('is-hidden');
        });
        window.addEventListener('pagehide', function () {
            if (hlsInstance && typeof hlsInstance.destroy === 'function') {
                hlsInstance.destroy();
            }
        });
    };

    ready(function () {
        initMobileNav();
        initFilters();
        initHero();
    });
})();
