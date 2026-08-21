/* ==========================================================================
   Maturity Scan Digitaal Toetsen — app.js
   Vanilla JS, geen externe afhankelijkheden. Werkt volledig client-side
   zodat de scan als statische site op GitHub Pages gehost kan worden.
   ========================================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "dtscan-v1";
  const root = document.getElementById("app");

  /* Totaal aantal aspecten, voor voortgangsberekening */
  const TOTAL_ASPECTS = DOMAINS.reduce((n, d) => n + d.aspects.length, 0);

  /* ------------------------------- State -------------------------------- */
  let state = {
    screen: "intro", // intro | legend | survey | results
    domainIndex: 0,
    answers: {} // key: `${domainId}.${aspectId}` -> value 1-5
  };

  function loadState() {
    try {
      const hash = window.location.hash;
      if (hash && hash.startsWith("#s=")) {
        const decoded = JSON.parse(atob(decodeURIComponent(hash.slice(3))));
        if (decoded && decoded.answers) {
          state.answers = decoded.answers;
          if (Object.keys(state.answers).length >= TOTAL_ASPECTS) {
            state.screen = "results";
          }
          save();
          return;
        }
      }
    } catch (e) {
      /* negeer ongeldige hash */
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved && saved.answers) {
          state.answers = saved.answers;
        }
      }
    } catch (e) {
      /* localStorage niet beschikbaar */
    }
  }

  function save() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ answers: state.answers })
      );
    } catch (e) {
      /* negeer opslagfouten (bv. privémodus) */
    }
  }

  function shareUrl() {
    const payload = btoa(JSON.stringify({ answers: state.answers }));
    const url = new URL(window.location.href);
    url.hash = "s=" + encodeURIComponent(payload);
    return url.toString();
  }

  function answeredCount() {
    return Object.keys(state.answers).length;
  }

  function domainProgress(domain) {
    const answered = domain.aspects.filter(
      (a) => state.answers[key(domain, a)] !== undefined
    ).length;
    return { answered, total: domain.aspects.length };
  }

  function key(domain, aspect) {
    return domain.id + "." + aspect.id;
  }

  function domainAverage(domain) {
    const vals = domain.aspects
      .map((a) => state.answers[key(domain, a)])
      .filter((v) => v !== undefined);
    if (!vals.length) return 0;
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }

  function overallAverage() {
    const vals = Object.values(state.answers);
    if (!vals.length) return 0;
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }

  /* ------------------------------ Render -------------------------------- */

  function render() {
    root.innerHTML = "";
    root.appendChild(renderHeader());
    let view;
    if (state.screen === "intro") view = renderIntro();
    else if (state.screen === "legend") view = renderLegend();
    else if (state.screen === "survey") view = renderSurvey();
    else view = renderResults();
    root.appendChild(view);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  function renderHeader() {
    const header = el("header", "app-header");
    const brand = el("div", "brand");
    brand.innerHTML =
      '<span class="brand-mark"><img src="assets/npuls-mark.png" alt="" /></span>' +
      '<span class="brand-text">Npuls<strong>Maturity Scan Digitaal Toetsen</strong></span>';
    brand.addEventListener("click", () => {
      state.screen = "intro";
      render();
    });
    header.appendChild(brand);

    if (state.screen !== "intro") {
      const nav = el("div", "header-progress");
      const pct = Math.round((answeredCount() / TOTAL_ASPECTS) * 100);
      nav.innerHTML =
        '<div class="progress-track"><div class="progress-fill" style="width:' +
        pct +
        '%"></div></div><span class="progress-label">' +
        answeredCount() +
        " / " +
        TOTAL_ASPECTS +
        " beantwoord</span>";
      header.appendChild(nav);
    }
    return header;
  }

  function renderIntro() {
    const wrap = el("section", "screen intro-screen");

    const hero = el("div", "intro-hero");
    hero.innerHTML =
      '<p class="eyebrow">Zelfscan · ' +
      DOMAINS.length +
      ' thema’s · ' +
      TOTAL_ASPECTS +
      ' vragen · circa ' +
      Math.round((TOTAL_ASPECTS * 30) / 60) +
      ' minuten</p>' +
      "<h1>Hoe volwassen is uw digitaal toetsproces?</h1>" +
      '<p class="lede">Deze scan brengt in kaart hoe uw opleiding of instelling ervoor staat op ' +
      DOMAINS.length +
      ' thema’s uit het <em>Handboek Digitaal Toetsen</em>: van visie en beleid tot itembanken, veiligheid, innovatie en de opkomst van AI. Beantwoord per thema een aantal stellingen en ontvang direct een spinnenwebdiagram met concrete aanknopingspunten.</p>';

    const actions = el("div", "intro-actions");
    const startBtn = el("button", "btn btn-primary");
    startBtn.textContent = answeredCount() > 0 ? "Verder met de scan" : "Start de scan";
    startBtn.addEventListener("click", () => {
      state.screen = "survey";
      state.domainIndex = firstUnfinishedDomain();
      render();
    });
    actions.appendChild(startBtn);

    const legendBtn = el("button", "btn btn-ghost");
    legendBtn.textContent = "Bekijk de niveaus A–E";
    legendBtn.addEventListener("click", () => {
      state.screen = "legend";
      render();
    });
    actions.appendChild(legendBtn);

    if (answeredCount() > 0) {
      const resetBtn = el("button", "btn btn-text");
      resetBtn.textContent = "Begin opnieuw";
      resetBtn.addEventListener("click", () => {
        if (confirm("Weet u zeker dat u opnieuw wilt beginnen? Uw antwoorden gaan verloren.")) {
          state.answers = {};
          save();
          render();
        }
      });
      actions.appendChild(resetBtn);
    }

    hero.appendChild(actions);
    wrap.appendChild(hero);

    const grid = el("div", "domain-grid");
    DOMAINS.forEach((d) => {
      const card = el("button", "domain-card");
      card.style.setProperty("--domain-color", d.color);
      const prog = domainProgress(d);
      card.innerHTML =
        '<span class="domain-number">0' + d.number + "</span>" +
        "<h3>" + d.name + "</h3>" +
        '<p class="domain-tagline">' + d.tagline + "</p>" +
        '<p class="domain-chapter">' + d.chapter + "</p>" +
        '<span class="domain-status">' + prog.answered + " / " + prog.total + "</span>";
      card.addEventListener("click", () => {
        state.screen = "survey";
        state.domainIndex = DOMAINS.indexOf(d);
        render();
      });
      grid.appendChild(card);
    });
    wrap.appendChild(grid);

    const sources = el("div", "sources-note");
    sources.innerHTML =
      "Gebaseerd op het <a href='https://sig-dt.github.io/handboek-digitaal-toetsen/' target='_blank' rel='noopener'>Handboek Digitaal Toetsen</a> (SURF / Community Digitaal toetsen en ontwikkelen), " +
      "geïnspireerd op de methodiek van de <a href='https://toetsweb.netlify.app' target='_blank' rel='noopener'>Toetsweb-Scan</a> (HAN) en de <a href='https://www.innovatiematurityscan.nl' target='_blank' rel='noopener'>Innovatie Maturity Scan</a> (TIM Foundation).";
    wrap.appendChild(sources);

    return wrap;
  }

  function firstUnfinishedDomain() {
    for (let i = 0; i < DOMAINS.length; i++) {
      const p = domainProgress(DOMAINS[i]);
      if (p.answered < p.total) return i;
    }
    return 0;
  }

  function renderLegend() {
    const wrap = el("section", "screen legend-screen");
    wrap.innerHTML = '<p class="eyebrow">Vijf niveaus</p><h1>Zo lezen we volwassenheid</h1><p class="lede">Bij elke stelling kiest u het niveau dat het beste aansluit bij de huidige praktijk binnen uw opleiding — niet bij de gewenste situatie.</p>';

    const list = el("div", "legend-list");
    LEVELS.forEach((l) => {
      const row = el("div", "legend-row");
      row.innerHTML =
        '<span class="legend-key">' + l.key + '</span>' +
        '<div><h3>' + l.label + '</h3><p class="legend-short">' + l.short + '</p><p>' + l.description + "</p></div>";
      list.appendChild(row);
    });
    wrap.appendChild(list);

    const back = el("button", "btn btn-primary");
    back.textContent = answeredCount() > 0 ? "Verder met de scan" : "Start de scan";
    back.addEventListener("click", () => {
      state.screen = "survey";
      state.domainIndex = firstUnfinishedDomain();
      render();
    });
    wrap.appendChild(back);
    return wrap;
  }

  function renderSurvey() {
    const domain = DOMAINS[state.domainIndex];
    const wrap = el("section", "screen survey-screen");
    wrap.style.setProperty("--domain-color", domain.color);

    const dots = el("div", "domain-dots");
    DOMAINS.forEach((d, i) => {
      const p = domainProgress(d);
      const dot = el("button", "domain-dot" + (i === state.domainIndex ? " active" : "") + (p.answered === p.total ? " done" : ""));
      dot.title = d.name;
      dot.textContent = d.number;
      dot.addEventListener("click", () => {
        state.domainIndex = i;
        render();
      });
      dots.appendChild(dot);
    });
    wrap.appendChild(dots);

    const heading = el("div", "survey-heading");
    heading.innerHTML =
      '<p class="eyebrow">Thema ' + domain.number + " van " + DOMAINS.length + '</p>' +
      "<h1>" + domain.name + "</h1>" +
      '<p class="lede">' + domain.intro + '</p>' +
      '<a class="chapter-link" href="' + domain.chapterUrl + '" target="_blank" rel="noopener">Lees ' + domain.chapter + " in het handboek →</a>";
    wrap.appendChild(heading);

    const list = el("div", "aspect-list");
    domain.aspects.forEach((aspect) => {
      list.appendChild(renderAspect(domain, aspect));
    });
    wrap.appendChild(list);

    const nav = el("div", "survey-nav");
    if (state.domainIndex > 0) {
      const prev = el("button", "btn btn-ghost");
      prev.textContent = "← Vorig thema";
      prev.addEventListener("click", () => {
        state.domainIndex -= 1;
        render();
      });
      nav.appendChild(prev);
    } else {
      nav.appendChild(el("span", ""));
    }

    const allAnswered = domainProgress(domain).answered === domain.aspects.length;
    const isLast = state.domainIndex === DOMAINS.length - 1;
    const next = el("button", "btn btn-primary" + (allAnswered ? "" : " btn-disabled"));
    next.textContent = isLast ? "Bekijk resultaat" : "Volgend thema →";
    next.addEventListener("click", () => {
      if (!allAnswered) return;
      if (isLast) {
        state.screen = "results";
      } else {
        state.domainIndex += 1;
      }
      render();
    });
    nav.appendChild(next);
    wrap.appendChild(nav);

    return wrap;
  }

  function renderAspect(domain, aspect) {
    const box = el("div", "aspect");
    const head = el("div", "aspect-head");
    head.innerHTML = "<h3>" + aspect.title + "</h3>";
    const infoBtn = el("button", "info-toggle");
    infoBtn.setAttribute("aria-label", "Toon toelichting per niveau");
    infoBtn.textContent = "i";
    head.appendChild(infoBtn);
    box.appendChild(head);

    const info = el("div", "aspect-info hidden");
    LEVELS.forEach((l, i) => {
      const p = el("p", "");
      p.innerHTML = "<strong>" + l.key + " — " + l.label + ":</strong> " + aspect.levels[i];
      info.appendChild(p);
    });
    box.appendChild(info);
    infoBtn.addEventListener("click", () => info.classList.toggle("hidden"));

    const options = el("div", "aspect-options");
    const current = state.answers[key(domain, aspect)];
    LEVELS.forEach((l, i) => {
      const opt = el("button", "aspect-option" + (current === l.value ? " selected" : ""));
      opt.innerHTML =
        '<span class="opt-key">' + l.key + '</span><span class="opt-text">' + aspect.levels[i] + "</span>";
      opt.addEventListener("click", () => {
        state.answers[key(domain, aspect)] = l.value;
        save();
        render();
        scrollAspectIntoView(aspect.id);
      });
      options.appendChild(opt);
    });
    box.appendChild(options);
    box.id = "aspect-" + aspect.id;
    return box;
  }

  function scrollAspectIntoView(id) {
    requestAnimationFrame(() => {
      const node = document.getElementById("aspect-" + id);
      if (node) node.scrollIntoView({ block: "nearest" });
    });
  }

  /* ------------------------------ Resultaten ------------------------------ */

  function renderResults() {
    const wrap = el("section", "screen results-screen");
    const avg = overallAverage();
    const grade = getGradeStamp(avg || 1);

    const heading = el("div", "results-heading");
    heading.innerHTML = '<div class="npuls-arcs"><span></span></div>';
    const titleBlock = el("div", "");
    titleBlock.innerHTML =
      '<p class="eyebrow">Uw resultaat</p><h1>Volwassenheid digitaal toetsen</h1>';
    heading.appendChild(titleBlock);
    const stamp = el("div", "grade-stamp");
    stamp.innerHTML =
      '<span class="stamp-label">' + grade.stamp + '</span><span class="stamp-score">' + avg.toFixed(1) + ' / 5.0</span>';
    heading.appendChild(stamp);
    wrap.appendChild(heading);

    const chartRow = el("div", "results-chart-row");
    chartRow.appendChild(renderRadar());

    const bars = el("div", "domain-bars");
    DOMAINS.forEach((d) => {
      const a = domainAverage(d);
      const row = el("div", "domain-bar-row");
      row.style.setProperty("--domain-color", d.color);
      row.innerHTML =
        '<span class="bar-label">' + d.name + '</span>' +
        '<span class="bar-track"><span class="bar-fill" style="width:' + (a / 5 * 100) + '%"></span></span>' +
        '<span class="bar-value">' + (a ? a.toFixed(1) : "–") + "</span>";
      bars.appendChild(row);
    });
    chartRow.appendChild(bars);
    wrap.appendChild(chartRow);

    const recs = el("div", "recommendations");
    recs.innerHTML = "<h2>Aanknopingspunten per thema</h2>";
    DOMAINS.forEach((d) => {
      const a = domainAverage(d);
      const card = el("div", "rec-card");
      card.style.setProperty("--domain-color", d.color);
      card.innerHTML =
        '<div class="rec-head"><span class="rec-number">0' + d.number + '</span><h3>' + d.name + '</h3><span class="rec-score">' + (a ? a.toFixed(1) : "–") + " / 5</span></div>" +
        "<p>" + getRecommendation(d, a || 1) + "</p>" +
        '<a href="' + d.chapterUrl + '" target="_blank" rel="noopener">' + d.chapter + " →</a>";
      recs.appendChild(card);
    });
    wrap.appendChild(recs);

    const actions = el("div", "results-actions");
    const printBtn = el("button", "btn btn-primary");
    printBtn.textContent = "Bewaar als PDF";
    printBtn.addEventListener("click", () => window.print());
    actions.appendChild(printBtn);

    const shareBtn = el("button", "btn btn-ghost");
    shareBtn.textContent = "Kopieer deelbare link";
    shareBtn.addEventListener("click", () => {
      const url = shareUrl();
      window.history.replaceState(null, "", url);
      navigator.clipboard
        ?.writeText(url)
        .then(() => {
          shareBtn.textContent = "Link gekopieerd ✓";
          setTimeout(() => (shareBtn.textContent = "Kopieer deelbare link"), 2000);
        })
        .catch(() => {
          prompt("Kopieer deze link:", url);
        });
    });
    actions.appendChild(shareBtn);

    const editBtn = el("button", "btn btn-text");
    editBtn.textContent = "Antwoorden aanpassen";
    editBtn.addEventListener("click", () => {
      state.screen = "survey";
      state.domainIndex = 0;
      render();
    });
    actions.appendChild(editBtn);

    const resetBtn = el("button", "btn btn-text");
    resetBtn.textContent = "Nieuwe scan";
    resetBtn.addEventListener("click", () => {
      if (confirm("Weet u zeker dat u een nieuwe scan wilt starten? Uw huidige antwoorden gaan verloren.")) {
        state.answers = {};
        save();
        window.history.replaceState(null, "", window.location.pathname);
        state.screen = "intro";
        render();
      }
    });
    actions.appendChild(resetBtn);

    wrap.appendChild(actions);
    return wrap;
  }

  /* SVG spinnenweb / radarchart voor de zes thema's */
  function renderRadar() {
    const size = 480;
    const cx = size / 2;
    const cy = size / 2;
    const maxR = size / 2 - 92;
    const n = DOMAINS.length;
    const rings = [1, 2, 3, 4, 5];

    const angleFor = (i) => -Math.PI / 2 + (i * 2 * Math.PI) / n;
    const pointFor = (i, value) => {
      const r = (value / 5) * maxR;
      const a = angleFor(i);
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    };

    let svg = '<svg viewBox="0 0 ' + size + " " + size + '" class="radar-svg" role="img" aria-label="Spinnenwebdiagram van de zes thema\'s">';

    /* ringen */
    rings.forEach((ring) => {
      const pts = DOMAINS.map((d, i) => pointFor(i, ring).join(",")).join(" ");
      svg += '<polygon points="' + pts + '" class="radar-ring" />';
    });

    /* assen */
    DOMAINS.forEach((d, i) => {
      const [x, y] = pointFor(i, 5);
      svg += '<line x1="' + cx + '" y1="' + cy + '" x2="' + x + '" y2="' + y + '" class="radar-axis" />';
    });

    /* data polygon */
    const dataPts = DOMAINS.map((d, i) => pointFor(i, domainAverage(d) || 0.15).join(",")).join(" ");
    svg += '<polygon points="' + dataPts + '" class="radar-data" />';
    DOMAINS.forEach((d, i) => {
      const [x, y] = pointFor(i, domainAverage(d) || 0.15);
      svg += '<circle cx="' + x + '" cy="' + y + '" r="5" class="radar-dot" style="--domain-color:' + d.color + '" />';
    });

    /* labels */
    DOMAINS.forEach((d, i) => {
      const [x, y] = pointFor(i, 5.85);
      const anchor = Math.abs(x - cx) < 4 ? "middle" : x > cx ? "start" : "end";
      svg +=
        '<text x="' + x + '" y="' + y + '" text-anchor="' + anchor + '" class="radar-label">0' + d.number + "</text>";
    });

    svg += "</svg>";
    const container = el("div", "radar-container");
    container.innerHTML = svg;
    return container;
  }

  /* ------------------------------ Helpers -------------------------------- */
  function el(tag, className) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    return node;
  }

  /* ------------------------------- Init ----------------------------------- */
  loadState();
  render();
})();
