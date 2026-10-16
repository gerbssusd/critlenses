<script setup lang="ts">
// Full-bleed image with a dark gradient scrim; slot content sits on the left.
const props = defineProps<{ image: string; position?: string; credit?: string }>()
</script>

<template>
  <div class="slidev-layout dark-section hero">
    <div class="hero-img" :style="{ backgroundImage: `url(${props.image})`, backgroundPosition: props.position || 'center' }" />
    <div class="hero-scrim" />
    <div class="hero-body"><slot /></div>
    <p v-if="props.credit" class="credit">{{ props.credit }}</p>
  </div>
</template>

<style scoped>
.hero { position: relative; overflow: hidden; display: grid; align-items: center; }
.hero-img { position: absolute; inset: 0; background-size: cover; filter: saturate(0.85); }
.hero-scrim { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(20,16,13,.94) 0%, rgba(20,16,13,.78) 45%, rgba(20,16,13,.15) 100%); }
.hero-body { position: relative; max-width: 58%; }
</style>
