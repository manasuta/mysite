// js/data.js — content layer
const PORTFOLIO_DATA = {

  timeline: [
    {
      date: "2025.04",
      dot: "default",
      title: { ja: "近畿大学 情報学部 入学 ／ ユニクロ アルバイト開始", en: "Enrolled at Kindai University / Started at UNIQLO" },
      body:  { ja: "情報学の学びをゼロからスタート。ユニクロでは外国籍のお客様への英語接客を日常的に担当し、実践的なコミュニケーション力を養う。", en: "Started CS from scratch. At UNIQLO, regularly handled English customer service for international guests — building real communication skills from day one." },
      badges: []
    },
    {
      date: "2025.07",
      dot: "award",
      title: { ja: "関西ビギナーズハッカソン — 企業賞受賞", en: "Kansai Beginners Hackathon — Corporate Award" },
      body:  { ja: "コーディング開始わずか3ヶ月で企業賞を受賞。初対面の5人チームで1ヶ月間の開発をリード。車校・アルバイト・ハッカソンを並行させながら前期成績平均92点（GPA 3.55）も達成。", en: "Won a corporate award just 3 months into coding — leading 5 strangers through a month-long sprint, while juggling driving school and part-time work, still scoring 92/100 (GPA 3.55)." },
      badges: [{ type: "award", text: "🏆 企業賞" }]
    },
    {
      date: "2025.08",
      dot: "default",
      title: { ja: "TOEIC 初受験 — 650点取得", en: "TOEIC First Attempt — 650" },
      body:  { ja: "自学による英語学習の成果を初めて公式スコアで可視化。継続的なスコアアップを目指すベースラインとなった。", en: "First official proof of self-taught English — a baseline for consistent improvement." },
      badges: []
    },
    {
      date: "2025.09",
      dot: "apple",
      title: { ja: "Today at Apple（梅田）— Tim Cook氏の講演に参加", en: "Today at Apple — Umeda: Tim Cook Live Talk" },
      body:  { ja: "Apple CEO Tim Cook氏の講演を直接聴講。終了後、日本のSwift Student Challenge Winnerたちと1対1で開発手法・キャリアについて対話する機会を得た。", en: "Attended a live talk by Apple CEO Tim Cook. Afterwards, had 1-on-1 conversations with Japan's SSC Winners on development and careers." },
      badges: [{ type: "apple", text: " Apple Event" }]
    },
    {
      date: "2025.12",
      dot: "default",
      title: { ja: "OpenAI × Kindai Hackathon — AI教育プラットフォーム開発", en: "OpenAI × Kindai Hackathon" },
      body:  { ja: "生成AIをコアに据えた教育プラットフォームを開発。学生には個別アウトプットチューター、教授には学習プログラム自動生成・課題自動採点機能を提供し、採点工数を大幅削減するシステムを実装。", en: "Built an AI education platform — a personalised student tutor and an automated grader for faculty that dramatically cuts manual grading time." },
      badges: [{ type: "ai", text: "✦ Generative AI" }]
    },
    {
      date: "2026.01",
      dot: "default",
      title: { ja: "KC3ハッカソン — 200人規模のオーディエンスの前でプレゼン", en: "KC3 Hackathon — Presented to 200 people" },
      body:  { ja: "関西最大級の学生ハッカソンに参加。200人規模のオーディエンスの前でチームのプレゼンテーションを担当した。", en: "Participated in one of Kansai's largest student hackathons, delivering the team's presentation to an audience of 200 people." },
      badges: []
    },
    {
      date: "2026.01",
      dot: "apple",
      title: { ja: "Apple イベント「Swift Student Challengeに向けて準備しよう」（東京）参加", en: "Apple Event: 'Prepare for Swift Student Challenge' — Tokyo" },
      body:  { ja: "Appleが主催するSSC準備イベントに参加。世界各国のSwift Student Challenge Winnerたちと英語で技術交流を行った。", en: "Participated in Apple's SSC preparation event in Tokyo. Exchanged technical insights in English with SSC Winners from around the world." },
      badges: [{ type: "apple", text: " Apple Event Tokyo" }]
    },
    {
      date: "2026.01",
      dot: "default",
      title: { ja: "TOEIC 705点取得", en: "TOEIC — 705" },
      body:  { ja: "650点から705点へスコアを更新。英語での技術交流や海外エンジニアとのコミュニケーションを通じて実力を証明。", en: "Updated from 650 to 705. Proof of growing English proficiency through real technical exchanges with international engineers." },
      badges: []
    },
    {
      date: "2026.02",
      dot: "default",
      title: { ja: "NICTrain参加 ／ NVIDIA学生アンバサダーワークショップ", en: "NICTrain / NVIDIA Student Ambassador Workshop" },
      body:  { ja: "さくらインターネットのエンジニアや他大学の学生と技術交流。NVIDIAワークショップではAI研究の最前線を体験し、産業界のエンジニアとの人脈を形成。", en: "Technical exchange with Sakura Internet engineers and students from other universities. Experienced cutting-edge AI research at the NVIDIA workshop." },
      badges: []
    },
    {
      date: "2026.03",
      dot: "apple",
      title: { ja: "Swift Student Challenge — SigNinja 提出", en: "Swift Student Challenge — Submitted 'SigNinja'" },
      body:  { ja: "手話学習iOSアプリ「SigNinja」をAppleの世界規模コンペへ提出。Appleエバンジェリストから直接「あと一歩、惜しい」と評価を受け、受賞水準に到達していることを確認した。", en: "Submitted 'SigNinja' (a JSL learning iOS app) to Apple's global competition. An Apple Evangelist personally said: 'so close — just one step away.' Near-winner quality, officially acknowledged." },
      badges: [{ type: "apple", text: " Swift Student Challenge" }]
    },
    {
      date: "2026.03",
      dot: "default",
      title: { ja: "近畿大学 特待生認定", en: "Awarded Kindai University Scholar Status" },
      body:  { ja: "前期成績平均92点（GPA 3.55）で近畿大学 特待生に認定。ハッカソン・アルバイト・車校を並行させながら、全科目で最高評価水準の成績を達成。", en: "Awarded Kindai University Scholar status with a semester score of 92/100 (GPA 3.55) — top-grade level maintained across all subjects amid a packed schedule." },
      badges: []
    },
    {
      date: "2026.03",
      dot: "default",
      title: { ja: "CyberAgent 企業交流会参加", en: "CyberAgent Industry Exchange" },
      body:  { ja: "CyberAgentのエンジニア・採用担当者と直接交流。業界第一線の視点からキャリアへのフィードバックを獲得。", en: "Direct exchange with CyberAgent engineers and recruiters — first-hand feedback on career paths from the industry front line." },
      badges: []
    },
    {
      date: "2026.04",
      dot: "award",
      title: { ja: "try! Swift 2026 学生ハッカソン — MIXI特別賞受賞", en: "try! Swift 2026 Student Hackathon — MIXI Special Award" },
      body:  { ja: "国際カンファレンス try! Swift 2026 の学生ハッカソンで、チーム最年少のPMとしてMIXI特別賞を受賞。受賞後、カンファレンスで出会ったSwiftエンジニアの方から個人的にメンタリングを承諾していただいた。", en: "Won the MIXI Special Award as the youngest PM at the try! Swift 2026 international conference hackathon. Afterwards, a Swift engineer met at the conference personally agreed to mentor me." },
      badges: [{ type: "award", text: "🏆 MIXI特別賞" }]
    },
    {
      date: "2026.04",
      dot: "default",
      title: { ja: "新入生Bootcamp — 技術メンター担当", en: "Freshman Bootcamp — Technical Mentor" },
      body:  { ja: "近畿大学の新入生向けBootcampで技術メンターを担当。教えることで自身の知識が深まることを実感。", en: "Served as a technical mentor at Kindai's freshman bootcamp. Teaching others deepened my own understanding." },
      badges: []
    },
    {
      date: "2026.04",
      dot: "apple",
      title: { ja: "Apple on Campus スタッフ就任 ／ AATCE受講開始", en: "Apple on Campus Staff / AATCE Begun" },
      body:  { ja: "近畿大学Apple on Campusのスタッフとして正式に始動。Apple認定トレーニング施設（AATCE）での受講も同時に開始し、Apple技術の体系的な習得を進める。", en: "Officially joined Apple on Campus as staff at Kindai University. Simultaneously began AATCE (Apple Certified Training), systematically deepening Apple platform expertise." },
      badges: [{ type: "apple", text: " Apple on Campus" }]
    }
  ],

  strengths: [
    {
      label: { ja: "iOS / 開発", en: "iOS / Dev" },
      title: { ja: "複数受賞歴のあるiOSエンジニア志望", en: "Multi-award-winning iOS aspirant" },
      items: [
        { ja: "try! Swift 2026 MIXI特別賞（チーム最年少PM）", en: "try! Swift 2026 — MIXI Special Award (youngest PM)" },
        { ja: "関西ビギナーズハッカソン 企業賞（学習3ヶ月で受賞）", en: "Kansai Beginners Hackathon — Corporate Award (3 months in)" },
        { ja: "Swift Student Challenge 提出・エバンジェリスト高評価", en: "Swift Student Challenge — praised by Apple Evangelist" }
      ]
    },
    {
      label: { ja: "Apple", en: "Apple" },
      title: { ja: "Appleエコシステムへの深い接点", en: "Deep ties to the Apple ecosystem" },
      items: [
        { ja: "Apple on Campus スタッフ（近畿大学）",           en: "Apple on Campus Staff — Kindai University" },
        { ja: "AATCE（Apple認定トレーニング）受講中",           en: "AATCE — Apple Certified Training, in progress" },
        { ja: "Tim Cook氏の講演を直接聴講・SSC Winnerと対話",  en: "Attended Tim Cook's live talk; 1-on-1 with SSC Winners" }
      ]
    },
    {
      label: { ja: "グローバル", en: "Global" },
      title: { ja: "英語で技術を語れる", en: "Tech communication in English" },
      items: [
        { ja: "TOEIC 705（650→705に向上）",           en: "TOEIC 705 (improved from 650)" },
        { ja: "世界各国のSSC Winnerと英語で技術交流",  en: "Technical exchange in English with global SSC Winners" },
        { ja: "ユニクロ 英語接客 / UC Davis 留学準備中", en: "UNIQLO English service / UC Davis exchange in preparation" }
      ]
    },
    {
      label: { ja: "学業", en: "Academic" },
      title: { ja: "近畿大学 特待生 — 成績平均92点", en: "Kindai Scholar — 92/100 average score" },
      items: [
        { ja: "前期成績平均 92点（GPA 3.55）",         en: "Semester score 92/100 (GPA 3.55)" },
        { ja: "過密スケジュール並行で全科目最高評価水準", en: "Top-grade level maintained amid a packed schedule" }
      ]
    }
  ],

  activities: [
    {
      status: "active",
      title: { ja: "近大発 iOSチーム創設",               en: "Founding Kindai's first iOS team" },
      body:  { ja: "近畿大学発、初のiOS開発チームの設立に向けて活動中。", en: "Working to establish the first iOS dev team out of Kindai University." }
    },
    {
      status: "active",
      title: { ja: "Swiftエンジニアによる個人メンタリング", en: "Personal Mentorship from Swift Engineer" },
      body:  { ja: "try! Swiftで出会ったSwiftエンジニアの方から、個人的にメンタリングを承諾していただき、継続的に指導を受けている。", en: "A Swift engineer met at try! Swift personally agreed to mentor me — receiving ongoing guidance on development and career." }
    },
    {
      status: "preparing",
      title: { ja: "iOSインターンシップ",         en: "iOS Internship" },
      body:  { ja: "国内のiOS開発会社へのインターンシップに向けて準備中。", en: "Preparing to apply for internships at iOS development companies in Japan." }
    },
    {
      status: "preparing",
      title: { ja: "UC Davis 留学プログラム",           en: "UC Davis Exchange Program" },
      body:  { ja: "UC Davis留学プログラムの準備を進行中。グローバルな技術コミュニケーション力を更に強化する。", en: "Preparing for the UC Davis study-abroad program to sharpen global technical communication." }
    },
    {
      status: "active",
      title: { ja: "クロスユニバーシティ連携",           en: "Cross-University Collaboration" },
      body:  { ja: "熊本県立大学の学生との共同活動を準備中。大学の枠を越えたエンジニアコミュニティを構築する。", en: "Building an engineer community beyond campus walls with students at Kumamoto Pref. University." }
    }
  ]
};
