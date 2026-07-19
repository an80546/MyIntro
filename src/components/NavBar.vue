<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from '../i18n/index.js'

const route = useRoute()
const { currentLanguage, languages, messages, setLanguage, isLanguage } = useI18n()
</script>

<template>
  <header class="nav-wrap">
    <nav class="nav-bar" :aria-label="messages.nav.ariaLabel">
      <RouterLink class="brand" to="/">
        <span>{{ messages.nav.brand }}</span>
      </RouterLink>

      <div class="nav-actions">
        <div class="nav-links">
          <RouterLink to="/">{{ messages.nav.home }}</RouterLink>
          <RouterLink to="/skills">{{ messages.nav.skills }}</RouterLink>
          <RouterLink to="/projects" :class="{ 'router-link-active': route.path.startsWith('/projects') }">
            {{ messages.nav.projects }}
          </RouterLink>
        </div>

        <div class="language-switcher" role="group" :aria-label="messages.nav.languageLabel">
          <button
            type="button"
            :aria-pressed="isLanguage(languages.ZH)"
            :class="{ active: currentLanguage === languages.ZH }"
            @click="setLanguage(languages.ZH)"
          >
            中文
          </button>
          <button
            type="button"
            :aria-pressed="isLanguage(languages.EN)"
            :class="{ active: currentLanguage === languages.EN }"
            @click="setLanguage(languages.EN)"
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-wrap {
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid rgba(194, 218, 250, 0.75);
  background: rgba(250, 253, 255, 0.86);
  backdrop-filter: blur(14px);
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1120px, calc(100% - 64px));
  min-height: 72px;
  margin: 0 auto;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #1f2f46;
  font-weight: 800;
}

.brand-mark {
  position: relative;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border-radius: 14px;
  color: #ffffff;
  background: linear-gradient(135deg, #75b8ff, #9b8cf4);
  box-shadow: 0 12px 22px rgba(109, 160, 238, 0.28);
}

.brand-mark::after {
  position: absolute;
  right: -5px;
  bottom: -3px;
  content: "🐾";
  font-size: 0.78rem;
  filter: drop-shadow(0 2px 4px rgba(97, 132, 205, 0.2));
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-links a {
  position: relative;
  border-radius: 8px;
  padding: 9px 14px;
  color: #586a82;
  font-weight: 700;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #4f8fe8;
  background: #eef7ff;
  box-shadow: 0 8px 20px rgba(151, 138, 238, 0.14);
}

.nav-links a::after {
  position: absolute;
  right: 14px;
  bottom: 5px;
  left: 14px;
  height: 2px;
  content: "";
  border-radius: 999px;
  background: linear-gradient(90deg, #8fc8ff, #d9a8ff);
  opacity: 0;
  transform: scaleX(0.6);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  opacity: 1;
  transform: scaleX(1);
}

.language-switcher {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border: 1px solid rgba(205, 224, 251, 0.9);
  border-radius: 8px;
  padding: 4px;
  background: rgba(255, 255, 255, 0.76);
}

.language-switcher button {
  min-width: 48px;
  min-height: 34px;
  border: 0;
  border-radius: 6px;
  color: #586a82;
  background: transparent;
  font-weight: 800;
  cursor: pointer;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
}

.language-switcher button:hover,
.language-switcher button.active {
  color: #ffffff;
  background: linear-gradient(135deg, #6aaef7, #8d8cf4);
  box-shadow: 0 6px 10px rgba(96, 151, 237, 0.18);
}

@media (max-width: 720px) {
  .nav-bar {
    width: min(100% - 32px, 560px);
    min-height: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    padding: 12px 0;
  }

  .brand {
    justify-content: center;
    gap: 10px;
  }

  .brand-mark {
    width: 38px;
    height: 38px;
    border-radius: 12px;
  }

  .nav-actions {
    display: grid;
    gap: 10px;
  }

  .nav-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .nav-links a {
    display: inline-flex;
    min-height: 42px;
    align-items: center;
    justify-content: center;
    padding: 8px 10px;
    text-align: center;
  }

  .nav-links a::after {
    right: 10px;
    left: 10px;
  }

  .language-switcher {
    justify-content: center;
  }

  .language-switcher button {
    flex: 1;
    min-height: 42px;
  }
}
</style>
