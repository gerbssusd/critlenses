<script setup lang="ts">
// One text enters the prism; three bands of meaning emerge.
const bands = [
  { label: 'Form & language', color: '#3E7C82', y: 70 },
  { label: 'Mind & history', color: '#B08D57', y: 150 },
  { label: 'Identity & power', color: '#A04848', y: 230 },
]
</script>

<template>
  <svg class="prism" viewBox="0 0 560 300" role="img" aria-label="A beam labeled 'the text' enters a prism and separates into three colored bands: form and language, mind and history, identity and power.">
    <defs>
      <linearGradient id="glass" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#ffffff" stop-opacity="0.55" />
        <stop offset="1" stop-color="#d9d2c3" stop-opacity="0.15" />
      </linearGradient>
    </defs>
    <line class="beam in" x1="10" y1="150" x2="215" y2="150" />
    <text x="20" y="136" class="lbl light">the text</text>
    <polygon points="230,40 330,260 130,260" fill="url(#glass)" stroke="currentColor" stroke-opacity="0.55" stroke-width="2" />
    <g v-for="(b, i) in bands" :key="b.label">
      <path class="beam out" :style="{ stroke: b.color, animationDelay: `${0.6 + i * 0.25}s` }" :d="`M 262 150 C 330 150, 360 ${b.y}, 420 ${b.y} L 550 ${b.y}`" />
      <text :x="428" :y="b.y - 10" class="lbl" :fill="b.color">{{ b.label }}</text>
    </g>
  </svg>
</template>

<style scoped>
.prism { width: 100%; height: auto; color: var(--c-ink); }
.beam { fill: none; stroke-width: 6; stroke-linecap: round; }
.beam.in { stroke: var(--c-ink); opacity: 0.8; }
.beam.out { stroke-dasharray: 520; stroke-dashoffset: 520; animation: draw 1.2s ease-out forwards; }
.lbl { font-family: var(--font-head); font-size: 17px; font-weight: 600; }
.lbl.light { fill: var(--c-ink); }
@keyframes draw { to { stroke-dashoffset: 0; } }
@media print { .beam.out { stroke-dashoffset: 0; animation: none; } }
</style>
