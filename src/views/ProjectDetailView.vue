<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import ProjectDetail from '../components/ProjectDetail.vue'
import { getProjects } from '../data/projects'
import { useI18n } from '../i18n/index.js'

// useRoute 取得目前網址資訊，例如 /projects/:id 裡面的 id。
const route = useRoute()
const { currentLanguage, messages } = useI18n()

const projects = computed(() => getProjects(currentLanguage.value))
const labels = computed(() => messages.value.projectDetail)

// 透過 route.params.id 找出對應作品；computed 讓資料依路由參數自動更新。
const project = computed(() => projects.value.find((item) => item.id === route.params.id))
</script>

<template>
  <section>
    <RouterLink class="secondary-link back-link" to="/projects">{{ labels.back }}</RouterLink>

    <ProjectDetail v-if="project" :project="project" :labels="labels" />

    <!-- v-else 處理找不到資料的情況，避免網址 id 錯誤時畫面空白。 -->
    <div v-else class="not-found">
      <p class="eyebrow">{{ labels.notFoundEyebrow }}</p>
      <h1>{{ labels.notFoundTitle }}</h1>
      <p>{{ labels.notFoundDescription(route.params.id) }}</p>
    </div>
  </section>
</template>

<style scoped>
.back-link {
  margin-bottom: 22px;
}

.back-link:hover {
  border-color: #cdb8ff;
  color: #5571c8;
  background: #f7fbff;
}

.not-found {
  border: 1px solid rgba(180, 211, 251, 0.86);
  border-radius: 18px;
  padding: 34px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 14px 30px rgba(81, 124, 190, 0.09);
}

.not-found h1 {
  margin: 0;
  color: #1f2f46;
}

.not-found p:not(.eyebrow) {
  margin: 12px 0 0;
  color: #5b6b80;
}

@media (max-width: 720px) {
  .back-link {
    width: 100%;
    margin-bottom: 16px;
  }

  .not-found {
    border-radius: 16px;
    padding: 22px;
  }
}
</style>
