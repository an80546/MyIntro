<script setup>
// 詳細內容元件只負責顯示 project，資料來源由 ProjectDetailView 透過 props 傳進來。
defineProps({
  project: {
    type: Object,
    required: true,
  },
  labels: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="detail-card">
    <div class="detail-heading">
      <div>
        <p class="eyebrow">{{ project.category }}</p>
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <!-- v-if 是條件渲染；只有作品資料有 demoUrl 時才顯示外部網站按鈕。 -->
        <a
          v-if="project.demoUrl"
          class="demo-link"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ labels.visitSite }}
        </a>
      </div>
      <dl class="meta-grid">
        <div>
          <dt>{{ labels.year }}</dt>
          <dd>{{ project.year }}</dd>
        </div>
        <div>
          <dt>{{ labels.role }}</dt>
          <dd>{{ project.role }}</dd>
        </div>
      </dl>
    </div>

    <div class="detail-section">
      <h2>{{ labels.technologies }}</h2>
      <ul class="tag-list">
        <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
      </ul>
    </div>

    <div class="detail-section">
      <h2>{{ labels.features }}</h2>
      <ul class="feature-list">
        <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
      </ul>
    </div>

    <div class="result-box">
      <h2>{{ labels.result }}</h2>
      <p>{{ project.result }}</p>
    </div>
  </article>
</template>

<style scoped>
.detail-card {
  border: 1px solid rgba(180, 211, 251, 0.86);
  border-radius: 20px;
  padding: 34px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 18px 42px rgba(81, 124, 190, 0.12);
}

.detail-heading {
  display: grid;
  grid-template-columns: 1fr 290px;
  gap: 34px;
  align-items: start;
}

h1 {
  margin: 0;
  color: #1f2f46;
  font-size: 2.4rem;
  line-height: 1.16;
}

.detail-heading p:not(.eyebrow) {
  margin: 16px 0 0;
  color: #5b6b80;
  font-size: 1.05rem;
}

.demo-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 22px;
  border-radius: 999px;
  padding: 11px 18px;
  color: #ffffff;
  background: linear-gradient(135deg, #6aaef7, #8d8cf4);
  font-weight: 800;
  box-shadow: 0 10px 24px rgba(96, 151, 237, 0.24);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.demo-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(151, 138, 238, 0.24);
}

.meta-grid {
  display: grid;
  gap: 14px;
  margin: 0;
}

.meta-grid div {
  border: 1px solid rgba(205, 224, 251, 0.78);
  border-radius: 16px;
  padding: 18px;
  background: #f7fbff;
}

dt {
  color: #65768c;
  font-size: 0.86rem;
  font-weight: 800;
}

dd {
  margin: 6px 0 0;
  color: #1f2f46;
  font-weight: 800;
}

.detail-section {
  margin-top: 34px;
}

h2 {
  margin: 0;
  color: #1f2f46;
  font-size: 1.25rem;
}

.tag-list,
.feature-list {
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag-list li {
  border: 1px solid rgba(202, 216, 255, 0.9);
  border-radius: 999px;
  padding: 8px 12px;
  color: #5571c8;
  background: linear-gradient(135deg, #eef8ff, #f8f0ff);
  font-weight: 800;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.feature-list li,
.result-box {
  border-radius: 16px;
  padding: 16px;
  background: #f8fbff;
}

.result-box {
  margin-top: 34px;
  border-left: 4px solid #8d8cf4;
}

.result-box p {
  margin: 10px 0 0;
  color: #4f6074;
}

@media (max-width: 840px) {
  .detail-heading {
    grid-template-columns: 1fr;
  }

  .feature-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .detail-card {
    border-radius: 16px;
    padding: 22px;
  }

  .detail-heading {
    gap: 24px;
  }

  h1 {
    font-size: clamp(1.85rem, 9vw, 2.25rem);
  }

  .detail-heading p:not(.eyebrow) {
    font-size: 0.98rem;
    line-height: 1.75;
  }

  .demo-link {
    width: 100%;
    min-height: 44px;
    border-radius: 8px;
  }

  .meta-grid {
    gap: 10px;
  }

  .meta-grid div {
    border-radius: 14px;
    padding: 14px;
  }

  .detail-section,
  .result-box {
    margin-top: 28px;
  }

  .tag-list {
    gap: 8px;
  }

  .tag-list li {
    font-size: 0.84rem;
  }

  .feature-list li,
  .result-box {
    border-radius: 14px;
    padding: 14px;
  }
}
</style>
