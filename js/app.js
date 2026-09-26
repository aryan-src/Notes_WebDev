/* ============================================================
   HTML Academy — app logic
   Renders the sidebar navigation, lesson content, editable
   examples with live previews, quiz, progress and routing.
   ============================================================ */
(function () {
  'use strict';

  const THEME_KEY = 'html-academy:theme';
  const THEME_DEFAULT_KEY = 'html-academy:theme-default';
  const FONT_KEY = 'html-academy:font';
  const PROGRESS_KEY = 'html-academy:progress';

  const els = {};
  let progress = loadJSON(PROGRESS_KEY, {});
  let activeId = null;
  let toastTimer = null;

  /* ---------- small helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function el(tag, cls) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    return node;
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function slugify(s) {
    return String(s)
      .replace(/<\/?([A-Za-z][A-Za-z0-9]*)>/g, '$1')
      .replace(/<[^>]*>/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function debounce(fn, ms) {
    let id;
    return function () {
      const args = arguments, self = this;
      clearTimeout(id);
      id = setTimeout(function () { fn.apply(self, args); }, ms);
    };
  }

  function loadJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function saveProgress() {
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); } catch (e) { /* storage unavailable */ }
  }

  function isDone(id) {
    return !!(progress[id] && progress[id].done);
  }

  /* ---------- tiny syntax highlighter (HTML) ---------- */
  function highlight(src) {
    let s = esc(src);
    s = s.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="t-com">$1</span>');
    s = s.replace(/(&lt;!DOCTYPE[\s\S]*?&gt;)/gi, '<span class="t-dtc">$1</span>');
    s = s.replace(/(&lt;\/?)([a-zA-Z][\w-]*)([\s\S]*?)?(&gt;)/g, function (m, open, name, attrs, close) {
      const colored = (attrs || '').replace(
        /([^\s=]+)(=)(&quot;[\s\S]*?&quot;)/g,
        '<span class="t-attr">$1</span>$2<span class="t-str">$3</span>'
      );
      return open + '<span class="t-tag">' + name + '</span>' + colored + close;
    });
    return s;
  }

  /* ---------- toast + clipboard ---------- */
  function toast(msg) {
    let t = $('.toast');
    if (!t) {
      t = el('div', 'toast');
      document.body.appendChild(t);
    }
    t.textContent = msg;
    requestAnimationFrame(function () { t.classList.add('show'); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2200);
  }

  function copyText(text) {
    function fallback() {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        toast('Copied to clipboard');
      } catch (e) {
        toast('Copy failed — select the code manually');
      }
      ta.remove();
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(function () { toast('Copied to clipboard'); })
        .catch(fallback);
    } else {
      fallback();
    }
  }

  /* ---------- custom appearance dropdowns ---------- */
  let openAppearancePicker = null;

  function setAppearanceValue(trigger, value) {
    if (!trigger) return;
    const picker = trigger.closest('.appearance-picker');
    const menu = picker && document.getElementById(trigger.getAttribute('aria-controls'));
    if (!menu) return;
    const options = $$('.appearance-option', menu);
    const selected = options.find(function (option) { return option.dataset.value === value; }) || options[0];
    if (!selected) return;
    $('[data-select-value]', trigger).textContent = selected.firstElementChild.textContent;
    options.forEach(function (option) {
      option.setAttribute('aria-selected', option === selected ? 'true' : 'false');
    });
    trigger.dataset.value = selected.dataset.value;
  }

  function closeAppearancePicker(picker, returnFocus) {
    if (!picker) return;
    const trigger = $('.appearance-trigger', picker);
    const menu = $('.appearance-menu', picker);
    if (!trigger || !menu) return;
    clearTimeout(menu.closeTimer);
    trigger.setAttribute('aria-expanded', 'false');
    picker.classList.remove('is-open');
    menu.classList.remove('is-open');
    if (!menu.hidden) {
      menu.closeTimer = setTimeout(function () { menu.hidden = true; }, 160);
    }
    if (openAppearancePicker === picker) openAppearancePicker = null;
    if (returnFocus) trigger.focus();
  }

  function showAppearancePicker(picker, focusOption) {
    if (!picker) return;
    if (openAppearancePicker && openAppearancePicker !== picker) {
      const oldMenu = $('.appearance-menu', openAppearancePicker);
      if (oldMenu) {
        clearTimeout(oldMenu.closeTimer);
        oldMenu.hidden = true;
      }
      openAppearancePicker.classList.remove('is-open');
      $('.appearance-trigger', openAppearancePicker).setAttribute('aria-expanded', 'false');
    }
    const trigger = $('.appearance-trigger', picker);
    const menu = $('.appearance-menu', picker);
    clearTimeout(menu.closeTimer);
    menu.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    openAppearancePicker = picker;
    requestAnimationFrame(function () { picker.classList.add('is-open'); });
    if (focusOption) {
      const selected = $('.appearance-option[aria-selected="true"]', menu) || $('.appearance-option', menu);
      if (selected) selected.focus();
    }
  }

  function focusAppearanceOption(options, current, direction) {
    const index = options.indexOf(current);
    let next = index + direction;
    if (next < 0) next = options.length - 1;
    if (next >= options.length) next = 0;
    options[next].focus();
  }

  function initAppearancePicker(trigger, onChange) {
    if (!trigger) return;
    const picker = trigger.closest('.appearance-picker');
    const menu = document.getElementById(trigger.getAttribute('aria-controls'));
    if (!picker || !menu) return;

    trigger.addEventListener('click', function () {
      if (trigger.getAttribute('aria-expanded') === 'true') closeAppearancePicker(picker, true);
      else showAppearancePicker(picker, false);
    });

    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && trigger.getAttribute('aria-expanded') === 'true') {
        e.preventDefault();
        closeAppearancePicker(picker, true);
      } else if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showAppearancePicker(picker, true);
      }
    });

    menu.addEventListener('click', function (e) {
      const option = e.target.closest('.appearance-option');
      if (!option) return;
      onChange(option.dataset.value);
      closeAppearancePicker(picker, true);
    });

    menu.addEventListener('keydown', function (e) {
      const options = $$('.appearance-option', menu);
      const current = e.target.closest('.appearance-option');
      if (e.key === 'ArrowDown') { e.preventDefault(); focusAppearanceOption(options, current, 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); focusAppearanceOption(options, current, -1); }
      else if (e.key === 'Home') { e.preventDefault(); options[0].focus(); }
      else if (e.key === 'End') { e.preventDefault(); options[options.length - 1].focus(); }
      else if (e.key === 'Escape' || e.key === 'Tab') closeAppearancePicker(picker, e.key === 'Escape');
    });

    document.addEventListener('pointerdown', function (e) {
      if (openAppearancePicker && !openAppearancePicker.contains(e.target)) {
        closeAppearancePicker(openAppearancePicker, false);
      }
    });
  }

  /* ---------- theme ---------- */
  function applyTheme(theme) {
    const selected = ['light', 'dark', 'nordic-frost', 'warm-paper', 'sage-mint', 'corporate-slate', 'tokyo-night', 'forest-emerald', 'synthwave', 'monokai-charcoal', 'solarized-light', 'solarized-dark', 'rose-gold'].indexOf(theme) !== -1 ? theme : 'light';
    document.documentElement.setAttribute('data-theme', selected);
    setAppearanceValue(els.themeSelect, selected);
  }

  function applyFontStyle(font) {
    const selected = ['system', 'modern-tech-docs', 'editorial-paperback', 'friendly-modern', 'clean-academic', 'neo-grotesque-studio', 'terminal-developer', 'warm-editorial-dark', 'sharp-tech', 'humanist-scholar', 'minimalist-notebook', 'high-end-editorial'].indexOf(font) !== -1 ? font : 'system';
    document.documentElement.setAttribute('data-font-style', selected);
    setAppearanceValue(els.fontSelect, selected);
  }

  function initTheme() {
    let theme = 'light';
    let hasAppliedLightDefault = false;

    try {
      hasAppliedLightDefault = localStorage.getItem(THEME_DEFAULT_KEY) === 'light';
      if (hasAppliedLightDefault) {
        theme = localStorage.getItem(THEME_KEY) || 'light';
      } else {
        localStorage.setItem(THEME_KEY, 'light');
        localStorage.setItem(THEME_DEFAULT_KEY, 'light');
      }
    } catch (e) { /* use Light when storage is unavailable */ }

    applyTheme(theme);
    initAppearancePicker(els.themeSelect, function (value) {
      applyTheme(value);
      try {
        localStorage.setItem(THEME_KEY, value);
        localStorage.setItem(THEME_DEFAULT_KEY, 'light');
      } catch (e) { /* ignore */ }
    });
  }

  function initFontStyle() {
    let font = null;
    try { font = localStorage.getItem(FONT_KEY); } catch (e) { /* ignore */ }
    applyFontStyle(font || 'system');
    initAppearancePicker(els.fontSelect, function (value) {
      applyFontStyle(value);
      try { localStorage.setItem(FONT_KEY, value); } catch (e) { /* ignore */ }
    });
  }
  /* ---------- navigation toggle ---------- */
  function isMobileNav() {
    return window.matchMedia && window.matchMedia('(max-width: 860px)').matches;
  }

  function setMenuState(expanded) {
    if (expanded) {
      document.body.classList.remove('nav-collapsed');
    } else {
      document.body.classList.add('nav-collapsed');
    }
    els.menuToggle.setAttribute('aria-expanded', String(expanded));
    els.menuToggle.setAttribute('aria-label', expanded ? 'Hide navigation pane' : 'Show navigation pane');
    els.menuToggle.setAttribute('title', expanded ? 'Hide navigation pane' : 'Show navigation pane');
  }

  function openMobileNav() {
    document.body.classList.add('nav-open');
    els.overlay.hidden = false;
    setMenuState(true);
  }

  function closeMobileNav() {
    document.body.classList.remove('nav-open');
    els.overlay.hidden = true;
    if (isMobileNav()) setMenuState(false);
  }

  /* ---------- routing (hash: #lessonId or #lessonId::heading-slug) ---------- */
  function parseHash() {
    const raw = location.hash.replace(/^#/, '');
    if (!raw) return { id: null, head: null };
    const parts = raw.split('::');
    return { id: parts[0] || null, head: parts[1] || null };
  }

  function navigate(hash) {
    if (location.hash === hash) route();
    else location.hash = hash;
  }

  function route() {
    const parsed = parseHash();
    let lesson = LESSONS.find(function (l) { return l.id === parsed.id; });
    if (parsed.id && !lesson) {
      lesson = LESSONS[0];
      try { history.replaceState(null, '', '#' + lesson.id); } catch (e) { /* ignore */ }
    }
    if (!lesson) lesson = LESSONS.find(function (l) { return l.status === 'ready'; }) || LESSONS[0];

    const changed = lesson.id !== activeId;
    if (changed) {
      activeId = lesson.id;
      renderNav();
      renderLesson(lesson);
      updateSidebarFooter(lesson);
      window.scrollTo(0, 0);
    }

    if (parsed.head) {
      const fullId = lesson.id + '::' + parsed.head;
      const target = document.getElementById(fullId);
      if (target) {
        requestAnimationFrame(function () {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    } else if (!changed) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    closeMobileNav();
  }

  /* ---------- sidebar navigation ---------- */
  function renderNav() {
    els.navList.innerHTML = '';

    const tutorialDivider = el('li', 'nav-section-divider nav-section-divider-first');
    tutorialDivider.setAttribute('role', 'presentation');
    tutorialDivider.dataset.section = 'tutorial';
    tutorialDivider.innerHTML = '<span>HTML Tutorial</span>';
    els.navList.appendChild(tutorialDivider);

    let currentNavSection = null;
    LESSONS.forEach(function (lesson) {
      if (lesson.navSection && lesson.navSection !== currentNavSection) {
        currentNavSection = lesson.navSection;
        const divider = el('li', 'nav-section-divider');
        divider.setAttribute('role', 'presentation');
        divider.dataset.section = currentNavSection.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        divider.innerHTML = '<span>' + esc(currentNavSection) + '</span>';
        els.navList.appendChild(divider);
      }

      // All sections share the same clean, title-only navigation design.
      const isActive = lesson.id === activeId;
      const li = el('li', 'nav-structure-row' + (isActive ? ' active-row' : ''));
      const btn = el('button', 'nav-structure-item' + (isActive ? ' active' : ''));
      btn.type = 'button';
      btn.setAttribute('aria-current', isActive ? 'page' : 'false');
      btn.innerHTML =
        '<span class="nav-structure-title">' + esc(lesson.title) + '</span>' +
        '<span class="nav-structure-arrow" aria-hidden="true"></span>';
      btn.addEventListener('click', function () { navigate('#' + lesson.id); });
      li.appendChild(btn);
      els.navList.appendChild(li);
    });

    updateProgress();
  }

  function updateProgress() {
    const readyOnes = LESSONS.filter(function (l) { return l.status === 'ready'; });
    const done = readyOnes.filter(function (l) { return isDone(l.id); }).length;
    els.progressLabel.textContent = done + ' / ' + readyOnes.length;
    els.progressFill.style.width = readyOnes.length ? (done / readyOnes.length) * 100 + '%' : '0%';
  }
  /* ---------- lesson rendering ---------- */
  function renderLesson(lesson) {
    els.content.innerHTML = '';
    const wrap = el('div', 'lesson');

    if (lesson.structureOnly) {
      wrap.appendChild(buildStructureOnly(lesson));
      els.content.appendChild(wrap);
      return;
    }

    if (lesson.status !== 'ready') {
      wrap.appendChild(buildEmpty(lesson));
      els.content.appendChild(wrap);
      return;
    }

    wrap.appendChild(buildHero(lesson));

    (lesson.blocks || []).forEach(function (block) {
      switch (block.type) {
        case 'heading':  wrap.appendChild(buildHeading(lesson, block)); break;
        case 'p': {
          const p = el('p');
          p.innerHTML = block.html;
          wrap.appendChild(p);
          break;
        }
        case 'note':     wrap.appendChild(buildNote(block)); break;
        case 'list':     wrap.appendChild(buildList(block)); break;
        case 'table':    wrap.appendChild(buildTable(block)); break;
        case 'example':  wrap.appendChild(buildExample(block)); break;
        case 'challenge':wrap.appendChild(buildChallenge(block)); break;
        case 'quiz':     wrap.appendChild(buildQuiz(block)); break;
        default: break;
      }
    });

    wrap.appendChild(buildFooter(lesson));
    els.content.appendChild(wrap);
  }

  function buildHero(lesson) {
    const hero = el('header', 'lesson-hero');
    hero.innerHTML =
      '<h1 class="hero-title">' + esc(lesson.title) + '</h1>' +
      '<p class="hero-sub">' + esc(lesson.subtitle || '') + '</p>';
    return hero;
  }

  function buildHeading(lesson, block) {
    const id = lesson.id + '::' + slugify(block.text);
    const tag = block.level === 3 ? 'h3' : 'h2';
    const h = el(tag);
    h.id = id;
    h.innerHTML = esc(block.text) +
      ' <a class="anchor" href="#' + id + '" aria-label="Link to this section">#</a>';
    return h;
  }

  function buildNote(block) {
    const note = el('aside', 'note');
    note.innerHTML = '<span class="note-tag">&#128161; ' + esc(block.label || 'Note') + '</span>' + block.html;
    return note;
  }

  /* ---------- data table ---------- */
  function buildTable(block) {
    const wrap = el('div', 'table-wrap');
    const t = el('table', 'lesson-table');
    t.innerHTML =
      '<thead><tr>' + block.head.map(function (hcell) { return '<th>' + hcell + '</th>'; }).join('') + '</tr></thead>' +
      '<tbody>' + block.rows.map(function (row) {
        return '<tr>' + row.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
      }).join('') + '</tbody>';
    wrap.appendChild(t);
    return wrap;
  }

  /* ---------- bullet list ---------- */
  function buildList(block) {
    const ul = el('ul', 'lesson-list');
    ul.innerHTML = block.items.map(function (item) { return '<li>' + item + '</li>'; }).join('');
    return ul;
  }

  /* ---------- editable example with live preview ---------- */
  function buildExample(block) {
    const wrap = el('div', 'example');
    wrap.innerHTML =
      '<div class="example-bar">' +
        '<span class="example-label">' + esc(block.label || 'Example') + '</span>' +
        '<div class="example-actions">' +
          '<button type="button" class="chip-btn" data-action="edit">&#9998; Edit</button>' +
          '<button type="button" class="chip-btn" data-action="copy">&#10697; Copy</button>' +
          '<button type="button" class="chip-btn" data-action="reset">&#8634; Reset</button>' +
        '</div>' +
      '</div>' +
      '<div class="example-grid">' +
        '<div class="example-code">' +
          '<pre class="code-view"><code></code></pre>' +
          '<textarea class="code-input" spellcheck="false" aria-label="Editable example code" hidden></textarea>' +
        '</div>' +
        '<div class="example-result">' +
          '<div class="result-label">Result</div>' +
          '<iframe class="result-frame" title="Result" sandbox="allow-scripts"></iframe>' +
        '</div>' +
      '</div>';
    setupEditor(wrap, block.code);
    return wrap;
  }

  /* wires a code panel (optional pre + textarea) to a preview iframe */
  function setupEditor(root, original) {
    const codeEl = $('.code-view code', root);
    const pre = $('.code-view', root);
    const ta = $('.code-input', root);
    const frame = $('.result-frame', root);
    const editBtn = $('[data-action="edit"]', root);
    const copyBtn = $('[data-action="copy"]', root);
    const resetBtn = $('[data-action="reset"]', root);
    const runBtn = $('[data-action="run"]', root);
    let current = original;

    function paint() { if (codeEl) codeEl.innerHTML = highlight(current); }
    function run() { if (frame) frame.srcdoc = current; }
    const runDebounced = debounce(run, 350);

    paint();
    if (ta) ta.value = current;
    run();

    if (editBtn) {
      editBtn.addEventListener('click', function () {
        const editing = !ta.hidden;
        if (editing) {
          ta.hidden = true;
          pre.hidden = false;
          editBtn.textContent = '\u270E Edit';
          editBtn.classList.remove('active');
          paint();
        } else {
          pre.hidden = true;
          ta.hidden = false;
          editBtn.textContent = '\u2713 Done';
          editBtn.classList.add('active');
          ta.focus();
        }
      });
    }

    if (ta) {
      ta.addEventListener('input', function () {
        current = ta.value;
        runDebounced();
      });
    }
    if (copyBtn) copyBtn.addEventListener('click', function () { copyText(current); });
    if (runBtn) runBtn.addEventListener('click', function () { current = ta.value; run(); toast('Result updated'); });
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        current = original;
        if (ta) ta.value = original;
        paint();
        run();
        toast('Reset to the original code');
      });
    }

    return {
      get: function () { return current; },
      set: function (value) {
        current = value;
        if (ta) ta.value = value;
        paint();
        run();
      }
    };
  }
  /* ---------- "your turn" challenge ---------- */
  function buildChallenge(block) {
    const wrap = el('section', 'challenge');
    wrap.innerHTML =
      '<div class="challenge-head">&#127919; Your Turn — Challenge</div>' +
      '<p class="challenge-brief">' + block.brief + '</p>' +
      '<div class="example-grid">' +
        '<div class="example-code">' +
          '<textarea class="code-input" spellcheck="false" aria-label="Challenge code"></textarea>' +
        '</div>' +
        '<div class="example-result">' +
          '<div class="result-label">Result</div>' +
          '<iframe class="result-frame" title="Challenge result" sandbox="allow-scripts"></iframe>' +
        '</div>' +
      '</div>' +
      '<div class="challenge-actions">' +
        '<button type="button" class="chip-btn btn-primary" data-action="run">&#9654; Run</button>' +
        '<button type="button" class="chip-btn" data-action="solution">&#10024; Show solution</button>' +
        '<button type="button" class="chip-btn" data-action="reset">&#8634; Reset</button>' +
      '</div>';

    const editor = setupEditor(wrap, block.starter);
    const solBtn = $('[data-action="solution"]', wrap);
    let showingSolution = false;
    let userCode = null;

    solBtn.addEventListener('click', function () {
      if (!showingSolution) {
        userCode = editor.get();
        editor.set(block.solution);
        solBtn.textContent = '\u21A9 Hide solution';
        solBtn.classList.add('active');
        showingSolution = true;
      } else {
        editor.set(userCode != null ? userCode : block.starter);
        solBtn.textContent = '\u2728 Show solution';
        solBtn.classList.remove('active');
        showingSolution = false;
      }
    });

    return wrap;
  }

  /* ---------- knowledge-check quiz ---------- */
  function buildQuiz(block) {
    const total = block.questions.length;
    const state = { answered: 0, score: 0 };
    const wrap = el('section', 'quiz');

    let html =
      '<div class="quiz-head">' +
        '<h3 class="quiz-title">&#129504; Knowledge Check</h3>' +
        '<span class="quiz-progress" data-quiz-progress>0 / ' + total + ' answered</span>' +
      '</div>';

    block.questions.forEach(function (q, i) {
      html +=
        '<div class="quiz-question" data-qi="' + i + '">' +
          '<p class="q-text"><span class="q-num">Q' + (i + 1) + '.</span>' + q.question + '</p>' +
          '<ul class="opt-list">' +
            q.options.map(function (o, oi) {
              return '<li><button type="button" class="opt" data-q="' + i + '" data-o="' + oi + '">' + o + '</button></li>';
            }).join('') +
          '</ul>' +
          '<p class="feedback" hidden></p>' +
        '</div>';
    });
    html += '<div class="quiz-result" hidden></div>';
    wrap.innerHTML = html;

    wrap.addEventListener('click', function (e) {
      const btn = e.target.closest('.opt');
      if (!btn || btn.disabled) return;

      const qi = +btn.dataset.q;
      const oi = +btn.dataset.o;
      const q = block.questions[qi];
      const qEl = $('.quiz-question[data-qi="' + qi + '"]', wrap);
      if (qEl.dataset.done) return;
      qEl.dataset.done = '1';

      const opts = $$('.opt', qEl);
      opts.forEach(function (o) { o.disabled = true; });
      opts[q.answer].classList.add('correct');
      const right = oi === q.answer;
      if (!right) btn.classList.add('wrong');

      state.answered++;
      if (right) state.score++;

      const fb = $('.feedback', qEl);
      fb.hidden = false;
      fb.className = 'feedback ' + (right ? 'ok' : 'no');
      fb.innerHTML = (right ? '<strong>\u2705 Correct!</strong> ' : '<strong>\u274C Not quite.</strong> ') + q.explanation;

      $('[data-quiz-progress]', wrap).textContent = state.answered + ' / ' + total + ' answered';

      if (state.answered === total) finish();
    });

    function finish() {
      const box = $('.quiz-result', wrap);
      const perfect = state.score === total;
      box.hidden = false;
      box.innerHTML =
        '<span class="score">' + state.score + ' / ' + total + '</span>' +
        '<p>' + (perfect
          ? 'Perfect! You nailed every question. \uD83C\uDF89'
          : (state.score >= Math.ceil(total * 0.6)
            ? 'Good job! Review the missed points and try again.'
            : 'Keep going — reread the sections above and retry.')) + '</p>' +
        '<button type="button" class="chip-btn" data-retry>&#8635; Retake quiz</button>';

      const entry = progress[activeId] || (progress[activeId] = {});
      if (typeof entry.bestQuiz !== 'number' || state.score > entry.bestQuiz) {
        entry.bestQuiz = state.score;
        saveProgress();
      }

      $('[data-retry]', box).addEventListener('click', function () {
        wrap.replaceWith(buildQuiz(block));
      });

      if (perfect) toast('Flawless quiz! \uD83C\uDF89');
    }

    return wrap;
  }
  /* ---------- lesson footer (prev/next + complete) ---------- */
  function buildFooter(lesson) {
    const idx = LESSONS.indexOf(lesson);
    const prev = LESSONS[idx - 1];
    const next = LESSONS[idx + 1];
    const done = isDone(lesson.id);
    const foot = el('footer', 'lesson-footer');

    foot.innerHTML =
      '<div class="footer-row">' +
        (prev
          ? '<button type="button" class="nav-btn" data-go="' + prev.id + '">&larr; ' + esc(prev.title) + '</button>'
          : '<span></span>') +
        (next
          ? '<button type="button" class="nav-btn' + (next.status !== 'ready' ? ' soon' : '') + '" data-go="' + next.id + '">' + esc(next.title) + ' &rarr;</button>'
          : '<span></span>') +
      '</div>' +
      '<div class="footer-row footer-actions">' +
        '<button type="button" class="complete-btn' + (done ? ' done' : '') + '" data-complete>' +
          (done ? '\u2713 Completed — click to undo' : '\u2713 Mark section as complete') +
        '</button>' +
      '</div>';

    $$('[data-go]', foot).forEach(function (b) {
      b.addEventListener('click', function () { navigate('#' + b.dataset.go); });
    });

    $('[data-complete]', foot).addEventListener('click', function () {
      const entry = progress[lesson.id] || (progress[lesson.id] = {});
      if (entry.done) delete entry.done;
      else entry.done = true;
      if (Object.keys(entry).length === 0) delete progress[lesson.id];
      saveProgress();

      const nowDone = isDone(lesson.id);
      const btn = $('[data-complete]', foot);
      btn.classList.toggle('done', nowDone);
      btn.textContent = nowDone ? '\u2713 Completed — click to undo' : '\u2713 Mark section as complete';
      renderNav();

      toast(nowDone ? 'Section marked as complete \uD83C\uDF89' : 'Completion removed');
    });

    return foot;
  }

  /* ---------- structure-only lesson placeholder ---------- */
  function buildStructureOnly(lesson) {
    const hero = el('header', 'lesson-hero structure-only-hero');
    hero.innerHTML = '<h1 class="hero-title">' + esc(lesson.title) + '</h1>';
    return hero;
  }

  /* ---------- coming-soon placeholder ---------- */
  function buildEmpty(lesson) {
    const d = el('div', 'empty-state');
    d.innerHTML =
      '<div class="empty-icon">&#128679;</div>' +
      '<h1>' + esc(lesson.title) + '</h1>' +
      (lesson.subtitle ? '<p class="empty-sub">' + esc(lesson.subtitle) + '</p>' : '') +
      '<p>This section is still being written. The navigation lane is already prepared for it — add the notes in <code>js/lessons.js</code> and they will appear right here.</p>' +
      '<p>Want to read ahead? Browse the <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener">W3Schools HTML tutorial</a>.</p>' +
      '<button type="button" class="nav-btn" data-back>&larr; Back to HTML Basics</button>';
    $('[data-back]', d).addEventListener('click', function () { navigate('#html-basics'); });
    return d;
  }

  /* ---------- sidebar source link follows the active lesson ---------- */
  function updateSidebarFooter(lesson) {
    const a = document.querySelector('.sidebar-source-link');
    if (!a) return;
    if (lesson && lesson.source) {
      a.href = lesson.source.url;
      a.textContent = lesson.source.label;
    } else {
      a.href = 'https://www.w3schools.com/html/';
      a.textContent = 'W3Schools HTML Tutorial';
    }
  }

  /* ---------- init ---------- */
  function init() {
    els.content = document.getElementById('content');
    els.navList = document.getElementById('navList');
    els.progressLabel = document.getElementById('progressLabel');
    els.progressFill = document.getElementById('progressFill');
    els.menuToggle = document.getElementById('menuToggle');
    els.overlay = document.getElementById('sidebarOverlay');
    els.themeSelect = document.getElementById('themeSelect');
    els.fontSelect = document.getElementById('fontSelect');

    initTheme();
    initFontStyle();
    renderNav();
    route();

    window.addEventListener('hashchange', route);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        if (isMobileNav()) closeMobileNav();
        else setMenuState(true);
      }
    });

    els.menuToggle.addEventListener('click', function () {
      if (isMobileNav()) {
        if (document.body.classList.contains('nav-open')) closeMobileNav();
        else openMobileNav();
      } else {
        setMenuState(document.body.classList.contains('nav-collapsed'));
      }
    });
    els.overlay.addEventListener('click', closeMobileNav);
    window.addEventListener('resize', function () {
      if (!isMobileNav()) {
        document.body.classList.remove('nav-open');
        els.overlay.hidden = true;
      }
    });
  }

  init();




})();
