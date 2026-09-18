// js/data.js — content layer (single source of truth for JS-rendered sections)
const PORTFOLIO_DATA = {

  // ── Journey / Timeline (2025.07 → 2026.09, curated) ──
  timeline: [
    {
      date: "2025.07", kind: "award",
      title: { ja: "関西ビギナーズハッカソン Vol.7 — 企業賞", en: "Kansai Beginners Hackathon Vol.7 — Corporate Award" },
      body:  { ja: "コーディング開始からわずか3ヶ月、初対面5人チームでの1ヶ月開発で企業賞を受賞。（作品：FamLog）", en: "Won a Corporate Award just 3 months into coding — a one-month sprint with a team of five strangers. (Project: FamLog)" },
      badge: { kind: "award", label: { ja: "🏆 企業賞", en: "🏆 Corporate Award" } }
    },
    {
      date: "2025.10", kind: "apple",
      title: { ja: "Today at Apple（梅田）— Swiftとの出会い", en: "Today at Apple (Umeda) — Meeting Swift" },
      body:  { ja: "Swift Student Challengeのイベントに参加。ここでSwiftとSSCに興味を持ったのが、すべての起点になった。", en: "Attended a Swift Student Challenge session. This is where my interest in Swift and the SSC began — the starting point of everything." },
      badge: { kind: "apple", label: { ja: " Apple", en: " Apple" } }
    },
    {
      date: "2025.12", kind: "spark", featured: true,
      title: { ja: "Swift 学習を本格スタート", en: "Started Learning Swift" },
      body:  { ja: "最初の一行を書いた月。ここから約1年で、受賞・Apple on Campus・インターン修了へ。", en: "The month I wrote my first line of Swift. Everything below happened within roughly a year of this point." },
      badge: null
    },
    {
      date: "2026.03", kind: "apple",
      title: { ja: "Swift Student Challenge 2026 — 提出", en: "Swift Student Challenge 2026 — Submitted" },
      body:  { ja: "手話学習iOSアプリ「SigNinja」を提出。受賞は逃したが、Appleエバンジェリストから直接「あと一歩、惜しい」と評価を受けた。", en: "Submitted 'SigNinja', a sign-language learning app. I didn't win — but an Apple Evangelist told me directly it was 'so close, just one step away.'" },
      badge: { kind: "apple", label: { ja: " SSC", en: " SSC" } }
    },
    {
      date: "2026.03", kind: "award",
      title: { ja: "近畿大学 特待生 認定", en: "Kindai University — Honor Student" },
      body:  { ja: "1年生を通して成績平均90点以上を取得し、特待生に認定された。", en: "Maintained an average score above 90 across the full first year, earning Honor Student status." },
      badge: { kind: "award", label: { ja: "🎓 特待生", en: "🎓 Honor Student" } }
    },
    {
      date: "2026.04", kind: "award", featured: true,
      title: { ja: "try! Swift 2026 学生ハッカソン — MIXI特別賞", en: "try! Swift 2026 Student Hackathon — MIXI Special Award" },
      body:  { ja: "国際カンファレンスの学生ハッカソンで、チーム最年少のPMとしてMIXI特別賞を受賞。（作品：まんがる）", en: "Won the MIXI Special Award as the youngest PM at the try! Swift international conference hackathon. (Project: Manga-ru)" },
      badge: { kind: "award", label: { ja: "🏆 MIXI特別賞", en: "🏆 MIXI Special Award" } }
    },
    {
      date: "2026.05", kind: "apple",
      title: { ja: "Apple on Campus — 学生ボランティアスタッフ", en: "Apple on Campus — Student Volunteer Staff" },
      body:  { ja: "近畿大学で開催されたAppleのイベントに、情報学部から選ばれた12名の1人として参加。前例の少ないイベントを、社員スタッフと相談しながら現場で運営した。", en: "One of 12 students chosen from the Faculty of Informatics for Apple's on-campus event. Ran a first-of-its-kind event on the ground, solving problems alongside Apple staff." },
      badge: { kind: "apple", label: { ja: " Apple", en: " Apple" } }
    },
    {
      date: "2026.07", kind: "apple",
      title: { ja: "Apple on Campus @ オープンキャンパス", en: "Apple on Campus @ Open Campus" },
      body:  { ja: "近畿大学オープンキャンパスへの出展にスタッフとして参加。より大規模な運営の中で、Photoブースの盛り上げに最も貢献したとチームに評価された。", en: "Staffed Apple on Campus's booth at the university open campus. In a larger-scale operation, the team credited me as the biggest contributor to energizing the Photo booth." },
      badge: { kind: "apple", label: { ja: " Apple", en: " Apple" } }
    },
    {
      date: "2026.08", kind: "intern", featured: true,
      title: { ja: "フェンリル株式会社 — 5days iOSエンジニアコース 修了", en: "Fenrir Inc. — 5-Day iOS Engineer Course, Completed" },
      body:  { ja: "Swiftの試験に合格して参加（大阪本社・現地）。あえてバイブコーディングに頼らず実装することで自分の理解の穴に気づき、API・UIのフロント実装、アーキテクチャに沿ったファイル分割、企業のgit開発フローを吸収。最後にはメンターに褒められるコードを書けた。", en: "Joined by passing a Swift exam (on-site, Osaka HQ). By deliberately coding without AI assistance, I found the gaps in my own understanding — then absorbed API/UI front-end work, architecture-driven file structure, and a company git workflow. By the final day, I wrote code my mentor praised." },
      badge: { kind: "intern", label: { ja: "🛠 インターン修了", en: "🛠 Internship" } }
    },
    {
      date: "2026.08", kind: "mentor",
      title: { ja: "関西ビギナーズハッカソン Vol.8 — 学生メンター", en: "Kansai Beginners Hackathon Vol.8 — Student Mentor" },
      body:  { ja: "UI/UX・画面設計・要件定義・プレゼン・iOS開発、そしてAIを使ったチーム開発とgit管理の相談に対応。学んだことを一気にアウトプットできた。", en: "Advised teams on UI/UX, screen design, requirements, presentation, iOS development, and AI-assisted team development with git. A chance to output everything I'd just learned, all at once." },
      badge: null
    },
    {
      date: "2026.09", kind: "event",
      title: { ja: "iOSDC Japan 2026 — 参加", en: "iOSDC Japan 2026 — Attended" },
      body:  { ja: "日本最大級のiOSカンファレンスに参加し、最新のiOS開発トレンドとコミュニティに触れた。", en: "Attended one of Japan's largest iOS conferences — immersing in the latest iOS development trends and community." },
      badge: null
    }
  ],

  // ── Now / Currently ──
  now: [
    {
      status: "active",
      symbol: "team",
      title: { ja: "CYPR — 近大発 iOS開発チーム 設立", en: "CYPR — Founding an iOS Team at Kindai" },
      body:  { ja: "近畿大学発のiOS開発チーム「CYPR」を設立。現在は役職を決め、活動の基盤を整えている段階。メンバー間ではゲリラLTが開かれ、各自の得意分野・興味・これからの目標を自由に共有し合える環境になっている。最終目標は、全分野の知識を結集して1本のiOSアプリをリリースすること。", en: "Founded CYPR, an iOS development team born at Kindai University. Currently defining roles and building our foundation. Members run guerrilla lightning talks and freely share their specialties, interests, and goals. Our end goal: combine every discipline to ship one iOS app." }
    },
    {
      status: "building",
      symbol: "hammer",
      title: { ja: "個人・友人開発 — 年内にiOSアプリをリリース", en: "Personal / Team Build — Shipping an iOS App This Year" },
      body:  { ja: "友人3人で、年内のiOSアプリ・リリースを目標に開発中。仕様書はAIに相談しながら作り、プロダクトの技術内容の意思決定と実装を、あえて自分で悩み抜くことを大切にしている。", en: "Building an iOS app with two friends, aiming to ship within the year. I draft the spec with AI as a sounding board — but deliberately wrestle through the technical decisions and implementation myself." }
    }
  ]
};
