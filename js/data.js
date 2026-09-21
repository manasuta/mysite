// js/data.js — content layer (single source of truth for JS-rendered sections)
const PORTFOLIO_DATA = {

  // ── Journey / Timeline ──
  timeline: [
    {
      date: "2025.07", kind: "award",
      title: { ja: "関西ビギナーズハッカソン Vol.7 — 企業賞", en: "Kansai Beginners Hackathon Vol.7 — Corporate Award" },
      body:  { ja: "学習3ヶ月、初対面5人チームで企業賞。（FamLog）", en: "Corporate Award, 3 months into coding, with a team of five strangers. (FamLog)" },
      badge: { kind: "award", label: { ja: "🏆 企業賞", en: "🏆 Corporate Award" } }
    },
    {
      date: "2025.10", kind: "apple",
      title: { ja: "Today at Apple（梅田）", en: "Today at Apple (Umeda)" },
      body:  { ja: "SSCと出会い、Swiftに興味を持ったきっかけ。", en: "Where my interest in Swift and the SSC began." },
      badge: { kind: "apple", label: { ja: " Apple", en: " Apple" } }
    },
    {
      date: "2025.12", kind: "spark", featured: true,
      title: { ja: "Swift 学習を本格スタート", en: "Started Learning Swift" },
      body:  { ja: "最初の一行を書いた月。", en: "The month I wrote my first line of Swift." },
      badge: null
    },
    {
      date: "2026.03", kind: "apple",
      title: { ja: "Swift Student Challenge 2026 — 提出", en: "Swift Student Challenge 2026 — Submitted" },
      body:  { ja: "SigNinjaを提出。受賞は逃したが、Appleエバンジェリストに「あと一歩」と評価された。", en: "Submitted SigNinja. Didn't win — but an Apple Evangelist said it was 'so close.'" },
      badge: { kind: "apple", label: { ja: " SSC", en: " SSC" } }
    },
    {
      date: "2026.03", kind: "award",
      title: { ja: "近畿大学 特待生 認定", en: "Kindai University — Honor Student" },
      body:  { ja: "1年間の平均90点以上で特待生に認定。", en: "Honor Student — a 90+ average across the full first year." },
      badge: { kind: "award", label: { ja: "🎓 特待生", en: "🎓 Honor Student" } }
    },
    {
      date: "2026.04", kind: "award", featured: true,
      title: { ja: "try! Swift 2026 学生ハッカソン — MIXI特別賞", en: "try! Swift 2026 Student Hackathon — MIXI Special Award" },
      body:  { ja: "チーム最年少のPMとしてMIXI特別賞。（まんがる）", en: "MIXI Special Award as the youngest PM. (Manga-ru)" },
      badge: { kind: "award", label: { ja: "🏆 MIXI特別賞", en: "🏆 MIXI Special Award" } }
    },
    {
      date: "2026.05", kind: "apple",
      title: { ja: "Apple on Campus — 学生スタッフ", en: "Apple on Campus — Student Staff" },
      body:  { ja: "情報学部12名の1人として、近大でのAppleイベントを運営。", en: "One of 12 students chosen to run Apple's on-campus event." },
      badge: { kind: "apple", label: { ja: " Apple", en: " Apple" } }
    },
    {
      date: "2026.07", kind: "apple",
      title: { ja: "Apple on Campus @ オープンキャンパス", en: "Apple on Campus @ Open Campus" },
      body:  { ja: "オープンキャンパスに出展。Photoブースの盛り上げに貢献。", en: "Staffed the open-campus booth; energized the Photo booth." },
      badge: { kind: "apple", label: { ja: " Apple", en: " Apple" } }
    },
    {
      date: "2026.08", kind: "intern", featured: true,
      title: { ja: "フェンリル株式会社 — 5days iOSコース 修了", en: "Fenrir Inc. — 5-Day iOS Course, Completed" },
      body:  { ja: "企業の開発フローを吸収し、最終日にはメンターに褒められるコードを書けた。", en: "Absorbed a real dev workflow; by the last day, wrote code my mentor praised." },
      badge: { kind: "intern", label: { ja: "🛠 インターン修了", en: "🛠 Internship" } }
    },
    {
      date: "2026.08", kind: "mentor",
      title: { ja: "関西ビギナーズハッカソン Vol.8 — 学生メンター", en: "Kansai Beginners Hackathon Vol.8 — Student Mentor" },
      body:  { ja: "UI/UX・要件定義・iOS開発・gitを学生に指導。", en: "Mentored students on UI/UX, requirements, iOS and git." },
      badge: null
    },
    {
      date: "2026.09", kind: "event",
      title: { ja: "iOSDC Japan 2026 — 参加", en: "iOSDC Japan 2026 — Attended" },
      body:  { ja: "日本最大級のiOSカンファレンスに参加。", en: "Attended one of Japan's largest iOS conferences." },
      badge: null
    }
  ],

  // ── Now / Currently ──
  now: [
    {
      status: "active",
      title: { ja: "CYPR — 近大発 iOSチーム 設立", en: "CYPR — Founding an iOS Team at Kindai" },
      body:  { ja: "近大発のiOS開発チームを設立。今は基盤づくりの段階で、メンバーがゲリラLTで知識を共有し合っている。目標は、全員の強みを合わせて1本のアプリをリリースすること。", en: "Founded an iOS team at Kindai. Building our foundation now — members share knowledge through guerrilla lightning talks. The goal: combine everyone's strengths to ship one app." }
    },
    {
      status: "building",
      title: { ja: "個人・友人開発 — 年内にリリース", en: "Personal / Team Build — Shipping This Year" },
      body:  { ja: "友人3人で、年内のiOSアプリ・リリースを目標に開発中。技術選定と実装は、あえて自分で悩み抜いている。", en: "Building an iOS app with two friends to ship this year — deliberately wrestling through the technical decisions myself." }
    }
  ]
};
