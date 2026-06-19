document.addEventListener('DOMContentLoaded', function () {
    var navToggle = document.querySelector('.nav-toggle');
    var mainNav = document.querySelector('.main-nav');
    var topSearch = document.querySelector('.top-search');

    if (navToggle && mainNav && topSearch) {
        navToggle.addEventListener('click', function () {
            mainNav.classList.toggle('open');
            topSearch.classList.toggle('open');
        });
    }

    var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
    var thumbs = Array.prototype.slice.call(document.querySelectorAll('.hero-thumb'));
    var currentSlide = 0;

    function showSlide(index) {
        if (!slides.length) {
            return;
        }

        currentSlide = (index + slides.length) % slides.length;
        slides.forEach(function (slide, slideIndex) {
            slide.classList.toggle('active', slideIndex === currentSlide);
        });
        thumbs.forEach(function (thumb, thumbIndex) {
            thumb.classList.toggle('active', thumbIndex === currentSlide);
        });
    }

    thumbs.forEach(function (thumb, index) {
        thumb.addEventListener('click', function () {
            showSlide(index);
        });
    });

    if (slides.length > 1) {
        setInterval(function () {
            showSlide(currentSlide + 1);
        }, 5200);
    }

    var filterForm = document.querySelector('[data-filter-form]');
    var filterItems = Array.prototype.slice.call(document.querySelectorAll('[data-title]'));
    var resultCount = document.querySelector('[data-result-count]');

    function normalize(value) {
        return String(value || '').trim().toLowerCase();
    }

    function applyFilter() {
        if (!filterForm || !filterItems.length) {
            return;
        }

        var keyword = normalize(filterForm.querySelector('[name="keyword"]').value);
        var year = normalize(filterForm.querySelector('[name="year"]').value);
        var region = normalize(filterForm.querySelector('[name="region"]').value);
        var visible = 0;

        filterItems.forEach(function (item) {
            var haystack = normalize([
                item.dataset.title,
                item.dataset.genre,
                item.dataset.region,
                item.dataset.category,
                item.textContent
            ].join(' '));
            var matchedKeyword = !keyword || haystack.indexOf(keyword) !== -1;
            var matchedYear = !year || normalize(item.dataset.year) === year;
            var matchedRegion = !region || normalize(item.dataset.region).indexOf(region) !== -1;
            var matched = matchedKeyword && matchedYear && matchedRegion;

            item.classList.toggle('hidden-card', !matched);
            if (matched) {
                visible += 1;
            }
        });

        if (resultCount) {
            resultCount.textContent = String(visible);
        }
    }

    if (filterForm) {
        filterForm.addEventListener('submit', function (event) {
            event.preventDefault();
            applyFilter();
        });
        Array.prototype.slice.call(filterForm.elements).forEach(function (element) {
            element.addEventListener('input', applyFilter);
            element.addEventListener('change', applyFilter);
        });

        var params = new URLSearchParams(window.location.search);
        var q = params.get('q');
        if (q && filterForm.querySelector('[name="keyword"]')) {
            filterForm.querySelector('[name="keyword"]').value = q;
        }
        applyFilter();
    }
});

(function () {
    var player = document.querySelector('[data-player]');
    if (!player) {
        return;
    }

    var video = player.querySelector('video');
    var cover = player.querySelector('.video-cover');
    var source = player.getAttribute('data-src');
    var started = false;

    function startPlayback() {
        if (!video || !source || started) {
            return;
        }

        started = true;

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = source;
        } else if (window.Hls && window.Hls.isSupported()) {
            var hls = new window.Hls();
            hls.loadSource(source);
            hls.attachMedia(video);
        } else {
            video.src = source;
        }

        if (cover) {
            cover.classList.add('hidden');
        }

        video.controls = true;
        var playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(function () {
                video.controls = true;
            });
        }
    }

    if (cover) {
        cover.addEventListener('click', startPlayback);
    }

    if (video) {
        video.addEventListener('click', function () {
            if (!started) {
                startPlayback();
            }
        });
    }
})();
