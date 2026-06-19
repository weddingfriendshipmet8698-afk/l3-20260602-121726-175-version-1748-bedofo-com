(function () {
  function qs(selector, root) {
    return (root || document).querySelector(selector);
  }

  function qsa(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function normalize(value) {
    return String(value || '').toLowerCase().replace(/\s+/g, '');
  }

  function initMenu() {
    var button = qs('[data-menu-toggle]');
    var menu = qs('[data-nav-menu]');
    if (!button || !menu) {
      return;
    }
    button.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
  }

  function initHero() {
    var slider = qs('[data-hero-slider]');
    if (!slider) {
      return;
    }
    var slides = qsa('[data-hero-slide]', slider);
    var dots = qsa('[data-hero-dot]', slider);
    var current = 0;
    var timer;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('active', slideIndex === current);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('active', dotIndex === current);
      });
    }

    function next() {
      show(current + 1);
    }

    function start() {
      stop();
      timer = window.setInterval(next, 5200);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
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
    show(0);
    start();
  }

  function fillSelect(select, cards, attr) {
    if (!select) {
      return;
    }
    var values = [];
    cards.forEach(function (card) {
      var value = card.getAttribute(attr) || '';
      if (value && values.indexOf(value) === -1) {
        values.push(value);
      }
    });
    values.sort(function (a, b) {
      return String(b).localeCompare(String(a), 'zh-Hans-CN');
    });
    values.forEach(function (value) {
      var option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  }

  function initFilters() {
    qsa('[data-filter-scope]').forEach(function (scope) {
      var input = qs('[data-search-input]', scope);
      var reset = qs('[data-filter-reset]', scope);
      var region = qs('[data-filter-region]', scope);
      var type = qs('[data-filter-type]', scope);
      var year = qs('[data-filter-year]', scope);
      var section = scope.closest('main') || document;
      var cards = qsa('.movie-card', section);
      var empty = qs('[data-empty-state]', section);

      fillSelect(region, cards, 'data-region');
      fillSelect(type, cards, 'data-type');
      fillSelect(year, cards, 'data-year');

      function apply() {
        var query = normalize(input ? input.value : '');
        var selectedRegion = region ? region.value : '';
        var selectedType = type ? type.value : '';
        var selectedYear = year ? year.value : '';
        var visible = 0;

        cards.forEach(function (card) {
          var haystack = normalize([
            card.getAttribute('data-title'),
            card.getAttribute('data-region'),
            card.getAttribute('data-year'),
            card.getAttribute('data-type'),
            card.getAttribute('data-genre'),
            card.getAttribute('data-tags')
          ].join(' '));
          var matched = true;
          matched = matched && (!query || haystack.indexOf(query) !== -1);
          matched = matched && (!selectedRegion || card.getAttribute('data-region') === selectedRegion);
          matched = matched && (!selectedType || card.getAttribute('data-type') === selectedType);
          matched = matched && (!selectedYear || card.getAttribute('data-year') === selectedYear);
          card.style.display = matched ? '' : 'none';
          if (matched) {
            visible += 1;
          }
        });

        if (empty) {
          empty.classList.toggle('show', visible === 0);
        }
      }

      [input, region, type, year].forEach(function (control) {
        if (control) {
          control.addEventListener('input', apply);
          control.addEventListener('change', apply);
        }
      });

      if (reset) {
        reset.addEventListener('click', function () {
          if (input) {
            input.value = '';
          }
          [region, type, year].forEach(function (control) {
            if (control) {
              control.value = '';
            }
          });
          apply();
        });
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initHero();
    initFilters();
  });
})();
