// Optional: download every Wikimedia Commons image used in slides.md into
// public/images/ and point the slides at the local copies, so the deck no
// longer depends on Wikimedia at view time.  Usage:  npm run localize
import { readFile, writeFile, mkdir } from 'node:fs/promises'

const src = await readFile('slides.md', 'utf8')
const re = /https:\/\/commons\.wikimedia\.org\/wiki\/Special:FilePath\/([^"'?\s)]+)\?width=\d+/g
const urls = [...new Set([...src.matchAll(re)].map(m => m[0]))]
await mkdir('public/images', { recursive: true })
let out = src
for (const url of urls) {
  const name = decodeURIComponent(url.match(/FilePath\/([^?]+)/)[1])
    .replace(/[^\w.-]+/g, '-').replace(/-+/g, '-').toLowerCase()
  const res = await fetch(url, { headers: { 'User-Agent': 'slidev-deck-localizer/1.0 (educational use)' } })
  if (!res.ok) { console.warn('skip', res.status, url); continue }
  await writeFile(`public/images/${name}`, Buffer.from(await res.arrayBuffer()))
  out = out.split(url).join(`/images/${name}`)
  console.log('saved', name)
}
await writeFile('slides.md', out)
console.log(`Localized ${urls.length} image(s).`)
