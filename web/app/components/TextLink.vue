<script setup lang="ts">
interface Props {
  to: string
}
const props = defineProps<Props>()
const isExternalLink = computed(() => props.to.startsWith('http'))
</script>
<template>
  <NuxtLink
    class="font-semibold text-secondary underline underline-offset-2 hover:decoration-2"
    :to="to"
  >
    <slot />
    <template v-if="isExternalLink"
      ><UIcon name="i-lucide-square-arrow-out-up-right" class="size-3.5" /><span
        class="sr-only"
        >(site externe)</span
      ></template
    >
  </NuxtLink>
</template>
