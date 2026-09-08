/* ============================================================
   ASEER — procedural "scenic" illustrations
   Every photo slot on the site is a placeholder SVG built only
   from the locked brand palette (DARK_GREEN / GOLD / SAGE / WHITE,
   plus WASH/GRAD used strictly as translucent overlays) until real
   photography is supplied. Deterministic per data-seed so the same
   place always renders the same scene.

   Composition is NOT one recycled mountain silhouette everywhere —
   it is chosen per the item's actual region (peaks / tihama / coast
   / desert), resolved automatically by looking the seed up in
   window.ASEER_DATA, so a coastal town reads as a coast, a desert
   oasis reads as a desert, etc.
   ============================================================ */
(function(){
  function hash(str){
    let h = 0;
    for (let i=0;i<str.length;i++){ h = (h<<5)-h + str.charCodeAt(i); h|=0; }
    return Math.abs(h);
  }
  function rng(seed){
    let s = seed || 1;
    return function(){ s = (s*16807) % 2147483647; return (s-1)/2147483646; };
  }

  const DARK = '#003B2B', GOLD = '#C89A38', SAGE = '#EFF4EC', WHITE = '#FFFFFF', WASH = '#092A23';
  const REGIONS = ['peaks','tihama','coast','desert'];

  // ---- Resolve which region-family to draw for a given seed ----
  function resolveRegion(seedStr){
    const D = window.ASEER_DATA;
    if (D){
      const cols = [D.destinations, D.experiences, D.restaurants, D.stays, D.events, D.routes];
      for (let i=0;i<cols.length;i++){
        const col = cols[i];
        if (col && col[seedStr] && col[seedStr].region) return col[seedStr].region;
      }
      // gallery-variant seeds like "abha-1".."abha-4" -> strip trailing "-N"
      const m = seedStr.match(/^(.+)-\d+$/);
      if (m && D.destinations && D.destinations[m[1]]) return D.destinations[m[1]].region;
    }
    // seeds that name a region directly, e.g. "region-peaks"
    for (let i=0;i<REGIONS.length;i++){ if (seedStr.indexOf(REGIONS[i]) !== -1) return REGIONS[i]; }
    return null;
  }

  // ---- Sky + sun/moon, shared by every family ----
  function skyAndSun(rand, w, h, mood){
    let bg, sunFill, sunOp;
    if (mood === 'night'){
      bg = `<rect width="${w}" height="${h}" fill="${DARK}"/>`;
      sunFill = SAGE; sunOp = 0.85;
    } else if (mood === 'dusk'){
      // Muted dusk tone: solid SAGE base with a translucent WASH wash
      // over it — WASH stays an overlay, never a solid fill.
      bg = `<rect width="${w}" height="${h}" fill="${SAGE}"/><rect width="${w}" height="${h}" fill="${WASH}" opacity="0.5"/>`;
      sunFill = GOLD; sunOp = 0.92;
    } else {
      bg = `<rect width="${w}" height="${h}" fill="${SAGE}"/>`;
      sunFill = GOLD; sunOp = 1;
    }
    const sunX = w*(0.62 + rand()*0.28);
    const sunY = h*(0.14 + rand()*0.16);
    const sunR = h*(0.07 + rand()*0.03);
    const sun = `<circle cx="${sunX.toFixed(1)}" cy="${sunY.toFixed(1)}" r="${sunR.toFixed(1)}" fill="${sunFill}" opacity="${sunOp}"/>`;
    let stars = '';
    if (mood === 'night'){
      for (let i=0;i<10;i++){
        const x = rand()*w, y = h*(0.06+rand()*0.35), r = 0.6 + rand()*1.1;
        stars += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="${SAGE}" opacity="${(0.35+rand()*0.4).toFixed(2)}"/>`;
      }
    }
    return bg + stars + sun;
  }

  function haze(rand, w, h, mood){
    const fogY = h * (0.6 + rand()*0.08);
    return `<rect x="0" y="${fogY.toFixed(1)}" width="${w}" height="${(h*0.06).toFixed(1)}" fill="${SAGE}" opacity="${mood==='night'?0.06:0.16}"/>`;
  }

  // ---- Family 1: peaks — jagged high-mountain silhouette ----
  function scenePeaks(rand, w, h, mood){
    let layers = '';
    for (let i=0;i<3;i++){
      const baseY = h * (0.42 + i*0.17 + rand()*0.03);
      const peakH = h * (0.16 - i*0.03);
      const segs = 4 + Math.floor(rand()*2);
      let d = `M0,${h} L0,${baseY}`;
      for (let s=0; s<=segs; s++){
        const x = (w/segs)*s;
        const y = baseY - (Math.sin(s*1.7 + i + rand()*2)*0.5+0.5)*peakH - rand()*peakH*0.3;
        d += ` L${x.toFixed(1)},${y.toFixed(1)}`;
      }
      d += ` L${w},${h} Z`;
      const opacity = mood === 'night' ? (0.9 - i*0.22) : (0.95 - i*0.24);
      layers += `<path d="${d}" fill="${DARK}" opacity="${opacity.toFixed(2)}"/>`;
    }
    return layers;
  }

  // ---- Family 2: tihama — stepped agricultural terraces + a stone village ----
  function sceneTihama(rand, w, h, mood){
    let out = '';
    const bands = 4;
    for (let i=0;i<bands;i++){
      const inset = w * (0.015 + i*0.045 + rand()*0.015);
      const top = h * (0.5 + i*0.115 + rand()*0.015);
      const opacity = mood === 'night' ? (0.88 - i*0.16) : (0.92 - i*0.18);
      out += `<path d="M${inset.toFixed(1)},${h} L${inset.toFixed(1)},${top.toFixed(1)} L${(w-inset).toFixed(1)},${top.toFixed(1)} L${(w-inset).toFixed(1)},${h} Z" fill="${DARK}" opacity="${opacity.toFixed(2)}"/>`;
    }
    // small stone-village block silhouettes sitting on the topmost terrace
    const topBandY = h * (0.5 + rand()*0.02);
    const blockCount = 3 + Math.floor(rand()*3);
    for (let b=0;b<blockCount;b++){
      const bw = w * (0.02 + rand()*0.02);
      const bh = h * (0.03 + rand()*0.035);
      const bx = w * (0.1 + rand()*0.75);
      out += `<rect x="${bx.toFixed(1)}" y="${(topBandY-bh).toFixed(1)}" width="${bw.toFixed(1)}" height="${bh.toFixed(1)}" fill="${DARK}" opacity="0.9"/>`;
    }
    return out;
  }

  // ---- Family 3: coast — calm sea, ripples, a small sail ----
  function sceneCoast(rand, w, h, mood){
    const horizon = h * (0.56 + rand()*0.05);
    let out = `<path d="M0,${h} L0,${horizon.toFixed(1)} L${w},${horizon.toFixed(1)} L${w},${h} Z" fill="${DARK}" opacity="${mood==='night'?0.55:0.8}"/>`;
    for (let i=0;i<3;i++){
      const y = horizon + (h-horizon) * (0.22 + i*0.24 + rand()*0.05);
      const amp = h*0.01;
      const segs = 6;
      let d = `M0,${y.toFixed(1)}`;
      for (let s=1;s<=segs;s++){
        const x = (w/segs)*s;
        const yy = y + (s%2===0? amp : -amp);
        d += ` Q${(x-(w/segs)/2).toFixed(1)},${yy.toFixed(1)} ${x.toFixed(1)},${y.toFixed(1)}`;
      }
      out += `<path d="${d}" fill="none" stroke="${SAGE}" stroke-width="${(h*0.006).toFixed(1)}" opacity="${(0.22-i*0.05).toFixed(2)}"/>`;
    }
    // a small sailboat silhouette
    const bx = w*(0.14 + rand()*0.6), by = horizon;
    const bh = h*0.09, sailW = w*0.035;
    out += `<path d="M${bx.toFixed(1)},${by.toFixed(1)} L${(bx+sailW).toFixed(1)},${by.toFixed(1)} L${bx.toFixed(1)},${(by-bh).toFixed(1)} Z" fill="${DARK}" opacity="0.85"/>`;
    out += `<rect x="${(bx-sailW*0.9).toFixed(1)}" y="${by.toFixed(1)}" width="${(sailW*1.8).toFixed(1)}" height="${(h*0.012).toFixed(1)}" fill="${DARK}" opacity="0.85"/>`;
    return out;
  }

  // ---- Family 4: desert — smooth dunes + an oasis cluster ----
  function sceneDesert(rand, w, h, mood){
    let out = '';
    for (let i=0;i<3;i++){
      const baseY = h * (0.55 + i*0.14 + rand()*0.03);
      const peakH = h * (0.09 - i*0.015);
      const crestX = w * (0.3 + rand()*0.4);
      const opacity = mood === 'night' ? (0.85 - i*0.2) : (0.92 - i*0.22);
      out += `<path d="M0,${h} L0,${(baseY+peakH*0.4).toFixed(1)} Q${crestX.toFixed(1)},${(baseY-peakH).toFixed(1)} ${w},${(baseY+peakH*0.5).toFixed(1)} L${w},${h} Z" fill="${DARK}" opacity="${opacity.toFixed(2)}"/>`;
    }
    // a small oasis cluster (palm-like dots) near the dune base
    const cx = w*(0.12+rand()*0.7), cy = h*(0.86+rand()*0.05);
    const n = 3 + Math.floor(rand()*3);
    for (let i=0;i<n;i++){
      const x = cx + (i-n/2)*(w*0.018);
      const r = h*(0.012+rand()*0.008);
      out += `<circle cx="${x.toFixed(1)}" cy="${(cy-r).toFixed(1)}" r="${r.toFixed(1)}" fill="${DARK}" opacity="0.8"/>`;
      out += `<rect x="${(x-w*0.003).toFixed(1)}" y="${cy.toFixed(1)}" width="${(w*0.006).toFixed(1)}" height="${(h*0.03).toFixed(1)}" fill="${DARK}" opacity="0.8"/>`;
    }
    return out;
  }

  const SCENES = { peaks: scenePeaks, tihama: sceneTihama, coast: sceneCoast, desert: sceneDesert };

  function buildSVG(seedStr, mood, w, h){
    const rand = rng(hash(seedStr) || 1);
    w = w || 400; h = h || 300;
    mood = mood || 'day';
    let region = resolveRegion(seedStr);
    if (!region) region = REGIONS[hash(seedStr) % REGIONS.length];
    const sceneFn = SCENES[region] || scenePeaks;

    const back = skyAndSun(rand, w, h, mood);
    const fg = sceneFn(rand, w, h, mood);
    const fog = haze(rand, w, h, mood);

    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice" style="width:100%;height:100%;display:block;">
      ${back}
      ${fg}
      ${fog}
    </svg>`;
  }

  function renderAll(root, force){
    const selector = force ? '.scenic' : '.scenic:not([data-rendered])';
    (root||document).querySelectorAll(selector).forEach(function(el){
      const seed = el.getAttribute('data-seed') || el.getAttribute('data-variant') || Math.random().toString();
      const mood = el.getAttribute('data-mood') || 'day';
      // Measure the element's ACTUAL rendered box and generate the SVG's
      // viewBox to match it exactly, so nothing gets stretched/cropped
      // regardless of how wide or short its container is.
      const rect = el.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width)) || 400;
      const h = Math.max(1, Math.round(rect.height)) || 300;
      el.innerHTML = buildSVG(seed, mood, w, h);
      el.setAttribute('data-rendered', '1');
    });
  }

  window.ASEER_SCENIC = { render: renderAll, buildSVG: buildSVG };
  document.addEventListener('DOMContentLoaded', function(){ renderAll(document); });

  // Re-render on resize (debounced) so scenics stay correctly proportioned
  // across the site's responsive breakpoints instead of freezing at
  // whatever size they first painted at.
  let resizeTimer = null;
  window.addEventListener('resize', function(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function(){ renderAll(document, true); }, 200);
  });
})();
