<script setup>
import { computed } from 'vue'
import ProfileCard from '../components/ProfileCard.vue'
import { getProfile } from '../data/profile'
import { useI18n } from '../i18n/index.js'

const { currentLanguage, messages } = useI18n()

const profile = computed(() => getProfile(currentLanguage.value))
const profileLabels = computed(() => messages.value.profile)
const homeLabels = computed(() => messages.value.home)
</script>

<template>
  <div class="home-view">
    <ProfileCard :profile="profile" :labels="profileLabels" :actions="homeLabels" />
  </div>
</template>

<style scoped>
.home-view {
  display: grid;
  min-height: calc(100vh - 178px);
  align-items: center;
}

@media (max-width: 720px) {
  .home-view {
    min-height: 0;
    align-items: stretch;
  }
}
</style>
