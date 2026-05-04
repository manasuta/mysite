// js/main.js — refined behaviours

function esc(s){return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

/* ── Render: Timeline ── */
function renderTimeline(){
  const c = document.querySelector('.timeline'); if(!c) return;
  c.innerHTML = PORTFOLIO_DATA.timeline.map(it=>{
    const dotCls = it.dot!=='default' ? ` ${it.dot}` : '';
    const badges = it.badges.length
      ? `<div class="tl-badges">${it.badges.map(b=>`<span class="tl-badge badge-${b.type}">${b.text}</span>`).join('')}</div>`
      : '';
    return `<div class="tl-item reveal">
      <div class="tl-dot${dotCls}"></div>
      <div class="tl-date">${it.date}</div>
      <div class="tl-title" data-en="${esc(it.title.en)}" data-ja="${esc(it.title.ja)}">${it.title.ja}</div>
      <div class="tl-body"  data-en="${esc(it.body.en)}"  data-ja="${esc(it.body.ja)}">${it.body.ja}</div>
      ${badges}
    </div>`;
  }).join('');
}

/* ── Render: Strengths ── */
function renderStrengths(){
  const g = document.querySelector('.strengths'); if(!g) return;
  g.innerHTML = PORTFOLIO_DATA.strengths.map((s,i)=>{
    const items = s.items.map(x=>`<li data-en="${esc(x.en)}" data-ja="${esc(x.ja)}">${x.ja}</li>`).join('');
    return `<div class="strength reveal">
      <div class="label"><span class="num">0${i+1}</span><span data-en="${esc(s.label.en)}" data-ja="${esc(s.label.ja)}">${s.label.ja}</span></div>
      <div class="title" data-en="${esc(s.title.en)}" data-ja="${esc(s.title.ja)}">${s.title.ja}</div>
      <ul>${items}</ul>
    </div>`;
  }).join('');
}

/* ── Render: Vision ── */
function renderActivities(){
  const g = document.querySelector('.vision-grid'); if(!g) return;
  const lbl = { active:{ja:'進行中',en:'IN PROGRESS'}, preparing:{ja:'準備中',en:'PREPARING'} };
  g.innerHTML = PORTFOLIO_DATA.activities.map(a=>{
    const s = lbl[a.status];
    return `<div class="vision-card reveal">
      <div class="vc-status ${a.status}" data-en="${s.en}" data-ja="${s.ja}">${s.ja}</div>
      <div class="vc-title" data-en="${esc(a.title.en)}" data-ja="${esc(a.title.ja)}">${a.title.ja}</div>
      <div class="vc-body"  data-en="${esc(a.body.en)}"  data-ja="${esc(a.body.ja)}">${a.body.ja}</div>
    </div>`;
  }).join('');
}

/* ── Cursor aura ── */
function setupAura(){
  if (matchMedia('(pointer: coarse)').matches) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const aura = document.createElement('div');
  aura.className = 'cursor-aura';
  aura.setAttribute('aria-hidden','true');
  aura.innerHTML = `
    <div class="ca-layer ca-outer"></div>
    <div class="ca-layer ca-mid"></div>
    <div class="ca-layer ca-ring"></div>
    <div class="ca-layer ca-ripple"></div>
    <div class="ca-layer ca-core"></div>`;
  document.body.appendChild(aura);

  let mx=0,my=0,ox=0,oy=0,nx=0,ny=0,cx=0,cy=0;
  const outer  = aura.querySelector('.ca-outer');
  const mid    = aura.querySelector('.ca-mid');
  const ring   = aura.querySelector('.ca-ring');
  const ripple = aura.querySelector('.ca-ripple');
  const core   = aura.querySelector('.ca-core');
  let raf=null;

  function tick(){
    ox += (mx-ox)*0.08; oy += (my-oy)*0.08;
    nx += (mx-nx)*0.18; ny += (my-ny)*0.18;
    cx += (mx-cx)*0.45; cy += (my-cy)*0.45;
    aura.style.transform = `translate3d(${ox}px,${oy}px,0)`;
    mid.style.left    = `${50+(nx-ox)*0.25}%`;
    mid.style.top     = `${50+(ny-oy)*0.25}%`;
    ring.style.left   = `${50+(cx-ox)*0.4}%`;
    ring.style.top    = `${50+(cy-oy)*0.4}%`;
    ripple.style.left = ring.style.left;
    ripple.style.top  = ring.style.top;
    core.style.left   = `${50+(cx-ox)*0.5}%`;
    core.style.top    = `${50+(cy-oy)*0.5}%`;
    if(Math.hypot(mx-ox,my-oy)>0.4||Math.hypot(mx-cx,my-cy)>0.4){ raf=requestAnimationFrame(tick); } else { raf=null; }
  }

  document.addEventListener('mousemove',e=>{ mx=e.clientX; my=e.clientY; if(!raf) raf=requestAnimationFrame(tick); });
  document.addEventListener('mouseleave',()=>{ aura.style.opacity='0'; });
  document.addEventListener('mouseenter',()=>{ aura.style.opacity='1'; });

  const isInteractive = el=> el&&el.closest&&el.closest('a,button,.strength,.tl-item,.vision-card,.case,.proj-card,.award-card,.pill,.lang-btn,.nav-links a');
  document.addEventListener('mouseover', e=>{ if(isInteractive(e.target)) aura.classList.add('is-hover'); });
  document.addEventListener('mouseout',  e=>{ if(isInteractive(e.target)&&!isInteractive(e.relatedTarget)) aura.classList.remove('is-hover'); });
  document.addEventListener('mousedown', ()=>{ aura.classList.remove('is-click'); void aura.offsetWidth; aura.classList.add('is-click'); });
  aura.addEventListener('animationend', ()=>aura.classList.remove('is-click'), true);
}

/* ── Scroll reveal ── */
function setupReveal(){
  const obs = new IntersectionObserver(es=>{
    es.forEach((e,i)=>{
      if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('on'),i*60); obs.unobserve(e.target); }
    });
  },{threshold:.12,rootMargin:'0px 0px -10% 0px'});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

/* ── Scroll motion: parallax ── */
function setupScrollMotion(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const sections = [...document.querySelectorAll('section')];
  let ticking=false;
  function update(){
    ticking=false;
    const vh=window.innerHeight;
    const hero=document.getElementById('hero');
    if(hero){
      const r=hero.getBoundingClientRect();
      const t=Math.max(-1,Math.min(1,-r.top/vh));
      const glow=hero.querySelector('.hero-glow');
      if(glow) glow.style.transform=`translate3d(0,${t*40}px,0)`;
      const mq=hero.querySelector('.hero-marquee');
      if(mq) mq.style.transform=`translate3d(0,${t*-18}px,0)`;
    }
    document.querySelectorAll('.sec-head').forEach(el=>{
      const r=el.getBoundingClientRect();
      if(r.top<vh&&r.bottom>0){
        el.style.setProperty('--p',(1-Math.max(0,Math.min(1,r.top/vh))).toFixed(3));
      }
    });
    sections.forEach(sec=>{
      const r=sec.getBoundingClientRect();
      sec.style.setProperty('--sp',Math.max(0,Math.min(1,(vh-r.top)/(vh+r.height))).toFixed(3));
    });
    const cv=document.querySelector('.case-visuals');
    if(cv){
      const r=cv.getBoundingClientRect();
      if(r.top<vh&&r.bottom>0) cv.style.setProperty('--lift',`${((vh-r.top)/(vh+r.height)-0.5)*-30}px`);
    }
  }
  window.addEventListener('scroll',()=>{ if(!ticking){ requestAnimationFrame(update); ticking=true; } },{passive:true});
  window.addEventListener('resize',update);
  update();
}

/* ── Language toggle ── */
const STORAGE_LANG='portfolio-lang';
function applyLang(lang){
  document.querySelectorAll('[data-en]').forEach(el=>{ const v=el.dataset[lang]; if(v!==undefined) el.innerHTML=v; });
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  document.documentElement.lang=lang;
  localStorage.setItem(STORAGE_LANG,lang);
}

/* ── Active nav ── */
function setupNav(){
  const links=document.querySelectorAll('.nav-links a[href^="#"]');
  const ids=[...links].map(a=>a.getAttribute('href').slice(1));
  const secs=ids.map(id=>document.getElementById(id)).filter(Boolean);
  if(!secs.length) return;
  const obs=new IntersectionObserver(es=>{
    es.forEach(e=>{
      if(!e.isIntersecting) return;
      const id=e.target.id;
      links.forEach(a=>a.classList.toggle('nav-active',a.getAttribute('href')===`#${id}`));
    });
  },{threshold:.25,rootMargin:'-80px 0px -55% 0px'});
  secs.forEach(s=>obs.observe(s));
}

/* ── Scroll progress bar ── */
function setupProgress(){
  const bar=document.createElement('div'); bar.className='scroll-bar';
  const fill=document.createElement('div'); fill.className='scroll-fill';
  bar.appendChild(fill); document.body.appendChild(bar);
  window.addEventListener('scroll',()=>{
    const max=document.documentElement.scrollHeight-window.innerHeight;
    fill.style.width=Math.min(100,(window.scrollY/max)*100)+'%';
  },{passive:true});
}

/* ── Card pointer glow ── */
function setupCardGlow(){
  if(matchMedia('(pointer: coarse)').matches) return;
  document.querySelectorAll('.strength,.vision-card,.case,.proj-card,.award-card').forEach(card=>{
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      card.style.setProperty('--mx',`${((e.clientX-r.left)/r.width)*100}%`);
      card.style.setProperty('--my',`${((e.clientY-r.top)/r.height)*100}%`);
    });
  });
}

/* ── Tweaks panel ── */
function setupTweaks(){
  const PANEL_KEY='portfolio-tweaks';
  const defaults={accent:'blue',density:'comfy',motion:'standard'};
  const saved=(()=>{ try{return Object.assign({},defaults,JSON.parse(localStorage.getItem(PANEL_KEY)||'{}'));} catch(e){return defaults;} })();
  let state=saved;
  const ACCENTS={
    blue:  {accent:'#5E9BFF',accent2:'#93BBFF',soft:'rgba(94,155,255,0.10)',line:'rgba(94,155,255,0.28)'},
    purple:{accent:'#A78BFA',accent2:'#C4B5FD',soft:'rgba(167,139,250,0.10)',line:'rgba(167,139,250,0.28)'},
    green: {accent:'#46D38B',accent2:'#7CE6AE',soft:'rgba(70,211,139,0.10)',line:'rgba(70,211,139,0.28)'},
    amber: {accent:'#FFB454',accent2:'#FFCB85',soft:'rgba(255,180,84,0.10)',line:'rgba(255,180,84,0.28)'}
  };
  const MOTION={calm:0.6,standard:1,expressive:1.4};

  function apply(){
    const a=ACCENTS[state.accent]||ACCENTS.blue;
    const r=document.documentElement.style;
    r.setProperty('--accent',a.accent);
    r.setProperty('--accent-2',a.accent2);
    r.setProperty('--accent-soft',a.soft);
    r.setProperty('--accent-line',a.line);
    document.body.dataset.density=state.density;
    document.documentElement.style.setProperty('--motion',MOTION[state.motion]??1);
    localStorage.setItem(PANEL_KEY,JSON.stringify(state));
    panel.querySelectorAll('[data-acc]').forEach(b=>b.classList.toggle('on',b.dataset.acc===state.accent));
    panel.querySelectorAll('[data-den]').forEach(b=>b.classList.toggle('on',b.dataset.den===state.density));
    panel.querySelectorAll('[data-mot]').forEach(b=>b.classList.toggle('on',b.dataset.mot===state.motion));
  }

  const panel=document.createElement('div');
  panel.className='tweaks';
  panel.innerHTML=`
    <div class="tweaks-head">
      <span class="t">Tweaks</span>
      <button class="x" aria-label="close">×</button>
    </div>
    <div class="tweaks-row">
      <span class="lbl">Accent</span>
      <div class="tweaks-swatches">
        <button data-acc="blue"   style="background:#5E9BFF"></button>
        <button data-acc="purple" style="background:#A78BFA"></button>
        <button data-acc="green"  style="background:#46D38B"></button>
        <button data-acc="amber"  style="background:#FFB454"></button>
      </div>
    </div>
    <div class="tweaks-row">
      <span class="lbl">Density</span>
      <div class="tweaks-seg">
        <button data-den="cozy">Cozy</button>
        <button data-den="comfy">Comfy</button>
        <button data-den="airy">Airy</button>
      </div>
    </div>
    <div class="tweaks-row">
      <span class="lbl">Motion</span>
      <div class="tweaks-seg">
        <button data-mot="calm">Calm</button>
        <button data-mot="standard">Std</button>
        <button data-mot="expressive">Bold</button>
      </div>
    </div>`;
  document.body.appendChild(panel);

  panel.querySelector('.x').addEventListener('click',()=>{ panel.classList.remove('open'); window.parent.postMessage({type:'__edit_mode_dismissed'},'*'); });
  panel.querySelectorAll('[data-acc]').forEach(b=>b.addEventListener('click',()=>{ state.accent=b.dataset.acc; apply(); }));
  panel.querySelectorAll('[data-den]').forEach(b=>b.addEventListener('click',()=>{ state.density=b.dataset.den; apply(); }));
  panel.querySelectorAll('[data-mot]').forEach(b=>b.addEventListener('click',()=>{ state.motion=b.dataset.mot; apply(); }));
  apply();

  window.addEventListener('message',e=>{
    const d=e.data||{};
    if(d.type==='__activate_edit_mode')   panel.classList.add('open');
    if(d.type==='__deactivate_edit_mode') panel.classList.remove('open');
  });
  window.parent.postMessage({type:'__edit_mode_available'},'*');
}

/* ── Mobile nav hamburger ── */
function setupMobileNav(){
  const btn = document.querySelector('.nav-menu');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;

  function close() {
    btn.classList.remove('open');
    links.classList.remove('mob-open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', () => {
    const opening = !links.classList.contains('mob-open');
    if (opening) {
      btn.classList.add('open');
      links.classList.add('mob-open');
      btn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      close();
    }
  });

  links.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ── Boot ── */
renderTimeline();
renderStrengths();
renderActivities();
setupReveal();
setupAura();
setupScrollMotion();
setupCardGlow();
setupNav();
setupProgress();
setupMobileNav();
setupTweaks();

document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.lang)));
applyLang(localStorage.getItem(STORAGE_LANG)||'ja');

// ── SECTION DOT NAV + SWEEP BORDER ──────────────────────────────
(function () {
  const sections = [...document.querySelectorAll('section[id]')];

  // Label map (bilingual — show current lang)
  const LABELS = {
    hero:'Top', about:'About', timeline:'Timeline', skills:'Skills',
    projects:'Work', vision:'Now', awards:'Awards', contact:'Contact'
  };

  // Build fixed dot nav
  const nav = document.createElement('div');
  nav.className = 'section-nav';
  nav.setAttribute('aria-hidden', 'true');

  const items = sections.map(s => {
    const item = document.createElement('div');
    item.className = 'sn-item';
    item.innerHTML = `<span class="sn-label">${LABELS[s.id] || s.id}</span><span class="sn-dot"></span>`;
    item.addEventListener('click', () => s.scrollIntoView({ behavior: 'smooth' }));
    nav.appendChild(item);
    return { item, section: s };
  });
  document.body.appendChild(nav);

  // Observe sections — update dot + trigger sweep line
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;

      // Active dot
      items.forEach(({ item, section }) =>
        item.classList.toggle('active', section.id === id));

      // One-time sweep border
      if (id !== 'hero') entry.target.classList.add('sec-entered');
    });
  }, { threshold: 0.18 });

  sections.forEach(s => obs.observe(s));
})();

// ── HERO CODE TYPING ANIMATION ───────────────────────────────────
(function () {
  const hero = document.getElementById('hero');
  if (!hero) return;

  // Swift code snippets — real code from my projects
  const SNIPPETS = [
    {
      file: 'SigNinja.swift',
      code: `// 手話ジェスチャーをリアルタイムで認識する
@MainActor
func detectSign(_ buffer: CVPixelBuffer) {
  let req = VNDetectHumanHandPoseRequest()
  req.maximumHandCount = 1
  let handler = VNImageRequestHandler(
    cvPixelBuffer: buffer
  )
  try? handler.perform([req])
  guard let obs = req.results?.first
  else { return }
  let sign = model.classify(obs)
  withAnimation(.spring(response: 0.3)) {
    self.currentSign = sign
  }
}`
    },
    {
      file: 'MangaCapture.swift',
      code: `// 日常のポーズを漫画シーンに変換する
struct MangaView: View {
  @StateObject var vm = MangaCaptureVM()

  var body: some View {
    ZStack {
      CameraPreview(session: vm.session)
        .ignoresSafeArea()
      if let r = vm.mangaResult {
        CompositeView(
          image: r.image,
          bubble: r.speechBubble
        )
        .transition(.scale
          .combined(with: .opacity))
      }
      CaptureButton { vm.capture() }
        .frame(maxHeight: .infinity,
               alignment: .bottom)
    }
  }
}`
    },
    {
      file: 'TaskRow.swift',
      code: `// 課題の締め切りを管理する
struct TaskRow: View {
  let task: Task
  @Binding var isChecked: Bool

  var body: some View {
    HStack(spacing: 12) {
      CheckCircle(checked: $isChecked)
        .frame(width: 22, height: 22)
      VStack(alignment: .leading, spacing: 3) {
        Text(task.title)
          .font(.headline)
        HStack {
          Label(task.dueDateLabel,
                systemImage: "calendar")
          if task.hasReminder {
            Label(task.reminderLabel,
                  systemImage: "bell")
          }
        }
        .font(.caption)
        .foregroundStyle(.secondary)
      }
      Spacer()
      if task.isFlagged {
        Image(systemName: "flag.fill")
          .foregroundStyle(.red)
      }
    }
    .padding(.horizontal)
  }
}`
    }
  ];

  // Build the terminal element
  const terminal = document.createElement('div');
  terminal.className = 'hero-code';
  terminal.setAttribute('aria-hidden', 'true');
  terminal.innerHTML = `
    <div class="hc-bar">
      <span class="hc-dot r"></span>
      <span class="hc-dot y"></span>
      <span class="hc-dot g"></span>
      <span class="hc-fname" id="hc-fname"></span>
    </div>
    <div class="hc-body" id="hc-body"></div>`;
  hero.appendChild(terminal);

  const fnameEl = document.getElementById('hc-fname');
  const bodyEl  = document.getElementById('hc-body');
  if (!fnameEl || !bodyEl) return;

  // Minimal Swift syntax highlighter
  const KW = new Set([
    'import','struct','class','enum','func','var','let','if','else','for',
    'return','guard','switch','case','self','true','false','nil','try','await',
    'async','static','override','mutating','private','public','some','where',
    'in','do','throws','with','get','set'
  ]);
  function esc(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
  function highlight(text) {
    let out = '', i = 0;
    while (i < text.length) {
      // comment
      if (text[i]==='/' && text[i+1]==='/') {
        const end = text.indexOf('\n', i);
        const chunk = end < 0 ? text.slice(i) : text.slice(i, end);
        out += `<span class="tk-cm">${esc(chunk)}</span>`;
        i += chunk.length; continue;
      }
      // string
      if (text[i] === '"') {
        let j = i + 1;
        while (j < text.length && text[j] !== '"') j++;
        out += `<span class="tk-st">${esc(text.slice(i, j+1))}</span>`;
        i = j + 1; continue;
      }
      // @attribute
      if (text[i] === '@') {
        const m = text.slice(i).match(/^@[A-Za-z][A-Za-z0-9]*/);
        if (m) { out += `<span class="tk-at">${esc(m[0])}</span>`; i += m[0].length; continue; }
      }
      // word
      const wm = text.slice(i).match(/^[A-Za-z_][A-Za-z0-9_]*/);
      if (wm) {
        const w = wm[0];
        const cls = KW.has(w) ? 'tk-kw' : (/^[A-Z]/.test(w) ? 'tk-ty' : 'tk-df');
        out += `<span class="${cls}">${esc(w)}</span>`;
        i += w.length; continue;
      }
      // number
      const nm = text.slice(i).match(/^[0-9]+(\.[0-9]+)?/);
      if (nm) { out += `<span class="tk-nu">${nm[0]}</span>`; i += nm[0].length; continue; }
      // punctuation vs other
      const ch = text[i];
      const isPunc = /[{}()\[\].,;:<>]/.test(ch);
      out += isPunc ? `<span class="tk-pu">${esc(ch)}</span>` : esc(ch);
      i++;
    }
    return out;
  }

  let si = 0, ci = 0, deleting = false;

  function tick() {
    const { file, code } = SNIPPETS[si];
    fnameEl.textContent = file;

    ci = deleting ? Math.max(0, ci - 2) : Math.min(code.length, ci + 1);
    bodyEl.innerHTML = highlight(code.slice(0, ci)) + '<span class="hc-cursor"></span>';

    let delay = deleting ? 14 : 48;
    if (!deleting && ci === code.length) { delay = 2400; deleting = true; }
    else if (deleting && ci === 0) {
      deleting = false;
      si = (si + 1) % SNIPPETS.length;
      delay = 700;
    }
    setTimeout(tick, delay);
  }

  // Start after page entrance animations settle
  setTimeout(tick, 1500);
})();

// ── SECTION TRACKING → body[data-section] for per-section card glow ──
(function () {
  const sections = [...document.querySelectorAll('section[id]')];

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) document.body.dataset.section = e.target.id;
    });
  }, { threshold: 0.25 });

  sections.forEach(s => obs.observe(s));

  // Extend card glow to all new card types
  if (!matchMedia('(pointer: coarse)').matches) {
    document.querySelectorAll(
      '.strength,.vision-card,.case,.proj-card,.award-card,.skill-group,.tl-item'
    ).forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width)  * 100}%`);
        card.style.setProperty('--my', `${((e.clientY - r.top)  / r.height) * 100}%`);
      });
    });
  }
})();

// ── SECTION COLOR TRACKING (scroll-based, reliable override) ──
(function () {
  const secs = [...document.querySelectorAll('section[id]')];

  function update() {
    const mid = window.innerHeight * 0.45;
    let active = secs[0]?.id ?? 'hero';
    for (const s of secs) {
      if (s.getBoundingClientRect().top <= mid) active = s.id;
    }
    if (document.body.dataset.section !== active) {
      document.body.dataset.section = active;
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  update(); // initialize immediately on load
})();

/* ── Ambient Data Dust (Canvas Parallax) ── */
function setupDataDust() {
  // スマホなど処理を軽くしたい場合はスキップ（好みで外してもOK）
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:0;pointer-events:none;opacity:0.45;';
  // 背景ノイズのすぐ下あたりに挿入
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let w, h, particles = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.r = Math.random() * 1.2 + 0.3; // 極小のサイズ
      this.vx = (Math.random() - 0.5) * 0.15;
      this.vy = (Math.random() - 0.5) * 0.15 - 0.15; // ゆっくり上に昇る
      this.alpha = Math.random() * 0.4 + 0.1;
    }
    update(mx, my) {
      this.x += this.vx;
      this.y += this.vy;
      // マウスの動きに逆らうパララックス効果
      this.x -= mx * 0.2;
      this.y -= my * 0.2;

      // 画面外に出たらループ
      if (this.x < 0) this.x = w;
      if (this.x > w) this.x = 0;
      if (this.y < 0) this.y = h;
      if (this.y > h) this.y = 0;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 70; i++) particles.push(new Particle());

  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;

  document.addEventListener('mousemove', e => {
    // マウス位置を -1 〜 1 に正規化
    targetX = (e.clientX / w - 0.5) * 2;
    targetY = (e.clientY / h - 0.5) * 2;
  });

  function animate() {
    ctx.clearRect(0, 0, w, h);
    // マウスの動きを滑らかに追従
    mouseX += (targetX - mouseX) * 0.05;
    mouseY += (targetY - mouseY) * 0.05;

    particles.forEach(p => {
      p.update(mouseX, mouseY);
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// 実行
setupDataDust();
