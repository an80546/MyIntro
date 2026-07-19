import { LANGUAGES, translateField } from '../i18n/index.js'

const profileData = {
  name: {
    [LANGUAGES.ZH]: '陳奕鈞',
    [LANGUAGES.EN]: 'Yi-Jun Chen',
  },
  title: {
    [LANGUAGES.ZH]: '資料庫、前端設計與 Vue 開發學習者',
    [LANGUAGES.EN]: 'Database, Frontend Design, and Vue Development Learner',
  },
  location: 'Taichung, Taiwan',
  email: 'a0922776220@gmail.com',
  motto: {
    [LANGUAGES.ZH]: '無論對此生的決定為何，一定要真誠的對待自己。',
    [LANGUAGES.EN]: 'Whatever decision I make in this life, I want to be honest with myself.',
  },
  intro: {
    [LANGUAGES.ZH]:
      '我正在學習前端與 UI/UX 設計，熟悉 Vue 基礎、資料整理與介面製作。個性細心、慢熟但真誠，喜歡用柔軟的視覺，把想法做成能被理解的作品。',
    [LANGUAGES.EN]:
      'I am learning frontend development and UI/UX design, with experience in Vue fundamentals, data organization, and interface building. I am careful, sincere, and drawn to soft visual design that turns ideas into understandable products.',
  },
  fullIntro: {
    [LANGUAGES.ZH]:
      '我是陳奕鈞，目前就讀於勤益科技大學資訊管理系。平時熱衷於體驗各類軟體與遊戲，並透過程式追蹤、規則拆解與使用者觀察來理解產品設計邏輯。我曾參與遊戲 Demo 的 UX 回饋，從中學習以使用者角度思考問題，並透過分析與整理提出具體建議。\n\n目前正持續學習前端開發與 UI/UX 設計，熟悉 Vue 基礎、資料整理與介面製作，並嘗試將技術與設計結合，打造兼具功能性與良好體驗的作品。\n\n我的個性細心、慢熟但真誠，擅長傾聽與客觀分析。當團隊遇到迷惘或問題時，我能運用對大眾心理學的興趣，協助夥伴釐清現況並共同尋找解決方向。同時，我對自我要求較高，習慣思考如何優化流程與提升效率，也具備良好的文字表達能力、快速打字能力，以及流暢的溝通能力。希望未來能持續在資訊與設計領域成長，將想法轉化為能被理解、被使用的優質產品。',
    [LANGUAGES.EN]:
      'I am Yi-Jun Chen, currently studying Information Management at National Chin-Yi University of Technology. I enjoy exploring different kinds of software and games, and I like understanding product design logic through behavior tracking, rule breakdowns, and user observation. I have participated in UX feedback for a game demo, where I learned to think from the user perspective and turn analysis into concrete suggestions.\n\nI am continuing to study frontend development and UI/UX design. I am familiar with Vue fundamentals, data organization, and interface creation, and I am learning how to combine technology and design to build work that is both functional and pleasant to use.\n\nI am careful, a little slow to warm up, but sincere. I am good at listening and objective analysis. When a team feels uncertain or runs into problems, I can use my interest in popular psychology to help clarify the situation and look for solutions together. I also hold myself to a high standard, often thinking about how to improve workflows and efficiency. I have strong writing skills, fast typing ability, and smooth communication skills. In the future, I hope to keep growing in information technology and design, turning ideas into quality products that people can understand and use.',
  },
  highlights: {
    [LANGUAGES.ZH]: ['Vue 3 Composition API', 'UI 版面設計', '互動式網站製作'],
    [LANGUAGES.EN]: [
      'Vue 3 Composition API',
      'UI Layout Design',
      'Interactive Website Development',
    ],
  },
  phone: '0922776220',
}

export function getProfile(language = LANGUAGES.ZH) {
  return {
    ...profileData,
    name: translateField(profileData, 'name', language),
    title: translateField(profileData, 'title', language),
    motto: translateField(profileData, 'motto', language),
    intro: translateField(profileData, 'intro', language),
    fullIntro: translateField(profileData, 'fullIntro', language),
    highlights: translateField(profileData, 'highlights', language),
  }
}

export const profile = getProfile()
