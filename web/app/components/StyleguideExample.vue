<script setup lang="ts">
import type { Example } from '~/styleguide/types.ts'

interface Props {
  example: Example
}
defineProps<Props>()
</script>

<template>
  <article class="space-y-3">
    <h3 class="text-lg font-semibold text-highlighted">
      {{ example.description.name }}
    </h3>
    <p class="text-sm text-muted">{{ example.description.usage }}</p>

    <div class="min-w-0 border border-default bg-default p-6">
      <component :is="example.component" />
    </div>
    <CodeBlock :code="example.snippet" :path="example.location.path" />
  </article>
</template>
