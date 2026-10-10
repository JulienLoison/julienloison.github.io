<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

interface Props {
  code: string
  path?: string
}
defineProps<Props>()

const { copy, copied, isSupported } = useClipboard()
</script>

<template>
  <div
    class="min-w-0 overflow-hidden border border-code-muted font-mono text-sm"
  >
    <div
      class="flex items-center justify-between gap-2 border-b border-code-muted bg-code px-3 py-1.5 text-xs text-code-foreground"
    >
      <span v-if="path">{{ path }}</span>
      <UButton
        v-if="isSupported"
        :icon="copied ? 'i-lucide-check' : 'i-lucide-copy'"
        :color="copied ? 'success' : 'neutral'"
        variant="ghost"
        size="xs"
        class="ml-auto"
        @click="copy(code)"
      >
        {{ copied ? 'Copié' : 'Copier' }}
      </UButton>
      <span class="sr-only" aria-live="polite">{{
        copied ? 'Code copié' : ''
      }}</span>
    </div>

    <pre
      class="overflow-x-auto bg-code p-4 text-code-foreground"
      tabindex="0"
    ><code>{{ code }}</code></pre>
  </div>
</template>
