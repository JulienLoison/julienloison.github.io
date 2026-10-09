<script setup lang="ts">
  useHead({
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
    ]
  })
</script>

<template>
  <UApp>
      <NuxtRouteAnnouncer />
      <NuxtLoadingIndicator />

      <AppHeader />

      <UMain>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </UMain>
  </UApp>
</template>
