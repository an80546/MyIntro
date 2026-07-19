<script setup>
import { computed } from 'vue'
import SkillCard from '../components/SkillCard.vue'
import { getCertifications } from '../data/certification'
import { skills } from '../data/skills'
import { useI18n } from '../i18n/index.js'

const { currentLanguage, messages } = useI18n()

const certifications = computed(() => getCertifications(currentLanguage.value))
const labels = computed(() => messages.value.skills)
</script>

<template>
  <section>
    <header class="page-header">
      <p class="eyebrow">{{ labels.eyebrow }}</p>
      <h1 class="page-title">{{ labels.title }}</h1>
      <p class="page-description">{{ labels.description }}</p>
    </header>

    <div class="skills-grid">
      <!-- 將 skills 陣列用 v-for 轉成多張 SkillCard，並用 props 傳入單一 skill。 -->
      <SkillCard v-for="skill in skills" :key="skill.id" :skill="skill" logo-only />
    </div>

    <section class="certifications-section" aria-labelledby="certifications-title">
      <header class="section-header">
        <p class="eyebrow">{{ labels.certificationsEyebrow }}</p>
        <h2 id="certifications-title">{{ labels.certificationsTitle }}</h2>
      </header>

      <div class="skills-grid">
        <SkillCard
          v-for="certification in certifications"
          :key="certification.id"
          :skill="certification"
        />
      </div>
    </section>
  </section>
</template>

<style scoped>
.certifications-section {
  margin-top: 42px;
}

.section-header {
  margin-bottom: 18px;
}

.section-header h2 {
  margin: 0;
  color: #1f2f46;
  font-size: 1.65rem;
  line-height: 1.25;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

@media (max-width: 720px) {
  .certifications-section {
    margin-top: 34px;
  }

  .section-header {
    margin-bottom: 14px;
  }

  .section-header h2 {
    font-size: 1.42rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
