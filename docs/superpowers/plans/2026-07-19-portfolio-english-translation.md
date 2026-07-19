# Portfolio English Translation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add same-route English translation support to the portfolio with a `中文 / EN` language switcher that persists the visitor's choice.

**Architecture:** Build a small local i18n layer using Vue Composition API state and plain JavaScript data modules. Views will select translated data through computed values, while components receive translated labels through props to keep rendering components simple.

**Tech Stack:** Vue 3, Vue Router, Vite, JavaScript ES modules, browser `localStorage`.

## Global Constraints

- Add a `中文 / EN` language switcher in the navigation.
- Keep the current routes unchanged: `/`, `/skills`, `/projects`, and `/projects/:id`.
- Default to Traditional Chinese.
- Remember the visitor's language choice with `localStorage`.
- Translate portfolio content and fixed interface labels that affect the browsing experience.
- Keep the implementation lightweight and aligned with the current data-module style.
- Do not add `/en` routes.
- Do not add a full i18n library unless the existing code shape makes the lightweight approach impractical.
- Do not redesign the portfolio layout beyond the small language switcher UI.
- Do not translate developer comments or project documentation as part of this feature.

---

## File Structure

- Create `src/i18n/index.js`: owns supported language constants, `currentLanguage`, `setLanguage`, label messages, and translation helpers.
- Modify `src/data/profile.js`: export `getProfile(language)` and move the full self-introduction into profile data.
- Modify `src/data/projects.js`: export `getProjects(language)` while preserving stable project ids and metadata.
- Modify `src/data/certification.js`: export `getCertifications(language)` with translated certification descriptions.
- Leave `src/data/skills.js` mostly unchanged because skill names are already English technical terms.
- Modify `src/components/NavBar.vue`: render translated nav labels and the language switcher.
- Modify `src/views/HomeView.vue`: pass translated profile and labels to `ProfileCard`.
- Modify `src/components/ProfileCard.vue`: remove hard-coded Chinese copy and render translated labels from props.
- Modify `src/views/SkillsView.vue`: render translated page labels and certifications.
- Modify `src/views/ProjectsView.vue`: render translated page labels, translated projects, and pass card labels.
- Modify `src/components/ProjectCard.vue`: render translated button label from props.
- Modify `src/views/ProjectDetailView.vue`: select translated projects and pass translated labels/not-found copy.
- Modify `src/components/ProjectDetail.vue`: render translated detail labels from props.

---

### Task 1: Add Local I18n State And Labels

**Files:**
- Create: `src/i18n/index.js`

**Interfaces:**
- Produces: `LANGUAGES: { ZH: 'zh-TW', EN: 'en' }`
- Produces: `currentLanguage: Ref<string>`
- Produces: `setLanguage(language: string): void`
- Produces: `isLanguage(language: string): boolean`
- Produces: `messages: Record<string, object>`
- Produces: `useI18n(): { currentLanguage, messages, t, setLanguage, isLanguage, languages }`
- Produces: `translateField(item: object, field: string, language: string): unknown`

- [ ] **Step 1: Create the i18n module**

Add `src/i18n/index.js`:

```js
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

  return normalizeLanguage(window.localStorage.getItem(STORAGE_KEY))
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
    window.localStorage.setItem(STORAGE_KEY, nextLanguage)
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
```

- [ ] **Step 2: Run a build check**

Run: `npm run build`

Expected: The build may still pass because the module is not imported yet. There should be no syntax errors from `src/i18n/index.js`.

---

### Task 2: Make Portfolio Data Language-Aware

**Files:**
- Modify: `src/data/profile.js`
- Modify: `src/data/projects.js`
- Modify: `src/data/certification.js`

**Interfaces:**
- Consumes: `LANGUAGES` and `translateField` from `src/i18n/index.js`
- Produces: `getProfile(language: string): object`
- Produces: `getProjects(language: string): object[]`
- Produces: `getCertifications(language: string): object[]`

- [ ] **Step 1: Refactor `profile.js`**

Replace `src/data/profile.js` with language-aware profile data. Preserve `email`, `location`, and `phone` as shared values. Move the full self-introduction out of `ProfileCard.vue` into this data file.

- [ ] **Step 2: Refactor `projects.js`**

Replace translated project fields with `{ 'zh-TW': string, en: string }` objects for `title`, `summary`, `description`, `features`, and `result`. Keep `id`, `category`, `year`, `role`, `demoUrl`, and `tags` stable unless the field currently contains Chinese visitor-facing text.

- [ ] **Step 3: Refactor `certification.js`**

Replace translated certification fields with language-aware values for `title`, `level`, `description`, and `tools` where needed. Keep English certification names unchanged when they are official certificate names.

- [ ] **Step 4: Run a build check**

Run: `npm run build`

Expected: The build can fail because views still import the old named exports. If it fails, the failure should be limited to missing imports such as `profile`, `projects`, or `certifications`.

---

### Task 3: Wire Translated Labels And Data Into Views

**Files:**
- Modify: `src/views/HomeView.vue`
- Modify: `src/views/SkillsView.vue`
- Modify: `src/views/ProjectsView.vue`
- Modify: `src/views/ProjectDetailView.vue`

**Interfaces:**
- Consumes: `useI18n()`
- Consumes: `getProfile(language)`, `getProjects(language)`, `getCertifications(language)`
- Produces: translated props passed to rendering components

- [ ] **Step 1: Update `HomeView.vue`**

Use `computed`, `useI18n`, and `getProfile` to pass translated `profile`, `profileLabels`, and `homeLabels` into `ProfileCard`.

- [ ] **Step 2: Update `SkillsView.vue`**

Use `computed`, `useI18n`, and `getCertifications` to render translated headings and certification cards.

- [ ] **Step 3: Update `ProjectsView.vue`**

Use `computed`, `useI18n`, and `getProjects` to render translated headings, project cards, and the view-project button label.

- [ ] **Step 4: Update `ProjectDetailView.vue`**

Use `computed`, `useI18n`, and `getProjects` so detail lookup still uses stable `id` while all visible detail labels and not-found messages are translated.

- [ ] **Step 5: Run a build check**

Run: `npm run build`

Expected: The build can fail if rendering components still require old props or hard-coded labels. Any failure should point to component prop/template mismatches.

---

### Task 4: Update Rendering Components And Navigation

**Files:**
- Modify: `src/components/NavBar.vue`
- Modify: `src/components/ProfileCard.vue`
- Modify: `src/components/ProjectCard.vue`
- Modify: `src/components/ProjectDetail.vue`

**Interfaces:**
- Consumes: `useI18n()`
- Consumes: `profileLabels`, `homeLabels`, `labels`, and translated data from views

- [ ] **Step 1: Update `NavBar.vue`**

Use `useI18n` for translated nav labels. Add a compact two-button language switcher with `aria-pressed`, `type="button"`, and responsive styles that fit beside or below the nav links.

- [ ] **Step 2: Update `ProfileCard.vue`**

Add required `labels` and `actions` props. Replace hard-coded intro, button labels, photo alt text, motto label, and expand/collapse labels with translated props and profile fields.

- [ ] **Step 3: Update `ProjectCard.vue`**

Add a required `labels` prop and replace the hard-coded `查看作品` button text with `labels.viewProject`.

- [ ] **Step 4: Update `ProjectDetail.vue`**

Add a required `labels` prop and replace all hard-coded detail labels with translated values.

- [ ] **Step 5: Run the main verification build**

Run: `npm run build`

Expected: PASS. Vite should output a production build in `dist`.

---

### Task 5: Manual Browser Verification

**Files:**
- Verify only; no planned source edits unless a defect is found.

**Interfaces:**
- Consumes: completed implementation from Tasks 1-4

- [ ] **Step 1: Start the dev server**

Run: `npm run dev -- --host 127.0.0.1 --port 5173`

Expected: Vite serves the app at `http://127.0.0.1:5173/`.

- [ ] **Step 2: Verify Chinese default**

Open `http://127.0.0.1:5173/`.

Expected: The home page defaults to Traditional Chinese, the nav shows `首頁`, `技能`, `作品`, and the language switcher shows Chinese as active.

- [ ] **Step 3: Verify English switching and persistence**

Click `EN`, reload the page, and revisit `/skills`, `/projects`, and one `/projects/:id` page.

Expected: The selected language remains English after reload; headings, buttons, project summaries, project detail labels, profile intro, and certification descriptions are in English.

- [ ] **Step 4: Verify mobile fit**

Inspect a narrow viewport around 390px wide.

Expected: Nav links and language switcher remain readable and no horizontal scrolling appears.

- [ ] **Step 5: Commit implementation**

Run:

```bash
git add src/i18n/index.js src/data/profile.js src/data/projects.js src/data/certification.js src/views/HomeView.vue src/views/SkillsView.vue src/views/ProjectsView.vue src/views/ProjectDetailView.vue src/components/NavBar.vue src/components/ProfileCard.vue src/components/ProjectCard.vue src/components/ProjectDetail.vue
git commit -m "Add English portfolio translation"
```

Expected: Commit succeeds and excludes unrelated pre-existing changes such as `src/router/index.js`.
