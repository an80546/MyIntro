import { LANGUAGES, translateField } from '../i18n/index.js'

const projectData = [
  {
    id: 'tomaple',
    title: {
      [LANGUAGES.ZH]: 'ToMaple',
      [LANGUAGES.EN]: 'ToMaple',
    },
    category: 'Productivity Web App',
    year: '2026',
    role: 'Frontend Developer / UIUX Designer',
    demoUrl: 'https://tomaple.vercel.app',
    summary: {
      [LANGUAGES.ZH]:
        '一款以番茄鐘為核心，結合每日行程、任務管理、進度筆記與前置準備的專注管理工具。',
      [LANGUAGES.EN]:
        'A focus management tool built around the Pomodoro method, combining daily schedules, task management, progress notes, and preparation checklists.',
    },
    description: {
      [LANGUAGES.ZH]:
        'ToMaple 是一個主打寧靜、專注與日常節奏管理的網頁應用。使用者可以透過首頁快速查看今日番茄數、專注分鐘、月曆視圖、今日重點任務與本週專注時長；也能在每日行程中追蹤完成率與習慣狀態，在番茄鐘頁面進行 25 分鐘專注、短休息與長休息切換，並透過任務項目、進度筆記與前置準備功能，建立完整的專注工作流程。',
      [LANGUAGES.EN]:
        'ToMaple is a web app designed for calm focus and daily rhythm management. Users can quickly review today\'s Pomodoro count, focus minutes, calendar view, priority tasks, and weekly focus time from the dashboard. They can also track daily schedule completion, monitor habit status, switch between 25-minute focus sessions, short breaks, and long breaks, and build a complete focus workflow through task items, progress notes, and preparation tools.',
    },
    tags: [
      'Next.js',
      'Frontend',
      'UIUX',
      'React',
      'Productivity',
      'Task Management',
      'Calendar',
      'Responsive Web',
    ],
    features: {
      [LANGUAGES.ZH]: [
        '番茄鐘專注計時，支援番茄鐘、短休息與長休息模式',
        '每日行程管理，可查看已完成、待完成與完成率',
        '月曆視圖，用於整理每日任務與專注紀錄',
        '任務與項目目標追蹤，包含進行中項目、目標清單與里程碑',
        '進度筆記功能，可記錄專注歷程與學習狀態',
        '前置準備清單與提醒設定，協助使用者進入專注狀態',
        '首頁儀表板整合今日番茄、專注分鐘、今日重點任務與本週專注時長',
      ],
      [LANGUAGES.EN]: [
        'Pomodoro focus timer with focus, short break, and long break modes',
        'Daily schedule management with completed, pending, and completion-rate views',
        'Calendar view for organizing daily tasks and focus records',
        'Task and project goal tracking, including active projects, goals, and milestones',
        'Progress notes for recording focus sessions and learning status',
        'Preparation checklist and reminder settings that help users enter a focused state',
        'Dashboard that combines today\'s Pomodoros, focus minutes, priority tasks, and weekly focus time',
      ],
    },
    result: {
      [LANGUAGES.ZH]:
        '完成一個具備番茄鐘、行程管理、任務追蹤、筆記紀錄與準備流程的專注管理網站原型，讓使用者可以用單一介面管理每日專注節奏。',
      [LANGUAGES.EN]:
        'Completed a focus management website prototype with Pomodoro timing, schedule management, task tracking, notes, and preparation flows, allowing users to manage their daily focus rhythm from one interface.',
    },
  },
  {
    id: 'qingshui-art-village',
    title: {
      [LANGUAGES.ZH]: '清水眷村文化園區網站改版',
      [LANGUAGES.EN]: 'Qingshui Military Dependents Village Cultural Park Website Redesign',
    },
    category: 'Cultural Website / Vue SPA',
    year: '2026',
    role: 'Frontend Developer',
    demoUrl: 'https://nchu-11503-qingshui-qrt-village.pages.dev/',
    summary: {
      [LANGUAGES.ZH]:
        '以 Vue 3 與 Vite 建置的文化場域網站，整合 3D Hero、景點地圖、活動資訊與外部預約／社群連結，提供清水眷村文化園區的線上導覽體驗。',
      [LANGUAGES.EN]:
        'A Vue 3 and Vite cultural venue website that combines a 3D hero, attraction map, event information, and external booking and social links for an online guide to Qingshui Military Dependents Village Cultural Park.',
    },
    description: {
      [LANGUAGES.ZH]:
        '本專案是一個以清水眷村文化園區為主題的 Vue 單頁應用程式，透過模組化頁面與元件架構整理展覽、交通、FAQ、景點導覽與活動報名等資訊。首頁使用 Spline 建立互動式 3D Hero，並針對行動裝置提供圖片 fallback；景點頁則整合 Google Maps JavaScript API 與 Advanced Markers，讓使用者能快速查看周邊景點與導航資訊。',
      [LANGUAGES.EN]:
        'This project is a Vue single page application centered on Qingshui Military Dependents Village Cultural Park. It organizes exhibitions, transportation, FAQ, attraction guides, and event registration through modular pages and components. The homepage uses Spline for an interactive 3D hero with an image fallback for mobile devices, while the attractions page integrates the Google Maps JavaScript API and Advanced Markers so visitors can quickly browse nearby spots and navigation details.',
    },
    tags: [
      'Vue 3',
      'Vite',
      'Vue Router',
      'Pinia',
      'JavaScript',
      'Spline',
      'Google Maps API',
      'Font Awesome',
      'Responsive Web',
    ],
    features: {
      [LANGUAGES.ZH]: [
        '使用 Vue 3 Composition API 建立 SPA 架構，將頁面、共用元件與資料模組拆分管理。',
        '整合 Spline 3D Viewer 製作首頁互動式 Hero，並加入行動版替代圖與載入失敗 fallback。',
        '使用 Google Maps JavaScript API 建立景點導覽地圖，支援 Marker、景點定位與外部導航連結。',
        '透過 Vue Router 管理多頁式瀏覽體驗，涵蓋首頁、展覽、交通、FAQ、景點等文化場域內容。',
        '整合 Google Forms、社群平台、LINE、電話與地圖導航等外部服務，補完整體參觀流程。',
        '以原生 CSS 撰寫元件樣式，未依賴 Tailwind 或 Bootstrap，保留客製化視覺彈性。',
      ],
      [LANGUAGES.EN]: [
        'Built the SPA structure with Vue 3 Composition API, separating pages, shared components, and data modules.',
        'Integrated Spline 3D Viewer for an interactive homepage hero, with mobile fallback imagery and load-failure handling.',
        'Built an attraction guide map with Google Maps JavaScript API, supporting markers, attraction positioning, and external navigation links.',
        'Used Vue Router to manage a multi-page browsing experience covering the home page, exhibitions, transportation, FAQ, and attractions.',
        'Connected external services such as Google Forms, social platforms, LINE, phone links, and map navigation to complete the visitor flow.',
        'Wrote component styles in native CSS without Tailwind or Bootstrap, preserving flexibility for custom visuals.',
      ],
    },
    result: {
      [LANGUAGES.ZH]:
        '完成一個具備文化資訊展示、互動視覺、景點地圖與參觀導流功能的場域網站，將線下園區內容轉化為可瀏覽、可導航、可報名的數位體驗。',
      [LANGUAGES.EN]:
        'Completed a venue website with cultural information, interactive visuals, an attraction map, and visitor conversion links, transforming offline park content into a browsable, navigable, and bookable digital experience.',
    },
  },
]

function translateProject(project, language) {
  return {
    ...project,
    title: translateField(project, 'title', language),
    summary: translateField(project, 'summary', language),
    description: translateField(project, 'description', language),
    features: translateField(project, 'features', language),
    result: translateField(project, 'result', language),
  }
}

export function getProjects(language = LANGUAGES.ZH) {
  return projectData.map((project) => translateProject(project, language))
}

export const projects = getProjects()
