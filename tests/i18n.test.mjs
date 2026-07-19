import assert from 'node:assert/strict'

const storage = new Map([['portfolio-language', 'en']])

global.window = {
  localStorage: {
    getItem(key) {
      return storage.get(key) ?? null
    },
    setItem(key, value) {
      storage.set(key, value)
    },
  },
}

const i18n = await import(`../src/i18n/index.js?test=${Date.now()}`)
const { getProfile } = await import(`../src/data/profile.js?test=${Date.now()}`)
const { getProjects } = await import(`../src/data/projects.js?test=${Date.now()}`)
const { getCertifications } = await import(`../src/data/certification.js?test=${Date.now()}`)

assert.equal(i18n.currentLanguage.value, i18n.LANGUAGES.EN)
assert.equal(i18n.messages[i18n.LANGUAGES.EN].nav.home, 'Home')

i18n.setLanguage(i18n.LANGUAGES.ZH)
assert.equal(i18n.currentLanguage.value, i18n.LANGUAGES.ZH)
assert.equal(storage.get('portfolio-language'), i18n.LANGUAGES.ZH)

i18n.setLanguage('unsupported')
assert.equal(i18n.currentLanguage.value, i18n.LANGUAGES.ZH)

const englishProfile = getProfile(i18n.LANGUAGES.EN)
assert.equal(englishProfile.name, 'Yi-Jun Chen')
assert.match(englishProfile.fullIntro, /National Chin-Yi University of Technology/)
assert.deepEqual(englishProfile.highlights, [
  'Vue 3 Composition API',
  'UI Layout Design',
  'Interactive Website Development',
])

const chineseProfile = getProfile(i18n.LANGUAGES.ZH)
assert.equal(chineseProfile.name, '陳奕鈞')

const englishProjects = getProjects(i18n.LANGUAGES.EN)
assert.equal(englishProjects[0].title, 'ToMaple')
assert.match(englishProjects[0].summary, /Pomodoro/)
assert.match(englishProjects[1].title, /Qingshui Military Dependents/)
assert.equal(englishProjects[1].id, 'qingshui-art-village')

const chineseProjects = getProjects(i18n.LANGUAGES.ZH)
assert.match(chineseProjects[1].title, /清水眷村/)

const englishCertifications = getCertifications(i18n.LANGUAGES.EN)
assert.match(englishCertifications[0].description, /customer relationship management/i)
assert.deepEqual(englishCertifications[0].tools, [
  'CRM',
  'Customer Relationship Management',
  'Product Analysis',
  'Consumer Behavior',
])

global.window = {
  localStorage: {
    getItem() {
      throw new Error('storage blocked')
    },
    setItem() {
      throw new Error('storage blocked')
    },
  },
}

const blockedStorageI18n = await import(`../src/i18n/index.js?blocked=${Date.now()}`)
assert.equal(blockedStorageI18n.currentLanguage.value, blockedStorageI18n.LANGUAGES.ZH)
assert.doesNotThrow(() => blockedStorageI18n.setLanguage(blockedStorageI18n.LANGUAGES.EN))
assert.equal(blockedStorageI18n.currentLanguage.value, blockedStorageI18n.LANGUAGES.EN)

console.log('i18n behavior tests passed')
