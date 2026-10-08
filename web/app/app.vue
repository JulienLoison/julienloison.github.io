<script setup lang="ts">
  useHead({
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
    ]
  })
</script>

<template>
  <UApp>
    <div>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </div>
  </UApp>
</template>
