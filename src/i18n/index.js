import { computed, ref } from 'vue'

export const LANGUAGES = {
  ZH: 'zh-TW',
  EN: 'en',
}

const STORAGE_KEY = 'portfolio-language'
const supportedLanguages = Object.values(LANGUAGES)

function normalizeLanguage(language) {
  return supportedLanguages.includes(language) ? language : LANGUAGES.ZH
}

function readInitialLanguage() {
  if (typeof window === 'undefined') {
    return LANGUAGES.ZH
  }

  try {
    return normalizeLanguage(window.localStorage.getItem(STORAGE_KEY))
  } catch {
    return LANGUAGES.ZH
  }
}

export const currentLanguage = ref(readInitialLanguage())

export const messages = {
  [LANGUAGES.ZH]: {
    nav: {
      ariaLabel: '主要導覽',
      brand: '陳奕鈞 Maple',
      home: '首頁',
      skills: '技能',
      projects: '作品',
      languageLabel: '切換語言',
    },
    home: {
      projectsAction: '作品',
      skillsAction: '技能',
    },
    profile: {
      about: 'About Me',
      contact: 'Contact me',
      photoAlt: '陳奕鈞的個人照片',
      motto: '座右銘',
      expandIntro: '展開完整自我介紹',
      collapseIntro: '收合自我介紹',
      linksLabel: '作品集連結',
    },
    skills: {
      eyebrow: 'Skills',
      title: '技能',
      description: '擁有的證照以及擅長的技能、領域',
      certificationsEyebrow: 'Certifications',
      certificationsTitle: '證照',
    },
    projects: {
      eyebrow: 'Projects',
      title: '作品列表頁',
      viewProject: '查看作品',
    },
    projectDetail: {
      back: '返回作品列表',
      visitSite: '前往網站',
      year: '年份',
      role: '角色',
      technologies: '使用技術',
      features: '功能重點',
      result: '成果',
      notFoundEyebrow: 'Not Found',
      notFoundTitle: '找不到這個作品',
      notFoundDescription: (id) => `目前網址中的作品 id 是「${id}」，資料中沒有相符的作品。`,
    },
  },
  [LANGUAGES.EN]: {
    nav: {
      ariaLabel: 'Primary navigation',
      brand: 'Yi-Jun Chen Maple',
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      languageLabel: 'Change language',
    },
    home: {
      projectsAction: 'Projects',
      skillsAction: 'Skills',
    },
    profile: {
      about: 'About Me',
      contact: 'Contact me',
      photoAlt: 'Portrait of Yi-Jun Chen',
      motto: 'Motto',
      expandIntro: 'Read full introduction',
      collapseIntro: 'Collapse introduction',
      linksLabel: 'Portfolio links',
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Skills',
      description: 'Certifications, practical skills, and areas I am growing in.',
      certificationsEyebrow: 'Certifications',
      certificationsTitle: 'Certifications',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Project Gallery',
      viewProject: 'View Project',
    },
    projectDetail: {
      back: 'Back to Projects',
      visitSite: 'Visit Website',
      year: 'Year',
      role: 'Role',
      technologies: 'Technologies',
      features: 'Feature Highlights',
      result: 'Outcome',
      notFoundEyebrow: 'Not Found',
      notFoundTitle: 'Project not found',
      notFoundDescription: (id) => `The project id "${id}" in the current URL does not match any portfolio data.`,
    },
  },
}

export function setLanguage(language) {
  const nextLanguage = normalizeLanguage(language)
  currentLanguage.value = nextLanguage

  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage)
    } catch {
      // Some browsers block storage access. Language switching should still work in memory.
    }
  }
}

export function isLanguage(language) {
  return currentLanguage.value === language
}

export function translateField(item, field, language) {
  const value = item[field]

  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value[language] ?? value[LANGUAGES.ZH]
  }

  return value
}

export function useI18n() {
  const activeMessages = computed(() => messages[currentLanguage.value] ?? messages[LANGUAGES.ZH])

  function t(section, key) {
    return activeMessages.value[section][key]
  }

  return {
    currentLanguage,
    languages: LANGUAGES,
    messages: activeMessages,
    t,
    setLanguage,
    isLanguage,
  }
}
