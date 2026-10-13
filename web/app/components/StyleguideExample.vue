<script setup lang="ts">
import type { Example } from '~/styleguide/types.ts'

interface Props {
  example: Example
}
defineProps<Props>()
</script>

<template>
  <UCollapsible>
    <template #default="{ open }">
      <button
        class="relative flex w-full cursor-pointer flex-col space-y-2 border border-default p-3 select-none"
      >
        <span class="text-left">
          <span class="text-lg font-semibold text-highlighted">{{
            example.description.name
          }}</span>
          -
          <span class="text-sm text-muted">{{
            example.description.usage
          }}</span>
        </span>
        <UIcon
          name="i-lucide-chevron-down"
          class="absolute top-3 right-3 h-5 w-5 text-muted transition-transform duration-200"
          :class="{ 'rotate-180': open }"
        />
      </button>
    </template>

    <template #content>
      <div
        class="min-w-0 border border-t-0 border-b-0 border-default bg-default p-6"
      >
        <component
          :is="example.component"
          :role="example.description.presentation ? 'presentation' : null"
        />
      </div>
      <CodeBlock :code="example.snippet" :path="example.location.path" />
    </template>
  </UCollapsible>
</template>
