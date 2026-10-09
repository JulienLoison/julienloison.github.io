<script setup lang="ts">

import { useClipboard } from '@vueuse/core'

interface Props {
  code: string,
  path?: string
}
defineProps<Props>();

const { copy, copied, isSupported } = useClipboard()

</script>

<template>
  <div class="overflow-hidden border border-code-muted font-mono text-sm min-w-0">

    <div class="flex items-center justify-between gap-2 px-3 py-1.5 border-b border-code-muted text-xs bg-code text-code-foreground">
      <span v-if="path">{{ path }}</span>
        <UButton
          v-if="isSupported"
          :icon="copied ? 'i-lucide-check' : 'i-lucide-copy'"
          :color="copied ? 'success' : 'neutral'"
          variant="ghost"
          size="xs"
          @click="copy(code)"
          class="ml-auto"
        >
          {{ copied ? 'Copié' : 'Copier' }}
        </UButton>
        <span class="sr-only" aria-live="polite">{{ copied ? 'Code copié' : '' }}</span>
    </div>

    <pre class="p-4 overflow-x-auto bg-code text-code-foreground" tabindex="0"><code>{{ code }}</code></pre>
  </div>
</template>
