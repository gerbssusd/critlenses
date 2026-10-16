<script setup lang="ts">
// Approximate emergence of each school, by decade (from the guide's dates).
const rows = [
  { name: 'Historical / Biographical', start: 1880, fam: 'm' },
  { name: 'Psychoanalytic', start: 1900, fam: 'm' },
  { name: 'Marxist', start: 1920, fam: 'm' },
  { name: 'New Criticism', start: 1930, fam: 't' },
  { name: 'Archetypal', start: 1930, fam: 'm' },
  { name: 'Structuralism', start: 1950, fam: 't', end: 1980 },
  { name: 'Deconstruction', start: 1960, fam: 't' },
  { name: 'Reader-Response', start: 1960, fam: 't' },
  { name: 'Feminist', start: 1960, fam: 'i' },
  { name: 'Critical Race / Postcolonial', start: 1970, fam: 'i' },
  { name: 'New Historicism', start: 1980, fam: 'm' },
  { name: 'Gender / Queer / Eco / Disability', start: 1990, fam: 'i' },
]
const colors: Record<string, string> = { t: '#2F5D62', m: '#8A5A14', i: '#7A2E2E' }
const x0 = 230, x1 = 900, y0 = 30, rowH = 27
const sx = (yr: number) => x0 + ((yr - 1880) / (2030 - 1880)) * (x1 - x0)
const decades = [1880, 1900, 1920, 1940, 1960, 1980, 2000, 2020]
</script>

<template>
  <svg viewBox="0 0 920 380" class="tl" role="img" aria-label="Timeline showing when each school of criticism emerged, from historical criticism in the late 1800s to gender, queer, eco and disability studies in the 1990s.">
    <g v-for="d in decades" :key="d">
      <line :x1="sx(d)" :x2="sx(d)" :y1="y0 - 8" :y2="y0 + rows.length * rowH" class="grid" />
      <text :x="sx(d)" :y="y0 + rows.length * rowH + 22" class="tick" text-anchor="middle">{{ d }}</text>
    </g>
    <g v-for="(r, i) in rows" :key="r.name">
      <text :x="x0 - 12" :y="y0 + i * rowH + 15" class="name" text-anchor="end">{{ r.name }}</text>
      <rect :x="sx(r.start)" :y="y0 + i * rowH + 4" :width="sx(r.end || 2026) - sx(r.start)" height="15" rx="7.5"
            :fill="colors[r.fam]" class="bar" :style="{ animationDelay: `${i * 0.08}s` }" />
    </g>
  </svg>
  <div class="legend">
    <span><i style="background:#2F5D62" /> Text-centered</span>
    <span><i style="background:#8A5A14" /> Mind &amp; history</span>
    <span><i style="background:#7A2E2E" /> Identity &amp; power</span>
  </div>
</template>

<style scoped>
.tl { width: 100%; height: auto; }
.grid { stroke: var(--c-rule); stroke-width: 1; }
.tick { font-size: 13px; fill: var(--c-muted); font-family: var(--font-body); }
.name { font-size: 14px; fill: var(--c-ink); font-family: var(--font-body); }
.bar { transform-box: fill-box; transform-origin: left; animation: grow 0.8s ease-out both; }
@keyframes grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
@media print { .bar { animation: none; } }
.legend { display: flex; gap: 1.4rem; justify-content: center; font-size: 0.8rem; color: var(--c-muted); margin-top: -0.2rem; }
.legend i { display: inline-block; width: 0.9rem; height: 0.9rem; border-radius: 3px; vertical-align: -2px; margin-right: 0.3rem; }
</style>
