<script setup lang="ts">
defineProps<{
  name: string
  era?: string
  focus: string
  question?: string
  color?: string
  compact?: boolean
}>()
</script>

<template>
  <article class="lens-card" :class="{ compact }" :style="{ '--lens': color || 'var(--c-oxblood)' }">
    <header>
      <span class="lens-glyph" aria-hidden="true">
        <svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="6.5" /><path d="M15 15l6 6" /></svg>
      </span>
      <div>
        <h3>{{ name }}</h3>
        <p v-if="era" class="era">{{ era }}</p>
      </div>
    </header>
    <p class="focus">{{ focus }}</p>
    <p v-if="question" class="question">{{ question }}</p>
  </article>
</template>

<style scoped>
.lens-card {
  background: var(--c-card);
  border: 1px solid color-mix(in srgb, var(--lens) 28%, transparent);
  border-radius: 14px;
  padding: 0.9rem 1rem;
  box-shadow: 0 10px 24px -18px rgba(0, 0, 0, 0.55);
}
.grid-cards > .lens-card, .grid > .lens-card { height: 100%; }
header { display: flex; gap: 0.6rem; align-items: center; margin-bottom: 0.35rem; }
.lens-glyph {
  flex: none; width: 2rem; height: 2rem; border-radius: 999px;
  background: var(--lens); display: grid; place-items: center;
}
.lens-glyph svg { width: 1.1rem; height: 1.1rem; fill: none; stroke: #fff; stroke-width: 2.2; stroke-linecap: round; }
h3 { margin: 0 !important; font-size: 1.05rem !important; line-height: 1.2; color: var(--lens) !important; font-family: var(--font-head); }
.era { margin: 0 !important; font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--c-muted); }
.focus { margin: 0.25rem 0 0.4rem !important; font-size: 0.86rem; line-height: 1.4; }
.question { margin: 0 !important; font-size: 0.84rem; line-height: 1.4; font-style: italic; color: var(--c-ink-2); border-top: 1px dashed color-mix(in srgb, var(--lens) 35%, transparent); padding-top: 0.4rem; }
.compact { padding: 0.65rem 0.8rem; }
.compact .focus { font-size: 0.78rem; }
.compact .question { font-size: 0.78rem; }
.compact h3 { font-size: 0.95rem !important; }
</style>
